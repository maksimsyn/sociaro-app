<template lang="pug">
  main(role='main').page-content
    AppProject
</template>

<script>
  import AppProject from '@/components/ui/AppProject/AppProject';

  export default {
    name: 'Project',
    components: { AppProject },
    beforeRouteLeave(to, from, next) {
      this.$store.commit('setWhiteHeader', false);
      next();
    }
  };
</script>
