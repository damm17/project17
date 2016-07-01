$(window).scroll(function() {
   if ( $(this).scrollTop() > 80 ) {
       $("#navSticky").addClass("navbar-scrolled");
   } else {
      $("#navSticky").removeClass("navbar-scrolled");
   }
});

var $container = $('.masonry-container');
$container.imagesLoaded( function () {
  $container.masonry({
    columnWidth: '.item',
    itemSelector: '.item'
  });   
});

$('a[data-toggle=tab]').each(function () {
  var $this = $(this);

  $this.on('shown.bs.tab', function () {
    $container.imagesLoaded( function () {
      $container.masonry({
        columnWidth: '.item',
        itemSelector: '.item'
      });   
    });  
  });
});