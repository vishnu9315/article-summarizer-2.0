import { configureStore } from '@reduxjs/toolkit'
import { articleApi } from './article'

export const store = configureStore({ 
    reducer: {
        [articleApi.reducerPath] : articleApi.reducer,
    },
    // Redux middleware function provides a medium to interact with dispatched action before they reach the reducer
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware),
 })