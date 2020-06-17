(function() {
  const requestAnimationFrame = window.requestAnimationFrame ||
　　　　　　　　　　　　　　　　　　　window.mozRequestAnimationFrame ||
                            　window.webkitRequestAnimationFrame ||
　　　　　　　　　　　　　　　　　　　window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();
(function() {
  const cancelAnimationFrame = window.cancelAnimationFrame ||
　　　　　　　　　　　　　　　　　　　window.mozcancelAnimationFrame ||
                            　window.webkitcancelAnimationFrame ||
　　　　　　　　　　　　　　　　　　　window.mscancelAnimationFrame;
  window.cancelAnimationFrame = cancelAnimationFrame;
})();




let $header = $('header');
let rememberScrollTop = null;
$(window).scroll(function() {
  // 呼び出されるまで何もしない
  let isRunning = false
  if (!isRunning) {
    isRunning = true

    // 描画する前のタイミングで呼び出してもらう
    window.requestAnimationFrame(() => {

      // ここでなにか処理をする

      currentScrollTop = $(this).scrollTop()
      if (rememberScrollTop - currentScrollTop > 0) {
        console.log('上に上っている')
        $header.css('top', '0');
      } else {
        console.log('下に下っている')
        $header.css('top', '-140px');
      }
      rememberScrollTop = currentScrollTop;

      isRunning = false
    })
  }
});