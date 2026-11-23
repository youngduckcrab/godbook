---
title: 유계 사상의 공간과 고른 거리
title_en: The Space of Bounded Maps and the Uniform Metric
aliases: [유계 사상, 유계 사상의 공간, 고른 거리, 상한 거리, 값 매기기, bounded map, uniform metric, sup metric, uniform norm, evaluation map]
kind: definition
field: topology
msc: ["54C35", "54E35"]
level: undergrad
summary: 집합 X 에서 거리공간 Y 로의 사상 가운데 상이 유계인 것 전체를 Bd(X, Y) 로 쓰고, 두 사상의 값 사이 거리의 상한을 고른 거리 d∞ 로 정의한다. d∞ 가 거리이고, 이 거리의 수렴과 코시가 정확히 고른 수렴과 고르게 코시라는 것, 유계 사상의 고른 극한은 유계라는 것, 값 매기기가 1-립시츠라는 것, 상수 사상들이 Y 의 사본을 이룬다는 것을 보인다.
requires: [archimedean-property, set, subset, function, image-and-preimage, recursion-theorem, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, upper-bound-and-supremum, least-upper-bound-property, bounded-function, interval, metric-space, metric-space-examples, open-ball, compact-metric-closed-and-bounded, topology-examples, sequence-in-a-space, convergence-in-metric-spaces, cauchy-sequence-in-metric-space, lipschitz-map, pointwise-convergence, uniform-convergence, uniformly-cauchy-sequence-of-maps, natural-numbers-are-infinite, prime-number, well-ordering-principle]
sources:
  - ref: lebl-basic-analysis
    loc: "6.1.3소절 Convergence in uniform norm: Definition 6.1.9, Proposition 6.1.10 과 증명, Definition 6.1.12 (p.230–231); 6.1.4소절 연습문제 6.1.1 (p.232), 6.1.12, 6.1.13 (p.233); 6.2.2소절 Example 6.2.7 (p.238); 7.1절 Example 7.1.8 (p.259–260); 7.3.1소절 Example 7.3.7 (p.275); 7.4.1소절 Proposition 7.4.5 (p.280); 7.5.6소절 연습문제 7.5.11 (p.294); 1.3절 Definition 1.3.6 (p.38); 1.1절 Definition 1.1.2 와 1.1.3 사이 문단 (p.24)"
    checked: original
    note: "출처 Definition 6.1.9(p.230)는 유계인 실함수 f : S → ℝ 에 고른 노름 ‖f‖_S = sup{|f(x)| : x ∈ S} 를 정의하고, Proposition 6.1.10(p.231)은 유계인 함수들의 열이 f 로 고르게 수렴하는 것이 정확히 ‖f_n − f‖_S 가 0 으로 수렴할 때라고 증명한다. 이 항목은 노름을 정의하지 않고, 공역을 거리공간 (Y, d_Y) 로, 정의역을 아무 집합 X 로 넓혀 두 사상 사이의 거리 d∞(f, g) = sup{d_Y(f(x), g(x)) : x ∈ X} 를 직접 정의한다. Y = ℝ 이면 d∞(f, g) 는 출처의 ‖f − g‖_X 와 같은 수이다((4)의 (iii)). 출처는 Example 7.1.8(p.259–260)에서 [a, b] 위의 연속 실함수 전체 C([a, b], ℝ) 에 같은 꼴의 거리를 주고, 상한이 유한한 까닭을 연속함수가 유계라는 것으로, 삼각부등식을 상한을 두 번 취하는 계산으로 보이며, 이 거리가 Definition 6.1.9 의 고른 노름 ‖f − g‖_[a,b] 라고 적는다. 이 항목의 (1)은 상한이 있음을 두 사상의 상이 같은 중심의 공에 든다는 것으로 보이고, (3)의 삼각부등식은 (2)의 (ii)로 상한을 한 번만 취한다. 이 삼각부등식은 연습문제 6.1.1(p.232: [a, b] 위의 유계 함수에서 ‖f + g‖ ≤ ‖f‖ + ‖g‖)과 같은 발상이다. 출처는 Proposition 7.4.5(p.280)에서 이 거리를 'the uniform norm as metric' 이라 부른다. 공집합은 상한을 갖지 않으므로(upper-bound-and-supremum 의 (5)) 이 항목은 X = ∅ 이면 d∞ 를 0 으로 따로 정한다. (5)는 Proposition 6.1.10 과 Example 7.3.7(p.275: C([a, b], ℝ) 에서 이 거리의 수렴은 고른 수렴과 같다)을, (6)은 Definition 6.1.12(p.231)의 '고른 노름으로 코시'를 일반의 공역에서 진술한 것이다. (7)의 (ii)는 연습문제 6.1.12(p.233: 유계인 함수로 고르게 수렴하면 어떤 N 부터 f_n 이 유계)와 같은 진술이고, (7)의 (i)은 연습문제 6.1.13(p.233: 공통 상수로 유계인 함수들의 점별 극한은 유계)과 같은 결론을 고른 수렴에서 얻는다. (8)은 연습문제 7.5.11(p.294: 콤팩트 거리공간 X 위의 연속 실함수에 같은 거리를 주고 b) 값 매기기 E_x(f) = f(x)(출처의 이름은 evaluation function)가 연속임을 보이라)의 b) 와 같은 사상을 Bd(X, Y) 위에서 1-립시츠로 진술한 것이다. 출처 1.3절 Definition 1.3.6(p.38)은 아무 집합 D 위의 실함수가 유계라는 것을 모든 x 에서 |f(x)| ≤ M 인 M 이 있다는 것으로 정의한다. (4)의 (i)은 그것과 이 항목의 유계가 같다는 것이다. 예시 '상한이 어느 점에서의 차이와도 같지 않은 예'는 출처 1.1절 Definition 1.1.2 와 1.1.3 사이의 문단(p.24: {x ∈ ℚ : x < 1} 의 상한 1 은 그 집합에 들지 않는다)과 같은 발상을 사상의 거리에서 보인 것이다. 반례 '유계인 사상들의 점별 극한이 유계가 아닌 예'는 출처 6.2.2소절 Example 6.2.7(p.238: 유계인 f_n 의 점별 극한이 유계가 아니다)과 같은 결론을 다른 함수로 보인 것이다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 이 사이트에 없는 방향을 사실처럼 말한 직관 1건과 단원 글 1건, 틀리거나 빠진 근거 번호 4곳, 메모의 부정 주장 2건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
집합, 부분집합, 함수와 그 공역, 함수의 같음은 [[set]], [[subset]], [[function]]의 것이고, 상 $f(X)$는 [[image-and-preimage]]의 것이다. 사상, 사상 전체의 집합, 사상의 열은 [[pointwise-convergence|사상의 열과 점별 수렴]]의 것이고, 고른 수렴은 [[uniform-convergence|고른 수렴]]의 것이며, 고르게 코시는 [[uniformly-cauchy-sequence-of-maps|고르게 코시인 사상의 열]]의 것이다. 거리공간, 부분공간 거리, 실수의 보통 거리, 이산 거리는 [[metric-space]], [[metric-space-examples]]의 것이고, 열린 공 $B(y, r)$는 [[open-ball]]의 것이며, 거리공간의 부분집합의 유계는 [[compact-metric-closed-and-bounded|거리공간의 유계와 콤팩트]]의 것이다. 거리공간에는 늘 거리위상([[topology-examples]])을 주고, 수열과 수렴은 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 것이며, 코시 수열은 [[cauchy-sequence-in-metric-space]]의 것이다. 상계, 상한 $\sup$은 [[upper-bound-and-supremum]]의 것이고, $K$-립시츠는 [[lipschitz-map]]의 것이다. 아래에서 $X$는 집합이고 $(Y, d_Y)$는 거리공간이다.

**유계 사상.** 사상 $f : X \to Y$가 **유계**(bounded)인 것은 정확히 상 $f(X)$가 $(Y, d_Y)$에서 유계일 때이다. $X$에서 $Y$로의 사상 전체의 집합의 원소 가운데 유계인 것 전체의 집합을 $\operatorname{Bd}(X, Y)$로 쓴다. 곧 $\operatorname{Bd}(X, Y)$의 원소는 정확히 $X$에서 $Y$로의 유계인 사상이다.

**고른 거리.** $f$, $g \in \operatorname{Bd}(X, Y)$라 하자. [[recursion-theorem|재귀 정리]]의 (1)에 의해 $x$를 $d_Y(f(x), g(x))$로 보내는 함수 $\delta_{f,g} : X \to \mathbb{R}$가 있다. $X \ne \emptyset$이면 아래 (1)에 의해 상 $\delta_{f,g}(X) = \{d_Y(f(x), g(x)) : x \in X\}$는 상한을 가지므로
$$
\begin{aligned}
&d_\infty(f, g) \\
&\quad = \sup\{d_Y(f(x), g(x)) : x \in X\}
\end{aligned}
$$
로 정하고, $X = \emptyset$이면 $d_\infty(f, g) = 0$으로 정한다. 상한은 하나뿐이므로 $d_\infty(f, g)$는 실수 하나로 정해지고, 재귀 정리의 (1)에 의해 $(f, g)$를 $d_\infty(f, g)$로 보내는 함수 $d_\infty : \operatorname{Bd}(X, Y) \times \operatorname{Bd}(X, Y) \to \mathbb{R}$가 있다. $d_\infty$를 $\operatorname{Bd}(X, Y)$ 위의 **고른 거리**(uniform metric)라 한다. $\operatorname{Bd}(X, Y)$를 거리공간이라 하면 이 거리를 준 것이다.

다음이 성립한다. 아래에서 $f$, $g$, $h$는 $\operatorname{Bd}(X, Y)$의 원소이다.

1. (상한이 있다) $X \ne \emptyset$이면 실수의 집합 $\delta_{f,g}(X)$는 공집합이 아니고 위로 유계이며, 따라서 상한을 갖는다. 또 $0 \le d_\infty(f, g)$이다.
2. (상한의 두 성질)
   - (i) $X$의 모든 점 $x$에서 $d_Y(f(x), g(x)) \le d_\infty(f, g)$이다.
   - (ii) 실수 $c$가 $0 \le c$이고 $X$의 모든 점 $x$에서 $d_Y(f(x), g(x)) \le c$이면 $d_\infty(f, g) \le c$이다.
   - (iii) $X \ne \emptyset$이고 실수 $c$가 $c < d_\infty(f, g)$이면 $c < d_Y(f(x), g(x))$인 점 $x \in X$가 있다.
3. (거리) $(\operatorname{Bd}(X, Y), d_\infty)$는 거리공간이다.
4. (실숫값 사상) $Y = \mathbb{R}$이고 $d_Y$가 보통 거리라 하자.
   - (i) 사상 $f : X \to \mathbb{R}$가 유계인 것은 정확히 $X$의 모든 점 $x$에서 $|f(x)| \le B$인 실수 $B$가 있을 때이다.
   - (ii) 특히 $X = S$가 $\mathbb{R}$의 부분집합이면, $f : S \to \mathbb{R}$가 이 항목의 뜻으로 유계인 것은 정확히 $f$가 [[bounded-function|함수의 유계]]의 뜻으로 유계일 때이다. 그래서 두 뜻을 같은 이름으로 부른다.
   - (iii) $X \ne \emptyset$이면 $d_\infty(f, g) = \sup\{|f(x) - g(x)| : x \in X\}$이다.
5. (고른 수렴과 같다) $(f_n)$이 $\operatorname{Bd}(X, Y)$의 수열이면 $(f_n)$은 $X$에서 $Y$로의 사상의 열이기도 하다. 이때 $(f_n)$이 $(\operatorname{Bd}(X, Y), d_\infty)$에서 $f$로 수렴하는 것은 정확히 $(f_n)$이 $f$로 고르게 수렴할 때이다.
6. (고르게 코시와 같다) $(f_n)$이 $\operatorname{Bd}(X, Y)$의 수열이면, $(f_n)$이 $(\operatorname{Bd}(X, Y), d_\infty)$의 코시 수열인 것은 정확히 $(f_n)$이 고르게 코시일 때이다.
7. (고른 극한과 유계) $(f_n)$이 $X$에서 $Y$로의 사상의 열이고 $k : X \to Y$가 사상이며 $(f_n)$이 $k$로 고르게 수렴한다고 하자.
   - (i) 모든 자연수 $n$에서 $f_n$이 유계이면 $k$는 유계이다.
   - (ii) $k$가 유계이면 자연수 $N$이 있어 $n \ge N$인 모든 자연수 $n$에서 $f_n$이 유계이다.
8. (값 매기기) $x \in X$이면 $f$를 $f(x)$로 보내는 사상 $\operatorname{ev}_x : \operatorname{Bd}(X, Y) \to Y$가 있고, 이 사상은 $1$-립시츠이며 따라서 연속이다. $\operatorname{ev}_x$를 $x$에서의 **값 매기기**(evaluation)라 한다.
9. (상수 사상과 $Y$의 사본) $y \in Y$이면 모든 $x \in X$에서 값이 $y$인 사상 $\kappa_y : X \to Y$가 있다. 이것을 값이 $y$인 **상수 사상**이라 한다.
   - (i) $\kappa_y$는 유계이다.
   - (ii) $X \ne \emptyset$이면 $Y$의 모든 점 $y$, $z$에서 $d_\infty(\kappa_y, \kappa_z) = d_Y(y, z)$이다. 따라서 이때 $y$를 $\kappa_y$로 보내는 사상 $Y \to \operatorname{Bd}(X, Y)$는 거리를 보존하고 단사이다.
10. (경계의 경우)
    - (i) ($X = \emptyset$) $X$에서 $Y$로의 사상은 $\emptyset$ 하나뿐이고 유계이다. $\operatorname{Bd}(\emptyset, Y) = \{\emptyset\}$은 원소가 하나인 거리공간이다.
    - (ii) ($X \ne \emptyset$이고 $Y = \emptyset$) $X$에서 $Y$로의 사상이 없으므로 $\operatorname{Bd}(X, Y) = \emptyset$이다.
    - (iii) ($X$가 한 점) $X = \{p\}$이면 $X$에서 $Y$로의 모든 사상이 유계이고, $f = \kappa_{f(p)}$이며 $d_\infty(f, g) = d_Y(f(p), g(p))$이다. 따라서 $\operatorname{ev}_p : \operatorname{Bd}(X, Y) \to Y$는 거리를 보존하는 전단사이고, 그 역함수는 $y$를 $\kappa_y$로 보내는 사상이다.
    - (iv) ($Y$가 이산 거리) $d_Y$가 이산 거리이면 $X$에서 $Y$로의 모든 사상이 유계이고, $d_\infty(f, g)$는 $f = g$이면 $0$, $f \ne g$이면 $1$이다. 곧 $d_\infty$는 $\operatorname{Bd}(X, Y)$ 위의 이산 거리이다.
    - (v) (유계가 아닌 사상) $\mathbb{R}$의 항등사상 $i_{\mathbb{R}} : \mathbb{R} \to \mathbb{R}$(보통 거리)는 유계가 아니다. 곧 $i_{\mathbb{R}} \notin \operatorname{Bd}(\mathbb{R}, \mathbb{R})$이다.
:::

:::english
Sets, subsets, functions with their codomains, and equality of functions are as in the entries on sets, subsets and functions, and the image $f(X)$ is as in the entry on images and preimages. Maps, the set of all maps, and sequences of maps are as in the entry on sequences of maps and pointwise convergence; uniform convergence is as in the entry on uniform convergence; and being uniformly Cauchy is as in the entry on uniformly Cauchy sequences of maps. Metric spaces, the subspace metric, the standard metric on the reals and the discrete metric are as in the entries on metric spaces and examples of metric spaces; open balls $B(y, r)$ are as in the entry on open balls; and boundedness of a subset of a metric space is as in the entry on boundedness and compactness in metric spaces. A metric space always carries its metric topology; sequences and convergence are as in the entry on sequences and convergence in a topological space, and Cauchy sequences are as in the entry on Cauchy sequences in metric spaces. Upper bounds and the supremum $\sup$ are as in the entry on upper bounds and suprema, and $K$-Lipschitz maps are as in the entry on Lipschitz maps. Below, $X$ is a set and $(Y, d_Y)$ is a metric space.

**Bounded maps.** A map $f : X \to Y$ is **bounded** exactly when its image $f(X)$ is bounded in $(Y, d_Y)$. The set of those elements of the set of all maps from $X$ to $Y$ that are bounded is written $\operatorname{Bd}(X, Y)$. Thus the elements of $\operatorname{Bd}(X, Y)$ are exactly the bounded maps from $X$ to $Y$.

**The uniform metric.** Let $f, g \in \operatorname{Bd}(X, Y)$. By part (1) of the recursion theorem there is a function $\delta_{f,g} : X \to \mathbb{R}$ sending $x$ to $d_Y(f(x), g(x))$. If $X \ne \emptyset$, then by (1) below the image $\delta_{f,g}(X) = \{d_Y(f(x), g(x)) : x \in X\}$ has a supremum, and we set
$$
\begin{aligned}
&d_\infty(f, g) \\
&\quad = \sup\{d_Y(f(x), g(x)) : x \in X\};
\end{aligned}
$$
if $X = \emptyset$, we set $d_\infty(f, g) = 0$. Since a supremum is unique, $d_\infty(f, g)$ is a single real number, and by part (1) of the recursion theorem there is a function $d_\infty : \operatorname{Bd}(X, Y) \times \operatorname{Bd}(X, Y) \to \mathbb{R}$ sending $(f, g)$ to $d_\infty(f, g)$. We call $d_\infty$ the **uniform metric** on $\operatorname{Bd}(X, Y)$. When $\operatorname{Bd}(X, Y)$ is called a metric space, it carries this metric.

The following hold, where $f$, $g$, $h$ are elements of $\operatorname{Bd}(X, Y)$.

1. (The supremum exists) If $X \ne \emptyset$, then the set of reals $\delta_{f,g}(X)$ is nonempty and bounded above, and therefore has a supremum. Moreover $0 \le d_\infty(f, g)$.
2. (Two properties of the supremum)
   - (i) $d_Y(f(x), g(x)) \le d_\infty(f, g)$ for every point $x$ of $X$.
   - (ii) If a real number $c$ satisfies $0 \le c$ and $d_Y(f(x), g(x)) \le c$ for every point $x$ of $X$, then $d_\infty(f, g) \le c$.
   - (iii) If $X \ne \emptyset$ and a real number $c$ satisfies $c < d_\infty(f, g)$, then there is a point $x \in X$ with $c < d_Y(f(x), g(x))$.
3. (A metric) $(\operatorname{Bd}(X, Y), d_\infty)$ is a metric space.
4. (Real-valued maps) Let $Y = \mathbb{R}$ with the standard metric $d_Y$.
   - (i) A map $f : X \to \mathbb{R}$ is bounded exactly when there is a real number $B$ with $|f(x)| \le B$ for every point $x$ of $X$.
   - (ii) In particular, if $X = S$ is a subset of $\mathbb{R}$, then $f : S \to \mathbb{R}$ is bounded in the sense of this entry exactly when $f$ is bounded in the sense of the entry on bounded functions. So the two notions share the name.
   - (iii) If $X \ne \emptyset$, then $d_\infty(f, g) = \sup\{|f(x) - g(x)| : x \in X\}$.
5. (The same as uniform convergence) If $(f_n)$ is a sequence in $\operatorname{Bd}(X, Y)$, then $(f_n)$ is also a sequence of maps from $X$ to $Y$. In that case $(f_n)$ converges to $f$ in $(\operatorname{Bd}(X, Y), d_\infty)$ exactly when $(f_n)$ converges uniformly to $f$.
6. (The same as uniformly Cauchy) If $(f_n)$ is a sequence in $\operatorname{Bd}(X, Y)$, then $(f_n)$ is a Cauchy sequence of $(\operatorname{Bd}(X, Y), d_\infty)$ exactly when $(f_n)$ is uniformly Cauchy.
7. (Uniform limits and boundedness) Let $(f_n)$ be a sequence of maps from $X$ to $Y$, let $k : X \to Y$ be a map, and suppose that $(f_n)$ converges uniformly to $k$.
   - (i) If $f_n$ is bounded for every natural number $n$, then $k$ is bounded.
   - (ii) If $k$ is bounded, then there is a natural number $N$ such that $f_n$ is bounded for every natural number $n \ge N$.
8. (Evaluation) If $x \in X$, there is a map $\operatorname{ev}_x : \operatorname{Bd}(X, Y) \to Y$ sending $f$ to $f(x)$; this map is $1$-Lipschitz and hence continuous. We call $\operatorname{ev}_x$ the **evaluation** at $x$.
9. (Constant maps and a copy of $Y$) If $y \in Y$, there is a map $\kappa_y : X \to Y$ whose value at every $x \in X$ is $y$. We call it the **constant map** with value $y$.
   - (i) $\kappa_y$ is bounded.
   - (ii) If $X \ne \emptyset$, then $d_\infty(\kappa_y, \kappa_z) = d_Y(y, z)$ for all points $y$, $z$ of $Y$. Hence in that case the map $Y \to \operatorname{Bd}(X, Y)$ sending $y$ to $\kappa_y$ preserves distances and is injective.
10. (Boundary cases)
    - (i) ($X = \emptyset$) The only map from $X$ to $Y$ is $\emptyset$, and it is bounded. $\operatorname{Bd}(\emptyset, Y) = \{\emptyset\}$ is a metric space with one element.
    - (ii) ($X \ne \emptyset$ and $Y = \emptyset$) There is no map from $X$ to $Y$, so $\operatorname{Bd}(X, Y) = \emptyset$.
    - (iii) ($X$ a single point) If $X = \{p\}$, then every map from $X$ to $Y$ is bounded, $f = \kappa_{f(p)}$, and $d_\infty(f, g) = d_Y(f(p), g(p))$. Hence $\operatorname{ev}_p : \operatorname{Bd}(X, Y) \to Y$ is a distance-preserving bijection whose inverse sends $y$ to $\kappa_y$.
    - (iv) ($Y$ with the discrete metric) If $d_Y$ is the discrete metric, then every map from $X$ to $Y$ is bounded, and $d_\infty(f, g)$ is $0$ if $f = g$ and $1$ if $f \ne g$. That is, $d_\infty$ is the discrete metric on $\operatorname{Bd}(X, Y)$.
    - (v) (An unbounded map) The identity map $i_{\mathbb{R}} : \mathbb{R} \to \mathbb{R}$ (standard metric) is not bounded; that is, $i_{\mathbb{R}} \notin \operatorname{Bd}(\mathbb{R}, \mathbb{R})$.
:::

## 직관

해석학 입문은 실수 하나하나를 점으로 보는 수직선에서 거리를 쟀습니다. 이 항목은 사상 하나하나를 점으로 보는 공간을 만들고 그 위에 거리를 줍니다. 두 사상 $f$와 $g$가 얼마나 떨어져 있는지는 점마다의 차이 $d_Y(f(x), g(x))$ 가운데 가장 나쁜 것, 정확히는 그것들의 상한으로 잽니다(정의역이 공집합이면 $0$으로 정합니다). 두 사람의 하루 체온 기록을 비교할 때 시각마다의 차이 가운데 가장 큰 차이를 "두 기록의 거리"로 삼는 것과 같습니다. 시각이 $X$의 점에, 체온이 $Y$의 값에, "가장 큰 차이"가 상한에 맞습니다. 비유가 어긋나는 곳은 상한이 실제로 어느 시각의 차이와 같지 않을 수도 있다는 점입니다(아래 첫째 예시).

상한이 있으려면 차이들이 한없이 커지지 않아야 합니다. 그래서 어느 두 사상을 골라도 상한이 있도록 상이 유계인 사상만 모읍니다. 유계가 아닌 두 사상도 차이는 유계일 수 있지만(예: $\mathbb{R}$의 항등사상과, 그것에 $1$을 더한 사상), 유계가 아닌 사상과 상수 사상 사이의 차이는 유계가 아닙니다. 이 거리로 재면 "$d_\infty(f_n, f)$가 작다"는 "모든 점에서 한꺼번에 가깝다"는 말이 되므로, 이 거리의 수렴은 [[uniform-convergence|고른 수렴]]과 같은 말이고((5)), 이 거리의 코시 수열은 고르게 코시인 열과 같은 말입니다((6)). 4단원에서 사상의 열에 대해 따로 정의한 두 개념이 거리공간 하나의 수렴과 코시로 바뀌는 것입니다.

(2)의 처음 두 성질이 이 거리를 다룰 때 쓰는 주된 도구입니다. (i)은 "상한은 모든 차이보다 크거나 같다", (ii)는 "모든 차이를 누르는 $0$ 이상의 수는 상한보다 크거나 같다"입니다. (ii)에 $0 \le c$가 붙은 것은 $X = \emptyset$일 때 $d_\infty = 0$으로 정했기 때문이고, $X \ne \emptyset$이면 모든 차이가 $0$ 이상이므로 그런 $c$는 저절로 $0$ 이상입니다.

## 성질의 증명

:::proof
"유계 (n)"은 [[compact-metric-closed-and-bounded|거리공간의 유계와 콤팩트]]의 번호, "순서 (n)"은 [[order-properties-of-reals]]의 번호, "절댓값 (n)"은 [[absolute-value]]의 번호, "상한 (n)"은 [[upper-bound-and-supremum]]의 번호이다. 거리의 조건 (i)–(iv)와 성질은 [[metric-space]]의 것이다. 자연수는 [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술에 의해 양의 정수이고, 실수의 계산은 [[real-number-arithmetic]]의 것이다.

**(1).** $X$의 점 $x_0$을 잡는다. $\delta_{f,g}(x_0) \in \delta_{f,g}(X)$이므로 이 집합은 공집합이 아니다. $p = f(x_0) \in Y$로 둔다. $f(X)$와 $g(X)$는 유계이므로 유계 (1)의 (ii)에 의해 $f(X) \subseteq B(p, r)$, $g(X) \subseteq B(p, s)$인 양의 실수 $r$, $s$가 있다. $x \in X$이면 $f(x) \in f(X)$, $g(x) \in g(X)$이므로 $d_Y(p, f(x)) < r$, $d_Y(p, g(x)) < s$이고, 거리의 조건 (iii), (iv)와 순서 (2)의 (iv)에 의해
$$
\begin{aligned}
d_Y(f(x), g(x)) &\le d_Y(f(x), p) \\
&\quad + d_Y(p, g(x)) \\
&< r + s
\end{aligned}
$$
이다. [[image-and-preimage]]의 (1)에 의해 $\delta_{f,g}(X)$의 원소는 모두 어떤 $x$에서의 $d_Y(f(x), g(x))$이므로 $r + s$는 이 집합의 상계이다. [[least-upper-bound-property|최소상계 성질]] (U)에 의해 상한이 있고, 상한 (1)에 의해 하나뿐이다. 거리의 조건 (i)에 의해 $0 \le \delta_{f,g}(x_0)$이고, 상한은 상계이므로 $\delta_{f,g}(x_0) \le d_\infty(f, g)$이다. 순서 (1)의 (v)에 의해 $0 \le d_\infty(f, g)$이다.

**(2).** $X = \emptyset$이면 (i)은 따질 점이 없어 성립하고, (ii)는 $d_\infty(f, g) = 0 \le c$이다. $X \ne \emptyset$이라 하자. (i): $d_\infty(f, g)$는 $\delta_{f,g}(X)$의 상계이고 $d_Y(f(x), g(x))$는 그 원소이다. (ii): 가정에 의해 $c$는 $\delta_{f,g}(X)$의 상계이고, 상한은 가장 작은 상계이므로 $d_\infty(f, g) \le c$이다. (iii): 상한 (4)에 의해 $c < t$인 $\delta_{f,g}(X)$의 원소 $t$가 있고, $t = d_Y(f(x), g(x))$인 $x \in X$가 있다.

**(3).** $d_\infty$는 정의에서 $\operatorname{Bd}(X, Y) \times \operatorname{Bd}(X, Y)$에서 $\mathbb{R}$로의 함수이다. 거리의 네 조건을 본다.

- (i) $X \ne \emptyset$이면 (1)이고, $X = \emptyset$이면 $d_\infty(f, g) = 0$이다.
- (ii) $f = g$이면 모든 $x$에서 [[metric-space]]의 (1)에 의해 $d_Y(f(x), g(x)) = 0 \le 0$이므로 (2)의 (ii)에서 $c = 0$으로 두어 $d_\infty(f, g) \le 0$이고, (i)과 순서 (1)의 (ii)에 의해 $d_\infty(f, g) = 0$이다. 거꾸로 $d_\infty(f, g) = 0$이면 모든 $x \in X$에서 거리의 조건 (i)과 (2)의 (i)에 의해 $0 \le d_Y(f(x), g(x)) \le 0$이고, 순서 (1)의 (ii)에 의해 $d_Y(f(x), g(x)) = 0$, 거리의 조건 (ii)에 의해 $f(x) = g(x)$이다. $f$와 $g$는 정의역이 $X$로 같으므로 [[function]]의 함수의 같음에 의해 $f = g$이다. $X = \emptyset$이면 "모든 $x \in X$에서 $f(x) = g(x)$"는 따질 점이 없어 성립하므로 같은 결론이다.
- (iii) 거리의 조건 (iii)에 의해 모든 $x$에서 $\delta_{f,g}(x) = \delta_{g,f}(x)$이므로 $\delta_{f,g}(X) = \delta_{g,f}(X)$이고, 상한이 같다. $X = \emptyset$이면 둘 다 $0$이다.
- (iv) $x \in X$이면 거리의 조건 (iv), (2)의 (i), 순서 (2)의 (iii)에 의해
  $$
  \begin{aligned}
  &d_Y(f(x), h(x)) \\
  &\quad \le d_Y(f(x), g(x)) \\
  &\qquad + d_Y(g(x), h(x)) \\
  &\quad \le d_\infty(f, g) + d_\infty(g, h)
  \end{aligned}
  $$
  이다. 오른쪽의 $c = d_\infty(f, g) + d_\infty(g, h)$는 (i)과 순서 (2)의 (iii)에 의해 $0 \le c$이므로, (2)의 (ii)에 의해 $d_\infty(f, h) \le c$이다.

**(4).** (i) $f$가 유계이면 유계 (2)에 의해 $f(X) \subseteq [-r, r]$인 양의 실수 $r$가 있다. $x \in X$이면 $f(x) \in f(X)$이므로 $-r \le f(x) \le r$이고 절댓값 (7)에 의해 $|f(x)| \le r$이다. 거꾸로 모든 $x$에서 $|f(x)| \le B$이면 절댓값 (7)에 의해 $-B \le f(x) \le B$이므로, [[image-and-preimage]]의 (1)에 의해 $B$는 $f(X)$의 상계이고 $-B$는 하계이다. 곧 $f(X)$는 [[upper-bound-and-supremum]]의 뜻으로 유계이고, 유계 (2)에 의해 $(\mathbb{R}, d_Y)$에서 유계이다.

(ii) [[bounded-function|함수의 유계]]의 정의에서 $f : S \to \mathbb{R}$가 유계인 것은 정확히 모든 $x \in S$에서 $|f(x)| \le B$인 실수 $B$가 있을 때이므로, (i)과 같은 조건이다.

(iii) [[metric-space-examples]]의 (1)에 의해 $d_Y(f(x), g(x)) = |f(x) - g(x)|$이므로 $\delta_{f,g}(X) = \{|f(x) - g(x)| : x \in X\}$이다.

**(5).** $\operatorname{Bd}(X, Y)$는 $X$에서 $Y$로의 사상 전체의 집합의 부분집합이므로, [[function]]의 "공역은 선언하기 나름이다"에 의해 함수 $\mathbb{N} \to \operatorname{Bd}(X, Y)$는 그 집합으로의 함수, 곧 사상의 열이기도 하다. [[convergence-in-metric-spaces]]의 (1)에 의해 $(f_n)$이 $(\operatorname{Bd}(X, Y), d_\infty)$에서 $f$로 수렴하는 것은 정확히 모든 양의 실수 $\varepsilon$에 대하여 자연수 $M$이 있어 $n \ge M$이면 $d_\infty(f_n, f) < \varepsilon$일 때이다.

$d_\infty$로 수렴한다고 하자. 양의 실수 $\varepsilon$에 대한 그 $M$을 잡으면, $n \ge M$과 $x \in X$에서 (2)의 (i)과 순서 (1)의 (v)에 의해 $d_Y(f_n(x), f(x)) \le d_\infty(f_n, f) < \varepsilon$이다. 따라서 $N = M$이 고른 수렴의 정의의 조건을 만족한다.

거꾸로 $(f_n)$이 $f$로 고르게 수렴한다고 하자. 양의 실수 $\varepsilon$을 잡으면 순서 (8)에 의해 $0 < \varepsilon \cdot 2^{-1} < \varepsilon$이다. 고른 수렴의 정의에 의해 자연수 $N$이 있어 $n \ge N$과 모든 $x \in X$에서 $d_Y(f_n(x), f(x)) < \varepsilon \cdot 2^{-1}$이다. (2)의 (ii)에서 $c = \varepsilon \cdot 2^{-1}$로 두면 $n \ge N$에서 $d_\infty(f_n, f) \le \varepsilon \cdot 2^{-1} < \varepsilon$이다. 따라서 $M = N$으로 두면 $d_\infty$로 $f$로 수렴한다.

**(6).** (5)의 증명에서 $d_\infty(f_n, f)$를 $d_\infty(f_m, f_k)$로, 고른 수렴의 정의를 [[uniformly-cauchy-sequence-of-maps|고르게 코시]]의 정의로, [[convergence-in-metric-spaces]]의 (1)을 [[cauchy-sequence-in-metric-space]]의 코시 수열의 정의로 바꾸면 된다. 곧 $d_\infty$로 코시이면 $m, k \ge M$과 $x \in X$에서 $d_Y(f_m(x), f_k(x)) \le d_\infty(f_m, f_k) < \varepsilon$이고, 고르게 코시이면 $\varepsilon \cdot 2^{-1}$에 대한 $N$과 (2)의 (ii)로 $m, k \ge N$에서 $d_\infty(f_m, f_k) \le \varepsilon \cdot 2^{-1} < \varepsilon$이다.

**(7).** $X = \emptyset$이면 모든 사상의 상이 공집합이므로 모든 사상이 유계이고, (ii)는 $N = 1$로 성립한다. $X \ne \emptyset$이라 하고 점 $x_0$을 잡는다. 순서 (5)의 (ii)에 의해 $0 < 1$이므로 고른 수렴의 정의에 의해 자연수 $N$이 있어 $n \ge N$과 모든 $x \in X$에서 $d_Y(f_n(x), k(x)) < 1$이다.

(i) $f_N$은 유계이므로 유계 (1)의 (ii)에 의해 $f_N(X) \subseteq B(f_N(x_0), r)$인 양의 실수 $r$가 있다. $x \in X$이면 거리의 조건 (iii), (iv)와 순서 (2)의 (iv)에 의해
$$
\begin{aligned}
&d_Y(f_N(x_0), k(x)) \\
&\quad \le d_Y(f_N(x_0), f_N(x)) \\
&\qquad + d_Y(f_N(x), k(x)) \\
&\quad < r + 1
\end{aligned}
$$
이므로 $k(X) \subseteq B(f_N(x_0), r + 1)$이고, $0 < r + 1$이므로 $k$는 유계이다.

(ii) $k$는 유계이므로 유계 (1)의 (ii)에 의해 $k(X) \subseteq B(k(x_0), r)$인 양의 실수 $r$가 있다. $n \ge N$과 $x \in X$에서 같은 방법으로 $d_Y(k(x_0), f_n(x)) \le d_Y(k(x_0), k(x)) + d_Y(k(x), f_n(x)) < r + 1$이므로 $f_n(X) \subseteq B(k(x_0), r + 1)$이고 $f_n$은 유계이다.

**(8).** $f \in \operatorname{Bd}(X, Y)$마다 $f(x)$는 $Y$의 원소로 정해져 있으므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $\operatorname{ev}_x$가 있다. (2)의 (i)에 의해 $d_Y(\operatorname{ev}_x(f), \operatorname{ev}_x(g)) = d_Y(f(x), g(x)) \le d_\infty(f, g) = 1 \cdot d_\infty(f, g)$이고 순서 (5)의 (ii)에 의해 $0 \le 1$이므로 $\operatorname{ev}_x$는 $1$-립시츠이다. [[lipschitz-map]]의 (3)에 의해 연속이다.

**(9).** [[recursion-theorem|재귀 정리]]의 (1)에 의해 $\{(x, y) : x \in X\}$는 $X$에서 $Y$로의 사상이고 모든 $x$에서 값이 $y$이다.

(i) $X = \emptyset$이면 $\kappa_y(X) = \emptyset$이므로 유계이다. $X \ne \emptyset$이면 $\kappa_y(X) = \{y\}$이고, [[open-ball]]의 (1)에 의해 $y \in B(y, 1)$이므로 $\kappa_y(X) \subseteq B(y, 1)$이다.

(ii) $X$의 점 $x_0$을 잡는다. 모든 $x$에서 $d_Y(\kappa_y(x), \kappa_z(x)) = d_Y(y, z)$이고 거리의 조건 (i)에 의해 $0 \le d_Y(y, z)$이므로 (2)의 (ii)에 의해 $d_\infty(\kappa_y, \kappa_z) \le d_Y(y, z)$이다. (2)의 (i)을 $x_0$에서 쓰면 $d_Y(y, z) \le d_\infty(\kappa_y, \kappa_z)$이다. 순서 (1)의 (ii)에 의해 두 수는 같다. $\kappa_y = \kappa_z$이면 $d_Y(y, z) = d_\infty(\kappa_y, \kappa_z) = 0$이고 거리의 조건 (ii)에 의해 $y = z$이므로 단사이다.

**(10).** (i) [[function]]의 두 조건은 정의역 $\emptyset$에서 따질 원소가 없어 $\emptyset$에 대해 성립하고, $\emptyset \times Y = \emptyset$의 부분집합은 $\emptyset$뿐이므로 $X$에서 $Y$로의 사상은 $\emptyset$ 하나뿐이다. 그 상은 $\emptyset$이므로 유계이다. (3)에 의해 $\{\emptyset\}$ 위의 $d_\infty$는 거리이다.

(ii) $X$의 점 $x$에서 [[function]]의 조건 (존재)가 요구하는 $Y$의 원소가 없으므로 사상이 없다. [[metric-space]]의 공집합 단락에 의해 $(\emptyset, \emptyset)$은 거리공간이다.

(iii) $f(X) = \{f(p)\} \subseteq B(f(p), 1)$이므로 모든 사상이 유계이다. $f$와 $\kappa_{f(p)}$는 정의역 $\{p\}$의 유일한 점에서 값이 같으므로 함수의 같음에 의해 $f = \kappa_{f(p)}$이다. (9)의 (ii)에 의해 $d_\infty(f, g) = d_\infty(\kappa_{f(p)}, \kappa_{g(p)}) = d_Y(f(p), g(p))$이다. $\operatorname{ev}_p(\kappa_y) = y$이고 $\kappa_{\operatorname{ev}_p(f)} = \kappa_{f(p)} = f$이므로 두 사상은 서로의 역함수이고, 따라서 $\operatorname{ev}_p$는 전단사이다.

(iv) $X = \emptyset$이면 (i)에 의해 사상은 하나뿐이고 $d_\infty(\emptyset, \emptyset) = 0$이다. $X \ne \emptyset$이면 $Y$에도 점 $y$가 있고, [[open-ball]]의 (6)에 의해 $B(y, 2) = Y$이므로 모든 사상의 상은 $B(y, 2)$에 들어 유계이다. 모든 $x$에서 $d_Y(f(x), g(x)) \le 1$이므로 (2)의 (ii)에 의해 $d_\infty(f, g) \le 1$이다. $f = g$이면 (3)에 의해 $d_\infty(f, g) = 0$이다. $f \ne g$이면 함수의 같음에 의해 $f(x_1) \ne g(x_1)$인 $x_1$이 있고, (2)의 (i)에 의해 $1 = d_Y(f(x_1), g(x_1)) \le d_\infty(f, g)$이므로 $d_\infty(f, g) = 1$이다.

(v) (4)의 (i)에 의해, 모든 실수 $x$에서 $|x| \le B$인 실수 $B$가 없음을 보이면 된다. 실수 $B$를 아무렇게나 잡고 $x = |B| + 1$로 두자. 절댓값 (2)에 의해 $0 \le |B|$이고 순서 (5)의 (ii)에 의해 $0 < 1$이므로 순서 (2)의 (iv)에 의해 $0 < x$이다. 절댓값 (1)에 의해 $|x| = |B| + 1$이고, 순서 (2)의 (ii)에 의해 $|B| < |B| + 1$이며, 절댓값 (6)에 의해 $|B| \ge B$이므로 $|x| > B$이다. 따라서 그런 $B$는 없고 $i_{\mathbb{R}}$은 유계가 아니다.
:::

## 예시와 반례

:::example[상한이 어느 점에서의 차이와도 같지 않은 예]
$X$를 열린구간 $(0, 1)$, $Y = \mathbb{R}$(보통 거리)로 두고, $f(x) = x$인 사상 $f : X \to \mathbb{R}$와 값이 $0$인 상수 사상 $\kappa_0$을 봅시다. 모든 $x \in X$에서 $|f(x)| = x < 1$이고([[absolute-value]]의 (1)), $|\kappa_0(x)| = 0$이므로 (4)의 (i)에 의해 둘 다 유계입니다. (4)의 (iii)에 의해 $d_\infty(f, \kappa_0) = \sup\{x : 0 < x < 1\}$입니다.

이 값은 $1$입니다. 모든 $x$에서 $|f(x) - 0| \le 1$이므로 (2)의 (ii)에 의해 $d_\infty(f, \kappa_0) \le 1$입니다. $t = d_\infty(f, \kappa_0)$가 $t < 1$이라고 해 봅시다. (1)에 의해 $0 \le t$이고, [[order-properties-of-reals]]의 (8)에 의해 $x_1 = (t + 1) \cdot 2^{-1}$은 $t < x_1 < 1$을 만족하므로 $0 < x_1 < 1$, 곧 $x_1 \in X$입니다. 그런데 (2)의 (i)에 의해 $x_1 = |f(x_1) - 0| \le t$이어서 $t < x_1$과 맞지 않습니다([[order-properties-of-reals]]의 (1)의 (i)). 따라서 $t = 1$입니다([[order-properties-of-reals]]의 (1)의 (iii), (ii)). 그러나 모든 $x \in X$에서 $|f(x) - 0| = x < 1$이므로, 차이가 $1$이 되는 점은 없습니다.
:::

:::counterexample[유계인 사상들의 점별 극한이 유계가 아닌 예]
$X = \mathbb{N}$(집합), $Y = \mathbb{R}$(보통 거리)로 두고, $n$번째 사상이 자연수 $k$를 $\min\{k, n\}$([[absolute-value]]의 두 수의 최소)으로 보내는 사상의 열 $(f_n)$을 봅시다([[pointwise-convergence|사상의 열과 점별 수렴]]의 (1)). [[absolute-value]]의 (10)에 의해 $\min\{k, n\}$은 $k$이거나 $n$이고 $\min\{k, n\} \le n$이며, $k$와 $n$이 자연수이므로 $0 < \min\{k, n\}$입니다. 그래서 $|f_n(k)| \le n$이고 (4)의 (i)에 의해 $f_n$은 모두 유계입니다.

자연수 $k$를 정하면 $n \ge k$인 모든 $n$에서 $\min\{k, n\} = k$이므로([[absolute-value]]의 $\min$의 정의), 값의 수열 $(f_n(k))$는 $k$번째 항부터 $k$와 같고 [[convergence-in-metric-spaces]]의 (1)에 의해 $k$로 수렴합니다. 따라서 $(f_n)$은 $k$를 $k$로 보내는 사상 $f$로 점별 수렴합니다. 그런데 $f$는 유계가 아닙니다. 실수 $B$가 있어 모든 자연수 $k$에서 $|f(k)| \le B$라고 하면, $0 < k$이므로 [[absolute-value]]의 (1)에 의해 $|f(k)| = k$이고, $B$는 $\mathbb{N}$의 상계가 되어 [[archimedean-property|아르키메데스 성질]]의 (1)과 맞지 않습니다. 그래서 (4)의 (i)에 의해 $f$는 유계가 아닙니다. 그래서 (7)의 (i)에서 "고르게 수렴"을 "점별 수렴"으로 바꾸면 결론이 성립하지 않을 수 있습니다. (7)에 의해 이 열은 어떤 사상으로도 고르게 수렴하지 않습니다. 고르게 수렴했다면 그 극한은 [[uniform-convergence|고른 수렴]]의 (2)에 의해 점별 극한 $f$이고, (7)의 (i)에 의해 유계여야 하기 때문입니다.
:::

## 확인 질문

:::check[$X = \{1, 2\}$, $Y = \mathbb{R}$이고 $f(1) = 0$, $f(2) = 3$, $g(1) = 1$, $g(2) = 1$이면 $d_\infty(f, g)$는 얼마인가?]
$2$입니다. 두 점에서의 차이는 $|0 - 1| = 1$과 $|3 - 1| = 2$이므로 $\delta_{f,g}(X) = \{1, 2\}$입니다. $2$는 이 집합의 최댓값이므로 [[upper-bound-and-supremum]]의 (2)에 의해 상한이고, (4)의 (iii)에 의해 $d_\infty(f, g) = 2$입니다. 두 사상이 유계라는 것은 $|f(x)| \le 3$, $|g(x)| \le 3$에서 (4)의 (i)로 나옵니다.
:::

:::check[$X \ne \emptyset$이면 $Y$의 서로 다른 두 점 $y$, $z$에 대하여 상수 사상 $\kappa_y$와 $\kappa_z$는 다른가? $X = \emptyset$이면 어떤가?]
$X \ne \emptyset$이면 다릅니다. (9)의 (ii)에 의해 $d_\infty(\kappa_y, \kappa_z) = d_Y(y, z)$이고 [[metric-space]]의 (1)에 의해 이것은 양수이므로, $d_\infty$가 거리라는 (3)과 거리의 조건 (ii)에 의해 $\kappa_y \ne \kappa_z$입니다. $X = \emptyset$이면 (10)의 (i)에 의해 $X$에서 $Y$로의 사상은 $\emptyset$ 하나뿐이므로 $\kappa_y = \kappa_z = \emptyset$입니다. 그래서 (9)의 (ii)에 $X \ne \emptyset$이 붙어 있습니다.
:::
