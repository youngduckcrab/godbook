---
title: 코시 정리
title_en: Cauchy's Theorem
aliases: [코시의 정리, Cauchy's theorem, Cauchy theorem for finite groups]
kind: theorem
field: group-theory
msc: ["20D20", "20D15"]
level: undergrad
summary: 유한군 G의 원소의 개수를 소수 p가 나누면 G에는 위수가 p인 원소와 원소가 p개인 부분군이 있다. 따라서 유한군이 p-군인 것은 정확히 모든 원소의 위수가 p의 거듭제곱일 때이다. 원소의 개수에 대한 강한 귀납과 류 방정식으로 증명한다.
requires: [prime-number, divisibility, euclids-lemma, strong-induction, well-ordering-principle, even-and-odd, subset-of-finite-set, prime-power-divisors, group, subgroup, subgroup-examples, lagrange-theorem, cyclic-subgroup, order-of-an-element, order-of-cyclic-subgroup, centralizer-and-normalizer, class-equation, p-group, cauchy-theorem-for-abelian-groups, alternating-group, a4-has-no-subgroup-of-order-6]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 15.1절 The Sylow Theorems, Theorem 15.1 p.181(증명 p.181–182), Corollary 15.2 p.182; 13.1절 Finite Abelian Groups, Lemma 13.7 p.160
    checked: original
    note: "진술 (1)은 출처 Theorem 15.1(p.181, '유한군 G 의 위수를 소수 p 가 나누면 G 에는 위수 p 인 부분군이 있다')과 같고, 출처의 증명은 위수 p 인 원소가 있다는 것을 보인다. 출처의 증명도 위수에 대한 귀납과 류 방정식 |G| = |Z(G)| + [G : C(x₁)] + ⋯ + [G : C(x_k)] 로 두 경우를 나누지만, 원소가 둘 이상인 켤레류마다 대표 x_i 를 하나씩 둔다(p.181–182, 그 쪽을 그림으로 확인했다). 이 항목은 대표를 두지 않고 'Z(G) 밖의 어떤 a 에서 p 가 |C_G(a)| 를 나누는가'로 두 경우를 나누고, 류 방정식은 이 강의의 '류 방정식' (5)의 합동 꼴로 쓴다. 출처는 귀납 가정을 'p ≤ k < n 이고 p 가 k 를 나누는 위수 k 인 모든 군에 위수 p 인 원소가 있다'로 적고 시작을 '|G| = p 이면 G 자신이 그 부분군'으로 둔다. 이 항목은 모든 자연수 n 에 대한 명제의 강한 귀납으로 쓴다. 출처는 경우 2 에서 Z(G) 에 위수 p 인 부분군이 있다는 것을 유한 아벨군의 기본정리(Fundamental Theorem of Finite Abelian Groups)로 얻는다(p.182). 이 항목은 그 자리에 출처 Lemma 13.6 에 해당하는 '아벨군의 코시 정리'를 쓴다. 출처는 p.160 에서 Lemma 13.6 이 이 정리의 특수한 경우라고 적는다. (1)을 p = 2 에 쓴 것을 출처 3.5절 연습문제 32(p.42, 원소의 개수가 짝수인 유한군에는 a ≠ e 이고 a² = e 인 a 가 있다)와 6.5절 연습문제 16(p.79, |G| = 2n 이면 위수 2 인 원소의 개수가 홀수이고 위수 2 인 부분군이 있다)이 묻고, 원소가 2p 개(p 는 홀수인 소수)인 군에 위수 p 인 원소와 위수 2 인 원소가 있다는 것을 9.4절 연습문제 55 (c), (d)(p.124)가 묻는다. (2)의 (i)⇔(ii)는 출처 Corollary 15.2(p.182, '유한군 G 가 p-군인 것은 정확히 |G| = pⁿ 일 때')와 같은 내용이다. 출처의 p-군은 '모든 원소의 위수가 p 의 거듭제곱인 군'(p.181. 13.1절 p.159 에도 같은 정의)이고 이 강의의 p-군은 원소의 개수로 정의하므로(지휘자 결정), 두 쪽의 정의와 결론이 자리를 바꾸었다. 출처는 Corollary 15.2 에 증명을 붙이지 않는다(p.182, 그림으로 확인했다). 아벨군에 대한 같은 동치가 출처 Lemma 13.7(p.160)이고, 그 증명(한쪽은 라그랑주 정리, 다른 쪽은 |G| 가 p 의 거듭제곱이 아니면 p 와 다른 소인수 q 가 있어 Lemma 13.6 으로 위수 q 인 원소를 얻는다)은 이 항목의 (2)의 증명과 같은 길이다. (2)의 (iii)은 그 증명이 쓰는 'p 와 다른 소인수' 의 꼴이다. (3)의 오른쪽 조건은 출처의 p-부분군의 정의(p.181, 'p-군인 부분군'을 출처의 p-군의 정의로 읽은 것)와 같다. 예시 '$A_4$의 원소의 위수'는 출처 Example 15.3(p.182, |A₅| = 60 = 2²·3·5 이므로 코시 정리로 A₅ 에 위수 2, 3, 5 인 부분군이 있다)과 같은 발상을 A₄ 에 쓴 것이고, A₄ 의 열두 원소는 출처 Example 5.18(p.65)에 나열되어 있다. 반례 '약수 $6$과 $A_4$'의 결론은 출처 Remark 6.14 와 Proposition 6.15(p.76, A₄ 에는 위수 6 인 부분군이 없어 라그랑주 정리의 역이 성립하지 않는다)와 같다. 확인 질문 '모든 원소의 위수가 $1$이거나 $3$인 유한군의 원소의 개수는 어떤 꼴이어야 하는가?'는 출처 Corollary 15.2 를 p = 3 에 쓴 것과 같다. 확인 질문 '$G$가 아벨군이면 (1)의 증명의 두 경우 가운데 어느 것이 일어나는가?'는 출처 p.160 이 Lemma 13.6 을 이 정리의 특수한 경우라고 적는 것과 같은 관찰이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(제1 정리 강한 꼴의 고정점 단계 대조, 코시 정리의 두 경우와 p-군 동치 (2) 확인). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$G$가 유한 [[group|군]]이고 $e$가 그 항등원이며 $p$가 [[prime-number|소수]]라 하자. 원소의 위수와 $\operatorname{ord}(a)$는 [[order-of-an-element|원소의 위수]]의 것이고, $G$가 유한군이므로 그 항목의 (6)에 의해 $G$의 모든 원소의 위수는 유한하다. $\langle a \rangle$는 [[cyclic-subgroup|순환 부분군]]의 것이다. $0$ 이상인 정수 $k$에 대한 거듭제곱 $p^k$와 나누어떨어짐은 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 것이고, $p$-군과 $p$-부분군은 [[p-group|p-군]]의 것이다.

1. (코시 정리) $p \mid |G|$이면 $\operatorname{ord}(a) = p$인 $a \in G$가 있다. 이 $a$에 대하여 $\langle a \rangle$는 원소가 $p$개인 $G$의 부분군이다.
2. ($p$-군의 판정) 다음 세 조건은 서로 동치이다.
   - (i) $G$는 $p$-군이다.
   - (ii) $G$의 모든 원소 $a$에 대하여 $\operatorname{ord}(a) = p^k$인 $0$ 이상인 정수 $k$가 있다.
   - (iii) $|G|$를 나누는 모든 소수 $q$에 대하여 $q = p$이다.
3. ($p$-부분군의 판정) $H$가 $G$의 [[subgroup|부분군]]이면, $H$가 $G$의 $p$-부분군인 것은 정확히 $H$의 모든 원소 $a$에 대하여 $\operatorname{ord}(a) = p^k$인 $0$ 이상인 정수 $k$가 있을 때이다.
:::

:::english
Let $G$ be a finite group with identity $e$, and let $p$ be a prime. The order of an element and $\operatorname{ord}(a)$ are as in the entry on the order of an element; since $G$ is finite, item (6) of that entry shows that every element of $G$ has finite order. The subgroup $\langle a \rangle$ is as in the entry on cyclic subgroups. For an integer $k \ge 0$, the power $p^k$ and divisibility are as in the entry on powers of a prime and their divisors, and $p$-groups and $p$-subgroups are as in the entry on $p$-groups.

1. (Cauchy's theorem) If $p \mid |G|$, then there is $a \in G$ with $\operatorname{ord}(a) = p$. For this $a$, $\langle a \rangle$ is a subgroup of $G$ with $p$ elements.
2. (A criterion for $p$-groups) The following three conditions are equivalent.
   - (i) $G$ is a $p$-group.
   - (ii) For every element $a$ of $G$ there is an integer $k \ge 0$ with $\operatorname{ord}(a) = p^k$.
   - (iii) Every prime $q$ dividing $|G|$ satisfies $q = p$.
3. (A criterion for $p$-subgroups) If $H$ is a subgroup of $G$, then $H$ is a $p$-subgroup of $G$ if and only if for every element $a$ of $H$ there is an integer $k \ge 0$ with $\operatorname{ord}(a) = p^k$.
:::

## 직관

[[lagrange-theorem|라그랑주 정리]]에 의해 부분군의 원소의 개수와 원소의 위수는 $|G|$를 나눕니다. 거꾸로 $|G|$의 약수 $d$마다 원소가 $d$개인 부분군이 있다고 할 수는 없습니다(아래 반례). 코시 정리는 $d$가 **소수**이면 그런 부분군이, 더 나아가 위수가 $d$인 원소가 꼭 있다고 말합니다.

증명은 [[class-equation|류 방정식]]을 씁니다. 사람들이 여러 모임으로 나뉘어 있고, 전체 인원이 $p$의 배수이며, 둘 이상이 모인 모임은 모두 인원이 $p$의 배수라면, 혼자인 사람의 수도 $p$의 배수입니다. 사람이 $G$의 원소, 모임이 켤레류, 혼자인 사람이 중심 $Z(G)$의 원소에 해당합니다. 그러면 아벨군인 $Z(G)$에서 이미 증명한 [[cauchy-theorem-for-abelian-groups|아벨군의 코시 정리]]를 쓸 수 있습니다. 둘 이상이 모인 모임 가운데 인원이 $p$의 배수가 아닌 것이 있으면, 그 모임에 속한 원소 $a$의 중심화 부분군 $C_G(a)$의 원소의 개수가 $p$의 배수이고, $C_G(a)$는 $G$보다 작은 군이므로 귀납 가정으로 넘어갑니다.

(2)는 "모든 원소의 위수가 $p$의 거듭제곱"이라는 조건과 "원소의 개수가 $p$의 거듭제곱"이라는 조건이 유한군에서 같다는 것입니다. 원소의 개수가 $p^n$이면 라그랑주 정리에 의해 위수도 $p$의 거듭제곱입니다. 거꾸로 $|G|$를 $p$와 다른 소수 $q$가 나누면 (1)에 의해 위수가 $q$인 원소가 생기므로, 모든 위수가 $p$의 거듭제곱인 군에서는 $|G|$의 소인수가 $p$뿐입니다.

## 증명

:::idea
원소의 개수 $n$에 대한 강한 귀납이다. $Z(G)$ 밖의 어떤 $a$에서 $p$가 $|C_G(a)|$를 나누면 $G$보다 작은 군 $C_G(a)$에 귀납 가정을 쓴다. 그런 $a$가 없으면 $Z(G)$ 밖의 모든 $a$에서 $p$가 켤레류의 원소의 개수 $[G : C_G(a)]$를 나누므로, 류 방정식의 합동 꼴에 의해 $p$가 $|Z(G)|$를 나누고, 아벨군 $Z(G)$에 아벨군의 코시 정리를 쓴다.
:::

:::hint
$|G| = [G : C_G(a)] \cdot |C_G(a)|$입니다. $p$가 $|C_G(a)|$를 나누지 않으면 [[euclids-lemma|유클리드 보조정리]]에 의해 $p$는 $[G : C_G(a)]$를 나눕니다.
:::

:::hint
[[class-equation|류 방정식]]의 (5)를 $d = p$에 쓰면 $|G| \equiv |Z(G)| \pmod p$입니다. 군 $Z(G)$는 아벨군입니다.
:::

:::proof
정수에 관하여 [[prime-number|소수]]의 진술의 (Z1)과 [[well-ordering-principle|정렬 원리]]의 진술의 (Z5)–(Z7), (L1), 그리고 거기서 받아들인 계산 법칙을 쓰고, 정수끼리의 차가 정수라는 것은 [[even-and-odd|짝수와 홀수]]에서 받아들인 사실을 쓴다. "위수의 ($k$)"는 [[order-of-an-element|원소의 위수]]의 ($k$)이고, "PPD"는 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 진술이다. 소수는 $1$이 아닌 자연수이므로 (Z5)와 (Z1)에 의해 소수는 $2$ 이상이다.

**$|G|$는 자연수이다.** [[subgroup|부분군]]의 (4)에 의해 $G$는 $G$ 자신의 부분군이므로 [[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 $|G| \ge 1$이다. 같은 방법으로 유한군의 원소의 개수는 언제나 자연수이다.

**(1)** 자연수 $n$에 대한 명제 $S_n$: "원소가 $n$개인 모든 군 $G'$과 $n$을 나누는 모든 소수 $q$에 대하여 $\operatorname{ord}(b) = q$인 $b \in G'$이 있다"를 [[strong-induction|강한 귀납법]](시작점 $1$, 기초 단계 하나)으로 보인다.

*기초 단계 $n = 1$.* 소수 $q$가 $1$을 나누면 $q$는 $1$의 양의 약수이므로 $q \le 1$이다(소수의 진술). 한편 $q \ge 2 > 1$이므로 (Z6)에 의해 $1 < q$이고, 이것은 $q \le 1$과 함께 (L1)에 어긋난다. 따라서 $1$을 나누는 소수는 없고 $S_1$은 참이다.

*귀납 단계.* $n \ge 2$이고 $S_1, \dots, S_{n-1}$이 참이라 하자. $G'$이 원소가 $n$개인 군이고 $q$가 $n$을 나누는 소수라 하자. 아래에서 $Z(G')$은 [[subgroup-examples|부분군의 예와 교집합]]의 (5)의 중심이고, 그 항목에 의해 $G'$의 부분군이다. $a \in G'$이면 [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 (1)에 의해 $C_{G'}(a)$는 $G'$의 부분군이고, 라그랑주 정리의 (1)에 의해 유한집합이며 $|C_{G'}(a)| \ge 1$이고
$$n = [G' : C_{G'}(a)] \cdot |C_{G'}(a)|$$
이다. 다음 두 경우 가운데 하나가 성립한다(배중률).

- 경우 (가): $a \notin Z(G')$이고 $q \mid |C_{G'}(a)|$인 $a \in G'$이 있다.
- 경우 (나): $Z(G')$에 속하지 않는 모든 $a \in G'$에서 $q \nmid |C_{G'}(a)|$이다.

*경우 (가).* 그런 $a$ 하나에 대하여 다음을 보인다. 중심화 부분군과 정규화 부분군의 (2)에 의해 $a \in Z(G')$인 것은 정확히 $C_{G'}(a) = G'$일 때이므로 $C_{G'}(a) \ne G'$이다. $C_{G'}(a) \subseteq G'$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $n' = |C_{G'}(a)|$는 $n' < n$을 만족하고, $n' \ge 1$과 (Z1), (Z7)에 의해 $1 \le n' \le n - 1$이다. 군 $C_{G'}(a)$는 원소가 $n'$개이고 $q \mid n'$이므로, 귀납 가정 $S_{n'}$에 의해 군 $C_{G'}(a)$에서 위수가 $q$인 원소 $b$가 있다. 위수의 (9)에 의해 $G'$에서도 $\operatorname{ord}(b) = q$이다.

*경우 (나).* $Z(G')$에 속하지 않는 $a \in G'$을 아무것이나 잡자. $q \mid n = [G' : C_{G'}(a)] \cdot |C_{G'}(a)|$이고 $q \nmid |C_{G'}(a)|$이므로 [[euclids-lemma|유클리드 보조정리]]의 (1)에 의해 $q \mid [G' : C_{G'}(a)]$이다. 따라서 [[class-equation|류 방정식]]의 (5)의 가정이 자연수 $d = q$에 대해 성립하고, 그 결론에 의해 $q \mid |G' - Z(G')|$이다. 류 방정식의 (4)의 (iii)에 의해 $Z(G')$은 유한집합이고 $n = |Z(G')| + |G' - Z(G')|$이다. $n = qs$이고 $|G' - Z(G')| = qt$인 정수 $s$, $t$를 잡으면 $|Z(G')| = qs - qt = q(s - t)$이고 $s - t$는 정수이므로 $q \mid |Z(G')|$이다. 중심화 부분군과 정규화 부분군의 (2)에 의해 군 $Z(G')$은 아벨군이고, 유한군이다. [[cauchy-theorem-for-abelian-groups|아벨군의 코시 정리]]의 (1)을 군 $Z(G')$과 소수 $q$에 쓰면, 군 $Z(G')$에서 위수가 $q$인 원소 $b$가 있다. 위수의 (9)에 의해 $G'$에서도 $\operatorname{ord}(b) = q$이다.

두 경우 모두 $G'$에 위수가 $q$인 원소가 있으므로 $S_n$이 참이다. 강한 귀납법에 의해 모든 자연수 $n$에서 $S_n$이 참이다. $|G|$는 자연수이므로 $S_{|G|}$를 $G$와 $p$에 쓰면 $\operatorname{ord}(a) = p$인 $a \in G$가 있다. [[cyclic-subgroup|순환 부분군]]의 (1)에 의해 $\langle a \rangle$는 $G$의 부분군이고, [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (3)에 의해 $|\langle a \rangle| = \operatorname{ord}(a) = p$이다.

**(2)** (i)에서 (ii): $G$가 $p$-군이고 $|G| = p^n$이면, [[p-group|p-군]]의 (5)에 의해 모든 $a \in G$에서 $\operatorname{ord}(a) = p^k$인 정수 $k$가 $0 \le k \le n$에 있다.

(ii)에서 (iii): $q$가 $|G|$를 나누는 소수라 하자. (1)을 소수 $q$에 쓰면 $\operatorname{ord}(a) = q$인 $a \in G$가 있다. (ii)에 의해 $\operatorname{ord}(a) = p^k$인 $0$ 이상인 정수 $k$가 있으므로 $p^k = q$는 소수이다. PPD의 (6)에 의해 $k = 1$이고, PPD의 (1)의 (i)에 의해 $q = p^1 = p$이다.

(iii)에서 (i): $|G|$는 자연수이고 $|G|$를 나누는 모든 소수가 $p$이므로, PPD의 (6)에 의해 $|G| = p^r$인 $0$ 이상인 정수 $r$이 있다. $G$는 유한군이므로 $p$-군의 정의에 의해 $p$-군이다.

**(3)** 부분군의 (8)에 의해 $H$는 유한군이다. $p$-군의 정의에 의해 $H$가 $G$의 $p$-부분군인 것은 정확히 군 $H$가 $p$-군일 때이고, (2)의 (i)과 (ii)의 동치를 유한군 $H$에 쓰면 이것은 정확히 $H$의 모든 원소 $a$에 대하여 군 $H$에서 정한 $\operatorname{ord}(a)$가 $p$의 거듭제곱일 때이다. 위수의 (9)에 의해 군 $H$에서 정한 $\operatorname{ord}(a)$와 $G$에서 정한 $\operatorname{ord}(a)$는 같다. $\blacksquare$
:::

## 예시와 반례

:::example[$A_4$의 원소의 위수]
[[alternating-group|교대군]]의 (5)에 의해 $|A_4| = 12 = 2^2 \cdot 3$이므로 $2$와 $3$이 $|A_4|$를 나눕니다. $2$와 $3$은 소수입니다. 양의 약수는 자기 이하이고, $3 = 2 \cdot 1 + 1$은 홀수이므로 [[even-and-odd|짝수와 홀수]]에 의해 $2 \nmid 3$이기 때문입니다. (1)에 의해 $A_4$에는 위수가 $2$인 원소와 위수가 $3$인 원소가 있습니다. 실제로 교대군의 (5)에 의해 $D$의 원소, 예를 들어 $(1\ 2)(3\ 4)$의 위수는 $2$이고, $C$의 원소, 예를 들어 $(1\ 2\ 3)$의 위수는 $3$입니다.

$A_4$는 $2$-군도 $3$-군도 아닙니다. $3$은 $|A_4|$를 나누는 소수이고 $3 \ne 2$이므로 (2)의 (iii)이 $p = 2$에서 성립하지 않고, $2$는 $|A_4|$를 나누는 소수이고 $2 \ne 3$이므로 (iii)이 $p = 3$에서 성립하지 않습니다. (2)의 (ii)로 보아도 같습니다. 위수가 $3$인 원소 $(1\ 2\ 3)$이 있고 $3$은 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 (6)에 의해 $2$의 거듭제곱이 아닙니다($3 = 2^k$이면 $2^k$가 소수이므로 $k = 1$이고 $3 = 2$가 됩니다).
:::

:::counterexample[약수 $6$과 $A_4$]
(1)은 $|G|$를 나누는 **소수**에 대한 것입니다. $|A_4| = 12$를 $6$이 나누지만 [[a4-has-no-subgroup-of-order-6|A₄ 에는 원소가 6개인 부분군이 없다]]의 (2)에 의해 $A_4$에는 원소가 $6$개인 부분군이 없습니다. 원소의 위수로 보아도, [[alternating-group|교대군]]의 (5)와 [[order-of-an-element|원소의 위수]]의 (1)에 의해 $A_4$의 원소의 위수는 $1$, $2$, $3$ 가운데 하나이므로, $12$를 나누는 $4$, $6$, $12$를 위수로 갖는 원소는 없습니다.

증명에서 $S_n$의 $q$가 소수라는 것은 경우 (나)에서 [[euclids-lemma|유클리드 보조정리]]로 $q \mid [G' : C_{G'}(a)]$를 얻을 때와 [[cauchy-theorem-for-abelian-groups|아벨군의 코시 정리]]를 쓸 때 쓰입니다.
:::

## 확인 질문

:::check[모든 원소의 위수가 $1$이거나 $3$인 유한군의 원소의 개수는 어떤 꼴이어야 하는가?]
$3$의 거듭제곱이어야 합니다. $1 = 3^0$이고 $3 = 3^1$이므로([[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 $0$제곱과 (1)의 (i)) 이 군은 $p = 3$에서 (2)의 (ii)를 만족하고, (2)에 의해 $3$-군입니다. 곧 원소의 개수는 $0$ 이상인 정수 $n$에 대한 $3^n$입니다. 이 꼴의 수마다 그런 군이 실제로 있는지는 이 정리가 말하지 않습니다.
:::

:::check[$G$가 아벨군이면 (1)의 증명의 두 경우 가운데 어느 것이 일어나는가?]
경우 (나)입니다. [[subgroup-examples|부분군의 예와 교집합]]의 (5)에 의해 아벨군에서는 $Z(G) = G$이므로 $Z(G)$에 속하지 않는 원소가 없고, 경우 (가)의 $a$는 있을 수 없습니다. 경우 (나)의 조건은 공허하게 성립하고, 증명은 $Z(G) = G$에 [[cauchy-theorem-for-abelian-groups|아벨군의 코시 정리]]를 바로 쓰는 것이 됩니다.
:::
