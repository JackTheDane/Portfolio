import React from 'react';
import styles from './styles.module.scss';

export interface GradiantBackgroundProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type?: 'primary' | 'secondary' | 'highlight' | 'dark' | 'light'
}

export const GradiantBackground = ({
  className: baseClassName,
  type,
  ...rest
}: GradiantBackgroundProps) => {

  let className: string = baseClassName || '';

  switch (type) {
    case 'highlight':
      className += ` ${styles.highlight}`;
      break;

    case 'secondary':
      className += ` ${styles.secondary}`;
      break;

    case 'dark':
      className += ` ${styles.dark}`;
      break;

    case 'light':
      className += ` ${styles.light}`;
      break;

    case 'primary':
    default:
      className += ` ${styles.primary}`;
      break;
  }


  return (
    <div
      className={`${styles.root} ${className}`}
      {...rest}
    />
  )
}
