<!-- =========================================================================================
    File Name: Progress.vue
    Description: Progress - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Direksyon - CSMP
      Author: Robert Anthony Tribiana - Direksyon LLC
    Author URL: http://robtribiana.com
========================================================================================== -->


<template>
    <div id="progress-demo">
        <progress-color></progress-color>
        <progress-interminate></progress-interminate>
        <progress-height></progress-height>
    </div>
</template>

<script>
import ProgressColor from './ProgressColor.vue'
import ProgressInterminate from './ProgressInterminate.vue'
import ProgressHeight from './ProgressHeight.vue'

export default{
  components: {
    ProgressColor,
    ProgressInterminate,
    ProgressHeight
  }
}
</script>
