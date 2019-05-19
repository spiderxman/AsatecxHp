jQuery(document).ready(function($) {

  // Accordion Toggle
  var iconOpen = 'icon-minus', iconClose = 'icon-plus';

  $(document).on('show.bs.collapse hide.bs.collapse', '.accordion', function(e) {
    var $target = $(e.target)
    $target.siblings('.accordion-heading')
      .find('em').toggleClass(iconOpen + ' ' + iconClose);
    if (e.type == 'show')
      $target.prev('.accordion-heading').find('.accordion-toggle').addClass('active');
    if (e.type == 'hide')
      $(this).find('.accordion-toggle').not($target).removeClass('active');
  });

  // DM Top
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
      $('.dmtop').css({
        bottom: "25px"
      });
    } else {
      $('.dmtop').css({
        bottom: "-100px"
      });
    }
  });

  $('.dmtop').click(function() {
    $('html, body').animate({
      scrollTop: '0px'
    }, 800);
    return false;
  });

  // Facts
  function count($this) {
    var current = parseInt($this.html(), 10);
    current = current + 1; /* Where 50 is increment */

    $this.html(++current);
    if (current > $this.data('count')) {
      $this.html($this.data('count'));
    } else {
      setTimeout(function() {
        count($this)
      }, 50);
    }
  }

  $(".stat-count").each(function() {
    $(this).data('count', parseInt($(this).html(), 10));
    $(this).html('0');
    count($(this));
  });

  // Tooltip
  $('.social_buttons, .client').tooltip({
    selector: "a[data-toggle=tooltip]"
  })

  $('.social_buttons, .client').tooltip();

  // Hover and Carousel
  $('.owl-carousel > .item ').each(function() {
    $(this).hoverdir();
  });
  $("#owl-demo").owlCarousel({
    items: 5,
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    stopOnHover: true,
    lazyLoad: true,
    transitionStyle: "fade",
    navigation: true,
    pagination: false,
  });

  // tooltip demo
  $("[data-toggle=tooltip]").tooltip();

  // popover demo
  $("[data-toggle=popover]").popover();

  // Chart Effects;
	$('.chart').easyPieChart({
		easing: 'easeOutBounce',
		size : 180,
		animate : 2000,
		lineWidth : 10,
		lineCap : 'square',
		lineWidth : 18,
		barColor : '#3498db',
		trackColor : '#f9f9f9',
		scaleColor : false,
		onStep: function(from, to, percent) {
		$(this.el).find('.percent').text(Math.round(percent)+'%');
		}
	});

  // Popular Items Carousel
  $(document).ready(function() {
    $("#popularitems").owlCarousel({
      items: 3,
      lazyLoad: true,
      navigation: false
    });
  });

  // Hover and Carousel on Home #1
  $('.owl-carousel > .item ').each(function() {
    $(this).hoverdir();
  });

  $("#owl-related").owlCarousel({
    items: 3,
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    stopOnHover: true,
    lazyLoad: true,
    transitionStyle: "fade",
    navigation: true,
    pagination: false,
  });

  // Portfolio
  var $container = $('.portfolio'),
    $items = $container.find('.market-item'),
    portfolioLayout = 'fitRows';

  if ($container.hasClass('portfolio-centered')) {
    portfolioLayout = 'masonry';
  }

  function refreshWaypoints() {
    setTimeout(function() {}, 1000);
  }

  function getColumnNumber() {
    var winWidth = $(window).width(),
      columnNumber = 2;
  }

  function setColumns() {
    var winWidth = $(window).width(),
      columnNumber = getColumnNumber(),
      itemWidth = Math.floor(winWidth / columnNumber);

    $container.find('.market-item').each(function() {
      $(this).css({
        width: itemWidth + 'px'
      });
    });
  }


  $(window).on('resize', function() {
    setPortfolio();
  });

});
