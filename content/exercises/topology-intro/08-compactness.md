---
written_by: Claude
status: reviewed
sources:
  - ref: fuglede-basic-topology
    loc: "Compactness in ℝⁿ 절, Proposition closing-the-bag 의 증명 첫 문장 (content/compactness.tex:250)"
  - ref: fuglede-basic-topology
    loc: "Exercises 절, Set #3, 연습문제 3.3 (content/exercises.tex:109), Separation -- part 2 절의 Proposition compact-hausdorff-normal (content/separation.tex:42–48)"
  - ref: fuglede-basic-topology
    loc: "Exercises 절, Set #3, 연습문제 3.8 (a) (content/exercises.tex:114–116)"
  - ref: lebl-basic-analysis
    loc: "7.5.6절, Exercise 7.5.10 c) (p.294)"
added: 2026-11-26
---

:::exercise[닫힌 원판과 열린 원판]
$\mathbb{R} \times \mathbb{R}$(보통 위상)의 두 부분집합
$$
\begin{aligned}
D &= \{(x, y) : xx + yy \le 1\}, \\
E &= \{(x, y) : xx + yy < 1\}
\end{aligned}
$$
을 생각한다. 여기서 $(x, y)$는 $\mathbb{R} \times \mathbb{R}$의 원소이다.

1. $D$가 콤팩트 부분집합임을 보여라.
2. $(1, 0)$이 $E$의 폐포에 들지만 $E$에 들지 않음을 보이고, $E$가 콤팩트 부분집합이 아님을 보여라.
:::

:::solution
$\mathbb{R} \times \mathbb{R}$의 보통 위상과 그 기저(열린구간의 곱 $I \times J$ 전체)는 [[max-metric-and-product-topology|최대 거리의 위상은 곱위상이다]]의 (2)의 것이고, 콤팩트 부분집합은 [[compact-space|열린 덮개와 콤팩트 공간]]의 것이다. 아래에서 "순서의 성질"은 [[order-properties-of-reals|실수의 순서의 성질]], "절댓값"은 [[absolute-value|절댓값]]의 번호이다.

**1.** *$D$는 닫혀 있다.* [[maps-into-a-product|사영과 곱으로 가는 함수]]의 (1)의 (i)에 의해 사영 $\pi_1$, $\pi_2$는 연속이므로, 최대 거리의 위상은 곱위상이다 항목의 (3)을 곱과 합에 쓰면 $s(z) = \pi_1(z)\pi_1(z) + \pi_2(z)\pi_2(z)$로 정한 $s : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$는 연속이고 $s(x, y) = xx + yy$이다. $D = s^{-1}(N)$이고 $N = \{t \in \mathbb{R} : t \le 1\}$은 [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합]]의 (2)와 [[closed-set|닫힌집합]]의 (6)에 의해 보통 위상에서 닫혀 있으므로, [[continuity-criteria|연속의 판정]]의 (1)에 의해 $D$는 닫혀 있다.

*$D$는 유계이다.* $(x, y) \in D$라 하자. 순서의 성질 (5)의 (iii)에 의해 $0 \le yy$이므로 (2)의 (i)에 의해 $xx \le xx + yy \le 1$이다. 절댓값 (5)에 의해 $xx = |x|\,|x|$이다. $1 < |x|$라면 절댓값 (2)의 $0 \le |x|$와 순서의 성질 (5)의 (ii)의 $0 < 1$로 (7)의 (i)을 쓰면 $1 \cdot 1 < |x|\,|x| = xx$가 되어 $xx \le 1$과 어긋난다((1)의 (i)). 따라서 순서의 성질 (1)의 (iii)에 의해 $|x| \le 1$이고, 절댓값 (7)에 의해 $-1 \le x \le 1$이다. 같은 방법으로 $-1 \le y \le 1$이다. 곧 $I = [-1, 1]$에 대하여 $D \subseteq I \times I$이다.

[[product-of-compact-spaces|튜브 보조정리와 두 콤팩트 공간의 곱]]의 (5)의 (i)을 $r = 1$로 쓰면 $D$는 $d_{\max}$로 유계이고, 같은 (5)의 (ii)에 의해 닫혀 있고 유계인 $D$는 콤팩트 부분집합이다.

**2.** *$(1, 0) \notin E$.* $1 \cdot 1 + 0 \cdot 0 = 1$이고 순서의 성질 (1)의 (i)에 의해 $1 < 1$은 성립하지 않으므로 $(1, 0) \notin E$이다.

*$(1, 0) \in \overline{E}$.* [[closure-by-neighborhoods|근방으로 본 폐포]]의 (2)에 의해, $(1, 0)$을 갖는 기저 원소 $I \times J$가 모두 $E$와 만남을 보이면 된다. $I = (a, b)$이고 $(1, 0) \in I \times J$라 하면 $a < 1 < b$이고 $0 \in J$이다. $m = \max\{a, 0\}$이라 하면 절댓값 (10)에 의해 $m$은 $a$이거나 $0$이므로 $m < 1$이고, $a \le m$, $0 \le m$이다. $t = (m + 1)/2$로 두면 순서의 성질 (8)에 의해 $m < t < 1$이다. 그러면 (1)의 (v)에 의해 $a < t$, $0 < t$이고, $t < 1 < b$이므로 $t \in I$이다. 순서의 성질 (7)의 (i)에 의해 $tt < 1 \cdot 1 = 1$이고, [[real-number-arithmetic|실수의 계산 법칙]]의 (K4), (K9)에 의해 $tt + 0 \cdot 0 = tt < 1$이므로 $(t, 0) \in E$이다. 따라서 $(t, 0) \in (I \times J) \cap E$이고, $(1, 0) \in \overline{E}$이다.

*$E$는 콤팩트가 아니다.* $\overline{E} \ne E$이므로 [[interior-and-closure|내부와 폐포]]의 (3)에 의해 $E$는 닫혀 있지 않다. 튜브 보조정리와 두 콤팩트 공간의 곱 항목의 (5)의 (ii)에 의해 $E$는 콤팩트 부분집합이 아니다.
:::

:::exercise[콤팩트 공간에서 하우스도르프 공간으로 가는 연속인 전사]
$(X, \mathcal{T}_X)$가 콤팩트 공간이고 $(Y, \mathcal{T}_Y)$가 하우스도르프 공간이며 $f : X \to Y$가 연속인 전사이다. $V \subseteq Y$가 $Y$에서 열려 있는 것은 정확히 $f^{-1}(V)$가 $X$에서 열려 있을 때임을 보여라.
:::

:::solution
연속은 [[continuous-map|위상공간 사이의 연속함수]]의 것이고, 닫힌 사상은 [[homeomorphism|위상동형사상]]의 것이다.

$V$가 열려 있으면 연속의 정의에 의해 $f^{-1}(V)$는 열려 있다.

거꾸로 $f^{-1}(V)$가 열려 있다고 하자. [[preimage-and-set-operations|역상과 집합 연산]]의 (3)에 의해 $f^{-1}(Y - V) = X - f^{-1}(V)$이고, [[closed-set|닫힌집합]]의 (5)에 의해 이것은 $X$의 닫힌집합이다. [[continuous-image-of-compact|콤팩트 공간의 연속 상과 위상동형 판정]]의 (2)에 의해 $f$는 닫힌 사상이므로 $f(f^{-1}(Y - V))$는 $Y$의 닫힌집합이다.

$f$가 전사이므로 $f(f^{-1}(Y - V)) = Y - V$이다. 역상과 집합 연산 항목의 (1)의 (vi)에 의해 왼쪽은 $Y - V$에 포함된다. 거꾸로 $w \in Y - V$이면 전사이므로 $f(x) = w$인 $x \in X$가 있고, $x \in f^{-1}(Y - V)$이므로 $w \in f(f^{-1}(Y - V))$이다. 따라서 $Y - V$는 닫힌집합이고, 닫힌집합 항목의 (5)에 의해 $V$는 열려 있다.
:::

:::exercise[하우스도르프 공간의 서로소인 두 콤팩트 집합을 떼어 놓기]
$(X, \mathcal{T})$가 하우스도르프 공간이다.

1. $K$, $L$이 $X$의 서로소인 콤팩트 부분집합이면 $L \subseteq V$, $K \subseteq W$, $V \cap W = \emptyset$인 열린집합 $V$, $W$가 있음을 보여라. 콤팩트 집합 $L$의 점마다 열린집합을 하나씩 고르지 말고 유한 합집합의 보조정리를 써라.
2. $X$가 콤팩트이기도 하면, 서로소인 두 닫힌집합에 대해서도 1의 결론이 성립함을 보여라.
:::

:::solution
콤팩트 부분집합, 유한 부분족과 유한 합집합의 보조정리는 [[compact-space|열린 덮개와 콤팩트 공간]]의 것이고, 근방은 [[neighborhood|근방]]의 것이다.

**1.** $X$의 부분집합 $S$ 가운데 "$S \subseteq V$, $K \subseteq W$, $V \cap W = \emptyset$인 열린집합 $V$, $W$가 있다"를 만족하는 것 전체의 집합족을 $\mathcal{K}$라 하자([[family-of-sets|집합족의 합집합과 교집합]]의 조건으로 정한 부분집합).

*$\mathcal{K}$는 보조정리의 가정을 만족한다.* $V = \emptyset$, $W = X$로 두면 $\emptyset \in \mathcal{K}$이다. $S_1, S_2 \in \mathcal{K}$이고 $S_1 \subseteq V_1$, $K \subseteq W_1$, $V_1 \cap W_1 = \emptyset$, $S_2 \subseteq V_2$, $K \subseteq W_2$, $V_2 \cap W_2 = \emptyset$이라 하자. $V = V_1 \cup V_2$, $W = W_1 \cap W_2$는 [[topological-space|위상공간]]의 (1)과 조건 (iii)에 의해 열려 있고, $S_1 \cup S_2 \subseteq V$, $K \subseteq W$이며, $V \cap W \subseteq (V_1 \cap W_1) \cup (V_2 \cap W_2) = \emptyset$이다. 따라서 $S_1 \cup S_2 \in \mathcal{K}$이다.

*$L$을 덮기.* $\mathcal{V} = \mathcal{T} \cap \mathcal{K}$, 곧 $\mathcal{K}$에 드는 열린집합 전체의 집합족이라 하자. $x \in L$이면 $K \cap L = \emptyset$이므로 $x \in X - K$이고, [[compact-subset-of-hausdorff-is-closed|하우스도르프 공간의 콤팩트 부분집합은 닫혀 있다]]의 (1)에 의해 $K \subseteq W$, $U \cap W = \emptyset$인 $x$의 근방 $U$와 열린집합 $W$가 있다. $V = U$로 두면 $U \in \mathcal{K}$이므로 $U \in \mathcal{V}$이고 $x \in U$이다. 따라서 $L \subseteq \bigcup \mathcal{V}$이다.

*유한 개로 줄이기.* $L$이 콤팩트 부분집합이므로 열린 덮개와 콤팩트 공간 항목의 (3)에 의해 $L \subseteq \bigcup \mathcal{F}$인 $\mathcal{V}$의 유한 부분족 $\mathcal{F}$가 있다. $\mathcal{F} \subseteq \mathcal{V} \subseteq \mathcal{K}$이고 $\mathcal{F}$가 유한집합이므로, 같은 항목의 (1)의 (i)에 의해 $\bigcup \mathcal{F} \in \mathcal{K}$이다. 곧 $\bigcup \mathcal{F} \subseteq V$, $K \subseteq W$, $V \cap W = \emptyset$인 열린집합 $V$, $W$가 있고, $L \subseteq \bigcup \mathcal{F} \subseteq V$이다.

**2.** $F$, $G$가 $X$의 서로소인 닫힌집합이면 [[closed-subset-of-compact|콤팩트 공간의 닫힌 부분집합]]의 (1)에 의해 둘 다 콤팩트 부분집합이므로, 1을 $K = F$, $L = G$에 쓰면 된다.
:::

:::exercise[콤팩트 인자를 지우는 사영과 닫힌 사상]
$(X, \mathcal{T}_X)$가 위상공간이고 $(Y, \mathcal{T}_Y)$가 콤팩트 공간이며 $X \times Y$에는 곱위상을 준다.

1. 사영 $\pi_1 : X \times Y \to X$가 닫힌 사상임을 보여라.
2. 사영과 곱으로 가는 함수 항목의 (1)의 (iii)의 예에서 1의 어느 가정이 성립하지 않는지 말하라.
:::

:::solution
닫힌 사상은 [[homeomorphism|위상동형사상]]의 것이고, 곱위상과 사영은 [[product-topology|두 공간의 곱위상]]의 것이다.

**1.** $F$가 $X \times Y$의 닫힌집합이라 하고, $X - \pi_1(F)$가 열려 있음을 보인다. $x_0 \in X - \pi_1(F)$라 하자. $N = (X \times Y) - F$는 [[closed-set|닫힌집합]]의 정의에 의해 열려 있다. $y \in Y$이면 $(x_0, y) \notin F$이다. $(x_0, y) \in F$라면 $x_0 = \pi_1(x_0, y) \in \pi_1(F)$가 되기 때문이다. 곧 $\{x_0\} \times Y \subseteq N$이다.

$Y$가 콤팩트이므로 [[product-of-compact-spaces|튜브 보조정리와 두 콤팩트 공간의 곱]]의 (1)의 (i)에 의해 $W \times Y \subseteq N$인 $x_0$의 근방 $W$가 있다. $x \in W \cap \pi_1(F)$인 $x$가 있다면 $\pi_1(x, y) = x$인 $(x, y) \in F$가 있고, $(x, y) \in W \times Y \subseteq N$이므로 $(x, y) \notin F$가 되어 모순이다. 따라서 $W \subseteq X - \pi_1(F)$이다.

$X - \pi_1(F)$의 모든 점이 그 안에 드는 근방을 가지므로 [[neighborhood|근방]]의 (3)에 의해 $X - \pi_1(F)$는 열려 있고, 닫힌집합 항목의 (5)에 의해 $\pi_1(F)$는 닫혀 있다. 따라서 $\pi_1$은 닫힌 사상이다.

**2.** [[maps-into-a-product|사영과 곱으로 가는 함수]]의 (1)의 (iii)의 예는 $X_1 = \mathbb{R}$(보통 위상), $X_2 = \mathbb{N}$(이산위상)에서 $\pi_1$이 닫힌 사상이 아님을 보인다. 여기서 지우는 인자 $\mathbb{N}$은 [[compact-space|열린 덮개와 콤팩트 공간]]의 (8)의 (iv)에 의해 콤팩트가 아니므로, 1의 가정 "$Y$가 콤팩트이다"가 성립하지 않는다.
:::

:::exercise[콤팩트 집합 사이의 가장 가까운 두 점]
$(X, d)$가 거리공간이다.

1. $K$, $L$이 공집합이 아닌 콤팩트 부분집합이면, 모든 $x \in K$, $y \in L$에서 $d(p, q) \le d(x, y)$인 $p \in K$, $q \in L$이 있음을 보여라. 또 $K \cap L = \emptyset$이면 이때 $0 < d(p, q)$임을 보여라.
2. $\mathbb{R}$(보통 거리)에서 $K = \{0\}$, $L = (0, 1]$이면 1의 첫 결론을 만족하는 $p$, $q$가 없음을 보여라.
:::

:::solution
거리공간의 조건과 그 따름은 [[metric-space|거리공간]]의 것이고, 콤팩트 부분집합은 [[compact-space|열린 덮개와 콤팩트 공간]]의 것이다. $X \times X$에는 곱위상 $\mathcal{T}_d \otimes \mathcal{T}_d$를, 그 부분집합에는 부분공간 위상을 준다.

**1.** [[product-of-compact-spaces|튜브 보조정리와 두 콤팩트 공간의 곱]]의 (4)에 의해 $K \times L$은 $X \times X$의 콤팩트 부분집합, 곧 부분공간 위상으로 콤팩트 공간이다. $K$, $L$이 공집합이 아니므로 [[product-topology|두 공간의 곱위상]]의 (1)의 (b)에 의해 $K \times L \ne \emptyset$이다. [[max-metric-and-product-topology|최대 거리의 위상은 곱위상이다]]의 (4)에 의해 $d : X \times X \to \mathbb{R}$는 연속이고, [[subspace-and-continuity|부분공간 위상과 연속]]의 (2)에 의해 그 제한 $d|_{K \times L} : K \times L \to \mathbb{R}$도 연속이다.

[[extreme-value-theorem-for-compact-spaces|콤팩트 공간 위의 연속 실함수의 최댓값과 최솟값]]의 (2)에 의해 $d|_{K \times L}$이 최솟값을 갖는 점 $(p, q) \in K \times L$이 있다. 곧 $p \in K$, $q \in L$이고 모든 $(x, y) \in K \times L$에서 $d(p, q) \le d(x, y)$이다.

$K \cap L = \emptyset$이면 $p \in K$, $q \in L$이므로 $p \ne q$이고, 거리공간 항목의 (1)에 의해 $0 < d(p, q)$이다.

**2.** 실수 $y$에 대하여 보통 거리는 $d(0, y) = |0 - y|$이고, $y \in L$이면 $0 < y$이므로 [[absolute-value|절댓값]]의 (3)과 (1)에 의해 $d(0, y) = y$이다. 1의 첫 결론을 만족하는 $p \in K$, $q \in L$이 있다고 하자. $p = 0$이고 $0 < q \le 1$이다. $q' = q/2$로 두면 [[order-properties-of-reals|실수의 순서의 성질]]의 (8)에 의해 $0 < q' < q$이고, $q \le 1$이므로 $q' \in L$이다. 그런데 $d(0, q') = q' < q = d(0, q)$이므로 $d(p, q) \le d(0, q')$과 어긋난다(순서의 성질 (1)의 (i)). 따라서 그런 $p$, $q$는 없다. [[heine-borel-on-reals|실수의 하이네–보렐 정리]]의 (3)의 (iii)에 의해 $L$은 콤팩트 부분집합이 아니어서 1의 가정이 깨진다.
:::

:::exercise[콤팩트 집합의 폐포가 콤팩트가 아닌 예]
$\mathbb{N}$의 집합족 $\mathcal{T} = \{\emptyset\} \cup \{U \in \mathscr{P}(\mathbb{N}) : 1 \in U\}$를 생각한다.

1. $\mathcal{T}$가 $\mathbb{N}$ 위의 위상임을 보여라.
2. $\{1\}$이 콤팩트 부분집합이고 $\overline{\{1\}} = \mathbb{N}$임을 보여라.
3. $(\mathbb{N}, \mathcal{T})$가 콤팩트가 아님을 보여라. 곧 콤팩트 집합 $\{1\}$의 폐포는 콤팩트가 아니다.
:::

:::solution
위상은 [[topological-space|위상공간]]의 것이고, 콤팩트는 [[compact-space|열린 덮개와 콤팩트 공간]]의 것이며, 유한집합과 무한집합은 [[finite-set|유한집합]]의 것이다.

**1.** (i) $\emptyset \in \mathcal{T}$이고 $1 \in \mathbb{N}$이므로 $\mathbb{N} \in \mathcal{T}$이다. (ii) $\mathcal{U} \subseteq \mathcal{T}$일 때, $1$을 갖는 원소가 $\mathcal{U}$에 있으면 $1 \in \bigcup \mathcal{U}$이므로 $\bigcup \mathcal{U} \in \mathcal{T}$이고, 없으면 $\mathcal{U}$의 원소는 모두 $\emptyset$이어서 $\bigcup \mathcal{U} = \emptyset \in \mathcal{T}$이다. (iii) $U, V \in \mathcal{T}$가 둘 다 $1$을 가지면 $1 \in U \cap V$이고, 아니면 하나가 $\emptyset$이어서 $U \cap V = \emptyset$이다. 어느 쪽이든 $U \cap V \in \mathcal{T}$이다.

**2.** [[finite-set|유한집합]]의 (F2)와 [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (a)에 의해 $\{1\} = \emptyset \cup \{1\}$은 원소를 $1$개 갖는 유한집합이므로, 열린 덮개와 콤팩트 공간 항목의 (8)의 (ii)에 의해 콤팩트 부분집합이다.

$x \in \mathbb{N}$이고 $U$가 $x$의 근방이면 [[neighborhood|근방]]의 (1)에 의해 $U \ne \emptyset$이고, $\mathcal{T}$의 정의에 의해 $1 \in U$이므로 $U \cap \{1\} \ne \emptyset$이다. [[closure-by-neighborhoods|근방으로 본 폐포]]의 (1)에 의해 $x \in \overline{\{1\}}$이다. 따라서 $\overline{\{1\}} = \mathbb{N}$이다.

**3.** $F = \mathbb{N} - \{1\}$이라 하자. $\mathbb{N} - F = \{1\}$은 $1$을 가지므로 $\mathcal{T}$의 원소이고, [[closed-set|닫힌집합]]의 정의와 (5)에 의해 $F$는 닫혀 있다.

*$F$의 부분공간 위상은 이산위상이다.* $S \subseteq F$이면 $1 \notin S$이므로 $S = (S \cup \{1\}) \cap F$이고, $S \cup \{1\}$은 $1$을 가지므로 $\mathcal{T}$의 원소이다. [[subspace-topology|부분공간 위상]]의 정의에 의해 $S \in \mathcal{T}|_F$이다. 곧 $\mathcal{T}|_F = \mathscr{P}(F)$이다.

*$F$는 무한집합이다.* $F$가 원소를 $k$개 갖는다면 $1 \notin F$이므로 원소 하나를 더하거나 빼기 항목의 (a)에 의해 $F \cup \{1\} = \mathbb{N}$이 원소를 $k + 1$개 가져 유한집합이 되는데, 이것은 [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (1)과 어긋난다.

$(\mathbb{N}, \mathcal{T})$가 콤팩트라면 [[closed-subset-of-compact|콤팩트 공간의 닫힌 부분집합]]의 (1)에 의해 닫힌집합 $F$는 콤팩트 부분집합, 곧 $(F, \mathcal{T}|_F) = (F, \mathscr{P}(F))$는 콤팩트 공간이다. 그러나 열린 덮개와 콤팩트 공간 항목의 (8)의 (iv)에 의해 이산위상을 준 $F$가 콤팩트인 것은 정확히 $F$가 유한집합일 때이므로 모순이다. 따라서 $(\mathbb{N}, \mathcal{T})$는 콤팩트가 아니다.

[[compact-subset-of-hausdorff-is-closed|하우스도르프 공간의 콤팩트 부분집합은 닫혀 있다]]의 (2)에 의해 하우스도르프 공간에서는 콤팩트 집합이 닫혀 있어 그 폐포가 자기 자신이므로, 이런 일은 하우스도르프 공간에서는 일어나지 않는다. 이 공간에서는 $\{1\}$이 콤팩트이지만 닫혀 있지 않다.
:::
