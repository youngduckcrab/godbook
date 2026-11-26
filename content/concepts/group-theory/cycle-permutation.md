---
title: 순환치환
title_en: Cycle
aliases: [순환, 순환 치환, 호환, 길이 k 인 순환치환, 순환 표기, cycle, k-cycle, transposition, cyclic permutation, cycle notation]
kind: definition
field: group-theory
msc: ["20B30"]
level: undergrad
summary: 서로 다른 원소 a₁, …, a_k (k ≥ 2)를 차례로 다음 것으로, a_k 를 a₁ 로 보내고 나머지 점은 그대로 두는 치환을 길이 k 인 순환치환 (a₁ a₂ ⋯ a_k) 라 하고, 길이 2 인 것을 호환이라 한다. 받침이 {a₁, …, a_k} 라서 길이가 하나로 정해지고, 역, 돌려 적기, 거듭제곱과 위수, 궤도를 보이며, 치환이 순환치환인 것은 정확히 서로 다른 두 원소를 갖는 궤도가 하나뿐이고 그것이 유한할 때임을 보인다.
requires: [set, subset, function, adding-or-removing-an-element, injective-surjective-bijective, inverse-function, function-composition, finite-set, number-of-elements-is-unique, subset-of-finite-set, recursion-theorem, mathematical-induction, prime-number, well-ordering-principle, group, group-basic-properties, symmetric-group, power-in-a-group, laws-of-exponents, order-of-an-element, support-of-a-permutation, orbits-of-a-permutation]
sources:
  - ref: judson-abstract-algebra
    loc: "5.1절 Cycle Notation, 순환치환의 정의와 Example 5.5, 서로소의 정의 (p.61); Transpositions, 호환의 정의 (p.63); Remark 5.11 (p.63); 5.4절 Exercises, 연습문제 4 (p.71), 연습문제 2 (k)(l) (p.71); 부록의 힌트 5.4.4 (p.322); 5.1절 Theorem 5.9 의 증명 (p.62)"
    checked: original
    note: "출처(p.61, 그림으로 대조)는 σ ∈ S_X 가 길이 k 인 순환치환(cycle of length k)인 것을 σ(a₁) = a₂, …, σ(a_k) = a₁ 이고 나머지 x 에서 σ(x) = x 인 원소 a₁, …, a_k ∈ X 가 있을 때로 정의하고, (a₁, a₂, …, a_k) 로 쓴다(예에서는 (1 6 2 3 5 4) 처럼 쉼표 없이 쓴다). 출처는 a₁, …, a_k 가 서로 다르다는 것과 k 의 범위를 적지 않는다. 이 항목은 k ≥ 2 이고 a_i 가 서로 다른 경우만 정의한다. 출처는 Remark 5.11(p.63)에서 항등치환을 (1) 로 쓰지만, 이 항목은 항등치환을 순환치환이라 부르지 않고 (1) 표기도 쓰지 않는다((2)에 의해 항등치환은 순환치환이 아니다). 호환(transposition)은 출처 p.63 의 'cycle of length 2' 와 같은 정의이다. 출처는 두 순환치환을 모든 i, j 에서 a_i ≠ b_j 일 때 서로소라 하고(p.61), (6)은 이것이 치환의 받침 항목의 서로소와 같은 뜻임을 보인다. (1)의 역은 출처 연습문제 5.4(p.71) 'Find (a₁, a₂, …, aₙ)⁻¹' 의 답이고, 부록의 힌트 5.4.4(p.322)는 그 답을 (a₁, aₙ, aₙ₋₁, …, a₂) 로 적는다. 이것은 (1)의 꼴을 (3)으로 돌려 적은 것이다. (4)의 위수 k 는 출처가 연습문제 5.2 (k)(p.71)에서 |(1 2 5 4)| 를 계산하게 하는 것과 같은 종류이고, 23장 Lemma 23.31 의 증명(p.305)은 길이 p 인 순환치환의 위수가 p 라는 것을 증명 없이 쓴다. (2)의 길이가 하나로 정해진다는 것, (3)의 돌려 적기, (7)과 (8)은 출처에 명제로 없다(검색어 'cycle of length' 15건, 'same cycle' 1건(p.79 의 연습문제, 순환형이 같을 조건), 'rotat' 는 도형의 회전뿐, 'unique' 와 'cycle' 이 30자 안에 함께 나오는 곳 0건. 5.1절 본문과 5장 연습문제 1–37 을 처음부터 읽었다). 다만 출처 Theorem 5.9 의 증명(p.62)은 X_i 위에서 σ 이고 밖에서 항등인 σ_i 를 'the cycle defined by' 라고 불러, (7)과 같은 사실을 증명 없이 쓴다. (8)과 반례 '정수 위의 한 칸 옮기기는 순환치환이 아니다' 는 출처 Example 5.5(p.61)의 'Not every permutation is a cycle' 과 같은 물음(순환치환이 아닌 치환)을 다룬다. 예시 '길이 4인 순환치환 $(2\\ 5\\ 1\\ 3)$' 은 출처 Example 5.5(p.61)가 순환치환의 값을 두 줄 표기와 맞대어 보이는 것과 같은 발상이다. 확인 질문 '$X = \\{1, 2, 3\\}$에서 $(1\\ 3\\ 2)$와 $(2\\ 1\\ 3)$은 같은가? $(1\\ 2\\ 3)$과는 같은가?' 는 출처 연습문제 5.4(p.71)처럼 순환치환의 역을 묻는다. 확인 질문 '$X = \\{1, 2, 3, 4\\}$에서 $1$과 $2$를 맞바꾸고 $3$과 $4$를 맞바꾸는 치환은 순환치환인가?' 의 치환은 출처 Example 5.5 의 (1 2 4 3)(5 6) 처럼 순환치환이 아닌 예이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(순환치환 (8) 에 항등치환과 ℤ 위의 옮기기를 대입, 뒤 단원 경로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$X$가 [[set|집합]]이고 $S_X$가 [[symmetric-group|대칭군]]이라 하자. 곱은 합성, $i_X$는 항등치환, 거듭제곱 $\sigma^n$은 [[power-in-a-group|군의 거듭제곱]], 위수 $\operatorname{ord}$은 [[order-of-an-element|원소의 위수]]의 것이다. 받침 $\operatorname{supp}$과 서로소는 [[support-of-a-permutation|치환의 받침]], 궤도 $O_\sigma(x)$는 [[orbits-of-a-permutation|치환의 궤도]]의 것이다. $\{1, \dots, k\}$와 원소의 개수 $|A|$는 [[finite-set|유한집합]]과 [[number-of-elements-is-unique|원소의 개수]]의 것이다.

**순환치환의 표기.** $k \ge 2$가 정수이고 $a_1, \dots, a_k$가 $X$의 서로 다른 원소라 하자. 곧 $a : \{1, \dots, k\} \to X$가 [[injective-surjective-bijective|단사]]인 함수이고 $a(i) = a_i$이다. $A = \{a_1, \dots, a_k\}$로 둔다. $X$의 각 원소 $y$에 대하여
$$
c(y) =
\begin{cases}
a_{i+1} & y = a_i,\ i \le k - 1, \\
a_1 & y = a_k, \\
y & y \notin A
\end{cases}
$$
로 정한 함수 $c : X \to X$를 $(a_1\ a_2\ \cdots\ a_k)$로 쓴다. ($y \in A$이면 $y = a_i$인 $i$는 $a$가 단사이므로 하나뿐이고, [[recursion-theorem|재귀 정리]]의 (1)에 의해 $c$는 함수이다.) 구체적인 수로 쓸 때는 $(1\ 3\ 5)$처럼 쓴다.

**순환치환.** $\sigma \in S_X$가 **길이 $k$인 순환치환**(cycle of length $k$)인 것은 정확히 정수 $k \ge 2$와 $X$의 서로 다른 원소 $a_1, \dots, a_k$가 있어 $\sigma = (a_1\ a_2\ \cdots\ a_k)$일 때이다. $\sigma$가 **순환치환**인 것은 정확히 어떤 $k \ge 2$에 대하여 길이 $k$인 순환치환일 때이다. 길이 $2$인 순환치환 $(a\ b)$를 **호환**(transposition)이라 한다. 항등치환은 순환치환이라 부르지 않는다.

다음이 성립한다. 아래에서 $k \ge 2$이고 $a_1, \dots, a_k$는 $X$의 서로 다른 원소, $A = \{a_1, \dots, a_k\}$, $\sigma = (a_1\ a_2\ \cdots\ a_k)$이다.

1. (치환이다) $\sigma \in S_X$이고 $\sigma^{-1} = (a_k\ a_{k-1}\ \cdots\ a_1)$이다. 오른쪽은 $i$번째 항이 $a_{k+1-i}$인 열로 만든 순환치환이다.
2. (받침과 길이) $\operatorname{supp} \sigma = A$이고 $|A| = k$이다. 따라서 $b_1, \dots, b_l$($l \ge 2$)도 서로 다른 원소이고 $(a_1\ \cdots\ a_k) = (b_1\ \cdots\ b_l)$이면 $k = l$이고 $\{a_1, \dots, a_k\} = \{b_1, \dots, b_l\}$이다. 곧 순환치환의 길이는 치환으로 정해진다. 항등치환은 순환치환이 아니다.
3. (돌려 적기) $(a_1\ a_2\ \cdots\ a_k) = (a_2\ \cdots\ a_k\ a_1)$이다. 오른쪽은 $i$번째 항이 $a_{i+1}$($1 \le i \le k - 1$)이고 $k$번째 항이 $a_1$인 열로 만든 순환치환이다.
4. (거듭제곱, 궤도, 위수) $0 \le i \le k - 1$인 정수 $i$에서 $\sigma^i(a_1) = a_{i+1}$이고 $\sigma^k(a_1) = a_1$이다. 모든 $j \in \{1, \dots, k\}$에서 $O_\sigma(a_j) = A$이고, $y \notin A$이면 $O_\sigma(y) = \{y\}$이다. $\sigma^k = i_X$이고 $\operatorname{ord}(\sigma) = k$이다.
5. (호환) $a \ne b$이면 $(a\ b) = (b\ a)$이고, $\tau = (a\ b)$에 대하여 $\tau\tau = i_X$, $\tau^{-1} = \tau$, $\operatorname{ord}(\tau) = 2$이다.
6. (순환치환의 서로소) $b_1, \dots, b_l$($l \ge 2$)이 $X$의 서로 다른 원소일 때, $(a_1\ \cdots\ a_k)$와 $(b_1\ \cdots\ b_l)$이 서로소인 것은 정확히 모든 $i \in \{1, \dots, k\}$, $j \in \{1, \dots, l\}$에서 $a_i \ne b_j$일 때이다.
7. (궤도에서 만든 순환치환) $\rho \in S_X$, $x \in X$이고 $O = O_\rho(x)$가 유한집합이며 $m = |O| \ge 2$라 하자. 각 $y \in X$에 $y \in O$이면 $\rho(y)$를, $y \notin O$이면 $y$를 대응시키는 함수를 $\rho_O$라 하면
   $$\rho_O = (x\ \ \rho(x)\ \ \cdots\ \ \rho^{m-1}(x))$$
   이다. 오른쪽은 $i$번째 항이 $\rho^{i-1}(x)$인 열($1 \le i \le m$)로 만든 순환치환이다. 따라서 $\rho_O$는 길이 $m$인 순환치환이고 $\operatorname{supp} \rho_O = O$이다.
8. (순환치환의 판정) $\rho \in S_X$가 순환치환인 것은 정확히 $\rho$의 궤도 가운데 서로 다른 두 원소를 갖는 것이 정확히 하나 있고 그 궤도가 유한집합일 때이다. 이때 그 궤도는 $\operatorname{supp} \rho$이고, $\rho$의 길이는 그 궤도의 원소의 개수이다.
:::

:::english
Let $X$ be a set and $S_X$ the symmetric group. Products are composites, $i_X$ is the identity permutation, powers $\sigma^n$ are powers in a group, and $\operatorname{ord}$ is the order of an element. The support $\operatorname{supp}$ and disjointness are those of the entry on the support of a permutation, and orbits $O_\sigma(x)$ are those of the entry on orbits of a permutation. The set $\{1, \dots, k\}$ and the number of elements $|A|$ are those of the entries on finite sets and on the number of elements.

**Cycle notation.** Let $k \ge 2$ be an integer and let $a_1, \dots, a_k$ be distinct elements of $X$; that is, $a : \{1, \dots, k\} \to X$ is an injective function with $a(i) = a_i$. Put $A = \{a_1, \dots, a_k\}$. The function $c : X \to X$ defined for each $y \in X$ by
$$
c(y) =
\begin{cases}
a_{i+1} & y = a_i,\ i \le k - 1, \\
a_1 & y = a_k, \\
y & y \notin A
\end{cases}
$$
is written $(a_1\ a_2\ \cdots\ a_k)$. (If $y \in A$, the index $i$ with $y = a_i$ is unique because $a$ is injective, and $c$ is a function by (1) of the recursion theorem.) With concrete numbers we write, for instance, $(1\ 3\ 5)$.

**Cycles.** A permutation $\sigma \in S_X$ is a **cycle of length $k$** exactly when there are an integer $k \ge 2$ and distinct elements $a_1, \dots, a_k$ of $X$ with $\sigma = (a_1\ a_2\ \cdots\ a_k)$. A permutation $\sigma$ is a **cycle** exactly when it is a cycle of length $k$ for some $k \ge 2$. A cycle $(a\ b)$ of length $2$ is called a **transposition**. The identity permutation is not called a cycle.

The following hold, where $k \ge 2$, $a_1, \dots, a_k$ are distinct elements of $X$, $A = \{a_1, \dots, a_k\}$, and $\sigma = (a_1\ a_2\ \cdots\ a_k)$.

1. (It is a permutation) $\sigma \in S_X$ and $\sigma^{-1} = (a_k\ a_{k-1}\ \cdots\ a_1)$, where the right side is the cycle made from the sequence whose $i$th term is $a_{k+1-i}$.
2. (Support and length) $\operatorname{supp} \sigma = A$ and $|A| = k$. Hence if $b_1, \dots, b_l$ ($l \ge 2$) are also distinct elements and $(a_1\ \cdots\ a_k) = (b_1\ \cdots\ b_l)$, then $k = l$ and $\{a_1, \dots, a_k\} = \{b_1, \dots, b_l\}$; that is, the length of a cycle is determined by the permutation. The identity permutation is not a cycle.
3. (Rotation) $(a_1\ a_2\ \cdots\ a_k) = (a_2\ \cdots\ a_k\ a_1)$, where the right side is the cycle made from the sequence whose $i$th term is $a_{i+1}$ ($1 \le i \le k - 1$) and whose $k$th term is $a_1$.
4. (Powers, orbits, order) For integers $i$ with $0 \le i \le k - 1$, $\sigma^i(a_1) = a_{i+1}$, and $\sigma^k(a_1) = a_1$. For every $j \in \{1, \dots, k\}$, $O_\sigma(a_j) = A$, and if $y \notin A$, then $O_\sigma(y) = \{y\}$. Moreover $\sigma^k = i_X$ and $\operatorname{ord}(\sigma) = k$.
5. (Transpositions) If $a \ne b$, then $(a\ b) = (b\ a)$, and for $\tau = (a\ b)$ we have $\tau\tau = i_X$, $\tau^{-1} = \tau$ and $\operatorname{ord}(\tau) = 2$.
6. (Disjoint cycles) If $b_1, \dots, b_l$ ($l \ge 2$) are distinct elements of $X$, then $(a_1\ \cdots\ a_k)$ and $(b_1\ \cdots\ b_l)$ are disjoint exactly when $a_i \ne b_j$ for all $i \in \{1, \dots, k\}$ and $j \in \{1, \dots, l\}$.
7. (The cycle made from an orbit) Let $\rho \in S_X$ and $x \in X$, suppose $O = O_\rho(x)$ is finite, and let $m = |O| \ge 2$. If $\rho_O$ is the function assigning $\rho(y)$ to $y \in O$ and $y$ to $y \notin O$, then
   $$\rho_O = (x\ \ \rho(x)\ \ \cdots\ \ \rho^{m-1}(x)),$$
   where the right side is the cycle made from the sequence whose $i$th term is $\rho^{i-1}(x)$ ($1 \le i \le m$). Hence $\rho_O$ is a cycle of length $m$ and $\operatorname{supp} \rho_O = O$.
8. (Criterion for cycles) A permutation $\rho \in S_X$ is a cycle exactly when exactly one orbit of $\rho$ has two distinct elements and that orbit is finite. In that case this orbit is $\operatorname{supp} \rho$, and the length of $\rho$ is the number of elements of this orbit.
:::

## 직관

순환치환은 몇 사람이 원탁에 둘러앉아 각자 오른쪽 사람의 자리로 한 칸씩 옮겨 앉는 것과 같습니다. 원탁에 앉지 않은 사람은 움직이지 않습니다. 비유가 정의와 맞는 곳은 원탁의 사람들이 서로 다른 $a_1, \dots, a_k$이고 마지막 사람 $a_k$가 첫 사람 $a_1$의 자리로 간다는 점입니다. 원탁은 어디서부터 읽어도 같으므로 표기 $(a_1\ \cdots\ a_k)$는 하나로 정해지지 않습니다((3)). 그래도 원탁에 앉은 사람의 수, 곧 길이는 하나로 정해집니다((2)).

같은 원소가 두 자리에 나오면 그 원소에 정해 줄 "다음 사람"이 둘이 되어 함수가 정해지지 않을 수 있고, $a_1 = a_2$인 길이 $2$의 열처럼 함수가 정해져도 아무것도 움직이지 않을 수 있습니다. 그래서 서로 다른 원소만 씁니다. 길이 $1$인 "원탁"은 아무것도 움직이지 않아 항등치환이 되고, 그 받침은 원소가 $0$개라서 (2)의 "받침의 원소의 개수가 길이"가 맞지 않습니다. 그래서 길이를 $2$ 이상으로 둡니다.

(8)은 순환치환을 궤도로 알아보는 법입니다. 순환치환은 움직이는 점들이 모두 한 원탁에 앉아 있는 치환입니다. 원탁이 둘 이상이면 순환치환이 아니고, 끝없이 이어지는 줄은 원탁이 아닙니다.

:::remark[(1)–(3)의 증명]
정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7)로 다룬다. 두 함수의 같음은 [[function|함수]]의 것이다.

**(1)** $b_i = a_{k+1-i}$로 두면 $b_1, \dots, b_k$는 서로 다르고 $\{b_1, \dots, b_k\} = A$이므로 $d = (b_1\ \cdots\ b_k) = (a_k\ \cdots\ a_1)$이 정해진다. $2 \le j \le k$이면 $a_j = b_{k+1-j}$이고 $k + 1 - j \le k - 1$이므로 $d(a_j) = b_{k+2-j} = a_{j-1}$이다. $a_1 = b_k$이므로 $d(a_1) = b_1 = a_k$이다. $y \notin A$이면 $d(y) = y$이다. 따라서 $1 \le i \le k - 1$에서 $d(\sigma(a_i)) = d(a_{i+1}) = a_i$, $d(\sigma(a_k)) = d(a_1) = a_k$이고, $2 \le j \le k$에서 $\sigma(d(a_j)) = \sigma(a_{j-1}) = a_j$, $\sigma(d(a_1)) = \sigma(a_k) = a_1$이며, $A$ 밖에서는 둘 다 항등이다. 곧 $d \circ \sigma = i_X$이고 $\sigma \circ d = i_X$이다. $\sigma(u) = \sigma(v)$이면 $u = d(\sigma(u)) = d(\sigma(v)) = v$이므로 $\sigma$는 단사이고, $y = \sigma(d(y))$이므로 전사이다. 같은 방법으로 $d(u) = d(v)$이면 $u = \sigma(d(u)) = \sigma(d(v)) = v$이고 $y = d(\sigma(y))$이므로 $d$도 전단사이다. 따라서 $\sigma, d \in S_X$이고 $\sigma d = i_X$이므로 [[group-basic-properties|군의 기본 성질]]의 (3)에 의해 $d = \sigma^{-1}$이다.

**(2)** $1 \le i \le k - 1$이면 $i + 1 \ne i$이고 $a$가 단사이므로 $\sigma(a_i) = a_{i+1} \ne a_i$이다. $k \ge 2$이므로 $k \ne 1$이고 $\sigma(a_k) = a_1 \ne a_k$이다. $y \notin A$이면 $\sigma(y) = y$이다. 따라서 $\operatorname{supp} \sigma = A$이다. 함수 $a$를 공역 $A$로 보면 단사이고 $A$의 정의에 의해 전사이므로, [[finite-set|유한집합]]의 정의에 의해 $A$는 원소를 $k$개 갖는다. $(a_1\ \cdots\ a_k) = (b_1\ \cdots\ b_l)$이면 두 받침이 같으므로 $A = \{b_1, \dots, b_l\}$이고, [[number-of-elements-is-unique|원소의 개수]]의 (1)에 의해 $k = l$이다. [[support-of-a-permutation|치환의 받침]]의 (1)에 의해 $\operatorname{supp} i_X = \emptyset$인데 순환치환의 받침은 $a_1$을 원소로 가지므로, 항등치환은 순환치환이 아니다.

**(3)** $b_i = a_{i+1}$($1 \le i \le k - 1$), $b_k = a_1$로 두자. $b_i = b_j$이고 $i \ne j$라 하면, 둘 다 $k - 1$ 이하일 때는 $a_{i+1} = a_{j+1}$에서 $i = j$가 되어 어긋나고, 하나가 $k$일 때(예컨대 $j = k$)는 $a_{i+1} = a_1$에서 $i + 1 = 1$, 곧 $i = 0$이 되어 어긋난다. 따라서 $b$는 서로 다른 원소의 열이고 $\{b_1, \dots, b_k\} = A$이다. $c' = (b_1\ \cdots\ b_k)$와 $\sigma$의 값을 비교한다. $a_1 = b_k$이므로 $c'(a_1) = b_1 = a_2 = \sigma(a_1)$이다. $2 \le j \le k$이면 $a_j = b_{j-1}$이고 $j - 1 \le k - 1$이므로, $j \le k - 1$일 때 $c'(a_j) = b_j = a_{j+1} = \sigma(a_j)$, $j = k$일 때 $c'(a_k) = b_k = a_1 = \sigma(a_k)$이다. $A$ 밖에서는 둘 다 항등이다. 따라서 $c' = \sigma$이다.
:::

:::remark[(4)–(6)의 증명]
**(4)** $i$에 대한 귀납법. $\sigma^0 = i_X$이므로 $\sigma^0(a_1) = a_1$이다. $i + 1 \le k - 1$이고 $\sigma^i(a_1) = a_{i+1}$이면 [[power-in-a-group|군의 거듭제곱]]의 (2)에 의해 $\sigma^{i+1} = \sigma\sigma^i$이므로 $\sigma^{i+1}(a_1) = \sigma(a_{i+1}) = a_{i+2}$이다. 같은 이유로 $\sigma^k(a_1) = \sigma(\sigma^{k-1}(a_1)) = \sigma(a_k) = a_1$이다.

(2)에 의해 $a_1 \in \operatorname{supp} \sigma = A$이므로 [[orbits-of-a-permutation|치환의 궤도]]의 (4)에 의해 $O_\sigma(a_1) \subseteq A$이고, 위에서 $a_{i+1} = \sigma^i(a_1) \in O_\sigma(a_1)$이므로 $A \subseteq O_\sigma(a_1)$이다. 따라서 $O_\sigma(a_1) = A$이고, 각 $a_j \in O_\sigma(a_1)$이므로 궤도의 (2)에 의해 $O_\sigma(a_j) = A$이다. $y \notin A$이면 $y \notin \operatorname{supp} \sigma$이므로 궤도의 (4)에 의해 $O_\sigma(y) = \{y\}$이다.

$O_\sigma(a_1) = A$는 원소가 $k$개인 유한집합이므로 궤도의 (6)의 (iv)에 의해 $A$의 모든 원소 $y$에서 $\sigma^k(y) = y$이고, $y \notin A$이면 [[support-of-a-permutation|치환의 받침]]의 (2)에 의해 $\sigma^k(y) = y$이다. 따라서 $\sigma^k = i_X$이다. 궤도의 (6)의 (i)에 의해 $k$는 $\sigma^n(a_1) = a_1$인 가장 작은 자연수이므로, $\sigma^n = i_X$인 자연수 $n$은 $\sigma^n(a_1) = a_1$을 만족해 $k \le n$이다. [[order-of-an-element|원소의 위수]]의 정의(뒤쪽 문장)에 의해 $\operatorname{ord}(\sigma) = k$이다.

**(5)** $k = 2$인 경우이다. $(a\ b) = (b\ a)$는 (3)이다. (4)에 의해 $\tau^2 = i_X$이고 군의 거듭제곱의 (1)에 의해 $\tau^2 = \tau\tau$이다. [[group-basic-properties|군의 기본 성질]]의 (3)에 의해 $\tau^{-1} = \tau$이다. $\operatorname{ord}(\tau) = 2$는 (4)이다.

**(6)** (2)에 의해 두 받침은 $A$와 $\{b_1, \dots, b_l\}$이다. 두 집합이 공통 원소를 갖지 않는 것은 정확히 어떤 $a_i$도 어떤 $b_j$와 같지 않을 때이다.
:::

:::remark[(7)과 (8)의 증명]
**(7)** 각 $y$에 정해지는 값이 하나이므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $\rho_O$는 함수이다. $a_i = \rho^{i-1}(x)$($1 \le i \le m$)로 두면 [[orbits-of-a-permutation|치환의 궤도]]의 (6)의 (ii)에 의해 각 $i$에 $a_i$를 대응시키는 함수는 $\{1, \dots, m\}$에서 $O$로의 전단사이므로 $a_1, \dots, a_m$은 서로 다르고 $\{a_1, \dots, a_m\} = O$이다. $m \ge 2$이므로 $c = (a_1\ \cdots\ a_m)$이 정해진다. $y \in O$이면 $y = a_i$인 $i$가 있다. $i \le m - 1$이면 궤도의 (6)의 (iii)(지수 $i - 1 \le m - 2$)에 의해 $\rho_O(a_i) = \rho(\rho^{i-1}(x)) = \rho^i(x) = a_{i+1} = c(a_i)$이고, $i = m$이면 같은 (iii)에 의해 $\rho_O(a_m) = \rho(\rho^{m-1}(x)) = x = a_1 = c(a_m)$이다. $y \notin O$이면 $\rho_O(y) = y = c(y)$이다. 따라서 $\rho_O = c$이고, (1)과 (2)에 의해 $\rho_O$는 길이 $m$인 순환치환이며 $\operatorname{supp} \rho_O = O$이다.

**(8)** 먼저 $\rho = (a_1\ \cdots\ a_k)$라 하자. (4)에 의해 $A = O_\rho(a_1)$은 $\rho$의 궤도이고, (2)에 의해 원소가 $k$개인 유한집합이며, 서로 다른 두 원소 $a_1$, $a_2$를 갖는다. $O'$이 서로 다른 두 원소를 갖는 $\rho$의 궤도이면 $O' = O_\rho(y)$인 $y$가 있다. $y \notin A$이면 (4)에 의해 $O' = \{y\}$이고 그 원소는 모두 $y$이므로 어긋난다. 따라서 $y \in A$이고 $O' = O_\rho(y) = A$이다. 곧 그런 궤도는 $A$ 하나뿐이고, (2)에 의해 $A = \operatorname{supp} \rho$, 길이는 $|A| = k$이다.

거꾸로 서로 다른 두 원소 $u$, $v$를 갖는 $\rho$의 궤도 $O$가 하나뿐이고 $O$가 유한집합이라 하자. $O = O_\rho(x)$인 $x$가 있고, $m = |O|$로 둔다. [[finite-set|유한집합]]의 (F2)에 의해 $\emptyset$은 원소를 $0$개 갖고, $u \notin \emptyset$, $v \notin \{u\}$이므로 [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (a)를 두 번 쓰면 $\{u, v\} = (\emptyset \cup \{u\}) \cup \{v\}$는 원소를 $2$개 가지며, [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $2 \le m$이다. (7)의 $\rho_O$는 길이 $m$인 순환치환이다. $\rho = \rho_O$임을 보인다. $O$ 위에서는 정의에 의해 같다. $y \notin O$이면 궤도의 (1)에 의해 $y \in O_\rho(y)$이므로 $O_\rho(y) \ne O$이고, $O$가 서로 다른 두 원소를 갖는 하나뿐인 궤도이므로 $O_\rho(y)$의 원소는 모두 $y$이다. 곧 $O_\rho(y) = \{y\}$이고 궤도의 (4)에 의해 $\rho(y) = y = \rho_O(y)$이다. 따라서 $\rho = \rho_O$는 순환치환이고, (7)에 의해 $\operatorname{supp} \rho = O$, 길이는 $m$이다.
:::

## 예시와 반례

:::example[길이 4인 순환치환 $(2\ 5\ 1\ 3)$]
$X = \{1, 2, 3, 4, 5, 6\}$에서 $\sigma = (2\ 5\ 1\ 3)$은 $2$, $5$, $1$, $3$을 각각 $5$, $1$, $3$, $2$로 보내고 $4$와 $6$을 그대로 둡니다. 곧 $1, 2, 3, 4, 5, 6$을 각각 $3, 5, 2, 4, 1, 6$으로 보냅니다. (2)에 의해 $\operatorname{supp} \sigma = \{1, 2, 3, 5\}$이고 길이는 $4$입니다. (3)을 거듭 쓰면 $\sigma = (5\ 1\ 3\ 2) = (1\ 3\ 2\ 5) = (3\ 2\ 5\ 1)$이고, (1)에 의해 $\sigma^{-1} = (3\ 1\ 5\ 2)$는 $3$, $1$, $5$, $2$를 각각 $1$, $5$, $2$, $3$으로 보냅니다. (4)에 의해 $\sigma^2(2) = 1$, $\sigma^4 = i_X$이고 $\operatorname{ord}(\sigma) = 4$입니다. 실제로 $\sigma^2$는 $2$와 $1$을, $5$와 $3$을 맞바꾸므로 $i_X$가 아닙니다.
:::

:::counterexample[정수 위의 한 칸 옮기기는 순환치환이 아니다]
$X = \mathbb{Z}$이고 $\rho(n) = n + 1$이라 합시다. [[orbits-of-a-permutation|치환의 궤도]]의 반례에서처럼 $\rho \in S_{\mathbb{Z}}$이고 모든 정수 $m$에서 $\rho^m(0) = m$이므로 $\rho$의 궤도는 $O_\rho(0) = \mathbb{Z}$ 하나뿐입니다. 서로 다른 두 원소를 갖는 궤도가 정확히 하나 있지만 그 궤도가 유한집합이 아니므로, (8)에 의해 $\rho$는 순환치환이 아닙니다. (2)로도 알 수 있습니다. 순환치환의 받침은 원소가 $k$개인 유한집합인데 $\operatorname{supp} \rho = \mathbb{Z}$는 유한집합이 아닙니다.
:::

## 확인 질문

:::check[$X = \{1, 2, 3\}$에서 $(1\ 3\ 2)$와 $(2\ 1\ 3)$은 같은가? $(1\ 2\ 3)$과는 같은가?]
$(1\ 3\ 2)$를 (3)으로 한 번 돌리면 $(3\ 2\ 1)$, 두 번 돌리면 $(2\ 1\ 3)$이므로 둘은 같습니다. 둘 다 $1, 2, 3$을 각각 $3, 1, 2$로 보냅니다. $(1\ 2\ 3)$은 $1$을 $2$로 보내므로 다릅니다. (1)에 의해 $(1\ 2\ 3)^{-1} = (3\ 2\ 1) = (1\ 3\ 2)$입니다.
:::

:::check[$X = \{1, 2, 3, 4\}$에서 $1$과 $2$를 맞바꾸고 $3$과 $4$를 맞바꾸는 치환은 순환치환인가?]
아닙니다. 이 치환 $\rho$의 궤도는 $O_\rho(1) = \{1, 2\}$와 $O_\rho(3) = \{3, 4\}$이고, 둘 다 서로 다른 두 원소를 가지므로 (8)의 "정확히 하나"가 성립하지 않습니다. [[support-of-a-permutation|치환의 받침]]의 (4)에 의해 이 치환은 서로소인 두 호환의 곱 $(1\ 2)(3\ 4)$입니다.
:::
