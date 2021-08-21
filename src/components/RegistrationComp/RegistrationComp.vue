<template>
    <section class="registration">
            <div class="registration__wrapper">
                <div class="registration__content">
                    <RegForm/>
                    <RegInfo/>
                </div>
            </div>
    </section>
</template>

<script>
import RegForm from '@/components/RegistrationComp/RegForm.vue'
import RegInfo from '@/components/RegistrationComp/RegInfo.vue'
export default {
  components: { RegForm, RegInfo },
    name: "RegComp"
}
</script>

<style>
.registration__wrapper{
    margin-left: auto;
    margin-right: auto;
    max-width: 1140px;
}

.registration__content{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}

</style>