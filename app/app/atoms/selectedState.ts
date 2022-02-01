import { atom } from "recoil";
import { layerType } from "~/types/ecsgDataType";

const SelectedState = atom<layerType>({
  key: 'SelectedState',
  default: ''
})

export default SelectedState