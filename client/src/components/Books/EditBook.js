import React, {useState, useEffect} from 'react';

const EditBook = (props) => {

    // setting initial states
    const [book, setBook] = useState(props.currentBook);

    // effect hook to set setBook state to current selected book for editing
    useEffect(() => {
        setBook(props.currentBook)
    }, [props])

    // getting edit form inputs and setting them as states for setBook
    const handleInput = (e) => {
        const {name, value} = e.target;
        setBook({ ...book, [name]:value })
    }

    // handle edit form submission, update values in form
    const submitEditForm = (e) => {
        e.preventDefault();
        props.updateBook(book.id, book)
    }


    return(
        <form onSubmit={submitEditForm} className="text-light font-weight-bold">
            <div className="form-group">
            <label htmlFor="">Title</label>
            <input type="text" className="form-control" name="title" placeholder="Book title" value={book.title} onChange={handleInput}/>
            </div><br></br>
            <div className="form-group">
            <label htmlFor="">Author ID</label>
            <input type="text" className="form-control" name="author_id" placeholder="Author ID" value={book.author_id} onChange={handleInput} />
            </div><br></br>
            <div className="form-group">
            <label htmlFor="">Year Of Publication</label>
            <input type="text" className="form-control" name="year" placeholder="Year" value={book.year} onChange={handleInput} />
            </div><br></br>
            <div className="form-group">
            <label htmlFor="">ISBN</label>
            <input type="number" className="form-control" name="isbn" placeholder="isbn" value={book.isbn} onChange={handleInput} />
            </div><br></br>
            <button className="btn btn-primary mr-4">Submit</button>
            <button 
                type="submit" 
                className="btn btn-warning"
                onClick={() => props.setEdit(false)}
            >
                   Cancel
            </button>
        </form>
    )
}

export default EditBook;