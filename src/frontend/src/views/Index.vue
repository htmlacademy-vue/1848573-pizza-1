<template>
  <div>
    <header class="header">
      <div class="header__logo">
        <a href="#" class="logo">
          <img
            src="@/assets/img/logo.svg"
            alt="V!U!E! Pizza logo"
            width="90"
            height="40"
          />
        </a>
      </div>
      <div class="header__cart">
        <a href="#">0 ₽</a>
      </div>
      <div class="header__user">
        <a href="#" class="header__login"><span>Войти</span></a>
      </div>
    </header>

    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>

          <div class="content__dough">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите тесто</h2>

              <div class="sheet__content dough">
                <label
                  v-for="(dough, index) in pizza.dough"
                  class="dough__input"
                  :class="`dough__input--${dough.value}`"
                  :key="index"
                >
                  <input
                    type="radio"
                    name="dought"
                    :value="dough.value"
                    class="visually-hidden"
                    :checked="dough.checked"
                  />
                  <b>{{ dough.name }}</b>
                  <span>{{ dough.description }}</span>
                </label>
              </div>
            </div>
          </div>

          <div class="content__diameter">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите размер</h2>

              <div class="sheet__content diameter">
                <label
                  v-for="(size, index) in pizza.sizes"
                  class="diameter__input"
                  :class="`diameter__input--${size.value}`"
                  :key="index"
                >
                  <input
                    type="radio"
                    name="diameter"
                    :value="size.value"
                    class="visually-hidden"
                    :checked="size.checked"
                  />
                  <span>{{ size.name }}</span>
                </label>
              </div>
            </div>
          </div>

          <div class="content__ingredients">
            <div class="sheet">
              <h2 class="title title--small sheet__title">
                Выберите ингридиенты
              </h2>

              <div class="sheet__content ingredients">
                <div class="ingredients__sauce">
                  <p>Основной соус:</p>
                  <label
                    v-for="(sauce, index) in pizza.sauces"
                    class="radio ingredients__input"
                    :key="index"
                  >
                    <input
                      type="radio"
                      name="sauce"
                      :value="sauce.value"
                      :checked="sauce.checked"
                    />
                    <span>{{ sauce.name }}</span>
                  </label>
                </div>

                <div class="ingredients__filling">
                  <p>Начинка:</p>

                  <ul class="ingredients__list">
                    <li
                      v-for="(ingredient, index) in pizza.ingredients"
                      class="ingredients__item"
                      :key="index"
                    >
                      <span
                        class="filling"
                        :class="`filling--${ingredient.value}`"
                      >
                        {{ ingredient.name }}
                      </span>
                      <div class="counter counter--orange ingredients__counter">
                        <button
                          type="button"
                          class="
                            counter__button
                            counter__button--disabled
                            counter__button--minus
                          "
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="content__pizza">
            <label class="input">
              <span class="visually-hidden">Название пиццы</span>
              <input
                type="text"
                name="pizza_name"
                placeholder="Введите название пиццы"
              />
            </label>

            <div class="content__constructor">
              <div class="pizza pizza--foundation--big-tomato">
                <div class="pizza__wrapper">
                  <div class="pizza__filling pizza__filling--ananas"></div>
                  <div class="pizza__filling pizza__filling--bacon"></div>
                  <div class="pizza__filling pizza__filling--cheddar"></div>
                </div>
              </div>
            </div>

            <div class="content__result">
              <p>Итого: 0 ₽</p>
              <button type="button" class="button button--disabled" disabled>
                Готовьте!
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import pizzaData from "@/static/pizza.json";
import { getPizzaData } from "@/common/helpers";
export default {
  name: "Index",
  data() {
    return {
      pizza: getPizzaData(pizzaData),
    };
  },
};
</script>
<style></style>
