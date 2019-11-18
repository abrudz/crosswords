i=t=0;
I=s=>{t+=s
 x.innerHTML=x.getAttribute("data-c").replace(new RegExp(".{"+s+"}","g"),r=>"<tr>"+[...r].map(c=>"<td class="+c+"><input id=c"+(i++)+" onfocus=this.select() onkeyup=this.select() onclick=this.select() onchange=this.select() value=' ' maxlength="+(c==="b"?"0' readonly":"1")+" /></td>").join("")+"</tr>");
 (q=document.querySelectorAll(".n input,.e input"))[0].focus()}
C=_=>{if((new RegExp(x.getAttribute("data-a"))).test([...q].map(i=>i.value).join("")))alert("That's correct!")}
document.addEventListener("keydown",e=>
document.getElementById("c"+((i=+document.activeElement.id.slice(1))+((k=e.key)=="ArrowLeft"?(t*!(i%t))-1:k=="ArrowRight"?1-t*(!((i+1)%t)):k=="ArrowUp"?-t:k=="ArrowDown"?t:k=="Home"?-i%t:k=="End"?t-i%t-1:k=="PageUp"?i%t-i:k=="PageDown"?i%t-i-t:0)+t*t)%(t*t)).focus())