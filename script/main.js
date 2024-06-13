window.onload = function(){
 //슬라이드 기능 넣기
 //메인 이미지 슬라이드 기능
 let btn_next = document.querySelector(".main_btn_next")
 let slider = document.querySelector(".main_train")
 let count = 0
 let num =  document.querySelector(".main_cur_slide")



 btn_next.addEventListener("click",function(){
     count++
     if(count>1){count=1}
     slider.style.transform = `translateX(${-50*count}%)`
     num.innerHTML = count+1
 })
 let btn_prev = document.querySelector(".main_btn_prev")
 btn_prev.addEventListener("click",function(){
     count--
     if(count<0){count=0}
     slider.style.transform = `translateX(${-50*count}%)`
     num.innerHTML = count+1
 })

//브랜드 서포트 영역 슬라이드 기능
let btn_support_next = document.querySelector(".next")
let slider1 = document.querySelector(".support_train")
let num1 = document.querySelector(".sup_cur_slide")
let count_support = 0
btn_support_next.addEventListener("click",function(){
    count_support++
    if(count_support>3){count_support = 3}
    slider1.style.transform = `translateX(${-25*count_support}%)`
    num1.innerHTML = count_support+1
})

let btn_support_prev = document.querySelector(".prev")
btn_support_prev.addEventListener("click",function(){
    count_support--
    if(count_support<0){count_support = 0}
    slider1.style.transform = `translateX(${-25*count_support}%)`
    num1.innerHTML = count_support+1
})


}