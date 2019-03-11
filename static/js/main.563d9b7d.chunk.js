(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{161:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(18),o=n.n(i),l=(n(49),n(86),n(173)),c=n(175),s=n(176),m=n(5),u=n(6),d=n(9),h=n(7),p=n(10),g=n(71),b=n.n(g),E=(n(126),n(11)),f=n(12);function v(){var e=Object(E.a)(["\n\tbottom: 0;\n\ttext-align: center;\n\tpadding-top:0.5em;\n\tpadding-bottom:0.1em;\n\twhiteSpace: initial;\n\tbackground-color: #000011;\n"]);return v=function(){return e},e}var k=f.b.footer(v()),O=function(){return r.a.createElement(k,null,r.a.createElement("span",{className:"light-blue-text"},"DEVELOPED BY "),r.a.createElement("span",{className:"white-text bolder"}," JONATHAN CHRISTOPHER JAKUB"))};function j(){var e=Object(E.a)(["\n    background: ",";\n    color: ",";\n    font-size: 1em;\n    text-decoration: none;\n    margin: 1em;\n    min-width: 200px;\n    padding: 1em 2.5em;\n    border: 1px solid ",";\n    transition: all 0.3s ease-out;\n\n    & {\n        display: inline-block;\n    }\n      \n    &:after {\n        content: '';\n        width: 0px;\n        height: 2px;\n        display: block;\n        background: ",";\n        transition: 0.5s;\n    }\n      \n    &:hover:after {\n        width: 100%;\n    }\n"]);return j=function(){return e},e}var y=f.b.button(j(),function(e){return e.dark?"#000011":"#9EA8C7"},function(e){return e.dark?"#9EA8C7":"#000011"},function(e){return e.dark?"#9EA8C7":"#000011"},function(e){return e.dark?"#9EA8C7":"#000011"}),w=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(y,{dark:this.props.dark},this.props.children)}}]),t}(r.a.Component),x=n(46),C=n.n(x);function N(){var e=Object(E.a)(["\n    background-color: ","\n    display: flex;\n    padding: 20vh 15vw 20vh 15vw;\n    align-items: center;\n    justify-content: center;\n    text-align: ",";\n    min-width: 100vw;\n    max-width: 100vw;\n    min-height: ","vh;\n"]);return N=function(){return e},e}var S=f.b.div(N(),function(e){return e.dark?"#000011":"#e6e6e6"},function(e){return e.align},function(e){return e.height}),T=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(S,{id:this.props.id,dark:this.props.dark,height:this.props.height,align:this.props.align},this.props.children)}}]),t}(r.a.Component),I=n(26),A=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(T,{dark:!0,height:"90",align:"center",style:{marginTop:-20},id:"intro"},r.a.createElement("div",null,r.a.createElement("h5",{className:"white-text title"},"HELLO, ARE YOU LOOKING FOR ME? I AM"),this.props.loading||r.a.createElement(C.a,{hideCursor:!0},r.a.createElement(C.a.Speed,{ms:10}),r.a.createElement("h1",{className:"light-blue-text mainTitle",style:{marginBottom:30,marginTop:20,fontWeight:"bolder"}},"Jonathan Christopher Jakub")),r.a.createElement("h6",{className:"white-text"},"I want to be a ",r.a.createElement("b",null,"Full-Stack Developer")," and I am interested in",r.a.createElement("b",null," Software Engineering")," and ",r.a.createElement("b",null,"Machine Learning"),".",r.a.createElement("br",null),"Currently a Computer Science student at The University of Indonesia, I still have a lot to learn.."),r.a.createElement("div",{style:{marginTop:30,marginBottom:100}},r.a.createElement(w,{dark:!0},r.a.createElement(I.Link,{to:"about",spy:!0,smooth:!0,offset:-50,duration:1e3},r.a.createElement("span",{className:"bold light-blue-text"},"KNOW MORE"))),r.a.createElement(w,{light:!0},r.a.createElement("a",{href:"https://drive.google.com/uc?export=download&id=1IZhxTWkHtbGeQ-XGn-F-8VG2poMb_TEt",style:{textDecoration:"none"},target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"bold dark-blue-text"},"SEE RESUME"))))))}}]),t}(r.a.Component);function R(){var e=Object(E.a)(["\n    color: ",";\n    font-size: 0.75em;\n    margin: 0.5em 0.3em;\n    min-width: 100px;\n    padding: 0.5em 0.65em;\n    border-radius: 0.5em;\n    background-color: #e6e6e6;\n    border: 1.2px solid ",";\n    transition: all 0.1s ease-out;\n\n    &:hover {\n        color: #e6e6e6;\n        background-color: ",";\n    }\n"]);return R=function(){return e},e}var L=f.b.button(R(),function(e){return e.blue?"#000011":"#821f03"},function(e){return e.blue?"#000011":"#821f03"},function(e){return e.blue?"#000011":"#821f03"}),M=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(L,{blue:this.props.blue},this.props.children)}}]),t}(r.a.Component),D=["PYTHON3","JAVA","JS","HTML5","CSS4","RUBY","MATLAB"],J=["WEB DEV","DATA STRUCTURES","MICRO SERVICES","INTELLIGENT SYSTEMS","DESIGN PATTERNS","TDD","CI/CD"],G=["DJANGO","DJANGOREST","REACT","GIT","AUTH0","SPRING","VSCODE"],B=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(T,{light:!0,height:"100",align:"center",id:"about"},r.a.createElement("div",null,r.a.createElement("h5",{className:"dark-blue-text title"},"ABOUT ME"),r.a.createElement("h6",{className:"dark-blue-text",style:{marginTop:20,marginBottom:40}},"I am a learning ",r.a.createElement("b",null,"Full-Stack developer"),", previously experiencing working in the ",r.a.createElement("b",null,"backend"),", now engaging ",r.a.createElement("b",null,"frontend")," developing. I love programming and I love to learn how to code all things exciting. In addition to my programming skills, I am also in possession of good ",r.a.createElement("b",null,"social")," and ",r.a.createElement("b",null,"communication")," skills. On top of that, I am a dedicated worker who enjoys ",r.a.createElement("b",null,"working in a team"),", making me a good addition to any working team I am put into. I am ",r.a.createElement("b",null,"passionate")," and ",r.a.createElement("b",null,"eager")," to learn and deliver ",r.a.createElement("b",null,"high-quality")," work."),r.a.createElement("div",null,D.map(function(e){return r.a.createElement(M,{red:!0},e)})),r.a.createElement("div",null,G.map(function(e){return r.a.createElement(M,{blue:!0},e)})),r.a.createElement("div",null,J.map(function(e){return r.a.createElement(M,{red:!0},e)}))))}}]),t}(r.a.Component),P=n(162),U=n(163),z=n(164),W=n(165),H=n(47),F=n.n(H);function q(){var e=Object(E.a)(["\n    position:  absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n"]);return q=function(){return e},e}function V(){var e=Object(E.a)(["\n    position: relative;\n    width:27px;\n    background-color: ",';;\n    border-radius: 50%;\n    float: right;\n    margin: 0.5em 0.5em 0.5em auto;\n\n    &:before{\n        content: "";\n        display: block;\n        padding-top: 100%;\n    }\n']);return V=function(){return e},e}function Y(){var e=Object(E.a)(["\n    margin: 1em 0.5em;\n    position: relative;\n"]);return Y=function(){return e},e}var K=f.b.div(Y()),X=f.b.div(V(),function(e){return e.dark?"#000011":"#9EA8C7"}),_=f.b.div(q()),Q={backgroundColor:"#091628",borderRadius:0,borderColor:"#091628",paddingTop:0,paddingBottom:25,color:"#9EA8C7"},Z=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e;return e=""!==this.props.gitrepo?r.a.createElement("a",{href:this.props.gitrepo},r.a.createElement("img",{src:F.a,alt:"Repo",style:{width:16,margin:2}})):r.a.createElement("a",null,r.a.createElement("img",{src:F.a,alt:"Repo",style:{width:16,margin:2}})),r.a.createElement(K,null,r.a.createElement("div",null,r.a.createElement(P.a,{className:"project-card",style:Q},r.a.createElement(X,{dark:this.props.dark},r.a.createElement(_,null,e)),r.a.createElement(U.a,{style:{paddingTop:0,textAlign:"left"}},r.a.createElement(z.a,null,r.a.createElement("h3",null,this.props.title)),r.a.createElement(W.a,null,this.props.children)))))}}]),t}(r.a.Component),$=[{title:"CareShare",gitrepo:"https://gitlab.com/Jonathanjojo/careshare",content:"CareShare is a crowdfunding application simulator. It was an assigned project for Web Development Course I took in college. I managed to lead a group of four on completing the task with satisfying results and delivered quality.",dark:!1},{title:"Store Manager",gitrepo:"https://github.com/WebStoreGroup/Web-Store-Manager",content:"Web Store Manager is the back end side of a 3-man team project. It is designed to be a usable template for online stores to monitor, display, and manage their own online store through a website: admin dashboard and customer views.",dark:!1},{title:"Portfolio Web",gitrepo:"https://jonathanjojo19.github.io/",content:"This very web you are visiting is one of my own personal project. It kickstarted my experience on developing the frontend side of a web with React JS. Feel free to explore this web and get to know me if you are interested.",dark:!1},{title:"ReversAI",gitrepo:"",content:"ReversAI is an AI-Powered reversi player agent. Using an adversarial search technique : the MiniMax Algorithm. The agent will try to maximize its success while preventing the opponent to prevail on every turn. This project is still on progress.",dark:!0},{title:"Impulse",gitrepo:"",content:"Impulse is a To-Do Assistant Manager that takes shape as a Line Bot. It is built with Java Spring Frameworks as an implementation of taught Design Patterns and Microservices. This project is still on progress. ",dark:!0},{title:"Coming Soon",gitrepo:"",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",dark:!0}],ee=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(T,{dark:!0,height:"100",align:"center",id:"projects"},r.a.createElement("div",null,r.a.createElement("h5",{className:"light-blue-text title",style:{marginBottom:20}},"PROJECTS"),r.a.createElement("div",{className:"row justify-contents-start"},$.map(function(e){var t=e.title,n=e.subtitle,a=e.gitrepo,i=e.content,o=e.dark;return r.a.createElement("div",{className:"col-md-4"},r.a.createElement(Z,{title:t,subtitle:n,gitrepo:a,dark:o},r.a.createElement("span",{className:"white-text"},i)))}))))}}]),t}(r.a.Component),te=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(T,{dark:!0,height:"100",align:"center",id:"experiences"},r.a.createElement("div",null,r.a.createElement("h5",{className:"white-text title"},"ACHIEVEMENTS & EXPERIENCES")))}}]),t}(r.a.Component),ne=n(75),ae=n.n(ne),re=n(76),ie=n.n(re),oe=n(77),le=n.n(oe),ce=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(T,{light:!0,height:"50",id:"contacts",align:"center"},r.a.createElement("div",{style:{wordWrap:"break-word",whiteSpace:"initial"}},r.a.createElement("h4",{className:"dark-blue-text title"},"LET'S GET IN TOUCH WITH ME!"),r.a.createElement("h1",{className:"dark-blue-text bolder",style:{whiteSpace:"initial"}},"Jonathan Christopher Jakub"),r.a.createElement("br",null),r.a.createElement("span",{className:"line-wrapped"},r.a.createElement("a",{href:"https://linkedin.com/in/jonathan-christopher-jakub-aba556164/"},r.a.createElement("img",{src:ie.a,alt:"LinkedIn",style:{width:25,marginRight:5,marginLeft:5}})),r.a.createElement("a",{href:"mailto: jonathanchristopher1199@gmail.com"},r.a.createElement("img",{src:ae.a,alt:"Email",style:{width:25,marginRight:5,marginLeft:5}})),r.a.createElement("a",{href:"tel:+6282176854180"},r.a.createElement("img",{src:le.a,alt:"Phone",style:{width:25,marginRight:5,marginLeft:5}})))))}}]),t}(r.a.Component),se=n(32),me=n.n(se),ue=n(17),de=(n(152),[{label:"ABOUT",target:"about"},{label:"EXPERIENCES",target:"experiences"},{label:"PROJECTS",target:"projects"},{label:"CONTACTS",target:"contacts"}]),he=n(167),pe=n(168),ge=n(169),be=n(174),Ee=n(170),fe=n(171),ve=n(172),ke=n(166);function Oe(){var e=Object(E.a)(["\n\ttext-decoration: none;\n\tcolor: inherit;\n\n\t&:hover {\n\t\tcolor: inherit;\n\t\ttext-decoration: none;\n\t}\n"]);return Oe=function(){return e},e}var je=Object(f.b)(ke.a)(Oe()),ye=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).toggle=n.toggle.bind(Object(ue.a)(n)),n.state={isOpen:!1,paddingStyle:{paddingLeft:"10vw ",paddingRight:"10vw "}},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement(he.a,{dark:!0,expand:"md",sticky:"top",className:"dark-bg",style:this.state.paddingStyle},r.a.createElement(pe.a,{href:"#intro"},r.a.createElement(I.Link,{activeClass:"active",to:"intro",spy:!0,smooth:!0,offset:-50,duration:1e3},r.a.createElement("img",{src:me.a,alt:"Logo",style:{width:46,marginTop:2,marginBottom:2,marginRight:10}}),r.a.createElement("span",{class:"spaced"},"Jonathanjojo"))),r.a.createElement(ge.a,{onClick:this.toggle}),r.a.createElement(be.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(Ee.a,{className:"ml-auto",navbar:!0},de.map(function(e){var t=e.label,n=e.target;return r.a.createElement(fe.a,null,r.a.createElement(ve.a,{href:"#"+n},r.a.createElement(I.Link,{activeClass:"active",to:n,spy:!0,smooth:!0,offset:-50,duration:1e3},r.a.createElement("span",{className:"bold spaced"},t))))}),r.a.createElement(fe.a,null,r.a.createElement(ve.a,null,r.a.createElement(je,{to:"/comingsoon"},r.a.createElement("span",{className:"spaced"},"UPCOMING")))))))}}]),t}(r.a.Component),we=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={loading:!0},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"greet",value:function(){var e=(new Date).getHours();return e<12?"Good Morning":e<18?"Good Afternoon":"Good Evening"}},{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.setState({loading:!1})},2e3)}},{key:"render",value:function(){var e=this.state.loading;return r.a.createElement(b.a,{loading:e,bgColor:"#000011",spinnerColor:"#9EA8C7",textColor:"#e6e6e6",logoSrc:me.a,text:this.greet()},r.a.createElement("div",{className:"dark-bg"},r.a.createElement(ye,null),r.a.createElement(A,{loading:e}),r.a.createElement(B,null),r.a.createElement(ee,null),r.a.createElement(te,null),r.a.createElement(ce,null),r.a.createElement(O,null)))}}]),t}(r.a.Component);function xe(){var e=Object(E.a)(["\n    &,\n    color: white;\n    text-decoration:underline;\n    text-decoration-color: grey;\n\n    &:visited {\n        color: white;\n        text-decoration-color: grey;\n    }\n    &:hover {\n        text-decoration-color: white;\n        transition: text-decoration 0.3s ease-out;\n    }\n"]);return xe=function(){return e},e}var Ce=Object(f.b)(ke.a)(xe()),Ne=function(e){var t=e.label,n=e.target;return r.a.createElement(Ce,{to:n},t)},Se=function(){return r.a.createElement(T,{dark:!0,height:"100",align:"left",id:"comingsoon"},r.a.createElement("div",null,r.a.createElement("h1",{className:"dark-grey-text single-string-page"},"Under",r.a.createElement("span",{className:"light-blue-text"},r.a.createElement("wbr",null),"Construction")),r.a.createElement("h2",{className:"white-text",style:{paddingLeft:5}},"Pretty curious, aren't you?"),r.a.createElement("span",{className:"light-blue-text",style:{paddingLeft:5}},"For now, just explore "," ",r.a.createElement(Ne,{target:"../",label:"here"}))))},Te=function(){return r.a.createElement(T,{dark:!0,height:"100",align:"left",id:"notfound"},r.a.createElement("div",null,r.a.createElement("h1",{className:"dark-grey-text single-string-page"},"404 ",r.a.createElement("span",{className:"light-blue-text"},"Page Not Found")),r.a.createElement("h2",{className:"white-text"},"You seem like a hefty wanderer.."),r.a.createElement("span",{className:"light-blue-text"},"And a lost one too, come "," ",r.a.createElement(Ne,{target:"../",label:"here"}))))},Ie=n(21),Ae="pushState"in window.history,Re=function(){return r.a.createElement(l.a,{forceRefresh:!Ae},r.a.createElement(c.a,{render:function(e){var t=e.location,n=t.pathname.split("/")[1]||"/";return r.a.createElement(Ie.TransitionGroup,{transitionName:"fade",component:"main",className:"page-main"},r.a.createElement(Ie.CSSTransition,{key:n,timeout:{enter:500,exit:300},classNames:"fade",appear:!0},r.a.createElement("section",{className:"page-main-inner"},r.a.createElement(c.a,{location:t,render:function(){return r.a.createElement(s.a,null,r.a.createElement(c.a,{exact:!0,path:"/",component:we}),r.a.createElement(c.a,{exact:!0,path:"/comingsoon",component:Se}),r.a.createElement(c.a,{component:Te}))}}))))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Le(){var e=Object(E.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Karla:400,400i,700,700i|Lora:400,400i,700,700i');\n  \n  /* CSS Reset by https://alligator.io/css/minimal-css-reset/ */\n\n  html {\n    box-sizing: border-box;\n    font-size: 16px;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  ol, ul {\n  }\n\n  img {\n    max-width: 100%;\n    height: auto;\n  }\n\n  html,\n  body {\n    min-height: 100vh;\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  a {\n    font-family: 'Avenir LT Std 35 Light'\n  }\n\n  body {\n    background: #000011;\n  }\n\n  h1 {\n    font-size: 6em;\n  }\n  h2 {\n    font-size: 3em;\n  }\n  h3 {\n    font-size: 2.5em;\n  }\n  h4 {\n    font-size: 2em;\n  }\n  h5 {\n    font-size: 1.5em;\n  }\n  h6 {\n    font-size: 1em;\n  }\n  p {\n    font-size: 0.75em;\n  }\n"]);return Le=function(){return e},e}var Me=Object(f.a)(Le());o.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(Me,null),r.a.createElement(Re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},32:function(e,t,n){e.exports=n.p+"static/media/logo.ff831b7e.svg"},47:function(e,t,n){e.exports=n.p+"static/media/git.16386f3f.svg"},75:function(e,t,n){e.exports=n.p+"static/media/emailLogo.cbfc1856.svg"},76:function(e,t,n){e.exports=n.p+"static/media/linkedin.0885e695.svg"},77:function(e,t,n){e.exports=n.p+"static/media/phoneLogo.30d83d67.svg"},81:function(e,t,n){e.exports=n(161)},86:function(e,t,n){}},[[81,1,2]]]);
//# sourceMappingURL=main.563d9b7d.chunk.js.map