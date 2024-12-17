(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{425:function(e,t,s){e.exports=s.p+"assets/img/csp-screenshot.0cc9faa3.png"},452:function(e,t,s){"use strict";s.r(t);var a=s(34),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("PageHeader"),e._v(" "),a("h2",{attrs:{id:"security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[e._v("#")]),e._v(" Security")]),e._v(" "),a("p",[e._v("Security for Web Apps is a broad topic with lots to learn. This week we will be talking about a number of the elements that you should consider when designing the security for your app.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Best Practice")]),e._v(" "),a("p",[e._v("👍 Never trust data that is coming from the user. Whether it is something written in the querystring or a form input, always do at least basic validation on that text.")]),e._v(" "),a("p",[e._v("👍 Never store passwords in the browser.")]),e._v(" "),a("p",[e._v("👍 Never send passwords from the server to the client.")])]),e._v(" "),a("h2",{attrs:{id:"cookies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookies"}},[e._v("#")]),e._v(" Cookies")]),e._v(" "),a("p",[e._v("Cookies have been available as Strings that get created and passed with HTTP Requests and Responses since the early days of the web. In the Requests and Responses, they are sent as a "),a("code",[e._v("Header")]),e._v(" value.")]),e._v(" "),a("p",[e._v("Practically every request that the browser makes for any file will have the cookie header sent along with the request.")]),e._v(" "),a("p",[e._v("In the browser they are stored inside "),a("code",[e._v("document.cookie")]),e._v(". We will use "),a("code",[e._v("document.cookie")]),e._v(" to both get and set the values of cookies.")]),e._v(" "),a("p",[e._v("The format of the cookie string is like this:")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'key=value;path=/;domain=localhost;max-age=30000;secure;samesite'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Just like localStorage there is a "),a("code",[e._v("key")]),e._v(" and a "),a("code",[e._v("value")]),e._v(". The "),a("code",[e._v("value")]),e._v(" must be URL encoded, just like values you put in the queryString.")]),e._v(" "),a("h3",{attrs:{id:"path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[e._v("#")]),e._v(" Path")]),e._v(" "),a("p",[e._v("Be default, cookies apply to the root folder of your website. However we can add to this "),a("code",[e._v("path")]),e._v(" value to restrict the cookies to a smaller part of our website.")]),e._v(" "),a("h3",{attrs:{id:"domain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#domain"}},[e._v("#")]),e._v(" Domain")]),e._v(" "),a("p",[e._v("By default, the "),a("code",[e._v("domain")]),e._v(" value will be the domain of the HTML file. However, we can restrict it further to a specific subdomain if we want.")]),e._v(" "),a("h3",{attrs:{id:"max-age"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#max-age"}},[e._v("#")]),e._v(" Max-Age")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("max-age")]),e._v(" part of the cookie String will be the number of seconds that the cookie is to be considered valid.")]),e._v(" "),a("h3",{attrs:{id:"secure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#secure"}},[e._v("#")]),e._v(" Secure")]),e._v(" "),a("p",[e._v("If the "),a("code",[e._v("secure")]),e._v(" value exists it means the cookie can only be accessed or set over "),a("code",[e._v("https")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"same-site"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#same-site"}},[e._v("#")]),e._v(" Same-site")]),e._v(" "),a("p",[e._v("If the "),a("code",[e._v("same-site")]),e._v(" value exists then the cookie is only to be sent with requests for files that are going to the same domain as the original HTML file.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN Reference for document.cookie"),a("OutboundLink")],1)]),e._v(" "),a("YouTube",{attrs:{title:"Understanding Browser Cookies",url:"https://www.youtube.com/embed/j0PpT96EFeg"}}),e._v(" "),a("YouTube",{attrs:{title:"Fetch, CORS, and Cookies",url:"https://www.youtube.com/embed/34wC1C61lg0"}}),e._v(" "),a("h2",{attrs:{id:"headers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headers"}},[e._v("#")]),e._v(" Headers")]),e._v(" "),a("p",[e._v("The full notes about how to work with Headers are back in "),a("RouterLink",{attrs:{to:"/modules/browser-js/week10/ajax/"}},[e._v("Module 10.1")]),e._v(".")],1),e._v(" "),a("p",[e._v("Headers are included as a topic under security because you will often have to include your API Key as a header. It depends on who designed the API. They might want the API Key in the querystring. They\nmight want it as a Header entry. They might want a value in the querystring plus a header entry.")]),e._v(" "),a("p",[e._v("When you start to work with JSON Web Tokens (JWT), you will be passing a JSON String that has been encoded as a base-64 string through a header called "),a("code",[e._v("Authentication")]),e._v(". You will also be reading the\nheader when it gets sent from the server.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Authentication")]),e._v(" server is also used, less commonly, for other types of authorization methods like username-password.")]),e._v(" "),a("YouTube",{attrs:{title:"base-64",url:"https://www.youtube.com/embed/SARf0c-D8BU"}}),e._v(" "),a("h2",{attrs:{id:"csp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csp"}},[e._v("#")]),e._v(" CSP")]),e._v(" "),a("p",[e._v("There is a "),a("code",[e._v("meta")]),e._v(" tag that you should put into ALL your websites and web apps and hybrid apps. It is a security feature to protect your users.")]),e._v(" "),a("p",[e._v("It has the "),a("code",[e._v("http-equiv")]),e._v(" attribute set to "),a("code",[e._v("Content-Security-Policy")]),e._v(" and then a "),a("code",[e._v("content")]),e._v(" attribute with all the possible values of where the browser is allowed to load different types of resources\nfrom.")]),e._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("meta")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("http-equiv")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("Content-Security-Policy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("default-src https: ;"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The value inside "),a("code",[e._v("content")]),e._v(" is broken up into different categories like "),a("code",[e._v("default-src")]),e._v(", "),a("code",[e._v("img-src")]),e._v(", "),a("code",[e._v("style-src")]),e._v(", "),a("code",[e._v("font-src")]),e._v(", "),a("code",[e._v("media-src")]),e._v(", and "),a("code",[e._v("connect-src")]),e._v(". After each category name you put one or more\nvalues for allowed sources for that type of content. After each source list you put a semi-colon.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("http-equiv")]),e._v(" attribute means that this is actually a header that could be sent from the server too.")]),e._v(" "),a("p",[e._v("See the CSP website for the full list of categories and values. "),a("a",{attrs:{href:"https://content-security-policy.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSP website official reference"),a("OutboundLink")],1)]),e._v(" "),a("YouTube",{attrs:{title:"csp intro",url:"https://www.youtube.com/embed/1-sx4AmjGCI"}}),e._v(" "),a("p",[e._v("You should put this "),a("code",[e._v("meta")]),e._v(" tag into EVERY webpage you build.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN CSP reference"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.owasp.org/index.php/Content_Security_Policy_Cheat_Sheet",target:"_blank",rel:"noopener noreferrer"}},[e._v("OWASP CSP cheatsheet"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://hacks.mozilla.org/2016/02/implementing-content-security-policy/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mozilla Hacks guide to CSP"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("When things go wrong with your Content-Security-Policy you will see notifications in the JavaScript console in the browser.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(425),alt:"CSP screenshot"}})]),e._v(" "),a("p",[e._v("In this screenshot it is saying that it cannot load the stylesheet because the "),a("code",[e._v("style-src")]),e._v(" is set to "),a("code",[e._v('"none"')]),e._v(".")]),e._v(" "),a("p",[e._v("When you run into problems with the CSP, you should just respond to each error separately by adding a new category or updating a category to include a specific location. While you can just put\neverything into default and accept anything this defeats the purpose and provides no security for your users.")]),e._v(" "),a("h2",{attrs:{id:"using-the-script-integrity-attribute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-script-integrity-attribute"}},[e._v("#")]),e._v(" Using the Script integrity Attribute")]),e._v(" "),a("p",[e._v("With "),a("code",[e._v("script")]),e._v(" tags, we can add an integrity attribute which helps protect our users further. This attribute value also needs to be added to your CSP tag.")]),e._v(" "),a("YouTube",{attrs:{title:"script integrity",url:"https://www.youtube.com/embed/5a3LthQ2xCI"}}),e._v(" "),a("h2",{attrs:{id:"cors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[e._v("#")]),e._v(" CORS")]),e._v(" "),a("p",[e._v("CORS stands for Cross-Origin Resource Sharing. It refers to the process by which the browser can make HTTP Requests to load an HTML file from one domain and then other things like images, fonts,\nstylesheets, and scripts from different domains.")]),e._v(" "),a("p",[e._v("If the browser is making the request based on what it read in an HTML or CSS file then this can be done freely.")]),e._v(" "),a("p",[e._v("If the cross-domain request is coming from some JavaScript code then there are restrictions in place.")]),e._v(" "),a("p",[e._v("JavaScript can use the "),a("code",[e._v("Fetch API")]),e._v(" or "),a("code",[e._v("XMLHttpRequest")]),e._v("objects to make requests for resources like XML, JSON, text, images, stylesheets, fonts, videos, audio files, etc. However, we have to follow a\nrestrictive list of rules to be able to make those requests.")]),e._v(" "),a("h3",{attrs:{id:"headers-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headers-2"}},[e._v("#")]),e._v(" Headers")]),e._v(" "),a("p",[e._v("When you configure the "),a("code",[e._v("fetch( )")]),e._v(" call with the Request and Headers objects to request a resource on a different server the only predefined headers that can be set are: "),a("code",[e._v("Accept")]),e._v(", "),a("code",[e._v("Content-Type")]),e._v(",\n"),a("code",[e._v("Accept-Language")]),e._v(", and "),a("code",[e._v("Content-Language")]),e._v(". No other headers can be altered for a CORS request. You can add your own custom headers like "),a("code",[e._v("X-Steve-Is-Awesome")]),e._v(" without impacting CORS.")]),e._v(" "),a("p",[a("code",[e._v("Accept")]),e._v(" tells the server what types of files you are willing to accept as a response. "),a("code",[e._v("Content-type")]),e._v(" tells the server what type of file you are sending. The only three values allowed for\n"),a("code",[e._v("Content-Type")]),e._v(" are "),a("code",[e._v("text/plain")]),e._v(", "),a("code",[e._v("multipart/form-data")]),e._v(", or "),a("code",[e._v("x-www-form-urlencoded")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mode"}},[e._v("#")]),e._v(" Mode")]),e._v(" "),a("p",[e._v("When using the Fetch API we can actually set the CORS "),a("code",[e._v("mode")]),e._v(" for the "),a("code",[e._v("request")]),e._v(". Basically we are going to tell the server that we do or do not want to make a cross-domain request.")]),e._v(" "),a("p",[e._v("Inside our Request options we define the mode like this:")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("method")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'GET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("mode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'cors'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("The "),a("code",[e._v("mode")]),e._v(" can be "),a("code",[e._v('"cors"')]),e._v(", "),a("code",[e._v('"same-origin"')]),e._v(", or "),a("code",[e._v('"no-cors"')]),e._v(". If we set it to "),a("code",[e._v('"cors"')]),e._v(" then we are telling the browser to look for the proper permissions to come back from the remote webserver telling\nus that CORS is allowed. If we set it to "),a("code",[e._v('"same-origin"')]),e._v(" then we are telling the browser that it should prevent the JavaScript from making calls to any domain except the one where the HTML came from.\n"),a("code",[e._v('"no-cors"')]),e._v(" tries to make an opaque attempt to get external sources but does not currently work within the global scope of the page.")]),e._v(" "),a("YouTube",{attrs:{title:"Cross-Origin Fetches",url:"https://www.youtube.com/embed/vfAHa5GBLio"}}),e._v(" "),a("h3",{attrs:{id:"behind-the-scenes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#behind-the-scenes"}},[e._v("#")]),e._v(" Behind the Scenes")]),e._v(" "),a("p",[e._v("When you make a CORS AJAX call from your JavaScript code there are actually two requests being made. An initial request called a "),a("code",[e._v("pre-flight")]),e._v(" request gets sent from the browser to the server. This\nrequest includes a header providing the domain from which the request is being made.")]),e._v(" "),a("p",[e._v("For the communication between the server and the browser to finish properly, the server needs to respond to the initial preflight request with a Response that includes a header called\n"),a("code",[e._v("Access-Control-Allow-Origin")]),e._v(". The value for this header must match exactly your URL or be set to a wildcard.")]),e._v(" "),a("p",[e._v("With Apache as your webserver, we can create a settings file called "),a("code",[e._v(".htaccess")]),e._v(" and inside that file add this line:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('Header set Access-Control-Allow-Origin "*"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This will create the required header to allow for cross origin requests.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v(".htaccess")]),e._v(" file must be in the folder or a parent folder for the resource being requested.")]),e._v(" "),a("p",[e._v("Even if you are not using Apache as your web server, the "),a("code",[e._v("Access-Control-Allow-Origin")]),e._v(" header still needs to be sent from the server to the client.")]),e._v(" "),a("p",[e._v("There is also an "),a("code",[e._v("Access-Control-Allow-Headers")]),e._v(" header that can hold a list of the headers which are allowed to be sent from the browser to the server when the actual full HTTP Request is sent (after\nthe pre-flight request).")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Access-Control-Allow-Credentials")]),e._v(" header holds a true value or is omitted. If the "),a("code",[e._v("Request.credentials")]),e._v(" property is set to "),a("code",[e._v("include")]),e._v(", then this header must be set to "),a("code",[e._v("true")]),e._v(" or the browser will\nnot be allowed to access the full "),a("code",[e._v("Response")]),e._v(" if cookies, authorization headers, or TLS client certificates are included.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Access-Control-Allow-Methods")]),e._v(" header holds a list of allowed methods that can be used for the full request after the pre-flight request.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Access-Control-Allow-Headers MDN reference"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"what-gets-restricted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-gets-restricted"}},[e._v("#")]),e._v(" What Gets Restricted")]),e._v(" "),a("p",[e._v("There are actually quite a few things that can get restricted when requesting resources over CORS. For our immediate purposes, it is important to note that a webpage from edumedia.ca making a request\nto darksky.net would not be allowed to use the JSON data. This happens because the HTML file and the JSON file are coming from different servers and the server providing the JSON is NOT setting that\nAccess-Control-Allow-Origin header for us.")]),e._v(" "),a("p",[e._v("If you set the mode to "),a("code",[e._v('"same-origin"')]),e._v(" or "),a("code",[e._v('"no-cors"')]),e._v(" then the request would be entirely rejected.")]),e._v(" "),a("p",[e._v("If you set the mode to "),a("code",[e._v('"cors"')]),e._v(" then the request would be sent and the JSON data returned but we would not be allowed to use the data in our JavaScript.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN CORS reference"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("YouTube",{attrs:{title:"Resolving fetch cors",url:"https://www.youtube.com/embed/zswi0cPMxsU"}}),e._v(" "),a("p",[e._v("And "),a("a",{attrs:{href:"https://dev.to/lydiahallie/cs-visualized-cors-5b8h",target:"_blank",rel:"noopener noreferrer"}},[e._v("here is a great article by Lydia Hallie"),a("OutboundLink")],1),e._v(" with illustrations to show how CORS restrictions work.")]),e._v(" "),a("h2",{attrs:{id:"authentication-and-jwt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication-and-jwt"}},[e._v("#")]),e._v(" Authentication and JWT")]),e._v(" "),a("p",[e._v("When you need to do things like pass a username and password along with a fetch request, there are a few things you can do.")]),e._v(" "),a("p",[e._v("The following videos will be very useful to you later on when you start using JWT in MAD9124 and need to accept tokens on the client side.")]),e._v(" "),a("YouTube",{attrs:{title:"Basic Authentication with Fetch",url:"https://www.youtube.com/embed/MvNT0Jis-3k"}}),e._v(" "),a("p",[e._v("Tokens has become the most common way to authenticate with "),a("code",[e._v("fetch")]),e._v(" and API calls. This first video explains how tokens can be passed through fetch.")]),e._v(" "),a("YouTube",{attrs:{title:"Fetch with Tokens",url:"https://www.youtube.com/embed/Ju5FGcyifEA"}}),e._v(" "),a("p",[e._v("This next video shows the full life cycle of JWT (JavaScript Web Tokens) on the client and server. The Server-side part of this will be discussed in detail in MAD9124.")]),e._v(" "),a("YouTube",{attrs:{title:"JWT lifecycle client and server",url:"https://www.youtube.com/embed/QCCmWNlEkdY"}}),e._v(" "),a("h2",{attrs:{id:"_2fa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2fa"}},[e._v("#")]),e._v(" 2FA")]),e._v(" "),a("p",[e._v("An acronym that you will see occasionally when reading about web security is "),a("code",[e._v("2FA")]),e._v(". It stands for Two-Factor Authentication.")]),e._v(" "),a("p",[e._v("It is a method for making your apps more resilient to attacks on your users. Basically, you have your app ask the user for a username and a password.")]),e._v(" "),a("p",[e._v("After you validate their username password combination on the server, then you send a randomly generated code to either their email or via "),a("code",[e._v("SMS")]),e._v(" as a text message to their phone.")]),e._v(" "),a("p",[e._v("This way the person trying to access the site has to "),a("strong",[e._v("know")]),e._v(" the username and password AND they must "),a("strong",[e._v("possess")]),e._v(" the device and/or have access to the person's email account.")]),e._v(" "),a("p",[e._v("Recently, there has been more usage, of Authenticator apps. It is the authenticator app that is responsible for generating the random code and then telling both the site and the user what the code is.\nThe user then has to enter the code and send it to the web server. The web server will validate that the code sent by the user is the same one that it got from the Authenticator.")]),e._v(" "),a("h2",{attrs:{id:"web-authentication-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-authentication-api"}},[e._v("#")]),e._v(" Web Authentication API")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN reference for Web Authentication"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"what-to-do-this-week"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-to-do-this-week"}},[e._v("#")]),e._v(" What to do this week")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("TODO Things to do before next week.")]),e._v(" "),a("ul",[a("li",[e._v("Read all the content from "),a("code",[e._v("Modules 11.1, 11.2, and 12.1")]),e._v(".")])])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);