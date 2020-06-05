// @ts-check

(function () {
    'use strict';

    function doInstall() {
        console.log('doInstall');
        // we've tapped the install button, so hide it
        installButton.style.display = 'none';
        // execute the deferred installation prompt
        deferredPrompt.prompt();
        // wait for the response from the deferred prompt
        deferredPrompt.userChoice.then(res => {
            // did the user approve installation?
            if (res.outcome === 'accepted') {
                console.log('doInstall: accepted');
            } else {
                console.log('doInstall: declined');
            }
            // clear the deferred prompt object so we can only do this once
            deferredPrompt = null;
        });
    }

    // register the event listener for the input field
   
    // did we launch as a PWA?
    var urlParams = new URLSearchParams(window.location.search);
    // look for the source parameter, if it's `pwa` then it's installed
    if (urlParams.get('source') === 'pwa') {
        console.log('Launched as PWA');
        // add the PWA moniker to the title
        let theTitle = document.getElementById('title');        
        theTitle.innerHTML = theTitle.innerHTML + ' (PWA)';
    }

    // get a handle to the install button
    let installButton = document.getElementById('installButton');
    // now set the click handler for the install button
    installButton.onclick = doInstall;

    // create an object we'll use to hold the reference to the PWA install
    // event
    let deferredPrompt;

    // now add an event listener to respond to the event. Right before the browser
    // installs the PWA, it fires the beforeinstallprompt event. Here, we'll manage
    // the installation ourselves
    window.addEventListener('beforeinstallprompt', event => {
        console.log('Event: beforeinstallprompt')
        // don't allow the browser to do its install, we want to do it when the user
        // taps our install button
        event.preventDefault();
        // stash the event object so we can use it later (when the user taps the 
        // install button)
        deferredPrompt = event;
        // now unhide the Install button so the user can tap it!
        installButton.style.display = 'block';
    });

    // register an event listener for after the app installs
    window.addEventListener('appinstalled', event => {
        console.log('App Installed');
    });

})();
