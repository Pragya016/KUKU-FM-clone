import React from 'react'
import List from '../components/List'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'

export default function Home() {

  return (
    <>
      <Carousel/>
      {/* <List id='443' showPlayButton={true} /> */}
      {/* <List id='1003' showPlayButton={true} /> */}
      <List id='285' showPlayButton={true} listStyles={{marginTop:'40px'}}/>
      <Categories/>
      <List id='410' showPlayButton={false} listStyles={{marginTop:'40px'}}/>
      <List id='380' showPlayButton={false} listStyles={{marginTop:'30px'}}/>
      <List id='378' showPlayButton={false} listStyles={{marginTop:'60px'}}/>
      <List id='377' showPlayButton={false} listStyles={{marginTop:'30px'}}/>
    </>
  )
}
