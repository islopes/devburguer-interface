import {
  useContext,
  useState,
  createContext,
  useEffect,
  useEffectEvent,
} from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const putUserDate = (userInfo) => {
    setUserInfo(userInfo);

    localStorage.setItem('devburguer:userData', JSON.stringify(userInfo));
  };

  const logout = () => {
    setUserInfo({});
    localStorage.removeItem('devburguer:userData');
  };

  useEffect(() => {
    const userInfoLocalstorage = localStorage.getItem('devburguer:userData');

    if (userInfoLocalstorage) {
      setUserInfo(JSON.parse(userInfoLocalstorage));
    }
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, putUserDate, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must b avalid context');
  }

  return context;
};
