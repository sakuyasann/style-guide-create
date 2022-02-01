import React from 'react';
import { RiArticleFill, RiFileList2Fill, RiFontSize2, RiInputMethodFill, RiPaletteFill } from 'react-icons/ri';
import { layerType } from '~/types/ecsgDataType';

type Props = {
  type: layerType
  size?: string|number
}

const Icon: React.FC<Props> = (props) => {
  const {
    type,
    size
  } = props

  const Item = () => {
    switch (type) {
      case 'description':
        return <RiArticleFill size={size} />

      case 'colorPallete':
        return <RiPaletteFill size={size} />

      case 'fontfamily':
        return <RiInputMethodFill size={size} />

      case 'typography':
        return <RiFontSize2 size={size} />

      default:
        return <RiFileList2Fill size={size} />
    }
  }

  return (
    <>
      <Item />
    </>
  )
};

export default Icon;
