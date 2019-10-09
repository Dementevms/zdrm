<template>
  <div class="working-hours">
    <div class="working-hours__item working-hours__item_schedule">
      <div class="working-hours__col-left">
        <div class="working-hours__label">Schedule</div>
      </div>
      <div class="working-hours__col-right working-hours__schedule">
        <div class="working-hours__schedule-input input-radio active">
          <div class="input-radio__switch"></div>
          <div class="input-radio__label">Fixed</div>
        </div>
        <div class="working-hours__schedule-input input-radio">
          <div class="input-radio__switch"></div>
          <div class="input-radio__label">Flexible</div>
        </div>
      </div>
    </div>
    <div class="working-hours__spacer"></div>
    <WorkingHoursItem
      v-for="(item, index) in items"
      :key="index"
      :title="item.title"
      :active="item.active"
      :start="item.start"
      :end="item.end"
    />
  </div>
</template>

<script>
import WorkingHoursItem from '@/components/working-hours/WorkingHoursItem.vue';
export default {
  components:{
    WorkingHoursItem
  },
  data(){
    return {
      items: [
        {
          title: 'Monday',
          active: true,
          start: 360,
          end: 720
        },
        {
          title: 'Tuesday',
          active: true,
          start: 60,
          end: 960
        },
        {
          title: 'Wedndesday',
          active: true,
          start: 270,
          end: 1020
        },
        {
          title: 'Thursday',
          active: true,
          start: 80,
          end: 830
        },
        {
          title: 'Friday',
          active: true,
          start: 360,
          end: 1400
        },
        {
          title: 'Saturday',
          active: false,
          start: 145,
          end: 254
        },
        {
          title: 'Sunday',
          active: false,
          start: 120,
          end: 651
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.working-hours {

  &__item {
    display: flex;
    align-items: center;
  }

  &__col-left {
    width: 200px;
    position: relative;
  }

  &__col-right {
    width: calc(100% - 200px);
    position: relative;
  }

  &__label {
    font-size: 15px;
    line-height: 22px;
    color: var(--gray-color);
  }

  &__item{
    margin: 42px 0;
    
    &_schedule{
      margin: 26px 0 16px;
    }

    &.disabled{

    }
  }

  &__schedule {
    display: flex;
    align-items: center;
  }

  &__schedule-input {
    margin: 0 20px 0 0;
    &:last-child {
      margin: 0;
    }
  }

  &__spacer {
    background-color: var(--light-gray-color);
    width: 100%;
    height: 1px;
  }

  &__time-controls{
    position: absolute;
    top: -36px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>