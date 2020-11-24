/*=========================================================================================
  File Name: moduleAuth.js
  Description: Auth Module
  ----------------------------------------------------------------------------------------
  Item Name: Direksyon - CSMP
  Author: Robert Anthony Tribiana - Direksyon LLC
  Author URL: http://robtribiana.com
==========================================================================================*/


import state from './moduleAuthState.js'
import mutations from './moduleAuthMutations.js'
import actions from './moduleAuthActions.js'
import getters from './moduleAuthGetters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
