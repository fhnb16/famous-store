import { ref } from 'vue'
import { defineStore } from 'pinia'
import { notify } from "@kyvg/vue3-notification";

export const useMainStore = defineStore('main', () => {
  const itemsList = ref([]);
  const itemsListFiltered = ref([]);
  const catsList = ref([]);
  const cartItems = ref([]);
  const searchQuery = ref("");
  const addToCart = function(event, item) {
      event.target.classList.add('busy');
      fetch('//jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(function (data) {
          const json = data;
          console.log(json.title);
            if (cartItems.value.includes(item.id)) {
              cartItems.value = cartItems.value.filter(itm => itm !== item.id);
              localStorage.setItem('cart', JSON.stringify(cartItems.value));
              notify({
                title: "Элемент удалён",
                text: item.title + " удалено из корзины",
              });
                event.target.classList.remove('busy');
            } else {
              cartItems.value.push(item.id);
              localStorage.setItem('cart', JSON.stringify(cartItems.value));
              notify({
                title: "Элемент добавлен",
                text: item.title + " добавлено в корзину",
              });
                event.target.classList.remove('busy');
            }
        })
        .catch(function (ex) {
              notify({
                title: "Произошла ошибка",
                text: ex.message,
              });
        })
  }

  return { itemsList, itemsListFiltered, catsList, cartItems, searchQuery, addToCart }
})
