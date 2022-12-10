import { useState } from "react";
import "./Header.css";

const Header = ({ menu }) => {
  const [logo, setLogo] = useState("");
  const [headerImg, setHeaderImg] = useState("");
  const getLogo = async () => {
    const logo = await menu[0].logo;
    const header = await menu[0].image;
    setLogo(logo);
    setHeaderImg(header);
  };
  getLogo();
  return (
    <>
      <nav>
        <img src={logo} alt="Logo" className="logo" />
      </nav>

      <header>
        <img src={headerImg} alt="" />
      </header>
    </>
  );
};

export default Header;
