---
title: 멱급수의 고계 도함수
title_en: Higher Derivatives of Power Series
aliases: [멱급수의 고계도함수, 거듭제곱급수의 고계 도함수, 멱급수는 무한 번 미분가능하다, 테일러 계수, derivatives of power series, power series are infinitely differentiable, Taylor coefficients]
kind: theorem
field: real-analysis
msc: ["40A30", "26A24"]
level: undergrad
summary: "수렴 반지름이 양수이거나 모든 실수에서 수렴하는 멱급수가 나타내는 함수 f 는 무한 번 미분가능하고, ℓ 번째 도함수는 계수가 (n + ℓ)!/n! · c_(n+ℓ) 인 같은 반지름의 멱급수가 같은 구간 위에 나타내는 함수이다. 특히 f^(ℓ)(a) = ℓ! c_ℓ 이므로 계수는 c_ℓ = f^(ℓ)(a)/ℓ! 로 정해지고, 부분합의 계수는 중심에서의 도함수로 쓰인다."
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, sequence, limit-of-sequence, tail-of-a-sequence, series-and-partial-sums, comparison-test, harmonic-series-diverges, interval, real-valued-function, derivative, mathematical-induction, finite-sum-of-reals, sum-of-a-series, series-indexed-from-zero, factorial-from-zero, power-series, radius-of-convergence, termwise-differentiation-of-power-series, higher-derivative]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.3절 Power series and analytic functions 의 11.3.3절 Properties of analytic functions: 실수 멱급수의 항별 미분을 되풀이하는 문단과 식 (11.1) (p.156)"
    checked: original
    note: "출처(p.156)는 Basic Analysis I 의 항별 미분 정리를 되풀이하면('By iterating this theorem') 해석함수가 무한 번 미분가능하고 f^(ℓ)(x) = Σ_{n=ℓ}^∞ n(n − 1)⋯(n − ℓ + 1) c_n (x − a)^{n−ℓ} = Σ_{n=0}^∞ (n + ℓ)(n + ℓ − 1)⋯(n + 1) c_{n+ℓ} (x − a)^n 이며 특히 f^(ℓ)(a) = ℓ! c_ℓ (식 (11.1))이라고 적고, 'The coefficients are uniquely determined by the derivatives of the function, and vice versa' 라고 덧붙인다. 출처는 이것을 복소 계수로 말하고 실수부와 허수부로 나누어 실수판에 돌리며, 되풀이를 귀납으로 적지 않는다. 이 항목은 계수를 실수로 두고, 출처의 내림 곱 (n + ℓ)(n + ℓ − 1)⋯(n + 1) 대신 계승의 몫 (n + ℓ)!/n! 을 쓰며(실수의 유한 곱이 이 강의의 선행에 없다), 되풀이를 ℓ 에 대한 귀납으로 증명한다. (1)의 'ℓ 번 항별 미분한 멱급수'라는 이름, (2)의 반지름이 ℓ 에 따르지 않는다는 것의 귀납, (5)는 이 항목이 진술에 올린 것이다. 그 뒤 문단(p.156–157)의 무한 번 미분가능하지만 계수가 수렴하는 멱급수를 주지 않는 함수(Exercise 5.4.11 의 e^{−1/x})는 이 강의가 싣지 않는다."
  - ref: lebl-basic-analysis
    loc: "6.2절 Interchange of limits 의 6.2.4절 Convergence of power series: Corollary 6.2.12 앞 문단 (p.241), Example 6.2.15 (p.242); 6.2.5절 Exercises 의 Exercise 6.2.20 (p.245); 2.6절 More on series 의 2.6.5절 Power series: Example 2.6.8 (p.106–107); 2.6.6절 Exercises 의 Exercise 2.6.5 (p.110)"
    checked: original
    note: "Corollary 6.2.12 앞 문단(p.241)은 미분하거나 적분한 급수가 다시 같은 반지름의 멱급수임을 보이겠다고 하고 'Therefore, any power series defines an infinitely differentiable function' 이라고 적는다. 이 항목의 (3)이 그 결론이고, 출처는 그것을 따로 증명하지 않는다. Exercise 6.2.20 a)(p.245)는 (a − ρ, a + ρ) 에서 수렴하는 멱급수의 f^(k)(a) 가 모두 0 이면 계수가 모두 0 임을 보이라고 한다. 이 항목의 (4)를 쓰면 바로 나오는 물음이다. 예시 '등비급수의 고계 도함수'는 Example 6.2.15(p.242)가 Σ xⁿ 을 항별 미분해 Σ n x^{n−1} 이 (1 − x)^{−2} 로 수렴함을 보이는 것과 같은 대상, 같은 발상이다. 반례 'x^n/n² 의 멱급수의 끝점 1'에서 항별 미분한 멱급수 Σ x^n/(n + 1) 은 Example 2.6.8(p.106–107)의 Σ x^n/n 을 한 칸 옮긴 것과 같은 꼴이고, x = 1 에서 발산하는 까닭(조화급수)도 같다. 확인 질문 '중심 $1$, 계수 $c_n = 2^n$인 멱급수가 나타내는 함수 $f$에서 $f^{(3)}(1)$은 무엇인가?'의 멱급수는 Exercise 2.6.5 a)(p.110)의 Σ 2ⁿ xⁿ 의 중심을 1 로 옮긴 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(귀납의 구조와 확인 질문의 값 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
멱급수, $x$에서의 항, $x$에서의 수렴과 합은 [[power-series]]의 것이고, 집합 $A$, 수렴 반지름 $\rho$, 모든 실수에서 수렴하는 멱급수, 집합 $I$와 멱급수가 $I$ 위에 나타내는 함수는 [[radius-of-convergence]]의 것이며, 항별 미분한 멱급수는 [[termwise-differentiation-of-power-series|멱급수의 항별 미분]]의 것이다. $n$번 미분가능, 무한 번 미분가능, $k$계 도함수 $f^{(k)}$는 [[higher-derivative]]의 것이고, $0$ 이상인 정수의 계승은 [[factorial-from-zero]]의 것이며, $0$부터의 유한 합과 급수의 합은 [[series-indexed-from-zero]]의 것이다.

$a$를 실수, $(c_n)_{n \ge 0}$을 0부터 번호가 붙은 수열이라 하고, "멱급수"는 중심이 $a$이고 계수가 $(c_n)_{n \ge 0}$인 멱급수라 하자.

**$\ell$번 항별 미분한 멱급수.** $0$ 이상인 정수 $\ell$과 $n$마다 실수
$$
d^{\ell}_n = \frac{(n + \ell)!}{n!}\, c_{n+\ell}
$$
가 정해진다. 여기서 $\dfrac{(n + \ell)!}{n!}$은 $(n + \ell)!\,(n!)^{-1}$이고, 위첨자 $\ell$은 거듭제곱이 아니라 이름이다. 중심이 $a$이고 계수가 $(d^{\ell}_n)_{n \ge 0}$인 멱급수를 원래 멱급수를 **$\ell$번 항별 미분한 멱급수**라 한다. 그 집합 $A$와 수렴 반지름을 $A_\ell$, $\rho_\ell$로 쓴다.

다음이 성립한다. 아래에서 $\ell$은 $0$ 이상인 정수이다.

1. (차례로 항별 미분하기) $0$번 항별 미분한 멱급수는 멱급수 자신이다. $\ell + 1$번 항별 미분한 멱급수는 $\ell$번 항별 미분한 멱급수를 항별 미분한 멱급수이다. 특히 $1$번 항별 미분한 멱급수는 멱급수를 항별 미분한 멱급수이다.
2. (반지름이 같다) $A$가 위로 유계인 것은 정확히 $A_\ell$이 위로 유계일 때이고, 이때 $\rho_\ell = \rho$이다. 따라서 멱급수가 모든 실수에서 수렴하는 멱급수인 것은 정확히 $\ell$번 항별 미분한 멱급수가 그럴 때이고, [[radius-of-convergence]]의 (7)의 (i)의 집합 $I$는 두 멱급수에서 같은 집합이다.
3. (무한 번 미분가능) [[radius-of-convergence]]의 (7)의 (i)의 두 경우, 곧 $A$가 위로 유계이고 $0 < \rho$이거나 멱급수가 모든 실수에서 수렴하는 멱급수일 때, 멱급수가 $I$ 위에 나타내는 함수를 $f$라 하자. 그러면 $f$는 무한 번 미분가능하고, $f^{(\ell)}$은 $\ell$번 항별 미분한 멱급수가 (2)에 의해 같은 $I$ 위에 나타내는 함수이다. 곧 $I$의 모든 원소 $x$에서
   $$
   \begin{aligned}
   &f^{(\ell)}(x) \\
   &= \sum_{n=0}^{\infty} \frac{(n + \ell)!}{n!}\, c_{n+\ell}\, (x - a)^n
   \end{aligned}
   $$
   이다.
4. (중심에서의 도함수) (3)의 가정 아래 $f^{(\ell)}(a) = \ell!\, c_\ell$이다. 따라서
   $$
   c_\ell = \frac{f^{(\ell)}(a)}{\ell!}
   $$
   이다. 곧 계수는 $f$의 $a$에서의 도함수로 정해진다.
5. (부분합) (3)의 가정 아래, $0$ 이상인 정수 $m$과 모든 실수 $x$에서
   $$
   \begin{aligned}
   &\sum_{n=0}^{m} c_n (x - a)^n \\
   &= \sum_{n=0}^{m} \frac{f^{(n)}(a)}{n!}\, (x - a)^n
   \end{aligned}
   $$
   이다. 또 $x \in I$이면, $m$번째 항이 $\sum_{n=0}^{m} c_n (x - a)^n$인 수열은 $f(x)$로 수렴한다.
:::

:::english
Power series, their terms at $x$, convergence and the sum at $x$ are those of the entry on power series; the set $A$, the radius of convergence $\rho$, power series converging at every real number, the set $I$ and the function represented on $I$ are those of the entry on the radius of convergence; the termwise differentiated power series is that of the entry on termwise differentiation of power series. Being $n$ times differentiable, being infinitely differentiable and the $k$th derivative $f^{(k)}$ are those of the entry on higher-order derivatives; factorials of integers $\ge 0$ are those of the entry on factorials from zero; finite sums and sums of series from zero are those of the entry on sums indexed from zero.

Let $a$ be a real number and $(c_n)_{n \ge 0}$ a sequence indexed from zero, and let "the power series" be the power series with center $a$ and coefficients $(c_n)_{n \ge 0}$.

**The $\ell$ times termwise differentiated power series.** For integers $\ell, n \ge 0$ the real number
$$
d^{\ell}_n = \frac{(n + \ell)!}{n!}\, c_{n+\ell}
$$
is determined. Here $\dfrac{(n + \ell)!}{n!}$ means $(n + \ell)!\,(n!)^{-1}$, and the superscript $\ell$ is a label, not a power. The power series with center $a$ and coefficients $(d^{\ell}_n)_{n \ge 0}$ is called the power series **differentiated termwise $\ell$ times**. Its set $A$ and radius of convergence are written $A_\ell$ and $\rho_\ell$.

The following hold. Below, $\ell$ is an integer $\ge 0$.

1. (Differentiating termwise in turn) The power series differentiated termwise $0$ times is the power series itself. The power series differentiated termwise $\ell + 1$ times is the termwise derivative of the power series differentiated termwise $\ell$ times. In particular, the power series differentiated termwise once is the termwise differentiated power series.
2. (Same radius) $A$ is bounded above exactly when $A_\ell$ is bounded above, and then $\rho_\ell = \rho$. Hence the power series converges at every real number exactly when the power series differentiated termwise $\ell$ times does, and the set $I$ of item (7)(i) of the entry on the radius of convergence is the same for the two power series.
3. (Infinitely differentiable) In the two cases of item (7)(i) of the entry on the radius of convergence, that is, when $A$ is bounded above and $0 < \rho$ or the power series converges at every real number, let $f$ be the function the power series represents on $I$. Then $f$ is infinitely differentiable, and $f^{(\ell)}$ is the function that the power series differentiated termwise $\ell$ times represents on the same $I$ (by (2)). That is, for every element $x$ of $I$,
   $$
   \begin{aligned}
   &f^{(\ell)}(x) \\
   &= \sum_{n=0}^{\infty} \frac{(n + \ell)!}{n!}\, c_{n+\ell}\, (x - a)^n .
   \end{aligned}
   $$
4. (Derivatives at the center) Under the hypothesis of (3), $f^{(\ell)}(a) = \ell!\, c_\ell$. Hence
   $$
   c_\ell = \frac{f^{(\ell)}(a)}{\ell!} .
   $$
   That is, the coefficients are determined by the derivatives of $f$ at $a$.
5. (Partial sums) Under the hypothesis of (3), for every integer $m \ge 0$ and every real $x$,
   $$
   \begin{aligned}
   &\sum_{n=0}^{m} c_n (x - a)^n \\
   &= \sum_{n=0}^{m} \frac{f^{(n)}(a)}{n!}\, (x - a)^n .
   \end{aligned}
   $$
   Moreover, if $x \in I$, the sequence whose $m$th term is $\sum_{n=0}^{m} c_n (x - a)^n$ converges to $f(x)$.
:::

## 직관

[[termwise-differentiation-of-power-series|멱급수의 항별 미분]]은 멱급수가 나타내는 함수의 도함수가 다시 같은 반지름의 멱급수가 나타내는 함수라는 것이었습니다. 그렇다면 그 도함수에 같은 정리를 또 쓸 수 있고, 이것을 몇 번이든 되풀이할 수 있습니다. 이 항목은 그 되풀이를 귀납으로 적은 것입니다. 한 번 미분할 때마다 계수가 $(n + 1)c_{n+1}$처럼 한 칸 당겨지며 곱이 붙고, $\ell$번 당기면 붙은 곱이 $(n + \ell)!/n!$이 됩니다.

중심 $a$에서는 $(x - a)^n$이 $n \ge 1$에서 $0$이 되므로 상수항만 남습니다. $\ell$번 미분한 멱급수의 상수항은 $\ell!\,c_\ell$이므로 $f^{(\ell)}(a) = \ell!\,c_\ell$입니다. 거꾸로 읽으면 멱급수의 계수는 함수가 정해지면 중심에서의 도함수로 모두 정해진다는 뜻이고, 부분합은 중심에서의 도함수들로 만든 다항식이 됩니다((5)).

비유하자면 계수의 수열은 함수의 "설계도"이고 중심에서의 도함수들은 그 설계도를 읽어 내는 방법입니다. 설계도를 알면 도함수를 알고, 도함수를 알면 설계도를 압니다. 비유가 맞지 않는 곳은, 이 항목이 말하는 것은 이미 멱급수로 주어진 함수뿐이라는 점입니다. 아무 무한 번 미분가능한 함수의 도함수로 계수를 만들어도 그 멱급수가 그 함수를 나타낸다는 보장은 이 항목에 없습니다.

## 증명

:::idea
$\ell$번 항별 미분한 멱급수를 한 번 더 항별 미분하면 $\ell + 1$번 항별 미분한 멱급수가 된다는 계수의 계산을 하고, 항별 미분의 정리를 $\ell$에 대한 귀납으로 되풀이한다.
:::

:::hint
$(n + 1)\, d^{\ell}_{n+1} = d^{\ell+1}_n$을 [[factorial-from-zero]]의 (4)로 확인한다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. 귀납은 [[mathematical-induction|수학적 귀납법]]의 시작점이 $0$인 꼴이다. 두 멱급수가 같은 것은 중심이 같고 계수의 0부터 번호가 붙은 수열이 같을 때이고, 그것은 [[series-indexed-from-zero]]의 진술에 의해 $0$ 이상인 모든 정수 $n$에서 계수가 같을 때이다.

**1의 증명.** [[factorial-from-zero]]의 (3)에 의해 $n! \ne 0$이므로 (K8)의 (iii)과 (K4)에 의해 $d^{0}_n = n!\,(n!)^{-1} c_n = c_n$이다. 따라서 $0$번 항별 미분한 멱급수는 멱급수 자신이다. $\ell$번 항별 미분한 멱급수를 항별 미분한 멱급수의 $n$번째 계수는 [[termwise-differentiation-of-power-series|항별 미분]]의 정의에 의해 $(n + 1)\, d^{\ell}_{n+1}$이고, [[factorial-from-zero]]의 (4)의 셋째 식($n$에 $n$)과 (K1), (K2)에 의해
$$
\begin{aligned}
&(n + 1)\, d^{\ell}_{n+1} \\
&= (n + 1)\,\bigl((n + 1)!\bigr)^{-1} \\
&\qquad \cdot (n + 1 + \ell)!\; c_{n+1+\ell} \\
&= (n!)^{-1}\,(n + \ell + 1)!\; c_{n+\ell+1} \\
&= d^{\ell+1}_n
\end{aligned}
$$
이다. 따라서 그것은 $\ell + 1$번 항별 미분한 멱급수이다. $\ell = 0$이면 이것은 멱급수 자신을 항별 미분한 멱급수이다.

**2의 증명.** $\ell$에 대한 귀납으로 보인다. $\ell = 0$이면 (1)에 의해 두 멱급수가 같으므로 $A_0 = A$이다. $\ell$에서 성립한다고 하자. (1)에 의해 $\ell + 1$번 항별 미분한 멱급수는 $\ell$번 항별 미분한 멱급수를 항별 미분한 멱급수이므로, [[termwise-differentiation-of-power-series|항별 미분]]의 (1)의 (ii)를 $\ell$번 항별 미분한 멱급수에 쓰면 $A_\ell$이 위로 유계인 것은 정확히 $A_{\ell+1}$이 위로 유계일 때이고 이때 $\rho_{\ell+1} = \rho_\ell$이다. 귀납 가정과 합치면 $A$가 위로 유계인 것은 정확히 $A_{\ell+1}$이 위로 유계일 때이고 이때 $\rho_{\ell+1} = \rho$이다. 집합 $I$는 [[radius-of-convergence]]의 (7)의 (i)에 의해 $A$가 위로 유계인지와 $\rho$만으로 정해지므로 두 멱급수에서 같다.

**3의 증명.** (2)에 의해 모든 $\ell$에서 $\ell$번 항별 미분한 멱급수도 (7)의 (i)의 두 경우 가운데 같은 경우에 들고 집합 $I$가 같으므로, 그것이 $I$ 위에 나타내는 함수 $f_\ell : I \to \mathbb{R}$가 있다. (1)에 의해 $f_0 = f$이다. $\ell$에 대한 명제 "$f$는 $\ell$번 미분가능하고 $f^{(\ell)} = f_\ell$"을 귀납으로 보인다. $\ell = 0$이면 [[higher-derivative]]의 (1)에 의해 $f^{(0)} = f = f_0$이다. $\ell$에서 참이라 하자. [[termwise-differentiation-of-power-series|항별 미분]]의 (2)를 $\ell$번 항별 미분한 멱급수에 쓰면 $f_\ell$은 미분가능한 함수이고, 그 도함수는 그 멱급수를 항별 미분한 멱급수가 $I$ 위에 나타내는 함수, 곧 (1)에 의해 $f_{\ell+1}$이다. 귀납 가정에 의해 $f^{(\ell)} = f_\ell$은 미분가능한 함수이므로 [[higher-derivative]]의 (2)에 의해 $f$는 $\ell + 1$번 미분가능하고, 같은 항목의 (1)에 의해 $f^{(\ell+1)} = (f^{(\ell)})' = f_\ell' = f_{\ell+1}$이다. 모든 $\ell$에서 $f$가 $\ell$번 미분가능하므로 $f$는 무한 번 미분가능하다. 진술의 식은 $f_\ell$의 정의이다.

**4의 증명.** [[radius-of-convergence]]의 (7)의 (ii)에 의해 $a \in I$이고 $f_\ell(a)$는 $\ell$번 항별 미분한 멱급수의 $0$번째 계수 $d^{\ell}_0$이다. (3)과 $0! = 1$에 의해 $f^{(\ell)}(a) = f_\ell(a) = d^{\ell}_0 = \ell!\,(0!)^{-1} c_\ell = \ell!\, c_\ell$이다. [[factorial-from-zero]]의 (3)에 의해 $\ell! \ne 0$이므로 양변에 $(\ell!)^{-1}$을 곱하면((K1), (K8)의 (iii), (K4)) $c_\ell = f^{(\ell)}(a)\,(\ell!)^{-1}$이다.

**5의 증명.** (4)에 의해 $0 \le n \le m$인 모든 $n$에서 $c_n = f^{(n)}(a)(n!)^{-1}$이므로 두 합의 항이 범위 안에서 모두 같고, [[finite-sum-of-reals]]의 (4)(범위 안의 항에만 의존. $0$부터의 합의 정의로 옮겨 쓴다)에 의해 두 합은 같다.

$x \in I$라 하자. $(y_j)$를 $x$에서의 항 $\bigl(c_n (x - a)^n\bigr)_{n \ge 0}$을 한 칸 옮긴 수열이라 하면, [[series-indexed-from-zero]]의 정의에 의해 그 $j$번째 부분합은 $\sum_{n=0}^{j-1} c_n (x - a)^n$이고, 멱급수가 $x$에서 수렴하므로 [[series-and-partial-sums|급수와 부분합]]과 [[sum-of-a-series|급수의 합의 기호]]의 정의에 의해 이 부분합 수열은 $\sum_{n=0}^{\infty} c_n (x - a)^n = f(x)$로 수렴한다. 진술의 수열의 $m$번째 항은 이 부분합 수열의 $(m + 1)$번째 항이므로, 진술의 수열은 이 부분합 수열의 $1$-꼬리이다. [[tail-of-a-sequence]]의 (1)에 의해 그것도 $f(x)$로 수렴한다. $\blacksquare$
:::

## 예시와 반례

:::example[등비급수의 고계 도함수]
중심이 $0$이고 모든 계수가 $1$인 멱급수 $\sum_{n=0}^{\infty} x^n$을 봅시다. $x = 1$에서의 항은 모두 $1^n = 1$이어서 $0$으로 수렴하지 않으므로, [[power-series]]의 (5)에 의해 멱급수는 $1$에서 발산합니다. [[radius-of-convergence]]의 (6)의 (iv)에 의해 $A$는 위로 유계이고 $\rho \le 1$입니다. 또 $(1^n)_{n \ge 0}$은 유계이므로 $1 \in A$이고, 같은 항목의 (1)의 (iii)에 의해 $1 \le \rho$입니다. 따라서 $\rho = 1$이고 $I = \{x : |x| < 1\}$입니다. [[series-indexed-from-zero]]의 (13)의 (ii)에 의해 $I$ 위에서 $f(x) = (1 - x)^{-1}$입니다.

(3)과 (4)에 의해 $f$는 무한 번 미분가능하고, $\ell = 1$이면 $f'(x) = \sum_{n=0}^{\infty} (n + 1) x^n$, $\ell = 2$이면 $f''(x) = \sum_{n=0}^{\infty} (n + 2)(n + 1) x^n$이며, 모든 $\ell$에서 $f^{(\ell)}(0) = \ell! \cdot 1 = \ell!$입니다. 예컨대 $f''(0) = 2$이고 $f^{(3)}(0) = 6$입니다.
:::

:::counterexample[x^n/n² 의 멱급수의 끝점 1]
중심이 $0$이고 $c_0 = 0$, $n \ge 1$에서 $c_n = (n^2)^{-1}$인 멱급수를 봅시다. $x = 1$에서의 항은 $n \ge 1$에서 $(n^2)^{-1}$이므로, [[series-indexed-from-zero]]의 (8)과 [[comparison-test|비교 판정법]]의 (6)에 의해 멱급수는 $1$에서 수렴합니다. 한편 $1$번 항별 미분한 멱급수의 계수는 $(n + 1)\,c_{n+1} = (n + 1)\bigl((n + 1)^2\bigr)^{-1} = (n + 1)^{-1}$이고, $x = 1$에서의 항을 한 칸 옮긴 수열은 $j$번째 항이 $j^{-1}$인 수열이므로 [[harmonic-series-diverges|조화급수의 발산]]에 의해 $1$에서 발산합니다.

[[radius-of-convergence]]의 (6)의 (iv)에 의해 $A_1$은 위로 유계이고 $\rho_1 \le 1$이며, $1 \in A$입니다. (2)에 의해 $A$도 위로 유계이고, 같은 항목의 (1)의 (iii)에 의해 $1 \le \rho$이며 $\rho = \rho_1 \le 1$이므로 $\rho = 1$, $I = \{x : |x| < 1\}$입니다. 멱급수 자신은 끝점 $1$에서도 수렴하지만, (3)이 말하는 것은 $I$ 위의 $f$뿐이고 $1$에서의 도함수에 대해서는 아무것도 말하지 않습니다. 실제로 $1$번 항별 미분한 멱급수는 $1$에서 합을 갖지 않습니다.
:::

## 확인 질문

:::check[중심 $1$, 계수 $c_n = 2^n$인 멱급수가 나타내는 함수 $f$에서 $f^{(3)}(1)$은 무엇인가?]
$48$입니다. 먼저 반지름: $0 \le r \le 2^{-1}$이면 $2^n r^n = (2r)^n \le 1$이므로 $r \in A$이고([[power-of-a-real-number]]의 (2)의 (iii), (6)), 특히 $0 < 2^{-1} \in A$입니다. $x = 2$에서의 항 $2^n \cdot 1^n = 2^n$은 모두 $1$ 이상이어서(같은 항목의 (6)의 (iv)) $0$으로 수렴하지 않으므로 [[power-series]]의 (5)에 의해 멱급수는 $2$에서 발산하고, 따라서 [[radius-of-convergence]]의 (6)의 (iv)에 의해 $A$는 위로 유계이고, 그러면 같은 항목의 (1)의 (iii)에 의해 $0 < 2^{-1} \le \rho$입니다. 따라서 (3), (4)를 쓸 수 있고 $f^{(3)}(1) = 3! \cdot c_3 = 6 \cdot 8 = 48$입니다.
:::

:::check[중심 $a$이고 $c_0 = 1$, $c_1 = -1$, $c_2 = 3$, $n \ge 3$에서 $c_n = 0$인 멱급수가 나타내는 함수의 $f''(a)$와 $f^{(5)}(a)$는 무엇인가?]
$f''(a) = 6$이고 $f^{(5)}(a) = 0$입니다. 모든 $r \ge 0$에서 $(|c_n| r^n)_{n \ge 0}$의 값은 $1$, $r$, $3r^2$과 $0$뿐이어서 모두 $1 + r + 3r^2$ 이하이므로 유계이고, $A$는 위로 유계가 아니어서 모든 실수에서 수렴하는 멱급수입니다($I = \mathbb{R}$). (4)에 의해 $f''(a) = 2! \cdot 3 = 6$이고 $f^{(5)}(a) = 5! \cdot c_5 = 0$입니다. 계수가 유한 개만 $0$이 아니면 (3)의 합도 유한 개의 항만 남아 [[higher-derivative]]의 (8)과 같은 결과가 됩니다.
:::
