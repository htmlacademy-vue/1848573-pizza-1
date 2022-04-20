import { PIZZA_VALUES_BY_ID } from "./constants";

export const getPizzaData = (pizza) => ({
  dough: (pizza.dough || []).map((dough, index) => ({
    ...dough,
    value: PIZZA_VALUES_BY_ID.dough[dough.id],
    checked: !index,
  })),
  sizes: (pizza.sizes || []).map((size, index) => ({
    ...size,
    value: PIZZA_VALUES_BY_ID.sizes[size.id],
    checked: index === 1,
  })),
  sauces: (pizza.sauces || []).map((sauce, index) => ({
    ...sauce,
    value: PIZZA_VALUES_BY_ID.sauces[sauce.id],
    checked: !index,
  })),
  ingredients: (pizza.ingredients || []).map((ingridient) => ({
    ...ingridient,
    value: PIZZA_VALUES_BY_ID.ingredients[ingridient.id],
    count: 0,
  })),
  name: "",
});

export const getSelectedPizzaItem = (pizza, name) =>
  pizza[name] && pizza[name].find((item) => item.checked);
  