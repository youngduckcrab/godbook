---
title: 0 이상인 이중급수의 합의 순서 바꾸기
title_en: Interchanging the Order of Summation for Nonnegative Double Series
aliases: [토넬리 정리 (합), 이중급수, 서로소인 조각으로 묶기, Tonelli for sums, double series of nonnegative terms, iterated sums]
kind: theorem
field: measure-theory
msc: ["40B05", "28"]
level: undergrad
summary: "[0, ∞] 의 원소로 된 이중첨수 원소열에서 행마다 더한 합, 열마다 더한 합, 짝짓기 함수로 한 줄로 늘어놓은 합이 모두 같다(토넬리). 그 바탕으로, ℕ 의 부분집합을 서로소인 조각의 열로 나누면 조각마다 더한 합을 다시 더한 것이 전체의 합과 같다는 것을 먼저 증명한다."
requires: [cartesian-product, function, injective-surjective-bijective, inverse-function, function-composition, composition-preserves-injectivity-and-surjectivity, mathematical-induction, recursion-theorem, natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, limit-of-sequence, subsequence, series-and-partial-sums, finite-sum-of-reals, sum-of-a-series, sequence-of-sets, pairing-of-natural-numbers, extended-nonnegative-reals, series-in-extended-nonnegative-reals]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.6.6절 Exercises, Exercise 2.6.15 a) (p.112); 2.6.3절 Example 2.6.4 (p.103); 2.5.1절 Example 2.5.4 (p.88)
    checked: original
    note: "출처의 Exercise 2.6.15 a)(p.112, 'Tonelli/Fubini for sums, challenging')는 0 이상인 이중첨수 수열 x_{k,ℓ} 와 전단사 σ : ℕ → ℕ² 에 대해 세 급수 Σ_i x_{σ(i)}, Σ_k(Σ_ℓ x_{k,ℓ}), Σ_ℓ(Σ_k x_{k,ℓ}) 가 모두 발산하거나 모두 같은 수로 수렴함을 보이라는 연습문제이다. 출처는 이것을 연습문제로 두고 증명을 싣지 않는다(책 전체에서 'Tonelli' 3건은 이 연습문제와 찾아보기이고, 'doubly' 1건은 이 연습문제이다. 'double' 3건은 이중극한에 대한 주의(p.218), 양쪽 이상적분(p.222), 이중 수열의 결합 극한(p.244, Exercise 6.2.13 앞 문단)으로 급수의 합의 순서를 다루지 않는다). 이 항목의 (2)–(4)가 그 진술이다. 이 항목은 값을 [0, ∞] 에서 잡아 '모두 같다'를 등식 하나로 쓰고((2)(3)), 실수 급수의 말로 옮긴 것을 (4)에 둔다. 증명은 이 항목이 새로 썼다. 먼저 서로소인 조각으로 묶는 (1)을 부분합의 유한 이중 합과 상한으로 보이고, 짝짓기 함수 π 의 행 {π(k, l) : l ∈ ℕ} 과 열 {π(k, l) : k ∈ ℕ} 이 ℕ 을 서로소인 조각으로 나누며 각각 순증가하는 첨자열로 늘어놓인다는 것을 써서 (2)를 (1)에서 얻는다. 출처의 b)(Fubini, 절대수렴하는 실수 항)는 이 항목에 두지 않았다. 예시 '홀수 번째와 짝수 번째로 나눈 합'처럼 급수의 항을 홀수 번째와 짝수 번째로 나누어 보는 것은 출처 Example 2.6.4(p.103, 교대 조화급수의 홀수 번째 항과 짝수 번째 항)에도 있다. 그 예시의 Σ_{n=1}^∞ (1/2)^n = 1 은 출처 Example 2.5.4(p.88)의 급수와 같다."
  - ref: lebl-basic-analysis-2
    loc: 10.3.2절 Proposition 10.3.4 의 증명 (p.111); 11.3.4절 Theorem 11.3.5 (p.157); 11.3.6절 Exercises, Exercise 11.3.1 (p.161)
    checked: original
    note: "출처 II 권의 Proposition 10.3.4 의 증명(p.111)은 0 이상인 V(R_{j,k}) 의 이중 합을 'k 로 먼저, 그다음 j 로' 더해도 된다고 하며 I 권의 Exercise 2.6.15 를 가리킨다. 그 증명 끝의 Σ_j 2^{−j}ε = ε 은 예시 '행마다와 열마다와 한 줄로 더한 합'에서 행의 합 (1/2)^k 를 다시 더해 1 을 얻는 것과 같은 꼴이다. Theorem 11.3.5(p.157, 'Fubini for sums')는 행마다의 절댓값의 급수와 그 합의 급수가 수렴하는 복소수 이중 수열에서 두 반복합이 같다는 정리로, 0 이상인 실수 항에 쓰면 이 항목의 (4)의 (i)에서 두 반복합이 같은 실수라는 결론과 같다. 그 앞 문단은 실수 급수에서는 이것이 I 권의 Exercise 2.6.15 였다고 적는다. 반례 '항이 음수일 수 있으면 두 반복합이 다를 수 있다'는 Exercise 11.3.1(p.161, 대각선에서 1, 대각선 오른쪽에서 −2^{k−m}, 왼쪽에서 0 인 이중 수열의 두 반복합이 다르다)과 같은 발상이다(대각선의 1 과 그 오른쪽의 음의 항으로 두 반복합을 다르게 한다)."
  - ref: sandoval-romero-measure-and-integration
    loc: 4.1절 Example 4.7 (p.93); 5.3절 Corollary 5.21 (p.139)
    checked: original
    note: "출처의 Example 4.7(p.93)은 0 이상인 확장된 실수의 열 (x_j) 로 정한 µ(A) = Σ_{j∈A} x_j 가 측도임을 보이는 증명에서, 서로소인 (A_k) 에 대해 Σ_{j∈∪A_k} x_j = Σ_k Σ_{j∈A_k} x_j 를 한 줄의 등식으로 쓴다. 이 항목의 (1)이 그 등식이다. Corollary 5.21(p.139)은 f : ℕ × ℕ → [0, +∞] 에 대해 Σ_i(Σ_j x_{ij}) = Σ_j(Σ_i x_{ij}) 를 진술하고, Theorem 5.20(베포 레비 정리: 0 이상인 가측함수의 급수를 항별로 적분해도 된다)과 Example 5.15 의 직접 결과라고 증명한다(출처는 그 앞 문단에서 이것을 X = ℕ 위의 셈측도에 쓴 응용이라 적는다). 이 항목의 (2)의 첫 등식과 같은 진술이고 증명의 길은 다르다(이 항목은 측도와 적분을 쓰지 않는다)."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 표본 확인(러셀의 논법, Kanovei–Katz 인용 대조, min·max 와 1 의 합의 경계 경우). 독립 검토 없음."
added: 2026-11-28
---

:::statement
$[0, \infty]$와 그 순서, 덧셈, 상한은 [[extended-nonnegative-reals]]의 것이고, $[0, \infty]$의 원소열의 합 $\sum_{n=1}^{\infty}$, 부분집합 위의 합 $\sum_{n \in A}$은 [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]]의 것이다. 집합열, 서로소인 집합열, $\bigcup_{k=1}^{\infty} A_k$는 [[sequence-of-sets|집합열 항목]]의 것이다. 짝짓기 함수 $\pi(k, l) = 2^{k-1}(2l - 1)$과 그 역함수의 두 성분 $\kappa_1$, $\kappa_2$는 [[pairing-of-natural-numbers|ℕ × ℕ 과 ℕ 의 전단사 항목]]의 것이다.

**이중첨수 원소열과 두 반복합.** 함수 $a : \mathbb{N} \times \mathbb{N} \to [0, \infty]$를 $[0, \infty]$의 **이중첨수 원소열**이라 하고 $a(k, l)$을 $a_{k,l}$로 쓴다. 자연수 $k$마다 $l$번째 항이 $a_{k,l}$인 원소열이 있고 그 합을 $\sum_{l=1}^{\infty} a_{k,l}$로 쓴다. $k$번째 항이 이 합인 원소열의 합을
$$
\sum_{k=1}^{\infty} \sum_{l=1}^{\infty} a_{k,l}
$$
로 쓰고 **행마다 더한 반복합**이라 한다. $k$와 $l$의 자리를 바꾸어 같은 방식으로 정한 $\sum_{l=1}^{\infty} \sum_{k=1}^{\infty} a_{k,l}$을 **열마다 더한 반복합**이라 한다. 또 $m$번째 항이 $a_{\kappa_1(m), \kappa_2(m)}$인 원소열을 $a$를 **$\pi$로 한 줄로 늘어놓은 원소열**이라 한다. 함수 $\sigma : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$에 대하여 $a_{\sigma(m)}$은 $a(\sigma(m))$을 뜻한다.

다음이 성립한다.

1. (서로소인 조각으로 묶기) $(A_k)$가 $\mathbb{N}$의 서로소인 집합열이고 $A = \bigcup_{k=1}^{\infty} A_k$라 하자. 그러면 $[0, \infty]$의 모든 원소열 $(x_n)$에 대하여
   $$
   \sum_{n \in A} x_n = \sum_{k=1}^{\infty} \sum_{n \in A_k} x_n
   $$
   이다. 오른쪽은 $k$번째 항이 $\sum_{n \in A_k} x_n$인 원소열의 합이다. 특히 $A = \mathbb{N}$이면 왼쪽은 $\sum_{n=1}^{\infty} x_n$이다.
2. (토넬리) $[0, \infty]$의 모든 이중첨수 원소열 $a$에 대하여
   $$
   \begin{aligned}
   \sum_{k=1}^{\infty} \sum_{l=1}^{\infty} a_{k,l} &= \sum_{l=1}^{\infty} \sum_{k=1}^{\infty} a_{k,l} \\
   &= \sum_{m=1}^{\infty} a_{\kappa_1(m), \kappa_2(m)}
   \end{aligned}
   $$
   이다.
3. (아무 전단사로 늘어놓은 합) $\sigma : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$이 전단사이면 $\sum_{m=1}^{\infty} a_{\sigma(m)}$은 (2)의 세 값과 같다.
4. (항이 실수일 때) 모든 $a_{k,l}$이 실수라 하고 (2)의 공통의 값을 $S$라 하자.
   - (i) $S < \infty$이면, 모든 $k$에서 $l$번째 항이 $a_{k,l}$인 수열의 급수가 수렴하고, $k$번째 항이 그 합인 수열의 급수도 수렴하며 그 합이 $S$이다. 열마다 더한 쪽도 같고, 모든 전단사 $\sigma : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$에서 $m$번째 항이 $a_{\sigma(m)}$인 수열의 급수가 수렴하고 그 합이 $S$이다. 합은 모두 [[sum-of-a-series]]의 뜻이다.
   - (ii) $S = \infty$이면, 모든 전단사 $\sigma$에서 $m$번째 항이 $a_{\sigma(m)}$인 수열의 급수가 발산한다. 또 $l$번째 항이 $a_{k,l}$인 수열의 급수가 발산하는 $k$가 있거나, 그런 급수가 모두 수렴하고 $k$번째 항이 그 합인 수열의 급수가 발산한다. 열마다 더한 쪽도 같다.
:::

:::english
$[0, \infty]$ with its order, addition and suprema is that of the entry "Extended Nonnegative Real Numbers", and the sum $\sum_{n=1}^{\infty}$ of a sequence in $[0, \infty]$ and the sum $\sum_{n \in A}$ over a subset are those of the entry "Sums of Extended Nonnegative Reals". Sequences of sets, pairwise disjoint sequences of sets and $\bigcup_{k=1}^{\infty} A_k$ are those of the entry "Sequences of Sets and Their Unions and Intersections". The pairing function $\pi(k, l) = 2^{k-1}(2l - 1)$ and the two components $\kappa_1$, $\kappa_2$ of its inverse are those of the entry "A Bijection Between ℕ × ℕ and ℕ".

**Double sequences and the two iterated sums.** A function $a : \mathbb{N} \times \mathbb{N} \to [0, \infty]$ is called a **double sequence** in $[0, \infty]$, and $a(k, l)$ is written $a_{k,l}$. For each natural number $k$ there is the sequence whose $l$th term is $a_{k,l}$, and its sum is written $\sum_{l=1}^{\infty} a_{k,l}$. The sum of the sequence whose $k$th term is this sum is written
$$
\sum_{k=1}^{\infty} \sum_{l=1}^{\infty} a_{k,l}
$$
and called the **iterated sum by rows**. The sum $\sum_{l=1}^{\infty} \sum_{k=1}^{\infty} a_{k,l}$, defined in the same way with the roles of $k$ and $l$ exchanged, is called the **iterated sum by columns**. The sequence whose $m$th term is $a_{\kappa_1(m), \kappa_2(m)}$ is called **$a$ arranged in a single row by $\pi$**. For a function $\sigma : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$, $a_{\sigma(m)}$ means $a(\sigma(m))$.

The following hold.

1. (Grouping into disjoint pieces) Let $(A_k)$ be a pairwise disjoint sequence of subsets of $\mathbb{N}$ and $A = \bigcup_{k=1}^{\infty} A_k$. Then for every sequence $(x_n)$ in $[0, \infty]$,
   $$
   \sum_{n \in A} x_n = \sum_{k=1}^{\infty} \sum_{n \in A_k} x_n.
   $$
   The right side is the sum of the sequence whose $k$th term is $\sum_{n \in A_k} x_n$. In particular, if $A = \mathbb{N}$, the left side is $\sum_{n=1}^{\infty} x_n$.
2. (Tonelli) For every double sequence $a$ in $[0, \infty]$,
   $$
   \begin{aligned}
   \sum_{k=1}^{\infty} \sum_{l=1}^{\infty} a_{k,l} &= \sum_{l=1}^{\infty} \sum_{k=1}^{\infty} a_{k,l} \\
   &= \sum_{m=1}^{\infty} a_{\kappa_1(m), \kappa_2(m)}.
   \end{aligned}
   $$
3. (Arranging by any bijection) If $\sigma : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ is a bijection, then $\sum_{m=1}^{\infty} a_{\sigma(m)}$ equals the three values in (2).
4. (Real terms) Suppose every $a_{k,l}$ is real, and let $S$ be the common value in (2).
   - (i) If $S < \infty$, then for every $k$ the series of the sequence whose $l$th term is $a_{k,l}$ converges, the series of the sequence whose $k$th term is its sum converges, and its sum is $S$. The same holds by columns, and for every bijection $\sigma : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ the series of the sequence whose $m$th term is $a_{\sigma(m)}$ converges with sum $S$. All sums are in the sense of the entry "Notation for the Sum of a Series".
   - (ii) If $S = \infty$, then for every bijection $\sigma$ the series of the sequence whose $m$th term is $a_{\sigma(m)}$ diverges. Moreover, either there is a $k$ for which the series of the sequence whose $l$th term is $a_{k,l}$ diverges, or all those series converge and the series of the sequence whose $k$th term is their sum diverges. The same holds by columns.
:::

## 직관

바둑판의 칸마다 동전이 $0$개 이상 놓여 있다고 합시다. 동전을 모두 세는 방법은 여럿입니다. 가로줄마다 세어 더하거나, 세로줄마다 세어 더하거나, 칸을 정해진 순서로 하나씩 훑으며 셀 수 있습니다. 칸이 끝없이 많아도 동전이 음수 개인 칸은 없으므로 어느 방법으로 세든 결과가 같다는 것이 (2)와 (3)입니다. 셋 가운데 하나가 $\infty$이면 나머지도 $\infty$입니다.

증명의 열쇠는 (1)입니다. 자연수 전체를 서로 겹치지 않는 조각들로 나누어 조각마다 더한 뒤 다시 더해도 전체의 합과 같다는 것입니다. 항이 0 이상인 실수이고 조각이 연속한 번호의 묶음이면 [[grouping-terms-of-a-series|항을 묶은 급수]]의 (2)와 (5)가 다루는 상황이고, (1)은 조각이 연속하지 않아도 되도록 넓힌 것입니다. 짝짓기 함수 $\pi$로 바둑판의 칸에 번호를 매기면 가로줄 하나가 번호의 한 조각이 되므로, 행마다 더한 반복합이 (1)의 꼴이 됩니다.

음의 항이 있으면 이 모든 것이 깨질 수 있습니다(아래 반례). 동전 비유에서 "빚"을 놓을 수 있게 하면, 세는 순서에 따라 빚과 동전이 다르게 상쇄되기 때문입니다.

## 증명

:::idea
조각마다 앞의 $N$개 번호까지만 더한 유한 이중 합은 순서를 바꿀 수 있고, 유한 개 조각의 합에서는 상한과 합을 바꿀 수 있다. 이 둘로 (1)의 두 부등식을 얻고, 짝짓기 함수의 가로줄과 세로줄을 조각으로 삼아 (2)를 얻는다.
:::

:::hint
(1)의 한쪽 부등식은 $K$개 조각까지의 합이 전체의 합 이하라는 것이다. 각 번호 $n$은 많아야 한 조각에 들어 있다.
:::

:::hint
다른 쪽은 번호 $N$을 고정하고, $N$ 이하의 번호를 모두 덮는 데 필요한 조각이 유한 개라는 것을 $N$에 대한 귀납법으로 보인다.
:::

:::proof
[[extended-nonnegative-reals]]의 번호를 "확장 실수의 (5)"처럼, [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]]의 번호를 "합 항목의 (1)"처럼 쓴다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다루고, 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]). 원소열을 식으로 정할 때는 [[recursion-theorem|재귀 정리]]의 (1)을 쓴다.

**1의 증명.** 자연수 $k$마다 $(x_n)$을 $A_k$ 밖에서 $0$으로 채운 원소열을 $(x^{(k)}_n)$, $A$ 밖에서 $0$으로 채운 원소열을 $(x^A_n)$이라 하고
$$
\begin{aligned}
y_k &= \sum_{n \in A_k} x_n = \sum_{n=1}^{\infty} x^{(k)}_n, \\
S &= \sum_{n \in A} x_n = \sum_{n=1}^{\infty} x^A_n
\end{aligned}
$$
으로 둔다. [[sequence-of-sets|집합열 항목]]의 (1)에 의해 $n \in A$인 것은 정확히 $n \in A_k$인 $k$가 있을 때이다. 또 서로소이므로 $n \in A_k$인 $k$는 많아야 하나이다($n \in A_k$, $n \in A_j$, $k \ne j$이면 $n \in A_k \cap A_j = \emptyset$이 되어 어긋난다).

*(가) 번호 하나에서의 합.* 자연수 $n$과 $0$ 이상인 정수 $K$에 대하여 다음이 성립한다.

- $n \in A_k$인 $k \le K$가 없으면 $1 \le k \le K$인 모든 $k$에서 $x^{(k)}_n = 0$이므로 합 항목의 (1)의 (iv)에 의해 $\sum_{k=1}^{K} x^{(k)}_n = 0 \le x^A_n$이다. 특히 $n \notin A$이면 어느 $k$에서도 $n \notin A_k$이므로 $\sum_{k=1}^{K} x^{(k)}_n = 0 = x^A_n$이다.
- $n \in A_{k_0}$인 $k_0 \le K$가 있으면 $k \ne k_0$에서 $n \notin A_k$이므로 $x^{(k)}_n = 0$이고, 합 항목의 (1)의 (vi)에 의해 $\sum_{k=1}^{K} x^{(k)}_n = x^{(k_0)}_n = x_n$이다. 이때 $n \in A$이므로 $x^A_n = x_n$이다.

따라서 늘 $\sum_{k=1}^{K} x^{(k)}_n \le x^A_n$이고, $n \notin A$이거나 $n$이 번호가 $K$ 이하인 조각에 들어 있으면 등호가 성립한다.

*(나) 유한 개 조각의 합.* $0$ 이상인 정수 $K$마다, $N$번째 항이 $\sum_{k=1}^{K} \sum_{n=1}^{N} x^{(k)}_n$인 원소열이 단조증가이고 그 극한이 $\sum_{k=1}^{K} y_k$임을 $K$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로 보인다. $K = 0$이면 모든 항이 빈 합 $0$이므로 확장 실수의 (7)의 (iv)에 의해 극한은 $0 = \sum_{k=1}^{0} y_k$이다. $K$에서 성립한다고 하자. 합 항목의 (1)의 (i)에 의해
$$
\begin{aligned}
&\sum_{k=1}^{K+1} \sum_{n=1}^{N} x^{(k)}_n \\
&\quad = \sum_{k=1}^{K} \sum_{n=1}^{N} x^{(k)}_n + \sum_{n=1}^{N} x^{(K+1)}_n
\end{aligned}
$$
이다. 오른쪽 두 원소열은 귀납 가정과 합 항목의 (2)에 의해 단조증가이고 극한이 각각 $\sum_{k=1}^{K} y_k$와 $y_{K+1}$이다. 확장 실수의 (7)의 (iv)에 의해 왼쪽은 단조증가이고 그 극한은 $\sum_{k=1}^{K} y_k + y_{K+1}$이며, 합 항목의 (1)의 (i)에 의해 이것은 $\sum_{k=1}^{K+1} y_k$이다.

*(다) $\sum_{k=1}^{\infty} y_k \le S$.* $K$를 $0$ 이상인 정수라 하자. 자연수 $N$마다 합 항목의 (1)의 (vii)과 (가), 그리고 (1)의 (iii)의 비교에 의해
$$
\sum_{k=1}^{K} \sum_{n=1}^{N} x^{(k)}_n = \sum_{n=1}^{N} \sum_{k=1}^{K} x^{(k)}_n \le \sum_{n=1}^{N} x^A_n
$$
이다. 양쪽 원소열은 단조증가이므로((나)와 합 항목의 (2)) 확장 실수의 (7)의 (iv)에 의해 극한에서 $\sum_{k=1}^{K} y_k \le S$이다. 이것이 모든 $K$에서 성립하므로 $S$는 부분합 전체의 상계이고 $\sum_{k=1}^{\infty} y_k \le S$이다.

*(라) $S \le \sum_{k=1}^{\infty} y_k$.* 먼저 다음을 $N$에 대한 귀납법(시작점 $0$)으로 보인다: $0$ 이상인 정수 $N$마다 자연수 $K$가 있어, $n \le N$이고 $n \in A$인 모든 자연수 $n$이 번호가 $K$ 이하인 조각에 들어 있다. $N = 0$이면 그런 $n$이 없으므로 $K = 1$이면 된다. $N$에서 $K$가 있다고 하자. $N + 1 \notin A$이면 같은 $K$가 $N + 1$에서도 통한다. $N + 1 \in A$이면 $N + 1 \in A_{k'}$인 자연수 $k'$이 있고, $K' = \max\{K, k'\}$([[absolute-value]]의 두 수의 최대)로 두면, 그 항목의 (11)에 의해 $K'$은 $\{K, k'\}$의 최댓값이므로 $K$와 $k'$ 가운데 하나여서 자연수이고 $K \le K'$, $k' \le K'$이다. 따라서 $K'$이 $N + 1$에서 통한다.

이제 자연수 $N$을 잡고 위의 $K$를 잡는다. $n \le N$이면 (가)의 등호 조건에 의해 $x^A_n = \sum_{k=1}^{K} x^{(k)}_n$이다. 합 항목의 (1)의 (ii), (vii), (iii)과 (2)에 의해
$$
\begin{aligned}
\sum_{n=1}^{N} x^A_n &= \sum_{n=1}^{N} \sum_{k=1}^{K} x^{(k)}_n = \sum_{k=1}^{K} \sum_{n=1}^{N} x^{(k)}_n \\
&\le \sum_{k=1}^{K} y_k \le \sum_{k=1}^{\infty} y_k
\end{aligned}
$$
이다(첫째 부등식은 $\sum_{n=1}^{N} x^{(k)}_n \le y_k$를 항별로 쓴 것이다). 이것이 모든 $N$에서 성립하므로 $S \le \sum_{k=1}^{\infty} y_k$이다. (다)와 확장 실수의 (2)의 (ii)에 의해 등식이 성립한다. $A = \mathbb{N}$이면 합 항목의 (7)의 (i)에 의해 $S = \sum_{n=1}^{\infty} x_n$이다.

**2의 증명.** $c_m = a_{\kappa_1(m), \kappa_2(m)}$으로 둔다. [[pairing-of-natural-numbers]]의 (1)에 의해 모든 자연수 $k$, $l$에서 $c_{\pi(k, l)} = a_{\kappa_1(\pi(k,l)), \kappa_2(\pi(k,l))} = a_{k,l}$이다.

*$\pi$의 값의 크기.* 자연수 $k$, $l$에서 $\pi(k, l)$은 자연수이므로 양수이다. [[power-of-a-real-number|실수의 거듭제곱]]의 (1)과 정수의 계산에 의해
$$
\begin{aligned}
&\pi(k, l + 1) \\
&\quad = 2^{k-1}(2l - 1) + 2 \cdot 2^{k-1} \\
&\quad = \pi(k, l) + 2^{k}, \\
&\pi(k + 1, l) \\
&\quad = 2 \cdot 2^{k-1}(2l - 1) = 2\,\pi(k, l)
\end{aligned}
$$
이다. 거듭제곱의 (6)의 (i)에 의해 $0 < 2^k$이므로 $\pi(k, l) < \pi(k, l+1)$이고, $0 < \pi(k, l)$이므로 $\pi(k, l) < \pi(k, l) + \pi(k, l) = \pi(k+1, l)$이다(순서 성질은 [[order-properties-of-reals]]의 (2)의 (ii)). 따라서 [[subsequence]]의 (2)에 의해, $k$를 고정하고 $l$에서의 값이 $\pi(k, l)$인 함수와 $l$을 고정하고 $k$에서의 값이 $\pi(k, l)$인 함수는 모두 첨자열이다.

*행마다 더한 반복합.* 자연수 $k$마다 $B_k = \{m \in \mathbb{N} : \kappa_1(m) = k\}$로 두면 $(B_k)$는 $\mathbb{N}$의 집합열이다. $m \in B_k \cap B_j$이면 $k = \kappa_1(m) = j$이므로 서로소이고, 모든 $m$은 $B_{\kappa_1(m)}$에 들어 있으므로 [[sequence-of-sets|집합열 항목]]의 (1)에 의해 $\bigcup_{k=1}^{\infty} B_k = \mathbb{N}$이다. $l$에서의 값이 $\pi(k, l)$인 첨자열의 값의 집합은 $B_k$이다. $\kappa_1(\pi(k, l)) = k$이므로 값은 $B_k$에 들어 있고, 거꾸로 $m \in B_k$이면 $m = \pi(\kappa_1(m), \kappa_2(m)) = \pi(k, \kappa_2(m))$이기 때문이다. 합 항목의 (7)의 (iii)에 의해
$$
\sum_{m \in B_k} c_m = \sum_{l=1}^{\infty} c_{\pi(k, l)} = \sum_{l=1}^{\infty} a_{k,l}
$$
이다. (1)을 $A = \mathbb{N}$, $(x_n) = (c_m)$, $(A_k) = (B_k)$에 쓰면 $\sum_{m=1}^{\infty} c_m = \sum_{k=1}^{\infty} \sum_{m \in B_k} c_m$이고, 바깥 합의 $k$번째 항이 위의 식에 의해 $\sum_{l=1}^{\infty} a_{k,l}$이므로 두 원소열이 같아 $\sum_{m=1}^{\infty} c_m = \sum_{k=1}^{\infty} \sum_{l=1}^{\infty} a_{k,l}$이다.

*열마다 더한 반복합.* 자연수 $l$마다 $C_l = \{m \in \mathbb{N} : \kappa_2(m) = l\}$로 두면, 위와 같은 이유로 $(C_l)$은 $\mathbb{N}$의 서로소인 집합열이고 그 합집합은 $\mathbb{N}$이다($m \in C_l \cap C_j$이면 $l = \kappa_2(m) = j$이고, $m \in C_{\kappa_2(m)}$이다). $k$에서의 값이 $\pi(k, l)$인 첨자열의 값의 집합은 $C_l$이다. $\kappa_2(\pi(k, l)) = l$이고, $m \in C_l$이면 $m = \pi(\kappa_1(m), l)$이기 때문이다. 합 항목의 (7)의 (iii)에 의해 $\sum_{m \in C_l} c_m = \sum_{k=1}^{\infty} c_{\pi(k, l)} = \sum_{k=1}^{\infty} a_{k,l}$이고, (1)을 $(A_k) = (C_l)$에 쓰면 $\sum_{m=1}^{\infty} c_m = \sum_{l=1}^{\infty} \sum_{k=1}^{\infty} a_{k,l}$이다.

**3의 증명.** $\tau = \pi \circ \sigma : \mathbb{N} \to \mathbb{N}$은 [[composition-preserves-injectivity-and-surjectivity|단사와 전사의 합성]]에 의해 전단사이다. 자연수 $m$에서 $\sigma(m) = (k, l)$이라 하면 $\tau(m) = \pi(k, l)$이고 위에서 본 대로 $c_{\tau(m)} = a_{k,l} = a_{\sigma(m)}$이다. 합 항목의 (6)(재배열)에 의해 $\sum_{m=1}^{\infty} a_{\sigma(m)} = \sum_{m=1}^{\infty} c_{\tau(m)} = \sum_{m=1}^{\infty} c_m$이고, 이것은 (2)의 셋째 값이다.

**4의 증명.** 행마다 더한 쪽을 쓴다. 열마다 더한 쪽은 $k$와 $l$을 바꾸어 같은 문장들을 쓰면 된다. $r_k = \sum_{l=1}^{\infty} a_{k,l}$로 둔다.

(i) 합 항목의 (2)에 의해 $r_k \le \sum_{k=1}^{\infty} r_k = S < \infty$이므로 $r_k$는 실수이다(확장 실수의 (2)의 (iii), (iv)). 합 항목의 (3)의 (i)에 의해 $l$번째 항이 $a_{k,l}$인 수열의 급수는 수렴하고 그 합은 $r_k$이다. $(r_k)$는 항이 모두 실수이고 그 합이 $S < \infty$이므로, 다시 합 항목의 (3)의 (i)에 의해 그 급수가 수렴하고 합이 $S$이다. 전단사 $\sigma$에 대해서는 (3)에 의해 $\sum_{m=1}^{\infty} a_{\sigma(m)} = S < \infty$이고 합 항목의 (3)의 (i)을 쓴다.

(ii) (3)과 합 항목의 (3)의 (ii)에 의해 $m$번째 항이 $a_{\sigma(m)}$인 수열의 급수는 발산한다. 모든 $k$에서 $l$번째 항이 $a_{k,l}$인 수열의 급수가 수렴한다고 하자. 합 항목의 (3)의 (i)에 의해 모든 $r_k$는 실수이고 그 급수의 합이며, $\sum_{k=1}^{\infty} r_k = S = \infty$이므로 합 항목의 (3)의 (ii)에 의해 $(r_k)$의 급수는 발산한다. $\blacksquare$
:::

## 예시와 반례

:::example[홀수 번째와 짝수 번째로 나눈 합]
$x_n = (1/2)^n$이라 하고, $A_1 = \{2, 4, 6, \dots\}$, $A_2 = \{1, 3, 5, \dots\}$, $k \ge 3$이면 $A_k = \emptyset$인 집합열을 봅니다. 이 집합열은 서로소이고 합집합이 $\mathbb{N}$입니다(모든 자연수는 짝수이거나 홀수이고 둘 다는 아닙니다. [[even-and-odd]]). $A_1$은 첨자열 $p_j = 2j$의 값의 집합이고 [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (ii)에 의해 $(1/2)^{2j} = (1/4)^j$이므로, [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]]의 (7)의 (iii), (3)의 (i)과 [[sum-of-a-series]]의 (6)의 (iii)에 의해 $\sum_{n \in A_1} x_n = \sum_{j=1}^{\infty} (1/4)^j = (1/4)/(1 - 1/4) = 1/3$입니다. $A_2$는 첨자열 $p_j = 2j - 1$의 값의 집합이고 $(1/2)^{2j-1} \cdot (1/2) = (1/2)^{2j} = (1/4)^j$에서 $(1/2)^{2j-1} = 2 (1/4)^j$이므로, 같은 항목의 (5)의 상수배까지 쓰면
$$
\sum_{n \in A_2} x_n = \sum_{j=1}^{\infty} 2 \Bigl(\frac{1}{4}\Bigr)^{j} = 2 \cdot \frac{1}{3} = \frac{2}{3}
$$
입니다. $k \ge 3$에서는 합이 $0$입니다. (1)에 의해
$$
\begin{aligned}
\sum_{n=1}^{\infty} \Bigl(\frac{1}{2}\Bigr)^{n} &= \frac{1}{3} + \frac{2}{3} + 0 + 0 + \cdots \\
&= 1
\end{aligned}
$$
이고, 바깥 합은 [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]]의 (4)에 의해 앞의 두 항의 합 $1/3 + 2/3$입니다. 이 값은 등비급수의 합 $(1/2)/(1 - 1/2) = 1$과 같습니다.
:::

:::example[행마다와 열마다와 한 줄로 더한 합]
$a_{k,l} = (1/2)^{k+l}$이라 합시다. $k$를 고정하면 거듭제곱의 지수법칙 $(1/2)^{k+l} = (1/2)^k (1/2)^l$과 [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]]의 (5)의 상수배에 의해 $\sum_{l=1}^{\infty} (1/2)^{k+l} = (1/2)^k \sum_{l=1}^{\infty} (1/2)^l = (1/2)^k$이고, 다시 더하면 $\sum_{k=1}^{\infty} (1/2)^k = 1$입니다. $a_{k,l} = a_{l,k}$이므로 열마다 더한 반복합도 같은 계산으로 $1$입니다. (2)에 의해 한 줄로 늘어놓은 원소열의 합도 $1$입니다. 그 처음 네 항은
$$
\begin{aligned}
c_1 &= a_{1,1} = \tfrac{1}{4}, & c_2 &= a_{2,1} = \tfrac{1}{8}, \\
c_3 &= a_{1,2} = \tfrac{1}{8}, & c_4 &= a_{3,1} = \tfrac{1}{16}
\end{aligned}
$$
입니다($1 = 2^0 \cdot 1$, $2 = 2^1 \cdot 1$, $3 = 2^0 \cdot 3$, $4 = 2^2 \cdot 1$이므로 $\pi^{-1}(1) = (1, 1)$, $\pi^{-1}(2) = (2, 1)$, $\pi^{-1}(3) = (1, 2)$, $\pi^{-1}(4) = (3, 1)$). 넷째 부분합은 $9/16$으로 $1$ 이하입니다.
:::

:::counterexample[항이 음수일 수 있으면 두 반복합이 다를 수 있다]
$a_{k,k} = 1$, $a_{k,k+1} = -1$이고 나머지 칸이 $0$인 실수의 이중첨수 수열을 봅니다. $[0, \infty]$의 원소로 된 것이 아니므로 이 항목이 적용되지 않습니다.

- 행마다: $k$번째 행은 $l = k$에서 $1$, $l = k + 1$에서 $-1$이고 나머지는 $0$입니다. 부분합은 $l \ge k + 1$에서 $0$이므로 급수는 수렴하고 합이 $0$입니다. 모든 행의 합이 $0$이므로 행마다 더한 반복합은 $0$입니다.
- 열마다: 첫째 열은 $a_{1,1} = 1$만 $0$이 아니므로 합이 $1$입니다. $l \ge 2$이면 $l$번째 열은 $k = l - 1$에서 $-1$, $k = l$에서 $1$이므로 합이 $0$입니다. 열마다 더한 반복합은 $1$입니다.

두 반복합이 $0$과 $1$로 다릅니다. 각 급수의 부분합 수열([[series-and-partial-sums]])은 어느 번호부터 모든 항이 같은 수이므로, 그 번호부터 그 수와의 차가 $0$이어서 [[limit-of-sequence]]의 정의에 의해 그 수로 수렴합니다. 그래서 각 급수의 합을 위처럼 셀 수 있습니다.
:::

## 확인 질문

:::check[$a_{1,l} = 1$이고 $k \ge 2$이면 $a_{k,l} = 0$일 때 두 반복합은 각각 무엇이고 어떻게 다른가?]
둘 다 $\infty$입니다. 행마다: 첫째 행의 합은 모든 항이 $1$이므로 $\infty$이고 나머지 행의 합은 $0$이므로 반복합은 $\infty$입니다. 열마다: 각 열은 $k = 1$의 항 $1$만 $0$이 아니므로 열의 합이 모두 $1$이고, 모든 항이 $1$인 원소열의 합은 $\infty$입니다. 같은 값 $\infty$이지만 앞의 것은 안쪽 합 하나가 $\infty$이고, 뒤의 것은 안쪽 합이 모두 실수이고 바깥 합이 $\infty$입니다. (4)의 (ii)의 두 경우입니다.
:::

:::check[(1)에서 조각이 서로소라는 가정을 빼면 어떻게 될 수 있는가?]
같지 않을 수 있습니다. $x_n = (1/2)^n$이고 $A_1 = A_2 = \mathbb{N}$, $k \ge 3$이면 $A_k = \emptyset$이라 하면 합집합은 $\mathbb{N}$이고 $\sum_{n=1}^{\infty} x_n = 1$이지만, 조각마다 더한 합을 다시 더하면 $1 + 1 + 0 + \cdots = 2$입니다. 두 조각에 함께 든 번호의 항이 두 번 더해지기 때문입니다.
:::
