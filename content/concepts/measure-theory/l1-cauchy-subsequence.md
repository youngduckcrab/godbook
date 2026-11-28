---
title: L¹ 코시 열의 빠르게 수렴하는 부분수열
title_en: Rapidly Converging Subsequences of L¹-Cauchy Sequences
aliases: [L¹ 코시 열의 부분수열, L1 코시 열, 코시 조건 (L¹), rapidly converging subsequence, Cauchy condition in L1]
kind: theorem
field: measure-theory
msc: ["28A25", "46E30"]
level: undergrad
summary: L¹ 수렴하는 함수열은 L¹ 코시 열이고, L¹ 코시 열에서 이웃한 두 항의 차의 L¹ 반노름이 2 의 거듭제곱의 역수보다 작은 부분수열을 번호를 고르지 않고 가장 작은 번호로 정하며, 코시 열의 부분수열이 L¹ 수렴하면 열 전체도 같은 함수로 L¹ 수렴한다는 것을 증명한다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, power-of-a-real-number, even-and-odd, natural-numbers-are-infinite, well-ordering-principle, recursion-theorem, sequence, limit-of-sequence, subsequence, power-set, indicator-function, measure-examples, integrable-function-for-a-measure, l1-seminorm]
proof: full
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 7.3절 The spaces Lp, Lemma 7.17, Lemma 7.18 과 그 증명, Theorem 7.20 의 증명 첫머리 (p.209–210), Corollary 7.21 (p.212); 7.4절 Exercises, Exercise 7.3 (p.216); 8.1절 Definitions and examples, Example 8.8 (p.227), Example 8.10 의 증명 (p.228); 8.2절 Riesz–Weyl Theorem, Theorem 8.15 의 증명 (p.234), Example 8.16 (p.236); 8.5절 Exercises, Exercise 8.13, Exercise 8.14 (p.250)
    checked: original
    note: "출처 Lemma 7.18(p.209, 'Cauchy Condition')은 노름 공간 (V, ∥·∥) 의 코시 열 (v_k) 와 고정한 δ > 0 에 대하여 모든 j 에서 ∥v_{k_{j+1}} − v_{k_j}∥ < δʲ 인 부분수열이 있다고 진술한다. 출처의 증명은 ∥v_k − v_i∥ < δ 가 k, i ≥ k₁ 에서 성립하는 k₁ 을 잡고, δ² 에 대한 번호 k_{δ,2} 를 잡아 k₂ := max{k₁, k_{δ,2}} + 1 로 두고, '이렇게 계속하여' 각 j 에서 k_j > k_{j−1} 인 번호를 얻은 뒤 '귀납으로 부분수열을 만든다'고 적는다. 이 항목은 δ = 1/2 인 경우만 진술하고(출처 Theorem 7.20 의 증명 첫머리(p.210)도 δ := 1/2 로 이 보조정리를 쓴다), 번호를 차례로 잡는 대신 (2)에서 K(j) 를 조건을 만족하는 가장 작은 번호로, k_j 를 식 K(j) + j 로 정했다. 그래서 번호를 하나씩 고르지 않고 첨자열이 (f_n) 에서 하나로 정해진다. 출처의 증명은 k₂ := max{k₁, k_{δ,2}} + 1 처럼 앞 번호보다 크게 만드는 데 1 을 더하고, 이 항목은 K 가 단조증가라는 것((2)의 (i))과 j 를 더하는 것으로 같은 일을 한다. 출처의 진술은 노름 공간의 원소열에 대한 것이고, 이 항목은 동치류를 쓰지 않고 𝓛¹(μ) 의 함수열과 L¹ 반노름으로 진술했다. (3)의 (ii)는 출처 Lemma 7.17(p.209, 노름 공간에서 코시 열의 부분수열이 v 로 수렴하면 열도 v 로 수렴한다)의 반노름판이고, 출처는 그 증명을 Exercise 7.3(p.216)으로 돌린다. Exercise 7.3 은 거리공간의 코시 열에 대하여 (a) 유계이고 (b) 어떤 부분수열이 x 로 수렴하면 열도 x 로 수렴한다는 것을 보이라는 문제이다. (1)은 출처 Example 8.10 의 증명(p.228)이 'f_k → f in Lᵖ 이면 (f_k) 는 코시 열'이라고 쓰는 사실의 p = 1 인 경우이다. (3)의 (i)은 출처 Exercise 8.14(p.250, 네 가지 수렴 각각에서 수렴하는 열의 부분수열도 같은 함수로 수렴함을 보이라)의 평균 수렴 부분과 같은 사실이다. 출처 Exercise 8.13(p.250)은 측도 수렴에 대해 (3)의 (ii)와 같은 꼴을 보이라는 문제이다. 출처 Corollary 7.21 (a)(p.212)의 증명은 Lᵖ 수렴하는 열이 코시 열이라는 것과 Theorem 7.20 의 증명 속 구성을 쓴다. 출처 Theorem 8.15(Riesz–Weyl)의 증명(p.234)은 측도에 관한 코시 열에서 Lemma 7.18 과 같은 방식으로 번호 k_j 를 차례로 잡아 2^{−j} 꼴의 부분수열을 얻는다. 예시 '반노름이 절반씩 줄어드는 열의 K 와 첨자열'은 첨자열을 식으로 적어 보이는 점에서 출처 Example 8.16(p.236, 굴러가는 구간의 열에서 a.e. 수렴하는 부분수열의 첨자 k(j) 를 식으로 적는다)과 같은 발상이고, 그 열은 출처 Example 8.8(p.227, [0, 1] 위의 상수함수 1/k 가 평균 p 수렴으로 0 에 간다)처럼 정해진 함수의 상수배가 0 으로 가는 열이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(첨자열 k_j = K(j) + j 가 가장 작은 번호로 정해지는지, 셈측도 판의 경계). 독립 검토 없음."
added: 2026-11-28
---

:::statement
$\mathcal{L}^1(\mu)$, $\mathcal{L}^1(\mu)$의 함수열, L¹ 반노름 $\lVert \cdot \rVert_1$, L¹ 수렴, L¹ 코시 열은 [[l1-seminorm|L¹ 반노름과 L¹ 수렴]]의 것이다. 첨자열은 [[subsequence|부분수열]]의 것이고, 최소 원소는 [[well-ordering-principle|정렬 원리]]의 것이다. 자연수 $j$에 대하여 $2^j$는 [[power-of-a-real-number|실수의 거듭제곱]]의 것이고, $2^{-j}$는 $(2^j)^{-1}$을 뜻한다. 아래에서 $(X, \mathcal{M}, \mu)$는 측도공간이고 $(f_n)$은 $\mathcal{L}^1(\mu)$의 함수열이다.

**함수열의 부분수열.** $(n_i)$가 첨자열이면, 순서쌍 $(i, x)$에서의 값이 $f_{n_i}(x)$인 함수 $\mathbb{N} \times X \to \mathbb{R}$는 $\mathcal{L}^1(\mu)$의 함수열이고 그 $i$번째 항은 $f_{n_i}$이다. 이것을 $(f_{n_i})$로 쓰고 첨자열 $(n_i)$로 얻은 $(f_n)$의 **부분수열**(subsequence)이라 한다.

1. (L¹ 수렴하는 열은 L¹ 코시 열이다) $f \in \mathcal{L}^1(\mu)$이고 $(f_n)$이 $f$로 L¹ 수렴하면 $(f_n)$은 L¹ 코시 열이다.
2. (빠르게 수렴하는 부분수열) $(f_n)$이 L¹ 코시 열이라 하자. 자연수 $j$마다
   $$
   \begin{aligned}
   S_j = \{&k \in \mathbb{N} : i \ge k,\ l \ge k \text{인} \\
   &\text{모든 자연수 } i, l \text{에서} \\
   &\lVert f_i - f_l \rVert_1 < 2^{-j}\}
   \end{aligned}
   $$
   로 둔다.
   - (i) $S_j$는 공집합이 아니고, $k \in S_j$이며 $k \le k'$인 자연수 $k'$은 $S_j$의 원소이다. $S_j$의 최소 원소를 $K(j)$로 쓴다. 그러면 $K$는 $\mathbb{N}$에서 $\mathbb{N}$으로의 함수이고, 모든 자연수 $j$에서 $K(j) \le K(j+1)$이다.
   - (ii) $k_j = K(j) + j$로 두면 $(k_j)$는 첨자열이고, 모든 자연수 $j$에서 $K(j) < k_j$이다. 이 첨자열을 L¹ 코시 열 $(f_n)$의 **(2)의 첨자열**이라 부른다. $K$와 $(k_j)$는 $(f_n)$과 $\mu$만으로 정해지고, 번호마다 여러 후보 가운데 하나를 고르는 일 없이 정해진다.
   - (iii) 모든 자연수 $j$와, $i \ge k_j$, $l \ge k_j$인 모든 자연수 $i$, $l$에서 $\lVert f_i - f_l \rVert_1 < 2^{-j}$이다. 특히 모든 자연수 $j$에서
     $$
     \lVert f_{k_{j+1}} - f_{k_j} \rVert_1 < 2^{-j}
     $$
     이다.
3. (부분수열과 L¹ 수렴) $f \in \mathcal{L}^1(\mu)$라 하자.
   - (i) $(f_n)$이 $f$로 L¹ 수렴하면 $(f_n)$의 모든 부분수열이 $f$로 L¹ 수렴한다.
   - (ii) $(f_n)$이 L¹ 코시 열이고 $(f_n)$의 어떤 부분수열이 $f$로 L¹ 수렴하면 $(f_n)$은 $f$로 L¹ 수렴한다.
:::

:::english
$\mathcal{L}^1(\mu)$, sequences in $\mathcal{L}^1(\mu)$, the L¹ seminorm $\lVert \cdot \rVert_1$, L¹ convergence and Cauchy sequences in L¹ are as in the entry on the L¹ seminorm and L¹ convergence. Index sequences are as in the entry on subsequences, and least elements are as in the entry on the well-ordering principle. For a natural number $j$, $2^j$ is as in the entry on powers of real numbers, and $2^{-j}$ means $(2^j)^{-1}$. Below, $(X, \mathcal{M}, \mu)$ is a measure space and $(f_n)$ is a sequence in $\mathcal{L}^1(\mu)$.

**Subsequences of sequences of functions.** If $(n_i)$ is an index sequence, then the function $\mathbb{N} \times X \to \mathbb{R}$ whose value at the pair $(i, x)$ is $f_{n_i}(x)$ is a sequence in $\mathcal{L}^1(\mu)$ whose $i$-th term is $f_{n_i}$. It is written $(f_{n_i})$ and called the **subsequence** of $(f_n)$ obtained from the index sequence $(n_i)$.

1. (Sequences converging in L¹ are Cauchy in L¹) If $f \in \mathcal{L}^1(\mu)$ and $(f_n)$ converges to $f$ in L¹, then $(f_n)$ is a Cauchy sequence in L¹.
2. (A rapidly converging subsequence) Let $(f_n)$ be a Cauchy sequence in L¹. For each natural number $j$ put
   $$
   \begin{aligned}
   S_j = \{&k \in \mathbb{N} : \lVert f_i - f_l \rVert_1 < 2^{-j} \\
   &\text{for all natural numbers } i, l \\
   &\text{with } i \ge k,\ l \ge k\}.
   \end{aligned}
   $$
   - (i) $S_j$ is nonempty, and every natural number $k'$ with $k \le k'$ for some $k \in S_j$ belongs to $S_j$. Write $K(j)$ for the least element of $S_j$. Then $K$ is a function from $\mathbb{N}$ to $\mathbb{N}$, and $K(j) \le K(j+1)$ for every natural number $j$.
   - (ii) Setting $k_j = K(j) + j$, $(k_j)$ is an index sequence and $K(j) < k_j$ for every natural number $j$. This index sequence is called **the index sequence of (2)** for the Cauchy sequence $(f_n)$ in L¹. $K$ and $(k_j)$ are determined by $(f_n)$ and $\mu$ alone, without choosing one of several candidates for each index.
   - (iii) For every natural number $j$ and all natural numbers $i$, $l$ with $i \ge k_j$ and $l \ge k_j$, $\lVert f_i - f_l \rVert_1 < 2^{-j}$. In particular, for every natural number $j$,
     $$
     \lVert f_{k_{j+1}} - f_{k_j} \rVert_1 < 2^{-j}.
     $$
3. (Subsequences and L¹ convergence) Let $f \in \mathcal{L}^1(\mu)$.
   - (i) If $(f_n)$ converges to $f$ in L¹, then every subsequence of $(f_n)$ converges to $f$ in L¹.
   - (ii) If $(f_n)$ is a Cauchy sequence in L¹ and some subsequence of $(f_n)$ converges to $f$ in L¹, then $(f_n)$ converges to $f$ in L¹.
:::

## 직관

L¹ 코시 열은 항들이 끝내 서로 L¹ 반노름으로 가까워지는 열입니다. 그 가까워지는 빠르기는 열에 따라 다릅니다. (2)는 그중에서 이웃한 두 항의 거리가 차례로 $\tfrac{1}{2}$, $\tfrac{1}{4}$, $\tfrac{1}{8}$, …보다 작도록 항을 띄엄띄엄 뽑아, 걸음의 길이의 상한이 절반씩 줄어드는 계단을 만듭니다. 그러면 처음 몇 걸음을 더한 길이도 $\tfrac{1}{2} + \tfrac{1}{4} + \cdots$의 부분합보다 작습니다. 비유의 "걸음의 길이"가 $\lVert f_{k_{j+1}} - f_{k_j} \rVert_1$이고, "절반씩 줄어드는 상한"이 $2^{-j}$입니다.

뽑는 방법이 중요합니다. 출처는 $j = 1, 2, \dots$마다 조건을 만족하는 번호가 "있다"는 것에서 번호를 하나씩 잡아 나가는데, 이 강의는 번호를 고르지 않습니다. 조건 "그 번호부터의 모든 두 항의 거리가 $2^{-j}$보다 작다"를 만족하는 번호 가운데 가장 작은 것 $K(j)$는 정렬 원리로 하나로 정해집니다. $K(j)$는 $j$가 커져도 줄지 않지만 같은 값에 머물 수 있으므로(아래 첫째 반례), $j$를 더한 $K(j) + j$로 첨자열을 만듭니다.

(3)의 (ii)는 코시 열이 수렴하는 부분수열을 가지면 열 전체가 같은 함수로 수렴한다는 것입니다. 부분수열의 항이 $f$에 가깝고, 코시 열의 나중 항들은 모두 그 부분수열의 항에 가까우므로, 삼각부등식으로 나중 항들이 모두 $f$에 가깝습니다. 코시 가정을 빼면 성립하지 않을 수 있습니다(아래 둘째 반례).

## 증명

:::idea
(2)에서는 코시 열의 정의를 $\varepsilon = 2^{-j}$에 쓴 번호들의 집합에서 가장 작은 번호를 잡고, $S_{j+1} \subseteq S_j$로 그 번호가 줄지 않음을 보인 뒤 $j$를 더해 순증가하게 만든다. (1)과 (3)은 [[l1-seminorm|L¹ 반노름]]의 삼각부등식에 $\varepsilon/2$를 두 번 쓴다.
:::

:::hint
$2^{-(j+1)} < 2^{-j}$이므로 $K(j+1)$ 뒤의 두 항의 거리는 $2^{-j}$보다도 작다. 그러면 $K(j+1)$은 $S_j$의 원소이다.
:::

:::hint
(3)의 (ii)에서는 부분수열의 번호 $i$를 하나 정해 $n_i$가 코시 열의 번호 $M$ 이상이 되게 한다. [[subsequence|부분수열]]의 (1)에 의해 $n_i \ge i$이다.
:::

:::proof
[[l1-seminorm|L¹ 반노름과 L¹ 수렴]]의 성질은 "반노름 항목의 (n)"으로 인용한다. 반노름 항목의 (1)의 (ii)에 의해 $\lVert \cdot \rVert_1$의 값은 $0$ 이상인 실수이다. 그래서 [[absolute-value]]의 (1)에 의해 $|\lVert f_n - f \rVert_1 - 0| = \lVert f_n - f \rVert_1$이고, [[limit-of-sequence|수열의 극한]]의 정의에 의해 $(f_n)$이 $f$로 L¹ 수렴하는 것은 정확히 모든 양의 실수 $\varepsilon$에 대하여 자연수 $M$이 있어 $n \ge M$이면 $\lVert f_n - f \rVert_1 < \varepsilon$일 때이다. 이것을 (가)라 하자. 정수의 순서에 관한 (Z6), (Z7), (L3)은 [[well-ordering-principle|정렬 원리]]의 것이고, [[order-properties-of-reals]]의 (10)에 의해 자연수 사이의 부등식은 정수로 읽으나 실수로 읽으나 같다.

**함수열의 부분수열.** 첨자열 $(n_i)$와 $(i, x)$에서 $f_{n_i}(x)$는 이미 정해진 실수이므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 그 값을 갖는 함수 $\mathbb{N} \times X \to \mathbb{R}$가 하나 있고, 그 $i$번째 항은 $\mathcal{L}^1(\mu)$의 원소 $f_{n_i}$이다.

**(1)** 양의 실수 $\varepsilon$을 잡자. [[order-properties-of-reals]]의 (8)에 의해 $\tfrac{\varepsilon}{2}$는 양수이므로 (가)에 의해 자연수 $M$이 있어 $n \ge M$이면 $\lVert f_n - f \rVert_1 < \tfrac{\varepsilon}{2}$이다. $n \ge M$, $k \ge M$이면 반노름 항목의 (1)의 (iv)와 (iii)에 의해
$$
\begin{aligned}
\lVert f_n - f_k \rVert_1 &\le \lVert f_n - f \rVert_1 + \lVert f - f_k \rVert_1 \\
&= \lVert f_n - f \rVert_1 + \lVert f_k - f \rVert_1
\end{aligned}
$$
이고, 오른쪽은 [[order-properties-of-reals]]의 (2)의 (iv)에 의해 $\tfrac{\varepsilon}{2} + \tfrac{\varepsilon}{2} = \varepsilon$보다 작다. 따라서 $(f_n)$은 L¹ 코시 열이다.

**(2)** 먼저 $2^{-j}$에 관한 두 사실을 본다. [[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (i)에 의해 $0 < 2^j$이고, [[order-properties-of-reals]]의 (6)의 (i)에 의해 $0 < 2^{-j}$이다. 거듭제곱의 정의에 의해 $2^{j+1} = 2^j \cdot 2$이고, $0 < 2^j$와 $1 < 2$에서 [[order-properties-of-reals]]의 (4)의 (i)에 의해 $2^j \cdot 1 < 2^j \cdot 2$, 곧 $2^j < 2^{j+1}$이다. 같은 항목의 (6)의 (ii)에 의해 $2^{-(j+1)} < 2^{-j}$이다. 여기서 $2^{-(j+1)}$은 $(2^{j+1})^{-1}$이다.

(i) $2^{-j}$는 양의 실수이므로 L¹ 코시 열의 정의에 의해 자연수 $M$이 있어 $i \ge M$, $l \ge M$인 모든 $i$, $l$에서 $\lVert f_i - f_l \rVert_1 < 2^{-j}$이다. 곧 $M \in S_j$이고 $S_j$는 공집합이 아니다. $S_j$는 $\mathbb{N}$의 원소 가운데 조건을 만족하는 것의 집합이므로 $\mathbb{N}$의 부분집합이다. $k \in S_j$이고 $k \le k'$이라 하자. $i \ge k'$, $l \ge k'$이면 (Z6)에 의해 $i \ge k$, $l \ge k$이므로 $\lVert f_i - f_l \rVert_1 < 2^{-j}$이고, 따라서 $k' \in S_j$이다.

정렬 원리의 (2)에 의해 $S_j$는 최소 원소를 갖고, 같은 항목의 (1)에 의해 그것은 하나뿐이다. 그래서 $K(j)$는 $j$마다 하나로 정해진 자연수이고, 재귀 정리의 (1)에 의해 $K$는 $\mathbb{N}$에서 $\mathbb{N}$으로의 함수이다. $i \ge K(j+1)$, $l \ge K(j+1)$이면 $K(j+1) \in S_{j+1}$이므로 $\lVert f_i - f_l \rVert_1 < 2^{-(j+1)} < 2^{-j}$이다([[order-properties-of-reals]]의 (1)의 (v)). 곧 $K(j+1) \in S_j$이고, $K(j)$가 $S_j$의 최소 원소이므로 $K(j) \le K(j+1)$이다.

(ii) $K(j)$와 $j$는 자연수이므로 $K(j) + j$는 정수이다([[even-and-odd]]의 받아들인 사실). $0 < j$와 (Z7)에 의해 $K(j) < K(j) + j$이고, $0 < K(j)$와 (Z6)에 의해 $0 < K(j) + j$이므로 [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술(자연수는 양의 정수)에 의해 $k_j$는 자연수이다. 재귀 정리의 (1)에 의해 $j$에서의 값이 $k_j$인 함수 $\mathbb{N} \to \mathbb{N}$이 있다. (i)의 $K(j) \le K(j+1)$과 (Z7)에 의해 $K(j) + (j + 1) \le K(j+1) + (j + 1) = k_{j+1}$이고, (L3)과 (Z7)에 의해 $k_j = K(j) + j < K(j) + (j + 1)$이므로 (Z6)에 의해 $k_j < k_{j+1}$이다. [[subsequence|부분수열]]의 (2)에 의해 $(k_j)$는 첨자열이다. $K$와 $k_j$를 정하는 데 쓴 것은 $(f_n)$과 $\mu$로 정해지는 집합 $S_j$의 최소 원소와 덧셈뿐이다.

(iii) $i \ge k_j$, $l \ge k_j$이면 (ii)의 $K(j) < k_j$와 (Z6)에 의해 $i \ge K(j)$, $l \ge K(j)$이고, $K(j) \in S_j$이므로 $\lVert f_i - f_l \rVert_1 < 2^{-j}$이다. (ii)에 의해 $k_{j+1} > k_j$이므로 $i = k_{j+1}$, $l = k_j$로 두면 마지막 부등식이 나온다.

**(3)** (i) $(n_i)$를 첨자열이라 하자. $a_n = \lVert f_n - f \rVert_1$로 둔 실수열 $(a_n)$은 가정에 의해 $0$으로 수렴하고, $n$번째 항이 $\lVert f_{n_i} - f \rVert_1$인 실수열은 그 부분수열 $(a_{n_i})$이다. [[subsequence|부분수열]]의 (3)에 의해 $(a_{n_i})$는 $0$으로 수렴하므로 $(f_{n_i})$는 $f$로 L¹ 수렴한다.

(ii) $(f_{n_i})$가 $f$로 L¹ 수렴한다고 하자. 양의 실수 $\varepsilon$을 잡으면 $\tfrac{\varepsilon}{2}$는 양수이다. L¹ 코시 열의 정의에 의해 자연수 $M$이 있어 $n \ge M$, $k \ge M$이면 $\lVert f_n - f_k \rVert_1 < \tfrac{\varepsilon}{2}$이고, (가)를 $(f_{n_i})$에 쓰면 자연수 $I$가 있어 $i \ge I$이면 $\lVert f_{n_i} - f \rVert_1 < \tfrac{\varepsilon}{2}$이다. $p = \max\{I, M\}$으로 두면 [[absolute-value]]의 (10)에 의해 $p$는 $I$와 $M$ 가운데 하나이므로 자연수이고, $p \ge I$, $p \ge M$이다. [[subsequence|부분수열]]의 (1)에 의해 $n_p \ge p \ge M$이다. 그래서 $n \ge M$이면 반노름 항목의 (1)의 (iv)에 의해
$$
\begin{aligned}
\lVert f_n - f \rVert_1 &\le \lVert f_n - f_{n_p} \rVert_1 \\
&\quad + \lVert f_{n_p} - f \rVert_1 \\
&< \tfrac{\varepsilon}{2} + \tfrac{\varepsilon}{2} = \varepsilon
\end{aligned}
$$
이다([[order-properties-of-reals]]의 (2)의 (iv)와 (1)의 (v)). (가)에 의해 $(f_n)$은 $f$로 L¹ 수렴한다.
:::

## 예시와 반례

:::example[반노름이 절반씩 줄어드는 열의 K 와 첨자열]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$ 위의 셈측도 $\mu^{\sharp}$에서 $u = \chi_{\{1\}}$, $f_n = 2^{-n}u$로 둡시다. [[measure-examples|측도의 예]]의 (4)의 (i)과 (3)에 의해 $\mu^{\sharp}(\{1\}) = 1$이므로 [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 (6)의 (i)에 의해 $u \in \mathcal{L}^1(\mu^{\sharp})$이고, $u$의 값이 $0$ 이상이므로 $\lVert u \rVert_1 = \int u\,d\mu^{\sharp} = 1$입니다([[l1-seminorm|L¹ 반노름과 L¹ 수렴]]의 (1)의 (ii)). 모든 점에서 $f_i - f_l = (2^{-i} - 2^{-l})u$이므로 같은 항목의 (1)의 (i)과 (iii)에 의해 $\lVert f_i - f_l \rVert_1 = |2^{-i} - 2^{-l}|$입니다.

$S_j = \{k \in \mathbb{N} : k \ge j\}$임을 봅시다. [[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (iv)와 [[sequence|수열]]의 (4)에 의해 $p \le q$인 자연수에서 $2^p \le 2^q$이고, [[order-properties-of-reals]]의 (6)의 (ii)에 의해 $2^{-q} \le 2^{-p}$입니다. $k \ge j$이고 $i, l \ge k$이면, $i \le l$이라 해도 됩니다([[absolute-value]]의 (3)). 그러면 $0 \le 2^{-i} - 2^{-l} < 2^{-i} \le 2^{-k} \le 2^{-j}$이므로($0 < 2^{-l}$) $k \in S_j$입니다. $k < j$이면 $k \le j - 1$이고, $i = k$, $l = j$로 두면 $2^{-k} \ge 2^{-(j-1)} = 2 \cdot 2^{-j}$이므로($2^j = 2^{j-1} \cdot 2$) $2^{-k} - 2^{-j} \ge 2^{-j}$이고 $k \notin S_j$입니다. 따라서 $K(j) = j$이고 (2)의 첨자열은 $k_j = 2j$입니다. 실제로 $\lVert f_{k_{j+1}} - f_{k_j} \rVert_1 = 2^{-2j} - 2^{-2j-2} = \tfrac{3}{4} \cdot 2^{-2j}$이고, 이것은 $2^{-2j} \le 2^{-j}$보다 작습니다.
:::

:::counterexample[모든 항이 같은 열에서 K 의 값]
$f \in \mathcal{L}^1(\mu)$이고 모든 $n$에서 $f_n = f$이면, 모든 $i$, $l$에서 $f_i - f_l = 0 \cdot f$이므로 [[l1-seminorm|L¹ 반노름]]의 (1)의 (iii)에 의해 $\lVert f_i - f_l \rVert_1 = |0| \, \lVert f \rVert_1 = 0 < 2^{-j}$입니다. 그래서 모든 $j$에서 $S_j = \mathbb{N}$이고 $K(j) = 1$입니다. $K(1) = K(2)$이므로 $K$ 자신은 첨자열이 아니고, $j$를 더한 $k_j = j + 1$이 첨자열입니다. (2)의 (i)이 $K$에 대해 말하는 것은 $K(j) \le K(j+1)$까지입니다.
:::

:::counterexample[코시 가정이 없을 때 (3)의 (ii)의 결론이 성립하지 않는 예]
위 예시의 $\mu^{\sharp}$와 $u = \chi_{\{1\}}$에서 $n$이 홀수이면 $f_n = u$, 짝수이면 $f_n$을 값이 $0$인 상수함수로 둡시다([[even-and-odd]]에 의해 자연수는 짝수이거나 홀수이고 둘 다는 아닙니다). 첨자열 $n_i = 2i$로 얻은 부분수열의 항은 모두 값이 $0$인 상수함수 $0$이고, $0 - 0 = 0 \cdot u$이므로 [[l1-seminorm|L¹ 반노름]]의 (1)의 (iii)에 의해 $\lVert f_{2i} - 0 \rVert_1 = 0$이어서 이 부분수열은 $0$으로 L¹ 수렴합니다. 그러나 홀수 $n$에서 $\lVert f_n - 0 \rVert_1 = \lVert u \rVert_1 = 1$이므로 $(f_n)$은 $0$으로 L¹ 수렴하지 않습니다. $(f_n)$이 어떤 $f$로 L¹ 수렴했다면 (3)의 (i)에 의해 그 부분수열도 $f$로 L¹ 수렴하므로 [[l1-seminorm|L¹ 반노름]]의 (3)의 (i)에 의해 $f = 0$이 $\mu^{\sharp}$-거의 어디서나 성립하고, 같은 항목의 (3)의 (ii)에 의해 $(f_n)$은 $0$으로 L¹ 수렴해야 하므로 모순입니다. 이 열은 이웃한 두 항의 차의 반노름이 늘 $1$이어서 L¹ 코시 열이 아닙니다.
:::

## 확인 질문

:::check[셈측도 $\mu^{\sharp}$에서 $f_n = n^{-1}\chi_{\{1\}}$이면 $K(1)$, $K(2)$와 $k_1$, $k_2$는 무엇인가?]
위 예시와 같이 $\lVert f_i - f_l \rVert_1 = |i^{-1} - l^{-1}|$입니다. $i \le l$이면 $0 \le i^{-1} - l^{-1} < i^{-1}$입니다. $j = 1$: $i = 1$, $l = 2$이면 $1 - \tfrac{1}{2} = \tfrac{1}{2}$이 $\tfrac{1}{2}$보다 작지 않으므로 $1 \notin S_1$이고, $2 \le i \le l$이면 $|i^{-1} - l^{-1}| < i^{-1} \le \tfrac{1}{2}$이므로 $2 \in S_1$입니다. 곧 $K(1) = 2$입니다. $j = 2$: $i = 3$, $l = 12$이면 $\tfrac{1}{3} - \tfrac{1}{12} = \tfrac{1}{4}$이므로 $3 \notin S_2$이고, (2)의 (i)에 의해 $1, 2 \in S_2$이면 $3 \in S_2$이어야 하므로 $1, 2 \notin S_2$입니다. $4 \le i \le l$이면 $|i^{-1} - l^{-1}| < i^{-1} \le \tfrac{1}{4}$이므로 $4 \in S_2$이고 $K(2) = 4$입니다. 따라서 $k_1 = 2 + 1 = 3$, $k_2 = 4 + 2 = 6$이고, $\lVert f_6 - f_3 \rVert_1 = \tfrac{1}{3} - \tfrac{1}{6} = \tfrac{1}{6} < \tfrac{1}{2}$입니다.
:::

:::check[L¹ 코시 열 $(f_n)$의 짝수 번째 항들의 부분수열이 $f$로 L¹ 수렴하면 홀수 번째 항들의 부분수열은 어떻게 되는가?]
$f$로 L¹ 수렴합니다. (3)의 (ii)에 의해 $(f_n)$ 전체가 $f$로 L¹ 수렴하고, $n_i = 2i - 1$은 $n_i < n_{i+1}$이므로 [[subsequence|부분수열]]의 (2)에 의해 첨자열이어서, (3)의 (i)에 의해 그것으로 얻은 홀수 번째 항들의 부분수열도 $f$로 L¹ 수렴합니다.
:::
