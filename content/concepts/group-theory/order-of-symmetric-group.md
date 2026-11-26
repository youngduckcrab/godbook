---
title: 대칭군의 원소의 개수
title_en: Order of the Symmetric Group
aliases: [대칭군의 위수, S_n의 위수, n! 개의 치환, order of the symmetric group, number of permutations]
kind: theorem
field: group-theory
msc: ["20B30"]
level: undergrad
summary: 집합 X가 유한집합이면 대칭군 S_X는 유한군이고, X가 원소를 n개 가지면(n은 자연수) S_X는 원소를 n!개 갖는다. 한 점의 상으로 치환을 나누면 조각마다 원소가 하나 적은 집합의 대칭군과 같은 개수의 치환이 들어간다. 분할의 조각이 k개이고 모두 원소가 m개이면 전체는 유한집합이고 원소가 km개라는 것도 함께 증명한다.
requires: [set, set-operations, function, injective-surjective-bijective, function-composition, mathematical-induction, partition, finite-set, adding-or-removing-an-element, number-of-elements-is-unique, subset-of-finite-set, natural-numbers-are-infinite, countably-infinite-set, partition-into-equal-blocks, disjoint-union-count, recursion-theorem, well-ordering-principle, even-and-odd, factorial, group, symmetric-group, subgroup-examples, group-isomorphism]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 5.1절 Theorem 5.1(p.59)과 그 증명 끝의 문장(p.60), 3.5절 연습문제 18(p.41)과 부록 B 의 그 힌트 3.5.18(p.320), 5.4절 연습문제 28(p.72)
    checked: original
    note: "출처는 Theorem 5.1(p.59)에서 'n 개의 문자 위의 대칭군 S_n 은 n! 개의 원소를 갖는 군'이라고 진술하고, 증명에서는 군의 세 조건만 확인한 뒤 '|S_n| = n! 의 증명은 연습문제로 남긴다'(p.60)고 적는다. 같은 내용이 3.5절 연습문제 18(p.41, 원소 n 개인 집합의 치환이 n! 개임을 보여라)과 5.4절 연습문제 28(p.72)에 있다. 부록 B 의 힌트 3.5.18(p.320)은 두 줄 표기의 아랫줄 a_1, …, a_n 이 서로 다르므로 a_1 을 고르는 방법이 n 가지, a_2 가 n − 1 가지, …, a_n 이 한 가지여서 n(n − 1)⋯2·1 = n! 가지라고 센다. 이 항목의 증명은 그 첫 걸음(한 점의 상이 n 가지)과 같은 발상이지만, 고르는 방법의 수를 곱하는 셈(곱집합의 원소의 개수)이 이 사이트에 없으므로 한 점 y 의 상으로 S_X 를 분할하고 각 조각이 S_{X − {y}} 와 크기가 같음을 전단사로 보인 뒤, 원소의 개수에 대한 귀납으로 센다. 조각 사이의 전단사로 y 와 z 를 맞바꾸는 치환을 왼쪽에 곱하는 것은 5.4절 연습문제 27(p.72, 왼쪽 곱 λ_g 는 G 의 치환이다)과 같은 발상이다. 출처는 S_n 을 '유한집합이면 X = {1, 2, …, n} 으로 둘 수 있다'(p.59)는 말과 함께 다루고, 이 항목은 임의의 유한집합 X 에 대해 (2)(3)을 진술한 뒤 S_n 을 특별한 경우로 둔다. 출처의 Theorem 5.1 은 n 의 범위를 적지 않으며, 이 항목은 0! 을 정의하지 않으므로(factorial) X = ∅ 을 (4)로 따로 둔다. (6)의 |S_3| = 6 은 출처 p.33 이 정삼각형의 꼭짓점의 배열을 3·2·1 = 3! = 6 으로 세는 것과 같은 결론이다. (1)의 조각 {σ ∈ S_X : σ(y) = z} 는 5.4절 연습문제 5(p.71)의 집합 {σ ∈ S_4 : σ(1) = 3}, {σ ∈ S_4 : σ(2) = 2} 와 같은 꼴이다. 예시 'S₄의 치환을 4의 상으로 나누기'는 그 연습문제 5 와 같은 꼴의 집합을 세는 것이고, 힌트 3.5.18 과 같은 발상이다. 반례 '자연수 전체 위의 대칭군은 유한군이 아니다'는 출처 p.59 의 '집합 X 의 치환 전체는 군 S_X 를 이룬다'를 X = ℕ 에 쓴 것이다. 첫째 확인 질문 '$S_5$에서 $1$을 $2$로 보내는 치환은 몇 개인가?'는 연습문제 5(p.71)의 (a)와 같은 꼴의 집합을 세는 것이다. 둘째 확인 질문 '원소가 셋인 집합과 원소가 넷인 집합의 대칭군은 동형일 수 있는가?'는 원소의 개수로 두 군이 동형이 아님을 보이는 것으로, 9.4절 연습문제 12(p.122, S_4 와 D_12 는 동형이 아니다)와 같은 종류의 물음이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(|S_X| 의 (7) 에 k = 0, m = 0 대입, 출처의 사용처 대조). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$X$가 [[set|집합]]이고 $S_X$, 치환, 곱 $\sigma\tau = \sigma \circ \tau$, 항등원 $i_X$, 표기 $S_n$은 [[symmetric-group|대칭군]]의 것이라 하자. "원소를 $n$개 갖는다"와 유한집합은 [[finite-set|유한집합]]의 뜻이고, 원소의 개수 $|A|$는 [[number-of-elements-is-unique|원소의 개수]]의 뜻이며, 유한군과 위수 $|G|$는 [[group|군]]의 것이다. 자연수 $n$의 계승 $n!$은 [[factorial|계승]]의 것이다.

1. (한 점의 상으로 나누기) $y \in X$이고 $Y = X - \{y\}$라 하자. $X$의 각 원소 $z$마다
   $$B_z = \{\sigma \in S_X : \sigma(y) = z\}$$
   로 두고 $\mathcal{B} = \{B_z : z \in X\}$로 둔다.
   - (i) $\mathcal{B}$는 $S_X$의 [[partition|분할]]이고, $X$의 각 $z$에 $B_z$를 대응시키는 함수 $X \to \mathcal{B}$는 [[injective-surjective-bijective|전단사]]이다.
   - (ii) $\sigma \in B_y$이면 [[adding-or-removing-an-element|제한]] $\sigma|_Y$는 $Y$에서 $Y$로의 전단사, 곧 $S_Y$의 원소이다. $B_y$의 각 $\sigma$에 $\sigma|_Y$를 대응시키는 함수 $B_y \to S_Y$는 전단사이다. $B_y$는 [[subgroup-examples|부분군의 예]]의 (6)에서 $x_0 = y$로 둔 부분군이다.
   - (iii) $z \in X$이고 $z \ne y$이면, $y$를 $z$로, $z$를 $y$로 보내고 $X$의 나머지 원소 $w$를 $w$로 보내는 함수 $\tau : X \to X$는 $\tau\tau = i_X$인 $S_X$의 원소이다. $B_z$의 각 $\sigma$에 $\tau\sigma$를 대응시키는 함수 $B_z \to B_y$와 $B_y$의 각 $\pi$에 $\tau\pi$를 대응시키는 함수 $B_y \to B_z$는 둘 다 전단사이다.
2. (유한군) $X$가 유한집합이면 $S_X$는 유한군이다.
3. (원소의 개수) $n$이 자연수이고 $X$가 원소를 $n$개 가지면 $|S_X| = n!$이다. 특히 모든 자연수 $n$에 대하여 $|S_n| = n!$이다.
4. (원소가 하나 이하) $X = \emptyset$이면 $|S_X| = 1$이다. $X$가 원소를 $1$개 가지면 $|S_X| = 1 = 1!$이다. ([[factorial|계승]]은 $0!$을 정의하지 않으므로 $X = \emptyset$은 (3)에 들어가지 않는다.)
5. (한 점의 상을 정한 치환의 개수) $n$이 자연수이고 $X$가 원소를 $n + 1$개 가지며 $y, z \in X$이면 $\{\sigma \in S_X : \sigma(y) = z\}$는 원소를 $n!$개 갖는다. 특히 $y$를 고정하는 치환 전체의 부분군은 원소를 $n!$개 갖는다.
6. (작은 경우) $|S_1| = 1$, $|S_2| = 2$, $|S_3| = 6$, $|S_4| = 24$, $|S_5| = 120$이다.
7. (크기가 같은 조각으로 세기) $A$가 집합이고 $\mathcal{S}$가 $A$의 [[partition|분할]]이며 $k \ge 0$, $m \ge 0$이 정수라 하자. $\mathcal{S}$가 원소를 $k$개 갖고 $\mathcal{S}$의 모든 조각이 원소를 $m$개 가지면, $A$는 유한집합이고 $|A| = km$이다. 여기서는 $A$가 유한집합이라는 것을 가정하지 않는다([[partition-into-equal-blocks|크기가 같은 조각으로 나눈 유한집합]]의 (3)은 그것을 가정한다).

증명과 반례에서 정수의 계산과 부등식에 관하여 [[well-ordering-principle]]의 진술에서 받아들인 계산 법칙과 (Z5), (Z6), (L3)을 쓰고, 정수끼리의 합, 차, 곱이 정수라는 것은 [[even-and-odd]]에서 받아들인 사실을 쓴다.
:::

:::english
Let $X$ be a set, and let $S_X$, permutations, the product $\sigma\tau = \sigma \circ \tau$, the identity $i_X$ and the notation $S_n$ be as in the entry on the symmetric group. "Has $n$ elements" and finite sets are as in the entry on finite sets, the number of elements $|A|$ is as in the entry on the number of elements, and finite groups and the order $|G|$ are as in the entry on groups. The factorial $n!$ of a natural number $n$ is as in the entry on factorials.

1. (Splitting by the image of one point) Let $y \in X$ and $Y = X - \{y\}$. For each element $z$ of $X$ put
   $$B_z = \{\sigma \in S_X : \sigma(y) = z\}$$
   and put $\mathcal{B} = \{B_z : z \in X\}$.
   - (i) $\mathcal{B}$ is a partition of $S_X$, and the function $X \to \mathcal{B}$ sending each $z \in X$ to $B_z$ is a bijection.
   - (ii) If $\sigma \in B_y$, then the restriction $\sigma|_Y$ is a bijection from $Y$ to $Y$, that is, an element of $S_Y$. The function $B_y \to S_Y$ sending each $\sigma$ to $\sigma|_Y$ is a bijection. $B_y$ is the subgroup of (6) in the entry on examples of subgroups with $x_0 = y$.
   - (iii) If $z \in X$ and $z \ne y$, then the function $\tau : X \to X$ sending $y$ to $z$, $z$ to $y$, and every other element $w$ of $X$ to $w$ is an element of $S_X$ with $\tau\tau = i_X$. The function $B_z \to B_y$ sending each $\sigma$ to $\tau\sigma$ and the function $B_y \to B_z$ sending each $\pi$ to $\tau\pi$ are both bijections.
2. (Finite group) If $X$ is a finite set, then $S_X$ is a finite group.
3. (Number of elements) If $n$ is a natural number and $X$ has $n$ elements, then $|S_X| = n!$. In particular, $|S_n| = n!$ for every natural number $n$.
4. (At most one element) If $X = \emptyset$, then $|S_X| = 1$. If $X$ has $1$ element, then $|S_X| = 1 = 1!$. (Since the entry on factorials does not define $0!$, $X = \emptyset$ is not covered by (3).)
5. (Permutations with a prescribed image of one point) If $n$ is a natural number, $X$ has $n + 1$ elements and $y, z \in X$, then $\{\sigma \in S_X : \sigma(y) = z\}$ has $n!$ elements. In particular, the subgroup of all permutations fixing $y$ has $n!$ elements.
6. (Small cases) $|S_1| = 1$, $|S_2| = 2$, $|S_3| = 6$, $|S_4| = 24$, $|S_5| = 120$.
7. (Counting by blocks of equal size) Let $A$ be a set, let $\mathcal{S}$ be a partition of $A$, and let $k \ge 0$ and $m \ge 0$ be integers. If $\mathcal{S}$ has $k$ elements and every block of $\mathcal{S}$ has $m$ elements, then $A$ is a finite set and $|A| = km$. Here $A$ is not assumed to be finite (statement (3) of the entry on finite sets divided into blocks of equal size assumes it).

The proof and the counterexample use, for integer arithmetic and inequalities, the arithmetic laws accepted in the statement of the well-ordering principle together with (Z5), (Z6) and (L3), and the fact accepted in the entry on even and odd integers that sums, differences and products of integers are integers.
:::

## 직관

카드 $n$장을 섞는 방법을 세는 일을 생각해 봅시다. 맨 위의 카드 한 장이 어디로 가는지에 따라 섞는 방법을 $n$무리로 나눌 수 있습니다. 같은 무리 안에서는 그 카드의 자리가 정해져 있으니, 남은 $n - 1$장을 남은 $n - 1$자리에 놓는 방법만 다릅니다. 그래서 무리마다 $n - 1$장을 섞는 방법과 같은 수가 들어가고, 모두 합하면 $n$배가 됩니다.

비유가 정의에 맞는 곳은 이렇습니다. "맨 위의 카드"가 점 $y$이고, "그 카드가 가는 자리"가 $\sigma(y) = z$이며, 한 무리가 조각 $B_z$입니다. "남은 카드를 남은 자리에 놓는 방법"과 $S_Y$의 원소를 짝짓는 것이 (1)의 (ii)와 (iii)의 전단사입니다. $z = y$인 무리는 제한으로 곧바로 $S_Y$와 짝지어지고, $z \ne y$인 무리는 $y$와 $z$를 맞바꾸는 치환을 왼쪽에 곱해 $B_y$로 옮긴 뒤 짝지어집니다.

$n = 1$이면 무리가 하나이고 그 무리에 든 치환도 항등치환 하나입니다. $X$가 공집합이면 나눌 점이 없지만, 아무것도 하지 않는 치환 $i_\emptyset$ 하나가 있으므로 $|S_\emptyset| = 1$입니다. [[factorial|계승]] 항목은 $0!$을 정의하지 않으므로 이 경우를 (4)로 따로 적었습니다.

## 증명

:::idea
점 $y$ 하나의 상으로 $S_X$를 $|X|$개의 조각으로 나누고, 조각마다 $S_{X - \{y\}}$로 가는 전단사를 만든다. 그러면 원소의 개수에 대한 귀납으로 $|S_X| = |X| \cdot |S_{X - \{y\}}|$를 되풀이해 $n!$을 얻는다.
:::

:::hint
$B_y$의 원소는 $y$를 $y$로 보내므로, 단사라는 것에서 $Y$의 원소를 $Y$의 원소로 보낸다. 거꾸로 $S_Y$의 원소에 "$y$를 $y$로 보낸다"를 덧붙이면 $B_y$의 원소가 된다.
:::

:::hint
조각의 개수와 조각마다의 원소 개수를 알아도, 이 사이트의 [[partition-into-equal-blocks|크기가 같은 조각으로 나눈 유한집합]]의 (3)은 $S_X$가 유한집합이라는 것을 가정한다. 조각의 개수에 대한 귀납으로 유한성까지 함께 보이는 (7)을 먼저 증명한다.
:::

:::proof
**(7)** (3)의 증명에 쓰므로 먼저 보인다. $m \ge 0$인 정수 $m$을 정하고 $k$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로 보인다. 진술 $P(k)$는 "모든 집합 $A$와 $A$의 모든 분할 $\mathcal{S}$에 대하여, $\mathcal{S}$가 원소를 $k$개 갖고 모든 조각이 원소를 $m$개 가지면 $A$는 원소를 $km$개 갖는다"이다.

$k = 0$: [[finite-set|유한집합]]의 (F2)에 의해 $\mathcal{S} = \emptyset$이다. $A$에 원소 $x$가 있다면 [[partition|분할]]의 조건 2에 의해 $x \in X$인 $X \in \mathcal{S}$가 있어야 하는데 $\mathcal{S}$에는 원소가 없으므로, $A$에는 원소가 없고 $A = \emptyset$이다. (F2)에 의해 $A$는 원소를 $0 = 0 \cdot m$개 갖는다.

$k \ge 0$에서 $P(k)$가 참이라 하고, $\mathcal{S}$가 원소를 $k + 1$개 갖는 $A$의 분할이며 모든 조각이 원소를 $m$개 갖는다고 하자. 전단사 $h : \{1, \dots, k+1\} \to \mathcal{S}$가 있고 (F1)에 의해 $k + 1 \in \{1, \dots, k+1\}$이므로 $X_0 = h(k+1)$은 $\mathcal{S}$의 원소이다. [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (b)에 의해 $\mathcal{S} - \{X_0\}$은 원소를 $k$개 갖고, [[partition-into-equal-blocks|크기가 같은 조각으로 나눈 유한집합]]의 (1)에 의해 $\mathcal{S} - \{X_0\}$은 $A - X_0$의 분할이다. 그 조각은 $\mathcal{S}$의 조각이므로 모두 원소를 $m$개 갖는다. $P(k)$에 의해 $A - X_0$은 원소를 $km$개 갖는다. 분할의 조건 1에 의해 $X_0 \subseteq A$이므로 $(A - X_0) \cup X_0 = A$이고 $(A - X_0) \cap X_0 = \emptyset$이다. [[disjoint-union-count|서로소인 합집합의 원소의 개수]]의 (1)에 의해 $A$는 유한집합이고 $|A| = km + m = (k + 1)m$이다(정수의 계산 법칙). 따라서 $P(k+1)$이 참이다.

**(1)의 (iii)** $z \ne y$이므로 $X$의 각 원소 $w$에 대하여 "$w = y$이면 $z$, $w = z$이면 $y$, 둘 다 아니면 $w$"는 $X$의 원소 하나를 정하고, [[recursion-theorem|재귀 정리]]의 (1)에 의해 이것은 함수 $\tau : X \to X$이다. $\tau(\tau(y)) = \tau(z) = y$, $\tau(\tau(z)) = \tau(y) = z$이고, $w$가 $y$도 $z$도 아니면 $\tau(\tau(w)) = \tau(w) = w$이다. 따라서 모든 $w \in X$에서 $(\tau \circ \tau)(w) = w$이고, [[function]]의 함수의 같음에 의해 $\tau \circ \tau = i_X$이다. 그러면 $\tau$는 단사이다: $\tau(a) = \tau(b)$이면 $a = \tau(\tau(a)) = \tau(\tau(b)) = b$이다. 또 전사이다: $b \in X$이면 $\tau(b) \in X$이고 $\tau(\tau(b)) = b$이다. 따라서 $\tau \in S_X$이고 [[symmetric-group|대칭군]]의 (1)에 의해 $\tau\tau = \tau \circ \tau = i_X$이다.

$\sigma \in B_z$이면 대칭군의 (1)에 의해 $\tau\sigma \in S_X$이고 $(\tau\sigma)(y) = \tau(\sigma(y)) = \tau(z) = y$이므로 $\tau\sigma \in B_y$이다. $\pi \in B_y$이면 $\tau\pi \in S_X$이고 $(\tau\pi)(y) = \tau(y) = z$이므로 $\tau\pi \in B_z$이다. 재귀 정리의 (1)에 의해 $\lambda(\sigma) = \tau\sigma$인 함수 $\lambda : B_z \to B_y$와 $\mu(\pi) = \tau\pi$인 함수 $\mu : B_y \to B_z$가 있다. [[group|군]]의 결합법칙과 항등원에 의해 $\sigma \in B_z$이면 $\mu(\lambda(\sigma)) = \tau(\tau\sigma) = (\tau\tau)\sigma = i_X\sigma = \sigma$이고, 같은 계산으로 $\pi \in B_y$이면 $\lambda(\mu(\pi)) = \pi$이다. 그래서 $\lambda$는 단사이다: $\lambda(\sigma) = \lambda(\sigma')$이면 $\sigma = \mu(\lambda(\sigma)) = \mu(\lambda(\sigma')) = \sigma'$이다. 또 전사이다: $\pi \in B_y$이면 $\mu(\pi) \in B_z$이고 $\lambda(\mu(\pi)) = \pi$이다. 같은 논법에서 $\lambda$와 $\mu$의 자리를 바꾸면 $\mu$도 단사이고 전사이다.

**(1)의 (i)** [[partition|분할]]의 세 조건을 확인한다. 조건 1: 각 $B_z$는 $S_X$의 부분집합이다. $i_X(y) = y$이므로 $i_X \in B_y$이고, $z \ne y$이면 (iii)의 $\tau$가 $\tau(y) = z$이므로 $\tau \in B_z$이다. $z = y$이거나 $z \ne y$이므로 모든 $B_z$는 공집합이 아니다. 조건 2: $\sigma \in S_X$이면 $\sigma(y) \in X$이고 $\sigma \in B_{\sigma(y)}$이다. 조건 3: $z, z' \in X$이고 $\sigma \in B_z \cap B_{z'}$이면 $z = \sigma(y) = z'$이므로 $B_z = B_{z'}$이다. 대우를 취하면 $B_z \ne B_{z'}$일 때 $B_z \cap B_{z'} = \emptyset$이다.

재귀 정리의 (1)에 의해 $\beta(z) = B_z$인 함수 $\beta : X \to \mathcal{B}$가 있다. $\mathcal{B}$의 정의에 의해 $\beta$는 전사이다. 단사: $B_z = B_{z'}$라 하자. $z = y$이면 $i_X \in B_z$, $z \ne y$이면 $\tau \in B_z$이므로 $B_z$의 원소 $\sigma$가 있고, $\sigma \in B_{z'}$이므로 $z = \sigma(y) = z'$이다.

**(1)의 (ii)** $\sigma \in B_y$라 하자. $w \in Y$이면 $w \ne y$이고 $\sigma$가 단사이므로 $\sigma(w) \ne \sigma(y) = y$, 곧 $\sigma(w) \in Y$이다. 제한 $\sigma|_Y$는 [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 함수의 제한에 의해 $Y$에서 $X$로의 단사이고, 모든 값이 $Y$에 속하므로 [[function]]의 "공역은 선언하기 나름이다"에 의해 $Y$에서 $Y$로의 단사이다. 전사: $u \in Y$이면 $\sigma$가 전사이므로 $\sigma(w) = u$인 $w \in X$가 있다. $\sigma(y) = y \ne u$이므로 $w \ne y$, 곧 $w \in Y$이고 $\sigma|_Y(w) = \sigma(w) = u$이다. 따라서 $\sigma|_Y \in S_Y$이다.

재귀 정리의 (1)에 의해 $\rho(\sigma) = \sigma|_Y$인 함수 $\rho : B_y \to S_Y$가 있다. 단사: $\sigma, \sigma' \in B_y$이고 $\sigma|_Y = \sigma'|_Y$이면 $Y$의 모든 점에서 $\sigma$와 $\sigma'$의 값이 같고 $\sigma(y) = y = \sigma'(y)$이다. $X = Y \cup \{y\}$이므로 $X$의 모든 점에서 값이 같고, 함수의 같음에 의해 $\sigma = \sigma'$이다. 전사: $\pi \in S_Y$라 하자. $X$의 각 원소 $w$에 대하여 "$w = y$이면 $y$, $w \in Y$이면 $\pi(w)$"는 $X$의 원소 하나를 정하므로(두 경우는 겹치지 않고 하나는 반드시 성립한다), 재귀 정리의 (1)에 의해 이것은 함수 $\pi^+ : X \to X$이다. $\pi^+$는 단사이다: $\pi^+(a) = \pi^+(b)$라 하자. $a, b \in Y$이면 $\pi(a) = \pi(b)$이고 $\pi$가 단사이므로 $a = b$이다. $a = b = y$이면 같다. $a \in Y$이고 $b = y$이면 $\pi^+(a) = \pi(a) \in Y$이므로 $\pi^+(a) \ne y = \pi^+(b)$가 되어 가정과 어긋나고, $a = y$이고 $b \in Y$인 경우도 같다. $\pi^+$는 전사이다: $u = y$이면 $\pi^+(y) = u$이고, $u \in Y$이면 $\pi$가 $Y$ 위로의 전사이므로 $\pi(w) = u$인 $w \in Y$가 있고 $\pi^+(w) = u$이다. 따라서 $\pi^+ \in S_X$이고 $\pi^+(y) = y$이므로 $\pi^+ \in B_y$이다. $Y$의 모든 점 $w$에서 $\pi^+|_Y(w) = \pi^+(w) = \pi(w)$이므로 $\rho(\pi^+) = \pi$이다.

$B_y = \{f \in S_X : f(y) = y\}$이므로 이것은 [[subgroup-examples|부분군의 예]]의 (6)에서 $x_0 = y$로 둔 부분군이다.

**(3)** $n$에 대한 수학적 귀납법으로, 진술 $Q(n)$ "원소를 $n$개 갖는 모든 집합 $X$에 대하여 $S_X$는 유한집합이고 원소를 $n!$개 갖는다"를 보인다.

$n = 1$: $X$가 원소를 $1$개 가지면 전단사 $h : \{1\} \to X$가 있다. $h$가 전사이므로 $X$의 모든 원소는 $h(1)$이고, $X = \{h(1)\}$이다. [[symmetric-group|대칭군]]의 (2)에 의해 $S_X = \{i_X\}$이고, [[group|군]]의 (5)에 의해 이 집합은 원소를 $1$개 갖는다. [[factorial|계승]]의 (1)에 의해 $1 = 1!$이다.

$n$이 자연수이고 $Q(n)$이 참이라 하자. $X$가 원소를 $n + 1$개 가지면 전단사 $h : \{1, \dots, n+1\} \to X$가 있고, (F1)에 의해 $n + 1 \in \{1, \dots, n+1\}$이므로 $y = h(n+1)$은 $X$의 원소이다. $Y = X - \{y\}$는 원소 하나를 더하거나 빼기의 (b)에 의해 원소를 $n$개 갖고, $Q(n)$에 의해 $S_Y$는 원소를 $n!$개 갖는다. (1)의 (ii)의 전단사 $\rho : B_y \to S_Y$에 대하여 (F3)에 의해 $\rho^{-1}$는 $S_Y$에서 $B_y$로의 전단사이므로, (F4)에 의해 $B_y$는 원소를 $n!$개 갖는다. $z \in X$이고 $z \ne y$이면 (1)의 (iii)의 전단사 $\mu : B_y \to B_z$와 (F4)에 의해 $B_z$도 원소를 $n!$개 갖는다. 따라서 분할 $\mathcal{B}$의 모든 조각은 원소를 $n!$개 갖는다. (1)의 (i)의 전단사 $\beta : X \to \mathcal{B}$와 (F4)에 의해 $\mathcal{B}$는 원소를 $n + 1$개 갖는다. (7)을 $A = S_X$, $\mathcal{S} = \mathcal{B}$, $k = n + 1$, $m = n!$에 쓰면 $S_X$는 유한집합이고 원소를 $(n+1) \cdot n!$개 갖는다. 계승의 (1)과 곱셈의 교환법칙에 의해 $(n + 1) \cdot n! = n! \cdot (n+1) = (n+1)!$이므로 $Q(n+1)$이 참이다.

따라서 모든 자연수 $n$에 대하여 $Q(n)$이 참이다. $S_X$는 대칭군의 (1)에 의해 군이므로 $|S_X| = n!$이다. $n$이 자연수이면 유한집합의 (F2)에 의해 $\{1, \dots, n\}$은 원소를 $n$개 가지므로 $|S_n| = n!$이다.

**(4)** $X = \emptyset$이면 대칭군의 (2)에 의해 $S_X = \{i_\emptyset\}$이고 군의 (5)에 의해 이 집합은 원소를 $1$개 갖는다. $X$가 원소를 $1$개 가지면 (3)의 $n = 1$인 경우이다.

**(2)** $X$가 유한집합이면 어떤 정수 $n \ge 0$에 대하여 $X$는 원소를 $n$개 갖는다. (Z5)에 의해 $n = 0$이거나 $n > 0$이다. $n = 0$이면 (F2)에 의해 $X = \emptyset$이고 (4)에 의해 $S_X$는 유한집합이다. $n > 0$이면 $n$은 자연수이고 (3)에 의해 $S_X$는 유한집합이다. 어느 경우든 군 $S_X$는 유한군이다.

**(5)** $X$가 원소를 $n + 1$개 갖고 $y, z \in X$라 하자. 원소 하나를 더하거나 빼기의 (b)에 의해 $Y = X - \{y\}$는 원소를 $n$개 갖고, (3)에 의해 $S_Y$는 원소를 $n!$개 갖는다. (3)의 증명에서와 같이 (1)의 (ii), (F3), (F4)에 의해 $B_y$는 원소를 $n!$개 갖고, $z \ne y$이면 (1)의 (iii)과 (F4)에 의해 $B_z$도 원소를 $n!$개 갖는다. $B_z = \{\sigma \in S_X : \sigma(y) = z\}$이고, $z = y$인 경우가 $y$를 고정하는 치환 전체의 부분군이다.

**(6)** (3)과 계승의 (1)에서 $1! = 1$, $2! = 1 \cdot 2 = 2$, $3! = 2 \cdot 3 = 6$, $4! = 6 \cdot 4 = 24$, $5! = 24 \cdot 5 = 120$이다.
:::

## 예시와 반례

:::example[S₄의 치환을 4의 상으로 나누기]
$X = \{1, 2, 3, 4\}$, $y = 4$, $Y = \{1, 2, 3\}$이라 합시다. 치환 $\sigma$를 네 값 $(\sigma(1), \sigma(2), \sigma(3), \sigma(4))$로 적겠습니다. (1)에 의해 $S_4$는 $\sigma(4)$의 값에 따라 네 조각 $B_1$, $B_2$, $B_3$, $B_4$로 나뉩니다.

$B_4$의 원소는 $4$를 고정하고, 제한하면 $S_3$의 원소가 됩니다. 예컨대 $(2, 3, 1, 4) \in B_4$를 $Y$로 제한하면 $1$, $2$, $3$을 각각 $2$, $3$, $1$로 보내는 $S_3$의 원소입니다. (6)에 의해 $|S_3| = 6$이므로 (1)의 (ii)와 (F4)에 의해 $B_4$는 원소를 $6$개 갖습니다.

$B_1$에서는 $4$와 $1$을 맞바꾸는 $\tau = (4, 2, 3, 1)$을 왼쪽에 곱합니다. $\sigma = (2, 3, 4, 1) \in B_1$이면 $\tau\sigma$의 값은 $\tau(2) = 2$, $\tau(3) = 3$, $\tau(4) = 1$, $\tau(1) = 4$이므로 $\tau\sigma = (2, 3, 1, 4) \in B_4$입니다. 이 곱하기가 $B_1$에서 $B_4$로의 전단사이므로 $B_1$도 원소를 $6$개 갖고, $B_2$, $B_3$도 같습니다. 네 조각을 합하면 $4 \cdot 6 = 24 = |S_4|$입니다.
:::

:::counterexample[자연수 전체 위의 대칭군은 유한군이 아니다]
(2)에서 $X$가 유한집합이라는 가정을 빼면 결론이 깨질 수 있습니다. $X = \mathbb{N}$이라 합시다. 자연수 $k$마다 (L3)에 의해 $k \ne k + 1$이므로, (1)의 (iii)을 $y = k$, $z = k + 1$에 쓰면 $k$와 $k + 1$을 맞바꾸고 나머지는 그대로 두는 치환 $t_k \in S_{\mathbb{N}}$이 있습니다.

[[recursion-theorem|재귀 정리]]의 (1)에 의해 $k$에 $t_k$를 대응시키는 함수 $\mathbb{N} \to S_{\mathbb{N}}$이 있고, 이 함수는 단사입니다. $t_j = t_k$이고 $j \ne k$라 하면 $t_j(k) = t_k(k) = k + 1$이어야 합니다. 그런데 $k = j + 1$이면 $t_j(k) = j = k - 1$이고, (L3)과 (Z6)에 의해 $k - 1 < k + 1$이므로 (Z5)에 의해 $k - 1 \ne k + 1$입니다. $k$가 $j$도 $j + 1$도 아니면 $t_j(k) = k$이고, (L3)에 의해 $k \ne k + 1$입니다. 어느 경우든 $t_j(k) \ne k + 1$이 되어 어긋납니다. 그래서 $T = \{t_k : k \in \mathbb{N}\}$로 두면 $k$에 $t_k$를 대응시키는 함수는 $\mathbb{N}$에서 $T$로의 전단사이고, $T$는 [[countably-infinite-set|가산 무한 집합]]이며 [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (3)에 의해 무한집합입니다. $S_{\mathbb{N}}$이 유한집합이라면 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $T \subseteq S_{\mathbb{N}}$도 유한집합이어야 하므로, $S_{\mathbb{N}}$은 유한집합이 아니고 $S_{\mathbb{N}}$은 무한군입니다.
:::

## 확인 질문

:::check[$S_5$에서 $1$을 $2$로 보내는 치환은 몇 개인가?]
$24$개입니다. $\{1, \dots, 5\}$는 원소를 $5 = 4 + 1$개 가지므로 (5)를 $n = 4$, $y = 1$, $z = 2$에 쓰면 $\{\sigma \in S_5 : \sigma(1) = 2\}$는 원소를 $4! = 24$개 갖습니다. 다섯 개의 값 $z = 1, \dots, 5$에 대한 조각이 모두 $24$개씩이므로 합하면 $5 \cdot 24 = 120 = |S_5|$와 맞습니다.
:::

:::check[원소가 셋인 집합과 원소가 넷인 집합의 대칭군은 동형일 수 있는가?]
동형일 수 없습니다. $X$가 원소를 $3$개, $Y$가 원소를 $4$개 가지면 (3)에 의해 $|S_X| = 3! = 6$이고 $|S_Y| = 4! = 24$입니다. [[group-isomorphism|동형사상]]은 전단사이므로 $S_X$에서 $S_Y$로의 동형사상이 있다면 [[number-of-elements-is-unique|원소의 개수]]의 (2)에 의해 $6 = 24$여야 하는데, 그렇지 않습니다.
:::
