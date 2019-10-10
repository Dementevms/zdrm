<template>
  <div class="working-hours__item" :class="{ 'disabled' : !data.active }">
    <div class="working-hours__col-left">
      <div class="input-checkbox">
        <div class="input-checkbox__switch" :class="{ 'disabled' : !data.active }" @click="toogleCheckBox">
          <svg v-if="data.active">
            <use xlink:href="#icon-checkbox" />
          </svg>
        </div>
        <div class="input-checkbox__label">{{ title }}</div>
      </div>
    </div>
    <div class="working-hours__col-right">
      <TimeSlider v-if="data.active" :start="start" :end="end" />
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
  data(){
    return {
      data: {
        active: null,
      }
    }
  },
  created(){
    this.init();
  },
  methods: {
    init(){
      this.data.active = this.active;
    },
    toogleCheckBox(){
      this.data.active = !this.data.active;
    }
  },
}
</script>