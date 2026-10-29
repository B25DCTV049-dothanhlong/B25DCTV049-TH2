import { useState } from "react";
import { books } from "./data/books";
import Header from "./components/Header";
import Section from "./components/Section";
import GenreFilter from "./components/GenreFilter";
import BookList from "./components/BookList";
import Footer from "./components/Footer";

function App() {
  const [favs, setFavs] = useState([]);
  const [genre, setGenre] = useState("all");

  const toggleFav = (id) => {
    setFavs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const genres = [...new Set(books.map((b) => b.genre))];
  const shown = genre === "all" ? books : books.filter((b) => b.genre === genre);

  return (
    <>
      <Header favCount={favs.length} />
      <main>
        <Section title="Danh sách sách">
          <GenreFilter genres={genres} selected={genre} onSelect={setGenre} />
          <p className="status">
            Đang hiển thị {shown.length} / {books.length} cuốn
          </p>
          <BookList books={shown} favs={favs} onToggleFav={toggleFav} />
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default App;