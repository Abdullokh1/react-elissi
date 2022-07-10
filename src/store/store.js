import create from "zustand";
import categories from "../CategoriesData";
import { dealData } from "../Data/Data";
import ProductData from '../Data/Data'


const usestore = create((set) => ({
 categoryData: categories,
 dealData: dealData,
 productData: ProductData,
 data: dealData, mycardObj: [],

 addCard: (cardId) =>{
  set((state) => ({mycardObj: [...state.mycardObj,  ...state.data.filter(item => item.id === cardId)]}))
},

removeHandle: (removeId) =>{
  set((state) => ({mycardObj: state.mycardObj.filter(item => item.id !== removeId)}))
}

}))




export default usestore
