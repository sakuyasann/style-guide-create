import { css, jsx } from '@emotion/react';
import React from 'react';

type Props = {
  onClick?: React.MouseEventHandler<HTMLLIElement>
  isActive?: boolean
}

const index: React.FC<Props> = (props) => {
  const {
    children,
    onClick,
    isActive
  } = props

  const activeStyle = {
    listItem: css`
      transition: .2s;
      background-color: ${isActive ? 'var(--color-purple-50)' : undefined};
      border: 1px solid ${isActive ? 'var(--color-purple-300)' : '#fff'};
      cursor: ${isActive ? undefined : 'pointer'};
    `
  }

  return (
    <>
      {/* @jsx jsx */}
      <li css={[styles.listitem, activeStyle.listItem]} onClick={onClick}>
        {children}
      </li>
    </>
  );
};

export default index;

const styles = {
  listitem: css`
    border-radius: .25rem;
    padding: .4rem .5rem;
    font-size: 13px;
    line-height: 1;
    color: var(--font-color-400);
  `
}