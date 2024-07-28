import React, { useContext } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import styles from './css/listItem.module.css'
import { appContext } from '../App';
import { useNavigate } from 'react-router-dom';

export default function ListItem({ show }) {
  
  const { setShow } = useContext(appContext);
  const navigate = useNavigate();

  function handleOpenShow() {
    setShow(show);
    navigate(show.web_uri)
  }

  return (
    <div id={styles.showContainer} onClick={handleOpenShow}>
        <div>
            <img src={show.image} alt={show.title} id={styles.showImage} />
        </div>
        <div id={styles.bottomContainer}>
        <p id={styles.showTitle}>{ show.title }</p>
        <PlayArrowIcon id={styles.playIcon} />
        </div>  
    </div>
  )
}
