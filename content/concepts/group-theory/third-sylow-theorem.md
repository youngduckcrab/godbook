---
title: 실로우 제3 정리
title_en: The Third Sylow Theorem
aliases: [실로우의 제3 정리, 실로우 부분군의 개수, Third Sylow Theorem, Sylow's third theorem, number of Sylow subgroups]
kind: theorem
field: group-theory
msc: ["20D20"]
level: undergrad
summary: 유한군 G의 실로우 p-부분군의 개수 n_p는 p를 법으로 1과 합동이고, |G| = pʳm (p는 m을 나누지 않음)의 m과 |G|를 나눈다. n_p = 1인 것은 정확히 실로우 p-부분군이 정규부분군일 때이다.
requires: [prime-number, well-ordering-principle, even-and-odd, divisibility, congruence-modulo-n, division-theorem, integer-cancellation, finite-set, number-of-elements-is-unique, subset-of-finite-set, prime-power-divisors, group, subgroup, lagrange-theorem, normal-subgroup, number-groups, group-action-examples, centralizer-and-normalizer, p-group, fixed-points-of-p-group-action, sylow-subgroup, first-sylow-theorem, p-element-normalizing-sylow-subgroup, second-sylow-theorem, symmetric-group, order-of-symmetric-group, cycle-permutation, conjugate-of-a-cycle, cyclic-subgroup, order-of-cyclic-subgroup, alternating-group]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 15.1절 The Sylow Theorems, Theorem 15.8 p.183(증명 p.183); 15.2절 Examples and Applications, Example 15.9 p.184; 15.4절 연습문제 11 p.187; 10.4절 연습문제 11 p.131
    checked: original
    note: "진술 (1)과 (2)는 출처 Theorem 15.8(p.183, 'G 가 유한군이고 p 가 G 의 위수를 나누는 소수이면 실로우 p-부분군의 개수는 p 를 법으로 1 과 합동이고 |G| 를 나눈다')과 같다. 출처는 p 가 |G| 를 나누는 경우로 진술하고, 이 항목은 이 강의의 정의에 따라 p ∤ |G| 인 경우도 넣는다. (2)의 'n_p 가 m 을 나눈다'는 '실로우 제2 정리' (3)에서 온다. 출처의 첫째 부분의 증명(p.183)은 실로우 p-부분군 P 가 실로우 p-부분군 전체 S 에 켤레로 작용한다고 하고 'From the proof of the Second Sylow Theorem, the only P-conjugate of P is itself and the order of the other P-conjugacy classes is a power of p. Each P-conjugacy class contributes a positive power of p toward |S| except the equivalence class {P}.' 라고 쓴 뒤 |S| ≡ 1 (mod p) 를 얻는다. 출처는 이 자리에서 Lemma 15.5 를 들지 않는다. 이 항목은 P 의 작용의 고정점이 P 하나뿐이라는 것을 '실로우 부분군을 정규화하는 p-원소' (4)(출처 Lemma 15.5 에 해당한다)로 쓰고, 고정점의 개수에 관한 합동('p-군의 작용의 고정점' (2))으로 n_p ≡ 1 을 얻는다. 둘째 부분의 증명(p.183)은 G 의 S 위 켤레 작용의 궤도가 하나뿐이라는 것과 Lemma 15.6 으로 |S| = [G : N(P)] 를 얻고 그것이 |G| 를 나눈다고 쓴다. (3)의 'n_p = 1 이면 정규'는 출처 15.4절 연습문제 11(p.187, |G| 를 나누는 소수 p 에 대해 실로우 p-부분군이 하나뿐이면 그것은 정규부분군)과 같고, 10.4절 연습문제 11(p.131, 위수 k 인 부분군이 정확히 하나이면 정규부분군)의 한 경우이다. 예시 '$A_4$의 실로우 $3$-부분군 네 개'의 네 부분군은 출처 부록 B 의 15.4절 연습문제 2 의 힌트(p.328)가 S₄ 의 실로우 3-부분군으로 적는 P₁, …, P₄ 와 같은 집합이고, 켤레로 ⟨(1 2 3)⟩ 이 정규부분군이 아님을 보이는 것은 출처 Proposition 6.15 의 증명(p.77)이 A₄ 에서 (1 2 4)(1 2 3)(1 2 4)⁻¹ = (2 4 3) 을 계산하는 것과 같은 발상이다. 개수의 후보를 합동과 나눔으로 좁히고 실로우 부분군이 정규부분군이 아님을 들어 하나를 지우는 것은 출처 Example 15.9(p.184, A₅ 의 실로우 5-부분군은 하나이거나 여섯이고 A₅ 에 정규부분군이 없으므로 여섯)와 같은 발상이다. 반례 '원소가 $6$개인 두 군에서 다른 $n_2$'의 두 군 S₃ 과 Z₆ 은 출처 Example 9.5(p.115, 원소의 개수가 같지만 동형이 아니다)에 나오고, S₃ 의 {(1), (1 2)} 가 정규부분군이 아니라는 것은 출처 Example 10.2(p.125)에 나온다. 확인 질문 '원소가 $63$개인 군의 실로우 $7$-부분군은 정규부분군인가?'는 합동과 나눔으로 n_p = 1 을 얻는 출처 Example 15.15(p.185, 원소가 20 개인 군의 실로우 5-부분군), 15.4절 연습문제 3(p.187, 원소가 45 개인 군에는 원소가 9 개인 정규부분군이 있다), 9(p.187, 원소가 33 개인 군의 실로우 3-부분군은 하나뿐)와 같은 발상이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(위수 pq 의 n_p·n_q 판정과 단순군 (5) 의 조건에 경계값, 지시와 요약의 어긋남 처리 확인). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$p$가 [[prime-number|소수]]이고 $G$가 유한 [[group|군]]이라 하자. 합동은 [[congruence-modulo-n|합동]]의 것이다. 실로우 $p$-부분군, $\operatorname{Syl}_p(G)$, 그리고 $|G| = p^r \cdot m$이고 $p \nmid m$인 쌍 $(r, m)$은 [[sylow-subgroup|실로우 p-부분군]]의 것이고, [[second-sylow-theorem|실로우 제2 정리]]의 (3)에 의해 $\operatorname{Syl}_p(G)$는 공집합이 아닌 유한집합이므로 그 원소의 개수 $n_p$가 정해진다. 정규화 부분군 $N_G(P)$는 [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 것이다.

1. (실로우 제3 정리) $n_p \equiv 1 \pmod p$이다.
2. (개수의 약수) $n_p$는 $m$을 나누고 $|G|$를 나눈다.
3. (하나뿐일 조건) $P \in \operatorname{Syl}_p(G)$이면 다음 세 조건은 서로 동치이다.
   - (i) $n_p = 1$이다.
   - (ii) $P$는 $G$의 [[normal-subgroup|정규부분군]]이다.
   - (iii) $N_G(P) = G$이다.

   이 조건이 성립하면 $\operatorname{Syl}_p(G) = \{P\}$이다.
:::

:::english
Let $p$ be a prime and $G$ a finite group. Congruence is as in the entry on congruence. Sylow $p$-subgroups, $\operatorname{Syl}_p(G)$, and the pair $(r, m)$ with $|G| = p^r \cdot m$ and $p \nmid m$ are as in the entry on Sylow $p$-subgroups, and by item (3) of the Second Sylow Theorem $\operatorname{Syl}_p(G)$ is a nonempty finite set, so its number of elements $n_p$ is defined. The normalizer $N_G(P)$ is as in the entry on centralizers and normalizers.

1. (The Third Sylow Theorem) $n_p \equiv 1 \pmod p$.
2. (Divisors) $n_p$ divides $m$ and divides $|G|$.
3. (When there is only one) If $P \in \operatorname{Syl}_p(G)$, then the following three conditions are equivalent.
   - (i) $n_p = 1$.
   - (ii) $P$ is a normal subgroup of $G$.
   - (iii) $N_G(P) = G$.

   If these conditions hold, then $\operatorname{Syl}_p(G) = \{P\}$.
:::

## 직관

실로우 $p$-부분군의 개수 $n_p$에 대해 두 가지 제약이 있습니다. [[second-sylow-theorem|실로우 제2 정리]]에 의해 $n_p$는 $m$을 나누고, 이 정리의 (1)에 의해 $n_p$를 $p$로 나눈 나머지는 $1$입니다. 두 제약을 함께 쓰면 후보가 좁혀집니다. 예를 들어 원소가 $12$개인 군에서 $n_3$은 $4$의 양의 약수 $1, 2, 4$ 가운데 $3$으로 나눈 나머지가 $1$인 것, 곧 $1$이거나 $4$입니다.

(1)의 까닭은 고정점을 세는 것입니다. 실로우 $p$-부분군 $P$가 실로우 $p$-부분군 전체에 켤레로 작용하면, [[p-element-normalizing-sylow-subgroup|실로우 부분군을 정규화하는 p-원소]]의 (4)에 의해 $P$가 움직이지 않는 것은 $P$ 자신뿐입니다. 나머지는 $P$의 작용으로 원소가 둘 이상인 묶음을 이루고, 그 묶음의 크기는 $p$의 배수입니다. 그래서 전체 개수는 $p$를 법으로 $1$과 합동입니다. 반을 짤 때 $p$명씩 짝을 이루고 한 명만 남는 것과 같습니다. 한 명이 고정점 $P$에, $p$명씩의 짝이 원소가 둘 이상인 묶음에 해당합니다. 다만 실제 묶음의 크기는 $p$, $p^2$, … 가운데 어느 것이어도 됩니다.

(3)은 "하나뿐이면 정규부분군이고, 정규부분군이면 하나뿐"이라는 것입니다. 모든 실로우 $p$-부분군이 $P$의 켤레이므로, $P$가 켤레로 바뀌지 않으면 다른 실로우 $p$-부분군은 없습니다.

## 증명

:::idea
(1)은 $P$의 $\operatorname{Syl}_p(G)$ 위 켤레 작용의 고정점이 $P$ 하나뿐이라는 것에 고정점의 개수에 관한 합동을 쓴 것이다. (2)는 실로우 제2 정리의 (3)이고, (3)은 같은 정리의 $n_p = [G : N_G(P)]$에서 나온다.
:::

:::hint
[[fixed-points-of-p-group-action|p-군의 작용의 고정점]]의 (2)는 $p$-군이 유한집합에 작용할 때 고정점이 하나뿐이면 그 유한집합의 원소의 개수가 $p$를 법으로 $1$과 합동이라고 말합니다. 여기서 작용하는 $p$-군은 무엇입니까?
:::

:::hint
(3)에서 $n_p = [G : N_G(P)]$이고, [[lagrange-theorem|라그랑주 정리]]의 (2)에 의해 $[G : G] = 1$입니다.
:::

:::proof
"실로우의 ($k$)"는 [[sylow-subgroup|실로우 p-부분군]]의 ($k$)이고, "제2 정리의 ($k$)"는 [[second-sylow-theorem|실로우 제2 정리]]의 ($k$)이다.

**(1)** [[first-sylow-theorem|실로우 제1 정리]]의 (3)에 의해 $P \in \operatorname{Syl}_p(G)$가 있다. 실로우의 (1)에 의해 $P$는 $G$의 $p$-부분군이므로, [[p-group|p-군]]의 정의에 의해 군 $P$는 $p$-군이고 $|P| = p^r$이다. 실로우의 (5)를 $H = P$에 쓰면 $P$는 $X = \operatorname{Syl}_p(G)$에 $h \cdot Q = hQh^{-1}$로 작용하고, 제2 정리의 (3)에 의해 $X$는 유한집합이다.

이 작용의 고정점 전체의 집합 $X^P = \{Q \in X : \text{모든 } h \in P \text{에서 } h \cdot Q = Q\}$는 [[p-element-normalizing-sylow-subgroup|실로우 부분군을 정규화하는 p-원소]]의 (4)의 끝 문장($H = P$인 경우)에 의해 $\{P\}$이다. 원소가 하나인 집합 $\{P\}$는 $1$을 $P$로 보내는 전단사 $\{1\} \to \{P\}$가 있으므로 [[finite-set|유한집합]]의 정의에 의해 원소를 $1$개 갖고, $|X^P| = 1$이다.

[[fixed-points-of-p-group-action|p-군의 작용의 고정점]]의 (2)의 둘째 문장을 $p$-군 $P$와 유한집합 $X$ 위의 이 작용에 쓰면 $|X| \equiv 1 \pmod p$이다. $|X| = n_p$이므로 $n_p \equiv 1 \pmod p$이다.

**(2)** 제2 정리의 (3)이 그대로 이것이다.

**(3)** $P \in \operatorname{Syl}_p(G)$라 하자.

*(i)이면 (ii).* $n_p = 1$이라 하자. $\{P\} \subseteq \operatorname{Syl}_p(G)$이고, (1)의 증명에서 본 것처럼 $\{P\}$는 원소를 $1$개 가지므로, [[subset-of-finite-set|유한집합의 부분집합]]의 (2)를 원소가 $1$개인 집합 $\operatorname{Syl}_p(G)$와 그 부분집합 $\{P\}$에 쓰면 $\operatorname{Syl}_p(G) = \{P\}$이다. 실로우의 (6)에 의해 $P$는 $G$의 정규부분군이다.

*(ii)이면 (iii).* [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 (4)이다.

*(iii)이면 (i).* 제2 정리의 (3)에 의해 $n_p = [G : N_G(P)] = [G : G]$이고, [[lagrange-theorem|라그랑주 정리]]의 (2)에 의해 $[G : G] = 1$이다.

마지막 문장. 조건이 성립하면 (i)이므로, 위 "(i)이면 (ii)"에서 본 것처럼 $\operatorname{Syl}_p(G) = \{P\}$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$A_4$의 실로우 $3$-부분군 네 개]
[[alternating-group|교대군]]의 (5)에 의해 $|A_4| = 12 = 3 \cdot 4$이고, $4 = 3 \cdot 1 + 1$이므로 [[division-theorem|나눗셈 정리]]의 나머지의 유일성에 의해 $3 \nmid 4$입니다. 따라서 $p = 3$에서 $r = 1$, $m = 4$입니다. $4 = 2^2$이므로 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 (3)에 의해 $4$의 양의 약수는 $1, 2, 4$입니다. $1 - 1 = 0 = 3 \cdot 0$, $4 - 1 = 3 = 3 \cdot 1$이고, $2 - 1 = 1$은 $1 = 3 \cdot 0 + 1$이어서 나눗셈 정리에 의해 $3$으로 나누어떨어지지 않습니다. 따라서 (1), (2)에 의해 $n_3$은 $1$이거나 $4$입니다.

$\sigma = (1\ 2\ 3)$이라 하면 교대군의 (5)에 의해 $\sigma \in A_4$이고 $\operatorname{ord}(\sigma) = 3$입니다. [[cyclic-subgroup|순환 부분군]]의 (1)과 [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (1)에 의해 $P = \langle \sigma \rangle = \{i, \sigma, \sigma^2\}$는 원소가 $3$개인 부분군이므로 $P \in \operatorname{Syl}_3(A_4)$입니다. $\sigma^3 = i$이므로 $\sigma^2 = \sigma^{-1}$이고, [[cycle-permutation|순환치환]]의 (1)과 (3)에 의해 $\sigma^{-1} = (3\ 2\ 1) = (1\ 3\ 2)$입니다.

$g = (1\ 2)(3\ 4)$라 하면 교대군의 (5)에 의해 $g \in A_4$이고, $g(1) = 2$, $g(2) = 1$, $g(3) = 4$입니다. [[conjugate-of-a-cycle|순환치환의 켤레]]의 (1)과 순환치환의 (3)에 의해
$$g\sigma g^{-1} = (g(1)\ g(2)\ g(3)) = (2\ 1\ 4) = (1\ 4\ 2)$$
입니다. 교대군의 (5)에서 열두 치환은 서로 다르므로 $(1\ 4\ 2)$는 $i$, $(1\ 2\ 3)$, $(1\ 3\ 2)$와 다르고 $g\sigma g^{-1} \notin P$입니다. 따라서 [[normal-subgroup|정규부분군]]의 정의에 의해 $P$는 $A_4$의 정규부분군이 아니고, (3)에 의해 $n_3 \ne 1$이므로 $n_3 = 4$입니다.

실로우 제2 정리의 (3)에 의해 $[A_4 : N_{A_4}(P)] = 4$이고, [[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 $12 = 4 \cdot |N_{A_4}(P)|$입니다. $12 = 4 \cdot 3$이므로 [[integer-cancellation|정수의 소거]]의 (2)에 의해 $|N_{A_4}(P)| = 3$입니다. [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 (3)에 의해 $P \subseteq N_{A_4}(P)$이고 둘 다 원소가 $3$개이므로, [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $N_{A_4}(P) = P$입니다.
:::

:::counterexample[원소가 $6$개인 두 군에서 다른 $n_2$]
(1)과 (2)만으로는 $n_p$가 정해지지 않을 수 있습니다. 원소가 $6$개인 군에서 $6 = 2 \cdot 3$이고 $3 = 2 \cdot 1 + 1$은 홀수이므로 $2 \nmid 3$이고([[even-and-odd|짝수와 홀수]]), $p = 2$에서 $m = 3$입니다. (2)에 의해 $n_2$는 $3$의 양의 약수이므로 [[prime-number|소수]] $3$의 약수 $1$이거나 $3$이고, 둘 다 $2$로 나눈 나머지가 $1$이어서 (1)을 만족합니다. 두 경우가 실제로 모두 일어납니다.

$(\mathbb{Z}_6, +)$는 [[number-groups|수로 이루어진 군]]의 (4)에 의해 원소가 $6$개인 아벨군입니다. 실로우 제2 정리의 (3)에 의해 실로우 $2$-부분군 $P$가 있고, [[normal-subgroup|정규부분군]]의 (3)에 의해 $P$는 정규부분군이므로 (3)에 의해 $n_2(\mathbb{Z}_6) = 1$입니다.

$S_3$에서 $\tau = (1\ 2)$이면 [[cycle-permutation|순환치환]]의 (5)에 의해 $\operatorname{ord}(\tau) = 2$이고, [[cyclic-subgroup|순환 부분군]]의 (1)과 [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (1)에 의해 $P = \{i, (1\ 2)\}$는 원소가 $2$개인 부분군, 곧 실로우 $2$-부분군입니다([[order-of-symmetric-group|대칭군의 원소의 개수]]의 (6)에 의해 $|S_3| = 6$). $\rho = (2\ 3)$이면 [[conjugate-of-a-cycle|순환치환의 켤레]]의 (1)에 의해 $\rho\tau\rho^{-1} = (\rho(1)\ \rho(2)) = (1\ 3)$이고, [[alternating-group|교대군]]의 (7)에 의해 $(1\ 3)$은 $i$와도 $(1\ 2)$와도 다르므로 $P$는 정규부분군이 아닙니다. (3)에 의해 $n_2(S_3) \ne 1$이므로 $n_2(S_3) = 3$입니다.
:::

## 확인 질문

:::check[원소가 $63$개인 군의 실로우 $7$-부분군은 정규부분군인가?]
그렇습니다. $63 = 7 \cdot 9$이고 $9 = 7 \cdot 1 + 2$이므로 [[division-theorem|나눗셈 정리]]에 의해 $7 \nmid 9$이고, $p = 7$에서 $m = 9$입니다. $9 = 3^2$이므로 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 (3)에 의해 $9$의 양의 약수는 $1, 3, 9$입니다. $3 - 1 = 2 = 7 \cdot 0 + 2$, $9 - 1 = 8 = 7 \cdot 1 + 1$이므로 $3$과 $9$는 $7$을 법으로 $1$과 합동이 아니고, (1), (2)에 의해 $n_7 = 1$입니다. (3)에 의해 실로우 $7$-부분군은 정규부분군입니다.
:::

:::check[$p = 2$일 때 유한군의 실로우 $2$-부분군의 개수 $n_2$는 언제나 홀수인가?]
그렇습니다. (1)에 의해 $n_2 \equiv 1 \pmod 2$이므로 [[congruence-modulo-n|합동]]의 정의에 의해 $n_2 - 1 = 2c$인 정수 $c$가 있고, $n_2 = 2c + 1$은 [[even-and-odd|홀수]]입니다.
:::
