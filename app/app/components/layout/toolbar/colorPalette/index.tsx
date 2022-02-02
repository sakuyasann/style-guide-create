import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { v4 } from 'uuid'
import { ColorpalletState } from '~/atoms';
import { Layer, ToolLayerItem } from '../common';
import ColorList from './colorList';

const ColorPaletteTool = () => {
  const [colorData, setColorData] = useRecoilState(ColorpalletState)
  const [activeId, setActiveId] = useState('')

  const onAdd = () => {
    const id = v4()
    
    setColorData({
      ...colorData,
      order: [...colorData['order'], id],
      colors: [...colorData['colors'], {
        id: id,
        title: 'Unknown',
        theme: 'single',
        comment: '',
        order: [],
        data: []
      }]      
    })
  }

  return (
    <>
      {/* @jsx jsx */}
      <ColorList colors={colorData['colors']} selectId={activeId} />
      <Layer onAdd={onAdd}>
        {colorData.order.map(id => {
          const data = colorData.colors.find(f => f.id === id)
          if (!data) return

          return (
            <ToolLayerItem
              key={id}
              onClick={() => setActiveId(id)}
              isActive={activeId === id}
            >
              {data.title}
            </ToolLayerItem>
          )
        })}
      </Layer>
    </>
  );
};

export default ColorPaletteTool;
