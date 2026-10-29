function BookCard({ book, isFav, onToggleFav }) {
  return (
    <article className="card">
      <h3>{book.title}</h3>
      <p>
        {book.author} · {book.genre} · {book.year}
      </p>
      <button onClick={() => onToggleFav(book.id)}>
        {isFav ? "♥ Đã thích" : "♡ Yêu thích"}
      </button>
    </article>
  );
}

export default BookCard;