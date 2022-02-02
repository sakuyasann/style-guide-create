import { css, jsx } from '@emotion/react';
import React from 'react';

type Props = {
  title: string
}

const Section: React.FC<Props> = (props) => {
  const {
    children,
    title
  } = props

  return (
    <>
      {/* @jsx jsx */}
      <div css={styles.base}>
        <p css={styles.title}>{title}</p>
        <div css={styles.content}>{children}</div>
      </div>
    </>
  );
};

export default Section;

const styles = {
  base: css`
    width: 15.25rem;
    border-bottom: 1px solid var(--border-color);
  `,
  title: css`
    padding: 1rem 1rem;
    font-size: 14px;
    color: var(--font-color-400);
  `,
  content: css`
    padding-bottom: 1rem;
  `
}