---
written_by: Claude
status: reviewed
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "5장 2절, 연습문제 2.3 (p.128)"
added: 2026-11-26
---

:::exercise[가중치를 곱한 내적에서 그람–슈미트 과정]
$\mathbb{R}^3$에 $\langle x, y \rangle_w = x_1 y_1 + 2x_2 y_2 + 3x_3 y_3$으로 정한 함수 $\langle \cdot, \cdot \rangle_w$를 주자. $x_1 = (1, 1, 1)$, $x_2 = (1, 1, 0)$, $x_3 = (1, 0, 0)$이라 하자.

1. $\langle \cdot, \cdot \rangle_w$가 내적이고 $x_1, x_2, x_3$이 일차독립임을 보인 뒤, 이 내적에 관해 $x_1, x_2, x_3$에 그람–슈미트 과정을 써서 $v_1, v_2, v_3$과 $\langle v_k, v_k \rangle_w$ ($k = 1, 2, 3$)를 구하라.
2. $v_1$과 $v_2$가 표준내적으로는 직교하지 않음을 보여라.
3. $e_3 = (0, 0, 1)$을 $v_1, v_2, v_3$의 일차결합으로 쓰고, 그 계수를 내적 $\langle \cdot, \cdot \rangle_w$로 구하라.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이고, $\mathbb{R}^3$의 연산은 [[real-function-space|실숫값 함수의 공간과 ℝⁿ]]의 값마다의 연산이다. $v_k$와 $c_{k,i}$는 [[gram-schmidt-process|그람–슈미트 과정]]의 (1)의 것이다.

**(1)** $\langle \cdot, \cdot \rangle_w$는 [[inner-product-examples|내적의 예]]의 (1)에서 $w = (1, 2, 3)$인 함수이다. $0 < 1$, $0 < 2$, $0 < 3$이므로([[order-properties-of-reals|실수의 순서의 성질]]의 (10)) 그 (1)의 (iii)에 의해 $\mathbb{R}^3$ 위의 내적이다. 실수 $\alpha$, $\beta$, $\gamma$에 대하여

$$
\begin{aligned}
&\alpha x_1 + \beta x_2 + \gamma x_3 \\
&\quad = (\alpha + \beta + \gamma,\ \alpha + \beta,\ \alpha)
\end{aligned}
$$

이다. 이것이 영벡터이면 셋째 값에서 $\alpha = 0$, 둘째 값에서 $\beta = 0$, 첫째 값에서 $\gamma = 0$이므로 [[linear-independence|일차독립과 일차종속]]의 정의에 의해 $x_1, x_2, x_3$은 일차독립이다.

과정의 (1)에 의해 $v_1 = x_1 = (1, 1, 1)$이고 $\langle v_1, v_1 \rangle_w = 1 + 2 + 3 = 6$이다. $\langle x_2, v_1 \rangle_w = 1 + 2 + 0 = 3$이므로 $c_{1,1} = 3 \cdot 6^{-1} = \tfrac{1}{2}$이고

$$
\begin{aligned}
v_2 &= (1, 1, 0) - \tfrac{1}{2}(1, 1, 1) \\
&= \bigl(\tfrac{1}{2}, \tfrac{1}{2}, -\tfrac{1}{2}\bigr)
\end{aligned}
$$

이다. $\langle v_2, v_2 \rangle_w = \tfrac{1}{4} + \tfrac{2}{4} + \tfrac{3}{4} = \tfrac{3}{2}$이다. 셋째 단계에서 $\langle x_3, v_1 \rangle_w = 1$, $\langle x_3, v_2 \rangle_w = \tfrac{1}{2}$이므로 $c_{2,1} = \tfrac{1}{6}$, $c_{2,2} = \tfrac{1}{2} \cdot \tfrac{2}{3} = \tfrac{1}{3}$이고

$$
\begin{aligned}
v_3 &= (1, 0, 0) - \tfrac{1}{6}(1, 1, 1) \\
&\quad - \tfrac{1}{3}\bigl(\tfrac{1}{2}, \tfrac{1}{2}, -\tfrac{1}{2}\bigr) \\
&= \bigl(\tfrac{2}{3}, -\tfrac{1}{3}, 0\bigr)
\end{aligned}
$$

이다. 성분마다 $1 - \tfrac{1}{6} - \tfrac{1}{6} = \tfrac{2}{3}$, $0 - \tfrac{1}{6} - \tfrac{1}{6} = -\tfrac{1}{3}$, $0 - \tfrac{1}{6} + \tfrac{1}{6} = 0$이다. $\langle v_3, v_3 \rangle_w = \tfrac{4}{9} + 2 \cdot \tfrac{1}{9} + 0 = \tfrac{2}{3}$이다. 과정의 (1)이 보장하는 대로 $\langle v_1, v_3 \rangle_w = \tfrac{2}{3} - \tfrac{2}{3} + 0 = 0$이고 $\langle v_2, v_3 \rangle_w = \tfrac{1}{3} - \tfrac{1}{3} + 0 = 0$이다.

**(2)** [[standard-inner-product|ℝⁿ 의 표준내적]]으로는 $\langle v_1, v_2 \rangle = \tfrac{1}{2} + \tfrac{1}{2} - \tfrac{1}{2} = \tfrac{1}{2} \ne 0$이다. 같은 두 벡터가 $\langle \cdot, \cdot \rangle_w$로는 직교하고 표준내적으로는 직교하지 않는다.

**(3)** 모든 $(p, q, r) \in \mathbb{R}^3$에서 $r x_1 + (q - r)x_2 + (p - q)x_3 = (p, q, r)$이므로 $x_1, x_2, x_3$은 $\mathbb{R}^3$을 [[linear-combination-and-span|생성]]한다. 과정의 (1)에 의해 $\operatorname{span}(v_1, v_2, v_3) = \operatorname{span}(x_1, x_2, x_3) = \mathbb{R}^3$이므로 $e_3 = \alpha_1 v_1 + \alpha_2 v_2 + \alpha_3 v_3$인 실수 $\alpha_1$, $\alpha_2$, $\alpha_3$이 있다. 과정의 (1)에 의해 $v_1, v_2, v_3$은 내적 $\langle \cdot, \cdot \rangle_w$에 관해 모든 항이 영벡터가 아닌 [[orthonormal-list|직교하는 열]]이므로, 그 항목의 (1)에 의해 $\alpha_k = \langle e_3, v_k \rangle_w \langle v_k, v_k \rangle_w^{-1}$이다. $\langle e_3, v_1 \rangle_w = 3$, $\langle e_3, v_2 \rangle_w = -\tfrac{3}{2}$, $\langle e_3, v_3 \rangle_w = 0$이므로

$$
\begin{aligned}
\alpha_1 &= \tfrac{3}{6} = \tfrac{1}{2}, \\
\alpha_2 &= -\tfrac{3}{2} \cdot \tfrac{2}{3} = -1, \\
\alpha_3 &= 0
\end{aligned}
$$

이다. 확인하면 $\tfrac{1}{2}(1, 1, 1) - \bigl(\tfrac{1}{2}, \tfrac{1}{2}, -\tfrac{1}{2}\bigr) = (0, 0, 1)$이다.
:::

:::exercise[정규직교 열의 일차결합으로 가장 가깝게 하는 계수]
$V$가 내적공간이고 $r \ge 0$이 정수이며 $u_1, \dots, u_r$이 정규직교 열이고 $v \in V$라 하자. 길이 $r$인 실수의 열 $c_1, \dots, c_r$에 대하여 $x_c = c_1 u_1 + \cdots + c_r u_r$로 쓰자.

1. 모든 실수의 열 $c_1, \dots, c_r$에서 다음 등식이 성립함을 보여라. 두 번째 괄호는 $k$번째 항이 $(c_k - \langle v, u_k \rangle)^2$인 길이 $r$인 실수의 열의 합이다.
   $$
   \begin{aligned}
   &\lVert v - x_c \rVert^2 \\
   &= \bigl(\lVert v \rVert^2 - (\langle v, u_1 \rangle^2 \\
   &\qquad + \cdots + \langle v, u_r \rangle^2)\bigr) \\
   &\quad + \bigl((c_1 - \langle v, u_1 \rangle)^2 \\
   &\qquad + \cdots + (c_r - \langle v, u_r \rangle)^2\bigr)
   \end{aligned}
   $$
2. $\lVert v - x_c \rVert$를 가장 작게 하는 계수의 열은 모든 $k$에서 $c_k = \langle v, u_k \rangle$인 것 하나뿐임을 보여라. 곧 모든 $c$에서 $\lVert v - x_d \rVert \le \lVert v - x_c \rVert$인 계수의 열 $d$는 $d_k = \langle v, u_k \rangle$인 열뿐이다.
3. 표준내적을 준 $\mathbb{R}^3$에서 $u_1 = \bigl(\tfrac{2}{7}, \tfrac{3}{7}, \tfrac{6}{7}\bigr)$, $u_2 = \bigl(\tfrac{6}{7}, \tfrac{2}{7}, -\tfrac{3}{7}\bigr)$, $v = (7, 0, 0)$일 때 $\lVert v - x_c \rVert^2$의 가장 작은 값과 그때의 계수를 구하라.
:::

:::solution
정규직교 열은 [[orthonormal-list|직교하는 열과 정규직교 열]]의 것이고, 직교사영은 [[orthogonal-projection|직교사영]]의 것이며, 노름은 [[norm-in-inner-product-space|내적공간의 노름]]의 것이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다. $E = \operatorname{span}(u_1, \dots, u_r)$로 쓴다.

**(1)** 노름의 (4)에 의해 단위벡터는 영벡터가 아니므로 $u_1, \dots, u_r$은 모든 항이 영벡터가 아닌 직교하는 열이다. 직교사영의 (3)에 의해 $v$의 $E$로의 직교사영이 있고, 그것은 $w = \langle v, u_1 \rangle u_1 + \cdots + \langle v, u_r \rangle u_r$이다. $x_c \in E$이므로([[linear-combination-and-span|일차결합과 생성]]의 정의) 직교사영의 (2)에 의해

$$
\lVert v - x_c \rVert^2 = \lVert v - w \rVert^2 + \lVert x_c - w \rVert^2
$$

이다. 직교사영의 (5)에 의해 $\lVert v \rVert^2 = \lVert w \rVert^2 + \lVert v - w \rVert^2$이고, 직교하는 열과 정규직교 열의 (3)에 의해 $\lVert w \rVert^2 = \langle v, u_1 \rangle^2 + \cdots + \langle v, u_r \rangle^2$이므로 $\lVert v - w \rVert^2$은 (1)의 첫째 괄호이다. [[finite-sum-of-vectors|벡터의 유한 합]]의 (C6)에 의해 $x_c - w$는 $k$번째 항이 $(c_k - \langle v, u_k \rangle) u_k$인 열의 합이므로, 다시 직교하는 열과 정규직교 열의 (3)에 의해 $\lVert x_c - w \rVert^2$은 (1)의 둘째 괄호이다. 이것을 넣으면 보일 등식이다.

**(2)** $d_k = \langle v, u_k \rangle$로 두면 $x_d = w$이다. 직교사영의 (2)에 의해 $E$의 모든 원소 $x$에서 $\lVert v - w \rVert \le \lVert v - x \rVert$이므로, 모든 $c$에서 $\lVert v - x_d \rVert \le \lVert v - x_c \rVert$이다.

거꾸로 계수의 열 $d'$이 모든 $c$에서 $\lVert v - x_{d'} \rVert \le \lVert v - x_c \rVert$를 만족한다고 하자. $c = d$로 두면 $\lVert v - x_{d'} \rVert \le \lVert v - w \rVert$이고, 위의 결과에서 $\lVert v - w \rVert \le \lVert v - x_{d'} \rVert$이므로 [[order-properties-of-reals|실수의 순서의 성질]]의 (1)의 (ii)에 의해 $\lVert v - x_{d'} \rVert = \lVert v - w \rVert$이다. 직교사영의 (2)의 마지막 문장에 의해 $x_{d'} = w$이다. 직교하는 열과 정규직교 열의 (1)에 의해 정규직교 열의 일차결합의 계수는 내적으로 정해지므로, 모든 $k$에서 $d'_k = \langle x_{d'}, u_k \rangle = \langle w, u_k \rangle = d_k$이다.

**(3)** $\langle u_1, u_1 \rangle = \tfrac{4 + 9 + 36}{49} = 1$, $\langle u_2, u_2 \rangle = \tfrac{36 + 4 + 9}{49} = 1$, $\langle u_1, u_2 \rangle = \tfrac{12 + 6 - 18}{49} = 0$이므로 $u_1, u_2$는 정규직교 열이다. $\langle v, u_1 \rangle = 2$, $\langle v, u_2 \rangle = 6$, $\lVert v \rVert^2 = 49$이다. (2)에 의해 가장 작게 하는 계수는 $c_1 = 2$, $c_2 = 6$이고, (1)에서 둘째 괄호가 $0 + 0 = 0$이므로 가장 작은 값은 $49 - (4 + 36) = 9$이다. 확인하면 $x_c = 2u_1 + 6u_2 = \bigl(\tfrac{40}{7}, \tfrac{18}{7}, -\tfrac{6}{7}\bigr)$이고 $v - x_c = \bigl(\tfrac{9}{7}, -\tfrac{18}{7}, \tfrac{6}{7}\bigr)$의 노름의 제곱은 $\tfrac{81 + 324 + 36}{49} = 9$이다.
:::

:::exercise[실수배를 더해도 노름이 줄지 않는 두 벡터]
$V$가 내적공간이고 $x, y \in V$라 하자.

1. $x \perp y$인 것은 정확히 모든 실수 $t$에서 $\lVert x \rVert \le \lVert x + ty \rVert$일 때임을 보여라.
2. 표준내적을 준 $\mathbb{R}^2$에서 $x = (1, 0)$, $y = (2, 1)$이면 $0 \le t$인 모든 실수 $t$에서 $\lVert x \rVert \le \lVert x + ty \rVert$이지만 $x$와 $y$는 직교하지 않음을 보여라. (1)의 "모든 실수 $t$"를 "$0$ 이상인 모든 실수 $t$"로 바꿀 수 없다.
:::

:::solution
직교는 [[orthogonal-vectors|직교]]의 것이고, 내적의 성질은 [[inner-product-space|내적과 내적공간]]의 번호로, 노름의 성질은 [[norm-in-inner-product-space|내적공간의 노름]]의 번호로 인용한다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이고, 순서에 관한 사실은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호로 인용한다. 노름의 (2)에 의해 $\lVert x \rVert \le \lVert x + ty \rVert$인 것은 정확히 $\langle x, x \rangle \le \langle x + ty, x + ty \rangle$일 때이다. 이것을 (가)라 하자.

**(1)** $x \perp y$라 하자. $t$가 실수이면 직교의 (3)에 의해 $1x \perp ty$이고, [[vector-space|벡터공간]]의 (V5)에 의해 $1x = x$이다. 직교의 (5)에 의해 $\lVert x + ty \rVert^2 = \lVert x \rVert^2 + \lVert ty \rVert^2$이다. 순서의 성질의 (5)의 (iii)과 (2)의 (i)에 의해 $\lVert x \rVert^2 \le \lVert x + ty \rVert^2$이고, 노름의 (2)의 $\lVert z \rVert^2 = \langle z, z \rangle$와 (가)에 의해 $\lVert x \rVert \le \lVert x + ty \rVert$이다.

거꾸로 모든 실수 $t$에서 $\lVert x \rVert \le \lVert x + ty \rVert$라 하자. $y = 0_V$이면 직교의 (2)에 의해 $x \perp y$이다. $y \ne 0_V$이면 조건 (iii)에 의해 $\langle y, y \rangle \ne 0$이고 $0 < \langle y, y \rangle$이다. $d = \langle x, y \rangle$로 두고 $t = -d\langle y, y \rangle^{-1}$이라 하자. 노름의 (5)와 내적과 내적공간의 (1)에 의해

$$
\begin{aligned}
\lVert x + ty \rVert^2 &= \lVert x \rVert^2 + 2td \\
&\quad + tt\langle y, y \rangle \\
&= \lVert x \rVert^2 - 2s + s \\
&= \lVert x \rVert^2 - s
\end{aligned}
$$

이다. 여기서 $s = (dd)\langle y, y \rangle^{-1}$이고, $2td = -2s$와 $tt\langle y, y \rangle = (dd)\langle y, y \rangle^{-1}\langle y, y \rangle^{-1}\langle y, y \rangle = s$는 (K1), (K2), (K9), (K12)의 (iii)과 $\langle y, y \rangle^{-1}\langle y, y \rangle = 1$에 의한다. 가정과 (가)에 의해 $\lVert x \rVert^2 \le \lVert x \rVert^2 - s$이므로 순서의 성질의 (2)의 (ii)에 의해 $0 \le -s$이고, (3)의 (iii)에 의해 $s \le 0$이다. 한편 순서의 성질의 (5)의 (iii), (6)의 (i), (4)의 (iv)에 의해 $0 \le s$이므로 (1)의 (ii)에 의해 $s = 0$이다. $\langle y, y \rangle^{-1} \ne 0$이므로 (K10)을 두 번 쓰면 $dd = 0$이고 $d = 0$이다. 곧 $x \perp y$이다.

**(2)** $\langle x, y \rangle = 2 \ne 0$이므로 $x$와 $y$는 직교하지 않는다. $t$가 실수이면 $x + ty = (1 + 2t, t)$이고

$$
\begin{aligned}
&\langle x + ty, x + ty \rangle \\
&= (1 + 2t)(1 + 2t) + tt \\
&= 1 + 4t + 5tt
\end{aligned}
$$

이다. $0 \le t$이면 순서의 성질의 (4)의 (iv)와 (5)의 (iii)에 의해 $0 \le 4t$이고 $0 \le 5tt$이므로, (2)의 (iii)에 의해 $1 = 1 + 0 + 0 \le 1 + 4t + 5tt$이다. $\langle x, x \rangle = 1$이므로 (가)에 의해 $\lVert x \rVert \le \lVert x + ty \rVert$이다. (1)과 어긋나지 않는다. 음수 $t = -\tfrac{2}{5}$에서는 $x + ty = \bigl(\tfrac{1}{5}, -\tfrac{2}{5}\bigr)$이고 $\langle x + ty, x + ty \rangle = \tfrac{1}{25} + \tfrac{4}{25} = \tfrac{1}{5} < 1$이어서 (가)에 의해 부등식이 깨진다.
:::

:::exercise[베셀 부등식이 모든 벡터에서 등식인 정규직교 열]
$V$가 내적공간이고(유한차원이라고 가정하지 않는다) $r \ge 0$이 정수이며 $u_1, \dots, u_r$이 $V$의 정규직교 열이라 하자.

1. 모든 $v \in V$에서 $\langle v, u_1 \rangle^2 + \cdots + \langle v, u_r \rangle^2 = \lVert v \rVert^2$이면 $u_1, \dots, u_r$은 $V$의 정규직교 기저이고, $V$는 유한차원이며 $\dim V = r$임을 보여라.
2. 거꾸로 $u_1, \dots, u_r$이 $V$의 정규직교 기저이면 모든 $v \in V$에서 위의 등식이 성립함을 보여라.
:::

:::solution
정규직교 열과 정규직교 기저는 [[orthonormal-list|직교하는 열과 정규직교 열]]과 [[orthonormal-basis|정규직교 기저]]의 것이다.

**(1)** $v \in V$라 하자. [[orthogonal-projection|직교사영]]의 (5)에 의해, 정규직교 열 $u_1, \dots, u_r$에 대한 베셀 부등식의 등호는 정확히 $v \in \operatorname{span}(u_1, \dots, u_r)$일 때 성립한다. 가정에 의해 모든 $v$에서 등호이므로 $V \subseteq \operatorname{span}(u_1, \dots, u_r)$이고, 생성은 $V$의 부분집합이므로 $\operatorname{span}(u_1, \dots, u_r) = V$이다. 곧 $u_1, \dots, u_r$은 $V$를 [[linear-combination-and-span|생성]]한다. 직교하는 열과 정규직교 열의 (2)에 의해 정규직교 열은 [[linear-independence|일차독립]]이므로, [[basis-iff-independent-and-spanning|기저는 일차독립이고 생성하는 열이다]]에 의해 $u_1, \dots, u_r$은 $V$의 기저이고, 정의에 의해 정규직교 기저이다. [[dimension|유한차원과 차원]]의 (1)과 (2)에 의해 $V$는 유한차원이고 $\dim V = r$이다.

$r = 0$이면 가정의 왼쪽은 빈 합 $0$이므로 모든 $v$에서 $\lVert v \rVert^2 = 0$이고, 위의 논증대로 $V = \{0_V\}$이며 빈 열이 정규직교 기저이다.

**(2)** 정규직교 기저의 (3)의 파스발 항등식에서 $w = v$로 두면 $\lVert v \rVert^2 = \langle v, u_1 \rangle^2 + \cdots + \langle v, u_r \rangle^2$이다.
:::

:::exercise[직교사영의 대각합]
$V$가 유한차원인 내적공간이고 $\dim V = n \ge 1$이라 하자.

1. $T : V \to V$가 선형사상이고 $b_1, \dots, b_n$이 $V$의 정규직교 기저이면 $\operatorname{tr} T = \langle T b_1, b_1 \rangle + \cdots + \langle T b_n, b_n \rangle$임을 보여라.
2. $E$가 $V$의 부분공간이면 $\operatorname{tr}(\operatorname{proj}_E) = \dim E$임을 보여라.
3. 표준내적을 준 $\mathbb{R}^3$에서 $u = (2, -3, 6)$, $E = \operatorname{span}(u)$일 때 (1)의 오른쪽을 표준기저로 계산해 (2)와 맞는지 확인하라.
:::

:::solution
선형사상의 대각합 $\operatorname{tr} T$는 [[determinant-and-trace-of-linear-map|선형사상의 행렬식과 대각합]]의 것이고, 행렬의 대각합은 [[trace|대각합]]의 것이다. $\operatorname{proj}_E$는 [[orthogonal-projection|직교사영]]의 (4)의 것이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다.

**(1)** $\mathcal{B} = b_1, \dots, b_n$이라 하자. $\dim V = n \ge 1$이므로 선형사상의 행렬식과 대각합의 정의에 의해 $\operatorname{tr} T = \operatorname{tr} [T]_{\mathcal{B}}$이다. [[orthonormal-basis|정규직교 기저]]의 (4)에서 $W = V$, $\mathcal{C} = \mathcal{B}$로 두면 모든 $k$에서 $([T]_{\mathcal{B}})_{k,k} = \langle T b_k, b_k \rangle$이다. 대각합의 정의에 의해 $\operatorname{tr} [T]_{\mathcal{B}}$는 $k$번째 항이 $([T]_{\mathcal{B}})_{k,k}$인 열의 합이고, 이 열은 $k$번째 항이 $\langle T b_k, b_k \rangle$인 열과 같다([[finite-sum-of-vectors|벡터의 유한 합]]). 따라서 보일 등식이 성립한다.

**(2)** [[dimension-of-subspace|부분공간의 차원]]의 (1), (2)에 의해 $E$는 유한차원이고 $e = \dim E \le n$이다. [[orthonormal-basis-exists|정규직교 기저의 존재와 확장]]의 (3)에 의해 $E$의 정규직교 기저 $b_1, \dots, b_e$가 있고, 이것은 $V$의 정규직교 열이며 $\operatorname{span}(b_1, \dots, b_e) = E$이다. 같은 항목의 (2)에 의해 길이 $n - e$인 열 $y_1, \dots, y_{n-e}$가 있어 이어 붙인 열 $c_1, \dots, c_n$($k \le e$이면 $c_k = b_k$, $c_{e+j} = y_j$)이 $V$의 정규직교 기저이다. 같은 항목의 (4)에 의해 $P = \operatorname{proj}_E : V \to V$가 정해진다.

$k \le e$이면 $c_k \in E$이므로 직교사영의 (4)의 (iii)에 의해 $P c_k = c_k$이고, $c_k$는 단위벡터이므로 $\langle P c_k, c_k \rangle = \langle c_k, c_k \rangle = 1$이다. $k > e$이면 $c$가 정규직교 열이므로 모든 $i \le e$에서 $c_k \perp c_i$이고, [[orthogonal-vectors|직교]]의 (4)에 의해 $c_k \perp \operatorname{span}(c_1, \dots, c_e) = E$이다. $0_V \in E$이고([[subspace|부분공간]]의 (S1)) $c_k - 0_V = c_k \perp E$이므로 $0_V$는 $c_k$의 $E$로의 직교사영이고, 직교사영의 (1)의 유일성에 의해 $P c_k = 0_V$이다. [[inner-product-space|내적과 내적공간]]의 (2)에 의해 $\langle P c_k, c_k \rangle = 0$이다.

(1)에 의해 $\operatorname{tr} P$는 처음 $e$개의 항이 $1$이고 나머지 $n - e$개의 항이 $0$인 열의 합이다. 벡터의 유한 합의 (H2)에 의해 이것은 처음 $e$개의 합과 나머지의 합을 더한 것이고, (H5)에 의해 나머지의 합은 $0$이다. $e \ge 1$이면 처음 $e$개는 [[matrix|행렬]]의 (6)의 $I_e$의 대각성분의 열이므로 그 합은 대각합의 (4)에 의해 $\operatorname{tr} I_e = e$이고, $e = 0$이면 빈 합 $0$이다. 따라서 (K4)에 의해 $\operatorname{tr} P = e + 0 = \dim E$이다.

**(3)** $\langle u, u \rangle = 4 + 9 + 36 = 49$이다. 직교사영의 (3)을 길이 $1$인 열 $u$에 쓰면 $P e_k = \langle e_k, u \rangle \langle u, u \rangle^{-1} u$이고, [[standard-inner-product|ℝⁿ 의 표준내적]]의 (2)에 의해 $\langle e_k, u \rangle = u_k$이므로 $\langle P e_k, e_k \rangle = u_k \cdot 49^{-1} \cdot u_k$이다. 정규직교 기저의 (5)에 의해 표준기저는 정규직교 기저이므로, (1)에 의해

$$
\operatorname{tr} P = \tfrac{4}{49} + \tfrac{9}{49} + \tfrac{36}{49} = 1
$$

이다. $u \ne 0$이므로 $u$ 하나로 된 열은 일차독립이고([[linear-independence|일차독립과 일차종속]]의 (I4)), 부분공간의 차원의 (4)에 의해 $\dim E = 1$이어서 (2)와 맞는다.
:::

:::exercise[직교하지 않는 두 단위벡터로 베셀 부등식이 깨지는 예]
표준내적을 준 $\mathbb{R}^2$에서 $u_1 = (1, 0)$, $u_2 = \bigl(\tfrac{8}{17}, \tfrac{15}{17}\bigr)$, $v = (1, 2)$라 하자.

1. $u_1$, $u_2$가 단위벡터이지만 직교하지 않음을 보여라.
2. $\langle v, u_1 \rangle^2 + \langle v, u_2 \rangle^2 > \lVert v \rVert^2$임을 보여라.
3. $u_1, u_2$에 그람–슈미트 과정을 써서 얻은 정규직교 열 $q_1, q_2$로는 $\langle v, q_1 \rangle^2 + \langle v, q_2 \rangle^2 = \lVert v \rVert^2$임을 보여라.
:::

:::solution
노름과 단위벡터는 [[norm-in-inner-product-space|내적공간의 노름]]의 것이고, 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다.

**(1)** $\langle u_1, u_1 \rangle = 1$이고 $\langle u_2, u_2 \rangle = \tfrac{64}{289} + \tfrac{225}{289} = 1$이므로 노름의 (4)에 의해 둘 다 단위벡터이다. $\langle u_1, u_2 \rangle = \tfrac{8}{17} \ne 0$이므로 직교하지 않는다.

**(2)** $\langle v, u_1 \rangle = 1$, $\langle v, u_2 \rangle = \tfrac{8}{17} + \tfrac{30}{17} = \tfrac{38}{17}$이므로 왼쪽은 $1 + \tfrac{1444}{289} = \tfrac{1733}{289}$이다. $\lVert v \rVert^2 = \langle v, v \rangle = 1 + 4 = 5 = \tfrac{1445}{289}$이고 $1445 < 1733$이므로 왼쪽이 더 크다. [[orthogonal-projection|직교사영]]의 (5)의 베셀 부등식은 정규직교 열에 대한 것이고, $u_1, u_2$는 (1)에 의해 정규직교 열이 아니다.

**(3)** [[gram-schmidt-process|그람–슈미트 과정]]을 쓰려면 $u_1, u_2$가 일차독립이어야 한다. $\alpha u_1 + \beta u_2 = \bigl(\alpha + \tfrac{8}{17}\beta, \tfrac{15}{17}\beta\bigr)$가 영벡터이면 둘째 값에서 $\beta = 0$, 첫째 값에서 $\alpha = 0$이므로 일차독립이다. 과정의 (1)에 의해 $v_1 = u_1$이고, $\langle u_2, v_1 \rangle = \tfrac{8}{17}$, $\langle v_1, v_1 \rangle = 1$이므로 $v_2 = u_2 - \tfrac{8}{17}u_1 = \bigl(0, \tfrac{15}{17}\bigr)$이다. $\lVert v_1 \rVert = 1$이고 $\lVert v_2 \rVert = \tfrac{15}{17}$이므로(노름의 (2)) 과정의 (2)에 의해 $q_1 = (1, 0)$, $q_2 = (0, 1)$이다. 그러면 $\langle v, q_1 \rangle^2 + \langle v, q_2 \rangle^2 = 1 + 4 = 5 = \lVert v \rVert^2$이다. $q_1, q_2$는 $\mathbb{R}^2$의 정규직교 기저이므로([[orthonormal-basis|정규직교 기저]]의 (1)과 [[dimension|유한차원과 차원]]의 (4)) 이것은 그 항목의 (3)의 파스발 항등식이기도 하다.
:::
