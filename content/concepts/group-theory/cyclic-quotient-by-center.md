---
title: 중심에 대한 몫군이 순환군이면 아벨군이다
title_en: If G/Z(G) Is Cyclic, Then G Is Abelian
aliases: [G/Z(G)가 순환군이면 아벨군, 중심에 대한 몫군, quotient by the center, G/Z(G) cyclic implies abelian]
kind: theorem
field: group-theory
msc: ["20A05"]
level: undergrad
summary: "군 G의 중심 Z(G)에 대한 몫군 G/Z(G)가 순환군이면 G는 아벨군이다. 따라서 아벨군이 아닌 군에서 G/Z(G)는 순환군이 아니고, 유한군이면 지표 [G : Z(G)]는 1도 소수도 아니다."
requires: [group, subgroup-examples, power-in-a-group, laws-of-exponents, cyclic-subgroup, left-coset, lagrange-theorem, normal-subgroup, quotient-group, order-divides-group-order, subset-of-finite-set, prime-number, number-groups, symmetric-group, divisibility, division-theorem]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 10.4절 연습문제 13(d) p.131, 14.2절 Corollary 14.16 의 증명 p.172
    checked: original
    note: "(1)은 출처 10.4절 연습문제 13(d)(p.131, 'G/Z(G) 가 순환군이면 G 는 아벨군임을 보여라')이고 출처는 연습문제로만 둔다. 같은 계산이 출처 14.2절 Corollary 14.16(위수 p² 인 군은 아벨군)의 증명(p.172) 안에 있다: 생성원 aZ(G) 를 잡아 g = a^m x, h = a^n y (x, y ∈ Z(G)) 로 쓰고 'gh = a^m x a^n y = a^{m+n} xy = a^n y a^m x = hg' 로 끝낸다. 이 항목의 증명은 같은 발상이고, 출처가 괄호 없이 쓴 네 인수의 곱을 이 사이트의 약속대로 괄호를 쳐 한 단계씩 결합법칙과 중심의 정의로 옮겼다. 출처의 '생성원을 잡는다'는 순환군의 정의가 주는 존재 명제를 쓰는 것이다. (2)는 (1)의 대우와 소수 위수의 군이 순환군이라는 것(출처 6.2절 Corollary 6.12)을 합친 것이고, 출처는 Corollary 14.16 의 증명에서 'Z(G) 와 G/Z(G) 가 위수 p 이므로 순환군'이라 쓰며 이 꼴을 쓴다. (2)의 지표 꼴은 출처 14.5절 연습문제 23(p.180, 위수 pⁿ 인 비아벨군에서 |Z(G)| < p^{n−1})과 같은 갈래의 사실이다. Z(G) 가 정규부분군이라는 것은 출처 10.4절 연습문제 13(c)이고 이 사이트에서는 추상대수의 정규부분군 항목 (5)에 있다. 예시 '원소가 셋인 집합의 대칭군'이 쓰는 'S_X 는 아벨군이 아니다'는 출처 5.4절 연습문제 17(p.72, n ≥ 3 이면 S_n 은 비아벨군)과 같다. 확인 질문 '원소가 $6$개인 군 $G$가 아벨군이 아니면 $|Z(G)|$는 무엇인가?'의 답 |Z(G)| = 1 은 출처 10.4절 연습문제 13(a)(S₃ 의 중심을 구하라), 5.4절 연습문제 33(p.73, n ≥ 3 이면 S_n 의 중심은 자명), 14.2절 Example 14.12(p.171, S₃ 의 류 방정식 6 = 1 + 2 + 3)와 같은 결론을 원소가 6 개인 모든 비아벨군에 대해 얻는다. 반례 '중심 대신 다른 정규부분군이면 깨질 수 있다'는 출처 10.4절 연습문제 7, 9(H 와 G/H 가 아벨군·순환군이면 G 도 그런가를 묻는 문제)와 같은 갈래의 물음이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(아벨 코시의 귀납 통독, '출처는 정리로 진술하지 않는다' 를 검색으로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이라 하자. $Z(G)$는 [[subgroup-examples|부분군의 예]]의 (5)의 **중심** $\{a \in G : \text{모든 } g \in G\text{에 대하여 } ag = ga\}$이고, [[normal-subgroup|정규부분군]]의 (5)에 의해 $G$의 정규부분군이다. 몫군 $G/Z(G)$는 [[quotient-group|몫군]]의 것이고, 순환군과 생성원은 [[cyclic-subgroup|순환 부분군]]의 것이다.

1. (순환인 몫) 군 $G/Z(G)$가 순환군이면 $G$는 아벨군이다. 따라서 이때 $Z(G) = G$이다.
2. (대우와 지표) $G$가 아벨군이 아니면 군 $G/Z(G)$는 순환군이 아니다. 특히 $G$가 아벨군이 아닌 유한군이면 [[lagrange-theorem|지표]] $[G : Z(G)]$는 $1$이 아니고 소수도 아니다.
:::

:::english
Let $G$ be a group with identity $e$. Let $Z(G)$ be the **center** $\{a \in G : ag = ga \text{ for all } g \in G\}$ from item (5) of the entry on examples of subgroups; by item (5) of the entry on normal subgroups it is a normal subgroup of $G$. The quotient group $G/Z(G)$ is as in the entry on quotient groups, and cyclic groups and generators are as in the entry on cyclic subgroups.

1. (Cyclic quotient) If the group $G/Z(G)$ is cyclic, then $G$ is abelian. Hence in that case $Z(G) = G$.
2. (Contrapositive and index) If $G$ is not abelian, then the group $G/Z(G)$ is not cyclic. In particular, if $G$ is a finite group that is not abelian, then the index $[G : Z(G)]$ is neither $1$ nor a prime.
:::

## 직관

$G/Z(G)$가 순환군이면 $G$의 모든 원소는 "한 원소 $a$의 거듭제곱 하나"와 "중심의 원소 하나"의 곱으로 쓰입니다. $a$의 거듭제곱끼리는 서로 바뀌고, 중심의 원소는 정의에 의해 무엇과도 바뀝니다. 그래서 두 원소를 곱하는 순서를 바꿔도 결과가 같습니다. 줄을 서는 사람이 모두 "같은 집안"($a$의 거듭제곱)이거나 "누구와도 자리를 바꿔 주는 사람"(중심)이면 어떤 순서로 서도 같은 결과가 나오는 것과 비슷합니다. 비유의 "자리를 바꿔 주는 사람"이 중심의 정의 "모든 $g$에 대하여 $xg = gx$"에 해당합니다.

결론은 거꾸로 $Z(G) = G$, 곧 $G/Z(G)$가 원소 하나뿐인 군이라는 것입니다. 그래서 이 정리는 실제로는 "$G/Z(G)$는 원소가 하나뿐이거나 순환군이 아니다"라는 뜻으로 쓰입니다. 유한군에서는 원소의 개수가 소수인 군이 순환군이므로, 아벨군이 아닌 유한군의 중심의 지표는 $1$도 소수도 될 수 없습니다((2)).

## 증명

:::idea
$aZ(G)$가 생성원이면 모든 $g$에 대해 $gZ(G) = a^m Z(G)$이므로 $g = a^m x$인 $x \in Z(G)$가 있다. 두 원소 $g = a^m x$, $h = a^n y$의 곱을 결합법칙과 중심의 정의로 $a^{m+n}(xy)$로 모으면 $hg$와 같아진다.
:::

:::hint
$a^m Z(G) = gZ(G)$이면 [[left-coset|잉여류]]의 (3)에 의해 $(a^m)^{-1} g \in Z(G)$입니다. 이 원소를 $x$라 하면 $g = a^m x$입니다.
:::

:::hint
$x \in Z(G)$이므로 $x a^n = a^n x$입니다. 이것으로 $(a^m x)(a^n y)$에서 $x$를 오른쪽으로 옮깁니다.
:::

:::proof
$Z = Z(G)$로 줄여 쓴다. [[normal-subgroup|정규부분군]]의 (5)에 의해 $Z$는 $G$의 정규부분군이므로 몫군 $G/Z$가 있고, [[quotient-group|몫군]]의 (2)에 의해 그 곱은 $(bZ)(cZ) = (bc)Z$이다.

**(1)** $G/Z$가 순환군이라 하자. [[cyclic-subgroup|순환 부분군]]의 (6)에 의해 $G/Z = \langle C \rangle$인 $C \in G/Z$가 있고, $G/Z$의 정의([[left-coset|잉여류]])에 의해 $C = aZ$인 $a \in G$가 있다.

*모든 $g \in G$는 $a^m x$($m$은 정수, $x \in Z$) 꼴이다.* $g \in G$이면 $gZ \in G/Z = \langle aZ \rangle$이므로 $gZ = (aZ)^m$인 정수 $m$이 있고, 몫군의 (3)에 의해 $(aZ)^m = a^m Z$이다. 따라서 $a^m Z = gZ$이고, 잉여류의 (3)의 (i)과 (iv)의 동치에 의해 $x = (a^m)^{-1} g \in Z$이다. 그러면 $a^m x = a^m ((a^m)^{-1} g) = (a^m (a^m)^{-1}) g = eg = g$이다.

*교환.* $g, h \in G$라 하자. 위에 의해 $g = a^m x$, $h = a^n y$인 정수 $m$, $n$과 $x, y \in Z$가 있다. [[group|군]]의 결합법칙을 한 단계씩 쓰고, $x \in Z$이므로 $x a^n = a^n x$라는 것([[subgroup-examples|부분군의 예]]의 (5)의 중심의 정의)과 [[laws-of-exponents|지수법칙]]의 (1)을 쓰면
$$
\begin{aligned}
gh &= (a^m x)(a^n y) = a^m \bigl(x (a^n y)\bigr) \\
&= a^m \bigl((x a^n) y\bigr) = a^m \bigl((a^n x) y\bigr) \\
&= a^m \bigl(a^n (x y)\bigr) = (a^m a^n)(x y) \\
&= a^{m+n} (x y)
\end{aligned}
$$
이다. $g$와 $h$, $m$과 $n$, $x$와 $y$의 자리를 바꾸어 같은 계산을 하면 ($y \in Z$이므로 $y a^m = a^m y$)
$$
\begin{aligned}
hg &= (a^n y)(a^m x) = a^n \bigl(y (a^m x)\bigr) \\
&= a^n \bigl((y a^m) x\bigr) = a^n \bigl((a^m y) x\bigr) \\
&= a^n \bigl(a^m (y x)\bigr) = (a^n a^m)(y x) \\
&= a^{n+m} (y x)
\end{aligned}
$$
이다. $m + n = n + m$이고, $x \in Z$이므로 $xy = yx$이다. 따라서 $gh = hg$이다. $g$, $h$는 임의였으므로 $G$는 아벨군이고, 부분군의 예의 (5)에 의해 $Z(G) = G$이다.

**(2)** 첫 문장은 (1)의 대우이다. $G$가 아벨군이 아닌 유한군이라 하자. 몫군의 (5)에 의해 $G/Z$는 유한군이고 $|G/Z| = [G : Z]$이다.
- $[G : Z] = 1$이면 $G/Z$는 원소가 하나이다. 몫군의 (2)에 의해 $eZ \in G/Z$이고 $\{eZ\}$도 원소가 하나이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 2에 의해 $G/Z = \{eZ\}$이다. 순환 부분군의 (1)에 의해 $eZ \in \langle eZ \rangle \subseteq G/Z = \{eZ\}$이므로 $G/Z = \langle eZ \rangle$는 순환군이다. 이는 첫 문장에 어긋난다.
- $[G : Z]$가 소수이면 $G/Z$는 원소의 개수가 소수인 유한군이므로 [[order-divides-group-order|원소의 위수와 군의 위수]]의 (3)에 의해 순환군이다. 이는 첫 문장에 어긋난다.

따라서 $[G : Z]$는 $1$도 소수도 아니다. $\blacksquare$
:::

## 예시와 반례

:::example[아벨군의 경우]
$G$가 아벨군이면 [[subgroup-examples|부분군의 예]]의 (5)에 의해 $Z(G) = G$이고, [[quotient-group|몫군]]의 (7)에 의해 $G/Z(G) = G/G = \{G\}$는 원소가 하나인 군입니다. 이 군은 그 항등원이 생성하는 순환군입니다. 예를 들어 $(\mathbb{Z}, +)$에서 $\mathbb{Z}/Z(\mathbb{Z}) = \{\mathbb{Z}\}$입니다. 정리 (1)의 결론 "$Z(G) = G$"는 이 모습만 가능하다는 뜻입니다.
:::

:::example[원소가 셋인 집합의 대칭군]
$X$가 서로 다른 세 원소를 갖는 집합이면 [[symmetric-group|대칭군]] $S_X$는 [[cyclic-subgroup|순환 부분군]]의 (7)에 의해 아벨군이 아닙니다. 따라서 (2)에 의해 $S_X / Z(S_X)$는 순환군이 아닙니다. 중심을 직접 구하지 않고도 이것을 압니다.
:::

:::counterexample[중심 대신 다른 정규부분군이면 깨질 수 있다]
정리는 몫을 중심으로 만든 것에 대한 것입니다. $X$가 서로 다른 세 원소를 갖는 집합이고 $G = S_X$, $N = G$이면, $N$은 $G$의 정규부분군이고([[normal-subgroup|정규부분군]]의 (2)) $G/N = \{G\}$는 원소가 하나인 순환군입니다([[quotient-group|몫군]]의 (7)). 그런데 $G$는 아벨군이 아닙니다. 증명에서 $x \in Z(G)$가 모든 원소와 바뀐다는 것을 썼는데, $N = G$의 원소는 그렇지 않습니다.
:::

## 확인 질문

:::check[원소가 $6$개인 군 $G$가 아벨군이 아니면 $|Z(G)|$는 무엇인가?]
$1$입니다. [[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 $6 = [G : Z(G)] \cdot |Z(G)|$이고 $|Z(G)|$는 $6$의 양의 약수입니다. $6$의 양의 약수는 $6$ 이하이고([[prime-number|소수]]의 진술), $6 = 4 \cdot 1 + 2 = 5 \cdot 1 + 1$이므로 [[division-theorem|나눗셈 정리]]의 나머지의 유일성에 의해 $4$와 $5$는 약수가 아니어서, $|Z(G)|$는 $1$, $2$, $3$, $6$ 가운데 하나입니다. 이에 따라 $[G : Z(G)]$는 차례로 $6$, $3$, $2$, $1$입니다. $2$와 $3$은 소수입니다(양의 약수는 자기 이하이고, $3 = 2 \cdot 1 + 1$이므로 $2 \nmid 3$). (2)에 의해 $[G : Z(G)]$는 $1$도 소수도 아니므로 $3$, $2$, $1$이 빠지고 $|Z(G)| = 1$입니다.
:::

:::check[$G/Z(G) = \langle aZ(G) \rangle$이면 $G = \langle a \rangle$인가?]
그렇지 않을 수 있습니다. $(\mathbb{Z}, +)$는 아벨군이므로 $Z(\mathbb{Z}) = \mathbb{Z}$이고, 원소가 하나인 군 $\mathbb{Z}/\mathbb{Z} = \{\mathbb{Z}\}$는 그 원소 $0 + \mathbb{Z} = \mathbb{Z}$가 생성합니다. [[cyclic-subgroup|순환 부분군]]의 (1)에 의해 $\langle 0 + \mathbb{Z} \rangle$는 $0 + \mathbb{Z}$를 포함하는 $\mathbb{Z}/\mathbb{Z}$의 부분집합이므로 $\mathbb{Z}/\mathbb{Z}$ 전체이기 때문입니다. 곧 $a = 0$에서 $G/Z(G) = \langle aZ(G) \rangle$입니다. 그런데 $\langle 0 \rangle = \{0\}$은 $\mathbb{Z}$가 아닙니다([[cyclic-subgroup|순환 부분군]]의 (4)). 증명이 보인 것은 모든 원소가 $a^m$ 자체가 아니라 $a^m x$($x \in Z(G)$) 꼴이라는 것입니다.
:::
