---
title: 치환의 부호
title_en: Sign of a Permutation
aliases: [부호, 부호 함수, 치환의 부호수, sgn, sign of a permutation, signature]
kind: theorem
field: group-theory
msc: ["20B30"]
level: undergrad
summary: 유한집합의 치환 σ의 부호 sgn σ를 짝치환이면 1, 홀치환이면 −1로 정하면, sgn은 대칭군에서 곱셈군 {1, −1}로의 준동형이고 원소가 둘 이상인 집합에서는 전사이다. 역치환과 켤레는 부호를 바꾸지 않는다.
requires: [set, function, injective-surjective-bijective, finite-set, number-of-elements-is-unique, recursion-theorem, real-number-arithmetic, even-and-odd, order-of-symmetric-group, group, symmetric-group, subgroup, subgroup-examples, number-groups, group-homomorphism, cycle-permutation, transposition-changes-orbit-count, parity-of-a-permutation]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 5.1절 Theorem 5.15 와 짝치환·홀치환의 정의(p.64), Theorem 5.16 의 증명(p.64); 5.4절 Exercises, 연습문제 34, 35, 36(p.73)
    checked: original
    note: "출처는 짝·홀과 Z_2 의 관계를 11.1절 첫머리(p.133)에서 적는다. 군 준동형을 정의한 뒤 'S_n 은 짝치환과 홀치환으로 나뉘어 Z_2 와 같은 군 구조를 보인다'고 하고 even·odd 의 곱셈표(짝·짝 = 짝, 짝·홀 = 홀, 홀·홀 = 짝)를 든 다음, 이런 관계를 공부하려고 준동형을 쓴다고 한다. 이 항목의 (1)은 그 곱셈표를 Z_2 대신 곱셈군 {1, −1} 의 준동형으로 쓴 것과 같은 내용이다. 그러나 출처는 짝·홀을 1, −1 이나 Z_2 의 원소로 보내는 함수에 이름(sign, sgn)을 붙여 정의하지 않는다(책 전체에서 검색어 'sign'(낱말, 대소문자 무시) 10건은 design 과 23장의 함숫값의 부호, 'sgn' 0건, 'signature' 1건은 참고문헌, 'parity' 53건은 8장 부호 이론과 Example 10.5, 'Z2' 163건 가운데 치환·짝·홀과 함께 나오는 것은 Example 10.5, 11.1절 첫머리, Example 13.16 뿐, 'even and odd' 1건(11.1절), 'odd permutation' 7건(Prop 5.17, Example 10.5, 11.1절)을 읽었다. 5.4절 연습문제 1–37 을 처음부터 읽었다). 같은 관계를 출처는 10.1절 Example 10.5(p.126)에서 S_3/A_3 가 Z_2 와 동형이고 그 몫군이 담는 정보가 홀짝(parity)이라 하며 '짝 둘이나 홀 둘의 곱은 짝, 짝과 홀의 곱은 홀'이라고 적고, 13.2절 Example 13.16(p.163–164)에서 n ≥ 5 일 때 S_n/A_n ≅ Z_2 라고 적는다. 또 출처는 12.2절(p.150)에서 det 을 {−1, 1} 로 가는 준동형으로 쓴다. 출처는 짝치환과 홀치환을 정의하고(p.64) 짝치환 전체 A_n 을 바로 다룬다. 이 항목은 그 짝·홀을 1 과 −1 로 옮겨 준동형으로 정리한다. (1)의 준동형은 출처 Theorem 5.16 의 증명(p.64)이 쓰는 '짝치환 둘의 곱은 짝치환'과 그 나머지 경우를 한 식으로 쓴 것이다. (3)의 역은 출처 연습문제 5.34(p.73, α 가 짝이면 α⁻¹ 도 짝)와, 켤레는 연습문제 5.35(p.73, σ ∈ A_n, τ ∈ S_n 이면 τ⁻¹στ ∈ A_n)를 짝·홀 모두로 넓힌 것과 같은 내용이다. 예시 'S₃의 부호'는 S_3 의 여섯 원소를 다루며, 출처는 p.33 과 5장 첫머리(p.59)에서 같은 여섯 원소를 늘어놓는다. 확인 질문 '$\\\\operatorname{sgn}(\\\\sigma\\\\pi\\\\sigma^{-1}\\\\pi^{-1})$는 무엇인가?'는 출처 연습문제 5.36(p.73, α⁻¹β⁻¹αβ 는 짝치환)과 같은 대상을 다룬다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(궤도 개수·홀짝 판정에 경계값, A₄ 논법 통독, 빠진 겹침(11.1절 곱셈표)을 돌려보내 반영). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$X$가 [[finite-set|유한집합]]이라 하자. $S_X$와 그 곱, 항등치환 $i_X$는 [[symmetric-group|대칭군]], 호환과 순환치환은 [[cycle-permutation|순환치환]], 짝치환과 홀치환은 [[parity-of-a-permutation|치환의 홀짝]], 궤도의 개수 $|\operatorname{Orb}(\sigma)|$는 [[transposition-changes-orbit-count|호환을 곱하면 궤도의 개수가 하나 바뀐다]]의 것이다. [[subgroup-examples|부분군의 예]]의 (3)에 의해 $\{1, -1\}$은 [[number-groups|수로 이루어진 군]]의 $(\mathbb{R} - \{0\}, \cdot)$의 [[subgroup|부분군]]이고, 이 항목에서 $\{1, -1\}$은 실수의 곱셈을 제한한 연산으로 이루어진 이 군을 뜻한다.

$\sigma \in S_X$의 **부호**(sign) $\operatorname{sgn} \sigma$를, $\sigma$가 짝치환이면 $1$, 홀치환이면 $-1$로 정한다. 치환의 홀짝의 (2)에 의해 모든 $\sigma$는 둘 가운데 정확히 하나이므로, [[recursion-theorem|재귀 정리]]의 (1)에 의해 이것은 함수 $\operatorname{sgn} : S_X \to \{1, -1\}$이다.

다음이 성립한다. 아래에서 $\sigma, \pi \in S_X$이다.

1. (준동형) $\operatorname{sgn}(\sigma\pi) = \operatorname{sgn} \sigma \cdot \operatorname{sgn} \pi$이다. 곧 $\operatorname{sgn}$은 군 $S_X$에서 군 $\{1, -1\}$로의 [[group-homomorphism|군 준동형]]이다.
2. (부호와 궤도의 개수) $\operatorname{sgn} \sigma = 1$인 것은 정확히 $\sigma$가 짝치환일 때이고, 또 정확히 $|X| - |\operatorname{Orb}(\sigma)|$가 짝수일 때이다. 따라서 $\operatorname{sgn}$의 핵은 짝치환 전체의 집합이다.
3. (역과 켤레) $\operatorname{sgn}(\sigma^{-1}) = \operatorname{sgn} \sigma$이고 $\operatorname{sgn}(\pi\sigma\pi^{-1}) = \operatorname{sgn} \sigma$이다.
4. (예) $\operatorname{sgn} i_X = 1$이고 호환 $\tau$는 $\operatorname{sgn} \tau = -1$이다. $k \ge 2$일 때 길이 $k$인 순환치환의 부호는 $k$가 홀수이면 $1$, 짝수이면 $-1$이다.
5. (전사) $X$에 서로 다른 두 원소가 있으면 $\operatorname{sgn} : S_X \to \{1, -1\}$은 [[injective-surjective-bijective|전사]]이다. $X$의 원소가 하나 이하이면 $S_X = \{i_X\}$이고 $\operatorname{sgn}$의 값은 $1$뿐이다.

증명에서 실수의 곱셈은 [[real-number-arithmetic|실수의 계산 법칙]]을 쓴다.
:::

:::english
Let $X$ be a finite set. $S_X$, its product and the identity permutation $i_X$ are as in the entry on the symmetric group; transpositions and cycles are as in the entry on cycles; even and odd permutations are as in the entry on the parity of a permutation; and the number of orbits $|\operatorname{Orb}(\sigma)|$ is as in the entry on how multiplying by a transposition changes the number of orbits. By (3) in the entry on examples of subgroups, $\{1, -1\}$ is a subgroup of the group $(\mathbb{R} - \{0\}, \cdot)$ of the entry on groups of numbers, and in this entry $\{1, -1\}$ denotes this group, with the restriction of multiplication of real numbers.

The **sign** $\operatorname{sgn} \sigma$ of $\sigma \in S_X$ is $1$ if $\sigma$ is even and $-1$ if $\sigma$ is odd. By (2) in the entry on the parity of a permutation, every $\sigma$ is exactly one of the two, so this is a function $\operatorname{sgn} : S_X \to \{1, -1\}$.

The following hold, where $\sigma, \pi \in S_X$.

1. (Homomorphism) $\operatorname{sgn}(\sigma\pi) = \operatorname{sgn} \sigma \cdot \operatorname{sgn} \pi$. That is, $\operatorname{sgn}$ is a group homomorphism from $S_X$ to $\{1, -1\}$.
2. (Sign and the number of orbits) $\operatorname{sgn} \sigma = 1$ exactly when $\sigma$ is even, and exactly when $|X| - |\operatorname{Orb}(\sigma)|$ is even. Hence the kernel of $\operatorname{sgn}$ is the set of all even permutations.
3. (Inverses and conjugates) $\operatorname{sgn}(\sigma^{-1}) = \operatorname{sgn} \sigma$ and $\operatorname{sgn}(\pi\sigma\pi^{-1}) = \operatorname{sgn} \sigma$.
4. (Examples) $\operatorname{sgn} i_X = 1$, and every transposition $\tau$ has $\operatorname{sgn} \tau = -1$. For $k \ge 2$, a cycle of length $k$ has sign $1$ if $k$ is odd and $-1$ if $k$ is even.
5. (Surjectivity) If $X$ has two distinct elements, then $\operatorname{sgn} : S_X \to \{1, -1\}$ is surjective. If $X$ has at most one element, then $S_X = \{i_X\}$ and the only value of $\operatorname{sgn}$ is $1$.

The proof uses the arithmetic laws of real numbers for multiplication.
:::

## 직관

짝·홀을 말로 하면 "짝 곱하기 홀은 홀"처럼 경우마다 규칙을 따로 외워야 합니다. 짝을 $1$, 홀을 $-1$로 옮기면 그 규칙들이 실수의 곱셈 하나로 바뀝니다. $(-1) \cdot (-1) = 1$이 "홀 곱하기 홀은 짝"이고, $1 \cdot (-1) = -1$이 "짝 곱하기 홀은 홀"입니다. 이것이 (1)의 준동형이라는 말의 뜻입니다.

부호를 준동형으로 보면 군에 관한 도구를 쓸 수 있습니다. 짝치환 전체는 이 준동형의 핵이고, 역원과 켤레의 부호는 공역 $\{1, -1\}$이 아벨군이고 모든 원소가 자기 자신의 역원이라는 것에서 바로 나옵니다.

## 증명

:::idea
짝·홀의 네 경우를 실수의 곱셈 네 줄에 맞춘다. 나머지는 준동형의 일반 성질과 $(\pm 1)^2 = 1$이다.
:::

:::hint
치환의 홀짝의 (4)가 곱의 짝·홀을 네 경우로 말해 준다.
:::

:::proof
**(1)** 치환의 홀짝의 (4)에 의해 경우를 나눈다. 둘 다 짝치환이면 $\sigma\pi$는 짝치환이므로 $\operatorname{sgn}(\sigma\pi) = 1 = 1 \cdot 1$이다. 둘 다 홀치환이면 $\sigma\pi$는 짝치환이므로 $\operatorname{sgn}(\sigma\pi) = 1 = (-1) \cdot (-1)$이다. 하나만 홀치환이면 $\sigma\pi$는 홀치환이므로 $\operatorname{sgn}(\sigma\pi) = -1 = 1 \cdot (-1) = (-1) \cdot 1$이다. 마지막 세 등식은 [[real-number-arithmetic|실수의 계산 법칙]]에 의한 계산이다. $\{1, -1\}$의 연산은 실수의 곱셈을 제한한 것이므로 [[group-homomorphism|군 준동형]]의 정의가 성립한다.

**(2)** 정의에 의해 $\operatorname{sgn} \sigma = 1$인 것은 정확히 $\sigma$가 짝치환일 때이다($1 \ne -1$이므로 홀치환의 값과 겹치지 않는다). 치환의 홀짝의 (2)에 의해 이것은 정확히 $|X| - |\operatorname{Orb}(\sigma)|$가 짝수일 때이다. $\{1, -1\}$의 항등원은 $(\mathbb{R} - \{0\}, \cdot)$의 항등원 $1$이므로([[subgroup|부분군]]의 (1)) $\operatorname{sgn}$의 핵은 $\operatorname{sgn} \sigma = 1$인 $\sigma$ 전체, 곧 짝치환 전체이다.

**(3)** 군 준동형의 (2)에 의해 $\operatorname{sgn}(\sigma^{-1}) = (\operatorname{sgn} \sigma)^{-1}$이고, $\{1, -1\}$에서 $1^{-1} = 1$, $(-1)^{-1} = -1$이다($1 \cdot 1 = 1$, $(-1) \cdot (-1) = 1$). 따라서 $\operatorname{sgn}(\sigma^{-1}) = \operatorname{sgn} \sigma$이다. (1)과 방금 보인 것에 의해
$$\operatorname{sgn}(\pi\sigma\pi^{-1}) = \operatorname{sgn} \pi \cdot \operatorname{sgn} \sigma \cdot \operatorname{sgn} \pi$$
이다. 실수의 곱셈은 교환법칙과 결합법칙을 만족하므로 이것은 $(\operatorname{sgn} \pi \cdot \operatorname{sgn} \pi) \cdot \operatorname{sgn} \sigma$이고, $\operatorname{sgn} \pi$가 $1$이든 $-1$이든 $\operatorname{sgn} \pi \cdot \operatorname{sgn} \pi = 1$이므로 $\operatorname{sgn} \sigma$이다.

**(4)** 치환의 홀짝의 (3)에 의해 $i_X$는 짝치환, 호환은 홀치환이고, 길이 $k$인 순환치환은 $k$가 홀수일 때 정확히 짝치환이다. $k$가 홀수가 아니면 짝수이므로([[even-and-odd|짝수와 홀수]]에서 받아들인 사실) 그때는 홀치환이다. 부호의 정의를 쓰면 된다.

**(5)** $a, b \in X$, $a \ne b$이면 [[cycle-permutation|순환치환]]의 (1)에 의해 호환 $(a\ b) \in S_X$이고 (4)에 의해 $\operatorname{sgn}(a\ b) = -1$, $\operatorname{sgn} i_X = 1$이다. 공역의 두 원소가 모두 값이므로 $\operatorname{sgn}$은 전사이다. $X$의 원소가 하나 이하이면 [[symmetric-group|대칭군]]의 (2)에 의해 $S_X = \{i_X\}$이고 (4)에 의해 값은 $1$뿐이다.
:::

## 예시와 반례

:::example[S₃의 부호]
$X = \{1, 2, 3\}$이라 합시다. $i_X$, 세 호환 $(1\ 2)$, $(1\ 3)$, $(2\ 3)$, 두 순환치환 $(1\ 2\ 3)$, $(1\ 3\ 2)$는 $1$과 $2$에서의 값의 쌍 $(1, 2)$, $(2, 1)$, $(3, 2)$, $(1, 3)$, $(2, 3)$, $(3, 1)$이 모두 달라 서로 다른 여섯 원소이고, [[order-of-symmetric-group|대칭군의 원소의 개수]]의 (6)에 의해 $|S_3| = 6$이므로 이것이 $S_3$의 원소 전체입니다. (4)에 의해 부호는 $i_X$와 길이 $3$인 두 순환치환에서 $1$, 세 호환에서 $-1$입니다. 예컨대 $(1\ 2)(2\ 3)$은 $1$, $2$, $3$을 각각 $2$, $3$, $1$로 보내므로 $(1\ 2\ 3)$이고, (1)에 맞게 $(-1) \cdot (-1) = 1 = \operatorname{sgn}(1\ 2\ 3)$입니다. 부호가 $1$인 원소와 $-1$인 원소가 셋씩입니다.
:::

:::counterexample[부호가 같아도 같은 치환은 아닌 예]
부호는 치환을 정하지 못합니다. $S_3$의 $(1\ 2)$와 $(1\ 3)$은 둘 다 부호가 $-1$이지만 $1$에서의 값이 $2$와 $3$으로 다르므로 다른 치환입니다. $\operatorname{sgn}$은 $|X| \ge 3$이면 단사가 아닙니다. 서로 다른 세 원소 $a$, $b$, $c$가 있으면 $(a\ b) \ne (a\ c)$인데 부호는 같기 때문입니다.
:::

## 확인 질문

:::check[$\operatorname{sgn}(\sigma\pi\sigma^{-1}\pi^{-1})$는 무엇인가?]
$1$입니다. (1)과 (3)에 의해 $\operatorname{sgn}(\sigma\pi\sigma^{-1}\pi^{-1}) = \operatorname{sgn} \sigma \cdot \operatorname{sgn} \pi \cdot \operatorname{sgn} \sigma \cdot \operatorname{sgn} \pi$이고, 실수의 곱셈을 재배열하면 $(\operatorname{sgn} \sigma)^2 (\operatorname{sgn} \pi)^2 = 1 \cdot 1 = 1$입니다. 따라서 $\sigma\pi\sigma^{-1}\pi^{-1}$은 언제나 짝치환입니다.
:::

:::check[$X = \{1, 2, 3, 4\}$에서 $\operatorname{sgn}\bigl((1\ 2\ 3\ 4)(1\ 2)\bigr)$을 구하라.]
(4)에 의해 길이 $4$인 순환치환의 부호는 $-1$, 호환의 부호도 $-1$이므로 (1)에 의해 $(-1) \cdot (-1) = 1$입니다. 직접 계산하면 곱은 $1$을 $(1\ 2\ 3\ 4)(2) = 3$으로, $3$을 $4$로, $4$를 $1$로 보내고 $2$를 고정하므로 길이 $3$인 순환치환 $(1\ 3\ 4)$이고, 부호가 $1$인 것과 맞습니다.
:::
