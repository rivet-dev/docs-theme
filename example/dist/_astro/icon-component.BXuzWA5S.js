import{r as ca,R as Wa}from"./index.fuYhrp8s.js";import"./clsx.Bq1LokoP.js";function Bo(){const[a,n]=ca.useState("");return ca.useEffect(()=>{const t=()=>n(window.location.pathname);return t(),document.addEventListener("astro:page-load",t),()=>document.removeEventListener("astro:page-load",t)},[]),a}/*!
 * Font Awesome Free 7.3.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */function Pa(a,n){(n==null||n>a.length)&&(n=a.length);for(var t=0,e=Array(n);t<n;t++)e[t]=a[t];return e}function Bt(a){if(Array.isArray(a))return a}function qt(a){if(Array.isArray(a))return Pa(a)}function Kt(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function Jt(a,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,Tn(e.key),e)}}function Qt(a,n,t){return n&&Jt(a.prototype,n),Object.defineProperty(a,"prototype",{writable:!1}),a}function fa(a,n){var t=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!t){if(Array.isArray(a)||(t=Ua(a))||n){t&&(a=t);var e=0,r=function(){};return{s:r,n:function(){return e>=a.length?{done:!0}:{done:!1,value:a[e++]}},e:function(f){throw f},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){t=t.call(a)},n:function(){var f=t.next();return o=f.done,f},e:function(f){s=!0,i=f},f:function(){try{o||t.return==null||t.return()}finally{if(s)throw i}}}}function g(a,n,t){return(n=Tn(n))in a?Object.defineProperty(a,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[n]=t,a}function Zt(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function ae(a,n){var t=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(t!=null){var e,r,i,o,s=[],f=!0,u=!1;try{if(i=(t=t.call(a)).next,n===0){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(s.push(e.value),s.length!==n);f=!0);}catch(m){u=!0,r=m}finally{try{if(!f&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(u)throw r}}return s}}function ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function te(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function an(a,n){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),t.push.apply(t,e)}return t}function l(a){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?an(Object(t),!0).forEach(function(e){g(a,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):an(Object(t)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))})}return a}function va(a,n){return Bt(a)||ae(a,n)||Ua(a,n)||ne()}function z(a){return qt(a)||Zt(a)||Ua(a)||te()}function ee(a,n){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var e=t.call(a,n);if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function Tn(a){var n=ee(a,"string");return typeof n=="symbol"?n:n+""}function ma(a){"@babel/helpers - typeof";return ma=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ma(a)}function Ua(a,n){if(a){if(typeof a=="string")return Pa(a,n);var t={}.toString.call(a).slice(8,-1);return t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set"?Array.from(a):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Pa(a,n):void 0}}var nn=function(){},Ya={},_n={},$n=null,Ln={mark:nn,measure:nn};try{typeof window<"u"&&(Ya=window),typeof document<"u"&&(_n=document),typeof MutationObserver<"u"&&($n=MutationObserver),typeof performance<"u"&&(Ln=performance)}catch{}var re=Ya.navigator||{},tn=re.userAgent,en=tn===void 0?"":tn,$=Ya,x=_n,rn=$n,ra=Ln;$.document;var _=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",Mn=~en.indexOf("MSIE")||~en.indexOf("Trident/"),ia,ie=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,oe=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Dn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},se={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Rn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],I="classic",aa="duotone",Wn="sharp",Un="sharp-duotone",Yn="chisel",Xn="etch",Hn="graphite",Gn="jelly",Vn="jelly-duo",Bn="jelly-fill",qn="mosaic",Kn="notdog",Jn="notdog-duo",Qn="pixel",Zn="slab",at="slab-duo",nt="slab-press",tt="slab-press-duo",et="thumbprint",rt="utility",it="utility-duo",ot="utility-fill",st="vellum",ft="whiteboard",fe="Classic",le="Duotone",ue="Sharp",ce="Sharp Duotone",me="Chisel",de="Etch",ge="Graphite",ve="Jelly",pe="Jelly Duo",be="Jelly Fill",he="Mosaic",ye="Notdog",xe="Notdog Duo",we="Pixel",Se="Slab",Ae="Slab Duo",ke="Slab Press",Ie="Slab Press Duo",Pe="Thumbprint",Ee="Utility",ze="Utility Duo",Fe="Utility Fill",Oe="Vellum",Ce="Whiteboard",lt=[I,aa,Wn,Un,Yn,Xn,Hn,Gn,Vn,Bn,qn,Kn,Jn,Qn,Zn,at,nt,tt,et,rt,it,ot,st,ft];ia={},g(g(g(g(g(g(g(g(g(g(ia,I,fe),aa,le),Wn,ue),Un,ce),Yn,me),Xn,de),Hn,ge),Gn,ve),Vn,pe),Bn,be),g(g(g(g(g(g(g(g(g(g(ia,qn,he),Kn,ye),Jn,xe),Qn,we),Zn,Se),at,Ae),nt,ke),tt,Ie),et,Pe),rt,Ee),g(g(g(g(ia,it,ze),ot,Fe),st,Oe),ft,Ce);var je={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Ne={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Te=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),_e={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},ut=["fak","fa-kit","fakd","fa-kit-duotone"],on={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},$e=["kit"],Le="kit",Me="kit-duotone",De="Kit",Re="Kit Duotone";g(g({},Le,De),Me,Re);var We={kit:{"fa-kit":"fak"}},Ue={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ye={kit:{fak:"fa-kit"}},sn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},oa,sa={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Xe=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],He="classic",Ge="duotone",Ve="sharp",Be="sharp-duotone",qe="chisel",Ke="etch",Je="graphite",Qe="jelly",Ze="jelly-duo",ar="jelly-fill",nr="mosaic",tr="notdog",er="notdog-duo",rr="pixel",ir="slab",or="slab-duo",sr="slab-press",fr="slab-press-duo",lr="thumbprint",ur="utility",cr="utility-duo",mr="utility-fill",dr="vellum",gr="whiteboard",vr="Classic",pr="Duotone",br="Sharp",hr="Sharp Duotone",yr="Chisel",xr="Etch",wr="Graphite",Sr="Jelly",Ar="Jelly Duo",kr="Jelly Fill",Ir="Mosaic",Pr="Notdog",Er="Notdog Duo",zr="Pixel",Fr="Slab",Or="Slab Duo",Cr="Slab Press",jr="Slab Press Duo",Nr="Thumbprint",Tr="Utility",_r="Utility Duo",$r="Utility Fill",Lr="Vellum",Mr="Whiteboard";oa={},g(g(g(g(g(g(g(g(g(g(oa,He,vr),Ge,pr),Ve,br),Be,hr),qe,yr),Ke,xr),Je,wr),Qe,Sr),Ze,Ar),ar,kr),g(g(g(g(g(g(g(g(g(g(oa,nr,Ir),tr,Pr),er,Er),rr,zr),ir,Fr),or,Or),sr,Cr),fr,jr),lr,Nr),ur,Tr),g(g(g(g(oa,cr,_r),mr,$r),dr,Lr),gr,Mr);var Dr="kit",Rr="kit-duotone",Wr="Kit",Ur="Kit Duotone";g(g({},Dr,Wr),Rr,Ur);var Yr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Xr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Ea={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Hr=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],ct=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Xe,Hr),Gr=["solid","regular","light","thin","duotone","brands","semibold"],mt=[1,2,3,4,5,6,7,8,9,10],Vr=mt.concat([11,12,13,14,15,16,17,18,19,20]),Br=["aw","fw","pull-left","pull-right"],qr=[].concat(z(Object.keys(Xr)),Gr,Br,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",sa.GROUP,sa.SWAP_OPACITY,sa.PRIMARY,sa.SECONDARY]).concat(mt.map(function(a){return"".concat(a,"x")})).concat(Vr.map(function(a){return"w-".concat(a)})),Kr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},N="___FONT_AWESOME___",za=16,dt="fa",gt="svg-inline--fa",R="data-fa-i2svg",Fa="data-fa-pseudo-element",Jr="data-fa-pseudo-element-pending",Xa="data-prefix",Ha="data-icon",fn="fontawesome-i2svg",Qr="async",Zr=["HTML","HEAD","STYLE","SCRIPT"],vt=["::before","::after",":before",":after"],pt=(function(){try{return!0}catch{return!1}})();function na(a){return new Proxy(a,{get:function(t,e){return e in t?t[e]:t[I]}})}var bt=l({},Dn);bt[I]=l(l(l(l({},{"fa-duotone":"duotone"}),Dn[I]),on.kit),on["kit-duotone"]);var ai=na(bt),Oa=l({},_e);Oa[I]=l(l(l(l({},{duotone:"fad"}),Oa[I]),sn.kit),sn["kit-duotone"]);var ln=na(Oa),Ca=l({},Ea);Ca[I]=l(l({},Ca[I]),Ye.kit);var Ga=na(Ca),ja=l({},Yr);ja[I]=l(l({},ja[I]),We.kit);na(ja);var ni=ie,ht="fa-layers-text",ti=oe,ei=l({},je);na(ei);var ri=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],wa=se,ii=[].concat(z($e),z(qr)),K=$.FontAwesomeConfig||{};function oi(a){var n=x.querySelector("script["+a+"]");if(n)return n.getAttribute(a)}function si(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}if(x&&typeof x.querySelector=="function"){var fi=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];fi.forEach(function(a){var n=va(a,2),t=n[0],e=n[1],r=si(oi(t));r!=null&&(K[e]=r)})}var yt={styleDefault:"solid",familyDefault:I,cssPrefix:dt,replacementClass:gt,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};K.familyPrefix&&(K.cssPrefix=K.familyPrefix);var G=l(l({},yt),K);G.autoReplaceSvg||(G.observeMutations=!1);var d={};Object.keys(yt).forEach(function(a){Object.defineProperty(d,a,{enumerable:!0,set:function(t){G[a]=t,J.forEach(function(e){return e(d)})},get:function(){return G[a]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(n){G.cssPrefix=n,J.forEach(function(t){return t(d)})},get:function(){return G.cssPrefix}});$.FontAwesomeConfig=d;var J=[];function li(a){return J.push(a),function(){J.splice(J.indexOf(a),1)}}var U=za,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ui(a){if(!(!a||!_)){var n=x.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=a;for(var t=x.head.childNodes,e=null,r=t.length-1;r>-1;r--){var i=t[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return x.head.insertBefore(n,e),a}}var ci="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function un(){for(var a=12,n="";a-- >0;)n+=ci[Math.random()*62|0];return n}function B(a){for(var n=[],t=(a||[]).length>>>0;t--;)n[t]=a[t];return n}function Va(a){return a.classList?B(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(n){return n})}function xt(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function mi(a){return Object.keys(a||{}).reduce(function(n,t){return n+"".concat(t,'="').concat(xt(a[t]),'" ')},"").trim()}function pa(a){return Object.keys(a||{}).reduce(function(n,t){return n+"".concat(t,": ").concat(a[t].trim(),";")},"")}function Ba(a){return a.size!==F.size||a.x!==F.x||a.y!==F.y||a.rotate!==F.rotate||a.flipX||a.flipY}function di(a){var n=a.transform,t=a.containerWidth,e=a.iconWidth,r={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:u}}function gi(a){var n=a.transform,t=a.width,e=t===void 0?za:t,r=a.height,i=r===void 0?za:r,o="";return Mn?o+="translate(".concat(n.x/U-e/2,"em, ").concat(n.y/U-i/2,"em) "):o+="translate(calc(-50% + ".concat(n.x/U,"em), calc(-50% + ").concat(n.y/U,"em)) "),o+="scale(".concat(n.size/U*(n.flipX?-1:1),", ").concat(n.size/U*(n.flipY?-1:1),") "),o+="rotate(".concat(n.rotate,"deg) "),o}var vi=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function wt(){var a=dt,n=gt,t=d.cssPrefix,e=d.replacementClass,r=vi;if(t!==a||e!==n){var i=new RegExp("\\.".concat(a,"\\-"),"g"),o=new RegExp("\\--".concat(a,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(s,".".concat(e))}return r}var cn=!1;function Sa(){d.autoAddCss&&!cn&&(ui(wt()),cn=!0)}var pi={mixout:function(){return{dom:{css:wt,insertCss:Sa}}},hooks:function(){return{beforeDOMElementCreation:function(){Sa()},beforeI2svg:function(){Sa()}}}},T=$||{};T[N]||(T[N]={});T[N].styles||(T[N].styles={});T[N].hooks||(T[N].hooks={});T[N].shims||(T[N].shims=[]);var E=T[N],St=[],At=function(){x.removeEventListener("DOMContentLoaded",At),da=1,St.map(function(n){return n()})},da=!1;_&&(da=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),da||x.addEventListener("DOMContentLoaded",At));function bi(a){_&&(da?setTimeout(a,0):St.push(a))}function ta(a){var n=a.tag,t=a.attributes,e=t===void 0?{}:t,r=a.children,i=r===void 0?[]:r;return typeof a=="string"?xt(a):"<".concat(n," ").concat(mi(e),">").concat(i.map(ta).join(""),"</").concat(n,">")}function mn(a,n,t){if(a&&a[n]&&a[n][t])return{prefix:n,iconName:t,icon:a[n][t]}}var Aa=function(n,t,e,r){var i=Object.keys(n),o=i.length,s=t,f,u,m;for(e===void 0?(f=1,m=n[i[0]]):(f=0,m=e);f<o;f++)u=i[f],m=s(m,n[u],u,n);return m};function kt(a){return z(a).length!==1?null:a.codePointAt(0).toString(16)}function dn(a){return Object.keys(a).reduce(function(n,t){var e=a[t],r=!!e.icon;return r?n[e.iconName]=e.icon:n[t]=e,n},{})}function Na(a,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=t.skipHooks,r=e===void 0?!1:e,i=dn(n);typeof E.hooks.addPack=="function"&&!r?E.hooks.addPack(a,dn(n)):E.styles[a]=l(l({},E.styles[a]||{}),i),a==="fas"&&Na("fa",n)}var Z=E.styles,hi=E.shims,It=Object.keys(Ga),yi=It.reduce(function(a,n){return a[n]=Object.keys(Ga[n]),a},{}),qa=null,Pt={},Et={},zt={},Ft={},Ot={};function xi(a){return~ii.indexOf(a)}function wi(a,n){var t=n.split("-"),e=t[0],r=t.slice(1).join("-");return e===a&&r!==""&&!xi(r)?r:null}var Ct=function(){var n=function(i){return Aa(Z,function(o,s,f){return o[f]=Aa(s,i,{}),o},{})};Pt=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),Et=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),Ot=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var t="far"in Z||d.autoFetchSvg,e=Aa(hi,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});zt=e.names,Ft=e.unicodes,qa=ba(d.styleDefault,{family:d.familyDefault})};li(function(a){qa=ba(a.styleDefault,{family:d.familyDefault})});Ct();function Ka(a,n){return(Pt[a]||{})[n]}function Si(a,n){return(Et[a]||{})[n]}function D(a,n){return(Ot[a]||{})[n]}function jt(a){return zt[a]||{prefix:null,iconName:null}}function Ai(a){var n=Ft[a],t=Ka("fas",a);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function L(){return qa}var Nt=function(){return{prefix:null,iconName:null,rest:[]}};function ki(a){var n=I,t=It.reduce(function(e,r){return e[r]="".concat(d.cssPrefix,"-").concat(r),e},{});return lt.forEach(function(e){(a.includes(t[e])||a.some(function(r){return yi[e].includes(r)}))&&(n=e)}),n}function ba(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.family,e=t===void 0?I:t,r=ai[e][a];if(e===aa&&!a)return"fad";var i=ln[e][a]||ln[e][r],o=a in E.styles?a:null,s=i||o||null;return s}function Ii(a){var n=[],t=null;return a.forEach(function(e){var r=wi(d.cssPrefix,e);r?t=r:e&&n.push(e)}),{iconName:t,rest:n}}function gn(a){return a.sort().filter(function(n,t,e){return e.indexOf(n)===t})}var vn=ct.concat(ut);function ha(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.skipLookups,e=t===void 0?!1:t,r=null,i=gn(a.filter(function(p){return vn.includes(p)})),o=gn(a.filter(function(p){return!vn.includes(p)})),s=i.filter(function(p){return r=p,!Rn.includes(p)}),f=va(s,1),u=f[0],m=u===void 0?null:u,c=ki(i),v=l(l({},Ii(o)),{},{prefix:ba(m,{family:c})});return l(l(l({},v),Fi({values:a,family:c,styles:Z,config:d,canonical:v,givenPrefix:r})),Pi(e,r,v))}function Pi(a,n,t){var e=t.prefix,r=t.iconName;if(a||!e||!r)return{prefix:e,iconName:r};var i=n==="fa"?jt(r):{},o=D(e,r);return r=i.iconName||o||r,e=i.prefix||e,e==="far"&&!Z.far&&Z.fas&&!d.autoFetchSvg&&(e="fas"),{prefix:e,iconName:r}}var Ei=lt.filter(function(a){return a!==I||a!==aa}),zi=Object.keys(Ea).filter(function(a){return a!==I}).map(function(a){return Object.keys(Ea[a])}).flat();function Fi(a){var n=a.values,t=a.family,e=a.canonical,r=a.givenPrefix,i=r===void 0?"":r,o=a.styles,s=o===void 0?{}:o,f=a.config,u=f===void 0?{}:f,m=t===aa,c=n.includes("fa-duotone")||n.includes("fad"),v=u.familyDefault==="duotone",p=e.prefix==="fad"||e.prefix==="fa-duotone";if(!m&&(c||v||p)&&(e.prefix="fad"),(n.includes("fa-brands")||n.includes("fab"))&&(e.prefix="fab"),!e.prefix&&Ei.includes(t)){var y=Object.keys(s).find(function(w){return zi.includes(w)});if(y||u.autoFetchSvg){var h=Te.get(t).defaultShortPrefixId;e.prefix=h,e.iconName=D(e.prefix,e.iconName)||e.iconName}}return(e.prefix==="fa"||i==="fa")&&(e.prefix=L()||"fas"),e}var Oi=(function(){function a(){Kt(this,a),this.definitions={}}return Qt(a,[{key:"add",value:function(){for(var t=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){t.definitions[s]=l(l({},t.definitions[s]||{}),o[s]),Na(s,o[s]);var f=Ga[I][s];f&&Na(f,o[s]),Ct()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,u=o.icon,m=u[2];t[s]||(t[s]={}),m.length>0&&m.forEach(function(c){typeof c=="string"&&(t[s][c]=u)}),t[s][f]=u}),t}}])})(),pn=[],X={},H={},Ci=Object.keys(H);function ji(a,n){var t=n.mixoutsTo;return pn=a,X={},Object.keys(H).forEach(function(e){Ci.indexOf(e)===-1&&delete H[e]}),pn.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(t[o]=r[o]),ma(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){t[o]||(t[o]={}),t[o][s]=r[o][s]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(o){X[o]||(X[o]=[]),X[o].push(i[o])})}e.provides&&e.provides(H)}),t}function Ta(a,n){for(var t=arguments.length,e=new Array(t>2?t-2:0),r=2;r<t;r++)e[r-2]=arguments[r];var i=X[a]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(e))}),n}function W(a){for(var n=arguments.length,t=new Array(n>1?n-1:0),e=1;e<n;e++)t[e-1]=arguments[e];var r=X[a]||[];r.forEach(function(i){i.apply(null,t)})}function M(){var a=arguments[0],n=Array.prototype.slice.call(arguments,1);return H[a]?H[a].apply(null,n):void 0}function _a(a){a.prefix==="fa"&&(a.prefix="fas");var n=a.iconName,t=a.prefix||L();if(n)return n=D(t,n)||n,mn(Tt.definitions,t,n)||mn(E.styles,t,n)}var Tt=new Oi,Ni=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,W("noAuto")},Ti={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _?(W("beforeI2svg",n),M("pseudoElements2svg",n),M("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,bi(function(){$i({autoReplaceSvgRoot:t}),W("watch",n)})}},_i={icon:function(n){if(n===null)return null;if(ma(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:D(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var t=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],e=ba(n[0]);return{prefix:e,iconName:D(e,t)||t}}if(typeof n=="string"&&(n.indexOf("".concat(d.cssPrefix,"-"))>-1||n.match(ni))){var r=ha(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||L(),iconName:D(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=L();return{prefix:i,iconName:D(i,n)||n}}}},P={noAuto:Ni,config:d,dom:Ti,parse:_i,library:Tt,findIconDefinition:_a,toHtml:ta},$i=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot,e=t===void 0?x:t;(Object.keys(E.styles).length>0||d.autoFetchSvg)&&_&&d.autoReplaceSvg&&P.dom.i2svg({node:e})};function ya(a,n){return Object.defineProperty(a,"abstract",{get:n}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(e){return ta(e)})}}),Object.defineProperty(a,"node",{get:function(){if(_){var e=x.createElement("div");return e.innerHTML=a.html,e.children}}}),a}function Li(a){var n=a.children,t=a.main,e=a.mask,r=a.attributes,i=a.styles,o=a.transform;if(Ba(o)&&t.found&&!e.found){var s=t.width,f=t.height,u={x:s/f/2,y:.5};r.style=pa(l(l({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function Mi(a){var n=a.prefix,t=a.iconName,e=a.children,r=a.attributes,i=a.symbol,o=i===!0?"".concat(n,"-").concat(d.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:o}),children:e}]}]}function Di(a){var n=["aria-label","aria-labelledby","title","role"];return n.some(function(t){return t in a})}function Ja(a){var n=a.icons,t=n.main,e=n.mask,r=a.prefix,i=a.iconName,o=a.transform,s=a.symbol,f=a.maskId,u=a.extra,m=a.watchable,c=m===void 0?!1:m,v=e.found?e:t,p=v.width,y=v.height,h=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(b){return u.classes.indexOf(b)===-1}).filter(function(b){return b!==""||!!b}).concat(u.classes).join(" "),w={children:[],attributes:l(l({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:h,role:u.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(y)})};!Di(u.attributes)&&!u.attributes["aria-hidden"]&&(w.attributes["aria-hidden"]="true"),c&&(w.attributes[R]="");var S=l(l({},w),{},{prefix:r,iconName:i,main:t,mask:e,maskId:f,transform:o,symbol:s,styles:l({},u.styles)}),A=e.found&&t.found?M("generateAbstractMask",S)||{children:[],attributes:{}}:M("generateAbstractIcon",S)||{children:[],attributes:{}},k=A.children,O=A.attributes;return S.children=k,S.attributes=O,s?Mi(S):Li(S)}function bn(a){var n=a.content,t=a.width,e=a.height,r=a.transform,i=a.extra,o=a.watchable,s=o===void 0?!1:o,f=l(l({},i.attributes),{},{class:i.classes.join(" ")});s&&(f[R]="");var u=l({},i.styles);Ba(r)&&(u.transform=gi({transform:r,width:t,height:e}),u["-webkit-transform"]=u.transform);var m=pa(u);m.length>0&&(f.style=m);var c=[];return c.push({tag:"span",attributes:f,children:[n]}),c}function Ri(a){var n=a.content,t=a.extra,e=l(l({},t.attributes),{},{class:t.classes.join(" ")}),r=pa(t.styles);r.length>0&&(e.style=r);var i=[];return i.push({tag:"span",attributes:e,children:[n]}),i}var ka=E.styles;function $a(a){var n=a[0],t=a[1],e=a.slice(4),r=va(e,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(wa.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(wa.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(wa.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:t,icon:o}}var Wi={found:!1,width:512,height:512};function Ui(a,n){!pt&&!d.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(n,'" is missing.'))}function La(a,n){var t=n;return n==="fa"&&d.styleDefault!==null&&(n=L()),new Promise(function(e,r){if(t==="fa"){var i=jt(a)||{};a=i.iconName||a,n=i.prefix||n}if(a&&n&&ka[n]&&ka[n][a]){var o=ka[n][a];return e($a(o))}Ui(a,n),e(l(l({},Wi),{},{icon:d.showMissingIcons&&a?M("missingIconAbstract")||{}:{}}))})}var hn=function(){},Ma=d.measurePerformance&&ra&&ra.mark&&ra.measure?ra:{mark:hn,measure:hn},q='FA "7.3.0"',Yi=function(n){return Ma.mark("".concat(q," ").concat(n," begins")),function(){return _t(n)}},_t=function(n){Ma.mark("".concat(q," ").concat(n," ends")),Ma.measure("".concat(q," ").concat(n),"".concat(q," ").concat(n," begins"),"".concat(q," ").concat(n," ends"))},Qa={begin:Yi,end:_t},la=function(){};function yn(a){var n=a.getAttribute?a.getAttribute(R):null;return typeof n=="string"}function Xi(a){var n=a.getAttribute?a.getAttribute(Xa):null,t=a.getAttribute?a.getAttribute(Ha):null;return n&&t}function Hi(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(d.replacementClass)}function Gi(){if(d.autoReplaceSvg===!0)return ua.replace;var a=ua[d.autoReplaceSvg];return a||ua.replace}function Vi(a){return x.createElementNS("http://www.w3.org/2000/svg",a)}function Bi(a){return x.createElement(a)}function $t(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.ceFn,e=t===void 0?a.tag==="svg"?Vi:Bi:t;if(typeof a=="string")return x.createTextNode(a);var r=e(a.tag);Object.keys(a.attributes||[]).forEach(function(o){r.setAttribute(o,a.attributes[o])});var i=a.children||[];return i.forEach(function(o){r.appendChild($t(o,{ceFn:e}))}),r}function qi(a){var n=" ".concat(a.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var ua={replace:function(n){var t=n[0];if(t.parentNode)if(n[1].forEach(function(r){t.parentNode.insertBefore($t(r),t)}),t.getAttribute(R)===null&&d.keepOriginalSource){var e=x.createComment(qi(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(n){var t=n[0],e=n[1];if(~Va(t).indexOf(d.replacementClass))return ua.replace(n);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=e.map(function(s){return ta(s)}).join(`
`);t.setAttribute(R,""),t.innerHTML=o}};function xn(a){a()}function Lt(a,n){var t=typeof n=="function"?n:la;if(a.length===0)t();else{var e=xn;d.mutateApproach===Qr&&(e=$.requestAnimationFrame||xn),e(function(){var r=Gi(),i=Qa.begin("mutate");a.map(r),i(),t()})}}var Za=!1;function Mt(){Za=!0}function Da(){Za=!1}var ga=null;function wn(a){if(rn&&d.observeMutations){var n=a.treeCallback,t=n===void 0?la:n,e=a.nodeCallback,r=e===void 0?la:e,i=a.pseudoElementsCallback,o=i===void 0?la:i,s=a.observeMutationsRoot,f=s===void 0?x:s;ga=new rn(function(u){if(!Za){var m=L();B(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!yn(c.addedNodes[0])&&(d.searchPseudoElements&&o(c.target),t(c.target)),c.type==="attributes"&&c.target.parentNode&&d.searchPseudoElements&&o([c.target],!0),c.type==="attributes"&&yn(c.target)&&~ri.indexOf(c.attributeName))if(c.attributeName==="class"&&Xi(c.target)){var v=ha(Va(c.target)),p=v.prefix,y=v.iconName;c.target.setAttribute(Xa,p||m),y&&c.target.setAttribute(Ha,y)}else Hi(c.target)&&r(c.target)})}}),_&&ga.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ki(){ga&&ga.disconnect()}function Ji(a){var n=a.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce(function(e,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(e[o]=s.join(":").trim()),e},{})),t}function Qi(a){var n=a.getAttribute("data-prefix"),t=a.getAttribute("data-icon"),e=a.innerText!==void 0?a.innerText.trim():"",r=ha(Va(a));return r.prefix||(r.prefix=L()),n&&t&&(r.prefix=n,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=Si(r.prefix,a.innerText)||Ka(r.prefix,kt(a.innerText))),!r.iconName&&d.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=a.firstChild.data)),r}function Zi(a){var n=B(a.attributes).reduce(function(t,e){return t.name!=="class"&&t.name!=="style"&&(t[e.name]=e.value),t},{});return n}function ao(){return{iconName:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Sn(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Qi(a),e=t.iconName,r=t.prefix,i=t.rest,o=Zi(a),s=Ta("parseNodeAttributes",{},a),f=n.styleParser?Ji(a):[];return l({iconName:e,prefix:r,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var no=E.styles;function Dt(a){var n=d.autoReplaceSvg==="nest"?Sn(a,{styleParser:!1}):Sn(a);return~n.extra.classes.indexOf(ht)?M("generateLayersText",a,n):M("generateSvgReplacementMutation",a,n)}function to(){return[].concat(z(ut),z(ct))}function An(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_)return Promise.resolve();var t=x.documentElement.classList,e=function(c){return t.add("".concat(fn,"-").concat(c))},r=function(c){return t.remove("".concat(fn,"-").concat(c))},i=d.autoFetchSvg?to():Rn.concat(Object.keys(no));i.includes("fa")||i.push("fa");var o=[".".concat(ht,":not([").concat(R,"])")].concat(i.map(function(m){return".".concat(m,":not([").concat(R,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=B(a.querySelectorAll(o))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var f=Qa.begin("onTree"),u=s.reduce(function(m,c){try{var v=Dt(c);v&&m.push(v)}catch(p){pt||p.name==="MissingIcon"&&console.error(p)}return m},[]);return new Promise(function(m,c){Promise.all(u).then(function(v){Lt(v,function(){e("active"),e("complete"),r("pending"),typeof n=="function"&&n(),f(),m()})}).catch(function(v){f(),c(v)})})}function eo(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Dt(a).then(function(t){t&&Lt([t],n)})}function ro(a){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(n||{}).icon?n:_a(n||{}),r=t.mask;return r&&(r=(r||{}).icon?r:_a(r||{})),a(e,l(l({},t),{},{mask:r}))}}var io=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.transform,r=e===void 0?F:e,i=t.symbol,o=i===void 0?!1:i,s=t.mask,f=s===void 0?null:s,u=t.maskId,m=u===void 0?null:u,c=t.classes,v=c===void 0?[]:c,p=t.attributes,y=p===void 0?{}:p,h=t.styles,w=h===void 0?{}:h;if(n){var S=n.prefix,A=n.iconName,k=n.icon;return ya(l({type:"icon"},n),function(){return W("beforeDOMElementCreation",{iconDefinition:n,params:t}),Ja({icons:{main:$a(k),mask:f?$a(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:A,transform:l(l({},F),r),symbol:o,maskId:m,extra:{attributes:y,styles:w,classes:v}})})}},oo={mixout:function(){return{icon:ro(io)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=An,t.nodeCallback=eo,t}}},provides:function(n){n.i2svg=function(t){var e=t.node,r=e===void 0?x:e,i=t.callback,o=i===void 0?function(){}:i;return An(r,o)},n.generateSvgReplacementMutation=function(t,e){var r=e.iconName,i=e.prefix,o=e.transform,s=e.symbol,f=e.mask,u=e.maskId,m=e.extra;return new Promise(function(c,v){Promise.all([La(r,i),f.iconName?La(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var y=va(p,2),h=y[0],w=y[1];c([t,Ja({icons:{main:h,mask:w},prefix:i,iconName:r,transform:o,symbol:s,maskId:u,extra:m,watchable:!0})])}).catch(v)})},n.generateAbstractIcon=function(t){var e=t.children,r=t.attributes,i=t.main,o=t.transform,s=t.styles,f=pa(s);f.length>0&&(r.style=f);var u;return Ba(o)&&(u=M("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),e.push(u||i.icon),{children:e,attributes:r}}}},so={mixout:function(){return{layer:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return ya({type:"layer"},function(){W("beforeDOMElementCreation",{assembler:t,params:e});var o=[];return t(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(z(i)).join(" ")},children:o}]})}}}},fo={mixout:function(){return{counter:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e.title;var r=e.classes,i=r===void 0?[]:r,o=e.attributes,s=o===void 0?{}:o,f=e.styles,u=f===void 0?{}:f;return ya({type:"counter",content:t},function(){return W("beforeDOMElementCreation",{content:t,params:e}),Ri({content:t.toString(),extra:{attributes:s,styles:u,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(z(i))}})})}}}},lo={mixout:function(){return{text:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?F:r,o=e.classes,s=o===void 0?[]:o,f=e.attributes,u=f===void 0?{}:f,m=e.styles,c=m===void 0?{}:m;return ya({type:"text",content:t},function(){return W("beforeDOMElementCreation",{content:t,params:e}),bn({content:t,transform:l(l({},F),i),extra:{attributes:u,styles:c,classes:["".concat(d.cssPrefix,"-layers-text")].concat(z(s))}})})}}},provides:function(n){n.generateLayersText=function(t,e){var r=e.transform,i=e.extra,o=null,s=null;if(Mn){var f=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();o=u.width/f,s=u.height/f}return Promise.resolve([t,bn({content:t.innerHTML,width:o,height:s,transform:r,extra:i,watchable:!0})])}}},Rt=new RegExp('"',"ug"),kn=[1105920,1112319],In=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),Ne),Kr),Ue),Ra=Object.keys(In).reduce(function(a,n){return a[n.toLowerCase()]=In[n],a},{}),uo=Object.keys(Ra).reduce(function(a,n){var t=Ra[n];return a[n]=t[900]||z(Object.entries(t))[0][1],a},{});function co(a){var n=a.replace(Rt,"");return kt(z(n)[0]||"")}function mo(a){var n=a.getPropertyValue("font-feature-settings").includes("ss01"),t=a.getPropertyValue("content"),e=t.replace(Rt,""),r=e.codePointAt(0),i=r>=kn[0]&&r<=kn[1],o=e.length===2?e[0]===e[1]:!1;return i||o||n}function go(a,n){var t=a.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(n),r=isNaN(e)?"normal":e;return(Ra[t]||{})[r]||uo[t]}function Pn(a,n){var t="".concat(Jr).concat(n.replace(":","-"));return new Promise(function(e,r){if(a.getAttribute(t)!==null)return e();var i=B(a.children),o=i.filter(function(ea){return ea.getAttribute(Fa)===n})[0],s=$.getComputedStyle(a,n),f=s.getPropertyValue("font-family"),u=f.match(ti),m=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!u)return a.removeChild(o),e();if(u&&c!=="none"&&c!==""){var v=s.getPropertyValue("content"),p=go(f,m),y=co(v),h=u[0].startsWith("FontAwesome"),w=mo(s),S=Ka(p,y),A=S;if(h){var k=Ai(y);k.iconName&&k.prefix&&(S=k.iconName,p=k.prefix)}if(S&&!w&&(!o||o.getAttribute(Xa)!==p||o.getAttribute(Ha)!==A)){a.setAttribute(t,A),o&&a.removeChild(o);var O=ao(),b=O.extra;b.attributes[Fa]=n,La(S,p).then(function(ea){var Gt=Ja(l(l({},O),{},{icons:{main:ea,mask:Nt()},prefix:p,iconName:A,extra:b,watchable:!0})),xa=x.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?a.insertBefore(xa,a.firstChild):a.appendChild(xa),xa.outerHTML=Gt.map(function(Vt){return ta(Vt)}).join(`
`),a.removeAttribute(t),e()}).catch(r)}else e()}else e()})}function vo(a){return Promise.all([Pn(a,"::before"),Pn(a,"::after")])}function po(a){return a.parentNode!==document.head&&!~Zr.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(Fa)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var bo=function(n){return!!n&&vt.some(function(t){return n.includes(t)})},ho=function(n){if(!n)return[];var t=new Set,e=n.split(/,(?![^()]*\))/).map(function(f){return f.trim()});e=e.flatMap(function(f){return f.includes("(")?f:f.split(",").map(function(u){return u.trim()})});var r=fa(e),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if(bo(o)){var s=vt.reduce(function(f,u){return f.replace(u,"")},o);s!==""&&s!=="*"&&t.add(s)}}}catch(f){r.e(f)}finally{r.f()}return t};function En(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(_){var t;if(n)t=a;else if(d.searchPseudoElementsFullScan)t=a.querySelectorAll("*");else{var e=new Set,r=fa(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;try{var s=fa(o.cssRules),f;try{for(s.s();!(f=s.n()).done;){var u=f.value,m=ho(u.selectorText),c=fa(m),v;try{for(c.s();!(v=c.n()).done;){var p=v.value;e.add(p)}}catch(h){c.e(h)}finally{c.f()}}}catch(h){s.e(h)}finally{s.f()}}catch(h){d.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(h.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(h){r.e(h)}finally{r.f()}if(!e.size)return;var y=Array.from(e).join(", ");try{t=a.querySelectorAll(y)}catch{}}return new Promise(function(h,w){var S=B(t).filter(po).map(vo),A=Qa.begin("searchPseudoElements");Mt(),Promise.all(S).then(function(){A(),Da(),h()}).catch(function(){A(),Da(),w()})})}}var yo={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=En,t}}},provides:function(n){n.pseudoElements2svg=function(t){var e=t.node,r=e===void 0?x:e;d.searchPseudoElements&&En(r)}}},zn=!1,xo={mixout:function(){return{dom:{unwatch:function(){Mt(),zn=!0}}}},hooks:function(){return{bootstrap:function(){wn(Ta("mutationObserverCallbacks",{}))},noAuto:function(){Ki()},watch:function(t){var e=t.observeMutationsRoot;zn?Da():wn(Ta("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Fn=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},t)},wo={mixout:function(){return{parse:{transform:function(t){return Fn(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-transform");return r&&(t.transform=Fn(r)),t}}},provides:function(n){n.generateAbstractTransformGrouping=function(t){var e=t.main,r=t.transform,i=t.containerWidth,o=t.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),m="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(f," ").concat(u," ").concat(m)},v={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:c,path:v};return{tag:"g",attributes:l({},p.outer),children:[{tag:"g",attributes:l({},p.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:l(l({},e.icon.attributes),p.path)}]}]}}}},Ia={x:0,y:0,width:"100%",height:"100%"};function On(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||n)&&(a.attributes.fill="black"),a}function So(a){return a.tag==="g"?a.children:[a]}var Ao={hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-mask"),i=r?ha(r.split(" ").map(function(o){return o.trim()})):Nt();return i.prefix||(i.prefix=L()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides:function(n){n.generateAbstractMask=function(t){var e=t.children,r=t.attributes,i=t.main,o=t.mask,s=t.maskId,f=t.transform,u=i.width,m=i.icon,c=o.width,v=o.icon,p=di({transform:f,containerWidth:c,iconWidth:u}),y={tag:"rect",attributes:l(l({},Ia),{},{fill:"white"})},h=m.children?{children:m.children.map(On)}:{},w={tag:"g",attributes:l({},p.inner),children:[On(l({tag:m.tag,attributes:l(l({},m.attributes),p.path)},h))]},S={tag:"g",attributes:l({},p.outer),children:[w]},A="mask-".concat(s||un()),k="clip-".concat(s||un()),O={tag:"mask",attributes:l(l({},Ia),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,S]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:So(v)},O]};return e.push(b,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(A,")")},Ia)}),{children:e,attributes:r}}}},ko={provides:function(n){var t=!1;$.matchMedia&&(t=$.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:l(l({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=l(l({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:l(l({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:l(l({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:l(l({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:l(l({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Io={hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return t.symbol=i,t}}}},Po=[pi,oo,so,fo,lo,yo,xo,wo,Ao,ko,Io];ji(Po,{mixoutsTo:P});P.noAuto;var V=P.config;P.library;P.dom;var Wt=P.parse;P.findIconDefinition;P.toHtml;var Eo=P.icon;P.layer;P.text;P.counter;function zo(a){return a=a-0,a===a}function Ut(a){return zo(a)?a:(a=a.replace(/[_-]+(.)?/g,(n,t)=>t?t.toUpperCase():""),a.charAt(0).toLowerCase()+a.slice(1))}var Fo=(a,n)=>Wa.createElement("stop",{key:`${n}-${a.offset}`,offset:a.offset,stopColor:a.color,...a.opacity!==void 0&&{stopOpacity:a.opacity}});function Oo(a){return a.charAt(0).toUpperCase()+a.slice(1)}var Y=new Map,Co=1e3;function jo(a){if(Y.has(a))return Y.get(a);const n={};let t=0;const e=a.length;for(;t<e;){const r=a.indexOf(";",t),i=r===-1?e:r,o=a.slice(t,i).trim();if(o){const s=o.indexOf(":");if(s>0){const f=o.slice(0,s).trim(),u=o.slice(s+1).trim();if(f&&u){const m=Ut(f);n[m.startsWith("webkit")?Oo(m):m]=u}}}t=i+1}if(Y.size===Co){const r=Y.keys().next().value;r&&Y.delete(r)}return Y.set(a,n),n}function Yt(a,n,t={}){if(typeof n=="string")return n;const e=(n.children||[]).map(c=>{let v=c;return("fill"in t||t.gradientFill)&&c.tag==="path"&&"fill"in c.attributes&&(v={...c,attributes:{...c.attributes,fill:void 0}}),Yt(a,v)}),r=n.attributes||{},i={};for(const[c,v]of Object.entries(r))switch(!0){case c==="class":{i.className=v;break}case c==="style":{i.style=jo(String(v));break}case c.startsWith("aria-"):case c.startsWith("data-"):{i[c.toLowerCase()]=v;break}default:i[Ut(c)]=v}const{style:o,role:s,"aria-label":f,gradientFill:u,...m}=t;if(o&&(i.style=i.style?{...i.style,...o}:o),s&&(i.role=s),f&&(i["aria-label"]=f,i["aria-hidden"]="false"),u){i.fill=`url(#${u.id})`;const{type:c,stops:v=[],...p}=u;e.unshift(a(c==="linear"?"linearGradient":"radialGradient",{...p,id:u.id},v.map(Fo)))}return a(n.tag,{...i,...m},...e)}var No=Yt.bind(null,Wa.createElement),Cn=(a,n)=>{const t=ca.useId();return a||(n?t:void 0)},To=class{constructor(a="react-fontawesome"){this.enabled=!1;let n=!1;try{n=typeof process<"u"&&!1}catch{}this.scope=a,this.enabled=n}log(...a){this.enabled&&console.log(`[${this.scope}]`,...a)}warn(...a){this.enabled&&console.warn(`[${this.scope}]`,...a)}error(...a){this.enabled&&console.error(`[${this.scope}]`,...a)}},_o="searchPseudoElementsFullScan"in V&&typeof V.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",$o=Number.parseInt(_o)>=7,Lo=()=>$o,Q="fa",C={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},Mo={left:"fa-pull-left",right:"fa-pull-right"},Do={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Ro={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},j={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function Wo(a){const n=V.cssPrefix||V.familyPrefix||Q;return n===Q?a:a.replace(new RegExp(String.raw`(?<=^|\s)${Q}-`,"g"),`${n}-`)}function Uo(a){const{beat:n,fade:t,beatFade:e,bounce:r,shake:i,spin:o,spinPulse:s,spinReverse:f,pulse:u,fixedWidth:m,inverse:c,border:v,flip:p,size:y,rotation:h,pull:w,swapOpacity:S,rotateBy:A,widthAuto:k,className:O}=a,b=[];return O&&b.push(...O.split(" ")),n&&b.push(C.beat),t&&b.push(C.fade),e&&b.push(C.beatFade),r&&b.push(C.bounce),i&&b.push(C.shake),o&&b.push(C.spin),f&&b.push(C.spinReverse),s&&b.push(C.spinPulse),u&&b.push(C.pulse),m&&b.push(j.fixedWidth),c&&b.push(j.inverse),v&&b.push(j.border),p===!0&&b.push(j.flip),(p==="horizontal"||p==="both")&&b.push(j.flipHorizontal),(p==="vertical"||p==="both")&&b.push(j.flipVertical),y!=null&&b.push(Ro[y]),h!=null&&h!==0&&b.push(Do[h]),w!=null&&b.push(Mo[w]),S&&b.push(j.swapOpacity),Lo()?(A&&b.push(j.rotateBy),k&&b.push(j.widthAuto),(V.cssPrefix||V.familyPrefix||Q)===Q?b:b.map(Wo)):b}var Yo=a=>typeof a=="object"&&"icon"in a&&!!a.icon;function jn(a){if(a)return Yo(a)?a:Wt.icon(a)}function Xo(a){return Object.keys(a)}var Nn=new To("FontAwesomeIcon"),Xt={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Ho=new Set(Object.keys(Xt)),Ht=Wa.forwardRef((a,n)=>{const t={...Xt,...a},{icon:e,mask:r,symbol:i,title:o,titleId:s,maskId:f,transform:u}=t,m=Cn(f,!!r),c=Cn(s,!!o),v=jn(e);if(!v)return Nn.error("Icon lookup is undefined",e),null;const p=Uo(t),y=typeof u=="string"?Wt.transform(u):u,h=jn(r),w=Eo(v,{...p.length>0&&{classes:p},...y&&{transform:y},...h&&{mask:h},symbol:i,title:o,titleId:c,maskId:m});if(!w)return Nn.error("Could not find icon",v),null;const{abstract:S}=w,A={ref:n};for(const k of Xo(t))Ho.has(k)||(A[k]=t[k]);return No(S[0],A)});Ht.displayName="FontAwesomeIcon";function qo(a){return ca.createElement(Ht,a)}export{qo as I,Bo as u};
