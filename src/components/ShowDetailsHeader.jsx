import React, { useContext } from 'react'
import { appContext } from '../App'
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import styles from './css/showDetailsHeader.module.css';
import { Button } from '@mui/material';

function formatNumberToWords(number) {
    if (number >= 100000) {
        return `${(number / 100000).toFixed(2)} Lakhs`;
    } else if (number >= 1000) {
        return `${(number / 1000).toFixed(2)} Thousand`;
    } else if (number >= 100) {
        return `${(number / 100).toFixed(2)} Hundred`;
    } else {
        return `${number}`;
    }
}

export default function ShowDetailsHeader() {
    const {show} = useContext(appContext)
    const hours = Math.floor(show.duration_s / 3600);
    const minutes = Math.floor((show.duration_s % 3600) / 60);
    const duration = `${hours > 0 ? hours : 0} h ${minutes > 0 ? minutes : 0} min`
    const listens = formatNumberToWords(show.n_listens);


  return (
      <div id={styles.mainContainer}>
          <p id={styles.title}>{show.title}</p>
          <div id={styles.commonDesc}>
              <div id={styles.commonLeftSide}>
                  <span id={styles.ageConstraints}>{ show.labels[1] }</span>
                  <span className={styles.text}>{ listens } <span id={styles.listens}>Listens</span></span>
              </div>
              <div id={styles.commonRightSide}>
                  <span className={styles.text}>{show.overall_rating.toFixed(1) }</span>
              </div>
          </div>
          <div id={styles.additionalDesc}>
              <div id={styles.additionalLeftSide}>
                  <span id={styles.language} className={styles.text}>Hindi | English</span>
                  <span id={styles.category} className={styles.text}>Thriller</span>
              </div>
              <div>
                  <span id={styles.duration} className={styles.text}>{duration }</span>
              </div>
          </div>
          <Button variant='contained' id={styles.freeTrialBtn}>Get Free Trial</Button>
          <div id={styles.buttonsContainer}>
              <TurnedInNotIcon id={styles.bookmarkIcon} />
              <Button variant='contained' id={styles.playBtn}><PlayArrowIcon/><span>Play</span></Button>
          </div>
      </div>
  )
}
