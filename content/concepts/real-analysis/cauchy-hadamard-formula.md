---
title: 코시–아다마르 공식
title_en: Cauchy–Hadamard Formula
aliases: [코시-아다마르 공식, 근으로 구하는 수렴 반지름, Cauchy-Hadamard formula, root formula for the radius of convergence]
kind: theorem
field: real-analysis
msc: ["40A30"]
level: undergrad
summary: 멱급수의 계수의 n제곱근의 수열 (ⁿ√|c_n|) 이 유계이고 그 상극한이 L 이면, L = 0 일 때 모든 실수에서 수렴하는 멱급수이고 L > 0 일 때 수렴 반지름은 1/L 이다. 그 수열이 유계가 아니면 수렴 반지름은 0 이다.
requires: [real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, sequence, upper-bound-and-supremum, limits-preserve-inequalities, limit-superior-and-inferior, nth-root, absolute-convergence, root-test, series-indexed-from-zero, power-series, radius-of-convergence]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.6.5절 Power series, Proposition 2.6.10 의 증명 (p.107–108), Proposition 2.6.11 (p.108), Proposition 2.6.12 뒤 문단 (p.109), 6.2.4절 Convergence of power series, Corollary 6.2.13 의 증명 (p.242)
    checked: original
    note: "출처 Proposition 2.6.11(p.108)은 R = lim sup |a_n|^{1/n} 으로 두고, R = ∞ 이면 멱급수는 divergent, R = 0 이면 모든 곳에서 수렴, 그 밖이면 수렴 반지름 ρ = 1/R 이라고 진술하며, 이것을 Proposition 2.6.10 의 증명(p.107–108)에서 배운 것을 다시 적은 것이라 한다. 그 증명은 근 판정법에 lim sup |a_n(x − x_0)ⁿ|^{1/n} = |x − x_0| lim sup |a_n|^{1/n} 을 쓴다. 출처는 상극한이 ∞ 일 수 있게 두지만 이 사이트는 상극한을 유계인 수열에만 정의했으므로, (ⁿ√|c_n|) 이 유계가 아닌 경우를 (2)로 따로 진술하고 root-test 의 (4)로 증명했다. 출처는 Proposition 2.6.10 의 증명에서 ρ = 1/R 로 두어 수렴 반지름이 있음을 보이지만, 이 사이트는 수렴 반지름을 radius-of-convergence 에서 상한으로 정의했으므로 이 항목은 그것과 같은 값을 준다는 정리이고, 반지름의 판정 radius-of-convergence (6)으로 증명한다. 0번째 계수는 0제곱근이 없으므로 쓰지 않는다. '코시–아다마르'라는 이름은 출처에 없다(I 권·II 권 전체에서 'Hadamard' 0건). 널리 쓰이는 이름이라 제목으로 썼다. Corollary 6.2.13 의 증명(p.242)도 수렴 반지름을 R = lim sup |c_n|^{1/n} 의 역수로 둔다. 예시 '계수가 유한 개만 0 이 아닌 멱급수'는 2.6.5절 Proposition 2.6.12 뒤 문단(p.109)의 '다항식은 a_n 이 충분히 큰 n 에서 모두 0 인 멱급수'와 같은 대상이다."
  - ref: lebl-basic-analysis-2
    loc: 11.3.2절 Convergence of power series, Proposition 11.3.1 의 증명 (p.154–155), Example 11.3.3 (p.155)
    checked: original
    note: "출처 II 권 Proposition 11.3.1 의 증명(p.154–155)은 R = lim sup ⁿ√|c_n| 으로 두고 R = 0, R = ∞, 그 밖의 세 경우로 반지름을 정한다. Example 11.3.3(p.155)은 계수가 cⁿ 인 멱급수에 lim sup ⁿ√|cⁿ| = |c| 로 반지름 1/|c| 를 구한다. 확인 질문 '중심 $1$, 계수 $(1/2)^n$인 멱급수의 수렴 반지름과 $I$는 무엇인가?'는 이 예와 같은 발상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(예의 반지름과 수렴 집합 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
멱급수, $x$에서의 항, $x$에서의 수렴·발산·절대수렴은 [[power-series]]의 것이고, $A$, 수렴 반지름 $\rho$, 모든 실수에서 수렴하는 멱급수는 [[radius-of-convergence]]의 것이다. 수열과 유계는 [[sequence]], $n$제곱근 $\sqrt[n]{\ }$은 [[nth-root]], 상극한 $\limsup$은 [[limit-superior-and-inferior]]의 것이며, 상극한은 유계인 수열에만 정의되어 있다.

$a$를 실수, $(c_n)_{n \ge 0}$을 0부터 번호가 붙은 수열이라 하고, "멱급수"는 중심이 $a$이고 계수가 $(c_n)_{n \ge 0}$인 멱급수라 하자. 자연수 $n$에서 $0 \le |c_n|$이므로 $\sqrt[n]{|c_n|}$이 정해지고, $n$번째 항이 $\sqrt[n]{|c_n|}$인 수열이 있다. 이 수열을 $\bigl(\sqrt[n]{|c_n|}\bigr)$로 쓴다. $0$번째 계수 $c_0$은 이 수열에 들어가지 않는다.

1. (**코시–아다마르 공식**, Cauchy–Hadamard formula) $\bigl(\sqrt[n]{|c_n|}\bigr)$이 유계라 하고 $L = \limsup_{n \to \infty} \sqrt[n]{|c_n|}$으로 두자. 그러면 $0 \le L$이고,
   - (i) $L = 0$이면 멱급수는 모든 실수에서 수렴하는 멱급수이다.
   - (ii) $0 < L$이면 $A$는 위로 유계이고 수렴 반지름은 $\rho = L^{-1}$이다.
2. (유계가 아닌 경우) $\bigl(\sqrt[n]{|c_n|}\bigr)$이 유계가 아니면 $A$는 위로 유계이고 수렴 반지름은 $\rho = 0$이다.
3. ($x$에서의 항의 $n$제곱근) 모든 실수 $x$와 자연수 $n$에서 $\sqrt[n]{|c_n (x - a)^n|} = \sqrt[n]{|c_n|}\;|x - a|$이다.
4. (유계가 아닌 수열의 양수배) $(z_n)$이 유계가 아닌 수열이고 $t$가 양수이면, $n$번째 항이 $t\,z_n$인 수열도 유계가 아니다.
:::

:::english
Power series, the terms at $x$, and convergence, divergence and absolute convergence at $x$ are as in the entry on power series; $A$, the radius of convergence $\rho$ and power series converging at every real number are as in the entry on the radius of convergence. Sequences and boundedness, $n$th roots $\sqrt[n]{\ }$, and the limit superior $\limsup$ are as in their entries; the limit superior is defined only for bounded sequences.

Let $a$ be a real number and $(c_n)_{n \ge 0}$ a sequence indexed from zero, and let "the power series" be the power series with center $a$ and coefficients $(c_n)_{n \ge 0}$. For every natural number $n$ we have $0 \le |c_n|$, so $\sqrt[n]{|c_n|}$ is defined and there is a sequence whose $n$th term is $\sqrt[n]{|c_n|}$. We write it $\bigl(\sqrt[n]{|c_n|}\bigr)$. The $0$th coefficient $c_0$ does not enter this sequence.

1. (**Cauchy–Hadamard formula**) Suppose $\bigl(\sqrt[n]{|c_n|}\bigr)$ is bounded and put $L = \limsup_{n \to \infty} \sqrt[n]{|c_n|}$. Then $0 \le L$, and
   - (i) if $L = 0$, the power series converges at every real number;
   - (ii) if $0 < L$, then $A$ is bounded above and the radius of convergence is $\rho = L^{-1}$.
2. (The unbounded case) If $\bigl(\sqrt[n]{|c_n|}\bigr)$ is not bounded, then $A$ is bounded above and the radius of convergence is $\rho = 0$.
3. ($n$th roots of the terms at $x$) For every real $x$ and every natural number $n$, $\sqrt[n]{|c_n (x - a)^n|} = \sqrt[n]{|c_n|}\;|x - a|$.
4. (Positive multiples of an unbounded sequence) If $(z_n)$ is an unbounded sequence and $t$ is positive, then the sequence with $n$th term $t\,z_n$ is unbounded too.
:::

## 직관

$x$에서의 항 $c_n (x - a)^n$의 $n$제곱근은 (3)에 의해 $\sqrt[n]{|c_n|}$에 거리 $|x - a|$를 곱한 것입니다. [[root-test|근 판정법]]은 이 $n$제곱근의 상극한이 $1$보다 작은지 큰지로 수렴과 발산을 가르므로, 상극한이 $L$이면 그 값은 $L\,|x - a|$입니다. $L > 0$이면 경계는 $L\,|x - a| = 1$, 곧 $|x - a| = L^{-1}$이고, 그래서 수렴 반지름은 $L$의 역수입니다.

비유하자면 계수의 $n$제곱근은 "항이 한 번 곱해질 때마다 평균적으로 몇 배씩 커지는가"를 재는 눈금입니다. $|c_n|$이 대략 $L^n$처럼 자라면 $|c_n (x - a)^n|$은 대략 $(L|x - a|)^n$처럼 자라고, 공비 $L|x - a|$가 $1$보다 작으면 수렴합니다. 비유가 맞지 않는 곳은 "평균"이라는 말입니다. 공식이 쓰는 것은 평균이 아니라 상극한, 곧 끝없이 다시 나타나는 큰 값들의 한계이고, 계수가 크게 출렁이면 그 가운데 큰 쪽만 반지름을 정합니다(아래 예시).

$L = 0$이면 어떤 거리에서도 $L|x - a| = 0 < 1$이어서 모든 실수에서 수렴하고, $\sqrt[n]{|c_n|}$이 유계가 아니면 $a$가 아닌 모든 점에서 항의 $n$제곱근도 유계가 아니어서 발산합니다. 0번째 계수 $c_0$은 반지름에 영향을 주지 않습니다.

## 증명

:::idea
(3)으로 $x$에서의 항의 $n$제곱근의 상극한이 $|x - a|\,L$임을 보이고, 근 판정법으로 거리마다 수렴과 발산을 가른 뒤 [[radius-of-convergence|수렴 반지름]]의 판정 (6)을 쓴다.
:::

:::hint
$0$번째 항은 $n$제곱근이 없으므로, $x$에서의 항 가운데 $n \ge 1$인 것만으로 된 수열에 근 판정법을 쓰고 [[series-indexed-from-zero]]의 (8)로 돌아옵니다.
:::

:::hint
$L > 0$이면 $\rho' = L^{-1}$로 두고, $|x - a| < \rho'$과 $|x - a| > \rho'$이 각각 $|x - a|\,L < 1$과 $|x - a|\,L > 1$이 됨을 보입니다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (1)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다.

**3의 증명.** [[power-series]]의 (2)에 의해 $|c_n (x - a)^n| = |c_n|\,|x - a|^n$이다. [[absolute-value|절댓값]]의 (2)와 [[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (i)에 의해 $0 \le |c_n|$이고 $0 \le |x - a|^n$이므로, [[nth-root|n제곱근]]의 (4)에 의해 $\sqrt[n]{|c_n|\,|x - a|^n} = \sqrt[n]{|c_n|}\,\sqrt[n]{|x - a|^n}$이고, 그 (2)를 $t = |x - a| \ge 0$에 쓰면 $\sqrt[n]{|x - a|^n} = |x - a|$이다.

**4의 증명.** $n$번째 항이 $t\,z_n$인 수열이 유계라고 하자. 그러면 모든 자연수 $n$에서 $|t\,z_n| \le B$인 실수 $B$가 있다. 절댓값의 (4)와 (1)에 의해 $|t\,z_n| = t\,|z_n|$이고, 순서 성질 (6)의 (i)에 의해 $0 < t^{-1}$이므로 순서 성질 (4)의 (iii)과 (K2), (K8)의 (iii), (K4)에 의해 $|z_n| = t^{-1}(t\,|z_n|) \le t^{-1} B$이다. 그러면 $(z_n)$이 유계이므로([[sequence]]의 유계의 정의) 가정과 모순이다.

**공통의 준비.** 실수 $x$가 $x \ne a$라 하고 $d = |x - a|$로 두면, (K12)의 (v)와 절댓값의 (2)에 의해 $0 < d$이다. $x$에서의 항 가운데 자연수 번호의 것으로 된 수열 $\bigl(c_n (x - a)^n\bigr)_{n \ge 1}$을 $(v_n)$이라 하자. (3)에 의해 모든 자연수 $n$에서 $\sqrt[n]{|v_n|} = d\,\sqrt[n]{|c_n|}$이다. [[series-indexed-from-zero]]의 (8)을 $K = 0$으로 쓰면, 멱급수가 $x$에서 수렴하는 것은 정확히 $(v_n)$의 급수가 수렴할 때이다. 또 $n$에서의 값이 $|c_n (x - a)^n|$인 0부터 번호가 붙은 수열에 같은 (8)을 쓰면, 멱급수가 $x$에서 절대수렴하는 것은 정확히 $(v_n)$의 급수가 [[absolute-convergence|절대수렴]]할 때이다.

**1의 증명.** $\bigl(\sqrt[n]{|c_n|}\bigr)$의 모든 항은 [[nth-root|n제곱근]]의 정의에 의해 $0$ 이상이다. [[limit-superior-and-inferior|상극한과 하극한]]의 (2)에 의해 모든 자연수 $n$에서 $0 \le \sqrt[n]{|c_n|} \le a_n$이고(여기서 $a_n$은 그 항목의 뜻이다), 상극한은 $(a_n)$의 극한이므로 [[limits-preserve-inequalities|극한과 부등식]]의 (3)에 의해 $0 \le L$이다.

$x \ne a$이고 $d$, $(v_n)$이 공통의 준비와 같다고 하자. [[root-test|근 판정법]]의 (5)를 $c = d$, $(z_n) = \bigl(\sqrt[n]{|c_n|}\bigr)$에 쓰면, $n$번째 항이 $\sqrt[n]{|v_n|} = d\,\sqrt[n]{|c_n|}$인 수열은 유계이고 그 상극한은 $d\,L$이다. 따라서 근 판정법의 (3)을 $(v_n)$에 쓸 수 있다.

- $d\,L < 1$이면 그 (3)의 (i)에 의해 $(v_n)$의 급수는 절대수렴하고, 공통의 준비에 의해 멱급수는 $x$에서 절대수렴하고 수렴한다([[power-series]]의 (4)).
- $1 < d\,L$이면 그 (3)의 (ii)에 의해 $(v_n)$의 급수는 발산하고, 공통의 준비에 의해 멱급수는 $x$에서 발산한다.

(i) $L = 0$이면 $a$가 아닌 모든 $x$에서 (K9)에 의해 $d\,L = 0 < 1$이므로 멱급수는 $x$에서 수렴하고, $x = a$에서는 [[power-series]]의 (3)에 의해 수렴한다. 멱급수가 모든 실수에서 수렴하므로 [[radius-of-convergence]]의 (4)에 의해 모든 실수에서 수렴하는 멱급수이다.

(ii) $0 < L$이면 $\rho' = L^{-1}$은 순서 성질 (6)의 (i)에 의해 양수이다. 순서 성질 (6)의 (iv)를 $c = L$에 쓰면, $d < \rho'$인 것은 정확히 $d\,L < \rho' L = 1$일 때이고, $\rho' < d$인 것은 정확히 $1 < d\,L$일 때이다((K8)의 (iii)). 따라서

- $|x - a| < \rho'$인 $x$에서: $x = a$이면 [[power-series]]의 (3)에 의해, $x \ne a$이면 $d\,L < 1$이므로 위에서 보인 것에 의해 멱급수는 수렴한다.
- $|x - a| > \rho'$인 $x$에서: $0 < \rho' < |x - a|$이므로 $x \ne a$이고, $1 < d\,L$이므로 멱급수는 발산한다.

[[radius-of-convergence]]의 (6)의 (i)에 의해 $A$는 위로 유계이고 $\rho = \rho' = L^{-1}$이다.

**2의 증명.** $x \ne a$이고 $d$, $(v_n)$이 공통의 준비와 같다고 하자. $\bigl(\sqrt[n]{|c_n|}\bigr)$이 유계가 아니고 $0 < d$이므로 (4)에 의해 $n$번째 항이 $\sqrt[n]{|v_n|} = d\,\sqrt[n]{|c_n|}$인 수열은 유계가 아니다. 근 판정법의 (4)에 의해 $(v_n)$의 급수는 발산하고, 공통의 준비에 의해 멱급수는 $x$에서 발산한다. 곧 $a$가 아닌 모든 실수에서 멱급수가 발산하므로, [[radius-of-convergence]]의 (5)에 의해 $A$는 위로 유계이고 $\rho = 0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[계수의 n제곱근이 두 값을 오가는 멱급수]
중심 $0$, 계수 $c_n = \bigl(2 + (-1)^n\bigr)^n$인 멱급수를 봅시다. [[power-of-a-real-number|실수의 거듭제곱]]의 (5)에 의해 $2 + (-1)^n$은 $n$이 짝수이면 $3$, 홀수이면 $1$이고, 둘 다 $0$ 이상이므로 [[nth-root|n제곱근]]의 (2)에 의해 $\sqrt[n]{|c_n|} = 2 + (-1)^n$입니다. 이 수열의 항은 모두 $0$ 이상 $3$ 이하이므로 유계입니다.

상극한을 계산합니다. 자연수 $n$에 대하여 $2n$은 $n$ 이상인 짝수이고 $2n + 1$은 $n$ 이상인 홀수이므로, $n$번째 항부터의 값의 집합 $S_n$은 정확히 $\{1, 3\}$입니다. $3$은 이 집합의 최댓값이므로 [[upper-bound-and-supremum|상계와 상한]]의 (2)에 의해 상한이고, [[limit-superior-and-inferior|상극한과 하극한]]의 $a_n$은 모든 $n$에서 $3$입니다. 그 항목의 (4)에 의해 $L = \inf\{a_n : n \in \mathbb{N}\} = \inf\{3\} = 3$입니다. (1)의 (ii)에 의해 수렴 반지름은 $\rho = 1/3$입니다.

계수 자체는 홀수 번째에서 $1$로 작아지지만, 짝수 번째의 큰 계수 $3^n$이 반지름을 정합니다.
:::

:::example[계수가 유한 개만 0 이 아닌 멱급수]
$n \ge 3$에서 $c_n = 0$이면 $n \ge 3$에서 $\sqrt[n]{|c_n|} = \sqrt[n]{0} = 0$입니다([[nth-root|n제곱근]]의 (1)). 처음 두 항 $\sqrt[1]{|c_1|}$, $\sqrt[2]{|c_2|}$가 무엇이든 모든 항이 $0$ 이상이고 그 둘의 최대 이하이므로 이 수열은 유계입니다. [[limit-superior-and-inferior|상극한과 하극한]]의 $a_n$은 모두 $0$ 이상이고 $n \ge 3$에서 $S_n = \{0\}$이므로 $a_3 = 0$입니다. 그래서 $0$은 $\{a_n : n \in \mathbb{N}\}$의 최솟값이고, 그 항목의 (4)와 [[upper-bound-and-supremum|상계와 상한]]의 (2)에 의해 $L = 0$입니다. (1)의 (i)에 의해 이 멱급수는 모든 실수에서 수렴하는 멱급수입니다. 어떤 번호 이후의 계수가 모두 $0$인 멱급수는 같은 계산으로 모두 그렇고, 계수가 모두 $0$인 경우도 들어갑니다.
:::

## 확인 질문

:::check[중심 $1$, 계수 $(1/2)^n$인 멱급수의 수렴 반지름과 $I$는 무엇인가?]
$\rho = 2$이고 $I = (-1, 3)$입니다. 실수의 거듭제곱의 (6)의 (i)과 절댓값의 (1)에 의해 $|(1/2)^n| = (1/2)^n$이고, n제곱근의 (2)에 의해 $\sqrt[n]{(1/2)^n} = 1/2$입니다. 상수 수열이므로 상극한의 $a_n$이 모두 $1/2$이고 그 항목의 (4)에 의해 $L = 1/2$이며, $\rho = (1/2)^{-1} = 2$입니다. [[radius-of-convergence]]의 (7)의 (i)에 의해 $I = (1 - 2, 1 + 2) = (-1, 3)$입니다.
:::

:::check[$c_0 = 100$이고 자연수 $n$에서 $c_n = 0$인 멱급수에 공식을 쓰면 무엇이 나오는가?]
$L = 0$이므로 모든 실수에서 수렴하는 멱급수입니다. 공식은 $c_0$을 쓰지 않으므로 $c_0 = 100$은 결과에 영향을 주지 않고, 자연수 $n$에서 $\sqrt[n]{0} = 0$입니다. 실제로 모든 $x$에서 항은 $100, 0, 0, \dots$이고 합은 $100$입니다.
:::
