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
//# sourceMappingURL=all.js.map
