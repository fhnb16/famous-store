<script setup>
import Items from '@/components/Items_Component.vue';

import { storeToRefs } from 'pinia';
import { useMainStore } from '@/stores/main.js';

const { itemsList, catsList, searchQuery } = storeToRefs(useMainStore());

function filteredList(){
  if (searchQuery.value !== "") {
    console.log(searchQuery.value.toLowerCase());
    // return itemsList.value.find(o => o.title.includes(searchQuery.value));
    return itemsList.value.filter(o => o.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
                  .sort((a, b) => a.title.toLowerCase().indexOf(searchQuery.value.toLowerCase()) - b.title.toLowerCase().indexOf(searchQuery.value.toLowerCase()));

  } else {
    return itemsList.value;
  }
}

</script>

<template>
          <div class="category" v-for="category in catsList" :key="category.id">
            <Items :itemsList="filteredList()" :catID="category.id" :catName="category.name" />
          </div>
</template>

<style scoped>
</style>