import React, { createContext, useState, useEffect, useCallback } from "react";

interface User {
  email: string;
  displayName: string;
}

interface AuthContextType {
  token: string;
  isLoggedIn: boolean;
  login: (token: string, expirationTime: string, user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  token: "",
  isLoggedIn: false,
  login: (token: string, expirationTime: string, user: User) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime: string): number => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = (): { token: string; duration: number } | null => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");

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

const AuthContextProvider = ({ children }) => {
  const tokenData = retrieveStoredToken();
  let initialToken: string | undefined;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState<string | undefined>(initialToken);
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
    token: string,
    expirationTime: string,
    user: User
  ): void => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    if (!user.displayName) {
      user.displayName = user.email;
    }
    localStorage.setItem("username", user.displayName);
    console.log(user.displayName);
    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue: AuthContextType = {
    token: token || "",
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };


  return (
    <AuthContext.Provider  value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
