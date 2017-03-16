// set Playwall Location
var playwallLocationUrl = 'http://localhost:5000/';

/*
    Create your own logic for when the Playwall modal needs to open
    This function should always return true or false, and gets called when
    the page is done loading.
    You can also call playWallOpenModal() directly from another function.
*/
function playWallShouldOpen() {
  return true;
}

/*
    add Event Listener. When the playwall is ready to close, it will send a message
    containing 'closeModal'. You can define your own clean up logic in this function.
*/
window.addEventListener("message", playWallReceiveMessage, false);
function playWallReceiveMessage(event) {
  if (event.data == 'closeModal') {
    playWallCloseModal();
  }
}

/*
    This function creates the div covering the content of the page.
    You can change styles here directly if required.
*/
function playWallCreateCoverDiv() {
  var div = document.createElement('div');
  div.id = 'playwall-cover';
  div.style.width = '100%';
  div.style.height = '100%';
  div.style.backgroundColor = 'rgba(0,0,0,0.8)';
  div.style.zIndex = '998';
  div.style.top = '0';
  div.style.left = '0';
  div.style.position = 'fixed';
  document.body.appendChild(div);
}

/*
    This function creates the playwall Iframe and appends it to the page.
    Do not change this function unless you know what you are doing.
*/
function playWallCreateIframe() {
  var iframe = document.createElement('iframe');
  iframe.id = 'playwall-frame';
  iframe.src = playwallLocationUrl;
  iframe.style.width = '300px';
  iframe.style.minHeight = '560px';
  iframe.style.border = '0';
  iframe.style.borderRadius = '10px';
  iframe.style.display = 'table';
  iframe.style.zIndex = '999';
  iframe.style.position = 'absolute';
  iframe.style.top = '50px';
  iframe.style.left = '0';
  iframe.style.right = '0';
  iframe.style.margin = '0 auto';
  document.body.appendChild(iframe);
}

// This function removes the div covering the content.
function playWallRemoveCoverDiv() {
  document.getElementById('playwall-cover').remove();
}

// This function removes the playwall Iframe.
function playWallRemoveIframe() {
  document.getElementById('playwall-frame').remove();
}

// This function Opens the Playwall.
function playWallOpenModal() {
  playWallCreateCoverDiv();
  playWallCreateIframe();
}

// This function Closes the Playwall.
function playWallCloseModal() {
  playWallRemoveIframe();
  playWallRemoveCoverDiv();
}

/*
    Currently, Load the playwall on page load.
    Feel free to add your own listeners etc.
*/
// Mozilla, Opera, Webkit
if ( document.addEventListener ) {
  document.addEventListener( "DOMContentLoaded", function(){
    document.removeEventListener( "DOMContentLoaded", arguments.callee, false);
    if (playWallShouldOpen()) { playWallOpenModal(); }
  }, false );

// Internet Explorer < 8
} else if ( document.attachEvent ) {
  document.attachEvent("onreadystatechange", function(){
    if ( document.readyState === "complete" ) {
      document.detachEvent( "onreadystatechange", arguments.callee );
      if (playWallShouldOpen()) { playWallOpenModal(); }
    }
  });
}
