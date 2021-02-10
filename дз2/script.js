
var temp={
    canad:12,
    german:34,
    italy:24,
    poland:5,
}
var a=0,b=0,c=0
function sred(){
    for(key in temp){
        a+=temp[key]
        b++
        c=a/b
    }
    alert('sred tmp:'+c)
}
sred()
function max(){
    var max=0
for(key in temp){
    if(max<temp[key]){
        max=temp[key]
        }
    }
    alert(max)
}
max()

