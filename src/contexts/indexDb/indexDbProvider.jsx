import React, { useState, useEffect } from "react";
// import StoreDbContext from "./storeIndexDbContext";
import { getStore, initialIndexDbConfig } from "../../helpers/indexDbHelper/indexDbHelper";
import InitialStoreContext from "./storeIndexDbContext";

const IndexDbProvider = (props) => {
  const [indexDbStores, setIndexDbStores] = useState({});

  useEffect(() => {
    let getIndexDbStores = async () => {
      try {
        const indexDb = await initialIndexDbConfig();
        const initialStore = await getStore(indexDb, "initialStore", "readwrite");

        setIndexDbStores({ initialStore });
      } catch (error) {
        alert(error.message);
      }
    };

    getIndexDbStores();
  }, []);

  return <InitialStoreContext.Provider value={{ ...indexDbStores }}>{props.children}</InitialStoreContext.Provider>;
};

export default IndexDbProvider;
