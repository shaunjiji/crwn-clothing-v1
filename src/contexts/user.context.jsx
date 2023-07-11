import { createContext, useState, useEffect, useReducer } from "react";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});



const userReducer = (state, action) => {
  const {type, payload} = action;

  switch(type){
    case 'SET_CURRENT_USER':
      return {
        currentUser: payload;
      }
    case 'increment':
      return {
        
      }
    default: 
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
}



export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

/*

const userReducer = () => {
  return {
    currentUser: 
  }
}

*/
