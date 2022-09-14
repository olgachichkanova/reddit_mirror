import React from 'react';
import styles from './cardpreview.scss';

interface ICardPreviewProps {
  thumbnail?: string;
  url?: string;
}

export function CardPreview({thumbnail, url}:ICardPreviewProps) {
  return (
    <div className={styles.cardpreview}>
      {((thumbnail !== "self") && (thumbnail !== "default") && (thumbnail !== "nsfw"))
        ? <img src={url} alt="" />
        : <img src="https://www.reddit.com/static/self_default2.png" alt="" />
      }
    </div>
  );
}
