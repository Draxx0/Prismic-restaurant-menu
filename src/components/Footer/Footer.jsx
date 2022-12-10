// import Logo from "../../assets/img/logo.png";
import { useState } from "react";
import "./Footer.css";

const Footer = ({ menu }) => {
  const [logo, setLogo] = useState("");
  const getLogo = async () => {
    const logo = await menu[0].logo;
    setLogo(logo);
  };
  getLogo();
  return (
    <footer>
      <img src={logo} alt="Logo" className="logo" />
    </footer>
  );
};

export default Footer;
