---
title: 거듭제곱 함수와 제곱근 함수의 연속
title_en: Continuity of Power Functions and the Square Root
aliases: [거듭제곱 함수의 연속, 제곱근 함수의 연속, 다항식 꼴의 함수의 연속, continuity of x^n, continuity of the square root]
kind: proposition
field: real-analysis
msc: ["26A15"]
level: undergrad
summary: 0 이상의 정수 n 에 대하여 x 에서의 값이 xⁿ 인 함수 ℝ → ℝ 는 연속함수이고, 0 이상인 실수 위에서 x 에서의 값이 √x 인 함수도 연속함수이다.
requires: [mathematical-induction, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, square-root-exists, power-of-a-real-number, real-valued-function, continuous-function, continuity-of-sum-and-product]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 3.2.1절 Example 3.2.3 뒤 문단과 Proposition 3.2.4 (p.123–124); 3.1절 연습문제 3.1.1 a) (p.120); 3.3절 Example 3.3.9 (p.134); 3.4절 Example 3.4.10 (p.142); 4.1절 Example 4.1.4 (p.156)
    checked: original
    note: "출처의 Proposition 3.2.4(p.123–124)는 다항식 f(x) = a_d x^d + a_{d−1} x^{d−1} + ⋯ + a_1 x + a_0 이 연속이라는 것이고, 출처는 c 로 수렴하는 수열을 잡아 수열의 극한의 사칙연산과 Proposition 3.2.2 (iii)으로 증명한다. 출처는 그 바로 앞(p.123)에서 lim x² = c² 를 이미 보였으므로 x² 이 연속이라고 적는다. 이 사이트는 실수의 유한 합을 쓰지 않으므로 일반 다항식을 정의하지 않고, (1)은 거듭제곱 함수 xⁿ 만 진술하며 n 에 대한 귀납과 continuity-of-sum-and-product 의 곱으로 증명한다. 구체적인 다항식 꼴의 함수는 예시처럼 합·곱·상수배의 연속을 몇 번 써서 다룬다. 예시의 x³ − 2x² + x − 1 은 출처의 Example 3.3.9(p.134; 이분법의 예)의 식이다. (2)의 제곱근 함수의 연속은 출처에 명제로 없다(검색한 범위. 출처의 Proposition 3.6.6(p.152)을 0 이상인 실수 위의 x² 에 쓰면 나오지만 출처는 그렇게 적지 않는다). 출처의 연습문제 3.1.1 a)(p.120)는 c ≥ 0 에서 lim √x 를 구하라는 것이고, (2)는 그 극한이 √c 라는 것과 같은 내용이다. 증명에 쓴 식 √x − √c = (x − c)/(√x + √c) 는 출처가 Example 3.4.10(p.142; [1, ∞) 위의 √x 가 립시츠 연속)과 Example 4.1.4(p.156; √x 의 미분)에서 쓰는 식과 같다. 확인 질문은 출처에 없다(검색한 범위)."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 증명의 수학 오류 없음. 가산 선택 없이 ε–δ 로 직접 증명. 출처 쪽수와 메모, 기호 |f| 와 'c 가까이에서'의 구별을 고침"
added: 2026-11-17
---

:::statement
실함수와 그 연산은 [[real-valued-function]]의 것이고, 연속은 [[continuous-function]]의 것이며, 거듭제곱 $x^n$은 [[power-of-a-real-number]]의 것이고, 제곱근 $\sqrt{a}$는 [[square-root-exists]]의 것이다.

1. (거듭제곱 함수) $n$이 $0$ 이상인 정수일 때 $p_n(x) = x^n$으로 정한 함수 $p_n : \mathbb{R} \to \mathbb{R}$는 연속함수이다. ($p_0$은 값이 $1$인 상수함수이고 $p_1$은 항등함수이다.)
2. (제곱근 함수) $T = \{x \in \mathbb{R} : 0 \le x\}$로 두면, $q(x) = \sqrt{x}$로 정한 함수 $q : T \to \mathbb{R}$는 연속함수이다.
:::

:::english
Real-valued functions and their operations are those of the entry on real-valued functions; continuity is that of the entry on continuous functions; powers $x^n$ are those of the entry on powers of a real number; and square roots $\sqrt{a}$ are those of the entry on the existence of square roots.

1. (Power functions) For an integer $n \ge 0$, the function $p_n : \mathbb{R} \to \mathbb{R}$ defined by $p_n(x) = x^n$ is a continuous function. ($p_0$ is the constant function with value $1$, and $p_1$ is the identity function.)
2. (The square root function) With $T = \{x \in \mathbb{R} : 0 \le x\}$, the function $q : T \to \mathbb{R}$ defined by $q(x) = \sqrt{x}$ is a continuous function.
:::

## 직관

$x^{n+1} = x^n \cdot x$이므로 $p_{n+1}$은 $p_n$과 항등함수의 곱이고, 연속함수의 곱은 연속입니다. 그래서 $p_0$(상수)과 $p_1$(항등함수)에서 시작해 한 단계씩 올라가면 모든 $p_n$이 연속입니다. 계단을 오르는 것과 같습니다. 첫 계단에 설 수 있고 한 계단에서 다음 계단으로 오를 수 있으면 모든 계단에 닿습니다. 비유가 맞는 곳은 귀납법의 두 단계이고, 맞지 않는 곳은 계단은 유한하지만 $n$은 모든 $0$ 이상의 정수라는 점입니다.

제곱근에서는 $\sqrt{x} - \sqrt{c}$를 $x - c$로 누릅니다. $c > 0$이면 $(\sqrt{x} - \sqrt{c})(\sqrt{x} + \sqrt{c}) = x - c$이고 $\sqrt{x} + \sqrt{c}$가 $\sqrt{c}$ 이상이므로 $|\sqrt{x} - \sqrt{c}| \le |x - c|/\sqrt{c}$입니다. $c = 0$에서는 이 꼴을 쓸 수 없어 $\sqrt{x} < \varepsilon$인 것이 $x < \varepsilon\varepsilon$인 것과 같다는 것을 씁니다.

## 증명

:::idea
(1)은 $n$에 대한 귀납법으로, $p_{n+1} = p_n\,p_1$과 연속함수의 곱의 연속을 쓴다. (2)는 $c > 0$이면 $\delta = \varepsilon\sqrt{c}$, $c = 0$이면 $\delta = \varepsilon\varepsilon$으로 직접 보인다.
:::

:::hint
$p_{n+1}$과 $p_n\,p_1$이 같은 함수라는 것은 [[real-valued-function]]의 (2)로 값을 비교해 보인다.
:::

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (6)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (4)"는 [[absolute-value]]의 번호, "거듭제곱 (1)"은 [[power-of-a-real-number]]의 번호, "제곱근 (2)"는 [[square-root-exists]]의 번호, "연속 (4)"는 [[continuous-function]]의 번호이다.

**1의 증명.** 각 실수 $x$에서 $x^n$은 [[power-of-a-real-number|거듭제곱]]의 정의로 정해진 실수이므로, [[real-valued-function]]의 (1)에 의해 $p_n$은 $\mathbb{R}$ 위의 실함수이다. 거듭제곱의 정의에 의해 $x^0 = 1$이고 거듭제곱 (1)에 의해 $x^1 = x$이므로 $p_0$은 값이 $1$인 상수함수, $p_1$은 항등함수이다([[real-valued-function]]의 (2)).

$0$ 이상인 정수 $n$에 대하여 "$p_n$은 연속함수이다"를 시작점이 $0$인 [[mathematical-induction|수학적 귀납법]]으로 보인다. $n = 0$이면 $p_0$은 상수함수이므로 연속 (4)에 의해 연속함수이다. $p_n$이 연속함수라 하자. 모든 실수 $x$에서 거듭제곱의 정의에 의해 $p_{n+1}(x) = x^{n+1} = x^n \cdot x = p_n(x)\,p_1(x) = (p_n\,p_1)(x)$이므로 [[real-valued-function]]의 (2)에 의해 $p_{n+1} = p_n\,p_1$이다. $p_1$은 항등함수이므로 연속 (4)에 의해 연속함수이고, [[continuity-of-sum-and-product|연속함수의 연산]]의 (3)에 의해 $p_n\,p_1$은 연속함수이다. 따라서 $p_{n+1}$은 연속함수이다.

**2의 증명.** 제곱근 (1)에 의해 $0 \le x$인 각 실수 $x$에 $\sqrt{x}$가 실수 하나로 정해지므로 [[real-valued-function]]의 (1)에 의해 $q$는 $T$ 위의 실함수이다. $c \in T$와 양의 실수 $\varepsilon$을 잡는다.

$0 < c$인 경우. 제곱근 (1)에 의해 $0 < \sqrt{c}$이고, (W4)에 의해 $\delta = \varepsilon\sqrt{c}$는 양수이다. $x \in T$이고 $|x - c| < \delta$라 하자. 제곱근 (1)에 의해 $0 \le \sqrt{x}$이므로 순서 성질 (2)의 (i)로 양변에 $\sqrt{c}$를 더하면 $\sqrt{c} \le \sqrt{x} + \sqrt{c}$이고, 순서 성질 (1)의 (v)에 의해 $0 < \sqrt{x} + \sqrt{c}$이다. $s = \sqrt{x} + \sqrt{c}$로 두자. (K1)–(K3), (K12)로 전개하고 $\sqrt{x}\sqrt{x} = x$, $\sqrt{c}\sqrt{c} = c$를 쓰면
$$
(\sqrt{x} - \sqrt{c})\,s = \sqrt{x}\sqrt{x} + \sqrt{x}\sqrt{c} - \sqrt{c}\sqrt{x} - \sqrt{c}\sqrt{c} = x - c
$$
이므로, $s \ne 0$이고 (K8)의 (iii)에 의해 $\sqrt{x} - \sqrt{c} = (x - c)\,s^{-1}$이다. 순서 성질 (6)의 (i)에 의해 $0 < s^{-1}$이므로 절댓값 (4), (1)에 의해 $|\sqrt{x} - \sqrt{c}| = |x - c|\,s^{-1}$이다. $\sqrt{c} \le s$이므로 $\sqrt{c} = s$이면 $s^{-1} = (\sqrt{c})^{-1}$이고, $\sqrt{c} < s$이면 순서 성질 (6)의 (ii)에 의해 $s^{-1} < (\sqrt{c})^{-1}$이다. 절댓값 (2)에 의해 $0 \le |x - c|$이므로 순서 성질 (4)의 (iii)에 의해 $|x - c|\,s^{-1} \le |x - c|\,(\sqrt{c})^{-1}$이고, $0 < (\sqrt{c})^{-1}$이므로 순서 성질 (4)의 (i)에 의해 $|x - c|\,(\sqrt{c})^{-1} < \delta\,(\sqrt{c})^{-1} = \varepsilon$이다((K2), (K8)의 (iii), (K4)). 순서 성질 (1)의 (v)에 의해 $|q(x) - q(c)| < \varepsilon$이다.

$c = 0$인 경우. $0 \cdot 0 = 0$((K9))이고 $0 \le 0$이므로 제곱근 (1)의 유일성에 의해 $\sqrt{0} = 0$이다. $\delta = \varepsilon\varepsilon$으로 두면 (W4)에 의해 양수이다. $x \in T$이고 $|x - 0| < \delta$이면 $0 \le x$이므로 절댓값 (1)에 의해 $|x - 0| = x$이고 $x < \varepsilon\varepsilon$이다. 제곱근 (2)에 의해 $\sqrt{x} < \sqrt{\varepsilon\varepsilon} = \varepsilon$이고, $0 \le \sqrt{x}$이므로 $|q(x) - q(0)| = |\sqrt{x} - 0| = \sqrt{x} < \varepsilon$이다.

$c \in T$이면 $0 \le c$이므로 $0 < c$이거나 $c = 0$이고, 두 경우 모두 $q$는 $c$에서 연속이다. 따라서 $q$는 연속함수이다. $\blacksquare$
:::

## 예시와 반례

:::example[다항식 꼴의 함수]
$h(x) = x^3 - 2x^2 + x - 1$로 정한 $h : \mathbb{R} \to \mathbb{R}$는 연속함수입니다. (1)의 $p_3$, $p_2$, $p_1$과 값이 $1$인 상수함수 $u$로
$$
h = \bigl((p_3 + (-2)\,p_2) + p_1\bigr) - u
$$
입니다. 모든 실수 $x$에서 오른쪽의 값이 $((x^3 + (-2)x^2) + x) - 1 = x^3 - 2x^2 + x - 1$이므로 [[real-valued-function]]의 (2)에 의해 두 함수가 같습니다. $p_3$, $p_2$, $p_1$, $u$는 (1)과 [[continuous-function]]의 (4)에 의해 연속함수이고, [[continuity-of-sum-and-product|연속함수의 연산]]의 (3)을 상수배, 합, 합, 차의 순서로 네 번 쓰면 $h$는 연속함수입니다. 일반의 다항식은 이 강의에서 정의하지 않았으므로 이렇게 식마다 연산을 하나씩 따라가 보입니다.
:::

:::example[제곱근과 다른 함수의 합]
$T = \{x \in \mathbb{R} : 0 \le x\}$ 위에서 $r(x) = \sqrt{x} + x$로 정한 함수는 연속함수입니다. $p_1$의 $T$로의 제한 $p_1|_T$는 [[continuous-function]]의 (5)에 의해 연속함수이고, 모든 $x \in T$에서 $(q + p_1|_T)(x) = \sqrt{x} + x = r(x)$이므로 $r = q + p_1|_T$이며, [[continuity-of-sum-and-product|연속함수의 연산]]의 (3)에 의해 연속함수입니다. 합을 만들려면 두 함수의 정의역이 같아야 하므로 $p_1$을 $T$로 제한했습니다.
:::

## 확인 질문

:::check[$x$에서의 값이 $x^4 + 3x$인 함수 $\mathbb{R} \to \mathbb{R}$는 연속함수인가?]
그렇습니다. 그 함수는 $p_4 + 3p_1$이고([[real-valued-function]]의 (2)로 값을 비교합니다), (1)에 의해 $p_4$와 $p_1$이 연속함수이므로 [[continuity-of-sum-and-product|연속함수의 연산]]의 (3)을 상수배와 합에 쓰면 연속함수입니다.
:::

:::check[(2)의 증명에서 $c = 0$, $\varepsilon = 10^{-1}$이면 $\delta$로 무엇을 잡고, 그 $\delta$로 $\sqrt{x} < \varepsilon$이 되는 까닭은 무엇인가?]
$\delta = 10^{-1} \cdot 10^{-1} = 100^{-1}$을 잡습니다((K12)의 (vi)). $0 \le x < 100^{-1}$이면 [[square-root-exists]]의 (2)에 의해 $\sqrt{x} < \sqrt{100^{-1}}$이고, $100^{-1} = 10^{-1} \cdot 10^{-1}$이며 $0 \le 10^{-1}$이므로 같은 (2)에 의해 $\sqrt{100^{-1}} = 10^{-1}$입니다.
:::
