const {vn2000_to_wgs84, wgs84_to_vn2000} = require('../dist/vn2000-converter.umd');
const assert = require('assert');

// convert vn2000 to wgs84
assert.deepStrictEqual(vn2000_to_wgs84(557975.802, 1142228.861, 0, 'VN2000_DONG_THAP'),
    {x: '105.53115606', y: '10.32843706', h: '-5.075'});
assert.deepStrictEqual(vn2000_to_wgs84(10000, 10000, 0, 'VN2000_QUANG_NGAI'),
    {x: '103.60392082', y: '0.08916865', h: '8.373'});

// convert wgs84 to vn2000
assert.deepStrictEqual(wgs84_to_vn2000('105.53115606', '10.32843706', 0, 'VN2000_DONG_THAP'),
    {x: '557975.802', y: '1142228.861', h: '5.075'});

console.log('test success');

// console.log(vn2000_to_wgs84(557975.802, 1142228.861, 0, 'VN2000_DONG_THAP'))
// console.log(wgs84_to_vn2000(105.53115606, 10.32843706, 0, 'VN2000_DONG_THAP'));

