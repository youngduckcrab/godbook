---
title: 교대군
title_en: Alternating Group
aliases: [A_n, A_X, 교대군 A4, 짝치환의 군, alternating group]
kind: theorem
field: group-theory
msc: ["20B30", "20B35"]
level: undergrad
summary: 유한집합 X의 짝치환 전체 A_X는 대칭군 S_X의 정규부분군이고, X에 서로 다른 두 원소가 있으면 지표가 2여서 짝치환과 홀치환의 개수가 같다. A₃은 원소가 셋, A₄는 원소가 열둘이며 S₃과 A₄의 원소를 모두 적는다.
requires: [set, function, finite-set, cyclic-subgroup, adding-or-removing-an-element, number-of-elements-is-unique, subset-of-finite-set, well-ordering-principle, division-theorem, group, symmetric-group, subgroup, subgroup-criteria, left-coset, lagrange-theorem, normal-subgroup, homomorphism-kernel-and-image, order-of-an-element, order-of-symmetric-group, cycle-permutation, support-of-a-permutation, parity-of-a-permutation, sign-of-a-permutation]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 5.1절 The Alternating Groups, A_n 의 정의와 Theorem 5.16(p.64), Proposition 5.17 과 Example 5.18(p.65); 10.1절 Example 10.5(p.126); 5.4절 Exercises, 연습문제 6, 35(p.71, p.73); 10.4절 Exercises, 연습문제 1, 10(p.130–131)
    checked: original
    note: "출처는 짝치환 전체를 A_n 으로 쓰고 n 개의 문자 위의 교대군이라 한 뒤(p.64), Theorem 5.16(p.64)에서 부분군임을 닫힘, 항등원, 역(호환을 거꾸로)으로 보이고, Proposition 5.17(p.65)에서 n ≥ 2 이면 짝치환과 홀치환의 개수가 같아 A_n 의 위수가 n!/2 라고 한다. 그 증명은 호환 σ 하나를 정해 λ_σ(τ) = στ 가 A_n 에서 홀치환 전체 B_n 으로의 단사임을 보이고 전사는 독자에게 남긴다. 이 항목은 A_X 를 sign-of-a-permutation 의 부호의 핵으로 보아 부분군과 정규부분군을 함께 얻고(출처는 정규성을 10.4절 연습문제 1(a)(p.130, A_4 가 S_4 의 정규부분군인지 묻는다)과 연습문제 5.35(p.73, τ⁻¹στ ∈ A_n)에서 다루고, 13.2절 Example 13.16(p.163–164)에서 n ≥ 5 일 때 S_n/A_n ≅ Z_2 라고 적는다. 6.5절 연습문제 5(e)(p.79)는 S_n 에서 A_n 의 잉여류를 적게 한다), 개수는 홀치환 전체가 왼쪽 잉여류 τA_X 와 같다는 것과 라그랑주 정리로 센다. 이 사이트는 정수의 나눗셈 n/2 를 쓰지 않으므로 2·|A_n| = n! 으로 쓴다. 출처 10.1절 Example 10.5(p.126)는 S_3 에서 N = {(1), (1 2 3), (1 3 2)} 의 잉여류가 N 과 (1 2)N 이고 N = A_3, (1 2)N = {(1 2), (1 3), (2 3)} 이 홀치환 전체라고 적는다. 이것은 (2)와 (4)를 X = {1, 2, 3} 에서 본 것과 같다. (5)의 A_4 의 원소 열두 개는 출처 Example 5.18(p.65)이 늘어놓은 것과 같은 목록이다(순서도 3-순환치환은 같다). 출처는 Example 5.18 에서 'A_4 에는 열두 원소가 있다'며 목록을 적고, 이 항목은 목록이 A_4 전체라는 것을 원소들이 짝치환이고 서로 다르며 |A_4| = 12 라는 것으로 보인다. (6)의 V 는 출처 Example 13.19(p.165)의 A_4 ⊃ {(1), (1 2)(3 4), (1 3)(2 4), (1 4)(2 3)} 과 6.4절 Reading Question 3(p.78)의 같은 집합과 같다. 출처 10.4절 연습문제 10(p.131)은 지표가 2 인 부분군이 정규부분군임을 보이고 'S_n 은 n ≥ 3 이면 단순군이 아니다'를 이끌게 한다. 예시 'A₃은 순환군이다'는 Example 10.5 의 N = A_3 과 같은 대상이고, 5.3절 Reading Question 4(p.70, A_3 과 본질적으로 같은 군을 말하라)와 같은 물음이다. 반례 'S₃의 홀치환 세 개는 부분군을 이루지 않는다'는 출처 Theorem 5.16 의 증명이 짝치환에 대해 쓰는 닫힘과 항등원의 계산을 홀치환에 대해 따져 본 것과 같은 발상이다. 확인 질문 '$A_4$에 위수가 $4$인 원소가 있는가?'는 출처 연습문제 5.6(p.71, A_4 의 부분군과 그 위수)과 같은 대상을 다룬다. 확인 질문 '$X = \\\\{1, 2, 3, 4, 5\\\\}$일 때 $A_X$의 원소는 몇 개인가?'는 출처 Proposition 5.17 을 n = 5 에 쓴 것이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(궤도 개수·홀짝 판정에 경계값, A₄ 논법 통독, 빠진 겹침(11.1절 곱셈표)을 돌려보내 반영). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$X$가 [[finite-set|유한집합]]이라 하자. $S_X$와 그 곱, 항등치환 $i_X$는 [[symmetric-group|대칭군]], 순환치환과 호환은 [[cycle-permutation|순환치환]], 짝치환과 홀치환은 [[parity-of-a-permutation|치환의 홀짝]], 부호 $\operatorname{sgn}$은 [[sign-of-a-permutation|치환의 부호]], 잉여류와 지표 $[G : H]$는 [[left-coset|잉여류]]와 [[lagrange-theorem|라그랑주 정리]]의 것이다.

$$A_X = \{\sigma \in S_X : \sigma \text{는 짝치환}\}$$
을 $X$ 위의 **교대군**(alternating group)이라 한다. $n$이 자연수이면 $A_{\{1, \dots, n\}}$을 $A_n$으로 쓴다.

1. (정규부분군) $A_X$는 부호 $\operatorname{sgn} : S_X \to \{1, -1\}$의 핵이고, $S_X$의 [[normal-subgroup|정규부분군]]이다. 따라서 $A_X$는 $S_X$의 [[subgroup|부분군]]이고, 짝치환 둘의 곱과 짝치환의 역은 짝치환이다.
2. (지표 $2$) $X$에 서로 다른 두 원소가 있고 $\tau \in S_X$가 호환이면, 왼쪽 잉여류 $\tau A_X$는 홀치환 전체의 집합이고 $S_X/A_X = \{A_X, \tau A_X\}$이며 $A_X \ne \tau A_X$이다. 따라서 $[S_X : A_X] = 2$이고 $|S_X| = 2 \cdot |A_X|$이며, 홀치환 전체의 집합도 원소를 $|A_X|$개 갖는다. 특히 $n \ge 2$인 자연수 $n$에 대하여 $2 \cdot |A_n| = n!$이다.
3. (원소가 하나 이하) $X$의 원소가 하나 이하이면 $A_X = S_X = \{i_X\}$이다.
4. ($A_3$) $A_3 = \{i, (1\ 2\ 3), (1\ 3\ 2)\}$이고 $|A_3| = 3$이다. 여기서 $i$는 $\{1, 2, 3\}$의 항등치환이다.
5. ($A_4$) $i$를 $\{1, 2, 3, 4\}$의 항등치환이라 하고
   $$
   \begin{aligned}
   C = \{&(1\ 2\ 3), (1\ 3\ 2), (1\ 2\ 4), \\
   &(1\ 4\ 2), (1\ 3\ 4), (1\ 4\ 3), \\
   &(2\ 3\ 4), (2\ 4\ 3)\},
   \end{aligned}
   $$
   $$
   \begin{aligned}
   D = \{&(1\ 2)(3\ 4),\ (1\ 3)(2\ 4), \\
   &(1\ 4)(2\ 3)\}
   \end{aligned}
   $$
   로 두자. 그러면 $A_4 = \{i\} \cup C \cup D$이고, 여기에 적은 열두 치환은 서로 다르다. 따라서 $|C| = 8$, $|D| = 3$, $|A_4| = 12$이다. $C$의 모든 원소의 위수는 $3$이고, $D$의 모든 원소의 위수는 $2$이다.
6. ($A_4$의 부분군 $V$) $V = \{i\} \cup D$는 $A_4$의 부분군이고 $|V| = 4$이다. $D$의 서로 다른 두 원소의 곱은 $D$의 나머지 한 원소이다.
7. ($S_3$의 원소) $\{1, 2, 3\}$ 위에서 $(1\ 2)A_3 = \{(1\ 2), (1\ 3), (2\ 3)\}$이고 이것이 $S_3$의 홀치환 전체이며,
   $$
   \begin{aligned}
   S_3 &= A_3 \cup (1\ 2)A_3 \\
   &= \{i, (1\ 2\ 3), (1\ 3\ 2), \\
   &\qquad (1\ 2), (1\ 3), (2\ 3)\}
   \end{aligned}
   $$
   이고, 여기에 적은 여섯 치환은 서로 다르다.
8. ($S_4$의 길이 $3$인 순환치환) (5)의 $C$는 $S_4$의 길이 $3$인 순환치환 전체의 집합이다. 곧 $\sigma \in S_4$가 길이 $3$인 순환치환인 것은 정확히 $\sigma \in C$일 때이다.
:::

:::english
Let $X$ be a finite set. $S_X$, its product and the identity permutation $i_X$ are as in the entry on the symmetric group; cycles and transpositions are as in the entry on cycles; even and odd permutations are as in the entry on the parity of a permutation; the sign $\operatorname{sgn}$ is as in the entry on the sign of a permutation; and cosets and the index $[G : H]$ are as in the entries on cosets and on Lagrange's theorem.

$$A_X = \{\sigma \in S_X : \sigma \text{ is even}\}$$
is called the **alternating group** on $X$. For a natural number $n$, $A_{\{1, \dots, n\}}$ is written $A_n$.

1. (Normal subgroup) $A_X$ is the kernel of the sign $\operatorname{sgn} : S_X \to \{1, -1\}$ and is a normal subgroup of $S_X$. Hence $A_X$ is a subgroup of $S_X$, and the product of two even permutations and the inverse of an even permutation are even.
2. (Index $2$) If $X$ has two distinct elements and $\tau \in S_X$ is a transposition, then the left coset $\tau A_X$ is the set of all odd permutations, $S_X/A_X = \{A_X, \tau A_X\}$, and $A_X \ne \tau A_X$. Hence $[S_X : A_X] = 2$, $|S_X| = 2 \cdot |A_X|$, and the set of all odd permutations also has $|A_X|$ elements. In particular, $2 \cdot |A_n| = n!$ for every natural number $n \ge 2$.
3. (At most one element) If $X$ has at most one element, then $A_X = S_X = \{i_X\}$.
4. ($A_3$) $A_3 = \{i, (1\ 2\ 3), (1\ 3\ 2)\}$ and $|A_3| = 3$, where $i$ is the identity permutation of $\{1, 2, 3\}$.
5. ($A_4$) Let $i$ be the identity permutation of $\{1, 2, 3, 4\}$ and put
   $$
   \begin{aligned}
   C = \{&(1\ 2\ 3), (1\ 3\ 2), (1\ 2\ 4), \\
   &(1\ 4\ 2), (1\ 3\ 4), (1\ 4\ 3), \\
   &(2\ 3\ 4), (2\ 4\ 3)\},
   \end{aligned}
   $$
   $$
   \begin{aligned}
   D = \{&(1\ 2)(3\ 4),\ (1\ 3)(2\ 4), \\
   &(1\ 4)(2\ 3)\}.
   \end{aligned}
   $$
   Then $A_4 = \{i\} \cup C \cup D$, and the twelve permutations listed here are distinct. Hence $|C| = 8$, $|D| = 3$ and $|A_4| = 12$. Every element of $C$ has order $3$, and every element of $D$ has order $2$.
6. (The subgroup $V$ of $A_4$) $V = \{i\} \cup D$ is a subgroup of $A_4$ and $|V| = 4$. The product of two distinct elements of $D$ is the remaining element of $D$.
7. (Elements of $S_3$) On $\{1, 2, 3\}$, $(1\ 2)A_3 = \{(1\ 2), (1\ 3), (2\ 3)\}$, this is the set of all odd permutations in $S_3$,
   $$
   \begin{aligned}
   S_3 &= A_3 \cup (1\ 2)A_3 \\
   &= \{i, (1\ 2\ 3), (1\ 3\ 2), \\
   &\qquad (1\ 2), (1\ 3), (2\ 3)\},
   \end{aligned}
   $$
   and the six permutations listed here are distinct.
8. (Cycles of length $3$ in $S_4$) The set $C$ of (5) is the set of all cycles of length $3$ in $S_4$; that is, $\sigma \in S_4$ is a cycle of length $3$ exactly when $\sigma \in C$.
:::

## 직관

짝치환은 짝수 번의 맞바꿈으로 얻는 치환입니다. 짝수 번 맞바꾼 뒤 또 짝수 번 맞바꾸면 짝수 번이고, 거꾸로 되돌리는 것도 같은 횟수의 맞바꿈이므로, 짝치환 전체는 곱과 역에 대해 닫혀 있습니다. 이것이 (1)이 말하는 부분군입니다. 부호를 쓰면 더 짧게, 부호가 $1$인 치환 전체, 곧 준동형의 핵이라고 말할 수 있습니다.

호환 하나를 정해 두고 짝치환마다 그 호환을 왼쪽에 곱하면 홀치환이 나오고, 이것은 짝치환과 홀치환을 하나씩 짝짓는 일입니다. 그래서 $X$에 서로 다른 두 원소가 있어 호환이 있으면 짝치환과 홀치환의 수가 같고, 대칭군의 절반이 교대군입니다. $X$의 원소가 하나 이하이면 호환이 없고 치환은 항등치환뿐이므로 교대군이 대칭군 전체입니다.

## 증명

:::idea
$A_X$를 부호의 핵으로 보면 정규부분군이라는 것은 핵의 일반 성질이다. 홀치환 전체가 잉여류 $\tau A_X$와 같다는 것은 $\operatorname{sgn}(\tau\sigma) = -\operatorname{sgn} \sigma$에서 나온다. $A_3$과 $A_4$는 짝치환을 늘어놓고 개수를 맞춘다.
:::

:::hint
$\sigma \in \tau A_X$인 것은 정확히 $\tau^{-1}\sigma \in A_X$일 때이다. $\tau^{-1} = \tau$이고 부호는 준동형이다.
:::

:::hint
$A_4$의 원소가 열두 개라는 것은 (2)에서 나오고, 목록의 열두 치환이 모두 짝치환이고 서로 다르면 목록이 $A_4$ 전체이다.
:::

:::proof
**(1)** [[sign-of-a-permutation|치환의 부호]]의 (2)에 의해 $\operatorname{sgn}$의 핵은 짝치환 전체, 곧 $A_X$이다. 부호의 (1)에 의해 $\operatorname{sgn}$은 군 준동형이므로 [[normal-subgroup|정규부분군]]의 (4)에 의해 $A_X$는 $S_X$의 정규부분군이고, [[homomorphism-kernel-and-image|준동형의 핵]]의 (1)에 의해 부분군이다. 부분군은 곱과 역에 대해 닫혀 있으므로([[subgroup|부분군]]의 정의와 (2)) 짝치환 둘의 곱과 짝치환의 역은 $A_X$에 속한다.

**(2)** [[cycle-permutation|순환치환]]의 (5)에 의해 $\tau^{-1} = \tau$이고, 부호의 (4)에 의해 $\operatorname{sgn} \tau = -1$이다. $\sigma \in S_X$라 하자. [[left-coset|잉여류]]의 (3)에 의해 $\sigma \in \tau A_X$인 것은 정확히 $\tau^{-1}\sigma = \tau\sigma \in A_X$일 때, 곧 $\operatorname{sgn}(\tau\sigma) = 1$일 때이다. 부호의 (1)에 의해 $\operatorname{sgn}(\tau\sigma) = (-1) \cdot \operatorname{sgn} \sigma$이므로, 이것은 정확히 $\operatorname{sgn} \sigma = -1$, 곧 $\sigma$가 홀치환일 때이다. 따라서 $\tau A_X$는 홀치환 전체의 집합이다.

$g \in S_X$이면 [[parity-of-a-permutation|치환의 홀짝]]의 (2)에 의해 $g$는 짝치환이거나 홀치환이다. 짝치환이면 $g \in A_X$이므로 잉여류의 (5)에 의해 $gA_X = A_X$이다. 홀치환이면 $g \in \tau A_X$이므로 잉여류의 (3)에 의해 $gA_X = \tau A_X$이다. 따라서 $S_X/A_X = \{A_X, \tau A_X\}$이다. 잉여류의 (2)에 의해 $\tau \in \tau A_X$이고 $\tau$는 홀치환이라 $\tau \notin A_X$이므로 $A_X \ne \tau A_X$이다. [[group|군]]의 (5)에 의해 $\{A_X\}$는 원소를 $1$개 갖고, [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (a)에 의해 $S_X/A_X$는 원소를 $2$개 갖는다. 곧 $[S_X : A_X] = 2$이다.

[[order-of-symmetric-group|대칭군의 원소의 개수]]의 (2)에 의해 $S_X$는 유한군이고, [[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 $A_X$는 유한집합이며 $|S_X| = 2 \cdot |A_X|$이다. 잉여류의 (6)에 의해 $|\tau A_X| = |A_X|$이다. $n \ge 2$이면 $1$과 $2$는 $\{1, \dots, n\}$의 서로 다른 원소이므로 위의 결과와 대칭군의 원소의 개수의 (3)에 의해 $2 \cdot |A_n| = |S_n| = n!$이다.

**(3)** [[symmetric-group|대칭군]]의 (2)에 의해 $S_X = \{i_X\}$이고, 치환의 홀짝의 (3)에 의해 $i_X$는 짝치환이므로 $A_X = \{i_X\}$이다.

**(4)** 치환의 홀짝의 (3)에 의해 $i$는 짝치환이고, $(1\ 2\ 3)$과 $(1\ 3\ 2)$는 길이 $3$인 순환치환이므로 짝치환이다. 세 치환은 $1$에서의 값이 각각 $1$, $2$, $3$으로 다르므로 서로 다르고, 원소 하나를 더하거나 빼기의 (a)를 두 번 쓰면 $E = \{i, (1\ 2\ 3), (1\ 3\ 2)\}$는 원소를 $3$개 갖는다. (2)와 대칭군의 원소의 개수의 (6)에 의해 $|A_3| \cdot 2 + 0 = 6 = 3 \cdot 2 + 0$이므로 [[division-theorem|나눗셈 정리]]의 유일성에 의해 $|A_3| = 3$이다. $E \subseteq A_3$이고 $|E| = |A_3|$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $E = A_3$이다.

**(5)** 목록의 열두 치환을 $1$, $2$, $3$, $4$에서의 값의 열로 적으면 다음과 같다. 순환치환의 값은 [[cycle-permutation|순환치환]]의 정의로 읽고, $D$의 원소는 오른쪽 호환을 먼저 적용해 계산한다.

| 치환 | $1, 2, 3, 4$에서의 값 |
|---|---|
| $i$ | $1, 2, 3, 4$ |
| $(1\ 2\ 3)$ | $2, 3, 1, 4$ |
| $(1\ 3\ 2)$ | $3, 1, 2, 4$ |
| $(1\ 2\ 4)$ | $2, 4, 3, 1$ |
| $(1\ 4\ 2)$ | $4, 1, 3, 2$ |
| $(1\ 3\ 4)$ | $3, 2, 4, 1$ |
| $(1\ 4\ 3)$ | $4, 2, 1, 3$ |
| $(2\ 3\ 4)$ | $1, 3, 4, 2$ |
| $(2\ 4\ 3)$ | $1, 4, 2, 3$ |
| $(1\ 2)(3\ 4)$ | $2, 1, 4, 3$ |
| $(1\ 3)(2\ 4)$ | $3, 4, 1, 2$ |
| $(1\ 4)(2\ 3)$ | $4, 3, 2, 1$ |

어느 두 열도 같지 않으므로 [[function]]의 함수의 같음에 의해 열두 치환은 서로 다르다. 원소 하나를 더하거나 빼기의 (a)를 거듭 쓰면 $C$는 원소를 $8$개, $D$는 $3$개, $E = \{i\} \cup C \cup D$는 $12$개 갖는다.

$E$의 원소는 모두 짝치환이다. $i$와 $C$의 원소는 치환의 홀짝의 (3)에 의해 짝치환이고, $D$의 원소는 길이 $2$인 호환의 열의 곱이므로 정의에 의해 짝치환이다. 따라서 $E \subseteq A_4$이다. (2)와 대칭군의 원소의 개수의 (6)에 의해 $|A_4| \cdot 2 + 0 = 24 = 12 \cdot 2 + 0$이므로 나눗셈 정리의 유일성에 의해 $|A_4| = 12$이고, 유한집합의 부분집합의 (2)에 의해 $E = A_4$이다.

순환치환의 (4)에 의해 길이 $3$인 순환치환의 위수는 $3$이다. $d \in D$이면 위의 표에서 $d \ne i$이고, $dd$의 값을 계산하면 $(1\ 2)(3\ 4)$는 $1$과 $2$, $3$과 $4$를 맞바꾸므로 두 번 적용하면 모든 점이 제자리로 오고, 나머지 둘도 같다. 따라서 $d^2 = i$이고 $d^1 \ne i$이므로 [[order-of-an-element|원소의 위수]]의 정의에 의해 $\operatorname{ord}(d) = 2$이다.

**(6)** $d = (1\ 2)(3\ 4)$, $d' = (1\ 3)(2\ 4)$, $d'' = (1\ 4)(2\ 3)$이라 하자. 표의 값으로 곱을 계산하면 $dd'$은 $1, 2, 3, 4$를 $d(3), d(4), d(1), d(2) = 4, 3, 2, 1$로 보내므로 $dd' = d''$이다. 같은 방법으로
$$d'd = d'', \quad dd'' = d', \quad d''d = d', \quad d'd'' = d, \quad d''d' = d$$
이다. 예컨대 $dd''$은 $1, 2, 3, 4$를 $d(4), d(3), d(2), d(1) = 3, 4, 1, 2$로 보낸다. (5)에서 $dd = d'd' = d''d'' = i$이고, $i$와의 곱은 그 원소 자신이다. 따라서 $V$의 두 원소의 곱은 $V$에 속한다. $V \ne \emptyset$이고 $A_4$는 유한군이므로 [[subgroup-criteria|부분군 판정법]]의 (4)에 의해 $V$는 $A_4$의 부분군이다. (5)에서 네 원소가 서로 다르므로 $|V| = 4$이다.

**(7)** $\{1, 2, 3\}$은 서로 다른 두 원소 $1$, $2$를 가지므로 (2)를 $\tau = (1\ 2)$에 쓰면 $(1\ 2)A_3$은 $S_3$의 홀치환 전체이고, (4)와 (2)에 의해 원소를 $|A_3| = 3$개 갖는다. 세 호환 $(1\ 2)$, $(1\ 3)$, $(2\ 3)$은 치환의 홀짝의 (3)에 의해 홀치환이고, $1$에서의 값이 각각 $2$, $3$, $1$로 다르므로 서로 다르다. 따라서 이 세 원소의 집합은 원소가 $3$개인 $(1\ 2)A_3$의 부분집합이고 원소의 개수가 같으므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $(1\ 2)A_3$과 같다. 치환의 홀짝의 (2)에 의해 $S_3$의 모든 원소는 짝치환이거나 홀치환이므로 $S_3 = A_3 \cup (1\ 2)A_3$이다. 짝치환이면서 홀치환인 것은 없으므로 $A_3$의 세 원소와 $(1\ 2)A_3$의 세 원소는 서로 다르고, (4)에서 $A_3$의 세 원소는 서로 다르다.

**(8)** $C$의 원소는 [[cycle-permutation|순환치환]]의 표기로 적은 길이 $3$인 순환치환이다. 거꾸로 $\sigma \in S_4$가 길이 $3$인 순환치환이라 하자. 치환의 홀짝의 (3)에 의해 $\sigma$는 짝치환이므로 $\sigma \in A_4 = \{i\} \cup C \cup D$이다. 순환치환의 (2)에 의해 $\sigma \ne i$이고 $|\operatorname{supp} \sigma| = 3$이다([[support-of-a-permutation|치환의 받침]]). (5)의 표에서 $D$의 원소는 네 점을 모두 움직이므로 받침이 $\{1, 2, 3, 4\}$이고 원소가 $4$개이다. $3 \ne 4$이므로 $\sigma \notin D$이고, 따라서 $\sigma \in C$이다.
:::

## 예시와 반례

:::example[A₃은 순환군이다]
(4)에서 $c = (1\ 2\ 3)$이라 하면 $c^2 = cc$는 $1$, $2$, $3$을 각각 $c(2) = 3$, $c(3) = 1$, $c(1) = 2$로 보내므로 $(1\ 3\ 2)$이고, 순환치환의 (4)에 의해 $c^3 = i$입니다. 따라서 $A_3 = \{c^0, c^1, c^2\} \subseteq \langle c \rangle$이고, (1)에 의해 $A_3$은 $c$를 포함하는 부분군이라 순환 부분군의 (2)에 의해 $\langle c \rangle \subseteq A_3$이므로 $A_3 = \langle c \rangle$, 곧 $A_3$은 $c$가 생성하는 [[cyclic-subgroup|순환군]]입니다.
:::

:::counterexample[S₃의 홀치환 세 개는 부분군을 이루지 않는다]
(7)에 의해 $S_3$의 홀치환 전체는 세 호환 $(1\ 2)$, $(1\ 3)$, $(2\ 3)$입니다. 이 집합은 교대군과 원소의 개수가 같지만 부분군이 아닙니다. 항등치환은 짝치환이라 이 집합에 없고, $(1\ 2)(1\ 2) = i$도 이 집합 밖에 있어 곱에 대해 닫혀 있지도 않습니다. 짝·홀의 곱셈 규칙의 "홀 곱하기 홀은 짝"이 이것입니다.
:::

## 확인 질문

:::check[$A_4$에 위수가 $4$인 원소가 있는가?]
없습니다. (5)에 의해 $A_4$의 원소는 $i$(위수 $1$), $C$의 여덟 원소(위수 $3$), $D$의 세 원소(위수 $2$)뿐입니다. 길이 $4$인 순환치환 $(1\ 2\ 3\ 4)$는 위수가 $4$이지만 짝수 길이라 홀치환이므로 $A_4$에 들지 않습니다.
:::

:::check[$X = \{1, 2, 3, 4, 5\}$일 때 $A_X$의 원소는 몇 개인가?]
$60$개입니다. (2)에 의해 $2 \cdot |A_5| = 5! = 120$이고, $120 = 60 \cdot 2 + 0$이므로 나눗셈 정리의 유일성에 의해 $|A_5| = 60$입니다.
:::
