// This controller is only compiled to iOS devices (it is sitting in an iOS folder)

// Configuring default animationSpeed
const animationSpeed = 400;
// Configuring the width of the menu based on the phone size
// When it is a tablet, use half the screenwidth instead
// Can of course be adjusted to whatever is preferred
const menuWidth =  Alloy.isTablet ? Ti.Platform.displayCaps.platformWidth / 2 : Ti.Platform.displayCaps.platformWidth - 100;

let menuWrapper = $.menu.getView('wrapper');
menuWrapper.left = -menuWidth;
menuWrapper.width = menuWidth;

// When opening, animate the background and the menu at the same time
function handleOpen() {
    $.background.animate({
        opacity: 0.5,
        duration: animationSpeed
    });
    menuWrapper.animate({
        left: 0,
        duration: animationSpeed
    });
}

// When closing the menu, animate it away first
// and fade the background. Then when animation is done close the window.
function dismiss() {
    $.background.animate({
        opacity: 0,
        duration: animationSpeed
    }, () => {
        // Second parameter for the animation is the callback when it is done
        // In this case we're closing the window after menu has faded away
        $.getView().close();
    });

    menuWrapper.animate({
        left: -menuWidth,
        duration: animationSpeed
    });
}

function handleSafearea() {
    // Because this drawer controller is only used on iOS and the menu
    // is full height, we need to monitor the safeArea using the postlayout event
    // and then apply the content limit
    $.menu.getView('menuContent').applyProperties({
        top: $.win.safeAreaPadding.top,
        bottom: $.win.safeAreaPadding.bottom
    });
}