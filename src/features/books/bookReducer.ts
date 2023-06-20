import uniqid from 'uniqid';
import Book from './types/Book';
import Action from './types/Action';

const initialState: Book[] = [
    {
        id: uniqid(),
        title: 'Black Swan',
        author: 'Nassim Taleb',
        dateOfProduction: 2007,
        done: false,
    }
];

export default function bookReducer(state: Book[] = initialState, action: Action): Book[] {
    switch (action.type) {
        case 'book/add':
            return [...state, {
                id: uniqid(),
                title: action.payload.title,
                author: action.payload.author,
                dateOfProduction: action.payload.dateOfProduction,
                done: false,
            }];
        case 'book/delete':
            return state.filter((book) => book.id !== action.payload);
        case 'book/edit':
            return state.map((book) => {
                if (book.id === action.payload.id) {
                    return {
                        ...book,
                        title: action.payload.title,
                        author: action.payload.author,
                        dateOfProduction: action.payload.dateOfProduction,
                        done: action.payload.done
                    };
                }
                return book;
            });
        case 'book/done': return state.map((book) => {
            if (book.id === action.payload) {
                return { ...book, done: !book.done };
            }
            return book;
        });
        default: return state;
    }
}
