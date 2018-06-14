document.addEventListener('deviceready', function() {
    // erst jetzt ist APP geladen und ready um was zu tun!
    var bilder = ['das-paradies-fuer-wintersportler.jpg','endlos-weite-schwuenge-ueber-perfekt-praeparierte-pisten-ziehen.jpg','erlebnishotel-fendels-familienhit.jpg','fruehlings-special-top-of-tyrol.jpg','hotel-tia-monte-nahe-am-gletscher.jpg','langlaufen-osttirol.jpeg','open-faces-freeride-series-in-kappl.jpg','psst-freeride-geheimtipp-ischgl-relax-if-you-can.jpg','schloss-matzen-skigebiet.jpg','schneebericht-wilder-kaiser-brixtental.jpeg','skigebiet-venet.jpeg'];
  	var aktuell = 0;
    var ton = document.getElementById('audio');

  	var showImage = function( i ) {
  		aktuell += 1;
  		if(aktuell < 0) aktuell = bilder.length -1;
  		if(aktuell > bilder.length -1) aktuell = 0;
  		$( '#bilder' ).css({'background-image':'url(tirolbilder/'+bilder[aktuell]+')'});
  	}

  	var showNext = function() {
  		showImage( 1 );
  	}

  	var showPrev = function() {
  		showImage( -1 );
  	}

  	var downX = 0
  	// $(document).on('mousedown', '#bilder', function(event){
  	// 	downX = event.originalEvent.clientX;
    //
  	// });
    //
  	// // $(document).on('mousemove', '#bilder', function(event){
  	// // 	if ( downX == 0) return;
  	// // 	var diffX = downX - event.originalEvent.clientX;
  	// // 	if (diffX<0)$('#bilder').css({left:diffX});
  	// // 	if (diffX>0)$('#bilder').css({right:-diffX});
  	// // });
    //
  	// $(document).on('mouseup', '#bilder', function(event){
  	// 	var diffX = downX - event.originalEvent.clientX;
  	// 	if (diffX < -100){showImage(1);}
  	// 	if (diffX > 100){showImage(-1);}
  	// 	downX =0;
  	// });

  	//-----------------------------



  	$(document).on('touchstart', '#bilder', function(event){
  		// console.log(event.changedTouches[0].clientX);
  		downX = event.changedTouches[0].clientX;
  		//downX = event.originalEvent.clientX;

  	});

    document.addEventListener("deviceorientation", function(event){
      //process event.gamma;
      var bewegung = event.gamma;
      if (bewegung<5)$('#bilder').css({left:(bewegung*25)});
  		if (bewegung>5)$('#bilder').css({right:(bewegung*25)});
    }, true);

  	$(document).on('touchmove', '#bilder', function(event){
  		if ( downX == 0) return;
  		var diffX = downX - event.changedTouches[0].clientX;
  		if (diffX<0)$('#bilder').css({left:diffX});
  		if (diffX>0)$('#bilder').css({right:-diffX});
  	});

  	$(document).on('touchend', '#bilder', function(event){
  		var diffX = downX - event.changedTouches[0].clientX;
  		if (diffX < -100){showImage(1);}
  		if (diffX > 100){showImage(-1);}
  		downX =0;
      ton.play();
  	});


  	$( document ).on( 'click', '#next', showNext );
  	$( document ).on( 'click', '#prev', showPrev );
  	$(document).ready(function(){
  		showImage(0);
  	});

    console.log( 'DEVICE READY!' );
    $( document ).ready( function() {
      console.log( 'DOM READY!' );
    });
});
