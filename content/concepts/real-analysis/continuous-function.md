---
title: 연속함수
title_en: Continuous Function
aliases: [연속, 불연속, 연속의 정의, continuity, continuous function, discontinuous, epsilon-delta continuity]
kind: definition
field: real-analysis
msc: ["26A15"]
level: undergrad
summary: 실함수 f 가 정의역의 점 c 에서 연속이라는 것을 ε–δ 로 정의하고, 그 부정, 집적점이 아닌 점에서는 늘 연속이라는 것, 집적점에서는 연속인 것이 극한이 f(c) 인 것과 같다는 것, 제한과 국소성, c 가까이에서의 부호와 유계를 증명한다.
requires: [subset, set-operations, quantifiers, negation-of-quantified-statements, negation-of-conditional, conditional-statement, logical-connectives, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, real-valued-function, cluster-point, limit-of-a-function]
sources:
  - ref: lebl-basic-analysis
    loc: 3.2.1절 Definition 3.2.1 과 그 뒤 두 문단 (p.122), Proposition 3.2.2 (i), (ii)와 그 증명 (p.122–123), Example 3.2.10 (p.125–126), Example 3.2.13 (p.127), 연습문제 3.2.7, 3.2.8, 3.2.11 (p.128)
    checked: original
    note: "출처의 Definition 3.2.1(p.122)은 c ∈ S 에서 '모든 ε > 0 에 대해 δ > 0 이 있어 x ∈ S 이고 |x − c| < δ 이면 |f(x) − f(c)| < ε' 일 때 f 가 c 에서 연속이라 하고, 모든 c ∈ S 에서 연속이면 연속함수, 모든 c ∈ A 에서 연속이면 A 에서 연속이라 한다. 출처는 δ 가 ε 뿐 아니라 c 에도 기댄다고 적는다. 이 항목의 정의는 같다. 출처는 불연속(discontinuous)을 3.2.3절(p.125)에서 정의한다. (1)의 부정의 꼴은 출처가 Proposition 3.2.2 (iii)의 증명(p.123)에서 적는 것과 같은 내용이다. (2), (3)은 출처의 Proposition 3.2.2 (i), (ii)(p.122–123)이고 증명 경로도 같다. 출처는 (i)을 'S ∩ (c − δ, c + δ) = {c} 인 δ' 로 쓰고 이 항목은 cluster-point 의 (2)의 꼴로 쓴다. Proposition 3.2.2 (iii)(수열로 본 연속)은 sequences-and-continuity 에서 한 방향만 다룬다. (4)는 출처에 명제로 없다(검색한 범위). (5)의 둘째 문장은 출처의 연습문제 3.2.7(p.128)이고, 출처는 p.122 에서 'A 에서 연속이면 f|_A 가 연속이지만 그 역은 성립하지 않는다(Example 3.2.13)'고 적는다. 반례 '한 점으로의 제한'은 출처의 Example 3.2.13(p.127; g(x) = 0 (x ≠ 0), g(0) = 1, A = {0})과 같은 함수, 같은 A 이다. (6)의 ⇐ 방향은 출처의 연습문제 3.2.8(p.128; (c − α, c + α) ⊂ S 일 때 f|_A 가 c 에서 연속이면 f 도 그렇다)을 일반의 S 로 넓힌 것이다. (7)은 출처의 연습문제 3.2.11(p.128; f : ℝ → ℝ 가 연속이고 f(c) > 0 이면 c 의 어떤 열린구간에서 f > 0)을 일반의 S 와 수 a, b 로 넓힌 것이다. (8)은 출처에 명제로 없다(검색한 범위). 예시 '계단 함수'는 출처의 Example 3.2.10(p.125; x < 0 이면 −1, x ≥ 0 이면 1)과 같은 꼴의 함수이고, 출처는 수열 −1/n 으로 불연속을 보이며 이 항목은 (1)로 보인다. 확인 질문은 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
실함수와 상수함수, 항등함수, 제한은 [[real-valued-function]]의 것이고, 집적점은 [[cluster-point]]의 것이며, 수렴과 기호 $\lim_{x \to c}$는 [[limit-of-a-function]]의 것이다. $S$를 $\mathbb{R}$의 부분집합, $f : S \to \mathbb{R}$를 $S$ 위의 실함수, $c$를 $S$의 원소라 하자.

**연속.** $f$가 $c$에서 **연속**(continuous at $c$)이라는 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 양의 실수 $\delta$가 있어, $x \in S$이고 $|x - c| < \delta$인 모든 $x$에서 $|f(x) - f(c)| < \varepsilon$일 때이다. [[quantifiers|한정 기호]]로 쓰면
$$
\forall \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \Rightarrow \exists \delta \in \mathbb{R},\ \bigl(\delta > 0 \land \forall x \in S,\ (|x - c| < \delta \Rightarrow |f(x) - f(c)| < \varepsilon)\bigr)\Bigr)
$$
가 참일 때이다. $\delta$는 $\varepsilon$과 $c$마다 따로 골라도 된다. $f$가 $c$에서 **불연속**(discontinuous at $c$)이라는 것은 정확히 $f$가 $c$에서 연속이 아닐 때이다. $A \subseteq S$일 때 $f$가 **$A$에서 연속**인 것은 정확히 $A$의 모든 원소에서 $f$가 연속일 때이고, $f$가 $S$에서 연속일 때 $f$를 **연속함수**(continuous function)라 한다. 연속은 정의역의 점에서만 말한다.

다음이 성립한다.

1. (연속이 아니라는 것) $f$가 $c$에서 불연속인 것은 정확히
   $$
   \exists \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \land \forall \delta \in \mathbb{R},\ \bigl(\delta > 0 \Rightarrow \exists x \in S,\ (|x - c| < \delta \land |f(x) - f(c)| \ge \varepsilon)\bigr)\Bigr)
   $$
   가 참일 때이다.
2. (집적점이 아닌 점) $c$가 $S$의 집적점이 아니면 $f$는 $c$에서 연속이다.
3. (집적점인 점) $c$가 $S$의 집적점이면, $f$가 $c$에서 연속인 것은 정확히 $f$가 $c$에서 $f(c)$로 수렴할 때, 곧 $\lim_{x \to c} f(x) = f(c)$일 때이다.
4. (상수함수와 항등함수) $S$ 위의 상수함수와 항등함수 $i_S$는 연속함수이다.
5. (제한) $A \subseteq S$이고 $c \in A$이며 $f$가 $c$에서 연속이면, $f|_A$도 $c$에서 연속이다. 따라서 $f$가 $A$에서 연속이면 $f|_A$는 연속함수이고, 특히 연속함수의 제한은 연속함수이다.
6. (국소성) $\delta_0$이 양의 실수이고 $A = \{x \in S : |x - c| < \delta_0\}$이면, $c \in A$이고, $f$가 $c$에서 연속인 것은 정확히 $f|_A$가 $c$에서 연속일 때이다.
7. ($c$ 가까이의 값) $f$가 $c$에서 연속이라 하자. 실수 $a$가 $a < f(c)$이면 어떤 양의 실수 $\delta$가 있어 $x \in S$이고 $|x - c| < \delta$인 모든 $x$에서 $a < f(x)$이다. 실수 $b$가 $f(c) < b$이면 같은 꼴로 $f(x) < b$인 $\delta$가 있다. 특히 $0 < f(c)$이면 어떤 양의 실수 $\delta$가 있어 $x \in S$, $|x - c| < \delta$인 모든 $x$에서 $0 < f(x)$이고, $f(c) \ne 0$이면 같은 꼴로 $f(x) \ne 0$인 $\delta$가 있다.
8. ($c$ 가까이에서 유계) $f$가 $c$에서 연속이면 어떤 양의 실수 $\delta$가 있어 $x \in S$이고 $|x - c| < \delta$인 모든 $x$에서 $|f(x)| < |f(c)| + 1$이다.
:::

:::english
Real-valued functions, constant functions, the identity function and restrictions are those of the entry on real-valued functions; cluster points are those of the entry on cluster points; and convergence and the symbol $\lim_{x \to c}$ are those of the entry on the limit of a function. Let $S$ be a subset of $\mathbb{R}$, $f : S \to \mathbb{R}$ a real-valued function on $S$, and $c$ an element of $S$.

**Continuity.** $f$ is **continuous at** $c$ exactly when for every positive real number $\varepsilon$ there is a positive real number $\delta$ such that $|f(x) - f(c)| < \varepsilon$ for every $x$ with $x \in S$ and $|x - c| < \delta$. In terms of quantifiers, exactly when
$$
\forall \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \Rightarrow \exists \delta \in \mathbb{R},\ \bigl(\delta > 0 \land \forall x \in S,\ (|x - c| < \delta \Rightarrow |f(x) - f(c)| < \varepsilon)\bigr)\Bigr)
$$
is true. $\delta$ may be chosen separately for each $\varepsilon$ and each $c$. $f$ is **discontinuous at** $c$ exactly when $f$ is not continuous at $c$. For $A \subseteq S$, $f$ is **continuous on** $A$ exactly when $f$ is continuous at every element of $A$, and when $f$ is continuous on $S$ we call $f$ a **continuous function**. Continuity is spoken of only at points of the domain.

The following hold.

1. (Not being continuous) $f$ is discontinuous at $c$ exactly when
   $$
   \exists \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \land \forall \delta \in \mathbb{R},\ \bigl(\delta > 0 \Rightarrow \exists x \in S,\ (|x - c| < \delta \land |f(x) - f(c)| \ge \varepsilon)\bigr)\Bigr)
   $$
   is true.
2. (Points that are not cluster points) If $c$ is not a cluster point of $S$, then $f$ is continuous at $c$.
3. (Cluster points) If $c$ is a cluster point of $S$, then $f$ is continuous at $c$ exactly when $f$ converges to $f(c)$ at $c$, that is, when $\lim_{x \to c} f(x) = f(c)$.
4. (Constant functions and the identity function) Constant functions on $S$ and the identity function $i_S$ are continuous functions.
5. (Restrictions) If $A \subseteq S$, $c \in A$, and $f$ is continuous at $c$, then $f|_A$ is also continuous at $c$. Hence if $f$ is continuous on $A$, then $f|_A$ is a continuous function; in particular, the restriction of a continuous function is a continuous function.
6. (Locality) If $\delta_0$ is a positive real number and $A = \{x \in S : |x - c| < \delta_0\}$, then $c \in A$, and $f$ is continuous at $c$ exactly when $f|_A$ is continuous at $c$.
7. (Values near $c$) Suppose $f$ is continuous at $c$. If a real number $a$ satisfies $a < f(c)$, then there is a positive real number $\delta$ such that $a < f(x)$ for every $x$ with $x \in S$ and $|x - c| < \delta$. If a real number $b$ satisfies $f(c) < b$, then there is $\delta$ of the same kind with $f(x) < b$. In particular, if $0 < f(c)$ there is a positive real number $\delta$ such that $0 < f(x)$ for every $x \in S$ with $|x - c| < \delta$, and if $f(c) \ne 0$ there is $\delta$ of the same kind with $f(x) \ne 0$.
8. (Bounded near $c$) If $f$ is continuous at $c$, then there is a positive real number $\delta$ such that $|f(x)| < |f(c)| + 1$ for every $x$ with $x \in S$ and $|x - c| < \delta$.
:::

## 직관

$f$가 $c$에서 연속이라는 것은 "$x$를 $c$에서 조금만 움직이면 $f(x)$도 $f(c)$에서 조금만 움직인다"는 뜻입니다. 온도 조절기에 비유하면, 원하는 온도 범위($f(c)$에서 $\varepsilon$ 안)를 정해 주면 다이얼을 $c$에서 얼마 이내($\delta$)로만 돌리라고 답할 수 있는 장치가 연속입니다. 비유가 맞지 않는 곳은 정의역입니다. 다이얼은 모든 위치로 돌릴 수 있지만, 연속의 정의는 정의역 $S$에 있는 $x$만 봅니다.

[[limit-of-a-function|함수의 극한]]과 비교하면 두 가지가 다릅니다. 연속은 정의역의 점 $c$에서만 말하고, 정의는 $x = c$도 빼지 않으며 극한 자리에 $f(c)$를 둡니다. 그래서 $c$가 집적점이면 연속은 "극한이 있고 그것이 $f(c)$"와 같고 (3), $c$가 집적점이 아니면 $c$ 가까이에 $c$ 말고 정의역의 점이 없어 연속은 저절로 성립합니다 (2).

(7)과 (8)은 연속이 한 점에서의 성질인데도 그 주변의 값에 대해 말해 줍니다. $f(c)$가 양수이면 $c$ 주변에서도 $f$는 양수이고, $c$ 주변에서 $f$는 유계입니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (8)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (8)"은 [[absolute-value]]의 번호, "집적점 (2)"는 [[cluster-point]]의 번호, "실함수 (6)"은 [[real-valued-function]]의 번호, "극한 (2)"는 [[limit-of-a-function]]의 번호, "이 항목의 (5)"는 위 진술의 번호이다. 두 양수 $p$, $q$의 $\min\{p, q\}$는 절댓값 (10)에 의해 $p$이거나 $q$이므로 양수이고 $p$와 $q$ 이하이다. 이것을 (ㄱ)이라 하자. 또 $x = c$이면 (K8)의 (ii)와 절댓값 (2)에 의해 $|x - c| = 0$이고 $|f(x) - f(c)| = 0$이다. 이것을 (ㄴ)이라 하자.

**1의 증명.** 정의의 명제를 바깥부터 부정한다. [[negation-of-quantified-statements]]의 1과 [[negation-of-conditional]]에 의해 바깥의 "$\forall \varepsilon,\ (\varepsilon > 0 \Rightarrow \cdots)$"의 부정은 "$\exists \varepsilon,\ (\varepsilon > 0 \land \lnot \cdots)$"와 진릿값이 같다. [[negation-of-quantified-statements]]의 2에 의해 "$\lnot \exists \delta,\ (\delta > 0 \land B)$"는 "$\forall \delta,\ \lnot(\delta > 0 \land B)$"와 같고, [[logical-connectives]]와 [[conditional-statement]]의 진리표에서 "$\lnot(P \land Q)$"와 "$P \Rightarrow \lnot Q$"는 둘 다 정확히 $P$, $Q$가 모두 참인 줄에서만 거짓이므로 이것은 "$\forall \delta,\ (\delta > 0 \Rightarrow \lnot B)$"와 같다. $B$는 "$\forall x \in S,\ (|x - c| < \delta \Rightarrow |f(x) - f(c)| < \varepsilon)$"이고, [[negation-of-quantified-statements]]의 1과 [[negation-of-conditional]]에 의해 $\lnot B$는 "$\exists x \in S,\ (|x - c| < \delta \land \lnot(|f(x) - f(c)| < \varepsilon))$"와 같으며, 순서 성질 (1)의 (iii)에 의해 마지막 부정은 $|f(x) - f(c)| \ge \varepsilon$이다. 한정 명제와 진리표로 만든 명제의 진릿값은 각 부분의 진릿값으로만 정해지므로([[quantifiers]], [[conditional-statement]], [[logical-connectives]]), 이 바꿈들을 이어 붙이면 (1)의 명제를 얻는다.

**2의 증명.** 집적점 (2)에 의해 $c$와 다른 $S$의 모든 원소 $x$에서 $|x - c| \ge \delta$인 양수 $\delta$가 있다. 양의 실수 $\varepsilon$에 대하여 이 $\delta$를 쓴다. $x \in S$이고 $|x - c| < \delta$이면 순서 성질 (1)의 (i)에 의해 $|x - c| \ge \delta$가 아니므로 $x = c$이고, (ㄴ)에 의해 $|f(x) - f(c)| = 0 < \varepsilon$이다.

**3의 증명.** $f$가 $c$에서 연속이라 하자. 양의 실수 $\varepsilon$에 대하여 연속의 정의가 주는 $\delta$를 쓰면, $x \in S$, $x \ne c$, $|x - c| < \delta$인 $x$에서도 $|f(x) - f(c)| < \varepsilon$이다. 따라서 $f$는 $c$에서 $f(c)$로 수렴한다. 거꾸로 $f$가 $c$에서 $f(c)$로 수렴한다고 하자. 양의 실수 $\varepsilon$에 대하여 $x \in S$, $x \ne c$, $|x - c| < \delta$이면 $|f(x) - f(c)| < \varepsilon$인 양수 $\delta$가 있다. $x \in S$, $|x - c| < \delta$인 $x$는 $x \ne c$이면 이 부등식을 만족하고, $x = c$이면 (ㄴ)에 의해 $|f(x) - f(c)| = 0 < \varepsilon$이다. 따라서 $f$는 $c$에서 연속이다. 둘째 표현은 기호 $\lim$의 약속([[limit-of-a-function]])이다.

**4의 증명.** $S$ 위의 값이 $k$인 상수함수 $u$와 $S$의 원소 $c$에 대하여 $\delta = 1$로 두면 모든 $x \in S$에서 $|u(x) - u(c)| = |k - k| = 0 < \varepsilon$이다. 항등함수에 대해서는 $\delta = \varepsilon$으로 두면 $|x - c| < \varepsilon$에서 $|i_S(x) - i_S(c)| = |x - c| < \varepsilon$이다.

**5의 증명.** 양의 실수 $\varepsilon$에 대하여 연속의 정의가 주는 $\delta$를 쓴다. $x \in A$이고 $|x - c| < \delta$이면 $A \subseteq S$이므로 $x \in S$이고, 실함수 (6)에 의해 $|f|_A(x) - f|_A(c)| = |f(x) - f(c)| < \varepsilon$이다. 둘째 문장은 첫 문장을 $A$의 모든 원소 $c$에 쓴 것이고, 셋째 문장은 $A$에서 연속인 것이 $f$가 연속함수일 때 성립하기 때문이다.

**6의 증명.** (ㄴ)에 의해 $|c - c| = 0 < \delta_0$이므로 $c \in A$이다. $f$가 $c$에서 연속이면 이 항목의 (5)에 의해 $f|_A$도 그렇다. 거꾸로 $f|_A$가 $c$에서 연속이라 하자. 양의 실수 $\varepsilon$에 대하여 $x \in A$, $|x - c| < \delta'$이면 $|f|_A(x) - f|_A(c)| < \varepsilon$인 양수 $\delta'$이 있다. $\delta = \min\{\delta', \delta_0\}$로 두면 (ㄱ)에 의해 양수이다. $x \in S$, $|x - c| < \delta$이면 순서 성질 (1)의 (v)에 의해 $|x - c| < \delta_0$이므로 $x \in A$이고 $|x - c| < \delta'$이므로, 실함수 (6)에 의해 $|f(x) - f(c)| = |f|_A(x) - f|_A(c)| < \varepsilon$이다.

**7의 증명.** $a < f(c)$이면 순서 성질 (3)의 (i)에 의해 $\varepsilon = f(c) - a$는 양수이다. 연속의 정의가 주는 $\delta$를 쓰면 $x \in S$, $|x - c| < \delta$인 $x$에서 $|f(x) - f(c)| < \varepsilon$이고, 절댓값 (8)에 의해 $f(c) - \varepsilon < f(x)$이며 (K12)의 (iv), (K9), (K2), (K8)의 (ii), (K4)에 의해 $f(c) - \varepsilon = a$이다. $f(c) < b$이면 $\varepsilon = b - f(c)$로 두고 같은 $x$에서 절댓값 (8)에 의해 $f(x) < f(c) + \varepsilon = b$이다((K1), (K2), (K8)의 (ii), (K4)). 셋째 문장의 앞부분은 첫 문장을 $a = 0$으로 쓴 것이다. $f(c) \ne 0$이면 순서 성질 (1)의 (iii)과 $\le$의 뜻에 의해 $0 < f(c)$이거나 $f(c) < 0$이고, 앞의 경우는 방금 본 것, 뒤의 경우는 둘째 문장을 $b = 0$으로 쓴 것이며, 어느 경우든 순서 성질 (1)의 (i)에 의해 $f(x) \ne 0$이다.

**8의 증명.** 순서 성질 (5)의 (ii)에 의해 $1$은 양수이므로, 연속의 정의를 $\varepsilon = 1$로 쓴 $\delta$가 있다. $x \in S$, $|x - c| < \delta$이면 $|f(x) - f(c)| < 1$이고, (K2), (K8)의 (ii), (K4)에 의해 $f(x) = (f(x) - f(c)) + f(c)$이므로 [[triangle-inequality|삼각부등식]]의 (1)과 순서 성질 (2)의 (iv), (K1)에 의해 $|f(x)| \le |f(x) - f(c)| + |f(c)| < 1 + |f(c)| = |f(c)| + 1$이다. $\blacksquare$
:::

## 예시와 반례

:::example[계단 함수는 $0$에서만 불연속이다]
$H(x) = 0$ ($x < 0$일 때), $H(x) = 1$ ($0 \le x$일 때)로 정한 $H : \mathbb{R} \to \mathbb{R}$를 생각합니다. 아래에서 "순서 성질"은 [[order-properties-of-reals]]의 번호입니다.

**$0$에서 불연속.** (1)을 $\varepsilon = 2^{-1}$로 확인합니다. 양의 실수 $\delta$를 잡고 $x = -2^{-1}\delta$로 두면 순서 성질 (8)과 (3)의 (ii)에 의해 $x < 0$이고 $|x - 0| = 2^{-1}\delta < \delta$이며, $|H(x) - H(0)| = |0 - 1| = 1 \ge 2^{-1}$입니다.

**$0$이 아닌 점에서 연속.** $0 < c$이면 $\delta = c$로 둡니다. $|x - c| < c$이면 [[absolute-value|절댓값]]의 (8)에 의해 $c - c < x$, 곧 $0 < x$이므로 $H(x) = 1 = H(c)$이고 $|H(x) - H(c)| = 0 < \varepsilon$입니다. $c < 0$이면 $\delta = -c$로 두면 $|x - c| < -c$에서 $x < c + (-c) = 0$이므로 $H(x) = 0 = H(c)$입니다.
:::

:::counterexample[한 점으로의 제한은 연속이어도 원래 함수는 불연속일 수 있다]
$g(x) = 0$ ($x \ne 0$일 때), $g(0) = 1$로 정한 $g : \mathbb{R} \to \mathbb{R}$와 $A = \{0\}$을 생각합니다. $0$은 $A$의 집적점이 아니므로(집적점의 정의에 필요한 "$0$과 다른 $A$의 원소"가 없습니다. [[cluster-point]]의 (2)를 $\delta = 1$로 씁니다) (2)에 의해 $g|_A$는 $0$에서 연속입니다. 그러나 $g$는 $0$에서 불연속입니다. 양의 실수 $\delta$마다 $x = 2^{-1}\delta$는 $0$이 아니고 $|x - 0| < \delta$이며 $|g(x) - g(0)| = |0 - 1| = 1 \ge 2^{-1}$이므로 (1)이 $\varepsilon = 2^{-1}$로 성립합니다. 따라서 (5)의 거꾸로("제한이 $c$에서 연속이면 $f$도 $c$에서 연속")는 성립하지 않습니다. 제한하는 집합이 $c$를 포함하는 $\{x \in S : |x - c| < \delta_0\}$ 꼴이면 (6)에 의해 거꾸로도 성립합니다.
:::

## 확인 질문

:::check[$f$가 $c$에서 연속이고 $f(c) = 3$이면, $x \in S$이고 $|x - c| < \delta$인 모든 $x$에서 $2 < f(x) < 4$인 양수 $\delta$가 있는가?]
있습니다. (7)을 $a = 2$와 $b = 4$에 쓰면 양수 $\delta_1$, $\delta_2$가 나오고, $\delta = \min\{\delta_1, \delta_2\}$로 두면 $|x - c| < \delta$인 $x$에서 두 부등식이 모두 성립합니다([[absolute-value|절댓값]]의 (10)). 연속의 정의를 $\varepsilon = 1$로 쓴 것과 같습니다.
:::

:::check[$S = \{0\} \cup \{x \in \mathbb{R} : 1 \le x \le 2\}$이고 $f(0) = 5$, $1 \le x \le 2$에서 $f(x) = x$로 정한 함수 $f : S \to \mathbb{R}$는 $0$에서 연속인가?]
연속입니다. $S$의 원소 가운데 $0$과 다른 것은 모두 $1$ 이상이므로 $|x - 0| \ge 1$이고, [[cluster-point]]의 (2)에 의해 $0$은 $S$의 집적점이 아닙니다. (2)에 의해 $f$는 $0$에서 연속입니다. $f(0)$의 값이 무엇이어도 같습니다.
:::
