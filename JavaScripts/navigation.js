const HomeNav = [
    {title: "HomePage",link:"index.html"},
    {title: "About",link:"about/about.html"},
    {title: "Blogs",link:"BlogPages/blogs.html"},
    {title: "SideWorks",link:"OtherWorks/OtherWorks.html"},
    {title: "Contact at",link:"Contact/contact.html"},
   ];

window.addEventListener('DOMContentLoaded',(event) =>{
       renderMenu();
});

const renderMenu = () =>{
    const navul = document.querySelector(".HomeNav");
    HomeNav.forEach(item => {
        
        const newItem = document.createElement("li");
        const newLink = document.createElement("a");
        newLink.href = item.link;
        newLink.text = item.title;
newItem.appendChild(newLink);
navul.appendChild(newItem)


    });
}

document.addEventListener('DOMContentLoaded', () => IntialiseMenu() );


/*
const HomeNav= [
    {title: "HomePage",link:"index.html"},
    {title: "About",link:"about/about.html"},
    {title: "Blogs",link:"BlogPages/blogs.html"},
    {title: "SideWorks",link:"OtherWorks/OtherWorks.html"},
    {title: "Contact at",link:"Contact/contact.html"},
 ];



 window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    renderMenu();
 });
 


 const renderMenu = ()=> {
     let pathPrefix = window.location.pathname === "/WSOA3018A_2262800/" ? './' : '../'
    const navBar = document.querySelector(".HomeNav");
   
    
    menuItems.forEach(item =>  {
        
        
        const newItem = document.createElement("li");
        const newLink = document.createElement("a");
        newLink.href = pathPrefix + item.link; 
        newLink.text = item.title;
        newItem.appendChild(newLink);
        navBar.appendChild (newItem);
    });

 };
 */