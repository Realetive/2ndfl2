'use strict';

export default function affix( element,  ) {
  var scrollTop = window.pageYOffset;
  console.log(scrollTop);
  if ( scrollTop > 0 ) {
    document.getElementById('summary').style.top = "20px";
    document.getElementById('summary').style.position = "fixed";
  } else {
    document.getElementById('summary').style.position = "relative";
    document.getElementById('summary').style.top = "50px";
  }
}

window.onscroll = affix;
