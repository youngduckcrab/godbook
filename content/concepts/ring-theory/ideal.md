---
title: 아이디얼
title_en: Ideal
aliases: [이데알, 진아이디얼, 주 아이디얼, 아이디얼의 합, 양쪽 아이디얼, 정수의 아이디얼, proper ideal, principal ideal, sum of ideals, two-sided ideal]
kind: definition
field: ring-theory
msc: ["16D25"]
level: undergrad
summary: 환 R의 부분집합 I가 덧셈군의 부분군이고 R의 어떤 원소를 왼쪽이나 오른쪽에서 곱해도 I를 벗어나지 않으면 I를 아이디얼이라 한다. 아이디얼은 부분환이고, 환 준동형의 핵은 아이디얼이다. 단위원을 갖는 가환환의 원소 a의 배수 전체 aR는 a를 포함하는 가장 작은 아이디얼이고, ℤ의 아이디얼은 nℤ뿐이며, 두 아이디얼의 교집합과 합은 아이디얼이다.
requires: [set, subset, set-operations, well-ordering-principle, even-and-odd, integer-cancellation, greatest-common-divisor, real-number-arithmetic, group, group-basic-properties, subgroup, subgroup-criteria, subgroup-examples, number-groups, subgroups-of-cyclic-groups, integers-modulo-n, equivalence-classes-equal-iff-related, congruence-modulo-n, ring, ring-basic-properties, ring-examples, subring, ring-homomorphism, vector-space, matrix, matrix-product-properties]
sources:
  - ref: judson-abstract-algebra
    loc: 16.3절 아이디얼의 정의(번호 없음) p.196, Example 16.23, 16.24, 주 아이디얼의 정의(번호 없음), Theorem 16.25, Example 16.26, Proposition 16.27 p.196, Remark 16.28 p.197. 16.4절 극대 아이디얼의 정의 p.198. 16.7절 연습문제 4, 16, 25 p.204–206, 부록 B 의 힌트 16.7.4, 16.7.16 p.329. 19.5절 연습문제 14 p.250, 부록 B 의 힌트 19.5.14 p.332
    checked: original
    note: "출처는 아이디얼을 'R 의 부분환 I 로서 a 가 I 에, r 이 R 에 있으면 ar 과 ra 가 모두 I 에 있는 것', 곧 모든 r ∈ R 에서 rI ⊂ I 이고 Ir ⊂ I 인 것으로 정의한다(p.196). 이 항목은 첫째 조건을 '덧셈군의 부분군'으로 적고, 출처의 정의와 같다는 것을 (2)에서 보인다. '왼쪽 흡수', '오른쪽 흡수'라는 이름은 이 사이트가 붙였다(검색어 'absorb' 0건, 'rI ⊂ I|Ir ⊂ I' 6건은 정의와 Remark 16.28). Remark 16.28(p.197)은 이 정의의 아이디얼을 양쪽 아이디얼이라 부르기도 하고, rI ⊂ I 와 Ir ⊂ I 가운데 하나만 요구하는 한쪽 아이디얼(왼쪽 아이디얼, 오른쪽 아이디얼)도 있으며, 책은 양쪽 아이디얼만 다룬다고 적는다. 이 항목은 한쪽 아이디얼을 정의하지 않는다. (1)은 출처에 명제로 없다. (2)의 반례(ℝ 안의 ℤ)는 출처에서 찾지 못했다(검색어 'not an ideal|is not an ideal|may not be an ideal' 1건은 연습문제 16.25 의 합집합, 'subring.{0,60}ideal|ideal.{0,60}subring' 6건은 정의, 동형 정리, 연습문제). (3)의 첫 문장은 출처 Example 16.23(p.196)이고 출처는 이 둘을 trivial ideals 라 부른다. 진아이디얼(proper ideal)이라는 말은 출처 16.4절(p.198–199)의 극대 아이디얼과 소 아이디얼의 정의에서 정의 없이 쓰인다(검색어 'proper ideal' 5건). (4)의 '1 ∈ I 이면 I = R'은 출처 p.196 의 Example 16.23 다음 문단이다. 그 역과 둘째 문장은 출처에 명제로 없다. (5)는 출처 Proposition 16.27(p.196–197)이고 증명도 같다. (6)의 (i), (ii)는 출처 Example 16.24(p.196)와 그 뒤의 주 아이디얼의 정의이다. 출처는 단위원을 갖는 가환환에서 ⟨a⟩ = {ar : r ∈ R} 가 아이디얼임을 보이고(공집합이 아님을 0 = a0 과 a = a1 로 적는다), 이 꼴의 아이디얼을 주 아이디얼이라 부른다. 18장(p.229)은 같은 것을 ⟨a⟩ = {ra : r ∈ R} 로 쓴다. 이 강의에서 ⟨a⟩ 는 순환 부분군의 기호이고, 환의 덧셈군에서의 순환 부분군 {n·a : n ∈ ℤ} 은 주 아이디얼과 다를 수 있으므로(ℝ 에서 덧셈군의 ⟨1⟩ 은 ℤ, 주 아이디얼 1ℝ 은 ℝ) 주 아이디얼은 aR 로 쓴다. (6)의 (i)을 단위원 없이 진술한 것, (ii)의 '모든 아이디얼 J 에 대하여 aR ⊆ J', (iii)의 2ℤ 의 예는 출처에서 찾지 못했다(검색어 'without (an )?(identity|unity)|has no identity|no identity' 1건은 연습문제 16.2, 'principal ideal' 12건은 16장, 17장, 18장의 정의와 정리). (7)은 출처 Theorem 16.25(p.196, ℤ 의 모든 아이디얼은 주 아이디얼)와 Example 16.26(p.196, nℤ 는 ℤ 의 아이디얼이고 Theorem 16.25 에 의해 이것뿐이다)이다. 출처는 Theorem 16.25 를 정렬 원리와 나눗셈 정리로 증명한다. 이 항목은 ℤ 의 덧셈 부분군이 nℤ 뿐이라는 순환군의 부분군의 (2)(출처 Corollary 4.11, p.48 과 같은 내용)와 흡수로 증명하고, 그래서 (ii)와의 동치를 함께 얻는다. (8)의 (i)은 출처 연습문제 16.25(p.206, 아이디얼의 모임의 교집합)를 두 개로 좁힌 것이다. (8)의 (ii)는 출처 19장 연습문제 14(p.250)가 두 아이디얼의 join 을 I + J 로 두고, 부록 B 의 힌트 19.5.14(p.332)가 I + J = {r + s : r ∈ I, s ∈ J} 가 I 와 J 를 포함하는 가장 작은 아이디얼임을 보여야 한다고 적고 합과 왼쪽 곱을 확인하는 것과 같은 내용이다. 16장은 I + J 를 Theorem 16.32(p.198)와 연습문제 16.20, 16.39 에서 정의 없이 쓴다. (8)의 (iii)은 출처에서 찾지 못했다(검색어 'gcd.{0,60}Z|aZ + bZ|mZ + nZ|nZ + mZ' 6건은 2장, 4장, 7장, 9장). 예시의 ℤ₆ 의 {[0], [3]} 은 출처에 ℤ₆ 의 부분군으로 나오고(p.74 의 잉여류의 예, p.75 의 Example 6.6, p.121 의 Example 9.28), 환의 아이디얼을 찾는 것은 출처 연습문제 16.4(p.204, ℤ₁₈, ℤ₂₅ 등의 아이디얼을 모두 구하라)와 같은 종류이다. 예시의 둘째 문단(환 I 자신의 단위원 [3])은 부분환의 (5)의 (iii)을 인용한 것이고, 출처 연습문제 16.30(p.206, 1_R = 1_S 인지 증명하거나 반증하라)에 반례로 답하는 예이다. 반례(스칼라 행렬)는 출처 연습문제 16.4(c)와 그 힌트 16.7.4(p.329, M₂(ℝ) 에는 자명하지 않은 아이디얼이 없다)가 말하는 것의 한 경우이다. 첫째 확인 질문(4ℤ + 6ℤ)은 (8)의 (iii)과 같은 검색으로 찾지 못했다. 둘째 확인 질문은 출처 연습문제 16.16(p.205, 체의 아이디얼은 {0} 과 R 뿐)의 R = ℝ 인 경우이고, 힌트 16.7.16(p.329)의 '1 ∈ I 임을 보여라'와 같은 방법이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 일반 문장으로 읽히는 반례 제목(n = 1, 영환, 체인 경우)을 좁히고 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$(R, +, \cdot)$가 [[ring|환]]이고 $I$가 $R$의 [[subset|부분집합]]이라 하자. $0$, $1$, $-a$, $a - b$, 곱 $ab$는 [[ring|환]]의 표기이고, 덧셈군 $(R, +)$는 [[number-groups|수로 이루어진 군]]의 덧셈 표기로 쓰는 아벨군이며, 부분군은 [[subgroup|부분군]]의 뜻이다. $I$가 $R$의 **아이디얼**(ideal)인 것은 정확히 다음 세 조건이 모두 성립할 때이다.

- $I$는 덧셈군 $(R, +)$의 부분군이다.
- (왼쪽 흡수) 모든 $r \in R$와 모든 $a \in I$에 대하여 $ra \in I$이다.
- (오른쪽 흡수) 모든 $r \in R$와 모든 $a \in I$에 대하여 $ar \in I$이다.

"$I$는 $R$의 아이디얼이다"는 기호로 줄이지 않고 말로 쓴다. 다음이 성립한다.

1. (판정법) $I$가 $R$의 아이디얼인 것은 정확히 $I \ne \emptyset$이고, 모든 $a, b \in I$에 대하여 $a - b \in I$이며, 왼쪽 흡수와 오른쪽 흡수가 성립할 때이다.
2. (부분환) $R$의 아이디얼은 $R$의 [[subring|부분환]]이다. 곧 $I$가 $R$의 아이디얼인 것은 정확히 $I$가 $R$의 부분환이고 왼쪽 흡수와 오른쪽 흡수가 성립할 때이다. 부분환은 아이디얼이 아닐 수 있다. [[ring-examples|환의 예]]의 환 $\mathbb{R}$에서 $\mathbb{Z}$는 부분환이지만([[subring|부분환]]의 (4)) 아이디얼이 아니다. $1 \in \mathbb{Z}$이고 $2^{-1} \in \mathbb{R}$이지만 $2^{-1}$과 $1$의 곱 $2^{-1}$은 정수가 아니다. 여기서 $2^{-1}$은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K8)의 역수이다.
3. (자명한 아이디얼과 진아이디얼) $\{0\}$과 $R$은 $R$의 아이디얼이다. $R$의 아이디얼 $I$가 $I \ne R$일 때 $I$를 $R$의 **진아이디얼**(proper ideal)이라 한다.
4. (단위원) $R$이 단위원 $1$을 갖는 환이고 $I$가 $R$의 아이디얼이면, $1 \in I$인 것은 정확히 $I = R$일 때이다. 따라서 $I$가 진아이디얼인 것은 정확히 $1 \notin I$일 때이다.
5. (핵) $R'$이 환이고 $\varphi : R \to R'$이 [[ring-homomorphism|환 준동형]]이면 $\operatorname{Ker} \varphi$는 $R$의 아이디얼이다.
6. (주 아이디얼) $R$이 가환환이고 $a \in R$이라 하자.
   - (i) $aR = \{ar : r \in R\}$은 $R$의 아이디얼이다.
   - (ii) $R$이 단위원을 갖는 가환환이면 $a \in aR$이고, $a \in J$인 $R$의 모든 아이디얼 $J$에 대하여 $aR \subseteq J$이다. 단위원을 갖는 가환환 $R$의 아이디얼 $I$가 **주 아이디얼**(principal ideal)인 것은 정확히 $I = aR$인 $a \in R$가 있을 때이다.
   - (iii) 곱셈의 항등원이 없는 가환환에서는 $a \notin aR$일 수 있다. [[ring-examples|환의 예]]의 (4)의 환 $2\mathbb{Z}$와 $a = 2$에서 $\{2r : r \in 2\mathbb{Z}\} = 4\mathbb{Z}$이고 $2 \notin 4\mathbb{Z}$이다.
7. (정수의 아이디얼) 환 $\mathbb{Z}$는 [[ring-examples|환의 예]]의 (1)의 것이고, 정수 $n$에 대하여 $n\mathbb{Z} = \{nk : k \in \mathbb{Z}\}$는 [[subgroup-examples|부분군의 예와 교집합]]의 (1)의 것이다. $\mathbb{Z}$의 부분집합 $I$에 대하여 다음 세 조건은 서로 동치이다.
   - (i) $I$는 환 $\mathbb{Z}$의 아이디얼이다.
   - (ii) $I$는 $(\mathbb{Z}, +)$의 부분군이다.
   - (iii) $I = n\mathbb{Z}$인 $0$ 이상의 정수 $n$이 있다.

   (iii)의 $n$은 하나뿐이다. 모든 정수 $n$에 대하여 (6)의 주 아이디얼 $n\mathbb{Z}$는 위의 $n\mathbb{Z}$와 같은 집합이다. 따라서 환 $\mathbb{Z}$의 모든 아이디얼은 주 아이디얼이다.
8. (교집합과 합) $I$와 $J$가 $R$의 아이디얼이라 하자.
   - (i) $I \cap J$는 $R$의 아이디얼이다.
   - (ii) $I + J = \{a + b : a \in I,\ b \in J\}$를 $I$와 $J$의 **합**(sum)이라 한다. $I + J$는 $I \subseteq I + J$이고 $J \subseteq I + J$인 $R$의 아이디얼이며, $I \subseteq K$이고 $J \subseteq K$인 $R$의 모든 아이디얼 $K$에 대하여 $I + J \subseteq K$이다. 두 아이디얼의 합 $I + J$는 잉여류 $a + H$와 다른 것이다.
   - (iii) 환 $\mathbb{Z}$에서 $m$, $n$이 둘 다 $0$은 아닌 정수이면 $m\mathbb{Z} + n\mathbb{Z} = \gcd(m, n)\mathbb{Z}$이다. 여기서 $\gcd$는 [[greatest-common-divisor|최대공약수]]이다.
:::

:::english
Let $(R, +, \cdot)$ be a ring and $I$ a subset of $R$. The notation $0$, $1$, $-a$, $a - b$ and the product $ab$ are those of the entry on rings, the additive group $(R, +)$ is an abelian group written in the additive notation of the entry on groups of numbers, and subgroups are as in the entry on subgroups. $I$ is an **ideal** of $R$ exactly when all three of the following conditions hold.

- $I$ is a subgroup of the additive group $(R, +)$.
- (Left absorption) For all $r \in R$ and all $a \in I$, $ra \in I$.
- (Right absorption) For all $r \in R$ and all $a \in I$, $ar \in I$.

We do not abbreviate "$I$ is an ideal of $R$" by a symbol; we say it in words. The following hold.

1. (Criterion) $I$ is an ideal of $R$ exactly when $I \ne \emptyset$, $a - b \in I$ for all $a, b \in I$, and left and right absorption hold.
2. (Subrings) Every ideal of $R$ is a subring of $R$. That is, $I$ is an ideal of $R$ exactly when $I$ is a subring of $R$ and left and right absorption hold. A subring need not be an ideal. In the ring $\mathbb{R}$ of the entry on examples of rings, $\mathbb{Z}$ is a subring (item (4) of the entry on subrings) but not an ideal: $1 \in \mathbb{Z}$ and $2^{-1} \in \mathbb{R}$, but the product $2^{-1}$ of $2^{-1}$ and $1$ is not an integer. Here $2^{-1}$ is the reciprocal of (K8) of the entry on real arithmetic.
3. (Trivial ideals and proper ideals) $\{0\}$ and $R$ are ideals of $R$. An ideal $I$ of $R$ with $I \ne R$ is called a **proper ideal** of $R$.
4. (Unity) If $R$ is a ring with unity $1$ and $I$ is an ideal of $R$, then $1 \in I$ exactly when $I = R$. Hence $I$ is a proper ideal exactly when $1 \notin I$.
5. (Kernels) If $R'$ is a ring and $\varphi : R \to R'$ is a ring homomorphism, then $\operatorname{Ker} \varphi$ is an ideal of $R$.
6. (Principal ideals) Let $R$ be a commutative ring and $a \in R$.
   - (i) $aR = \{ar : r \in R\}$ is an ideal of $R$.
   - (ii) If $R$ is a commutative ring with unity, then $a \in aR$, and $aR \subseteq J$ for every ideal $J$ of $R$ with $a \in J$. An ideal $I$ of a commutative ring $R$ with unity is a **principal ideal** exactly when $I = aR$ for some $a \in R$.
   - (iii) In a commutative ring without multiplicative identity, $a \notin aR$ is possible. For the ring $2\mathbb{Z}$ of item (4) of the entry on examples of rings and $a = 2$, $\{2r : r \in 2\mathbb{Z}\} = 4\mathbb{Z}$ and $2 \notin 4\mathbb{Z}$.
7. (Ideals of the integers) The ring $\mathbb{Z}$ is that of item (1) of the entry on examples of rings, and for an integer $n$, $n\mathbb{Z} = \{nk : k \in \mathbb{Z}\}$ is that of item (1) of the entry on examples of subgroups. For a subset $I$ of $\mathbb{Z}$ the following three conditions are equivalent.
   - (i) $I$ is an ideal of the ring $\mathbb{Z}$.
   - (ii) $I$ is a subgroup of $(\mathbb{Z}, +)$.
   - (iii) $I = n\mathbb{Z}$ for some integer $n \ge 0$.

   The $n$ in (iii) is unique. For every integer $n$, the principal ideal $n\mathbb{Z}$ in the sense of (6) is the same set as the $n\mathbb{Z}$ above. Hence every ideal of the ring $\mathbb{Z}$ is a principal ideal.
8. (Intersections and sums) Let $I$ and $J$ be ideals of $R$.
   - (i) $I \cap J$ is an ideal of $R$.
   - (ii) $I + J = \{a + b : a \in I,\ b \in J\}$ is called the **sum** of $I$ and $J$. $I + J$ is an ideal of $R$ with $I \subseteq I + J$ and $J \subseteq I + J$, and $I + J \subseteq K$ for every ideal $K$ of $R$ with $I \subseteq K$ and $J \subseteq K$. The sum $I + J$ of two ideals is different from a coset $a + H$.
   - (iii) In the ring $\mathbb{Z}$, if $m$ and $n$ are integers that are not both $0$, then $m\mathbb{Z} + n\mathbb{Z} = \gcd(m, n)\mathbb{Z}$. Here $\gcd$ is the greatest common divisor.
:::

## 직관

아이디얼은 "환의 어떤 원소를 곱해도 빠져나갈 수 없는" 부분집합입니다. 짝수 전체 $2\mathbb{Z}$가 좋은 예입니다. 짝수끼리 더하거나 빼도 짝수이고, 짝수에 아무 정수나 곱해도 짝수입니다. 비유에서 "더하거나 빼도 남는다"가 덧셈군의 부분군이라는 조건에, "아무 정수나 곱해도 남는다"가 두 흡수 조건에 해당합니다. 부분환은 자기 원소끼리의 곱에만 닫혀 있으면 되지만, 아이디얼은 바깥의 원소와의 곱에도 닫혀 있어야 합니다. $\mathbb{R}$ 안의 $\mathbb{Z}$는 앞의 것은 되지만 뒤의 것은 되지 않습니다((2)).

흡수 조건은 강합니다. 단위원 $1$이 아이디얼에 들어오면 $1$에 $R$의 모든 원소를 곱한 것, 곧 $R$ 전체가 들어옵니다((4)). 그래서 단위원을 갖는 환에서 진아이디얼은 $1$을 포함하지 않습니다.

가환환에서 원소 $a$의 배수 전체 $aR$는 아이디얼이고, 단위원이 있으면 $a$를 포함하는 아이디얼 가운데 가장 작습니다((6)). 정수에서는 모든 아이디얼이 이런 꼴이며, 덧셈의 부분군이 곧 아이디얼입니다((7)). 3단원에서 덧셈의 부분군이 $n\mathbb{Z}$뿐임을 보였고, $n\mathbb{Z}$는 아무 정수를 곱해도 남기 때문입니다.

:::remark[(1)–(5)의 증명]
(1) [[ring|환]]의 정의에 의해 $(R, +)$는 덧셈 표기의 아벨군이므로 [[subgroup-criteria|부분군 판정법]]의 (3)의 둘째 문장에 의해, $I$가 $(R, +)$의 부분군인 것은 정확히 $I \ne \emptyset$이고 모든 $a, b \in I$에서 $a - b \in I$일 때이다. 아이디얼의 정의의 첫째 조건을 이것으로 바꾸면 (1)이다.

(2) $I$가 아이디얼이라 하자. (1)에 의해 $I \ne \emptyset$이고 $a, b \in I$이면 $a - b \in I$이다. 또 $b \in R$이므로 오른쪽 흡수에 의해 $ab \in I$이다. [[subring|부분환]]의 (2)에 의해 $I$는 부분환이다. 거꾸로 $I$가 부분환이고 두 흡수가 성립하면, 부분환의 (1)에 의해 $I$는 $(R, +)$의 부분군이므로 아이디얼이다.

$\mathbb{Z}$가 환 $\mathbb{R}$의 부분환이라는 것은 부분환의 (4)이다. [[real-number-arithmetic|실수의 계산 법칙]]의 (K7)에 의해 $2 \ne 0$이므로 (K6)과 (K8)의 (iii)에 의해 $2 \cdot 2^{-1} = 1$인 실수 $2^{-1}$이 있고, (K4)와 (K1)에 의해 $2^{-1}$과 $1$의 곱은 $2^{-1}$이다. $2^{-1}$이 정수 $k$라면, (K7)에 의해 정수의 곱 $2k$는 실수의 곱 $2 \cdot 2^{-1} = 1$과 같으므로 정수 $1 = 2k$는 짝수이다. 한편 $1 = 2 \cdot 0 + 1$은 홀수이므로 [[even-and-odd|짝수와 홀수]]에서 받아들인 사실에 어긋난다. 따라서 $2^{-1} \notin \mathbb{Z}$이고, $a = 1 \in \mathbb{Z}$와 $r = 2^{-1} \in \mathbb{R}$에서 $ra \notin \mathbb{Z}$이므로 $\mathbb{Z}$는 아이디얼이 아니다.

(3) [[subgroup|부분군]]의 (4)에 의해 $\{0\}$과 $R$은 $(R, +)$의 부분군이다. $r \in R$이면 [[ring-basic-properties|환의 기본 성질]]의 (1)에 의해 $r0 = 0 \in \{0\}$이고 $0r = 0 \in \{0\}$이다. $R$의 원소끼리의 곱은 $R$에 속하므로 $R$은 두 흡수를 만족한다.

(4) $1 \in I$이면, 모든 $r \in R$에서 오른쪽 흡수를 $a = 1 \in I$에 쓰면 $r = 1r \in I$이므로 $R \subseteq I$이고, $I \subseteq R$이므로 $I = R$이다. $I = R$이면 $1 \in I$이다. 둘째 문장은 첫째 문장의 두 쪽을 부정한 것이다.

(5) [[ring-homomorphism|환 준동형]]의 (1)에 의해 $\operatorname{Ker} \varphi$는 $(R, +)$의 부분군이다. $r \in R$이고 $a \in \operatorname{Ker} \varphi$이면 환 준동형의 정의와 환의 기본 성질의 (1)(환 $R'$에서)에 의해 $\varphi(ra) = \varphi(r)\varphi(a) = \varphi(r)0 = 0$이고 $\varphi(ar) = \varphi(a)\varphi(r) = 0\varphi(r) = 0$이므로 $ra, ar \in \operatorname{Ker} \varphi$이다.
:::

:::remark[(6)–(8)의 증명]
(6)의 (i) [[ring-basic-properties|환의 기본 성질]]의 (1)에 의해 $0 = a0 \in aR$이므로 $aR \ne \emptyset$이다. $ar, as \in aR$이면 환의 기본 성질의 (4)에 의해 $ar - as = a(r - s) \in aR$이다. $s \in R$이고 $x = ar \in aR$이면 곱셈의 결합법칙에 의해 $xs = (ar)s = a(rs) \in aR$이고, $R$이 가환환이므로 $sx = xs \in aR$이다. (1)에 의해 $aR$는 아이디얼이다.

(6)의 (ii) $1$이 단위원이면 $a = a1 \in aR$이다. $J$가 $a \in J$인 아이디얼이면, $r \in R$마다 오른쪽 흡수에 의해 $ar \in J$이므로 $aR \subseteq J$이다.

(6)의 (iii) [[ring-examples|환의 예]]의 (4)에 의해 $2\mathbb{Z}$는 정수의 덧셈과 곱셈으로 가환환이다. $r \in 2\mathbb{Z}$이면 $r = 2k$인 정수 $k$가 있고 $2r = 2(2k) = 4k \in 4\mathbb{Z}$이다. 거꾸로 $4k = 2(2k)$이고 $2k \in 2\mathbb{Z}$이다. 따라서 $\{2r : r \in 2\mathbb{Z}\} = 4\mathbb{Z}$이다. $2 \in 4\mathbb{Z}$라면 $2 = 4k$인 정수 $k$가 있고, $2 \cdot 1 = 2 \cdot (2k)$이며 $2 \ne 0$이므로 [[integer-cancellation|정수 곱셈의 소거 법칙]]의 (2)에 의해 $1 = 2k$이다. 그러면 $1$은 짝수이면서 홀수($1 = 2 \cdot 0 + 1$)이므로 [[even-and-odd|짝수와 홀수]]에서 받아들인 사실에 어긋난다. 따라서 $2 \notin 4\mathbb{Z}$이다.

(7) 환의 예의 (1)에 의해 환 $\mathbb{Z}$의 덧셈군은 $(\mathbb{Z}, +)$이다. (i)에서 (ii)는 아이디얼의 정의이다. (ii)에서 (iii)과 $n$이 하나뿐이라는 것은 [[subgroups-of-cyclic-groups|순환군의 부분군]]의 (2)이다. (iii)에서 (i): [[subgroup-examples|부분군의 예와 교집합]]의 (1)에 의해 $n\mathbb{Z}$는 $(\mathbb{Z}, +)$의 부분군이다. $r \in \mathbb{Z}$이고 $a = nk \in n\mathbb{Z}$이면 정수의 곱셈의 결합법칙과 교환법칙([[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 계산 법칙)에 의해 $ra = r(nk) = n(rk)$이고 $ar = (nk)r = n(kr)$이며, $rk$와 $kr$은 정수이므로([[even-and-odd]]에서 받아들인 사실) $ra, ar \in n\mathbb{Z}$이다. 환의 예의 (1)에 의해 $\mathbb{Z}$는 단위원을 갖는 가환환이고, (6)의 $n\mathbb{Z}$는 $\{nr : r \in \mathbb{Z}\}$이므로 부분군의 예의 (1)의 $n\mathbb{Z}$와 같은 집합이다. 따라서 (iii)의 $I = n\mathbb{Z}$는 주 아이디얼이다.

(8)의 (i) [[subgroup-examples|부분군의 예와 교집합]]의 (4)에 의해 $I \cap J$는 $(R, +)$의 부분군이다. $r \in R$이고 $a \in I \cap J$이면 $I$와 $J$의 흡수에 의해 $ra \in I$, $ra \in J$이고 $ar \in I$, $ar \in J$이므로 $ra, ar \in I \cap J$이다.

(8)의 (ii) [[subgroup|부분군]]의 (1)에 의해 $0 \in I$이고 $0 \in J$이므로 $0 = 0 + 0 \in I + J$이다. $x, y \in I + J$이면 $x = a + b$, $y = a' + b'$인 $a, a' \in I$와 $b, b' \in J$가 있다. [[group-basic-properties|군의 기본 성질]]의 (6)을 덧셈 표기로 읽고 덧셈의 교환법칙을 쓰면 $-(a' + b') = (-b') + (-a') = (-a') + (-b')$이다. 덧셈의 결합법칙과 교환법칙을 한 번씩 써서
$$
\begin{aligned}
x - y &= (a + b) + \bigl((-a') + (-b')\bigr) = a + \Bigl(b + \bigl((-a') + (-b')\bigr)\Bigr) \\
&= a + \Bigl(\bigl(b + (-a')\bigr) + (-b')\Bigr) = a + \Bigl(\bigl((-a') + b\bigr) + (-b')\Bigr) \\
&= a + \Bigl((-a') + \bigl(b + (-b')\bigr)\Bigr) = \bigl(a + (-a')\bigr) + \bigl(b + (-b')\bigr) = (a - a') + (b - b')
\end{aligned}
$$
이고, (1)에 의해 $a - a' \in I$, $b - b' \in J$이므로 $x - y \in I + J$이다. $r \in R$이면 분배법칙에 의해 $rx = ra + rb$이고 $xr = ar + br$이며, 흡수에 의해 $ra, ar \in I$이고 $rb, br \in J$이므로 $rx, xr \in I + J$이다. (1)에 의해 $I + J$는 아이디얼이다. $a \in I$이면 $a = a + 0$이고 $0 \in J$이므로 $a \in I + J$이다. $b \in J$이면 $b = 0 + b$이고 $0 \in I$이므로 $b \in I + J$이다. $K$가 $I \subseteq K$, $J \subseteq K$인 아이디얼이고 $a \in I$, $b \in J$이면 $a, b \in K$이고 $K$는 $(R, +)$의 부분군이므로 덧셈에 닫혀 있어 $a + b \in K$이다. 따라서 $I + J \subseteq K$이다.

(8)의 (iii) 부분군의 예와 교집합의 (1)의 정의에 의해 $m\mathbb{Z}$의 원소는 $mx$ ($x \in \mathbb{Z}$) 꼴이고 $n\mathbb{Z}$의 원소는 $ny$ ($y \in \mathbb{Z}$) 꼴이므로 $m\mathbb{Z} + n\mathbb{Z} = \{mx + ny : x, y \in \mathbb{Z}\}$이다. [[subgroups-of-cyclic-groups|순환군의 부분군]]의 (4)에 의해 이 집합은 $\gcd(m, n)\mathbb{Z}$이다.
:::

## 예시와 반례

:::example[ℤ_6의 아이디얼 {[0], [3]}]
[[ring-examples|환의 예]]의 (3)의 환 $\mathbb{Z}_6$에서 $I = \{[0], [3]\}$을 봅시다. [[subring|부분환]]의 (5)의 (iii)에 의해 $I$는 부분환이므로, 부분환의 (1)에 의해 $(\mathbb{Z}_6, +)$의 부분군입니다. $r$이 정수이면 [[even-and-odd|짝수와 홀수]]에서 받아들인 사실에 의해 $r$은 짝수이거나 홀수입니다. $r = 2k$이면 $[r][3] = [6k] = [0]$이고($6k - 0 = 6k$), $r = 2k + 1$이면 $[r][3] = [6k + 3] = [3]$입니다($(6k + 3) - 3 = 6k$). 여기서 $[x] = [y]$는 [[congruence-modulo-n|합동]]의 정의와 [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]으로 얻고, 곱은 [[integers-modulo-n|법 n의 정수]]의 (2)입니다. 또 [[ring-basic-properties|환의 기본 성질]]의 (1)에 의해 $[r][0] = [0]$입니다. 따라서 모든 $[r] \in \mathbb{Z}_6$에 대하여 $[r]I \subseteq I$이고, $\mathbb{Z}_6$이 가환환이므로 오른쪽 흡수도 성립합니다. $I$는 아이디얼입니다.

$[1] \ne [3]$이고 $[1] \ne [0]$이므로(법 n의 정수의 (1)) $[1] \notin I$이고, (4)와 맞게 $I$는 진아이디얼입니다. 그런데 부분환의 (5)의 (iii)에 의해 환 $I$ 자신은 단위원 $[3]$을 갖는 환입니다. 단위원을 갖는 환의 진아이디얼이 자기 나름의 곱셈의 항등원을 가질 수는 있지만, (4)에 의해 큰 환의 단위원을 원소로 가질 수는 없습니다.
:::

:::counterexample[n ≥ 2이면 스칼라 행렬 전체는 아이디얼이 아니다]
$n \ge 2$인 자연수 $n$과 [[ring-examples|환의 예]]의 (5)의 환 $M_n(\mathbb{R})$에서 $S = \{cI_n : c \in \mathbb{R}\}$을 봅시다. [[vector-space|벡터공간]]의 (V5)에 의해 $I_n = 1I_n \in S$입니다. $(1, 2)$ 성분이 $1$이고 나머지 성분이 모두 $0$인 $n \times n$ 행렬을 $B$라 하면, [[matrix-product-properties|행렬 곱의 성질]]의 (4)에 의해 $BI_n = B$입니다. 그런데 $c$가 실수이면 [[matrix|행렬]]의 (1)과 (6)에 의해 $cI_n$의 $(1, 2)$ 성분은 $c \cdot 0 = 0$이고([[real-number-arithmetic|실수의 계산 법칙]]의 (K9)) $B$의 $(1, 2)$ 성분은 $1 \ne 0$이므로, 행렬의 (2)에 의해 $B \ne cI_n$입니다. 곧 $B \notin S$입니다. $a = I_n \in S$와 $r = B$에서 $ar \notin S$이므로 오른쪽 흡수가 깨지고, $S$는 아이디얼이 아닙니다. (4)로 보아도 같습니다. $S$가 아이디얼이라면 단위원 $I_n$을 포함하므로 $S = M_n(\mathbb{R})$이어야 하는데 $B \notin S$입니다.
:::

## 확인 질문

:::check[환 $\mathbb{Z}$에서 $4\mathbb{Z} + 6\mathbb{Z}$는 어떤 아이디얼인가?]
$2\mathbb{Z}$입니다. 정수 $x$, $y$에 대하여 $4x + 6y = 2(2x + 3y)$이므로 $4\mathbb{Z} + 6\mathbb{Z} \subseteq 2\mathbb{Z}$입니다. 거꾸로 $2 = 4 \cdot (-1) + 6 \cdot 1 \in 4\mathbb{Z} + 6\mathbb{Z}$이고, (8)의 (ii)에 의해 $4\mathbb{Z} + 6\mathbb{Z}$는 아이디얼이므로 (6)의 (ii)에 의해 $2\mathbb{Z} \subseteq 4\mathbb{Z} + 6\mathbb{Z}$입니다. (8)의 (iii)에 의해서도 $\gcd(4, 6)\mathbb{Z} = 2\mathbb{Z}$입니다.
:::

:::check[환 $\mathbb{R}$의 아이디얼은 무엇인가?]
$\{0\}$과 $\mathbb{R}$ 둘뿐입니다. 둘이 아이디얼이라는 것은 (3)입니다. $I$가 아이디얼이고 $I \ne \{0\}$이면 $a \ne 0$인 $a \in I$가 있습니다. [[real-number-arithmetic|실수의 계산 법칙]]의 (K8)의 (iii)에 의해 $a^{-1}$이 있고, 왼쪽 흡수에 의해 $a^{-1}a = 1 \in I$이므로((K1)) (4)에 의해 $I = \mathbb{R}$입니다.
:::
