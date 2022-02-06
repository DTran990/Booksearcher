const api_key = "AIzaSyCQ_R7Ca_7RmaVCJv2o6oP0OKQsemK1N7U";
let api_link = "";

const ApiCreator = (search, type) => {
    switch (type){
        case 'Title':
            return "https://www.googleapis.com/books/v1/volumes?q=intitle:"+search+"&maxResults=40&key="+api_key;
        case 'Author':
            return "https://www.googleapis.com/books/v1/volumes?q=inauthor:"+search+"&maxResults=40&key="+api_key;
        case 'Publisher':
            return "https://www.googleapis.com/books/v1/volumes?q=inpublisher:"+search+"&maxResults=40&key="+api_key;
        case 'Subject':
            return "https://www.googleapis.com/books/v1/volumes?q=subject:"+search+"&maxResults=40&key="+api_key;
        case 'ISBN':
            return "https://www.googleapis.com/books/v1/volumes?q=isbn:"+search+"&maxResults=40&key="+api_key;
        case 'LCCN':
            return "https://www.googleapis.com/books/v1/volumes?q=lccn:"+search+"&maxResults=40&key="+api_key;
        case 'OCLC':
            return "https://www.googleapis.com/books/v1/volumes?q=oclc:"+search+"&maxResults=40&key="+api_key;
        default:
            return '';
    }
}

export const bookSearch = (books) => {
    return (dispatch) => {
        api_link = ApiCreator(books.userSearch, books.searchType);
        if (api_link !== ''){
            fetch(api_link)
                .then( res => res.json())
                .then(data =>{
                    dispatch({ type: 'Book Search', books:data});
                })
                .catch((err) => console.log(err))
        }
        
    }
}