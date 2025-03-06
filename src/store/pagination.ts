import {defineStore} from "pinia"

const usePaginationStore = defineStore('pagination', {
    state: () => ({ 
       productsPerPage: 0 as number,
       currentPage: 1 as number,
       totalPages: 0 as number

    }),
    getters: {
        getPages(state): number[] {
            const array = []
            for(let i = 0; i< state.totalPages; i++){
                array.push(i+1)
            }
            return array
        }
    },

    actions: {
      saveCurrentPage(currentPage: number): void {
        this.currentPage = currentPage
      },
      saveProductsPerPage(productsPerPage: number):void {
        this.productsPerPage = productsPerPage;
      },
      saveTotalPages(prosuctsCount: number):void {
        this.totalPages = Math.ceil(prosuctsCount / this.productsPerPage);
      }
    },
  })

  export default usePaginationStore