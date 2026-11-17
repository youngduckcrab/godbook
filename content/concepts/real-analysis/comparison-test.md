---
title: 비교 판정법
title_en: Comparison Test
aliases: [항이 음이 아닌 급수, 양항급수, p-급수, 비교 판정, comparison test, series with nonnegative terms, p-series]
kind: proposition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 항이 모두 0 이상인 급수가 수렴하는 것은 정확히 부분합 수열이 위로 유계일 때이다. 0 ≤ x_n ≤ y_n 이면 (y_n) 의 급수가 수렴할 때 (x_n) 의 급수도 수렴하고, (x_n) 의 급수가 발산하면 (y_n) 의 급수도 발산한다. 어떤 번호 이후에만 부등식이 성립해도 되고, (n(n+1))⁻¹ 의 급수의 합은 1 이며, 자연수 p 에 대해 (nᵖ)⁻¹ 의 급수는 정확히 p ≥ 2 일 때 수렴한다.
requires: [contrapositive-law, natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, real-order-axioms, order-properties-of-reals, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, basic-limits, limits-preserve-inequalities, convergent-sequence-is-bounded, monotone-convergence-theorem, tail-of-a-sequence, limit-of-sum-and-product, series-and-partial-sums, linearity-of-series, tail-of-a-series, harmonic-series-diverges]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.5.4절 Proposition 2.5.13 과 앞뒤 문단 (p.92), 2.5.5절 Proposition 2.5.16 과 그 증명 (p.93–94), Proposition 2.5.17 과 그 증명 (p.94–95), Example 2.5.18 (p.95)
    checked: original
    note: "출처의 Proposition 2.5.13(p.92)은 모든 n 에서 x_n ≥ 0 이면 급수가 수렴하는 것은 정확히 부분합 수열이 위로 유계일 때라는 것이다. 출처는 이 명제에 증명 블록을 두지 않는다. 명제 앞 문단이 '그때 부분합 수열은 단조증가이고 위로 유계이면 수렴한다'고 적고, 명제 뒤 문단이 '단조증가 수열의 극한은 상한이므로' 부분합이 급수의 합 이하라고 적는다. 이 항목의 (1)은 그것을 series-and-partial-sums 의 (3), 단조수렴정리, 수렴하는 수열의 유계성으로 증명한 것이다. 출처의 Proposition 2.5.16(p.93)은 모든 n 에서 0 ≤ x_n ≤ y_n 일 때 (i) y 쪽이 수렴하면 x 쪽도 수렴하고 (ii) x 쪽이 발산하면 y 쪽도 발산한다는 것이다. 출처는 부분합의 부등식 (2.1)을 증명 없이 쓰고(이 사이트에서는 series-and-partial-sums 의 (5)), (ii)는 x 쪽의 부분합이 결국 어떤 실수보다도 커진다는 것으로 직접 보인다. 이 항목은 (3)을 (2)의 대우로 보인다. (2)의 합의 부등식 S ≤ T 는 출처의 진술에 없다(검색한 범위). 꼬리 판 (4)는 출처에 명제로 없다. 출처의 연습문제 2.5.16(p.99)이 몇몇 급수는 꼬리만 가정을 만족한다며 그것으로 충분한 까닭을 따져 보라고 하는 것이 같은 생각이다. (5)의 급수는 출처의 연습문제 2.5.1(p.97, k 번째 부분합이 k/(k+1))과 2.5.3 d)(p.97), 5.5.3 b)(p.224)의 1/(n(n+1)) 의 급수이고, 이 항목은 부분합이 1 − (n+1)⁻¹ 임을 series-and-partial-sums 의 (1)로 보인다. 출처의 Proposition 2.5.17(p.94–95)은 실수 p 에 대해 1/n^p 의 급수가 정확히 p > 1 일 때 수렴한다는 것이고, 실수 지수는 5.4절에서 정의한다는 각주가 있다. 출처는 p ≤ 1 을 조화급수와의 비교로, p > 1 을 첨자 2^i 부터 2^{i+1} − 1 까지 묶어 공비가 1/2^{p−1} 인 등비급수로 누르는 것으로 증명한다. 이 사이트에는 실수 지수가 없으므로 이 항목의 (6)은 자연수 p 만 다루고, p = 1 은 harmonic-series-diverges 를 인용하며, p ≥ 2 는 (nn)⁻¹ ≤ 2(n(n+1))⁻¹ 과 (5), (2)로 보인다. 이 비교는 출처에 없다(검색한 범위). 출처가 p.95 에서 적는 1/n² 의 급수의 합의 값은 이 사이트에서 증명하지 않으므로 쓰지 않는다. 예시 '(n² + n + 1)⁻¹'은 출처의 Example 2.5.18(p.95, 1/(n² + 1) < 1/n² 로 비교)과 같은 발상이다. 예시 '(n² − 5)⁻¹', 반례, 확인 질문은 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
수열, 위로 유계, 수렴, 발산과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, 부분합 수열, 급수의 수렴과 발산, 급수의 합은 [[series-and-partial-sums]]의 것이며, 거듭제곱은 [[power-of-a-real-number]]의 것이다. 아래에서 식으로 쓴 수열은 [[sequence]]의 (1)로 정한 것이다. $(x_n)$, $(y_n)$을 수열, $(s_n)$, $(t_n)$을 각각의 부분합 수열이라 하자.

1. (항이 $0$ 이상인 급수) 모든 자연수 $n$에서 $0 \le x_n$이면, $(x_n)$의 급수가 수렴하는 것은 정확히 $(s_n)$이 위로 유계일 때이다. 이때 급수의 합을 $S$라 하면 $S = \sup\{s_n : n \in \mathbb{N}\}$이고 모든 자연수 $n$에서 $0 \le s_n \le S$이다.
2. (**비교 판정법**, comparison test) 모든 자연수 $n$에서 $0 \le x_n \le y_n$이고 $(y_n)$의 급수가 수렴하면, $(x_n)$의 급수도 수렴한다. 두 급수의 합을 각각 $S$, $T$라 하면 $0 \le S \le T$이다.
3. (발산 쪽) 모든 자연수 $n$에서 $0 \le x_n \le y_n$이고 $(x_n)$의 급수가 발산하면, $(y_n)$의 급수도 발산한다.
4. (어떤 번호 이후에만 성립하는 경우) 어떤 자연수 $K$가 있어 $K$ 이상인 모든 자연수 $n$에서 $0 \le x_n \le y_n$이라 하자. 그러면 $(y_n)$의 급수가 수렴할 때 $(x_n)$의 급수도 수렴하고, $(x_n)$의 급수가 발산할 때 $(y_n)$의 급수도 발산한다.
5. $n$번째 항이 $\bigl(n(n+1)\bigr)^{-1}$인 수열의 부분합은 모든 자연수 $n$에서 $1 - (n+1)^{-1}$이다. 따라서 이 수열의 급수는 수렴하고 그 합은 $1$이다.
6. $n$번째 항이 $(n^2)^{-1}$인 수열의 급수는 수렴한다. 더 일반적으로 자연수 $p$에 대하여, $n$번째 항이 $(n^p)^{-1}$인 수열의 급수가 수렴하는 것은 정확히 $p \ge 2$일 때이다($p = 1$이면 조화급수이다).
:::

:::english
Sequences, bounded above, convergence, divergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, on the limit of a sequence, and on uniqueness of limits; sequences of partial sums, convergence and divergence of series, and sums of series are those of the entry on series and partial sums; and powers are those of the entry on powers of a real number. Below, a sequence described by a formula is the one given by item (1) of the entry on sequences. Let $(x_n)$, $(y_n)$ be sequences and $(s_n)$, $(t_n)$ their respective sequences of partial sums.

1. (Series with nonnegative terms) If $0 \le x_n$ for every natural number $n$, then the series of $(x_n)$ converges exactly when $(s_n)$ is bounded above. In that case, if $S$ is the sum of the series, then $S = \sup\{s_n : n \in \mathbb{N}\}$ and $0 \le s_n \le S$ for every natural number $n$.
2. (**Comparison test**) If $0 \le x_n \le y_n$ for every natural number $n$ and the series of $(y_n)$ converges, then the series of $(x_n)$ also converges. If $S$ and $T$ are the sums of the two series, then $0 \le S \le T$.
3. (The divergent side) If $0 \le x_n \le y_n$ for every natural number $n$ and the series of $(x_n)$ diverges, then the series of $(y_n)$ also diverges.
4. (When the inequalities hold only from some index on) Suppose that for some natural number $K$, $0 \le x_n \le y_n$ for every natural number $n \ge K$. Then if the series of $(y_n)$ converges, so does the series of $(x_n)$; and if the series of $(x_n)$ diverges, so does the series of $(y_n)$.
5. The partial sums of the sequence whose $n$th term is $\bigl(n(n+1)\bigr)^{-1}$ are $1 - (n+1)^{-1}$ for every natural number $n$. Hence the series of this sequence converges and its sum is $1$.
6. The series of the sequence whose $n$th term is $(n^2)^{-1}$ converges. More generally, for a natural number $p$, the series of the sequence whose $n$th term is $(n^p)^{-1}$ converges exactly when $p \ge 2$ (for $p = 1$ it is the harmonic series).
:::

## 직관

항이 모두 $0$ 이상이면 부분합은 줄지 않습니다. 줄지 않는 수열이 어떤 값으로 다가가지 못하는 길은 한없이 커지는 것뿐이므로, 위로 막혀 있기만 하면 수렴합니다. 이것이 (1)이고, [[monotone-convergence-theorem|단조수렴정리]]를 부분합 수열에 쓴 것입니다.

비교 판정법은 물통 두 개에 비유할 수 있습니다. 날마다 둘째 물통에는 $y_n$, 첫째 물통에는 그보다 적거나 같은 $x_n$을 붓습니다(퍼내는 날은 없습니다, $0 \le x_n$). 둘째 물통의 물이 어떤 높이를 넘지 않으면 첫째 물통도 그 높이를 넘지 않으므로 (1)에 의해 수렴합니다((2)). 거꾸로 첫째 물통이 한없이 차오르면 둘째 물통도 그렇습니다((3)). 비유가 맞지 않는 곳은 $0 \le x_n$이라는 가정입니다. 퍼내는 날이 있으면 첫째 물통은 높이가 막혀 있지 않은 채 아래로 내려갈 수 있습니다(아래 반례).

수렴하는지는 처음 몇 개의 항에 상관하지 않으므로, 부등식이 어떤 번호부터만 성립해도 됩니다((4)). 비교할 대상으로는 합을 아는 급수가 쓸모 있습니다. (5)의 급수는 앞뒤 항이 지워져 부분합을 식으로 구할 수 있고, (6)은 이것과 비교해 $(n^2)^{-1}$의 급수가 수렴함을 보입니다.

## 증명

:::idea
항이 $0$ 이상이면 부분합 수열은 단조증가이므로 단조수렴정리로 (1)을 얻는다. $x_n \le y_n$이면 부분합도 $s_n \le t_n$이므로 $t_n \le T$에서 $(s_n)$이 위로 유계이다. 꼬리 판은 두 수열의 $K$-꼬리에 (2), (3)을 쓴다.
:::

:::hint
(5)는 $n$번째 항이 $1 - (n+1)^{-1}$인 수열이 [[series-and-partial-sums|급수와 부분합]]의 (1)의 조건을 만족하는지 확인한다. $(n+1)^{-1} - (n+2)^{-1}$을 한 분수로 써 본다.
:::

:::hint
(6)에서는 $n + 1 \le 2n$에서 $(nn)^{-1} \le 2\bigl(n(n+1)\bigr)^{-1}$을 얻는다.
:::

:::proof
(K…)는 [[real-number-arithmetic]], "순서 성질 (4)"처럼 쓴 것은 [[order-properties-of-reals]], "거듭제곱 (6)"은 [[power-of-a-real-number]], "부분합 (3)"은 [[series-and-partial-sums]], "사칙연산 (5)"는 [[limit-of-sum-and-product]]의 번호이다. 자연수는 양의 정수이고([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]), 정수의 합과 곱은 정수이며([[even-and-odd]]), 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)을 쓰고, 순서 성질 (10)에 의해 이것들을 실수의 부등식으로 써도 된다. 특히 자연수 $n$은 $1 \le n$이고 $0 < n$이다.

**1의 증명.** 부분합 (3)에 의해 $(s_n)$은 단조증가이고 모든 $n$에서 $0 \le s_n$이다. $(x_n)$의 급수가 수렴하면 [[convergent-sequence-is-bounded|수렴하는 수열이 유계라는 정리]]의 (2)에 의해 $(s_n)$은 유계이고, [[sequence]]의 (3)에 의해 위로 유계이다. 거꾸로 $(s_n)$이 위로 유계이면 [[monotone-convergence-theorem|단조수렴정리]]의 (1)에 의해 $(s_n)$은 $\sup\{s_n : n \in \mathbb{N}\}$로 수렴하고, 모든 $n$에서 $s_n$은 그 극한 이하이다. 급수가 수렴할 때는 앞 문장에 의해 $(s_n)$이 위로 유계이므로 같은 결론이 성립하고, [[limit-is-unique]]에 의해 $S = \sup\{s_n : n \in \mathbb{N}\}$이며 $0 \le s_n \le S$이다.

**2의 증명.** 모든 $n$에서 $0 \le x_n \le y_n$이므로 순서 성질 (1)의 (v)에 의해 $0 \le y_n$이다. (1)을 $(y_n)$에 쓰면 모든 $n$에서 $t_n \le T$이다. 부분합 (5)에 의해 모든 $n$에서 $s_n \le t_n$이므로 순서 성질 (1)의 (v)에 의해 $s_n \le T$이고, $(s_n)$은 위로 유계이다. (1)을 $(x_n)$에 쓰면 $(x_n)$의 급수는 수렴하고, 모든 $n$에서 $0 \le s_n \le T$이므로 [[limits-preserve-inequalities|극한과 부등식]]의 (3)에 의해 $0 \le S \le T$이다.

**3의 증명.** (2)의 앞 문장은 "모든 $n$에서 $0 \le x_n \le y_n$일 때, $(y_n)$의 급수가 수렴하면 $(x_n)$의 급수가 수렴한다"이다. (3)은 같은 가정 아래에서 그 대우이므로 [[contrapositive-law|대우 법칙]]에 의해 성립한다. 급수가 발산한다는 것은 수렴하지 않는다는 것이다.

**4의 증명.** 두 수열의 $K$-꼬리([[tail-of-a-sequence]])를 생각한다. 자연수 $n$에서 $n + K$는 자연수이고, $0 < n$과 (Z7)에 의해 $K < n + K$이므로 가정에 의해 $0 \le x_{n+K} \le y_{n+K}$이다. $(y_n)$의 급수가 수렴하면 [[tail-of-a-series|급수의 꼬리]]의 (2)에 의해 $(y_n)$의 $K$-꼬리의 급수가 수렴하고, (2)를 두 $K$-꼬리에 쓰면 $(x_n)$의 $K$-꼬리의 급수가 수렴하며, 급수의 꼬리 (2)에 의해 $(x_n)$의 급수가 수렴한다. $(x_n)$의 급수가 발산하면 급수의 꼬리 (2)에 의해 $(x_n)$의 $K$-꼬리의 급수가 발산하고, (3)을 두 $K$-꼬리에 쓰면 $(y_n)$의 $K$-꼬리의 급수가 발산하며, 급수의 꼬리 (2)에 의해 $(y_n)$의 급수가 발산한다.

**5의 증명.** 자연수 $m$에 대하여 $m$과 $m + 1$은 $0$이 아니므로 (K12)의 (vi)에 의해 $\bigl(m(m+1)\bigr)^{-1} = m^{-1}(m+1)^{-1}$이다. 이 수열을 $(w_n)$, 곧 $w_n = \bigl(n(n+1)\bigr)^{-1}$이라 하고, $n$번째 항이 $v_n = 1 - (n+1)^{-1}$인 수열 $(v_n)$을 생각한다.

- $2 \cdot 2^{-1} = 1$이고 (K12)의 (i)과 (K4)에 의해 $2^{-1} + 2^{-1} = (1 + 1)2^{-1} = 1$이므로 $1 - 2^{-1} = 2^{-1}$이다. 또 $1^{-1} = 1$((K8)의 (iii))이므로 $w_1 = 1^{-1}2^{-1} = 2^{-1}$이다. 따라서 $v_1 = w_1$이다.
- 자연수 $n$에 대하여 $p = n + 1$이라 하면 $w_{n+1} = p^{-1}(p+1)^{-1}$이다. (K1), (K2), (K8)의 (iii), (K4)에 의해 $p^{-1} = p^{-1}\bigl((p + 1)(p + 1)^{-1}\bigr) = (p + 1)\,p^{-1}(p+1)^{-1}$이므로, (K12)의 (i)과 (ii), (K9)에 의해
$$
p^{-1} - w_{n+1} = \bigl((p + 1) - 1\bigr)p^{-1}(p+1)^{-1} = p\,p^{-1}(p+1)^{-1} = (p+1)^{-1}
$$
이다(정수의 계산 $(p + 1) - 1 = p$). 따라서 (K12)의 (iv), (K1), (K2)로 정리하면
$$
v_n + w_{n+1} = 1 - \bigl(p^{-1} - w_{n+1}\bigr) = 1 - (p + 1)^{-1} = 1 - (n + 2)^{-1} = v_{n+1}
$$
이다.

부분합 (1)에 의해 $(v_n)$이 $(w_n)$의 부분합 수열이다. [[basic-limits]]의 (2)와 [[tail-of-a-sequence|수열의 꼬리]]의 (1)에 의해 $\bigl((n+1)^{-1}\bigr)$은 $0$으로 수렴하고, (K9)에 의해 $v_n = 1 + (-1)(n+1)^{-1}$이므로 사칙연산 (5)를 두 번 써서 $(v_n)$은 $1 + (-1) \cdot 0 = 1$로 수렴한다. 따라서 급수의 합은 $1$이다.

**6의 증명.** 거듭제곱 (1)에 의해 $n^2 = nn$이다. 자연수 $n$에서 $1 \le n$이므로 순서 성질 (2)의 (i)에 의해 $n + 1 \le n + n = 2n$이고, $0 < n$이므로 순서 성질 (4)의 (iii)에 의해 $n(n + 1) \le n(2n) = 2(nn)$이다. 순서 성질 (4)의 (iv)에 의해 $0 < n(n+1)$이므로, $n(n+1) < 2(nn)$이면 순서 성질 (6)의 (ii)에 의해, 같으면 그대로 $\bigl(2(nn)\bigr)^{-1} \le \bigl(n(n+1)\bigr)^{-1}$이다. (K12)의 (vi), (K2), (K8)의 (iii), (K4)에 의해 $2\bigl(2(nn)\bigr)^{-1} = (nn)^{-1}$이므로, 양변에 $2$를 곱하면(순서 성질 (4)의 (iii)) 
$$
0 < (n^2)^{-1} \le 2\bigl(n(n+1)\bigr)^{-1}
$$
이다(왼쪽 부등식은 순서 성질 (4)의 (iv)와 (6)의 (i)). (5)와 [[linearity-of-series|급수의 선형성]]의 (2)에 의해 $n$번째 항이 $2\bigl(n(n+1)\bigr)^{-1}$인 수열의 급수는 수렴하고 합은 $2$이다. (2)에 의해 $n$번째 항이 $(n^2)^{-1}$인 수열의 급수는 수렴한다.

이제 $p$를 자연수라 하자. (Z5)와 (Z1)에 의해 $p = 1$이거나 $p \ge 2$이다. $p = 1$이면 거듭제곱 (1)에 의해 $n^1 = n$이므로 이 수열은 $(n^{-1})$이고, [[harmonic-series-diverges|조화급수의 발산]]의 (2)에 의해 그 급수는 발산한다. $p \ge 2$이면 $p - 2 \ge 0$이고 거듭제곱 (2)의 (i)에 의해 $n^p = n^2 n^{p-2}$이다. $0 \le 1 \le n$이므로 거듭제곱 (6)의 (ii)와 (2)의 (iv)에 의해 $1 = 1^{p-2} \le n^{p-2}$이고, $0 \le n^2$이므로 순서 성질 (4)의 (iii)과 (K4)에 의해 $n^2 \le n^2 n^{p-2} = n^p$이다. 거듭제곱 (6)의 (i)에 의해 $0 < n^2$이므로, $n^2 < n^p$이면 순서 성질 (6)의 (ii)에 의해, 같으면 그대로 $0 < (n^p)^{-1} \le (n^2)^{-1}$이다. 앞 문단과 (2)에 의해 $n$번째 항이 $(n^p)^{-1}$인 수열의 급수는 수렴한다. 따라서 수렴하는 것은 정확히 $p \ge 2$일 때이다. $\blacksquare$
:::

## 예시와 반례

:::example[$n$번째 항이 $(n^2 + n + 1)^{-1}$인 수열]
자연수 $n$에서 $0 < n(n+1) = n^2 + n < n^2 + n + 1$이므로([[order-properties-of-reals]]의 (2)의 (ii)와 (4)의 (iv)) 그 항목의 (6)의 (ii)에 의해 $0 < (n^2 + n + 1)^{-1} < \bigl(n(n+1)\bigr)^{-1}$입니다. (5)와 (2)에 의해 이 급수는 수렴하고 합은 $1$ 이하입니다. 합의 값은 이 항목으로 정해지지 않습니다.
:::

:::example[$n$번째 항이 $(n^2 - 5)^{-1}$인 수열]
$n^2 - 5$는 정수이고 $0$이 아니므로(정수 $n$에서 $n^2 = 5$인 것은 없습니다. $n^2 \le 4$이거나 $n^2 \ge 9$입니다) 이 수열은 정해집니다. $n = 1, 2$에서는 항이 $-4^{-1}$, $-1$로 음수이므로 (2)를 바로 쓸 수 없습니다. $n \ge 4$이면 $n^2 \ge 16$이므로 $2^{-1}n^2 \ge 8 > 5$이고, $n^2 - 5 > n^2 - 2^{-1}n^2 = 2^{-1}n^2 > 0$이어서
$$
0 < (n^2 - 5)^{-1} < (2^{-1}n^2)^{-1} = 2(n^2)^{-1}
$$
입니다. $(n^2)^{-1}$의 급수는 (6)에 의해 수렴하므로 [[linearity-of-series|급수의 선형성]]의 (2)에 의해 $2(n^2)^{-1}$의 급수도 수렴하고, (4)를 $K = 4$에 쓰면 이 급수는 수렴합니다.
:::

:::counterexample[$0 \le x_n$을 빼면 (2)는 성립하지 않는다]
모든 항이 $-1$인 수열 $(x_n)$과 모든 항이 $0$인 수열 $(y_n)$은 $x_n \le y_n$을 만족하고, $(y_n)$의 부분합은 모두 $0$이어서 급수는 합 $0$으로 수렴합니다. 그러나 $(x_n)$의 부분합은 $-n$이고(모든 $n$에서 $v_n = -n$인 수열이 $v_1 = -1$, $v_{n+1} = -n + (-1)$을 만족하므로 [[series-and-partial-sums|급수와 부분합]]의 (1)), $(-n)$이 수렴한다면 [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)로 $(n)$도 수렴하게 되어 [[basic-limits]]의 (4)에 어긋나므로 $(x_n)$의 급수는 발산합니다. 부분합이 위로는 막혀 있어도 아래로 한없이 내려갑니다.
:::

## 확인 질문

:::check[(2)의 역, 곧 "$0 \le x_n \le y_n$이고 $(x_n)$의 급수가 수렴하면 $(y_n)$의 급수도 수렴한다"는 참인가?]
거짓입니다. 모든 항이 $0$인 수열 $(x_n)$과 $y_n = n^{-1}$이면 $0 \le x_n \le y_n$이고 $(x_n)$의 급수는 합 $0$으로 수렴하지만, $(y_n)$의 급수는 [[harmonic-series-diverges|조화급수의 발산]]의 (2)에 의해 발산합니다.
:::

:::check[$n$번째 항이 $n(n^2 + 1)^{-1}$인 수열의 급수는 수렴하는가?]
발산합니다. $1 \le n^2$이므로 $0 < n^2 + 1 \le 2n^2$이고, [[order-properties-of-reals]]의 (6)의 (ii)와 (4)의 (iii)에 의해 $n(2n^2)^{-1} \le n(n^2 + 1)^{-1}$입니다. 왼쪽은 $(2n)^{-1}$이고 $0 < (2n)^{-1}$입니다. $n$번째 항이 $(2n)^{-1}$인 수열의 급수는 발산합니다. 수렴한다면 [[linearity-of-series|급수의 선형성]]의 (2)를 $c = 2$에 써서 조화급수가 수렴하게 되기 때문입니다. (3)에 의해 이 급수는 발산합니다.
:::
