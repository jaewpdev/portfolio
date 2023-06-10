'use client';

import { ReactNode, MouseEventHandler } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

export default function Button({
  type,
  children,
  onClick,
  href,
  animatedText,
}: {
  type: 'underline' | 'primary';
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  animatedText?: string;
}) {
  const isPrimary = type === 'primary';
  const isUnderline = type === 'underline';
  const classes = classNames('relative overflow-hidden h3 group', {
    'pb-2': isUnderline,
    'px-8 py-4 rounded-[70px] border border-black': isPrimary,
  });

  const animationClasses = classNames(
    'transition-all duration-150 ease-out w-full absolute',
    {
      'h-px bg-black bottom-0 -left-full group-hover:left-0': isUnderline,
      'z-[2] bg-black text-white flex items-center justify-center h-full -bottom-full group-hover:bottom-0 left-0':
        isPrimary,
    }
  );

  const animatedUnderline = <div className={animationClasses} />;
  const animateUnderText = <div className={animationClasses}>{animatedText}</div>;


  const El = href ? (
    <Link href={href} className={classes}>
      {children}
      {isPrimary ? animateUnderText : animatedUnderline}
    </Link>
  ) : (
    <button type="button" onClick={onClick} className={classes}>
      {children}
      {isPrimary ? animateUnderText : animatedUnderline}
    </button>
  );

  return El;
}
