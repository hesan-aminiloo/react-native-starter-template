import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Root Reducer
import app from './src/App/Reducers';

// Thunk
import thunk from 'redux-thunk';

// Logger
import logger from 'redux-logger';

function ConfigureStore(){
    const persistedReducer = persistReducer({
        key : 'app',
        storage,
        // blacklist: ['navigation']
    }, app);


    const middlewares = [
        thunk
    ];


    if (__DEV__)
        middlewares.push(logger);


    let store = compose(
        applyMiddleware(...middlewares)
    )(createStore)(persistedReducer);


    let persistor = persistStore(store);


    return { store, persistor };
}

export default store = ConfigureStore();