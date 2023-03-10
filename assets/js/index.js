let item = document.querySelector(".Hamburger");
item.addEventListener("click", function (params) {
    document.body.classList.toggle("hMenuOpen");
});

// elements
var elements_to_watch = document.querySelectorAll('.base');

// callback 
var callback = function(items){
  items.forEach((item) => {
    if(item.isIntersecting){
      item.target.classList.add("in-page");
    } else{
      item.target.classList.remove("in-page");
    }
  });
}

// observer
var observer = new IntersectionObserver(callback, { threshold: 0.6 } );

// apply
elements_to_watch.forEach((element) => {
  observer.observe(element); 
});