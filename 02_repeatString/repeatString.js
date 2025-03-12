const repeatString = function(str,num) {
    let string='';
    if(num<0){
        return "ERROR";
        
    }
    else{
    while(num>0){
        
        string+=str;
        // console.log(string);
        num--;
        
    }
    // console.log(string);
    return string;
}
    
};


// repeatString("hey",5);

// Do not edit below this line
module.exports = repeatString;
