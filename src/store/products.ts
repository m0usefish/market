import {defineStore} from "pinia"
import { IProduct } from "../interfaces/IProduct"
import { Colors } from "../interfaces/colors"

const useProductsStore = defineStore('counter', {
    state: () => ({ 
        products: [{
            id: '1',
            name: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '2',
            name: 'Мобільний телефон Apple iPhone 16 Pro 64GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 64GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 43_999,
            color: Colors.Yellow
        },
        {
            id: '3',
            name: 'Мобільний телефон Xiami 16 Pro 128GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '4',
            name: 'Мобільний телефон LG 16 Pro 128GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '5',
            name: 'Мобільний телефон Huawei 16 Pro 128GB Black',
            description: 'Мобільний телефон Huawei 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '6',
            name: 'Мобільний телефон Honor 16 Pro 128GB Black',
            description: 'Мобільний телефон Honor 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '1',
            name: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '2',
            name: 'Мобільний телефон Apple iPhone 16 Pro 64GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 64GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 43_999,
            color: Colors.Yellow
        },
        {
            id: '3',
            name: 'Мобільний телефон Xiami 16 Pro 128GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '4',
            name: 'Мобільний телефон LG 16 Pro 128GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '5',
            name: 'Мобільний телефон Huawei 16 Pro 128GB Black',
            description: 'Мобільний телефон Huawei 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '6',
            name: 'Мобільний телефон Honor 16 Pro 128GB Black',
            description: 'Мобільний телефон Honor 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '1',
            name: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '2',
            name: 'Мобільний телефон Apple iPhone 16 Pro 64GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 64GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 43_999,
            color: Colors.Yellow
        },
        {
            id: '3',
            name: 'Мобільний телефон Xiami 16 Pro 128GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '4',
            name: 'Мобільний телефон LG 16 Pro 128GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '5',
            name: 'Мобільний телефон Huawei 16 Pro 128GB Black',
            description: 'Мобільний телефон Huawei 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '6',
            name: 'Мобільний телефон Honor 16 Pro 128GB Black',
            description: 'Мобільний телефон Honor 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '1',
            name: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '2',
            name: 'Мобільний телефон Apple iPhone 16 Pro 64GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 64GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 43_999,
            color: Colors.Yellow
        },
        {
            id: '3',
            name: 'Мобільний телефон Xiami 16 Pro 128GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '4',
            name: 'Мобільний телефон LG 16 Pro 128GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '5',
            name: 'Мобільний телефон Huawei 16 Pro 128GB Black',
            description: 'Мобільний телефон Huawei 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '6',
            name: 'Мобільний телефон Honor 16 Pro 128GB Black',
            description: 'Мобільний телефон Honor 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '1',
            name: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '2',
            name: 'Мобільний телефон Apple iPhone 16 Pro 64GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 64GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 43_999,
            color: Colors.Yellow
        },
        {
            id: '3',
            name: 'Мобільний телефон Xiami 16 Pro 128GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '4',
            name: 'Мобільний телефон LG 16 Pro 128GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '5',
            name: 'Мобільний телефон Huawei 16 Pro 128GB Black',
            description: 'Мобільний телефон Huawei 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '6',
            name: 'Мобільний телефон Honor 16 Pro 128GB Black',
            description: 'Мобільний телефон Honor 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '1',
            name: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '2',
            name: 'Мобільний телефон Apple iPhone 16 Pro 64GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 64GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 43_999,
            color: Colors.Yellow
        },
        {
            id: '3',
            name: 'Мобільний телефон Xiami 16 Pro 128GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '4',
            name: 'Мобільний телефон LG 16 Pro 128GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '5',
            name: 'Мобільний телефон Huawei 16 Pro 128GB Black',
            description: 'Мобільний телефон Huawei 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '6',
            name: 'Мобільний телефон Honor 16 Pro 128GB Black',
            description: 'Мобільний телефон Honor 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '1',
            name: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '2',
            name: 'Мобільний телефон Apple iPhone 16 Pro 64GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 64GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 43_999,
            color: Colors.Yellow
        },
        {
            id: '3',
            name: 'Мобільний телефон Xiami 16 Pro 128GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '4',
            name: 'Мобільний телефон LG 16 Pro 128GB Black',
            description: 'Мобільний телефон Apple iPhone 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '5',
            name: 'Мобільний телефон Huawei 16 Pro 128GB Black',
            description: 'Мобільний телефон Huawei 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        },
        {
            id: '6',
            name: 'Мобільний телефон Honor 16 Pro 128GB Black',
            description: 'Мобільний телефон Honor 16 Pro 128GB Black',
            image: 'https://content1.rozetka.com.ua/goods/images/big_tile/468886612.jpg',
            price: 55_999,
            color: Colors.Yellow
        }] as IProduct[]
    }),
    getters: {
        getProductsBySearch(state){
            return (searchValue: string): IProduct[] => {
                return state.products.filter((product) =>{
                    return product.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
                })
            }
        }
    },

    actions: {
      
    },
  })

  export default useProductsStore