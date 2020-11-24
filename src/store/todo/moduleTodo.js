/*=========================================================================================
  File Name: moduleTodo.js
  Description: Todo Module
  ----------------------------------------------------------------------------------------
  Item Name: Direksyon - CSMP
  Author: Robert Anthony Tribiana - Direksyon LLC
  Author URL: http://robtribiana.com
==========================================================================================*/


import state from './moduleTodoState.js'
import mutations from './moduleTodoMutations.js'
import actions from './moduleTodoActions.js'
import getters from './moduleTodoGetters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
