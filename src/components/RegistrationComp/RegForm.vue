<template>
    <div class="reg__form">
                        <div class="reg__form__item">
                            <h4 class="reg__form__item__head">Your Name</h4>
                            <input class="input__item" type="text"  name="firstname" placeholder="First Name">
                            <input class="input__item" type="text"  name="lastname" placeholder="Last Name">
                            <div class="radio">
                                <label><input class="input" type="radio" value="male" name="gender" >Male</label>
                                <label><input class="input" type="radio" value="female" name="gender" >Female</label>
                            </div>
                        </div>
                        <div class="reg__form__item">
                            <h4 class="reg__form__item__head">Login details</h4>
                            <input class="input__item" type="email" name="email" placeholder="Email">
                            <input class="input__item" type="password" name="password" placeholder="Password">
                            <p class="gray">Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters</p>
                            <button class="input__item__pink" type="submit">JOIN NOW
                                <img class="arrow" src="../../assets/img/arrow.svg" alt="">
                            </button>
                        </div>
                    </div>
</template>

<script>
export default {
    name: "RegForm"
}
</script>

<style>
    .reg__form{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
}

.reg__form__item{
    max-width: 360px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
}

.reg__form__item:first-child{
    margin-top: 64px;
}

.reg__form__item:last-child{
    margin-top: 33px;
}

.input__item{
    width: 100%;
    height: 45px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border: 1px solid #A4A4A4;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    text-indent: 16.5px;
    margin-bottom: 21px;
}

.input__item[placeholder]{
    color: #B1B1B1;
}

.radio{
    font-size: 11px;
}

label{
    height: 100%;
    margin-right: 10px;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}

.input{
    margin: 0;
    width: 17px;
    height: 17px;
    margin-left: 0;
    margin-right: 10px;
    vertical-align: middle;
}

.input__item__pink{
    background: #F16D7F;
    color: white;
    width: 167px;
    height: 50px;
    border: none;
    margin-bottom: 96px;
}

.input__item__pink:hover{
    -webkit-transform: scale(1.1,1.1);
        -ms-transform: scale(1.1,1.1);
            transform: scale(1.1,1.1);
    -webkit-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    -webkit-box-shadow: -4px 5px 15px 5px rgba(0,0,0,0.16);
            box-shadow: -4px 5px 15px 5px rgba(0,0,0,0.16);
}

.arrow{
    margin-left: 20px;
}

.gray{
    color: #B1B1B1;
    font-weight: 300;
    font-size: 13px;
    margin-top: 0;
    margin-bottom: 39px;
    line-height: 15.6px;
}

.reg__form__item__head{
    font-size: 16px;
    font-weight: 300;
    color: #222222;
    line-height: 19.2px;
}

.reg__form__item__head:first-child{
    margin: 0 0 20.5px 0;
}

.reg__form__item__head:last-child{
    margin-top: 33px;
}
</style>