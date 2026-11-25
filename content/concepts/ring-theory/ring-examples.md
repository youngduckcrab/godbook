---
title: 환의 예
title_en: Examples of Rings
aliases: [정수환, 실수의 환, 법 n의 정수의 환, 행렬환, ring of integers, ring of real numbers, matrix ring]
kind: theorem
field: ring-theory
msc: ["16", "13"]
level: undergrad
summary: 정수 전체와 실수 전체는 보통의 덧셈과 곱셈으로 단위원을 갖는 가환환이고, ℤ_n은 가환환이며 n ≥ 2이면 단위원 [1]을 갖는다. nℤ는 가환환이고 단위원을 갖는 것은 n = ±1일 때뿐이다. n × n 실행렬 전체 M_n(ℝ)은 단위원 I_n을 갖는 환이고 n ≥ 2이면 가환환이 아니다.
requires: [ring, ring-basic-properties, binary-operation, group, number-groups, subgroup, subgroup-examples, integers-modulo-n, equivalence-classes-equal-iff-related, congruence-modulo-n, real-number-arithmetic, well-ordering-principle, prime-number, even-and-odd, integer-cancellation, vector-space, matrix, matrix-product, matrix-product-properties, general-linear-group]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 16.1절 Example 16.2, 16.3, 16.4, 16.6 p.191, Example 16.9 p.193, 16.7절 연습문제 1 p.204, 28 p.206, 37 p.207
    checked: original
    note: "(1)은 출처 Example 16.2(p.191)와 같은 대상이다. 출처는 ℤ 가 환이라는 것을 'As we have mentioned previously' 로 말하고 정역이지만 체가 아니라고 적는다. 이 항목은 가환환이고 단위원을 갖는다는 것까지만 진술한다. (2)는 출처 Example 16.3(p.191)이 ℚ, ℝ, ℂ 를 증명 없이 환이자 체라 하는 것 가운데 ℝ 이 환이라는 부분이다. (3)은 출처 Example 16.4(p.191)가 ℤ_n 을 가환환이라 하는 것과 같다. (4)의 nℤ 는 출처 Example 16.9(p.193)에서 ℤ 의 부분환으로 나오고, Example 16.26(p.196)은 'na ∈ nℤ 이고 b ∈ ℤ 이면 nab ∈ nℤ' 로 곱에 닫혀 있음을 보인다. 출처 연습문제 16.1(a)(p.204)가 7ℤ 가 환인지 묻는다(힌트 p.329: 환이지만 체가 아니다). 출처는 Example 16.9 에서 '원래 환이 단위원을 가져도 부분환에 단위원을 요구하지 않는다'고 적는다. 출처는 3장 연습문제 38(p.42)과 Corollary 4.11(p.48)에서 nℤ (n = 0, 1, 2, …)를 ℤ 의 덧셈 부분군으로 다룬다. (5)는 출처 Example 16.6(p.191)이 2 × 2 실행렬 전체를 가환이 아닌 환이라 하는 것을 n × n 으로 넓힌 것이다. 출처는 기호 Mₙ(ℝ) 를 기호표(p.336)에서 n × n 행렬 전체로 적고 본문에서는 M₂(ℝ) 를 쓴다(p.35, p.38, p.193). 예시: 둘째 문단의 [2][3] = [0] 은 출처 Example 3.11(p.34–35)이 ℤ₆ 에서 3·2 = 0 을 적는 것과 같은 계산이고, Example 3.1(p.29, 3 · 4 ≡ 0 (mod 12) 와 '0 이 아닌 두 수의 곱이 법 n 에서 0 일 수 있다')과 Example 16.4 도 같은 발상이다. 첫째 문단의 [5][5] = [1] 은 출처 연습문제 3.1(e)(p.40, 5x ≡ 1 (mod 6))의 답과 같은 계산이다. 반례의 두 행렬은 출처 Example 16.6(p.191)이 '일반적으로 AB ≠ BA 이고, A 와 B 가 모두 0 이 아니어도 AB = 0 일 수 있다'고 말하는 것과 같은 결론이고, AB ≠ BA 인 두 행렬은 출처 연습문제 3.8(p.41, GL₂(ℝ) 에서)도 찾게 한다. 첫째 확인 질문(ℤ₆ 에서 PP = P 인 원소)은 출처 연습문제 16.37(p.207, 멱등원)과 16.28(p.206, 모든 원소가 a² = a 인 불 환)과 같은 대상이다. 연습문제 16.37 의 힌트(p.330)는 0, 1 이 아닌 멱등원을 M₂(ℝ) 에서 찾으라고 한다. 출처 16.1–16.2절의 환의 예 가운데 ℚ 와 ℂ(Example 16.3), 구간 위의 연속함수의 환(Example 16.5), 사원수(Example 16.7), 가우스 정수(Example 16.12), ℤ₂ 성분 행렬의 체(Example 16.13), ℚ(√2)(Example 16.14)는 싣지 않았다(이 강의는 복소수를 쓰지 않고(복소수는 강의 '복소수'에서 다룬다) 연속함수와 유리수 전체의 계산을 빌리지 않는다). 17장의 다항식환도 싣지 않았다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 올린 뒤 표본 독립 검토 1회(수학 오류 0건)의 지적을 고쳤다. 경계 경우(영환, 소수의 1·p 분해)에서 거짓이 되는 문장과 근거 누락을 고침"
added: 2026-11-19
---

:::statement
아래에서 환, 단위원을 갖는 환, 가환환, 영환은 [[ring|환]]의 뜻이다.

1. (정수) 정수의 덧셈과 곱셈으로 $(\mathbb{Z}, +, \cdot)$는 단위원을 갖는 가환환이다. 이 환의 $0$은 정수 $0$, 단위원은 정수 $1$이고, $a$의 덧셈의 역원은 정수 $-a$이다.
2. (실수) [[real-number-arithmetic|실수의 계산 법칙]]의 덧셈과 곱셈으로 $(\mathbb{R}, +, \cdot)$는 단위원을 갖는 가환환이다. 이 환의 $0$, $1$은 실수 $0$, $1$이고, $a$의 덧셈의 역원은 (K8)의 $-a$이다.
3. (법 $n$의 정수) $n$이 자연수이면 [[integers-modulo-n|법 n의 정수]]의 덧셈과 곱셈으로 $(\mathbb{Z}_n, +, \cdot)$는 가환환이다. 이 환의 $0$은 $[0]$이고 $[a]$의 덧셈의 역원은 $[-a]$이며, $[1]$이 곱셈의 항등원이다. $n \ge 2$이면 $\mathbb{Z}_n$은 단위원 $[1]$을 갖는 환이다. $n = 1$이면 $\mathbb{Z}_1 = \{[0]\}$은 영환이고 $[1] = [0]$이므로 단위원을 갖는 환이 아니다.
4. (정수의 배수) $n$이 정수이고 $n\mathbb{Z} = \{nk : k \in \mathbb{Z}\}$([[subgroup-examples|부분군의 예와 교집합]]의 (1))라 하자. $n\mathbb{Z}$는 정수의 덧셈과 곱셈에 대해 닫혀 있고, 두 연산을 $n\mathbb{Z}$로 제한한 연산([[binary-operation|이항연산]]의 (3))으로 $(n\mathbb{Z}, +, \cdot)$는 가환환이다. 또
   - $n = 0$이면 $0\mathbb{Z} = \{0\}$이고 이 환은 영환이다.
   - $n = 1$ 또는 $n = -1$이면 $n\mathbb{Z} = \mathbb{Z}$이고 이 환은 (1)의 환 $(\mathbb{Z}, +, \cdot)$이다.
   - $n$이 $-1$, $0$, $1$ 가운데 어느 것도 아니면 이 환에는 곱셈의 항등원이 없다.
   
   따라서 $(n\mathbb{Z}, +, \cdot)$가 단위원을 갖는 환인 것은 정확히 $n = 1$ 또는 $n = -1$일 때이다.
5. (행렬) $n$이 자연수이면 $n \times n$ [[matrix|행렬]] 전체의 집합 $M_{n \times n}$은 행렬의 덧셈과 [[matrix-product|행렬의 곱]]으로 단위원 $I_n$을 갖는 환이다. 이 환을 $M_n(\mathbb{R})$로 쓴다. 이 환의 $0$은 영행렬이고, $A$의 덧셈의 역원은 [[matrix|행렬]]의 (1)의 $-A$이다. $n \ge 2$이면 $M_n(\mathbb{R})$은 가환환이 아니고, $n = 1$이면 $M_1(\mathbb{R})$은 가환환이다.
:::

:::english
Below, rings, rings with unity, commutative rings and the zero ring are as in the entry on rings.

1. (Integers) With the addition and multiplication of integers, $(\mathbb{Z}, +, \cdot)$ is a commutative ring with unity. Its $0$ is the integer $0$, its unity is the integer $1$, and the additive inverse of $a$ is the integer $-a$.
2. (Real numbers) With the addition and multiplication of the entry on arithmetic of real numbers, $(\mathbb{R}, +, \cdot)$ is a commutative ring with unity. Its $0$ and $1$ are the real numbers $0$ and $1$, and the additive inverse of $a$ is the $-a$ of (K8).
3. (Integers modulo $n$) If $n$ is a natural number, then with the addition and multiplication of the entry on integers modulo $n$, $(\mathbb{Z}_n, +, \cdot)$ is a commutative ring. Its $0$ is $[0]$, the additive inverse of $[a]$ is $[-a]$, and $[1]$ is a multiplicative identity. If $n \ge 2$, then $\mathbb{Z}_n$ is a ring with unity $[1]$. If $n = 1$, then $\mathbb{Z}_1 = \{[0]\}$ is the zero ring, and since $[1] = [0]$ it is not a ring with unity.
4. (Multiples of an integer) Let $n$ be an integer and $n\mathbb{Z} = \{nk : k \in \mathbb{Z}\}$ (as in (1) of the entry on examples of subgroups). The set $n\mathbb{Z}$ is closed under addition and multiplication of integers, and with the two operations restricted to $n\mathbb{Z}$ ((3) of the entry on binary operations), $(n\mathbb{Z}, +, \cdot)$ is a commutative ring. Moreover,
   - if $n = 0$, then $0\mathbb{Z} = \{0\}$ and this ring is the zero ring;
   - if $n = 1$ or $n = -1$, then $n\mathbb{Z} = \mathbb{Z}$ and this ring is the ring $(\mathbb{Z}, +, \cdot)$ of (1);
   - if $n$ is none of $-1$, $0$, $1$, then this ring has no multiplicative identity.
   
   Hence $(n\mathbb{Z}, +, \cdot)$ is a ring with unity exactly when $n = 1$ or $n = -1$.
5. (Matrices) If $n$ is a natural number, the set $M_{n \times n}$ of all $n \times n$ matrices is a ring with unity $I_n$ under matrix addition and the matrix product. This ring is written $M_n(\mathbb{R})$. Its $0$ is the zero matrix, and the additive inverse of $A$ is the $-A$ of (1) in the entry on matrices. If $n \ge 2$, then $M_n(\mathbb{R})$ is not a commutative ring; if $n = 1$, then $M_1(\mathbb{R})$ is a commutative ring.
:::

## 직관

환의 정의는 정수의 덧셈과 곱셈에서 몇 가지 규칙만 떼어 낸 것이므로, 정수와 실수가 환이라는 것은 이미 받아들였거나 증명한 계산 법칙을 하나씩 짚는 일입니다. 이 항목의 예들은 정의가 허락한 두 가지 "빠짐"을 하나씩 보여 줍니다. 짝수 전체 $2\mathbb{Z}$는 곱셈의 항등원이 없는 환이고, $M_n(\mathbb{R})$($n \ge 2$)은 곱의 순서를 바꾸면 값이 달라질 수 있는 환입니다.

비유하자면 환의 정의는 "덧셈과 곱셈을 함께 쓰는 놀이"의 규칙집이고, 이 항목은 그 규칙집대로 놀 수 있는 판 몇 개를 모은 것입니다. 판마다 규칙집의 각 조항(덧셈으로 아벨군, 곱셈의 결합법칙, 분배법칙)이 그 판의 어떤 계산 법칙으로 지켜지는지 확인하는 것이 증명입니다. 규칙집에 없는 조항, 곧 곱셈의 교환법칙과 곱셈의 항등원은 판마다 있을 수도 없을 수도 있습니다.

$\mathbb{Z}_n$에서는 $n = 1$이 경계입니다. $\mathbb{Z}_1$은 원소가 하나뿐이라 $[1]$이 곱셈의 항등원이면서 $[0]$과 같고, 그래서 [[ring|환]]의 약속에 따라 단위원을 갖는 환이 아닙니다.

## 증명

:::idea
각 집합과 두 연산에 대해 [[ring|환]]의 세 조건과 가환성, 곱셈의 항등원을 이미 있는 항목의 번호로 짚는다. $n\mathbb{Z}$에 곱셈의 항등원이 있으면 그것이 정수 $1$이어야 한다는 것을 소거법칙으로 보이고, $1 \in n\mathbb{Z}$이면 $n$이 $1$의 약수라는 것에서 $n = \pm 1$을 얻는다.
:::

:::hint
(4): $e$가 $n\mathbb{Z}$의 곱셈의 항등원이면 $n \in n\mathbb{Z}$이므로 $en = n$이다. $n \ne 0$이면 $e$는 무엇이어야 하는가?
:::

:::hint
(5): 덧셈군의 조건은 [[matrix|행렬]]의 (1)(벡터공간)에서, 곱셈의 결합법칙과 단위행렬은 [[general-linear-group|일반선형군]]의 (1)에서, 분배법칙은 [[matrix-product-properties|행렬 곱의 성질]]의 (2)에서 온다.
:::

:::proof
**(1)** [[number-groups|수로 이루어진 군]]의 (1)에 의해 $(\mathbb{Z}, +)$는 아벨군이고 항등원은 $0$, $a$의 역원은 $-a$이다. [[binary-operation|이항연산]]의 (4)에 의해 정수의 곱셈은 $\mathbb{Z}$ 위의 결합적이고 가환인 이항연산이고 $1$이 곱셈의 항등원이다. 분배법칙 $a(b + c) = ab + ac$, $(a + b)c = ac + bc$는 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 정수의 계산 법칙이다. 따라서 $(\mathbb{Z}, +, \cdot)$는 가환환이다. 같은 진술의 (L3)에 의해 $0 \ne 1$이므로 곱셈의 항등원 $1$이 $0$과 다르고, 단위원을 갖는 환이다.

**(2)** [[number-groups|수로 이루어진 군]]의 (2)에 의해 $(\mathbb{R}, +)$는 아벨군이고 항등원은 $0$, $a$의 역원은 (K8)의 $-a$이다. 실수의 곱셈은 $\mathbb{R} \times \mathbb{R}$에서 $\mathbb{R}$로의 함수이므로 $\mathbb{R}$ 위의 이항연산이고([[real-number-arithmetic|실수의 계산 법칙]]의 진술), (K2)에 의해 결합적, (K1)에 의해 가환이다. 분배법칙은 (K3)의 $a(b + c) = ab + ac$와 (K12)의 (i)의 $(a + b)c = ac + bc$이다. (K4)와 (K1)에 의해 모든 실수 $a$에서 $a \cdot 1 = a$이고 $1 \cdot a = a$이므로 $1$은 곱셈의 항등원이고, (K4)에 의해 $0 \ne 1$이다. 따라서 단위원을 갖는 가환환이다.

**(3)** [[number-groups|수로 이루어진 군]]의 (4)에 의해 $(\mathbb{Z}_n, +)$는 아벨군이고 항등원은 $[0]$, $[a]$의 역원은 $[-a]$이다. [[integers-modulo-n|법 n의 정수]]의 (2), (3)에 의해 $\mathbb{Z}_n$의 곱셈은 결합적이고 가환인 이항연산이고, 모든 $P, Q, S \in \mathbb{Z}_n$에서 $P(Q + S) = PQ + PS$, $(Q + S)P = QP + SP$이다. 따라서 $(\mathbb{Z}_n, +, \cdot)$는 가환환이다. 같은 항목의 (4)에 의해 $[1]$은 곱셈의 항등원이다.

$n \ge 2$이면 양변에서 $1$을 빼 $1 \le n - 1$이므로(정렬 원리의 진술의 (Z7)) $0$과 $1$은 $0 \le 0 < 1 \le n - 1$인 정수이고, 같은 항목의 (1)에 의해 $[0] \ne [1]$이고, $\mathbb{Z}_n$은 단위원 $[1]$을 갖는 환이다. $n = 1$이면 같은 항목의 (5)에 의해 $\mathbb{Z}_1 = \{[0]\}$이고 $[0] = [1]$이다. [[ring|환]]의 (1)에 의해 원소가 하나인 집합 위의 환은 영환이고, 곱셈의 항등원 $[1]$이 $0$인 $[0]$과 같으므로 단위원을 갖는 환이 아니다.

**(4)** *닫힘과 환.* [[subgroup-examples|부분군의 예와 교집합]]의 (1)에 의해 $n\mathbb{Z}$는 $(\mathbb{Z}, +)$의 [[subgroup|부분군]]이다. 따라서 $n\mathbb{Z}$는 정수의 덧셈에 대해 닫혀 있고, 덧셈을 $n\mathbb{Z}$로 제한한 연산으로 $(n\mathbb{Z}, +)$는 군이며, [[subgroup|부분군]]의 (7)에 의해 아벨군이다. $nk, nl \in n\mathbb{Z}$($k, l \in \mathbb{Z}$)이면 정수의 계산 법칙에 의해 $(nk)(nl) = n(k(nl))$이고 $k(nl)$은 정수이므로([[even-and-odd]]에서 받아들인 사실) $(nk)(nl) \in n\mathbb{Z}$이다. 따라서 $n\mathbb{Z}$는 곱셈에 대해 닫혀 있고, [[binary-operation|이항연산]]의 (3)에 의해 곱셈을 $n\mathbb{Z}$로 제한한 연산은 $n\mathbb{Z}$ 위의 이항연산이며, 같은 항목의 (3)의 (i)과 (4)에 의해 결합적이고 가환이다. $a, b, c \in n\mathbb{Z}$이면 제한한 두 연산의 값은 정수의 합과 곱이므로, 정수의 분배법칙에 의해 $a(b + c) = ab + ac$이고 $(a + b)c = ac + bc$이다. 따라서 $(n\mathbb{Z}, +, \cdot)$는 가환환이다.

*$n = 0$.* 부분군의 예와 교집합의 (1)에 의해 $0\mathbb{Z} = \{0\}$이고, [[ring|환]]의 (1)에 의해 원소가 하나인 집합 위의 환은 영환이다.

*$n = \pm 1$.* 부분군의 예와 교집합의 (1)에 의해 $1\mathbb{Z} = \mathbb{Z}$이고 $(-1)\mathbb{Z} = 1\mathbb{Z} = \mathbb{Z}$이다. 이때 두 연산을 $\mathbb{Z}$로 제한한 연산은 모든 $(a, b) \in \mathbb{Z} \times \mathbb{Z}$에서 정수의 덧셈, 곱셈과 값이 같으므로 [[binary-operation|이항연산]]의 진술의 연산의 같음에 의해 정수의 덧셈, 곱셈 자신이다. 따라서 이 환은 (1)의 환이고 단위원 $1$을 갖는다.

*그 밖의 $n$.* $n$이 $-1$, $0$, $1$ 가운데 어느 것도 아니라 하고, $e \in n\mathbb{Z}$가 제한한 곱셈의 항등원이라 하자. $n = n \cdot 1 \in n\mathbb{Z}$이므로 $en = n$이고, 정수의 곱셈의 교환법칙에 의해 $ne = n \cdot 1$이다. $n \ne 0$이므로 [[integer-cancellation|정수의 소거법칙]]의 (2)에 의해 $e = 1$이고, 따라서 $1 \in n\mathbb{Z}$, 곧 부분군의 예와 교집합의 (1)에 의해 $n \mid 1$이다. 정렬 원리의 진술에서 받아들인 삼분법 (Z5)에 의해 $n > 0$이거나 $n < 0$이다($n \ne 0$).

- $n > 0$이면 $n$은 자연수 $1$의 양의 약수이므로 [[prime-number|소수]]의 진술에 의해 $1 \le n \le 1$이고, (L2)에 의해 $n = 1$이다. 이것은 가정에 어긋난다.
- $n < 0$이면 양변에 $-n$을 더해 $0 < -n$이다((Z7)). $1 = nk$인 정수 $k$를 잡으면 $1 = (-n)(-k)$이므로 $-n$은 $1$의 양의 약수이고, 앞 경우와 같이 $-n = 1$, 곧 $n = -1$이다. 이것도 가정에 어긋난다.

따라서 곱셈의 항등원은 없다.

*단위원.* $n = \pm 1$이면 (1)에 의해 단위원을 갖는 환이다. $n = 0$이면 영환이므로 [[ring|환]]의 (1)에 의해 단위원을 갖는 환이 아니고, 그 밖의 $n$이면 곱셈의 항등원이 없으므로 단위원을 갖는 환이 아니다.

**(5)** *덧셈.* [[matrix|행렬]]의 (1)에 의해 $M_{n \times n}$은 성분마다의 덧셈으로 [[vector-space|벡터공간]]이고, 그 영벡터는 영행렬 $O$이다. (V2)에 의해 덧셈은 결합적이고 (V1)에 의해 가환이다. $O$가 영벡터이므로 모든 $A$에서 $A + O = A$이고, (V1)에 의해 $O + A = A$이다. $A$의 $(j, k)$ 성분이 $a_{j,k}$이면 $-A$의 $(j, k)$ 성분은 $-a_{j,k}$이므로(행렬의 (1)) $A + (-A)$의 $(j, k)$ 성분은 $a_{j,k} + (-a_{j,k}) = 0$이고((K8)의 (ii)), 행렬의 (2)에 의해 $A + (-A) = O$이며, (V1)에 의해 $(-A) + A = O$이다. 따라서 $(M_{n \times n}, +)$는 항등원이 $O$인 아벨군이고, $A$의 역원은 $-A$이다.

*곱셈.* [[general-linear-group|일반선형군]]의 (1)에 의해 행렬의 곱은 $M_{n \times n}$ 위의 결합적인 이항연산이고 $I_n$이 그 항등원이다. [[matrix-product-properties|행렬 곱의 성질]]의 (2)를 $m = n = r$로 쓰면, 모든 $A, B, C \in M_{n \times n}$에서 $A(B + C) = AB + AC$이고 $(A + B)C = AC + BC$이다. 따라서 $M_n(\mathbb{R})$은 환이다. [[matrix|행렬]]의 (6)에 의해 $I_n$의 $(1, 1)$ 성분은 $1$이고 $O$의 $(1, 1)$ 성분은 $0$이며 (K4)에 의해 $0 \ne 1$이므로, 행렬의 (2)에 의해 $I_n \ne O$이다. 따라서 $M_n(\mathbb{R})$은 단위원 $I_n$을 갖는 환이다.

*$n \ge 2$.* [[general-linear-group|일반선형군]]의 (3)에 의해 $GL_n(\mathbb{R})$은 아벨군이 아니므로 $AB \ne BA$인 $A, B \in GL_n(\mathbb{R})$이 있다. 같은 항목의 (2)에 의해 이 군의 연산은 행렬의 곱을 제한한 것이므로 $AB$, $BA$는 행렬의 곱이고, $A, B \in M_{n \times n}$이다. 따라서 $M_n(\mathbb{R})$은 가환환이 아니다.

*$n = 1$.* $A, B \in M_{1 \times 1}$이면 [[general-linear-group|일반선형군]]의 (4)와 (K1)에 의해 $(AB)_{1,1} = a_{1,1} b_{1,1} = b_{1,1} a_{1,1} = (BA)_{1,1}$이다. $1 \times 1$ 행렬의 성분은 $(1, 1)$ 성분뿐이므로 [[matrix|행렬]]의 (2)에 의해 $AB = BA$이고, $M_1(\mathbb{R})$은 가환환이다.
:::

## 예시와 반례

:::example[법 6의 정수에서의 계산]
(3)에 의해 $\mathbb{Z}_6$은 단위원 $[1]$을 갖는 가환환입니다. $-[1] = [-1] = [5]$이고, [[ring-basic-properties|환의 기본 성질]]의 (6)에 의해 $(-[1])(-[1]) = [1]$이어야 합니다. 직접 계산하면 $[5][5] = [25]$이고 $25 - 1 = 24 = 6 \cdot 4$이므로 $25 \equiv 1 \pmod 6$, 곧 [[equivalence-classes-equal-iff-related|동치류가 같을 조건]]에 의해 $[25] = [1]$입니다.

이 환에서는 $[0]$이 아닌 두 원소의 곱이 $[0]$일 수 있습니다. $[2][3] = [6] = [0]$이고($6 - 0 = 6 \cdot 1$), $0 \le 0 < 2 \le 5$이고 $0 \le 0 < 3 \le 5$이므로 [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $[2]$와 $[3]$은 $[0]$이 아닙니다. 정수에서는 $ab = 0$이면 $a = 0$이거나 $b = 0$이지만([[integer-cancellation|정수의 소거법칙]]의 (1)), $\mathbb{Z}_6$이 보이듯 이 성질은 환의 공리에서 따라 나오지 않습니다.
:::

:::counterexample[곱의 순서를 바꾸면 값이 달라지는 두 행렬]
(5)의 증명은 $n \ge 2$에서 교환되지 않는 두 행렬이 있다는 것을 [[general-linear-group|일반선형군]]의 (3)에서 가져왔습니다. $n = 2$에서 다른 두 행렬을 직접 계산해 봅니다.
$$A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \qquad B = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$$
로 둡니다. [[matrix-product|행렬의 곱]]의 (2)에 의해 $(AB)_{j,k} = a_{j,1} b_{1,k} + a_{j,2} b_{2,k}$입니다. $AB$의 성분은 $(1, 1)$: $1 \cdot 0 + 0 \cdot 0 = 0$, $(1, 2)$: $1 \cdot 1 + 0 \cdot 0 = 1$, $(2, 1)$: $0 \cdot 0 + 0 \cdot 0 = 0$, $(2, 2)$: $0 \cdot 1 + 0 \cdot 0 = 0$이므로 $AB = B$입니다. $BA$의 성분은 $(1, 1)$: $0 \cdot 1 + 1 \cdot 0 = 0$, $(1, 2)$: $0 \cdot 0 + 1 \cdot 0 = 0$, $(2, 1)$: $0 \cdot 1 + 0 \cdot 0 = 0$, $(2, 2)$: $0 \cdot 0 + 0 \cdot 0 = 0$이므로 $BA = O$입니다.

$B$의 $(1, 2)$ 성분이 $1 \ne 0$이므로 [[matrix|행렬]]의 (2)에 의해 $AB = B \ne O = BA$입니다. 또 $A$와 $B$는 영행렬이 아닌데 $BA$는 영행렬입니다. 위 예시의 $\mathbb{Z}_6$처럼, $M_2(\mathbb{R})$에서도 영이 아닌 두 원소의 곱이 영일 수 있습니다.
:::

## 확인 질문

:::check[$\mathbb{Z}_6$에서 $PP = P$인 원소 $P$를 모두 찾아라.]
$[0]$, $[1]$, $[3]$, $[4]$입니다. 여섯 원소의 제곱은 $[0][0] = [0]$, $[1][1] = [1]$, $[2][2] = [4]$, $[3][3] = [9] = [3]$($9 - 3 = 6$), $[4][4] = [16] = [4]$($16 - 4 = 12 = 6 \cdot 2$), $[5][5] = [25] = [1]$입니다. $[2] \ne [4]$이고 $[5] \ne [1]$이므로([[integers-modulo-n|법 n의 정수]]의 (1)) $[2]$와 $[5]$는 아닙니다.
:::

:::check[$M_1(\mathbb{R})$에서 영행렬이 아닌 두 행렬의 곱이 영행렬일 수 있는가?]
없습니다. $A$, $B$가 영행렬이 아닌 $1 \times 1$ 행렬이면 [[matrix|행렬]]의 (2)에 의해 $a_{1,1} \ne 0$, $b_{1,1} \ne 0$이고, [[general-linear-group|일반선형군]]의 (4)에 의해 $(AB)_{1,1} = a_{1,1} b_{1,1}$이며, (K12)의 (vi)에 의해 이것은 $0$이 아닙니다. 따라서 $AB$는 영행렬이 아닙니다. 위 반례와 달리 $n = 1$에서는 이런 일이 없습니다.
:::
