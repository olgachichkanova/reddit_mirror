import React from 'react';
import styles from './notfound.scss';
import { Text } from '../Text'
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className={styles.notfound}>
      <Text As={'h2'} size={20} children={"404 - Page not found"}/>
      <Link className={styles.link} to='/posts'>Go to your feed</Link>
    </div>
  );
}
