import { FaSearch, FaBell, FaPlus } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">
      <h1>Healthcare.</h1>
      <div className="search-bar">
        <FaSearch />
        <input type="text" placeholder="Search" />
      </div>
      <div className="header-right">
        <FaPlus className="icon" />
        <FaBell className="icon" />
        <div className="profile">
          <div className="avatar">JD</div>
        </div>
      </div>
    </header>
  );
}