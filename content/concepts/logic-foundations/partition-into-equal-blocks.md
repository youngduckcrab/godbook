---
title: 크기가 같은 조각으로 나눈 유한집합
title_en: A Finite Set Partitioned into Blocks of Equal Size
aliases: [분할의 조각의 개수, 같은 크기의 조각, 유한집합의 분할, partition into blocks of equal size, number of blocks of a partition]
kind: theorem
field: logic-foundations
msc: ["03E10"]
level: intro
summary: 유한집합의 분할은 유한집합이고 조각의 개수는 원소의 개수 이하이다. 모든 조각이 원소를 m개 가지면 원소의 개수는 조각의 개수와 m의 곱이고, 따라서 m으로 나누어떨어진다.
requires: [set, subset, set-operations, partition, strong-induction, finite-set, adding-or-removing-an-element, number-of-elements-is-unique, subset-of-finite-set, disjoint-union-count, divisibility, prime-number, even-and-odd, well-ordering-principle]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 6.2절, Theorem 6.10 의 증명, p.76
    checked: original
    note: "출처는 라그랑주 정리(Theorem 6.10)의 증명에서 '군 G 는 [G : H] 개의 서로 다른 왼쪽 잉여류로 분할되고 각 왼쪽 잉여류는 원소가 |H| 개이므로 |G| = [G : H]|H|'라고 쓴다. 이 항목의 (3)은 그 '이므로'에 해당하는 사실을 집합의 분할에 대해 진술하고 증명한 것이다. 출처는 이것을 따로 진술하지 않고, 분할이 유한하다는 것((2))도 말하지 않는다(검색어 'partitioned into' 2건(Theorem 6.10 의 증명, 14장의 정수의 분할), 'disjoint union' 1건(Theorem 6.4), 'number of elements in' 7건, 'same number of elements' 3건(5장의 치환의 홀짝, 정육면체의 대칭, 9장 Example 9.5), 'same size' 1건, 'equal size' 0건, 'number of blocks' 0건). 출처 1.2절(p.12)의 분할의 정의는 첨수가 붙은 합집합으로 쓰여 있고, 이 사이트는 수학의 언어의 분할 항목을 쓴다. 증명(원소의 개수에 대한 강한 귀납법, 조각 하나를 떼어 내기)은 출처에 없다. 예시, 반례, 확인 질문은 출처의 잉여류 예(Example 6.1, 6.2, p.74–75)를 쓰지 않았고, 출처 1.2절의 분할의 예(p.12–13: 분수, 도함수가 같은 함수, 원점 중심의 원, 법 3 의 합동)와도 다르다."
  - ref: hammack-book-of-proof
    loc: 3.3절, Fact 3.2(p.74). 11.4절, Definition 11.5(p.216)
    checked: original
    note: "출처 Fact 3.2(덧셈 원리)는 유한집합이 서로소인 조각 X₁, …, Xₙ 의 합집합이면 크기가 조각들의 크기의 합이라는 말이고 증명하지 않는다. (3)은 조각이 모두 원소를 m 개 갖는 경우에 해당하지만, 출처는 그 경우를 따로 진술하지 않는다(검색어 'same size' 1건(14장), 'equal size' 0건, 'each of size' 0건, 'division principle' 11건(Fact 3.9, 상자에 넣는 비둘기집 원리의 꼴)). 출처 Definition 11.5(p.216)는 분할을 공집합이 아닌 부분집합들의 집합으로 정의하고, 이 사이트의 분할 항목이 그것을 근거로 한다. 분할이 유한집합이라는 (2)와 조각 하나를 떼는 (1)은 출처에 없다(검색어 'partition' 으로 찾은 11.4절 본문(p.215–217)과 연습문제 1–6(p.217)을 읽었다. 'number of blocks', 'number of parts' 0건). 반례 '조각의 크기가 다른 분할'의 분할 {{1}, {2, 3}} 은 출처 11.4절 연습문제 2(p.217, {a, b, c} 의 분할을 모두 나열하기)의 답 가운데 하나와 같은 꼴이고, 둘째 확인 질문의 한원소 집합들로 된 분할은 출처 Example 11.14(p.216)가 든 분할 {{a}, {b}, {c}, {d}} 와 같은 꼴이다. 출처는 그 분할들의 조각을 세지 않는다. 예시(열두 개를 넷씩)와 반례 '겹치는 부분집합', 첫째 확인 질문은 출처에서 찾지 못했다(검색어 'not a partition' 0건, 'divisible by 3' 0건)."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 경계 경우에서 거짓이 되는 문장과 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$A$가 [[set|집합]]이고 $\mathcal{S}$가 $A$의 [[partition|분할]]이라 하자. $\mathcal{S}$의 원소(공집합이 아닌 $A$의 부분집합)를 분할의 **조각**(block)이라 부른다. 유한집합은 [[finite-set]]의 뜻이고, 원소의 개수 $|A|$는 [[number-of-elements-is-unique]]의 뜻이다. $\mathcal{S}$가 유한집합이면 $|\mathcal{S}|$는 조각의 개수이다. 다음이 성립한다.

1. (조각 하나 떼기) $X_0 \in \mathcal{S}$이면 $\mathcal{S} - \{X_0\}$은 $A - X_0$의 분할이다.
2. (유한집합의 분할) $A$가 유한집합이면 $\mathcal{S}$의 모든 조각은 유한집합이고, $\mathcal{S}$는 유한집합이며 $|\mathcal{S}| \le |A|$이다.
3. (크기가 같은 조각) $A$가 유한집합이고 $m$이 자연수이며 $\mathcal{S}$의 모든 조각이 원소를 $m$개 가지면 $|A| = |\mathcal{S}| \cdot m$이다.
4. (나누어떨어짐) (3)의 가정 아래 $m \mid |A|$이다([[divisibility|나누어떨어짐]]).

$A = \emptyset$이면 [[partition|분할]]의 진술에 의해 $\mathcal{S} = \emptyset$이고, (2)–(4)는 $0 \le 0$, $0 = 0 \cdot m$, $m \mid 0$이 된다. 증명에서 정수의 계산과 부등식에 관하여 [[prime-number]]의 (Z1), [[well-ordering-principle]]의 진술에서 받아들인 계산 법칙과 (Z5)–(Z7), 그로부터 증명된 (L1)을 쓰고, 정수끼리의 합과 차가 정수라는 것은 [[even-and-odd]]에서 받아들인 사실을 쓴다.
:::

:::english
Let $A$ be a set and $\mathcal{S}$ a partition of $A$. The elements of $\mathcal{S}$ (nonempty subsets of $A$) are called the **blocks** of the partition. Finite sets are in the sense of the entry on finite sets, and the number of elements $|A|$ is in the sense of the entry on the uniqueness of the number of elements. If $\mathcal{S}$ is a finite set, then $|\mathcal{S}|$ is the number of blocks. Then the following hold.

1. (Removing one block) If $X_0 \in \mathcal{S}$, then $\mathcal{S} - \{X_0\}$ is a partition of $A - X_0$.
2. (Partitions of finite sets) If $A$ is a finite set, then every block of $\mathcal{S}$ is a finite set, and $\mathcal{S}$ is a finite set with $|\mathcal{S}| \le |A|$.
3. (Blocks of equal size) If $A$ is a finite set, $m$ is a natural number and every block of $\mathcal{S}$ has $m$ elements, then $|A| = |\mathcal{S}| \cdot m$.
4. (Divisibility) Under the hypotheses of (3), $m \mid |A|$.

If $A = \emptyset$, then $\mathcal{S} = \emptyset$ by the entry on partitions, and (2)–(4) become $0 \le 0$, $0 = 0 \cdot m$ and $m \mid 0$. In the proof we use (Z1) of the entry on prime numbers, the accepted laws of integer arithmetic, (Z5)–(Z7) and the derived fact (L1) from the entry on the well-ordering principle, and the accepted fact that sums and differences of integers are integers.
:::

## 직관

달걀을 한 판에 $m$개씩 빈틈없이 담았다면 달걀의 수는 판의 수에 $m$을 곱한 것입니다. 비유의 각 부분은 분할의 조건에 맞습니다. 달걀 하나하나가 $A$의 원소이고, 판 하나가 조각입니다. 모든 달걀이 어떤 판에 들어 있고(조건 2), 한 달걀이 두 판에 동시에 들어 있지 않으며(조건 3), 빈 판은 없습니다(조건 1). (3)은 이 셈을 원소의 개수의 정의로 증명합니다.

이 항목에서 먼저 증명해야 하는 것은 판의 수가 정해진다는 것, 곧 $\mathcal{S}$가 유한집합이라는 것입니다((2)). $\mathcal{S}$는 $A$의 부분집합들을 원소로 하는 집합이고, 그것이 유한집합인지는 정의에서 바로 보이지 않습니다. 조각의 개수에 대한 귀납법은 $\mathcal{S}$가 유한집합임을 먼저 알아야 쓸 수 있으므로, 대신 $|A|$에 대한 귀납법을 씁니다. 조각 하나를 떼면 $A$의 원소가 조각의 크기만큼 줄어들고, 그 크기는 $1$이 아닐 수 있으므로 [[strong-induction|강한 귀납법]]을 씁니다.

## 증명

:::idea
(1)은 분할의 세 조건을 하나씩 확인한다. (2)와 (3)은 $|A|$에 대한 강한 귀납법으로 함께 증명한다. $A$의 원소 하나가 속한 조각 $X_0$을 떼면 (1)에 의해 남은 조각들이 $A - X_0$의 분할이 되고, $A - X_0$은 원소가 더 적으므로 귀납 가정을 쓸 수 있다.
:::

:::hint
(1)에서 $X \in \mathcal{S}$이고 $X \ne X_0$이면 $X \cap X_0 = \emptyset$이므로 $X \subseteq A - X_0$입니다.
:::

:::hint
$X_0$은 공집합이 아니므로 $|X_0| \ge 1$이고, [[disjoint-union-count|서로소인 합집합의 원소의 개수]]의 (2)에 의해 $|A - X_0| = |A| - |X_0| \le |A| - 1$입니다. $\mathcal{S}$는 $(\mathcal{S} - \{X_0\}) \cup \{X_0\}$입니다.
:::

:::proof
아래에서 분할의 조건 1, 2, 3은 [[partition|분할]]의 진술의 세 조건이다.

**(1)의 증명.** $X_0 \in \mathcal{S}$라 하고 $\mathcal{S}' = \mathcal{S} - \{X_0\}$, $A' = A - X_0$으로 둔다. $\mathcal{S}'$이 $A'$의 분할의 세 조건을 만족함을 보인다.

조건 1: $X \in \mathcal{S}'$이라 하자. 그러면 $X \in \mathcal{S}$이고 $X \ne X_0$이다. $\mathcal{S}$의 조건 1에 의해 $X$는 $A$의 공집합이 아닌 부분집합이고, 조건 3에 의해 $X \cap X_0 = \emptyset$이다. 따라서 $x \in X$이면 $x \in A$이고 $x \notin X_0$이어서 $x \in A'$이다. 곧 $X$는 $A'$의 공집합이 아닌 부분집합이다.

조건 2: $x \in A'$이라 하자. $x \in A$이므로 $\mathcal{S}$의 조건 2에 의해 $x \in X$인 $X \in \mathcal{S}$가 있다. $x \notin X_0$이므로 $X \ne X_0$이고, $X \in \mathcal{S}'$이다.

조건 3: $X, Y \in \mathcal{S}'$이고 $X \ne Y$이면 $X, Y \in \mathcal{S}$이므로 $\mathcal{S}$의 조건 3에 의해 $X \cap Y = \emptyset$이다.

따라서 $\mathcal{S}'$은 $A'$의 분할이다.

**(2)와 (3)의 증명.** $A$가 유한집합이면 조건 1에 의해 $\mathcal{S}$의 모든 조각은 $A$의 부분집합이므로, [[subset-of-finite-set|유한집합의 부분집합]]의 1에 의해 유한집합이다. 나머지를 보이기 위해 정수 $n \ge 0$에 대하여 명제 $S_n$을 다음으로 정한다.

> 원소를 $n$개 갖는 모든 집합 $A$와 $A$의 모든 분할 $\mathcal{S}$에 대하여, (가) $\mathcal{S}$는 유한집합이고 $|\mathcal{S}| \le n$이며, (나) 모든 자연수 $m$에 대하여 $\mathcal{S}$의 모든 조각이 원소를 $m$개 가지면 $n = |\mathcal{S}| \cdot m$이다.

시작점이 $0$이고 기초 단계가 하나인 [[strong-induction|강한 귀납법]]으로 모든 정수 $n \ge 0$에서 $S_n$이 참임을 보인다.

*기초 단계 ($S_0$).* $A$가 원소를 $0$개 가지면 [[finite-set]]의 (F2)에 의해 $A = \emptyset$이고, [[partition|분할]]의 진술의 끝 문장에 의해 $\mathcal{S} = \emptyset$이다. (F2)에 의해 $\emptyset$은 원소를 $0$개 가지므로 $\mathcal{S}$는 유한집합이고 $|\mathcal{S}| = 0 \le 0$이다. (나)는 $0 = 0 \cdot m$이므로 성립한다.

*귀납 단계.* $k \ge 0$인 정수 $k$에 대하여 $S_0, S_1, \dots, S_k$가 모두 참이라고 가정한다. $A$가 원소를 $k + 1$개 갖고 $\mathcal{S}$가 $A$의 분할이라 하자. 전단사 $g : \{1, \dots, k+1\} \to A$를 하나 잡으면, (F1)에 의해 $k + 1 \in \{1, \dots, k+1\}$이므로 $a = g(k+1)$은 $A$의 원소이다. 분할의 조건 2에 의해 $a \in X_0$인 $X_0 \in \mathcal{S}$가 있다. 그런 $X_0$을 하나 잡는다.

$X_0$은 앞에서 본 대로 유한집합이다. $p = |X_0|$이라 하자. 조건 1에 의해 $X_0 \ne \emptyset$이므로 (F2)에 의해 $p \ne 0$이고, $p \ge 0$이므로 (Z5)에 의해 $p > 0$, (Z1)에 의해 $p \ge 1$이다. $A' = A - X_0$, $\mathcal{S}' = \mathcal{S} - \{X_0\}$으로 둔다. $X_0 \subseteq A$이므로 [[disjoint-union-count|서로소인 합집합의 원소의 개수]]의 (2)에 의해 $A'$은 유한집합이고 $|A'| = (k + 1) - p$이다. $p \ge 1$이므로 (Z7)에 의해 $|A'| \le k$이고, $|A'|$은 원소의 개수이므로 $|A'| \ge 0$이다. (1)에 의해 $\mathcal{S}'$은 $A'$의 분할이다. 귀납 가정 $S_{|A'|}$를 $A'$과 $\mathcal{S}'$에 쓰면 $\mathcal{S}'$은 유한집합이고 $|\mathcal{S}'| \le |A'|$이다.

$X_0 \notin \mathcal{S}'$이고 $\mathcal{S}' \cup \{X_0\} = \mathcal{S}$이다. 뒤의 것은 $\mathcal{S}'$과 $\{X_0\}$이 모두 $\mathcal{S}$의 부분집합이고($X_0 \in \mathcal{S}$), $X \in \mathcal{S}$이면 $X = X_0$이거나 $X \in \mathcal{S}'$이기 때문이다. [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (a)에 의해 $\mathcal{S}$는 원소를 $|\mathcal{S}'| + 1$개 갖는다. 따라서 $\mathcal{S}$는 유한집합이고 $|\mathcal{S}| = |\mathcal{S}'| + 1$이며, (Z7)과 (Z6)에 의해
$$|\mathcal{S}| = |\mathcal{S}'| + 1 \le |A'| + 1 \le k + 1$$
이다. 이로써 (가)가 성립한다.

(나): $m$이 자연수이고 $\mathcal{S}$의 모든 조각이 원소를 $m$개 가진다고 하자. $X_0 \in \mathcal{S}$이므로 $p = m$이다([[number-of-elements-is-unique|원소의 개수]]의 유일성). $\mathcal{S}'$의 조각은 $\mathcal{S}$의 조각이므로 모두 원소를 $m$개 갖고, 귀납 가정 $S_{|A'|}$의 (나)에 의해 $|A'| = |\mathcal{S}'| \cdot m$이다. $|A'| = (k + 1) - m$이므로 정수의 계산 법칙에 의해
$$k + 1 = |A'| + m = |\mathcal{S}'| \cdot m + m = (|\mathcal{S}'| + 1) \cdot m = |\mathcal{S}| \cdot m$$
이다. 따라서 $S_{k+1}$이 참이다.

강한 귀납법의 결론으로 모든 정수 $n \ge 0$에서 $S_n$이 참이다. $A$가 유한집합이면 $A$는 원소를 $|A|$개 가지므로 $S_{|A|}$의 (가)가 (2)이고 (나)가 (3)이다.

**(4)의 증명.** (3)에 의해 $|A| = |\mathcal{S}| \cdot m = m \cdot |\mathcal{S}|$이고 $|\mathcal{S}|$는 정수이므로, [[divisibility|나누어떨어짐]]의 정의에 의해 $m \mid |A|$이다. $\blacksquare$
:::

## 예시와 반례

:::example[열두 개를 넷씩]
$A = \{1, \dots, 12\}$를 $X_1 = \{1, \dots, 4\}$, $X_2 = \{5, \dots, 8\}$, $X_3 = \{9, \dots, 12\}$로 나눕니다. 정수 $x$가 $1 \le x \le 12$이면 (Z5)와 (Z1)에 의해 $x \le 4$이거나 $x \ge 5$이고, $x \ge 5$이면 같은 이유로 $x \le 8$이거나 $x \ge 9$이므로 $x$는 세 집합 가운데 하나에 속합니다. $x \le 4$와 $x \ge 5$는 함께 성립하지 않고((Z6)으로 $5 \le 4$가 되어 (L1)에 어긋난다), $x \le 8$과 $x \ge 9$도 마찬가지이므로 세 집합은 서로 겹치지 않으며, 모두 공집합이 아닙니다. 따라서 $\mathcal{S} = \{X_1, X_2, X_3\}$은 $A$의 분할입니다. $X_1$은 (F2)에 의해 원소를 $4$개 갖고, $X_2$와 $X_3$은 $i$를 각각 $i + 4$, $i + 8$로 보내는 $\{1, \dots, 4\}$에서의 전단사로 원소를 $4$개 갖습니다. 세 조각은 서로 다르므로 $\mathcal{S}$는 원소를 $3$개 갖고, (3)의 등식은 $12 = 3 \cdot 4$입니다.
:::

:::counterexample[조각의 크기가 다른 분할]
$A = \{1, 2, 3\}$과 분할 $\mathcal{S} = \{\{1\}, \{2, 3\}\}$에서 조각의 크기는 $1$과 $2$입니다. $|\mathcal{S}| = 2$이고 $|A| = 3$인데, $2 \cdot 1 = 2$도 $2 \cdot 2 = 4$도 $3$이 아닙니다. 이 예처럼 조각의 크기가 모두 같지 않으면 (3)을 쓸 수 없습니다. 이때도 (2)의 $|\mathcal{S}| = 2 \le 3$은 성립합니다.
:::

:::counterexample[겹치는 부분집합]
$A = \{1, 2, 3\}$의 부분집합 $\{1, 2\}$, $\{2, 3\}$은 모두 원소를 $2$개 갖고 합집합이 $A$이지만, $\mathcal{T} = \{\{1, 2\}, \{2, 3\}\}$에서 $2 \cdot 2 = 4 \ne 3$입니다. 두 부분집합이 $2$를 공유하므로 $\mathcal{T}$는 분할의 조건 3을 만족하지 않고, (3)을 쓸 수 없습니다.
:::

## 확인 질문

:::check[원소가 $10$개인 집합을 원소 $3$개씩의 조각으로 분할할 수 있는가?]
없습니다. 그런 분할 $\mathcal{S}$가 있으면 (4)에 의해 $3 \mid 10$, 곧 $10 = 3c$인 정수 $c$가 있습니다. (Z5)와 (Z1)에 의해 $c \le 3$이거나 $c \ge 4$이고, [[prime-number]]의 (Z3)에 의해 앞의 경우 $3c \le 9$, 뒤의 경우 $3c \ge 12$입니다. (Z6)에 의해 앞의 경우 $3c < 10$, 뒤의 경우 $3c > 10$이므로 (Z5)에 의해 어느 쪽이든 $3c \ne 10$입니다.
:::

:::check[$A$가 유한집합이고 $\mathcal{S} = \{\{x\} : x \in A\}$이면 $|\mathcal{S}|$는 얼마인가?]
$|\mathcal{S}| = |A|$입니다. 각 $\{x\}$는 $A$의 공집합이 아닌 부분집합이고, $x \in A$는 $\{x\}$에 속하며, $\{x\} \ne \{y\}$이면 $x \ne y$이므로 $\{x\} \cap \{y\} = \emptyset$입니다. 따라서 $\mathcal{S}$는 $A$의 분할입니다. $\{(1, x)\}$는 $\{1\}$에서 $\{x\}$로의 전단사이므로 모든 조각이 원소를 $1$개 갖고, (3)에 의해 $|A| = |\mathcal{S}| \cdot 1 = |\mathcal{S}|$입니다.
:::
