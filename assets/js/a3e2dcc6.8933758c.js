"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[5620],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,v=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(944),l=n(6010),i="tabItem_vU9c",o="tabItemActive_cw6a";var s=37,d=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,p=e.values,c=e.groupId,m=e.className,v=(0,r.Z)(),k=v.tabGroupChoices,h=v.setTabGroupChoices,f=(0,a.useState)(u),b=f[0],g=f[1],N=a.Children.toArray(e.children),w=[];if(null!=c){var y=k[c];null!=y&&y!==b&&p.some((function(e){return e.value===y}))&&g(y)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),a=p[n].value;g(a),null!=c&&(h(c,a),setTimeout((function(){var e,n,a,r,l,i,s,d;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,i=window,s=i.innerHeight,d=i.innerWidth,n>=0&&l<=d&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case d:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case s:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:x,onClick:x},n)}))),t?(0,a.cloneElement)(N.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},4330:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=n(1395),o=n(8215),s=["components"],d={title:"Command-line options",description:"Command-line options reference documentation."},u={unversionedId:"reference/command-line-options",id:"reference/command-line-options",isDocsHomePage:!1,title:"Command-line options",description:"Command-line options reference documentation.",source:"@site/docs/reference/command-line-options.md",sourceDirName:"reference",slug:"/reference/command-line-options",permalink:"/docs/reference/command-line-options",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/reference/command-line-options.md",version:"current",frontMatter:{title:"Command-line options",description:"Command-line options reference documentation."},sidebar:"docs",previous:{title:"Java (embedded)",permalink:"/docs/reference/api/java-embedded"},next:{title:"Configuration",permalink:"/docs/reference/configuration"}},p=[{value:"Options",id:"options",children:[{value:"Start",id:"start",children:[]},{value:"Stop",id:"stop",children:[]},{value:"Status",id:"status",children:[]},{value:"Install (Windows)",id:"install-windows",children:[]},{value:"Remove (Windows)",id:"remove-windows",children:[]}]},{value:"Interactive session (Windows)",id:"interactive-session-windows",children:[{value:"Default root directory",id:"default-root-directory-1",children:[]},{value:"Stop",id:"stop-1",children:[]}]}],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"QuestDB may be started, stopped and passed configuration options from the\ncommand line. On Windows, the QuestDB server can also start an\n",(0,l.kt)("a",{parentName:"p",href:"#interactive-session-windows"},"interactive session"),"."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"The following sections describe the options that may be passed to QuestDB when\nstarting the server from the command line."),(0,l.kt)(i.Z,{defaultValue:"nix",values:[{label:"Linux/FreeBSD",value:"nix"},{label:"macOS (Homebrew)",value:"macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"nix",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./questdb.sh [start|stop|status] [-d dir] [-f] [-t tag]\n"))),(0,l.kt)(o.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"questdb [start|stop|status] [-d dir] [-f] [-t tag]\n"))),(0,l.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"questdb.exe [start|stop|status|install|remove] \\\n  [-d dir] [-f] [-j JAVA_HOME] [-t tag]\n")))),(0,l.kt)("h3",{id:"start"},"Start"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"start")," - starts QuestDB as a service."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-d")),(0,l.kt)("td",{parentName:"tr",align:null},"Expects a ",(0,l.kt)("inlineCode",{parentName:"td"},"dir")," directory value which is a folder that will be used as QuestDB's root directory. For more information and the default values, see the ",(0,l.kt)("a",{parentName:"td",href:"#default-root-directory"},"default root")," section below.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-t")),(0,l.kt)("td",{parentName:"tr",align:null},"Expects a ",(0,l.kt)("inlineCode",{parentName:"td"},"tag")," string value which will be as a tag for the service. This option allows users to run several QuestDB services and manage them separately. If this option is omitted, the default tag will be ",(0,l.kt)("inlineCode",{parentName:"td"},"questdb"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-f")),(0,l.kt)("td",{parentName:"tr",align:null},"Force re-deploying the Web Console. Without this option, the Web Console is cached and deployed only when missing.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-j")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Windows only!")," This option allows to specify a path to ",(0,l.kt)("inlineCode",{parentName:"td"},"JAVA_HOME"),".")))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"When running multiple QuestDB services, a tag must be used to disambiguate\nbetween services for ",(0,l.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"stop")," commands. There will be conflicting\nports and root directories if only the tag flag is specified when starting\nmultiple services. Each new service should have its own config file or should\nbe started with separate port and root directory options."))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"When running QuestDB as Windows service you can check status in both:"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},'Windows Event Viewer - look for events with "QuestDB" source in Windows Logs | Application .'),(0,l.kt)("li",{parentName:"ul"},"service log file - ",(0,l.kt)("inlineCode",{parentName:"li"},"$dataDir\\log\\service-%Y-%m-%dT%H-%M-%S.txt")," (default is ",(0,l.kt)("inlineCode",{parentName:"li"},"C:\\Windows\\System32\\qdbroot\\log\\service-%Y-%m-%dT%H-%M-%S.txt")," )")))),(0,l.kt)(i.Z,{defaultValue:"nix",values:[{label:"Linux/FreeBSD",value:"nix"},{label:"macOS (Homebrew)",value:"macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"nix",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./questdb.sh start [-d dir] [-f] [-t tag]\n"))),(0,l.kt)(o.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"questdb start [-d dir] [-f] [-t tag]\n"))),(0,l.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"questdb.exe start [-d dir] [-f] [-j JAVA_HOME] [-t tag]\n")))),(0,l.kt)("h4",{id:"default-root-directory"},"Default root directory"),(0,l.kt)("p",null,"By default, QuestDB's ",(0,l.kt)("a",{parentName:"p",href:"/docs/concept/root-directory-structure"},"root directory"),"\nwill be the following:"),(0,l.kt)(i.Z,{defaultValue:"nix",values:[{label:"Linux/FreeBSD",value:"nix"},{label:"macOS (Homebrew)",value:"macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"nix",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$HOME/.questdb\n"))),(0,l.kt)(o.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"/opt/homebrew/var/questdb\n"))),(0,l.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"C:\\Windows\\System32\\qdbroot\n")))),(0,l.kt)("h3",{id:"stop"},"Stop"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"stop")," - stops a service."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-t")),(0,l.kt)("td",{parentName:"tr",align:null},"Expects a ",(0,l.kt)("inlineCode",{parentName:"td"},"tag")," string value which to stop a service by tag. If this is omitted, the default tag will be ",(0,l.kt)("inlineCode",{parentName:"td"},"questdb"))))),(0,l.kt)(i.Z,{defaultValue:"nix",values:[{label:"Linux/FreeBSD",value:"nix"},{label:"macOS (Homebrew)",value:"macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"nix",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./questdb.sh stop\n"))),(0,l.kt)(o.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"questdb stop\n"))),(0,l.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"questdb.exe stop\n")))),(0,l.kt)("h3",{id:"status"},"Status"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"status")," - shows the status for a service."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-t")),(0,l.kt)("td",{parentName:"tr",align:null},"Expects a ",(0,l.kt)("inlineCode",{parentName:"td"},"tag")," string value which to stop a service by tag. If this is omitted, the default will be ",(0,l.kt)("inlineCode",{parentName:"td"},"questdb"))))),(0,l.kt)(i.Z,{defaultValue:"nix",values:[{label:"Linux/FreeBSD",value:"nix"},{label:"macOS (Homebrew)",value:"macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"nix",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./questdb.sh status\n"))),(0,l.kt)(o.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"questdb status\n"))),(0,l.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"questdb.exe status\n")))),(0,l.kt)("h3",{id:"install-windows"},"Install (Windows)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"install")," - installs the Windows QuestDB service. The service will start\nautomatically at startup."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"questdb.exe install\n")),(0,l.kt)("h3",{id:"remove-windows"},"Remove (Windows)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"remove")," - removes the Windows QuestDB service. It will no longer start at\nstartup."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"questdb.exe remove\n")),(0,l.kt)("h2",{id:"interactive-session-windows"},"Interactive session (Windows)"),(0,l.kt)("p",null,"You can start QuestDB interactively by running ",(0,l.kt)("inlineCode",{parentName:"p"},"questdb.exe"),". This will launch\nQuestDB interactively in the active ",(0,l.kt)("inlineCode",{parentName:"p"},"Shell")," window. QuestDB will be stopped when\nthe Shell is closed."),(0,l.kt)("h3",{id:"default-root-directory-1"},"Default root directory"),(0,l.kt)("p",null,"When started interactively, QuestDB's root directory defaults to the ",(0,l.kt)("inlineCode",{parentName:"p"},"current"),"\ndirectory."),(0,l.kt)("h3",{id:"stop-1"},"Stop"),(0,l.kt)("p",null,"To stop, press ",(0,l.kt)("kbd",null,"Ctrl"),"+",(0,l.kt)("kbd",null,"C")," in the terminal or close it\ndirectly."))}m.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);