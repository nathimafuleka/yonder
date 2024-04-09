(function() {
    "use strict";

    let mainHeader = $(".main-header");
    let solidBar = $(".responsive-bar button");

    $(solidBar).click(function() {
        mainHeader.toggleClass("menu-visible");
    });
    // Responsive menu

    let scrollLink = $(".nav-link");

    $(scrollLink).on("click", function (event) {
        event.preventDefault();
        $("html,body").animate(
            {
            scrollTop: $(this.hash).offset().top,
            },
            300
        );
    });
    // Navbar scroll spay

    let planet1 = document.querySelector('.heroarea .planet-1');
    let planet2 = document.querySelector('.heroarea .planet-2');
    let planet3 = document.querySelector('.heroarea .planet-3');

    let initialPositions = {
        planet1: planet1.offsetTop,
        planet2: planet2.offsetTop,
        planet3: planet3.offsetTop
    };

    window.addEventListener('scroll', function () {
        let scrollPosition = window.scrollY;

        let newPlanet1Position = initialPositions.planet1 - scrollPosition * 0.4;
        planet1.style.top = newPlanet1Position + 'px';

        let newPlanet2Position = initialPositions.planet2 - scrollPosition * 0.6;
        planet2.style.top = newPlanet2Position + 'px';

        let newPlanet3Position = initialPositions.planet3 - scrollPosition * 1;
        planet3.style.top = newPlanet3Position + 'px';

    });
    // HeroArea changing planets position

    let words = [
        ' DIGITAL',
        ' MARKETING',
        ' TECH',
        ' RETAIL',
        ' PROMOTIONAL'
        ], i = 0;
    setInterval(function(){
        $('#changing-word').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn(1000);
        });
    }, 3000);
    // HeroArea changing words

    // let ourPlanet1 = document.querySelector('.welcome-right .planet-1');
    // let ourPlanet2 = document.querySelector('.welcome-right .planet-2');

    // let initialPlanetPositions = {
    //     ourPlanet1: ourPlanet1.offsetTop,
    //     ourPlanet2: ourPlanet2.offsetTop,
    // };

    // window.addEventListener('scroll', function () {
    //     let scrollPosition = window.scrollY;

    //     let newOurPlanet1Position = initialPlanetPositions.ourPlanet1 - scrollPosition * 0.3;
    //     ourPlanet1.style.top = newOurPlanet1Position + 'px';

    //     let newOurPlanet2Position = initialPlanetPositions.ourPlanet2 - scrollPosition * 0.6;
    //     ourPlanet2.style.top = newOurPlanet2Position + 'px';

    // });
    
    // prevent auto play video when coming from other page
    $(document).ready(function() {
        var videoFrame = $('.iframe-video');
        // Pause the video
        videoFrame[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    });
}(jQuery));
