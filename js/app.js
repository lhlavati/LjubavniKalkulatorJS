const btn = document.getElementById('calculate-btn');

function validateStr(str){
    let checkSpace = false;
    let checkChar = false;

    checkChar = /^[a-zčćđšžA-ZČĆĐŠŽ]+$/.test(str) ? true : false;

    for(let i = 0; i < str.length; i++){
        if(str[i] === ' '){
            checkSpace = false;
            break;
        } else {
            checkSpace = true;
        }
    }

    return checkChar && checkSpace;
}

function countLetters(str1, str2){
    let joinedStr = str1.toLowerCase() + str2.toLowerCase();
        
        let arr1 = [];
        let arr2 = [];
        let counter1 = 0;
        let counter2 = 0;

        for(let i = 0; i < str1.length; i++){
            for(let j = 0; j < joinedStr.length; j++){
                if(str1[i].toLowerCase() === joinedStr[j]){
                    counter1++;
                }             
            }
            arr1.push(counter1);
            counter1 = 0;
        }

        for(let i = 0; i < str2.length; i++){
            for(let j = 0; j < joinedStr.length; j++){
                if(str2[i].toLowerCase() === joinedStr[j]){
                    counter2++;
                }
            }
            arr2.push(counter2);
            counter2 = 0;
        }
        console.log(arr1);
        console.log(arr2);
        return [arr1, arr2];
}

btn.addEventListener('click', () => {
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    const result = document.getElementById('result');

    if(!name1 || !name2){
        result.innerHTML = "Polja ne smiju biti prazna!"
        return;
    }

    if(validateStr(name1) && validateStr(name2)){
        result.innerHTML = "Bravo!"
        countLetters(name1, name2)
        return;
    } else {
        result.innerHTML = "Ponovi!"
        return;
    }

    

})
