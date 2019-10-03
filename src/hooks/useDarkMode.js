
import React, { useEffect } from 'react';

import useLocalStorage from './useLocalStorage.js';

const useDarkMode = () => {
   const [ darkMode, setDarkMode ] =  useLocalStorage('enabled');

   useEffect(() => {
      const body = document.querySelector('body');
      const bClass = document.createAttribute('class');
      body.setAttributeNode(bClass);
      darkMode === true ? bClass.value = 'dark-mode' : bClass.value = '';
   }, [darkMode]);

return [darkMode, setDarkMode];
}

export default useDarkMode;