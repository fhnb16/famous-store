import { ref } from 'vue'
import { defineStore } from 'pinia'
import { notify } from "@kyvg/vue3-notification";

export const useMainStore = defineStore('main', () => {
  const itemsList = ref([]);
  const itemsListFiltered = ref([]);
  const catsList = ref([]);
  const cartItems = ref([]);
  const searchQuery = ref("");
  const addToCart = function(item) {
    if (cartItems.value.includes(item.id)) {
      cartItems.value = cartItems.value.filter(itm => itm !== item.id);
	  notify({
	    title: "Элемент удалён",
	    text: item.title + " удалено из корзины",
	  });
    } else {
      cartItems.value.push(item.id);
	  notify({
	    title: "Элемент добавлен",
	    text: item.title + " добавлено в корзину",
	  });
    }
  }

  return { itemsList, itemsListFiltered, catsList, cartItems, searchQuery, addToCart }
})
