---
title: 점에서의 진동
title_en: Oscillation of a Function at a Point
aliases: [진동, 함수의 진동, oscillation, oscillation of a function, oscillation at a point]
kind: definition
field: measure-theory
msc: ["26A15", "26A42"]
level: undergrad
summary: 닫힌구간 위의 유계함수 f 와 점 x 에 대해, x 에서 거리가 δ 보다 작은 점들 위에서의 f 의 진동 o(f, x, δ) 의 하한을 x 에서의 f 의 진동 o(f, x) 라 한다. 진동이 0 인 것은 정확히 연속일 때이고, 진동이 r 이상인 점 전체는 콤팩트 집합이며, 점을 안쪽에 품는 작은 닫힌구간 위의 진동과 비교할 수 있다.
requires: [set-operations, interval, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, natural-numbers-are-infinite, archimedean-property, real-valued-function, image-and-preimage, upper-bound-and-supremum, infimum-exists, bounded-function, supremum-of-function-values, continuous-function, metric-space-examples, open-ball, open-set-in-metric-space, closed-set, standard-topology-on-reals, compact-space, closed-interval-is-compact, closed-subset-of-compact]
sources:
  - ref: lebl-basic-analysis-2
    loc: 10.4절(10.4.1 소절 Oscillation and continuity) 정의와 Proposition 10.4.1, Proposition 10.4.2 와 그 증명 (p.117–118)
    checked: original
    note: "출처는 ℝⁿ 의 부분집합 D 위의 함수 f 에 대해 o(f, x, δ) 를 B_D(x, δ) = B(x, δ) ∩ D 위의 sup f − inf f 로, o(f, x) 를 δ → 0⁺ 의 극한이자 하한 inf_{δ>0} o(f, x, δ) 로 정의하고, 유계가 아닌 함수에서는 진동이 ∞ 일 수 있다고 적는다(p.117). 이 항목은 ℝ 의 닫힌구간 위의 유계함수로 좁히고 하한으로만 정의한다(한쪽 극한을 쓰지 않는다). (2)는 출처의 Proposition 10.4.1(p.117), (3)의 닫힘은 Proposition 10.4.2(p.118, D 가 닫힌집합일 때)이고, 증명도 출처와 같은 길이다(Proposition 10.4.2 의 증명은 ξ ∈ B_D(x, δ/2) 에서 o(f, ξ, δ/2) ≤ o(f, x, δ) 를 쓴다). (1)의 단조성과 0 이상이라는 것은 출처가 정의 뒤에 'Clearly' 로 적는 것이다. 나머지는 출처의 Theorem 10.4.3 의 증명(p.118–120) 안에 있다: 불연속점 전체를 {x : o(f, x) > 0} 으로 적는 것(p.118), S_ε = {x : o(f, x) ≥ ε} 가 닫혀 있고 유계여서 콤팩트라는 것(p.119), o(f, x, δ) < ε 인 δ 로 x 를 안쪽에 품는 작은 닫힌 직사각형 T_x ⊂ B(x, δ) 위의 sup − inf 가 ε 보다 작다는 것(p.119, 이 항목의 (4)의 (ii)와 같은 발상), B(x, δ) ⊂ R_j 이면 M_j − m_j ≥ o(f, x, δ) ≥ o(f, x) 라는 것(p.120, (4)의 (i)과 같은 발상), 불연속점 전체가 S_{1/k} 들의 합집합이라는 것(p.120, (2)의 1/k 꼴). 이 항목은 이것들을 1차원에서 진술에 번호로 올렸다."
  - ref: sandoval-romero-measure-and-integration
    loc: 5.4절 Definition 5.33 (p.148), Lemma 5.34 와 그 증명 (p.148–149), Lemma 5.35 (p.149)
    checked: original
    note: "Definition 5.33 은 유계인 f : [a, b] → ℝ 에 대해 g_δ(x), h_δ(x) 를 이 항목의 B_{[a, b]}(x, δ) 와 같은 집합 (x − δ, x + δ) ∩ [a, b] 위의 inf 와 sup 로 두고, 그 sup 와 inf 를 하포락선 g(x), 상포락선 h(x) 라 정의한다. 그래서 h_δ(x) − g_δ(x) 는 이 항목의 o(f, x, δ) 이다. Lemma 5.35 (d) 는 f 가 x_0 에서 연속인 것이 정확히 g(x_0) = f(x_0) = h(x_0) 일 때라는 것으로 연속을 둘레 위의 하한과 상한으로 판정한다는 점에서 이 항목의 (2)와 같은 발상이고, Lemma 5.34 의 증명(p.148–149)은 x 가 x_0 의 δ/2 둘레에 있으면 (x − δ/2, x + δ/2) ⊂ (x_0 − δ, x_0 + δ) 라는 것으로 g 의 하반연속을 보이는데, 이 항목의 (3)의 (i)과 같은 발상이다."
  - ref: lebl-basic-analysis
    loc: 3.2절(3.2.3 소절) Example 3.2.10 (p.125); 5.1절(5.1.2 소절) Example 5.1.12 (p.186)
    checked: original
    note: "예시 '계단 하나인 함수의 진동'의 함수는 출처 Example 3.2.10(p.125, x < 0 에서 −1, x ≥ 0 에서 1 인 함수가 0 에서 연속이 아니다)과 Example 5.1.12(p.186, [0, 2] 에서 1 의 왼쪽은 1, 1 에서 1/2, 오른쪽은 0 인 함수)와 같은 종류의 한 번 뛰는 함수이다. 확인 질문 '$[-1, 1]$ 위에서 $x < 0$이면 $-2$, $x = 0$이면 $1$, $0 < x$이면 $2$인 함수 $g$의 $o(g, 0)$은?'의 함수도 뛰는 점의 값이 양쪽 값 사이에 있다는 점에서 Example 5.1.12 와 같은 꼴이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(영집합 (6)(i) 의 덮개열 구성 통독, 균등 분할 어림과 (6)(iii) 의 경계값). 독립 검토 없음."
added: 2026-11-28
---

:::statement
닫힌구간 $[a, b]$와 그 기호는 [[interval]]의 것이고, 실함수는 [[real-valued-function]]의 것이며, 함수의 유계는 [[bounded-function]]의 것이다. 상 $f(D) = \{f(x) : x \in D\}$는 [[image-and-preimage]]의 것이고, 상한 $\sup$, 하한 $\inf$, 하계는 [[upper-bound-and-supremum]]의 것이다. "$D$ 위에서 유계"와 **$D$ 위에서의 $f$의 진동** $\sup f(D) - \inf f(D)$는 [[supremum-of-function-values]]의 것이다. 연속과 불연속은 [[continuous-function]]의 것이다. 아래에서 $a$, $b$는 $a < b$인 실수이고 $f : [a, b] \to \mathbb{R}$는 유계이다.

**점의 둘레.** $[a, b]$의 원소 $x$와 양수 $\delta$에 대하여
$$
B_{[a, b]}(x, \delta) = \{y \in [a, b] : |y - x| < \delta\}
$$
로 둔다. $x$가 이 집합의 원소이므로 이 집합은 공집합이 아니고, $f$는 이 집합 위에서 유계이다. 이 집합은 $[a, b]$에 보통 거리의 부분공간 거리를 준 거리공간에서 중심이 $x$이고 반지름이 $\delta$인 열린 공이다([[open-ball]]의 (7)의 기호 $B_Y(y, r)$와 같다).

**$\delta$ 둘레에서의 진동.** $[a, b]$의 원소 $x$와 양수 $\delta$에 대하여, $B_{[a, b]}(x, \delta)$ 위에서의 $f$의 진동을
$$
\begin{aligned}
o(f, x, \delta) &= \sup f\bigl(B_{[a, b]}(x, \delta)\bigr) \\
&\quad - \inf f\bigl(B_{[a, b]}(x, \delta)\bigr)
\end{aligned}
$$
로 쓴다.

**점에서의 진동.** $[a, b]$의 원소 $x$에 대하여, 실수 $t$ 가운데 "$t = o(f, x, \delta)$인 양수 $\delta$가 있다"를 만족하는 것 전체의 집합을 $\{o(f, x, \delta) : \delta > 0\}$로 쓴다. 이 집합은 공집합이 아니고 $0$이 그 하계이므로 하한이 있다(아래 증명). 그 하한
$$
o(f, x) = \inf\{o(f, x, \delta) : \delta > 0\}
$$
을 $x$**에서의 $f$의 진동**(oscillation of $f$ at $x$)이라 한다. 집합 $D$ 위에서의 진동(실수 $\sup f(D) - \inf f(D)$)과 점 $x$에서의 진동(실수 $o(f, x)$)은 다른 것이므로, 늘 "$D$ 위에서의", "$x$에서의"를 붙여 구별한다. $f$가 유계가 아니면 이 항목의 기호를 쓰지 않는다.

다음이 성립한다. 아래에서 $x$는 $[a, b]$의 원소이다.

1. (기본 성질)
   - (i) 양수 $\delta'$, $\delta$가 $\delta' \le \delta$이면 $B_{[a, b]}(x, \delta') \subseteq B_{[a, b]}(x, \delta)$이고
     $$
     \begin{aligned}
     0 &\le o(f, x, \delta') \le o(f, x, \delta) \\
     &\le \sup f([a, b]) \\
     &\quad - \inf f([a, b])
     \end{aligned}
     $$
     이다.
   - (ii) 모든 양수 $\delta$에서 $0 \le o(f, x) \le o(f, x, \delta)$이다. 특히 $0 \le o(f, x) \le \sup f([a, b]) - \inf f([a, b])$이다.
   - (iii) 실수 $r$에 대하여, $o(f, x) < r$인 것은 정확히 $o(f, x, \delta) < r$인 양수 $\delta$가 있을 때이다. 그런 $\delta$가 있으면 $0 < \delta' \le \delta$인 모든 $\delta'$에서도 $o(f, x, \delta') < r$이다. 따라서 $r \le o(f, x)$인 것은 정확히 모든 양수 $\delta$에서 $r \le o(f, x, \delta)$일 때이다.
   - (iv) 양수 $\delta$와 $B_{[a, b]}(x, \delta)$의 모든 원소 $y$, $z$에 대하여 $|f(y) - f(z)| \le o(f, x, \delta)$이다.
2. (연속과 진동) $f$가 $x$에서 연속인 것은 정확히 $o(f, x) = 0$일 때이다. 따라서 $f$가 $x$에서 불연속인 것은 정확히 $0 < o(f, x)$일 때이고, 또 정확히 $\dfrac{1}{k} \le o(f, x)$인 자연수 $k$가 있을 때이다.
3. (진동이 $r$ 이상인 점의 집합) 실수 $r$에 대하여 $S_r = \{x \in [a, b] : r \le o(f, x)\}$로 두자.
   - (i) $[a, b]$의 원소 $x$가 $o(f, x) < r$을 만족하면, 양수 $\eta$가 있어 $|\xi - x| < \eta$인 $[a, b]$의 모든 원소 $\xi$에서 $o(f, \xi) < r$이다.
   - (ii) $\mathbb{R}$에 보통 거리를 주면 $S_r$은 $\mathbb{R}$에서 닫힌집합이다. 또 $\mathbb{R}$에 보통 위상을 주면 $S_r$은 $\mathbb{R}$의 콤팩트 부분집합이다. $S_r$은 공집합이어도 된다.
   - (iii) $0 < r$이면 $f$는 $S_r$의 모든 원소에서 불연속이다.
4. (작은 닫힌구간 위의 진동과의 비교)
   - (i) 실수 $c$, $d$가 $c < x < d$이고 $[c, d] \subseteq [a, b]$이면 $o(f, x) \le \sup f([c, d]) - \inf f([c, d])$이다.
   - (ii) 실수 $r$에 대하여 $o(f, x) < r$이면, $c < x < d$인 실수 $c$, $d$로서 $[c, d] \cap [a, b]$가 $x$를 원소로 갖고
     $$
     \begin{aligned}
     &\sup f\bigl([c, d] \cap [a, b]\bigr) \\
     &\quad - \inf f\bigl([c, d] \cap [a, b]\bigr) < r
     \end{aligned}
     $$
     인 것이 있다.
:::

:::english
The closed interval $[a, b]$ and its notation are as in the interval entry, real-valued functions and bounded functions are as defined earlier, and so are images $f(D)$, suprema, infima and lower bounds. "Bounded on $D$" and **the oscillation of $f$ on $D$**, $\sup f(D) - \inf f(D)$, are as in the entry on suprema of function values. Continuity and discontinuity are as in the entry on continuous functions. Below, $a < b$ are real numbers and $f : [a, b] \to \mathbb{R}$ is bounded.

**Neighbourhood of a point.** For $x \in [a, b]$ and $\delta > 0$ put
$$
B_{[a, b]}(x, \delta) = \{y \in [a, b] : |y - x| < \delta\}.
$$
It contains $x$, so it is nonempty, and $f$ is bounded on it. It is the open ball of centre $x$ and radius $\delta$ in $[a, b]$ with the subspace metric of the standard metric (the notation $B_Y(y, r)$ of the open-ball entry).

**Oscillation on a $\delta$-neighbourhood.** For $x \in [a, b]$ and $\delta > 0$ we write
$$
\begin{aligned}
o(f, x, \delta) &= \sup f\bigl(B_{[a, b]}(x, \delta)\bigr) \\
&\quad - \inf f\bigl(B_{[a, b]}(x, \delta)\bigr)
\end{aligned}
$$
for the oscillation of $f$ on $B_{[a, b]}(x, \delta)$.

**Oscillation at a point.** For $x \in [a, b]$, write $\{o(f, x, \delta) : \delta > 0\}$ for the set of real numbers $t$ such that $t = o(f, x, \delta)$ for some $\delta > 0$. This set is nonempty and has $0$ as a lower bound, so it has an infimum (proved below). The infimum
$$
o(f, x) = \inf\{o(f, x, \delta) : \delta > 0\}
$$
is called **the oscillation of $f$ at $x$**. The oscillation on a set $D$ (the real number $\sup f(D) - \inf f(D)$) and the oscillation at a point $x$ (the real number $o(f, x)$) are different things, and we always say "on $D$" or "at $x$" to distinguish them. If $f$ is unbounded, the notation of this entry is not used.

The following hold, where $x \in [a, b]$.

1. (Basic properties)
   - (i) If $0 < \delta' \le \delta$, then $B_{[a, b]}(x, \delta') \subseteq B_{[a, b]}(x, \delta)$ and
     $$
     \begin{aligned}
     0 &\le o(f, x, \delta') \le o(f, x, \delta) \\
     &\le \sup f([a, b]) \\
     &\quad - \inf f([a, b]).
     \end{aligned}
     $$
   - (ii) For every $\delta > 0$, $0 \le o(f, x) \le o(f, x, \delta)$. In particular $0 \le o(f, x) \le \sup f([a, b]) - \inf f([a, b])$.
   - (iii) For a real number $r$, $o(f, x) < r$ if and only if there is $\delta > 0$ with $o(f, x, \delta) < r$. If such a $\delta$ exists, then $o(f, x, \delta') < r$ for every $\delta'$ with $0 < \delta' \le \delta$. Hence $r \le o(f, x)$ if and only if $r \le o(f, x, \delta)$ for every $\delta > 0$.
   - (iv) For $\delta > 0$ and all $y$, $z \in B_{[a, b]}(x, \delta)$, $|f(y) - f(z)| \le o(f, x, \delta)$.
2. (Continuity and oscillation) $f$ is continuous at $x$ if and only if $o(f, x) = 0$. Hence $f$ is discontinuous at $x$ if and only if $0 < o(f, x)$, and if and only if there is a natural number $k$ with $\dfrac{1}{k} \le o(f, x)$.
3. (The set of points of oscillation at least $r$) For a real number $r$ let $S_r = \{x \in [a, b] : r \le o(f, x)\}$.
   - (i) If $x \in [a, b]$ and $o(f, x) < r$, then there is $\eta > 0$ such that $o(f, \xi) < r$ for every $\xi \in [a, b]$ with $|\xi - x| < \eta$.
   - (ii) With the standard metric on $\mathbb{R}$, $S_r$ is closed in $\mathbb{R}$. With the standard topology, $S_r$ is a compact subset of $\mathbb{R}$. The set $S_r$ may be empty.
   - (iii) If $0 < r$, then $f$ is discontinuous at every point of $S_r$.
4. (Comparison with small closed intervals)
   - (i) If $c$, $d$ are real numbers with $c < x < d$ and $[c, d] \subseteq [a, b]$, then $o(f, x) \le \sup f([c, d]) - \inf f([c, d])$.
   - (ii) If $r$ is a real number with $o(f, x) < r$, then there are real numbers $c$, $d$ with $c < x < d$ such that $x \in [c, d] \cap [a, b]$ and
     $$
     \begin{aligned}
     &\sup f\bigl([c, d] \cap [a, b]\bigr) \\
     &\quad - \inf f\bigl([c, d] \cap [a, b]\bigr) < r.
     \end{aligned}
     $$
:::

## 직관

함숫값이 한 점 둘레에서 얼마나 흔들리는지를 재는 수입니다. 점 $x$에서 거리 $\delta$ 안에 있는 점들만 보고, 그곳에서 함숫값이 차지하는 가장 좁은 범위의 폭 $o(f, x, \delta)$를 잽니다. 돋보기의 배율을 올리듯 $\delta$를 줄이면 보는 점이 줄어 폭은 커지지 않습니다((1)의 (i)). 배율을 끝없이 올려도 남는 폭, 곧 그 폭들의 하한이 $x$에서의 진동입니다.

연속이라는 것은 배율을 충분히 올리면 함숫값이 $f(x)$ 둘레의 원하는 만큼 좁은 범위에 들어온다는 것이므로, 남는 폭이 $0$이라는 것과 같은 말입니다((2)). 하한은 어느 $\delta$에서도 나오지 않을 수 있습니다(아래 첫 예시). 그래서 "진동이 $r$보다 작다"는 "폭이 $r$보다 작은 $\delta$가 하나 있다"로 읽고((1)의 (iii)), 그 $\delta$로 이웃한 점들의 진동까지 함께 누릅니다((3)의 (i)). 이것이 진동이 $r$ 이상인 점들의 집합이 닫혀 있는 까닭입니다.

## 증명

:::idea
대부분의 성질은 [[supremum-of-function-values]]의 (4) "진동 $\le r$ 은 모든 두 점의 차가 $r$ 이하라는 것"과 (5) "작은 집합 위의 진동은 크지 않다"를 $B_{[a, b]}(x, \delta)$들에 쓰는 것이다. 닫힘은 이웃한 점 $\xi$의 둘레 $B_{[a, b]}(\xi, \delta/2)$가 $B_{[a, b]}(x, \delta)$ 안에 든다는 것에서 나온다.
:::

:::hint
(2)의 한 방향: $f$가 $x$에서 연속이면 $|f(y) - f(x)| < \varepsilon/2$인 둘레에서 두 점의 차는 $\varepsilon$보다 작다.
:::

:::hint
(4)의 (i): $x - c$와 $d - x$ 가운데 작은 것을 $\delta$로 잡으면 $B_{[a, b]}(x, \delta) \subseteq [c, d]$이다.
:::

:::proof
실수의 계산과 순서는 [[real-number-arithmetic]], [[real-order-axioms]], [[order-properties-of-reals]]로 다룬다. "상한 (번호)"는 [[supremum-of-function-values]]의 번호이고, 그 항목의 첫 목록(집합 위에서 유계)의 넷째 줄 "$D$가 공집합이 아니고 $f$가 $D$ 위에서 유계이면 $\sup f(D)$와 $\inf f(D)$가 있고 모든 $x \in D$에서 $\inf f(D) \le f(x) \le \sup f(D)$"를 "상한 (가)"라 부른다.

**정의가 뜻을 갖는다는 것.** $|x - x| = 0 < \delta$이므로 $x \in B_{[a, b]}(x, \delta)$이다. $[a, b]$ 위의 부분공간 거리는 $[a, b]$의 점 $u$, $v$에서 $|u - v|$이므로([[metric-space-examples]]의 (1), (3)) 그 거리공간의 열린 공 $B_{[a, b]}(x, \delta)$는 $|x - y| < \delta$인 $[a, b]$의 점 $y$ 전체이고, [[absolute-value]]의 (3)에 의해 위의 집합과 같다. $f$가 유계이므로 [[supremum-of-function-values]]의 첫 목록 둘째 줄에 의해 $f$는 $[a, b]$의 모든 부분집합 위에서 유계이고, 상한 (가)에 의해 $\sup f(B_{[a, b]}(x, \delta))$와 $\inf f(B_{[a, b]}(x, \delta))$가 있다. 그래서 $o(f, x, \delta)$는 실수이고, 상한 (4)의 마지막 문장에 의해 $0 \le o(f, x, \delta)$이다. 집합 $E = \{o(f, x, \delta) : \delta > 0\}$은 $o(f, x, 1)$을 원소로 가지므로 공집합이 아니고, 방금 본 것에 의해 $0$은 $E$의 하계이다. [[infimum-exists]]의 (4)에 의해 $E$는 하한을 가진다.

**1의 증명.** (i) $y \in B_{[a, b]}(x, \delta')$이면 $|y - x| < \delta' \le \delta$이므로 $y \in B_{[a, b]}(x, \delta)$이다. $B_{[a, b]}(x, \delta')$은 공집합이 아니므로 상한 (5)를 $D = B_{[a, b]}(x, \delta)$, $A = B_{[a, b]}(x, \delta')$에 쓰면 $o(f, x, \delta') \le o(f, x, \delta)$이고, $D = [a, b]$, $A = B_{[a, b]}(x, \delta)$에 쓰면 $o(f, x, \delta) \le \sup f([a, b]) - \inf f([a, b])$이다. $0 \le o(f, x, \delta')$은 위에서 보았다.

(ii) $o(f, x)$는 $E$의 하한이므로 $E$의 하계이고, 따라서 모든 $\delta > 0$에서 $o(f, x) \le o(f, x, \delta)$이다. $0$은 $E$의 하계이고 하한은 모든 하계 이상이므로([[upper-bound-and-supremum]]의 하한의 정의) $0 \le o(f, x)$이다. $\delta = 1$과 (i)에서 $o(f, x) \le o(f, x, 1) \le \sup f([a, b]) - \inf f([a, b])$이다.

(iii) $o(f, x, \delta) < r$인 $\delta > 0$이 있으면 (ii)에 의해 $o(f, x) \le o(f, x, \delta) < r$이다. 거꾸로 그런 $\delta$가 없다고 하자. 그러면 모든 $\delta > 0$에서 $r \le o(f, x, \delta)$이므로([[order-properties-of-reals]]의 (1)의 (iii)) $r$은 $E$의 하계이고, 하한의 정의에 의해 $r \le o(f, x)$, 곧 $o(f, x) < r$이 아니다. 따라서 $o(f, x) < r$이면 그런 $\delta$가 있다. 그런 $\delta$와 $0 < \delta' \le \delta$에서 (i)에 의해 $o(f, x, \delta') \le o(f, x, \delta) < r$이다. 마지막 문장은 첫 문장의 양쪽을 부정한 것이다([[order-properties-of-reals]]의 (1)의 (iii)).

(iv) 상한 (4)의 "특히" 문장을 $D = B_{[a, b]}(x, \delta)$에 쓴 것이다.

**2의 증명.** $f$가 $x$에서 연속이라 하고 $\varepsilon > 0$이라 하자. 연속의 정의를 양수 $\varepsilon/2$에 쓰면 양수 $\delta$가 있어 $y \in [a, b]$이고 $|y - x| < \delta$인 모든 $y$, 곧 $B_{[a, b]}(x, \delta)$의 모든 원소 $y$에서 $|f(y) - f(x)| < \varepsilon/2$이다. $B_{[a, b]}(x, \delta)$의 원소 $y$, $z$에서 [[triangle-inequality]]의 (4)와 [[absolute-value]]의 (3)에 의해
$$
\begin{aligned}
|f(y) - f(z)| &\le |f(y) - f(x)| \\
&\quad + |f(x) - f(z)| \\
&< \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon
\end{aligned}
$$
이므로, 상한 (4)의 (iii)에서 (i)로 가는 방향에 의해 $o(f, x, \delta) \le \varepsilon$이고, (1)의 (ii)에 의해 $o(f, x) \le \varepsilon$이다. 이것이 모든 양수 $\varepsilon$에서 성립하고 $0 \le o(f, x)$이므로 [[order-properties-of-reals]]의 (9)에 의해 $o(f, x) = 0$이다.

거꾸로 $o(f, x) = 0$이라 하고 $\varepsilon > 0$이라 하자. $o(f, x) < \varepsilon$이므로 (1)의 (iii)에 의해 $o(f, x, \delta) < \varepsilon$인 양수 $\delta$가 있다. $y \in [a, b]$이고 $|y - x| < \delta$이면 $y$와 $x$가 모두 $B_{[a, b]}(x, \delta)$의 원소이므로 (1)의 (iv)에 의해 $|f(y) - f(x)| \le o(f, x, \delta) < \varepsilon$이다. 따라서 $f$는 $x$에서 연속이다.

불연속은 연속이 아닌 것이므로, $f$가 $x$에서 불연속인 것은 정확히 $o(f, x) \ne 0$일 때이고, $0 \le o(f, x)$이므로 이것은 정확히 $0 < o(f, x)$일 때이다. $0 < o(f, x)$이면 [[archimedean-property]]의 (3)에 의해 $1/k < o(f, x)$인 자연수 $k$가 있다. 거꾸로 자연수 $k$가 $1/k \le o(f, x)$를 만족하면 $k$는 양의 실수이므로([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]], [[order-properties-of-reals]]의 (10)) [[order-properties-of-reals]]의 (6)의 (i)에 의해 $0 < 1/k \le o(f, x)$이다.

**3의 증명.** (i) $o(f, x) < r$이므로 (1)의 (iii)에 의해 $o(f, x, \delta) < r$인 양수 $\delta$가 있다. $\eta = \delta/2$로 두면 $\eta > 0$이다([[order-properties-of-reals]]의 (8)). $\xi \in [a, b]$이고 $|\xi - x| < \eta$라 하자. $y \in B_{[a, b]}(\xi, \eta)$이면 [[triangle-inequality]]의 (4)에 의해 $|y - x| \le |y - \xi| + |\xi - x| < \eta + \eta = \delta$이므로 $y \in B_{[a, b]}(x, \delta)$이다. 곧 $B_{[a, b]}(\xi, \eta) \subseteq B_{[a, b]}(x, \delta)$이다. $B_{[a, b]}(\xi, \eta)$는 $\xi$를 원소로 가지므로 공집합이 아니고, 상한 (5)에 의해 $o(f, \xi, \eta) \le o(f, x, \delta) < r$이다. (1)의 (ii)에 의해 $o(f, \xi) \le o(f, \xi, \eta) < r$이다.

(ii) $\mathbb{R}$의 보통 거리는 $d(u, v) = |u - v|$이다([[metric-space-examples]]의 (1)). [[open-set-in-metric-space]]의 (3)에 의해, $\mathbb{R} - S_r$의 모든 점 $x$에 대하여 $B(x, \rho) \cap S_r = \emptyset$인 양수 $\rho$가 있음을 보이면 된다. 여기서 $B(x, \rho) = \{u \in \mathbb{R} : |x - u| < \rho\}$이다([[open-ball]]). $x \in \mathbb{R} - S_r$라 하자. [[order-properties-of-reals]]의 (1)의 (iii)에 의해 다음 세 경우 가운데 하나이다.
- $x < a$인 경우. $\rho = a - x > 0$으로 둔다. $u \in B(x, \rho)$이면 [[absolute-value]]의 (8)에 의해 $u < x + \rho = a$이므로 $u \notin [a, b]$이고, $S_r \subseteq [a, b]$이므로 $u \notin S_r$이다.
- $b < x$인 경우. $\rho = x - b > 0$으로 둔다. $u \in B(x, \rho)$이면 $b = x - \rho < u$이므로 같은 까닭으로 $u \notin S_r$이다.
- $a \le x \le b$인 경우. $x \in [a, b]$이고 $x \notin S_r$이므로 $o(f, x) < r$이다([[order-properties-of-reals]]의 (1)의 (iii)). (i)의 $\eta$를 $\rho$로 둔다. $u \in B(x, \rho)$라 하자. $u \notin [a, b]$이면 $u \notin S_r$이다. $u \in [a, b]$이면 $|u - x| < \rho$이므로 (i)에 의해 $o(f, u) < r$이고 $u \notin S_r$이다.

어느 경우나 $B(x, \rho) \cap S_r = \emptyset$이다. 따라서 $S_r$은 $(\mathbb{R}, d)$에서 닫힌집합이다. [[standard-topology-on-reals]]의 (5)에 의해 보통 위상은 거리위상 $\mathcal{T}_d$와 같고, [[closed-set]]의 (6)에 의해 $S_r$은 보통 위상에서 닫힌집합이다. [[closed-interval-is-compact|닫힌구간의 콤팩트성]]의 (1)에 의해 $[a, b]$는 $\mathbb{R}$의 콤팩트 부분집합이고 $S_r \subseteq [a, b]$이므로, [[closed-subset-of-compact]]의 (2)에 의해 $S_r$은 $\mathbb{R}$의 콤팩트 부분집합이다([[compact-space|콤팩트 공간]] 항목의 뜻).

(iii) $0 < r$이고 $x \in S_r$이면 $0 < r \le o(f, x)$이므로 (2)에 의해 $f$는 $x$에서 불연속이다.

**4의 증명.** (i) $x - c$와 $d - x$는 양수이다([[order-properties-of-reals]]의 (3)의 (i)). $x - c \le d - x$이면 $\delta = x - c$로, $d - x < x - c$이면 $\delta = d - x$로 둔다. 어느 경우나 $0 < \delta$이고 $\delta \le x - c$, $\delta \le d - x$이다. $y \in B_{[a, b]}(x, \delta)$이면 [[absolute-value]]의 (8)에 의해 $x - \delta < y < x + \delta$이고, $c \le x - \delta$, $x + \delta \le d$이므로 $c < y < d$, 곧 $y \in [c, d]$이다. 따라서 $B_{[a, b]}(x, \delta)$는 $[c, d]$의 공집합이 아닌 부분집합이고, $[c, d] \subseteq [a, b]$이므로 상한 (5)를 $D = [c, d]$에 쓰면 $o(f, x, \delta) \le \sup f([c, d]) - \inf f([c, d])$이다. (1)의 (ii)에 의해 $o(f, x) \le o(f, x, \delta)$이다.

(ii) (1)의 (iii)에 의해 $o(f, x, \delta) < r$인 양수 $\delta$가 있다. $c = x - \delta/2$, $d = x + \delta/2$로 두면 $0 < \delta/2$이므로 $c < x < d$이다. $x \in [c, d]$이고 $x \in [a, b]$이다. $y \in [c, d] \cap [a, b]$이면 [[absolute-value]]의 (8)에 의해 $|y - x| \le \delta/2 < \delta$이므로 $y \in B_{[a, b]}(x, \delta)$이다. 따라서 $[c, d] \cap [a, b]$는 $B_{[a, b]}(x, \delta)$의 공집합이 아닌 부분집합이고, 상한 (5)에 의해 그 위에서의 진동은 $o(f, x, \delta)$ 이하이며 $r$보다 작다. $\blacksquare$
:::

## 예시와 반례

:::example[계단 하나인 함수의 진동]
$[0, 4]$ 위의 함수 $f$를 $x < 3$이면 $f(x) = 0$, $3 \le x$이면 $f(x) = 2$로 정합니다. 값이 $0$과 $2$뿐이므로 유계입니다.

- $x = 3$: 양수 $\delta$가 무엇이든 $u = 3 - \min\{\delta, 1\}/2$는 $[0, 4]$에 있고 $|u - 3| < \delta$이며 $u < 3$이어서 $f(u) = 0$입니다. $f(3) = 2$이므로 $B_{[0, 4]}(3, \delta)$ 위의 값의 집합은 $\{0, 2\}$이고 $o(f, 3, \delta) = 2 - 0 = 2$입니다. 모든 $\delta$에서 같으므로 $o(f, 3) = 2$입니다.
- $0 \le x < 3$: $\delta = 3 - x$로 두면 $B_{[0, 4]}(x, \delta)$의 점 $y$는 $y < x + \delta = 3$이어서 값이 모두 $0$이므로 $o(f, x, \delta) = 0$이고, (1)의 (ii)에 의해 $o(f, x) = 0$입니다.
- $3 < x \le 4$: $\delta = x - 3$으로 두면 둘레의 점은 모두 $3$보다 커서 값이 $2$이고 $o(f, x) = 0$입니다.

(2)대로 $f$는 $x = 3$에서만 불연속입니다. (3)의 집합은 $0 < r \le 2$이면 $\{3\}$, $2 < r$이면 공집합, $r \le 0$이면 $[0, 4]$이고, 셋 모두 닫힌집합입니다.
:::

:::example[하한이 어느 둘레에서도 나오지 않는 예]
$[0, 1]$ 위의 $f(x) = x$와 $x = 1/2$을 봅니다. $0 < \delta \le 1/2$이면 $0 \le 1/2 - \delta$이고 $1/2 + \delta \le 1$이므로 $B_{[0, 1]}(1/2, \delta)$는 열린구간 $(1/2 - \delta, 1/2 + \delta)$이고, $f$의 값의 집합도 이 열린구간입니다. 그 상한은 $1/2 + \delta$입니다. $1/2 + \delta$는 상계이고, $c < 1/2 + \delta$이면 $\max\{c, 1/2\}$와 $1/2 + \delta$의 평균이 이 구간에 있으면서 $c$보다 크기 때문입니다. 같은 까닭으로 하한은 $1/2 - \delta$이므로 $o(f, 1/2, \delta) = 2\delta$입니다. $1/2 < \delta$이면 둘레가 $[0, 1]$ 전체여서 $o(f, 1/2, \delta) = 1$입니다. 그래서 $\{o(f, 1/2, \delta) : \delta > 0\}$은 $0 < t \le 1$인 실수 $t$ 전체이고, 하한 $o(f, 1/2) = 0$은 이 집합의 원소가 아닙니다. 어느 $\delta$에서도 둘레 위의 진동은 양수이지만 점에서의 진동은 $0$이고, (2)대로 $f$는 $1/2$에서 연속입니다.
:::

:::counterexample[작은 닫힌구간의 끝점에서 진동이 더 큰 예]
첫 예시의 $f$와 $x = 3$, $[c, d] = [3, 4]$를 봅니다. $[3, 4]$ 위에서 $f$는 값이 $2$인 상수이므로 $[3, 4]$ 위에서의 진동은 $0$이지만 $o(f, 3) = 2$입니다. 그래서 (4)의 (i)에서 $c < x < d$, 곧 $x$가 $[c, d]$의 안쪽에 있다는 가정을 "$x \in [c, d]$"로 넓힐 수 없습니다. 끝점 $3$의 둘레에는 $[3, 4]$ 밖의 왼쪽 점들이 늘 들어오기 때문입니다. 안쪽에 $3$을 품는 $[c, d] = [5/2, 7/2]$에서는 그 위의 진동이 $2$여서 (4)의 (i)의 부등식이 등호로 성립합니다.
:::

## 확인 질문

:::check[$[-1, 1]$ 위에서 $x < 0$이면 $-2$, $x = 0$이면 $1$, $0 < x$이면 $2$인 함수 $g$의 $o(g, 0)$은?]
$4$입니다. 양수 $\delta$마다 $u = \min\{\delta, 1\}/2$에 대하여 $-u$와 $u$가 $B_{[-1, 1]}(0, \delta)$에 있고 $g(-u) = -2$, $g(u) = 2$, $g(0) = 1$입니다. 둘레 위의 값의 집합은 $\{-2, 1, 2\}$이므로 $o(g, 0, \delta) = 2 - (-2) = 4$이고, 모든 $\delta$에서 같으므로 $o(g, 0) = 4$입니다. $g(0)$을 $-2$와 $2$ 사이의 어느 값으로 바꾸어도 답은 같습니다.
:::

:::check[유계이고 $[a, b]$의 모든 점에서 연속인 $f$에서 (3)의 집합 $S_r$은 무엇인가?]
$0 < r$이면 공집합이고, $r \le 0$이면 $[a, b]$ 전체입니다. (2)에 의해 모든 점에서 $o(f, x) = 0$입니다. 그래서 $r \le o(f, x)$인 것은 정확히 $r \le 0$일 때입니다.
:::
