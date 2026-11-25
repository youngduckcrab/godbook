---
title: 복소수의 거듭제곱
title_en: Powers of a Complex Number
aliases: [복소수의 n제곱, i의 거듭제곱, power of a complex number, powers of i]
kind: definition
field: complex-analysis
msc: ["30"]
level: undergrad
summary: 복소수 z 와 0 이상인 정수 n 에 대하여 z⁰ = 1, z^(n+1) = zⁿ z 로 거듭제곱을 재귀로 정한다(0⁰ = 1). z ≠ 0 이면 이것은 곱셈군 ℂ^× 의 거듭제곱과 같고, 음의 정수 지수는 그 군의 거듭제곱으로 쓴다. 지수법칙, 절댓값과 켤레의 거듭제곱, 실수를 옮긴 복소수의 거듭제곱이 실수의 거듭제곱과 같다는 것, 지수를 4 로 나눈 나머지로 정해지는 i 의 거듭제곱의 표를 진술한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, mathematical-induction, recursion-theorem, division-theorem, real-number-arithmetic, real-order-axioms, order-properties-of-reals, power-of-a-real-number, group, power-in-a-group, laws-of-exponents, ring, ring-basic-properties, field, complex-number, complex-field, complex-conjugate, modulus-of-complex-number]
sources:
  - ref: lebl-basic-analysis-2
    loc: 11.1.1절 The complex plane (p.139); 11.3.1절 Analytic functions (p.153)
    checked: original
    note: "출처는 p.139 에서 i² = (0, 1)(0, 1) = −1 과 z² + 1 = 0 을, p.153 에서 |z| < 1 일 때의 등비급수 Σ zⁿ 을 쓴다. 이 항목의 재귀 정의와 (2), (5)는 해석학 입문의 실수의 거듭제곱, 추상대수의 군의 거듭제곱과 같은 값이 되도록 이 사이트가 둔 것이다."
  - ref: judson-abstract-algebra
    loc: 4.2절 Multiplicative Group of Complex Numbers, Example 4.23 (p.52); 4.5절 Exercises 3, 15, 17, 18 (p.55–57)
    checked: original
    note: "Judson 은 복소수의 거듭제곱을 곱셈군 ℂ* 의 원소의 거듭제곱으로 쓴다(Example 4.23 p.52 의 (1 + i)^{10}, 연습문제 18(g)(p.57)의 (−2 + 2i)^{−5} 처럼 음의 지수도 쓴다). (2)는 0 이 아닌 z 에서 두 거듭제곱이 같다는 것이다. 연습문제 15(e)(p.56)의 i^{45} 와 연습문제 3(j)(p.56)의 'i 가 생성하는 ℂ* 의 부분군'은 (6)의 i 의 거듭제곱의 표로 답하는 물음이다. 예시 'i 와 1 + i 의 거듭제곱'의 (1 + i)ⁿ 은 Example 4.23 과 연습문제 18 의 (1 − i)⁶ 과 같은 대상이고, 이 항목은 극형식 없이 (1 + i)² = 2i 에서 지수법칙으로 계산한다. 확인 질문 '$z = 1 - i$이면 $z^4$와 $(\\overline{z})^4$는 무엇인가?'의 1 − i 는 연습문제 17(a)(p.57)과 18(b)의 1 − i 와 같은 수이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(삼각부등식의 등호 조건, 예의 거듭제곱 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산, 가역원의 군 $\mathbb{C}^{\times} = \mathbb{C} - \{0\}$, 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 켤레는 [[complex-conjugate]], 절댓값은 [[modulus-of-complex-number]]의 것이다. 실수의 거듭제곱은 [[power-of-a-real-number]], 군의 거듭제곱은 [[power-in-a-group]]의 것이다.

**정의.** $z$를 복소수라 하자. [[recursion-theorem|재귀 정리]]에 의해 $q(1) = z$이고 모든 자연수 $k$에서 $q(k + 1) = q(k) z$인 함수 $q : \mathbb{N} \to \mathbb{C}$가 정확히 하나 있다. 자연수 $n$에 대하여 $z$의 **$n$제곱**(the $n$th power of $z$) $z^n$을 $q(n)$으로 정하고, $z^0 = 1$로 정한다. 특히 $0^0 = 1$이다. 따라서 $0$ 이상인 모든 정수 $n$에서
$$
z^0 = 1, \qquad z^{n+1} = z^n z
$$
이다. **음의 지수.** $z \ne 0$이고 $n$이 음의 정수이면 $z^n$은 곱셈군 $\mathbb{C}^{\times}$에서의 거듭제곱, 곧 $(z^{-1})^{-n}$이다. $z = 0$이면 음의 지수의 거듭제곱은 정의하지 않는다.

다음이 성립한다. 아래에서 $z$, $w$는 복소수, $x$는 실수이고, $m$, $n$은 따로 말하지 않으면 $0$ 이상인 정수이다.

1. (정의의 꼴) $z^1 = z$, $z^2 = zz$이고 $z^{n+1} = z^n z = z z^n$이다. $0$ 이상인 정수 전체의 집합에서 $\mathbb{C}$로의 함수 $p$가 $p(0) = 1$이고 $0$ 이상인 모든 정수 $k$에서 $p(k + 1) = p(k) z$를 만족하면, $0$ 이상인 모든 정수 $k$에서 $p(k) = z^k$이다.
2. (군의 거듭제곱과의 일치) $z \ne 0$이면 $0$ 이상인 모든 정수 $n$에서 $z^n$은 군 $\mathbb{C}^{\times}$에서의 거듭제곱과 같다. 따라서 $z \ne 0$이면 모든 정수 $n$에서 $z^n \ne 0$이고, 지수가 $-1$인 거듭제곱은 역원 $z^{-1}$과 같으며, 모든 정수 $n$에서 $z^{n+1} = z^n z$이다.
3. (지수법칙)
   - (i) $z^{m+n} = z^m z^n$, $(z^m)^n = z^{mn}$, $(zw)^n = z^n w^n$이다. $1^n = 1$이고, $n \ge 1$이면 $0^n = 0$이다.
   - (ii) $z \ne 0$이고 $w \ne 0$이면 (i)의 세 등식은 모든 정수 $m$, $n$에서 성립하고, $(z^n)^{-1} = z^{-n} = (z^{-1})^n$이다.
4. (절댓값과 켤레) $|z^n| = |z|^n$이고 $\overline{z^n} = (\overline{z})^n$이다. $z \ne 0$이면 음의 정수 $n$에서도 $\overline{z^n} = (\overline{z})^n$이고 $|z^n| = (|z|^{-n})^{-1}$이다.
5. (실수의 거듭제곱과의 일치) $\iota(x)^n = \iota(x^n)$이다. 오른쪽의 $x^n$은 [[power-of-a-real-number]]의 거듭제곱이다. 따라서 [[complex-field]]의 (3)의 약속대로 실수 $x$를 복소수로 읽어 $x^n$이라 써도 그 값은 실수의 거듭제곱 $x^n$을 옮긴 것과 같다. $x \ne 0$이면 $\iota(x)^{-n} = \iota\bigl((x^n)^{-1}\bigr)$이다.
6. ($i$의 거듭제곱) $i^0 = 1$, $i^1 = i$, $i^2 = -1$, $i^3 = -i$, $i^4 = 1$이다. 모든 정수 $n$에 대하여 [[division-theorem|나눗셈 정리]]로 $n = 4k + r$, $0 \le r < 4$인 정수 $k$, $r$을 잡으면 $i^n = i^r$이다. 따라서 $\operatorname{Re}(i^n)$과 $\operatorname{Im}(i^n)$은 $r$에 따라 다음과 같다.

   | $r$ | $0$ | $1$ | $2$ | $3$ |
   |---|---|---|---|---|
   | $i^n$ | $1$ | $i$ | $-1$ | $-i$ |
   | $\operatorname{Re}(i^n)$ | $1$ | $0$ | $-1$ | $0$ |
   | $\operatorname{Im}(i^n)$ | $0$ | $1$ | $0$ | $-1$ |

   또 모든 정수 $n$에서 $\operatorname{Re}(i^{n+1}) = -\operatorname{Im}(i^n)$이고 $\operatorname{Im}(i^{n+1}) = \operatorname{Re}(i^n)$이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, and $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the group of units $\mathbb{C}^{\times} = \mathbb{C} - \{0\}$, the function $\iota$, and the convention for writing real numbers where complex numbers are required are those of the entry on the field of complex numbers; conjugates and moduli are those of their entries. Powers of real numbers are those of the entry on powers of real numbers, and powers in a group are those of the entry on powers in a group.

**Definition.** Let $z$ be a complex number. By the recursion theorem there is exactly one function $q : \mathbb{N} \to \mathbb{C}$ with $q(1) = z$ and $q(k + 1) = q(k) z$ for every natural number $k$. For a natural number $n$, the **$n$th power** $z^n$ of $z$ is defined to be $q(n)$, and $z^0 = 1$. In particular $0^0 = 1$. Hence, for every integer $n \ge 0$,
$$
z^0 = 1, \qquad z^{n+1} = z^n z.
$$
**Negative exponents.** If $z \ne 0$ and $n$ is a negative integer, $z^n$ is the power in the multiplicative group $\mathbb{C}^{\times}$, that is, $(z^{-1})^{-n}$. If $z = 0$, powers with negative exponents are not defined.

The following hold. Below, $z$ and $w$ are complex numbers, $x$ is a real number, and $m$, $n$ are integers $\ge 0$ unless stated otherwise.

1. (Form of the definition) $z^1 = z$, $z^2 = zz$, and $z^{n+1} = z^n z = z z^n$. If a function $p$ from the set of integers $\ge 0$ to $\mathbb{C}$ satisfies $p(0) = 1$ and $p(k + 1) = p(k) z$ for every integer $k \ge 0$, then $p(k) = z^k$ for every integer $k \ge 0$.
2. (Agreement with powers in the group) If $z \ne 0$, then for every integer $n \ge 0$ the power $z^n$ equals the power in the group $\mathbb{C}^{\times}$. Hence, if $z \ne 0$, then $z^n \ne 0$ for every integer $n$, the power with exponent $-1$ equals the inverse $z^{-1}$, and $z^{n+1} = z^n z$ for every integer $n$.
3. (Laws of exponents)
   - (i) $z^{m+n} = z^m z^n$, $(z^m)^n = z^{mn}$, and $(zw)^n = z^n w^n$. Moreover $1^n = 1$, and $0^n = 0$ if $n \ge 1$.
   - (ii) If $z \ne 0$ and $w \ne 0$, the three identities of (i) hold for all integers $m$, $n$, and $(z^n)^{-1} = z^{-n} = (z^{-1})^n$.
4. (Modulus and conjugate) $|z^n| = |z|^n$ and $\overline{z^n} = (\overline{z})^n$. If $z \ne 0$, then also for negative integers $n$ we have $\overline{z^n} = (\overline{z})^n$ and $|z^n| = (|z|^{-n})^{-1}$.
5. (Agreement with powers of real numbers) $\iota(x)^n = \iota(x^n)$, where $x^n$ on the right is the power of the entry on powers of real numbers. Hence, when a real number $x$ is read as a complex number by the convention of item (3) of the entry on the field of complex numbers and $x^n$ is written, its value equals the image of the real power $x^n$. If $x \ne 0$, then $\iota(x)^{-n} = \iota\bigl((x^n)^{-1}\bigr)$.
6. (Powers of $i$) $i^0 = 1$, $i^1 = i$, $i^2 = -1$, $i^3 = -i$, and $i^4 = 1$. For every integer $n$, if integers $k$, $r$ with $n = 4k + r$ and $0 \le r < 4$ are taken by the division theorem, then $i^n = i^r$. Hence $\operatorname{Re}(i^n)$ and $\operatorname{Im}(i^n)$ depend on $r$ as follows.

   | $r$ | $0$ | $1$ | $2$ | $3$ |
   |---|---|---|---|---|
   | $i^n$ | $1$ | $i$ | $-1$ | $-i$ |
   | $\operatorname{Re}(i^n)$ | $1$ | $0$ | $-1$ | $0$ |
   | $\operatorname{Im}(i^n)$ | $0$ | $1$ | $0$ | $-1$ |

   Moreover $\operatorname{Re}(i^{n+1}) = -\operatorname{Im}(i^n)$ and $\operatorname{Im}(i^{n+1}) = \operatorname{Re}(i^n)$ for every integer $n$.
:::

## 직관

거듭제곱은 같은 수를 거듭 곱하는 것이고, 정의는 해석학 입문의 [[power-of-a-real-number|실수의 거듭제곱]]과 똑같이 "$0$제곱은 $1$, 한 번 더 곱하면 지수가 하나 는다"는 규칙으로 정합니다. 그런데 이 사이트에는 거듭제곱이 이미 둘 있습니다. 실수의 거듭제곱과, 추상대수의 [[power-in-a-group|군의 거듭제곱]]입니다. 복소수의 거듭제곱이 셋째 정의가 되지 않도록, (2)는 $0$이 아닌 복소수에서 이것이 곱셈군 $\mathbb{C}^{\times}$의 거듭제곱과 같다는 것을, (5)는 실수를 옮긴 복소수에서 실수의 거듭제곱과 같다는 것을 말합니다. 음의 지수는 새로 정하지 않고 군의 것을 그대로 씁니다. $0$은 $\mathbb{C}^{\times}$의 원소가 아니므로 $0$의 음의 지수는 없습니다.

$i$의 거듭제곱은 $1, i, -1, -i$를 네 걸음마다 되풀이합니다. 시계의 바늘이 네 칸짜리 시계판을 한 칸씩 도는 것과 같아서, $i^n$을 알려면 $n$을 $4$로 나눈 나머지만 보면 됩니다((6)). 시계의 비유는 $n$이 음수일 때도 맞습니다. 나눗셈 정리의 나머지는 $n$이 음수여도 $0$부터 $3$ 사이이기 때문입니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다룬다. "군의 거듭제곱의 (2)", "지수법칙의 (1)"은 [[power-in-a-group]]과 [[laws-of-exponents]]의 번호이고, "복소수체의 (1)", "켤레의 (2)", "모듈러스의 (3)"은 [[complex-field]], [[complex-conjugate]], [[modulus-of-complex-number]]의 번호이다. 함수 $\mathbb{N} \times \mathbb{C} \to \mathbb{C}$, $(k, t)$에서 $tz$는 [[recursion-theorem|재귀 정리]]의 (1)에 의해 함수이므로 정의의 $q$가 있다. 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]).

**정의의 확인과 1의 증명.** $n \ge 1$이면 $z^{n+1} = q(n + 1) = q(n)z = z^n z$이고, $n = 0$이면 $z^1 = q(1) = z = 1z = z^0 z$이다. 따라서 $0$ 이상인 모든 $n$에서 $z^{n+1} = z^n z$이고, 곱셈의 교환법칙에 의해 이것은 $z z^n$이다. $z^2 = z^1 z = zz$이다. 함수 $p$에 대해서는 시작점이 $0$인 [[mathematical-induction|수학적 귀납법]]으로 $p(k) = z^k$를 보인다. $p(0) = 1 = z^0$이고, $p(k) = z^k$이면 $p(k + 1) = p(k)z = z^k z = z^{k+1}$이다.

**2의 증명.** $z \ne 0$이면 복소수체의 (1)에 의해 $z \in \mathbb{C}^{\times}$이다. $0$ 이상인 정수 $k$에서 군 $\mathbb{C}^{\times}$의 거듭제곱 $z^k$(이 문단에서만 $g(k)$로 쓴다)는 군의 거듭제곱의 (1)에 의해 $\mathbb{C}^{\times}$의 원소이고, 정의에 의해 $g(0)$은 군의 항등원 $1$이며, 군의 거듭제곱의 (2)에 의해 $g(k + 1) = g(k)z$이다. 군의 곱은 $\mathbb{C}$의 곱을 제한한 것이므로 (1)에 의해 $g(k) = z^k$이다. 따라서 $0$ 이상인 지수에서 두 거듭제곱은 같고, 음의 지수는 정의에 의해 군의 거듭제곱이다. 군의 원소는 $0$이 아니므로 모든 정수 $n$에서 $z^n \ne 0$이다. 지수가 $-1$인 거듭제곱이 역원이라는 것과 $z^{n+1} = z^n z$는 군의 거듭제곱의 (1), (2)이다.

**3의 증명.** (i) $m$을 정하고 $n$에 대한 귀납법을 쓴다. $z^{m+0} = z^m = z^m \cdot 1 = z^m z^0$이고, $z^{m+n} = z^m z^n$이면 (1)과 곱셈의 결합법칙에 의해 $z^{m+n+1} = z^{m+n}z = z^m (z^n z) = z^m z^{n+1}$이다. $p(n) = z^{mn}$으로 두면 $p(0) = z^0 = 1$이고 방금 보인 것에 의해 $p(n + 1) = z^{mn + m} = z^{mn} z^m = p(n) z^m$이므로, (1)을 밑 $z^m$에 쓰면 $p(n) = (z^m)^n$이다. $p(n) = z^n w^n$으로 두면 $p(0) = 1 \cdot 1 = 1$이고, 교환법칙과 결합법칙에 의해 $p(n + 1) = (z^n z)(w^n w) = (z^n w^n)(zw) = p(n)(zw)$이므로 (1)을 밑 $zw$에 쓰면 $p(n) = (zw)^n$이다. $p(n) = 1$로 두면 $p(n + 1) = 1 = 1 \cdot 1 = p(n) \cdot 1$이므로 $1^n = 1$이다. $n \ge 1$이면 $n - 1 \ge 0$이고 [[ring-basic-properties|환의 기본 성질]]의 (1)에 의해 $0^n = 0^{n-1} \cdot 0 = 0$이다.

(ii) $\mathbb{C}^{\times}$는 아벨군이고(복소수체의 (1)) (2)에 의해 거듭제곱은 그 군의 거듭제곱이므로, 지수법칙의 (1), (2), (4), (3)에서 나온다.

**4의 증명.** $p(n) = \overline{z^n}$으로 두면 켤레의 정의에 의해 $\overline{1} = (1, -0) = 1$이므로 $p(0) = 1$이고, 켤레의 (2)에 의해 $p(n + 1) = \overline{z^n z} = \overline{z^n}\,\overline{z} = p(n)\overline{z}$이다. (1)을 밑 $\overline{z}$에 쓰면 $p(n) = (\overline{z})^n$이다. 실수 $s_n = |z^n|$에 대해서는 모듈러스의 (5)에 의해 $s_0 = |1| = |\iota(1)| = 1$이고 모듈러스의 (3)에 의해 $s_{n+1} = |z^n z| = s_n\,|z|$이므로, [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 $s_n = |z|^n$이다. $z \ne 0$이고 $n \ge 1$이면 (3)의 (ii)와 켤레의 (2)에 의해 $\overline{z^{-n}} = \overline{(z^n)^{-1}} = (\overline{z^n})^{-1} = ((\overline{z})^n)^{-1} = (\overline{z})^{-n}$이다($\overline{z} \ne 0$은 켤레의 (2)). 모듈러스의 (4)에 의해 $|z^{-n}| = |(z^n)^{-1}| = |z^n|^{-1} = (|z|^n)^{-1}$이다.

**5의 증명.** $p(n) = \iota(x^n)$으로 두면 실수의 거듭제곱의 정의와 복소수체의 (2)에 의해 $p(0) = \iota(1) = 1$이고 $p(n + 1) = \iota(x^n x) = \iota(x^n)\iota(x) = p(n)\iota(x)$이다. (1)을 밑 $\iota(x)$에 쓰면 $p(n) = \iota(x)^n$이다. $x \ne 0$이면 (3)의 (ii)와 복소수체의 (2)의 (i)에 의해 $\iota(x)^{-n} = (\iota(x)^n)^{-1} = \iota(x^n)^{-1} = \iota\bigl((x^n)^{-1}\bigr)$이다($x^n \ne 0$은 실수의 거듭제곱의 (3)).

**6의 증명.** (1)과 복소수체의 (5)에 의해 $i^0 = 1$, $i^1 = i$, $i^2 = ii = -1$, $i^3 = i^2 i = (-1)i = -i$, $i^4 = i^3 i = -(ii) = -(-1) = 1$이다(환의 기본 성질의 (2), (6)). 정수 $n$에 대하여 나눗셈 정리를 $b = 4$에 쓰면 $n = 4k + r$, $0 \le r < 4$인 정수 $k$, $r$이 있다. $i \ne 0$이므로 (3)의 (ii)에 의해 $i^n = i^{4k} i^r = (i^4)^k i^r = 1^k i^r = i^r$이다. 여기서 $1^k = 1$은 [[power-in-a-group|군의 거듭제곱]]의 (3)(항등원의 거듭제곱)이다. $0 \le r < 4$인 정수 $r$은 (Z1), (Z5)에 의해 $0$, $1$, $2$, $3$ 가운데 하나이므로 표가 나온다. 표의 실수부와 허수부는 복소수체의 (4)로 읽는다. 끝으로 (2)에 의해 $i^{n+1} = i^n i$이고, [[complex-number|복소수]]의 (4)에 의해 $\operatorname{Re}(i^n i) = -\operatorname{Im}(i^n)$, $\operatorname{Im}(i^n i) = \operatorname{Re}(i^n)$이다. $\blacksquare$
:::

## 예시와 반례

:::example[i 와 1 + i 의 거듭제곱]
$2026 = 4 \cdot 506 + 2$이므로 (6)에 의해 $i^{2026} = i^2 = -1$입니다. $-1 = 4 \cdot (-1) + 3$이므로 $i^{-1} = i^3 = -i$이고, 실제로 $i(-i) = -(ii) = 1$입니다. $-6 = 4 \cdot (-2) + 2$이므로 $i^{-6} = -1$입니다.

$(1 + i)^2 = (1 + i)(1 + i) = (1 - 1) + (1 + 1)i = 2i$입니다. (3)과 (5), (6)에 의해 $(1 + i)^4 = (2i)^2 = 2^2 i^2 = -4$이고, $(1 + i)^8 = (-4)^2 = 16$입니다. (4)로 확인하면 $|1 + i|^8 = (\sqrt{2})^8 = 2^4 = 16$이고 $|16| = 16$입니다. $0$ 이상인 정수 $k$에서 $(1 + i)^{4k} = ((1 + i)^4)^k = (-4)^k$이므로, 이것은 실수인 복소수입니다.
:::

:::counterexample[z = 0 에서 쓸 수 없는 음의 지수]
(3)의 (i)은 $0$ 이상인 지수에서 $z = 0$이어도 성립합니다. 예컨대 $0^{0 + 2} = 0 = 0^0 \cdot 0^2$입니다. 그러나 $z = 0$이면 $0^{-1}$이 정의되지 않으므로 $0^{1 + (-1)} = 0^1 0^{-1}$ 같은 식은 오른쪽이 뜻이 없습니다. 왼쪽 $0^0 = 1$은 정해져 있지만, (3)의 (ii)가 $z \ne 0$을 가정하는 것은 이 때문입니다.
:::

## 확인 질문

:::check[$z = 1 - i$이면 $z^4$와 $(\overline{z})^4$는 무엇인가?]
$z^2 = (1 - i)(1 - i) = (1 - 1) + (-1 - 1)i = -2i$이므로 (3)에 의해 $z^4 = (-2i)^2 = (-2)^2 i^2 = -4$입니다. (4)에 의해 $(\overline{z})^4 = \overline{z^4} = \overline{-4} = -4$입니다. 실제로 $\overline{z} = 1 + i$이고 예시에서 $(1 + i)^4 = -4$였습니다.
:::

:::check[$i^n = 1$인 정수 $n$은 어떤 것인가?]
$n = 4k + r$, $0 \le r < 4$로 쓰면 (6)의 표에서 $i^n = 1$인 것은 정확히 $r = 0$일 때, 곧 $n$이 $4$의 배수일 때입니다. 음의 정수도 마찬가지여서 $i^{-4} = 1$이고 $i^{-2} = -1$입니다.
:::
