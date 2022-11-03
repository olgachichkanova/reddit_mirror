import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useHistory, useParams } from 'react-router-dom';
import { CommentFormContainer } from '../CommentFormContainer';
import { useCommentsData } from '../hooks/useCommentsData';
import { Text } from '../Text';
import { CommentsList } from './CommentsList';
import styles from './post.scss';

interface IPostProps {
  title?: string;
  thumbnail?: string;
  link?: string;
  url?: string;
  selftext?: string;
}
export function Post({title, selftext}: IPostProps) {
  const ref = useRef<HTMLDivElement>(null)
  const history = useHistory();
  const listID = useParams<{id:string}>();

  const [commentsData] = useCommentsData(listID.id);
  
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if(event.target instanceof Node && !ref.current?.contains(event.target)) {
        history.push('/');
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
    <div className={styles.modal}>
      <div className={styles.box} ref={ref}>
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
          data={commentsData}
        />
      </div>
    </div>
    ), node);
}
