var fun = {
  'after': require('./after'),
  'ary': require('./ary'),
  'before': require('./before'),
  'bind': require('./bind'),
  'bindKey': require('./bindKey'),
  'curry': require('./curry'),
  'curryRight': require('./curryRight'),
  'debounce': require('./debounce'),
  'defer': require('./defer'),
  'delay': require('./delay'),
  'flip': require('./flip'),
  'memoize': require('./memoize'),
  'negate': require('./negate'),
  'once': require('./once'),
  'overArgs': require('./overArgs'),
  'partial': require('./partial'),
  'partialRight': require('./partialRight'),
  'rearg': require('./rearg'),
  'rest': require('./rest'),
  'spread': require('./spread'),
  'throttle': require('./throttle'),
  'unary': require('./unary'),
  'wrap': require('./wrap')
};
fun.default = fun;
module.exports = fun;
