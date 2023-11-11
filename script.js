const dinner= { cheesebugrer: 12, steak: 20, soup: 8, macAndcheese: 14, soupAndsalad: 16,};
console.log(Objects.keys(cheesebugrer, steak, soup, macandcheese, soupandsalad));
console.log(Objects.values(12, ));
let totalCost = 0;

for (const individualMeal in dinner) {
  totalCost += dinner[individualMeal];
}

console.log(totalCost);