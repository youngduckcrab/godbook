---
title: 연속함수의 합·곱·몫
title_en: Sums, Products and Quotients of Continuous Functions
aliases: [연속함수의 사칙연산, 연속함수의 합, 연속함수의 곱, 연속함수의 몫, continuity of sums and products, algebra of continuous functions]
kind: proposition
field: real-analysis
msc: ["26A15"]
level: undergrad
summary: 두 실함수가 c 에서 연속이면 합, 차, 곱, 상수배, 절댓값도 c 에서 연속이고, g(c) ≠ 0 이면 g 가 0 이 아닌 점들의 집합 위의 몫도 c 에서 연속이다. 연속함수끼리의 합·차·곱과 분모가 0 이 아닌 곳에서의 몫은 연속함수이다.
requires: [set-operations, real-number-arithmetic, order-properties-of-reals, real-valued-function, cluster-point, limit-of-a-function, limit-laws-for-functions, continuous-function]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 3.2.1절 Proposition 3.2.5 와 그 앞 문단 (p.124), Example 3.2.3 (p.123), 연습문제 3.2.2, 3.2.6, 3.2.9 (p.127–128)
    checked: original
    note: "출처의 Proposition 3.2.5(p.124)는 f, g 가 c ∈ S 에서 연속일 때 h(x) := f(x) + g(x), f(x) − g(x), f(x)g(x) 로 정한 h : S → ℝ 가 c 에서 연속이고, S 의 모든 x 에서 g(x) ≠ 0 이면 h(x) := f(x)/g(x) 로 정한 h : S → ℝ 도 그렇다는 것이다. 출처는 '같은 추론으로, 또는 Corollary 3.1.12 를 써서' 증명할 수 있다고 하고 증명을 연습문제 3.2.6(p.128)으로 둔다. 이 항목은 continuous-function 의 (2), (3)으로 c 가 집적점인 경우와 아닌 경우를 나누고, 집적점인 경우에 limit-laws-for-functions 를 쓴다. 상수배와 절댓값 (1)은 출처의 3.2.5 에 없다(검색한 범위). 몫 (2)는 출처와 달리 g 가 S 전체에서 0 이 아니라고 가정하지 않고, g(c) ≠ 0 일 때 몫을 Z = {x ∈ S : g(x) ≠ 0} 위의 함수로 다룬다. g 가 S 전체에서 0 이 아니면 Z = S 이므로 출처의 (iv)는 이 항목의 (2)의 경우이다. 예시 '역수 함수'는 출처의 Example 3.2.3(p.123; (0, ∞) 위의 1/x 가 연속)과 연습문제 3.2.2(p.127; 같은 함수를 정의로 직접)와 같은 식을 0 이 아닌 실수 전체 위에서 다룬 것이고, 출처는 수열로 증명한다. 반례 '두 불연속 함수의 합'은 출처의 연습문제 3.2.9(p.128; 합은 연속이지만 f, g 는 연속이 아닌 예를 찾아라)의 답에 해당한다. 확인 질문은 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
실함수와 그 합 $f + g$, 차 $f - g$, 곱 $fg$, 상수배 $kf$, 절댓값 $|f|$, 몫 $f/g$, $1/g$는 [[real-valued-function]]의 것이고, 연속은 [[continuous-function]]의 것이다. $S$를 $\mathbb{R}$의 부분집합, $c$를 $S$의 원소, $k$를 실수, $f$, $g$를 $S$ 위의 실함수라 하자.

1. (합, 차, 곱, 상수배, 절댓값) $f$와 $g$가 $c$에서 연속이면 $f + g$, $f - g$, $fg$는 $c$에서 연속이다. $f$가 $c$에서 연속이면 $kf$와 $|f|$는 $c$에서 연속이다.
2. (몫) $g$가 $c$에서 연속이고 $g(c) \ne 0$이라 하며 $Z = \{x \in S : g(x) \ne 0\}$으로 두자. 그러면 $c \in Z$이고 $1/g : Z \to \mathbb{R}$는 $c$에서 연속이다. 또 $f$가 $c$에서 연속이면 $f/g : Z \to \mathbb{R}$는 $c$에서 연속이다. 특히 $S$의 모든 원소 $x$에서 $g(x) \ne 0$이면 $Z = S$이고 $f/g$는 $S$ 위의 함수로서 $c$에서 연속이다.
3. (연속함수) $f$와 $g$가 연속함수이면 $f + g$, $f - g$, $fg$, $kf$, $|f|$는 연속함수이고, $f/g : Z \to \mathbb{R}$와 $1/g : Z \to \mathbb{R}$도 연속함수이다. 여기서 $Z = \{x \in S : g(x) \ne 0\}$이다.
:::

:::english
Real-valued functions and their sum $f + g$, difference $f - g$, product $fg$, scalar multiple $kf$, absolute value $|f|$, and quotients $f/g$, $1/g$ are those of the entry on real-valued functions, and continuity is that of the entry on continuous functions. Let $S$ be a subset of $\mathbb{R}$, $c$ an element of $S$, $k$ a real number, and $f$, $g$ real-valued functions on $S$.

1. (Sum, difference, product, scalar multiple, absolute value) If $f$ and $g$ are continuous at $c$, then $f + g$, $f - g$ and $fg$ are continuous at $c$. If $f$ is continuous at $c$, then $kf$ and $|f|$ are continuous at $c$.
2. (Quotient) Suppose $g$ is continuous at $c$ and $g(c) \ne 0$, and let $Z = \{x \in S : g(x) \ne 0\}$. Then $c \in Z$ and $1/g : Z \to \mathbb{R}$ is continuous at $c$. If moreover $f$ is continuous at $c$, then $f/g : Z \to \mathbb{R}$ is continuous at $c$. In particular, if $g(x) \ne 0$ for every element $x$ of $S$, then $Z = S$ and $f/g$, as a function on $S$, is continuous at $c$.
3. (Continuous functions) If $f$ and $g$ are continuous functions, then $f + g$, $f - g$, $fg$, $kf$ and $|f|$ are continuous functions, and $f/g : Z \to \mathbb{R}$ and $1/g : Z \to \mathbb{R}$ are also continuous functions, where $Z = \{x \in S : g(x) \ne 0\}$.
:::

## 직관

연속은 "$c$에서의 극한이 $f(c)$"이고([[continuous-function]]의 (3)), 극한은 합과 곱을 따라가므로([[limit-laws-for-functions|함수의 극한의 사칙연산]]) 연속도 합과 곱을 따라갑니다. 두 개의 손잡이가 각각 부드럽게 움직이면 두 눈금을 더한 값도 부드럽게 움직이는 것과 같습니다. 비유가 맞지 않는 곳은 몫입니다. 분모가 $0$이 되는 점에서는 몫이 정해지지 않으므로, 몫은 분모가 $0$이 아닌 점들의 집합 $Z$ 위의 함수로 보고 $Z$의 점에서 연속을 말합니다.

증명은 두 경우로 나뉩니다. $c$가 정의역의 집적점이 아니면 어떤 함수든 $c$에서 연속이므로 할 일이 없고, 집적점이면 극한의 사칙연산을 씁니다.

## 증명

:::idea
$c$가 집적점이 아니면 [[continuous-function]]의 (2)로 끝난다. 집적점이면 그 항목의 (3)으로 연속을 "극한이 $f(c)$"로 바꾸고 [[limit-laws-for-functions|함수의 극한의 사칙연산]]을 쓴다.
:::

:::hint
몫에서는 $c$가 $Z$의 집적점인지 아닌지로 나눈다. $Z$의 집적점이면 $S$의 집적점이기도 하다([[cluster-point]]의 (4)).
:::

:::proof
"연속 (3)"처럼 쓴 것은 [[continuous-function]]의 번호, "법칙 (5)"는 [[limit-laws-for-functions]]의 번호, "실함수 (5)"는 [[real-valued-function]]의 번호이다.

**1의 증명.** $c$가 $S$의 집적점이 아니면, 연속 (2)에 의해 $S$ 위의 모든 실함수, 특히 $f + g$, $f - g$, $fg$, $kf$, $|f|$가 $c$에서 연속이다. $c$가 $S$의 집적점이라 하자. $f$, $g$가 $c$에서 연속이면 연속 (3)에 의해 $f$와 $g$는 $c$에서 각각 $f(c)$, $g(c)$로 수렴한다. 법칙 (3), (4), (5)에 의해 $f + g$, $f - g$, $fg$는 $c$에서 각각 $f(c) + g(c)$, $f(c) - g(c)$, $f(c)g(c)$로 수렴하고, 이 수들은 실함수의 연산의 정의에 의해 $(f + g)(c)$, $(f - g)(c)$, $(fg)(c)$이다. 연속 (3)에 의해 세 함수는 $c$에서 연속이다. $f$만 $c$에서 연속일 때도 같은 방식으로, 법칙 (6), (7)에 의해 $kf$와 $|f|$는 $c$에서 $k f(c) = (kf)(c)$와 $|f(c)| = |f|(c)$로 수렴하므로 연속 (3)에 의해 $c$에서 연속이다.

**2의 증명.** $g(c) \ne 0$이므로 $c \in Z$이다. $Z$ 위의 함수 $1/g$와 $f/g$의 $c$에서의 연속을 본다.

$c$가 $Z$의 집적점이 아니면 연속 (2)를 $S$ 대신 $Z$에 쓰면 $1/g$와 $f/g$는 $c$에서 연속이다.

$c$가 $Z$의 집적점이라 하자. $Z \subseteq S$이므로 [[cluster-point]]의 (4)에 의해 $c$는 $S$의 집적점이고, 연속 (3)에 의해 $g$는 $c$에서 $g(c)$로 수렴한다. $g(c) \ne 0$이므로 법칙 (8)에 의해 $1/g : Z \to \mathbb{R}$는 $c$에서 $g(c)^{-1} = (1/g)(c)$로 수렴한다. 연속 (3)을 $S$ 대신 $Z$에 쓰면 $1/g$는 $c$에서 연속이다. $f$도 $c$에서 연속이면 연속 (3)에 의해 $f$는 $c$에서 $f(c)$로 수렴하고, 법칙 (8)에 의해 $f/g$는 $c$에서 $f(c)/g(c) = (f/g)(c)$로 수렴하므로 같은 이유로 $c$에서 연속이다.

마지막 문장의 $Z = S$는 실함수 (5)이다.

**3의 증명.** (1)을 $S$의 모든 원소 $c$에 쓰면 앞의 다섯 함수는 연속함수이다. $Z$의 원소 $c$에서는 $g(c) \ne 0$이고 $f$, $g$가 $c$에서 연속이므로 (2)에 의해 $f/g$와 $1/g$는 $c$에서 연속이다. 따라서 둘은 $Z$ 위의 연속함수이다. $\blacksquare$
:::

## 예시와 반례

:::example[역수 함수]
$Z = \{x \in \mathbb{R} : x \ne 0\}$ 위에서 $x^{-1}$을 값으로 갖는 함수는 연속함수입니다. $\mathbb{R}$ 위의 항등함수 $i = i_{\mathbb{R}}$와 값이 $1$인 상수함수 $u$는 [[continuous-function]]의 (4)에 의해 연속함수이고, $Z$는 (3)의 $\{x \in \mathbb{R} : i(x) \ne 0\}$이며, $u/i : Z \to \mathbb{R}$의 값은 $1 \cdot x^{-1} = x^{-1}$입니다((K4)). (3)에 의해 $u/i$는 연속함수입니다. 같은 방식으로 $Z$ 위에서 값이 $(x + 2)x^{-1}$인 함수도 연속함수입니다. 분자 $i + 2u$가 (3)에 의해 연속함수이기 때문입니다.
:::

:::counterexample[두 불연속 함수의 합이 연속일 수 있다]
$H(x) = 0$ ($x < 0$일 때), $H(x) = 1$ ($0 \le x$일 때)로 정한 $H : \mathbb{R} \to \mathbb{R}$와 $u$를 값이 $1$인 상수함수라 하고 $G = u - H$로 둡니다. $G(x)$는 $x < 0$이면 $1$, $0 \le x$이면 $0$입니다.

$H$는 $0$에서 불연속입니다. 양의 실수 $\delta$마다 $x = -2^{-1}\delta$는 $|x - 0| < \delta$이고 $x < 0$이어서 $|H(x) - H(0)| = |0 - 1| = 1 \ge 2^{-1}$이므로 [[continuous-function]]의 (1)이 $\varepsilon = 2^{-1}$로 성립합니다. $G$도 같은 $x$에서 $|G(x) - G(0)| = |1 - 0| = 1$이므로 $0$에서 불연속입니다. 그러나 모든 $x$에서 $(H + G)(x) = H(x) + (1 - H(x)) = 1$이므로 $H + G$는 상수함수 $u$이고([[real-valued-function]]의 (2)) 연속입니다. 따라서 (1)의 거꾸로("$f + g$가 연속이면 $f$와 $g$가 연속")는 성립하지 않습니다.
:::

## 확인 질문

:::check[$f$가 $c$에서 연속이고 $g$가 $c$에서 불연속이면 $f + g$는 $c$에서 연속일 수 있는가?]
없습니다. $f + g$가 $c$에서 연속이라면 모든 $x$에서 $((f + g) - f)(x) = g(x)$이므로 [[real-valued-function]]의 (2)에 의해 $g = (f + g) - f$이고, (1)에 의해 $g$가 $c$에서 연속이 되어 가정에 어긋납니다.
:::

:::check[$g(x) = x x - 1$로 정한 $g : \mathbb{R} \to \mathbb{R}$에 대하여 $1/g$는 어느 집합 위의 연속함수인가?]
$g = i\,i - u$($i$는 항등함수, $u$는 값이 $1$인 상수함수)이므로 (1)에 의해 $g$는 연속함수입니다. $g(x) = 0$인 것은 정확히 $x x = 1$, 곧 $x = 1$ 또는 $x = -1$일 때이므로($0 \le x$이면 $x x = 1 \cdot 1$에 [[order-properties-of-reals]]의 (7)의 (iv)를, $x < 0$이면 (K12)의 (iii)으로 $(-x)(-x) = x x$이고 $0 < -x$이므로 같은 성질을 $-x$에 씁니다) $Z = \mathbb{R} - \{1, -1\}$이고, (3)에 의해 $1/g$는 $Z$ 위의 연속함수입니다.
:::
