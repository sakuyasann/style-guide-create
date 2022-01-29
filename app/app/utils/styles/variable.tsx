import { css, Global } from '@emotion/react';
import React from 'react';

const Variable = () => {
  return (
    <>
      <Global styles={css`
        :root {
          --background-color: #F7FAFC;
        }
      `} />
    </>
  );
};

export default Variable;
