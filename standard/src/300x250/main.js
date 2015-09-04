function createBanner() {
	"use strict";

    // onetime setup 

    // any base64 encoded assets go here.

    var image0jpg = 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzAxNCA3OS4xNTY3OTcsIDIwMTQvMDgvMjAtMDk6NTM6MDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJDRjAxNkY5NEIzMTExRTU4NjBGQkFBOUM4OURDNjM1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJDRjAxNkZBNEIzMTExRTU4NjBGQkFBOUM4OURDNjM1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkNGMDE2Rjc0QjMxMTFFNTg2MEZCQUE5Qzg5REM2MzUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkNGMDE2Rjg0QjMxMTFFNTg2MEZCQUE5Qzg5REM2MzUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8N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'

    // create a variable to track banner time.
    var initialTime = new Date().getTime();

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

    var dimensions = extractSize(document.querySelectorAll("[name='ad.size']")[0].getAttributeNode("content").value);
    
    // retrieve main layers from markup
    container = document.querySelectorAll('.container')[0];
    aboveClickTag = document.querySelectorAll('.above-click-tag')[0]; // items that don't respond to clicktag
    ctaContainer = document.querySelectorAll('.cta-container')[0]; // cta itself (with rollover)
    belowClickTag = document.querySelectorAll('.below-click-tag')[0]; // anything below cta, which just responds to clicktag

    // render, below, is the private function that creates the banner.
    // it also runs when the banner is replayed.

    function render() {
      
      	container.style.width = dimensions.width + "px";
      	container.style.height = dimensions.height + "px";
        image0 = generateSprite(image0jpg); // note that because this image is base64 in the file, we reference it by variable
        image1 = generateSprite('image1.jpg');
        resolveImage = generateSprite('resolveImage.jpg');

        copy0 = generateSprite('copy0-fs8.png');
        copy1 = generateSprite('copy1-fs8.png');
        resolveCopy0 = generateSprite('resolveCopy0-fs8.png');
        resolveCopy1 = generateSprite('resolveCopy1-fs8.png');
        replayButton = generateSizedSprite('replayButton.svg',dimensions.width-20,5,15,15);
        // REPLAY SETUP

        
        clone(replayButton.style,{
        	
        	cursor: 'pointer',
        })


        // CTA SETUP


        ctaRolledOut = generateSizedSprite('ctaRolledOut-fs8.png',0,0,116,28);
        ctaRolledOver = generateSizedSprite('ctaRolledOver-fs8.png',0,0,116,28); 

        cta = generateContainer(); // create a sized container for the cta
        clone(cta.style, {

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

        // Set up 

        clone(belowClickTag.style, {
            width: dimensions.width + 'px',
            height: dimensions.height + 'px',
            overflow: "hidden",
            position: "absolute"
        });
        appendChildrenTo(belowClickTag)(image0, copy0, image1, copy1, resolveImage,resolveCopy0,resolveCopy1);

        hide(image1, copy1, aboveClickTag, cta, resolveImage, resolveCopy0, resolveCopy1, ctaRolledOver);

        addListeners();
        

    }


    //The first function in our sequence of animations

    function seq01() {

        var twnDelay = 0; // running tally of the animation
        var tt = .75; // short for transition time

        TweenLite.from(image0, tt, {
            opacity: 0,
            ease: Expo.easeOut 
        });
        TweenLite.from(copy0, tt, {
            x:-dimensions.width,
            ease: Expo.easeOut,
            delay:twnDelay += .2
        });
       TweenLite.delayedCall(twnDelay + 2, seq02);

    }

    function seq02() {
        var twnDelay = 0;
        var tt = .75;
        
		show(image1,copy1);

        TweenLite.to(copy0, tt, {
            x: dimensions.width,
            ease: Expo.easeIn,
            delay:twnDelay
        });
        twnDelay += tt;         

		TweenLite.from(image1,tt,{
        	opacity:0,
        	ease:Expo.easeOut,
        	delay:twnDelay
        });
        TweenLite.from(copy1, tt, {
            x: -dimensions.width,
            ease: Expo.easeOut,
            delay:twnDelay += .2
        });
         TweenLite.delayedCall(twnDelay + 2, doResolve);
    }


    function doResolve() {

        var twnDelay = 0;
        appendChildrenTo(aboveClickTag)( replayButton);
        show(resolveCopy0, resolveCopy1, resolveImage, cta, aboveClickTag);
        var tt = .75;
        TweenLite.to(copy1, tt, {
            x: dimensions.width,
            ease: Expo.easeIn
        });

        twnDelay += tt;
        
		TweenLite.from(resolveImage, tt, {
            opacity: 0,
            delay: twnDelay += .1,
            ease: Expo.easeOut,
        });

        TweenLite.from(resolveCopy0, tt, {
            
            x: -dimensions.width,
            delay: twnDelay += .1,
            ease: Expo.easeOut,
        });

        TweenLite.from(resolveCopy1, tt, {
            
            x: -dimensions.width,
            delay: twnDelay += .1,
            ease: Expo.easeOut,
        });

        TweenLite.from(cta, tt, {
            opacity: 0,
            delay: twnDelay += .1,
            ease: Expo.easeOut,
        });
        TweenLite.from(replayButton, tt, {
            opacity: 0,
            delay: twnDelay += .1,
            ease: Expo.easeOut
        })

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
            ease:Linear.easeNone
        });
    }

    function resetReplay() {
        TweenLite.set(replayButton, {
            rotation: 0
        })
    }

    function removeAllChildren(el) {
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
    }
    //Replay the ad
    function replay() {

        
        removeAllChildren(aboveClickTag);
        removeAllChildren(belowClickTag);
        removeAllChildren(ctaContainer);
        removeListeners();
        
        render();
        seq01();

    }

    /*

        //This is where we add any rollovers or clicks    

    */


    function removeListeners() {
        cta.removeEventListener('mouseout', doCtaRollout);
        cta.removeEventListener('mouseover', doCtaRollover);
        replayButton.removeEventListener('mouseover', doReplayRollover);
       replayButton.removeEventListener('click', replay);
    }

    function addListeners() {
        cta.addEventListener('mouseout', doCtaRollout);
        cta.addEventListener('mouseover', doCtaRollover);
        replayButton.addEventListener('mouseover', doReplayRollover);
        replayButton.addEventListener('click', replay);
    }

   
    //This will echo how many seconds have passed
    function returnTimer() {
        var stopWatch = ((new Date().getTime()) - initialTime) * .001;
    }


    function createListFunction(callback) {
        return function() {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i]) {
                    callback(arguments[i], i);
                }
            }
        }
    }

    var kill = createListFunction(function(result, i) {
        if (result.parentNode) {
            result.parentNode.removeChild(result);
        }
    })
    var hide = createListFunction(function(result, i) {
        result.style.opacity = 0;
    });
    var show = createListFunction(function(result, i) {
        result.style.opacity = 1;
    });

    var appendChildrenTo = function(parentNode) {
        return createListFunction(function(result, i) {
            parentNode.appendChild(result);
        });
    }
    var generateSprite = function(imgURL) {
    	return generateSizedSprite(imgURL,0,0,dimensions.width,dimensions.height);
    }
    var generateSizedSprite = function(imgURL,x,y,w,h){
    	var div = generateSizedContainer(w+1,h+1);
        div.style.backgroundRepeat = 'no-repeat';
        div.style.backgroundImage = "url(" + imgURL + ")"
        div.style.backgroundSize = w + 'px ' + h + 'px';
        div.style.left = x+'px'
        div.style.top = y+'px'
        return div;
    }
    var generateContainer = function() {
    	return generateSizedContainer(dimensions.width,dimensions.height);
    }
    var generateSizedContainer = function(w,h){
    	var div = document.createElement("div");
        div.style.width = w + "px";
        div.style.height = h + "px";
        div.style.position = "absolute";
        div.style.overflow = "hidden";
        return div;
    }
    var clone = function(target, obj) {

        for (var i in obj) {
            try{
                target[i] = obj[i];
            } catch(e){
                console.log("couldn't clone property")
            }
          
        }

    }
    function extractSize(str) {
        var widthMatch = /width\=(\d+)/.exec(str);
        var heightMatch = /height\=(\d+)/.exec(str);
        return {
            width: parseInt(widthMatch[1]),
            height: parseInt(heightMatch[1])
        }
    }

    return {
        start: function() {
            render();
            seq01();
        }
    }



}
