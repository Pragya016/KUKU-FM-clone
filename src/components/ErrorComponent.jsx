import React from 'react'
import styles from './css/errorComponent.module.css';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div id={styles.container}>
          <p id={styles.title}>Lost?</p>
          <p id={styles.desc}>This page is either unavailable or doesn't exist</p>
          <img src="https://d1l07mcd18xic4.cloudfront.net/static/404.svg" alt="error-img" id={styles.image} />
        <Link id={styles.navLink} to='/'>Return To Home</Link>
    </div>
  )
}
