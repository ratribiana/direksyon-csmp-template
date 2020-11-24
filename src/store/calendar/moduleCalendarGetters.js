/*=========================================================================================
  File Name: moduleCalendarGetters.js
  Description: Calendar Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Direksyon - CSMP
  Author: Robert Anthony Tribiana - Direksyon LLC
  Author URL: http://robtribiana.com
==========================================================================================*/


export default {
  getEvent: state => (eventId) => state.events.find((event) => event.id === eventId)
}
