/*=========================================================================================
  File Name: moduleEcommerceGetters.js
  Description: Ecommerce Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Direksyon - CSMP
  Author: Robert Anthony Tribiana - Direksyon LLC
  Author URL: http://robtribiana.com
==========================================================================================*/


export default {
  isInCart: state => itemId => {
    return state.cartItems.some((item) => item.objectID === itemId)
  },
  isInWishList: state => itemId => {
    return state.wishList.some((item) => item.objectID === itemId)
  },
  getCartItem: state => itemId => {
    const result = state.cartItems.filter((item) => item.objectID === itemId)
    return result.length ? result.pop() : []
  }
}
