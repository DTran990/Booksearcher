const initState = {
    books: []
}

const bookReducer = (state = initState, action) => {
    switch (action.type){
        case 'Book Search':
            console.log(action.books);
            return {
                books:[...state.books, action.books]
            };
        default:
            return state;    
    }
}

export default bookReducer;