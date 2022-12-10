import "./App.css";
import { useEffect, useState } from "react";
import { ModelingData } from "./data/ModelingData";
import Header from "./components/Header/Header";
import MenuList from "./Views/MenuList/MenuList";
import Footer from "./components/Footer/Footer";
import Decorations from "./components/Decorations/Decorations";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [menu, setMenu] = useState([]);

  console.log(menu);

  const getDataModeled = async () => {
    const data = await ModelingData();
    setRecipes(data.modeledRecipes);
    setMenu(data.modeledMenu);
  };

  getDataModeled();

  // useEffect(() => {
  //   getDataModeled();
  // }, []);

  return (
    <div className="App">
      <Header menu={menu} />
      <MenuList recipes={recipes} />
      <Decorations />
      <Footer menu={menu} />
    </div>
  );
}

export default App;
