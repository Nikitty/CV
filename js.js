// let admin
// let name = 'John'
// let some
// admin = null

// // admin = prompt('Write Name', '12345')
// console.log(admin)
// console.log(`Hi ${name}`)
// console.log(typeof name)

// true
// false
// // false
// true
// false
// false
// false

// console.log('a' < 'A')

// // let number = prompt('Number?', 0)
// // if (number > 0) {
// //   alert('1')
// // } else if (number < 0) {
// //   alert('-1')
// // } else {
// //   alert('0')
// // }

// let result
// let a = 2
// let b = 5

// result = a + b < 4 ? 'Мало' : 'Много'

// console.log(result)
// login = 'Сотрудник'
// // login = prompt('Login?', '')
// message =
//   login == 'Сотрудник'
//     ? 'Привет'
//     : login == 'Директор'
//     ? 'Здравствуйте'
//     : login == ''
//     ? 'Нет логина'
//     : ''

// console.log(message)

// age = 90

// if (age < 14 || age > 90) {
//   console.log('Age>90 and Age<14')
// } else {
//   console.log('14<Age<90')
// }

// if (!(14 <= age && age <= 90)) {
//   console.log('Age>90 and Age<14')
// } else {
//   console.log('14<Age<90')
// }

// login = prompt('Кто там?', 0)

// if (login === 'Админ') {
//   password = prompt('Пароль?', 0)
//   if (password === 'Я главный') result = 'Здравствуйте!'
//   else {
//     if (password === null) result = 'Отмена'
//     else result = 'Неверный пароль'
//   }
// } else {
//   if (login === null) result = 'Отмена'
//   else result = 'Я вас не знаю'
// }
// alert(result)

// do {
//   i = prompt('Введите число', 0)
//   console.log(i)
//   if (i == null) continue
// } while (+i < 100 || +i === NaN)

// console.log(i)

// n = prompt('Введите число', 0)
// showPrime(n)

// function showPrime(n = 0) {
//   for (let j = 2; j <= n; j++) {
//     if (isPrime(j)) console.log(j)
//   }
// }

// function isPrime(j) {
//   for (let i = 2; j > i; i++) {
//     if (j % i == 0) return
//   }
//   return true
// }

// function min(a, b) {
//   return a < b ? a : b
// }

// x = +prompt('Число', 1)
// n = +prompt('Степень', 1)
// console.log(pow(x, n))

// function pow(x, n) {
//   if (n > 0 && Number.isInteger(n)) return x ** n
//   return 'Ошибка'
// }

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no()
}

ask(
  'Вы согласны?',
  () => alert('Вы согласились.'),
  () => alert('Вы отменили выполнение.')
)
