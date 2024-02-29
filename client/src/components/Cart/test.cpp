int ArrayChallenge(int num) {
  // code goes here 
  vector<int> nums;
  int multiplicationCount =0;
 
    while(true){
 string str=to_string(num);
  for(char ch:str){
    nums.push_back(ch-'0');
  }
      for(int i=0;i<nums.size()-1;i++){
        if(nums[i]==nums[i+1]){
          return multiplicationCount;
        }
      }
      multiplicationCount++;
    for(char ch:str){
      if(ch-'0'!=0){
        num*=num*(ch-'0');
        break;
      }
  }
    }
     
  return num;

}