<template>
    <div>
        <HeaderMain/>
        <base-container>
            <BaseRegistration/>
        </base-container>
        <RegistrationComp/>
        <PreFooter/>
        <Footer/>
    </div>
</template>

<script>
import HeaderMain from '../components/HeaderMain/HeaderMain.vue'
import PreFooter from '../components/PreFooter/PreFooter.vue'
import Footer from '../components/Footer/Footer.vue'
import BaseContainer from '../components/BaseContainer/BaseContainer.vue'
import BaseRegistration from '../components/BaseRegistration/BaseRegistration.vue'
import RegistrationComp from '../components/RegistrationComp/RegistrationComp.vue'

export default {
    components:{
        HeaderMain,
        PreFooter,
        Footer,
        BaseContainer,
        BaseRegistration,
        RegistrationComp,
    }
}
</script>