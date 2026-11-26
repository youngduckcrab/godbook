---
written_by: Claude
status: reviewed
sources:
  - ref: judson-abstract-algebra
    loc: "14.5절 Exercises, 연습문제 5 (p.179) — 문제 'A₄의 켤레류와 류 방정식'과 같은 대상(A₄ 의 켤레 작용의 궤도와 안정자를 구하기)"
  - ref: judson-abstract-algebra
    loc: "14.5절 Exercises, 연습문제 23 (p.180) — 문제 '원소가 p³개인 아벨군이 아닌 군의 중심'과 같은 발상(원소가 pⁿ 개인 아벨군이 아닌 군에서 |Z(G)| < p^{n−1}. 이 문제는 n = 3 에서 |Z(G)| = p 를 묻는다)"
  - ref: judson-abstract-algebra
    loc: "14.5절 Exercises, 연습문제 25 (p.180) — 문제 'p-군의 원소가 p개인 정규부분군'과 같은 주제(원소가 pⁿ 개인 군에 원소 p 개인 진부분군이 있다. 이 문제는 그것을 중심 안에서 정규부분군으로 찾는다)"
added: 2026-11-26
---

:::exercise[A₄의 켤레류와 류 방정식]
$A_4$, $C$, $D$는 [[alternating-group|교대군]]의 (5)의 것이고 $V = \{i\} \cup D$라 하자. 켤레류는 군 $A_4$에서 따진다.

1. $C$의 모든 원소의 켤레류는 원소가 $4$개이고, $D$의 원소의 켤레류는 $D$임을 보여라.
2. $A_4$의 켤레류는 $\{i\}$, $D$와 원소가 $4$개인 두 켤레류, 모두 넷이고 $Z(A_4) = \{i\}$임을 보여라. 곧 $12 = 1 + 3 + 4 + 4$이다.
3. $(1\ 2\ 3)$과 $(1\ 3\ 2)$는 $A_4$에서 켤레가 아님을 보여라. ($S_4$에서는 켤레이다.)
:::

:::solution
교대군의 (5)에 의해 $|A_4| = 12$이고 $A_4 = \{i\} \cup C \cup D$이며, $i$, $C$의 원소, $D$의 원소의 위수는 각각 $1$, $3$, $2$이다. $x \in A_4$이면 [[class-equation|류 방정식]]의 (4)의 (ii)에 의해 $|\operatorname{cl}(x)| = [A_4 : C_{A_4}(x)]$이고, [[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 $12 = |\operatorname{cl}(x)| \cdot |C_{A_4}(x)|$이다. [[conjugacy-class|켤레류]]의 (4)에 의해 켤레인 원소는 위수가 같으므로 $\operatorname{cl}(x)$는 $x$와 위수가 같은 원소들로 이루어진다.

*한 계산.* $c = (1\ 2\ 3)$, $d = (1\ 2)(3\ 4)$라 하자([[cycle-permutation|순환치환]]의 표기). [[conjugate-of-a-cycle|순환치환의 켤레]]의 (1)을 두 인수에 쓰고 [[finite-product-in-a-group|군의 유한 곱]]의 (3)으로 묶음을 바꾸면 $cdc^{-1} = (c(1)\ c(2))(c(3)\ c(4)) = (2\ 3)(1\ 4)$이고, 이것은 $1$을 $4$로 보내므로 $d$와 다르다. 따라서 $cd \ne dc$이다($cd = dc$이면 $cdc^{-1} = d$).

1. *$C$의 원소.* $x \in C$이면 교대군의 (8)에 의해 $x$는 길이 $3$인 순환치환 $(u\ v\ w)$이고, [[disjoint-union-count|서로소인 합집합의 원소의 개수]]의 (2)에 의해 $\{1, 2, 3, 4\} - \{u, v, w\}$는 원소가 하나이다. 그 원소를 $t$라 하고 $\delta = (u\ v)(w\ t)$라 하자. $\delta$는 두 호환의 곱이므로 [[parity-of-a-permutation|치환의 홀짝]]의 (3), (4)에 의해 짝치환이고 $A_4$에 든다. [[disjoint-cycles-commute|서로소인 순환치환은 교환된다]]의 (1)로 $(w\ t)(u\ v) = (u\ v)(w\ t)$이므로 [[finite-product-in-a-group|군의 유한 곱]]의 (3)으로 묶음을 바꾸면 $\delta\delta = (u\ v)(u\ v)(w\ t)(w\ t) = i$이고(순환치환의 (5)), $\delta(u) = v \ne u$이므로 $\delta$의 위수는 $2$이다. $A_4$에서 위수가 $2$인 원소는 $D$의 원소뿐이므로 $\delta \in D$이다. 순환치환의 켤레의 (1)에 의해 $\operatorname{supp}(\delta x \delta^{-1}) = \delta(\{u, v, w\}) = \{v, u, t\}$이고, 이것은 $\{u, v, w\}$와 다르므로(순환치환의 (2)) $\delta x \delta^{-1} \ne x$이다. 곧 $x \notin Z(A_4)$이고 [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 (2)에 의해 $C_{A_4}(x) \ne A_4$이다.

   한편 같은 항목의 (1)에 의해 $\langle x \rangle \subseteq C_{A_4}(x)$이고, 순환치환의 (4)와 [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (1)에 의해 $|\langle x \rangle| = 3$이다. 라그랑주 정리의 (1)을 군 $C_{A_4}(x)$와 그 부분군 $\langle x \rangle$에 쓰면 $|C_{A_4}(x)| = 3s$인 자연수 $s$가 있고, $3s$가 $12$를 나누므로 $s$는 $4 = 2^2$을 나누며 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 (3)에 의해 $s$는 $1$, $2$, $4$ 가운데 하나이다. $s = 2$이면 원소가 $6$개인 부분군이 생겨 [[a4-has-no-subgroup-of-order-6|A₄에는 원소가 6개인 부분군이 없다]]의 (2)에 어긋나고, $s = 4$이면 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $C_{A_4}(x) = A_4$가 되어 위와 어긋난다. 따라서 $|C_{A_4}(x)| = 3$이고 $|\operatorname{cl}(x)| = 12/3 = 4$이다.

   *$D$의 원소.* 교대군의 (6)에 의해 $D$의 서로 다른 두 원소의 곱은 순서에 상관없이 나머지 한 원소이므로 $V$의 원소는 서로 교환되고, $V \subseteq C_{A_4}(d)$이다. 교대군의 (6)에 의해 $|V| = 4$이므로 같은 논법으로 $|C_{A_4}(d)| = 4r$인 자연수 $r$이 있고 $r \mid 3$이므로 $r$는 $1$ 또는 $3$이다([[prime-number|소수]] $3$). $r = 3$이면 $C_{A_4}(d) = A_4$가 되어 $cd \ne dc$와 어긋나므로 $|C_{A_4}(d)| = 4$이고 $|\operatorname{cl}(d)| = 3$이다. $\operatorname{cl}(d)$의 원소는 위수가 $2$이므로 $D$에 들고, $|D| = 3$이므로 유한집합의 부분집합의 (2)에 의해 $\operatorname{cl}(d) = D$이다. 켤레류의 (1)에 의해 $D$의 모든 원소의 켤레류는 $D$이다.

2. 켤레류의 (3)에 의해 $\operatorname{cl}(i) = \{i\}$이다. 1에 의해 $C$의 원소 $x$의 켤레류는 원소가 $4$개이고, 위수가 $3$인 원소로 이루어지므로 $C$에 포함된다. 켤레류의 (1)에 의해 이런 켤레류들은 서로 같거나 공통 원소가 없으므로, $C$의 원소의 켤레류 전체는 $C$의 분할이다. 조각이 모두 원소를 $4$개 가지므로 [[partition-into-equal-blocks|크기가 같은 조각으로 나눈 유한집합]]의 (3)에 의해 $8 = k \cdot 4$, 곧 조각은 $k = 2$개이다. 따라서 $A_4$의 켤레류는 $\{i\}$, $D$와 $C$를 나눈 원소 $4$개의 두 켤레류이다. 켤레류의 (3)에 의해 $x \in Z(A_4)$인 것은 정확히 $\operatorname{cl}(x) = \{x\}$일 때이고, 원소가 하나인 켤레류는 $\{i\}$뿐이므로 $Z(A_4) = \{i\}$이다.

3. *$S_4$에서의 중심화 부분군.* 켤레류의 (6)과 교대군의 (8), (5)에 의해 $S_4$에서 $c$의 켤레류는 $C$이고 원소가 $8$개이다. 1과 같은 논법으로, [[order-of-symmetric-group|대칭군의 원소의 개수]]의 (6)의 $|S_4| = 24$와 $24 = 8 \cdot |C_{S_4}(c)|$에서 $|C_{S_4}(c)| = 3$이고, $\langle c \rangle \subseteq C_{S_4}(c)$이므로 $C_{S_4}(c) = \langle c \rangle$이다. 교대군의 (1)에 의해 $A_4$는 $c$를 포함하는 부분군이므로 [[cyclic-subgroup|순환 부분군]]의 (2)에 의해 $\langle c \rangle \subseteq A_4$이다.

   *켤레가 아니다.* $\tau = (2\ 3)$이라 하면 순환치환의 켤레의 (1)에 의해 $\tau c \tau^{-1} = (\tau(1)\ \tau(2)\ \tau(3)) = (1\ 3\ 2)$이고, 이것은 순환치환의 (1)에 의해 $c^{-1}$이다. $\sigma \in S_4$가 $\sigma c \sigma^{-1} = c^{-1}$을 만족한다고 하자. 순환치환의 (5)에 의해 $\tau^{-1} = \tau$이고, $\tau c^{-1} \tau^{-1} = (\tau c \tau^{-1})^{-1} = c$이므로(유한 곱의 (5)) $(\tau\sigma) c (\tau\sigma)^{-1} = \tau(\sigma c \sigma^{-1})\tau^{-1} = \tau c^{-1} \tau^{-1} = c$이다(유한 곱의 (3), (5)). 따라서 $\tau\sigma \in C_{S_4}(c) = \langle c \rangle \subseteq A_4$이고 $\tau\sigma$는 짝치환이다. 그러면 $\sigma = \tau(\tau\sigma)$는 홀치환과 짝치환의 곱이므로 치환의 홀짝의 (4)에 의해 홀치환이고 $\sigma \notin A_4$이다. 곧 $gcg^{-1} = c^{-1}$인 $g \in A_4$는 없고, $(1\ 2\ 3)$과 $(1\ 3\ 2)$는 $A_4$에서 켤레가 아니다. $S_4$에서는 $\tau$가 둘을 켤레로 만든다.
:::

:::exercise[p-군의 정규부분군과 중심]
$p$가 소수이고 $G$가 $p$-군이며 $N$이 $G$의 정규부분군이라 하자.

1. $N \ne \{e\}$이면 $N \cap Z(G)$는 원소가 $p$개 이상이고, 특히 $N \cap Z(G) \ne \{e\}$임을 보여라.
2. $N$이 원소를 $p$개 가지면 $N \subseteq Z(G)$임을 보여라.
:::

:::solution
1. *제한한 켤레 작용.* [[group-action-examples|군의 작용의 예]]의 (4)의 (i)의 켤레 작용에서 $g \cdot n = gng^{-1}$이고, $N$이 정규부분군이므로 $n \in N$이면 $gng^{-1} \in N$이다. 곧 $N$은 $G$-불변이고, [[group-action|군의 작용]]의 (5)에 의해 $G$는 $N$에 켤레로 작용한다. [[stabilizer-and-fixed-points|안정자와 고정점]]의 (6)의 (ii)와 (5)의 (iv)에 의해 이 작용의 고정점 전체는 $N \cap Z(G)$이다.

   *합동.* $G$는 유한군이므로 [[subgroup|부분군]]의 (8)에 의해 $N$은 유한집합이다. [[fixed-points-of-p-group-action|p-군의 작용의 고정점]]의 (1)에 의해 $|N| \equiv |N \cap Z(G)| \pmod p$이다. [[p-group|p-군]]의 (4)에 의해 $N$은 $p$-군이고, $N \ne \{e\}$이므로 p-군의 (3)을 군 $N$에 써서 $p \mid |N|$이다. 따라서 [[congruence-modulo-n|합동]]의 정의와 [[divisibility|나누어떨어짐]]의 계산으로 $p \mid |N \cap Z(G)|$, 곧 $|N \cap Z(G)| = pc$인 정수 $c$가 있다. $e \in N \cap Z(G)$이므로 $|N \cap Z(G)| \ge 1 > 0$이고, $p > 0$이므로 $c \ge 1$이며([[prime-number|소수]]의 (Z2), (Z1)) $|N \cap Z(G)| = pc \ge p$이다((Z3)). [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 (2)에 의해 $p \ge 2$이므로 $N \cap Z(G)$는 $e$ 말고도 원소를 가지고, $N \cap Z(G) \ne \{e\}$이다.

2. [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 (2)에 의해 $p \ge 2$이므로 $N \ne \{e\}$이다. 1에 의해 $N \cap Z(G)$는 원소가 $p$개 이상인 $N$의 부분집합이고 $|N| = p$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (1), (2)에 의해 $N \cap Z(G) = N$, 곧 $N \subseteq Z(G)$이다.
:::

:::exercise[원소가 p³개인 아벨군이 아닌 군의 중심]
$p$가 소수이고 $G$가 원소를 $p^3$개 갖는 군이며 아벨군이 아니라 하자.

1. $|Z(G)| = p$임을 보여라.
2. $a \in G - Z(G)$이면 $|C_G(a)| = p^2$이고 $|\operatorname{cl}(a)| = p$임을 보여라.
:::

:::solution
$G$는 $n = 3$인 [[p-group|p-군]]이다.

1. [[center-of-p-group|p-군의 중심]]의 (1)에 의해 $|Z(G)| = p^k$인 정수 $k$가 $1 \le k \le 3$에 있다. $k = 3$이면 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $Z(G) = G$이고 [[subgroup-examples|부분군의 예와 교집합]]의 (5)에 의해 $G$가 아벨군이 되어 가정에 어긋난다. $k = 2$이면 [[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 $p^3 = [G : Z(G)] \cdot p^2$이고, [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 (1)의 (ii)로 $p^3 = p \cdot p^2$이므로 [[integer-cancellation|정수 곱셈의 소거 법칙]]의 (2)에 의해 $[G : Z(G)] = p$이다. 그런데 [[cyclic-quotient-by-center|중심에 대한 몫군이 순환군이면 아벨군이다]]의 (2)에 의해 아벨군이 아닌 유한군에서 $[G : Z(G)]$는 소수가 아니므로 어긋난다. 따라서 $k = 1$이고 $|Z(G)| = p$이다.

2. [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 (1), (2)에 의해 $C_G(a)$는 $a$와 $Z(G)$를 포함하는 $G$의 부분군이고, $a \notin Z(G)$이므로 $C_G(a) \ne G$이며 $Z(G) \ne C_G(a)$이다. p-군의 (4)에 의해 $|C_G(a)| = p^j$인 $j$가 $0 \le j \le 3$에 있다. $Z(G)$는 $C_G(a)$와 다른 부분집합이므로 유한집합의 부분집합의 (2)에 의해 $p = |Z(G)| < p^j$이고, 소수의 거듭제곱과 그 약수의 (2)에 의해 $j \ge 2$이다($j \le 1$이면 $p^j \le p$). $C_G(a) \ne G$이므로 같은 까닭으로 $p^j < p^3$, 곧 $j \le 2$이다. 따라서 $|C_G(a)| = p^2$이다. [[class-equation|류 방정식]]의 (4)의 (ii)와 라그랑주 정리의 (1)에 의해 $p^3 = |\operatorname{cl}(a)| \cdot p^2$이고, 1과 같은 소거로 $|\operatorname{cl}(a)| = p$이다.
:::

:::exercise[p-군의 원소가 p개인 정규부분군]
$p$가 소수이고 $G$가 원소를 $p^n$개($n \ge 1$) 갖는 군이라 하자.

1. 원소가 $p$개이고 $Z(G)$에 포함되는 $G$의 부분군이 있음을 보여라.
2. $Z(G)$에 포함되는 $G$의 부분군은 모두 $G$의 정규부분군임을 보여라.
3. 원소가 $p$개인 $G$의 부분군 $H$에 대하여, $H$가 $G$의 정규부분군인 것은 정확히 $H \subseteq Z(G)$일 때임을 보여라.
:::

:::solution
1. [[center-of-p-group|p-군의 중심]]의 (1)에 의해 $e$가 아닌 $z \in Z(G)$가 있다. [[p-group|p-군]]의 (5)에 의해 $\operatorname{ord}(z) = p^k$이고 $k \ge 1$이다. [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 (2)에 의해 $p^k = p^{k-1} \cdot p$이므로, [[order-of-a-power|거듭제곱의 위수]]의 (4)를 $d = p^{k-1}$에 쓰면 $w = z^{p^{k-1}}$의 위수는 $p$이다. [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (1)에 의해 $\langle w \rangle$는 원소가 $p$개인 부분군이다. $Z(G)$는 $G$의 부분군이고([[subgroup-examples|부분군의 예와 교집합]]의 (5)) [[power-in-a-group|군의 거듭제곱]]의 (5)에 의해 $w \in Z(G)$이므로, [[cyclic-subgroup|순환 부분군]]의 (2)에 의해 $\langle w \rangle \subseteq Z(G)$이다.

2. $K \subseteq Z(G)$가 $G$의 부분군이고 $g \in G$, $k \in K$라 하자. $k \in Z(G)$이므로 $kg = gk$이고 $gkg^{-1} = (kg)g^{-1} = k(gg^{-1}) = k \in K$이다. 따라서 $K$는 $G$의 [[normal-subgroup|정규부분군]]이다.

3. $H \subseteq Z(G)$이면 2에 의해 $H$는 정규부분군이다. 거꾸로 $H$가 원소가 $p$개인 정규부분군이면, 문제 2의 2에 의해 $H \subseteq Z(G)$이다. 1과 함께 보면, 원소가 $p$개인 정규부분군은 있고, 그것은 모두 중심 안에 있다.
:::

:::exercise[원소가 8개인 아벨군이 아닌 군]
$S_4$에서 $\rho = (1\ 2)(3\ 4)$라 하고 $P = C_{S_4}(\rho)$라 하자.

1. $S_4$에서 $\rho$의 켤레류는 [[alternating-group|교대군]]의 (5)의 $D$이고, $P$는 원소가 $8$개인 부분군임을 보여라.
2. $(1\ 2)$와 $\tau = (1\ 3\ 2\ 4)$는 $P$에 들고 교환되지 않음을 보여라. 따라서 $P$는 원소가 $2^3$개인 아벨군이 아닌 군이고, [[group-of-order-p-squared|위수 p²인 군]]의 (1)은 원소가 $p^3$개인 군으로 넓힐 수 없다.
3. $Z(P) = \{i, \rho\}$임을 보여라.
:::

:::solution
1. *켤레는 $D$에 든다.* $\sigma \in S_4$이면 [[finite-product-in-a-group|군의 유한 곱]]의 (3)으로 묶음을 바꿔 $\sigma\rho\sigma^{-1} = (\sigma(1\ 2)\sigma^{-1})(\sigma(3\ 4)\sigma^{-1})$이고, [[conjugate-of-a-cycle|순환치환의 켤레]]의 (1)에 의해 두 인수는 호환이다. [[parity-of-a-permutation|치환의 홀짝]]의 (3), (4)에 의해 $\sigma\rho\sigma^{-1}$은 짝치환이므로 교대군의 (1)에 의해 $A_4$에 든다. [[cycle-permutation|순환치환]]의 (6)과 [[disjoint-cycles-commute|서로소인 순환치환은 교환된다]]의 (1)에 의해 $(1\ 2)$와 $(3\ 4)$는 교환되고, [[laws-of-exponents|지수법칙]]의 (4)와 순환치환의 (5)에 의해 $\rho^2 = i$이며 $\rho(1) = 2$이므로 $\operatorname{ord}(\rho) = 2$이다. [[conjugacy-class|켤레류]]의 (4)에 의해 $\sigma\rho\sigma^{-1}$의 위수도 $2$이고, 교대군의 (5)에 의해 $A_4$에서 위수가 $2$인 원소는 $D$의 원소뿐이므로 $\sigma\rho\sigma^{-1} \in D$이다.

   *$D$ 전체.* 같은 식으로 $(2\ 3)\rho(2\ 3)^{-1} = (1\ 3)(2\ 4)$이고 $(2\ 4)\rho(2\ 4)^{-1} = (1\ 4)(3\ 2) = (1\ 4)(2\ 3)$이며, $\rho$ 자신도 $D$에 있다. 따라서 $\rho$의 켤레류는 $D$이고 원소가 $3$개이다.

   *$P$의 크기.* [[order-of-symmetric-group|대칭군의 원소의 개수]]의 (6)에 의해 $|S_4| = 24$이고, 켤레류의 (2)와 [[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 $24 = 3 \cdot |P|$이므로 $|P| = 8$이다. [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 (1)에 의해 $P$는 부분군이다.

2. *$(1\ 2) \in P$.* $(1\ 2)$는 $(1\ 2)$ 자신과 교환되고, 서로소인 순환치환은 교환된다의 (1)에 의해 $(3\ 4)$와도 교환되므로 유한 곱의 (8)에 의해 곱 $\rho$와 교환된다.

   *$\tau \in P$.* [[power-in-a-group|군의 거듭제곱]]의 (1)에 의해 $\tau^2 = \tau\tau$이고, 이것은 $1, 3, 2, 4$를 각각 $\tau(3) = 2$, $\tau(2) = 4$, $\tau(4) = 1$, $\tau(1) = 3$으로 보내므로 $1$과 $2$를, $3$과 $4$를 맞바꾸는 $\rho$이다. 지수법칙의 (1)에 의해 $\tau\rho = \tau\tau^2 = \tau^2\tau = \rho\tau$이므로 $\tau \in P$이다.

   *교환되지 않는다.* $(1\ 2)\tau$는 $1$을 $(1\ 2)(3) = 3$으로 보내고 $\tau(1\ 2)$는 $1$을 $\tau(2) = 4$로 보내므로 $(1\ 2)\tau \ne \tau(1\ 2)$이다. 따라서 군 $P$는 아벨군이 아니다. $8 = 2^3$이고 $2$는 소수이므로 $P$는 원소가 $2^3$개인 아벨군이 아닌 군이다. 위수 p²인 군의 (1)은 원소가 $p^2$개인 군이 모두 아벨군이라고 말하지만, 같은 말을 $p^3$에 대해 하면 이 $P$가 반례이다.

3. $P$는 원소가 $2^3$개인 아벨군이 아닌 군이므로 문제 3의 1에 의해 $|Z(P)| = 2$이다. $P = C_{S_4}(\rho)$의 모든 원소는 $\rho$와 교환되고 $\rho \in P$이므로 $\rho \in Z(P)$이며, $i \in Z(P)$이고 $\rho \ne i$이다. 따라서 $\{i, \rho\} \subseteq Z(P)$이고 원소의 개수가 같으므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $Z(P) = \{i, \rho\}$이다.
:::
