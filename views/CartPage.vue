<template>
    <div>
        <HeaderMain/>
        <base-container>
            <BaseCart/>
        </base-container>
        <CartComp/>
        <PreFooter/>
        <Footer/>
    </div>
</template>

<script>
import HeaderMain from '../components/HeaderMain/HeaderMain.vue'
import PreFooter from '../components/PreFooter/PreFooter.vue'
import Footer from '../components/Footer/Footer.vue'
import BaseCart from '../components/BaseCart/BaseCart.vue'
import BaseContainer from '../components/BaseContainer/BaseContainer.vue'
import CartComp from '../components/CartComp/CartComp.vue'

export default {
    components:{
        HeaderMain,
        PreFooter,
        Footer,
        BaseContainer,
        BaseCart,
        CartComp
    }
}
</script>