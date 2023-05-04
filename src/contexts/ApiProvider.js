import React, { createContext } from 'react';

export const APIContext = createContext();
const ApiProvider = ({children}) => {

    const fetchAPI = async (url) => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          return data;
        } catch (error) {
          throw new Error(
            `Failed to fetch API Data from Backend: ${error?.message}`
          );
        }
      };
    
    const apiInfo = {
        fetchAPI,
    }
    return <APIContext.Provider value={apiInfo}>{children}</APIContext.Provider>;
};

export default ApiProvider;