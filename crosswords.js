D=document;
$=q=>[...D.querySelectorAll(q)];
I=t=>{
 (x=$("table")[n=0]).innerHTML=x.getAttribute("data-c").replace(new RegExp(".{"+t+"}","gi"),r=>"<tr>"+[...r].map(c=>"<td class="+c+"><input id=c"+(n++)+" onfocus=this.select() onkeyup=this.select() onclick=this.select() onchange=this.select() oninput=C() value=' ' maxlength="+(c==="b"?"0' readonly":"1")+" /></td>").join("")+"</tr>");
 D.addEventListener("keydown",e=>$("#c"+((i=+D.activeElement.id.slice(1))+((k=e.key)
  =="ArrowLeft"?(t*!(i%t))-1:
 k=="ArrowRight"?1-t*(!((i+1)%t)):
 k=="ArrowUp"?-t:
 k=="ArrowDown"?t:
 k=="Home"?-i%t:
 k=="End"?t-i%t-1:
 k=="PageUp"?i%t-i:
 k=="PageDown"?i%t-i-t:
 0)+t*t)%(t*t))[0].focus());
 $("[data-l]").map(e=>{e.value=e.getAttribute("data-l").charCodeAt()-96;e.classList.add("l")});
 (q=$(".n input,.e input"))[0].focus()}
C=_=>{if((new RegExp(x.getAttribute("data-a")
 .replace(/\s/g,"")
 .replace(/[\|\+\*\[\]\(\)\.\^\\\/\?]/g,"\\$&")
 .replace(/⌿/g,"[⌿\\/]")
 .replace(/⍀/g,"[⍀\\\\]")
 .replace(/ϼ/g,"[⍴⌿\\/]")
 .replace(/⊕/g,"[⊖⌽]")
 .replace(/≢/g,"[≢⍴]")
 .replace(/∧/g,"[∧^×⌊]")
 .replace(/∨/g,"[∨⌈]")
 .replace(/⍪/g,"[⍪,]")
 .replace(/\{/g,"[")
 .replace(/\}/g,"]"))).test(q.map(i=>i.value).join("")))alert("That's correct!")}
F=_=>{e=$(".e input,.n input");
 a=x.getAttribute("data-a").replace(/\s/g,"").replace(/ϼ/g,"⍴").replace(/⊕/g,"⊖")
 for(i=0;i<e.length;i++){e[i].value=a[i]}}