const initState = {
    books: []
}


const bookReducer = (state = initState, action) => {
    switch (action.type){
        case 'Book Search':
            console.log(action.books);
            return {
                books:[action.books]
            };
        case 'Error':
            console.log(action.err);
            return state;
        default:
            return state;    
    }
}

export default bookReducer;