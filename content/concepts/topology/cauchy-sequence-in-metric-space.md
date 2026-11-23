---
title: 거리공간의 코시 수열
title_en: Cauchy Sequences in a Metric Space
aliases: [Cauchy sequence in a metric space]
kind: definition
field: topology
msc: ["54E35", "54E50"]
level: undergrad
summary: 거리공간의 수열이 코시 수열이라는 것은 모든 양수 ε 에 대해 어떤 번호부터 두 항의 거리가 ε 보다 작다는 것이다. 실수에서는 해석학 입문의 코시 수열과 같고, 수렴하는 수열은 코시 수열이며, 코시 수열은 유계이다. 이산 거리에서의 코시 수열과 부분공간에서의 코시 수열을 다룬다.
requires: [subset, negation-of-quantified-statements, negation-of-conditional, prime-number, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, sequence, limit-of-sequence, basic-limits, cauchy-sequence, metric-space, metric-space-examples, sequence-in-a-space, convergence-in-metric-spaces, limit-unique-in-hausdorff, metric-space-is-hausdorff, bounded-sequence-in-metric-space]
sources:
  - ref: lebl-basic-analysis
    loc: "7.4절 7.4.1소절 Definition 7.4.1 과 그 아래 문단, Proposition 7.4.2 와 증명 (p.279), 그 다음 쪽의 문단 (p.280); 7.3.4소절 연습문제 7.3.6 (p.277); 7.4.2소절 Example 7.4.15, Remark 7.4.16 (p.285), Theorem 7.4.11 의 증명 (p.283); 7.4.3소절 연습문제 7.4.3 a) (p.285), 7.4.19 (p.286); 2.4절 Proposition 2.4.4, Example 2.4.2 (p.84)"
    checked: original
    note: "정의는 출처 Definition 7.4.1(p.279)과 같다(n ≥ M 이고 k ≥ M 인 모든 n, k 에서 d(x_n, x_k) < ε). 출처는 정의 아래 문단에서 보통 거리를 준 ℝ 에서는 2장의 코시 수열과 같은 뜻이라고 적고, 이 항목의 (2)가 그것을 증명한다. (3)은 출처 Proposition 7.4.2(p.279)와 같은 진술이고, 증명도 출처처럼 ε/2 와 거리의 삼각부등식을 쓴다. (4)는 출처 Proposition 2.4.4(p.84, 실수의 코시 수열은 유계)를 거리공간에 적은 것이다. 이 항목은 한 점에서 잰 거리의 실수열이 해석학 입문의 코시 수열이 된다는 것으로 그 명제에 돌린다. (5)의 '이산 거리에서는 어느 번호부터 상수'는 출처 연습문제 7.3.6(p.277: 이산 거리에서 수렴하는 수열은 어떤 K 부터 x_n = x_K)의 결론을 코시 수열에 대해 적은 것이고, 출처 연습문제 7.4.3 a)(p.285: 이산 거리를 준 공간은 완비이다)와 Example 7.4.15 (i)(p.285)의 풀이에 드는 사실이다. 확인 질문 '이산 거리를 준 공간에 상수 수열이 아닌 코시 수열이 있을 수 있는가'도 같은 사실을 쓴다. 예시 '부분공간에서 수렴하지 않는 코시 수열'은 출처 p.280 의 예({1/n} 은 (0, 1] 에서 코시 수열이지만 (0, 1] 안에 극한이 없다)와 같은 대상, 같은 결론이다. 그 수열이 ℝ 에서 코시 수열이라는 것은 출처 Example 2.4.2(p.84)와 같은 결론이다. 반례 '같은 수열이 거리에 따라 코시가 아닐 수 있다'는 출처 Remark 7.4.16(p.285: 코시 수열은 거리에 달려 있다)과 같은 방향의 내용이고, 출처 연습문제 7.4.19 e)(p.286: ℝ 위의 다른 거리 d′ 로는 코시이지만 보통 거리로는 코시가 아닌 수열을 찾아라)와 같은 발상(한 수열의 코시 여부가 거리에 따라 달라진다)이다. 확인 질문 'ℤ 에서 코시 수열은 어떤 수열인가'는 출처 Theorem 7.4.11 의 증명(p.283)이 쓰는 발상(서로 다른 항의 거리가 어떤 양수 이상이면 코시인 부분수열이 없다)과 같은 발상이다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 단원 글의 거짓 문장 1건, 뒤 항목을 예고하던 문장 1건, 근거 없이 쓴 작은 사실 4건, 메모의 위치 2건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
거리공간과 그 예(보통 거리, 이산 거리, 부분공간 거리 $d_Y$)는 [[metric-space]], [[metric-space-examples]]의 것이다. 수열과 그 수렴은 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 것이고, 거리공간에는 늘 거리위상을 준다. 거리공간의 수열의 유계는 [[bounded-sequence-in-metric-space]]의 것이다. 실수열의 코시 수열은 해석학 입문의 [[cauchy-sequence]]의 것이다. 아래에서 $(X, d)$는 거리공간이고 $(x_n)$은 $X$의 수열이다.

**코시 수열.** $(x_n)$이 $(X, d)$의 **코시 수열**(Cauchy sequence)인 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 자연수 $M$이 있어 $n \ge M$이고 $k \ge M$인 모든 자연수 $n$, $k$에서 $d(x_n, x_k) < \varepsilon$일 때이다. 이때 "$(x_n)$은 $(X, d)$에서 코시이다"라고도 하고, 거리를 밝혀야 할 때는 "$d$로 코시"라고 쓴다.

다음이 성립한다.

1. (코시 수열이 아니라는 것) $(x_n)$이 코시 수열이 아닌 것은 정확히, 어떤 양의 실수 $\varepsilon$이 있어 모든 자연수 $M$에 대하여 $n \ge M$, $k \ge M$이고 $d(x_n, x_k) \ge \varepsilon$인 자연수 $n$, $k$가 있을 때이다.
2. (실수에서의 코시 수열) $\mathbb{R}$에 보통 거리를 주면, 실수열 $(x_n)$이 이 항목의 뜻으로 코시 수열인 것은 정확히 $(x_n)$이 [[cauchy-sequence]]의 뜻으로 코시 수열일 때이다. 그래서 실수열에서는 두 뜻을 같은 이름으로 부르고 구별하지 않는다.
3. (수렴하는 수열은 코시 수열이다) $(x_n)$이 수렴하면 $(x_n)$은 코시 수열이다.
4. (코시 수열은 유계이다) $(x_n)$이 코시 수열이면 $(x_n)$은 유계이다.
5. (이산 거리) $d$가 $X$ 위의 이산 거리이면, $(x_n)$이 코시 수열인 것은 정확히 자연수 $M$이 있어 $n \ge M$인 모든 자연수 $n$에서 $x_n = x_M$일 때이다.
6. (부분공간) $Y \subseteq X$이고 $(y_n)$이 $Y$의 수열이면, $(y_n)$이 $(Y, d_Y)$에서 코시 수열인 것은 정확히 $(y_n)$이 $(X, d)$에서 코시 수열일 때이다. 수렴은 이와 달리 $Y$에서와 $X$에서가 다를 수 있다(아래 예시).
:::

:::english
Metric spaces and their examples (the standard metric, the discrete metric, the subspace metric $d_Y$) are as in the entries on metric spaces and examples of metric spaces. Sequences and their convergence are as in the entry on sequences and convergence in a topological space, and a metric space always carries its metric topology. Boundedness of sequences in a metric space is as in the entry on bounded sequences in a metric space. Cauchy sequences of real numbers are as in the analysis entry on Cauchy sequences. Below, $(X, d)$ is a metric space and $(x_n)$ is a sequence in $X$.

**Cauchy sequences.** $(x_n)$ is a **Cauchy sequence** in $(X, d)$ exactly when for every positive real number $\varepsilon$ there is a natural number $M$ such that $d(x_n, x_k) < \varepsilon$ for all natural numbers $n$, $k$ with $n \ge M$ and $k \ge M$. We also say "$(x_n)$ is Cauchy in $(X, d)$", and when the metric must be named, "Cauchy with respect to $d$".

The following hold.

1. (Not being Cauchy) $(x_n)$ is not a Cauchy sequence exactly when there is a positive real number $\varepsilon$ such that for every natural number $M$ there are natural numbers $n$, $k$ with $n \ge M$, $k \ge M$ and $d(x_n, x_k) \ge \varepsilon$.
2. (Cauchy sequences in the reals) If $\mathbb{R}$ carries the standard metric, then a real sequence $(x_n)$ is a Cauchy sequence in the sense of this entry exactly when it is a Cauchy sequence in the sense of the analysis entry on Cauchy sequences. Hence for real sequences the two meanings are called by the same name and not distinguished.
3. (Convergent sequences are Cauchy) If $(x_n)$ converges, then $(x_n)$ is a Cauchy sequence.
4. (Cauchy sequences are bounded) If $(x_n)$ is a Cauchy sequence, then $(x_n)$ is bounded.
5. (The discrete metric) If $d$ is the discrete metric on $X$, then $(x_n)$ is a Cauchy sequence exactly when there is a natural number $M$ such that $x_n = x_M$ for every natural number $n \ge M$.
6. (Subspaces) If $Y \subseteq X$ and $(y_n)$ is a sequence in $Y$, then $(y_n)$ is a Cauchy sequence in $(Y, d_Y)$ exactly when it is a Cauchy sequence in $(X, d)$. Convergence, by contrast, may differ between $Y$ and $X$ (example below).
:::

## 직관

코시 수열은 "항들이 끝내 서로 가까워지는 수열"입니다. 수렴의 정의에는 극한이 될 점 $p$가 나오지만, 코시 수열의 정의에는 수열의 항들끼리의 거리만 나옵니다. 행진하는 사람들에 빗대면, 수렴은 "모두가 어떤 깃발에 가까이 모인다"이고, 코시는 "깃발이 있는지와 상관없이 사람들끼리 서로 가까이 붙어 간다"입니다. "어떤 번호 $M$ 이후의 아무 두 사람"이 정의의 "$n \ge M$이고 $k \ge M$인 모든 $n$, $k$"에 해당합니다. 두 사람의 번호 $n$과 $k$는 서로 얼마든지 멀리 떨어져 있어도 됩니다.

깃발 근처에 모인 사람들은 서로도 가깝습니다. 그래서 수렴하는 수열은 코시 수열입니다((3)). 거꾸로는 공간에 달려 있습니다. 극한이 될 점이 공간에서 빠져 있으면 사람들은 서로 붙어 가지만 모일 깃발이 없습니다. 아래 예시에서 $\mathbb{R}$의 부분공간 $\{x : 0 < x \le 1\}$의 수열 $n^{-1}$이 그렇습니다. 한편 $\mathbb{R}$ 자신에서는 (2)와 해석학 입문의 [[cauchy-iff-convergent|코시 완비성]]에 의해 코시 수열이 늘 수렴합니다.

코시인지 아닌지는 두 항 사이의 거리만으로 정해지므로, 부분공간으로 옮겨도 달라지지 않습니다((6)). 그러나 거리 자체를 바꾸면 달라질 수 있습니다(아래 반례).

## 증명

:::proof
"순서 성질 (n)"은 [[order-properties-of-reals]]의 번호이고, 거리의 조건 (i)–(iv)와 성질 (1)–(2)는 [[metric-space]]의 것이다.

**(1).** 정의는 "모든 양의 실수 $\varepsilon$에 대하여, 자연수 $M$이 있어, 모든 자연수 $n$, $k$에 대하여 ($n \ge M$이고 $k \ge M$이면 $d(x_n, x_k) < \varepsilon$)"이다. [[negation-of-quantified-statements|한정 기호가 있는 명제의 부정]]에 의해 그 부정은 "어떤 양의 실수 $\varepsilon$이 있어, 모든 자연수 $M$에 대하여, 자연수 $n$, $k$가 있어 ($n \ge M$이고 $k \ge M$이면 $d(x_n, x_k) < \varepsilon$)이 거짓"이다. [[negation-of-conditional|조건문의 부정]]에 의해 괄호 안이 거짓인 것은 정확히 $n \ge M$이고 $k \ge M$이며 $d(x_n, x_k) < \varepsilon$이 거짓일 때이고, 순서 성질 (1)의 (iii)에 의해 마지막 것은 정확히 $d(x_n, x_k) \ge \varepsilon$일 때이다.

**(2).** [[metric-space-examples]]의 (1)에 의해 보통 거리는 $d(x, y) = |x - y|$이다. 따라서 이 항목의 정의에 $d(x_n, x_k) = |x_n - x_k|$를 넣은 문장은 [[cauchy-sequence]]의 정의와 글자 그대로 같은 문장이다.

**(3).** $(x_n)$이 $p \in X$로 수렴한다고 하고 $\varepsilon$을 양의 실수라 하자. 순서 성질 (8)에 의해 $0 < \varepsilon/2$이므로, [[convergence-in-metric-spaces]]의 (1)에 의해 $n \ge M$인 모든 $n$에서 $d(x_n, p) < \varepsilon/2$인 자연수 $M$이 있다. $n \ge M$이고 $k \ge M$이면 거리의 삼각부등식 (iv)와 조건 (iii)에 의해
$$
\begin{aligned}
d(x_n, x_k) &\le d(x_n, p) + d(p, x_k) \\
&= d(x_n, p) + d(x_k, p) \\
&< \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon
\end{aligned}
$$
이다(부등식은 순서 성질 (2)의 (iv)). 순서 성질 (1)의 (v)에 의해 $d(x_n, x_k) < \varepsilon$이다.

**(4).** $(x_n)$이 코시 수열이라 하고 $q = x_1$로 둔다. $a_n = d(x_n, q)$로 두면 $n$번째 항이 $a_n$인 실수열이 있다([[sequence]]의 (1)). 거리공간의 (2)(거리의 역삼각부등식)에 의해 모든 $n$, $k$에서 $|a_n - a_k| = |d(x_n, q) - d(x_k, q)| \le d(x_n, x_k)$이다. $\varepsilon$을 양의 실수라 하고 $M$을 코시 수열의 정의가 주는 자연수라 하면, $n \ge M$이고 $k \ge M$인 모든 $n$, $k$에서 $|a_n - a_k| \le d(x_n, x_k) < \varepsilon$이다. 곧 $(a_n)$은 [[cauchy-sequence]]의 뜻으로 코시 수열이고, 그 항목의 (2)에 의해 유계이다. [[bounded-sequence-in-metric-space]]의 (1)에 의해 $(x_n)$은 유계이다.

**(5).** 이산 거리의 값은 $0$이나 $1$이다. $(x_n)$이 코시 수열이라 하자. 순서 성질 (5)의 (ii)에 의해 $0 < 1$이므로 $\varepsilon = 1$에 대하여 $n \ge M$이고 $k \ge M$인 모든 $n$, $k$에서 $d(x_n, x_k) < 1$인 자연수 $M$이 있다. $n \ge M$이면 $k = M$으로 두어 $d(x_n, x_M) < 1$이므로 $d(x_n, x_M) \ne 1$이고, 따라서 $d(x_n, x_M) = 0$, 곧 거리의 조건 (ii)에 의해 $x_n = x_M$이다.

거꾸로 $n \ge M$인 모든 $n$에서 $x_n = x_M$이라 하고 $\varepsilon$을 양의 실수라 하자. $n \ge M$이고 $k \ge M$이면 $x_n = x_M = x_k$이므로 거리공간의 (1)에 의해 $d(x_n, x_k) = 0 < \varepsilon$이다. 같은 $M$이 모든 $\varepsilon$에 대해 정의의 자연수가 되므로 $(x_n)$은 코시 수열이다.

**(6).** [[bounded-sequence-in-metric-space]]의 (5)에 의해 $(y_n)$은 $X$의 수열이기도 하다. [[metric-space-examples]]의 (3)에 의해 모든 $n$, $k$에서 $d_Y(y_n, y_k) = d(y_n, y_k)$이므로, $(Y, d_Y)$에서의 코시 수열의 정의와 $(X, d)$에서의 코시 수열의 정의는 같은 문장이다.
:::

## 예시와 반례

:::example[부분공간에서 수렴하지 않는 코시 수열]
$\mathbb{R}$의 부분공간 $Y = \{x : 0 < x \le 1\}$을 봅시다. 자연수 $n$에서 [[order-properties-of-reals]]의 (10)에 의해 $0 < n^{-1}$입니다. (Z1)([[prime-number]]의 진술)에 의해 $1 \le n$이므로, $n = 1$이면 $n^{-1} = 1$, $1 < n$이면 같은 항목의 (6)의 (ii)에 의해 $n^{-1} < 1$이므로 $0 < n^{-1} \le 1$입니다. 따라서 $n$번째 항이 $n^{-1}$인 수열 $(y_n)$은 $Y$의 수열입니다.

[[basic-limits]]의 (2)와 [[convergence-in-metric-spaces]]의 (3)에 의해 $(y_n)$은 $\mathbb{R}$에서 $0$으로 수렴하므로 (3)에 의해 $\mathbb{R}$에서 코시 수열이고, (6)에 의해 $(Y, d_Y)$에서도 코시 수열입니다.

그러나 $(y_n)$은 $(Y, d_Y)$에서 수렴하지 않습니다. $Y$의 점 $p$로 수렴한다고 하면, [[convergence-in-metric-spaces]]의 (1)과 $d_Y(y_n, p) = d(y_n, p)$에 의해 $(y_n)$은 $\mathbb{R}$에서도 $p$로 수렴합니다. $\mathbb{R}$은 하우스도르프 공간이므로([[metric-space-is-hausdorff|거리공간은 하우스도르프 공간이다]]의 (1)) [[limit-unique-in-hausdorff]]의 (1)에 의해 $p = 0$인데, $0 \notin Y$이므로 어긋납니다.
:::

:::counterexample[같은 수열이 거리에 따라 코시가 아닐 수 있다]
$n$번째 항이 $n^{-1}$인 실수열은 보통 거리로 코시 수열입니다(위 예시). 이제 $\mathbb{R}$에 이산 거리를 주고 같은 수열을 봅시다. 자연수 $M$에 대하여 $M < M + 1$이므로 [[order-properties-of-reals]]의 (6)의 (ii)에 의해 $(M + 1)^{-1} < M^{-1}$이고, 따라서 $x_{M+1} \ne x_M$입니다. 곧 "$n \ge M$인 모든 $n$에서 $x_n = x_M$"인 자연수 $M$이 없으므로, (5)에 의해 이 수열은 이산 거리로 코시 수열이 아닙니다. 코시 수열인지는 집합과 수열만으로 정해지지 않고 거리에 달려 있습니다.
:::

## 확인 질문

:::check[$\mathbb{R}$의 부분공간 $\mathbb{Z}$에서 코시 수열은 어떤 수열인가?]
어느 번호부터 상수인 수열입니다. $(x_n)$이 $\mathbb{Z}$의 코시 수열이면 (6)에 의해 $\mathbb{R}$에서도 코시 수열이므로, $\varepsilon = 1$에 대하여 $n \ge M$일 때 $|x_n - x_M| < 1$인 자연수 $M$이 있습니다. [[absolute-value]]의 (7)에 의해 정수 $c = x_n - x_M$은 $-1 < c < 1$을 만족하고, (Z1)([[prime-number]]의 진술, [[order-properties-of-reals]]의 (10))에 의해 $-1 + 1 \le c$이고 $c + 1 \le 1$, 곧 $0 \le c \le 0$이므로 $c = 0$입니다. 따라서 $n \ge M$이면 $x_n = x_M$입니다. 거꾸로 어느 번호부터 상수인 수열은 모든 $\varepsilon$에 같은 $M$으로 두 항의 거리가 $0$이 되므로 코시 수열입니다.
:::

:::check[이산 거리를 준 공간에 상수 수열이 아닌 코시 수열이 있을 수 있는가?]
있을 수 있습니다. 서로 다른 두 점 $p$, $q$가 있는 공간에 이산 거리를 주고, $x_1 = p$이고 $n \ge 2$이면 $x_n = q$인 수열을 잡습니다. 이 수열은 $x_1 \ne x_2$이므로 상수 수열이 아니지만, $n \ge 2$인 모든 $n$에서 $x_n = x_2$이므로 (5)에 의해 코시 수열입니다.
:::
