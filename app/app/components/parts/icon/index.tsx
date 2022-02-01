import React from 'react';
import { RiArticleFill, RiFileList2Fill, RiInputMethodLine, RiPaletteLine } from 'react-icons/ri';
import { layerType } from '~/types/ecsgDataType';

type Props = {
  type: layerType
}

const Icon: React.FC<Props> = (props) => {
  const {
    type
  } = props

  const Item = () => {
    switch (type) {
      case 'description':
        return <RiArticleFill />

      case 'colorPallete':
        return <RiPaletteLine />

      case 'fontfamily':
        return <RiInputMethodLine />

      case 'typography':
        return <RiInputMethodLine />

      default:
        return <RiFileList2Fill />
    }
  }

  return (
    <>
      <Item />
    </>
  )
};

export default Icon;
