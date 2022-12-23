module.exports = function reverse (n) {
    if(n.toString()[0]=='-'){
        let revers= n.toString().split('').reverse();
        revers.pop();  
        return revers.join('')
    }
    else{
        return n.toString().split('').reverse().join(''); 
    }
}

