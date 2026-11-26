---
title: 호환을 곱하면 궤도의 개수가 하나 바뀐다
title_en: Multiplying by a Transposition Changes the Number of Orbits by One
aliases: [궤도의 개수, 호환과 궤도, 치환의 궤도의 개수, number of orbits of a permutation, transposition and orbits]
kind: theorem
field: group-theory
msc: ["20B30"]
level: undergrad
summary: 유한집합 X의 치환 σ에 호환 (a b)를 곱하면, a와 b가 σ의 같은 궤도에 있을 때는 그 궤도가 둘로 갈라지고 다른 궤도에 있을 때는 두 궤도가 하나로 합쳐져, 궤도의 개수가 하나 늘거나 준다.
requires: [set, set-operations, function, injective-surjective-bijective, finite-set, adding-or-removing-an-element, number-of-elements-is-unique, disjoint-union-count, partition, mathematical-induction, prime-number, well-ordering-principle, even-and-odd, group, group-basic-properties, symmetric-group, power-in-a-group, laws-of-exponents, finite-product-in-a-group, support-of-a-permutation, orbits-of-a-permutation, cycle-permutation]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 5.1절 Transpositions 의 Proposition 5.12(p.63), Lemma 5.14 와 그 증명(p.63–64), Theorem 5.15(p.64); 5.4절 Exercises, 연습문제 20, 21, 32(p.72–73); 부록의 힌트 5.4.17(p.322); 14.3절 A Geometric Example 과 Example 14.22(p.174–175)
    checked: original
    note: "출처에는 호환을 곱할 때 궤도가 갈라지거나 합쳐진다는 정리가 없다(책 전체에서 검색어 'number of orbits'(14.3절 Theorem 14.19(Burnside) p.173 의 1건, 군의 작용의 궤도), 'orbits of'(7건, 연습문제 5.32 와 14장), 'split'(77건, 모두 분해체), 'merg'·'joined'(각 1건, 관계 없음), 'number of cycles'(1건, 아래)를 찾았고, 5.4절 연습문제 1–37 을 처음부터 읽었다). 출처는 같은 자리에서 Lemma 5.14(p.63–64)를 항등치환의 호환 분해의 마지막 두 호환을 네 가지 꼴로 바꿔 쓰며 a 의 마지막 출현을 왼쪽으로 옮기는 과정으로 증명하고, Theorem 5.15(p.64)를 그 Lemma 로 얻는다. 이 항목은 그 대신 궤도의 개수를 세는 길을 마련한다. 궤도는 출처 연습문제 5.32(p.73)의 O_{x,σ} 이고, 이 사이트에서는 orbits-of-a-permutation 의 것이다. 출처에서 궤도의 개수에 가까운 것은 Proposition 14.21(p.175)이 쓰는 '순환 분해의 순환치환의 개수'와 6.5절 연습문제 15(p.79)의 순환 구조(길이 1 인 순환 (9) 도 센다)이다. (5)의 수를 출처는 명제로 적지 않지만, 14.3절 A Geometric Example(p.174–175)은 꼭짓점 넷인 정사각형에서 호환 (1 3) 이 고정하는 색칠의 수를 2³ = 8 로 세며 그 지수 3 이 (5)의 4 − 2 + 1 이고, Example 14.22(p.175)는 (1 3)(2 4 5) = (1 3)(2 4 5)(6)(7) 처럼 길이 1 인 순환까지 세어 n = 4 라 한다. (5)는 출처 연습문제 5.20(p.72, 순환치환은 많아야 n − 1 개의 호환의 곱)과도 같은 대상을 다룬다. 예시 '$(1\\ 2\\ 3\\ 4)$에 호환을 곱하기'는 출처 Example 5.13(p.63)이 치환을 호환으로 바꿔 쓰는 것과 같은 종류의 계산이다. 반례 '같은 궤도의 두 점을 맞바꾸면 궤도가 갈라지는 예'는 출처 Example 5.13(p.63)의 등식 (2 5 3) = (2 3)(2 5) 와 같은 종류의 계산(길이 3 인 순환치환과, 그 궤도 안의 두 점을 맞바꾸는 호환)이고, 그 곱 (1 2)(1 2 3) 은 부록의 힌트 5.4.17(p.322)이 계산하게 하는 곱이다. 첫째 확인 질문 '$X = \\{1, 2, 3, 4\\}$에서 $\\sigma = (1\\ 2)(3\\ 4)$에 $(2\\ 3)$을 왼쪽에 곱하면 궤도의 개수는 몇이 되는가?'는 출처 연습문제 5.32(b)(p.73)가 S_5 의 치환의 궤도를 구하게 하는 것과 같은 종류의 계산이다. 둘째 확인 질문 '$X = \\{1, \\dots, 6\\}$에서 $(1\\ 2\\ 3\\ 4)$에 $(5\\ 6)$을 왼쪽에 곱한 치환의 궤도의 개수는 몇인가?'는 출처 연습문제 5.32(b)(p.73)의 β = (1 2 3)(4 5) 처럼 서로소인 순환치환의 곱의 궤도를 구하는 것과 같은 종류의 계산이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(궤도 개수·홀짝 판정에 경계값, A₄ 논법 통독, 빠진 겹침(11.1절 곱셈표)을 돌려보내 반영). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$X$가 [[finite-set|유한집합]]이고 $\sigma \in S_X$라 하자. $S_X$와 그 곱(합성), 항등치환 $i_X$는 [[symmetric-group|대칭군]]의 것이고, 거듭제곱 $\sigma^n$은 [[power-in-a-group|군의 거듭제곱]], 유한 곱과 빈 곱은 [[finite-product-in-a-group|군의 유한 곱]], 궤도 $O_\sigma(x)$는 [[orbits-of-a-permutation|치환의 궤도]], 호환 $(a\ b)$와 길이 $k$인 순환치환은 [[cycle-permutation|순환치환]]의 것이다. 원소의 개수 $|A|$는 [[number-of-elements-is-unique|원소의 개수]]의 뜻이다.

$\sigma$의 궤도 전체의 집합을
$$\operatorname{Orb}(\sigma) = \{O_\sigma(x) : x \in X\}$$
로 쓴다. 치환의 궤도의 (7)에 의해 $\operatorname{Orb}(\sigma)$는 유한집합이고 $|\operatorname{Orb}(\sigma)| \le |X|$이다. 정수 $|\operatorname{Orb}(\sigma)|$를 $\sigma$의 **궤도의 개수**(number of orbits)라 한다. 고정점 $x$의 궤도 $\{x\}$도 하나로 센다.

1. (거듭제곱으로 본 궤도) 모든 $x \in X$에서 $O_\sigma(x) = \{\sigma^i(x) : i \in \mathbb{Z},\ i \ge 0\}$이다.
2. (항등치환과 역치환) $|\operatorname{Orb}(i_X)| = |X|$이고 $|\operatorname{Orb}(\sigma^{-1})| = |\operatorname{Orb}(\sigma)|$이다. 또 $|\operatorname{Orb}(\sigma)| = |X|$인 것은 정확히 $\sigma = i_X$일 때이다.
3. (호환을 왼쪽에 곱하기) $a, b \in X$, $a \ne b$, $\tau = (a\ b)$, $\rho = \tau\sigma$라 하자.
   - (i) (갈라짐) $b \in O_\sigma(a)$이면 $O_\rho(a) \cap O_\rho(b) = \emptyset$이고 $O_\rho(a) \cup O_\rho(b) = O_\sigma(a)$이며, $\operatorname{Orb}(\rho)$는 집합 $\operatorname{Orb}(\sigma) - \{O_\sigma(a)\}$에 $O_\rho(a)$와 $O_\rho(b)$를 원소로 더한 집합 $\bigl(\operatorname{Orb}(\sigma) - \{O_\sigma(a)\}\bigr) \cup \{O_\rho(a), O_\rho(b)\}$이다. 더 자세히, $k = |O_\sigma(a)|$이고 $b = \sigma^j(a)$($1 \le j \le k - 1$)이면 $O_\rho(a) = \{\sigma^i(a) : 0 \le i \le j - 1\}$이고 $O_\rho(b) = \{\sigma^i(a) : j \le i \le k - 1\}$이다. 따라서 $|\operatorname{Orb}(\rho)| = |\operatorname{Orb}(\sigma)| + 1$이다.
   - (ii) (합쳐짐) $b \notin O_\sigma(a)$이면 $O_\rho(a) = O_\sigma(a) \cup O_\sigma(b)$이고, $\operatorname{Orb}(\rho)$는 집합 $\operatorname{Orb}(\sigma) - \{O_\sigma(a), O_\sigma(b)\}$에 $O_\sigma(a) \cup O_\sigma(b)$를 원소로 더한 집합 $\bigl(\operatorname{Orb}(\sigma) - \{O_\sigma(a), O_\sigma(b)\}\bigr) \cup \{O_\sigma(a) \cup O_\sigma(b)\}$이다. 따라서 $|\operatorname{Orb}(\rho)| = |\operatorname{Orb}(\sigma)| - 1$이다.
   - (iii) 두 경우 모두 $a$도 $b$도 포함하지 않는 $\sigma$의 궤도는 $\rho$의 궤도이다.
4. (호환을 오른쪽에 곱하기) $a \ne b$이고 $\tau = (a\ b)$이면, $b \in O_\sigma(a)$일 때 $|\operatorname{Orb}(\sigma\tau)| = |\operatorname{Orb}(\sigma)| + 1$이고, $b \notin O_\sigma(a)$일 때 $|\operatorname{Orb}(\sigma\tau)| = |\operatorname{Orb}(\sigma)| - 1$이다.
5. (순환치환의 궤도의 개수) $\sigma$가 길이 $k$인 순환치환이면 $|\operatorname{Orb}(\sigma)| = |X| - k + 1$이다. 특히 호환의 궤도의 개수는 $|X| - 1$이다.

증명에서 정수의 계산과 부등식에 관하여 [[prime-number]]의 (Z1), [[well-ordering-principle]]의 진술에서 받아들인 계산 법칙과 (Z5)–(Z7), (L1), (L3)을 쓰고, 정수끼리의 합과 차가 정수라는 것은 [[even-and-odd]]에서 받아들인 사실을 쓴다.
:::

:::english
Let $X$ be a finite set and $\sigma \in S_X$. $S_X$, its product (composition) and the identity permutation $i_X$ are as in the entry on the symmetric group; the power $\sigma^n$ is as in the entry on powers in a group, finite products and the empty product are as in the entry on finite products in a group, the orbit $O_\sigma(x)$ is as in the entry on orbits of a permutation, and the transposition $(a\ b)$ and cycles of length $k$ are as in the entry on cycles. The number of elements $|A|$ is as in the entry on the number of elements.

Write the set of all orbits of $\sigma$ as
$$\operatorname{Orb}(\sigma) = \{O_\sigma(x) : x \in X\}.$$
By (7) in the entry on orbits of a permutation, $\operatorname{Orb}(\sigma)$ is finite and $|\operatorname{Orb}(\sigma)| \le |X|$. The integer $|\operatorname{Orb}(\sigma)|$ is called the **number of orbits** of $\sigma$. The orbit $\{x\}$ of a fixed point $x$ also counts as one.

1. (Orbits through nonnegative powers) For every $x \in X$, $O_\sigma(x) = \{\sigma^i(x) : i \in \mathbb{Z},\ i \ge 0\}$.
2. (Identity and inverse) $|\operatorname{Orb}(i_X)| = |X|$ and $|\operatorname{Orb}(\sigma^{-1})| = |\operatorname{Orb}(\sigma)|$. Moreover, $|\operatorname{Orb}(\sigma)| = |X|$ exactly when $\sigma = i_X$.
3. (Multiplying by a transposition on the left) Let $a, b \in X$, $a \ne b$, $\tau = (a\ b)$ and $\rho = \tau\sigma$.
   - (i) (Splitting) If $b \in O_\sigma(a)$, then $O_\rho(a) \cap O_\rho(b) = \emptyset$, $O_\rho(a) \cup O_\rho(b) = O_\sigma(a)$, and $\operatorname{Orb}(\rho)$ is the set obtained from $\operatorname{Orb}(\sigma) - \{O_\sigma(a)\}$ by adding $O_\rho(a)$ and $O_\rho(b)$ as elements, namely $\bigl(\operatorname{Orb}(\sigma) - \{O_\sigma(a)\}\bigr) \cup \{O_\rho(a), O_\rho(b)\}$.
     More precisely, if $k = |O_\sigma(a)|$ and $b = \sigma^j(a)$ with $1 \le j \le k - 1$, then $O_\rho(a) = \{\sigma^i(a) : 0 \le i \le j - 1\}$ and $O_\rho(b) = \{\sigma^i(a) : j \le i \le k - 1\}$. Hence $|\operatorname{Orb}(\rho)| = |\operatorname{Orb}(\sigma)| + 1$.
   - (ii) (Merging) If $b \notin O_\sigma(a)$, then $O_\rho(a) = O_\sigma(a) \cup O_\sigma(b)$, and $\operatorname{Orb}(\rho)$ is the set obtained from $\operatorname{Orb}(\sigma) - \{O_\sigma(a), O_\sigma(b)\}$ by adding $O_\sigma(a) \cup O_\sigma(b)$ as an element, namely $\bigl(\operatorname{Orb}(\sigma) - \{O_\sigma(a), O_\sigma(b)\}\bigr) \cup \{O_\sigma(a) \cup O_\sigma(b)\}$.
     Hence $|\operatorname{Orb}(\rho)| = |\operatorname{Orb}(\sigma)| - 1$.
   - (iii) In both cases, every orbit of $\sigma$ containing neither $a$ nor $b$ is an orbit of $\rho$.
4. (Multiplying by a transposition on the right) If $a \ne b$ and $\tau = (a\ b)$, then $|\operatorname{Orb}(\sigma\tau)| = |\operatorname{Orb}(\sigma)| + 1$ when $b \in O_\sigma(a)$, and $|\operatorname{Orb}(\sigma\tau)| = |\operatorname{Orb}(\sigma)| - 1$ when $b \notin O_\sigma(a)$.
5. (Number of orbits of a cycle) If $\sigma$ is a cycle of length $k$, then $|\operatorname{Orb}(\sigma)| = |X| - k + 1$. In particular, a transposition has $|X| - 1$ orbits.

The proof uses, for integer arithmetic and inequalities, (Z1) from the entry on prime numbers, the arithmetic laws accepted in the statement of the well-ordering principle together with (Z5)–(Z7), (L1) and (L3), and the fact accepted in the entry on even and odd integers that sums and differences of integers are integers.
:::

## 직관

치환 $\sigma$의 궤도는 원탁 몇 개에 둘러앉은 사람들의 무리와 같습니다. $\sigma$는 모두를 자기 탁자에서 한 자리씩 옆으로 옮기고, 혼자 앉은 탁자는 고정점입니다. 두 사람 $a$, $b$의 자리를 맞바꾸는 일을 이어서 하면 어떻게 될까요. 둘이 같은 탁자에 있었다면 그 탁자가 $a$ 쪽과 $b$ 쪽 두 탁자로 갈라지고, 다른 탁자에 있었다면 두 탁자가 하나로 합쳐집니다. 어느 경우든 탁자의 수는 정확히 하나 바뀝니다.

비유가 정의에 맞는 곳은 이렇습니다. 탁자 하나가 궤도 $O_\sigma(x)$이고, "한 자리씩 옆으로"가 (1)에서 궤도를 $\sigma^0(x), \sigma^1(x), \sigma^2(x), \dots$로 차례로 훑는 것입니다. "맞바꾼 뒤에 옮긴다"가 아니라 "옮긴 뒤에 맞바꾼다"가 $\tau\sigma$입니다. 오른쪽에 곱한 $\sigma\tau$도 (4)에 의해 탁자의 수가 하나 바뀝니다.

탁자의 수가 하나씩만 바뀌므로, 항등치환(모두 혼자 앉은 $|X|$개의 탁자)에서 출발해 호환을 $r$번 곱하면 탁자의 수와 $|X|$의 차이는 많아야 $r$이고 $r$과 홀짝이 같습니다. 이것이 치환의 짝·홀을 정하는 바탕이 됩니다.

## 증명

:::idea
$a$의 궤도를 $a, \sigma(a), \dots, \sigma^{k-1}(a)$로 늘어놓고 $\tau\sigma$의 값을 직접 계산한다. $b = \sigma^j(a)$이면 $\tau\sigma$는 앞의 $j$개와 뒤의 $k - j$개를 따로 돌리고, 다른 궤도는 건드리지 않는다. 합쳐지는 경우는 갈라지는 경우를 $\tau\sigma$에 써서 얻는다($\tau(\tau\sigma) = \sigma$).
:::

:::hint
$X$가 유한집합이면 궤도를 구할 때 음의 거듭제곱을 따지지 않아도 된다. 치환의 궤도의 (6)의 (ii)를 보라.
:::

:::hint
$y$가 $a$의 궤도 밖에 있으면 $\sigma(y)$도 그 궤도 밖에 있으므로 $\tau$가 $\sigma(y)$를 움직이지 않는다.
:::

:::proof
아래에서 궤도의 성질은 [[orbits-of-a-permutation|치환의 궤도]]의 번호로 인용한다. $\operatorname{Orb}(\sigma)$가 $X$의 [[partition|분할]]이라는 것은 그 항목의 (2)이다. 따라서 $\sigma$의 두 궤도는 같거나 서로소이다. 또 궤도의 (5)에 의해 $\sigma$의 모든 궤도는 유한집합이다.

**(1)** $x \in X$이고 $O = O_\sigma(x)$, $k = |O|$라 하자. 궤도의 (6)의 (ii)에 의해 $O = \{\sigma^i(x) : 0 \le i \le k - 1\}$이므로 $O \subseteq \{\sigma^i(x) : i \ge 0\}$이다. 거꾸로 $i \ge 0$이면 궤도의 정의에 의해 $\sigma^i(x) \in O$이다.

계산에서 거듭제곱의 값을 다음과 같이 쓴다. 정수 $i \ge 0$에서 [[laws-of-exponents|지수법칙]]의 (1)에 의해 $\sigma^{i+1} = \sigma\sigma^i$이므로 $\sigma^{i+1}(x) = \sigma(\sigma^i(x))$이다. 이것을 "(가)"라 부른다. 또 $Y \subseteq X$이고 $y \in Y$이며 $\rho \in S_X$가 $Y$의 모든 원소를 $Y$의 원소로 보내면, (가)와 $i$에 대한 [[mathematical-induction|수학적 귀납법]]으로 모든 $i \ge 0$에서 $\rho^i(y) \in Y$이고, (1)에 의해 $O_\rho(y) \subseteq Y$이다. 이것을 "(나)"라 부른다.

**(3)의 (i)** $O = O_\sigma(a)$, $k = |O|$라 하자. 궤도의 (6)에 의해 $k$는 자연수이고, $x_i = \sigma^i(a)$($0 \le i \le k - 1$)는 서로 다르며 $O = \{x_0, \dots, x_{k-1}\}$이다. $b \in O$이므로 $b = x_j$인 $j \in \{0, \dots, k - 1\}$이 있고, $b \ne a = x_0$이므로 $j \ne 0$, 곧 $1 \le j \le k - 1$이다((Z5), (Z1)). 따라서 $k \ge 2$이다. 궤도의 (6)의 (iii)에 의해 $\sigma(x_i) = x_{i+1}$($0 \le i \le k - 2$)이고 $\sigma(x_{k-1}) = x_0$이다. [[cycle-permutation|순환치환]]의 정의에 의해 $\tau(a) = b$, $\tau(b) = a$이고 $a$도 $b$도 아닌 점에서 $\tau$는 그 점을 그대로 둔다.

$\rho$의 값을 구한다. $0 \le i \le k - 2$이면 $\rho(x_i) = \tau(x_{i+1})$이다. $1 \le i + 1 \le k - 1$이므로 $x_{i+1} \ne x_0 = a$이고, $x_{i+1} = x_j = b$인 것은 정확히 $i = j - 1$일 때이다. 또 $\rho(x_{k-1}) = \tau(x_0) = x_j$이다. 정리하면 $0 \le i \le j - 2$이거나 $j \le i \le k - 2$이면 $\rho(x_i) = x_{i+1}$이고, $\rho(x_{j-1}) = x_0$이며, $\rho(x_{k-1}) = x_j$이다. $y \in X - O$이면 궤도의 (2)에 의해 $\sigma(y) \in O_\sigma(y)$이고 $y \in O_\sigma(y)$, $y \notin O$이므로 $O_\sigma(y) \ne O$, 따라서 $O_\sigma(y) \cap O = \emptyset$이다. 그래서 $\sigma(y) \notin O$이고, 특히 $\sigma(y)$는 $a$도 $b$도 아니므로 $\rho(y) = \tau(\sigma(y)) = \sigma(y)$이다.

$O_1 = \{x_i : 0 \le i \le j - 1\}$, $O_2 = \{x_i : j \le i \le k - 1\}$이라 하자. 위의 계산에 의해 $\rho$는 $O_1$의 원소를 $O_1$의 원소로, $O_2$의 원소를 $O_2$의 원소로 보낸다. (가)와 귀납법으로 $0 \le i \le j - 1$에서 $\rho^i(x_0) = x_i$이고, $0 \le i \le k - 1 - j$에서 $\rho^i(x_j) = x_{j+i}$이다(귀납 단계에서 쓰는 것은 $0 \le i \le j - 2$, $j \le i \le k - 2$에서의 $\rho(x_i) = x_{i+1}$뿐이다). 따라서 (1)에 의해 $O_1 \subseteq O_\rho(a)$, $O_2 \subseteq O_\rho(b)$이고, (나)에 의해 $O_\rho(a) \subseteq O_1$, $O_\rho(b) \subseteq O_2$이다. 곧 $O_\rho(a) = O_1$, $O_\rho(b) = O_2$이다. $x_i$들이 서로 다르므로 $O_1 \cap O_2 = \emptyset$이고 $O_1 \cup O_2 = O$이다. 이로써 "더 자세히"의 문장이 성립한다.

$y \in X - O$이면 $\sigma^i(y) \in O_\sigma(y)$이고 $O_\sigma(y) \cap O = \emptyset$이므로 $\sigma^i(y) \notin O$이다. 따라서 위의 계산에 의해 $\rho(\sigma^i(y)) = \sigma(\sigma^i(y))$이고, (가)와 귀납법으로 모든 $i \ge 0$에서 $\rho^i(y) = \sigma^i(y)$이다. (1)에 의해 $O_\rho(y) = O_\sigma(y)$이다.

집합의 등식을 보인다. $y \in X$라 하자. $y \notin O$이면 $O_\rho(y) = O_\sigma(y)$이고 $O_\sigma(y) \ne O$이므로 $O_\rho(y) \in \operatorname{Orb}(\sigma) - \{O\}$이다. $y \in O_1 = O_\rho(a)$이면 궤도의 (2)에 의해 $O_\rho(y) = O_\rho(a)$이고, $y \in O_2$이면 같은 방법으로 $O_\rho(y) = O_\rho(b)$이다. 따라서 $\operatorname{Orb}(\rho)$는 오른쪽 집합에 포함된다. 거꾸로 $R \in \operatorname{Orb}(\sigma) - \{O\}$이면 $R = O_\sigma(y)$인 $y$가 있고, $y \in O$이면 $R = O$이 되므로 $y \notin O$이며, $R = O_\rho(y) \in \operatorname{Orb}(\rho)$이다. $O_\rho(a)$, $O_\rho(b)$는 $\operatorname{Orb}(\rho)$의 원소이다. 이로써 등식이 성립한다.

개수를 센다. $c = |\operatorname{Orb}(\sigma)|$라 하면 [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (b)에 의해 $\operatorname{Orb}(\sigma) - \{O\}$는 원소를 $c - 1$개 갖는다. 그 원소 $R$은 $O$와 서로소인 공집합이 아닌 집합이고, $O_1$과 $O_2$는 $O$의 공집합이 아닌 부분집합($x_0 \in O_1$, $x_j \in O_2$)이므로 $R \ne O_1$, $R \ne O_2$이다. 또 $x_0 \in O_1$이고 $x_0 \notin O_2$이므로 $O_1 \ne O_2$이다. 같은 항목의 (a)를 두 번 쓰면 $\operatorname{Orb}(\rho)$는 원소를 $(c - 1) + 2 = c + 1$개 갖는다.

**(3)의 (ii)** $P = O_\sigma(a)$, $Q = O_\sigma(b)$, $p = |P|$라 하자. $b \notin P$이고 $b \in Q$이므로 $P \ne Q$이고 $P \cap Q = \emptyset$이다. 먼저 $b \in O_\rho(a)$를 보인다. $0 \le i \le p - 2$이면 궤도의 (6)의 (ii)에 의해 $\sigma^{i+1}(a) \in P$이고 $\sigma^{i+1}(a) \ne \sigma^0(a) = a$이며, $b \notin P$이므로 $\sigma^{i+1}(a) \ne b$이다. 따라서 $\rho(\sigma^i(a)) = \tau(\sigma^{i+1}(a)) = \sigma^{i+1}(a)$이고, (가)와 귀납법으로 $0 \le i \le p - 1$에서 $\rho^i(a) = \sigma^i(a)$이다. 궤도의 (6)의 (i)에 의해 $\sigma^p(a) = a$이므로
$$\rho^p(a) = \rho(\sigma^{p-1}(a)) = \tau(\sigma^p(a)) = \tau(a) = b$$
이고, $b \in O_\rho(a)$이다.

[[cycle-permutation|순환치환]]의 (5)에 의해 $\tau\tau = i_X$이므로 [[group|군]]의 결합법칙에 의해 $\tau\rho = (\tau\tau)\sigma = \sigma$이다. 이미 보인 (i)을 $\sigma$ 대신 $\rho$에 쓰면($b \in O_\rho(a)$), $O_{\tau\rho}(a) = P$와 $O_{\tau\rho}(b) = Q$는 서로소이고 $P \cup Q = O_\rho(a)$이며
$$\operatorname{Orb}(\sigma) = \bigl(\operatorname{Orb}(\rho) - \{O_\rho(a)\}\bigr) \cup \{P, Q\},$$
$$|\operatorname{Orb}(\sigma)| = |\operatorname{Orb}(\rho)| + 1$$
이다. 따라서 $O_\rho(a) = P \cup Q$이고 $|\operatorname{Orb}(\rho)| = |\operatorname{Orb}(\sigma)| - 1$이다. 남은 등식을 보인다. $R \in \operatorname{Orb}(\rho) - \{O_\rho(a)\}$이면 $R \in \operatorname{Orb}(\sigma)$이고, $R$은 $O_\rho(a)$와 서로소이므로 $O_\rho(a)$의 공집합이 아닌 부분집합 $P$, $Q$와 다르다. 거꾸로 $R \in \operatorname{Orb}(\sigma) - \{P, Q\}$이면 위의 등식에 의해 $R \in \operatorname{Orb}(\rho) - \{O_\rho(a)\}$이다. 따라서 $\operatorname{Orb}(\rho) - \{O_\rho(a)\} = \operatorname{Orb}(\sigma) - \{P, Q\}$이고, 여기에 $O_\rho(a) = P \cup Q$를 더하면 진술의 등식이다.

**(3)의 (iii)** $R$이 $a$도 $b$도 포함하지 않는 $\sigma$의 궤도이면, (i)의 경우 $R \ne O_\sigma(a)$이므로 $R \in \operatorname{Orb}(\sigma) - \{O_\sigma(a)\} \subseteq \operatorname{Orb}(\rho)$이고, (ii)의 경우 $R \ne O_\sigma(a)$, $R \ne O_\sigma(b)$이므로 $R \in \operatorname{Orb}(\sigma) - \{O_\sigma(a), O_\sigma(b)\} \subseteq \operatorname{Orb}(\rho)$이다.

**(2)** 궤도의 (4)에 의해 모든 $x$에서 $O_{i_X}(x) = \{x\}$이다. 각 $x \in X$에 $\{x\}$를 대응시키는 함수 $X \to \operatorname{Orb}(i_X)$는 $\{x\} = \{x'\}$이면 $x = x'$이므로 단사이고, $\operatorname{Orb}(i_X)$의 정의에 의해 전사이다. [[finite-set|유한집합]]의 (F4)에 의해 $|\operatorname{Orb}(i_X)| = |X|$이다. 궤도의 (3)에 의해 모든 $x$에서 $O_{\sigma^{-1}}(x) = O_\sigma(x)$이므로 $\operatorname{Orb}(\sigma^{-1}) = \operatorname{Orb}(\sigma)$이고 개수도 같다.

$\sigma \ne i_X$라 하자. 그러면 $\sigma(a) \ne a$인 $a \in X$가 있다(함수의 같음). $b = \sigma(a)$라 하면 궤도의 (2)에 의해 $b \in O_\sigma(a)$이고, (3)의 (i)에 의해 $\rho = (a\ b)\sigma$는 $|\operatorname{Orb}(\rho)| = |\operatorname{Orb}(\sigma)| + 1$을 만족한다. 궤도의 (7)에 의해 $|\operatorname{Orb}(\rho)| \le |X|$이므로 $|\operatorname{Orb}(\sigma)| + 1 \le |X|$이고, (L3)과 (Z6)에 의해 $|\operatorname{Orb}(\sigma)| < |X|$이다. (L1)에 의해 $|\operatorname{Orb}(\sigma)| \ne |X|$이다. 대우를 취하면 $|\operatorname{Orb}(\sigma)| = |X|$일 때 $\sigma = i_X$이다.

**(4)** 순환치환의 (5)에 의해 $\tau^{-1} = \tau$이고, [[group-basic-properties|군의 기본 성질]]의 (6)에 의해 $(\sigma\tau)^{-1} = \tau^{-1}\sigma^{-1} = \tau\sigma^{-1}$이다. (2)에 의해 $|\operatorname{Orb}(\sigma\tau)| = |\operatorname{Orb}(\tau\sigma^{-1})|$이고 $|\operatorname{Orb}(\sigma^{-1})| = |\operatorname{Orb}(\sigma)|$이다. 궤도의 (3)에 의해 $O_{\sigma^{-1}}(a) = O_\sigma(a)$이므로 $b \in O_{\sigma^{-1}}(a)$인 것은 정확히 $b \in O_\sigma(a)$일 때이다. 이제 (3)을 $\sigma^{-1}$에 쓰면 된다.

**(5)** $\sigma = (a_1\ \cdots\ a_k)$이고 $A = \{a_1, \dots, a_k\}$라 하자. 순환치환의 (4)에 의해 $a \in A$이면 $O_\sigma(a) = A$이고, $y \notin A$이면 $O_\sigma(y) = \{y\}$이다. 따라서 $\operatorname{Orb}(\sigma) = \{A\} \cup \mathcal{U}$이고, 여기서 $\mathcal{U} = \{\{y\} : y \in X - A\}$이다. 각 $y \in X - A$에 $\{y\}$를 대응시키는 함수는 (2)의 증명과 같은 이유로 $X - A$에서 $\mathcal{U}$로의 전단사이므로 (F4)에 의해 $|\mathcal{U}| = |X - A|$이다. 순환치환의 (2)에 의해 $|A| = k$이고, [[disjoint-union-count|서로소인 합집합의 원소의 개수]]의 (2)에 의해 $|X - A| = |X| - k$이다. $A$는 서로 다른 두 원소 $a_1$, $a_2$를 가지므로 원소가 하나인 집합이 아니고 $A \notin \mathcal{U}$이다. 원소 하나를 더하거나 빼기의 (a)에 의해 $|\operatorname{Orb}(\sigma)| = (|X| - k) + 1$이다. 호환은 $k = 2$인 경우이다.
:::

## 예시와 반례

:::example[$(1\ 2\ 3\ 4)$에 호환을 곱하기]
$X = \{1, 2, 3, 4, 5\}$이고 $\sigma = (1\ 2\ 3\ 4)$라 합시다. $\sigma$의 궤도는 $\{1, 2, 3, 4\}$와 $\{5\}$이므로 궤도의 개수는 $2$이고, (5)의 $5 - 4 + 1 = 2$와 맞습니다.

$\tau = (1\ 3)$이면 $3 = \sigma^2(1)$이므로 (3)의 (i)에서 $k = 4$, $j = 2$입니다. $\rho = \tau\sigma$의 값은 $\rho(1) = \tau(2) = 2$, $\rho(2) = \tau(3) = 1$, $\rho(3) = \tau(4) = 4$, $\rho(4) = \tau(1) = 3$, $\rho(5) = 5$이므로 $\rho$의 궤도는 $\{1, 2\} = \{\sigma^0(1), \sigma^1(1)\}$, $\{3, 4\} = \{\sigma^2(1), \sigma^3(1)\}$, $\{5\}$이고 궤도의 개수는 $3$입니다.

$\tau' = (1\ 5)$이면 $5 \notin \{1, 2, 3, 4\}$이므로 (3)의 (ii)의 경우입니다. $\rho' = \tau'\sigma$의 값은 $\rho'(1) = 2$, $\rho'(2) = 3$, $\rho'(3) = 4$, $\rho'(4) = \tau'(1) = 5$, $\rho'(5) = \tau'(5) = 1$이므로 $\rho' = (1\ 2\ 3\ 4\ 5)$이고 궤도는 $X$ 하나입니다.
:::

:::counterexample[같은 궤도의 두 점을 맞바꾸면 궤도가 갈라지는 예]
"호환을 곱하면 언제나 두 궤도가 합쳐진다"고 생각하기 쉽지만, $a$와 $b$가 이미 같은 궤도에 있으면 오히려 갈라집니다. $X = \{1, 2, 3\}$, $\sigma = (1\ 2\ 3)$, $\tau = (1\ 2)$이면 $\sigma$의 궤도는 $X$ 하나인데, $\tau\sigma$는 $1$, $2$, $3$을 각각 $\tau(2) = 1$, $\tau(3) = 3$, $\tau(1) = 2$로 보내므로 $\tau\sigma = (2\ 3)$이고 궤도는 $\{1\}$과 $\{2, 3\}$ 둘입니다. $2 = \sigma(1)$이므로 (3)의 (i)에서 $j = 1$인 경우이고, $O_\rho(1) = \{\sigma^0(1)\} = \{1\}$입니다.
:::

## 확인 질문

:::check[$X = \{1, 2, 3, 4\}$에서 $\sigma = (1\ 2)(3\ 4)$에 $(2\ 3)$을 왼쪽에 곱하면 궤도의 개수는 몇이 되는가?]
$\sigma$의 궤도는 $\{1, 2\}$와 $\{3, 4\}$이고 $3 \notin \{1, 2\}$이므로 (3)의 (ii)에 의해 두 궤도가 합쳐져 궤도의 개수는 $2 - 1 = 1$입니다. 직접 계산하면 $\rho = (2\ 3)\sigma$는 $1$, $3$, $4$, $2$를 각각 $3$, $4$, $2$, $1$로 보내므로 $\rho = (1\ 3\ 4\ 2)$이고 궤도는 $X$ 하나입니다.
:::

:::check[$X = \{1, \dots, 6\}$에서 $(1\ 2\ 3\ 4)$에 $(5\ 6)$을 왼쪽에 곱한 치환의 궤도의 개수는 몇인가?]
$2$입니다. (5)에 의해 $(1\ 2\ 3\ 4)$의 궤도의 개수는 $6 - 4 + 1 = 3$이고, 궤도는 $\{1, 2, 3, 4\}$, $\{5\}$, $\{6\}$입니다. $6 \notin \{5\}$이므로 (3)의 (ii)에 의해 $\{5\}$와 $\{6\}$이 합쳐져 궤도의 개수는 $3 - 1 = 2$입니다. 실제로 곱은 $1, 2, 3, 4$를 차례로 돌리고 $5$와 $6$을 맞바꾸므로 궤도는 $\{1, 2, 3, 4\}$와 $\{5, 6\}$입니다.
:::
