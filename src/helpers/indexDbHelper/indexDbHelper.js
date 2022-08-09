// Returns indexDb
const initialIndexDbConfig = async () => {
  try {
    let request = await window.indexedDB.open("FarmilyDB");
    const db = request.result;

    return db;
  } catch (error) {
    throw error;
  }
};

const getStore = async (db, storeName, operation = "readwrite") => {
  const store = await db.transaction(storeName, operation).objectStore(storeName);

  return store;
};

export { initialIndexDbConfig, getStore };
