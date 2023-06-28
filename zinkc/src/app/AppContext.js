"use client"

import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

 export const AppProvider = ({ children }) => {
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("");

 const value = {
 email : [email, setEmail],
 password : [password, setPassword]
 };
 return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
 };

 export const useAppContext=()=> useContext(AppContext)