---
title: 중심화 부분군과 정규화 부분군
title_en: Centralizers and Normalizers
aliases: [중심화 부분군, 정규화 부분군, 중심화군, 정규화군, centralizer, normalizer]
kind: theorem
field: group-theory
msc: ["20"]
level: undergrad
summary: "원소 a 와 교환되는 원소 전체 C_G(a) 는 켤레 작용에서 a 의 안정자이고, gHg⁻¹ = H 인 원소 전체 N_G(H) 는 부분군 위의 켤레 작용에서 H 의 안정자이므로 둘 다 부분군이다. H 는 N_G(H) 의 정규부분군이고, H 가 정규인 것은 N_G(H) = G 일 때이며, H 가 유한이면 gHg⁻¹ ⊆ H 만 확인하면 된다. 중심은 아벨군이다."
requires: [set, subset, finite-set, number-of-elements-is-unique, subset-of-finite-set, prime-number, divisibility, group, group-basic-properties, finite-product-in-a-group, subgroup, subgroup-examples, cyclic-subgroup, lagrange-theorem, normal-subgroup, symmetric-group, order-of-symmetric-group, cycle-permutation, group-action-examples, stabilizer-and-fixed-points]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "14.2절 The Class Equation, 중심화 부분군 (p.171); 15.1절 The Sylow Theorems, 정규화 부분군 (p.182); 10.4절 Exercises, 연습문제 12, 13 (p.131); 14.5절 Exercises, 연습문제 22 (p.180); 15.4절 Exercises, 연습문제 10, 14 (p.187)"
    checked: original
    note: "출처 14.2절(p.171, 그림으로 대조)은 켤레 작용에서 x_i 의 안정자 C(x_i) = {g ∈ G : gx_i = x_ig} 를 x_i 의 centralizer subgroup 이라 부른다. (1)은 이것과 같은 정의이고, 10.4절 연습문제 12(p.131)가 C(g) = {x ∈ G : xg = gx} 로 정의하고 부분군임을 보이게 하는 것과 같은 내용이다. 출처 15.1절(p.182, 그림으로 대조)은 N(H) = {g ∈ G : gHg⁻¹ = H} 가 'a subgroup of G called the normalizer of H in G' 라 하고, 이어 'H is a normal subgroup of N(H). In fact, N(H) is the largest subgroup of G in which H is normal' 이라고 적는다. 이 문장들에 증명은 붙어 있지 않다. (3)은 그 정의와 두 문장을 진술로 올린 것이고, '가장 큰' 은 'H 를 정규부분군으로 갖는 모든 부분군 K 에서 K ⊆ N_G(H)' 꼴로 썼다. 증명은 이 사이트가 썼다. 기호는 출처의 C(x), N(H) 대신 군을 밝힌 C_G(a), N_G(H) 를 쓴다. (6)은 출처 14.5절 연습문제 22(p.180) gC(a)g⁻¹ = C(gag⁻¹) 와 15.4절 연습문제 14(p.187) gN(H)g⁻¹ = N(gHg⁻¹) 와 같은 내용이다. (5)의 g⁻¹Hg = H 꼴은 출처 Lemma 15.5(p.182)가 가정을 x⁻¹Px = P 로 적고 증명 첫머리에서 'Certainly x ∈ N(P)' 라고 하는 곳에서 쓰는 꼴이다. (2)의 '중심은 아벨군' 은 출처 10.4절 연습문제 13(p.131)이 중심 Z(G) 를 다루는 곳(중심의 계산과 정규성, G/Z(G) 가 순환이면 G 가 아벨군)과 같은 대상이다. 예시 '$S_3$에서 $(1\\ 2)$의 중심화 부분군과 $\\{i_X, (1\\ 2)\\}$의 정규화 부분군' 의 Z(S₃) = {(1)} 은 출처 10.4절 연습문제 13 (a)(p.131)가 S₃ 의 중심을 계산하게 하는 것과 같은 내용이다. 반례 '정규화 부분군은 정규부분군이 아닐 수 있다' 는 출처 15.4절 연습문제 10(p.187)이 '정규화 부분군은 정규인가' 를 증명하거나 반박하게 하는 것에 대한 답이다. 확인 질문 '아벨군 $G$에서 $C_G(a)$와 $N_G(H)$는 무엇인가?' 는 출처 10.4절 연습문제 12 의 둘째 물음(C(g) 가 정규일 조건)과 같은 대상을 쓴다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(정규화 부분군 (5) 의 유한 가정, 켤레류 (3)(5) 에 아벨군·정규 대입, 뒤 단원 경로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이라 하자. 켤레 작용, 부분군 위의 켤레 작용, $c_g$와 $gAg^{-1}$은 [[group-action-examples|군의 작용의 예]]의 (4), (6)의 것이고, 안정자는 [[stabilizer-and-fixed-points|안정자와 고정점]]의 것이다. 중심 $Z(G)$는 [[subgroup-examples|부분군의 예]]의 (5)의 것이다.

$a \in G$에 대하여
$$C_G(a) = \{g \in G : ga = ag\}$$
를 $a$의 **중심화 부분군**(centralizer)이라 한다. $G$의 [[subgroup|부분군]] $H$에 대하여
$$N_G(H) = \{g \in G : gHg^{-1} = H\}$$
를 $H$의 **정규화 부분군**(normalizer)이라 한다. 아래첨자 $G$는 어느 군에서 따지는지를 밝히는 것이다.

다음이 성립한다. 아래에서 $a \in G$이고 $H$는 $G$의 부분군이다.

1. (중심화 부분군) $C_G(a)$는 켤레 작용에서 $a$의 안정자이고, 따라서 $G$의 부분군이다. $a \in C_G(a)$이고 [[cyclic-subgroup|순환 부분군]] $\langle a \rangle$는 $C_G(a)$에 포함된다.
2. (중심) $a \in Z(G)$인 것은 정확히 $C_G(a) = G$일 때이다. 모든 $a \in G$에서 $Z(G) \subseteq C_G(a)$이다. 군 $Z(G)$는 아벨군이다.
3. (정규화 부분군) $N_G(H)$는 부분군 위의 켤레 작용에서 $H$의 안정자이고, 따라서 $G$의 부분군이다. $H \subseteq N_G(H)$이고, $H$는 군 $N_G(H)$의 [[normal-subgroup|정규부분군]]이다. 또 $K$가 $G$의 부분군이고 $H \subseteq K$이며 $H$가 군 $K$의 정규부분군이면 $K \subseteq N_G(H)$이다.
4. (정규일 조건) $H$가 $G$의 정규부분군인 것은 정확히 $N_G(H) = G$일 때이다.
5. (유한한 부분군) $g \in G$에 대하여 $g \in N_G(H)$인 것은 정확히 $g^{-1} \in N_G(H)$일 때이고, 또 정확히 $g^{-1}Hg = H$일 때이다. $H$가 [[finite-set|유한집합]]이면 다음 네 조건은 서로 동치이다.
   - (i) $g \in N_G(H)$이다.
   - (ii) $gHg^{-1} \subseteq H$이다.
   - (iii) 모든 $h \in H$에서 $ghg^{-1} \in H$이다.
   - (iv) 모든 $h \in H$에서 $g^{-1}hg \in H$이다.
6. (켤레) 모든 $g \in G$에서 $gC_G(a)g^{-1} = C_G(gag^{-1})$이고 $gN_G(H)g^{-1} = N_G(gHg^{-1})$이다.
:::

:::english
Let $G$ be a group with identity $e$. The action by conjugation, the action by conjugation on subgroups, $c_g$ and $gAg^{-1}$ are those of items (4) and (6) of the examples of group actions, and stabilizers are those of the entry on stabilizers and fixed points. The center $Z(G)$ is that of item (5) of the examples of subgroups.

For $a \in G$, the set
$$C_G(a) = \{g \in G : ga = ag\}$$
is called the **centralizer** of $a$. For a subgroup $H$ of $G$, the set
$$N_G(H) = \{g \in G : gHg^{-1} = H\}$$
is called the **normalizer** of $H$. The subscript $G$ indicates in which group the set is taken.

The following hold, where $a \in G$ and $H$ is a subgroup of $G$.

1. (Centralizer) $C_G(a)$ is the stabilizer of $a$ for the action by conjugation, hence a subgroup of $G$. We have $a \in C_G(a)$, and the cyclic subgroup $\langle a \rangle$ is contained in $C_G(a)$.
2. (Center) $a \in Z(G)$ exactly when $C_G(a) = G$. For every $a \in G$, $Z(G) \subseteq C_G(a)$. The group $Z(G)$ is abelian.
3. (Normalizer) $N_G(H)$ is the stabilizer of $H$ for the action by conjugation on subgroups, hence a subgroup of $G$. We have $H \subseteq N_G(H)$, and $H$ is a normal subgroup of the group $N_G(H)$. Moreover, if $K$ is a subgroup of $G$ with $H \subseteq K$ and $H$ is a normal subgroup of the group $K$, then $K \subseteq N_G(H)$.
4. (Condition for normality) $H$ is a normal subgroup of $G$ exactly when $N_G(H) = G$.
5. (Finite subgroups) For $g \in G$, $g \in N_G(H)$ exactly when $g^{-1} \in N_G(H)$, and also exactly when $g^{-1}Hg = H$. If $H$ is finite, the following four conditions are equivalent.
   - (i) $g \in N_G(H)$.
   - (ii) $gHg^{-1} \subseteq H$.
   - (iii) $ghg^{-1} \in H$ for every $h \in H$.
   - (iv) $g^{-1}hg \in H$ for every $h \in H$.
6. (Conjugates) For every $g \in G$, $gC_G(a)g^{-1} = C_G(gag^{-1})$ and $gN_G(H)g^{-1} = N_G(gHg^{-1})$.
:::

## 직관

$C_G(a)$는 $a$와 "순서를 바꿔도 되는" 원소들이고, $N_G(H)$는 $H$를 통째로 켤레로 옮겨도 $H$로 돌아오는 원소들입니다. $N_G(H)$의 원소 $g$는 $H$의 원소 하나하나를 고정할 필요는 없고 $H$ 안에서 자리를 바꾸기만 하면 됩니다. 그래서 $C_G(a)$는 원소 하나를, $N_G(H)$는 집합 하나를 지키는 원소들이고, 둘 다 안정자라서 부분군입니다.

$N_G(H)$는 "$H$가 정규부분군이 되는 가장 큰 무대"입니다((3)). $G$ 전체가 그 무대이면 $H$는 정규부분군입니다((4)). 비유가 정의와 맞는 곳은 무대가 $H$를 포함하는 부분군이라는 점이고, 맞지 않는 곳은 그 무대 자신이 $G$의 정규부분군일 필요는 없다는 점입니다(아래 반례).

(5)는 유한한 부분군에서 $gHg^{-1} = H$를 확인하는 일을 한쪽 포함으로 줄입니다. 켤레로 옮긴 $gHg^{-1}$은 원소의 개수가 $H$와 같으므로, $H$에 들어가기만 하면 $H$ 전체이기 때문입니다. 무한한 부분군에서는 이 줄임에 근거가 없으므로 진술은 유한한 $H$에만 둡니다.

## 증명

:::idea
두 집합은 [[stabilizer-and-fixed-points|안정자와 고정점]]의 (5)의 (iv), (v)에서 안정자로 나타나므로 부분군이다. 나머지는 정의를 풀고, 유한한 경우에는 켤레가 원소의 개수를 보존한다는 것을 쓴다.
:::

:::hint
$h \in H$이면 $hHh^{-1} \subseteq H$는 닫힘에서 나온다. 거꾸로 $k \in H$를 $h(h^{-1}kh)h^{-1}$로 써 보라.
:::

:::hint
$N_G(H)$는 부분군이므로 역원에 닫혀 있다. $g^{-1} \in N_G(H)$를 정의대로 쓰면 무엇이 되는가?
:::

:::proof
네 개 이상의 원소의 곱을 다시 묶을 때는 [[finite-product-in-a-group|군의 유한 곱]]의 (1)과 (3)(일반 결합법칙)을 쓴다. [[group-basic-properties|군의 기본 성질]]의 (5)에 의해 $(g^{-1})^{-1} = g$이다.

**(1)** [[stabilizer-and-fixed-points|안정자와 고정점]]의 (5)의 (iv)에 의해 켤레 작용에서 $a$의 안정자는 $\{g : ga = ag\} = C_G(a)$이고, 같은 항목의 (1)에 의해 이것은 $G$의 부분군이다. $aa = aa$이므로 $a \in C_G(a)$이고, [[cyclic-subgroup|순환 부분군]]의 (2)에 의해 $\langle a \rangle \subseteq C_G(a)$이다.

**(2)** [[subgroup-examples|부분군의 예]]의 (5)의 정의에 의해 $a \in Z(G)$인 것은 정확히 모든 $g \in G$에서 $ag = ga$일 때이고, 이것은 정확히 모든 $g$가 $C_G(a)$에 속할 때, 곧 ($C_G(a) \subseteq G$이므로) $C_G(a) = G$일 때이다. $z \in Z(G)$이면 $za = az$이므로 $z \in C_G(a)$이다. $z, w \in Z(G)$이면 $z \in Z(G)$이고 $w \in G$이므로 $zw = wz$이다. [[subgroup|부분군]]의 (3)에 의해 군 $Z(G)$의 곱은 $G$의 곱이므로 $Z(G)$는 아벨군이다.

**(3)** 안정자와 고정점의 (5)의 (v)에 의해 부분군 위의 켤레 작용에서 $H$의 안정자는 $N_G(H)$이고, 같은 항목의 (1)에 의해 이것은 부분군이다.

$h \in H$이면 $hHh^{-1} = H$이다. $k \in H$이면 $H$가 곱과 역원에 닫혀 있으므로 $hkh^{-1} \in H$이고, 따라서 $hHh^{-1} \subseteq H$이다. 거꾸로 $k \in H$이면 $h^{-1}kh \in H$이고, 유한 곱에 의해 $h(h^{-1}kh)h^{-1} = (hh^{-1})k(hh^{-1}) = k$이므로 $k \in hHh^{-1}$이다. 따라서 $H \subseteq N_G(H)$이다.

$N = N_G(H)$라 하자. $H \subseteq N$이고 $H$와 $N$은 $G$의 부분군이므로, 부분군의 (6)에 의해 $H$는 군 $N$의 부분군이다. 부분군의 (1)–(3)에 의해 $N$ 안의 곱과 역원은 $G$의 것이다. $n \in N$, $h \in H$이면 $nhn^{-1} \in nHn^{-1} = H$이므로, [[normal-subgroup|정규부분군]]의 정의에 의해 $H$는 군 $N$의 정규부분군이다.

$K$가 $G$의 부분군이고 $H \subseteq K$이며 $H$가 군 $K$의 정규부분군이라 하자. 정규부분군의 (1)의 조건 (i)과 (iii)이 동치라는 것을 군 $K$에 쓰면 모든 $k \in K$에서 $kHk^{-1} = H$이다(이 집합은 $K$에서 계산하든 $G$에서 계산하든 같다. 부분군의 (1)–(3)). 따라서 $k \in N_G(H)$이고 $K \subseteq N_G(H)$이다.

**(4)** 정규부분군의 (1)의 조건 (i)과 (iii)에 의해 $H$가 정규부분군인 것은 정확히 모든 $g \in G$에서 $gHg^{-1} = H$일 때, 곧 ($N_G(H) \subseteq G$이므로) $N_G(H) = G$일 때이다.

**(5)** (3)에 의해 $N_G(H)$는 부분군이므로 부분군의 (2)에 의해 $g \in N_G(H)$이면 $g^{-1} \in N_G(H)$이고, 같은 것을 $g^{-1}$에 쓰면 $(g^{-1})^{-1} = g$이므로 거꾸로도 성립한다. 정의에 의해 $g^{-1} \in N_G(H)$인 것은 정확히 $g^{-1}H(g^{-1})^{-1} = g^{-1}Hg = H$일 때이다.

이제 $H$가 유한집합이라 하자. (i)에서 (ii)는 정의이다. (ii)에서 (i): [[group-action-examples|군의 작용의 예]]의 (6)의 (i)에 의해 $gHg^{-1}$은 유한집합이고 $|gHg^{-1}| = |H|$이다. $gHg^{-1} \subseteq H$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $gHg^{-1} = H$이다. (ii)와 (iii)이 같은 것은 $gHg^{-1} = \{ghg^{-1} : h \in H\}$이기 때문이다. (iv): 방금 보인 (i)과 (iii)의 동치를 $g^{-1}$에 쓰면, $g^{-1} \in N_G(H)$인 것은 정확히 모든 $h$에서 $g^{-1}h(g^{-1})^{-1} = g^{-1}hg \in H$일 때이고, 첫 문단에 의해 $g^{-1} \in N_G(H)$인 것은 정확히 (i)일 때이다.

**(6)** 안정자와 고정점의 (3)에 의해 모든 $x$에서 $G_{g \cdot x} = gG_xg^{-1}$이다. 켤레 작용에서 $g \cdot a = gag^{-1}$이고 $a$의 안정자가 $C_G(a)$이므로((1)) $C_G(gag^{-1}) = gC_G(a)g^{-1}$이다. 부분군 위의 켤레 작용에서 $g \cdot H = gHg^{-1}$이고 $H$의 안정자가 $N_G(H)$이므로((3)) $N_G(gHg^{-1}) = gN_G(H)g^{-1}$이다.
:::

## 예시와 반례

아래에서 $X = \{1, 2, 3\}$, $S_3 = S_X$([[symmetric-group|대칭군]]의 (5))이고 항등원을 $i_X$로 씁니다. 순환치환은 [[cycle-permutation|순환치환]]의 표기이고, 곱은 오른쪽 치환을 먼저 적용합니다.

:::example[$S_3$에서 $(1\ 2)$의 중심화 부분군과 $\{i_X, (1\ 2)\}$의 정규화 부분군]
$H = \{i_X, (1\ 2)\}$라 합시다. 순환치환의 (5)에 의해 $(1\ 2)(1\ 2) = i_X$이므로 $H = \langle (1\ 2) \rangle$이고, (1)에 의해 $H \subseteq C = C_{S_3}((1\ 2))$입니다. $(1\ 3)(1\ 2)$는 $1, 2, 3$을 각각 $2, 3, 1$로, $(1\ 2)(1\ 3)$은 각각 $3, 1, 2$로 보내므로 서로 다르고, $(1\ 3) \notin C$입니다.

[[order-of-symmetric-group|대칭군의 원소의 개수]]의 (6)에 의해 $|S_3| = 6$이고, [[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 $|C|$는 $6$을 나누며, $H$가 군 $C$의 부분군이므로 $|H| = 2$가 $|C|$를 나눕니다. $|C| = 2t$이고 $2t \mid 6$이면 $t \mid 3$이므로 $t$는 $1$ 또는 $3$입니다([[prime-number|소수]] $3$). $t = 3$이면 $|C| = 6$이고 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $C = S_3$이 되어 $(1\ 3) \notin C$와 어긋나므로 $|C| = 2$이고, 다시 유한집합의 부분집합의 (2)에 의해 $C = H$입니다. (2)에 의해 $Z(S_3) \subseteq C = H$이고 $(1\ 2) \notin Z(S_3)$이므로 $Z(S_3) = \{i_X\}$입니다.

정규화 부분군도 같은 방법으로 구합니다. (3)에 의해 $H \subseteq N_{S_3}(H)$입니다. $(1\ 3)H(1\ 3)^{-1} = \{i_X, (1\ 3)(1\ 2)(1\ 3)\}$이고 $(1\ 3)(1\ 2)(1\ 3)$은 $1, 2, 3$을 각각 $1, 3, 2$로 보내는 $(2\ 3)$이므로 이 집합은 $H$가 아니고, $(1\ 3) \notin N_{S_3}(H)$입니다. 위와 같은 개수 논법으로 $N_{S_3}(H) = H$입니다.
:::

:::counterexample[정규화 부분군은 정규부분군이 아닐 수 있다]
위의 예시에서 $N_{S_3}(H) = H$이고 $(1\ 3)H(1\ 3)^{-1} = \{i_X, (2\ 3)\} \ne H$였습니다. 따라서 [[normal-subgroup|정규부분군]]의 (1)에 의해 $N_{S_3}(H)$는 $S_3$의 정규부분군이 아닙니다. $H$는 $N_{S_3}(H)$의 정규부분군이지만((3)), 그 무대인 $N_{S_3}(H)$ 자신은 $S_3$ 안에서 정규가 아닙니다. 반대로 $H$가 $G$의 정규부분군이면 (4)에 의해 $N_G(H) = G$이므로 정규화 부분군은 정규부분군입니다.
:::

## 확인 질문

:::check[아벨군 $G$에서 $C_G(a)$와 $N_G(H)$는 무엇인가?]
모든 $g$에서 $ga = ag$이므로 $C_G(a) = G$입니다. 또 [[normal-subgroup|정규부분군]]의 (3)에 의해 아벨군의 모든 부분군은 정규부분군이므로, (4)에 의해 모든 부분군 $H$에서 $N_G(H) = G$입니다.
:::

:::check[$C_G(e)$, $N_G(\{e\})$, $N_G(G)$는 무엇인가?]
모든 $g$에서 $ge = g = eg$이므로 $C_G(e) = G$이고, (2)에 의해 $e \in Z(G)$와 같은 말입니다. [[normal-subgroup|정규부분군]]의 (2)에 의해 $\{e\}$와 $G$는 정규부분군이므로 (4)에 의해 $N_G(\{e\}) = N_G(G) = G$입니다.
:::
