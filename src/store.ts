import { combineReducers, createStore } from 'redux';
import authReducer from './features/auth/authReducer';
import counterReducer from './features/counter/counterReducer';
import tasksReducer from './features/tasks/tasksReducer';
import bookReducer from './features/books/bookReducer';

const store = createStore(combineReducers({
    counter: counterReducer,
    auth: authReducer,
    tasks: tasksReducer,
    // products: productsReducer
    books: bookReducer,
},));

export default store;

export type RootState = ReturnType<typeof store.getState>;
