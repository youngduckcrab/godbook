---
title: 유한집합의 최댓값과 최솟값
title_en: Maximum and Minimum of a Finite Set
aliases: [유한집합의 최댓값, 유한집합의 최솟값, 유한 개의 실수의 최댓값, maximum of a finite set, minimum of a finite set, finite set of reals has a maximum]
kind: theorem
field: real-analysis
msc: ["26"]
level: undergrad
summary: 공집합이 아닌 유한한 실수 집합은 최댓값과 최솟값을 갖고, 따라서 유계이며 상한과 하한이 최댓값과 최솟값이다. 부분집합과 합집합의 최댓값·최솟값의 비교, 상수와의 비교를 함께 진술한다.
requires: [set, subset, set-operations, proof-by-contradiction, mathematical-induction, finite-set, adding-or-removing-an-element, number-of-elements-is-unique, subset-of-finite-set, disjoint-union-count, prime-number, well-ordering-principle, real-number-arithmetic, real-order-axioms, order-properties-of-reals, upper-bound-and-supremum, absolute-value, interval]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 1.1절 연습문제 1.1.2 (1.1.1 Exercises, p.27); 1.2절 1.2.4 Maxima and minima 첫 문단 (p.34)
    checked: original
    note: "출처는 이 정리를 연습문제 1.1.2(p.27)로 둔다: 순서집합 S 의 공집합이 아닌 유한 부분집합 A 는 유계이고 inf A, sup A 가 있어 A 에 속함을 보이라는 것이고, 힌트는 귀납법이다. 1.2.4 소절(p.34)은 이 연습문제에 의해 유한한 수의 집합은 상한과 하한을 갖고 둘 다 그 집합에 속한다고 적은 뒤, 상한이 집합에 속할 때 max A 라는 말과 기호를 쓴다. 이 항목은 출처의 일반 순서집합 대신 ℝ 의 부분집합에 대해 진술하고, 최댓값을 upper-bound-and-supremum 의 정의(원소이면서 상계)로 읽는다. 유한집합은 finite-set 의 전단사로 정한 뜻이다. (1)의 증명(원소의 개수에 대한 귀납법)은 이 사이트가 썼다. 출처 연습문제 1.1.4(p.27)는 B 가 유계이고 A ⊆ B 가 공집합이 아니며 상한·하한이 모두 있을 때 inf B ≤ inf A ≤ sup A ≤ sup B 를 보이라는 것으로, 이 항목의 (3)은 그 유한집합판이다. 출처는 Proposition 2.1.7 의 증명(2.1절, p.54)에서 유한집합 {|x_1|, …, |x_{M−1}|, 1 + |x|} 의 최댓값을 이 사실에 기대어 쓴다. 예시 '원소가 셋인 집합'은 출처 1.2.4 소절(p.34)의 max{1, 2.4, π, 100} = 100, min{1, 2.4, π, 100} = 1 과 같은 발상이다. 반례 '유한이 아닌 집합'은 출처 1.1절 Definition 1.1.2 뒤의 문단(p.24)이 {x ∈ ℚ : x < 1} 의 상한 1 이 집합에 속하지 않는다고 하는 것과 같은 발상이고(출처는 유리수의 집합을 쓴다), 그 끝 문장(공집합이 아니고 최댓값이 없으면 유한집합이 아니다)은 출처 연습문제 1.1.6(p.27, sup A ∉ A 이면 A 는 가산 무한 부분집합을 포함한다)과 같은 방향의 사실이다. 확인 질문 1 의 공집합은 출처 1.2.3 소절의 Definition 1.2.9(p.33)가 공집합의 상한을 −∞ 로 두는 약속과 달리, 이 사이트에서는 상한이 없는 경우이다(upper-bound-and-supremum 의 (5))."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 경계 경우에서 거짓이던 설명 문장 6건과 증명 없던 주장을 고쳤다."
added: 2026-11-20
---

:::statement
유한집합과 "원소를 $n$개 갖는다"는 [[finite-set]]의 것이고, 상계, 하계, 위로·아래로 유계, 상한 $\sup$, 하한 $\inf$, 최댓값 $\max$, 최솟값 $\min$은 [[upper-bound-and-supremum]]의 것이며, 두 수의 최대 $\max\{a, b\}$와 최소 $\min\{a, b\}$는 [[absolute-value]]의 것이다. 이 최댓값은 집합의 최댓값이며, 함수가 한 점에서 최댓값을 갖는다는 정의와는 다른 것이다.

$A$를 $\mathbb{R}$의 공집합이 아닌 유한 부분집합이라 하자. 다음이 성립한다.

1. (최댓값과 최솟값의 존재) $A$는 최댓값과 최솟값을 갖는다. 따라서 $A$는 유계이고, $\sup A = \max A$, $\inf A = \min A$이며, $\min A \le \max A$이다.
2. (원소가 하나인 집합) 실수 $a$에 대하여 $\max\{a\} = \min\{a\} = a$이다.
3. (부분집합) $B$가 $A$의 공집합이 아닌 부분집합이면 $B$도 유한집합이고
   $$
   \min A \le \min B \le \max B \le \max A
   $$
   이다.
4. (합집합) $B$도 $\mathbb{R}$의 공집합이 아닌 유한 부분집합이면 $A \cup B$는 공집합이 아닌 유한집합이고
   $$
   \max (A \cup B) = \max\{\max A, \max B\}, \qquad \min (A \cup B) = \min\{\min A, \min B\}
   $$
   이다. 특히 실수 $y$에 대하여 $\max (A \cup \{y\}) = \max\{\max A, y\}$이고 $\min (A \cup \{y\}) = \min\{\min A, y\}$이다.
5. (상수와의 비교) 실수 $c$에 대하여, $A$의 모든 원소 $x$에서 $x \le c$인 것은 정확히 $\max A \le c$일 때이고, $A$의 모든 원소 $x$에서 $x < c$인 것은 정확히 $\max A < c$일 때이다. 마찬가지로 $A$의 모든 원소 $x$에서 $c \le x$인 것은 정확히 $c \le \min A$일 때이고, $A$의 모든 원소 $x$에서 $c < x$인 것은 정확히 $c < \min A$일 때이다. 특히 $A$의 원소가 모두 양수이면 $\min A$는 양수이다.
:::

:::english
Finite sets and "has $n$ elements" are those of the entry on finite sets; upper and lower bounds, bounded above or below, the supremum $\sup$, the infimum $\inf$, the maximum $\max$ and the minimum $\min$ are those of the entry on upper bounds and suprema; the maximum $\max\{a, b\}$ and minimum $\min\{a, b\}$ of two numbers are those of the entry on absolute value. This maximum is the maximum of a set, and is different from the definition of a function attaining its maximum at a point.

Let $A$ be a nonempty finite subset of $\mathbb{R}$. The following hold.

1. (Existence of maximum and minimum) $A$ has a maximum and a minimum. Hence $A$ is bounded, $\sup A = \max A$, $\inf A = \min A$, and $\min A \le \max A$.
2. (One-element sets) For a real number $a$, $\max\{a\} = \min\{a\} = a$.
3. (Subsets) If $B$ is a nonempty subset of $A$, then $B$ is also a finite set and
   $$
   \min A \le \min B \le \max B \le \max A .
   $$
4. (Unions) If $B$ is also a nonempty finite subset of $\mathbb{R}$, then $A \cup B$ is a nonempty finite set and
   $$
   \max (A \cup B) = \max\{\max A, \max B\}, \qquad \min (A \cup B) = \min\{\min A, \min B\} .
   $$
   In particular, for a real number $y$, $\max (A \cup \{y\}) = \max\{\max A, y\}$ and $\min (A \cup \{y\}) = \min\{\min A, y\}$.
5. (Comparison with a constant) For a real number $c$: $x \le c$ for every element $x$ of $A$ exactly when $\max A \le c$, and $x < c$ for every element $x$ of $A$ exactly when $\max A < c$. Likewise, $c \le x$ for every element $x$ of $A$ exactly when $c \le \min A$, and $c < x$ for every element $x$ of $A$ exactly when $c < \min A$. In particular, if every element of $A$ is positive, then $\min A$ is positive.
:::

## 직관

학생이 한 명 이상 있는 교실이라면 가장 키가 큰 학생이 늘 있습니다. 한 명씩 차례로 들어오게 하면서 "지금까지 가장 큰 학생"만 기억해 두면 되기 때문입니다. 새로 들어온 학생이 기억한 학생보다 크면 기억을 바꾸고, 아니면 그대로 둡니다. 마지막 학생까지 들어오면 기억한 학생이 가장 큽니다. 이 "한 명씩 들어오게 하기"가 원소의 개수에 대한 귀납법이고, "기억과 새 학생 가운데 큰 쪽"이 두 수의 최대 $\max\{a, b\}$입니다. 비유와 다른 점은, 집합에서는 같은 수가 두 번 들어오지 않고 최댓값은 학생이 아니라 수라는 것입니다. 키가 같은 두 학생이 있어도 최댓값인 수는 하나입니다.

유한이라는 가정이 없으면 이 일은 끝나지 않을 수 있습니다. 해석학 입문의 상한은 집합에 속하지 않을 수 있었고, 아래 반례의 열린구간처럼 최댓값이 없는 집합도 있습니다. 공집합이 아닌 유한집합에서는 상한이 늘 집합 안에 있으므로((1)), 상한 대신 최댓값이라는 말을 씁니다.

(3)–(5)는 최댓값이 원소이면서 상계라는 정의에서 바로 나옵니다. 부분집합의 최댓값은 큰 집합의 원소이므로 큰 집합의 최댓값을 넘지 못하고, 합집합의 최댓값은 두 최댓값 가운데 큰 쪽입니다. 이 최댓값은 집합의 것입니다. [[extreme-value-theorem|최대·최소 정리]]의 "함수가 $c$에서 최댓값을 갖는다"는 함수에 대한 정의이고, 그 항목의 (1)이 둘을 함숫값의 집합으로 잇습니다.

## 증명

:::idea
$A$의 원소의 개수에 대한 귀납법으로 (1)을 보인다. 원소 하나를 빼낸 집합의 최댓값과 빼낸 원소 가운데 큰 쪽이 $A$의 최댓값이다. (3)–(5)는 최댓값의 정의(원소이면서 상계)를 그대로 쓴다.
:::

:::hint
$A$가 원소를 $n + 1$개 갖고 $n \ge 1$이면, 원소 $a$를 빼낸 $A - \{a\}$는 원소를 $n$개 갖는다([[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]). 그 최댓값 $M'$과 $a$를 비교한다.
:::

:::hint
(4)에서 $\max\{\max A, \max B\}$가 $A \cup B$의 원소이고 상계임을 보이면 된다.
:::

:::proof
[[order-properties-of-reals]]의 번호로 실수의 순서를 다루고, "상한 (2)"처럼 쓴 것은 [[upper-bound-and-supremum]]의 번호, "절댓값 (10)"은 [[absolute-value]]의 번호이다.

**공집합이 아닌 유한집합의 원소의 개수.** $A$가 공집합이 아닌 유한집합이면 어떤 정수 $n \ge 0$에서 $A$가 원소를 $n$개 갖는다. [[finite-set]]의 (F2)에 의해 원소를 $0$개 갖는 집합은 $\emptyset$뿐이므로 $n \ne 0$이고, [[well-ordering-principle]]의 (Z5)와 [[prime-number]]의 (Z1)에 의해 $n \ge 1$이다.

**1의 증명.** 자연수 $n$에 대한 명제 $S_n$을 "원소를 $n$개 갖는 $\mathbb{R}$의 부분집합은 모두 최댓값과 최솟값을 갖는다"로 두고 [[mathematical-induction]]을 쓴다. 위 문단에 의해 이것으로 (1)의 첫 문장이 증명된다.

기초 단계: $A$가 원소를 $1$개 가지면 전단사 $h : \{1\} \to A$가 있다([[finite-set]]의 정의와 (F1)). $a = h(1)$로 두면 $a \in A$이고, $A$의 원소 $x$에 대하여 $h$가 전사이므로 어떤 $i \in \{1\}$에서 $x = h(i) = h(1) = a$이다. 따라서 $A$의 모든 원소 $x$에서 [[order-properties-of-reals]]의 (1)의 (iv)에 의해 $x \le a$이고 $a \le x$이다. $a$는 $A$의 원소이면서 상계이고 하계이므로 최댓값이고 최솟값이다.

귀납 단계: 자연수 $n$에서 $S_n$이 참이라 하고, $A \subseteq \mathbb{R}$가 원소를 $n + 1$개 갖는다고 하자. 전단사 $g : \{1, \dots, n+1\} \to A$를 하나 잡고 $a = g(n+1)$로 두면 $a \in A$이다. [[adding-or-removing-an-element]]의 (b)에 의해 $A - \{a\}$는 원소를 $n$개 갖고, $A - \{a\} \subseteq \mathbb{R}$이므로 $S_n$에 의해 최댓값 $M'$과 최솟값 $m'$을 갖는다. $M = \max\{M', a\}$로 두자.

- 절댓값 (10)에 의해 $M$은 $M'$이거나 $a$이다. $M' \in A - \{a\} \subseteq A$이고 $a \in A$이므로 $M \in A$이다.
- $x \in A$라 하자. $x = a$이면 절댓값 (10)에 의해 $x = a \le M$이다. $x \ne a$이면 $x \in A - \{a\}$이므로 $x \le M'$이고, 절댓값 (10)에 의해 $M' \le M$이므로 [[order-properties-of-reals]]의 (1)의 (v)에 의해 $x \le M$이다.

따라서 $M$은 $A$의 원소이면서 상계이므로 $A$의 최댓값이다. 같은 방식으로 $\min\{m', a\}$는 절댓값 (10)에 의해 $m'$이거나 $a$이므로 $A$의 원소이고, $x = a$이면 $\min\{m', a\} \le a = x$, $x \ne a$이면 $\min\{m', a\} \le m' \le x$이므로 $A$의 하계이다. 따라서 $A$의 최솟값이다. 이로써 $S_{n+1}$이 참이다.

(1)의 나머지: 최댓값 $\max A$는 $A$의 상계이고 최솟값 $\min A$는 하계이므로 $A$는 위로 유계이고 아래로 유계, 곧 유계이다. 상한 (2)에 의해 $\sup A = \max A$이고 $\inf A = \min A$이다. $\max A \in A$이고 $\min A$는 하계이므로 $\min A \le \max A$이다.

**2의 증명.** $\{a\}$의 원소는 $a$뿐이고 $a \le a$이므로([[order-properties-of-reals]]의 (1)의 (iv)) $a$는 $\{a\}$의 원소이면서 상계이고 하계이다. 상한 (1)의 유일성에 의해 $\max\{a\} = \min\{a\} = a$이다. (이 기호는 [[absolute-value]]의 두 수의 최대 $\max\{a, b\}$에서 $b = a$로 둔 것과도 같다. 절댓값 (11)에 의해 그것도 집합 $\{a, a\} = \{a\}$의 최댓값이기 때문이다.)

**3의 증명.** $A$는 어떤 정수 $n \ge 0$에서 원소를 $n$개 가지므로 [[subset-of-finite-set]]의 (1)에 의해 $B$는 유한집합이다. $B$는 공집합이 아니므로 (1)에 의해 $\max B$, $\min B$가 있고, (1)에 의해 $\min B \le \max B$이다. $\max B \in B \subseteq A$이고 $\max A$는 $A$의 상계이므로 $\max B \le \max A$이다. $\min B \in A$이고 $\min A$는 $A$의 하계이므로 $\min A \le \min B$이다.

**4의 증명.** [[disjoint-union-count]]의 (3)에 의해 $A \cup B$는 유한집합이고, $A \subseteq A \cup B$이며 $A$가 공집합이 아니므로 $A \cup B$도 공집합이 아니다. $M = \max\{\max A, \max B\}$로 두자. 절댓값 (10)에 의해 $M$은 $\max A$이거나 $\max B$이므로 $M \in A \cup B$이다. $x \in A \cup B$이면 $x \in A$이거나 $x \in B$이다. $x \in A$이면 $x \le \max A$이고 절댓값 (10)에 의해 $\max A \le M$이므로 $x \le M$이다. $x \in B$이면 같은 방식으로 $x \le \max B \le M$이다. 따라서 $M$은 $A \cup B$의 원소이면서 상계이므로 상한 (1)에 의해 $\max(A \cup B) = M$이다. 최솟값도 같다: $\min\{\min A, \min B\}$는 절댓값 (10)에 의해 $\min A$이거나 $\min B$이므로 $A \cup B$의 원소이고, $x \in A$이면 $\min\{\min A, \min B\} \le \min A \le x$, $x \in B$이면 $\min\{\min A, \min B\} \le \min B \le x$이므로 하계이다.

$\{y\}$는 공집합이 아니고 원소를 $1$개 가지므로 유한집합이다($\{1\}$에서 $\{y\}$로 $1$을 $y$로 보내는 함수는 전단사). (2)에 의해 $\max\{y\} = \min\{y\} = y$이므로 둘째 문장은 첫 문장을 $B = \{y\}$에 쓴 것이다.

**5의 증명.** $A$의 모든 원소 $x$에서 $x \le c$이면 $\max A \in A$이므로 $\max A \le c$이다. 거꾸로 $\max A \le c$이면 $A$의 모든 원소 $x$에서 $x \le \max A$이므로 [[order-properties-of-reals]]의 (1)의 (v)에 의해 $x \le c$이다. $<$의 경우도 같다: 모든 $x$에서 $x < c$이면 $\max A < c$이고, $\max A < c$이면 $x \le \max A$와 (1)의 (v)의 섞인 추이성에 의해 $x < c$이다. 최솟값에 대한 두 문장도 $\min A \in A$이고 $\min A$가 하계라는 것으로 같은 방식으로 증명된다. 마지막 문장은 $c = 0$으로 둔 것이다. $\blacksquare$
:::

## 예시와 반례

:::example[원소가 셋인 집합]
$A = \{-2, 5, 0\}$에서 $5 \in A$이고 $-2 \le 5$, $5 \le 5$, $0 \le 5$이므로 $5$는 $A$의 원소이면서 상계입니다. 곧 $\max A = 5$입니다. 같은 방식으로 $-2$는 원소이면서 하계이므로 $\min A = -2$입니다. 증명의 귀납 단계를 따라가 보면, $a = 0$을 빼낸 $\{-2, 5\}$의 최댓값은 [[absolute-value]]의 (11)에 의해 $\max\{-2, 5\} = 5$이고, $A$의 최댓값은 $\max\{5, 0\} = 5$입니다.

(4)를 $B = \{4, -3\}$에 쓰면 $\max(A \cup B) = \max\{5, 4\} = 5$이고 $\min(A \cup B) = \min\{-2, -3\} = -3$입니다. 실제로 $A \cup B = \{-3, -2, 0, 4, 5\}$의 가장 작은 원소는 $-3$입니다.
:::

:::counterexample[유한이 아닌 집합]
유한이라는 가정을 빼면 (1)이 깨질 수 있습니다. [[interval|열린구간]] $(0, 1)$은 공집합이 아니지만(같은 항목의 (3)에 의해 $\frac{0 + 1}{2}$이 원소입니다) 최댓값이 없습니다. $M$이 최댓값이라면 $M \in (0, 1)$이므로 $0 < M < 1$이고, [[order-properties-of-reals]]의 (8)에 의해 $M < \frac{M + 1}{2} < 1$입니다. 같은 항목의 (1)의 (v)에 의해 $0 < \frac{M + 1}{2}$이기도 하므로 $\frac{M + 1}{2}$은 $(0, 1)$의 원소인데 $M$보다 큽니다. 이는 $M$이 상계라는 데 어긋납니다([[order-properties-of-reals]]의 (1)의 (i)). 거꾸로 읽으면, 공집합이 아니고 최댓값이 없으므로 이 항목의 (1)에 의해 $(0, 1)$은 유한집합이 아닙니다.
:::

## 확인 질문

:::check[공집합이 아니라는 가정을 빼면 (1)은 어떻게 되는가?]
공집합 $\emptyset$은 원소를 $0$개 갖는 유한집합이지만 최댓값이 없습니다. 최댓값은 집합의 원소여야 하는데 $\emptyset$에는 원소가 없기 때문입니다. [[upper-bound-and-supremum|상계와 상한]]의 (5)에 의해 $\emptyset$은 유계이지만 상한도 갖지 않습니다.
:::

:::check[$A \subseteq \mathbb{R}$가 공집합이 아닌 유한집합이고 원소가 모두 양수일 때, $A$의 어느 원소보다도 작은 양수가 있는가?]
있습니다. (5)에 의해 $c = \min A$는 양수이고, [[order-properties-of-reals]]의 (8)에 의해 $0 < \frac{c}{2} < c$입니다. $A$의 모든 원소 $x$에서 $c \le x$이므로 [[order-properties-of-reals]]의 (1)의 (v)에 의해 $\frac{c}{2} < x$입니다.
:::
