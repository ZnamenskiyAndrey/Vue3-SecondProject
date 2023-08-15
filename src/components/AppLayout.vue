<script setup>
const props = defineProps ({
    imgUrl:{
        type:String,
        required: true,
    },
});
</script>

<template>
    <div class="root">
        <div :style="`background-image: url(${imgUrl})`" class="img"></div>
        <div class="main">
            <button class="main__btn">
                    Случайный коктейль
            </button>
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../assets//styles/main';

.root {
    display: flex;
    min-height: 100vh;
    background-color: var(--background);
}
.img {
    width: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
.main {
    width: 50%;
    position: relative;
    padding: 32px 40px;
    &__btn {
        background-color: var(--accent);
        color: var(--text-color);
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        position: absolute;
        top: 32px;
        right: 40px;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
        font-family: "Raleway";
    }
    &__btn:hover {
        background-color: rgba(255, 15, 130, 0.9);
    }
}
</style>