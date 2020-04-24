import React from 'react';
import styles from './styles.module.scss';

export const GradiantBackground = ({
  className,
  ...rest
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div
      className={`${styles.root} ${className || ''}`}
      {...rest}
    />
  )
}
