---
title: 환의 제1 동형 정리
title_en: First Isomorphism Theorem for Rings
aliases: [환의 준동형 정리, first isomorphism theorem for rings, R/Ker φ ≅ φ(R)]
kind: theorem
field: ring-theory
msc: ["16"]
level: undergrad
summary: 환 준동형 φ에 대하여 a + Ker φ를 φ(a)로 보내는 함수 η는 몫환 R/Ker φ에서 상 φ(R)로의 환 동형사상이고, 그런 함수는 하나뿐이다. 덧셈과 전단사는 군의 제1 동형 정리에서 오고 곱의 보존만 새로 확인한다. 전사이면 R/Ker φ ≅ R′, 단사이면 R ≅ φ(R)이다.
requires: [set, subset, function, function-composition, injective-surjective-bijective, binary-operation, well-ordering-principle, integer-cancellation, real-number-arithmetic, vector-space, matrix, matrix-product-properties, group, number-groups, subgroup-examples, left-coset, quotient-group, first-isomorphism-theorem, integers-modulo-n, ring, ring-examples, subring, ring-homomorphism, ideal, quotient-ring]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 16.3절 Theorem 16.31 p.197–198, Theorem 16.32–16.34 p.198. 16.7절 연습문제 20–22 p.206
    checked: original
    note: "출처 Theorem 16.31(p.197–198)은 'ψ : R → S 가 환 준동형이면 ker ψ 는 R 의 아이디얼이다. ϕ : R → R/ker ψ 가 표준 준동형이면 ψ = ηϕ 인 유일한 동형사상 η : R/ker ψ → ψ(R) 가 있다'이다. 출처의 증명은 군의 제1 동형 정리로 덧셈군 사이의 준동형 η(r + K) = ψ(r) 를 얻고, 곱의 보존 η((r + K)(s + K)) = η(rs + K) = ψ(rs) = ψ(r)ψ(s) = η(r + K)η(s + K) 만 확인한다(p.198 을 그림으로 확인했다). 이 항목의 증명도 같은 길이고, 군의 정리가 주는 군 R/K 와 군 ψ(R) 가 각각 환 R/K 와 부분환 ψ(R) 의 덧셈군이라는 것을 덧붙인다. 출처는 ψ(R) 이 환이라는 것을 따로 말하지 않는다. 핵이 아이디얼이라는 출처의 첫 문장은 이 사이트에서는 아이디얼의 (5)이다. (2)의 등식 ψ = ηϕ 는 출처에서 공역이 다른 두 함수의 등식으로 적혀 있고, 이 항목은 포함 함수 ι 를 넣어 φ = ι ∘ η ∘ π 로 쓴다. (3), (4), (5)는 출처에 명제로 없다. (4)의 (ii)의 ℤ/mℤ ≅ ℤ_m 은 출처 Example 16.36, 16.39(p.199)가 증명 없이 쓰는 것과 같다(검색어 'Z/nZ|Z/pZ' 3건은 Example 10.6, 16.36, 16.39). (5)는 출처에서 찾지 못했다(검색어 'one-to-one.{0,40}(ring )?homomorphism|injective homomorphism|embedding|embedded' 6건은 11장, 16장 정의, 18장 분수체와 23장). 출처 18장 Theorem 18.4(p.227)가 정역을 그 분수체 안의 상과 같이 보는 것과 같은 종류의 진술이다. 출처는 제2 동형 정리, 제3 동형 정리, 대응 정리를 Theorem 16.32–16.34(p.198)로 진술하고 증명은 연습문제 16.20–16.22(p.206)로 둔다. 이 항목은 이 셋을 싣지 않는다. 예시(실수와 스칼라 행렬)는 출처에서 찾지 못했다(검색어 'scalar matri|cI'). 출처 연습문제 16.10(p.205, ℂ 에서 M₂(ℝ) 로의 사상이 상 위로의 동형사상)과 같은 종류이다. 반례(ℤ 와 2ℤ)는 출처에서 찾지 못했다(검색어 '2Z|4Z' 1건은 3.3절의 짝수, 'isomorphic to Z|not isomorphic' 10건은 9장, 12장, 16장 연습문제 7). 출처 연습문제 16.7, 16.8(p.205, ℝ 과 ℂ, ℚ(√2) 와 ℚ(√3) 이 환으로 동형이 아님을 보여라)과 같은 종류의 물음이다. 두 확인 질문은 출처에서 찾지 못했다(같은 검색)."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 일반 문장으로 읽히는 반례 제목(n = 1, 영환, 체인 경우)을 좁히고 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$(R, +, \cdot)$와 $(R', +', \cdot')$이 [[ring|환]]이고 $\varphi : R \to R'$이 [[ring-homomorphism|환 준동형]]이라 하자. 핵 $\operatorname{Ker} \varphi$, 상 $\varphi(R)$, 환 동형사상과 $\cong$은 그 항목의 것이고, 그 항목의 (3)의 (i)에 의해 $\varphi(R)$은 $R'$의 [[subring|부분환]]이므로 $R'$의 두 연산을 제한한 환이다. $K = \operatorname{Ker} \varphi$라 하자. [[ideal|아이디얼]]의 (5)에 의해 $K$는 $R$의 아이디얼이므로 [[quotient-ring|몫환]] $R/K$와 표준 준동형 $\pi : R \to R/K$, $\pi(a) = a + K$가 있다.

1. (환의 제1 동형 정리) 함수 $\eta : R/K \to \varphi(R)$로서 모든 $a \in R$에서
$$\eta(a + K) = \varphi(a)$$
인 것이 정확히 하나 있고, $\eta$는 환 $R/K$에서 환 $\varphi(R)$로의 환 동형사상이다. 따라서 $R/\operatorname{Ker} \varphi \cong \varphi(R)$이다.
2. (표준 준동형과의 관계) 모든 $a \in R$에서 $\eta(\pi(a)) = \varphi(a)$이다. 곧 $\iota : \varphi(R) \to R'$이 포함 함수(모든 $y \in \varphi(R)$에서 $\iota(y) = y$)이면 $\varphi = \iota \circ \eta \circ \pi$이다.
3. (전사인 경우) $\varphi : R \to R'$이 전사이면 $\varphi(R) = R'$이고 $\eta$는 환 $R/K$에서 환 $R'$으로의 환 동형사상이다. 따라서 $R/\operatorname{Ker} \varphi \cong R'$이다.
4. (따름)
   - (i) 모든 환 $R$에서 $R/\{0\} \cong R$이다. $R/\{0\}$의 원소는 $a + \{0\} = \{a\}$ ($a \in R$)이고, 동형사상은 각 $\{a\}$를 $a$로 보낸다.
   - (ii) $m$이 자연수이면, 각 정수 $n$에 $[n] \in \mathbb{Z}_m$을 대응시키는 환 준동형 $f : \mathbb{Z} \to \mathbb{Z}_m$([[ring-homomorphism|환 준동형]]의 (7)의 (i))에 이 정리를 쓰면 $\mathbb{Z}/m\mathbb{Z} \cong \mathbb{Z}_m$이고, 이때 $\eta$는 $\mathbb{Z}_m$의 항등함수이다. [[quotient-ring|몫환]]의 (6)은 더 나아가 두 환이 같은 환이라고 말한다.
5. (단사인 경우) $\varphi$가 단사이면 $\varphi$를 함수 $\varphi : R \to \varphi(R)$로 선언한 것은 환 $R$에서 환 $\varphi(R)$로의 환 동형사상이다. 따라서 $R \cong \varphi(R)$이다.
:::

:::english
Let $(R, +, \cdot)$ and $(R', +', \cdot')$ be rings and $\varphi : R \to R'$ a ring homomorphism. The kernel $\operatorname{Ker} \varphi$, the image $\varphi(R)$, ring isomorphisms and $\cong$ are as in the entry on ring homomorphisms; by item (3)(i) of that entry, $\varphi(R)$ is a subring of $R'$, hence a ring with the two operations of $R'$ restricted. Let $K = \operatorname{Ker} \varphi$. By item (5) of the entry on ideals, $K$ is an ideal of $R$, so there are the quotient ring $R/K$ and the canonical homomorphism $\pi : R \to R/K$, $\pi(a) = a + K$.

1. (First isomorphism theorem for rings) There is exactly one function $\eta : R/K \to \varphi(R)$ such that, for all $a \in R$,
$$\eta(a + K) = \varphi(a),$$
and $\eta$ is a ring isomorphism from the ring $R/K$ to the ring $\varphi(R)$. Hence $R/\operatorname{Ker} \varphi \cong \varphi(R)$.
2. (Relation to the canonical homomorphism) $\eta(\pi(a)) = \varphi(a)$ for all $a \in R$. That is, if $\iota : \varphi(R) \to R'$ is the inclusion ($\iota(y) = y$ for all $y \in \varphi(R)$), then $\varphi = \iota \circ \eta \circ \pi$.
3. (The surjective case) If $\varphi : R \to R'$ is surjective, then $\varphi(R) = R'$ and $\eta$ is a ring isomorphism from the ring $R/K$ to the ring $R'$. Hence $R/\operatorname{Ker} \varphi \cong R'$.
4. (Consequences)
   - (i) For every ring $R$, $R/\{0\} \cong R$. The elements of $R/\{0\}$ are $a + \{0\} = \{a\}$ ($a \in R$), and the isomorphism sends each $\{a\}$ to $a$.
   - (ii) If $m$ is a natural number, applying this theorem to the ring homomorphism $f : \mathbb{Z} \to \mathbb{Z}_m$ that assigns $[n] \in \mathbb{Z}_m$ to each integer $n$ (item (7)(i) of the entry on ring homomorphisms) gives $\mathbb{Z}/m\mathbb{Z} \cong \mathbb{Z}_m$, and here $\eta$ is the identity function of $\mathbb{Z}_m$. Item (6) of the entry on quotient rings says more: the two rings are the same ring.
5. (The injective case) If $\varphi$ is injective, then $\varphi$, declared as a function $\varphi : R \to \varphi(R)$, is a ring isomorphism from the ring $R$ to the ring $\varphi(R)$. Hence $R \cong \varphi(R)$.
:::

## 직관

환 준동형 $\varphi$는 핵 $K$에 속하는 차이를 지워 버립니다. $a - b \in K$이면 $\varphi(a) = \varphi(b)$이기 때문입니다. 그러니 $R$에서 $K$만큼의 차이를 "없는 것으로 친" 몫환 $R/K$를 만들면, 그것은 $\varphi$가 실제로 닿는 곳 $\varphi(R)$과 똑같은 모양이 됩니다. 사진에 비유하면, 같은 사진이 찍히는 대상들을 하나로 묶은 것($R/K$의 원소)과 찍힌 사진들($\varphi(R)$의 원소)이 하나씩 짝을 이룬다는 것입니다. 짝짓기가 함수 $\eta$이고, "같은 사진이 찍힌다"가 $a + K = b + K$에 해당합니다.

덧셈만 보면 이것은 6단원의 [[first-isomorphism-theorem|제1 동형 정리]]를 덧셈군에 쓴 것과 같습니다. $\eta$가 정확히 하나 있고 전단사이며 덧셈을 보존한다는 것은 거기서 그대로 옵니다. 환에서 새로 확인할 것은 곱셈 하나이고, 그것은 몫환의 곱 $(a + K)(b + K) = ab + K$와 $\varphi(ab) = \varphi(a)\varphi(b)$를 나란히 놓으면 끝납니다.

## 증명

:::idea
덧셈군 $(R, +)$, $(R', +')$에 군의 [[first-isomorphism-theorem|제1 동형 정리]]를 쓰면 $\eta$가 정해지고 전단사이며 덧셈을 보존한다. 곱은 $\eta(ab + K) = \varphi(ab) = \varphi(a)\varphi(b)$ 한 줄이다.
:::

:::hint
군의 정리가 말하는 군 $G/K$와 군 $\varphi(G)$가 각각 환 $R/K$와 환 $\varphi(R)$의 덧셈군과 같다는 것부터 확인한다.
:::

:::proof
아래에서 "준동형의 ($k$)"는 [[ring-homomorphism|환 준동형]]의 ($k$), "몫환의 ($k$)"는 [[quotient-ring|몫환]]의 ($k$), "군의 정리의 ($k$)"는 [[first-isomorphism-theorem|제1 동형 정리]]의 ($k$)이다.

**(1)** [[ring|환]]의 정의에 의해 $(R, +)$와 $(R', +')$은 덧셈 표기의 아벨군이고, 준동형의 (1)에 의해 $\varphi$는 $(R, +)$에서 $(R', +')$으로의 군 준동형이며 그 핵은 $K$이다. 군의 정리의 (1)을 이 군 준동형에 쓰면(그 항목의 끝 문장의 덧셈 표기로), 함수 $\eta : R/K \to \varphi(R)$로서 모든 $a \in R$에서 $\eta(a + K) = \varphi(a)$인 것이 정확히 하나 있고, $\eta$는 군 $R/K$에서 군 $\varphi(R)$로의 동형사상이다. 여기서 군 $R/K$의 덧셈은 [[quotient-group|몫군]]의 (2), (6)의 $(a + K) + (b + K) = (a + b) + K$이고, 몫환의 진술 머리에 의해 이것은 환 $R/K$의 덧셈이다. 군 $\varphi(R)$은 $R'$의 덧셈을 제한한 군이고, [[subring|부분환]]의 (1)에 의해 환 $\varphi(R)$의 덧셈도 $R'$의 덧셈과 같다. 따라서 $\eta$는 전단사이고 두 환의 덧셈을 보존한다.

곱셈: $P, Q \in R/K$이면 $P = a + K$, $Q = b + K$인 $a, b \in R$이 있다. 몫환의 (2), $\eta$의 등식, 환 준동형의 정의에 의해
$$\eta(PQ) = \eta(ab + K) = \varphi(ab) = \varphi(a)\varphi(b) = \eta(P)\eta(Q)$$
이다. 마지막 곱은 $R'$에서 계산한 것이고, 부분환의 (1)에 의해 환 $\varphi(R)$에서의 곱과 같다. 따라서 $\eta$는 환 준동형이고 전단사이므로 환 동형사상이다. 준동형의 정의에 의해 $R/\operatorname{Ker} \varphi \cong \varphi(R)$이다.

**(2)** 모든 $a \in R$에서 $\pi(a) = a + K$이므로 (1)의 등식에 의해 $\eta(\pi(a)) = \eta(a + K) = \varphi(a)$이다. [[function-composition|합성]]의 정의에 의해 $(\iota \circ \eta \circ \pi)(a) = \iota(\varphi(a)) = \varphi(a)$이고, 두 함수 $\varphi$와 $\iota \circ \eta \circ \pi$는 정의역이 $R$로 같고 모든 원소에서 값이 같으므로 [[function|함수]]의 같음에 의해 같다.

**(3)** 준동형의 (3)의 (i)에 의해 $\varphi(R) = R'$이다. 이때 환 $\varphi(R)$의 두 연산은 $R'$의 두 연산을 $R' \times R'$로 제한한 것, 곧 $R'$의 연산 자신이므로([[binary-operation|이항연산]]의 (3)과 연산의 같음) 환 $\varphi(R)$은 환 $R'$이다. (1)에 의해 $\eta$는 환 $R/K$에서 환 $R'$으로의 환 동형사상이다.

**(4)** (i) 준동형의 (6)의 (ii)에 의해 항등함수 $i_R$는 환 동형사상이므로 단사이고 전사이다. 준동형의 (2)에 의해 $\operatorname{Ker} i_R = \{0\}$이다. (3)에 의해 $R/\{0\} \cong R$이고 동형사상 $\eta$는 $\eta(a + \{0\}) = i_R(a) = a$를 만족한다. [[left-coset|잉여류]]의 (8)의 덧셈 표기에 의해 $a + \{0\} = \{a + x : x \in \{0\}\} = \{a + 0\} = \{a\}$이다.

(ii) 준동형의 (7)의 (i)에 의해 $f$는 전사인 환 준동형이고 $\operatorname{Ker} f = m\mathbb{Z}$이다. (3)에 의해 $\mathbb{Z}/m\mathbb{Z} \cong \mathbb{Z}_m$이고 모든 정수 $a$에서 $\eta(a + m\mathbb{Z}) = f(a) = [a]$이다. 잉여류의 (8)에 의해 $a + m\mathbb{Z} = [a]$이고 $\mathbb{Z}/m\mathbb{Z} = \mathbb{Z}_m$이므로, 모든 $[a] \in \mathbb{Z}_m$에서 $\eta([a]) = [a]$, 곧 $\eta$는 $\mathbb{Z}_m$의 항등함수이다.

**(5)** 준동형의 (3)의 (iii)에 의해 $\varphi : R \to \varphi(R)$은 환 준동형이다. 가정에 의해 단사이고, $\varphi(R)$의 원소는 정의에 의해 모두 어떤 $a \in R$의 값 $\varphi(a)$이므로 $\varphi : R \to \varphi(R)$은 전사이다. 따라서 환 동형사상이다. $\blacksquare$
:::

## 예시와 반례

:::example[실수와 스칼라 행렬]
$n$이 자연수이고 $\sigma : \mathbb{R} \to M_n(\mathbb{R})$이 각 실수 $c$에 $cI_n$을 대응시키는 함수라 합시다([[ring-examples|환의 예]]의 (2), (5)의 환). [[vector-space|벡터공간]]의 (V8)과 [[matrix|행렬]]의 (1)에 의해 $\sigma(c + d) = cI_n + dI_n$이고, [[matrix-product-properties|행렬 곱의 성질]]의 (3), (4)와 (V6)에 의해 $(cI_n)(dI_n) = c(I_n(dI_n)) = c(dI_n) = (cd)I_n$이므로 $\sigma$는 환 준동형입니다. $cI_n$이 영행렬이면 그 $(1, 1)$ 성분 $c \cdot 1 = c$([[real-number-arithmetic|실수의 계산 법칙]]의 (K4))가 $0$이므로(행렬의 (1), (2), (6)) $\operatorname{Ker} \sigma = \{0\}$이고, [[ring-homomorphism|환 준동형]]의 (2)에 의해 $\sigma$는 단사입니다. (5)에 의해 $\mathbb{R} \cong \{cI_n : c \in \mathbb{R}\}$입니다. 곧 스칼라 행렬끼리의 덧셈과 곱셈은 실수의 덧셈과 곱셈을 그대로 옮겨 놓은 것입니다. (1)로 보면 $\mathbb{R}/\{0\}$이 이 상과 동형이고, (4)의 (i)과 함께 같은 결론이 나옵니다.
:::

:::counterexample[덧셈군으로는 동형이지만 환으로는 동형이 아닌 ℤ와 2ℤ]
각 정수 $k$에 $2k$를 대응시키는 함수 $d : \mathbb{Z} \to 2\mathbb{Z}$는 덧셈군 $(\mathbb{Z}, +)$에서 $(2\mathbb{Z}, +)$로의 동형사상입니다. $d(a + b) = 2a + 2b = d(a) + d(b)$이고, $2a = 2b$이면 $a = b$이며([[integer-cancellation|정수 곱셈의 소거 법칙]]의 (2)), $2\mathbb{Z}$의 원소는 모두 $2k$ 꼴이기 때문입니다. 그러나 환 $\mathbb{Z}$와 환 $2\mathbb{Z}$([[ring-examples|환의 예]]의 (1), (4))는 환으로서 동형이 아닙니다. 환 동형사상 $\psi : \mathbb{Z} \to 2\mathbb{Z}$가 있다면 [[ring-homomorphism|환 준동형]]의 (5)에 의해 $\psi(1)$은 환 $\psi(\mathbb{Z})$의 곱셈의 항등원이고, 전사이므로 $\psi(\mathbb{Z}) = 2\mathbb{Z}$입니다(환 준동형의 (3)의 (i)). 그런데 환의 예의 (4)에 의해 $2\mathbb{Z}$에는 곱셈의 항등원이 없습니다. 이 정리에서 덧셈 쪽은 군의 정리가 주지만, 곱셈의 보존은 따로 확인해야 하는 까닭이 이것입니다.
:::

## 확인 질문

:::check[환 $R$에서 환 $R'$으로의 영 준동형에 이 정리를 쓰면 무엇을 얻는가?]
영 준동형의 핵은 $R$이고 상은 $\{0\}$입니다([[ring-homomorphism|환 준동형]]의 (7)의 (iii)). (1)에 의해 $R/R \cong \{0\}$입니다. 이것은 [[quotient-ring|몫환]]의 (4)의 (iii), 곧 $R/R$이 영환이라는 것과 맞습니다.
:::

:::check[$R$이 단위원 $1$을 갖는 환이고 $\varphi : R \to R'$이 영 준동형이 아닌 환 준동형이면, $R/\operatorname{Ker} \varphi$는 단위원을 갖는 환인가?]
그렇습니다. 영 준동형이 아니므로 $\varphi(R) \ne \{0\}$이고([[ring-homomorphism|환 준동형]]의 (1)에 의해 $0 \in \varphi(R)$), 같은 항목의 (5)에 의해 $\varphi(1) \ne 0$, 곧 $1 \notin \operatorname{Ker} \varphi$입니다. [[ideal|아이디얼]]의 (4)에 의해 $\operatorname{Ker} \varphi$는 진아이디얼이고, [[quotient-ring|몫환]]의 (4)의 (ii)에 의해 $R/\operatorname{Ker} \varphi$는 단위원 $1 + \operatorname{Ker} \varphi$를 갖는 환입니다. (1)에 의해 이 환은 단위원 $\varphi(1)$을 갖는 환 $\varphi(R)$과 동형입니다.
:::
