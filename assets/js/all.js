"use strict";

var bars = document.querySelector('.navbar-toggler i');
bars.addEventListener('click', function (e) {
  // 查詢目前所在元素位置
  var cName = e.target; // console.log(cName.getAttribute('class'));
  // 取得 i 標籤 class 名稱

  var cNameClass = cName.getAttribute('class'); // 比對並替換 i 標籤 class 名稱

  if (cNameClass === 'fa-solid fa-bars text-primary fa-xl') {
    cName.className = 'fa-solid fa-xmark text-primary fa-xl';
  } else {
    cName.className = 'fa-solid fa-bars text-primary fa-xl';
  }
}, false);
/* 自訂初始化的 Swiper 套件的函式 */

function initSwiper() {
  /*
  id="comment-swiper" 區塊是我想要使用 swiper 套件的範圍
  要抓取 id "#comment-swiper"
  可以參考 CodePen 來看這個 id 是對應到哪個區塊
  */
  var swiper = new Swiper('.mySwiper', {
    /*  預設要顯示幾個卡片 */
    slidesPerView: 1,

    /* 斷點設定 */
    breakpoints: {
      /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
      992: {
        slidesPerView: 3
      },

      /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
      768: {
        slidesPerView: 1
      },

      /* 更小時都顯示 1 欄 */
      0: {
        slidesPerView: 1
      }
    },

    /* 卡片元素的間隔 */
    // spaceBetween: 16,

    /* cursor效果 */
    grabCursor: true,

    /* 自動播放 */
    // autoplay: true,

    /* 重複循環 */
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      /* 想將分頁圓點綁在哪個 class */
      el: '.swiper-pagination',

      /* 將輪播設定為可以點擊分頁圓點來切換圖片 */
      clickable: true
    }
  });
}
/* 觸發自己定義的函式 */


initSwiper(); // 確保圖片都載入後，以免造成剛進入頁面時圖片會被覆蓋
// const rowMasonry = document.querySelector('.rowMasonry');
// console.log(rowMasonry);

$('.rowMasonry').imagesLoaded().progress(function () {
  $('.rowMasonry').masonry(); // 渲染整體畫面
});
//# sourceMappingURL=all.js.map
