/*
	Dopetrope by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// ==========================================
	// Unified Fullscreen Overlay Menu & Lego Button
	// ==========================================

		// 1. 화면 모서리에 고정될 빨간 레고 버튼 생성 및 추가 (이미지 파일명: red.png)
		var $legoBtn = $(
			'<div id="legoBtn" class="lego-menu-btn">' +
				'<img src="images/red.png" alt="메뉴 열기">' +
			'</div>'
		).appendTo($body);

		// 2. 반투명 전체 화면 오버레이 메뉴 생성 및 추가
		var $menuOverlay = $(
			'<div id="menuOverlay" class="fullscreen-menu-overlay">' +
				'<ul>' +
					'<li><a href="index.html">Home</a></li>' +
					'<li><a href="profile.html">Profile</a></li>' +
					'<li><a href="Architecture.html">Architecture</a></li>' +
					'<li><a href="Artwork.html">Artwork</a></li>' +
				'</ul>' +
			'</div>'
		).appendTo($body);

		// 3. 레고 버튼 클릭 시 오버레이 메뉴 토글 기능
		$legoBtn.on('click', function(e) {
			e.stopPropagation();
			$menuOverlay.toggleClass('active');
		});

		// 4. 메뉴 안의 링크를 클릭하면 오버레이 창이 닫히도록 설정
		$menuOverlay.find('a').on('click', function() {
			$menuOverlay.removeClass('active');
		});

		// 5. PC/모바일 상관없이 반투명 배경 빈 곳을 클릭하면 창이 닫히도록 설정
		$menuOverlay.on('click', function(e) {
			if ($(e.target).is($menuOverlay)) {
				$menuOverlay.removeClass('active');
			}
		});

})(jQuery);
