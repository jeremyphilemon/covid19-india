(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[43],{281:function(t,e,i){"use strict";i.r(e);var a=i(82),s=i(12),d=i(22),l=i(85),c=i.n(l),n=i(84),o=i.n(n),r=i(2),j=i(89),b=i(18),u=function(t){var e=t.statistic,i=t.data,a=t.isPerMillion,l=t.lastUpdatedTT,n=Object(d.i)(i,e,{perMillion:a},l),o=n.total,r=n.delta,u=Object(j.useSpring)({total:o,delta:r,config:s.r}),m=s.v[e];return Object(b.jsxs)("div",{className:"cell statistic",children:[(null===m||void 0===m?void 0:m.showDelta)&&Object(b.jsx)(j.animated.div,{className:c()("delta","is-".concat(e)),title:r,children:u.delta.to((function(t){return t>0?"\u2191"+Object(d.e)(t,m.format):t<0?"\u2193"+Object(d.e)(Math.abs(t),m.format):""}))}),Object(b.jsx)(j.animated.div,{className:"total",title:o,children:u.total.to((function(t){return Object(d.e)(t,m.format,e)}))})]})},m=function(t,e){var i,a,s,d;return!!o()(null===(i=t.data)||void 0===i?void 0:i.total,null===(a=e.data)||void 0===a?void 0:a.total)&&(!!o()(null===(s=t.data)||void 0===s?void 0:s.delta,null===(d=e.data)||void 0===d?void 0:d.delta)&&!!o()(t.isPerMillion,e.isPerMillion))},v=Object(r.memo)(u,m),h=i(113),g=i(90),O=i(94),x=i(285);function N(t){var e,i=t.stateCode,a=t.districtName,s=t.data,d=t.tableStatistics,l=t.isPerMillion,n=t.regionHighlighted,o=t.setRegionHighlighted,j=(t.expandTable,t.lastUpdatedTT),u=Object(x.a)().t,m=Object(r.useCallback)((function(){n.districtName!==a&&o(Object(O.a)(n,(function(t){t.stateCode=i,t.districtName=a})))}),[n,a,o,i]);return Object(b.jsxs)("div",{className:c()("row","district",{"is-highlighted":(null===n||void 0===n?void 0:n.districtName)===a}),onMouseEnter:m,children:[Object(b.jsxs)("div",{className:"cell",children:[Object(b.jsx)("div",{className:"state-name",children:u(a)}),(null===s||void 0===s||null===(e=s.meta)||void 0===e?void 0:e.notes)&&Object(b.jsx)(h.a,{data:s.meta.notes,children:Object(b.jsx)(g.m,{size:16})})]}),d.map((function(t){return Object(b.jsx)(v,{statistic:t,data:s,isPerMillion:l,lastUpdatedTT:j},t)}))]})}var p=function(t,e){var i,a,s,d,l,c;return!!o()(null===(i=t.data)||void 0===i?void 0:i.total,null===(a=e.data)||void 0===a?void 0:a.total)&&(!!o()(null===(s=t.data)||void 0===s?void 0:s.delta,null===(d=e.data)||void 0===d?void 0:d.delta)&&(!!o()(null===(l=t.data)||void 0===l?void 0:l.last_updated,null===(c=e.data)||void 0===c?void 0:c.last_updated)&&(!!o()(t.isPerMillion,e.isPerMillion)&&(!(!o()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(o()(t.regionHighlighted.districtName,t.districtName)||o()(e.regionHighlighted.districtName,e.districtName)))&&(!!o()(t.expandTable,e.expandTable)&&!!o()(t.tableStatistics,e.tableStatistics))))))},C=Object(r.memo)(N,p),f=i(173),T=i(5),H=i(191);function M(t){var e,i,l=this,n=t.data,o=t.tableStatistics,j=t.stateCode,u=t.districtName,m=t.isPerMillion,N=t.regionHighlighted,p=t.setRegionHighlighted,M=t.expandTable,k=t.lastUpdatedTT,S=Object(r.useState)(!1),P=Object(a.a)(S,2),w=P[0],D=P[1],U=Object(H.a)("districtSortData",{sortColumn:"confirmed",isAscending:!1,delta:!1}),A=Object(a.a)(U,2),R=A[0],_=A[1],z=Object(T.g)(),E=Object(x.a)().t,F=Object(r.useRef)(),I=Object(r.useCallback)((function(t){_(Object(O.a)(R,(function(e){e.isAscending=!R.isAscending,e.sortColumn=t})))}),[R,_]),J=Object(r.useCallback)((function(t,e){if("districtName"!==R.sortColumn){var i=s.v[R.sortColumn],a=R.delta&&i.showDelta?"delta":"total",l=Object(d.i)(n.districts[t],R.sortColumn,{perMillion:m},k)[a],c=Object(d.i)(n.districts[e],R.sortColumn,{perMillion:m},k)[a];return R.isAscending?l-c:c-l}return R.isAscending?t.localeCompare(e):e.localeCompare(t)}),[R,n,m,k]),y=Object(r.useCallback)((function(){j?N.stateCode!==j&&p(Object(O.a)(N,(function(t){t.stateCode=j,t.districtName=null}))):u&&(N.districtName===u&&N.stateCode===n.stateCode||p(Object(O.a)(N,(function(t){t.stateCode=n.stateCode,t.districtName=u}))))}),[n.stateCode,u,N,p,j]),V=Object(r.useCallback)((function(){n.districts&&D(!w)}),[w,n]),q=E(u);u===s.D&&(q="".concat(E(s.D)," [").concat(E(s.u[n.stateCode]),"]"));var B=Object(r.useCallback)((function(t){z.push("state/".concat(t))}),[z]),G=Object(r.useCallback)((function(){D(!1),F.current.scrollIntoView({block:"start"})}),[]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:c()("row",{"is-total":"TT"===j},{"is-highlighted":j&&(null===N||void 0===N?void 0:N.stateCode)===j||u&&(null===N||void 0===N?void 0:N.districtName)===u&&(null===N||void 0===N?void 0:N.stateCode)===n.stateCode}),onMouseEnter:y,onClick:V,ref:F,children:[Object(b.jsxs)("div",{className:"cell",children:[Object(b.jsx)("div",{className:"state-name fadeInUp",children:E(s.u[j])||q}),(null===n||void 0===n||null===(e=n.meta)||void 0===e?void 0:e.notes)&&Object(b.jsx)(h.a,{data:n.meta.notes,children:Object(b.jsx)(g.m,{size:16})})]}),o.map((function(t){return Object(b.jsx)(v,{data:n,statistic:t,isPerMillion:m,lastUpdatedTT:k},t)}))]}),w&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"state-meta",children:[Object(b.jsxs)("div",{className:"state-meta-top",children:[(null===n||void 0===n||null===(i=n.meta)||void 0===i?void 0:i.last_updated)&&Object(b.jsxs)("p",{className:"last-updated",children:[Object(b.jsx)(g.e,{}),Object(d.a)("".concat(Object(d.d)(n.meta.last_updated)," ").concat(E("ago")))]}),Object(b.jsxs)("div",{className:"state-page",onClick:B.bind(this,j),children:[Object(b.jsx)(g.j,{}),Object(b.jsx)("span",{children:E("See more details on {{state}}",{state:j})})]})]}),n.districts&&s.D in n.districts&&Object(b.jsx)("div",{className:"state-meta-bottom",children:Object(b.jsxs)("div",{className:c()("disclaimer"),children:[Object(b.jsx)(g.a,{}),Object(b.jsx)("span",{children:E("District-wise data not available in state bulletin")})]})})]}),Object(b.jsxs)("div",{className:c()("row","heading"),children:[Object(b.jsxs)("div",{className:"cell heading",onClick:I.bind(this,"districtName"),children:[Object(b.jsx)("div",{className:"district-name",children:E("District")}),"districtName"===R.sortColumn&&Object(b.jsx)("div",{className:c()("sort-icon",{invert:!R.isAscending}),children:Object(b.jsx)(g.g,{size:10})})]}),o.map((function(t){return Object(b.jsx)(f.a,{statistic:t,sortData:R,setSortData:_,handleSort:I.bind(l,t)},t)}))]})]}),w&&Object.keys(n.districts||{}).sort((function(t,e){return J(t,e)})).map((function(t){return Object(b.jsx)(C,{data:n.districts[t],tableStatistics:o,districtName:t,regionHighlighted:N,setRegionHighlighted:p,stateCode:j,isPerMillion:m,expandTable:M,lastUpdatedTT:k},t)})),w&&Object(b.jsx)("div",{className:"spacer-row",children:Object(b.jsxs)("div",{className:"spacer",children:[Object(b.jsx)("p",{children:"End of ".concat(E(s.u[j]),"'s districts")}),Object(b.jsx)("div",{className:"fold",onClick:G,children:Object(b.jsx)(g.i,{})})]})})]})}var k=function(t,e){var i,a,s,d;return!!o()(null===(i=t.data)||void 0===i?void 0:i.total,null===(a=e.data)||void 0===a?void 0:a.total)&&(!!o()(null===(s=t.data)||void 0===s?void 0:s.delta,null===(d=e.data)||void 0===d?void 0:d.delta)&&(!!o()(t.isPerMillion,e.isPerMillion)&&(!(!o()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&o()(t.regionHighlighted.stateCode,t.stateCode)||o()(e.regionHighlighted.stateCode,e.stateCode))&&(!(!o()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&o()(t.regionHighlighted.districtName,t.districtName)||o()(e.regionHighlighted.districtName,e.districtName))&&(!!o()(t.expandTable,e.expandTable)&&!!o()(t.tableStatistics,e.tableStatistics))))))};e.default=Object(r.memo)(M,k)}}]);
//# sourceMappingURL=43.2dbf2e8a.chunk.js.map