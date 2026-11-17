---
title: 고른 연속
title_en: Uniform Continuity
aliases: [균등연속, 평등연속, 고르게 연속, 고르게 연속인 함수, uniformly continuous, uniformly continuous function]
kind: definition
field: real-analysis
msc: ["26A15"]
level: undergrad
summary: 실함수 f 가 고르게 연속이라는 것은 모든 ε > 0 에 대해 점에 상관없는 δ > 0 이 있어 정의역의 두 점의 거리가 δ 미만이면 함숫값의 거리가 ε 미만이라는 것이다. 그 부정을 적고, 고르게 연속이면 연속함수이며, 제한, 상수함수와 항등함수, 합과 상수배에서 고른 연속이 유지됨을 보인다.
requires: [subset, quantifiers, negation-of-quantified-statements, negation-of-conditional, conditional-statement, logical-connectives, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, power-of-a-real-number, interval, real-valued-function, continuous-function, continuity-of-sum-and-product]
sources:
  - ref: lebl-basic-analysis
    loc: 3.4.1절, Definition 3.4.1 과 그 뒤 문단 (p.138), Example 3.4.2, Example 3.4.3 (p.138), 연습문제 3.4.1, 3.4.11 (p.143)
    checked: original
    note: "정의는 출처의 Definition 3.4.1(p.138)과 같다. 출처는 정의 뒤 문단에서 고르게 연속인 함수는 연속이어야 한다(must be continuous)고 증명 없이 적는다. 이 항목은 그것을 (2)로 증명했다. (3)의 제한은 출처가 연습문제 3.4.1(p.143)로, (5)의 합과 상수배는 연습문제 3.4.11(p.143)로 둔다. (1)의 부정의 꼴은 출처가 Theorem 3.4.4 의 증명(p.139)에서 적는 것과 같다. (4)는 출처에 없다(검색한 범위). 출처의 문장에서 x 와 c 를 똑같이 다룬다는 지적(p.138)은 직관에 같은 뜻으로 적었다. 예시 '[0, 1] 위의 x²'는 출처의 Example 3.4.2(p.138)와 같은 함수, 같은 부등식, 같은 δ = ε/2 이다. 반례 'ℝ 위의 x²'는 출처가 같은 예 뒤에서 c = x + δ/2 로 두어 보이는 것과 같은 발상이다. 출처는 모든 x > 0 에서 x < ε/δ 가 되어 모순이라고 끝내고, 이 항목은 x = δ⁻¹ 로 두 점을 식으로 정해 아르키메데스 성질 없이 보인다. 반례 '(0, 1) 위의 1/x'는 출처의 Example 3.4.3(p.138)과 같은 함수이다. 출처는 y = x + δ/2 로 두고 작은 x 에서 δ/2 < x 가 될 수 없음을 보이며, 이 항목은 t = min{δ, 1/2} 로 두 점 t/2, t 를 식으로 정했다. 확인 질문은 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
실함수, 상수함수, 항등함수, 합 $f + g$, 상수배 $kf$, 제한 $f|_A$는 [[real-valued-function]]의 것이고, 연속과 연속함수는 [[continuous-function]]의 것이다. $S$를 $\mathbb{R}$의 부분집합, $f : S \to \mathbb{R}$를 $S$ 위의 실함수라 하자.

**고른 연속.** $f$가 **고르게 연속**(uniformly continuous)이라는 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 양의 실수 $\delta$가 있어, $x \in S$, $c \in S$이고 $|x - c| < \delta$인 모든 $x$, $c$에서 $|f(x) - f(c)| < \varepsilon$일 때이다. [[quantifiers|한정 기호]]로 쓰면
$$
\forall \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \Rightarrow \exists \delta \in \mathbb{R},\ \bigl(\delta > 0 \land \forall x \in S,\ \forall c \in S,\ (|x - c| < \delta \Rightarrow |f(x) - f(c)| < \varepsilon)\bigr)\Bigr)
$$
가 참일 때이다. $f$가 연속함수라는 것은 "$\forall c \in S,\ \forall \varepsilon,\ (\varepsilon > 0 \Rightarrow \exists \delta, \dots)$"의 꼴이어서 $\delta$가 $\varepsilon$과 $c$에 따라 정해져도 되지만, 고른 연속에서는 $\forall c$가 $\exists \delta$ 뒤에 오므로 $\delta$는 $\varepsilon$에만 따라 정해지고 $S$의 모든 점 $c$에서 함께 쓰인다.

다음이 성립한다. 아래에서 $k$는 실수이다.

1. (고르게 연속이 아니라는 것) $f$가 고르게 연속이 아닌 것은 정확히
   $$
   \exists \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \land \forall \delta \in \mathbb{R},\ \bigl(\delta > 0 \Rightarrow \exists x \in S,\ \exists c \in S,\ (|x - c| < \delta \land |f(x) - f(c)| \ge \varepsilon)\bigr)\Bigr)
   $$
   가 참일 때이다.
2. (연속) $f$가 고르게 연속이면 $f$는 $S$의 모든 점에서 연속이다. 곧 $f$는 연속함수이다.
3. (제한) $A \subseteq S$이고 $f$가 고르게 연속이면 $f|_A$도 고르게 연속이다.
4. (상수함수와 항등함수) $S$ 위의 상수함수와 항등함수 $i_S$는 고르게 연속이다.
5. (합과 상수배) $f$와 $g$가 $S$ 위의 고르게 연속인 실함수이면 $f + g$와 $kf$는 고르게 연속이다.
:::

:::english
Real-valued functions, constant functions, identity functions, the sum $f + g$, the scalar multiple $kf$ and the restriction $f|_A$ are those of the entry on real-valued functions; continuity and continuous functions are those of the entry on continuous functions. Let $S$ be a subset of $\mathbb{R}$ and let $f : S \to \mathbb{R}$ be a real-valued function on $S$.

**Uniform continuity.** The function $f$ is **uniformly continuous** exactly when for every positive real number $\varepsilon$ there is a positive real number $\delta$ such that $|f(x) - f(c)| < \varepsilon$ for all $x$, $c$ with $x \in S$, $c \in S$ and $|x - c| < \delta$; that is, when
$$
\forall \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \Rightarrow \exists \delta \in \mathbb{R},\ \bigl(\delta > 0 \land \forall x \in S,\ \forall c \in S,\ (|x - c| < \delta \Rightarrow |f(x) - f(c)| < \varepsilon)\bigr)\Bigr)
$$
is true. That $f$ is a continuous function has the form "$\forall c \in S,\ \forall \varepsilon,\ (\varepsilon > 0 \Rightarrow \exists \delta, \dots)$", so $\delta$ may depend on $\varepsilon$ and $c$; in uniform continuity $\forall c$ comes after $\exists \delta$, so $\delta$ depends only on $\varepsilon$ and serves all points $c$ of $S$ at once.

The following hold. Below, $k$ is a real number.

1. (Not uniformly continuous) $f$ is not uniformly continuous exactly when
   $$
   \exists \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \land \forall \delta \in \mathbb{R},\ \bigl(\delta > 0 \Rightarrow \exists x \in S,\ \exists c \in S,\ (|x - c| < \delta \land |f(x) - f(c)| \ge \varepsilon)\bigr)\Bigr)
   $$
   is true.
2. (Continuity) If $f$ is uniformly continuous, then $f$ is continuous at every point of $S$; that is, $f$ is a continuous function.
3. (Restriction) If $A \subseteq S$ and $f$ is uniformly continuous, then $f|_A$ is uniformly continuous.
4. (Constant and identity functions) Constant functions on $S$ and the identity function $i_S$ are uniformly continuous.
5. (Sums and scalar multiples) If $f$ and $g$ are uniformly continuous real-valued functions on $S$, then $f + g$ and $kf$ are uniformly continuous.
:::

## 직관

연속은 "점마다 따로" 하는 약속이고, 고른 연속은 "모든 점에 한꺼번에" 하는 약속입니다. 오차 $\varepsilon$을 정해 주면, 연속함수는 점 $c$마다 "$c$에서 $\delta$ 안이면 된다"는 $\delta$를 하나씩 내놓습니다. 그런데 $c$를 옮겨 가면 그 $\delta$가 점점 작아져서 모든 점에 함께 쓸 수 있는 양수가 없을 수도 있습니다. 고르게 연속인 함수는 그런 일이 없어서 $\varepsilon$ 하나에 $\delta$ 하나가 정해지고, 정의역의 어디서든 "두 점의 거리가 $\delta$ 미만이면 함숫값의 거리가 $\varepsilon$ 미만"입니다. 정의에서 $x$와 $c$는 같은 자격의 두 점이고, $c$가 따로 고정된 점이 아닙니다.

공장의 생산 공차에 비유할 수 있습니다. 부품의 치수 오차를 $\varepsilon$ 안에 두려면 기계의 위치 오차를 $\delta$ 안에 두어야 한다고 할 때, 연속은 작업대의 자리마다 필요한 $\delta$가 다를 수 있다는 것이고, 고른 연속은 작업대 전체에 한 가지 $\delta$를 붙여 둘 수 있다는 것입니다. 비유가 맞는 곳은 "$\delta$가 위치에 따라 달라지는가"의 차이이고, 맞지 않는 곳은 실제 작업대는 크기가 정해져 있지만 정의역은 $\mathbb{R}$처럼 끝이 없을 수도 있다는 점입니다. 아래 반례 둘은 끝이 없는 정의역과 끝점이 빠진 정의역에서 $\delta$가 점점 작아져야 하는 경우입니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (8)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (10)"은 [[absolute-value]]의 번호, "실함수 (4)"는 [[real-valued-function]]의 번호, "이 항목의 (1)"은 위 진술의 번호이다. 두 양수 $p$, $q$의 $\min\{p, q\}$는 절댓값 (10)에 의해 $p$이거나 $q$이므로 양수이고, $p$ 이하이며 $q$ 이하이다.

**1의 증명.** 정의의 명제를 바깥부터 부정한다. [[negation-of-quantified-statements]]의 1과 [[negation-of-conditional]]에 의해 바깥의 "$\forall \varepsilon,\ (\varepsilon > 0 \Rightarrow \cdots)$"의 부정은 "$\exists \varepsilon,\ (\varepsilon > 0 \land \lnot \cdots)$"와 진릿값이 같다. [[negation-of-quantified-statements]]의 2에 의해 "$\lnot \exists \delta,\ (\delta > 0 \land B)$"는 "$\forall \delta,\ \lnot(\delta > 0 \land B)$"와 같고, [[logical-connectives]]와 [[conditional-statement]]의 진리표에서 "$\lnot(P \land Q)$"와 "$P \Rightarrow \lnot Q$"는 둘 다 정확히 $P$, $Q$가 모두 참인 줄에서만 거짓이므로 이것은 "$\forall \delta,\ (\delta > 0 \Rightarrow \lnot B)$"와 같다. $B$는 "$\forall x \in S,\ \forall c \in S,\ (|x - c| < \delta \Rightarrow |f(x) - f(c)| < \varepsilon)$"이다. [[negation-of-quantified-statements]]의 1을 $\forall x$에, 다시 $\forall c$에 쓰고 [[negation-of-conditional]]을 쓰면 $\lnot B$는 "$\exists x \in S,\ \exists c \in S,\ (|x - c| < \delta \land \lnot(|f(x) - f(c)| < \varepsilon))$"와 같으며, 순서 성질 (1)의 (iii)에 의해 마지막 부정은 $|f(x) - f(c)| \ge \varepsilon$이다. 한정 명제와 진리표로 만든 명제의 진릿값은 각 부분의 진릿값으로만 정해지므로([[quantifiers]], [[conditional-statement]], [[logical-connectives]]), 이 바꿈들을 이어 붙이면 (1)의 명제를 얻는다.

**2의 증명.** $f$가 고르게 연속이라 하고 $c \in S$와 양의 실수 $\varepsilon$을 잡는다. 고른 연속의 정의가 이 $\varepsilon$에 대해 주는 양의 실수 $\delta$를 쓴다. $x \in S$이고 $|x - c| < \delta$이면, 정의의 두 점으로 이 $x$와 이 $c$를 쓰면 $|f(x) - f(c)| < \varepsilon$이다. 이것이 [[continuous-function]]의 정의의 "$f$가 $c$에서 연속"이다. $c$는 $S$의 임의의 원소였으므로 $f$는 연속함수이다.

**3의 증명.** 실함수 (6)에 의해 $f|_A$는 $A$ 위의 실함수이고 모든 $x \in A$에서 $f|_A(x) = f(x)$이다. 양의 실수 $\varepsilon$에 대하여 $f$의 고른 연속이 주는 $\delta$를 쓴다. $x$, $c \in A$이고 $|x - c| < \delta$이면, $A \subseteq S$이므로 $x$, $c \in S$이고 $\bigl|(f|_A)(x) - (f|_A)(c)\bigr| = |f(x) - f(c)| < \varepsilon$이다.

**4의 증명.** $S$ 위의 값이 $k$인 상수함수 $u$에 대하여, 양의 실수 $\varepsilon$이 주어지면 $\delta = 1$로 둔다. 모든 $x$, $c \in S$에서 (K5), (K8)의 (ii)와 절댓값 (2)에 의해 $|u(x) - u(c)| = |k - k| = 0 < \varepsilon$이다. 항등함수에 대해서는 $\delta = \varepsilon$으로 두면, $x$, $c \in S$이고 $|x - c| < \varepsilon$일 때 실함수 (3)에 의해 $|i_S(x) - i_S(c)| = |x - c| < \varepsilon$이다.

**5의 증명.** *합.* 양의 실수 $\varepsilon$을 잡는다. 순서 성질 (8)에 의해 $0 < \varepsilon/2$이므로, $f$와 $g$의 고른 연속에 의해 양의 실수 $\delta_1$, $\delta_2$가 있어 $x$, $c \in S$이고 $|x - c| < \delta_1$이면 $|f(x) - f(c)| < \varepsilon/2$, $|x - c| < \delta_2$이면 $|g(x) - g(c)| < \varepsilon/2$이다. $\delta = \min\{\delta_1, \delta_2\}$로 두면 $\delta$는 양수이다. $x$, $c \in S$이고 $|x - c| < \delta$이면 $|x - c| < \delta_1$이고 $|x - c| < \delta_2$이다(순서 성질 (1)의 (v)). 실함수 (4)와 (K1), (K2), (K12)의 (iv)에 의해 $(f + g)(x) - (f + g)(c) = (f(x) - f(c)) + (g(x) - g(c))$이므로, [[triangle-inequality|삼각부등식]]의 (1)과 순서 성질 (2)의 (iv)에 의해
$$
\bigl|(f + g)(x) - (f + g)(c)\bigr| \le |f(x) - f(c)| + |g(x) - g(c)| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon
$$
이고, 순서 성질 (1)의 (v)에 의해 $\bigl|(f + g)(x) - (f + g)(c)\bigr| < \varepsilon$이다.

*상수배.* 양의 실수 $\varepsilon$을 잡는다. 절댓값 (2)에 의해 $0 \le |k|$이고, 순서 성질 (5)의 (ii)의 $0 < 1$과 (2)의 (ii)에 의해 $|k| < |k| + 1$이므로 순서 성질 (1)의 (v)에 의해 $0 < |k| + 1$이다. $\eta = \varepsilon\,(|k| + 1)^{-1}$로 두면 순서 성질 (6)의 (i)과 (W4)에 의해 $0 < \eta$이다. $f$의 고른 연속에 의해 양의 실수 $\delta$가 있어 $x$, $c \in S$이고 $|x - c| < \delta$이면 $|f(x) - f(c)| < \eta$이다. 그런 $x$, $c$에서 실함수 (4)와 (K3), (K12)의 (ii)에 의해 $(kf)(x) - (kf)(c) = k\,(f(x) - f(c))$이고 절댓값 (4)에 의해 그 절댓값은 $|k|\,|f(x) - f(c)|$이다. $0 \le |k|$이므로 순서 성질 (4)의 (iii)에 의해 $|k|\,|f(x) - f(c)| \le |k|\,\eta$이고, $0 < \eta$와 $|k| < |k| + 1$에서 순서 성질 (4)의 (i)에 의해 $|k|\,\eta < (|k| + 1)\,\eta = \varepsilon$이다((K1), (K2), (K8)의 (iii), (K4)). 순서 성질 (1)의 (v)에 의해 $\bigl|(kf)(x) - (kf)(c)\bigr| < \varepsilon$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$[0, 1]$ 위의 $x^2$]
$f(x) = x^2$로 정한 $f : [0, 1] \to \mathbb{R}$는 고르게 연속입니다. 아래에서 "순서 성질"은 [[order-properties-of-reals]]의 번호이고, $x^2 = xx$는 [[power-of-a-real-number]]의 (1)입니다.

$x$, $c \in [0, 1]$이면 (K1)–(K3), (K12)로 전개해 $x^2 - c^2 = (x + c)(x - c)$이고, [[absolute-value|절댓값]]의 (4)에 의해 $|x^2 - c^2| = |x + c|\,|x - c|$입니다. $0 \le x \le 1$, $0 \le c \le 1$이므로 순서 성질 (2)의 (iii)에 의해 $0 \le x + c \le 2$이고, 절댓값 (1)에 의해 $|x + c| = x + c \le 2$입니다. 절댓값 (2)의 $0 \le |x - c|$와 순서 성질 (4)의 (iii)에 의해 $|x^2 - c^2| \le 2\,|x - c|$입니다.

양의 실수 $\varepsilon$이 주어지면 $\delta = \varepsilon/2$로 둡니다(순서 성질 (8)에 의해 양수). $|x - c| < \delta$이면 순서 성질 (4)의 (i)에 의해 $2\,|x - c| < 2\delta = \varepsilon$이고, 순서 성질 (1)의 (v)에 의해 $|f(x) - f(c)| < \varepsilon$입니다. 이 $\delta$는 $x$와 $c$가 $[0, 1]$의 어디에 있든 같습니다.
:::

:::counterexample[$\mathbb{R}$ 위의 $x^2$: 연속이지만 고르게 연속이 아니다]
$g(x) = x^2$으로 정한 $g : \mathbb{R} \to \mathbb{R}$는 [[continuous-function]]의 (4)와 [[continuity-of-sum-and-product|연속함수의 연산]]의 (3)에 의해 연속함수입니다(항등함수끼리의 곱이고, 모든 $x$에서 $x^2 = xx$). 그러나 고르게 연속이 아닙니다. 이 항목의 (1)의 꼴을 $\varepsilon = 1$로 보입니다. 아래에서 "순서 성질"은 [[order-properties-of-reals]]의 번호입니다.

양의 실수 $\delta$를 아무것이나 잡고 $x = \delta^{-1}$, $c = \delta^{-1} + \delta/2$로 둡니다. 그러면 $c - x = \delta/2$이고 순서 성질 (8)에 의해 $0 < \delta/2 < \delta$이므로 [[absolute-value|절댓값]]의 (1), (3)에 의해 $|x - c| = \delta/2 < \delta$입니다. 또 (K1)–(K3), (K12)로 계산하면
$$
c^2 - x^2 = (c + x)(c - x) = \Bigl(2\delta^{-1} + \frac{\delta}{2}\Bigr)\frac{\delta}{2} = 1 + \frac{\delta\delta}{4}
$$
입니다($2\delta^{-1} \cdot \tfrac{\delta}{2} = \delta^{-1}\delta = 1$). 순서 성질 (5)의 (i)과 (6)의 (i)에 의해 $0 < \delta\delta/4$이므로 $1 < c^2 - x^2$이고, 절댓값 (1), (3)에 의해 $|g(x) - g(c)| = c^2 - x^2 > 1$, 곧 $|g(x) - g(c)| \ge 1$입니다. 어떤 $\delta$를 잡아도 거리가 $\delta$ 미만인데 함숫값의 거리가 $1$ 이상인 두 점이 있으므로, (1)에 의해 $g$는 고르게 연속이 아닙니다. 두 점은 $\delta$가 작을수록 오른쪽으로 멀리 갑니다. 위 예시와 비교하면 정의역을 $[0, 1]$로 줄인 제한은 고르게 연속입니다.
:::

:::counterexample[$(0, 1)$ 위의 $1/x$: 연속이지만 고르게 연속이 아니다]
$h(x) = x^{-1}$로 정한 $h : (0, 1) \to \mathbb{R}$를 봅니다. $(0, 1)$ 위의 항등함수는 [[continuous-function]]의 (4)에 의해 연속함수이고 $(0, 1)$의 모든 점에서 $0$이 아니므로, [[continuity-of-sum-and-product|연속함수의 연산]]의 (3)에 의해 그 역수인 $h$는 연속함수입니다. 그러나 $h$는 고르게 연속이 아닙니다. (1)의 꼴을 $\varepsilon = 1$로 보입니다. 아래에서 "순서 성질"은 [[order-properties-of-reals]]의 번호입니다.

양의 실수 $\delta$를 아무것이나 잡고 $t = \min\{\delta, 2^{-1}\}$, $x = t/2$, $c = t$로 둡니다. [[absolute-value|절댓값]]의 (10)에 의해 $t$는 $\delta$이거나 $2^{-1}$이므로 양수이고, $t \le \delta$, $t \le 2^{-1}$입니다. 순서 성질 (8)에 의해 $0 < 2^{-1} < 1$이고 $0 < t/2 < t$이므로 $0 < x < c \le 2^{-1} < 1$, 곧 $x$, $c \in (0, 1)$입니다. $c - x = t/2$이므로 $|x - c| = t/2 < t \le \delta$입니다(절댓값 (1), (3)). 한편 $x^{-1} = 2t^{-1}$이므로((K12)의 (vi)과 (K8)의 (iii)) $h(x) - h(c) = 2t^{-1} - t^{-1} = t^{-1}$입니다. $0 < t \le 2^{-1}$이므로 $t = 2^{-1}$이면 $t^{-1} = 2$이고, $t < 2^{-1}$이면 순서 성질 (6)의 (ii)에 의해 $2 < t^{-1}$입니다. 어느 경우든 $1 < 2 \le t^{-1}$이므로 $|h(x) - h(c)| = t^{-1} \ge 1$입니다. 따라서 (1)에 의해 $h$는 고르게 연속이 아닙니다. 두 점은 $\delta$가 작을수록 $0$ 쪽으로 다가갑니다.
:::

## 확인 질문

:::check[$x$에서의 값이 $|x|$인 함수 $\mathbb{R} \to \mathbb{R}$는 고르게 연속인가?]
그렇습니다. 양의 실수 $\varepsilon$이 주어지면 $\delta = \varepsilon$으로 둡니다. $|x - c| < \varepsilon$이면 [[triangle-inequality|삼각부등식]]의 (2)에 의해 $\bigl|\,|x| - |c|\,\bigr| \le |x - c| < \varepsilon$이고, [[order-properties-of-reals]]의 (1)의 (v)에 의해 $\bigl|\,|x| - |c|\,\bigr| < \varepsilon$입니다. 이 $\delta$는 $c$에 따라 달라지지 않습니다.
:::

:::check[$S$가 원소 하나인 집합이면 $S$ 위의 모든 실함수는 고르게 연속인가?]
그렇습니다. $S = \{p\}$이면 $x$, $c \in S$인 두 점은 $x = c = p$뿐이므로, 양의 실수 $\varepsilon$에 대하여 $\delta = 1$로 두면 $|f(x) - f(c)| = |f(p) - f(p)| = 0 < \varepsilon$입니다([[absolute-value|절댓값]]의 (2)). 정의는 $S$의 두 점에 대해서만 무엇을 요구하므로 점이 하나뿐이면 요구가 늘 채워집니다.
:::
