import { css, jsx } from '@emotion/react';
import React from 'react';
import ColorPalette from './colorPalette';
import Section from './section';

const index = () => {
  return (
    <>
      {/* @jsx jsx */}
      <div css={styles.wrap}>
        <Section title='Color Pallete'>
          <ColorPalette />
        </Section>
      </div>
    </>
  );
};

export default index;

const styles = {
  wrap: css`
    max-width: 1440px;
    margin: 0 auto;
    padding: 2.5rem;
  `
}