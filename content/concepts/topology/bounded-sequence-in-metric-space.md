---
title: 거리공간의 유계인 수열
title_en: Bounded Sequences in a Metric Space
aliases: [bounded sequence in a metric space, 수열의 값의 집합, set of values of a sequence]
kind: definition
field: topology
msc: ["54E35", "40A05"]
level: undergrad
summary: 거리공간의 수열이 유계라는 것은 값의 집합이 유계라는 것이다. 한 점에서 잰 거리의 실수열로 판정할 수 있고, 실수에서는 해석학 입문의 유계와 같으며, 수렴하는 수열은 유계이다. 부분수열과 꼬리, 부분공간, 이산 거리에서의 유계를 다룬다.
requires: [set, subset, function, even-and-odd, prime-number, natural-numbers-are-infinite, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, upper-bound-and-supremum, archimedean-property, sequence, limit-of-sequence, basic-limits, convergent-sequence-is-bounded, tail-of-a-sequence, subsequence, metric-space, metric-space-examples, open-ball, compact-metric-closed-and-bounded, sequence-in-a-space, convergence-in-metric-spaces]
sources:
  - ref: lebl-basic-analysis
    loc: "7.3절 7.3.1소절 Definition 7.3.1 과 그 아래 문단, Proposition 7.3.4, Proposition 7.3.6 (p.274–275); 7.1절 Definition 7.1.12 와 그 아래 문단 (p.261); 7.3.4소절 연습문제 7.3.2, 7.3.3 (p.277); 7.4.2소절 Example 7.4.15 (p.285); 2.3절 첫머리의 둘째 문단 (p.73)"
    checked: original
    note: "출처 Definition 7.3.1(p.274)은 거리공간의 수열을 함수 x : ℕ → X 로 두고, 수열이 유계라는 것을 'd(p, x_n) ≤ B 가 모든 n ∈ ℕ 에서 성립하는 점 p ∈ X 와 B ∈ ℝ 이 있다'로 정의한 뒤 같은 문단에서 '다르게 말하면 집합 {x_n : n ∈ ℕ} 이 유계일 때'라고 적는다. 이 항목은 뒤의 꼴(값의 집합이 유계)을 정의로 삼아 compact-metric-closed-and-bounded 의 집합의 유계와 한 정의로 잇고, 출처의 꼴은 (1)의 (iii)으로 증명한다. (1)이 중심 q 를 아무 점으로 잡아도 된다고 하는 것은 출처가 p.261(Definition 7.1.12 아래 문단)에서 집합의 유계와 동치인 꼴 (i) '모든 p ∈ X 에 d(p, x) ≤ B 가 모든 x ∈ S 에서 성립하는 B > 0 이 있다'로 적고 연습문제 7.1.9 a)(p.262)로 두는 것과 같은 발상이다. (3)은 출처 Proposition 7.3.4(p.275)와 같은 진술이고, 출처는 증명을 연습문제 7.3.3(p.277)으로 돌린다. 이 항목은 거리의 실수열이 0 으로 수렴한다는 것과 해석학 입문의 '수렴하는 수열은 유계'로 증명한다. (2)는 출처가 p.261 에서 실수의 부분집합에 대해 '1장의 유계와 같다는 것은 어렵지 않게 보인다'고 적은 것을 수열에 대해 적은 것이다. (4)의 두 경우(부분수열, K-꼬리)는 출처 Proposition 7.3.6(p.275)이 수렴에 대해 진술하는 두 경우와 같은 짝이다. (6)은 출처 p.261 의 문장 '이산 거리를 준 집합은 늘 유계이다'를 수열의 값의 집합에 쓴 것이고, 출처 연습문제 7.1.10 c)(p.262: 두 점 이상의 이산 거리 공간의 diam 을 구해 그 공간이 유계라고 결론짓게 한다)와 같은 결론이다. 예시 '성분이 유계인 평면의 수열'의 첫째 성분 (−1)ⁿ 은 출처 p.54(Proposition 2.1.7 의 증명 뒤: 수렴하는 수열은 유계라는 명제의 거꾸로가 성립하지 않는 예)와 p.73 이 유계이지만 발산하는 수열로 드는 것과 같은 수열이다. 반례 '유계이지만 수렴하지 않는 수열'은 출처 연습문제 7.3.2 c)(p.277: 유계인 거리 min{1, |x − y|} 를 준 ℝ 에서 수렴하는 부분수열이 없는 유계인 수열을 찾아라)와 같은 방향(거리가 유계여서 수열이 유계이지만 수렴하지 않는다)의 예이고, 그 반례의 공간은 출처 Example 7.4.15(p.285: 이산 거리를 준 무한집합에서 모든 부분집합은 닫혀 있고 유계이다)가 다루는 공간과 같다. 그 반례에서 수렴하는 수열이 어느 항부터 상수라는 것을 쓰는 단계는 출처 연습문제 7.3.6(p.277: 이산 거리 공간에서 수렴하는 수열은 어느 항부터 x_K 와 같다)과 같은 사실이다. 같은 수열이 보통 거리에서는 유계가 아니라는 것은 출처 p.261 의 '보통 거리의 실수는 유계인 거리공간이 아니고, 이산 거리를 준 실수는 유계이다'와 같은 대비이다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 단원 글의 거짓 문장 1건, 뒤 항목을 예고하던 문장 1건, 근거 없이 쓴 작은 사실 4건, 메모의 위치 2건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
거리공간과 그 예(보통 거리, 이산 거리, 부분공간 거리 $d_Y$)는 [[metric-space]], [[metric-space-examples]]의 것이고, 열린 공 $B(x, r)$는 [[open-ball]]의 것이다. 거리공간의 부분집합이 유계라는 것은 [[compact-metric-closed-and-bounded|거리공간의 콤팩트 집합은 닫혀 있고 유계라는 정리]]의 것이다. 수열, 수열의 수렴, 부분수열, $K$-꼬리는 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 것이고, 거리공간에는 늘 거리위상을 준다. 실수열과 그 유계, 값의 집합은 해석학 입문의 [[sequence]]의 것이다. 아래에서 $(X, d)$는 거리공간이고 $(x_n)$은 $X$의 수열이다.

**값의 집합.** $X$의 부분집합 $\{y \in X : y = x_n \text{인 자연수 } n \text{이 있다}\}$를 $(x_n)$의 **값의 집합**(set of values)이라 하고 $\{x_n : n \in \mathbb{N}\}$으로 쓴다. 이 집합은 $x_1$을 원소로 가지므로 공집합이 아니다. $X = \mathbb{R}$이면 이것은 [[sequence]]의 값의 집합이다.

**유계인 수열.** $(x_n)$이 $(X, d)$에서 **유계**(bounded)인 것은 정확히 $(x_n)$의 값의 집합이 $(X, d)$에서 유계일 때이다. 값의 집합은 공집합이 아니므로, 이것은 정확히 모든 자연수 $n$에서 $d(p, x_n) < r$인 점 $p \in X$와 실수 $r > 0$이 있을 때이다. 거리를 밝혀야 할 때는 "$d$로 유계"라고 쓴다.

다음이 성립한다.

1. (거리의 실수열로 보기) $q \in X$이면 다음 세 명제는 서로 동치이다.
   - (i) $(x_n)$이 유계이다.
   - (ii) $n$번째 항이 $d(x_n, q)$인 실수열이 [[sequence]]의 뜻으로 유계이다.
   - (iii) 모든 자연수 $n$에서 $d(x_n, q) \le B$인 실수 $B$가 있다.
2. (실수에서의 유계) $\mathbb{R}$에 보통 거리를 주면, 실수열 $(x_n)$이 이 항목의 뜻으로 유계인 것은 정확히 $(x_n)$이 [[sequence]]의 뜻으로 유계일 때이다. 그래서 두 뜻을 같은 이름으로 부른다.
3. (수렴하는 수열은 유계이다) $(x_n)$이 수렴하면 $(x_n)$은 유계이다.
4. (부분수열과 꼬리) $(x_n)$이 유계이면 $(x_n)$의 모든 부분수열은 유계이다. 또 자연수 $K$에 대하여, $(x_n)$이 유계인 것은 정확히 $(x_n)$의 $K$-꼬리가 유계일 때이다.
5. (부분공간) $Y \subseteq X$이고 $(y_n)$이 $Y$의 수열이면 $(y_n)$은 $X$의 수열이기도 하고, $(y_n)$이 $(Y, d_Y)$에서 유계인 것은 정확히 $(y_n)$이 $(X, d)$에서 유계일 때이다.
6. (이산 거리) $d$가 $X$ 위의 이산 거리이면 $X$의 모든 수열은 유계이다.
:::

:::english
Metric spaces and their examples (the standard metric, the discrete metric, the subspace metric $d_Y$) are as in the entries on metric spaces and examples of metric spaces, and open balls $B(x, r)$ are as in the entry on open balls. Bounded subsets of a metric space are as in the entry on compact sets in metric spaces being closed and bounded. Sequences, convergence of sequences, subsequences and $K$-tails are as in the entry on sequences and convergence in a topological space, and a metric space always carries its metric topology. Real sequences, their boundedness and their sets of values are as in the analysis entry on sequences. Below, $(X, d)$ is a metric space and $(x_n)$ is a sequence in $X$.

**Set of values.** The subset $\{y \in X : y = x_n \text{ for some natural number } n\}$ of $X$ is called the **set of values** of $(x_n)$ and is written $\{x_n : n \in \mathbb{N}\}$. It contains $x_1$, so it is nonempty. When $X = \mathbb{R}$ it is the set of values in the entry on sequences.

**Bounded sequences.** $(x_n)$ is **bounded** in $(X, d)$ exactly when its set of values is bounded in $(X, d)$. Since the set of values is nonempty, this holds exactly when there are a point $p \in X$ and a real number $r > 0$ with $d(p, x_n) < r$ for every natural number $n$. When the metric must be named we say "bounded with respect to $d$".

The following hold.

1. (Through a real sequence of distances) If $q \in X$, then the following three statements are equivalent.
   - (i) $(x_n)$ is bounded.
   - (ii) The real sequence whose $n$th term is $d(x_n, q)$ is bounded in the sense of the entry on sequences.
   - (iii) There is a real number $B$ with $d(x_n, q) \le B$ for every natural number $n$.
2. (Boundedness in the reals) If $\mathbb{R}$ carries the standard metric, then a real sequence $(x_n)$ is bounded in the sense of this entry exactly when it is bounded in the sense of the entry on sequences. Hence the two meanings are called by the same name.
3. (Convergent sequences are bounded) If $(x_n)$ converges, then $(x_n)$ is bounded.
4. (Subsequences and tails) If $(x_n)$ is bounded, then every subsequence of $(x_n)$ is bounded. Moreover, for a natural number $K$, $(x_n)$ is bounded exactly when the $K$-tail of $(x_n)$ is bounded.
5. (Subspaces) If $Y \subseteq X$ and $(y_n)$ is a sequence in $Y$, then $(y_n)$ is also a sequence in $X$, and $(y_n)$ is bounded in $(Y, d_Y)$ exactly when it is bounded in $(X, d)$.
6. (The discrete metric) If $d$ is the discrete metric on $X$, then every sequence in $X$ is bounded.
:::

## 직관

수열이 유계라는 것은 수열이 지나가는 점들을 열린 공 하나로 모두 감쌀 수 있다는 말입니다. 말뚝에 목줄로 묶인 강아지를 떠올려 봅시다. 강아지가 시간 $n$마다 있는 자리가 $x_n$이고, 말뚝의 자리가 $p$, 목줄의 길이가 $r$입니다. 수열이 유계라는 것은 "어떤 말뚝과 어떤 길이의 목줄이 있어, 모든 시간에 강아지가 목줄이 닿는 곳 안에 있다"는 것입니다. 말뚝과 목줄을 먼저 하나 정하고 그 뒤에 모든 시간을 따진다는 순서가 정의의 "어떤 $p$와 $r$이 있어 모든 $n$에서"와 맞습니다.

말뚝을 어디에 박는지는 상관없습니다. 말뚝을 옮기면 옮긴 거리만큼 목줄을 늘이면 되기 때문입니다. 그래서 (1)은 아무 점 $q$를 하나 정해 두고 $q$에서 잰 거리 $d(x_n, q)$의 실수열만 보면 된다고 말합니다. 거리공간의 수열에 관한 물음을 해석학 입문에서 다룬 실수열의 물음으로 옮기는 이 방법을 (3)과 (4)의 증명에서 씁니다.

유계인지는 거리에 달려 있습니다. 같은 집합의 같은 수열도 거리를 바꾸면 유계가 될 수 있습니다((6)과 아래 반례). 또 유계라고 해서 수렴하지는 않습니다. (3)의 거꾸로가 성립하지 않는 예가 아래 반례입니다.

## 증명

:::proof
"순서 성질 (n)"은 [[order-properties-of-reals]]의 번호, "공 (n)"은 [[open-ball]]의 번호, "유계 (n)"은 [[compact-metric-closed-and-bounded|거리공간의 콤팩트 집합은 닫혀 있고 유계라는 정리]]의 번호이다. 거리의 조건 (i)–(iv)는 [[metric-space]]의 것이다. $E = \{x_n : n \in \mathbb{N}\}$을 $(x_n)$의 값의 집합이라 하자.

**정의의 둘째 문장.** $E$가 유계이면, $E \ne \emptyset$이므로 유계의 정의에 의해 $E \subseteq B(p, r)$인 $p \in X$와 $r > 0$이 있고, 모든 $n$에서 $x_n \in E$이므로 $d(p, x_n) < r$이다. 거꾸로 모든 $n$에서 $d(p, x_n) < r$이면 $E$의 원소 $y$는 어떤 $n$에 대하여 $y = x_n$이므로 $y \in B(p, r)$이고, $E \subseteq B(p, r)$이다.

**(1).** $a_n = d(x_n, q)$로 두면 각 $a_n$은 이미 정해진 실수이므로 $n$번째 항이 $a_n$인 실수열이 있다([[sequence]]의 (1)).

(i)에서 (ii): $E$는 유계이고 공집합이 아니므로 $E \subseteq B(p, r)$인 $p$, $r$이 있고, 유계 (1)의 (ii)(중심 바꾸기)에 의해 $E \subseteq B(q, s)$인 실수 $s > 0$이 있다. 모든 $n$에서 $x_n \in E$이므로 $d(q, x_n) < s$이고, 거리의 조건 (iii)에 의해 $a_n = d(x_n, q) = d(q, x_n) < s$이다. 거리의 조건 (i)에 의해 $0 \le a_n$이므로 [[absolute-value]]의 (1)에 의해 $|a_n| = a_n < s$이고, 따라서 모든 $n$에서 $|a_n| \le s$이다. 곧 $(a_n)$은 [[sequence]]의 뜻으로 유계이다.

(ii)에서 (iii): 모든 $n$에서 $|a_n| \le B$인 실수 $B$가 있다. [[absolute-value]]의 (6)에 의해 $a_n \le |a_n|$이므로 순서 성질 (1)의 (v)에 의해 $d(x_n, q) = a_n \le B$이다.

(iii)에서 (i): 모든 $n$에서 $d(x_n, q) \le B$라 하자. 거리의 조건 (i)에 의해 $0 \le d(x_1, q) \le B$이므로 순서 성질 (1)의 (v)에 의해 $0 \le B$이고, 순서 성질 (5)의 (ii)와 (2)의 (iv)에 의해 $0 < B + 1$이다. 같은 이유로 $B < B + 1$이다. 모든 $n$에서 거리의 조건 (iii)에 의해 $d(q, x_n) = d(x_n, q) \le B < B + 1$이므로 순서 성질 (1)의 (v)에 의해 $d(q, x_n) < B + 1$이다. 정의의 둘째 문장에 의해 $(x_n)$은 유계이다.

**(2).** $\mathbb{R}$의 보통 거리에서 $(x_n)$이 이 항목의 뜻으로 유계인 것은 정의에 의해 정확히 $E$가 유계 (2)의 앞 문장의 뜻으로 유계일 때이고, 유계 (2)에 의해 이것은 정확히 $E$가 [[upper-bound-and-supremum]]의 뜻으로 유계일 때이다. [[sequence]]의 (3)에 의해 이것은 정확히 $(x_n)$이 [[sequence]]의 뜻으로 유계일 때이다.

**(3).** $(x_n)$이 $p \in X$로 수렴한다고 하자. [[convergence-in-metric-spaces]]의 (2)에 의해 $n$번째 항이 $d(x_n, p)$인 실수열은 $0$으로 수렴하고, [[convergent-sequence-is-bounded|수렴하는 수열은 유계라는 정리]]의 (2)에 의해 이 실수열은 유계이다. (1)을 $q = p$에 쓰면 ((ii)에서 (i)) $(x_n)$은 유계이다.

**(4).** *부분수열.* $(y_i)$가 $(x_n)$의 부분수열이면 어떤 첨자열 $(n_i)$에 대하여 모든 $i$에서 $y_i = x_{n_i}$이다. $(y_i)$의 값의 집합의 원소 $y$는 어떤 자연수 $i$에 대하여 $y = y_i = x_{n_i}$이고 $n_i$는 자연수이므로 $y \in E$이다. 곧 $(y_i)$의 값의 집합은 $E$의 부분집합이고, $E$가 유계이면 유계 (1)의 (i)에 의해 유계이다.

*꼬리.* $(z_n)$을 $(x_n)$의 $K$-꼬리라 하자. 곧 모든 $n$에서 $z_n = x_{n+K}$이다. $n + K$는 자연수이므로 위와 같은 이유로 $(z_n)$의 값의 집합은 $E$의 부분집합이고, $(x_n)$이 유계이면 $(z_n)$도 유계이다. 거꾸로 $(z_n)$이 유계라 하고 $q = x_1$로 두자. (1)에 의해 $n$번째 항이 $d(z_n, q)$인 실수열 $(b_n)$은 유계이다. $a_n = d(x_n, q)$로 두면 모든 $n$에서 $b_n = d(x_{n+K}, q) = a_{n+K}$이므로 $(b_n)$은 실수열 $(a_n)$의 $K$-꼬리이다. [[tail-of-a-sequence]]의 (3)에 의해 $(a_n)$은 유계이고, (1)에 의해 $(x_n)$은 유계이다.

**(5).** $(y_n)$은 함수 $\mathbb{N} \to Y$이고 그 값은 모두 $Y \subseteq X$에 속하므로, [[function]]의 진술(공역은 선언하기 나름이다)에 의해 함수 $\mathbb{N} \to X$이기도 하다. $q = y_1 \in Y$로 두자. [[metric-space-examples]]의 (3)에 의해 모든 $n$에서 $d_Y(y_n, q) = d(y_n, q)$이므로, $n$번째 항이 $d_Y(y_n, q)$인 실수열과 $n$번째 항이 $d(y_n, q)$인 실수열은 같은 수열이다. (1)을 $(Y, d_Y)$와 $(X, d)$에 각각 쓰면, $(y_n)$이 $(Y, d_Y)$에서 유계인 것은 정확히 이 실수열이 유계일 때이고, 이것은 정확히 $(y_n)$이 $(X, d)$에서 유계일 때이다.

**(6).** 공 (6)에 의해 $1 < 2$이므로 $B(x_1, 2) = X$이다. 따라서 모든 $n$에서 $x_n \in B(x_1, 2)$, 곧 $d(x_1, x_n) < 2$이고, 정의의 둘째 문장에 의해 $(x_n)$은 유계이다.
:::

## 예시와 반례

:::example[성분이 유계인 평면의 수열]
자연수 $n$이 짝수이면 $a_n = 1$, 홀수이면 $a_n = -1$로 둡니다([[even-and-odd]]에 의해 모든 자연수는 짝수이거나 홀수이고 둘 다는 아닙니다). 곱집합 $\mathbb{R} \times \mathbb{R}$에 최대 거리 $d_{\max}$를 주고, $n$번째 항이 $z_n = (a_n, n^{-1})$인 수열을 봅시다. 원점 $o = (0, 0)$에서 [[metric-space-examples]]의 (5)에 의해
$$
d_{\max}(z_n, o) = \max\bigl\{|a_n|,\ |n^{-1}|\bigr\}
$$
입니다. [[absolute-value]]의 (1)과 (3)에 의해 $|a_n| = 1$입니다. [[order-properties-of-reals]]의 (10)에 의해 $0 < n^{-1}$이고, (Z1)([[prime-number]]의 진술)에 의해 $1 \le n$이므로 $n = 1$이면 $n^{-1} = 1$, $1 < n$이면 같은 항목의 (6)의 (ii)에 의해 $n^{-1} < 1$이므로 $|n^{-1}| = n^{-1} \le 1$입니다. [[absolute-value]]의 (10)에 의해 $d_{\max}(z_n, o) \le 1$입니다. (1)의 (iii)에서 (i)로 가는 방향을 $q = o$, $B = 1$에 쓰면 $(z_n)$은 유계입니다. 한편 첫째 성분의 실수열 $(a_n)$은 [[basic-limits]]의 (3)에 의해 발산하므로, [[convergence-in-metric-spaces]]의 (4)에 의해 $(z_n)$은 어떤 점으로도 수렴하지 않습니다.
:::

:::counterexample[유계이지만 수렴하지 않는 수열]
$\mathbb{N}$에 이산 거리 $d$를 주고 $n$번째 항이 $n$인 수열 $(x_n)$을 봅시다. (6)에 의해 $(x_n)$은 유계입니다. 그러나 $(x_n)$은 어떤 점으로도 수렴하지 않습니다. $(x_n)$이 $p \in \mathbb{N}$으로 수렴한다면, [[convergence-in-metric-spaces]]의 (5)에 의해 $n \ge M$인 모든 $n$에서 $x_n = p$인 자연수 $M$이 있어야 합니다. 그러면 $M = x_M = p$이고 $M + 1 = x_{M+1} = p$이므로 $M = M + 1$인데, [[order-properties-of-reals]]의 (5)의 (ii)와 (2)의 (ii)에 의해 $M < M + 1$이므로 (같은 항목의 (1)의 (i)) 어긋납니다. 그래서 (3)의 거꾸로, 곧 "유계이면 수렴한다"는 이 공간에서 성립하지 않습니다. 같은 수열은 보통 거리를 준 $\mathbb{N}$에서는 유계도 아닙니다((5)와 (2)에 의해 실수열 $(n)$이 [[sequence]]의 뜻으로 유계인지와 같고, [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 그렇지 않습니다).
:::

## 확인 질문

:::check[수열의 처음 백 개의 항을 마음대로 바꾸면 유계인지가 달라질 수 있는가?]
달라지지 않습니다. $(x_n)$과 $(y_n)$이 같은 거리공간의 수열이고 $n \ge 101$인 모든 $n$에서 $x_n = y_n$이면, 두 수열의 $100$-꼬리는 모든 $n$에서 $x_{n+100} = y_{n+100}$이므로 같은 수열입니다. (4)에 의해 $(x_n)$이 유계인 것은 정확히 그 $100$-꼬리가 유계일 때이고, 이것은 정확히 $(y_n)$이 유계일 때입니다.
:::

:::check[$\mathbb{R}$의 부분공간 $Y = \{x : 0 < x < 1\}$에서 $n$번째 항이 $n(n + 1)^{-1}$인 수열은 $(Y, d_Y)$에서 유계인가?]
유계입니다. [[order-properties-of-reals]]의 (10)에 의해 $0 < n < n + 1$이고, 같은 항목의 (6)의 (i)에 의해 $0 < (n + 1)^{-1}$이므로 (4)의 (i)에 의해 $0 < n(n + 1)^{-1} < (n + 1)(n + 1)^{-1} = 1$입니다. 모든 항이 $Y$에 속하므로 이것은 $Y$의 수열입니다. 실수열로서 $0$이 하계이고 $1$이 상계이므로 [[sequence]]의 (2)와 (3)에 의해 유계이고, (2)에 의해 보통 거리의 $\mathbb{R}$에서 유계이며, (5)에 의해 $(Y, d_Y)$에서도 유계입니다.
:::
