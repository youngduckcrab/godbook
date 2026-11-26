---
title: p-군의 중심
title_en: The Center of a p-Group
aliases: [p-군의 중심은 자명하지 않다, 자명하지 않은 중심, center of a p-group, nontrivial center]
kind: theorem
field: group-theory
msc: ["20D15"]
level: undergrad
summary: "소수 p에 대하여 원소가 pⁿ개인 군 G의 중심 Z(G)는 원소가 pᵏ (0 ≤ k ≤ n)개이고 |G| ≡ |Z(G)| (mod p)이다. 따라서 n ≥ 1이면 p가 |Z(G)|를 나누고 Z(G)는 e가 아닌 원소를 갖는다."
requires: [set, set-operations, finite-set, number-of-elements-is-unique, subset-of-finite-set, prime-number, well-ordering-principle, even-and-odd, divisibility, congruence-modulo-n, prime-power-divisors, group, subgroup, subgroup-examples, lagrange-theorem, group-action-examples, stabilizer-and-fixed-points, centralizer-and-normalizer, conjugacy-class, class-equation, p-group, fixed-points-of-p-group-action, number-groups, symmetric-group, order-of-symmetric-group, cycle-permutation]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "14.2절 The Class Equation, Theorem 14.15 와 그 증명 (p.172); 15.2절 Examples and Applications, Example 15.16 (p.185)"
    checked: original
    note: "출처 Theorem 14.15(p.172, 그 쪽을 그림으로 확인했다)의 진술은 'Let G be a group of order pⁿ where p is prime. Then G has a nontrivial center.'이고 n 에 조건을 두지 않는다. n = 0 이면 G 는 원소가 하나인 군이고 Z(G) = G = {e} 이므로, 이 항목은 '자명하지 않은 중심'을 말하는 (1)에 n ≥ 1 을 넣고 n = 0 도 성립하는 합동은 (2)로 따로 둔다. 출처의 증명은 류 방정식 |G| = |Z(G)| + n_1 + ⋯ + n_k 에서 'n_i > 1 이고 n_i | |G| 이므로 p 가 각 n_i 를 나누고, p | |G| 이므로 p 가 |Z(G)| 를 나눈다'고 한 뒤 '항등원은 늘 중심에 있으므로 |Z(G)| ≥ 1, 따라서 |Z(G)| ≥ p'라 하고 'g ≠ 1 인 g ∈ Z(G) 가 있다'로 끝낸다(항등원을 1 로 적는다). 이 항목은 같은 계산을 켤레 작용에 p-군의 작용의 고정점(fixed-points-of-p-group-action)의 (1)을 쓴 것으로 하고, p ∤ 1 이므로 k ≥ 1 이라는 것으로 마무리한다. Example 15.16(p.185)은 'pⁿ, n > 1 인 군은 Theorem 14.15 에 의해 자명하지 않은 중심을 갖는다'고 쓴다. 14.5절 연습문제 23(p.180, |G| = pⁿ 이고 아벨군이 아니면 |Z(G)| < p^{n−1})과 25(p.180)는 이 정리 위에 놓인 물음이다. 반례 '원소가 하나인 군'은 출처 진술의 n = 0 인 경우이다. 반례 '$S_3$의 중심'은 출처 Example 14.12(p.171, S₃ 의 켤레류 {(1)}, {(1 2 3), (1 3 2)}, {(1 2), (1 3), (2 3)} 과 6 = 1 + 2 + 3)와 같은 대상이고, 원소가 하나인 켤레류가 {(1)} 뿐이라는 같은 결론에 이른다. 예시 '원소가 $27$개인 군의 중심'의 27 은 출처 Example 15.16 이 단순군이 아닌 위수로 든 수 가운데 하나이다. 확인 질문 '원소가 $p$개인 군에서 (1)과 (2)는 무엇을 말하는가?'는 출처 Theorem 14.15 를 n = 1 에 쓴 것이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(류 방정식 (3)·고정점 (2)·중심 (1) 에 자명한 작용과 n = 0 대입, 뒤 단원 경로 대조, fixed-points (4) 를 받아들임). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$p$가 [[prime-number|소수]]이고 $G$가 [[p-group|p-군]]이며 $|G| = p^n$이라 하자. 거듭제곱 $p^k$와 나누어떨어짐은 [[prime-power-divisors|소수의 거듭제곱과 그 약수]], 합동은 [[congruence-modulo-n|합동]]의 것이고, 중심 $Z(G)$는 [[subgroup-examples|부분군의 예와 교집합]]의 (5)의 것이다.

1. (자명하지 않은 $p$-군의 중심) $n \ge 1$이면, $1 \le k \le n$이고 $|Z(G)| = p^k$인 정수 $k$가 있다. 따라서 $p \mid |Z(G)|$이고 $|Z(G)| \ge p$이며, $Z(G) \ne \{e\}$, 곧 $e$가 아닌 $z \in Z(G)$가 있다.
2. (중심과 합동) $n$이 무엇이든 $Z(G)$는 $G$의 $p$-부분군이고, $0 \le k \le n$이며 $|Z(G)| = p^k$인 정수 $k$가 있다. 또
   $$|G| \equiv |Z(G)| \pmod p$$
   이다.
:::

:::english
Let $p$ be a prime and $G$ a $p$-group with $|G| = p^n$. The power $p^k$ and divisibility are as in the entry on powers of a prime, congruence is as in the entry on congruence, and the center $Z(G)$ is item (5) of the entry on examples of subgroups.

1. (The center of a nontrivial $p$-group) If $n \ge 1$, then there is an integer $k$ with $1 \le k \le n$ and $|Z(G)| = p^k$. Hence $p \mid |Z(G)|$, $|Z(G)| \ge p$, and $Z(G) \ne \{e\}$; that is, there is $z \in Z(G)$ with $z \ne e$.
2. (The center and a congruence) For every $n$, $Z(G)$ is a $p$-subgroup of $G$, and there is an integer $k$ with $0 \le k \le n$ and $|Z(G)| = p^k$. Moreover,
   $$|G| \equiv |Z(G)| \pmod p.$$
:::

## 직관

$G$가 자기 자신에 켤레로 작용하면 고정점은 정확히 중심의 원소입니다. $G$가 $p$-군이므로 [[fixed-points-of-p-group-action|p-군의 작용의 고정점]]의 (1)에 의해 고정점의 개수 $|Z(G)|$는 $|G|$와 $p$를 법으로 합동입니다((2)). $n \ge 1$이면 $|G|$가 $p$의 배수이므로 $|Z(G)|$도 $p$의 배수입니다. 그런데 $e$는 늘 중심에 있어 $|Z(G)| \ge 1$이므로 $|Z(G)|$는 $0$이 아닌 $p$의 배수, 곧 $p$ 이상입니다((1)).

여러 사람이 차례로 일을 하는데 누구와 순서를 바꾸어도 결과가 같은 사람을 찾는 일에 비유할 수 있습니다. 그런 사람이 중심의 원소이고, 나머지 사람은 켤레류라는 무리로 묶이는데 무리마다 사람 수가 $p$의 배수입니다. 전체 인원이 $p$의 배수이면 남는 사람의 수도 $p$의 배수이고, 적어도 $e$ 한 사람이 남으므로 $p$명 이상이 남습니다. 무리마다 사람 수가 $p$의 배수라는 것이 $|G| = p^n$에서 온 부분이고, $G$가 $p$-군이 아니면 이것이 깨질 수 있습니다(아래 반례 '$S_3$의 중심').

$n = 0$이면 $G$는 원소가 하나인 군이고 중심도 $\{e\}$입니다. 이때 (2)는 $1 \equiv 1$로 참이지만, $p \mid |G|$가 아니므로 (1)의 결론은 나오지 않습니다.

## 증명

:::idea
켤레 작용의 고정점 전체가 $Z(G)$이므로 [[fixed-points-of-p-group-action|p-군의 작용의 고정점]]의 (1)이 $|G| \equiv |Z(G)| \pmod p$를 준다. $n \ge 1$이면 $p \mid |G|$이므로 $p \mid |Z(G)|$이고, $p^0 = 1$은 $p$로 나누어지지 않으므로 $|Z(G)| = p^k$의 $k$는 $0$이 아니다.
:::

:::hint
[[stabilizer-and-fixed-points|안정자와 고정점]]의 (5)의 (iv)가 켤레 작용의 고정점 전체를 알려 줍니다.
:::

:::hint
$|G| - |Z(G)| = pc$이고 $|G| = pt$이면 $|Z(G)|$는 무엇의 배수입니까?
:::

:::proof
아래에서 "PPD"는 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 진술을 가리킨다. 정수의 계산(분배법칙)은 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 계산 법칙으로 쓰고, 정수끼리의 차가 정수라는 것은 [[even-and-odd|짝수와 홀수]]에서 받아들인 사실을 쓴다. 부등식은 [[prime-number|소수]]의 진술의 (Z1)과 정렬 원리의 진술의 (Z5), (L1)을 인용한다.

**(2)** [[subgroup-examples|부분군의 예와 교집합]]의 (5)에 의해 $Z(G)$는 $G$의 부분군이다. [[p-group|p-군]]의 (4)에 의해 $0 \le k \le n$이고 $|Z(G)| = p^k$인 정수 $k$가 있고, $Z(G)$는 $G$의 $p$-부분군이다.

[[group-action-examples|군의 작용의 예]]의 (4)의 (i)에 의해 $G$는 집합 $G$에 켤레로 작용하고($g \cdot x = gxg^{-1}$), [[stabilizer-and-fixed-points|안정자와 고정점]]의 (5)의 (iv)에 의해 이 작용의 고정점 전체의 집합은 $Z(G)$이다. $G$는 $p$-군이고 집합 $G$는 유한집합이므로 [[fixed-points-of-p-group-action|p-군의 작용의 고정점]]의 (1)을 $X = G$에 쓰면 $|G| \equiv |Z(G)| \pmod p$이다.

**(1)** $n \ge 1$이라 하자. PPD의 (2)에 의해 $p \mid p^n = |G|$이므로 $|G| = pt$인 정수 $t$가 있다. (2)의 합동과 [[congruence-modulo-n|합동]]의 정의에 의해 $|G| - |Z(G)| = pc$인 정수 $c$가 있다. 따라서
$$|Z(G)| = |G| - pc = pt - pc = p(t - c)$$
이고 $p \mid |Z(G)|$이다.

(2)의 $k$($0 \le k \le n$, $|Z(G)| = p^k$)에 대하여 $k = 0$이면 $|Z(G)| = p^0 = 1$인데 PPD의 (7)에 의해 $1$은 $p$로 나누어지지 않으므로 어긋난다. 따라서 $k \ne 0$이고, $0 \le k$이므로 (L1)에 의해 $k < 0$이 아니며 (Z5)와 (Z1)에 의해 $k \ge 1$이다. PPD의 (2)에 의해 $|Z(G)| = p^k \ge p$이다.

마지막으로 $Z(G)$는 $p$-군이고 $|Z(G)| = p^k$, $k \ge 1$이므로, [[p-group|p-군]]의 (3)의 (i)에서 (iii)으로 $Z(G) \ne \{e\}$이다. 여기서 군 $Z(G)$의 항등원은 [[subgroup|부분군]]의 (1)에 의해 $G$의 $e$이다. [[subgroup|부분군]]의 (1)에 의해 $e \in Z(G)$이므로 $\{e\} \subseteq Z(G)$이고, 두 집합이 같지 않으므로 $e$가 아닌 $z \in Z(G)$가 있다. $\blacksquare$
:::

## 예시와 반례

:::example[원소가 $27$개인 군의 중심]
$|G| = 27 = 3^3$이면 $G$는 $3$-군이고 $n = 3 \ge 1$입니다. (1)에 의해 $|Z(G)| = 3^k$, $1 \le k \le 3$이므로 $|Z(G)|$는 $3$, $9$, $27$ 가운데 하나입니다. $|Z(G)| = 27$인 것은 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 정확히 $Z(G) = G$일 때, 곧 [[subgroup-examples|부분군의 예와 교집합]]의 (5)에 의해 $G$가 아벨군일 때입니다. 예를 들어 [[number-groups|수로 이루어진 군]]의 (4)에 의해 $(\mathbb{Z}_{27}, +)$는 원소가 $27$개인 아벨군이어서 중심이 자기 자신입니다. (1)만으로는 세 값 가운데 무엇인지 더 좁혀지지 않습니다.
:::

:::counterexample[원소가 하나인 군]
(1)은 $n \ge 1$을 가정합니다. $n = 0$, 곧 $G = \{e\}$이면 [[group|군]]의 (5)에 의해 이 군은 아벨군이고, [[subgroup-examples|부분군의 예와 교집합]]의 (5)에 의해 $Z(G) = G = \{e\}$입니다. 중심에 $e$가 아닌 원소가 없으므로 (1)의 결론은 성립하지 않습니다. 증명에서는 $p \mid |G|$를 얻는 단계에서 $n \ge 1$을 썼고, $|G| = 1$은 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 (7)에 의해 $p$로 나누어지지 않습니다.
:::

:::counterexample[$S_3$의 중심]
$X = \{1, 2, 3\}$이고 $S_3 = S_X$라 합시다([[cycle-permutation|순환치환]]의 표기). [[order-of-symmetric-group|대칭군의 원소의 개수]]의 (6)에 의해 $|S_3| = 6$입니다. [[conjugacy-class|켤레류]]의 (6)에 의해 $\operatorname{cl}((1\ 2))$는 $S_3$의 호환 전체이고, 받침이 $\{1, 2\}$, $\{1, 3\}$, $\{2, 3\}$으로 서로 다른 $(1\ 2)$, $(1\ 3)$, $(2\ 3)$뿐이므로(순환치환의 (2), (5)) 원소가 $3$개입니다. 켤레류의 (2)와 [[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 $6 = 3 \cdot |C_{S_3}((1\ 2))|$, 곧 $|C_{S_3}((1\ 2))| = 2$입니다. 같은 방법으로 $\operatorname{cl}((1\ 2\ 3))$은 길이 $3$인 순환치환 전체인데, 순환치환의 (3)으로 첫 자리를 $1$로 돌려 적으면 $(1\ 2\ 3)$과 $(1\ 3\ 2)$뿐이고 둘은 $1$의 상이 달라 서로 다르므로 원소가 $2$개이고, $|C_{S_3}((1\ 2\ 3))| = 3$입니다.

[[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 (2)에 의해 $Z(S_3)$는 두 중심화 부분군에 모두 포함되고, 라그랑주 정리의 (1)을 군 $C_{S_3}((1\ 2))$와 그 부분군 $Z(S_3)$에 쓰면 $|Z(S_3)|$는 $2$를 나누고, 같은 방법으로 $3$을 나눕니다. 라그랑주 정리의 (1)에 의해 $|Z(S_3)| \ge 1$이고, [[prime-number|소수]]의 진술에 의해 $2$의 양의 약수는 $2$ 이하이므로 $|Z(S_3)|$는 $1$ 또는 $2$이고, $3 = 2 \cdot 1 + 1$은 홀수이므로 $2 \nmid 3$이어서([[even-and-odd|짝수와 홀수]]) $|Z(S_3)| = 1$입니다. [[subgroup|부분군]]의 (1)에 의해 $i_X \in Z(S_3)$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $Z(S_3) = \{i_X\}$입니다. $S_3$은 어떤 소수 $p$에 대해서도 $p$-군이 아닙니다. $6 = p^n$이라 하면 $2$와 $3$이 모두 $p^n$의 양의 약수이므로 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 (3)과 (6)에 의해 $2 = p$이고 $3 = p$여서 어긋납니다. 원소의 개수가 소수의 거듭제곱이 아니면 중심이 $\{e\}$일 수 있습니다.
:::

## 확인 질문

:::check[원소가 $p$개인 군에서 (1)과 (2)는 무엇을 말하는가?]
[[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 (1)의 (i)에 의해 $p = p^1$이므로 $G$는 $n = 1$인 $p$-군이고, (1)에 의해 $|Z(G)| = p^k$이고 $1 \le k \le 1$, 곧 $|Z(G)| = p = |G|$입니다. [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $Z(G) = G$이고, [[subgroup-examples|부분군의 예와 교집합]]의 (5)에 의해 $G$는 아벨군입니다. (2)는 $p \equiv p \pmod p$로 새로운 것을 말하지 않습니다.
:::

:::check[원소가 $2^n$개($n \ge 1$)인 군에서 중심에 속하지 않는 원소의 개수는 짝수인가?]
그렇습니다. [[class-equation|류 방정식]]의 (4)의 (iii)에 의해 $|G - Z(G)| = |G| - |Z(G)|$이고, (2)에 의해 $|G| \equiv |Z(G)| \pmod 2$이므로 $2 \mid |G| - |Z(G)|$입니다. 곧 $Z(G)$ 밖의 원소의 개수는 $2$의 배수, 곧 짝수입니다. $G$가 아벨군이면 그 수는 $0$이고, $0 = 2 \cdot 0$도 짝수입니다.
:::
