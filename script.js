if (document.readyState !== 'loading') {
    // console.log('document is already ready, just execute code here');
    myInitCode();
} else {
    document.addEventListener('DOMContentLoaded', function () {
      
        myInitCode();
    });
}

function myInitCode() {
  window.addEventListener('scroll', function() {
  
    // checks if window is scrolled more than 500px, adds/removes solid class
    if (window.scrollY > 700) { 
      document.getElementById('transs').style.backgroundColor="white";
      // document.getElementById('transs2').classList.remove('transu');
      document.getElementById('al1').classList.remove('text-white');
      document.getElementById('al2').classList.remove('text-white');
      document.getElementById('al3').classList.remove('text-white');
      document.getElementById('al4').classList.remove('text-white');

    } else {
      // document.getElementById('transs').classList.add('transu');
      // document.getElementById('transs2').classList.add('transu');
      document.getElementById('transs').style.backgroundColor="#fff0";
      document.getElementById('al1').classList.add('text-white');
      document.getElementById('al2').classList.add('text-white');
      document.getElementById('al3').classList.add('text-white');
      document.getElementById('al4').classList.add('text-white');
    }
  });
}
  