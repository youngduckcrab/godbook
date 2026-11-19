---
title: 부분군의 예와 교집합
title_en: Examples of Subgroups and Intersections
aliases: [nℤ, 정수의 배수, 중심, 군의 중심, 교집합, 합집합, 고정 부분군, center of a group, intersection of subgroups, union of subgroups, stabilizer]
kind: theorem
field: group-theory
msc: ["20A05"]
level: undergrad
summary: 정수 n의 배수 전체 nℤ, 짝수 전체, (ℝ, +) 안의 ℤ, (ℝ − {0}, ·) 안의 {1, −1}, 군의 중심, 대칭군에서 한 점을 고정하는 치환 전체, 스칼라 행렬 전체, U(n) 안의 {[1], [−1]}이 부분군임을 보이고, 두 부분군의 교집합은 부분군이며 합집합은 한쪽이 다른 쪽을 포함할 때만 부분군임을 증명한다.
requires: [set, subset, set-operations, proof-by-contradiction, function, injective-surjective-bijective, inverse-function, function-composition, binary-operation, group, group-basic-properties, subgroup, subgroup-criteria, number-groups, real-number-arithmetic, even-and-odd, divisibility, prime-number, well-ordering-principle, symmetric-group, vector-space, matrix, matrix-product-properties, invertible-matrix, general-linear-group, integers-modulo-n, group-of-units-modulo-n, equivalence-classes-equal-iff-related, congruence-modulo-n]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 3.3절 첫 문단(2ℤ) p.38, 3.5절 연습문제 38, 45, 46, 48 p.42–43
    checked: original
    note: "(1)은 출처 연습문제 3.38(p.42, n = 0, 1, 2, … 에 대해 nℤ 가 ℤ 의 부분군이고 ℤ 의 부분군은 이것뿐임을 보이라)의 앞부분이다. 이 항목은 n 을 모든 정수로 두고 nℤ = (−n)ℤ 와 나누어떨어짐과의 관계를 덧붙였으며, '이것뿐'이라는 뒷부분은 다루지 않는다. 출처 Example 4.1(p.46)은 3ℤ 를 부분군으로, Example 16.9(p.193)는 nℤ 를 ℤ 의 부분환으로 든다. (2)의 2ℤ 는 출처 3.3절 첫 문단(p.38)에서 덧셈에 대한 군으로 소개하는 짝수 전체와 같다. (3)의 ℤ ⊆ (ℝ, +) 는 출처 Example 16.9(p.193)가 ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ 를 부분환의 사슬로 드는 데 들어 있는 사실이고, 군에 대해 따로 보이는 곳은 찾지 못했다(검색어 'subgroup of R', 'Z ⊂'). 출처는 Example 3.24(p.38)에서 ℚ* 가 ℝ* 의 부분군임을 보이지만 이 사이트는 ℚ 를 쓰지 않는다. {1, −1} 을 ℝ* 의 부분군으로 드는 곳은 찾지 못했다(검색어 '{1, −1}', '{−1, 1}'. 후자는 p.150 에서 준동형의 공역으로만 나온다). 양의 실수 전체는 실수의 순서가 필요하므로 싣지 않았다. (4)의 교집합은 출처 연습문제 3.45(p.43), 합집합은 연습문제 3.46(p.43, 두 부분군의 합집합이 부분군인지 증명하거나 반박하라)이고, 출처는 3.46 의 힌트로 S₃ 를 보라고 적는다(p.321). 출처 Example 19.11(p.240)은 부분군 전체를 포함 관계로 순서를 준 격자로 보고, 두 부분군의 최대 하계가 H ∩ K 이며 H ∪ K 는 부분군이 아닐 수 있다고 적는다. '합집합이 부분군인 것은 정확히 한쪽이 다른 쪽을 포함할 때'는 출처에 없다(검색어 'union' 과 기호 '∪' 로 책 전체를 찾았다. 군의 합집합은 연습문제 3.46 과 Example 19.11 에, 환과 아이디얼의 합집합은 16장 연습문제 24, 25(p.206)에 나온다). (5)는 출처 연습문제 3.48(p.43)이고, 'Z(G) = G 인 것은 정확히 G 가 아벨군일 때'는 출처에 명제로 없다(검색어 'Z(G) = G', 'center of' 의 건들). (6)은 출처 Proposition 14.10(p.170)이 군이 집합에 작용할 때 한 점을 고정하는 원소 전체(stabilizer, p.169)가 부분군임을 보이는 것을 S_X 가 X 에 작용하는 경우로 쓴 것과 같은 발상이고, 증명도 같은 세 단계이다. 이 항목은 이 부분군에 이름을 붙이지 않는다. (7)의 스칼라 행렬 전체는 출처에서 찾지 못했다(검색어 'scalar matri', 'multiple of the identity', 'identity matrix'). 출처 10장 연습문제 13(p.131)은 GL₂(ℝ) 의 중심을 계산하게 하지만, 이 항목은 스칼라 행렬 전체가 부분군이라는 것만 보이고 그것이 중심인지는 다루지 않는다. (8)의 [−1] 은 출처 연습문제 3.26(p.42, n > 2 이면 k² = 1 이고 k ≠ 1 인 k ∈ U(n) 이 있다)에 답이 되는 원소와 같은 발상이다. 이 항목은 k ≠ 1 을 보이지 않고, n = 1, 2 에서 [−1] = [1] 임만 보인다. 예시 2ℤ ∩ 3ℤ = 6ℤ 는 출처 9장 연습문제 54(p.124, ⟨m⟩ ∩ ⟨n⟩ = ⟨l⟩ 인 것은 정확히 l = lcm(m, n) 일 때)의 m = 2, n = 3 인 경우와 같은 결론이고, 이 예는 거듭제곱과 최소공배수 없이 a = 3a − 2a 로 보인다. 예시 '대칭군에서 한 점을 고정하는 치환'은 출처 p.170 의 예가 치환군에서 점을 고정하는 부분군을 구체적으로 적는 것과 같은 발상이다. 반례 '합집합은 덧셈에 닫혀 있지 않을 수 있다'는 연습문제 3.46 에 답하는 예이고, 출처의 힌트와 달리 (ℤ, +) 를 쓴다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 경계 경우에서 거짓이 되는 문장과 출처 메모를 고침"
added: 2026-11-19
---

:::statement
아래에서 [[group|군]]의 표기를 쓰고, 부분군은 [[subgroup|부분군]]의 뜻이다. $(\mathbb{Z}, +)$, $(\mathbb{R}, +)$, $(\mathbb{R} - \{0\}, \cdot)$는 [[number-groups|수로 이루어진 군]]의 군이고, 덧셈으로 쓰는 군에는 그 항목의 덧셈 표기를 쓴다.

1. (정수의 배수) 정수 $n$에 대하여 $n\mathbb{Z} = \{nk : k \in \mathbb{Z}\}$는 $(\mathbb{Z}, +)$의 부분군이다. 정수 $a$에 대하여 $a \in n\mathbb{Z}$인 것은 정확히 $n \mid a$일 때이다([[divisibility|나누어떨어짐]]). 또 $0\mathbb{Z} = \{0\}$, $1\mathbb{Z} = \mathbb{Z}$이고, 모든 정수 $n$에 대하여 $n\mathbb{Z} = (-n)\mathbb{Z}$이다.
2. (짝수) $2\mathbb{Z}$는 [[even-and-odd|짝수]] 전체의 집합이다. 따라서 짝수 전체는 $(\mathbb{Z}, +)$의 부분군이다.
3. (실수의 군 안에서) $\mathbb{Z}$는 $(\mathbb{R}, +)$의 부분군이고, 실수의 덧셈을 $\mathbb{Z}$로 제한한 연산은 정수의 덧셈이다. 곧 이 부분군은 군 $(\mathbb{Z}, +)$이다. 또 $\{1, -1\}$은 $(\mathbb{R} - \{0\}, \cdot)$의 부분군이다.
4. (교집합과 합집합) $H$와 $K$가 군 $G$의 부분군이라 하자. $H \cap K$는 $G$의 부분군이다. $H \cup K$가 $G$의 부분군인 것은 정확히 $H \subseteq K$이거나 $K \subseteq H$일 때이다. 특히 $2\mathbb{Z} \cup 3\mathbb{Z}$는 $(\mathbb{Z}, +)$의 부분군이 아니다.
5. (중심) 군 $G$에 대하여
$$Z(G) = \{a \in G : \text{모든 } g \in G \text{에 대하여 } ag = ga\}$$
는 $G$의 부분군이다. 이것을 $G$의 **중심**(center)이라 한다. $Z(G) = G$인 것은 정확히 $G$가 아벨군일 때이다.
6. (한 점을 고정하는 치환) $X$가 집합이고 $x_0 \in X$이면 $\{f \in S_X : f(x_0) = x_0\}$은 [[symmetric-group|대칭군]] $S_X$의 부분군이다.
7. (스칼라 행렬) $n$이 자연수이면 $\{cI_n : c \in \mathbb{R},\ c \ne 0\}$은 [[general-linear-group|일반선형군]] $GL_n(\mathbb{R})$의 부분군이다. $c \ne 0$이면 이 군에서 $cI_n$의 역원은 $c^{-1}I_n$이다.
8. (단원군 안에서) $n$이 자연수이면 [[group-of-units-modulo-n|법 n의 단원군]]에서 $[-1] \in U(n)$이고, $\{[1], [-1]\}$은 $U(n)$의 부분군이다. $n = 1$이나 $n = 2$이면 $[-1] = [1]$이다.
:::

:::english
Below we use the notation of the entry on groups, and subgroups are meant in the sense of the entry on subgroups. $(\mathbb{Z}, +)$, $(\mathbb{R}, +)$ and $(\mathbb{R} - \{0\}, \cdot)$ are the groups of the entry on groups of numbers, and for groups written additively we use the additive notation of that entry.

1. (Multiples of an integer) For an integer $n$, $n\mathbb{Z} = \{nk : k \in \mathbb{Z}\}$ is a subgroup of $(\mathbb{Z}, +)$. For an integer $a$, $a \in n\mathbb{Z}$ exactly when $n \mid a$. Moreover $0\mathbb{Z} = \{0\}$, $1\mathbb{Z} = \mathbb{Z}$, and $n\mathbb{Z} = (-n)\mathbb{Z}$ for every integer $n$.
2. (Even integers) $2\mathbb{Z}$ is the set of all even integers. Hence the even integers form a subgroup of $(\mathbb{Z}, +)$.
3. (Inside the groups of real numbers) $\mathbb{Z}$ is a subgroup of $(\mathbb{R}, +)$, and the restriction of the addition of real numbers to $\mathbb{Z}$ is the addition of integers; that is, this subgroup is the group $(\mathbb{Z}, +)$. Also, $\{1, -1\}$ is a subgroup of $(\mathbb{R} - \{0\}, \cdot)$.
4. (Intersections and unions) Let $H$ and $K$ be subgroups of a group $G$. Then $H \cap K$ is a subgroup of $G$. $H \cup K$ is a subgroup of $G$ exactly when $H \subseteq K$ or $K \subseteq H$. In particular, $2\mathbb{Z} \cup 3\mathbb{Z}$ is not a subgroup of $(\mathbb{Z}, +)$.
5. (The center) For a group $G$,
$$Z(G) = \{a \in G : ag = ga \text{ for all } g \in G\}$$
is a subgroup of $G$, called the **center** of $G$. $Z(G) = G$ exactly when $G$ is abelian.
6. (Permutations fixing a point) If $X$ is a set and $x_0 \in X$, then $\{f \in S_X : f(x_0) = x_0\}$ is a subgroup of the symmetric group $S_X$.
7. (Scalar matrices) If $n$ is a natural number, then $\{cI_n : c \in \mathbb{R},\ c \ne 0\}$ is a subgroup of the general linear group $GL_n(\mathbb{R})$. For $c \ne 0$, the inverse of $cI_n$ in this group is $c^{-1}I_n$.
8. (Inside the group of units) If $n$ is a natural number, then in the group of units modulo $n$ we have $[-1] \in U(n)$, and $\{[1], [-1]\}$ is a subgroup of $U(n)$. If $n = 1$ or $n = 2$, then $[-1] = [1]$.
:::

## 직관

부분군을 찾는 한 가지 방법은 "어떤 성질을 가진 원소 전체"를 모으는 것입니다. $n$의 배수라는 성질, 모든 원소와 교환된다는 성질, 점 $x_0$을 움직이지 않는다는 성질이 그렇습니다. 그 성질이 항등원에 있고, 곱과 역원으로 이어지면 [[subgroup-criteria|부분군 판정법]]의 (1)에 의해 부분군이 됩니다. 이 항목의 증명은 거의 모두 그 세 가지를 확인하는 것입니다.

두 성질을 함께 요구하면 교집합이 되고, 이것도 부분군입니다. 두 조건이 각각 곱과 역원으로 이어지면 둘을 함께 만족하는 것도 이어지기 때문입니다. 그러나 "둘 가운데 하나"를 요구하는 합집합은 부분군이 아닐 수 있습니다. $2$는 짝수이고 $3$은 $3$의 배수이지만 그 합 $5$는 어느 쪽도 아닙니다. (4)는 합집합이 부분군이 되는 경우가 한쪽이 다른 쪽을 포함해서 합집합이 큰 쪽과 같아지는 경우뿐이라는 것입니다.

## 증명

:::idea
(1), (3)의 $\{1, -1\}$, (5)–(8)은 [[subgroup-criteria|부분군 판정법]]의 (1)이나 (3)으로 세 조건을 확인한다. (3)의 $\mathbb{Z}$는 부분군의 정의로 직접 보인다. (4)의 합집합은 $H$에만 있는 $h$와 $K$에만 있는 $k$를 잡아 $hk$가 어디에 있는지 따진다.
:::

:::hint
(4): $hk \in H$이면 $k = h^{-1}(hk)$이다. 이 원소는 어디에 있는가?
:::

:::hint
(5)의 역원: $ag = ga$에서 $a^{-1}g = ga^{-1}$을 끌어내려면, $a^{-1}g$에서 시작해 $g$를 $g(aa^{-1})$로 바꾸고 결합법칙으로 괄호를 옮긴다.
:::

:::proof
증명 없이 쓰는 정수의 성질은 [[prime-number|소수]]의 진술에서 받아들인 (Z1)–(Z3), [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 (Z5)–(Z8)과 정수의 계산 법칙, 그리고 정수끼리의 합·차·곱이 정수라는 것([[even-and-odd]]에서 받아들인 사실)이다.

**(1)** $k$가 정수이면 $nk$는 정수이므로 $n\mathbb{Z} \subseteq \mathbb{Z}$이다. [[subgroup-criteria|부분군 판정법]]의 (3)의 둘째 꼴을 쓴다. $0 = n \cdot 0$이므로 $0 \in n\mathbb{Z}$이고 $n\mathbb{Z} \ne \emptyset$이다. $a, b \in n\mathbb{Z}$이면 $a = nk$, $b = nl$인 정수 $k$, $l$이 있고, $a - b = nk - nl = n(k - l)$이며 $k - l$은 정수이므로 $a - b \in n\mathbb{Z}$이다. 따라서 $n\mathbb{Z}$는 $(\mathbb{Z}, +)$의 부분군이다.

정수 $a$에 대하여 $a \in n\mathbb{Z}$인 것은 정확히 $a = nk$인 정수 $k$가 있을 때이고, [[divisibility|나누어떨어짐]]의 정의에 의해 이것은 정확히 $n \mid a$일 때이다.

$0\mathbb{Z}$: 모든 정수 $k$에서 $0 \cdot k = 0$이므로 $0\mathbb{Z}$의 원소는 모두 $0$이고, $0 = 0 \cdot 0 \in 0\mathbb{Z}$이므로 $0\mathbb{Z} = \{0\}$이다. $1\mathbb{Z}$: $1\mathbb{Z} \subseteq \mathbb{Z}$이고, 정수 $a$는 $a = 1 \cdot a$이므로 $a \in 1\mathbb{Z}$이다. 따라서 $1\mathbb{Z} = \mathbb{Z}$이다. $(-n)\mathbb{Z}$: $(-n)k = n(-k)$이고 $-k$는 정수이므로 $(-n)\mathbb{Z} \subseteq n\mathbb{Z}$이다. $nk = (-n)(-k)$이므로 $n\mathbb{Z} \subseteq (-n)\mathbb{Z}$이다. 따라서 $n\mathbb{Z} = (-n)\mathbb{Z}$이다.

**(2)** [[even-and-odd|짝수와 홀수]]의 정의에 의해 정수 $a$가 짝수인 것은 정확히 $a = 2k$인 정수 $k$가 있을 때, 곧 $a \in 2\mathbb{Z}$일 때이다. 따라서 $2\mathbb{Z}$는 짝수 전체의 집합이고, (1)에 의해 $(\mathbb{Z}, +)$의 부분군이다.

**(3)** [[real-number-arithmetic|실수의 계산 법칙]]의 (K7)에 의해 정수는 실수이므로 $\mathbb{Z} \subseteq \mathbb{R}$이고, 두 정수 $a$, $b$의 합은 정수로서 계산하든 실수로서 계산하든 같은 정수 $a + b$이다. 따라서 $\mathbb{Z}$는 실수의 덧셈에 대하여 닫혀 있고, 실수의 덧셈을 $\mathbb{Z}$로 제한한 연산은 모든 $(a, b) \in \mathbb{Z} \times \mathbb{Z}$에서 값이 정수의 덧셈의 값 $a + b$와 같다. [[binary-operation|이항연산]]의 같음에 의해 두 연산은 같은 연산이고, 이 연산으로 $\mathbb{Z}$는 [[number-groups|수로 이루어진 군]]의 (1)의 군 $(\mathbb{Z}, +)$이다. 부분군의 정의의 두 조건이 성립하므로 $\mathbb{Z}$는 $(\mathbb{R}, +)$의 부분군이다.

$\{1, -1\}$: 먼저 $1 \ne 0$이다((K4)). $-1 = 0$이라면 (K9)에 의해 $1 = -(-1) = -0$이고, (K7)에 의해 정수 $0$의 음수 $-0 = 0$은 실수로서의 음수이기도 하므로 $1 = 0$이 되어 (K4)에 어긋난다. 따라서 $-1 \ne 0$이고 $\{1, -1\} \subseteq \mathbb{R} - \{0\}$이다. [[subgroup-criteria|부분군 판정법]]의 (1)을 쓴다. [[number-groups|수로 이루어진 군]]의 (3)에 의해 $(\mathbb{R} - \{0\}, \cdot)$의 항등원은 $1$이고 $1 \in \{1, -1\}$이다. 곱은 (K4)와 (K1)에 의해 $1 \cdot 1 = 1$, $1 \cdot (-1) = (-1) \cdot 1 = -1$이고, (K12)의 (iii)에 의해 $(-1)(-1) = 1 \cdot 1 = 1$이므로, 네 곱이 모두 $\{1, -1\}$에 속한다. 역원은 [[group-basic-properties|군의 기본 성질]]의 (4)에 의해 $1^{-1} = 1$이고, $(-1)(-1) = 1$이므로 같은 항목의 (3)에 의해 $(-1)^{-1} = -1$이다. 둘 다 $\{1, -1\}$에 속한다.

**(4)** 교집합: [[subgroup-criteria|부분군 판정법]]의 (2)를 쓴다. [[subgroup|부분군]]의 (1)에 의해 $e \in H$이고 $e \in K$이므로 $e \in H \cap K$이고 $H \cap K \ne \emptyset$이다. $a, b \in H \cap K$이면 $a, b \in H$이므로 판정법의 (2)를 $H$에 쓰면 $ab^{-1} \in H$이고, 마찬가지로 $ab^{-1} \in K$이다. 따라서 $ab^{-1} \in H \cap K$이고, 판정법의 (2)에 의해 $H \cap K$는 $G$의 부분군이다.

합집합, 한 방향: $H \subseteq K$라 하자. $x \in H \cup K$이면 $x \in H$이거나 $x \in K$이고, 어느 경우에도 $H \subseteq K$에 의해 $x \in K$이다. 거꾸로 $x \in K$이면 $x \in H \cup K$이다. 따라서 $H \cup K = K$이고, $K$는 $G$의 부분군이다. $K \subseteq H$이면 같은 방법으로 $H \cup K = H$이고 부분군이다.

합집합, 다른 방향: $H \subseteq K$도 아니고 $K \subseteq H$도 아니라고 하자. [[subset|부분집합]]의 진술에 의해 $h \in H$이고 $h \notin K$인 $h$가 있고, $k \in K$이고 $k \notin H$인 $k$가 있다. $H \cup K$가 $G$의 부분군이라고 가정하여 모순을 끌어낸다. $h, k \in H \cup K$이고 $H \cup K$는 닫혀 있으므로 $hk \in H \cup K$이다.

- $hk \in H$인 경우: [[subgroup|부분군]]의 (2)에 의해 $h^{-1} \in H$이고, $H$가 닫혀 있으므로 $h^{-1}(hk) \in H$이다. $h^{-1}(hk) = (h^{-1}h)k = ek = k$이므로(결합법칙, 역원의 성질, $e$의 성질) $k \in H$가 되어 $k \notin H$에 어긋난다.
- $hk \in K$인 경우: $k^{-1} \in K$이고 $(hk)k^{-1} \in K$이다. $(hk)k^{-1} = h(kk^{-1}) = he = h$이므로 $h \in K$가 되어 $h \notin K$에 어긋난다.

어느 경우에도 모순이므로([[proof-by-contradiction|귀류법]]) $H \cup K$는 $G$의 부분군이 아니다.

$2\mathbb{Z} \cup 3\mathbb{Z}$: (1)에 의해 $2\mathbb{Z}$와 $3\mathbb{Z}$는 $(\mathbb{Z}, +)$의 부분군이다. $2 = 2 \cdot 1 \in 2\mathbb{Z}$이다. $2 \in 3\mathbb{Z}$라면 $2 = 3k$인 정수 $k$가 있다. (Z5)와 (Z1)에 의해 $k \le 0$이거나 $k \ge 1$이다. $k \le 0$이면 (Z2)에 의해 $3k \le 0$이고, $0 < 2$이므로 $2 = 3k \le 0 < 2$에서 (Z6)에 의해 $2 < 2$가 되어 (Z5)에 어긋난다. $k \ge 1$이면 (Z3)에 의해 $3k \ge 3 \cdot 1 = 3$이고, $2 < 3 \le 3k = 2$에서 (Z6)에 의해 $2 < 2$가 되어 역시 (Z5)에 어긋난다. 따라서 $2 \notin 3\mathbb{Z}$이고 $2\mathbb{Z} \subseteq 3\mathbb{Z}$가 아니다. 또 $3 = 3 \cdot 1 \in 3\mathbb{Z}$이고, $3 = 2 \cdot 1 + 1$은 홀수이므로 [[even-and-odd]]에서 받아들인 사실에 의해 짝수가 아니며, (2)에 의해 $3 \notin 2\mathbb{Z}$이다. 따라서 $3\mathbb{Z} \subseteq 2\mathbb{Z}$도 아니고, 방금 보인 것에 의해 $2\mathbb{Z} \cup 3\mathbb{Z}$는 부분군이 아니다.

**(5)** $Z(G) \subseteq G$이다. [[subgroup-criteria|부분군 판정법]]의 (1)을 쓴다. 아래에서 "결합법칙"은 [[group|군]]의 (1)이다.

- (i) 모든 $g \in G$에서 $eg = g = ge$이므로 $e \in Z(G)$이다.
- (ii) $a, b \in Z(G)$이고 $g \in G$라 하자. $(ab)g = a(bg) = a(gb) = (ag)b = (ga)b = g(ab)$이다. 차례로 결합법칙, $b \in Z(G)$, 결합법칙, $a \in Z(G)$, 결합법칙을 썼다. 따라서 $ab \in Z(G)$이다.
- (iii) $a \in Z(G)$이고 $g \in G$라 하자.
$$a^{-1}g = a^{-1}\bigl(g(aa^{-1})\bigr) = a^{-1}\bigl((ga)a^{-1}\bigr) = a^{-1}\bigl((ag)a^{-1}\bigr) = a^{-1}\bigl(a(ga^{-1})\bigr) = (a^{-1}a)(ga^{-1}) = ga^{-1}$$
이다. 차례로 $e$의 성질과 역원의 성질($g = ge = g(aa^{-1})$), 결합법칙, $a \in Z(G)$, 결합법칙, 결합법칙, 역원의 성질과 $e$의 성질을 썼다. 따라서 $a^{-1} \in Z(G)$이다.

$Z(G) = G$인 것은, $Z(G) \subseteq G$이므로 정확히 $G \subseteq Z(G)$일 때, 곧 모든 $a \in G$와 모든 $g \in G$에서 $ag = ga$일 때이고, 이것은 [[group|군]]의 정의에 의해 정확히 $G$가 아벨군일 때이다.

**(6)** $\Phi = \{f \in S_X : f(x_0) = x_0\}$로 두고 [[subgroup-criteria|부분군 판정법]]의 (1)을 쓴다. [[symmetric-group|대칭군]]의 (1)에 의해 $S_X$의 항등원은 $i_X$, 곱 $fg$는 [[function-composition|합성]] $f \circ g$, $f$의 역원은 역함수 $f^{-1}$이다.

- (i) [[inverse-function|항등함수]]의 정의에 의해 $i_X(x_0) = x_0$이므로 $i_X \in \Phi$이다.
- (ii) $f, g \in \Phi$이면 $fg \in S_X$이고 $(fg)(x_0) = f(g(x_0)) = f(x_0) = x_0$이므로 $fg \in \Phi$이다.
- (iii) $f \in \Phi$이면 $f(x_0) = x_0$, 곧 $(x_0, x_0) \in f$이다. [[inverse-function|역관계]]의 정의에 의해 $(x_0, x_0) \in f^{-1}$이고, $f^{-1}$은 $X$에서 $X$로의 함수이므로 $f^{-1}(x_0) = x_0$이다. 따라서 $f^{-1} \in \Phi$이다.

**(7)** $\mathcal{D} = \{cI_n : c \in \mathbb{R},\ c \ne 0\}$으로 둔다. 곧 $A \in \mathcal{D}$인 것은 정확히 $A = cI_n$인 $0$이 아닌 실수 $c$가 있을 때이다. [[matrix|행렬]]의 (1)에 의해 $M_{n \times n}$은 [[vector-space|벡터공간]]이므로 (V5) $1A = A$와 (V6) $(\alpha\beta)A = \alpha(\beta A)$가 성립한다. 실수 $c$, $d$에 대하여
$$(cI_n)(dI_n) = c\bigl(I_n(dI_n)\bigr) = c\bigl(d(I_nI_n)\bigr) = c(dI_n) = (cd)I_n$$
이다. 차례로 [[matrix-product-properties|행렬의 곱의 성질]]의 (3)의 $(\alpha A)B = \alpha(AB)$, 같은 (3)의 $A(\alpha B) = \alpha(AB)$, (4)의 $I_nI_n = I_n$, (V6)을 썼다. 이 등식을 이 증명에서 스칼라 행렬의 곱셈 규칙이라 부른다.

$c \ne 0$이면 [[real-number-arithmetic|실수의 계산 법칙]]의 (K8)에 의해 $cc^{-1} = 1$이고 (K1)에 의해 $c^{-1}c = 1$이다. $c^{-1} = 0$이라면 (K9)에 의해 $cc^{-1} = c \cdot 0 = 0$이 되어 $0 = 1$, 곧 (K4)에 어긋나므로 $c^{-1} \ne 0$이다. 스칼라 행렬의 곱셈 규칙과 (V5)에 의해 $(c^{-1}I_n)(cI_n) = (c^{-1}c)I_n = 1I_n = I_n$이고 $(cI_n)(c^{-1}I_n) = I_n$이다. [[invertible-matrix|가역행렬과 역행렬]]의 정의와 (1)에 의해 $cI_n$은 가역이고 $(cI_n)^{-1} = c^{-1}I_n$이다. 따라서 $\mathcal{D} \subseteq GL_n(\mathbb{R})$이고, [[general-linear-group|일반선형군]]의 (2)에 의해 이 군에서 $cI_n$의 역원은 역행렬 $c^{-1}I_n$이다. 이제 [[subgroup-criteria|부분군 판정법]]의 (1)을 쓴다.

- (i) 일반선형군의 (2)에 의해 $GL_n(\mathbb{R})$의 항등원은 $I_n$이고, (V5)에 의해 $I_n = 1I_n$이며 $1 \ne 0$((K4))이므로 $I_n \in \mathcal{D}$이다.
- (ii) $c \ne 0$이고 $d \ne 0$이면 스칼라 행렬의 곱셈 규칙에 의해 $(cI_n)(dI_n) = (cd)I_n$이고, (K12)의 (vi)에 의해 $cd \ne 0$이므로 이 곱은 $\mathcal{D}$에 속한다.
- (iii) $c \ne 0$이면 $(cI_n)^{-1} = c^{-1}I_n$이고 $c^{-1} \ne 0$이므로 $\mathcal{D}$에 속한다.

**(8)** $\mathbb{Z}_n$의 곱셈은 [[integers-modulo-n|법 n의 정수]]의 (2)에 의해 $[a][b] = [ab]$이다. $[-1][-1] = [(-1)(-1)] = [1]$이므로, $P = Q = [-1]$로 두면 $PQ = [1]$이고 $QP = [1]$이다. [[group-of-units-modulo-n|법 n의 단원군]]의 (3)에 의해 $[-1] \in U(n)$이다. 같은 항목의 (2)에 의해 $U(n)$의 곱은 $\mathbb{Z}_n$의 곱셈이고 항등원은 $[1]$이다. [[subgroup-criteria|부분군 판정법]]의 (1)을 쓴다. (i) $[1] \in \{[1], [-1]\}$이다. (ii) $[1][1] = [1]$, $[1][-1] = [-1][1] = [-1]$, $[-1][-1] = [1]$이 모두 $\{[1], [-1]\}$에 속한다. (iii) [[group-basic-properties|군의 기본 성질]]의 (4)에 의해 $[1]^{-1} = [1]$이고, $[-1][-1] = [1]$이므로 같은 항목의 (3)에 의해 $[-1]^{-1} = [-1]$이다.

$n = 1$이면 $-1 - 1 = -2 = 1 \cdot (-2)$이고, $n = 2$이면 $-1 - 1 = -2 = 2 \cdot (-1)$이므로, 두 경우 모두 $-1 \equiv 1 \pmod n$이다([[congruence-modulo-n|합동]]의 정의). [[equivalence-classes-equal-iff-related|동치류가 같을 조건]]에 의해 $[-1] = [1]$이다.
:::

## 예시와 반례

:::example[$2\mathbb{Z} \cap 3\mathbb{Z} = 6\mathbb{Z}$]
(1)과 (4)에 의해 $2\mathbb{Z} \cap 3\mathbb{Z}$는 $(\mathbb{Z}, +)$의 부분군입니다. 이 집합이 $6\mathbb{Z}$와 같음을 봅시다. 정수 $k$에 대해 $6k = 2(3k) = 3(2k)$이므로 $6\mathbb{Z} \subseteq 2\mathbb{Z} \cap 3\mathbb{Z}$입니다. 거꾸로 $a \in 2\mathbb{Z} \cap 3\mathbb{Z}$이면 $a = 2k$, $a = 3l$인 정수 $k$, $l$이 있고,
$$a = 3a - 2a = 3(2k) - 2(3l) = 6k - 6l = 6(k - l)$$
이므로 $a \in 6\mathbb{Z}$입니다. 두 부분군 모두 "어떤 수의 배수 전체"이고, 교집합도 그렇습니다.
:::

:::example[대칭군에서 한 점을 고정하는 치환]
$X = \{1, 2, 3\}$, $x_0 = 3$으로 두고 $s = \{(1, 2), (2, 1), (3, 3)\}$, $u = \{(1, 1), (2, 3), (3, 2)\}$라 합시다. 둘 다 $X$에서 $X$로의 함수이고, 세 점에서 값을 계산하면 $s \circ s = i_X$, $u \circ u = i_X$입니다. $f \circ f = i_X$인 함수 $f : X \to X$는 $f(x) = f(y)$이면 $x = f(f(x)) = f(f(y)) = y$이므로 [[injective-surjective-bijective|단사]]이고, $y = f(f(y))$이므로 전사입니다. 따라서 $s, u \in S_X$입니다. $s(3) = 3$이므로 $s$는 (6)의 부분군에 들어 있고, $s(1) = 2 \ne 1$이므로 $s \ne i_X$입니다. 그래서 이 부분군은 원소가 둘 이상이고 자명한 부분군이 아닙니다. 한편 $u(3) = 2 \ne 3$이므로 $u$는 이 부분군에 들어 있지 않고, 이 부분군은 $S_X$ 자신이 아닌 진부분군입니다.
:::

:::counterexample[합집합은 덧셈에 닫혀 있지 않을 수 있다]
$2 \in 2\mathbb{Z}$이고 $3 \in 3\mathbb{Z}$이지만 $2 + 3 = 5$는 $2\mathbb{Z} \cup 3\mathbb{Z}$에 속하지 않습니다. $5 = 2 \cdot 2 + 1$은 홀수이므로 짝수가 아니고([[even-and-odd]]), $5 = 3k$인 정수 $k$가 있다면 (Z5)와 (Z1)에 의해 $k \le 1$이거나 $k \ge 2$인데, $k \le 1$이면 (Z3)에 의해 $3k \le 3 < 5$이고 $k \ge 2$이면 $3k \ge 6 > 5$이어서 어느 쪽도 $3k = 5$와 함께 성립하지 않습니다((Z6), (Z5)). 따라서 $2\mathbb{Z} \cup 3\mathbb{Z}$는 덧셈에 대하여 닫혀 있지 않습니다. (4)의 증명에서 $h = 2$, $k = 3$으로 둔 경우이고, 여기서는 $hk$에 해당하는 합 $5$가 $H$에도 $K$에도 없습니다.
:::

:::counterexample[다른 점으로 보내는 치환 전체는 부분군이 아니다]
$X$가 집합이고 $x_0, y_0 \in X$, $x_0 \ne y_0$이라 합시다. $\{f \in S_X : f(x_0) = y_0\}$은 $S_X$의 부분군이 아닙니다. $i_X(x_0) = x_0 \ne y_0$이므로 항등원 $i_X$가 이 집합에 없어 [[subgroup-criteria|부분군 판정법]]의 (1)의 (i)이 깨지기 때문입니다. (6)에서 "같은 점으로" 보낸다는 조건이 항등원을 담게 합니다.
:::

## 확인 질문

:::check[$4\mathbb{Z}$는 군 $(2\mathbb{Z}, +)$의 부분군인가?]
그렇습니다. 정수 $k$에 대해 $4k = 2(2k)$이므로 $4\mathbb{Z} \subseteq 2\mathbb{Z}$입니다. (1)에 의해 $4\mathbb{Z}$와 $2\mathbb{Z}$는 둘 다 $(\mathbb{Z}, +)$의 부분군이므로, [[subgroup|부분군]]의 (6)에 의해 $4\mathbb{Z}$는 군 $(2\mathbb{Z}, +)$의 부분군입니다.
:::

:::check[$3\mathbb{Z} \cup 6\mathbb{Z}$는 $(\mathbb{Z}, +)$의 부분군인가?]
그렇습니다. 정수 $k$에 대해 $6k = 3(2k)$이므로 $6\mathbb{Z} \subseteq 3\mathbb{Z}$이고, (4)에 의해 $3\mathbb{Z} \cup 6\mathbb{Z}$는 부분군입니다. 실제로 $3\mathbb{Z} \cup 6\mathbb{Z} = 3\mathbb{Z}$입니다.
:::
