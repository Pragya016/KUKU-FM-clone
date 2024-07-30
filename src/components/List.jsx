import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from './ListItem';
import styles from './css/list.module.css';
import Show from './Show';
import { useNavigate } from 'react-router-dom';

export default function List({ id, showPlayButton, listStyles }) {
    const [listItems, setListItems] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=2&lang=english');
            const filteredData = data.items.filter(item => item.id == id);
            setListItems(filteredData[0]);
        }

        fetchData();
    }, [id])

    function handleDisplayAllShows(categoryId) {
        navigate(`all-shows?title=${listItems.title}&id=${categoryId}`);
    }

    return (
        <div id={styles.container} style={listStyles}>
            <div id={styles.topContainer} onClick={() => handleDisplayAllShows(id)}>
                <span id={styles.listHeading}>{listItems.title}</span><span><ArrowForwardIosIcon fontSize='small' id={styles.arrowIcon} /></span>
            </div>
            <div id={styles.listContainer}>
                {listItems.shows && listItems.shows.length > 0 && listItems.shows.map(show => (
                <>
                    {showPlayButton && <ListItem key={show.id} show={show} />}
                    {!showPlayButton && <Show key={show.id} show={show}/>}
                </>        
                ))}
            </div>
        </div>
    )
}
