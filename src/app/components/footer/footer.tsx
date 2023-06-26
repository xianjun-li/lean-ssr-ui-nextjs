import { FC } from "react";

import styles from "./styles.module.scss";

export interface IFooterProps {}

export const Footer: FC<IFooterProps> = () => {
  return <div className={styles.footer}>Footer</div>;
};
