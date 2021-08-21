<template>
    <div class="catalog">
            <div class="catalog__wrapper">
                <div class="catalog-wrap__feat">
                    <div class="catalog-items">
                        <router-link to="/catalog" class="catalog-item girl">
                            <div class="item-text">
                                <p class="paragraph">30% off</p>
                                <h3 class="heading">for women</h3>
                            </div>
                        </router-link>
                        <router-link to="/catalog" class="catalog-item men">
                            <div class="item-text">
                                <p class="paragraph">hot deal</p>
                                <h3 class="heading">for men</h3>
                            </div>
                        </router-link>
                        <router-link to="/catalog" class="catalog-item kids">
                            <div class="item-text">
                                <p class="paragraph">new arrivals</p>
                                <h3 class="heading">for kids</h3>
                            </div>
                        </router-link>
                    </div>
                    <router-link to="/catalog" class="accesories">
                        <div class="item-opacity__acc">
                            <div class="item-text__acc">
                                <p class="paragraph">luxurous & trendy</p>
                                <h3 class="heading">accesories</h3>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
</template>

<style>
.catalog {
    margin-top: 65px;
    margin-bottom: 96px;
}

.catalog__wrapper {
    margin-left: auto;
    margin-right: auto;
    max-width: 1140px;
    min-height: 470px;
}

.catalog-items {
    max-width: 100%;
    min-height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(3, minmax(230px, 360px));
}

.catalog-item {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    height: 260px;
    text-transform: uppercase;
}

.item-text {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: auto;
    text-align: center;
    /* width: 100%;
    height: 100%; */
}

.heading {
    color: #F16D7F;
    margin-top: 0;
    font-weight: bold;
    font-size: 24px;

}

.paragraph {
    margin-bottom: 0;
    color: white;
    line-height: 19.2px;
    font-size: 16px;
}

.girl {
    max-height: 260px;
    background: url('../../assets/img/girl.png') center center/cover no-repeat;
}

.men {
    max-height: 260px;
    background: url('../../assets/img/men.png') center center/cover no-repeat;
}

.kids {
    max-height: 260px;
    background: url('../../assets/img/kids.png') center center/cover no-repeat;
}

.item-opacity__acc {
    background: url('../../assets/img/accesories.png') center center/cover no-repeat;
    text-align: center;
    width: 100%;
}

.item-text__acc {
    margin-top: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-transform: uppercase;
    height: 180px;
}

.accesories {
    width: 100%;
    max-height: 180px;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}

.catalog-item:hover{
    transform: scale(1.04, 1.04);
    transition: transform ease-in-out 0.3s; 
}

a.accesories:hover{
    transform: scale(1.04, 1.04);
    transition: transform ease-in-out 0.3s; 
}
</style>