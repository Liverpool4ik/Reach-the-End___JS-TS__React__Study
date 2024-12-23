// boolean
// true or false

// any type to boolean
// Boolean(type), !!type

// false
// console.log('0', Boolean(0))
// console.log("''", !!'')
// console.log('null', !!null)
// console.log('undefined', !!undefined)
// console.log('NaN', !!NaN)

// true
// console.log('1', Boolean(1))
// console.log('-1', Boolean(-1))
// console.log("' '", !!' ')
// console.log("'0'", !!'0')
// console.log('[]', !![])
// console.log('[1]', !![1])
// console.log('{name: "Nikita"}', !!{ name: 'Nikita' })

// &&
// console.log('true && true', true && true)
// console.log('true && false', true && false)
// console.log('false && true', false && true)
// console.log('false && false', false && false)

// ||
// console.log('true || true', true || true)
// console.log('true || false', true || false)
// console.log('false || true', false || true)
// console.log('false || false', false || false)

// && return first false or last true
// console.log(true && 1 && [] && 'Nikita')
// console.log(true && 1 && 0 && 'Nikita')

// const sayHello = () => console.log('Hello')
// true && 1 && [] && sayHello()

// || return first true or last false
// console.log(false || null || [] || 'Nikita')
// console.log(false || null || NaN || undefined)

// ?? Nullish coalescing operator
// console.log(null ?? 12);
// console.log(undefined ?? 24);
// console.log(0 ?? 13);
// console.log("" ?? 13);
