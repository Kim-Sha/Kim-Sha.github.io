(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{gqcf:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=(a("eX0Y"),a("qKvR"));t.a=function(e){var t=e.tags;return Object(l.a)(n.a.Fragment,null,t.map((function(e){return Object(l.a)("li",{className:"inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-line",key:e},e)})))}},qz1k:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o})),a.d(t,"query",(function(){return u}));var r=a("q1tI"),n=a("Wbzz"),l=a("3yDT"),s=a("gqcf"),c=a("ma3e"),i=a("qKvR");function o(e){var t=e.data,a=t.profile,o=t.blogs,u=Object(r.useState)({filteredData:[],query:""}),d=u[0],b=u[1],f=d.filteredData,m=d.query,p=f&&""!==m?f:o.edges,g=a.seo_image?a.seo_image.childImageSharp.resize:null;return Object(i.a)(l.a,{sidebarOnMobile:!1,title:"Writing",image:g,pathname:"/writing"},Object(i.a)("div",{className:"lg:w-2/3 lg:pl-8 xl:pl-12"},Object(i.a)("header",{className:"prose mb-6"},Object(i.a)("h1",{className:"prose"},"Writing")),Object(i.a)("div",{className:"mb-6"},Object(i.a)("div",{class:"bg-back-secondary flex items-center rounded-md shadow w-full lg:w-3/5 h-10"},Object(i.a)("input",{class:"bg-back-secondary rounded-l-full w-full h-full py-4 px-6 leading-tight focus:outline-none",id:"search",type:"text",placeholder:"Search",onChange:function(e){var t=e.target.value,a=(o.edges||[]).filter((function(e){var a=e.node.frontmatter,r=a.description,n=a.title,l=a.tags;return r.toLowerCase().includes(t.toLowerCase())||n.toLowerCase().includes(t.toLowerCase())||l&&l.join("").toLowerCase().includes(t.toLowerCase())}));b({query:t,filteredData:a})}}),Object(i.a)("div",{class:"p-4"},Object(i.a)("button",{class:"bg-primary text-back-secondary rounded-full p-2 hover:bg-opacity-75 focus:outline-none w-full h-full flex items-center justify-center"},Object(i.a)(c.t,null))))),p.map((function(e){var t=e.node;return Object(i.a)("div",null,Object(i.a)(n.Link,{to:t.fields.slug},Object(i.a)("div",{className:"prose",key:t.id},Object(i.a)("h4",null,t.frontmatter.title," ",Object(i.a)("span",{className:"italic text-sm text-front"},"— ",t.frontmatter.date)),Object(i.a)("p",{className:"text-sm"},t.frontmatter.description?t.frontmatter.description:t.excerpt))),Object(i.a)("ul",{className:"pr-2 mb-6 italic"},t.frontmatter.tags&&Object(i.a)(s.a,{tags:t.frontmatter.tags})))}))))}var u="3412875143"}}]);
//# sourceMappingURL=component---src-pages-writing-js-1cf32f64d28c8c636cc9.js.map