---
title: 사상의 열과 점별 수렴
title_en: Sequences of Maps and Pointwise Convergence
aliases: [사상의 열, 함수열, 점별 수렴, 점별 극한, 사상 전체의 집합, sequence of maps, sequence of functions, pointwise convergence, pointwise limit]
kind: definition
field: topology
msc: ["40A30", "54C35"]
level: undergrad
summary: 집합 X 에서 거리공간 Y 로의 사상 전체의 집합의 수열을 사상의 열이라 하고, X 의 모든 점에서 값의 수열이 극한 사상의 값으로 수렴할 때 점별 수렴한다고 한다. 식으로 정한 열, ε–N 꼴, 점별 극한의 유일성과 존재, 상수 열, 부분수열, 제한, 실숫값 사상을 다룬다.
requires: [set, subset, empty-set-is-subset, power-set, cartesian-product, function, adding-or-removing-an-element, recursion-theorem, natural-numbers-are-infinite, real-number-arithmetic, order-properties-of-reals, absolute-value, interval, power-of-a-real-number, sequence, limit-of-sequence, basic-limits, limit-of-sum-and-product, geometric-sequence-limit, subsequence, metric-space, metric-space-examples, topology-examples, sequence-in-a-space, metric-space-is-hausdorff, limit-unique-in-hausdorff, convergence-in-metric-spaces]
sources:
  - ref: lebl-basic-analysis
    loc: "6.1.1절 Pointwise convergence: Definition 6.1.1 과 그 뒤 문단, 각주 (p.227), Example 6.1.2 (p.227–228), Proposition 6.1.5 (p.229); 6.2.3절 Derivative of the limit 의 Theorem 6.2.10 증명 뒤 문단 (p.240)"
    checked: original
    note: "출처 Definition 6.1.1(p.227)은 집합 S 위의 실함수 f_n : S → ℝ 의 열이 f : S → ℝ 로 점별 수렴한다는 것을 '모든 x ∈ S 에서 f(x) = lim f_n(x)' 로 정의한다. 이 항목은 공역을 거리공간 (Y, d_Y) 로 넓히고, 값의 수렴은 위상수학 입문의 거리위상의 수렴으로 읽는다. Y = ℝ 이면 출처의 정의와 같다는 것이 (8)이다. 출처는 n 마다 함수 f_n 이 주어진 것을 열 {f_n} 이라 부르고, 이 항목은 그것을 '사상 전체의 집합의 수열'로 두고 (1)로 식에서 열을 만든다. 사상 전체의 집합을 멱집합 𝒫(X × Y) 의 원소 가운데 함수인 것 전체로 정하는 방식은 추상대수 binary-operation 의 (5)가 X = Y 인 경우에 쓴 것과 같다(그 항목은 인용하지 않는다). (3)은 출처가 정의 바로 뒤 문단(p.227)에서 '수의 수열의 극한이 하나뿐이므로 극한 함수 f 도 하나뿐'이라고 적은 것을 거리공간에서 하우스도르프 성질로 증명한 것이다. (7)의 'A 위에서'는 같은 문단(p.227)의 말(S 위의 f_n 이 T ⊂ S 위에서 f : T → ℝ 로 점별 수렴한다는 것은 제한들이 f 로 점별 수렴한다는 뜻)을 옮긴 것이다. (2)는 출처 Proposition 6.1.5(p.229, 증명은 독자에게 맡긴다)를 거리공간에서 적은 것이고, 'N 이 x 에 따라 달라도 된다'는 말은 그 명제 뒤 문단에 있다. 출처 각주(p.227)는 따로 밝히지 않으면 '수렴'은 점별 수렴을 뜻한다고 적지만, 이 강의는 늘 '점별'을 붙여 쓴다. 예시 '닫힌구간 [0, 1] 위의 xⁿ'은 출처 Example 6.1.2(p.227–228, [−1, 1] 위의 x^{2n} 이 x = ±1 에서 1, 그 밖에서 0 인 함수로 점별 수렴한다)와 같은 발상이고, 반례 'ℝ 위의 xⁿ'은 같은 예 뒤 문단(p.228, [−1, 1] 밖의 x 에서는 x^{2n} 이 수렴하지 않으므로 더 큰 집합에서는 [−1, 1] 위에서만 점별 수렴한다)과 같은 발상이다. 확인 질문 'ℝ 에서 ℝ 로의 열에서 n번째 사상이 x 를 x/n 으로 보내면, 이 열은 어떤 사상으로 점별 수렴하는가?'의 열은 출처 p.240(6.2.3절, Theorem 6.2.10 증명 뒤 문단)이 '0 으로 점별 수렴할 뿐'이라고 든 f_n(x) = x/n 과 같다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 경계값에서 거짓이거나 근거 없던 설명 문장 약 10건, 다른 항목의 예시에 기대던 근거 4건, 메모의 확인하지 않은 주장 3건을 작성자가 고쳤다. 지휘자의 지적으로 겹치는 글자 1건을 바꾸고 진술 번호 2개를 더했다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
집합과 공집합, 멱집합 $\mathscr{P}$, 곱집합은 [[set]], [[power-set]], [[cartesian-product]]의 것이고, 함수와 그 공역, 함수의 같음은 [[function]]의 것이며, 제한 $f|_A$는 [[adding-or-removing-an-element]]의 것이다. 거리공간과 실수의 보통 거리는 [[metric-space]], [[metric-space-examples]]의 것이고, 거리공간에는 늘 거리위상([[topology-examples]])을 준다. 수열, 수렴, 상수 수열, 첨자열과 부분수열, 값으로 정한 수열은 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 것이고, 극한의 기호 $\lim_{n \to \infty}$는 [[limit-unique-in-hausdorff]]의 것이다. 아래에서 $X$는 집합이고 $(Y, d_Y)$는 거리공간이다.

**사상 전체의 집합.** $X$에서 $Y$로의 함수를 $X$에서 $Y$로의 **사상**(map)이라고도 한다. [[function]]의 정의에 의해 $X$에서 $Y$로의 사상은 곱집합 $X \times Y$의 부분집합이므로 멱집합 $\mathscr{P}(X \times Y)$의 원소이다. $\mathscr{P}(X \times Y)$의 원소 가운데 $X$에서 $Y$로의 함수인 것 전체의 집합을 **$X$에서 $Y$로의 사상 전체의 집합**이라 한다. 그 원소는 정확히 $X$에서 $Y$로의 사상이고, 원소 $f$는 공역을 $Y$로 밝힌 사상 $f : X \to Y$로 읽는다. 이 집합에는 기호를 두지 않는다.

**사상의 열.** $X$에서 $Y$로의 사상 전체의 집합의 수열을 $X$에서 $Y$로의 **사상의 열**(sequence of maps)이라 한다. $n$번째 항 $f_n$은 사상 $f_n : X \to Y$이고, 열을 $(f_n)$으로 쓴다. $(f_n)$이 사상의 열이고 $x \in X$이면, 각 자연수 $n$에서 $f_n(x)$는 이미 정해진 $Y$의 원소이므로 값으로 정한 수열로서 $n$번째 항이 $f_n(x)$인 $Y$의 수열이 있다. 이것을 $x$에서의 **값의 수열**이라 하고 $(f_n(x))$로 쓴다.

**점별 수렴.** $(f_n)$이 사상 $f : X \to Y$로 **점별 수렴한다**(converges pointwise)는 것은 정확히 $X$의 모든 점 $x$에서 $Y$의 수열 $(f_n(x))$가 $f(x)$로 수렴할 때이다. 이때 $f$를 $(f_n)$의 **점별 극한**(pointwise limit)이라 한다. "점별"은 $X$의 점마다 따로 값의 수열의 수렴을 따진다는 뜻이다. 위상수학 입문의 연속 판정 항목이 검색어로 둔 "점별 연속"(연속을 점마다 따지는 것)과는 다른 말이다.

다음이 성립한다. 아래에서 $(f_n)$은 $X$에서 $Y$로의 사상의 열이고 $f$, $g$는 $X$에서 $Y$로의 사상이다.

1. (식으로 정한 열) 각 자연수 $n$과 $X$의 각 점 $x$마다 $Y$의 원소 $r(n, x)$가 [[recursion-theorem|재귀 정리]]의 (1)의 뜻으로 정해져 있다고 하자(식이나 이미 정해진 대상으로 주어진다는 뜻이고, 여러 후보 가운데 하나를 고르는 것은 들어가지 않는다). 그러면 각 자연수 $n$에서 $\{(x, r(n, x)) : x \in X\}$는 $X$에서 $Y$로의 사상이고, 이 사상을 $n$번째 항으로 하는 사상의 열이 있으며, 그 $n$번째 항 $f_n$은 모든 $x \in X$에서 $f_n(x) = r(n, x)$를 만족한다. 이 열을 "$n$번째 사상이 $x$를 $r(n, x)$로 보내는 열"이라 부른다.
2. (ε–N 꼴) $(f_n)$이 $f$로 점별 수렴하는 것은 정확히, $X$의 모든 점 $x$와 모든 양의 실수 $\varepsilon$에 대하여 자연수 $N$이 있어 $n \ge N$인 모든 자연수 $n$에서 $d_Y(f_n(x), f(x)) < \varepsilon$일 때이다. 여기서 $N$은 $x$와 $\varepsilon$에 따라 달라도 된다.
3. (점별 극한은 하나뿐이다) $(f_n)$이 $f$로도 $g$로도 점별 수렴하면 $f = g$이다.
4. (점별 극한이 있을 조건) $(f_n)$이 어떤 사상으로 점별 수렴하는 것은 정확히 $X$의 모든 점 $x$에서 $(f_n(x))$가 수렴할 때이다. 이때 $\{(x, \lim_{n \to \infty} f_n(x)) : x \in X\}$는 $X$에서 $Y$로의 사상이고 $(f_n)$의 점별 극한이며, (3)에 의해 점별 극한은 이것뿐이다. 곧 $(f_n)$의 점별 극한 $f$는 모든 $x \in X$에서 $f(x) = \lim_{n \to \infty} f_n(x)$이다.
5. (상수 열) 모든 자연수 $n$에서 $f_n = g$이면 $(f_n)$은 $g$로 점별 수렴한다.
6. (부분수열) $(f_n)$이 $f$로 점별 수렴하고 $(n_i)$가 첨자열이면, 부분수열 $(f_{n_i})$도 $f$로 점별 수렴한다. 여기서 $x \in X$에서의 $(f_{n_i})$의 값의 수열은 값의 수열 $(f_n(x))$의 첨자열 $(n_i)$로 얻은 부분수열이다.
7. (제한과 "$A$ 위에서") $A \subseteq X$이면 각 자연수 $n$에서 $f_n|_A$는 $A$에서 $Y$로의 사상이고, $n$번째 항이 $f_n|_A$인 $A$에서 $Y$로의 사상의 열이 있다. 이것을 $(f_n|_A)$로 쓴다. $(f_n)$이 **$A$ 위에서** 사상 $h : A \to Y$로 점별 수렴한다는 것은 정확히 $(f_n|_A)$가 $h$로 점별 수렴할 때, 곧 $A$의 모든 점 $x$에서 $(f_n(x))$가 $h(x)$로 수렴할 때이다. $(f_n)$이 $f$로 점별 수렴하면 $X$의 모든 부분집합 $A$ 위에서 $f|_A$로 점별 수렴한다.
8. (실숫값 사상) $Y = \mathbb{R}$이고 $d_Y$가 보통 거리라 하자. $x \in X$이고 $L$이 실수이면, 실수열 $(f_n(x))$가 거리공간 $\mathbb{R}$에서 $L$로 수렴하는 것은 정확히 해석학 입문의 [[limit-of-sequence]]의 뜻으로 $L$로 수렴할 때이다. 따라서 $(f_n)$이 $f$로 점별 수렴하는 것은 정확히 $X$의 모든 점 $x$에서 실수열 $(f_n(x))$가 해석학 입문의 뜻으로 $f(x)$로 수렴할 때이다.
:::

:::english
Sets, the empty set, the power set $\mathscr{P}$ and Cartesian products are as usual; functions, their codomains and equality of functions are as defined earlier, and $f|_A$ is the restriction. Metric spaces and the standard metric on $\mathbb{R}$ are as defined earlier, and a metric space always carries its metric topology. Sequences, convergence, constant sequences, index sequences and subsequences, and sequences given by their terms are those of a topological space, and $\lim_{n \to \infty}$ is the limit symbol in a Hausdorff space. Below, $X$ is a set and $(Y, d_Y)$ is a metric space.

**The set of all maps.** A function from $X$ to $Y$ is also called a **map** from $X$ to $Y$. By definition a map from $X$ to $Y$ is a subset of $X \times Y$, hence an element of $\mathscr{P}(X \times Y)$. The set of those elements of $\mathscr{P}(X \times Y)$ that are functions from $X$ to $Y$ is called the **set of all maps from $X$ to $Y$**. Its elements are exactly the maps from $X$ to $Y$, and an element $f$ is read as the map $f : X \to Y$ with codomain $Y$. We give this set no symbol.

**Sequences of maps.** A sequence in the set of all maps from $X$ to $Y$ is called a **sequence of maps** from $X$ to $Y$. Its $n$th term $f_n$ is a map $f_n : X \to Y$, and we write the sequence as $(f_n)$. If $(f_n)$ is a sequence of maps and $x \in X$, then for each natural number $n$ the value $f_n(x)$ is an already determined element of $Y$, so there is the sequence in $Y$ whose $n$th term is $f_n(x)$. We call it the **sequence of values** at $x$ and write it $(f_n(x))$.

**Pointwise convergence.** $(f_n)$ **converges pointwise** to a map $f : X \to Y$ exactly when, for every point $x$ of $X$, the sequence $(f_n(x))$ in $Y$ converges to $f(x)$. Then $f$ is called the **pointwise limit** of $(f_n)$. "Pointwise" means that the convergence of the sequence of values is examined separately at each point of $X$. It is not the same as "pointwise continuity" (checking continuity point by point), a search term of the item on criteria for continuity in the introductory topology course.

The following hold. Below, $(f_n)$ is a sequence of maps from $X$ to $Y$, and $f$, $g$ are maps from $X$ to $Y$.

1. (Sequences given by a formula) Suppose that for each natural number $n$ and each point $x$ of $X$ an element $r(n, x)$ of $Y$ is determined in the sense of (1) of the recursion theorem (given by a formula or by an already determined object; choosing one of several candidates is not included). Then for each natural number $n$ the set $\{(x, r(n, x)) : x \in X\}$ is a map from $X$ to $Y$, there is a sequence of maps having this map as its $n$th term, and its $n$th term $f_n$ satisfies $f_n(x) = r(n, x)$ for all $x \in X$. We call it "the sequence whose $n$th map sends $x$ to $r(n, x)$".
2. (ε–N form) $(f_n)$ converges pointwise to $f$ exactly when, for every point $x$ of $X$ and every positive real number $\varepsilon$, there is a natural number $N$ such that $d_Y(f_n(x), f(x)) < \varepsilon$ for all natural numbers $n \ge N$. Here $N$ may depend on $x$ and on $\varepsilon$.
3. (The pointwise limit is unique) If $(f_n)$ converges pointwise to $f$ and also to $g$, then $f = g$.
4. (When a pointwise limit exists) $(f_n)$ converges pointwise to some map exactly when $(f_n(x))$ converges for every point $x$ of $X$. In that case $\{(x, \lim_{n \to \infty} f_n(x)) : x \in X\}$ is a map from $X$ to $Y$ and is a pointwise limit of $(f_n)$, and by (3) it is the only one. That is, the pointwise limit $f$ of $(f_n)$ satisfies $f(x) = \lim_{n \to \infty} f_n(x)$ for all $x \in X$.
5. (Constant sequences) If $f_n = g$ for every natural number $n$, then $(f_n)$ converges pointwise to $g$.
6. (Subsequences) If $(f_n)$ converges pointwise to $f$ and $(n_i)$ is an index sequence, then the subsequence $(f_{n_i})$ also converges pointwise to $f$. Here the sequence of values of $(f_{n_i})$ at $x \in X$ is the subsequence of the sequence of values $(f_n(x))$ obtained by the index sequence $(n_i)$.
7. (Restrictions and "on $A$") If $A \subseteq X$, then for each natural number $n$ the restriction $f_n|_A$ is a map from $A$ to $Y$, and there is a sequence of maps from $A$ to $Y$ whose $n$th term is $f_n|_A$. We write it $(f_n|_A)$. $(f_n)$ converges pointwise **on $A$** to a map $h : A \to Y$ exactly when $(f_n|_A)$ converges pointwise to $h$, that is, when $(f_n(x))$ converges to $h(x)$ for every point $x$ of $A$. If $(f_n)$ converges pointwise to $f$, then it converges pointwise to $f|_A$ on every subset $A$ of $X$.
8. (Real-valued maps) Let $Y = \mathbb{R}$ with the standard metric $d_Y$. If $x \in X$ and $L$ is a real number, then the real sequence $(f_n(x))$ converges to $L$ in the metric space $\mathbb{R}$ exactly when it converges to $L$ in the sense of introductory analysis. Hence $(f_n)$ converges pointwise to $f$ exactly when, for every point $x$ of $X$, the real sequence $(f_n(x))$ converges to $f(x)$ in the sense of introductory analysis.
:::

## 직관

해석학 입문의 수열은 번호마다 수 하나를 정했습니다. 사상의 열은 번호마다 사상 하나, 곧 $X$의 모든 점에서의 값을 한꺼번에 정합니다. 이런 열이 "어떤 사상에 다가간다"는 말에는 여러 뜻이 있을 수 있는데, 그 가운데 하나가 점별 수렴입니다. 점 $x$ 하나를 붙들고 보면 $f_1(x), f_2(x), \dots$는 $Y$의 수열이고, 그 수열이 $f(x)$로 수렴하는지를 점마다 따로 묻습니다.

비유하자면 $X$의 점마다 시계가 하나씩 있고, $n$번째 사진에는 모든 시계의 바늘이 찍혀 있습니다. 점별 수렴은 사진을 넘길수록 시계마다 바늘이 제 목표 $f(x)$로 다가간다는 것입니다. "시계마다"가 "$X$의 모든 점 $x$에서"에, "제 목표로 다가간다"가 "수열 $(f_n(x))$가 $f(x)$로 수렴한다"에 맞습니다. 바늘이 얼마나 빨리 다가가는지는 시계마다 달라도 됩니다. (2)에서 $N$이 $x$에 따라 달라도 된다는 것이 이 말입니다. 어느 사진부터는 모든 시계가 한꺼번에 목표 가까이 있기를 요구하는 것은 [[uniform-convergence|고른 수렴]]입니다.

점별 극한이 하나로 정해지는 것은 $Y$가 거리공간이기 때문입니다. 거리공간은 하우스도르프 공간이어서 값의 수열마다 극한이 하나뿐이고, 그 하나뿐인 극한을 값으로 삼아 사상을 정할 수 있습니다((4)). 점마다 여러 후보 가운데 극한을 "고르는" 단계가 없으므로 이 정의에는 선택 공리를 쓰지 않습니다.

## 성질의 증명

:::proof
아래에서 자연수는 [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술에 의해 양의 정수이다. $Y$에는 거리위상 $\mathcal{T}_{d_Y}$를 준다. [[metric-space-is-hausdorff|거리공간이 하우스도르프라는 정리]]의 (1)에 의해 $(Y, \mathcal{T}_{d_Y})$는 하우스도르프 공간이므로, $Y$의 수렴하는 수열에는 [[limit-unique-in-hausdorff]]의 (1)과 (2)를 쓸 수 있다.

먼저 진술 앞부분의 두 사실을 확인한다. $f : X \to Y$이면 [[function]]의 정의에 의해 $f \subseteq X \times Y$이므로 [[power-set]]의 정의에 의해 $f \in \mathscr{P}(X \times Y)$이고, $f$는 $X$에서 $Y$로의 함수이므로 사상 전체의 집합의 원소이다. 거꾸로 사상 전체의 집합의 원소는 정의에 의해 $X$에서 $Y$로의 함수이다. 또 $(f_n)$이 사상의 열이고 $x \in X$이면 각 $n$에서 $f_n(x)$는 [[function]]의 진술에 의해 $Y$의 원소 하나로 정해지므로, [[sequence-in-a-space|위상공간의 수열과 수렴]]의 "값으로 정한 수열"에 의해 $n$번째 항이 $f_n(x)$인 $Y$의 수열이 있다.

**(1).** 자연수 $n$을 하나 정한다. $X$의 각 점 $x$마다 $Y$의 원소 $r(n, x)$가 정해져 있으므로, [[recursion-theorem|재귀 정리]]의 (1)을 $A = X$, $B = Y$에 쓰면 $\{(x, r(n, x)) : x \in X\}$는 $X$에서 $Y$로의 함수이고 $x$에서의 값은 $r(n, x)$이다. 이 사상은 $n$에 대한 식으로 주어진 사상 전체의 집합의 원소이므로, 값으로 정한 수열에 의해 이것을 $n$번째 항으로 하는 사상 전체의 집합의 수열, 곧 사상의 열 $(f_n)$이 있다. 그 $n$번째 항이 위의 사상이므로 모든 $x \in X$에서 $f_n(x) = r(n, x)$이다.

**(2).** $x \in X$를 잡으면, [[convergence-in-metric-spaces]]의 (1)을 거리공간 $(Y, d_Y)$, 수열 $(f_n(x))$, 점 $f(x)$에 써서, $(f_n(x))$가 $f(x)$로 수렴하는 것은 정확히 모든 양의 실수 $\varepsilon$에 대하여 자연수 $N$이 있어 $n \ge N$인 모든 자연수 $n$에서 $d_Y(f_n(x), f(x)) < \varepsilon$일 때이다. 점별 수렴은 이것이 $X$의 모든 점 $x$에서 성립한다는 것이므로 (2)가 나온다. 이 조건에서 "$x$"가 "$\varepsilon$"과 "$N$"보다 앞에 오므로 $N$은 $x$와 $\varepsilon$마다 따로 정해져도 된다.

**(3).** $x \in X$를 잡는다. 점별 수렴의 정의에 의해 $Y$의 수열 $(f_n(x))$는 $f(x)$로도 $g(x)$로도 수렴하므로, [[limit-unique-in-hausdorff]]의 (1)에 의해 $f(x) = g(x)$이다. $f$와 $g$는 정의역이 $X$로 같고 모든 점에서 값이 같으므로 [[function]]의 함수의 같음에 의해 $f = g$이다.

**(4).** $(f_n)$이 어떤 사상 $g$로 점별 수렴하면, 정의에 의해 모든 $x \in X$에서 $(f_n(x))$는 $g(x)$로 수렴하므로 수렴한다.

거꾸로 모든 $x \in X$에서 $(f_n(x))$가 수렴한다고 하자. [[limit-unique-in-hausdorff]]의 (2)에 의해 각 $x$에서 $\lim_{n \to \infty} f_n(x)$는 $(f_n(x))$의 하나뿐인 극한이고, 정확히 하나임이 증명된 $Y$의 원소이다. 따라서 [[recursion-theorem|재귀 정리]]의 (1)을 $A = X$, $B = Y$, $r(x) = \lim_{n \to \infty} f_n(x)$에 쓰면 $f = \{(x, \lim_{n \to \infty} f_n(x)) : x \in X\}$는 $X$에서 $Y$로의 사상이고 $f(x) = \lim_{n \to \infty} f_n(x)$이다. 같은 (2)에 의해 "$\lim_{n \to \infty} f_n(x) = f(x)$"는 $(f_n(x))$가 $f(x)$로 수렴한다는 뜻이므로, $(f_n)$은 $f$로 점별 수렴한다. (3)에 의해 점별 극한은 이 $f$뿐이다.

**(5).** $x \in X$를 잡는다. 모든 $n$에서 $f_n(x) = g(x)$이므로, 수열 $(f_n(x))$와 모든 항이 $g(x)$인 상수 수열은 모든 항이 같아 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 진술에 의해 같은 수열이다. 그 항목의 (1)에 의해 이 수열은 $g(x)$로 수렴한다. 따라서 $(f_n)$은 $g$로 점별 수렴한다.

**(6).** [[sequence-in-a-space|위상공간의 수열과 수렴]]의 (3)을 사상 전체의 집합의 수열 $(f_n)$과 첨자열 $(n_i)$에 쓰면, 합성 $f \circ n$은 사상의 열이고 그 $i$번째 항은 $f_{n_i}$이다. $x \in X$를 잡는다. $(f_{n_i})$의 $x$에서의 값의 수열의 $i$번째 항은 $f_{n_i}(x)$이고, 값의 수열 $(f_n(x))$의 첨자열 $(n_i)$로 얻은 부분수열의 $i$번째 항도 $f_{n_i}(x)$이다. 두 수열은 모든 항이 같으므로 같은 수열이다. $(f_n(x))$는 $f(x)$로 수렴하므로 같은 (3)에 의해 그 부분수열도 $f(x)$로 수렴한다. 따라서 $(f_{n_i})$는 $f$로 점별 수렴한다.

**(7).** $A \subseteq X$라 하자. [[adding-or-removing-an-element]]의 함수의 제한에 의해 각 $n$에서 $f_n|_A$는 $A$에서 $Y$로의 함수이고 모든 $x \in A$에서 $f_n|_A(x) = f_n(x)$이다. $f_n|_A$는 $n$에 대한 식으로 주어진, $A$에서 $Y$로의 사상 전체의 집합의 원소이므로, 값으로 정한 수열에 의해 $n$번째 항이 $f_n|_A$인 사상의 열이 있다. $x \in A$이면 $(f_n|_A)$의 $x$에서의 값의 수열과 $(f_n(x))$는 모든 항이 같아 같은 수열이므로, $(f_n|_A)$가 $h$로 점별 수렴하는 것은 정확히 $A$의 모든 점 $x$에서 $(f_n(x))$가 $h(x)$로 수렴할 때이다.

$(f_n)$이 $f$로 점별 수렴하고 $x \in A$이면 $x \in X$이므로 $(f_n(x))$는 $f(x)$로 수렴하고, 제한의 성질에 의해 $f(x) = f|_A(x)$이다. 앞 문단에 의해 $(f_n)$은 $A$ 위에서 $f|_A$로 점별 수렴한다.

**(8).** [[metric-space-examples]]의 (1)에 의해 보통 거리는 $d_Y(u, v) = |u - v|$이다. [[convergence-in-metric-spaces]]의 (1)에 의해 $(f_n(x))$가 거리공간 $\mathbb{R}$에서 $L$로 수렴하는 것은 정확히 모든 양의 실수 $\varepsilon$에 대하여 자연수 $M$이 있어 $n \ge M$인 모든 자연수 $n$에서 $|f_n(x) - L| < \varepsilon$일 때이고, 이것은 [[limit-of-sequence]]의 수렴의 정의와 글자 그대로 같은 조건이다. 둘째 문장은 첫째 문장을 점별 수렴의 정의에 $L = f(x)$로 넣은 것이다.
:::

## 예시와 반례

:::example[정의역이나 공역이 공집합일 때]
$X = \emptyset$이라 합시다. [[cartesian-product]]의 진술에 의해 $\emptyset \times Y$의 원소는 첫째 성분이 $\emptyset$의 원소여야 하므로 $\emptyset \times Y$에는 원소가 없고, [[set]]의 같음에 의해 $\emptyset \times Y = \emptyset$입니다. $\emptyset$의 부분집합은 원소가 없으므로 $\emptyset$이고, [[empty-set-is-subset|공집합이 모든 집합의 부분집합이라는 정리]]에 의해 $\emptyset \subseteq \emptyset$이므로 $\mathscr{P}(\emptyset) = \{\emptyset\}$입니다. [[function]]의 두 조건은 정의역의 모든 원소에 대한 것이어서 정의역 $\emptyset$에서는 따질 원소가 없으므로, $\emptyset$은 $\emptyset$에서 $Y$로의 함수입니다. 따라서 $\emptyset$에서 $Y$로의 사상 전체의 집합은 $\{\emptyset\}$이고, 사상의 열은 모든 항이 $\emptyset$인 열 하나뿐입니다. (5)에 의해 이 열은 $\emptyset$으로 점별 수렴합니다. 정의의 "모든 점 $x$에서"도 따질 점이 없어 그대로 성립합니다.

$X \ne \emptyset$이고 $Y = \emptyset$이면 같은 까닭으로 $X \times \emptyset = \emptyset$이고, $\mathscr{P}(\emptyset)$의 유일한 원소 $\emptyset$은 $X$의 점 $x$에서 $(x, b) \in \emptyset$인 $b$가 없어 함수의 존재 조건을 어깁니다. 그래서 사상 전체의 집합은 공집합이고, [[sequence-in-a-space|위상공간의 수열과 수렴]]의 진술에 의해 공집합의 수열은 없으므로 사상의 열도 없습니다.
:::

:::example[닫힌구간 [0, 1] 위의 xⁿ]
$X = [0, 1]$([[interval]]), $Y = \mathbb{R}$(보통 거리)이라 합시다. [[power-of-a-real-number]]에 의해 모든 자연수 $n$과 실수 $x$에서 $x^n$은 실수 하나로 정해지므로, (1)에 의해 $n$번째 사상이 $x$를 $x^n$으로 보내는 열 $(f_n)$이 있습니다. 점 $x$마다 값의 수열 $(x^n)$을 봅니다.

- $0 \le x < 1$이면 [[absolute-value]]의 (1)에 의해 $|x| = x < 1$이므로, [[geometric-sequence-limit]]의 (1)에 의해 $(x^n)$은 해석학 입문의 뜻으로 $0$으로 수렴합니다.
- $x = 1$이면 [[power-of-a-real-number]]의 (2)의 (iv)에 의해 모든 $n$에서 $1^n = 1$이므로, $(x^n)$은 모든 항이 $1$인 상수 수열이고 [[basic-limits]]의 (1)에 의해 $1$로 수렴합니다.

$x \in [0, 1]$이면 $x \le 1$이고, [[order-properties-of-reals]]의 (1)의 (iii)에 의해 $x < 1$이 아니면 $1 \le x$이므로 같은 항목의 (1)의 (ii)에 의해 $x = 1$입니다. 그래서 $f(x) = 0$ ($x < 1$), $f(1) = 1$로 정한 $f : [0, 1] \to \mathbb{R}$는 [[recursion-theorem|재귀 정리]]의 (1)로 정해지는 사상이고, 위의 두 경우와 (8)에 의해 $(f_n)$은 $f$로 점별 수렴합니다. (3)에 의해 점별 극한은 이 $f$뿐입니다.

$x$가 $1$에 가까울수록 $x^n$이 $0$ 가까이 가기까지 더 큰 $n$이 필요합니다. $0 < x < 1$이면 [[power-of-a-real-number]]의 (6)의 (iv)에 의해 $x^{n+1} < x^n$이므로, 한 번 $x^n < 2^{-1}$이 되면 그 뒤의 번호에서도 그렇습니다. 예를 들어 $x^n < 2^{-1}$이 되는 첫 번호는 $x = 2^{-1}$에서 $2$이고, $x = 0.9$에서는 $0.9^6 = 0.531441$, $0.9^7 = 0.4782969$이므로 $7$입니다. (2)의 $N$이 $x$에 따라 달라지는 모습입니다.
:::

:::counterexample[ℝ 위의 xⁿ 은 어떤 사상으로도 점별 수렴하지 않는다]
$X = \mathbb{R}$, $Y = \mathbb{R}$(보통 거리)에서 (1)로 $n$번째 사상이 $x$를 $x^n$으로 보내는 열 $(g_n)$을 만들면, 점 $2$에서의 값의 수열 $(2^n)$은 $|2| = 2 > 1$이므로 [[geometric-sequence-limit]]의 (3)에 의해 해석학 입문의 뜻으로 발산합니다. (8)에 의해 거리공간 $\mathbb{R}$에서도 수렴하지 않으므로, (4)에 의해 $(g_n)$은 어떤 사상으로도 점별 수렴하지 않습니다.

그래도 $[0, 1] \subseteq \mathbb{R}$ 위에서는 점별 수렴합니다. $x \in [0, 1]$이면 $g_n|_{[0, 1]}(x) = x^n$이므로 $(g_n|_{[0, 1]})$은 앞 예시의 열과 모든 항이 같고, (7)에 의해 $(g_n)$은 $[0, 1]$ 위에서 앞 예시의 $f$로 점별 수렴합니다. 점별 수렴은 정의역을 어디까지로 잡느냐에 달려 있습니다.
:::

## 확인 질문

:::check[ℝ 에서 ℝ 로의 열에서 n번째 사상이 x 를 x/n 으로 보내면, 이 열은 어떤 사상으로 점별 수렴하는가?]
값이 $0$인 상수함수로 점별 수렴합니다. $x/n$은 $x \cdot n^{-1}$이므로([[real-number-arithmetic]]) (1)로 열이 정해집니다. 점 $x$를 정하면 [[basic-limits]]의 (2)에 의해 $n^{-1}$은 $0$으로 수렴하고, [[limit-of-sum-and-product]]의 (5)에 의해 $n$번째 항이 $x \cdot n^{-1}$인 수열은 $x \cdot 0 = 0$으로 수렴합니다. (8)에 의해 이것은 거리공간 $\mathbb{R}$에서의 수렴이기도 하므로, 열은 모든 점에서 값이 $0$인 사상으로 점별 수렴합니다. (2)의 $N$은 점마다 다르게 잡아야 합니다. 예를 들어 $\varepsilon = 1$이면 $|x \cdot N^{-1} - 0| < 1$은 $|x| < N$일 때이므로, $N$은 $|x|$보다 큰 자연수여야 합니다.
:::

:::check[Y 에 이산 거리를 주면, 사상의 열이 f 로 점별 수렴한다는 것은 무슨 뜻인가?]
$X$의 점마다 어떤 번호부터 값이 $f(x)$와 같아진다는 뜻입니다. [[metric-space-examples]]의 (2)의 이산 거리를 준 $Y$에서 [[convergence-in-metric-spaces]]의 (5)에 의해 $(f_n(x))$가 $f(x)$로 수렴하는 것은 정확히 자연수 $M$이 있어 $n \ge M$인 모든 $n$에서 $f_n(x) = f(x)$일 때입니다. 그 번호 $M$은 점 $x$마다 달라도 됩니다.
:::
