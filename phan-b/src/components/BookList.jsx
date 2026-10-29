import BookCard from "./BookCard";

function BookList({ books, favs, onToggleFav }) {
  return (
    <div className="grid">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          isFav={favs.includes(book.id)}
          onToggleFav={onToggleFav}
        />
      ))}
    </div>
  );
}

export default BookList;