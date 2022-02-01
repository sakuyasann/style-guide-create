import { css, jsx } from '@emotion/react';
import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  isShadow?: boolean
  leftIcon?: IconType
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  color?: 'purple' | 'blue'
}

const Button: React.FC<Props> = (props) => {
  const {
    isShadow,
    children,
    leftIcon,
    onClick,
    color
  } = props
  return (
    <>
      {/* @jsx jsx */}
      <button 
        css={[
          buttonStyle.base,
          isShadow ? buttonStyle['shadow'] : '',
          color ? buttonStyle.color[color] : ''
        ]}
        onClick={onClick}
      >
        {leftIcon ? <span css={[buttonStyle.leftIcon]}>{leftIcon}</span> : ''}
        {children}
      </button>
    </>
  );
};

export default Button;

const buttonStyle = {
  base: css`
    padding: .75rem .75rem;
    background-color: #fff;
    border-radius: .5rem;
    font-weight: 500;
  `,
  icon: css`
    padding-top: .75rem;
    padding-bottom: .75rem;
    font-size: 22px;
    line-height: 1;
  `,
  shadow: css`
    box-shadow: rgba(74, 85, 104, 5%) 0px 5px 15px, rgba(74, 85, 104, 3%) 0px 4px 6px;
  `,
  color: {
    blue: css`
      background-color: var(--color-blue-500);
      color: #fff;
    `,
    purple: css`
      background-color: var(--color-purple-500);
      color: #fff;
    `
  },
  leftIcon: css`
    margin-right: .5rem;
    display: inline-block;
  `
}
