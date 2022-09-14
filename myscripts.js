function Book(){
    this.title = '';
    this.author = '';
    this.pages = '';
    this.read = '';
}
Book.prototype.changeTitle = function(newTitle) {
    this.title = newTitle;
}
Book.prototype.changeAuthor = function(newAuthor) {
    this.author = newAuthor;
}
Book.prototype.changePages= function(newPages) {
    this.pages = newPages;
}
Book.prototype.changeRead = function(newRead) {
    this.read = newRead;
}
Book.prototype.report = function(){
    return(this.title+this.author+this.pages+this.read);
}

let oldButton = document.querySelector('.button');
let shelf = document.querySelector('.showcase');
let container = document.createElement("div");



let form = document.createElement("form");
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.margin = "30px";
form.style.maxWidth = "400px";
form.style.gap = "50px";
form.style.flexGrow = "1";
form.style.justifyContent = "center";


let formTitle = document.createElement("input");
formTitle.setAttribute('id','Title');
formTitle.placeholder = "Title";

let formAuthor = document.createElement("input");
formAuthor.setAttribute('id','Author');
formAuthor.placeholder = "Author"

let formPages = document.createElement("input");
formPages.setAttribute('id','Pages');
formPages.placeholder = "Pages"

let formRead = document.createElement("input");
formRead.setAttribute('id','Read');
formRead.placeholder = "Read";

container.style.display = "flex";
container.style.justifyContent = "center";

let submit = document.createElement("button");
submit.innerText = "Submit";
submit.style.backgroundColor = "beige";
submit.style.boxShadow = " 0px 0px #ed0606";

shelf.style.display = "grid";


function inputSetUp(){

    oldButton.innerHTML = "";

    shelf.innerHTML = "";
    shelf.style.display = "grid";

form.appendChild(formTitle);
form.appendChild(formAuthor);
form.appendChild(formPages);
form.appendChild(formRead);

container.appendChild(form);

shelf.appendChild(container);
shelf.appendChild(submit);

}

let button = document.querySelector('.addBook');
button.addEventListener('click',() => {
    inputSetUp();
});



submit.addEventListener('click',() =>{
    if(formTitle.value != "" &&
    formAuthor.value != "" &&
    formPages.value != "" &&
    formRead.value != ""
    ){
       addBookToLibrary();
       displayBooks(); 
    }
});


let myLibrary = [];


function addBookToLibrary(){

    let book = new Book();

    book.changeTitle(formTitle.value);
    book.changeAuthor(formAuthor.value);
    book.changePages(formPages.value);
    book.changeRead(formRead.value);

    myLibrary.push(book);
}



function displayBooks(){
    shelf.innerHTML = "";
    shelf.style.display = "flex";

    formTitle.value = "";
    formAuthor.value = "";
    formPages.value = "";
    formRead.value = "";

    oldButton.appendChild(button);
    
    for(let i = 0; i < myLibrary.length; i++){
        let card = document.createElement("div");
        card.setAttribute('id',`Card_${i}`);


        let cardTitle = myLibrary[i].title;
        let cardAuthor = myLibrary[i].author;
        let cardPages = myLibrary[i].pages;
        let cardRead = myLibrary[i].read;

        let pTitle = document.createElement("p");
        pTitle.innerText = cardTitle;
        pTitle.style.fontWeight = "bold";
        pTitle.style.fontSize = "23px";

        let pAuthor = document.createElement("p");
        pAuthor.innerText = cardAuthor;
        pAuthor.style.fontWeight = "bold";
        pAuthor.style.fontSize = "20px";

        let pPages = document.createElement("p");
        pPages.innerText = cardPages + " pages";

        let pRead = document.createElement("p");
        pRead.innerText = cardRead;

        let pdelete = document.createElement("button");
        pdelete.setAttribute('class','pdel');
        pdelete.setAttribute('id',`card${i}`);
        pdelete.style.boxShadow = "0px 0px";
        pdelete.style.backgroundColor = "black";
        pdelete.style.color = "white";
        pdelete.style.maxHeight = "50px";
        pdelete.innerText = "Delete";

        card.appendChild(pTitle);
        card.appendChild(pAuthor);
        card.appendChild(pPages);
        card.appendChild(pRead);
        card.appendChild(pdelete);

        card.style.border = "2px solid black";
        card.style.borderRadius = "40px";
        card.style.margin = "20px";
        card.style.padding = "10px";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.alignItems = "center";
        card.style.fontFamily = "'Times New Roman', Times, serif"

        
        shelf.appendChild(card);    


        let pdel = document.querySelector(`#card${i}`);

        pdel.addEventListener('click', ()=>{
            let index = pdel.id;

            index = index.replace("card","");
            index = +index;

            deleteCard(index);
        })
    }



}

function deleteCard(index) {

    let removal = document.getElementById(`Card_${index}`);
    removal.remove();


    myLibrary.splice(index,1);

}