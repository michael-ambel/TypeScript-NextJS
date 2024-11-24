import { Pizza, PizzaProps } from "./models/Pizza";

const rootElement = document.querySelector(".root")!;

function createPizzaTemplet(pizza: PizzaProps): string {
  return `
     <div class="pizza">
      <h2>${pizza.title}...</h2>
      <p class="toppings">${pizza.toppings.join(", ")}</p>
      <p>${pizza.description}</p>
      <span>£${pizza.price}</span>
    </div>
    `;
}

function renderTemplet(templets: string[], parent: Element): void {
  const templeteElement = document.createElement("template");

  for (const t of templets) {
    templeteElement.innerHTML += t;
  }
  parent.append(templeteElement.content);
}

document.addEventListener("DOMContentLoaded", async () => {
  const pizzas = await Pizza.loadAll();
  const pizzasTemplets = pizzas.map(createPizzaTemplet);
  renderTemplet(pizzasTemplets, rootElement);
});
