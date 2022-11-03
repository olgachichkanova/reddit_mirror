import React, { useEffect, useRef, useState } from 'react';
import styles from './cardheader.scss';
import { Menu } from '../Menu/Menu';
import { Post } from '../../../Post';
import { Metadata } from '../../../Metadata';

interface ICardHeaderProps {
  title?: string;
  author?: string;
  created?: string;
  link?: string;
  author_icon?: string;
  selftext?: string;
  id: string;
}

export function CardHeader({title, author, created, link, selftext, author_icon, id}: ICardHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <div className={styles.cardheader}>
      <div className={styles.cardHeaderBox} onClick={() => {setIsModalOpened(true)}} ref={ref}>
        <Metadata 
          author={author}
          author_icon={author_icon}
          created={created}
          type={'postCard'}
        />
        {title
          ? <a href="#post-link"><h2 className={styles.cardTitle}>{title}</h2></a>
          : <h2 className={styles.cardTitle}>Diagon Ally to report record number of magic wonds produced by Olivander family</h2>
        }
         {isModalOpened && (
        <Post 
          title={title}
          selftext={selftext}
          onClose={()=>{setIsModalOpened(false)}}
          id={id}
        />
      )}
      </div>
      <div className={styles.dropdown}>
        <Menu />
      </div>
    </div>
  );
}
