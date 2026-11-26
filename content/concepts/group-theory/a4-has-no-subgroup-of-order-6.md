---
title: A₄ 에는 원소가 6개인 부분군이 없다
title_en: A₄ Has No Subgroup of Order 6
aliases: [라그랑주 정리의 역, A4의 부분군, 지표가 2인 부분군, converse of Lagrange's theorem, A4 has no subgroup of order 6]
kind: theorem
field: group-theory
msc: ["20B30", "20D99"]
level: undergrad
summary: 지표가 2인 부분군은 모든 원소의 제곱을 포함한다. 이것으로 원소가 12개인 교대군 A₄에 원소가 6개인 부분군이 없음을 보인다. 따라서 라그랑주 정리의 역은 성립하지 않는다.
requires: [set, finite-set, cyclic-subgroup, order-of-cyclic-subgroup, order-of-symmetric-group, parity-of-a-permutation, number-of-elements-is-unique, subset-of-finite-set, well-ordering-principle, division-theorem, divisibility, group, symmetric-group, subgroup, power-in-a-group, laws-of-exponents, order-of-an-element, left-coset, lagrange-theorem, index-two-subgroup-is-normal, cycle-permutation, alternating-group]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 6.2절 Remark 6.14 와 Proposition 6.15(p.76–77); 5.1절 Example 5.18(p.65); 6.5절 Exercises, 연습문제 17(p.79)
    checked: original
    note: "출처는 Remark 6.14(p.76)에서 라그랑주 정리의 역이 거짓이라 하고 A_4 가 위수 6 인 부분군을 갖지 않음을 보이겠다고 한 뒤, Proposition 6.15(p.76)에서 그것을 증명한다. 출처의 증명은 [A_4 : H] = 2 에서 왼쪽·오른쪽 잉여류가 같아 gHg⁻¹ = H 임을 쓰고, 'A_4 에 3-순환치환이 여덟 개 있으므로 적어도 하나는 H 에 있다'고 한 뒤 일반성을 잃지 않고 (1 2 3) ∈ H 로 두어, 켤레 (1 2 4)(1 2 3)(1 2 4)⁻¹ = (2 4 3) 등과 역원으로 H 의 일곱 원소를 만든다(p.77). 이 항목은 그 길 대신 (1)의 '지표가 2 이면 g² ∈ H'로 3-순환치환 여덟 개가 모두 H 에 있음을 보여, 3-순환치환 하나를 고르거나 일반성을 잃지 않는다고 하는 단계와 켤레 계산을 쓰지 않는다. (1)은 출처 6.5절 연습문제 17(p.79, [G : H] = 2 이고 a, b ∉ H 이면 ab ∈ H)에서 a = b 로 둔 것과 같은 내용이다. 출처의 Example 5.18(p.65)은 A_4 의 원소 열두 개를 늘어놓고, 장 끝의 연습문제(5.4절 연습문제 6, p.71)에서 A_4 의 부분군을 모두 찾으면 위수 6 인 부분군이 없음을 알게 된다고 적는다. 예시 'S₄의 지표가 2인 부분군 A₄'의 A_4 ⊆ S_4 는 출처 10.4절 연습문제 10(p.131, 지표 2 인 부분군은 정규, S_n 은 n ≥ 3 이면 단순하지 않다)과 같은 대상이고, 그 예의 (1 2 3 4)² = (1 3)(2 4) 는 출처 5.2절(p.68)이 정사각형의 회전 r = (1 2 3 4) 에 대해 r² = (1 3)(2 4) 로 적는 것과 같은 계산이다. 반례 '지표가 3인 부분군 V의 예'는 V = {(1), (1 2)(3 4), (1 3)(2 4), (1 4)(2 3)} 을 다루며, 출처 6.4절 Reading Question 3(p.78)이 같은 집합의 S_4 에서의 지표를 묻는다. 확인 질문 '$A_4$에 원소가 $3$개인 부분군이 있는가?'는 출처 연습문제 5.6(p.71, A_4 의 부분군과 그 위수)과 같은 대상을 다루고, 그 답의 ⟨(1 2 3)⟩ 은 출처 15.4절 연습문제 2 의 힌트(p.328)에 S_4 의 실로우 3-부분군 P₁ = {(1), (1 2 3), (1 3 2)} 로 나온다. 확인 질문 '$S_3$에서 원소가 $3$개인 부분군은 몇 개인가?'는 출처 3.5절 연습문제 35(p.42, 정삼각형의 대칭군의 부분군을 모두 찾아라)와 같은 대상을 다루고, 그 답 A_3 은 출처 6.1절 Example 6.2(p.74)의 부분군 H = {(1), (1 2 3), (1 3 2)} 이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(궤도 개수·홀짝 판정에 경계값, A₄ 논법 통독, 빠진 겹침(11.1절 곱셈표)을 돌려보내 반영). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$G$가 [[group|군]]이고 $H$가 $G$의 [[subgroup|부분군]]이라 하자. 왼쪽 잉여류 $gH$와 $G/H$는 [[left-coset|잉여류]], 지표 $[G : H]$는 [[lagrange-theorem|라그랑주 정리]], 거듭제곱 $g^2 = gg$는 [[power-in-a-group|군의 거듭제곱]]의 것이다. $A_4$, $C$, $D$는 [[alternating-group|교대군]]의 (5)의 것이다.

1. (지표가 $2$인 부분군) $[G : H] = 2$이면 모든 $g \in G$에서 $g^2 \in H$이다. 따라서 $g^2 \notin H$인 $g \in G$가 있으면 $H$의 지표는 $2$가 아니다.
2. ($A_4$) $A_4$에는 원소가 $6$개인 부분군이 없다.
3. (라그랑주 정리의 역) $|A_4| = 12$이고 $6$은 $12$를 나누지만 $A_4$에는 원소가 $6$개인 부분군이 없다. 따라서 "$G$가 유한군이고 $d$가 $|G|$를 나누는 자연수이면 $G$에 원소가 $d$개인 부분군이 있다"는 일반적으로 성립하지 않는다.
:::

:::english
Let $G$ be a group and $H$ a subgroup of $G$. The left coset $gH$ and $G/H$ are as in the entry on cosets, the index $[G : H]$ is as in the entry on Lagrange's theorem, and the power $g^2 = gg$ is as in the entry on powers in a group. $A_4$, $C$ and $D$ are as in (5) of the entry on the alternating group.

1. (Subgroups of index $2$) If $[G : H] = 2$, then $g^2 \in H$ for every $g \in G$. Hence, if some $g \in G$ has $g^2 \notin H$, then the index of $H$ is not $2$.
2. ($A_4$) $A_4$ has no subgroup with $6$ elements.
3. (Converse of Lagrange's theorem) $|A_4| = 12$ and $6$ divides $12$, but $A_4$ has no subgroup with $6$ elements. Hence the statement "if $G$ is a finite group and $d$ is a natural number dividing $|G|$, then $G$ has a subgroup with $d$ elements" does not hold in general.
:::

## 직관

지표가 $2$이면 군이 $H$와 그 바깥, 두 덩어리로 나뉩니다. 바깥의 원소 $g$에 $g$를 곱하면 다시 바깥으로 갈 수는 없습니다. 그러면 $g = g^{-1} \cdot g^2$가 $H$에 들어가 버리기 때문입니다. 그래서 어느 원소든 제곱하면 $H$에 들어갑니다. 짝·홀로 말하면 "홀 곱하기 홀은 짝"과 같은 규칙입니다.

$A_4$에는 위수가 $3$인 원소가 여덟 개 있습니다. 위수가 $3$인 원소 $c$는 $c = c^4 = (c^2)^2$이므로 어떤 원소의 제곱입니다. 원소가 $6$개인 부분군은 지표가 $2$일 수밖에 없으니 제곱을 모두 포함해야 하고, 그러면 위수가 $3$인 여덟 원소와 항등원까지 아홉 개를 담아야 합니다. 여섯 자리에 아홉을 넣을 수는 없습니다.

## 증명

:::idea
(1) $g \notin H$이면 $gH$가 $H$의 바깥 전체이므로, $g^2$이 바깥에 있으면 $g^2 \in gH$에서 $g \in H$가 나와 어긋난다. (2) 원소가 $6$개인 $H$는 지표가 $2$이므로 (1)에 의해 $C$의 원소 $c = (c^2)^2$을 모두 포함한다.
:::

:::hint
$x \in gH$인 것은 정확히 $g^{-1}x \in H$일 때이다. $x = g^2$을 넣어 보라.
:::

:::hint
라그랑주 정리로 원소가 $6$개인 부분군의 지표를 구한다.
:::

:::proof
**(1)** $g \in G$라 하자. $g \in H$이면 $H$가 곱에 대해 닫혀 있으므로 $g^2 = gg \in H$이다. $g \notin H$라 하자. $G/H$가 원소를 $2$개 가지므로 [[index-two-subgroup-is-normal|지표가 2인 부분군]]의 (1)에 의해 $gH = G - H$이다. $g^2 \notin H$라고 하면 $g^2 \in G - H = gH$이고, [[left-coset|잉여류]]의 (3)에 의해 $g^{-1}g^2 \in H$이다. [[laws-of-exponents|지수법칙]]의 (1)에 의해 $g^{-1}g^2 = g^{-1+2} = g$이므로 $g \in H$가 되어 가정과 어긋난다. 따라서 $g^2 \in H$이다. 둘째 문장은 첫째 문장의 대우이다.

**(2)** $H$가 $A_4$의 부분군이고 원소를 $6$개 갖는다고 하자. [[alternating-group|교대군]]의 (5)에 의해 $A_4$는 원소가 $12$개인 유한군이고, [[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 $12 = [A_4 : H] \cdot 6$이며 $[A_4 : H]$는 정수 $x$에 대한 등식 $12 = x \cdot 6$을 만족하는 유일한 정수이다. $12 = 2 \cdot 6$이므로 $[A_4 : H] = 2$이다.

$c \in C$라 하자. 교대군의 (5)에 의해 $\operatorname{ord}(c) = 3$이므로 [[order-of-an-element|원소의 위수]]의 정의에 의해 $c^3 = i$이다. 지수법칙의 (1)과 (2)에 의해
$$(c^2)^2 = c^4 = c^3 c = ic = c$$
이다. (1)을 $g = c^2 \in A_4$에 쓰면 $c = (c^2)^2 \in H$이다. 따라서 $C \subseteq H$이고, 항등원 $i$도 $H$에 속하므로([[subgroup|부분군]]의 (1)) $\{i\} \cup C \subseteq H$이다.

교대군의 (5)에 의해 $\{i\} \cup C$는 서로 다른 아홉 치환으로 이루어지므로 원소를 $9$개 갖는다. [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $9 \le |H| = 6$이어야 하는데, $6 < 9$이므로 (L1)에 의해 이것은 거짓이다. 따라서 원소가 $6$개인 $A_4$의 부분군은 없다.

**(3)** 교대군의 (5)에 의해 $|A_4| = 12$이고, $12 = 6 \cdot 2$이므로 $6 \mid 12$이다([[divisibility|나누어떨어짐]]). (2)에 의해 $A_4$에는 원소가 $6$개인 부분군이 없으므로, 따옴표 안의 명제는 $G = A_4$, $d = 6$에서 거짓이다.
:::

## 예시와 반례

:::example[S₄의 지표가 2인 부분군 A₄]
[[alternating-group|교대군]]의 (2)에 의해 $[S_4 : A_4] = 2$입니다. (1)에 따르면 $S_4$의 모든 원소의 제곱이 $A_4$에 들어 있어야 하는데, 실제로 $g \in S_4$가 짝치환이든 홀치환이든 둘 다 같은 쪽인 $g$와 $g$의 곱 $g^2 = gg$는 [[parity-of-a-permutation|치환의 홀짝]]의 (4)에 의해 짝치환이므로 $A_4$에 들어 있습니다. 예컨대 $(1\ 2\ 3\ 4)$는 홀치환이지만 그 제곱은 $1, 2, 3, 4$를 $3, 4, 1, 2$로 보내는 $(1\ 3)(2\ 4) \in A_4$입니다.
:::

:::counterexample[지표가 3인 부분군 V의 예]
지표가 $2$라는 가정을 빼면 (1)의 결론은 깨질 수 있습니다. 교대군의 (6)의 $V = \{i\} \cup D$는 원소가 $4$개인 $A_4$의 부분군이므로, 라그랑주 정리의 (1)에 의해 $12 = [A_4 : V] \cdot 4$이고 $12 = 3 \cdot 4$에서 $[A_4 : V] = 3$입니다. $c = (1\ 2\ 3)$이면 $c^2 = cc$는 $1, 2, 3, 4$를 $c(2), c(3), c(1), c(4) = 3, 1, 2, 4$로 보내므로 $(1\ 3\ 2)$이고, 이것은 $C$의 원소라 교대군의 (5)에 의해 $V$의 어느 원소와도 다릅니다. 곧 $c^2 \notin V$입니다.
:::

## 확인 질문

:::check[$A_4$에 원소가 $3$개인 부분군이 있는가?]
있습니다. 예컨대 $c = (1\ 2\ 3)$이 생성하는 순환 부분군 $\langle c \rangle$는 $\operatorname{ord}(c) = 3$이므로 원소가 $3$개입니다([[order-of-cyclic-subgroup|순환 부분군의 크기]]). 지표는 $12 = x \cdot 3$에서 $4$이므로 (1)은 이 부분군에 대해 아무것도 말하지 않습니다.
:::

:::check[$S_3$에서 원소가 $3$개인 부분군은 몇 개인가?]
하나뿐이고, 그것은 $A_3$입니다. $H$가 원소가 $3$개인 $S_3$의 부분군이면 $|S_3| = 6$([[order-of-symmetric-group|대칭군의 원소의 개수]]의 (6))이므로 라그랑주 정리에 의해 $6 = [S_3 : H] \cdot 3$이고 $[S_3 : H] = 2$입니다. (1)에 의해 $H$는 모든 제곱을 포함합니다. $c = (1\ 2\ 3)$이면 $c^2$은 $1, 2, 3$을 $3, 1, 2$로 보내므로 $(1\ 3\ 2)$이고, $(1\ 3\ 2)^2$은 같은 계산으로 $(1\ 2\ 3)$입니다. 따라서 $A_3 = \{i, (1\ 2\ 3), (1\ 3\ 2)\} \subseteq H$이고([[alternating-group|교대군]]의 (4)), 원소의 개수가 같으므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $H = A_3$입니다. $A_3$은 교대군의 (1)에 의해 부분군이므로 그런 부분군이 실제로 있습니다.
:::
