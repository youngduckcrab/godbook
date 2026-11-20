---
title: 유한집합을 크기순으로 늘어놓기
title_en: Listing a Finite Set in Increasing Order
aliases: [크기순 나열, 오름차순 나열, 유한집합의 순서, increasing enumeration, listing in increasing order, order-preserving enumeration of a finite set]
kind: theorem
field: real-analysis
msc: ["26"]
level: undergrad
summary: 원소를 n 개(n ≥ 1) 갖는 실수 집합에는 순증가인 전단사 {1, …, n} → A, 곧 크기순 나열이 정확히 하나 있다. 그 끝값이 최솟값과 최댓값이라는 것, 한 점을 끼워 넣은 집합의 크기순 나열, 한 원소에서 나눈 앞부분과 뒷부분의 크기순 나열을 함께 진술한다.
requires: [set, subset, set-operations, function, injective-surjective-bijective, proof-by-contradiction, mathematical-induction, finite-set, adding-or-removing-an-element, number-of-elements-is-unique, prime-number, well-ordering-principle, even-and-odd, recursion-theorem, real-number-arithmetic, real-order-axioms, order-properties-of-reals, upper-bound-and-supremum, real-valued-function, derivative-and-monotonicity, maximum-of-finite-set]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.1절(5.1.1 소절) Definition 5.1.1 (p.181), Proposition 5.1.7 의 증명 (p.183); 5.2절(5.2.1 소절) Lemma 5.2.1 의 증명 (p.191)
    checked: original
    note: "출처는 이 정리를 진술하지 않는다. Definition 5.1.1(p.181)은 [a, b] 의 분할을 a = x_0 < x_1 < ⋯ < x_n = b 인 유한집합 {x_0, x_1, …, x_n} 으로 적으며, 유한집합의 원소를 이렇게 크기순으로 적을 수 있고 그 적는 법이 하나뿐이라는 것을 말없이 쓴다. Proposition 5.1.7 의 증명(p.183)은 세분 P̃ = {x̃_0, …, x̃_ℓ} 에 대해 x_i = x̃_{k_i} 인 정수 k_0 < k_1 < ⋯ < k_n 이 있다고 증명 없이 적고, Lemma 5.2.1 의 증명(p.191)은 [a, b] 의 분할 {x_0, …, x_k} 와 [b, c] 의 분할 {x_k, …, x_n} 의 합집합을 {x_0, …, x_n} 으로 적는다. 이 항목의 진술과 증명은 이 사이트가 썼다. (3)은 점 하나를 더한 집합을, (4)는 한 원소에서 나눈 두 부분을 다룬다. (3)은 같은 Lemma 5.2.1 의 증명(p.191–192)이 [a, c] 의 분할 Q 에 점 b 를 더한 Q ∪ {b} 를 분할로 쓰는 경우에 해당한다. 출처의 k_0 < ⋯ < k_n 꼴의 일반 진술(두 유한집합 A ⊆ B 의 크기순 나열 사이의 첨자)은 이 항목에 두지 않았다. 이름 '크기순 나열'은 이 사이트가 붙였다. 출처 전체에서 'increasing order'(0건), 'enumerat'(2건, 유리수의 나열), 'arrange'(가산집합과 급수의 재배열), 'sort', 'relabel' 을 찾았고, 유한집합을 크기순으로 늘어놓는 것을 가리키는 낱말은 없었다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 경계 경우에서 거짓이던 설명 문장 6건과 증명 없던 주장을 고쳤다."
added: 2026-11-20
---

:::statement
집합 $\{1, \dots, n\}$, "원소를 $n$개 갖는다"는 [[finite-set]]의 것이고, 원소의 개수가 하나로 정해진다는 것은 [[number-of-elements-is-unique]]의 것이다. 함수의 제한은 [[adding-or-removing-an-element]]의 것이고, 최댓값 $\max$, 최솟값 $\min$은 [[upper-bound-and-supremum]]의 것이다. 정수는 실수이므로([[real-number-arithmetic]]의 (K7)) $\{1, \dots, n\} \subseteq \mathbb{R}$이고, [[order-properties-of-reals]]의 (10)에 의해 그 원소 사이의 순서는 정수로 읽든 실수로 읽든 같다.

**크기순 나열.** $n \ge 1$인 정수 $n$과 원소를 $n$개 갖는 $A \subseteq \mathbb{R}$에 대하여, 함수 $u : \{1, \dots, n\} \to A$가 $A$의 **크기순 나열**(listing in increasing order)인 것은 정확히 $u$가 [[injective-surjective-bijective|전단사]](공역은 $A$)이고 순증가일 때이다. 여기서 순증가는 $u$를 $\{1, \dots, n\}$ 위의 실함수로 보아 [[derivative-and-monotonicity|도함수와 증가·감소]] 항목의 뜻으로 읽은 것, 곧 $i < j$인 모든 $i, j \in \{1, \dots, n\}$에서 $u(i) < u(j)$라는 것이다. 이 말은 정수론 입문에서 곱을 정의할 때 쓴 "나열"(순서를 따지지 않는 아무 전단사)과 다르므로 늘 "크기순 나열"이라 쓴다.

다음이 성립한다. 아래에서 $n \ge 1$은 정수, $A \subseteq \mathbb{R}$는 원소를 $n$개 갖는 집합이다.

1. (존재와 유일) $A$의 크기순 나열은 정확히 하나 있다. $A$가 원소를 $n$개 갖게 하는 $n$은 $A$로 정해지므로, 크기순 나열은 $A$만으로 정해진다. 또 순증가인 함수 $v : \{1, \dots, n\} \to \mathbb{R}$가 있으면 $v$는 단사이고, 그 치역 $B = \{v(i) : i \in \{1, \dots, n\}\}$은 원소를 $n$개 가지며, $v$(공역을 $B$로 둔 것)는 $B$의 크기순 나열이다.
2. (끝값과 순서) $u$가 $A$의 크기순 나열이면 $u(1) = \min A$이고 $u(n) = \max A$이다. 또 $i, j \in \{1, \dots, n\}$에 대하여 $u(i) < u(j)$인 것은 정확히 $i < j$일 때이고, $u(i) \le u(j)$인 것은 정확히 $i \le j$일 때이다.
3. (한 점 끼워 넣기) $u$를 $A$의 크기순 나열, $y$를 $A$에 속하지 않는 실수라 하자. $K = \{i \in \{1, \dots, n\} : y < u(i)\}$로 두고, $K \ne \emptyset$이면 $k$를 $K$의 최소 원소([[well-ordering-principle|정렬 원리]]가 주는 하나뿐인 원소), $K = \emptyset$이면 $k = n + 1$로 둔다. 그러면 다음이 성립한다.
   - (i) $1 \le k \le n + 1$이고, $i \in \{1, \dots, n\}$에 대하여 $u(i) < y$인 것은 정확히 $i < k$일 때이며, $y < u(i)$인 것은 정확히 $k \le i$일 때이다.
   - (ii) $A \cup \{y\}$는 원소를 $n + 1$개 갖고, 그 크기순 나열 $w : \{1, \dots, n+1\} \to A \cup \{y\}$는
     $$
     w(i) = \begin{cases} u(i) & (1 \le i \le k - 1) \\ y & (i = k) \\ u(i - 1) & (k + 1 \le i \le n + 1) \end{cases}
     $$
     이다.
   - (iii) $k = 1$인 것은 정확히 $y < \min A$일 때이고, $k = n + 1$인 것은 정확히 $\max A < y$일 때이다. $\min A < y < \max A$이면 $2 \le k \le n$이고, $2 \le k \le n$이면 $u(k - 1) < y < u(k)$이다.

   $k$는 조건을 만족하는 수 가운데 하나를 고른 것이 아니라 정렬 원리가 정확히 하나로 정해 주는 수, 곧 [[recursion-theorem]]의 (1)이 말하는 "이미 정해진 대상"이다.
4. (앞부분과 뒷부분) $u$를 $A$의 크기순 나열, $1 \le k \le n$인 정수 $k$에 대하여 $c = u(k)$라 하자. 그러면 $\{x \in A : x \le c\}$는 원소를 $k$개 갖고 그 크기순 나열은 $u$의 $\{1, \dots, k\}$로의 제한이다. $\{x \in A : c \le x\}$는 원소를 $n - k + 1$개 갖고 그 크기순 나열은 $v(j) = u(j + k - 1)$로 정한 함수 $v : \{1, \dots, n - k + 1\} \to \{x \in A : c \le x\}$이다. 또 두 집합의 합집합은 $A$이고 교집합은 $\{c\}$이다.
:::

:::english
The set $\{1, \dots, n\}$ and "has $n$ elements" are those of the entry on finite sets, and the fact that the number of elements is uniquely determined is that of the entry on the uniqueness of the number of elements. Restriction of a function is that of the entry on adding or removing an element, and the maximum $\max$ and minimum $\min$ are those of the entry on upper bounds and suprema. Integers are real numbers (item (K7) of the entry on real number arithmetic), so $\{1, \dots, n\} \subseteq \mathbb{R}$, and by item (10) of the entry on order properties of the reals the order between its elements is the same whether read for integers or for real numbers.

**Listing in increasing order.** For an integer $n \ge 1$ and a set $A \subseteq \mathbb{R}$ with $n$ elements, a function $u : \{1, \dots, n\} \to A$ is a **listing of $A$ in increasing order** exactly when $u$ is a bijection (with codomain $A$) and strictly increasing. Here strictly increasing is read in the sense of the entry on derivatives and monotonicity, regarding $u$ as a real-valued function on $\{1, \dots, n\}$; that is, $u(i) < u(j)$ for all $i, j \in \{1, \dots, n\}$ with $i < j$. This term differs from the "listing" used to define products in the introductory number theory course (an arbitrary bijection, with no regard to order), so we always say "listing in increasing order".

The following hold. Below, $n \ge 1$ is an integer and $A \subseteq \mathbb{R}$ is a set with $n$ elements.

1. (Existence and uniqueness) $A$ has exactly one listing in increasing order. Since the $n$ for which $A$ has $n$ elements is determined by $A$, the listing in increasing order is determined by $A$ alone. Moreover, if $v : \{1, \dots, n\} \to \mathbb{R}$ is strictly increasing, then $v$ is injective, its range $B = \{v(i) : i \in \{1, \dots, n\}\}$ has $n$ elements, and $v$ (with codomain $B$) is the listing of $B$ in increasing order.
2. (End values and order) If $u$ is the listing of $A$ in increasing order, then $u(1) = \min A$ and $u(n) = \max A$. Moreover, for $i, j \in \{1, \dots, n\}$, $u(i) < u(j)$ exactly when $i < j$, and $u(i) \le u(j)$ exactly when $i \le j$.
3. (Inserting one point) Let $u$ be the listing of $A$ in increasing order and $y$ a real number not in $A$. Put $K = \{i \in \{1, \dots, n\} : y < u(i)\}$, and let $k$ be the least element of $K$ (the unique element given by the well-ordering principle) if $K \ne \emptyset$, and $k = n + 1$ if $K = \emptyset$. Then the following hold.
   - (i) $1 \le k \le n + 1$, and for $i \in \{1, \dots, n\}$, $u(i) < y$ exactly when $i < k$, and $y < u(i)$ exactly when $k \le i$.
   - (ii) $A \cup \{y\}$ has $n + 1$ elements, and its listing in increasing order $w : \{1, \dots, n+1\} \to A \cup \{y\}$ is
     $$
     w(i) = \begin{cases} u(i) & (1 \le i \le k - 1) \\ y & (i = k) \\ u(i - 1) & (k + 1 \le i \le n + 1) . \end{cases}
     $$
   - (iii) $k = 1$ exactly when $y < \min A$, and $k = n + 1$ exactly when $\max A < y$. If $\min A < y < \max A$, then $2 \le k \le n$; and if $2 \le k \le n$, then $u(k - 1) < y < u(k)$.

   The number $k$ is not one chosen among numbers satisfying a condition; it is the number determined uniquely by the well-ordering principle, that is, an "already determined object" in the sense of item (1) of the recursion theorem.
4. (Front part and back part) Let $u$ be the listing of $A$ in increasing order, and for an integer $k$ with $1 \le k \le n$ let $c = u(k)$. Then $\{x \in A : x \le c\}$ has $k$ elements and its listing in increasing order is the restriction of $u$ to $\{1, \dots, k\}$. The set $\{x \in A : c \le x\}$ has $n - k + 1$ elements and its listing in increasing order is the function $v : \{1, \dots, n - k + 1\} \to \{x \in A : c \le x\}$ defined by $v(j) = u(j + k - 1)$. Moreover, the union of the two sets is $A$ and their intersection is $\{c\}$.
:::

## 직관

카드 몇 장에 서로 다른 수가 적혀 있다면, 가장 작은 수부터 차례로 왼쪽에서 오른쪽으로 늘어놓는 방법은 하나뿐입니다. 그 늘어놓은 모양이 크기순 나열이고, 카드의 자리 번호 $1, 2, \dots, n$에서 수로 가는 함수로 적은 것이 $u$입니다. "원소를 $n$개 갖는다"는 정의는 번호를 붙이는 전단사가 있다는 것만 말하고, 그런 전단사는 여럿일 수 있습니다(아래 반례). 크기순이라는 조건을 붙이면 하나로 정해집니다((1)).

존재는 가장 큰 카드를 빼고 나머지를 늘어놓은 뒤 맨 오른쪽에 가장 큰 카드를 놓는 귀납법으로 보입니다. 하나뿐이라는 것은, 어떻게 늘어놓았든 맨 오른쪽 카드가 가장 큰 수여야 한다는 것((2))에서 나옵니다. 비유와 다른 점은, 집합에는 같은 수가 두 번 들어 있지 않아서 "같은 수의 카드를 어느 쪽에 놓을까"라는 문제가 없다는 것입니다.

(3)은 새 카드 한 장을 끼워 넣는 일입니다. 새 수 $y$보다 큰 카드 가운데 가장 왼쪽 자리 $k$에 $y$를 놓고, 그 자리부터 오른쪽 카드는 한 칸씩 밉니다. $y$보다 큰 카드가 없으면 맨 오른쪽 $n + 1$번째 자리에 놓습니다. (4)는 한 카드 $c$에서 줄을 나누는 일입니다. $c$까지의 앞부분은 번호가 그대로이고, $c$부터의 뒷부분은 번호를 $k - 1$만큼 당겨서 $1$부터 다시 붙입니다. $c$는 두 부분에 모두 들어갑니다.

## 증명

:::idea
(2)는 정의에서 바로 나온다. (1)의 존재는 최댓값을 빼고 귀납법으로, 유일성은 두 나열의 마지막 값이 모두 최댓값이라는 것과 귀납법으로 보인다. (3)과 (4)는 주어진 식의 함수가 순증가이고 치역이 맞음을 보인 뒤 (1)의 마지막 문장을 쓴다.
:::

:::hint
(1)의 유일성: 두 크기순 나열 $u$, $w$는 (2)에 의해 $u(n+1) = w(n+1) = \max A$이다. 두 함수를 $\{1, \dots, n\}$으로 제한하면 $A - \{\max A\}$의 크기순 나열이 된다.
:::

:::hint
(3)의 (i): $K \ne \emptyset$이고 $k \le i$이면 (2)에 의해 $u(k) \le u(i)$이다. $i < k$이면 $i \notin K$이므로 $y < u(i)$가 아니다.
:::

:::proof
실수의 순서는 [[order-properties-of-reals]]의 (1)–(3)으로 다루고(그 (10)에 의해 정수 사이의 부등식도 그렇게 읽는다), 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7), (L1)–(L3), 정수끼리의 합과 차가 정수라는 것은 [[even-and-odd]]의 받아들인 사실로 다룬다. "최댓값 (1)"은 [[maximum-of-finite-set]]의 번호이다. 함수 $f : X \to Y$의 값이 모두 $Y' \subseteq Y$에 속하면 같은 집합 $f$를 $X$에서 $Y'$으로의 함수로 다시 선언할 수 있고, 반대로 $Y \subseteq Y''$이면 $X$에서 $Y''$으로의 함수로도 볼 수 있다([[function]]의 진술). 순증가는 값과 순서로만 정해지므로 공역을 바꾸어도 그대로이다.

**2의 증명.** $u$를 크기순 나열이라 하자. $x \in A$이면 $u$가 전사이므로 $x = u(i)$인 $i \in \{1, \dots, n\}$이 있다. $i \le n$이므로 $i < n$이거나 $i = n$이고, $i < n$이면 순증가에 의해 $u(i) < u(n)$이다. 어느 경우나 $x \le u(n)$이다. $u(n) \in A$이므로 $u(n)$은 $A$의 원소이면서 상계, 곧 최댓값이다. 같은 방식으로 $1 \le i$에서 $u(1) \le u(i)$이므로 $u(1)$은 최솟값이다.

$i < j$이면 정의에 의해 $u(i) < u(j)$이다. 거꾸로 $u(i) < u(j)$라 하자. $j \le i$라면 $j < i$일 때 $u(j) < u(i)$이고 $j = i$일 때 $u(j) = u(i)$이므로 $u(j) \le u(i)$인데, 이는 [[order-properties-of-reals]]의 (1)의 (i)에 의해 $u(i) < u(j)$와 함께 성립하지 않는다. 따라서 (Z5)에 의해 $i < j$이다. $\le$의 경우: $i \le j$이면 $i < j$이거나 $i = j$이므로 $u(i) \le u(j)$이다. 거꾸로 $u(i) \le u(j)$인데 $j < i$라면 $u(j) < u(i)$이어서 같은 까닭으로 모순이므로 (Z5)에 의해 $i \le j$이다.

**1의 마지막 문장.** $v : \{1, \dots, n\} \to \mathbb{R}$가 순증가라 하자. $i \ne j$이면 (Z5)에 의해 $i < j$이거나 $j < i$이고, 어느 경우나 $v(i) \ne v(j)$이다([[order-properties-of-reals]]의 (1)의 (i)). 따라서 $v$는 단사이다. $v$의 값은 모두 $B$에 속하므로 $v$를 $\{1, \dots, n\}$에서 $B$로의 함수로 선언할 수 있고, $B$의 정의에 의해 전사이므로 전단사이다. [[finite-set]]의 정의에 의해 $B$는 원소를 $n$개 갖고, $v$는 전단사이고 순증가이므로 $B$의 크기순 나열이다.

**1의 존재.** 자연수 $n$에 대한 명제 $S_n$을 "원소를 $n$개 갖는 $\mathbb{R}$의 부분집합은 크기순 나열을 갖는다"로 두고 [[mathematical-induction]]을 쓴다.

기초 단계: $A$가 원소를 $1$개 가지면 전단사 $h : \{1\} \to A$가 있다. $\{1\}$의 서로 다른 두 원소는 없으므로 $i < j$인 $i, j \in \{1\}$은 없고((L3)에 의해 $1 < 1$이 아니다), $h$는 순증가이다. 따라서 $h$가 크기순 나열이다.

귀납 단계: $S_n$이 참이라 하고 $A$가 원소를 $n + 1$개 갖는다고 하자. 최댓값 (1)에 의해 $M = \max A$가 있다. [[adding-or-removing-an-element]]의 (b)에 의해 $A - \{M\}$은 원소를 $n$개 갖고, $S_n$에 의해 크기순 나열 $u' : \{1, \dots, n\} \to A - \{M\}$이 있다. $M \notin A - \{M\}$이므로 [[adding-or-removing-an-element]]의 (a)에 의해 $u = u' \cup \{(n + 1, M)\}$은 $\{1, \dots, n+1\}$에서 $(A - \{M\}) \cup \{M\} = A$로의 전단사이고($M \in A$이므로 이 합집합은 $A$이다), $i \le n$에서 $u(i) = u'(i)$, $u(n+1) = M$이다. $i < j$인 $i, j \in \{1, \dots, n+1\}$을 잡자. [[finite-set]]의 (F1)에 의해 $j \le n$이거나 $j = n + 1$이다. $j \le n$이면 $i < j \le n$이므로 $u(i) = u'(i) < u'(j) = u(j)$이다. $j = n + 1$이면 $i \le n$이고((Z1)), $u(i) = u'(i) \in A - \{M\}$이므로 $u(i) \le M$이고 $u(i) \ne M$이어서 $u(i) < M = u(n+1)$이다. 따라서 $u$는 순증가이고 $S_{n+1}$이 참이다.

**1의 유일성.** 자연수 $n$에 대한 명제 $T_n$을 "원소를 $n$개 갖는 $\mathbb{R}$의 부분집합의 두 크기순 나열은 같다"로 두자.

기초 단계: $A$가 원소를 $1$개 가지면 위와 같이 $A = \{h(1)\}$이다. 두 크기순 나열 $u$, $w$의 값 $u(1)$, $w(1)$은 모두 $A$의 원소이므로 $h(1)$과 같고, 정의역이 같고 값이 같으므로 $u = w$이다.

귀납 단계: $T_n$이 참이라 하고 $A$가 원소를 $n + 1$개 가지며 $u$, $w$가 $A$의 크기순 나열이라 하자. (2)에 의해 $u(n+1) = \max A = w(n+1)$이다. 이 값을 $M$이라 하자. $i \in \{1, \dots, n\}$이면 $i < n + 1$이므로 $u(i) < M$이어서 $u(i) \in A - \{M\}$이다. 따라서 제한 $u|_{\{1, \dots, n\}}$은 $\{1, \dots, n\}$에서 $A - \{M\}$으로의 함수로 볼 수 있고, 단사의 제한이므로 단사이며([[adding-or-removing-an-element]]의 진술), 순증가이다. $x \in A - \{M\}$이면 $x = u(i)$인 $i \in \{1, \dots, n+1\}$이 있고 $u(n+1) = M \ne x$이므로 $i \ne n + 1$, 곧 $i \in \{1, \dots, n\}$이다((F1)). 따라서 이 제한은 전사이고, $A - \{M\}$(원소를 $n$개 갖는다. [[adding-or-removing-an-element]]의 (b))의 크기순 나열이다. $w$의 제한도 같다. $T_n$에 의해 두 제한은 같으므로 $i \le n$에서 $u(i) = w(i)$이고, $u(n+1) = w(n+1)$이다. 따라서 $u = w$이다.

$A$가 원소를 $n$개 갖게 하는 $n$은 [[number-of-elements-is-unique]]의 (1)에 의해 하나뿐이므로, 크기순 나열의 정의역 $\{1, \dots, n\}$도 $A$로 정해지고, 위의 유일성에 의해 크기순 나열은 $A$만으로 정해진다.

**3의 증명.** (i): $K \subseteq \{1, \dots, n\} \subseteq \mathbb{N}$이므로 $K \ne \emptyset$이면 정렬 원리([[well-ordering-principle]]의 (2))에 의해 최소 원소가 있고 그 (1)에 의해 하나뿐이다. 이때 $1 \le k \le n$이다. $K = \emptyset$이면 $k = n + 1$이고 $1 \le n + 1$이다. 이제 $i \in \{1, \dots, n\}$을 잡자.

- $K = \emptyset$이면 $y < u(i)$가 아니고, $i \le n < n + 1 = k$이므로 $k \le i$도 아니다((L1)). [[order-properties-of-reals]]의 (1)의 (iii)에 의해 $u(i) \le y$이고, $u(i) \ne y$($y \notin A$)이므로 $u(i) < y$이다. 또 $i < k$이다.
- $K \ne \emptyset$이고 $k \le i$이면 (2)에 의해 $u(k) \le u(i)$이고 $k \in K$이므로 $y < u(k) \le u(i)$이다. 거꾸로 $y < u(i)$이면 $i \in K$이므로 최소 원소의 정의에 의해 $k \le i$이다. 따라서 $y < u(i)$인 것은 정확히 $k \le i$일 때이다. $i < k$이면 (L1)에 의해 $k \le i$가 아니므로 $y < u(i)$가 아니고, [[order-properties-of-reals]]의 (1)의 (iii)에 의해 $u(i) \le y$이며 $u(i) \ne y$이므로 $u(i) < y$이다. 거꾸로 $u(i) < y$이면 같은 항목의 (1)의 (i)에 의해 $y < u(i)$가 아니므로 $k \le i$가 아니고, (Z5)에 의해 $i < k$이다.

(ii): $\{1, \dots, n+1\}$의 각 원소 $i$는 (Z5)에 의해 $i < k$, $i = k$, $k < i$ 가운데 정확히 한 경우에 든다. $i < k$이면 (Z1)에 의해 $i \le k - 1 \le n$이므로 $u(i)$가 정해지고, $k < i$이면 $k + 1 \le i$이므로 $1 \le k \le i - 1 \le n$이어서 $u(i - 1)$이 정해진다. [[real-valued-function]]의 (1)을 $S = \{1, \dots, n+1\}$에 쓰면 이 경우 나누기로 함수 $w : \{1, \dots, n+1\} \to \mathbb{R}$가 정해진다. (i)에 의해 다음 세 가지가 성립한다: $i < k$이면 $w(i) = u(i) < y$, $w(k) = y$, $k < i$이면 $k \le i - 1$이므로 $y < u(i - 1) = w(i)$.

$w$가 순증가임을 보이자. $i < j$인 $i, j \in \{1, \dots, n+1\}$에서, 둘 다 $k$보다 작으면 $w(i) = u(i) < u(j) = w(j)$이다. 둘 다 $k$보다 크면 (Z7)에 의해 $i - 1 < j - 1$이므로 $w(i) = u(i - 1) < u(j - 1) = w(j)$이다. 그 밖의 경우는 $i < k \le j$이거나 $i \le k < j$이고($i < j$이므로 $j \le k \le i$는 아니다), 위의 세 가지와 [[order-properties-of-reals]]의 (1)의 (v)에 의해 $w(i) \le y \le w(j)$에서 두 부등식 가운데 적어도 하나가 $<$이므로 $w(i) < w(j)$이다.

$w$의 치역은 $A \cup \{y\}$이다. $w$의 값은 $u$의 값이거나 $y$이므로 $A \cup \{y\}$에 속한다. 거꾸로 $y = w(k)$이고, $A$의 원소 $x$는 어떤 $i \in \{1, \dots, n\}$에서 $x = u(i)$인데, $i < k$이면 $x = w(i)$이고 $k \le i$이면 $k + 1 \le i + 1 \le n + 1$이므로 $x = u((i + 1) - 1) = w(i + 1)$이다. (1)의 마지막 문장에 의해 $A \cup \{y\}$는 원소를 $n + 1$개 갖고 $w$는 그 크기순 나열이며, (1)의 유일성에 의해 크기순 나열은 이것뿐이다.

(iii): $k = 1$이면 $1 \le n$에서 $k \le 1$이므로 (i)에 의해 $y < u(1) = \min A$이다((2)). 거꾸로 $y < u(1)$이면 (i)에 의해 $k \le 1$이고 $1 \le k$이므로 $k = 1$이다((L2)). $k = n + 1$이면 $n < k$이므로 (i)에 의해 $u(n) < y$, 곧 $\max A < y$이다. 거꾸로 $\max A < y$이면 모든 $i$에서 $u(i) \le u(n) < y$이므로 $y < u(i)$인 $i$가 없어 $K = \emptyset$이고 $k = n + 1$이다. $\min A < y < \max A$이면 앞의 두 문장과 [[order-properties-of-reals]]의 (1)의 (i)에 의해 $k \ne 1$이고 $k \ne n + 1$이다($y < \min A$도 $\max A < y$도 아니므로). $1 \le k \le n + 1$이므로 (Z5)와 (Z1)에 의해 $2 \le k \le n$이다. $2 \le k \le n$이면 $k \le k$이므로 (i)에 의해 $y < u(k)$이고, $k - 1 \in \{1, \dots, n\}$이며 $k - 1 < k$이므로 $u(k - 1) < y$이다.

**4의 증명.** $A_1 = \{x \in A : x \le c\}$, $A_2 = \{x \in A : c \le x\}$로 두자. $A$의 원소 $x$는 $x = u(i)$($i \in \{1, \dots, n\}$)로 쓰이고, (2)에 의해 $x \le c = u(k)$인 것은 정확히 $i \le k$일 때, $c \le x$인 것은 정확히 $k \le i$일 때이다.

$u$의 $\{1, \dots, k\}$로의 제한 $u_1$은 순증가이고($\{1, \dots, k\} \subseteq \{1, \dots, n\}$), 그 치역은 $\{u(i) : 1 \le i \le k\} = A_1$이다. (1)의 마지막 문장에 의해 $A_1$은 원소를 $k$개 갖고 $u_1$은 그 크기순 나열이다.

$1 \le j \le n - k + 1$이면 (Z7)에 의해 $k \le j + k - 1 \le n$이므로 $v(j) = u(j + k - 1)$이 정해지고([[real-valued-function]]의 (1)), $v$는 순증가이다($j < j'$이면 $j + k - 1 < j' + k - 1$). 그 치역은 $\{u(i) : k \le i \le n\}$이다. $k \le i \le n$이면 $j = i - k + 1$이 $1 \le j \le n - k + 1$이고 $j + k - 1 = i$이기 때문이다. 따라서 치역은 $A_2$이고, (1)의 마지막 문장에 의해 $A_2$는 원소를 $n - k + 1$개 갖고 $v$는 그 크기순 나열이다.

$A$의 원소 $x$는 [[order-properties-of-reals]]의 (1)의 (iv)에 의해 $x \le c$이거나 $c \le x$이므로 $A_1 \cup A_2 = A$이다($A_1, A_2 \subseteq A$). $x \in A_1 \cap A_2$이면 $x \le c$이고 $c \le x$이므로 (1)의 (ii)에 의해 $x = c$이고, $c \in A$이며 $c \le c$이므로 $c \in A_1 \cap A_2$이다. 따라서 $A_1 \cap A_2 = \{c\}$이다. $\blacksquare$
:::

## 예시와 반례

:::example[세 수를 크기순으로]
$A = \{4, -1, 2\}$의 크기순 나열은 $u(1) = -1$, $u(2) = 2$, $u(3) = 4$입니다. $u$는 $\{1, 2, 3\}$에서 $A$로의 전단사이고 $-1 < 2 < 4$이므로 순증가입니다. (2)대로 $u(1) = -1 = \min A$, $u(3) = 4 = \max A$입니다.

(3)으로 $y = 3$을 끼워 넣으면 $K = \{i : 3 < u(i)\} = \{3\}$이므로 $k = 3$이고, $w(1) = -1$, $w(2) = 2$, $w(3) = 3$, $w(4) = u(3) = 4$입니다. $y = -5$이면 $K = \{1, 2, 3\}$이어서 $k = 1$이고, $y = 7$이면 $K = \emptyset$이어서 $k = 4$입니다. (iii)대로 앞의 것은 $-5 < \min A$, 뒤의 것은 $\max A < 7$입니다.

(4)를 $k = 2$, $c = u(2) = 2$에 쓰면 앞부분 $\{x \in A : x \le 2\} = \{-1, 2\}$의 크기순 나열은 $-1, 2$이고, 뒷부분 $\{x \in A : 2 \le x\} = \{2, 4\}$의 크기순 나열은 $v(1) = u(2) = 2$, $v(2) = u(3) = 4$입니다. $c = 2$는 두 부분에 모두 들어 있습니다.
:::

:::counterexample[크기순이 아닌 전단사]
같은 $A = \{4, -1, 2\}$에 대해 $h(1) = 4$, $h(2) = -1$, $h(3) = 2$로 정한 $h$도 $\{1, 2, 3\}$에서 $A$로의 전단사이므로 $A$가 원소를 $3$개 갖는다는 것을 보여 줍니다. 그러나 $1 < 2$인데 $h(1) = 4 > -1 = h(2)$이므로 순증가가 아니고, 크기순 나열이 아닙니다. 원소의 개수를 세는 전단사는 이처럼 여럿일 수 있고, 크기순이라는 조건이 그 가운데 하나를 정해 줍니다.
:::

## 확인 질문

:::check[$A = \{0, 3\}$에 $y = 1$을 끼워 넣고, 그 결과에 다시 $y = 2$를 끼워 넣으면 각 단계의 $k$는 무엇인가?]
첫 단계에서 $u(1) = 0$, $u(2) = 3$이고 $1 < u(i)$인 $i$는 $2$뿐이므로 $k = 2$이며, 크기순 나열은 $0, 1, 3$입니다. 둘째 단계에서 $2 < u(i)$인 $i$는 $3$뿐이므로($u(3) = 3$) $k = 3$이고, 크기순 나열은 $0, 1, 2, 3$입니다. 두 번 모두 $2 \le k \le n$이므로 (iii)대로 $y$는 이웃한 두 값 사이에 있습니다.
:::

:::check[$n \ge 2$이고 $u$가 $A$의 크기순 나열일 때, $u(2)$는 $A - \{\min A\}$의 최솟값인가?]
그렇습니다. (2)에 의해 $u(1) = \min A$이고, $A$의 원소 $x = u(i)$가 $u(1)$이 아닌 것은 정확히 $i \ne 1$, 곧 $2 \le i$일 때이며, (2)에 의해 이는 $u(2) \le x$일 때입니다. 따라서 $A - \{\min A\} = \{x \in A : u(2) \le x\}$이고, (4)를 $k = 2$에 쓰면 이 집합의 크기순 나열의 첫 값은 $v(1) = u(2)$이므로 (2)에 의해 그 최솟값은 $u(2)$입니다.
:::
