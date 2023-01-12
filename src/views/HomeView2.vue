<script setup lang="ts">
import { useUserStore } from "@/stores/user.store";
import Group90 from '@/components/Group90.vue';
import { ref } from "vue";
defineProps([
  "xXtgonqzggoeUnsplash1",
  "spanText1",
  "spanText2",
  "spanText3",
  "spanText4",
  "spanText5",
  "spanText6",
  "x1_0",
  "x1_4",
  "x1_1",
  "x1_5",
  "x1_2",
  "x1_6",
  "x1_3",
  "x1_7",
  "connect",
  "spanText7",
  "spanText8",
  "spanText9",
  "spanText10",
  "spanText11",
  "spanText12",
  "spanText13",
  "spanText14",
  "spanText15",
  "x2_0",
  "x2_1",
  "spanText16",
  "spanText17",
  "spanText18",
  "spanText19",
  "spanText20",
  "spanText21",
  "spanText22",
  "spanText23",
  "spanText24",
  "spanText25",
  "spanText26",
  "spanText27",
  "spanText28",
  "spanText29",
  "spanText30",
  "spanText31",
  "spanText32",
  "spanText33",
  "spanText34",
  "spanText35",
  "spanText36",
  "x2_2",
  "x2_3",
  "spanText37",
  "spanText38",
  "spanText39",
  "spanText40",
  "step1",
  "spanText41",
  "spanText42",
  "spanText43",
  "spanText44",
  "spanText45",
  "spanText46",
  "spanText47",
  "spanText48",
  "spanText49",
  "spanText50",
  "x3_0_Mint",
  "step2",
  "spanText51",
  "spanText52",
  "spanText53",
  "spanText54",
  "spanText55",
  "spanText56",
  "spanText57",
  "spanText58",
  "spanText59",
  "spanText60",
  "x3_1_Connect",
  "step3",
  "spanText61",
  "spanText62",
  "spanText63",
  "spanText64",
  "spanText65",
  "spanText66",
  "spanText67",
  "spanText68",
  "spanText69",
  "x3_0_EndOfMint",
  "group88",
  "spanText70",
  "spanText71",
  "spanText72",
  "spanText73",
  "spanText74",
  "spanText75",
  "spanText76",
  "spanText77",
  "spanText78",
  "spanText79",
  "x4_1",
  "x4_2",
  "spanText80",
  "spanText81",
  "spanText82",
  "spanText83",
  "spanText84",
  "spanText85",
  "spanText86",
  "spanText87",
  "spanText88",
  "spanText89",
  "spanText90",
  "spanText91",
  "spanText92",
  "spanText93",
  "spanText94",
  "spanText95",
  "spanText96",
  "spanText97",
  "spanText98",
  "spanText99",
  "spanText100",
  "spanText101",
  "spanText102",
  "spanText103",
  "spanText104",
  "spanText105",
  "spanText106",
  "spanText107",
  "spanText108",
  "spanText109",
  "spanText110",
  "x4_3",
  "whatIsTheMi777MiladymotoJersey",
  "spanText111",
  "spanText112",
  "spanText113",
  "spanText114",
  "spanText115",
  "x6_0",
  "text13",
  "text14",
  "text15",
  "x8_2",
  "x8_3",
  "mimotoglitter1",
  "mintMyJersey",
  "buyMyJersey",
  "spanText116",
  "spanText117",
  "spanText118",
  "spanText119",
  "spanText120",
  "spanText121",
  "spanText122",
  "spanText123",
  "spanText124",
  "spanText125",
  "spanText126",
  "spanText127",
  "spanText128",
  "spanText129",
  "spanText130",
  "spanText131",
  "spanText132",
  "spanText133",
  "spanText134",
  "spanText135",
  "text12",
  "spanText136",
  "spanText137",
  "spanText138",
  "spanText139",
  "spanText140",
  "spanText141",
  "spanText142",
  "spanText143",
  "spanText144",
  "spanText145",
  "spanText146",
  "spanText147",
  "overlapGroup10",
  "spanText148",
  "spanText149",
  "spanText150",
  "zkKycFreePhysiDigiMint",
  "step1Mint",
  "mintToken",
  "physicalJerseyDi",
  "spanText151",
  "spanText152",
  "spanText153",
  "orderPhysicalJerseyWFiat",
  "physicalJerseyOrde",
  "orderViaShopify",
  "spanText154",
  "spanText155",
  "spanText156",
  "spanText157",
  "spanText158",
  "spanText159",
  "image36",
  "thisIsALoveL",
  "overlapGroup11",
  "photo_2022121523241",
  "group90Props",
]);

const clickedMint = ref(false);
const userStore = useUserStore();

const handleMintClick = (e: UIEvent) => {
  clickedMint.value = true;
  const popup = open('https://www.scatter.art/collection/0x8fc0d90f2c45a5e7f94904075c952e0943cfccfd?tab=mint', 'Mint your Milady!', 'popup=true');

}

window.addEventListener('focus', e => {
  console.warn('HEARD THAT FOCUS');
  if (userStore.isConnected && clickedMint.value === true) {
    userStore.init()
    clickedMint.value = false;
  }
})
</script>

<template>
  <div id="home-view2" class="container-center-horizontal">
    <div class="macbook-pro-16-frontend screen">
      <div class="flex-col-11">
        <div class="overlap-group17-1">
          <div class="overlap-group9-1">
            <img class="x-xtg-on-qz-gg-oe-unsplash-1-1" :src="xXtgonqzggoeUnsplash1" alt="x-xtgONQzGgOE-unsplash 1" />
            <!-- <div class="render2-1-1"></div> -->
            <model-viewer id="mi777-model-viewer" src="https://hamilsauce.github.io/mi777.glb" ar=""
              ar-modes="webxr scene-viewer quick-look" camera-controls="" environment-image="neutral"
              shadow-intensity="0" autoplay="" ar-status="not-presenting">
            </model-viewer>
            <div class="
                mi777-the-milady-mot-2
                comicsansms-bold-white-55px
              " style="white-space:nowrap;">
              <div style="white-space:nowrap;">
                <div class="comicsansms-bold-white-55px">{{ spanText1 }}</div>
                <div class="comicsansms-bold-white-40px">{{ spanText2 + spanText3 + spanText4 + spanText5 + spanText6 }}
                </div>

              </div>
            </div>
            <div class="group-105-1">
              <div class="flex-col-12">
                <img class="x1_0" :src="x1_0" alt="1_0" /><img class="x1_4" :src="x1_4" alt="1_4" />
              </div>
              <div class="flex-col-13">
                <img class="x1_1" :src="x1_1" alt="1_1" /><img class="x1_5" :src="x1_5" alt="1_5" />
              </div>
              <div class="flex-col-10">
                <img class="x1_2" :src="x1_2" alt="1_2" /><img class="x1_6" :src="x1_6" alt="1_6" />
              </div>
              <div class="flex-col-10">
                <img class="x1_3" :src="x1_3" alt="1_3" /><img class="x1_7" :src="x1_7" alt="1_7" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex-row-6 comicsansms-bold-purple-40px">
          <!-- <div class="flex-row-item-2 valign-text-middle">
            <span>
              <span class="comicsansms-bold-purple-40px">{{ spanText7 }}</span>
              <span class="span-10 comicsansms-bold-purple-40px">{{spanText8}}</span>
              <span class="comicsansms-bold-purple-40px">{{ spanText9 }}</span>
            </span>
          </div> -->
          <div class="flex-row-item-2 valign-text-middle">
            <span>
              <!-- <span class="span-10 comicsansms-bold-purple-40px">{{
                spanText10
              }}
              </span> -->
              <span class="comicsansms-bold-purple-40px">{{ spanText11 }}</span>
            </span>
          </div>
        </div>
      </div>
      <div class="flex-row-7">
        <div class="flex-col-14">
          <div class="overlap-group16-1">
            <p class="milady-designed-mo-1 ibmplexmono-normal-black-22px">
              <span class="ibmplexmono-normal-black-22px">{{ spanText12 }}</span>
              <span class="ibmplexmono-light-black-22px">{{ spanText13 }}</span>
              <span class="span-10 ibmplexmono-bold-black-22px">{{ spanText14 }}</span>
              <span class="ibmplexmono-bold-black-22px">{{ spanText15 }}</span>
            </p>
            <img class="x2_0" :src="x2_0" alt="2_0" />
          </div>
          <img class="x2_1" :src="x2_1" alt="2_1" />
        </div>
        <div class="flex-col-15">
          <p class="fully-rigged-3-d-m-2 ibmplexmono-normal-black-22px">
            <span class="ibmplexmono-normal-black-22px">{{ spanText16 }}</span>
            <span class="ibmplexmono-light-black-22px">{{ spanText17 }}</span>
            <span class="ibmplexmono-bold-black-22px-2">{{ spanText18 }}</span>
            <span class="ibmplexmono-bold-black-22px">{{ spanText19 }}</span>
            <span class="ibmplexmono-light-black-22px">{{ spanText20 }}</span>
            <span class="ibmplexmono-normal-black-22px">{{ spanText21 }}</span>
            <span class="ibmplexmono-light-black-22px">{{ spanText22 }}</span>
            <span class="ibmplexmono-light-black-22px-2">{{ spanText23 }}</span>
            <span class="ibmplexmono-light-black-22px">{{ spanText24 }}</span>
            <span class="ibmplexmono-bold-black-22px-2">{{ spanText25 }}</span>
            <span class="ibmplexmono-bold-black-22px">{{ spanText26 }}</span>
            <span class="ibmplexmono-bold-black-22px-2">{{ spanText27 }}</span>
            <span class="ibmplexmono-light-black-22px">{{ spanText28 }}</span>
            <span class="ibmplexmono-normal-black-22px">{{ spanText29 }}</span>
            <span class="ibmplexmono-light-black-22px">{{ spanText30 }}</span>
            <span class="ibmplexmono-bold-black-22px-2">{{ spanText31 }}</span>
            <span class="ibmplexmono-normal-black-22px">{{ spanText32 }}</span>
            <span class="span-10 ibmplexmono-bold-black-22px">{{ spanText33 }}</span>
            <span class="ibmplexmono-bold-black-22px">{{ spanText34 }}</span>
            <span class="span-10 ibmplexmono-bold-black-22px">{{ spanText35 }}</span>
            <span class="span20-1 ibmplexmono-light-black-18px">{{ spanText36 }}</span>
          </p>
          <img class="x2_2" :src="x2_2" alt="2_2" /><img class="x2_3" :src="x2_3" alt="2_3" />
        </div>
      </div>
      <div class="flex-col-16">
        <router-link to="/gallery-overlay">
          <div class="group-124">
            <div class="overlap-group-8">
              <div class="
                  view-gallery-2
                  valign-text-middle
                  ibmplexmono-normal-black-30px
                ">
                <span>
                  <span class="ibmplexmono-normal-black-30px">{{ spanText37 }}</span>
                  <span class="span-10 ibmplexmono-bold-black-30px">{{ spanText38 }}</span>
                  <span class="ibmplexmono-bold-black-30px">{{ spanText39 }}</span>
                  <span class="ibmplexmono-normal-black-30px">{{ spanText40 }}</span>
                </span>
              </div>
            </div>
          </div>
        </router-link>
        <div class="flex-row-8">
          <div class="flex-col-17">
            <div class="group-38-1">
              <div class="step-1-2 comicsansms-bold-purple-25px" v-html="step1"></div>
              <a href="#mi777-raffle-section">
                <p class="mint-token-via-scatt-1 ibmplexmono-bold-black-25px">
                  <span class="span0-1 ibmplexmono-bold-black-25px">{{ spanText41 }}</span>
                  <span class="span-11 ibmplexmono-bold-black-25px">{{ spanText42 }}</span>
                  <span class="span-12 ibmplexmono-normal-black-22px-2">{{ spanText43 }}</span>
                  <span class="span-12 ibmplexmono-normal-black-22px">{{ spanText44 }}</span>
                  <span class="span-12 ibmplexmono-normal-black-22px-2">{{ spanText45 }}</span>
                  <span class="span-12 ibmplexmono-normal-black-22px">{{ spanText46 }}</span>
                  <span class="span-13 ibmplexmono-normal-black-22px">{{ spanText47 }}</span>
                  <span class="span7-1 ibmplexmono-normal-black-22px-2">{{ spanText48 }}</span>
                  <span class="span-13 ibmplexmono-normal-black-22px-2">{{ spanText49 }}</span>
                  <span class="span-13 ibmplexmono-normal-black-22px">{{ spanText50 }}</span>
                </p>
              </a>
            </div>
            <div @click="handleMintClick">
              <img id="mint-button-1" class="x3_0_-mint mint-button" :src="x3_0_Mint" alt="3_0_Mint" />
            </div>
          </div>
          <div class="flex-col-18">
            <div class="group-59-1">
              <div class="step-2 comicsansms-bold-purple-25px">{{ step2 }}</div>
              <p class="connect-to-mi777-phy-1 ibmplexmono-bold-black-25px">
                <span class="span0-1 ibmplexmono-bold-black-25px">{{ spanText51 }}</span>
                <span class="span-11 ibmplexmono-bold-black-25px">{{ spanText52 }}</span>
                <span class="span-11 ibmplexmono-bold-black-25px-2">{{ spanText53 }}</span>
                <span class="span-13 ibmplexmono-normal-black-22px">{{ spanText54 }}</span>
                <span class="span-13 ibmplexmono-normal-black-22px-2">{{ spanText55 }}</span>
                <span class="span-13 ibmplexmono-normal-black-22px">{{ spanText56 }}</span>
                <span class="span-13 ibmplexmono-normal-black-22px-2">{{ spanText57 }}</span>
                <span class="span-13 ibmplexmono-normal-black-22px">{{ spanText58 }}</span>
                <span class="span-13 ibmplexmono-normal-black-22px-2">{{ spanText59 }}</span>
                <span class="span-13 ibmplexmono-normal-black-22px">{{ spanText60 }}</span>
              </p>
            </div>
            <img class="x3_1_-connect" :src="x3_1_Connect" alt="3_1_Connect" />
          </div>
          <div class="flex-col-19">
            <div class="group-65-1">
              <div class="step-2 comicsansms-bold-purple-25px">{{ step3 }}</div>
              <p class="end-of-mint-all-phy-1 ibmplexmono-bold-black-25px">
                <span class="span-11 ibmplexmono-bold-black-25px">{{ spanText61 }}</span>
                <span class="span-13 ibmplexmono-normal-black-22px">{{ spanText62 }}</span>
                <span class="span-13 ibmplexmono-normal-black-22px-2">{{ spanText63 }}</span>
                <span class="span-13 ibmplexmono-normal-black-22px">{{ spanText64 }}</span>
                <span class="span-12 ibmplexmono-bold-black-22px">{{ spanText65 }}</span>
                <span class="span-13 ibmplexmono-normal-black-22px">{{ spanText66 }}</span>
                <span class="span-13 ibmplexmono-normal-black-22px-2">{{ spanText67 }}</span>
                <span class="span-13 ibmplexmono-normal-black-22px">{{ spanText68 }}</span>
                <span class="span-11 ibmplexmono-normal-black-25px">{{ spanText69 }}</span>
              </p>
            </div>
            <img class="x3_0_-end-of-mint" :src="x3_0_EndOfMint" alt="3_0_End-of-Mint" />
          </div>
        </div>
        <div class="flex-col-20">
          <div class="mi777-raffle-section-1" id="mi777-raffle-section">
            <div class="group-container-5">
              <div class="group-88-1" :style="{ 'background-image': 'url(' + group88 + ')' }"></div>
              <div class="group-89-1">
                <p class="in-addition-to-physi-1 ibmplexmono-normal-black-22px">
                  <span class="ibmplexmono-normal-black-22px">{{ spanText70 }}</span>
                  <span class="span-10 ibmplexmono-normal-black-22px">{{ spanText71 }}</span>
                  <span class="ibmplexmono-normal-black-22px">{{ spanText72 }}</span>
                  <span class="ibmplexmono-bold-black-22px-2">{{ spanText73 }}</span>
                  <span class="ibmplexmono-normal-black-22px-2">{{ spanText74 }}</span>
                </p>
                <p class="x777-minted-milady-m-1 ibmplexmono-bold-white-25px">
                  <span class="ibmplexmono-bold-black-25px">{{ spanText75 }}</span>
                  <span class="span-10 ibmplexmono-bold-purple-25px">{{ spanText76 }}</span>
                  <span class="ibmplexmono-bold-black-25px">{{ spanText77 }}</span>
                  <span class="ibmplexmono-bold-purple-25px-2">{{ spanText78 }}</span>
                  <span class="ibmplexmono-normal-black-25px">{{ spanText79 }}</span>
                </p>
              </div>
            </div>
            <img class="x4_1" :src="x4_1" alt="4_1" />
          </div>
          <div class="flex-row-9">
            <img class="x4_2" :src="x4_2" alt="4_2" />
            <div class="overlap-group14-1">
              <div class="group-101-1">
                <p class="nft-raffle-milesto-1 ibmplexmono-normal-black-40px">
                  <span class="ibmplexmono-normal-black-40px">{{ spanText80 }}</span>
                  <span class="span-12 ibmplexmono-normal-black-22px-2">{{ spanText81 }}</span>
                  <span class="span-12 ibmplexmono-bold-black-22px-2">{{ spanText82 }}</span>
                  <span class="span-12 ibmplexmono-normal-black-22px">{{ spanText83 }}</span>
                  <span class="span-12 ibmplexmono-normal-black-22px-2">{{ spanText84 }}</span>
                  <span class="span-12 ibmplexmono-normal-black-22px">{{ spanText85 }}</span>
                  <span class="span-14 ibmplexmono-normal-black-22px">{{ spanText86 }}</span>
                  <span class="span-12 ibmplexmono-normal-black-22px">{{ spanText87 }}</span>
                  <span class="span-14 ibmplexmono-normal-black-22px">{{ spanText88 }}</span>
                  <span class="span-12 ibmplexmono-normal-black-22px">{{ spanText89 }}</span>
                  <span class="span-14 ibmplexmono-normal-black-22px">{{ spanText90 }}</span>
                  <span class="span-12 ibmplexmono-normal-black-22px">{{ spanText91 }}</span>
                  <span class="span-12 ibmplexmono-bold-black-22px-2">{{ spanText92 }}</span>
                  <span class="span-12 ibmplexmono-normal-black-22px">{{ spanText93 }}</span>
                  <span class="span-12 ibmplexmono-normal-black-22px-2">{{ spanText94 }}</span>
                  <span class="span-14 ibmplexmono-normal-black-22px">{{ spanText95 }}</span>
                  <span class="span-12 ibmplexmono-normal-black-22px">{{ spanText96 }}</span>
                  <span class="span-14 ibmplexmono-normal-black-22px">{{ spanText97 }}</span>
                  <span class="span-12 ibmplexmono-normal-black-22px">{{ spanText98 }}</span>
                  <span class="span-14 ibmplexmono-normal-black-22px">{{ spanText99 }}</span>
                  <span class="span-12 ibmplexmono-normal-black-22px">{{ spanText100 }}</span>
                  <span class="span-12 ibmplexmono-bold-black-22px-2">{{ spanText101 }}</span>
                  <span class="span-12 ibmplexmono-normal-black-22px">{{ spanText102 }}</span>
                  <span class="span-14 ibmplexmono-normal-black-22px-2">{{ spanText103 }}</span>
                  <span class="span-12 ibmplexmono-normal-black-22px">{{ spanText104 }}</span>
                  <span class="span-14 ibmplexmono-normal-black-22px">{{ spanText105 }}</span>
                </p>
                <p class="
                    x777-minted-milady-maker-6790-1
                    valign-text-middle
                    ibmplexmono-bold-white-32px
                  ">
                  <span>
                    <span class="ibmplexmono-bold-black-32px">{{ spanText106 }}</span>
                    <span class="ibmplexmono-bold-black-32px-2">{{ spanText107 }}</span>
                    <span class="ibmplexmono-bold-black-32px">{{ spanText108 }}</span>
                    <span class="span-10 ibmplexmono-bold-black-32px">{{ spanText109 }}</span>
                    <span class="ibmplexmono-bold-black-32px">{{ spanText110 }}</span>
                  </span>
                </p>
              </div>
              <img class="x4_3" :src="x4_3" alt="4_3" />
            </div>
          </div>
          <p class="
              what-is-the-mi777-milady-moto-jersey-1
              valign-text-middle
              comicsansms-bold-purple-40px
            ">
            {{ whatIsTheMi777MiladymotoJersey }}
          </p>
          <div class="group-123">
            <div class="overlap-group-9">
              <p class="
                  learn-more-read-our-mirrorxyz-post-1
                  ibmplexmono-normal-white-22px
                ">
                <span class="ibmplexmono-normal-black-22px">{{ spanText111 }}</span>
                <a href="https://mirror.xyz/zorhol.eth/uPGvlrhjSY722zhchp2NtY_eVkG5O0OodsCx5-A6j80" class="span1-1 ibmplexmono-bold-purple-30px">{{ spanText112 }}</a>
              </p>
            </div>
            <p class="
                alternatively-you-c-1
                valign-text-middle
                ibmplexmono-light-black-20px
              ">
              <span>
                <span class="ibmplexmono-light-black-20px">{{ spanText113 }}</span>
                <span class="span-10 ibmplexmono-light-black-20px">{{ spanText114 }}</span>
                <span class="ibmplexmono-light-black-20px">{{ spanText115 }}</span>
              </span>
            </p>
          </div>
          <img class="x6_0" :src="x6_0" alt="6_0" />
          <div class="overlap-group15-1">
            <div class="
                text-13
                valign-text-middle
                ibmplexmono-light-quick-silver-30px
              ">
              {{ text13 }}
            </div>
            <div class="text-14 valign-text-middle ibmplexmono-light-purple-30px">
              {{ text14 }}
            </div>
            <div class="
                text-15
                valign-text-middle
                ibmplexmono-light-blue-ribbon-30px
              ">
              {{ text15 }}
            </div>
            <div class="overlap-group5-1">
              <img class="x8_2" :src="x8_2" alt="8_2" /><img class="x8_3" :src="x8_3" alt="8_3" /><img
                class="mimotoglitter-1-1" :src="mimotoglitter1" alt="mimotoglitter 1" />
            </div>
          </div>
          <div class="group-container-6">
            <a href="https://www.scatter.art/" target="_blank">
              <div class="group-5-1">
                <div class="overlap-group1-3">
                  <div class="
                      mint-my-jersey-1
                      valign-text-middle
                      ibmplexmono-bold-black-25px
                    ">
                    {{ mintMyJersey }}
                  </div>
                </div>
              </div>
            </a><a href="shopify.com" target="_blank">
              <div class="group-5-1">
                <div class="overlap-group2-2">
                  <a href="https://mirror.xyz/zorhol.eth/uPGvlrhjSY722zhchp2NtY_eVkG5O0OodsCx5-A6j80" target="_blank">
                    <div class="
                        buy-my-jersey-1
                        valign-text-middle
                        ibmplexmono-bold-black-25px
                      ">
                      {{ buyMyJersey }}
                    </div>
                  </a>
                </div>
              </div>
            </a>
          </div>
          <div class="flex-row-10 ibmplexmono-bold-black-22px">
            <p class="flex-row-item-3">
              <span class="ibmplexmono-bold-black-22px">{{ spanText116 }}</span>
              <span class="ibmplexmono-light-black-22px">{{ spanText117 }}</span>
              <span class="ibmplexmono-normal-black-22px">{{ spanText118 }}</span>
              <span class="ibmplexmono-light-black-22px">{{ spanText119 }}</span>
              <span class="ibmplexmono-light-black-22px-2">{{ spanText120 }}</span>
              <span class="span-10 ibmplexmono-light-black-22px-2">{{ spanText121 }}</span>
              <span class="ibmplexmono-light-black-22px-2">{{ spanText122 }}</span>
              <span class="span-10 ibmplexmono-light-black-22px-2">{{ spanText123 }}</span>
              <span class="ibmplexmono-light-black-22px-2">{{ spanText124 }}</span>
              <span class="ibmplexmono-normal-black-22px">{{ spanText125 }}</span>
              <span class="span10 ibmplexmono-light-black-15px">{{ spanText126 }}</span>
            </p>
            <p class="flex-row-item-3">
              <span class="span-10 ibmplexmono-bold-black-22px">{{ spanText127 }}</span>
              <span class="ibmplexmono-bold-black-22px">{{ spanText128 }}</span>
              <span class="ibmplexmono-light-black-22px">{{ spanText129 }}</span>
              <span class="span-10 ibmplexmono-light-black-22px-2">{{ spanText130 }}</span>
              <span class="ibmplexmono-light-black-22px-2">{{ spanText131 }}</span>
              <span class="ibmplexmono-light-black-22px">{{ spanText132 }}</span>
              <span class="span6-1 ibmplexmono-light-black-20px">{{ spanText133 }}</span>
            </p>
          </div>
          <div class="overlap-group6-1">
            <p class="
                learn-more-read-our-mirrorxyz-post-2
                ibmplexmono-normal-white-22px
              ">
              <span class="ibmplexmono-normal-black-22px">{{ spanText134 }}</span>
              <span class="span1-1 ibmplexmono-bold-purple-30px">{{ spanText135 }}</span>
            </p>
          </div>
          <div class="overlap-group12-1">
            <div class="
                text-12
                valign-text-middle
                ibmplexmono-light-quick-silver-30px
              ">
              {{ text12 }}
            </div>
            <div class="x9_0"></div>
          </div>
          <div class="overlap-group13-1 ibmplexmono-bold-black-25px">
            <p class="music-by-mistersoup_hi-1 valign-text-middle">
              <span>
                <span class="ibmplexmono-bold-black-25px">{{ spanText136 }}</span>
                <span class="ibmplexmono-normal-black-25px">{{ spanText137 }}</span>
                <span class="ibmplexmono-bold-black-25px">{{ spanText138 }}</span>
                <span class="span-10 ibmplexmono-bold-black-25px">{{ spanText139 }}</span>
              </span>
            </p>
            <p class="video-made-with-hologramxyz-1 valign-text-middle">
              <span>
                <span class="ibmplexmono-bold-black-25px">{{ spanText140 }}</span>
                <span class="ibmplexmono-normal-black-25px">{{ spanText141 }}</span>
                <span class="ibmplexmono-bold-black-25px">{{ spanText142 }}</span>
                <span class="span-10 ibmplexmono-bold-black-25px">{{ spanText143 }}</span>
              </span>
            </p>
          </div>
          <router-link to="/gallery-overlay">
            <div class="group-111-1">
              <div class="overlap-group-8">
                <div class="
                    view-gallery-2
                    valign-text-middle
                    ibmplexmono-normal-black-30px
                  ">
                  <span>
                    <span class="ibmplexmono-normal-black-30px">{{ spanText144 }}</span>
                    <span class="span-10 ibmplexmono-bold-black-30px">{{ spanText145 }}</span>
                    <span class="ibmplexmono-bold-black-30px">{{ spanText146 }}</span>
                    <span class="ibmplexmono-normal-black-30px">{{ spanText147 }}</span>
                  </span>
                </div>
              </div>
            </div>
          </router-link>
          <div class="overlap-group10-1" :style="{ 'background-image': 'url(' + overlapGroup10 + ')' }">
            <div class="x10_0"></div>
            <div class="group-117-1">
              <p class="
                  mint-option-14-days-777-total-1
                  valign-text-middle
                  comicsansms-bold-black-15px
                ">
                <span>
                  <span class="comicsansms-bold-black-15px">{{ spanText148 }}</span>
                  <span class="comicsansms-regular-normal-black-15px">{{ spanText149 }}</span>
                  <span class="span2-3 comicsansms-regular-normal-black-12px">{{ spanText150 }}</span>
                </span>
              </p>
              <p class="x-physi-1 comicsansms-bold-purple-26-4px">
                {{ zkKycFreePhysiDigiMint }}
              </p>
              <div class="overlap-group7-1">
                <a href="https://www.scatter.art/" target="_blank">
                  <div class="group-90-1">
                    <div class="
                        step-1-mint-1
                        valign-text-middle
                        comicsansms-bold-black-20px
                      ">
                      {{ step1Mint }}
                    </div>
                    <div class="overlap-group-10">
                      <div class="
                          mint-token-2
                          valign-text-middle
                          ibmplexmono-bold-black-15px
                        ">
                        {{ mintToken }}
                      </div>
                    </div>
                  </div>
                </a>
                <p class="
                    physical-jersey-di-1
                    comicsansms-regular-normal-black-15px
                  ">
                  {{ physicalJerseyDi }}
                </p>
              </div>
              <group90 :step1Mint="group90Props.step1Mint" :mintToken="group90Props.mintToken" />
            </div>
            <div class="group-116-1">
              <div class="
                  fiat-option-14-days-1
                  valign-text-middle
                  comicsansms-bold-black-15px
                ">
                <span>
                  <span class="comicsansms-bold-black-15px">{{ spanText151 }}</span>
                  <span class="comicsansms-regular-normal-black-15px">{{ spanText152 }}</span>
                  <span class="span2-3 comicsansms-regular-normal-black-12px">{{ spanText153 }}</span>
                </span>
              </div>
              <p class="x-physi-1 comicsansms-bold-purple-26-4px">
                {{ orderPhysicalJerseyWFiat }}
              </p>
              <a href="https://www.shopify.com/" target="_blank">
                <div class="group-92-1">
                  <p class="
                      physical-jersey-orde-1
                      comicsansms-regular-normal-black-15px
                    ">
                    {{ physicalJerseyOrde }}
                  </p>
                  <div class="overlap-group-11">
                    <div class="
                        order-via-shopify-1
                        valign-text-middle
                        ibmplexmono-bold-black-15px
                      ">
                      {{ orderViaShopify }}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="group-98-1">
            <p class="
                mi777-the-milady-mot-3
                valign-text-middle
                comicsansms-bold-purple-43-1px
              ">
              <span>
                <span class="comicsansms-bold-purple-43-1px">{{ spanText154 }}</span>
                <span class="comicsansms-regular-normal-purple-19-9px">{{ spanText155 }}</span>
                <span class="comicsansms-bold-purple-19-9px">{{ spanText156 }}</span>
                <span class="comicsansms-regular-normal-purple-19-9px">{{ spanText157 }}</span>
                <span class="comicsansms-bold-purple-19-9px">{{ spanText158 }}</span>
                <span class="comicsansms-regular-normal-purple-19-9px">{{ spanText159 }}</span>
              </span>
            </p>
            <a href="https://twitter.com/ChristDreidel" target="_blank"><img class="icon-twitter-1"
                src="https://anima-uploads.s3.amazonaws.com/projects/63acc8efbfbaee2944b87bdf/releases/63acc958b185d05d2a6937f4/img/11-0@2x.svg"
                alt="icon-twitter" /></a>
            <a href="https://mirror.xyz/zorhol.eth/uPGvlrhjSY722zhchp2NtY_eVkG5O0OodsCx5-A6j80" target="_blank"><img
                class="image-36-1" :src="image36" alt="image 36" /></a>
          </div>
          <p class="this-is-a-love-l-1 ibmplexmono-light-black-22px" v-html="thisIsALoveL"></p>
          <div class="overlap-group11-1" :style="{ 'background-image': 'url(' + overlapGroup11 + ')' }">
            <img class="photo_2022-12-15-2324-1-1" :src="photo_2022121523241" alt="photo_2022-12-15 23.24 1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
#mi777-model-viewer {
  width: 800px;
  height: 1200px;
  margin-top: 200px;
}

.mint-button:hover {
  filter: brightness(1.4);
  transition: 0.2s;

}

.macbook-pro-16-frontend {
  align-items: center;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 14520px;
  overflow: hidden;
  width: 1728px;
  width: 100%;
}

.flex-col-11 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 127px;
  min-height: 2780px;
  width: 1728px;
  width: 100%;

}

.overlap-group17-1 {
  height: 2495px;
  position: relative;
  width: 1728px;
  width: 100%;

}

.overlap-group9-1 {
  height: 2495px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1728px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: flex-start;

}

.x-xtg-on-qz-gg-oe-unsplash-1-1 {
  height: 1729px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 1728px;
  width: 100%;

}

.render2-1-1 {
  background-color: var(--black);
  border-radius: 14px;
  height: 948px;
  left: 482px;
  position: absolute;
  top: 391px;
  width: 765px;

}

.mi777-the-milady-mot-2 {
  height: 221px;
  left: 117px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 67px;
  width: 1050px;

}

.group-105-1 {
  align-items: flex-start;
  display: flex;
  height: 976px;
  left: 10%;
  min-width: 1528px;
  position: absolute;
  top: 1519px;
}

.flex-col-12 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 976px;
  width: 372px;

}

.x1_0,
.x1_1,
.x1_2,
.x1_6,
.x1_3,
.x1_7 {
  height: 480px;
  width: 372px;
}

.x1_4,
.x1_5 {
  height: 480px;
  object-fit: cover;
  width: 372px;
}

.flex-col-13 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 12px;
  min-height: 976px;
  width: 372px;
}

.flex-col-10 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 14px;
  min-height: 976px;
  width: 372px;
}

.connect-1 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 65px;
  left: 1427px;
  min-width: 237px;
  position: absolute;
  top: 146px;
}

.overlap-group8-1 {
  align-items: flex-start;
  background-color: var(--gargoyle-gas);
  border-radius: 41.52px;
  display: flex;
  height: 65px;
  justify-content: flex-end;
  min-width: 235px;
  padding: 17px 0;
}

.connect-2 {
  letter-spacing: -0.2px;
  line-height: 27px;
  min-height: 31px;
  text-align: center;
  white-space: nowrap;
  width: 235px;
}

.flex-row-6 {
  align-items: flex-start;
  display: flex;
  gap: 202px;
  margin-right: 22px;
  min-width: 982px;
}

.flex-row-item-2 {
  height: 158px;
  letter-spacing: 0;
  line-height: normal;
  width: 390px;
}

.span-10 {
  text-decoration: underline;
}

.flex-row-7 {
  align-items: flex-start;
  display: flex;
  gap: 145px;
  height: 707px;
  margin-left: 103px;
  margin-top: 21px;
  min-width: 1107px;
}

.flex-col-14 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 31px;
  min-height: 707px;
  width: 447px;
}

.overlap-group16-1 {
  height: 160px;
  position: relative;
  width: 447px;
}

.milady-designed-mo-1 {
  left: 0;
  letter-spacing: -0.44px;
  line-height: 33px;
  position: absolute;
  top: 0;
  width: 447px;
}

.x2_0 {
  height: 52px;
  left: 78px;
  position: absolute;
  top: 108px;
  width: 235px;
}

.x2_1 {
  height: 516px;
  object-fit: cover;
  width: 390px;
}

.flex-col-15 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 707px;
  width: 515px;
}

.fully-rigged-3-d-m-2 {
  letter-spacing: -0.44px;
  line-height: 33px;
  min-height: 292px;
  width: 423px;
}

.span20-1 {
  letter-spacing: -0.36px;
  line-height: 27px;
}

.x2_2 {
  height: 58px;
  margin-top: 7px;
  width: 515px;
}

.x2_3 {
  height: 317px;
  margin-top: 33px;
  width: 515px;
}

.flex-col-16 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-right: 1px;
  margin-top: 129px;
  min-height: 9884px;
  width: 2257px;
}

.group-124 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  margin-left: 4px;
  min-width: 601px;
}

.overlap-group-8 {
  align-items: flex-start;
  background-color: var(--white);
  border: 3px solid;
  border-color: var(--black);
  border-radius: 11.46px;
  display: flex;
  height: 133px;
  min-width: 599px;
  padding: 26px 55.2px;
}

.view-gallery-2 {
  height: 77px;
  letter-spacing: -0.6px;
  line-height: 45px;
  text-align: center;
  width: 483px;
}

.flex-row-8 {
  align-items: flex-start;
  display: flex;
  gap: 22px;
  height: 992px;
  margin-left: 5px;
  margin-top: 187px;
  min-width: 1336px;
}

.flex-col-17 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 58px;
  min-height: 656px;
  width: 431px;
}

.group-38-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 310px;
  width: 431px;
}

.step-1-2 {
  letter-spacing: -0.25px;
  line-height: 33.8px;
  min-height: 47px;
  width: 427px;
}

.mint-token-via-scatt-1 {
  cursor: pointer;
  letter-spacing: -0.25px;
  line-height: 25px;
  min-height: 251px;
  width: 427px;
}

.span0-1 {
  line-height: 33.8px;
  text-decoration: underline;
}

.span-11 {
  line-height: 33.8px;
}

.span-12 {
  letter-spacing: -0.22px;
  line-height: 29.7px;
}

.span-13 {
  letter-spacing: -0.22px;
  line-height: 27.5px;
}

.span7-1 {
  letter-spacing: -0.22px;
  line-height: 27.5px;
  text-decoration: underline;
}

.x3_0_-mint {
  cursor: pointer;
  height: 288px;
  width: 427px;
}

.flex-col-18 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 656px;
  width: 430px;
}

.group-59-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 348px;
  width: 430px;
}

.step-2 {
  letter-spacing: -0.25px;
  line-height: 33.8px;
  min-height: 47px;
  width: 359px;
}

.connect-to-mi777-phy-1 {
  letter-spacing: -0.25px;
  line-height: 25px;
  min-height: 289px;
  width: 426px;
}

.x3_1_-connect {
  height: 288px;
  width: 426px;
}

.flex-col-19 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 21px;
  min-height: 992px;
  width: 431px;
}

.group-65-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-left: 1px;
  min-height: 426px;
  width: 430px;
}

.end-of-mint-all-phy-1 {
  letter-spacing: -0.25px;
  line-height: 25px;
  min-height: 367px;
  width: 426px;
}

.x3_0_-end-of-mint {
  height: 545px;
  width: 427px;
}

.flex-col-20 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 188px;
  min-height: 8384px;
  width: 2257px;
}

.mi777-raffle-section-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 51px;
  margin-left: 170px;
  min-height: 580px;
  width: 1559px;
}

.group-container-5 {
  align-items: flex-start;
  display: flex;
  gap: 56px;
  height: 167px;
  min-width: 1159px;
}

.group-88-1 {
  background-position: 50% 50%;
  background-size: cover;
  height: 101px;
  width: 421px;
}

.group-89-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 23px;
  min-height: 167px;
  width: 682px;
}

.in-addition-to-physi-1 {
  letter-spacing: -0.22px;
  line-height: 29.7px;
  min-height: 104px;
  width: 678px;
}

.x777-minted-milady-m-1 {
  letter-spacing: -0.25px;
  line-height: 33.8px;
  min-height: 40px;
  white-space: nowrap;
}

.x4_1 {
  height: 361px;
  width: 1559px;
}

.flex-row-9 {
  align-items: center;
  display: flex;
  gap: 37px;
  margin-left: 170px;
  margin-top: 21px;
  min-width: 1559px;
}

.x4_2 {
  height: 212px;
  margin-bottom: 32px;
  object-fit: cover;
  width: 206px;
}

.overlap-group14-1 {
  height: 578px;
  position: relative;
  width: 1316px;
}

.group-101-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 282px;
  position: absolute;
  top: 167px;
  width: 868px;
}

.nft-raffle-milesto-1 {
  letter-spacing: -0.4px;
  line-height: 54px;
  min-height: 223px;
  width: 864px;
}

.span-14 {
  letter-spacing: -0.22px;
  line-height: 29.7px;
  text-decoration: underline;
}

.x777-minted-milady-maker-6790-1 {
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(180deg,
      rgb(0, 0, 0) 0%,
      rgb(123.19, 0, 198.69) 100%);
  background-clip: text;
  height: 59px;
  letter-spacing: -0.32px;
  line-height: 43.2px;
  text-fill-color: transparent;
  width: 864px;
}

.x4_3 {
  height: 578px;
  left: 691px;
  position: absolute;
  top: 0;
  width: 625px;
}

.what-is-the-mi777-milady-moto-jersey-1 {
  height: 176px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 3px;
  margin-top: 133px;
  text-align: center;
  width: 1726px;
}

.group-123 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 41px;
  margin-left: 1px;
  min-height: 322px;
  width: 576px;
}

.overlap-group-9 {
  align-items: flex-start;
  background-color: var(--snow-flurry);
  border: 1px solid;
  border-color: var(--limeade);
  border-radius: 13px;
  box-shadow: inset 0px 1px 13px #00000026;
  display: flex;
  height: 155px;
  min-width: 576px;
  padding: 28px 0;
}

.learn-more-read-our-mirrorxyz-post-1 {
  letter-spacing: -0.66px;
  line-height: 33px;
  margin-left: -1px;
  min-height: 97px;
  text-align: center;
  width: 576px;
}

.span1-1 {
  letter-spacing: -0.9px;
  line-height: 45px;
  text-decoration: underline;
}

.alternatively-you-c-1 {
  height: 126px;
  letter-spacing: -0.6px;
  line-height: 30px;
  text-align: center;
  width: 576px;
}

.x6_0 {
  height: 847px;
  margin-left: 58px;
  margin-top: 133px;
  width: 1457px;
}

.overlap-group15-1 {
  height: 636px;
  margin-top: 279px;
  position: relative;
  width: 2257px;
}

.text-13 {
  height: 246px;
  left: 0;
  letter-spacing: 0;
  line-height: 40.5px;
  position: absolute;
  text-align: center;
  top: 103px;
  width: 2257px;
}

.text-14 {
  height: 246px;
  left: 0;
  letter-spacing: 0;
  line-height: 40.5px;
  position: absolute;
  text-align: center;
  top: 194px;
  width: 2257px;
}

.text-15 {
  height: 246px;
  left: 0;
  letter-spacing: 0;
  line-height: 40.5px;
  position: absolute;
  text-align: center;
  top: 285px;
  width: 2257px;
}

.overlap-group5-1 {
  height: 636px;
  left: 401px;
  position: absolute;
  top: 0;
  width: 1328px;
}

.x8_2 {
  height: 636px;
  left: 410px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 636px;
}

.x8_3 {
  height: 402px;
  left: 1024px;
  object-fit: cover;
  position: absolute;
  top: 135px;
  width: 304px;
}

.mimotoglitter-1-1 {
  height: 426px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 105px;
  width: 426px;
}

.group-container-6 {
  align-items: flex-start;
  display: flex;
  gap: 52px;
  margin-right: 15px;
  margin-top: 126px;
  min-width: 774px;
}

.group-5-1 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  min-width: 361px;
}

.overlap-group1-3 {
  align-items: center;
  background-color: var(--gargoyle-gas);
  border-radius: 13px;
  display: flex;
  height: 99px;
  min-width: 359px;
}

.mint-my-jersey-1 {
  height: 47px;
  letter-spacing: -0.25px;
  line-height: 33.8px;
  text-align: center;
  width: 359px;
}

.overlap-group2-2 {
  align-items: center;
  background-color: var(--alto);
  border-radius: 13px;
  display: flex;
  height: 99px;
  min-width: 359px;
}

.buy-my-jersey-1 {
  cursor: pointer;
  height: 47px;
  letter-spacing: -0.25px;
  line-height: 33.8px;
  text-align: center;
  width: 359px;
}

.flex-row-10 {
  align-items: flex-start;
  display: flex;
  gap: 54px;
  height: 497px;
  margin-right: 17px;
  margin-top: 24px;
  min-width: 772px;
}

.flex-row-item-3 {
  letter-spacing: 0;
  line-height: 27.5px;
  min-height: 497px;
  width: 359px;
}

.span10 {
  line-height: 18.8px;
}

.span6-1 {
  line-height: 25px;
}

.overlap-group6-1 {
  align-items: flex-start;
  background-color: var(--snow-flurry);
  border: 1px solid;
  border-color: var(--limeade);
  border-radius: 13px;
  box-shadow: inset 0px 1px 13px #00000026;
  display: flex;
  height: 155px;
  justify-content: flex-end;
  margin-left: 1px;
  margin-top: 61px;
  min-width: 576px;
  padding: 28px 1px;
}

.learn-more-read-our-mirrorxyz-post-2 {
  letter-spacing: -0.66px;
  line-height: 33px;
  min-height: 97px;
  width: 519px;
}

.overlap-group12-1 {
  height: 701px;
  margin-top: 278px;
  position: relative;
  width: 2257px;
}

.text-12 {
  height: 246px;
  left: 0;
  letter-spacing: 0;
  line-height: 40.5px;
  position: absolute;
  text-align: center;
  top: 227px;
  width: 2257px;
}

.x9_0 {
  background-color: var(--black);
  height: 701px;
  left: 506px;
  position: absolute;
  top: 0;
  width: 1246px;
}

.overlap-group13-1 {
  height: 93px;
  margin-right: 709px;
  margin-top: 15px;
  position: relative;
  width: 536px;
}

.music-by-mistersoup_hi-1 {
  height: 49px;
  left: 0;
  letter-spacing: -0.5px;
  line-height: 37.5px;
  position: absolute;
  top: 0;
  width: 536px;
}

.video-made-with-hologramxyz-1 {
  height: 49px;
  left: 0;
  letter-spacing: -0.5px;
  line-height: 37.5px;
  position: absolute;
  top: 44px;
  width: 536px;
}

.group-111-1 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  margin-left: 4px;
  margin-top: 158px;
  min-width: 601px;
}

.overlap-group10-1 {
  align-items: flex-start;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  height: 817px;
  margin-left: 1px;
  margin-top: 172px;
  min-width: 1728px;
  padding: 94px 116px;
}

.x10_0 {
  align-self: flex-end;
  background-color: var(--black);
  border-radius: 14px;
  height: 628px;
  width: 505px;
}

.group-117-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 95px;
  margin-top: 1px;
  min-height: 538px;
  position: relative;
  width: 279px;
}

.mint-option-14-days-777-total-1 {
  height: 48px;
  letter-spacing: -0.15px;
  line-height: 20.3px;
  width: 273px;
}

.span2-3 {
  letter-spacing: -0.12px;
  line-height: 16.2px;
}

.x-physi-1 {
  letter-spacing: -0.26px;
  line-height: 35.7px;
  min-height: 68px;
  width: 244px;
}

.overlap-group7-1 {
  height: 234px;
  margin-top: 32px;
  position: relative;
  width: 246px;
}

.group-90-1 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 156px;
  position: absolute;
  top: 78px;
  width: 246px;
}

.step-1-mint-1 {
  height: 68px;
  letter-spacing: -0.2px;
  line-height: 27px;
  width: 244px;
}

.overlap-group-10 {
  align-items: flex-end;
  background-color: var(--gargoyle-gas);
  border-radius: 11.46px;
  display: flex;
  height: 87px;
  min-width: 244px;
  padding: 22.9px 0;
}

.mint-token-2,
.order-via-shopify-1 {
  height: 41px;
  letter-spacing: -0.15px;
  line-height: 20.3px;
  text-align: center;
  width: 244px;
}

.physical-jersey-di-1 {
  left: 0;
  letter-spacing: -0.15px;
  line-height: 20.3px;
  position: absolute;
  top: 0;
  width: 244px;
}

.group-116-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 111px;
  margin-top: 1px;
  min-height: 350px;
  width: 248px;
}

.fiat-option-14-days-1 {
  height: 48px;
  letter-spacing: -0.15px;
  line-height: 20.3px;
  width: 244px;
}

.group-92-1 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 21px;
  margin-top: 32px;
  min-height: 202px;
  width: 246px;
}

.physical-jersey-orde-1 {
  letter-spacing: -0.15px;
  line-height: 20.3px;
  min-height: 94px;
  width: 244px;
}

.overlap-group-11 {
  align-items: flex-end;
  background-color: var(--celeste);
  border-radius: 11.46px;
  display: flex;
  height: 87px;
  min-width: 244px;
  padding: 22.9px 0;
}

.group-98-1 {
  align-items: center;
  display: flex;
  margin-right: 127px;
  margin-top: 106px;
  min-width: 1166px;
}

.mi777-the-milady-mot-3 {
  height: 143px;
  letter-spacing: 0;
  line-height: normal;
  width: 807px;
}

.icon-twitter-1 {
  cursor: pointer;
  height: 74px;
  margin-left: 176px;
  margin-top: 5.15px;
  width: 74px;
}

.image-36-1 {
  cursor: pointer;
  height: 73px;
  margin-left: 33px;
  margin-top: 5.95px;
  object-fit: cover;
  width: 73px;
}

.this-is-a-love-l-1 {
  letter-spacing: 0;
  line-height: 27.5px;
  margin-right: 642px;
  margin-top: 24px;
  min-height: 199px;
  width: 651px;
}

.overlap-group11-1 {
  align-items: center;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  height: 770px;
  margin-left: 1px;
  margin-top: 108px;
  min-width: 1728px;
  padding: 0 677px;
}

.photo_2022-12-15-2324-1-1 {
  height: 664px;
  width: 374px;
}
</style>
