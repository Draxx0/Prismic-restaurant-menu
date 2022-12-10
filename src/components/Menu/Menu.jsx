import "./Menu.css";

const Menu = ({ recipe }) => {
  return (
    <div className="recipe">
      <div key={recipe.id} className="recipe-info">
        <div className="recipe-card-top">
          <div className="overlay"></div>
          <img src={recipe.image} alt="" className="recipe-img" />
          <span>{recipe.tags}</span>
        </div>

        <div className="recipe-card-bottom">
          <h2 className="recipe-title">{recipe.name}</h2>
          <div className="ingredients-container">
            <h4 className="ingredient-title">Ingrédients</h4>
            <ul>
              {recipe.ingredientslist.map((ingredient, index) => (
                <li className="ingredient" key={ingredient + index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="price-container">
            <h4>Prix</h4>
            <p className="price">{recipe.price} €</p>
          </div>
        </div>
      </div>

      <div className="suggestions-container">
        <h2>Accompagnement</h2>
        <div className="suggestions-grid">
          {recipe.drinksSuggestion.length > 0 ? (
            recipe.drinksSuggestion.map((drink) => (
              <div key={drink.id} className="suggestion-card">
                <img src={drink.img} alt="Vin" className="suggestion-img" />
                <h5 className="suggestion-name">{drink.name}</h5>
              </div>
            ))
          ) : (
            <p>
              Il n'y a pas de vin approprié pour ce mets, ou ils ne sont plus en
              stocks
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
