---
title: 교환자
title_en: Commutator
aliases: [두 원소의 교환자, 몫군이 아벨군일 조건, commutator, commutator of two elements]
kind: definition
field: group-theory
msc: ["20F12"]
level: undergrad
summary: "군의 두 원소 a, b에 대하여 aba⁻¹b⁻¹을 a와 b의 교환자라 한다. 두 원소가 교환되는 것은 교환자가 항등원일 때이고, 정규부분군 N에 대한 몫군 G/N이 아벨군인 것은 G의 모든 교환자가 N에 속할 때이다."
requires: [set, function, group, group-basic-properties, finite-product-in-a-group, subgroup, group-homomorphism, normal-subgroup, left-coset, quotient-group, canonical-homomorphism, symmetric-group, cycle-permutation, alternating-group, lagrange-theorem, order-divides-group-order, cyclic-subgroup, prime-number]
sources:
  - ref: judson-abstract-algebra
    loc: "10.4 Exercises, 연습문제 14 (p.132); 15.2절 Examples and Applications, Theorem 15.13 (p.185); 15.4 Exercises, 연습문제 26 (p.188); 13.4 Exercises, 연습문제 20 (p.166)"
    checked: original
    note: "출처는 원소 aba⁻¹b⁻¹ 꼴의 유한 곱 전체인 부분군 G′ 에 'commutator subgroup' 이라는 이름을 붙이고(연습문제 10.4.14, p.132; Theorem 15.13, p.185), 원소 하나에는 이름을 붙이지 않는다(책 끝 찾아보기의 'commutator, 185' 는 'Subgroup' 아래의 항목이다). 13.4절 연습문제 20(p.166)은 같은 부분군을 a⁻¹b⁻¹ab 꼴의 원소로 생성한다고 적는다. 이 항목은 원소 aba⁻¹b⁻¹ 을 교환자로 정의하고, 부분집합으로 생성한 부분군을 쓰지 않으므로 교환자 부분군은 정의하지 않는다. (5)는 연습문제 10.4.14 (b)('N 이 정규부분군이면 G/N 이 아벨군인 것은 N 이 G′ 을 포함할 때')를 교환자 부분군 없이 '모든 교환자가 N 에 속한다'로 적은 것이고, 출처는 증명을 연습문제로 둔다. 연습문제 15.4.26(p.188)은 '{aba⁻¹b⁻¹ : a, b ∈ G} 가 군이 아닐 수 있는 예를 찾아라'고 묻는다. 예시 '$S_3$에서 $(1\\ 2)$와 $(1\\ 3)$의 교환자'는 출처 연습문제 5.4.2 (p.71)가 치환의 곱을 계산하게 하는 것과 같은 종류의 계산이다. 예시 '$S_3$의 교환자와 $A_3$'의 몫군 S₃/A₃ 은 출처 Example 10.5(p.126, 원소가 N 과 (12)N 둘인 몫군의 곱셈표)와 같은 대상이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(교환자·S₄ 예의 계산 대입, 출처 13.4절 연습문제 대조). 독립 검토 없음."
added: 2026-11-27
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이라 하자. 곱 $ab$와 역원 $a^{-1}$은 [[group|군]]의 표기이고, 네 원소의 곱 $aba^{-1}b^{-1}$은 [[finite-product-in-a-group|군의 유한 곱]]의 곱, 곧 길이 $4$인 열 $a, b, a^{-1}, b^{-1}$의 곱이다. 부분군은 [[subgroup|부분군]], 준동형은 [[group-homomorphism|군 준동형]], 정규부분군은 [[normal-subgroup|정규부분군]], 왼쪽 잉여류 $aN$은 [[left-coset|잉여류]], 몫군 $G/N$과 그 곱 $(aN)(bN) = (ab)N$은 [[quotient-group|몫군]]의 것이다.

$a, b \in G$에 대하여 $G$의 원소 $aba^{-1}b^{-1}$을 $a$와 $b$의 **교환자**(commutator)라 한다. $G$의 원소 $c$가 $G$의 **교환자**인 것은 정확히 $c = aba^{-1}b^{-1}$인 $a, b \in G$가 있을 때이다. 이 사이트는 교환자에 따로 기호를 두지 않고 늘 $aba^{-1}b^{-1}$로 쓴다.

다음이 성립한다. 아래에서 $a, b \in G$이다.

1. (묶어 쓰기) $aba^{-1}b^{-1} = (ab)(ba)^{-1}$이다.
2. (교환과 교환자) $ab = ba$인 것은 정확히 $aba^{-1}b^{-1} = e$일 때이다. 따라서 $G$가 아벨군인 것은 정확히 $G$의 모든 교환자가 $e$일 때이다.
3. (부분군) $H$가 $G$의 부분군이고 $a, b \in H$이면 $aba^{-1}b^{-1} \in H$이고, 이 원소는 군 $H$에서 만든 $a$와 $b$의 교환자와 같다.
4. (준동형) $G'$이 군이고 $\varphi : G \to G'$이 준동형이면
   $$
   \begin{aligned}
   &\varphi(aba^{-1}b^{-1}) \\
   &\quad = \varphi(a)\varphi(b)\varphi(a)^{-1}\varphi(b)^{-1}
   \end{aligned}
   $$
   이다. 곧 $a$와 $b$의 교환자의 값은 $G'$에서 만든 $\varphi(a)$와 $\varphi(b)$의 교환자이다.
5. (몫군이 아벨군일 조건) $N$이 $G$의 정규부분군이면, $(aN)(bN) = (bN)(aN)$인 것은 정확히 $aba^{-1}b^{-1} \in N$일 때이다. 따라서 몫군 $G/N$이 아벨군인 것은 정확히 $G$의 모든 교환자가 $N$에 속할 때이다.
:::

:::english
Let $G$ be a group with identity $e$. Products $ab$ and inverses $a^{-1}$ use the notation of the entry on groups, and the product $aba^{-1}b^{-1}$ of four elements is the product of the sequence $a, b, a^{-1}, b^{-1}$ of length $4$ in the sense of the entry on finite products in a group. Subgroups, homomorphisms, normal subgroups, left cosets $aN$, and the quotient group $G/N$ with its product $(aN)(bN) = (ab)N$ are as in the corresponding entries.

For $a, b \in G$, the element $aba^{-1}b^{-1}$ of $G$ is called the **commutator** of $a$ and $b$. An element $c$ of $G$ is a **commutator** of $G$ exactly when there are $a, b \in G$ with $c = aba^{-1}b^{-1}$. This site gives commutators no separate symbol and always writes $aba^{-1}b^{-1}$.

The following hold, where $a, b \in G$.

1. (Grouping) $aba^{-1}b^{-1} = (ab)(ba)^{-1}$.
2. (Commuting and commutators) $ab = ba$ exactly when $aba^{-1}b^{-1} = e$. Hence $G$ is abelian exactly when every commutator of $G$ equals $e$.
3. (Subgroups) If $H$ is a subgroup of $G$ and $a, b \in H$, then $aba^{-1}b^{-1} \in H$, and this element equals the commutator of $a$ and $b$ formed in the group $H$.
4. (Homomorphisms) If $G'$ is a group and $\varphi : G \to G'$ is a homomorphism, then
   $$
   \begin{aligned}
   &\varphi(aba^{-1}b^{-1}) \\
   &\quad = \varphi(a)\varphi(b)\varphi(a)^{-1}\varphi(b)^{-1}.
   \end{aligned}
   $$
   That is, the value at the commutator of $a$ and $b$ is the commutator of $\varphi(a)$ and $\varphi(b)$ formed in $G'$.
5. (When a quotient group is abelian) If $N$ is a normal subgroup of $G$, then $(aN)(bN) = (bN)(aN)$ exactly when $aba^{-1}b^{-1} \in N$. Hence the quotient group $G/N$ is abelian exactly when every commutator of $G$ belongs to $N$.
:::

## 직관

교환자 $aba^{-1}b^{-1}$은 두 원소가 교환되지 않는 정도를 한 원소에 담습니다. (1)에 의해 이것은 $ab$와 $(ba)^{-1}$의 곱이므로, $ab$와 $ba$가 같으면 $e$이고 다르면 $e$가 아닙니다((2)). 아벨군에서는 모든 교환자가 $e$이고, 아벨군이 아닌 군에서는 $e$가 아닌 교환자가 있습니다.

일상에서 두 조작을 차례로 하고, 첫 조작을 되돌리고, 둘째 조작을 되돌리는 일에 비유할 수 있습니다. 상자를 오른쪽으로 옮기고 위로 옮긴 뒤 왼쪽, 아래로 되돌리면 제자리에 오지만, 상자를 돌리고 뒤집은 뒤 되돌리는 순서로 풀면 처음 모양이 아닐 수 있습니다. 제자리로 오는 것이 교환자가 $e$라는 것((2))에 해당하고, 돌아온 모양과 처음 모양의 차이가 교환자에 해당합니다. 다만 군의 곱 $aba^{-1}b^{-1}$을 어느 쪽부터 적용하는지는 군마다 정한 곱의 뜻을 따릅니다. 대칭군에서는 오른쪽 원소 $b^{-1}$을 먼저 적용합니다.

(5)는 몫군의 곱이 대표의 곱으로 정해진다는 데서 나옵니다. 몫군 $G/N$에서 $aN$과 $bN$이 교환되는지는 $G/N$의 교환자 $(aba^{-1}b^{-1})N$이 항등원 $N$인지, 곧 $aba^{-1}b^{-1}$이 $N$에 드는지로 정해집니다. 그래서 $N$이 모든 교환자를 담으면 $G/N$은 아벨군이 됩니다. $N = G$이면 $G/G$는 원소가 하나인 아벨군이고 모든 교환자가 $G$에 들어 (5)와 맞습니다. $N = \{e\}$이면 (5)는 $G/\{e\}$가 아벨군인 것이 모든 교환자가 $e$인 것, 곧 (2)에 의해 $G$가 아벨군인 것과 같다고 말합니다.

## 성질의 증명

:::proof
**(1)** [[finite-product-in-a-group|군의 유한 곱]]의 (3)에 의해 길이 $4$인 열 $a, b, a^{-1}, b^{-1}$의 곱은 길이 $2$인 두 열 $a, b$와 $a^{-1}, b^{-1}$의 곱의 곱이고, 같은 항목의 (1)에 의해 그 둘은 $ab$와 $a^{-1}b^{-1}$이다. 곧 $aba^{-1}b^{-1} = (ab)(a^{-1}b^{-1})$이다. [[group-basic-properties|군의 기본 성질]]의 (6)에 의해 $(ba)^{-1} = a^{-1}b^{-1}$이므로 $aba^{-1}b^{-1} = (ab)(ba)^{-1}$이다.

**(2)** $ab = ba$이면 (1)에 의해 $aba^{-1}b^{-1} = (ab)(ab)^{-1} = e$이다([[group|군]]의 역원의 기호). 거꾸로 $aba^{-1}b^{-1} = e$이면 (1)에 의해 $(ab)(ba)^{-1} = e$이고, 군의 기본 성질의 (3)에 의해 $ab = ((ba)^{-1})^{-1}$이며, 군의 기본 성질의 (5)에 의해 이것은 $ba$이다. [[group|군]]의 정의에 의해 $G$가 아벨군인 것은 모든 $a, b \in G$에서 $ab = ba$일 때이고, 방금 보인 것에 의해 이것은 모든 $a, b$에서 $aba^{-1}b^{-1} = e$일 때, 곧 $G$의 모든 교환자가 $e$일 때이다.

**(3)** [[subgroup|부분군]]의 (2)에 의해 $a^{-1}, b^{-1} \in H$이고 이것들은 군 $H$에서의 역원이기도 하다. 군의 유한 곱의 (9)에 의해 모든 항이 $H$에 속하는 열 $a, b, a^{-1}, b^{-1}$의 곱은 $H$에 속하고, 군 $H$에서 같은 열의 곱과 같다. 따라서 $aba^{-1}b^{-1} \in H$이고, 이것은 군 $H$에서 만든 교환자이다.

**(4)** 군의 유한 곱의 (7)에 의해 $\varphi(aba^{-1}b^{-1}) = \varphi(a)\varphi(b)\varphi(a^{-1})\varphi(b^{-1})$이고, [[group-homomorphism|군 준동형]]의 (2)에 의해 $\varphi(a^{-1}) = \varphi(a)^{-1}$, $\varphi(b^{-1}) = \varphi(b)^{-1}$이다.

**(5)** $\pi : G \to G/N$을 [[canonical-homomorphism|표준 준동형]]이라 하자. 그 항목의 (1)에 의해 $\pi$는 준동형이고, [[quotient-group|몫군]]의 (2)에 의해 군 $G/N$의 항등원은 $N$이다. (2)를 군 $G/N$의 원소 $aN = \pi(a)$와 $bN = \pi(b)$에 쓰면, $(aN)(bN) = (bN)(aN)$인 것은 정확히 $G/N$에서 만든 두 원소의 교환자 $\pi(a)\pi(b)\pi(a)^{-1}\pi(b)^{-1}$이 $N$일 때이다. (4)에 의해 이 교환자는 $\pi(aba^{-1}b^{-1}) = (aba^{-1}b^{-1})N$이다. [[left-coset|잉여류]]의 (5)에 의해 $(aba^{-1}b^{-1})N = N$인 것은 정확히 $aba^{-1}b^{-1} \in N$일 때이다.

잉여류의 정의에 의해 $G/N$의 원소는 모두 $aN$($a \in G$) 꼴이다. 따라서 $G/N$이 아벨군인 것은 정확히 모든 $a, b \in G$에서 $(aN)(bN) = (bN)(aN)$일 때이고, 앞 문단에 의해 이것은 모든 $a, b \in G$에서 $aba^{-1}b^{-1} \in N$일 때, 곧 $G$의 모든 교환자가 $N$에 속할 때이다. $\blacksquare$
:::

## 예시와 반례

:::example[$S_3$에서 $(1\ 2)$와 $(1\ 3)$의 교환자]
[[symmetric-group|대칭군]]의 (5)의 $S_3$에서 $a = (1\ 2)$, $b = (1\ 3)$이라 합시다([[cycle-permutation|순환치환]]의 표기). 순환치환의 (5)에 의해 $a^{-1} = a$, $b^{-1} = b$이므로 교환자는 $aba^{-1}b^{-1} = abab$입니다. 대칭군의 (1)에 의해 곱은 합성이고 오른쪽부터 적용하므로, 각 $x \in \{1, 2, 3\}$에서 $(abab)(x) = a(b(a(b(x))))$입니다([[finite-product-in-a-group|군의 유한 곱]]의 (10)).

- $x = 1$: $b(1) = 3$, $a(3) = 3$, $b(3) = 1$, $a(1) = 2$이므로 값은 $2$입니다.
- $x = 2$: $b(2) = 2$, $a(2) = 1$, $b(1) = 3$, $a(3) = 3$이므로 값은 $3$입니다.
- $x = 3$: $b(3) = 1$, $a(1) = 2$, $b(2) = 2$, $a(2) = 1$이므로 값은 $1$입니다.

따라서 $(1\ 2)$와 $(1\ 3)$의 교환자는 $(1\ 2\ 3)$입니다. 순환치환의 (2)에 의해 $(1\ 2\ 3)$은 항등치환이 아니므로, (2)에 의해 $(1\ 2)$와 $(1\ 3)$은 교환되지 않습니다.
:::

:::counterexample[순서를 바꾼 두 교환자]
교환자는 두 원소의 순서에 따라 달라질 수 있습니다. 위 예시와 같은 방법으로 $S_3$에서 $(1\ 3)$과 $(1\ 2)$의 교환자 $(1\ 3)(1\ 2)(1\ 3)(1\ 2)$를 계산합니다. 각 $x$에 오른쪽부터 $(1\ 2)$, $(1\ 3)$, $(1\ 2)$, $(1\ 3)$을 차례로 적용하면 다음과 같습니다.

- $x = 1$: $1 \to 2 \to 2 \to 1 \to 3$이므로 값은 $3$입니다.
- $x = 2$: $2 \to 1 \to 3 \to 3 \to 1$이므로 값은 $1$입니다.
- $x = 3$: $3 \to 3 \to 1 \to 2 \to 2$이므로 값은 $2$입니다.

따라서 $(1\ 3)$과 $(1\ 2)$의 교환자는 $(1\ 3\ 2)$입니다. $(1\ 3\ 2)$와 $(1\ 2\ 3)$은 $1$의 상이 $3$과 $2$로 달라 서로 다른 치환입니다. 두 교환자 사이의 관계는 아래 확인 질문 '교환자 $aba^{-1}b^{-1}$의 역원은 무엇인가?'에 있습니다.
:::

:::example[$S_3$의 교환자와 $A_3$]
[[alternating-group|교대군]]의 (1)에 의해 $A_3$은 $S_3$의 정규부분군이고, (2)에 의해 $[S_3 : A_3] = 2$입니다. [[quotient-group|몫군]]의 (5)에 의해 $|S_3/A_3| = 2$이고, $2$의 양의 약수는 $1$과 $2$뿐이어서([[prime-number|소수]]의 진술에 의해 양의 약수 $d$는 $1 \le d \le 2$) $2$는 소수이므로 [[order-divides-group-order|원소의 위수는 군의 위수를 나눈다]]의 (3)에 의해 $S_3/A_3$은 순환군이며, [[cyclic-subgroup|순환 부분군]]의 (6)에 의해 아벨군입니다. 따라서 (5)에 의해 $S_3$의 모든 교환자는 $A_3$에 속합니다. 위 예시의 $(1\ 2\ 3)$과 반례의 $(1\ 3\ 2)$도 교대군의 (4)에 의해 $A_3$의 원소입니다.

한편 $N = \{i\}$($i$는 항등치환)는 [[normal-subgroup|정규부분군]]의 (2)에 의해 $S_3$의 정규부분군이고, $(1\ 2\ 3) \notin N$이므로 (5)에 의해 $S_3/\{i\}$는 아벨군이 아닙니다.
:::

## 확인 질문

:::check[교환자 $aba^{-1}b^{-1}$의 역원은 무엇인가?]
$bab^{-1}a^{-1}$, 곧 $b$와 $a$의 교환자입니다. [[finite-product-in-a-group|군의 유한 곱]]의 (5)에 의해 $(aba^{-1}b^{-1})^{-1} = (b^{-1})^{-1}(a^{-1})^{-1}b^{-1}a^{-1}$이고, [[group-basic-properties|군의 기본 성질]]의 (5)에 의해 이것은 $bab^{-1}a^{-1}$입니다. 따라서 $G$의 교환자의 역원은 다시 $G$의 교환자입니다.
:::

:::check[$N$과 $M$이 $G$의 정규부분군이고 $N \subseteq M$이며 $G/N$이 아벨군이면 $G/M$도 아벨군인가?]
그렇습니다. (5)에 의해 $G$의 모든 교환자가 $N$에 속하고, $N \subseteq M$이므로 모든 교환자가 $M$에 속합니다. 다시 (5)를 $M$에 쓰면 $G/M$은 아벨군입니다. 예를 들어 $M = G$이면 $G/G$는 원소가 하나인 군이고, 이것도 아벨군입니다.
:::
