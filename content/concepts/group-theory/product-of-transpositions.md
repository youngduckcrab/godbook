---
title: 호환의 곱으로 나타내기
title_en: Products of Transpositions
aliases: [호환의 곱, 호환으로 분해, 순환치환을 호환으로, product of transpositions, every permutation is a product of transpositions]
kind: theorem
field: group-theory
msc: ["20B30"]
level: undergrad
summary: 길이 k 인 순환치환 (a₁ a₂ ⋯ a_k) 는 k − 1 개의 호환의 곱 (a₁ a_k)(a₁ a_(k−1)) ⋯ (a₁ a₂) 이고, 유한집합의 모든 치환은 호환의 열의 곱이며(항등치환은 빈 곱), 호환의 곱의 역원은 같은 호환들을 거꾸로 곱한 것이다.
requires: [set, function, finite-set, mathematical-induction, prime-number, well-ordering-principle, recursion-theorem, group, group-basic-properties, symmetric-group, finite-product-in-a-group, cycle-permutation, cycle-decomposition]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "5.1절 Transpositions, 호환의 곱의 식과 Proposition 5.12, Example 5.13 (p.63); Theorem 5.16 의 증명 (p.64); 5.4절 Exercises, 연습문제 2, 3 (p.71), 연습문제 20, 21, 26 (p.72); 부록의 힌트 5.4.3 (p.322)"
    checked: original
    note: "(1)의 식은 출처 p.63 의 '(a₁, a₂, …, aₙ) = (a₁, aₙ)(a₁, aₙ₋₁) ⋯ (a₁, a₃)(a₁, a₂)' 이고, 출처는 이 식을 증명 없이 적는다. 이 항목은 k 에 대한 귀납법과 (a₁ ⋯ a_k) = (a₁ a_k)(a₁ ⋯ a_{k−1}) 의 계산으로 증명한다. (2)는 출처 Proposition 5.12(p.63) '원소가 둘 이상인 유한집합의 모든 치환은 호환의 곱으로 쓸 수 있다' 이고, 출처는 앞의 식과 Theorem 5.9 로 '이어진다(leading to)' 고만 한다. 출처가 '원소가 둘 이상' 을 두는 것은 항등치환을 (1 2)(1 2) 처럼 쓰려는 것이고(Example 5.13, p.63), 이 항목은 항등치환을 빈 곱으로 쓰므로 그 조건을 두지 않는다. (3)은 출처 Theorem 5.16 의 증명(p.64)이 'σ = σ₁σ₂⋯σ_r 이면 각 호환의 역은 자기 자신이므로 σ⁻¹ = σ_r σ_{r−1} ⋯ σ₁' 이라 쓰는 것과 같다. (1)에서 길이 k 인 순환치환이 k − 1 개의 호환의 곱이라는 것은 출처 연습문제 5.20(p.72, 순환치환은 많아야 n − 1 개의 호환의 곱)과 관계가 있다. (1)의 호환이 모두 a₁ 을 포함한다는 것은 연습문제 5.26 (a)(p.72, S_n 의 원소는 (1 2), (1 3), …, (1 n) 의 곱)와 같은 발상이고, 연습문제 5.21(p.72)은 순환치환이 아닌 치환을 많아야 n − 2 개의 호환의 곱으로 쓰게 한다. 예시 '$(1\\ 2\\ 3\\ 4)$를 세 호환의 곱으로' 는 출처 연습문제 5.3(p.71)이 순환치환을 호환의 곱으로 쓰게 하는 것과 같은 발상이고, 부록의 힌트 5.4.3(p.322)은 (1 4 3 5 6) = (1 6)(1 5)(1 3)(1 4) 로 (1)과 같은 꼴을 적는다. 반례 '호환의 곱으로 쓰는 방법은 하나가 아닐 수 있다' 는 출처 Example 5.13(p.63)의 'there is no unique way' 와 같은 내용이다. 확인 질문 '$X = \\{1, 2, 3, 4, 5\\}$에서 $(1\\ 2\\ 3)(4\\ 5)$를 호환의 곱으로 쓰면?' 은 출처 연습문제 5.3 (b)(p.71)의 (1 5 6)(2 3 4) 처럼 서로소인 순환치환의 곱을 호환의 곱으로 쓰는 것과 같은 종류이다. 확인 질문 '$\\sigma = (1\\ 3)(1\\ 2)$일 때 $\\sigma^{-1}$을 호환의 곱으로 쓰면?' 은 출처 연습문제 5.2 (o)(p.71)가 호환의 곱 [(1 2)(3 4)(1 2)(4 7)]⁻¹ 을 계산하게 하는 것과 같은 종류이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(호환의 곱 (1) 을 오른쪽부터 계산해 대조, 켤레 (2)(3) 의 유한 가정 확인). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$X$가 [[set|집합]]이고 $S_X$가 [[symmetric-group|대칭군]]이라 하자. 유한 곱과 빈 곱은 [[finite-product-in-a-group|군의 유한 곱]], 순환치환과 호환은 [[cycle-permutation|순환치환]]의 것이다. $S_X$의 원소의 열의 모든 항이 호환일 때 그 열을 **호환의 열**이라 한다.

1. (순환치환) $k \ge 2$가 정수이고 $a_1, \dots, a_k$가 $X$의 서로 다른 원소이면, $j$번째 항이 $(a_1\ a_{k+1-j})$($1 \le j \le k - 1$)인 길이 $k - 1$인 호환의 열의 곱이 $(a_1\ \cdots\ a_k)$이다. 곧
   $$(a_1\ a_2\ \cdots\ a_k) = (a_1\ a_k)(a_1\ a_{k-1}) \cdots (a_1\ a_2)$$
   이다. 특히 $k \ge 3$이면 $(a_1\ \cdots\ a_k) = (a_1\ a_k)(a_1\ \cdots\ a_{k-1})$이다.
2. (모든 치환) $X$가 [[finite-set|유한집합]]이면 모든 $\sigma \in S_X$는 어떤 호환의 열(길이 $0$ 이상)의 곱이다. 항등치환 $i_X$는 빈 열의 곱이다.
3. (역원) $\tau_1, \dots, \tau_r$($r \ge 0$)이 호환의 열이면 $(\tau_1 \cdots \tau_r)^{-1} = \tau_r \cdots \tau_1$이다. 오른쪽은 $j$번째 항이 $\tau_{r+1-j}$인 호환의 열의 곱이다.
:::

:::english
Let $X$ be a set and $S_X$ the symmetric group. Finite products and the empty product are those of the entry on finite products in a group, and cycles and transpositions are as in the entry on cycles. A sequence of elements of $S_X$ all of whose terms are transpositions is called a **sequence of transpositions**.

1. (Cycles) If $k \ge 2$ is an integer and $a_1, \dots, a_k$ are distinct elements of $X$, then the product of the sequence of transpositions of length $k - 1$ whose $j$th term is $(a_1\ a_{k+1-j})$ ($1 \le j \le k - 1$) is $(a_1\ \cdots\ a_k)$. That is,
   $$(a_1\ a_2\ \cdots\ a_k) = (a_1\ a_k)(a_1\ a_{k-1}) \cdots (a_1\ a_2).$$
   In particular, if $k \ge 3$, then $(a_1\ \cdots\ a_k) = (a_1\ a_k)(a_1\ \cdots\ a_{k-1})$.
2. (All permutations) If $X$ is finite, then every $\sigma \in S_X$ is the product of some sequence of transpositions (of length $\ge 0$). The identity $i_X$ is the product of the empty sequence.
3. (Inverses) If $\tau_1, \dots, \tau_r$ ($r \ge 0$) is a sequence of transpositions, then $(\tau_1 \cdots \tau_r)^{-1} = \tau_r \cdots \tau_1$, where the right side is the product of the sequence of transpositions whose $j$th term is $\tau_{r+1-j}$.
:::

## 직관

호환은 두 사람의 자리만 맞바꾸는 가장 단순한 치환입니다. 원탁의 사람들이 한 칸씩 옮기는 순환치환도 두 사람씩 맞바꾸기를 여러 번 하면 만들 수 있습니다. (1)의 식은 $a_1$을 중심으로 $a_2$, $a_3$, …, $a_k$와 차례로 맞바꾸는 것입니다. 곱은 오른쪽부터 적용하므로 먼저 $a_1$과 $a_2$를, 다음에 $a_1$과 $a_3$을 맞바꿉니다.

(2)는 치환을 서로소인 순환치환으로 나눈 뒤 각 순환치환을 (1)로 호환으로 나누면 된다는 것입니다. 쓰는 방법은 하나로 정해지지 않습니다(아래 반례). (3)은 호환이 자기 자신의 역원이어서, 곱의 역원이 같은 호환들을 거꾸로 곱한 것이 된다는 것입니다.

## 증명

:::idea
(1)은 $k \ge 3$에서 $(a_1\ \cdots\ a_k) = (a_1\ a_k)(a_1\ \cdots\ a_{k-1})$을 점마다 계산하고 $k$에 대한 귀납법을 쓴다. (2)는 서로소인 순환치환으로의 분해와 이어 붙이기, (3)은 곱의 역원과 호환의 역원이다.
:::

:::hint
$(a_1\ a_k)(a_1\ \cdots\ a_{k-1})$을 $a_{k-1}$에 적용하면 오른쪽 인수가 $a_1$로 보내고, 왼쪽 인수가 $a_1$을 $a_k$로 보낸다.
:::

:::proof
유한 곱의 번호는 [[finite-product-in-a-group|군의 유한 곱]], 순환치환의 번호는 [[cycle-permutation|순환치환]]의 것이다. $S_X$의 곱은 합성이다([[symmetric-group|대칭군]]의 (1)). 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7)로 다루고, 두 함수의 같음은 [[function|함수]]의 것이다.

**(1)의 둘째 식.** $k \ge 3$이라 하고 $\gamma = (a_1\ \cdots\ a_{k-1})$, $t = (a_1\ a_k)$라 하자($a_1, \dots, a_{k-1}$은 서로 다르고 $k - 1 \ge 2$이다). $y \in X$에서 $t(\gamma(y))$를 $(a_1\ \cdots\ a_k)(y)$와 비교한다.
- $y = a_i$, $1 \le i \le k - 2$: $\gamma(a_i) = a_{i+1}$이고 $2 \le i + 1 \le k - 1$이므로 $a_{i+1}$은 $a_1$도 $a_k$도 아니어서 $t(a_{i+1}) = a_{i+1}$이다. 순환치환 $(a_1\ \cdots\ a_k)$도 $a_i$를 $a_{i+1}$로 보낸다.
- $y = a_{k-1}$: $\gamma(a_{k-1}) = a_1$이고 $t(a_1) = a_k$이다. $(a_1\ \cdots\ a_k)$도 $a_{k-1}$을 $a_k$로 보낸다.
- $y = a_k$: $a_k \notin \{a_1, \dots, a_{k-1}\}$이므로 $\gamma(a_k) = a_k$이고 $t(a_k) = a_1$이다. $(a_1\ \cdots\ a_k)$도 $a_k$를 $a_1$로 보낸다.
- $y \notin \{a_1, \dots, a_k\}$: 두 인수가 모두 $y$를 고정하고, $(a_1\ \cdots\ a_k)$도 $y$를 고정한다.

모든 점에서 값이 같으므로 $t\gamma = (a_1\ \cdots\ a_k)$이다.

**(1)의 첫째 식.** $k \ge 2$에 대한 귀납법으로, "서로 다른 원소 $a_1, \dots, a_k$마다, $j$번째 항이 $(a_1\ a_{k+1-j})$인 길이 $k - 1$인 열 $T^{(k)}$의 곱이 $(a_1\ \cdots\ a_k)$이다"를 보인다. 각 항은 $a_1 \ne a_{k+1-j}$인 호환이고, [[recursion-theorem|재귀 정리]]의 (1)에 의해 이 열이 있다. $k = 2$이면 $T^{(2)}$는 길이 $1$인 열 $(a_1\ a_2)$이고 유한 곱의 (1)에 의해 그 곱은 $(a_1\ a_2)$이다. $k$에서 성립한다고 하고 $a_1, \dots, a_{k+1}$이 서로 다르다고 하자. $T^{(k+1)}$의 첫째 항은 $(a_1\ a_{k+1})$이고, $1 \le j \le k - 1$에서 $(1 + j)$번째 항은 $(a_1\ a_{k+1-j})$로서 $a_1, \dots, a_k$로 만든 $T^{(k)}$의 $j$번째 항이다. 유한 곱의 (4), 귀납 가정, 둘째 식에 의해
$$
\begin{aligned}
&T^{(k+1)}\text{의 곱} \\
&\quad = (a_1\ a_{k+1})\,(T^{(k)}\text{의 곱}) \\
&\quad = (a_1\ a_{k+1})(a_1\ \cdots\ a_k) \\
&\quad = (a_1\ \cdots\ a_{k+1})
\end{aligned}
$$
이다.

**(2)** [[cycle-decomposition|서로소인 순환치환으로의 분해]]의 (2)에 의해 $\sigma = c_1 \cdots c_m$인 순환치환의 열 $c_1, \dots, c_m$($m \ge 0$)이 있다. $0$ 이상인 정수 $p$에 대한 귀납법으로 "$p \le m$이면 처음 $p$개의 곱 $c_1 \cdots c_p$는 어떤 호환의 열의 곱이다"를 보인다. $p = 0$이면 빈 곱은 빈 열의 곱이다. $p + 1 \le m$이고 $c_1 \cdots c_p$가 호환의 열 $T$의 곱이면, (1)에 의해 순환치환 $c_{p+1}$은 어떤 호환의 열 $T'$의 곱이다. 유한 곱의 (2)와 (3)에 의해 $c_1 \cdots c_{p+1} = (c_1 \cdots c_p)\,c_{p+1}$은 $T$와 $T'$을 이어 붙인 열의 곱이고, 이 열의 항은 모두 호환이다. $p = m$으로 두면 된다. $\sigma = i_X$이면 빈 열의 곱 $i_X$로 쓸 수 있다(유한 곱의 (1)).

**(3)** 유한 곱의 (5)에 의해 $(\tau_1 \cdots \tau_r)^{-1}$은 $j$번째 항이 $\tau_{r+1-j}^{-1}$인 열의 곱이고, 순환치환의 (5)에 의해 호환 $\tau$는 $\tau^{-1} = \tau$이므로 이 열은 $j$번째 항이 $\tau_{r+1-j}$인 열과 같다.
:::

## 예시와 반례

:::example[$(1\ 2\ 3\ 4)$를 세 호환의 곱으로]
(1)에 의해 $(1\ 2\ 3\ 4) = (1\ 4)(1\ 3)(1\ 2)$입니다. 점마다 오른쪽 인수부터 적용해 확인합니다. $1$은 $(1\ 2)$로 $2$가 되고 나머지 둘이 $2$를 고정하므로 $2$로 갑니다. $2$는 $(1\ 2)$로 $1$, $(1\ 3)$으로 $3$이 되고 $(1\ 4)$가 고정하므로 $3$으로 갑니다. $3$은 $(1\ 2)$가 고정, $(1\ 3)$으로 $1$, $(1\ 4)$로 $4$가 됩니다. $4$는 앞의 둘이 고정하고 $(1\ 4)$로 $1$이 됩니다. 곧 $1, 2, 3, 4$를 각각 $2, 3, 4, 1$로 보내고, 이것이 $(1\ 2\ 3\ 4)$입니다. (3)에 의해 $(1\ 2\ 3\ 4)^{-1} = (1\ 2)(1\ 3)(1\ 4)$입니다.
:::

:::counterexample[호환의 곱으로 쓰는 방법은 하나가 아닐 수 있다]
$X = \{1, 2, 3\}$에서 (1)에 의해 $(1\ 2\ 3) = (1\ 3)(1\ 2)$입니다. 한편 (1)을 돌려 적은 $(2\ 3\ 1)$에 쓰면 $(1\ 2\ 3) = (2\ 3\ 1) = (2\ 1)(2\ 3)$이고, [[cycle-permutation|순환치환]]의 (5)에 의해 $(2\ 1) = (1\ 2)$이므로 $(1\ 2\ 3) = (1\ 2)(2\ 3)$이기도 합니다. 두 열 $(1\ 3), (1\ 2)$와 $(1\ 2), (2\ 3)$은 다릅니다. 항등치환도 빈 곱이면서 $(1\ 2)(1\ 2)$입니다. 서로소인 순환치환으로의 분해와 달리 호환으로 쓰는 방법은 치환으로 정해지지 않을 수 있습니다.
:::

## 확인 질문

:::check[$X = \{1, 2, 3, 4, 5\}$에서 $(1\ 2\ 3)(4\ 5)$를 호환의 곱으로 쓰면?]
(1)에 의해 $(1\ 2\ 3) = (1\ 3)(1\ 2)$이므로 유한 곱의 (3)에 의해 $(1\ 2\ 3)(4\ 5) = (1\ 3)(1\ 2)(4\ 5)$입니다. 세 호환의 곱입니다.
:::

:::check[$\sigma = (1\ 3)(1\ 2)$일 때 $\sigma^{-1}$을 호환의 곱으로 쓰면?]
(3)에 의해 $\sigma^{-1} = (1\ 2)(1\ 3)$입니다. 점마다 확인하면 $(1\ 2)(1\ 3)$은 $1, 2, 3$을 각각 $3, 1, 2$로 보내고, $\sigma = (1\ 2\ 3)$은 $1, 2, 3$을 각각 $2, 3, 1$로 보내므로 두 곱의 합성은 항등입니다.
:::
