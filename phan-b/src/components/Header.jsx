function Header({ favCount }) {
  return (
    <header className="header">
      <h1>Thư viện của lớp</h1>
      <p>Sách yêu thích: {favCount}</p>
    </header>
  );
}

export default Header;