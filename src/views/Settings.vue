<template>
  <div class="page">
    <div class="page__title">Settings</div>
    <SettingsBox />
  </div>
</template>

<script>
import SettingsBox from "@/components/view-settings/SettingsBox.vue";
export default {
  name: "Settings",
  components: {
    SettingsBox
  }
};
</script>