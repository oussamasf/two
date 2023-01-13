import { createContext, useState } from "react";

export const SandContext = createContext({
  a: null,
  setA: () => null,
});

export const SandProvider = ({ compo }) => {
  const [a, setA] = useState(null);
  const value = { a, setA };
  return <SandContext.Provider value={value}>{compo}</SandContext.Provider>;
};
