function validateStr(str){
    let checkSpace = false;
    let checkChar = false;

    checkChar = /^[a-zčćđšžA-ZČĆĐŠŽ]+$/.test(str) ? true : false;

    for(let i = 0; i < str.length; i++){
        if(str[i] === ' '){
            checkSpace = false;
            break;
        }
        checkSpace = true;
    }

    return checkChar && checkSpace;
}

function calcLove(arr){
    if (arr.length <= 2) {
        return arr.join("");
    }

    let nextRow = [];
    let left = 0;
    let right = arr.length - 1;
    let sum;

    while (left <= right) {
        if (left === right) {
            nextRow.push(arr[left]);
        } else {
            sum = arr[left] + arr[right];
            
            if (sum >= 10) {
                nextRow.push(Math.floor(sum / 10));
                nextRow.push(sum % 10);
            } else {
                nextRow.push(sum);
            }
        }
        left++;
        right--;
    }

    return calcLove(nextRow);
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
        return [...arr1, ...arr2];
}

const btn = document.getElementById('calculate-btn');
btn.addEventListener('click', () => {
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    const result = document.getElementById('result');

    if(!name1 || !name2){
        result.innerHTML = "Polja ne smiju biti prazna!"
        return;
    }

    if(validateStr(name1) && validateStr(name2)){
        let lovePercentage = countLetters(name1, name2);
        result.innerHTML = `
        ${name1} 💘 ${name2}<br>
        ${calcLove(lovePercentage)}%
        `;
        return;
    } else {
        result.innerHTML = "Unos nije važeći!<br><i>Upišite ime bez razmaka, brojeva i znakova.</i>"
        return;
    }
})
