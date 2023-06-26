"use client";

import { FC } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from 'classnames';

export interface INavBarProps {}

export const NavBar: FC<INavBarProps> = () => {
  const currentRoute = usePathname();
  return (
    <div className={styles.navBar + ' dark:invert'}>
      <ul>
        {[
          { url: "/", name: "Home" },
          { url: "/about", name: "About" },
          { url: "https://developer.mozilla.org", name: "MDN" },
        ].map((item: {url:string, name: string}) => {
          return (
            <li key={item.url} className={ classNames( styles.navBar__list, (currentRoute === item.url ? 'active' : ''))}>
              <Link href={item.url}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
