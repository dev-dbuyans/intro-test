document.addEventListener("DOMContentLoaded", () => {

  // 📱 터치 디바이스인지 판별
  function isTouchDevice() {
    return ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
  }

  // PC: hover 이벤트
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

  // 배경 전환 
  function setBackground($el) {
    const classList = $el.attr("class").split(" ");
    const riverCode = classList.find(c => ["HG", "NDG", "GG", "YSG"].includes(c));
    if (riverCode) {
      $("#intro_wrap").css({
        backgroundImage: `url('./assets/img/intro_bg_${riverCode}.jpg')`
      });
    }
  }

  // 모바일 전용: click 이벤트 추가
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

        setBackground($this); // 배경 전환도 함께 처리
      }
    });
  }

  // 🖱️ PC용 배경 전환 유지
  $("section#intro .con").on("mouseover", function () {
    if (!isTouchDevice()) {
      setBackground($(this));
    }
  });

});
