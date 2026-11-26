---
written_by: Claude
status: reviewed
sources:
  - ref: fuglede-basic-topology
    loc: "Exercises 절, Set #2, 연습문제 2.12 (content/exercises.tex:90)"
added: 2026-11-26
---

:::exercise[두 점 위의 위상 둘의 곱에서 연결 부분집합 가려내기]
$S = \{0, 1\}$에 위상 $\sigma = \{\emptyset, \{1\}, S\}$를 주고, $S \times S$에는 곱위상 $\sigma \otimes \sigma$를 준다.

1. $(S, \sigma)$가 연결공간임을 보이고, $S \times S$가 연결공간임을 보여라.
2. $A = \{(0, 1), (1, 0)\}$은 $S \times S$의 연결 부분집합이 아님을 보여라.
3. $A' = \{(0, 0), (1, 1)\}$은 $S \times S$의 연결 부분집합임을 보여라.
:::

:::solution
$\sigma$는 [[topology-examples|위상의 예]]의 (7)에 의해 $S$ 위의 위상이다. 곱위상은 [[product-topology|두 공간의 곱위상]]의 것이고, 연결공간, 연결 부분집합, 분리는 [[connected-space|연결공간]]의 것이다.

**1.** $S$의 부분집합은 $\emptyset$, $\{0\}$, $\{1\}$, $S$뿐이다. 열린집합은 $\emptyset$, $\{1\}$, $S$이고, [[closed-set|닫힌집합]]의 정의에 의해 닫힌집합은 그 여집합 $S$, $\{0\}$, $\emptyset$이다. 열린집합이면서 닫힌집합인 것은 $\emptyset$과 $S$뿐이므로 연결공간 항목의 (1)에 의해 $(S, \sigma)$는 연결공간이다. [[product-of-connected-spaces|두 연결공간의 곱]]의 (1)에 의해 $S \times S$도 연결공간이다.

**2.** $U = \{1\} \times S = \{(1, 0), (1, 1)\}$과 $V = S \times \{1\} = \{(0, 1), (1, 1)\}$은 곱위상 항목의 (4)에 의해 열려 있다. $A \subseteq U \cup V$이고, $U \cap V = \{(1, 1)\}$은 $A$의 점을 갖지 않으므로 $U \cap V \cap A = \emptyset$이며, $U \cap A = \{(1, 0)\} \ne \emptyset$, $V \cap A = \{(0, 1)\} \ne \emptyset$이다. 연결공간 항목의 (2)에 의해 $A$는 연결 부분집합이 아니다. 여기서 $U \cap V$ 자체는 공집합이 아니다.

**3.** 먼저 $(0, 0)$을 원소로 갖는 $S \times S$의 열린집합 $W$는 $S \times S$뿐임을 보인다. 곱위상 항목의 (3)의 (b)에 의해 $0 \in U_0$, $0 \in V_0$, $U_0 \times V_0 \subseteq W$인 $U_0, V_0 \in \sigma$가 있다. $\sigma$의 원소 가운데 $0$을 갖는 것은 $S$뿐이므로 $U_0 = V_0 = S$이고, $S \times S \subseteq W$이다.

$A'$이 연결 부분집합이 아니라고 해 보자. 연결공간 항목의 (2)에 의해 $A' \subseteq U \cup V$, $U \cap V \cap A' = \emptyset$, $U \cap A' \ne \emptyset$, $V \cap A' \ne \emptyset$인 $S \times S$의 열린집합 $U$, $V$가 있다. $(0, 0) \in A' \subseteq U \cup V$이므로 $(0, 0)$은 $U$나 $V$에 든다. $(0, 0) \in U$이면 앞 문단에 의해 $U = S \times S$이므로 $U \cap V \cap A' = V \cap A' \ne \emptyset$이 되어 모순이다. $(0, 0) \in V$이면 같은 까닭으로 $U \cap V \cap A' = U \cap A' \ne \emptyset$이 되어 모순이다. 따라서 $A'$은 연결 부분집합이다.

1과 2를 함께 보면, 연결공간의 부분집합은 연결이 아닐 수 있다.
:::

:::exercise[점이 둘 이상인 연결 T₁ 공간의 크기]
1. $(X, \mathcal{T})$가 연결공간이고 $T_1$ 공간이며 $X$에 서로 다른 두 점이 있으면 $X$는 무한집합임을 보여라.
2. 서로 다른 두 점을 갖는 연결 거리공간은 무한집합임을 보여라.
3. 1에서 $T_1$이라는 가정을 빼면 결론이 깨지는 예를 들어라.
:::

:::solution
연결공간은 [[connected-space|연결공간]]의 것이고, $T_1$ 공간은 [[hausdorff-space|T₁ 공간과 하우스도르프 공간]]의 것이며, 유한집합과 무한집합은 [[finite-set|유한집합]]의 것이다.

**1.** $X$가 유한집합이라고 해 보자. $U \subseteq X$이면 $X - U \subseteq X$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $X - U$는 유한집합이고, $T_1$ 공간 항목의 (2)의 (a)에서 (c)로 가는 방향에 의해 $X - U$는 닫힌집합이다. [[closed-set|닫힌집합]]의 (5)에 의해 $U$는 열린집합이다. 따라서 $X$의 모든 부분집합이 열려 있어 $\mathcal{T} = \mathscr{P}(X)$, 곧 이산위상이다. $X$에 서로 다른 두 점이 있으므로 연결공간 항목의 (5)의 (iii)에 의해 $(X, \mathcal{T})$는 연결공간이 아니다. 가정과 어긋나므로 $X$는 무한집합이다.

**2.** [[metric-space-is-hausdorff|거리공간은 하우스도르프 공간이다]]의 (2)에 의해 거리공간은 거리위상으로 $T_1$ 공간이므로 1에 의해 그렇다.

**3.** $a \ne b$이고 $X = \{a, b\}$에 밀착위상을 주자. 연결공간 항목의 (5)의 (ii)에 의해 연결공간이고 서로 다른 두 점을 갖는다. [[finite-set|유한집합]]의 (F2)에 의해 $\emptyset$은 원소를 $0$개 갖고, [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (a)를 두 번 쓰면 $\{a\}$는 원소를 $1$개, $\{a, b\}$는 원소를 $2$개 가지므로 $X$는 유한집합이다. $T_1$ 공간 항목의 (4)에 의해 이 $X$는 $T_1$ 공간이 아니다.
:::

:::exercise[아래끝 위상의 연결 부분집합]
$\mathbb{R}_l$은 $\mathbb{R}$에 아래끝 위상을 준 공간이다.

1. $A \subseteq \mathbb{R}$가 $\mathbb{R}_l$의 연결 부분집합인 것은 정확히 $A = \emptyset$이거나 어떤 실수 $p$에 대하여 $A = \{p\}$일 때임을 보여라.
2. $\mathbb{R}$(보통 위상)에서 $\mathbb{R}_l$로 가는 연속함수는 모두 상수임을 보여라.
:::

:::solution
$\mathbb{R}_l$은 [[lower-limit-topology|아래끝 위상]]의 것이고, 연결 부분집합과 분리는 [[connected-space|연결공간]]의 것이다. 아래에서 "순서의 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다.

**1.** $A = \emptyset$이거나 $A = \{p\}$이면 연결공간 항목의 (5)의 (i)에 의해 $A$는 연결 부분집합이다.

거꾸로 $A$에 서로 다른 두 점 $x$, $y$가 있다고 하자. 순서의 성질 (1)의 (iii)과 (ii)에 의해 $x < y$이거나 $y < x$이므로, 둘 가운데 작은 쪽을 $a$, 큰 쪽을 $b$라 하면 $a, b \in A$이고 $a < b$이다. 아래끝 위상 항목의 (3)에 의해 $U = \{t \in \mathbb{R} : t < b\}$와 $V = \{t \in \mathbb{R} : b \le t\}$는 $\mathbb{R}_l$에서 열려 있다. 연결공간 항목의 (2)의 네 조건을 확인한다. 순서의 성질 (1)의 (iii)에 의해 모든 실수는 $U$나 $V$에 들므로 $A \subseteq U \cup V$이다. (1)의 (i)에 의해 $t < b$와 $b \le t$는 함께 성립하지 않으므로 $U \cap V \cap A = \emptyset$이다. $a \in U \cap A$이고, (1)의 (iv)의 $b \le b$에 의해 $b \in V \cap A$이다. 따라서 $A$는 연결 부분집합이 아니다.

그러므로 $A$가 연결 부분집합이면 $A$에는 서로 다른 두 점이 없다. $A \ne \emptyset$이면 $p \in A$를 하나 잡을 때 $A$의 모든 점 $q$가 $q = p$이므로 $A = \{p\}$이다.

**2.** $f : \mathbb{R} \to \mathbb{R}_l$이 연속이라 하자. [[connected-subsets-of-reals|실수의 연결 부분집합]]의 (3)에 의해 $\mathbb{R}$은 연결공간이므로, [[continuous-image-of-connected|연결공간의 연속 상]]의 (1)에 의해 $f(\mathbb{R})$은 $\mathbb{R}_l$의 연결 부분집합이다. $\mathbb{R} \ne \emptyset$이므로 $f(\mathbb{R}) \ne \emptyset$이고, 1에 의해 어떤 실수 $p$에 대하여 $f(\mathbb{R}) = \{p\}$이다. 곧 모든 실수 $x$에서 $f(x) = p$이므로 $f$는 상수이다(연결공간의 연속 상 항목의 머리말의 뜻).
:::

:::exercise[가로축과 정수 위의 세로줄들로 된 빗]
$\mathbb{R} \times \mathbb{R}$(보통 위상)의 부분집합 $S = \{(x, y) \in \mathbb{R} \times \mathbb{R} : y = 0 \text{이거나 } x \in \mathbb{Z}\}$를 생각한다.

1. $S$가 연결 부분집합임을 보여라.
2. $h = 2^{-1}$이라 할 때 $S - \{(h, 0)\}$은 연결 부분집합이 아님을 보여라.
:::

:::solution
연결 부분집합은 [[connected-space|연결공간]]의 것이고, $\mathbb{R} \times \mathbb{R}$의 보통 위상은 [[max-metric-and-product-topology|최대 거리의 위상은 곱위상이다]]의 (2)의 것이다. 아래에서 "순서의 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다.

**1.** *두 직선.* [[connected-subsets-of-reals|실수의 연결 부분집합]]의 (2)에 의해 $\mathbb{R}$은 $\mathbb{R}$의 연결 부분집합이고, 연결공간 항목의 (5)의 (i)에 의해 한 점 집합은 연결 부분집합이다. [[product-of-connected-spaces|두 연결공간의 곱]]의 (3)에 의해 가로줄 $L = \mathbb{R} \times \{0\}$과, 정수 $n$마다 세로줄 $\{n\} \times \mathbb{R}$은 $\mathbb{R} \times \mathbb{R}$의 연결 부분집합이다.

*빗살 하나씩.* 정수 $n$마다 $C_n = L \cup (\{n\} \times \mathbb{R})$로 둔다. $(n, 0)$은 $L$과 $\{n\} \times \mathbb{R}$에 함께 속하므로 [[union-of-connected-sets|연결집합의 합집합과 폐포]]의 (2)에 의해 $C_n$은 연결 부분집합이다.

*모두 모으기.* $\mathcal{C} = \{C_n : n \in \mathbb{Z}\}$는 식으로 정한 집합족이고([[family-of-sets|집합족의 합집합과 교집합]]), 원소가 모두 연결 부분집합이며, $(0, 0) \in L$이 모든 $C_n$에 속한다. 연결집합의 합집합과 폐포 항목의 (1)에 의해 $\bigcup \mathcal{C}$는 연결 부분집합이다.

$\bigcup \mathcal{C} = S$를 확인한다. $(x, y) \in S$이면 $y = 0$일 때 $(x, y) \in L \subseteq C_0$이고, $x \in \mathbb{Z}$일 때 $(x, y) \in \{x\} \times \mathbb{R} \subseteq C_x$이다. 거꾸로 $(x, y) \in C_n$이면 $y = 0$이거나 $x = n \in \mathbb{Z}$이므로 $(x, y) \in S$이다. 따라서 $S$는 연결 부분집합이다.

**2.** *$h$는 정수가 아니다.* 순서의 성질 (8)을 $0 < 1$에 쓰면 $0 < h < 1$이다. $h$가 정수라면 [[prime-number|소수]]의 (Z1)과 순서의 성질 (10)에 의해 $1 \le h$이어야 하는데, 이것은 순서의 성질 (1)의 (i)에 의해 $h < 1$과 함께 성립하지 않는다.

*가르는 두 열린집합.* $U = \{(x, y) : x < h\}$와 $V = \{(x, y) : h < x\}$는 [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합]]의 (1)과 [[standard-topology-on-reals|실수의 보통 위상]]의 (5)에 의해 열린 반직선의 사영 $\pi_1$에 의한 역상이고, [[maps-into-a-product|사영과 곱으로 가는 함수]]의 (1)의 (i)에 의해 $\pi_1$이 연속이므로 열려 있다. $S' = S - \{(h, 0)\}$이라 하고 연결공간 항목의 (2)의 네 조건을 확인한다.

- $S' \subseteq U \cup V$: $(x, y) \in S'$이고 $x = h$라면 $h$가 정수가 아니므로 $y = 0$이어야 하고 $(x, y) = (h, 0) \notin S'$이 되어 모순이다. 따라서 $x \ne h$이고, 순서의 성질 (1)의 (iii)과 (ii)에 의해 $x < h$이거나 $h < x$이다.
- $U \cap V \cap S' = \emptyset$: 순서의 성질 (1)의 (i)에 의해 $x < h$와 $h < x$는 함께 성립하지 않으므로 $U \cap V = \emptyset$이다.
- $U \cap S' \ne \emptyset$: $(0, 0) \in S$이고 $0 \ne h$이므로 $(0, 0) \in S'$이며, $0 < h$이므로 $(0, 0) \in U$이다.
- $V \cap S' \ne \emptyset$: $(1, 0) \in S$이고 $1 \ne h$이므로 $(1, 0) \in S'$이며, $h < 1$이므로 $(1, 0) \in V$이다.

따라서 $S'$은 연결 부분집합이 아니다.
:::

:::exercise[연결집합이 어떤 집합과 그 여집합을 모두 만날 때]
$(X, \mathcal{T})$가 위상공간이고 $C$, $A$가 $X$의 부분집합이다.

1. $C$가 연결 부분집합이고 $C \cap A \ne \emptyset$, $C \cap (X - A) \ne \emptyset$이면 $C \cap \partial A \ne \emptyset$임을 보여라.
2. $\mathbb{R}$(보통 위상)에서 $C = \{0, 2\}$, $A = (-1, 1)$이면 $C$는 $A$와 $\mathbb{R} - A$를 모두 만나지만 $\partial A$와 만나지 않음을 보이고, 1의 어느 가정이 빠졌는지 말하라.
:::

:::solution
경계 $\partial A$는 [[boundary|경계]]의 것이고, 내부는 [[interior-and-closure|내부와 폐포]]의 것이며, 연결 부분집합은 [[connected-space|연결공간]]의 것이다.

**1.** $C \cap \partial A = \emptyset$이라고 해 보자. [[boundary-closure-and-cluster-points|경계, 폐포와 집적점]]의 (1)에 의해 $\partial A = X - (\operatorname{Int} A \cup \operatorname{Int}(X - A))$이므로, $C$의 점은 모두 $U = \operatorname{Int} A$나 $V = \operatorname{Int}(X - A)$에 든다. 곧 $C \subseteq U \cup V$이다. 내부와 폐포 항목의 (1)에 의해 $U$, $V$는 열린집합이고 $U \subseteq A$, $V \subseteq X - A$이므로 $U \cap V = \emptyset$, 특히 $U \cap V \cap C = \emptyset$이다. 연결공간 항목의 (4)의 (i)에 의해 $C \subseteq U$이거나 $C \subseteq V$이다. $C \subseteq U \subseteq A$이면 $C \cap (X - A) = \emptyset$이 되고, $C \subseteq V \subseteq X - A$이면 $C \cap A = \emptyset$이 되어 어느 쪽이든 가정과 어긋난다. 따라서 $C \cap \partial A \ne \emptyset$이다.

**2.** $-1 < 0 < 1$이므로 $0 \in A$이고, $1 < 2$이므로 $2 \notin A$이다([[order-properties-of-reals|실수의 순서의 성질]]의 (1)의 (i)). 곧 $C$는 $A$와 $\mathbb{R} - A$를 모두 만난다.

[[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합]]의 (1)과 [[standard-topology-on-reals|실수의 보통 위상]]의 (5)에 의해 $A$와 $G = \{t \in \mathbb{R} : 1 < t\}$는 보통 위상에서 열려 있다. $A$는 $0$의 근방이고 $A \subseteq A$이므로 경계 항목의 (2)에 의해 $0 \notin \partial A$이다. $G$는 $2$의 근방이고, $t \in G$이면 $1 < t$이어서 $t < 1$이 아니므로 $t \notin A$, 곧 $G \subseteq \mathbb{R} - A$이다. 같은 (2)에 의해 $2 \notin \partial A$이다. 따라서 $C \cap \partial A = \emptyset$이다.

빠진 가정은 $C$가 연결이라는 것이다. $0, 2 \in C$이고 $0 < 1 < 2$인데 $1 \notin C$이므로, [[connected-subsets-of-reals|실수의 연결 부분집합]]의 (1)에 의해 $C$는 연결 부분집합이 아니다.
:::

:::exercise[두 연결집합의 교집합이 연결이 아닌 예]
$\mathbb{R} \times \mathbb{R}$(보통 위상)에서 $L = \mathbb{R} \times \{0\}$과 $P = \{(t, tt - 1) : t \in \mathbb{R}\}$을 생각한다.

1. $L$과 $P$가 연결 부분집합임을 보여라.
2. $L \cap P = \{(-1, 0), (1, 0)\}$임을 보이고, $L \cap P$가 연결 부분집합이 아님을 보여라.
:::

:::solution
연결 부분집합은 [[connected-space|연결공간]]의 것이고, $\mathbb{R} \times \mathbb{R}$의 보통 위상은 [[max-metric-and-product-topology|최대 거리의 위상은 곱위상이다]]의 (2)의 것이다. 계산은 [[real-number-arithmetic|실수의 계산 법칙]]으로 한다.

**1.** [[connected-subsets-of-reals|실수의 연결 부분집합]]의 (2)에 의해 $\mathbb{R}$은 연결 부분집합이고, 연결공간 항목의 (5)의 (i)에 의해 $\{0\}$도 그렇다. [[product-of-connected-spaces|두 연결공간의 곱]]의 (3)에 의해 $L$은 연결 부분집합이다.

$P$를 본다. 항등함수 $i_{\mathbb{R}}$과 값이 $-1$인 상수함수는 [[continuous-map|위상공간 사이의 연속함수]]의 (1), (2)에 의해 연속이고, 최대 거리의 위상은 곱위상이다 항목의 (3)을 곱 $t \cdot t$와 합 $tt + (-1)$에 쓰면 $q(t) = tt - 1$로 정한 $q : \mathbb{R} \to \mathbb{R}$는 연속이다. [[maps-into-a-product|사영과 곱으로 가는 함수]]의 (4)의 (i)에 의해 $k(t) = (t, q(t))$로 정한 $k : \mathbb{R} \to \mathbb{R} \times \mathbb{R}$는 연속이고 $k(\mathbb{R}) = P$이다. 실수의 연결 부분집합 항목의 (3)에 의해 $\mathbb{R}$은 연결공간이므로, [[continuous-image-of-connected|연결공간의 연속 상]]의 (1)에 의해 $P$는 연결 부분집합이다.

**2.** *교집합.* $(x, y) \in L \cap P$이면 $y = 0$이고 $(x, y) = (t, tt - 1)$인 실수 $t$가 있으므로 $x = t$, $tt - 1 = 0$이다. (K1)–(K4), (K9), (K12)로 전개하면 $(t - 1)(t + 1) = tt + t - t - 1 = tt - 1 = 0$이므로 (K10)에 의해 $t - 1 = 0$이거나 $t + 1 = 0$이다. 앞의 것은 (K12)의 (v)에 의해 $t = 1$이고, 뒤의 것은 (K8)의 (ii)에 의해 $t = -1$이다. 거꾸로 $1 \cdot 1 - 1 = 0$, $(-1)(-1) - 1 = 0$이므로((K12)의 (iii)) $(1, 0) = k(1)$, $(-1, 0) = k(-1)$은 $P$에 들고 $L$에도 든다. 따라서 $L \cap P = \{(-1, 0), (1, 0)\}$이다.

*연결이 아니다.* $U = \{(x, y) : x < 0\}$, $V = \{(x, y) : 0 < x\}$는 [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합]]의 (1)과 [[standard-topology-on-reals|실수의 보통 위상]]의 (5)의 열린 반직선의 $\pi_1$에 의한 역상이므로, 사영과 곱으로 가는 함수 항목의 (1)의 (i)에 의해 열려 있다. [[order-properties-of-reals|실수의 순서의 성질]]의 (5)의 (ii)와 (3)의 (ii)에 의해 $-1 < 0 < 1$이므로 $(-1, 0) \in U$, $(1, 0) \in V$이고, $L \cap P \subseteq U \cup V$이다. 순서의 성질 (1)의 (i)에 의해 $U \cap V = \emptyset$이다. 연결공간 항목의 (2)에 의해 $L \cap P$는 연결 부분집합이 아니다.

곧 평면에서는 두 연결 부분집합의 교집합이 연결이 아닐 수 있다.
:::
