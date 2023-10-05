function find(nums, target) 
{
    const newnums = {};
    for (let i = 0; i < nums.length; i++) 
    {
        const complement = target - nums[i]; 
        

        if (newnums[complement] !== undefined)
         {
            return [newnums[complement], i];
        }
        
        
        newnums[nums[i]] = i;
    }
    
   
    return [];
}


const nums = [2, 7, 11, 15];
const target = 9;
const result = find(nums, target);
console.log(result); 

