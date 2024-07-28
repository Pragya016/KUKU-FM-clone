import React, { useState } from 'react';
import styles from './css/description.module.css';

export default function Description ({ desc , descStyles }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div style={{margin:'15px'}}>
            <p className={`${styles.text} ${isExpanded ? styles.expanded : styles.truncated}`} style={descStyles}>
                {desc}
            </p>
            <p onClick={toggleExpand} id={styles.expandBtn}>
                {isExpanded ? 'Show Less' : 'Show More'}
            </p>
        </div>
    );
};