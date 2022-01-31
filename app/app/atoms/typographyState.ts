import { atom } from "recoil";
import { projectDataType } from "~/types/ecsgDataType";

const TypographyState = atom<projectDataType['data']['typography']>({
  key: 'TypographyState',
  default: {
    order: [],
    data: []
  }
})

export default TypographyState