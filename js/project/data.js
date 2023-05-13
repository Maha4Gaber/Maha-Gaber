let prjectsDB = [
  {
    id:1,
    name: "Pato Resturant",
    img: 'pato1.png',
    imgs: ['pato1.PNG','pato2.png','pato3.png','pato6.PNG','pato5.png','pato4.PNG'],
    tools:['Vuejs','Vuex','Json Server','Bootstrapt','Axios','Validation'],
    desc: `A website that display the restaurants products to you ,informational 
    abut restaurant,people's opinions,each product separately you can leave comments,you can make an order for any product if
      you don't have an account you must register first then make the order ,finally you can leave a feedback.`,
    gith: 'http://github.com/Maha4Gaber/Connoisseur',
    video: "Pato",
    filter:"react"
  },
  {
    id:2,
    name: "Connoisseur Resturant",
    img: 'Connoisseur1.png',
    imgs: ['Connoisseur1.png','Connoisseur2.png','Connoisseur3.png','Connoisseur4.PNG','Connoisseur5.png','Connoisseur6.PNG'],
    tools:['Vuejs','Vuex','Json Server','Bootstrapt','Axios','Validation'],
    desc: `A website that display the restaurants products to you ,informational 
    abut restaurant,people's opinions,each product separately you can leave comments,you can make an order for any product if
      you don't have an account you must register first then make the order ,finally you can leave a feedback.`,
    gith: 'http://github.com/Maha4Gaber/Connoisseur',
    video: "5",
    filter:"vue"
  },
  {
    id:3,
    name: "عقارات",
    img: 'last1.png',
    imgs: ['last1.png','last2.png','last3.png','last4.png','last5.png','last6.png'],
    tools:["React.JS",  "Bootstrap","Api - Sanity.IO","html",  "css"],
    desc:"An example  for using some features in  React.js like <br> 1- Add To favorites  Using Redux-Toolkit <br> 2- language switcher using react.i8next <br> 3- Save Mood Light Or Dark - redux persist <br> 4- Search In Products With Search Query URL <br> 5 - Api - Sanity.IO Api Groq Lang Like Graphql as Backend",
    gith: 'http://github.com/Maha4Gaber/React_Project_1',
    video: "last",
    filter:"react"
  },
  {
    id:4,
    name: "OnlineShop",
    img: 'OnlineShop11.png',
    imgs: ['OnlineShop11.png','OnlineShop2.png','OnlineShop3.png','OnlineShop4.png','OnlineShop5.png','OnlineShop6.png'],
    tools:["React.JS",  "Bootstrap","FackApi",'Axios',"html",  "css"],
    desc:"An example for use Fake API with vueJs",
    gith: 'http://github.com/Maha4Gaber/OnlineShop',
    live: "https://maha4gaber.github.io/OnlineShop/",
    filter:"react"
  },
  
  {
    id:5,
    name: "Ultra Profile",
    img: 'ultra1.png',
    imgs: ['ultra1.png','ultra2.png','ultra3.png','ultra4.png','ultra5.png','ultra6.png'],
    tools:["React.JS",  "Bootstrap","Json server","html",  "css"],
    desc:"Simple app on React JS",
    gith: 'http://github.com/Maha4Gaber/React_Project_1',
    video: "ultra",
    filter:"react"
  },
  {
    id:6,
    name: "Quiz App",
    img: 'quiz1.png',
    imgs: ['quiz1.png','quiz2.png','quiz3.png','quiz4.png','quiz5.png','quiz6.png'],
    tools:["vue.JS",  "Bootstrap","Trivia API",'Axios',"html",  "css"],
    desc:"An example for use API with vueJs",
    gith: 'https://github.com/Maha4Gaber/Quiz-app',
    video: "quiz-app",
    filter:"vue"
  },
  {
    id:7,
    name: "Todo List",
    img: 'todo4.png',
    imgs: ['todo1.png','todo2.png','todo3.png','todo4.png'],
    tools:["html",  "css","vueJs"],
    desc:"An example for crud system with vueJs",
    video: "todo",
    filter:"vue"
  },
  {
    id: 8,
    name: "TIC TAC TOE",
    img: 'xo1.png',
    imgs: ['xo1.png','xo2.png','xo3.png','xo4.png','xo5.png','xo6.png'],
    tools:["Vue JS",  "HTMl","Css","JS"],
    desc:"Simple app on vue JS",
    gith: 'https://github.com/Maha4Gaber/Tic-Tak-Tok',
    video: "XO",
    filter:"vue"
  },
  {
    id: 9,
    name: "Ecomerce with js",
    img: 'app81.png',
    imgs: ['app81.png','app82.png','app83.png','app84.png','app85.png','app86.png'],
    tools:[  "HTMl","Css","JS","localstorage"],
    desc:"E-commerce website using JS and local storage as an alternative to Backand and contains pages such as <br> 1- home page <br> 2- Signup <br> 3- Login <br> 4-Profile <br> 5-Cart <br> 6-Favourites <br> 7-Create New Product <br> 8-Update Product <br>9-My Products",
    gith: 'https://github.com/Maha4Gaber/shopping_97',
    live: 'https://maha4gaber.github.io/shopping_97/',
    filter:"js"
  },
  {
    id: 10,
    name: "Molla Online Shop",
    img: 'app71.png',
    imgs: ['app71.png','app72.png','app73.png','app74.png','app75.png','app76.png'],
    tools:[  "HTMl","Css","JS","bootstrap",'jQuery'],
    desc:"An actual application on JavaScript,  Bootstrap, and the use of some jQuery libraries. It contains pages to display many products with different designs.",
    gith: 'https://github.com/Maha4Gaber/Task_2',
    live: 'https://maha4gaber.github.io/Task_2/',
    filter:"js"
  },
  {
    id: 11,
    name: "BEMAX",
    img: 'app51.png',
    imgs: ['app51.png','app52.png','app53.png','app54.png','app55.png','app56.png'],
    tools:[  "HTMl","Css","JS","bootstrap",'jQuery'],
    desc:"An actual implementation of JavaScript, Bootstrap, and the use of some jQuery libraries",
    gith: 'https://github.com/Maha4Gaber/Task1',
    live: 'https://maha4gaber.github.io/Task1/',
    filter:"js"
  },  
  {
    id: 12,
    name: "Special Design",
    img: 'app61.png',
    imgs: ['app61.png','app62.png','app63.png','app64.png','app65.png','app66.png'],
    tools:[  "JS" ,"HTMl","Css",],
    desc:"Simple practical application of Javascript ",
    gith: 'https://github.com/Maha4Gaber/js',
    live: 'https://maha4gaber.github.io/js/',
    filter:"js"
  },
  {
    id: 13,
    name: "Bondi",
    img: 'bondi1.png',
    imgs: ['bondi1.png','bondi2.png','bondi3.png','bondi4.png','bondi5.png','bondi6.png'],
    tools:["html",  "css",'Bootstrap'],
    desc:"Simple practical application on Bootstrap",
    gith: 'https://github.com/Maha4Gaber/bondi/',
    live: "https://maha4gaber.github.io/bondi/",
    filter:"others"
  },
  {
    id: 14,
    name: "Search Jop",
    img: 'search1.png',
    imgs: ['search1.png','search2.png','search3.png','search4.png','search5.png','search6.png'],
    tools:["html",  "css",'js'],
    desc:"A simple practical application on HTML, CSS, and js, and responsive use to query media, use effects, animations, and filters, with the use of JavaScript in navigation and movement",
    gith: 'http://github.com/Maha4Gaber/Search/',
    live: 'https://maha4gaber.github.io/Search/',
    filter:"js"
  },
  {
    id: 15,
    name: "Template_Thee",
    img: 'app31.png',
    imgs: ['app31.png','app32.png','app33.png','app34.png','app35.png','app36.png'],
    tools:["html",  "css"],
    desc:"Great practical application on HTML, CSS, and responsive use for querying media, using effects, animations, and filters.",
    gith: 'https://maha4gaber.github.io/T3/',
    live: "http://github.com/Maha4Gaber/T3/",
    filter:"others"
  },
  {
    id: 16,
    name: "Kasper",
    img: 'app21.png',
    imgs: ['app21.png','app22.png','app23.png','app24.png','app25.png','app26.png'],
    tools:["html",  "css"],
    desc:"Hands-on HTML, CSS, and responsive use for querying media and using effects",
    gith: 'http://github.com/Maha4Gaber/T2/',
    live: "https://maha4gaber.github.io/T2/",
    filter:"others"
  },
  {
    id: 17,
    name: "Template_One",
    img: 'app1.png',
    imgs: ['app1.png','app2.png','app3.png','app4.png','app5.png','app6.png'],
    tools:["html",  "css"],
    desc:"Practical application on HTML, CSS and responsive use of media query",
    gith: "https://github.com/Maha4Gaber/l1",
    live: 'https://maha4gaber.github.io/l1/',
    filter:"others"
  },
  
  
  {
    id: 18,
    name: "Fintech",
    img: 'app41.png',
    imgs: ['app41.png','app42.png','app43.png','app44.png','app45.png','app46.png'],
    tools:["html",  "css"],
    desc:"Practical application on flex and grid CSS",
    gith: 'https://github.com/Maha4Gaber/fintech/',
    live: "https://maha4gaber.github.io/fintech/",
    filter:"others"
  },
  {
    id: 19,
    name: "Orlando Health",
    img: 'app91.png',
    imgs: ['app91.png','app92.png','app93.png','app94.png','app95.png','app96.png'],
    tools:["html","css"],
    desc:"Using HTML and CSS 2021, create a realistic website application",
    gith: 'https://github.com/Maha4Gaber/Search_Jobs/',
    live: "https://maha4gaber.github.io/Search_Jobs/",
    filter:"others"
  },
  
  
]
