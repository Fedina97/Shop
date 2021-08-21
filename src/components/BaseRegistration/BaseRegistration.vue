<template>
    <section class="main-header">
        <base-container>
            <section class="panel">
            <div class="panel__wrapper">
                <h2 class="pink">REGISTRATION</h2>
            </div>
        </section>
        </base-container>
    </section>
</template>

<script>
import BaseContainer from '@/components/BaseContainer/BaseContainer.vue'
export default {
    name: "BaseRegistration",
    components: {
        BaseContainer
    }
}
</script>

<style>
     .panel {
    margin-top: 75px;
    background: #F8F3F4;
    width: 100%;
    height: 148px;
}

.panel__wrapper {
    margin-left: auto;
    margin-right: auto;
    max-width: 1140px;
    min-height: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}

.pink{
    font-weight: 400;
    font-size: 24px;
    color: #F16D7F;
}
</style>