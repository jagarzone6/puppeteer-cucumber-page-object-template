const rand = function(min, max) {
    if (min==null && max==null)
      return 0;
    if (max == null) {
        max = min;
        min = 0;
      }
      return min + Math.floor(Math.random() * (max - min + 1));
    };
module.exports = {
    rand: rand
};
