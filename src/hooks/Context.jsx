import { createContext, useState } from "react";

import React from "react";
export const UserContext = createContext();
export const ItemContext = createContext();


export function ItemProvider({ children }) {
  const [Item, setItem] = useState(null);

  return (
    <ItemContext.Provider value={{Item, setItem }}>
      {children}
    </ItemContext.Provider>
  );
}

export function UserProvider({ children }) {
    const [User, setUser] = useState(null);
  
    return (
      <UserContext.Provider value={{ User, setUser }}>
        {children}
      </UserContext.Provider>
    );
  }