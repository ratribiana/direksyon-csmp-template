<!-- =========================================================================================
    File Name: Avatar.vue
    Description: Avatars
    ----------------------------------------------------------------------------------------
    Item Name: Direksyon - CSMP
      Author: Robert Anthony Tribiana - Direksyon LLC
    Author URL: http://robtribiana.com
========================================================================================== -->


<template>
    <div id="avatar-demo">
        <avatar-default></avatar-default>
        <avatar-size></avatar-size>
        <avatar-color></avatar-color>
        <avatar-with-badge></avatar-with-badge>
        <avatar-icon></avatar-icon>
    </div>
</template>

<script>
import AvatarDefault from './AvatarDefault.vue'
import AvatarSize from './AvatarSize.vue'
import AvatarColor from './AvatarColor.vue'
import AvatarWithBadge from './AvatarWithBadge.vue'
import AvatarIcon from './AvatarIcon.vue'

export default{
  components: {
    AvatarDefault,
    AvatarSize,
    AvatarColor,
    AvatarWithBadge,
    AvatarIcon
  }
}
</script>
