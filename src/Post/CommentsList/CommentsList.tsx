import React from 'react';
import { ICommentsData, useCommentsData } from '../../hooks/useCommentsData';
import { CommentCard } from './CommentCard';
import styles from './commentslist.scss';

export interface ICommentsList{
  data: ICommentsData[];
}

export function CommentsList({data}: ICommentsList) {
  return (
    <ul className={styles.commentsList}>
    {data.map(comment => {
      if(comment.data !== undefined) {
        const dt = comment.data.created;
        const date = new Date(dt * 1000).toLocaleDateString();
          return <CommentCard 
            key={comment.data.id} 
            author={comment.data.author}
            created={date}
            selftext={comment.data.body}
            replies={comment.data.replies}
          />
        }
    })}
  </ul>
  );
}
