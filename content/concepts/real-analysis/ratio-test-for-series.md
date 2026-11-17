---
title: 급수의 비 판정법
title_en: Ratio Test for Series
aliases: [비 판정법, 비율 판정법, ratio test, d'Alembert ratio test]
kind: proposition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 어떤 번호부터 |x_{n+1}| ≤ r|x_n| 이고 0 ≤ r < 1 이면 (x_n) 의 급수는 절대수렴한다. 항이 0 이 아니고 |x_{n+1}|·|x_n|⁻¹ 이 L 로 수렴하면, L < 1 일 때 절대수렴하고 L > 1 일 때 발산한다. L = 1 이면 이 판정법으로는 정할 수 없다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, basic-limits, limits-preserve-inequalities, tail-of-a-sequence, limit-of-sum-and-product, ratio-test-for-sequences, series-and-partial-sums, tail-of-a-series, geometric-series, terms-of-convergent-series-tend-to-zero, harmonic-series-diverges, comparison-test, absolute-convergence]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.5.6절 Proposition 2.5.19 와 그 증명 (p.96–97), 연습문제 2.5.6 (p.98)
    checked: original
    note: "출처의 Proposition 2.5.19(p.96)는 모든 n 에서 x_n ≠ 0 이고 L = lim |x_{n+1}|/|x_n| 이 있을 때 (i) L < 1 이면 절대수렴하고 (ii) L > 1 이면 발산한다는 것이다. 출처는 (ii)를 Lemma 2.2.12(이 사이트의 ratio-test-for-sequences 의 (2))와 '항이 0 으로 가는 것이 급수가 수렴하기 위한 필요조건'으로 보이고, (i)은 L < r < 1 인 r 을 골라 n > M 에서 |x_n| < |x_M| r^{−M} rⁿ 을 비의 곱(망원 곱)과 음의 지수로 보인 뒤, 부분합을 첨자 M 까지와 그 뒤로 쪼개 등비급수로 누른다. 이 항목은 r = (L + 1)/2 로 정하고(고르지 않는다), ratio-test-for-sequences 의 (3)(|x_{M+j}| ≤ |x_M| rʲ)으로 (|x_n|) 의 M-꼬리를 첫째 항이 |x_M| r 이고 공비가 r 인 등비급수와 비교하며(comparison-test 의 (2), geometric-series 의 (2)), tail-of-a-series 의 (2)로 돌아온다. 유한 합의 쪼개기, 망원 곱, 음의 지수는 쓰지 않는다. (1)은 출처의 연습문제 2.5.6 a)(p.98, 어떤 N 과 ρ < 1 이 있어 n ≥ N 에서 |x_{n+1}|/|x_n| < ρ 이면 절대수렴)를 나눗셈 없이 |x_{n+1}| ≤ r|x_n| 꼴로 쓴 것이고, 항이 0 이 아니라는 가정이 필요 없다. (4)는 연습문제 2.5.6 b)(비가 n ≥ N 에서 1 이상이면 발산)를 같은 꼴로 쓰고 x_M ≠ 0 을 가정에 넣은 것이다. (5)는 출처에 급수에 대해서는 없다(검색한 범위). 출처는 수열의 비 판정법(Lemma 2.2.12) 뒤 p.69 에서 L = 1 이면 아무것도 말할 수 없다고 하고 그 예로 수열 {1/n} 등을 든다. 출처의 Example 2.5.20(2ⁿ/n!)은 계승을 쓰므로 싣지 않았다. 예시 'n(2⁻¹)ⁿ'의 급수는 출처의 연습문제 2.6.5 b)(p.110, 거듭제곱급수 Σ n xⁿ)에서 x = 1/2 인 경우이다. 반례와 확인 질문은 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
수열, 수렴, 발산과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, 절댓값은 [[absolute-value]], 거듭제곱은 [[power-of-a-real-number]]의 것이며, 급수의 수렴과 발산은 [[series-and-partial-sums]], 절대수렴은 [[absolute-convergence]]의 것이다. $(x_n)$을 수열이라 하자.

1. (어떤 번호부터 비가 $r$ 이하인 경우) $0 \le r < 1$인 실수 $r$과 자연수 $M$이 있어 $M$ 이상인 모든 자연수 $n$에서 $|x_{n+1}| \le r\,|x_n|$이면, $(x_n)$의 급수는 절대수렴하고, 따라서 수렴한다.

아래 (2), (3), (5)에서는 모든 자연수 $n$에서 $x_n \ne 0$이라 하고, $n$번째 항이 $q_n = |x_{n+1}|\,|x_n|^{-1}$인 수열 $(q_n)$([[ratio-test-for-sequences]]의 진술)이 실수 $L$로 수렴한다고 하자.

2. (**급수의 비 판정법**, ratio test) $L < 1$이면 $(x_n)$의 급수는 절대수렴한다.
3. $L > 1$이면 $(x_n)$의 급수는 발산한다.
4. (어떤 번호부터 비가 $1$ 이상인 경우) 자연수 $M$이 있어 $x_M \ne 0$이고 $M$ 이상인 모든 자연수 $n$에서 $|x_{n+1}| \ge |x_n|$이면, $(x_n)$은 $0$으로 수렴하지 않고 $(x_n)$의 급수는 발산한다.
5. ($L = 1$이면 정할 수 없다) $n$번째 항이 $n^{-1}$인 수열과 $(n^2)^{-1}$인 수열은 둘 다 $L = 1$이다. 앞의 것의 급수는 발산하고 뒤의 것의 급수는 수렴한다.
:::

:::english
Sequences, convergence, divergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, on the limit of a sequence, and on uniqueness of limits; the absolute value and powers are those of the entries on absolute value and on powers of a real number; convergence and divergence of series are those of the entry on series and partial sums, and absolute convergence is that of the entry on absolute convergence. Let $(x_n)$ be a sequence.

1. (Ratio at most $r$ from some index on) If there are a real number $r$ with $0 \le r < 1$ and a natural number $M$ such that $|x_{n+1}| \le r\,|x_n|$ for every natural number $n \ge M$, then the series of $(x_n)$ converges absolutely, and hence converges.

In (2), (3) and (5) below, assume $x_n \ne 0$ for every natural number $n$, and that the sequence $(q_n)$ whose $n$th term is $q_n = |x_{n+1}|\,|x_n|^{-1}$ (as in the statement of the ratio test for sequences) converges to a real number $L$.

2. (**Ratio test**) If $L < 1$, the series of $(x_n)$ converges absolutely.
3. If $L > 1$, the series of $(x_n)$ diverges.
4. (Ratio at least $1$ from some index on) If there is a natural number $M$ with $x_M \ne 0$ and $|x_{n+1}| \ge |x_n|$ for every natural number $n \ge M$, then $(x_n)$ does not converge to $0$ and the series of $(x_n)$ diverges.
5. (No conclusion when $L = 1$) The sequences whose $n$th terms are $n^{-1}$ and $(n^2)^{-1}$ both have $L = 1$. The series of the former diverges and the series of the latter converges.
:::

## 직관

등비급수는 이웃한 두 항의 비가 언제나 공비 $r$이고, $|r| < 1$이면 수렴합니다. 비 판정법은 비가 정확히 일정하지 않아도 어느 번호부터 $1$보다 작은 수 $r$ 이하이기만 하면, 그 뒤의 항이 등비급수의 항으로 눌린다는 것입니다. 빚이 매달 이전 달의 $r$배 이하로 줄어든다면 남은 빚을 모두 합쳐도 등비급수의 합을 넘지 않는 것과 같습니다. 비유가 맞는 곳은 "어느 달부터"로, 처음 몇 달의 빚은 수렴에 상관이 없습니다([[tail-of-a-series|급수의 꼬리]]).

비의 극한 $L$이 $1$보다 작으면 $L$과 $1$ 사이의 수 $r$을 잡을 수 있고, 어느 번호부터 비가 $r$보다 작으므로 (1)에 들어갑니다. $L > 1$이면 항이 커져서 $0$으로 가지 않으므로 발산합니다. 증명에서 $r$은 고르지 않고 $(L + 1)/2$로 정합니다. $L = 1$이면 비가 $1$에 다가가는 것만으로는 항이 얼마나 빨리 줄어드는지 알 수 없어서, 수렴하는 예와 발산하는 예가 모두 있습니다((5)).

## 증명

:::idea
(1): [[ratio-test-for-sequences|수열의 비 판정법]]의 (3)으로 $|x_{M+n}| \le (|x_M| r) r^{n-1}$을 얻고, $(|x_n|)$의 $M$-꼬리를 등비급수와 비교한다. (2): $r = (L + 1)/2$로 두면 어느 번호부터 $q_n < r$이다. (3), (4): 항이 $0$으로 가지 않는다.
:::

:::hint
$(|x_n|)$의 $M$-꼬리의 $n$번째 항은 $|x_{n+M}|$이고, 첫째 항이 $|x_M| r$이고 공비가 $r$인 등비급수의 $n$번째 항은 $(|x_M| r) r^{n-1} = |x_M| r^n$이다.
:::

:::hint
$|q_n - L| < r - L$이면 $q_n < r$이고, $|x_n| > 0$이므로 $|x_{n+1}| = q_n |x_n| < r|x_n|$이다.
:::

:::proof
(K…)는 [[real-number-arithmetic]], "순서 성질 (1)"처럼 쓴 것은 [[order-properties-of-reals]], "절댓값 (2)"는 [[absolute-value]], "거듭제곱 (2)"는 [[power-of-a-real-number]], "수열의 비 판정법 (3)"은 [[ratio-test-for-sequences]]의 번호이다. 자연수는 양의 정수이고([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]), 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)을 쓰며, 순서 성질 (10)에 의해 이것들을 실수의 부등식으로 써도 된다.

**1의 증명.** 수열의 비 판정법 (3)에 의해 $0$ 이상인 모든 정수 $j$에서 $|x_{M+j}| \le |x_M|\,r^j$이다. 자연수 $n$에 $j = n$을 쓰면 $|x_{n+M}| \le |x_M|\,r^n$이고, $n - 1 \ge 0$이므로 거듭제곱 (2)의 (i)과 (1)에 의해 $r^n = r^{1 + (n-1)} = r\,r^{n-1}$이어서 (K2)에 의해 $|x_M|\,r^n = (|x_M|\,r)\,r^{n-1}$이다.

$(|x_n|)$(절댓값의 수열)의 $M$-꼬리([[tail-of-a-sequence]])의 $n$번째 항은 $|x_{n+M}|$이고, 절댓값 (2)에 의해 $0 \le |x_{n+M}| \le (|x_M|\,r)\,r^{n-1}$이다. 오른쪽은 첫째 항이 $|x_M|\,r$이고 공비가 $r$인 등비급수의 $n$번째 항이며, $0 \le r$이므로 절댓값 (1)에 의해 $|r| = r < 1$이어서 [[geometric-series|등비급수]]의 (2)에 의해 그 급수는 수렴한다. [[comparison-test|비교 판정법]]의 (2)에 의해 $(|x_n|)$의 $M$-꼬리의 급수가 수렴하고, [[tail-of-a-series|급수의 꼬리]]의 (2)에 의해 $(|x_n|)$의 급수가 수렴한다. 곧 $(x_n)$의 급수는 절대수렴하고, [[absolute-convergence|절대수렴]]의 (1)에 의해 수렴한다.

**2의 증명.** 모든 $n$에서 절댓값 (2)와 순서 성질 (6)의 (i), (4)의 (iv)에 의해 $0 \le q_n$이므로 [[limits-preserve-inequalities|극한과 부등식]]의 (3)에 의해 $0 \le L$이다. $r = (L + 1) \cdot 2^{-1}$로 두면 $L < 1$이므로 순서 성질 (8)에 의해 $L < r < 1$이고, 순서 성질 (1)의 (v)에 의해 $0 \le L < r$에서 $0 \le r$이다. 순서 성질 (3)의 (i)에 의해 $0 < r - L$이므로, [[limit-of-sequence]]의 정의에 의해 $M$ 이상인 모든 자연수 $n$에서 $|q_n - L| < r - L$인 자연수 $M$이 있다. 그런 $n$에서 절댓값 (8)에 의해 $q_n < L + (r - L) = r$이다((K1), (K2), (K8)의 (ii), (K4)). 절댓값 (2)와 $x_n \ne 0$에 의해 $0 < |x_n|$이고, (K2), (K8)의 (iii), (K4)에 의해 $q_n |x_n| = |x_{n+1}|\bigl(|x_n|^{-1}|x_n|\bigr) = |x_{n+1}|$이므로, 순서 성질 (4)의 (i)에 의해 $|x_{n+1}| = q_n|x_n| < r|x_n|$이다. 따라서 $|x_{n+1}| \le r|x_n|$이고, (1)에 의해 $(x_n)$의 급수는 절대수렴한다.

**3의 증명.** 수열의 비 판정법 (2)에 의해 $(x_n)$은 유계가 아니고 발산한다. 발산하는 수열은 $0$으로 수렴하지 않으므로, [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (2)에 의해 $(x_n)$의 급수는 발산한다.

**4의 증명.** 수열의 비 판정법 (3)의 둘째 문장을 $r = 1$에 쓰면, 거듭제곱 (2)의 (iv)와 (K4)에 의해 $0$ 이상인 모든 정수 $j$에서 $|x_{M+j}| \ge |x_M| \cdot 1^j = |x_M|$이다. 절댓값 (2)와 $x_M \ne 0$에 의해 $0 < |x_M|$이다. $\varepsilon = |x_M|$로 두고 자연수 $N$을 잡으면, $n = M + N$은 $0 < M$과 (Z7)에 의해 $n > N$이고 $|x_n - 0| = |x_{M+N}| \ge \varepsilon$이다((K4), (K8)의 (ii)). [[limit-of-sequence]]의 (2)에 의해 $(x_n)$은 $0$으로 수렴하지 않고, [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (2)에 의해 급수는 발산한다.

**5의 증명.** $x_n = n^{-1}$이면 모든 $n$에서 $x_n > 0$이고 절댓값 (1)과 (K8)의 (iii)에 의해 $|x_n|^{-1} = (n^{-1})^{-1} = n$이므로 $q_n = (n+1)^{-1} n$이다. (K12)의 (i)과 (K8)의 (iii), (K9)에 의해 $(n+1)^{-1} n = (n+1)^{-1}\bigl((n + 1) - 1\bigr) = 1 - (n+1)^{-1}$이다. [[basic-limits]]의 (2)와 [[tail-of-a-sequence|수열의 꼬리]]의 (1)에 의해 $\bigl((n+1)^{-1}\bigr)$은 $0$으로 수렴하므로, [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)를 두 번 써서((K9)) $(q_n)$은 $1$로 수렴한다. 이 급수는 [[harmonic-series-diverges|조화급수의 발산]]의 (2)에 의해 발산한다.

$x_n = (n^2)^{-1}$이면 거듭제곱 (1)에 의해 $n^2 = nn$이고, 같은 방식으로 $q_n = \bigl((n+1)(n+1)\bigr)^{-1}(nn) = \bigl((n+1)^{-1}n\bigr)\bigl((n+1)^{-1}n\bigr)$이다((K1), (K2), (K12)의 (vi)). 앞 문단에서 $\bigl((n+1)^{-1}n\bigr)$은 $1$로 수렴하므로 사칙연산 (3)에 의해 $(q_n)$은 $1 \cdot 1 = 1$로 수렴한다. 이 급수는 [[comparison-test|비교 판정법]]의 (6)에 의해 수렴한다. $\blacksquare$
:::

## 예시와 반례

:::example[$n$번째 항이 $n(2^{-1})^n$인 수열]
모든 $n$에서 항은 양수이고([[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (i)), 거듭제곱의 (1)과 (3)에 의해
$$
q_n = (n + 1)(2^{-1})^{n+1} \cdot n^{-1}\bigl((2^{-1})^n\bigr)^{-1} = (n + 1)n^{-1} \cdot 2^{-1} = (1 + n^{-1}) \cdot 2^{-1}
$$
입니다. [[basic-limits]]의 (1), (2)와 [[limit-of-sum-and-product|극한의 사칙연산]]의 (1), (5)에 의해 $(q_n)$은 $(1 + 0) \cdot 2^{-1} = 2^{-1}$로 수렴하고, $2^{-1} < 1$이므로 (2)에 의해 이 급수는 절대수렴합니다. 항의 수 $n$이 한없이 커지지만, 거듭제곱 $(2^{-1})^n$이 더 빨리 줄어듭니다. 합의 값은 이 항목으로 정해지지 않습니다.
:::

:::counterexample[(1)에서 $r < 1$을 $r \le 1$로 바꾸면 성립하지 않는다]
조화급수의 항 $x_n = n^{-1}$은 모든 $n$에서 $0 < (n+1)^{-1} < n^{-1}$이므로([[order-properties-of-reals]]의 (6)의 (ii)) $r = 1$, $M = 1$로 $|x_{n+1}| \le 1 \cdot |x_n|$을 만족합니다. 그러나 [[harmonic-series-diverges|조화급수의 발산]]의 (2)에 의해 이 급수는 발산합니다. 비가 $1$ 이하인 것만으로는 부족하고, $1$보다 작은 한 수 $r$ 이하여야 합니다.
:::

## 확인 질문

:::check[$n$번째 항이 $2^n n^{-1}$인 수열의 급수는 수렴하는가?]
발산합니다. 거듭제곱의 (1)에 의해 $q_n = 2^{n+1}(n+1)^{-1} \cdot n\,(2^n)^{-1} = 2\,n(n+1)^{-1}$이고, (5)의 증명에서처럼 $n(n+1)^{-1}$은 $1$로 수렴하므로 [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)에 의해 $L = 2 > 1$입니다. (3)에 의해 발산합니다.
:::

:::check[(2)의 결론이 "수렴한다"가 아니라 "절대수렴한다"인 까닭은 무엇인가?]
비 $q_n$은 항의 절댓값만 보므로, 증명이 실제로 다루는 것은 $(|x_n|)$의 급수입니다. 그래서 얻는 것은 $(|x_n|)$의 급수의 수렴, 곧 절대수렴이고, $(x_n)$의 급수의 수렴은 [[absolute-convergence|절대수렴]]의 (1)을 거쳐 나옵니다. 예컨대 $x_n$과 $-x_n$, $(-1)^n x_n$은 모두 같은 $(q_n)$을 가지므로, 비 판정법은 항의 부호에 관해서는 아무것도 쓰지 않습니다.
:::
