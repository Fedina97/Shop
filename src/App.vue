<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  methods:{
    getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        }
}
}
</script>


<style>
* {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-family: 'Lato'
}

body {
    margin: 0 auto;
    padding: 0;
    height: 100vh;
}

button {
    cursor: pointer;
}

a{
  text-decoration: none;
}

.fetured {
    min-height: 100%;
}


.fetured__wrapper {
    margin-left: auto;
    margin-right: auto;
    max-width: 1140px;
    min-height: 100%;
}

.fetured__head {
    text-align: center;
}

.fetured__heading {
    font-size: 30px;
    line-height: 36px;
    margin: 0;
}

.fetured__paragraph {
    color: #9F9F9F;
    font-size: 14px;
    line-height: 17px;
    margin-top: 6px;
    margin-bottom: 48px;
}

.fetured__items {
    max-width: 360px;
    max-height: 100%;
}

.fetured__items img {
    width: 100%;
    height: auto;
}

figure {
    margin: 0;
    background: #F8F8F8;
}

img.fetured_image {
    /* width: 100%; */
    position: relative;
}

.fetured__list__items {
    max-width: 100%;
    min-height: 100%;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: minmax(320px, 380px) 30px minmax(320px, 380px) 30px minmax(320px, 380px);
    grid-template-columns: repeat(3, minmax(320px, 380px));
    gap: 30px;

}

.text__link {
    text-decoration: none;
    color: #5D5D5D;
}

.fetured__text {
    margin: 0 18px;
    padding-bottom: 10px;
}

p.red {
    color: #F16D7F;
    font-size: 16px;
    line-height: 19.2px;
}

.fetured__button {
    margin-top: 48.5px;
    margin-bottom: 96px;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.fetured__button_link {
    cursor: pointer;
    text-align: center;
    padding: 14.5px 38.5px;
    font-size: 16px;
    line-height: 19.2px;
    color: #F26376;
    text-transform: capitalize;
    border: 1px solid #F26376;

}

a.fetured__button_link {
    text-decoration: none;
}

.fetured__button_link:hover {
    background: #F16D7F;
    color: white;
    -webkit-transform: scale(1.05, 1.05);
    -ms-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
    -webkit-transition: 0.4s ease-in-out;
    -o-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;
    -webkit-box-shadow: -4px 5px 15px 5px rgba(0, 0, 0, 0.16);
    box-shadow: -4px 5px 15px 5px rgba(0, 0, 0, 0.16);
}

.card {
    position: relative;
}

.card__hover {
    width: 100%;
    height: 420px;
    position: absolute;
    z-index: 1;
    opacity: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background: rgba(58, 56, 56, 0.56);
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.card__hover:hover {
    opacity: 1;
    -webkit-transition: opacity 0.3s ease-in-out;
    -o-transition: opacity 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out;
}

.card__button img {
    width: 26px;
    height: 24px;
}

.card__button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    color: white;
    background: rgba(58, 56, 56, 0.56);
    border: 1px solid white;
    width: 138px;
    height: 43px;
    text-transform: capitalize;
}

.card__button:hover {
    background: #f7566c;
    font-weight: 700;
    border: none;
    /* -webkit-transform: scale(1.2, 1.2);
    -ms-transform: scale(1.2, 1.2);
    transform: scale(1.2, 1.2); */
    -webkit-transition: 0.3s ease-in;
    -o-transition: 0.3s ease-in;
    transition: 0.3s ease-in;
    -webkit-box-shadow: -8px 5px 10px 1px rgba(241, 239, 239, 0.16);
    box-shadow: -8px 5px 10px 1px rgba(241, 239, 239, 0.16);
}


.card__text {
    text-decoration: none;
}

.fetured__button {
    padding: 15px 39px;
}


</style>
