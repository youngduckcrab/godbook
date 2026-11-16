---
title: ℝⁿ의 표준기저
title_en: Standard Basis of ℝⁿ
aliases: [표준기저, 표준 기저, 단위벡터, 표준단위벡터, standard basis, unit vectors, canonical basis]
kind: proposition
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: ℝⁿ 에서 k 번째 값만 1 이고 나머지가 0 인 벡터 e_k 를 차례로 늘어놓은 열 e_1, …, e_n 은 ℝⁿ 의 기저이고, 벡터 (x_1, …, x_n) 의 좌표는 x_1, …, x_n 이다.
requires: [real-number-arithmetic, vector-space, real-function-space, finite-set, mathematical-induction, finite-sum-of-vectors, linear-combination-and-span, basis]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 2절, Example 2.2, pp.6–7
    checked: original
    note: "출처는 F^n(F 는 ℝ 또는 ℂ)의 벡터 e_k(k 번째 성분만 1)를 열벡터로 적고, 모든 벡터가 x_1 e_1 + … + x_n e_n 으로 쓰이며 '이 표현은 유일하다'고 적은 뒤 e_1, …, e_n 을 표준기저라 부른다(p.7). 출처는 표현이 유일하다는 것을 증명하지 않는다. 이 항목은 ℝⁿ 을 함수 {1, …, n} → ℝ 의 집합으로 다루고, e_k 를 값으로 정의하며, 성분별 계산(함수들의 합의 값)과 유일성을 증명한다. 진술 (1)과 증명은 이 사이트가 썼다. 예시와 반례와 확인 질문은 새로 만들었다."
status: reviewed
review_note: "2026-11-16 독립 검토 3회 통과(후반 다섯 항목은 2회). 겹치는 번호, 뒤 정리가 인용할 계수 끼워 넣기와 차의 규칙, 재귀 정의의 문구, 직관의 틀린 일반화를 보완했다."
added: 2026-11-16
---

:::statement
$n$이 자연수이고 $k \in \{1, \dots, n\}$이라 하자. 각 $i \in \{1, \dots, n\}$에 실수($i = k$이면 $1$, $i \ne k$이면 $0$)가 하나씩 정해지므로 [[real-function-space|(G)]]에 의해 $\mathbb{R}^n$의 원소 $e_k$가 있다. 곧 $e_k$는 $k$에서의 값이 $1$이고 나머지 자리에서의 값이 $0$인 함수, $e_k = (0, \dots, 0, 1, 0, \dots, 0)$이다.

1. (함수들의 합의 값) $X$가 집합이고 $m \ge 0$인 정수이며 $f_1, \dots, f_m \in \mathbb{R}^X$, $x \in X$이면
$$(f_1 + \cdots + f_m)(x) = f_1(x) + \cdots + f_m(x)$$
이다. 왼쪽의 합은 벡터공간 $\mathbb{R}^X$에서의 [[finite-sum-of-vectors|합]]이고 오른쪽은 실수의 열 $f_1(x), \dots, f_m(x)$의 합이다.
2. 열 $e_1, \dots, e_n$은 $\mathbb{R}^n$의 [[basis|기저]]이다. 이 기저를 **표준기저**(standard basis)라 한다.
3. $x = (x_1, \dots, x_n) \in \mathbb{R}^n$의 이 기저에 관한 좌표는 $x_1, \dots, x_n$이다. 곧 $x = x_1 e_1 + \cdots + x_n e_n$이고, $x = \alpha_1 e_1 + \cdots + \alpha_n e_n$이면 모든 $j$에서 $\alpha_j = x_j$이다.
:::

:::english
Let $n$ be a natural number and $k \in \{1, \dots, n\}$. A real number ($1$ if $i = k$ and $0$ if $i \ne k$) is assigned to each $i \in \{1, \dots, n\}$, so by (G) there is an element $e_k$ of $\mathbb{R}^n$. That is, $e_k$ is the function whose value at $k$ is $1$ and whose value at every other position is $0$, $e_k = (0, \dots, 0, 1, 0, \dots, 0)$.

1. (Value of a sum of functions) If $X$ is a set, $m \ge 0$ is an integer, $f_1, \dots, f_m \in \mathbb{R}^X$ and $x \in X$, then
$$(f_1 + \cdots + f_m)(x) = f_1(x) + \cdots + f_m(x).$$
The sum on the left is the sum in the vector space $\mathbb{R}^X$, and the right-hand side is the sum of the sequence of real numbers $f_1(x), \dots, f_m(x)$.
2. The sequence $e_1, \dots, e_n$ is a basis of $\mathbb{R}^n$. This basis is called the **standard basis**.
3. The coordinates of $x = (x_1, \dots, x_n) \in \mathbb{R}^n$ with respect to this basis are $x_1, \dots, x_n$. That is, $x = x_1 e_1 + \cdots + x_n e_n$, and if $x = \alpha_1 e_1 + \cdots + \alpha_n e_n$, then $\alpha_j = x_j$ for every $j$.
:::

## 직관

$\mathbb{R}^n$의 벡터는 $n$개의 칸에 실수가 하나씩 적힌 표입니다. $e_k$는 $k$번째 칸에만 $1$이 적힌 표이고, $x_k e_k$는 $k$번째 칸에만 $x_k$가 적힌 표입니다. 이런 표를 칸마다 하나씩 모두 더하면 칸 $j$에는 $x_j e_j$만 값을 남기므로 원래 표 $x$가 됩니다. 계수를 읽는 방법이 곧 "$j$번째 칸의 값"이라서 좌표가 $x_j$입니다. 그래서 이 기저에서 좌표를 구하는 데는 계산이 필요 없습니다. 이 비유가 맞지 않는 곳은, 다른 기저에 관한 좌표는 이렇게 칸을 읽는 것으로 얻을 수 없다는 점입니다. 아래 예에서 같은 벡터가 다른 기저에서 다른 좌표를 가지는 경우를 봅니다.

증명에서 할 일은 일차결합의 값을 한 칸씩 읽는 것입니다. 함수의 합은 칸마다 더하는 것으로 정의되었지만 합이 셋 이상일 때 그렇다는 것은 (1)로 보여야 합니다. 이것은 합의 정의를 따라 하는 귀납법으로 증명됩니다.

## 증명

:::idea
함수들의 합의 값을 실수의 합으로 읽는 (1)을 귀납법으로 보인다. 그러면 $\alpha_1 e_1 + \cdots + \alpha_n e_n$의 $j$에서의 값은 실수의 합이고, $j$번째 항 말고는 모두 $0$이므로 $\alpha_j$이다. 기저의 존재와 유일성이 모두 여기서 나온다.
:::

:::hint
$(\alpha_i e_i)(j)$를 $i = j$인 경우와 $i \ne j$인 경우로 나누어 계산하세요. 실수의 합에서 한 항 말고 모두 $0$이면 합이 그 항임을 [[finite-sum-of-vectors|(H7)]]에서 $V = \mathbb{R}$로 쓸 수 있습니다.
:::

:::proof
**(1)의 증명.** $m$에 대한 귀납법으로 보인다. $S_m$을 "모든 $f_1, \dots, f_m \in \mathbb{R}^X$와 모든 $x \in X$에 대하여 (1)의 등식이 성립한다"로 둔다. $m = 0$이면 $\mathbb{R}^X$의 빈 열의 합은 영벡터이고 [[real-function-space|영벡터는 영함수]] $o$이며 $o(x) = 0$이다. 오른쪽은 실수의 빈 열의 합이므로 $\mathbb{R}$의 영벡터 $0$이다. 따라서 $S_0$이 참이다. $S_m$이 참이라 하고 $f_1, \dots, f_{m+1}$과 $x$를 잡는다. 합의 정의에 의해 $f_1 + \cdots + f_{m+1} = (f_1 + \cdots + f_m) + f_{m+1}$이고, $\mathbb{R}^X$의 덧셈의 정의에 의해 이 함수의 $x$에서의 값은 $(f_1 + \cdots + f_m)(x) + f_{m+1}(x)$이다. $S_m$에 의해 이것은 $(f_1(x) + \cdots + f_m(x)) + f_{m+1}(x)$이고, 실수의 합의 정의에 의해 이것은 $f_1(x) + \cdots + f_{m+1}(x)$이다. 따라서 $S_{m+1}$이 참이고, 시작점이 $0$인 귀납법의 원리에 의해 모든 $m \ge 0$에서 $S_m$이 참이다.

**핵심 계산.** $\alpha_1, \dots, \alpha_n$이 실수의 열이고 $y = \alpha_1 e_1 + \cdots + \alpha_n e_n \in \mathbb{R}^n$이라 하자. 이때 모든 $j \in \{1, \dots, n\}$에서 $y(j) = \alpha_j$임을 보인다. $y$는 $i$번째 항이 $\alpha_i e_i$인 열의 합이므로 (1)에 의해 $y(j) = r_1 + \cdots + r_n$이다. 여기서 $r_i = (\alpha_i e_i)(j) = \alpha_i \cdot e_i(j)$이다($\mathbb{R}^n$의 스칼라배의 정의). $i \ne j$이면 $e_i(j) = 0$이므로 [[real-number-arithmetic|(K9)]]에 의해 $r_i = \alpha_i \cdot 0 = 0$이고, $i = j$이면 $e_j(j) = 1$이므로 (K4)에 의해 $r_j = \alpha_j \cdot 1 = \alpha_j$이다. $n \ge 1$이고 $\mathbb{R}$의 영벡터는 $0$이므로, $V = \mathbb{R}$인 (H7)($n - 1 \ge 0$을 (H7)의 $n$ 자리에 두어)을 쓰면 $r_1 + \cdots + r_n = r_j = \alpha_j$이다. 따라서 $y(j) = \alpha_j$이다.

**(3)과 (2)의 증명.** $x = (x_1, \dots, x_n)$이고 $\alpha_i = x_i$로 두면 핵심 계산에 의해 $y = x_1 e_1 + \cdots + x_n e_n$의 $j$에서의 값이 $x_j$이다. $x$의 $j$에서의 값도 $x_j$이므로 함수의 같음에 의해 $y = x$이다. 곧 모든 $x \in \mathbb{R}^n$이 열 $e_1, \dots, e_n$의 일차결합이다(존재). 또 $\alpha_1 e_1 + \cdots + \alpha_n e_n = x$이면 핵심 계산에 의해 모든 $j$에서 $\alpha_j = y(j) = x(j) = x_j$이다. 따라서 $x$를 표현하는 계수의 열은 $x_1, \dots, x_n$ 하나뿐이다. 이것이 (3)이고, [[basis|기저의 정의]]의 존재와 유일성이 모두 성립하므로 (2)도 증명되었다. (유일성은 두 계수의 열 $\alpha$, $\beta$가 같은 합 $x$를 가지면 $\alpha_j = x_j = \beta_j$인 것으로 읽는다.)
:::

## 예시와 반례

:::example[ℝ²와 ℝ³의 표준기저]
$n = 2$이면 $e_1 = (1, 0)$, $e_2 = (0, 1)$이고 $(7, -3) = 7 e_1 + (-3) e_2$입니다. 실제로 $7(1, 0) + (-3)(0, 1) = (7, 0) + (0, -3) = (7, -3)$이므로 좌표는 $(7, -3)$ 자신입니다. $n = 3$이면 $e_2 = (0, 1, 0)$이고 $(4, 0, -1) = 4 e_1 + 0 e_2 + (-1) e_3$입니다.
:::

:::example[같은 벡터가 기저에 따라 다른 좌표를 갖는다]
$\mathbb{R}^2$의 벡터 $(5, -2)$의 표준기저에 관한 좌표는 $(5, -2)$입니다. 그런데 [[basis]]의 예시에서 기저임을 확인한 열 $(1, 0), (1, 1)$에 관한 좌표는 $(7, -2)$입니다($7(1, 0) + (-2)(1, 1) = (5, -2)$). 따라서 같은 벡터 $(5, -2)$가 이 두 기저에서 다른 좌표를 갖습니다.
:::

## 확인 질문

:::check[$\mathbb{R}^3$에서 $(2, -5, 6)$을 $e_1, e_2, e_3$의 일차결합으로 쓰고 계수의 열을 말하라.]
$(2, -5, 6) = 2 e_1 + (-5) e_2 + 6 e_3$입니다. 확인하면 $(2, 0, 0) + (0, -5, 0) = (2, -5, 0)$이고 $(2, -5, 0) + (0, 0, 6) = (2, -5, 6)$입니다. 계수의 열은 성분과 같은 $2, -5, 6$입니다.
:::

:::check[$n = 1$일 때 $\mathbb{R}^1$의 표준기저는 무엇이고, $x = (x_1)$의 좌표는 무엇인가?]
표준기저는 길이 $1$인 열 $e_1 = (1)$이고, $x = x_1 e_1$이므로 좌표는 $x_1$ 하나입니다.
:::
