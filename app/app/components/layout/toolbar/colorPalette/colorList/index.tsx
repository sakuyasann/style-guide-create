import { css, jsx } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { RiContrastDropFill, RiDiscussFill, RiDropFill } from 'react-icons/ri';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { v4 } from 'uuid'
import { ColorpalletState } from '~/atoms';
import { Stack } from '~/components/layout';
import { colorPalletType, colorsType } from '~/types/ecsgDataType';
import { Section, SwitchButton } from '../../common';
import ListItem from './listItem';

type Props = {
  colors: colorPalletType['colors']
  selectId: string
}

const ColorList: React.FC<Props> = (props) => {
  const {
    colors,
    selectId
  } = props

  const [originalData, setOriginalData] = useRecoilState(ColorpalletState)
  const [colorData, setColorData] = useState<colorsType>()

  useEffect(() => {
    setColorData(colors.find(f => f.id === selectId))
  }, [selectId])

  useEffect(() => {
    if (!colorData) return
    
    const newData = originalData.colors.map(data => {
      if (data.id === colorData.id) {
        return data = colorData
      }
      return data
    })

    setOriginalData({
      ...originalData,
      colors: newData
    })
  }, [colorData])

  if (colorData === undefined) return <></>

  const onAdd = () => {
    const id = v4()
    setColorData({
      ...colorData,
      order: [...colorData.order, id],
      data: [...colorData.data, {
        id: id,
        title: '',
        darkColor: '',
        lightColor: '',
        comment: ''
      }]
    })
  }

  return (
    <>
      {/* @jsx jsx */}
      <Section title="Color List">
        <div>
          <div css={styles.heading}>
            <p css={styles.title}>{colorData.title}</p>
            <button css={styles.iconButton}><RiDiscussFill /></button>
          </div>
          <div css={styles.theme.wrap}>
            <p css={[styles.theme.title]}>Color Theme</p>
            <Stack direction='row'>
              <SwitchButton
                Icon={<RiDropFill />}
                isActive={colorData.theme === 'single'}
                onClick={() => {
                  setColorData({
                    ...colorData,
                    theme: 'single'
                  })
                }}
              >
                Single
              </SwitchButton>
              <SwitchButton
                Icon={<RiContrastDropFill />}
                isActive={colorData.theme === 'multiple'}
                onClick={() => {
                  setColorData({
                    ...colorData,
                    theme: 'multiple'
                  })
                }}
              >
                Multiple
              </SwitchButton>
            </Stack>
          </div>
          <ul>
            {colorData.data.map(data => {
              return (
                <ListItem data={data} />
              )
            })}
          </ul>
          <button css={styles.addButton} onClick={onAdd}>Add new color</button>
        </div>
      </Section>
    </>
  );
};

export default ColorList;

const styles = {
  heading: css`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    color: var(--font-color-400);
  `,
  iconButton: css`
    line-height: 1;
  `,
  title: css`
    flex: 1 1 auto;
    font-size: 14px;
    font-weight: 500;
  `,
  theme: {
    wrap: css`
      padding: 1rem 1rem;
    `,
    title: css`
      color: var(--font-color-300);
      margin-bottom: .25rem;
      font-size: 12px;
      font-weight: 500;
    `
  },
  addButton: css`
    display: block;
    width: 100%;
    margin-top: .5rem;
    font-size: 12px;
    text-align: center;
    color: var(--font-color-400);
  `
}