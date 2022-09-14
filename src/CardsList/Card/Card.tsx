import React from 'react';
import styles from './card.scss';
import { CardControls } from './CardControls';
import { CardHeader } from './CardHeader';
import { CardPreview } from './CardPreview';

interface ICardProps {
  title: string;
  author: string;
  thumbnail?: string;
  created?: string;
  link?: string;
  comments?: number;
  ups?: number;
  url: string;
  selftext?: string;
  id: string;
}

export function Card({title, author, created, thumbnail, link, comments, ups, url, selftext, id}: ICardProps) {
  
  return (
    <li className={styles.card}>
      <CardHeader 
        title={title}
        author={author}
        created={created}
        link={link}
        selftext={selftext}
        id={id}
      />
      <CardPreview 
        thumbnail={thumbnail} 
        url={url}
      />
      <CardControls 
        comments={comments}
        ups={ups}
      />
    </li>
  );
}
