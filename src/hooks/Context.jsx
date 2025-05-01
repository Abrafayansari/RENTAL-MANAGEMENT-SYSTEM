import { createContext, useState } from "react";

import React from "react";
export const UserContext = createContext();


export function UserProvider({ children }) {
    const [User, setUser] = useState(null);
  
    return (
      <UserContext.Provider value={{ User, setUser }}>
        {children}
      </UserContext.Provider>
    );
  }
