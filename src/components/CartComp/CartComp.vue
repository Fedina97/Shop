<template>
    <section class="cart__page">
        <div class="cart__page__wrapper">
            <div class="cart__page__items">
                <CartItems/>
            </div>
            <div class="cart__page__items">
                <CartForm/>
                <cart-total></cart-total>
            </div>
        </div>
    </section>
</template>

<script>
import CartItems from '@/components/CartComp/CartItems.vue'
import CartForm from '@/components/CartComp/CartForm.vue'
import CartTotal from '@/components/CartComp/CartTotal.vue'

export default {
  components: { 
    CartItems,
    CartForm,
    CartTotal 
    },
    
}
</script>

<style>
.cart__page__wrapper{
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
    min-height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
}

.cart__page__items{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
}
</style>