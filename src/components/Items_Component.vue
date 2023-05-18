<script setup>
import Item from '@/components/Item_Component.vue';
</script>

<template>
          <div class="items">
          	<Item />
          	<Item />
          	<Item />
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
