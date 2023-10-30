// JavaScript

//実行する機能
const show = (entries,obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
  const keyframes = {
    opacity: [0, 1],
    translate: ['-600px 0',0]
  }
  entries[0].target.animate(keyframes,850);

  obs.unobserve(entry.target);
}
});
}

//監視機能の設置
const observer = new IntersectionObserver(show);

//監視対象
const images = document.querySelectorAll('.img');
images.forEach(img =>{
  observer.observe(img);
});

//監視対象の指示
observer.observe(document.querySelector('#img01'));