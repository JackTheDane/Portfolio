import React from 'react';
import styles from './styles.module.scss';

interface IconProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, 'dangerouslySetInnerHTML'> {
  iconSvg: string;
}

export const BaseIcon = ({
  iconSvg,
  className,
  ...rest
}: IconProps) => {
  return (
    <i className={`icon ${styles.root} ${className || ''}`} dangerouslySetInnerHTML={{ __html: iconSvg }} {...rest} />
  )
}
