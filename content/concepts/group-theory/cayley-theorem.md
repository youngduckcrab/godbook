---
title: 케일리 정리
title_en: Cayley's Theorem
aliases: [왼쪽 정칙 표현, 케일리의 정리, Cayley's theorem, left regular representation]
kind: theorem
field: group-theory
msc: ["20B30"]
level: undergrad
summary: 군 G의 각 원소 g에 왼쪽 곱 L_g를 대응시키는 함수는 G에서 대칭군 S_G로의 단사 준동형이다. 따라서 모든 군은 어떤 집합 위의 대칭군의 부분군과 동형이고, 원소가 n개인 군은 S_n의 부분군과 동형이다.
requires: [set, function, function-composition, composition-is-associative, inverse-function, injective-surjective-bijective, composition-preserves-injectivity-and-surjectivity, recursion-theorem, finite-set, number-of-elements-is-unique, group, group-basic-properties, subgroup, symmetric-group, number-groups, integers-modulo-n, group-homomorphism, homomorphism-kernel-and-image, group-isomorphism]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 9.1절 Cayley's Theorem, Example 9.11 p.116–117, Theorem 9.12 p.117, 9.4절 연습문제 44 p.123
    checked: original
    note: "출처 Theorem 9.12(p.117)는 '모든 군은 치환들로 이루어진 군과 동형이다'이다. 출처는 λ_g(a) = ga 가 G 의 치환임을 그 자리에서 보이고, Ḡ = {λ_g : g ∈ G} 가 합성으로 군임을 닫힘, λ_e, λ_{g⁻¹} ∘ λ_g = λ_e 로 확인한 뒤, g 를 λ_g 로 보내는 사상이 연산을 보존하고 단사('ϕ(g)(a) = ϕ(h)(a) 이면 ga = ha 이므로 g = h')이며 전사임을 보인다. 이 항목은 L_g 가 전단사라는 것을 군의 기본 성질의 (10)으로 인용하고, λ(G) 가 S_G 의 부분군이라는 것을 준동형의 상이 부분군이라는 것(핵과 상의 (4))으로 얻으며, 단사는 항등원 e 에서의 값 L_g(e) = g 로 보이고, 동형은 군의 동형의 (4)로 맺는다. 출처의 '치환들로 이루어진 군'을 이 항목은 'S_G 의 부분군'으로 적는다(출처 p.60 은 S_n 의 부분군을 permutation group 이라 부른다). 출처는 g 를 λ_g 로 보내는 동형을 왼쪽 정칙 표현(left regular representation)이라 부른다(p.117). (3)은 출처에 명제로 없다(검색어 'subgroup of S ?n' 5건은 p.60 의 정의, A_n, D_n, 연습문제 9.30, 23장 답이고, 'isomorphic to a (sub)?group of permutations|permutation group' 40건에 유한군을 S_n 에 넣는 진술은 없다). 출처는 5.1절 첫머리(p.59)에서 'X 가 유한집합이면 X = {1, 2, …, n} 으로 둘 수 있다'고만 적는다. 예시 'ℤ₃ 의 왼쪽 곱'은 출처 Example 9.11(p.116–117)과 같은 대상, 같은 결론이다(출처는 순환 표기로 적는다). 참고 '오른쪽 곱'은 출처 연습문제 9.44(p.123, ρ_g(x) = xg⁻¹ 로 두면 g 를 ρ_g 로 보내는 것이 오른쪽 정칙 표현)와 같은 발상이다. 반례 'λ(G) 는 S_G 전체가 아닐 수 있다'는 출처 Example 9.11(p.116–117)의 ℤ₃ 와 같은 대상이다. 출처는 ℤ₃ 가 원소가 셋인 치환군 {(0), (012), (021)} 과 같다고 적고, 이 반례는 그 밖의 치환 하나를 보인다. 첫째 확인 질문은 출처 9장 연습문제 33(p.123, Cayley 정리의 증명에서 S₃ 의 각 원소에 대응하는 치환을 적어라)과 같은 발상이고 군이 다르다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 출처의 연습문제와 겹치는 것을 메모에 밝히고 경계 경우의 문장을 고침"
added: 2026-11-19
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이라 하자. $S_G$는 집합 $G$ 위의 [[symmetric-group|대칭군]]이고, 그 곱은 합성이다. $g \in G$에 대하여 $L_g : G \to G$, $L_g(x) = gx$는 [[group-basic-properties|군의 기본 성질]]의 (10)의 왼쪽 곱이다. 준동형, 상 $\lambda(G)$, 동형은 [[group-homomorphism|군 준동형]], [[homomorphism-kernel-and-image|준동형의 핵과 상]], [[group-isomorphism|군의 동형]]의 것이다.

1. (왼쪽 곱은 단사 준동형) 모든 $g \in G$에서 $L_g \in S_G$이다. 각 $g \in G$에 $L_g$를 대응시키는 함수 $\lambda : G \to S_G$는 군 $G$에서 군 $S_G$로의 단사인 준동형이다. 곧 모든 $g, h \in G$에서 $L_{gh} = L_g \circ L_h$이고, $L_g = L_h$이면 $g = h$이다.
2. (케일리 정리) $\lambda(G) = \{L_g : g \in G\}$는 $S_G$의 부분군이고 $G \cong \lambda(G)$이다. 따라서 모든 군은 어떤 집합 위의 대칭군의 부분군과 동형이다.
3. (유한군) $G$가 유한군이고 $n = |G|$이며 $h : \{1, \dots, n\} \to G$가 전단사라 하자. 각 $f \in S_G$에 $h^{-1} \circ f \circ h$를 대응시키는 함수 $\Phi_h : S_G \to S_n$은 동형사상이다. 따라서 $\Phi_h(\lambda(G))$는 $S_n$의 부분군이고 $G \cong \Phi_h(\lambda(G))$이다. 곧 원소가 $n$개인 군은 $S_n$의 부분군과 동형이다. 여기서 $h^{-1}$은 [[inverse-function|역함수]]이고 $S_n$은 [[symmetric-group|대칭군]]의 (5)의 것이다.
:::

:::english
Let $G$ be a group with identity $e$. $S_G$ is the symmetric group on the set $G$, whose product is composition. For $g \in G$, $L_g : G \to G$, $L_g(x) = gx$, is the left multiplication of item (10) of the entry on basic properties of groups. Homomorphisms, the image $\lambda(G)$ and isomorphisms are as in the entries on group homomorphisms, on the kernel and image of a group homomorphism, and on isomorphism of groups.

1. (Left multiplication is an injective homomorphism) $L_g \in S_G$ for every $g \in G$. The function $\lambda : G \to S_G$ assigning $L_g$ to each $g \in G$ is an injective homomorphism from the group $G$ to the group $S_G$. That is, $L_{gh} = L_g \circ L_h$ for all $g, h \in G$, and $L_g = L_h$ implies $g = h$.
2. (Cayley's theorem) $\lambda(G) = \{L_g : g \in G\}$ is a subgroup of $S_G$, and $G \cong \lambda(G)$. Hence every group is isomorphic to a subgroup of the symmetric group on some set.
3. (Finite groups) Let $G$ be finite, $n = |G|$, and $h : \{1, \dots, n\} \to G$ a bijection. The function $\Phi_h : S_G \to S_n$ assigning $h^{-1} \circ f \circ h$ to each $f \in S_G$ is an isomorphism. Hence $\Phi_h(\lambda(G))$ is a subgroup of $S_n$ and $G \cong \Phi_h(\lambda(G))$; that is, a group with $n$ elements is isomorphic to a subgroup of $S_n$. Here $h^{-1}$ is the inverse function and $S_n$ is as in item (5) of the entry on symmetric groups.
:::

## 직관

군의 원소 $g$ 하나는 "왼쪽에서 $g$를 곱하라"는 명령으로 볼 수 있습니다. 이 명령은 군의 원소들을 빠짐없이, 겹치지 않게 다시 늘어놓으므로 집합 $G$의 치환 $L_g$입니다. 명령 둘을 잇따라 내리면, 먼저 $h$를 곱하고 다음에 $g$를 곱한 것이 $gh$를 한 번에 곱한 것과 같습니다($g(hx) = (gh)x$). 그래서 곱 $gh$는 치환의 합성 $L_g \circ L_h$로 옮겨 가고, 이것이 (1)의 준동형입니다. 비유의 "명령"이 $L_g$, "잇따라 내리기"가 합성, "같은 결과"가 결합법칙에 해당합니다.

서로 다른 원소는 서로 다른 명령입니다. 항등원 $e$에 명령을 내려 보면 $L_g(e) = g$가 나오므로, 명령만 보고도 어느 원소였는지 알 수 있습니다. 그래서 $\lambda$는 단사이고, [[group-isomorphism|군의 동형]]의 (4)에 의해 $G$는 그 상 $\lambda(G)$와 동형입니다. 어떤 군이든 치환들로 이루어진 군으로 바꿔 볼 수 있다는 뜻입니다.

이 정리는 $G$를 더 작은 군에 넣어 주지는 않습니다. $S_G$는 $G$를 원소로 갖는 집합 $G$의 치환 전체이고, $\lambda(G)$는 그 가운데 일부일 수 있습니다(아래 반례).

## 증명

:::idea
$L_{gh}$와 $L_g \circ L_h$를 원소 $x$마다 비교하면 결합법칙만 남는다. 단사는 항등원에서의 값으로 본다. 유한군의 경우는 $G$의 원소에 $1, \dots, n$의 번호를 붙여 $S_G$를 $S_n$으로 옮긴다.
:::

:::hint
(1): 두 함수 $L_{gh}$와 $L_g \circ L_h$가 같다는 것은 정의역 $G$의 모든 원소에서 값이 같다는 것이다.
:::

:::hint
(3): $\Phi_h$의 역은 $\sigma$에 $h \circ \sigma \circ h^{-1}$을 대응시키는 함수이다. 원소마다 $h(h^{-1}(y)) = y$를 쓴다.
:::

:::proof
**(1)** [[group-basic-properties|군의 기본 성질]]의 (10)에 의해 $L_g : G \to G$는 전단사이므로 [[symmetric-group|대칭군]]의 정의에 의해 $L_g \in S_G$이다. 각 $g$에 $S_G$의 원소 $L_g$가 정해져 있으므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $\lambda = \{(g, L_g) : g \in G\}$는 $G$에서 $S_G$로의 함수이다.

준동형: $g, h \in G$라 하자. 모든 $x \in G$에서 [[group|군]]의 결합법칙과 [[function-composition|합성]]의 진술에 의해
$$L_{gh}(x) = (gh)x = g(hx) = L_g(L_h(x)) = (L_g \circ L_h)(x)$$
이다. 두 함수 $L_{gh}$와 $L_g \circ L_h$는 정의역이 $G$로 같고 모든 원소에서 값이 같으므로 [[function|함수]]의 같음에 의해 $L_{gh} = L_g \circ L_h$이다. 대칭군의 (1)에 의해 $S_G$의 곱 $L_g L_h$는 $L_g \circ L_h$이므로 $\lambda(gh) = \lambda(g)\lambda(h)$이다.

단사: $L_g = L_h$이면 $e$에서의 값이 같으므로 $g = ge = L_g(e) = L_h(e) = he = h$이다.

**(2)** (1)과 [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (4)에 의해 $\lambda(G)$는 $S_G$의 부분군이고, [[group-isomorphism|군의 동형]]의 (4)에 의해 $\lambda : G \to \lambda(G)$는 동형사상이므로 $G \cong \lambda(G)$이다. 마지막 문장은 집합 $G$ 위의 대칭군 $S_G$에 대한 이 결과이다.

**(3)** 아래에서 $N = \{1, \dots, n\}$이라 하자. [[finite-set|유한집합]]의 (F3)에 의해 $h^{-1} : G \to N$은 전단사이고, [[inverse-function|역함수]]의 진술에 의해 $h^{-1} \circ h = i_N$, $h \circ h^{-1} = i_G$, 곧 모든 $i \in N$에서 $h^{-1}(h(i)) = i$이고 모든 $y \in G$에서 $h(h^{-1}(y)) = y$이다. [[group|군]]의 (4)에 의해 $G \ne \emptyset$이므로 유한집합의 (F2)에 의해 $n \ne 0$이고, $n$은 자연수이다.

- *$\Phi_h$는 함수이다.* $f \in S_G$이면 $h : N \to G$, $f : G \to G$, $h^{-1} : G \to N$이 모두 전단사이므로 [[composition-preserves-injectivity-and-surjectivity|합성은 단사와 전사를 보존한다]]의 (3)을 두 번 써서 $h^{-1} \circ f \circ h : N \to N$은 전단사, 곧 $S_n$의 원소이다. [[composition-is-associative|합성의 결합법칙]]에 의해 이 합성은 괄호 없이 쓸 수 있고, 모든 $i \in N$에서 그 값은 $h^{-1}(f(h(i)))$이다. [[recursion-theorem|재귀 정리]]의 (1)에 의해 $\Phi_h$는 $S_G$에서 $S_n$으로의 함수이다. 같은 이유로 각 $\sigma \in S_n$에 $h \circ \sigma \circ h^{-1} \in S_G$를 대응시키는 함수 $\Psi : S_n \to S_G$가 있다.
- *준동형.* $f, f' \in S_G$이고 $i \in N$이면 [[function-composition|합성]]의 진술과 $h(h^{-1}(y)) = y$에 의해
$$\bigl(\Phi_h(f) \circ \Phi_h(f')\bigr)(i) = h^{-1}\Bigl(f\bigl(h(h^{-1}(f'(h(i))))\bigr)\Bigr) = h^{-1}\bigl(f(f'(h(i)))\bigr) = \Phi_h(f \circ f')(i)$$
이다. [[function|함수]]의 같음에 의해 $\Phi_h(f) \circ \Phi_h(f') = \Phi_h(f \circ f')$이고, 대칭군의 (1)에 의해 $S_G$와 $S_n$의 곱은 합성이므로 $\Phi_h$는 준동형이다.
- *전단사.* $f \in S_G$와 $y \in G$에서 $\Psi(\Phi_h(f))(y) = h\bigl(h^{-1}(f(h(h^{-1}(y))))\bigr) = f(y)$이므로 $\Psi(\Phi_h(f)) = f$이다. 같은 방법으로 $\sigma \in S_n$과 $i \in N$에서 $\Phi_h(\Psi(\sigma))(i) = h^{-1}\bigl(h(\sigma(h^{-1}(h(i))))\bigr) = \sigma(i)$이므로 $\Phi_h(\Psi(\sigma)) = \sigma$이다. 따라서 $\Phi_h(f) = \Phi_h(f')$이면 $f = \Psi(\Phi_h(f)) = \Psi(\Phi_h(f')) = f'$이므로 $\Phi_h$는 단사이고, $\sigma = \Phi_h(\Psi(\sigma))$이므로 $\Phi_h : S_G \to S_n$은 전사이다.

따라서 $\Phi_h$는 동형사상이다. (2)에 의해 $\lambda(G)$는 $S_G$의 부분군이므로 [[group-isomorphism|군의 동형]]의 (3)(iv)에 의해 $\Phi_h(\lambda(G))$는 $S_n$의 부분군이고 $\lambda(G) \cong \Phi_h(\lambda(G))$이다. (2)의 $G \cong \lambda(G)$와 동형의 (2)(추이)에 의해 $G \cong \Phi_h(\lambda(G))$이다. 유한군 $G$에는 [[number-of-elements-is-unique|원소의 개수]]의 뜻으로 전단사 $h : \{1, \dots, |G|\} \to G$가 있으므로 마지막 문장이 나온다.
:::

:::remark[오른쪽 곱]
오른쪽 곱 $R_g(x) = xg$([[group-basic-properties|군의 기본 성질]]의 (10))로 같은 일을 하면 순서가 뒤집힙니다. 모든 $x \in G$에서 $R_{gh}(x) = x(gh) = (xg)h = R_h(R_g(x))$이므로 $R_{gh} = R_h \circ R_g$입니다. 따라서 $g$에 $R_g$를 대응시키는 함수가 준동형인 것은 정확히 $G$가 아벨군일 때입니다. 준동형이면 모든 $g, h$에서 $R_h \circ R_g = R_{gh} = R_g \circ R_h$이고, $e$에서의 값을 비교하면 $gh = hg$입니다. 거꾸로 $G$가 아벨군이면 $R_{gh} = R_{hg} = R_g \circ R_h$입니다. 대신 $g$에 $R_{g^{-1}}$을 대응시키면 같은 항목의 (6)에 의해 $R_{(gh)^{-1}} = R_{h^{-1}g^{-1}} = R_{g^{-1}} \circ R_{h^{-1}}$이므로 준동형이고, $R_{g^{-1}}(e) = g^{-1}$과 같은 항목의 (5)에 의해 단사입니다.
:::

## 예시와 반례

:::example[ℤ₃의 왼쪽 곱]
덧셈으로 쓰는 군 $(\mathbb{Z}_3, +)$([[number-groups|수로 이루어진 군]]의 (4))에서 왼쪽 곱은 $L_g(x) = g + x$입니다. [[integers-modulo-n|법 n의 정수]]의 (1)과 (2)로 계산하면
- $L_{[0]}$은 $[0]$, $[1]$, $[2]$를 차례로 $[0]$, $[1]$, $[2]$로 보내는 항등함수이고,
- $L_{[1]}$은 $[0]$, $[1]$, $[2]$를 차례로 $[1]$, $[2]$, $[0]$으로 보내며($[1] + [2] = [3] = [0]$),
- $L_{[2]}$는 $[0]$, $[1]$, $[2]$를 차례로 $[2]$, $[0]$, $[1]$로 보냅니다($[2] + [1] = [3] = [0]$, $[2] + [2] = [4] = [1]$).

$L_{[1]} \circ L_{[1]}$은 $[0]$을 $L_{[1]}([1]) = [2]$로, $[1]$을 $L_{[1]}([2]) = [0]$으로, $[2]$를 $L_{[1]}([0]) = [1]$로 보내므로 $L_{[2]} = L_{[1] + [1]}$과 같습니다. (1)의 $L_{gh} = L_g \circ L_h$를 덧셈으로 읽은 것입니다.
:::

:::counterexample[λ(G)는 S_G 전체가 아닐 수 있다]
위 예시의 $G = \mathbb{Z}_3$에서 $[0]$을 $[0]$으로, $[1]$을 $[2]$로, $[2]$를 $[1]$로 보내는 함수 $t : G \to G$를 봅시다. $t \circ t$는 세 원소를 모두 제자리로 보내므로 $t$는 전단사이고, $t \in S_G$입니다. $t = L_g$인 $g$가 있다면 $g = g + [0] = L_g([0]) = t([0]) = [0]$이고, $L_{[0]}$은 항등함수인데 $t([1]) = [2] \ne [1]$이므로 모순입니다. 따라서 $t \notin \lambda(G)$이고, $\lambda(G) \ne S_G$입니다.
:::

## 확인 질문

:::check[$G = (\mathbb{Z}, +)$일 때 $\lambda(1)$과 $\lambda(-1)$은 어떤 치환인가? 둘의 합성은?]
덧셈으로 쓰면 $L_g(x) = g + x$이므로 $\lambda(1)$은 각 정수 $x$를 $x + 1$로, $\lambda(-1)$은 $x - 1$로 보냅니다. (1)에 의해 $\lambda(1) \circ \lambda(-1) = \lambda(1 + (-1)) = \lambda(0)$이고, $\lambda(0)$은 모든 $x$를 $0 + x = x$로 보내는 항등함수입니다.
:::

:::check[$\lambda(G)$의 원소 가운데 $G$의 원소 하나라도 제자리에 두는 것은 무엇인가?]
항등함수 $L_e$ 하나뿐입니다. $L_g(x) = x$인 $x$가 있으면 $gx = ex$이고, [[group-basic-properties|군의 기본 성질]]의 (7)(오른쪽 소거)에 의해 $g = e$입니다. 거꾸로 $L_e(x) = ex = x$이므로 $L_e$는 모든 원소를 제자리에 둡니다.
:::
