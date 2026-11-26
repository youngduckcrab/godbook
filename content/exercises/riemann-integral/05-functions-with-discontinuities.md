---
written_by: Claude
status: reviewed
sources:
  - ref: lebl-basic-analysis
    loc: "5.2.5 소절, Exercise 5.2.12, 5.2.13 (p.198–199) — 문제 '세 계단으로 된 함수의 적분'과 같은 종류(계단함수가 적분가능함을 보이고 적분을 구하기. 출처는 유계인 구간의 지시함수와 그 일차결합을 적분의 정의로 다룬다)"
  - ref: lebl-basic-analysis
    loc: "5.2.3 소절, Lemma 5.2.8 (p.195–196); 5.5절 Definition 5.5.1 과 그 뒤 문단 (p.214) — 문제 '한쪽 끝을 자른 적분의 어림'과 같은 발상(안쪽 구간 위의 적분의 극한으로 적분을 얻기. 출처의 Lemma 5.2.8 은 양 끝을 자르는 수열의 꼴이고, Definition 5.5.1 은 한쪽 끝의 극한으로 이상적분을 정의한다)"
  - ref: lebl-basic-analysis
    loc: "5.2.5 소절, Exercise 5.2.10 (p.198) — 문제 '연속함수를 합성한 함수의 적분가능성'의 2와 같은 결론(유계이고 불연속점이 유한 개인 f 의 절댓값이 그런 함수이므로 적분가능하다)"
added: 2026-11-26
---

:::exercise[세 계단으로 된 함수의 적분]
$f : [0, 3] \to \mathbb{R}$를 다음과 같이 정한다.
$$
f(x) = \begin{cases} 0 & (0 \le x < 1) \\ 1 & (1 \le x < 2) \\ 2 & (2 \le x < 3) \\ 5 & (x = 3) \end{cases}
$$
$f$가 리만 적분가능함을 보이고 $\int_0^3 f$를 구하라.
:::

:::solution
아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다. $[0, 3]$의 원소 $x$는 순서 성질 (1)의 (iii)에 의해 $x < 1$과 $1 \le x$ 가운데 정확히 하나를, 또 $x < 2$와 $2 \le x$, $x < 3$과 $x = 3$ 가운데 각각 정확히 하나를 만족하므로 네 경우 가운데 정확히 하나에 들고, $f$는 [[real-valued-function|실함수와 그 연산]]의 (1)로 정해진다.

**$[0, 1]$ 위.** $z$를 $[0, 1]$ 위의 값이 $0$인 상수함수라 하면 [[riemann-integral|리만 적분]]의 (5)에 의해 $z$는 적분가능하고 $\int_0^1 z = 0$이다. $g = f|_{[0, 1]}$로 두면 실함수와 그 연산의 (6)에 의해 $[0, 1]$의 모든 $x$에서 $g(x) = f(x)$이다. $x \in [0, 1]$이고 $x \ne 1$이면 $x \le 1$이므로 [[real-order-axioms|실수의 순서]]의 $\le$의 정의에 의해 $x < 1$이고, $0 \le x$이므로 $g(x) = 0 = z(x)$이다. [[changing-finitely-many-values|유한 개의 값을 바꾼 함수의 적분]]의 (2)를 $z$와 $p = 1$에 쓰면 $g$는 적분가능하고 $\int_0^1 g = 0$이다. 리만 적분의 (4)에 의해 $f$는 $[0, 1]$에서 적분가능하고 $\int_0^1 f = 0$이다.

**$[1, 2]$ 위.** 같은 방법으로, $x \in [1, 2]$이고 $x \ne 2$이면 $1 \le x < 2$이므로 $f(x) = 1$이다. $[1, 2]$ 위의 값이 $1$인 상수함수는 리만 적분의 (5)에 의해 적분가능하고 적분이 $1 \cdot (2 - 1) = 1$이므로, 유한 개의 값을 바꾼 함수의 적분의 (2)를 $p = 2$에 쓰고 리만 적분의 (4)를 쓰면 $f$는 $[1, 2]$에서 적분가능하고 $\int_1^2 f = 1$이다.

**$[2, 3]$ 위.** $x \in [2, 3]$이고 $x \ne 3$이면 $2 \le x < 3$이므로 $f(x) = 2$이다. $[2, 3]$ 위의 값이 $2$인 상수함수의 적분은 $2 \cdot (3 - 2) = 2$이므로, 같은 (2)를 $p = 3$에 쓰면 $f$는 $[2, 3]$에서 적분가능하고 $\int_2^3 f = 2$이다.

**합치기.** [[additivity-of-the-integral|적분의 구간 덧셈]]의 (5)에 의해 그 항목의 (1)은 $[0, 2] \subseteq [0, 3]$일 때 $f$에 그대로 쓸 수 있다. $0 < 1 < 2$이므로 $f$는 $[0, 2]$에서 적분가능하고 $\int_0^2 f = 0 + 1 = 1$이다. 다시 $0 < 2 < 3$에 (1)을 쓰면 $f$는 $[0, 3]$에서 적분가능하고
$$
\int_0^3 f = \int_0^2 f + \int_2^3 f = 1 + 2 = 3
$$
이다. 끝점 $3$에서의 값 $5$는 적분에 아무 영향을 주지 않았다.
:::

:::exercise[한쪽 끝을 자른 적분의 어림]
$a < b$인 실수 $a$, $b$와 $f : [a, b] \to \mathbb{R}$, 실수 $B$가 다음을 만족한다고 하자: $[a, b]$의 모든 $x$에서 $|f(x)| \le B$이고, $a < c < b$인 모든 실수 $c$에서 $f$는 $[c, b]$에서 적분가능하다.

1. $f$가 적분가능하고, $a < c < b$인 모든 실수 $c$에서
   $$
   \left|\int_a^b f - \int_c^b f\right| \le B\,(c - a)
   $$
   임을 보여라.
2. $a = 0$, $b = 1$일 때, $n$번째 항이 $\int_{(n+1)^{-1}}^{1} f$인 수열이 $\int_0^1 f$로 수렴함을 보여라.
:::

:::solution
아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다.

**(1)** $B$는 [[bounded-function|유계인 함수]]의 정의를 만족하므로 $f$는 유계이다. [[integrable-on-inner-intervals|안쪽 구간에서 적분가능한 유계함수]]의 (3)에 의해 $f$는 적분가능하다.

$a < c < b$인 실수 $c$를 하나 정한다. [[additivity-of-the-integral|적분의 구간 덧셈]]의 (1)에 의해 $f$는 $[a, c]$와 $[c, b]$에서 적분가능하고 $\int_a^b f = \int_a^c f + \int_c^b f$이므로, [[real-number-arithmetic|실수의 계산 법칙]]의 (K2), (K5), (K4)에 의해 $\int_a^b f - \int_c^b f = \int_a^c f$이다. [[riemann-integral|리만 적분]]의 (4)에 의해 $\int_a^c f$는 제한 $f|_{[a, c]}$의 적분이고, $[a, c] \subseteq [a, b]$이므로 $[a, c]$의 모든 $x$에서 $f|_{[a, c]}(x) = f(x)$이고([[real-valued-function|실함수와 그 연산]]의 (6)) 그 절댓값은 $B$ 이하이다. 리만 적분의 (2)의 (iii)에 의해 $\left|\int_a^c f\right| \le B\,(c - a)$이고, 따라서 구하는 부등식이 성립한다.

**(2)** $(n+1)^{-1}$을 $c_n$으로 쓴다. 자연수 $n$에서 순서 성질 (10)에 의해 $0 < 1 < n + 1$이므로 순서 성질 (6)의 (ii)에 의해 $0 < c_n < 1^{-1} = 1$이다. 또 $0 < n < n + 1$이므로 같은 (6)의 (ii)에 의해 $c_n < n^{-1}$이다. (1)을 $c = c_n$에 쓰고 $I = \int_0^1 f$로 두면 $\left|\int_{c_n}^1 f - I\right| \le B c_n$이다([[absolute-value|절댓값]]의 (3)).

$B$는 [[absolute-value|절댓값]]의 (2)에 의해 $0 \le |f(0)| \le B$이므로 $0 \le B$이고, 순서 성질 (4)의 (iii)에 의해 $B c_n \le B n^{-1}$이다. 절댓값의 (8)과 순서 성질 (1)의 (v), (3)의 (iii), (2)의 (i)에 의해 모든 자연수 $n$에서
$$
I - B n^{-1} \le \int_{c_n}^1 f \le I + B n^{-1}
$$
이다. [[basic-limits|기본적인 극한]]의 (2)에 의해 $n^{-1}$의 수열은 $0$으로 수렴하므로, [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)를 상수배($-B$, $B$)와 상수 더하기($I$)에 차례로 쓰면 양쪽 수열은 모두 $I + 0 = I$로 수렴한다((K9)). [[squeeze-lemma|조임 정리]]의 (1)에 의해 $n$번째 항이 $\int_{c_n}^1 f$인 수열은 $I = \int_0^1 f$로 수렴한다.
:::

:::exercise[연속함수를 합성한 함수의 적분가능성]
$a < b$인 실수 $a$, $b$에 대하여 $f : [a, b] \to \mathbb{R}$가 유계이고 불연속점이 유한 개라 하고, $\varphi : \mathbb{R} \to \mathbb{R}$가 연속함수라 하자.

1. 합성 $\varphi \circ f : [a, b] \to \mathbb{R}$가 리만 적분가능함을 보여라.
2. 1을 써서 $x$에서의 값이 $f(x)\,f(x)$인 함수와 $|f(x)|$인 함수가 $[a, b]$에서 적분가능함을 보여라.
:::

:::solution
연속과 불연속은 [[continuous-function|연속함수]]의 것이고, "불연속점이 유한 개"는 [[finitely-many-discontinuities|불연속점이 유한 개인 함수의 적분가능성]]의 정의의 것이다. 합성은 [[function-composition|함수의 합성]]의 것이다.

**(1) 유계.** $f$가 유계이므로 모든 $x \in [a, b]$에서 $|f(x)| \le M$인 실수 $M$이 있다([[bounded-function|유계인 함수]]). [[absolute-value|절댓값]]의 (2)에 의해 $0 \le |f(a)| \le M$이므로 $0 \le M$이고, $r = M + 1$로 두면 [[order-properties-of-reals|실수의 순서의 성질]]의 (5)의 (ii)와 (2)의 (iv)에 의해 $0 < r$이고 $-r < 0 < r$이다(그 (3)의 (ii)). 모든 $x \in [a, b]$에서 $|f(x)| \le M < r$이므로 절댓값의 (7)에 의해 $-r < f(x) < r$이고, 특히 $f(x) \in [-r, r]$이다. $\varphi$는 $\mathbb{R}$에서 연속이므로 $[-r, r]$에서 연속이고, [[continuous-on-closed-interval-is-bounded|닫힌구간 위의 연속함수는 유계이다]]의 (2)에 의해 모든 $y \in [-r, r]$에서 $|\varphi(y)| \le C$인 실수 $C$가 있다. 따라서 모든 $x \in [a, b]$에서 $|(\varphi \circ f)(x)| = |\varphi(f(x))| \le C$이고, $\varphi \circ f$는 유계이다.

**(1) 불연속점.** $f$의 불연속점이 유한 개이므로, 정의에 의해 $[a, b]$의 부분집합인 유한집합 $S$가 있어 $f$가 $[a, b] - S$의 모든 점에서 연속이다. $x \in [a, b] - S$라 하자. $f : [a, b] \to \mathbb{R}$는 $x$에서 연속이고 $\varphi : \mathbb{R} \to \mathbb{R}$는 $f(x)$에서 연속이므로, [[composition-of-continuous-functions|연속함수의 합성]]의 (1)을 $A = [a, b]$, $B = \mathbb{R}$로 쓰면 $\varphi \circ f$는 $x$에서 연속이다. 곧 $\varphi \circ f$는 같은 $S$를 빼고 연속이므로 불연속점이 유한 개이다.

유계이고 불연속점이 유한 개이므로, 불연속점이 유한 개인 함수의 적분가능성의 (3)에 의해 $\varphi \circ f$는 리만 적분가능하다.

**(2)** $p_2(y) = y^2$로 정한 $p_2 : \mathbb{R} \to \mathbb{R}$는 [[power-function-is-continuous|거듭제곱 함수와 제곱근 함수의 연속]]의 (1)에 의해 연속함수이고, [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 $(p_2 \circ f)(x) = f(x)^2 = f(x)\,f(x)$이다. $s(y) = |y|$로 정한 $s : \mathbb{R} \to \mathbb{R}$는 항등함수의 절댓값이므로 연속함수의 (4)와 [[continuity-of-sum-and-product|연속함수의 합·곱·몫]]의 (3)에 의해 연속함수이고, $(s \circ f)(x) = |f(x)|$이다. 1을 $\varphi = p_2$와 $\varphi = s$에 쓰면 두 함수는 적분가능하다.
:::

:::exercise[유한 개의 점을 빼고 성립하는 크기 비교]
$a < b$인 실수 $a$, $b$에 대하여 $f, g : [a, b] \to \mathbb{R}$가 리만 적분가능하고, $S$가 유한집합이며, $[a, b] - S$의 모든 $x$에서 $f(x) \le g(x)$라 하자.

1. $\int_a^b f \le \int_a^b g$임을 보여라.
2. $f : [0, 2] \to \mathbb{R}$를 $f(1) = 10$이고 $x \ne 1$이면 $f(x) = x^2$으로 정하자. $f$가 적분가능하고 $\int_0^2 f \le 4$임을, $[0, 2]$ 위의 값이 $2x$인 함수와 견주어 보여라.
:::

:::solution
**(1)** $[a, b]$의 각 원소 $x$는 $x \in S$와 $x \notin S$ 가운데 정확히 하나를 만족하므로, [[real-valued-function|실함수와 그 연산]]의 (1)에 의해 $x \notin S$이면 $h(x) = f(x)$, $x \in S$이면 $h(x) = g(x)$로 정한 함수 $h : [a, b] \to \mathbb{R}$가 있다.

$h$는 $[a, b] - S$의 모든 점에서 $f$와 값이 같으므로, [[changing-finitely-many-values|유한 개의 값을 바꾼 함수의 적분]]의 (1)에 의해 $h$는 적분가능하고 $\int_a^b h = \int_a^b f$이다. 또 $[a, b]$의 모든 $x$에서 $h(x) \le g(x)$이다. $x \notin S$이면 $h(x) = f(x) \le g(x)$이고, $x \in S$이면 $h(x) = g(x)$이기 때문이다([[order-properties-of-reals|실수의 순서의 성질]]의 (1)의 (iv)). [[monotonicity-of-the-integral|적분의 단조성]]의 (3)에 의해 $\int_a^b h \le \int_a^b g$이고, 따라서 $\int_a^b f \le \int_a^b g$이다.

**(2)** $u(x) = x^2$으로 정한 $u : [0, 2] \to \mathbb{R}$는 [[riemann-integral-examples|리만 적분의 예]]의 (2)($a = 0$)에 의해 적분가능하고, $f$는 $x \ne 1$인 모든 점에서 $u$와 값이 같으므로 유한 개의 값을 바꾼 함수의 적분의 (2)에 의해 적분가능하다. $v(x) = 2x$로 정한 $v : [0, 2] \to \mathbb{R}$는 리만 적분의 예의 (1)($p = 2$, $q = 0$)에 의해 적분가능하고
$$
\int_0^2 v = \frac{2\,(2^2 - 0^2)}{2} + 0 = 4
$$
이다.

$x \in [0, 2]$이고 $x \ne 1$이면 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K4), (K12)로 $2x - x^2 = x\,(2 - x)$이고, $0 \le x$, $0 \le 2 - x$이므로 순서 성질 (4)의 (iv)와 (3)의 (i)에 의해 $f(x) = x^2 \le 2x = v(x)$이다. 그러나 $f(1) = 10 > 2 = v(1)$이므로 "모든 점에서 $f \le v$"는 성립하지 않고, [[monotonicity-of-the-integral|적분의 단조성]]의 (3)을 바로 쓸 수는 없다. 1을 $S = \{1\}$로 쓰면 $\int_0^2 f \le \int_0^2 v = 4$이다.
:::

:::exercise[적분이 같지만 무한히 많은 점에서 값이 다른 두 함수]
$z$를 $[0, 1]$ 위의 값이 $0$인 상수함수라 하고, $g(x) = 2x - 1$로 정한 $g : [0, 1] \to \mathbb{R}$를 생각한다.

1. $z$와 $g$가 적분가능하고 $\int_0^1 z = \int_0^1 g$임을 보여라.
2. 어떤 유한집합 $S$에 대해서도 "$[0, 1] - S$의 모든 $x$에서 $g(x) = z(x)$"가 성립하지 않음을 보여라. 곧 [[changing-finitely-many-values|유한 개의 값을 바꾼 함수의 적분]]의 (1)의 역은 성립하지 않는다.
:::

:::solution
**(1)** [[riemann-integral|리만 적분]]의 (5)에 의해 $z$는 적분가능하고 $\int_0^1 z = 0$이다. [[riemann-integral-examples|리만 적분의 예]]의 (1)을 $p = 2$, $q = -1$로 쓰면 $g$는 적분가능하고
$$
\begin{aligned}
\int_0^1 g &= \frac{2\,(1^2 - 0^2)}{2} + (-1)(1 - 0) \\
&= 1 - 1 = 0
\end{aligned}
$$
이다. 따라서 두 적분은 같다.

**(2)** 아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다. 유한집합 $S$가 있어 $[0, 1] - S$의 모든 $x$에서 $g(x) = z(x) = 0$이라고 하자.

자연수 $n$마다 $e_n = (n + 2)^{-1}$로 둔다. 순서 성질 (10)에 의해 $0 < 3 \le n + 2$이므로 순서 성질 (6)의 (i), (ii)에 의해 $0 < e_n \le 3^{-1}$이고($n + 2 = 3$이면 등호), 특히 $e_n \in [0, 1]$이다. 그러면 [[real-number-arithmetic|실수의 계산 법칙]]의 계산과 순서 성질 (4)의 (iii), (2)의 (i)에 의해 $g(e_n) = 2e_n - 1 \le 2 \cdot 3^{-1} - 1 = -3^{-1} < 0$이므로 $g(e_n) \ne 0$이다(순서 성질 (1)의 (i)). 따라서 $e_n \notin [0, 1] - S$이고, $e_n \in [0, 1]$이므로 $e_n \in S$이다.

[[sequence|수열]]의 (1)에 의해 $\psi(n) = e_n$으로 정한 함수 $\psi : \mathbb{N} \to \mathbb{R}$가 있다. $\psi(n) = \psi(m)$이면 양쪽의 역수를 취해 $n + 2 = m + 2$이고(실수의 계산 법칙의 (K8)의 (iii)에 의해 $\bigl((n+2)^{-1}\bigr)^{-1} = n + 2$), $n = m$이므로 $\psi$는 [[injective-surjective-bijective|단사]]이다. 상 $E = \psi(\mathbb{N})$([[image-and-preimage|상과 역상]]의 (1))은 위에 의해 $S$의 부분집합이다. $S$는 유한집합이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $E$는 유한집합이고, 어떤 정수 $k \ge 0$에 대하여 원소를 $k$개 갖는다([[finite-set|유한집합과 원소의 개수]]). 상의 정의에 의해 $\psi : \mathbb{N} \to E$는 전사이고 단사이므로 전단사이며, 유한집합과 원소의 개수의 (F3)에 의해 역관계 $\psi^{-1}$은 $E$에서 $\mathbb{N}$으로의 전단사이고, (F4)에 의해 $\mathbb{N}$은 원소를 $k$개 갖는다. 이것은 [[natural-numbers-are-infinite|자연수의 집합은 무한집합이다]]의 (1)에 어긋난다. 따라서 그런 유한집합 $S$는 없다.

$g$와 $z$는 1에 의해 적분가능하고 적분이 같으므로, "적분가능한 두 함수의 적분이 같으면 유한집합 밖에서 값이 같다"는 성립하지 않는다.
:::
