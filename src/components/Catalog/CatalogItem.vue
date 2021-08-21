<template>
<div class="fetured-list__items">
    <div class="fetured-items" v-for="product in products"
                    :key="product.id">
                        <div class="fetured-card">
                            <div class="card">
                                <div class="card__hover">
                                    <button class="card__button">Add to cart
                                        <img src="@/assets/img/Vector.svg" alt="">
                                    </button>
                                </div>
                            </div>
                        </div>
                        <figure>
                            <img class="fetured-image" :src="product.img" alt="">
                            <figcaption class="fetured-text">
                                <router-link to="/view" class="text-link">
                                    <h4>{{ product.name }}</h4>
                                    <p>{{ product.description }}</p>
                                    <p class="red">$ {{product.price}}</p>
                                </router-link>
                            </figcaption>
                        </figure>
                    </div>
</div>
</template>

<script>
export default {
    name: "CatalogItem",
    data(){
        return{
            products:[
                {
        "id": 1,
        "img": "../assets/img/first_card.png",
        "name": "Windbreaker",
        "description": "Lorem ipsum dolor sit adipisicing elit. Animi cupiditate fuga, nulla expedita nihil eligendi.",
        "price": 100
    },
    {
        "id": 2,
        "img": "/img/second_card.png",
        "name": "Blazer",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit fuga, nulla expedita nihil eligendi.",
        "price": 200
    },
    {
        "id": 3,
        "img": "/img/third_card.png",
        "name": "Hoody",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cupiditate fuga, nulla expedita nihil eligendi.",
        "price": 300
    },
    {
        "id": 4,
        "img": "/img/fourth_card.png",
        "name": "T-Shirt",
        "description": "Lorem ipsum amet consectetur adipisicing elit. Animi cupiditate fuga, nulla expedita nihil eligendi.",
        "price": 150
    },
    {
        "id": 5,
        "img": "/img/fifth_card.png",
        "name": "Jacket",
        "description": "Lorem ipsum dolor sit amet consectetur elit. Animi cupiditate fuga, nulla expedita nihil eligendi.",
        "price": 180
    },
    {
        "id": 6,
        "img": "/img/sixth_card.png",
        "name": "Shirt",
        "description": "Lorem ipsum dolor consectetur adipisicing elit. Animi cupiditate fuga, nulla eligendi.",
        "price": 80
    }

            ]
        }
    },
    mounted(){
        console.log(this.products);
    }
}
</script>

<style>
.fetured-items {
    max-width: 360px;
    max-height: 100%;
}

img.fetured-image{
    width: 100%;
    height: 100%;
}

figure {
    margin: 0;
    background: #F8F8F8;
}

img.fetured_image {
    position: relative;
}

.fetured-list__items {
    max-width: 100%;
    min-height: 100%;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: minmax(320px, 380px) 30px minmax(320px, 380px) 30px minmax(320px, 380px);
    grid-template-columns: repeat(3, minmax(320px, 380px));
    gap: 30px;

}

.text-link {
    text-decoration: none;
    color: #5D5D5D;
}

.fetured-text {
    margin: 0 18px;
    padding-bottom: 10px;
}

p.red {
    color: #F16D7F;
    font-size: 16px;
    line-height: 19.2px;
}
</style>