<script lang="ts" setup>
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'closemenu'): void
}>();


const itemUrlMap = new Map([
  ['mirror', 'https://mirror.xyz/zorhol.eth/uPGvlrhjSY722zhchp2NtY_eVkG5O0OodsCx5-A6j80'],
  ['twitter', ''],
  ['gallery', ''],
  ['chart', ''],
])


const props = defineProps({
  show: Boolean
});

const show = ref(false);
const width = ref(500)

const close = () => {
  emit('closemenu')
}

const handleItemClick = (dest: string) => {

}

</script>

<template>
  <div id="app-menu" :class="{ open: props.show }" :style="{ width: props.show ? width + 'px' : 0 }">
    <div @click="close" id="app-menu-close">×</div>
    <ul id="app-menu-items">
      <li class="app-menu-item" id="mirror">
        <a href="https://mirror.xyz/zorhol.eth/uPGvlrhjSY722zhchp2NtY_eVkG5O0OodsCx5-A6j80">
          Read our mirror.xyz post for additional info
        </a>
      </li>
      <li class="app-menu-item" id="twitter">
        <a href="https://twitter.com">
          Reach out with Questions on twitter
        </a>
      </li>
      <li class="app-menu-item" id="gallery">
        <a href="#">
          See gallery for physical jersey pics
        </a>
      </li>
      <li class="app-menu-item" id="sizechart">
        <a href="#">
          Jersey Size chart
        </a>
      </li>
    </ul>
  </div>
</template>

<style>
#app-menu,
#app-menu * {
  z-index: 200 !important;
}

#app-menu {
  position: fixed;
  height: 100%;
  width: 0;
  top: 0;
  right: 0;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  gap: 0px;
  color: #404648;
  background: #44474830;
  overflow-x: hidden;
  transition: all 0.3s, backdrop-filter 1s;
  backdrop-filter: invert(90%) brightness(200%) blur(5.5px);
  filter: invert(100%) contrast(120%);
  max-width: 100%;
  padding: 64px 0;
}

#app-menu * {
  /* white-space: nowrap; */
}

#app-menu.open {
  width: 1000px;
}


#app-menu.open #app-menu-items {
  opacity: 1;
}


#app-menu-items {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-auto-flow: dense;
  gap: 8px;
  /* margin-top: 30px; */
  padding: 32px;
  text-align: center;
  opacity: 0;
  transition: 0.1s ease-out;
  z-index: 20 !important;
  width: 100%;
}

.app-menu-item {
  padding: 8px;
  /* text-decoration: none; */
  font-size: 18px;
  font-weight: 500;
  display: block;
  transition: 0.2s;
  width: 100%;
  width: 100%;
  height: fit-content;
  filter: invert(0.8) hue-rotate(0) contrast(160%);
  text-align: left;
  border-bottom: 1px solid #00000080;
  cursor: pointer;
}

.app-menu-item>a {
  padding: 8px;
  text-decoration: underline;
  font-size: 18px;
  font-weight: 500;
  display: block;
  transition: 0.2s;
  width: 100%;
  width: 100%;
  height: fit-content;
  filter: invert(0.8) hue-rotate(0) contrast(160%);
  font-family: 'Comic Sans MS';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  display: flex;
  align-items: center;

  color: #71c700;
}



.app-menu-item:hover,
.app-menu-item:focus {
  background-color: #ffffff;
}

.app-menu-item a:hover,
.app-menu-item a:focus {
  background-color: #141414;
}

#app-menu[data-show=true] #app-menu-items {
  opacity: 1;
}

#app-menu-close {
  font-weight: 900;
  font-size: 72px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0px;
  margin: 48px 40px 0 40px;
  text-align: right;
  color: white;
  z-index: 100;
  cursor: pointer;
  user-select: none;
}
</style>
