---
written_by: Claude
status: reviewed
sources:
  - ref: lebl-basic-analysis
    loc: "7.6.1절, Theorem 7.6.2 의 증명 (p.297)"
added: 2026-11-26
---

:::exercise[1을 늘 품는 열린집합들의 위상]
$\mathbb{N}$의 집합족 $\mathcal{T} = \{\emptyset\} \cup \{U \in \mathscr{P}(\mathbb{N}) : 1 \in U\}$를 생각한다.

1. $\mathcal{T}$가 $\mathbb{N}$ 위의 위상임을 보여라.
2. $(\mathbb{N}, \mathcal{T})$가 $T_1$ 공간이 아님을 보이고, 자연수 $n$ 가운데 한 점 집합 $\{n\}$이 닫혀 있는 것을 모두 구하라.
3. 모든 항이 $1$인 상수 수열은 $\mathbb{N}$의 모든 점으로 수렴하고, $n$번째 항이 $n$인 수열은 어느 점으로도 수렴하지 않음을 보여라.
:::

:::solution
위상은 [[topological-space|위상공간]]의 것이고, $T_1$ 공간과 하우스도르프 공간은 [[hausdorff-space|T₁ 공간과 하우스도르프 공간]]의 것이며, 수열의 수렴은 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 것이다.

**1.** 위상의 조건을 차례로 본다.

- (i) $\emptyset \in \mathcal{T}$이고, $1 \in \mathbb{N}$이므로 $\mathbb{N} \in \mathcal{T}$이다.
- (ii) $\mathcal{U} \subseteq \mathcal{T}$라 하자. $1 \in U$인 $U \in \mathcal{U}$가 있으면 $1 \in \bigcup \mathcal{U}$이므로 $\bigcup \mathcal{U} \in \mathcal{T}$이다. 그런 $U$가 없으면 $\mathcal{U}$의 원소는 모두 $1$을 갖지 않는 $\mathcal{T}$의 원소, 곧 $\emptyset$이다. 그러면 어느 점도 $\mathcal{U}$의 원소에 들지 않으므로 $\bigcup \mathcal{U} = \emptyset \in \mathcal{T}$이다($\mathcal{U} = \emptyset$인 경우도 여기에 든다).
- (iii) $U, V \in \mathcal{T}$라 하자. 둘 다 $1$을 가지면 $1 \in U \cap V$이므로 $U \cap V \in \mathcal{T}$이다. 아니면 둘 가운데 하나가 $\emptyset$이므로 $U \cap V = \emptyset \in \mathcal{T}$이다.

아래에서 다음을 여러 번 쓴다. **(가)** 정의에 의해 공집합이 아닌 열린집합은 모두 $1$을 갖는다. [[neighborhood|근방]]의 (1)에 의해 근방은 공집합이 아니므로, 모든 점의 모든 근방은 $1$을 갖는다.

**2.** $2 \ne 1$이다. $T_1$ 공간이라면 $1 \notin U$인 $2$의 근방 $U$가 있어야 하지만 (가)에 의해 그런 $U$는 없다. 따라서 $(\mathbb{N}, \mathcal{T})$는 $T_1$ 공간이 아니다.

[[closed-set|닫힌집합]]의 정의에 의해 $\{n\}$이 닫혀 있는 것은 정확히 $\mathbb{N} - \{n\} \in \mathcal{T}$일 때이다. $n \ne 1$이면 $1 \in \mathbb{N} - \{n\}$이므로 $\{n\}$은 닫혀 있다. $n = 1$이면 $\mathbb{N} - \{1\}$은 $2$를 가져 공집합이 아니고 $1$을 갖지 않으므로 $\mathcal{T}$의 원소가 아니다. 따라서 한 점 집합이 닫혀 있는 것은 정확히 $n \ne 1$일 때이다. $\{1\}$이 닫혀 있지 않다는 것은 $T_1$ 공간 항목의 (2)로도 $T_1$이 아님을 알려 준다.

**3.** *항이 모두 $1$인 수열.* $p \in \mathbb{N}$이고 $U$가 $p$의 근방이면 (가)에 의해 $1 \in U$이므로, $M = 1$로 두면 모든 자연수 $n$에서 $n$번째 항 $1$이 $U$에 든다. 따라서 이 수열은 $p$로 수렴한다.

*$n$번째 항이 $n$인 수열.* $p \in \mathbb{N}$이라 하자. $U = \{1, p\}$는 $1$을 가지므로 열려 있고 $p$를 가지므로 $p$의 근방이다. 자연수 $M$이 주어지면 $n = M + p$로 둔다. [[order-properties-of-reals|실수의 순서의 성질]]의 (10)에 의해 자연수는 양수이므로 (2)의 (ii)에 의해 $M < n$이고 $p < n$이다. [[prime-number|소수]]의 (Z1)에 의해 $1 \le p$이므로 (1)의 (v)에 의해 $1 < n$이다. 따라서 (1)의 (i)에 의해 $n \ne 1$, $n \ne p$이어서 $n$번째 항 $n$은 $U$에 들지 않는다. 곧 어떤 $M$을 잡아도 $n \ge M$이면서 항이 $U$ 밖에 있는 번호 $n$이 있으므로 이 수열은 $p$로 수렴하지 않는다. [[limit-unique-in-hausdorff|하우스도르프 공간에서 극한의 유일성]]의 (3)에서 여유한 위상의 $\mathbb{N}$에서는 같은 수열이 모든 점으로 수렴했던 것과 대비된다.

항이 모두 $1$인 수열이 $1$과 $2$로 함께 수렴하므로, 하우스도르프 공간에서 극한의 유일성 항목의 (1)에 의해서도 $(\mathbb{N}, \mathcal{T})$는 하우스도르프 공간이 아니다.
:::

:::exercise[하우스도르프 공간으로 가는 연속인 단사]
$(X, \mathcal{T}_X)$, $(Y, \mathcal{T}_Y)$가 위상공간이고 $f : X \to Y$가 함수이다.

1. $f$가 연속인 단사이고 $Y$가 하우스도르프 공간이면 $X$도 하우스도르프 공간임을 보여라.
2. 1에서 $f$가 단사라는 가정을 빼면 결론이 깨지는 예를 들어라.
:::

:::solution
하우스도르프 공간은 [[hausdorff-space|T₁ 공간과 하우스도르프 공간]]의 것이고, 연속은 [[continuous-map|위상공간 사이의 연속함수]]의 것이다.

**1.** $x$, $x'$이 $X$의 서로 다른 점이라 하자. $f$가 [[injective-surjective-bijective|단사]]이므로 $f(x) \ne f(x')$이다. $Y$가 하우스도르프 공간이므로 $V \cap V' = \emptyset$인 $f(x)$의 근방 $V$와 $f(x')$의 근방 $V'$이 있다. $U = f^{-1}(V)$, $U' = f^{-1}(V')$로 두면 연속의 정의에 의해 둘 다 $X$에서 열려 있고, $f(x) \in V$, $f(x') \in V'$이므로 $x \in U$, $x' \in U'$이다. 곧 $U$와 $U'$은 각각 $x$와 $x'$의 [[neighborhood|근방]]이다. [[preimage-and-set-operations|역상과 집합 연산]]의 (1)의 (v)와 (7)에 의해
$$
U \cap U' = f^{-1}(V \cap V') = f^{-1}(\emptyset) = \emptyset
$$
이다. 따라서 $X$는 하우스도르프 공간이다.

**2.** $a \ne b$이고 $X = \{a, b\}$에 밀착위상을 주며, $Y = \mathbb{R}$(보통 위상)이고 $f$는 모든 점에서 값이 $0$인 함수라 하자. 연속함수 항목의 (2)에 의해 $f$는 연속이고, [[metric-space-is-hausdorff|거리공간은 하우스도르프 공간이다]]의 (3)의 (i)에 의해 $\mathbb{R}$은 하우스도르프 공간이다. 그러나 $T_1$ 공간과 하우스도르프 공간 항목의 (4)에 의해 $X$는 하우스도르프 공간이 아니다. 이 $f$는 $f(a) = f(b)$이므로 단사가 아니다.
:::

:::exercise[두 공간의 곱에서 성분별로 수렴을 보기]
$(X_1, \mathcal{T}_1)$, $(X_2, \mathcal{T}_2)$가 위상공간이고 $X_1 \times X_2$에는 곱위상을 준다. $(z_n)$이 $X_1 \times X_2$의 수열이고 $(p, q) \in X_1 \times X_2$이다.

1. $(z_n)$이 $(p, q)$로 수렴하는 것은 정확히 $(\pi_1(z_n))$이 $p$로 수렴하고 $(\pi_2(z_n))$이 $q$로 수렴할 때임을 보여라.
2. $X_1$, $X_2$가 하우스도르프 공간이고 $(z_n)$이 수렴하면 $\lim_{n \to \infty} z_n = \bigl(\lim_{n \to \infty} \pi_1(z_n), \lim_{n \to \infty} \pi_2(z_n)\bigr)$임을 보여라.
:::

:::solution
곱위상, 그 기저 $\mathcal{B}$, 사영 $\pi_1$, $\pi_2$는 [[product-topology|두 공간의 곱위상]]의 것이고, 수열과 수렴은 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 것이다. $(\pi_1(z_n))$은 [[continuity-preserves-convergence|연속함수는 수열의 수렴을 보존한다]]의 머리말의 함숫값의 수열, 곧 $n$번째 항이 $\pi_1(z_n)$인 $X_1$의 수열이다.

**1.** *앞에서 뒤로.* [[maps-into-a-product|사영과 곱으로 가는 함수]]의 (1)의 (i)에 의해 $\pi_1$, $\pi_2$는 연속이므로, 연속함수는 수열의 수렴을 보존한다는 항목의 (2)에 의해 $(\pi_1(z_n))$은 $\pi_1(p, q) = p$로, $(\pi_2(z_n))$은 $\pi_2(p, q) = q$로 수렴한다.

*뒤에서 앞으로.* 곱위상 항목의 (2)에 의해 $\mathcal{B} = \{U \times V : (U, V) \in \mathcal{T}_1 \times \mathcal{T}_2\}$는 위상 $\mathcal{T}_1 \otimes \mathcal{T}_2$의 기저이므로, 위상공간의 수열과 수렴 항목의 (2)에 의해 $(p, q)$를 원소로 갖는 $\mathcal{B}$의 모든 원소 $C$에 대하여 번호를 찾으면 된다. $C = U \times V$($U \in \mathcal{T}_1$, $V \in \mathcal{T}_2$)이고 $(p, q) \in C$이면 $p \in U$, $q \in V$이므로 $U$는 $p$의 근방, $V$는 $q$의 근방이다. 가정에 의해 $n \ge M_1$인 모든 $n$에서 $\pi_1(z_n) \in U$인 자연수 $M_1$과, $n \ge M_2$인 모든 $n$에서 $\pi_2(z_n) \in V$인 자연수 $M_2$가 있다.

$M = M_1 + M_2$로 두면 $M$은 자연수이다. $M_2$는 자연수이므로 양수이고([[order-properties-of-reals|실수의 순서의 성질]]의 (10)), 순서의 성질 (2)의 (ii)에 의해 $M_1 < M_1 + M_2$이다. 같은 이유로 $M_2 < M$이다. $n \ge M$이면 순서의 성질 (1)의 (v)에 의해 $n \ge M_1$이고 $n \ge M_2$이므로 $\pi_1(z_n) \in U$, $\pi_2(z_n) \in V$이고, $z_n = (\pi_1(z_n), \pi_2(z_n)) \in U \times V = C$이다. 따라서 $(z_n)$은 $(p, q)$로 수렴한다. (두 번호의 큰 쪽 대신 합을 쓴다.)

**2.** [[hausdorff-subspace-and-product|하우스도르프 공간의 부분공간과 곱]]의 (2)의 (i)에 의해 $X_1 \times X_2$는 하우스도르프 공간이므로 [[limit-unique-in-hausdorff|하우스도르프 공간에서 극한의 유일성]]의 (2)의 기호를 쓸 수 있다. $(z_n)$이 $(p, q) = \lim_{n \to \infty} z_n$으로 수렴하면 1에 의해 $(\pi_1(z_n))$은 $p$로, $(\pi_2(z_n))$은 $q$로 수렴하고, 같은 (2)에 의해 $p = \lim_{n \to \infty} \pi_1(z_n)$, $q = \lim_{n \to \infty} \pi_2(z_n)$이다. 이것이 보일 등식이다.
:::

:::exercise[두 연속함수의 값이 같은 점들의 집합]
$(X, \mathcal{T}_X)$가 위상공간, $(Y, \mathcal{T}_Y)$가 하우스도르프 공간이고 $f, g : X \to Y$가 연속이다.

1. $E = \{x \in X : f(x) = g(x)\}$가 $X$의 닫힌집합임을 보여라.
2. $D$가 $X$에서 조밀하고 모든 $x \in D$에서 $f(x) = g(x)$이면 $f = g$임을 보여라.
:::

:::solution
곱 $Y \times Y$에는 곱위상 $\mathcal{T}_Y \otimes \mathcal{T}_Y$([[product-topology|두 공간의 곱위상]])를 준다. 대각선 $\Delta_Y$는 [[hausdorff-subspace-and-product|하우스도르프 공간의 부분공간과 곱]]의 (3)의 것이다.

**1.** [[maps-into-a-product|사영과 곱으로 가는 함수]]의 (4)의 (i)에 의해 $h(x) = (f(x), g(x))$로 정한 함수 $h : X \to Y \times Y$는 연속이다. 대각선의 정의에 의해 $(f(x), g(x)) \in \Delta_Y$인 것은 정확히 $f(x) = g(x)$일 때이므로 $h^{-1}(\Delta_Y) = E$이다. $Y$가 하우스도르프 공간이므로 하우스도르프 공간의 부분공간과 곱 항목의 (3)에 의해 $\Delta_Y$는 닫혀 있고, [[continuity-criteria|연속의 판정]]의 (1)에 의해 $E = h^{-1}(\Delta_Y)$는 $X$의 닫힌집합이다.

**2.** 가정에 의해 $D \subseteq E$이다. 1에 의해 $E$는 닫힌집합이므로 [[interior-and-closure|내부와 폐포]]의 (2)에 의해 $\overline{D} \subseteq E$이고, $D$가 조밀하므로 $\overline{D} = X$이다([[dense-subset|조밀한 부분집합]]의 정의). 따라서 $X \subseteq E$, 곧 모든 $x \in X$에서 $f(x) = g(x)$이다. $f$와 $g$는 정의역이 같고 모든 점에서 값이 같으므로 [[function|함수]]로서 같다.
:::

:::exercise[되풀이해 얻은 수열의 극한과 고정점]
$(X, \mathcal{T})$가 위상공간이고 $f : X \to X$가 연속이며 $a \in X$이다. $x_1 = a$, $x_{n+1} = f(x_n)$으로 $X$의 수열 $(x_n)$을 정한다.

1. 이 수열이 재귀 정리로 하나로 정해짐을 확인하라.
2. $(X, \mathcal{T})$가 하우스도르프 공간이고 $(x_n)$이 $p$로 수렴하면 $f(p) = p$임을 보여라.
3. 2에서 하우스도르프라는 가정을 빼면 결론이 깨지는 예를 들어라.
:::

:::solution
수열, 수렴, $K$-꼬리는 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 것이다.

**1.** 자연수 $n$과 $t \in X$마다 $f(t) \in X$가 정해져 있으므로, [[recursion-theorem|재귀 정리]]의 (1)에 의해 $g(n, t) = f(t)$로 정한 $g$는 $\mathbb{N} \times X$에서 $X$로의 함수이다. 재귀 정리에 의해 $x(1) = a$, $x(n+1) = g(n, x(n)) = f(x(n))$인 함수 $x : \mathbb{N} \to X$가 정확히 하나 있고, 이것이 $X$의 수열 $(x_n)$이다.

**2.** $(y_n)$을 $(x_n)$의 $1$-꼬리, 곧 $y_n = x_{n+1}$인 수열이라 하자. 위상공간의 수열과 수렴 항목의 (6)에 의해 $(y_n)$은 $p$로 수렴한다. 한편 [[continuity-preserves-convergence|연속함수는 수열의 수렴을 보존한다]]의 함숫값의 수열 $(f(x_n))$은 $n$번째 항이 $f(x_n) = x_{n+1} = y_n$이므로, 수열의 같음의 정의에 의해 $(y_n)$과 같은 수열이다. 같은 항목의 (2)에 의해 $(f(x_n))$은 $f(p)$로 수렴한다. 곧 $(y_n)$은 $p$로도 $f(p)$로도 수렴하므로, [[limit-unique-in-hausdorff|하우스도르프 공간에서 극한의 유일성]]의 (1)에 의해 $f(p) = p$이다.

**3.** $a \ne b$이고 $X = \{a, b\}$에 밀착위상을 주며, $f$는 모든 점을 $a$로 보내는 함수라 하자. [[continuous-map|위상공간 사이의 연속함수]]의 (2)에 의해 $f$는 연속이다. $x_1 = a$로 시작하면 모든 $n$에서 $x_{n+1} = f(x_n) = a$이므로 모든 항이 $a$이다. 위상공간의 수열과 수렴 항목의 (5)에 의해 이 수열은 $b$로 수렴하지만 $f(b) = a \ne b$이다. [[hausdorff-space|T₁ 공간과 하우스도르프 공간]]의 (4)에 의해 이 $X$는 하우스도르프 공간이 아니다.
:::

:::exercise[여유한 위상에서 값이 같은 점들의 집합]
$\mathbb{N}$에 여유한 위상 $\mathcal{T}_{\mathrm{cof}}$를 준다(정의역과 공역 모두). $g(1) = 2$이고 $n \ne 1$이면 $g(n) = n$으로 정한 함수 $g : \mathbb{N} \to \mathbb{N}$를 생각한다.

1. $(\mathbb{N}, \mathcal{T}_{\mathrm{cof}})$의 닫힌집합이 정확히 $\mathbb{N}$과 $\mathbb{N}$의 유한 부분집합임을 보여라.
2. 항등함수 $i_{\mathbb{N}}$과 $g$가 연속임을 보여라.
3. $E = \{n \in \mathbb{N} : i_{\mathbb{N}}(n) = g(n)\}$이 닫힌집합이 아님을 보여라. 문제 4의 1에서 공역이 하우스도르프라는 가정을 $T_1$으로 바꿀 수 없음을 설명하라.
:::

:::solution
여유한 위상은 [[hausdorff-space|T₁ 공간과 하우스도르프 공간]]의 (5)의 것이고, 유한집합은 [[finite-set|유한집합]]의 것이다. $g$는 각 $n$마다 값이 하나로 정해지므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 함수이다.

**1.** $F \subseteq \mathbb{N}$이라 하자. [[closed-set|닫힌집합]]의 정의에 의해 $F$가 닫혀 있는 것은 정확히 $\mathbb{N} - F \in \mathcal{T}_{\mathrm{cof}}$일 때, 곧 $\mathbb{N} - F = \emptyset$이거나 $\mathbb{N} - (\mathbb{N} - F)$가 유한집합일 때이다. 닫힌집합 항목의 (5)에 의해 $\mathbb{N} - (\mathbb{N} - F) = F$이고, $F \subseteq \mathbb{N}$이므로 $\mathbb{N} - F = \emptyset$인 것은 정확히 $F = \mathbb{N}$일 때이다. 따라서 $F$가 닫혀 있는 것은 정확히 $F = \mathbb{N}$이거나 $F$가 유한집합일 때이다.

**2.** [[continuous-map|위상공간 사이의 연속함수]]의 (1)에 의해 $i_{\mathbb{N}}$은 연속이다. $g$는 [[continuity-criteria|연속의 판정]]의 (1)로 본다. 1에 의해 닫힌집합 $F$는 $\mathbb{N}$이거나 유한집합이다. [[preimage-and-set-operations|역상과 집합 연산]]의 (7)에 의해 $g^{-1}(\mathbb{N}) = \mathbb{N}$은 닫혀 있다.

$F$가 유한집합이라 하자. $n \in g^{-1}(F)$이면 $n = 1$이거나, $n \ne 1$이어서 $n = g(n) \in F$이다. 곧 $g^{-1}(F) \subseteq F \cup \{1\}$이다. $1 \in F$이면 $F \cup \{1\} = F$는 유한집합이고, $1 \notin F$이면 $F$가 원소를 $k$개 가질 때 [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (a)에 의해 $F \cup \{1\}$은 원소를 $k + 1$개 갖는다. 어느 쪽이든 $F \cup \{1\}$은 유한집합이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $g^{-1}(F)$는 유한집합이고, 1에 의해 닫혀 있다. 따라서 $g$는 연속이다.

**3.** $g(1) = 2 \ne 1$이므로 $1 \notin E$이고, $n \ne 1$이면 $g(n) = n$이므로 $n \in E$이다. 곧 $E = \mathbb{N} - \{1\}$이다. $1 \notin E$이므로 $E \ne \mathbb{N}$이다. $E$가 원소를 $k$개 갖는 유한집합이라면 원소 하나를 더하거나 빼기 항목의 (a)에 의해 $E \cup \{1\} = \mathbb{N}$이 원소를 $k + 1$개 가져 유한집합이 되는데, 이것은 [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (1)과 어긋난다. 따라서 $E$는 유한집합도 $\mathbb{N}$도 아니어서 1에 의해 닫혀 있지 않다.

$T_1$ 공간과 하우스도르프 공간 항목의 (5)에 의해 $(\mathbb{N}, \mathcal{T}_{\mathrm{cof}})$는 $T_1$ 공간이지만 하우스도르프 공간은 아니다. 여기서 두 연속함수 $i_{\mathbb{N}}$, $g$의 값이 같은 점들의 집합이 닫혀 있지 않으므로, 문제 4의 1은 공역이 $T_1$ 공간이라는 가정만으로는 성립하지 않을 수 있다.
:::
