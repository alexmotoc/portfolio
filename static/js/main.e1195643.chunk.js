(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{36:function(t,e,a){t.exports=a(48)},41:function(t,e,a){},48:function(t,e,a){"use strict";a.r(e);var i=a(0),o=a.n(i),n=a(30),c=a.n(n),r=(a(41),a(19)),s=a(3),l=a(31),m=a.n(l),h=a(65),p=function(){return i.createElement("main",{className:"home"},i.createElement(h.a,{className:"portfolio-container",maxWidth:"md"},i.createElement("h1",{className:"home-title"},"Hi, I'm Alex ",i.createElement("span",{role:"img","aria-label":"Waving Hand"},"\ud83d\udc4b")),i.createElement(m.a,{className:"home-description",strings:["I code and take photographs."],typeSpeed:50})))},f=a(66),u=a(33),d=a.n(u),b=a(32),y=a.n(b),g=function(){return i.createElement(h.a,{className:"portfolio-container about-container",maxWidth:"md"},i.createElement("h1",null,"About Me"),i.createElement("hr",{className:"hr-medium"}),i.createElement(f.a,{className:"about-me-container",container:!0,spacing:5},i.createElement(f.a,{className:"profile-picture-container",item:!0,md:6,xs:12},i.createElement("img",{className:"profile-picture",src:"profile-picture.jpg",alt:"Profile"})),i.createElement(f.a,{item:!0,md:6,xs:12},i.createElement("p",null,"I am an ",i.createElement("strong",null,"MEng Computer Science")," graduate from ",i.createElement("strong",null,"University of Warwick")," who currently works as a ",i.createElement("strong",null,"software engineer"),"."),i.createElement("p",null,"My most notable achievements as a student include:"),i.createElement("ul",null,i.createElement("li",null,i.createElement("strong",null,"Outstanding Overall Performance by a Graduating Student,")),i.createElement("li",null,i.createElement("strong",null,"Warwick Volunteers Certificate of Completion (100 hours as Technology Volunteers Project Leader),")),i.createElement("li",null,i.createElement("strong",null,"Deutsche Bank Campus (1st Place),")),i.createElement("li",null,i.createElement("strong",null,"Morgan Stanley Runner Up (Overall Academic Results in 1st Year)."))),i.createElement("p",null,"I am a strong advocate of attention to detail which is an important part of my philosophy when crafting any new product or experience. This complements my willigness to supplement effort to produce better results."),i.createElement("p",null,"My purchase of an entry-level DSLR turned me into an ",i.createElement("strong",null,"amateur photographer")," at the end of my final year of studies. The process of learning more about composition and colour grading encouraged me to contribute my early work to ",i.createElement("a",{className:"link",href:"https://unsplash.com/@alexmotoc"},"Unsplash")," where people can use it for free. My pictures have been seen ",i.createElement("strong",null,"65M+")," times and downloaded ",i.createElement("strong",null,"200K+")," times. You can find a selection of my favourite collections in this portfolio. Hope you like them!"),i.createElement("div",{className:"location-container"},i.createElement(y.a,{className:"location-icon"}),i.createElement("p",null,"London, UK"))),i.createElement(f.a,{className:"contact-container",item:!0,md:12,xs:12},i.createElement("h2",null,"Connect"),i.createElement("a",{href:"mailto:alexmotoc97@gmail.com"},i.createElement(d.a,{className:"email-icon"})),i.createElement("hr",{className:"social-media-separator"}),i.createElement("div",null,[{name:"Instagram",url:"https://www.instagram.com/alexmotoc/"},{name:"GitHub",url:"https://github.com/alexmotoc"},{name:"LinkedIn",url:"https://www.linkedin.com/in/alex-motoc/"}].map((function(t){return i.createElement("a",{key:t.name,href:t.url},i.createElement("img",{className:"social-media-icon",src:"social-media/".concat(t.name.toLowerCase(),"-icon.svg"),alt:"".concat(t.name," Icon")}))}))))))},x=a(22),E=a(13),w=function(t){return i.createElement(E.a.path,Object.assign({fill:"transparent",strokeWidth:"3",stroke:"#fff",strokeLinecap:"round",opacity:"0.87"},t))},M=function(t){var e=t.toggle;return i.createElement("button",{onClick:e},i.createElement("svg",{width:"23",height:"23",viewBox:"0 0 23 23"},i.createElement(w,{variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),i.createElement(w,{d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:.87},open:{opacity:0}},transition:{duration:.1}}),i.createElement(w,{variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})))},O={open:{y:0,opacity:1,transition:{y:{stiffness:1e3,velocity:-100}}},closed:{y:50,opacity:0,transition:{y:{stiffness:1e3}}}},j=function(t){var e=t.item;return i.createElement("li",{className:"navbar-li"},i.createElement(E.a.a,{className:"menu-item",variants:O,whileHover:{scale:1.1},whileTap:{scale:.95},href:e.url||"/".concat(e.name.toLowerCase())},e.name.toUpperCase()))},W={open:{transition:{staggerChildren:.07,delayChildren:.2}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}},H=[{name:"Home",url:"/"},{name:"About"},{name:"Photography"}],q=function(){return i.createElement(E.a.ul,{className:"navbar-ul",variants:W},H.map((function(t,e){return i.createElement(j,{item:t,key:e})})))},B={open:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3;return{clipPath:"circle(".concat(2*t+200,"px at 40px 40px)"),transition:{type:"spring",stiffness:20,restDelta:2}}},closed:{clipPath:"circle(30px at 40px 40px)",transition:{delay:.5,type:"spring",stiffness:400,damping:40}}},v=function(){var t=Object(E.b)(!1,!0),e=Object(x.a)(t,2),a=e[0],o=e[1],n=Object(i.useRef)(null),c=function(t){var e=Object(i.useRef)({width:0,height:0});return Object(i.useEffect)((function(){e.current.width=t.current.offsetWidth,e.current.height=t.current.offsetHeight}),[]),e.current}(n).height;return i.createElement(E.a.nav,{initial:!1,animate:a?"open":"closed",custom:c,ref:n},i.createElement(E.a.div,{className:"background",variants:B}),i.createElement(q,null),i.createElement(M,{toggle:function(){return o()}}))},D=a(34),J=a.n(D),Q=[{title:"Black Lives Matter",description:"The Black Lives Matter protests that took place in Leamington Spa in 2020 on June 20th and July 18th. People marched on the streets to fight against racism following George Floyd's death.",thumbnail:"https://images.unsplash.com/photo-1592687632657-a5513c20565b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",thumbnailSize:8,images:["https://images.unsplash.com/photo-1592686954679-0f3a55e0912c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1592686954597-02034c0cbc8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1592688801069-9c2003d87d60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1592687632657-a5513c20565b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80","https://images.unsplash.com/photo-1592687951900-2f79a48eb863?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1592690615642-efd92da3c6c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1592814987030-a0248ad7af15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1595089981398-7c7553a4b89f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1595089981351-93dfb02246c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"]},{title:"Leamington Spa",description:"The place I called home for my last year of university. This lovely town allowed me to get my first taste into street photography.",thumbnail:"https://images.unsplash.com/photo-1593715868791-b76b61f25dd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",images:["https://images.unsplash.com/photo-1595693735777-c5cc6e223283?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1593715868791-b76b61f25dd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1592331693067-2e16a3fae6d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1591982231641-e96f6dff5ad6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1589974780034-e879c0ac604d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1586295334087-e86c431364c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1585859788077-cbac2c9f9683?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1585859787767-0edca5a57108?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1581799848741-f8e7fc0cd5ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1578743097957-cd16c0bce394?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1578743694200-50741f076b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"]},{title:"Covid-19 Pandemic",description:"A time when every place seemed like a ghost town and even the busiest high streets were completely empty in the middle of the day. The silence presented the perfect opportunity to reflect.",thumbnail:"https://images.unsplash.com/photo-1585166169032-551d4ea843fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",images:["https://images.unsplash.com/photo-1589062119833-c2dbba63b3e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1586461116078-e2edf63f6ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1586291264909-af62e614e41c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1585166169032-551d4ea843fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1585166169100-f22fe1b7e916?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1586117642595-e09f1f2a1ae6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"]},{title:"Varsity Rugby",description:"The women's and men's rugby matches between Warwick University and Coventry University at the Butts Park Arena that took place during the 19/20 academic year.",thumbnail:"https://images.unsplash.com/photo-1582547338246-d3e9552e5a98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",images:["https://images.unsplash.com/photo-1582546997211-e1d66ede4257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1582546996635-dc0640f8eb26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1582546997681-3791bf0f0210?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1582546997727-4ffbdce14ea3?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1582547221464-cded2221cbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1582547221292-b5a3e3562dc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1582547221270-75f62358c60c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1582547221376-05220c0c897b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1582547221676-44fff7ad6276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1582547337991-a9c321aff307?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1582547338019-c7959eb09a8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1582547337995-5a2f0ab76316?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1582547338118-6003aba69e9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1582547338338-6781e16014dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1582547338246-d3e9552e5a98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"]},{title:"University of Warwick",description:"A campus university might feel segregated from the rest of the world, but that does not make it any less pretty. This is my take on some of the iconic places that everyone who studied here should recognise.",thumbnail:"https://images.unsplash.com/photo-1568294482044-c15fbef47118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",images:["https://images.unsplash.com/photo-1581100923924-7e4e234392ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1579114930376-c25fea4aa9e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1579114930369-7dd4b5e08bc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1575410064085-c38631686a2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1572630939696-c6e5e84867e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1568294482044-c15fbef47118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"]},{title:"Copenhagen",description:"Colourful buildings and lively Christmas markets. While the cold, desaturated tones might not do them enough justice, you will have to take my word for it.",thumbnail:"https://images.unsplash.com/photo-1575830137428-74cc35757357?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",images:["https://images.unsplash.com/photo-1575830137428-74cc35757357?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1575827845843-fc14605d2794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1575831474368-02cc81ba7b7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1575827629291-44da68ac71f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1575910884848-adf33f3f9fd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1576443181922-781809c4df6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1575910884532-05085e50485e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2667&q=80"]},{title:"Food",description:"Despite many finding it time consuming, cooking is an extremely rewarding activity. These are the rare ocassionas when I was patient enough to photograph the end product and not dive straight in.",thumbnail:"https://images.unsplash.com/photo-1587394214315-85d8f8d6bf5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",thumbnailSize:8,images:["https://images.unsplash.com/photo-1587841424505-4205a6e73ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1587389302738-ba24966817d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1587678711204-ca6d3d2f1f3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1588594304698-929973f189dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"]}],k=function(t){return i.createElement(h.a,{className:"portfolio-container",maxWidth:"sm"},i.createElement("h1",{className:"collection-title"},t.title),i.createElement("hr",{className:"hr-medium"}),i.createElement("p",null,t.description),t.images.map((function(e){return i.createElement("img",{key:e,className:"collection-image",src:e,alt:t.title})})),i.createElement("div",{className:"back-container"},i.createElement(J.a,null),i.createElement("a",{className:"link back-text",href:"/photography"},"BACK TO PHOTOGRAPHY")))},N=a(68),C=function(t){var e=Object(s.f)(),a=Object(s.h)(),o=i.useState(!1),n=Object(x.a)(o,2),c=n[0],r=n[1],l=function(){r(!0)};return i.createElement(N.a,{className:"image-tile",onClick:function(){return i="".concat(a.path,"/").concat(t.title.toLowerCase().split(" ").join("-")),void e.push(i);var i},key:t.title,component:f.a,item:!0,md:t.thumbnailSize||4,xs:12,cols:t.thumbnailSize?t.thumbnailSize/4:1},i.createElement("img",{onMouseEnter:l,onMouseLeave:function(){r(!1)},style:{opacity:c?.6:1},className:"collection-thumbnail",src:t.thumbnail,alt:t.title}),c&&i.createElement("span",{onMouseEnter:l,className:"collection-thumbnail-title"},t.title))},L=a(67),S=function(){return i.createElement(i.Fragment,null,i.createElement(h.a,{className:"portfolio-container",maxWidth:"md"},i.createElement("h1",null,"Photography"),i.createElement("hr",{className:"hr-medium"}),i.createElement(L.a,{component:f.a,spacing:0,container:!0,cellHeight:400,cols:3},Q.map((function(t){return i.createElement(C,Object.assign({key:t.title},t))})))))},T=function(){var t=Object(s.g)().pathname;return i.useEffect((function(){window.scrollTo(0,0)}),[t]),null};var P=function(){return o.a.createElement(r.a,null,o.a.createElement(T,null),o.a.createElement(v,null),o.a.createElement(s.c,null,o.a.createElement(s.a,{exact:!0,path:"/"},o.a.createElement(p,null)),Q.map((function(t){return o.a.createElement(s.a,{exact:!0,key:t.title,path:"/photography/".concat(t.title.toLowerCase().split(" ").join("-"))},o.a.createElement(k,t))})),o.a.createElement(s.a,{exact:!0,path:"/photography"},o.a.createElement(S,null)),o.a.createElement(s.a,{exact:!0,path:"/about"},o.a.createElement(g,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.e1195643.chunk.js.map