import { css, jsx } from '@emotion/react';
import React from 'react';

const index = () => {
  return (
    <>
      {/* @jsx jsx */}
      <div css={styles.spacer}></div>
    </>
  );
};

export default index;

const styles = {
  spacer: css`
    flex: 1 1 auto;
  `
}