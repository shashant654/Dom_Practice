// let x ;
// x = document.getElementById('para')

// console.log(x);

// let x ;
// x = document.getElementsByClassName('items')

// console.log(x);

// let x ;
// x = document.getElementsByTagName('h1')

// console.log(x);

// let x ;
// x = document.querySelector('.items')
// // querySelector gives first element
// console.log(x);

// let x ;
// x = document.querySelector('p')
// // querySelector gives first element
// console.log(x);

// let x ;
// x = document.querySelector('#list')
// // querySelector gives first element
// console.log(x);

// let x ;
// x = document.querySelectorAll('.items')
// console.log(x);
// ------------------------------------------------------------

// let x
// x = document.createElement('li')
// x.className = 'items'
// x.innerText = 'Item 6'
// x.style.color = 'green'
// let ul = document.getElementById('list')
// ul.append(x)
// console.log(ul);
// ------------------------------------------------------------

// var items = document.getElementsByTagName('li')

// for (let i = 0;i< items.length; i++){
//           const item = items[i]

//           let link = item.querySelector('a')
//           link.setAttribute('href','https://www.google.com/searching?q=' + link.innerText)
//           // we just want to write like <a href=something""> MovieName</a>
//           console.log(link);
// }
// console.log(items);

// ------------------------------------------------------------

// let y = document.createElement('h2')

// var body = document.getElementsByTagName('body')[0]
// y.innerText = "heading 2"

// body.append(y)

// console.log(body);
// console.log(y);

// ------------------------------------------------------------
// select the current link css tag
// remove the css link tag
// create a new link tag
// add the new href
// append if to the haed
// ------------------------------------------------------------

function ChangeTheme() {
  let head = document.getElementsByTagName("head")[0];

  let linkTag = document.getElementById("css");
  console.log(linkTag);
  console.log(head);

  head.removeChild(linkTag);
  // create a new linnktag to apply new css
  let newLinkTag = document.createElement("link");
  newLinkTag.setAttribute("id", "cssnew");
  newLinkTag.setAttribute("rel", "stylesheet");
  newLinkTag.setAttribute("href", "dark.css");

  console.log(newLinkTag);
  head.appendChild(newLinkTag);
}
