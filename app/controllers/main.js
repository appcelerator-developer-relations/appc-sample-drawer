
function handleOpen() {
    if (OS_IOS) return;

    // Code below is for Android to display a menu icon
    const activity = $.win.activity;
    const actionBar = activity.actionBar;

    if (!actionBar) return; // sanity check
    actionBar.displayHomeAsUp = true;
    actionBar.onHomeIconItemSelected = showMenu;
}


function showMenu() {
    if (OS_ANDROID) { 
        // On Android just show menu
        $.drawer.toggleLeft();
        return;
    }
    
    // On iOS the ios-only drawer controller is created. The menu logic is inside this controller
    Alloy.createController('drawer').getView().open();
}

