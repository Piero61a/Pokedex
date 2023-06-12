import React from 'react';
import style from './TypeContainer.module.sass';

interface childrenProps {
  children: React.ReactNode;
}
const TypeContainer: React.FC<childrenProps> = ({ children }) => {
  return <div className={style.types}>{children}</div>;
};

export default TypeContainer;
