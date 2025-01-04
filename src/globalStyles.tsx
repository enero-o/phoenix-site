import { Global } from '@emotion/react';

export const GlobalStyles = () => (
  <Global
    styles={`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Duplicate Sans';
        }
  
        body {
          background-color: #fffdf9;
        }
    
      `}
  />
);
