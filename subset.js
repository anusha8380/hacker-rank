var subsets = function(nums) {
    //Write code here // 2^n combinations
    let output = [];
    var helper = function(nums,i,subset){
        if(i === nums.length){
            output.push([...subset])
            return
        }
        
        helper(nums,i+1, subset)
        subset.push(nums[i])
        helper(nums,i+1, subset)
        subset.pop()
    }
    
    
    helper(nums,0, [])
    return output;
};
