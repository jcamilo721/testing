const myApp = require("./app");

const { sum, multiply } = myApp;

describe("These are the tests for the sum function", () => {
  test("Simply sum 2 & 3", () => {
    const first = 2;
    const second = 3;
    const result = sum(first, second);

    expect(first).toBeTruthy();
    expect(second).not.toBeNull();
    expect(first + second).toBe(result);
  });

  test("Sum 2 strings and/or numbers", () => {
    expect(2 + 3).toBe(sum(2, "3"));
    expect(2 + 3).toBe(sum("2", 3));
    expect(2 + 3).toBe(sum("2", "3"));
  });

  test("10.3 and 1 should be equal to 11.3", () => {
    expect(11.3).toBe(sum(10.3, 1));
  });
});

// test('"1" + "2" should be 3', ()=>{
//     // given
//     let n1 = "1"
//     let n2 = "2"

//     // when
//     let result = myApp.sum(n1,n2)

//     // then
//     expect(result).toBe(3)
// })

// test('"10.3" + "1" should be 11.3', ()=>{
//     // given
//     let n1="10.3"
//     let n2="1"

//     // when
//     let result = myApp.sum(n1, n2)

//     // then
//     expect(result).toBe(11.3)
// })

// test('"0" + "1" should be 1', ()=>{
//     // given
//     let n1="0"
//     let n2="1"

//     // when
//     let result = myApp.sum(n1, n2)

//     // then
//     expect(result).toEqual(1)
// })

// test('1 plus 2 should be equal to 3', () => {
//     // given
//     let n1 = 2;
//     let n2 = 1;

//     // when
//     let result = myApp.sum(n1, n2);

//     // then
//     expect(result).toBe(n1 + n2);
// });

// test('1 + 2 not equal to 7', () => {
//     // given
//     let n1 = 2;
//     let n2 = 1;

//     // when
//     let result = myApp.sum(n1, n2);

//     // then
//     expect(result).not.toBe(7);
// });

// test('2 * 3 is equal to 6', () => {
//     // given
//     const n1 = 2;
//     const n2 = 3;

//     // when
//     const result = myApp.multiply(n1, n2);

//     // then
//     expect(result).toBe(6);
// });

// test('5 * 7 is equal to 35', () => {
//     // given
//     const n1 = 5;
//     const n2 = 7;

//     // when
//     const result = myApp.multiply(n1, n2);

//     // then
//     expect(result).toBe(35);
// });

// test("'hello' and 'world' concatenates to 'hello world'", () => {
//     // given
//     let string1 = "hello"
//     let string2 = "world"

//     // when
//     let result = myApp.concatenate(string1, string2)

//     // then
//     expect(result).toBe("hello world")
// });
