import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <header className="header">
      <i id="menu-btn" className="fas fa-bars icons"></i>
      <i id="search-btn" className="fas fa-search icons"></i>

      <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <span className="space"></span>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
          <a href="#blogs">Blogs</a>
      </nav>

      <a href="#" className="fas fa-shopping-cart icons"></a>

      <a href="#home" className="logo"><img src="images/logo.png" alt="logo" /></a>
      
    </header>
  );
};

export default Navbar;
