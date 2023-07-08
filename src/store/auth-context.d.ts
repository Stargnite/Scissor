import React, { createContext, useState, useEffect, useCallback } from "react";

let logoutTimer;

// interface User {
//   email: string;
//   displayName: string;
// }

// interface AuthContextType {
//   token: string;
//   isLoggedIn: boolean;
//   login: (token: string, expirationTime: string, user: User) => void;
//   logout: () => void;
// }

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token, expirationTime, user) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  // if(storedToken !== null && storedExpirationDate !== null) {}
  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

const AuthContextProvider = ({
  children,
}) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (
    token,
    expirationTime,
    user
  ) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    if (!user.displayName) {
      user.displayName = user.email;
    }
    localStorage.setItem("username", user.displayName);

    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  // useEffect(() => {
  //   if (tokenData) {
  //     console.log(tokenData.duration);
  //     logoutTimer = setTimeout(logoutHandler, tokenData.duration);
  //   }
  // }, [tokenData, logoutHandler]);

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }

    return () => {
      clearTimeout(logoutTimer);
    };
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token || "",
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  // return (
  //   <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  // );
};

export { AuthContext, AuthContextProvider };
