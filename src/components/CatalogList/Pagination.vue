<template>
    <div class="button__catalog">
                    <div class="slide__button">
                        <a class="slide__link" href="#">
                            <i class="fas fa-chevron-left"></i>
                        </a>
                        <a href="#" class="slide__link pdg pink__link">1</a>
                        <a href="#" class="slide__link pdg">2</a>
                        <a href="#" class="slide__link pdg">3</a>
                        <a href="#" class="slide__link pdg">4</a>
                        <a href="#" class="slide__link pdg">5</a>
                        <a href="#" class="slide__link">6</a>
                        <span class="dots">.....</span>
                        <a href="#" class="slide__link">20</a>
                        <a href="#" class="slide__link">
                            <i class="fas fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
</template>

<script>
export default {
    name: "Pagination"
}
</script>

<style>
.button__catalog {
    margin-top: 48px;
    margin-bottom: 96px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
}

.slide__button {
    margin: auto;
    border: 1px solid #EBEBEB;
    border-radius: 2px;
    height: 44px;
    width: 284px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.slide__button a {
    text-decoration: none;
    color: #EBEBEB;
    font-size: 16px;
}

a.pink__link {
    color: #F16D7F;
}

.dots {
    color: #EBEBEB;
}

.pdg {
    margin-right: 20px;
}

.fa-chevron-left {
    margin-left: 16px;
    margin-right: 18px;
}

.fa-chevron-right {
    margin-right: 16px;
    margin-left: 17px;
}
</style>