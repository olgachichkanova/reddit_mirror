import React from 'react';
import styles from './genericlist.scss';

interface IItem {
  text: string;
  id: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
  icon?: string;
}

interface IGenericListProps {
  list: IItem[];
}
const NOOP = () => {};
/* export function MyList({ list }: IMyListProps) {
  return (
    <ul>
      {list.map((item: IItem) => (
        <li onClick={() => item.onClick(item.id)} key={item.id}>{item.value}</li>
      ))}
    </ul>
  );
}
 */
export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = 'div', text, onClick = NOOP, className, id, href, icon}) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          <img src={icon} />
          {text}
        </As>
      ))}
    </>
  );
}
