---
title: 표준 준동형
title_en: Canonical Homomorphism
aliases: [자연 준동형, 표준 사영, 자연 사영, natural homomorphism, canonical homomorphism, canonical projection, quotient map]
kind: theorem
field: group-theory
msc: ["20A05"]
level: undergrad
summary: N이 군 G의 정규부분군일 때 각 원소 a에 잉여류 aN을 대응시키는 함수 π는 G에서 몫군 G/N으로의 전사 준동형이고 그 핵은 N이다. 따라서 G의 부분군이 정규부분군인 것은 정확히 어떤 준동형의 핵일 때이다.
requires: [set, function, injective-surjective-bijective, recursion-theorem, group, group-basic-properties, subgroup, group-homomorphism, homomorphism-kernel-and-image, left-coset, normal-subgroup, quotient-group, number-groups, integers-modulo-n, symmetric-group, subgroup-examples]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 11.2절 The Isomorphism Theorems, 표준 준동형의 정의(번호 없음) p.135
    checked: original
    note: "출처는 정규부분군 H 에 대해 ϕ(g) = gH 로 정한 ϕ : G → G/H 를 natural 또는 canonical homomorphism 이라 부른다(p.135). 이 항목은 기호 π 를 쓴다. 출처는 준동형임을 ϕ(g₁g₂) = g₁g₂H = g₁Hg₂H = ϕ(g₁)ϕ(g₂) 한 줄로 보이고 'The kernel of this homomorphism is H' 라고 증명 없이 적는다. 전사라는 말은 출처의 이 자리에 없다(검색어 'canonical homomorphism.{0,120}(onto|surjective)' 0건, '(onto|surjective).{0,60}canonical' 0건, 'onto G ?/ ?H|G ?/ ?H is onto|onto the factor' 0건). (2)의 증명과 (1)의 전사는 이 사이트가 덧붙였다. (3)은 출처 p.135 의 문장('every normal subgroup of a group G gives rise to homomorphism of groups')과 11장 읽기 질문 5(p.138)가 말하는 내용이다. (4)는 잉여류의 (3)을 π 로 다시 쓴 것이고, 출처 Lemma 6.3(p.75)의 꼴이다. 예시 'ℤ 에서 ℤ_n 으로'의 함수는 출처 Example 16.20(p.195)이 환 준동형으로 보는 a ↦ a (mod n) 과 같고, 출처는 그 핵이 nℤ 라고 적는다. 예시 '두 극단'의 N = {e} 쪽은 출처 Example 13.14(p.163)가 ⟨20⟩/{0} ≅ ℤ₃ 처럼 자명한 부분군으로 나눈 몫군을 원래 군과 같이 보는 것과 같은 발상이다. 반례의 부분군은 X = {1, 2, 3}, z = 3 이면 출처 Example 10.2(p.125)와 같은 대상이다. 첫째 확인 질문은 준동형의 일반 성질로, 출처 Proposition 11.4 의 2(p.134)와 같은 내용이다. 둘째 확인 질문은 출처 부록의 힌트 3.5.1(p.320)이 3x ≡ 2 (mod 7) 의 해 전체를 3 + 7ℤ 로 적는 것과 같은 발상(합동식을 만족하는 정수 전체를 k + nℤ 꼴로 적는다)이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 단원 글의 '같다'를 '동형'으로, 근거 누락과 출처 예와 겹치는 것을 고침"
added: 2026-11-19
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이며 $N$이 $G$의 [[normal-subgroup|정규부분군]]이라 하자. 왼쪽 잉여류 $aN$은 [[left-coset|잉여류]]의 것이고, 군 $G/N$과 그 곱 $(aN)(bN) = (ab)N$은 [[quotient-group|몫군]]의 것이다. 준동형, 핵, 상은 [[group-homomorphism|군 준동형]]과 [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 것이다.

각 $a \in G$에 $aN \in G/N$을 대응시키는 함수 $\pi : G \to G/N$, 곧 모든 $a \in G$에서 $\pi(a) = aN$인 함수를 $N$에 대한 **표준 준동형**(canonical homomorphism)이라 한다. 다음이 성립한다.

1. (전사 준동형) $\pi$는 군 $G$에서 군 $G/N$으로의 준동형이고, $\pi : G \to G/N$은 [[injective-surjective-bijective|전사]]이다.
2. (핵) $\operatorname{Ker} \pi = N$이다.
3. (정규부분군과 핵) $G$의 부분군 $M$에 대하여, $M$이 $G$의 정규부분군인 것은 정확히 어떤 군 $G'$과 준동형 $\varphi : G \to G'$이 있어 $M = \operatorname{Ker} \varphi$일 때이다.
4. (값이 같을 조건) $a, b \in G$에 대하여 $\pi(a) = \pi(b)$인 것은 정확히 $a^{-1}b \in N$일 때이다.

$G$가 [[number-groups|수로 이루어진 군]]의 덧셈 표기로 쓰는 아벨군이면 $\pi(a) = a + N$이고, (4)의 조건은 $-a + b \in N$이다.
:::

:::english
Let $G$ be a group with identity $e$, and let $N$ be a normal subgroup of $G$. Left cosets $aN$ are those of the entry on cosets, and the group $G/N$ with its product $(aN)(bN) = (ab)N$ is that of the entry on quotient groups. Homomorphisms, kernels and images are those of the entries on group homomorphisms and on kernels and images of homomorphisms.

The function $\pi : G \to G/N$ assigning to each $a \in G$ the coset $aN \in G/N$, that is, the function with $\pi(a) = aN$ for all $a \in G$, is called the **canonical homomorphism** for $N$. The following hold.

1. (Surjective homomorphism) $\pi$ is a homomorphism from the group $G$ to the group $G/N$, and $\pi : G \to G/N$ is surjective.
2. (Kernel) $\operatorname{Ker} \pi = N$.
3. (Normal subgroups and kernels) For a subgroup $M$ of $G$, $M$ is a normal subgroup of $G$ exactly when there are a group $G'$ and a homomorphism $\varphi : G \to G'$ with $M = \operatorname{Ker} \varphi$.
4. (When values agree) For $a, b \in G$, $\pi(a) = \pi(b)$ exactly when $a^{-1}b \in N$.

If $G$ is an abelian group written in the additive notation of the entry on groups of numbers, then $\pi(a) = a + N$, and the condition in (4) reads $-a + b \in N$.
:::

## 직관

표준 준동형은 원소를 "그 원소가 속한 잉여류"로 보내는 함수입니다. 시계로 말하면 정수 시각 $a$를 시계판의 자리 $a + 12\mathbb{Z}$로 보내는 것이고, 시각을 더한 뒤 자리를 읽든 자리를 읽은 뒤 더하든 같다는 것이 준동형이라는 말입니다((1)). 시계판의 $12$시, 곧 몫군의 항등원으로 가는 시각은 $12$의 배수 전체, 곧 $N$입니다((2)). 비유에서 "시계판의 자리"가 잉여류에, "자리를 읽는다"가 $\pi$에 해당합니다.

(3)은 정규부분군과 준동형의 핵이 같은 것임을 말합니다. 한쪽 방향은 [[normal-subgroup|정규부분군]]의 (4)이고, 다른 쪽 방향은 정규부분군 $N$이 주어지면 $\pi$가 바로 $N$을 핵으로 갖는 준동형이라는 것입니다. 그래서 어떤 부분군이 정규부분군인지 알려면 그것이 어떤 준동형의 핵인지를 보면 되고, 거꾸로 준동형의 핵은 언제나 정규부분군입니다.

## 증명

:::idea
$\pi$가 준동형이라는 것은 몫군의 곱의 정의 $(aN)(bN) = (ab)N$을 거꾸로 읽은 것이다. 핵은 몫군의 항등원이 $N$이라는 것과 $aN = N$일 조건에서 나온다.
:::

:::hint
(3)의 한 방향은 이미 있다. 다른 방향에서는 $G' = G/N$으로 둔다.
:::

:::proof
아래에서 "잉여류의 ($k$)"는 [[left-coset|잉여류]]의 ($k$), "몫군의 ($k$)"는 [[quotient-group|몫군]]의 ($k$)이다.

**함수.** 각 $a \in G$에 대하여 $aN$은 [[left-coset|잉여류]]의 정의에 의해 $G/N$의 원소로 정해진 대상이므로, [[recursion-theorem|재귀 정리]]의 (1)에 의해 $\{(a, aN) : a \in G\}$는 $G$에서 $G/N$으로의 함수이고 $a$에서의 값은 $aN$이다.

**(1)** $a, b \in G$이면 [[quotient-group|몫군]]의 (2)에 의해 $\pi(ab) = (ab)N = (aN)(bN) = \pi(a)\pi(b)$이므로 $\pi$는 준동형이다. $P \in G/N$이면 $G/N$의 정의에 의해 $P = aN$인 $a \in G$가 있고 $\pi(a) = P$이므로 $\pi : G \to G/N$은 전사이다.

**(2)** 몫군의 (2)에 의해 군 $G/N$의 항등원은 $N$이다. 핵의 정의에 의해 $a \in \operatorname{Ker} \pi$인 것은 정확히 $\pi(a) = aN = N$일 때이고, 잉여류의 (5)에 의해 정확히 $a \in N$일 때이다. 따라서 $\operatorname{Ker} \pi = N$이다.

**(3)** $M$이 정규부분군이면, 몫군의 (2)에 의해 $G/M$은 군이고 (1), (2)를 $M$에 쓰면 $M$에 대한 표준 준동형 $G \to G/M$은 준동형이며 그 핵은 $M$이다. 거꾸로 $\varphi : G \to G'$이 준동형이고 $M = \operatorname{Ker} \varphi$이면 [[normal-subgroup|정규부분군]]의 (4)에 의해 $M$은 정규부분군이다.

**(4)** $\pi(a) = \pi(b)$인 것은 정확히 $aN = bN$일 때이고, 잉여류의 (3)의 (i)과 (iv)의 동치에 의해 정확히 $a^{-1}b \in N$일 때이다.

덧셈 표기: 잉여류의 (8)에 의해 $aN$은 $a + N$으로, $a^{-1}b$는 $-a + b$로 쓴다. $\blacksquare$
:::

## 예시와 반례

:::example[ℤ에서 ℤ_n으로]
$n$이 자연수이고 $G = (\mathbb{Z}, +)$, $N = n\mathbb{Z}$라 합시다. [[quotient-group|몫군]]의 (6)에 의해 몫군 $\mathbb{Z}/n\mathbb{Z}$는 군 $(\mathbb{Z}_n, +)$와 같고, [[left-coset|잉여류]]의 (8)에 의해 $\pi(a) = a + n\mathbb{Z} = [a]$입니다. 곧 표준 준동형 $\pi : \mathbb{Z} \to \mathbb{Z}_n$은 [[group-homomorphism|군 준동형]]의 (7)(i)의 준동형, 각 정수 $a$에 $[a]$를 대응시키는 함수와 같은 함수입니다(정의역이 같고 모든 정수에서 값이 같다). (2)에 의해 그 핵은 $n\mathbb{Z}$이고, 이는 [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (8)과도 맞습니다.
:::

:::example[두 극단]
$N = G$이면 [[quotient-group|몫군]]의 (7)에 의해 $G/G = \{G\}$이고 모든 $a$에서 $\pi(a) = aG = G$입니다. 곧 $\pi$는 원소가 하나인 군으로 가는 준동형이고 핵은 $G$ 전체입니다. $N = \{e\}$이면 $\pi(a) = a\{e\} = \{a\}$이고, (2)에 의해 핵은 $\{e\}$이므로 [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (3)에 의해 $\pi$는 단사입니다. (1)과 함께 $\pi : G \to G/\{e\}$는 전단사인 준동형입니다.
:::

:::counterexample[정규가 아닌 부분군은 어떤 준동형의 핵도 아니다]
$X$를 서로 다른 세 원소 $x$, $y$, $z$를 갖는 집합이라 하고, [[symmetric-group|대칭군]] $S_X$의 부분군 $H = \{f \in S_X : f(z) = z\}$([[subgroup-examples|부분군의 예와 교집합]]의 (6))를 봅시다. 곱 $fg$는 합성 $f \circ g$입니다. $x$와 $y$를 맞바꾸고 나머지를 그대로 두는 함수 $t : X \to X$와 $y$와 $z$를 맞바꾸고 나머지를 그대로 두는 함수 $s : X \to X$를 [[recursion-theorem|재귀 정리]]의 (1)로 정합니다. $t(t(x)) = t(y) = x$, $t(t(y)) = t(x) = y$이고 $x$도 $y$도 아닌 $w$에서 $t(t(w)) = w$이므로 $tt = i_X$이고, 같은 계산으로 $ss = i_X$입니다. $f \circ f = i_X$인 함수 $f : X \to X$는 [[injective-surjective-bijective|전단사]]이므로($f(a) = f(b)$이면 $a = f(f(a)) = f(f(b)) = b$이고, $b = f(f(b))$) $t, s \in S_X$이고, [[group-basic-properties|군의 기본 성질]]의 (3)에 의해 $s^{-1} = s$입니다.

$z$는 $x$도 $y$도 아니므로 $t(z) = z$이고 $t \in H$입니다. $x$는 $y$도 $z$도 아니므로 $s(x) = x$이고, $(sts^{-1})(z) = s(t(s(z))) = s(t(y)) = s(x) = x \ne z$이므로 $sts^{-1} \notin H$입니다. 따라서 $H$는 정규부분군이 아니고, (3)에 의해 어떤 군 $G'$과 준동형 $\varphi : S_X \to G'$을 잡아도 $\operatorname{Ker} \varphi \ne H$입니다. 정규가 아닌 부분군에는 (1), (2)의 $\pi$처럼 그 부분군을 핵으로 갖는 준동형이 없습니다.
:::

## 확인 질문

:::check[$N$이 $G$의 정규부분군이고 $a \in G$일 때 $\pi(a^{-1})$과 $\pi(a)^{-1}$은 같은가?]
같습니다. (1)에 의해 $\pi$는 준동형이므로 [[group-homomorphism|군 준동형]]의 (2)에 의해 $\pi(a^{-1}) = \pi(a)^{-1}$이고, 두 쪽 모두 $a^{-1}N$입니다. 이것은 [[quotient-group|몫군]]의 (2)의 "$aN$의 역원은 $a^{-1}N$"과 같은 내용입니다.
:::

:::check[$(\mathbb{Z}, +)$에서 $N = 9\mathbb{Z}$일 때 $\pi(b) = \pi(14)$인 정수 $b$는 어떤 것인가?]
정확히 $b \in 5 + 9\mathbb{Z}$인 정수입니다. (4)의 덧셈 표기에 의해 $\pi(14) = \pi(b)$인 것은 정확히 $-14 + b \in 9\mathbb{Z}$일 때입니다. [[number-groups|수로 이루어진 군]]의 (1)에 의해 이 군에서 $-14 + b$는 정수 $b - 14$이고, [[subgroup-examples|부분군의 예와 교집합]]의 (1)에 의해 $b - 14 \in 9\mathbb{Z}$인 것은 정확히 $9 \mid b - 14$일 때입니다. $b - 14 = 9c$이면 $b = 5 + 9(c + 1)$이고, 거꾸로 $b = 5 + 9d$이면 $b - 14 = 9(d - 1)$이므로, 이것은 정확히 $b \in 5 + 9\mathbb{Z}$일 때입니다. 예를 들어 $b = -4, 5, 23$입니다.
:::
