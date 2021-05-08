import React from 'react';

import styles from './container.module.css';

/* eslint-disable-next-line */
export interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
