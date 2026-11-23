---
title: 거리공간 사이의 고르게 연속인 사상
title_en: Uniformly Continuous Maps between Metric Spaces
aliases: [고른 연속 사상, 거리공간의 고른 연속, 고르게 연속인 사상, uniformly continuous map, uniform continuity in metric spaces]
kind: definition
field: topology
msc: ["54E35", "54C05"]
level: undergrad
summary: 거리공간 사이의 사상 f 가 고르게 연속이라는 것은 모든 ε > 0 에 대해 점에 상관없는 δ > 0 이 있어 정의역의 두 점의 거리가 δ 미만이면 상의 거리가 ε 미만이라는 것이다. 그 부정을 적고, 고르게 연속이면 연속이며, 실수의 부분집합 위의 실함수에서는 해석학 입문의 고른 연속과 같고, 합성·제한·공역 바꾸기에서 유지되며, 이산 거리에서 나가는 사상은 모두 고르게 연속임을 보인다.
requires: [set, subset, function, quantifiers, negation-of-quantified-statements, negation-of-conditional, logical-connectives, conditional-statement, function-composition, adding-or-removing-an-element, real-number-arithmetic, order-properties-of-reals, absolute-value, prime-number, well-ordering-principle, archimedean-property, metric-space, metric-space-examples, topology-examples, continuous-map, continuity-in-metric-spaces, continuity-agrees-with-analysis, standard-topology-on-reals, real-valued-function, continuous-function, continuity-of-sum-and-product, uniform-continuity]
sources:
  - ref: lebl-basic-analysis
    loc: "7.5.4절 Uniform continuity, Definition 7.5.10 과 그 뒤 문장 (p.291); 3.4.1절 Definition 3.4.1, Example 3.4.3 (p.138); 3.4.4절 연습문제 3.4.1 (p.143); 3.2.4절 연습문제 3.2.12 (p.128); 1.2.2절 Corollary 1.2.5 (p.32); 3.1.1절 Definition 3.1.1 뒤의 예 (i) (p.113); 7.4.3절 연습문제 7.4.2 (p.285)"
    checked: original
    note: "정의는 출처 Definition 7.5.10(p.291)과 같다. 출처는 정의 바로 뒤에서 고르게 연속인 함수는 연속이지만 거꾸로는 꼭 그렇지 않다고 'as we have seen' 이라고만 적고 증명하지 않는다. 이 항목은 앞부분을 (2)로 증명했다. 출처는 3장의 Definition 3.4.1(p.138, 실함수)과 7장의 Definition 7.5.10 에서 같은 이름 'uniformly continuous' 를 쓰고, 이 항목의 (3)은 이 사이트의 두 정의가 같은 함수를 고른다는 것을 증명한 것이다. (5)의 제한은 출처 연습문제 3.4.1(p.143)의 실함수판과 같은 진술을 거리공간으로 옮긴 것이다. 반례 '점 1/n 들 위의 x⁻¹'의 함수는 출처 Example 3.4.3(p.138, (0, 1) 위의 1/x 는 고르게 연속이 아니다)과 같은 함수를 집합 {1/n : n ∈ ℕ} 로 제한한 것이고, 이 집합은 출처가 Corollary 1.2.5(p.32, 하한이 0 이다), 3.1.1절 Definition 3.1.1 뒤의 예 (i)(p.113, 집적점은 0 하나뿐이다), 연습문제 7.4.2(p.285, 콤팩트가 아니다)에서 쓰는 집합과 같다. 예시 '자연수 집합에서 나가는 사상'은 출처 연습문제 3.2.12(p.128, 함수 f : ℤ → ℝ 는 연속임을 보여라)와 같은 종류의 정의역(정수의 집합의 부분집합)에서 나가는 함수를 다룬다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 출처 메모의 넘겨짚은 해석 3건과 틀린 소절 1건, 경계 경우에서 흐리던 설명 문장 4건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
거리공간과 그 예(부분공간 거리, $\mathbb{R}$의 보통 거리, 이산 거리)는 [[metric-space]], [[metric-space-examples]]의 것이다. 거리공간에는 늘 거리위상([[topology-examples]])을 주고, 연속은 [[continuous-map|위상공간 사이의 연속함수]]의 것이다. 실함수와 그 고른 연속은 해석학 입문의 [[real-valued-function]], [[uniform-continuity|고른 연속]]의 것이다. 합성 $g \circ f$는 [[function-composition]]의 것이고, 제한 $f|_A$는 [[adding-or-removing-an-element]]의 것이다. 거리공간 사이의 함수를 **사상**(map)이라고도 부른다. 아래에서 $(X, d_X)$, $(Y, d_Y)$, $(Z, d_Z)$는 거리공간이다.

**고른 연속.** 사상 $f : X \to Y$가 **고르게 연속**(uniformly continuous)이라는 것은 정확히, 모든 실수 $\varepsilon > 0$에 대하여 실수 $\delta > 0$이 있어, $p \in X$, $q \in X$이고 $d_X(p, q) < \delta$인 모든 $p$, $q$에서 $d_Y(f(p), f(q)) < \varepsilon$일 때이다. [[quantifiers|한정 기호]]로 쓰면
$$
\begin{aligned}
&\forall \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \Rightarrow{} \\
&\quad \exists \delta \in \mathbb{R},\ \bigl(\delta > 0 \land{} \\
&\quad \forall p \in X,\ \forall q \in X,\ \\
&\quad (d_X(p, q) < \delta \Rightarrow{} \\
&\quad\ d_Y(f(p), f(q)) < \varepsilon)\bigr)\Bigr)
\end{aligned}
$$
가 참일 때이다. 이런 사상을 **고르게 연속인 사상**이라 한다. $\delta$는 $\varepsilon$에만 따라 정해지고 $X$의 모든 점에서 함께 쓰인다.

다음이 성립한다.

1. (고르게 연속이 아니라는 것) $f : X \to Y$가 고르게 연속이 아닌 것은 정확히
   $$
   \begin{aligned}
   &\exists \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \land{} \\
   &\quad \forall \delta \in \mathbb{R},\ \bigl(\delta > 0 \Rightarrow{} \\
   &\quad \exists p \in X,\ \exists q \in X,\ \\
   &\quad (d_X(p, q) < \delta \land{} \\
   &\quad\ d_Y(f(p), f(q)) \ge \varepsilon)\bigr)\Bigr)
   \end{aligned}
   $$
   가 참일 때이다.
2. (연속) $f : X \to Y$가 고르게 연속이면 $f$는 연속이다.
3. (해석학 입문의 고른 연속과 같다) $S \subseteq \mathbb{R}$에 보통 거리의 부분공간 거리 $d_S$를 주고 $f : S \to \mathbb{R}$가 실함수라 하자. $\mathbb{R}$에 보통 거리를 줄 때 사상 $f : (S, d_S) \to \mathbb{R}$가 이 항목의 뜻으로 고르게 연속인 것은 정확히 실함수 $f$가 [[uniform-continuity|고른 연속]]의 뜻으로 고르게 연속일 때이다.
4. (합성) $f : X \to Y$와 $g : Y \to Z$가 고르게 연속이면 $g \circ f : X \to Z$는 고르게 연속이다.
5. (제한) $A \subseteq X$에 부분공간 거리 $d_A$를 주자. $f : X \to Y$가 고르게 연속이면 $f|_A : A \to Y$는 고르게 연속이다.
6. (공역 바꾸기) $T \subseteq Y$에 부분공간 거리 $d_T$를 주고 $f : X \to T$가 함수라 하자. $T \subseteq Y$이므로 같은 집합 $f$는 $X$에서 $Y$로의 함수이기도 하다. $f : X \to T$가 고르게 연속인 것은 정확히 $f : X \to Y$가 고르게 연속일 때이다.
7. (상수 사상, 항등사상, 이산 거리) $y_0 \in Y$이고 모든 $x \in X$에서 $f(x) = y_0$인 사상 $f : X \to Y$와 항등사상 $i_X : X \to X$는 고르게 연속이다. $d_X$가 이산 거리이면 모든 사상 $f : X \to Y$는 고르게 연속이다.
:::

:::english
Metric spaces and their examples (subspace metrics, the standard metric on $\mathbb{R}$, discrete metrics) are as in the entries on metric spaces. Metric spaces always carry their metric topology, and continuity is that of the entry on continuous maps between topological spaces. Real-valued functions and their uniform continuity are those of the introductory analysis entries. The composite $g \circ f$ and the restriction $f|_A$ are as in the earlier entries. A function between metric spaces is also called a **map**. Throughout, $(X, d_X)$, $(Y, d_Y)$ and $(Z, d_Z)$ are metric spaces.

**Uniform continuity.** A map $f : X \to Y$ is **uniformly continuous** exactly when for every real number $\varepsilon > 0$ there is a real number $\delta > 0$ such that $d_Y(f(p), f(q)) < \varepsilon$ for all $p$, $q$ with $p \in X$, $q \in X$ and $d_X(p, q) < \delta$; in terms of quantifiers, when
$$
\begin{aligned}
&\forall \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \Rightarrow{} \\
&\quad \exists \delta \in \mathbb{R},\ \bigl(\delta > 0 \land{} \\
&\quad \forall p \in X,\ \forall q \in X,\ \\
&\quad (d_X(p, q) < \delta \Rightarrow{} \\
&\quad\ d_Y(f(p), f(q)) < \varepsilon)\bigr)\Bigr)
\end{aligned}
$$
is true. Such a map is called a **uniformly continuous map**. The number $\delta$ depends only on $\varepsilon$ and serves all points of $X$ at once.

The following hold.

1. (Not uniformly continuous) A map $f : X \to Y$ is not uniformly continuous exactly when
   $$
   \begin{aligned}
   &\exists \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \land{} \\
   &\quad \forall \delta \in \mathbb{R},\ \bigl(\delta > 0 \Rightarrow{} \\
   &\quad \exists p \in X,\ \exists q \in X,\ \\
   &\quad (d_X(p, q) < \delta \land{} \\
   &\quad\ d_Y(f(p), f(q)) \ge \varepsilon)\bigr)\Bigr)
   \end{aligned}
   $$
   is true.
2. (Continuity) If $f : X \to Y$ is uniformly continuous, then $f$ is continuous.
3. (Agreement with introductory analysis) Give $S \subseteq \mathbb{R}$ the subspace metric $d_S$ of the standard metric, and let $f : S \to \mathbb{R}$ be a real-valued function. Giving $\mathbb{R}$ the standard metric, the map $f : (S, d_S) \to \mathbb{R}$ is uniformly continuous in the sense of this entry exactly when the real-valued function $f$ is uniformly continuous in the sense of the introductory analysis entry.
4. (Composition) If $f : X \to Y$ and $g : Y \to Z$ are uniformly continuous, then $g \circ f : X \to Z$ is uniformly continuous.
5. (Restriction) Give $A \subseteq X$ the subspace metric $d_A$. If $f : X \to Y$ is uniformly continuous, then $f|_A : A \to Y$ is uniformly continuous.
6. (Changing the codomain) Give $T \subseteq Y$ the subspace metric $d_T$ and let $f : X \to T$ be a function. Since $T \subseteq Y$, the same set $f$ is also a function from $X$ to $Y$. The map $f : X \to T$ is uniformly continuous exactly when $f : X \to Y$ is uniformly continuous.
7. (Constant maps, identity maps, discrete metrics) If $y_0 \in Y$, the map $f : X \to Y$ with $f(x) = y_0$ for all $x \in X$ is uniformly continuous, and so is the identity map $i_X : X \to X$. If $d_X$ is the discrete metric, then every map $f : X \to Y$ is uniformly continuous.
:::

## 직관

[[continuity-in-metric-spaces|거리공간에서 연속과 ε–δ]]의 (2)에 따르면, 연속은 점 $x$마다 "$x$에서 $\delta$ 안이면 상이 $\varepsilon$ 안에 든다"는 $\delta$가 있다는 것이고, 그 $\delta$는 점마다 달라도 됩니다. 고른 연속은 $\varepsilon$ 하나에 $\delta$ 하나를 정해 두면 $X$의 어느 두 점에도 그 $\delta$가 통한다는 더 강한 약속입니다. 한정 기호로 보면 "$\forall p$"가 "$\exists \delta$"의 뒤로 옮겨진 것이고, 두 점 $p$, $q$는 같은 자격으로 움직입니다.

공장의 정밀도 기준에 비유할 수 있습니다. 제품의 오차를 $\varepsilon$ 안에 두려면 재료의 오차를 $\delta$ 안에 두라는 기준을 공장 전체에 하나만 붙여 둘 수 있으면 고른 연속이고, 작업대의 자리마다 기준이 따로 필요하면 연속일 뿐입니다. 비유에서 "작업대의 자리"가 점 $p$, "공장 전체에 하나"가 $\delta$가 $p$, $q$보다 먼저 정해진다는 것에 맞습니다.

거리공간의 말로 옮겨도 해석학 입문의 고른 연속과 뜻이 바뀌지 않습니다((3)). 다만 이제는 정의역과 공역의 거리를 바꿀 수 있습니다. (7)처럼 정의역에 이산 거리를 주면 서로 다른 두 점의 거리가 늘 $1$이어서 $\delta = 1$이 모든 $\varepsilon$에 통합니다. 아래 반례는 정의역의 점들이 서로 떨어져 있어도 점끼리의 간격이 한없이 좁아지면 고른 연속이 깨질 수 있음을 보입니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. "순서 성질 (1)의 (v)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이고, "거리의 (1)"은 [[metric-space]]의 (1)이다.

**1의 증명.** 정의의 명제를 바깥부터 부정한다. [[negation-of-quantified-statements]]의 1과 [[negation-of-conditional]]에 의해 "$\forall \varepsilon,\ (\varepsilon > 0 \Rightarrow C)$"의 부정은 "$\exists \varepsilon,\ (\varepsilon > 0 \land \lnot C)$"와 진릿값이 같다. $C$는 "$\exists \delta,\ (\delta > 0 \land B)$"이고, [[negation-of-quantified-statements]]의 2에 의해 $\lnot C$는 "$\forall \delta,\ \lnot(\delta > 0 \land B)$"와 같다. [[logical-connectives]]와 [[conditional-statement]]의 진리표에서 "$\lnot(P \land Q)$"와 "$P \Rightarrow \lnot Q$"는 둘 다 정확히 $P$, $Q$가 모두 참인 줄에서만 거짓이므로, 이것은 "$\forall \delta,\ (\delta > 0 \Rightarrow \lnot B)$"와 같다. $B$는 "$\forall p \in X,\ \forall q \in X,\ (d_X(p, q) < \delta \Rightarrow d_Y(f(p), f(q)) < \varepsilon)$"이다. [[negation-of-quantified-statements]]의 1을 $\forall p$에, 다시 $\forall q$에 쓰고 [[negation-of-conditional]]을 쓰면 $\lnot B$는 "$\exists p \in X,\ \exists q \in X,\ (d_X(p, q) < \delta \land \lnot(d_Y(f(p), f(q)) < \varepsilon))$"와 같고, 순서 성질 (1)의 (iii)에 의해 마지막 부정은 $d_Y(f(p), f(q)) \ge \varepsilon$이다. 한정 명제와 진리표로 만든 명제의 진릿값은 각 부분의 진릿값으로만 정해지므로([[quantifiers]], [[conditional-statement]], [[logical-connectives]]), 이 바꿈들을 이어 붙이면 (1)의 명제를 얻는다.

**2의 증명.** $f$가 고르게 연속이라 하고 $x \in X$와 실수 $\varepsilon > 0$을 잡는다. 고른 연속의 정의가 이 $\varepsilon$에 대해 주는 $\delta > 0$을 쓴다. $y \in X$이고 $d_X(x, y) < \delta$이면, 정의의 두 점으로 $p = x$, $q = y$를 쓰면 $d_Y(f(x), f(y)) < \varepsilon$이다. 곧 $x$에서 [[continuity-in-metric-spaces|거리공간에서 연속과 ε–δ]]의 (1)의 (c)가 성립한다. $x$는 $X$의 임의의 점이었으므로 그 항목의 (2)에 의해 $f$는 연속이다.

**3의 증명.** [[metric-space-examples]]의 (1)과 (3)에 의해 $x$, $c \in S$에서 $d_S(x, c) = |x - c|$이고, $\mathbb{R}$의 보통 거리 $d$에 대하여 $d(f(x), f(c)) = |f(x) - f(c)|$이다. 따라서 이 항목의 정의에서 $X = S$, $d_X = d_S$, $Y = \mathbb{R}$, $d_Y = d$로 두고 두 점의 이름 $p$, $q$를 $x$, $c$로 바꾸면 "모든 실수 $\varepsilon > 0$에 대하여 실수 $\delta > 0$이 있어, $x \in S$, $c \in S$이고 $|x - c| < \delta$인 모든 $x$, $c$에서 $|f(x) - f(c)| < \varepsilon$"이 된다. 이것은 [[uniform-continuity|고른 연속]]의 정의의 조건과 글자 그대로 같은 명제이므로, 한쪽이 참인 것은 정확히 다른 쪽이 참일 때이다.

**4의 증명.** 실수 $\varepsilon > 0$을 잡는다. $g$의 고른 연속에 의해 $\eta > 0$이 있어 $u$, $v \in Y$이고 $d_Y(u, v) < \eta$이면 $d_Z(g(u), g(v)) < \varepsilon$이다. $f$의 고른 연속을 이 $\eta$에 쓰면 $\delta > 0$이 있어 $p$, $q \in X$이고 $d_X(p, q) < \delta$이면 $d_Y(f(p), f(q)) < \eta$이다. 그런 $p$, $q$에서 $u = f(p)$, $v = f(q)$는 $Y$의 점이므로 $d_Z(g(f(p)), g(f(q))) < \varepsilon$이고, [[function-composition]]에 의해 $(g \circ f)(p) = g(f(p))$, $(g \circ f)(q) = g(f(q))$이다. 따라서 $d_Z((g \circ f)(p), (g \circ f)(q)) < \varepsilon$이다.

**5의 증명.** [[metric-space-examples]]의 (3)에 의해 $(A, d_A)$는 거리공간이고 $p$, $q \in A$에서 $d_A(p, q) = d_X(p, q)$이다. [[adding-or-removing-an-element]]의 함수의 제한에 의해 $f|_A$는 $A$에서 $Y$로의 함수이고 $p \in A$에서 $f|_A(p) = f(p)$이다. 실수 $\varepsilon > 0$에 대하여 $f$의 고른 연속이 주는 $\delta$를 쓴다. $p$, $q \in A$이고 $d_A(p, q) < \delta$이면 $p$, $q \in X$이고 $d_X(p, q) = d_A(p, q) < \delta$이므로 $d_Y(f|_A(p), f|_A(q)) = d_Y(f(p), f(q)) < \varepsilon$이다.

**6의 증명.** [[function]]의 진술에 의해 같은 집합 $f$는 $X$에서 $Y$로의 함수이고 값도 같다. $p$, $q \in X$이면 $f(p)$, $f(q) \in T$이므로 [[metric-space-examples]]의 (3)에 의해 $d_T(f(p), f(q)) = d_Y(f(p), f(q))$이다. 따라서 두 사상의 고른 연속의 정의는 모든 $\varepsilon$, $\delta$, $p$, $q$에서 같은 부등식을 요구하고, 한쪽이 고르게 연속인 것은 정확히 다른 쪽이 고르게 연속일 때이다.

**7의 증명.** *상수 사상.* 실수 $\varepsilon > 0$에 대하여 $\delta = 1$로 둔다. 순서 성질 (5)의 (ii)에 의해 $0 < 1$이다. 모든 $p$, $q \in X$에서 거리의 (1)에 의해 $d_Y(f(p), f(q)) = d_Y(y_0, y_0) = 0 < \varepsilon$이다.

*항등사상.* 실수 $\varepsilon > 0$에 대하여 $\delta = \varepsilon$으로 둔다. $p$, $q \in X$이고 $d_X(p, q) < \varepsilon$이면 $d_X(i_X(p), i_X(q)) = d_X(p, q) < \varepsilon$이다.

*이산 거리.* 실수 $\varepsilon > 0$에 대하여 $\delta = 1$로 둔다. $p$, $q \in X$이고 $d_X(p, q) < 1$이라 하자. $p \ne q$이면 이산 거리의 정의([[metric-space-examples]]의 (2))에 의해 $d_X(p, q) = 1$이 되어, 순서 성질 (1)의 (i)에 의해 $1 < 1$은 성립하지 않으므로 어긋난다. 따라서 $p = q$이고, 거리의 (1)에 의해 $d_Y(f(p), f(q)) = d_Y(f(p), f(p)) = 0 < \varepsilon$이다. $\blacksquare$
:::

## 예시와 반례

:::example[자연수 집합에서 나가는 사상]
$\mathbb{N} \subseteq \mathbb{R}$에 보통 거리의 부분공간 거리 $d_{\mathbb{N}}$을 주면, 거리공간 $(Y, d_Y)$로 가는 모든 사상 $f : \mathbb{N} \to Y$는 고르게 연속입니다. $d_{\mathbb{N}}$은 이산 거리가 아니지만($d_{\mathbb{N}}(1, 3) = 2$) $\delta = 1$이 모든 $\varepsilon$에 통합니다.

$m$, $n \in \mathbb{N}$이고 $d_{\mathbb{N}}(m, n) = |m - n| < 1$이면 $m = n$임을 보입니다([[metric-space-examples]]의 (1), (3)). $m \ne n$이라 해 봅시다. [[well-ordering-principle]]의 (Z5)에 의해 $m < n$이거나 $n < m$이므로, 둘 가운데 작은 것을 $k$, 큰 것을 $l$이라 하면 $k < l$입니다. [[prime-number]]의 (Z1)에 의해 $k + 1 \le l$이고 (Z7)에 의해 $1 \le l - k$이며, [[order-properties-of-reals]]의 (10)에 의해 이것은 실수의 부등식으로도 성립합니다. 그러면 $0 < 1 \le l - k$이므로 [[absolute-value]]의 (1)과 (3)에 의해 $|m - n| = |l - k| = l - k \ge 1$이고, 순서 성질 (1)의 (i)에 의해 $|m - n| < 1$과 함께 성립할 수 없습니다. 따라서 $m = n$입니다.

이제 실수 $\varepsilon > 0$에 대하여 $\delta = 1$로 두면, $d_{\mathbb{N}}(m, n) < 1$일 때 $m = n$이므로 [[metric-space]]의 (1)에 의해 $d_Y(f(m), f(n)) = 0 < \varepsilon$입니다.
:::

:::counterexample[점 $1/n$ 들 위의 $x^{-1}$]
$A = \{x \in \mathbb{R} : x = n^{-1}\text{인 자연수 } n\text{이 있다}\}$에 보통 거리의 부분공간 거리 $d_A$를 주고, $f(x) = x^{-1}$로 정한 $f : A \to \mathbb{R}$를 봅니다($\mathbb{R}$에는 보통 거리). $f$는 연속이지만 고르게 연속이 아닙니다. 아래에서 "순서 성질"은 [[order-properties-of-reals]]의 번호입니다.

*연속.* $P = \{x \in \mathbb{R} : 0 < x\}$라 합시다. 자연수 $n$은 양의 정수이므로 순서 성질 (10)에 의해 실수로서 $0 < n$이고, 순서 성질 (6)의 (i)에 의해 $0 < n^{-1}$이므로 $A \subseteq P$입니다. $P$ 위의 항등함수는 [[continuous-function]]의 (4)에 의해 연속함수이고 $P$의 모든 점에서 $0$이 아니므로, [[continuity-of-sum-and-product|연속함수의 합·곱·몫]]의 (3)에 의해 $x$에서의 값이 $x^{-1}$인 $P$ 위의 함수는 연속함수입니다([[real-valued-function]]의 (3), (5)). [[continuous-function]]의 (5)에 의해 그 함수의 $A$로의 제한은 연속함수이고, [[real-valued-function]]의 (6)과 (2)에 의해 그 제한은 $f$와 같은 함수입니다. [[continuity-agrees-with-analysis|해석학 입문의 연속과 같다]]의 (2)를 $S = A$, $T = \mathbb{R}$로 쓰면($\mathbb{R}$의 부분공간 거리 $d_{\mathbb{R}}$은 보통 거리 자신이다. 같은 항목의 (3)) $f : (A, d_A) \to \mathbb{R}$는 연속입니다.

*고르게 연속이 아니다.* (1)의 꼴을 $\varepsilon = 1$로 보입니다. 실수 $\delta > 0$을 아무것이나 잡습니다. [[archimedean-property]]의 (3)에 의해 $n^{-1} < \delta$인 자연수 $n$이 있습니다. $p = n^{-1}$, $q = (n + 1)^{-1}$로 두면 $n + 1$도 자연수이므로 $p$, $q \in A$입니다. $0 < n < n + 1$이므로 순서 성질 (6)의 (ii)에 의해 $0 < q < p$이고, 순서 성질 (3)의 (i)과 [[absolute-value]]의 (1)에 의해 $d_A(p, q) = |p - q| = p - q$입니다. $0 < q$이므로 순서 성질 (3)의 (ii)와 (2)의 (ii)에 의해 $p - q < p$이고, $p < \delta$와 순서 성질 (1)의 (v)에 의해 $d_A(p, q) < \delta$입니다. 한편 (K8)의 (iii)에 의해 $n^{-1}$의 역수는 $n$이므로 $f(p) = n$, $f(q) = n + 1$이고, $|f(p) - f(q)| = |-1| = 1 \ge 1$입니다([[absolute-value]]의 (3), (1)). 어떤 $\delta$를 잡아도 거리가 $\delta$ 미만인데 상의 거리가 $1$ 이상인 두 점이 있으므로, (1)에 의해 $f$는 고르게 연속이 아닙니다.

$A$의 서로 다른 두 점은 언제나 거리가 양수이지만, 이웃한 두 점 $n^{-1}$, $(n + 1)^{-1}$의 간격은 $n$이 커질수록 좁아지는데 상은 늘 $1$씩 벌어집니다.
:::

## 확인 질문

:::check[정의역 $X$가 공집합이거나 점이 하나뿐이면, 사상 $f : X \to Y$는 고르게 연속인가?]
그렇습니다. 실수 $\varepsilon > 0$에 대하여 $\delta = 1$로 둡니다([[order-properties-of-reals]]의 (5)의 (ii)에 의해 $0 < 1$). $X = \emptyset$이면 "모든 $p$, $q \in X$"에 대한 조건은 따질 점이 없어 참입니다([[quantifiers]]). $X = \{x_0\}$이면 두 점은 $p = q = x_0$뿐이므로 [[metric-space]]의 (1)에 의해 $d_Y(f(p), f(q)) = d_Y(f(x_0), f(x_0)) = 0 < \varepsilon$입니다.
:::

:::check[$f : X \to Y$가 고르게 연속일 때, 공역의 거리 $d_Y$를 $2d_Y$로 바꾸어도 $f$는 고르게 연속인가?]
그렇습니다. [[standard-topology-on-reals]]의 (3)에 의해 $2d_Y$도 $Y$ 위의 거리입니다. 실수 $\varepsilon > 0$이 주어지면 [[order-properties-of-reals]]의 (8)에 의해 $0 < \varepsilon/2$이므로, $f : (X, d_X) \to (Y, d_Y)$의 고른 연속을 $\varepsilon/2$에 써서 $\delta > 0$을 얻습니다. $d_X(p, q) < \delta$이면 $d_Y(f(p), f(q)) < \varepsilon/2$이고, 양변에 $2$를 곱하면([[order-properties-of-reals]]의 (10)의 $0 < 2$와 (4)의 (i)) $2d_Y(f(p), f(q)) < \varepsilon$입니다. 거리를 양수배하면 $\delta$를 고쳐 잡을 뿐 고른 연속은 바뀌지 않습니다.
:::
