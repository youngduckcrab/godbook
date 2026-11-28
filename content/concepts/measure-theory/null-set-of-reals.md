---
title: ℝ 의 영집합
title_en: Null Sets of Real Numbers
aliases: [영집합, 영 덮개열, 측도가 0 인 집합, 길이가 0 인 집합, 표준 영 덮개열, null set, null cover sequence, set of measure zero]
kind: definition
field: measure-theory
msc: ["28A05", "26A42"]
level: undergrad
summary: 총길이가 유한한 [c, d) 꼴 집합열의 상극한에 드는 ℝ 의 부분집합을 영집합이라 하고, 작은 열린구간 덮개, 부분집합과 가산집합, 영 덮개열의 족이 주어진 가산 합집합과 유한 합집합, 적분의 합이 유한한 0 이상인 계단함수의 급수가 ∞ 가 되는 점 전체가 영집합이라는 것, 길이가 양수인 구간이 영집합이 아니라는 것을 증명한다.
requires: [set, subset, set-operations, function, recursion-theorem, mathematical-induction, finite-set, countably-infinite-set, n-and-z-have-equal-cardinality, well-ordering-principle, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, interval, rational-and-irrational-numbers, power-of-a-real-number, geometric-sequence-limit, geometric-series, sequence, finite-sum-of-reals, linearity-and-order-of-finite-sums, pointwise-convergence, sequence-of-sets, indicator-function, pairing-of-natural-numbers, rationals-are-countable, extended-nonnegative-reals, series-in-extended-nonnegative-reals, nonnegative-double-series, step-function, countable-additivity-of-length]
sources:
  - ref: lebl-basic-analysis-2
    loc: "10.3.1 소절, Definition 10.3.1 과 식 (10.2) (p.108); 10.3.2 소절, Example 10.3.3, Proposition 10.3.4 (p.110–111), Example 10.3.6 (p.111–112); 10.3.4 소절, Exercise 10.3.2, 10.3.3, 10.3.5, 10.3.14, 10.3.15 (p.115–116)"
    checked: original
    note: "출처는 Definition 10.3.1(p.108)에서 열린 직사각형의 열로 외측도를 정의하고, 외측도가 0 인 집합을 'of measure zero or a null set' 이라 부른 뒤, 같은 쪽에서 '모든 ε > 0 에 대하여 S ⊂ ⋃R_j 이고 ΣV(R_j) < ε 인 열린 직사각형의 열이 있다'(식 (10.2))로 다시 적고, 영집합의 부분집합이 같은 직사각형으로 영집합이라고 적는다. 이 항목의 영집합은 그 꼴이 아니라 '총길이가 유한한 [c, d) 꼴 집합열의 상극한에 든다'로 정의한다. (1)의 (ii)는 이 정의에서 출처의 식 (10.2)의 꼴(n = 1)이 나온다는 것이고, 거꾸로는 이 항목이 진술하지 않는다(그 방향의 흔한 증명은 ε 마다 덮개를 하나씩 잡는다). (2)의 (ii)는 출처 p.108 의 그 문장과 같은 내용이고, Exercise 10.3.2(p.115)는 외측도에 대한 같은 꼴의 단조성이다. (3)의 ℚ 는 출처 Example 10.3.3(p.110, ℚⁿ 을 q_1, q_2, … 로 늘어놓고 q_j 를 부피가 ε2^{−j} 보다 작은 직사각형으로 덮는다)의 n = 1 과 같은 대상이고, 이 항목은 ε 없이 짝짓기 함수로 각 점을 끝없이 여러 번 덮는다. 출처 Proposition 10.3.4(p.110–111)는 가산 개의 영집합의 합집합이 영집합이라는 것이고 증명에서 'For each j, there exists a sequence of open rectangles' 로 j 마다 덮개를 잡는다. 이 항목의 (4)는 그 덮개들이 하나의 족으로 주어진 꼴로 좁힌 것이고, (5)는 유한 개로 좁힌 것이다. 출처 Exercise 10.3.14, 10.3.15(p.116)는 두 집합의 합집합의 외측도에 관한 것으로 (5)와 이어진다. (7)은 출처 Example 10.3.6(p.111–112, a < b 이면 [a, b] 의 외측도가 b − a)에서 나오는 결론과 같고, 이 항목은 countable-additivity-of-length 의 (2)로 증명한다. Exercise 10.3.3(p.115)은 '모든 ε 에 외측도가 ε 이하인 상위 집합이 있으면 영집합'이고, Exercise 10.3.5(p.115)는 폐포가 ℝⁿ 인 영집합의 예를 묻는다. 확인 질문 '무리수 전체의 집합이 영집합인가?'의 ℚ 는 Example 10.3.3 의 대상이다."
  - ref: blackstone-mikusinski-daniell-integral
    loc: 5절 Convergence Almost Everywhere, Definition 5.1, Theorem 5.2 (p.11), Theorem 5.9 (p.12–13)
    checked: original
    note: "출처 Definition 5.1(p.11)은 지시함수가 null function(적분이 0 인 다니엘 공간의 원소)인 집합을 null set 이라 하고, Theorem 5.2(p.11)는 부분집합과 가산 합집합이 null set 이라는 것을 Corollary 3.11 로 증명한다. Theorem 5.9(p.12–13)는 Σ∫|f_n| < ∞ 이면 급수가 거의 어디서나 수렴한다는 것이고, 그 증명은 절대수렴하지 않는 점 전체의 지시함수 g 가 g ≃ f_1 − f_1 + f_2 − f_2 + ⋯ 를 만족해 ∫|g| = 0 이라는 것으로 그 집합이 null set 임을 보인다. 이 항목의 (6)의 (i)은 계단함수 g_n 에 대한 같은 꼴의 결론(합이 ∞ 인 점 전체가 영집합)을, 출처의 완비 다니엘 공간 없이 덮개열을 식으로 만들어 증명한 것이다."
  - ref: kanovei-katz-positive-function-vanishing-integral
    loc: 2절 On Lebesgue measure in the Feferman–Levy model (p.3)
    checked: original
    note: "Kanovei 와 Katz 는 2절(p.3)에서 페퍼만–레비 모형의 성질 (FL)로 '[0, 1] 은 가산집합 C_n ⊆ [0, 1] 들의 가산 합집합이다'를 들고, 유계 집합의 외측도를 열린구간의 가산 덮개의 길이의 합의 하한으로 정의한 뒤(Definition 2.1), ZF 에서 증명되는 성질로 '유한이거나 가산인 유계 집합은 르베그 가측이고 측도가 0 이다'((III))를 적고 'It follows by (FL) that m is not countably additive in the FL model' 이라고 적는다. 이 항목의 (3)은 열거가 주어진 집합, (4)는 영 덮개열의 족이 주어진 합집합, (7)은 길이가 양수인 구간에 대한 것이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(영집합 (6)(i) 의 덮개열 구성 통독, 균등 분할 어림과 (6)(iii) 의 경계값). 독립 검토 없음."
added: 2026-11-28
---

:::statement
$[a, b)$($a \le b$)와 그 길이, 계단함수와 그 적분 $\int_{\mathbb{R}}$, 표준 조각열은 [[step-function|계단함수와 그 적분]]의 것이다. 열린구간 $(\alpha, \beta)$와 닫힌구간 $[a, b]$는 [[interval]]의 것이고 $\alpha < \beta$, $a < b$일 때만 쓴다. 집합열, 그 합집합, 상극한 $\limsup_{n \to \infty}$는 [[sequence-of-sets|집합열]]의 것이고, 실수열은 [[sequence]], $\mathbb{R}$에서 $\mathbb{R}$로의 사상의 열은 [[pointwise-convergence|사상의 열과 점별 수렴]]의 것이다. $[0, \infty]$와 그 원소열의 합 $\sum_{n=1}^{\infty}$, $\sum_{n=m}^{\infty}$은 [[extended-nonnegative-reals]]와 [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]]의 것이고, 이중첨수 원소열은 [[nonnegative-double-series|0 이상인 이중급수]]의 것이다. 짝짓기 함수 $\pi$와 $\kappa_1$, $\kappa_2$는 [[pairing-of-natural-numbers|ℕ × ℕ 과 ℕ 의 전단사]]의 것이고, 가산은 [[countably-infinite-set|가산 무한 집합]]의 것이다. 거듭제곱 $(1/2)^n$, $2^k$은 [[power-of-a-real-number]]의 것이다.

**영집합.** $\mathbb{R}$의 부분집합 $A$가 **영집합**(null set)인 것은 정확히, 모든 자연수 $n$에서 $c_n \le d_n$인 실수열 $(c_n)$, $(d_n)$이 있어
$$
\begin{gathered} \sum_{n=1}^{\infty} (d_n - c_n) < \infty, \\ A \subseteq \limsup_{n \to \infty} \, [c_n, d_n) \end{gathered}
$$
일 때이다. 오른쪽은 $n$번째 항이 $[c_n, d_n)$인 집합열의 상극한이고, [[sequence-of-sets|집합열]]의 (8)에 의해 둘째 조건은 정확히 "$A$의 모든 원소 $x$와 모든 자연수 $M$에 대하여 $M \le n$이고 $x \in [c_n, d_n)$인 자연수 $n$이 있다"는 것이다. 이런 실수열의 쌍 $\bigl((c_n), (d_n)\bigr)$을 $A$의 **영 덮개열**(null cover sequence)이라 하고, $\sum_{n=1}^{\infty} (d_n - c_n)$을 그 **총길이**라 한다.

다음이 성립한다.

1. (꼬리와 작은 열린구간 덮개) $A$가 영집합이라 하자.
   - (i) $\bigl((c_n), (d_n)\bigr)$이 $A$의 영 덮개열이고 $N$이 $0$ 이상인 정수이면, $l$번째 항이 $c_{l+N}$, $d_{l+N}$인 두 실수열의 쌍도 $A$의 영 덮개열이고 그 총길이는 $\sum_{n=N+1}^{\infty} (d_n - c_n)$이다. 모든 양의 실수 $\varepsilon$에 대하여 이 총길이가 $\varepsilon$보다 작은 $N$이 있다.
   - (ii) 모든 양의 실수 $\varepsilon$에 대하여 모든 자연수 $n$에서 $\alpha_n < \beta_n$인 실수열 $(\alpha_n)$, $(\beta_n)$이 있어 $A \subseteq \bigcup_{n=1}^{\infty} (\alpha_n, \beta_n)$이고 $\sum_{n=1}^{\infty} (\beta_n - \alpha_n) < \varepsilon$이다.
2. (공집합과 부분집합) $\emptyset$은 영집합이다. $A$가 영집합이고 $B \subseteq A$이면 $A$의 영 덮개열은 $B$의 영 덮개열이고, $B$는 영집합이다.
3. (열거로 덮이는 집합) $e : \mathbb{N} \to \mathbb{R}$가 함수이고 $A \subseteq \{e(k) : k \in \mathbb{N}\}$이면, 자연수 $m$마다
   $$
   \begin{gathered} c_m = e(\kappa_1(m)), \\ d_m = e(\kappa_1(m)) + \left(\tfrac{1}{2}\right)^m \end{gathered}
   $$
   으로 정한 쌍은 총길이가 $1$인 $A$의 영 덮개열이다. 따라서 $\mathbb{R}$의 가산 부분집합은 영집합이다. 특히 한 점으로 된 집합, $\mathbb{R}$의 유한 부분집합, $\mathbb{Z}$, $\mathbb{Q}$는 영집합이다.
4. (영 덮개열의 족이 주어진 합집합) $(A_j)$가 $\mathbb{R}$의 집합열이고, 함수 $c, d : \mathbb{N} \times \mathbb{N} \to \mathbb{R}$가 모든 자연수 $j$, $k$에서 $c(j, k) \le d(j, k)$를 만족하며, 각 $j$에서 $k$번째 항이 $c(j, k)$, $d(j, k)$인 두 실수열의 쌍이 $A_j$의 영 덮개열이라 하자. 자연수 $j$마다 $\sum_{k=N}^{\infty} \bigl(d(j, k) - c(j, k)\bigr) < (1/2)^j$인 자연수 $N$ 가운데 가장 작은 것을 $N_j$라 하면 $N_j$가 정해지고, 자연수 $m$마다 $j = \kappa_1(m)$, $l = \kappa_2(m)$으로 두어
   $$
   \begin{gathered} c'_m = c(j, l + N_j - 1), \\ d'_m = d(j, l + N_j - 1) \end{gathered}
   $$
   로 정한 쌍은 총길이가 $1$ 이하인 $\bigcup_{j=1}^{\infty} A_j$의 영 덮개열이다. 따라서 $\bigcup_{j=1}^{\infty} A_j$는 영집합이다.
5. (유한 개의 영집합의 합집합) $N$이 $0$ 이상인 정수이고 $(A_n)$이 $\mathbb{R}$의 집합열이며 $1 \le n \le N$인 모든 $n$에서 $A_n$이 영집합이면 $\bigcup_{n=1}^{N} A_n$은 영집합이다. 특히 두 영집합의 합집합은 영집합이다. 이 문장은 영 덮개열이 주어져 있다고 가정하지 않는다.
6. (계단함수의 급수가 발산하는 점) $(g_n)$이 $\mathbb{R}$에서 $\mathbb{R}$로의 사상의 열로서, 모든 자연수 $n$에서 $g_n$은 계단함수이고 모든 실수 $x$에서 $0 \le g_n(x)$이며, $C = \sum_{n=1}^{\infty} \int_{\mathbb{R}} g_n < \infty$라 하자. 실수 $x$에서 $\sum_{n=1}^{\infty} g_n(x)$는 $[0, \infty]$의 합이다.
   - (i) $E = \{x \in \mathbb{R} : \sum_{n=1}^{\infty} g_n(x) = \infty\}$는 영집합이다. 더 자세히, 자연수 $M$, $k$와 실수 $x$에 대하여 $G_M(x) = \sum_{n=1}^{M} g_n(x)$, $E_{k,M} = \{x \in \mathbb{R} : G_M(x) > 2^k\}$로 두고, $D_{k,1} = E_{k,1}$, $M \ge 2$이면 $D_{k,M} = E_{k,M} - E_{k,M-1}$로 두면, $\chi_{D_{k,M}}$은 계단함수이다. $D_{k,M}$의 표준 조각열을 $(p^{k,M}_i)_i$, $(q^{k,M}_i)_i$라 하고, 자연수 $m$마다 $k = \kappa_1(m)$, $M = \kappa_1(\kappa_2(m))$, $i = \kappa_2(\kappa_2(m))$으로 두어
     $$
     c_m = p^{k,M}_i, \qquad d_m = q^{k,M}_i
     $$
     로 정한 쌍은 총길이가 $C$ 이하인 $E$의 영 덮개열이다. 이것을 $(g_n)$의 **표준 영 덮개열**이라 한다. 이것은 $(g_n)$만으로 정해진다.
   - (ii) 거꾸로, 모든 $n$에서 $c_n \le d_n$이고 $\sum_{n=1}^{\infty} (d_n - c_n) < \infty$인 실수열 $(c_n)$, $(d_n)$에 대하여 $g_n = \chi_{[c_n, d_n)}$으로 두면 $(g_n)$은 위의 가정을 만족하고 $\sum_{n=1}^{\infty} \int_{\mathbb{R}} g_n = \sum_{n=1}^{\infty} (d_n - c_n)$이고, $\sum_{n=1}^{\infty} \chi_{[c_n, d_n)}(x) = \infty$인 실수 $x$ 전체의 집합은 $\limsup_{n \to \infty} [c_n, d_n)$이다. 따라서 $A \subseteq \mathbb{R}$가 영집합인 것은 정확히 위의 가정을 만족하는 어떤 $(g_n)$에 대하여 $A \subseteq E$일 때이다.
7. (길이가 양수인 구간) $a < b$인 실수 $a$, $b$에 대하여 $[a, b)$를 포함하는 $\mathbb{R}$의 부분집합은 영집합이 아니다. 특히 $[a, b)$, $[a, b]$, $\mathbb{R}$은 영집합이 아니다.
:::

:::english
The set $[a, b)$ ($a \le b$) and its length, step functions with their integrals $\int_{\mathbb{R}}$, and standard piece sequences are as in the entry on step functions. Open intervals $(\alpha, \beta)$ and closed intervals $[a, b]$ are as in the entry on intervals and are used only when $\alpha < \beta$, $a < b$. Sequences of sets, their unions, and the limit superior $\limsup_{n \to \infty}$ are as in the entry on sequences of sets; real sequences and sequences of maps from $\mathbb{R}$ to $\mathbb{R}$ are as in the corresponding entries. $[0, \infty]$ with sums $\sum_{n=1}^{\infty}$, $\sum_{n=m}^{\infty}$ of its sequences and double-indexed sequences are as in the corresponding entries. The pairing function $\pi$ with $\kappa_1$, $\kappa_2$ and countability are as in the corresponding entries. Powers $(1/2)^n$, $2^k$ are powers of real numbers.

**Null sets.** A subset $A$ of $\mathbb{R}$ is a **null set** precisely when there are real sequences $(c_n)$, $(d_n)$ with $c_n \le d_n$ for every natural number $n$ such that
$$
\begin{gathered} \sum_{n=1}^{\infty} (d_n - c_n) < \infty, \\ A \subseteq \limsup_{n \to \infty} \, [c_n, d_n). \end{gathered}
$$
The right-hand side is the limit superior of the sequence of sets whose $n$-th term is $[c_n, d_n)$, and by item (8) of the entry on sequences of sets the second condition says precisely that for every element $x$ of $A$ and every natural number $M$ there is a natural number $n$ with $M \le n$ and $x \in [c_n, d_n)$. Such a pair of real sequences $\bigl((c_n), (d_n)\bigr)$ is called a **null cover sequence** of $A$, and $\sum_{n=1}^{\infty} (d_n - c_n)$ is called its **total length**.

The following hold.

1. (Tails and small covers by open intervals) Let $A$ be a null set.
   - (i) If $\bigl((c_n), (d_n)\bigr)$ is a null cover sequence of $A$ and $N \ge 0$ is an integer, then the pair of real sequences whose $l$-th terms are $c_{l+N}$, $d_{l+N}$ is also a null cover sequence of $A$, and its total length is $\sum_{n=N+1}^{\infty} (d_n - c_n)$. For every positive real $\varepsilon$ there is an $N$ for which this total length is less than $\varepsilon$.
   - (ii) For every positive real $\varepsilon$ there are real sequences $(\alpha_n)$, $(\beta_n)$ with $\alpha_n < \beta_n$ for every natural number $n$ such that $A \subseteq \bigcup_{n=1}^{\infty} (\alpha_n, \beta_n)$ and $\sum_{n=1}^{\infty} (\beta_n - \alpha_n) < \varepsilon$.
2. (The empty set and subsets) $\emptyset$ is a null set. If $A$ is a null set and $B \subseteq A$, then every null cover sequence of $A$ is a null cover sequence of $B$, and $B$ is a null set.
3. (Sets covered by an enumeration) If $e : \mathbb{N} \to \mathbb{R}$ is a function and $A \subseteq \{e(k) : k \in \mathbb{N}\}$, then the pair defined for each natural number $m$ by
   $$
   \begin{gathered} c_m = e(\kappa_1(m)), \\ d_m = e(\kappa_1(m)) + \left(\tfrac{1}{2}\right)^m \end{gathered}
   $$
   is a null cover sequence of $A$ of total length $1$. Hence every countable subset of $\mathbb{R}$ is a null set. In particular, one-point sets, finite subsets of $\mathbb{R}$, $\mathbb{Z}$, and $\mathbb{Q}$ are null sets.
4. (Unions with a given family of null cover sequences) Let $(A_j)$ be a sequence of subsets of $\mathbb{R}$, and let $c, d : \mathbb{N} \times \mathbb{N} \to \mathbb{R}$ be functions with $c(j, k) \le d(j, k)$ for all natural numbers $j$, $k$ such that, for each $j$, the pair of real sequences whose $k$-th terms are $c(j, k)$, $d(j, k)$ is a null cover sequence of $A_j$. For each natural number $j$ let $N_j$ be the least natural number $N$ with $\sum_{k=N}^{\infty} \bigl(d(j, k) - c(j, k)\bigr) < (1/2)^j$; then $N_j$ is defined, and the pair defined for each natural number $m$, with $j = \kappa_1(m)$ and $l = \kappa_2(m)$, by
   $$
   \begin{gathered} c'_m = c(j, l + N_j - 1), \\ d'_m = d(j, l + N_j - 1) \end{gathered}
   $$
   is a null cover sequence of $\bigcup_{j=1}^{\infty} A_j$ of total length at most $1$. Hence $\bigcup_{j=1}^{\infty} A_j$ is a null set.
5. (Finite unions of null sets) If $N \ge 0$ is an integer, $(A_n)$ is a sequence of subsets of $\mathbb{R}$, and $A_n$ is a null set for every $n$ with $1 \le n \le N$, then $\bigcup_{n=1}^{N} A_n$ is a null set. In particular, the union of two null sets is a null set. This statement does not assume that null cover sequences are given.
6. (Points where a series of step functions diverges) Let $(g_n)$ be a sequence of maps from $\mathbb{R}$ to $\mathbb{R}$ such that $g_n$ is a step function and $0 \le g_n(x)$ for every natural number $n$ and every real $x$, and $C = \sum_{n=1}^{\infty} \int_{\mathbb{R}} g_n < \infty$. For real $x$, $\sum_{n=1}^{\infty} g_n(x)$ is the sum in $[0, \infty]$.
   - (i) $E = \{x \in \mathbb{R} : \sum_{n=1}^{\infty} g_n(x) = \infty\}$ is a null set. More precisely, for natural numbers $M$, $k$ and real $x$ put $G_M(x) = \sum_{n=1}^{M} g_n(x)$ and $E_{k,M} = \{x \in \mathbb{R} : G_M(x) > 2^k\}$, and put $D_{k,1} = E_{k,1}$ and $D_{k,M} = E_{k,M} - E_{k,M-1}$ for $M \ge 2$; then $\chi_{D_{k,M}}$ is a step function. Let $(p^{k,M}_i)_i$, $(q^{k,M}_i)_i$ be the standard piece sequence of $D_{k,M}$; then the pair defined for each natural number $m$, with $k = \kappa_1(m)$, $M = \kappa_1(\kappa_2(m))$, and $i = \kappa_2(\kappa_2(m))$, by
     $$
     c_m = p^{k,M}_i, \qquad d_m = q^{k,M}_i
     $$
     is a null cover sequence of $E$ of total length at most $C$. It is called the **standard null cover sequence** of $(g_n)$. It is determined by $(g_n)$ alone.
   - (ii) Conversely, for real sequences $(c_n)$, $(d_n)$ with $c_n \le d_n$ for every $n$ and $\sum_{n=1}^{\infty} (d_n - c_n) < \infty$, putting $g_n = \chi_{[c_n, d_n)}$ gives a sequence $(g_n)$ satisfying the hypotheses above with $\sum_{n=1}^{\infty} \int_{\mathbb{R}} g_n = \sum_{n=1}^{\infty} (d_n - c_n)$, and the set of all real $x$ with $\sum_{n=1}^{\infty} \chi_{[c_n, d_n)}(x) = \infty$ is $\limsup_{n \to \infty} [c_n, d_n)$. Hence $A \subseteq \mathbb{R}$ is a null set precisely when $A \subseteq E$ for some $(g_n)$ satisfying the hypotheses above.
7. (Intervals of positive length) For reals $a < b$, no subset of $\mathbb{R}$ containing $[a, b)$ is a null set. In particular, $[a, b)$, $[a, b]$, and $\mathbb{R}$ are not null sets.
:::

## 직관

영집합은 "길이가 없다고 해도 될 만큼 작은 집합"입니다. 한 점은 아무리 짧은 칸으로도 덮을 수 있으므로 작습니다. 점이 끝없이 많아도 그 점들을 자연수로 번호 붙여 늘어놓을 수 있으면, 점마다 덮는 칸의 길이를 $1/2$, $1/4$, $1/8$, …처럼 줄여 가면 칸의 길이를 모두 더해도 $1$을 넘지 않습니다. 이 항목의 정의는 여기에 한 가지를 더 요구합니다. 길이의 합이 유한한 칸의 열 하나가, 집합의 각 점을 한 번이 아니라 끝없이 여러 번 덮어야 합니다.

이렇게 정의하면 "얼마든지 작게 덮을 수 있다"는 것이 열 하나에 담깁니다. 열의 앞부분을 버린 꼬리도 각 점을 여전히 덮고, 꼬리의 길이의 합은 얼마든지 작아지기 때문입니다. 이것이 (1)입니다. 보통의 정의는 $\varepsilon$마다 덮개가 있다는 것인데, 그 정의에서 출발하는 흔한 증명은 $\varepsilon = 1/2, 1/4, \dots$마다 덮개를 하나씩 고릅니다. 이 강의는 그런 선택을 하지 않으므로 덮개열 하나를 정의에 둡니다.

같은 까닭으로 (4)는 영집합들의 합집합을 다룰 때 각 집합의 영 덮개열이 하나의 족으로 주어져 있다고 가정합니다. 집합이 유한 개이면 덮개를 차례로 하나씩 가져오면 되므로 (5)처럼 덮개를 가정하지 않아도 됩니다. (6)은 뒤 단원이 가장 많이 쓰는 꼴입니다. 0 이상인 계단함수를 끝없이 더한 값이 $\infty$가 되는 점들은, 함수들의 적분의 합이 유한하기만 하면 영집합이고, 그 영 덮개열이 함수열에서 식으로 정해집니다.

## 증명

:::idea
꼬리를 자르고, 각 칸을 조금 넓히고, 짝짓기 함수로 여러 열을 한 줄로 늘어놓는 세 가지 조작으로 모든 진술을 얻는다. (6)은 높이 $2^k$를 넘는 점의 집합을 $k$마다 만들어 그 표준 조각열을 늘어놓고, (7)은 길이의 준가법성으로 꼬리의 길이가 $b - a$ 이상임을 보인다.
:::

:::hint
$\sum_{n=1}^{\infty} t_n$이 실수이면, 어떤 번호부터의 꼬리의 합은 주어진 양수보다 작다. 상극한에 드는 점은 그 꼬리의 칸에도 든다.
:::

:::hint
(6)에서 $x \in E$이면 모든 $k$에서 $G_M(x) > 2^k$인 $M$이 있다. 그 점은 어떤 $D_{k,M}$의 조각에 들고, 그 조각의 번호는 $k$ 이상이다.
:::

:::proof
아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이고, "합 항목"은 [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]], "확장된 실수 항목"은 [[extended-nonnegative-reals]], "계단함수 항목"은 [[step-function]], "가법성 항목"은 [[countable-additivity-of-length|길이의 가산 가법성]], "짝짓기 항목"은 [[pairing-of-natural-numbers|ℕ × ℕ 과 ℕ 의 전단사]]이다. 먼저 꼬리에 관한 사실을 보인다.

- (가) $(t_n)$이 $0$ 이상인 실수의 수열이고 $S = \sum_{n=1}^{\infty} t_n < \infty$이며 $\eta$가 양수이면, $0$ 이상인 정수 $N$이 있어 $\sum_{n=N+1}^{\infty} t_n < \eta$이다.

$S < \eta$이면 $N = 0$으로 두면 된다($\sum_{n=1}^{\infty}$이다). 아니면 $S - \eta$는 $0$ 이상인 실수이고 $S - \eta < S$이므로, 확장된 실수 항목의 (5)의 (v)와 합의 정의(부분합의 상한)에 의해 $S - \eta < \sum_{n=1}^{N} t_n$인 자연수 $N$이 있다. 합 항목의 (4)에 의해 $S = \sum_{n=1}^{N} t_n + \sum_{n=N+1}^{\infty} t_n$이고 모두 실수이므로 $\sum_{n=N+1}^{\infty} t_n = S - \sum_{n=1}^{N} t_n < \eta$이다.

또 영 덮개열 $\bigl((c_n), (d_n)\bigr)$의 꼬리에 관하여 다음이 성립한다.

- (나) $A$의 영 덮개열 $\bigl((c_n), (d_n)\bigr)$과 $0$ 이상인 정수 $N$에 대하여, $A$의 모든 원소 $x$와 모든 자연수 $M$에 대하여 $M \le l$이고 $x \in [c_{l+N}, d_{l+N})$인 자연수 $l$이 있다. 특히 $A \subseteq \bigcup_{l=1}^{\infty} [c_{l+N}, d_{l+N})$이다.

정의를 $M + N$에 쓰면 $M + N \le n$이고 $x \in [c_n, d_n)$인 $n$이 있고, $l = n - N$은 $M \le l$인 자연수이다. 둘째 문장은 $M = 1$인 경우와 [[sequence-of-sets|집합열]]의 (1)이다.

**(1)** (i): (나)에 의해 꼬리의 쌍은 $A$를 덮는 조건을 만족하고, $\sum_{n=N+1}^{\infty}$의 정의에 의해 그 총길이는 $\sum_{n=N+1}^{\infty} (d_n - c_n)$이며 합 항목의 (4)에 의해 이것은 $\sum_{n=1}^{\infty} (d_n - c_n)$ 이하이므로 유한하다. 마지막 문장은 (가)이다. (ii): $\bigl((c_n), (d_n)\bigr)$을 $A$의 영 덮개열이라 하자. (가)를 $t_n = d_n - c_n$, $\eta = \varepsilon/2$에 써서 $N$을 얻는다. 자연수 $l$마다
$$
\begin{gathered} \alpha_l = c_{l+N} - \frac{\varepsilon}{4}\left(\frac{1}{2}\right)^l, \\ \beta_l = d_{l+N} \end{gathered}
$$
으로 두면 $\alpha_l < c_{l+N} \le d_{l+N} = \beta_l$이고 $[c_{l+N}, d_{l+N}) \subseteq (\alpha_l, \beta_l)$이므로, (나)와 집합열의 (2)에 의해 $A \subseteq \bigcup_{l=1}^{\infty} (\alpha_l, \beta_l)$이다. 합 항목의 (5)와 $\sum_{n=N+1}^{\infty}$의 정의, [[geometric-series|등비급수]]의 (2)와 합 항목의 (3)에 의해
$$
\begin{aligned} \sum_{l=1}^{\infty} (\beta_l - \alpha_l) &= \sum_{n=N+1}^{\infty} (d_n - c_n) \\ &\quad + \frac{\varepsilon}{4} \sum_{l=1}^{\infty} \left(\frac{1}{2}\right)^l \\ &< \frac{\varepsilon}{2} + \frac{\varepsilon}{4} < \varepsilon \end{aligned}
$$
이다($\sum_{l=1}^{\infty} (1/2)^l$은 첫째 항과 공비가 $1/2$인 등비급수의 합 $1$이다).

**(2)** 모든 $n$에서 $c_n = d_n = 0$이면 총길이는 $0$이고 $\emptyset$은 모든 집합의 부분집합이므로 $\emptyset$은 영집합이다. $B \subseteq A \subseteq \limsup_{n \to \infty} [c_n, d_n)$이므로 $A$의 영 덮개열은 $B$의 영 덮개열이다.

**(3)** 모든 $m$에서 $(1/2)^m > 0$이므로 $c_m < d_m$이고, 총길이는 $\sum_{m=1}^{\infty} (1/2)^m = 1$이다. $x \in A$와 자연수 $M$이 주어지면 $x = e(k)$인 $k$가 있다. $m = \pi(k, M)$으로 두면 짝짓기 항목의 (1)에 의해 $\kappa_1(m) = k$이고 그 (4)에 의해 $M \le m$이며, $c_m = e(k) = x < d_m$이므로 $x \in [c_m, d_m)$이다. 따라서 이 쌍은 $A$의 영 덮개열이다. $A$가 가산이라 하자. $A = \emptyset$이면 (2)에 의해 영집합이다. $A \ne \emptyset$이면 [[rationals-are-countable|유리수의 가산성]]의 (2)에 의해 $\mathbb{N}$에서 $A$로의 전사 $s$가 있고, $s$를 공역을 $\mathbb{R}$로 둔 함수 $e$로 보면 $A = \{e(k) : k \in \mathbb{N}\}$이므로 $A$는 영집합이다. 유한집합은 [[countably-infinite-set|가산 무한 집합]]의 정의에 의해 가산이고, 한 점으로 된 집합은 원소를 $1$개 갖는 유한집합이다. $\mathbb{Z}$는 [[n-and-z-have-equal-cardinality|ℕ 과 ℤ 의 크기]]에 의해, $\mathbb{Q}$는 유리수의 가산성의 (5)에 의해 가산 무한이므로 가산이다.

**(4)** 자연수 $j$를 고정하고 $T_j = \sum_{k=1}^{\infty} \bigl(d(j, k) - c(j, k)\bigr)$로 두면 $T_j < \infty$이다. (가)를 $\eta = (1/2)^j$에 쓰면 $0$ 이상인 정수 $N'$이 있어 $\sum_{k=N'+1}^{\infty} \bigl(d(j, k) - c(j, k)\bigr) < (1/2)^j$이므로, 그 조건을 만족하는 자연수 전체의 집합은 $N' + 1$을 원소로 갖는다. [[well-ordering-principle|정렬 원리]]에 의해 가장 작은 원소 $N_j$가 하나로 정해진다. 따라서 $c'_m$, $d'_m$은 $m$에 대한 식으로 정해진 실수이고([[sequence]]의 (1)), 모든 $m$에서 $c'_m \le d'_m$이다.

*총길이.* $(j, l)$에서의 값이 $d(j, l + N_j - 1) - c(j, l + N_j - 1)$인 이중첨수 원소열을 $\pi$로 한 줄로 늘어놓은 것이 $m$번째 항이 $d'_m - c'_m$인 원소열이다. [[nonnegative-double-series|0 이상인 이중급수]]의 (2), 합 항목의 $\sum_{k=N_j}^{\infty}$의 정의와 (5), 등비급수의 (2)에 의해
$$
\begin{aligned} &\sum_{m=1}^{\infty} (d'_m - c'_m) \\ &\quad = \sum_{j=1}^{\infty} \sum_{k=N_j}^{\infty} \bigl(d(j, k) - c(j, k)\bigr) \\ &\quad \le \sum_{j=1}^{\infty} \left(\frac{1}{2}\right)^j = 1 \end{aligned}
$$
이다.

*덮기.* $x \in \bigcup_{j=1}^{\infty} A_j$와 자연수 $M$이 주어지면 집합열의 (1)에 의해 $x \in A_j$인 $j$가 있다. $j$번째 영 덮개열에 (나)를 $N = N_j - 1$로 쓰면 $M \le l$이고 $x \in [c(j, l + N_j - 1), d(j, l + N_j - 1))$인 자연수 $l$이 있다. $m = \pi(j, l)$로 두면 짝짓기 항목의 (1)에 의해 $\kappa_1(m) = j$, $\kappa_2(m) = l$이므로 $x \in [c'_m, d'_m)$이고, 그 (4)에 의해 $M \le l \le m$이다.

**(5)** 먼저 두 영집합 $A$, $B$의 합집합을 보인다. $A$의 영 덮개열 $\bigl((c_k), (d_k)\bigr)$과 $B$의 영 덮개열 $\bigl((c''_k), (d''_k)\bigr)$을 하나씩 잡는다. $j = 1$이면 $c(j, k) = c_k$, $d(j, k) = d_k$, $A_j = A$로, $j \ge 2$이면 $c(j, k) = c''_k$, $d(j, k) = d''_k$, $A_j = B$로 두면 (4)의 가정이 성립하고 $\bigcup_{j=1}^{\infty} A_j = A \cup B$이므로(집합열의 (1)) $A \cup B$는 영집합이다. 이제 $N$에 관한 귀납법으로 보인다. $N = 0$이면 집합열의 (3)에 의해 합집합은 $\emptyset$이고 (2)에 의해 영집합이다. $N$에서 성립하면, 집합열의 (3)에 의해 $\bigcup_{n=1}^{N+1} A_n = \bigl(\bigcup_{n=1}^{N} A_n\bigr) \cup A_{N+1}$이고 두 영집합의 합집합이므로 영집합이다.

**(6)의 (i)** *준비.* 계단함수 항목의 (5)에 의해 각 $G_M$은 계단함수이고, 그 (6)의 (i)에 의해 $\int_{\mathbb{R}} G_M = \sum_{n=1}^{M} \int_{\mathbb{R}} g_n \le C$이다(합 항목의 (2)). 모든 $x$에서 $0 \le G_M(x)$이고 $G_{M+1}(x) = G_M(x) + g_{M+1}(x) \ge G_M(x)$이다([[finite-sum-of-reals]]의 (3)). $2^k$은 양수이므로 계단함수 항목의 (8)에 의해 $\chi_{E_{k,M}}$은 계단함수이고
$$
\begin{gathered} 2^k \int_{\mathbb{R}} \chi_{E_{k,M}} \le \int_{\mathbb{R}} G_M \le C, \\ \int_{\mathbb{R}} \chi_{E_{k,M}} \le C \left(\frac{1}{2}\right)^k \end{gathered}
$$
이다. $k$를 고정하면 $G_M$이 $M$에 따라 증가하므로 $M$번째 항이 $E_{k,M}$인 집합열은 증가한다. 그 집합열에 집합열의 (7)과 (6)을 쓰면 $D_{k,M}$은 그 (7)의 $E_M$과 같고, 따라서 $M$에 대하여 서로소이며, 모든 $K$에서 $\bigcup_{M=1}^{K} D_{k,M} = E_{k,K}$이고 $\bigcup_{M=1}^{\infty} D_{k,M} = \bigcup_{M=1}^{\infty} E_{k,M}$이다. $M \ge 2$이면 $E_{k,M-1} \subseteq E_{k,M}$이므로 [[indicator-function|지시함수]]의 (3)과 (2)에 의해 $\chi_{D_{k,M}} = \chi_{E_{k,M}} - \chi_{E_{k,M-1}}$이고, 계단함수 항목의 (5)에 의해 $\chi_{D_{k,M}}$은 계단함수이다. 지시함수의 (6)의 (i)과 계단함수 항목의 (6)의 (i)에 의해
$$
\begin{aligned} \sum_{M=1}^{K} \int_{\mathbb{R}} \chi_{D_{k,M}} &= \int_{\mathbb{R}} \chi_{E_{k,K}} \\ &\le C\left(\frac{1}{2}\right)^k \end{aligned}
$$
이므로, 합의 정의에 의해 $\sum_{M=1}^{\infty} \int_{\mathbb{R}} \chi_{D_{k,M}} \le C (1/2)^k$이다. 표준 조각열은 계단함수 항목의 (7)의 (ii)에 의해 $D_{k,M}$만으로 정해지므로 $c_m$, $d_m$은 $m$에 대한 이미 정해진 실수이고 $c_m \le d_m$이다.

*총길이.* 자연수 $k$, $M$, $i$에 대하여 $a^{k}_{M,i} = q^{k,M}_i - p^{k,M}_i$로 두고, 자연수 $k$, $r$에 대하여 $b_{k,r} = a^{k}_{\kappa_1(r), \kappa_2(r)}$로 두면 $d_m - c_m = b_{\kappa_1(m), \kappa_2(m)}$이다. 0 이상인 이중급수의 (2)를 두 번 쓰고 계단함수 항목의 (7)의 (ii)를 쓰면
$$
\begin{aligned} \sum_{m=1}^{\infty} (d_m - c_m) &= \sum_{k=1}^{\infty} \sum_{r=1}^{\infty} b_{k,r} \\ &= \sum_{k=1}^{\infty} \sum_{M=1}^{\infty} \sum_{i=1}^{\infty} a^{k}_{M,i} \\ &= \sum_{k=1}^{\infty} \sum_{M=1}^{\infty} \int_{\mathbb{R}} \chi_{D_{k,M}} \end{aligned}
$$
이고, 합 항목의 (5)와 등비급수의 (2)에 의해 이것은 $\sum_{k=1}^{\infty} C (1/2)^k = C$ 이하이다.

*덮기.* $x \in E$와 자연수 $M_0$이 주어졌다고 하자. $k = M_0$으로 둔다. 각 $M$에서 $G_M(x)$는 실수의 유한 합이고 합 항목의 유한 합의 정의에 의해 $[0, \infty]$의 유한 합과 같으므로, $\sum_{n=1}^{\infty} g_n(x) = \sup\{G_M(x) : M \in \mathbb{N}\} = \infty$이다. $2^k < \infty$이므로 확장된 실수 항목의 (5)의 (v)에 의해 $2^k < G_M(x)$인 $M$이 있고 $x \in E_{k,M} \subseteq \bigcup_{M'=1}^{\infty} D_{k,M'}$이다. 따라서 $x \in D_{k,M'}$인 $M'$이 있고, 표준 조각열의 성질에 의해 $x \in [p^{k,M'}_i, q^{k,M'}_i)$인 $i$가 있다. $r = \pi(M', i)$, $m = \pi(k, r)$로 두면 짝짓기 항목의 (1)에 의해 $\kappa_1(m) = k$, $\kappa_2(m) = r$, $\kappa_1(r) = M'$, $\kappa_2(r) = i$이므로 $x \in [c_m, d_m)$이고, 그 (4)에 의해 $M_0 = k \le m$이다. 따라서 $E \subseteq \limsup_{m \to \infty} [c_m, d_m)$이다. 이 쌍을 정하는 데 쓴 것은 모두 $(g_n)$으로 정해지는 대상이다.

**(6)의 (ii)** 계단함수 항목의 (4)의 (iii)에 의해 $g_n = \chi_{[c_n, d_n)}$은 계단함수이고 $\int_{\mathbb{R}} g_n = d_n - c_n$이며, 지시함수의 (1)에 의해 $0 \le g_n(x)$이다. 실수 $x$마다 $S_K(x) = \sum_{n=1}^{K} \chi_{[c_n, d_n)}(x)$로 둔다.

$x \in \limsup_{n \to \infty} [c_n, d_n)$이라 하자. $0$ 이상인 모든 정수 $K$에 대하여 $K \le S_N(x)$인 자연수 $N$이 있음을 $K$에 관한 귀납법으로 보인다. $K = 0$이면 $N = 1$이다. $K \le S_N(x)$이면 집합열의 (8)에 의해 $N + 1 \le n$이고 $x \in [c_n, d_n)$인 $n$이 있고, [[splitting-and-shifting-finite-sums|유한 합의 쪼개기]]의 (1)과 [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 (6)에 의해 $S_n(x) \ge S_N(x) + \chi_{[c_n, d_n)}(x) \ge K + 1$이다. 따라서 부분합 전체의 집합은 위로 유계가 아니고, 확장된 실수 항목의 (5)의 (iv)에 의해 $\sum_{n=1}^{\infty} \chi_{[c_n, d_n)}(x) = \infty$이다. 거꾸로 $x \notin \limsup_{n \to \infty} [c_n, d_n)$이면 집합열의 (8)에 의해 어떤 자연수 $M$이 있어 $M \le n$인 모든 $n$에서 $\chi_{[c_n, d_n)}(x) = 0$이다. 그러면 모든 $K$에서 $S_K(x) \le M$이다. $K < M$이면 항이 $1$ 이하인 $K$개의 합이고, $M \le K$이면 쪼개기의 (1)에 의해 $S_K(x) = S_{M-1}(x)$이기 때문이다(유한 합의 선형성과 부등식의 (2), (4)). 따라서 확장된 실수 항목의 (5)의 (iv)에 의해 합은 실수이다.

마지막 문장: $A$가 영집합이면 그 영 덮개열로 만든 $(g_n)$에서 $A \subseteq \limsup_{n \to \infty} [c_n, d_n) = E$이다. 거꾸로 $A \subseteq E$이면 (i)에 의해 $E$는 영집합이고 (2)에 의해 $A$도 영집합이다.

**(7)** $a < b$이고 $[a, b) \subseteq A$인 $A$가 영 덮개열 $\bigl((c_n), (d_n)\bigr)$을 갖는다고 하자. (가)를 $\eta = b - a$에 써서 $N$을 얻고 (나)를 쓰면 $[a, b) \subseteq \bigcup_{l=1}^{\infty} [c_{l+N}, d_{l+N})$이다. 가법성 항목의 (2)와 $\sum_{n=N+1}^{\infty}$의 정의에 의해
$$
\begin{aligned} b - a &\le \sum_{l=1}^{\infty} (d_{l+N} - c_{l+N}) \\ &= \sum_{n=N+1}^{\infty} (d_n - c_n) < b - a \end{aligned}
$$
이 되어 모순이다. $[a, b] \supseteq [a, b)$이고 $\mathbb{R} \supseteq [a, b)$이므로 특히 $[a, b]$와 $\mathbb{R}$도 영집합이 아니다. $\blacksquare$
:::

## 예시와 반례

:::example[0 에서만 끝없이 쌓이는 계단함수의 급수]
$g_n = \chi_{[0, (1/2)^n)}$이라 합시다. $\int_{\mathbb{R}} g_n = (1/2)^n$이므로 $C = 1$이고 (6)이 쓰입니다. $x = 0$이면 모든 $g_n(0) = 1$이어서 $\sum_{n=1}^{\infty} g_n(0) = \infty$입니다. $x < 0$이면 모든 항이 $0$입니다. $x > 0$이면 $(1/2)^n$이 $0$으로 수렴하므로 $(1/2)^N \le x$인 $N$이 있고, $N \le n$이면 $(1/2)^n \le (1/2)^N \le x$이어서 $g_n(x) = 0$입니다. 그래서 합은 $N - 1$ 이하인 실수입니다. 따라서 $E = \{0\}$이고, (3)이 말하는 대로 영집합입니다. 이 예에서 $g_n(x)$의 합이 $x = 0$에서 $\infty$여도 적분의 합은 유한합니다.
:::

:::counterexample[총길이가 무한인 열의 예]
모든 $n$에서 $[c_n, d_n) = [0, 1)$이면 $[0, 1)$의 모든 점이 모든 번호의 칸에 들므로 $[0, 1) \subseteq \limsup_{n \to \infty} [c_n, d_n)$입니다. 그러나 총길이는 $\sum_{n=1}^{\infty} 1 = \infty$이어서 이 열은 영 덮개열이 아닙니다. 실제로 (7)에 의해 $[0, 1)$은 영집합이 아닙니다. 정의에서 총길이가 유한하다는 조건을 빼면 모든 유계 집합이 이런 식으로 덮입니다.
:::

## 확인 질문

:::check[무리수 전체의 집합 ℝ − ℚ 는 영집합인가?]
아닙니다. 영집합이라면 (3)에 의해 $\mathbb{Q}$도 영집합이므로, (5)에 의해 $\mathbb{R} = \mathbb{Q} \cup (\mathbb{R} - \mathbb{Q})$가 영집합이 됩니다. 이것은 (7)과 모순입니다.
:::

:::check[$e(k) = 1/k$로 두면 (3)의 영 덮개열의 처음 세 항은?]
$\kappa_1(1) = 1$, $\kappa_1(2) = 2$, $\kappa_1(3) = 1$입니다(짝짓기 함수의 값 $\pi(1, 1) = 1$, $\pi(2, 1) = 2$, $\pi(1, 2) = 3$). 그래서 $[c_1, d_1) = [1, 3/2)$, $[c_2, d_2) = [1/2, 3/4)$, $[c_3, d_3) = [1, 9/8)$입니다. 점 $1$은 $m = \pi(1, l)$, 곧 $m = 1, 3, 5, 7, \dots$번째 칸에 모두 들어 끝없이 여러 번 덮입니다. 이 영 덮개열은 $\{1/k : k \in \mathbb{N}\}$의 것입니다.
:::
