import React from 'react';
import { CommentIcon, RateIcon, SaveIcon, ShareIcon } from '../../../Icons';
import styles from './cardcontrols.scss';

interface ICardControlsProps {
  comments?: number;
  ups?: number;
}

export function CardControls({comments, ups}:ICardControlsProps) {
  return (
    <div className={styles.cardcontrols}>
      <div className={styles.rating}>
        <button className={styles.ratingBtn}>
          <RateIcon />
        </button>
        {ups
          ? <p className={styles.ratingCounter}>{ups}</p>
          : <p className={styles.ratingCounter}>0</p>
        }
        <button className={styles.ratingBtnDown}>
          <RateIcon />
        </button>
      </div>
      <div className={styles.comments}>
        {comments
          ? <p className={styles.commentsCounter}>{comments}</p>
          : <p className={styles.commentsCounter}>0</p>
        }
        <button className={styles.commentsBtn}>
          <CommentIcon />
        </button>
      </div>
      <div className={styles.actionButtons}>
        <div className={styles.share}>
          <button className={styles.shareBtn}>
            <ShareIcon />
          </button>
        </div>
        <div className={styles.save}>
          <button className={styles.saveBtn}>
            <SaveIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
