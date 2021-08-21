<template>
  <div>
    <header>
      <HeaderMain class="test-main"/>
      <base-menu></base-menu>
    </header>
    <main>
      <Promo/>
    <MenuCatalog/>
    <Catalog/>
    <base-container>
      <MainAdvantages/>
    </base-container>
    <PreFooter/>
    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
</template>

<script>
import HeaderMain from '../components/HeaderMain/HeaderMain.vue'
import Promo from '../components/BasePromo/BasePromo.vue'
import MenuCatalog from '../components/MenuCatalog/MenuCatalog.vue'
import Catalog from '../components/Catalog/Catalog.vue'
import MainAdvantages from '../components/MainAdvantages/MainAdvantages.vue'
import PreFooter from '../components/PreFooter/PreFooter.vue'
import Footer from '../components/Footer/Footer.vue'
import BaseContainer from '../components/BaseContainer/BaseContainer.vue'
import BaseMenu from '../components/BaseMenu/BaseMenu.vue'

export default {
  name: 'App',
  data(){
    return{
      // url: '//catalog.json',
      products:[],
      isVisibleMenu: false
    }
  },
  components: {
    HeaderMain,
    Promo,
    MenuCatalog,
    Catalog,
    BaseContainer,
    MainAdvantages,
    PreFooter,
    Footer,
    BaseMenu,
  },

  methods:{
     getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .then(json => this.products = json)
                .catch(error => {
                    console.log(error);
                })
        },

      openMenu(){

      }
  },

  mounted(){
    console.log(this.products)
  }
}
</script>