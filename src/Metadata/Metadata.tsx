import classNames from 'classnames';
import React from 'react';
import { AuthorComponent } from './AuthorComponent';
import styles from './metadata.scss';
import { TimeStamp } from './TimeStamp';

interface IMetaData {
  author_icon?: string;
  author?: string;
  created?: string;
  type?: 'postCard' | 'commentCard' | 'defaultCard';
}


export function Metadata(props: IMetaData) {
  const {author_icon, author, created, type = 'defaultCard'} = props;
  const classes = classNames(
    styles.cardMeta,
    styles[type]
  );
  return (
    <div className={classes}>
        <AuthorComponent 
          author_icon={author_icon}
          author={author}
        />
        <TimeStamp 
          created={created}
        />
      </div>
  );
}
