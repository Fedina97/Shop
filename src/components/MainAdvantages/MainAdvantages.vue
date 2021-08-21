<template>
    <section class="main-garantees">
        <base-container>
        <div class="garantees">
            <div class="garantees__wrapper">
                <div class="garantees__principes">
                    <img src="@/assets/img/car.svg" alt="">
                    <h3>Free Delivery</h3>
                    <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
                        models.</p>
                </div>
                <div class="garantees__principes">
                    <img src="@/assets/img/sale.svg" alt="">
                    <h3>Sales & discounts</h3>
                    <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
                        models.</p>
                </div>
                <div class="garantees__principes">
                    <img src="@/assets/img/diadema.svg" alt="">
                    <h3>Quality assurance</h3>
                    <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
                        models.</p>
                </div>
            </div>
        </div>
        </base-container>
    </section>
</template>

<script>
import BaseContainer from '@/components/BaseContainer/BaseContainer.vue'
export default {
    name: "MainAdvantages",
    components: {
        BaseContainer
    }
}
</script>

<style>
 .garantees {
     background: #222224;
     height: 100%;
     padding: 93px 0;
 }

 .garantees__wrapper {
     height: 100%;
     max-width: 1140px;
     margin: auto;
     display: grid;
     grid-template-columns: repeat(3, minmax(320px, 400px));
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
     -webkit-box-pack: center;
     -ms-flex-pack: center;
     justify-content: center;
 }

 .garantees__principes {
     min-width: 320px;
     color: white;
     text-align: center;
 }

 .garantees__principes h3 {
     font-size: 20px;
 }

 .garantees__principes p {
     max-width: 350px;
     min-height: 34px;
     font-size: 14px;
 }
</style>
