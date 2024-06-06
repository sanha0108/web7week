const buttonTags = document.querySelectorAll(".BT");
    
        const imgTag = document.querySelector("a.mainIMG img")
    
        buttonTags[0].addEventListener("click", function(){
            console.log("bT");
            imgTag.src = "https://i.postimg.cc/ydksmN3z/image.png"
        })
    
        buttonTags[1].addEventListener("click", function(){
            console.log("button2");
            imgTag.src = "https://i.postimg.cc/jjZvFGjQ/1w12.png"
        })
    
        buttonTags[2].addEventListener("click", function(){
            console.log("button3");
            imgTag.src = "https://i.postimg.cc/63qzJY2s/33123.jpg"
        })
    
        buttonTags[3].addEventListener("click", function(){
            console.log("button4");
            imgTag.src = "https://i.postimg.cc/RZmk5xvj/2222.png"
        })


        // 글씨움직이는효과
    
        const changeImage = document.querySelector
    
        document.addEventListener('DOMContentLoaded', function() {
    
        var repeatTText = document.querySelector('.repeatT').innerHTML;
        document.querySelector('.repeatT').innerHTML = '<span>' + repeatTText + '</span>';
        });