const links = document.querySelectorAll('a[href]:not([href^="#"]):not([href^="javascript:"]):not([target="_blank"])');

links.forEach(link => {
  if (!link.href.includes('news.ycombinator.com') || 
      link.href.includes('reply?id=') || 
      link.href.includes('vote?id=') ||
      link.href.includes('login') ||
      link.href.includes('logout') ||
      link.classList.contains('hnuser')) {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }
});