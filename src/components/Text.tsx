import { ReactNode } from 'react';
import classNames from 'classnames';

type TextProps = {
  children: ReactNode;
  className?: string;
  variant: 'h1' | 'h2' | 'h3';
};

const styles = {
  h1: 'text-[102px] font-bold leading-[91.8px]',
  h2: 'text-[40px] font-medium leading-[44px]',
  h3: 'text-[18px] font-medium leading-[24px]',
};

export default function Text({ children, className = '', variant }: TextProps) {
  const classes = classNames(styles[variant], className);

  const Tag = variant; // 'h1', 'h2', or 'h3'

  return <Tag className={classes}>{children}</Tag>;
}
