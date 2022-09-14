import React from 'react';
import styles from './authorcomponent.scss';

interface IAuthorComponent {
  author_icon?: string;
  author?: string;
}

export function AuthorComponent({author_icon, author}: IAuthorComponent) {
  return (
    <div className={styles.user}>
    <div className={styles.userpic}>
        {author_icon
          ? <img src={author_icon} alt="" />
          : <img src="https://images.unsplash.com/photo-1597524734346-1e97c3b946c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="" />
        }
    </div>
    {author
      ? <p className={styles.username}>{author}</p>
      : <p className={styles.username}>Anonymus</p>
    }
  </div>
  );
}
