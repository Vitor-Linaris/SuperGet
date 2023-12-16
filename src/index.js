import "./assets/scss/styles.scss";
import "./assets/js/svg-inject.min";
import "./assets/js/app";
import imgLogo from "./assets/img/logo.png";
import imgLogin from "./assets/img/login.svg";
import imgShop from "./assets/img/shop.svg";
import imgUnion from "./assets/img/union.svg";
import imgApp from "./assets/img/icon-app.svg";

const imgLogoMobile = document.getElementById("imgLogoMobile");
imgLogoMobile.src = imgLogo;

const imgLogoDesktop = document.getElementById("imgLogoDesktop");
imgLogoDesktop.src = imgLogo;

const imgLoginDesktop = document.getElementById("imgLoginDesktop");
imgLoginDesktop.src = imgLogin;

const imgShopDesktop = document.getElementById("imgShopDesktop");
imgShopDesktop.src = imgShop;

const imgUnionDesktop = document.getElementById("imgUnion");
imgUnionDesktop.src = imgUnion;

const imgAppDesktop = document.getElementById("imgAppDesktop");
imgAppDesktop.src = imgApp;
