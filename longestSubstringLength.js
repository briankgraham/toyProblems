var lengthOfLongestSubstring = function(str) {
  var longest = 0;
  var leftIdx = 0;
  var commonStrIdx;
  
  if (str.length <= 1) return str.length;

  for (var i = 1; i < str.length; i++) {
      
    commonStrIdx = str.lastIndexOf(str[i], i - 1)
    
    if (commonStrIdx >= 0) {
      longest = Math.max(longest, i - leftIdx);
      leftIdx = Math.max(leftIdx, commonStrIdx + 1);
    }
  }
  
  longest = Math.max(longest, i - leftIdx);
  
  return longest;
};