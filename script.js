window.onload = function(){

    let ret = [];
    let numberMax = 8;
    while(ret.length < numberMax){

        let max = 0;
        let min = numberMax+1;
        number = Math.floor(Math.random() * (max - min + 1) + min)
        
        if(ret.indexOf(number) == -1) ret.push(number);
    }

    let imgs = document.querySelectorAll(".section img")
    let sections = document.querySelectorAll(".section")
    let recebe = sections[8];
    let imagemMover;

    imgs.forEach((element,index)=>{
        element.src = "img/0" + ret[index] + ".png";
        element.addEventListener("dragstart",()=>{
            imagemMover = element
        })
    })
    sections.forEach((element,index)=>{

        element.addEventListener("dragend",()=>{
            moverImg()
        })
        element.addEventListener("dragover",(e)=>{
            e.stopImmediatePropagation()
            recebe = element
        })
        element.addEventListener("click",(e)=>{
            e.preventDefault()
            for(sec of sections){
                if(sec.firstElementChild.src.indexOf("empty") != -1){
                    recebe = sec
                    break;
                }
            }
            if(element.firstElementChild.src.indexOf("empty") == -1){
                imagemMover = element.firstElementChild;
                moverImg()
            }
        })
    })
    
    let elementEmpty = imgs[8];
    elementEmpty.src = "img/empty.jpg";

    function moverImg(){

        let mover = false;
        let posicoesPermitidas = [];
        posicaoMover = imagemMover.parentNode.id
        posicaoReceber = recebe.id
        
        switch(posicaoMover){
            case "1":
                posicoesPermitidas = [2,4];
                if(posicoesPermitidas.indexOf(posicaoReceber*1) != -1) mover = true;
                break;
            case "2":
                posicoesPermitidas = [1,3,5];
                if(posicoesPermitidas.indexOf(posicaoReceber*1) != -1) mover = true;
                break;
            case "3":
                posicoesPermitidas = [2,6];
                if(posicoesPermitidas.indexOf(posicaoReceber*1) != -1) mover = true;
                break;
            case "4":
                posicoesPermitidas = [1,5,7];
                if(posicoesPermitidas.indexOf(posicaoReceber*1) != -1) mover = true;
                break;
            case "5":
                posicoesPermitidas = [2,4,6,8];
                if(posicoesPermitidas.indexOf(posicaoReceber*1) != -1) mover = true;
                break;
            case "6":
                posicoesPermitidas = [3,5,9];
                if(posicoesPermitidas.indexOf(posicaoReceber*1) != -1) mover = true;
                break;
            case "7":
                posicoesPermitidas = [4,8];
                if(posicoesPermitidas.indexOf(posicaoReceber*1) != -1) mover = true;
                break;
            case "8":
                posicoesPermitidas = [5,7,9];
                if(posicoesPermitidas.indexOf(posicaoReceber*1) != -1) mover = true;
                break;
            case "9":
                posicoesPermitidas = [6,8];
                if(posicoesPermitidas.indexOf(posicaoReceber*1) != -1) mover = true;
                break;                                  
        }
        if(mover){

            if(recebe.firstElementChild.src.indexOf("empty") != -1){
                
                imagemMover.parentNode.innerHTML = '<img src="img/empty.jpg" draggable="false">'
                recebe.innerHTML = ""
                recebe.appendChild(imagemMover)
                document.getElementById("som").play()

                let vitoria = "";
                for(sec of sections){
                    if(sec.id != '9'){
                        if(sec.firstElementChild.src.indexOf(sec.id) != -1){
                            vitoria = vitoria + "" + sec.id
                        }
                    }
                }
                if(vitoria == "12345678"){
                    document.getElementById("9").firstElementChild.src = "img/09.png";
                    document.getElementById("10").src = "img/empty.jpg";
                    setTimeout(()=>alert("Parabéns você venceu!"),100)                    
                }
            }

        } else { alert("Movimento não permitido!") }
    } 
}