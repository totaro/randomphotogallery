const imageContainerEl = document.querySelector(".image-container")

const btnEl = document.querySelector(".btn")

btnEl.addEventListener("click", ()=>{

    //console.log("clicked");
    let imageNum = 3;
    addNewImages(imageNum)
})

function addNewImages(imageNum){

    for (let index = 0; index < imageNum; index++) {
        
        const newImgEl = document.createElement("img");
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imageContainerEl.appendChild(newImgEl);
        
    }


    //one image
    /*
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
    imageContainerEl.appendChild(newImgEl);
    */


}