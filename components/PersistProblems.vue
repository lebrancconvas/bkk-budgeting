<template>
  <BoxContainer>
    <div class="wv-h5 font-extrabold pb-1 text-center hidden sm:block">
      {{ title }}
    </div>
    <div class="wv-h5 sm:pb-8 text-center block sm:hidden wv-bold">
      {{ title }}
    </div>
    <p class="text-center">เลือกได้ 1 ข้อ</p>
    <div class="flex flex-col gap-2 md:gap-5">
      <!-- top -->
      <div class="flex flex-wrap gap-2 md:gap-3 lg:gap-5 justify-center">
        <div
          v-for="(item, index) in problemsTop"
          :key="index"
          class="flex sm:flex-col bg-white rounded-md basis-full sm:basis-28 md:basis-40 flex-shrink-0 gap-2 sm:text-center items-center py-3 px-2 sm:py-5 sm:px-4 cursor-pointer hover:bg-gray-100"
          :class="index === currentHoveredImage ? 'border-inset' : ''"
          @click="() => setCurrentImage(index)"
        >
          <img
            class="w-10 h-10 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:h-36 lg:w-36 max-w-none"
            :src="`${$config.path.images}/persistent-problems/${item.img}.png`"
            :alt="item.issue"
          />
          <p class="wv-b4 wv-bold">{{ item.issue }}</p>
        </div>
      </div>
      <!-- bottom -->
      <div class="flex flex-wrap gap-2 md:gap-3 lg:gap-5 justify-center">
        <div
          v-for="(item, index) in problemsBottom"
          :key="index"
          class="flex sm:flex-col bg-white rounded-md basis-full sm:basis-28 md:basis-40 flex-shrink-0 gap-2 sm:text-center items-center py-3 px-2 sm:py-5 sm:px-4 cursor-pointer hover:bg-gray-100"
          :class="
            index + problemsTop.length === currentHoveredImage ? 'border-inset' : ''
          "
          @click="() => setCurrentImage(index + problemsTop.length)"
        >
          <img
            class="w-10 h-10 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:h-36 lg:w-36 max-w-none"
            :src="`${$config.path.images}/persistent-problems/${item.img}.png`"
            :alt="item.issue"
          />
          <p class="wv-b4 wv-bold">{{ item.issue }}</p>
        </div>
      </div>
    </div>
  </BoxContainer>
</template>

<script lang="ts">
import Vue from "vue";
import BoxContainer from "~/components/BoxContainer.vue";
import { planData } from "~/data/plan-data";

export default Vue.extend({
  name: "AllocationQuestion",
  components: { BoxContainer },
  data() {
    return {
      title: "อะไรที่ยังเป็นปัญหาที่ค้างคาใจคุณอยู่ทุกวันนี้",
    };
  },
  computed: {
    currentHoveredImage() {
      return this.$store.state.currentImage;
    },
    problemsTop() {
      const topData = planData.slice(0, 4);
      return topData;
    },
    problemsBottom() {
      const topData = planData.slice(4, 7);
      return topData;
    },
  },
  methods: {
    setCurrentImage(image: number) {
      this.$store.commit("setCurrentImage", image);
    },
  },
});
</script>

<style lang="scss" scoped>
.border-inset {
  box-shadow: inset 0px 0px 0px 2px #000000;
}
</style>
