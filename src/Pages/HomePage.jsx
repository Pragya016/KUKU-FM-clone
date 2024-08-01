import React, { lazy, Suspense } from 'react';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';

const List = lazy(() => import('../components/List'));

export default function Home() {
  return (
    <>
      <Carousel />
      <Suspense fallback={<div style={{textAlign: 'center'}}>Please wait...</div>}>
        <List id='285' showPlayButton={true} listStyles={{ marginTop: '40px' }} />
      </Suspense>
      <Categories />
      <Suspense fallback={<div style={{textAlign: 'center'}}>Please wait...</div>}>
        <List id='410' showPlayButton={false} listStyles={{ marginTop: '40px' }} />
      </Suspense>
      <Suspense fallback={<div style={{textAlign: 'center'}}>Please wait...</div>}>
        <List id='380' showPlayButton={false} listStyles={{ marginTop: '30px' }} />
      </Suspense>
      <Suspense fallback={<div style={{textAlign: 'center'}}>Please wait...</div>}>
        <List id='378' showPlayButton={false} listStyles={{ marginTop: '60px' }} />
      </Suspense>
      <Suspense fallback={<div style={{textAlign: 'center'}}>Please wait...</div>}>
        <List id='377' showPlayButton={false} listStyles={{ marginTop: '30px' }} />
      </Suspense>
    </>
  );
}
