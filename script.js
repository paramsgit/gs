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
  

function changeactive(id) {
  console.log(id)
  let alist=['al1','al2','al3','al4']
  for(let i=0;i<4;i=i+1){
    document.getElementById(alist[i]).classList.remove('active')
    document.getElementById(alist[i]).classList.add('cbb')
  }
  document.getElementById(id).classList.add('active')
    document.getElementById(id).classList.remove('cbb')
}


// Get all the navbar links
const navbarLinks = document.querySelectorAll('nav ul li a');

// Add scroll event listener
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Check which section is in the viewport
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      // Remove active state from all navbar links
      navbarLinks.forEach((link) => {
        link.classList.remove('active');
        link.classList.add('cbb');
      });

      // Add active state to the corresponding navbar link
      navbarLinks[index].classList.add('active');
      navbarLinks[index].classList.remove('cbb');
    }
  });
});

function hidedb() {
  document.getElementById('downloadgif').style.display='none'
}

function downloadb() {
  document.getElementById('downloadgif').style.display='block'
  setTimeout(hidedb,3000)
  const fileUrl = 'files/final.pdf';
  const fileName = 'Brochure.pdf';

  // Create a temporary anchor element
  const anchorElement = document.createElement('a');
  anchorElement.href = fileUrl;
  anchorElement.download = fileName;

  // Programmatically click the anchor element
  anchorElement.click();

  // Clean up the temporary anchor element
  anchorElement.remove();

  // Prevent the default link behavior
  return false;
}