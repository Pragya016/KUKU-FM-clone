import React from 'react'
import styles from './css/categories.module.css';
import Category from './Category';

const categories = [
    { title: 'Motivation', image: 'https://d1l07mcd18xic4.cloudfront.net/category_icons/icon_motivation.svg' },
    { title: 'Love', image: 'https://d1l07mcd18xic4.cloudfront.net/genre_icons/love_0605.svg' },
    { title: 'New Releases', image: 'https://d1l07mcd18xic4.cloudfront.net/category_icons/3f9030bd98cc4d9f950fff782df30dc2.svg' },
    { title: 'Horror', image: 'https://d1l07mcd18xic4.cloudfront.net/category_icons/icon_horror.svg' }
];

export default function Categories() {
  return (
    <div id={styles.container}>
        {categories.map((category, index) => (
            <Category key={index} catData={category} />
        ))}
    </div>
  )
}
