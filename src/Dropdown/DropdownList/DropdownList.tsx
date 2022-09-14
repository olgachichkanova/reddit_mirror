import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdownlist.scss';

interface IDropdownListProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function DropdownList({children, onClick}: IDropdownListProps) {
  const ref = useRef<HTMLDivElement>(null);
  const node = document.querySelector("#modal_root");
  if(!node) return null;

  
  
  return ReactDOM.createPortal((
    <div className={styles.listContainer} ref={ref}>
          <div className={styles.list} onClick={onClick}>
            { children }
          </div>
        </div>
  ), node);
}
