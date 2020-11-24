/*=========================================================================================
  File Name: moduleecommerce.js
  Description: ecommerce Module
  ----------------------------------------------------------------------------------------
  Item Name: Direksyon - CSMP
  Author: Robert Anthony Tribiana - Direksyon LLC
  Author URL: http://robtribiana.com
==========================================================================================*/


import state from './moduleECommerceState.js'
import mutations from './moduleECommerceMutations.js'
import actions from './moduleECommerceActions.js'
import getters from './moduleECommerceGetters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
