import React, { useState } from 'react';
import { ReplyForm } from '../../../ReplyForm';
import { CommentIcon, RateIcon, ReportIcon, ShareIcon } from '../../../Icons';
import { Metadata } from '../../../Metadata';
import { Text } from '../../../Text';
import styles from './commentcard.scss';
import { CommentsList } from '../CommentsList';
import { ICommentsData } from '../../../hooks/useCommentsData';

interface ICommentCard {
  author_icon?: string;
  author?: string;
  created?: string;
  selftext?: string;
  replies: {
    data: {
      children: ICommentsData[]
    }
  };
}

export function CommentCard({author, author_icon, created, selftext, replies}: ICommentCard) {
  const [isFormOpened, setIsFormOpened] = useState(false);
  return (
    <div className={styles.commentCardBox}>
      <div className={styles.commentCard}>
      <div className={styles.rateIcons}>
        <button><RateIcon /></button>
        <button className={styles.rateIconDown}><RateIcon /></button>
        <div className={styles.devider}></div>
      </div>
      <div className={styles.comment}>
        <Metadata 
          type={'commentCard'}
          author={author}
          created={created}
        />
        <Text 
          As={'p'}
          size={14}
          children={selftext}
        />
        <div className={styles.controls}>
          <button className={styles.commentsBtn} onClick={() => {setIsFormOpened(true)}}>
            <CommentIcon />
            <span>Reply</span>
          </button>
          <button className={styles.shareBtn}>
            <ShareIcon />
            <span>Share</span>
          </button>
          <button className={styles.shareBtn}>
            <ReportIcon />
            <span>Report</span>
          </button>
        </div>
        {isFormOpened && (
        <ReplyForm 
          author={author}
        />
      )}
      </div>
      </div>
      {typeof replies !== 'string' &&
      <div className={styles.listBox}>
          <CommentsList data={replies.data.children} />
      </div>
      }
    </div>
  );
}

