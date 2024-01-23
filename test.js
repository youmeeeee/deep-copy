const deepCopy = require('./deepCopy');

function testDeepCopy() {
    const originalObj = {
        a: 1,
        b: {
            c: 2,
            d: [3, 4],
            e: {
                f: 5,
                g: [6,7,8,9,10, {value: true}]
            }
        },
        h: [20, 21, 22] 
    };

    const copiedObj = deepCopy(originalObj);

    // 두 객체의 참조 주소가 같은지 확인하기
    if (copiedObj !== originalObj) {
        console.log('Test 1 Passed');
    } else {
        console.error('Test 1 Failed');
    }

    // 두 객체의 내용이 같은지 확인하기
    if (JSON.stringify(copiedObj) === JSON.stringify(originalObj)) {
        console.log('Test 2 Passed');
    } else {
        console.error('Test 2 Failed');
    }

    // 원본 객체를 변경해도 새로운 객체에 영향이 없는지 확인하기
    originalObj.a = 100;
    originalObj.b.c = 200;
    originalObj.b.d.push(44);
    originalObj.b.e.f =55;
    originalObj.b.e.g.push(11)
    originalObj.b.e.g[5] = false;
    originalObj.h.push(23);

    if (copiedObj.a !== 100 
        && copiedObj.b.c !== 200 
        && JSON.stringify(copiedObj.b.d) !== JSON.stringify([3, 4, 44])
        && copiedObj.b.e.f !== 55
        && JSON.stringify(copiedObj.b.e.g) !== JSON.stringify([6,7,8,9,10, 11])
        && copiedObj.b.e.g[5] !== false
        && JSON.stringify(copiedObj.h) !== JSON.stringify([20, 21, 22, 23])
    ) {
        console.log('Test 3 Passed');
    } else {
        console.error('Test 3 Failed');
    }
}

testDeepCopy();