<template>
     <div class="our__offers">
                        <h3 class="our__offers__head">LOYALTY HAS ITS PERKS</h3>
                        <p class="list__item">
                            Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join:
                        </p>
                        <p class="li_offer">15% off welcome offer</p>
                        <p class="li_offer">Free shipping, returns and exchanges on all orders</p>
                        <p class="li_offer"> $10 off a purchase on your birthday</p>
                        <p class="li_offer">$10 off a purchase on your birthday</p>
                        <p class="li_offer">Exclusive offers & rewards</p>
                    </div>
</template>

<script>
export default {
    name: "RegInfo"
}
</script>

<style>
    .our__offers{
    font-size: 24px;
    margin-top: 64px;
    font-weight: 300;
}

.our__offers p{
    width: 652px;
}

.our__offers__head{
    margin: 0;
    font-weight: 300;
}

.li_offer {
    margin-bottom: 16px;
    position: relative;
    left: 40px;
}

.li_offer::before{
    content: '';
    position: absolute;
    background: url('../../assets/img/ok.svg') center center/ contain no-repeat;
    width: 20px;
    height: 16px;
    left: -40px;
    top: 0px;
    -webkit-animation: 0.8s infinite size;
            animation: 0.8s infinite size;
}

@-webkit-keyframes size{
    0%{
        width: 20px;
        height: 16px;
    }
    25%{
        width: 23px;
        height: 19px;
    }
    50%{
        width: 25px;
        height: 21px;
    }
    75%{
        width: 23px;
        height: 19px; 
    }
    100%{
        width: 20px;
        height: 16px; 
    }
}

@keyframes size{
    0%{
        width: 20px;
        height: 16px;
    }
    25%{
        width: 23px;
        height: 19px;
    }
    50%{
        width: 25px;
        height: 21px;
    }
    75%{
        width: 23px;
        height: 19px; 
    }
    100%{
        width: 20px;
        height: 16px; 
    }
}
</style>