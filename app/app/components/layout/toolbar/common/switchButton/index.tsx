import { css, jsx } from '@emotion/react';
import React from 'react';

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  Icon?: JSX.Element
  isActive?: boolean
}

const index: React.FC<Props> = (props) => {
  const {
    onClick,
    Icon,
    isActive,
    children
  } = props

  const activeStyle = {
    button: css`
      background-color: ${isActive ? 'var(--color-purple-50)' : '#fff'};
      border: 1px solid ${isActive ? 'var(--color-purple-300)' : 'var(--border-color)'};
    `
  }

  return (
    <>
      {/* @jsx jsx */}
      <div css={styles.wrap}>
        <button css={[styles.button, activeStyle.button]} onClick={onClick}>
          {Icon && <div css={styles.icon}>{Icon}</div>}
          <div>{children}</div>
        </button>
      </div>
    </>
  );
};

export default index;

const styles = {
  wrap: css`
    flex: 1 1 auto;
  `,
  icon: css`
    font-size: 1.25rem;
    margin-bottom: .25rem;
  `,
  button: css`
    display: block;
    width: 100%;
    padding: .25rem;
    border-radius: .25rem;
    text-align: center;
    font-size: 13px;
  `
}