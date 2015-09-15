function createBanner(u, a) { // u is utils, a is assets
    "use strict";
    // onetime setup 
    // create a variable to track banner time.
    var initialTime = new Date().getTime();
    var tl = new TimelineLite();
    // declare all necessary dom objects
    var container,
        image0,
        image1,
        resolveImage,
        copy0,
        copy1,
        resolveCopy0,
        resolveCopy1,
        replayButton,
        cta,
        ctaRolledOut,
        ctaRolledOver,
        aboveClickTag,
        ctaContainer,
        belowClickTag;

    // extract dimension sizes from metatag in markup
    u.dimensions = u.extractSize(document.querySelectorAll("[name='ad.size']")[0].getAttributeNode("content").value);

    // retrieve main layers from markup
    container = document.querySelectorAll('.container')[0];
    aboveClickTag = document.querySelectorAll('.above-click-tag')[0]; // items that don't respond to clicktag
    ctaContainer = document.querySelectorAll('.cta-container')[0]; // cta itself (with rollover)
    belowClickTag = document.querySelectorAll('.below-click-tag')[0]; // anything below cta, which just responds to clicktag
    u.clone(belowClickTag.style,{
        position:'absolute',
        width: u.dimensions.width + 'px',
        height: u.dimensions.height + 'px',
        border: '1px solid #ccc'
    });
    // render, below, is the private function that creates the banner.
    


   

    function render() {

        TweenLite.set(container, {
            width: u.dimensions.width,
            height: u.dimensions.height
        })
        image0 = u.generateSprite(a.image0jpg); // note that because this image is base64 in the file, we reference it by variable
        image1 = u.generateSprite(a.image1jpg);

       
        
        resolveImage = u.generateSprite(a.resolveImagepng);

        copy0 = u.generateSplitSprite(a.copy0png);
        

        copy1 = u.generateSplitSprite(a.copy1png);

        resolveCopy0 = u.generateSplitSprite(a.resolveCopy0png);
        resolveCopy1 = u.generateSplitSprite(a.resolveCopy1png);
        
        replayButton = u.generateSizedSprite(a.replayButtonsvg, u.dimensions.width - 20, 5, 15, 15);


        // REPLAY SETUP

        u.clone(replayButton.style, {
            cursor: 'pointer',
        })

        // CTA SETUP


        ctaRolledOut = u.generateSizedSprite(a.ctaRolledOutpng, 0, 0, 116, 28);
        ctaRolledOver = u.generateSizedSprite(a.ctaRolledOverpng, 0, 0, 116, 28);

        cta = u.generateContainer(); // create a sized container for the cta
        u.clone(cta.style, {
            left: "15px",
            top: "173px",
            width: '116px',
            height: '28px'
        });
        cta.appendChild(ctaRolledOut);
        cta.appendChild(ctaRolledOver);


        ctaRolledOver.style.transition = ctaRolledOver.style.WebkitTransition = "opacity .3s";
        ctaContainer.appendChild(cta);

        // ----------------------------------------------------

        u.clone(belowClickTag.style, {
            width: u.dimensions.width + 'px',
            height: u.dimensions.height + 'px',
            overflow: "hidden",
            position: "absolute"
        });

        u.appendChildrenTo(belowClickTag)(image0, copy0, image1, copy1, resolveImage, resolveCopy0, resolveCopy1);
        u.appendChildrenTo(aboveClickTag)(replayButton);
        u.hide(ctaRolledOver);

        addListeners();
        u.subscribe("loaded",animate);

    }


    //The first function in our sequence of animations

    function animate() {
        container.style.display = 'block';
        var twnDelay = 0; // running tally of the animation
        var tt = .75; // short for transition time
        var lastPlusSmall = "-=" + (tt * .9);
        tl.set(replayButton, {
                display: "none"
            })
            .from(image0, tt, {
                opacity: 0,
                ease: Expo.easeOut
            }, "seq01")
            .staggerFrom(copy0.childNodes, tt, {
                x: -u.dimensions.width,
                ease: Expo.easeOut,
            }, .1, "-=.65")
         
            
        .add("seq02", "+=2")

        .staggerTo(copy0.childNodes, tt, {
                x: u.dimensions.width,
                ease: Expo.easeIn
            }, .1, "seq02")
            .from(image1, tt, {
                opacity: 0,
                ease: Expo.easeOut
            })
            .set(image0, {
                opacity: 0
            })
            .staggerFrom(copy1.childNodes, tt, {
                x: -u.dimensions.width,
                ease: Expo.easeOut
            }, .1, "-=.5")

        .add("doResolve", "+=2")

        .to(copy1, tt, {
                x: u.dimensions.width,
                ease: Expo.easeIn
            }, "doResolve")
            .to(image1, tt, {
                opacity: 0,
                ease: Expo.easeOut
            })

        .from(resolveImage, tt, {
                x: u.dimensions.width,
                ease: Expo.easeOut
            }, lastPlusSmall)
            .set(replayButton, {
                display: "block"
            })
            .staggerFrom(resolveCopy0.childNodes, tt, {
                x: -u.dimensions.width,
                ease: Expo.easeOut,
            }, .1, lastPlusSmall)
            .from(resolveCopy1, tt, {
                opacity: 0
            })
            .staggerFrom([cta, replayButton], tt, {
                opacity: 0,
                ease: Expo.easeOut,
            }, .1, lastPlusSmall);

       //  tl.seek("seq02");

    }

    function doCtaRollover() {


        TweenLite.set(ctaRolledOver, {
            opacity: 1
        })
    }

    function doCtaRollout() {

        TweenLite.set(ctaRolledOver, {
            opacity: 0
        })
    }

    function doReplayRollover() {
        TweenLite.to(replayButton, .5, {
            rotation: -360,
            transformOrigin: "50% 54%",
            onComplete: resetReplay,
            ease: Linear.easeNone
        });
    }

    function resetReplay() {
        TweenLite.set(replayButton, {
            rotation: 0
        })
    }

    //Replay the ad
    function replay() {

        tl.restart();

    }

    /*
        //This is where we add any rollovers or clicks    
    */

    function addListeners() {
        cta.addEventListener('mouseout', doCtaRollout);
        cta.addEventListener('mouseover', doCtaRollover);
        replayButton.addEventListener('mouseover', doReplayRollover);
        replayButton.addEventListener('click', replay);
    }

    return {
        start: function() {
            render();
            
        }
    }

}
