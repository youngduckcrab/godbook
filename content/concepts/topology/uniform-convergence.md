---
title: 고른 수렴
title_en: Uniform Convergence
aliases: [고르게 수렴한다, 고른 극한, uniform convergence, converges uniformly, uniform limit]
kind: definition
field: topology
msc: ["40A30", "54C35"]
level: undergrad
summary: 사상의 열이 사상 f 로 고르게 수렴한다는 것은 모든 양수 ε 에 대해 점에 상관없는 번호 N 이 있어 그 뒤의 모든 사상이 모든 점에서 f 와 거리 ε 미만이라는 것이다. 점별 수렴과의 관계, 극한의 유일성, 상수 열, 실수열로 누르기, 부분수열, 제한, 두 부분집합의 합집합, 실숫값 사상과 닫힌구간 [0, 1] 위의 xⁿ 의 예를 다룬다.
requires: [set-operations, function, adding-or-removing-an-element, natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, order-properties-of-reals, absolute-value, interval, power-of-a-real-number, sequence, limit-of-sequence, basic-limits, limit-of-sum-and-product, geometric-sequence-limit, subsequence, continuous-function, power-function-is-continuous, recursion-theorem, metric-space, metric-space-examples, sequence-in-a-space, metric-space-is-hausdorff, limit-unique-in-hausdorff, convergence-in-metric-spaces, pointwise-convergence]
sources:
  - ref: lebl-basic-analysis
    loc: "6.1.1절 Example 6.1.2 (p.227–228); 6.1.2절 Uniform convergence: Definition 6.1.6, Proposition 6.1.7 (p.229), Example 6.1.8 (p.230); 6.1.4절 연습문제 6.1.3 (p.232), 6.1.7, 6.1.10, 6.1.14 (p.233); 6.2.3절 Theorem 6.2.10 증명 뒤 문단 (p.240)"
    checked: original
    note: "출처 Definition 6.1.6(p.229)은 S 위의 실함수 f_n, f 에 대하여 '모든 ε > 0 에 N ∈ ℕ 이 있어 n ≥ N 인 모든 n 과 모든 x ∈ S 에서 |f_n(x) − f(x)| < ε' 로 정의한다. 이 항목은 공역을 거리공간 (Y, d_Y) 로 넓히고 |f_n(x) − f(x)| 를 d_Y(f_n(x), f(x)) 로 바꾸었다. Y = ℝ 이면 출처의 정의와 같다는 것이 (8)이다. 'N 이 x 에 따르지 않는다'는 말은 출처의 정의 바로 뒤 문단에 있다. (1)은 출처 Proposition 6.1.7(p.229, 증명은 Proposition 6.1.5 에서 나온다고만 적는다)이고, 그 뒤 문장 'The converse does not hold' 의 예가 출처 Example 6.1.8 이다. (2)의 유일성은 (1)과 pointwise-convergence 의 (3)으로 증명했다. (6)은 출처 연습문제 6.1.3(p.232)과 같은 진술이다. (4)는 출처 연습문제 6.1.7(p.233: x 마다의 차를 0 으로 고르게 수렴하는 함수열 g_n 으로 누르면 고르게 수렴한다)과 같은 발상이고, 이 항목은 누르는 쪽을 x 에 상관없는 실수열로 두고 어떤 번호부터 눌러도 되게 했다. (7)의 꼴은 출처 6장(p.227–252, 연습문제 포함)에서 찾지 못했다. 6장에서 'union' 과 '∪' 는 0건이고, 'uniformly on' 과 'on 𝐴' 가 나오는 줄 20곳(p.227–244)을 읽었으나 두 집합 위의 고른 수렴을 합치는 진술은 없었다. 이 항목은 고른 노름(출처 6.1.3절 Definition 6.1.9)을 정의하지 않는다. (9)의 (ii), (iii)은 출처 Example 6.1.8(p.230: [−1, 1] 위의 x^{2n} 은 고르게 수렴하지 않고, 0 < a < 1 이면 [−a, a] 위에서는 0 으로 고르게 수렴한다)과 같은 발상이고, (9)의 (i)은 출처 Example 6.1.2(p.227–228, [−1, 1] 위의 x^{2n} 의 점별 극한)와 같은 발상이다. 출처는 고르지 않음을 1 로 수렴하는 수열과 x^{2N} 의 연속성으로 보이고, (9)의 증명은 수열 없이 x^N 의 1 에서의 연속(ε–δ)으로 점 하나를 찾는다. (9)의 (ii)와 (iii)을 함께 보는 예시 '닫힌구간 [0, 1] 위의 xⁿ'의 꼴(0 ≤ c < 1 인 [−c, c] 위에서는 고르고 (−1, 1) 위에서는 아니다)은 출처 연습문제 6.1.14(p.233)가 등비급수의 부분합으로 묻는 것과 같은 꼴이다. 예시 '이산 거리의 공역'의 열(n 번째 사상이 점 n 에서만 1 이다)은 출처 연습문제 6.1.10(p.233: 서로 다른 점 x_n 에서 f_n(x_n) = 1 인 열이 0 으로 점별 수렴할 수 있는가, 고르게 수렴할 수 있는가)과 같은 발상이다. 확인 'ℝ 에서 ℝ 로의 열에서 n번째 사상이 x 를 x/n 으로 보내면, 이 열은 고르게 수렴하는가?'의 열은 출처 p.240(6.2.3절, Theorem 6.2.10 증명 뒤 문단)이 '0 으로 점별 수렴할 뿐'이라고 든 f_n(x) = x/n 과 같다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 경계값에서 거짓이거나 근거 없던 설명 문장 약 10건, 다른 항목의 예시에 기대던 근거 4건, 메모의 확인하지 않은 주장 3건을 작성자가 고쳤다. 지휘자의 지적으로 겹치는 글자 1건을 바꾸고 진술 번호 2개를 더했다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
사상, 사상 전체의 집합, 사상의 열, 값의 수열 $(f_n(x))$, 점별 수렴과 점별 극한, 제한의 열 $(f_n|_A)$와 "$A$ 위에서"는 [[pointwise-convergence|사상의 열과 점별 수렴]]의 것이다. 거리공간과 실수의 보통 거리는 [[metric-space]], [[metric-space-examples]]의 것이고, 첨자열과 부분수열은 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 것이다. 아래에서 $X$는 집합, $(Y, d_Y)$는 거리공간, $(f_n)$은 $X$에서 $Y$로의 사상의 열이고, $f$, $g$는 $X$에서 $Y$로의 사상이다.

**고른 수렴.** $(f_n)$이 $f$로 **고르게 수렴한다**(converges uniformly)는 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 자연수 $N$이 있어 $n \ge N$인 모든 자연수 $n$과 $X$의 모든 점 $x$에서 $d_Y(f_n(x), f(x)) < \varepsilon$일 때이다. 이때 $f$를 $(f_n)$의 **고른 극한**(uniform limit)이라 한다. 점별 수렴의 ε–N 꼴([[pointwise-convergence|사상의 열과 점별 수렴]]의 (2))과 달리 여기서 $N$은 $\varepsilon$에만 따르고 점 $x$에 따르지 않는다. $A \subseteq X$일 때 $(f_n)$이 **$A$ 위에서** 사상 $h : A \to Y$로 고르게 수렴한다는 것은 정확히 $(f_n|_A)$가 $h$로 고르게 수렴할 때, 곧 모든 양의 실수 $\varepsilon$에 대하여 자연수 $N$이 있어 $n \ge N$인 모든 자연수 $n$과 $A$의 모든 점 $x$에서 $d_Y(f_n(x), h(x)) < \varepsilon$일 때이다.

다음이 성립한다.

1. (고른 수렴은 점별 수렴이다) $(f_n)$이 $f$로 고르게 수렴하면 $(f_n)$은 $f$로 점별 수렴한다.
2. (고른 극한은 하나뿐이다) $(f_n)$이 $f$로 고르게 수렴하고 $g$로 점별 수렴하면 $f = g$이다. 특히 $(f_n)$이 $f$로도 $g$로도 고르게 수렴하면 $f = g$이다.
3. (상수 열) 모든 자연수 $n$에서 $f_n = g$이면 $(f_n)$은 $g$로 고르게 수렴한다.
4. (실수열로 누르기) $(a_n)$이 $0$으로 수렴하는 실수열이고, 자연수 $K$가 있어 $n \ge K$인 모든 자연수 $n$과 $X$의 모든 점 $x$에서 $d_Y(f_n(x), f(x)) \le a_n$이면, $(f_n)$은 $f$로 고르게 수렴한다.
5. (부분수열) $(f_n)$이 $f$로 고르게 수렴하고 $(n_i)$가 첨자열이면, 부분수열 $(f_{n_i})$도 $f$로 고르게 수렴한다.
6. (제한) $(f_n)$이 $f$로 고르게 수렴하면 $X$의 모든 부분집합 $A$ 위에서 $f|_A$로 고르게 수렴한다.
7. (두 부분집합의 합집합) $A$, $B$가 $X$의 부분집합이고 $(f_n)$이 $A$ 위에서 $f|_A$로, $B$ 위에서 $f|_B$로 고르게 수렴하면, $(f_n)$은 $A \cup B$ 위에서 $f|_{A \cup B}$로 고르게 수렴한다. 특히 $A \cup B = X$이면 $(f_n)$은 $f$로 고르게 수렴한다.
8. (실숫값 사상) $Y = \mathbb{R}$이고 $d_Y$가 보통 거리이면, $(f_n)$이 $f$로 고르게 수렴하는 것은 정확히 모든 양의 실수 $\varepsilon$에 대하여 자연수 $N$이 있어 $n \ge N$인 모든 자연수 $n$과 $X$의 모든 점 $x$에서 $|f_n(x) - f(x)| < \varepsilon$일 때이다.
9. (예: 닫힌구간 $[0, 1]$ 위의 $x^n$) $Y = \mathbb{R}$(보통 거리)이고, $(p_n)$이 [[interval|닫힌구간]] $[0, 1]$에서 $\mathbb{R}$로의 사상의 열로서 $n$번째 사상이 $x$를 $x^n$([[power-of-a-real-number]])으로 보내는 열([[pointwise-convergence|사상의 열과 점별 수렴]]의 (1))이라 하자. $D = \{x \in \mathbb{R} : 0 \le x < 1\}$로 둔다.
   - (i) $(p_n)$은 $x \in D$에서 $h(x) = 0$이고 $h(1) = 1$인 사상 $h : [0, 1] \to \mathbb{R}$로 점별 수렴한다.
   - (ii) $(p_n)$은 어떤 사상 $[0, 1] \to \mathbb{R}$로도 고르게 수렴하지 않고, $D$ 위에서 어떤 사상 $D \to \mathbb{R}$로도 고르게 수렴하지 않는다.
   - (iii) $0 < a < 1$이면 $(p_n)$은 $[0, a]$ 위에서 값이 $0$인 상수함수로 고르게 수렴한다.
:::

:::english
Maps, the set of all maps, sequences of maps, the sequence of values $(f_n(x))$, pointwise convergence and the pointwise limit, the sequence of restrictions $(f_n|_A)$ and "on $A$" are those of sequences of maps and pointwise convergence. Metric spaces and the standard metric on $\mathbb{R}$ are as defined earlier, and index sequences and subsequences are those of a topological space. Below, $X$ is a set, $(Y, d_Y)$ is a metric space, $(f_n)$ is a sequence of maps from $X$ to $Y$, and $f$, $g$ are maps from $X$ to $Y$.

**Uniform convergence.** $(f_n)$ **converges uniformly** to $f$ exactly when, for every positive real number $\varepsilon$, there is a natural number $N$ such that $d_Y(f_n(x), f(x)) < \varepsilon$ for all natural numbers $n \ge N$ and all points $x$ of $X$. Then $f$ is called the **uniform limit** of $(f_n)$. Unlike the ε–N form of pointwise convergence, here $N$ depends only on $\varepsilon$ and not on the point $x$. For $A \subseteq X$, $(f_n)$ converges uniformly **on $A$** to a map $h : A \to Y$ exactly when $(f_n|_A)$ converges uniformly to $h$, that is, when for every positive real number $\varepsilon$ there is a natural number $N$ such that $d_Y(f_n(x), h(x)) < \varepsilon$ for all natural numbers $n \ge N$ and all points $x$ of $A$.

The following hold.

1. (Uniform convergence is pointwise convergence) If $(f_n)$ converges uniformly to $f$, then $(f_n)$ converges pointwise to $f$.
2. (The uniform limit is unique) If $(f_n)$ converges uniformly to $f$ and pointwise to $g$, then $f = g$. In particular, if $(f_n)$ converges uniformly to $f$ and also to $g$, then $f = g$.
3. (Constant sequences) If $f_n = g$ for every natural number $n$, then $(f_n)$ converges uniformly to $g$.
4. (Domination by a real sequence) If $(a_n)$ is a real sequence converging to $0$ and there is a natural number $K$ such that $d_Y(f_n(x), f(x)) \le a_n$ for all natural numbers $n \ge K$ and all points $x$ of $X$, then $(f_n)$ converges uniformly to $f$.
5. (Subsequences) If $(f_n)$ converges uniformly to $f$ and $(n_i)$ is an index sequence, then the subsequence $(f_{n_i})$ also converges uniformly to $f$.
6. (Restrictions) If $(f_n)$ converges uniformly to $f$, then it converges uniformly to $f|_A$ on every subset $A$ of $X$.
7. (Union of two subsets) If $A$, $B$ are subsets of $X$ and $(f_n)$ converges uniformly to $f|_A$ on $A$ and to $f|_B$ on $B$, then $(f_n)$ converges uniformly to $f|_{A \cup B}$ on $A \cup B$. In particular, if $A \cup B = X$, then $(f_n)$ converges uniformly to $f$.
8. (Real-valued maps) If $Y = \mathbb{R}$ with the standard metric $d_Y$, then $(f_n)$ converges uniformly to $f$ exactly when, for every positive real number $\varepsilon$, there is a natural number $N$ such that $|f_n(x) - f(x)| < \varepsilon$ for all natural numbers $n \ge N$ and all points $x$ of $X$.
9. (Example: $x^n$ on the closed interval $[0, 1]$) Let $Y = \mathbb{R}$ with the standard metric, and let $(p_n)$ be the sequence of maps from the closed interval $[0, 1]$ to $\mathbb{R}$ whose $n$th map sends $x$ to $x^n$. Put $D = \{x \in \mathbb{R} : 0 \le x < 1\}$.
   - (i) $(p_n)$ converges pointwise to the map $h : [0, 1] \to \mathbb{R}$ with $h(x) = 0$ for $x \in D$ and $h(1) = 1$.
   - (ii) $(p_n)$ converges uniformly to no map $[0, 1] \to \mathbb{R}$, and converges uniformly on $D$ to no map $D \to \mathbb{R}$.
   - (iii) If $0 < a < 1$, then $(p_n)$ converges uniformly on $[0, a]$ to the constant function with value $0$.
:::

## 직관

[[pointwise-convergence|점별 수렴]]과 고른 수렴은 한정 기호의 순서 하나가 다릅니다. 점별 수렴은 "모든 $x$와 모든 $\varepsilon$에 대하여 $N$이 있어"이고, 고른 수렴은 "모든 $\varepsilon$에 대하여 $N$이 있어 모든 $x$에서"입니다. 앞의 것은 점마다 다른 $N$을 허락하고, 뒤의 것은 한 $N$이 모든 점에 함께 들어맞기를 요구합니다.

점별 수렴의 비유로 든 시계들로 말하면, 고른 수렴은 어떤 허용 오차 $\varepsilon$을 정해도 어느 사진부터는 모든 시계의 바늘이 한꺼번에 목표에서 $\varepsilon$ 안쪽에 있다는 것입니다. "어떤 허용 오차를 정해도"가 "모든 양의 실수 $\varepsilon$에 대하여"에, "어느 사진부터"가 "자연수 $N$이 있어 $n \ge N$인 모든 $n$"에, "모든 시계가 한꺼번에"가 "$X$의 모든 점 $x$에서"에 맞습니다. 시계가 한 개뿐이면 두 수렴은 같은 말이고(확인 질문), 시계가 무한히 많으면 늦게 다가가는 시계가 끝없이 있어서 점별로는 수렴해도 고르게는 수렴하지 않을 수 있습니다((9)).

(4)는 고른 수렴을 확인할 때 쓰기 좋은 꼴입니다. 모든 점에서의 거리를 한 실수열 $a_n$으로 한꺼번에 누르고, 그 실수열이 $0$으로 간다는 해석학 입문의 사실로 끝냅니다. (7)은 고르게 수렴하는 곳 두 개를 합칠 수 있다는 것으로, 두 번호 $N_1$, $N_2$의 합을 쓰면 됩니다. 무한히 많은 곳을 합치면 그렇게 되지 않을 수 있다는 것도 같은 예시에서 봅니다.

## 성질의 증명

:::proof
아래에서 자연수는 [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술에 의해 양의 정수이다. 정수의 합은 정수이고([[even-and-odd]]), 정수의 부등식은 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z6), (Z7)을 쓴다. [[pointwise-convergence|사상의 열과 점별 수렴]]을 줄여 "점별 수렴의 항목"이라 쓴다.

**(1).** $x \in X$와 양의 실수 $\varepsilon$을 잡는다. 고른 수렴의 정의에 의해 자연수 $N$이 있어 $n \ge N$인 모든 $n$과 $X$의 모든 점에서, 특히 점 $x$에서 $d_Y(f_n(x), f(x)) < \varepsilon$이다. 이것은 점별 수렴의 항목의 (2)의 조건이므로 $(f_n)$은 $f$로 점별 수렴한다.

**(2).** (1)에 의해 $(f_n)$은 $f$로 점별 수렴하고, 가정에 의해 $g$로도 점별 수렴하므로 점별 수렴의 항목의 (3)에 의해 $f = g$이다. 둘째 문장은 첫째 문장과 (1)을 $g$에 쓴 것이다.

**(3).** $\varepsilon > 0$이면 $N = 1$로 둔다. 모든 $n$과 $x$에서 $f_n(x) = g(x)$이므로 [[metric-space]]의 (1)에 의해 $d_Y(f_n(x), g(x)) = 0 < \varepsilon$이다.

**(4).** 양의 실수 $\varepsilon$을 잡는다. $(a_n)$이 $0$으로 수렴하므로 [[limit-of-sequence]]의 정의에 의해 자연수 $M$이 있어 $n \ge M$인 모든 $n$에서 $|a_n - 0| < \varepsilon$이다. $N = M + K$로 두면 $N$은 정수이고, $0 < K$와 (Z7)에 의해 $M < N$, $0 < M$과 (Z7)에 의해 $K < N$, 그리고 $0 < M < N$과 (Z6)에 의해 $N$은 자연수이다. $n \ge N$이고 $x \in X$라 하자. (Z6)에 의해 $n \ge M$이고 $n \ge K$이다. 가정과 [[absolute-value]]의 (6)에 의해
$$
\begin{aligned}
d_Y(f_n(x), f(x)) &\le a_n \le |a_n| \\
&= |a_n - 0| < \varepsilon
\end{aligned}
$$
이고, [[order-properties-of-reals]]의 (1)의 (v)에 의해 $d_Y(f_n(x), f(x)) < \varepsilon$이다. 따라서 $(f_n)$은 $f$로 고르게 수렴한다.

**(5).** 점별 수렴의 항목의 (6)에서처럼 $(f_{n_i})$는 사상의 열이고 $i$번째 항은 $f_{n_i}$이다. 양의 실수 $\varepsilon$을 잡고, 고른 수렴의 정의로 자연수 $N$을 얻는다. $i \ge N$인 자연수 $i$와 $x \in X$를 잡으면 [[subsequence]]의 (1)에 의해 $n_i \ge i$이고 (Z6)에 의해 $n_i \ge N$이므로 $d_Y(f_{n_i}(x), f(x)) < \varepsilon$이다. 따라서 $(f_{n_i})$는 $f$로 고르게 수렴한다.

**(6).** $A \subseteq X$이고 양의 실수 $\varepsilon$이 주어지면, 고른 수렴의 정의로 자연수 $N$을 얻는다. $n \ge N$이고 $x \in A$이면 $x \in X$이므로 $d_Y(f_n(x), f(x)) < \varepsilon$이고, [[adding-or-removing-an-element]]의 함수의 제한에 의해 $f_n|_A(x) = f_n(x)$, $f|_A(x) = f(x)$이므로 $d_Y(f_n|_A(x), f|_A(x)) < \varepsilon$이다. 따라서 $(f_n|_A)$는 $f|_A$로 고르게 수렴한다.

**(7).** 양의 실수 $\varepsilon$을 잡는다. $A$ 위의 고른 수렴에 의해 자연수 $N_1$이 있어 $n \ge N_1$인 모든 $n$과 $A$의 모든 점 $x$에서 $d_Y(f_n(x), f|_A(x)) < \varepsilon$이고, $B$ 위의 고른 수렴에 의해 같은 꼴의 자연수 $N_2$가 있다. 제한의 성질에 의해 $x \in A$이면 $f|_A(x) = f(x)$이고, $x \in B$이면 $f|_B(x) = f(x)$이다. $N = N_1 + N_2$로 두면 (4)의 증명과 같은 계산으로 $N$은 자연수이고 $N_1 < N$, $N_2 < N$이다.

$n \ge N$이고 $x \in A \cup B$라 하자. [[set-operations|합집합]]의 정의에 의해 $x \in A$이거나 $x \in B$이다. $x \in A$이면 (Z6)에 의해 $n \ge N_1$이므로 $d_Y(f_n(x), f(x)) < \varepsilon$이고, $x \in B$이면 $n \ge N_2$이므로 같은 부등식이 성립한다. $x \in A \cup B$에서 $f_n|_{A \cup B}(x) = f_n(x)$이고 $f|_{A \cup B}(x) = f(x)$이므로, $(f_n)$은 $A \cup B$ 위에서 $f|_{A \cup B}$로 고르게 수렴한다.

$A \cup B = X$이면 함수의 제한의 정의에 의해 $f|_X = \{(x, y) \in f : x \in X\}$이고, $f \subseteq X \times Y$의 모든 순서쌍은 첫째 성분이 $X$의 원소이므로 $f|_X = f$이다. 같은 까닭으로 모든 $n$에서 $f_n|_X = f_n$이므로 두 열 $(f_n|_X)$와 $(f_n)$은 같다. 따라서 $(f_n)$은 $f$로 고르게 수렴한다.

**(8).** [[metric-space-examples]]의 (1)에 의해 보통 거리는 $d_Y(u, v) = |u - v|$이므로, 고른 수렴의 정의에 이것을 넣으면 (8)의 조건이 된다.

**(9).** [[power-of-a-real-number]]에 의해 모든 자연수 $n$과 실수 $x$에서 $x^n$은 실수 하나로 정해지므로, [[pointwise-convergence|사상의 열과 점별 수렴]]의 (1)에 의해 열 $(p_n)$이 있고 $p_n(x) = x^n$이다. $x \in D$이면 $0 \le x < 1$이므로 [[absolute-value]]의 (1)에 의해 $|x| = x < 1$이고, [[geometric-sequence-limit]]의 (1)에 의해 실수열 $(x^n)$은 해석학 입문의 뜻으로 $0$으로 수렴하며, 점별 수렴의 항목의 (8)에 의해 거리공간 $\mathbb{R}$에서도 $0$으로 수렴한다. 이것을 (가)라 부른다.

(i) $x \in [0, 1]$이면 $x \le 1$이고, [[order-properties-of-reals]]의 (1)의 (iii)에 의해 $x < 1$이 아니면 $1 \le x$이므로 같은 항목의 (1)의 (ii)에 의해 $x = 1$이다. 곧 $[0, 1]$의 점은 $D$의 점이거나 $1$이고 둘 다는 아니다(같은 항목의 (1)의 (i)). 그래서 $h$는 [[recursion-theorem|재귀 정리]]의 (1)로 정해지는 사상이다. $x \in D$에서는 (가)에 의해 $(p_n(x))$가 $h(x) = 0$으로 수렴한다. $x = 1$에서는 [[power-of-a-real-number]]의 (2)의 (iv)에 의해 모든 $n$에서 $1^n = 1$이므로 $(p_n(1))$은 모든 항이 $1$인 상수 수열이고, [[sequence-in-a-space|위상공간의 수열과 수렴]]의 (1)에 의해 $h(1) = 1$로 수렴한다. 따라서 $(p_n)$은 $h$로 점별 수렴한다.

(ii) 먼저 둘째 문장을 보인다. $(p_n)$이 $D$ 위에서 어떤 사상 $g : D \to \mathbb{R}$로 고르게 수렴한다고 가정하자. $x \in D$이면 (1)을 열 $(p_n|_D)$에 써서 $(p_n|_D(x)) = (p_n(x))$([[adding-or-removing-an-element]]의 함수의 제한)는 $g(x)$로 수렴하고, (가)에 의해 $0$으로도 수렴하므로, [[metric-space-is-hausdorff|거리공간이 하우스도르프라는 정리]]의 (1)과 [[limit-unique-in-hausdorff]]의 (1)에 의해 $g(x) = 0$이다. $\varepsilon = 2^{-1}$로 (8)을 열 $(p_n|_D)$에 쓰면 자연수 $N$이 있어 모든 $x \in D$에서 $|x^N - g(x)| < 2^{-1}$이다.

한편 [[power-function-is-continuous]]의 (1)에 의해 $x$를 $x^N$으로 보내는 함수 $\mathbb{R} \to \mathbb{R}$은 연속함수이고, $1$에서의 값은 $1^N = 1$이다. $2^{-1} < 1$이므로 [[continuous-function]]의 (7)에 의해 양의 실수 $\delta$가 있어 $|x - 1| < \delta$인 모든 실수 $x$에서 $2^{-1} < x^N$이다. $t = 2^{-1} \min\{\delta, 1\}$, $x_0 = 1 - t$로 둔다. [[absolute-value]]의 (10)에 의해 $\min\{\delta, 1\}$은 $\delta$이거나 $1$이어서 양수이고 $\delta$ 이하, $1$ 이하이므로, [[order-properties-of-reals]]의 (8)에 의해 $0 < t < \min\{\delta, 1\}$이고 같은 항목의 (1)의 (v)에 의해 $t < \delta$, $t < 1$이다. 같은 항목의 (3)의 (i)에 의해 $0 < x_0 < 1$이므로 $x_0 \in D$이고, [[absolute-value]]의 (3)과 (1)에 의해 $|x_0 - 1| = |1 - x_0| = t < \delta$이다. 따라서 $x_0^N > 2^{-1}$이다. $g(x_0) = 0$이고 [[power-of-a-real-number]]의 (6)의 (i)에 의해 $0 < x_0^N$이므로 $|x_0^N - g(x_0)| = x_0^N > 2^{-1}$인데, 이것은 $|x_0^N - g(x_0)| < 2^{-1}$과 [[order-properties-of-reals]]의 (1)의 (i)에 의해 함께 성립할 수 없다. 따라서 $(p_n)$은 $D$ 위에서 어떤 사상으로도 고르게 수렴하지 않는다.

첫째 문장: $(p_n)$이 어떤 사상 $g : [0, 1] \to \mathbb{R}$로 고르게 수렴하면, $D \subseteq [0, 1]$이므로 (6)에 의해 $D$ 위에서 $g|_D$로 고르게 수렴하는데, 이것은 둘째 문장과 어긋난다.

(iii) $0 < a < 1$이면 $[0, a] \subseteq [0, 1]$이다. $x \in [0, a]$이면 $0 \le x \le a$이므로 [[power-of-a-real-number]]의 (6)의 (i), (ii)에 의해 $0 \le x^n \le a^n$이고, [[absolute-value]]의 (1)에 의해 $|p_n|_{[0, a]}(x) - 0| = |x^n| = x^n \le a^n$이다(제한의 값은 [[adding-or-removing-an-element]]의 함수의 제한에 의해 $x^n$이다). $|a| = a < 1$이므로 [[geometric-sequence-limit]]의 (1)에 의해 $n$번째 항이 $a^n$인 실수열은 $0$으로 수렴하고, (4)를 $(p_n|_{[0, a]})$와 값이 $0$인 상수함수에 $K = 1$로 쓰면 고르게 수렴한다.
:::

## 예시와 반례

:::example[닫힌구간 [0, 1] 위의 xⁿ]
(9)가 이 열의 세 가지 모습을 진술합니다. 점마다 보면 $(x^n)$은 $x < 1$에서 $0$으로, $x = 1$에서 $1$로 수렴합니다((i)). 그러나 어떤 번호 $N$을 잡아도 $x^N$은 $1$에서 연속이어서 $1$ 바로 왼쪽의 점에서 $2^{-1}$보다 크므로, 모든 점에 함께 들어맞는 번호가 없습니다((ii)의 증명).

집합 $D = \{x : 0 \le x < 1\}$은 $0 < a < 1$인 $[0, a]$들을 모두 합친 것입니다. $0 \le x < 1$이면 $a = 2^{-1}(x + 1)$에서 [[order-properties-of-reals]]의 (8)에 의해 $x < a < 1$이고 $0 \le x < a$이므로 $0 < a$, $x \in [0, a]$이며, 거꾸로 $[0, a]$의 점은 $a < 1$보다 크지 않으므로 $D$에 듭니다. (9)의 (iii)에 의해 열은 그 $[0, a]$ 하나하나 위에서는 고르게 수렴하지만, (ii)에 의해 $D$ 위에서는 고르게 수렴하지 않습니다. 그러니 (7)을 무한히 많은 부분집합의 합집합으로 넓힐 수는 없는 경우가 있습니다.
:::

:::example[이산 거리의 공역]
$Y$에 [[metric-space-examples]]의 (2)의 이산 거리를 주면, $(f_n)$이 $f$로 고르게 수렴하는 것은 정확히 자연수 $N$이 있어 $n \ge N$인 모든 $n$에서 $f_n = f$일 때입니다. 고르게 수렴하면 $\varepsilon = 1$의 $N$에 대하여 $n \ge N$, $x \in X$에서 $d_Y(f_n(x), f(x)) < 1$이고, 이산 거리의 값은 $0$이나 $1$이므로 $0$이어서 [[metric-space]]의 (ii)에 의해 $f_n(x) = f(x)$입니다. [[function]]의 함수의 같음에 의해 $f_n = f$입니다. 거꾸로 $n \ge N$에서 $f_n = f$이면 어떤 양수 $\varepsilon$에도 그 $N$에서 거리가 $0 < \varepsilon$입니다.

$X = \mathbb{N}$, $Y = \{0, 1\}$(이산 거리)이고, $n$번째 사상이 점 $n$에서 $1$, 다른 점에서 $0$인 열을 생각합시다(경우 나누기로 정한 값이므로 점별 수렴의 항목의 (1)로 열이 정해집니다). 점 $m$을 정하면 $n \ge m + 1$인 $n$에서 (Z7)과 (Z6)에 의해 $n > m$, 곧 $n \ne m$이므로 값이 $0$이고, [[convergence-in-metric-spaces]]의 (5)에 의해 이 열은 값이 $0$인 상수 사상으로 점별 수렴합니다. 그러나 모든 $n$에서 $n$번째 사상은 점 $n$에서 $1$이므로 그 상수 사상과 다르고, 앞 문단에 의해 고르게 수렴하지 않습니다. (2)에 의해 고른 극한이 있다면 점별 극한이어야 하므로, 이 열은 어떤 사상으로도 고르게 수렴하지 않습니다.
:::

## 확인 질문

:::check[ℝ 에서 ℝ 로의 열에서 n번째 사상이 x 를 x/n 으로 보내면, 이 열은 고르게 수렴하는가?]
고르게 수렴하지 않습니다. $x/n = x \cdot n^{-1}$([[real-number-arithmetic]])이고, 점 $x$를 정하면 [[basic-limits]]의 (2)와 [[limit-of-sum-and-product]]의 (5)에 의해 $x \cdot n^{-1}$은 $0$으로 수렴하므로, 점별 수렴의 항목의 (8)에 의해 이 열은 값이 $0$인 상수함수로 점별 수렴합니다. (2)에 의해 고른 극한이 있다면 그 상수함수여야 합니다. $\varepsilon = 1$에 어떤 자연수 $N$을 잡아도 점 $x = N$에서 $|N \cdot N^{-1} - 0| = 1$이어서 $1$보다 작지 않습니다. 그래도 $[-1, 1]$ 위에서는 $|x| \le 1$이므로 [[absolute-value]]의 (4)와 (9)에 의해 $|x \cdot n^{-1} - 0| = |x|\,n^{-1}$이며, $0 < n^{-1}$([[order-properties-of-reals]]의 (10))이므로 같은 항목의 (4)의 (iii)에 의해 $|x|\,n^{-1} \le n^{-1}$이고, $n^{-1}$은 $0$으로 수렴하므로 (4)에 의해 고르게 수렴합니다.
:::

:::check[X 가 한 점 p 로 이루어진 집합이면, 고른 수렴과 점별 수렴은 어떤 관계인가?]
같은 말입니다. (1)에 의해 고르면 점별입니다. 거꾸로 점별 수렴의 항목의 (2)를 점 $p$에 쓰면 모든 $\varepsilon$에 $N$이 있어 $n \ge N$에서 $d_Y(f_n(p), f(p)) < \varepsilon$이고, $X$의 점은 $p$뿐이므로 이것이 고른 수렴의 조건입니다. 둘 다 "수열 $(f_n(p))$가 $f(p)$로 수렴한다"는 것과 같습니다.
:::
