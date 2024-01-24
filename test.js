/**
 tobe
원시 데이터 타입의 경우, 값과 데이터 타입이 정확히 일치해야 합니다.
객체나 배열과 같은 참조 데이터 타입의 경우, 참조가 정확히 일치해야 합니다. 
즉, 같은 메모리 위치를 가리켜야 합니다.

toEqual
원시 데이터 타입의 경우, 값만 일치하면 됩니다.
객체나 배열과 같은 참조 데이터 타입의 경우, 내부의 값들이 재귀적으로 일치해야 합니다.
즉, 객체의 내용이 동일하면 됩니다.
 */


const deepCopy = require('./deepCopy');

const originalObj = {
    name: 'Alice',
    age: 25,
    address: {
      city: 'San Francisco',
      country: 'USA',
      details: {
        street: '123 Main St',
        zipcode: '94105'
      }
    },
    hobbies: ['reading', 'traveling'],
    friends: [
      {
        name: 'Bob',
        age: 28,
        address: {
          city: 'Los Angeles',
          country: 'USA',
          details: {
            street: '456 Oak St',
            zipcode: '90001'
        }
        }
      },
      {
        name: 'Charlie',
        age: 22,
        address: {
          city: 'Seattle',
          country: 'USA',
          details: {
            street: '789 Pine St',
            zipcode: '98101'
          }
        }
      }
    ],
    isActive: true,
    score: 87.5,
    sayHello: function() {
      return 'Hello!';
    }
  };

const copiedObj = deepCopy(originalObj);

test('두 객체의 참조 주소가 같지 않은지 확인하기', () => {  
    expect(copiedObj).not.toBe(originalObj);
  });

  test('중첩된 객체의 참조 주소가 같지 않은지 확인하기', () => {  
    expect(copiedObj.address.details).not.toBe(originalObj.address.details);
  });

  test('두 객체의 내용이 동일한지 확인하기', () => {  
    expect(copiedObj).toEqual(originalObj);
  });

  test('copy한 객체의 내용을 변경해도 원본 객체에 영향이 없는지 확인하기', () => {  
    copiedObj.name = 'Ann';
    copiedObj.hobbies = null;
    copiedObj.isActive = false;

    expect(copiedObj).not.toEqual(originalObj);
  });

  


