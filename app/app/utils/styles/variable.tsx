import { css, Global } from '@emotion/react';
import React from 'react';

const Variable = () => {
  return (
    <>
      <Global styles={css`
        :root {
          --base-fontfamily: 'M PLUS Rounded 1c', sans-serif;
          --background-color: #F7FAFC;

          --background-base: #fff;

          --box-shadow: 0 1em 2em -1em rgba(35, 24, 21, 1);

          --border-color: #ededed;

          --color-gray-100: #EDF2F7;

          --color-purple-50: #FAF5FF;
          --color-purple-300: #B794F4;
          --color-purple-500: #A341DD;

          --font-color-300: #9ba5a7;
          --font-color-400: #4A5568;
          --font-color-500: #444;

          --color-blue-500: #0375F9;
        }
      `} />
    </>
  );
};

export default Variable;
