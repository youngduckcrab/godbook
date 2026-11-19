---
title: 가역원과 체
title_en: Units and Fields
aliases: [가역원, 체, 곱셈의 역원, 가역원의 군, unit, field, group of units, multiplicative inverse]
kind: definition
field: ring-theory
msc: ["12", "13"]
level: undergrad
summary: 단위원을 갖는 환에서 곱해서 1이 되는 짝이 있는 원소를 가역원이라 하고, 0이 아닌 모든 원소가 가역원인 단위원을 갖는 가환환을 체라 한다. 가역원 전체는 곱셈으로 군이고, 체는 정역이며, ℝ은 체이지만 ℤ는 체가 아니다.
requires: [ring, ring-basic-properties, ring-examples, subring, integral-domain, binary-operation, group, number-groups, group-of-units-modulo-n, integers-modulo-n, equivalence-classes-equal-iff-related, congruence-modulo-n, real-number-arithmetic, prime-number, divisibility, well-ordering-principle, invertible-matrix, general-linear-group]
sources:
  - ref: judson-abstract-algebra
    loc: 16.1절 나눗셈환과 체의 정의 p.190–191, Example 16.2, 16.3 p.191, 16.2절 단원(unit)의 정의 p.193, 16.4절 Corollary 16.40 앞 문장 p.199, 16.7절 연습문제 3 p.204, 35 p.207
    checked: original
    note: "출처는 가역원(unit)을 '단위원을 갖는 환에서 곱셈의 역원을 갖는 원소'로 정의하고(p.193), 체를 '0 이 아닌 모든 원소가 단원인 단위원을 갖는 환'인 나눗셈환(division ring) 가운데 가환인 것으로 정의한다(p.190–191, p.193–194). 이 항목은 나눗셈환을 거치지 않고 체를 바로 정의하며, 뜻은 같다. 출처는 나눗셈환의 정의에서 역원을 'a⁻¹a = aa⁻¹ = 1 인 유일한 a⁻¹'로 적는다. 'unit' 의 번역어로 이 항목은 '가역원'을 쓰고, 출처의 U(n) 'group of units in ℤ_n'(p.35, p.77) 을 이 사이트는 '법 n 의 단원군'이라 불러 왔다. 기호 R^× 는 이 사이트의 것이다. 출처는 연습문제 16.35(c)(p.207)에서 가역원 전체를 U(R) 로 쓰고 'the group of units in R' 이라 하며 군임을 보이는 과정은 적지 않는다. (1)은 출처에 명제로 없다(검색어 'group of units|U(R)' 9건, 'units? (in|of)' 20건, 'GL ?n|GL2' 35건을 보았고, 16장 연습문제 1–39 에는 16.35(c) 뿐이다). (2)의 (i)은 출처 Example 16.2(p.191)의 '곱셈의 역원을 갖는 정수는 1 과 −1 뿐'을 증명한 것이고, (ii)는 Example 16.3(p.191), (iii)은 출처가 U(n) 을 ℤ_n 의 단원군이라 부르는 것(p.35)과 같은 내용이다. (iv)의 GL₂(ℝ) 는 출처 Example 3.14(p.35)가 'AA⁻¹ = A⁻¹A = I 인 A⁻¹ 이 있는 2 × 2 행렬' 전체로 정의하는 것이고, 이것은 M₂(ℝ) 의 가역원 전체와 같은 집합이다. 출처 연습문제 16.3(d)(e)(p.204)는 M₂(ℤ), M₂(ℤ₂) 의 단원을 묻는다. (3)의 '체는 정역'은 출처가 p.199 에서 'Since every field is an integral domain' 이라 쓰고 증명을 적지 않는 것이다. '가역원은 영인자가 아니다'는 출처에 명제로 없다(검색어 'unit.{0,40}zero divisor|zero divisor.{0,40}unit' 0건, 'cannot be a zero divisor|is not a zero divisor' 1건은 Proposition 16.15 의 증명, 'zero divisor' 9건). (4)는 출처 Example 16.2, 16.3(p.191)과 p.225 의 'the integers ℤ form an integral domain but not a field' 와 같다. (5)는 출처 Proposition 3.21(p.36–37)이 군에서 ax = b 의 해가 하나뿐임을 보이는 것과 같은 논법이다(검색어 'ax = b' 5건, 'unique solution' 3건, 'linear equation' 3건 가운데 환·체에 관한 것은 없다). (6)의 앞부분은 출처 18장 연습문제 4(p.235)의 물음이고, 뒷부분의 ℤ ⊂ ℝ 는 Example 16.9(p.193)와 16.2(p.191)에서 나온다. 예시의 ℤ₉ 의 가역원 {[1], [2], [4], [5], [7], [8]} 은 출처 Example 4.6(p.47)의 U(9) = {1, 2, 4, 5, 7, 8} 과 같은 대상이다. 반례(제곱이 영행렬인 행렬)는 출처 Example 16.6(p.191)의 'AB = 0' 과 같은 결론에서 나온다. 첫째 확인 질문(ℤ₅ 에서 [3]x = [4])은 출처 연습문제 3.1(d)(p.40, 9x ≡ 3 (mod 5))의 일차 합동식 풀기와 같은 종류이고, 쓰는 역원 3·2 ≡ 1 (mod 5) 은 출처 Example 3.1(p.29)의 7·3 ≡ 1 (mod 5) 과 같은 계산이다. 둘째 확인 질문(ℤ₂ 는 체)은 출처 읽기 질문 16.6.3(p.203, '유한한 체의 예')의 답이 될 수 있는 예이고, 출처는 21장(p.261)에서 ℤ₂ 를 체로 쓴다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 올린 뒤 표본 독립 검토 1회(수학 오류 0건)의 지적을 고쳤다. 경계 경우(영환, 소수의 1·p 분해)에서 거짓이 되는 문장과 근거 누락을 고침"
added: 2026-11-19
---

:::statement
$R$이 단위원 $1$을 갖는 [[ring|환]]이라 하자. $0$, $1$, 곱 $ab$는 [[ring|환]]의 표기이다.

$a \in R$이 $R$의 **가역원**(unit)인 것은 정확히 $ab = 1$이고 $ba = 1$인 $b \in R$이 있을 때이다. 환의 곱셈은 결합법칙을 만족하고 $1$이 그 항등원이므로 [[binary-operation|이항연산]]의 (2)에 의해 그런 $b$는 하나뿐이다. 이것을 $a$의 (곱셈의) **역원**이라 하고 $a^{-1}$로 쓴다. 가역원 전체의 집합을 $R^{\times}$로 쓴다. 가역원은 다른 책에서 단원(unit)이라고도 부르며, [[group-of-units-modulo-n|법 n의 단원군]]의 "단원"과 같은 것이다(아래 (2)).

$R$이 **체**(field)인 것은 정확히 $R$이 단위원을 갖는 가환환이고 $0$이 아닌 $R$의 모든 원소가 가역원일 때이다.

다음이 성립한다.

1. (가역원의 군) $0$은 가역원이 아니고 $1$은 가역원이다. $R^{\times}$는 $R$의 곱셈에 대해 닫혀 있고, 곱셈을 $R^{\times}$로 제한한 연산으로 [[group|군]]이다. 이 군의 항등원은 $1$이고 $a$의 역원은 $a^{-1}$이며, $a, b \in R^{\times}$이면 $(ab)^{-1} = b^{-1}a^{-1}$이다. $R$이 가환환이면 이 군은 아벨군이다.
2. (예) 환은 [[ring-examples|환의 예]]의 것이다.
   - (i) $\mathbb{Z}^{\times} = \{1, -1\}$이다.
   - (ii) $\mathbb{R}^{\times} = \mathbb{R} - \{0\}$이고, 군 $\mathbb{R}^{\times}$는 [[number-groups|수로 이루어진 군]]의 (3)의 군 $(\mathbb{R} - \{0\}, \cdot)$이다. 가역원 $a$의 역원 $a^{-1}$은 실수의 역수이다.
   - (iii) $n \ge 2$인 자연수 $n$에 대하여 $\mathbb{Z}_n^{\times} = U(n)$이고, 군 $\mathbb{Z}_n^{\times}$는 [[group-of-units-modulo-n|법 n의 단원군]] $U(n)$이다.
   - (iv) 자연수 $n$에 대하여 $M_n(\mathbb{R})^{\times} = GL_n(\mathbb{R})$이고, 군 $M_n(\mathbb{R})^{\times}$는 [[general-linear-group|일반선형군]] $GL_n(\mathbb{R})$이다. 가역원 $A$의 역원 $A^{-1}$은 역행렬이다.
3. (체는 정역) $R$이 가환환이면 $R$의 가역원은 영인자가 아니다. 체는 [[integral-domain|정역]]이다.
4. (실수와 정수) $\mathbb{R}$은 체이다. $\mathbb{Z}$는 정역이지만 체가 아니다.
5. (일차방정식) $a$가 $R$의 가역원이고 $b \in R$이면 $ax = b$인 $x \in R$은 정확히 하나 있고, 그것은 $a^{-1}b$이다. 특히 $R$이 체이면 $a \ne 0$인 모든 $a$에 대하여 그렇다.
6. (부분환) 체의 부분환으로서 $1$을 포함하는 것은 정역이지만 체가 아닐 수 있다. 체 $\mathbb{R}$의 부분환 $\mathbb{Z}$가 그렇다.

영환은 단위원을 갖는 환이 아니므로 가역원을 정의하지 않고, 체도 아니다.
:::

:::english
Let $R$ be a ring with unity $1$. The notation $0$, $1$ and the product $ab$ are those of the entry on rings.

An element $a \in R$ is a **unit** of $R$ exactly when there is $b \in R$ with $ab = 1$ and $ba = 1$. Since multiplication in a ring is associative and $1$ is its identity, such $b$ is unique by (2) of the entry on binary operations. It is called the (multiplicative) **inverse** of $a$ and written $a^{-1}$. The set of all units is written $R^{\times}$. Units are called *danwon* in some Korean texts, the word used in the name of the group of units modulo $n$; they are the same thing (see (2) below).

$R$ is a **field** exactly when $R$ is a commutative ring with unity and every nonzero element of $R$ is a unit.

The following hold.

1. (The group of units) $0$ is not a unit and $1$ is a unit. $R^{\times}$ is closed under the multiplication of $R$, and with the multiplication restricted to $R^{\times}$ it is a group. Its identity is $1$, the inverse of $a$ is $a^{-1}$, and $(ab)^{-1} = b^{-1}a^{-1}$ for $a, b \in R^{\times}$. If $R$ is a commutative ring, this group is abelian.
2. (Examples) The rings are those of the entry on examples of rings.
   - (i) $\mathbb{Z}^{\times} = \{1, -1\}$.
   - (ii) $\mathbb{R}^{\times} = \mathbb{R} - \{0\}$, and the group $\mathbb{R}^{\times}$ is the group $(\mathbb{R} - \{0\}, \cdot)$ of (3) in the entry on groups of numbers. The inverse $a^{-1}$ of a unit $a$ is the reciprocal of the real number $a$.
   - (iii) For every natural number $n \ge 2$, $\mathbb{Z}_n^{\times} = U(n)$, and the group $\mathbb{Z}_n^{\times}$ is the group of units modulo $n$, $U(n)$.
   - (iv) For every natural number $n$, $M_n(\mathbb{R})^{\times} = GL_n(\mathbb{R})$, and the group $M_n(\mathbb{R})^{\times}$ is the general linear group $GL_n(\mathbb{R})$. The inverse $A^{-1}$ of a unit $A$ is the inverse matrix.
3. (Fields are integral domains) If $R$ is a commutative ring, a unit of $R$ is not a zero divisor. Every field is an integral domain.
4. (Real numbers and integers) $\mathbb{R}$ is a field. $\mathbb{Z}$ is an integral domain but not a field.
5. (Linear equations) If $a$ is a unit of $R$ and $b \in R$, then there is exactly one $x \in R$ with $ax = b$, namely $a^{-1}b$. In particular, if $R$ is a field, this holds for every $a \ne 0$.
6. (Subrings) A subring of a field containing $1$ is an integral domain but need not be a field. The subring $\mathbb{Z}$ of the field $\mathbb{R}$ is an example.

The zero ring is not a ring with unity, so units are not defined for it, and it is not a field.
:::

## 직관

실수에서는 $0$이 아닌 수로 언제든 나눌 수 있습니다. 나눗셈은 역수를 곱하는 일이므로, "나눌 수 있다"는 것은 곱해서 $1$이 되는 짝이 있다는 것입니다. 가역원은 이런 짝을 가진 원소이고, 체는 $0$을 뺀 모든 원소가 짝을 가진 단위원을 갖는 가환환, 곧 덧셈·뺄셈·곱셈에 더해 $0$이 아닌 수로의 나눗셈까지 자유로운 환입니다.

비유하자면 가역원은 "되돌리기 단추"가 있는 조작입니다. 어떤 수를 곱하는 조작에 되돌리기 단추가 있으면, 곱한 뒤 그 단추(역원을 곱하기)를 누르면 처음으로 돌아옵니다. 조작이 곱셈, 되돌리기가 역원을 곱하는 것, 처음으로 돌아온다는 것이 $a^{-1}(ab) = b$입니다. $0$을 곱하는 조작은 모든 것을 $0$으로 보내므로 되돌릴 수 없습니다((1)). 체에서 일차방정식 $ax = b$를 풀 수 있다는 (5)가 이 되돌리기입니다.

정역과 체의 차이는 $\mathbb{Z}$가 보여 줍니다. 정수에서는 $2x = 2y$이면 $x = y$로 지울 수 있지만(정역), $2$로 나눈 값이 정수가 아닐 수 있어 $2x = 1$은 정수 해가 없습니다(체가 아님).

:::remark[(1)과 (2)의 증명]
(1) [[ring-basic-properties|환의 기본 성질]]의 (1)에 의해 모든 $b$에서 $0b = 0$이고, 같은 항목의 (7)에 의해 단위원을 갖는 환에서는 $0 \ne 1$이므로 $0b = 1$인 $b$는 없다. $1$과 $1$의 곱은 $1$이므로 $1$은 가역원이고 $1^{-1} = 1$이다.

$a, b \in R^{\times}$라 하자. 곱셈의 결합법칙을 한 번에 하나씩 쓰면
$$(ab)(b^{-1}a^{-1}) = a(b(b^{-1}a^{-1})) = a((bb^{-1})a^{-1}) = a(1a^{-1}) = aa^{-1} = 1$$
이고, 같은 방법으로 $(b^{-1}a^{-1})(ab) = b^{-1}(a^{-1}(ab)) = b^{-1}((a^{-1}a)b) = b^{-1}(1b) = b^{-1}b = 1$이다. 따라서 $ab \in R^{\times}$이고 $(ab)^{-1} = b^{-1}a^{-1}$이다. [[binary-operation|이항연산]]의 (3)에 의해 곱셈을 $R^{\times}$로 제한한 연산은 $R^{\times}$ 위의 이항연산이고, 같은 항목의 (3)의 (i)에 의해 결합적이며, $1 \in R^{\times}$이므로 (3)의 (ii)에 의해 $1$이 그 항등원이다. $a \in R^{\times}$이면 $a^{-1}a = 1$, $aa^{-1} = 1$이므로 $a^{-1}$은 가역원이고(그 역원은 $a$), (3)의 (iii)에 의해 제한한 연산에서도 $a$의 역원이다. 따라서 [[group|군]]의 세 조건이 성립한다. $R$의 곱셈이 가환이면 (3)의 (i)에 의해 제한한 연산도 가환이므로 아벨군이다.

(2)의 (i) [[ring-examples|환의 예]]의 (1)에 의해 $\mathbb{Z}$의 단위원은 $1$이다. $1 \cdot 1 = 1$, $(-1)(-1) = 1$이므로 $1$, $-1$은 가역원이다. 거꾸로 $a$가 가역원이면 $ab = 1$인 정수 $b$가 있으므로 $a \mid 1$이다([[divisibility|나누어떨어짐]]). $a = 0$이면 $ab = 0 \ne 1$이므로 $a \ne 0$이다. $a > 0$이면 $a$는 자연수 $1$의 양의 약수이므로 [[prime-number|소수]]의 진술에 의해 $1 \le a \le 1$이고, [[well-ordering-principle|정렬 원리]]의 진술의 (L2)에 의해 $a = 1$이다. $a < 0$이면 (Z7)에 의해 $-a > 0$이고 $1 = (-a)(-b)$이므로 같은 이유로 $-a = 1$, 곧 $a = -1$이다. (Z5)에 의해 경우는 이것뿐이다.

(2)의 (ii) [[ring-examples|환의 예]]의 (2)에 의해 $\mathbb{R}$의 단위원은 실수 $1$이다. (1)에 의해 $0 \notin \mathbb{R}^{\times}$이다. $a \ne 0$이면 [[real-number-arithmetic|실수의 계산 법칙]]의 (K8)의 (iii)과 (K1)에 의해 $aa^{-1} = 1 = a^{-1}a$이므로 $a$는 가역원이고 그 역원은 역수 $a^{-1}$이다. 따라서 $\mathbb{R}^{\times} = \mathbb{R} - \{0\}$이다. 군 $\mathbb{R}^{\times}$와 [[number-groups|수로 이루어진 군]]의 (3)의 군은 같은 집합에 실수의 곱셈을 제한한 같은 연산을 준 것이므로 같은 군이다.

(2)의 (iii) [[ring-examples|환의 예]]의 (3)에 의해 $n \ge 2$이면 $\mathbb{Z}_n$의 단위원은 $[1]$이다. [[group-of-units-modulo-n|법 n의 단원군]]의 (3)에 의해 $PQ = [1]$, $QP = [1]$인 $Q \in \mathbb{Z}_n$이 있는 것은 정확히 $P \in U(n)$일 때이므로 $\mathbb{Z}_n^{\times} = U(n)$이다. 같은 항목의 (2)에 의해 $U(n)$의 군의 연산도 $\mathbb{Z}_n$의 곱셈을 제한한 것이므로 두 군은 같다.

(2)의 (iv) [[ring-examples|환의 예]]의 (5)에 의해 $M_n(\mathbb{R})$의 단위원은 $I_n$이다. $A \in M_n(\mathbb{R})^{\times}$이면 $AB = I_n$, $BA = I_n$인 $n \times n$ 행렬 $B$가 있으므로, [[invertible-matrix|가역행렬과 역행렬]]의 정의에 의해 $B$가 왼쪽 역이자 오른쪽 역이고 $A$는 가역이다. 거꾸로 $A$가 가역인 $n \times n$ 행렬이면 같은 항목의 (1)에 의해 $A^{-1}$은 $A^{-1}A = I_n$, $AA^{-1} = I_n$인 $n \times n$ 행렬이므로 $A$는 가역원이고 그 역원은 $A^{-1}$이다. 따라서 $M_n(\mathbb{R})^{\times} = GL_n(\mathbb{R})$이고, [[general-linear-group|일반선형군]]의 (2)에 의해 그 군의 연산도 행렬의 곱을 제한한 것이므로 두 군은 같다.
:::

:::remark[(3)–(6)의 증명]
(3) $R$이 가환환이고 $a$가 가역원이며 $ab = 0$이라 하자. 곱셈의 결합법칙과 [[ring-basic-properties|환의 기본 성질]]의 (1)에 의해 $b = 1b = (a^{-1}a)b = a^{-1}(ab) = a^{-1}0 = 0$이다. 따라서 $ab = 0$인 $b \ne 0$은 없고 $a$는 영인자가 아니다. $R$이 체이면 단위원을 갖는 가환환이고, $0$이 아닌 원소는 모두 가역원이므로 영인자가 아니다. [[integral-domain|정역]]의 정의에 의해 $R$은 정역이다.

(4) [[ring-examples|환의 예]]의 (2)에 의해 $\mathbb{R}$은 단위원을 갖는 가환환이고, (2)의 (ii)에 의해 $0$이 아닌 실수는 모두 가역원이므로 체이다. $\mathbb{Z}$는 [[integral-domain|정역]]의 (2)에 의해 정역이다. $2 \ne 0$이지만 $2 \ne 1$이고 $2 \ne -1$이므로 (2)의 (i)에 의해 $2$는 가역원이 아니다. 따라서 $\mathbb{Z}$는 체가 아니다.

(5) $x = a^{-1}b$이면 $ax = a(a^{-1}b) = (aa^{-1})b = 1b = b$이다. 거꾸로 $ax = b$이면 $x = 1x = (a^{-1}a)x = a^{-1}(ax) = a^{-1}b$이다. $R$이 체이고 $a \ne 0$이면 체의 정의에 의해 $a$는 가역원이다.

(6) $S$가 체 $R$의 부분환이고 $1 \in S$이면, (3)에 의해 $R$은 정역이므로 [[integral-domain|정역]]의 (4)에 의해 $S$는 정역이다. [[subring|부분환]]의 (4)에 의해 $\mathbb{Z}$는 $\mathbb{R}$의 부분환이고 $1 \in \mathbb{Z}$이며, (4)에 의해 $\mathbb{R}$은 체이지만 $\mathbb{Z}$는 체가 아니다.
:::

## 예시와 반례

:::example[법 9의 정수의 가역원]
$\mathbb{Z}_9$는 단위원 $[1]$을 갖는 가환환입니다([[ring-examples|환의 예]]의 (3)). $[1][1] = [1]$, $[2][5] = [10] = [1]$, $[4][7] = [28] = [1]$, $[8][8] = [64] = [1]$($10 - 1 = 9$, $28 - 1 = 27 = 9 \cdot 3$, $64 - 1 = 63 = 9 \cdot 7$)이고 곱셈이 가환이므로 $[1], [2], [4], [5], [7], [8]$은 가역원입니다. 한편 $[3][3] = [9] = [0]$, $[6][3] = [18] = [0]$이고 $[3] \ne [0]$, $[6] \ne [0]$이므로([[integers-modulo-n|법 n의 정수]]의 (1)) $[3]$과 $[6]$은 영인자이고, (3)에 의해 가역원이 아닙니다. $[0]$은 (1)에 의해 가역원이 아닙니다. [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $\mathbb{Z}_9$의 원소는 이 아홉 개뿐이므로 $\mathbb{Z}_9^{\times} = \{[1], [2], [4], [5], [7], [8]\}$이고, (2)의 (iii)에 의해 이것이 $U(9)$입니다.
:::

:::counterexample[제곱이 영행렬인 행렬은 가역원이 아니다]
$M_2(\mathbb{R})$에서 영행렬이 아닌 행렬이 모두 가역원인 것은 아닙니다. [[integral-domain|정역]]의 (6)의 행렬 $N$은 영행렬이 아니고 $NN = O$입니다. $N$이 가역원이라면 $N = I_2 N = (N^{-1}N)N = N^{-1}(NN) = N^{-1}O = O$가 되어([[ring-basic-properties|환의 기본 성질]]의 (1)) 어긋납니다. (2)의 (iv)에 의해 $N \notin GL_2(\mathbb{R})$입니다.
:::

## 확인 질문

:::check[$\mathbb{Z}_5$에서 $[3]x = [4]$의 해를 구하라.]
$\mathbb{Z}_5$는 단위원 $[1]$을 갖는 가환환이고([[ring-examples|환의 예]]의 (3)), $[3][2] = [6] = [1]$이므로 $[3]$은 가역원이며 $[3]^{-1} = [2]$입니다. (5)에 의해 해는 하나뿐이고 $x = [2][4] = [8] = [3]$입니다. 확인하면 $[3][3] = [9] = [4]$입니다($9 - 4 = 5$).
:::

:::check[원소가 둘인 환 $\mathbb{Z}_2$는 체인가?]
체입니다. [[ring-examples|환의 예]]의 (3)에 의해 $\mathbb{Z}_2$는 단위원 $[1]$을 갖는 가환환이고, $0$이 아닌 원소는 $[1]$ 하나뿐이며 $[1][1] = [1]$이므로 가역원입니다. $[0] \ne [1]$이므로 단위원을 갖는다는 조건도 만족합니다.
:::
