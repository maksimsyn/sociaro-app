<template lang="pug">
  main(role='main').page-content
    AppAbout
</template>

<script>
  import AppAbout from '@/components/ui/AppAbout/AppAbout';

  export default {
    name: 'About',
    components: { AppAbout },
  };
</script>
