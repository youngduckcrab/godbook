---
title: 거리공간의 열린집합의 성질
title_en: Properties of Open Sets in a Metric Space
aliases: [열린집합의 합집합, 열린집합의 교집합, 닫힌집합의 교집합, 닫힌집합의 합집합, unions of open sets, intersections of open sets]
kind: theorem
field: topology
msc: ["54E35"]
level: undergrad
summary: 거리공간에서 공집합과 전체는 열린집합이고, 열린집합들의 집합족의 합집합과 두 열린집합의 교집합, 유한 집합족의 교집합은 열린집합이다. 닫힌집합에 대해서는 교집합과 유한 합집합이 닫혀 있다. 열린집합은 그 안에 든 열린 공 전체의 합집합이다.
requires: [metric-space, open-ball, open-set-in-metric-space, open-ball-is-open, family-of-sets, set-operations, de-morgan-laws-sets, finite-set, adding-or-removing-an-element, mathematical-induction, absolute-value, real-order-axioms, order-properties-of-reals, archimedean-property]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "7.2.1절 Topology, Proposition 7.2.6 (pp.265–266), Example 7.2.7, Proposition 7.2.8 (p.266), 연습문제 7.2.1 (p.272)"
    checked: original
    note: "(1), (2), (4)는 출처 Proposition 7.2.6 의 (i), (iii), (ii)이고 (5)는 Proposition 7.2.8 이다. 출처는 (ii)를 유한 개 V_1, …, V_k 에 대해 각 j 마다 δ_j 를 잡고 δ = min{δ_1, …, δ_k} 로 증명한다. 이 사이트에는 유한 개 실수의 최솟값이 없으므로, 이 항목은 두 집합의 경우 (3)을 두 수의 min 으로 보이고 유한 집합족의 경우 (4)를 원소의 개수에 대한 귀납으로 얻는다. 출처의 (iii)은 첨수가 붙은 꼴 {V_λ}_{λ∈I} 이고, 이 항목은 집합족의 꼴로 쓰며 빈 족을 포함한다. 출처는 Proposition 7.2.8 의 증명을 연습문제 7.2.1 로 두고 '여집합에 Proposition 7.2.6 을 쓰라'고 힌트를 준다. 이 항목의 (5)는 그 길로 집합족 항목의 (5)(드 모르간 법칙)를 쓴다. (7)의 '무한히 많은 열린집합의 교집합은 열려 있지 않을 수 있다'는 출처 Example 7.2.7(⋂(−1/n, 1/n) = {0} 은 열려 있지 않다)과 같은 발상이고, 이 항목은 다른 족 {x : −1/n < x < 1} 을 쓴다. 반례 '닫힌집합 무한히 많은 것의 합집합'은 그 닫힌집합판이다."
  - ref: fuglede-basic-topology
    loc: "Definitions and first examples 절의 위상의 정의 (content/topological-spaces.tex:7–15), Proposition (label prop-closed) (48–56), 위상의 기저 절의 Lemma 와 Lemma (label genereated-by-unions) (73–108)"
    checked: original
    note: "출처는 (1), (2), 유한 개의 교집합을 위상의 세 공리 (T1)–(T3)로 두고, 닫힌집합판 (T1′)–(T3′)을 증명 없이 명제로 적는다(48–56). 기저가 생성하는 위상이 위상임을 보이는 Lemma(73–92)에서 유한 개의 교집합을 두 집합의 경우와 귀납으로 보인다. 이 항목의 (4)는 같은 길을 집합족과 원소의 개수에 대한 귀납으로 쓴 것이다. Lemma genereated-by-unions(96–108)는 '각 x ∈ U 마다 x ∈ B_x ⊂ U 인 기저 원소 B_x 를 고른다'로 U 가 기저 원소들의 합집합임을 보인다. 이 항목의 (6)은 고르지 않고 집합족 항목의 (8)의 (ii)로 U = ⋃{B ∈ ℬ : B ⊆ U} 를 보인다. 출처의 번호 (T1)–(T3)은 쓰지 않는다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 출처 메모의 틀린 주장 1건과 다른 항목의 예를 근거로 삼은 예를 고쳤다."
added: 2026-11-19
---

:::statement
거리공간은 [[metric-space]], 열린 공과 닫힌 공은 [[open-ball]], 열린집합과 닫힌집합은 [[open-set-in-metric-space]], 집합족과 그 합집합·교집합은 [[family-of-sets]]의 것이고, "원소를 $n$개 갖는다"와 유한집합은 [[finite-set]]의 것이다. 아래에서 $(X, d)$는 거리공간이고, 집합족은 $X$의 집합족이며 그 교집합은 $X$의 집합족으로 본 것이다. **열린집합들의 집합족**은 원소가 모두 $(X, d)$에서 열린집합인 $X$의 집합족을, **닫힌집합들의 집합족**은 원소가 모두 닫힌집합인 집합족을 말한다.

1. $\emptyset$과 $X$는 열린집합이다.
2. (합집합) $\mathcal{U}$가 열린집합들의 집합족이면 $\bigcup \mathcal{U}$는 열린집합이다. $\mathcal{U} = \emptyset$이어도 성립한다($\bigcup \emptyset = \emptyset$).
3. (두 집합의 교집합) $U$, $V$가 열린집합이면 $U \cap V$는 열린집합이다.
4. (유한 집합족의 교집합) $\mathcal{U}$가 열린집합들의 집합족이고 유한집합이면 $\bigcap \mathcal{U}$는 열린집합이다. $\mathcal{U} = \emptyset$이어도 성립한다($\bigcap \emptyset = X$).
5. (닫힌집합)
   - (i) $\emptyset$과 $X$는 닫힌집합이다.
   - (ii) $\mathcal{C}$가 닫힌집합들의 집합족이면 $\bigcap \mathcal{C}$는 닫힌집합이다. $\mathcal{C} = \emptyset$이어도 성립한다($\bigcap \emptyset = X$).
   - (iii) $E$, $F$가 닫힌집합이면 $E \cup F$는 닫힌집합이다.
   - (iv) $\mathcal{C}$가 닫힌집합들의 집합족이고 유한집합이면 $\bigcup \mathcal{C}$는 닫힌집합이다. $\mathcal{C} = \emptyset$이어도 성립한다($\bigcup \emptyset = \emptyset$).
6. (열린 공들의 합집합) $P = \{r \in \mathbb{R} : 0 < r\}$이라 하고, 열린 공 전체의 집합족을 $\mathcal{B} = \{B(x, r) : (x, r) \in X \times P\}$로 둔다([[family-of-sets]]의 식으로 정한 집합족). $U \subseteq X$에 대하여 다음 셋은 서로 같은 말이다.
   - (i) $U$는 열린집합이다.
   - (ii) $U = \bigcup \{B \in \mathcal{B} : B \subseteq U\}$이다. 곧 $U$는 그 안에 든 열린 공 전체의 합집합이다.
   - (iii) $U = \bigcup \mathcal{C}$인 $\mathcal{C} \subseteq \mathcal{B}$가 있다.
7. (무한 집합족의 교집합) (4)에서 "유한집합이면"을 뺄 수 없다. $\mathbb{R}$(보통 거리)에서 자연수 $n$마다 $F(n) = \{x \in \mathbb{R} : -1/n < x < 1\}$로 두면 모든 $F(n)$은 열린집합이지만 $\bigcap \{F(n) : n \in \mathbb{N}\} = \{x \in \mathbb{R} : 0 \le x < 1\}$이고, 이 집합은 열린집합이 아니다.
:::

:::english
Metric spaces, open and closed balls, open and closed sets, and families of sets with their unions and intersections are as in the earlier entries, and "has $n$ elements" and finite sets are as in the entry on finite sets. Throughout, $(X, d)$ is a metric space, families are families of subsets of $X$, and their intersections are taken regarding them as families of subsets of $X$. A **family of open sets** is a family of subsets of $X$ all of whose members are open in $(X, d)$, and a **family of closed sets** is one all of whose members are closed.

1. $\emptyset$ and $X$ are open.
2. (Unions) If $\mathcal{U}$ is a family of open sets, then $\bigcup \mathcal{U}$ is open. This includes $\mathcal{U} = \emptyset$ ($\bigcup \emptyset = \emptyset$).
3. (Intersection of two sets) If $U$ and $V$ are open, then $U \cap V$ is open.
4. (Intersection of a finite family) If $\mathcal{U}$ is a family of open sets and a finite set, then $\bigcap \mathcal{U}$ is open. This includes $\mathcal{U} = \emptyset$ ($\bigcap \emptyset = X$).
5. (Closed sets)
   - (i) $\emptyset$ and $X$ are closed.
   - (ii) If $\mathcal{C}$ is a family of closed sets, then $\bigcap \mathcal{C}$ is closed. This includes $\mathcal{C} = \emptyset$ ($\bigcap \emptyset = X$).
   - (iii) If $E$ and $F$ are closed, then $E \cup F$ is closed.
   - (iv) If $\mathcal{C}$ is a family of closed sets and a finite set, then $\bigcup \mathcal{C}$ is closed. This includes $\mathcal{C} = \emptyset$ ($\bigcup \emptyset = \emptyset$).
6. (Unions of open balls) Let $P = \{r \in \mathbb{R} : 0 < r\}$, and let $\mathcal{B} = \{B(x, r) : (x, r) \in X \times P\}$ be the family of all open balls (a family given by an expression). For $U \subseteq X$ the following three statements are equivalent.
   - (i) $U$ is open.
   - (ii) $U = \bigcup \{B \in \mathcal{B} : B \subseteq U\}$; that is, $U$ is the union of all open balls contained in it.
   - (iii) $U = \bigcup \mathcal{C}$ for some $\mathcal{C} \subseteq \mathcal{B}$.
7. (Intersections of infinite families) The words "a finite set" in (4) cannot be dropped. In $\mathbb{R}$ with the standard metric, put $F(n) = \{x \in \mathbb{R} : -1/n < x < 1\}$ for each natural number $n$. Every $F(n)$ is open, but $\bigcap \{F(n) : n \in \mathbb{N}\} = \{x \in \mathbb{R} : 0 \le x < 1\}$, which is not open.
:::

## 직관

열린집합의 조건은 "각 점마다 그 점 둘레의 작은 공이 집합 안에 있다"였습니다. 합집합의 점은 어느 한 집합에 속하고, 그 집합 안의 공은 합집합 안에도 있으므로 합집합은 몇 개를 모으든 열려 있습니다. 교집합은 다릅니다. 점 $x$ 둘레에서 각 집합이 허락하는 반지름 가운데 가장 작은 것을 잡아야 하는데, 집합이 둘이면 두 반지름 가운데 작은 것을 잡으면 되고 유한 개이면 하나씩 늘려 가면 되지만, 무한히 많으면 허락되는 반지름이 $0$으로 줄어들 수 있습니다. (7)에서 점 $0$은 모든 $F(n)$에 들지만, $F(n)$이 허락하는 반지름이 $1/n$ 이하이므로 교집합 안에 $0$ 둘레의 공이 없습니다.

닫힌집합에 대한 (5)는 여집합을 취해 (1)–(4)를 뒤집은 것입니다. 드 모르간 법칙이 합집합과 교집합을 맞바꾸기 때문에 "임의의 합집합"이 "임의의 교집합"으로, "유한 교집합"이 "유한 합집합"으로 바뀝니다.

## 증명

:::idea
(2), (3)은 열린집합의 정의를 그대로 따집니다. (4)는 원소의 개수에 대한 귀납으로 (3)을 되풀이하고, (5)는 [[family-of-sets]]의 드 모르간 법칙으로 여집합에 (1)–(4)를 씁니다. (6)은 [[family-of-sets]]의 (8)의 (ii)를 씁니다.
:::

:::hint
(3)에서 $x \in U \cap V$이면 $B(x, r_1) \subseteq U$, $B(x, r_2) \subseteq V$인 $r_1$, $r_2$가 있습니다. 두 수의 최소를 반지름으로 잡아 보세요.
:::

:::hint
(4)의 귀납 단계에서는 원소를 $n + 1$개 갖는 집합족에서 원소 하나 $U$를 떼어 내면 남은 족이 원소를 $n$개 갖는다는 것과, $\bigcap \mathcal{U} = \bigl(\bigcap (\mathcal{U} - \{U\})\bigr) \cap U$를 씁니다.
:::

:::proof
[[order-properties-of-reals]]의 (n)을 "순서 성질 (n)"이라 줄여 쓴다. 집합족의 성질 (1)–(10)과 빈 집합족 단락은 [[family-of-sets]]의 것이고, 공의 성질 (1)–(9)는 [[open-ball]]의 것이다.

**(1).** [[open-set-in-metric-space]]의 (1)이다.

**(2).** $x \in \bigcup \mathcal{U}$라 하자. 집합족의 합집합의 정의에 의해 $x \in U$인 $U \in \mathcal{U}$가 있고, $U$는 열린집합이므로 $B(x, r) \subseteq U$인 $r > 0$이 있다. [[family-of-sets]]의 (1)에 의해 $U \subseteq \bigcup \mathcal{U}$이므로 $B(x, r)$의 점은 $\bigcup \mathcal{U}$에 속한다. 곧 $B(x, r) \subseteq \bigcup \mathcal{U}$이다. 따라서 $\bigcup \mathcal{U}$는 열린집합이다. $\mathcal{U} = \emptyset$이면 빈 집합족 단락에 의해 $\bigcup \emptyset = \emptyset$이고, 이것은 (1)에 의해 열린집합이다(위의 논증에서도 $x$가 없어 그대로 성립한다).

**(3).** $x \in U \cap V$라 하자. $x \in U$이고 $U$가 열려 있으므로 $B(x, r_1) \subseteq U$인 $r_1 > 0$이 있고, 같은 방식으로 $B(x, r_2) \subseteq V$인 $r_2 > 0$이 있다. $r = \min\{r_1, r_2\}$라 하면 [[absolute-value]]의 (10)에 의해 $r$은 $r_1$이나 $r_2$이므로 양수이고, $r \le r_1$, $r \le r_2$이다. 공의 (2)에 의해 $B(x, r) \subseteq B(x, r_1) \subseteq U$이고 $B(x, r) \subseteq B(x, r_2) \subseteq V$이므로 $B(x, r) \subseteq U \cap V$이다. 따라서 $U \cap V$는 열린집합이다.

**(4).** $0$ 이상인 정수 $n$마다 다음 명제를 $S_n$이라 하자.

> $S_n$: 원소를 $n$개 갖는 열린집합들의 집합족 $\mathcal{U}$에 대하여 $\bigcap \mathcal{U}$는 열린집합이다.

[[mathematical-induction|수학적 귀납법]]을 시작점 $0$인 꼴로 쓴다. $\mathcal{U}$가 유한집합이면 어떤 정수 $n \ge 0$에 대하여 원소를 $n$개 가지므로, 모든 $S_n$을 보이면 (4)가 나온다.

기초 단계. 원소를 $0$개 갖는 집합은 [[finite-set]]의 (F2)에 의해 $\emptyset$뿐이므로 $\mathcal{U} = \emptyset$이고, 빈 집합족 단락에 의해 $\bigcap \emptyset = X$이다. (1)에 의해 이것은 열린집합이다.

귀납 단계. 정수 $n \ge 0$에서 $S_n$이 참이라 하고, $\mathcal{U}$가 원소를 $n + 1$개 갖는 열린집합들의 집합족이라 하자. 전단사 $h : \{1, \dots, n+1\} \to \mathcal{U}$가 있으므로 $\mathcal{U}$의 원소 $U = h(n + 1)$을 하나 잡는다. [[adding-or-removing-an-element]]의 (b)에 의해 $\mathcal{U}' = \mathcal{U} - \{U\}$는 원소를 $n$개 갖는다. $\mathcal{U}' \subseteq \mathcal{U}$이므로 $\mathcal{U}'$도 열린집합들의 집합족이고, 귀납 가정 $S_n$에 의해 $\bigcap \mathcal{U}'$는 열린집합이다. 한편 $U \in \mathcal{U}$이므로 $\mathcal{U} = \mathcal{U}' \cup \{U\}$이다([[set-operations|합집합과 차집합]]의 정의). [[family-of-sets]]의 (7)과 (3)에 의해
$$
\bigcap \mathcal{U} = \Bigl(\bigcap \mathcal{U}'\Bigr) \cap \Bigl(\bigcap \{U\}\Bigr) = \Bigl(\bigcap \mathcal{U}'\Bigr) \cap U
$$
이고, 열린집합 둘의 교집합이므로 (3)에 의해 열린집합이다. 곧 $S_{n+1}$이 참이다.

**(5).** (i)은 [[open-set-in-metric-space]]의 (1)이다.
(ii) $\mathcal{D} = \{X - C : C \in \mathcal{C}\}$라 하자. 이 집합족의 원소는 어떤 $C \in \mathcal{C}$에 대한 $X - C$이고, $C$가 닫힌집합이므로 닫힌집합의 정의에 의해 열린집합이다. 곧 $\mathcal{D}$는 열린집합들의 집합족이고 (2)에 의해 $\bigcup \mathcal{D}$는 열린집합이다. [[family-of-sets]]의 (5)에 의해 $X - \bigcap \mathcal{C} = \bigcup \mathcal{D}$이므로 $\bigcap \mathcal{C}$는 닫힌집합이다.
(iii) [[de-morgan-laws-sets|드 모르간 법칙]]의 2를 전체집합 $X$에서 쓰면 $X - (E \cup F) = (X - E) \cap (X - F)$이다. $X - E$와 $X - F$는 열린집합이므로 (3)에 의해 이 교집합은 열린집합이고, $E \cup F$는 닫힌집합이다.
(iv) (4)의 증명에서 "열린집합"을 "닫힌집합"으로, $\bigcap$를 $\bigcup$로, (3)을 (5)의 (iii)으로 바꾸면 된다. 차례로 적으면 다음과 같다. 원소를 $n$개 갖는 닫힌집합들의 집합족의 합집합이 닫힌집합이라는 명제를 $T_n$이라 하자. 기초 단계에서는 족이 $\emptyset$이고 $\bigcup \emptyset = \emptyset$은 (i)에 의해 닫힌집합이다. 귀납 단계에서는 원소를 $n + 1$개 갖는 닫힌집합들의 집합족 $\mathcal{C}$에서 (4)와 같이 원소 $C$를 하나 잡고 $\mathcal{C}' = \mathcal{C} - \{C\}$로 두면, $\mathcal{C}'$는 원소를 $n$개 갖고, [[family-of-sets]]의 (7)과 (3)에 의해 $\bigcup \mathcal{C} = (\bigcup \mathcal{C}') \cup C$이다. $T_n$에 의해 $\bigcup \mathcal{C}'$는 닫힌집합이고, (iii)에 의해 $\bigcup \mathcal{C}$는 닫힌집합이다.

**(6).** $\mathcal{B}$의 원소는 어떤 $(x, r) \in X \times P$에 대한 $B(x, r)$이고, 이것은 [[open-ball-is-open|열린 공이 열린집합이라는 명제]]의 (1)에 의해 열린집합이다.
(i)에서 (ii): $U$가 열린집합이고 $x \in U$이면 $B(x, r) \subseteq U$인 $r > 0$이 있다. 공의 (1)에 의해 $x \in B(x, r)$이고 $B(x, r) \in \mathcal{B}$이다. 곧 $U$의 모든 점 $x$에 대하여 $x \in B$이고 $B \subseteq U$인 $B \in \mathcal{B}$가 있으므로, [[family-of-sets]]의 (8)의 (ii)에 의해 $U = \bigcup \{B \in \mathcal{B} : B \subseteq U\}$이다.
(ii)에서 (iii): $\mathcal{C} = \{B \in \mathcal{B} : B \subseteq U\}$는 $\mathcal{B}$의 부분집합이다.
(iii)에서 (i): $\mathcal{C} \subseteq \mathcal{B}$의 원소는 모두 열린집합이므로 $\mathcal{C}$는 열린집합들의 집합족이고, (2)에 의해 $U = \bigcup \mathcal{C}$는 열린집합이다.

**(7).** $n$이 자연수이면 순서 성질 (10)과 (6)의 (i)에 의해 $0 < 1/n$이고, 순서 성질 (3)의 (ii)에 의해 $-1/n < 0 < 1$이다. [[open-ball]]의 (5)에 의해 열린구간 $F(n) = (-1/n, 1)$은 열린 공이고, [[open-ball-is-open|열린 공이 열린집합이라는 명제]]의 (1)에 의해 열린집합이다.
$A = \{x \in \mathbb{R} : 0 \le x < 1\}$이라 하자. $x \in A$이면 모든 자연수 $n$에서 $-1/n < 0 \le x < 1$이므로(순서 성질 (1)의 (v)) $x \in F(n)$이고, [[family-of-sets]]의 (9)에 의해 $x \in \bigcap \{F(n) : n \in \mathbb{N}\}$이다. 거꾸로 $x$가 이 교집합에 속하면 (9)에 의해 모든 $n$에서 $x \in F(n)$이고, 특히 $x \in F(1)$이므로 $x < 1$이다. $x < 0$이라 하면 $0 < -x$이므로(순서 성질 (3)의 (ii)) [[archimedean-property]]의 (3)에 의해 $1/n < -x$인 자연수 $n$이 있고, 순서 성질 (3)의 (iii)에 의해 $x < -1/n$이 되어 $x \notin F(n)$이다. 이것은 앞의 것과 어긋나므로 $x < 0$이 아니고, 순서 성질 (1)의 (iii)에 의해 $0 \le x$이다. 따라서 교집합은 $A$이다. $A$는 반열린구간 $[0, 1)$이고, [[open-set-in-metric-space]]의 (4)의 (ii)에 의해 열린집합이 아니다.
:::

## 예시와 반례

:::example[0을 뺀 실수 전체를 공으로 덮기]
$\mathbb{R}$(보통 거리)에서 $U = \{x \in \mathbb{R} : x \ne 0\}$을 봅시다. $x \in U$이면 [[absolute-value]]의 (2)에 의해 $0 < |x|$이고, 공 $B(x, |x|)$는 $x$를 포함하며 $0$을 포함하지 않습니다($|x - 0| < |x|$는 성립하지 않으므로). 그러므로 $U$는 열린집합이고, (6)에 의해 $U$는 그 안에 든 열린 공 전체의 합집합입니다. 이 항목의 (6)은 이런 공을 점마다 하나씩 고르지 않고, $U$ 안에 든 공을 모두 모아 합집합을 취합니다.
:::

:::counterexample[닫힌집합 무한히 많은 것의 합집합은 닫혀 있지 않을 수 있다]
$\mathbb{R}$(보통 거리)에서 자연수 $n$마다 한 점 집합 $\{1/n\}$은 [[open-set-in-metric-space]]의 (5)에 의해 닫힌집합입니다. 그러나 그 합집합 $A = \bigcup \{\{1/n\} : n \in \mathbb{N}\}$은 닫힌집합이 아닙니다. 모든 $n$에서 $0 < 1/n$이므로 $0 \notin A$이고, $r > 0$이 무엇이든 [[archimedean-property]]의 (3)에 의해 $1/n < r$인 자연수 $n$이 있어 $1/n \in B(0, r) \cap A$입니다. [[open-set-in-metric-space]]의 (3)에 의해 $A$는 닫힌집합이 아닙니다. (5)의 (iv)에서 "유한집합이면"을 뺄 수 없다는 것을 보여 줍니다.
:::

## 확인 질문

:::check[$U$가 열린집합이고 $F$가 닫힌집합이면 $U - F$는 열린집합인가?]
그렇습니다. $U - F = U \cap (X - F)$이고, $X - F$는 닫힌집합의 정의에 의해 열린집합이므로 (3)에 의해 열린집합입니다.
:::

:::check[$\mathbb{R}$(보통 거리)에서 $\{1, 2, 3\}$은 닫힌집합인가?]
그렇습니다. 한 점 집합은 닫힌집합이고([[open-set-in-metric-space]]의 (5)), $\{1, 2, 3\} = (\{1\} \cup \{2\}) \cup \{3\}$이므로 (5)의 (iii)을 두 번 쓰면 됩니다.
:::
