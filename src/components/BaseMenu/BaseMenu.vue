<template>
    <div class="menu-items">
            <h3 class="menu__heading">Menu</h3>
            <router-link class="menu-link" to="/registration">Sign Up</router-link>
            <router-link class="menu-link" to="/cart">Go Cart</router-link>
            <h4 class="menu-list__heading">Man</h4>
            <ul class="menu-list">
                <li class="menu-list__item">
                    <a href="#">Accesories</a>
                </li>
                <li class="menu-list__item">
                    <a href="#">Bags</a>
                </li>
                <li class="menu-list__item">
                    <a href="#">Denim</a>
                </li>
                <li class="menu-list__item">
                    <a href="#">T-Shirts</a>
                </li>
            </ul>
            <h4 class="menu-list__heading">Woman</h4>
            <ul class="menu-list">
                <li class="menu-list__item">
                    <a href="#">Accesories</a>
                </li>
                <li class="menu-list__item">
                    <a href="#">Jackets & Coats</a>
                </li>
                <li class="menu-list__item">
                    <a href="#">Polos</a>
                </li>
                <li class="menu-list__item">
                    <a href="#">T-Shirts</a>
                </li>
                <li class="menu-list__item">
                    <a href="#">Shirts</a>
                </li>
            </ul>
            <h4 class="menu-list__heading">Kids</h4>
            <ul class="menu-list">
                <li class="menu-list__item">
                    <a href="#">Accesories</a>
                </li>
                <li class="menu-list__item">
                    <a href="#">Jackets & Coats</a>
                </li>
                <li class="menu-list__item">
                    <a href="#">Polos</a>
                </li>
                <li class="menu-list__item">
                    <a href="#">T-Shirts</a>
                </li>
                <li class="menu-list__item">
                    <a href="#">Shirts</a>
                </li>
                <li class="menu-list__item">
                    <a href="#">Bags</a>
                </li>
            </ul>
        </div>
</template>

<script>
export default {
    name: "BaseMenu",
    data(){
        return{
           isOpened: false
        }
    }
}
</script>

<style>
.menu-close__btn{
    border: none;
    background:none;
    display: flex;
    align-items: center;
}

.menu-close__btn:hover{
    transform: scale(1.15, 1.15);
    background: lightgray;
    height: 22px;   
}

.menu-close__btn:active{
    background: lightpink;
}

.menu-items {
    display: none;
    padding-left: 33px;
    padding-top: 11px;
    width: 232px;
    height: calc(100vh - 25px);
    overflow: auto;
    background: white;
    z-index: 3;
    position: absolute;
    opacity: 1;
    top: 75px;
    right: 0;
    -webkit-box-shadow: 0px 4px 7px -4px #000000;
    box-shadow: 0px 4px 7px -4px #000000;
}

.hide {
    overflow: hidden;
    display: block;
    padding-left: 33px;
    padding-top: 11px;
    width: 232px;
    height: calc(100vh - 25px);
    overflow: auto;
    background: white;
    z-index: 3;
    position: absolute;
    opacity: 1;
    top: 75px;
    right: 0;
    -webkit-box-shadow: 0px 4px 7px -4px #000000;
    box-shadow: 0px 4px 7px -4px #000000;
}

.menu__heading {
    margin: 0;
    margin-bottom: 10px;
    margin-top: 20px;
    display: block;
    font-size: 14px;
    line-height: 17px;
    font-weight: 700;
    text-transform: uppercase;
}


.menu-list__heading {
    font-size: 13px;
    text-transform: uppercase;
    line-height: 17px;
    font-weight: 400;
    color: #F16D7F;
    margin-bottom: 0;
    margin-top: 10px;
    margin-bottom: 6.5px;
}

.menu-list__item {
    margin-bottom: 11px;
}

a.menu-link {
    text-decoration: none;
    color: #222222;
    margin-right: 10px;
}

a.menu-link:hover {
    color: #F26376;
}


.menu-list a {
    text-decoration: none;
    color: black;
}

li:hover{
    transform: scale(1.1, 1.1);
}

.menu-list__item a:hover {
    color: #F26378;
}

.menu-list {
    padding-left: 0;
    margin-left: 20px;
}

li {
    list-style-type: none;
}

</style>