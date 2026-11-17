---
title: 함수의 극한
title_en: Limit of a Function
aliases: [함수의 수렴, 엡실론-델타, 극한의 국소성, limit of a function, epsilon-delta definition, lim]
kind: definition
field: real-analysis
msc: ["26A03"]
level: undergrad
summary: c 가 S 의 집적점일 때 실함수 f 가 c 에서 L 로 수렴한다는 것을 ε–δ 로 정의하고, 그 부정과 극한의 유일성을 증명한 뒤 기호 lim 을 도입한다. 상수함수와 항등함수의 극한, c 에서의 값이 극한과 무관하다는 것, 제한과 국소성을 함께 증명한다.
requires: [set, subset, set-operations, open-sentence, quantifiers, negation-of-quantified-statements, negation-of-conditional, conditional-statement, logical-connectives, natural-numbers-are-infinite, prime-number, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, interval, real-valued-function, cluster-point]
sources:
  - ref: lebl-basic-analysis
    loc: 3.1.2절 첫 문단, Definition 3.1.3, Proposition 3.1.4, Example 3.1.5, 3.1.6 (p.114–115); 3.1.3절 Lemma 3.1.7 의 증명 (p.116); 3.1.4절 Definition 3.1.14 (p.118), Proposition 3.1.15 (p.119), p.119 의 한쪽 극한 예; 연습문제 3.1.6, 3.1.7, 3.1.15 (p.120–121)
    checked: original
    note: "출처의 Definition 3.1.3(p.114)은 c 가 S 의 집적점일 때 'L ∈ ℝ 가 있고 모든 ε > 0 에 대해 δ > 0 이 있어 x ∈ S \\ {c} 이고 |x − c| < δ 이면 |f(x) − L| < ε' 이면 f(x) 가 L 로 수렴한다고 하고, f(x) → L 과 lim_{x→c} f(x) := L 로 쓴다. 출처는 L 이 하나뿐이라는 것을 바로 뒤 Proposition 3.1.4(p.114)로 증명하며 기호는 그것을 미리 가정한다고 적는다. 이 항목은 'L 로 수렴한다'를 먼저 정의하고 유일성 (3)을 증명한 뒤에 lim 기호를 도입하며, 화살표 표기는 쓰지 않는다. 출처의 Proposition 3.1.4 의 증명은 δ := min{δ₁, δ₂} 와 집적점에서 얻는 x 하나로 |L₁ − L₂| < ε 을 보이고, 이 항목의 증명도 같은 경로이다. 출처는 집적점 조건이 유일성에 필요하다고 적고(p.114) 연습문제 3.1.15(p.121)에서 집적점이 아닌 점에서는 모든 L 이 정의의 조건을 만족함을 보이라고 한다. 반례 '집적점이 아닌 점'은 그 연습문제의 발상을 한 집합에서 보인 것이다. 출처는 3.1.2절 첫 문단(p.114)에서 f 가 c 에서 정의되었는지는 극한의 정의와 상관없다고 적는다. (5), (6)은 이것을 명제로 적은 것이며 출처에 명제로는 없다(검색한 범위). (1)의 부정의 꼴은 출처가 Lemma 3.1.7 의 증명(p.116)에서 'The negation of the definition is ...'로 적는 것과 같은 내용이다. (2)와 정의된 용어 'c 가까이에서 성립한다'는 출처에 없다(검색한 범위. 출처는 p.118 에서 'arbitrarily near c' 를 비형식적으로 쓴다). (4)의 상수함수와 항등함수의 극한은 출처에 명제로 없다(검색한 범위). (7)은 출처의 연습문제 3.1.6(p.120)이다(출처는 c 가 S 의 집적점이라는 것도 가정하는데, 그것은 cluster-point 의 (4)에서 나온다). (8)은 출처의 Proposition 3.1.15(p.119)에서 A 를 S ∩ (c − α, c + α) 로 둔 경우이고, 증명 경로(δ := min{δ′, α})도 같다. 제한 f|_A 는 출처의 Definition 3.1.14(p.118)이다. 예시 '제곱의 극한'은 출처의 Example 3.1.5(p.115)와 같은 함수, 같은 δ = min{1, ε/(2|c| + 1)} 이다. 예시 '극한과 함숫값이 다르다'는 출처의 Example 3.1.6(p.115; [0, 1) 에서 x > 0 이면 x, f(0) = 1)과 같은 발상이다. 반례 '계단 함수'는 출처 p.119 에서 한쪽 극한은 있지만 극한이 없는 예로 드는 함수(x < 0 이면 1, x ≥ 0 이면 0)와 같은 꼴이다. 확인 질문 2 는 출처의 연습문제 3.1.7(p.120; 제한의 극한은 있지만 원래 함수의 극한은 없는 예)과 같은 발상이다. 확인 질문 1 은 출처에 없다(검색한 범위)."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 증명의 수학 오류 없음. 가산 선택 없이 ε–δ 로 직접 증명. 출처 쪽수와 메모, 기호 |f| 와 'c 가까이에서'의 구별을 고침"
added: 2026-11-17
---

:::statement
실함수, 상수함수, 항등함수 $i_S$와 제한은 [[real-valued-function]]의 것이고, 집적점은 [[cluster-point]]의 것이며, 절댓값은 [[absolute-value]]의 것이다. $S$를 $\mathbb{R}$의 부분집합, $f : S \to \mathbb{R}$를 $S$ 위의 실함수, $c$를 $S$의 집적점, $L$을 실수라 하자.

**수렴.** $f$가 $c$에서 $L$로 **수렴한다**(converges to $L$ at $c$)는 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 양의 실수 $\delta$가 있어, $x \in S$이고 $x \ne c$이며 $|x - c| < \delta$인 모든 $x$에서 $|f(x) - L| < \varepsilon$일 때이다. [[quantifiers|한정 기호]]로 쓰면, $f$가 $c$에서 $L$로 수렴하는 것은 정확히
$$
\forall \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \Rightarrow \exists \delta \in \mathbb{R},\ \bigl(\delta > 0 \land \forall x \in S,\ ((x \ne c \land |x - c| < \delta) \Rightarrow |f(x) - L| < \varepsilon)\bigr)\Bigr)
$$
가 참일 때이다. 한정 기호는 이 순서로 읽으므로 $\delta$는 $\varepsilon$마다 따로 골라도 된다. 이것을 "$x$가 $c$로 갈 때 $f(x)$가 $L$로 수렴한다"고도 말한다. $f$가 $c$에서 **수렴한다**는 것은 정확히 $f$가 $c$에서 어떤 실수로 수렴할 때이고, **발산한다**는 것은 정확히 $f$가 $c$에서 수렴하지 않을 때이다. $c$가 $S$의 집적점이 아니면 이 말들을 쓰지 않는다.

**$c$ 가까이에서.** $S$의 원소 $x$에 관한 [[open-sentence|열린 문장]] $P(x)$가 **$c$ 가까이에서 성립한다**는 것은 정확히, 어떤 양의 실수 $\delta_0$이 있어 $x \in S$이고 $x \ne c$이며 $|x - c| < \delta_0$인 모든 $x$에서 $P(x)$가 참일 때이다. $c$ 자신에서 $P(c)$가 참인지는 따지지 않는다. 이 말로 쓰면, $f$가 $c$에서 $L$로 수렴하는 것은 정확히 모든 양의 실수 $\varepsilon$에 대하여 "$|f(x) - L| < \varepsilon$"이 $c$ 가까이에서 성립할 때이다.

다음이 성립한다.

1. ($L$로 수렴하지 않는다는 것) $f$가 $c$에서 $L$로 수렴하지 않는 것은 정확히
   $$
   \exists \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \land \forall \delta \in \mathbb{R},\ \bigl(\delta > 0 \Rightarrow \exists x \in S,\ (x \ne c \land |x - c| < \delta \land |f(x) - L| \ge \varepsilon)\bigr)\Bigr)
   $$
   가 참일 때이다. 곧 어떤 양의 실수 $\varepsilon$이 있어, 모든 양의 실수 $\delta$에 대하여 $x \ne c$, $|x - c| < \delta$, $|f(x) - L| \ge \varepsilon$인 $x \in S$가 있을 때이다.
2. ($c$ 가까이에서 성립하는 조건) $P(x)$, $Q(x)$를 $S$의 원소 $x$에 관한 열린 문장이라 하자.
   - (i) $P(x)$와 $Q(x)$가 각각 $c$ 가까이에서 성립하면 "$P(x)$이고 $Q(x)$"도 $c$ 가까이에서 성립한다.
   - (ii) $P(x)$가 $c$ 가까이에서 성립하면 $c$는 집합 $\{x \in S : P(x)\}$의 집적점이다. 특히 $x \in S$, $x \ne c$이고 $P(x)$가 참인 $x$가 있다.
   - (iii) $c$와 다른 $S$의 모든 원소 $x$에서 $P(x)$가 참이면 $P(x)$는 $c$ 가까이에서 성립한다.
3. (유일성) $f$가 $c$에서 $L$로 수렴하고 실수 $L'$으로도 수렴하면 $L = L'$이다.

**극한의 기호.** (3)에 의해 $f$가 $c$에서 수렴하면 수렴하는 실수는 하나뿐이다. 그 수를 $f$의 $c$에서의 **극한**(limit)이라 하고
$$
\lim_{x \to c} f(x)
$$
로 쓴다. 실수 $L$에 대하여 "$\lim_{x \to c} f(x) = L$"은 정확히 $f$가 $c$에서 $L$로 수렴한다는 뜻이다. $f$가 식 $f(x) = r(x)$로 정한 함수([[real-valued-function]]의 (1))이면 $\lim_{x \to c} r(x)$로도 쓴다. 발산할 때는 이 기호를 쓰지 않는다. 기호 $\lim_{x \to c} f(x)$에는 정의역이 보이지 않는다. 어느 집합 위의 함수인지는 문맥에서 밝히며, 같은 식이라도 정의역이 다르면 수렴하는지나 극한이 달라질 수 있다(아래 확인 질문 2 의 $H$와 그 제한).

다음도 성립한다. 아래에서 $k$는 실수이다.

4. (상수함수와 항등함수) $S$ 위의 값이 $k$인 상수함수는 $c$에서 $k$로 수렴하고, 항등함수 $i_S$는 $c$에서 $c$로 수렴한다. 곧 $\lim_{x \to c} k = k$이고 $\lim_{x \to c} x = c$이다.
5. ($c$ 가까이에서 같은 두 함수) $g : S \to \mathbb{R}$가 실함수이고 "$f(x) = g(x)$"가 $c$ 가까이에서 성립하면, $f$가 $c$에서 $L$로 수렴하는 것은 정확히 $g$가 $c$에서 $L$로 수렴할 때이다. 특히 $c$와 다른 $S$의 모든 원소 $x$에서 $f(x) = g(x)$이면 그렇다. 따라서 $c \in S$일 때 $f(c)$의 값은 $f$가 $c$에서 $L$로 수렴하는지에 영향을 주지 않는다.
6. ($c$를 정의역에서 빼기) $c$는 $S - \{c\}$의 집적점이고, $f$가 $c$에서 $L$로 수렴하는 것은 정확히 제한 $f|_{S - \{c\}}$가 $c$에서 $L$로 수렴할 때이다.
7. (제한) $A \subseteq S$이고 $c$가 $A$의 집적점이며 $f$가 $c$에서 $L$로 수렴하면, $f|_A$도 $c$에서 $L$로 수렴한다.
8. (국소성) $\delta_0$이 양의 실수이고 $A = \{x \in S : |x - c| < \delta_0\}$이면, $c$는 $A$의 집적점이고, $f$가 $c$에서 $L$로 수렴하는 것은 정확히 $f|_A$가 $c$에서 $L$로 수렴할 때이다. ([[absolute-value]]의 (8)에 의해 $A = S \cap (c - \delta_0, c + \delta_0)$이다. 열린구간은 [[interval]]의 것이다.)
:::

:::english
Real-valued functions, constant functions, the identity function $i_S$ and restrictions are those of the entry on real-valued functions; cluster points are those of the entry on cluster points; and the absolute value is that of the entry on absolute value. Let $S$ be a subset of $\mathbb{R}$, $f : S \to \mathbb{R}$ a real-valued function on $S$, $c$ a cluster point of $S$, and $L$ a real number.

**Convergence.** We say that $f$ **converges to** $L$ **at** $c$ exactly when for every positive real number $\varepsilon$ there is a positive real number $\delta$ such that $|f(x) - L| < \varepsilon$ for every $x$ with $x \in S$, $x \ne c$ and $|x - c| < \delta$. In terms of quantifiers, $f$ converges to $L$ at $c$ exactly when
$$
\forall \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \Rightarrow \exists \delta \in \mathbb{R},\ \bigl(\delta > 0 \land \forall x \in S,\ ((x \ne c \land |x - c| < \delta) \Rightarrow |f(x) - L| < \varepsilon)\bigr)\Bigr)
$$
is true. Since the quantifiers are read in this order, $\delta$ may be chosen separately for each $\varepsilon$. This is also expressed as "$f(x)$ converges to $L$ as $x$ goes to $c$". We say that $f$ **converges** at $c$ exactly when $f$ converges at $c$ to some real number, and that it **diverges** at $c$ exactly when $f$ does not converge at $c$. These words are not used when $c$ is not a cluster point of $S$.

**Near $c$.** An open sentence $P(x)$ about elements $x$ of $S$ **holds near** $c$ exactly when there is a positive real number $\delta_0$ such that $P(x)$ is true for every $x$ with $x \in S$, $x \ne c$ and $|x - c| < \delta_0$. Whether $P(c)$ itself is true is not considered. In these words, $f$ converges to $L$ at $c$ exactly when for every positive real number $\varepsilon$ the sentence "$|f(x) - L| < \varepsilon$" holds near $c$.

The following hold.

1. (Not converging to $L$) $f$ does not converge to $L$ at $c$ exactly when
   $$
   \exists \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \land \forall \delta \in \mathbb{R},\ \bigl(\delta > 0 \Rightarrow \exists x \in S,\ (x \ne c \land |x - c| < \delta \land |f(x) - L| \ge \varepsilon)\bigr)\Bigr)
   $$
   is true; that is, exactly when there is a positive real number $\varepsilon$ such that for every positive real number $\delta$ there is $x \in S$ with $x \ne c$, $|x - c| < \delta$ and $|f(x) - L| \ge \varepsilon$.
2. (Sentences holding near $c$) Let $P(x)$ and $Q(x)$ be open sentences about elements $x$ of $S$.
   - (i) If $P(x)$ and $Q(x)$ each hold near $c$, then "$P(x)$ and $Q(x)$" holds near $c$.
   - (ii) If $P(x)$ holds near $c$, then $c$ is a cluster point of the set $\{x \in S : P(x)\}$. In particular, there is $x$ with $x \in S$, $x \ne c$ and $P(x)$ true.
   - (iii) If $P(x)$ is true for every element $x$ of $S$ different from $c$, then $P(x)$ holds near $c$.
3. (Uniqueness) If $f$ converges to $L$ at $c$ and also to a real number $L'$, then $L = L'$.

**Notation for the limit.** By (3), if $f$ converges at $c$, the real number to which it converges is unique. That number is called the **limit** of $f$ at $c$ and is written
$$
\lim_{x \to c} f(x).
$$
For a real number $L$, "$\lim_{x \to c} f(x) = L$" means exactly that $f$ converges to $L$ at $c$. If $f$ is the function defined by a formula $f(x) = r(x)$ (item (1) of the entry on real-valued functions), we also write $\lim_{x \to c} r(x)$. The symbol is not used when $f$ diverges. The symbol $\lim_{x \to c} f(x)$ does not display the domain. The set on which the function is defined is made clear from the context, and even for the same formula, whether it converges, or the limit, may differ when the domain differs (see $H$ and its restriction in the second check question below).

The following also hold. Below, $k$ is a real number.

4. (Constant functions and the identity function) The constant function on $S$ with value $k$ converges to $k$ at $c$, and the identity function $i_S$ converges to $c$ at $c$. That is, $\lim_{x \to c} k = k$ and $\lim_{x \to c} x = c$.
5. (Two functions equal near $c$) If $g : S \to \mathbb{R}$ is a real-valued function and "$f(x) = g(x)$" holds near $c$, then $f$ converges to $L$ at $c$ exactly when $g$ converges to $L$ at $c$. In particular this is so if $f(x) = g(x)$ for every element $x$ of $S$ different from $c$. Hence, when $c \in S$, the value $f(c)$ has no effect on whether $f$ converges to $L$ at $c$.
6. (Removing $c$ from the domain) $c$ is a cluster point of $S - \{c\}$, and $f$ converges to $L$ at $c$ exactly when the restriction $f|_{S - \{c\}}$ converges to $L$ at $c$.
7. (Restrictions) If $A \subseteq S$, $c$ is a cluster point of $A$, and $f$ converges to $L$ at $c$, then $f|_A$ also converges to $L$ at $c$.
8. (Locality) If $\delta_0$ is a positive real number and $A = \{x \in S : |x - c| < \delta_0\}$, then $c$ is a cluster point of $A$, and $f$ converges to $L$ at $c$ exactly when $f|_A$ converges to $L$ at $c$. (By item (8) of the entry on absolute value, $A = S \cap (c - \delta_0, c + \delta_0)$; open intervals are those of the entry on intervals.)
:::

## 직관

수열의 극한은 "번호가 충분히 커지면 항이 $L$에 가깝다"였습니다. 함수의 극한은 "$x$가 $c$에 충분히 가까우면 $f(x)$가 $L$에 가깝다"입니다. 허용 오차 $\varepsilon$이 주어지면, $c$에서 $\delta$보다 가까운 곳의 함숫값이 모두 $L$에서 $\varepsilon$보다 가깝게 되는 $\delta$를 찾을 수 있어야 합니다. 수열의 정의에서 "번호 $M$ 이후"가 하던 일을 여기서는 "$c$와의 거리가 $\delta$ 미만"이 합니다.

과녁에 비유하면, $L$은 과녁의 중심이고 $\varepsilon$은 "중심에서 이만큼 안에 맞혀라"는 요구입니다. 사수는 요구를 듣고 나서 "$c$에서 $\delta$ 안에서 쏘면 된다"고 답합니다. 요구가 엄격해질수록 $\delta$는 작아질 수 있고, 이것이 한정 기호의 순서 "모든 $\varepsilon$, 어떤 $\delta$"입니다. 비유가 맞지 않는 곳은 정의가 $x = c$인 점은 보지 않는다는 것입니다. 그래서 $f(c)$가 무엇이든, 아니 $c$가 정의역에 없더라도 극한은 바뀌지 않습니다((5), (6)).

$c$가 집적점이어야 하는 까닭은 유일성 (3)에 있습니다. 증명은 $c$에 가까운 점 $x$를 하나 잡아 $L$과 $L'$이 모두 $f(x)$에 가깝다는 것으로 둘이 같음을 보이는데, 그런 $x$가 있다는 것이 집적점의 정의입니다. 아래 반례처럼 집적점이 아닌 점에서는 모든 실수가 정의의 조건을 만족해 버립니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (8)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (10)"은 [[absolute-value]]의 번호, "집적점 (3)"은 [[cluster-point]]의 번호, "실함수 (2)"는 [[real-valued-function]]의 번호, "이 항목의 (5)"는 위 진술의 번호이다. 먼저 두 사실을 본다.

- (ㄱ) 양의 실수 $\varepsilon$에 대하여 순서 성질 (8)의 둘째 문장에 의해 $0 < \varepsilon 2^{-1}$이고, $\varepsilon 2^{-1} + \varepsilon 2^{-1} = \varepsilon$이다. (K3), (K4)와 (K7)의 $1 + 1 = 2$, (K1), (K8)의 (iii)에 의해 $\varepsilon 2^{-1} + \varepsilon 2^{-1} = \varepsilon (2^{-1} \cdot 1 + 2^{-1} \cdot 1) = \varepsilon (2^{-1}(1 + 1)) = \varepsilon (2^{-1} \cdot 2) = \varepsilon \cdot 1 = \varepsilon$이기 때문이다.
- (ㄴ) 양의 실수 $p$, $q$에 대하여 $\min\{p, q\}$는 절댓값 (10)에 의해 $p$이거나 $q$이므로 양수이고, $p$ 이하이며 $q$ 이하이다. 실수 $t$가 $t < \min\{p, q\}$이면 순서 성질 (1)의 (v)에 의해 $t < p$이고 $t < q$이다.

**1의 증명.** 정의의 명제를 바깥부터 부정한다. 한정 명제의 참·거짓은 [[quantifiers]]의 규칙에 의해 안쪽의 열린 문장이 각 값에서 갖는 진릿값으로만 정해지고, $\Rightarrow$, $\land$, $\lnot$으로 만든 명제의 참·거짓은 진리표([[conditional-statement]], [[logical-connectives]])에 의해 각 부분의 진릿값으로만 정해진다. 그래서 각 단계에서 명제의 한 부분을 모든 값에서 진릿값이 같은 것으로 바꾸어도 전체의 진릿값은 그대로이다.

- [[negation-of-quantified-statements]]의 1과 [[negation-of-conditional]]에 의해, "$\forall \varepsilon \in \mathbb{R},\ (\varepsilon > 0 \Rightarrow A)$"의 부정은 "$\exists \varepsilon \in \mathbb{R},\ (\varepsilon > 0 \land \lnot A)$"와 진릿값이 같다. 여기서 $A$는 "$\exists \delta \in \mathbb{R},\ (\delta > 0 \land B)$"이다.
- [[negation-of-quantified-statements]]의 2에 의해 $\lnot A$는 "$\forall \delta \in \mathbb{R},\ \lnot(\delta > 0 \land B)$"와 진릿값이 같다. [[logical-connectives]]와 [[conditional-statement]]의 진리표에서 "$\lnot(P \land Q)$"와 "$P \Rightarrow \lnot Q$"는 둘 다 정확히 $P$와 $Q$가 모두 참인 줄에서만 거짓이므로, 이것은 "$\forall \delta \in \mathbb{R},\ (\delta > 0 \Rightarrow \lnot B)$"와 진릿값이 같다.
- $B$는 "$\forall x \in S,\ (C(x) \Rightarrow D(x))$"이고, $C(x)$는 "$x \ne c \land |x - c| < \delta$", $D(x)$는 "$|f(x) - L| < \varepsilon$"이다. [[negation-of-quantified-statements]]의 1과 [[negation-of-conditional]]에 의해 $\lnot B$는 "$\exists x \in S,\ (C(x) \land \lnot D(x))$"와 진릿값이 같다.
- 순서 성질 (1)의 (iii)에 의해 $\lnot D(x)$는 $|f(x) - L| \ge \varepsilon$과 같다.

이것들을 이어 붙이면 (1)의 명제를 얻는다.

**2의 증명.** (i) $x \in S$, $x \ne c$, $|x - c| < \delta_1$이면 $P(x)$가 참인 양수 $\delta_1$과, 같은 꼴로 $Q(x)$에 대한 양수 $\delta_2$가 있다. $\delta_0 = \min\{\delta_1, \delta_2\}$로 두면 (ㄴ)에 의해 $\delta_0$은 양수이고, $x \in S$, $x \ne c$, $|x - c| < \delta_0$이면 $|x - c| < \delta_1$이고 $|x - c| < \delta_2$이므로 $P(x)$와 $Q(x)$가 모두 참이다.

(ii) $x \in S$, $x \ne c$, $|x - c| < \delta_0$이면 $P(x)$가 참인 양수 $\delta_0$이 있다. $T = \{x \in S : P(x)\}$로 두고 양의 실수 $\varepsilon$을 잡는다. $\varepsilon' = \min\{\varepsilon, \delta_0\}$은 (ㄴ)에 의해 양수이므로, $c$가 $S$의 집적점이라는 것에 의해 $x \in S$, $x \ne c$, $|x - c| < \varepsilon'$인 $x$가 있다. (ㄴ)에 의해 $|x - c| < \delta_0$이므로 $P(x)$가 참이어서 $x \in T$이고, $|x - c| < \varepsilon$이다. 따라서 $c$는 $T$의 집적점이다. 둘째 문장은 집적점의 정의를 $\varepsilon = 1$로 쓴 것이다.

(iii) $\delta_0 = 1$로 두면 된다. 순서 성질 (5)의 (ii)에 의해 $1$은 양수이다.

**3의 증명.** 양의 실수 $\varepsilon$을 잡는다. (ㄱ)에 의해 $\varepsilon 2^{-1}$은 양수이므로, 정의에 의해 "$|f(x) - L| < \varepsilon 2^{-1}$"과 "$|f(x) - L'| < \varepsilon 2^{-1}$"은 각각 $c$ 가까이에서 성립한다. 이 항목의 (2)의 (i)에 의해 둘 다 $c$ 가까이에서 성립하고, (2)의 (ii)에 의해 두 부등식이 모두 성립하는 $x \in S$가 있다. [[triangle-inequality|삼각부등식]]의 (4)를 $L$, $f(x)$, $L'$에 쓰고 절댓값 (3)을 쓰면
$$
|L - L'| \le |f(x) - L| + |f(x) - L'| < \varepsilon 2^{-1} + \varepsilon 2^{-1} = \varepsilon
$$
이다(순서 성질 (2)의 (iv)와 (ㄱ)). 순서 성질 (1)의 (v)에 의해 $|L - L'| < \varepsilon$이므로 $|L - L'| \le \varepsilon$이다. $\varepsilon$은 임의의 양수였으므로 순서 성질 (9)에 의해 $|L - L'| \le 0$이고, 절댓값 (2)에 의해 $0 \le |L - L'|$이므로 같은 (9)의 둘째 문장에 의해 $|L - L'| = 0$이다. 절댓값 (2)와 (K12)의 (v)에 의해 $L = L'$이다.

기호 문단은 이 결과에 기댄다. $f$가 $c$에서 수렴하면 수렴하는 실수가 있고, 그런 실수는 방금 보인 것에 의해 하나뿐이므로 $\lim_{x \to c} f(x)$는 실수 하나를 가리킨다.

**4의 증명.** 상수함수 $u$의 값은 모두 $k$이다. 양의 실수 $\varepsilon$에 대하여 $\delta = 1$로 두면, $x \in S$, $x \ne c$, $|x - c| < 1$인 모든 $x$에서 (K8)의 (ii)와 절댓값 (2)에 의해 $|u(x) - k| = |k - k| = |0| = 0 < \varepsilon$이다. 항등함수에 대해서는 $\delta = \varepsilon$으로 두면, $x \in S$, $x \ne c$, $|x - c| < \varepsilon$인 모든 $x$에서 $|i_S(x) - c| = |x - c| < \varepsilon$이다.

**5의 증명.** 먼저 다음을 보인다.

- (ㄷ) $h_1$, $h_2$가 $S$ 위의 실함수이고 "$h_1(x) = h_2(x)$"가 $c$ 가까이에서 성립하며 $h_1$이 $c$에서 $L$로 수렴하면, $h_2$도 $c$에서 $L$로 수렴한다.

$x \in S$, $x \ne c$, $|x - c| < \delta_0$이면 $h_1(x) = h_2(x)$인 양수 $\delta_0$이 있다. 양의 실수 $\varepsilon$에 대하여 $x \in S$, $x \ne c$, $|x - c| < \delta$이면 $|h_1(x) - L| < \varepsilon$인 양수 $\delta$가 있다. $\delta' = \min\{\delta, \delta_0\}$로 두면 (ㄴ)에 의해 $\delta'$은 양수이고, $x \in S$, $x \ne c$, $|x - c| < \delta'$이면 $|x - c| < \delta$, $|x - c| < \delta_0$이므로 $|h_2(x) - L| = |h_1(x) - L| < \varepsilon$이다. 따라서 (ㄷ)이 성립한다.

"$f(x) = g(x)$"가 $c$ 가까이에서 성립하면 같은 $\delta_0$에서 "$g(x) = f(x)$"도 성립한다. (ㄷ)을 $h_1 = f$, $h_2 = g$에 쓰면 $f$가 $L$로 수렴할 때 $g$도 그렇고, $h_1 = g$, $h_2 = f$에 쓰면 $g$가 $L$로 수렴할 때 $f$도 그렇다. 둘째 문장은 이 항목의 (2)의 (iii)에 의해 첫째 문장의 경우이다. 셋째 문장은, $f$와 $c$에서의 값만 다른 함수 $g$가 둘째 문장의 가정을 만족한다는 것이다.

**6의 증명.** 집적점 (3)에 의해 $c$는 $S - \{c\}$의 집적점이다. $f|_{S - \{c\}}$가 $c$에서 $L$로 수렴한다는 정의는 "$x \in S - \{c\}$이고 $x \ne c$이며 $|x - c| < \delta$인 모든 $x$에서 $|f|_{S - \{c\}}(x) - L| < \varepsilon$"을 쓴다. 실수 $x$에 대하여 "$x \in S - \{c\}$이고 $x \ne c$"는 정확히 "$x \in S$이고 $x \ne c$"일 때 참이고, 그런 $x$에서 실함수 (6)에 의해 $f|_{S - \{c\}}(x) = f(x)$이다. 따라서 두 정의의 명제는 모든 $\varepsilon$, $\delta$에서 같은 $x$들에 대해 같은 부등식을 요구하므로 진릿값이 같다.

**7의 증명.** 양의 실수 $\varepsilon$에 대하여 $x \in S$, $x \ne c$, $|x - c| < \delta$이면 $|f(x) - L| < \varepsilon$인 양수 $\delta$가 있다. $x \in A$, $x \ne c$, $|x - c| < \delta$이면 $A \subseteq S$이므로 $x \in S$이고, 실함수 (6)에 의해 $|f|_A(x) - L| = |f(x) - L| < \varepsilon$이다.

**8의 증명.** "$x \in A$"는 $c$ 가까이에서 성립한다($x \in S$, $x \ne c$, $|x - c| < \delta_0$이면 $x \in A$). 이 항목의 (2)의 (ii)에 의해 $c$는 $\{x \in S : x \in A\} = A$의 집적점이다. $f$가 $c$에서 $L$로 수렴하면 $A \subseteq S$이므로 (7)에 의해 $f|_A$도 그렇다. 거꾸로 $f|_A$가 $c$에서 $L$로 수렴한다고 하자. 양의 실수 $\varepsilon$에 대하여 $x \in A$, $x \ne c$, $|x - c| < \delta'$이면 $|f|_A(x) - L| < \varepsilon$인 양수 $\delta'$이 있다. $\delta = \min\{\delta', \delta_0\}$으로 두면 (ㄴ)에 의해 $\delta$는 양수이다. $x \in S$, $x \ne c$, $|x - c| < \delta$이면 $|x - c| < \delta_0$이므로 $x \in A$이고, $|x - c| < \delta'$이므로 실함수 (6)에 의해 $|f(x) - L| = |f|_A(x) - L| < \varepsilon$이다. 괄호 안의 문장은 절댓값 (8)에서 $|x - c| < \delta_0$인 것이 정확히 $c - \delta_0 < x < c + \delta_0$일 때라는 것이다. $\blacksquare$
:::

## 예시와 반례

:::example[제곱의 극한]
$f(x) = x x$로 정한 $f : \mathbb{R} \to \mathbb{R}$와 실수 $c$를 생각합니다. $\mathbb{R}$은 [[interval|구간]]이므로 [[cluster-point]]의 (6)에 의해 $c$는 $\mathbb{R}$의 집적점입니다. $\lim_{x \to c} x x = c c$임을 보입니다. 아래에서 "순서 성질"은 [[order-properties-of-reals]], "절댓값"은 [[absolute-value]]의 번호입니다.

$K = 2|c| + 1$로 둡니다. 절댓값 (2)에 의해 $0 \le |c|$이므로 순서 성질 (4)의 (iv)에 의해 $0 \le 2|c|$이고, $0 < 1$을 더하면 $0 < K$입니다(순서 성질 (2)의 (iv)). 양의 실수 $\varepsilon$에 대하여 $\delta = \min\{1, \varepsilon K^{-1}\}$로 둡니다. 순서 성질 (6)의 (i)과 (W4)에 의해 $\varepsilon K^{-1}$은 양수이므로 $\delta$는 양수입니다.

$x \ne c$이고 $|x - c| < \delta$라 합시다. $|x - c| < 1$이므로 [[triangle-inequality|삼각부등식]]의 (1)에 의해 $|x| = |(x - c) + c| \le |x - c| + |c| < 1 + |c|$이고, 다시 삼각부등식의 (1)에 의해 $|x + c| \le |x| + |c| < 2|c| + 1 = K$입니다. (K1)–(K3), (K12)로 전개하면 $x x - c c = (x + c)(x - c)$이므로, 절댓값 (4)와 순서 성질 (4)의 (iii)(곱하는 $|x - c|$는 $0$ 이상), 그리고 $|x - c| < \varepsilon K^{-1}$과 순서 성질 (4)의 (i)에 의해
$$
|x x - c c| = |x + c|\,|x - c| \le K\,|x - c| < K \varepsilon K^{-1} = \varepsilon
$$
입니다. 따라서 $f$는 $c$에서 $c c$로 수렴합니다. $\delta$를 $1$ 이하로 잡은 것은 $|x + c|$를 $c$만의 수 $K$로 누르기 위해서이고, 그 대가로 $\delta$가 $\varepsilon$뿐 아니라 $c$에도 기댑니다.
:::

:::example[극한과 함숫값이 다르다]
$f(x) = 2x$ ($x \ne 1$일 때), $f(1) = 5$로 정한 $f : \mathbb{R} \to \mathbb{R}$를 생각합니다. 위 예시와 같은 이유로 $1$은 $\mathbb{R}$의 집적점입니다. 먼저 $g(x) = 2x$로 정한 $g : \mathbb{R} \to \mathbb{R}$가 $1$에서 $2$로 수렴함을 봅니다. 양의 실수 $\varepsilon$에 대하여 $\delta = \varepsilon 2^{-1}$로 두면, $|x - 1| < \delta$인 $x$에서 [[absolute-value|절댓값]]의 (4)에 의해 $|2x - 2| = |2|\,|x - 1| = 2|x - 1| < 2 \cdot \varepsilon 2^{-1} = \varepsilon$입니다([[order-properties-of-reals]]의 (4)의 (i)). $1$과 다른 모든 실수 $x$에서 $f(x) = g(x)$이므로 이 항목의 (5)에 의해 $f$도 $1$에서 $2$로 수렴합니다. 곧 $\lim_{x \to 1} f(x) = 2$이지만 $f(1) = 5$입니다.
:::

:::counterexample[계단 함수는 $0$에서 수렴하지 않는다]
$H(x) = 0$ ($x < 0$일 때), $H(x) = 1$ ($0 \le x$일 때)로 정한 $H : \mathbb{R} \to \mathbb{R}$를 생각합니다. $\mathbb{R}$은 구간이므로 [[cluster-point]]의 (6)에 의해 $0$은 $\mathbb{R}$의 집적점입니다. 실수 $L$을 아무것이나 잡고 (1)이 $\varepsilon = 2^{-1}$로 성립함을 보입니다. 양의 실수 $\delta$를 잡고 $t = \delta 2^{-1}$로 두면 $0 < t < \delta$입니다. 두 점 $t$와 $-t$는 모두 $0$이 아니고 $0$과의 거리가 $t < \delta$이며, $H(t) = 1$, $H(-t) = 0$입니다.

만약 $|1 - L| < 2^{-1}$이고 $|0 - L| < 2^{-1}$이라면, [[triangle-inequality|삼각부등식]]의 (3)에 의해 $1 = |(1 - L) - (0 - L)| \le |1 - L| + |0 - L| < 2^{-1} + 2^{-1} = 1$이 되어 [[real-order-axioms]]의 (W1)에 어긋납니다. 따라서 $|H(t) - L| \ge 2^{-1}$이거나 $|H(-t) - L| \ge 2^{-1}$이고, 그 점이 (1)의 $x$입니다. $\delta$와 $L$은 임의였으므로 $H$는 $0$에서 어떤 실수로도 수렴하지 않습니다. $0$의 오른쪽 값과 왼쪽 값이 서로 $1$만큼 떨어져 있어서, 하나의 $L$이 양쪽 모두에서 $2^{-1}$보다 가까울 수 없습니다.
:::

:::counterexample[집적점이 아닌 점에서는 모든 수가 조건을 만족한다]
$S = \mathbb{N}$이고 $f : \mathbb{N} \to \mathbb{R}$가 아무 실함수라 합시다. $c = 2^{-1}$은 $\mathbb{N}$의 집적점이 아닙니다. 자연수 $x$는 [[prime-number]]의 (Z1)에 의해 $1 \le x$이므로 ([[order-properties-of-reals]]의 (10)) $x - 2^{-1} \ge 1 - 2^{-1} = 2^{-1} > 0$이고, $|x - 2^{-1}| \ge 2^{-1}$이기 때문입니다. 그래서 정의의 조건에서 $\delta = 2^{-1}$로 두면 "$x \in \mathbb{N}$, $x \ne c$, $|x - c| < \delta$"인 $x$가 없어 조건이 아무 $L$에 대해서나, 아무 $\varepsilon$에 대해서나 참이 됩니다. 정의를 집적점에서만 쓰는 까닭이 이것이고, 이 항목의 정의는 이런 $c$에서 "수렴한다"는 말을 쓰지 않습니다.
:::

## 확인 질문

:::check[$f(x) = 3x - 1$로 정한 $f : \mathbb{R} \to \mathbb{R}$는 $2$에서 어떤 수로 수렴하는가? 주어진 $\varepsilon$에 대해 $\delta$를 어떻게 잡는가?]
$5$로 수렴합니다. 양의 실수 $\varepsilon$에 대하여 $\delta = \varepsilon 3^{-1}$로 잡습니다. $|x - 2| < \delta$이면 $(3x - 1) - 5 = 3(x - 2)$이므로 [[absolute-value|절댓값]]의 (4)에 의해 $|f(x) - 5| = 3|x - 2| < 3 \varepsilon 3^{-1} = \varepsilon$입니다. 곧 $\lim_{x \to 2} (3x - 1) = 5$입니다.
:::

:::check[위 반례의 계단 함수 $H$를 열린구간 $(0, 1)$로 제한한 $H|_{(0, 1)}$은 $0$에서 수렴하는가?]
수렴하고 극한은 $1$입니다. $0 \in [0, 1]$이므로 [[cluster-point]]의 (5)에 의해 $0$은 $(0, 1)$의 집적점입니다. $(0, 1)$의 모든 점 $x$에서 $H|_{(0, 1)}(x) = H(x) = 1$이므로 [[real-valued-function]]의 (2)에 의해 $H|_{(0, 1)}$은 $(0, 1)$ 위의 값이 $1$인 상수함수이고, (4)에 의해 $1$로 수렴합니다. $H$ 자신은 $0$에서 수렴하지 않으므로, (7)의 거꾸로("제한이 수렴하면 원래 함수도 수렴한다")는 성립하지 않습니다.
:::
