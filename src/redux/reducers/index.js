import {combineReducers} from '@reduxjs/toolkit'
import userSlice from './userSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
import cartSlice from './cartSlice'
import confessionSlice from './confessionSlice'
  const persistConfig = {
      key: 'root',
      version: 1,
      storage,
    }
    const rootReducer = combineReducers({
        user: userSlice,
        cart :cartSlice,
        confess : confessionSlice
    })
  export const persistedReducer = persistReducer(persistConfig, rootReducer)

export default rootReducer