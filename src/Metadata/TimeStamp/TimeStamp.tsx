import React from 'react';
import styles from './timestamp.scss';

interface ITimeStamp {
  created?: string;
}

export function TimeStamp({created}: ITimeStamp) {
  return (
    <div>
      {created
        ? <p className={styles.timestamp}><span className={styles.timestampDesktop}>Published</span>{created}</p>
        : <p className={styles.timestamp}><span className={styles.timestampDesktop}>Published</span>2021-05-30</p>
      }
    </div>
  );
}
