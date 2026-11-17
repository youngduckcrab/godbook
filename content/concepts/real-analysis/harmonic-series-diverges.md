---
title: 조화급수의 발산
title_en: Divergence of the Harmonic Series
aliases: [조화급수, harmonic series, divergence of the harmonic series]
kind: proposition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: n 번째 항이 n⁻¹ 인 수열의 급수(조화급수)는 항이 0 으로 수렴하는데도 발산한다. 모든 자연수 n 에서 s_{2n} − s_n ≥ 1/2 이고, 부분합 수열은 단조증가이며 위로 유계가 아니다.
requires: [proof-by-contradiction, natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, real-order-axioms, order-properties-of-reals, sequence, limit-of-sequence, limit-is-unique, basic-limits, limits-preserve-inequalities, limit-of-sum-and-product, monotone-convergence-theorem, tail-of-a-sequence, subsequence, series-and-partial-sums, linearity-of-series, tail-of-a-series, terms-of-convergent-series-tend-to-zero]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.5.3절 Example 2.5.11 과 그 각주 (p.90–91), Example 2.5.11 앞 문단 (p.90)
    checked: original
    note: "출처의 Example 2.5.11(p.90–91)은 1/n 의 급수가 lim 1/n = 0 인데도 발산한다는 것을 'the famous harmonic series'라 부르며 보인다. 출처는 첨자가 2^k 인 부분합을 이중 합으로 묶어 쓰고, 묶음 하나(첨자 2^{k−1} + 1 부터 2^k 까지)가 1/2 이상이므로 s_{2^k} ≥ 1 + k/2 임을 보인 뒤, 아르키메데스 성질로 {s_{2^k}} 가 유계가 아니므로 {s_n} 도 유계가 아니고 따라서 발산한다고 한다. 이 항목은 묶음 하나의 아래 경계를 첨자 n 부터 2n 까지로 바꾼 (1)을 series-and-partial-sums 의 (4)로 보이고, 수렴한다고 가정하면 첨자열 2i 로 얻은 부분수열 (s_{2i}) 도 같은 극한으로 수렴해야 하므로(subsequence 의 (2), (3)) s_{2i} − s_i 가 0 으로 수렴해야 하는데 1/2 이상이라는 모순으로 발산을 보인다. 이중 합과 묶기는 쓰지 않는다. 부분합 수열이 위로 유계가 아니라는 (3)은 출처가 아르키메데스 성질로 직접 보이는 것을, 이 항목은 단조증가와 발산에서 단조수렴정리로 얻는다. 출처는 Example 2.5.11 앞 문단(p.90)에서 '급수가 수렴하면 항이 0 으로 가지만 함의는 한 방향뿐'이라 하고 이 예를 든다. 역사와 맥락의 두 문장은 출처의 각주(p.90)에서 읽은 것이다. 확인 질문 2 는 출처 Example 2.5.11(p.90)이 s_8 을 묶어 아래에서 누르는 계산(s_{2^k} ≥ 1 + k/2 의 k = 3)과 같다. 예시 '(2n)⁻¹ 의 급수'의 발산은 출처 Example 2.6.4(p.103)가 −1/(2m) 의 급수에 대해 증명을 독자에게 맡기며 적는 것과 같다(부호만 다르다). 예시 '조화급수의 꼬리'와 확인 질문 1 은 출처에 없다(검색한 범위). 출처의 연습문제 2.5.12(p.98)도 조화급수의 부분합 수열을 다룬다(고정된 k 에서 k 만큼 떨어진 두 항의 차는 0 으로 가지만 코시 수열이 아님을 보이라고 한다)."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 증명의 수학 오류 없음. Σ 와 유한 합 없이 재귀로 정한 부분합으로 증명. 첫째 항이 0 인 경우를 빼먹은 설명 문장과 출처 메모를 고침"
added: 2026-11-17
---

:::statement
수열, 단조증가, 위로 유계, 수렴, 발산은 [[sequence]], [[limit-of-sequence]]의 것이고, 부분합 수열과 급수의 수렴·발산은 [[series-and-partial-sums]]의 것이다. $n$번째 항이 $n^{-1}$인 수열([[sequence]]의 (1))의 급수를 **조화급수**(harmonic series)라 하고, 그 부분합 수열을 $(s_n)$이라 하자.

1. 모든 자연수 $n$에서 $s_{2n} - s_n \ge 2^{-1}$이다.
2. $n$번째 항이 $n^{-1}$인 수열은 $0$으로 수렴하지만, 조화급수는 발산한다.
3. $(s_n)$은 단조증가이고 위로 유계가 아니다. 곧 모든 실수 $B$에 대하여 $s_n > B$인 자연수 $n$이 있다.
:::

:::english
Sequences, monotone increasing, bounded above, convergence and divergence are those of the entries on sequences and on the limit of a sequence, and sequences of partial sums and convergence and divergence of series are those of the entry on series and partial sums. The series of the sequence whose $n$th term is $n^{-1}$ (item (1) of the entry on sequences) is called the **harmonic series**, and let $(s_n)$ be its sequence of partial sums.

1. $s_{2n} - s_n \ge 2^{-1}$ for every natural number $n$.
2. The sequence whose $n$th term is $n^{-1}$ converges to $0$, but the harmonic series diverges.
3. $(s_n)$ is monotone increasing and not bounded above; that is, for every real number $B$ there is a natural number $n$ with $s_n > B$.
:::

## 직관

계단을 오를 때 한 칸의 높이가 점점 낮아져도, 낮아지는 속도가 느리면 계단은 끝없이 높아질 수 있습니다. 조화급수의 항 $n^{-1}$은 $0$으로 가지만, 첨자 $n + 1$부터 $2n$까지의 $n$칸은 한 칸이 적어도 $(2n)^{-1}$이어서 그 $n$칸을 합치면 언제나 $2^{-1}$ 이상 올라갑니다. 이것이 (1)입니다. 비유가 맞는 곳은 높이가 부분합, 한 칸이 항이라는 점이고, 맞지 않는 곳은 실제 계단에는 칸이 유한 개뿐이라는 점입니다.

부분합 수열이 어떤 수 $S$로 수렴한다면, 번호가 충분히 큰 곳에서 $s_n$과 $s_{2n}$은 둘 다 $S$에 가까워서 그 차가 $0$에 가까워야 합니다. (1)은 그 차가 늘 $2^{-1}$ 이상이라고 말하므로 수렴할 수 없습니다. [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]는 정리의 역이 성립하지 않는 대표적인 예입니다.

## 증명

:::idea
[[series-and-partial-sums|급수와 부분합]]의 (4)로 첨자 $n + 1$부터 $2n$까지의 항이 모두 $(2n)^{-1}$ 이상이라는 것에서 $s_{2n} - s_n \ge n(2n)^{-1} = 2^{-1}$을 얻는다. 수렴한다면 부분수열 $(s_{2n})$도 같은 극한으로 가므로 이 차가 $0$으로 가야 해 모순이다.
:::

:::hint
$n < m \le 2n$인 자연수 $m$에서 $m^{-1} \ge (2n)^{-1}$이다.
:::

:::hint
$i$에서의 값이 $2i$인 함수는 첨자열이다. 부분수열 $(s_{2i})$와 $(s_i)$의 차의 극한을 생각한다.
:::

:::proof
(K…)는 [[real-number-arithmetic]], "순서 성질 (6)"처럼 쓴 것은 [[order-properties-of-reals]], "부분합 (4)"는 [[series-and-partial-sums]], "부분수열 (2)"는 [[subsequence]]의 번호이다. 자연수는 양의 정수이고([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]), 정수의 합과 곱은 정수이며([[even-and-odd]]), 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)을 쓰고, 순서 성질 (10)에 의해 이것들을 실수의 부등식으로 써도 된다. $x_n = n^{-1}$로 둔다.

**1의 증명.** 자연수 $n$을 잡는다. $2n = n + n$이고 $0 < n$이므로 (Z7)에 의해 $n < 2n$이며, $2n$은 자연수이다. $n < m \le 2n$인 자연수 $m$을 잡으면, $m = 2n$이면 $x_m = (2n)^{-1}$이고, $m < 2n$이면 $0 < m$이므로 순서 성질 (6)의 (ii)에 의해 $(2n)^{-1} < m^{-1} = x_m$이다. 어느 경우든 $(2n)^{-1} \le x_m$이다. 부분합 (4)의 (i)을 $n < 2n$과 $a = (2n)^{-1}$에 쓰면
$$
(2n - n)(2n)^{-1} \le s_{2n} - s_n
$$
이다. 정수의 계산으로 $2n - n = n$이고, $2 \ne 0$, $n \ne 0$이므로 (K12)의 (vi)에 의해 $(2n)^{-1} = 2^{-1}n^{-1}$이며, (K1), (K2), (K8)의 (iii), (K4)에 의해 $n \cdot 2^{-1}n^{-1} = 2^{-1}(n n^{-1}) = 2^{-1}$이다. 따라서 $s_{2n} - s_n \ge 2^{-1}$이다.

**2의 증명.** [[basic-limits]]의 (2)에 의해 $(x_n)$은 $0$으로 수렴한다. 조화급수가 수렴한다고 가정하고([[proof-by-contradiction|귀류법]]) $(s_n)$의 극한을 $S$라 하자. $i$에서의 값이 $2i$인 함수 $\mathbb{N} \to \mathbb{N}$은 모든 자연수 $i$에서 $2i < 2i + 2 = 2(i + 1)$이므로((Z7), (Z8)) 부분수열 (2)에 의해 첨자열이고, 부분수열 (3)에 의해 $i$번째 항이 $s_{2i}$인 수열은 $S$로 수렴한다. [[limit-of-sum-and-product|극한의 사칙연산]]의 (2)에 의해 $i$번째 항이 $s_{2i} - s_i$인 수열은 $S - S = 0$으로 수렴한다((K8)의 (ii)). 한편 (1)에 의해 모든 $i$에서 $2^{-1} \le s_{2i} - s_i$이므로 [[limits-preserve-inequalities|극한과 부등식]]의 (3)에 의해 $2^{-1} \le 0$이다. 그런데 순서 성질 (8)에 의해 $0 < 2^{-1}$이므로 순서 성질 (1)의 (i)에 어긋난다. 따라서 조화급수는 발산한다.

**3의 증명.** 순서 성질 (10)과 (6)의 (i)에 의해 모든 $n$에서 $0 < x_n$이므로, 부분합 (3)에 의해 $(s_n)$은 단조증가이다. $(s_n)$이 위로 유계라면 [[monotone-convergence-theorem|단조수렴정리]]의 (1)에 의해 수렴하게 되어 (2)에 어긋난다. 따라서 위로 유계가 아니다. [[sequence]]의 위로 유계의 정의에 의해 이것은 어떤 실수 $B$도 모든 $n$에서 $s_n \le B$를 만족하지 않는다는 것, 곧 모든 실수 $B$에 대하여 $s_n \le B$가 성립하지 않는 자연수 $n$이 있다는 것이고, 순서 성질 (1)의 (iii)에 의해 그런 $n$에서 $s_n > B$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$n$번째 항이 $(2n)^{-1}$인 수열의 급수]
이 급수도 발산합니다. 수렴한다면 [[linearity-of-series|급수의 선형성]]의 (2)를 $c = 2$에 써서 $n$번째 항이 $2(2n)^{-1}$인 수열의 급수가 수렴하는데, $2(2n)^{-1} = 2 \cdot 2^{-1} n^{-1} = n^{-1}$((K12)의 (vi), (K2), (K8)의 (iii), (K1), (K4))이므로 조화급수가 수렴하게 되어 이 항목의 (2)에 어긋나기 때문입니다. 항을 절반으로 줄여도 발산하는 것은 그대로입니다.
:::

:::example[조화급수의 꼬리]
자연수 $K$에 대하여 $n$번째 항이 $(n + K)^{-1}$인 수열은 $(n^{-1})$의 $K$-꼬리이므로, [[tail-of-a-series|급수의 꼬리]]의 (2)와 이 항목의 (2)에 의해 그 급수도 발산합니다. 예컨대 $K = 1000$이면 첫째 항이 $1001^{-1}$로 작지만 급수는 발산합니다.
:::

:::counterexample[항이 $0$으로 수렴해도 급수는 발산할 수 있다]
이 항목의 (2)가 그 예입니다. [[basic-limits]]의 (2)에 의해 항은 $0$으로 수렴하지만 급수는 발산합니다. 항이 $0$으로 수렴한다는 것은 급수가 수렴하기 위한 필요조건일 뿐이고([[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (1)), 충분조건이 아닙니다.
:::

## 역사와 맥락

출처는 각주에서 조화급수의 발산이 급수 이론이 엄밀해지기 오래전부터 알려져 있었다고 적고, 출처가 쓴 증명(첨자가 $2^k$인 부분합을 묶어 아래에서 누르는 증명)이 가장 이른 증명이며 니콜 오렘(Nicole Oresme, 1323?–1382)이 주었다고 적습니다.

## 확인 질문

:::check[(1)을 $n = 1$과 $n = 2$에서 직접 확인하면?]
$s_1 = 1$, $s_2 = 1 + 2^{-1}$, $s_4 = s_2 + 3^{-1} + 4^{-1}$입니다. $n = 1$이면 $s_2 - s_1 = 2^{-1}$로 등호가 성립합니다. $n = 2$이면 $s_4 - s_2 = 3^{-1} + 4^{-1} = 7 \cdot 12^{-1}$이고 $7 \cdot 12^{-1} > 6 \cdot 12^{-1} = 2^{-1}$입니다.
:::

:::check[$s_8 \ge 2$인가?]
그렇습니다. (1)을 $n = 4$와 $n = 2$에 쓰면 $s_8 - s_4 \ge 2^{-1}$이고 $s_4 - s_2 \ge 2^{-1}$입니다. $s_2 = 1 + 2^{-1}$이므로, 두 부등식을 [[order-properties-of-reals]]의 (2)의 (iii)으로 더하면 $s_8 - s_2 \ge 1$이고 $s_8 \ge 1 + (1 + 2^{-1}) > 2$입니다. 부분합이 어떤 수도 넘어선다는 것은 (3)이 말합니다.
:::
