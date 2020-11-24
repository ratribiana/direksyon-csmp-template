<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: Direksyon - CSMP
      Author: Robert Anthony Tribiana - Direksyon LLC
    Author URL: http://robtribiana.com
========================================================================================== -->


<template functional>
    <footer class="the-footer flex-wrap justify-between" :class="classes">
        <p>
          <span>COPYRIGHT &copy;</span>
          <span>{{ new Date().getFullYear() }} </span>
          <a href="http://direksyon.com" target="_blank" rel="nofollow">Direksyon</a>
          <span class="hidden sm:inline-block">, All rights Reserved</span>
        </p>
        <span class="md:flex hidden items-center">

        </span>
    </footer>
</template>

<script>
export default {
  name: 'the-footer',
  props: {
    classes: {
      type: String
    }
  }
}
</script>
