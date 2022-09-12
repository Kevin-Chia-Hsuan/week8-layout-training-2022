const bars = document.querySelector('.navbar-toggler i');
bars.addEventListener('click', (e) => {
  // 查詢目前所在元素位置
  const cName = e.target;
  // console.log(cName.getAttribute('class'));
  // 取得 i 標籤 class 名稱
  const cNameClass = cName.getAttribute('class');
  // 比對並替換 i 標籤 class 名稱
  if (cNameClass === 'fa-solid fa-bars text-primary fa-xl') {
    cName.className = 'fa-solid fa-xmark text-primary fa-xl';
  } else {
    cName.className = 'fa-solid fa-bars text-primary fa-xl';
  }
}, false);

// 確保圖片都載入後，以免造成剛進入頁面時圖片會被覆蓋
// $('.row').imagesLoaded().progress(() => {
//   $('.row').masonry(); // 渲染整體畫面
// });
