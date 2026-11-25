---
title: 비로 구하는 수렴 반지름
title_en: Ratio Formula for the Radius of Convergence
aliases: [비 공식, 비 판정법으로 구하는 수렴 반지름, ratio formula for the radius of convergence]
kind: proposition
field: real-analysis
msc: ["40A30"]
level: undergrad
summary: 멱급수의 계수가 어떤 번호부터 0 이 아니고 이웃한 계수의 비 |c_(n+1)|/|c_n| 이 L 로 수렴하면, L = 0 일 때 모든 실수에서 수렴하는 멱급수이고 L > 0 일 때 수렴 반지름은 1/L 이다. 그 비가 어떤 번호부터 모든 실수보다 커지면 수렴 반지름은 0 이다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, nth-root, sequence, limit-of-sequence, limits-preserve-inequalities, limit-of-sum-and-product, basic-limits, tail-of-a-sequence, convergent-sequence-is-bounded, archimedean-property, factorial-from-zero, ratio-test-for-series, sum-of-a-series, series-indexed-from-zero, power-series, radius-of-convergence, limit-superior-and-inferior, upper-bound-and-supremum, cauchy-hadamard-formula]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.6.6절 Exercises, Exercise 2.6.9 (p.111), Exercise 2.6.5 c) (p.110), 2.5.6절 Ratio test, Proposition 2.5.19 (p.96), 2.5.7절 Exercises, Exercise 2.5.6 (p.98)
    checked: original
    note: "출처 Exercise 2.6.9(p.111)는 Σ a_n xⁿ 에 대해 R = lim |a_{n+1}|/|a_n| 이 있거나 ∞ 일 때 비 판정법으로 수렴 반지름을 구하고 증명하라고 한다. 이 항목은 그 답을 진술하고 증명했다. 출처의 'R 이 ∞' 는 이 사이트에 ∞ 로의 발산이 없으므로 (3)처럼 '모든 실수 B 에 대하여 어떤 번호부터 비가 B 이상'으로 진술했다. 출처의 연습문제는 모든 n 에서 a_n ≠ 0 인 것으로 읽히지만, 이 항목은 어떤 번호 N 부터 c_n ≠ 0 인 꼴로 두었다. 증명은 출처 Proposition 2.5.19(p.96)의 비 판정법(이 사이트의 ratio-test-for-series)을 'n ≥ N 에서 정해진 항'의 급수에 쓴다. 꼬리에서만 비를 보는 것은 Exercise 2.5.6(p.98)의 '어떤 N 이 있어 n ≥ N 에서' 꼴의 비 판정법과 같은 발상이다. 확인 질문 '계수가 $c_n = n!$인 멱급수(중심 $0$)의 수렴 반지름은 무엇인가?'는 Exercise 2.6.5 c)(p.110)의 Σ n! xⁿ 과 같은 대상이다. 예시 '비가 2 로 가는 계수'와 확인 질문 '중심 $2$, 계수 $c_n = (n + 1)(1/5)^n$인 멱급수의 $I$는 무엇인가?'의 계수 (n + 1)(1/5)ⁿ 은 Exercise 2.6.5 a), b)(p.110)의 2ⁿ, n 을 곱한 꼴과 같은 발상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(예의 반지름과 수렴 집합 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
멱급수, $x$에서의 항, $x$에서의 수렴·발산은 [[power-series]]의 것이고, $A$, 수렴 반지름 $\rho$, 모든 실수에서 수렴하는 멱급수는 [[radius-of-convergence]]의 것이다. 수열과 수렴은 [[sequence]]과 [[limit-of-sequence]]의 것이다.

$a$를 실수, $(c_n)_{n \ge 0}$을 0부터 번호가 붙은 수열이라 하고, "멱급수"는 중심이 $a$이고 계수가 $(c_n)_{n \ge 0}$인 멱급수라 하자. 자연수 $N$이 있어 $N$ 이상인 모든 정수 $n$에서 $c_n \ne 0$이라 하자. 그러면 자연수 $j$마다 $|c_{j+N-1}| \ne 0$이므로, $j$번째 항이
$$
q_j = |c_{j+N}|\;|c_{j+N-1}|^{-1}
$$
인 수열 $(q_j)$가 있다. 곧 $(q_j)$는 $n \ge N$에서 이웃한 두 계수의 비 $|c_{n+1}|\,|c_n|^{-1}$을 차례로 늘어놓은 수열이다. 모든 자연수 $n$에서 $c_n \ne 0$이면 $N = 1$로 두어 $q_j = |c_{j+1}|\,|c_j|^{-1}$이다.

1. ($q_j$가 $0$으로 수렴하는 경우) $(q_j)$가 $0$으로 수렴하면 멱급수는 모든 실수에서 수렴하는 멱급수이다.
2. ($q_j$가 양수로 수렴하는 경우) $(q_j)$가 실수 $L$로 수렴하면 $0 \le L$이다. $0 < L$이면 $A$는 위로 유계이고 수렴 반지름은 $\rho = L^{-1}$이다.
3. ($q_j$가 끝없이 커지는 경우) 모든 실수 $B$에 대하여 자연수 $J$가 있어 $J$ 이상인 모든 자연수 $j$에서 $B \le q_j$이면, $A$는 위로 유계이고 수렴 반지름은 $\rho = 0$이다.
:::

:::english
Power series, the terms at $x$, and convergence and divergence at $x$ are as in the entry on power series; $A$, the radius of convergence $\rho$ and power series converging at every real number are as in the entry on the radius of convergence. Sequences and convergence are as in their entries.

Let $a$ be a real number and $(c_n)_{n \ge 0}$ a sequence indexed from zero, and let "the power series" be the power series with center $a$ and coefficients $(c_n)_{n \ge 0}$. Suppose there is a natural number $N$ with $c_n \ne 0$ for every integer $n \ge N$. Then $|c_{j+N-1}| \ne 0$ for every natural number $j$, so there is a sequence $(q_j)$ with $j$th term
$$
q_j = |c_{j+N}|\;|c_{j+N-1}|^{-1}.
$$
That is, $(q_j)$ lists in order the ratios $|c_{n+1}|\,|c_n|^{-1}$ of consecutive coefficients for $n \ge N$. If $c_n \ne 0$ for every natural number $n$, we take $N = 1$, so that $q_j = |c_{j+1}|\,|c_j|^{-1}$.

1. (When $q_j$ tends to $0$) If $(q_j)$ converges to $0$, the power series converges at every real number.
2. (When $q_j$ tends to a positive number) If $(q_j)$ converges to a real number $L$, then $0 \le L$. If $0 < L$, then $A$ is bounded above and the radius of convergence is $\rho = L^{-1}$.
3. (When $q_j$ grows without bound) If for every real number $B$ there is a natural number $J$ with $B \le q_j$ for every natural number $j \ge J$, then $A$ is bounded above and the radius of convergence is $\rho = 0$.
:::

## 직관

$x \ne a$이고 계수가 $0$이 아니면, $x$에서 이웃한 두 항의 비는 $|c_{n+1}(x - a)^{n+1}|\,|c_n (x - a)^n|^{-1} = q\,|x - a|$ 꼴입니다(여기서 $q$는 계수의 비). [[ratio-test-for-series|급수의 비 판정법]]은 이 비의 극한이 $1$보다 작으면 수렴, 크면 발산이라고 하므로, 계수의 비가 양수 $L$로 가면 경계는 $L|x - a| = 1$, 곧 $|x - a| = L^{-1}$입니다. [[cauchy-hadamard-formula|코시–아다마르 공식]]과 같은 생각을 $n$제곱근 대신 이웃한 항의 비로 하는 것입니다.

비유하자면 계수의 비는 "다음 계수가 앞 계수의 몇 배인가"이고, 이것이 $L$로 안정되면 계수는 대략 공비가 $L$인 등비수열처럼 자랍니다. 그러면 멱급수는 공비 $L|x - a|$의 등비급수처럼 행동합니다. 비유가 맞지 않는 곳은, 비가 안정되지 않을 수 있다는 것입니다. 계수 가운데 $0$이 끝없이 나오면 비를 만들 수 없고, 비가 수렴하지도 (3)처럼 끝없이 커지지도 않으면 이 항목은 아무것도 말하지 않습니다. 그럴 때도 코시–아다마르 공식은 쓸 수 있습니다(아래 반례).

처음 몇 계수는 반지름에 영향을 주지 않으므로, 진술은 어떤 번호 $N$부터 $0$이 아닌 계수만 봅니다.

## 증명

:::idea
$x \ne a$에서 $n \ge N$인 항으로 된 급수에 비 판정법을 쓰면 이웃한 항의 비는 $q_j |x - a|$이다. 그 극한 $L|x - a|$가 $1$보다 작은지 큰지로 거리마다 수렴과 발산을 가르고, [[radius-of-convergence|수렴 반지름]]의 판정 (6)과 (4), (5)를 쓴다.
:::

:::hint
$n \ge N$에서 정해진 항 $c_n (x - a)^n$을 1부터 다시 번호 붙인 수열의 $j$번째 항은 $c_{j+N-1}(x - a)^{j+N-1}$입니다. 멱급수의 수렴은 [[series-indexed-from-zero]]의 (8)을 $K = N - 1$로 써서 이 수열의 급수의 수렴으로 바꿉니다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (1)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다루고, 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]).

**진술의 확인.** 자연수 $j$는 (Z1)에 의해 $1 \le j$이므로 (Z7)에 의해 $N \le j + N - 1$이고, 가정에 의해 $c_{j+N-1} \ne 0$이다. [[absolute-value|절댓값]]의 (2)에 의해 $|c_{j+N-1}| \ne 0$이므로 $q_j$가 정해진다. $N = 1$이면 $j + N - 1 = j$이다.

**공통의 준비.** 실수 $x$가 $x \ne a$라 하고 $d = |x - a|$로 두면 (K12)의 (v)와 절댓값의 (2)에 의해 $0 < d$이다. $K = N - 1$은 (Z1), (Z7)에 의해 $0$ 이상인 정수이다. $n \ge N$에서 정해진 항 $c_n (x - a)^n$을 [[sum-of-a-series|급수의 합의 기호]]의 뜻으로 1부터 다시 번호 붙인 수열을 $(v_j)$라 하면 $v_j = c_{j+N-1}(x - a)^{j+N-1}$이다. [[series-indexed-from-zero]]의 (8)에 의해 멱급수가 $x$에서 수렴하는 것은 정확히 $(v_j)$의 급수가 수렴할 때이다.

[[power-of-a-real-number|실수의 거듭제곱]]의 (3)에 의해 $(x - a)^{j+N-1} \ne 0$이고 $c_{j+N-1} \ne 0$이므로 (K10)에 의해 $v_j \ne 0$이다. [[power-series]]의 (2)와 거듭제곱의 (1)에 의해 $|v_j| = |c_{j+N-1}|\,d^{\,j+N-1}$이고 $|v_{j+1}| = |c_{j+N}|\,d^{\,j+N} = |c_{j+N}|\,d^{\,j+N-1}\,d$이다. 거듭제곱의 (3)과 (6)의 (i)에 의해 $d^{\,j+N-1}$은 $0$이 아니므로, (K1), (K2), (K8)의 (iii), (K12)의 (vi)에 의해
$$
|v_{j+1}|\;|v_j|^{-1} = q_j\, d
$$
이다.

**1과 2의 증명.** $(q_j)$가 실수 $L$로 수렴한다고 하자. 모든 $j$에서 $|c_{j+N}| \ge 0$이고 $|c_{j+N-1}|^{-1} > 0$이므로(순서 성질 (6)의 (i)) 순서 성질 (4)의 (iv)에 의해 $0 \le q_j$이고, [[limits-preserve-inequalities|극한과 부등식]]의 (3)에 의해 $0 \le L$이다.

$x \ne a$이고 $d$, $(v_j)$가 공통의 준비와 같다고 하자. [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)에 의해 $j$번째 항이 $|v_{j+1}|\,|v_j|^{-1} = d\,q_j$인 수열은 $d\,L$로 수렴한다. 모든 $j$에서 $v_j \ne 0$이므로 [[ratio-test-for-series|급수의 비 판정법]]을 $(v_j)$에 쓸 수 있다.

- $d\,L < 1$이면 그 (2)에 의해 $(v_j)$의 급수는 수렴하고, 멱급수는 $x$에서 수렴한다.
- $d\,L > 1$이면 그 (3)에 의해 $(v_j)$의 급수는 발산하고, 멱급수는 $x$에서 발산한다.

(1) $L = 0$이면 $a$가 아닌 모든 $x$에서 (K9)에 의해 $d\,L = 0 < 1$이므로 멱급수는 수렴하고, $x = a$에서는 [[power-series]]의 (3)에 의해 수렴한다. [[radius-of-convergence]]의 (4)에 의해 멱급수는 모든 실수에서 수렴하는 멱급수이다.

(2) $0 < L$이면 $\rho' = L^{-1}$은 순서 성질 (6)의 (i)에 의해 양수이고, 순서 성질 (6)의 (iv)와 (K8)의 (iii)에 의해 $d < \rho'$인 것은 정확히 $d\,L < 1$일 때이고 $\rho' < d$인 것은 정확히 $1 < d\,L$일 때이다. $|x - a| < \rho'$이면 $x = a$일 때는 [[power-series]]의 (3)에 의해, $x \ne a$일 때는 위에 의해 멱급수는 수렴한다. $|x - a| > \rho'$이면 $0 < \rho' < |x - a|$이므로 $x \ne a$이고 멱급수는 발산한다. [[radius-of-convergence]]의 (6)의 (i)에 의해 $A$는 위로 유계이고 $\rho = \rho' = L^{-1}$이다.

**3의 증명.** $x \ne a$이고 $d$, $(v_j)$가 공통의 준비와 같다고 하자. 가정을 $B = d^{-1}$에 쓰면 자연수 $J$가 있어 $J$ 이상인 모든 $j$에서 $d^{-1} \le q_j$이다. $0 < d$이므로 순서 성질 (4)의 (iii)과 (K8)의 (iii)에 의해 $1 \le q_j\,d = |v_{j+1}|\,|v_j|^{-1}$이고, 양변에 $|v_j| > 0$을 곱하면 $|v_j| \le |v_{j+1}|$이다. $v_J \ne 0$이므로 [[ratio-test-for-series|급수의 비 판정법]]의 (4)에 의해 $(v_j)$의 급수는 발산하고, 멱급수는 $x$에서 발산한다. $a$가 아닌 모든 실수에서 발산하므로 [[radius-of-convergence]]의 (5)에 의해 $A$는 위로 유계이고 $\rho = 0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[비가 2 로 가는 계수]
중심 $0$, 계수 $c_n = (n + 1)\,2^n$인 멱급수를 봅시다. 모든 $n$에서 $c_n > 0$이므로 $N = 1$로 두면 $q_j = (j + 2)\,2^{j+1} \bigl((j + 1)\,2^j\bigr)^{-1} = 2\,(j + 2)(j + 1)^{-1} = 2 + 2\,(j + 1)^{-1}$입니다. $j$번째 항이 $(j + 1)^{-1}$인 수열은 $n$번째 항이 $n^{-1}$인 수열의 $1$-꼬리이므로, [[basic-limits|기본적인 극한]]의 (2)와 [[tail-of-a-sequence|수열의 꼬리]]의 (1)에 의해 $0$으로 수렴합니다. [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)를 두 번 쓰면 $(q_j)$는 $2 + 2 \cdot 0 = 2$로 수렴합니다. (2)에 의해 수렴 반지름은 $1/2$입니다.
:::

:::counterexample[계수의 비가 수렴하지 않을 수 있다]
중심 $0$, 계수 $c_n = \bigl(2 + (-1)^n\bigr)^n$이면 모든 계수가 양수이지만, 이웃한 계수의 비는 $n$이 짝수이면 $1^{n+1}\,(3^n)^{-1} = (3^n)^{-1}$이고 홀수이면 $3^{n+1}\,(1^n)^{-1} = 3^{n+1}$입니다. 홀수 번째 비 $3^{n+1}$이 끝없이 커지므로 $(q_j)$는 유계가 아니고, [[convergent-sequence-is-bounded|수렴하는 수열은 유계이다]]의 (2)에 의해 어떤 실수로도 수렴하지 않습니다. $1$보다 작은 비 $(3^n)^{-1}$도 끝없이 나오므로 (3)의 가정은 $B = 1$에서 성립하지 않습니다. 그래서 이 항목은 이 멱급수에 대해 아무것도 말하지 않습니다. 반면 $\sqrt[n]{c_n} = 2 + (-1)^n$은 $1$과 $3$을 오가고, 자연수 $n$마다 $n$ 이상인 짝수와 홀수가 있으므로 [[limit-superior-and-inferior|상극한과 하극한]]의 $a_n$은 모두 $\max\{1, 3\} = 3$이며([[upper-bound-and-supremum|상계와 상한]]의 (2)) 그 항목의 (4)에 의해 상극한은 $3$입니다. [[cauchy-hadamard-formula|코시–아다마르 공식]]의 (1)의 (ii)에 의해 수렴 반지름은 $1/3$입니다.
:::

## 확인 질문

:::check[중심 $2$, 계수 $c_n = (n + 1)(1/5)^n$인 멱급수의 $I$는 무엇인가?]
$I = (-3, 7)$입니다. 모든 계수가 양수이고 $q_j = (j + 2)(j + 1)^{-1} \cdot (1/5) = \bigl(1 + (j + 1)^{-1}\bigr)/5$는 $1/5$로 수렴하므로, (2)에 의해 $\rho = 5$이고 [[radius-of-convergence]]의 (7)의 (i)에 의해 $I = (2 - 5, 2 + 5)$입니다.
:::

:::check[계수가 $c_n = n!$인 멱급수(중심 $0$)의 수렴 반지름은 무엇인가?]
$0$입니다. [[factorial-from-zero|0부터의 계승]]의 (3)에 의해 모든 $n$에서 $n! \ne 0$이고 그 (4)에 의해 $q_j = (j + 1)!\,(j!)^{-1} = j + 1$입니다. 실수 $B$가 주어지면 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $B < J$인 자연수 $J$가 있고, $j \ge J$이면 $B < J \le j < j + 1 = q_j$입니다. (3)에 의해 $\rho = 0$입니다.
:::
