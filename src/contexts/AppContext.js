import React from "react";
import BasketStore from "../store/BasketStore";
import CatalogStore from "../store/CatalogStore";

const AppContext = React.createContext();

// контекст, который будем передавать
const context = {
  catalog: new CatalogStore(),
  basket: new BasketStore(),
};

const AppContextProvider = (props) => {
  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
