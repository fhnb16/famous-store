<script setup>
import { toRefs } from 'vue';
import Item from '@/components/Item_Component.vue';
const props = defineProps({
  itemsList: [],
  catID: Number,
  catName: String
});
const { itemsList, catID, catName } = toRefs(props);

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
            <h1>{{ catName }}</h1>
            <Item v-for="item in filterCategory()" :key="item.id" :item="item" />
          </div>
</template>

<style scoped>
.items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
 .items h1 {
    width: 100%;
 }
 .items h1:only-child {
    display: none;
 }

@media screen and (max-width: 1100px)
{
    .items {
        justify-content: center;
    }
}
</style>
