window.addEventListener('load', function() {
    document.getElementById('scrollToTopBtn').style.display = 'none';
  });
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > (document.documentElement.clientHeight * 0.30)) {
      document.getElementById('scrollToTopBtn').style.display = 'block';
    } else {
      document.getElementById('scrollToTopBtn').style.display = 'none';
    }
  });
  
  document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  