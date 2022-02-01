import { css, jsx } from '@emotion/react';
import React from 'react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import { Button } from '~/components/parts';
import { useColorMode } from '~/hooks';

const ToggleColorButton = () => {
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <>
      {/* @jsx jsx */}
      <Button onClick={toggleColorMode} color='gray'>
        {colorMode === 'dark' ? <RiSunFill /> : <RiMoonFill />}
      </Button>
    </>
  );
};

export default ToggleColorButton;
