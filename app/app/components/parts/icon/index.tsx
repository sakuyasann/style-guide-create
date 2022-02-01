import React from 'react';
import { RiArticleFill, RiFileList2Fill, RiFontSize2, RiInputMethodFill, RiPaletteFill } from 'react-icons/ri';
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
        return <RiPaletteFill />

      case 'fontfamily':
        return <RiInputMethodFill />

      case 'typography':
        return <RiFontSize2 />

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
