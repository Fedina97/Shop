<template>
    <div class="footer-links">
        <div class="footer__wrapper">
            <p class="footer-copyright">&#169; 2021 Brand All Rights Reserved</p>
            <div class="footer-links__item">
                <div class="footer-social">
                    <a href="#" class="social-link">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="social-link">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#" class="social-link">
                        <i class="fab fa-pinterest-p"></i>
                    </a>
                    <a href="#" class="social-link">
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .footer-links {
    background: #222224;
    color: white;
    min-height: 79px;
}

.footer__wrapper {
    margin-left: auto;
    margin-right: auto;
    max-width: 1140px;
    min-height: 79px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.footer-links__item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.footer-social {
    width: 148px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: space-between;
    -ms-flex-pack: space-between;
    justify-content: space-between;
}

.footer-social a {
    width: 32px;
    height: 32px;
}

.footer-social i {
    max-width: 100%;
    min-height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.social-link {
    color: black;
    background: white;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-decoration: none;
    margin-right: 7px;
}

.fab {
    font-size: 22px;
}

i {
    color: black;
}

.social-link:last-child {
    margin-right: 0;
}

.social-link:hover,
i:hover {
    background: #F16D7F;
    color: white;
    -webkit-transition: 0.2s ease-in-out;
    -o-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
}
</style>