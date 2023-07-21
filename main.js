$(document).ready(function() {
    $("#bthome").on('click', function () {
      // html, body 요소 모두에 애니메이션을 적용합니다.
      $("html, body").animate({ scrollTop: '0' }, 500);
    });
  });
  
  $(document).ready(function() {
    // 메뉴바 링크를 클릭하면 해당 섹션으로 스크롤 이동
    $("nav a").on('click', function(event) {
      event.preventDefault();
      var target = $(this).attr("href");
      var targetPosition = $(target).offset().top;
      $('html, body').animate({ scrollTop: targetPosition }, 500);
    });
  });
  
