---
title: 근 판정법
title_en: Root Test
aliases: [코시의 근 판정법, 거듭제곱근 판정법, root test, Cauchy root test]
kind: theorem
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 수열의 항의 절댓값의 n제곱근이 어떤 번호부터 1 보다 작은 한 수 r 이하이면 급수는 절대수렴하고, 1 이상인 항이 끝없이 나오면 발산한다. 그 n제곱근의 수열이 유계이면 상극한 L 이 1 보다 작을 때 절대수렴, 1 보다 클 때 발산하고 L = 1 이면 판정할 수 없으며, 유계가 아니면 발산한다. 상극한의 0 이상의 배와 상극한 근처의 항에 관한 사실을 함께 진술한다.
requires: [proof-by-contradiction, natural-numbers-are-infinite, prime-number, real-number-arithmetic, real-order-axioms, order-properties-of-reals, upper-bound-and-supremum, supremum-and-arithmetic, absolute-value, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, basic-limits, convergent-sequence-is-bounded, limit-of-sum-and-product, limit-superior-and-inferior, convergence-iff-limsup-equals-liminf, series-and-partial-sums, geometric-series, terms-of-convergent-series-tend-to-zero, harmonic-series-diverges, comparison-test, absolute-convergence, ratio-test-for-series, archimedean-property, nth-root, limits-of-nth-roots]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.6.1절 Root test, Proposition 2.6.1 과 그 증명, 각주 (p.100). 2.3.5절 Exercise 2.3.12, 2.3.19 (p.82–83), Exercise 2.3.20 (p.83). 2.6.5절 Example 2.6.9 (p.107), Proposition 2.6.10 의 증명 (p.107–108). 6.2.4절 Corollary 6.2.13 의 증명 (p.242). 2.6.6절 Exercise 2.6.1 d) (p.110)
    checked: original
    note: "출처 Proposition 2.6.1(p.100)은 L = lim sup |x_n|^{1/n} 에 대해 L < 1 이면 절대수렴, L > 1 이면 발산이라고 진술한다. 출처는 상극한이 ∞ 일 수 있게 두고 각주(p.100)에서 L = ∞ 는 Exercise 2.3.20(p.83)을 보거나 {|x_n|^{1/n}} 이 유계가 아니면 {x_n} 도 유계가 아니라는 것으로 처리하라고 적는다. 이 강의는 실수열의 상극한을 유계인 수열에만 쓰므로(해석학 입문 limit-superior-and-inferior) 이 항목의 (3)은 (ⁿ√|x_n|) 이 유계일 때만 진술하고, 유계가 아닌 경우를 (4)로 따로 진술한다. 출처의 |x_n|^{1/n} 은 이 항목에서 ⁿ√|x_n| (nth-root)이다. 출처의 증명은 L > 1 이면 L 로 수렴하는 부분수열을 잡아 그 항이 0 으로 가지 않음을 보이고, L < 1 이면 L < r < 1 인 r 를 잡아(pick) 상극한의 정의로 어떤 M 부터 |x_n| < rⁿ 이 되게 하고 부분합을 등비급수의 꼬리로 누른다. 이 항목은 부분수열을 쓰지 않고 (6)의 (ii)(상한의 정의)로 L > 1 쪽을 (2)에 넘기며, r 는 (L + 1)/2 로 식으로 정하고, 부분합의 어림 대신 해석학 입문 comparison-test 의 (4)와 geometric-series 의 (2)를 쓴다. (1)의 '어떤 번호부터 ⁿ√|x_n| ≤ r < 1' 꼴과 (2)는 출처의 증명 안에서 쓰는 단계를 진술로 올린 것이다. (3)의 (iii)의 두 수열 (n²)⁻¹, n⁻¹ 의 판정은 이 항목이 limits-of-nth-roots 로 계산한 것이고, 같은 두 수열을 해석학 입문 ratio-test-for-series 의 (5)가 비의 극한이 1 인 예로 든다. (5)는 출처 Proposition 2.6.10 의 증명(p.108)이 근거를 적지 않고 lim sup |a_n (x − x₀)ⁿ|^{1/n} = |x − x₀| lim sup |a_n|^{1/n} 이라고 쓰는 성질이고, Corollary 6.2.13 의 증명(p.242)도 lim sup |n c_n|^{1/n} ≤ (1 + ε) lim sup |c_n|^{1/n} 에서 같은 성질을 쓴다. (6)의 (i)은 출처 Exercise 2.3.19(p.83)가 묻는 것(어떤 M 부터 x_k − lim sup x_n < ε)과 같은 내용이고, Exercise 2.3.12(p.82)는 '모든 r > s 에 대해 어떤 M 부터 x_n < r' 인 수 s 들의 하한이 상극한이라는 것을 묻는다. 반례 '모든 항이 1 보다 작은 n제곱근'의 수열 n⁻¹ 은 조화급수이다. 반례 'n제곱근이 유계가 아닌 수열'의 nⁿ 은 출처 Example 2.6.9(p.107)의 Σ nⁿxⁿ 에서 x = 1 인 경우이다. 확인 질문 'n번째 항이 (n/(2n + 1))ⁿ인 수열의 급수는 수렴하는가?'는 출처 Exercise 2.6.1 d)(p.110)의 nⁿ/(n + 1)^{2n} 처럼 항이 n제곱 꼴이라 n제곱근이 바로 계산되는 같은 발상이다. 출처 Example 2.6.9(p.107)는 Σ nⁿxⁿ 의 lim sup |nⁿxⁿ|^{1/n} = ∞ 로 발산을 보이는데, (4)가 이 경우를 다룬다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(경계 c = 0, L = 1 의 예 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
수열, 유계, 위로 유계, 수렴, 발산과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, 절댓값은 [[absolute-value]]의 것이다. 급수의 수렴과 발산은 [[series-and-partial-sums]]의 것이고, 절대수렴은 [[absolute-convergence]]의 것이며, $n$제곱근은 [[nth-root]]의 것이다. 상극한 $\limsup_{n \to \infty}$와 그 항목의 $S_n$, $a_n$은 [[limit-superior-and-inferior]]의 것이며, 상극한은 유계인 수열에만 정의되어 있다. 아래에서 식으로 쓴 수열은 [[sequence]]의 (1)로 정한 것이다.

$(x_n)$을 수열이라 하자. 모든 자연수 $n$에서 $0 \le |x_n|$이므로 $\sqrt[n]{|x_n|}$이 정해지고, $n$번째 항이 $y_n = \sqrt[n]{|x_n|}$인 수열 $(y_n)$이 있다. 모든 $n$에서 $0 \le y_n$이므로 $(y_n)$이 유계인 것은 정확히 $(y_n)$이 위로 유계일 때이다.

1. (어떤 번호부터 $r$ 이하인 경우) $r < 1$인 실수 $r$와 자연수 $M$이 있어 $M$ 이상인 모든 자연수 $n$에서 $\sqrt[n]{|x_n|} \le r$이면, $(x_n)$의 급수는 절대수렴한다.
2. ($1$ 이상인 항이 끝없이 나오는 경우) 모든 자연수 $M$에 대하여 $n \ge M$이고 $1 \le \sqrt[n]{|x_n|}$인 자연수 $n$이 있으면, $(x_n)$은 $0$으로 수렴하지 않고 $(x_n)$의 급수는 발산한다.
3. (**근 판정법**, root test) $(y_n)$이 유계라 하고 $L = \limsup_{n \to \infty} \sqrt[n]{|x_n|}$으로 두자.
   - (i) $L < 1$이면 $(x_n)$의 급수는 절대수렴한다.
   - (ii) $1 < L$이면 $(x_n)$의 급수는 발산한다.
   - (iii) ($L = 1$인 경우) $n$번째 항이 $(n^2)^{-1}$인 수열과 $n$번째 항이 $n^{-1}$인 수열은 둘 다 $(y_n)$이 유계이고 $L = 1$이지만, 앞의 수열의 급수는 수렴하고 뒤의 수열의 급수는 발산한다. 따라서 $L = 1$이라는 것만으로는 급수의 수렴과 발산을 정할 수 없다.
4. (유계가 아닌 경우) $(y_n)$이 유계가 아니면 $(x_n)$의 급수는 발산한다.
5. (상극한의 $0$ 이상의 배) $(z_n)$이 유계인 수열이고 $c$가 $0 \le c$인 실수이면, $n$번째 항이 $c\,z_n$인 수열은 유계이고
   $$
   \limsup_{n \to \infty}\, (c\,z_n) = c \limsup_{n \to \infty} z_n
   $$
   이다.
6. (상극한 근처의 항) $(z_n)$이 유계인 수열이고 $r$가 실수라 하자.
   - (i) $\limsup_{n \to \infty} z_n < r$이면, 자연수 $M$이 있어 $M$ 이상인 모든 자연수 $n$에서 $z_n < r$이다.
   - (ii) $r < \limsup_{n \to \infty} z_n$이면, 모든 자연수 $M$에 대하여 $n \ge M$이고 $r < z_n$인 자연수 $n$이 있다.
:::

:::english
Sequences, bounded, bounded above, convergence, divergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, limits of sequences and uniqueness of limits, and the absolute value is that of the entry on absolute value. Convergence and divergence of series are those of the entry on series and partial sums, absolute convergence is that of the entry on absolute convergence, and the $n$th root is that of the entry on $n$th roots. The limit superior $\limsup_{n \to \infty}$ and the $S_n$, $a_n$ of that entry are those of the entry on limit superior and limit inferior; the limit superior is defined only for bounded sequences. Sequences written by formulas below are defined by item (1) of the entry on sequences.

Let $(x_n)$ be a sequence. Since $0 \le |x_n|$ for every natural number $n$, $\sqrt[n]{|x_n|}$ is defined, and there is a sequence $(y_n)$ whose $n$th term is $y_n = \sqrt[n]{|x_n|}$. Since $0 \le y_n$ for every $n$, $(y_n)$ is bounded if and only if it is bounded above.

1. (At most $r$ from some index on) If there are a real number $r < 1$ and a natural number $M$ such that $\sqrt[n]{|x_n|} \le r$ for every natural number $n \ge M$, then the series of $(x_n)$ converges absolutely.
2. (Terms at least $1$ keep appearing) If for every natural number $M$ there is a natural number $n$ with $n \ge M$ and $1 \le \sqrt[n]{|x_n|}$, then $(x_n)$ does not converge to $0$ and the series of $(x_n)$ diverges.
3. (**Root test**) Suppose $(y_n)$ is bounded and put $L = \limsup_{n \to \infty} \sqrt[n]{|x_n|}$.
   - (i) If $L < 1$, the series of $(x_n)$ converges absolutely.
   - (ii) If $1 < L$, the series of $(x_n)$ diverges.
   - (iii) (The case $L = 1$) For the sequence whose $n$th term is $(n^2)^{-1}$ and the sequence whose $n$th term is $n^{-1}$, $(y_n)$ is bounded and $L = 1$ in both cases, but the series of the former converges and the series of the latter diverges. Hence $L = 1$ alone does not determine whether the series converges or diverges.
4. (The unbounded case) If $(y_n)$ is not bounded, the series of $(x_n)$ diverges.
5. (Nonnegative multiples of the limit superior) If $(z_n)$ is a bounded sequence and $c$ is a real number with $0 \le c$, then the sequence whose $n$th term is $c\,z_n$ is bounded and
   $$
   \limsup_{n \to \infty}\, (c\,z_n) = c \limsup_{n \to \infty} z_n.
   $$
6. (Terms near the limit superior) Let $(z_n)$ be a bounded sequence and $r$ a real number.
   - (i) If $\limsup_{n \to \infty} z_n < r$, there is a natural number $M$ such that $z_n < r$ for every natural number $n \ge M$.
   - (ii) If $r < \limsup_{n \to \infty} z_n$, then for every natural number $M$ there is a natural number $n$ with $n \ge M$ and $r < z_n$.
:::

## 직관

등비급수에서 출발합니다. $0 \le r$일 때 첫째 항과 공비가 $r$인 등비급수의 $n$번째 항은 $r^n$이고, 그 $n$제곱근은 늘 $r$입니다. 일반적인 수열의 $n$번째 항의 절댓값 $|x_n|$을 $r^n$ 꼴로 쓴다고 생각하면, 그 "공비"에 해당하는 것이 $\sqrt[n]{|x_n|}$입니다. 이것이 어떤 번호부터 $1$보다 작은 한 수 $r$ 이하이면 $|x_n| \le r^n$이므로 수렴하는 등비급수와 비교되고((1)), $1$ 이상인 것이 끝없이 나오면 $|x_n| \ge 1$인 항이 끝없이 나와 항이 $0$으로 가지 않습니다((2)).

비유하자면 매달 줄어드는 비율이 일정하지 않은 빚과 같습니다. 각 달의 잔액을 "처음부터 매달 같은 비율로 줄었다면 그 비율이 얼마였을까"로 환산한 값이 $\sqrt[n]{|x_n|}$입니다. 이 환산 비율이 어느 달부터 늘 $0.9$ 이하라면 잔액은 $0.9^n$ 이하로 줄고, 다 합해도 유한합니다. 환산 비율이 $r$에, "어느 달부터"가 (1)의 $M$에 해당합니다.

(1)에서 $r$가 하나로 정해져 있어야 한다는 것이 중요합니다. $\sqrt[n]{|x_n|}$이 모두 $1$보다 작아도 $1$에 한없이 다가가면 발산할 수 있습니다(반례 '모든 항이 1 보다 작은 n제곱근'). (3)은 이것을 상극한으로 말한 것입니다. 상극한 $L$이 $1$보다 작으면 $L$과 $1$ 사이의 수 $r = (L + 1)/2$를 (1)의 $r$로 쓸 수 있고, $1$보다 크면 (2)의 상황이 됩니다. $L = 1$이면 $L$과 $1$ 사이에 끼울 수가 없어, $L$만으로는 판정할 수 없습니다((3)의 (iii)). 이때도 (2)의 가정이 성립하면 발산을 알 수 있습니다. 모든 항이 $1$인 수열은 $L = 1$이고 (2)에 의해 급수가 발산합니다.

(5)와 (6)은 상극한에 관한 사실이고 근 판정법을 쓸 때 함께 쓰입니다. (6)은 (3)의 증명에 쓰입니다. 예컨대 $x_n = c_n t^n$ 꼴의 항에서 $\sqrt[n]{|x_n|} = |t|\sqrt[n]{|c_n|}$이므로, 상극한을 구할 때 상수 $|t|$를 밖으로 꺼내는 데 (5)를 씁니다.

## 증명

:::idea
(1)은 $|x_n| \le r^n$을 얻어 등비급수와 비교하고, (2)는 $|x_n| \ge 1$인 항이 끝없이 나와 항이 $0$으로 가지 않음을 쓴다. (3)은 상극한의 정의로 (1) 또는 (2)의 가정을 만든다.
:::

:::hint
[[nth-root]]의 (5)의 (ii)는 $\sqrt[n]{|x_n|} \le r$을 $|x_n| \le r^n$으로 바꾸어 준다. $0 \le r$인 까닭을 따로 확인하라.
:::

:::hint
상극한은 $a_n = \sup S_n$의 극한이고 $(a_n)$은 단조감소이다. $L < r$이면 $a_M < r$인 $M$이 있고, $r < L$이면 모든 $a_M$이 $r$보다 크다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (4)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이며, "근 (5)"처럼 쓴 것은 [[nth-root]]의 번호이다. 자연수는 양의 정수이므로([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]) [[prime-number]]의 (Z1)에 의해 $1$ 이상이고, 순서 성질 (10)에 의해 양의 실수이다.

**진술의 확인.** [[absolute-value]]의 정의에 의해 $0 \le |x_n|$이므로 $\sqrt[n]{|x_n|}$이 정해지고, 근 (1)에 의해 $0 \le y_n$이다. $(y_n)$이 유계이면 [[sequence]]의 (3)에 의해 위로 유계이다. 거꾸로 모든 $n$에서 $y_n \le B$이면 $0 \le y_n$과 [[absolute-value]]의 정의에 의해 $|y_n| = y_n \le B$이므로 $(y_n)$은 유계이다.

**1의 증명.** 가정을 $n = M$에 쓰면 $0 \le y_M \le r$이므로 순서 성질 (1)의 (v)에 의해 $0 \le r$이다. 따라서 근 (5)의 (ii)에 의해 $M$ 이상인 모든 자연수 $n$에서 $|x_n| \le r^n$이다. 거듭제곱의 성질은 [[power-of-a-real-number]]의 것이다. 그 (1)과 (2)의 (i)에 의해 $r^n = r \cdot r^{n-1}$이므로, $n$번째 항이 $r^n$인 수열은 첫째 항이 $r$이고 공비가 $r$인 등비급수의 항이다([[geometric-series]]). $|r| = r < 1$이므로 [[geometric-series]]의 (2)에 의해 그 급수는 수렴한다. $M$ 이상인 모든 $n$에서 $0 \le |x_n| \le r^n$이므로 [[comparison-test|비교 판정법]]의 (4)에 의해 $n$번째 항이 $|x_n|$인 수열의 급수가 수렴한다. 곧 $(x_n)$의 급수는 절대수렴한다.

**2의 증명.** $(x_n)$이 $0$으로 수렴한다고 하자. [[limit-of-sequence]]의 정의를 $1$이라는 양수에 쓰면 자연수 $M$이 있어 $M$ 이상인 모든 $n$에서 $|x_n| = |x_n - 0| < 1$이다. 가정에 의해 $n \ge M$이고 $1 \le \sqrt[n]{|x_n|}$인 $n$이 있고, 근 (5)의 (ii)를 $r = 1$에 쓰면 ($1^n = 1$) $1 \le |x_n|$이다. 이것은 $|x_n| < 1$과 순서 성질 (1)의 (i)에 의해 함께 성립하지 않으므로 모순이다. 따라서 [[proof-by-contradiction|귀류법]]에 의해 $(x_n)$은 $0$으로 수렴하지 않고, [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (2)에 의해 $(x_n)$의 급수는 발산한다.

**6의 증명.** $(z_n)$의 상극한을 $\ell$로 쓰고, $S_n$과 $a_n$은 $(z_n)$에 대한 [[limit-superior-and-inferior]]의 것이라 하자.

(i) $\ell < r$이라 하자. 그 항목의 (4)에 의해 $\ell = \inf\{a_n : n \in \mathbb{N}\}$이므로, [[upper-bound-and-supremum]]의 (4)에 의해 $r$는 이 집합의 하계가 아니고 $a_M < r$인 자연수 $M$이 있다. $M$ 이상인 자연수 $n$에서는 그 항목의 (2)를 $k = n$, $n$ 자리에 $M$을 넣어 쓰면 $z_n \le a_M$이므로, 순서 성질 (1)의 (v)에 의해 $z_n < r$이다.

(ii) $r < \ell$이라 하고 $M$을 자연수라 하자. 그 항목의 (4)에 의해 $\ell \le a_M = \sup S_M$이므로 순서 성질 (1)의 (v)에 의해 $r < \sup S_M$이다. [[upper-bound-and-supremum]]의 (4)에 의해 $r$는 $S_M$의 상계가 아니고 $r < w$인 $w \in S_M$이 있다. $S_M$의 정의에 의해 $k \ge M$이고 $w = z_k$인 자연수 $k$가 있으므로, 이 $k$가 구하는 $n$이다.

**3의 증명.** (i) $L < 1$이라 하고 $r = (L + 1)/2$로 두자. 순서 성질 (8)에 의해 $L < r < 1$이다. (6)의 (i)을 $(y_n)$과 이 $r$에 쓰면 자연수 $M$이 있어 $M$ 이상인 모든 $n$에서 $y_n < r$, 따라서 $y_n \le r$이다. (1)에 의해 $(x_n)$의 급수는 절대수렴한다.

(ii) $1 < L$이라 하자. (6)의 (ii)를 $(y_n)$과 $r = 1$에 쓰면 모든 자연수 $M$에 대하여 $n \ge M$이고 $1 < y_n$, 따라서 $1 \le y_n$인 $n$이 있다. (2)에 의해 $(x_n)$의 급수는 발산한다.

(iii) 자연수 $n$에서 $(n^2)^{-1}$과 $n^{-1}$은 양수이므로([[power-of-a-real-number]]의 (6)의 (i), 순서 성질 (6)의 (i)) [[absolute-value]]의 정의에 의해 절댓값이 자기 자신이다. (K4)에 의해 $(n^2)^{-1} = (1 \cdot n^2)^{-1}$이고 $n^{-1} = (1 \cdot n^1)^{-1}$이다(거듭제곱 (1)). [[limits-of-nth-roots|n제곱근의 극한]]의 (3)을 $a = 1$, $k = 2$와 $a = 1$, $k = 1$에 쓰면 두 경우 모두 $(y_n)$은 $1$로 수렴한다. [[convergent-sequence-is-bounded|수렴하는 수열은 유계라는 정리]]의 (2)에 의해 $(y_n)$은 유계이고, [[convergence-iff-limsup-equals-liminf|수렴과 상극한·하극한 항목]]의 (1)에 의해 $L = \lim_{n \to \infty} y_n = 1$이다. $(n^2)^{-1}$의 급수는 [[comparison-test|비교 판정법]]의 (6)에 의해 수렴하고, $n^{-1}$의 급수는 조화급수이므로 [[harmonic-series-diverges]]의 (2)에 의해 발산한다. 앞의 급수는 항이 $0$ 이상이므로 [[absolute-convergence]]의 (3)에 의해 절대수렴하기도 한다.

**4의 증명.** $(y_n)$이 유계가 아니라 하자. (2)의 가정이 성립함을 귀류법으로 보인다. 어떤 자연수 $M$이 있어 $n \ge M$이고 $1 \le y_n$인 $n$이 없다고 하자. 그러면 순서 성질 (1)의 (iii)에 의해 $M$ 이상인 모든 $n$에서 $y_n < 1$이다. [[convergent-sequence-is-bounded|수렴하는 수열은 유계라는 정리]]의 (1)을 $k = M$에 쓰면 $n \le M$인 모든 $n$에서 $|y_n| \le B$인 실수 $B$가 있다. [[absolute-value]]의 두 수의 최대 $C = \max\{B, 1\}$로 두면 그 항목의 (10)에 의해 $B \le C$이고 $1 \le C$이다. 모든 자연수 $n$은 $n \le M$이거나 $M \le n$이므로(순서 성질 (1)의 (iv)) 모든 $n$에서 $|y_n| = y_n \le C$이다. 이것은 $(y_n)$이 유계가 아니라는 것에 어긋난다. 따라서 모든 자연수 $M$에 대하여 $n \ge M$이고 $1 \le y_n$인 $n$이 있고, (2)에 의해 $(x_n)$의 급수는 발산한다.

**5의 증명.** 모든 $n$에서 $|z_n| \le B$라 하자. [[absolute-value]]의 (4)와 (1)에 의해 $|c\,z_n| = |c|\,|z_n| = c\,|z_n|$이고, 순서 성질 (4)의 (iii)에 의해 $c\,|z_n| \le cB$이므로 $n$번째 항이 $c\,z_n$인 수열은 유계이다. $\ell = \limsup_{n \to \infty} z_n$으로 두고, $S_n$, $a_n$은 $(z_n)$의 것, $T_n = \{c\,z_k : k \in \mathbb{N},\ k \ge n\}$과 $\alpha_n = \sup T_n$은 $n$번째 항이 $c\,z_n$인 수열의 것이라 하자. [[limit-superior-and-inferior]]의 정의에 의해 $\limsup_{n \to \infty} (c\,z_n) = \lim_{n \to \infty} \alpha_n$이다.

$0 < c$인 경우. 실수 $w$가 $T_n$의 원소인 것은 정확히 $k \ge n$이고 $w = c\,z_k$인 자연수 $k$가 있을 때이고, 이것은 정확히 $w = c\,v$인 $v \in S_n$이 있을 때이다. 따라서 [[supremum-and-arithmetic|상한과 덧셈·곱셈 항목]]의 기호로 $T_n = c\,S_n$이고, 그 항목의 (2)에 의해 $\alpha_n = \sup(c\,S_n) = c \sup S_n = c\,a_n$이다. [[limit-of-sum-and-product]]의 (5)에 의해 $\lim_{n \to \infty} \alpha_n = c \lim_{n \to \infty} a_n = c\,\ell$이다.

$c = 0$인 경우. (K9)에 의해 모든 항이 $0\,z_n = 0$이므로 $T_n = \{0\}$이다. $0$은 $\{0\}$의 원소이면서 상계이므로 [[upper-bound-and-supremum]]의 정의와 (2)에 의해 $\alpha_n = 0$이다. [[basic-limits]]의 (1)에 의해 $\lim_{n \to \infty} \alpha_n = 0 = 0 \cdot \ell$이다((K9)). $\blacksquare$
:::

## 예시와 반례

:::example[짝수 번째와 홀수 번째가 다른 수열]
$n$이 짝수이면 $x_n = (2^n)^{-1}$, 홀수이면 $x_n = (3^n)^{-1}$로 둡니다. [[power-of-a-real-number]]의 (3)에 의해 $(2^n)^{-1} = (2^{-1})^n$이고 $(3^n)^{-1} = (3^{-1})^n$이므로, [[nth-root]]의 (2)에 의해 $\sqrt[n]{|x_n|}$은 $n$이 짝수이면 $1/2$, 홀수이면 $1/3$입니다. 모든 $n$에서 $\sqrt[n]{|x_n|} \le 1/2$이므로 (1)을 $r = 1/2$, $M = 1$에 쓰면 급수는 절대수렴합니다. 상극한으로 보아도 같습니다. 모든 $n$에서 $n$과 $n + 1$ 가운데 하나는 짝수이므로 $S_n$에는 $1/2$이 들어 있고, $S_n$의 원소는 모두 $1/2$ 이하이므로 $a_n = 1/2$이고, $L = 1/2 < 1$입니다.

이 수열에는 [[ratio-test-for-series|급수의 비 판정법]]의 (1)과 (4)를 쓸 수 없습니다. $n$이 짝수일 때의 비 $|x_{n+1}|\,|x_n|^{-1} = 2^n (3^{n+1})^{-1}$은 $2^n < 3^n < 3^{n+1}$이므로 $1$보다 작습니다([[power-of-a-real-number]]의 (6)의 (ii), (iv)). $n$이 $3$ 이상인 홀수일 때의 비 $3^n (2^{n+1})^{-1}$은 $n = 3$에서 $27/16$이고, $n$이 $2$만큼 커질 때마다 $9/4$배가 되므로 늘 $1$보다 큽니다. 그래서 어떤 번호부터 비가 $1$보다 작은 한 수 이하이지도 않고(비 판정법의 (1)), 어떤 번호부터 비가 $1$ 이상이지도 않습니다(비 판정법의 (4)).
:::

:::example[항이 모두 0 인 수열]
모든 항이 $0$인 수열에서는 [[nth-root]]의 (1)에 의해 $\sqrt[n]{|x_n|} = \sqrt[n]{0} = 0$이므로 $(y_n)$은 상수 수열 $0$이고 $L = 0 < 1$입니다. (3)의 (i)에 의해 급수는 절대수렴하고, 실제로 부분합이 모두 $0$이므로 합은 $0$입니다. 근 판정법은 항이 $0$인 경우를 따로 떼지 않아도 됩니다. [[ratio-test-for-series|급수의 비 판정법]]의 (2), (3)이 모든 항이 $0$이 아니라는 가정을 두는 것과 다른 점입니다.
:::

:::counterexample[모든 항이 1 보다 작은 n제곱근]
$x_n = n^{-1}$로 두면 $n \ge 2$에서 $n^{-1} < 1$이므로 [[nth-root]]의 (5)의 (iii)에 의해 $\sqrt[n]{|x_n|} < 1$입니다. 그래도 이 수열의 급수는 조화급수이므로 발산합니다([[harmonic-series-diverges]]). (1)의 가정은 "$\sqrt[n]{|x_n|} < 1$"이 아니라 "어떤 $r < 1$이 있어 $\sqrt[n]{|x_n|} \le r$"입니다. 이 수열에서는 $\sqrt[n]{|x_n|}$이 $1$로 수렴하므로([[limits-of-nth-roots]]의 (3)) $1$보다 작은 어떤 $r$를 잡아도 어느 번호부터는 $\sqrt[n]{|x_n|}$이 $r$보다 큽니다.
:::

:::counterexample[n제곱근이 유계가 아닌 수열]
$x_n = n^n$으로 두면 $0 < n^n$이므로 [[nth-root]]의 (2)에 의해 $\sqrt[n]{|x_n|} = \sqrt[n]{n^n} = n$입니다. [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 어떤 실수 $B$를 잡아도 $B < n$인 자연수 $n$이 있으므로 $(y_n)$은 유계가 아니고, 상극한이 정의되지 않습니다. 이때는 (3)을 쓸 수 없고 (4)에 의해 급수가 발산합니다.
:::

## 확인 질문

:::check[$n$번째 항이 $\bigl(n/(2n + 1)\bigr)^n$인 수열의 급수는 수렴하는가?]
절대수렴합니다. $0 \le n/(2n + 1)$이므로 [[nth-root]]의 (2)에 의해 $\sqrt[n]{|x_n|} = n/(2n + 1)$입니다. $2n < 2n + 1$이므로 $n/(2n + 1) < 1/2$이고, (1)을 $r = 1/2$, $M = 1$에 쓰면 절대수렴합니다. ($n/(2n + 1) = (2 + n^{-1})^{-1}$은 $1/2$로 수렴하므로 $L = 1/2$로 (3)의 (i)을 써도 됩니다.)
:::

:::check[처음 열 개의 항이 $x_n = 5^n$이고 그 뒤로 $x_n = (3^n)^{-1}$인 수열의 급수는 수렴하는가?]
절대수렴합니다. $n \ge 11$에서 $\sqrt[n]{|x_n|} = \sqrt[n]{(3^{-1})^n} = 1/3$이므로 (1)을 $r = 1/3$, $M = 11$에 쓰면 됩니다. 앞의 열 개의 항이 아무리 커도 (1)은 $M$ 이상인 항만 봅니다. 상극한으로 보면 $n \ge 11$에서 $S_n = \{1/3\}$이므로 $a_n = 1/3$이고 $L = 1/3$입니다.
:::

:::check[$(z_n)$이 유계이고 $\limsup_{n \to \infty} z_n = 2$일 때 $\limsup_{n \to \infty} (0 \cdot z_n)$과 $\limsup_{n \to \infty} (3 z_n)$은 무엇인가?]
(5)에 의해 각각 $0 \cdot 2 = 0$과 $3 \cdot 2 = 6$입니다. (5)는 $c = 0$도 포함하므로 앞의 경우에도 쓸 수 있습니다.
:::
