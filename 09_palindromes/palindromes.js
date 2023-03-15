const palindromes = function (string) {
    string=string.toLowerCase();
    
    string=string.split(' ').join('').split(',').join('');
    string=string.replace(/[^a-zA-Z0-9 ]/g,'');

    let flag=false;
    for(let i=0;i<string.length;i++){
        
        
        if(string[i]===string[string.length-i-1]){
            flag=true;
            
            continue;
            
        }
        else if(string[i]!==string[string.length-i]){
            flag=false;
            break;  
        }
    }
    return flag;
};

// Do not edit below this line
module.exports = palindromes;
