const pizzas = document.getElementById("menu");
const pizzaItems = pizzas.querySelectorAll(".pizza-category li");

pizzaItems.forEach(pizza => {
  const description = document.createElement("div");
  description.classList.add("pizza-description");
  description.style.opacity = 0;
  pizza.appendChild(description);

  pizza.addEventListener("mouseover", () => {
    description.style.opacity = 1;
    description.textContent = `Ingredients: ${pizza.textContent.split("(")[1]}`;

    const pizzaRect = pizza.getBoundingClientRect();
    description.style.left = `${pizzaRect.left}px`;
  });

  pizza.addEventListener("mouseout", () => {
    description.style.opacity = 0;
    
    description.textContent = "";
  });
});