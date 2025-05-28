import React, {useEffect} from "react";

const BookList = () => {
    const [books, setBooks] = React.useState([
        { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", rating: 4.8 },
        { id: 2, title: "1984", author: "George Orwell", rating: 4.7 },
        { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", rating: 4.5 },
        { id: 4, title: "Pride and Prejudice", author: "Jane Austen", rating: 1.9 },
    ]);
    const [lowRating, setLowRating] = React.useState(false);
    const [bookDetail, setBookDetail] = React.useState(null);
    useEffect(() => {
        if (bookDetail) {
            if (bookDetail.rating < 2) {
                setLowRating(true);
            }
            else {
                setLowRating(false);
            }
        }
    }, [bookDetail]);
    return(
        <div>
            <ul>
                {
                    books.map((book) => (
                        <li key={book.id} onClick={()=>{
                            setBookDetail(book)
                        }}>
                            <strong>{book.title}</strong>
                        </li>
                    ))
                }
            </ul>
            {
                bookDetail && (
                    <div>
                        <h2>Book Details</h2>
                        <p><strong>Title:</strong> {bookDetail.title}</p>
                        <p><strong>Author:</strong> {bookDetail.author}</p>
                        <p><strong>Rating:</strong> {bookDetail.rating}</p>
                    </div>
                )
            }
            {
                lowRating && (
                    <div>
                        <h2>Book with Low Ratings</h2>
                    </div>
                )
            }
        </div>
    )
}
export default BookList;