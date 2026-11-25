---
title: 디리클레 판정법
title_en: Dirichlet's Test
aliases: [디리클레 검정, 디리클레의 판정법, Dirichlet test, Dirichlet's test]
kind: theorem
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 수열 (a_n) 의 부분합이 유계이고 (b_n) 이 단조감소하며 0 으로 수렴하면 a_n b_n 의 급수는 수렴하고, 부분합의 상계 B 에 대해 합의 절댓값은 B b_1 이하이다. b_n 이 0 으로 수렴하고 이웃한 항의 차의 절댓값의 급수가 수렴하는 경우로 넓힌 꼴과, 교대급수 판정법의 수렴 부분이 따름으로 나온다는 것을 함께 진술한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, mathematical-induction, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, basic-limits, squeeze-lemma, tail-of-a-sequence, limit-of-sum-and-product, limits-preserve-inequalities, series-and-partial-sums, linearity-of-series, harmonic-series-diverges, terms-of-convergent-series-tend-to-zero, comparison-test, absolute-convergence, alternating-series-test, finite-sum-of-reals, linearity-and-order-of-finite-sums, telescoping-sum, sum-of-a-series, summation-by-parts]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.5.7절 Exercise 2.5.17 (p.99). 2.6.2절 Proposition 2.6.2 (p.101)
    checked: original
    note: "출처 Exercise 2.5.17(p.99, 'Challenging')은 'Abel's theorem' 이라는 이름으로, Σ x_n 의 부분합 수열이 유계이고 lim λ_n = 0 이며 Σ |λ_{n+1} − λ_n| 이 수렴하면 Σ λ_n x_n 이 수렴한다는 정리를 증명하게 한다(그림으로 대조). 출처는 이 정리의 증명이나 힌트를 주지 않는다. 이 항목의 (2)가 이 정리와 같은 내용이고(출처의 x_n, λ_n 을 이 항목은 a_n, b_n 으로 쓴다), (1)은 (b_n) 이 단조감소인 경우로 좁힌 꼴이다. 이 사이트는 (1)을 '디리클레 판정법'이라 부르고 출처의 이름 'Abel's theorem' 은 쓰지 않는다. 증명은 이 사이트가 쓴 것으로 summation-by-parts 로 부분합을 바꾸어 쓴다. 합의 어림 |S| ≤ B b_1 과 |S| ≤ B Σ |b_{n+1} − b_n| 은 Exercise 2.5.17 의 진술에 없다. 다만 (3)의 |S| ≤ b_1 은 출처 Proposition 2.6.2 의 증명(p.101)이 얻는 0 ≥ s_{2k} ≥ −x_1 에서 나오는 어림과 같다. (3)은 출처 Proposition 2.6.2(p.101, 교대급수 판정법 — 해석학 입문 alternating-series-test 의 (1))의 수렴 부분을 (1)에서 다시 얻은 것이다. 예시 '교대 조화급수의 합의 어림'의 급수는 출처 Exercise 2.5.8(p.98)이 수렴을 묻는 Σ (−1)ⁿ/n 이고, Exercise 5.4.4(p.212)는 Σ (−1)^{n+1}/n 의 합을 구하게 한다. 확인 질문 'a_n = (−1)ⁿ, b_n = (n²)⁻¹ 이면 (1)은 무엇을 말하는가? 다른 판정법과 견주어라.'의 급수는 출처 Exercise 2.5.3 c)(p.97)의 Σ (−1)ⁿ/n² 과 같다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(아벨의 합 공식을 작은 경우에 대입, 예의 합의 어림 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
수열, 유계, 단조감소, 수렴과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, 절댓값은 [[absolute-value]]의 것이며, 부분합, 급수의 수렴과 합은 [[series-and-partial-sums]]의 것이고, 합의 기호 $\sum_{n=1}^{\infty}$는 [[sum-of-a-series]]의 것이다. 아래에서 식으로 쓴 수열은 [[sequence]]의 (1)로 정한 것이다.

$(a_n)$, $(b_n)$을 수열이라 하고, $(a_n)$의 $n$번째 부분합을 $A_n$이라 하자. 부분합 수열 $(A_n)$이 유계라는 것은 어떤 실수 $B$가 있어 모든 자연수 $n$에서 $|A_n| \le B$라는 것이다.

1. (**디리클레 판정법**, Dirichlet's test) $(A_n)$이 유계이고 $(b_n)$이 단조감소이며 $0$으로 수렴하면, $n$번째 항이 $a_n b_n$인 수열의 급수는 수렴한다. 모든 $n$에서 $|A_n| \le B$이면 그 합 $S$는 $|S| \le B\,b_1$을 만족한다.
2. (차의 급수가 절대수렴하는 경우) $(A_n)$이 유계이고 $(b_n)$이 $0$으로 수렴하며, $n$번째 항이 $|b_{n+1} - b_n|$인 수열의 급수가 수렴하면, $n$번째 항이 $a_n b_n$인 수열의 급수는 수렴한다. 모든 $n$에서 $|A_n| \le B$이면 그 합 $S$는
   $$
   |S| \le B \sum_{n=1}^{\infty} |b_{n+1} - b_n|
   $$
   을 만족한다.
3. (교대급수 판정법과의 관계) $a_n = (-1)^n$이면 모든 자연수 $n$에서 $A_n$은 $n$이 홀수일 때 $-1$, 짝수일 때 $0$이므로 $|A_n| \le 1$이다. 따라서 $(b_n)$이 단조감소이고 $0$으로 수렴하면, (1)에 의해 $n$번째 항이 $(-1)^n b_n$인 수열의 급수는 수렴하고 그 합 $S$는 $|S| \le b_1$을 만족한다. 이 수렴은 [[alternating-series-test|교대급수 판정법]]의 (1)이 말하는 수렴과 같다.
:::

:::english
Sequences, bounded, monotone decreasing, convergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, limits of sequences and uniqueness of limits; the absolute value is that of the entry on absolute value; partial sums, convergence and sums of series are those of the entry on series and partial sums; and the symbol $\sum_{n=1}^{\infty}$ is that of the entry on the sum of a series. Sequences written by formulas below are defined by item (1) of the entry on sequences.

Let $(a_n)$ and $(b_n)$ be sequences and let $A_n$ be the $n$th partial sum of $(a_n)$. That the sequence of partial sums $(A_n)$ is bounded means that there is a real number $B$ with $|A_n| \le B$ for every natural number $n$.

1. (**Dirichlet's test**) If $(A_n)$ is bounded and $(b_n)$ is monotone decreasing and converges to $0$, then the series of the sequence whose $n$th term is $a_n b_n$ converges. If $|A_n| \le B$ for every $n$, its sum $S$ satisfies $|S| \le B\,b_1$.
2. (Absolutely convergent series of differences) If $(A_n)$ is bounded, $(b_n)$ converges to $0$, and the series of the sequence whose $n$th term is $|b_{n+1} - b_n|$ converges, then the series of the sequence whose $n$th term is $a_n b_n$ converges. If $|A_n| \le B$ for every $n$, its sum $S$ satisfies
   $$
   |S| \le B \sum_{n=1}^{\infty} |b_{n+1} - b_n| .
   $$
3. (Relation to the alternating series test) If $a_n = (-1)^n$, then for every natural number $n$, $A_n$ is $-1$ when $n$ is odd and $0$ when $n$ is even, so $|A_n| \le 1$. Hence if $(b_n)$ is monotone decreasing and converges to $0$, then by (1) the series of the sequence whose $n$th term is $(-1)^n b_n$ converges and its sum $S$ satisfies $|S| \le b_1$. This convergence is the same as the convergence stated in (1) of the alternating series test.
:::

## 직관

[[alternating-series-test|교대급수 판정법]]은 부호가 번갈아 바뀌는 급수에서 크기가 줄어드는 항들이 서로를 상쇄해 수렴한다는 것이었습니다. 디리클레 판정법은 "부호가 번갈아 바뀐다"를 "$a_n$들을 더한 값이 한없이 커지거나 작아지지 않는다"로 넓힙니다. $a_n$의 부분합이 일정한 범위 $[-B, B]$ 안에 머물고, 거기에 곱하는 $b_n$이 줄어들며 $0$으로 가면, 곱의 합도 정해진 값으로 다가갑니다.

비유하자면 같은 자리를 맴도는 사람의 발걸음에 점점 작은 축척을 곱해 지도에 옮기는 것입니다. 실제 위치(부분합 $A_n$)는 일정한 마당 안을 벗어나지 않고 축척($b_n$)은 줄어들어 $0$으로 가므로, 지도 위의 점은 한 곳으로 모입니다. 마당의 크기가 $B$에, 축척이 $b_n$에 해당합니다. 마당이 없으면, 곧 $A_n$이 유계가 아니면 이 비유도 결론도 깨질 수 있습니다(반례 '부분합이 유계가 아닌 경우').

증명은 [[summation-by-parts|부분합으로 바꾸어 더하기]]로 $\sum_{k=1}^{n} a_k b_k$를 $A_n b_n$과 $\sum A_k (b_k - b_{k+1})$로 바꿉니다. 앞의 것은 유계와 $0$으로 가는 수열의 곱이라 $0$으로 가고, 뒤의 것은 항의 절댓값이 $B\,|b_k - b_{k+1}|$ 이하라서 비교 판정법으로 수렴합니다. (2)는 이 논법이 실제로 쓰는 가정만 남긴 꼴이고, $(b_n)$이 단조감소이면 차의 급수가 망원 합으로 $b_1$이 되어 (1)이 나옵니다.

## 증명

:::idea
부분합으로 바꾸어 더하면 $a_k b_k$의 부분합은 $A_n b_n$과 $A_k (b_k - b_{k+1})$의 부분합의 합이다. 앞의 것은 $0$으로 가고, 뒤의 것은 절대수렴하는 급수의 부분합이다.
:::

:::hint
$|A_k (b_k - b_{k+1})| \le B\,|b_{k+1} - b_k|$이다. 오른쪽의 급수가 수렴한다는 가정을 비교 판정법에 넣어라.
:::

:::hint
$(b_n)$이 단조감소이면 $|b_{k+1} - b_k| = b_k - b_{k+1}$이고, 그 처음 $n$개의 합은 $b_1 - b_{n+1}$이다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (4)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. 자연수는 양의 정수이고([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]) 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다루며, 순서 성질 (10)에 의해 실수의 부등식으로 읽어도 된다. $A_0 = 0$은 [[summation-by-parts]]의 진술의 약속이다.

**2의 증명.** 모든 $n$에서 $|A_n| \le B$라 하자. $|A_1| \le B$이고 [[absolute-value]]의 (2)에 의해 $0 \le |A_1|$이므로 $0 \le B$이다. $n$번째 항이 $a_n b_n$인 수열의 부분합을 $s_n$, $n$번째 항이 $c_n = A_n (b_n - b_{n+1})$인 수열의 부분합을 $u_n$이라 하자.

$(c_n)$의 급수가 절대수렴함을 보인다. [[absolute-value]]의 (4), (3)과 순서 성질 (4)의 (iii)에 의해
$$
\begin{aligned}
|c_n| &= |A_n|\,|b_n - b_{n+1}| \\
&\le B\,|b_{n+1} - b_n|
\end{aligned}
$$
이다. 가정과 [[linearity-of-series|급수의 선형성]]의 (2)에 의해 $n$번째 항이 $B\,|b_{n+1} - b_n|$인 수열의 급수는 수렴하고 그 합은 $B \sum_{n=1}^{\infty} |b_{n+1} - b_n|$이다. 모든 $n$에서 $0 \le |c_n| \le B\,|b_{n+1} - b_n|$이므로 [[comparison-test|비교 판정법]]의 (2)에 의해 $(|c_n|)$의 급수가 수렴하고 그 합은 $B \sum_{n=1}^{\infty} |b_{n+1} - b_n|$ 이하이다. 따라서 [[absolute-convergence|절대수렴]]의 (1)에 의해 $(c_n)$의 급수는 수렴한다. 그 합을 $C$라 하면 [[absolute-convergence]]의 (2)에 의해 $|C| \le \sum_{n=1}^{\infty} |c_n| \le B \sum_{n=1}^{\infty} |b_{n+1} - b_n|$이다.

부분합을 바꾸어 쓴다. [[summation-by-parts|부분합으로 바꾸어 더하기]]의 (2)를 $n + 1$에 쓰고 [[finite-sum-of-reals]]의 (1)을 쓰면, 모든 자연수 $n$에서
$$
\begin{aligned}
s_{n+1} &= A_{n+1} b_{n+1} \\
&\qquad + \sum_{k=1}^{n} A_k (b_k - b_{k+1}) \\
&= A_{n+1} b_{n+1} + u_n
\end{aligned}
$$
이다. 가정에 의해 $(b_n)$은 $0$으로 수렴하고 $(A_n)$은 유계이므로, [[limit-of-sum-and-product]]의 (7)에 의해 $n$번째 항이 $A_n b_n$인 수열은 $0$으로 수렴하고, [[tail-of-a-sequence]]의 (1)에 의해 그 $1$-꼬리, 곧 $n$번째 항이 $A_{n+1} b_{n+1}$인 수열도 $0$으로 수렴한다. $(u_n)$은 $C$로 수렴하므로 [[limit-of-sum-and-product]]의 (1)에 의해 $n$번째 항이 $s_{n+1}$인 수열, 곧 $(s_n)$의 $1$-꼬리는 $0 + C = C$로 수렴한다. [[tail-of-a-sequence]]의 (1)에 의해 $(s_n)$은 $C$로 수렴한다. 따라서 $n$번째 항이 $a_n b_n$인 수열의 급수는 수렴하고 그 합 $S$는 $C$이며, $|S| \le B \sum_{n=1}^{\infty} |b_{n+1} - b_n|$이다.

**1의 증명.** $(b_n)$이 단조감소이고 $0$으로 수렴한다고 하자. [[sequence]]의 (4)에 의해 $k \ge n$이면 $b_k \le b_n$이므로, [[limits-preserve-inequalities|극한과 부등식]]의 (3)(어떤 번호 이후의 꼴)에 의해 $0 \le b_n$이다. 또 $b_{k+1} \le b_k$이므로 순서 성질 (3)의 (i)과 [[absolute-value]]의 (3), (1)에 의해 $|b_{k+1} - b_k| = b_k - b_{k+1}$이다. [[linearity-and-order-of-finite-sums]]의 (1)과 [[telescoping-sum|망원 합]]의 (3)에 의해
$$
\begin{aligned}
\sum_{k=1}^{n} (b_k - b_{k+1}) &= -\sum_{k=1}^{n} (b_{k+1} - b_k) \\
&= b_1 - b_{n+1}
\end{aligned}
$$
이고, [[limit-of-sum-and-product]]의 (5)와 [[tail-of-a-sequence]]의 (1)에 의해 이 부분합 수열은 $b_1 - 0 = b_1$로 수렴한다. 곧 $n$번째 항이 $|b_{n+1} - b_n|$인 수열의 급수는 수렴하고 합은 $b_1$이다. (2)에 의해 $n$번째 항이 $a_n b_n$인 수열의 급수는 수렴하고 $|S| \le B\,b_1$이다.

**3의 증명.** $a_n = (-1)^n$이라 하자. 자연수 $k$에 대하여 $A_{2k-1} = -1$이고 $A_{2k} = 0$임을 $k$에 대한 [[mathematical-induction|수학적 귀납법]]으로 보인다. [[power-of-a-real-number]]의 (5)에 의해 $(-1)^n$은 $n$이 짝수이면 $1$, 홀수이면 $-1$이다. $k = 1$이면 $A_1 = -1$이고 [[series-and-partial-sums]]의 부분합의 정의에 의해 $A_2 = A_1 + 1 = 0$이다. $A_{2k-1} = -1$, $A_{2k} = 0$이면 $2k + 1$은 홀수, $2k + 2$는 짝수이므로([[even-and-odd]]) $A_{2k+1} = A_{2k} + (-1) = -1$이고 $A_{2k+2} = A_{2k+1} + 1 = 0$이다. [[alternating-series-test]]의 (2)에 의해 모든 자연수 $n$은 어떤 자연수 $k$에 대하여 $2k - 1$이거나 $2k$이므로, $A_n$은 $n$이 홀수일 때 $-1$, 짝수일 때 $0$이고 $|A_n| \le 1$이다. 나머지는 (1)을 $B = 1$로 쓴 것이다. 두 판정법이 말하는 것은 같은 수열의 급수가 수렴한다는 같은 명제이다. $\blacksquare$
:::

## 예시와 반례

:::example[교대 조화급수의 합의 어림]
$a_n = (-1)^n$, $b_n = n^{-1}$이면 $(b_n)$은 단조감소이고 $0$으로 수렴하므로([[basic-limits]]의 (2)), (3)에 의해 $(-1)^n n^{-1}$의 급수는 수렴하고 그 합 $S$는 $|S| \le 1$입니다. [[alternating-series-test|교대급수 판정법]]의 (4)는 더 좁은 범위 $-1 \le S \le -1/2$를 줍니다. 디리클레 판정법은 $a_n$의 부분합이 유계라는 것만 쓰므로, 부호가 정확히 번갈아 바뀐다는 정보를 다 쓰는 교대급수 판정법보다 어림이 거칠 수 있습니다.
:::

:::example[b_n 이 모두 0 인 경우]
모든 $b_n$이 $0$이면 $(b_n)$은 단조감소이고 $0$으로 수렴하며, $a_n b_n = 0$이므로 급수의 합은 $0$입니다. (1)의 어림 $|S| \le B\,b_1 = B \cdot 0 = 0$도 등호로 맞습니다.
:::

:::counterexample[부분합이 유계가 아닌 경우]
$a_n = 1$, $b_n = n^{-1}$로 두면 $(b_n)$은 단조감소이고 $0$으로 수렴하지만, $A_n = n$이어서 $(A_n)$은 유계가 아닙니다. $a_n b_n = n^{-1}$이므로 급수는 조화급수이고 발산합니다([[harmonic-series-diverges]]의 (2)). (1)에서 $(A_n)$이 유계라는 가정을 빼면 이렇게 결론이 성립하지 않을 수 있습니다.
:::

:::counterexample[b_n 이 0 으로 가지 않는 경우]
$a_n = (-1)^n$, $b_n = 1$로 두면 $(A_n)$은 유계이고 $(b_n)$은 단조감소이지만 $0$으로 수렴하지 않습니다. $a_n b_n = (-1)^n$은 $0$으로 수렴하지 않으므로 [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (2)에 의해 급수는 발산합니다.
:::

## 확인 질문

:::check[$a_n = (-1)^n$, $b_n = (n^2)^{-1}$이면 (1)은 무엇을 말하는가? 다른 판정법과 견주어라.]
$(b_n)$은 단조감소이고 $0$으로 수렴하므로 $(-1)^n (n^2)^{-1}$의 급수는 수렴하고 합 $S$는 $|S| \le 1$입니다. 이 급수는 항의 절댓값 $(n^2)^{-1}$의 급수가 수렴하므로([[comparison-test|비교 판정법]]의 (6)) 절대수렴하기도 합니다. (1)은 절대수렴인지는 말하지 않습니다.
:::

:::check[(2)에서 $(b_n)$이 단조가 아니어도 되는 예를 하나 들라.]
$b_n$을 $n$이 홀수이면 $n^{-2}$, 짝수이면 $0$으로 두면 $b_1 = 1 > b_2 = 0 < b_3 = 1/9$이므로 단조가 아닙니다. 모든 $n$에서 $0 \le b_n \le (n^2)^{-1}$이고 $(n^2)^{-1}$은 $0$으로 수렴하므로 [[squeeze-lemma|조임 정리]]의 (1)에 의해 $(b_n)$은 $0$으로 수렴합니다. $|b_{n+1} - b_n|$은 $n$과 $n + 1$ 가운데 홀수인 것을 $m$이라 할 때 $m^{-2}$이므로 $n^{-2}$ 이하이고, 비교 판정법으로 그 급수는 수렴합니다. 따라서 $(A_n)$이 유계인 어떤 $(a_n)$에 대해서도 $a_n b_n$의 급수는 (2)에 의해 수렴합니다.
:::
