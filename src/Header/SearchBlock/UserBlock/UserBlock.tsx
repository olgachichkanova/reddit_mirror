import React from 'react';
import { AnonIcon } from '../../../Icons';
import { EColor, Text } from '../../../Text';
import styles from './userblock.scss';

interface IUserBlockProps {
  avatarSrc?: string,
  username?: string,
  loading?: boolean
}

export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
    const link = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=token&state=random_string&redirect_uri=http://localhost:3000&scope=read submit identity`;
  return (
    <a 
    href={link}
    className={styles.userBox}>
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} alt='user avatar' className={styles.avatarImg} />
          : <AnonIcon />
        }
      </div>
      <div className={styles.username}>
        {loading ? (
          <Text size={20} color={EColor.gray99}>Loading...</Text>
        ) : (
          <Text size={20} color={username? EColor.black : EColor.gray99}>{username || 'Anonymous'}</Text>
        )}
      </div>
    </a>
  );
}
