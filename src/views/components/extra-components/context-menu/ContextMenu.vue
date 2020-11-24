<!-- =========================================================================================
  File Name: ContextMenu.vue
  Description: Context menu Demo
  ----------------------------------------------------------------------------------------
  Item Name: Direksyon - CSMP
  Author: Robert Anthony Tribiana - Direksyon LLC
  Author URL: http://robtribiana.com
========================================================================================== -->

<template>
  <div id="context-menu-demo">
    <context-menu-simple />
    <context-menu-click-not-close />
  </div>
</template>

<script>
import ContextMenuSimple from './ContextMenuSimple.vue'
import ContextMenuClickNotClose from './ContextMenuClickNotClose.vue'

export default{
  components: {
    ContextMenuSimple,
    ContextMenuClickNotClose
  }
}
</script>
