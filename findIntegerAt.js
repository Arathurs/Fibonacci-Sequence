const fibSeq = function(n) {

    let fibStorage = {},
     count = 2,
     sum = 1;
    const stop = n-1;


    fibStorage[0] = 1;
    fibStorage[1] = 1;

    

        (function traverseNums(start) {
            
            if(count < n) {
            
                fibStorage[count] = fibStorage[count-1] + fibStorage[count-2];
                
                
                if(count === stop) {
                
                    return fibStorage[count];

                }

                
                return traverseNums(count++); 

            } 
                

        })(count);
}
        
    