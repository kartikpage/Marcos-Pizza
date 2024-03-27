const orderButton = document.getElementById('orderButton');
const errorMessage = document.getElementById('errorMessage');

orderButton.addEventListener('click', function() {
  let selectedToppings = 0;
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  for (const checkbox of checkboxes) {
    if (selectedToppings >= 5) {
      errorMessage.textContent = 'You can only select up to 5 toppings!';
      return;
    }
    selectedToppings++;
  }

  const crust = document.querySelector('input[name="crust"]:checked');
  const sauce = document.querySelector('input[name="sauce"]:checked');
  const selectedToppingList = [];

  for (const checkbox of checkboxes) {
    selectedToppingList.push(checkbox.value);
  }

  
  console.log("Your Pizza:");
  console.log("  Crust:", crust.value);
  console.log("  Sauce:", sauce.value);
  console.log("  Toppings:", selectedToppingList.join(", "));

  alert("Your pizza is ordered!");
  alert("You Ordered: "+crust.value+" crust , "+sauce.value+" sauce and "+selectedToppingList.join(", ") +" toppings.");

  errorMessage.textContent = '';
});