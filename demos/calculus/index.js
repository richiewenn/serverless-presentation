// If expression
IF =
  (cond) =>
    (thn) =>
      (els) =>
        // TODO: Implement booleans
        cond(thn)(els)

// Booleans
tru =
  (thn) =>
    (els) =>
      thn
fls =
  (thn) =>
    (els) =>
      els

// Numbers
zero = f => x => x
succ = n => f => z => f(n(f)(z))
one = succ(zero)
two = succ(one)
three = succ(two)
four = succ(three)
unchurch = n => n(x => x+1)(0)
pred = n => f => x => n(g => h => h(g(f)))(u => x)(u => u)
times = n => m => f => z => (n (m(f)) (z))
isZero = n => n(_ => fls)(tru)

// If example
IF(tru)(four)(two)


// Factorial example

// This needs infinite stack
fact = (n) =>
  IF(isZero(n))(one)(times(n)(fact(pred(n))))

// Add more functions
fact = (n) =>
  IF(isZero(n))(_ => one)(_ => times(n)(fact(pred(n))))()
