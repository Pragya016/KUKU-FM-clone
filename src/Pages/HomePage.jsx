import React from 'react'
import List from '../components/List'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'

export default function Home() {

  return (
    <>
      {/* <Carousel/> */}
      <List id='285' showPlayButton={true} />
      <Categories/>
      <List id='410' showPlayButton={false}/>
      <List id='380' showPlayButton={false}/>
      <List id='378' showPlayButton={false}/>
      <List id='377' showPlayButton={false}/>
    </>
  )
}
