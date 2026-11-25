---
title: 테일러 다항식
title_en: Taylor Polynomial
aliases: [테일러다항식, n차 테일러 다항식, Taylor polynomial, nth order Taylor polynomial]
kind: definition
field: real-analysis
msc: ["41A58"]
level: undergrad
summary: "구간 I 위의 n 번 미분가능한 함수 f 와 x₀ ∈ I 에 대하여, x 에서의 값이 f^(k)(x₀)/k! · (x − x₀)^k 의 k = 0 부터 n 까지의 합인 함수 T_n^{x₀} f : ℝ → ℝ 를 n차 테일러 다항식이라 한다. x₀ 에서의 값, 차수를 하나 올리는 식, x₀ 에서 n 계까지의 도함수가 f 와 같다는 것, 같은 도함수를 갖는 (x − x₀) 의 거듭제곱의 합은 이것뿐이라는 것, 제한해도 바뀌지 않는다는 것을 진술한다."
requires: [real-number-arithmetic, absolute-value, power-of-a-real-number, interval, real-valued-function, limit-of-a-function, derivative, exponential-function, finite-sum-of-reals, linearity-and-order-of-finite-sums, telescoping-sum, series-indexed-from-zero, factorial-from-zero, finite-sums-of-functions, higher-derivative]
sources:
  - ref: lebl-basic-analysis
    loc: "4.3절 Taylor's theorem 의 4.3.2절 Taylor's theorem: Definition 4.3.1 (p.171), Theorem 4.3.2 의 증명과 그 뒤 문단 (p.172–173); 4.3.3절 Exercises 의 Exercise 4.3.1, Exercise 4.3.2 (p.174); 2.6절 More on series 의 2.6.5절 Power series 의 본문 (p.109)"
    checked: original
    note: "출처 Definition 4.3.1(p.171)은 x₀ ∈ ℝ 가까이에서 정의된 n 번 미분가능한 함수 f 에 대해 n차 테일러 다항식 P_n^{x₀}(x) = Σ_{k=0}^n f^{(k)}(x₀)/k! (x − x₀)^k 를 정하고, 그것을 f(x₀) + f′(x₀)(x − x₀) + f″(x₀)/2 (x − x₀)² + … 로 풀어 적는다. 이 항목은 '가까이에서 정의된'을 '구간 I 위의 함수와 x₀ ∈ I'로 정하고, 글자 P 대신 T_n^{x₀} f 를 쓰며(이 사이트에서 P 는 분할, 기본행렬 등에 쓰였다), 함수의 정의역을 ℝ 로 밝힌다. (3)의 (T_n^{x₀} f)^{(k)}(x₀) = f^{(k)}(x₀) 는 출처가 Theorem 4.3.2 의 증명(p.172)에서 'We compute' 라고만 하고 그 뒤 문단(p.173)에서 'the Taylor polynomial has the same derivatives as f at x₀ up to the nth derivative' 라고 적는 사실이다. 이 항목은 고계 도함수 항목의 (8)로 증명한다. (4)의 둘째 부분(n ≥ m 이면 T_n^{x₀} h = h)은 출처의 연습문제 4.3.2(p.174, 차수 d 인 다항식의 d차 테일러 다항식은 그 다항식이다)를 (x − x₀) 의 거듭제곱의 합으로 적은 꼴이다. (1)의 n = 0, n = 1 꼴은 Definition 4.3.1 의 풀어 쓴 식의 처음 두 항이다. (2), (4)의 첫째 부분, (5)는 출처에 명제로 없다(검색어 'Taylor polynomial', 'same derivatives', 'order Taylor', 'Taylor' 로 책 전체를 찾았고 4.3.3절 연습문제를 처음부터 읽었다). 예시 '지수함수의 0 에서의 테일러 다항식'은 출처의 연습문제 4.3.1(p.174)과 같은 물음이고, 출처 6.3.3절 Example 6.3.3(p.250)이 피카르 반복으로 얻은 1 + x + x²/2 + x³/6 을 'the beginning of the Taylor series for the exponential' 이라 부르는 것과 같은 식이다. 예시 'x³ 을 x − 1 의 거듭제곱으로'는 출처 2.6.5절(p.109)이 2x² − 3x + 4 를 x₀ = 1 둘레의 멱급수 3 + (x − 1) + 2(x − 1)² 로 다시 쓰는 것과 같은 발상이다. 확인 질문 'h(x) = 5 − x + 4x²로 정한 h : ℝ → ℝ의 0에서의 1차 테일러 다항식과 3차 테일러 다항식은 무엇인가?'는 연습문제 4.3.2 를 차수 2 인 다항식에 쓴 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(테일러 정리의 망원 합·롤 정리 경로와 이계도함수 판정의 가정 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
구간은 [[interval]]의 것이고, 실함수, 함수의 같음과 제한은 [[real-valued-function]]의 것이며, $n$번 미분가능, $k$계 도함수 $f^{(k)}$, 무한 번 미분가능은 [[higher-derivative]]의 것이다. 0부터 번호가 붙은 실수는 [[telescoping-sum|망원 합]]의 것이고, $0$부터의 유한 합 $\sum_{k=0}^{n}$은 [[series-indexed-from-zero]]의 것이며, $0$ 이상인 정수의 계승 $k!$은 [[factorial-from-zero]]의 것이고, 거듭제곱은 [[power-of-a-real-number]]의 것이다. 아래에서 $I$는 구간, $x_0$은 $I$의 원소, $n$은 $0$ 이상인 정수, $f : I \to \mathbb{R}$는 $n$번 미분가능한 실함수이다.

**테일러 다항식.** $0 \le k \le n$인 정수 $k$에서 $f^{(k)}(x_0)\,(k!)^{-1}$은 이미 정해진 실수이다([[factorial-from-zero]]의 (3)에 의해 $k! \ne 0$이다). 모든 실수 $x$에서
$$
T_n^{x_0} f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!}\, (x - x_0)^k
$$
로 정한 함수 $T_n^{x_0} f : \mathbb{R} \to \mathbb{R}$를 $f$의 $x_0$에서의 **$n$차 테일러 다항식**($n$th order Taylor polynomial of $f$ at $x_0$)이라 한다. 여기서 $\dfrac{f^{(k)}(x_0)}{k!}$는 $f^{(k)}(x_0)\,(k!)^{-1}$이고, $x$를 하나 정하면 합은 $0 \le k \le n$에서 정해진 항의 $0$부터의 합이다. $x = x_0$이면 $(x - x_0)^0 = 0^0 = 1$이다. $T_n^{x_0} f$는 함수의 이름이고 $T_n^{x_0} f(x)$는 $x$에서의 값이다. 정의역은 $I$가 아니라 $\mathbb{R}$이다.

다음이 성립한다.

1. ($x_0$에서의 값과 낮은 차수) $T_n^{x_0} f(x_0) = f(x_0)$이다. $T_0^{x_0} f$는 값이 $f(x_0)$인 상수함수이다. $f$가 $1$번 미분가능하면 모든 실수 $x$에서 $T_1^{x_0} f(x) = f(x_0) + f'(x_0)(x - x_0)$이다.
2. (차수 올리기) $f$가 $n + 1$번 미분가능하면 모든 실수 $x$에서
   $$
   \begin{aligned}
   &T_{n+1}^{x_0} f(x) \\
   &= T_n^{x_0} f(x) \\
   &\qquad + \frac{f^{(n+1)}(x_0)}{(n + 1)!}\, (x - x_0)^{n+1}
   \end{aligned}
   $$
   이다.
3. ($x_0$에서의 도함수) $T_n^{x_0} f$는 무한 번 미분가능하다. $0 \le k \le n$인 모든 정수 $k$에서 $(T_n^{x_0} f)^{(k)}(x_0) = f^{(k)}(x_0)$이고, $k \ge n + 1$인 정수 $k$에서 $(T_n^{x_0} f)^{(k)}$는 값이 $0$인 상수함수이다.
4. ($(x - x_0)$의 거듭제곱의 합) $m$을 $0$ 이상인 정수, $c_0, \dots, c_m$을 0부터 번호가 붙은 실수라 하고, $h(x) = \sum_{j=0}^{m} c_j (x - x_0)^j$로 정한 함수 $h : \mathbb{R} \to \mathbb{R}$를 생각한다.
   - (i) $m = n$이고 $0 \le k \le n$인 모든 $k$에서 $h^{(k)}(x_0) = f^{(k)}(x_0)$이면 $h = T_n^{x_0} f$이다. 곧 $\sum_{j=0}^{n} c_j (x - x_0)^j$ 꼴의 함수 가운데 $x_0$에서 $n$계까지의 도함수가 $f$와 같은 것은 $T_n^{x_0} f$뿐이다.
   - (ii) $h$는 무한 번 미분가능하다. $n \le m$이면 모든 실수 $x$에서 $T_n^{x_0} h(x) = \sum_{j=0}^{n} c_j (x - x_0)^j$이고, $m \le n$이면 $T_n^{x_0} h = h$이다.
5. (제한) $J$가 구간이고 $J \subseteq I$이며 $x_0 \in J$이면, $f|_J$는 $n$번 미분가능하고 $T_n^{x_0}(f|_J) = T_n^{x_0} f$이다.
:::

:::english
Intervals are those of the entry on intervals; real-valued functions, equality of functions and restrictions are those of the entry on real-valued functions; being $n$ times differentiable, the $k$th derivative $f^{(k)}$ and being infinitely differentiable are those of the entry on higher-order derivatives. Real numbers indexed from zero are those of the entry on telescoping sums; finite sums $\sum_{k=0}^{n}$ from zero are those of the entry on sums indexed from zero; the factorial $k!$ of an integer $k \ge 0$ is that of the entry on factorials from zero; powers are those of the entry on powers of a real number. Below, $I$ is an interval, $x_0$ an element of $I$, $n$ an integer $\ge 0$, and $f : I \to \mathbb{R}$ an $n$ times differentiable real-valued function.

**Taylor polynomial.** For each integer $k$ with $0 \le k \le n$, $f^{(k)}(x_0)\,(k!)^{-1}$ is an already determined real number (by item (3) of the entry on factorials from zero, $k! \ne 0$). The function $T_n^{x_0} f : \mathbb{R} \to \mathbb{R}$ defined for every real $x$ by
$$
T_n^{x_0} f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!}\, (x - x_0)^k
$$
is called the **$n$th order Taylor polynomial of $f$ at $x_0$**. Here $\dfrac{f^{(k)}(x_0)}{k!}$ means $f^{(k)}(x_0)\,(k!)^{-1}$, and for each fixed $x$ the sum is the sum from zero of the terms defined for $0 \le k \le n$. When $x = x_0$, $(x - x_0)^0 = 0^0 = 1$. $T_n^{x_0} f$ is the name of the function and $T_n^{x_0} f(x)$ is its value at $x$. Its domain is $\mathbb{R}$, not $I$.

The following hold.

1. (Value at $x_0$ and low orders) $T_n^{x_0} f(x_0) = f(x_0)$. $T_0^{x_0} f$ is the constant function with value $f(x_0)$. If $f$ is $1$ time differentiable, then $T_1^{x_0} f(x) = f(x_0) + f'(x_0)(x - x_0)$ for every real $x$.
2. (Raising the order) If $f$ is $n + 1$ times differentiable, then for every real $x$
   $$
   \begin{aligned}
   &T_{n+1}^{x_0} f(x) \\
   &= T_n^{x_0} f(x) \\
   &\qquad + \frac{f^{(n+1)}(x_0)}{(n + 1)!}\, (x - x_0)^{n+1} .
   \end{aligned}
   $$
3. (Derivatives at $x_0$) $T_n^{x_0} f$ is infinitely differentiable. For every integer $k$ with $0 \le k \le n$, $(T_n^{x_0} f)^{(k)}(x_0) = f^{(k)}(x_0)$, and for every integer $k \ge n + 1$, $(T_n^{x_0} f)^{(k)}$ is the constant function with value $0$.
4. (Sums of powers of $(x - x_0)$) Let $m$ be an integer $\ge 0$, $c_0, \dots, c_m$ real numbers indexed from zero, and consider the function $h : \mathbb{R} \to \mathbb{R}$ defined by $h(x) = \sum_{j=0}^{m} c_j (x - x_0)^j$.
   - (i) If $m = n$ and $h^{(k)}(x_0) = f^{(k)}(x_0)$ for every $k$ with $0 \le k \le n$, then $h = T_n^{x_0} f$. That is, among functions of the form $\sum_{j=0}^{n} c_j (x - x_0)^j$, $T_n^{x_0} f$ is the only one whose derivatives at $x_0$ up to order $n$ agree with those of $f$.
   - (ii) $h$ is infinitely differentiable. If $n \le m$, then $T_n^{x_0} h(x) = \sum_{j=0}^{n} c_j (x - x_0)^j$ for every real $x$; if $m \le n$, then $T_n^{x_0} h = h$.
5. (Restriction) If $J$ is an interval with $J \subseteq I$ and $x_0 \in J$, then $f|_J$ is $n$ times differentiable and $T_n^{x_0}(f|_J) = T_n^{x_0} f$.
:::

## 직관

테일러 다항식은 한 점 $x_0$에서의 정보만으로 만든 다항식입니다. $f$의 값, 기울기, 기울기가 변하는 빠르기, … 를 $n$계까지 $x_0$에서 재고, 그 수들로 $x_0$에서 똑같이 재어지는 다항식을 만듭니다. (3)이 "똑같이 재어진다"는 것이고, (4)의 (i)은 $(x - x_0)$의 $n$제곱까지의 합 가운데 그런 것이 하나뿐이라는 것입니다. $n + 1$제곱 이상의 항을 더하면 $x_0$에서 $n$계까지의 도함수는 바뀌지 않으므로, 그런 항까지 허락하면 하나로 정해지지 않습니다. 계수에 $k!$으로 나누는 것은 $(x - x_0)^k$를 $k$번 미분하면 $k!$이 나오기 때문입니다([[higher-derivative]]의 (8)의 (iii)).

비유하자면 출발점에서 찍은 사진으로 길을 그리는 일입니다. $n = 0$이면 출발점의 높이만 알고 평평한 길을 그립니다($T_0^{x_0} f$는 상수함수). $n = 1$이면 출발점의 기울기까지 알아 접선을 그립니다. 차수를 올릴수록 출발점의 정보가 늘어납니다. 비유가 맞지 않는 곳은, 사진이 늘어도 출발점에서 먼 곳의 길을 맞춘다는 보장은 정의에 들어 있지 않다는 것입니다. 얼마나 맞는지는 테일러 정리가 말합니다.

$T_n^{x_0} f$의 정의역은 $\mathbb{R}$입니다. 합의 각 항이 모든 실수 $x$에서 정해지기 때문입니다. 그래서 $f$가 정의되지 않는 곳에서도 $T_n^{x_0} f$는 값을 가집니다. 예컨대 자연로그의 $1$에서의 테일러 다항식은 $0$ 이하의 수에서도 값을 가집니다.

## 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. "합의 규칙 (3)"처럼 쓴 것은 [[series-indexed-from-zero]]의 번호이고, 범위에서만 정해진 항에 쓰는 것은 같은 항목의 (4)에 의한다. 두 합의 항이 범위 안에서 모두 같으면 두 합이 같다는 것은 [[finite-sum-of-reals]]의 (4)를 $0$부터의 합의 정의로 옮긴 것이다. 함수의 같음은 [[real-valued-function]]의 (2)로 값마다 보인다.

**정의의 확인.** 각 실수 $x$에서 $k$번째 항은 실수의 곱이므로 합은 실수 하나로 정해지고, [[real-valued-function]]의 (1)에 의해 진술의 함수가 있다.

**1의 증명.** $x = x_0$이면 $k$번째 항은 $f^{(k)}(x_0)(k!)^{-1} \cdot 0^k$이다. [[power-of-a-real-number]]의 정의와 (2)의 (iv)에 의해 $0^0 = 1$이고 $k \ge 1$이면 $0^k = 0$이다. 합의 규칙 (3)에 의해 합은 $0$번째 항과 $1 \le k \le n$인 항의 합으로 나뉘고, 뒤의 것은 모든 항이 $0$이므로 [[linearity-and-order-of-finite-sums]]의 (2)에 의해 $0$이다. $0$번째 항은 [[higher-derivative]]의 (1)과 $0! = 1$에 의해 $f(x_0) \cdot 1 \cdot 1 = f(x_0)$이다. 따라서 $T_n^{x_0} f(x_0) = f(x_0)$이다.

$n = 0$이면 합의 규칙 (1)에 의해 모든 $x$에서 $T_0^{x_0} f(x) = f^{(0)}(x_0)(0!)^{-1}(x - x_0)^0 = f(x_0)$이다. $n = 1$이면 합의 규칙 (2)와 (1)에 의해 $T_1^{x_0} f(x) = f(x_0) + f^{(1)}(x_0)(1!)^{-1}(x - x_0)^1$이고, 고계 도함수의 (1)에 의해 $f^{(1)} = f'$이며 $1! = 1$, $(x - x_0)^1 = x - x_0$이다.

**2의 증명.** [[higher-derivative]]의 (2)에 의해 $f$는 $n$번 미분가능하므로 $T_n^{x_0} f$가 정해지고, $0 \le k \le n$에서 두 테일러 다항식의 $k$번째 항은 같다. 합의 규칙 (2)(끝항 떼기)에 의해 결론이 나온다.

**3의 증명.** $T_n^{x_0} f$는 [[higher-derivative]]의 (8)의 꼴에서 $a = x_0$, $m = n$, $c_k = f^{(k)}(x_0)(k!)^{-1}$인 함수이다. 따라서 무한 번 미분가능하고, 같은 (8)의 (iii)과 (K1), (K2), (K8)의 (iii), (K4)에 의해 $0 \le k \le n$에서 $(T_n^{x_0} f)^{(k)}(x_0) = k! \cdot f^{(k)}(x_0)(k!)^{-1} = f^{(k)}(x_0)$이며, (8)의 (ii)에 의해 $k \ge n + 1$에서 $(T_n^{x_0} f)^{(k)}$는 값이 $0$인 상수함수이다.

**4의 증명.** [[higher-derivative]]의 (8)에 의해 $h$는 무한 번 미분가능하고, (iii)에 의해 $0 \le k \le m$이면 $h^{(k)}(x_0) = k!\,c_k$, $k \ge m + 1$이면 $h^{(k)}(x_0) = 0$이다.

(i): $m = n$이고 $0 \le k \le n$에서 $k!\,c_k = h^{(k)}(x_0) = f^{(k)}(x_0)$이므로, 양변에 $(k!)^{-1}$을 곱하면 $c_k = f^{(k)}(x_0)(k!)^{-1}$이다. 따라서 모든 $x$에서 $h(x)$와 $T_n^{x_0} f(x)$의 항이 범위 안에서 모두 같고, $h = T_n^{x_0} f$이다.

(ii): $T_n^{x_0} h$의 $k$번째 계수 $\gamma_k = h^{(k)}(x_0)(k!)^{-1}$은 $0 \le k \le m$이면 $c_k$이고 $k \ge m + 1$이면 $0$이다. $n \le m$이면 $0 \le k \le n$에서 $\gamma_k = c_k$이므로 모든 $x$에서 $T_n^{x_0} h(x) = \sum_{j=0}^{n} c_j (x - x_0)^j$이다. $m \le n$이면 합의 규칙 (3)으로 $T_n^{x_0} h(x)$를 $0 \le k \le m$인 항의 합과 $m + 1 \le k \le n$인 항의 합으로 나눈다. 앞의 것은 $h(x)$이고, 뒤의 것은 모든 항이 $0$이므로 [[linearity-and-order-of-finite-sums]]의 (2)에 의해 $0$이다($m = n$이면 빈 합이다). 따라서 $T_n^{x_0} h = h$이다.

**5의 증명.** [[higher-derivative]]의 (5)에 의해 $f|_J$는 $n$번 미분가능하고 $0 \le k \le n$에서 $(f|_J)^{(k)} = f^{(k)}|_J$이므로, $x_0 \in J$에서 $(f|_J)^{(k)}(x_0) = f^{(k)}(x_0)$이다. 따라서 모든 $x$에서 두 테일러 다항식의 항이 범위 안에서 모두 같고, $T_n^{x_0}(f|_J) = T_n^{x_0} f$이다. $\blacksquare$
:::

## 예시와 반례

:::example[지수함수의 0 에서의 테일러 다항식]
[[higher-derivative]]의 (9)와 [[exponential-function|지수함수]]의 (3), (1)에 의해 $\exp$는 무한 번 미분가능하고 모든 $k$에서 $\exp^{(k)}(0) = \exp(0) = 1$입니다. 따라서 $0$ 이상인 모든 정수 $n$과 실수 $x$에서
$$
T_n^{0} \exp(x) = \sum_{k=0}^{n} \frac{x^k}{k!}
$$
입니다($x - 0 = x$). 예컨대 $T_2^{0} \exp(x) = 1 + x + 2^{-1}x^2$입니다. 차수를 하나 올리면 (2)대로 $(n + 1)!$으로 나눈 항 하나가 붙습니다.
:::

:::example[x³ 을 x − 1 의 거듭제곱으로]
$h(x) = x^3$으로 정한 $h : \mathbb{R} \to \mathbb{R}$의 $x_0 = 1$에서의 테일러 다항식을 구해 봅시다. $h$는 [[higher-derivative]]의 (8)의 꼴에서 $a = 0$, $m = 3$, $c_0 = c_1 = c_2 = 0$, $c_3 = 1$인 함수이므로 (8)의 (i)에 의해 $h'(x) = 3x^2$, $h''(x) = 6x$이고, $h^{(3)}$은 값이 $6$인 상수함수입니다. $x = 1$에서의 값은 $h(1) = 1$, $h'(1) = 3$, $h''(1) = 6$, $h^{(3)}(1) = 6$이므로
$$
\begin{aligned}
T_0^{1} h(x) &= 1, \\
T_1^{1} h(x) &= 1 + 3(x - 1), \\
T_2^{1} h(x) &= 1 + 3(x - 1) \\
&\qquad + 3(x - 1)^2, \\
T_3^{1} h(x) &= 1 + 3(x - 1) \\
&\qquad + 3(x - 1)^2 + (x - 1)^3
\end{aligned}
$$
입니다($6 \cdot (2!)^{-1} = 3$, $6 \cdot (3!)^{-1} = 1$). $y = x - 1$로 두고 $(1 + y)^3 = (1 + y)(1 + 2y + y^2)$를 전개하면 $1 + 3y + 3y^2 + y^3$이므로, $T_3^{1} h$는 $h$ 자신입니다. 곧 $h$는 (4)의 꼴에서 $x_0 = 1$, $m = 3$, 계수 $1, 3, 3, 1$인 함수이고, (4)의 (ii)에 의해 $n \ge 3$이면 $T_n^{1} h = h$입니다. $x = 2$에서 $T_2^{1} h(2) = 1 + 3 + 3 = 7$이고 $h(2) = 8$이므로, $T_2^{1} h$는 $h$와 다른 함수입니다.
:::

:::counterexample[x₀ 가까이에서 f 와 같지 않은 1차 테일러 다항식]
$g(x) = x\,|x|$로 정한 $g : \mathbb{R} \to \mathbb{R}$는 미분가능한 함수이고 $g(0) = 0$, $g'(0) = 0$입니다($x \ne 0$에서 차분몫이 $x\,|x|\,x^{-1} = |x|$이고, $\delta = \varepsilon$으로 두면 [[limit-of-a-function]]의 정의에 의해 이것은 $0$에서 $0$으로 수렴합니다). 따라서 (1)에 의해 $T_1^{0} g$는 값이 $0$인 상수함수입니다. 그러나 $x \ne 0$이면 [[absolute-value]]의 (2)에 의해 $|x| \ne 0$이고 (K9)에 의해 $g(x) = x\,|x| \ne 0$이므로, $0$을 포함하는 어느 근방에서도 $g$와 $T_1^{0} g$는 같지 않습니다. 테일러 다항식은 $x_0$에서의 도함수만 맞춥니다((3)). $T_2^{0} g$를 쓰려면 $g$가 $2$번 미분가능해야 합니다.
:::

## 확인 질문

:::check[$h(x) = 5 - x + 4x^2$로 정한 $h : \mathbb{R} \to \mathbb{R}$의 $0$에서의 $1$차 테일러 다항식과 $3$차 테일러 다항식은 무엇인가?]
$T_1^{0} h(x) = 5 - x$이고 $T_3^{0} h = h$입니다. $h$는 (4)의 꼴에서 $x_0 = 0$, $m = 2$, $c_0 = 5$, $c_1 = -1$, $c_2 = 4$인 함수입니다($x - 0 = x$). (4)의 (ii)에 의해 $n = 1 \le 2$이면 $T_1^{0} h(x) = c_0 + c_1 x = 5 - x$이고, $n = 3 \ge 2$이면 $T_3^{0} h = h$입니다. 직접 계산해도 $h(0) = 5$, $h'(0) = -1$, $h''(0) = 8$, $h^{(3)}(0) = 0$이므로 $T_3^{0} h(x) = 5 - x + 8 \cdot (2!)^{-1} x^2 + 0 = h(x)$입니다.
:::

:::check[$f : I \to \mathbb{R}$가 $2$번 미분가능하고 $T_2^{x_0} f$가 값이 $0$인 상수함수이면 $f(x_0)$, $f'(x_0)$, $f''(x_0)$은 무엇인가?]
셋 다 $0$입니다. (3)에 의해 $k = 0, 1, 2$에서 $f^{(k)}(x_0) = (T_2^{x_0} f)^{(k)}(x_0)$입니다. 값이 $0$인 상수함수는 [[derivative]]의 (1)에 의해 미분가능하고 도함수도 값이 $0$인 상수함수이므로, [[higher-derivative]]의 (1)에 의해 그 $0$계, $1$계, $2$계 도함수는 모두 값이 $0$인 상수함수입니다. 다만 이것은 $f$가 $x_0$ 밖에서 $0$이라는 뜻이 아닙니다.
:::
