import React, { useContext, useEffect, useState } from 'react'
import { appContext } from '../App';
import styles from './css/showDetails.module.css'
import ShowDetailsHeader from './ShowDetailsHeader';
import Description from './Description';
import TabsPanel from './TabsPanel';
import ErrorPage from './ErrorComponent';

export default function ShowDetails() {
  const { show } = useContext(appContext);
  const [image, setImage] = useState('');
  useEffect(() => {
    // async function getShow() {
    //   const { data } = await axios.get('https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=2&lang=english&id=285');
    //   console.log(data)
    // }

    // getShow()
    if (show) {
      setImage(show.other_images.landscape_image_sizes[360]);
    }
  }, [])
  
  if(!show || show == {} ) return (<ErrorPage/>)
    

  return (
    <div id={styles.mainContainer}>
      <img src={image} alt={show.slug} id={styles.image} />
      <ShowDetailsHeader />
      <Description desc={show.description} descStyles={{ marginTop: '30px' }} />
      <TabsPanel/>
    </div>
  )
}
