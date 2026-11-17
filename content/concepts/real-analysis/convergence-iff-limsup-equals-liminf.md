---
title: 수렴과 상극한·하극한
title_en: Convergence and the Limit Superior and Inferior
aliases: [상극한과 하극한이 같으면 수렴한다, 부분수열의 극한과 상극한, convergence iff limsup equals liminf, subsequential limits]
kind: proposition
field: real-analysis
msc: ["40A05", "26A03"]
level: undergrad
summary: 유계인 수열이 수렴하는 것은 정확히 하극한과 상극한이 같을 때이고, 그때 극한은 그 값이다. 부분수열의 하극한과 상극한은 원래 수열의 하극한과 상극한 사이에 있고, 유계인 수열이 L 로 수렴하는 것은 정확히 수렴하는 부분수열이 모두 L 로 수렴할 때이다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, order-properties-of-reals, archimedean-property, absolute-value, sequence, limit-of-sequence, limit-is-unique, basic-limits, convergent-sequence-is-bounded, squeeze-lemma, limits-preserve-inequalities, limit-of-sum-and-product, subsequence, limit-superior-and-inferior, subsequence-converging-to-limsup]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.3.2절 Proposition 2.3.5 와 그 증명 (p.76–77), Proposition 2.3.6 과 그 증명 (p.77), Proposition 2.3.7 (p.77), 연습문제 2.3.3, 2.3.4 (p.80)
    checked: original
    note: "출처의 Proposition 2.3.5(p.76)는 유계인 수열이 수렴하는 것은 정확히 lim inf = lim sup 일 때이고, 수렴하면 lim = lim inf = lim sup 이라는 것이다. 이 항목의 (1)이고 증명의 경로(b_n ≤ x_n ≤ a_n 과 조임 정리, Theorem 2.3.4 와 Proposition 2.1.17)는 출처와 같다. 출처는 하극한 쪽을 'Similarly' 로 넘긴다. 이 항목은 subsequence-converging-to-limsup 의 (2)로 직접 썼다. (1)의 첫 문장(수렴하는 수열은 유계이므로 상극한과 하극한이 있다)은 이 항목이 덧붙였다. 출처의 Proposition 2.3.6(p.77)은 유계인 수열과 그 부분수열 {x_{n_k}} 에 대해 lim inf x_n ≤ lim inf x_{n_k} ≤ lim sup x_{n_k} ≤ lim sup x_n 이라는 것이고 이 항목의 (2)이다. 출처는 가운데 부등식을 '이미 증명했다'고 하고, 셋째 부등식을 c_n := sup{x_{n_k} : k ≥ n}, n_k ≥ k 로 얻는 포함 관계, '부분집합의 상한은 집합의 상한 이하', Lemma 2.2.3 으로 증명하며, 첫째 부등식은 연습문제(연습문제 2.3.3)로 둔다. 이 항목은 셋째 부등식을 같은 경로로, 첫째 부등식도 하한으로 증명했다. 출처는 부분수열이 유계라는 것을 따로 말하지 않는다. 이 항목은 subsequence 의 (6)을 인용했다. (2)의 둘째 문장(수렴하는 부분수열의 극한은 하극한과 상극한 사이)은 출처가 Proposition 2.3.6 뒤(p.77)에 적는 문장이다. 출처의 Proposition 2.3.7(p.77)은 '유계인 수열이 수렴하고 x 로 수렴하는 것은 정확히 수렴하는 모든 부분수열이 x 로 수렴할 때'이고, 증명은 연습문제(연습문제 2.3.4)로 둔다. 이 항목의 (3)이고 증명은 이 항목의 것이다. 이 항목은 출처의 첨자열 n_k 대신 p_k 를 쓰고, 부분수열에 대한 상한·하한의 수열을 c_j, d_j 로 썼다. 예시 '부호가 번갈아 바뀌는 n⁻¹'의 수열은 출처의 연습문제 2.3.5 a)((−1)ⁿ/n 의 상극한과 하극한을 구하라)와 같은 수열이다. 반례 '유계라는 가정을 빼면'의 수열은 출처 Example 2.3.14(p.80; 홀수 번째 0, 짝수 번째 n)와 홀짝만 바꾼 수열이고, 출처는 그 예에서 상극한이 ∞ 임을 보인다. 이 반례의 결론(수렴하는 부분수열은 모두 0 으로 수렴하지만 수열은 발산한다)은 출처에 없다(검색한 범위). 출처의 연습문제 2.1.15(p.59)는 홀수 번째 n, 짝수 번째 1/n 인 수열이 유계인지, 수렴하는 부분수열이 있는지 묻는데, 이 반례의 수열(홀수 번째 n, 짝수 번째 0)과 거의 같은 수열이다. 출처의 연습문제 2.3.11 은 (3)의 '유계' 가정을 '모든 부분수열이 x 로 수렴하는 부분수열을 갖는다'로 바꾼 강한 판이다. 확인 질문은 출처에 없다(검색한 범위)."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 증명의 수학 오류 없음. 가산 선택 없이 가장 작은 첨자와 재귀 정리로 부분수열을 만든다. 출처 메모, 근거 인용, 완비성이라는 이름을 고침"
added: 2026-11-17
---

:::statement
수열과 유계는 [[sequence]]의 것이고, 수렴과 기호 $\lim$은 [[limit-of-sequence]]과 [[limit-is-unique]]의 것이며, 첨자열과 부분수열은 [[subsequence]]의 것이고, 상극한과 하극한은 [[limit-superior-and-inferior]]의 것이다. $(x_n)$을 수열이라 하자.

1. (수렴과 상극한·하극한) $(x_n)$이 수렴하면 [[convergent-sequence-is-bounded|수렴하는 수열은 유계라는 정리]]의 (2)에 의해 유계이므로 상극한과 하극한이 있다. $(x_n)$이 유계일 때, $(x_n)$이 수렴하는 것은 정확히 $\liminf_{n \to \infty} x_n = \limsup_{n \to \infty} x_n$일 때이다. 이때
$$
\lim_{n \to \infty} x_n = \liminf_{n \to \infty} x_n = \limsup_{n \to \infty} x_n
$$
이다.
2. (부분수열의 상극한·하극한) $(x_n)$이 유계이고 $(p_k)$가 첨자열이라 하자. 그러면 부분수열 $(x_{p_k})$는 유계이고
$$
\liminf_{n \to \infty} x_n \le \liminf_{k \to \infty} x_{p_k} \le \limsup_{k \to \infty} x_{p_k} \le \limsup_{n \to \infty} x_n
$$
이다. 특히 $(x_{p_k})$가 수렴하면 $\liminf_{n \to \infty} x_n \le \lim_{k \to \infty} x_{p_k} \le \limsup_{n \to \infty} x_n$이다.
3. (수렴하는 부분수열로 판정하기) $(x_n)$이 유계이고 $L$이 실수일 때, $(x_n)$이 $L$로 수렴하는 것은 정확히 $(x_n)$의 수렴하는 부분수열이 모두 $L$로 수렴할 때이다.
:::

:::english
Sequences and boundedness are those of the entry on sequences, convergence and the symbol $\lim$ are those of the entries on the limit of a sequence and on uniqueness of limits, index sequences and subsequences are those of the entry on subsequences, and the limit superior and limit inferior are those of the entry on them. Let $(x_n)$ be a sequence.

1. (Convergence and the limit superior and inferior) If $(x_n)$ converges, then it is bounded by item (2) of the entry stating that convergent sequences are bounded, so it has a limit superior and a limit inferior. When $(x_n)$ is bounded, $(x_n)$ converges exactly when $\liminf_{n \to \infty} x_n = \limsup_{n \to \infty} x_n$. In that case
$$
\lim_{n \to \infty} x_n = \liminf_{n \to \infty} x_n = \limsup_{n \to \infty} x_n.
$$
2. (Limit superior and inferior of a subsequence) Let $(x_n)$ be bounded and $(p_k)$ an index sequence. Then the subsequence $(x_{p_k})$ is bounded and
$$
\liminf_{n \to \infty} x_n \le \liminf_{k \to \infty} x_{p_k} \le \limsup_{k \to \infty} x_{p_k} \le \limsup_{n \to \infty} x_n.
$$
In particular, if $(x_{p_k})$ converges, then $\liminf_{n \to \infty} x_n \le \lim_{k \to \infty} x_{p_k} \le \limsup_{n \to \infty} x_n$.
3. (A test by convergent subsequences) When $(x_n)$ is bounded and $L$ is a real number, $(x_n)$ converges to $L$ exactly when every convergent subsequence of $(x_n)$ converges to $L$.
:::

## 직관

[[limit-superior-and-inferior|상극한과 하극한]]의 직관에서 $a_n$은 $n$번째 항부터 남은 항들 위의 천장, $b_n$은 그 아래의 바닥이었습니다. 수열은 언제나 바닥과 천장 사이에 있습니다. 천장과 바닥이 같은 수로 내려오고 올라오면 그 사이에 낀 수열도 그 수로 갈 수밖에 없고, 이것이 (1)의 한 방향이며 [[squeeze-lemma|조임 정리]]가 하는 일입니다. 거꾸로 수열이 $L$로 수렴하면, 상극한으로 수렴하는 부분수열도 $L$로 가야 하므로 상극한이 $L$입니다.

부분수열은 원래 수열의 항 가운데 일부만 남긴 것이고, $j$번째 이후의 부분수열의 항은 원래 수열의 $j$번째 이후의 항입니다([[subsequence|부분수열]]의 (1)). 그래서 부분수열의 천장은 원래 수열의 천장보다 높을 수 없고, 바닥은 낮을 수 없습니다. 이것이 (2)입니다. 상극한과 하극한은 부분수열이 가질 수 있는 극한 가운데 가장 큰 것과 가장 작은 것입니다.

(3)은 (1)과 상극한·하극한으로 수렴하는 부분수열을 합친 것입니다. 수렴하는 부분수열이 모두 $L$로 가면, 상극한과 하극한으로 수렴하는 부분수열도 $L$로 가므로 둘 다 $L$이고 (1)에 의해 수열이 수렴합니다. 이 방향에서 유계라는 가정은 상극한과 하극한이 있다는 데에서 쓰이고, 빼면 결론이 깨집니다(아래 반례).

## 증명

:::idea
(1)은 $b_n \le x_n \le a_n$에 조임 정리를 쓰는 방향과, 상극한·하극한으로 수렴하는 부분수열에 부분수열의 극한을 쓰는 방향으로 나뉜다. (2)는 $j$번째 이후의 부분수열 항이 $j$번째 이후의 원래 항이라는 포함 관계에서 상한·하한을 비교한다.
:::

:::hint
(2)에서 부분수열 $(x_{p_k})$의 $j$번째 항부터의 값의 집합을 $T_j$라 하면, [[subsequence|부분수열]]의 (1)에 의해 $T_j$의 원소는 모두 $S_j$의 원소이다.
:::

:::hint
(3)의 거꾸로 방향에서는 [[subsequence-converging-to-limsup|상극한으로 수렴하는 부분수열]]이 주는 두 부분수열이 "수렴하는 부분수열"이라는 것을 쓴다.
:::

:::proof
$S_j$, $a_j$, $b_j$($j$는 자연수)는 [[limit-superior-and-inferior]]의 것이고 "상극한 (2)"처럼 쓴 것은 그 항목의 번호이다. "부분수열 (1)"은 [[subsequence]]의 번호, "부분수열 정리 (1)"은 [[subsequence-converging-to-limsup]]의 번호, "순서 성질 (1)의 (ii)"는 [[order-properties-of-reals]]의 번호이다. 자연수는 양의 정수이고([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술), 정수의 순서에는 [[well-ordering-principle]]의 (Z6)을 쓴다.

**1의 증명.** 첫 문장은 [[convergent-sequence-is-bounded|수렴하는 수열은 유계라는 정리]]의 (2)와 상극한과 하극한의 정의(유계인 수열에 정의된다)에서 나온다. $(x_n)$을 유계라 하고 $L_1 = \liminf_{n \to \infty} x_n$, $L_2 = \limsup_{n \to \infty} x_n$으로 둔다.

먼저 $L_1 = L_2$라 하고 이 값을 $L$이라 하자. 상극한과 하극한의 정의에 의해 $(b_n)$과 $(a_n)$은 모두 $L$로 수렴하고, 상극한 (2)에 의해 모든 자연수 $n$에서 $b_n \le x_n \le a_n$이다. [[squeeze-lemma|조임 정리]]의 (1)에 의해 $(x_n)$은 수렴하고 $\lim_{n \to \infty} x_n = L$이다.

거꾸로 $(x_n)$이 실수 $L$로 수렴한다고 하자. 부분수열 정리 (1)에 의해 첨자열 $(p_k)$가 있어 $(x_{p_k})$가 $L_2$로 수렴한다. 부분수열 (3)에 의해 $(x_{p_k})$는 $L$로도 수렴하므로, [[limit-is-unique]]에 의해 $L_2 = L$이다. 또 부분수열 정리 (2)에 의해 첨자열 $(q_k)$가 있어 $(x_{q_k})$가 $L_1$로 수렴하고, 부분수열 (3)에 의해 $(x_{q_k})$는 $L$로도 수렴하므로 [[limit-is-unique]]에 의해 $L_1 = L$이다. 따라서 $L_1 = L_2 = L = \lim_{n \to \infty} x_n$이다.

**2의 증명.** 모든 자연수 $k$에서 $y_k = x_{p_k}$로 두면 $(y_k)$는 부분수열이고, $(x_n)$이 유계이므로 부분수열 (6)에 의해 $(y_k)$도 유계이다. 그래서 [[limit-superior-and-inferior|상극한과 하극한]]의 정의와 성질을 수열 $(y_k)$에 쓸 수 있다. 그 항목의 $S_j$, $a_j$, $b_j$를 $(y_k)$에 대해 만든 것을 각각 $T_j$, $c_j$, $d_j$로 쓴다. 곧 자연수 $j$에 대하여
$$
T_j = \{y_k : k \in \mathbb{N},\ k \ge j\}, \qquad c_j = \sup T_j, \qquad d_j = \inf T_j
$$
이고, $\limsup_{k \to \infty} y_k = \lim_{j \to \infty} c_j$, $\liminf_{k \to \infty} y_k = \lim_{j \to \infty} d_j$이다.

가운데 부등식 $\liminf_{k \to \infty} y_k \le \limsup_{k \to \infty} y_k$는 상극한 (5)를 $(y_k)$에 쓴 것이다.

자연수 $j$에 대하여 $T_j \subseteq S_j$임을 보인다. $T_j$의 원소는 $k \ge j$인 자연수 $k$에 대한 $y_k = x_{p_k}$이다. 부분수열 (1)에 의해 $p_k \ge j$이고 $p_k$는 자연수이므로 $x_{p_k} \in S_j$이다.

셋째 부등식을 보인다. $a_j$는 $S_j$의 상계이므로, $T_j$의 모든 원소 $y$는 $S_j$의 원소이어서 $y \le a_j$이다. 곧 $a_j$는 $T_j$의 상계이다. $c_j$는 $T_j$의 상한, 곧 $T_j$의 모든 상계 이하인 상계이므로 $c_j \le a_j$이다. 이것이 모든 자연수 $j$에서 성립하고 $(c_j)$와 $(a_j)$는 수렴하므로, [[limits-preserve-inequalities|극한과 부등식]]의 (1)에 의해 $\lim_{j \to \infty} c_j \le \lim_{j \to \infty} a_j$, 곧 $\limsup_{k \to \infty} y_k \le \limsup_{n \to \infty} x_n$이다.

첫째 부등식을 보인다. $b_j$는 $S_j$의 하계이므로, $T_j$의 모든 원소 $y$는 $S_j$의 원소이어서 $b_j \le y$이다. 곧 $b_j$는 $T_j$의 하계이다. $d_j$는 $T_j$의 하한, 곧 $T_j$의 모든 하계 이상인 하계이므로 $b_j \le d_j$이다. 이것이 모든 자연수 $j$에서 성립하고 $(b_j)$와 $(d_j)$는 수렴하므로, 극한과 부등식의 (1)에 의해 $\lim_{j \to \infty} b_j \le \lim_{j \to \infty} d_j$, 곧 $\liminf_{n \to \infty} x_n \le \liminf_{k \to \infty} y_k$이다.

$(y_k)$가 수렴하면, $(y_k)$는 유계이므로 이 항목의 (1)을 $(y_k)$에 써서 $\liminf_{k \to \infty} y_k = \lim_{k \to \infty} y_k = \limsup_{k \to \infty} y_k$이다. 이것을 세 부등식에 넣고 [[order-properties-of-reals|순서 성질]] (1)의 (v)로 이으면 마지막 문장이 나온다.

**3의 증명.** $(x_n)$이 $L$로 수렴하면, 부분수열 (3)에 의해 $(x_n)$의 모든 부분수열이, 특히 수렴하는 부분수열이 모두 $L$로 수렴한다.

거꾸로 $(x_n)$의 수렴하는 부분수열이 모두 $L$로 수렴한다고 하자. 부분수열 정리 (1)에 의해 첨자열 $(p_k)$가 있어 $(x_{p_k})$가 $\limsup_{n \to \infty} x_n$으로 수렴한다. 이것은 수렴하는 부분수열이므로 가정에 의해 $L$로도 수렴하고, [[limit-is-unique]]에 의해 $\limsup_{n \to \infty} x_n = L$이다. 부분수열 정리 (2)에 의해 첨자열 $(q_k)$가 있어 $(x_{q_k})$가 $\liminf_{n \to \infty} x_n$으로 수렴하고, 이것도 수렴하는 부분수열이므로 가정에 의해 $L$로 수렴하며 [[limit-is-unique]]에 의해 $\liminf_{n \to \infty} x_n = L$이다. 따라서 하극한과 상극한이 같고, (1)에 의해 $(x_n)$은 수렴하며 $\lim_{n \to \infty} x_n = L$이다. $\blacksquare$
:::

## 예시와 반례

:::example[부호가 번갈아 바뀌는 $n^{-1}$]
$n$이 짝수이면 $x_n = n^{-1}$, 홀수이면 $x_n = -n^{-1}$인 수열을 생각합니다([[even-and-odd]]에서 받아들인 사실에 의해 각 항이 하나로 정해집니다). [[order-properties-of-reals]]의 (10)과 (3)의 (ii)에 의해 $-k^{-1} < 0 < k^{-1}$이므로 모든 $k$에서 $-k^{-1} \le x_k \le k^{-1}$이고, 특히 $|x_k| = k^{-1}$이고, [[prime-number]]의 (Z1)에 의해 $1 \le k$이므로 그 항목의 (6)의 (ii)에 의해 $k^{-1} \le 1$($k = 1$이면 등호)이어서 유계입니다.

자연수 $n$과 $k \ge n$에 대하여, $k = n$이면 $k^{-1} = n^{-1}$이고 $n < k$이면 그 항목의 (6)의 (ii)에 의해 $k^{-1} < n^{-1}$이므로 $k^{-1} \le n^{-1}$이고, 그 항목의 (3)의 (iii)에 의해 $-n^{-1} \le -k^{-1}$입니다. 따라서 $-n^{-1} \le x_k \le n^{-1}$입니다. 곧 $n^{-1}$은 $S_n$의 상계이고($S_n$, $a_n$, $b_n$은 [[limit-superior-and-inferior]]의 것) $-n^{-1}$은 $S_n$의 하계이므로 $a_n \le n^{-1}$이고 $-n^{-1} \le b_n$입니다.

[[basic-limits]]의 (2)에 의해 $\lim_{n \to \infty} n^{-1} = 0$이고, [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)를 $c = -1$로 쓰면 $\lim_{n \to \infty} (-n^{-1}) = 0$입니다. [[limits-preserve-inequalities|극한과 부등식]]의 (1)에 의해 상극한은 $0$ 이하이고 하극한은 $0$ 이상이며, [[limit-superior-and-inferior]]의 (5)에 의해 하극한은 상극한 이하입니다. 그러면 $0 \le \liminf_{n \to \infty} x_n \le \limsup_{n \to \infty} x_n \le 0$이므로 [[order-properties-of-reals]]의 (1)의 (ii)에 의해 둘 다 $0$이고, (1)에 의해 $(x_n)$은 $0$으로 수렴합니다.
:::

:::counterexample[유계라는 가정을 빼면]
$n$이 홀수이면 $x_n = n$, 짝수이면 $x_n = 0$인 수열을 생각합니다. $k$에서의 값이 $2k$인 함수는 $2(k + 1) = 2k + 2 > 2k$이므로 [[subsequence]]의 (2)에 의해 첨자열이고, 그것으로 얻은 짝수 번째 항의 부분수열은 모든 항이 $0$이므로 $0$으로 수렴합니다. 이 수열의 수렴하는 부분수열은 모두 $0$으로 수렴하지만 수열은 발산합니다. 그래서 (3)에서 유계라는 가정은 뺄 수 없습니다.

수렴하는 부분수열 $(x_{p_k})$의 극한을 $L'$이라 하고, [[convergent-sequence-is-bounded|수렴하는 수열은 유계라는 정리]]의 (2)에 의해 모든 $k$에서 $|x_{p_k}| \le B$인 실수 $B$를 잡습니다. 먼저 모든 자연수 $K$에 대하여 $k \ge K$이고 $p_k$가 짝수인 자연수 $k$가 있음을 봅니다. 어떤 $K$에서 그런 $k$가 없다고 하면, [[archimedean-property|아르키메데스 성질]]의 (1)로 $B < k_0$인 자연수 $k_0$을 잡고 $k = \max\{k_0, K\}$로 둘 때 $p_k$는 홀수이므로 [[subsequence]]의 (1)에 의해 $x_{p_k} = p_k \ge k \ge k_0 > B$인데, $x_{p_k} = |x_{p_k}| \le B$이어서 모순입니다. 이제 양수 $\varepsilon$에 대하여 $k \ge M$이면 $|x_{p_k} - L'| < \varepsilon$인 자연수 $M$을 잡고, $k \ge M$이고 $p_k$가 짝수인 $k$를 잡으면 $x_{p_k} = 0$이므로 $|L'| = |0 - L'| < \varepsilon$입니다. [[order-properties-of-reals]]의 (9)에 의해 $|L'| \le 0$이고, [[absolute-value|절댓값]]의 (2)에 의해 $L' = 0$입니다.

한편 실수 $B$가 주어지면 아르키메데스 성질의 (1)에 의해 $B < N$인 자연수 $N$이 있고, $2N + 1$은 홀수이므로 $x_{2N+1} = 2N + 1 > N > B$입니다. 곧 이 수열은 유계가 아니고, [[convergent-sequence-is-bounded|수렴하는 수열은 유계라는 정리]]의 (2)에 의해 발산합니다.
:::

## 확인 질문

:::check[유계인 수열의 상극한이 $2$이면, $5$로 수렴하는 부분수열이 있을 수 있는가?]
없습니다. (2)에 의해 수렴하는 부분수열의 극한은 상극한 $2$ 이하인데, $2 < 5$이므로 극한이 $5$일 수 없습니다([[order-properties-of-reals]]의 (1)의 (i)).
:::

:::check[유계인 수열의 하극한과 상극한이 같으면 그 수열의 부분수열은 모두 수렴하는가?]
그렇습니다. (1)에 의해 수열이 수렴하고, [[subsequence]]의 (3)에 의해 모든 부분수열이 같은 극한으로 수렴합니다. (2)로 보아도 됩니다. 부분수열의 하극한과 상극한이 원래 수열의 같은 두 값 사이에 끼므로 둘 다 그 값이고, (1)을 부분수열에 쓰면 부분수열이 수렴합니다.
:::
