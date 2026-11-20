---
title: 분할의 세분
title_en: Refinement of a Partition
aliases: [세분, 공통 세분, 분할에 점 더하기, 분할 이어 붙이기, 분할 나누기, refinement, common refinement, adding a point to a partition, joining partitions, splitting a partition]
kind: definition
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: "[a, b] 의 분할 Q 가 P 를 포함하면 Q 를 P 의 세분이라 한다. 세분과 점의 개수, 공통 세분 P ∪ Q, 점 하나를 더한 분할의 점과 작은 구간, 세분은 점을 하나씩 더해 얻는다는 것, 이웃한 두 구간의 분할을 이어 붙이고 나누는 법, 세분 관계의 반사·반대칭·추이를 함께 진술한다."
requires: [set, subset, set-operations, function, injective-surjective-bijective, finite-set, adding-or-removing-an-element, number-of-elements-is-unique, subset-of-finite-set, disjoint-union-count, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, real-order-axioms, order-properties-of-reals, upper-bound-and-supremum, real-valued-function, interval, increasing-listing-of-finite-set, partition-of-an-interval]
sources:
  - ref: lebl-basic-analysis
    loc: 5.1절(5.1.1 소절) Definition 5.1.6 과 그 뒤 문단 (p.183), Proposition 5.1.7 의 증명 (p.183), Proposition 5.1.8 의 증명 (p.184); 5.2절(5.2.1 소절) Lemma 5.2.1 의 증명 (p.191–192)
    checked: original
    note: "출처의 Definition 5.1.6(p.183)은 [a, b] 의 두 분할 P, P̃ 에 대해 집합으로서 P ⊂ P̃ 일 때 P̃ 를 P 의 세분(refinement)이라 한다. 출처의 ⊂ 는 같은 경우를 포함한다(0.3절 Definition 0.3.2, p.9). 이 항목은 ⊆ 로 쓰고 P = Q 인 경우도 세분이라 한다. 출처는 정의 뒤 문단(p.183)에서 [0, 2] 의 분할 {0, 0.5, 1, 2} 와 그 세분 {0, 0.2, 0.5, 1, 1.5, 1.75, 2} 를 든다. 공통 세분 (2)는 출처의 Proposition 5.1.8 의 증명(p.184)이 P_1 ∪ P_2 를 '[a, b] 의 분할이고 P_1 과 P_2 의 세분'이라고 증명 없이 쓰는 것이다. 점 하나 더하기 (3)은 출처의 Lemma 5.2.1 의 증명(p.191–192)이 [a, c] 의 분할 Q 에 대해 Q ∪ {b} 가 Q 의 세분이라고 쓰는 것과 같은 꼴이고, 새 분할의 점과 작은 구간의 식은 이 항목이 1단원 increasing-listing-of-finite-set 의 (3)으로 증명했다. 이어 붙이기 (5)의 (i)은 같은 증명이 [a, b] 의 분할 P_1 = {x_0, …, x_k} 와 [b, c] 의 분할 P_2 = {x_k, …, x_n} 의 합집합을 [a, c] 의 분할 {x_0, …, x_n} 이라고 쓰는 것이고, (5)의 (ii)(iii)은 같은 증명이 '[a, c] 의 분할 가운데 b 를 포함하는 것'의 하합을 P_1, P_2 의 하합으로 쓰는 단계에 쓰이는 내용이다. 출처의 Proposition 5.1.7 의 증명(p.183)은 세분 P̃ = {x̃_0, …, x̃_ℓ} 에 대해 x_i = x̃_{k_i} 인 정수 k_0 < k_1 < ⋯ < k_n 이 있다고 증명 없이 적고 이중 합으로 비교한다. 이 항목은 그 대신 세분을 점 하나씩 더해 얻는다는 (4)를 두어, 뒤 항목이 Q − P 의 원소의 개수에 대한 귀납법을 쓸 수 있게 했다. (1), (4), (6)과 이 항목의 모든 증명은 이 사이트가 썼다. 예시 '점 둘을 하나씩 더하기'의 P = {−1, 1, 3}, Q = {−1, 0, 1, 2, 3} 은 출처의 예처럼 분할과 그 세분을 드는 같은 발상이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 출처 메모의 틀린 서술과 번호 4곳, 넘겨짚은 직관 문장을 고쳤다."
added: 2026-11-20
---

:::statement
$[a, b]$의 분할과 그 점, $i$번째 작은 구간, 길이 $\Delta x_i$는 [[partition-of-an-interval]]의 것이고("분할 ($n$)"은 그 항목의 번호이다), 크기순 나열은 [[increasing-listing-of-finite-set]]의 것이며, 원소의 개수 $|A|$는 [[number-of-elements-is-unique]]의 것이다. 아래에서 $a$, $b$는 $a < b$인 실수이다.

**세분.** $P$, $Q$가 $[a, b]$의 분할일 때, $Q$가 $P$의 **세분**(refinement)인 것은 정확히 $P \subseteq Q$일 때이다. $P = Q$인 경우도 포함한다. $[a, b]$의 두 분할 $P$, $Q$에 대하여, $P$의 세분이면서 $Q$의 세분인 $[a, b]$의 분할을 $P$와 $Q$의 **공통 세분**(common refinement)이라 한다.

다음이 성립한다.

1. (세분과 점의 개수) $Q$가 $P$의 세분이고 $P$의 점이 $x_0, \dots, x_n$, $Q$의 점이 $y_0, \dots, y_m$이면(곧 $|P| = n + 1$, $|Q| = m + 1$이면) $n \le m$이고, $Q - P$는 원소를 $m - n$개 갖는 유한집합이다. $Q - P = \emptyset$인 것, 곧 $m = n$인 것은 정확히 $P = Q$일 때이다.
2. (공통 세분) $P$, $Q$가 $[a, b]$의 분할이면 $P \cup Q$는 $[a, b]$의 분할이고 $P$와 $Q$의 공통 세분이다. 또 $P$와 $Q$의 모든 공통 세분 $R$에서 $P \cup Q \subseteq R$이다.
3. (점 하나 더하기) $P$를 점이 $x_0, \dots, x_n$인 $[a, b]$의 분할, $y$를 $[a, b] - P$의 원소라 하자.
   - (i) $a < y < b$이고, $x_{k-1} < y < x_k$인 정수 $k$($1 \le k \le n$)가 정확히 하나 있다.
   - (ii) $P \cup \{y\}$는 원소를 $n + 2$개 갖는 $[a, b]$의 분할이고 $P$의 세분이다. 그 점을 $z_0, \dots, z_{n+1}$이라 하면
     $$
     z_i = \begin{cases} x_i & (0 \le i \le k - 1) \\ y & (i = k) \\ x_{i-1} & (k + 1 \le i \le n + 1) \end{cases}
     $$
     이다.
   - (iii) $P \cup \{y\}$의 작은 구간은 다음과 같다. $1 \le i \le k - 1$이면 $P \cup \{y\}$의 $i$번째 작은 구간은 $P$의 $i$번째 작은 구간 $[x_{i-1}, x_i]$이다. $P \cup \{y\}$의 $k$번째와 $(k + 1)$번째 작은 구간은 $[x_{k-1}, y]$와 $[y, x_k]$이고, 둘 다 $[x_{k-1}, x_k]$의 부분집합이며, 길이의 합은 $\Delta z_k + \Delta z_{k+1} = \Delta x_k$이다. $k + 1 \le i \le n$이면 $P \cup \{y\}$의 $(i + 1)$번째 작은 구간은 $P$의 $i$번째 작은 구간 $[x_{i-1}, x_i]$이다.
4. (세분은 점을 하나씩 더해 얻는다) $Q$가 $P$의 세분이고 $P \ne Q$라 하자. 그러면 $Q - P$는 공집합이 아니고, $Q - P$의 모든 원소 $y$에 대하여 다음이 성립한다.
   - (i) $Q - \{y\}$는 $[a, b]$의 분할이고 $P$의 세분이다.
   - (ii) $y \in [a, b] - (Q - \{y\})$이고 $Q = (Q - \{y\}) \cup \{y\}$이다. 곧 $Q$는 분할 $Q - \{y\}$에 (3)의 방법으로 점 $y$를 더한 것이다.
   - (iii) $(Q - \{y\}) - P = (Q - P) - \{y\}$이고, $Q - P$가 원소를 $d$개 가지면 $(Q - \{y\}) - P$는 원소를 $d - 1$개 갖는다.

   그래서 세분에 관한 성질은 "$Q - P$의 원소의 개수 $d$"에 대한 귀납법으로 보일 수 있다. $d = 0$이면 (1)에 의해 $Q = P$이고, $d \ge 1$이면 $Q - P$가 공집합이 아니라는 것에서 그 원소 $y$가 있고 $Q - \{y\}$에서는 그 개수가 $d - 1$이다. 여기서 $y$가 있다는 것은 존재를 한 번 쓰는 것이고, 여러 단계의 $y$를 미리 골라 열로 만드는 것이 아니다.
5. (이어 붙이기와 나누기) $a < b < c$인 실수 $c$가 있다고 하자.
   - (i) (이어 붙이기) $P_1$이 점이 $x_0, \dots, x_k$인 $[a, b]$의 분할이고 $P_2$가 점이 $y_0, \dots, y_l$인 $[b, c]$의 분할이면, $P_1 \cup P_2$는 원소를 $k + l + 1$개 갖는 $[a, c]$의 분할이고 그 점 $z_0, \dots, z_{k+l}$은 $0 \le i \le k$에서 $z_i = x_i$, $0 \le j \le l$에서 $z_{k+j} = y_j$이다($z_k = x_k = b = y_0$). 또 $(P_1 \cup P_2) \cap [a, b] = P_1$, $(P_1 \cup P_2) \cap [b, c] = P_2$이고, $1 \le i \le k$이면 $P_1 \cup P_2$의 $i$번째 작은 구간은 $P_1$의 $i$번째 작은 구간이며, $1 \le j \le l$이면 $P_1 \cup P_2$의 $(k + j)$번째 작은 구간은 $P_2$의 $j$번째 작은 구간이다.
   - (ii) (나누기) $P$가 점이 $z_0, \dots, z_n$인 $[a, c]$의 분할이고 $b \in P$이면, $z_k = b$인 정수 $k$가 정확히 하나 있고 $1 \le k \le n - 1$이다(따라서 $n \ge 2$). $P_1 = P \cap [a, b]$는 점이 $z_0, \dots, z_k$인 $[a, b]$의 분할이고, $P_2 = P \cap [b, c]$는 점이 $y_j = z_{k+j}$($0 \le j \le n - k$)인 $[b, c]$의 분할이며, $P_1 \cup P_2 = P$, $P_1 \cap P_2 = \{b\}$이다. $1 \le i \le k$이면 $P$의 $i$번째 작은 구간은 $P_1$의 $i$번째 작은 구간이고, $1 \le j \le n - k$이면 $P$의 $(k + j)$번째 작은 구간은 $P_2$의 $j$번째 작은 구간이다.
   - (iii) $P$가 $[a, c]$의 분할이고 $b \notin P$이면, $P \cup \{b\}$는 $b$를 원소로 갖는 $[a, c]$의 분할이고 $P$의 세분이므로 (ii)를 $P \cup \{b\}$에 쓸 수 있다.
6. (세분 관계) $[a, b]$의 분할 $P$, $Q$, $R$에 대하여, $P$는 $P$의 세분이다. $Q$가 $P$의 세분이고 $P$가 $Q$의 세분이면 $P = Q$이다. $Q$가 $P$의 세분이고 $R$이 $Q$의 세분이면 $R$은 $P$의 세분이다.
:::

:::english
Partitions of $[a, b]$, their points, the $i$-th subinterval, and the length $\Delta x_i$ are those of the entry on partitions of an interval ("partition ($n$)" refers to an item of that entry); listings in increasing order are those of the entry on listing a finite set in increasing order, and the number of elements $|A|$ is that of the entry on the uniqueness of the number of elements. Below, $a$ and $b$ are real numbers with $a < b$.

**Refinement.** For partitions $P$ and $Q$ of $[a, b]$, $Q$ is a **refinement** of $P$ exactly when $P \subseteq Q$. The case $P = Q$ is included. For two partitions $P$ and $Q$ of $[a, b]$, a partition of $[a, b]$ that is a refinement of $P$ and also a refinement of $Q$ is called a **common refinement** of $P$ and $Q$.

The following hold.

1. (Refinements and the number of points) If $Q$ is a refinement of $P$, the points of $P$ are $x_0, \dots, x_n$, and the points of $Q$ are $y_0, \dots, y_m$ (that is, $|P| = n + 1$ and $|Q| = m + 1$), then $n \le m$, and $Q - P$ is a finite set with $m - n$ elements. We have $Q - P = \emptyset$, that is, $m = n$, exactly when $P = Q$.
2. (Common refinement) If $P$ and $Q$ are partitions of $[a, b]$, then $P \cup Q$ is a partition of $[a, b]$ and a common refinement of $P$ and $Q$. Moreover, $P \cup Q \subseteq R$ for every common refinement $R$ of $P$ and $Q$.
3. (Adding one point) Let $P$ be a partition of $[a, b]$ with points $x_0, \dots, x_n$, and let $y$ be an element of $[a, b] - P$.
   - (i) $a < y < b$, and there is exactly one integer $k$ ($1 \le k \le n$) with $x_{k-1} < y < x_k$.
   - (ii) $P \cup \{y\}$ is a partition of $[a, b]$ with $n + 2$ elements and a refinement of $P$. If its points are $z_0, \dots, z_{n+1}$, then
     $$
     z_i = \begin{cases} x_i & (0 \le i \le k - 1) \\ y & (i = k) \\ x_{i-1} & (k + 1 \le i \le n + 1) . \end{cases}
     $$
   - (iii) The subintervals of $P \cup \{y\}$ are as follows. If $1 \le i \le k - 1$, the $i$-th subinterval of $P \cup \{y\}$ is the $i$-th subinterval $[x_{i-1}, x_i]$ of $P$. The $k$-th and $(k + 1)$-th subintervals of $P \cup \{y\}$ are $[x_{k-1}, y]$ and $[y, x_k]$; both are subsets of $[x_{k-1}, x_k]$, and the sum of their lengths is $\Delta z_k + \Delta z_{k+1} = \Delta x_k$. If $k + 1 \le i \le n$, the $(i + 1)$-th subinterval of $P \cup \{y\}$ is the $i$-th subinterval $[x_{i-1}, x_i]$ of $P$.
4. (A refinement is obtained by adding points one at a time) Let $Q$ be a refinement of $P$ with $P \ne Q$. Then $Q - P$ is nonempty, and for every element $y$ of $Q - P$ the following hold.
   - (i) $Q - \{y\}$ is a partition of $[a, b]$ and a refinement of $P$.
   - (ii) $y \in [a, b] - (Q - \{y\})$ and $Q = (Q - \{y\}) \cup \{y\}$. That is, $Q$ is obtained from the partition $Q - \{y\}$ by adding the point $y$ as in (3).
   - (iii) $(Q - \{y\}) - P = (Q - P) - \{y\}$, and if $Q - P$ has $d$ elements, then $(Q - \{y\}) - P$ has $d - 1$ elements.

   Hence properties of refinements can be proved by induction on the number $d$ of elements of $Q - P$. If $d = 0$, then $Q = P$ by (1); if $d \ge 1$, then since $Q - P$ is nonempty it has an element $y$, and for $Q - \{y\}$ that number is $d - 1$. Here the existence of $y$ is used once; it is not a matter of choosing the $y$'s of several steps in advance and forming a sequence.
5. (Joining and splitting) Suppose $c$ is a real number with $a < b < c$.
   - (i) (Joining) If $P_1$ is a partition of $[a, b]$ with points $x_0, \dots, x_k$ and $P_2$ is a partition of $[b, c]$ with points $y_0, \dots, y_l$, then $P_1 \cup P_2$ is a partition of $[a, c]$ with $k + l + 1$ elements, and its points $z_0, \dots, z_{k+l}$ are $z_i = x_i$ for $0 \le i \le k$ and $z_{k+j} = y_j$ for $0 \le j \le l$ ($z_k = x_k = b = y_0$). Moreover $(P_1 \cup P_2) \cap [a, b] = P_1$ and $(P_1 \cup P_2) \cap [b, c] = P_2$; for $1 \le i \le k$ the $i$-th subinterval of $P_1 \cup P_2$ is the $i$-th subinterval of $P_1$, and for $1 \le j \le l$ the $(k + j)$-th subinterval of $P_1 \cup P_2$ is the $j$-th subinterval of $P_2$.
   - (ii) (Splitting) If $P$ is a partition of $[a, c]$ with points $z_0, \dots, z_n$ and $b \in P$, then there is exactly one integer $k$ with $z_k = b$, and $1 \le k \le n - 1$ (hence $n \ge 2$). The set $P_1 = P \cap [a, b]$ is a partition of $[a, b]$ with points $z_0, \dots, z_k$, the set $P_2 = P \cap [b, c]$ is a partition of $[b, c]$ with points $y_j = z_{k+j}$ ($0 \le j \le n - k$), and $P_1 \cup P_2 = P$, $P_1 \cap P_2 = \{b\}$. For $1 \le i \le k$ the $i$-th subinterval of $P$ is the $i$-th subinterval of $P_1$, and for $1 \le j \le n - k$ the $(k + j)$-th subinterval of $P$ is the $j$-th subinterval of $P_2$.
   - (iii) If $P$ is a partition of $[a, c]$ and $b \notin P$, then $P \cup \{b\}$ is a partition of $[a, c]$ containing $b$ and a refinement of $P$, so (ii) applies to $P \cup \{b\}$.
6. (The refinement relation) For partitions $P$, $Q$, $R$ of $[a, b]$: $P$ is a refinement of $P$. If $Q$ is a refinement of $P$ and $P$ is a refinement of $Q$, then $P = Q$. If $Q$ is a refinement of $P$ and $R$ is a refinement of $Q$, then $R$ is a refinement of $P$.
:::

## 직관

분할을 막대기의 칼집 자리라고 보면, 세분은 칼집을 더 내는 것입니다. 원래 칼집은 하나도 지우지 않고($P \subseteq Q$) 몇 군데를 더 냅니다. 하나도 더하지 않아도 세분이라고 부릅니다. 두 사람이 따로 칼집을 냈다면, 두 사람의 칼집을 모두 낸 막대기 $P \cup Q$가 두 사람의 칼집을 다 가진 가장 적게 자른 막대기입니다((2)).

칼집 하나를 더하면 그 칼집이 들어간 토막 하나만 둘로 갈라지고, 그 왼쪽 토막들의 번호는 그대로, 오른쪽 토막들의 번호는 하나씩 밀립니다((3)). 갈라진 두 토막의 길이를 더하면 원래 토막의 길이입니다. 많은 칼집을 한꺼번에 더하는 것도 칼집을 하나씩 차례로 더한 것과 같으므로((4)), 칼집 하나를 더할 때 어떤 값이 줄어들지 않는다면, 귀납법으로 칼집을 여럿 더해도 그 값은 줄어들지 않습니다. 출처는 세분을 한꺼번에 다루려고 원래 점이 세분의 몇 번째 점인지를 나타내는 번호들을 쓰는데, 이 항목은 그 번호 대신 점 하나씩 더하는 길을 둡니다.

(5)는 이웃한 두 막대기 $[a, b]$와 $[b, c]$를 $b$에서 이어 붙이는 일과, 거꾸로 $[a, c]$를 $b$에서 끊는 일입니다. 이어 붙인 막대기에서 $b$는 칼집 하나로 셉니다. 끊으려면 $b$에 칼집이 있어야 하므로, 없으면 먼저 $b$에 칼집을 하나 더합니다((5)의 (iii)).

## 증명

:::idea
(1), (2), (4), (6)은 유한집합의 원소의 개수와 집합의 포함 관계에서 나온다. (3)은 크기순 나열에 한 점을 끼워 넣는 식(1단원 크기순 나열의 (3))을 $0$부터 붙인 번호로 옮긴 것이고, (5)의 이어 붙이기는 분할 (5), 나누기는 크기순 나열의 (4)를 쓴다.
:::

:::hint
(3): $P$의 크기순 나열 $u$로 $x_i = u(i + 1)$이다. 크기순 나열의 (3)이 주는 번호 $\kappa$와 이 항목의 $k$는 $k = \kappa - 1$로 이어진다.
:::

:::hint
(5)의 (i): $0 \le i \le k + l$인 정수 $i$마다 $i \le k$이면 $t_i = x_i$, $k < i$이면 $t_i = y_{i-k}$로 두고 분할 (5)를 쓴다.
:::

:::proof
실수의 순서는 [[order-properties-of-reals]]의 (1)–(3)으로 다루고, 그 (10)에 의해 정수 사이의 부등식도 실수의 부등식으로 읽는다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7), (L1)–(L3)으로, 정수끼리의 합과 차가 정수라는 것은 [[even-and-odd]]에서 받아들인 사실로 다룬다. "분할 ($n$)"은 [[partition-of-an-interval]]의 번호이고, "나열 ($n$)"은 [[increasing-listing-of-finite-set]]의 번호이다. $[a, b]$의 분할은 정의에 의해 $a$, $b$를 원소로 갖는 $[a, b]$의 유한 부분집합이다.

**1의 증명.** $P \subseteq Q$이고 $Q$는 원소를 $m + 1$개 가지므로 [[subset-of-finite-set]]의 (1)에 의해 $|P| \le m + 1$, 곧 $n + 1 \le m + 1$이고 (Z7)에 의해 $n \le m$이다. [[disjoint-union-count]]의 (2)를 $A = Q$, $B = P$에 쓰면 $Q - P$는 유한집합이고 $|Q - P| = (m + 1) - (n + 1) = m - n$이다. $Q - P = \emptyset$이면 $Q$의 모든 원소가 $P$에 속하므로 $Q \subseteq P$이고, $P \subseteq Q$와 함께 $P = Q$이다. 거꾸로 $P = Q$이면 $Q - P = \emptyset$이다. 또 [[finite-set]]의 (F2)에 의해 원소를 $0$개 갖는 집합은 $\emptyset$뿐이고 $\emptyset$은 원소를 $0$개 가지므로, [[number-of-elements-is-unique]]의 (1)과 함께 $Q - P = \emptyset$인 것은 정확히 $m - n = 0$, 곧 $m = n$일 때이다.

**2의 증명.** $P$, $Q \subseteq [a, b]$이므로 $P \cup Q \subseteq [a, b]$이다. [[disjoint-union-count]]의 (3)에 의해 $P \cup Q$는 유한집합이다. $a \in P \subseteq P \cup Q$이고 $b \in P \subseteq P \cup Q$이다. 따라서 $P \cup Q$는 $[a, b]$의 분할이고, $P \subseteq P \cup Q$, $Q \subseteq P \cup Q$이므로 $P$와 $Q$의 공통 세분이다. $R$이 공통 세분이면 $P \subseteq R$이고 $Q \subseteq R$이므로 $P \cup Q \subseteq R$이다.

**3의 증명.** $u : \{1, \dots, n + 1\} \to P$를 $P$의 크기순 나열이라 하면 $x_i = u(i + 1)$이다. 분할 (1)에 의해 $\min P = a$, $\max P = b$이다.

(i): $y \in [a, b]$이므로 $a \le y \le b$이고, $a, b \in P$이며 $y \notin P$이므로 $y \ne a$, $y \ne b$이다. 따라서 $a < y < b$, 곧 $\min P < y < \max P$이다. 나열 (3)을 원소를 $n + 1$개 갖는 $A = P$와 $y$에 쓰고, 그 항목이 정하는 번호를 $\kappa$라 하자. 나열 (3)의 (iii)에 의해 $2 \le \kappa \le n + 1$이고 $u(\kappa - 1) < y < u(\kappa)$이다. $k = \kappa - 1$로 두면 $k$는 정수이고 (Z7)에 의해 $1 \le k \le n$이며, $x_{k-1} = u(k) = u(\kappa - 1) < y < u(\kappa) = u(k + 1) = x_k$이다. 거꾸로 $1 \le k' \le n$이고 $x_{k'-1} < y < x_{k'}$이면 $y$는 $P$의 $k'$번째 작은 구간에 속한다. $y \in [a, b] - P$이므로 분할 (3)의 (iii)에 의해 $y$가 속하는 작은 구간의 번호는 하나뿐이고, $y$는 $k$번째 작은 구간에도 속하므로 $k' = k$이다.

(ii): 나열 (3)의 (ii)에 의해 $P \cup \{y\}$는 원소를 $n + 2$개 갖고, 그 크기순 나열 $w$는 $1 \le j \le \kappa - 1$에서 $w(j) = u(j)$, $w(\kappa) = y$, $\kappa + 1 \le j \le n + 2$에서 $w(j) = u(j - 1)$이다. $P \subseteq [a, b]$이고 $y \in [a, b]$이므로 $P \cup \{y\} \subseteq [a, b]$이고, $a, b \in P \subseteq P \cup \{y\}$이며 $P \cup \{y\}$는 유한집합이므로 $[a, b]$의 분할이다. $P \subseteq P \cup \{y\}$이므로 $P$의 세분이다. 원소가 $(n + 1) + 1$개이므로 그 점은 $z_0, \dots, z_{n+1}$이고 $z_i = w(i + 1)$이다. $0 \le i \le k - 1$이면 $1 \le i + 1 \le k = \kappa - 1$이므로 $z_i = u(i + 1) = x_i$이다. $z_k = w(k + 1) = w(\kappa) = y$이다. $k + 1 \le i \le n + 1$이면 $\kappa + 1 \le i + 1 \le n + 2$이므로 $z_i = u(i) = x_{i-1}$이다.

(iii): $P \cup \{y\}$의 $i$번째 작은 구간은 $[z_{i-1}, z_i]$이다. $1 \le i \le k - 1$이면 $0 \le i - 1$이고 $i \le k - 1$이므로 (ii)에 의해 $z_{i-1} = x_{i-1}$, $z_i = x_i$이다. $k$번째는 $[z_{k-1}, z_k] = [x_{k-1}, y]$이고, $k + 1 \le n + 1$이므로 $(k + 1)$번째는 $[z_k, z_{k+1}] = [y, x_k]$이다. $x_{k-1} < y < x_k$이므로 $x_{k-1}$, $y$, $x_k$는 모두 $[x_{k-1}, x_k]$의 원소이고, $[x_{k-1}, x_k]$는 [[interval]]의 (1)에 의해 구간이므로 그 (4)에 의해 $[x_{k-1}, y]$와 $[y, x_k]$는 $[x_{k-1}, x_k]$의 부분집합이다. 길이는 [[real-number-arithmetic]]의 계산 법칙으로 $\Delta z_k + \Delta z_{k+1} = (y - x_{k-1}) + (x_k - y) = x_k - x_{k-1} = \Delta x_k$이다. $k + 1 \le i \le n$이면 $P \cup \{y\}$의 $(i + 1)$번째 작은 구간은 $[z_i, z_{i+1}]$이고, $k + 1 \le i$이며 $i + 1 \le n + 1$이므로 (ii)에 의해 $z_i = x_{i-1}$, $z_{i+1} = x_i$이다.

**4의 증명.** $Q - P = \emptyset$이라면 (1)의 증명에서처럼 $P = Q$가 되므로, $P \ne Q$이면 $Q - P$는 공집합이 아니다. $y \in Q - P$라 하고 $Q' = Q - \{y\}$로 두자.

(i): $Q' \subseteq Q \subseteq [a, b]$이고, [[subset-of-finite-set]]의 (1)에 의해 $Q'$은 유한집합이다. $a \in P \subseteq Q$이고 $y \notin P$이므로 $a \ne y$이어서 $a \in Q'$이다. 같은 방식으로 $b \in Q'$이다. 따라서 $Q'$은 $[a, b]$의 분할이다. $x \in P$이면 $x \in Q$이고 $x \ne y$($y \notin P$)이므로 $x \in Q'$이다. 곧 $P \subseteq Q'$이다.

(ii): $y \in Q \subseteq [a, b]$이고 $y \notin Q'$이므로 $y \in [a, b] - Q'$이다. $y \in Q$이므로 $Q' \cup \{y\} \subseteq Q$이고, $Q$의 원소 $x$는 $x = y$이거나 $x \in Q'$이므로 $Q \subseteq Q' \cup \{y\}$이다.

(iii): $x \in Q' - P$인 것은 정확히 $x \in Q$, $x \ne y$, $x \notin P$일 때이고, 이는 정확히 $x \in (Q - P) - \{y\}$일 때이다. $Q - P$가 원소를 $d$개 가지면, 공집합이 아니므로 (F2)에 의해 $d \ne 0$이고 (Z5)와 (Z1)에 의해 $d \ge 1$이다. $d = (d - 1) + 1$이고 $y \in Q - P$이므로 [[adding-or-removing-an-element]]의 (b)에 의해 $(Q - P) - \{y\}$는 원소를 $d - 1$개 갖는다.

**5의 증명.** (i): $P_1$, $P_2$는 원소를 각각 $k + 1$, $l + 1$개 갖고 분할 (1)에 의해 $k \ge 1$, $l \ge 1$이다. $0 \le i \le k + l$인 정수 $i$는 (Z5)에 의해 $i \le k$, $k < i$ 가운데 정확히 한 경우에 들고, $k < i$이면 (Z1)과 (Z7)에 의해 $1 \le i - k \le l$이다. 그래서 $i \le k$이면 $t_i = x_i$, $k < i$이면 $t_i = y_{i-k}$로 실수 $t_i$가 정해진다. $t_0 = x_0 = a$이고, $k < k + l$이므로 $t_{k+l} = y_l = c$이다. $0 \le i < j \le k + l$이라 하자. $j \le k$이면 분할 (1)에 의해 $t_i = x_i < x_j = t_j$이다. $k < i$이면 $i - k < j - k$이므로 $t_i = y_{i-k} < y_{j-k} = t_j$이다. $i \le k < j$이면 $t_i = x_i \le x_k = b = y_0 < y_{j-k} = t_j$이다($0 < j - k$). (Z5)에 의해 이 세 경우가 전부이고, 어느 경우나 [[order-properties-of-reals]]의 (1)의 (v)에 의해 $t_i < t_j$이다. $a < b < c$이므로 $a < c$이고, 분할 (5)를 $[a, c]$와 $n = k + l$에 쓰면 $T = \{t_i : 0 \le i \le k + l\}$은 원소를 $k + l + 1$개 갖는 $[a, c]$의 분할이고 그 점은 $t_i$이다.

$T = P_1 \cup P_2$이다. $t_i$는 $x_i \in P_1$이거나 $y_{i-k} \in P_2$이다. 거꾸로 분할 (1)에 의해 $P_1$의 원소는 어떤 $x_i = t_i$이고, $P_2$의 원소는 어떤 $y_j$인데 $y_0 = b = x_k = t_k$이고 $1 \le j \le l$이면 $y_j = t_{k+j}$이다. 따라서 점은 $0 \le i \le k$에서 $z_i = t_i = x_i$, $0 \le j \le l$에서 $z_{k+j} = y_j$이다.

$P_1 \subseteq [a, b]$이므로 $P_1 \subseteq (P_1 \cup P_2) \cap [a, b]$이다. 거꾸로 $x \in (P_1 \cup P_2) \cap [a, b]$이고 $x \in P_2$이면 $b \le x$이고 $x \le b$이므로 $x = b \in P_1$이다. 따라서 $(P_1 \cup P_2) \cap [a, b] = P_1$이다. 같은 방식으로 $x \in (P_1 \cup P_2) \cap [b, c]$이고 $x \in P_1$이면 $x = b \in P_2$이므로 $(P_1 \cup P_2) \cap [b, c] = P_2$이다. $1 \le i \le k$이면 $P_1 \cup P_2$의 $i$번째 작은 구간은 $[z_{i-1}, z_i] = [x_{i-1}, x_i]$이고, $1 \le j \le l$이면 $(k + j)$번째 작은 구간은 $[z_{k+j-1}, z_{k+j}] = [y_{j-1}, y_j]$이다($0 \le j - 1 \le l$이므로 $z_{k+(j-1)} = y_{j-1}$).

(ii): 분할 (1)에 의해 $P = \{z_i : 0 \le i \le n\}$이므로 $b = z_k$인 정수 $k$($0 \le k \le n$)가 있고, 분할 (1)의 "$z_i = z_j$인 것은 정확히 $i = j$일 때"에 의해 하나뿐이다. $z_0 = a < b$이므로 $k \ne 0$이고 $b < c = z_n$이므로 $k \ne n$이다. (Z5)와 (Z1)에 의해 $1 \le k \le n - 1$이다.

$P$의 크기순 나열을 $u$라 하면 $z_i = u(i + 1)$이다. 나열 (4)를 원소를 $n + 1$개 갖는 $A = P$와 번호 $k + 1$($1 \le k + 1 \le n + 1$), $u(k + 1) = b$에 쓰면, $A_1 = \{x \in P : x \le b\}$는 원소를 $k + 1$개 갖고 그 크기순 나열은 $u$의 $\{1, \dots, k + 1\}$로의 제한이며, $A_2 = \{x \in P : b \le x\}$는 원소를 $(n + 1) - (k + 1) + 1 = n - k + 1$개 갖고 그 크기순 나열은 $v(j) = u(j + k)$이다. 또 $A_1 \cup A_2 = P$이고 $A_1 \cap A_2 = \{b\}$이다. $P \subseteq [a, c]$이므로 $P$의 원소 $x$는 $a \le x \le c$이고, 따라서 $x \le b$인 것은 정확히 $x \in [a, b]$일 때이며 $b \le x$인 것은 정확히 $x \in [b, c]$일 때이다. 곧 $A_1 = P_1$, $A_2 = P_2$이다.

$P_1 \subseteq [a, b]$는 유한집합이고, $a \in P$이며 $a \le b$이므로 $a \in P_1$이고, $b \in P_1$이다. 따라서 $P_1$은 $[a, b]$의 분할이고, 원소가 $k + 1$개이며 크기순 나열이 $u$의 제한이므로 그 점은 $0 \le i \le k$에서 $u(i + 1) = z_i$이다. 같은 방식으로 $P_2 \subseteq [b, c]$는 $b$와 $c$를 원소로 갖는 유한집합이므로 $[b, c]$의 분할이고, 그 점은 $0 \le j \le n - k$에서 $y_j = v(j + 1) = u(j + 1 + k) = z_{k+j}$이다. $1 \le i \le k$이면 $P$의 $i$번째 작은 구간 $[z_{i-1}, z_i]$는 $P_1$의 $i$번째 작은 구간이고, $1 \le j \le n - k$이면 $P$의 $(k + j)$번째 작은 구간 $[z_{k+j-1}, z_{k+j}] = [y_{j-1}, y_j]$는 $P_2$의 $j$번째 작은 구간이다.

(iii): $a < b < c$이므로 $b \in [a, c]$이고, $b \notin P$이므로 $b \in [a, c] - P$이다. (3)의 (ii)에 의해 $P \cup \{b\}$는 $[a, c]$의 분할이고 $P$의 세분이며, $b$를 원소로 갖는다.

**6의 증명.** $P \subseteq P$이다. $P \subseteq Q$이고 $Q \subseteq P$이면 $P = Q$이다. $P \subseteq Q$이고 $Q \subseteq R$이면 $P \subseteq R$이다. $\blacksquare$
:::

## 예시와 반례

:::example[점 둘을 하나씩 더하기]
$[-1, 3]$의 분할 $P = \{-1, 1, 3\}$($n = 2$)과 $Q = \{-1, 0, 1, 2, 3\}$($m = 4$)에서 $P \subseteq Q$이므로 $Q$는 $P$의 세분이고, (1)대로 $Q - P = \{0, 2\}$는 원소를 $m - n = 2$개 갖습니다.

(3)으로 $P$에 $0$을 더하면 $x_0 = -1 < 0 < 1 = x_1$이므로 $k = 1$이고, 새 점은 $z_0 = -1$, $z_1 = 0$, $z_2 = x_1 = 1$, $z_3 = x_2 = 3$입니다. 첫째 작은 구간 $[-1, 1]$이 $[-1, 0]$과 $[0, 1]$로 갈라지고 길이 $1 + 1 = 2$는 원래 길이와 같습니다. 원래 둘째 작은 구간 $[1, 3]$은 셋째 작은 구간이 됩니다. 이어서 $\{-1, 0, 1, 3\}$에 $2$를 더하면 $z_2 = 1 < 2 < 3 = z_3$이므로 $k = 3$이고, 결과는 $Q$입니다. $k = 3$이 점의 마지막 번호와 같아 "$k + 1 \le i \le n$"인 $i$가 없으므로 오른쪽으로 밀리는 작은 구간이 없습니다.

(4)를 $y = 2$에 쓰면 $Q - \{2\} = \{-1, 0, 1, 3\}$은 $P$의 세분이고 $(Q - \{2\}) - P = \{0\}$은 원소가 하나입니다. $y = 0$에 써도 됩니다. 어느 점을 먼저 더하든 $Q$에 이릅니다.
:::

:::example[이어 붙이기와 나누기]
$[-1, 1]$의 분할 $P_1 = \{-1, 0, 1\}$($k = 2$)과 $[1, 4]$의 분할 $P_2 = \{1, 4\}$($l = 1$)를 이어 붙이면 $P_1 \cup P_2 = \{-1, 0, 1, 4\}$는 원소를 $k + l + 1 = 4$개 갖는 $[-1, 4]$의 분할이고, 점은 $z_0 = -1$, $z_1 = 0$, $z_2 = 1$, $z_3 = 4$입니다. $1$은 두 분할에 모두 있지만 점으로는 한 번만 셉니다. 셋째 작은 구간 $[1, 4]$는 $P_2$의 첫째 작은 구간입니다($k + j = 2 + 1$).

거꾸로 $[0, 4]$의 분할 $P = \{0, 1, 3, 4\}$를 $b = 3$에서 나누면 $z_2 = 3$이므로 $k = 2$이고, $P \cap [0, 3] = \{0, 1, 3\}$, $P \cap [3, 4] = \{3, 4\}$입니다. $b$가 오른쪽 끝점 바로 앞의 점($k = n - 1$)이어서 $P_2$는 가장 간단한 분할 $\{3, 4\}$가 됩니다. $b = 2$에서 나누려면 $2 \notin P$이므로 먼저 $P \cup \{2\} = \{0, 1, 2, 3, 4\}$로 옮긴 뒤 $\{0, 1, 2\}$와 $\{2, 3, 4\}$로 나눕니다.
:::

:::counterexample[서로의 세분이 아닌 두 분할]
$[0, 3]$의 분할 $P = \{0, 2, 3\}$과 $Q = \{0, 1, 3\}$에서 $2 \in P - Q$이고 $1 \in Q - P$이므로 어느 쪽도 다른 쪽의 세분이 아닙니다. 두 분할이 늘 한쪽이 다른 쪽의 세분인 관계에 있는 것은 아닙니다. 그래도 공통 세분은 언제나 있고, (2)대로 $P \cup Q = \{0, 1, 2, 3\}$이 가장 작은 공통 세분입니다.
:::

:::counterexample[나누는 점이 분할에 없을 때]
$[0, 4]$의 분할 $P = \{0, 1, 4\}$와 $b = 3$에서 $P \cap [0, 3] = \{0, 1\}$은 $3$을 원소로 갖지 않으므로 $[0, 3]$의 분할이 아니고, $P \cap [3, 4] = \{4\}$도 $3$을 원소로 갖지 않으므로 $[3, 4]$의 분할이 아닙니다. (5)의 (ii)가 $b \in P$를 가정하는 까닭이 이것이고, 이때는 (5)의 (iii)대로 $P \cup \{3\} = \{0, 1, 3, 4\}$로 옮겨 나눕니다.
:::

## 확인 질문

:::check[$[a, b]$의 분할 $P$가 원소를 $3$개, 그 세분 $Q$가 원소를 $5$개 가질 때, (4)를 되풀이해 $Q$에서 점을 하나씩 빼어 $P$에 이르려면 몇 번 빼는가?]
두 번입니다. (1)에 의해 $Q - P$는 원소를 $4 - 2 = 2$개 갖고(점의 마지막 번호가 $n = 2$, $m = 4$), (4)의 (iii)에 의해 한 번 뺄 때마다 $Q - P$에 해당하는 집합의 원소가 하나씩 줄어 $0$개가 되면 (1)에 의해 $P$와 같아집니다.
:::

:::check[$[0, 2]$의 분할 $\{0, 2\}$와 $[2, 5]$의 분할 $\{2, 5\}$를 이어 붙인 분할의 점과 작은 구간은 무엇인가?]
(5)의 (i)에서 $k = 1$, $l = 1$이므로 $\{0, 2, 5\}$는 원소를 $3$개 갖는 $[0, 5]$의 분할이고, 점은 $z_0 = 0$, $z_1 = 2$, $z_2 = 5$입니다. 작은 구간은 $[0, 2]$(첫째 분할의 첫째 작은 구간)와 $[2, 5]$(둘째 분할의 첫째 작은 구간, $k + j = 1 + 1$)이고 길이는 $2$와 $3$입니다.
:::
