const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");
//  header
const head = document.querySelectorAll("header nav a");

head.forEach((element, i) => {
  element.setAttribute("class", "italic");
  element.textContent = siteContent.nav[`nav-item-${i + 1}`];
});

document
  .getElementById("logo-img")
  .setAttribute("src", siteContent.images["logo-img"]);

// section

document.querySelector("#cta-img").src = siteContent.images["cta-img"];
document.querySelector("h1").textContent = siteContent.cta.h1;
document.querySelector(".cta-text button").textContent = siteContent.cta.button;

const mainContent = document.querySelectorAll(".top-content .text-content h4");

mainContent[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
mainContent[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];

const pContent = document.querySelectorAll(".top-content .text-content p");

pContent[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
pContent[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];

let content1 = document.querySelectorAll(".bottom-content .text-content");

content1.forEach((s, i) => {
  let contentArr = ["servisler", "ürünler", "vizyon"];
  s.querySelector("h4").textContent =
    siteContent["ana-içerik"][`${contentArr[i]}-h4`];
  s.querySelector("p").textContent =
    siteContent["ana-içerik"][`${contentArr[i]}-içeriği`];
});

document.getElementById("middle-img").src = siteContent.images["accent-img"];

let content2 = document.querySelectorAll(".contact h4");

content2[0].textContent = siteContent.iletisim["iletişim-h4"];

let contentP = document.querySelectorAll(".contact p");

contentP[0].textContent = siteContent.iletisim.adres;
contentP[1].textContent = siteContent.iletisim.telefon;
contentP[2].textContent = siteContent.iletisim.email;

document.querySelector("footer a").classList = "bold";

document.querySelector("footer a").textContent =
  siteContent["footer"].copyright;
