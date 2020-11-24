/*=========================================================================================
  File Name: moduleEmail.js
  Description: Email Module
  ----------------------------------------------------------------------------------------
  Item Name: Direksyon - CSMP
  Author: Robert Anthony Tribiana - Direksyon LLC
  Author URL: http://robtribiana.com
==========================================================================================*/


import state from './moduleEmailState.js'
import mutations from './moduleEmailMutations.js'
import actions from './moduleEmailActions.js'
import getters from './moduleEmailGetters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
