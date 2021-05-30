(()=>{
  const slideshow = {
      items: [],
      timmy: 0,
      delay: 3000,
      init: function(){
          //check for the slideshow container div
          if( document.querySelector('.slideshow')){
              //create the content div
              let divC = document.createElement('div');
              divC.className = 'content';
              document.querySelector('.slideshow').appendChild(divC);
              
              //load the CSS file for the slideshow
              let link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = './slideshow.css';
              document.head.appendChild(link);
              
              //get the slideshow content
              let url = './slideshow.json';
              fetch(url)
              .then((response)=>{
                  return response.json();
              })
              .then(slideshow.loadContents)
              .catch((err)=>{
                  console.log('ERROR:', err);
              });   
          }
      },
      loadContents: function(data){
          let df = new DocumentFragment();
          data.items.forEach((item, idx)=>{
              //add each item to the slideshow div
              let div = slideshow.createItem(item, idx);
              df.appendChild(div);
          })
          //add the slideshow items to the page
          document.querySelector('.slideshow .content').appendChild(df);
          //make the first one current
          document.querySelector('.slideshow-item').classList.add('current');
          //save the array of items
          slideshow.items = document.querySelectorAll('.slideshow-item');
          //start the slideshow moving
          slideshow.start();
      },
      createItem: function(item, index){
          let div = document.createElement('div');
          div.classList.add('slideshow-item');
          div.setAttribute('data-index', index);
          let title = document.createElement('h1');
          title.textContent = item.title;
          div.appendChild(title);
          let img = document.createElement('img');
          img.src = './img/' + item.img;
          div.appendChild(img);
          let p = document.createElement('p');
          p.textContent = item.msg;
          div.appendChild(p);
          return div;
      },
      switchItem: function(index, ev){
          if(ev){
              ev.preventDefault();
          }
          let current = document.querySelector('.current')
          current.classList.remove('current');
          current.classList.add('leaving');
          setTimeout(()=>{
              current.classList.remove('leaving');
          }, 800);
          slideshow.items[index].classList.add('current');
      },
      start: function(){
          slideshow.timmy = setInterval(()=>{
              let [first, ...rest] = slideshow.items;
              slideshow.items = [...rest, first];
              slideshow.switchItem(0);
          }, slideshow.delay);
      }
  }
  document.addEventListener('DOMContentLoaded', slideshow.init);
})();