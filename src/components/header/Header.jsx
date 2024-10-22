// dependencies
import HeaderNav from "./HeaderNav";
import Logo from "./Logo";

// component
const Header = () => {
  return (
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <Logo />
        <HeaderNav />
      </nav>
    </header>
  );
};

export default Header;
