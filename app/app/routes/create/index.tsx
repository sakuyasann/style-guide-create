import { css, jsx } from '@emotion/react';
import React, { Fragment } from 'react';
import { useRecoilValue } from 'recoil';
import { SelectedState } from '~/atoms';
import { Header, Layer, Toolbar } from '~/components/layout';

const Index = () => {
  const selected = useRecoilValue(SelectedState)

  return (
    <>
      {/* @jsx jsx */}
      <Fragment>
        <div css={styles.container}>
          <div css={styles.header}>
            <Header />
          </div>
          <div css={styles.layer}>
            <Layer />
          </div>
          <div css={styles.toolbar}>
            {selected && <Toolbar />}
          </div>
          <div css={styles.canvas}></div>
        </div>
      </Fragment>
    </>
  );
};

export default Index;

const styles = {
  container: css`
    display: grid;
    grid-template-columns: auto auto 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
  `,
  header: css`
    grid-area: 1 / 1 / 2 / 4;
  `,
  layer: css`
    grid-area: 2 / 1 / 3 / 2;
  `,
  toolbar: css`
    grid-area: 2 / 2 / 3 / 3;
  `,
  canvas: css`
    grid-area: 2 / 3 / 3 / 4;
  `
}