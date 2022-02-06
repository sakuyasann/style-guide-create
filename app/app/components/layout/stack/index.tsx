import { css, Interpolation, jsx, Theme } from '@emotion/react';
import React from 'react';

type Props = {
  spacing?: number
  direction?: 'row' | 'column'
  style?: Interpolation<Theme>
}

const index: React.FC<Props> = (props) => {
  const {
    style,
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
      <div css={[styles.base, style]}>{children}</div>
    </>
  );
};

export default index;
