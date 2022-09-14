import React from 'react';
import { useCommentsData } from '../../hooks/useCommentsData';
import { CommentCard } from './CommentCard';
import styles from './commentslist.scss';

interface ICommentsList {
  id: string
}

export function CommentsList({id}: ICommentsList) {
  const [commentsData] = useCommentsData(id);
  return (
    <ul className={styles.commentsList}>
    {commentsData.map(comment => {
      if(comment.data !== undefined) {
        const dt = comment.data.created;
        const date = new Date(dt * 1000).toLocaleDateString();
          return <CommentCard 
            key={comment.data.id} 
            author={comment.data.author}
            created={date}
            selftext={comment.data.body}
          />
        }
    })}
  </ul>
  );
}
