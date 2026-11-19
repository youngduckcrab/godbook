---
title: 정규부분군
title_en: Normal Subgroup
aliases: [정규 부분군, 불변부분군, normal subgroup, invariant subgroup]
kind: definition
field: group-theory
msc: ["20A05"]
level: undergrad
summary: 군 G의 부분군 N이 정규부분군인 것은 모든 g ∈ G, n ∈ N에서 gng⁻¹ ∈ N일 때이다. 이것은 모든 g에서 gN = Ng인 것, gNg⁻¹ = N인 것과 같다. 자명한 부분군과 G 자신, 아벨군의 부분군, 준동형의 핵, 두 정규부분군의 교집합, 중심은 정규부분군이다.
requires: [set, subset, set-operations, function, function-composition, injective-surjective-bijective, image-and-preimage, recursion-theorem, group, group-basic-properties, subgroup, subgroup-examples, cyclic-subgroup, left-coset, symmetric-group, general-linear-group, matrix-product-properties, group-homomorphism, homomorphism-kernel-and-image]
sources:
  - ref: judson-abstract-algebra
    loc: 10.1절 Normal Subgroups, 정규부분군의 정의(번호 없음) p.125, Example 10.1, 10.2 p.125, Theorem 10.3 p.125–126. 11.1절 Theorem 11.5 p.135. 10.4절 연습문제 5, 13 p.131
    checked: original
    note: "출처는 H 가 G 에서 정규라는 것을 '모든 g ∈ G 에서 gH = Hg'로 정의한다(p.125). 이 항목은 출처 Theorem 10.3(p.125–126)의 둘째 조건 gNg⁻¹ ⊂ N 의 원소판을 정의로 택하고, 출처의 정의를 (1)의 (ii)로 둔다. Theorem 10.3 의 세 조건과의 대응은 1 ↔ (ii), 2 ↔ 정의 바로 뒤의 문장(모든 g 에서 gNg⁻¹ ⊆ N), 3 ↔ (iii)이다. 출처의 ⊂ 는 ⊆ 의 뜻이다(p.126 을 그림으로 확인했다). 출처는 (3) ⇒ (1) 에서 Ng ⊂ gN 을 'Similarly' 로 넘기고 네 원소의 곱을 괄호 없이 쓴다. 이 항목은 두 방향을 모두 쓰고 결합법칙을 한 번씩 쓴다. (iv)의 꼴 g⁻¹ng ∈ N 은 Theorem 10.3 의 증명((2) ⇒ (3), p.126), Proposition 11.4 의 4 의 증명(p.134), Theorem 11.12 의 증명(p.136)에 나온다. 출처 10장은 집합 gNg⁻¹ 를 따로 정의하지 않고, 3장 연습문제 54(p.43)가 gHg⁻¹ = {ghg⁻¹ : h ∈ H} 로 정의한다. x 를 gxg⁻¹ 로 보내는 함수는 출처 힌트 10.4.11(p.326)과 11.5절 연습문제 2(p.139)의 i_g 이다. 6장 연습문제 12(p.79)는 (1)의 (i)에서 (ii)로 가는 방향이고, 10장 읽기 질문 4(p.130)는 정규와 동치인 진술을 묻는다. (2): 자명한 부분군이 정규라는 것은 출처 p.134 가 핵의 정규성을 말하며 쓴다('the trivial subgroup is normal in H'). G 자신이 정규라는 진술은 찾지 못했다(검색어 'G itself' 1건은 14장, 'is normal in itself' 0건, '{e} and G' 2건은 13장의 합성열). (3)은 출처 Example 10.1(p.125)이고 증명도 같은 계산(gh = hg)이다. (4)는 출처 Theorem 11.5(p.135)이다. 출처는 Proposition 11.4 의 4(정규부분군의 역상은 정규)에 자명한 부분군을 넣어 얻고, 이 항목은 준동형의 핵과 상의 (6)으로 얻는다. (5)의 교집합은 출처 10장 연습문제 5, 중심은 10장 연습문제 13(c)(p.131)이다. (6)은 출처 Theorem 11.12 의 증명(p.136, 'H ∩ N is normal in H')과 같은 계산이다. 예시 '0 이 아닌 스칼라 행렬'은 출처 10장 연습문제 13(b)(GL₂(ℝ) 의 중심을 구하라)와 (c)(중심은 정규)를 이은 것과 같은 발상이다. 반례 '점 하나를 고정하는 치환 전체'는 X = {1, 2, 3}, z = 3 으로 두면 출처 Example 10.2(p.125)의 H = {(1), (1 2)} 와 같은 대상이다. 출처는 (1 2 3)H ≠ H(1 2 3) 으로 보이고, 이 항목은 순환 표기 없이 sts⁻¹ ∉ H 를 계산한다. 10장 읽기 질문 1, 2(p.130)도 같은 부분군을 묻는다. 첫째 확인 질문(중심의 원소가 생성하는 순환 부분군)은 출처 Theorem 15.4 의 증명(p.182)이 중심 Z(G) 의 원소 g 가 생성하는 부분군 N 을 'Z(G) 의 모든 원소는 G 의 모든 원소와 교환되므로 G 에서 정규'라고 하는 것과 같은 결론이다. 출처는 정규부분군을 나타내는 기호를 쓰지 않는다(검색어 '◁|⊴|⊳' 0건)."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 단원 글의 '같다'를 '동형'으로, 근거 누락과 출처 예와 겹치는 것을 고침"
added: 2026-11-19
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이며 $N$이 $G$의 [[subgroup|부분군]]이라 하자. 곱 $ab$와 역원 $a^{-1}$은 [[group|군]]의 표기이고, 세 원소의 곱 $gng^{-1}$은 그 항목의 약속대로 $(gn)g^{-1} = g(ng^{-1})$이다. 왼쪽 잉여류 $aN$과 오른쪽 잉여류 $Na$는 [[left-coset|잉여류]]의 것이다.

$N$이 $G$의 **정규부분군**(normal subgroup)인 것은 정확히 모든 $g \in G$와 모든 $n \in N$에 대하여 $gng^{-1} \in N$일 때이다. "$N$은 $G$의 정규부분군이다"는 기호로 줄이지 않고 이렇게 말로 쓴다.

$g \in G$일 때 [[group-basic-properties|군의 기본 성질]]의 (10)의 왼쪽 곱 $L_g$와 오른쪽 곱 $R_{g^{-1}}$의 [[function-composition|합성]] $L_g \circ R_{g^{-1}} : G \to G$는 각 $x \in G$를 $g(xg^{-1}) = gxg^{-1}$로 보낸다. 이 함수에 의한 $N$의 [[image-and-preimage|상]]을
$$gNg^{-1} = (L_g \circ R_{g^{-1}})(N) = \{gng^{-1} : n \in N\}$$
로 쓴다. 곧 $x \in G$에 대하여 $x \in gNg^{-1}$인 것은 정확히 $x = gng^{-1}$인 $n \in N$이 있을 때이다. 따라서 $N$이 $G$의 정규부분군인 것은 정확히 모든 $g \in G$에서 $gNg^{-1} \subseteq N$일 때이다.

다음이 성립한다.

1. (동치 조건) $G$의 부분군 $N$에 대하여 다음 네 조건은 서로 동치이다.
   - (i) $N$은 $G$의 정규부분군이다.
   - (ii) 모든 $g \in G$에서 $gN = Ng$이다. 곧 대표마다 왼쪽 잉여류와 오른쪽 잉여류가 같다.
   - (iii) 모든 $g \in G$에서 $gNg^{-1} = N$이다.
   - (iv) 모든 $g \in G$와 모든 $n \in N$에 대하여 $g^{-1}ng \in N$이다.
2. (자명한 부분군과 $G$ 자신) $\{e\}$와 $G$는 $G$의 정규부분군이다.
3. (아벨군) $G$가 아벨군이면 $G$의 모든 부분군은 $G$의 정규부분군이다.
4. (핵) $G'$이 군이고 $\varphi : G \to G'$이 [[group-homomorphism|군 준동형]]이면 [[homomorphism-kernel-and-image|준동형의 핵]] $\operatorname{Ker} \varphi$는 $G$의 정규부분군이다.
5. (교집합과 중심) $N_1$과 $N_2$가 $G$의 정규부분군이면 $N_1 \cap N_2$는 $G$의 정규부분군이다. [[subgroup-examples|부분군의 예와 교집합]]의 (5)의 중심 $Z(G)$는 $G$의 정규부분군이다.
6. (부분군과의 교집합) $N$이 $G$의 정규부분군이고 $H$가 $G$의 부분군이면, $H \cap N$은 군 $H$의 정규부분군이다.
:::

:::english
Let $G$ be a group with identity $e$, and let $N$ be a subgroup of $G$. Products $ab$ and inverses $a^{-1}$ are written as in the entry on groups, and the product of three elements $gng^{-1}$ means $(gn)g^{-1} = g(ng^{-1})$, by the convention of that entry. Left cosets $aN$ and right cosets $Na$ are those of the entry on cosets.

$N$ is a **normal subgroup** of $G$ exactly when $gng^{-1} \in N$ for every $g \in G$ and every $n \in N$. The phrase "$N$ is a normal subgroup of $G$" is written out in words and not abbreviated by a symbol.

For $g \in G$, the composite $L_g \circ R_{g^{-1}} : G \to G$ of the left multiplication $L_g$ and the right multiplication $R_{g^{-1}}$ of item (10) of the entry on basic properties of groups sends each $x \in G$ to $g(xg^{-1}) = gxg^{-1}$. The image of $N$ under this function is written
$$gNg^{-1} = (L_g \circ R_{g^{-1}})(N) = \{gng^{-1} : n \in N\}.$$
That is, for $x \in G$, $x \in gNg^{-1}$ exactly when $x = gng^{-1}$ for some $n \in N$. Hence $N$ is a normal subgroup of $G$ exactly when $gNg^{-1} \subseteq N$ for every $g \in G$.

The following hold.

1. (Equivalent conditions) For a subgroup $N$ of $G$, the following four conditions are equivalent.
   - (i) $N$ is a normal subgroup of $G$.
   - (ii) $gN = Ng$ for every $g \in G$; that is, for each representative the left coset and the right coset coincide.
   - (iii) $gNg^{-1} = N$ for every $g \in G$.
   - (iv) $g^{-1}ng \in N$ for every $g \in G$ and every $n \in N$.
2. (The trivial subgroup and $G$ itself) $\{e\}$ and $G$ are normal subgroups of $G$.
3. (Abelian groups) If $G$ is abelian, then every subgroup of $G$ is a normal subgroup of $G$.
4. (Kernels) If $G'$ is a group and $\varphi : G \to G'$ is a group homomorphism, then the kernel $\operatorname{Ker} \varphi$ is a normal subgroup of $G$.
5. (Intersections and the center) If $N_1$ and $N_2$ are normal subgroups of $G$, then $N_1 \cap N_2$ is a normal subgroup of $G$. The center $Z(G)$ of item (5) of the entry on examples of subgroups is a normal subgroup of $G$.
6. (Intersection with a subgroup) If $N$ is a normal subgroup of $G$ and $H$ is a subgroup of $G$, then $H \cap N$ is a normal subgroup of the group $H$.
:::

## 직관

$gng^{-1}$은 "$g$로 자리를 옮기고, $n$을 하고, 다시 돌아오는" 원소입니다. 치환으로 보면 이것은 $n$을 이름표만 바꿔 다시 쓴 것입니다. 아래 반례에서 $x$와 $y$를 맞바꾸는 치환 $t$에 $y$와 $z$를 맞바꾸는 $s$로 이름표를 바꾸면 $sts^{-1}$은 $x$와 $z$를 맞바꾸는 치환이 됩니다. 정규부분군은 이렇게 $G$의 어떤 원소로 이름표를 바꾸어도 빠져나가지 않는 부분군입니다. 비유에서 "어떤 원소로 바꾸어도"가 정의의 "모든 $g \in G$"에, "빠져나가지 않는다"가 "$gng^{-1} \in N$"에 해당합니다.

(1)은 같은 성질을 네 가지로 말합니다. 그 가운데 (ii)는 대표마다 왼쪽 잉여류와 오른쪽 잉여류가 같다는 것입니다. [[left-coset|잉여류]]의 반례에서 보듯 일반적인 부분군에서는 둘이 다를 수 있습니다. 아벨군에서는 $gng^{-1} = n$이므로 모든 부분군이 정규부분군이고((3)), 중심의 원소도 모든 원소와 교환되므로 같은 계산이 됩니다((5)).

이 사이트가 정의를 $gng^{-1} \in N$의 꼴로 둔 까닭 가운데 하나는 [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (6)이 바로 이 꼴이어서 핵이 정규부분군이라는 것((4))이 곧바로 나온다는 것입니다. 이 단원의 [[quotient-group|몫군]]에서는 이 조건이 잉여류끼리의 곱이 대표에 따르지 않을 조건과 정확히 같다는 것을 봅니다.

## 성질의 증명

:::proof
아래에서 "기본 성질의 ($k$)"는 [[group-basic-properties|군의 기본 성질]]의 ($k$), "부분군의 ($k$)"는 [[subgroup|부분군]]의 ($k$)이다. 결합법칙은 [[group|군]]의 (1)이다.

**정의가 뜻을 갖는 것.** 기본 성질의 (10)에 의해 $L_g$와 $R_{g^{-1}}$은 $G$에서 $G$로의 함수이므로 합성 $L_g \circ R_{g^{-1}} : G \to G$가 있고, $x \in G$에서의 값은 $L_g(R_{g^{-1}}(x)) = L_g(xg^{-1}) = g(xg^{-1})$이다. [[group|군]]의 표기의 약속에 의해 이것은 $gxg^{-1}$이다. [[image-and-preimage|상과 역상]]의 (1)에 의해 $gNg^{-1}$은 $G$의 부분집합이고, $x \in gNg^{-1}$인 것은 정확히 $x = gng^{-1}$인 $n \in N$이 있을 때이다. 모든 $n \in N$에서 $gng^{-1} \in N$인 것은 이 문장에 의해 정확히 $gNg^{-1} \subseteq N$일 때이므로, 정의는 "모든 $g \in G$에서 $gNg^{-1} \subseteq N$"과 같다.

먼저 쓸 계산 하나를 보인다. 이것을 "(가)"라 부른다. **(가)** $g, n \in G$이고 $m = g^{-1}ng = (g^{-1}n)g$이면 $gm = ng$이다. 결합법칙을 두 번 쓰면
$$gm = g\bigl((g^{-1}n)g\bigr) = \bigl(g(g^{-1}n)\bigr)g = \bigl((gg^{-1})n\bigr)g = (en)g = ng$$
이기 때문이다.

**(1)** (i)과 (iv): (i)을 가정하고 $g \in G$, $n \in N$이라 하자. (i)을 $g^{-1}$과 $n$에 쓰면 $g^{-1}n(g^{-1})^{-1} \in N$이고, 기본 성질의 (5)에 의해 $(g^{-1})^{-1} = g$이므로 $g^{-1}ng \in N$이다. 거꾸로 (iv)를 가정하면, (iv)를 $g^{-1}$과 $n$에 쓰고 같은 (5)를 쓰면 $gng^{-1} = (g^{-1})^{-1}ng^{-1} \in N$이다. 따라서 (i)과 (iv)는 동치이다.

(i)에서 (iii): (i)을 가정하고 $g \in G$라 하자. 앞 문단에 의해 $gNg^{-1} \subseteq N$이다. $n \in N$이면 (iv)에 의해 $m = g^{-1}ng \in N$이고, (가)에 의해
$$gmg^{-1} = (gm)g^{-1} = (ng)g^{-1} = n(gg^{-1}) = ne = n$$
이므로 $n \in gNg^{-1}$이다. 따라서 $N \subseteq gNg^{-1}$이고 $gNg^{-1} = N$이다.

(iii)에서 (i): (iii)을 가정하면 모든 $g$에서 $gNg^{-1} = N \subseteq N$이므로, 정의를 바꿔 쓴 꼴에 의해 $N$은 정규부분군이다.

(i)에서 (ii): (i)을 가정하고 $g \in G$라 하자. $x \in gN$이면 $x = gn$인 $n \in N$이 있다. 결합법칙에 의해
$$(gng^{-1})g = \bigl((gn)g^{-1}\bigr)g = (gn)(g^{-1}g) = (gn)e = gn = x$$
이고 $gng^{-1} \in N$이므로 $x \in Ng$이다. $x \in Ng$이면 $x = ng$인 $n \in N$이 있다. (iv)에 의해 $m = g^{-1}ng \in N$이고 (가)에 의해 $gm = ng = x$이므로 $x \in gN$이다. 따라서 $gN = Ng$이다.

(ii)에서 (i): (ii)를 가정하고 $g \in G$, $n \in N$이라 하자. $gn \in gN = Ng$이므로 $gn = n'g$인 $n' \in N$이 있다. 그러면
$$gng^{-1} = (gn)g^{-1} = (n'g)g^{-1} = n'(gg^{-1}) = n'e = n' \in N$$
이다. 따라서 (i)이 성립한다.

**(2)** 부분군의 (4)에 의해 $\{e\}$와 $G$는 $G$의 부분군이다. $g \in G$이면 $geg^{-1} = (ge)g^{-1} = gg^{-1} = e \in \{e\}$이다. $g, n \in G$이면 $gng^{-1}$은 $G$의 원소이다.

**(3)** $H$가 $G$의 부분군이고 $g \in G$, $n \in H$라 하자. $G$가 아벨군이므로 $gn = ng$이고, $gng^{-1} = (gn)g^{-1} = (ng)g^{-1} = n(gg^{-1}) = ne = n \in H$이다.

**(4)** [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (1)에 의해 $\operatorname{Ker} \varphi$는 $G$의 부분군이고, 같은 항목의 (6)에 의해 모든 $g \in G$와 $k \in \operatorname{Ker} \varphi$에서 $gkg^{-1} \in \operatorname{Ker} \varphi$이다.

**(5)** [[subgroup-examples|부분군의 예와 교집합]]의 (4)에 의해 $N_1 \cap N_2$는 $G$의 부분군이다. $g \in G$이고 $n \in N_1 \cap N_2$이면 $n \in N_1$이므로 $gng^{-1} \in N_1$이고, $n \in N_2$이므로 $gng^{-1} \in N_2$이다. 따라서 $gng^{-1} \in N_1 \cap N_2$이다. 중심: 같은 항목의 (5)에 의해 $Z(G)$는 $G$의 부분군이다. $g \in G$이고 $a \in Z(G)$이면 $ag = ga$이므로 $gag^{-1} = (ga)g^{-1} = (ag)g^{-1} = a(gg^{-1}) = ae = a \in Z(G)$이다.

**(6)** [[subgroup-examples|부분군의 예와 교집합]]의 (4)에 의해 $H \cap N$은 $G$의 부분군이고, $H \cap N \subseteq H$이므로 부분군의 (6)에 의해 군 $H$의 부분군이다. 부분군의 (2)와 (3)에 의해 군 $H$에서의 곱과 역원은 $G$에서의 것과 같다. $h \in H$이고 $n \in H \cap N$이라 하자. $h$, $n$, $h^{-1}$이 모두 $H$에 속하고 $H$는 곱에 대해 닫혀 있으므로 $hnh^{-1} = (hn)h^{-1} \in H$이다. $N$이 $G$의 정규부분군이고 $n \in N$이므로 $hnh^{-1} \in N$이다. 따라서 $hnh^{-1} \in H \cap N$이다. $\blacksquare$
:::

## 예시와 반례

:::example[0이 아닌 스칼라 행렬]
$n$을 자연수라 하고 $\mathcal{D} = \{cI_n : c \in \mathbb{R},\ c \ne 0\}$이라 합시다. [[subgroup-examples|부분군의 예와 교집합]]의 (7)에 의해 $\mathcal{D}$는 [[general-linear-group|일반선형군]] $GL_n(\mathbb{R})$의 부분군이고, 일반선형군의 (2)에 의해 이 군의 곱은 행렬의 곱입니다. $A \in GL_n(\mathbb{R})$이고 $c$가 $0$이 아닌 실수이면 [[matrix-product-properties|행렬의 곱의 성질]]의 (3)과 (4)에 의해
$$(cI_n)A = c(I_nA) = cA = c(AI_n) = A(cI_n)$$
입니다. 따라서 $cI_n$은 중심 $Z(GL_n(\mathbb{R}))$에 속합니다. 일반선형군의 (2)에 의해 $A^{-1}$은 이 군에서 $A$의 역원이므로 $AA^{-1} = I_n$이고, 결합법칙과 행렬의 곱의 성질의 (4)에 의해
$$A(cI_n)A^{-1} = \bigl((cI_n)A\bigr)A^{-1} = (cI_n)(AA^{-1}) = (cI_n)I_n = cI_n \in \mathcal{D}$$
입니다. 곧 $\mathcal{D}$는 $GL_n(\mathbb{R})$의 정규부분군입니다. $n \ge 2$이면 일반선형군의 (3)에 의해 $GL_n(\mathbb{R})$은 아벨군이 아니므로, 이것은 아벨군이 아닌 군의 정규부분군의 예입니다.
:::

:::counterexample[점 하나를 고정하는 치환 전체는 정규부분군이 아닐 수 있다]
$X$를 서로 다른 세 원소 $x$, $y$, $z$를 갖는 집합이라 하고, $H = \{f \in S_X : f(z) = z\}$라 합시다. [[subgroup-examples|부분군의 예와 교집합]]의 (6)에 의해 $H$는 [[symmetric-group|대칭군]] $S_X$의 부분군이고, 대칭군의 (1)에 의해 곱 $fg$는 합성 $f \circ g$입니다.

$X$의 각 원소 $w$에 대하여 $w = x$이면 $y$를, $w = y$이면 $x$를, $w$가 $x$도 $y$도 아니면 $w$를 정합니다. $x \ne y$이므로 각 $w$에 정해지는 원소는 하나이고, [[recursion-theorem|재귀 정리]]의 (1)에 의해 이것은 함수 $t : X \to X$입니다. 같은 방법으로 $y$와 $z$를 맞바꾸고 나머지는 그대로 두는 함수 $s : X \to X$를 정합니다. $t(t(x)) = t(y) = x$, $t(t(y)) = t(x) = y$이고, $w$가 $x$도 $y$도 아니면 $t(t(w)) = t(w) = w$이므로 $t \circ t = i_X$입니다. 그러면 $t$는 [[injective-surjective-bijective|전단사]]입니다. $t(a) = t(b)$이면 $a = t(t(a)) = t(t(b)) = b$이고, $b \in X$이면 $b = t(t(b))$이기 때문입니다. 같은 계산으로 $s \circ s = i_X$이고 $s$도 전단사입니다. 따라서 $t, s \in S_X$이고, $ss = i_X$이므로 [[group-basic-properties|군의 기본 성질]]의 (3)에 의해 $s^{-1} = s$입니다.

$z$는 $x$도 $y$도 아니므로 $t(z) = z$이고 $t \in H$입니다. 한편 $s(z) = y$, $t(y) = x$이고 $x$는 $y$도 $z$도 아니므로 $s(x) = x$입니다. 따라서
$$(sts^{-1})(z) = (sts)(z) = s\bigl(t(s(z))\bigr) = s(t(y)) = s(x) = x \ne z$$
이고 $sts^{-1} \notin H$입니다. $s \in S_X$, $t \in H$에서 정의의 조건이 깨지므로 $H$는 $S_X$의 정규부분군이 아닙니다. (1)에 의해 $sH \ne Hs$이기도 합니다.
:::

## 확인 질문

:::check[$a$가 중심 $Z(G)$의 원소이면 순환 부분군 $\langle a \rangle$는 $G$의 정규부분군인가?]
그렇습니다. [[subgroup-examples|부분군의 예와 교집합]]의 (5)에 의해 $Z(G)$는 $a$를 포함하는 부분군이므로, [[cyclic-subgroup|순환 부분군]]의 (1)과 (2)에 의해 $\langle a \rangle$는 $G$의 부분군이고 $\langle a \rangle \subseteq Z(G)$입니다. $g \in G$이고 $x \in \langle a \rangle$이면 $x \in Z(G)$이므로 $xg = gx$이고, $gxg^{-1} = (gx)g^{-1} = (xg)g^{-1} = x(gg^{-1}) = x \in \langle a \rangle$입니다. 같은 계산으로 $Z(G)$에 포함되는 $G$의 부분군은 모두 정규부분군입니다.
:::

:::check[$G$의 정규부분군 $N$이 $N = \{e, a\}$이고 $a \ne e$이면 $a$는 중심 $Z(G)$에 속하는가?]
속합니다. $g \in G$라 합시다. 정의에 의해 $gag^{-1} \in N$이므로 $gag^{-1} = e$이거나 $gag^{-1} = a$입니다. $gag^{-1} = e$이면 $(ga)g^{-1} = e$이므로 [[group-basic-properties|군의 기본 성질]]의 (3)과 (5)에 의해 $ga = (g^{-1})^{-1} = g = ge$이고, 같은 항목의 (7)의 왼쪽 소거에 의해 $a = e$가 되어 가정에 어긋납니다. 따라서 $gag^{-1} = a$이고, 양변에 오른쪽에서 $g$를 곱하면 $ga = \bigl((ga)g^{-1}\bigr)g = ag$입니다($(ga)(g^{-1}g) = ga$). 모든 $g$에서 $ga = ag$이므로 $a \in Z(G)$입니다.
:::
