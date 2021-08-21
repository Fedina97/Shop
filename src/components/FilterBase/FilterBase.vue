<template>
    <div class="filter">
            <div class="filter__wrapper">
                <div class="filter__block">
                    <div class="filter__column">
                        <details class="filter__main">
                            <summary class="filter__main__head">
                                <span class="filt"></span>
                                <span class="color">FILTER</span>
                            </summary>
                            <details class="filter__main__category">
                                <summary class="filter__main__category__summary">CATEGORY</summary>
                                <a href="#" class="li__filter">Accessories</a>
                                <a href="#" class="li__filter">Bags</a>
                                <a href="#" class="li__filter">Denim</a>
                                <a href="#" class="li__filter">Hoodies & Sweatshirts</a>
                                <a href="#" class="li__filter">Jackets & Coats</a>
                                <a href="#" class="li__filter">Polos</a>
                                <a href="#" class="li__filter">Shirts</a>
                                <a href="#" class="li__filter">Shoes</a>
                                <a href="#" class="li__filter">Sweaters & Knits</a>
                                <a href="#" class="li__filter">T-Shirts</a>
                                <a href="#" class="li__filter">Tanks</a>
                            </details>
                            <details class="filter__main__brand">
                                <summary class="filter__main__brand__summary">BRAND</summary>
                                <a href="#" class="li__filter">Accessories</a>
                                <a href="#" class="li__filter">Bags</a>
                                <a href="#" class="li__filter">Denim</a>
                                <a href="#" class="li__filter">Hoodies & Sweatshirts</a>
                                <a href="#" class="li__filter">Jackets & Coats</a>
                                <a href="#" class="li__filter">Polos</a>
                                <a href="#" class="li__filter">Shirts</a>
                                <a href="#" class="li__filter">Shoes</a>
                                <a href="#" class="li__filter">Sweaters & Knits</a>
                                <a href="#" class="li__filter">T-Shirts</a>
                                <a href="#" class="li__filter">Tanks</a>
                            </details>
                            <details class="filter__main__designer">
                                <summary class="filter__main__designer__summary">DESIGNER</summary>
                                <a href="#" class="li__filter">Accessories</a>
                                <a href="#" class="li__filter">Bags</a>
                                <a href="#" class="li__filter">Denim</a>
                                <a href="#" class="li__filter">Hoodies & Sweatshirts</a>
                                <a href="#" class="li__filter">Jackets & Coats</a>
                                <a href="#" class="li__filter">Polos</a>
                                <a href="#" class="li__filter">Shirts</a>
                                <a href="#" class="li__filter">Shoes</a>
                                <a href="#" class="li__filter">Sweaters & Knits</a>
                                <a href="#" class="li__filter">T-Shirts</a>
                                <a href="#" class="li__filter">Tanks</a>
                            </details>
                        </details>
                    </div>
                    <div class="filter__column__second">
                        <details class="filter__trending">
                            <summary>
                                <span class="trend">TRENDING NOW</span>
                                <i class="fas fa-angle-down"></i>
                            </summary>
                        </details>
                        <details class="filter__size">
                            <summary>
                                <span class="trend">SIZE</span>
                                <i class="fas fa-angle-down trans"></i>
                            </summary>
                            <div class="choices">
                                <label><input type="checkbox" name="XS" value="XS" class="check">XS</label>
                                <label><input type="checkbox" name="S" value="S" class="check">S</label>
                                <label><input type="checkbox" name="M" value="M" class="check">M</label>
                                <label><input type="checkbox" name="L" value="L" class="check">L</label>
                            </div>
                        </details>
                        <details class="filter__price">
                            <summary>
                                <span class="trend">PRICE</span>
                                <i class="fas fa-angle-down"></i>
                            </summary>
                        </details>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "FilterBase"
    }
</script>

<style>
    .filter__wrapper {
    margin-left: auto;
    margin-right: auto;
    max-width: 1140px;
    height: 100%;
    margin-top: 26px;
    margin-bottom: 40px;
}

.filter__block {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
}

.filt {
    background: url('../../assets/img/filter_menu.svg') center center/contain no-repeat;
    width: 38px;
    height: 25px;
    display: none;
    margin-left: 0;
}

details[open]>summary .filt {
    -webkit-transform: rotate(180deg) scale(-1, 1);
    -ms-transform: rotate(180deg) scale(-1, 1);
    transform: rotate(180deg) scale(-1, 1);
}

.filter__column {
    width: calc(100% / 3);
    margin-right: 10px;
    margin-top: 30px;
    margin-bottom: 10px;
    height: 30px;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 2;
}


.filter__main {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    overflow: hidden;
    -webkit-transition: max-height 0.3s ease-in;
    -o-transition: max-height 0.3s ease-in;
    transition: max-height 0.3s ease-in;
}

.filter__main__head {
    color: #000000;
    font-weight: 600;
    font-size: 14px;
    width: 90px;
}

summary {
    display: block;
    outline: none;
}

summary::-webkit-details-marker {
    display: none;
}

summary::-moz-details-marker {
    display: none;
}

summary::-ms-details-marker {
    display: none;
}

summary::-o-details-marker {
    display: none;
}

details[open].filter__main {
    background: #FFFFFF;
    -webkit-box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
    width: 360px;
    min-height: 150px;
    top: -13px;
    left: 0;
    padding-top: 13px;
    padding-left: 16px;
}

details[open]>summary {
    color: #ef5b70;
}

.color {
    position: relative;
}

.color::after {
    content: '';
    position: absolute;
    background: url('../../assets/img/filter_menu.svg') center center/ contain no-repeat;
    width: 15px;
    height: 10px;
    left: 55px;
    top: 2.5px;
}


details[open]>summary .color::after {
    background: url('../../assets/img/filter_menu2.svg') center center/ contain no-repeat;
    top: 3px;
    -webkit-transform: rotate(180deg) scale(-1, 1);
    -ms-transform: rotate(180deg) scale(-1, 1);
    transform: rotate(180deg) scale(-1, 1);
}

/* details[open] object{
    fill: ;
} */

details[open]>summary .trend {
    color: #6F6E6E;
}

.trend {
    color: #6F6E6E;
}

.filter__main__category__summary {
    margin: 16px 15.5px 18px 0;
    border-left: 5px solid #EF5B70;
    border-bottom: 1px solid #EBEBEB;
    padding: 6px 0 11.5px 11px;
    color: #6F6E6E;
    font-weight: 400;
}

.filter__main__brand__summary {
    border-left: 5px solid #EF5B70;
    border-bottom: 1px solid #EBEBEB;
    padding: 6px 0 11.5px 11px;
    margin: 16px 15.5px 18px 0;
    color: #6F6E6E;
    font-weight: 400;
}

.filter__main__designer__summary {
    border-left: 5px solid #EF5B70;
    border-bottom: 1px solid #EBEBEB;
    padding: 6px 0 11.5px 11px;
    margin: 16px 15.5px 18px 0;
    color: #6F6E6E;
}

a.li__filter {
    display: block;
    text-decoration: none;
    color: #6F6E6E;
    margin-left: 16px;
    margin-bottom: 11px;
}

.li__filter:last-child {
    margin-bottom: 24px;
}

.filter__column__second {
    width: calc(100% / 3);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    margin-bottom: 23px;
    position: relative;
}

.filter__size .choices {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 79px;
    height: 110px;
    background: white;
    position: absolute;
    z-index: 2;
    top: 20px;
    -webkit-box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
    left: 158px;
}

label:first-child {
    margin-top: 7px;
}

#check {
    margin: 0;
    margin-right: 10px;
}

label:last-child {
    margin-top: 3px;
}

label {
    margin-left: 8px;
    margin-bottom: 6px;
    color: #6F6E6E;
}

.filter__trending {
    margin-right: 37px;
}

.filter__size {
    margin-right: 37px;
}

.filter__price {
    margin-right: 0;
}

.fa-angle-down {
    margin-left: 10px;
    font-weight: 300;
    font-size: 15px;
    color: #6F6E6E;
}

details[open]>summary .trans {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
}

figure {
    margin: 0;
}
</style>