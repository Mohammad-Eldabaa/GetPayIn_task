import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistConfig,
} from "redux-persist";
// import { MMKV } from "react-native-mmkv";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const storage = new MMKV();

// export const reduxStorage = {
//   setItem: (key: string, value: string): Promise<boolean> => {
//     storage.set(key, value);
//     return Promise.resolve(true);
//   },
//   getItem: (key: string): Promise<string | null> => {
//     const value = storage.getString(key);
//     return Promise.resolve(value ?? null);
//   },
//   removeItem: (key: string): Promise<void> => {
//     storage.delete(key);
//     return Promise.resolve();
//   },
// };

const persistConfig: PersistConfig<ReturnType<typeof authReducer>> = {
  key: "auth",
  storage: AsyncStorage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
