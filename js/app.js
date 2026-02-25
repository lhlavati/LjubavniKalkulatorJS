const btn = document.getElementById('calculate-btn');

function containsNum(str1, str2){
    let containsNumber = false;

    for(let i = 0; i < str1.length; i++){
        if(!isNaN(str1[i])){
            containsNumber = true;
            break;
        }
    }
    for(let i = 0; i < str2.length; i++){
        if(!isNaN(str2[i])){
            containsNumber = true;
            break;
        }
    }
    return containsNumber;
}

btn.addEventListener('click', () => {
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    const result = document.getElementById('result');

    if(!name1 || !name2){
        result.innerHTML = "Polja ne smiju biti prazna!"
        return;
    }

    if(containsNum(name1, name2)){
        result.innerHTML = "Jedno od polja sadrži broj u imenu!";
        return;
    }

})
