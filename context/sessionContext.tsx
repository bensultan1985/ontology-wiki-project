import React from "react";

export const SessionProvider = React.createContext({
  email: "test@test.com",
  name: "Ben Sultan",
  role: "admin",
  token: "3d9f032",
});
