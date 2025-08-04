import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "hiral",
    email: "Hiral12@gmail.com"
  },
  setUser: () => {}
});

export default UserContext;