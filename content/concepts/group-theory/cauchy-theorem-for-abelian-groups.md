---
title: 아벨군의 코시 정리
title_en: Cauchy's Theorem for Abelian Groups
aliases: [아벨군에 대한 코시 정리, Cauchy's theorem for abelian groups, abelian Cauchy theorem]
kind: theorem
field: group-theory
msc: ["20K01", "20D99"]
level: undergrad
summary: 유한 아벨군 G의 원소의 개수를 소수 p가 나누면 G에는 위수가 p인 원소가 있고, 따라서 원소가 p개인 부분군이 있다. 원소의 개수에 대한 강한 귀납과 몫군으로 증명한다.
requires: [prime-number, divisibility, euclids-lemma, strong-induction, finite-set, number-of-elements-is-unique, greatest-common-divisor, group, power-in-a-group, cyclic-subgroup, order-of-an-element, order-of-a-power, order-of-cyclic-subgroup, order-divides-group-order, left-coset, normal-subgroup, quotient-group, number-groups, integers-modulo-n, group-of-units-modulo-n, congruence-modulo-n, equivalence-classes-equal-iff-related, well-ordering-principle, even-and-odd, division-theorem]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 13.1절 Finite Abelian Groups, Lemma 13.6 p.160 (뒤 문단의 Theorem 15.1 과의 관계 p.160)
    checked: original
    note: "진술 (1)은 출처 Lemma 13.6(p.160, '위수 n 인 유한 아벨군 G 와 n 을 나누는 소수 p 에 대해 G 에는 위수 p 인 원소가 있다')과 같다. 출처의 증명도 위수에 대한 귀납이지만 길이 다르다: 자명하지 않은 진부분군이 없으면 G 의 위수가 소수라 하고('By Exercise 4.5.39' — 그 내용은 이 사이트의 추상대수 '원소의 위수와 군의 위수' (4)에 있다), 있으면 진부분군 H 를 잡아 p | |H| 이면 귀납, 아니면 G/H 에서 위수 p 인 aH 를 얻은 뒤 sp + tr = 1(r = |H|)인 정수로 a^r 의 위수가 p 임을 보인다. 이 항목은 진부분군을 잡는 대신 e 가 아닌 원소 a 가 생성하는 ⟨a⟩ 로 나누고, p | ord(a) 이면 a 의 거듭제곱에서, 아니면 G/⟨a⟩ 에서 얻은 bN 의 위수 p 가 ord(b) 를 나눈다는 것으로 b 의 거듭제곱에서 원소를 얻는다. 몫으로 내려가 귀납 가정을 쓰는 발상은 출처와 같다. 출처는 바로 뒤 문단(p.160)에서 이 보조정리가 코시 정리(Theorem 15.1)의 특수한 경우라고 적는다. (2)의 부분군 꼴은 출처 Theorem 15.1 의 결론('위수 p 인 부분군')과 같은 꼴이다. 같은 진술을 출처 9.4절 연습문제 20(p.123, '위수가 3 으로 나누어지는 모든 아벨군은 위수 3 인 부분군을 갖는가')이 p = 3 에서 묻고, 13.4절 연습문제 6(p.166, 위수 m 인 아벨군과 m 의 약수 n 에 대해 위수 n 인 부분군)이 더 일반적인 꼴을 묻는다. 예시 '$U(8)$과 소수 $2$'의 군 U(8) = {1, 3, 5, 7} 은 출처 3.2절 Example 3.11 의 Figure 3.12(p.35, U(8) 의 곱셈표), 9.1절 Example 9.4(p.115, U(8) = {1, 3, 5, 7}), 9.2절 Example 9.24(p.120)에 나오는 군이고, 위수 2 인 원소가 셋이라는 것은 그 곱셈표의 대각선이 모두 1 이라는 것과 같은 계산이다. 반례 '소수가 아닌 약수에서는 깨질 수 있다'의 결론(U(8) 에 위수 4 인 원소가 없다, 곧 U(8) 은 순환군이 아니다)은 출처 4.5절 연습문제 1(b)(p.55, 'U(8) 은 순환군이다'의 참·거짓)와 9.4절 연습문제 3(p.121, U(8) ≅ ℤ₄ 인가)이 묻는 것과 같다. 확인 질문 '원소가 $15$개인 아벨군에는 위수가 $3$인 원소와 위수가 $5$인 원소가 있는가?'의 군은 출처 15.2절 Example 15.11(p.184, 원소가 15 개인 모든 군은 순환군)의 군과 원소의 개수가 같고, 그 예에서도 위수가 3, 5 인 원소가 있다는 결론이 따라 나온다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(아벨 코시의 귀납 통독, '출처는 정리로 진술하지 않는다' 를 검색으로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$G$가 유한 [[group|군]]이고 아벨군이며 $e$가 그 항등원이라 하자. 원소의 위수와 $\operatorname{ord}(a)$는 [[order-of-an-element|원소의 위수]]의 것이고, $\langle a \rangle$는 [[cyclic-subgroup|순환 부분군]]의 것이다. $p$는 [[prime-number|소수]]이다.

1. (위수가 $p$인 원소) $p \mid |G|$이면 $\operatorname{ord}(a) = p$인 $a \in G$가 있다.
2. (원소가 $p$개인 부분군) $p \mid |G|$이면 원소가 $p$개인 $G$의 부분군이 있다. 곧 (1)의 $a$에 대하여 $|\langle a \rangle| = p$이다.
:::

:::english
Let $G$ be a finite abelian group with identity $e$. The order of an element and $\operatorname{ord}(a)$ are as in the entry on the order of an element, and $\langle a \rangle$ is as in the entry on cyclic subgroups. Let $p$ be a prime.

1. (An element of order $p$) If $p \mid |G|$, then there is $a \in G$ with $\operatorname{ord}(a) = p$.
2. (A subgroup with $p$ elements) If $p \mid |G|$, then $G$ has a subgroup with $p$ elements; namely, $|\langle a \rangle| = p$ for the element $a$ of (1).
:::

## 직관

[[order-divides-group-order|원소의 위수와 군의 위수]]는 원소의 위수가 $|G|$를 나눈다고 말합니다. 이 정리는 아벨군에서 그 거꾸로의 한 조각, 곧 $|G|$를 나누는 **소수**마다 그 위수를 갖는 원소가 실제로 있다는 것을 말합니다. 위수가 $p$의 배수인 원소를 하나 찾으면 그 거듭제곱에서 위수가 정확히 $p$인 원소를 얻을 수 있으므로, 문제는 "위수가 $p$의 배수인 원소"를 찾는 것으로 바뀝니다.

$e$가 아닌 원소 $a$를 하나 보면, 그 위수가 $p$의 배수이거나 아닙니다. 아니면 $a$가 생성하는 부분군으로 나눈 더 작은 몫군으로 내려가서 찾고, 몫군에서 찾은 원소를 다시 $G$로 끌어올립니다. 큰 상자에서 물건을 찾다가 상자를 칸막이로 나누어 칸 단위로 찾는 것과 비슷합니다. 비유의 "칸"이 잉여류 $bN$이고, 칸 단위로 찾은 것이 몫군의 원소 $bN$의 위수 $p$이며, "칸 안의 실제 물건"이 $b$입니다. $b$의 위수는 $p$의 배수가 되어(증명의 경우 2) 처음의 경우로 돌아갑니다. 아벨군이라는 가정은 이 끌어올리기의 두 곳에서 쓰입니다. $\langle a \rangle$가 정규부분군이어야 몫군이 있는데 아벨군에서는 모든 부분군이 정규부분군이고, 더 작은 몫군도 아벨군이어야 같은 명제(귀납 가정)를 쓸 수 있는데 아벨군의 몫군은 아벨군입니다.

## 증명

:::idea
원소의 개수 $n$에 대한 강한 귀납이다. $e$가 아닌 $a$의 위수 $k$를 $p$가 나누면 $a$의 거듭제곱으로 끝난다. 나누지 않으면 $p$가 몫군 $G/\langle a \rangle$의 원소의 개수를 나누고 그 개수는 $n$보다 작으므로, 귀납 가정으로 위수 $p$인 $b\langle a \rangle$를 얻고 $b$의 위수가 $p$의 배수임을 보인다.
:::

:::hint
$p \mid k$이고 $k = p \cdot k'$이면 [[order-of-a-power|거듭제곱의 위수]]의 (4)에 의해 $\operatorname{ord}(a^{k'}) = p$입니다.
:::

:::hint
몫군에서 $(bN)^{\operatorname{ord}(b)} = b^{\operatorname{ord}(b)} N = eN$이므로 $bN$의 위수 $p$는 $\operatorname{ord}(b)$를 나눕니다.
:::

:::proof
정수에 관하여 [[prime-number|소수]]의 진술의 (Z1)–(Z3)과 [[well-ordering-principle|정렬 원리]]의 진술의 (Z5)–(Z7), (L1), 그리고 거기서 받아들인 계산 법칙을 쓴다. 소수는 $1$이 아닌 자연수이므로 (Z5)와 (Z1)에 의해 $p \ge 2$이다. "위수의 ($k$)"는 [[order-of-an-element|원소의 위수]]의 ($k$)이다.

**보조 사실 (가).** 군 $G$의 원소 $a$의 위수가 유한하고 $p \mid \operatorname{ord}(a)$이면 위수가 $p$인 원소가 있다. 실제로 $k = \operatorname{ord}(a) = p \cdot k'$인 정수 $k'$이 있고, $k$와 $p$가 양수이므로 $k' \le 0$이면 (Z2)에 의해 $p \cdot k' \le 0$이 되어 어긋나므로 $k'$은 자연수이다. $k = k' \cdot p$이므로 $k' \mid k$이고, [[order-of-a-power|거듭제곱의 위수]]의 (4)를 $d = k'$에 쓰면(그 항목의 $\operatorname{ord}(a) = d \cdot n'$에서 $n' = p$) $\operatorname{ord}(a^{k'}) = p$이다.

**(1)** 자연수 $n$에 대한 명제 $S_n$: "원소가 $n$개인 모든 유한 아벨군 $G$와 $n$을 나누는 모든 소수 $p$에 대하여, $\operatorname{ord}(a) = p$인 $a \in G$가 있다"를 [[strong-induction|강한 귀납법]](시작점 $1$, 기초 단계 하나)으로 보인다.

*기초 단계 $n = 1$.* 소수 $p$가 $1$을 나누면, $1$의 양의 약수는 $1$ 이하이므로(소수의 진술) $p \le 1$이 되어 $p \ge 2$와 함께 (L1)에 어긋난다. 따라서 $1$을 나누는 소수는 없고 $S_1$은 참이다.

*귀납 단계.* $n \ge 2$이고 $S_1, \dots, S_{n-1}$이 참이라 하자. $G$가 원소가 $n$개인 아벨군이고 $p$가 $n$을 나누는 소수라 하자.

$G$의 원소가 모두 $e$라면 $G \subseteq \{e\}$이고 $e \in G$이므로 $G = \{e\}$가 되어, [[number-of-elements-is-unique|원소의 개수]]의 유일성에 의해 $n = 1$이 되므로 어긋난다. 따라서 $a \ne e$인 $a \in G$가 있다. 이런 $a$ 하나에 대해 다음을 보인다. 위수의 (6)에 의해 $a$의 위수는 유한하고, $k = \operatorname{ord}(a)$라 하자. 위수의 (1)에 의해 $k \ne 1$이므로 (Z5)와 (Z1)에 의해 $k \ge 2$이다.

- 경우 1: $p \mid k$. 보조 사실 (가)에 의해 위수가 $p$인 원소가 있다.
- 경우 2: $p \nmid k$. $N = \langle a \rangle$로 둔다. [[cyclic-subgroup|순환 부분군]]의 (1)에 의해 $N$은 $G$의 부분군이고, $G$가 아벨군이므로 [[normal-subgroup|정규부분군]]의 (3)에 의해 정규부분군이다. [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (3)에 의해 $|N| = k$이고, [[quotient-group|몫군]]의 (5)에 의해 $G/N$은 유한군이며 $n = |G/N| \cdot k$이다. 몫군의 (4)에 의해 $G/N$은 아벨군이다. $n' = |G/N|$이라 하자. $G/N$은 군이므로 공집합이 아니고 $n' \ge 1$이다.
  - $p \mid n = n' \cdot k$이고 $p \nmid k$이므로 [[euclids-lemma|유클리드 보조정리]]의 (1)에 의해 $p \mid n'$이다.
  - $k \ge 2$이고 $n' \ge 1 > 0$이므로 (Z3)에 의해 $n = n' \cdot k \ge n' \cdot 2 = n' + n'$이고, (Z7)에 의해 $n' + n' > n'$이다. 따라서 $1 \le n' < n$이고 (Z1)에 의해 $n' \le n - 1$이다.

  귀납 가정 $S_{n'}$을 아벨군 $G/N$과 소수 $p$에 쓰면, $G/N$에 위수가 $p$인 원소가 있다. [[left-coset|잉여류]]의 $G/N$의 정의에 의해 그 원소는 $bN$($b \in G$) 꼴이다. 위수의 (6)에 의해 $b$의 위수는 유한하고, $s = \operatorname{ord}(b)$라 하자. 몫군의 (3)에 의해 $(bN)^s = b^s N = eN$이고, 몫군의 (2)에 의해 $eN$은 $G/N$의 항등원이다. 위수의 (2)를 군 $G/N$의 원소 $bN$에 쓰면 $p = \operatorname{ord}(bN)$은 $s$를 나눈다. 보조 사실 (가)를 $b$에 쓰면 위수가 $p$인 원소가 있다.

두 경우 모두 $G$에 위수가 $p$인 원소가 있으므로 $S_n$이 참이다. 강한 귀납법에 의해 모든 자연수 $n$에서 $S_n$이 참이다. [[group|군]]의 (4)에 의해 $G$는 공집합이 아니므로 [[finite-set|유한집합]]의 (F2)에 의해 $|G| \ne 0$이고, $|G|$는 자연수이다. 따라서 (1)이 성립한다.

**(2)** (1)의 $a$에 대하여 순환 부분군의 (1)에 의해 $\langle a \rangle$는 $G$의 부분군이고, 순환 부분군의 크기의 (3)에 의해 $|\langle a \rangle| = \operatorname{ord}(a) = p$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$U(8)$과 소수 $2$]
[[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $\mathbb{Z}_8$의 원소는 서로 다른 $[0], [1], \dots, [7]$입니다. $a$가 짝수 $2s$이면 $2$가 $a$와 $8 = 2 \cdot 4$의 공약수이므로 [[greatest-common-divisor|최대공약수]]의 정의에 의해 $\gcd(a, 8) \ge 2$이고, [[group-of-units-modulo-n|법 n의 단원군]]의 (1)에 의해 $[a] \notin U(8)$입니다. $[1][1] = [1]$, $[3][3] = [9] = [1]$, $[5][5] = [25] = [1]$, $[7][7] = [49] = [1]$이므로($9 - 1 = 8 \cdot 1$, $25 - 1 = 8 \cdot 3$, $49 - 1 = 8 \cdot 6$) 단원군의 (3)에 의해 이 넷은 $U(8)$에 있습니다. 따라서 $U(8) = \{[1], [3], [5], [7]\}$이고 $|U(8)| = 4$입니다. 단원군의 (2)에 의해 $U(8)$은 아벨군이고 항등원은 $[1]$입니다.

$2 \mid 4$이므로 (1)에 의해 위수가 $2$인 원소가 있습니다. 실제로 [[power-in-a-group|군의 거듭제곱]]의 (1)의 $x^2 = xx$와 위의 계산에서 $[3]$, $[5]$, $[7]$은 $[1]$이 아니고 제곱이 $[1]$이므로 셋 모두 위수가 $2$입니다. 이 정리는 그런 원소가 하나 **있다**는 것만 말하고 몇 개인지는 말하지 않습니다.
:::

:::example[$p$가 $|G|$를 나누지 않는 경우]
$p \nmid |G|$이면 위수가 $p$인 원소는 없습니다. 그런 원소 $a$가 있다면 [[order-divides-group-order|원소의 위수와 군의 위수]]의 (1)에 의해 $p = \operatorname{ord}(a) \mid |G|$이기 때문입니다. 예를 들어 $(\mathbb{Z}_6, +)$는 원소가 $6$개이고($6 = 5 \cdot 1 + 1$이므로 [[division-theorem|나눗셈 정리]]의 나머지의 유일성에 의해 $5 \nmid 6$) 위수가 $5$인 원소가 없습니다. 그래서 (1)의 가정 "$p \mid |G|$"는 위수가 $p$인 원소가 있을 조건과 정확히 같습니다.
:::

:::counterexample[소수가 아닌 약수에서는 깨질 수 있다]
(1)은 $|G|$를 나누는 **소수**에 대한 것입니다. $U(8)$에서 $4 \mid |U(8)| = 4$이지만, 위 예시에서 본 대로 $[1]$이 아닌 세 원소의 위수는 모두 $2$이고 [[order-of-an-element|원소의 위수]]의 (1)에 의해 $\operatorname{ord}([1]) = 1$이므로 위수가 $4$인 원소는 없습니다. 증명에서 $p$가 소수라는 것은 [[euclids-lemma|유클리드 보조정리]]로 $p \mid n' \cdot k$, $p \nmid k$에서 $p \mid n'$을 얻는 단계에서 쓰였습니다.
:::

## 확인 질문

:::check[원소가 $15$개인 아벨군에는 위수가 $3$인 원소와 위수가 $5$인 원소가 있는가?]
있습니다. $15 = 3 \cdot 5$이므로 $3 \mid 15$이고 $5 \mid 15$입니다. $3$과 $5$는 소수입니다(양의 약수는 자기 이하이고, $3 = 2 \cdot 1 + 1$, $5 = 2 \cdot 2 + 1 = 3 \cdot 1 + 2 = 4 \cdot 1 + 1$에서 [[division-theorem|나눗셈 정리]]의 나머지의 유일성에 의해 $1$과 자기 자신 밖의 약수가 없습니다). (1)을 $p = 3$과 $p = 5$에 쓰면 됩니다.
:::

:::check[원소가 $8$개인 아벨군에 위수가 $2$인 원소가 하나도 없을 수 있는가?]
없습니다. $8 = 2 \cdot 4$이므로 $2 \mid 8$이고, $2$는 소수이므로 (1)에 의해 위수가 $2$인 원소가 있습니다.
:::
