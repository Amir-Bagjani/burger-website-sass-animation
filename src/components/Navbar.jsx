import { useEffect } from "react";
import { useState } from "react";
import "../styles/navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState("");

  useEffect(() => {
    window.addEventListener(`scroll`, () => {
      setOpen("");
    });

    return () => window.removeEventListener(`scroll`);
  }, []);

  return (
    <header className="header">
      <i
        id="menu-btn"
        className={open === "menu" ? "fas fa-times icons" : "fas fa-bars icons"}
        onClick={() => setOpen((prev) => (prev === "menu" ? "" : "menu"))}
      ></i>
      <i
        id="search-btn"
        className={
          open === "search" ? "fas fa-times icons" : "fas fa-search icons"
        }
        onClick={() => setOpen((prev) => (prev === "search" ? "" : "search"))}
      ></i>

      <nav className={open === "menu" ? `navbar active` : `navbar`}>
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <span className="space"></span>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
        <a href="#blogs">Blogs</a>
      </nav>

      <a href="#" className="fas fa-shopping-cart icons"></a>

      <a href="#home" className="logo">
        <img src="images/logo.png" alt="logo" />
      </a>

      <form
        className={open === "search" ? `search-form active` : `search-form`}
      >
        <input type="search" placeholder="search here..." id="search-box" />
        <label
          htmlFor="search-box"
          className="fas fa-search icons"
        ></label>
      </form>
    </header>
  );
};

export default Navbar;
