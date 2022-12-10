import "./Decorations.css";
import Leaf1 from "../../assets/img/leaf-branch-1.png";
import Leaf2 from "../../assets/img/leaf-branch-2.png";
import Leaf3 from "../../assets/img/leaf-branch-3.png";
import Leaf4 from "../../assets/img/leaf-branch-4.png";

const Decorations = () => {
  return (
    <>
      <img className="leaf" id="leaf1" src={Leaf1} alt="feuille" />
      <img className="leaf" id="leaf2" src={Leaf2} alt="feuille" />
      <img className="leaf" id="leaf3" src={Leaf3} alt="feuille" />
      <img className="leaf" id="leaf4" src={Leaf4} alt="feuille" />
      <img className="leaf" id="leaf5" src={Leaf1} alt="feuille" />
      <img className="leaf" id="leaf6" src={Leaf2} alt="feuille" />
      <img className="leaf" id="leaf7" src={Leaf3} alt="feuille" />
      <img className="leaf" id="leaf8" src={Leaf4} alt="feuille" />
      <img className="leaf" id="leaf9" src={Leaf1} alt="feuille" />
    </>
  );
};

export default Decorations;
