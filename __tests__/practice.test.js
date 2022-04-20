// const sum = require('../modules/sum');
// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test('two plus two is four', () => {
//   expect(2 + 2).toBe(4);
// });

// test('object assignment', () => {
//   const data = { one: 1 };
//   data['two'] = 2;
//   expect(data).toEqual({ one: 1, two: 2 });
// });

// test('adding positive numbers is not zero', () => {
//   for (let a = 1; a < 10; a++) {
//     for (let b = 1; b < 10; b++) {
//       expect(a + b).not.toBe(0);
//     }
//   }
// });

// test('null', () => {
//   const n = null;
//   expect(n).toBeNull();
//   expect(n).toBeDefined();
//   expect(n).not.toBeUndefined();
//   expect(n).not.toBeTruthy();
//   expect(n).toBeFalsy();
// });

// test('zero', () => {
//   const z = 0;
//   expect(z).not.toBeNull();
//   expect(z).toBeDefined();
//   expect(z).not.toBeUndefined();
//   expect(z).not.toBeTruthy();
//   expect(z).toBeFalsy();
// });

// test('two plus two', () => {
//   const value = 2 + 2;
//   expect(value).toBeGreaterThan(3);
//   expect(value).toBeGreaterThanOrEqual(3.5);
//   expect(value).toBeLessThan(5);
//   expect(value).toBeLessThanOrEqual(4.5);
//   expect(value).toBe(4);
//   expect(value).toEqual(4);
// });

// // 丸め誤差への対処
// test('adding floating point numbers', () => {
//   const value = 0.1 + 0.2;
//   // expect(value).toBe(0.3); // これだとエラー
//   expect(value).toBeCloseTo(0.3);
// });

// test('there is no I in team', () => {
//   expect('team').not.toMatch(/I/);
// });

// test('but there is a "stop" in Christoph', () => {
//   expect('Christoph').toMatch(/stop/);
// });

// const shoppingList = [
//   'diapers',
//   'kleenex',
//   'trash bags',
//   'paper towels',
//   'milk',
// ];
// test('the shopping list has milk on it', () => {
//   expect(shoppingList).toContain('milk');
//   expect(new Set(shoppingList)).toContain('milk');
// });

// function compileAndroidCode() {
//   throw new Error('you are using the wrong JDK');
// }
// test('compiling android goes as expected', () => {
//   // 例外をスローする関数は、ラッピング関数内で呼び出される必要がある
//   expect(() => compileAndroidCode()).toThrow();
//   expect(() => compileAndroidCode()).toThrow(Error);
//   expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
//   expect(() => compileAndroidCode()).toThrow(/JDK/);
// });

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('peanut butter');
//       // reject('error');
//     }, 1000);
//   });
// }
// test('the data is peanut butter', () => {
//   return fetchData().then(data => {
//     expect(data).toBe('peanut butter');
//   });
// });

// test('the data is peanut butter', async () => {
//   const data = await fetchData();
//   expect(data).toBe('peanut butter');
// });

// test('the fetch fails with an error', async () => {
//   expect.assertions(1);
//   try {
//     await fetchData();
//   } catch (e) {
//     expect(e).toMatch('error');
//   }
// });

// test('the data is peanut butter', async () => {
//   await expect(fetchData()).resolves.toBe('peanut butter');
// });

// test('the fetch fails with an error', async () => {
//   await expect(fetchData()).rejects.toMatch('error');
// });

// promiseがrejectされることを期待するケースでは .catch メソッドを使用
// test('the fetch fails with an error', () => {
//   expect.assertions(1);
//   return fetchData().catch(e => expect(e).toMatch('error'));
// });

// test('the data is peanut butter', done => {
//   function callback(error, data) {
//     if (error) {
//       done(error);
//       return;
//     }
//     try {
//       expect(data).toBe('peanut butter');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }
//   fetchData2(callback);
// });

// test('the data is peanut butter', () => {
//   return expect(fetchData()).resolves.toBe('peanut butter');
// });

// test('the fetch fails with an error', () => {
//   return expect(fetchData()).rejects.toMatch('error');
// });