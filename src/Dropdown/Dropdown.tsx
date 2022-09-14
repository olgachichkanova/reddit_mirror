import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.scss';
import { DropdownList } from './DropdownList';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({ button, children, isOpen, onOpen = NOOP, onClose = NOOP }: IDropdownProps) {
  
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])
  const handleOpen = (event:any) => {
    console.log(event.target.getBoundingClientRect())
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }
  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>
        { button }
      </div>
      {isDropdownOpen && (
        <DropdownList 
          children = {children}
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
}
