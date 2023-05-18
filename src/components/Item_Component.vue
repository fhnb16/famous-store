<script setup>
import { toRefs } from 'vue';

import { storeToRefs } from 'pinia';
import { useMainStore } from '@/stores/main.js';

const { addToCart } = useMainStore();
const { cartItems } = storeToRefs(useMainStore());

const props = defineProps({
  item: {}
});
const { item } = toRefs(props);
</script>

<template>
              <div class="items__item" v-bind:class="{'out_of_stock': !item.active}">
                  <div class="items__item_image"><img :src="item.image" /></div>
                  <div class="items__item_content">
                      <h2 :title="item.title">{{ item.title }}</h2>
                      <div class="items__item_group">
                          <div class="items__item-vertical">
                              <div class="items__item-vertical_discount" v-if="item.active || item.discount != ''">
                                  {{ item.discount }}
                              </div>
                              <div v-if="item.active">
                                  {{ item.price }}
                              </div>
                              <div class="items__item-vertical_out" v-if="!item.active">
                                  Продана на аукционе
                              </div>
                          </div>
                          <a v-on:click="addToCart($event, item);" v-if="item.active" class="button" v-bind:class="{'inCart': cartItems.includes(item.id)}">
                            <span v-if="cartItems.includes(item.id)">
                              <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5315 1.80937L5.63341 11.237L1.34814 7.19237" stroke="#F4F6F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                              В корзине
                            </span>
                            <span v-else>Купить</span>
                          </a>
                      </div>
                  </div>
              </div>
</template>
<style scoped>
.items__item {
    width: 280px;
    height: 328px;
    margin: 16px;
    border: 1px solid #E1E1E1;
    border-radius: 2px;
}

.items__item .button {
    padding: 14px 30px;
    position: relative;
}

.items__item .button.busy {
    background: #403432;
    color: #403432;
}

.items__item .button.busy:after {
    content: '';
    position: absolute;
    display: inline-block;
    inset: 0;
    background-color: #403432;
    background-image: url('//test.fhnb.ru/famous/img/loading.svg');
    background-repeat: no-repeat;
    background-position: center;
}

.items__item.out_of_stock {
    opacity: 0.64;
}

.items__item_content {
    padding: 12px 24px;
    height: 168px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.items__item_content h2 {
  max-height: 64px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
}

.items__item_image {
    width: 100%;
    height: 160px;
    /*margin-bottom: 8px;*/
}

.items__item_image img {
    width: 100%;
    height: 100%;
    border-radius: 2px;
    object-fit: cover;
}

.items__item_group {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    margin: 22px 6px;
    height: 48px;
}

.items__item-vertical {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
}

.items__item-vertical > * {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
}

.items__item-vertical_discount {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 150%;
    display: flex;
    align-items: center;
    text-decoration-line: line-through;
    color: #A0A0A0;
}
</style>