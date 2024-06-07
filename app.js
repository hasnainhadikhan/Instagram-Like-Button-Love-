let contain = document.querySelector("#container")
let love = document.querySelector("i") 
contain.addEventListener("dblclick",function(){
    love.style.transform ='translate(-50%,-50%) scale(1.2)'
    love.style.color= 'red'
setTimeout(function(){
    love.style.transform ='translate(-50%,-50%) scale(0)'

},2000)
})