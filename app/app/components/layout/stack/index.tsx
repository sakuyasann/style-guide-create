import { css, jsx } from '@emotion/react';
import React from 'react';

type Props = {
  spacing?: number
  direction?: 'row' | 'column'
}

const index: React.FC<Props> = (props) => {
  const {
    children
  } = props

  const styles = {
    base: css`
      display: flex;
      flex-direction: ${props.direction ? props.direction : 'column'};
      gap: ${props.spacing ? `${props.spacing * .25}rem` : '.5rem'};
    `
  }

  return (
    <>
      {/* @jsx jsx */}
      <div css={styles.base}>{children}</div>
    </>
  );
};

export default index;
