.js-toggle{
    color:white;
    background-color:CornflowerBlue;
  }
   
  .js-toggle span{
    display:none;
    color:#111;
  }
  
  $(".js-toggle, .js-toggle span").on("mouseenter", function() {
    $(".js-toggle span").css( "display", "block" );
    }).on("mouseleave", function() {
    $(".js-toggle span").css( "display", "none" );
    });
    