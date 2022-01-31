import { atom } from "recoil";
import { projectDataType } from "~/types/ecsgDataType";

const FontfamilyState = atom<projectDataType['data']['fontfamily']>({
  key: 'FontfamilyState',
  default: {
    order: [],
    data: [],
    css: []
  }
})

export default FontfamilyState