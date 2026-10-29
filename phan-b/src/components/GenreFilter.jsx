function GenreFilter({ genres, selected, onSelect }) {
  return (
    <div className="genre-filter">
      <button
        className={selected === "all" ? "active" : ""}
        onClick={() => onSelect("all")}
      >
        Tất cả
      </button>
      {genres.map((g) => (
        <button
          key={g}
          className={selected === g ? "active" : ""}
          onClick={() => onSelect(g)}
        >
          {g}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;