import create from "zustand";
import produce from "immer";
import categories from "../CategoriesData";
import ProductData from '../Data/Data'


const usestore = create((set) => ({
  categoryData: categories,
  productData: ProductData,
  wishlist: [],
  myCartObj: [],
  total: 19,

  
  addCard: (card) =>
    set(
      produce((state) => {
        const produc = state.myCartObj.find(item => item.id === card.id)
        if(!produc) {
          state.myCartObj.push(card)
          state.total += card.priceTo
        }else {
          state.myCartObj.map(item => {
            if(item.id === card.id) {
              state.total += card.priceTo
              return item.count += 1
            }
          })
        }
      })
    ),  

    removeCard: (card) =>
    set(
      produce((state) => {
        state.total -= card.priceTo * card.count
        state.myCartObj = state.myCartObj.filter(item => item.id !== card.id)
      })
    ),

    decrease: (card) =>
    set(
      produce((state) => {
        const product = state.myCartObj.find(item => item.id === card.id)
        if(product.count !== 1) {
          state.myCartObj.map(item => {
            if(item.id === card.id) {
              state.total -= card.priceTo
              return item.count -= 1
            }
          })
        }
      })
    ),

  addWishlist: (card) =>
   set(
    produce((state) => {
      const product = state.productData.find(item => item.id === card.id)
      if(!product.like) {
        state.productData.map(item => {
          if(item.id === card.id) { 
            state.wishlist.push(card)
            return item.like = true
          }
        })
      } else {
        state.productData.map(item => {
          if(item.id === card.id) {
            state.wishlist = state.wishlist.filter(like => like.id !== card.id)
            return item.like = false
          }
        })
      }
    })
  ),

  removeWishlist: (card) =>{
    set(
      produce((state) => {
        state.wishlist = state.wishlist.filter(item => item.id !== card.id)
      })
    )
  }

}))

export default usestore
