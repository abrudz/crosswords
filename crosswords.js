I=i=>{x.innerHTML=x.getAttribute("data-c").replace(/............/g,r=>"<tr>"+r.replace(/./g,c=>"<td class="+c+"><input id=c"+(i++)+" onfocus=this.select() onkeyup=this.select() onclick=this.select() value=' ' maxlength="+(c==="b"?"0' readonly":"1")+" /></td>")+"</tr>")
c0.focus()};
C=_=>{if((new RegExp(x.getAttribute("data-a"))).test(Array.from(document.getElementsByTagName("input")).map(i=>i.value).join("")))alert("That's correct!")}
