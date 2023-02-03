    var array = ["Baku","Sheki","Ganja","Shirvan","Lankaran","Sumqayit","Nakchivan"];
    var count=0;
    var count2 = 0;
    var arrayLength= array.length;
    var arrayNumber = Math.floor(Math.random()*arrayLength);
    var arrayElement = array[arrayNumber];
    console.log(arrayElement);
    let elementLength = arrayElement.length;
    var divElement = document.getElementById("demo");
    var divLetters = document.querySelector("#letters");
    for (let index = 0; index<elementLength;index++){
        let newElement = document.createElement("div");
        const textNode = document.createTextNode("-");
        newElement.appendChild(textNode)
        divElement.insertBefore(newElement,divElement.children[index]);
    }
    window.onkeyup = function keyboard(e){  
        var letter  = e.key;  
        if (search(letter)!=undefined){
            for (let i of search(letter)){
            count2+=1;
            console.log(count2);
        if(count2==elementLength){
            alert("You won,enter for next")
            location.reload();} 
        divElement.removeChild(divElement.children[i]);
        const newTextNode = document.createTextNode(e.key);
        let newElement = document.createElement("div");
        newElement.appendChild(newTextNode);
        divElement.insertBefore(newElement,divElement.children[i]);
        console.log(arrayElement);
                                        }
                                    }
                                }

    function search (keyLetter) {
        let letterArray =[]
    for (let i = 0; i<elementLength;i++){
        if (keyLetter==arrayElement[i]){
            letterArray.push(i);         
                                    }
                                }
    if (letterArray.length>0){
        return letterArray;
                        }
    else if(keyLetter =="CapsLock"){
        return
    }
    else{
        count+=1;
        divLetters.innerHTML+=keyLetter+" ";
        var choice = 13;
        var d = document.getElementById("choice").innerHTML=choice-count;
    }  
    if(count==13){
        location.reload();

        }  
                            }

