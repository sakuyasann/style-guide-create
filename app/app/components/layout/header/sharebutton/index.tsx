import { css, jsx } from '@emotion/react';
import React from 'react';
import { RiShareLine } from 'react-icons/ri';
import { Button, Popper } from '~/components/parts';

const ShareButton = () => {
  const TriggerButton = () => {
    return (
      <Button color='purple' LeftIcon={<RiShareLine />}>Share</Button>
    )
  }

  return (
    <>
      {/* @jsx jsx */}
      <Popper Trigger={<TriggerButton />}>
        <p>公開リンクを作成</p>
      </Popper>
    </>
  );
};

export default ShareButton;
