import React, {createContext, useState} from 'react';

export const LogContext = createContext();

export function LogContextProvider({children}) {
  const [text, setText] = useState('');

  return (
    <LogContext.Provider value={{text, setText}}>
      {children}
    </LogContext.Provider>
  );
}
