<template lang="pug">
  .pagination
    ul.pagination__list
      li.pagination__item.pagination__item_prev
        nuxt-link(to='/' data-hover-icon).pagination__link
          figure.pagination__figure
            picture.pagination__picture
              img(src='/img/pagination-1.jpg').pagination__img
          .pagination__text
            span.pagination__phrase Previous project
            h2.pagination__title.title.title_size_xs Nekki
      li.pagination__item.pagination__item_next
        nuxt-link(to='/' data-hover-icon).pagination__link
          figure.pagination__figure
            picture.pagination__picture
              img(src='/img/pagination-2.jpg').pagination__img
          .pagination__text
            span.pagination__phrase next project
            h2.pagination__title.title.title_size_xs mercedes
</template>

<script>
  export default {
    name: 'AppPagination',
  };
</script>

<style lang="sass">
  @import "AppPagination"
</style>
