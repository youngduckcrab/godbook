---
written_by: Claude
status: reviewed
sources:
  - ref: judson-abstract-algebra
    loc: "14.5절 Exercises, 연습문제 2, 3 (p.178) — 문제 '두 원소 부분집합 위의 S₄의 작용'과 같은 종류(치환군의 작용에서 궤도와 안정자를 구하고 |G| = |O_x| · |G_x| 를 확인하기. 출처는 S₃ 과 S₆ 의 부분군이 점에 작용하는 경우를 준다)"
  - ref: judson-abstract-algebra
    loc: "15.4절 Exercises, 연습문제 23 (p.188) — 문제 '부분군의 켤레의 개수와 지표'와 같은 주제(부분군의 켤레의 개수가 [G : N(H)] 이다. 이 문제는 그것이 [G : H] 를 나눈다는 것을 묻는다)"
added: 2026-11-26
---

:::exercise[두 원소 부분집합 위의 S₄의 작용]
$X = \{1, 2, 3, 4\}$이고 $\mathcal{P}_2$를 원소가 $2$개인 $X$의 부분집합 전체의 집합이라 하자. $\sigma \in S_4$와 $A \in \mathcal{P}_2$에 대하여 $\sigma \cdot A = \sigma(A)$(상)로 정한다.

1. 이것이 $S_4$의 $\mathcal{P}_2$ 위의 작용임을 보여라.
2. $\mathcal{P}_2$의 원소가 $6$개이고 $\{1, 2\}$의 궤도가 $\mathcal{P}_2$ 전체임을 보여라.
3. $\{1, 2\}$의 안정자를 구하라.
:::

:::solution
1. *값이 $\mathcal{P}_2$에 있다.* $A = \{a, b\}$이고 $a \ne b$이면 $\sigma(A) = \{\sigma(a), \sigma(b)\}$이고([[image-and-preimage|상과 역상]]의 (1)), $\sigma$는 단사이므로 $\sigma(a) \ne \sigma(b)$이다. 따라서 $\sigma(A) \in \mathcal{P}_2$이고, 각 $(\sigma, A)$에 $\sigma(A)$를 대응시키는 것은 함수 $S_4 \times \mathcal{P}_2 \to \mathcal{P}_2$이다.

   *작용의 조건.* $i_X(A) = A$이므로 [[group-action|군의 작용]]의 조건 (i)이 성립한다. [[symmetric-group|대칭군]]의 (1)에 의해 $S_4$의 곱 $\sigma\tau$는 합성 $\sigma \circ \tau$이고, [[preimage-and-set-operations|상과 역상의 성질]]의 (4)에 의해 $(\sigma \circ \tau)(A) = \sigma(\tau(A))$이므로 $(\sigma\tau) \cdot A = \sigma \cdot (\tau \cdot A)$, 곧 조건 (ii)가 성립한다.

2. *원소의 개수.* $A \in \mathcal{P}_2$이면 $A = \{a, b\}$, $a \ne b$이고, [[well-ordering-principle|정렬 원리]]의 (Z5)에 의해 $a < b$로 적을 수 있다. 그런 쌍 $(a, b)$는 $(1, 2)$, $(1, 3)$, $(1, 4)$, $(2, 3)$, $(2, 4)$, $(3, 4)$의 여섯이므로 $\mathcal{P}_2$는 $\{1, 2\}$, $\{1, 3\}$, $\{1, 4\}$, $\{2, 3\}$, $\{2, 4\}$, $\{3, 4\}$로 이루어지고, 이 여섯 집합은 원소가 서로 달라 서로 다르다. 따라서 $|\mathcal{P}_2| = 6$이다.

   *궤도.* [[cycle-permutation|순환치환]]의 표기로
   $$
   \begin{aligned}
   i_X(\{1, 2\}) &= \{1, 2\}, \\
   (2\ 3)(\{1, 2\}) &= \{1, 3\}, \\
   (2\ 4)(\{1, 2\}) &= \{1, 4\}, \\
   (1\ 3)(\{1, 2\}) &= \{3, 2\}, \\
   (1\ 4)(\{1, 2\}) &= \{4, 2\}, \\
   (1\ 3)(2\ 4)(\{1, 2\}) &= \{3, 4\}
   \end{aligned}
   $$
   이다. 따라서 여섯 집합이 모두 $S_4 \cdot \{1, 2\}$에 들어 있고, 궤도는 $\mathcal{P}_2$의 부분집합이므로 $S_4 \cdot \{1, 2\} = \mathcal{P}_2$이다. [[orbit-of-an-action|궤도]]의 (6)에 의해 이 작용은 추이적이다.

3. [[stabilizer-and-fixed-points|안정자와 고정점]]의 정의에 의해 $\{1, 2\}$의 안정자 $G_{\{1, 2\}}$는 $\sigma(\{1, 2\}) = \{1, 2\}$인 $\sigma$ 전체이다. [[order-of-symmetric-group|대칭군의 원소의 개수]]의 (6)에 의해 $|S_4| = 24$이므로 [[orbit-stabilizer-theorem|궤도–안정자 정리]]의 (3)과 2에 의해 $24 = 6 \cdot |G_{\{1, 2\}}|$이고, [[integer-cancellation|정수 곱셈의 소거 법칙]]의 (2)에 의해 $|G_{\{1, 2\}}| = 4$이다.

   $i_X$, $(1\ 2)$, $(3\ 4)$, $(1\ 2)(3\ 4)$는 모두 $\{1, 2\}$를 $\{1, 2\}$로 보내고, $1$과 $3$에서의 값의 쌍이 각각 $(1, 3)$, $(2, 3)$, $(1, 4)$, $(2, 4)$로 달라 서로 다르다. 곧 이 넷은 원소가 $4$개인 $G_{\{1, 2\}}$의 부분집합이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해
   $$
   \begin{aligned}
   G_{\{1, 2\}} = \{&i_X, (1\ 2), \\
   &(3\ 4), (1\ 2)(3\ 4)\}
   \end{aligned}
   $$
   이다.
:::

:::exercise[네 점의 세 짝짓기 위의 S₄의 작용]
$X = \{1, 2, 3, 4\}$라 하자. 원소가 $2$개인 $X$의 부분집합 두 개로 이루어진 $X$의 분할을 $X$의 **짝짓기**라 부르자.
$$
\begin{aligned}
\pi_1 &= \{\{1, 2\}, \{3, 4\}\}, \\
\pi_2 &= \{\{1, 3\}, \{2, 4\}\}, \\
\pi_3 &= \{\{1, 4\}, \{2, 3\}\}
\end{aligned}
$$
로 두고 $\mathcal{Q} = \{\pi_1, \pi_2, \pi_3\}$라 하자. $\sigma \in S_4$와 짝짓기 $\pi$에 대하여 $\sigma \cdot \pi = \{\sigma(B) : B \in \pi\}$로 정한다.

1. $X$의 짝짓기는 정확히 $\pi_1$, $\pi_2$, $\pi_3$의 셋이고, 위의 규칙이 $S_4$의 $\mathcal{Q}$ 위의 작용임을 보여라.
2. $\pi_1$의 궤도와 안정자를 구하라.
3. 이 작용에서 모든 점을 고정하는 원소 전체가 [[alternating-group|교대군]]의 (6)의 $V = \{i\} \cup D$임을 보이고, 작용이 정하는 준동형 $\theta : S_4 \to S_{\mathcal{Q}}$가 전사임을 보여라.
:::

:::solution
1. *짝짓기는 셋.* $\pi$가 짝짓기이면 [[partition|분할]]의 조건 2에 의해 $1$을 포함하는 조각 $B$가 있고, $B = \{1, b\}$, $b \ne 1$이다. 다른 조각 $B'$은 조건 3에 의해 $B$와 공통 원소가 없으므로 $B' \subseteq X - B$이고, [[disjoint-union-count|서로소인 합집합의 원소의 개수]]의 (2)에 의해 $|X - B| = 4 - 2 = 2 = |B'|$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $B' = X - B$이다. 곧 $\pi$는 $b$로 정해지고, $b = 2, 3, 4$이면 차례로 $\pi_1$, $\pi_2$, $\pi_3$이다. 세 짝짓기는 $1$을 포함하는 조각이 달라 서로 다르다. 특히 짝짓기는 그 조각 하나로 정해진다.

   *값이 $\mathcal{Q}$에 있다.* $\pi = \{B, B'\}$이면 $\sigma \cdot \pi = \{\sigma(B), \sigma(B')\}$이다. $\sigma$가 단사이므로 $\sigma(B)$와 $\sigma(B')$은 원소가 $2$개이고 공통 원소가 없으며, [[preimage-and-set-operations|상과 역상의 성질]]의 (1)의 (ii)와 $\sigma$의 전사에 의해 $\sigma(B) \cup \sigma(B') = \sigma(X) = X$이다. 따라서 $\sigma \cdot \pi$는 짝짓기이고 $\mathcal{Q}$에 있다.

   *작용의 조건.* $i_X \cdot \pi = \pi$이고, 상과 역상의 성질의 (4)에 의해 $(\sigma\tau)(B) = \sigma(\tau(B))$이므로 $(\sigma\tau) \cdot \pi = \sigma \cdot (\tau \cdot \pi)$이다. 따라서 [[group-action|군의 작용]]의 조건 (i), (ii)가 성립한다.

2. *궤도.* [[cycle-permutation|순환치환]]의 표기로 $(2\ 3) \cdot \pi_1 = \{\{1, 3\}, \{2, 4\}\} = \pi_2$이고 $(2\ 4) \cdot \pi_1 = \{\{1, 4\}, \{3, 2\}\} = \pi_3$이므로 $S_4 \cdot \pi_1 = \mathcal{Q}$이고, 원소가 $3$개이다.

   *안정자.* [[order-of-symmetric-group|대칭군의 원소의 개수]]의 (6)에 의해 $|S_4| = 24$이고, [[orbit-stabilizer-theorem|궤도–안정자 정리]]의 (3)에 의해 $24 = 3 \cdot |G_{\pi_1}|$이므로 [[integer-cancellation|정수 곱셈의 소거 법칙]]의 (2)에 의해 $|G_{\pi_1}| = 8$이다. 다음 여덟 치환이 $\{1, 2\}$와 $\{3, 4\}$를 보내는 곳은 다음과 같다.

   | $\sigma$ | $\sigma(\{1, 2\})$, $\sigma(\{3, 4\})$ |
   |---|---|
   | $i_X$ | $\{1, 2\}$, $\{3, 4\}$ |
   | $(1\ 2)$ | $\{2, 1\}$, $\{3, 4\}$ |
   | $(3\ 4)$ | $\{1, 2\}$, $\{4, 3\}$ |
   | $(1\ 2)(3\ 4)$ | $\{2, 1\}$, $\{4, 3\}$ |
   | $(1\ 3)(2\ 4)$ | $\{3, 4\}$, $\{1, 2\}$ |
   | $(1\ 4)(2\ 3)$ | $\{4, 3\}$, $\{2, 1\}$ |
   | $(1\ 3\ 2\ 4)$ | $\{3, 4\}$, $\{2, 1\}$ |
   | $(1\ 4\ 2\ 3)$ | $\{4, 3\}$, $\{1, 2\}$ |

   모두 $\pi_1$을 $\pi_1$로 보낸다. $1$과 $3$에서의 값의 쌍 $(\sigma(1), \sigma(3))$은 차례로 $(1, 3)$, $(2, 3)$, $(1, 4)$, $(2, 4)$, $(3, 1)$, $(4, 2)$, $(3, 2)$, $(4, 1)$로 모두 다르므로 여덟 치환은 서로 다르다. 유한집합의 부분집합의 (2)에 의해 $G_{\pi_1}$은 정확히 이 여덟 치환이다.

3. *핵.* 모든 점을 고정하는 원소 전체를 $K$라 하면 $K \subseteq G_{\pi_1}$이다. [[alternating-group|교대군]]의 (5)의 $D$의 세 원소는 $\pi_2$와 $\pi_3$도 고정한다. $(1\ 2)(3\ 4)$는 $\{1, 3\}$을 $\{2, 4\}$로, $\{1, 4\}$를 $\{2, 3\}$으로 보내고, $(1\ 3)(2\ 4)$는 $\{1, 3\}$을 $\{3, 1\}$로, $\{1, 4\}$를 $\{3, 2\}$로, $(1\ 4)(2\ 3)$은 $\{1, 3\}$을 $\{4, 2\}$로, $\{1, 4\}$를 $\{4, 1\}$로 보내며, 1에서 짝짓기는 조각 하나로 정해지기 때문이다. 따라서 $V \subseteq K$이다. 위 표의 나머지 넷 $(1\ 2)$, $(3\ 4)$, $(1\ 3\ 2\ 4)$, $(1\ 4\ 2\ 3)$은 $\{1, 3\}$을 차례로 $\{2, 3\}$, $\{1, 4\}$, $\{3, 2\}$, $\{4, 1\}$로 보내므로 $\pi_2$를 $\pi_3$으로 옮기고, $K$에 들지 않는다. 따라서 $K = \{i\} \cup D = V$이다.

   *전사.* 군의 작용의 (6)에 의해 $K = \operatorname{Ker} \theta$이다. [[first-isomorphism-theorem|제1 동형 정리]]의 (1)에 의해 $S_4/V \cong \theta(S_4)$이고, [[quotient-group|몫군]]의 (5)와 교대군의 (6)의 $|V| = 4$에 의해 $24 = |S_4/V| \cdot 4$, 곧 $|S_4/V| = 6$이므로 [[group-isomorphism|군의 동형]]의 (3)의 (iii)에 의해 $|\theta(S_4)| = 6$이다. 한편 대칭군의 원소의 개수의 (3)에 의해 $|S_{\mathcal{Q}}| = 3! = 6$이다. $\theta(S_4) \subseteq S_{\mathcal{Q}}$이므로 유한집합의 부분집합의 (2)에 의해 $\theta(S_4) = S_{\mathcal{Q}}$이고, [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (4)에 의해 $\theta$는 전사이다.
:::

:::exercise[중심화 부분군과 순환 부분군의 정규화 부분군]
$G$가 군이고 $a \in G$라 하자.

1. $C_G(a) \subseteq N_G(\langle a \rangle)$임을 보여라.
2. $G = S_3$, $a = (1\ 2\ 3)$이면 1의 포함이 등호가 아님을 보여라.
:::

:::solution
1. $g \in C_G(a)$라 하자. [[group-action-examples|군의 작용의 예]]의 (4)의 (iii)에 의해 $c_g(x) = gxg^{-1}$은 군 $G$에서 $G$로의 동형사상이므로 준동형이고, $gag^{-1} = (ag)g^{-1} = a$이므로 $c_g(a) = a$이다. [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (7)에 의해
   $$
   \begin{aligned}
   g\langle a \rangle g^{-1} &= c_g(\langle a \rangle) \\
   &= \langle c_g(a) \rangle = \langle a \rangle
   \end{aligned}
   $$
   이다(첫 등호는 군의 작용의 예의 (4)의 기호 $gAg^{-1} = c_g(A)$). [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 정의에 의해 $g \in N_G(\langle a \rangle)$이다.

2. *정규화 부분군.* [[alternating-group|교대군]]의 (4)와 [[cycle-permutation|순환치환]]의 (4)에 의해 $A_3 = \{i, (1\ 2\ 3), (1\ 3\ 2)\}$이고 $\operatorname{ord}(a) = 3$이며, [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (1)에 의해 $\langle a \rangle$도 원소가 $3$개이다. [[cyclic-subgroup|순환 부분군]]의 (2)에 의해 $\langle a \rangle \subseteq A_3$이고(교대군의 (1)에 의해 $A_3$은 $a$를 포함하는 부분군), [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $\langle a \rangle = A_3$이다. 교대군의 (1)에 의해 $A_3$은 $S_3$의 정규부분군이므로 중심화 부분군과 정규화 부분군의 (4)에 의해 $N_{S_3}(\langle a \rangle) = S_3$이다.

   *중심화 부분군.* $(1\ 2)a$는 $1$을 $(1\ 2)(2) = 1$로 보내고 $a(1\ 2)$는 $1$을 $a(2) = 3$으로 보내므로 $(1\ 2)a \ne a(1\ 2)$이고, $(1\ 2) \notin C_{S_3}(a)$이다. 따라서 $C_{S_3}(a) \ne S_3 = N_{S_3}(\langle a \rangle)$이다.
:::

:::exercise[추이적 작용과 정규부분군의 궤도]
군 $G$가 유한집합 $X$에 추이적으로 작용하고 $N$이 $G$의 정규부분군이라 하자. [[group-action|군의 작용]]의 (4)로 $N$도 $X$에 작용한다.

1. 모든 $g \in G$와 $x \in X$에서 $g \cdot (N \cdot x) = N \cdot (g \cdot x)$임을 보여라. 여기서 $g \cdot (N \cdot x) = \{g \cdot y : y \in N \cdot x\}$이다.
2. $N$의 궤도는 모두 원소의 개수가 같고, 그 개수는 $|X|$를 나눔을 보여라.
3. $S_4$가 $\{1, 2, 3, 4\}$에 자연스럽게 작용할 때, 부분군 $\langle (1\ 2\ 3) \rangle$의 궤도를 구하고, 이 부분군이 $S_4$의 정규부분군이 아님을 2로 보여라.
:::

:::solution
1. $y \in N \cdot x$이면 $y = n \cdot x$인 $n \in N$이 있다. 작용의 조건 (ii)와 결합법칙에 의해
   $$
   \begin{aligned}
   g \cdot (n \cdot x) &= (gn) \cdot x \\
   &= \bigl((gng^{-1})g\bigr) \cdot x \\
   &= (gng^{-1}) \cdot (g \cdot x)
   \end{aligned}
   $$
   이고, $N$이 정규부분군이므로 $gng^{-1} \in N$이다. 따라서 $g \cdot y \in N \cdot (g \cdot x)$이다. 거꾸로 $n' \in N$이면 [[normal-subgroup|정규부분군]]의 (1)의 (iv)에 의해 $g^{-1}n'g \in N$이고, 같은 계산으로 $n' \cdot (g \cdot x) = g \cdot \bigl((g^{-1}n'g) \cdot x\bigr)$이므로 $n' \cdot (g \cdot x) \in g \cdot (N \cdot x)$이다. 따라서 두 집합은 같다.

2. *같은 개수.* 추이적 작용의 정의에 의해 $X \ne \emptyset$이므로 $x \in X$가 있다. 그런 $x$ 하나를 두자. 작용이 추이적이므로 [[orbit-of-an-action|궤도]]의 (6)에 의해 모든 $y \in X$에서 $y = g \cdot x$인 $g \in G$가 있다. 군의 작용의 (1)에 의해 $\theta(g)$는 단사이므로 그것을 $N \cdot x$로 제한한 함수는 1에 의해 $N \cdot x$에서 $N \cdot y$로의 전단사이다. $N \cdot x$는 유한집합 $X$의 부분집합이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 유한집합이고, [[finite-set|유한집합]]의 (F4)에 의해 $|N \cdot y| = |N \cdot x|$이다. 곧 $N$의 모든 궤도는 원소가 $|N \cdot x|$개이다.

   *나눈다.* 궤도의 (2)에 의해 $N$의 궤도 전체는 $X$의 분할이고, 조각이 모두 원소를 $|N \cdot x|$개 가지므로 [[partition-into-equal-blocks|크기가 같은 조각으로 나눈 유한집합]]의 (4)에 의해 $|N \cdot x|$는 $|X|$를 나눈다.

3. *궤도.* $c = (1\ 2\ 3)$이라 하자. 궤도의 (3)에 의해 $\langle c \rangle$의 궤도는 $c$의 궤도이고, [[cycle-permutation|순환치환]]의 (4)에 의해 그것은 $\{1, 2, 3\}$과 $\{4\}$이다. 두 궤도는 원소가 $3$개와 $1$개로 개수가 다르다.

   *정규가 아니다.* [[group-action-examples|군의 작용의 예]]의 (2)의 자연스러운 작용은 궤도의 (6)의 (나)에 의해 추이적이다. $\langle c \rangle$가 $S_4$의 정규부분군이라면 2에 의해 그 궤도의 원소의 개수가 모두 같아야 하므로, $\langle c \rangle$는 정규부분군이 아니다.
:::

:::exercise[부분군의 켤레의 개수와 지표]
$G$가 유한군이고 $H$가 $G$의 부분군이라 하자.

1. $\{gHg^{-1} : g \in G\}$의 원소의 개수는 $[G : H]$를 나눔을 보여라.
2. $[G : H]$가 소수 $p$이고 $H$가 $G$의 정규부분군이 아니면, $H$의 켤레는 정확히 $p$개임을 보여라.
3. $G = S_3$, $H = \{i, (2\ 3)\}$이면 $H$의 켤레가 정확히 $3$개임을 보여라.
:::

:::solution
1. [[orbit-stabilizer-theorem|궤도–안정자 정리]]의 (4)의 (i)에 의해 $\{gHg^{-1} : g \in G\}$는 원소를 $[G : N_G(H)]$개 갖는다. [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 (3)에 의해 $N_G(H)$는 $H$를 포함하는 $G$의 부분군이므로, [[lagrange-theorem|라그랑주 정리]]의 (3)에 의해
   $$
   \begin{aligned}
   [G : H] &= [G : N_G(H)] \\
   &\qquad \cdot [N_G(H) : H]
   \end{aligned}
   $$
   이다. 따라서 $[G : N_G(H)]$는 $[G : H]$를 나눈다([[divisibility|나누어떨어짐]]).

2. 1에 의해 켤레의 개수 $c$는 $p$의 양의 약수이고(지표는 왼쪽 잉여류가 적어도 하나 있으므로 자연수이다), [[prime-number|소수]]의 정의에 의해 $c$는 $1$이거나 $p$이다. 궤도–안정자 정리의 (4)의 (i)에 의해 $c = 1$인 것은 정확히 $H$가 정규부분군일 때이므로, $H$가 정규부분군이 아니면 $c = p$이다.

3. [[order-of-symmetric-group|대칭군의 원소의 개수]]의 (6)에 의해 $|S_3| = 6$이고, [[cycle-permutation|순환치환]]의 (5)에 의해 $(2\ 3)(2\ 3) = i$이므로 $H = \langle (2\ 3) \rangle$은 원소가 $2$개인 부분군이다([[cyclic-subgroup|순환 부분군]]의 (1), [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (1)). 라그랑주 정리의 (1)에 의해 $6 = [S_3 : H] \cdot 2$이므로 $[S_3 : H] = 3$이고 $3$은 소수이다. [[conjugate-of-a-cycle|순환치환의 켤레]]의 (1)에 의해 $(1\ 2)(2\ 3)(1\ 2)^{-1} = ((1\ 2)(2)\ \ (1\ 2)(3)) = (1\ 3)$이고, $(1\ 3)$은 $1$을 $3$으로 보내므로 $H$의 두 원소($1$을 고정한다)와 다르다. 곧 $(1\ 3) \notin H$이므로 $H$는 정규부분군이 아니고, 2에 의해 $H$의 켤레는 정확히 $3$개이다.
:::

:::exercise[잉여류 위의 작용의 핵]
$G$가 군이고 $H$가 $G$의 부분군이며, $G$가 $G/H$에 왼쪽 곱으로 작용한다고 하자([[group-action-examples|군의 작용의 예]]의 (5)). 이 작용에서 모든 점을 고정하는 원소 전체를 $K$라 하자.

1. $K = \{g \in G : \text{모든 } a \in G \text{에서 } g \in aHa^{-1}\}$이고, $K$는 $H$에 포함되는 $G$의 정규부분군임을 보여라.
2. $H$가 $G$의 정규부분군이면 $K = H$임을 보여라.
3. $G = S_3$, $H = \{i, (1\ 3)\}$이면 $K = \{i\}$임을 보여라. 곧 $K$는 $H$와 다를 수 있고, 이때 작용이 정하는 준동형 $S_3 \to S_{G/H}$는 단사이다.
:::

:::solution
1. *핵의 꼴.* $g \in K$인 것은 정확히 모든 $a \in G$에서 $g \cdot (aH) = aH$일 때, 곧 $g$가 모든 점 $aH$의 안정자에 들 때이다. [[stabilizer-and-fixed-points|안정자와 고정점]]의 (5)의 (iii)에 의해 $aH$의 안정자는 $aHa^{-1}$이므로 첫 등식이 성립한다.

   *$H$에 포함된다.* $g \in K$이면 $a = e$에서 $g \in eHe^{-1} = H$이다.

   *정규부분군.* [[group-action|군의 작용]]의 (6)에 의해 모든 점을 고정하는 원소 전체 $K$는 $G$의 정규부분군이다.

2. $H$가 정규부분군이면 [[normal-subgroup|정규부분군]]의 (1)에 의해 모든 $a \in G$에서 $aHa^{-1} = H$이므로, 1의 꼴에서 $K = H$이다.

3. [[cycle-permutation|순환치환]]의 (5)에 의해 $(1\ 3)(1\ 3) = i$이므로 $H = \langle (1\ 3) \rangle$은 $S_3$의 부분군이다([[cyclic-subgroup|순환 부분군]]의 (1), [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (1)). $a = (1\ 2)$에서 순환치환의 (5)에 의해 $a^{-1} = a$이고, $aHa^{-1} = \{aia^{-1}, a(1\ 3)a^{-1}\}$이며 [[conjugate-of-a-cycle|순환치환의 켤레]]의 (1)에 의해 $a(1\ 3)a^{-1} = (a(1)\ \ a(3)) = (2\ 3)$이다. 따라서 $aHa^{-1} = \{i, (2\ 3)\}$이다. 1에 의해 $K \subseteq H \cap aHa^{-1}$이고, $(1\ 3)$은 $1$을 $3$으로 보내지만 $i$와 $(2\ 3)$은 $1$을 고정하므로 $(1\ 3) \notin aHa^{-1}$이다. 따라서 $H \cap aHa^{-1} = \{i\}$이고, $K$는 부분군이므로 $i \in K$이어서 $K = \{i\}$이다. 군의 작용의 (6)에 의해 $K = \{i\}$이면 작용이 정하는 준동형 $\theta$는 단사이다.
:::
