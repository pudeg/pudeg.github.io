<script setup lang="ts">
const props = defineProps({
  imageContent: Array,
  content: Object,
  rowNumber: Number,
  isImageRow: Boolean,
})

const { content, rowNumber } = props
</script>

<template>
  <!-- :style="{ 'background-image': 'url(' + testSrc + ')' }"></div> -->
  <div class="content-row">
    <div class="content-row-background"
      :style="{ 'background-image': `url('src/assets/content-rows/full-rows/content-row-${ rowNumber }-all.jpg')` }">
    </div>
  </div>


  <!-- <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3 class="heading">
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div> -->
</template>

<style scoped>
.content-row {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 16px;
  min-height: 100vh;
  padding: 0 200px;
  background-color: brown;
  border: 1px solid black;
  z-index: 0;
}

.content-row-background {
  /* background-image: url('src/assets/content-rows/full-rows/content-row-6-all.jpg'); */
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 100%;
  min-height: fit-content;
  width: 100%;
}

/*
.heading:hover {
  color: hsla(160, 100%, 37%, 1);
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
  transition: 0.3s;
}


.row:hover i {
  top: calc(50% - 25px);
  left: -26px;
  position: absolute;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  border-radius: 8px;
  transform: scale(1.5);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

.row:before {
  content: " ";
  border-left: 1px solid var(--color-border);
  position: absolute;
  left: 0;
  bottom: calc(50% + 25px);
  height: calc(50% - 25px);
  padding: 0;
}

.row:after {
  content: " ";
  border-left: 1px solid var(--color-border);
  position: absolute;
  left: 0;
  top: calc(50% + 25px);
  height: calc(50% - 25px);
  padding: 0;
}

.row:first-of-type:before {
  display: none;
  padding: 0;
}

.row:last-of-type:after {
  display: none;
} */
</style>
