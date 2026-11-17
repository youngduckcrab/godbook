---
title: 코시 수열
title_en: Cauchy Sequence
aliases: [기본수열, Cauchy sequence, fundamental sequence]
kind: definition
field: real-analysis
msc: ["40A05", "26A03"]
level: undergrad
summary: 수열이 코시 수열이라는 것은 모든 양수 ε 에 대하여 자연수 M 이 있어 M 이상인 모든 n, k 에서 |x_n − x_k| < ε 인 것이다. 그 부정을 같은 꼴로 풀어 쓰고, 코시 수열은 유계이며 수렴하는 수열은 코시 수열임을 보인다.
requires: [conditional-statement, logical-connectives, quantifiers, negation-of-quantified-statements, negation-of-conditional, well-ordering-principle, even-and-odd, real-number-arithmetic, real-order-axioms, order-properties-of-reals, archimedean-property, absolute-value, triangle-inequality, sequence, limit-of-sequence, basic-limits, convergent-sequence-is-bounded, tail-of-a-sequence]
sources:
  - ref: lebl-basic-analysis
    loc: 2.4절 Definition 2.4.1, Example 2.4.2, Example 2.4.3, Proposition 2.4.4 와 그 증명 (p.84), Theorem 2.4.5 의 증명 첫 문단 (p.85)
    checked: original
    note: "출처의 Definition 2.4.1(p.84)은 수열 {x_n} 이 코시 수열인 것을 '모든 ε > 0 에 대하여 M ∈ ℕ 이 있어 n ≥ M 이고 k ≥ M 인 모든 n, k 에서 |x_n − x_k| < ε'로 정의한다. 이 항목은 같은 정의를 '정확히 ~일 때'의 꼴과 한정 기호로 쓰고, 그 부정 (1)을 풀어 적었다. (1)은 출처에 명제로 없다(검색한 범위). 출처의 Proposition 2.4.4(p.84)는 코시 수열이 유계라는 것이고(이 항목의 (2)), 출처는 ε = 1 의 M 을 잡고 역삼각부등식으로 n ≥ M 이면 |x_n| < 1 + |x_M| 을 얻은 뒤 B := max{|x_1|, …, |x_{M−1}|, 1 + |x_M|} 로 둔다. 이 항목은 유한집합의 최댓값 대신 convergent-sequence-is-bounded 의 (1)과 두 수의 max 를 쓰고, 삼각부등식 (1)을 썼다. (3)(수렴하는 수열은 코시 수열)은 출처가 Theorem 2.4.5(p.85)의 증명 첫 문단에서 ε/2 와 삼각부등식으로 보이는 방향이고, 이 항목도 같은 경로이다. 예시 'n⁻¹'은 출처 Example 2.4.2 와 같은 수열이다. 출처는 M > 2/ε 로 잡고 |1/n − 1/k| ≤ 1/n + 1/k 를 쓰며, 이 항목은 1/M < ε 로 잡고 두 수가 0 과 1/M 사이에 있다는 것을 썼다. 반례 '번갈아 바뀌는 수열'은 출처 Example 2.4.3 과 같은 수열과 같은 경로(짝수 n ≥ M 과 k = n + 1)이다. 직관의 둘째 문단은 출처 p.85 의 문장('코시의 정의의 요점은 n 과 k 가 따로 움직이고 얼마든지 멀리 떨어질 수 있다는 것')과 같은 내용이다. 확인 질문 1 은 출처에 없다(검색한 범위). 확인 질문 2 의 수열 n 은 출처 p.51 의 예와 같은 수열이고, 그것이 코시 수열이 아님을 정의로 보이는 것은 출처에 없다(검색한 범위)."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 증명의 수학 오류 없음. 가산 선택 없이 가장 작은 첨자와 재귀 정리로 부분수열을 만든다. 출처 메모, 근거 인용, 완비성이라는 이름을 고침"
added: 2026-11-17
---

:::statement
수열과 유계는 [[sequence]]의 것이고, 수렴은 [[limit-of-sequence]]의 것이며, 절댓값은 [[absolute-value]]의 것이다. $(x_n)$을 수열이라 하자.

**코시 수열.** $(x_n)$이 **코시 수열**(Cauchy sequence)인 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 자연수 $M$이 있어 $n \ge M$이고 $k \ge M$인 모든 자연수 $n$, $k$에서 $|x_n - x_k| < \varepsilon$일 때이다. [[quantifiers|한정 기호]]로 쓰면, $(x_n)$이 코시 수열인 것은 정확히
$$
\forall \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \Rightarrow \bigl(\exists M \in \mathbb{N},\ \forall n \in \mathbb{N},\ \forall k \in \mathbb{N},\ ((n \ge M \land k \ge M) \Rightarrow |x_n - x_k| < \varepsilon)\bigr)\Bigr)
$$
가 참일 때이다. 수열의 극한과 달리 이 정의에는 극한이 될 수가 나오지 않고, 항들끼리의 거리만 나온다.

다음이 성립한다.

1. (코시 수열이 아니라는 것) $(x_n)$이 코시 수열이 아닌 것은 정확히
$$
\exists \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \land \bigl(\forall M \in \mathbb{N},\ \exists n \in \mathbb{N},\ \exists k \in \mathbb{N},\ (n \ge M \land k \ge M \land |x_n - x_k| \ge \varepsilon)\bigr)\Bigr)
$$
가 참일 때이다. 곧 어떤 양의 실수 $\varepsilon$이 있어, 모든 자연수 $M$에 대하여 $n \ge M$, $k \ge M$이고 $|x_n - x_k| \ge \varepsilon$인 자연수 $n$, $k$가 있을 때이다.
2. (코시 수열은 유계이다) $(x_n)$이 코시 수열이면 $(x_n)$은 유계이다. 더 자세히, $M$이 "$n \ge M$이고 $k \ge M$이면 $|x_n - x_k| < 1$"을 만족하는 자연수이고 $B_M$이 [[convergent-sequence-is-bounded|수렴하는 수열은 유계라는 정리]]의 (1)에서 $k = M$으로 얻은 실수이면, 모든 자연수 $n$에서 $|x_n| \le \max\{B_M, 1 + |x_M|\}$이다.
3. (수렴하는 수열은 코시 수열이다) $(x_n)$이 수렴하면 $(x_n)$은 코시 수열이다.
:::

:::english
Sequences and boundedness are those of the entry on sequences, convergence is that of the entry on the limit of a sequence, and the absolute value is that of the entry on absolute value. Let $(x_n)$ be a sequence.

**Cauchy sequences.** $(x_n)$ is a **Cauchy sequence** exactly when, for every positive real number $\varepsilon$, there is a natural number $M$ such that $|x_n - x_k| < \varepsilon$ for all natural numbers $n$, $k$ with $n \ge M$ and $k \ge M$. In terms of quantifiers, $(x_n)$ is a Cauchy sequence exactly when
$$
\forall \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \Rightarrow \bigl(\exists M \in \mathbb{N},\ \forall n \in \mathbb{N},\ \forall k \in \mathbb{N},\ ((n \ge M \land k \ge M) \Rightarrow |x_n - x_k| < \varepsilon)\bigr)\Bigr)
$$
is true. Unlike the limit of a sequence, this definition involves no candidate for a limit, only the distances between terms.

The following hold.

1. (Not being a Cauchy sequence) $(x_n)$ is not a Cauchy sequence exactly when
$$
\exists \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \land \bigl(\forall M \in \mathbb{N},\ \exists n \in \mathbb{N},\ \exists k \in \mathbb{N},\ (n \ge M \land k \ge M \land |x_n - x_k| \ge \varepsilon)\bigr)\Bigr)
$$
is true. That is, when there is a positive real number $\varepsilon$ such that for every natural number $M$ there are natural numbers $n$, $k$ with $n \ge M$, $k \ge M$ and $|x_n - x_k| \ge \varepsilon$.
2. (Cauchy sequences are bounded) If $(x_n)$ is a Cauchy sequence, then $(x_n)$ is bounded. More precisely, if $M$ is a natural number such that $|x_n - x_k| < 1$ whenever $n \ge M$ and $k \ge M$, and $B_M$ is the real number obtained from item (1) of the entry stating that convergent sequences are bounded with $k = M$, then $|x_n| \le \max\{B_M, 1 + |x_M|\}$ for every natural number $n$.
3. (Convergent sequences are Cauchy sequences) If $(x_n)$ converges, then $(x_n)$ is a Cauchy sequence.
:::

## 직관

어떤 수로 수렴한다는 것을 보이려면 그 수를 먼저 알아야 합니다. 코시 수열은 극한을 모르는 채로 "항들이 서로 가까워진다"는 것만 말합니다. 줄을 서서 걷는 사람들이 처음에는 흩어져 있다가, 어느 순서 이후의 사람들끼리는 누구를 골라 보아도 서로 $\varepsilon$보다 가까이 걷게 된다고 생각해 봅시다. 어느 순서가 정의의 $M$이고, 고른 두 사람이 $n$, $k$입니다. 비유가 맞지 않는 곳은, 사람들이 모여 걷는 "목적지"가 있는지를 이 정의는 말하지 않는다는 점입니다.

정의에서 $n$과 $k$는 서로 따로 움직입니다. 어떤 $n$과 그다음 항 $n + 1$처럼 붙어 있는 두 항만이 아니라, $M$ 이후라면 아무리 멀리 떨어진 두 항이어도 가까워야 합니다.

수렴하는 수열은 극한 근처에 모이므로 항들끼리도 가깝고, 이것이 (3)입니다. 코시 수열은 어느 번호 이후의 항이 모두 한 항 $x_M$ 근처에 있으므로 유계이고, 이것이 (2)입니다. (2)의 증명은 [[convergent-sequence-is-bounded|수렴하는 수열은 유계라는 정리]]의 증명에서 극한 $L$을 항 $x_M$으로 바꾼 것입니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (1)의 (iii)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (3)"은 [[absolute-value]]의 번호, "삼각부등식 (1)"은 [[triangle-inequality]]의 번호이다.

**1의 증명.** 정의의 명제를 바깥부터 차례로 부정한다. 한정 명제의 참·거짓은 [[quantifiers]]의 규칙에 의해 안쪽의 열린 문장이 각 값에서 갖는 진릿값으로만 정해지고, $\Rightarrow$, $\land$, $\lnot$으로 만든 명제의 참·거짓은 진리표([[conditional-statement]], [[logical-connectives]])에 의해 각 부분의 진릿값으로만 정해진다. 따라서 명제의 한 부분을 모든 값에서 진릿값이 같은 열린 문장으로 바꾸어도 전체의 진릿값은 바뀌지 않는다. $\varepsilon$, $M$, $n$, $k$를 정해 두었을 때 다음과 같다.

- [[negation-of-quantified-statements]]의 1에 의해 "$\forall \varepsilon \in \mathbb{R},\ (\varepsilon > 0 \Rightarrow \cdots)$"의 부정은 "$\exists \varepsilon \in \mathbb{R},\ \lnot(\varepsilon > 0 \Rightarrow \cdots)$"와 진릿값이 같다.
- [[negation-of-conditional]]에 의해 "$\lnot(\varepsilon > 0 \Rightarrow \exists M \in \mathbb{N},\ \cdots)$"는 "$\varepsilon > 0 \land \lnot(\exists M \in \mathbb{N},\ \cdots)$"와 진릿값이 같다.
- [[negation-of-quantified-statements]]의 2에 의해 "$\lnot(\exists M \in \mathbb{N},\ \cdots)$"는 "$\forall M \in \mathbb{N},\ \lnot(\cdots)$"와 진릿값이 같다.
- [[negation-of-quantified-statements]]의 1을 두 번 써서 "$\lnot(\forall n \in \mathbb{N},\ \forall k \in \mathbb{N},\ \cdots)$"는 "$\exists n \in \mathbb{N},\ \lnot(\forall k \in \mathbb{N},\ \cdots)$"와, 다시 "$\exists n \in \mathbb{N},\ \exists k \in \mathbb{N},\ \lnot(\cdots)$"와 진릿값이 같다.
- [[negation-of-conditional]]에 의해 "$\lnot((n \ge M \land k \ge M) \Rightarrow |x_n - x_k| < \varepsilon)$"는 "$(n \ge M \land k \ge M) \land \lnot(|x_n - x_k| < \varepsilon)$"와 진릿값이 같다.
- 순서 성질 (1)의 (iii)에 의해 "$|x_n - x_k| < \varepsilon$"이 성립하지 않는 것은 정확히 $\varepsilon \le |x_n - x_k|$, 곧 $|x_n - x_k| \ge \varepsilon$일 때이다.

이 단계들을 이어 붙이면 (1)의 명제를 얻는다.

**2의 증명.** $(x_n)$이 코시 수열이라 하자. 정의를 $\varepsilon = 1$에 쓰면($0 < 1$은 순서 성질 (5)의 (ii)), $n \ge M$이고 $k \ge M$이면 $|x_n - x_k| < 1$인 자연수 $M$이 있다. [[convergent-sequence-is-bounded|수렴하는 수열은 유계라는 정리]]의 (1)을 $k = M$에 써서, $n \le M$인 모든 자연수 $n$에서 $|x_n| \le B_M$인 실수 $B_M$을 잡는다. $B = \max\{B_M, 1 + |x_M|\}$로 두면 절댓값 (10)에 의해 $B_M \le B$이고 $1 + |x_M| \le B$이다.

자연수 $n$을 잡는다. 순서 성질 (10)과 (1)의 (iv)에 의해 $n \le M$이거나 $M \le n$이다. $n \le M$이면 $|x_n| \le B_M \le B$이다. $M \le n$이면 $M \le M$이므로 정의의 $k$를 $M$으로 두어 $|x_n - x_M| < 1$이다. (K…)의 계산으로 $x_n = (x_n - x_M) + x_M$이므로 삼각부등식 (1)에 의해
$$
|x_n| \le |x_n - x_M| + |x_M| < 1 + |x_M| \le B
$$
이다(가운데 부등식은 순서 성질 (2)의 (iv)). 두 경우 모두 순서 성질 (1)의 (v)에 의해 $|x_n| \le B$이다. 따라서 $(x_n)$은 유계이다.

**3의 증명.** $(x_n)$이 실수 $L$로 수렴한다고 하자. 양의 실수 $\varepsilon$을 잡으면 순서 성질 (8)에 의해 $0 < \varepsilon/2$이므로, [[limit-of-sequence]]의 정의에 의해 $M$ 이상인 모든 자연수 $n$에서 $|x_n - L| < \varepsilon/2$인 자연수 $M$이 있다. $n \ge M$이고 $k \ge M$인 자연수 $n$, $k$에서, 삼각부등식 (4)와 절댓값 (3)에 의해
$$
|x_n - x_k| \le |x_n - L| + |L - x_k| = |x_n - L| + |x_k - L| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon
$$
이다(마지막 부등식은 순서 성질 (2)의 (iv)와 (1)의 (v)). $\varepsilon$은 임의의 양의 실수였으므로 $(x_n)$은 코시 수열이다. $\blacksquare$
:::

## 예시와 반례

:::example[$n^{-1}$은 코시 수열이다]
$x_n = n^{-1}$로 둡니다. (3)에 의해 이 수열은 수렴하므로([[basic-limits]]의 (2)) 코시 수열이지만, 정의로 직접 확인해 봅니다. 양수 $\varepsilon$이 주어지면 [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 $M^{-1} < \varepsilon$인 자연수 $M$이 있습니다. $n \ge M$이고 $k \ge M$이면, [[order-properties-of-reals]]의 (10)과 (6)의 (ii)에 의해 $0 < n^{-1} \le M^{-1}$이고 $0 < k^{-1} \le M^{-1}$입니다. 그러면
$$
-M^{-1} \le -k^{-1} < n^{-1} - k^{-1} < n^{-1} \le M^{-1}
$$
이고(첫 부등식은 그 항목의 (3)의 (iii), 가운데 두 부등식은 $0 < n^{-1}$, $0 < k^{-1}$과 그 항목의 (2)의 (ii)), [[absolute-value|절댓값]]의 (7)에 의해 $|n^{-1} - k^{-1}| < M^{-1} < \varepsilon$입니다. 극한 $0$은 이 계산에 한 번도 나오지 않습니다.
:::

:::counterexample[번갈아 바뀌는 수열은 코시 수열이 아니다]
[[basic-limits]]의 (3)의 수열($n$이 짝수이면 $x_n = 1$, 홀수이면 $x_n = -1$)을 생각합니다. (1)의 꼴을 $\varepsilon = 1$로 확인합니다. 자연수 $M$이 주어지면 $n = 2M$, $k = 2M + 1$로 둡니다. $2M = M + M \ge M$이고 $2M + 1 \ge M$이며([[well-ordering-principle]]의 (Z6), (Z7)), $2M$은 짝수, $2M + 1$은 홀수이므로 $|x_n - x_k| = |1 - (-1)| = 2 \ge 1$입니다. 따라서 이 수열은 코시 수열이 아닙니다. (3)의 대우로도 이 수열이 발산한다는 것과 맞습니다.
:::

## 확인 질문

:::check[코시 수열의 $K$-꼬리는 코시 수열인가? ($K$는 자연수)]
그렇습니다. $(x_n)$이 코시 수열이고 $(y_n)$이 그 $K$-꼬리([[tail-of-a-sequence]])라 합시다. 양수 $\varepsilon$에 대하여 $(x_n)$의 정의에서 얻은 자연수 $M$을 그대로 씁니다. $n \ge M$, $k \ge M$이면 $0 < K$와 [[well-ordering-principle]]의 (Z6), (Z7)에 의해 $n + K \ge M$, $k + K \ge M$이므로 $|y_n - y_k| = |x_{n+K} - x_{k+K}| < \varepsilon$입니다.
:::

:::check[$n$번째 항이 $n$인 수열이 코시 수열이 아님을 (2)를 쓰지 않고 정의로 보이면?]
(1)의 꼴을 $\varepsilon = 1$로 확인합니다. 자연수 $M$이 주어지면 $n = M + 1$, $k = M$으로 둡니다. 둘 다 $M$ 이상이고 $|x_n - x_k| = |(M + 1) - M| = 1 \ge 1$이므로, 이 수열은 코시 수열이 아닙니다.
:::
