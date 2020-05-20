const maxSubArray = nums => {
  let max = nums[0];
  let currentSum = max;

  for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(currentSum + nums[i], nums[i]);
    max = Math.max(currentSum, max)
  }

  return max
}