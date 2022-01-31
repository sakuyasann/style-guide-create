import { atom } from "recoil";
import { projectType } from "~/types/ecsgDataType";

const ProjectState = atom<projectType>({
  key: 'ProjectState',
  default: {
    name: '未設定',
    order: ['description', 'colorPallete', 'fontfamily', 'typography']
  }
})

export default ProjectState