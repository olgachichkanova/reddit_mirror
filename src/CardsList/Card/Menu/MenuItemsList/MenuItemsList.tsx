import React from 'react';
import { CommentIcon, HideIcon, ReportIcon, SaveIcon, ShareIcon } from '../../../../Icons';
import styles from './menuitemslist.scss';

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId } : IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <CommentIcon/>
        <span>Comment</span>
      </li>

      <div className={styles.divider}></div>

      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <ShareIcon/>
        <span>Share</span>
      </li>

      <div className={styles.divider}></div>

      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <HideIcon/>
        <span>Hide</span>
      </li>

      <div className={styles.divider}></div>

      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <SaveIcon/>
        <span>Save</span>
      </li>

      <div className={styles.divider}></div>
      
      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <ReportIcon/>
        <span>Report</span>
      </li>
    </ul>
  );
}
