---
title: 이항계수
title_en: Binomial Coefficients
aliases: [파스칼 규칙, 파스칼의 삼각형, 흡수 등식, binomial coefficient, Pascal's rule, Pascal's triangle]
kind: definition
field: ring-theory
msc: ["05A10", "11B65"]
level: undergrad
summary: 0 이상인 정수 n 과 정수 k 에 대한 정수 C(n, k) 를 파스칼 규칙의 재귀로 정의한다. 범위 밖에서 0 이고 끝에서 1 이라는 것, C(n, 1) = n, 대칭, 흡수 등식, 소수 p 와 0 < k < p 에서 p 가 C(p, k) 를 나눈다는 것, 계승 꼴을 보인다.
requires: [set, subset, cartesian-product, power-set, function, recursion-theorem, natural-numbers-are-infinite, mathematical-induction, prime-number, well-ordering-principle, even-and-odd, divisibility, euclids-lemma, factorial]
sources:
  - ref: judson-abstract-algebra
    loc: "2.1절 Mathematical Induction, Example 2.4 (p.18–19); 8.1절 Error-Detecting and Correcting Codes, Theorem 8.7 의 증명과 Example 8.8 (p.95–96); 22.1절 Structure of a Finite Field, Lemma 22.3 의 증명 (p.279)"
    checked: original
    note: "출처는 Example 2.4(p.18)에서 자연수 n 에 대해 이항계수를 계승 꼴 \\binom{n}{k} = n!/(k!(n − k)!) 로 정의하고, 같은 곳에서 파스칼 규칙 \\binom{n+1}{k} = \\binom{n}{k} + \\binom{n}{k−1} 을 계승의 분수 계산으로 보인다. 이 항목은 거꾸로 파스칼 규칙을 재귀의 정의로 쓰고, 계승 꼴은 (6)으로 증명한다. 이 사이트의 계승(factorial)은 자연수에만 정의되어 있어 0! 이 없으므로 (6)은 1 ≤ k ≤ n − 1 에서만 진술한다. 기호는 급수와 멱급수 강의의 일반화한 이항계수 \\binom{α}{k}(실수)와 구별하려고 C(n, k) 로 쓴다(출처는 \\binom{n}{k}). 정의역을 모든 정수 k 로 넓히고 범위 밖에서 0 으로 둔 것은 이 사이트의 선택이다. 출처 Theorem 8.7 의 증명(p.95)은 \\binom{n}{k} 를 'n 개에서 k 개를 고르는 조합의 수' 라고 적는다. 이 항목은 그 뜻을 진술하지 않는다. (5)는 출처 Lemma 22.3 의 증명(p.279)의 '0 < k < p 이면 \\binom{p}{k} = p!/(k!(p − k)!) 은 p 로 나누어떨어진다. p 는 k!(p − k)! 을 나누지 않기 때문이다' 와 같은 내용이고, 이 항목은 계승 대신 (4)의 흡수 등식과 유클리드 보조정리로 증명한다. (2)의 C(n, 1) = n 은 출처 Example 8.8(p.95)이 \\binom{500}{1} 을 500 으로 계산하는 것과 같은 값이다. 예시 '파스칼의 삼각형의 처음 다섯 줄' 의 C(4, 2) = 6 은 출처 Example 8.8(p.96)의 \\binom{n}{2} = n(n − 1)/2 와 같은 꼴의 값이다."
status: reviewed
review_note: "2026-11-27 자기 검토(docs/self-review.md)와 지휘자의 확인(이항계수 (5)(6) 과 표수 (3) 에 경계값, 2·7단원 경로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-27
---

:::statement
$\mathbb{Z}$에서 $\mathbb{Z}$로의 [[function|함수]] 전체의 집합을 $\mathcal{F} = \{f \in \mathscr{P}(\mathbb{Z} \times \mathbb{Z}) : f \text{는 } \mathbb{Z} \text{에서 } \mathbb{Z} \text{로의 함수}\}$로 쓴다([[power-set|멱집합]], [[cartesian-product|곱집합]]). $\mathbb{N}$은 양의 정수의 집합이다.

**정의.** $\delta \in \mathcal{F}$를 $\delta(0) = 1$이고 $k \ne 0$이면 $\delta(k) = 0$인 함수로, 각 자연수 $r$와 $f \in \mathcal{F}$에 대하여 $g(r, f) \in \mathcal{F}$를 정수 $k$에서의 값이 $f(k - 1) + f(k)$인 함수로 정한다. [[recursion-theorem|재귀 정리]]에 의해 $x(1) = \delta$이고 모든 자연수 $r$에서 $x(r + 1) = g(r, x(r))$인 함수 $x : \mathbb{N} \to \mathcal{F}$가 정확히 하나 있다. $0$ 이상인 정수 $n$과 정수 $k$에 대하여
$$
C(n, k) = x(n + 1)(k)
$$
로 정하고 **이항계수**(binomial coefficient)라 한다. $C(n, k)$는 정수이다. 따라서 다음이 성립하고, 이 두 성질이 $C$를 정한다.

- $C(0, 0) = 1$이고, $k \ne 0$이면 $C(0, k) = 0$이다.
- (**파스칼 규칙**) $0$ 이상인 모든 정수 $n$과 모든 정수 $k$에서 $C(n + 1, k) = C(n, k - 1) + C(n, k)$이다.

기호 $C(n, k)$는 급수와 멱급수 강의의 일반화한 이항계수 $\binom{\alpha}{k}$(실수)와 다른 기호이다.

다음이 성립한다. 아래에서 $n$은 $0$ 이상인 정수이고 $k$는 정수이다.

1. (정하는 성질) 위의 두 성질을 만족하는 함수 $\{(n, k) \in \mathbb{Z} \times \mathbb{Z} : n \ge 0\} \to \mathbb{Z}$는 $C$ 하나뿐이다.
2. (범위와 끝) $k < 0$이거나 $k > n$이면 $C(n, k) = 0$이다. $0 \le k \le n$이면 $C(n, k)$는 자연수이다. $C(n, 0) = C(n, n) = 1$이고 $C(n, 1) = n$이다.
3. (대칭) $C(n, k) = C(n, n - k)$이다.
4. (흡수 등식) $n \ge 1$이면 $k \cdot C(n, k) = n \cdot C(n - 1, k - 1)$이다. 양쪽의 곱은 정수의 곱이다.
5. (소수) $p$가 [[prime-number|소수]]이고 $0 < k < p$이면 $p \mid C(p, k)$이다.
6. (계승 꼴) $n \ge 2$이고 $1 \le k \le n - 1$이면 [[factorial|계승]]에 대하여 $k! \cdot (n - k)! \cdot C(n, k) = n!$이다.
:::

:::english
Let $\mathcal{F} = \{f \in \mathscr{P}(\mathbb{Z} \times \mathbb{Z}) : f \text{ is a function from } \mathbb{Z} \text{ to } \mathbb{Z}\}$ be the set of all functions from $\mathbb{Z}$ to $\mathbb{Z}$ (power set, Cartesian product). $\mathbb{N}$ is the set of positive integers.

**Definition.** Let $\delta \in \mathcal{F}$ be the function with $\delta(0) = 1$ and $\delta(k) = 0$ for $k \ne 0$, and for each natural number $r$ and $f \in \mathcal{F}$ let $g(r, f) \in \mathcal{F}$ be the function whose value at an integer $k$ is $f(k - 1) + f(k)$. By the recursion theorem there is exactly one function $x : \mathbb{N} \to \mathcal{F}$ with $x(1) = \delta$ and $x(r + 1) = g(r, x(r))$ for every natural number $r$. For an integer $n \ge 0$ and an integer $k$ we set
$$
C(n, k) = x(n + 1)(k)
$$
and call it a **binomial coefficient**. $C(n, k)$ is an integer. Hence the following hold, and these two properties determine $C$.

- $C(0, 0) = 1$, and $C(0, k) = 0$ for $k \ne 0$.
- (**Pascal's rule**) For every integer $n \ge 0$ and every integer $k$, $C(n + 1, k) = C(n, k - 1) + C(n, k)$.

The symbol $C(n, k)$ is different from the generalized binomial coefficient $\binom{\alpha}{k}$ (a real number) of the course on series and power series.

The following hold, where $n$ is an integer $\ge 0$ and $k$ is an integer.

1. (Determining properties) $C$ is the only function $\{(n, k) \in \mathbb{Z} \times \mathbb{Z} : n \ge 0\} \to \mathbb{Z}$ satisfying the two properties above.
2. (Range and ends) If $k < 0$ or $k > n$, then $C(n, k) = 0$. If $0 \le k \le n$, then $C(n, k)$ is a natural number. $C(n, 0) = C(n, n) = 1$ and $C(n, 1) = n$.
3. (Symmetry) $C(n, k) = C(n, n - k)$.
4. (Absorption identity) If $n \ge 1$, then $k \cdot C(n, k) = n \cdot C(n - 1, k - 1)$, where both products are products of integers.
5. (Primes) If $p$ is a prime and $0 < k < p$, then $p \mid C(p, k)$.
6. (Factorial form) If $n \ge 2$ and $1 \le k \le n - 1$, then, for factorials, $k! \cdot (n - k)! \cdot C(n, k) = n!$.
:::

## 직관

이항계수를 늘어놓은 표가 파스칼의 삼각형입니다. 맨 윗줄($n = 0$)에는 가운데 $1$ 하나만 있고 양옆은 모두 $0$입니다. 다음 줄의 각 자리에는 바로 윗줄의 왼쪽 위와 바로 위의 두 수를 더해 적습니다. 이것이 파스칼 규칙이고, 이 항목은 이 규칙 자체를 정의로 씁니다. 줄마다 모든 정수 자리에 수를 적어 두므로 범위 밖의 자리는 $0$이고, 그래서 파스칼 규칙이 $k = 0$이나 $k = n + 1$ 같은 끝에서도 예외 없이 성립합니다.

출처는 이항계수를 $n!/(k!(n - k)!)$로 정의합니다. 그 정의에서는 이 분수가 정수라는 것을 따로 보여야 하지만, 파스칼 규칙으로 정의하면 정수끼리 더해 만들므로 처음부터 정수입니다. 두 정의가 같은 수를 준다는 것이 (6)입니다.

(5)는 $p$째 줄의 양 끝을 뺀 수들이 모두 $p$의 배수라는 말입니다. $p = 5$이면 그 줄은 $1, 5, 10, 10, 5, 1$입니다. 이 사실이 표수가 $p$인 환에서 $(a + b)^p = a^p + b^p$가 되는 까닭입니다(이항정리).

## 증명

:::idea
재귀 정리로 "줄 전체"를 함수 하나로 보고 줄마다 정한다. 나머지 성질은 모두 $n$에 대한 귀납법과 파스칼 규칙이다.
:::

:::hint
(4)의 귀납 단계에서는 $k \cdot C(n, k - 1) = (k - 1) \cdot C(n, k - 1) + C(n, k - 1)$로 쪼갠다.
:::

:::hint
(5)는 (4)를 $n = p$에 쓰면 $p$가 $k \cdot C(p, k)$를 나눈다는 것이 나온다.
:::

:::proof
**쓰는 사실.** 귀납법은 [[mathematical-induction|수학적 귀납법]](시작점이 정수인 꼴)이다. 정수의 순서는 [[prime-number]]의 (Z1)–(Z4)와 그 진술의 "자연수 $n$의 양의 약수 $d$는 $1 \le d \le n$", [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)을 쓰고, 정수의 계산 법칙은 그 진술에서 받아들인 것, 정수끼리의 합·차·곱이 정수라는 것은 [[even-and-odd]]에서 받아들인 사실이다.

**정의에 대하여.** [[recursion-theorem|재귀 정리]]의 (1)에 의해 $\delta$는 $\mathbb{Z}$에서 $\mathbb{Z}$로의 함수이고, 같은 (1)에 의해 각 $(r, f)$에서 $g(r, f)$도 그렇다($f(k - 1) + f(k)$는 정수이다). 곱집합 $\mathbb{Z} \times \mathbb{Z}$의 부분집합이므로 이것들은 $\mathcal{F}$의 원소이고, 다시 (1)에 의해 $g$는 함수 $\mathbb{N} \times \mathcal{F} \to \mathcal{F}$이다. 따라서 재귀 정리를 쓸 수 있다. $C(0, k) = x(1)(k) = \delta(k)$이고, $C(n + 1, k) = x(n + 2)(k) = g(n + 1, x(n + 1))(k) = C(n, k - 1) + C(n, k)$이다.

**1의 증명.** $D$가 두 성질을 만족한다고 하자. $n$에 대한 귀납법으로 "모든 정수 $k$에서 $D(n, k) = C(n, k)$"를 보인다. $n = 0$이면 두 함수 모두 $k = 0$에서 $1$, 그 밖에서 $0$이다. $n$에서 성립하면 파스칼 규칙에 의해 $D(n + 1, k) = D(n, k - 1) + D(n, k) = C(n, k - 1) + C(n, k) = C(n + 1, k)$이다.

**2의 증명.** $n$에 대한 귀납법으로 다음 셋을 함께 보인다: (가) $k < 0$이거나 $k > n$이면 $C(n, k) = 0$, (나) $0 \le k \le n$이면 $C(n, k) \ge 1$, (다) $C(n, 0) = C(n, n) = 1$. $n = 0$이면 정의에서 나온다($0 \le k \le 0$이면 (L2)에 의해 $k = 0$이다). $n$에서 성립한다고 하고 $C(n + 1, k) = C(n, k - 1) + C(n, k)$를 경우마다 본다. $k < 0$이면 $k - 1 < 0$이므로 두 항이 $0$이다. $k > n + 1$이면 $k - 1 > n$이고 $k > n$이므로 두 항이 $0$이다. $k = 0$이면 $C(n, -1) + C(n, 0) = 0 + 1 = 1$이다. $k = n + 1$이면 $C(n, n) + C(n, n + 1) = 1 + 0 = 1$이다. $1 \le k \le n$이면 $0 \le k - 1 \le n$이고 $0 \le k \le n$이므로 두 항이 모두 $1$ 이상이고 합은 $2$ 이상이다. (Z5)에 의해 모든 정수 $k$는 이 경우 가운데 하나에 들므로 $n + 1$에서 (가)–(다)가 성립한다. (나)에 의해 $C(n, k)$는 양의 정수, 곧 자연수이다. $C(n, 1) = n$은 $n$에 대한 귀납법이다. $C(0, 1) = 0$이고, $C(n + 1, 1) = C(n, 0) + C(n, 1) = 1 + n$이다.

**3의 증명.** $n$에 대한 귀납법으로 "모든 정수 $k$에서 $C(n, k) = C(n, n - k)$"를 보인다. $n = 0$이면 $k = 0$일 때 양쪽이 $C(0, 0)$이고, $k \ne 0$이면 $-k \ne 0$이므로 양쪽이 $0$이다. $n$에서 성립하면, 파스칼 규칙과 귀납 가정을 $k$와 $k - 1$에서 쓴 것에 의해
$$
\begin{aligned}
&C(n + 1, n + 1 - k) \\
&\quad = C(n, n - k) + C(n, n + 1 - k) \\
&\quad = C(n, k) + C(n, n - (k - 1)) \\
&\quad = C(n, k) + C(n, k - 1) \\
&\quad = C(n + 1, k)
\end{aligned}
$$
이다.

**4의 증명.** $n \ge 1$에 대한 귀납법으로 "모든 정수 $k$에서 $k \cdot C(n, k) = n \cdot C(n - 1, k - 1)$"를 보인다. $n = 1$이면 파스칼 규칙에 의해 $k \cdot C(1, k) = k \cdot C(0, k - 1) + k \cdot C(0, k)$이다. $C(0, k)$는 $k = 0$에서만 $0$이 아니므로 $k \cdot C(0, k) = 0$이고, $C(0, k - 1)$은 $k = 1$에서만 $0$이 아니므로 $k \cdot C(0, k - 1) = C(0, k - 1) = 1 \cdot C(0, k - 1)$이다. 따라서 $n = 1$에서 성립한다. $n \ge 1$에서 성립한다고 하자. 파스칼 규칙과, 귀납 가정을 $k - 1$과 $k$에서 쓴 것과, $n - 1 \ge 0$에서의 파스칼 규칙 $C(n, k - 1) = C(n - 1, k - 2) + C(n - 1, k - 1)$에 의해
$$
\begin{aligned}
&k \cdot C(n + 1, k) \\
&\quad = k \cdot C(n, k - 1) \\
&\qquad + k \cdot C(n, k) \\
&\quad = (k - 1) \cdot C(n, k - 1) \\
&\qquad + C(n, k - 1) + k \cdot C(n, k) \\
&\quad = n \cdot C(n - 1, k - 2) + C(n, k - 1) \\
&\qquad + n \cdot C(n - 1, k - 1) \\
&\quad = n \cdot C(n, k - 1) + C(n, k - 1) \\
&\quad = (n + 1) \cdot C(n, k - 1)
\end{aligned}
$$
이다.

**5의 증명.** (4)를 $n = p \ge 1$에 쓰면 $k \cdot C(p, k) = p \cdot C(p - 1, k - 1)$이므로 [[divisibility|나누어떨어짐]]의 정의에 의해 $p \mid k \cdot C(p, k)$이다. [[euclids-lemma|유클리드 보조정리]]의 (1)에 의해 $p \mid k$이거나 $p \mid C(p, k)$이다. $p \mid k$이면 $k$는 자연수이므로 $p$는 $k$의 양의 약수이고 $p \le k$이다. 이것은 $k < p$와 어긋난다((L1)). 따라서 $p \mid C(p, k)$이다.

**6의 증명.** $n \ge 2$에 대한 귀납법으로 "$1 \le k \le n - 1$인 모든 정수 $k$에서 $k! \cdot (n - k)! \cdot C(n, k) = n!$"을 보인다. [[factorial|계승]]의 (1)에 의해 $1! = 1$이고 자연수 $r$에서 $(r + 1)! = r! \cdot (r + 1)$이다. $n \ge 2$이고 $k = 1$이면 (2)와 계승의 (1)에 의해 $1! \cdot (n - 1)! \cdot n = n!$이다. 이것으로 $n = 2$의 경우($k = 1$뿐)가 끝난다. $n \ge 2$에서 성립한다고 하고 $1 \le k \le n$이라 하자. $k = 1$은 앞에서 보였다. $2 \le k \le n$이면 $1 \le k - 1 \le n - 1$이므로 귀납 가정을 $k - 1$에서 쓰면, $n - (k - 1) = n + 1 - k$이므로 $(k - 1)! \cdot (n + 1 - k)! \cdot C(n, k - 1) = n!$이다. (4)를 $n + 1$에 쓰면 $k \cdot C(n + 1, k) = (n + 1) \cdot C(n, k - 1)$이다. 계승의 (1)에 의해 $k! = (k - 1)! \cdot k$이므로
$$
\begin{aligned}
&k! \cdot (n + 1 - k)! \cdot C(n + 1, k) \\
&\quad = (k - 1)! \cdot (n + 1 - k)! \\
&\qquad \cdot \bigl(k \cdot C(n + 1, k)\bigr) \\
&\quad = (k - 1)! \cdot (n + 1 - k)! \\
&\qquad \cdot C(n, k - 1) \cdot (n + 1) \\
&\quad = n! \cdot (n + 1) = (n + 1)!
\end{aligned}
$$
이다. 따라서 $n + 1$에서 성립한다.
:::

## 예시와 반례

:::example[파스칼의 삼각형의 처음 다섯 줄]
파스칼 규칙으로 $0 \le k \le n$인 자리만 적으면 다음과 같습니다(범위 밖은 모두 $0$).

| $n$ | $C(n, 0), \dots, C(n, n)$ |
|---|---|
| $0$ | $1$ |
| $1$ | $1, 1$ |
| $2$ | $1, 2, 1$ |
| $3$ | $1, 3, 3, 1$ |
| $4$ | $1, 4, 6, 4, 1$ |

예컨대 $C(4, 2) = C(3, 1) + C(3, 2) = 3 + 3 = 6$입니다. (6)으로 확인하면 $2! \cdot 2! \cdot 6 = 24 = 4!$입니다. (4)로 확인하면 $2 \cdot C(4, 2) = 12 = 4 \cdot C(3, 1)$입니다.
:::

:::counterexample[합성수 번째 줄에서는 양 끝 아닌 수가 그 수의 배수가 아닐 수 있다]
$n = 4$는 소수가 아니고, 위 표에서 $C(4, 2) = 6$은 $4$의 배수가 아닙니다. (5)의 증명에서 쓴 유클리드 보조정리는 $p$가 소수일 때만 성립하므로, $4 \mid 2 \cdot C(4, 2) = 12$에서 $4 \mid C(4, 2)$를 끌어낼 수 없습니다. 같은 줄의 $C(4, 1) = 4$는 $4$의 배수이므로, 이 반례는 "모두 배수"가 깨진다는 것만 보여 줍니다.
:::

## 확인 질문

:::check[$C(7, 3)$은 무엇인가? $7$로 나누어떨어지는가?]
$C(7, 3) = 35$입니다. 파스칼 규칙으로 줄을 이어 가면 $n = 5$는 $1, 5, 10, 10, 5, 1$, $n = 6$은 $1, 6, 15, 20, 15, 6, 1$이고 $C(7, 3) = C(6, 2) + C(6, 3) = 15 + 20 = 35$입니다. $35 = 7 \cdot 5$이므로 (5)대로 $7$로 나누어떨어집니다.
:::

:::check[$C(3, 5)$와 $C(3, -1)$은 무엇인가?]
둘 다 $0$입니다((2)). 이 항목은 $C(n, k)$를 모든 정수 $k$에서 정하고, $0 \le k \le n$ 밖에서는 $0$입니다.
:::
