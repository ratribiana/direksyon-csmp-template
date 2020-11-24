/*=========================================================================================
  File Name: moduleUserManagement.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Direksyon - CSMP
  Author: Robert Anthony Tribiana - Direksyon LLC
  Author URL: http://robtribiana.com
==========================================================================================*/


import state from './moduleUserManagementState.js'
import mutations from './moduleUserManagementMutations.js'
import actions from './moduleUserManagementActions.js'
import getters from './moduleUserManagementGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

