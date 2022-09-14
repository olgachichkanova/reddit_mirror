import React from 'react';
import { useUserData } from '../../hooks/useUserData';
import styles from './searchblock.scss';
import { UserBlock } from './UserBlock';

export function SearchBlock() {
  const {data, loading}= useUserData()
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} loading={loading} />
    </div>
  );
}

