
var temp={
    canad:12,
    german:34,
    italy:44,
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
alert('max tmp:'+Math.max(temp[key]))
}
max()

