<template>
    <base-container>
        <section class="panel">
        <div class="panel__wrapper">
            <div class="panel__nav">
                <div class="panel__head">
                    <h1 class="pink__head">NEW ARRIVALS</h1>
                </div>
                <div class="panel__links">
                    <a href="#" class="panel__link">home</a>
                    <a href="#" class="panel__link man__pseudo">men</a>
                    <a href="#" class="panel__link new__pink">new arrivals</a>
                </div>
            </div>
        </div>
    </section>
    </base-container>
</template>

<script>
import BaseContainer from '../BaseContainer/BaseContainer.vue'

export default {
  components: { BaseContainer },

}
</script>

<style>
    .panel {
        margin-top: 75px;
        background: #F8F3F4;
        width: 100%;
        height: 148px;
}

.panel__wrapper {
    margin-left: auto;
    margin-right: auto;
    max-width: 1140px;
    min-height: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}

.panel__nav {
    width: 100%;
    min-height: 148px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.pink__head {
    color: #F16D7F;
    font-weight: 400;
    font-size: 24px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.panel__links a {
    width: 100%;
    height: 100%;
    color: #636363;
}

.panel__link {
    font-size: 14px;
    font-weight: 300;
    line-height: 17px;
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 10px;
}

.panel__link:last-child {
    font-weight: 700;
    color: #F16D7F;
    margin-right: 0;
}

.man__pseudo {
    position: relative;
}

.man__pseudo::before {
    content: '/';
    position: absolute;
    left: -10px;
    top: 0;
}

.man__pseudo::after {
    content: '/';
    position: absolute;
    right: -10px;
    top: 0;
}
</style>