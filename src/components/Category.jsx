import React from 'react'
import styles from './css/category.module.css';

export default function Category({ catData }) {
  return (
    <div id={styles.box}>
          <img src={catData.image} alt={catData.title} id={styles.catImage} />
          <p id={styles.title}>{ catData.title }</p>
    </div>
  )
}
