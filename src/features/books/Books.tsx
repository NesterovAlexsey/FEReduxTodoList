import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import bookReducer from './bookReducer';
// import { RootState } from '../../store';
// import { title } from 'process';

export default function Books(): JSX.Element {
    // const books = useSelector((globalState: RootState) => globalState.books);
    // const dispatch = useDispatch();
    // const [book, setBook] = useState<string>('');
    // function addBook(e: SyntheticEvent): void {
    //     e.preventDefault();
    //     dispatch({ type: 'book/add', payload: bookReducer });
    //     setBook('');
    //   }
    return (
        <>
            <div>List of Books</div>
            <div>Draft</div>
            {/* <form onSubmit={addBook}>
                <input
                  type="text"
                  required
                  placeholder="Book name"
                  value={title}
//                  onChange={(e) => setBook(e.target.value)}
                />
                <input
                  type="text"
                  required
                  placeholder="Author"
                  value={author}
//                  onChange={(e) => setBook(e.target.value)}
                />
                <input
                  type="number"
                  required
                  placeholder="Production year"
                  value={dateOfProduction}
//                  onChange={(e) => setBook(e.target.value)}
                />
                <button type="submit">Add book</button>
            </form> */}
        </>
    );
}
