---
written_by: Claude
status: reviewed
sources:
  - ref: lebl-basic-analysis
    loc: "3.2.3절, Example 3.2.11 (p.126)"
added: 2026-11-26
---

:::exercise[네 점 위의 사슬 위상에서 부분공간 위상 계산하기]
$X = \{1, 2, 3, 4\}$ 위의 위상 $\mathcal{T} = \{\emptyset, \{1, 2\}, \{1, 2, 3\}, X\}$와 $Y = \{2, 3, 4\}$를 생각한다.

1. 부분공간 위상 $\mathcal{T}|_Y$를 구하라.
2. $Y$에서 닫힌집합을 모두 구하라.
3. $\{3\}$의 $Y$에서의 폐포를, 2의 답으로 한 번, $X$에서의 폐포를 거쳐 한 번 구하라.
4. $A = \{2, 3\}$의 $X$에서의 내부 $\operatorname{Int} A$와 $A$의 $Y$에서의 내부를 구하라.
:::

:::solution
$\{1, 2\} \subseteq \{1, 2, 3\} \subseteq X$이므로 [[topology-examples|위상의 예]]의 (9)에 의해 $\mathcal{T}$는 $X$ 위의 위상이다. 부분공간 위상, "$Y$에서 닫힌", "$Y$에서의 폐포·내부"는 [[subspace-topology|부분공간 위상]]의 것이다.

**1.** $\mathcal{T}$의 원소마다 $Y$와의 교집합을 구하면 $\emptyset \cap Y = \emptyset$, $\{1, 2\} \cap Y = \{2\}$, $\{1, 2, 3\} \cap Y = \{2, 3\}$, $X \cap Y = Y$이다. 따라서
$$
\mathcal{T}|_Y = \{\emptyset, \{2\}, \{2, 3\}, Y\}
$$
이다.

**2.** [[closed-set|닫힌집합]]의 정의를 위상공간 $(Y, \mathcal{T}|_Y)$에 쓰면, $F \subseteq Y$가 $Y$에서 닫힌집합인 것은 정확히 $Y - F \in \mathcal{T}|_Y$일 때이다. 닫힌집합 항목의 (5)에 의해 $F = Y - (Y - F)$이므로, $Y$에서 닫힌집합은 $\mathcal{T}|_Y$의 원소의 $Y$에 대한 여집합 $Y - \emptyset = Y$, $Y - \{2\} = \{3, 4\}$, $Y - \{2, 3\} = \{4\}$, $Y - Y = \emptyset$이다. 곧 $Y$에서 닫힌집합은 $\emptyset$, $\{4\}$, $\{3, 4\}$, $Y$의 넷이다.

**3.** [[interior-and-closure|내부와 폐포]]의 정의에 의해 $\{3\}$의 $Y$에서의 폐포는 $\{3\}$을 포함하는 $Y$의 닫힌집합 전체의 교집합이다. 2의 넷 가운데 $3$을 원소로 갖는 것은 $\{3, 4\}$와 $Y$이므로 그 교집합은 $\{3, 4\}$이다.

$X$를 거쳐 구해 본다. $X$의 닫힌집합은 $\mathcal{T}$의 원소의 여집합 $X$, $\{3, 4\}$, $\{4\}$, $\emptyset$이고, 그 가운데 $3$을 갖는 것은 $X$와 $\{3, 4\}$이므로 $\overline{\{3\}} = X \cap \{3, 4\} = \{3, 4\}$이다. 부분공간 위상 항목의 (6)의 (i)에 의해 $\{3\}$의 $Y$에서의 폐포는 $\overline{\{3\}} \cap Y = \{3, 4\} \cap Y = \{3, 4\}$이다. 두 답이 같다.

**4.** $\mathcal{T}$의 원소 가운데 $A = \{2, 3\}$에 포함되는 것은 $\emptyset$뿐이다. $\{1, 2\}$, $\{1, 2, 3\}$, $X$는 모두 $A$에 들지 않는 $1$을 원소로 갖기 때문이다. 따라서 내부의 정의에 의해 $\operatorname{Int} A = \bigcup \{\emptyset\} = \emptyset$이다([[family-of-sets|집합족의 합집합과 교집합]]의 (3)).

한편 1에 의해 $A = \{2, 3\} \in \mathcal{T}|_Y$이므로 $A$는 $Y$에서 열려 있고, 내부와 폐포 항목의 (3)을 $(Y, \mathcal{T}|_Y)$에 쓰면 $A$의 $Y$에서의 내부는 $A$ 자신이다.

곧 $\operatorname{Int} A = \emptyset$은 $A$의 $Y$에서의 내부 $\{2, 3\}$보다 작다. 이것은 부분공간 위상 항목의 (6)의 (ii)의 포함과 맞고, 그 등호의 가정이 여기서 성립하지 않는다는 것도 확인해 준다. $Y = \{2, 3, 4\}$는 $\mathcal{T}$의 원소가 아니어서 $X$에서 열려 있지 않다.
:::

:::exercise[조밀한 집합을 부분공간으로 옮기기]
$(X, \mathcal{T})$가 위상공간이고 $A \subseteq Y \subseteq X$이며, $Y$에는 부분공간 위상 $\mathcal{T}|_Y$를 준다. "$A$가 $Y$에서 조밀하다"는 $A$가 위상공간 $(Y, \mathcal{T}|_Y)$에서 조밀하다는 뜻이다.

1. $A$가 $X$에서 조밀하면 $A$는 $Y$에서 조밀함을 보여라.
2. $A$가 $Y$에서 조밀하고 $Y$가 $X$에서 조밀하면 $A$는 $X$에서 조밀함을 보여라.
3. $X = \mathbb{R}$(보통 위상), $A = Y = [0, 1]$이면 $A$는 $Y$에서 조밀하지만 $X$에서 조밀하지 않음을 보여라.
:::

:::solution
조밀은 [[dense-subset|조밀한 부분집합]]의 것이고, 폐포 $\overline{A}$는 [[interior-and-closure|내부와 폐포]]의 것으로 $X$에서의 폐포이다.

**1.** [[subspace-topology|부분공간 위상]]의 (6)의 (i)에 의해 $A$의 $Y$에서의 폐포는 $\overline{A} \cap Y$이다. $A$가 $X$에서 조밀하므로 $\overline{A} = X$이고, $Y \subseteq X$이므로 $\overline{A} \cap Y = X \cap Y = Y$이다. 따라서 $A$는 $Y$에서 조밀하다.

**2.** 같은 (6)의 (i)과 가정에 의해 $\overline{A} \cap Y = Y$이므로 $Y \subseteq \overline{A}$이다. 내부와 폐포 항목의 (4)와 (5)에 의해 $\overline{Y} \subseteq \overline{\overline{A}} = \overline{A}$이다. $Y$가 $X$에서 조밀하므로 $\overline{Y} = X$이고, 따라서 $X \subseteq \overline{A}$이다. $\overline{A} \subseteq X$이므로 $\overline{A} = X$, 곧 $A$는 $X$에서 조밀하다.

**3.** 조밀한 부분집합 항목의 (1)을 위상공간 $(Y, \mathcal{T}|_Y)$에 쓰면 $Y$는 $Y$에서 조밀하므로, $A = Y$는 $Y$에서 조밀하다. 한편 [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합]]의 (2)와 [[closed-set|닫힌집합]]의 (6)에 의해 $[0, 1]$은 보통 위상에서 닫힌집합이므로, 내부와 폐포 항목의 (3)에 의해 $\overline{[0, 1]} = [0, 1]$이다. $1 < 2$이므로 [[order-properties-of-reals|실수의 순서의 성질]]의 (1)의 (i)에 의해 $2 \le 1$이 아니어서 $2 \notin [0, 1]$이고, 따라서 $\overline{A} \ne \mathbb{R}$이다. 곧 $A$는 $X$에서 조밀하지 않다. 1의 거꾸로는 성립하지 않을 수 있다.
:::

:::exercise[곱공간의 집합을 한 좌표에서 자른 단면]
$(X_1, \mathcal{T}_1)$, $(X_2, \mathcal{T}_2)$가 위상공간이고 $X_1 \times X_2$에는 곱위상을 준다. $W \subseteq X_1 \times X_2$와 $x_0 \in X_1$에 대하여
$$
W_{x_0} = \{y \in X_2 : (x_0, y) \in W\}
$$
를 $W$의 $x_0$에서의 단면이라 하자.

1. $W$가 열려 있으면 $W_{x_0}$은 $X_2$에서 열려 있음을 보여라.
2. $W$가 닫혀 있으면 $W_{x_0}$은 $X_2$에서 닫혀 있음을 보여라.
3. $\mathbb{R} \times \mathbb{R}$(보통 위상)에서 $W = \{(x, y) \in \mathbb{R} \times \mathbb{R} : 0 < y\} \cup (\{0\} \times \mathbb{R})$이라 하자. 모든 실수 $x_0$에서 $W_{x_0}$이 $\mathbb{R}$에서 열려 있지만 $W$는 열려 있지 않음을 보여라.
:::

:::solution
곱위상은 [[product-topology|두 공간의 곱위상]]의 것이고, 연속은 [[continuous-map|위상공간 사이의 연속함수]]의 것이다.

**1.** [[maps-into-a-product|사영과 곱으로 가는 함수]]의 (4)의 (ii)에 의해 $j(y) = (x_0, y)$로 정한 함수 $j : X_2 \to X_1 \times X_2$는 연속이다. [[image-and-preimage|상과 역상]]의 역상의 정의에 의해
$$
\begin{aligned}
j^{-1}(W) &= \{y \in X_2 : (x_0, y) \in W\} \\
&= W_{x_0}
\end{aligned}
$$
이다. $W$가 곱위상의 원소이므로 연속의 정의에 의해 $W_{x_0}$은 $X_2$에서 열려 있다.

**2.** 같은 등식 $j^{-1}(W) = W_{x_0}$과 [[continuity-criteria|연속의 판정]]의 (1)에 의해, $W$가 닫혀 있으면 $W_{x_0}$은 $X_2$에서 닫혀 있다.

**3.** $\mathbb{R}$의 보통 위상을 $\mathcal{T}_d$라 하면 $\mathbb{R} \times \mathbb{R}$의 위상은 $\mathcal{T}_d \otimes \mathcal{T}_d$이다([[max-metric-and-product-topology|최대 거리의 위상은 곱위상이다]]의 (2)).

*단면.* $x_0 = 0$이면 모든 실수 $y$에서 $(0, y) \in \{0\} \times \mathbb{R} \subseteq W$이므로 $W_0 = \mathbb{R}$이고, 이것은 [[topological-space|위상공간]]의 조건 (i)에 의해 열려 있다. $x_0 \ne 0$이면 $(x_0, y) \notin \{0\} \times \mathbb{R}$이므로 $(x_0, y) \in W$인 것은 정확히 $0 < y$일 때이고, $W_{x_0} = \{y \in \mathbb{R} : 0 < y\}$이다. 이것은 [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합]]의 (1)과 [[standard-topology-on-reals|실수의 보통 위상]]의 (5)에 의해 보통 위상에서 열려 있다.

*$W$는 열려 있지 않다.* $W$가 열려 있다고 해 보자. $(0, 0) \in \{0\} \times \mathbb{R} \subseteq W$이므로 곱위상 항목의 (3)의 (b)에 의해 $0 \in U$, $0 \in V$, $U \times V \subseteq W$인 $U, V \in \mathcal{T}_d$가 있다. [[neighborhood|근방]]의 (4)의 (b)에 의해 $B(0, r) \subseteq U$인 실수 $r > 0$이 있고, [[open-ball|열린 공]]의 (5)에 의해 $B(0, r)$은 열린구간 $(-r, r)$이다. $s = r/2$로 두면 [[order-properties-of-reals|실수의 순서의 성질]]의 (8)에 의해 $0 < s < r$이고, (3)의 (ii)에 의해 $-r < 0$이므로 $s \in (-r, r) \subseteq U$이다. 따라서 $(s, 0) \in U \times V \subseteq W$이다.

그러나 $(s, 0) \notin W$이다. $0 < s$이므로 순서의 성질 (1)의 (i)에 의해 $s \ne 0$이어서 $(s, 0) \notin \{0\} \times \mathbb{R}$이고, 같은 (1)의 (i)에 의해 $0 < 0$은 성립하지 않으므로 $(s, 0)$은 $\{(x, y) : 0 < y\}$에도 들지 않는다. 모순이므로 $W$는 열려 있지 않다. 곧 1의 거꾸로, "모든 단면이 열려 있으면 $W$가 열려 있다"는 성립하지 않을 수 있다.
:::

:::exercise[평면 위의 최대 함수와 붙이기 보조정리]
$M(x, y) = \max\{x, y\}$로 정한 함수 $M : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$를 생각한다($\mathbb{R} \times \mathbb{R}$과 $\mathbb{R}$에는 보통 위상).

1. $A = \{(x, y) \in \mathbb{R} \times \mathbb{R} : x \le y\}$와 $B = \{(x, y) \in \mathbb{R} \times \mathbb{R} : y \le x\}$가 닫힌집합임을 보이고, 붙이기 보조정리로 $M$이 연속임을 보여라.
2. $(Z, \mathcal{T}_Z)$가 위상공간이고 $f, g : Z \to \mathbb{R}$가 연속이면, $z$를 $\max\{f(z), g(z)\}$로 보내는 함수 $Z \to \mathbb{R}$가 연속임을 보여라.
:::

:::solution
$\max\{x, y\}$는 [[absolute-value|절댓값]]의 두 수의 최대이고, 각 $(x, y)$마다 실수 하나로 정해지므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $M$은 함수이다. 사영 $\pi_1$, $\pi_2$는 [[product-topology|두 공간의 곱위상]]의 것이고, 아래에서 "순서의 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다.

**1.** *차의 함수.* [[maps-into-a-product|사영과 곱으로 가는 함수]]의 (1)의 (i)에 의해 $\pi_1$, $\pi_2$는 연속이고, 값이 $-1$인 상수함수는 [[continuous-map|위상공간 사이의 연속함수]]의 (2)에 의해 연속이다. [[max-metric-and-product-topology|최대 거리의 위상은 곱위상이다]]의 (3)을 곱과 합에 차례로 쓰면 $\delta(z) = \pi_2(z) + (-1)\pi_1(z)$로 정한 함수 $\delta : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$는 연속이다. [[real-number-arithmetic|실수의 계산 법칙]]의 (K9)와 뺄셈의 정의에 의해 $\delta(x, y) = y - x$이다.

*$A$와 $B$는 닫혀 있다.* 순서의 성질 (3)의 (i)에 의해 $x \le y$인 것은 정확히 $0 \le y - x$일 때이고, (2)의 (ii)를 $c = -x$로 쓰면 $y \le x$인 것은 정확히 $y - x \le 0$일 때이다. 따라서 $P_0 = \{t \in \mathbb{R} : 0 \le t\}$, $N_0 = \{t \in \mathbb{R} : t \le 0\}$에 대하여 $A = \delta^{-1}(P_0)$, $B = \delta^{-1}(N_0)$이다. [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합]]의 (2)와 [[closed-set|닫힌집합]]의 (6)에 의해 $P_0$, $N_0$은 보통 위상에서 닫혀 있으므로, [[continuity-criteria|연속의 판정]]의 (1)에 의해 $A$와 $B$는 닫혀 있다. 순서의 성질 (1)의 (iv)에 의해 모든 $(x, y)$에서 $x \le y$이거나 $y \le x$이므로 $A \cup B = \mathbb{R} \times \mathbb{R}$이다.

*조각 위의 함수.* $(x, y) \in A$이면 $x \le y$이므로 최대의 정의에 의해 $M(x, y) = y = \pi_2(x, y)$이다. $(x, y) \in B$이면 $y \le x$이다. 이때 $y < x$이면 $M(x, y) = x$이고, $y < x$가 아니면 순서의 성질 (1)의 (iii)에 의해 $x \le y$이므로 (1)의 (ii)에 의해 $x = y$이고 $M(x, y) = y = x$이다. 어느 쪽이든 $M(x, y) = \pi_1(x, y)$이다. 따라서 $M|_A = \pi_2|_A$이고 $M|_B = \pi_1|_B$이며, [[subspace-and-continuity|부분공간 위상과 연속]]의 (2)에 의해 둘 다 연속이다.

*붙이기.* $A$, $B$는 닫힌집합이고 $A \cup B = \mathbb{R} \times \mathbb{R}$이며 $M|_A$, $M|_B$가 연속이므로, [[pasting-lemma|붙이기 보조정리]]의 (3)에 의해 $M$은 연속이다.

**2.** 사영과 곱으로 가는 함수 항목의 (4)의 (i)에 의해 $h(z) = (f(z), g(z))$로 정한 함수 $h : Z \to \mathbb{R} \times \mathbb{R}$는 연속이다. [[composition-of-continuous-maps|연속함수의 합성]]의 (1)에 의해 $M \circ h : Z \to \mathbb{R}$는 연속이고, 그 $z$에서의 값은 $M(f(z), g(z)) = \max\{f(z), g(z)\}$이다.
:::

:::exercise[두 집합의 곱이 조밀할 조건]
$(X_1, \mathcal{T}_1)$, $(X_2, \mathcal{T}_2)$가 위상공간이고 $X_1 \times X_2$에는 곱위상을 주며, $A \subseteq X_1$, $B \subseteq X_2$이다.

1. $X_1 \ne \emptyset$이고 $X_2 \ne \emptyset$이면, $A \times B$가 $X_1 \times X_2$에서 조밀한 것은 정확히 $A$가 $X_1$에서 조밀하고 $B$가 $X_2$에서 조밀할 때임을 보여라.
2. 1의 가정 $X_1 \ne \emptyset$, $X_2 \ne \emptyset$을 빼면 "$A \times B$가 조밀하면 $A$가 조밀하다"가 깨지는 예를 들어라.
:::

:::solution
조밀은 [[dense-subset|조밀한 부분집합]]의 것이고, $\overline{A}$, $\overline{B}$, $\overline{A \times B}$는 각각 $X_1$, $X_2$, $X_1 \times X_2$에서의 폐포이다.

**1.** [[closure-of-a-product|곱의 폐포와 내부]]의 (1)에 의해 $\overline{A \times B} = \overline{A} \times \overline{B}$이다.

$A$, $B$가 조밀하면 $\overline{A} = X_1$, $\overline{B} = X_2$이므로 $\overline{A \times B} = X_1 \times X_2$, 곧 $A \times B$는 조밀하다.

거꾸로 $A \times B$가 조밀하면 $X_1 \times X_2 = \overline{A} \times \overline{B}$이다. $X_1$, $X_2$가 공집합이 아니므로 [[product-topology|두 공간의 곱위상]]의 (1)의 (b)에 의해 $X_1 \times X_2 \ne \emptyset$이다. $X_1 \times X_2 \subseteq \overline{A} \times \overline{B}$이고 왼쪽이 공집합이 아니므로 같은 (1)의 (c)의 뒤 문장에 의해 $X_1 \subseteq \overline{A}$이고 $X_2 \subseteq \overline{B}$이다. [[interior-and-closure|내부와 폐포]]의 정의에 의해 $\overline{A} \subseteq X_1$, $\overline{B} \subseteq X_2$이므로 $\overline{A} = X_1$, $\overline{B} = X_2$이다.

**2.** $a \ne b$이고 $X_1 = \{a, b\}$에 이산위상을, $X_2 = \emptyset$에 그 위의 하나뿐인 위상 $\{\emptyset\}$([[topological-space|위상공간]]의 공집합 단락)을 주고, $A = \{a\}$, $B = \emptyset$이라 하자. 곱위상 항목의 (1)의 (b)에 의해 $A \times B = \emptyset = X_1 \times X_2$이고, 조밀한 부분집합 항목의 (1)에 의해 $X_1 \times X_2$는 자신에서 조밀하므로 $A \times B$는 조밀하다. 그러나 $A \ne X_1$이므로 같은 항목의 (2)에 의해 $A$는 이산위상의 $X_1$에서 조밀하지 않다.
:::

:::exercise[유리수와 무리수로 나눈 함수]
$x \in \mathbb{Q}$이면 $f(x) = 1$, $x \notin \mathbb{Q}$이면 $f(x) = 0$으로 정한 함수 $f : \mathbb{R} \to \mathbb{R}$(보통 위상)와 $A = \mathbb{Q}$, $B = \mathbb{R} - \mathbb{Q}$를 생각한다.

1. $A \cup B = \mathbb{R}$이고 $f|_A$, $f|_B$가 연속임을 보여라($A$, $B$에는 부분공간 위상).
2. $f$가 연속이 아님을 보여라.
3. 붙이기 보조정리의 (2)와 (3)이 이 $A$, $B$에 쓰이지 않는 까닭을 말하라.
:::

:::solution
각 실수 $x$마다 $x \in \mathbb{Q}$인지 아닌지에 따라 값이 하나로 정해지므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $f$는 함수이다. 붙이기 보조정리는 [[pasting-lemma|붙이기 보조정리]]의 것이다.

**1.** 모든 실수는 $\mathbb{Q}$에 들거나 들지 않으므로 $A \cup B = \mathbb{R}$이다. $f|_A$는 모든 점에서 값이 $1$이고 $f|_B$는 모든 점에서 값이 $0$이므로, [[continuous-map|위상공간 사이의 연속함수]]의 (2)에 의해 둘 다 연속이다.

**2.** $V = \{t \in \mathbb{R} : 0 < t\}$는 [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합]]의 (1)과 [[standard-topology-on-reals|실수의 보통 위상]]의 (5)에 의해 보통 위상에서 열려 있다. $x \in \mathbb{Q}$이면 [[order-properties-of-reals|실수의 순서의 성질]]의 (5)의 (ii)에 의해 $f(x) = 1 \in V$이고, $x \notin \mathbb{Q}$이면 순서의 성질 (1)의 (i)에 의해 $0 < 0$이 성립하지 않으므로 $f(x) = 0 \notin V$이다. 따라서 $f^{-1}(V) = \mathbb{Q}$이다. 실수의 열린집합과 닫힌집합 항목의 (6)의 (ii)에 의해 $\mathbb{Q}$는 $(\mathbb{R}, d)$에서 열린집합이 아니므로, 보통 위상 항목의 (5)에 의해 보통 위상에서도 열려 있지 않다. 열린집합의 역상이 열려 있지 않으므로 $f$는 연속이 아니다.

**3.** 붙이기 보조정리의 (2)는 조각들이 열린집합이어야 하고, (3)은 두 조각이 닫힌집합이어야 한다. 실수의 열린집합과 닫힌집합 항목의 (6)의 (ii)와 (iii)에 의해 $\mathbb{Q}$와 $\mathbb{R} - \mathbb{Q}$는 열린집합도 닫힌집합도 아니므로([[closed-set|닫힌집합]]의 (6)으로 보통 위상의 말로 옮긴다) 두 가정이 모두 깨진다. 1과 2는 그 가정이 빠지면 조각마다 연속이어도 전체가 연속이 아닐 수 있음을 보여 준다.
:::
