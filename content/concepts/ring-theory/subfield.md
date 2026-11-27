---
title: 부분체
title_en: Subfield
aliases: [subfield]
kind: definition
field: ring-theory
msc: ["12"]
level: undergrad
summary: 체 E 의 부분집합 K 가 1 을 포함하는 부분환이고 제한한 연산으로 체이면 E 의 부분체라 한다. 판정법(1 을 포함하고 뺄셈, 곱셈, 0 이 아닌 원소의 역원에 닫혀 있다), 0·1·역원·유한 합과 곱이 E 에서와 같다는 것, 부분체의 부분체와 교집합, 법 p 의 정수의 부분체는 자기 자신뿐이라는 것을 다룬다.
requires: [subset, mathematical-induction, binary-operation, subgroup-criteria, integers-modulo-n, ring, ring-basic-properties, ring-examples, subring, ring-homomorphism, integral-domain, field, finite-integral-domain-is-a-field, ideal, finite-sums-in-a-ring, finite-products-in-a-commutative-ring, polynomial-ring, division-algorithm-for-polynomials]
sources:
  - ref: judson-abstract-algebra
    loc: "16.1절 Rings, 부분환의 정의 (p.193); 11.1절 Group Homomorphisms, Example 11.8 (p.135); 18.1절 Fields of Fractions, Theorem 18.4 (p.227), Corollary 18.6, 18.7 (p.228); 21.1절 Extension Fields, 확대체의 정의 (p.260); 18.4절 Exercises, 연습문제 4, 10 (p.235–236)"
    checked: original
    note: "출처 21.1절(p.260)은 확대체를 'A field E is an extension field of a field F if F is a subfield of E' 로 정의하고, 부분체(subfield)라는 낱말은 18.1절 Theorem 18.4(p.227), Corollary 18.6, 18.7(p.228) 등에서도 쓴다. 이 항목의 정의는 출처 16.1절(p.193)의 부분환의 정의('a subset S of R such that S is also a ring under the inherited operations')를 체로 옮기고 1 을 포함한다는 조건을 더한 꼴이다. (2)는 그 조건 1 ∈ K 가 나머지 조건에서 나온다는 것을 보인다. (7)의 '1 을 포함하는 부분환은 체가 아닐 수 있다' 는 출처 연습문제 4(p.235, 1 을 포함하는 체의 부분환은 정역인가)와 닿아 있고, (6)의 '법 p 의 정수의 부분체는 자기 자신뿐' 은 출처 연습문제 10(p.235–236)의 소체(prime field, 진부분체가 없는 체)의 정의에 비추면 Z_p 가 소체라는 것이다. 예시 '$\\mathbb{Z}_7$의 원소 하나를 포함하는 부분체' 는 출처 11.1절 Example 11.8(p.135)이 덧셈군 Z_7 의 부분군은 {0} 과 Z_7 뿐이라고 쓰는 것과 대상이 같다(그쪽은 부분군, 이쪽은 부분체). 반례 '곱셈과 역원에만 닫힌 집합 $\\{1, -1\\}$', 확인 질문의 집합 {0} 과 Z_11 의 부분환은 정의와 판정법을 적용한 것이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(진술의 경계 경우 0·체·영 아이디얼 대입, 직관 문장 대입). 독립 검토 없음."
added: 2026-11-27
---

:::statement
$E$가 [[field|체]]이고 $K$가 $E$의 [[subset|부분집합]]이라 하자. $0$, $1$, $-a$, $a - b$, 곱 $ab$는 [[ring|환]]의 표기이고, 역원 $a^{-1}$과 $E^{\times}$는 [[field|가역원과 체]]의 것이며, 부분환과 "덧셈과 곱셈을 $K$로 제한한 연산"은 [[subring|부분환]]의 것이다.

$K$가 $E$의 **부분체**(subfield)인 것은 정확히 $K$가 $1 \in K$인 $E$의 부분환이고, 덧셈과 곱셈을 $K$로 제한한 연산으로 $K$가 체일 때이다. "$K$는 $E$의 부분체이다"는 기호로 줄이지 않고 말로 쓴다. [[division-algorithm-for-polynomials|다항식의 나눗셈 정리]]의 (6)의 가정 "$K$가 $1 \in K$인 $E$의 부분환으로서 덧셈과 곱셈을 $K$로 제한한 연산으로 체"는 정확히 $K$가 $E$의 부분체라는 것이다.

다음이 성립한다.

1. (판정법) $K$가 $E$의 부분체인 것은 정확히 다음 셋이 모두 성립할 때이다: $1 \in K$이다, 모든 $a, b \in K$에 대하여 $a - b \in K$이고 $ab \in K$이다, $0$이 아닌 모든 $a \in K$에 대하여 $E$에서의 역원 $a^{-1}$이 $K$에 속한다.
2. (단위원) $K$가 $E$의 부분환이고 덧셈과 곱셈을 $K$로 제한한 연산으로 체이면, 체 $K$의 단위원은 $E$의 $1$이다. 따라서 이때 $1 \in K$이고 $K$는 $E$의 부분체이다.
3. (같은 계산) $K$가 $E$의 부분체라 하자.
   - (i) 체 $K$의 $0$과 $1$은 $E$의 $0$과 $1$이다. $a, b \in K$이면 $K$에서의 $-a$, $a - b$, $ab$는 $E$에서의 것과 같고, $a \ne 0$이면 $K$에서의 $a$의 역원은 $E$에서의 $a^{-1}$이다.
   - (ii) $K^{\times} = K - \{0\}$이고, $K^{\times}$는 군 $E^{\times}$의 [[subgroup|부분군]]이다.
   - (iii) 모든 $a \in K$에서 값이 $a$인 포함 함수 $\iota : K \to E$는 $1$을 $1$로 보내는 단사인 [[ring-homomorphism|환 준동형]]이다. $K$의 원소의 [[finite-sums-in-a-ring|유한 합]], [[finite-products-in-a-commutative-ring|유한 곱과 거듭제곱]]은 $K$에서 계산한 것과 $E$에서 계산한 것이 같다.
   - (iv) [[polynomial-ring|다항식환]]의 (7)에 의해 $K[X] \subseteq E[X]$이고, $K[X]$의 원소의 계수와 합, 차, 곱은 $E[X]$의 원소로 보아도 같다.
4. (자기 자신) $E$는 $E$의 부분체이다.
5. (부분체의 부분체와 교집합) $K$와 $L$이 $E$의 부분집합이라 하자.
   - (i) $K$가 $E$의 부분체이고 $L \subseteq K$이면, $L$이 체 $K$의 부분체인 것은 정확히 $L$이 $E$의 부분체일 때이다.
   - (ii) $K$와 $L$이 $E$의 부분체이면 $K \cap L$은 $E$의 부분체이다.
6. (법 $n$의 정수) $n \ge 2$인 정수 $n$에 대하여, [[integers-modulo-n|법 n의 정수]]의 환 $\mathbb{Z}_n$([[ring-examples|환의 예]]의 (3))의 부분환으로서 $[1]$을 포함하는 것은 $\mathbb{Z}_n$뿐이다. 따라서 $p$가 소수이면 체 $\mathbb{Z}_p$의 부분체는 $\mathbb{Z}_p$뿐이다.
7. (부분체가 아닌 부분환) $1$을 포함하는 체의 부분환은 부분체가 아닐 수 있다. 환 $\mathbb{R}$의 부분환 $\mathbb{Z}$는 $1$을 포함하지만 $\mathbb{R}$의 부분체가 아니다.
:::

:::english
Let $E$ be a field and $K$ a subset of $E$. The symbols $0$, $1$, $-a$, $a - b$ and the product $ab$ are the notation of rings; inverses $a^{-1}$ and $E^{\times}$ are those of units and fields; subrings and "the addition and multiplication restricted to $K$" are those of subrings.

$K$ is a **subfield** of $E$ if and only if $K$ is a subring of $E$ with $1 \in K$ and $K$ is a field under the addition and multiplication restricted to $K$. We say "$K$ is a subfield of $E$" in words, without a symbol. The hypothesis of item (6) of the division algorithm for polynomials, "$K$ is a subring of $E$ with $1 \in K$ that is a field under the addition and multiplication restricted to $K$", says exactly that $K$ is a subfield of $E$.

The following hold.

1. (Criterion) $K$ is a subfield of $E$ if and only if all of the following hold: $1 \in K$; $a - b \in K$ and $ab \in K$ for all $a, b \in K$; the inverse $a^{-1}$ in $E$ of every nonzero $a \in K$ lies in $K$.
2. (Unity) If $K$ is a subring of $E$ that is a field under the addition and multiplication restricted to $K$, then the unity of the field $K$ is the $1$ of $E$. Hence in this case $1 \in K$ and $K$ is a subfield of $E$.
3. (The same computations) Let $K$ be a subfield of $E$.
   - (i) The $0$ and $1$ of the field $K$ are the $0$ and $1$ of $E$. For $a, b \in K$, the elements $-a$, $a - b$, $ab$ computed in $K$ are those computed in $E$, and if $a \ne 0$, the inverse of $a$ in $K$ is the inverse $a^{-1}$ in $E$.
   - (ii) $K^{\times} = K - \{0\}$, and $K^{\times}$ is a subgroup of the group $E^{\times}$.
   - (iii) The inclusion $\iota : K \to E$, whose value at every $a \in K$ is $a$, is an injective ring homomorphism sending $1$ to $1$. Finite sums, finite products and powers of elements of $K$ are the same whether computed in $K$ or in $E$.
   - (iv) By item (7) of the polynomial ring, $K[X] \subseteq E[X]$, and the coefficients, sums, differences and products of elements of $K[X]$ are the same when they are regarded as elements of $E[X]$.
4. (Itself) $E$ is a subfield of $E$.
5. (Subfields of subfields, intersections) Let $K$ and $L$ be subsets of $E$.
   - (i) If $K$ is a subfield of $E$ and $L \subseteq K$, then $L$ is a subfield of the field $K$ if and only if $L$ is a subfield of $E$.
   - (ii) If $K$ and $L$ are subfields of $E$, then $K \cap L$ is a subfield of $E$.
6. (Integers modulo $n$) For an integer $n \ge 2$, the only subring of the ring $\mathbb{Z}_n$ of integers modulo $n$ (item (3) of the examples of rings) containing $[1]$ is $\mathbb{Z}_n$ itself. Hence if $p$ is a prime, the only subfield of the field $\mathbb{Z}_p$ is $\mathbb{Z}_p$.
7. (A subring that is not a subfield) A subring of a field containing $1$ need not be a subfield. The subring $\mathbb{Z}$ of the ring $\mathbb{R}$ contains $1$ but is not a subfield of $\mathbb{R}$.
:::

## 직관

부분환이 "같은 덧셈과 곱셈으로 그 자체가 환인 부분집합"이듯이, 부분체는 같은 연산으로 그 자체가 체인 부분집합입니다. 판정법 (1)은 그 조건을 닫힘으로 바꿔 말합니다. $1$을 포함하고, 빼고, 곱하고, $0$이 아닌 원소로 나누어도 밖으로 나가지 않으면 됩니다. 큰 방 안에 칸막이로 작은 방을 만들 때, 셈의 출발점인 $1$이 작은 방 안에 있고 작은 방 안에서 하는 셈이 모두 작은 방 안에서 끝나야 하는 것과 같습니다. 이 비유의 "셈"이 판정법의 뺄셈, 곱셈, 역원에 해당합니다. $1$의 조건을 빼면 $\{0\}$도 나머지 조건을 만족하지만 부분체가 아닙니다(아래 확인 질문).

$1 \in K$를 정의에 적지만, 체인 부분환이면 이것은 저절로 성립합니다((2)). 체 $K$의 단위원 $e$는 $ee = e$를 만족하는데, 정역 $E$에서 이런 원소는 $0$과 $1$뿐이고 $e \ne 0$이기 때문입니다. 정역이 아닌 환에서는 부분환의 단위원이 큰 환의 단위원과 다를 수 있습니다([[subring|부분환]]의 (5)의 (iii)의 $\mathbb{Z}_6$). (2)의 증명은 $E$가 정역이라는 것을 씁니다.

부분체에서 계산한 것은 큰 체에서 계산한 것과 같습니다((3)). 그래서 부분체 위의 다항식을 큰 체 위의 다항식으로 보아도 합과 곱, 나누어떨어짐이 바뀌지 않습니다(다항식의 나눗셈 정리의 (6)).

## 증명

:::idea
판정법은 부분환의 판정법에 역원의 조건을 더한 것이다. 체 $K$의 단위원이 $E$의 $1$이라는 것은 정역에서 $ee = e$이면 $e = 0$이거나 $e = 1$이라는 데서 나온다.
:::

:::hint
$\mathbb{Z}_n$에서는 $[1]$을 포함하고 덧셈에 닫힌 집합이 $[0], [1], [2], \dots$를 차례로 포함합니다.
:::

:::proof
**쓰는 사실.** [[subring|부분환]]의 (1)에 의해 부분환 $K$에서의 $0$, $-a$, $a - b$, $ab$는 $E$에서의 것과 같다. [[field|가역원과 체]]의 정의에 의해 $E$의 $0$이 아닌 원소 $a$에는 $ab = 1 = ba$인 $b$가 정확히 하나 있고 그것이 $a^{-1}$이다. 체는 단위원을 갖는 가환환이므로 $1 \ne 0$이다([[ring-basic-properties|환의 기본 성질]]의 (7)).

**2.** $e$를 체 $K$의 단위원이라 하자. $K$에서의 곱은 $E$에서의 곱이므로 $E$에서 $ee = e$이다. 가역원과 체의 (3)에 의해 $E$는 정역이므로 [[integral-domain|영인자와 정역]]의 (5)에 의해 $e = 0$이거나 $e = 1$이다. 체 $K$는 단위원을 갖는 환이므로 $e$는 $K$의 $0$, 곧 $E$의 $0$과 다르다. 따라서 $e = 1$이고 $1 \in K$이다.

**1.** $K$가 부분체라 하자. $1 \in K$이고, 부분환이므로 부분환의 (2)에 의해 $a - b$, $ab \in K$이다. $a \in K$, $a \ne 0$이면 $a$는 체 $K$의 $0$이 아니므로 $K$에서 $ab = e = ba$인 $b \in K$가 있다($e$는 $K$의 단위원). (2)에 의해 $e = 1$이고, $K$에서의 곱은 $E$에서의 곱이므로 $E$에서 $ab = 1 = ba$이다. 역원은 하나뿐이므로 $b = a^{-1}$이고 $a^{-1} \in K$이다.

거꾸로 세 조건이 성립한다고 하자. $1 \in K$이므로 $K \ne \emptyset$이고, 부분환의 (2)에 의해 $K$는 $E$의 부분환이다. $E$가 가환이므로 부분환의 (3)의 (ii)에 의해 $K$는 가환환이고, $1 \in K$이므로 부분환의 (5)의 (i)에 의해 단위원 $1$을 갖는 환이다. $0$이 아닌 $a \in K$에 대하여 $a^{-1} \in K$이고 $aa^{-1} = 1 = a^{-1}a$이므로 $a$는 $K$의 가역원이다. 따라서 $K$는 체이다.

**3.** (i) $0$, $-a$, $a - b$, $ab$는 쓰는 사실에서 보았다. $1$은 (2)이고, 역원은 (1)의 증명에서 보았다. (ii) 체 $K$에서 $0$이 아닌 원소는 가역원이고 $0$은 가역원이 아니므로(가역원과 체의 (1)) $K^{\times} = K - \{0\}$이다. $K - \{0\} \subseteq E - \{0\} = E^{\times}$이고 $1 \in K - \{0\}$이다. $a, b \in K - \{0\}$이면 (1)에 의해 $ab^{-1} \in K$이고, $ab^{-1} = 0$이면 $a = (ab^{-1})b = 0$이 되어 어긋나므로 $ab^{-1} \in K - \{0\}$이다. [[subgroup-criteria|부분군의 판정법]]의 (2)에 의해 부분군이다. (iii) 환 준동형의 (7)의 (ii)에 의해 $\iota$는 단사인 환 준동형이고 $\iota(1) = 1$이다. $\iota$는 덧셈군의 군 준동형이므로(환 준동형의 (1)) 환의 유한 합의 (7)에 의해 $\iota$는 유한 합을 보존하고, 가환환의 유한 곱의 (9)에 의해 유한 곱과 거듭제곱을 보존한다. $\iota$의 값은 원소 자신이므로 이것이 문장의 뜻이다. (iv) $K$는 $1 \in K$인 $E$의 부분환이므로 다항식환의 (7)의 (i)과 (ii)이다.

**4.** $1 \in E$이고, $E$의 원소끼리의 뺄셈과 곱과 $0$이 아닌 원소의 역원은 $E$에 속하므로 (1)에 의해 부분체이다.

**5.** (i) (3)의 (i)에 의해 체 $K$의 $1$, 뺄셈, 곱셈, 역원은 $E$의 것과 같다. 따라서 $L$에 대하여 (1)의 세 조건을 체 $K$에서 따진 것과 $E$에서 따진 것은 같은 조건이고, (1)을 체 $K$와 체 $E$에 각각 쓰면 된다. (ii) $1$은 $K$와 $L$에 모두 속한다. $a, b \in K \cap L$이면 (1)에 의해 $a - b$와 $ab$는 $K$에도 $L$에도 속하고, $a \ne 0$이면 $a^{-1}$도 그렇다. (1)에 의해 $K \cap L$은 부분체이다.

**6.** $S$가 $[1] \in S$인 $\mathbb{Z}_n$의 부분환이라 하자. $0$ 이상인 정수 $k$에 대하여 $[k] \in S$임을 $k$에 대한 [[mathematical-induction|수학적 귀납법]]으로 보인다. 부분환의 (1)에 의해 $[0] \in S$이다. $[k] \in S$이면 법 $n$의 정수의 (2)에 의해 $[k + 1] = [k] + [1]$이고 $S$는 덧셈에 닫혀 있으므로 $[k + 1] \in S$이다. 법 $n$의 정수의 (1)에 의해 $\mathbb{Z}_n = \{[r] : 0 \le r \le n - 1\}$이므로 $\mathbb{Z}_n \subseteq S$이고 $S = \mathbb{Z}_n$이다. $p$가 소수이면 [[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3)에 의해 $\mathbb{Z}_p$는 체이고, 그 부분체는 $[1]$을 포함하는 부분환이므로 $\mathbb{Z}_p$이다. (4)에 의해 $\mathbb{Z}_p$는 부분체이다.

**7.** [[subring|부분환]]의 (4)에 의해 $\mathbb{Z}$는 $\mathbb{R}$의 부분환이고 $1 \in \mathbb{Z}$이다. [[ideal|아이디얼]]의 (2)에 의해 $2 \in \mathbb{Z}$의 $\mathbb{R}$에서의 역원 $2^{-1}$은 정수가 아니므로, (1)에 의해 $\mathbb{Z}$는 $\mathbb{R}$의 부분체가 아니다.
:::

## 예시와 반례

:::example[$\mathbb{Z}_7$의 원소 하나를 포함하는 부분체]
$\mathbb{Z}_7$의 부분체 $K$가 $[3]$을 포함한다고 해 봅시다. (1)에 의해 $K$는 $[3]$의 역원 $[5]$($[3][5] = [15] = [1]$)와 $[1]$을 포함하고, 덧셈에 닫혀 있으므로 $[1] + [1] = [2]$, $[2] + [1] = [3]$, …, $[6]$을 모두 포함합니다. 그래서 $K = \mathbb{Z}_7$입니다. (6)은 이렇게 $[1]$에서 시작해 $[1]$을 거듭 더하면 모든 원소가 나온다는 것을 일반적으로 적은 것입니다. 반대로 $\{[0], [1], [6]\}$은 $[1] - [6] = [-5] = [2]$를 포함하지 않으므로 $\mathbb{Z}_7$의 부분체가 아닙니다.
:::

:::counterexample[곱셈과 역원에만 닫힌 집합 $\{1, -1\}$]
$\mathbb{R}$의 부분집합 $\{1, -1\}$은 $1$을 포함하고 곱셈과 역원에 닫혀 있습니다: $1 \cdot 1 = (-1)(-1) = 1$, $1 \cdot (-1) = (-1) \cdot 1 = -1$, $1^{-1} = 1$, $(-1)^{-1} = -1$. 하지만 $1 - (-1) = 2$는 $1$도 $-1$도 아니므로 뺄셈에 닫혀 있지 않고, (1)에 의해 $\mathbb{R}$의 부분체가 아닙니다. 판정법의 세 조건 가운데 하나만 빠져도 부분체가 아닙니다.
:::

## 확인 질문

:::check[$\mathbb{R}$의 부분집합 $\{0\}$은 $\mathbb{R}$의 부분체인가?]
아닙니다. $\{0\}$은 부분환이지만 $1 \notin \{0\}$입니다($1 \ne 0$). 또 제한한 연산으로 영환이 되고, 영환은 체가 아닙니다.
:::

:::check[$\mathbb{Z}_{11}$의 부분집합 $S$가 $[1]$을 포함하고 뺄셈과 곱셈에 닫혀 있으면 $S$는 무엇인가?]
부분환의 (2)에 의해 $S$는 $[1]$을 포함하는 부분환이므로, (6)에 의해 $S = \mathbb{Z}_{11}$입니다. 역원의 조건을 따로 확인하지 않아도 이 경우에는 부분체가 됩니다.
:::
