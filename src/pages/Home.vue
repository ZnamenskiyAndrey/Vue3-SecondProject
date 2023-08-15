<script setup>
import {ref} from 'vue';
import AppLayout from '../components/AppLayout.vue';
import { useRootStore} from '../stores/root';
import { storeToRefs } from 'pinia';

const rootStore = useRootStore();
rootStore.getIngredients();

const {ingredients, cocktails} = storeToRefs(rootStore);
const ingredient = ref(null);

function getCocktails() {
    rootStore.getCocktails(ingredient);
}

</script>

<template>
<AppLayout imgUrl="/src/assets/img/bg-1.jpg">
    <div class="wrapper">
        <div class="info">
            <h1 class="title">Выбери свой напиток</h1>
            <div class="select-wrapper">
                <select 
                    class="select" 
                    v-model="ingredient"
                    placeholder="Выбери главный ингредиент"
                    @change="getCocktails"
                >
                <option 
                    v-for="item in ingredients"
                    :key="item.strIngredient1"
                    :label="item.strIngredient1"
                    :value="item.strIngredient1"
                >
                </option>
                </select>
            </div>
            <p class="descr">
                Попробуйте наши рецепты вкусных коктейлей для любого случая. Найдите рецепты вкусных коктейлей по ингредиентам с помощью нашего генератора коктейлей.
            </p>
            <img class="img" src="../assets//img/cocktails.png" alt="Коктейли">
        </div>
    </div>
</AppLayout>
    
</template>

<style lang="scss" scoped>
@import '../assets/styles/main';

.wrapper{
    display: flex;  
    align-items: center;
    justify-content: center;
}

.info{
    padding-top: 100px;
}

.title{
    font-weight: 500;
    font-size: 32px;
    line-height: 130%;
    letter-spacing: 6.4px;
    text-transform: uppercase;
    text-align: center;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        width: 100px;
        height: 5px;
        background-color: var(--accent);
        bottom: -27px;
        left: 42%;
    }
}
.select-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
}
.select {
    margin-top: 80px;
    max-width: 220px;
    font-weight: 500;
    font-family: "Raleway";
    text-align: center;
    padding: 10px 12px;
    background-color: var(--background);
    color: var(--text-color);
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.70);    
    &:placeholder {
        color: var(--text-color);   
    }
}

.descr {
    max-width: 516px;
    color: var(--text-color2);
    text-align: center;
    line-height: 36px; 
    letter-spacing: 1.6px;
    margin-bottom: 60px;
}
.img {
    display: block; 
    margin: 0 auto;
}
</style>