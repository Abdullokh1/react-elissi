import fruit1 from '../assets/Images/fruit-1.jpg'
import fruit2 from '../assets/Images/fruit-2.jpg'
import whiteGrape1 from '../assets/Images/white-grape-1.jpg'
import whiteGrape2 from '../assets/Images/white-grape-2.jpg'
import granate1 from '../assets/Images/granate-1.jpg'
import granate2 from '../assets/Images/granate-2.jpg'
import orange1 from '../assets/Images/orange-1.jpg'
import orange2 from '../assets/Images/orange-2.jpg'
import strawberry1 from '../assets/Images/strawberry-1.jpg'
import strawberry2 from '../assets/Images/strawberry-2.jpg'
import strawberry3 from '../assets/Images/strawberry-3.jpg'
import apple1 from '../assets/Images/apple-1.jpg'
import apple2 from '../assets/Images/apple-2.jpg'
import violet from '../assets/Images/violet.jpg'
import greenLemon from '../assets/Images/green-lemon.jpg'
import milk from '../assets/Images/milk.jpg'
import lime from '../assets/Images/lime.jpg'
import onion1 from '../assets/Images/onion-1.jpg'
import onion2 from '../assets/Images/onion-2.jpg'
import redCabbage1 from '../assets/Images/red-cabbage-1.jpg'
import redCabbage2 from '../assets/Images/red-cabbage-2.jpg'
import cucumber1 from '../assets/Images/cucumber-1.jpg'
import yellow1 from '../assets/Images/yellow-1.jpg'
import yellow2 from '../assets/Images/yellow-2.jpg'
import chili1 from '../assets/Images/chili-1.jpg'
import chili2 from '../assets/Images/chili-2.jpg'
import milk1 from '../assets/Images/milk-1.jpg'
import milk2 from '../assets/Images/milk-2.jpg'
import limonade1 from '../assets/Images/limonade-1.jpg'
import limonade2 from '../assets/Images/limonade-2.jpg'
import purea1 from '../assets/Images/purea-1.jpg'
import pineapple1 from '../assets/Images/pineapple-1.jpg'
import pineapple2 from '../assets/Images/pineapple-2.jpg'
import melegarna1 from '../assets/Images/melegarna-1.jpg'
import juice1 from '../assets/Images/juice-1.jpg'
import juice2 from '../assets/Images/juice-2.jpg'








const dealData = [
  {
    id: 1,
    image: violet,
    type: 'Root vegetables',
    name: 'Violet Cauliflower',
    oldPrice: 15,
    newPrice: 10,
    sold: 90,
    available: 40,
    discount: '-33%',
    soldInHour: '15 sold in last 19 hours',
    view: 41,
  },
  {
    id: 2,
    image: greenLemon,
    type: 'Chilies, garlic, lemon',
    name: 'Organic lemon',
    oldPrice: 25,
    newPrice: 20,
    sold: 60,
    available: 80,
    discount: '-20%',
    soldInHour: '20 sold in last 12 hours',
    view: 27,
  },
  {
    id: 3,
    image: milk,
    type: 'Milks & Creams',
    name: 'Sorbet ice cream',
    oldPrice: 15,
    newPrice: 12,
    sold: 82,
    available: 58,
    discount: '-20%',
    soldInHour: '35 sold in last 11 hours',
    view: 33,
  },
  {
    id: 4,
    image: lime,
    type: 'Milks & Creams',
    name: 'Purea Lime',
    oldPrice: 18,
    newPrice: 12,
    sold: 71,
    available: 34,
    discount: '-33%',
    soldInHour: '5 sold in last 25 hours',
    view: 15,
  },
]



const ProductData = [
  {
    id: 1,
    images: [fruit1, fruit2],
    name: 'Cherry tomatoes',
    priceFrom: 5.00,
    priceTo: 12.00,
    soldCount: '16 sold in last 18 hours',
    StockCount: 99,
    view: 22,
    type: 'fruits'
  },
  {
    id: 2,
    images: [whiteGrape1, whiteGrape2],
    name: 'White Grape',
    priceFrom: 5.00,
    priceTo: 15.00,
    soldCount: '8 sold in last 13 hours',
    StockCount: 99,
    view: 28,
    type: 'fruits'
  },
  {
    id: 3,
    images: [granate1, granate2],
    name: 'Pomegranate',
    priceFrom: 3.00,
    priceTo: 8.00,
    soldCount: '9 sold in last 19 hours',
    StockCount: 50,
    view: 14,
    type: 'fruits'
  },
  {
    id: 4,
    images: [orange1, orange2],
    name: 'Navel orange',
    priceFrom: 3.00,
    priceTo: 16.00,
    soldCount: '5 sold in last 7 hours',
    oldPrice: 20.00,
    discount: '-20%',
    StockCount: 87,
    view: 46,
    type: 'fruits'
  },
  {
    id: 5,
    images: [strawberry1, strawberry2, strawberry3],
    name: 'Fresh Strawberries',
    priceFrom: 3.00,
    priceTo: 10.00,
    soldCount: '8 sold in last 14 hours',
    oldPrice: 20.00,
    discount: '-50%',
    StockCount: 84,
    view: 46,
    type: 'fruits'
  },
  {
    id: 6,
    images: [apple1, apple2],
    name: 'Fresh Strawberries',
    priceFrom: 3.00,
    priceTo: 10.00,
    soldCount: '8 sold in last 14 hours',
    oldPrice: 20.00,
    discount: '-50%',
    StockCount: 84,
    view: 46,
    type: 'fruits'
  },
  {
    id: 7,
    images: [onion1, onion2],
    name: 'Red Onion',
    priceFrom: 6.00,
    priceTo: 10.00,
    soldCount: '2 sold in last 11 hours',
    oldPrice: 20.00,
    discount: '-50%',
    StockCount: 84,
    view: 36,
    type: 'Vegetables'
  },
  {
    id: 8,
    images: [redCabbage1, redCabbage2],
    name: 'Red Cabbage',
    priceFrom: 9.00,
    priceTo: 15.00,
    soldCount: '4 sold in last 8 hours',
    oldPrice: 20.00,
    discount: '-50%',
    StockCount: 84,
    view: 35,
    type: 'Vegetables'
  },
  {
    id: 9,
    images: [cucumber1],
    name: 'Organic Almaverda',
    priceFrom: 11.00,
    priceTo: 18.00,
    soldCount: '10 sold in last 18 hours',
    oldPrice: 20.00,
    discount: '-50%',
    StockCount: 84,
    view: 30,
    type: 'Vegetables'
  },
  {
    id: 10,
    images: [yellow1, yellow2],
    name: 'Organic Cauliflower',
    priceFrom: 9.00,
    priceTo: 10.00,
    soldCount: '7 sold in last 10 hours',
    oldPrice: 20.00,
    discount: '-50%',
    StockCount: 84,
    view: 29,
    type: 'Vegetables'
  },
  {
    id: 11,
    images: [chili1, chili2],
    name: 'Chili Pepper',
    priceFrom: 7.00,
    priceTo: 10.00,
    soldCount: '2 sold in last 16 hours',
    oldPrice: 20.00,
    discount: '-50%',
    StockCount: 24,
    view: 20,
    type: 'Vegetables'
  },
  {
    id: 12,
    images: [milk1, milk2],
    name: 'Sorbet Ice Cream',
    priceFrom: 7.00,
    priceTo: 12.00,
    soldCount: '4 sold in last 11 hours',
    oldPrice: 15.00,
    discount: '-20%',
    StockCount: 58,
    view: 30,
    type: 'Milk & Creams'
  },
  {
    id: 13,
    images: [limonade1, limonade2],
    name: 'Ratto Milk',
    priceFrom: 7.00,
    priceTo: 20.00,
    soldCount: '15 sold in last 13 hours',
    oldPrice: 15.00,
    discount: '-20%',
    StockCount: 58,
    view: 18,
    type: 'Milk & Creams'
  },
  {
    id: 14,
    images: [purea1],
    name: 'Purea Lime',
    priceFrom: 7.00,
    priceTo: 12.00,
    soldCount: '9 sold in last 6 hours',
    oldPrice: 18.00,
    discount: '-33%',
    StockCount: 34,
    view: 11,
    type: 'Milk & Creams'
  },
  {
    id: 15,
    images: [pineapple1, pineapple2],
    name: 'Pineapple Slices',
    priceFrom: 7.00,
    priceTo: 20.00,
    soldCount: '17 sold in last 18 hours',
    oldPrice: 25.00,
    discount: '-33%',
    StockCount: 60,
    view: 30,
    type: 'Milk & Creams'
  },
  {
    id: 16,
    images: [melegarna1],
    name: 'Lagrana Milk',
    priceFrom: 7.00,
    priceTo: 12.00,
    soldCount: '10 sold in last 17 hours',
    oldPrice: 18.00,
    discount: '-33%',
    StockCount: 83,
    view: 17,
    type: 'Milk & Creams'
  },
  {
    id: 17,
    images: [juice1, juice2],
    name: 'Pomegranate Juice',
    priceFrom: 7.00,
    priceTo: 16.00,
    soldCount: '16 sold in last 11 hours',
    oldPrice: 18.00,
    discount: '-33%',
    StockCount: 83,
    view: 49,
    type: 'Milk & Creams'
  },
  
]


export default ProductData;
export {dealData}