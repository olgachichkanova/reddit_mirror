import React, { useEffect, useRef, useState } from 'react';
import styles from './cardslist.scss';
import { Card } from './Card'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';

export function CardsList() {
  const token = useSelector<RootState>(state => state.token);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');
  const [nextAfter, setNextAfter] = useState('');
  const [countLoad, setCountLoad] = useState<number>(0);

  const listBottom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(!token) {
      return
    }
    async function load() {
      setLoading(true);
      setErrorLoading('');
      try {
        const {data: {data: {after, children}}} = await axios.get('https://oauth.reddit.com/best', {
          headers: {Authorization: `bearer ${token}`},
          params: {
            limit: 10,
            after: nextAfter,
          }
        });
        setNextAfter(after);
        setPosts(prevChildren => prevChildren.concat(...children));
      } catch (error) {
        setErrorLoading(String(error));
      }
      
      setLoading(false);
      setCountLoad((countLoad) => countLoad + 1);
    }

    
    
    const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting &&  (countLoad%3 != 0 || countLoad === 0)) {
        load();
      }
    }, {
      rootMargin: '10px',
    });
    if(listBottom.current) {
      observer.observe(listBottom.current)
    }
    return () => {
      if(listBottom.current) {
        observer.unobserve(listBottom.current)
      }
    }
    
  }, [countLoad])

  return (
    <ul className={styles.cardsList}>
      {posts.length === 0 && !loading && !errorLoading && (
        <div>There are no posts available</div>
      )}
      {posts.map(post => (
        <Card 
          id={post.data.id} 
          title={post.data.title}
          key={post.data.id} 
          author={post.data.author}
          thumbnail={post.data.thumbnail}
          url={post.data.url}
          comments={post.data.num_comments}
          ups={post.data.ups}
          selftext={post.data.selftext}
          created = {new Date(post.data.created * 1000).toLocaleDateString()}
          link = {`https://www.reddit.com/${post.data.permalink}`}
        />
      ))}
      <div ref={listBottom}></div>
      {loading && 'Loading...'}
      {(countLoad % 3 === 0) && (countLoad != 0) && !errorLoading && !loading && (
        <button className={styles.loadMore} onClick={() => setCountLoad(0)}>Load more</button>
      )}
      {errorLoading && (
        <div role="alert">
          {errorLoading}
        </div>
      )}
    </ul>
  );
}