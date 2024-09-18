long long toh( N,  from,  to,  aux) {
    // Your code here
    let count = 0;
    
    function helper( N,  from,  to,  aux){
        if(N===1){
            count++;
            console.log('Move N rod from from to to rod');
            return;
        }
        
        helper( N-1, from , aux, to);
        count++;
         console.log('Move N rod from from to to rod');
         helper( N-1,  aux, to, from)
        
    }
    helper( N,  from,  to,  aux)
    return count;
}
