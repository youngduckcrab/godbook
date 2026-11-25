---
title: 고계 도함수
title_en: Higher-Order Derivatives
aliases: [고계도함수, n계 도함수, k계 도함수, 이계도함수, 이계 도함수, n번 미분가능, n 번 미분가능, 무한 번 미분가능, higher derivative, nth derivative, second derivative, n times differentiable, infinitely differentiable]
kind: definition
field: real-analysis
msc: ["26A24"]
level: undergrad
summary: "구간 위의 함수에서 시작해 도함수를 되풀이해 얻는 함수들을 재귀 정리로 정하고, f 가 n 번 미분가능할 때 k ≤ n 인 k계 도함수 f^(k) 를 쓴다. f^(0) = f, f^(1) = f′, f^(n+1) = (f^(n))′ 과 한 점에서의 값 f^(n+1)(c), 도함수의 고계 도함수, 제한, 상수배와 합, 낮은 차수의 연속, (x − a) 의 거듭제곱의 합 꼴인 함수와 도함수가 자기 자신인 함수의 고계 도함수를 진술한다."
requires: [function, adding-or-removing-an-element, mathematical-induction, natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, recursion-theorem, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, interval, real-valued-function, limit-of-a-function, continuous-function, derivative, differentiable-implies-continuous, derivative-rules, derivative-and-monotonicity, exponential-function, finite-sum-of-reals, telescoping-sum, pointwise-convergence, series-indexed-from-zero, factorial-from-zero, finite-sums-of-functions]
sources:
  - ref: lebl-basic-analysis
    loc: "4.3절 Taylor's theorem 의 4.3.1절 Derivatives of higher orders (p.171); 4.3.2절 Taylor's theorem 의 Theorem 4.3.2 의 증명 (p.172)과 그 뒤 문단 (p.173); 4.3.3절 Exercises 의 Exercise 4.3.3, Exercise 4.3.7 (p.174); 4.2.6절 Exercises 의 Exercise 4.2.12 (p.170); 5.4.3절 Exercises 의 Exercise 5.4.11 (p.213)"
    checked: original
    note: "출처 4.3.1절(p.171)은 미분가능한 f : I → ℝ 의 도함수 f′ 을 first derivative 라 하고, f′ 이 미분가능하면 그 도함수를 f″ (second derivative) 라 한 뒤 'We similarly obtain f‴, f⁗, and so on' 이라고 적고 n 번째 도함수를 f^(n) 으로 쓰며, n 개의 도함수를 가질 때 f 가 n times differentiable 이라고 한다. 되풀이를 재귀로 정의하지 않는다. 이 항목은 'I 에서 ℝ 로의 사상 전체의 집합' 위의 함수 D 와 재귀 정리로 미분 반복열을 정하고 그것으로 'n 번 미분가능'과 f^(k) 를 정의한다. 'the zeroth derivative of a function is the function itself' 는 Theorem 4.3.2 의 증명(p.172) 안의 괄호이고, 이 항목은 그것을 (1)의 f^(0) = f 로 진술한다. 'infinitely differentiable, that is, if f can be differentiated any number of times' 는 p.173 의 테일러 급수 앞 문장에 있다. 출처는 n + 1 번째 도함수가 열린구간에서만 있는 경우를 Theorem 4.3.2 의 가정('f^(n+1) exists on (a, b)')으로 쓰고 그 기호의 뜻을 따로 정하지 않는다. 이 항목은 그것을 (3)의 한 점에서의 값 f^(n+1)(c) 로 정한다. (2), (4)–(8)은 출처에 명제로 없고(검색어 'times differentiable', 'infinitely differentiable', 'derivatives of all orders', 'second derivative', 'twice', 'restricted to' 로 책 전체를 찾았고 4.3.3절 연습문제를 처음부터 읽었다) 증명은 이 사이트의 것이다. (8)은 출처의 연습문제 4.1.4(p.160, 다항식이 미분가능함을 보이고 도함수를 구하라)를 되풀이한 것과 가까운 내용이다. (9)를 지수함수에 쓴 것은 출처의 연습문제 5.4.11(p.213)의 첫 문장이다. 반례 '한 번 미분가능하지만 두 번은 아닌 x|x|'는 출처의 연습문제 4.3.3(p.174, |x|³ 은 f′, f″ 이 있지만 f^(3)(0) 이 없다)과 같은 발상이다. 예시 '지수함수'는 출처의 연습문제 5.4.11(p.213)의 첫 문장('Since (e^x)′ = e^x, it is easy to see that e^x is infinitely differentiable')과 같은 내용이다. 확인 질문 '두 번 미분가능한 f 가 f″ = 0 을 만족하면 f 는 어떤 함수인가?'는 출처의 연습문제 4.3.7(p.174, f″ 이 상수 a 이고 f′(0), f(0) 이 주어진 f 를 구하라)에서 a = 0 으로 둔 것과 같은 물음이고, 연습문제 4.2.12(p.170)를 두 번 쓰는 발상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(테일러 정리의 망원 합·롤 정리 경로와 이계도함수 판정의 가정 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
구간은 [[interval]]의 것이고, 실함수와 그 합 $f + g$, 상수배 $\lambda f$, 상수함수, 함수의 같음과 제한은 [[real-valued-function]]의 것이며, 제한 $f|_J$는 [[adding-or-removing-an-element]]의 것이다. 미분가능, 미분계수, 미분가능한 함수와 도함수는 [[derivative]]의 것이고, 연속과 연속함수는 [[continuous-function]]의 것이다. "$I$에서 $\mathbb{R}$로의 사상 전체의 집합"은 [[pointwise-convergence|사상의 열과 점별 수렴]]의 것이고($\mathbb{R}$에는 보통 거리를 준다), 0부터 번호가 붙은 실수 $c_0, \dots, c_m$은 [[telescoping-sum|망원 합]]의 것이며, $0$부터의 유한 합 $\sum_{j=0}^{m}$은 [[series-indexed-from-zero]]의 것이고, $0$ 이상인 정수의 계승 $k!$은 [[factorial-from-zero]]의 것이며, 거듭제곱은 [[power-of-a-real-number]]의 것이다. 아래에서 $I$는 구간이고 $f : I \to \mathbb{R}$는 $I$ 위의 실함수이다.

**미분 반복열.** $X$를 $I$에서 $\mathbb{R}$로의 사상 전체의 집합이라 하자. $X$의 원소 $h$마다 $D(h)$를 다음과 같이 정한다. $h$가 미분가능한 함수이면 $D(h) = h'$(도함수)이고, 그렇지 않으면 $D(h) = h$이다. $X$의 각 원소는 두 경우 가운데 정확히 하나에 들고 각 경우의 값은 이미 정해진 $X$의 원소이므로, [[recursion-theorem|재귀 정리]]의 (1)에 의해 함수 $D : X \to X$가 있고, 같은 (1)에 의해 $g(j, h) = D(h)$인 함수 $g : \mathbb{N} \times X \to X$가 있다. 재귀 정리에 의해 $u(1) = f$이고 모든 자연수 $j$에서 $u(j + 1) = D(u(j))$인 함수 $u : \mathbb{N} \to X$가 정확히 하나 있다. 이것을 $f$의 **미분 반복열**이라 하고 $u_j = u(j)$로 쓴다. 어느 함수의 미분 반복열인지 밝힐 때는 $u^f_j$로 쓴다. 이 이름은 이 항목 안에서만 쓴다. 미분가능하지 않은 $h$에 $D(h) = h$를 준 것은 $D$를 $X$ 전체에서 정하기 위한 것이고, 아래의 기호는 그 값이 쓰이지 않는 경우에만 쓴다.

**$n$번 미분가능과 $k$계 도함수.** $0$ 이상인 정수 $n$에 대하여 $f$가 **$n$번 미분가능하다**($n$ times differentiable)는 것은 정확히 $1 \le j \le n$인 모든 정수 $j$에서 $u_j$가 미분가능한 함수일 때이다. $n = 0$이면 그런 $j$가 없으므로 $f$는 언제나 $0$번 미분가능하다. $f$가 $n$번 미분가능하고 $k$가 $0 \le k \le n$인 정수이면 $u_{k+1}$을 $f$의 **$k$계 도함수**($k$th derivative)라 하고 $f^{(k)}$로 쓴다. 위첨자의 괄호는 빼지 않는다. 아래 (2)에 의해 이때 $f$는 $k$번 미분가능하다. **함수의 기호 $f^{(k)}$는 $f$가 $k$번 미분가능할 때만 쓴다.** 한 점에서의 값의 기호는 (3)에서 한 단계 넓힌다. $f^{(2)}$를 $f''$로도 쓰고 $f$의 **이계도함수**(second derivative)라 한다.

**무한 번 미분가능.** $f$가 **무한 번 미분가능하다**(infinitely differentiable)는 것은 정확히 $0$ 이상인 모든 정수 $n$에서 $f$가 $n$번 미분가능할 때이다. 이때 $0$ 이상인 모든 정수 $k$에서 $f^{(k)}$를 쓸 수 있다.

다음이 성립한다. 아래에서 $n$, $k$는 $0$ 이상인 정수이다.

1. (처음 두 도함수와 점화) $f^{(0)} = f$이다. $f$가 $1$번 미분가능한 것은 정확히 $f$가 미분가능한 함수일 때이고, 이때 $f^{(1)} = f'$이다. $f$가 $n + 1$번 미분가능하면 $f^{(n)}$은 미분가능한 함수이고 $f^{(n+1)} = (f^{(n)})'$이다. 특히 $f$가 $2$번 미분가능하면 $f'$은 미분가능한 함수이고 $f'' = (f')'$이다.
2. (차수 올리기와 내리기) $f$가 $n + 1$번 미분가능한 것은 정확히 $f$가 $n$번 미분가능하고 $f^{(n)}$이 미분가능한 함수일 때이다. $f$가 $n$번 미분가능하고 $k \le n$이면 $f$는 $k$번 미분가능하다.
3. (한 점에서의 다음 도함수) $f$가 $n$번 미분가능하고 $c \in I$이며 $f^{(n)}$이 $c$에서 미분가능하다고 하자. 이때 미분계수 $(f^{(n)})'(c)$를 $f^{(n+1)}(c)$로 쓴다. 이 기호는 $f$가 $n + 1$번 미분가능하지 않아도 쓰고, $f^{(n)}$이 $c$에서 미분가능하지 않으면 쓰지 않는다. $f$가 $n + 1$번 미분가능하면 이 수는 함수 $f^{(n+1)}$의 $c$에서의 값과 같다. $n = 0$이면 $f^{(1)}(c) = f'(c)$이다. $n = 1$이면 이 수를 $f''(c)$로도 쓴다. 곧 $f$가 미분가능한 함수이고 $f'$이 $c$에서 미분가능하면 $f''(c) = (f')'(c)$이다.
4. (도함수의 고계 도함수) $f$가 미분가능한 함수라 하자. $f$가 $n + 1$번 미분가능한 것은 정확히 $f'$이 $n$번 미분가능할 때이고, 이때 $0 \le k \le n$인 모든 $k$에서 $(f')^{(k)} = f^{(k+1)}$이다. 이에 더해 $(f')^{(n)}$이 $c \in I$에서 미분가능하면 $(f')^{(n+1)}(c) = f^{(n+2)}(c)$이다. 또 $f$가 무한 번 미분가능한 것은 정확히 $f'$이 무한 번 미분가능할 때이다.
5. (제한) $J$가 구간이고 $J \subseteq I$라 하자. $f$가 $n$번 미분가능하면 $f|_J$도 $n$번 미분가능하고, $0 \le k \le n$인 모든 $k$에서 $(f|_J)^{(k)} = f^{(k)}|_J$이다. 이에 더해 $c \in J$이고 $f^{(n)}$이 $c$에서 미분가능하면 $(f|_J)^{(n)}$도 $c$에서 미분가능하고 $(f|_J)^{(n+1)}(c) = f^{(n+1)}(c)$이다. $f$가 무한 번 미분가능하면 $f|_J$도 그렇다.
6. (상수배와 합) $g : I \to \mathbb{R}$가 실함수이고 $\lambda$가 실수이며 $f$와 $g$가 $n$번 미분가능하다고 하자. 그러면 $\lambda f$와 $f + g$도 $n$번 미분가능하고, $0 \le k \le n$인 모든 $k$에서 $(\lambda f)^{(k)} = \lambda f^{(k)}$, $(f + g)^{(k)} = f^{(k)} + g^{(k)}$이다. 이에 더해 $f^{(n)}$과 $g^{(n)}$이 $c \in I$에서 미분가능하면 $(\lambda f)^{(n+1)}(c) = \lambda f^{(n+1)}(c)$이고 $(f + g)^{(n+1)}(c) = f^{(n+1)}(c) + g^{(n+1)}(c)$이다.
7. (낮은 차수의 연속) $n \ge 1$이고 $f$가 $n$번 미분가능하면, $0 \le k \le n - 1$인 모든 $k$에서 $f^{(k)}$는 미분가능한 함수이고 연속함수이다. 특히 $f$는 연속함수이다.
8. ($\sum_{j=0}^{m} c_j (x - a)^j$ 꼴의 함수) $a$를 실수, $m$을 $0$ 이상인 정수, $c_0, \dots, c_m$을 0부터 번호가 붙은 실수라 하고
   $$
   h(x) = \sum_{j=0}^{m} c_j (x - a)^j
   $$
   로 정한 함수 $h : \mathbb{R} \to \mathbb{R}$를 생각한다. 그러면 $h$는 무한 번 미분가능하고 다음이 성립한다.
   - (i) $0 \le \ell \le m$인 정수 $\ell$과 모든 실수 $x$에서
     $$
     \begin{aligned}
     &h^{(\ell)}(x) \\
     &= \sum_{j=0}^{m - \ell} \frac{(j + \ell)!}{j!}\, c_{j+\ell}\, (x - a)^j
     \end{aligned}
     $$
     이다. 여기서 $\dfrac{(j + \ell)!}{j!}$는 $(j + \ell)!\,(j!)^{-1}$이고, 합은 $0 \le j \le m - \ell$에서 정해진 항의 합이다.
   - (ii) $\ell \ge m + 1$인 정수 $\ell$에서 $h^{(\ell)}$은 값이 $0$인 상수함수이다.
   - (iii) $0 \le \ell \le m$이면 $h^{(\ell)}(a) = \ell!\, c_\ell$이고, $\ell \ge m + 1$이면 $h^{(\ell)}(a) = 0$이다.
9. (도함수가 자기 자신인 함수) $f$가 미분가능한 함수이고 $f' = f$이면 $f$는 무한 번 미분가능하고, $0$ 이상인 모든 정수 $k$에서 $f^{(k)} = f$이다.
:::

:::english
Intervals are those of the entry on intervals; real-valued functions, their sum $f + g$, scalar multiple $\lambda f$, constant functions, equality of functions and restrictions are those of the entry on real-valued functions, and the restriction $f|_J$ is that of the entry on adding or removing an element. Differentiability, the derivative at a point, differentiable functions and the derivative function are those of the entry on the derivative; continuity and continuous functions are those of the entry on continuous functions. "The set of all maps from $I$ to $\mathbb{R}$" is that of the entry on sequences of maps and pointwise convergence ($\mathbb{R}$ carries the usual metric); real numbers $c_0, \dots, c_m$ indexed from zero are those of the entry on telescoping sums; finite sums $\sum_{j=0}^{m}$ from zero are those of the entry on sums indexed from zero; the factorial $k!$ of an integer $k \ge 0$ is that of the entry on factorials from zero; powers are those of the entry on powers of a real number. Below, $I$ is an interval and $f : I \to \mathbb{R}$ is a real-valued function on $I$.

**The iterated-derivative sequence.** Let $X$ be the set of all maps from $I$ to $\mathbb{R}$. For each $h \in X$ define $D(h)$ as follows: if $h$ is a differentiable function, $D(h) = h'$ (its derivative); otherwise $D(h) = h$. Each element of $X$ falls under exactly one of the two cases and the value in each case is an already determined element of $X$, so by item (1) of the recursion theorem there is a function $D : X \to X$, and by the same item there is a function $g : \mathbb{N} \times X \to X$ with $g(j, h) = D(h)$. By the recursion theorem there is exactly one function $u : \mathbb{N} \to X$ with $u(1) = f$ and $u(j + 1) = D(u(j))$ for every natural number $j$. We call it the **iterated-derivative sequence** of $f$ and write $u_j = u(j)$; to name the function we write $u^f_j$. This name is used only within this entry. Giving $D(h) = h$ to a non-differentiable $h$ only serves to define $D$ on all of $X$; the notation below is used only in cases where that value is not used.

**$n$ times differentiable and the $k$th derivative.** For an integer $n \ge 0$, $f$ is **$n$ times differentiable** exactly when $u_j$ is a differentiable function for every integer $j$ with $1 \le j \le n$. If $n = 0$ there is no such $j$, so $f$ is always $0$ times differentiable. If $f$ is $n$ times differentiable and $k$ is an integer with $0 \le k \le n$, $u_{k+1}$ is called the **$k$th derivative** of $f$ and is written $f^{(k)}$. The parentheses in the superscript are never dropped. By (2) below, $f$ is then $k$ times differentiable. **The function symbol $f^{(k)}$ is used only when $f$ is $k$ times differentiable.** The symbol for a value at a point is extended by one step in (3). We also write $f''$ for $f^{(2)}$ and call it the **second derivative** of $f$.

**Infinitely differentiable.** $f$ is **infinitely differentiable** exactly when $f$ is $n$ times differentiable for every integer $n \ge 0$. Then $f^{(k)}$ may be used for every integer $k \ge 0$.

The following hold. Below, $n$ and $k$ are integers $\ge 0$.

1. (The first two derivatives and the recurrence) $f^{(0)} = f$. $f$ is $1$ time differentiable exactly when $f$ is a differentiable function, and then $f^{(1)} = f'$. If $f$ is $n + 1$ times differentiable, then $f^{(n)}$ is a differentiable function and $f^{(n+1)} = (f^{(n)})'$. In particular, if $f$ is $2$ times differentiable, then $f'$ is a differentiable function and $f'' = (f')'$.
2. (Raising and lowering the order) $f$ is $n + 1$ times differentiable exactly when $f$ is $n$ times differentiable and $f^{(n)}$ is a differentiable function. If $f$ is $n$ times differentiable and $k \le n$, then $f$ is $k$ times differentiable.
3. (The next derivative at one point) Suppose $f$ is $n$ times differentiable, $c \in I$, and $f^{(n)}$ is differentiable at $c$. Then we write $f^{(n+1)}(c)$ for the derivative $(f^{(n)})'(c)$. This symbol is used even if $f$ is not $n + 1$ times differentiable, and it is not used if $f^{(n)}$ is not differentiable at $c$. If $f$ is $n + 1$ times differentiable, this number equals the value at $c$ of the function $f^{(n+1)}$. For $n = 0$, $f^{(1)}(c) = f'(c)$. For $n = 1$ we also write this number as $f''(c)$; that is, if $f$ is a differentiable function and $f'$ is differentiable at $c$, then $f''(c) = (f')'(c)$.
4. (Higher derivatives of the derivative) Let $f$ be a differentiable function. $f$ is $n + 1$ times differentiable exactly when $f'$ is $n$ times differentiable, and then $(f')^{(k)} = f^{(k+1)}$ for every $k$ with $0 \le k \le n$. If moreover $(f')^{(n)}$ is differentiable at $c \in I$, then $(f')^{(n+1)}(c) = f^{(n+2)}(c)$. Also, $f$ is infinitely differentiable exactly when $f'$ is infinitely differentiable.
5. (Restriction) Let $J$ be an interval with $J \subseteq I$. If $f$ is $n$ times differentiable, then $f|_J$ is $n$ times differentiable and $(f|_J)^{(k)} = f^{(k)}|_J$ for every $k$ with $0 \le k \le n$. If moreover $c \in J$ and $f^{(n)}$ is differentiable at $c$, then $(f|_J)^{(n)}$ is differentiable at $c$ and $(f|_J)^{(n+1)}(c) = f^{(n+1)}(c)$. If $f$ is infinitely differentiable, so is $f|_J$.
6. (Scalar multiples and sums) Let $g : I \to \mathbb{R}$ be a real-valued function, $\lambda$ a real number, and suppose $f$ and $g$ are $n$ times differentiable. Then $\lambda f$ and $f + g$ are $n$ times differentiable, and $(\lambda f)^{(k)} = \lambda f^{(k)}$ and $(f + g)^{(k)} = f^{(k)} + g^{(k)}$ for every $k$ with $0 \le k \le n$. If moreover $f^{(n)}$ and $g^{(n)}$ are differentiable at $c \in I$, then $(\lambda f)^{(n+1)}(c) = \lambda f^{(n+1)}(c)$ and $(f + g)^{(n+1)}(c) = f^{(n+1)}(c) + g^{(n+1)}(c)$.
7. (Continuity of the lower orders) If $n \ge 1$ and $f$ is $n$ times differentiable, then for every $k$ with $0 \le k \le n - 1$, $f^{(k)}$ is a differentiable function and a continuous function. In particular $f$ is a continuous function.
8. (Functions of the form $\sum_{j=0}^{m} c_j (x - a)^j$) Let $a$ be a real number, $m$ an integer $\ge 0$, $c_0, \dots, c_m$ real numbers indexed from zero, and consider the function $h : \mathbb{R} \to \mathbb{R}$ defined by
   $$
   h(x) = \sum_{j=0}^{m} c_j (x - a)^j .
   $$
   Then $h$ is infinitely differentiable and the following hold.
   - (i) For every integer $\ell$ with $0 \le \ell \le m$ and every real $x$,
     $$
     \begin{aligned}
     &h^{(\ell)}(x) \\
     &= \sum_{j=0}^{m - \ell} \frac{(j + \ell)!}{j!}\, c_{j+\ell}\, (x - a)^j .
     \end{aligned}
     $$
     Here $\dfrac{(j + \ell)!}{j!}$ means $(j + \ell)!\,(j!)^{-1}$, and the sum is the sum of the terms defined for $0 \le j \le m - \ell$.
   - (ii) For every integer $\ell \ge m + 1$, $h^{(\ell)}$ is the constant function with value $0$.
   - (iii) If $0 \le \ell \le m$, then $h^{(\ell)}(a) = \ell!\, c_\ell$; if $\ell \ge m + 1$, then $h^{(\ell)}(a) = 0$.
9. (A function that is its own derivative) If $f$ is a differentiable function and $f' = f$, then $f$ is infinitely differentiable and $f^{(k)} = f$ for every integer $k \ge 0$.
:::

## 직관

미분가능한 함수 $f$의 도함수 $f'$은 다시 $I$ 위의 함수이므로, 그것이 미분가능하면 또 도함수를 얻습니다. 이 일을 되풀이해 얻는 $f, f', (f')', \dots$가 고계 도함수입니다. 계단을 한 칸씩 내려가는 일에 비유할 수 있습니다. 칸마다 "지금 함수가 미분가능한가"를 확인하고, 그렇다면 도함수로 내려갑니다. "$n$번 미분가능하다"는 것은 처음 $n$번의 확인을 모두 통과했다는 뜻이고, 그때 $0$번째부터 $n$번째 칸까지의 함수 $f^{(0)}, \dots, f^{(n)}$을 부를 수 있습니다. 비유가 맞지 않는 곳은, 확인에 실패한 칸에서도 미분 반복열은 멈추지 않고 같은 함수를 되풀이한다는 점입니다. 그 값은 기호로 부르지 않으므로 쓰이지 않습니다.

"그리고 이것을 되풀이한다"는 말은 뜻이 분명해 보이지만, 정의로 쓰려면 무엇을 몇 번 되풀이하는지가 함수로 정해져 있어야 합니다. 이 항목은 "함수에서 도함수로 가는 함수" $D$를 함수 전체의 집합 위에 만들고 재귀 정리로 되풀이합니다. 그래서 (2)처럼 차수를 하나씩 올리는 귀납으로 성질들을 증명할 수 있습니다.

(3)은 마지막 한 단계만 한 점에서 하는 경우입니다. 예컨대 테일러 정리는 $f^{(n)}$이 열린구간에서만 미분가능해도 되므로, 함수 $f^{(n+1)}$은 없어도 열린구간의 점 $c$에서의 값 $f^{(n+1)}(c)$는 필요합니다. (4)는 "$f$의 $k + 1$계 도함수는 $f'$의 $k$계 도함수"라는 것으로, 도함수에 관한 귀납에서 한 칸을 옮길 때 씁니다.

구간 $I$의 끝점에서도 미분계수는 [[derivative]]의 정의대로 끝점을 포함한 정의역에서 잽니다. 그래서 예컨대 $[a, b]$ 위의 함수가 $2$번 미분가능하다는 것은 끝점 $a$, $b$에서도 $f'$이 미분가능하다는 뜻입니다.

## 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (4)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다루고, 정수의 합과 차는 정수이다([[even-and-odd]]). 귀납은 [[mathematical-induction|수학적 귀납법]]의 시작점이 정해진 꼴이다.

**미분 반복열의 성질.** $D$의 정의에 의해 모든 자연수 $j$에서 다음이 성립한다. 이것을 (가)라 부른다.

- (가) $u_j$가 미분가능한 함수이면 $u_{j+1} = D(u_j) = u_j'$이다.

**2의 증명.** 정수 $j$에 대하여 "$1 \le j \le n + 1$"인 것은 정확히 "$1 \le j \le n$"이거나 "$j = n + 1$"일 때이다((Z5), (Z7)과 (Z1). $j < n + 1$이면 $0 < (n + 1) - j$이므로 $1 \le (n + 1) - j$, 곧 $j \le n$이다). 따라서 $f$가 $n + 1$번 미분가능한 것은 정확히 $1 \le j \le n$에서 $u_j$가 미분가능한 함수이고 $u_{n+1}$이 미분가능한 함수일 때, 곧 $f$가 $n$번 미분가능하고 $f^{(n)} = u_{n+1}$이 미분가능한 함수일 때이다. $k \le n$이고 $1 \le j \le k$이면 $j \le n$이므로((Z6)), $f$가 $n$번 미분가능하면 $k$번 미분가능하다.

**1의 증명.** $f$는 $0$번 미분가능하므로 $f^{(0)} = u_1 = f$이다. 정의에 의해 $f$가 $1$번 미분가능한 것은 정확히 $u_1 = f$가 미분가능한 함수일 때이고, 이때 (가)에 의해 $f^{(1)} = u_2 = f'$이다. $f$가 $n + 1$번 미분가능하면 (2)에 의해 $f$는 $n$번 미분가능하고 $f^{(n)} = u_{n+1}$은 미분가능한 함수이며, (가)에 의해 $f^{(n+1)} = u_{n+2} = u_{n+1}' = (f^{(n)})'$이다. $n = 1$이면 $f^{(1)} = f'$이므로 $f'' = f^{(2)} = (f')'$이다.

**3의 증명.** $f$가 $n$번 미분가능하므로 $f^{(n)}$이 정해지고, 가정에 의해 $(f^{(n)})'(c)$가 정해진다. $f$가 $n + 1$번 미분가능하면 (1)에 의해 $f^{(n+1)} = (f^{(n)})'$이므로 그 $c$에서의 값은 $(f^{(n)})'(c)$이다. $n = 0$이면 (1)에 의해 $f^{(0)} = f$이므로 $f^{(1)}(c) = f'(c)$이고, $n = 1$이면 $f^{(1)} = f'$이므로 $f^{(2)}(c) = (f')'(c)$이다.

**4의 증명.** $f$가 미분가능한 함수이므로 $f'$은 $X$의 원소이고, $v_j = u^{f'}_j$를 $f'$의 미분 반복열이라 하자. 모든 자연수 $j$에서 $u_{j+1} = v_j$임을 귀납으로 보인다. $j = 1$: (가)에 의해 $u_2 = f' = v_1$이다. $u_{j+1} = v_j$이면 $u_{j+2} = D(u_{j+1}) = D(v_j) = v_{j+1}$이다. 이제 $f$가 $n + 1$번 미분가능한 것은 정확히 $u_1 = f$와 $2 \le j \le n + 1$인 $u_j$가 미분가능한 함수일 때인데, $u_1$은 가정에 의해 미분가능한 함수이고 $2 \le j \le n + 1$인 $u_j$는 $1 \le j - 1 \le n$인 $v_{j-1}$이므로, 이것은 정확히 $f'$이 $n$번 미분가능할 때이다. 이때 $0 \le k \le n$에서 $(f')^{(k)} = v_{k+1} = u_{k+2} = f^{(k+1)}$이다. 이에 더해 $(f')^{(n)} = f^{(n+1)}$이 $c$에서 미분가능하면 (3)에 의해 $(f')^{(n+1)}(c) = ((f')^{(n)})'(c) = (f^{(n+1)})'(c) = f^{(n+2)}(c)$이다. 마지막으로 $f$가 무한 번 미분가능하면 모든 $n$에서 $f$가 $n + 1$번 미분가능하므로 $f'$은 모든 $n$에서 $n$번 미분가능하다. 거꾸로 $f'$이 무한 번 미분가능하면 모든 $n$에서 $f$는 $n + 1$번 미분가능하고, (2)에 의해 $n$번 미분가능하다.

**5의 증명.** $0 \le k \le n$인 $k$에 대한 명제 "$f|_J$는 $k$번 미분가능하고 $(f|_J)^{(k)} = f^{(k)}|_J$"를 $k$에 대한 귀납으로 보인다. $k = 0$이면 (1)에 의해 $(f|_J)^{(0)} = f|_J = f^{(0)}|_J$이다. $k + 1 \le n$이고 $k$에서 명제가 참이라 하자. (2)에 의해 $f$는 $k + 1$번 미분가능하므로, (1)에 의해 $f^{(k)}$는 미분가능한 함수이고 $f^{(k+1)} = (f^{(k)})'$이다. [[derivative]]의 (2)에 의해 $f^{(k)}|_J$는 미분가능한 함수이고 모든 $x \in J$에서 $(f^{(k)}|_J)'(x) = (f^{(k)})'(x) = f^{(k+1)}(x)$이다. 귀납 가정에 의해 $(f|_J)^{(k)} = f^{(k)}|_J$가 미분가능한 함수이므로, (2)에 의해 $f|_J$는 $k + 1$번 미분가능하고 (1)에 의해 모든 $x \in J$에서 $(f|_J)^{(k+1)}(x) = (f^{(k)}|_J)'(x) = f^{(k+1)}(x) = f^{(k+1)}|_J(x)$이다. [[real-valued-function]]의 (2), (6)에 의해 $(f|_J)^{(k+1)} = f^{(k+1)}|_J$이다.

$c \in J$이고 $f^{(n)}$이 $c$에서 미분가능하면, [[derivative]]의 (2)에 의해 $f^{(n)}|_J = (f|_J)^{(n)}$은 $c$에서 미분가능하고 미분계수는 $(f^{(n)})'(c)$이다. 따라서 (3)에 의해 $(f|_J)^{(n+1)}(c) = (f^{(n)})'(c) = f^{(n+1)}(c)$이다. $f$가 무한 번 미분가능하면 앞의 것을 모든 $n$에 쓴다.

**6의 증명.** $0 \le k \le n$인 $k$에 대한 명제 "$\lambda f$와 $f + g$가 $k$번 미분가능하고 $(\lambda f)^{(k)} = \lambda f^{(k)}$, $(f + g)^{(k)} = f^{(k)} + g^{(k)}$"를 귀납으로 보인다. $k = 0$이면 (1)에 의해 양쪽이 각각 $\lambda f$, $f + g$이다. $k + 1 \le n$이고 $k$에서 참이라 하자. (2)와 (1)에 의해 $f^{(k)}$와 $g^{(k)}$는 미분가능한 함수이고 그 도함수는 $f^{(k+1)}$, $g^{(k+1)}$이다. [[derivative-rules|미분법]]의 (6)에 의해 $\lambda f^{(k)}$와 $f^{(k)} + g^{(k)}$는 미분가능한 함수이고 $(\lambda f^{(k)})' = \lambda f^{(k+1)}$, $(f^{(k)} + g^{(k)})' = f^{(k+1)} + g^{(k+1)}$이다. 귀납 가정에 의해 이 두 함수는 $(\lambda f)^{(k)}$와 $(f + g)^{(k)}$이므로, (2)에 의해 $\lambda f$와 $f + g$는 $k + 1$번 미분가능하고 (1)에 의해 $(\lambda f)^{(k+1)} = \lambda f^{(k+1)}$, $(f + g)^{(k+1)} = f^{(k+1)} + g^{(k+1)}$이다. 한 점에서의 꼴은 $(\lambda f)^{(n)} = \lambda f^{(n)}$과 $(f + g)^{(n)} = f^{(n)} + g^{(n)}$에 미분법의 (1), (2)를 $c$에서 쓰고 (3)을 쓰면 된다.

**7의 증명.** $0 \le k \le n - 1$이면 $k + 1 \le n$이므로 (2)에 의해 $f$는 $k + 1$번 미분가능하고, (1)에 의해 $f^{(k)}$는 미분가능한 함수이다. [[differentiable-implies-continuous|미분가능하면 연속]]의 (2)에 의해 $f^{(k)}$는 연속함수이다. $k = 0$이면 $f^{(0)} = f$이다.

**8의 증명.** $0 \le \ell \le m$인 정수 $\ell$마다, $0 \le j \le m - \ell$인 정수 $j$에서 $d^{\ell}_j = (j + \ell)!\,(j!)^{-1}\, c_{j+\ell}$로 두고(위첨자 $\ell$은 거듭제곱이 아니라 이름이다. [[factorial-from-zero]]의 (3)에 의해 $j! \ne 0$이다), 모든 실수 $x$에서 $h_\ell(x) = \sum_{j=0}^{m - \ell} d^{\ell}_j (x - a)^j$로 정한 함수 $h_\ell : \mathbb{R} \to \mathbb{R}$를 생각한다. $d^{\ell}_0, \dots, d^{\ell}_{m-\ell}$은 0부터 번호가 붙은 실수이다.

$0 \le \ell \le m$에 대한 명제 "$h$는 $\ell$번 미분가능하고 $h^{(\ell)} = h_\ell$"을 귀납으로 보인다. $\ell = 0$이면 (K8)과 (K4)에 의해 $d^{0}_j = j!\,(j!)^{-1} c_j = c_j$이므로 [[finite-sum-of-reals]]의 (4)(범위 안의 항에만 의존. [[series-indexed-from-zero]]의 정의로 $0$부터의 합에도 쓴다)에 의해 $h_0 = h = h^{(0)}$이다. $\ell + 1 \le m$이고 $\ell$에서 참이라 하자. [[finite-sums-of-functions|함수의 유한 합]]의 (7)의 (i)을 $m - \ell$과 $d^{\ell}_0, \dots, d^{\ell}_{m-\ell}$에 쓰면 $h_\ell$은 미분가능한 함수이고 모든 $x$에서 $h_\ell'(x) = \sum_{j=0}^{m-\ell-1} (j + 1)\, d^{\ell}_{j+1} (x - a)^j$이다. $0 \le j \le m - \ell - 1$에서 [[factorial-from-zero]]의 (4)의 셋째 식($n = j$)과 (K1), (K2)에 의해
$$
\begin{aligned}
&(j + 1)\, d^{\ell}_{j+1} \\
&= (j + 1)\,(j + 1 + \ell)! \\
&\qquad \cdot \bigl((j + 1)!\bigr)^{-1} c_{j+1+\ell} \\
&= (j + \ell + 1)!\,(j!)^{-1} c_{j+\ell+1} \\
&= d^{\ell+1}_j
\end{aligned}
$$
이므로, 같은 (4)에 의해 $h_\ell' = h_{\ell+1}$이다. 귀납 가정에 의해 $h^{(\ell)} = h_\ell$은 미분가능한 함수이므로 (2)에 의해 $h$는 $\ell + 1$번 미분가능하고, (1)에 의해 $h^{(\ell+1)} = h_\ell' = h_{\ell+1}$이다. 이것이 (i)이다.

$\ell = m$이면 $h_m(x) = \sum_{j=0}^{0} d^{m}_j (x - a)^j$이고, 함수의 유한 합의 (7)의 (i)을 $0$과 $d^m_0$에 쓰면 $h_m$은 미분가능한 함수이고 $h_m'$은 값이 $0$인 상수함수이다. 따라서 (2)와 (1)에 의해 $h$는 $m + 1$번 미분가능하고 $h^{(m+1)}$은 값이 $0$인 상수함수이다. $\ell \ge m + 1$에 대한 명제 "$h$는 $\ell$번 미분가능하고 $h^{(\ell)}$은 값이 $0$인 상수함수"를 귀납으로 보인다. 기초 단계는 방금 보였다. $\ell$에서 참이면 [[derivative]]의 (1)에 의해 상수함수 $h^{(\ell)}$은 미분가능한 함수이고 도함수는 값이 $0$인 상수함수이므로, (2)와 (1)에 의해 $\ell + 1$에서도 참이다. 이것이 (ii)이다. $h$는 $0 \le \ell \le m$에서도 $\ell \ge m + 1$에서도 $\ell$번 미분가능하므로((Z5)와 (Z1)에 의해 $0$ 이상인 정수 $\ell$은 $\ell \le m$이거나 $\ell \ge m + 1$이다) 무한 번 미분가능하다.

(iii): $0 \le \ell \le m$이면 함수의 유한 합의 (7)의 (ii)를 $h_\ell$에 쓰면 $h^{(\ell)}(a) = h_\ell(a) = d^{\ell}_0 = \ell!\,(0!)^{-1} c_\ell = \ell!\, c_\ell$이다($0! = 1$). $\ell \ge m + 1$이면 (ii)에 의해 $h^{(\ell)}(a) = 0$이다.

**9의 증명.** $k$에 대한 명제 "$f$는 $k$번 미분가능하고 $f^{(k)} = f$"를 귀납으로 보인다. $k = 0$이면 (1)이다. $k$에서 참이면 $f^{(k)} = f$는 미분가능한 함수이므로 (2)에 의해 $f$는 $k + 1$번 미분가능하고, (1)과 가정에 의해 $f^{(k+1)} = (f^{(k)})' = f' = f$이다. 모든 $k$에서 $k$번 미분가능하므로 $f$는 무한 번 미분가능하다. $\blacksquare$
:::

## 예시와 반례

:::example[지수함수]
[[exponential-function|지수함수]]의 (3)에 의해 $\exp$는 미분가능한 함수이고 $\exp' = \exp$입니다. (9)에 의해 $\exp$는 무한 번 미분가능하고 $0$ 이상인 모든 정수 $k$에서 $\exp^{(k)} = \exp$입니다. 특히 같은 항목의 (1)에 의해 모든 $k$에서 $\exp^{(k)}(0) = \exp(0) = 1$입니다.
:::

:::example[세제곱 하나와 상수로 된 함수]
$h(x) = 2 + (x - 1)^3$을 (8)의 꼴로 보면 $a = 1$, $m = 3$, $c_0 = 2$, $c_1 = c_2 = 0$, $c_3 = 1$입니다. (8)의 (i)의 계수 $(j + \ell)!\,(j!)^{-1} c_{j+\ell}$를 계산하면 다음과 같습니다.

- $\ell = 1$: $j = 0, 1, 2$에서 $1 \cdot c_1 = 0$, $2 \cdot c_2 = 0$, $3 \cdot c_3 = 3$이므로 $h'(x) = 3(x - 1)^2$입니다.
- $\ell = 2$: $j = 0, 1$에서 $2 \cdot c_2 = 0$, $6 \cdot c_3 = 6$이므로 $h''(x) = 6(x - 1)$입니다.
- $\ell = 3$: $j = 0$에서 $6 \cdot c_3 = 6$이므로 $h^{(3)}$은 값이 $6$인 상수함수입니다.
- $\ell \ge 4$: (ii)에 의해 $h^{(\ell)}$은 값이 $0$인 상수함수입니다.

$x = 1$에서의 값은 $h(1) = 2$, $h'(1) = 0$, $h''(1) = 0$, $h^{(3)}(1) = 6$이고, (iii)의 $\ell!\,c_\ell$로도 $0! \cdot 2 = 2$, $1! \cdot 0 = 0$, $2! \cdot 0 = 0$, $3! \cdot 1 = 6$입니다.
:::

:::counterexample[한 번 미분가능하지만 두 번은 아닌 x|x|]
$g(x) = x\,|x|$로 정한 $g : \mathbb{R} \to \mathbb{R}$를 봅시다. $s(x) = |x|$, $i$를 $\mathbb{R}$ 위의 항등함수라 하면 $g = i\,s$입니다([[real-valued-function]]의 (4)).

- $c \ne 0$이면 [[derivative]]의 (1), (3)과 [[derivative-rules|미분법]]의 (4)에 의해 $g'(c) = c\,s'(c) + 1 \cdot |c|$이고, $s'(c)$는 $c > 0$이면 $1$, $c < 0$이면 $-1$이므로 어느 쪽이든 $g'(c) = |c| + |c| = 2|c|$입니다([[absolute-value]]의 (1)).
- $c = 0$이면 $x \ne 0$에서 차분몫이 $x\,|x|\,x^{-1} = |x|$이고, 양의 실수 $\varepsilon$마다 $\delta = \varepsilon$으로 두면 $0 < |x| < \delta$에서 $\bigl||x| - 0\bigr| = |x| < \varepsilon$이므로 [[limit-of-a-function]]의 정의에 의해 $g'(0) = 0 = 2|0|$입니다.

따라서 $g$는 미분가능한 함수이고 $g' = 2s$입니다. $2s$가 $0$에서 미분가능하다면 미분법의 (1)에 의해 $s = 2^{-1}(2s)$도 그럴 텐데, [[derivative]]의 (3)에 의해 $s$는 $0$에서 미분가능하지 않습니다. 그러므로 $g'$은 미분가능한 함수가 아니고, (2)에 의해 $g$는 $1$번 미분가능하지만 $2$번 미분가능하지 않습니다. 함수 $g''$은 쓰지 않습니다. 그래도 $c \ne 0$에서는 $g'$이 $c$에서 미분가능하므로 (3)의 값 $g''(c) = (2s)'(c) = 2s'(c)$는 쓸 수 있고, $c > 0$이면 $2$, $c < 0$이면 $-2$입니다.

한편 $g$를 구간 $J = \{x \in \mathbb{R} : 0 \le x\}$로 제한하면, $J$에서 $|x| = x$이므로 $g|_J$는 $x$에서의 값이 $x^2$인 함수입니다. 이것은 (8)의 $h(x) = x^2$($a = 0$, $m = 2$, $c_0 = c_1 = 0$, $c_2 = 1$)의 제한 $h|_J$와 같으므로, (8)과 (5)에 의해 $g|_J$는 무한 번 미분가능하고 $(g|_J)''$은 값이 $2$인 상수함수입니다. 곧 (5)를 거꾸로 하여 "제한이 $n$번 미분가능하면 원래 함수도 그렇다"고 할 수는 없습니다.
:::

## 확인 질문

:::check[$h(x) = (x - 2)^5$으로 정한 $h : \mathbb{R} \to \mathbb{R}$에서 $h^{(5)}(0)$과 $h^{(6)}(0)$은 무엇인가?]
$h^{(5)}(0) = 120$이고 $h^{(6)}(0) = 0$입니다. $h$는 (8)의 꼴에서 $a = 2$, $m = 5$, $c_0 = \dots = c_4 = 0$, $c_5 = 1$인 함수입니다. (8)의 (i)을 $\ell = 5$에 쓰면 합은 $j = 0$인 항 하나뿐이고 $h^{(5)}(x) = 5!\,(0!)^{-1} c_5 = 120$이므로, $h^{(5)}$은 값이 $120$인 상수함수이고 $x = 0$에서도 $120$입니다. (ii)에 의해 $h^{(6)}$은 값이 $0$인 상수함수입니다.
:::

:::check[$f : \mathbb{R} \to \mathbb{R}$가 $2$번 미분가능하고 $f''$이 값이 $0$인 상수함수이면 $f$는 어떤 함수인가?]
어떤 실수 $b$, $C$가 있어 모든 $x$에서 $f(x) = bx + C$인 함수입니다. (1)에 의해 $f'$은 미분가능한 함수이고 $(f')' = f''$이므로, [[derivative-and-monotonicity|도함수와 증가·감소]]의 (1)에 의해 $f'$은 상수함수입니다. 그 값을 $b$라 하고 $k(x) = bx$로 정한 함수 $k$를 생각하면 [[derivative]]의 (1)에 의해 $k' = f'$이고, 같은 항목의 (2)에 의해 어떤 실수 $C$가 있어 모든 $x$에서 $f(x) = bx + C$입니다. 거꾸로 이런 $f$는 [[derivative]]의 (1)을 두 번 쓰면 $f''$이 값이 $0$인 상수함수가 됩니다.
:::
