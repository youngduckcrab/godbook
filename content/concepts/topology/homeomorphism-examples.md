---
title: 위상동형의 예
title_en: Examples of Homeomorphisms
aliases: [위상동형인 공간, 열린구간과 실수, homeomorphic spaces, open interval homeomorphic to the real line]
kind: proposition
field: topology
msc: ["54C05"]
level: undergrad
summary: 실수의 일차함수는 위상동형사상이고, 열린구간 (−1, 1) 과 ℝ 은 x 를 x/(1 − |x|) 로 보내는 함수로 위상동형이며, 모든 열린구간은 서로 위상동형이다. 원소가 유한한 두 이산공간은 원소의 개수가 같을 때만 위상동형이고, 아래끝 위상에서 보통 위상으로 가는 항등함수는 연속인 전단사이지만 위상동형사상이 아니다.
requires: [set, subset, function, function-composition, bijective-iff-inverse-is-a-function, number-of-elements-is-unique, real-number-arithmetic, order-properties-of-reals, absolute-value, interval, metric-space-examples, topology-examples, standard-topology-on-reals, comparing-topologies, lower-limit-topology, continuous-map, homeomorphism, continuity-agrees-with-analysis, real-valued-function, continuous-function, continuity-of-sum-and-product]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Homeomorphisms 절의 예, content/homeomorphisms.tex:3–8, 20, 22–28, 36–53; Topological invariants 절의 첫 문단, content/homeomorphisms.tex:63; ℝ 위의 위상을 비교하는 Lemma 와 그 증명, content/topological-spaces.tex:179–188"
    checked: original
    note: "(2)는 출처의 예 open-ball-homeomorphism(36–53)을 n = 1 로 둔 것과 같은 함수이다. 출처는 B(0, 1) ⊆ ℝⁿ 에서 f(x) = x/(1 − ‖x‖) 가 연속인 전단사이고 역함수가 x/(1 + ‖x‖) 라고 적고, 그림(images/homeointerval)으로 n = 1 의 그래프를 보인다. 출처는 계산과 연속의 근거를 적지 않는다. 출처는 그 앞의 예(22–28)에서 (−1, 1) 과 ℝ 이 위상동형이라는 같은 결론을 삼각함수로 보인다. (5)에서 쓰는 '아래끝 위상은 보통 위상보다 진짜로 더 섬세하다'는 출처 content/topological-spaces.tex:180–183 이 적는 것이다. 확인 질문 '이산위상의 {1, 2, 3} 과 밀착위상의 {4, 5, 6}' 은 출처 content/homeomorphisms.tex:63 이 X = {a, b} 에 이산위상과 밀착위상을 주면 위상동형이 아니라고 적는 것과 같은 종류의 결론을 세 점에서 묻는다. 두 집합 {1, 2, 3} 과 {4, 5, 6} 은 출처 절 첫머리의 예(content/homeomorphisms.tex:3–8, 20)의 두 집합과 같고, 출처는 거기서 두 집합에 서로 대응하는 위상을 주어 위상동형이라고 적는다. 반례 '원소의 개수가 같아도 위상동형이 아닐 수 있다' 의 두 위상은 출처의 예 two-point-topologies(content/topological-spaces.tex:18–28)의 𝒯₄ 와 𝒯₂ 이다."
  - ref: lebl-basic-analysis
    loc: "3.6.2절, Proposition 3.6.6 (p.152); 7.3절 연습문제 7.3.10 (p.278)"
    checked: original
    note: "출처 Proposition 3.6.6(p.152)은 구간 위의 순단조 함수의 역함수가 연속이라고 적는다. 이 항목은 (1)–(3)의 역함수를 식으로 적어 그 연속을 해석학 입문의 연산 항목으로 직접 보인다. (2)의 역함수 y/(1 + |y|) 는 출처 연습문제 7.3.10(p.278)이 확장된 실수 위의 거리를 정할 때 쓰는 식 x/(1 + |x|) 와 같은 함수이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 경계 경우에서 거짓이던 반례 제목과 단원 글 문장, 인용 번호를 고쳤다."
added: 2026-11-19
---

:::statement
위상동형사상과 $\simeq$는 [[homeomorphism|위상동형사상]]의 것이고, 연속은 [[continuous-map|위상공간 사이의 연속함수]]의 것이다. 열린구간의 기호 $(a, b)$는 [[interval]]의 것이다($a < b$일 때만 쓴다). $\mathbb{R}$에는 보통 위상을 주고, $\mathbb{R}$의 부분집합에는 보통 거리의 부분공간 거리([[metric-space-examples]]의 (3))와 그 거리위상을 준다. 실수의 계산과 순서는 [[real-number-arithmetic]], [[order-properties-of-reals]]의 것이고 절댓값은 [[absolute-value]]의 것이다.

1. (일차함수) $a$, $b$가 실수이고 $a \ne 0$이면, $f(x) = ax + b$로 정한 함수 $f : \mathbb{R} \to \mathbb{R}$는 위상동형사상이고, 그 역함수는 $g(y) = a^{-1}(y - b)$로 정한 함수 $g : \mathbb{R} \to \mathbb{R}$이다.
2. (열린구간 $(-1, 1)$과 $\mathbb{R}$) $I = (-1, 1)$이라 하자. $I$의 모든 점 $x$에서 $1 - |x| \ne 0$이고, $f(x) = x\,(1 - |x|)^{-1}$로 정한 함수 $f : I \to \mathbb{R}$는 위상동형사상이다. 그 역함수는 $g(y) = y\,(1 + |y|)^{-1}$로 정한 함수 $g : \mathbb{R} \to I$이다. 따라서 $I \simeq \mathbb{R}$이다.
3. (열린구간끼리) $a < b$이고 $J = (a, b)$이면, $\varphi(x) = (2x - a - b)(b - a)^{-1}$로 정한 함수 $\varphi : J \to I$는 위상동형사상이고, 그 역함수는 $\psi(y) = \bigl((b - a)y + a + b\bigr) \cdot 2^{-1}$로 정한 함수 $\psi : I \to J$이다. 따라서 모든 열린구간은 $\mathbb{R}$과 위상동형이고, 두 열린구간은 서로 위상동형이다.
4. (유한 이산공간) $X$와 $Y$가 유한집합이고 둘 다 이산위상을 주면, $X \simeq Y$인 것은 정확히 $|X| = |Y|$일 때이다(원소의 개수). 따라서 원소의 개수가 다른 두 유한 이산공간은 위상동형이 아니다.
5. (아래끝 위상) 항등함수 $i_{\mathbb{R}} : \mathbb{R}_l \to \mathbb{R}$는 연속인 전단사이지만 위상동형사상이 아니다. 그 역함수 $i_{\mathbb{R}} : \mathbb{R} \to \mathbb{R}_l$이 연속이 아니기 때문이다.
:::

:::english
Homeomorphisms and the symbol $\simeq$ are as in the entry on homeomorphisms, and continuity is as in the entry on continuous maps between topological spaces. The notation $(a, b)$ for open intervals is as before (used only when $a < b$). We give $\mathbb{R}$ the standard topology, and give subsets of $\mathbb{R}$ the subspace metric of the standard metric and its metric topology. Arithmetic, order and absolute value of real numbers are as in the earlier entries.

1. (Affine functions) If $a$ and $b$ are real numbers with $a \ne 0$, then the function $f : \mathbb{R} \to \mathbb{R}$ defined by $f(x) = ax + b$ is a homeomorphism, and its inverse function is $g : \mathbb{R} \to \mathbb{R}$ defined by $g(y) = a^{-1}(y - b)$.
2. (The open interval $(-1, 1)$ and $\mathbb{R}$) Let $I = (-1, 1)$. At every point $x$ of $I$ we have $1 - |x| \ne 0$, and the function $f : I \to \mathbb{R}$ defined by $f(x) = x\,(1 - |x|)^{-1}$ is a homeomorphism. Its inverse function is $g : \mathbb{R} \to I$ defined by $g(y) = y\,(1 + |y|)^{-1}$. Hence $I \simeq \mathbb{R}$.
3. (Open intervals) If $a < b$ and $J = (a, b)$, then the function $\varphi : J \to I$ defined by $\varphi(x) = (2x - a - b)(b - a)^{-1}$ is a homeomorphism, and its inverse function is $\psi : I \to J$ defined by $\psi(y) = \bigl((b - a)y + a + b\bigr) \cdot 2^{-1}$. Hence every open interval is homeomorphic to $\mathbb{R}$, and any two open intervals are homeomorphic.
4. (Finite discrete spaces) If $X$ and $Y$ are finite sets, both with the discrete topology, then $X \simeq Y$ exactly when $|X| = |Y|$ (number of elements). Hence two finite discrete spaces with different numbers of elements are not homeomorphic.
5. (Lower limit topology) The identity $i_{\mathbb{R}} : \mathbb{R}_l \to \mathbb{R}$ is a continuous bijection but not a homeomorphism, because its inverse function $i_{\mathbb{R}} : \mathbb{R} \to \mathbb{R}_l$ is not continuous.
:::

## 직관

(2)는 위상동형이 길이를 신경 쓰지 않는다는 것을 보여 줍니다. $(-1, 1)$은 길이가 2인 유계 집합이고 $\mathbb{R}$은 유계가 아니지만, $f$는 $(-1, 1)$의 양 끝으로 갈수록 점점 더 세게 늘여서 $\mathbb{R}$ 전체로 펼칩니다. $x$가 $1$에 가까우면 $1 - |x|$가 작아져서 $f(x)$가 커집니다. 열린집합만 보는 눈에는 이 늘임이 보이지 않으므로, 유계라는 성질은 위상동형으로 옮겨지지 않습니다.

(4)와 (5)는 반대 방향의 예입니다. 이산공간은 모든 부분집합이 열려 있어서 점의 개수 말고는 구별할 것이 없고, 그래서 유한 이산공간끼리는 위상동형인지가 원소의 개수만으로 정해집니다. (5)의 항등함수는 점을 그대로 짝짓지만 $\mathbb{R}_l$의 열린집합 $[0, 1)$을 보통 위상의 열린집합으로 옮기지 못합니다.

## 증명

:::idea
(1)–(3)은 모두 같은 틀입니다. 역함수 후보를 식으로 적고 두 합성이 항등함수임을 계산한 뒤, 두 함수가 해석학 입문의 뜻으로 연속임을 연산 항목으로 보이고 [[continuity-agrees-with-analysis|해석학 입문의 연속과 같다]]로 위상의 연속으로 옮깁니다. 그러면 [[homeomorphism|위상동형사상]]의 (5)가 끝을 냅니다.
:::

:::hint
(2)에서 $t = |x|$, $u = 1 - t$로 두면 $|f(x)| = t u^{-1}$이고 $1 + |f(x)| = u^{-1}$입니다.
:::

:::hint
(4)는 [[number-of-elements-is-unique]]의 (2)와 [[continuous-map]]의 (3)으로 끝납니다.
:::

:::proof
**틀.** $S$, $T$가 $\mathbb{R}$의 부분집합이고 함수 $f : S \to T$, $g : T \to S$가 $g \circ f = i_S$, $f \circ g = i_T$를 만족하며, $f$와 $g$가 각각 $S$ 위, $T$ 위의 실함수로서 [[continuous-function]]의 뜻의 연속함수라 하자. [[continuity-agrees-with-analysis]]의 (2)에 의해 $f : (S, d_S) \to (T, d_T)$와 $g : (T, d_T) \to (S, d_S)$는 위상의 뜻으로 연속이고, [[homeomorphism]]의 (5)에 의해 $f$는 위상동형사상이며 $g$는 그 역함수이다. $S$나 $T$가 $\mathbb{R}$이면 [[continuity-agrees-with-analysis]]의 (3)에 의해 $d_{\mathbb{R}}$은 보통 거리이고 그 거리위상은 보통 위상이다. 합성 $g \circ f = i_S$는 [[function-composition]]과 [[function]]의 함수의 같음에 의해 모든 $x \in S$에서 $g(f(x)) = x$인 것과 같다. 아래에서 이 틀을 쓴다. 함수를 식으로 정하는 것은 [[real-valued-function]]의 (1)이고, 상수함수와 항등함수가 연속함수라는 것은 [[continuous-function]]의 (4), 합·차·곱·상수배·절댓값·몫이 연속이라는 것은 [[continuity-of-sum-and-product|연속함수의 합·곱·몫]] 항목의 (3)이다. 실수의 계산은 [[real-number-arithmetic]]의 계산 법칙으로 하고 따로 적지 않는다.

**(1).** $a \ne 0$이므로 $a^{-1}$이 있다. 모든 실수 $x$에서 $f(x) = a\,i_{\mathbb{R}}(x) + b$이므로 $f$는 상수배 $a\,i_{\mathbb{R}}$와 값이 $b$인 상수함수의 합이고 연속함수이다. 같은 방식으로 $g(y) = a^{-1} y + (-a^{-1} b)$이므로 $g$도 연속함수이다. 계산하면 $g(f(x)) = a^{-1}(ax + b - b) = x$이고 $f(g(y)) = a \cdot a^{-1}(y - b) + b = y$이다. 틀에 의해 $f$는 위상동형사상이고 $g$는 그 역함수이다.

**(2).** [[interval]]의 정의에 의해 $x \in I$인 것은 정확히 $-1 < x < 1$일 때이고, [[absolute-value]]의 (7)에 의해 이것은 정확히 $|x| < 1$일 때이다.

$f$와 $g$가 함수임. $x \in I$이면 $|x| < 1$이므로 [[order-properties-of-reals]]의 (3)의 (i)에 의해 $0 < 1 - |x|$이고, 특히 $1 - |x| \ne 0$이다. $y \in \mathbb{R}$이면 [[absolute-value]]의 (2)에 의해 $0 \le |y|$이고 $0 < 1$([[order-properties-of-reals]]의 (5)의 (ii))이므로 [[order-properties-of-reals]]의 (2)의 (iv)에 의해 $0 < 1 + |y|$이다. 또 $|y| < 1 + |y|$([[order-properties-of-reals]]의 (2)의 (ii))이고, $v = 1 + |y|$라 하면 [[order-properties-of-reals]]의 (6)의 (i)에 의해 $0 < v^{-1}$이며 (6)의 (iv)에 의해 $|y| v^{-1} < v v^{-1} = 1$이다. [[absolute-value]]의 (4), (1)과 $0 < v^{-1}$에 의해 $|g(y)| = |y|\,|v^{-1}| = |y| v^{-1} < 1$이므로 $g(y) \in I$이다. 곧 $g$는 $\mathbb{R}$에서 $I$로의 함수이다.

$g(f(x)) = x$. $x \in I$이고 $t = |x|$, $u = 1 - t$라 하자. $0 < u$이므로 $0 < u^{-1}$이고 $|u^{-1}| = u^{-1}$이다. 따라서 $|f(x)| = |x|\,u^{-1} = t u^{-1}$이고, $1 + |f(x)| = (u + t) u^{-1} = u^{-1}$이다. 그러므로 $g(f(x)) = x u^{-1} (u^{-1})^{-1} = x u^{-1} u = x$이다.

$f(g(y)) = y$. $y \in \mathbb{R}$이고 $s = |y|$, $v = 1 + s$라 하자. 위에서처럼 $|g(y)| = s v^{-1}$이고 $1 - |g(y)| = (v - s) v^{-1} = v^{-1}$이다. 그러므로 $f(g(y)) = y v^{-1} (v^{-1})^{-1} = y$이다.

연속. $I$ 위에서 $h(x) = 1 - |x|$로 정한 $h$는 값이 $1$인 상수함수에서 항등함수 $i_I$의 절댓값 $|i_I|$를 뺀 것이므로 연속함수이고, $I$의 모든 점에서 $h(x) \ne 0$이다. 따라서 몫 $i_I / h$는 $I$ 전체 위의 연속함수이고, 모든 $x \in I$에서 $(i_I/h)(x) = x\,(1 - |x|)^{-1} = f(x)$이므로 [[real-valued-function]]의 (2)에 의해 $f = i_I / h$는 연속함수이다. 같은 방식으로 $k(y) = 1 + |y|$로 정한 $k$는 $\mathbb{R}$ 위의 연속함수이고 모든 점에서 $0$이 아니므로, $g = i_{\mathbb{R}}/k$는 $\mathbb{R}$ 위의 연속함수이다. $g$의 값은 모두 $I$에 든다. 틀을 $S = I$, $T = \mathbb{R}$로 쓰면 $f$는 위상동형사상이고 $g$는 그 역함수이다.

**(3).** $a < b$이므로 [[order-properties-of-reals]]의 (3)의 (i)에 의해 $0 < b - a$이고 (6)의 (i)에 의해 $0 < (b - a)^{-1}$이다. 또 (10)에 의해 $0 < 2$이고 $0 < 2^{-1}$이다.

값의 범위. $x \in J$, 곧 $a < x < b$이면 (4)의 (i)에 의해 $2a < 2x < 2b$이고, (2)의 (ii)로 양변에 $-a - b$를 더하면 $a - b < 2x - a - b < b - a$이다. 양수 $(b - a)^{-1}$을 곱하면 (4)의 (i)에 의해 $-1 < \varphi(x) < 1$, 곧 $\varphi(x) \in I$이다. $y \in I$, 곧 $-1 < y < 1$이면 (4)의 (i)에 의해 $-(b - a) < (b - a)y < b - a$이고, $a + b$를 더하면 $2a < (b - a)y + a + b < 2b$이며, $2^{-1}$을 곱하면 $a < \psi(y) < b$, 곧 $\psi(y) \in J$이다.

합성. $\psi(\varphi(x)) = \bigl((b - a)(2x - a - b)(b - a)^{-1} + a + b\bigr) \cdot 2^{-1} = 2x \cdot 2^{-1} = x$이고, $\varphi(\psi(y)) = \bigl(2 \cdot ((b - a)y + a + b) \cdot 2^{-1} - a - b\bigr)(b - a)^{-1} = (b - a) y (b - a)^{-1} = y$이다.

연속. $\varphi$는 $J$ 위에서 $2\,i_J$에서 값이 $a + b$인 상수함수를 뺀 것에 상수 $(b - a)^{-1}$을 곱한 것이고, $\psi$는 $I$ 위에서 $(b - a)\,i_I$에 값이 $a + b$인 상수함수를 더한 것에 상수 $2^{-1}$을 곱한 것이므로 둘 다 연속함수이다. 틀을 $S = J$, $T = I$로 쓰면 $\varphi$는 위상동형사상이다.

끝 문장. $J \simeq I$이고 (2)에 의해 $I \simeq \mathbb{R}$이므로 [[homeomorphism]]의 (3)의 (iii)에 의해 $J \simeq \mathbb{R}$이다. 두 열린구간 $J$, $J'$에서 $J \simeq \mathbb{R}$이고 $J' \simeq \mathbb{R}$이면 같은 항목의 (3)의 (ii)에 의해 $\mathbb{R} \simeq J'$이고, (3)의 (iii)에 의해 $J \simeq J'$이다.

**(4).** $|X| = m$, $|Y| = n$이라 하자([[number-of-elements-is-unique]]). $X \simeq Y$이면 위상동형사상은 $X$에서 $Y$로의 전단사이므로 [[number-of-elements-is-unique]]의 (2)에 의해 $m = n$이다. 거꾸로 $m = n$이면 같은 (2)에 의해 전단사 $f : X \to Y$가 있다. [[bijective-iff-inverse-is-a-function|전단사일 조건]]에 의해 역함수 $f^{-1} : Y \to X$가 있고, $f$와 $f^{-1}$은 이산위상에서 나가는 함수이므로 [[continuous-map]]의 (3)에 의해 연속이다. 따라서 $f$는 위상동형사상이고 $X \simeq Y$이다.

**(5).** [[standard-topology-on-reals]]의 (5)의 보통 위상을 $\mathcal{T}$, 아래끝 위상을 $\mathcal{T}_l$이라 하자. [[lower-limit-topology]]의 (2)에 의해 $\mathcal{T} \subseteq \mathcal{T}_l$이고 $\mathcal{T} \ne \mathcal{T}_l$이다. [[continuous-map]]의 (5)에 의해 $i_{\mathbb{R}} : (\mathbb{R}, \mathcal{T}_l) \to (\mathbb{R}, \mathcal{T})$는 연속이다. 모든 실수 $x$에서 $i_{\mathbb{R}}(i_{\mathbb{R}}(x)) = x$이므로 [[homeomorphism]]의 (5)에 의해 $i_{\mathbb{R}}$는 전단사이고 그 역함수는 $i_{\mathbb{R}} : (\mathbb{R}, \mathcal{T}) \to (\mathbb{R}, \mathcal{T}_l)$이다. 이것이 연속이라면 [[continuous-map]]의 (5)에 의해 $\mathcal{T}_l \subseteq \mathcal{T}$이고, [[comparing-topologies]]의 (1)에 의해 $\mathcal{T} = \mathcal{T}_l$이 되어 어긋난다. 따라서 역함수는 연속이 아니고, $i_{\mathbb{R}} : \mathbb{R}_l \to \mathbb{R}$는 위상동형사상이 아니다.
:::

## 예시와 반례

:::example[열린구간을 펼치는 함수의 값]
(2)의 $f$와 $g$에서 몇 값을 계산합니다. $f(1/2) = (1/2)(1 - 1/2)^{-1} = (1/2) \cdot 2 = 1$이고 $g(1) = 1 \cdot (1 + 1)^{-1} = 1/2$입니다. $f(-3/4) = (-3/4)(1 - 3/4)^{-1} = (-3/4) \cdot 4 = -3$이고 $g(-3) = (-3)(1 + 3)^{-1} = -3/4$입니다. $f(0) = 0$입니다. $x$가 $1$에 가까워질수록 $f(x)$가 커지는 모습은 $f(9/10) = (9/10) \cdot 10 = 9$, $f(99/100) = 99$에서 볼 수 있습니다.
:::

:::counterexample[원소의 개수가 같아도 위상동형이 아닐 수 있다]
(4)는 두 공간이 모두 이산위상일 때의 것입니다. $a \ne b$인 $X = \{a, b\}$에 이산위상 $\mathscr{P}(X)$를, 같은 $X$에 위상 $\mathcal{T}' = \{\emptyset, \{a\}, X\}$([[topology-examples]]의 (7))를 주면 원소의 개수는 같지만 위상동형이 아닙니다. 위상동형사상 $f : (X, \mathscr{P}(X)) \to (X, \mathcal{T}')$가 있다면 [[homeomorphism]]의 (2)의 (i)에 의해 $f(\{a\}) = \{f(a)\}$와 $f(\{b\}) = \{f(b)\}$는 $\mathcal{T}'$의 원소입니다. $\mathcal{T}'$에서 원소가 하나뿐인 집합은 $\{a\}$뿐이므로 $\{f(a)\} = \{f(b)\} = \{a\}$이고 $f(a) = f(b)$입니다. 그러면 $f$가 단사라는 것에 어긋납니다.
:::

## 확인 질문

:::check[열린구간 $(0, 1)$과 $(-5, 3)$은 위상동형인가?]
그렇습니다. (3)의 끝 문장에 의해 두 열린구간은 서로 위상동형입니다. 구체적으로는 (3)의 $\varphi$로 $(0, 1)$을 $I$로 보내고, $(-5, 3)$의 $\psi$로 $I$를 $(-5, 3)$으로 보내는 합성이 위상동형사상입니다([[homeomorphism]]의 (3)의 (iii)).
:::

:::check[이산위상을 준 $\{1, 2, 3\}$과 밀착위상을 준 $\{4, 5, 6\}$은 위상동형인가?]
아닙니다. 위상동형사상 $f$가 있다면 $\{1\}$은 열린집합이므로 [[homeomorphism]]의 (2)의 (i)에 의해 $\{f(1)\}$은 밀착위상의 원소, 곧 $\emptyset$이거나 $\{4, 5, 6\}$입니다. $f(1)$을 원소로 가지므로 $\emptyset$이 아니고, $\{f(1)\} = \{4, 5, 6\}$이면 $4 = f(1) = 5$가 되어 어긋납니다.
:::
