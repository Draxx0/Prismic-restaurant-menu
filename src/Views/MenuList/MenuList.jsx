import "./MenuList.css";
import Menu from "../../components/Menu/Menu";
import Cloche from "../../assets/img/salver-svgrepo-com.svg";
import { useState } from "react";

const MenuView = ({ recipes, menu }) => {
  const [brandName, setBrandName] = useState("");
  const getBrandName = async () => {
    const brandName = await menu[0].name;
    setBrandName(brandName);
  };
  getBrandName();

  return (
    <main>
      <h1 className="welcome">
        Bienvenue sur la carte de <span>{brandName}</span>.
      </h1>
      <h2 className="our-menus">
        Voici les menus disponible <img src={Cloche} alt="" />
      </h2>
      <div className="recipes-container">
        {recipes
          .filter((recipe) => recipe.isValide)
          .map((recipe) => (
            <Menu recipe={recipe} />
          ))}
      </div>
    </main>
  );
};

export default MenuView;
