import create from "zustand";
import categories from "../CategoriesData";
import { dealData } from "../Data/Data";

let items = []


const usestore = create((set) => ({
 categoryData: categories,
 dealData: dealData,
 items: items,
 addCard: (cards) =>{
  const existingItems = items.find((item) => item.id === cards.id)

  if(!existingItems) {
    items.push({
      id: cards.id,
      name: cards.name,
      newPrice: cards.newPrice,
    });
  } 
}
}))


export default usestore
