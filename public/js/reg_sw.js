// does the browser support service workers?
if ('serviceWorker' in navigator) {
    // fires when the service worker is ready
    navigator.serviceWorker.ready.then(reg => {
        // we have an active service worker working for us
        console.log(`Service Worker ready (Scope: ${reg.scope})`);
        // do something interesting, if you want...
    });
    // then register our service worker
    navigator.serviceWorker.register('sw.js')
        .then(function (reg) {
            // display a success message
            console.log(`Service Worker Registration (Scope: ${reg.scope})`);
        })
        .catch(function (error) {
            // display an error message
            console.log(`Service Worker Error (${error})`);
        });
} else {
    // happens when the app isn't served over a TLS connection (HTTPS)
    console.warn('Service Worker not available');
}   


// Notifications
let notificationButton = document.getElementById('bNot');

function confirmNotification(){
  if ('serviceWorker' in navigator) {
    let options = {
      body: 'Servicio de Notificaciones Habilitado!',
      icon: '../icons/favicon-32x32.png',
      dir: 'ltr',
      lang: 'es-ES', // BCP 47,
      vibrate: [90, 30, 120],
      badge: '/icons/favicon-32x32.png',
      tag: 'confirm-notification',
      renotify: true,
      actions: [
        { action: 'confirm', title: 'OK', icon: '/icons/favicon-32x32.png' },
        { action: 'cancel', title: 'Dismiss', icon: '/icons/favicon-32x32.png' }
      ]
    };
    navigator.serviceWorker.ready
      .then(function(reg) {
        reg.showNotification('Suscripción Habilitada!', options);
    })        
  }
}

function subscribePush(){
  let reg2;
  
  if (!('serviceWorker' in navigator)) {
    return;
  }

  navigator.serviceWorker.ready
    .then(function(reg) {
      reg2 = reg;
      return reg.pushManager.getSubscription()
    })
    .then(function(subscription) {
      if (subscription === null) {
        // New subscription
        let vapidPublicKey = 'BMMUuzeFVpdf51gEwFMLF3Ndl1dtZXfaeJrU2OkfP24zUBkHONtQO16gX571Q3Oz9pNLU5kPXsZfUIjNGMAswhk'
        let convertedVapidPublicKey = urlBase64ToUint8Array(vapidPublicKey)
        return reg2.pushManager.subscribe({
          userVisibleOnly: true ,
          applicationServerKey: convertedVapidPublicKey
        })
    
      } else {
        // already subscribed
      }
    })
    .then(function(subscription) {
      return fetch('https://primera-api-rest.herokuapp.com/suscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(subscription)
      })
    })
    .then(function(res) {
      if (res.ok) {
        confirmNotification()
      }
    })
    .catch(function(err) {
      console.log(err)
    });  
}

function notificationPermit(){
  Notification.requestPermission(function(result){
    if (result !== 'granted'){
      console.log("Notification permit: REJECTED")
    } else{ 
        console.log("Notification permit: ", result)
        subscribePush()
    }
  })
}

if ('Notification' in window && 'serviceWorker' in navigator){
  notificationButton.style.display = 'inline-block'
  notificationButton.addEventListener('click', notificationPermit)
}
// end notifications