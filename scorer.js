var x=JSON.parse(localStorage.getItem("team1ScrCard"))
var y=JSON.parse(localStorage.getItem("team2ScrCard"))

console.log(x,y);

var go=Object.values(x)
var mo=Object.values(y)


for(i=1;i<go.length;i++){
 let plr="player"+i;
 document.getElementById("t1t").innerHTML+="<tr><td>"+plr+"</td>"+"<td>"+go[i]+"</td></tr>"
}
document.getElementById("t1r").innerHTML+="<td>"+"TEAM 1 Score"+"</td><td>"+go[0]+"</td>"
var t1score=go[0];

for(i=1;i<mo.length;i++){
    let plr="player"+i;
    document.getElementById("t2t").innerHTML+="<tr><td>"+plr+"</td>"+"<td>"+mo[i]+"</td></tr>"
}
document.getElementById("t2r").innerHTML+="<tr><td>"+"TEAM 2 Score"+"</td><td>"+mo[0]+"</td></tr>"
var t2score=mo[0];

// console.log(go);
// console.log(mo);

go.shift();
mo.shift();

// console.log(go);
// console.log(mo);
var op=[]
let og=go.forEach((ele)=>{
    let ax=ele.split(" ").filter(Boolean)
    // console.log(ax);
    op.push(ax.reduce((sol,ele)=>{
        return sol + parseInt(ele)
    },0))
    
})
console.log(Math.max(...op))

var po=[]
let om=mo.forEach((ele)=>{
    let bx=ele.split(" ").filter(Boolean)
    // console.log(ax);
    po.push(bx.reduce((sol,ele)=>{
        return sol + parseInt(ele)
    },0))
    
})
console.log(Math.max(...po))

if(t1score>t2score){
    alert("TEAM 1 Wins")
    document.getElementById("tc").innerHTML="player "+(op.indexOf(Math.max(...op))+1)+ " of TEAM 1 is the Man of the Match With Score " + Math.max(...op)
}else{
    alert("TEAM 2 Wins")
    document.getElementById("tc").innerHTML="player "+(po.indexOf(Math.max(...po))+1)+ " of TEAM 2 is the Man of the Match With Score "+ Math.max(...po)

}