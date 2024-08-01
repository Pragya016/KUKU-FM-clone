import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Show from '../components/Show';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link, useLocation } from 'react-router-dom';
import styles from './css/allShowsComponent.module.css'

export default function AllShowsComponent() {
  const [showData, setShowData] = useState([]);
  const [page, setPage] = useState(2);
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const title = query.get('title');
  const id = query.get('id');
  let Uri;

  async function fetchData() {
    try {
      const { data } = await axios.get(`https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=${page}&lang=english`);
      const filteredItems = data.items.filter(item => item.id == id);
      Uri = filteredItems[0].uri;
      // const filteredShows = filteredItems.flatMap(item => item.shows);
      return filteredItems[0].shows;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // this useEffect will display the initial data
  useEffect(() => {
    fetchData().then(data => {
      setShowData([...data, ...data]);
    });
  }, []);

  // this useEffect will handle the scroll and as soon as user reaches the bottom...
  useEffect(() => {
    async function loadMoreData() {
      // const newData = await fetchData();
      // setShowData(prevData => [...prevData, ...newData]);
      const { data } = await axios.get(`https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=${page}&lang=english/groups/trending-now/shows/?exclude_listened_shows=True"`);
      console.log(data)
    }

    function handleScroll() {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 50) {
        setPage(prevPage => prevPage + 1);
        loadMoreData();
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <><div id={styles.container}>
      <Link to="/" id={styles.rootText}>Home</Link><ArrowForwardIosIcon id={styles.arrowIcon} /><span id={styles.categoryText}>{title}</span>
      <h4 id={styles.title}>{title}</h4>
    </div>
      <div id={styles.showsContainer}>
        {showData.map((item, index) => (
            <Show key={index} show={item} />
        ))}
      </div>
    </>
  );
}