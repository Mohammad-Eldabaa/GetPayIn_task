import { PersistConfig, persistReducer } from "redux-persist";
import authReducer from "../authSlice/authSlice";
import productReducer from "../productsSlice/productSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MMKV } from "react-native-mmkv";

const storage = new MMKV();

export const reduxStorage = {
  setItem: (key: string, value: string): Promise<boolean> => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: string): Promise<string | null> => {
    const value = storage.getString(key);
    return Promise.resolve(value ?? null);
  },
  removeItem: (key: string): Promise<void> => {
    storage.delete(key);
    return Promise.resolve();
  },
};

const persistConfig: PersistConfig<ReturnType<typeof authReducer>> = {
  key: "auth",
  storage: reduxStorage,
  // storage: AsyncStorage,
};

const productspersistConfig: PersistConfig<ReturnType<typeof productReducer>> =
  {
    key: "products",
    storage: reduxStorage,
    // storage: AsyncStorage,
  };

export const persistedAuthReducer = persistReducer(persistConfig, authReducer);
export const persistedProcutsReducer = persistReducer(
  productspersistConfig,
  productReducer
);
