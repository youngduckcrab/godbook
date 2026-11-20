---
title: 균등 분할
title_en: Uniform Partition
aliases: [n 등분 분할, 등간격 분할, uniform partition, equally spaced partition, regular partition]
kind: proposition
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: 자연수 n 에 대해 [a, b] 를 길이가 (b − a)/n 인 n 개의 작은 구간으로 나누는 점들의 집합 P_n 은 [a, b] 의 분할이다. 작은 구간의 길이를 얼마든지 작게 할 수 있다는 것, P_kn 은 P_n 의 세분이라는 것, P_(n+1) 이 P_n 의 세분인 것은 n = 1 일 때뿐이라는 것을 함께 진술한다.
requires: [set, subset, even-and-odd, prime-number, well-ordering-principle, natural-numbers-are-infinite, real-number-arithmetic, real-order-axioms, order-properties-of-reals, archimedean-property, interval, partition-of-an-interval, refinement-of-a-partition]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.1절(5.1.2 소절) Example 5.1.14 (p.187); 5.1절(5.1.4 소절) 연습문제 5.1.10 (p.189); 5.2절(5.2.3 소절) Lemma 5.2.7 의 증명 (p.195); 5.2절(5.2.5 소절) 연습문제 5.2.14 (p.199)
    checked: original
    note: "출처는 이 분할에 관한 사실을 명제로 진술하지 않고, 본문에서는 이름 없이 쓴다. Example 5.1.14(p.187)는 [0, b] 에서 x_i = ib/n 으로 분할 P = {x_0, x_1, …, x_n} 을 만들고 Δx_i = b/n 이라 하며, Lemma 5.2.7 의 증명(p.195)은 (b − a)/n < δ 인 n 을 잡고 x_i = (i/n)(b − a) + a 로 두어 Δx_i < δ 인 분할을 얻는다. 이 항목의 (1)은 두 곳의 '분할이다'와 Δx_i 의 값을, (2)는 Lemma 5.2.7 의 'take n such that (b − a)/n < δ' 를 아르키메데스 성질로 정당화한 것이다. 이름 '균등 분할'은 출처 연습문제 5.1.10(p.189)의 'uniform partition of [0, 1], that is, x_i = i/n' 과 연습문제 5.2.14(p.199)의 힌트 'Use a uniform partition; each subinterval of same length' 를 따른다. 출처 연습문제 5.1.11(p.189)의 'uniform right-hand rule' R_n = (1/n)Σ_{i=1}^n f(i/n) 도 [0, 1] 의 같은 분할의 오른쪽 끝점을 쓴다. 연습문제 5.1.10 은 [0, 1] 의 균등 분할 P_n 에서 L(P_n, f) 가 늘 단조인지 묻는데, 이 항목의 (4)(P_{n+1} 은 n ≥ 2 이면 P_n 의 세분이 아니다)는 그 물음에서 세분으로 단조성을 바로 얻을 수 없는 까닭이 되는 사실이다. (3), (4)와 이 항목의 증명은 이 사이트가 썼다. 반례 '세분이 아닌 이웃한 두 균등 분할'은 (4)를 [0, 6] 의 n = 2 에서 보인 것으로, 출처 연습문제 5.1.10 과 같은 발상이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 출처 메모의 틀린 서술과 번호 4곳, 넘겨짚은 직관 문장을 고쳤다."
added: 2026-11-20
---

:::statement
$[a, b]$의 분할과 그 점, 작은 구간, 길이 $\Delta x_i$는 [[partition-of-an-interval]]의 것이고, 세분은 [[refinement-of-a-partition]]의 것이다. 나눗셈 $t/n$은 [[real-number-arithmetic]]의 것이다($t \cdot n^{-1}$). 아래에서 $a$, $b$는 $a < b$인 실수이다.

**균등 분할.** 자연수 $n$에 대하여 $h_n = (b - a)/n$으로 두고
$$
P_n = \{a + i h_n : 0 \le i \le n\text{인 정수 } i\}
$$
를 $[a, b]$의 $n$**등분 균등 분할**(uniform partition)이라 한다. $a$, $b$를 밝혀야 할 때는 "$[a, b]$의 $P_n$"이라 쓴다. 이 $P_n$은 정수론 입문의 $P_n$(오일러 피 함수의 집합)과 다른 기호이다.

다음이 성립한다. 아래에서 $n$, $k$는 자연수이다.

1. (분할과 그 점) $P_n$은 원소를 $n + 1$개 갖는 $[a, b]$의 분할이고, 그 점은 $0 \le i \le n$인 정수 $i$에서 $x_i = a + i h_n$이다. 모든 작은 구간의 길이는 $\Delta x_i = h_n$($1 \le i \le n$)이고, $h_n > 0$이다. 특히 $P_1 = \{a, b\}$이다.
2. (길이를 작게 하기) 모든 양수 $\delta$에 대하여 $h_N < \delta$인 자연수 $N$이 있고, $N \le n$인 모든 자연수 $n$에서도 $h_n < \delta$이다. 곧 그런 $n$에서 $P_n$의 모든 작은 구간의 길이가 $\delta$보다 작다.
3. (배수 번 나누기) $P_{kn}$은 $P_n$의 세분이고, $P_n$의 $i$번째 점은 $P_{kn}$의 $ki$번째 점이다($0 \le i \le n$). 특히 $P_{2n}$은 $P_n$의 세분이다.
4. (이웃한 두 균등 분할) $P_{n+1}$이 $P_n$의 세분인 것은 정확히 $n = 1$일 때이다.
:::

:::english
Partitions of $[a, b]$, their points, subintervals, and lengths $\Delta x_i$ are those of the entry on partitions of an interval, and refinements are those of the entry on refinements of a partition. Division $t/n$ is that of the entry on real number arithmetic ($t \cdot n^{-1}$). Below, $a$ and $b$ are real numbers with $a < b$.

**Uniform partition.** For a natural number $n$, put $h_n = (b - a)/n$ and
$$
P_n = \{a + i h_n : i \in \mathbb{Z},\ 0 \le i \le n\} ;
$$
this is called the **uniform partition** of $[a, b]$ into $n$ parts. When $a$ and $b$ must be specified we write "$P_n$ of $[a, b]$". This $P_n$ is a different symbol from the $P_n$ of the introductory number theory course (the set for Euler's phi function).

The following hold. Below, $n$ and $k$ are natural numbers.

1. (Partition and its points) $P_n$ is a partition of $[a, b]$ with $n + 1$ elements, and its points are $x_i = a + i h_n$ for integers $i$ with $0 \le i \le n$. Every subinterval has length $\Delta x_i = h_n$ ($1 \le i \le n$), and $h_n > 0$. In particular, $P_1 = \{a, b\}$.
2. (Making the lengths small) For every positive number $\delta$ there is a natural number $N$ with $h_N < \delta$, and $h_n < \delta$ also holds for every natural number $n$ with $N \le n$. That is, for such $n$, every subinterval of $P_n$ has length less than $\delta$.
3. (Dividing a multiple number of times) $P_{kn}$ is a refinement of $P_n$, and the $i$-th point of $P_n$ is the $ki$-th point of $P_{kn}$ ($0 \le i \le n$). In particular, $P_{2n}$ is a refinement of $P_n$.
4. (Two consecutive uniform partitions) $P_{n+1}$ is a refinement of $P_n$ exactly when $n = 1$.
:::

## 직관

막대기를 같은 길이의 토막 $n$개로 자르려면 왼쪽 끝에서 $h_n = (b - a)/n$씩 나아가며 칼집을 내면 됩니다. $n$번 나아가면 정확히 오른쪽 끝 $b$에 닿습니다. 이렇게 낸 칼집의 집합이 $P_n$입니다. 균등 분할은 "작은 구간이 모두 짧은 분할"이 필요할 때 가장 손쉽게 쓸 수 있는 분할입니다. $n$을 크게 하면 토막의 길이 $h_n$을 원하는 만큼 작게 할 수 있습니다((2)).

토막을 $2$배, $3$배로 잘게 나누면 원래 칼집 자리에 새 칼집이 그대로 다시 나므로 세분이 됩니다((3)). 그러나 $3$등분에서 $4$등분으로 바꾸면 원래 칼집 $a + (b - a)/3$ 자리에 칼집이 나지 않습니다. 토막 수를 하나 늘린 균등 분할은 $n = 1$일 때(양 끝만 있는 $P_1$)를 빼면 세분이 아닙니다((4)).

## 증명

:::idea
$t_i = a + i h_n$이 $i$에 대해 순증가이고 $t_0 = a$, $t_n = b$임을 보인 뒤 분할의 (5)를 쓴다. (2)는 아르키메데스 성질, (3)은 $a + ih_n = a + (ki)h_{kn}$이라는 계산이다.
:::

:::hint
$i < j$이면 $t_j - t_i = (j - i)h_n$이고, $j - i$와 $h_n$은 양수이다.
:::

:::hint
(4): $n \ge 2$에서 $a + h_n$이 $P_{n+1}$에 속한다면 $a + h_n = a + i h_{n+1}$인 정수 $i$가 있어 $n + 1 = in$이 된다.
:::

:::proof
실수의 계산은 [[real-number-arithmetic]]의 (K1)–(K12)로, 순서는 [[order-properties-of-reals]]로 다루며, 그 (10)에 의해 정수 사이의 부등식도 실수의 부등식으로 읽고 모든 자연수 $n$은 양의 실수이며 $0 < n^{-1}$이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7), (L1)–(L3)으로, 정수끼리의 합·차·곱이 정수라는 것은 [[even-and-odd]]에서 받아들인 사실로 다룬다. 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]). "분할 ($n$)"은 [[partition-of-an-interval]]의 번호이다.

**1의 증명.** [[order-properties-of-reals]]의 (3)의 (i)에 의해 $b - a > 0$이고, $n^{-1} > 0$이므로 [[real-order-axioms]]의 (W4)에 의해 $h_n = (b - a)n^{-1} > 0$이다. $0 \le i \le n$인 정수 $i$마다 $t_i = a + i h_n$으로 둔다. $t_0 = a + 0 \cdot h_n = a$이고(K9, K4), $n h_n = n\big((b - a)n^{-1}\big) = (b - a)(n n^{-1}) = b - a$이므로(K1, K2, K4) $t_n = a + (b - a) = b$이다. $0 \le i < j \le n$이면 계산 법칙으로 $t_j - t_i = jh_n - ih_n = (j - i)h_n$이고, $j - i$는 양의 정수이므로 양의 실수이며 $h_n > 0$이므로 (W4)에 의해 $t_j - t_i > 0$, 곧 $t_i < t_j$이다. 분할 (5)에 의해 $P_n = \{t_i : 0 \le i \le n\}$은 원소를 $n + 1$개 갖는 $[a, b]$의 분할이고 그 점은 $x_i = t_i$이다. $1 \le i \le n$이면 $\Delta x_i = t_i - t_{i-1} = (i - (i - 1))h_n = h_n$이다. $n = 1$이면 점이 $x_0 = a$, $x_1 = b$이므로 분할 (1)에 의해 $P_1 = \{x_0, x_1\} = \{a, b\}$이다.

**2의 증명.** $\delta > 0$이라 하자. $(b - a)^{-1} > 0$([[order-properties-of-reals]]의 (6)의 (i))이므로 (W4)에 의해 $\varepsilon = \delta (b - a)^{-1} > 0$이다. [[archimedean-property]]의 (3)에 의해 $1/N < \varepsilon$인 자연수 $N$이 있고, $N \le n$인 모든 자연수 $n$에서도 $1/n < \varepsilon$이다. 그런 $n$에서 양변에 양수 $b - a$를 곱하면([[order-properties-of-reals]]의 (4)의 (i)) $(b - a)(1/n) < \varepsilon (b - a) = \delta$이고, 왼쪽은 $(b - a) n^{-1} = h_n$이다. $n = N$일 때 $h_N < \delta$이다. (1)에 의해 $P_n$의 모든 작은 구간의 길이는 $h_n$이므로 $\delta$보다 작다.

**3의 증명.** $kn$은 양의 정수의 곱이므로 양의 정수, 곧 자연수이다([[order-properties-of-reals]]의 (10)과 (W4)). $0 \le i \le n$이면 $k > 0$이므로 $0 \le ki \le kn$이다([[order-properties-of-reals]]의 (4)의 (iii)). 또 [[real-number-arithmetic]]의 (K12)의 (vi)에 의해 $(kn)^{-1} = k^{-1}n^{-1}$이므로
$$
\begin{aligned}
(ki)h_{kn} &= (ki)(b - a)k^{-1}n^{-1} \\
&= i(b - a)n^{-1}(k k^{-1}) = i h_n
\end{aligned}
$$
이다. 따라서 $a + i h_n = a + (ki)h_{kn}$은 $P_{kn}$의 $ki$번째 점이고((1)), 특히 $P_{kn}$의 원소이다. 분할 (1)에 의해 $P_n$의 원소는 모두 어떤 $a + ih_n$이므로 $P_n \subseteq P_{kn}$이고, $P_{kn}$은 $P_n$의 세분이다. $k = 2$이면 $P_{2n}$이 $P_n$의 세분이다.

**4의 증명.** $n = 1$이면 (1)에 의해 $P_1 = \{a, b\}$이고, 분할의 정의에 의해 $a, b \in P_2$이므로 $P_1 \subseteq P_2$이다. 이제 $n \ge 2$라 하고 $P_n \subseteq P_{n+1}$이라 하자. $P_n$의 점 $x_1 = a + h_n$이 $P_{n+1}$에 속하므로 $a + h_n = a + i h_{n+1}$인 정수 $i$($0 \le i \le n + 1$)가 있다. 양변에서 $a$를 빼면 $(b - a)n^{-1} = i(b - a)(n + 1)^{-1}$이고, $b - a \ne 0$이므로 (K11)에 의해 $n^{-1} = i(n + 1)^{-1}$이다. 양변에 $n(n + 1)$을 곱하면 $n + 1 = in$이다. (Z5)와 (Z1)에 의해 $i \le 1$이거나 $i \ge 2$이다. $i \le 1$이면 $n > 0$이므로 $in \le n < n + 1$이다([[order-properties-of-reals]]의 (4)의 (iii), (L3)). $i \ge 2$이면 $in \ge 2n = n + n \ge n + 2 > n + 1$이다. 어느 경우나 $in \ne n + 1$이어서 맞지 않는다. 따라서 $n \ge 2$이면 $P_{n+1}$은 $P_n$의 세분이 아니다. 자연수 $n$은 (Z5)와 (Z1)에 의해 $n = 1$이거나 $n \ge 2$이므로, $P_{n+1}$이 $P_n$의 세분인 것은 정확히 $n = 1$일 때이다. $\blacksquare$
:::

## 예시와 반례

:::example[[−1, 2] 의 균등 분할]
$[-1, 2]$에서 $n = 3$이면 $h_3 = 3/3 = 1$이고 $P_3 = \{-1, 0, 1, 2\}$, 작은 구간은 $[-1, 0]$, $[0, 1]$, $[1, 2]$로 길이가 모두 $1$입니다. $n = 6$이면 $h_6 = 1/2$이고 $P_6 = \{-1, -1/2, 0, 1/2, 1, 3/2, 2\}$입니다. (3)대로 $P_3$의 $i$번째 점 $-1 + i$는 $P_6$의 $2i$번째 점 $-1 + 2i \cdot (1/2)$와 같습니다. $n = 1$이면 $h_1 = 3$이고 $P_1 = \{-1, 2\}$로 가장 간단한 분할입니다.

(2)를 $\delta = 1/4$에 쓰면 $h_n = 3/n < 1/4$인 것은 정확히 $12 < n$일 때이므로 $N = 13$으로 잡을 수 있고, $13$ 이상의 모든 $n$에서 $P_n$의 작은 구간은 길이가 $1/4$보다 작습니다. $n = 12$에서는 $h_{12} = 1/4$이어서 "작다"가 성립하지 않습니다.
:::

:::counterexample[세분이 아닌 이웃한 두 균등 분할]
$[0, 6]$에서 $P_2 = \{0, 3, 6\}$이고 $P_3 = \{0, 2, 4, 6\}$입니다. $3 \in P_2$이지만 $3 \notin P_3$이므로 $P_3$은 $P_2$의 세분이 아닙니다. 토막의 수를 늘렸다고 원래 칼집을 모두 지나는 것은 아닙니다. 두 분할의 공통 세분으로는 [[refinement-of-a-partition|분할의 세분]]의 (2)대로 $P_2 \cup P_3 = \{0, 2, 3, 4, 6\}$이 있고, 이것은 균등 분할이 아닙니다(작은 구간의 길이가 $2, 1, 1, 2$). (3)에 의해 $P_6 = \{0, 1, 2, 3, 4, 5, 6\}$은 $P_2$와 $P_3$의 공통 세분인 균등 분할입니다.
:::

## 확인 질문

:::check[$[a, b]$의 $P_n$이 가운데 점 $(a + b)/2$를 원소로 갖는 것은 언제인가?]
정확히 $n$이 짝수일 때입니다. $n = 2m$이면 $m$번째 점이 $a + m(b - a)/(2m) = a + (b - a)/2 = (a + b)/2$입니다. 거꾸로 어떤 정수 $i$($0 \le i \le n$)에서 $a + i(b - a)/n = (a + b)/2$이면 양변에서 $a$를 빼고 $b - a \ne 0$으로 나누어 $i/n = 1/2$, 곧 $n = 2i$이므로 $n$은 짝수입니다.
:::

:::check[$[1, 4]$에서 $P_n$의 작은 구간의 길이가 모두 $1/5$보다 작게 되는 가장 작은 자연수 $n$은?]
$16$입니다. 길이는 모두 $h_n = 3/n$이고, $3/n < 1/5$인 것은 양변에 양수 $5n$을 곱해 정확히 $15 < n$일 때입니다. $n = 15$에서는 $h_{15} = 1/5$이어서 성립하지 않고, $n = 16$에서는 $3/16 < 1/5$입니다.
:::
