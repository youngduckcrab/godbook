---
title: 조건수렴하는 급수의 예
title_en: Examples of Conditionally Convergent Series
aliases: [조건수렴 급수의 예, 교대 p-급수, alternating p-series, conditionally convergent series examples]
kind: proposition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 실수 p 에 대하여 (−1)ⁿ n^{−p} 의 급수는 정확히 p > 0 일 때 수렴하고 정확히 p > 1 일 때 절대수렴하므로 0 < p ≤ 1 이면 조건수렴한다. 부호가 두 개씩 바뀌는 급수 1 + 1/2 − 1/3 − 1/4 + ⋯ 는 교대급수 판정법의 꼴이 아니지만 디리클레 판정법으로 수렴한다. 교대급수 판정법에서 단조성을 뺄 수 없는 예, 수렴하는 급수의 항의 제곱의 급수가 발산하는 예도 진술한다.
requires: [proof-by-contradiction, mathematical-induction, natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, basic-limits, limits-preserve-inequalities, comparison-with-null-sequence, limit-of-sum-and-product, series-and-partial-sums, linearity-of-series, harmonic-series-diverges, terms-of-convergent-series-tend-to-zero, comparison-test, absolute-convergence, alternating-series-test, square-root-exists, finite-sum-of-reals, natural-logarithm, real-power, sum-of-a-series, p-series, grouping-terms-of-a-series, dirichlet-test]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.5.4절 Absolute convergence 끝 (p.93). 2.5.7절 Exercise 2.5.3 c) (p.97), Exercise 2.5.14 (p.99). 2.6.2절 Proposition 2.6.2 와 그 뒤의 문단 (p.101–102). 2.6.4절 Example 2.6.6 (p.106). 2.6.6절 Exercise 2.6.1 c) (p.110), Exercise 2.6.12, 2.6.13 (p.111)
    checked: original
    note: "출처 2.6.2절 끝(p.102)은 Σ (−1)ⁿ/nᵖ 이 아무리 작은 p > 0 에서도 수렴하지만 p ≤ 1 이면 절대수렴하지 않는다고 증명 없이 적는다. 이 항목의 (1)은 이것을 p ≤ 0 의 발산까지 넣어 증명한 것이고, 수렴은 출처 Proposition 2.6.2(p.101, 해석학 입문 alternating-series-test 의 (1))와 p-series 의 (5)로, 절대수렴은 p-series 의 (1)로 보인다. p = 1 인 교대 조화급수가 조건수렴한다는 것은 출처 2.5.4절 끝(p.93)과 해석학 입문 alternating-series-test 의 (4)에 있다. 출처 Exercise 2.6.1 c)(p.110)는 Σ (−1)ⁿ/n^{1/10} 의 수렴을 묻는데 (1)의 p = 1/10 인 경우이고, Exercise 2.5.3 c)(p.97)의 Σ (−1)ⁿ/n² 은 p = 2 인 경우이다. (3)은 출처 Exercise 2.6.12(p.111)가 찾게 하는 '항이 양수이고 0 으로 가지만 Σ (−1)ⁿ x_n 이 발산하는 수열'의 한 예이다. (4)의 (i)은 출처 Exercise 2.6.13(p.111)이 찾게 하는 '수렴하지만 항의 제곱의 급수가 발산하는 급수'의 예이고, (4)의 (ii)는 같은 연습문제가 비교하라고 가리키는 Exercise 2.5.14(p.99)의 진술(항이 0 이상인 수렴하는 급수의 항의 제곱의 급수는 수렴한다)과 같다. 출처 Example 2.6.6(p.106)은 (−1)ⁿ/√(n + 1) 의 급수를 조건수렴하는 급수로 들고 그 코시 곱이 발산함을 보이는데, (4)의 (i)의 급수에서 번호를 하나 옮기고 부호를 바꾼 급수이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(아벨의 합 공식을 작은 경우에 대입, 예의 합의 어림 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
수열, 단조감소, 수렴, 발산과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, 거듭제곱은 [[power-of-a-real-number]]의 것이며, 양수 밑의 실수 거듭제곱 $n^{-p}$는 [[real-power]]의 것이다. 부분합, 급수의 수렴과 발산은 [[series-and-partial-sums]]의 것이고, 절대수렴과 조건수렴은 [[absolute-convergence]]의 것이며, 합의 기호 $\sum_{n=1}^{\infty}$는 [[sum-of-a-series]]의 것이다. 아래에서 식으로 쓴 수열은 [[sequence]]의 (1)로 정한 것이다. [[alternating-series-test]]의 (2)에 의해 모든 자연수 $n$은 어떤 자연수 $k$에 대하여 $n = 2k - 1$이거나 $n = 2k$이고, 두 꼴 가운데 정확히 하나이며, 그 $k$는 $n$으로 정해진다.

1. (부호가 번갈아 바뀌는 $p$-급수) $p$를 실수라 하고, $n$번째 항이 $(-1)^n n^{-p}$인 수열의 급수를 생각한다.
   - (i) 이 급수가 수렴하는 것은 정확히 $0 < p$일 때이다.
   - (ii) 이 급수가 절대수렴하는 것은 정확히 $1 < p$일 때이다.
   - (iii) 따라서 이 급수가 조건수렴하는 것은 정확히 $0 < p \le 1$일 때이다.
   - (iv) $0 < p$이면 그 합 $S$는 $-1 \le S \le -1 + 2^{-p}$를 만족한다.
2. (부호가 두 개씩 바뀌는 급수) 자연수 $n$이 $n = 2k - 1$ 또는 $n = 2k$일 때 $u_n = (-1)^{k-1}$로 두자. 곧 $(u_n)$은 $1, 1, -1, -1, 1, 1, \dots$이다. $(u_n)$의 $n$번째 부분합을 $U_n$이라 하자.
   - (i) 모든 자연수 $k$에서 $U_{2k-1} = 1$이고 $U_{2k} = 1 + (-1)^{k-1}$이다. 따라서 모든 자연수 $n$에서 $0 \le U_n \le 2$이다.
   - (ii) 실수 $p$에 대하여, $n$번째 항이 $u_n n^{-p}$인 수열의 급수가 수렴하는 것은 정확히 $0 < p$일 때이고, 절대수렴하는 것은 정확히 $1 < p$일 때이다. 따라서 $0 < p \le 1$이면 조건수렴한다. $0 < p$이면 그 합 $S$는 $|S| \le 2$를 만족한다.
   - (iii) $0 < p$이고 $M$이 자연수일 때, $M$ 이상인 모든 자연수 $n$에서 $u_n n^{-p} = (-1)^n x_n$이고 $0 \le x_n$인 수열 $(x_n)$은 없다. 따라서 (ii)의 급수와 그 어떤 꼬리에도 [[alternating-series-test|교대급수 판정법]]의 (1)을 쓸 수 없다.
3. (교대급수 판정법에서 단조성을 뺄 수 없는 예) 자연수 $k$에 대하여 $x_{2k-1} = (k^2)^{-1}$, $x_{2k} = k^{-1}$로 정한 수열 $(x_n)$은 모든 항이 양수이고 $0$으로 수렴하며 단조감소가 아니다. $n$번째 항이 $(-1)^n x_n$인 수열의 급수는 발산한다.
4. (항의 제곱의 급수)
   - (i) $x_n = (-1)^n n^{-1/2}$이면 $(x_n)$의 급수는 수렴하지만, $n$번째 항이 $x_n^2$인 수열의 급수는 발산한다.
   - (ii) 모든 $n$에서 $0 \le x_n$이고 $(x_n)$의 급수가 수렴하면, $n$번째 항이 $x_n^2$인 수열의 급수도 수렴한다.
:::

:::english
Sequences, monotone decreasing, convergence, divergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, limits of sequences and uniqueness of limits; powers are those of the entry on powers of a real number, and the real power $n^{-p}$ with positive base is that of the entry on real powers. Partial sums, convergence and divergence of series are those of the entry on series and partial sums; absolute and conditional convergence are those of the entry on absolute convergence; and the symbol $\sum_{n=1}^{\infty}$ is that of the entry on the sum of a series. Sequences written by formulas below are defined by item (1) of the entry on sequences. By (2) of the alternating series test, every natural number $n$ is $n = 2k - 1$ or $n = 2k$ for some natural number $k$, exactly one of the two forms holds, and that $k$ is determined by $n$.

1. (Alternating $p$-series) Let $p$ be a real number and consider the series of the sequence whose $n$th term is $(-1)^n n^{-p}$.
   - (i) This series converges if and only if $0 < p$.
   - (ii) This series converges absolutely if and only if $1 < p$.
   - (iii) Hence this series converges conditionally if and only if $0 < p \le 1$.
   - (iv) If $0 < p$, its sum $S$ satisfies $-1 \le S \le -1 + 2^{-p}$.
2. (A series whose signs change every two terms) For a natural number $n$ with $n = 2k - 1$ or $n = 2k$, put $u_n = (-1)^{k-1}$. That is, $(u_n)$ is $1, 1, -1, -1, 1, 1, \dots$. Let $U_n$ be the $n$th partial sum of $(u_n)$.
   - (i) For every natural number $k$, $U_{2k-1} = 1$ and $U_{2k} = 1 + (-1)^{k-1}$. Hence $0 \le U_n \le 2$ for every natural number $n$.
   - (ii) For a real number $p$, the series of the sequence whose $n$th term is $u_n n^{-p}$ converges if and only if $0 < p$, and converges absolutely if and only if $1 < p$. Hence it converges conditionally if $0 < p \le 1$. If $0 < p$, its sum $S$ satisfies $|S| \le 2$.
   - (iii) If $0 < p$ and $M$ is a natural number, there is no sequence $(x_n)$ with $0 \le x_n$ and $u_n n^{-p} = (-1)^n x_n$ for every natural number $n \ge M$. Hence (1) of the alternating series test cannot be applied to the series of (ii) or to any of its tails.
3. (Monotonicity cannot be dropped from the alternating series test) The sequence $(x_n)$ defined for natural numbers $k$ by $x_{2k-1} = (k^2)^{-1}$ and $x_{2k} = k^{-1}$ has all terms positive, converges to $0$, and is not monotone decreasing. The series of the sequence whose $n$th term is $(-1)^n x_n$ diverges.
4. (Series of squares of terms)
   - (i) If $x_n = (-1)^n n^{-1/2}$, the series of $(x_n)$ converges, but the series of the sequence whose $n$th term is $x_n^2$ diverges.
   - (ii) If $0 \le x_n$ for every $n$ and the series of $(x_n)$ converges, then the series of the sequence whose $n$th term is $x_n^2$ also converges.
:::

## 직관

조건수렴하는 급수는 항의 크기만으로는 수렴하지 않고, 양의 항과 음의 항이 서로 지워 주어야 수렴하는 급수입니다. (1)은 그 경계를 정확히 보여 줍니다. 크기 $n^{-p}$의 급수는 $p > 1$이어야 수렴하지만([[p-series|p-급수]]), 부호를 번갈아 붙이면 $p > 0$이기만 하면 수렴합니다. 이때 크기 $n^{-p}$가 단조감소하며 $0$으로 가기 때문입니다. $0 < p \le 1$인 구간이 부호가 상쇄해 주는 몫입니다. $p$가 $0$에 가까울수록 항의 크기는 더 천천히 $0$으로 가지만, 그래도 부호가 번갈아 바뀌면 수렴합니다.

비유하자면 앞뒤로 흔들리며 걷는 사람입니다. 한 걸음씩 번갈아 앞뒤로 걷고 보폭이 줄어들면, 보폭을 다 합한 거리가 한없이 길 수 있어도 자리는 한 곳으로 모입니다. 걸음의 방향이 부호에, 보폭이 $n^{-p}$에 해당합니다. (2)는 두 걸음씩 앞으로, 두 걸음씩 뒤로 가는 사람입니다. 방향이 한 걸음마다 바뀌지는 않으므로 교대급수 판정법의 꼴은 아니지만((2)의 (iii)), 지금까지 간 걸음 수의 합이 $0$과 $2$ 사이에 머물므로 [[dirichlet-test|디리클레 판정법]]이 수렴을 알려 줍니다.

(3)은 교대급수 판정법에서 "단조감소"를 빼면 안 된다는 것을 보입니다. 앞으로 가는 보폭 $k^{-1}$이 뒤로 가는 보폭 $(k^2)^{-1}$보다 꾸준히 크면, 둘 다 $0$으로 가도 한 쌍마다 조금씩 앞으로 나아가고 그 나아간 거리의 합이 한없이 커질 수 있습니다. (4)는 조건수렴과 절대수렴의 차이를 다른 각도에서 보여 줍니다. 항이 $0$ 이상이면 수렴하는 급수의 항을 제곱해도 수렴하지만, 부호가 섞이면 그렇지 않을 수 있습니다.

## 증명

:::idea
(1)과 (2)의 수렴은 교대급수 판정법과 디리클레 판정법으로, 절대수렴은 $p$-급수로 판정한다. (3)은 이웃한 두 항을 묶은 급수가 발산함을 보이고 항을 묶은 급수의 (2)를 쓴다.
:::

:::hint
$|(-1)^n n^{-p}| = n^{-p} = (n^p)^{-1}$이다. $p \le 0$이면 [[p-series|p-급수]]의 (3)에 의해 항이 $0$으로 가지 않는다.
:::

:::hint
(3)에서 $p_k = 2k$로 묶으면 $k$번째 묶음은 $-(k^2)^{-1} + k^{-1}$이다. 조화급수와 수렴하는 급수의 합을 생각하라.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (4)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이며, "지수 (4)"처럼 쓴 것은 [[real-power]]의 번호이다. 자연수는 양의 정수이고([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]) 순서 성질 (10)에 의해 양의 실수, 곧 $\mathbb{R}_{>0}$([[natural-logarithm]])의 원소이다. 지수 (4)의 (i), (ii)에 의해 $n^{-p}$는 양수이고 $n^{-p} = (n^p)^{-1}$이다. [[power-of-a-real-number]]의 (5)에 의해 $(-1)^m$은 $0$ 이상인 정수 $m$이 짝수이면 $1$, 홀수이면 $-1$이고, 따라서 $|(-1)^m| = 1$이다. $2k = 2k'$이면 (K11)에 의해 $k = k'$이고 $2k - 1 = 2k' - 1$이어도 마찬가지이므로, 진술의 첫 문단의 $k$는 $n$으로 정해진다.

**두 판정에 함께 쓰는 사실.** $(v_n)$이 모든 $n$에서 $|v_n| = n^{-p}$인 수열이라 하자. (가) $(v_n)$의 급수가 절대수렴하는 것은 정확히 $1 < p$일 때이다. $(|v_n|)$이 $n$번째 항이 $(n^p)^{-1}$인 수열이고, [[p-series|p-급수]]의 (1)에 의해 그 급수는 정확히 $1 < p$일 때 수렴하기 때문이다. (나) $p \le 0$이면 $(v_n)$의 급수는 발산한다. [[p-series|p-급수]]의 (3)에 의해 모든 $n$에서 $1 \le |v_n|$이므로, $(v_n)$이 $0$으로 수렴한다면 [[comparison-with-null-sequence]]의 (2)에 의해 $(|v_n|)$도 $0$으로 수렴하고 [[limits-preserve-inequalities|극한과 부등식]]의 (3)에 의해 $1 \le 0$이 되어 모순이다. 따라서 $(v_n)$은 $0$으로 수렴하지 않고, [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (2)에 의해 그 급수는 발산한다.

**1의 증명.** $v_n = (-1)^n n^{-p}$이면 [[absolute-value]]의 (4)에 의해 $|v_n| = 1 \cdot n^{-p} = n^{-p}$이다. $0 < p$이면 [[p-series|p-급수]]의 (5)에 의해 $n$번째 항이 $n^{-p}$인 수열은 단조감소이고 $0$으로 수렴하므로, [[alternating-series-test|교대급수 판정법]]의 (1)에 의해 급수는 수렴하고 그 합 $S$는 $-(1^{-p}) \le S \le -(1^{-p}) + 2^{-p}$이다. 지수 (4)의 (iv)에 의해 $1^{-p} = 1$이므로 (iv)가 성립한다. $p \le 0$이면 (나)에 의해 발산한다. 이로써 (i)이 성립하고, (ii)는 (가)이다. (iii)은 [[absolute-convergence]]의 조건수렴의 정의와 (i), (ii)를 합친 것이다.

**2의 증명.** (i) $k$에 대한 [[mathematical-induction|수학적 귀납법]]으로 보인다. $k = 1$이면 $u_1 = u_2 = (-1)^0 = 1$이므로 $U_1 = 1$이고 $U_2 = 2 = 1 + (-1)^0$이다. $U_{2k-1} = 1$, $U_{2k} = 1 + (-1)^{k-1}$이라 하자. $2k + 1 = 2(k + 1) - 1$이고 $2k + 2 = 2(k + 1)$이므로 $u_{2k+1} = u_{2k+2} = (-1)^k$이고, [[power-of-a-real-number]]의 정의와 (K9)에 의해 $(-1)^k = (-1)^{k-1}(-1) = -(-1)^{k-1}$이다. 부분합의 정의에 의해
$$
\begin{aligned}
U_{2k+1} &= U_{2k} + (-1)^k \\
&= 1 + (-1)^{k-1} - (-1)^{k-1} \\
&= 1, \\
U_{2k+2} &= U_{2k+1} + (-1)^k \\
&= 1 + (-1)^k
\end{aligned}
$$
이다. $(-1)^{k-1}$은 $1$ 또는 $-1$이므로 $U_{2k}$는 $2$ 또는 $0$이고, 따라서 모든 $n$에서 $0 \le U_n \le 2$이다.

(ii) $|u_n| = 1$이므로 $|u_n n^{-p}| = n^{-p}$이다. 절대수렴은 (가)이고, $p \le 0$이면 (나)에 의해 발산한다. $0 < p$이면 (i)에 의해 모든 $n$에서 $|U_n| \le 2$이고, [[p-series|p-급수]]의 (5)에 의해 $n$번째 항이 $n^{-p}$인 수열은 단조감소이며 $0$으로 수렴하므로, [[dirichlet-test|디리클레 판정법]]의 (1)을 $a_n = u_n$, $b_n = n^{-p}$, $B = 2$에 쓰면 급수는 수렴하고 그 합 $S$는 $|S| \le 2 \cdot 1^{-p} = 2$이다. 조건수렴은 [[absolute-convergence]]의 정의에 의해 따른다.

(iii) 그런 $(x_n)$이 있다고 하자. $2k - 1 \ge M$인 자연수 $k$를 하나 잡는다(예컨대 $k = M$). $n = 2k - 1$로 두면 $n + 1 = 2k$이므로 $u_n = u_{n+1} = (-1)^{k-1}$이다. 가정의 식에 $((-1)^n)^2 = 1$을 곱하면 $x_n = (-1)^n u_n n^{-p}$이고 $x_{n+1} = (-1)^{n+1} u_{n+1} (n + 1)^{-p} = -(-1)^n u_n (n + 1)^{-p}$이다. $c = (-1)^n u_n$은 $1$ 또는 $-1$이고, $x_n = c\,n^{-p}$와 $x_{n+1} = -c\,(n + 1)^{-p}$에서 $n^{-p}$, $(n + 1)^{-p}$는 양수이므로 순서 성질 (4)에 의해 둘 가운데 하나는 음수이다. 이것은 $0 \le x_n$, $0 \le x_{n+1}$에 어긋난다. [[alternating-series-test|교대급수 판정법]]의 (1)은 단조감소이고 $0$으로 수렴하는 $(x_n)$에 대해 $(-1)^n x_n$의 급수를 말하고 그런 $(x_n)$은 모든 항이 $0$ 이상이므로, (ii)의 급수의 어떤 꼬리도 그 꼴로 쓸 수 없다.

**3의 증명.** $(x_n)$은 진술의 첫 문단에 의해 정해진다. [[order-properties-of-reals]]의 (10)과 (6)의 (i), [[power-of-a-real-number]]의 (6)의 (i)에 의해 모든 항이 양수이다. $k$번째 항이 $x_{2k} = k^{-1}$인 수열은 [[basic-limits]]의 (2)에 의해 $0$으로 수렴하고, $x_{2k-1} = (k^2)^{-1} = k^{-1} k^{-1}$((K12)의 (vi))인 수열은 [[limit-of-sum-and-product]]의 (3)에 의해 $0 \cdot 0 = 0$으로 수렴한다. [[alternating-series-test]]의 (3)에 의해 $(x_n)$은 $0$으로 수렴한다. $x_3 = 1/4 < 1/2 = x_4$이므로 단조감소가 아니다.

$t_n = (-1)^n x_n$으로 두고 그 항을 첨자열 $p_k = 2k$로 묶은 수열 $(y_k)$를 생각한다([[grouping-terms-of-a-series|항을 묶은 급수]]). $2k - 1$은 홀수, $2k$는 짝수이므로([[even-and-odd]]) $t_{2k-1} = -(k^2)^{-1}$, $t_{2k} = k^{-1}$이고, [[finite-sum-of-reals]]의 (2), (3)에 의해 모든 자연수 $k$에서
$$
y_k = \sum_{i=2k-1}^{2k} t_i = k^{-1} - (k^2)^{-1}
$$
이다($k = 1$이면 $y_1 = \sum_{i=1}^{2} t_i$이고 $k \ge 2$이면 $p_{k-1} + 1 = 2k - 1$이다). $n$번째 항이 $-(n^2)^{-1}$인 수열의 급수는 [[comparison-test|비교 판정법]]의 (6)과 [[linearity-of-series|급수의 선형성]]의 (2)에 의해 수렴하고, $k^{-1}$의 급수는 [[harmonic-series-diverges]]의 (2)에 의해 발산하므로, [[linearity-of-series|급수의 선형성]]의 (5)에 의해 $(y_k)$의 급수는 발산한다. $(t_n)$의 급수가 수렴한다면 [[grouping-terms-of-a-series|항을 묶은 급수]]의 (2)에 의해 $(y_k)$의 급수가 수렴해야 하므로 모순이다. 따라서 $(t_n)$의 급수는 발산한다.

**4의 증명.** (i) (1)을 $p = 1/2$에 쓰면 $(x_n)$의 급수는 수렴한다. [[absolute-value]]의 (5)와 [[power-of-a-real-number]]의 (1)에 의해 $x_n^2 = |x_n|^2 = (n^{-1/2})^2$이고, 지수 (4)의 (iii)과 (1), (2)에 의해 $(n^{-1/2})^2 = n^{-1}$이다. $n$번째 항이 $n^{-1}$인 수열의 급수는 조화급수이므로 [[harmonic-series-diverges]]의 (2)에 의해 발산한다.

(ii) [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (1)에 의해 $(x_n)$은 $0$으로 수렴하므로, 자연수 $K$가 있어 $K$ 이상인 모든 $n$에서 $x_n = |x_n - 0| < 1$이다. 그런 $n$에서 $0 \le x_n$이고 $x_n \le 1$이므로 순서 성질 (4)의 (iii)에 의해 $x_n x_n \le 1 \cdot x_n = x_n$이고, 순서 성질 (4)의 (iv)에 의해 $0 \le x_n x_n$이다. [[power-of-a-real-number]]의 (1)에 의해 $x_n^2 = x_n x_n$이므로 $K$ 이상인 모든 $n$에서 $0 \le x_n^2 \le x_n$이고, [[comparison-test|비교 판정법]]의 (4)에 의해 $n$번째 항이 $x_n^2$인 수열의 급수는 수렴한다. $\blacksquare$
:::

## 예시와 반례

:::example[p = 1/2 인 교대 급수의 합의 어림]
(1)을 $p = 1/2$에 쓰면 $(-1)^n (\sqrt{n})^{-1}$의 급수는 조건수렴하고([[real-power]]의 (3)에 의해 $n^{1/2} = \sqrt{n}$), 그 합 $S$는 $-1 \le S \le -1 + 2^{-1/2}$입니다. $2^{-1/2} = (\sqrt{2})^{-1}$이고 $1.4 < \sqrt{2}$이므로 ($1.4^2 = 1.96 < 2$) $2^{-1/2} < 1/1.4 < 0.72$이어서 $S < -0.28$입니다.
:::

:::example[부호가 두 개씩 바뀌는 급수의 처음 몇 부분합]
$(u_n)$은 $1, 1, -1, -1, 1, 1, -1, -1, \dots$이고 그 부분합 $U_n$은 $1, 2, 1, 0, 1, 2, 1, 0, \dots$입니다. (2)의 (i)대로 $U_{2k-1}$은 늘 $1$이고 $U_{2k}$는 $2$와 $0$을 오갑니다. $p = 1$이면 급수는 $1 + \tfrac{1}{2} - \tfrac{1}{3} - \tfrac{1}{4} + \tfrac{1}{5} + \tfrac{1}{6} - \cdots$이고, 처음 네 항의 부분합은 $1 + 1/2 - 1/3 - 1/4 = 11/12$입니다.
:::

:::counterexample[단조성을 뺀 교대급수의 처음 몇 항]
(3)의 수열은 $x_1 = 1$, $x_2 = 1$, $x_3 = 1/4$, $x_4 = 1/2$, $x_5 = 1/9$, $x_6 = 1/3, \dots$이고, $(-1)^n x_n$의 급수는 $-1 + 1 - \tfrac{1}{4} + \tfrac{1}{2} - \tfrac{1}{9} + \tfrac{1}{3} - \cdots$입니다. 짝수 번째 부분합은 $0$, $1/4$, $1/4 + 2/9 = 17/36, \dots$으로 $k^{-1} - (k^2)^{-1}$씩 늘어 한없이 커집니다. 항의 크기는 $0$으로 가지만 크기가 번갈아 커졌다 작아졌다 하므로 단조감소가 아니고, 교대급수 판정법의 가정이 성립하지 않습니다.
:::

## 확인 질문

:::check[$n$번째 항이 $(-1)^n n^{-p}$인 급수는 $p = 0$, $p = 1/3$, $p = 3$에서 각각 어떠한가?]
(1)에 의해 $p = 0$이면 발산하고, $p = 1/3$이면 조건수렴하며, $p = 3$이면 절대수렴합니다. $p = 0$에서는 항이 $(-1)^n$이라 $0$으로 가지 않습니다.
:::

:::check[(4)의 (ii)에서 "모든 $n$에서 $0 \le x_n$"을 "어떤 번호부터 $0 \le x_n$"으로 바꾸어도 되는가?]
됩니다. 증명은 어떤 번호 $K$부터 $0 \le x_n^2 \le x_n$임을 보이고 [[comparison-test|비교 판정법]]의 (4)(어떤 번호 이후의 꼴)를 쓰므로, $0 \le x_n$이 어떤 번호부터만 성립해도 그 번호와 $K$ 가운데 큰 것부터 같은 부등식이 성립합니다. (4)의 (i)의 수열은 $0 \le x_n$이 어떤 번호부터도 성립하지 않습니다.
:::
