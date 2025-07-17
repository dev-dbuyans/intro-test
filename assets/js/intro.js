document.addEventListener("DOMContentLoaded", () => {

  //visual hover
  $("section#intro .con").hover(

    function(){
      $(this).addClass('on')
      $(this).find('.effect').addClass('on')
      $("section#intro .con").not(this).addClass('off');
    },
    function(){
      $(this).removeClass('on')
      $(this).find('.effect').removeClass('on')
      $("section#intro .con").not(this).removeClass('off');

    }
  );


  //bg 전환
  $("section#intro .con").on("mouseover", function () {
    const classList = $(this).attr("class").split(" ");
    const riverCode = classList.find(c => ["HG", "NDG", "GG", "YSG"].includes(c));

    if (riverCode) {
      $("#intro_wrap").css({
        backgroundImage: `url('./assets/img/intro_bg_${riverCode}.jpg')`
      });
    } 
  });
});
