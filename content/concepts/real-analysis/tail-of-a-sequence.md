---
title: 수열의 꼬리
title_en: Tail of a Sequence
aliases: [꼬리, K-꼬리, tail of a sequence, K-tail]
kind: definition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 자연수 K 에 대하여 수열 (x_n) 의 K-꼬리는 n 번째 항이 x_{n+K} 인 수열이다. 수열이 L 로 수렴하는 것은 정확히 그 K-꼬리가 L 로 수렴할 때이고, 유계인 것도 꼬리와 같다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, order-properties-of-reals, absolute-value, sequence, limit-of-sequence, limit-is-unique, basic-limits, convergent-sequence-is-bounded]
sources:
  - ref: lebl-basic-analysis
    loc: 2.1.2절 Definition 2.1.14, Proposition 2.1.15 와 그 증명 (p.57), 그 뒤의 예 (p.58)
    checked: original
    note: "출처의 Definition 2.1.14(p.57)는 K ∈ ℕ 에 대해 수열 {x_n} 의 K-tail 을 K + 1 번째부터 시작하는 수열 {x_{n+K}}_{n=1}^∞ 으로 정의하고, 0-tail 은 수열 자신이라고 덧붙인다. 이 사이트의 ℕ 은 0 을 포함하지 않으므로 이 항목은 K 를 자연수로만 두고 0-꼬리는 쓰지 않는다. K-꼬리가 수열이라는 것은 sequence 의 (1)로 보였다. 출처의 Proposition 2.1.15(p.57)는 (i) 수열이 수렴한다, (ii) 모든 K ∈ ℕ 에 대해 K-꼬리가 수렴한다, (iii) 어떤 K ∈ ℕ 에 대해 K-꼬리가 수렴한다가 동치이고 극한이 같다는 것이며, 이 항목의 (2)이다. 출처는 (i) ⇒ (ii)를 n ≥ M 이면 n + K ≥ M 으로, (iii) ⇒ (i)을 M = M′ + K 로 두고 n ≥ M 이면 n − K ≥ M′ 으로 증명한다. 이 항목은 같은 경로로 (1)(극한이 L 로 같다는 것을 한 수열과 한 꼬리 사이의 동치로 적은 것)을 먼저 증명하고, n − K 가 자연수라는 것 등 정수 계산의 근거를 적었다. (3)(유계성과 꼬리)은 출처에 명제로 없다(검색한 범위). 출처는 p.58 에서 n/(n² + 16) 의 3-꼬리가 단조감소이고 0 이 하계이므로 수렴한다고 적는다. 반례 '꼬리는 단조이지만 수열은 단조가 아니다'는 그 예와 같은 발상이다. 출처의 예 '1/n 의 4-꼬리'(p.57)와 달리 예시 '처음 100 개의 항을 바꾼 수열'과 '번갈아 바뀌는 수열의 꼬리', 확인 질문은 출처에 없다(검색한 범위). 직관의 '수열이 어떻게 시작하든 상관없다'와 예시 '처음 100 개의 항을 바꾼 수열'의 요지는 출처 p.57 의 'The beginning of the sequence may be arbitrary'와 같다."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 수학 오류 없음. 출처 메모 보완, 수열 (1)의 전제를 좁힘, 근거 인용 보완"
added: 2026-11-17
---

:::statement
수열, 유계, 수렴과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이다. $(x_n)$을 수열, $K$를 자연수라 하자.

**꼬리.** 자연수 $n$에 대하여 $n + K$는 자연수이므로 $y_n = x_{n+K}$로 정하면, [[sequence]]의 (1)에 의해 $(y_n)$은 수열이다. 이 수열, 곧 $n$번째 항이 $x_{n+K}$인 수열을 $(x_n)$의 **$K$-꼬리**($K$-tail)라 한다. $K$를 밝히지 않을 때는 그냥 **꼬리**(tail)라 한다. $K$-꼬리는 $(x_n)$에서 처음 $K$개의 항 $x_1, \dots, x_K$를 떼어 낸 것이다.

다음이 성립한다.

1. 실수 $L$에 대하여, $(x_n)$이 $L$로 수렴하는 것은 정확히 $(x_n)$의 $K$-꼬리가 $L$로 수렴할 때이다.
2. 다음 세 명제는 서로 동치이다. (i) $(x_n)$이 수렴한다. (ii) 모든 자연수 $K$에 대하여 $(x_n)$의 $K$-꼬리가 수렴한다. (iii) 어떤 자연수 $K$에 대하여 $(x_n)$의 $K$-꼬리가 수렴한다. 이것들이 성립하면 모든 자연수 $K$에 대하여 $\lim_{n \to \infty} x_n = \lim_{n \to \infty} x_{n+K}$이다.
3. $(x_n)$이 유계인 것은 정확히 $(x_n)$의 $K$-꼬리가 유계일 때이다.
:::

:::english
Sequences, boundedness, convergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, on the limit of a sequence, and on uniqueness of limits. Let $(x_n)$ be a sequence and $K$ a natural number.

**Tails.** For each natural number $n$, the number $n + K$ is a natural number, so setting $y_n = x_{n+K}$ gives a sequence $(y_n)$ by item (1) of the entry on sequences. This sequence, the sequence whose $n$th term is $x_{n+K}$, is called the **$K$-tail** of $(x_n)$. When $K$ is not specified, it is simply called a **tail**. The $K$-tail is what remains of $(x_n)$ after removing the first $K$ terms $x_1, \dots, x_K$.

The following hold.

1. For a real number $L$, $(x_n)$ converges to $L$ exactly when the $K$-tail of $(x_n)$ converges to $L$.
2. The following three statements are equivalent: (i) $(x_n)$ converges; (ii) for every natural number $K$, the $K$-tail of $(x_n)$ converges; (iii) for some natural number $K$, the $K$-tail of $(x_n)$ converges. When they hold, $\lim_{n \to \infty} x_n = \lim_{n \to \infty} x_{n+K}$ for every natural number $K$.
3. $(x_n)$ is bounded exactly when the $K$-tail of $(x_n)$ is bounded.
:::

## 직관

마라톤 선수가 결승선 쪽으로 다가가는지를 보려면 처음 몇 킬로미터의 기록은 볼 필요가 없습니다. 극한은 "어느 번호부터 뒤의 모든 항"에 관한 말이므로, 처음 $K$개 항을 떼어 내도 수렴하는지와 극한이 무엇인지는 바뀌지 않습니다. 수열이 어떻게 시작하든 상관없다는 것이 (1)과 (2)입니다.

꼬리의 $n$번째 항은 원래 수열의 $n + K$번째 항입니다. 그래서 원래 수열에서 "$n \ge M$"이면 꼬리에서는 "$n \ge M$" 그대로 쓰면 되고, 꼬리에서 "$n \ge M'$"이면 원래 수열에서는 번호를 $K$만큼 밀어 "$n \ge M' + K$"로 씁니다. 증명은 이 번호 맞추기가 전부입니다.

유계도 처음 유한 개의 항이 바꾸지 못합니다. 유한 개의 항은 한 수로 누를 수 있기 때문입니다([[convergent-sequence-is-bounded|수렴하는 수열이 유계라는 정리]]의 (1)). 비유가 맞지 않는 곳은, 단조처럼 수열 전체의 모양을 보는 성질은 꼬리에서 성립해도 수열에서 성립하지 않을 수 있다는 점입니다(아래 반례).

## 성질의 증명

:::proof
"순서 성질 (10)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이고, "극한 (1)"은 [[limit-of-sequence]]의 번호이다. $(y_n)$은 $(x_n)$의 $K$-꼬리이다. [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술에 의해 자연수는 양의 정수이고, 정수의 합과 차는 정수이다([[even-and-odd]]). 정수의 부등식은 [[well-ordering-principle]]의 (Z6), (Z7)을 쓴다.

먼저 진술의 첫 문장을 확인한다. 자연수 $n$에 대하여 $n + K$는 정수이고, $0 < K$와 (Z7)에 의해 $n = n + 0 < n + K$이며, $0 < n$과 (Z6)에 의해 $0 < n + K$이므로 자연수이다. 이 계산은 $n < n + K$, 따라서 $n \le n + K$도 준다.

**1의 증명.** $(x_n)$이 $L$로 수렴한다고 하자. 양의 실수 $\varepsilon$에 대하여, $n \ge M$인 모든 자연수 $n$에서 $|x_n - L| < \varepsilon$인 자연수 $M$이 있다. $n \ge M$인 자연수 $n$을 잡으면 $M \le n \le n + K$이므로 (Z6)에 의해 $n + K \ge M$이고, 따라서 $|y_n - L| = |x_{n+K} - L| < \varepsilon$이다. 그러므로 $(y_n)$은 $L$로 수렴한다.

거꾸로 $(y_n)$이 $L$로 수렴한다고 하자. 양의 실수 $\varepsilon$에 대하여, $n \ge M'$인 모든 자연수 $n$에서 $|y_n - L| < \varepsilon$인 자연수 $M'$이 있다. $M = M' + K$로 두면, 위와 같은 계산으로 $M$은 자연수이다. $n \ge M$인 자연수 $n$을 잡고 $m = n - K$로 둔다. $m$은 정수이고, $M' + K \le n$의 양변에서 $K$를 빼면 (Z7)에 의해 $M' \le m$이다. $M'$은 양의 정수이므로 $0 < M' \le m$이고 (Z6)에 의해 $0 < m$, 곧 $m$은 자연수이고 $m \ge M'$이다. 또 정수의 계산으로 $m + K = n$이므로 $y_m = x_{m+K} = x_n$이다. 따라서 $|x_n - L| = |y_m - L| < \varepsilon$이다. 그러므로 $(x_n)$은 $L$로 수렴한다.

**2의 증명.** (i)이면 (ii)임을 보인다. $(x_n)$이 수렴하면 어떤 실수 $L$로 수렴하고, (1)에 의해 모든 자연수 $K$에 대하여 $K$-꼬리도 $L$로 수렴한다. (ii)이면 (iii)이다. $1$은 자연수이므로 $1$-꼬리가 수렴한다. (iii)이면 (i)임을 보인다. 어떤 자연수 $K$에 대하여 $K$-꼬리가 어떤 실수 $L$로 수렴하면, (1)에 의해 $(x_n)$도 $L$로 수렴한다.

이것들이 성립할 때, $(x_n)$이 $L$로 수렴한다고 하면 (1)에 의해 모든 $K$-꼬리도 $L$로 수렴하므로, [[limit-is-unique]]에 의해 $\lim_{n \to \infty} x_n = L = \lim_{n \to \infty} x_{n+K}$이다.

**3의 증명.** $(x_n)$이 유계라 하자. 모든 자연수 $n$에서 $|x_n| \le B$인 실수 $B$가 있다. $n + K$는 자연수이므로 $|y_n| = |x_{n+K}| \le B$이다. 따라서 $(y_n)$은 유계이다.

거꾸로 $(y_n)$이 유계라 하고, 모든 자연수 $n$에서 $|y_n| \le B_1$인 실수 $B_1$을 잡는다. [[convergent-sequence-is-bounded|수렴하는 수열이 유계라는 정리]]의 (1)을 $k = K$에 써서, $n \le K$인 모든 자연수 $n$에서 $|x_n| \le B_2$인 실수 $B_2$를 잡는다. $B = \max\{B_1, B_2\}$로 두면 [[absolute-value|절댓값]]의 (10)에 의해 $B_1 \le B$이고 $B_2 \le B$이다. 자연수 $n$을 잡는다. (Z5)와 [[prime-number]]의 (Z1)에 의해 $n \le K$이거나 $K + 1 \le n$이다. $n \le K$이면 $|x_n| \le B_2 \le B$이다. $K + 1 \le n$이면 $m = n - K$로 둘 때 (Z7)에 의해 $1 \le m$이므로 $m$은 자연수이고, $m + K = n$이므로 $|x_n| = |y_m| \le B_1 \le B$이다. 두 경우 모두 순서 성질 (1)의 (v)에 의해 $|x_n| \le B$이다. 따라서 $(x_n)$은 유계이다. $\blacksquare$
:::

## 예시와 반례

:::example[처음 $100$개의 항을 바꾼 수열]
$n \le 100$이면 $x_n = 5$, $n \ge 101$이면 $x_n = n^{-1}$로 둡니다((Z5)와 (Z1)에 의해 모든 자연수는 두 경우 가운데 하나에 속하고, (L1)에 의해 둘 다에 속하지는 않습니다). 이 수열의 $100$-꼬리의 $n$번째 항은, $1 \le n$이므로 (Z7)에 의해 $101 \le n + 100$이어서 $x_{n+100} = (n + 100)^{-1}$입니다. $0 < n < n + 100$이므로 [[order-properties-of-reals]]의 (6)의 (ii)에 의해 $0 < (n + 100)^{-1} < n^{-1}$입니다. 양의 실수 $\varepsilon$에 대하여 [[basic-limits]]의 (2)에 의해 $n \ge M$이면 $|n^{-1} - 0| < \varepsilon$인 자연수 $M$이 있고, 그런 $n$에서 $|(n + 100)^{-1} - 0| = (n + 100)^{-1} < n^{-1} < \varepsilon$입니다. 따라서 $100$-꼬리는 $0$으로 수렴하고, (1)에 의해 $(x_n)$도 $0$으로 수렴합니다. 처음 $100$개의 항이 모두 $5$여도 극한은 $0$입니다.
:::

:::example[번갈아 바뀌는 수열의 꼬리]
[[basic-limits]]의 (3)의 수열 $(a_n)$($n$이 짝수이면 $1$, 홀수이면 $-1$)의 $1$-꼬리는 $n$번째 항이 $a_{n+1}$인 수열입니다. $n$이 짝수이면 $n + 1$이 홀수이고, $n$이 홀수이면 $n + 1$이 짝수이므로($n = 2a + 1$이면 $n + 1 = 2(a + 1)$), $1$-꼬리는 $n$이 짝수이면 $-1$, 홀수이면 $1$인 수열입니다. $(a_n)$이 발산하므로 (2)에 의해 이 꼬리도 발산합니다. 꼬리를 떼어 내도 진동은 없어지지 않습니다.
:::

:::counterexample[꼬리는 단조여도 수열은 단조가 아닐 수 있다]
$x_1 = 0$이고 $n \ge 2$이면 $x_n = n^{-1}$인 수열을 생각합니다. $1$-꼬리의 $n$번째 항은 $(n + 1)^{-1}$이고, [[order-properties-of-reals]]의 (6)의 (ii)에 의해 $(n + 2)^{-1} < (n + 1)^{-1}$이므로 $1$-꼬리는 단조감소입니다. 그러나 $x_1 = 0 < 2^{-1} = x_2$이므로 $x_2 \le x_1$이 성립하지 않아 $(x_n)$은 단조감소가 아니고, $x_3 = 3^{-1} < 2^{-1} = x_2$이므로 단조증가도 아닙니다. 수렴과 유계는 꼬리로 판단할 수 있지만(이 항목의 (1)–(3)) 단조는 그렇지 않습니다.
:::

## 확인 질문

:::check[$(x_n)$의 $K$-꼬리의 $J$-꼬리는 무엇인가? ($J$, $K$는 자연수)]
$(x_n)$의 $(J + K)$-꼬리입니다. $K$-꼬리를 $(y_n)$이라 하면 그 $J$-꼬리의 $n$번째 항은 $y_{n+J} = x_{(n+J)+K} = x_{n+(J+K)}$이고, 이것은 $(J + K)$-꼬리의 $n$번째 항입니다. 모든 $n$에서 항이 같으므로 [[sequence]]의 진술(함수의 같음)에 의해 두 수열은 같습니다.
:::

:::check[$1$-꼬리가 자기 자신과 같은 수열은 어떤 수열인가?]
상수 수열입니다. $1$-꼬리가 $(x_n)$과 같으면 모든 $n$에서 $x_{n+1} = x_n$이므로, $(x_n)$은 단조증가이고 단조감소입니다. [[sequence]]의 (4)에 의해 모든 $n$에서 $x_1 \le x_n$이고 $x_n \le x_1$이므로 $x_n = x_1$입니다([[order-properties-of-reals]]의 (1)의 (ii)). 거꾸로 상수 수열의 $1$-꼬리는 모든 항이 같은 상수이므로 자기 자신과 같습니다.
:::
