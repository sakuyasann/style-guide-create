import { css, jsx } from '@emotion/react';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { ColorpalletState } from '~/atoms';
import { Stack } from '../..';
import SinglePallete from './singlePallete';

const ColorPalette = () => {
  const colorData = useRecoilValue(ColorpalletState)

  return (
    <>
      {/* @jsx jsx */}
      <Stack>
        {!colorData.isHide && 
          colorData.colors.map(data => {
            
            return (
              <>
                <h3>{data.title}</h3>
                <Stack spacing={8} direction='row' style={css`
                  margin-top: 1rem;
                `}>
                  {data.order.map(e => {
                    const color = data.data.find(f => f.id === e)
                    if (!color) return
                    return (
                      <>
                        <SinglePallete {...color} />
                      </>
                    )
                  })}
                </Stack>
              </>
            )
          })
        }
      </Stack>
    </>
  );
};

export default ColorPalette;
