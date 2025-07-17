document.addEventListener("DOMContentLoaded", () => {

  // 터치 디바이스 판별
  function isTouchDevice() {
    return ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
  }

  // PC: hover 이벤트만 동작
  if (!isTouchDevice()) {
    $("section#intro .con").hover(
      function () {
        $(this).addClass('on');
        $(this).find('.effect').addClass('on');
        $("section#intro .con").not(this).addClass('off');
      },
      function () {
        $(this).removeClass('on');
        $(this).find('.effect').removeClass('on');
        $("section#intro .con").not(this).removeClass('off');
      }
    );
  }

  // 배경 전환
  $("section#intro .con").on("mouseover", function () {
    const classList = $(this).attr("class").split(" ");
    const riverCode = classList.find(c => ["HG", "NDG", "GG", "YSG"].includes(c));
    if (riverCode) {
      $("#intro_wrap").css({
        backgroundImage: `url('./assets/img/intro_bg_${riverCode}.jpg')`
      });
    }
  });

  // 모바일 전용: click으로 on/off 클래스 처리
  if (isTouchDevice()) {
    $("section#intro .con").on("click", function () {
      const $this = $(this);
      const isActive = $this.hasClass("on");

      $("section#intro .con").removeClass("on off");
      $("section#intro .con .effect").removeClass("on");

      if (!isActive) {
        $this.addClass("on");
        $this.find(".effect").addClass("on");
        $("section#intro .con").not($this).addClass("off");
        // 배경 전환은 mouseover에 이미 연결돼 있으므로 그대로 유지됨
      }
    });
  }

});

