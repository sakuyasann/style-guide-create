import { atom } from "recoil";
import { projectDataType } from "~/types/ecsgDataType";

const ColorpalletState = atom<projectDataType['data']['colorPallet']>({
  key: 'ColorpalletState',
  default: {
    order: [],
    colors: []
  }
})

export default ColorpalletState