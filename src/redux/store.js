import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'; // Import userReducer
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedUserReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
});

const persistor = persistStore(store);

export {store, persistor};
