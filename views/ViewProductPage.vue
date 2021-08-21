<template>
    <div>
        <HeaderMain/>
        <base-container>
            <ViewProduct/>
        </base-container>
        <PreFooter/>
        <Footer/>
    </div>
</template>

<script>
import HeaderMain from '../components/HeaderMain/HeaderMain.vue'
import PreFooter from '../components/PreFooter/PreFooter.vue'
import Footer from '../components/Footer/Footer.vue'
import BaseContainer from '../components/BaseContainer/BaseContainer.vue'
import ViewProduct from '../components/ViewProduct/ViewProduct.vue'

export default {
    components:{
        HeaderMain,
        PreFooter,
        Footer,
        BaseContainer,
        ViewProduct
    }
}
</script>