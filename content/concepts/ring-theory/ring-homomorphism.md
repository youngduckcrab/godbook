---
title: 환 준동형
title_en: Ring Homomorphism
aliases: [환 동형사상, 환의 동형, 환 준동형의 핵, 영 준동형, ring isomorphism, isomorphic rings, kernel of a ring homomorphism, zero homomorphism]
kind: definition
field: ring-theory
msc: ["16"]
level: undergrad
summary: 두 환 사이의 함수가 덧셈과 곱셈을 모두 보존하면 환 준동형이라 하고, 전단사인 환 준동형을 환 동형사상, 0으로 가는 원소 전체를 핵이라 한다. 환 준동형은 덧셈군의 준동형이므로 0과 덧셈의 역원을 보존하고, 단사인 것은 핵이 {0}일 때이며, 상은 부분환이다. 1을 1로 보낼 것은 요구하지 않는다.
requires: [set, subset, function, injective-surjective-bijective, image-and-preimage, adding-or-removing-an-element, function-composition, inverse-function, well-ordering-principle, even-and-odd, binary-operation, group, number-groups, power-in-a-group, group-homomorphism, homomorphism-kernel-and-image, group-isomorphism, integers-modulo-n, ring, ring-basic-properties, ring-examples, subring, real-number-arithmetic, vector-space, matrix, matrix-product-properties, integer-cancellation]
sources:
  - ref: judson-abstract-algebra
    loc: 16.3절 환 준동형, 환의 동형사상, 핵의 정의(번호 없음) p.195, Example 16.20 p.195, Proposition 16.22 p.196. 16.7절 연습문제 18 p.205, 부록 B 의 힌트 16.7.18 p.329
    checked: original
    note: "출처는 환 R, S 사이의 환 준동형을 모든 a, b ∈ R 에서 ϕ(a + b) = ϕ(a) + ϕ(b), ϕ(ab) = ϕ(a)ϕ(b) 인 사상으로, 일대일이고 위로의 준동형을 환의 동형사상으로, ker ϕ = {r ∈ R : ϕ(r) = 0} 을 핵으로 정의한다(p.195). 출처의 정의에도 1 을 1 로 보내는 조건은 없고, 이 항목은 출처를 따른다. 출처는 상 ϕ(R) 을 따로 정의하지 않고 Proposition 16.22(p.196)에서 쓴다(군에서는 homomorphic image 를 p.133 에서 정의한다). (1)의 ϕ(0) = 0 은 Proposition 16.22 의 2 이고, 출처는 Proposition 16.27 의 증명(p.197)에서 핵이 덧셈의 부분군이라는 것을 군론에서 안다고 쓴다. (1)의 나머지는 출처에 명제로 없다. (2)는 출처에 환에 대한 명제로 없고, Theorem 18.4 의 증명(p.228)이 환 준동형 ψ 의 핵이 영원소뿐이므로 ψ 가 단사라고 쓴다(검색어 'one-to-one if and only if', 'ker ϕ = {0}|kernel.{0,40}{0}', '(one-to-one|injective).{0,60}kernel|kernel.{0,60}(one-to-one|injective)' 을 책 전체에서 찾았다). 군에 대한 같은 진술은 출처 11장 연습문제 18(p.139)이다. (3)의 (i)은 출처에 명제로 없다. 출처는 Proposition 16.22 의 1 과 4 에서 ϕ(R) 을 환으로 다룬다(검색어 'ϕ(R) is a (sub)?ring', 'image of a ring', 'homomorphic image' 3건은 모두 군). (3)의 (ii), (iii)은 출처에서 찾지 못했다(검색어 'restrict' 7건은 부분군의 정의와 23장). (4)는 Proposition 16.22 의 1 이고, 출처는 Proposition 16.22 의 증명을 연습문제 16.18(p.205)로 둔다. 힌트 16.7.18(p.329)이 적는 ϕ(a)ϕ(b) = ϕ(ab) = ϕ(ba) = ϕ(b)ϕ(a) 는 이 항목의 (4)의 증명과 같다. (5)의 마지막 문장은 Proposition 16.22 의 3('1_R 과 1_S 가 R 과 S 의 항등원이고 ϕ 가 위로의 사상이면 ϕ(1_R) = 1_S')이다. (5)의 앞 문장들(ϕ(1) 이 상의 곱셈의 항등원이고, 상이 단위원을 갖는 환일 세 동치 조건)은 출처에서 찾지 못했다(검색어 'ϕ(1|ψ(1|σ(1' 8건은 치환, 9장의 동형사상, Proposition 16.22 와 연습문제 16.18). Proposition 16.22 의 4(R 이 체이고 ϕ(R) ≠ {0} 이면 ϕ(R) 은 체)는 이 항목에 싣지 않는다. (6)은 출처에서 찾지 못했다(검색어 'composition of (two )?(ring )?homomorphisms', 'inverse of (a|an|the) (ring )?isomorphism' 0건, 'ring isomorphism|isomorphism of rings|isomorphic rings' 3건은 정의와 연습문제 16.39, 17장 연습문제 16). 출처 연습문제 16.35(b)(p.207)는 환의 자기동형사상 전체 Aut(R) 가 군이라는 것을 전제로 묻는다. (7)의 (i)은 출처 Example 16.20(p.195)과 같은 함수이다. 출처는 정수 n 마다 a 를 a (mod n) 으로 보내는 환 준동형 ℤ → ℤ_n 이라 하고 두 등식과 핵 nℤ 를 적으며, 전사라는 것은 적지 않는다. (7)의 (ii) 포함 함수와 (iii) 영 준동형은 출처에서 찾지 못했다(검색어 'inclusion' 6건은 집합의 포함과 13장, 19장, 'zero homomorphism|zero map|trivial homomorphism' 1건은 22장의 'nonzero homomorphism of fields'). (7)의 (iv)의 함수 n ↦ 2n 은 출처 11장 연습문제 4(p.138, ℤ → ℤ, n ↦ 7n 이 군 준동형임을 보이고 핵과 상을 구하라)와 같은 꼴이다. 예시(실수를 스칼라 행렬로)는 출처 연습문제 16.10(p.205)이 ℂ 에서 M₂(ℝ) 로의 사상이 상 위로의 동형사상임을 보이게 하는 것과 같은 발상이다. 반례의 함수 n ↦ nn 은 출처 1장 연습문제 18(d)(p.14)에 ℤ → ℤ, x ↦ x² 로 나오고, 거기서는 단사와 전사를 묻는다. 첫째 확인 질문은 출처 11.5절 추가 연습문제 7(p.140, ℤ → ℤ 의 군 준동형을 모두 구하라)과 연습문제 16.6(p.205, ℤ/6ℤ → ℤ/15ℤ 의 준동형을 모두 구하라)과 같은 종류의 물음이다. 둘째 확인 질문은 출처 Proposition 16.22 의 3(p.196, 위로의 환 준동형이면 ϕ(1_R) = 1_S)과 같은 발상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 일반 문장으로 읽히는 반례 제목(n = 1, 영환, 체인 경우)을 좁히고 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$(R, +, \cdot)$와 $(R', +', \cdot')$이 [[ring|환]]이라 하자. 두 환 모두에 [[ring|환]]의 표기를 쓴다. 곧 $R'$의 합과 곱도 $x + y$, $xy$로 쓰고, 두 환의 덧셈의 항등원을 모두 $0$으로 쓰며(밝혀야 하면 $0_R$, $0_{R'}$), 덧셈의 역원 $-x$, 뺄셈 $x - y$, 정수배 $n \cdot x$는 $x$, $y$가 속한 환에서 계산한다. 덧셈군 $(R, +)$와 $(R', +')$은 [[number-groups|수로 이루어진 군]]의 덧셈 표기로 쓰는 아벨군이다.

[[function|함수]] $\varphi : R \to R'$이 환 $R$에서 환 $R'$으로의 **환 준동형**(ring homomorphism)인 것은 정확히 모든 $a, b \in R$에 대하여
$$\varphi(a + b) = \varphi(a) + \varphi(b), \qquad \varphi(ab) = \varphi(a)\varphi(b)$$
일 때이다. 두 등식에서 $\varphi$의 괄호 안의 합과 곱은 $R$에서, 오른쪽의 합과 곱은 $R'$에서 계산한다. $R$와 $R'$이 단위원을 갖는 환이어도 이 정의는 $\varphi$가 $R$의 단위원을 $R'$의 단위원으로 보낼 것을 요구하지 않는다.

$\varphi : R \to R'$이 **환 동형사상**(ring isomorphism)인 것은 정확히 $\varphi$가 환 준동형이고 $\varphi : R \to R'$이 [[injective-surjective-bijective|전단사]]일 때이다. 환 $R$와 $R'$이 **환으로서 동형**(isomorphic as rings)인 것은 정확히 $R$에서 $R'$으로의 환 동형사상이 있을 때이고, 이를 $R \cong R'$으로 쓴다. 기호 $\cong$은 [[group-isomorphism|군의 동형]]과 같은 기호이며, 두 환 사이에 쓸 때는 이 뜻이다.

환 준동형 $\varphi$의 **핵**(kernel)과 **상**(image)을
$$\operatorname{Ker} \varphi = \{a \in R : \varphi(a) = 0\}, \qquad \varphi(R) = \{\varphi(a) : a \in R\}$$
로 정하고, $X \subseteq R$이면 $\varphi(X) = \{\varphi(x) : x \in X\}$로 쓴다. 이것은 [[image-and-preimage|상과 역상]]의 (1)의 상이다.

다음이 성립한다. (1)–(5)에서 $\varphi : R \to R'$은 환 준동형이다.

1. (덧셈군의 준동형) $\varphi$는 덧셈군 $(R, +)$에서 덧셈군 $(R', +')$으로의 [[group-homomorphism|군 준동형]]이고, $\operatorname{Ker} \varphi$는 이 군 준동형의 [[homomorphism-kernel-and-image|핵]]과 같은 집합이다. 따라서 $a, b \in R$이고 $n$이 정수이면 $\varphi(0) = 0$, $\varphi(-a) = -\varphi(a)$, $\varphi(a - b) = \varphi(a) - \varphi(b)$, $\varphi(n \cdot a) = n \cdot \varphi(a)$이다. 또 $\operatorname{Ker} \varphi$는 $(R, +)$의 부분군이고, $\varphi(a) = \varphi(b)$인 것은 정확히 $a - b \in \operatorname{Ker} \varphi$일 때이다.
2. (단사) $\varphi$가 단사인 것은 정확히 $\operatorname{Ker} \varphi = \{0\}$일 때이다.
3. (부분환의 상, 제한, 공역) 부분환은 [[subring|부분환]]의 뜻이다.
   - (i) $S$가 $R$의 부분환이면 $\varphi(S)$는 $R'$의 부분환이다. 특히 상 $\varphi(R)$은 $R'$의 부분환이다. $\varphi : R \to R'$이 전사인 것은 정확히 $\varphi(R) = R'$일 때이다.
   - (ii) $S$가 $R$의 부분환이면 $\varphi$의 $S$로의 [[adding-or-removing-an-element|제한]] $\varphi|_S : S \to R'$은 환 $S$에서 환 $R'$으로의 환 준동형이다.
   - (iii) $S'$이 $R'$의 부분환이고 모든 $a \in R$에서 $\varphi(a) \in S'$이면, 같은 집합 $\varphi$를 [[function|함수]] $\varphi : R \to S'$으로 선언한 것은 환 $R$에서 환 $S'$으로의 환 준동형이다. 특히 $\varphi : R \to \varphi(R)$은 환 준동형이다.
4. (가환환) $R$이 가환환이면 환 $\varphi(R)$도 가환환이다.
5. (단위원) $R$이 단위원 $1$을 갖는 환이라 하자. 그러면 $\varphi(1)$은 환 $\varphi(R)$의 곱셈의 항등원이다. 다음 세 조건은 서로 동치이다: 환 $\varphi(R)$이 단위원을 갖는 환이다, $\varphi(R) \ne \{0\}$이다, $\varphi(1) \ne 0$이다. 이때 환 $\varphi(R)$의 단위원은 $\varphi(1)$이다. 또 $\varphi : R \to R'$이 전사이면 $\varphi(1)$은 $R'$의 곱셈의 항등원이고, 따라서 $R'$이 단위원 $1'$을 갖는 환이면 $\varphi(1) = 1'$이다.
6. (합성, 항등함수, 역함수) $(R'', +'', \cdot'')$이 환이라 하자.
   - (i) $\varphi : R \to R'$과 $\psi : R' \to R''$이 환 준동형이면 [[function-composition|합성]] $\psi \circ \varphi : R \to R''$은 환 준동형이다. 둘 다 환 동형사상이면 $\psi \circ \varphi$도 환 동형사상이다.
   - (ii) [[inverse-function|항등함수]] $i_R : R \to R$은 환 동형사상이다.
   - (iii) $\varphi : R \to R'$이 환 동형사상이면 [[inverse-function|역함수]] $\varphi^{-1} : R' \to R$가 있고, $\varphi^{-1}$은 환 $R'$에서 환 $R$로의 환 동형사상이다.
   - (iv) 따라서 모든 환 $R$, $R'$, $R''$에 대하여 다음이 성립한다. (반사) $R \cong R$이다. (대칭) $R \cong R'$이면 $R' \cong R$이다. (추이) $R \cong R'$이고 $R' \cong R''$이면 $R \cong R''$이다.
7. (예) 환 $\mathbb{Z}$, $\mathbb{Z}_m$은 [[ring-examples|환의 예]]의 것이다.
   - (i) $m$이 자연수이면, 각 정수 $n$에 [[integers-modulo-n|법 m의 정수]]의 동치류 $[n]$을 대응시키는 함수 $f : \mathbb{Z} \to \mathbb{Z}_m$은 환 준동형이고, $f : \mathbb{Z} \to \mathbb{Z}_m$은 전사이며, $\operatorname{Ker} f = m\mathbb{Z}$이다.
   - (ii) $S$가 $R$의 부분환이면, 모든 $a \in S$에서 값이 $a$인 함수 $\iota : S \to R$, 곧 **포함 함수**(inclusion)는 단사인 환 준동형이고 $\operatorname{Ker} \iota = \{0\}$이다.
   - (iii) 모든 $a \in R$에서 값이 $0$인 함수 $R \to R'$은 환 준동형이고 그 핵은 $R$이다. 이것을 **영 준동형**(zero homomorphism)이라 한다. $R$와 $R'$이 단위원을 갖는 환이면 영 준동형은 $R$의 단위원을 $0$으로 보내고, $0$은 $R'$의 단위원과 다르다.
   - (iv) 각 정수 $n$에 $2n$을 대응시키는 함수 $d : \mathbb{Z} \to \mathbb{Z}$는 덧셈군 $(\mathbb{Z}, +)$에서 $(\mathbb{Z}, +)$로의 군 준동형이지만 환 준동형이 아니다. $d(1 \cdot 1) = 2$이고 $d(1)d(1) = 4$이다.
:::

:::english
Let $(R, +, \cdot)$ and $(R', +', \cdot')$ be rings. We use the notation of the entry on rings for both. That is, sums and products in $R'$ are also written $x + y$ and $xy$, the additive identities of both rings are written $0$ (or $0_R$, $0_{R'}$ when needed), and additive inverses $-x$, differences $x - y$ and integer multiples $n \cdot x$ are computed in the ring to which $x$ and $y$ belong. The additive groups $(R, +)$ and $(R', +')$ are abelian groups written in the additive notation of the entry on groups of numbers.

A function $\varphi : R \to R'$ is a **ring homomorphism** from the ring $R$ to the ring $R'$ exactly when, for all $a, b \in R$,
$$\varphi(a + b) = \varphi(a) + \varphi(b), \qquad \varphi(ab) = \varphi(a)\varphi(b).$$
In both equations the sum and product inside the parentheses of $\varphi$ are computed in $R$, and those on the right in $R'$. Even if $R$ and $R'$ are rings with unity, this definition does not require $\varphi$ to send the unity of $R$ to the unity of $R'$.

$\varphi : R \to R'$ is a **ring isomorphism** exactly when $\varphi$ is a ring homomorphism and $\varphi : R \to R'$ is a bijection. Rings $R$ and $R'$ are **isomorphic as rings** exactly when there is a ring isomorphism from $R$ to $R'$; we write $R \cong R'$. The symbol $\cong$ is the same as in the entry on group isomorphisms; between two rings it has this meaning.

The **kernel** and the **image** of a ring homomorphism $\varphi$ are
$$\operatorname{Ker} \varphi = \{a \in R : \varphi(a) = 0\}, \qquad \varphi(R) = \{\varphi(a) : a \in R\},$$
and for $X \subseteq R$ we write $\varphi(X) = \{\varphi(x) : x \in X\}$. This is the image of item (1) of the entry on images and preimages.

The following hold. In (1)–(5), $\varphi : R \to R'$ is a ring homomorphism.

1. (Homomorphism of additive groups) $\varphi$ is a group homomorphism from the additive group $(R, +)$ to the additive group $(R', +')$, and $\operatorname{Ker} \varphi$ is the same set as the kernel of this group homomorphism. Hence, for $a, b \in R$ and an integer $n$, $\varphi(0) = 0$, $\varphi(-a) = -\varphi(a)$, $\varphi(a - b) = \varphi(a) - \varphi(b)$ and $\varphi(n \cdot a) = n \cdot \varphi(a)$. Moreover, $\operatorname{Ker} \varphi$ is a subgroup of $(R, +)$, and $\varphi(a) = \varphi(b)$ exactly when $a - b \in \operatorname{Ker} \varphi$.
2. (Injectivity) $\varphi$ is injective exactly when $\operatorname{Ker} \varphi = \{0\}$.
3. (Images of subrings, restrictions, codomains) Subrings are as in the entry on subrings.
   - (i) If $S$ is a subring of $R$, then $\varphi(S)$ is a subring of $R'$. In particular, the image $\varphi(R)$ is a subring of $R'$. $\varphi : R \to R'$ is surjective exactly when $\varphi(R) = R'$.
   - (ii) If $S$ is a subring of $R$, then the restriction $\varphi|_S : S \to R'$ of $\varphi$ to $S$ is a ring homomorphism from the ring $S$ to the ring $R'$.
   - (iii) If $S'$ is a subring of $R'$ and $\varphi(a) \in S'$ for all $a \in R$, then the same set $\varphi$, declared as a function $\varphi : R \to S'$, is a ring homomorphism from the ring $R$ to the ring $S'$. In particular, $\varphi : R \to \varphi(R)$ is a ring homomorphism.
4. (Commutative rings) If $R$ is a commutative ring, then so is the ring $\varphi(R)$.
5. (Unity) Let $R$ be a ring with unity $1$. Then $\varphi(1)$ is the multiplicative identity of the ring $\varphi(R)$. The following three conditions are equivalent: the ring $\varphi(R)$ is a ring with unity; $\varphi(R) \ne \{0\}$; $\varphi(1) \ne 0$. In that case the unity of the ring $\varphi(R)$ is $\varphi(1)$. Moreover, if $\varphi : R \to R'$ is surjective, then $\varphi(1)$ is the multiplicative identity of $R'$; hence, if $R'$ is a ring with unity $1'$, then $\varphi(1) = 1'$.
6. (Composition, identity, inverse) Let $(R'', +'', \cdot'')$ be a ring.
   - (i) If $\varphi : R \to R'$ and $\psi : R' \to R''$ are ring homomorphisms, then the composition $\psi \circ \varphi : R \to R''$ is a ring homomorphism. If both are ring isomorphisms, so is $\psi \circ \varphi$.
   - (ii) The identity function $i_R : R \to R$ is a ring isomorphism.
   - (iii) If $\varphi : R \to R'$ is a ring isomorphism, then the inverse function $\varphi^{-1} : R' \to R$ exists and is a ring isomorphism from the ring $R'$ to the ring $R$.
   - (iv) Hence, for all rings $R$, $R'$, $R''$: (reflexivity) $R \cong R$; (symmetry) if $R \cong R'$, then $R' \cong R$; (transitivity) if $R \cong R'$ and $R' \cong R''$, then $R \cong R''$.
7. (Examples) The rings $\mathbb{Z}$ and $\mathbb{Z}_m$ are those of the entry on examples of rings.
   - (i) If $m$ is a natural number, the function $f : \mathbb{Z} \to \mathbb{Z}_m$ that assigns to each integer $n$ its class $[n]$ in the integers modulo $m$ is a ring homomorphism, $f : \mathbb{Z} \to \mathbb{Z}_m$ is surjective, and $\operatorname{Ker} f = m\mathbb{Z}$.
   - (ii) If $S$ is a subring of $R$, then the function $\iota : S \to R$ with value $a$ at every $a \in S$, the **inclusion**, is an injective ring homomorphism and $\operatorname{Ker} \iota = \{0\}$.
   - (iii) The function $R \to R'$ whose value at every $a \in R$ is $0$ is a ring homomorphism, and its kernel is $R$. It is called the **zero homomorphism**. If $R$ and $R'$ are rings with unity, the zero homomorphism sends the unity of $R$ to $0$, and $0$ differs from the unity of $R'$.
   - (iv) The function $d : \mathbb{Z} \to \mathbb{Z}$ that assigns $2n$ to each integer $n$ is a group homomorphism from $(\mathbb{Z}, +)$ to $(\mathbb{Z}, +)$ but not a ring homomorphism: $d(1 \cdot 1) = 2$ while $d(1)d(1) = 4$.
:::

## 직관

환 준동형은 두 환 사이에서 계산을 옮겨 주는 함수입니다. $R$에서 더하거나 곱한 뒤 옮기든, 옮긴 뒤 $R'$에서 더하거나 곱하든 결과가 같습니다. 시계가 좋은 예입니다. 정수를 $12$로 나눈 나머지로 옮기는 함수((7)의 (i)에서 $m = 12$)는 시각을 더한 뒤 시계에 놓든, 시계에 놓은 뒤 시계 위에서 더하든 같은 자리를 가리키고, 곱도 마찬가지입니다. 비유에서 "옮긴다"가 함수 $\varphi$에, "같은 자리를 가리킨다"가 정의의 두 등식에 해당합니다.

덧셈만 보면 환 준동형은 덧셈군 사이의 [[group-homomorphism|군 준동형]]입니다. 그래서 $0$이 $0$으로 가고 핵으로 단사를 판정하는 일처럼 군에서 증명한 것을 그대로 가져옵니다((1), (2)). 곱셈 쪽에서 새로 생기는 것은 상이 곱셈에도 닫혀 부분환이 된다는 것((3))과, $R$에 있는 곱셈의 성질인 가환성과 곱셈의 항등원이 상으로 옮겨 간다는 것((4), (5))입니다.

다만 $\varphi(1)$이 언제나 공역 $R'$의 단위원인 것은 아닙니다. (5)가 보장하는 것은 $\varphi(1)$이 상 $\varphi(R)$의 곱셈의 항등원이라는 것이고, 상이 $R'$ 전체가 아니면 이것이 $R'$의 단위원과 다를 수 있습니다. 영 준동형은 단위원 $1$을 $0$으로 보내며((7)의 (iii)), 이 사이트는 출처를 따라 환 준동형에 $\varphi(1) = 1$을 요구하지 않습니다.

:::remark[(1)–(3)의 증명]
아래에서 "군 준동형의 ($k$)"는 [[group-homomorphism|군 준동형]]의 ($k$), "핵과 상의 ($k$)"는 [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 ($k$), "부분환의 ($k$)"는 [[subring|부분환]]의 ($k$)이다. [[ring|환]]의 정의에 의해 $(R, +)$와 $(R', +')$은 아벨군이다.

(1) 정의의 첫째 등식에 의해 모든 $a, b \in R$에서 $\varphi(a + b) = \varphi(a) + \varphi(b)$이므로, 군 준동형의 (6)(두 군이 모두 덧셈 표기인 경우)에 의해 $\varphi$는 $(R, +)$에서 $(R', +')$으로의 준동형이고, $\varphi(0) = 0$, $\varphi(-a) = -\varphi(a)$이며 모든 정수 $n$에서 $\varphi(n \cdot a) = n \cdot \varphi(a)$이다. 따라서
$$\varphi(a - b) = \varphi(a + (-b)) = \varphi(a) + \varphi(-b) = \varphi(a) + (-\varphi(b)) = \varphi(a) - \varphi(b)$$
이다. 이 군 준동형의 핵은 $\{a \in R : \varphi(a) = e'\}$이고 $e'$은 $(R', +')$의 항등원, 곧 $R'$의 $0$이므로 $\operatorname{Ker} \varphi$와 같은 집합이다. 핵과 상의 (1)에 의해 $\operatorname{Ker} \varphi$는 $(R, +)$의 부분군이다. 핵과 상의 (2)의 둘째 조건 "$ab^{-1} \in \operatorname{Ker} \varphi$"를 덧셈 표기로 읽으면 "$a + (-b) \in \operatorname{Ker} \varphi$", 곧 "$a - b \in \operatorname{Ker} \varphi$"이다.

(2) 핵과 상의 (3)에 의해 $\varphi$가 단사인 것은 정확히 이 군 준동형의 핵이 $(R, +)$의 항등원만으로 이루어질 때, 곧 $\operatorname{Ker} \varphi = \{0\}$일 때이다.

(3)의 (i) $S$가 $R$의 부분환이라 하자. 부분환의 (1)에 의해 $0 \in S$이므로 $\varphi(0) \in \varphi(S)$이고 $\varphi(S) \ne \emptyset$이다. $x, y \in \varphi(S)$이면 $x = \varphi(a)$, $y = \varphi(b)$인 $a, b \in S$가 있다. 부분환의 (2)에 의해 $a - b \in S$이고 $ab \in S$이므로, (1)과 정의에 의해
$$x - y = \varphi(a) - \varphi(b) = \varphi(a - b) \in \varphi(S), \qquad xy = \varphi(a)\varphi(b) = \varphi(ab) \in \varphi(S)$$
이다. $\varphi(S) \subseteq R'$이므로 부분환의 (2)에 의해 $\varphi(S)$는 $R'$의 부분환이다. 부분환의 (3)의 (i)에 의해 $R$은 $R$의 부분환이므로 $\varphi(R)$은 $R'$의 부분환이다. 마지막 문장은 (1)의 군 준동형에 핵과 상의 (4)의 마지막 문장을 쓴 것이다.

(3)의 (ii) [[adding-or-removing-an-element|제한]]의 정의에 의해 $\varphi|_S : S \to R'$은 함수이고 모든 $a \in S$에서 $\varphi|_S(a) = \varphi(a)$이다. 부분환의 (1)에 의해 $a, b \in S$이면 환 $S$에서의 $a + b$와 $ab$는 $R$에서의 것과 같고 $S$에 속한다. 따라서
$$\varphi|_S(a + b) = \varphi(a + b) = \varphi(a) + \varphi(b) = \varphi|_S(a) + \varphi|_S(b)$$
이고, $\varphi|_S(ab) = \varphi(ab) = \varphi(a)\varphi(b) = \varphi|_S(a)\varphi|_S(b)$이다.

(3)의 (iii) 모든 값이 $S'$에 속하므로 [[function|함수]]의 공역의 약속에 의해 같은 집합 $\varphi$는 $R$에서 $S'$으로의 함수이다. $a, b \in R$이면 $\varphi(a), \varphi(b) \in S'$이고, 부분환의 (1)에 의해 환 $S'$에서의 $\varphi(a) + \varphi(b)$와 $\varphi(a)\varphi(b)$는 $R'$에서의 것과 같다. 따라서 정의의 두 등식은 환 $S'$의 연산으로 읽어도 성립한다. (i)에 의해 $\varphi(R)$은 $R'$의 부분환이고 모든 값이 $\varphi(R)$에 속하므로 마지막 문장이 나온다.
:::

:::remark[(4)–(7)의 증명]
"부분환의 ($k$)"는 앞 블록과 같다. (3)의 (i)에 의해 $\varphi(R)$은 $R'$의 부분환이고, 부분환의 (1)에 의해 환 $\varphi(R)$의 $0$, 합, 곱은 $R'$에서의 것과 같다.

(4) $x, y \in \varphi(R)$이면 $x = \varphi(a)$, $y = \varphi(b)$인 $a, b \in R$이 있고, $R$이 가환환이므로 $xy = \varphi(a)\varphi(b) = \varphi(ab) = \varphi(ba) = \varphi(b)\varphi(a) = yx$이다.

(5) $e = \varphi(1)$이라 하자. $y \in \varphi(R)$이면 $y = \varphi(a)$인 $a \in R$이 있고, $1$이 $R$의 곱셈의 항등원이므로 $ey = \varphi(1)\varphi(a) = \varphi(1a) = \varphi(a) = y$이고 $ye = \varphi(a1) = \varphi(a) = y$이다. 따라서 $e$는 환 $\varphi(R)$의 곱셈의 항등원이다. [[ring-basic-properties|환의 기본 성질]]의 (7)을 환 $\varphi(R)$과 그 곱셈의 항등원 $e$에 쓰면, $e = 0$인 것은 정확히 $\varphi(R) = \{0\}$일 때이고, 환 $\varphi(R)$이 단위원을 갖는 환인 것은 정확히 $\varphi(R) \ne \{0\}$일 때이다. 따라서 세 조건은 동치이다. [[ring|환]]의 정의에 의해 단위원은 곱셈의 항등원 $e = \varphi(1)$이다. $\varphi : R \to R'$이 전사이면 (3)의 (i)에 의해 $\varphi(R) = R'$이므로 위의 계산은 모든 $y \in R'$에서 $ey = y = ye$를 보여 준다. 곧 $e$는 $R'$의 곱셈의 항등원이다. $R'$이 단위원 $1'$을 갖는 환이면 $1'$도 $R'$의 곱셈의 항등원이므로 [[binary-operation|이항연산]]의 (1)에 의해 $e = 1'$이다.

(6)의 (i) $a, b \in R$이면 [[function-composition|합성]]의 정의와 두 함수의 정의의 등식에 의해
$$(\psi \circ \varphi)(a + b) = \psi(\varphi(a) + \varphi(b)) = \psi(\varphi(a)) + \psi(\varphi(b)) = (\psi \circ \varphi)(a) + (\psi \circ \varphi)(b)$$
이고, $(\psi \circ \varphi)(ab) = \psi(\varphi(a)\varphi(b)) = \psi(\varphi(a))\psi(\varphi(b)) = (\psi \circ \varphi)(a)(\psi \circ \varphi)(b)$이다. 둘 다 환 동형사상이면 둘 다 덧셈군의 동형사상이므로 [[group-isomorphism|군의 동형]]의 (2)에 의해 $\psi \circ \varphi$는 덧셈군의 동형사상이고, 특히 전단사이다.

(6)의 (ii) 모든 $a, b \in R$에서 $i_R(a + b) = a + b = i_R(a) + i_R(b)$이고 $i_R(ab) = ab = i_R(a)i_R(b)$이다. 군의 동형의 (2)를 덧셈군 $(R, +)$에 쓰면 $i_R$은 전단사이다.

(6)의 (iii) (1)에 의해 $\varphi$는 덧셈군의 준동형이고 전단사이므로 덧셈군의 동형사상이다. 군의 동형의 (1)에 의해 역함수 $\varphi^{-1} : R' \to R$가 있고, 이것은 덧셈군의 동형사상, 곧 전단사이고 덧셈을 보존한다. 곱셈: $x, y \in R'$이라 하고 $a = \varphi^{-1}(x)$, $b = \varphi^{-1}(y)$라 하자. [[inverse-function|역함수]]의 등식 $\varphi \circ \varphi^{-1} = i_{R'}$에 의해 $\varphi(a) = x$, $\varphi(b) = y$이므로 $\varphi(ab) = \varphi(a)\varphi(b) = xy$이다. 등식 $\varphi^{-1} \circ \varphi = i_R$에 의해 $\varphi^{-1}(xy) = \varphi^{-1}(\varphi(ab)) = ab = \varphi^{-1}(x)\varphi^{-1}(y)$이다.

(6)의 (iv) (반사)는 (ii), (대칭)은 (iii), (추이)는 (i)이다.

(7)의 (i) [[ring-examples|환의 예]]의 (1), (3)에 의해 환 $\mathbb{Z}$의 연산은 정수의 덧셈과 곱셈이고 환 $\mathbb{Z}_m$의 연산은 [[integers-modulo-n|법 n의 정수]]의 (2)의 덧셈과 곱셈이다. 군 준동형의 (7)의 (i)에 의해 모든 정수 $a$, $b$에서 $f(a + b) = f(a) + f(b)$이다. 법 n의 정수의 (2)에 의해 $f(ab) = [ab] = [a][b] = f(a)f(b)$이다. 따라서 $f$는 환 준동형이다. 핵과 상의 (8)에 의해 $f(\mathbb{Z}) = \mathbb{Z}_m$이고 $f$의 군 준동형으로서의 핵은 $m\mathbb{Z}$이므로, (3)의 (i)과 (1)에 의해 $f$는 전사이고 $\operatorname{Ker} f = m\mathbb{Z}$이다.

(7)의 (ii) $\iota$는 (6)의 (ii)의 환 준동형 $i_R$의 $S$로의 제한이므로 (3)의 (ii)에 의해 환 준동형이다. $\iota(a) = \iota(b)$이면 $a = b$이므로 단사이다. 부분환의 (1)에 의해 $0 \in S$이므로 $\operatorname{Ker} \iota = \{a \in S : a = 0\} = \{0\}$이다.

(7)의 (iii) 이 함수를 $z = \{(a, 0) : a \in R\}$라 하자. $a, b \in R$이면 [[group|군]]의 항등원의 정의에 의해 $z(a + b) = 0 = 0 + 0 = z(a) + z(b)$이고, [[ring-basic-properties|환의 기본 성질]]의 (1)에 의해 $z(ab) = 0 = 00 = z(a)z(b)$이다. 모든 $a \in R$에서 $z(a) = 0$이므로 $\operatorname{Ker} z = R$이다. $R'$이 단위원 $1'$을 갖는 환이면 [[ring|환]]의 정의에 의해 $1' \ne 0$이고, $z(1) = 0$이다.

(7)의 (iv) 정수끼리의 곱은 정수이므로([[even-and-odd]]에서 받아들인 사실) $d = \{(n, 2n) : n \in \mathbb{Z}\}$는 $\mathbb{Z}$에서 $\mathbb{Z}$로의 함수이다. 정수의 분배법칙([[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 계산 법칙)에 의해 $d(a + b) = 2(a + b) = 2a + 2b = d(a) + d(b)$이므로 군 준동형의 (6)에 의해 $d$는 $(\mathbb{Z}, +)$의 준동형이다. 그러나 $d(1 \cdot 1) = d(1) = 2$이고 $d(1)d(1) = 2 \cdot 2 = 4$이며 $2 \ne 4$이므로 $d$는 환 준동형이 아니다.
:::

## 예시와 반례

:::example[실수를 스칼라 행렬로 보내는 준동형]
$n$이 자연수이고, [[ring-examples|환의 예]]의 (2)의 환 $\mathbb{R}$와 (5)의 환 $M_n(\mathbb{R})$을 봅시다. 각 실수 $c$에 행렬 $cI_n$을 대응시키는 함수를 $\sigma : \mathbb{R} \to M_n(\mathbb{R})$이라 합시다. [[vector-space|벡터공간]]의 (V8)과 [[matrix|행렬]]의 (1)에 의해 $\sigma(c + d) = (c + d)I_n = cI_n + dI_n$이고, [[matrix-product-properties|행렬 곱의 성질]]의 (3)과 (4), 벡터공간의 (V6)에 의해
$$\sigma(c)\sigma(d) = (cI_n)(dI_n) = c\bigl(I_n(dI_n)\bigr) = c(dI_n) = (cd)I_n = \sigma(cd)$$
입니다. 따라서 $\sigma$는 환 준동형입니다.

$\sigma(c)$가 영행렬이면 그 $(1, 1)$ 성분은 행렬의 (1)과 (6)에 의해 $c \cdot 1 = c$이고([[real-number-arithmetic|실수의 계산 법칙]]의 (K4)) 영행렬의 성분은 $0$이므로 행렬의 (2)에 의해 $c = 0$입니다. 곧 $\operatorname{Ker} \sigma = \{0\}$이고 (2)에 의해 $\sigma$는 단사입니다. 또 (V5)에 의해 $\sigma(1) = 1I_n = I_n$이므로, 이 준동형은 단위원을 단위원으로 보냅니다. $n \ge 2$이면 $M_n(\mathbb{R})$은 가환환이 아니지만(환의 예의 (5)), (4)에 의해 상 $\sigma(\mathbb{R}) = \{cI_n : c \in \mathbb{R}\}$은 가환환입니다.
:::

:::counterexample[곱셈만 보존하는 함수]
각 정수 $n$에 $nn$을 대응시키는 함수 $q : \mathbb{Z} \to \mathbb{Z}$를 봅시다(정수끼리의 곱은 정수이므로 함수입니다). 정수의 곱셈의 교환법칙과 결합법칙에 의해 모든 정수 $a$, $b$에서
$$q(ab) = (ab)(ab) = (aa)(bb) = q(a)q(b)$$
이므로 $q$는 곱셈을 보존합니다. 그러나 $q(1 + 1) = q(2) = 4$이고 $q(1) + q(1) = 1 + 1 = 2$이므로 덧셈을 보존하지 않고, 환 준동형이 아닙니다. (7)의 (iv)의 $d$는 덧셈만 보존했습니다. 정의의 두 등식은 어느 하나가 다른 하나에서 나오지 않습니다.
:::

## 확인 질문

:::check[환 $\mathbb{Z}$에서 환 $\mathbb{Z}$로의 환 준동형을 모두 구하라.]
영 준동형과 항등함수 $i_{\mathbb{Z}}$ 둘뿐입니다. $\varphi$가 환 준동형이고 $e = \varphi(1)$이라 하면 $e = \varphi(1 \cdot 1) = ee$이므로 $e(e - 1) = ee - e = 0$이고, [[integer-cancellation|정수 곱셈의 소거 법칙]]의 (1)에 의해 $e = 0$이거나 $e = 1$입니다. (1)에 의해 모든 정수 $n$에서 $\varphi(n \cdot 1) = n \cdot e$이고, [[power-in-a-group|군의 거듭제곱]]의 (6)에 의해 $(\mathbb{Z}, +)$에서 $n \cdot 1 = n$, $n \cdot e = ne$이므로 $\varphi(n) = ne$입니다. $e = 0$이면 $\varphi$는 영 준동형이고 $e = 1$이면 $\varphi = i_{\mathbb{Z}}$입니다. 둘이 환 준동형이라는 것은 (7)의 (iii)과 (6)의 (ii)입니다.
:::

:::check[환 동형사상 $\varphi : R \to R'$이 있고 $R$이 단위원 $1$을 갖는 환이면, $R'$도 단위원을 갖는 환인가?]
그렇습니다. $\varphi$는 단사이고 [[ring|환]]의 정의에 의해 $1 \ne 0$이므로 $\varphi(1) \ne \varphi(0) = 0$입니다((1)). (5)에 의해 환 $\varphi(R)$은 단위원 $\varphi(1)$을 갖는 환이고, $\varphi$가 전사이므로 (3)의 (i)에 의해 $\varphi(R) = R'$입니다. 따라서 $R'$은 단위원 $\varphi(1)$을 갖는 환입니다.
:::
