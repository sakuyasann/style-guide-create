import { css, jsx } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { Stack } from '~/components/layout';
import { useColorMode } from '~/hooks';
import { colorData } from '~/types/ecsgDataType';
import { HexToRGB } from '~/utils';

const SinglePallete: React.FC<colorData> = (props) => {
  const {
    title,
    lightColor,
    darkColor,
    comment
  } = props

  const { colorMode } = useColorMode()

  const [rgb, setRgb] = useState('')
  useEffect(() => {
    const changeData = HexToRGB(colorMode === 'dark' ? darkColor : lightColor)
    setRgb(`rgb(${changeData[0]}, ${changeData[1]}, ${changeData[2]})`)
  }, [lightColor, darkColor, colorMode])

  return (
    <>
      {/* @jsx jsx */}
      <Stack>
        <div
          css={styles.color}
          style={{
            backgroundColor: colorMode === 'dark' ? darkColor : lightColor
          }}
        ></div>
        <p
          css={styles.title}
        >{title}</p>
        <p
          css={styles.colorCode}
          style={{
            color: colorMode === 'dark' ? darkColor : lightColor
          }}
        >{colorMode === 'dark' ? darkColor : lightColor}</p>
        <p css={styles.colorRgb}>{rgb}</p>
      </Stack>
    </>
  );
};

export default SinglePallete;

const styles = {
  color: css`
    width: 7rem;
    height: 5rem;
    border-radius: .25rem;
  `,
  title: css`
    margin-top: .5rem;
    font-size: 11px;
    color: var(--font-color-300);
    font-weight: 500;
  `,
  colorCode: css`
    font-weight: 500;
  `,
  colorRgb: css`
    font-size: 11px;
    color: var(--font-color-400);
  `
}