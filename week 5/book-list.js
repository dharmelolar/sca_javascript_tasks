
class Book{
    constructor(title,genre,author,read,date){
        this.title  = title;
        this.genre = genre;
        this.author = author;
        this.read   = read;
        this.date   = date
    }
}

class BookList extends Book{
    constructor(title,genre,author,read,date){
    super(title,genre,author,read,date)
    }
    finishCurrentBook(){
        console.log()
    }
}
