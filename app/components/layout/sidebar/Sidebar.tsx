'use client';

import React, { useState } from 'react';
import styles from './Sidebar.module.sass';
import Logout from '../../logout/Logout';
import { PATH_ICONS, PATH_IMAGES } from '@/app/constants/path';
import Link from 'next/link';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const onClickSidebar = () => setShowSidebar(!showSidebar);

  return (
    <section className={styles.sideBarContainer}>
      <div className={styles.sideBarUserPanel}>
        <div className={styles.menuBtnContainer}>
          <button className={styles.menuBtn} onClick={onClickSidebar}>
            <img src={PATH_ICONS + '/Menu.svg'} alt="menu" />
          </button>
          <Link className={styles.logoLink} href="/">
            <img
              className={styles.sideBarLogo}
              src={PATH_IMAGES + '/logo.png'}
              alt="Logo"
            />
          </Link>
        </div>
        <div
          className={
            showSidebar
              ? styles.sideBarUserContainerActive
              : styles.sideBarUserContainer
          }
        >
          <div className={styles.trainerInfo}>
            <img
              className={styles.sideBarAvatar}
              src={PATH_IMAGES + '/avatar.png'}
              alt="Avatar"
            />
            <h3>ASHK123</h3>
            <p>Level 1</p>
            <span>"Work hard on your test"</span>
          </div>
          <Logout />
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
