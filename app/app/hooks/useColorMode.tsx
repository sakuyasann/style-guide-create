import React, { useState } from 'react';
import { ECSGSettingType } from '~/types/ecsgSettignType';

const useColorMode = () => {
  const [colorMode, setColorMode] = useState<ECSGSettingType['colorMode']>('light')

  const toggleColorMode = () => {
    if (colorMode === 'light') {
      setColorMode('dark')
    } else {
      setColorMode('light')
    }
  }

  return { colorMode, toggleColorMode };
};

export default useColorMode;
