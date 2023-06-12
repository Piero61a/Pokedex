'use client'
import style from './TypeButton.module.sass';
import React, { useEffect, useState,  } from 'react';

export interface TypeButtonsProps {
  type: string;
}

const TypeButton: React.FC<TypeButtonsProps> = ({ type }) => {

  const [selectType, setSelectType] = useState<string>('');
  useEffect(() => {
    if (String(type)) {
      setSelectType(type);
    }
  }, [type]);

  switch (selectType) {
    case 'bug':
      return <div className={style.bug}>{type}</div>;
    case 'dark':
      return <div className={style.dark}>{type}</div>;
    case 'dragon':
      return <div className={style.dragon}>{type}</div>;
    case 'electric':
      return <div className={style.electric}>{type}</div>;
    case 'fairy':
      return <div className={style.fairy}>{type}</div>;
    case 'fighting':
      return <div className={style.fighting}>{type}</div>;
    case 'fire':
      return <div className={style.fire}>{type}</div>;
    case 'flying':
      return <div className={style.flying}>{type}</div>;
    case 'ghost':
      return <div className={style.ghost}>{type}</div>;
    case 'grass':
      return <div className={style.grass}>{type}</div>;
    case 'ground':
      return <div className={style.ground}>{type}</div>;
    case 'ice':
      return <div className={style.ice}>{type}</div>;
    case 'normal':
      return <div className={style.normal}>{type}</div>;
    case 'poison':
      return <div className={style.poison}>{type}</div>;
    case 'psychic':
      return <div className={style.psychic}>{type}</div>;
    case 'rock':
      return <div className={style.rock}>{type}</div>;
    case 'steel':
      return <div className={style.steel}>{type}</div>;
    case 'water':
      return <div className={style.water}>{type}</div>;

    default:
      return <div>{type}</div>;
  }
};

export default TypeButton;
