---
title: 몫군
title_en: Quotient Group
aliases: [상군, 인자군, 잉여군, factor group, quotient group, G/N]
kind: theorem
field: group-theory
msc: ["20A05"]
level: undergrad
summary: 군의 곱셈이 부분군 N의 왼쪽 잉여류의 관계와 호환되는 것은 정확히 N이 정규부분군일 때이다. 그때 잉여류 전체 G/N은 (aN)(bN) = (ab)N으로 군이 되고, 이것을 몫군이라 한다. 거듭제곱, 아벨군과 순환군, 원소의 개수가 몫군으로 내려가고, 정수의 덧셈군의 몫군 ℤ/nℤ는 군 ℤ_n과 같다.
requires: [set, subset, function, injective-surjective-bijective, recursion-theorem, mathematical-induction, binary-operation, operation-on-equivalence-classes, equivalence-relation, equivalence-classes-equal-iff-related, finite-set, number-of-elements-is-unique, group, group-basic-properties, subgroup, subgroup-examples, power-in-a-group, cyclic-subgroup, number-groups, integers-modulo-n, group-of-units-modulo-n, congruence-modulo-n, even-and-odd, symmetric-group, left-coset, lagrange-theorem, normal-subgroup]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 10.1절 Factor Groups, 몫군의 도입(번호 없음) p.126, Theorem 10.4 p.126, Example 10.6 p.127. 10.4절 연습문제 6, 8 p.131
    checked: original
    note: "출처는 정규부분군 N 의 잉여류들이 연산 (aN)(bN) = abN 으로 군 G/N 을 이룬다고 쓰고 이것을 factor group 또는 quotient group 이라 부른다(p.126). Theorem 10.4(p.126)는 'G/N 은 위수 [G : N] 인 군'이고, 출처의 증명은 aN = bN, cN = dN 에서 a = bn₁, c = dn₂ 로 두고 acN = bn₁dn₂N = bn₁dN = bn₁Nd = bNd = bdN 을 계산한다(원소와 잉여류를 나란히 적은 식이고 그 뜻은 정의하지 않는다, p.126 을 그림으로 확인했다). 항등원과 역원은 'easy' 라고 적고 결합법칙은 말하지 않는다. 이 항목은 (1)을 동치류 위의 연산의 (3)으로 한쪽씩 확인하고, 군이 되는 것은 같은 항목의 (2), (5)로 얻는다. (1)의 역(호환되면 정규)은 출처에 없다(검색어 'well-defined.{0,80}normal|normal.{0,80}well-defined' 1건은 Theorem 11.10 의 증명, 'independent of the choice' 3건은 Theorem 10.4, Theorem 16.29, 18장 p.226, 'only if.{0,60}normal|normal.{0,40}if and only if' 2건은 갈루아 이론). 출처는 몫군의 원소가 원래 군의 원소들의 집합이라고 강조한다(p.126). 출처는 부분집합의 곱 HK = {hk : h ∈ H, k ∈ K} 를 3장 연습문제 47(p.43)과 9.2절(p.120)에서 쓰지만, 이 항목의 (aN)(bN) 은 그 뜻이 아니라 동치류 위의 연산의 값이다. (3)은 출처에 명제로 없다(검색어 '(gH)n|(aN)n|g n H|an N' 의 꼴은 군의 지수법칙(p.37)뿐). (4)의 아벨군은 출처 10장 연습문제 6, 순환군은 연습문제 8(p.131)이고, 출처 힌트 10.4.8(p.326)이 'a 가 G 의 생성원이면 aH 는 G/H 의 생성원'이라고 적는다. (5): 출처는 지표가 유한한지 따지지 않고 '위수 [G : N]'이라 쓴다. 이 항목은 지표가 유한할 때와 G 가 유한군일 때로 나눈다. (6)의 덧셈 표기와 ℤ/nℤ 의 잉여류 nℤ, 1 + nℤ, …, (n − 1) + nℤ, 그리고 'k + nℤ 와 l + nℤ 의 합은 k + l + nℤ'는 출처 Example 10.6(p.127)에 있다. 출처는 몫군 ℤ/nℤ 가 군 ℤ_n 과 같은 군이라고 말하지 않고, Example 16.39(p.199)에서 몫환으로서 ℤ/nℤ ≅ ℤ_n 이라고만 쓴다. (7)은 출처에 명제로 없다(검색어 'G ?/ ?G|G ?/ ?{e}' 4건은 모두 G/G′). 예시 'ℤ/4ℤ 의 덧셈표'는 출처 Example 10.6(p.127, ℤ/3ℤ 의 케일리 표), 10장 연습문제 1(e)(ℤ 와 5ℤ 의 몫군의 표), 읽기 질문 3(p.130, ℤ/8ℤ 의 계산)과 같은 발상이고 n 만 다르다. 예시 'U(8)을 부호로 나눈 몫군'의 U(8) = {1, 3, 5, 7} 은 출처 p.35 의 그림 3.12 와 p.115 에 있고, 두 원소 부분군의 잉여류를 늘어놓는 것은 출처 6장 연습문제 5(b)(p.79, U(8) 에서 ⟨3⟩ 의 잉여류)와 같은 종류이다. 반례 '정규부분군이 아니면 잉여류의 곱이 정해지지 않는다'의 부분군은 X = {1, 2, 3}, z = 3 이면 출처 Example 10.2(p.125)와 같은 대상이다. 둘째 확인 질문은 출처 10장 연습문제 7(p.131, H 와 G/H 가 아벨군이면 G 도 아벨군인가)과 비슷한 물음이다. 출처의 그 연습문제는 H 도 아벨군이라고 가정한다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 단원 글의 '같다'를 '동형'으로, 근거 누락과 출처 예와 겹치는 것을 고침"
added: 2026-11-19
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이며 $N$이 $G$의 [[subgroup|부분군]]이라 하자. 관계 $\sim_N$, 왼쪽 잉여류 $aN$, 왼쪽 잉여류 전체의 집합 $G/N$은 [[left-coset|잉여류]]의 것이다. 그 항목의 (2)에 의해 몫집합 $G/{\sim_N}$은 $G/N$이고 $a$의 동치류는 $aN$이다. 이항연산이 동치관계와 호환된다는 것과 호환되는 연산이 몫집합에 정하는 연산은 [[operation-on-equivalence-classes|동치류 위의 연산]]의 것이고, 정규부분군은 [[normal-subgroup|정규부분군]]의 것이다.

1. (호환과 정규) $G$의 연산이 $\sim_N$과 호환되는 것은 정확히 $N$이 $G$의 정규부분군일 때이다.

(2)–(6)에서 $N$은 $G$의 정규부분군이다.

2. (몫군) $G/N$ 위의 이항연산으로서 모든 $a, b \in G$에서 $aN$과 $bN$에서의 값이 $(ab)N$인 것이 정확히 하나 있다. 이 값을 $(aN)(bN)$으로 쓴다. 곧
$$(aN)(bN) = (ab)N$$
이다. 이 연산은 [[operation-on-equivalence-classes|동치류 위의 연산]]의 (2)에서 $G$의 연산이 $G/{\sim_N} = G/N$에 정하는 연산이다. 이 연산으로 $G/N$은 군이고, 이 군을 $N$에 대한 $G$의 **몫군**(quotient group)이라 하며 "군 $G/N$"이라 부른다. 그 항등원은 $eN = N$이고, $a \in G$이면 $aN$의 역원은 $a^{-1}N$이다. 곱 $(aN)(bN)$은 이 연산의 값이고, 두 부분집합의 원소끼리의 곱을 모은 집합이 아니다. 이 강의는 부분집합끼리의 곱을 정의하지 않는다.
3. (거듭제곱) $a \in G$이고 $k$가 정수이면, 군 $G/N$에서의 [[power-in-a-group|거듭제곱]] $(aN)^k$는 $a^kN$이다.
4. (아벨군과 순환군) $G$가 아벨군이면 $G/N$도 아벨군이다. $G$가 [[cyclic-subgroup|순환군]]이고 $a$가 그 생성원이면 $G/N$도 순환군이고 $aN$은 그 생성원이다.
5. (원소의 개수) $N$의 [[lagrange-theorem|지표]]가 유한하면 $G/N$은 유한군이고 $|G/N| = [G : N]$이다. $G$가 유한군이면 $N$의 지표는 유한하고 $G/N$은 유한군이며 $|G| = |G/N| \cdot |N|$이다.
6. (덧셈 표기와 정수의 덧셈군) $G$가 [[number-groups|수로 이루어진 군]]의 덧셈 표기로 쓰는 아벨군이면, $G$의 모든 부분군은 정규부분군이고([[normal-subgroup|정규부분군]]의 (3)), 몫군 $G/N$은 아벨군이며 덧셈 표기로 쓴다. 곧 $a, b \in G$와 정수 $k$에 대하여
$$(a + N) + (b + N) = (a + b) + N, \qquad -(a + N) = (-a) + N, \qquad k \cdot (a + N) = (k \cdot a) + N$$
이고 항등원은 $0 + N = N$이다. 특히 $n$이 자연수이면 $(\mathbb{Z}, +)$의 몫군 $\mathbb{Z}/n\mathbb{Z}$는 [[number-groups|수로 이루어진 군]]의 (4)의 군 $(\mathbb{Z}_n, +)$와 같은 군이다. 곧 집합으로 $\mathbb{Z}/n\mathbb{Z} = \mathbb{Z}_n$이고([[left-coset|잉여류]]의 (8)), 모든 정수 $a$, $b$에서 몫군의 합 $(a + n\mathbb{Z}) + (b + n\mathbb{Z})$와 [[integers-modulo-n|법 n의 정수]]의 합 $[a] + [b]$는 같은 원소 $[a + b]$이므로 두 연산은 [[binary-operation|이항연산]]의 뜻으로 같다.

끝으로 $N$이 $G$ 자신이거나 $\{e\}$인 경우이다.

7. (두 극단) $G/G = \{G\}$는 원소가 하나인 군이다. $G/\{e\} = \{\{a\} : a \in G\}$이고, 모든 $a, b \in G$에서 $\{a\}\{b\} = \{ab\}$이다.
:::

:::english
Let $G$ be a group with identity $e$, and let $N$ be a subgroup of $G$. The relation $\sim_N$, left cosets $aN$ and the set $G/N$ of all left cosets are those of the entry on cosets. By item (2) of that entry, the quotient set $G/{\sim_N}$ is $G/N$ and the class of $a$ is $aN$. Compatibility of a binary operation with an equivalence relation, and the operation that a compatible operation induces on the quotient set, are as in the entry on operations on equivalence classes, and normal subgroups are as in the entry on normal subgroups.

1. (Compatibility and normality) The operation of $G$ is compatible with $\sim_N$ exactly when $N$ is a normal subgroup of $G$.

In (2)–(6), $N$ is a normal subgroup of $G$.

2. (The quotient group) There is exactly one binary operation on $G/N$ whose value at $aN$ and $bN$ is $(ab)N$ for all $a, b \in G$. This value is written $(aN)(bN)$; that is,
$$(aN)(bN) = (ab)N.$$
This operation is the operation induced on $G/{\sim_N} = G/N$ by the operation of $G$, in the sense of item (2) of the entry on operations on equivalence classes. With this operation $G/N$ is a group, called the **quotient group** of $G$ by $N$ and referred to as "the group $G/N$". Its identity is $eN = N$, and for $a \in G$ the inverse of $aN$ is $a^{-1}N$. The product $(aN)(bN)$ is a value of this operation, not the set of products of elements of two subsets; this course does not define products of subsets.
3. (Powers) If $a \in G$ and $k$ is an integer, then the power $(aN)^k$ in the group $G/N$ is $a^kN$.
4. (Abelian and cyclic groups) If $G$ is abelian, then so is $G/N$. If $G$ is cyclic with generator $a$, then $G/N$ is cyclic and $aN$ is a generator of it.
5. (Number of elements) If $N$ has finite index, then $G/N$ is a finite group and $|G/N| = [G : N]$. If $G$ is a finite group, then $N$ has finite index, $G/N$ is a finite group, and $|G| = |G/N| \cdot |N|$.
6. (Additive notation and the additive group of integers) If $G$ is an abelian group written in the additive notation of the entry on groups of numbers, then every subgroup of $G$ is normal (item (3) of the entry on normal subgroups), and the quotient group $G/N$ is abelian and is written additively. That is, for $a, b \in G$ and an integer $k$,
$$(a + N) + (b + N) = (a + b) + N, \qquad -(a + N) = (-a) + N, \qquad k \cdot (a + N) = (k \cdot a) + N,$$
and the identity is $0 + N = N$. In particular, if $n$ is a natural number, then the quotient group $\mathbb{Z}/n\mathbb{Z}$ of $(\mathbb{Z}, +)$ is the same group as the group $(\mathbb{Z}_n, +)$ of item (4) of the entry on groups of numbers. Namely, $\mathbb{Z}/n\mathbb{Z} = \mathbb{Z}_n$ as sets (item (8) of the entry on cosets), and for all integers $a$ and $b$ the sum $(a + n\mathbb{Z}) + (b + n\mathbb{Z})$ in the quotient group and the sum $[a] + [b]$ in the integers modulo $n$ are the same element $[a + b]$, so the two operations are equal as binary operations.

Finally, the cases $N = G$ and $N = \{e\}$.

7. (The two extremes) $G/G = \{G\}$ is a group with one element. $G/\{e\} = \{\{a\} : a \in G\}$, and $\{a\}\{b\} = \{ab\}$ for all $a, b \in G$.
:::

## 직관

몫군은 $N$에 속하는 차이를 "없는 것으로 치고" 계산하는 군입니다. 시계가 좋은 예입니다. 정수 시각을 $12$로 나눈 나머지만 보면, $(\mathbb{Z}, +)$에서 $12\mathbb{Z}$만큼 다른 시각을 같은 것으로 치는 셈이고, 그렇게 얻은 $\mathbb{Z}/12\mathbb{Z}$가 바로 $\mathbb{Z}_{12}$입니다((6)). 비유에서 "같은 것으로 친다"가 관계 $\sim_N$에, "시각을 더한다"가 잉여류끼리의 연산에 해당합니다.

같은 것으로 친 원소끼리 계산해도 결과가 같은 것으로 쳐져야 연산이 정해집니다. 이것이 호환입니다. (1)의 증명에서 보듯, 왼쪽에 같은 원소를 곱하는 쪽은 어떤 부분군에서도 문제가 없고, 오른쪽에 곱하는 쪽에서만 $b^{-1}nb \in N$, 곧 정규성이 필요합니다. 정규가 아니면 실제로 연산이 정해지지 않습니다(아래 반례).

몫군의 원소는 $G$의 부분집합인 잉여류입니다. 그러나 계산은 대표로 합니다. $aN$과 $bN$을 곱하려면 대표 $a$, $b$를 곱하고 그 잉여류를 잡으면 되고, (1)이 그 답이 대표에 따르지 않음을 보장합니다. 그래서 거듭제곱, 교환법칙, 생성원 같은 것이 대표에서 몫군으로 그대로 내려갑니다((3), (4)).

## 증명

:::idea
(1)은 [[operation-on-equivalence-classes|동치류 위의 연산]]의 (3)으로 한쪽씩 확인한다. $(ba)^{-1}(ba') = a^{-1}a'$이므로 왼쪽은 늘 맞고, $(ab)^{-1}(a'b) = b^{-1}(a^{-1}a')b$이므로 오른쪽은 정규성과 같다. 그 뒤로는 같은 항목의 (2), (5)가 몫군을 준다.
:::

:::hint
(1)의 역: 호환되면 $e \sim_N n$인 $n \in N$에서 $eb \sim_N nb$를 얻는다. 이것을 $\sim_N$의 정의로 풀어 본다.
:::

:::hint
(3): 자연수 지수는 귀납법으로, 음의 지수는 $a^{-k} = (a^{-1})^k$를 쓴다.
:::

:::proof
아래에서 "잉여류의 ($k$)"는 [[left-coset|잉여류]]의 ($k$), "연산의 ($k$)"는 [[operation-on-equivalence-classes|동치류 위의 연산]]의 ($k$), "기본 성질의 ($k$)"는 [[group-basic-properties|군의 기본 성질]]의 ($k$), "거듭제곱의 ($k$)"는 [[power-in-a-group|군의 거듭제곱]]의 ($k$)이다. 결합법칙은 [[group|군]]의 (1)이다. $\sim_N$의 정의에 의해 $a \sim_N a'$인 것은 정확히 $a^{-1}a' \in N$일 때이다.

**(1)** $N$이 정규부분군이라 하자. 연산의 (3)에 의해, $a, a', b \in G$이고 $a \sim_N a'$일 때 $ab \sim_N a'b$이고 $ba \sim_N ba'$임을 보이면 된다. $n = a^{-1}a'$이라 하면 $n \in N$이다. 기본 성질의 (6)과 결합법칙에 의해
$$(ba)^{-1}(ba') = (a^{-1}b^{-1})(ba') = a^{-1}\bigl(b^{-1}(ba')\bigr) = a^{-1}\bigl((b^{-1}b)a'\bigr) = a^{-1}(ea') = a^{-1}a' \in N$$
이므로 $ba \sim_N ba'$이다. 이 계산에는 정규성이 쓰이지 않았다. 또
$$(ab)^{-1}(a'b) = (b^{-1}a^{-1})(a'b) = b^{-1}\bigl(a^{-1}(a'b)\bigr) = b^{-1}\bigl((a^{-1}a')b\bigr) = b^{-1}(nb) = b^{-1}nb$$
이고, [[normal-subgroup|정규부분군]]의 (1)의 (iv)에 의해 $b^{-1}nb \in N$이므로 $ab \sim_N a'b$이다.

거꾸로 $G$의 연산이 $\sim_N$과 호환된다고 하자. $b \in G$, $n \in N$이라 하자. 기본 성질의 (4)에 의해 $e^{-1}n = en = n \in N$이므로 $e \sim_N n$이고, 잉여류의 (1)에 의해 $\sim_N$은 동치관계이므로 $b \sim_N b$이다. 호환의 정의에 의해 $eb \sim_N nb$, 곧 $(eb)^{-1}(nb) = b^{-1}(nb) = b^{-1}nb \in N$이다. 모든 $b \in G$와 $n \in N$에서 이것이 성립하므로, 정규부분군의 (1)의 (iv)에서 (i)로 가는 방향에 의해 $N$은 정규부분군이다.

**(2)** (1)에 의해 $G$의 연산은 $\sim_N$과 호환된다. 연산의 (2)에 의해 $G/{\sim_N}$ 위의 이항연산 $\circledast$로서 모든 $a, b \in G$에서 $[a] \circledast [b] = [ab]$인 것이 정확히 하나 있다. 잉여류의 (2)에 의해 $G/{\sim_N} = G/N$이고 $[a] = aN$, $[b] = bN$, $[ab] = (ab)N$이므로, 이것은 $G/N$ 위의 이항연산으로서 $aN$과 $bN$에서의 값이 $(ab)N$인 것이 정확히 하나 있다는 말이다. 연산의 (5)에 의해 $(G/N, \circledast)$는 군이고, 항등원은 $[e] = eN$, $aN$의 역원은 $[a^{-1}] = a^{-1}N$이다. 잉여류의 (5)에 의해 $eN = N$이다.

**(3)** 먼저 모든 자연수 $k$에서 $(aN)^k = a^kN$임을 [[mathematical-induction|수학적 귀납법]]으로 보인다. 거듭제곱의 (1)을 군 $G/N$과 군 $G$에 각각 쓴다. $k = 1$이면 $(aN)^1 = aN = a^1N$이다. 어떤 자연수 $k$에서 $(aN)^k = a^kN$이면
$$(aN)^{k+1} = (aN)^k(aN) = (a^kN)(aN) = (a^ka)N = a^{k+1}N$$
이다. 셋째 등호는 (2)이다. 따라서 모든 자연수 $k$에서 성립한다.

$k = 0$이면 거듭제곱의 정의와 (2)에 의해 $(aN)^0$은 $G/N$의 항등원 $N = eN = a^0N$이다. $k$가 음의 정수이면 $m = -k$는 자연수이다. 거듭제곱의 (1)의 $x^{-m} = (x^{-1})^m$(군 $G/N$과 군 $G$에서), 이 항목의 (2)의 $(aN)^{-1} = a^{-1}N$, 그리고 앞 문단을 $a^{-1}$에 쓴 것에 의해
$$(aN)^k = \bigl((aN)^{-1}\bigr)^m = (a^{-1}N)^m = (a^{-1})^mN = a^{-m}N = a^kN$$
이다.

**(4)** $G$가 아벨군이면 연산의 (5)의 마지막 문장에 의해 $(G/N, \circledast)$도 아벨군이다. $G = \langle a \rangle$라 하자. $P \in G/N$이면 $P = xN$인 $x \in G$가 있고, [[cyclic-subgroup|순환 부분군]]의 정의에 의해 $x = a^k$인 정수 $k$가 있다. (3)에 의해 $P = a^kN = (aN)^k$이므로 $P \in \langle aN \rangle$이다. 따라서 $G/N \subseteq \langle aN \rangle$이고, $\langle aN \rangle \subseteq G/N$이므로 $G/N = \langle aN \rangle$이다. 순환 부분군의 (6)에 의해 $G/N$은 순환군이고 $aN$은 그 생성원이다.

**(5)** [[lagrange-theorem|라그랑주 정리]]의 지표의 정의에 의해 $N$의 지표가 유한하면 $G/N$은 유한집합이고 $[G : N] = |G/N|$이다. [[group|군]]의 유한군의 정의에 의해 군 $G/N$은 유한군이다. $G$가 유한군이면 라그랑주 정리의 (1)에 의해 $G/N$은 유한집합이고 $|G| = [G : N] \cdot |N| = |G/N| \cdot |N|$이다.

**(6)** [[normal-subgroup|정규부분군]]의 (3)에 의해 $G$의 모든 부분군은 정규부분군이다. (4)에 의해 $G/N$은 아벨군이므로 [[number-groups|수로 이루어진 군]]의 덧셈 표기를 쓸 수 있다. 잉여류의 (8)에 의해 $aN$은 $a + N$으로 쓰고, $G$의 곱 $ab$는 $a + b$로, 역원 $a^{-1}$은 $-a$로, 항등원 $e$는 $0$으로, 거듭제곱 $a^k$는 거듭제곱의 (4)의 배수 $k \cdot a$로 쓴다. 군 $G/N$에서도 곱을 $+$로, 역원을 $-$로, 거듭제곱을 배수로 쓴다. 그러면 (2)의 세 등식 $(aN)(bN) = (ab)N$, $eN = N$, $(aN)^{-1} = a^{-1}N$과 (3)의 등식은 각각 진술의 등식들이 된다.

이제 $n$이 자연수이고 $G = (\mathbb{Z}, +)$, $N = n\mathbb{Z}$라 하자. 잉여류의 (8)에 의해 모든 정수 $a$에서 $a + n\mathbb{Z} = [a]$이고 $\mathbb{Z}/n\mathbb{Z} = \mathbb{Z}_n$이다. $P, Q \in \mathbb{Z}_n$이면 $P = [a]$, $Q = [b]$인 정수 $a$, $b$가 있다. 몫군의 합은 $P + Q = (a + n\mathbb{Z}) + (b + n\mathbb{Z}) = (a + b) + n\mathbb{Z} = [a + b]$이고, [[integers-modulo-n|법 n의 정수]]의 (2)의 합도 $[a] + [b] = [a + b]$이다. 두 연산은 $\mathbb{Z}_n$의 모든 $P$, $Q$에서 값이 같으므로 [[binary-operation|이항연산]]의 진술에 의해 같은 이항연산이다. 따라서 몫군 $\mathbb{Z}/n\mathbb{Z}$와 군 $(\mathbb{Z}_n, +)$는 같은 집합과 같은 연산의 순서쌍, 곧 같은 군이다.

**(7)** [[normal-subgroup|정규부분군]]의 (2)에 의해 $G$와 $\{e\}$는 정규부분군이므로 (2)에 의해 $G/G$와 $G/\{e\}$는 군이다. [[lagrange-theorem|라그랑주 정리]]의 (2)에 의해 $G/G = \{G\}$이고, [[group|군]]의 (5)에 의해 $\{G\}$는 원소가 하나이다. 같은 라그랑주 정리의 (2)에 의해 $G/\{e\} = \{\{a\} : a \in G\}$이다. $a \in G$이고 $x \in G$이면, $x \in a\{e\}$인 것은 정확히 $x = ae = a$일 때이므로 $a\{e\} = \{a\}$이다. 따라서 (2)에 의해 $\{a\}\{b\} = (a\{e\})(b\{e\}) = (ab)\{e\} = \{ab\}$이다. $\blacksquare$
:::

## 예시와 반례

:::example[ℤ/4ℤ의 덧셈표]
$(\mathbb{Z}, +)$와 $N = 4\mathbb{Z}$를 봅시다. [[lagrange-theorem|라그랑주 정리]]의 (5)와 [[integers-modulo-n|법 n의 정수]]의 (1), 그리고 (6)의 $a + 4\mathbb{Z} = [a]$에 의해 $\mathbb{Z}/4\mathbb{Z}$의 원소는 서로 다른 네 잉여류 $0 + 4\mathbb{Z}$, $1 + 4\mathbb{Z}$, $2 + 4\mathbb{Z}$, $3 + 4\mathbb{Z}$입니다. (6)에 의해 $(a + 4\mathbb{Z}) + (b + 4\mathbb{Z}) = (a + b) + 4\mathbb{Z}$이고, $a + b \ge 4$이면 $-(a + b - 4) + (a + b) = 4 \in 4\mathbb{Z}$이므로 [[left-coset|잉여류]]의 (3)과 (8)에 의해 $(a + b) + 4\mathbb{Z} = (a + b - 4) + 4\mathbb{Z}$입니다. 대표 $0, 1, 2, 3$으로 적은 덧셈표는 다음과 같습니다.

| $+$ | $0 + 4\mathbb{Z}$ | $1 + 4\mathbb{Z}$ | $2 + 4\mathbb{Z}$ | $3 + 4\mathbb{Z}$ |
|---|---|---|---|---|
| $0 + 4\mathbb{Z}$ | $0 + 4\mathbb{Z}$ | $1 + 4\mathbb{Z}$ | $2 + 4\mathbb{Z}$ | $3 + 4\mathbb{Z}$ |
| $1 + 4\mathbb{Z}$ | $1 + 4\mathbb{Z}$ | $2 + 4\mathbb{Z}$ | $3 + 4\mathbb{Z}$ | $0 + 4\mathbb{Z}$ |
| $2 + 4\mathbb{Z}$ | $2 + 4\mathbb{Z}$ | $3 + 4\mathbb{Z}$ | $0 + 4\mathbb{Z}$ | $1 + 4\mathbb{Z}$ |
| $3 + 4\mathbb{Z}$ | $3 + 4\mathbb{Z}$ | $0 + 4\mathbb{Z}$ | $1 + 4\mathbb{Z}$ | $2 + 4\mathbb{Z}$ |

$a + 4\mathbb{Z}$를 $[a]$로 바꾸면 이것은 $(\mathbb{Z}_4, +)$의 덧셈표 $[a] + [b] = [a + b]$와 칸마다 같습니다. 예를 들어 $(3 + 4\mathbb{Z}) + (2 + 4\mathbb{Z}) = 1 + 4\mathbb{Z}$이고 $[3] + [2] = [5] = [1]$입니다. (6)이 말하는 것이 이것입니다. 또 (6)과 [[power-in-a-group|군의 거듭제곱]]의 (6)에 의해 $k \cdot (1 + 4\mathbb{Z}) = (k \cdot 1) + 4\mathbb{Z} = k + 4\mathbb{Z}$이므로 $1 + 4\mathbb{Z}$가 생성원이고, 이는 (4)와도 맞습니다.
:::

:::example[U(8)을 부호로 나눈 몫군]
[[group-of-units-modulo-n|법 n의 단원군]] $U(8)$을 봅시다. 단원군의 (2)에 의해 그 곱은 $\mathbb{Z}_8$의 곱셈이고 항등원은 $[1]$이며, $U(8)$은 아벨군입니다. $7 - (-1) = 8$이므로 $[7] = [-1]$이고([[congruence-modulo-n|합동]]의 정의와 [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]), [[subgroup-examples|부분군의 예와 교집합]]의 (8)에 의해 $N = \{[1], [7]\}$은 $U(8)$의 부분군입니다. [[normal-subgroup|정규부분군]]의 (3)에 의해 $N$은 정규부분군입니다.

*$U(8)$의 원소.* [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $\mathbb{Z}_8$의 원소는 서로 다른 $[0], [1], \dots, [7]$입니다. $[1][1] = [1]$, $[3][3] = [9] = [1]$, $[5][5] = [25] = [1]$, $[7][7] = [49] = [1]$이므로($9 - 1 = 8$, $25 - 1 = 8 \cdot 3$, $49 - 1 = 8 \cdot 6$) 단원군의 (3)에 의해 $[1], [3], [5], [7] \in U(8)$입니다. $c$가 $0, 1, 2, 3$ 가운데 하나이고 $q$가 정수이면 $[2c][q] = [2cq]$입니다. $2cq - 1 = 2(cq - 1) + 1$은 홀수이고 정수 $d$에 대하여 $8d = 2(4d)$는 짝수이므로, [[even-and-odd|짝수와 홀수]]에서 받아들인 사실에 의해 모든 정수 $d$에서 $2cq - 1 \ne 8d$입니다. 곧 $2cq \not\equiv 1 \pmod 8$이고 $[2cq] \ne [1]$이므로 단원군의 (3)에 의해 $[0], [2], [4], [6] \notin U(8)$입니다. 따라서 $U(8) = \{[1], [3], [5], [7]\}$입니다.

*잉여류.* [[left-coset|잉여류]]의 정의에 의해 $[3]N = \{[3][1], [3][7]\} = \{[3], [21]\}$이고, $21 - 5 = 8 \cdot 2$이므로 $[21] = [5]$, 곧 $[3]N = \{[3], [5]\}$입니다. 잉여류의 (5)에 의해 $[1]N = [7]N = N$이고, $[5] \in [3]N$이므로 잉여류의 (3)에 의해 $[5]N = [3]N$입니다. $[3] \notin N$이므로 $[3]N \ne N$입니다. 따라서 $U(8)/N = \{N, [3]N\}$이고 원소가 둘입니다. 이것은 (5)의 $|U(8)| = 4 = |U(8)/N| \cdot |N| = 2 \cdot 2$와 맞습니다.

*곱.* (2)에 의해 $([3]N)([3]N) = ([3][3])N = [9]N = [1]N = N$입니다. 곧 $[3]N$은 몫군의 항등원 $N$이 아니면서 제곱이 $N$이고, 몫군 $U(8)/N$은 $[3]N$이 생성하는 원소 두 개의 순환군입니다. $[a] \in U(8)$이면 $[a]N = \{[a], [7a]\}$이고 $7a - (-a) = 8a$이므로 $[7a] = [-a]$입니다. 곧 각 잉여류 $[a]N = \{[a], [-a]\}$는 부호만 다른 두 원소를 묶은 것이므로, 이 몫군은 $U(8)$에서 부호를 잊고 계산한 것입니다.
:::

:::counterexample[정규부분군이 아니면 잉여류의 곱이 정해지지 않는다]
$X$를 서로 다른 세 원소 $x$, $y$, $z$를 갖는 집합이라 하고, [[symmetric-group|대칭군]] $S_X$의 부분군 $H = \{f \in S_X : f(z) = z\}$([[subgroup-examples|부분군의 예와 교집합]]의 (6))를 봅시다. 곱 $fg$는 합성 $f \circ g$입니다. $w = x$이면 $y$를, $w = y$이면 $x$를, 나머지 $w$이면 $w$를 정하는 함수 $t : X \to X$와, 같은 방법으로 $y$와 $z$를 맞바꾸는 함수 $s : X \to X$를 [[recursion-theorem|재귀 정리]]의 (1)로 정합니다. $t(t(x)) = x$, $t(t(y)) = y$이고 나머지 $w$에서 $t(t(w)) = w$이므로 $t \circ t = i_X$이고, 그러면 $t$는 [[injective-surjective-bijective|전단사]]입니다($t(a) = t(b)$이면 $a = t(t(a)) = t(t(b)) = b$이고, $b = t(t(b))$). 같은 방법으로 $s \circ s = i_X$이고 $s$도 전단사이므로 $t, s \in S_X$입니다.

$f, g \in S_X$이면 [[left-coset|잉여류]]의 (3)에 의해 $fH = gH$인 것은 정확히 $f^{-1}g \in H$, 곧 $f^{-1}(g(z)) = z$일 때이고, 양변에 $f$를 적용하거나 $f^{-1}$을 적용해 보면 이것은 정확히 $g(z) = f(z)$일 때입니다.

$t(z) = z$이므로 $i_X(z) = t(z)$이고 $i_XH = tH$입니다. 한편 $(i_Xs)(z) = s(z) = y$이고 $(ts)(z) = t(y) = x \ne y$이므로 $(i_Xs)H \ne (ts)H$입니다. $S_X/H$ 위의 이항연산으로서 모든 $f, g \in S_X$에서 $fH$와 $gH$에서의 값이 $(fg)H$인 것이 있다면, $i_XH = tH$이므로 $sH$와의 값 $(i_Xs)H$와 $(ts)H$가 같아야 하는데 그렇지 않습니다. 따라서 그런 연산은 없고, 몫군을 만들 수 없습니다. (1)과 견주면, 왼쪽 잉여류가 같은 두 대표 $i_X$, $t$에 오른쪽에서 $s$를 곱한 곳이 깨졌습니다. 실제로 $ss = i_X$이므로 [[group-basic-properties|군의 기본 성질]]의 (3)에 의해 $s^{-1} = s$이고, $s(x) = x$이므로 $(s^{-1}ts)(z) = s(t(s(z))) = s(x) = x \ne z$, 곧 $s^{-1}ts \notin H$입니다. 일반적으로도 $G$의 부분군 $N$이 정규부분군이 아니면 이런 연산은 없습니다. $G/N$ 위의 이항연산 $\bullet$이 모든 $a, b \in G$에서 $(aN) \bullet (bN) = (ab)N$을 만족한다면, $a, a', b, b' \in G$이고 $aN = a'N$, $bN = b'N$일 때 $(ab)N = (aN) \bullet (bN) = (a'N) \bullet (b'N) = (a'b')N$이므로 $G$의 연산이 $\sim_N$과 호환되고([[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]), (1)에 의해 $N$은 정규부분군이어야 합니다.
:::

## 확인 질문

:::check[$N$이 정규부분군이고 $a \in G$, $k$가 정수일 때, 몫군에서 $(aN)^k = N$인 것은 정확히 언제인가?]
정확히 $a^k \in N$일 때입니다. (3)에 의해 $(aN)^k = a^kN$이고, [[left-coset|잉여류]]의 (5)에 의해 $a^kN = N$인 것은 정확히 $a^k \in N$일 때입니다. 예를 들어 $(\mathbb{Z}, +)$에서 $(1 + 6\mathbb{Z})$의 $k$배가 $6\mathbb{Z}$인 것은 정확히 $k \in 6\mathbb{Z}$일 때입니다([[power-in-a-group|군의 거듭제곱]]의 (6)).
:::

:::check[$N$이 $G$의 정규부분군이고 몫군 $G/N$이 아벨군이면 $G$도 아벨군인가?]
그렇다고 할 수 없습니다. $X$가 서로 다른 세 원소를 갖는 집합이고 $G = S_X$, $N = G$이면 (7)에 의해 $G/G$는 원소가 하나인 군이므로 아벨군입니다([[group|군]]의 (5)). 그러나 [[symmetric-group|대칭군]]의 (4)에 의해 $S_X$는 아벨군이 아닙니다. (4)의 역은 성립하지 않습니다.
:::
