let image=document.querySelector('img')
let nextBtn=document.querySelector('.next')
let prevBtn=document.querySelector('.prev')
let imgSrcArray=["image/photo1.jpeg","image/2.png","image/photo2.jpeg"]
let arrayindex=0
function nextImgHandler(){
arrayindex++
if(arrayindex>imgSrcArray.length-1){
  arrayindex=0
  }
  
image.src=imgSrcArray[arrayindex]
}
function prevImgHandler(){
  arrayindex--
  if(arrayindex<0){
  arrayindex=imgSrcArray.length-1
  }
  image.src=imgSrcArray[arrayindex]
}
setInterval(function(){
nextImgHandler()
},3000)
 nextBtn.addEventListener("click",nextImgHandler)
 prevBtn.addEventListener("click",prevImgHandler)




















