---
title: 수렴하는 급수의 항은 0 으로 수렴한다
title_en: The Terms of a Convergent Series Tend to Zero
aliases: [급수의 발산 판정, 일반항 판정법, 항 판정법, divergence test, term test, nth term test]
kind: proposition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 수열 (x_n) 의 급수가 수렴하면 (x_n) 은 0 으로 수렴한다. 따라서 항이 0 으로 수렴하지 않으면 급수는 발산하고, 첫째 항이 0 이 아니고 공비의 절댓값이 1 이상인 등비급수는 발산한다. 역은 성립하지 않는다.
requires: [proof-by-contradiction, contrapositive-law, natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, real-order-axioms, order-properties-of-reals, archimedean-property, square-root-exists, absolute-value, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, basic-limits, convergent-sequence-is-bounded, tail-of-a-sequence, comparison-with-null-sequence, limit-of-sum-and-product, series-and-partial-sums, geometric-series]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.5.3절 Proposition 2.5.9 와 그 증명, Example 2.5.10 과 그 뒤 문단 (p.90)
    checked: original
    note: "출처의 Proposition 2.5.9(p.90)는 급수가 수렴하면 {x_n} 이 수렴하고 lim x_n = 0 이라는 것이다. 출처는 수렴하는 급수가 코시 급수라는 것(2.5.2절)을 쓰고, 코시 판정에서 k = n + 1 로 두어 |x_{n+1}| < ε 을 얻는다. 이 항목은 코시 수열을 쓰지 않고, x_{n+1} = s_{n+1} − s_n(series-and-partial-sums 의 (2))과 부분합 수열의 1-꼬리(tail-of-a-sequence 의 (1)), 극한의 차(limit-of-sum-and-product 의 (2))로 증명한다. (2)(대우)는 출처가 Example 2.5.10 뒤에 'So if a series converges, the terms of the series go to zero'라고 적고 Proposition 2.5.19 의 증명(p.96)에서 쓰는 것을 진술로 올린 것이다. (3)은 출처의 Example 2.5.10(p.90, r ≥ 1 이거나 r ≤ −1 이면 첨자 0 부터의 rⁿ 의 급수는 |rⁿ| = |r|ⁿ ≥ 1 이어서 발산한다)을 명제로 올리고 첫째 항 a 를 둔 것이며, 증명도 같은 경로이다. a = 0 인 경우와 '정확히 |r| < 1 일 때'라는 맺음은 이 사이트가 덧붙였다. 출처는 역이 성립하지 않음을 조화급수(Example 2.5.11, p.90)로 보인다. 이 항목의 (4)는 n 번째 항이 √(n+1) − √n 인 수열로 보이며, 이 수열은 출처에 없다(검색한 범위). 출처는 p.85(Remark 2.4.6 뒤 문단)에서 이웃한 두 항의 차가 0 으로 가도 발산하는 수열이 있다고 적고 조화급수의 부분합을 그 예로 예고한다. (4)의 부분합 수열 √(n+1) − 1 도 그런 수열이다. 예시 '공비가 −1 인 등비급수'는 Example 2.5.10 의 r = −1 인 경우이다. 예시 '항이 1 로 수렴하는 수열'의 급수는 출처에 없다(수열 (n+1)/n 은 출처 연습문제 2.1.10(p.59)에 수열로 나온다). 반례는 출처의 Example 2.5.4(p.88, 1/2ⁿ 의 급수)와 같은 급수를 쓴다. 확인 질문 2 의 (−1)ⁿ/n 은 출처가 p.93 과 연습문제 2.5.8(p.98)에서 수렴을 보이라고 하는 급수의 항이다. 확인 질문 1 은 출처에 없다(검색한 범위)."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 증명의 수학 오류 없음. Σ 와 유한 합 없이 재귀로 정한 부분합으로 증명. 첫째 항이 0 인 경우를 빼먹은 설명 문장과 출처 메모를 고침"
added: 2026-11-17
---

:::statement
수열, 유계, 수렴, 발산과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, 부분합 수열, 급수의 수렴과 발산, 급수의 합은 [[series-and-partial-sums]]의 것이며, 등비급수는 [[geometric-series]]의 것이다. 제곱근 $\sqrt{a}$($0 \le a$)는 [[square-root-exists]]의 것이다. $(x_n)$을 수열이라 하자.

1. $(x_n)$의 급수가 수렴하면 $(x_n)$은 $0$으로 수렴한다. 곧 $\lim_{n \to \infty} x_n = 0$이다.
2. (대우) $(x_n)$이 $0$으로 수렴하지 않으면 $(x_n)$의 급수는 발산한다. 특히 $(x_n)$이 발산하거나 $0$이 아닌 실수로 수렴하면 $(x_n)$의 급수는 발산한다.
3. (공비의 절댓값이 $1$ 이상인 등비급수) $a$, $r$이 실수이고 $a \ne 0$, $1 \le |r|$이면, 첫째 항이 $a$이고 공비가 $r$인 등비급수는 발산한다. 따라서 $a \ne 0$이면 이 등비급수가 수렴하는 것은 정확히 $|r| < 1$일 때이다. $a = 0$이면 모든 실수 $r$에서 이 등비급수는 수렴하고 그 합은 $0$이다.
4. ((1)의 역은 성립하지 않는다) $n$번째 항이 $\sqrt{n+1} - \sqrt{n}$인 수열 $(x_n)$은 $0$으로 수렴한다. 그러나 그 부분합은 모든 자연수 $n$에서 $s_n = \sqrt{n+1} - 1$이고, 부분합 수열 $(s_n)$은 유계가 아니어서 $(x_n)$의 급수는 발산한다.
:::

:::english
Sequences, boundedness, convergence, divergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, on the limit of a sequence, and on uniqueness of limits; sequences of partial sums, convergence and divergence of series, and sums of series are those of the entry on series and partial sums; and geometric series are those of the entry on geometric series. The square root $\sqrt{a}$ ($0 \le a$) is that of the entry on the existence of square roots. Let $(x_n)$ be a sequence.

1. If the series of $(x_n)$ converges, then $(x_n)$ converges to $0$; that is, $\lim_{n \to \infty} x_n = 0$.
2. (Contrapositive) If $(x_n)$ does not converge to $0$, then the series of $(x_n)$ diverges. In particular, if $(x_n)$ diverges or converges to a nonzero real number, then the series of $(x_n)$ diverges.
3. (Geometric series with ratio of absolute value at least $1$) If $a$ and $r$ are real numbers with $a \ne 0$ and $1 \le |r|$, then the geometric series with first term $a$ and common ratio $r$ diverges. Hence, for $a \ne 0$, this geometric series converges exactly when $|r| < 1$. If $a = 0$, this geometric series converges for every real number $r$, and its sum is $0$.
4. (The converse of (1) fails) The sequence $(x_n)$ whose $n$th term is $\sqrt{n+1} - \sqrt{n}$ converges to $0$. However, its partial sums are $s_n = \sqrt{n+1} - 1$ for every natural number $n$, and the sequence of partial sums $(s_n)$ is not bounded, so the series of $(x_n)$ diverges.
:::

## 직관

물통에 날마다 물을 붓는데 물의 양이 어떤 높이에 머문다면, 날마다 붓는 양은 결국 거의 $0$이어야 합니다. 날마다 일정량 이상을 계속 붓는다면 물은 한없이 차오를 것이기 때문입니다. 날마다 붓는 양이 항 $x_n$, 물의 양이 부분합 $s_n$입니다. 수식으로는 $x_{n+1} = s_{n+1} - s_n$이고, 부분합 수열이 수렴하면 이웃한 두 부분합이 같은 극한으로 다가가므로 그 차가 $0$으로 갑니다. 비유가 맞지 않는 곳은 항이 음수일 수 있다는 점(물을 퍼내는 날)입니다. 그래도 증명은 부호에 기대지 않습니다.

이 항목은 급수가 발산함을 보이는 데 주로 쓰입니다. 항이 $0$으로 가지 않으면 더 볼 것 없이 발산합니다((2)). 첫째 항이 $0$이 아니고 공비의 절댓값이 $1$ 이상인 등비급수가 그런 예입니다((3)).

거꾸로 항이 $0$으로 간다고 급수가 수렴하지는 않습니다((4)). 항이 아무리 작아져도, 줄어드는 속도가 느리면 부분합은 끝없이 커질 수 있습니다. (4)의 항은 $\sqrt{n+1}$과 $\sqrt{n}$의 차여서 점점 작아지지만, 부분합은 앞뒤 항이 지워져 $\sqrt{n+1} - 1$이 되고 이것은 어떤 수도 넘어섭니다.

## 증명

:::idea
$x_{n+1} = s_{n+1} - s_n$이다. $(s_n)$이 $S$로 수렴하면 그 $1$-꼬리 $(s_{n+1})$도 $S$로 수렴하므로, 차는 $S - S = 0$으로 수렴한다. 이것은 $(x_n)$의 $1$-꼬리이다.
:::

:::hint
$n$번째 항이 $s_{n+1} - s_n$인 수열은 $n$번째 항이 $x_{n+1}$인 수열과 같다. 수열의 꼬리가 수렴하면 수열도 같은 극한으로 수렴한다.
:::

:::hint
(4)에서는 $(\sqrt{n+1} - \sqrt{n})(\sqrt{n+1} + \sqrt{n}) = 1$을 쓰고, 부분합은 [[series-and-partial-sums|급수와 부분합]]의 (1)로 알아본다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (1)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (2)"는 [[absolute-value]]의 번호, "거듭제곱 (4)"는 [[power-of-a-real-number]]의 번호, "부분합 (1)"은 [[series-and-partial-sums]]의 번호, "꼬리 (1)"은 [[tail-of-a-sequence]]의 번호, "사칙연산 (2)"는 [[limit-of-sum-and-product]]의 번호이다. 자연수는 양의 정수이고([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]), 정수끼리의 합과 차는 정수이며([[even-and-odd]]), 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)을 쓰고, 순서 성질 (10)에 의해 이것들을 실수의 부등식으로 써도 된다. $(s_n)$은 $(x_n)$의 부분합 수열이다.

**1의 증명.** $(x_n)$의 급수가 수렴하므로 $(s_n)$은 어떤 실수 $S$로 수렴한다. 꼬리 (1)에 의해 $(s_n)$의 $1$-꼬리, 곧 $n$번째 항이 $s_{n+1}$인 수열도 $S$로 수렴한다. 사칙연산 (2)에 의해 $n$번째 항이 $s_{n+1} - s_n$인 수열은 $S - S$로 수렴하고, (K8)의 (ii)에 의해 $S - S = 0$이다. 부분합 (2)에 의해 모든 자연수 $n$에서 $s_{n+1} - s_n = x_{n+1}$이므로, [[sequence]]의 수열의 같음에 의해 이 수열은 $n$번째 항이 $x_{n+1}$인 수열, 곧 $(x_n)$의 $1$-꼬리이다. 꼬리 (1)에 의해 $(x_n)$은 $0$으로 수렴한다.

**2의 증명.** (1)은 "$(x_n)$의 급수가 수렴하면 $(x_n)$은 $0$으로 수렴한다"이고, (2)의 첫 문장은 그 대우이므로 [[contrapositive-law|대우 법칙]]에 의해 (1)과 논리적으로 동치이다. 급수가 발산한다는 것은 급수가 수렴하지 않는다는 것이다. $(x_n)$이 발산하면 [[limit-of-sequence]]의 정의에 의해 어떤 실수로도 수렴하지 않으므로 $0$으로 수렴하지 않는다. $(x_n)$이 실수 $L \ne 0$으로 수렴하면, $0$으로도 수렴한다고 할 때 [[limit-is-unique]]에 의해 $L = 0$이 되어 모순이므로 $0$으로 수렴하지 않는다. 두 경우 모두 첫 문장에 의해 급수는 발산한다.

**3의 증명.** [[geometric-series]]의 진술에 의해 등비급수는 $n$번째 항이 $x_n = a r^{n-1}$인 수열의 급수이고, $n - 1$은 $0$ 이상인 정수이다.

$a \ne 0$이고 $1 \le |r|$이라 하자. 절댓값 (4)와 거듭제곱 (4)에 의해 $|x_n| = |a|\,|r^{n-1}| = |a|\,|r|^{n-1}$이다. 순서 성질 (5)의 (ii)의 $0 < 1$과 $\le$의 정의에 의해 $0 \le 1 \le |r|$이므로 거듭제곱 (6)의 (ii)에 의해 $1^{n-1} \le |r|^{n-1}$이고, 거듭제곱 (2)의 (iv)에 의해 $1^{n-1} = 1$이다. 절댓값 (2)에 의해 $0 \le |a|$이므로 순서 성질 (4)의 (iii)과 (K4)에 의해 $|a| = |a| \cdot 1 \le |a|\,|r|^{n-1} = |x_n|$이다. 곧 모든 자연수 $n$에서 $|x_n - 0| = |x_n| \ge |a|$이다((K4), (K8)의 (ii)에 의해 $x_n - 0 = x_n$). 절댓값 (2)에 의해 $a \ne 0$이면 $|a| \ne 0$이므로 $\le$의 정의([[real-order-axioms]])에 의해 $0 < |a|$이다. 따라서 $\varepsilon = |a|$로 두면 모든 자연수 $M$에서 $n = M$이 $n \ge M$이고 $|x_n - 0| \ge \varepsilon$을 만족하므로, [[limit-of-sequence]]의 (2)에 의해 $(x_n)$은 $0$으로 수렴하지 않는다. (2)에 의해 등비급수는 발산한다.

$a \ne 0$일 때의 둘째 문장. $|r| < 1$이면 [[geometric-series]]의 (2)에 의해 수렴한다. 거꾸로 수렴한다고 하자. 순서 성질 (1)의 (iii)에 의해 "$|r| < 1$"이 성립하지 않으면 $1 \le |r|$이고, 그러면 방금 보인 것에 의해 발산하므로 모순이다. 따라서 $|r| < 1$이다.

$a = 0$이면 (K9)에 의해 모든 $n$에서 $x_n = 0 \cdot r^{n-1} = 0$이다. 모든 항이 $0$인 수열 $(v_n)$은 $v_1 = 0 = x_1$이고 (K4)에 의해 $v_{n+1} = 0 = 0 + 0 = v_n + x_{n+1}$이므로, 부분합 (1)에 의해 모든 부분합이 $0$이다. [[basic-limits]]의 (1)에 의해 급수는 수렴하고 합은 $0$이다.

**4의 증명.** 자연수 $n$에 대하여 $p_n = \sqrt{n+1}$, $q_n = \sqrt{n}$으로 둔다. $0 < n < n + 1$이므로 [[square-root-exists|제곱근의 존재]]의 (1)에 의해 $p_n$, $q_n$은 실수이고 $0 < p_n$, $0 < q_n$이다. [[sequence]]의 (1)에 의해 $x_n = p_n - q_n$인 수열이 있다.

*항의 꼴.* (K1), (K3), (K9), (K12)의 (i)과 (K8)의 (ii), (K4)로 정리하면
$$
(p_n - q_n)(p_n + q_n) = p_n p_n + p_n q_n - q_n p_n - q_n q_n = p_n p_n - q_n q_n = (n + 1) - n = 1
$$
이다. 순서 성질 (2)의 (iv)에 의해 $0 = 0 + 0 < p_n + q_n$이고, 순서 성질 (1)의 (i)에 의해 $p_n + q_n \ne 0$이다. (K1)과 (K8)의 (iii)에 의해 $(p_n + q_n)x_n = 1$인 실수는 $(p_n + q_n)^{-1}$뿐이므로 $x_n = (p_n + q_n)^{-1}$이고, 순서 성질 (6)의 (i)에 의해 $0 < x_n$이다.

*항은 $0$으로 수렴한다.* 양의 실수 $\varepsilon$을 잡는다. 순서 성질 (6)의 (i)에 의해 $0 < \varepsilon^{-1}$이다. [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $\varepsilon^{-1}\varepsilon^{-1} < N$인 자연수 $N$이 있다. $n \ge N$인 자연수 $n$을 잡으면 순서 성질 (1)의 (v)에 의해 $\varepsilon^{-1}\varepsilon^{-1} < n = q_n q_n$이고, $0 \le \varepsilon^{-1}$, $0 \le q_n$이므로 순서 성질 (7)의 (iii)에 의해 $\varepsilon^{-1} < q_n$이다. $0 < p_n$이므로 순서 성질 (2)의 (ii)와 (K1), (K4)에 의해 $q_n < q_n + p_n = p_n + q_n$이고, 순서 성질 (1)의 (v)에 의해 $0 < \varepsilon^{-1} < p_n + q_n$이다. 순서 성질 (6)의 (ii)에 의해 $(p_n + q_n)^{-1} < (\varepsilon^{-1})^{-1}$이고, $\varepsilon^{-1}\varepsilon = 1$((K1), (K8)의 (iii))이므로 (K8)의 (iii)에 의해 $(\varepsilon^{-1})^{-1} = \varepsilon$이다. 따라서 절댓값 (1)에 의해 $|x_n - 0| = x_n < \varepsilon$이다. $(x_n)$은 $0$으로 수렴한다.

*부분합.* $1 \cdot 1 = 1$이고 $0 \le 1$이므로 [[square-root-exists|제곱근의 존재]]의 (1)의 유일성에 의해 $\sqrt{1} = 1$이다. $n$번째 항이 $v_n = p_n - 1$인 수열 $(v_n)$을 생각한다. $v_1 = \sqrt{2} - 1 = \sqrt{2} - \sqrt{1} = x_1$이다. 자연수 $n$에서 $n + 1$은 자연수이고 $(n + 1) + 1 = n + 2$이므로 $x_{n+1} = \sqrt{n+2} - \sqrt{n+1}$이고, (K1), (K2), (K8)의 (ii), (K4)로 정리하면
$$
v_n + x_{n+1} = \bigl(\sqrt{n+1} - 1\bigr) + \bigl(\sqrt{n+2} - \sqrt{n+1}\bigr) = \sqrt{n+2} - 1 = v_{n+1}
$$
이다. 부분합 (1)에 의해 모든 자연수 $n$에서 $s_n = v_n = \sqrt{n+1} - 1$이다.

*부분합 수열은 유계가 아니다.* $(s_n)$이 유계라고 가정하고([[proof-by-contradiction|귀류법]]), 모든 자연수 $n$에서 $|s_n| \le B$인 실수 $B$를 잡는다. 절댓값 (6)과 순서 성질 (1)의 (v)에 의해 모든 $n$에서 $\sqrt{n+1} - 1 \le B$이고, 순서 성질 (2)의 (i)로 양변에 $1$을 더하면 (K1), (K2), (K8)의 (ii), (K4)에 의해 $\sqrt{n+1} \le B + 1$이다. 절댓값 (2)에 의해 $0 \le |s_1| \le B$이고 순서 성질 (5)의 (ii)에 의해 $0 < 1$이므로, 순서 성질 (2)의 (iv)에 의해 $0 < B + 1$이다. 아르키메데스 성질 (1)에 의해 $(B + 1)(B + 1) < m$인 자연수 $m$이 있다. $0 \le \sqrt{m+1} \le B + 1$이므로 순서 성질 (7)의 (ii)에 의해
$$
m + 1 = \sqrt{m+1}\,\sqrt{m+1} \le (B + 1)(B + 1) < m
$$
이고, 순서 성질 (1)의 (v)에 의해 $m + 1 < m$이다. 그런데 (L3)과 순서 성질 (10)에 의해 $m < m + 1$이므로 순서 성질 (1)의 (i)에 어긋난다. 따라서 $(s_n)$은 유계가 아니다. [[convergent-sequence-is-bounded|수렴하는 수열이 유계라는 정리]]의 (2)에 의해 수렴하는 수열은 유계이므로 $(s_n)$은 수렴하지 않고, $(x_n)$의 급수는 발산한다. $\blacksquare$
:::

## 예시와 반례

:::example[항이 $1$로 수렴하는 수열]
$n$번째 항이 $x_n = 1 + n^{-1}$인 수열의 급수를 봅니다. [[basic-limits]]의 (1), (2)와 [[limit-of-sum-and-product|극한의 사칙연산]]의 (1)에 의해 $(x_n)$은 $1 + 0 = 1$로 수렴하고, (K4)에 의해 $1 \ne 0$이므로 이 항목의 (2)에 의해 급수는 발산합니다. 수열 $(x_n)$ 자신은 수렴하지만 그 급수는 발산합니다. 수열이 수렴하는 것과 그 급수가 수렴하는 것은 다른 일입니다.
:::

:::example[공비가 $-1$인 등비급수]
첫째 항이 $1$이고 공비가 $-1$인 등비급수는 $|-1| = 1$이므로([[absolute-value|절댓값]]의 (3), (1)) 이 항목의 (3)에 의해 발산합니다. [[geometric-series|등비급수]]의 (1)에 의해 부분합은 $s_n = \dfrac{1 - (-1)^n}{1 - (-1)} = \dfrac{1 - (-1)^n}{2}$이고, [[power-of-a-real-number|실수의 거듭제곱]]의 (5)에 의해 $n$이 홀수이면 $1$, 짝수이면 $0$입니다. 부분합은 $0$과 $1$ 사이에 머물러 유계이지만 항 $(-1)^{n-1}$이 $0$으로 가지 않으므로 급수는 수렴하지 않습니다.
:::

:::counterexample[항이 모두 $0$이 아니어도 급수는 수렴할 수 있다]
(2)를 "항 가운데 $0$이 아닌 것이 있으면 발산한다"로 잘못 읽으면 안 됩니다. 첫째 항과 공비가 모두 $2^{-1}$인 등비급수는 [[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (i)에 의해 모든 항 $2^{-1}(2^{-1})^{n-1}$이 양수이지만, $0 < 2^{-1} < 1$이므로 [[geometric-series|등비급수]]의 (2)에 의해 수렴합니다. (2)가 요구하는 것은 항 하나하나가 $0$인 것이 아니라 항의 수열이 $0$으로 수렴하지 않는 것입니다.
:::

## 확인 질문

:::check[$(x_n)$의 급수가 수렴하면 $(x_n)$은 유계인가?]
유계입니다. (1)에 의해 $(x_n)$은 $0$으로 수렴하고, [[convergent-sequence-is-bounded|수렴하는 수열이 유계라는 정리]]의 (2)에 의해 수렴하는 수열은 유계입니다.
:::

:::check[$n$번째 항이 $(-1)^n n^{-1}$인 수열의 급수가 수렴하는지를 이 항목만으로 판정할 수 있는가?]
판정할 수 없습니다. [[power-of-a-real-number|실수의 거듭제곱]]의 (5)에 의해 $(-1)^n$은 $1$이거나 $-1$이므로 [[absolute-value|절댓값]]의 (3), (1)에 의해 $|(-1)^n| = 1$이고, 절댓값의 (4), (1)과 [[order-properties-of-reals]]의 (10), (6)의 (i)에 의해 $|(-1)^n n^{-1}| = 1 \cdot n^{-1} = n^{-1}$이며, [[basic-limits]]의 (2)와 [[comparison-with-null-sequence|0 으로 가는 수열과의 비교]]의 (2)에 의해 이 수열은 $0$으로 수렴하므로 (2)를 쓸 수 없습니다. (1)은 한 방향만 말하고, (4)는 항이 $0$으로 수렴해도 급수가 발산할 수 있음을 보이며, [[geometric-series|등비급수]]의 (2)는 항이 $0$으로 수렴하면서 급수가 수렴하는 예를 줍니다. 항이 $0$으로 수렴한다는 사실만으로는 어느 쪽인지 정해지지 않습니다.
:::
