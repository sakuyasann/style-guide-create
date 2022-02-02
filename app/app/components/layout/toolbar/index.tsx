import { css, jsx } from '@emotion/react';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { ColorpalletState, SelectedState } from '~/atoms';
import ColorPaletteTool from './colorPalette';
import DescriptionTool from './description';
import FontfamilyTool from './fontfamily';
import TypographyTool from './typography';

const index = () => {
  const select = useRecoilValue(SelectedState)

  const ToolComponent = () => {
    switch (select) {
      case 'description':
        return <DescriptionTool />

      case 'colorPallete':
        return <ColorPaletteTool />

      case 'fontfamily':
        return <FontfamilyTool />

      case 'typography':
        return <TypographyTool />

      default:
        return <></>
    }
  }

  return (
    <>
      {/* @jsx jsx */}
      <div css={styles.container}>
        <ToolComponent />
      </div>
    </>
  );
};

export default index;

const styles = {
  container: css`
    height: 100%;
    background-color: var(--background-base);
    border-right: 1px solid var(--border-color);
  `
}