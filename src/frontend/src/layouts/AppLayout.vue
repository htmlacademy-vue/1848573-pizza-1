<template>
  <div>
    <AppLayoutHeader />
    <slot />
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader.vue";
export default {
  name: "AppLayout",
  components: {
    AppLayoutHeader,
  },
};
</script>
