import React, { useContext } from 'react';
import { appContext } from '../App';
import { useNavigate } from 'react-router-dom';
import styles from './css/show.module.css'

export default function Show({ show }) {
  
  const { setShow } = useContext(appContext);
  const navigate = useNavigate();

  function handleOpenShow() {
    setShow(show);
    navigate(show.web_uri)
  }

  return (
    <div id={styles.box} onClick={handleOpenShow}>
        <img src={show.image} alt={show.title} id={styles.showImage} />
        <p id={styles.title}>{ show.title }</p>
    </div>
  )
}
