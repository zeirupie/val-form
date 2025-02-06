const wrapper = document.querySelector('.wrapper');
const yesBtn = document.querySelector('.yes-btn');
const imgV = document.querySelector('.img-v');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

   
    noBtn.addEventListener('mouseover', () => {
        const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) - 1;
        const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) - 1;
        noBtn.style.rigth = i + 'px';
        noBtn.style.top = j + 'px';
        document.getElementById("img-v").innerHTML = "<img src='nores.jpg'>"

        setTimeout(function() 
        {
            document.getElementById("img-v").innerHTML = "<img src='kyutie.jpg'>"
           
        }, 1500);

        
    });

   function nores() {
        const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) - 1;
        const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) - 1;
        noBtn.style.rigth = i + 'px';
        noBtn.style.top = j + 'px';

        document.getElementById("img-v").innerHTML = "<img src='nores.jpg'>"

        setTimeout(function() 
        {
            document.getElementById("img-v").innerHTML = "<img src='kyutie.jpg'>"
           
        }, 1500);     
    };

    function yesres(){
        window.location.href="seeYou.html";
    }

