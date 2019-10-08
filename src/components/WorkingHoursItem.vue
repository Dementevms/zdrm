<template>
  <div class="working-hours__item" :class="{ 'disabled' : active === false }">
    <div class="working-hours__col-left">
      <div class="input-checkbox">
        <div class="input-checkbox__switch">
          <svg>
            <use xlink:href="#icon-checkbox" />
          </svg>
        </div>
        <div class="input-checkbox__label">{{ title }}</div>
      </div>
    </div>
    <div class="working-hours__col-right">
      <TimeSlider v-if="active" :start="start" :end="end" />
    </div>
  </div>
</template>
<script>
import TimeSlider from '@/components/TimeSlider.vue';
export default {
  props: {
    title: String,
    active: Boolean,
    start: Number,
    end: Number,
  },
  components:{
    TimeSlider
  },
}
</script>