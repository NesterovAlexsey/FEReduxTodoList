type Action =
    | { type: 'book/add'; payload: { title: string, author: string, dateOfProduction: number } }
    | { type: 'book/delete'; payload: string }
    | {
        type: 'book/edit';
        payload: {
            id: string,
            title: string,
            author: string,
            dateOfProduction: number,
            done: boolean
        }
    }
    | { type: 'book/done'; payload: string };

export default Action;
