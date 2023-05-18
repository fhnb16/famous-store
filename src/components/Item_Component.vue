<script setup>
</script>

<template>
              <div class="items__item out_of_stock">
                  <div class="items__item_image"><img src="https://sun9-75.userapi.com/impg/c858024/v858024403/23004c/_QnuDfSq5EM.jpg?size=1280x853&quality=96&sign=f1ee670d77c7bf5e72db03e04f3e5a8b&type=album" /></div>
                  <div class="items__item_content">
                      <h2>«Рождение Венеры» Сандро Боттичелли</h2>
                      <div class="items__item_group">
                          <div class="items__item-vertical">
                              <div class="items__item-vertical_discount">
                                  2 000 000 $
                              </div>
                              <div>
                                  1 000 000 $
                              </div>
                              <div class="items__item-vertical_out">
                                  Продана на аукционе
                              </div>
                          </div>
                          <a href="#" class="button">Купить</a>
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
}

.items__item.out_of_stock {
    opacity: 0.64;
}

.items__item_content {
    padding: 12px 24px;
}

.items__item_image {
    width: 100%;
    height: 160px;
    margin-bottom: 8px;
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