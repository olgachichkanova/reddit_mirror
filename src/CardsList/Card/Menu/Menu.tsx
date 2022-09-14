import React, { useEffect, useRef, useState } from 'react';
import { Dropdown } from '../../../Dropdown/Dropdown';
import { MenuIcon } from '../../../Icons/MenuIcon';
import styles from './menu.scss';
import { MenuItemsList } from './MenuItemsList';

export function Menu() {
  const ref = useRef<HTMLButtonElement>(null);
  const [menuPos, setMenuPos] = useState('0px');
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if(event.target instanceof Node && ref.current?.contains(event.target)) {
        const yPos = event.pageY + 39 + "px";
        setMenuPos(yPos);
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  return (
    <div className={styles.menu} >
      
      <Dropdown
        button={
          <button className={styles.menuButton} ref={ref}>
            <MenuIcon />
          </button>
        }
      >
        <div className={styles.dropdown} style={{top:menuPos}}>
          <MenuItemsList  postId="postId"/>
          <button className={styles.closeButton}>
            Close
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
