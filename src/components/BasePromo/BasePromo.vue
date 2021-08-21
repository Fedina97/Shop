<template>
    <base-container>
        <div class="section-promo">
            <div class="section-promo__photo">
                <img class="promo__img" src="@/assets/img/Layer_57-removebg-preview.png" alt="photo">
            </div>
            <div class="section-text">
                <div class="section-text__content">
                    <h1 class="section-text__heading">The brand</h1>
                    <p class="section-text__paragraph">Of luxerious <span class="pink">fashion</span></p>
                </div>
            </div>
        </div>
    </base-container>
</template>

<style scoped>
    .section-promo {
    background-color: #F1E4E6;
    max-width: 100%;
    max-height: 764px;
    margin-top: 75px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: calc(50% - 800px);
}

    .section-promo__photo {
    max-width: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
}

.section-promo__photo img {
    max-width: 100%;
    max-height: 100%;
}

.promo__img {
    max-width: 800px;
    max-height: 764px;
}

.section-text__content {
    border-left: 12px solid #F16D7F;
    padding-left: 16px;
}

.section-text__heading {
    font-weight: 900;
    margin-bottom: 0;
    line-height: 57.6px;
    font-size: 48px;
    text-transform: uppercase;
}

.section-text__paragraph {
    font-size: 32px;
    margin-top: 0;
    line-height: 38.4px;
    font-weight: 700;
    text-transform: uppercase;
}

.pink {
    color: #F16D7F;
    font-weight: 700;
}

.section-text {
    max-width: 100%;
}
</style>