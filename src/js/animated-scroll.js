function animate(e) {
  if(this.href.match(/#/)) {
    const speed = 0.2;
    const w = window.pageYOffset;
    const hash = this.href.replace(/[^#]*(.*)/, '$1');
    const t = document.querySelector(hash).getBoundingClientRect().top;
    let start = null;
    requestAnimationFrame(step);
    function step(time) {
        if (start === null) start = time;
        let progress = time - start;
        let r = (t < 0 ? Math.max(w - progress/speed, w + t) : Math.min(w + progress/speed, w + t));
        window.scrollTo(0, r);
        if (r != w + t) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
    }
  }
}

const linkNav = document.querySelectorAll('a');
linkNav.forEach(link => link.addEventListener('click', animate));