<template>
     <a href="#" class="menu">
                    <img class="menu__image" src="@/assets/img/menu.svg" alt="">
                </a>
</template>

<script>
export default {
    name: "Icon"
}
</script>

<style>
.menu {
    margin-right: 34px;
    margin-top: 15px;
    margin-bottom: 10px;
    display: inline-block;
}

img.menu {
    width: 32px;
    height: 23px;
}

.menu:hover {
    -webkit-transform: scale(1.3, 1.3);
    -ms-transform: scale(1.3, 1.3);
    transform: scale(1.3, 1.3);
    -webkit-transition: 0.1s ease-in-out;
    -o-transition: 0.1s ease-in-out;
    transition: 0.1s ease-in-out;
}
</style>