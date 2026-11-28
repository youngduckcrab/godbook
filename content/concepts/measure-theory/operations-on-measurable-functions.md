---
title: 가측함수의 연산과 극한
title_en: Operations and Limits of Measurable Functions
aliases: [가측함수의 합과 곱, 가측함수열의 극한, 점별 극한의 가측성, 수렴하는 점의 집합, "[0, ∞] 의 하극한", 원소열의 하극한, operations on measurable functions, limits of measurable functions, "liminf in [0, ∞]"]
kind: theorem
field: measure-theory
msc: ["28A20"]
level: undergrad
summary: "가측함수의 합·차·곱이 가측이라는 것을 단순함수 근사로 증명하고, 점마다 유계인 가측함수열의 상한·하한·상극한·하극한과 점별 극한, 함수열이 수렴하는 점의 집합의 가측성을 증명한다. 이어서 [0, ∞] 의 원소열의 하극한과 상극한을 정의하고, [0, ∞] 값 가측함수의 합, 유한 합과 급수, 하극한과 상극한이 가측이라는 것을 증명한다."
requires: [set, subset, set-operations, function, recursion-theorem, family-of-sets, sequence-of-sets, indicator-function, extended-nonnegative-reals, series-in-extended-nonnegative-reals, sigma-algebra, measurable-function, extended-measurable-function, simple-function-approximation, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, archimedean-property, upper-bound-and-supremum, least-upper-bound-property, infimum-exists, sequence, limit-of-sequence, limit-is-unique, limit-of-sum-and-product, convergent-sequence-is-bounded, limit-superior-and-inferior, convergence-iff-limsup-equals-liminf, cauchy-sequence, cauchy-iff-convergent, mathematical-induction, prime-number, well-ordering-principle, geometric-sequence-limit, power-function-is-continuous, borel-sigma-algebra-on-reals, power-of-a-real-number]
proof: full
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 3.2절 Approximation by simple functions, Theorem 3.20 (p.69–70), Corollary 3.21 과 Theorem 3.22–3.23 (p.71); 3.3절 Definition 3.27 (p.73), Theorem 3.32 의 ⇐ 증명과 Remark 3.33 (p.77–78); 3.5절 Exercise 3.14–3.17 (p.83–85), Exercise 3.23 (p.86–87); 2.6절 Exercise 2.31 (p.56); 4.2절 Measure spaces, Example 4.29 (p.105–106)
    checked: original
    note: "출처 Theorem 3.20(p.69–70)은 점마다 유계인 S-가측 함수열에 대하여 처음 k 개의 최소·최대, inf, sup, lim inf = sup_k inf_{j≥k}, lim sup = inf_k sup_{j≥k} 가 가측이라는 것을 {inf ≥ c} = ⋂{f_k ≥ c}, {sup ≤ c} = ⋂{f_k ≤ c} 로 증명한다. 이 항목의 (1)은 처음 k 개의 최소·최대를 싣지 않고, sup 과 inf 를 {sup > c} = ⋃{f_k > c}, {inf < c} = ⋃{f_k < c} 로 증명하며, 상극한·하극한은 해석학 입문의 limit-superior-and-inferior 의 정의(꼬리의 상한·하한이 이루는 수열의 극한)로 읽는다. 출처 Corollary 3.21(p.71)은 점별 극한이 lim inf = lim sup 이라는 것을 Exercise 3.17 로 돌린 뒤 가측성을 얻는다. 이 항목의 (2)는 convergence-iff-limsup-equals-liminf (1)로 같은 일을 한다. 출처 Theorem 3.23(p.71)은 단순함수열 s_k → f, t_k → g 로 γf, f + g, fg 의 가측성을 증명하고, Theorem 3.22 를 거친다. 이 항목의 (3)은 simple-function-approximation (7)의 식으로 정한 열 r_k^f, r_k^g 를 쓴다(지휘자 결정). 출처 Exercise 3.14(p.83)는 유리수로 하는 다른 증명을 연습문제로 둔다. 출처 Exercise 3.15(p.83–84)는 수렴하는 점의 집합을 ⋂_n ⋃_k ⋂_p {|f_k − f_{k+p}| < 1/n} 로 쓰고 가측임을 보이라고 하고, Exercise 3.16 은 a 로 수렴하지 않는 점의 집합을 ⋃_n ⋂_k ⋃_{ℓ≥k} {|f_ℓ − a| > 1/n} 로 쓰게 한다. 이 항목의 (4)는 코시 수열의 정의로 수렴하는 점의 집합을 쓰고, f 로 수렴하는 점의 집합을 같은 꼴로 쓴다. 출처 Example 4.29(p.105–106)는 수렴하는 점의 집합 A 에서 극한, 밖에서 0 으로 정한 함수가 가측으로 잡힐 수 있다고 적는다. 이 항목의 (4)의 마지막 문장과 같다. 출처 Definition 3.27(p.73)은 확장된 실수의 원소열의 lim inf = sup_k inf_{j≥k}, lim sup = inf_k sup_{j≥k} 를 정의한다. 이 항목의 (6)은 같은 식을 [0, ∞] 의 원소열에 정의하고(지휘자 결정), 0 이상인 유계 실수열에서는 해석학 입문의 것과 같다는 것을 (iii)으로 증명한다. 출처 Remark 3.33(p.78)과 Exercise 3.23(p.86–87)은 확장된 실숫값 함수열의 inf, sup, lim inf, lim sup 의 가측성을 연습문제로 둔다. 출처 Theorem 3.32 의 ⇐ 증명(p.77–78)은 {f > c} = ⋃_r ⋃_k ⋂_{n≥k} {s_n > c + 1/r} 로 단순함수열의 극한의 가측성을 보인다. 이 항목의 (5)는 [0, ∞] 값의 합을 단조증가하는 근사열의 상한으로 얻는다. 예시 '집합열의 지시함수의 상극한'은 출처 Exercise 2.31 (b)(p.56)가 lim sup χ_{A_k} = χ_{lim sup A_k} 를 증명하라고 하는 것과 같은 대상이다. 확인 질문 '$X = \\mathbb{R}$이고 $f_k(x) = x^k$일 때 $(f_k(x))$가 수렴하는 점의 집합은?'의 수렴하는 점의 집합은 출처 Exercise 3.15 가 다루는 집합과 같은 종류이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(표준 근사열의 단조성과 오차의 f(x) < k 조건, 출처 Proposition 3.15 에 대한 메모를 원문 대조). 독립 검토 없음."
added: 2026-11-28
---

:::statement
가측공간과 (σ1)–(σ3)은 [[sigma-algebra|σ-대수와 가측공간]]의 것이다. 실숫값 함수와 그 연산, $\mathcal{M}$-가측은 [[measurable-function|가측함수]]의 것이고, $[0, \infty]$ 값 함수, 그 가측성, $[0, \infty]$ 값 함수열과 실숫값 함수열, $\sup_{k \in T} f_k$와 $\inf_{k \in T} f_k$는 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 것이다. 단순함수와 근사열 $s_k^f$, $r_k^f$는 [[simple-function-approximation|단순함수와 단순함수로 근사하기]]의 것이다. $[0, \infty]$와 그 순서, 덧셈, 상한, 하한, 단조증가열의 극한은 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 것이고, $[0, \infty]$의 원소의 유한 합과 무한 합은 [[series-in-extended-nonnegative-reals|0 이상인 확장된 실수의 항의 합]]의 것이다. 실수열의 수렴, 유계, 상극한·하극한은 [[limit-of-sequence]], [[sequence]], [[limit-superior-and-inferior]]의 것이다. 아래에서 $(X, \mathcal{M})$은 가측공간이다.

**실숫값 함수열의 상한과 상극한.** $(f_k)$가 $X$ 위의 실숫값 함수열이고 모든 $x \in X$에서 실수열 $(f_k(x))$가 유계라 하자. 자연수 $n$과 $x$에 대하여 $\{f_k(x) : k \in \mathbb{N},\ n \le k\}$는 공집합이 아니고 유계이므로 실수의 상한과 하한을 갖는다. $x$에서의 값이 각각 $\sup\{f_k(x) : k \in \mathbb{N}\}$, $\inf\{f_k(x) : k \in \mathbb{N}\}$, $\sup\{f_k(x) : k \ge n\}$, $\inf\{f_k(x) : k \ge n\}$, $\limsup_{k \to \infty} f_k(x)$, $\liminf_{k \to \infty} f_k(x)$인 실숫값 함수를 $\sup_k f_k$, $\inf_k f_k$, $\sup_{k \ge n} f_k$, $\inf_{k \ge n} f_k$, $\limsup_k f_k$, $\liminf_k f_k$로 쓴다. 모든 $x$에서 $(f_k(x))$가 수렴하면 $x$에서의 값이 $\lim_{k \to \infty} f_k(x)$인 함수를 $(f_k)$의 **점별 극한**이라 한다.

**$[0, \infty]$의 원소열의 하극한과 상극한.** $(a_k)$가 $[0, \infty]$의 원소열이고 $n$이 자연수이면 $b_n = \inf\{a_k : k \ge n\}$, $c_n = \sup\{a_k : k \ge n\}$은 $[0, \infty]$의 원소이다.
$$
\begin{gathered}
\liminf_{k \to \infty} a_k = \sup\{b_n : n \in \mathbb{N}\}, \\
\limsup_{k \to \infty} a_k = \inf\{c_n : n \in \mathbb{N}\}
\end{gathered}
$$
을 $(a_k)$의 **하극한**, **상극한**이라 한다. 둘 다 $[0, \infty]$의 원소 하나로 정해진다. 같은 이름과 기호를 [[limit-superior-and-inferior]]의 유계인 실수열과 [[sequence-of-sets|집합열]]에도 쓰는데, 실수열 쪽과는 아래 (6)의 (iii)에 의해 둘 다 정해질 때 같은 값이다. $X$ 위의 $[0, \infty]$ 값 함수열 $(f_k)$에서 $x$에서의 값이 $\liminf_{k \to \infty} f_k(x)$, $\limsup_{k \to \infty} f_k(x)$인 함수를 $\liminf_k f_k$, $\limsup_k f_k$로 쓴다.

**$[0, \infty]$ 값 함수의 합.** $f$, $g$가 $X$ 위의 $[0, \infty]$ 값 함수이면 $x$에서의 값이 $f(x) + g(x)$인 함수를 $f + g$로 쓴다. $(f_k)$가 $[0, \infty]$ 값 함수열이고 $N$이 $0$ 이상인 정수이면, $x$에서의 값이 $\sum_{k=1}^{N} f_k(x)$, $\sum_{k=1}^{\infty} f_k(x)$인 함수를 $\sum_{k=1}^{N} f_k$, $\sum_{k=1}^{\infty} f_k$로 쓴다.

다음이 성립한다.

1. (유계인 실숫값 함수열의 상한과 상극한) $(f_k)$가 $X$ 위의 실숫값 함수열이고 모든 $f_k$가 $\mathcal{M}$-가측이며 모든 $x$에서 $(f_k(x))$가 유계이면, 모든 자연수 $n$에서 $\sup_{k \ge n} f_k$와 $\inf_{k \ge n} f_k$가 $\mathcal{M}$-가측이고, $\sup_k f_k$, $\inf_k f_k$, $\limsup_k f_k$, $\liminf_k f_k$가 $\mathcal{M}$-가측이다.
2. (점별 극한) $(f_k)$가 $X$ 위의 실숫값 함수열이고 모든 $f_k$가 $\mathcal{M}$-가측이며 모든 $x$에서 $(f_k(x))$가 수렴하면, 그 점별 극한은 $\mathcal{M}$-가측이다.
3. (합, 차, 곱) $f$, $g$가 $\mathcal{M}$-가측인 실숫값 함수이면 $f + g$, $f - g$, $fg$는 $\mathcal{M}$-가측이다. 실숫값 함수열 $(f_k)$의 모든 $f_k$가 $\mathcal{M}$-가측이면, $0$ 이상인 모든 정수 $N$에서 $x$에서의 값이 $\sum_{k=1}^{N} f_k(x)$인 함수는 $\mathcal{M}$-가측이다.
4. (수렴하는 점의 집합) $(f_k)$가 $X$ 위의 실숫값 함수열이고 모든 $f_k$가 $\mathcal{M}$-가측이라 하자.
   - (i) 실수열 $(f_k(x))$가 수렴하는 $x \in X$ 전체의 집합 $C$는 $\mathcal{M}$의 원소이다.
   - (ii) $f$가 $\mathcal{M}$-가측인 실숫값 함수이면, $(f_k(x))$가 $f(x)$로 수렴하는 $x \in X$ 전체의 집합은 $\mathcal{M}$의 원소이다.
   - (iii) $x \in C$이면 $\lim_{k \to \infty} f_k(x)$, $x \notin C$이면 $0$을 값으로 하는 함수는 $\mathcal{M}$-가측이다.
5. ($[0, \infty]$ 값 함수의 합과 급수) $f$, $g$가 $\mathcal{M}$-가측인 $[0, \infty]$ 값 함수이면 $f + g$는 $\mathcal{M}$-가측이다. $(f_k)$가 $[0, \infty]$ 값 함수열이고 모든 $f_k$가 $\mathcal{M}$-가측이면, $0$ 이상인 모든 정수 $N$에서 $\sum_{k=1}^{N} f_k$와 $\sum_{k=1}^{\infty} f_k$는 $\mathcal{M}$-가측이다.
6. ($[0, \infty]$의 하극한과 상극한) $(a_k)$가 $[0, \infty]$의 원소열이고 $b_n$, $c_n$이 위의 것이라 하자.
   - (i) $(b_n)$은 단조증가인 $[0, \infty]$의 원소열이고 $\liminf_{k \to \infty} a_k = \lim_{n \to \infty} b_n$이다. $n \le k$인 모든 자연수 $n$, $k$에서 $b_n \le a_k \le c_n$이다.
   - (ii) $(a_k)$가 단조증가이면 $\liminf_{k \to \infty} a_k = \lim_{k \to \infty} a_k$이다.
   - (iii) 모든 $a_k$가 실수이고 실수열 $(a_k)$가 유계이면, 이 항목의 $\liminf_{k \to \infty} a_k$와 $\limsup_{k \to \infty} a_k$는 [[limit-superior-and-inferior]]의 하극한, 상극한과 같은 실수이다.
   - (iv) $(f_k)$가 $[0, \infty]$ 값 함수열이고 모든 $f_k$가 $\mathcal{M}$-가측이면, 모든 자연수 $n$에서 $\inf_{k \ge n} f_k$와 $\sup_{k \ge n} f_k$가 $\mathcal{M}$-가측이고 $\liminf_k f_k$와 $\limsup_k f_k$가 $\mathcal{M}$-가측이다.
:::

:::english
Measurable spaces and (σ1)–(σ3) are as in [[sigma-algebra]]. Real-valued functions with their operations and $\mathcal{M}$-measurability are as in [[measurable-function]], and $[0, \infty]$-valued functions, their measurability, sequences of $[0, \infty]$-valued functions and of real-valued functions, $\sup_{k \in T} f_k$ and $\inf_{k \in T} f_k$ are as in [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]. Simple functions and the approximating sequences $s_k^f$, $r_k^f$ are as in [[simple-function-approximation]]. $[0, \infty]$ with its order, addition, suprema, infima, and the limit of a nondecreasing sequence are as in [[extended-nonnegative-reals]], and finite and infinite sums of elements of $[0, \infty]$ are as in [[series-in-extended-nonnegative-reals]]. Convergence, boundedness, and the limit superior and limit inferior of real sequences are as in [[limit-of-sequence]], [[sequence]], and [[limit-superior-and-inferior]]. Below, $(X, \mathcal{M})$ is a measurable space.

**Suprema and limits superior of sequences of real-valued functions.** Let $(f_k)$ be a sequence of real-valued functions on $X$ such that the real sequence $(f_k(x))$ is bounded for every $x \in X$. For a natural number $n$ and $x$, the set $\{f_k(x) : k \in \mathbb{N},\ n \le k\}$ is nonempty and bounded, so it has a real supremum and infimum. The real-valued functions whose values at $x$ are $\sup\{f_k(x) : k \in \mathbb{N}\}$, $\inf\{f_k(x) : k \in \mathbb{N}\}$, $\sup\{f_k(x) : k \ge n\}$, $\inf\{f_k(x) : k \ge n\}$, $\limsup_{k \to \infty} f_k(x)$, $\liminf_{k \to \infty} f_k(x)$ are written $\sup_k f_k$, $\inf_k f_k$, $\sup_{k \ge n} f_k$, $\inf_{k \ge n} f_k$, $\limsup_k f_k$, $\liminf_k f_k$. If $(f_k(x))$ converges for every $x$, the function whose value at $x$ is $\lim_{k \to \infty} f_k(x)$ is called the **pointwise limit** of $(f_k)$.

**Limit inferior and limit superior of a sequence of elements of $[0, \infty]$.** If $(a_k)$ is a sequence of elements of $[0, \infty]$ and $n$ is a natural number, then $b_n = \inf\{a_k : k \ge n\}$ and $c_n = \sup\{a_k : k \ge n\}$ are elements of $[0, \infty]$. We call
$$
\begin{gathered}
\liminf_{k \to \infty} a_k = \sup\{b_n : n \in \mathbb{N}\}, \\
\limsup_{k \to \infty} a_k = \inf\{c_n : n \in \mathbb{N}\}
\end{gathered}
$$
the **limit inferior** and **limit superior** of $(a_k)$. Each is a single element of $[0, \infty]$. The same names and symbols are also used for bounded real sequences in [[limit-superior-and-inferior]] and for sequences of sets in [[sequence-of-sets]]; by item (6)(iii) below, the values agree with the real-sequence ones whenever both are defined. For a sequence $(f_k)$ of $[0, \infty]$-valued functions on $X$, the functions whose values at $x$ are $\liminf_{k \to \infty} f_k(x)$ and $\limsup_{k \to \infty} f_k(x)$ are written $\liminf_k f_k$ and $\limsup_k f_k$.

**Sums of $[0, \infty]$-valued functions.** If $f$ and $g$ are $[0, \infty]$-valued functions on $X$, the function whose value at $x$ is $f(x) + g(x)$ is written $f + g$. If $(f_k)$ is a sequence of $[0, \infty]$-valued functions and $N$ is an integer with $N \ge 0$, the functions whose values at $x$ are $\sum_{k=1}^{N} f_k(x)$ and $\sum_{k=1}^{\infty} f_k(x)$ are written $\sum_{k=1}^{N} f_k$ and $\sum_{k=1}^{\infty} f_k$.

The following hold.

1. (Suprema and limits superior of bounded sequences of real-valued functions) If $(f_k)$ is a sequence of real-valued functions on $X$, every $f_k$ is $\mathcal{M}$-measurable, and $(f_k(x))$ is bounded for every $x$, then $\sup_{k \ge n} f_k$ and $\inf_{k \ge n} f_k$ are $\mathcal{M}$-measurable for every natural number $n$, and $\sup_k f_k$, $\inf_k f_k$, $\limsup_k f_k$, $\liminf_k f_k$ are $\mathcal{M}$-measurable.
2. (Pointwise limits) If $(f_k)$ is a sequence of real-valued functions on $X$, every $f_k$ is $\mathcal{M}$-measurable, and $(f_k(x))$ converges for every $x$, then its pointwise limit is $\mathcal{M}$-measurable.
3. (Sums, differences, products) If $f$ and $g$ are $\mathcal{M}$-measurable real-valued functions, then $f + g$, $f - g$, $fg$ are $\mathcal{M}$-measurable. If every $f_k$ in a sequence $(f_k)$ of real-valued functions is $\mathcal{M}$-measurable, then for every integer $N \ge 0$ the function whose value at $x$ is $\sum_{k=1}^{N} f_k(x)$ is $\mathcal{M}$-measurable.
4. (The set of points of convergence) Let $(f_k)$ be a sequence of real-valued functions on $X$ with every $f_k$ $\mathcal{M}$-measurable.
   - (i) The set $C$ of all $x \in X$ for which the real sequence $(f_k(x))$ converges is an element of $\mathcal{M}$.
   - (ii) If $f$ is an $\mathcal{M}$-measurable real-valued function, then the set of all $x \in X$ for which $(f_k(x))$ converges to $f(x)$ is an element of $\mathcal{M}$.
   - (iii) The function whose value is $\lim_{k \to \infty} f_k(x)$ for $x \in C$ and $0$ for $x \notin C$ is $\mathcal{M}$-measurable.
5. (Sums and series of $[0, \infty]$-valued functions) If $f$ and $g$ are $\mathcal{M}$-measurable $[0, \infty]$-valued functions, then $f + g$ is $\mathcal{M}$-measurable. If $(f_k)$ is a sequence of $[0, \infty]$-valued functions with every $f_k$ $\mathcal{M}$-measurable, then $\sum_{k=1}^{N} f_k$ for every integer $N \ge 0$ and $\sum_{k=1}^{\infty} f_k$ are $\mathcal{M}$-measurable.
6. (Limit inferior and limit superior in $[0, \infty]$) Let $(a_k)$ be a sequence of elements of $[0, \infty]$, with $b_n$, $c_n$ as above.
   - (i) $(b_n)$ is a nondecreasing sequence of elements of $[0, \infty]$ and $\liminf_{k \to \infty} a_k = \lim_{n \to \infty} b_n$. For all natural numbers $n \le k$, $b_n \le a_k \le c_n$.
   - (ii) If $(a_k)$ is nondecreasing, then $\liminf_{k \to \infty} a_k = \lim_{k \to \infty} a_k$.
   - (iii) If every $a_k$ is a real number and the real sequence $(a_k)$ is bounded, then $\liminf_{k \to \infty} a_k$ and $\limsup_{k \to \infty} a_k$ of this entry are the same real numbers as the limit inferior and limit superior of [[limit-superior-and-inferior]].
   - (iv) If $(f_k)$ is a sequence of $[0, \infty]$-valued functions with every $f_k$ $\mathcal{M}$-measurable, then $\inf_{k \ge n} f_k$ and $\sup_{k \ge n} f_k$ are $\mathcal{M}$-measurable for every natural number $n$, and $\liminf_k f_k$ and $\limsup_k f_k$ are $\mathcal{M}$-measurable.
:::

## 직관

가측성은 "값이 $c$보다 큰 점들"이 가측집합이라는 조건이므로, 그런 집합을 가산 번 합치고 교차하는 연산은 가측성을 보존합니다. 상한이 $c$보다 큰 점은 "어떤 $f_k$가 $c$보다 큰 점"이고, 그런 점들의 집합은 $\{f_k > c\}$들의 합집합입니다((1)). 하극한과 상극한은 상한과 하한을 두 번 취한 것이고, 점별 극한은 수렴하는 곳에서 하극한과 같으므로 모두 가측입니다((2)).

합은 그렇게 간단하지 않습니다. "$f(x) + g(x) > c$"를 "$f(x) > c$"와 "$g(x) > c$" 같은 반직선 조건으로 바로 나눌 수 없기 때문입니다. 그래서 두 함수를 단순함수의 열로 다가가고, 단순함수끼리의 합이 단순함수라는 것과 극한이 가측이라는 것을 이어 씁니다((3)). 근사열은 식으로 정한 것이므로 두 함수의 근사열을 함께 써도 고를 것이 없습니다.

$[0, \infty]$에서는 모든 부분집합이 상한과 하한을 가지므로 하극한과 상극한이 아무 원소열에서나 정해집니다. 실수에서는 유계인 수열에만 쓰던 기호를 넓힌 것이고, 둘 다 정해지는 곳에서는 같은 값입니다((6)의 (iii)). 단조증가하는 열의 하극한은 그 열의 극한입니다((6)의 (ii)).

## 증명

:::idea
상한과 하한의 가측성은 "상한이 $c$보다 크다 ⇔ 어떤 항이 $c$보다 크다"를 집합의 등식으로 옮기는 것이고, 나머지는 이것과 극한의 성질, 단순함수 근사를 차례로 엮는 것입니다.
:::

:::hint
(4)의 (i)에서 실수열이 수렴하는 것은 코시 수열인 것과 같고, 코시 수열의 정의의 $\varepsilon$은 $1/j$ 꼴만 보아도 됩니다.
:::

:::hint
(5)의 $f + g$는 $s_k^f + s_k^g$들의 상한입니다. 이 열이 단조증가하는 실숫값 단순함수의 열이라는 것과 단조증가열의 극한이 합과 바뀐다는 것을 씁니다.
:::

:::proof
**준비.** 실수의 순서는 [[real-order-axioms]]와 [[order-properties-of-reals]]로, $[0, \infty]$의 순서는 [[extended-nonnegative-reals]]의 (2)로 다룬다. "원소 판정"은 [[sequence-of-sets|집합열]]의 (1)이다. 공집합이 아니고 위로 유계인 실수의 집합 $E$의 상한은 [[least-upper-bound-property|최소상계 성질]]에 의해 있고, 아래로 유계이면 하한은 [[infimum-exists|하한의 존재]]의 (4)에 의해 있다. 다음 두 사실을 쓴다. (가) 실수 $c$에 대하여 $c < \sup E$인 것은 정확히 $c < e$인 $e \in E$가 있을 때이다. [[upper-bound-and-supremum]]의 (4)가 한쪽이고, 거꾸로 $c < e \le \sup E$이다. (나) $\inf E < c$인 것은 정확히 $e < c$인 $e \in E$가 있을 때이다. 그런 $e$가 없으면 $c$는 $E$의 하계이고 하한의 정의에 의해 $c \le \inf E$이므로 한쪽이 나오고, 거꾸로 $\inf E \le e < c$이다.

**(1)** 자연수 $n$, 실수 $c$에 대하여 $h_n = \sup_{k \ge n} f_k$, $l_n = \inf_{k \ge n} f_k$로 두면 (가)와 (나)와 원소 판정에 의해
$$
\begin{gathered}
\{h_n > c\} = \bigcup_{k=n}^{\infty} \{f_k > c\}, \\
\{l_n < c\} = \bigcup_{k=n}^{\infty} \{f_k < c\}
\end{gathered}
$$
이고, [[measurable-function|가측함수]]의 (2)와 [[sigma-algebra|σ-대수]]의 (2)에 의해 두 집합은 $\mathcal{M}$의 원소이다. 가측함수의 (2)에 의해 $h_n$과 $l_n$은 가측이다. $n = 1$이면 $h_1 = \sup_k f_k$, $l_1 = \inf_k f_k$이다. [[limit-superior-and-inferior]]의 (3)에 의해 각 $x$에서 $(h_n(x))$와 $(l_n(x))$는 유계인 실수열이고, 같은 항목의 (4)에 의해 $\limsup_{k \to \infty} f_k(x) = \inf\{h_n(x) : n \in \mathbb{N}\}$이고 $\liminf_{k \to \infty} f_k(x) = \sup\{l_n(x) : n \in \mathbb{N}\}$이다. 곧 $\limsup_k f_k = \inf_n h_n$이고 $\liminf_k f_k = \sup_n l_n$이다. 함수열 $(h_n)$, $(l_n)$은 가측인 함수들로 된, 점마다 유계인 실숫값 함수열이므로 방금 보인 것($n = 1$의 경우)을 이 두 함수열에 쓰면 두 함수가 가측이다.

**(2)** 각 $x$에서 수렴하는 실수열 $(f_k(x))$는 [[convergent-sequence-is-bounded|수렴하는 수열은 유계라는 정리]]의 (2)에 의해 유계이고, [[convergence-iff-limsup-equals-liminf|수렴과 상극한·하극한]]의 (1)에 의해 그 극한은 상극한과 같다. 따라서 점별 극한은 $\limsup_k f_k$이고 (1)에 의해 가측이다.

**(3)** [[simple-function-approximation|단순함수와 단순함수로 근사하기]]의 (7)에 의해 모든 $k$에서 $r_k^f$와 $r_k^g$는 단순함수이고 모든 $x$에서 $r_k^f(x) \to f(x)$, $r_k^g(x) \to g(x)$이다. 같은 항목의 (5)에 의해 $r_k^f + r_k^g$와 $r_k^f r_k^g$는 단순함수이므로 가측이다. [[limit-of-sum-and-product|합과 곱의 극한]]의 (1)과 (3)에 의해 모든 $x$에서 $(r_k^f(x) + r_k^g(x))$는 $f(x) + g(x)$로, $(r_k^f(x)\,r_k^g(x))$는 $f(x)\,g(x)$로 수렴한다. 이 함수열들은 순서쌍 $(k, x)$마다 값이 식으로 정해지므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 실숫값 함수열이고, (2)에 의해 그 점별 극한 $f + g$와 $fg$는 가측이다. 가측함수의 (5)에 의해 $(-1)g$가 가측이므로 $f - g = f + (-1)g$도 가측이다.

유한 합: $N$에 대한 귀납법으로 보인다. $N = 0$이면 함수는 값이 $0$인 상수함수이므로([[finite-sum-of-reals]]의 빈 합) 가측함수의 (6)에 의해 가측이다. $N$에서 성립하면, [[finite-sum-of-reals]]의 (3)에 의해 $x$에서의 값이 $\sum_{k=1}^{N+1} f_k(x)$인 함수는 $N$일 때의 함수와 $f_{N+1}$의 합이므로 첫 문단에 의해 가측이다.

**(4)** (i) [[cauchy-iff-convergent|코시 수열과 수렴]]의 (1)에 의해 $x \in C$인 것은 정확히 $(f_k(x))$가 [[cauchy-sequence|코시 수열]]일 때이다. 코시 수열의 정의에서 모든 양수 $\varepsilon$ 대신 $1/j$($j$는 자연수) 꼴만 보아도 같다. 한쪽은 $1/j$가 양수이기 때문이고, 거꾸로 양수 $\varepsilon$에는 [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 $1/j < \varepsilon$인 $j$가 있어 $|f_m(x) - f_n(x)| < 1/j$이면 $< \varepsilon$이다. 자연수 $j$, $m$, $n$에 대하여 $E_{j,m,n} = \{x \in X : |f_m(x) - f_n(x)| < 1/j\}$로 두면 (3)과 가측함수의 (5), (2)에 의해 $E_{j,m,n} \in \mathcal{M}$이다. 원소 판정으로
$$
C = \bigcap_{j=1}^{\infty} \bigcup_{N=1}^{\infty} \bigcap_{m=N}^{\infty} \bigcap_{n=N}^{\infty} E_{j,m,n}
$$
이다. 안쪽부터 [[sigma-algebra|σ-대수]]의 (2)를 차례로 쓴다. $j$, $N$, $m$을 고정하면 $n$번째 항이 $E_{j,m,n}$인 집합열은 $\mathcal{M}$의 원소로 된 집합열이므로 $D_{j,N,m} = \bigcap_{n=N}^{\infty} E_{j,m,n} \in \mathcal{M}$이다. $j$, $N$을 고정하면 $m$번째 항이 $D_{j,N,m}$인 집합열에 다시 (2)를 써서 $\bigcap_{m=N}^{\infty} D_{j,N,m} \in \mathcal{M}$이고, 같은 방식으로 $N$에 대한 합집합과 $j$에 대한 교집합도 $\mathcal{M}$의 원소이다.

(ii) [[limit-of-sequence]]의 정의에서 같은 방법으로 $\varepsilon = 1/j$만 보아도 되므로, $F_{j,n} = \{x : |f_n(x) - f(x)| < 1/j\}$로 두면 문장의 집합은 $\bigcap_{j=1}^{\infty} \bigcup_{N=1}^{\infty} \bigcap_{n=N}^{\infty} F_{j,n}$이다. (3)과 가측함수의 (5), (2)에 의해 $F_{j,n} \in \mathcal{M}$이고, (i)처럼 σ-대수의 (2)를 차례로 쓴다.

(iii) (i)에 의해 $C \in \mathcal{M}$이므로 가측함수의 (6)에 의해 $\chi_C$는 가측이고, (3)에 의해 $x$에서의 값이 $f_k(x)\chi_C(x)$인 함수들은 가측이다. $x \in C$이면 그 값은 $f_k(x)$이므로 $\lim_{k \to \infty} f_k(x)$로 수렴하고, $x \notin C$이면 값이 모두 $0$이므로 $0$으로 수렴한다. 따라서 문장의 함수는 이 함수열의 점별 극한이고 (2)에 의해 가측이다.

**(5)** [[simple-function-approximation|단순함수와 단순함수로 근사하기]]의 (6)에 의해 $s_k^f$, $s_k^g$는 값이 $0$ 이상인 단순함수이고, 같은 항목의 (5)에 의해 $u_k = s_k^f + s_k^g$는 단순함수이므로 가측이며 값이 $0$ 이상이다. [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 (3)의 (i)에 의해 $u_k$는 $[0, \infty]$ 값 함수로도 가측이다. 각 $x$에서 $(s_k^f(x))$, $(s_k^g(x))$는 단조증가이고 극한이 $f(x)$, $g(x)$이며(근사의 (6)의 (ii), (iii)), 두 실수의 $[0, \infty]$의 합은 실수의 합이므로 [[extended-nonnegative-reals]]의 (7)의 (iv)에 의해 $(u_k(x))$는 단조증가이고 $\lim_{k \to \infty} u_k(x) = f(x) + g(x)$이다. $[0, \infty]$ 값의 가측함수의 (5)에 의해 $f + g = \sup_k u_k$는 가측이다.

$N$에 대한 귀납법: $N = 0$이면 [[series-in-extended-nonnegative-reals|0 이상인 확장된 실수의 항의 합]]의 (1)의 (i)에 의해 $\sum_{k=1}^{0} f_k$는 값이 $0$인 상수함수이고, $[0, \infty]$ 값의 가측함수의 (4)의 (i)에 의해 가측이다. $N$에서 성립하면 같은 (1)의 (i)에 의해 $\sum_{k=1}^{N+1} f_k = \sum_{k=1}^{N} f_k + f_{N+1}$이므로 첫 문단에 의해 가측이다. 마지막으로 $(N, x)$에서의 값이 $\sum_{k=1}^{N} f_k(x)$인 함수열은 가측인 함수들로 되어 있고, 무한 합의 정의에 의해 $\sum_{k=1}^{\infty} f_k(x) = \sup\{\sum_{k=1}^{N} f_k(x) : N \in \mathbb{N}\}$이므로 $[0, \infty]$ 값의 가측함수의 (5)에 의해 $\sum_{k=1}^{\infty} f_k$는 가측이다.

**(6)** (i) $n \le n'$이면 $\{a_k : k \ge n'\} \subseteq \{a_k : k \ge n\}$이므로 [[extended-nonnegative-reals]]의 (5)의 (vi)에 의해 $b_n \le b_{n'}$이고 $c_{n'} \le c_n$이다. 따라서 $(b_n)$은 단조증가이고, 단조증가열의 극한의 정의에 의해 $\lim_{n \to \infty} b_n = \sup\{b_n\} = \liminf_{k \to \infty} a_k$이다. $n \le k$이면 $a_k$는 $\{a_k : k \ge n\}$의 원소이므로 하계 $b_n$ 이상이고 상계 $c_n$ 이하이다.

(ii) $(a_k)$가 단조증가이면 확장된 실수의 (7)의 (i)에 의해 $n \le k$에서 $a_n \le a_k$이므로 $a_n$은 $\{a_k : k \ge n\}$의 하계이면서 원소이다. 하한은 모든 하계 이상이고 원소 이하이므로 $b_n = a_n$이다. 따라서 $\liminf_{k \to \infty} a_k = \sup\{a_n : n \in \mathbb{N}\} = \lim_{k \to \infty} a_k$이다.

(iii) $\{a_k : k \ge n\}$은 $[0, \infty)$의 공집합이 아닌 부분집합이고 위로 유계이므로, 확장된 실수의 (5)의 (iii)에 의해 이 항목의 $b_n$, $c_n$은 실수의 하한, 상한과 같고, 그것은 [[limit-superior-and-inferior]]의 $b_n$, $a_n$이다. 같은 항목의 (3)에 의해 그 수열들은 유계이고 값이 $0$ 이상이므로, 다시 확장된 실수의 (5)의 (iii)에 의해 $\sup\{b_n\}$과 $\inf\{c_n\}$도 실수의 상한, 하한과 같다. 같은 항목의 (4)에 의해 그것이 실수열의 하극한과 상극한이다.

(iv) $T = \{k : k \ge n\}$에 $[0, \infty]$ 값의 가측함수의 (5)를 쓰면 $\inf_{k \ge n} f_k$와 $\sup_{k \ge n} f_k$가 가측이다. 이것들은 $(n, x)$마다 값이 정해진 $[0, \infty]$ 값 함수열이고, $\liminf_k f_k = \sup_n (\inf_{k \ge n} f_k)$, $\limsup_k f_k = \inf_n (\sup_{k \ge n} f_k)$이므로 같은 (5)를 다시 쓰면 두 함수가 가측이다.
:::

## 예시와 반례

:::example[집합열의 지시함수의 상극한]
$(A_k)$가 $\mathcal{M}$의 원소로 된 집합열이면 $\limsup_k \chi_{A_k} = \chi_{\limsup_{k \to \infty} A_k}$입니다. 각 $x$에서 $(\chi_{A_k}(x))$는 값이 $0$, $1$인 유계 실수열이고, $\sup\{\chi_{A_k}(x) : k \ge n\}$은 $x \in A_k$인 $k \ge n$이 있으면 $1$, 없으면 $0$입니다. [[sequence-of-sets|집합열]]의 (8)에 의해 $x$가 상극한 집합에 속하는 것은 모든 $n$에서 그런 $k$가 있을 때이므로, 그때 모든 꼬리의 상한이 $1$이고 그 하한도 $1$입니다. 속하지 않으면 어떤 $n$에서 꼬리의 상한이 $0$이 되고 하한은 $0$입니다. [[sigma-algebra|σ-대수]]의 (3)에 의해 상극한 집합은 가측집합이므로, 이 계산은 (1)이 주는 가측성과 맞습니다.
:::

:::counterexample[실숫값 함수열의 상한이 실숫값 함수가 아닐 수 있는 예]
$X = \mathbb{R}$에 보렐 σ-대수를 주고 $f_k(x) = kx$로 둡시다. 각 $f_k$는 연속함수이므로 가측이지만, $x = 1$에서 $(f_k(1)) = (k)$는 위로 유계가 아니어서 $\{f_k(1) : k \in \mathbb{N}\}$은 실수의 상한을 갖지 않습니다([[archimedean-property|아르키메데스 성질]]의 (1)). 그래서 (1)은 "점마다 유계"라는 가정을 둡니다. 값을 $[0, \infty]$로 옮기면 상한이 늘 있습니다. $g_k(x) = k|x|$는 값이 $0$ 이상인 가측함수이므로 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 (3)의 (i)에 의해 $[0, \infty]$ 값 함수로도 가측이고, $\sup_k g_k$는 $x = 0$에서 $0$, $x \ne 0$에서 $\infty$이며 같은 항목의 (5)에 의해 가측입니다.
:::

## 확인 질문

:::check[$[0, \infty]$의 원소열 $0, \infty, 0, \infty, \dots$(홀수 번째 항이 $0$, 짝수 번째 항이 $\infty$)의 하극한과 상극한은?]
모든 $n$에서 꼬리 $\{a_k : k \ge n\}$은 $\{0, \infty\}$이므로 $b_n = 0$, $c_n = \infty$입니다. 따라서 하극한은 $\sup\{0\} = 0$이고 상극한은 $\inf\{\infty\} = \infty$입니다. 이 열은 단조증가가 아니므로 (6)의 (ii)를 쓸 수 없습니다.
:::

:::check[$X = \mathbb{R}$이고 $f_k(x) = x^k$일 때 $(f_k(x))$가 수렴하는 점의 집합은?]
$\{x \in \mathbb{R} : -1 < x \le 1\}$입니다. [[geometric-sequence-limit|등비수열의 극한]]에 의해 $(x^k)$가 수렴하는 것은 정확히 $-1 < x \le 1$일 때입니다. 이 집합은 반열린구간 $(-1, 1]$이므로 [[borel-sigma-algebra-on-reals|ℝ 의 보렐 σ-대수]]의 (4)의 (i)에 의해 보렐 집합이고, 각 $f_k$가 [[power-function-is-continuous|거듭제곱 함수의 연속]]의 (1)에 의해 연속이어서 가측이므로 (4)의 (i)이 말하는 것과 맞습니다.
:::
