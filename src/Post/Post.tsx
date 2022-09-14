import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { CommentFormContainer } from '../CommentFormContainer';
import { Text } from '../Text';
import { CommentsList } from './CommentsList';
import styles from './post.scss';

interface IPostProps {
  title?: string;
  thumbnail?: string;
  link?: string;
  url?: string;
  selftext?: string;
  onClose?: () => void;
  id: string;
  positionY: string;
}
export function Post({title, selftext, onClose, id, positionY}: IPostProps) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if(event.target instanceof Node && !ref.current?.contains(event.target)) {
        onClose?.()
      }
      
    }
    document.addEventListener("click", handleClick)
    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  const node = document.querySelector("#modal_root");
  if(!node) return null;

  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref} style={{top:positionY}}>
      <h2>{title}</h2>
      <div className={styles.content}>
        <Text 
          As={'p'} 
          size={14}
          children={selftext}
        />
      </div>
      <CommentFormContainer />
      <CommentsList 
        id={id}
      />
    </div>
    ), node);
}
