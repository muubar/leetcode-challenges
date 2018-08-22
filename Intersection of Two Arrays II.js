var intersect = function (nums1, nums2) {
  let lrgArr = nums1.length > nums2.length ? nums1 : nums2;
  let smlArr = nums1.length > nums2.length ? nums2 : nums1;
  return lrgArr.filter((val) => checkAndUpdateSml(val))

  function checkAndUpdateSml(e) {
    let matchedIdx = smlArr.indexOf(e);
    if (matchedIdx !== -1) {
      smlArr.splice(matchedIdx, 1);
      return true;
    }
    return false;
  }
};