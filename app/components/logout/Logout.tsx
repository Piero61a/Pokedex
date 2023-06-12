import React from 'react';
import styles from './Logout.module.sass';
import { PATH_ICONS } from '@/app/constants/path';

const Logout = () => {
  return (
    <div className={styles.sideBarLogout}>
      <img src={PATH_ICONS + '/Logout.svg'} alt="logout" />
      <span>LOG OUT</span>
    </div>
  );
};

export default Logout;
