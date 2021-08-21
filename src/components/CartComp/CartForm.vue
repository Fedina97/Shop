<template>
    <form class="form__reg" action="#">
                        <h4>SHIPPING ADRESS</h4>
                        <input class="form__style grey" placeholder="Banladesh" type="text" name="City" required>
                        <input class="form__style" type="text" placeholder="State" name="State" required>
                        <input class="form__style" type="text" placeholder="Postcode/ZIP" name="Postcode" required>
                        <button class="button__form" type="submit">GET A QUOTE</button>
                    </form>
</template>


<script>
export default {
    name:"FormCart"
}
</script>

<style>
    .form__reg{
    margin-top: 96px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    width: 360px;
}

form h4{
    margin-top: 0;
    color: #222222;
}

.grey{
    color: #B1B1B1;
}

.form__style{
    padding-top: 15px;
    padding-bottom: 16px;
    text-indent: 17px;
    margin-bottom: 21px;
}

.button__form{
    -webkit-box-sizing:content-box;
            box-sizing:content-box;
    width: 100px;
    background: none;
    color: #4A4A4A;
    padding: 10px 14px 12px 14px;
    border: 1px solid #A4A4A4;
    margin-bottom: 57.5px;
}

input,
button{
    outline: none;
}
</style>