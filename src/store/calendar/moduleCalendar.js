/*=========================================================================================
  File Name: moduleCalendar.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Direksyon - CSMP
  Author: Robert Anthony Tribiana - Direksyon LLC
  Author URL: http://robtribiana.com
==========================================================================================*/


import state from './moduleCalendarState.js'
import mutations from './moduleCalendarMutations.js'
import actions from './moduleCalendarActions.js'
import getters from './moduleCalendarGetters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
