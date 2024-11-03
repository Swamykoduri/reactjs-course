import React, { useEffect, useState } from "react";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=le";
const URL2 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const CocktailApi = () => {
  const [drinks, setDrinks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState({ status: false, msg: "" });
  // console.log(inputValue)

  const getCocktailData = async (url) => {

    try {
      setError({ status: false, msg: "" });

      const response = await fetch(url);
      const { drinks } = await response.json();
      // console.log(drinks);
      // console.log(response);
     
      if (!drinks) {
        throw new error("No matching inputs");
      }
       setDrinks(drinks || []);
    } catch (error) {
      setError({ status: true, msg: error.message });
    }
  };

  useEffect(() => {
    const apiUrl = inputValue ? URL2 + inputValue : URL;
    getCocktailData(apiUrl);
  }, [inputValue]);

  // getCocktailData(URL);
  return (
    <div className="text-center">
      <h1>Cocktail Api</h1>
      <div className="mt-6">
        <div>
          <form className="flex max-w-96 mx-auto mb-9">
            <input
              type="text"
              placeholder="Enter cocktail name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="px-3 py-2 rounded-md w-full outline-none focus:ring-2 focus:ring-orange-600"
            />
          </form>
        </div>
        <div>
          {error?.status ? (
            <h1>{error.msg}</h1>
          ) : (
            <ul className="grid grid-cols-3 gap-5">
              {drinks.map((drink) => {
                const { idDrink, strDrinkThumb, strDrink } = drink;

                return (
                  <li key={idDrink}>
                    <img
                      src={strDrinkThumb}
                      alt={strDrink}
                      className="rounded-lg"
                    />
                    <p>{strDrink}</p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CocktailApi;
