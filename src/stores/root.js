import { defineStore } from 'pinia'
import  axios  from 'axios'
import { INGREDIENTS_URL , COCKTAILS_BY_INGR_URL} from '../constants'


export const useRootStore = defineStore('root', {
    state: () => ({
        ingredients:[],
    }),
    actions: {
       async getIngredients() {
            const data = await axios.get(INGREDIENTS_URL)
            this.ingredients = data?.data?.drinks
       }    
    },
    actions: {
        async getCocktails(ingredient) {
             const data = await axios.get(`${INGREDIENTS_URL}${COCKTAILS_BY_INGR_URL}`)
             this.cocktails = data?.data?.drinks
        }    
     },
   
    
})