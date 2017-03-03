function modalOpened() {
  $('body').addClass('playwall-modal-open');
  $('#playwall-frame').addClass('modal-open');
}
function modalClosed() {
  $('body').removeClass('playwall-modal-open');
  $('#playwall-frame').removeClass('modal-open');
}

$(document).ready(function() {
  // your own checks for requiring the paywall
  modalOpened();
});

window.addEventListener("message", receiveMessage, false);

function receiveMessage(event)
{
  if (event.data == 'closeModal') {
    modalClosed();
  }
}
