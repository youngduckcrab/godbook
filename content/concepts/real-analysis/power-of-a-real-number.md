---
title: 실수의 거듭제곱
title_en: Powers of a Real Number
aliases: [거듭제곱, 지수법칙, 밑, 지수, 영의 영제곱, power, exponent, base, laws of exponents]
kind: definition
field: real-analysis
msc: ["26"]
level: undergrad
summary: 실수 a 와 0 이상인 정수 n 에 대하여 a⁰ = 1, a^(n+1) = aⁿ·a 로 거듭제곱을 재귀 정리로 정의한다(0⁰ = 1). 지수법칙, 역수와 절댓값과의 관계, (−1)ⁿ 의 값, 부등식과의 관계, 정수의 거듭제곱이 정수라는 것을 증명한다.
requires: [proof-by-contradiction, mathematical-induction, natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, recursion-theorem, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, sequence, basic-limits]
sources:
  - ref: lebl-basic-analysis
    loc: 0.3절 Example 0.3.7, 0.3.8 (p.13), 2.2.2절 Proposition 2.2.5 뒤의 문단 (p.65), Proposition 2.2.11 (p.68), 2.6.5절 첫 문단의 0⁰ = 1 규약 (p.106)
    checked: original
    note: "출처는 자연수 지수의 거듭제곱을 정의하지 않고 쓴다('power', 'exponent'로 검색한 범위에서 정의하는 문장을 찾지 못했다). 처음 쓰는 곳은 p.13 의 Example 0.3.7(2^{n−1} ≤ n!)과 Example 0.3.8(1 + c + ⋯ + cⁿ, n ∈ ℕ ∪ {0})이다. p.65 는 '곱셈과 극한의 순서를 바꿀 수 있으므로 lim x_n^k = (lim x_n)^k 임을 보일 수 있다(exercise)'고 적고, Proposition 2.2.11(p.68)은 cⁿ 의 극한을 다루며, 증명에서 c > 0 이면 cⁿ > 0 임을 '귀납법으로' 얻는다고만 하고 c < 1 이면 c^{n+1} < cⁿ 이라고 바로 적는다. 2.6.5절(p.106)은 거듭제곱급수에서 '0⁰ = 1 이라는 규약을 쓴다'고 적는다. 이 항목의 a⁰ = 1(0⁰ = 1 포함)은 그 규약을 모든 실수의 0 제곱으로 정의한 것이다. 재귀 정리로 하는 정의와 (1)–(7)의 진술과 증명은 이 사이트의 것이다. 출처의 연습문제 1.2.17(p.35)은 유리수 지수 x^{p/q} 를 정의하는데, 이 항목은 음의 지수와 유리수 지수를 정의하지 않는다. (6)의 (i), (iv)는 Proposition 2.2.11 의 증명이 증명 없이 쓰는 두 사실(0 < c 이면 cⁿ > 0, 0 < c < 1 이면 c^{n+1} < cⁿ)을 포함한다. 예시 '(2/3)ⁿ'은 출처 연습문제 2.1.4 의 수열 {2^{−n}} 처럼 1 보다 작은 양수의 거듭제곱을 보는 같은 종류의 예이고, 나머지 예시와 반례, 확인 질문은 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
실수의 계산과 $-a$, $a^{-1}$은 [[real-number-arithmetic]]의 것이고, 순서와 절댓값은 [[real-order-axioms]]와 [[absolute-value]]의 것이며, 수열은 [[sequence]]의 것이다.

**정의.** $a$를 실수라 하자. [[recursion-theorem|재귀 정리]]의 (1)에 의해 $g(n, t) = t \cdot a$인 함수 $g : \mathbb{N} \times \mathbb{R} \to \mathbb{R}$가 있고, 재귀 정리와 그 (3)에 의해 $p_1 = a$이고 모든 자연수 $n$에서 $p_{n+1} = p_n \cdot a$인 수열 $(p_n)$이 정확히 하나 있다. 자연수 $n$에 대하여 $a$의 **$n$제곱**(the $n$th power of $a$) $a^n$을 $p_n$으로 정하고, $a^0 = 1$로 정한다. 특히 $0^0 = 1$이다. $a^n$을 **거듭제곱**(power)이라 하고 $a$를 **밑**(base), $n$을 **지수**(exponent)라 한다. 지수는 $0$ 이상인 정수만 쓰며, 음의 지수는 정의하지 않는다. 그러면 $0$ 이상인 모든 정수 $n$에서
$$
a^0 = 1, \qquad a^{n+1} = a^n \cdot a
$$
이다(아래 증명 첫머리). $n$번째 항이 $a^n$인 수열은 $(p_n)$이다.

**기호에 관한 약속.** 위첨자 $-1$은 지수가 아니라 (K8)의 역수 기호이다. 이 항목은 음의 지수를 정의하지 않으므로 $a^{-1}$은 언제나 $0$이 아닌 실수 $a$의 역수이고, 아래 (3)의 식은 $n = 1$에서 $(a^1)^{-1} = a^{-1} = (a^{-1})^1$이 되어 두 표기가 서로 맞는다. 정수론 입문 강의도 정수의 거듭제곱을 정의하지만, 이 항목은 그것과 따로 정의하며 이 강의는 두 값이 같다는 사실을 쓰지 않는다.

다음이 성립한다. 아래에서 $a$, $b$는 실수이고 $m$, $n$은 $0$ 이상인 정수이다.

1. (정의의 꼴) $a^1 = a$이고 $a^2 = aa$이다. $a^{n+1} = a^n a = a\,a^n$이다. 또 $0$ 이상인 정수 전체의 집합에서 $\mathbb{R}$로의 함수 $q$가 $q(0) = 1$이고 $0$ 이상인 모든 정수 $k$에서 $q(k+1) = q(k)\,a$를 만족하면, $0$ 이상인 모든 정수 $k$에서 $q(k) = a^k$이다.
2. (지수법칙)
   - (i) $a^{m+n} = a^m a^n$이다.
   - (ii) $(a^m)^n = a^{mn}$이다.
   - (iii) $(ab)^n = a^n b^n$이다.
   - (iv) $1^n = 1$이다. $n \ge 1$이면 $0^n = 0$이다.
3. (역수) $a \ne 0$이면 $a^n \ne 0$이고 $(a^n)^{-1} = (a^{-1})^n$이다.
4. (절댓값) $|a^n| = |a|^n$이다.
5. ($-1$의 거듭제곱) $n$이 짝수이면 $(-1)^n = 1$이고, $n$이 홀수이면 $(-1)^n = -1$이다. 따라서 $n$번째 항이 $(-1)^n$인 수열은 [[basic-limits]]의 (3)의 수열 $(a_n)$($n$이 짝수이면 $1$, 홀수이면 $-1$)과 같다.
6. (순서)
   - (i) $0 < a$이면 $0 < a^n$이다. $0 \le a$이면 $0 \le a^n$이다.
   - (ii) $0 \le a \le b$이면 $a^n \le b^n$이다. $0 \le a < b$이고 $n \ge 1$이면 $a^n < b^n$이다.
   - (iii) $0 \le a$, $0 \le b$이고 $n \ge 1$이라 하자. $a^n < b^n$이면 $a < b$이고, $a^n \le b^n$이면 $a \le b$이며, $a^n = b^n$이면 $a = b$이다.
   - (iv) $0 < a < 1$이면 $0 < a^{n+1} < a^n \le 1$이다. $1 < a$이면 $1 \le a^n < a^{n+1}$이다. 따라서 $0 < a < 1$이면 $n$번째 항이 $a^n$인 수열은 단조감소이고, $1 < a$이면 단조증가이다.
7. (정수의 거듭제곱) $a$가 정수이면 $a^n$은 정수이다. $a$가 자연수이면 $a^n$은 자연수이다.
:::

:::english
Arithmetic of real numbers and $-a$, $a^{-1}$ are those of the entry on the arithmetic of real numbers; order and absolute value are those of the entries on the order axioms and on absolute value; sequences are those of the entry on sequences.

**Definition.** Let $a$ be a real number. By item (1) of the recursion theorem there is a function $g : \mathbb{N} \times \mathbb{R} \to \mathbb{R}$ with $g(n, t) = t \cdot a$, and by the recursion theorem and its item (3) there is exactly one sequence $(p_n)$ with $p_1 = a$ and $p_{n+1} = p_n \cdot a$ for every natural number $n$. For a natural number $n$, the **$n$th power** $a^n$ of $a$ is defined to be $p_n$, and we define $a^0 = 1$. In particular $0^0 = 1$. We call $a^n$ a **power**, $a$ the **base**, and $n$ the **exponent**. Only integers $\ge 0$ are used as exponents; negative exponents are not defined. Then for every integer $n \ge 0$
$$
a^0 = 1, \qquad a^{n+1} = a^n \cdot a
$$
(see the beginning of the proof below). The sequence whose $n$th term is $a^n$ is $(p_n)$.

**A convention on notation.** The superscript $-1$ is not an exponent but the reciprocal symbol of (K8). Since negative exponents are not defined here, $a^{-1}$ always denotes the reciprocal of a nonzero real number $a$, and for $n = 1$ the formula in (3) below reads $(a^1)^{-1} = a^{-1} = (a^{-1})^1$, so the two notations agree. The introductory number theory course also defines powers of integers, but this entry defines powers separately, and this course does not use the fact that the two values agree.

The following hold, where $a$, $b$ are real numbers and $m$, $n$ are integers $\ge 0$.

1. (The form of the definition) $a^1 = a$ and $a^2 = aa$. Moreover $a^{n+1} = a^n a = a\,a^n$. If a function $q$ from the set of integers $\ge 0$ to $\mathbb{R}$ satisfies $q(0) = 1$ and $q(k+1) = q(k)\,a$ for every integer $k \ge 0$, then $q(k) = a^k$ for every integer $k \ge 0$.
2. (Laws of exponents)
   - (i) $a^{m+n} = a^m a^n$.
   - (ii) $(a^m)^n = a^{mn}$.
   - (iii) $(ab)^n = a^n b^n$.
   - (iv) $1^n = 1$. If $n \ge 1$, then $0^n = 0$.
3. (Reciprocals) If $a \ne 0$, then $a^n \ne 0$ and $(a^n)^{-1} = (a^{-1})^n$.
4. (Absolute value) $|a^n| = |a|^n$.
5. (Powers of $-1$) If $n$ is even, then $(-1)^n = 1$, and if $n$ is odd, then $(-1)^n = -1$. Hence the sequence whose $n$th term is $(-1)^n$ equals the sequence $(a_n)$ of item (3) of the entry on basic limits ($1$ for even $n$, $-1$ for odd $n$).
6. (Order)
   - (i) If $0 < a$, then $0 < a^n$. If $0 \le a$, then $0 \le a^n$.
   - (ii) If $0 \le a \le b$, then $a^n \le b^n$. If $0 \le a < b$ and $n \ge 1$, then $a^n < b^n$.
   - (iii) Let $0 \le a$, $0 \le b$ and $n \ge 1$. If $a^n < b^n$, then $a < b$; if $a^n \le b^n$, then $a \le b$; and if $a^n = b^n$, then $a = b$.
   - (iv) If $0 < a < 1$, then $0 < a^{n+1} < a^n \le 1$. If $1 < a$, then $1 \le a^n < a^{n+1}$. Hence if $0 < a < 1$ the sequence whose $n$th term is $a^n$ is monotone decreasing, and if $1 < a$ it is monotone increasing.
7. (Powers of integers) If $a$ is an integer, then $a^n$ is an integer. If $a$ is a natural number, then $a^n$ is a natural number.
:::

## 직관

$a^n$은 "$a$를 $n$번 곱한 것"이지만, "$n$번"이라는 말에는 곱셈을 몇 번이든 이어 할 수 있다는 믿음이 숨어 있습니다. 이 항목은 그 믿음을 [[recursion-theorem|재귀 정리]]로 바꿉니다. 저금통에 매일 같은 비율로 이자가 붙는다고 하면, 오늘 금액에 비율 $a$를 곱해 내일 금액을 얻는 규칙 하나로 모든 날의 금액이 정해집니다. 이 규칙이 $a^{n+1} = a^n \cdot a$이고, 아직 하루도 지나지 않은 날의 "곱한 횟수 $0$"에 해당하는 것이 $a^0 = 1$입니다. 비유가 맞지 않는 곳은 $a$가 음수이거나 $0$일 수도 있다는 점입니다.

$a^0 = 1$로 두는 까닭은 지수법칙 $a^{m+n} = a^m a^n$이 $n = 0$에서도 성립하게 하려는 것입니다. $a = 0$이어도 같은 약속을 쓰므로 $0^0 = 1$이고, $n \ge 1$일 때만 $0^n = 0$입니다. 출처도 거듭제곱급수를 다룰 때 같은 약속을 씁니다.

지수법칙과 순서 성질은 모두 지수에 대한 귀납법으로 증명합니다. 예컨대 $0 \le a < b$이면 $a^n < b^n$이라는 것은 [[order-properties-of-reals|실수의 순서의 성질]]의 (11), 곧 음이 아닌 수끼리 곱한 부등식을 한 번씩 더 곱해 가는 것입니다. 이때 $0 \le a$가 필요합니다(아래 반례). "수학의 언어" 강의의 [[bernoulli-inequality|베르누이 부등식]]은 증명 첫머리에서 거듭제곱의 뜻 $a^1 = a$, $a^{k+1} = a^k \cdot a$를 받아들였는데, 이것은 이 항목의 (1)과 같은 식입니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (4)의 (iv)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (4)"는 [[absolute-value]]의 번호, "이 항목의 (2)"는 위 진술의 번호이다. 순서 성질 (10)에 의해 정수에 관한 (Z…), (L…)과 귀납법의 "$n \ge m$"을 실수의 부등식으로 써도 된다. (Z1)은 [[prime-number]]의, (Z5)–(Z8)과 (L1)–(L3)은 [[well-ordering-principle]]의 진술이고, 정수끼리의 합·차·곱은 정수이다([[even-and-odd]]). [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술에 의해 자연수는 양의 정수이다.

먼저 다음을 본다. (ㄱ) $0$ 이상인 정수 $n$은 $0$이거나 자연수이다. (Z5)에 의해 $n < 0$, $n = 0$, $0 < n$ 가운데 하나인데, $0 \le n$이므로 (L1)에 의해 $n < 0$은 아니고, $0 < n$이면 $n$은 양의 정수이기 때문이다. (ㄴ) $n \ge 0$이면 $n + 1$은 자연수이다. (L3)에 의해 $0 \le n < n + 1$이고 (Z6)에 의해 $0 < n + 1$이기 때문이다.

**정의 뒤의 식.** $a^0 = 1$은 정의이다. $n = 0$이면 $a^{0+1} = a^1 = p_1 = a$이고 (K1), (K4)에 의해 $a^0 \cdot a = 1 \cdot a = a$이므로 $a^{n+1} = a^n \cdot a$이다. $n$이 자연수이면 $a^{n+1} = p_{n+1} = p_n \cdot a = a^n \cdot a$이다. (ㄱ)에 의해 $0$ 이상인 모든 정수 $n$이 두 경우 가운데 하나이다. 아래에서 이 두 식을 "정의 (D)"라 하고, $0$ 이상인 정수에 관한 귀납법은 [[mathematical-induction]]의 시작점이 $0$인 꼴이다.

**1의 증명.** 정의 (D)와 (K1), (K4)에 의해 $a^1 = a^0 a = 1 \cdot a = a$이고, $a^2 = a^1 a = aa$이다. (K1)에 의해 $a^n a = a\,a^n$이다. 함수 $q$에 대해서는 $k$에 대한 귀납법을 쓴다. $q(0) = 1 = a^0$이고, $q(k) = a^k$이면 $q(k+1) = q(k)\,a = a^k a = a^{k+1}$이다.

**2의 증명.** (i) $m$을 고정하고 $n$에 대한 귀납법을 쓴다. $n = 0$이면 (K4)에 의해 $a^{m+0} = a^m = a^m \cdot 1 = a^m a^0$이다. $a^{m+n} = a^m a^n$이라 하자. $0 \le m$과 (Z7)에 의해 $0 + n \le m + n$이고 (Z6)에 의해 $0 \le m + n$이므로 정의 (D)를 $m + n$에 쓸 수 있다. 따라서 (K2)에 의해
$$
a^{m+(n+1)} = a^{(m+n)+1} = a^{m+n} a = (a^m a^n) a = a^m (a^n a) = a^m a^{n+1}
$$
이다.

(ii) $n$에 대한 귀납법을 쓴다. $(a^m)^0 = 1 = a^0 = a^{m \cdot 0}$이다. $(a^m)^n = a^{mn}$이라 하자. 순서 성질 (4)의 (iv)에 의해 $0 \le mn$이므로 (i)을 $mn$과 $m$에 쓸 수 있고, 정수의 계산으로 $mn + m = m(n+1)$이므로
$$
(a^m)^{n+1} = (a^m)^n a^m = a^{mn} a^m = a^{mn + m} = a^{m(n+1)}
$$
이다.

(iii) $n$에 대한 귀납법을 쓴다. (K4)에 의해 $(ab)^0 = 1 = 1 \cdot 1 = a^0 b^0$이다. $(ab)^n = a^n b^n$이라 하면, (K1)과 (K2)로 곱의 순서와 괄호를 바꾸어
$$
(ab)^{n+1} = (ab)^n (ab) = (a^n b^n)(ab) = (a^n a)(b^n b) = a^{n+1} b^{n+1}
$$
이다.

(iv) $1^0 = 1$이고, $1^n = 1$이면 (K4)에 의해 $1^{n+1} = 1^n \cdot 1 = 1 \cdot 1 = 1$이다. 귀납법에 의해 모든 $n$에서 $1^n = 1$이다. $n \ge 1$이면 (Z7)에 의해 $n - 1 \ge 0$이고 $(n - 1) + 1 = n$이므로, 정의 (D)와 (K9)에 의해 $0^n = 0^{n-1} \cdot 0 = 0$이다.

**3의 증명.** $a \ne 0$이라 하자. $n$에 대한 귀납법으로 "$a^n \ne 0$이고 $(a^n)^{-1} = (a^{-1})^n$"을 보인다. $n = 0$이면 (K4)에 의해 $a^0 = 1 \ne 0$이고, $1 \cdot 1 = 1$이므로 (K8)의 (iii)에 의해 $1^{-1} = 1$, 곧 $(a^0)^{-1} = 1 = (a^{-1})^0$이다. $n$에서 성립한다고 하자. $a^n \ne 0$이고 $a \ne 0$이므로 (K12)의 (vi)에 의해 $a^{n+1} = a^n a \ne 0$이고
$$
(a^{n+1})^{-1} = (a^n a)^{-1} = (a^n)^{-1} a^{-1} = (a^{-1})^n a^{-1} = (a^{-1})^{n+1}
$$
이다.

**4의 증명.** $n$에 대한 귀납법을 쓴다. 순서 성질 (5)의 (ii)에 의해 $0 \le 1$이므로 절댓값 (1)에 의해 $|a^0| = |1| = 1 = |a|^0$이다. $|a^n| = |a|^n$이면 절댓값 (4)에 의해 $|a^{n+1}| = |a^n a| = |a^n|\,|a| = |a|^n |a| = |a|^{n+1}$이다.

**5의 증명.** (K12)의 (iii)과 (K4)에 의해 $(-1)^2 = (-1)(-1) = 1 \cdot 1 = 1$이다. $k$가 $0$ 이상인 정수이면 (2)의 (ii), (iv)에 의해 $(-1)^{2k} = \bigl((-1)^2\bigr)^k = 1^k = 1$이고, (D)와 (K1), (K4)에 의해 $(-1)^{2k+1} = (-1)^{2k}(-1) = 1 \cdot (-1) = -1$이다.

$n$이 짝수이면 $n = 2k$인 정수 $k$가 있다. $k < 0$이라 하면 (Z1)에 의해 $k + 1 \le 0$, 곧 (Z7)에 의해 $k \le -1$이고, (Z7)을 두 번 쓰고 (Z6)을 쓰면 $2k = k + k \le k + (-1) \le (-1) + (-1) = -2 < 0$이므로 $n < 0$이 되어 $0 \le n$과 (L1)에 어긋난다. 따라서 (Z5)에 의해 $k \ge 0$이고, $(-1)^n = (-1)^{2k} = 1$이다. $n$이 홀수이면 $n = 2k + 1$인 정수 $k$가 있다. $k < 0$이면 위와 같이 $k \le -1$이고 $2k + 1 \le -2 + 1 = -1 < 0$이므로 같은 이유로 어긋나며, 따라서 $k \ge 0$이고 $(-1)^n = (-1)^{2k+1} = -1$이다.

[[basic-limits]]의 (3)의 수열은 자연수 $n$이 짝수이면 $a_n = 1$, 홀수이면 $a_n = -1$인 수열이고, 자연수는 $0$ 이상인 정수이므로 방금 보인 것에 의해 모든 자연수 $n$에서 $(-1)^n = a_n$이다. [[sequence]]의 진술(두 수열이 같은 것은 정확히 모든 항이 같을 때)에 의해 두 수열은 같다.

**6의 증명.** (i) $n$에 대한 귀납법을 쓴다. $0 < a$라 하자. 순서 성질 (5)의 (ii)에 의해 $0 < 1 = a^0$이다. $0 < a^n$이면 (W4)에 의해 $0 < a^n a = a^{n+1}$이다. $0 \le a$라 하자. $0 \le 1 = a^0$이고, $0 \le a^n$이면 순서 성질 (4)의 (iv)의 첫 문장에 의해 $0 \le a^n a = a^{n+1}$이다.

(ii) $0 \le a \le b$라 하자. $n$에 대한 귀납법을 쓴다. $a^0 = 1 = b^0$이므로 $a^0 \le b^0$이다. $a^n \le b^n$이라 하면, (i)에 의해 $0 \le a^n$이고 $0 \le a$이므로 순서 성질 (11)의 (i)을 $a^n \le b^n$과 $a \le b$에 써서 $a^n a \le b^n b$, 곧 $a^{n+1} \le b^{n+1}$이다.

$0 \le a < b$라 하자. $n \ge 1$에 대하여 시작점이 $1$인 귀납법을 쓴다. (1)에 의해 $a^1 = a < b = b^1$이다. $n \ge 1$이고 $a^n < b^n$이라 하면, (i)에 의해 $0 \le a^n$이고 $0 \le a$이므로 순서 성질 (11)의 (ii)에 의해 $a^n a < b^n b$, 곧 $a^{n+1} < b^{n+1}$이다.

(iii) $0 \le a$, $0 \le b$, $n \ge 1$이라 하자. $a^n < b^n$이라 하자. $a < b$가 아니라고 하면 순서 성질 (1)의 (iii)에 의해 $b \le a$이고, $0 \le b \le a$와 (ii)에 의해 $b^n \le a^n$이다. 이것은 $a^n < b^n$과 순서 성질 (1)의 (i)에 어긋나므로 $a < b$이다. $a^n \le b^n$이라 하자. $a \le b$가 아니라고 하면 순서 성질 (1)의 (iii)에 의해 $b < a$이고, $0 \le b < a$와 (ii)의 둘째 문장에 의해 $b^n < a^n$이다. 이것은 $a^n \le b^n$과 순서 성질 (1)의 (i)에 어긋나므로 $a \le b$이다. $a^n = b^n$이면 $a^n \le b^n$이고 $b^n \le a^n$이므로 방금 보인 것에 의해 $a \le b$이고 $b \le a$이며, 순서 성질 (1)의 (ii)에 의해 $a = b$이다.

(iv) $0 < a < 1$이라 하자. (i)에 의해 $0 < a^n$이므로 순서 성질 (4)의 (i)을 $a < 1$에 쓰면 $a \cdot a^n < 1 \cdot a^n$이고, (K1), (K4)와 (1)에 의해 이것은 $a^{n+1} < a^n$이다. 다시 (i)에 의해 $0 < a^{n+1}$이다. $0 \le a \le 1$이므로 (ii)와 (2)의 (iv)에 의해 $a^n \le 1^n = 1$이다.

$1 < a$라 하자. 순서 성질 (5)의 (ii)와 (W2)에 의해 $0 < a$이므로 (i)에 의해 $0 < a^n$이고, 순서 성질 (4)의 (i)을 $1 < a$에 쓰면 $1 \cdot a^n < a \cdot a^n$, 곧 $a^n < a^{n+1}$이다. $0 \le 1 \le a$이므로 (ii)와 (2)의 (iv)에 의해 $1 = 1^n \le a^n$이다.

마지막 문장은 [[sequence]]의 단조의 정의이다. 자연수 $n$은 $0$ 이상인 정수이므로, $0 < a < 1$이면 모든 자연수 $n$에서 $a^{n+1} < a^n$이고 따라서 $a^{n+1} \le a^n$이다. $1 < a$이면 같은 이유로 $a^n \le a^{n+1}$이다.

**7의 증명.** $a$를 정수라 하고 $n$에 대한 귀납법을 쓴다. (K7)에 의해 $a^0 = 1$은 정수이다. $a^n$이 정수이면, (K7)에 의해 실수로서의 곱 $a^n \cdot a$는 정수로서의 곱과 같고, 정수끼리의 곱은 정수이므로 $a^{n+1}$은 정수이다. $a$가 자연수이면 순서 성질 (10)에 의해 $0 < a$이고, (i)에 의해 $0 < a^n$이다. $a^n$은 정수이므로 순서 성질 (10)에 의해 정수로서도 $0 < a^n$이고, $a^n$은 양의 정수, 곧 자연수이다. $\blacksquare$
:::

## 예시와 반례

:::example[$-2$의 거듭제곱]
정의 (D)를 차례로 쓰면 $(-2)^0 = 1$, $(-2)^1 = -2$이고, [[real-number-arithmetic|실수의 계산 법칙]]의 (K12)의 (iii)과 (K7)에 의해 $(-2)^2 = (-2)(-2) = 2 \cdot 2 = 4$, (K12)의 (ii)와 (K7)에 의해 $(-2)^3 = 4 \cdot (-2) = -(4 \cdot 2) = -8$입니다. 부호가 번갈아 바뀌는 것은 (K9)에 의해 $-2 = (-1) \cdot 2$이므로 이 항목의 (2)의 (iii)에 의해 $(-2)^n = (-1)^n 2^n$이고, $(-1)^n$이 (5)대로 바뀌기 때문입니다.

(4)를 확인합니다. [[order-properties-of-reals]]의 (10)에 의해 $-8 < 0$이므로 [[absolute-value|절댓값]]의 정의와 (K9)에 의해 $|(-2)^3| = |-8| = -(-8) = 8$입니다. 한편 $|-2| = 2$이고 $2^2 = 4$, $2^3 = 4 \cdot 2 = 8$이므로 $|-2|^3 = 8$입니다.
:::

:::example[$\tfrac{2}{3}$의 거듭제곱은 단조감소한다]
$c = 2 \cdot 3^{-1}$로 둡니다. [[order-properties-of-reals]]의 (10)에 의해 $0 < 3$이고 그 항목의 (6)의 (i)에 의해 $0 < 3^{-1}$입니다. $2 < 3$이므로 그 항목의 (4)의 (i)에 의해 $2 \cdot 3^{-1} < 3 \cdot 3^{-1} = 1$이고, (W4)에 의해 $0 < 2 \cdot 3^{-1}$입니다. 따라서 $0 < c < 1$이고, 이 항목의 (6)의 (iv)에 의해 $n$번째 항이 $c^n$인 수열은 단조감소이며 모든 항이 $0$보다 크고 $1$ 이하입니다.

처음 몇 값은 $c^0 = 1$, $c^1 = c$이고, (K1), (K2)와 (K12)의 (vi)에 의해 $c^2 = (2 \cdot 2)(3^{-1} \cdot 3^{-1}) = 4 \cdot (3 \cdot 3)^{-1} = 4 \cdot 9^{-1}$입니다. 이 값들은 (2)의 (iii)과 (3)에 의해 $c^n = 2^n (3^{-1})^n = 2^n (3^n)^{-1}$으로도 얻습니다.
:::

:::counterexample[밑이 음수이면 순서가 보존되지 않는다]
$-3 < 1$이지만 [[real-number-arithmetic|실수의 계산 법칙]]의 (K12)의 (iii)과 (K7)에 의해 $(-3)^2 = (-3)(-3) = 3 \cdot 3 = 9$이고 $1^2 = 1$이며, [[order-properties-of-reals]]의 (10)에 의해 $1 < 9$, 곧 $1^2 < (-3)^2$입니다. (6)의 (ii)의 가정 $0 \le a$를 빼면 결론이 성립하지 않습니다. 또 $0 < 1$이지만 $0^0 = 1 = 1^0$이므로, (6)의 (ii)의 둘째 문장에서 $n \ge 1$이라는 가정도 뺄 수 없습니다.
:::

:::counterexample[합의 거듭제곱은 거듭제곱의 합이 아니다]
$(ab)^n = a^n b^n$((2)의 (iii))과 달리 합에는 그런 법칙이 없습니다. $a = b = 1$, $n = 2$로 두면 $(1 + 1)^2 = 2 \cdot 2 = 4$이지만 $1^2 + 1^2 = 1 + 1 = 2$이고, $4 \ne 2$입니다.
:::

## 확인 질문

:::check[$(2^{-1})^3$은 무엇인가?]
$8^{-1}$입니다. $2 \ne 0$이므로 이 항목의 (3)에 의해 $(2^{-1})^3 = (2^3)^{-1}$이고, 정의 (D)에 의해 $2^2 = 2 \cdot 2 = 4$, $2^3 = 4 \cdot 2 = 8$입니다. 여기서 $2^{-1}$의 위첨자 $-1$은 역수 기호이고, $3$은 지수입니다.
:::

:::check[$1$ 이상인 모든 정수 $n$에서 $a^n = a$인 실수 $a$는 무엇인가?]
$0$과 $1$뿐입니다. $a^2 = a$이어야 하므로 [[real-number-arithmetic|실수의 계산 법칙]]의 (K3), (K12)의 (ii), (K4)에 의해 $a(a - 1) = aa - a = 0$이고, (K10)에 의해 $a = 0$이거나 $a - 1 = 0$, 곧 (K12)의 (v)에 의해 $a = 1$입니다. 거꾸로 이 항목의 (2)의 (iv)에 의해 $n \ge 1$이면 $0^n = 0$이고 $1^n = 1$입니다. $n = 0$은 묻지 않았습니다. $0^0 = 1 \ne 0$이기 때문입니다.
:::
