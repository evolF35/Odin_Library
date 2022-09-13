

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.report = function(){
        return(title+author+pages+read);
    }
}

let myLibrary = [];


function addBookToLibrary(){
    
}