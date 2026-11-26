---
written_by: Claude
status: reviewed
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "2장 3절, 연습문제 3.2–3.3 (p.51)"
added: 2026-11-26
---

:::exercise[ℝ³의 세 벡터의 생성]
$\mathbb{R}^3$에서 $v_1 = (1, 1, 1)$, $v_2 = (1, 2, 0)$, $v_3 = (0, 1, -1)$이라 하자.

1. 실수 $\alpha$, $\beta$, $\gamma$에 대하여 $\alpha v_1 + \beta v_2 + \gamma v_3$의 세 값을 구하라.
2. 열 $v_1, v_2, v_3$이 일차종속임을 계수의 열을 들어 보여라.
3. $(2, 3, 1)$은 $\operatorname{span}(v_1, v_2, v_3)$에 속하고 $(1, 0, 0)$은 속하지 않음을 보여라. 이 열은 $\mathbb{R}^3$의 기저인가?
:::

:::solution
$\mathbb{R}^3$의 연산은 [[real-function-space|실숫값 함수의 공간과 ℝⁿ]]에서처럼 값마다 계산하고, 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]에 의한다.

**(1)** (K4), (K1), (K9), (K12)의 (ii)에 의해 $\alpha v_1 = (\alpha, \alpha, \alpha)$, $\beta v_2 = (\beta, 2\beta, 0)$, $\gamma v_3 = (0, \gamma, -\gamma)$이다. [[finite-sum-of-vectors|벡터의 유한 합]]의 정의와 (H0)에 의해 길이 $3$인 열의 합은 $(\alpha v_1 + \beta v_2) + \gamma v_3$이므로, 값마다 더하고 (K4)로 $0$을 지우면

$$
\begin{aligned}
&\alpha v_1 + \beta v_2 + \gamma v_3\\
&\quad= \bigl(\alpha + \beta,\ (\alpha + 2\beta) + \gamma,\ \alpha - \gamma\bigr)
\end{aligned}
$$

이다.

**(2)** (1)에서 $\alpha = 1$, $\beta = -1$, $\gamma = 1$로 두면 (K7)의 계산에 의해 세 값은 $1 + (-1) = 0$, $(1 + (-2)) + 1 = 0$, $1 - 1 = 0$이다. 곧 $1 v_1 + (-1) v_2 + 1 v_3 = (0, 0, 0)$이고 계수 $1$이 $0$이 아니므로 [[linear-independence|일차독립과 일차종속]]의 정의에 의해 이 열은 일차종속이다.

**(3)** $\alpha = \beta = 1$, $\gamma = 0$으로 두면 (1)의 세 값은 $2$, $3$, $1$이므로 $(2, 3, 1) = 1 v_1 + 1 v_2 + 0 v_3$은 [[linear-combination-and-span|일차결합]]이고 생성에 속한다.

$(1, 0, 0)$이 생성에 속한다고 하자. 그러면 $\alpha v_1 + \beta v_2 + \gamma v_3 = (1, 0, 0)$인 실수 $\alpha$, $\beta$, $\gamma$가 있고, 실숫값 함수의 공간과 ℝⁿ의 성분별 같음에 의해 $\alpha + \beta = 1$, $(\alpha + 2\beta) + \gamma = 0$, $\alpha - \gamma = 0$이다. 셋째 식과 (K12)의 (v)에 의해 $\gamma = \alpha$이다. (K2), (K1), (K2)에 의해 $(\alpha + 2\beta) + \gamma = (\alpha + \gamma) + 2\beta$이고, $\alpha + \gamma = \alpha + \alpha = 2\alpha$((K7)의 $1 + 1 = 2$와 (K12)의 (i), (K1), (K4))이다. 따라서 (K3)과 첫째 식에 의해 둘째 식의 왼쪽은 $2\alpha + 2\beta = 2(\alpha + \beta) = 2 \cdot 1 = 2$이다. 둘째 식에서 이것이 $0$이므로 $2 = 0$인데, 이것은 (K7)의 $2 \ne 0$에 어긋난다. 따라서 $(1, 0, 0) \notin \operatorname{span}(v_1, v_2, v_3)$이다.

이 열은 $\mathbb{R}^3$를 생성하지 않으므로 [[basis|기저]]의 (존재)가 깨져 기저가 아니다. (2)에서 일차종속이므로 [[basis-iff-independent-and-spanning|기저는 일차독립이고 생성하는 열이다]]에 의해서도 기저가 아니다.
:::

:::exercise[성분의 합이 0인 벡터 전체]
$W = \{x \in \mathbb{R}^3 : (x_1 + x_2) + x_3 = 0\}$이라 하고 $u_1 = (1, -1, 0)$, $u_2 = (0, 1, -1)$이라 하자.

1. $\operatorname{span}(u_1, u_2) = W$임을 보여라.
2. 열 $u_1, u_2$가 일차독립임을 보여라.
3. $(2, 3, -5) \in W$임을 확인하고, $(2, 3, -5) = \alpha u_1 + \beta u_2$인 실수 $\alpha$, $\beta$를 모두 구하라.
:::

:::solution
연산과 실수의 계산은 앞 문제와 같은 근거에 의한다. 실수 $\alpha$, $\beta$에 대하여 (K4), (K12)의 (ii), (K9)에 의해 $\alpha u_1 = (\alpha, -\alpha, 0)$, $\beta u_2 = (0, \beta, -\beta)$이고, [[finite-sum-of-vectors|(H0)]]과 (K4), (K1)에 의해

$$
\alpha u_1 + \beta u_2 = \bigl(\alpha,\ (-\alpha) + \beta,\ -\beta\bigr)
$$

이다. 이것을 (가)라 부른다.

**(1)** ($\subseteq$) (가)의 세 값을 더하면 [[real-number-arithmetic|(K2)]]와 (K8)의 (ii), (K1), (K4)에 의해

$$
\begin{aligned}
&\bigl(\alpha + ((-\alpha) + \beta)\bigr) + (-\beta)\\
&\quad= \bigl((\alpha + (-\alpha)) + \beta\bigr) + (-\beta)\\
&\quad= (0 + \beta) + (-\beta)\\
&\quad= \beta + (-\beta) = 0
\end{aligned}
$$

이다. 따라서 [[linear-combination-and-span|일차결합과 생성]]의 정의에 의해 생성의 모든 원소가 $W$에 속한다.

($\supseteq$) $x \in W$라 하고 $\alpha = x_1$, $\beta = x_1 + x_2$로 둔다. (가)의 둘째 값은 (K2), (K1), (K8), (K4)에 의해 $(-x_1) + (x_1 + x_2) = ((-x_1) + x_1) + x_2 = 0 + x_2 = x_2$이다. 셋째 값은 $-(x_1 + x_2)$이다. $x \in W$이므로 $(x_1 + x_2) + x_3 = 0$이고, (K8)의 (ii)에 의해 이런 수는 $-(x_1 + x_2)$ 하나뿐이므로 $x_3 = -(x_1 + x_2)$이다. 첫째 값은 $x_1$이다. 따라서 성분별 같음에 의해 $x = x_1 u_1 + (x_1 + x_2) u_2 \in \operatorname{span}(u_1, u_2)$이다.

**(2)** $\alpha u_1 + \beta u_2 = (0, 0, 0)$이라 하자. (가)의 첫째 값에서 $\alpha = 0$이고 셋째 값에서 $-\beta = 0$이다. (K9)에 의해 $\beta = -(-\beta) = -0 = (-1) \cdot 0 = 0$이다. 따라서 [[linear-independence|일차독립]]의 정의에 의해 열 $u_1, u_2$는 일차독립이다.

**(3)** (K7)의 계산으로 $(2 + 3) + (-5) = 0$이므로 $(2, 3, -5) \in W$이다. $\alpha u_1 + \beta u_2 = (2, 3, -5)$라 하면 (가)의 첫째 값에서 $\alpha = 2$이고 셋째 값에서 $-\beta = -5$이므로 (K9)에 의해 $\beta = -(-\beta) = -(-5) = 5$이다. 거꾸로 $\alpha = 2$, $\beta = 5$이면 (가)의 세 값은 $2$, $(-2) + 5 = 3$, $-5$이다. 따라서 그런 실수는 $\alpha = 2$, $\beta = 5$뿐이다. 이것은 (1)의 ($\supseteq$)에서 고른 $\alpha = x_1$, $\beta = x_1 + x_2$와 같다.
:::

:::exercise[벡터를 덧붙여도 생성이 그대로일 때]
$V$가 벡터공간이고 $v_1, \dots, v_n$이 길이 $n \ge 0$인 벡터의 열이며 $x \in V$라 하자. 덧붙인 열 $v_1, \dots, v_n, x$에 대하여

$$
\begin{aligned}
&\operatorname{span}(v_1, \dots, v_n, x)\\
&\quad= \operatorname{span}(v_1, \dots, v_n)
\end{aligned}
$$

인 것은 정확히 $x \in \operatorname{span}(v_1, \dots, v_n)$일 때임을 보여라.
:::

:::solution
$S = \operatorname{span}(v_1, \dots, v_n)$, $S' = \operatorname{span}(v_1, \dots, v_n, x)$라 쓴다. [[finite-sum-of-vectors|벡터의 유한 합]]에서 정한 덧붙인 열은 처음 $n$개가 $v_1, \dots, v_n$이고 $(n + 1)$번째 항이 $x$인 열이다.

먼저 언제나 $S \subseteq S'$이다. $1 \le k \le n$이면 $v_k$는 덧붙인 열의 $k$번째 항이므로 [[linear-combination-and-span|일차결합과 생성]]의 (N2)에 의해 $v_k \in S'$이다. (N1)에 의해 $S'$은 부분공간이므로 열 $v_1, \dots, v_n$에 (N3)을 쓰면 $S \subseteq S'$이다. ($n = 0$이면 $S = \{0_V\}$이고 $S'$이 부분공간이라 $0_V$를 포함하므로 같은 결론이다. (N3)도 이 경우를 포함한다.)

($\Rightarrow$) $S' = S$라 하자. $x$는 덧붙인 열의 $(n + 1)$번째 항이므로 (N2)에 의해 $x \in S' = S$이다.

($\Leftarrow$) $x \in S$라 하자. 덧붙인 열의 모든 항이 $S$에 속한다. $k \le n$인 항 $v_k$는 (N2)에 의해, 마지막 항 $x$는 가정에 의해 그렇다. (N1)에 의해 $S$는 부분공간이므로 덧붙인 열에 (N3)을 쓰면 $S' \subseteq S$이다. 위의 $S \subseteq S'$과 함께 $S' = S$이다.
:::

:::exercise[기저의 한 항을 바꾸어 넣기]
$V$가 벡터공간이고 길이 $3$인 열 $v_1, v_2, v_3$이 $V$의 기저라 하자. $x = \alpha_1 v_1 + \alpha_2 v_2 + \alpha_3 v_3$이라 하고($\alpha_1$, $\alpha_2$, $\alpha_3$은 실수), 셋째 항을 $x$로 바꾼 열 $v_1, v_2, x$를 생각한다.

1. 실수 $\beta_1$, $\beta_2$, $\gamma$에 대하여 $\beta_1 v_1 + \beta_2 v_2 + \gamma x$를 $v_1, v_2, v_3$의 일차결합으로 나타내어라.
2. $\alpha_3 \ne 0$이면 열 $v_1, v_2, x$가 $V$의 기저임을 보여라.
3. $\alpha_3 = 0$이면 열 $v_1, v_2, x$가 일차종속임을 보여라.
:::

:::solution
[[finite-sum-of-vectors|벡터의 유한 합]]의 정의와 (H0)에 의해 길이 $3$인 열의 합은 처음 두 항의 덧셈에 셋째 항을 더한 것이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]에 의한다.

**(1)** [[vector-space-basic-properties|(B3)]]과 영벡터의 정의에 의해 $\beta_1 v_1 + \beta_2 v_2 + 0 v_3 = (\beta_1 v_1 + \beta_2 v_2) + 0_V = \beta_1 v_1 + \beta_2 v_2$이다. 곧 길이 $2$인 일차결합 $\beta_1 v_1 + \beta_2 v_2$는 계수의 열이 $(\beta_1, \beta_2, 0)$인 $v_1, v_2, v_3$의 일차결합이다. (C2)에 의해 $\gamma x$는 계수의 열이 $(\gamma\alpha_1, \gamma\alpha_2, \gamma\alpha_3)$인 일차결합이다. $\beta_1 v_1 + \beta_2 v_2 + \gamma x = (\beta_1 v_1 + \beta_2 v_2) + \gamma x$에 (C1)을 쓰고 (K1), (K4)로 $0$을 지우면

$$
\begin{aligned}
&\beta_1 v_1 + \beta_2 v_2 + \gamma x\\
&\quad= (\beta_1 + \gamma\alpha_1) v_1 + (\beta_2 + \gamma\alpha_2) v_2\\
&\qquad + (\gamma\alpha_3) v_3
\end{aligned}
$$

이다. 이것을 (가)라 부른다.

**(2)** $\alpha_3 \ne 0$이라 하자. [[basis-iff-independent-and-spanning|기저는 일차독립이고 생성하는 열이다]]에 의해 $v_1, v_2, v_3$은 일차독립이고 $V$를 생성한다. 같은 정리에 의해 $v_1, v_2, x$가 일차독립이고 $V$를 생성함을 보이면 된다.

일차독립: $\beta_1 v_1 + \beta_2 v_2 + \gamma x = 0_V$라 하자. (가)와 $v_1, v_2, v_3$의 일차독립에 의해 $\beta_1 + \gamma\alpha_1 = 0$, $\beta_2 + \gamma\alpha_2 = 0$, $\gamma\alpha_3 = 0$이다. $\alpha_3 \ne 0$이므로 (K1)과 (K10)에 의해 $\gamma = 0$이다. 그러면 (K9)에 의해 $\gamma\alpha_1 = 0$이므로 (K4)에 의해 $\beta_1 = \beta_1 + 0 = 0$이고, 같은 방법으로 $\beta_2 = 0$이다.

생성: $L = \operatorname{span}(v_1, v_2, x)$라 하자. (K8)의 (iii)에 의해 $\alpha_3^{-1}$이 있다. (가)에서 $\gamma = \alpha_3^{-1}$, $\beta_1 = -(\alpha_3^{-1}\alpha_1)$, $\beta_2 = -(\alpha_3^{-1}\alpha_2)$로 두면 $v_1$의 계수는 $-(\alpha_3^{-1}\alpha_1) + \alpha_3^{-1}\alpha_1 = 0$((K1), (K8)), $v_2$의 계수도 같은 이유로 $0$, $v_3$의 계수는 $\alpha_3^{-1}\alpha_3 = 1$((K1), (K8))이다. (C4)와 [[vector-space|(V5)]]에 의해 그 일차결합은 $1 v_3 = v_3$이다. 따라서 $v_3 \in L$이다. 또 [[linear-combination-and-span|일차결합과 생성]]의 (N2)에 의해 $v_1$, $v_2 \in L$이다. (N1)에 의해 $L$은 부분공간이므로 (N3)에 의해 $V = \operatorname{span}(v_1, v_2, v_3) \subseteq L$이고, $L \subseteq V$이므로 $L = V$이다.

따라서 $v_1, v_2, x$는 $V$의 기저이다.

**(3)** $\alpha_3 = 0$이면 (B3)과 영벡터의 정의에 의해 $x = (\alpha_1 v_1 + \alpha_2 v_2) + 0_V = \alpha_1 v_1 + \alpha_2 v_2$이다. 곧 열 $v_1, v_2, x$의 셋째 항 $x$는 그 항을 지운 열 $v_1, v_2$의 일차결합이고, [[linear-dependence-criterion|일차종속의 판정]]의 (1)에서 $k = 3$인 경우에 의해 열 $v_1, v_2, x$는 일차종속이다. 이 경우 (2)의 결론은 성립하지 않는다.
:::

:::exercise[덧붙이기에서 일차독립 가정이 필요함을 보이기]
[[independent-list-extension|일차독립인 열에 벡터 덧붙이기]]의 (1)은 열 $v_1, \dots, v_n$이 일차독립이라고 가정한다. $\mathbb{R}^2$에서 $v_1 = (1, 1)$, $v_2 = (-1, -1)$, $x = (1, 0)$으로 두고 다음을 보여라.

1. $x \notin \operatorname{span}(v_1, v_2)$이다.
2. 그런데 덧붙인 열 $v_1, v_2, x$는 일차종속이다.

따라서 그 (1)에서 일차독립이라는 가정을 빼고 "$x$가 생성에 속하지 않으면 덧붙인 열은 일차독립이다"라고 쓰면 거짓인 주장이 된다.
:::

:::solution
**(1)** 실수 $\alpha$, $\beta$에 대하여 [[real-number-arithmetic|(K4)]], (K12)의 (ii)와 [[finite-sum-of-vectors|(H0)]]에 의해 $\alpha v_1 + \beta v_2 = (\alpha, \alpha) + (-\beta, -\beta) = (\alpha + (-\beta), \alpha + (-\beta))$이다. 곧 생성의 모든 원소는 두 값이 같다. $x = (1, 0)$의 두 값은 $1$과 $0$이고 (K4)에 의해 $1 \ne 0$이므로 $x \notin \operatorname{span}(v_1, v_2)$이다.

**(2)** 계수의 열 $1, 1, 0$을 잡으면 $1 v_1 + 1 v_2 + 0 x = ((1, 1) + (-1, -1)) + (0, 0) = (0, 0)$이다((K4), (K7), (K9), (H0), 영벡터의 정의). 계수 $1$이 $0$이 아니므로 [[linear-independence|일차독립과 일차종속]]의 정의에 의해 덧붙인 열은 일차종속이다. 같은 계수에서 앞의 열 $v_1, v_2$도 $1 v_1 + 1 v_2 = (0, 0)$이어서 일차종속이므로, 이 예는 정리의 가정이 깨진 경우이다.
:::
