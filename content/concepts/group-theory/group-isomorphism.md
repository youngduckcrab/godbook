---
title: 군의 동형
title_en: Isomorphism of Groups
aliases: [군의 동형사상, 동형인 군, 군 동형, group isomorphism, isomorphic groups]
kind: definition
field: group-theory
msc: ["20A05"]
level: undergrad
summary: 전단사인 군 준동형을 동형사상이라 하고, 동형사상이 있는 두 군을 동형이라 한다(G ≅ G′). 동형사상의 역함수와 합성은 동형사상이며, 동형사상은 아벨군, 순환군과 생성원, 원소의 개수, 부분군, aⁿ = e 를 보존한다. 단사 준동형은 정의역과 상 사이의 동형사상이다.
requires: [set, function, function-composition, inverse-function, bijective-iff-inverse-is-a-function, injective-surjective-bijective, composition-preserves-injectivity-and-surjectivity, adding-or-removing-an-element, finite-set, number-of-elements-is-unique, subset-of-finite-set, recursion-theorem, even-and-odd, integer-cancellation, congruence-modulo-n, equivalence-classes-equal-iff-related, real-number-arithmetic, group, subgroup, subgroup-examples, power-in-a-group, cyclic-subgroup, number-groups, integers-modulo-n, group-of-units-modulo-n, symmetric-group, group-homomorphism, homomorphism-kernel-and-image]
sources:
  - ref: judson-abstract-algebra
    loc: 9.1절 Definition and Examples, 동형의 정의(번호 없음) p.114, Example 9.4 p.115, Theorem 9.6 p.115–116, Theorem 9.10 p.116, 9.4절 연습문제 1, 3, 26, 27, 31 p.121–123
    checked: original
    note: "출처는 두 군 (G, ·), (H, ◦) 가 동형(isomorphic)이라는 것을 연산을 보존하는 전단사 ϕ : G → H 가 있다는 것으로 정의하고 G ≅ H 로 쓰며, 그 ϕ 를 동형사상(isomorphism)이라 부른다(p.114). 출처 11장 첫 문단(p.133)은 준동형을 동형사상에서 전단사라는 조건을 뺀 것으로 소개한다. 이 항목은 준동형을 먼저 정의하고 동형사상을 '전단사인 준동형'으로 정의한다. (1)은 출처 Theorem 9.6 의 1(p.115)이고, 출처는 그 1 과 2 가 'ϕ 가 전단사라는 사실에서 나온다'고만 적는다(p.115). 역함수가 연산을 보존한다는 계산은 출처 본문에 없고 연습문제 9.31(p.123)이 ϕ⁻¹ 이 동형사상임을 보이게 한다. 이 항목은 그 계산을 적는다. (2)는 출처 연습문제 9.31(p.123, 동형사상의 역함수와 합성은 동형사상이고, 따라서 군의 동형은 모든 군의 모임 위의 동치관계를 정한다)과 Theorem 9.10(p.116, 증명은 연습문제로 둔다)이다. 이 사이트의 관계는 집합 위에서만 정의되어 있으므로, 이 항목은 '모든 군의 모임 위의 동치관계'라고 말하지 않고 반사·대칭·추이를 세 문장으로 진술한다. 항등함수가 동형사상이라는 것은 출처에 명제로 없고(검색어 'identity map', 'identity mapping', 'identity homomorphism'), 연습문제 9.31 의 반사성과 11.5절 연습문제 1(p.139, Aut(G) 가 군)이 쓰게 하는 사실이다. (3)(i)의 정방향은 Theorem 9.6 의 3 과 그 증명(p.115–116)이고, 역방향은 이 항목이 (1)로 얻는다. (3)(ii)의 '순환군이면 순환군'은 Theorem 9.6 의 4 이고 출처는 증명을 연습문제 9.27(p.123)로 두며, 그 답의 힌트(p.325)가 'ϕ(a) 가 H 의 생성원임을 보이라'고 적는다. (3)(iii)은 Theorem 9.6 의 2 를 유한군으로 좁힌 것이다(출처는 |G| = |H| 를 무한군에도 쓰지만 이 사이트는 |G| 를 유한군에만 쓴다). (3)(iv)는 Theorem 9.6 의 5(G 가 위수 n 인 부분군을 가지면 H 도 그렇다, 증명은 연습문제 9.46(p.124))를 부분군과 그 상의 동형으로 넓힌 것이다. (3)(v)은 출처에 명제로 없다(검색어 '|ϕ(' 0건, 'same order' 2건은 Example 11.11 과 23장, 'preserves' 13건은 9장의 Example 9.1 과 직접곱, 12장의 행렬군과 등거리변환, 16장과 21장의 준동형의 소개, 라이선스 문구이다). 출처 연습문제 9.26(p.123, ϕ(x) = e_H 인 것은 정확히 x = e_G 일 때)이 n = 1 인 경우이다. (4)는 출처에 명제로 없고(검색어 'isomorphic to (one of its|a) (proper )?subgroup' 4건은 연습문제 9.29, 9.30, 11.16 과 23장), 출처는 Cayley 정리의 증명(p.117)에서 단사 준동형 g ↦ λ_g 와 그 상 사이의 동형을 그 자리에서 보이고, 연습문제 9.29, 9.30(p.123), 11.16(p.139)이 이 사실을 쓰게 한다. 예시 '정수 전체와 짝수 전체'는 출처 연습문제 9.1(p.121, n ≠ 0 이면 ℤ ≅ nℤ)의 n = 2 인 경우이다. 예시 '원소가 둘인 두 군'은 출처 Example 10.5(p.126)가 S₃/A₃ 의 곱셈표를 적고 ℤ₂ 와 동형이라 하는 것, Example 10.7(p.127)이 Dₙ/Rₙ 은 원소가 정확히 둘이므로 ℤ₂ 와 동형이라 하는 것, 11장 첫머리(p.133)가 짝·홀 치환의 곱셈표를 ℤ₂ 와 견주는 것과 같은 발상이다(검색어 'isomorphic to Z2' 7건). 반례 'U(8) 과 ℤ₄'는 출처 연습문제 9.3(p.121, U(8) ≅ ℤ₄ 를 증명하거나 반박하라)에 답하는 예이고, 그 답의 힌트(p.325)는 'False' 이다. U(8) = {1, 3, 5, 7} 은 출처 Example 9.4(p.115)와 Figure 3.12(p.35)에 있다. 반례 '준동형이 동형사상이 아니어도 두 군은 동형일 수 있다'는 출처 11.5절 연습문제 7(p.140, ℤ 에서 ℤ 로의 준동형을 모두 구하고 Aut(ℤ) 를 구하라)을 풀면 나오는 것(n 을 2n 으로 보내는 준동형은 자기동형이 아니다)과 같은 발상이고, 이 결론을 문장으로 적은 곳은 찾지 못했다(위의 'isomorphic to … subgroup' 검색과, 'not an isomorphism|not isomorphic to itself|isomorphism of G with itself' 1건은 내부자기동형에 관한 연습문제 10.11 의 답(p.326)이다). 첫째 확인 질문은 출처 Example 9.4(p.115, ℤ₈ 과 ℤ₁₂ 는 위수가 달라 동형이 아니다)와 같은 발상이다. 둘째 확인 질문은 출처 읽기 질문 9.3 의 2(p.121, 동형사상이 보존하는 군의 성질 셋을 들어라)와 닿지만, 이 성질을 드는 곳은 찾지 못했다(검색어 '[agx] 2 = e' 꼴 2건은 연습문제 3.31, 3.32 로, 동형에 관한 것이 아니다)."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 출처의 연습문제와 겹치는 것을 메모에 밝히고 경계 경우의 문장을 고침"
added: 2026-11-19
---

:::statement
$(G, \ast)$, $(G', \ast')$, $(G'', \ast'')$이 [[group|군]]이고 $e$, $e'$이 각각 $G$, $G'$의 항등원이라 하자. 곱, 역원, 거듭제곱의 표기와 준동형은 [[group-homomorphism|군 준동형]]의 것이고, 부분군은 [[subgroup|부분군]]의 뜻이며, 상 $\varphi(X)$는 [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 것이다.

함수 $\varphi : G \to G'$이 군 $G$에서 군 $G'$으로의 **동형사상**(isomorphism)인 것은 정확히 $\varphi$가 준동형이고 $\varphi : G \to G'$이 [[injective-surjective-bijective|전단사]]일 때이다. 군 $G$와 $G'$이 **동형**(isomorphic)인 것은 정확히 $G$에서 $G'$으로의 동형사상이 있을 때이고, 이를 $G \cong G'$으로 쓴다. 선형대수에서 벡터공간의 동형에도 같은 기호를 쓰지만, 군에 대해서는 이 뜻이다.

다음이 성립한다.

1. (역함수) $\varphi : G \to G'$이 동형사상이면 [[inverse-function|역함수]] $\varphi^{-1} : G' \to G$가 있고, $\varphi^{-1}$은 군 $G'$에서 군 $G$로의 동형사상이다. ($\varphi^{-1}$은 함수의 역함수이고, 군의 원소의 역원과는 다른 것이다.)
2. (반사, 대칭, 추이) 항등함수 $i_G : G \to G$는 동형사상이다. $\varphi : G \to G'$과 $\psi : G' \to G''$이 동형사상이면 [[function-composition|합성]] $\psi \circ \varphi : G \to G''$은 동형사상이다. 따라서 모든 군 $G$, $G'$, $G''$에 대하여 다음이 성립한다.
   - (반사) $G \cong G$이다.
   - (대칭) $G \cong G'$이면 $G' \cong G$이다.
   - (추이) $G \cong G'$이고 $G' \cong G''$이면 $G \cong G''$이다.
3. (동형사상이 보존하는 것) $\varphi : G \to G'$이 동형사상이라 하자.
   - (i) $G$가 아벨군인 것은 정확히 $G'$이 아벨군일 때이다.
   - (ii) $a \in G$에 대하여 $a$가 $G$의 [[cyclic-subgroup|생성원]]인 것은 정확히 $\varphi(a)$가 $G'$의 생성원일 때이다. 따라서 $G$가 순환군인 것은 정확히 $G'$이 순환군일 때이다.
   - (iii) $G$가 유한군인 것은 정확히 $G'$이 유한군일 때이고, 그때 $|G| = |G'|$이다. 따라서 유한군과 무한군은 동형이 아니고, 원소의 개수가 다른 두 유한군은 동형이 아니다.
   - (iv) $H$가 $G$의 부분군이면 $\varphi(H)$는 $G'$의 부분군이고, $\varphi$의 $H$로의 [[adding-or-removing-an-element|제한]]을 $\varphi|_H : H \to \varphi(H)$로 선언한 것은 군 $H$에서 군 $\varphi(H)$로의 동형사상이다. 따라서 $H \cong \varphi(H)$이고, $H$가 유한집합이면 $\varphi(H)$도 유한집합이며 $|H| = |\varphi(H)|$이다.
   - (v) $a \in G$이고 $n$이 정수이면 $a^n = e$인 것은 정확히 $\varphi(a)^n = e'$일 때이다.
4. (단사인 준동형) $\varphi : G \to G'$이 단사인 준동형이면, $\varphi$를 [[function|함수]] $\varphi : G \to \varphi(G)$로 선언한 것은 군 $G$에서 군 $\varphi(G)$로의 동형사상이다. 따라서 $G \cong \varphi(G)$이다.
:::

:::english
Let $(G, \ast)$, $(G', \ast')$, $(G'', \ast'')$ be groups, and let $e$, $e'$ be the identities of $G$, $G'$ respectively. Products, inverses, powers and homomorphisms are as in the entry on group homomorphisms, subgroups are meant in the sense of the entry on subgroups, and images $\varphi(X)$ are as in the entry on the kernel and image of a group homomorphism.

A function $\varphi : G \to G'$ is an **isomorphism** from the group $G$ to the group $G'$ exactly when $\varphi$ is a homomorphism and $\varphi : G \to G'$ is bijective. Groups $G$ and $G'$ are **isomorphic** exactly when there is an isomorphism from $G$ to $G'$; we write $G \cong G'$. The same symbol is used for isomorphic vector spaces in linear algebra, but for groups it has this meaning.

The following hold.

1. (Inverse) If $\varphi : G \to G'$ is an isomorphism, then the inverse function $\varphi^{-1} : G' \to G$ exists and is an isomorphism from the group $G'$ to the group $G$. ($\varphi^{-1}$ is the inverse function, not the inverse of an element of a group.)
2. (Reflexive, symmetric, transitive) The identity function $i_G : G \to G$ is an isomorphism. If $\varphi : G \to G'$ and $\psi : G' \to G''$ are isomorphisms, then the composition $\psi \circ \varphi : G \to G''$ is an isomorphism. Hence for all groups $G$, $G'$, $G''$:
   - (Reflexive) $G \cong G$.
   - (Symmetric) If $G \cong G'$, then $G' \cong G$.
   - (Transitive) If $G \cong G'$ and $G' \cong G''$, then $G \cong G''$.
3. (What isomorphisms preserve) Let $\varphi : G \to G'$ be an isomorphism.
   - (i) $G$ is abelian exactly when $G'$ is abelian.
   - (ii) For $a \in G$, $a$ is a generator of $G$ exactly when $\varphi(a)$ is a generator of $G'$. Hence $G$ is cyclic exactly when $G'$ is cyclic.
   - (iii) $G$ is finite exactly when $G'$ is finite, and then $|G| = |G'|$. Hence a finite group and an infinite group are not isomorphic, and two finite groups with different numbers of elements are not isomorphic.
   - (iv) If $H$ is a subgroup of $G$, then $\varphi(H)$ is a subgroup of $G'$, and the restriction of $\varphi$ to $H$, declared as $\varphi|_H : H \to \varphi(H)$, is an isomorphism from the group $H$ to the group $\varphi(H)$. Hence $H \cong \varphi(H)$, and if $H$ is a finite set, then so is $\varphi(H)$ and $|H| = |\varphi(H)|$.
   - (v) If $a \in G$ and $n$ is an integer, then $a^n = e$ exactly when $\varphi(a)^n = e'$.
4. (Injective homomorphisms) If $\varphi : G \to G'$ is an injective homomorphism, then $\varphi$, declared as a function $\varphi : G \to \varphi(G)$, is an isomorphism from the group $G$ to the group $\varphi(G)$. Hence $G \cong \varphi(G)$.
:::

## 직관

동형사상은 원소의 이름만 바꾸는 번역입니다. 같은 놀이를 모양이 다른 말로 할 때, 말 하나하나를 짝지어 바꾸고(전단사) 규칙에 따라 움직인 결과도 짝지은 대로 맞아떨어지면(준동형) 두 놀이는 이름만 다를 뿐입니다. 비유의 "말을 빠짐없이, 겹치지 않게 짝짓는다"가 전단사이고, "움직인 결과가 맞아떨어진다"가 모든 $a, b$에서 $\varphi(ab) = \varphi(a)\varphi(b)$입니다. 비유가 놓치는 것도 있습니다. 두 군 사이의 동형사상이 하나로 정해지지는 않을 수 있습니다. 예를 들어 $(\mathbb{Z}, +)$에서 자기 자신으로 가는 항등함수와, $n$을 $-n$으로 보내는 함수는 둘 다 동형사상입니다.

이름만 바꾼 것이므로, 곱셈만으로 말할 수 있는 성질은 한쪽에서 참이면 다른 쪽에서도 참입니다. 교환법칙, 한 원소의 거듭제곱으로 모든 원소가 나온다는 것, 원소의 개수, $a^n = e$ 같은 등식이 그렇습니다((3)). 거꾸로 이런 성질 하나가 다르면 두 군은 동형이 아닙니다. 유한군에서 원소의 개수가 같은 것은 동형이기 위한 필요조건일 뿐이고, 개수가 같아도 동형이 아닐 수 있습니다(아래 첫째 반례).

"동형이다"는 같은 크기의 집합 사이의 관계처럼 반사적, 대칭적, 추이적입니다((2)). 다만 이 사이트에서 관계는 한 집합 위에서 정의하므로, [[equal-cardinality-is-an-equivalence|크기가 같다는 관계]]에서처럼 세 성질을 따로 문장으로 적습니다.

:::remark[(1)과 (2)의 증명]
(1) $\varphi : G \to G'$이 전단사이므로 [[bijective-iff-inverse-is-a-function|전단사일 조건]]에 의해 역관계 $\varphi^{-1}$은 $G'$에서 $G$로의 함수, 곧 [[inverse-function|역함수]]이고, [[finite-set|유한집합]]의 (F3)에 의해 $\varphi^{-1} : G' \to G$는 전단사이다. 역함수 항목의 두 등식 $\varphi^{-1} \circ \varphi = i_G$, $\varphi \circ \varphi^{-1} = i_{G'}$을 쓴다. $x, y \in G'$이라 하고 $a = \varphi^{-1}(x)$, $b = \varphi^{-1}(y)$로 두면 $\varphi(a) = x$, $\varphi(b) = y$이다. $\varphi$가 준동형이므로 $\varphi(ab) = \varphi(a)\varphi(b) = xy$이고, 양쪽에 $\varphi^{-1}$을 적용하면
$$\varphi^{-1}(xy) = \varphi^{-1}(\varphi(ab)) = ab = \varphi^{-1}(x)\,\varphi^{-1}(y)$$
이다. 따라서 $\varphi^{-1}$은 준동형이고, 전단사이므로 동형사상이다.

(2) $i_G$: [[group-homomorphism|군 준동형]]의 (4)에 의해 준동형이다. $i_G(a) = i_G(b)$이면 $a = b$이고, 모든 $a \in G$는 $i_G(a)$이므로 $i_G : G \to G$는 전단사이다. 합성: 군 준동형의 (4)에 의해 $\psi \circ \varphi$는 준동형이고, [[composition-preserves-injectivity-and-surjectivity|합성은 단사와 전사를 보존한다]]의 (3)에 의해 $\psi \circ \varphi : G \to G''$은 전단사이다. 세 성질: $i_G$가 $G$에서 $G$로의 동형사상이므로 $G \cong G$이다. $\varphi : G \to G'$이 동형사상이면 (1)에 의해 $\varphi^{-1} : G' \to G$가 동형사상이므로 $G' \cong G$이다. $\varphi : G \to G'$과 $\psi : G' \to G''$이 동형사상이면 $\psi \circ \varphi : G \to G''$이 동형사상이므로 $G \cong G''$이다.
:::

:::remark[(3)과 (4)의 증명]
$\varphi : G \to G'$이 동형사상이라 하자. "핵과 상의 ($k$)"는 [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 ($k$)이다. $\varphi : G \to G'$이 전사이므로 핵과 상의 (4)에 의해 $\varphi(G) = G'$이다. 아래에서 역방향은 (1)에 의해 동형사상인 $\varphi^{-1}$에 정방향을 쓰고, $\varphi^{-1}(\varphi(a)) = a$([[inverse-function|역함수]]의 $\varphi^{-1} \circ \varphi = i_G$)를 쓴다.

(i) $G$가 아벨군이면 핵과 상의 (7)에 의해 군 $\varphi(G) = G'$은 아벨군이다. 역방향은 $\varphi^{-1}$에 쓴다.

(ii) $a$가 $G$의 생성원, 곧 $G = \langle a \rangle$이면 핵과 상의 (7)에 의해 $G' = \varphi(G) = \langle \varphi(a) \rangle$이므로 $\varphi(a)$는 $G'$의 생성원이다([[cyclic-subgroup|순환 부분군]]의 (6)). 역방향: $\varphi(a)$가 $G'$의 생성원이면 정방향을 $\varphi^{-1}$에 써서 $\varphi^{-1}(\varphi(a)) = a$가 $G$의 생성원이다. 순환군: $G$에 생성원 $a$가 있으면 $\varphi(a)$가 $G'$의 생성원이다. $G'$에 생성원 $b$가 있으면 정방향을 $\varphi^{-1}$에 써서 $\varphi^{-1}(b)$가 $G$의 생성원이다.

(iii) $G$가 유한군이고 $|G| = n$이면 $G$는 원소를 $n$개 갖고 $\varphi : G \to G'$이 전단사이므로, [[finite-set|유한집합]]의 (F4)에 의해 $G'$도 원소를 $n$개 갖는다. 곧 $G'$은 유한군이고 [[number-of-elements-is-unique|원소의 개수는 하나로 정해진다]]에 의해 $|G'| = n = |G|$이다. 역방향은 $\varphi^{-1}$에 쓴다. 마지막 문장: 유한군 $G$와 무한군 $G'$ 사이에 동형사상이 있다면 앞의 결과에 의해 $G'$이 유한군이 되어 모순이다. 무한군에서 유한군으로의 동형사상이 있다면 그 역함수가 (1)에 의해 유한군에서 무한군으로의 동형사상이 되어 역시 모순이다. 원소의 개수가 다른 두 유한군 사이에 동형사상이 있다면 앞의 결과에 의해 개수가 같아 모순이다.

(iv) 핵과 상의 (4)에 의해 $\varphi(H)$는 $G'$의 부분군이다. [[group-homomorphism|군 준동형]]의 (5)(i)에 의해 $\varphi|_H : H \to G'$은 준동형이고, 모든 $h \in H$에서 $\varphi|_H(h) = \varphi(h) \in \varphi(H)$이므로 같은 항목의 (5)(ii)에 의해 $\varphi|_H : H \to \varphi(H)$는 군 $H$에서 군 $\varphi(H)$로의 준동형이다. [[adding-or-removing-an-element|함수의 제한]]의 진술에 의해 단사인 $\varphi$의 제한은 단사이다. $y \in \varphi(H)$이면 $\varphi(h) = y$인 $h \in H$가 있고 $\varphi|_H(h) = y$이므로 $\varphi|_H : H \to \varphi(H)$는 전사이다. 따라서 동형사상이고 $H \cong \varphi(H)$이다. $H$가 유한집합이면 군 $H$는 유한군이므로 (iii)을 이 동형사상에 써서 $\varphi(H)$는 유한집합이고 $|H| = |\varphi(H)|$이다.

(v) $a^n = e$이면 [[group-homomorphism|군 준동형]]의 (3)과 (1)에 의해 $\varphi(a)^n = \varphi(a^n) = \varphi(e) = e'$이다. 거꾸로 $\varphi(a)^n = e'$이면 $\varphi(a^n) = \varphi(a)^n = e' = \varphi(e)$이고, $\varphi$가 단사이므로 $a^n = e$이다.

(4) 핵과 상의 (4)에 의해 $\varphi(G)$는 $G'$의 부분군이고, 모든 $g \in G$에서 $\varphi(g) \in \varphi(G)$이므로 [[group-homomorphism|군 준동형]]의 (5)(ii)에 의해 $\varphi : G \to \varphi(G)$는 군 $G$에서 군 $\varphi(G)$로의 준동형이다. [[injective-surjective-bijective|단사, 전사, 전단사]]의 진술에 의해 단사 여부는 집합 $\varphi$만으로 정해지므로 $\varphi$는 단사이다. $y \in \varphi(G)$이면 $\varphi(g) = y$인 $g \in G$가 있으므로 $\varphi : G \to \varphi(G)$는 전사이다. 따라서 동형사상이고 $G \cong \varphi(G)$이다.
:::

## 예시와 반례

:::example[정수 전체와 짝수 전체]
각 정수 $n$에 $2n$을 대응시키는 함수 $d : \mathbb{Z} \to \mathbb{Z}$는 [[group-homomorphism|군 준동형]]의 (7)(ii)를 $(\mathbb{Z}, +)$의 원소 $2$에 쓴 준동형입니다([[power-in-a-group|군의 거듭제곱]]의 (6)에 의해 $n \cdot 2 = 2n$). [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (8)에 의해 $\operatorname{Ker} d = \{n : 2n = 0\}$이고, [[integer-cancellation|정수 곱셈의 소거 법칙]]의 (1)에 의해 이것은 $\{0\}$이므로 같은 항목의 (3)에 의해 $d$는 단사입니다. 상은 (8)과 [[cyclic-subgroup|순환 부분군]]의 (5)에 의해 $\langle 2 \rangle = 2\mathbb{Z}$, 곧 짝수 전체입니다([[subgroup-examples|부분군의 예와 교집합]]의 (2)). (4)에 의해 $d : \mathbb{Z} \to 2\mathbb{Z}$는 동형사상이고 $(\mathbb{Z}, +) \cong (2\mathbb{Z}, +)$입니다. $1$은 짝수가 아니므로([[even-and-odd|짝수와 홀수]]에서 받아들인 사실, $1 = 2 \cdot 0 + 1$) $2\mathbb{Z} \ne \mathbb{Z}$이고, 무한군은 이처럼 자신의 진부분군과 동형일 수 있습니다. 유한군 $G$의 진부분군 $H$는 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $|H| < |G|$이므로, (3)(iii)에 의해 $G$와 동형이 아닙니다.
:::

:::example[원소가 둘인 두 군]
$p$, $q$가 서로 다른 대상이고 $X = \{p, q\}$라 합시다. [[symmetric-group|대칭군]]의 (3)에 의해 $S_X = \{i_X, t\}$이고 $i_X \ne t$입니다. 여기서 $t(p) = q$, $t(q) = p$입니다. 한편 [[subgroup-examples|부분군의 예와 교집합]]의 (3)에 의해 $\{1, -1\}$은 $(\mathbb{R} - \{0\}, \cdot)$의 부분군이고, 그 곱은 실수의 곱입니다([[subgroup|부분군]]의 (3)). $\theta = \{(i_X, 1), (t, -1)\}$로 정하면 $S_X$의 두 원소가 서로 다르므로 $\theta$는 $S_X$에서 $\{1, -1\}$로의 함수이고, [[real-number-arithmetic|실수의 계산 법칙]]의 (K7)에 의해 $1 \ne -1$이므로 전단사입니다. 대칭군의 (1)에 의해 $S_X$의 곱은 합성이고 항등원은 $i_X$이므로 $i_X i_X = i_X$, $i_X t = t$, $t i_X = t$이며, $t(t(p)) = t(q) = p$, $t(t(q)) = q$이므로 $tt = i_X$입니다. 네 경우를 모두 대조하면
$$\theta(i_X i_X) = 1 = 1 \cdot 1, \quad \theta(i_X t) = -1 = 1 \cdot (-1), \quad \theta(t i_X) = -1 = (-1) \cdot 1, \quad \theta(tt) = 1 = (-1)(-1)$$
이고(마지막은 (K12)(iii)과 (K4)), 따라서 $\theta$는 준동형이고 동형사상입니다. 곧 $S_X \cong \{1, -1\}$입니다. (3)(v)이 말하는 대로 $tt = i_X$와 $(-1)(-1) = 1$이 짝을 이룹니다.
:::

:::counterexample[원소의 개수가 같아도 동형이 아닐 수 있다]
[[group-of-units-modulo-n|법 n의 단원군]] $U(8)$과 $(\mathbb{Z}_4, +)$를 봅시다. [[cyclic-subgroup|순환 부분군]]의 (6)에 의해 $\mathbb{Z}_4$는 순환군이고, 같은 항목의 (7)에 의해 $U(8)$은 순환군이 아니므로, (3)(ii)에 의해 두 군은 동형이 아닙니다.

그런데 두 군의 원소의 개수는 같습니다. [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $|\mathbb{Z}_4| = 4$이고, $\mathbb{Z}_8$의 원소는 서로 다른 $[0], [1], \dots, [7]$입니다. $[1][1] = [1]$, $[3][3] = [9] = [1]$, $[5][5] = [25] = [1]$, $[7][7] = [49] = [1]$이므로($9 - 1$, $25 - 1$, $49 - 1$은 각각 $8 \cdot 1$, $8 \cdot 3$, $8 \cdot 6$이고 [[congruence-modulo-n|합동]]의 정의와 [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]), 단원군의 (3)에 의해 $[1], [3], [5], [7] \in U(8)$입니다. $k \in \{0, 1, 2, 3\}$일 때 $[2k] \in U(8)$이라면 단원군의 (3)에 의해 $[2k][x] = [2kx] = [1]$인 정수 $x$가 있고, $2kx - 1 = 8c$인 정수 $c$가 있어 $1 = 2(kx - 4c)$가 짝수가 됩니다. $1 = 2 \cdot 0 + 1$은 홀수이므로 [[even-and-odd|짝수와 홀수]]에서 받아들인 사실에 어긋납니다. 따라서 $U(8) = \{[1], [3], [5], [7]\}$이고, $i$를 $[2i - 1]$로 보내는 함수 $\{1, 2, 3, 4\} \to U(8)$([[recursion-theorem|재귀 정리]]의 (1))은 네 값이 서로 다르고 $U(8)$의 원소를 모두 값으로 가지므로 전단사입니다. 따라서 [[finite-set|유한집합]]의 정의와 [[number-of-elements-is-unique|원소의 개수]]에 의해 $|U(8)| = 4$입니다. (3)(iii)의 결론은 동형이기 위한 필요조건일 뿐입니다.
:::

:::counterexample[준동형이 동형사상이 아니어도 두 군은 동형일 수 있다]
각 정수 $n$에 $2n$을 대응시키는 함수 $d : \mathbb{Z} \to \mathbb{Z}$는 [[group-homomorphism|군 준동형]]의 (7)(ii)와 [[power-in-a-group|군의 거듭제곱]]의 (6)에 의해 준동형이고, [[integer-cancellation|정수 곱셈의 소거 법칙]]의 (1)에 의해 핵이 $\{0\}$이므로 [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (3)에 의해 단사입니다. 그러나 전사가 아닙니다. $1 = 2n$인 정수 $n$이 있다면 $1$이 짝수가 되는데, $1 = 2 \cdot 0 + 1$은 홀수이므로 [[even-and-odd|짝수와 홀수]]에서 받아들인 사실에 어긋나기 때문입니다. 따라서 $d : \mathbb{Z} \to \mathbb{Z}$는 동형사상이 아닙니다. 그래도 (2)에 의해 $(\mathbb{Z}, +) \cong (\mathbb{Z}, +)$입니다. "동형이다"는 동형사상이 하나라도 있다는 뜻이므로, 어떤 준동형이 동형사상이 아니라는 것만으로 두 군이 동형이 아니라고 할 수는 없습니다.
:::

## 확인 질문

:::check[$n$이 자연수일 때 $(\mathbb{Z}, +)$와 $(\mathbb{Z}_n, +)$는 동형인가? $(\mathbb{Z}_4, +)$와 $(\mathbb{Z}_6, +)$는?]
둘 다 동형이 아닙니다. [[number-groups|수로 이루어진 군]]의 (1)과 (4)에 의해 $\mathbb{Z}$는 무한군이고 $\mathbb{Z}_n$은 유한군이므로 (3)(iii)에 의해 동형이 아닙니다. [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $|\mathbb{Z}_4| = 4$, $|\mathbb{Z}_6| = 6$이고 $4 \ne 6$이므로, 역시 (3)(iii)에 의해 동형이 아닙니다.
:::

:::check[$\varphi : G \to G'$이 동형사상이고 $G$의 모든 원소 $a$에서 $aa = e$이면, $G'$의 모든 원소 $y$에서 $yy = e'$인가?]
그렇습니다. $\varphi$가 전사이므로 $y = \varphi(a)$인 $a \in G$가 있습니다. [[power-in-a-group|군의 거듭제곱]]의 (1)에 의해 $a^2 = aa = e$이므로, (3)(v)을 $n = 2$에 쓰면 $\varphi(a)^2 = e'$, 곧 $yy = e'$입니다.
:::
