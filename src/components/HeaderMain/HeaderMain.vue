<template>
    <div class="header">
        <div class="header__wrapper">
            <div class="header__icons">
                <router-link to="/" class="header__icon">
                    <img class="logo" src="@/assets/img/logo.svg" alt="">
                </router-link>
                <a href="#" class="header__icon">
                    <img class="search" src="@/assets/img/search.svg" alt="">
                </a>
            </div>
            <div class="header__icons">
                <menu-icon
                @click.native="isOpened=!isOpened">
                </menu-icon>
                <base-menu :class="{hide: isOpened, 'menu-items': !isOpened}"></base-menu>
                <router-link to="/registration" class="header__icon profile hide-mobile">
                    <img src="@/assets/img/profiles.svg" alt="">
                </router-link>
                <router-link to="/cart" class="header__icon basket hide-mobile">
                    <img src="@/assets/img/basket.svg" alt="">
                    <div class="pink_el">
                        <p class="cart__add">0</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import MenuIcon from '@/components/MenuIcon/MenuIcon.vue';
import BaseMenu from '@/components/BaseMenu/BaseMenu.vue';

export default {
    name: 'HeaderMain',
    data(){
        return{
            isOpened:false
        }
    },
    components:{
        MenuIcon,
        BaseMenu

    }
}
</script>

<style>
    .header{
    background-color: #222222;
    width: 100%;
    height: 75px;
    padding: 0;
    position: fixed;
    z-index: 4;
    top: 0;
}

.header__wrapper {
    height: 75px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    max-width: 1140px;
}

.header__icons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

}

.header__icon {
    margin-top: 15px;
    margin-bottom: 10px;
    display: inline-block;
}

.logo {
    margin-right: 41px;
}

img.logo {
    width: 44px;
    height: 38px;
}

img.logo:hover {
    -webkit-animation: 0.8s glob alternate;
    animation: 0.8s glob alternate;
}

@-webkit-keyframes glob {
    0% {
        -webkit-transform: none;
        transform: none;
    }

    100% {
        -webkit-transform: scale(1.2, 1.2) rotate(360deg);
        transform: scale(1.2, 1.2) rotate(360deg);
        -webkit-transition: 0.3s ease-in-out;
        -o-transition: 0.3s ease-in-out;
        transition: 0.3s ease-in-out;
    }
}

@keyframes glob {
    0% {
        -webkit-transform: none;
        transform: none;
    }

    100% {
        -webkit-transform: scale(1.2, 1.2) rotate(360deg);
        transform: scale(1.2, 1.2) rotate(360deg);
        -webkit-transition: 0.3s ease-in-out;
        -o-transition: 0.3s ease-in-out;
        transition: 0.3s ease-in-out;
    }
}

img.search {
    width: 27px;
    height: 28px;
    margin-left: 4px;
}

img.search:hover {
    -webkit-transform: scale(1.3, 1.3);
    -ms-transform: scale(1.3, 1.3);
    transform: scale(1.3, 1.3);
    -webkit-transition: 0.1s ease-in-out;
    -o-transition: 0.1s ease-in-out;
    transition: 0.1s ease-in-out;
}

.profile {
    margin-right: 34px;
}

img.profile {
    width: 29px;
    height: 29px;
}

.profile:hover {
    -webkit-transform: scale(1.3, 1.3);
    -ms-transform: scale(1.3, 1.3);
    transform: scale(1.3, 1.3);
    -webkit-transition: 0.1s ease-in-out;
    -o-transition: 0.1s ease-in-out;
    transition: 0.1s ease-in-out;
}

img.basket {
    width: 32px;
    height: 29px;
}

.basket {
    position: relative;
}

.basket:hover {
    -webkit-transform: scale(1.3, 1.3);
    -ms-transform: scale(1.3, 1.3);
    transform: scale(1.3, 1.3);
    -webkit-transition: 0.1s ease-in-out;
    -o-transition: 0.1s ease-in-out;
    transition: 0.1s ease-in-out;
}

.pink_el {
    border-radius: 50%;
    background: #F26376;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 19px;
    height: 19px;
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    top: -6px;
    left: 20px;
}

.pink_el p {
    font-size: 12px;
    color: white;
}
</style>