<template lang="pug">
  main(role='main').page-content
    AppContacts
    AppMap
</template>

<script>
  import AppContacts from '@/components/ui/AppContacts/AppContacts';
  import AppMap from '@/components/ui/AppMap/AppMap';

  export default {
    name: 'Contacts',
    components: { AppMap, AppContacts },
  };
</script>
