---
title: 멱급수의 계수는 하나로 정해진다
title_en: Uniqueness of Power Series Coefficients
aliases: [멱급수의 계수의 유일성, 멱급수 전개의 유일성, uniqueness of power series coefficients, uniqueness of power series expansion]
kind: theorem
field: real-analysis
msc: ["40A30"]
level: undergrad
summary: 반지름이 양수이거나 모든 실수에서 수렴하는 멱급수에서 0 이 아닌 첫 계수 c_m 을 쓰면 나타내는 함수가 (x − a)ᵐ 과 중심에서 0 이 아닌 연속함수의 곱이 된다는 것을 보이고, 이것으로 중심으로 수렴하는 점열이나 중심의 둘레에서 합이 0 이면 계수가 모두 0 이고, 중심이 같은 두 멱급수가 중심의 둘레에서 같은 합을 가지면 계수가 모두 같다는 것을 증명한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, sequence, limit-of-sequence, basic-limits, tail-of-a-sequence, limit-of-sum-and-product, linearity-of-series, interval, real-valued-function, continuous-function, sum-of-a-series, series-indexed-from-zero, cauchy-product, power-series, radius-of-convergence, power-series-examples, power-series-converges-uniformly, algebra-of-power-series]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.3.5절 Identity theorem for analytic functions 의 Lemma 11.3.8 과 그 증명 (p.160); 11.3.3절 Properties of analytic functions 의 식 (11.1) 뒤 문장 (p.156); 11.3.6절 Exercises 의 Exercise 11.3.7 (p.162)"
    checked: original
    note: "출처 II 권 Lemma 11.3.8(p.160)은 수렴하는 복소 멱급수 f(z) = Σ a_k z^k 와 0 으로 수렴하는 0 이 아닌 복소수의 점열 z_n 에서 f(z_n) = 0 이면 모든 a_k 가 0 이라고 진술한다. 증명은 a_k ≠ 0 인 가장 작은 m 을 잡아 f(z) = z^m g(z), g(z) = Σ a_{k+m} z^k 로 쓰고, g 가 'f 와 같은 집합에서 수렴하고' 연속이며 g(0) = a_m ≠ 0 이므로 0 둘레에서 g ≠ 0 이어서 모순이라고 한다. 이 항목은 실수판이고 중심을 a 로 두었으며, (1)에서 g 의 멱급수가 f 의 멱급수가 수렴하는 점에서 수렴한다는 것과 g 의 반지름을 radius-of-convergence 의 (6)의 (ii)로 확인해 출처가 괄호 안에 적고 넘어가는 단계를 메웠다. 가장 작은 m 은 정렬 원리로 정했다. 출처는 증명 첫 줄에 '연속에 의해 a_0 = 0' 을 따로 적지만 이 항목은 m = 0 인 경우도 같은 논법에 넣었다. (3)의 둘레 꼴과 (4)의 두 멱급수 꼴은 출처 p.156 의 식 (11.1) 뒤 문장 '계수는 함수의 도함수로 하나로 정해진다'와 같은 결론이지만, 이 항목은 고계 도함수를 쓰지 않는다. (1)의 인수 꼴은 Exercise 11.3.7(p.162, f(0) = 0 이고 영함수가 아니면 f(z) = z^k g(z), g(0) ≠ 0 인 g 가 있음을 보이라)과 같은 결론이다. 확인 질문 '중심 $0$인 멱급수가 나타내는 함수 $f$가 $|x| < \\delta$에서 $f(-x) = f(x)$를 만족하면 계수에 대해 무엇을 말할 수 있는가?'의 짝함수는 I 권 5.3.4절 Exercises 의 Exercise 5.3.10(p.206)이 정의하는 even function(f(x) = f(−x))과 같은 말이다. 확인 질문 '중심 $0$인 멱급수가 나타내는 함수 $f$가 모든 자연수 $k$에서 $f(1/k) = 1/k^2$을 만족하면 계수는 무엇인가?'는 Lemma 11.3.8 의 0 으로 수렴하는 0 이 아닌 점열을 1/k 로 둔 것과 같은 발상이다."
  - ref: lebl-basic-analysis
    loc: "6.2.5절 Exercises 의 Exercise 6.2.20 (p.245); 2.6.5절 Power series 의 Proposition 2.6.12 뒤 문단 (p.109); 5.3.4절 Exercises 의 Exercise 5.3.10 (p.206)"
    checked: original
    note: "출처 I 권 Exercise 6.2.20(p.245)은 a) (a − ρ, a + ρ) 에서 수렴하는 f(x) = Σ c_n (x − a)ⁿ 의 모든 고계 도함수가 a 에서 0 이면 모든 c_n 이 0 임을 보이고, b) 그것으로 a 의 어떤 둘레에서 f = 0 이면 (a − ρ, a + ρ) 전체에서 f = 0 임을 보이라고 한다. 이 항목의 (3)은 b) 의 가정에서 계수가 모두 0 이라는 결론을 고계 도함수 없이 얻는 것이다. 예시 '등비급수의 계수를 알아보기'의 1/(1 − x) = Σ xⁿ 은 p.109 의 등비급수 문단과 같은 대상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(로그 급수의 나머지 적분과 어림 재계산, 이항급수 유일성의 경로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
멱급수, $x$에서의 수렴과 합은 [[power-series]]의 것이고, 집합 $A$, 수렴 반지름 $\rho$, 모든 실수에서 수렴하는 멱급수, 집합 $I$와 멱급수가 $I$ 위에 나타내는 함수는 [[radius-of-convergence]]의 것이다. 수열의 수렴은 [[limit-of-sequence]], 연속은 [[continuous-function]]의 것이다.

$a$를 실수, $(c_n)_{n \ge 0}$을 0부터 번호가 붙은 수열이라 하고, "멱급수"는 중심이 $a$이고 계수가 $(c_n)_{n \ge 0}$인 멱급수라 하자. (1), (2)에서는 [[radius-of-convergence]]의 (7)의 (i)의 두 경우, 곧 $A$가 위로 유계이고 $0 < \rho$이거나 멱급수가 모든 실수에서 수렴하는 멱급수인 경우를 다루고, 멱급수가 $I$ 위에 나타내는 함수를 $f$라 한다.

1. (인수 꼴) $c_n \ne 0$인 $0$ 이상의 정수 $n$이 있다고 하자. 그런 $n$ 가운데 가장 작은 것 $m$이 있다. 계수가 $(c_{n+m})_{n \ge 0}$이고 중심이 $a$인 멱급수는 $I$의 모든 점에서 수렴하고, 그 합을 $g(x) = \sum_{n=0}^{\infty} c_{n+m} (x - a)^n$으로 정한 함수 $g : I \to \mathbb{R}$는 연속함수이며, $I$의 모든 $x$에서
   $$
   f(x) = (x - a)^m\, g(x)
   $$
   이고 $g(a) = c_m \ne 0$이다.
2. (중심으로 수렴하는 점열) $I$의 원소로 된 수열 $(x_k)$가 모든 자연수 $k$에서 $x_k \ne a$이고 $a$로 수렴하며, 모든 $k$에서 $f(x_k) = 0$이면, $0$ 이상인 모든 $n$에서 $c_n = 0$이다. 따라서 $f$는 값이 $0$인 상수함수이다.
3. (중심의 둘레) $\delta$가 양의 실수이고, $|x - a| < \delta$인 모든 실수 $x$에서 멱급수가 수렴하고 그 합이 $0$이면, $0$ 이상인 모든 $n$에서 $c_n = 0$이다.
4. (두 멱급수) $(d_n)_{n \ge 0}$을 0부터 번호가 붙은 수열이라 하자. $\delta$가 양의 실수이고, $|x - a| < \delta$인 모든 실수 $x$에서 계수가 $(c_n)_{n \ge 0}$인 멱급수와 $(d_n)_{n \ge 0}$인 멱급수(중심은 모두 $a$)가 수렴하고 합이 같으면, $0$ 이상인 모든 $n$에서 $c_n = d_n$이다. $a$를 원소로 갖는 열린구간 $(p, q)$ 위에서 합이 같아도 $\delta = \min\{a - p,\ q - a\}$로 두면 같은 결론이다.
:::

:::english
Power series, convergence at $x$ and the sum there are as in the entry on power series; the set $A$, the radius of convergence $\rho$, power series converging at every real number, the set $I$ and the function a power series represents on $I$ are as in the entry on the radius of convergence. Convergence of sequences and continuity are as in their entries.

Let $a$ be a real number and $(c_n)_{n \ge 0}$ a sequence indexed from zero, and let "the power series" be the power series with center $a$ and coefficients $(c_n)_{n \ge 0}$. In (1) and (2) we treat both cases of (7)(i) of the entry on the radius of convergence, that is, $A$ is bounded above with $0 < \rho$ or the power series converges at every real number, and $f$ denotes the function the power series represents on $I$.

1. (Factored form) Suppose there is an integer $n \ge 0$ with $c_n \ne 0$. Then there is a smallest such $n$, say $m$. The power series with center $a$ and coefficients $(c_{n+m})_{n \ge 0}$ converges at every point of $I$; the function $g : I \to \mathbb{R}$ defined by its sum $g(x) = \sum_{n=0}^{\infty} c_{n+m} (x - a)^n$ is continuous, and for every $x$ in $I$
   $$
   f(x) = (x - a)^m\, g(x),
   $$
   with $g(a) = c_m \ne 0$.
2. (A sequence converging to the center) If a sequence $(x_k)$ of elements of $I$ satisfies $x_k \ne a$ for every natural $k$, converges to $a$, and $f(x_k) = 0$ for every $k$, then $c_n = 0$ for every $n \ge 0$. Hence $f$ is the constant function with value $0$.
3. (A neighborhood of the center) If $\delta$ is a positive real number and the power series converges with sum $0$ at every real $x$ with $|x - a| < \delta$, then $c_n = 0$ for every $n \ge 0$.
4. (Two power series) Let $(d_n)_{n \ge 0}$ be a sequence indexed from zero. If $\delta$ is a positive real number and at every real $x$ with $|x - a| < \delta$ the power series with coefficients $(c_n)_{n \ge 0}$ and with coefficients $(d_n)_{n \ge 0}$ (both with center $a$) converge with equal sums, then $c_n = d_n$ for every $n \ge 0$. The same conclusion holds if the sums agree on an open interval $(p, q)$ containing $a$, with $\delta = \min\{a - p,\ q - a\}$.
:::

## 직관

멱급수가 중심 가까이에서 $0$이 되려면 계수가 모두 $0$이어야 한다는 것이 이 정리입니다. 계수 가운데 $0$이 아닌 것이 있으면 그 첫 번째 $c_m$이 중심 가까이에서 멱급수의 크기를 정합니다. 뒤의 항들은 $(x - a)^m$보다 더 빨리 작아지는 $(x - a)^{m+1}, (x - a)^{m+2}, \dots$를 곱하고 있으므로, $(x - a)^m$을 묶어 내면 남는 함수 $g$는 중심에서 $c_m \ne 0$이고 연속이어서 중심 가까이에서 $0$이 되지 않습니다((1)). 그러면 $f(x) = (x - a)^m g(x)$는 중심을 뺀 가까운 점에서 $0$이 될 수 없습니다.

비유하자면 여러 겹으로 쌓인 소리 가운데 가장 낮은 음을 찾는 일입니다. 아주 가까이(중심 가까이)에서 들으면 가장 낮은 차수의 항 하나가 소리를 지배하고, 그 항이 있으면 소리가 완전히 사라질 수 없습니다. 비유가 맞는 곳은 "가장 낮은 차수"가 정렬 원리의 가장 작은 $m$이라는 것이고, 맞지 않는 곳은 중심 자신입니다. $m \ge 1$이면 중심에서는 $f(a) = 0$이므로, (2)는 중심과 다른 점들 $x_k \ne a$에서의 $0$을 요구합니다.

그래서 같은 중심의 두 멱급수가 중심의 둘레에서 같은 함수를 나타내면 차의 멱급수가 그 둘레에서 $0$이므로 계수가 모두 같습니다((4)). 함수를 멱급수로 나타내는 방법은 중심을 정하면 하나뿐입니다.

## 증명

:::idea
$c_m$이 처음으로 $0$이 아닌 계수이면 $f(x) = (x - a)^m g(x)$이고 $g$는 연속이며 $g(a) = c_m \ne 0$이므로, 중심 가까이의 $a$가 아닌 점에서 $f \ne 0$이다.
:::

:::hint
$x \ne a$이면 $n \ge m$에서 $c_n (x - a)^n = (x - a)^m \cdot c_n (x - a)^{n - m}$이다. 꼬리의 급수와 $(x - a)^m$배의 관계로 $g$의 멱급수의 수렴을 얻는다.
:::

:::hint
$g$의 멱급수가 $I$에서 수렴하면 [[radius-of-convergence]]의 (6)의 (ii)로 그 반지름이 $\rho$ 이상이다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (1)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다룬다. 아래에서 실수 $x$에 대하여 $t = x - a$로 쓴다.

**1의 증명.** $E = \{n \in \mathbb{Z} : 0 \le n,\ c_n \ne 0\}$은 공집합이 아니고 $0$이 아래 한계이므로, [[well-ordering-principle|정렬 원리]]의 (3)에 의해 최소 원소 $m$이 있다. 최소 원소이므로 $0 \le n < m$이면 $n \notin E$, 곧 $c_n = 0$이다((Z5)와 (L1)). [[series-indexed-from-zero]]의 진술에 의해 $n$에서의 값이 $c_{n+m}$인 0부터 번호가 붙은 수열이 있다. 그 멱급수를 "$g$의 멱급수"라 하자.

$x \in I$를 잡고 $u_n = c_n t^n$, $v_n = c_{n+m} t^n$으로 둔다($n \ge 0$). $m = 0$이면 $v_n = u_n$이므로 $g$의 멱급수는 $x$에서 수렴하고 합이 $f(x) = t^0 g(x)$이다. $m \ge 1$이라 하자. $(u_n)_{n \ge 0}$의 급수는 수렴하고([[radius-of-convergence]]의 (7)의 (ii)), [[series-indexed-from-zero]]의 (8)을 $K = m - 1$로 쓰면 $n \ge m$에서 정해진 항 $u_n$의 급수가 수렴하며
$$
f(x) = \sum_{n=0}^{m-1} u_n + \sum_{n=m}^{\infty} u_n = \sum_{n=m}^{\infty} u_n
$$
이다. 가운데의 유한 합은 모든 항이 $0$이므로 [[cauchy-product]]의 (5)의 (iv)에 의해 $0$이다. $n \ge m$에서 정해진 항을 1부터 다시 번호 붙인 수열의 $j$번째 항은 [[sum-of-a-series]]의 정의에 의해 $w_j = u_{j+m-1}$이고, $(v_n)_{n \ge 0}$을 한 칸 옮긴 수열의 $j$번째 항은 $y_j = v_{j-1}$이다. [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (i)과 (K1), (K2)에 의해
$$
w_j = c_{j+m-1}\, t^{m}\, t^{j-1} = t^m\, y_j
$$
이다.

- $x \ne a$이면 (K12)의 (v)에 의해 $t \ne 0$이고 거듭제곱의 (3)에 의해 $t^m \ne 0$이다. $(w_j)$의 급수가 수렴하므로 [[linearity-of-series|급수의 선형성]]의 (2)를 $(t^m)^{-1}$에 쓰면 $(y_j)$의 급수가 수렴하고, 같은 (2)에 의해 $\sum_j w_j = t^m \sum_j y_j$이다. [[series-indexed-from-zero]]의 급수의 정의에 의해 $g$의 멱급수는 $x$에서 수렴하고 합이 $\sum_j y_j$이므로 $f(x) = t^m g(x)$이다.
- $x = a$이면 [[power-series]]의 (3)에 의해 $g$의 멱급수는 $a$에서 수렴하고 합은 $c_m$이다. 또 같은 (3)과 $m \ge 1$에 의해 $f(a) = c_0 = 0$이고, 거듭제곱의 (2)의 (iv)에 의해 $t^m g(a) = 0^m c_m = 0$이다((K9)).

따라서 $g$의 멱급수는 $I$의 모든 점에서 수렴하고 $f(x) = t^m g(x)$이다. $g(a) = c_m$은 [[power-series]]의 (3)이다.

연속: $f$가 모든 실수에서 수렴하는 멱급수의 함수이면 $I = \mathbb{R}$이므로 $g$의 멱급수는 모든 실수에서 수렴하고, [[radius-of-convergence]]의 (4)에 의해 모든 실수에서 수렴하는 멱급수이다. $A$가 위로 유계이고 $0 < \rho$이면 $g$의 멱급수는 $|x - a| < \rho$인 모든 $x$에서 수렴하므로, 같은 항목의 (6)의 (ii)에 의해 모든 실수에서 수렴하는 멱급수이거나 그 반지름 $\rho_g$가 $\rho \le \rho_g$이다. 어느 경우든 $g$의 멱급수의 (7)의 집합 $I_g$는 $I$를 포함하고, 그 위에 나타내는 함수는 [[power-series-converges-uniformly|멱급수의 고른 수렴과 연속]]의 (3)에 의해 연속함수이다. $g$는 그 함수의 $I$로의 제한이므로 [[continuous-function]]의 (5)에 의해 연속함수이다.

**2의 증명.** 계수 가운데 $0$이 아닌 것이 있다고 가정하고 (1)의 $m$과 $g$를 잡자. $g$는 $a$에서 연속이고 $g(a) \ne 0$이므로, [[continuous-function]]의 (7)에 의해 양의 실수 $\delta'$가 있어 $x \in I$이고 $|x - a| < \delta'$이면 $g(x) \ne 0$이다. $(x_k)$가 $a$로 수렴하므로 [[limit-of-sequence]]의 정의를 $\varepsilon = \delta'$에 쓰면 $|x_K - a| < \delta'$인 자연수 $K$가 있다. $x_K \ne a$이므로 위와 같이 $(x_K - a)^m \ne 0$이고, (K12)의 (vi)에 의해 $f(x_K) = (x_K - a)^m g(x_K) \ne 0$이다. 이것은 $f(x_K) = 0$에 모순이다. 따라서 $0$ 이상인 모든 $n$에서 $c_n = 0$이다. 이때 $I$의 모든 $x$에서 항이 모두 $0$이므로 [[power-series-examples|멱급수의 예]]의 (7)에 의해 $f(x) = 0$이다.

**3의 증명.** 멱급수는 $|x - a| < \delta$에서 수렴하므로 [[radius-of-convergence]]의 (6)의 (ii)에 의해 모든 실수에서 수렴하는 멱급수이거나 $A$가 위로 유계이고 $\delta \le \rho$이다. 어느 경우든 (1), (2)의 가정에 들고, $|x - a| < \delta$이면 $x \in I$이다(순서 성질 (1)의 (v)). 자연수 $k$마다 $x_k = a + \delta\,(k + 1)^{-1}$로 정한 수열을 생각한다([[sequence]]의 (1)). 순서 성질 (10)과 (6)의 (i), (4)의 (iv)에 의해 $0 < \delta (k + 1)^{-1}$이고 $(k + 1)^{-1} < 1$이므로 $0 < |x_k - a| = \delta (k + 1)^{-1} < \delta$이다(절댓값의 (1), 순서 성질 (6)의 (ii)와 (4)의 (i)). 따라서 $x_k \in I$, $x_k \ne a$이고 가정에 의해 $f(x_k) = 0$이다. $n$번째 항이 $(n + 1)^{-1}$인 수열은 $n^{-1}$의 수열의 $1$-꼬리이므로 [[basic-limits]]의 (2)와 [[tail-of-a-sequence]]의 (1)에 의해 $0$으로 수렴하고, [[limit-of-sum-and-product]]의 (5)에 의해 $(x_k)$는 $a + \delta \cdot 0 = a$로 수렴한다. (2)에 의해 모든 $c_n$이 $0$이다.

**4의 증명.** [[algebra-of-power-series|멱급수의 합과 곱]]의 (1)에 의해 계수가 $(c_n - d_n)_{n \ge 0}$인 멱급수는 $|x - a| < \delta$에서 수렴하고 합은 두 합의 차, 곧 $0$이다((K12)의 (v)). (3)에 의해 모든 $n$에서 $c_n - d_n = 0$이고, (K12)의 (v)에 의해 $c_n = d_n$이다. 열린구간 $(p, q)$의 경우: $p < a < q$이므로 $\delta = \min\{a - p, q - a\}$는 [[absolute-value|절댓값]]의 (10)과 순서 성질 (3)의 (i)에 의해 양수이고, $|x - a| < \delta$이면 절댓값의 (8)에 의해 $a - \delta < x < a + \delta$이며 $p \le a - \delta$, $a + \delta \le q$이므로 $x \in (p, q)$이다. $\blacksquare$
:::

## 예시와 반례

:::example[등비급수의 계수를 알아보기]
중심 $0$인 어떤 멱급수가 $|x| < 1/2$에서 수렴하고 그 합이 $(1 - x)^{-1}$이라고 합시다. [[power-series-examples|멱급수의 예]]의 (1)에 의해 계수가 모두 $1$인 멱급수도 $|x| < 1$에서, 따라서 $|x| < 1/2$에서 합이 $(1 - x)^{-1}$입니다. (4)를 $\delta = 1/2$로 쓰면 처음 멱급수의 계수는 모두 $1$입니다. 곧 $(1 - x)^{-1}$을 중심 $0$의 멱급수로 나타내는 방법은 $\sum_{n=0}^{\infty} x^n$ 하나뿐입니다. 이 결론에는 처음 멱급수의 반지름을 따로 알 필요가 없습니다.
:::

:::counterexample[중심에서만 0 이면 계수가 모두 0 이 아닐 수 있다]
중심 $0$, $c_1 = 1$이고 나머지 계수가 $0$인 멱급수는 모든 실수에서 수렴하고 $f(x) = x$입니다([[power-series-examples]]의 (7)). 모든 $k$에서 $x_k = 0$인 수열은 $0$으로 수렴하고 $f(x_k) = 0$이지만 $c_1 \ne 0$입니다. (2)의 "$x_k \ne a$"라는 가정이 깨진 경우입니다. (1)의 꼴로 보면 $m = 1$이고 $g$는 값이 $1$인 상수함수여서, $f$의 영점은 중심 하나뿐입니다.
:::

## 확인 질문

:::check[중심 $0$인 멱급수가 나타내는 함수 $f$가 $|x| < \delta$에서 $f(-x) = f(x)$를 만족하면 계수에 대해 무엇을 말할 수 있는가?]
홀수 번째 계수가 모두 $0$입니다. [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iii)에 의해 $c_n (-x)^n = (-1)^n c_n x^n$이므로, 계수가 $((-1)^n c_n)_{n \ge 0}$인 멱급수는 $|x| < \delta$에서 수렴하고 합이 $f(-x) = f(x)$입니다. (4)에 의해 모든 $n$에서 $(-1)^n c_n = c_n$이고, $n$이 홀수이면 거듭제곱의 (5)에 의해 $-c_n = c_n$이어서 $c_n = 0$입니다.
:::

:::check[중심 $0$인 멱급수가 나타내는 함수 $f$가 모든 자연수 $k$에서 $f(1/k) = 1/k^2$을 만족하면 계수는 무엇인가?]
$c_2 = 1$이고 나머지는 모두 $0$입니다. $f(1/k)$가 정해지므로 모든 $1/k$는 $f$의 정의역 $I$에 듭니다. 계수가 $0, 0, 1, 0, 0, \dots$인 멱급수는 모든 실수에서 수렴하고 합이 $x^2$입니다([[power-series-examples|멱급수의 예]]의 (7)). [[algebra-of-power-series|멱급수의 합과 곱]]의 (3)의 (ii)에 의해 두 멱급수의 차, 곧 계수가 $c_0, c_1, c_2 - 1, c_3, \dots$인 멱급수는 (1), (2)의 가정에 들고 그 집합 $I$는 $f$의 $I$를 포함하며(앞의 멱급수가 모든 실수에서 수렴하면 (3)의 (i)), $1/k$에서의 합은 $f(1/k) - 1/k^2 = 0$입니다. $x_k = 1/k$는 $0$이 아니고 $0$으로 수렴하므로([[basic-limits]]의 (2)) (2)에 의해 차의 계수가 모두 $0$입니다.
:::
