<template>
    <div class="cart__page__items">
                    <div class="cart__page__item">
                        <img src="../../assets/img/third_card.png" alt="">
                        <div class="cart__page__item__info">
                            <div class="heading__cart">
                                <h3 class="mango">MANGO  PEOPLE  T-SHIRT</h3>
                                <div class="icon">
                                    <img class="cross__cart" @click="deleteProduct" src="../../assets/img/krest.svg" alt="">
                                </div>
                            </div>
                            <div class="info">
                                <div class="price__card">
                                    <p>Price:</p> 
                                    <p class="pink__pr">&#160; &#36;300</p>
                                </div>
                                <div class="price__card">
                                    <p>Color:</p> 
                                    <p class="">Red</p>
                                </div>
                                <div class="price__card">
                                    <p>Size:</p> 
                                    <p>XL</p>
                                </div>
                                <label class="price__card">Quantity:<input class="quant" value="2" type="number"></label>
                            </div>
                        </div>

                    </div>
                    <div class="cart__page__item">
                        <img src="../../assets/img/man2.png" alt="">
                        <div class="cart__page__item__info">
                            <div class="heading__cart">
                                <h3 class="mango">MANGO  PEOPLE  T-SHIRT</h3>
                                <div class="icon">
                                    <img class="cross__cart" @click="deleteProduct" src="../../assets/img/krest.svg" alt="">
                                </div>
                            </div>
                            <div class="info">
                                <div class="price__card">
                                    <p>Price:</p> 
                                    <p class="pink__pr">&#160; &#36;300</p>
                                </div>
                                <div class="price__card">
                                    <p>Color:</p> 
                                    <p class="">Red</p>
                                </div>
                                <div class="price__card">
                                    <p>Size:</p> 
                                    <p>XL</p>
                                </div>
                                <label class="price__card">Quantity:<input class="quant" value="2" type="number"></label>
                            </div>
                        </div>
                    </div>
                    <div class="cart__page__button">
                        <button class="cart__button">CLEAR SHOPPING CART</button>
                        <button class="cart__button"><router-link to="/catalog">CONTINUE SHOPPING</router-link></button>
                    </div>
                </div>
</template>

<script>
export default {
    name:"CartItems",
    methods:{
        deleteProduct(id){
            this.todos = this.todos.filter(t => t.id !== id)
        }
    }
}
</script>

<style>
    .cart__page__items{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
}

.cart__page__item img{
    object-fit: cover;
    max-height: 100%;
    max-width: 40%;
}

.cart__page__item{
    max-width: 600px;
    max-height: 306px;
    -webkit-box-shadow: 11px 6px 48px 10px rgba(0,0,0,0.12);
            box-shadow: 11px 6px 48px 10px rgba(0,0,0,0.12);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 73px;
    position: relative;
}

.cart__page__item:first-child{
    margin-top: 96px;
    margin-bottom: 40px;
}

.cart__page__item__info{
    margin-left: 31px;
    margin-top: 22px;
    max-width: 60%;
    max-height: 100%;
}

.heading__cart img{
    max-width: 18px;
    max-height: 18px;
}

.mango{
    margin: 0;
    line-height: 29px;
    font-size: 24px;
    font-weight: 400;
    width: 70%;
    font-style: normal;
}

.icon{
    position: absolute;
    right: 0;
    top: 20px;
    width: 18px;
    margin-top: 6px;
    margin-right: 22px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
}

.cart__page__button{
    max-width: 652px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
}

.cart__button{
    margin-bottom: 64px;
    padding: 17px 39px;
    color: #000000;
    background: none;
    border: 1px solid #A4A4A4;
}

.price__card{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 6px;
}

label.price__card{
    margin: 0;
    margin-bottom: 62px;
    font-size: 22px;
    color: #222222;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}

label.price__card input{
    margin-left: 24px;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    width: 43px;
    height: 24px;
}

.pink__pr{
    color: #F16D7F;
}

.price__card p{
    margin: 0;
    font-size: 22px;
}

.quant{
    text-align: center;
    width: 43px;
    border: 1px solid #EAEAEA;
}
</style>