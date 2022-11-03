import React from 'react';
import styles from './cardheader.scss';
import { Menu } from '../Menu/Menu';
import { Metadata } from '../../../Metadata';
import { Link } from 'react-router-dom';

interface ICardHeaderProps {
  title?: string;
  author?: string;
  created?: string;
  link?: string;
  author_icon?: string;
  selftext?: string;
  id: string;
}

export function CardHeader({title, author, created, author_icon, selftext, id}: ICardHeaderProps) {
  return (
    <div className={styles.cardheader}>
      <div className={styles.cardHeaderBox}>
        <Metadata 
          author={author}
          author_icon={author_icon}
          created={created}
          type={'postCard'}
        />
        {title
          ? <Link to={{pathname:`/posts/${id}`, state: {title: title, selftext: selftext}}} ><h2 className={styles.cardTitle}>{title}</h2></Link>
          : <h2 className={styles.cardTitle}>Diagon Ally to report record number of magic wonds produced by Olivander family</h2>
        }
      </div>
      <div className={styles.dropdown}>
        <Menu />
      </div>
    </div>
  );
}
