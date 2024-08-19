(function(){"use strict";var n={4659:function(n,e,t){var o=t(5130),r=t(6768);const i=(0,r.Lk)("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⁉️</text></svg>"},null,-1);function u(n,e,t,o,u,a){const l=(0,r.g2)("BingoValidator");return(0,r.uX)(),(0,r.CE)(r.FK,null,[i,(0,r.bF)(l)],64)}var a=t(4232);const l=n=>((0,r.Qi)("data-v-4bbe327e"),n=n(),(0,r.jt)(),n),s=l((()=>(0,r.Lk)("h1",null,"Bingo Validator",-1))),c=l((()=>(0,r.Lk)("h2",null,"Frage Nummer:",-1))),d={class:"input-container"},f={class:"question-container"},v=l((()=>(0,r.Lk)("div",null,"Haben beide dasselbe geantwortet?",-1))),b={class:"answer-container"},p={class:"result-container"},g=l((()=>(0,r.Lk)("b",null,"Auswahl:",-1))),w=l((()=>(0,r.Lk)("b",null,"Bingo-Karten:",-1)));function h(n,e,t,o,i,u){return(0,r.uX)(),(0,r.CE)("div",null,[s,c,(0,r.Lk)("div",d,[(0,r.Lk)("div",f,[(0,r.Lk)("div",{class:"button",onClick:e[0]||(e[0]=(...n)=>o.decreaseQuestionNo&&o.decreaseQuestionNo(...n))},"⬅️"),(0,r.Lk)("div",{id:"question_no",onClick:e[1]||(e[1]=(...n)=>o.enterNumber&&o.enterNumber(...n))},(0,a.v_)(o.questionNo),1),(0,r.Lk)("div",{class:"button",onClick:e[2]||(e[2]=n=>o.questionNo++)},"➡️")]),v,(0,r.Lk)("div",b,[(0,r.Lk)("div",{class:"button",onClick:e[3]||(e[3]=n=>o.setQuestion(!0))},"✅"),(0,r.Lk)("div",{class:"button",onClick:e[4]||(e[4]=n=>o.setQuestion(!1))},"❌")])]),(0,r.Lk)("div",p,[(0,r.Lk)("p",null,[g,(0,r.eW)(" "+(0,a.v_)(o.formattedChosenNumbers),1)]),(0,r.Lk)("p",null,[w,(0,r.eW)(" "+(0,a.v_)(o.formattedBingos),1)])]),(0,r.Lk)("div",{class:"button",id:"reset-button",onClick:e[5]||(e[5]=(...n)=>o.reset&&o.reset(...n))},"Reset")])}t(4114),t(7642),t(8004),t(3853),t(5876),t(2475),t(5024),t(1698);var k=t(144),m="1\n3,12,13,19,2\n8,21,23,15,6\n7,11,17,18,14\n9,16,20,22,1\n10,4,5,25,24\n---\n2\n10,25,5,24,11\n12,18,23,9,8\n4,21,7,2,20\n19,14,1,16,17\n3,22,13,6,15\n---\n3\n24,15,7,16,4\n17,23,22,12,19\n13,1,11,5,8\n25,18,20,9,6\n2,10,21,14,3\n---\n4\n19,22,25,6,23\n2,9,1,12,7\n18,10,8,15,3\n4,13,11,24,21\n5,17,14,20,16\n---\n5\n6,14,19,12,8\n17,18,25,1,2\n20,13,16,15,22\n23,10,4,11,9\n24,21,7,5,3\n---\n6\n23,4,18,5,13\n8,7,9,6,2\n1,25,16,14,19\n15,17,24,21,10\n3,12,20,11,22\n---\n7\n17,23,6,4,19\n15,1,7,21,10\n20,24,12,18,11\n5,8,25,2,14\n13,9,3,22,16\n---\n8\n4,17,2,16,7\n11,3,19,14,9\n20,10,1,15,6\n22,12,13,24,21\n8,5,23,18,25\n---\n9\n20,25,6,22,15\n11,17,8,5,19\n7,9,4,1,18\n23,21,16,10,3\n13,24,12,2,14\n---\n10\n16,4,12,22,13\n14,25,7,6,3\n1,11,17,10,21\n8,15,18,2,5\n23,20,9,19,24\n---\n11\n3,9,23,16,4\n13,25,12,10,2\n8,11,17,5,14\n18,24,15,19,1\n7,20,6,22,21\n---\n12\n11,18,5,24,21\n3,1,7,13,10\n19,22,14,8,9\n2,12,6,20,15\n4,23,16,25,17\n---\n13\n16,20,5,3,10\n1,8,4,9,24\n21,12,15,18,19\n2,22,7,17,23\n13,14,6,25,11\n---\n14\n13,17,10,19,14\n4,5,8,22,12\n6,25,23,16,7\n21,3,15,9,18\n1,20,2,24,11\n---\n15\n5,12,20,13,3\n15,10,24,4,21\n7,23,25,14,6\n22,1,11,17,16\n19,9,18,8,2\n---\n16\n19,14,9,7,17\n4,24,13,6,21\n8,11,16,23,1\n5,3,15,10,2\n22,18,25,12,20\n---\n17\n23,21,12,16,3\n7,2,10,8,5\n14,4,1,6,20\n11,25,9,19,24\n18,15,22,17,13\n---\n18\n1,10,25,13,7\n16,20,22,11,15\n14,12,4,19,6\n18,23,9,17,8\n2,24,5,21,3\n---\n19\n18,24,17,8,22\n1,16,14,2,7\n13,25,6,15,4\n10,11,9,21,23\n3,5,20,19,12\n---\n20\n24,7,14,21,9\n4,15,12,3,17\n5,18,19,13,8\n16,22,11,25,23\n20,1,6,2,10\n---\n21\n22,6,23,7,13\n2,11,4,9,19\n14,5,12,8,1\n17,3,21,18,20\n10,16,24,25,15\n---\n22\n10,22,24,16,6\n2,15,9,18,23\n7,25,20,4,3\n5,19,13,11,14\n17,1,8,12,21\n---\n23\n4,18,14,16,6\n2,22,9,17,5\n7,19,25,20,11\n3,13,8,21,15\n23,12,10,1,24\n---\n24\n1,14,13,16,9\n23,10,12,8,17\n22,15,6,18,5\n4,21,3,19,24\n2,7,11,20,25\n---\n25\n11,16,13,23,10\n7,19,2,4,9\n22,6,14,20,3\n17,15,5,12,8\n25,21,18,24,1\n---\n26\n4,17,23,11,9\n25,16,15,21,10\n24,3,20,8,12\n1,13,5,18,22\n14,2,19,6,7\n---\n27\n9,17,8,22,20\n23,13,2,5,3\n11,10,14,19,18\n1,7,4,25,15\n24,12,21,16,6\n---\n28\n19,9,4,15,3\n25,14,12,16,22\n20,13,21,11,23\n10,8,6,17,18\n24,1,7,5,2\n---\n29\n12,16,11,9,10\n2,18,19,1,20\n22,17,6,25,5\n13,4,3,15,14\n21,23,7,8,24\n---\n30\n7,8,20,10,23\n1,2,9,12,14\n24,21,16,25,17\n15,4,3,5,11\n22,18,19,6,13\n---\n31\n22,12,1,10,24\n23,3,5,8,15\n17,18,25,13,4\n9,19,2,20,16\n7,6,21,14,11\n---\n32\n5,12,7,10,25\n14,18,15,13,19\n16,23,24,2,11\n20,9,21,1,4\n8,6,17,22,3\n---\n33\n17,25,4,1,9\n6,22,16,20,10\n23,7,15,24,11\n18,19,5,21,13\n3,14,2,8,12\n---\n34\n12,9,11,21,15\n16,3,20,13,2\n24,10,5,17,22\n19,7,6,18,25\n8,14,23,4,1\n---\n35\n21,19,11,14,5\n10,15,3,17,22\n23,9,18,2,7\n13,4,20,25,6\n24,12,1,16,8\n---\n36\n13,23,12,22,5\n11,3,9,6,8\n15,14,10,4,1\n20,19,16,17,25\n21,7,2,18,24\n---\n37\n21,7,13,15,9\n23,1,10,17,6\n22,14,19,5,12\n25,11,24,18,3\n16,8,4,20,2\n---\n38\n16,7,1,18,13\n15,24,2,3,14\n11,22,12,5,4\n20,10,9,25,23\n17,6,21,8,19\n---\n39\n21,20,18,3,24\n25,7,8,17,10\n14,23,16,2,9\n6,1,12,4,11\n5,15,13,19,22\n---\n40\n7,17,6,19,2\n25,20,3,21,9\n10,4,14,23,24\n5,1,16,13,15\n22,11,18,8,12\n---\n41\n16,1,23,22,6\n19,7,17,20,5\n10,12,25,18,8\n21,24,2,9,13\n15,14,3,4,11\n---\n42\n15,18,19,6,7\n24,9,13,4,25\n8,17,5,1,11\n10,16,14,20,12\n22,23,2,21,3\n---\n43\n9,17,18,1,4\n8,14,25,20,3\n23,2,15,6,24\n11,21,10,13,12\n19,16,22,5,7\n---\n44\n1,24,2,16,7\n12,20,18,5,11\n15,10,4,22,13\n21,6,8,3,9\n25,19,23,17,14\n---\n45\n10,14,18,15,7\n24,3,1,20,21\n9,16,5,11,8\n13,12,23,19,17\n4,6,2,22,25\n---\n46\n12,13,9,7,2\n4,8,20,17,1\n23,22,3,19,15\n14,16,5,25,24\n21,6,10,18,11\n---\n47\n12,11,6,24,14\n16,13,1,3,8\n7,5,20,2,4\n18,17,10,15,22\n23,21,25,9,19\n---\n48\n6,16,15,21,5\n3,13,10,23,11\n24,25,20,9,22\n4,8,17,1,18\n14,2,7,12,19\n---\n49\n17,5,16,13,23\n15,6,25,10,18\n3,2,4,22,21\n24,19,12,9,7\n11,1,20,8,14\n---\n50\n20,24,18,12,11\n14,15,6,9,23\n17,25,3,10,2\n16,22,1,19,21\n13,7,8,4,5\n---\n51\n16,13,22,6,4\n15,7,17,20,21\n1,23,5,3,2\n11,18,24,14,12\n8,25,10,19,9\n---\n52\n20,15,9,7,21\n25,17,8,18,23\n13,16,12,3,6\n1,11,5,22,19\n14,4,2,24,10\n---\n53\n4,20,11,25,16\n7,6,23,9,1\n22,17,2,14,21\n3,5,18,15,24\n10,13,12,8,19\n---\n54\n15,23,24,12,19\n7,1,18,4,3\n13,6,5,8,25\n11,21,17,9,20\n2,10,14,22,16\n---\n55\n20,11,7,19,18\n10,14,6,2,1\n8,22,13,16,3\n21,9,15,25,17\n23,4,24,5,12\n---\n56\n13,11,17,25,20\n2,14,23,4,24\n10,6,5,22,21\n7,18,19,15,16\n12,3,8,9,1\n---\n57\n23,15,5,19,7\n11,21,24,17,8\n22,20,9,13,6\n2,16,14,25,1\n10,12,4,18,3\n---\n58\n1,5,11,3,20\n17,4,12,21,19\n14,16,6,23,13\n25,8,10,18,15\n24,2,9,22,7\n---\n59\n22,5,25,3,2\n20,18,21,10,12\n17,9,14,1,4\n6,19,11,13,16\n8,15,24,7,23\n---\n60\n10,23,21,3,4\n14,8,7,6,25\n1,16,9,19,5\n11,15,20,2,12\n13,17,24,22,18\n---\n61\n7,10,11,6,19\n25,15,22,1,3\n5,2,18,16,24\n13,20,12,9,23\n14,21,4,8,17\n---\n62\n8,4,2,24,11\n12,15,10,16,23\n13,7,20,19,9\n21,1,14,18,17\n25,22,3,5,6\n---\n63\n11,6,23,4,20\n8,21,10,2,18\n12,5,22,19,24\n14,3,25,13,17\n7,15,1,16,9\n---\n64\n8,7,15,10,21\n20,1,25,24,6\n18,23,2,16,13\n12,19,22,17,14\n9,11,5,3,4\n---\n65\n3,19,10,7,14\n2,20,25,8,11\n4,18,6,21,12\n23,5,22,1,13\n16,17,15,9,24\n---\n66\n12,20,9,4,25\n18,13,22,3,16\n1,19,2,14,5\n24,10,8,21,15\n7,6,23,11,17\n---\n67\n12,11,14,8,24\n17,15,23,21,3\n16,19,20,1,7\n10,4,13,22,6\n2,18,25,5,9\n---\n68\n7,19,13,2,23\n18,8,12,20,1\n17,9,10,25,22\n4,3,6,11,15\n24,21,16,14,5\n---\n69\n11,13,14,4,7\n9,6,3,16,8\n10,1,24,19,20\n5,17,15,23,21\n12,22,2,18,25\n---\n70\n18,2,11,15,20\n8,23,17,1,24\n3,16,19,21,4\n25,6,22,14,5\n10,7,9,13,12\n---\n71\n12,19,16,7,11\n6,9,17,20,22\n10,1,18,15,24\n4,5,23,14,2\n13,8,21,25,3\n---\n72\n8,25,1,13,10\n19,15,16,7,5\n20,3,12,22,14\n6,11,9,2,24\n21,4,23,18,17\n---\n73\n19,10,9,23,21\n15,6,8,12,4\n1,25,22,17,2\n20,16,11,18,13\n3,14,7,24,5\n---\n74\n25,21,1,7,4\n14,17,6,18,9\n22,20,10,23,3\n19,12,24,5,16\n13,2,11,15,8\n---\n75\n17,15,3,4,14\n20,18,2,21,1\n12,6,10,7,25\n5,8,23,13,9\n22,19,16,24,11\n---\n76\n12,14,21,4,17\n11,19,10,2,18\n20,3,25,22,5\n24,15,8,16,23\n7,6,1,9,13\n---\n77\n6,2,5,13,1\n22,9,25,10,20\n24,8,11,4,17\n23,7,21,12,15\n14,16,3,18,19\n---\n78\n6,3,1,14,21\n5,8,19,20,4\n15,17,18,9,24\n7,10,25,16,23\n2,12,13,22,11\n---\n79\n23,8,17,25,5\n14,1,22,12,20\n19,7,24,2,15\n21,18,3,13,6\n16,11,9,4,10\n---\n80\n4,14,13,1,5\n23,11,7,15,9\n21,19,3,17,6\n16,24,20,2,22\n8,18,12,25,10\n",L={name:"HelloWorld",props:{msg:String},setup(){const n=[],e=(0,k.KR)(new Set),t=(0,k.KR)(new Set);function o(){let e=m.split("---\n");e.forEach((e=>{let t=e.split(/\r?\n/),o=t[1].split(",").length,r={id:Number(t[0]),horizontalRows:[],verticalRows:[...new Array(o)].map((()=>new Set)),diagonalRows:[new Set,new Set]};for(let n=1;n<=o;n++){let e=t[n].split(",").map((n=>Number(n)));r.horizontalRows.push(new Set(e));for(let n=0;n<e.length;n++)r.verticalRows[n].add(e[n]);r.diagonalRows[0].add(e[n-1]),r.diagonalRows[1].add(e[o-n])}n.push(r)}))}function i(){0!==e.value.size&&(t.value.clear(),n.forEach((n=>{u(n,e.value)&&t.value.add(n.id)})))}function u(n,e){return n.horizontalRows.find((n=>n.isSubsetOf(e)))||n.verticalRows.find((n=>n.isSubsetOf(e)))||n.diagonalRows.find((n=>n.isSubsetOf(e)))}o(),(0,r.wB)(e.value,(()=>i()));let a=(0,k.KR)(1);function l(){a.value>1&&a.value--}function s(){confirm("Reset löscht alle eingegebenen Zahlen!")&&(a.value=1,t.value.clear(),e.value.clear())}function c(n){n?e.value.add(a.value):e.value.delete(a.value)}const d=(0,r.EW)((()=>[...e.value].sort(((n,e)=>n-e)).join(", "))),f=(0,r.EW)((()=>{let n=[...t.value].sort(((n,e)=>n-e)).join(", ");return""===n?"keine Bingos :(":n}));function v(){let n=parseInt(prompt("Neue Frage:"),10);n&&n>0&&n<1e3&&(a.value=n)}return{formattedBingos:f,formattedChosenNumbers:d,questionNo:a,decreaseQuestionNo:l,reset:s,setQuestion:c,enterNumber:v}}},N=t(1241);const R=(0,N.A)(L,[["render",h],["__scopeId","data-v-4bbe327e"]]);var O=R,C={name:"App",components:{BingoValidator:O}};const x=(0,N.A)(C,[["render",u]]);var y=x;(0,o.Ef)(y).mount("#app")}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return n[o].call(i.exports,i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(e,o,r,i){if(!o){var u=1/0;for(c=0;c<n.length;c++){o=n[c][0],r=n[c][1],i=n[c][2];for(var a=!0,l=0;l<o.length;l++)(!1&i||u>=i)&&Object.keys(t.O).every((function(n){return t.O[n](o[l])}))?o.splice(l--,1):(a=!1,i<u&&(u=i));if(a){n.splice(c--,1);var s=r();void 0!==s&&(e=s)}}return e}i=i||0;for(var c=n.length;c>0&&n[c-1][2]>i;c--)n[c]=n[c-1];n[c]=[o,r,i]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={524:0};t.O.j=function(e){return 0===n[e]};var e=function(e,o){var r,i,u=o[0],a=o[1],l=o[2],s=0;if(u.some((function(e){return 0!==n[e]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(l)var c=l(t)}for(e&&e(o);s<u.length;s++)i=u[s],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(c)},o=self["webpackChunkbingo_detector"]=self["webpackChunkbingo_detector"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(4659)}));o=t.O(o)})();
//# sourceMappingURL=app.c345196d.js.map