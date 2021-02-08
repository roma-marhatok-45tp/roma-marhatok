var button=document.getElementById('buttonid')
var i = 0;
var mass=[('page'), ('pagedark'),('pagegreen'),('pageyellow')]
button.addEventListener( 'click' , function() {
    i++;
    document.body.classList.toggle(mass[i])
    if(i==mass.length){
    i=0
}
})

var button1=document.getElementById('button1')
button1.addEventListener( 'click', function() {
    
    window.location.href='https://jdevelop.info/articles/html-css-js/200-perekhod-na-druguyu-stranitsu-s-pomoshchyu-javascript'
   
})
