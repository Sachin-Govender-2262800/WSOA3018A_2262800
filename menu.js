const menuItems = [
{title: "HomePage", link: "/"},
{title: "About", link: "/about"},
{title: "Blogs", link: "/blogs"},
{title: "SideWorks", link: "/otherWorks"},
{title: "Contact at", link: "/contact"},

];


const IntialiseMenu = () => {

    const nav = document.querySelector("nav");

    const ul = document.createElement("ul");

    for(let item of menuItems()){
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.innerText = item.title;
        a.href = item.link;

        li.appendChild(a);
        ul.appendChild(li);
    }
        
nav.appendChild(ul);


    };



document.addEventListener('DOMContentLoaded', () => IntialiseMenu() );