---
title: 교대급수 판정법
title_en: Alternating Series Test
aliases: [교대급수, 라이프니츠 판정법, 교대 조화급수, 조건수렴의 예, alternating series, alternating series test, Leibniz test, alternating harmonic series]
kind: proposition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: (x_n) 이 단조감소이고 0 으로 수렴하면 n 번째 항이 (−1)ⁿ x_n 인 수열의 급수는 수렴하고, 그 합 S 는 −x_1 ≤ S ≤ −x_1 + x_2 를 만족한다. 짝수 번째와 홀수 번째 항이 같은 극한으로 가면 수열도 그 극한으로 간다는 것을 함께 진술하고, (−1)ⁿ n⁻¹ 의 급수가 조건수렴함을 보인다.
requires: [proof-by-contradiction, mathematical-induction, natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, basic-limits, squeeze-lemma, limits-preserve-inequalities, limit-of-sum-and-product, monotone-convergence-theorem, subsequence, series-and-partial-sums, linearity-of-series, terms-of-convergent-series-tend-to-zero, harmonic-series-diverges, comparison-test, absolute-convergence]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.6.2절 Proposition 2.6.2 와 그 증명 (p.101), 그 뒤 문단 (p.102), 2.5.4절의 (−1)ⁿ/n 에 관한 문단 (p.93), 연습문제 2.5.8 (p.98), 연습문제 2.6.12 (p.111)
    checked: original
    note: "출처의 Proposition 2.6.2(p.101)는 양의 실수로 된 단조감소 수열 {x_n} 이 0 으로 수렴하면 (−1)ⁿ x_n 의 급수가 수렴한다는 것이다. 이 항목은 '양의 실수'라는 가정을 빼고, 단조감소이고 0 으로 수렴하면 모든 항이 0 이상임을 (1)에서 보인다. 출처는 짝수 번째 부분합을 이웃한 두 항씩 묶어 (−x_{2ℓ−1} + x_{2ℓ}) ≤ 0 으로 감소함을 보이고, 다르게 묶어 s_{2k} ≥ −x_1 을 보인 뒤(그림 2.8 은 0 ≥ s_{2k} ≥ −x_1 을 그린다), 수렴하는 {s_{2k}} 의 극한 a 에 대해 ε/2 와 'make M possibly larger'로 m ≥ 2M + 1 을 m = 2k 와 m = 2k + 1 로 나누어 lim s_m = a 를 보인다. 이 항목은 묶기 대신 series-and-partial-sums 의 (2)(s_{n+2} = s_n + x_{n+1} + x_{n+2})와 귀납법으로 s_{2k} ≥ −x_1 + x_{2k} 를 보이고, 홀수 번째 부분합을 s_{2k−1} = s_{2k} − x_{2k} 로 짝수 번째와 잇고, 마지막 단계를 이 항목의 (3)(짝수 번째와 홀수 번째로 나누기)으로 진술해 증명한다. 짝수 번째 부분합이 감소한다는 것과 아래 경계는 출처에도 있다. 합의 경계 −x_1 ≤ S ≤ −x_1 + x_2 는 출처에 명제로 없다(그림 2.8 의 0 ≥ s_{2k} ≥ −x_1 이 같은 생각이다). (3)은 출처의 연습문제 2.1.22(p.60, 짝수 번째·홀수 번째·3 의 배수 번째 부분수열이 모두 수렴하면 수열이 수렴함을 보이라는 것)와 같은 종류이고, 두 부분수열의 극한이 같다고 가정한 판이다. (2)는 출처에 명제로 없다(검색한 범위). 예시 '(−1)ⁿ(2n − 1)⁻¹'에서 절댓값의 급수 1/(2n − 1) 의 발산은 출처 연습문제 2.5.3 b)(p.97)의 급수이고 Example 2.6.4(p.103)에도 있다. 교대급수 쪽의 수렴은 출처에 없다(검색한 범위). 출처는 p.93 에서 (−1)ⁿ/n 의 급수가 수렴함을 보이는 것을 연습문제로 두고('We leave it as an exercise', 연습문제 2.5.8 의 힌트는 이웃한 두 항의 합을 보라는 것이다), 조화급수가 발산하므로 이 급수가 조건수렴한다고 적는다. p.102 에서는 (−1)ⁿ/nᵖ 의 급수가 아무리 작은 p > 0 에서도 수렴하고 p ≤ 1 이면 절대수렴하지 않는다고 적는다. 이 항목의 (4)는 p = 1 인 경우를 (1)과 harmonic-series-diverges 로 증명한 것이다. 반례 '단조감소라는 가정을 빼면'은 출처의 연습문제 2.6.12(p.111, 단조성이 필요함을 보이는 예를 찾는 것)와 같은 물음에 대한 예이다. 출처는 양의 실수를 요구하고 이 예는 0 인 항이 있다. 확인 질문은 출처에 없다(검색한 범위)."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 증명의 수학 오류 없음. Σ 와 유한 합 없이 재귀로 정한 부분합으로 증명. 첫째 항이 0 인 경우를 빼먹은 설명 문장과 출처 메모를 고침"
added: 2026-11-17
---

:::statement
수열, 단조감소, 수렴, 발산과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, 거듭제곱은 [[power-of-a-real-number]], 짝수와 홀수는 [[even-and-odd]]의 것이며, 부분합 수열, 급수의 수렴과 합은 [[series-and-partial-sums]], 절대수렴과 조건수렴은 [[absolute-convergence]]의 것이다. 아래에서 "$k$번째 항이 $y_{2k}$인 수열"처럼 식으로 쓴 수열은 [[sequence]]의 (1)로 정한 것이다.

1. (**교대급수 판정법**, alternating series test) $(x_n)$이 단조감소이고 $0$으로 수렴하는 수열이면, 모든 자연수 $n$에서 $0 \le x_n$이고, $n$번째 항이 $(-1)^n x_n$인 수열의 급수는 수렴한다. 그 합을 $S$라 하면 $-x_1 \le S \le -x_1 + x_2 \le 0$이다.
2. (짝수와 홀수인 자연수) 모든 자연수 $n$은 어떤 자연수 $k$에 대하여 $n = 2k$이거나 $n = 2k - 1$이고, 두 꼴 가운데 정확히 하나이다. 자연수 $k$에 대하여 $2k$와 $2k - 1$은 자연수이다.
3. (짝수 번째와 홀수 번째로 나누기) $(y_n)$이 수열이고 $L$이 실수일 때, $k$번째 항이 $y_{2k}$인 수열과 $k$번째 항이 $y_{2k-1}$인 수열이 둘 다 $L$로 수렴하면 $(y_n)$도 $L$로 수렴한다.
4. (조건수렴하는 급수) $n$번째 항이 $(-1)^n n^{-1}$인 수열의 급수는 수렴하고 그 합 $S$는 $-1 \le S \le -2^{-1}$이다. 이 급수는 절대수렴하지 않으므로 조건수렴한다.
:::

:::english
Sequences, monotone decreasing, convergence, divergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, on the limit of a sequence, and on uniqueness of limits; powers are those of the entry on powers of a real number, and even and odd numbers those of the entry on even and odd numbers; sequences of partial sums, convergence of series and sums of series are those of the entry on series and partial sums, and absolute and conditional convergence those of the entry on absolute convergence. Below, a sequence described by a formula, such as "the sequence whose $k$th term is $y_{2k}$", is the one given by item (1) of the entry on sequences.

1. (**Alternating series test**) If $(x_n)$ is a monotone decreasing sequence converging to $0$, then $0 \le x_n$ for every natural number $n$, and the series of the sequence whose $n$th term is $(-1)^n x_n$ converges. If $S$ is its sum, then $-x_1 \le S \le -x_1 + x_2 \le 0$.
2. (Even and odd natural numbers) Every natural number $n$ is of the form $n = 2k$ or $n = 2k - 1$ for some natural number $k$, and of exactly one of these two forms. For a natural number $k$, the numbers $2k$ and $2k - 1$ are natural numbers.
3. (Splitting into even- and odd-indexed terms) If $(y_n)$ is a sequence, $L$ is a real number, and the sequence whose $k$th term is $y_{2k}$ and the sequence whose $k$th term is $y_{2k-1}$ both converge to $L$, then $(y_n)$ converges to $L$.
4. (A conditionally convergent series) The series of the sequence whose $n$th term is $(-1)^n n^{-1}$ converges, and its sum $S$ satisfies $-1 \le S \le -2^{-1}$. This series does not converge absolutely, so it converges conditionally.
:::

## 직관

한 걸음은 뒤로, 다음 걸음은 앞으로 가되, 걸음의 길이가 길어지지는 않는다고 해 봅시다. 첫 걸음으로 $-x_1$에 가고, 다음 걸음 $x_2$는 첫 걸음보다 길지 않아서 $0$을 넘지 못하며, 그다음 뒷걸음은 앞걸음보다 길지 않아서 $-x_1$ 아래로는 내려가지 않습니다. 이렇게 오가는 폭이 늘지 않으면서 걸음이 $0$으로 짧아지므로, 자리는 한 점으로 모입니다. 비유가 맞는 곳은 "걸음이 길어지지 않는다"가 단조감소, "걸음이 $0$으로 짧아진다"가 $0$으로의 수렴이라는 점입니다.

증명은 짝수 번째 자리 $s_{2k}$만 먼저 봅니다. 이것은 앞뒤 두 걸음을 합친 만큼씩 움직이는데, 뒷걸음이 앞걸음보다 길거나 같으므로 늘지 않고, $-x_1$ 아래로는 내려가지 않습니다. 그래서 [[monotone-convergence-theorem|단조수렴정리]]로 수렴합니다. 홀수 번째 자리는 짝수 번째 자리와 $x_{2k}$만큼 차이 나므로 같은 극한으로 갑니다. 짝수 번째와 홀수 번째가 같은 극한으로 가면 수열 전체가 그 극한으로 간다는 것이 (3)입니다.

단조감소라는 가정은 짝수 번째 부분합이 늘지 않는다는 것, 아래 경계의 귀납 단계, 그리고 항이 모두 $0$ 이상이라는 것(아래 경계를 $-x_1$로 바꾸는 단계)에서 쓰입니다. 이 가정이 없으면 항이 $0$으로 가도 급수는 발산할 수 있습니다(아래 반례).

## 증명

:::idea
$e_k = s_{2k}$는 $e_{k+1} = e_k - x_{2k+1} + x_{2k+2}$를 만족하므로 단조감소이고, 귀납법으로 $e_k \ge -x_1 + x_{2k} \ge -x_1$이다. 단조수렴정리로 $(e_k)$가 수렴하고, $s_{2k-1} = e_k - x_{2k}$도 같은 극한으로 가므로 (3)으로 $(s_n)$이 수렴한다.
:::

:::hint
[[series-and-partial-sums|급수와 부분합]]의 (2)를 $n = 2k$에 쓰고, $(-1)^{2k+1} = -1$, $(-1)^{2k+2} = 1$을 쓴다.
:::

:::hint
(3)에서는 $\varepsilon$에 대하여 두 수열의 번호 $M_1$, $M_2$를 잡고 $M = 2\max\{M_1, M_2\}$로 둔다.
:::

:::proof
(K…)는 [[real-number-arithmetic]], "순서 성질 (1)"처럼 쓴 것은 [[order-properties-of-reals]], "절댓값 (10)"은 [[absolute-value]], "거듭제곱 (5)"는 [[power-of-a-real-number]], "부분합 (2)"는 [[series-and-partial-sums]], "부분수열 (2)"는 [[subsequence]]의 번호이다. 자연수는 양의 정수이고([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]), 정수의 합·차·곱은 정수이며 모든 정수는 짝수이거나 홀수이고 둘 다는 아니다([[even-and-odd]]의 받아들인 사실). 정수의 순서는 [[prime-number]]의 (Z1)–(Z3)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)을 쓰고, 순서 성질 (10)에 의해 이것들을 실수의 부등식으로 써도 된다.

**2의 증명.** 자연수 $k$에 대하여 $2k = k + k$는 $0 < k$와 (Z7), (Z6)에 의해 양의 정수이다. $1 \le k$이므로 (Z7)에 의해 $2 \le k + k$이고, 양변에서 $1$을 빼면 $1 \le 2k - 1$이므로 $2k - 1$도 자연수이다.

자연수 $n$이 짝수이면 $n = 2a$인 정수 $a$가 있다. $a \le 0$이면 (Z2)에 의해 $2a \le 0$이어서 $0 < n$과 어긋나므로((Z5), (L1)), $0 < a$이고 $a$는 자연수이다. $k = a$로 두면 $n = 2k$이다. $n$이 홀수이면 $n = 2a + 1$인 정수 $a$가 있다. $a < 0$이면 (Z1)에 의해 $a \le -1$이고, (Z7)을 두 번 써서 $2a = a + a \le -2$, $n = 2a + 1 \le -1 < 0$이 되어 어긋나므로, (Z5)에 의해 $0 \le a$이다. $k = a + 1$로 두면 $1 \le k$이므로 $k$는 자연수이고 $n = 2(k - 1) + 1 = 2k - 1$이다. 두 꼴이 함께 성립하면 $n = 2k$는 짝수이고 $n = 2k' - 1 = 2(k' - 1) + 1$은 홀수여서 받아들인 사실에 어긋나므로, 정확히 하나이다.

**3의 증명.** 양의 실수 $\varepsilon$을 잡는다. 두 수열이 $L$로 수렴하므로, $k \ge M_1$인 모든 자연수 $k$에서 $|y_{2k} - L| < \varepsilon$인 자연수 $M_1$과, $k \ge M_2$인 모든 자연수 $k$에서 $|y_{2k-1} - L| < \varepsilon$인 자연수 $M_2$가 있다. $M_0 = \max\{M_1, M_2\}$로 두면 절댓값 (10)에 의해 $M_0$은 $M_1$이거나 $M_2$이므로 자연수이고, $M_1 \le M_0$, $M_2 \le M_0$이다. $M = 2M_0$으로 두면 (2)에 의해 자연수이다.

$n \ge M$인 자연수 $n$을 잡는다. 먼저 자연수 $k$가 $2k \ge 2M_0$을 만족하면 $k \ge M_0$임을 보인다. $k < M_0$이라면 (Z1)에 의해 $k + 1 \le M_0$이고, (Z3)과 (Z7)에 의해 $2k + 2 \le 2M_0$이며, (L3)과 (Z6)에 의해 $2k < 2k + 2 \le 2M_0$이어서 $2k \ge 2M_0$과 (L1)에 어긋난다. (2)에 의해 다음 두 경우 가운데 하나이다.

- $n = 2k$인 자연수 $k$가 있으면 $2k \ge 2M_0$이므로 $k \ge M_0 \ge M_1$이고, $|y_n - L| = |y_{2k} - L| < \varepsilon$이다.
- $n = 2k - 1$인 자연수 $k$가 있으면 (L3)과 (Z6)에 의해 $2k > 2k - 1 \ge 2M_0$이므로 $k \ge M_0 \ge M_2$이고, $|y_n - L| = |y_{2k-1} - L| < \varepsilon$이다.

따라서 $(y_n)$은 $L$로 수렴한다.

**1의 증명.** $a_n = (-1)^n x_n$으로 두고, $(a_n)$의 부분합 수열을 $(s_n)$이라 하자.

*항은 $0$ 이상이다.* 자연수 $n$을 잡는다. [[sequence]]의 (4)에 의해 $m \ge n$인 모든 자연수 $m$에서 $x_m \le x_n$이고, $(x_m)$은 $0$으로 수렴하므로 [[limits-preserve-inequalities|극한과 부등식]]의 (3)(어떤 번호 이후에만 성립하는 꼴)에 의해 $0 \le x_n$이다.

*부호.* 자연수 $k$에서 $2k$와 $2k + 2 = 2(k + 1)$은 짝수이고 $2k + 1$과 $2k - 1 = 2(k - 1) + 1$은 홀수이므로, 거듭제곱 (5)와 (K9), (K4)에 의해 $a_{2k} = x_{2k}$, $a_{2k+2} = x_{2k+2}$, $a_{2k+1} = -x_{2k+1}$, $a_{2k-1} = -x_{2k-1}$이다. 특히 $a_1 = -x_1$이다.

*짝수 번째 부분합.* (2)에 의해 $2k$는 자연수이므로 $k$번째 항이 $e_k = s_{2k}$인 수열 $(e_k)$가 있다. 부분합 (2)를 자연수 $2k$에 쓰면 $(2k) + 2 = 2(k + 1)$이므로
$$
e_{k+1} = s_{2k} + a_{2k+1} + a_{2k+2} = e_k + (-x_{2k+1} + x_{2k+2})
$$
이다((K2)). $(x_n)$이 단조감소이므로 $x_{2k+2} \le x_{2k+1}$이고, 순서 성질 (3)의 (i)과 (K1)에 의해 $-x_{2k+1} + x_{2k+2} \le 0$이며, 순서 성질 (2)의 (i)과 (K4)에 의해 $e_{k+1} \le e_k$이다. 따라서 $(e_k)$는 단조감소이다.

*아래 경계.* 자연수 $k$에 대한 명제 "$-x_1 + x_{2k} \le e_k$"를 [[mathematical-induction|수학적 귀납법]]으로 보인다. 기초 단계: 부분합 수열의 정의에 의해 $e_1 = s_2 = s_1 + a_2 = a_1 + a_2 = -x_1 + x_2$이다. 귀납 단계: $-x_1 + x_{2k} \le e_k$라 하자. 단조감소에 의해 $x_{2k+1} \le x_{2k}$이므로 순서 성질 (3)의 (i)에 의해 $0 \le x_{2k} - x_{2k+1}$이다. (K1), (K2), (K8)의 (ii), (K4)로 정리하면
$$
e_{k+1} = e_k - x_{2k+1} + x_{2k+2} \ge (-x_1 + x_{2k}) - x_{2k+1} + x_{2k+2} = -x_1 + (x_{2k} - x_{2k+1}) + x_{2k+2} \ge -x_1 + x_{2k+2}
$$
이다(두 부등식은 순서 성질 (2)의 (i)). 따라서 모든 $k$에서 $-x_1 + x_{2k} \le e_k$이고, $0 \le x_{2k}$이므로 순서 성질 (2)의 (i)과 (1)의 (v)에 의해 $-x_1 \le e_k$이다.

*짝수 번째 부분합의 극한.* $(e_k)$는 단조감소이고 아래로 유계이므로 [[monotone-convergence-theorem|단조수렴정리]]의 (2)에 의해 어떤 실수 $E$로 수렴하고, 모든 $k$에서 $E \le e_k$이다. 특히 $E \le e_1 = -x_1 + x_2$이다. 모든 $k$에서 $-x_1 \le e_k$이므로 [[limits-preserve-inequalities|극한과 부등식]]의 (3)에 의해 $-x_1 \le E$이다. 또 $x_2 \le x_1$이므로 순서 성질 (3)의 (i)과 (K1)에 의해 $-x_1 + x_2 \le 0$이다.

*홀수 번째 부분합.* (2)에 의해 $2k - 1$은 자연수이므로 $k$번째 항이 $o_k = s_{2k-1}$인 수열 $(o_k)$가 있다. 부분합 수열의 정의를 자연수 $2k - 1$에 쓰면 $(2k - 1) + 1 = 2k$이므로 $e_k = o_k + a_{2k} = o_k + x_{2k}$이고, (K1), (K2), (K8)의 (ii), (K4)에 의해 $o_k = e_k - x_{2k}$이다. $i$에서의 값이 $2i$인 함수는 모든 $i$에서 $2i < 2i + 2 = 2(i + 1)$이므로 부분수열 (2)에 의해 첨자열이고, 부분수열 (3)에 의해 $k$번째 항이 $x_{2k}$인 수열은 $0$으로 수렴한다. [[limit-of-sum-and-product|극한의 사칙연산]]의 (2)에 의해 $(o_k)$는 $E - 0 = E$로 수렴한다.

*결론.* (3)을 $(s_n)$과 $L = E$에 쓰면 $(s_n)$은 $E$로 수렴한다. 따라서 $(a_n)$의 급수는 수렴하고, [[limit-is-unique]]에 의해 그 합 $S$는 $E$이며 $-x_1 \le S \le -x_1 + x_2 \le 0$이다.

**4의 증명.** $x_n = n^{-1}$로 둔다. 자연수 $n$에서 $0 < n < n + 1$이므로 순서 성질 (6)의 (ii)에 의해 $x_{n+1} < x_n$이고, $(x_n)$은 단조감소이다. [[basic-limits]]의 (2)에 의해 $(x_n)$은 $0$으로 수렴한다. (1)에 의해 급수는 수렴하고, $x_1 = 1^{-1} = 1$((K8)의 (iii)), $x_2 = 2^{-1}$이므로 $-1 \le S \le -1 + 2^{-1} = -2^{-1}$이다($1 = 2^{-1} + 2^{-1}$).

거듭제곱 (5)에 의해 $(-1)^n$은 $1$이거나 $-1$이므로 절댓값 (3), (1), (4)에 의해 $|(-1)^n n^{-1}| = n^{-1}$이다. 따라서 $n$번째 항이 $|(-1)^n n^{-1}|$인 수열은 $(n^{-1})$이고, [[harmonic-series-diverges|조화급수의 발산]]의 (2)에 의해 그 급수는 발산한다. 곧 이 급수는 절대수렴하지 않고, 수렴하므로 [[absolute-convergence|절대수렴]]의 정의에 의해 조건수렴한다. $\blacksquare$
:::

## 예시와 반례

:::example[항이 $(-1)^n (2n - 1)^{-1}$인 수열의 급수]
$x_n = (2n - 1)^{-1}$로 두면 (2)에 의해 $2n - 1$은 자연수이고, $2n - 1 < 2n + 1 = 2(n + 1) - 1$이므로 [[order-properties-of-reals]]의 (6)의 (ii)에 의해 $(x_n)$은 단조감소입니다. $0 < x_n \le n^{-1}$이므로($n \le 2n - 1$) [[squeeze-lemma|조임 정리]]의 (1)과 [[basic-limits]]의 (1), (2)에 의해 $(x_n)$은 $0$으로 수렴합니다. (1)에 의해 이 급수는 수렴하고, 합 $S$는 $-1 \le S \le -1 + 3^{-1}$입니다. $0 < 2n - 1 < 2n$이므로 $0 < (2n)^{-1} < (2n - 1)^{-1}$입니다. $n$번째 항이 $(2n)^{-1}$인 수열의 급수는 발산합니다. 수렴한다면 [[linearity-of-series|급수의 선형성]]의 (2)를 $c = 2$에 써서 $n$번째 항이 $2(2n)^{-1} = n^{-1}$인 수열, 곧 조화급수가 수렴하게 되어 [[harmonic-series-diverges|조화급수의 발산]]의 (2)에 어긋나기 때문입니다. [[comparison-test|비교 판정법]]의 (3)에 의해 절댓값의 급수는 발산합니다. 따라서 이 급수도 조건수렴합니다.
:::

:::counterexample[단조감소라는 가정을 빼면 (1)은 성립하지 않는다]
$n$이 짝수 $2k$이면 $x_n = k^{-1}$, 홀수이면 $x_n = 0$인 수열을 봅니다((2)에 의해 잘 정해집니다). $k$번째 항이 $x_{2k} = k^{-1}$인 수열과 $x_{2k-1} = 0$인 수열은 둘 다 $0$으로 수렴하므로([[basic-limits]]의 (1), (2)) (3)에 의해 $(x_n)$은 $0$으로 수렴합니다. 그러나 $x_1 = 0 < 1 = x_2$이므로 단조감소가 아닙니다.

$a_n = (-1)^n x_n$이라 하면 홀수 번째 항은 $0$, $2k$번째 항은 $k^{-1}$입니다. 조화급수의 부분합을 $(h_k)$라 하면 귀납법으로 $s_{2k} = h_k$입니다. $s_2 = a_1 + a_2 = 0 + 1 = h_1$이고, $s_{2k} = h_k$이면 [[series-and-partial-sums|급수와 부분합]]의 (2)에 의해 $s_{2k+2} = h_k + 0 + (k + 1)^{-1} = h_{k+1}$입니다. $(s_n)$이 어떤 $S$로 수렴한다면 첨자열 $2k$([[subsequence]]의 (2), (3))로 $(s_{2k}) = (h_k)$도 $S$로 수렴하게 되어 [[harmonic-series-diverges|조화급수의 발산]]의 (2)에 어긋납니다. 따라서 이 급수는 발산합니다. 항은 $(-1)^n x_n$ 꼴이고 $(x_n)$은 $0$으로 수렴하지만, 단조감소가 아니어서 판정법을 쓸 수 없습니다.
:::

## 확인 질문

:::check[$(x_n)$이 단조감소이고 $0$으로 수렴할 때, 첫째 항의 부호가 반대인 $n$번째 항이 $(-1)^{n+1} x_n$인 수열의 급수는 어떠한가?]
수렴하고 합은 $-S$입니다($S$는 (1)의 합). (K1), (K2)와 거듭제곱의 (1)에 의해 $(-1)^{n+1} x_n = (-1)\bigl((-1)^n x_n\bigr)$이므로, [[linearity-of-series|급수의 선형성]]의 (2)를 $c = -1$에 쓰면 됩니다. (1)의 $-x_1 \le S \le -x_1 + x_2$와 [[order-properties-of-reals]]의 (3)의 (iii)에 의해 그 합 $-S$는 $x_1 - x_2$ 이상이고 $x_1$ 이하입니다.
:::

:::check[모든 항이 $1$인 수열 $(x_n)$에 대하여 $(-1)^n x_n$의 급수는 어떠한가?]
발산합니다. $(x_n)$은 단조감소이지만 $0$으로 수렴하지 않으므로 (1)을 쓸 수 없습니다. 항의 수열 $((-1)^n)$은 [[power-of-a-real-number|실수의 거듭제곱]]의 (5)에 의해 [[basic-limits]]의 (3)의 수열과 같아서 발산하므로 $0$으로 수렴하지 않고, [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (2)에 의해 급수는 발산합니다.
:::
