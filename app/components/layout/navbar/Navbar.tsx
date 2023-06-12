'use client';

import React, { ChangeEvent, FormEvent, useRef } from 'react';
import Link from 'next/link';
import style from './Navbar.module.sass';
import { usePathname } from 'next/navigation';
import { PATH_ICONS } from '@/app/constants/path';
import { useRouter } from 'next/navigation';
import { ViewContainer } from '../../common/wrappers/ViewContainer/ViewContainer';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchInput = useRef<HTMLInputElement>(null);

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    const search = searchInput.current?.value;
    router.push(`?search=${search}`);
  };

  return (
    <ViewContainer>
      <nav className={style.navContainer}>
        <div>
          {pathname.includes('detail') && (
            <Link className={style.backButton} href="/">
              <img src={PATH_ICONS + '/Back.svg'} alt="back" />
            </Link>
          )}
        </div>
        <form onSubmit={onSearch} className={style.searchButton}>
          <input
            ref={searchInput}
            type="text"
            placeholder="Search"
            name="search"
          />
          <button type="submit" className={style.backButton}>
            <img src={PATH_ICONS + '/Search.svg'} alt="search" />
          </button>
        </form>
      </nav>
    </ViewContainer>
  );
};

export default Navbar;
