---
written_by: Claude
status: reviewed
sources:
  - ref: judson-abstract-algebra
    loc: "13.4절 Exercises, 연습문제 19 (p.166) — 문제 '가해열에서 처음으로 커지는 자리'와 같은 주제(원소가 둘 이상인 가해군에는 {e} 가 아닌 아벨 정규부분군이 있다. 이 문제는 G 에서 정규라는 것 없이 아벨 부분군을 찾는다)"
  - ref: judson-abstract-algebra
    loc: "13.4절 Exercises, 연습문제 12, 14 (p.166) — 문제 '몫군만 가해군인 S₅'와 같은 주제(정규부분군과 몫군이 가해군이면 군이 가해군이다, 가해군의 부분군은 가해군이다). 이 문제는 그 가정에서 정규부분군 쪽이 빠지면 결론이 성립하지 않는 예를 든다"
added: 2026-11-27
---

:::exercise[S₄에서 교환자 두 개 계산하기]
$S_4$, 항등치환 $i$, $C$, $D$, $V = \{i\} \cup D$는 [[alternating-group|교대군]]의 (5), (6)의 것이다.

1. $(1\ 2\ 3)$과 $(1\ 2\ 4)$의 교환자를 구하고, 그것이 $V$의 원소임을 보여라.
2. $(1\ 2\ 3\ 4)$와 $(1\ 2)$의 교환자를 구하고, 그것이 $A_4$의 원소이지만 $V$의 원소가 아님을 보여라.
3. $N$이 $S_4$의 정규부분군이고 몫군 $S_4/N$이 아벨군이면 $(1\ 3\ 2) \in N$이고 $(1\ 2)(3\ 4) \in N$임을 보여라.
:::

:::solution
[[cycle-permutation|순환치환]]의 (1)과 (3)에 의해 $(1\ 2\ 3)^{-1} = (3\ 2\ 1) = (1\ 3\ 2)$, $(1\ 2\ 4)^{-1} = (1\ 4\ 2)$, $(1\ 2\ 3\ 4)^{-1} = (4\ 3\ 2\ 1) = (1\ 4\ 3\ 2)$이고, 그 (5)에 의해 $(1\ 2)^{-1} = (1\ 2)$이다. 네 치환의 곱의 값은 [[finite-product-in-a-group|군의 유한 곱]]의 (10)에 의해 오른쪽 인수부터 차례로 적용해 구한다.

1. 교환자는 $c = (1\ 2\ 3)(1\ 2\ 4)(1\ 3\ 2)(1\ 4\ 2)$이다. 각 점을 오른쪽부터 따라가면
   - $1 \to 4 \to 4 \to 1 \to 2$,
   - $2 \to 1 \to 3 \to 3 \to 1$,
   - $3 \to 3 \to 2 \to 4 \to 4$,
   - $4 \to 2 \to 1 \to 2 \to 3$

   이므로 $c$는 $1$과 $2$, $3$과 $4$를 맞바꾸는 치환 $(1\ 2)(3\ 4)$이다(두 치환은 모든 점에서 값이 같으므로 같은 함수이다). 이것은 $D$의 원소이므로 $V$의 원소이다.

2. 교환자는 $c' = (1\ 2\ 3\ 4)(1\ 2)(1\ 4\ 3\ 2)(1\ 2)$이다. 각 점을 오른쪽부터 따라가면
   - $1 \to 2 \to 1 \to 2 \to 3$,
   - $2 \to 1 \to 4 \to 4 \to 1$,
   - $3 \to 3 \to 2 \to 1 \to 2$,
   - $4 \to 4 \to 3 \to 3 \to 4$

   이므로 $c'$은 $1$을 $3$으로, $3$을 $2$로, $2$를 $1$로 보내고 $4$를 고정하는 치환, 곧 $(1\ 3\ 2)$이다. 이것은 $C$의 원소이므로 교대군의 (5)에 의해 $A_4$의 원소이다. 같은 (5)에 의해 그 열두 치환은 서로 다르므로 $C$와 $\{i\} \cup D$는 겹치지 않고, $(1\ 3\ 2) \notin V$이다.

3. [[commutator|교환자]]의 (5)에 의해 $S_4/N$이 아벨군이면 $S_4$의 모든 교환자가 $N$에 속한다. 1과 2의 교환자는 $S_4$의 교환자이므로 $(1\ 2)(3\ 4) \in N$이고 $(1\ 3\ 2) \in N$이다.
:::

:::exercise[가해열에서 처음으로 커지는 자리]
$G$가 군이고 $e$가 그 항등원이며 $G \ne \{e\}$라 하자. $H_0, \dots, H_m$이 $G$의 가해열([[solvable-group|가해군]]의 것)이라 하자.

1. $H_i \ne \{e\}$인 $i \in \{0, 1, \dots, m\}$이 있고, 그런 $i$ 가운데 가장 작은 것 $k$가 있으며 $k \ge 1$임을 보여라.
2. 1의 $k$에 대하여 $H_k$는 $\{e\}$가 아닌 아벨군임을 보여라. 곧 원소가 둘 이상인 가해군에는 $\{e\}$가 아닌 아벨 부분군이 있다.
:::

:::solution
1. 가해군의 정의의 (i)에 의해 $H_0 = \{e\}$이고 $H_m = G \ne \{e\}$이다. 따라서 $I = \{i \in \{0, 1, \dots, m\} : H_i \ne \{e\}\}$는 $m$을 원소로 갖는 공집합이 아닌 집합이고, $0$ 이상인 정수로 이루어져 $0$이 하계이므로 [[well-ordering-principle|정렬 원리]]의 (가)에 의해 가장 작은 원소 $k$가 있다. $H_0 = \{e\}$이므로 $0 \notin I$이고 $k \ge 1$이다.

2. $k$가 $I$의 가장 작은 원소이고 $0 \le k - 1 < k$이므로 $k - 1 \notin I$, 곧 $H_{k-1} = \{e\}$이다. 가해군의 (1)을 $i = k - 1$에 쓰면 모든 $a, b \in H_k$에서 $aba^{-1}b^{-1} \in H_{k-1} = \{e\}$이고, [[commutator|교환자]]의 (2)를 군 $H_k$에 쓰면(교환자의 (3)에 의해 $H_k$에서 만든 교환자는 $G$에서 만든 것과 같다) $ab = ba$이다. 따라서 $H_k$는 아벨군이고, $k \in I$이므로 $H_k \ne \{e\}$이다. $H_k$는 $G$의 부분군이므로(부분군의 열의 정의) 원소가 둘 이상인 가해군 $G$에는 $\{e\}$가 아닌 아벨 부분군이 있다.
:::

:::exercise[아벨군으로 가는 준동형과 길이 3인 순환치환]
$X$가 [[finite-set|유한집합]]이고 $|X| \ge 5$이며, $G'$이 아벨군이고 $e'$이 그 항등원이며, $\varphi : S_X \to G'$이 준동형이라 하자. $S_X$의 길이 $3$인 순환치환 $\sigma$마다 $\varphi(\sigma) = e'$임을 보여라. 특히 $\varphi$는 단사가 아님을 보여라.
:::

:::solution
*다섯 원소.* $\sigma = (a_1\ a_2\ a_3)$이라 하자. [[cycle-permutation|순환치환]]의 정의에 의해 $a_1, a_2, a_3$은 $X$의 서로 다른 원소이고, [[disjoint-union-count|서로소인 합집합의 원소의 개수]]의 (2)에 의해 $X - \{a_1, a_2, a_3\}$은 원소를 $|X| - 3 \ge 2$개 갖는다. 따라서 그 집합의 서로 다른 두 원소 $a_4$, $a_5$가 있고, $a_1, \dots, a_5$는 $X$의 서로 다른 원소이다.

*교환자로 쓰기.* $x = (a_1\ a_2\ a_4)$, $y = (a_1\ a_3\ a_5)$라 하면 [[symmetric-group-is-not-solvable|대칭군은 가해군이 아니다]]의 (1)에 의해 $\sigma = xyx^{-1}y^{-1}$이다. [[commutator|교환자]]의 (4)에 의해 $\varphi(\sigma) = \varphi(x)\varphi(y)\varphi(x)^{-1}\varphi(y)^{-1}$이고, 이것은 $G'$에서 만든 $\varphi(x)$와 $\varphi(y)$의 교환자이다. $G'$이 아벨군이므로 교환자의 (2)에 의해 이 값은 $e'$이다.

*단사가 아니다.* $|X| \ge 5$이므로 위처럼 $X$의 서로 다른 세 원소 $a_1, a_2, a_3$이 있고 $\sigma = (a_1\ a_2\ a_3)$은 길이 $3$인 순환치환이다. $\sigma(a_1) = a_2 \ne a_1$이므로 $\sigma \ne i_X$인데, [[group-homomorphism|군 준동형]]의 (1)에 의해 $\varphi(i_X) = e' = \varphi(\sigma)$이다. 따라서 $\varphi$는 단사가 아니다.
:::

:::exercise[법 p의 정수 위의 일차함수의 군]
$p$가 [[prime-number|소수]]이고 $X = \mathbb{Z}_p$를 집합으로 본다. [[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3)에 의해 $\mathbb{Z}_p$는 체이다. $a \in \mathbb{Z}_p^{\times}$, $b \in \mathbb{Z}_p$에 대하여 $\lambda_{a,b} : X \to X$를 모든 $x \in X$에서 $\lambda_{a,b}(x) = ax + b$인 함수라 하고,
$$
\begin{aligned}
H &= \{\lambda_{a,b} : a \in \mathbb{Z}_p^{\times},\ b \in \mathbb{Z}_p\}, \\
N &= \{\lambda_{1,b} : b \in \mathbb{Z}_p\}
\end{aligned}
$$
로 두자($1 = [1]$).

1. $\lambda_{a,b} \in S_X$이고 $\lambda_{a,b}\lambda_{c,d} = \lambda_{ac,\ ad + b}$임을 보이고, $H$가 $S_X$의 부분군임을 보여라.
2. $\mu(\lambda) = \lambda(1) - \lambda(0)$으로 정한 $\mu : H \to \mathbb{Z}_p^{\times}$가 준동형이고 그 핵이 $N$임을 보여라. 따라서 $N$은 군 $H$의 정규부분군이다.
3. $N$이 아벨군이고 $H$의 모든 교환자가 $N$에 속함을 보이고, $\{i_X\}, N, H$가 $H$의 가해열임을 보여라. 곧 $H$는 가해군이다.
4. $p \ge 5$이면 $H$는 $S_X$의 길이 $3$인 순환치환을 모두 포함하지는 않음을 보여라.
:::

:::solution
[[field|가역원과 체]]의 (1)에 의해 $\mathbb{Z}_p^{\times} = \mathbb{Z}_p - \{0\}$은 곱셈으로 군이고, 곱셈이 교환법칙을 만족하므로 아벨군이다.

1. *전단사.* $\lambda_{a,b}(x) = \lambda_{a,b}(y)$이면 $ax = ay$이고 $a \ne 0$이므로 [[integral-domain|정역]]의 (1)의 소거법칙으로 $x = y$이다. $y \in X$이면 $x = a^{-1}(y - b)$에서 $\lambda_{a,b}(x) = y$이다. 따라서 $\lambda_{a,b}$는 전단사이고 $\lambda_{a,b} \in S_X$이다.

   *곱.* [[symmetric-group|대칭군]]의 곱은 합성이므로 $x \in X$에서
   $$
   \begin{aligned}
   (\lambda_{a,b}\lambda_{c,d})(x) &= a(cx + d) + b \\
   &= (ac)x + (ad + b)
   \end{aligned}
   $$
   이고, 체는 정역이므로 $ac \ne 0$, 곧 $ac \in \mathbb{Z}_p^{\times}$이다. 따라서 $\lambda_{a,b}\lambda_{c,d} = \lambda_{ac,\ ad + b} \in H$이다.

   *부분군.* $\lambda_{1,0} = i_X$이므로 $i_X \in H$이다. 곱의 식으로 $\lambda_{a,b}\lambda_{a^{-1},\,-a^{-1}b} = \lambda_{1,0}$이고 $\lambda_{a^{-1},\,-a^{-1}b}\lambda_{a,b} = \lambda_{1,0}$이므로, 군의 역원은 하나뿐이라는 것([[group|군]])에서 $\lambda_{a,b}^{-1} = \lambda_{a^{-1},\,-a^{-1}b} \in H$이다. [[subgroup-criteria|부분군의 판정]]의 (1)에 의해 $H$는 $S_X$의 부분군이다.

2. *잘 정해진다.* $\lambda = \lambda_{a,b}$이면 $\lambda(1) - \lambda(0) = (a + b) - b = a \in \mathbb{Z}_p^{\times}$이므로 $\mu$는 $H$에서 $\mathbb{Z}_p^{\times}$로의 함수이고 $\mu(\lambda_{a,b}) = a$이다.

   *준동형.* 1의 곱의 식에 의해 $\mu(\lambda_{a,b}\lambda_{c,d}) = ac = \mu(\lambda_{a,b})\mu(\lambda_{c,d})$이다.

   *핵.* $\mu(\lambda_{a,b}) = 1$인 것은 정확히 $a = 1$일 때이므로 $\operatorname{Ker} \mu = N$이다. [[normal-subgroup|정규부분군]]의 (4)에 의해 $N$은 군 $H$의 정규부분군이다.

3. *$N$은 아벨군이다.* 곱의 식에 의해 $\lambda_{1,b}\lambda_{1,d} = \lambda_{1,\ d + b} = \lambda_{1,\ b + d} = \lambda_{1,d}\lambda_{1,b}$이다.

   *교환자.* $x, y \in H$이면 [[commutator|교환자]]의 (4)에 의해 $\mu(xyx^{-1}y^{-1}) = \mu(x)\mu(y)\mu(x)^{-1}\mu(y)^{-1}$이고, $\mathbb{Z}_p^{\times}$가 아벨군이므로 교환자의 (2)에 의해 이것은 $1$이다. 곧 $xyx^{-1}y^{-1} \in \operatorname{Ker} \mu = N$이다.

   *가해열.* $H_0 = \{i_X\}$, $H_1 = N$, $H_2 = H$라 하자. [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (1)에 의해 $N$은 $H$의 부분군이고, 정규부분군의 (2)에 의해 $\{i_X\}$는 $N$의 정규부분군이며, 2에 의해 $N$은 $H$의 정규부분군이다. 따라서 이 열은 $H$의 부분정규열이다([[solvable-group|가해군]]의 정의). $a, b \in N$이면 $N$이 아벨군이므로 교환자의 (2)에 의해 $aba^{-1}b^{-1} = i_X \in H_0$이고, $a, b \in H$이면 위에서 $aba^{-1}b^{-1} \in N = H_1$이다. 가해군의 (1)에 의해 이 열은 가해열이고, $H$는 가해군이다.

4. $p \ge 5$이면 $X$는 원소가 $p \ge 5$개인 유한집합이다([[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3)). $H$가 $S_X$의 길이 $3$인 순환치환을 모두 포함하면 [[symmetric-group-is-not-solvable|대칭군은 가해군이 아니다]]의 (3)에 의해 $H$는 가해군이 아니게 되어 3과 어긋난다.
:::

:::exercise[몫군만 가해군인 S₅]
$S_5$와 $A_5$는 [[symmetric-group|대칭군]]과 [[alternating-group|교대군]]의 것이다.

1. $A_5$는 $S_5$의 정규부분군이고 몫군 $S_5/A_5$는 아벨군임을 보여라.
2. $S_5/A_5$는 가해군이지만 $S_5$는 가해군이 아님을 보여라. [[solvable-subgroups-and-images|가해군의 부분군과 준동형상]]의 (5)의 가정 가운데 무엇이 성립하지 않는가?
:::

:::solution
1. 교대군의 (1)에 의해 $A_5$는 $S_5$의 정규부분군이다. $x, y \in S_5$이면 [[sign-of-a-permutation|치환의 부호]]의 (1)과 (3)에 의해
   $$
   \begin{aligned}
   &\operatorname{sgn}(xyx^{-1}y^{-1}) \\
   &\quad = \operatorname{sgn} x \cdot \operatorname{sgn} y \cdot \operatorname{sgn} x \cdot \operatorname{sgn} y
   \end{aligned}
   $$
   이고, $\operatorname{sgn} x$와 $\operatorname{sgn} y$는 $1$이거나 $-1$이므로 오른쪽은 $(\operatorname{sgn} x)^2 (\operatorname{sgn} y)^2 = 1$이다. 치환의 부호의 (2)에 의해 $xyx^{-1}y^{-1}$은 짝치환이고 $A_5$에 속한다. [[commutator|교환자]]의 (5)에 의해 $S_5/A_5$는 아벨군이다.

2. [[solvable-group-examples|가해군의 예]]의 (1)에 의해 아벨군 $S_5/A_5$는 가해군이다. [[symmetric-group-is-not-solvable|대칭군은 가해군이 아니다]]의 (3)에 의해 $S_5$와 $A_5$는 가해군이 아니다. 가해군의 부분군과 준동형상의 (5)는 정규부분군 $N$과 몫군 $G/N$이 둘 다 가해군일 때 $G$가 가해군이라고 하는데, $G = S_5$, $N = A_5$에서는 몫군은 가해군이지만 정규부분군 $A_5$가 가해군이 아니다. 몫군이 가해군이라는 것만으로는 $G$가 가해군이 되지 않는다.
:::
