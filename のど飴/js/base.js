$(function(){
  // 商品紹介のフェード
  function animation(){
    $('.js-fadeIn').each(function(){
      //ターゲットの位置を取得
      var target = $(this).offset().top;
      //スクロール量を取得
      var scroll = $(window).scrollTop();
      //ウィンドウの高さを取得
      var windowHeight = $(window).height();
      //ターゲットまでスクロールするとフェードインする
      if (scroll > target - windowHeight){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  }
  animation();
  $(window).scroll(function (){
    animation();
  });

  // ページトップに戻るボタン
  $('.js-toTop').click(function () {
    $('body,html').animate({scrollTop: 0}, 1000);
  });

  // のど飴のおいしいヒミツの色変化
  $(".js-modalBtn").hover(
    function() {
      if($(window).width() <= 767) {
        return false;
      }
      $(this).children('img').attr('src','img/about/btn-book-on.png');
    },
    function() {
      if($(window).width() <= 767) {
        return false;
      }
      $(this).children('img').attr('src','img/about/btn-book.png');
    }
  );

  // メイン背景の表示(ゆっくり)
  $('head').append('<style>.top-inner{display:none;}');
  $(window).on("load", function() {
    $('.top-inner').delay(500).fadeIn(1400);
  });

  // ヘッダーの表示(ゆっくり)
  $('head').append('<style>.js-top{display:none;}');
  $(window).on("load", function() {
    $('.js-top').delay(2200).fadeIn(1000);
  });

  // h1の表示(ゆっくり)
  $('head').append('<style>h1{display:none;}');
  $(window).on("load", function() {
    $('h1').delay(1700).fadeIn(1000);
  });

  // クリックイベント(開け閉め)
  $('.toggle').click(function(){
    $('.modal').slideToggle('fast');
  });

});
