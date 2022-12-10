import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { useEffect } from "react";

export const GetDbData = async () => {
  const [recipesDB] = useAllPrismicDocumentsByType("recipes");
  const [ingredientsDB] = useAllPrismicDocumentsByType("ingredients");
  const [drinksDB] = useAllPrismicDocumentsByType("drinks");
  const [menu] = useAllPrismicDocumentsByType("menu");

  // useEffect(() => {
  //   if (recipesDB) {
  //     console.log("Recettes non modelé", recipesDB);
  //   }
  // }, [recipesDB]);

  // useEffect(() => {
  //   if (ingredientsDB) {
  //     console.log("Ingrédients non modelé", ingredientsDB);
  //   }
  // }, [ingredientsDB]);

  // useEffect(() => {
  //   if (drinksDB) {
  //     console.log("Boissons non modelé", drinksDB);
  //   }
  // }, [drinksDB]);

  return { recipesDB, ingredientsDB, drinksDB, menu };
};

export const ModelingData = async () => {
  const { recipesDB, ingredientsDB, drinksDB, menu } = await GetDbData();

  const modeledIngredientsList = ingredientsDB.map((ingredient) => {
    return {
      id: ingredient.id,
      name: ingredient.data.ingredientname[0].text,
      isIngredientInStock: ingredient.data.isingredientinstock,
    };
  });

  const modeledDrinks = drinksDB.map((drink) => {
    return {
      id: drink.id,
      img: drink.data.drinkimg.url,
      name: drink.data.drinkname[0].text,
      isDrinkInStock: drink.data.isdrinkinstock,
    };
  });

  const modeledRecipes = recipesDB.map((recipe) => {
    const stockedIngredients = modeledIngredientsList
      .filter((ingredient) => {
        if (ingredient.isIngredientInStock === true) {
          return ingredient;
        }
      })
      .map((ingredient) => ingredient.id);

    const stockedDrinks = modeledDrinks
      .filter((drink) => {
        if (drink.isDrinkInStock === true) {
          return drink;
        }
      })
      .map((drink) => drink.id);

    const newRecipe = {
      isVisible: true,
      ingredientslist: [],
      drinksSuggestion: [],
    };

    recipe.data.ingredientslist.forEach((ingredient) => {
      if (stockedIngredients.includes(ingredient.ingredient.id)) {
        const ingredientName = modeledIngredientsList
          .filter((ingredientModeled) => {
            if (ingredientModeled.id === ingredient.ingredient.id) {
              return ingredientModeled;
            }
          })
          .map((ingredientModeled) => ingredientModeled.name);

        newRecipe.ingredientslist.push(...ingredientName);
      } else {
        newRecipe.isVisible = false;
      }
    });
    recipe.data.recipesuggestions.forEach((suggestion) => {
      if (stockedDrinks.includes(suggestion.drinks.id)) {
        const drink = modeledDrinks.filter((drinkModeled) => {
          if (drinkModeled.id === suggestion.drinks.id) {
            return drinkModeled;
          }
        });

        newRecipe.drinksSuggestion.push(...drink);
      }
    });

    return {
      id: recipe.id,
      name: recipe.data.recipetitle[0].text,
      image: recipe.data.recipeimg.url,
      tags: recipe.tags[0],
      price: recipe.data.recipeprice,
      ingredientslist: newRecipe.ingredientslist,
      drinksSuggestion: newRecipe.drinksSuggestion,
      isValide: newRecipe.isVisible,
    };
  });

  const modeledMenu = menu.map((menu) => {
    return {
      id: menu.id,
      name: menu.data.menutitle[0].text,
      image: menu.data.menuimg.url,
      logo: menu.data.applogo.url,
    };
  });

  return { modeledRecipes, modeledMenu };
};
