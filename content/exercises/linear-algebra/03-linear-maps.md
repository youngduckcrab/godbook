---
written_by: Claude
status: reviewed
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "2장 7절, 연습문제 7.3 (p.67)"
  - ref: treil-linear-algebra-done-wrong
    loc: "1장 6절, 연습문제 6.2–6.4 (p.29)"
added: 2026-11-26
---

:::exercise[ℝ³에서 ℝ²로의 사상의 핵과 상]
각 $x = (x_1, x_2, x_3) \in \mathbb{R}^3$에서 값이 $(x_1 + x_2,\ x_2 - x_3)$인 함수 $T : \mathbb{R}^3 \to \mathbb{R}^2$를 생각한다.

1. $T$가 선형사상임을 보여라.
2. $\operatorname{Ker} T = \operatorname{span}((1, -1, -1))$임을 보여라.
3. $\operatorname{Ran} T = \mathbb{R}^2$임을 보여라.
4. $T$는 단사인가?
:::

:::solution
연산은 [[real-function-space|실숫값 함수의 공간과 ℝⁿ]]에서처럼 값마다 계산하고, 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]에 의한다. 먼저 실수 $p$, $q$, $r$, $w$에 대하여 $(p + q) + (r + w) = (p + r) + (q + w)$임을 보인다. (K2), (K2), (K1), (K2), (K2)를 차례로 쓰면 $(p + q) + (r + w) = p + (q + (r + w)) = p + ((q + r) + w) = p + ((r + q) + w) = p + (r + (q + w)) = (p + r) + (q + w)$이다. 이것을 (가)라 부른다.

**(1)** $x$, $y \in \mathbb{R}^3$이라 하자. $T(x + y)$의 첫째 값은 $(x_1 + y_1) + (x_2 + y_2)$이고 (가)에 의해 $(x_1 + x_2) + (y_1 + y_2)$, 곧 $Tx + Ty$의 첫째 값이다. 둘째 값은 (K12)의 (iv)와 (가)에 의해

$$
\begin{aligned}
&(x_2 + y_2) + \bigl(-(x_3 + y_3)\bigr)\\
&\quad= (x_2 + y_2) + \bigl((-x_3) + (-y_3)\bigr)\\
&\quad= \bigl(x_2 + (-x_3)\bigr) + \bigl(y_2 + (-y_3)\bigr)
\end{aligned}
$$

이고, 이것은 $Tx + Ty$의 둘째 값이다. 실수 $\alpha$에 대하여 $T(\alpha x)$의 첫째 값은 (K3)에 의해 $\alpha x_1 + \alpha x_2 = \alpha(x_1 + x_2)$이고, 둘째 값은 (K12)의 (ii)와 (K3)에 의해 $\alpha x_2 + (-(\alpha x_3)) = \alpha x_2 + \alpha(-x_3) = \alpha(x_2 - x_3)$이다. 두 값이 $\alpha(Tx)$의 값과 같다. 따라서 (T-합)과 (T-배)가 성립하고 $T$는 [[linear-map|선형사상]]이다.

**(2)** $Tx = (0, 0)$인 것은 정확히 $x_1 + x_2 = 0$이고 $x_2 - x_3 = 0$일 때이다. 첫째 식은 (K8)의 (ii)에 의해 $x_2 = -x_1$과 같고, 둘째 식은 (K12)의 (v)에 의해 $x_3 = x_2$와 같다. 따라서 $x \in \operatorname{Ker} T$이면 $x = (x_1, -x_1, -x_1)$이고, (K4)와 (K12)의 (ii)에 의해 이것은 $x_1(1, -1, -1)$이다. 거꾸로 실수 $t$에 대하여 $t(1, -1, -1) = (t, -t, -t)$이고 그 $T$의 값은 $(t + (-t),\ (-t) - (-t)) = (0, 0)$이다((K8), (K12)의 (v)). 곧 [[kernel-and-range|핵과 상]]의 정의에 의해 $\operatorname{Ker} T = \{t(1, -1, -1) : t \text{는 실수}\}$이고, [[linear-combination-and-span|일차결합과 생성]]의 (N4)에 의해 이것은 $\operatorname{span}((1, -1, -1))$이다.

**(3)** $\operatorname{Ran} T \subseteq \mathbb{R}^2$이다. 거꾸로 $(a, b) \in \mathbb{R}^2$이면 $T(a, 0, -b)$의 첫째 값은 $a + 0 = a$((K4))이고 둘째 값은 $0 + (-(-b)) = 0 + b = b$((K9), (K1), (K4))이므로 $(a, b) = T(a, 0, -b) \in \operatorname{Ran} T$이다. 따라서 $\operatorname{Ran} T = \mathbb{R}^2$이고, 핵과 상의 (3)에 의해 $T$는 전사이다.

**(4)** 단사가 아니다. $(1, -1, -1)$은 (2)에 의해 $\operatorname{Ker} T$에 속하고, 첫째 값이 $1 \ne 0$((K4))이므로 영벡터 $(0, 0, 0)$이 아니다. 따라서 $\operatorname{Ker} T \ne \{(0, 0, 0)\}$이고, [[injective-iff-trivial-kernel|단사인 선형사상과 핵]]의 (1)에 의해 $T$는 단사가 아니다.
:::

:::exercise[기저 위의 값으로 정한 사상의 식]
$\mathbb{R}^2$에서 $v_1 = (1, 1)$, $v_2 = (0, 1)$이라 하자.

1. 열 $v_1, v_2$가 $\mathbb{R}^2$의 기저임을 보이고, $x = (x_1, x_2)$의 이 기저에 관한 좌표를 구하라.
2. $Tv_1 = (2, 1)$, $Tv_2 = (1, 1)$인 선형사상 $T : \mathbb{R}^2 \to \mathbb{R}^2$가 정확히 하나 있음을 보이고 $T(x_1, x_2)$를 구하라.
3. $T$가 동형사상임을 보이고, 이로부터 열 $(2, 1), (1, 1)$이 $\mathbb{R}^2$의 기저임을 결론하라.
:::

:::solution
연산과 실수의 계산은 앞 문제와 같은 근거에 의한다.

**(1)** 실수 $\alpha$, $\beta$에 대하여 $\alpha v_1 + \beta v_2 = (\alpha, \alpha) + (0, \beta) = (\alpha, \alpha + \beta)$이다([[finite-sum-of-vectors|(H0)]], (K4), (K9)). $x = (x_1, x_2)$가 주어지면 $\alpha = x_1$, $\beta = x_2 - x_1$로 두어 (K1), (K2), (K8), (K4)에 의해 $\alpha + \beta = x_1 + ((-x_1) + x_2) = (x_1 + (-x_1)) + x_2 = 0 + x_2 = x_2$이므로 $x = \alpha v_1 + \beta v_2$이다(존재). 거꾸로 $\alpha v_1 + \beta v_2 = x$이면 성분별 같음에 의해 $\alpha = x_1$이고 $\alpha + \beta = x_2$이며, (K4), (K8), (K2), (K1)에 의해 $\beta = \beta + (\alpha + (-\alpha)) = (\alpha + \beta) + (-\alpha) = x_2 - x_1$이다(유일성). 따라서 [[basis|기저]]의 정의에 의해 $v_1, v_2$는 기저이고 $x$의 좌표는 $x_1$, $x_2 - x_1$이다.

**(2)** (1)과 [[linear-map-determined-by-basis|기저 위의 값으로 정해지는 선형사상]]의 (2)에 의해 그런 $T$가 정확히 하나 있고 $Tx = x_1(2, 1) + (x_2 - x_1)(1, 1)$이다. 첫째 값은 $2x_1 + (x_2 + (-x_1))$이다. (K1), (K2)로 묶음을 바꾸면 $(2x_1 + (-x_1)) + x_2$이고, (K9), (K12)의 (i), (K7), (K4)에 의해 $2x_1 + (-x_1) = 2x_1 + (-1)x_1 = (2 + (-1))x_1 = 1x_1 = x_1$이므로 첫째 값은 $x_1 + x_2$이다. 둘째 값은 (1)의 계산과 같이 $x_1 + (x_2 + (-x_1)) = x_2$이다. 따라서

$$
T(x_1, x_2) = (x_1 + x_2,\ x_2)
$$

이다. 확인하면 $T(1, 1) = (2, 1)$, $T(0, 1) = (1, 1)$이다.

**(3)** 핵: $T(x_1, x_2) = (0, 0)$이면 둘째 값에서 $x_2 = 0$이고, 첫째 값에서 $x_1 = x_1 + 0 = 0$이다((K4)). 따라서 $\operatorname{Ker} T = \{(0, 0)\}$이고([[linear-map|(T1)]]에 의해 $(0, 0)$은 핵에 속한다), [[injective-iff-trivial-kernel|단사인 선형사상과 핵]]의 (1)에 의해 $T$는 단사이다. 상: $(a, b) \in \mathbb{R}^2$이면 $T(a - b, b)$의 첫째 값은 $(a + (-b)) + b = a + ((-b) + b) = a$((K2), (K1), (K8), (K4))이고 둘째 값은 $b$이므로 $(a, b) \in \operatorname{Ran} T$이다. 따라서 $\operatorname{Ran} T = \mathbb{R}^2$이고 [[kernel-and-range|핵과 상]]의 (3)에 의해 $T$는 전사이다. 단사이고 전사이므로 전단사이고, [[isomorphism|동형사상]]의 정의에 의해 $T$는 동형사상이다.

$T$가 동형사상이고 (1)에서 $v_1, v_2$가 기저이므로 [[isomorphism-and-bases|동형사상과 기저]]의 (3)에 의해 $Tv_1, Tv_2$, 곧 $(2, 1), (1, 1)$은 $\mathbb{R}^2$의 기저이다.
:::

:::exercise[합성의 핵과 상]
$U$, $V$, $W$가 벡터공간이고 $T : U \to V$, $S : V \to W$가 선형사상이라 하자. 다음을 보여라.

1. $\operatorname{Ker} T \subseteq \operatorname{Ker}(S \circ T)$이고 $\operatorname{Ran}(S \circ T) \subseteq \operatorname{Ran} S$이다.
2. $S$가 단사이면 $\operatorname{Ker}(S \circ T) = \operatorname{Ker} T$이다.
3. $T : U \to V$가 전사이면 $\operatorname{Ran}(S \circ T) = \operatorname{Ran} S$이다.
:::

:::solution
[[composition-of-linear-maps|선형사상의 합성]]의 (1)에 의해 $S \circ T : U \to W$는 선형사상이므로 핵과 상이 정의된다. [[function-composition|합성]]의 정의에 의해 $u \in U$에서 $(S \circ T)u = S(Tu)$이다.

**(1)** $u \in \operatorname{Ker} T$이면 $Tu = 0_V$이고 [[linear-map|선형사상]]의 (T1)에 의해 $(S \circ T)u = S0_V = 0_W$이므로 $u \in \operatorname{Ker}(S \circ T)$이다. $w \in \operatorname{Ran}(S \circ T)$이면 $w = S(Tu)$인 $u \in U$가 있고, $Tu \in V$이므로 [[kernel-and-range|핵과 상]]의 정의에 의해 $w \in \operatorname{Ran} S$이다.

**(2)** (1)에 의해 $\operatorname{Ker} T \subseteq \operatorname{Ker}(S \circ T)$이다. 거꾸로 $u \in \operatorname{Ker}(S \circ T)$이면 $S(Tu) = 0_W = S0_V$((T1))이고, $S$가 [[injective-surjective-bijective|단사]]이므로 $Tu = 0_V$이다. 곧 $u \in \operatorname{Ker} T$이다.

**(3)** (1)에 의해 $\operatorname{Ran}(S \circ T) \subseteq \operatorname{Ran} S$이다. 거꾸로 $w \in \operatorname{Ran} S$이면 $w = Sv$인 $v \in V$가 있다. $T : U \to V$가 전사이므로 $v = Tu$인 $u \in U$가 있고, $w = S(Tu) = (S \circ T)u \in \operatorname{Ran}(S \circ T)$이다.
:::

:::exercise[부분공간의 상과 역상]
$V$, $W$가 벡터공간이고 $T : V \to W$가 선형사상이라 하자. 다음을 보여라.

1. $U$가 $V$의 부분공간이면 상 $T(U) = \{Tu : u \in U\}$는 $W$의 부분공간이다.
2. $Y$가 $W$의 부분공간이면 역상 $T^{-1}(Y) = \{v \in V : Tv \in Y\}$는 $V$의 부분공간이고 $\operatorname{Ker} T \subseteq T^{-1}(Y)$이다.
:::

:::solution
상과 역상은 [[image-and-preimage|상과 역상]]에서 정한 것이고, $T^{-1}(Y)$는 $T$가 전단사가 아니어도 정의된다.

**(1)** [[kernel-and-range|핵과 상]]의 (4)에 의해 $U$는 제한한 연산으로 벡터공간이고 $T$를 $U$로 제한한 함수 $T|_U : U \to W$는 선형사상이다. [[adding-or-removing-an-element|함수의 제한]]의 정의에 의해 모든 $u \in U$에서 $T|_U(u) = Tu$이므로 $\operatorname{Ran} T|_U = \{Tu : u \in U\} = T(U)$이다. 핵과 상의 (1)에 의해 $\operatorname{Ran} T|_U$는 $W$의 부분공간이므로 $T(U)$는 $W$의 부분공간이다.

**(2)** [[subspace|부분공간]]의 (S1)–(S3)을 확인한다. [[linear-map|선형사상]]의 (T1)에 의해 $T0_V = 0_W$이고 (S1)에 의해 $0_W \in Y$이므로 $0_V \in T^{-1}(Y)$이다. $u$, $v \in T^{-1}(Y)$이면 $Tu$, $Tv \in Y$이고 (T-합)과 $Y$의 (S2)에 의해 $T(u + v) = Tu + Tv \in Y$이므로 $u + v \in T^{-1}(Y)$이다. 실수 $\alpha$에 대하여 (T-배)와 $Y$의 (S3)에 의해 $T(\alpha v) = \alpha Tv \in Y$이므로 $\alpha v \in T^{-1}(Y)$이다. 따라서 $T^{-1}(Y)$는 $V$의 부분공간이다.

$v \in \operatorname{Ker} T$이면 $Tv = 0_W \in Y$이므로 $v \in T^{-1}(Y)$이다. 특히 $Y = \{0_W\}$이면 $T^{-1}(Y) = \operatorname{Ker} T$이고, (1)에서 $U = V$이면 $T(U) = \operatorname{Ran} T$이다.
:::

:::exercise[한쪽 합성이 항등함수일 때 공역을 나누기]
$V$, $W$가 벡터공간이고 $T : V \to W$와 $S : W \to V$가 선형사상이며 $S \circ T = i_V$라 하자. 다음을 보여라.

1. $T$는 단사이고 $S : W \to V$는 전사이다.
2. $\operatorname{Ran} T \cap \operatorname{Ker} S = \{0_W\}$이다.
3. $\operatorname{Ran} T + \operatorname{Ker} S = W$이다.
:::

:::solution
$\operatorname{Ran} T$와 $\operatorname{Ker} S$는 [[kernel-and-range|핵과 상]]의 (1)에 의해 $W$의 부분공간이다. 가정에 의해 모든 $v \in V$에서 $S(Tv) = i_V(v) = v$이다.

**(1)** $v \in \operatorname{Ker} T$이면 [[linear-map|선형사상]]의 (T1)에 의해 $v = S(Tv) = S0_W = 0_V$이다. (T1)에 의해 $0_V \in \operatorname{Ker} T$이므로 $\operatorname{Ker} T = \{0_V\}$이고, [[injective-iff-trivial-kernel|단사인 선형사상과 핵]]의 (1)에 의해 $T$는 단사이다. 또 모든 $v \in V$가 $v = S(Tv)$로 $S$의 값이므로 $\operatorname{Ran} S = V$이고, 핵과 상의 (3)에 의해 $S : W \to V$는 전사이다.

**(2)** 두 부분공간은 [[subspace|(S1)]]에 의해 $0_W$를 포함한다. 거꾸로 $w \in \operatorname{Ran} T \cap \operatorname{Ker} S$라 하자. $w = Tv$인 $v \in V$가 있고 $Sw = 0_V$이다. 그러면 $v = S(Tv) = Sw = 0_V$이고 (T1)에 의해 $w = T0_V = 0_W$이다.

**(3)** $\operatorname{Ran} T$와 $\operatorname{Ker} S$의 원소는 $W$의 원소이므로 그 합도 $W$의 원소이다. 거꾸로 $w \in W$라 하고 $a = T(Sw)$로 둔다. $a \in \operatorname{Ran} T$이다. (T2)와 가정에 의해 $S(w - a) = Sw - S(T(Sw)) = Sw - Sw$이고, [[vector-space-basic-properties|(B12)]]에 의해 이것은 $0_V$이므로 $w - a \in \operatorname{Ker} S$이다. 또 [[vector-space|(V2)]], (V1), [[vector-space-basic-properties|(B2)]]와 영벡터의 정의에 의해

$$
\begin{aligned}
a + (w - a) &= (a + w) + (-a)\\
&= (w + a) + (-a)\\
&= w + (a + (-a))\\
&= w + 0_W = w
\end{aligned}
$$

이다. 따라서 $w$는 [[subspace-intersection-and-sum|부분공간의 교집합과 합]]에서 정한 합 $\operatorname{Ran} T + \operatorname{Ker} S$의 원소이고, 두 포함에 의해 $\operatorname{Ran} T + \operatorname{Ker} S = W$이다.
:::

:::exercise[한쪽 합성만 항등함수인 두 선형사상]
각 실수 $x$에서 값이 $(x, 2x)$인 함수 $T : \mathbb{R} \to \mathbb{R}^2$와, 각 $y = (y_1, y_2) \in \mathbb{R}^2$에서 값이 $y_2 - y_1$인 함수 $S : \mathbb{R}^2 \to \mathbb{R}$를 생각한다.

1. $T$와 $S$가 선형사상이고 $S \circ T = i_{\mathbb{R}}$임을 보여라.
2. $T \circ S \ne i_{\mathbb{R}^2}$이고, $T$와 $S$는 모두 동형사상이 아님을 보여라. 따라서 [[isomorphism|동형사상]]의 (3)에서 두 등식 가운데 $S \circ T = i_V$ 하나만으로는 $T$가 동형사상이라는 결론이 나오지 않는다.
3. 문제 5의 (3)이 말하는 대로 $(1, 0)$을 $\operatorname{Ran} T$의 원소와 $\operatorname{Ker} S$의 원소의 합으로 써라.
:::

:::solution
$\mathbb{R}$은 [[real-function-space|실숫값 함수의 공간과 ℝⁿ]]의 (2)의 벡터공간이고, 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]에 의한다.

**(1)** $w = (1, 2)$라 하면 (K4)와 (K1)에 의해 모든 실수 $x$에서 $xw = (x, 2x) = Tx$이다. 실수 $x$, $y$, $\alpha$에 대하여 [[vector-space|(V8)]]에 의해 $T(x + y) = (x + y)w = xw + yw = Tx + Ty$이고, (V6)에 의해 $T(\alpha x) = (\alpha x)w = \alpha(xw) = \alpha Tx$이다. 따라서 $T$는 [[linear-map|선형사상]]이다.

[[linear-map-examples|선형사상의 예]]의 (4)에 의해 각 $y$에서 값이 $y_1$인 함수 $p_1$과 값이 $y_2$인 함수 $p_2$는 $L(\mathbb{R}^2, \mathbb{R})$의 원소이다. [[linear-maps-form-a-vector-space|선형사상의 공간]]의 (1)에 의해 $p_2 + (-1)p_1$은 선형사상이고, 그 $y$에서의 값은 $y_2 + (-1)y_1 = y_2 + (-y_1)$((K9))이다. 이것은 $Sy$이므로 함수의 같음에 의해 $S = p_2 + (-1)p_1$이고 $S$는 선형사상이다.

모든 실수 $x$에서 $S(Tx) = 2x + (-x) = 2x + (-1)x = (2 + (-1))x = 1x = x$이다((K9), (K12)의 (i), (K7), (K1), (K4)). 따라서 $S \circ T = i_{\mathbb{R}}$이다.

**(2)** $S(1, 0) = 0 + (-1) = -1$이므로 $(T \circ S)(1, 0) = T(-1) = (-1, -2)$이다((K12)의 (ii)). $-1 = 1$이라면 $1 + 1 = 1 + (-1) = 0$이 되어 (K7)의 $1 + 1 = 2 \ne 0$에 어긋나므로 $-1 \ne 1$이다. 첫째 값이 다르므로 $(T \circ S)(1, 0) \ne (1, 0)$이고 $T \circ S \ne i_{\mathbb{R}^2}$이다.

$T$: $(1, 0) \in \operatorname{Ran} T$라 하면 $(x, 2x) = (1, 0)$인 실수 $x$가 있어 $x = 1$이고 $2x = 0$이다. 그러면 $2 = 2 \cdot 1 = 0$((K4))이 되어 (K7)에 어긋난다. 따라서 $T : \mathbb{R} \to \mathbb{R}^2$는 전사가 아니고([[kernel-and-range|핵과 상]]의 (3)) 동형사상이 아니다.

$S$: $S(1, 1) = 1 + (-1) = 0$이고 (T1)에 의해 $S(0, 0) = 0$이다. $(1, 1) \ne (0, 0)$이므로 $S$는 단사가 아니고 동형사상이 아니다.

$T$와 $S$는 선형사상이고 $S \circ T = i_{\mathbb{R}}$이지만 $T$는 동형사상이 아니다.

**(3)** 문제 5의 풀이를 따라 $a = T(S(1, 0)) = (-1, -2)$로 두면 $a \in \operatorname{Ran} T$이다. $(1, 0) - a = (1 + 1, 0 + 2) = (2, 2)$이고 $S(2, 2) = 2 + (-2) = 0$이므로 $(2, 2) \in \operatorname{Ker} S$이다. 실제로 $(-1, -2) + (2, 2) = (1, 0)$이다.
:::
