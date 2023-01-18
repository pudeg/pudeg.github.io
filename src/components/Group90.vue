<script setup lang="ts">
defineProps(["step1Mint", "mintToken"]);
</script>

<template>
  <div class="group-91">
    <div class="step-2-order valign-text-middle comicsansms-bold-black-20px">{{ step1Mint }}</div>
    <div class="overlap-group-7">
      <div class="connect-wallet-1 valign-text-middle ibmplexmono-bold-black-15px">{{ mintToken }}</div>
    </div>
  </div>
</template>


<style>
.group-91,
.group-91-pxfZZJ {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 156px;
  width: 246px;
}

.step-2-order,
.step-2-order-FBvEOe {
  height: 68px;
  letter-spacing: -0.2px;
  line-height: 27px;
  width: 244px;
}

.overlap-group-7,
.overlap-group-FBvEOe {
  align-items: flex-end;
  background-color: var(--gargoyle-gas);
  border-radius: 11.46px;
  display: flex;
  height: 87px;
  min-width: 244px;
  padding: 22.9px 0;
}

.connect-wallet-1,
.connect-wallet-QEMfZ9 {
  height: 41px;
  letter-spacing: -0.15px;
  line-height: 20.3px;
  text-align: center;
  width: 244px;
}
</style>
