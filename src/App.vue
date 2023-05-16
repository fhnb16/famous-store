<script setup>
import { reactive } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
const state = reactive({
  menuActive: false,
});
</script>

<template>
      <header class="header">
          <nav class="navigation left">
              <ul class="menu">
                  <li><RouterLink to="/"><img src="//famous.fhnb.ru/img/theFamous.svg" /></RouterLink></li>
                  <li class="menuBtn" v-on:click="state.menuActive = !state.menuActive">
                    <svg width="28px" height="28px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" fill="currentColor"/></svg>
                  </li>
                  <div v-bind:class="{ 'collapsable': !state.menuActive }">
                    <li><RouterLink to="/" class="active">Каталог</RouterLink></li>
                    <li><RouterLink to="/test">Доставка</RouterLink></li>
                    <li><RouterLink to="/test">Оплата</RouterLink></li>
                    <li><RouterLink to="/test">Контакты</RouterLink></li>
                    <li><RouterLink to="/test">О галерее</RouterLink></li>
                  </div>
              </ul>
          </nav>
          <div class="searchAndCart right">
              <div class="searchWrapper">
                  <input class="searchWrapper_textbox" type="text" placeholder="Поиск" />
                  <a class="searchWrapper_button" href="#">Найти</a>
              </div>
              <a class="cartButton" href="#">
                  <svg width="24" height="24" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.75 7.33333V5.75C5.75 4.49022 6.25045 3.28204 7.14124 2.39124C8.03204 1.50045 9.24022 1 10.5 1C11.7598 1 12.968 1.50045 13.8588 2.39124C14.7496 3.28204 15.25 4.49022 15.25 5.75V7.33333M2.79167 7.33333C2.5817 7.33333 2.38034 7.41674 2.23187 7.56521C2.08341 7.71368 2 7.91504 2 8.125L1 18.8125C1 20.3088 2.27458 21.5833 3.77083 21.5833H17.2292C18.7254 21.5833 20 20.3706 20 18.8744L19 8.125C19 7.91504 18.9166 7.71368 18.7681 7.56521C18.6197 7.41674 18.4183 7.33333 18.2083 7.33333H2.79167Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <div class="badge">1</div>
              </a>
          </div>
      </header>
      <div class="content">
        <RouterView />
      </div>
      <footer class="footer">
          <nav class="navigation left">
              <ul class="menu">
                  <li><RouterLink to="/"><img src="//famous.fhnb.ru/img/theFamous.svg" /></RouterLink></li>
                  <li><RouterLink to="/">Каталог</RouterLink></li>
                  <li><RouterLink to="/test">Доставка</RouterLink></li>
                  <li><RouterLink to="/test">Оплата</RouterLink></li>
                  <li><RouterLink to="/test">Контакты</RouterLink></li>
                  <li><RouterLink to="/test">О галерее</RouterLink></li>
              </ul>
          </nav>
          <div class="footerContacts right">
              <span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.6861 11.0733L11.5241 8.9061C11.0934 8.47621 10.3803 8.48928 9.93461 8.9361L8.84534 10.0276C8.77652 9.98957 8.70529 9.94987 8.6304 9.90774C7.94254 9.52574 7.00109 9.00217 6.0104 8.00851C5.01678 7.01276 4.49391 6.06772 4.11161 5.37786C4.07127 5.30478 4.03261 5.23431 3.99445 5.16739L4.7255 4.43577L5.08492 4.07509C5.53125 3.62763 5.54356 2.91305 5.11392 2.48192L2.95184 0.314451C2.52219 -0.116083 1.80871 -0.103021 1.36238 0.344444L0.753032 0.95868L0.769684 0.975248C0.565361 1.23655 0.394623 1.53793 0.267564 1.86292C0.150441 2.17228 0.0775199 2.46748 0.0441767 2.76329C-0.241312 5.13542 0.840231 7.30337 3.7754 10.2452C7.8327 14.3114 11.1023 14.0043 11.2434 13.9893C11.5506 13.9525 11.845 13.8789 12.1442 13.7624C12.4657 13.6366 12.7662 13.4657 13.0267 13.2613L13.04 13.2732L13.6573 12.6673C14.1028 12.22 14.1156 11.5051 13.6861 11.0733Z" fill="currentColor"/>
                  </svg>
                  <div>+7 (495) 999-99-99</div>
              </span>
              <span>
                  <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.07028 0C2.27451 0 0 2.27451 0 5.07025C0 8.53985 4.5374 13.6334 4.73058 13.8486C4.91204 14.0507 5.22884 14.0503 5.40997 13.8486C5.60315 13.6334 10.1406 8.53985 10.1406 5.07025C10.1405 2.27451 7.86601 0 5.07028 0ZM5.07028 7.62123C3.66366 7.62123 2.51932 6.47687 2.51932 5.07025C2.51932 3.66363 3.66368 2.51929 5.07028 2.51929C6.47687 2.51929 7.6212 3.66366 7.6212 5.07028C7.6212 6.47689 6.47687 7.62123 5.07028 7.62123Z" fill="currentColor"/>
                  </svg>
                  <div>г. Екатеринбург ул. Генеральская, 3</div>
              </span>
          </div>
      </footer>
      <div class="notify">
          <div class="notify__item">
              <div class="notify__item_title">
                  Title
              </div>
              <div class="notify__item_content">
                  Content
              </div>
          </div>
      </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

* {
  box-sizing: border-box;
  color: inherit;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  cursor: default;
  outline: inherit;
  text-decoration: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}
*, ::after, ::before {
  box-sizing: border-box;
}

::-webkit-scrollbar {
    height: 12px;
    width: 12px;
    z-index: 12;
    background: transparent;
    overflow: visible;
}
::-webkit-scrollbar-track, ::-webkit-scrollbar-button {
    display: none;
}
::-webkit-scrollbar-corner {
    background: rgb(67, 73, 83);
}
::-webkit-scrollbar-thumb {
    width: 4px;
    min-height: 32px;
    z-index: 12;
    background_image: none;
    background-color: rgba(67, 73, 83,.6);
    background-clip: padding-box;
    border-width: 3px;
    border-style: solid;
    border-color: transparent;
    border_image: initial;
    border-radius: 10px;
    transition: background-color 0.32s ease-in-out 0s;
}
::-webkit-scrollbar-thumb:hover {
    background-color: rgba(67, 73, 83,.9);
}
::-webkit-scrollbar-track, ::-webkit-scrollbar-button {
    display: none;
}

html, body {
  height: 100%;
}

body {
  overflow: auto;
  overflow: overlay;
}

body,
body * {
    font-family: 'Merriweather', serif;
    transition: all 256ms ease-in-out, color 64ms ease-in-out;
}

#app {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding-bottom: 100px;
    background: #ffffff;
}

#app > * {
    padding-left: 18%;
    padding-right: 18%;
}

.footer, .header {
    height: 96px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
}

.header {
    border-bottom: 1px solid #E1E1E1;
    margin-bottom: 45px;
}

.footer {
    border-top: 1px solid #ECEAEA;
    background: #ECEAEA;
    bottom: 0;
    left: 0;
    position: fixed;
}

.content {
}

nav {
    white-space: nowrap;
}

nav ul,
nav ul div {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    list-style: none;
    overflow: hidden;
    overflow-x: auto;
    overflow-x: overlay;
}

nav ul li {
    padding: 4px;
    margin-left: 24px;
    margin-right: 24px;
}

/*nav ul li:first-child {
    margin-left: 0;
}*/

nav ul a {
    cursor: pointer;
    color: #343030;
    opacity: 1;
    transition: color 256ms ease, opacity 128ms ease;
}

nav ul a.active {
    cursor: default!important;
    color: #9F9F9F!important;
}

nav ul a:hover {
    color: #9F9F9F;
}

nav ul a:active:not(.active) {
    opacity: 0.64;
}

nav ul img {
    width: 50px;
    height: 50px;
    border-radius: 4px;
    border: 1px solid transparent;
}

nav ul a:hover img {
    border: 1px solid #55555564;
    transition: border 256ms ease;
}

a img {
    cursor: pointer;
}

.left {
    margin-right: auto;
}

.right {
    margin-left: auto;
}

h1, h2, h3, h4, h5, h6 {
    font-style: normal;
    line-height: 150%;
    color: #343030;
}

h1 {
    font-weight: 700;
    font-size: 24px;
}

h2 {
    font-weight: 400;
    font-size: 18px;
}

h3 {
    font-weight: 700;
    font-size: 16px;
}

h4 {
    font-weight: 700;
    font-size: 16px;
}

h5 {
    font-weight: 400;
    font-size: 16px;
}

h6 {
    font-weight: 300;
    font-size: 16px;
}

.searchAndCart {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
}

.searchWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
}

.searchWrapper .searchWrapper_textbox {
    height: 48px;
    width: 200px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    padding: 8px 16px;
    cursor: text;
    border: 1px solid #E1E1E1;
    color: #343030;
    transition: all 256ms ease;
}

.searchWrapper .searchWrapper_textbox:focus {
    border: 1px solid #B5B5B5;
}

.searchWrapper .searchWrapper_button,
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    background: #403432;
    color: #ffffff;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    padding: 4px 16px;
    cursor: pointer;
    transition: background 128ms ease;
}

.searchWrapper .searchWrapper_button:hover,
.button:hover {
    background: #776763;
}

.searchWrapper .searchWrapper_button:active,
.button:active {
    background: #5B3A32;
}

.searchWrapper .searchWrapper_button {
    height: 48px;
    padding: 14px 36px;
}

.cartButton {
    margin-left: 32px;
    padding: 2px;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #ffffff;
    transition: background 256ms ease, opacity 128ms ease;
}

.cartButton,
.cartButton *{
    cursor: pointer;
}

.cartButton:hover {
    background: #776763;
    color: #ffffff;
}

.cartButton:active {
    background: #5B3A32;
    color: #ffffff;
    opacity: 0.32;
}

.cartButton .badge {
    position: absolute;
    z-index: 6;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    color: #ffffff;
    background: #403432;
    display: flex;
    justify-content: center;
    align-items: center;
    right: -6px;
    top: 2px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
}

.footerContacts,
.footerContacts > span {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    white-space: nowrap;
}

.footerContacts {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
}

.footerContacts > span {
    color: #555555;
}

.footerContacts > span {
    padding: 16px;
}

.footerContacts > span > svg {
    margin-right: 8px;
}

.items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 32px;
}

.items .items__item {
    width: 280px;
    height: 328px;
    margin: 16px;
    border: 1px solid #E1E1E1;
    border-radius: 2px;
}

.items .items__item .button {
    padding: 14px 30px;
}

.items .items__item.out_of_stock {
    opacity: 0.64;
}

.items .items__item_content {
    padding: 12px 24px;
}

.items .items__item_image {
    width: 100%;
    height: 160px;
    margin-bottom: 8px;
}

.items .items__item_image img {
    width: 100%;
    height: 100%;
    border-radius: 2px;
    object-fit: cover;
}

.items .items__item_group {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    margin: 22px 6px;
    height: 48px;
}

.items .items__item-vertical {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
}

.items .items__item-vertical > * {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
}

.items .items__item-vertical_discount {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 150%;
    display: flex;
    align-items: center;
    text-decoration-line: line-through;
    color: #A0A0A0;
}

.notify {
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 12;
    padding: 4px!important;
}

.notify__item {
    padding: 1px;
    margin: 4px 8px;
    background: #5B3A32a1;
    backdrop-filter: blur(6px);
    border-radius: 4px;
    color: #ffffff;
    min-width: 128px;
}

.notify__item_title {
    padding: 6px 24px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    background: #403432a1;
    border-bottom: 1px solid #32323216;
    font-size: 16px;
    
}

.notify__item_content {
    padding: 6px 24px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    font-size: 12px;

}

.collapsable {
  height: auto;
}

.menuBtn,
.menuBtn * {
  display: none;
  cursor: pointer;
}

@media screen and (max-width: 1800px)
{
    #app > * {
        padding-left: 5%;
        padding-right: 5%;
    }
}

@media screen and (max-width: 1450px)
{
    nav ul li {
        margin-left: 16px;
        margin-right: 16px;
    }
    
    #app {
        padding-bottom: 0;
    }
}

@media screen and (max-width: 1300px)
{
    nav ul li {
        margin-left: 8px;
        margin-right: 8px;
    }
    
    .footer, .header {
      height: 64px;
    }
    
}

@media screen and (max-width: 1100px)
{
    
    .footer,
    .header {
      height: auto;
      flex-direction: column;
      flex-wrap: wrap;
    }
    
    .left {
        margin: auto;
    }
    
    .right {
        margin: auto;
    }
    .items {
        justify-content: center;
    }
}

@media screen and (max-width: 800px)
{
    
    .footer {
        position: relative;
    }
    .footerContacts, .footerContacts > span {
        flex-direction: column;
        white-space: pre-wrap;
    }
}

@media screen and (max-width: 600px)
{

    .collapsable {
      height: 0;
    }

    .menuBtn,
    .menuBtn * {
      display: block;
    }

    nav > ul {
        justify-content: center;
    }

    nav ul,
    nav ul div {
        flex-wrap: wrap;
    }

    nav .menu > div {
        justify-content: center;
    }

    nav ul li {
        padding: 6px;
    }
    
    .searchWrapper .searchWrapper_textbox {
        width: 100px;
        height: 34px;
    }
    
    .searchWrapper .searchWrapper_button {
        height: 34px;
        padding: 8px 11px;
    }
    .searchAndCart {
        width: 100%;
    }
}
</style>
