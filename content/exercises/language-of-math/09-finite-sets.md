---
written_by: Claude
status: reviewed
sources:
  - ref: hammack-book-of-proof
    loc: "1.4절, Fact 1.4 (p.15)와 Example 1.7의 2 (p.16)"
  - ref: hammack-book-of-proof
    loc: "3.9절, Fact 3.10의 둘째 문장 (p.104). 12.3절, The Pigeonhole Principle (function version)의 2 (p.233)"
  - ref: hammack-book-of-proof
    loc: "3.3절, Fact 3.2 (p.74). 3.7절, Fact 3.6과 그 뒤의 문단 (p.93)"
added: 2026-11-26
---

:::exercise[원소가 둘인 집합의 멱집합]
$S = \{\text{가}, \text{나}\}$(가와 나는 서로 다른 대상)라 하자.

1. $\mathscr{P}(S)$가 원소를 $4$개 갖는다는 것을 전단사를 써서 보여라.
2. $\mathscr{P}(S)$에서 $\{1, 2, 3\}$으로의 전단사가 있는가?
3. $S$에서 $\mathscr{P}(S)$로의 단사와 전단사가 있는지를 원소의 개수로 판단하라.
:::

:::solution
**(1)** 먼저 $\mathscr{P}(S) = \{\emptyset, \{\text{가}\}, \{\text{나}\}, S\}$임을 보인다. [[power-set|멱집합]]의 정의에 의해 $\mathscr{P}(S)$는 $S$의 부분집합 전체이다. 네 집합은 모두 $S$의 부분집합이다($\emptyset$은 [[empty-set-is-subset|공집합은 부분집합이라는 정리]]에 의해, 나머지는 원소가 모두 $S$의 원소이므로). 거꾸로 $X \subseteq S$라 하자. $X$의 원소는 가 또는 나이다. 가 $\in X$인지와 나 $\in X$인지에 따라 네 경우가 있고, 둘 다 아니면 $X = \emptyset$, 가만 속하면 $X = \{\text{가}\}$, 나만 속하면 $X = \{\text{나}\}$, 둘 다 속하면 $X = S$이다.

다음으로 [[finite-set|유한집합과 원소의 개수]]의 (F1)을 네 번 쓰면 $\{1, \dots, 0\} = \emptyset$에서 차례로 $\{1, \dots, 1\} = \{1\}$, $\{1, \dots, 2\} = \{1, 2\}$, $\{1, \dots, 3\} = \{1, 2, 3\}$, $\{1, \dots, 4\} = \{1, 2, 3, 4\}$이다. $h = \{(1, \emptyset), (2, \{\text{가}\}), (3, \{\text{나}\}), (4, S)\}$로 두면 $1, 2, 3, 4$가 각각 첫째 성분으로 한 번씩 나오고 값이 $\mathscr{P}(S)$의 원소이므로 $h : \{1, \dots, 4\} \to \mathscr{P}(S)$는 [[function]]이다.

네 값은 서로 다르다. $\emptyset$은 원소가 없고 나머지 셋은 원소가 있다. 가 $\in \{\text{가}\}$이지만 가 $\ne$ 나이므로 가 $\notin \{\text{나}\}$이고, 따라서 $\{\text{가}\} \ne \{\text{나}\}$이다. 나 $\in S$이지만 나 $\notin \{\text{가}\}$이므로 $\{\text{가}\} \ne S$이고, 가 $\in S$이지만 가 $\notin \{\text{나}\}$이므로 $\{\text{나}\} \ne S$이다. 따라서 [[injective-surjective-bijective|단사, 전사, 전단사]]의 1에 의해 $h$는 단사이다. 위에서 $\mathscr{P}(S)$의 원소는 네 집합 가운데 하나이므로 $h : \{1, \dots, 4\} \to \mathscr{P}(S)$는 전사이다. 따라서 $h$는 전단사이고 $\mathscr{P}(S)$는 원소를 $4$개 갖는다. [[number-of-elements-is-unique|원소의 개수는 하나로 정해진다]]에 의해 $|\mathscr{P}(S)| = 4$이다.

**(2)** 없다. 위에서 $\{1, 2, 3\} = \{1, \dots, 3\}$이므로 [[finite-set|유한집합과 원소의 개수]]의 (F2)에 의해 원소를 $3$개 갖는다. $4 \ne 3$이므로 원소의 개수는 하나로 정해진다의 2에 의해 $\mathscr{P}(S)$에서 $\{1, 2, 3\}$으로의 전단사는 없다.

**(3)** $\{(1, \text{가}), (2, \text{나})\}$는 $\{1, \dots, 2\} = \{1, 2\}$에서 $S$로의 전단사이므로 $S$는 원소를 $2$개 갖는다. $2 < 4$이므로 원소의 개수는 하나로 정해진다의 3에 의해 $S$에서 $\mathscr{P}(S)$로의 단사는 있지만 전단사는 없다. 이 결론은 [[cantors-theorem|칸토어 정리]]가 모든 집합에 대해 말하는 $|S| < |\mathscr{P}(S)|$와 같은 내용이다.
:::

:::exercise[원소 하나를 바꾸기]
$A$가 원소를 $n$개 갖는 집합이고($n \ge 0$인 정수) $a \in A$, $b \notin A$라 하자. $(A - \{a\}) \cup \{b\}$가 원소를 $n$개 갖는다는 것을 증명하라.
:::

:::solution
먼저 $n \ne 0$이다. $n = 0$이면 [[finite-set|유한집합과 원소의 개수]]의 (F2)에 의해 $A = \emptyset$인데 $a \in A$이므로 어긋난다. [[well-ordering-principle|정렬 원리]]의 진술에서 $0 \le n$은 "$0 < n$ 또는 $0 = n$"이므로 $0 < n$이다. [[prime-number|소수]]의 진술의 (Z1)에 의해 $1 \le n$이고, 양변에서 $1$을 빼면 정렬 원리의 진술의 (Z7)에 의해 $0 \le n - 1$이다. $p = n - 1$로 두면 [[even-and-odd|짝수와 홀수]]에서 받아들인 사실에 의해 $p$는 정수이고 $p \ge 0$, $p + 1 = n$이다.

$A$는 원소를 $p + 1$개 갖고 $a \in A$이므로 [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (b)에 의해 $A - \{a\}$는 원소를 $p$개 갖는다. $b \notin A$이고 $A - \{a\} \subseteq A$이므로 $b \notin A - \{a\}$이다. 같은 항목의 (a)에 의해 $(A - \{a\}) \cup \{b\}$는 원소를 $p + 1 = n$개 갖는다.

$b \notin A$라는 가정은 (a)를 쓰는 곳에서 쓰였다. $b \in A$이고 $b \ne a$이면 $(A - \{a\}) \cup \{b\} = A - \{a\}$가 되어 원소를 $n - 1$개 갖는다.
:::

:::exercise[개수가 더 많은 집합에 남는 원소]
$A$와 $B$가 유한집합이고 $|A| < |B|$이면, $b \in B$이고 $b \notin A$인 원소 $b$가 있음을 증명하라. 여기서 $|A|$, $|B|$는 원소의 개수이다.
:::

:::solution
[[proof-by-contradiction|귀류법]]으로, 그런 $b$가 없다고 가정한다. 그러면 $B$의 모든 원소가 $A$의 원소이므로 $B \subseteq A$이다. $A$는 원소를 $|A|$개 갖는다([[number-of-elements-is-unique|원소의 개수는 하나로 정해진다]]의 표기). [[subset-of-finite-set|유한집합의 부분집합]]의 1을 원소를 $|A|$개 갖는 집합 $A$와 그 부분집합 $B$에 쓰면 $|B| \le |A|$이다. 이것과 $|A| < |B|$는 [[well-ordering-principle|정렬 원리]]의 진술의 (L1)에 의해 함께 성립할 수 없다. 모순이므로 $b \in B$이고 $b \notin A$인 $b$가 있다.

$|A| < |B|$를 $|A| \le |B|$로 약하게 하면 결론이 깨질 수 있다. $A = B$이면 $|A| \le |B|$이지만 $B$의 원소는 모두 $A$에 속한다.
:::

:::exercise[전사와 원소의 개수]
$A$가 원소를 $m$개, $B$가 원소를 $n$개 갖고($m, n \ge 0$인 정수) $f : A \to B$가 전사이면 $n \le m$임을 증명하라. 원소마다 하나씩 원상을 "고르는" 대신, 정렬 원리로 원상을 하나 정하는 방법을 써라.
:::

:::solution
$A$가 원소를 $m$개 가지므로 전단사 $h : \{1, \dots, m\} \to A$가 있다([[finite-set|유한집합과 원소의 개수]]).

**원상을 하나로 정하기.** $b \in B$에 대하여 $S_b = \{i \in \{1, \dots, m\} : f(h(i)) = b\}$로 둔다.

- $S_b \subseteq \mathbb{N}$이다. $i \in \{1, \dots, m\}$이면 $1 \le i$이고, [[well-ordering-principle|정렬 원리]]의 진술의 (Z8) $0 < 1$과 (Z6)에 의해 $0 < i$이므로 $i$는 양의 정수, 곧 자연수이다.
- $S_b \ne \emptyset$이다. $f : A \to B$가 전사이므로 $f(a) = b$인 $a \in A$가 있고, $h$가 전사이므로 $h(i) = a$인 $i \in \{1, \dots, m\}$이 있다. 그러면 $f(h(i)) = b$이므로 $i \in S_b$이다.

정렬 원리의 2에 의해 $S_b$는 최소 원소를 갖고, 같은 진술의 1에 의해 최소 원소는 하나뿐이다. 그것을 $k(b)$라 하면 $k(b) \in S_b$이므로 $f(h(k(b))) = b$이다.

**단사 $g : B \to A$.** $g = \{(b, h(k(b))) : b \in B\}$로 둔다. $h(k(b)) \in A$이므로 $g \subseteq B \times A$이고, 각 $b \in B$에 대하여 첫째 성분이 $b$인 순서쌍은 $(b, h(k(b)))$ 하나이다($k(b)$가 $b$에서 하나로 정해지기 때문이다). 따라서 $g : B \to A$는 [[function]]이고 $g(b) = h(k(b))$이며, 위에서 모든 $b \in B$에 대하여 $f(g(b)) = b$이다. $b, b' \in B$이고 $g(b) = g(b')$이면 $b = f(g(b)) = f(g(b')) = b'$이므로 [[injective-surjective-bijective|단사, 전사, 전단사]]의 단사의 동치 꼴에 의해 $g$는 단사이다.

**결론.** $B$는 원소를 $n$개, $A$는 원소를 $m$개 갖고 단사 $g : B \to A$가 있으므로 [[pigeonhole-principle|비둘기집 원리]]의 2의 마지막 문장에 의해 $n \le m$이다.

$m < n$이면 이 결론과 정렬 원리의 진술의 (L1)에 의해 $A$에서 $B$로의 전사는 없다. $B = \emptyset$이면 $g = \emptyset$이고 위의 논증은 공허하게 성립하며 $0 \le m$을 준다.
:::

:::exercise[서로소인 두 유한집합의 합집합]
$A$가 원소를 $m$개, $B$가 원소를 $n$개 갖고($m, n \ge 0$인 정수) $A \cap B = \emptyset$이면 $A \cup B$는 원소를 $m + n$개 가짐을 증명하라. 곧 $|A \cup B| = |A| + |B|$이다.
:::

:::solution
$A$와 $m$을 고정한다. 정수 $n \ge 0$에 대하여 명제 $T_n$을 "원소를 $n$개 갖고 $A \cap B = \emptyset$인 모든 집합 $B$에 대하여 $A \cup B$는 원소를 $m + n$개 갖는다"로 정하고, 시작점이 $0$인 [[mathematical-induction|수학적 귀납법]]으로 모든 정수 $n \ge 0$에서 $T_n$을 보인다. 합집합, 교집합, 차집합은 [[set-operations|집합의 연산]]의 정의대로 쓴다.

**기초 단계 ($T_0$).** $B$가 원소를 $0$개 가지면 [[finite-set|유한집합과 원소의 개수]]의 (F2)에 의해 $B = \emptyset$이다. $x \in A \cup \emptyset$인 것은 $x \in A$ 또는 $x \in \emptyset$일 때이고 $x \in \emptyset$인 $x$는 없으므로, $A \cup B = A$이다. $A$는 원소를 $m = m + 0$개 갖는다.

**귀납 단계.** $k \ge 0$인 정수 $k$에 대하여 $T_k$가 참이라고 가정한다. $B$가 원소를 $k + 1$개 갖고 $A \cap B = \emptyset$이라 하자. 전단사 $h : \{1, \dots, k+1\} \to B$가 있고, (F1)에 의해 $\{1, \dots, k+1\} = \{1, \dots, k\} \cup \{k+1\}$이므로 $k + 1 \in \{1, \dots, k+1\}$이다. $b = h(k+1)$로 두면 $b \in B$이다.

- [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (b)에 의해 $B' = B - \{b\}$는 원소를 $k$개 갖는다.
- $A \cap B' = \emptyset$이다. $x \in A \cap B'$이면 $x \in A$이고 $x \in B' \subseteq B$이므로 $x \in A \cap B = \emptyset$이 되어 불가능하다.
- 귀납 가정 $T_k$를 $B'$에 쓰면 $A \cup B'$는 원소를 $m + k$개 갖는다.
- $b \notin A \cup B'$이다. $b \in A$이면 $b \in B$와 함께 $b \in A \cap B = \emptyset$이 되어 불가능하고, 차집합의 정의에 의해 $b \notin B'$이다.
- 같은 항목의 (a)에 의해 $(A \cup B') \cup \{b\}$는 원소를 $(m + k) + 1 = m + (k + 1)$개 갖는다.

마지막으로 $(A \cup B') \cup \{b\} = A \cup B$이다. 왼쪽의 원소는 $A$에 속하거나, $B' \subseteq B$에 속하거나, $b \in B$이므로 $A \cup B$에 속한다. 오른쪽의 원소 $x$가 $A$에 속하면 왼쪽에 속하고, $B$에 속하면 $x = b$이거나 $x \in B - \{b\} = B'$이므로 왼쪽에 속한다. 따라서 $A \cup B$는 원소를 $m + (k + 1)$개 갖고 $T_{k+1}$이 참이다.

귀납법의 원리에 의해 모든 $n \ge 0$에서 $T_n$이 참이다. [[number-of-elements-is-unique|원소의 개수는 하나로 정해진다]]의 표기로 $|A \cup B| = m + n = |A| + |B|$이다.

$A \cap B = \emptyset$이라는 가정은 귀납 단계에서 두 번, $A \cap B' = \emptyset$과 $b \notin A$를 보일 때 쓰였다.
:::

:::exercise[무한집합 안의 n개짜리 부분집합]
$A$가 무한집합이면, 모든 정수 $n \ge 0$에 대하여 원소를 $n$개 갖는 $A$의 부분집합이 있음을 증명하라.
:::

:::solution
정수 $n \ge 0$에 대하여 명제 $T_n$을 "원소를 $n$개 갖는 $A$의 부분집합이 있다"로 정하고, 시작점이 $0$인 [[mathematical-induction|수학적 귀납법]]을 쓴다.

**기초 단계.** [[empty-set-is-subset|공집합은 부분집합이라는 정리]]에 의해 $\emptyset \subseteq A$이고, [[finite-set|유한집합과 원소의 개수]]의 (F2)에 의해 $\emptyset$은 원소를 $0$개 갖는다.

**귀납 단계.** $k \ge 0$이고 $T_k$가 참이라 하자. 원소를 $k$개 갖는 부분집합 $S \subseteq A$가 있다. $x \in A$이고 $x \notin S$인 $x$가 있음을 [[proof-by-contradiction|귀류법]]으로 보인다. 그런 $x$가 없다면 $A$의 모든 원소가 $S$에 속하므로 $A \subseteq S$이다. $S$는 원소를 $k$개 가지므로 [[subset-of-finite-set|유한집합의 부분집합]]의 1에 의해 $A$는 유한집합이다. 이는 $A$가 무한집합이라는 가정에 어긋난다.

그런 $x$를 하나 잡으면 $x \notin S$이므로 [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (a)에 의해 $S \cup \{x\}$는 원소를 $k + 1$개 갖는다. $S \subseteq A$이고 $x \in A$이므로 $S \cup \{x\} \subseteq A$이다. 따라서 $T_{k+1}$이 참이다.

귀납법의 원리에 의해 모든 $n \ge 0$에서 $T_n$이 참이다.

이 문제는 각 $n$마다 그런 부분집합이 **있다**는 것만 보인다. 귀납 단계에서 잡는 $x$는 하나의 존재 명제에서 원소 하나를 잡는 것이다. $n$마다 얻은 부분집합들을 이어 붙여 $\mathbb{N}$에서 $A$로의 단사를 만드는 일은 이 문제가 하지 않는다.
:::

:::exercise[서로소가 아닌 두 집합의 합집합]
$A = \{1, 2\}$, $B = \{2, 3\}$일 때, $A$와 $B$는 원소를 $2$개씩 갖지만 $A \cup B$는 원소를 $2 + 2 = 4$개 갖지 않음을 보여라.
:::

:::solution
[[finite-set|유한집합과 원소의 개수]]의 (F1)에 의해 $\{1, \dots, 2\} = \{1, 2\}$이고 $\{1, \dots, 3\} = \{1, 2, 3\}$이다. (F2)에 의해 $A = \{1, \dots, 2\}$는 원소를 $2$개 갖는다. $\{(1, 2), (2, 3)\}$은 $\{1, 2\}$에서 $B$로의 함수이고, 값 $2, 3$이 서로 다르며 $B$의 원소가 모두 값으로 나오므로 전단사이다. 따라서 $B$도 원소를 $2$개 갖는다.

[[set-operations|합집합]]의 정의에 의해 $A \cup B$의 원소는 $1, 2, 3$이고, 곧 $A \cup B = \{1, 2, 3\} = \{1, \dots, 3\}$이다. (F2)에 의해 $A \cup B$는 원소를 $3$개 갖는다. $3 \ne 4$이므로 [[number-of-elements-is-unique|원소의 개수는 하나로 정해진다]]의 1에 의해 $A \cup B$는 원소를 $4$개 갖지 않는다.

여기서 $A \cap B = \{2\} \ne \emptyset$이다. 두 집합에 함께 속하는 $2$가 $A$와 $B$의 개수에서 한 번씩 세어졌지만 $A \cup B$에서는 한 번만 세어진다.
:::
