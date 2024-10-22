// dependencies
import logoImg from "../../assets/logo.svg";

// component
const Logo = () => {
  return (
    <a href="/">
      <img src={logoImg} width={139} height={26} alt="CineRental" />
    </a>
  );
};

export default Logo;
