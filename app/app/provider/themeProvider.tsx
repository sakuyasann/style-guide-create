import React from 'react';
import { DefaultStyle, VariableStyle } from '~/utils';

const ThemeProvider: React.FC = (props) => {
  const { children } = props
   return (
    <>
      <div>
        { children }
      </div>
      <VariableStyle />
      <DefaultStyle />
    </>
  );
};

export default ThemeProvider;
