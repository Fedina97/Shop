<template>
        <div class="footer">
            <div class="section__wrapper">
                <div class="footer-info">
                    <div class="footer-quote">
                        <img src="@/assets/img/Intersect.png" alt="photo">
                        <p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi,<i>a pulvinar purus condimentum</i>“
                        </p>
                    </div>
                    <div class="footer-form">
                        <h3 class="bold">SUBSCRIBE</h3>
                        <h4>FOR OUR NEWLETTER AND PROMOTION</h4>
                        <form action="#">
                            <input class="input-email" type="email" name="email" placeholder="Enter Your Email"
                                required>
                            <button class="input-subscribe" type="submit" value="Subscribe">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</template>

<style>
    .footer {
    background: url('../../assets/img/photo_subscribe.png') center center/cover no-repeat;
    max-width: 100%;
    min-height: 448px;
}


.section__wrapper {
    margin-left: auto;
    margin-right: auto;
    max-width: 1140px;
    min-height: 448px;
}

.footer-info {
    max-width: 100%;
    min-height: 448px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.footer-quote {
    max-width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.footer-quote img {
    width: 96px;
    height: 96px;
}

.footer-quote p {
    text-align: center;
    width: 360px;
    font-size: 20px;
    line-height: 24px;
}

.footer-form {
    max-width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 28px;
}

.footer-form h4 {
    font-weight: 400;
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 28px;
}


.bold {
    font-weight: 700;
    font-size: 24px;
    line-height: 40.13px;
    margin-bottom: 0;
}

form {
    max-width: 500px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.input-email {
    width: 256px;
    height: 49px;
    text-indent: 22px;
    background: #E1E1E1;
    border: 0;
    border-radius: 30px 0 0 30px;
}

.input-subscribe {
    width: 100px;
    height: 49px;
    color: white;
    background: #F16D7F;
    border: 0;
    border-radius: 0 30px 30px 0;
}
</style>