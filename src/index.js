    document.getElementById('calculator__key--equal').addEventListener('click', getResultForEqual);
    document.getElementById('calculator__percent').addEventListener('click', getResultForPercent);
    document.getElementById('calculator__backspace').addEventListener('click', getSmallerString);
    document.getElementById('calculator_dot').addEventListener('click', addDot);
    document.getElementById('calculator__clear').addEventListener('click', clearResult);
    
    let result = "";

    function clearResult(){
        result = "0";
        document.getElementById("display").value = result;
    }
    function addDot(){
       let strInput = String(document.getElementById('display').value);
       let lastChar = strInput[strInput.length-1];
       //console.log(lastChar);
       let dot = ".";
       let indexMinus = strInput.indexOf("-");
       //console.log(indexMinus);
       let indexPlus = strInput.indexOf("+");
       let indexMulti = strInput.indexOf("*");
       let indexDiv = strInput.indexOf("/");
       let dotIndex = strInput.indexOf(".");
       let strInput2 = strInput;
       if(lastChar === "."){
            result = strInput; 
       }else if(indexMinus === -1 && indexPlus === -1 && indexMulti === -1 && indexDiv === -1 && dotIndex !== -1){
            result = strInput;
       }else if(indexMinus === 0){
            strInput = strInput.substring(1);
            console.log(strInput);
            let indexMinus = strInput.indexOf("-");
            //console.log(indexMinus);
            let indexPlus = strInput.indexOf("+");
            let indexMulti = strInput.indexOf("*");
            let indexDiv = strInput.indexOf("/");
            if(strInput === ""){
                result = strInput2 + "0" + dot;
                console.log(result);
            }else if(lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/"){
                result = strInput2 + "0" + dot;
            }else if(indexMinus === -1 && indexPlus === -1 && indexMulti === -1 && indexDiv === -1){
                result = strInput2;
            }else{
                result = strInput2 + dot;
            }   
        }else if(lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/"){
            result = strInput + "0" + dot;
        }else{
            result = strInput + dot;
        }

       document.getElementById("display").value = result;
    }
    function getSmallerString(){
        let strInput = String(document.getElementById('display').value);
        result = strInput.substr(0, strInput.length-1);
        if(result === ""){
            result = "0";
        }
        document.getElementById("display").value = result;
    }
    function getOutput(calcButtonValue) {
        //console.log(calcButtonValue);
        //console.log(document.getElementById('display').value);
        result = document.getElementById('display').value + calcButtonValue;
        //console.log(result);
        if (result[0] == 0 && (result[1] === "+" || result[1] === "-" || result[1] === "/" || result[1] === "*" || result[1] === ".")){
            document.getElementById("display").value = result; 
        } else if(result[0] == 0){
            //console.log(result.substring(1));
            document.getElementById("display").value = result.substring(1);
        }else {
            document.getElementById("display").value = result;
        }
    }
    function FindResult(strInput, numb1, numb2){
        let indexMinus = strInput.indexOf("-");
        let indexPlus = strInput.indexOf("+");
        let indexMulti = strInput.indexOf("*");
        let indexDiv = strInput.indexOf("/");
        if (indexPlus !== -1){
            result = getSum(numb1, numb2);
        }else if(indexDiv !== -1){
            result = getDiv(numb1, numb2);   
        }else if(indexMulti  !== -1){
            result = getMulti(numb1, numb2);
        }else if(indexMinus !== -1 && indexMinus !== 0){
            result = getMinus(numb1, numb2);
        }else{
            result = strInput; 
        }
       
        return result;
    }
    function getResultForEqual(){
        let strInput = String(document.getElementById('display').value);
        let lastElement = strInput[strInput.length-1];
        let firstElement = strInput[0];
        
        if(lastElement === "-" || lastElement === "+" || lastElement === "*" || lastElement === "/"){ 
            strInput = strInput.substring(0, strInput.length-1);
        }
        if(firstElement === "+" || firstElement === "*" || firstElement === "/"){ 
            strInput = strInput.substring(1);
        }
        let indexMinus = strInput.indexOf("-");
        //console.log(indexMinus);
        let indexPlus = strInput.indexOf("+");
        let indexMulti = strInput.indexOf("*");
        let indexDiv = strInput.indexOf("/");
        let strInput2 = strInput;
        if(indexMinus === -1 && indexPlus === -1 && indexMulti === -1 && indexDiv === -1){
            result = strInput;
        }else if(indexMinus === 0){
            strInput = strInput.substring(1);
            //console.log(strInput);
            let indexMinus = strInput.indexOf("-");
            //console.log(indexMinus);
            let indexPlus = strInput.indexOf("+");
            let indexMulti = strInput.indexOf("*");
            let indexDiv = strInput.indexOf("/");
            if(indexMinus === -1 && indexPlus === -1 && indexMulti === -1 && indexDiv === -1){
                result = strInput2;
            }
            else{
                let numb1 = getFirstNumber(strInput2);
                //console.log(numb1);
                let numb2 = getSecondNumber(strInput2);
                //console.log(numb2);
                result = FindResult(strInput, numb1, numb2);
                console.log(result);
            }
        }else{
        let numb1 = getFirstNumber(strInput2);
        let numb2 = getSecondNumber(strInput2);
        result = FindResult(strInput, numb1, numb2);
        }
        document.getElementById("display").value = result;
        return result;
    }
    function getResultForPercent(){
        let strInput = String(document.getElementById('display').value);
        let lastElement = strInput[strInput.length-1];
        let firstElement = strInput[0];
        
        if(lastElement === "-" || lastElement === "+" || lastElement === "*" || lastElement === "/"){ 
            strInput = strInput.substring(0, strInput.length-1);
        }
        if(firstElement === "+" || firstElement === "*" || firstElement === "/"){ 
            strInput = strInput.substring(1);
        }
        let indexMinus = strInput.indexOf("-");
        let indexPlus = strInput.indexOf("+");
        let indexMulti = strInput.indexOf("*");
        let indexDiv = strInput.indexOf("/");
        let strInput2 = strInput;
        if(indexMinus === -1 && indexPlus === -1 && indexMulti === -1 && indexDiv === -1){
            result = strInput / 100;
        }else if(indexMinus == 0){
            strInput = strInput.substring(1);
            let indexMinus = strInput.indexOf("-");
            let indexPlus = strInput.indexOf("+");
            let indexMulti = strInput.indexOf("*");
            let indexDiv = strInput.indexOf("/");
            if(indexMinus === -1 && indexPlus === -1 && indexMulti == -1 && indexDiv == -1){
                result = strInput2 / 100;
            }
            else{
                let numb1 = getFirstNumber(strInput2);
                let numb2 = getSecondNumber(strInput2);
                result = FindResult(strInput2, numb1, numb2);
            }
        }else{
        let numb1 = getFirstNumber(strInput2);
        let numb2 = numb1 / 100 * getSecondNumber(strInput2);
        result = FindResult(strInput2, numb1, numb2);
        }
        document.getElementById("display").value = result;
    }
    function getSum(n1, n2){
        result = Number(n1) + Number(n2);
        //console.log(result, 'result');

        return result;
    }
    function getMinus(n1, n2){
        result = Number(n1) - Number(n2);
        //console.log(result, 'result');

        return result;
    }
    function getMulti(n1, n2){
        result = Number(n1) * Number(n2);
        //console.log(result, 'result');

        return result;
    }
    function getDiv(n1, n2){
        if (n2 == 0){
            result = "0";
        }else{
            result = Number(n1) / Number(n2);
        }
        //console.log(result, 'result');

        return result;
    }
    function getResultForOperand(operand) {
        if(document.getElementById('display').value === "0"){
            result = "0" + operand;
            //console.log(result);
        }else{
            result = getResultForEqual() + operand;
        }
        document.getElementById("display").value = result;
    }
    function getFirstNumber(strInput){
        let indexMinus = strInput.indexOf("-");
        let indexPlus = strInput.indexOf("+");
        let indexMulti = strInput.indexOf("*");
        let indexDiv = strInput.indexOf("/");
        if(indexPlus !== -1){
             numb1 = strInput.substr(0, indexPlus);
            // console.log(numb1);
        }else if (indexMulti !== -1){
            numb1 = strInput.substr(0, indexMulti);
            // console.log(numb1);
        }else if (indexDiv !== -1){
            numb1 = strInput.substr(0, indexDiv);
            // console.log(numb1);
        }else if (indexMinus !== -1 && indexMinus !== 0){
            numb1 = strInput.substr(0, indexMinus);
            // console.log(numb1);
        }else if(indexMinus === 0){
            strInput = strInput.substring(1);
            //console.log(strInput);
            let indexMinus = strInput.indexOf("-");
            //console.log(indexMinus);
            let indexPlus = strInput.indexOf("+");
            let indexMulti = strInput.indexOf("*");
            let indexDiv = strInput.indexOf("/");
            if(indexMinus !== -1 || indexPlus !== -1 || indexMulti !== -1 || indexDiv !== -1){
                if(indexPlus !== -1){
                    numb1 = "-" + strInput.substr(0, indexPlus);
                   // console.log(numb1);
               }else if (indexMulti !== -1){
                   numb1 = "*" + strInput.substr(0, indexMulti);
                   // console.log(numb1);
               }else if (indexDiv !== -1){
                   numb1 = "/" + strInput.substr(0, indexDiv);
                   // console.log(numb1);
               }else if (indexMinus !== -1 ){
                   numb1 = "-" + strInput.substr(0, indexMinus);
               }
            }
            else{
               numb1 = "-" + strInput;
            } 
        }

        return numb1;
    }
    function getSecondNumber(strInput){
        let indexMinus = strInput.indexOf("-");
        let indexPlus = strInput.indexOf("+");
        let indexMulti = strInput.indexOf("*");
        let indexDiv = strInput.indexOf("/");
        if(indexPlus !== -1){
             numb2 = strInput.substr(indexPlus + 1);
            // console.log(numb2);
        }else if (indexMulti !== -1){
             numb2 = strInput.substr(indexMulti + 1);
            // console.log(numb2);
        }else if (indexDiv !== -1){
            numb2 = strInput.substr(indexDiv + 1);
            // console.log(numb2);
        }else if (indexMinus !== -1 && indexMinus !== 0){
            numb2 = strInput.substr(indexMinus + 1);
            // console.log(numb2);
        }else if(indexMinus === 0){
            strInput = strInput.substring(1);
            //console.log(strInput);
            let indexMinus = strInput.indexOf("-");
            //console.log(indexMinus);
            let indexPlus = strInput.indexOf("+");
            let indexMulti = strInput.indexOf("*");
            let indexDiv = strInput.indexOf("/");
            if(indexMinus !== -1 || indexPlus !== -1 || indexMulti !== -1 || indexDiv !== -1){
                if(indexPlus !== -1){
                    numb2 = strInput.substr(indexPlus + 1);
                   // console.log(numb1);
               }else if (indexMulti !== -1){
                    umb2 = strInput.substr(indexMulti + 1);
                   // console.log(numb1);
               }else if (indexDiv !== -1){
                    numb2 = strInput.substr(indexDiv + 1);
                   // console.log(numb1);
               }else if (indexMinus !== -1 ){
                    numb2 = strInput.substr(indexMinus + 1);
               }
            }
        }

        return numb2;
    } 