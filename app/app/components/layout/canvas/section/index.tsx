import { css, jsx } from '@emotion/react';
import React from 'react';

type Props = {
  title: string
}

const Section: React.FC<Props> = (props) => {
  const {
    title,
    children
  } = props

  return (
    <>
      {/* @jsx jsx */}
      <section>
        <h2 css={styles.title}>{title}</h2>
        <div css={styles.content}>
          {children}
        </div>
      </section>
    </>
  );
};

export default Section;

const styles = {
  title: css`
    font-size: 24px;
    font-weight: 500;
  `,
  content: css`
    padding: 2rem 0;
  `
}