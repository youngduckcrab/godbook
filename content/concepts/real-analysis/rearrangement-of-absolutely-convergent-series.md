---
title: 절대수렴하는 급수의 재배열
title_en: Rearrangements of Absolutely Convergent Series
aliases: [급수의 재배열, 재배열, 재배열한 급수, 절대수렴 급수의 재배열, rearrangement of a series, rearrangement of an absolutely convergent series]
kind: theorem
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: "전단사 σ : ℕ → ℕ 로 항의 순서를 바꾼 수열 (x_{σ(n)}) 을 재배열이라 정의한다. 항이 0 이상인 급수는 재배열해도 수렴과 발산이 바뀌지 않고 합도 같으며, 절대수렴하는 급수의 재배열은 절대수렴하고 합이 같다. 재배열의 재배열도 재배열이고 σ⁻¹ 로 되돌릴 수 있다."
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, function, injective-surjective-bijective, inverse-function, function-composition, composition-is-associative, composition-preserves-injectivity-and-surjectivity, finite-set, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, upper-bound-and-supremum, maximum-of-finite-set, sequence, limit-of-sequence, limit-is-unique, tail-of-a-sequence, series-and-partial-sums, comparison-test, absolute-convergence, alternating-series-test, finite-sum-of-reals, sum-of-a-series, rearranging-a-finite-sum, positive-and-negative-parts]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.6.3절 Rearrangements, 첫 문단과 재배열의 정의 (p.102), Proposition 2.6.3 과 그 증명 (p.102–103). 2.5.4절 Absolute convergence, Proposition 2.5.15 뒤 문단 (p.93). 2.6.6절 Exercise 2.6.15 (p.112)
    checked: original
    note: "출처 2.6.3절(p.102)은 전단사 σ : ℕ → ℕ 에 대하여 급수 Σ x_{σ(k)} 를 대응하는 rearrangement 라 정의하고, Proposition 2.6.3(p.102)은 절대수렴하여 x 로 수렴하는 급수의 재배열이 절대수렴하고 x 로 수렴한다고 진술한다. 이 항목은 급수 대신 수열 x∘σ 를 재배열이라 부르고, 그 급수의 수렴과 합을 말한다. 출처의 증명(p.102–103)은 ε 에 대해 M 을 잡고 {1, …, M} ⊂ σ({1, …, K}) 인 K 를 잡은 뒤, N ≥ K 에서 Q = max σ({1, …, N}) 으로 두고 부분합의 차를 σ(n) > M 인 항의 합으로 누르며, 절대수렴은 |x_n| 에 같은 논법을 쓴다고 적는다. 이 항목은 그 길을 따르지 않는다. 항이 0 이상인 경우인 (2)를 Q = max σ({1, …, N}) 과 rearranging-a-finite-sum 의 (3)으로 σ 와 σ⁻¹ 양쪽에서 보이고, (4)는 양의 부분과 음의 부분으로 (2)에 돌린다. 출처가 'σ 가 전단사이므로'라고만 적고 잡는 K 와 σ(n) > M 인 항의 합의 어림은 이 길에서 필요하지 않다. 2.5.4절 Proposition 2.5.15 뒤 둘째 문단(p.93)은 절대수렴하는 급수는 'can be rearranged arbitrarily' 라고 미리 적는다. (2)와 (3)은 출처 Exercise 2.6.15 a)(p.112, Tonelli)의 '항이 0 이상이면 세 급수가 모두 발산하거나 모두 같은 수로 수렴한다'와 같은 종류의 진술을, 이중 첨자가 아닌 수열의 재배열에 대해 한 것이다. 예시 '이웃한 두 항을 바꾼 재배열'의 수열 (−1/2)ⁿ 의 급수는 출처 Proposition 2.5.12 뒤 문단(p.91–92)의 식 Σ_{n=i}^∞ rⁿ = rⁱ/(1 − r) 에 r = −1/2 을 넣은 것과 같은 합을 쓴다. 반례 '단사이지만 전사가 아닌 함수로 바꾼 수열의 합이 달라지는 예'의 수열 (1/2)ⁿ 의 급수는 출처 Example 2.5.4(p.88)의 Σ 1/2ⁿ 이고, 그 1-꼬리의 합은 위 p.91–92 의 식에 i = 2, r = 1/2 을 넣은 것과 같다. 확인 질문 '$x_n = (-1)^n n^{-1}$일 때, $(x_n)$의 재배열 가운데 급수가 절대수렴하는 것이 있는가?'의 급수는 출처 Example 2.6.4(p.103)의 교대 조화급수와 같은 급수(부호만 반대)이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(리만 재배열의 재귀 상태와 단계 구성 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
수열과 수열의 같음은 [[sequence]]의 것이고, 부분합 수열, 급수의 수렴과 발산은 [[series-and-partial-sums]], 절대수렴은 [[absolute-convergence]], 급수의 합의 기호 $\sum_{n=1}^{\infty}$는 [[sum-of-a-series]]의 것이다. 단사·전사·전단사는 [[injective-surjective-bijective|단사, 전사, 전단사]] 항목, 합성은 [[function-composition]], 역함수와 항등함수 $i_{\mathbb{N}}$은 [[inverse-function]]의 것이다.

**재배열.** $(x_n)$을 수열, 곧 함수 $x : \mathbb{N} \to \mathbb{R}$이라 하고 $\sigma : \mathbb{N} \to \mathbb{N}$을 전단사라 하자. $\sigma$의 공역 $\mathbb{N}$이 $x$의 정의역이므로 합성 $x \circ \sigma : \mathbb{N} \to \mathbb{R}$이 정해진다. 이것은 수열이고 그 $n$번째 항은 $(x \circ \sigma)(n) = x_{\sigma(n)}$이다. 이 수열을 $(x_{\sigma(n)})$으로 쓰고 "$\sigma$로 얻은 $(x_n)$의 **재배열**(rearrangement)"이라 한다. 수열 $(y_n)$이 $(x_n)$의 재배열인 것은 정확히 어떤 전단사 $\sigma : \mathbb{N} \to \mathbb{N}$이 있어 $(y_n) = (x_{\sigma(n)})$일 때이다. $(x_n)$의 재배열의 급수를 "$(x_n)$의 급수를 재배열한 급수"라고도 한다.

다음이 성립한다. 아래에서 $(x_n)$은 수열이고 $\sigma$, $\tau$는 $\mathbb{N}$에서 $\mathbb{N}$으로의 전단사이다.

1. (재배열의 재배열과 되돌리기) $\sigma \circ \tau : \mathbb{N} \to \mathbb{N}$은 전단사이고, $(x_{\sigma(n)})$을 $\tau$로 재배열한 수열은 $\sigma \circ \tau$로 얻은 $(x_n)$의 재배열 $(x_{\sigma(\tau(n))})$이다. 역함수 $\sigma^{-1} : \mathbb{N} \to \mathbb{N}$은 전단사이고, $(x_{\sigma(n)})$을 $\sigma^{-1}$로 재배열한 수열은 $(x_n)$이다. 항등함수 $i_{\mathbb{N}}$은 전단사이고 그것으로 얻은 재배열은 $(x_n)$ 자신이다. 따라서 $(y_n)$이 $(x_n)$의 재배열인 것은 정확히 $(x_n)$이 $(y_n)$의 재배열일 때이다.
2. (항이 $0$ 이상이고 수렴하는 급수) 모든 자연수 $n$에서 $0 \le x_n$이고 $(x_n)$의 급수가 수렴하면, $(x_n)$의 모든 재배열 $(x_{\sigma(n)})$의 급수가 수렴하고
   $$
   \sum_{n=1}^{\infty} x_{\sigma(n)} = \sum_{n=1}^{\infty} x_n
   $$
   이다.
3. (항이 $0$ 이상이고 발산하는 급수) 모든 자연수 $n$에서 $0 \le x_n$이고 $(x_n)$의 급수가 발산하면, $(x_n)$의 모든 재배열의 급수가 발산하고 그 부분합 수열은 위로 유계가 아니다.
4. (절대수렴하는 급수) $(x_n)$의 급수가 절대수렴하면, $(x_n)$의 모든 재배열 $(x_{\sigma(n)})$의 급수가 절대수렴하고
   $$
   \begin{aligned}
   \sum_{n=1}^{\infty} x_{\sigma(n)} &= \sum_{n=1}^{\infty} x_n, \\
   \sum_{n=1}^{\infty} |x_{\sigma(n)}| &= \sum_{n=1}^{\infty} |x_n|
   \end{aligned}
   $$
   이다. 또 $(x_n)$의 급수가 절대수렴하는 것은 정확히 $(x_{\sigma(n)})$의 급수가 절대수렴할 때이다.
:::

:::english
Sequences and equality of sequences are as in the entry on sequences; sequences of partial sums and convergence and divergence of series are as in the entry on series and partial sums, absolute convergence as in the entry on absolute convergence, and the notation $\sum_{n=1}^{\infty}$ for sums of series as in the entry on the notation for the sum of a series. Injective, surjective, and bijective maps are as in the entry on those notions, composition as in the entry on composition, and inverse functions and the identity function $i_{\mathbb{N}}$ as in the entry on inverse relations and inverse functions.

**Rearrangements.** Let $(x_n)$ be a sequence, that is, a function $x : \mathbb{N} \to \mathbb{R}$, and let $\sigma : \mathbb{N} \to \mathbb{N}$ be a bijection. Since the codomain $\mathbb{N}$ of $\sigma$ is the domain of $x$, the composition $x \circ \sigma : \mathbb{N} \to \mathbb{R}$ is defined. It is a sequence, and its $n$th term is $(x \circ \sigma)(n) = x_{\sigma(n)}$. We write this sequence as $(x_{\sigma(n)})$ and call it "the **rearrangement** of $(x_n)$ given by $\sigma$". A sequence $(y_n)$ is a rearrangement of $(x_n)$ exactly when there is a bijection $\sigma : \mathbb{N} \to \mathbb{N}$ with $(y_n) = (x_{\sigma(n)})$. The series of a rearrangement of $(x_n)$ is also called "a rearrangement of the series of $(x_n)$".

The following hold. Below, $(x_n)$ is a sequence and $\sigma$, $\tau$ are bijections from $\mathbb{N}$ to $\mathbb{N}$.

1. (Rearranging a rearrangement, and undoing it) $\sigma \circ \tau : \mathbb{N} \to \mathbb{N}$ is a bijection, and the rearrangement of $(x_{\sigma(n)})$ given by $\tau$ is the rearrangement $(x_{\sigma(\tau(n))})$ of $(x_n)$ given by $\sigma \circ \tau$. The inverse function $\sigma^{-1} : \mathbb{N} \to \mathbb{N}$ is a bijection, and the rearrangement of $(x_{\sigma(n)})$ given by $\sigma^{-1}$ is $(x_n)$. The identity function $i_{\mathbb{N}}$ is a bijection, and the rearrangement it gives is $(x_n)$ itself. Hence $(y_n)$ is a rearrangement of $(x_n)$ exactly when $(x_n)$ is a rearrangement of $(y_n)$.
2. (Convergent series with terms $\ge 0$) If $0 \le x_n$ for every natural number $n$ and the series of $(x_n)$ converges, then for every rearrangement $(x_{\sigma(n)})$ of $(x_n)$ the series converges and
   $$
   \sum_{n=1}^{\infty} x_{\sigma(n)} = \sum_{n=1}^{\infty} x_n .
   $$
3. (Divergent series with terms $\ge 0$) If $0 \le x_n$ for every natural number $n$ and the series of $(x_n)$ diverges, then the series of every rearrangement of $(x_n)$ diverges, and its sequence of partial sums is unbounded above.
4. (Absolutely convergent series) If the series of $(x_n)$ converges absolutely, then for every rearrangement $(x_{\sigma(n)})$ of $(x_n)$ the series converges absolutely and
   $$
   \begin{aligned}
   \sum_{n=1}^{\infty} x_{\sigma(n)} &= \sum_{n=1}^{\infty} x_n, \\
   \sum_{n=1}^{\infty} |x_{\sigma(n)}| &= \sum_{n=1}^{\infty} |x_n| .
   \end{aligned}
   $$
   Moreover, the series of $(x_n)$ converges absolutely exactly when the series of $(x_{\sigma(n)})$ converges absolutely.
:::

## 직관

재배열은 같은 항들을 다른 순서로 더하는 것입니다. 전단사라는 조건은 모든 항을 빠짐없이, 한 번씩만 쓴다는 뜻입니다. [[rearranging-a-finite-sum|유한 합의 재배열]]에서는 순서를 바꿔도 합이 같았지만, 급수의 합은 부분합의 극한이므로 같은 결론이 저절로 나오지 않습니다. 재배열한 급수의 $N$번째 부분합은 원래 수열의 어떤 $N$개 항의 합이지만, 원래 급수의 어느 부분합과도 같지 않을 수 있기 때문입니다.

항이 $0$ 이상이면 이 걱정이 없습니다. 재배열한 급수의 처음 $N$개 항은 원래 수열의 $Q$번째 항까지에 모두 들어 있고($Q$는 그 번호들의 최댓값), 항이 $0$ 이상이므로 그 합은 원래 급수의 $Q$번째 부분합 이하입니다. 그래서 재배열한 급수의 부분합은 원래 급수의 합을 넘지 않고, 거꾸로 되돌려도 마찬가지여서 두 합이 같습니다((2)). 비유하자면 저금통에 동전을 넣는 순서를 바꿔도, 모든 동전을 넣고 나면 들어 있는 돈은 같다는 것입니다. 비유와 다른 점은 동전이 무한히 많아서 "모두 넣고 나면"이 없다는 것이고, 그래서 증명은 부분합의 상한을 견줍니다.

항의 부호가 섞이면 [[positive-and-negative-parts|양의 부분과 음의 부분]]으로 나누어 각각 (2)를 씁니다. 이때 두 부분의 급수가 모두 수렴해야 하고, 그것을 보장하는 것이 절대수렴입니다((4)). 절대수렴하지 않고 수렴하는 급수에서는 두 부분의 급수가 모두 발산하므로 이 논법을 쓸 수 없습니다.

## 증명

:::idea
항이 $0$ 이상이면, 재배열한 급수의 $N$번째 부분합은 [[rearranging-a-finite-sum|유한 합의 재배열]]의 (3)에 의해 원래 급수의 $Q$번째 부분합 이하이다($Q$는 $\sigma(1), \dots, \sigma(N)$의 최댓값). 그래서 재배열의 합은 원래 합 이하이고, $\sigma^{-1}$로 되돌리면 그 반대도 성립한다. 일반의 경우는 양의 부분과 음의 부분에 이것을 쓴다.
:::

:::hint
$\sigma(\{1, \dots, N\})$는 원소를 $N$개 갖는 집합이므로 최댓값 $Q$가 있습니다. $\sigma$를 $\{1, \dots, N\}$에서 $\{1, \dots, Q\}$로의 함수로 보면 단사입니다.
:::

:::hint
$(x_{\sigma(n)})$의 양의 부분 수열은 $(x_n)$의 양의 부분 수열을 $\sigma$로 재배열한 것입니다. (2)를 양의 부분과 음의 부분에 따로 쓰세요.
:::

:::proof
정수 사이의 부등식은 [[order-properties-of-reals]]의 (10)에 의해 실수의 부등식으로 읽고, 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]).

**(1)의 증명.** [[composition-preserves-injectivity-and-surjectivity|합성에 관한 정리]]의 3번에 의해 $\sigma \circ \tau$는 전단사이고, [[composition-is-associative|합성의 결합법칙]]에 의해 $(x \circ \sigma) \circ \tau = x \circ (\sigma \circ \tau)$이므로 $(x_{\sigma(n)})$을 $\tau$로 재배열한 수열은 $\sigma \circ \tau$로 얻은 $(x_n)$의 재배열이고, 그 $n$번째 항은 $x_{\sigma(\tau(n))}$이다. [[finite-set]]의 (F3)에 의해 $\sigma^{-1}$은 $\mathbb{N}$에서 $\mathbb{N}$으로의 전단사이고, [[inverse-function]]의 등식 $\sigma \circ \sigma^{-1} = i_{\mathbb{N}}$과 결합법칙에 의해 $(x \circ \sigma) \circ \sigma^{-1} = x \circ i_{\mathbb{N}}$이다. 모든 $n$에서 $(x \circ i_{\mathbb{N}})(n) = x(n)$이므로 [[sequence]]의 수열의 같음에 의해 $x \circ i_{\mathbb{N}} = x$이다. $i_{\mathbb{N}}$은 $i_{\mathbb{N}}(n) = i_{\mathbb{N}}(m)$이면 $n = m$이고 모든 $m$이 $i_{\mathbb{N}}(m)$이므로 전단사이다. 마지막 문장: $(y_n) = (x_{\sigma(n)})$이면 $(x_n)$은 $\sigma^{-1}$로 얻은 $(y_n)$의 재배열이고, 반대 방향은 $x$와 $y$의 이름을 바꾼 같은 문장이다.

**(2)의 증명.** $S = \sum_{n=1}^{\infty} x_n$이라 하자. 자연수 $N$을 잡고 $E = \{\sigma(k) : k \in \{1, \dots, N\}\}$로 둔다. $k$에서의 값이 $\sigma(k)$인 함수 $h : \{1, \dots, N\} \to E$는 $E$의 정의에 의해 전사이고, $\sigma$가 단사이므로 단사이다. 따라서 [[finite-set]]의 정의에 의해 $E$는 원소를 $N$개 갖는 유한집합이고, $\sigma(1) \in E$이므로 공집합이 아니다. 자연수는 실수이므로 $E \subseteq \mathbb{R}$이고, [[maximum-of-finite-set|유한집합의 최댓값]]의 (1)에 의해 $E$는 최댓값 $Q = \max E$를 갖는다. $Q \in E$이므로 $Q$는 자연수이다. $1 \le k \le N$이면 $\sigma(k) \in E$이므로 $1 \le \sigma(k) \le Q$이다. 따라서 $k$에서의 값이 $\sigma(k)$인 함수 $\tau_N : \{1, \dots, N\} \to \{1, \dots, Q\}$가 있고, $\sigma$가 단사이므로 $\tau_N$은 단사이다.

$(x_{\sigma(n)})$의 $N$번째 부분합은 [[finite-sum-of-reals]]의 (1)에 의해 $\sum_{k=1}^{N} x_{\sigma(k)}$이고, 이것은 범위에서만 정해진 항 $x_{\tau_N(k)}$의 합과 같다(범위 안의 항이 같다. [[finite-sum-of-reals]]의 범위에서만 정해진 항의 합의 약속과 (4)). 항이 $0$ 이상이므로 [[rearranging-a-finite-sum|유한 합의 재배열]]의 (3)과 [[sum-of-a-series]]의 (4)의 (ii)(부분합은 합 이하)에 의해
$$
\sum_{k=1}^{N} x_{\sigma(k)} = \sum_{k=1}^{N} x_{\tau_N(k)} \le \sum_{n=1}^{Q} x_n \le S
$$
이다. 따라서 $(x_{\sigma(n)})$의 부분합 수열은 $S$를 상계로 갖는다. $(x_{\sigma(n)})$의 항은 $0$ 이상이므로 [[comparison-test]]의 (1)에 의해 그 급수는 수렴하고, 그 합 $T$는 부분합 전체의 집합의 상한이다. $S$는 이 집합의 상계이므로 상한의 정의([[upper-bound-and-supremum]])에 의해 $T \le S$이다.

$(x_{\sigma(n)})$는 항이 $0$ 이상이고 급수가 $T$로 수렴하는 수열이고, (1)에 의해 $(x_n)$은 $\sigma^{-1}$로 얻은 그 재배열이다. 위의 논법을 $(x_n)$ 대신 $(x_{\sigma(n)})$에, $\sigma$ 대신 $\sigma^{-1}$에 쓰면 $S \le T$이다. [[order-properties-of-reals]]의 (1)의 (ii)에 의해 $T = S$이다.

**(3)의 증명.** $(x_{\sigma(n)})$의 급수가 수렴한다고 하자. 그 항은 $0$ 이상이고, (1)에 의해 $(x_n)$은 $\sigma^{-1}$로 얻은 그 재배열이므로 (2)를 $(x_{\sigma(n)})$과 $\sigma^{-1}$에 쓰면 $(x_n)$의 급수가 수렴한다. 이것은 가정과 모순이므로 $(x_{\sigma(n)})$의 급수는 발산한다. 항이 $0$ 이상이므로 부분합 수열이 위로 유계이면 [[comparison-test]]의 (1)에 의해 수렴할 것이다. 따라서 부분합 수열은 위로 유계가 아니다.

**(4)의 증명.** $(a_n)$, $(b_n)$을 $(x_n)$의 양의 부분 수열과 음의 부분 수열이라 하자([[positive-and-negative-parts]]). $(x_n)$의 급수가 절대수렴하므로 [[absolute-convergence]]의 (1)에 의해 수렴하고, [[positive-and-negative-parts]]의 (2)에 의해 $(a_n)$과 $(b_n)$의 급수가 수렴하며
$$
\begin{aligned}
\sum_{n=1}^{\infty} x_n &= \sum_{n=1}^{\infty} a_n - \sum_{n=1}^{\infty} b_n, \\
\sum_{n=1}^{\infty} |x_n| &= \sum_{n=1}^{\infty} a_n + \sum_{n=1}^{\infty} b_n
\end{aligned}
$$
이다. $(x_{\sigma(n)})$의 양의 부분 수열의 $n$번째 항은 $\max\{x_{\sigma(n)}, 0\} = a_{\sigma(n)}$이므로, 그것은 $(a_n)$을 $\sigma$로 재배열한 수열 $(a_{\sigma(n)})$이다. 같은 까닭으로 $(x_{\sigma(n)})$의 음의 부분 수열은 $(b_{\sigma(n)})$이다. [[positive-and-negative-parts]]의 (1)에 의해 $a_n$, $b_n$은 $0$ 이상이므로, (2)에 의해 $(a_{\sigma(n)})$과 $(b_{\sigma(n)})$의 급수가 수렴하고 $\sum a_{\sigma(n)} = \sum a_n$, $\sum b_{\sigma(n)} = \sum b_n$이다(합은 모두 $n = 1$부터).

[[positive-and-negative-parts]]의 (1)에 의해 $x_{\sigma(n)} = a_{\sigma(n)} - b_{\sigma(n)}$이므로, [[sum-of-a-series]]의 (3)에 의해 $(x_{\sigma(n)})$의 급수가 수렴하고
$$
\begin{aligned}
\sum_{n=1}^{\infty} x_{\sigma(n)} &= \sum_{n=1}^{\infty} a_{\sigma(n)} - \sum_{n=1}^{\infty} b_{\sigma(n)} \\
&= \sum_{n=1}^{\infty} a_n - \sum_{n=1}^{\infty} b_n = \sum_{n=1}^{\infty} x_n
\end{aligned}
$$
이다. 이제 $(x_{\sigma(n)})$의 급수가 수렴하고 그 양의 부분 수열 $(a_{\sigma(n)})$의 급수가 수렴하므로, [[positive-and-negative-parts]]의 (2)를 $(x_{\sigma(n)})$에 쓰면 $(x_{\sigma(n)})$의 급수는 절대수렴하고
$$
\begin{aligned}
\sum_{n=1}^{\infty} |x_{\sigma(n)}| &= \sum_{n=1}^{\infty} a_{\sigma(n)} \\
&\qquad + \sum_{n=1}^{\infty} b_{\sigma(n)} \\
&= \sum_{n=1}^{\infty} a_n + \sum_{n=1}^{\infty} b_n \\
&= \sum_{n=1}^{\infty} |x_n|
\end{aligned}
$$
이다. 마지막 문장: $(x_{\sigma(n)})$의 급수가 절대수렴하면, (1)에 의해 $(x_n)$은 $\sigma^{-1}$로 얻은 그 재배열이므로 방금 보인 것을 $(x_{\sigma(n)})$과 $\sigma^{-1}$에 써서 $(x_n)$의 급수가 절대수렴한다. $\blacksquare$
:::

## 예시와 반례

:::example[1번째 항과 3번째 항만 바꾼 재배열]
$\sigma(1) = 3$, $\sigma(3) = 1$이고 그 밖의 $n$에서 $\sigma(n) = n$인 함수 $\sigma : \mathbb{N} \to \mathbb{N}$을 생각합시다. 모든 $n$에서 $\sigma(\sigma(n)) = n$이므로, $\sigma(n) = \sigma(m)$이면 $n = \sigma(\sigma(n)) = \sigma(\sigma(m)) = m$이고 모든 $m$은 $\sigma(\sigma(m))$으로 $\sigma$의 값입니다. 곧 $\sigma$는 전단사입니다.

이 재배열은 **어떤 수열에 대해서도** 급수의 수렴과 합을 바꾸지 않습니다. $N \ge 3$이면 $\sigma$의 $\{1, \dots, N\}$ 위의 값은 $\{1, \dots, N\}$에 있고, 같은 까닭으로 $\{1, \dots, N\}$의 전단사이므로, [[rearranging-a-finite-sum]]의 (2)에 의해 $\sum_{n=1}^{N} x_{\sigma(n)} = \sum_{n=1}^{N} x_n$입니다. 두 부분합 수열은 $3$번째 항부터 같으므로 $2$-꼬리가 같고, [[tail-of-a-sequence]]의 (2)에 의해 하나가 수렴하는 것은 정확히 다른 하나가 수렴할 때이며 극한도 같습니다. 처음 두 부분합 $x_3$, $x_3 + x_2$는 원래의 $x_1$, $x_1 + x_2$와 다를 수 있습니다. 이 재배열에는 (4)의 절대수렴이라는 가정이 필요하지 않습니다.
:::

:::example[이웃한 두 항을 바꾼 재배열]
[[alternating-series-test]]의 (2)에 의해 모든 자연수는 $2k$ 꼴과 $2k - 1$ 꼴 가운데 정확히 하나이므로, $\sigma(2k - 1) = 2k$, $\sigma(2k) = 2k - 1$로 정한 함수 $\sigma : \mathbb{N} \to \mathbb{N}$이 있습니다. 모든 $n$에서 $\sigma(\sigma(n)) = n$이므로 위의 예시와 같은 까닭으로 $\sigma$는 전단사입니다.

$x_n = (-1/2)^n$이면 $(x_n)$의 급수는 절대수렴하고([[power-of-a-real-number]]의 (4)에 의해 $|x_n| = (1/2)^n$), [[sum-of-a-series]]의 (6)의 (iii)에 의해 $\sum_{n=1}^{\infty} x_n = (-1/2)(1 + 1/2)^{-1} = -1/3$입니다. 재배열한 급수는 항이 차례로 $x_2 = 1/4$, $x_1 = -1/2$, $x_4 = 1/16$, $x_3 = -1/8, \dots$인 급수이고, (4)에 의해 절대수렴하며 합은 $-1/3$입니다.
:::

:::counterexample[단사이지만 전사가 아닌 함수로 바꾼 수열의 합이 달라지는 예]
$\sigma(n) = n + 1$로 정한 $\sigma : \mathbb{N} \to \mathbb{N}$은 단사이지만, $1$이 값이 아니므로 전사가 아닙니다. $x_n = (1/2)^n$이면 $(x_{\sigma(n)})$은 $(x_n)$의 $1$-꼬리이고, [[sum-of-a-series]]의 꼬리의 합과 (6)의 (iii)에 의해 $\sum_{n=1}^{\infty} x_{n+1} = \sum_{n=2}^{\infty} (1/2)^n = (1/4)(1 - 1/2)^{-1} = 1/2$입니다. 원래 급수의 합은 $(1/2)(1 - 1/2)^{-1} = 1$이므로 다릅니다. 항을 하나라도 빠뜨리면 합이 달라질 수 있으므로, 재배열의 정의는 전사도 요구합니다.
:::

## 확인 질문

:::check[$\sigma$, $\tau$가 $\mathbb{N}$의 전단사이고 $(x_n)$의 급수가 절대수렴하면 $(x_{\sigma(\tau(n))})$의 급수는 어떤가?]
(1)에 의해 $(x_{\sigma(\tau(n))})$은 전단사 $\sigma \circ \tau$로 얻은 $(x_n)$의 재배열입니다. 따라서 (4)에 의해 그 급수는 절대수렴하고 합은 $\sum_{n=1}^{\infty} x_n$입니다. 먼저 $\sigma$로, 다시 $\tau$로 두 번 재배열해도 한 번의 재배열입니다.
:::

:::check[$x_n = (-1)^n n^{-1}$일 때, $(x_n)$의 재배열 가운데 급수가 절대수렴하는 것이 있는가?]
없습니다. 재배열 $(x_{\sigma(n)})$의 급수가 절대수렴한다면 (4)의 마지막 문장에 의해 $(x_n)$의 급수도 절대수렴해야 하는데, [[alternating-series-test]]의 (4)에 의해 이 급수는 절대수렴하지 않습니다. 재배열한 급수가 수렴하는 경우가 있더라도 그 수렴은 조건수렴입니다.
:::
