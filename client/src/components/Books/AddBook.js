import React, {useState} from 'react';

const Addbook = (props) => {

    // setting inital states for Component
    const formState = {
         id:null, 
         name:'', 
         author:'', 
         year:'',
         isbn:''
        }
    const [book, setBook] = useState(formState);

    // getting form inputs and setting them as states
    const handleInput = (e) => {
        const {name, value} = e.target;
        setBook({ ...book, [name]:value })
    }

    // handle book form on submission
    const submitBook = (e) => {
        e.preventDefault();
        if(!book.name || !book.author || !book.year || !book.isbn) return
        props.addBook(book)
        setBook(formState)
    }

    return(
        <form onSubmit={submitBook} className="text-light font-weight-bold">
            <div className="form-group">
            <label htmlFor="">Name</label>
            <input type="text" className="form-control" name="name" placeholder="Book name" value={book.name} onChange={handleInput}/>
            </div><br></br>
            <div className="form-group">
            <label htmlFor="">Author</label>
            <input type="text" className="form-control" name="author" placeholder="Author" value={book.author} onChange={handleInput} />
            </div><br></br>
            <div className="form-group">
            <label htmlFor="">Year Of Publication</label>
            <input type="text" className="form-control" name="year" placeholder="Year" value={book.year} onChange={handleInput} />
            </div><br></br>
            <div className="form-group">
            <label htmlFor="">ISBN</label>
            <input type="number" className="form-control" name="isbn" placeholder="isbn" value={book.isbn} onChange={handleInput} />
            </div><br></br>
            
            <button type="submit" className="btn btn-primary">Add Book</button>
        </form>
    )
}

export default Addbook;