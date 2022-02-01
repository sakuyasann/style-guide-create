import { css, jsx } from '@emotion/react';
import React from 'react';
import { RiMore2Fill } from 'react-icons/ri';
import { Button, Popper } from '~/components/parts';

const Menu = () => {
  const TriggerButton = () => {
    return (
      <Button><RiMore2Fill /></Button>
    )
  }

  return (
    <>
      {/* @jsx jsx */}
      <Popper Trigger={<TriggerButton />}>
        aaa
      </Popper>
    </>
  );
};

export default Menu;
