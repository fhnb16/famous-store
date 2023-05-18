<script setup>
import { toRefs } from 'vue';
import Item from '@/components/Item_Component.vue';
const props = defineProps({
  itemsList: [],
  catID: Number
});
const { itemsList, catID } = toRefs(props);

function filterCategory(){
  if (itemsList.value != undefined) {
    return itemsList.value.filter((item) => item.category == catID.value);
  } else {
    return itemsList.value;
  }
}
</script>

<template>
          <div class="items">
          	<Item v-for="item in filterCategory()" :key="item.id" :item="item" />
          </div>
</template>

<style scoped>
.items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 32px;
}

@media screen and (max-width: 1100px)
{
    .items {
        justify-content: center;
    }
}
</style>
