<template>
    <div>
        <HeaderMain/>
        <base-container>
            <BaseCatalog/>
        </base-container>
        <filter-base></filter-base>
        <CatalogList/>
        <PreFooter/>
        <Footer/>
    </div>
</template>

<script>
import HeaderMain from '../components/HeaderMain/HeaderMain.vue'
import PreFooter from '../components/PreFooter/PreFooter.vue'
import Footer from '../components/Footer/Footer.vue'
import BaseContainer from '../components/BaseContainer/BaseContainer.vue'
import BaseCatalog from '../components/BaseCatalog/BaseCatalog.vue'

import CatalogList from '../components/CatalogList/CatalogList.vue'
import FilterBase from '../components/FilterBase/FilterBase.vue'

export default {
    components:{
        HeaderMain,
        PreFooter,
        Footer,
        BaseContainer,
        BaseCatalog,
        FilterBase,
        CatalogList,
    }
}
</script>