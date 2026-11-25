---
title: 멱급수의 예
title_en: Examples of Power Series
aliases: [등비급수의 수렴 반지름, 지수급수의 수렴, examples of power series, radius of convergence examples]
kind: proposition
field: real-analysis
msc: ["40A30"]
level: undergrad
summary: 계수가 모두 1 인 멱급수(반지름 1, 합 1/(1 − (x − a)), 두 끝점에서 발산), 계수가 1/n! 인 멱급수(모든 실수에서 수렴), xⁿ/n 의 멱급수(한 끝점에서만 조건수렴), xⁿ/n² 의 멱급수(두 끝점에서 수렴), nⁿxⁿ 의 멱급수(반지름 0), 계수가 번갈아 0 인 멱급수(비 공식은 쓸 수 없고 코시–아다마르 공식으로 반지름 1/2)의 수렴 반지름과 수렴하는 점의 집합을 구하고, 계수가 어떤 번호부터 모두 0 인 멱급수는 모든 실수에서 수렴해 합이 유한 합임을 보인다.
requires: [even-and-odd, natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, real-power, nth-root, sequence, upper-bound-and-supremum, interval, archimedean-property, basic-limits, tail-of-a-sequence, limit-of-sum-and-product, limit-superior-and-inferior, geometric-series, terms-of-convergent-series-tend-to-zero, harmonic-series-diverges, comparison-test, convergent-sequence-is-bounded, absolute-convergence, conditional-convergence-examples, factorial-from-zero, series-indexed-from-zero, power-series, radius-of-convergence, cauchy-hadamard-formula, ratio-formula-for-radius]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.6.5절 Power series, Examples 2.6.7–2.6.9 (p.106–107), Proposition 2.6.10 뒤 문단 (p.107), Proposition 2.6.12 뒤 문단 (p.109), 2.6.6절 Exercises, Exercise 2.6.5 (p.110), 2.5.2절 Proposition 2.5.5 (p.88)
    checked: original
    note: "(2)는 출처 Example 2.6.7(p.106, Σ xⁿ/n! 이 모든 x ∈ ℝ 에서 비 판정법으로 절대수렴)과 같은 대상, 같은 결론, 같은 방법이다. (3)은 Example 2.6.8(p.106–107, Σ xⁿ/n 이 (−1, 1) 에서 절대수렴하고 x = −1 에서 수렴하지만 절대수렴하지 않으며 x = 1 에서 발산)과 같은 대상, 같은 결론이다. 출처는 x = −1 을 교대급수 판정법으로 보이고, 이 항목은 conditional-convergence-examples 의 (1)을 p = 1 에 쓴다. (5)는 Example 2.6.9(p.107, Σ nⁿxⁿ 이 x ≠ 0 에서 발산, 근 판정법으로 lim sup n|x| = ∞)와 같은 대상, 같은 결론이다. 출처는 상극한 ∞ 를 쓰고 이 항목은 cauchy-hadamard-formula 의 (2)를 쓴다. Proposition 2.6.10 뒤 문단(p.107)은 세 예의 수렴 반지름이 1, ∞, 0 이라고 적는다. (1)은 p.109 의 문단(x ∈ (−1, 1) 에서 1/(1 − x) = Σ xⁿ, |x| > 1 에서 발산)과 Proposition 2.5.5(p.88)를 중심 a 로 옮긴 것이다. (6)은 Exercise 2.6.5 e)(p.110)의 Σ x²ⁿ 처럼 짝수 번째 계수만 0 이 아닌 멱급수와 같은 발상이다. 반례 '수렴 반지름이 같아도 수렴하는 점의 집합은 다를 수 있다'는 Proposition 2.6.10 의 '끝점에서 급수는 수렴할 수도 있고 하지 않을 수도 있다'(p.107)를 예로 보인 것이다."
  - ref: lebl-basic-analysis-2
    loc: 11.3.2절 Convergence of power series, Example 11.3.2 (p.155), 11.2절 Example 11.2.6 (p.147)
    checked: original
    note: "출처 II 권 Example 11.3.2(p.155)는 Σ zⁿ, Σ zⁿ/n!, Σ nⁿzⁿ 의 수렴 반지름이 각각 1, ∞, 0 이라고 이미 아는 것으로 적는다. 이 항목의 (1), (2), (5)와 같은 대상이다. Example 11.2.6(p.147)은 Σ xⁿ/n! 이 모든 유계 구간에서 고르게 수렴한다고 하고 비 판정법을 쓴다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(예의 반지름과 수렴 집합 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
멱급수, $x$에서의 수렴·발산·절대수렴·조건수렴과 합은 [[power-series]]의 것이고, $A$, 수렴 반지름 $\rho$, 모든 실수에서 수렴하는 멱급수, (7)의 $I$와 수렴하는 점의 집합 $C$는 [[radius-of-convergence]]의 것이다. 계승 $n!$($n \ge 0$, $0! = 1$)은 [[factorial-from-zero]], 거듭제곱($0^0 = 1$)은 [[power-of-a-real-number]]의 것이다. 구간의 기호는 [[interval]]의 것이고, $a < b$인 실수에 대하여 $[a, b) = \{x : a \le x < b\}$이다.

다음이 성립한다.

1. (**계수가 모두 $1$인 멱급수**) $a$를 실수라 하자. 중심이 $a$이고 $0$ 이상인 모든 $n$에서 $c_n = 1$인 멱급수는
   - (i) $A$가 위로 유계이고 수렴 반지름이 $\rho = 1$이며,
   - (ii) $|x - a| < 1$인 모든 실수 $x$에서 절대수렴하고
     $$
     \sum_{n=0}^{\infty} (x - a)^n = \frac{1}{1 - (x - a)}
     $$
     이며,
   - (iii) $|x - a| \ge 1$인 모든 실수 $x$에서 발산한다. 따라서 $C = I = (a - 1, a + 1)$이다.
2. (**계수가 $1/n!$인 멱급수**) $a$를 실수라 하자. 중심이 $a$이고 $0$ 이상인 모든 $n$에서 $c_n = (n!)^{-1}$인 멱급수는 모든 실수에서 수렴하는 멱급수이다. 곧 모든 실수 $x$에서 절대수렴한다.
3. ($x^n/n$의 멱급수) 중심이 $0$이고 $c_0 = 0$, 자연수 $n$에서 $c_n = n^{-1}$인 멱급수는 수렴 반지름이 $1$이고, $x = 1$에서 발산하며, $x = -1$에서 조건수렴한다. 따라서 $C = [-1, 1)$이다.
4. ($x^n/n^2$의 멱급수) 중심이 $0$이고 $c_0 = 0$, 자연수 $n$에서 $c_n = (n^2)^{-1}$인 멱급수는 수렴 반지름이 $1$이고, $x = 1$과 $x = -1$에서 절대수렴한다. 따라서 $C = [-1, 1]$이다.
5. ($n^n x^n$의 멱급수) 중심이 $0$이고 $0$ 이상인 모든 $n$에서 $c_n = n^n$($c_0 = 0^0 = 1$)인 멱급수는 수렴 반지름이 $0$이다. 따라서 $C = \{0\}$이다.
6. (계수가 번갈아 $0$인 멱급수) 중심이 $0$이고, $0$ 이상인 정수 $n$이 짝수이면 $c_n = 2^n$, 홀수이면 $c_n = 0$인 멱급수를 생각한다.
   - (i) 어떤 자연수 $N$에 대해서도 "$N$ 이상인 모든 정수 $n$에서 $c_n \ne 0$"이 성립하지 않는다. 따라서 [[ratio-formula-for-radius|비로 구하는 수렴 반지름]]의 가정이 성립하지 않는다.
   - (ii) $\bigl(\sqrt[n]{|c_n|}\bigr)$은 유계이고 그 상극한은 $2$이며, 수렴 반지름은 $1/2$이다.
7. (계수가 어떤 번호부터 모두 $0$인 멱급수) $a$를 실수라 하고, 자연수 $N$이 있어 $N$ 이상인 모든 정수 $n$에서 $c_n = 0$이라 하자. 중심이 $a$이고 계수가 $(c_n)_{n \ge 0}$인 멱급수는 모든 실수에서 수렴하는 멱급수이고, 모든 실수 $x$에서
   $$
   \sum_{n=0}^{\infty} c_n (x - a)^n = \sum_{n=0}^{N-1} c_n (x - a)^n
   $$
   이다. 계수가 모두 $0$이면 합은 늘 $0$이다.
:::

:::english
Power series, convergence, divergence, absolute and conditional convergence at $x$ and the sum are as in the entry on power series; $A$, the radius of convergence $\rho$, power series converging at every real number, the set $I$ of (7) and the set $C$ of points of convergence are as in the entry on the radius of convergence. The factorial $n!$ ($n \ge 0$, $0! = 1$) and powers ($0^0 = 1$) are as in their entries. Interval notation is as in the entry on intervals, and for reals $a < b$, $[a, b) = \{x : a \le x < b\}$.

The following hold.

1. (**The power series with all coefficients $1$**) Let $a$ be a real number. The power series with center $a$ and $c_n = 1$ for every $n \ge 0$
   - (i) has $A$ bounded above and radius of convergence $\rho = 1$,
   - (ii) converges absolutely at every real $x$ with $|x - a| < 1$, where
     $$
     \sum_{n=0}^{\infty} (x - a)^n = \frac{1}{1 - (x - a)},
     $$
   - (iii) and diverges at every real $x$ with $|x - a| \ge 1$. Hence $C = I = (a - 1, a + 1)$.
2. (**The power series with coefficients $1/n!$**) Let $a$ be a real number. The power series with center $a$ and $c_n = (n!)^{-1}$ for every $n \ge 0$ converges at every real number; that is, it converges absolutely at every real $x$.
3. (The power series of $x^n/n$) The power series with center $0$, $c_0 = 0$ and $c_n = n^{-1}$ for natural $n$ has radius of convergence $1$, diverges at $x = 1$ and converges conditionally at $x = -1$. Hence $C = [-1, 1)$.
4. (The power series of $x^n/n^2$) The power series with center $0$, $c_0 = 0$ and $c_n = (n^2)^{-1}$ for natural $n$ has radius of convergence $1$ and converges absolutely at $x = 1$ and at $x = -1$. Hence $C = [-1, 1]$.
5. (The power series of $n^n x^n$) The power series with center $0$ and $c_n = n^n$ for every $n \ge 0$ ($c_0 = 0^0 = 1$) has radius of convergence $0$. Hence $C = \{0\}$.
6. (Coefficients that are $0$ at every other index) Consider the power series with center $0$ where, for an integer $n \ge 0$, $c_n = 2^n$ if $n$ is even and $c_n = 0$ if $n$ is odd.
   - (i) For no natural number $N$ does "$c_n \ne 0$ for every integer $n \ge N$" hold. Hence the hypothesis of the ratio formula for the radius of convergence fails.
   - (ii) $\bigl(\sqrt[n]{|c_n|}\bigr)$ is bounded with limit superior $2$, and the radius of convergence is $1/2$.
7. (Coefficients that vanish from some index on) Let $a$ be a real number and suppose there is a natural number $N$ with $c_n = 0$ for every integer $n \ge N$. The power series with center $a$ and coefficients $(c_n)_{n \ge 0}$ converges at every real number, and for every real $x$
   $$
   \sum_{n=0}^{\infty} c_n (x - a)^n = \sum_{n=0}^{N-1} c_n (x - a)^n.
   $$
   If all coefficients are $0$, the sum is always $0$.
:::

## 직관

(1)과 (2)는 멱급수의 기본이 되는 두 예입니다. 계수가 모두 $1$이면 멱급수는 공비가 $x - a$인 등비급수이고, 중심에서 거리가 $1$보다 작은 곳에서만 수렴합니다. 계수가 $1/n!$이면 계수가 어떤 등비수열보다도 빨리 작아져서 모든 실수에서 수렴합니다.

(3), (4)와 (1)을 $a = 0$에 쓴 것은 모두 수렴 반지름이 $1$이지만 끝점에서의 모습이 다릅니다. 수렴 반지름은 열린구간 $I$만 정하고, 끝점은 멱급수마다 따로 따져야 한다는 것을 보여 줍니다. (5)는 계수가 너무 빨리 커져서 중심 말고는 어디서도 수렴하지 않는 예입니다.

(6)은 두 공식의 차이를 보여 줍니다. 홀수 번째 계수가 $0$이면 이웃한 계수의 비를 만들 수 없어 [[ratio-formula-for-radius|비로 구하는 수렴 반지름]]은 쓸 수 없지만, [[cauchy-hadamard-formula|코시–아다마르 공식]]은 $0$인 계수를 $\sqrt[n]{0} = 0$으로 다루므로 쓸 수 있습니다.

## 증명

:::idea
(1)은 등비급수의 합으로 안쪽과 바깥쪽을 직접 정하고 반지름의 판정을 쓴다. (2)–(4)는 비 공식, (5)와 (6)은 코시–아다마르 공식으로 반지름을 구하고, 끝점은 해석학 입문과 이 강의 2단원의 급수로 따진다.
:::

:::hint
(3)에서 $c_{j+1}/c_j = j/(j + 1) = 1 - (j + 1)^{-1}$이고, (4)에서는 그 제곱입니다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (1)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]). 아래에서 "$1$-꼬리"는 [[tail-of-a-sequence|수열의 꼬리]]의 것이다. 그 항목의 (1)과 [[basic-limits|기본적인 극한]]의 (2)에 의해 $j$번째 항이 $(j + 1)^{-1}$인 수열($n^{-1}$의 수열의 $1$-꼬리)은 $0$으로 수렴한다. 이것을 "(가)"라 부른다.

**1의 증명.** $x$를 실수라 하자. $x$에서의 항은 $1 \cdot (x - a)^n = (x - a)^n$이다((K4)).

$|x - a| < 1$이면 [[series-indexed-from-zero]]의 (13)의 (ii)를 공비 $x - a$에 쓰면 멱급수는 $x$에서 수렴하고 합은 $(1 - (x - a))^{-1}$이다. [[power-series]]의 (2)와 [[power-of-a-real-number|실수의 거듭제곱]]의 (4)에 의해 $|(x - a)^n| = |x - a|^n$이고, [[absolute-value|절댓값]]의 (1)과 (2)에 의해 $\bigl||x - a|\bigr| = |x - a| < 1$이므로 같은 (13)의 (ii)를 공비 $|x - a|$에 쓰면 절대수렴한다.

$|x - a| \ge 1$이면, 정의에 의해 $x$에서의 항을 한 칸 옮긴 수열의 $j$번째 항은 $(x - a)^{j-1} = 1 \cdot (x - a)^{j-1}$이므로 이것은 첫째 항이 $1$이고 공비가 $x - a$인 [[geometric-series|등비급수]]의 수열이다. $1 \ne 0$이고 $1 \le |x - a|$이므로 [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (3)에 의해 그 급수는 발산하고, 정의에 의해 멱급수는 $x$에서 발산한다.

$|x - a| > 1$이면 발산하고 $|x - a| < 1$이면 수렴하므로, [[radius-of-convergence]]의 (6)의 (i)을 $\rho' = 1$에 쓰면 $A$는 위로 유계이고 $\rho = 1$이다. 그 (7)의 (i)에 의해 $I = (a - 1, a + 1)$이고, (ii)와 (iii)에 의해 멱급수가 수렴하는 점은 정확히 $|x - a| < 1$인 점이므로 $C = I$이다.

**2의 증명.** [[factorial-from-zero|0부터의 계승]]의 (3)에 의해 모든 $n$에서 $0 < n!$이므로 순서 성질 (6)의 (i)에 의해 $0 < c_n$이고, 특히 $c_n \ne 0$이다. [[ratio-formula-for-radius|비로 구하는 수렴 반지름]]을 $N = 1$로 쓰면, [[factorial-from-zero]]의 (4)의 둘째 식과 (K2), (K8)의 (iii)에 의해
$$
\begin{aligned}
q_j &= \bigl((j + 1)!\bigr)^{-1} \bigl((j!)^{-1}\bigr)^{-1} \\
&= (j!)^{-1}(j + 1)^{-1}\, j! \\
&= (j + 1)^{-1}
\end{aligned}
$$
이다(절댓값의 (1); $\bigl((j!)^{-1}\bigr)^{-1} = j!$은 (K8)의 (iii)). (가)에 의해 $(q_j)$는 $0$으로 수렴하므로, 그 항목의 (1)에 의해 멱급수는 모든 실수에서 수렴하는 멱급수이고, [[radius-of-convergence]]의 (4)에 의해 모든 실수에서 절대수렴한다.

**3의 증명.** 자연수 $n$에서 $c_n = n^{-1} > 0$이다. 비 공식을 $N = 1$로 쓰면 $q_j = (j + 1)^{-1} (j^{-1})^{-1} = j\,(j + 1)^{-1} = 1 - (j + 1)^{-1}$이다((K3), (K8), (K12)). (가)와 [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)에 의해 $(q_j)$는 $1$로 수렴하므로, 비 공식의 (2)에 의해 수렴 반지름은 $1$이다.

$x = 1$에서 항은 $c_n 1^n = c_n$이고(거듭제곱의 (2)의 (iv)), 그 가운데 자연수 번호의 것으로 된 수열은 $n$번째 항이 $n^{-1}$인 수열이다. [[harmonic-series-diverges|조화급수의 발산]]의 (2)에 의해 그 급수는 발산하므로, [[series-indexed-from-zero]]의 (8)($K = 0$)에 의해 멱급수는 $x = 1$에서 발산한다.

$x = -1$에서 자연수 번호의 항은 $n^{-1}(-1)^n = (-1)^n n^{-1}$이다. [[real-power|실수 거듭제곱]]의 (2)에 의해 $n^{-1}$은 실수 지수 $-1$의 거듭제곱과 같으므로, [[conditional-convergence-examples|조건수렴하는 급수의 예]]의 (1)을 $p = 1$에 쓰면 이 수열의 급수는 수렴하고 절대수렴하지 않는다. [[absolute-convergence|절대수렴]]의 정의에 의해 $n$번째 항이 $|(-1)^n n^{-1}| = n^{-1}$인 수열의 급수가 발산한다. (8)을 $x = -1$에서의 항과 그 절댓값에 각각 쓰면, 멱급수는 $x = -1$에서 수렴하고 절대수렴하지 않는다. 곧 조건수렴한다.

$C$: [[radius-of-convergence]]의 (7)의 (iii)에 의해 $(-1, 1) \subseteq C \subseteq [-1, 1]$이고, $-1 \in C$, $1 \notin C$이므로 $C = [-1, 1)$이다.

**4의 증명.** 자연수 $n$에서 $c_n = (n^2)^{-1} > 0$이다. 비 공식을 $N = 1$로 쓰면 (K12)의 (vi)와 거듭제곱의 (2)의 (iii)에 의해 $q_j = \bigl((j + 1)^2\bigr)^{-1} j^2 = \bigl(j\,(j + 1)^{-1}\bigr)^2$이다. 3의 증명에서처럼 $j\,(j + 1)^{-1}$의 수열은 $1$로 수렴하므로 [[limit-of-sum-and-product|극한의 사칙연산]]의 (6)에 의해 $(q_j)$는 $1^2 = 1$로 수렴하고, 수렴 반지름은 $1$이다.

$x = 1$이나 $x = -1$에서 거듭제곱의 (4)와 (2)의 (iv)에 의해 $|c_n x^n| = c_n |x|^n = c_n$이다. 그 가운데 자연수 번호의 것으로 된 수열은 $n$번째 항이 $(n^2)^{-1}$인 수열이고, [[comparison-test|비교 판정법]]의 (6)에 의해 그 급수는 수렴한다. (8)에 의해 멱급수는 두 점에서 절대수렴한다. 3의 증명에서처럼 $(-1, 1) \subseteq C \subseteq [-1, 1]$이고 $\pm 1 \in C$이므로 $C = [-1, 1]$이다.

**5의 증명.** 자연수 $n$에서 $0 \le n$이므로 [[nth-root|n제곱근]]의 (2)와 절댓값의 (1)에 의해 $\sqrt[n]{|n^n|} = \sqrt[n]{n^n} = n$이다. $n$번째 항이 $n$인 수열은 유계가 아니다. 실수 $B$가 주어지면 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $B < n$인 자연수 $n$이 있고, 그 $n$에서 $|n| = n > B$이기 때문이다. [[cauchy-hadamard-formula|코시–아다마르 공식]]의 (2)에 의해 수렴 반지름은 $0$이고, [[radius-of-convergence]]의 (7)의 (iii)에 의해 $C = \{0\}$이다.

**6의 증명.** [[even-and-odd|짝수와 홀수]]에서 받아들인 사실에 의해 모든 정수는 짝수이거나 홀수이고 둘 다는 아니므로 $c_n$은 하나로 정해진다.

(i) 자연수 $N$에 대하여 $2N + 1$은 $N$ 이상인 홀수이므로 $c_{2N+1} = 0$이다.

(ii) 짝수인 자연수 $n$에서 $|c_n| = 2^n$이고(거듭제곱의 (6)의 (i)과 절댓값의 (1)) n제곱근의 (2)에 의해 $\sqrt[n]{2^n} = 2$이다. 홀수인 자연수 $n$에서 n제곱근의 (1)에 의해 $\sqrt[n]{0} = 0$이다. 그래서 $\bigl(\sqrt[n]{|c_n|}\bigr)$의 항은 모두 $0$ 이상 $2$ 이하이고 유계이다. 자연수 $n$에 대하여 $2n$은 $n$ 이상인 짝수이고 $2n + 1$은 $n$ 이상인 홀수이므로, [[limit-superior-and-inferior|상극한과 하극한]]의 $S_n$은 정확히 $\{0, 2\}$이고 [[upper-bound-and-supremum|상계와 상한]]의 (2)에 의해 그 $a_n$은 최댓값 $2$이다. 그 항목의 (4)에 의해 상극한은 $\inf\{2\} = 2$이고, 코시–아다마르 공식의 (1)의 (ii)에 의해 수렴 반지름은 $2^{-1} = 1/2$이다.

**7의 증명.** $y_n = \sqrt[n]{|c_n|}$로 두면 $N$ 이상인 자연수 $n$에서 n제곱근의 (1)에 의해 $y_n = \sqrt[n]{0} = 0$이다. [[convergent-sequence-is-bounded|수렴하는 수열은 유계이다]]의 (1)을 $k = N$으로 쓰면 $n \le N$인 자연수 $n$에서 $|y_n| \le B$인 실수 $B$가 있고, $n > N$이면 $|y_n| = 0$이므로, 절댓값의 (10)에 의해 모든 $n$에서 $|y_n| \le \max\{B, 0\}$이다. 따라서 $(y_n)$은 유계이다. [[limit-superior-and-inferior|상극한과 하극한]]의 $a_n$은 모두 $0$ 이상이고($y_n \ge 0$과 그 항목의 (2)) $S_N = \{0\}$이므로 $a_N = 0$이다. $0$은 $\{a_n : n \in \mathbb{N}\}$의 최솟값이므로 그 항목의 (4)와 상계와 상한의 (2)에 의해 상극한은 $0$이다. 코시–아다마르 공식의 (1)의 (i)에 의해 모든 실수에서 수렴하는 멱급수이다.

합: 실수 $x$에서의 항 $t_n = c_n (x - a)^n$은 $n \ge N$에서 (K9)에 의해 $0$이다. $n \ge N$에서 정해진 항 $t_n$을 1부터 다시 번호 붙인 수열은 모든 항이 $0$이므로 첫째 항이 $0$인 등비급수의 수열($j$번째 항 $0 \cdot 0^{j-1}$)과 같고, [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (3)에 의해 그 급수의 합은 $0$이다. [[series-indexed-from-zero]]의 (8)을 $K = N - 1$로 쓰면 $\sum_{n=0}^{\infty} t_n = \sum_{n=0}^{N-1} t_n + 0$이다((K4)). 계수가 모두 $0$이면 $N = 1$로 두어 합은 $t_0 = c_0 = 0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[중심이 3 인 등비급수의 합]
(1)을 $a = 3$에 쓰면 $|x - 3| < 1$, 곧 $2 < x < 4$에서 $\sum_{n=0}^{\infty} (x - 3)^n = (4 - x)^{-1}$입니다. 예컨대 $x = 7/2$에서 합은 $(4 - 7/2)^{-1} = (1/2)^{-1} = 2$이고, 이것은 $x = 7/2$에서의 항이 $(1/2)^n$이므로 [[series-indexed-from-zero]]의 (13)의 (ii)로 구한 $(1 - 1/2)^{-1}$과 같습니다. $x = 4$나 $x = 2$에서는 (1)의 (iii)에 의해 발산합니다.
:::

:::counterexample[수렴 반지름이 같아도 수렴하는 점의 집합은 다를 수 있다]
(1)을 $a = 0$에 쓴 것, (3), (4)의 세 멱급수는 모두 중심이 $0$이고 수렴 반지름이 $1$입니다. 그러나 수렴하는 점의 집합 $C$는 차례로 $(-1, 1)$, $[-1, 1)$, $[-1, 1]$로 셋 다 다릅니다. 수렴 반지름은 끝점 $-1$, $1$에서의 수렴과 발산을 정하지 않습니다.
:::

## 확인 질문

:::check[중심 $-1$, 계수가 모두 $1$인 멱급수의 $x = -1/2$에서의 합은 얼마인가?]
$2$입니다. $|x - a| = |-1/2 + 1| = 1/2 < 1$이므로 (1)의 (ii)에 의해 합은 $\bigl(1 - (1/2)\bigr)^{-1} = 2$입니다.
:::

:::check[(6)의 멱급수는 끝점 $x = 1/2$에서 수렴하는가?]
발산합니다. 짝수 $n$에서 항은 $2^n (1/2)^n = 1^n = 1$이고 홀수 $n$에서는 $0$입니다. 자연수 번호의 항으로 된 수열은 어떤 번호 뒤에도 $1$인 항(짝수 번째)이 있어 $\varepsilon = 1/2$에 대해 $0$과의 거리가 $\varepsilon$ 미만으로 머무르지 않으므로 $0$으로 수렴하지 않고, [[power-series]]의 (5)에 의해 멱급수는 $x = 1/2$에서 발산합니다. $x = -1/2$에서도 짝수 번째 항이 $(-1)^n = 1$이어서 같습니다.
:::
