const gameContainer = document.querySelector(".container"),
   userResult = document.querySelector(".user img");
   cpuResult = document.querySelector(".cpu img");
   text = document.querySelector(".text");
   optionImage = document.querySelectorAll(".option-image");

//    Loop through each option image
optionImage.forEach((image,index)=>{
    image.addEventListener("click", () =>{
        image.classList.add("active");
    
    optionImage.forEach((image2,index2)=>{
    //   if the current index doesn't match the clicked index
    // remove active classList from the other option images
    })
})

})

// Loop through each option image again
