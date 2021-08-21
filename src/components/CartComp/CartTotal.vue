<template>
     <div class="total">
                        <div class="total__price">
                            <div class="total__first">
                                <div class="first__price">
                                    <p>SUB TOTAL</p>
                                    <p>&#36;900</p>
                                </div>
                            </div>
                            <div class="total__second">
                                <div class="second__price">
                                    <p class="grand">GRAND TOTAL</p>
                                    <p class="pink__second__price">&#36;900</p>
                                </div>
                            </div>
                        </div>
                        <div class="total__button">
                            <button class="button__total">PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
</template>

<script>
export default {
    name:"CartTotal"
}
</script>

<style>
    .total{
    width: 360px;
    height: 214px;
    background: #F5F3F3;
}

.total__first{
    margin-right: 34px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
}

.first__price{
    margin-top: 39px;
    width: 108px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    text-align: end;
}

.first__price p{
    font-size: 11px;
    line-height: 13.2px;
}

.total__second{
    margin-right: 37px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
}

.second__price{
    font-size: 16px;
    line-height: 19px;
    font-weight: 300;
    width: 170px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 0;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
}

.grand{
    margin: 0;
}

.pink__second__price{
    color: #F16D7F;
    font-weight: 700;
    margin: 0;
    margin-bottom: 39px;
}


.button__total{
    color: white;
    border: none;
    background: #F16D7F;
    font-weight: 400;
    line-height: 19.2px;
    width: 273px;
    margin-bottom: 43px;
    height: 50px;
    padding: 0;
}

.total__button{
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}

.total__button::after{
    content: '';
    position: absolute;
    background: #E2E2E2;
    width: 275px;
    height: 1px;
    top: -17px;
}
</style>