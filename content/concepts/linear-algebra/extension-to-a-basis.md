---
title: 일차독립인 열을 기저로 늘리기
title_en: Extending a Linearly Independent Sequence to a Basis
aliases: [기저로 확장, 기저의 확장, 기저로 늘리기, 이어 붙인 열의 일차결합, completion to a basis, extension to a basis, basis extension theorem]
kind: theorem
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 유한차원 벡터공간 V 의 일차독립인 열 v₁, …, vᵣ 에 길이 dim V − r 인 열을 이어 붙여 V 의 기저를 만들 수 있다. 이어 붙인 열의 일차결합이 두 일차결합의 합이라는 계산 규칙도 함께 증명한다.
requires: [real-number-arithmetic, vector-space, finite-sum-of-vectors, linear-combination-and-span, linear-independence, basis, basis-iff-independent-and-spanning, independent-list-extension, dimension, independent-and-spanning-bounds, mathematical-induction, well-ordering-principle, prime-number]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 2장 5.1절, Proposition 5.4 (Completion to a basis), p.55
    checked: original
    note: "출처의 Proposition 5.4 는 유한차원 공간의 일차독립인 벡터 v₁, …, vᵣ 에 벡터 v_{r+1}, …, vₙ 을 찾아 붙여 기저를 만들 수 있다고 한다. 출처의 증명은 n = dim V 로 두고, span 에 속하지 않는 벡터를 v_{r+1} 로 잡아 1장 연습문제 2.5 로 일차독립임을 보인 뒤 같은 일을 되풀이하며, 생성계가 되면 멈추고, 일차독립인 계는 dim V 개보다 많은 벡터를 가질 수 없으므로 과정이 끝없이 이어질 수 없다고 적는다. 이 항목은 되풀이를 덧붙인 길이 s 에 대한 귀납법으로 쓰고, 덧붙이는 횟수가 정확히 dim V − r 임을 진술에 넣는다. 1장 연습문제 2.5 는 이 사이트의 independent-list-extension 이다. 이어 붙인 열의 일차결합에 관한 (1)과 그 증명은 이 사이트가 썼다. 예시와 반례와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$V$가 [[vector-space|벡터공간]]이라 하자. $r \ge 0$, $s \ge 0$이 정수이고 $v_1, \dots, v_r$과 $x_1, \dots, x_s$가 $V$의 벡터의 열일 때, [[finite-sum-of-vectors|(H2)]]에서처럼 두 열을 차례로 늘어놓은 길이 $r + s$인 열 $c$, 곧 $c_i = v_i$ ($1 \le i \le r$), $c_{r+j} = x_j$ ($1 \le j \le s$)인 열을 $v$와 $x$를 **이어 붙인 열**(concatenation)이라 하고 $v_1, \dots, v_r, x_1, \dots, x_s$로 쓴다. 실수의 열도 같은 방식으로 이어 붙인다.

1. (이어 붙인 열의 일차결합) $\alpha_1, \dots, \alpha_r$과 $\beta_1, \dots, \beta_s$가 실수의 열이고 $\gamma$가 이 둘을 이어 붙인 길이 $r + s$인 실수의 열이면
$$\gamma_1 c_1 + \cdots + \gamma_{r+s} c_{r+s} = (\alpha_1 v_1 + \cdots + \alpha_r v_r) + (\beta_1 x_1 + \cdots + \beta_s x_s)$$
이다. 거꾸로 길이 $r + s$인 임의의 실수의 열 $\gamma$는 $\alpha_i = \gamma_i$ ($1 \le i \le r$), $\beta_j = \gamma_{r+j}$ ($1 \le j \le s$)로 정한 두 열 $\alpha$, $\beta$를 이어 붙인 열이므로 같은 등식이 성립한다.
2. (기저로 늘리기) $V$가 [[dimension|유한차원]]이고 $\dim V = d$이며 $v_1, \dots, v_r$이 [[linear-independence|일차독립]]인 열이라 하자. 그러면 $r \le d$이고, 길이 $d - r$인 $V$의 벡터의 열 $x_1, \dots, x_{d-r}$이 있어 $v$와 $x$를 이어 붙인 길이 $d$인 열 $v_1, \dots, v_r, x_1, \dots, x_{d-r}$이 $V$의 [[basis|기저]]이다. ($r = d$이면 $x$는 빈 열이고 $v$ 자신이 기저이다.)
:::

:::english
Let $V$ be a vector space. For integers $r \ge 0$, $s \ge 0$ and sequences of vectors $v_1, \dots, v_r$ and $x_1, \dots, x_s$ of $V$, the sequence $c$ of length $r + s$ obtained by listing the two in order as in (H2), that is, $c_i = v_i$ ($1 \le i \le r$) and $c_{r+j} = x_j$ ($1 \le j \le s$), is called the **concatenation** of $v$ and $x$ and is written $v_1, \dots, v_r, x_1, \dots, x_s$. Sequences of real numbers are concatenated in the same way.

1. (Linear combinations of a concatenation) If $\alpha_1, \dots, \alpha_r$ and $\beta_1, \dots, \beta_s$ are sequences of real numbers and $\gamma$ is their concatenation, of length $r + s$, then
$$\gamma_1 c_1 + \cdots + \gamma_{r+s} c_{r+s} = (\alpha_1 v_1 + \cdots + \alpha_r v_r) + (\beta_1 x_1 + \cdots + \beta_s x_s).$$
Conversely, every sequence of real numbers $\gamma$ of length $r + s$ is the concatenation of the two sequences $\alpha$, $\beta$ defined by $\alpha_i = \gamma_i$ ($1 \le i \le r$) and $\beta_j = \gamma_{r+j}$ ($1 \le j \le s$), so the same identity holds.
2. (Extension to a basis) Suppose $V$ is finite-dimensional with $\dim V = d$, and $v_1, \dots, v_r$ is a linearly independent sequence. Then $r \le d$, and there is a sequence of vectors $x_1, \dots, x_{d-r}$ of $V$ of length $d - r$ such that the concatenation $v_1, \dots, v_r, x_1, \dots, x_{d-r}$ of $v$ and $x$, of length $d$, is a basis of $V$. (If $r = d$, then $x$ is the empty sequence and $v$ itself is a basis.)
:::

## 직관

퍼즐을 맞추다가 손에 든 조각 몇 개가 서로 겹치지 않는다면, 남은 빈자리에 조각을 하나씩 채워 넣어 그림을 완성할 수 있습니다. 손에 든 조각은 일차독립인 열 $v$, 그림의 완성은 $V$를 생성하는 것, 채워 넣는 조각은 $v$의 생성에 아직 없는 벡터입니다. 이 정리는 채워 넣는 조각 수가 정확히 $\dim V - r$개라는 것까지 말합니다. 비유와 다른 점은, 퍼즐에는 빈자리에 맞는 조각이 하나뿐이지만 벡터공간에서는 덧붙일 벡터를 고르는 방법이 여럿이라는 것입니다.

"하나씩 덧붙인다"를 그대로 쓰면 언제 멈추는지가 문제가 됩니다. 증명은 "길이 $s$만큼 덧붙여도 일차독립이다"를 $s$에 대한 귀납법으로 보이고, $s = d - r$에서 [[independent-and-spanning-bounds|길이가 차원인 일차독립인 열]]이 기저라는 것을 씁니다. 멈추는 시점이 $s = d - r$로 미리 정해지므로 과정이 끝나는지 따로 따질 필요가 없습니다.

(1)은 이어 붙인 열에서 일차결합을 앞부분과 뒷부분으로 나누는 계산입니다. 늘린 기저에서 원래 열 $v$의 부분과 덧붙인 $x$의 부분을 따로 다룰 때 씁니다.

## 증명

:::idea
덧붙인 길이 $s$에 대한 귀납법. $v$에 길이 $s$인 열을 이어 붙인 일차독립인 열이 있고 $r + s < d$이면, 이 열은 기저가 아니므로 생성하지 않고, 생성에 없는 벡터를 하나 덧붙일 수 있다. $s = d - r$에 이르면 길이 $d$인 일차독립인 열이므로 기저이다.
:::

:::hint
길이 $r + s$인 일차독립인 열이 $r + s < d$일 때 $V$를 생성할 수 있습니까? 생성한다면 무엇이 되고, 그 길이는 무엇이어야 합니까?
:::

:::hint
$x$에 $y$를 덧붙인 열을 $v$에 이어 붙인 것과, $v$와 $x$를 이어 붙인 열에 $y$를 덧붙인 것은 같은 열입니다. 세 구간에서 항을 비교하세요.
:::

:::proof
정수의 순서는 [[prime-number|(Z1)]], [[well-ordering-principle|(Z5)–(Z7)]], (L1)–(L3)으로 다룬다. $l \in \{1, \dots, r + s\}$이면 (Z5)와 (Z1)에 의해 $l \le r$이거나 $l \ge r + 1$이고, 뒤의 경우 $j = l - r$은 (Z7)에 의해 $1 \le j \le s$이고 $l = r + j$이다. 따라서 이어 붙인 열의 정의는 모든 자리의 항을 정한다.

**(1)** $i$번째 항이 $\alpha_i v_i$인 길이 $r$인 열과 $j$번째 항이 $\beta_j x_j$인 길이 $s$인 열에 [[finite-sum-of-vectors|(H2)]]를 쓰면, 두 열을 이어 붙인 길이 $r + s$인 열 $e$에 대하여
$$(\alpha_1 v_1 + \cdots + \alpha_r v_r) + (\beta_1 x_1 + \cdots + \beta_s x_s) = e_1 + \cdots + e_{r+s}$$
이다. $1 \le i \le r$이면 $e_i = \alpha_i v_i = \gamma_i c_i$이고, $1 \le j \le s$이면 $e_{r+j} = \beta_j x_j = \gamma_{r+j} c_{r+j}$이다. 첫 문단에 의해 모든 자리 $l$에서 $e_l = \gamma_l c_l$이므로 $e$는 $l$번째 항이 $\gamma_l c_l$인 열과 같은 열이고([[finite-sum-of-vectors]]의 열의 같음), 오른쪽은 $\gamma_1 c_1 + \cdots + \gamma_{r+s} c_{r+s}$이다. 뒷부분: $\alpha$, $\beta$를 그렇게 정하면 그 둘을 이어 붙인 열은 첫 문단에 의해 모든 자리에서 $\gamma$와 항이 같으므로 $\gamma$이다.

**(2)** $v$가 일차독립이므로 [[independent-and-spanning-bounds|일차독립인 열과 생성하는 열의 길이]]의 (1)에 의해 $r \le d$이다. 정수 $s \ge 0$마다 명제 $T_s$를 다음과 같이 둔다.

> $T_s$: $s \le d - r$이면, 길이 $s$인 $V$의 벡터의 열 $x$가 있어 $v$와 $x$를 이어 붙인 열이 일차독립이다.

시작점이 $0$인 [[mathematical-induction|수학적 귀납법]]으로 모든 $s \ge 0$에서 $T_s$를 보인다.

*기초 단계 $s = 0$.* $x$를 빈 열로 잡는다. $v$와 $x$를 이어 붙인 열은 길이가 $r$이고 모든 $i \le r$에서 $i$번째 항이 $v_i$이므로 $v$와 같은 열이고, 일차독립이다.

*귀납 단계.* $s \ge 0$에서 $T_s$가 참이라 하고 $s + 1 \le d - r$이라 하자. (L3)과 (Z6)에 의해 $s < s + 1 \le d - r$이므로 $T_s$에 의해 길이 $s$인 열 $x$가 있어 $v$와 $x$를 이어 붙인 열 $c$(길이 $r + s$)가 일차독립이다. (L3)과 (Z7)에 의해 $r + s < r + s + 1 \le d$이므로 (Z6)에 의해 $r + s < d$이고, (L1)에 의해 $r + s \ne d$이다. [[dimension|차원]]의 (2)에 의해 $V$의 모든 기저의 길이는 $d$이므로 $c$는 기저가 아니다. $c$는 일차독립이므로, [[basis-iff-independent-and-spanning|기저의 동치 조건]]에 의해 $c$는 $V$를 생성하지 않는다. [[independent-list-extension|일차독립인 열에 덧붙이기]]의 (2)에 의해 $c$에 $y$를 덧붙인 열 $c_1, \dots, c_{r+s}, y$가 일차독립인 $y \in V$가 있다.

$x^+$를 $x$에 $y$를 덧붙인 길이 $s + 1$인 열이라 하고, $v$와 $x^+$를 이어 붙인 열을 $c^+$라 하자. $c^+$와 덧붙인 열 $c_1, \dots, c_{r+s}, y$는 길이가 $r + s + 1$로 같다. 자리 $l \in \{1, \dots, r + s + 1\}$은 첫 문단과 (Z5), (Z1)에 의해 $l \le r$, $l = r + j$ ($1 \le j \le s$), $l = r + s + 1$ 가운데 하나이다. $l \le r$이면 두 열의 항은 모두 $v_l$이다($l \le r + s$이므로 덧붙인 열의 $l$번째 항은 $c_l = v_l$). $l = r + j$ ($1 \le j \le s$)이면 $c^+_l = x^+_j = x_j$이고 $c_l = x_j$이다. $l = r + s + 1$이면 $c^+_l = x^+_{s+1} = y$이고 덧붙인 열의 마지막 항도 $y$이다. 따라서 두 열은 같은 열이고 $c^+$는 일차독립이다. 곧 $T_{s+1}$이 참이다.

귀납법의 원리에 의해 모든 $s \ge 0$에서 $T_s$가 참이다. $r \le d$이므로 (Z7)에 의해 $d - r \ge 0$이고, $T_{d-r}$에 의해 길이 $d - r$인 열 $x$가 있어 $v$와 $x$를 이어 붙인 열이 일차독립이다. 이 열의 길이는 $r + (d - r) = d$이므로 [[independent-and-spanning-bounds|일차독립인 열과 생성하는 열의 길이]]의 (3)에 의해 $V$의 기저이다. $r = d$이면 $x$는 길이 $0$인 빈 열이고, 기초 단계에서 본 것처럼 이어 붙인 열은 $v$ 자신이다.
:::

## 예시와 반례

:::example[ℝ³에서 한 벡터를 늘리기]
$\mathbb{R}^3$의 열 $(1, 1, 0)$ 하나($r = 1$)는 영벡터가 아니므로 [[linear-independence|(I4)]]에 의해 일차독립입니다. [[dimension|차원]]의 (4)에 의해 $\dim \mathbb{R}^3 = 3$이므로 정리는 벡터 두 개를 이어 붙여 기저를 만들 수 있다고 합니다. 예컨대 $x = (0, 1, 0), (0, 0, 1)$을 이어 붙인 $(1, 1, 0), (0, 1, 0), (0, 0, 1)$은 일차독립입니다. $\alpha(1, 1, 0) + \beta(0, 1, 0) + \gamma(0, 0, 1) = (\alpha, \alpha + \beta, \gamma)$가 $(0, 0, 0)$이면 $\alpha = 0$, $\beta = 0$, $\gamma = 0$이기 때문입니다. 길이가 $3$이므로 [[independent-and-spanning-bounds|(3)]]에 의해 기저입니다. 덧붙일 열은 하나로 정해지지 않습니다. $(1, 0, 0), (0, 0, 1)$을 이어 붙여도 $\alpha(1, 1, 0) + \beta(1, 0, 0) + \gamma(0, 0, 1) = (\alpha + \beta, \alpha, \gamma)$이므로 같은 방법으로 기저가 됩니다.
:::

:::example[이어 붙인 열의 일차결합]
(1)에 의해 위 기저에서 $2(1, 1, 0) + 3(0, 1, 0) + (-1)(0, 0, 1)$은 앞부분 $2(1, 1, 0) = (2, 2, 0)$과 뒷부분 $3(0, 1, 0) + (-1)(0, 0, 1) = (0, 3, -1)$의 합 $(2, 5, -1)$입니다.
:::

:::counterexample[일차독립이 아니면 늘릴 수 없다]
$\mathbb{R}^2$의 열 $(1, 0), (2, 0)$($r = 2$)은 $2(1, 0) + (-1)(2, 0) = (0, 0)$이므로 일차종속입니다. 이 열에 어떤 열을 이어 붙여도 앞의 두 항에서 같은 계수를 쓰고 나머지 계수를 $0$으로 두면 영벡터를 만드는 자명하지 않은 일차결합이 나오므로((1)과 [[finite-sum-of-vectors|(C3)]]) 일차독립이 되지 않고, 따라서 기저가 되지 않습니다. 정리의 일차독립 가정이 빠진 경우입니다.
:::

## 확인 질문

:::check[$\dim V = 4$이고 $v_1, v_2, v_3, v_4$가 일차독립이다. 정리가 주는 $x$는 무엇인가?]
$r = d = 4$이므로 $x$는 길이 $0$인 빈 열이고, $v$ 자신이 기저입니다. 이는 [[independent-and-spanning-bounds|길이가 차원인 일차독립인 열]]이 기저라는 것과 같은 내용입니다.
:::

:::check[$\mathbb{R}^2$에서 $(3, 1)$ 하나로 된 열에 $(0, 1)$을 이어 붙이면 기저가 되는가? $(6, 2)$를 이어 붙이면?]
$(0, 1)$은 됩니다. $\alpha(3, 1) + \beta(0, 1) = (3\alpha, \alpha + \beta)$가 $(0, 0)$이면 $3 \ne 0$이므로 (K10)에 의해 $\alpha = 0$, 그러면 $\beta = 0$이어서 일차독립이고, 길이가 $2 = \dim \mathbb{R}^2$([[dimension|차원]]의 (4))이므로 [[independent-and-spanning-bounds|(3)]]에 의해 기저입니다. $(6, 2)$는 안 됩니다. $2(3, 1) + (-1)(6, 2) = (0, 0)$이어서 일차종속이기 때문입니다.
:::
