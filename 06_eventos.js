var recuadro = document.querySelector("#recuadro");
var botton02 = document.querySelector("#botton02");
// eventos desde el DOM
function cambiarColor() {
    recuadro.style.background = "red";
}

const notification = {
    title: 'Basic Notification',
    body: 'Short message part'
}

function notificación01() {
    recuadro.style.background = "black";

    const myNotification = new window.Notification(notification.title, notification)
    console.log(myNotification);

    recuadro.style.background = "blue";
}