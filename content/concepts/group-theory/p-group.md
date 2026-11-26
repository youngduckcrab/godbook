---
title: p-군
title_en: p-Groups
aliases: [p-부분군, p군, p-group, p-subgroup]
kind: theorem
field: group-theory
msc: ["20D15", "20D20"]
level: undergrad
summary: "소수 p에 대하여 원소의 개수가 p의 거듭제곱(p⁰ = 1 포함)인 유한군을 p-군이라 하고, 그 부분군과 지표, 원소의 위수, 정규부분군에 대한 몫군, 준동형의 상이 모두 p의 거듭제곱의 크기를 갖는다는 것과 유한군의 p-부분군의 크기의 한계를 증명한다."
requires: [prime-number, prime-power-divisors, divisibility, well-ordering-principle, group, subgroup, subset-of-finite-set, lagrange-theorem, order-of-an-element, order-divides-group-order, normal-subgroup, quotient-group, group-homomorphism, homomorphism-kernel-and-image, group-isomorphism, first-isomorphism-theorem, number-groups]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 15.1절 첫머리의 정의 p.181, Corollary 15.2 p.182, 13.1절의 정의 p.159, Lemma 13.7 p.160
    checked: original
    note: "출처는 p-군을 '모든 원소의 위수가 p 의 거듭제곱인 군'으로 정의하고(13.1절 p.159, 15.1절 첫머리 p.181), p-부분군을 'p-군인 부분군'으로 정의한다(p.181). 이 정의는 무한군도 허용한다. 이 항목은 '유한군이고 원소의 개수가 pⁿ (n ≥ 0)'을 정의로 택한다. 출처는 Corollary 15.2(p.182)에서 '유한군 G 가 p-군인 것은 정확히 |G| = pⁿ 일 때'라고 진술하고 증명을 적지 않으며(그 쪽을 그림으로 확인했다), Lemma 13.7(p.160)에서 유한 아벨군에 대해 같은 동치를 증명한다. Lemma 13.7 의 증명의 앞 방향('|G| = pⁿ 이면 라그랑주 정리에 의해 원소의 위수는 pⁿ 을 나누므로 p 의 거듭제곱')이 이 항목의 (5)와 같은 발상이다. 출처 정의의 다른 방향(모든 원소의 위수가 p 의 거듭제곱인 유한군은 원소의 개수가 pⁿ)은 이 항목에서 다루지 않는다. 출처는 p 와 지수 n 이 G 로 정해진다는 것((2)), 부분군·지표·몫군·준동형의 상의 크기((4), (6), (7)), 유한군의 p-부분군의 크기의 한계((8))를 명제로 두지 않고(검색어 'p-group' 10건, 'p-subgroup' 33건, 'power of p' 13건, 'order p\\^?n'(정규식) 10건, 'group of order p' 22건으로 책 전체를 찾고, 13.4절 연습문제 1–24, 14.5절 연습문제 1–25, 15.4절 연습문제 1–26 을 처음부터 읽었다), 증명 안에서 쓴다: Lemma 15.5 의 증명(p.182)은 '|H| = |P|·|⟨xP⟩| 이므로 H 의 위수는 p 의 거듭제곱'이라 쓰고 'P 의 위수는 |G| 를 나누는 p 의 가장 큰 거듭제곱'이라 쓰는데 뒤의 것이 (8)의 k ≤ r 이 쓰이는 꼴이다. 출처 13.1절 p.159 는 Z₂ × Z₂ 와 Z₄ 가 2-군, Z₂₇ 이 3-군이라 적는다. 예시 '$(\\mathbb{Z}_8, +)$는 $2$-군'은 그 Z₄, Z₂₇ 과 같은 발상(위수가 소수의 거듭제곱인 순환군 ℤ_{pⁿ})이고, 출처 4.4절 읽기 질문 3(p.55, Z₈ 의 생성원 셋을 찾아라)도 같은 군을 다룬다. 반례 '원소가 $6$개인 $(\\mathbb{Z}_6, +)$'의 군 Z₆ 은 출처 4.1절 p.47(Z₆ 은 1 과 5 로 생성되는 순환군이고 2 의 위수는 3)과 같은 대상이다. 확인 질문 '원소가 $25$개인 군에서 $e$가 아닌 원소의 위수는 무엇일 수 있는가?'는 출처 Lemma 13.7 의 증명의 앞 방향을 p = 5, n = 2 에 쓴 것이고, 14.5절 연습문제 25(p.180, 위수 pⁿ (n ≥ 2) 인 군은 위수 p 인 진부분군을 갖는다)와 같은 갈래의 물음이다. 확인 질문 '원소가 $16$개인 군 $G$와 원소가 $4$개인 정규부분군 $N$에서 몫군 $G/N$의 원소의 위수는 무엇일 수 있는가?'는 출처 15.4절 연습문제 12(p.187, 위수 pʳ 인 군은 위수 p^{r−1} 인 정규부분군을 갖는다)와 같은 갈래의 대상(p-군의 정규부분군)을 다룬다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인('명제로 없다' 를 검색어 넷으로 대조, (3)(8) 에 자명군과 p ∤ |G| 대입). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$p$가 [[prime-number|소수]]라 하자. $0$ 이상인 정수 $n$에 대한 거듭제곱 $p^n$(특히 $p^0 = 1$)과 나누어떨어짐 $a \mid b$는 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 것이다. 군, 항등원 $e$, 유한군과 그 위수 $|G|$는 [[group|군]]의 것이고, 부분군과 자명한 부분군 $\{e\}$는 [[subgroup|부분군]]의 것이다. 원소의 위수 $\operatorname{ord}(a)$는 [[order-of-an-element|원소의 위수]]의 것이고, 지표 $[G : H]$는 [[lagrange-theorem|라그랑주 정리]]의 것이며, 정규부분군과 몫군 $G/N$은 [[normal-subgroup|정규부분군]]과 [[quotient-group|몫군]]의 것이다.

군 $G$가 **$p$-군**($p$-group)인 것은 정확히 $G$가 유한군이고 $|G| = p^n$인 $0$ 이상인 정수 $n$이 있을 때이다. 군 $G$의 부분군 $H$가 $G$의 **$p$-부분군**($p$-subgroup)인 것은 정확히 군 $H$가 $p$-군일 때이다. $p = 2$이면 $2$-군, $p = 3$이면 $3$-군처럼 부른다.

1. (원소가 하나인 군) 원소가 하나인 군은 모든 소수 $p$에 대하여 $p$-군이다. 특히 모든 군 $G$에서 자명한 부분군 $\{e\}$는 모든 소수 $p$에 대하여 $G$의 $p$-부분군이다.
2. (지수와 소수가 정해진다) $G$가 $p$-군이면 $|G| = p^n$인 $0$ 이상인 정수 $n$은 하나뿐이다. $q$가 $p$와 다른 소수이고 $G$가 $p$-군이면서 $q$-군이면 $|G| = 1$이다. 따라서 원소가 둘 이상인 군이 $p$-군이 되는 소수 $p$는 많아야 하나이다.
3. (자명하지 않은 $p$-군) $G$가 $p$-군이고 $|G| = p^n$이라 하자. 다음 네 조건은 서로 동치이다.
   - (i) $n \ge 1$이다.
   - (ii) $|G| \ge 2$이다.
   - (iii) $G \ne \{e\}$이다.
   - (iv) $p \mid |G|$이다.
4. (부분군과 지표) $G$가 $p$-군이고 $|G| = p^n$이며 $H$가 $G$의 부분군이면, $0 \le k \le n$이고 $|H| = p^k$인 정수 $k$가 있으며 $[G : H] = p^{n-k}$이다. 특히 $H$는 $G$의 $p$-부분군이다. 또 $H \ne G$이면 $k < n$이고 $p \mid [G : H]$이다.
5. (원소의 위수) $G$가 $p$-군이고 $|G| = p^n$이면, 모든 $a \in G$의 위수는 유한하고 $\operatorname{ord}(a) = p^k$인 정수 $k$가 $0 \le k \le n$에 있다. $a \ne e$이면 이 $k$는 $k \ge 1$이고 $p \mid \operatorname{ord}(a)$이다.
6. (몫군) $G$가 $p$-군이고 $|G| = p^n$이며 $N$이 $G$의 정규부분군이고 $|N| = p^k$($0 \le k \le n$)이면, 몫군 $G/N$은 $p$-군이고 $|G/N| = p^{n-k}$이다.
7. (준동형의 상과 동형인 군) $G'$이 군이고 $\varphi : G \to G'$이 [[group-homomorphism|군 준동형]]이라 하자. $H$가 $G$의 $p$-부분군이면 상 $\varphi(H)$([[homomorphism-kernel-and-image|준동형의 핵과 상]])는 $G'$의 $p$-부분군이고 $|\varphi(H)|$는 $|H|$를 나눈다. 특히 $G$가 $p$-군이면 $\varphi(G)$는 $G'$의 $p$-부분군이다. 또 $G$가 $p$-군이고 $G \cong G'$([[group-isomorphism|군의 동형]])이면 $G'$도 $p$-군이다.
8. (유한군의 $p$-부분군) $G$가 유한군이라 하자. $|G|$는 자연수이고, [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 (5)에 의해 $|G| = p^r \cdot m$이고 $p \nmid m$인 $0$ 이상인 정수 $r$과 자연수 $m$의 쌍 $(r, m)$이 정확히 하나 있다. $G$의 부분군 $H$가 $G$의 $p$-부분군인 것은 정확히 $|H| = p^k$인 $0$ 이상인 정수 $k$가 있을 때이고, 그때 $k \le r$이다. 특히 $p \nmid |G|$이면 $G$의 $p$-부분군은 $\{e\}$뿐이다.
:::

:::english
Let $p$ be a prime. The power $p^n$ for an integer $n \ge 0$ (in particular $p^0 = 1$) and divisibility $a \mid b$ are as in the entry on powers of a prime and their divisors. Groups, the identity $e$, finite groups and their order $|G|$ are as in the entry on groups, and subgroups and the trivial subgroup $\{e\}$ are as in the entry on subgroups. The order $\operatorname{ord}(a)$ of an element is as in the entry on the order of an element, the index $[G : H]$ is as in the entry on Lagrange's theorem, and normal subgroups and quotient groups $G/N$ are as in the corresponding entries.

A group $G$ is a **$p$-group** if and only if $G$ is a finite group and there is an integer $n \ge 0$ with $|G| = p^n$. A subgroup $H$ of a group $G$ is a **$p$-subgroup** of $G$ if and only if the group $H$ is a $p$-group. For $p = 2$ we speak of $2$-groups, for $p = 3$ of $3$-groups, and so on.

1. (Groups with one element) A group with exactly one element is a $p$-group for every prime $p$. In particular, in every group $G$ the trivial subgroup $\{e\}$ is a $p$-subgroup of $G$ for every prime $p$.
2. (The exponent and the prime are determined) If $G$ is a $p$-group, then the integer $n \ge 0$ with $|G| = p^n$ is unique. If $q$ is a prime different from $p$ and $G$ is both a $p$-group and a $q$-group, then $|G| = 1$. Hence a group with at least two elements is a $p$-group for at most one prime $p$.
3. (Nontrivial $p$-groups) Let $G$ be a $p$-group with $|G| = p^n$. The following four conditions are equivalent.
   - (i) $n \ge 1$.
   - (ii) $|G| \ge 2$.
   - (iii) $G \ne \{e\}$.
   - (iv) $p \mid |G|$.
4. (Subgroups and index) If $G$ is a $p$-group with $|G| = p^n$ and $H$ is a subgroup of $G$, then there is an integer $k$ with $0 \le k \le n$ and $|H| = p^k$, and $[G : H] = p^{n-k}$. In particular, $H$ is a $p$-subgroup of $G$. Moreover, if $H \ne G$, then $k < n$ and $p \mid [G : H]$.
5. (Orders of elements) If $G$ is a $p$-group with $|G| = p^n$, then every $a \in G$ has finite order and there is an integer $k$ with $0 \le k \le n$ and $\operatorname{ord}(a) = p^k$. If $a \ne e$, then this $k$ satisfies $k \ge 1$, and $p \mid \operatorname{ord}(a)$.
6. (Quotient groups) If $G$ is a $p$-group with $|G| = p^n$ and $N$ is a normal subgroup of $G$ with $|N| = p^k$ ($0 \le k \le n$), then the quotient group $G/N$ is a $p$-group and $|G/N| = p^{n-k}$.
7. (Homomorphic images and isomorphic groups) Let $G'$ be a group and $\varphi : G \to G'$ a group homomorphism. If $H$ is a $p$-subgroup of $G$, then the image $\varphi(H)$ is a $p$-subgroup of $G'$ and $|\varphi(H)|$ divides $|H|$. In particular, if $G$ is a $p$-group, then $\varphi(G)$ is a $p$-subgroup of $G'$. Moreover, if $G$ is a $p$-group and $G \cong G'$, then $G'$ is also a $p$-group.
8. ($p$-subgroups of a finite group) Let $G$ be a finite group. Then $|G|$ is a natural number, and by item (5) of the entry on powers of a prime there is exactly one pair $(r, m)$ of an integer $r \ge 0$ and a natural number $m$ with $|G| = p^r \cdot m$ and $p \nmid m$. A subgroup $H$ of $G$ is a $p$-subgroup of $G$ if and only if there is an integer $k \ge 0$ with $|H| = p^k$, and in that case $k \le r$. In particular, if $p \nmid |G|$, then $\{e\}$ is the only $p$-subgroup of $G$.
:::

## 직관

$p$-군은 원소의 개수가 $1, p, p^2, p^3, \dots$ 가운데 하나인 유한군입니다. 이 조건 하나에서 군 안의 여러 "크기"가 모두 $p$의 거듭제곱이 됩니다. 라그랑주 정리는 군을 부분군 $H$의 잉여류로, 크기가 $|H|$로 같은 조각들로 나누고 $|G| = [G : H] \cdot |H|$를 줍니다. $p^n$을 두 자연수의 곱으로 쓰면 두 인수가 모두 $p$의 거듭제곱이므로([[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 (3)), 부분군의 크기도 지표도 $p$의 거듭제곱입니다((4)). 원소의 위수와 몫군의 크기도 같은 까닭으로 $p$의 거듭제곱입니다((5), (6)).

$p^n$장의 카드를 같은 장수씩 묶는 일에 비유할 수 있습니다. 한 묶음의 장수와 묶음의 개수가 모두 $p$의 거듭제곱일 수밖에 없습니다. 묶음 하나가 잉여류 하나, 한 묶음의 장수가 $|H|$, 묶음의 개수가 지표 $[G : H]$에 해당하고, "같은 장수씩"이 잉여류들의 크기가 모두 같다는 라그랑주 정리의 내용에 해당합니다. 밑이 소수가 아닌 $4$이면 비유가 깨집니다. $4^1 = 4$장을 $2$장씩 묶으면 묶음의 장수 $2$는 $4$의 거듭제곱이 아닙니다.

$n = 0$, 곧 원소가 하나뿐인 군도 $p$-군에 넣습니다. 그러면 $p$-군의 부분군은 언제나 $p$-군이 되고((4)에서 $H = \{e\}$인 경우), 원소의 개수가 $p$로 나누어떨어지지 않는 유한군에도 $p$-부분군 $\{e\}$가 있습니다((8)). 대신 원소가 하나인 군은 모든 소수에 대해 $p$-군이므로, "$G$의 소수 $p$"를 말할 수 있는 것은 원소가 둘 이상일 때입니다((2)).

## 증명

:::idea
(4), (5), (6)은 모두 "$p^n$의 양의 약수는 $p^k$ 꼴"이라는 사실에 라그랑주 정리, 원소의 위수가 군의 위수를 나눈다는 사실, 몫군의 원소의 개수가 지표라는 사실을 넣은 것이다. (7)은 제1 동형 정리로 상을 몫군에 맞추고, (8)은 $p^k \mid p^r m$이면 $k \le r$이라는 것이다.
:::

:::hint
(2)에서 $p^n = q^m$이고 $n, m \ge 1$이면 $p$는 $q^m$의 양의 약수입니다. $q^m$의 양의 약수가 어떤 꼴인지, 그리고 그 꼴의 수가 소수가 되는 것은 언제인지 생각합니다.
:::

:::hint
(7)에서 $\varphi$를 $H$로 제한한 준동형 $\psi$를 잡으면 제1 동형 정리에 의해 $H/\operatorname{Ker} \psi \cong \varphi(H)$입니다. 왼쪽은 $p$-군의 몫군입니다.
:::

:::proof
정수의 부등식은 [[prime-number|소수]]의 진술의 (Z1)과 [[well-ordering-principle|정렬 원리]]의 진술의 (Z5), (L1), (L2)를 인용하고, 정수의 계산(교환법칙)은 정렬 원리의 진술에서 받아들인 계산 법칙으로 쓴다. 아래에서 "PPD"는 [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 진술을 가리킨다. PPD의 (2)에 의해 $p \ge 2$이다.

먼저 다음 사실 (가)를 보인다: *유한군 $K$의 부분군 $L$에 대하여, $L \ne \{e\}$인 것은 정확히 $|L| \ge 2$일 때이다.* [[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 $L$은 유한집합이고 $|L| \ge 1$이다. $L = \{e\}$이면 [[group|군]]의 (5)에 의해 $|L| = 1$이므로 $|L| \ge 2$가 아니다((L1)). $L \ne \{e\}$이면, [[subgroup|부분군]]의 (1)에 의해 $e \in L$이므로 $\{e\} \subseteq L$이고, [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $|\{e\}| < |L|$, 곧 $1 < |L|$이며 (Z1)에 의해 $|L| \ge 2$이다.

**(1)** $G$의 원소가 하나이면 $G$는 유한집합이고 $|G| = 1 = p^0$이므로(PPD의 $0$제곱) $G$는 $p$-군이다. 모든 군 $G$에서 $\{e\}$는 부분군의 (4)에 의해 $G$의 부분군이고, 군 $\{e\}$는 원소가 하나이므로 앞 문장에 의해 $p$-군이다. 따라서 $\{e\}$는 $G$의 $p$-부분군이다.

**(2)** $|G| = p^n = p^{n'}$이면 PPD의 (2)에 의해 $n = n'$이다.

$G$가 $q$-군이기도 하여 $p^n = |G| = q^m$인 정수 $m \ge 0$이 있다고 하자. $|G| \ne 1$이라 가정하자. $n = 0$이면 $|G| = p^0 = 1$이므로 $n \ne 0$이다. $0 \le n$이므로 (L1)에 의해 $n < 0$이 아니고, (Z5)에 의해 $n > 0$이며 (Z1)에 의해 $n \ge 1$이다. 같은 이유로 $m \ge 1$이다. PPD의 (2)에 의해 $p \mid p^n = q^m$이고 $p \ge 2 > 0$이므로 $p$는 $q^m$의 양의 약수이다. 소수 $q$에 대한 PPD의 (3)에 의해 $p = q^j$인 정수 $j$가 $0 \le j \le m$에 있다. $p$는 소수이므로 소수 $q$에 대한 PPD의 (6)에 의해 $j = 1$이고 $p = q^1 = q$이다. 이는 $q \ne p$에 어긋난다. 따라서 $|G| = 1$이다.

마지막 문장은 앞 문장의 대우이다: 원소가 둘 이상인 군이 서로 다른 두 소수 $p$, $q$에 대하여 $p$-군이면서 $q$-군이면 원소가 하나여야 하므로 어긋난다.

**(3)** (i) ⇒ (ii): $n \ge 1$이면 PPD의 (2)에 의해 $|G| = p^n \ge p \ge 2$이다.

(ii) ⇒ (i): $n \ge 1$이 아니면, (Z1)에 의해 $n > 0$이 아니고 $0 \le n$과 (L1)에 의해 $n < 0$도 아니므로 (Z5)에 의해 $n = 0$이고 $|G| = p^0 = 1$이 되어 $|G| \ge 2$에 어긋난다((L1)).

(ii) ⇔ (iii): $G$는 군 $G$ 자신의 부분군이므로(부분군의 (4)) (가)를 $K = L = G$에 쓰면 된다.

(i) ⇒ (iv): PPD의 (2)에 의해 $n \ge 1$이면 $p \mid p^n = |G|$이다.

(iv) ⇒ (i): $n \ge 1$이 아니면 위와 같이 $n = 0$이고 $|G| = 1$인데, PPD의 (7)에 의해 $p^0 = 1$은 $p$로 나누어떨어지지 않으므로 $p \mid |G|$에 어긋난다.

**(4)** 라그랑주 정리의 (1)에 의해 $H$는 유한집합이고 $|H| \ge 1$이며 $|G| = [G : H] \cdot |H|$이므로 $|H|$는 $p^n$의 양의 약수이다. PPD의 (3)에 의해 $0 \le k \le n$이고 $|H| = p^k$인 정수 $k$가 있다. PPD의 (2)에 의해 $k \le n$이므로 $p^n = p^k \cdot p^{n-k} = p^{n-k} \cdot p^k$이다. 곧 정수 $x = p^{n-k}$가 등식 $|G| = x \cdot |H|$를 만족하므로, 라그랑주 정리의 (1)의 유일성에 의해 $[G : H] = p^{n-k}$이다. 군 $H$([[subgroup|부분군]]의 정의에 의해 제한한 연산으로 군이다)는 유한군이고 $|H| = p^k$이므로 $p$-군이다. 곧 $H$는 $G$의 $p$-부분군이다.

$H \ne G$라 하자. $H \subseteq G$이고 $G$는 원소를 $p^n$개 가지므로 유한집합의 부분집합의 (2)에 의해 $p^k = |H| < p^n$이다. $k = n$이면 $p^k = p^n$이 되어 (L1)에 어긋나므로 $k \ne n$이고, $k \le n$과 (Z5)에 의해 $k < n$이다. 따라서 $n - k \ge 1$이고 PPD의 (2)에 의해 $p \mid p^{n-k} = [G : H]$이다.

**(5)** $G$는 유한군이므로 [[order-divides-group-order|원소의 위수와 군의 위수]]의 (1)에 의해 $a$의 위수는 유한하고 $\operatorname{ord}(a) \mid |G| = p^n$이다. [[order-of-an-element|원소의 위수]]의 정의에 의해 $\operatorname{ord}(a)$는 자연수이므로 $p^n$의 양의 약수이고, PPD의 (3)에 의해 $\operatorname{ord}(a) = p^k$인 $0 \le k \le n$이 있다.

$a \ne e$라 하자. $k = 0$이면 $\operatorname{ord}(a) = p^0 = 1$이고 원소의 위수의 (1)에 의해 $a = e$가 되어 어긋난다. 따라서 $k \ne 0$이고, $0 \le k$이므로 (L1)에 의해 $k < 0$이 아니며, (Z5)에 의해 $k > 0$이고 (Z1)에 의해 $k \ge 1$이다. PPD의 (2)에 의해 $p \mid p^k = \operatorname{ord}(a)$이다.

**(6)** $G$는 유한군이므로 [[quotient-group|몫군]]의 (5)에 의해 $N$의 지표는 유한하고 $G/N$은 유한군이며 $|G/N| = [G : N]$이다. (4)를 부분군 $N$에 쓰면 $|N| = p^{k'}$이고 $[G : N] = p^{n-k'}$인 $0 \le k' \le n$이 있다. $p^{k'} = |N| = p^k$이므로 PPD의 (2)에 의해 $k' = k$이다. 따라서 $|G/N| = p^{n-k}$이고, $G/N$은 $p$-군이다.

**(7)** 먼저 다음 (나)를 보인다: *$K$가 $p$-군이고 $\psi : K \to G'$이 군 준동형이면 $\psi(K)$는 $G'$의 $p$-부분군이고 $|\psi(K)|$는 $|K|$를 나눈다.* $|K| = p^s$라 하자. [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (1)과 (4)에 의해 $\operatorname{Ker} \psi$는 $K$의 부분군이고 $\psi(K)$는 $G'$의 부분군이다. [[normal-subgroup|정규부분군]]의 (4)에 의해 $\operatorname{Ker} \psi$는 $K$의 정규부분군이고, (4)에 의해 $|\operatorname{Ker} \psi| = p^l$인 $0 \le l \le s$가 있다. (6)을 $p$-군 $K$와 그 정규부분군 $\operatorname{Ker} \psi$에 쓰면 $K/\operatorname{Ker} \psi$는 $p$-군이고 $|K/\operatorname{Ker} \psi| = p^{s-l}$이다. [[first-isomorphism-theorem|제1 동형 정리]]의 (1)에 의해 군 $K/\operatorname{Ker} \psi$에서 군 $\psi(K)$로의 동형사상이 있으므로, [[group-isomorphism|군의 동형]]의 (3)(iii)에 의해 $\psi(K)$는 유한군이고 $|\psi(K)| = p^{s-l}$이다. 따라서 $\psi(K)$는 $G'$의 $p$-부분군이다. 또 PPD의 (2)에 의해 $|K| = p^s = p^{s-l} \cdot p^l$이므로 $|\psi(K)| \mid |K|$이다([[divisibility|나누어떨어짐]]).

이제 $H$가 $G$의 $p$-부분군이라 하자. [[group-homomorphism|군 준동형]]의 (5)(i)에 의해 제한 $\psi = \varphi|_H : H \to G'$은 군 $H$에서 군 $G'$으로의 준동형이고, 모든 $h \in H$에서 $\psi(h) = \varphi(h)$이다. 따라서 준동형의 핵과 상의 정의에 의해 $y \in \psi(H)$인 것과 $y \in \varphi(H)$인 것은 둘 다 정확히 $y = \varphi(h)$인 $h \in H$가 있을 때이므로 $\psi(H) = \varphi(H)$이다. 군 $H$는 $p$-군이므로 (나)를 $K = H$에 쓰면 $\varphi(H)$는 $G'$의 $p$-부분군이고 $|\varphi(H)|$는 $|H|$를 나눈다. $G$가 $p$-군이면 (나)를 $K = G$, $\psi = \varphi$에 쓰면 $\varphi(G)$는 $G'$의 $p$-부분군이다.

$G$가 $p$-군이고 $\varphi : G \to G'$이 동형사상이라 하자. 군의 동형의 (3)(iii)에 의해 $G'$은 유한군이고 $|G'| = |G| = p^n$이므로 $G'$은 $p$-군이다.

**(8)** $G$는 부분군의 (4)에 의해 $G$ 자신의 부분군이므로, 라그랑주 정리의 (1)에 의해 $|G| \ge 1$, 곧 $|G|$는 자연수이고 쌍 $(r, m)$은 PPD의 (5)가 준다.

$H$가 $G$의 부분군이면 라그랑주 정리의 (1)에 의해 $H$는 유한집합이므로 군 $H$는 유한군이다. 따라서 $p$-군의 정의에 의해 $H$가 $p$-부분군인 것은 정확히 $|H| = p^k$인 $0$ 이상인 정수 $k$가 있을 때이다. 그때 라그랑주 정리의 (1)에 의해 $p^k = |H|$는 $|G|$를 나누므로, PPD의 (5)의 "이 $r$에 대하여 $p^k \mid |G|$인 것은 정확히 $k \le r$일 때"에 의해 $k \le r$이다.

$p \nmid |G|$이면 PPD의 (5)에 의해 $r = 0$이다. $H$가 $G$의 $p$-부분군이고 $|H| = p^k$이면 $0 \le k \le 0$이므로 (L2)에 의해 $k = 0$이다. 그러면 (3)의 (i)이 성립하지 않으므로 (3)에 의해 (iii)도 성립하지 않아 $H = \{e\}$이다. 거꾸로 $\{e\}$는 (1)에 의해 $G$의 $p$-부분군이다. $\blacksquare$
:::

## 예시와 반례

:::example[$(\mathbb{Z}_8, +)$는 $2$-군]
[[number-groups|수로 이루어진 군]]의 (4)에 의해 $(\mathbb{Z}_8, +)$는 유한군이고 $|\mathbb{Z}_8| = 8 = 2^3$이므로 $2$-군입니다. (4)에 의해 그 부분군은 원소를 $1, 2, 4, 8$개 가운데 하나만큼 갖고, 지표는 각각 $8, 4, 2, 1$입니다. 예를 들어 $\{[0], [4]\}$가 부분군이면 원소가 $2 = 2^1$개이므로 지표는 $2^{3-1} = 4$입니다. (5)에 의해 원소의 위수는 $1, 2, 4, 8$ 가운데 하나이고, 실제로 [[order-of-an-element|원소의 위수]]의 (7)에 의해 $\operatorname{ord}([1]) = 8 = 2^3$입니다.

$(\mathbb{Z}_8, +)$는 $2$와 다른 소수 $q$에 대해서는 $q$-군이 아닙니다. 원소가 둘 이상이므로 (2)에 의해 $2$-군이 되는 소수는 $2$ 하나뿐입니다.
:::

:::example[원소가 하나인 군]
원소가 하나인 군, 예를 들어 [[number-groups|수로 이루어진 군]]의 (5)의 $(\mathbb{Z}_1, \cdot) = (\{[0]\}, \cdot)$는 $1 = 2^0 = 3^0 = 5^0$이므로 (1)에 의해 $2$-군이고 $3$-군이고 $5$-군입니다. (2)의 "소수가 하나로 정해진다"는 원소가 둘 이상일 때의 말이고, 이 군은 그 예외입니다. 이 군에서 (3)의 네 조건은 모두 성립하지 않습니다.
:::

:::counterexample[원소가 $6$개인 $(\mathbb{Z}_6, +)$]
$(\mathbb{Z}_6, +)$는 원소가 $6$개인 유한군입니다. 어떤 소수 $p$와 $0$ 이상인 정수 $n$에 대해 $6 = p^n$이라 해 봅시다. $6 \ne 1$이므로 $n \ge 1$입니다. $6 = 2 \cdot 3$이므로 소수 $2$와 $3$은 모두 $p^n$의 양의 약수이고, [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 (3)과 (6)에 의해 $2 = p$이고 $3 = p$여서 어긋납니다. 따라서 $(\mathbb{Z}_6, +)$는 어떤 $p$에 대해서도 $p$-군이 아닙니다.

(5)의 쪽에서 보면, [[order-of-an-element|원소의 위수]]의 (7)에 의해 $\operatorname{ord}([1]) = 6$인데 $6$은 위와 같은 까닭으로 어떤 소수의 거듭제곱도 아닙니다. $(\mathbb{Z}_6, +)$가 $p$-군이었다면 (5)에 의해 $\operatorname{ord}([1])$이 $p$의 거듭제곱이어야 하므로, 이것으로도 $p$-군이 아님을 알 수 있습니다.
:::

## 확인 질문

:::check[원소가 $25$개인 군에서 $e$가 아닌 원소의 위수는 무엇일 수 있는가?]
$25 = 5^2$이므로 이 군은 $5$-군이고 $n = 2$입니다. (5)에 의해 $e$가 아닌 원소 $a$의 위수는 $5^k$이고 $1 \le k \le 2$이므로 $\operatorname{ord}(a)$는 $5$이거나 $25$입니다. (5)만으로는 두 값 가운데 어느 것인지 정해지지 않습니다. 예를 들어 [[number-groups|수로 이루어진 군]]의 $(\mathbb{Z}_{25}, +)$에서 [[order-of-an-element|원소의 위수]]의 (7)에 의해 $\operatorname{ord}([1]) = 25$입니다.
:::

:::check[원소가 $16$개인 군 $G$와 원소가 $4$개인 정규부분군 $N$에서 몫군 $G/N$의 원소의 위수는 무엇일 수 있는가?]
$16 = 2^4$, $4 = 2^2$이므로 (6)에 의해 $G/N$은 $2$-군이고 $|G/N| = 2^{4-2} = 4$입니다. (5)를 $2$-군 $G/N$에 쓰면($n = 2$) 그 원소의 위수는 $2^0, 2^1, 2^2$, 곧 $1, 2, 4$ 가운데 하나입니다. 위수가 $1$인 원소는 항등원 $N$ 하나뿐입니다([[order-of-an-element|원소의 위수]]의 (1)).
:::
