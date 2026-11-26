---
written_by: Claude
status: reviewed
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "1장 2절, 연습문제 2.1 (p.11); 2장 5절, 연습문제 5.1 f) (p.56)"
added: 2026-11-26
---

:::exercise[식 하나로 정한 ℝ³의 평면]
$x \in \mathbb{R}^3$의 $i$번째 값을 $x_i$로 쓰고

$$
W = \{x \in \mathbb{R}^3 : x_1 + x_2 + x_3 = 0\}
$$

이라 하자.

1. $W$가 $\mathbb{R}^3$의 부분공간임을 보여라.
2. $u = (1, -1, 0)$, $w = (0, 1, -1)$로 된 길이 $2$인 열이 벡터공간 $W$의 기저임을 보이고 $\dim W$를 구하라.
3. $(2, -3, 1)$이 $W$에 속함을 확인하고, (2)의 기저에 관한 좌표를 구하라.
:::

:::solution
$\mathbb{R}^3$의 원소의 같음, 덧셈, 스칼라배는 [[real-function-space|실숫값 함수의 공간]]의 진술의 $\mathbb{R}^n$ 문단대로 자리마다 계산하고, 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)로 한다. $x_1 + x_2 + x_3$은 길이 $3$인 실수의 열의 합이고, [[finite-sum-of-vectors|벡터의 유한 합]]의 정의에 의해 $(x_1 + x_2) + x_3$이다. 그 항목의 성질은 $V = \mathbb{R}$로 두고 쓴다.

**(1)** [[subspace|부분공간]]의 (S1)–(S3)을 확인한다. $\mathbb{R}^3$의 영벡터는 $(0, 0, 0)$이고, 모든 항이 $0$인 열의 합은 벡터의 유한 합의 (H5)에 의해 $0$이므로 (S1)이 성립한다. $x, y \in W$이면 $x + y = (x_1 + y_1, x_2 + y_2, x_3 + y_3)$이고, (H3)(항별 합)에 의해

$$
\begin{aligned}
&(x_1 + y_1) + (x_2 + y_2) + (x_3 + y_3)\\
&= (x_1 + x_2 + x_3) + (y_1 + y_2 + y_3)\\
&= 0 + 0 = 0
\end{aligned}
$$

이므로((K4)) $x + y \in W$이다. 실수 $\alpha$에 대하여 $\alpha x = (\alpha x_1, \alpha x_2, \alpha x_3)$이고, (H4)에 의해 $\alpha x_1 + \alpha x_2 + \alpha x_3 = \alpha(x_1 + x_2 + x_3) = \alpha 0 = 0$이므로((K9)) $\alpha x \in W$이다.

**(2)** $1 + (-1) + 0 = (1 + (-1)) + 0 = 0 + 0 = 0$이고 $0 + 1 + (-1) = 1 + (-1) = 0$이므로((K4), (K8)의 (ii)) $u, w \in W$이다.

*일차독립.* 실수 $\alpha$, $\beta$에 대하여 (K4), (K9), (K12)의 (ii)로 $\alpha u = (\alpha, -\alpha, 0)$, $\beta w = (0, \beta, -\beta)$이고, 길이 $2$인 일차결합은 (H0)에 의해 두 벡터의 합이므로 $\alpha u + \beta w = (\alpha, -\alpha + \beta, -\beta)$이다. 이것이 $(0, 0, 0)$이면 첫째 값에서 $\alpha = 0$이고, 셋째 값에서 $-\beta = 0$이므로 (K9)에 의해 $\beta = -(-\beta) = -0 = 0$이다($0 + 0 = 0$과 (K8)의 (ii)에 의해 $-0 = 0$). 따라서 [[linear-independence|일차독립]]의 정의에 의해 열 $u, w$는 $\mathbb{R}^3$에서 일차독립이다.

*생성.* $x \in W$라 하자. $(x_1 + x_2) + x_3 = 0$을 (K1), (K2)로 $x_2 + (x_1 + x_3) = 0$으로 고쳐 쓰면, (K8)의 (ii)와 (K12)의 (iv)에 의해 $x_2 = -(x_1 + x_3) = (-x_1) + (-x_3)$이다. 그러면 위의 계산에 $\alpha = x_1$, $\beta = -x_3$을 넣어

$$
\begin{aligned}
&x_1 u + (-x_3) w\\
&= (x_1, -x_1 + (-x_3), -(-x_3))\\
&= (x_1, x_2, x_3) = x
\end{aligned}
$$

이다((K9)의 $-(-a) = a$). 따라서 $x \in \operatorname{span}(u, w)$이고 $W \subseteq \operatorname{span}(u, w)$이다. 거꾸로 $u$, $w$는 부분공간 $W$에 속하므로 [[linear-combination-and-span|일차결합과 생성]]의 (N3)에 의해 $\operatorname{span}(u, w) \subseteq W$이다. 곧 $\operatorname{span}(u, w) = W$이다.

열 $u, w$는 모든 항이 $W$에 속하고 $\mathbb{R}^3$에서 일차독립이며 생성이 $W$이므로, [[sequences-in-a-subspace|부분공간 안의 열]]의 (J4)에 의해 벡터공간 $W$의 기저이다. 같은 항목의 마지막 문단에 의해 $W$는 [[dimension|유한차원]]이고 $\dim W = 2$이다.

**(3)** $2 + (-3) + 1 = 0$이므로 $(2, -3, 1) \in W$이다. (2)의 생성 계산에 $x_1 = 2$, $x_3 = 1$을 넣으면 $(2, -3, 1) = 2u + (-1)w$이고, 실제로 $2u = (2, -2, 0)$, $(-1)w = (0, -1, 1)$의 합은 $(2, -3, 1)$이다. (J1)에 의해 벡터공간 $W$에서 계산한 일차결합은 $\mathbb{R}^3$에서 계산한 것과 같으므로, 이 등식은 $W$에서도 성립한다. [[basis|기저]]의 정의에 의해 계수의 열은 하나뿐이므로 좌표는 $2, -1$이다.
:::

:::exercise[2 × 2 행렬의 공간과 그 차원]
$2 \times 2$ 행렬

$$
\begin{aligned}
H_1 &= \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, & H_2 &= \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix},\\
H_3 &= \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}, & H_4 &= \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}
\end{aligned}
$$

을 생각하자.

1. 모든 $2 \times 2$ 행렬 $A$에 대하여 $A = a_{1,1}H_1 + a_{1,2}H_2 + a_{2,1}H_3 + a_{2,2}H_4$임을 보이고, 길이 $4$인 열 $H_1, H_2, H_3, H_4$가 벡터공간 $M_{2 \times 2}$의 기저임을 보여라. $\dim M_{2 \times 2}$는 얼마인가?
2. 선형사상의 공간 $L(\mathbb{R}^2, \mathbb{R}^2)$가 유한차원이고 그 차원이 $4$이며 $\mathbb{R}^4$와 동형임을 보여라.
:::

:::solution
**(1)** [[matrix|행렬]]의 진술에 의해 $M_{2 \times 2}$는 $X = \{1, 2\} \times \{1, 2\}$인 함수의 공간 $\mathbb{R}^X$이고, (1)의 연산으로 벡터공간이다. 실수의 열 $\alpha_1, \alpha_2, \alpha_3, \alpha_4$에 대하여 $C = \alpha_1 H_1 + \alpha_2 H_2 + \alpha_3 H_3 + \alpha_4 H_4$라 하자. [[standard-basis|표준기저]]의 (1)(함수들의 합의 값)에 의해 $C$의 $(j, k)$ 성분은 네 행렬 $\alpha_i H_i$의 $(j, k)$ 성분의 합이고, 행렬의 (1)에 의해 $\alpha_i H_i$의 $(j, k)$ 성분은 $\alpha_i$와 $H_i$의 $(j, k)$ 성분의 곱이다.

$(1, 1)$ 성분을 보면 $H_1$의 것만 $1$이고 나머지는 $0$이므로, 네 항은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K4), (K9)에 의해 $\alpha_1, 0, 0, 0$이다. 첫째 항이 아닌 항이 모두 $0$이므로 [[finite-sum-of-vectors|벡터의 유한 합]]의 (H7)($V = \mathbb{R}$)에 의해 합은 $\alpha_1$이다. 같은 계산으로 $(1, 2)$, $(2, 1)$, $(2, 2)$ 성분은 각각 $\alpha_2$, $\alpha_3$, $\alpha_4$이다. 곧

$$
\begin{aligned}
&\alpha_1 H_1 + \alpha_2 H_2 + \alpha_3 H_3 + \alpha_4 H_4\\
&\quad= \begin{pmatrix} \alpha_1 & \alpha_2 \\ \alpha_3 & \alpha_4 \end{pmatrix}
\end{aligned}
$$

이다(행렬의 (2)).

*존재.* $\alpha_1 = a_{1,1}$, $\alpha_2 = a_{1,2}$, $\alpha_3 = a_{2,1}$, $\alpha_4 = a_{2,2}$로 두면 위 행렬은 $A$와 모든 성분이 같으므로 행렬의 (2)에 의해 $A = a_{1,1}H_1 + a_{1,2}H_2 + a_{2,1}H_3 + a_{2,2}H_4$이다.

*유일성.* $\alpha_1 H_1 + \cdots + \alpha_4 H_4 = \beta_1 H_1 + \cdots + \beta_4 H_4$이면 위 계산에 의해 두 행렬 $\begin{pmatrix} \alpha_1 & \alpha_2 \\ \alpha_3 & \alpha_4 \end{pmatrix}$와 $\begin{pmatrix} \beta_1 & \beta_2 \\ \beta_3 & \beta_4 \end{pmatrix}$가 같고, 행렬의 (2)에 의해 모든 $i$에서 $\alpha_i = \beta_i$이다.

따라서 [[basis|기저]]의 정의에 의해 $H_1, H_2, H_3, H_4$는 $M_{2 \times 2}$의 기저이고, [[dimension|유한차원과 차원]]의 (1), (2)에 의해 $M_{2 \times 2}$는 유한차원이며 $\dim M_{2 \times 2} = 4$이다.

**(2)** [[matrix-of-a-linear-map|선형사상의 행렬]]의 (4)에 의해 $\Phi : L(\mathbb{R}^2, \mathbb{R}^2) \to M_{2 \times 2}$는 동형사상이므로 $L(\mathbb{R}^2, \mathbb{R}^2) \cong M_{2 \times 2}$이고, [[isomorphism|동형사상]]의 (4)에 의해 $M_{2 \times 2} \cong L(\mathbb{R}^2, \mathbb{R}^2)$이다. (1)에서 $M_{2 \times 2}$가 유한차원이고 차원이 $4$이므로, [[isomorphic-iff-equal-dimension|유한차원 공간이 동형일 조건]]의 (1)에 의해 $L(\mathbb{R}^2, \mathbb{R}^2)$도 유한차원이고 $\dim L(\mathbb{R}^2, \mathbb{R}^2) = 4$이다. 차원의 (4)에 의해 $\dim \mathbb{R}^4 = 4$이므로, 유한차원 공간이 동형일 조건의 (2)에 의해 $L(\mathbb{R}^2, \mathbb{R}^2) \cong \mathbb{R}^4$이다.
:::

:::exercise[무한차원을 일차독립인 열의 길이로 판정하기]
$V$가 벡터공간이라 하자.

1. $V$가 무한차원인 것은 정확히 모든 정수 $N \ge 0$에 대하여 길이 $N$인 $V$의 일차독립인 벡터의 열이 있을 때임을 증명하라.
2. $V$의 부분공간 $W$가 (제한한 연산에 관한 벡터공간으로서) 무한차원이면 $V$도 무한차원임을 (1)로 보여라.
:::

:::solution
**(1)** *모든 길이가 있으면 무한차원이다.* 모든 정수 $N \ge 0$에 대하여 길이 $N$인 일차독립인 열이 있다고 하자. [[proof-by-contradiction|귀류법]]으로 $V$가 [[dimension|유한차원]]이라 가정하고 $d = \dim V$라 하자. $d \ge 0$이므로 $d + 1$도 $0$ 이상의 정수이고, 가정에 의해 길이 $d + 1$인 [[linear-independence|일차독립]]인 열이 있다. [[independent-and-spanning-bounds|일차독립인 열과 생성하는 열의 길이]]의 (1)에 의해 $d + 1 \le d$이다. 그런데 [[well-ordering-principle|정렬 원리]]의 (L3)에 의해 $d < d + 1$이고, (L1)에 의해 $d < d + 1$과 $d + 1 \le d$는 함께 성립하지 않는다. 이 모순에 의해 $V$는 무한차원이다.

*무한차원이면 모든 길이가 있다.* $V$가 무한차원이라 하자. 정수 $N \ge 0$마다 명제 $S_N$을 "길이 $N$인 $V$의 일차독립인 열이 있다"로 두고, [[mathematical-induction|수학적 귀납법]]을 시작점 $0$으로 쓴다.

- 기초 단계: 일차독립의 진술에 의해 빈 열은 일차독립이므로 $S_0$이 참이다.
- 귀납 단계: 정수 $k \ge 0$에 대하여 $S_k$를 가정하고, $v_1, \dots, v_k$를 길이 $k$인 일차독립인 열이라 하자. 이 열이 $V$를 생성한다면, 유한차원의 정의(정수 $n \ge 0$과 $V$를 생성하는 길이 $n$인 열이 있다)에 $n = k$를 넣어 $V$가 유한차원이 되므로 가정에 어긋난다. 따라서 이 열은 $V$를 생성하지 않고, [[independent-list-extension|일차독립인 열에 벡터 덧붙이기]]의 (2)에 의해 덧붙인 열 $v_1, \dots, v_k, x$가 일차독립인 $x \in V$가 있다. 이 열의 길이는 $k + 1$이므로 $S_{k+1}$이 참이다.

따라서 모든 정수 $N \ge 0$에서 $S_N$이 참이다.

**(2)** $W$가 무한차원이라 하자. (1)을 벡터공간 $W$에 쓰면, 모든 정수 $N \ge 0$에 대하여 벡터공간 $W$의 길이 $N$인 일차독립인 열 $w_1, \dots, w_N$이 있다. [[sequences-in-a-subspace|부분공간 안의 열]]의 진술("두 가지로 보는 열")에 의해 이 열은 모든 항이 $W$에 속하는 $V$의 열이고, (J3)에 의해 $V$에서도 일차독립이다. 곧 모든 $N \ge 0$에 대하여 길이 $N$인 $V$의 일차독립인 열이 있으므로, (1)을 $V$에 쓰면 $V$는 무한차원이다.
:::

:::exercise[부분공간에 짝을 맞추는 부분공간]
$V$가 유한차원 벡터공간이고 $W$가 $V$의 부분공간이라 하자.

1. $U \cap W = \{0_V\}$이고 $U + W = V$인 $V$의 부분공간 $U$가 있음을 증명하라. ($U + W$는 두 부분공간의 합이다.)
2. $V = \mathbb{R}^2$이고 $W = \operatorname{span}(e_1)$일 때 $U = \operatorname{span}(e_2)$와 $U' = \operatorname{span}((1, 1))$이 둘 다 (1)의 두 조건을 만족하고 $U \ne U'$임을 보여라.
:::

:::solution
**(1)** $d = \dim V$라 하자. [[dimension-of-subspace|부분공간의 차원]]의 (1)에 의해 $W$는 [[dimension|유한차원]]이다. $k = \dim W$라 하면 차원의 (2)에 의해 벡터공간 $W$에 길이 $k$인 기저 $w_1, \dots, w_k$가 있고, [[sequences-in-a-subspace|부분공간 안의 열]]의 (J4)에 의해 이 열은 $V$에서 [[linear-independence|일차독립]]이며 $\operatorname{span}(w_1, \dots, w_k) = W$이다. [[extension-to-a-basis|일차독립인 열을 기저로 늘리기]]의 (2)에 의해 $k \le d$이고, $s = d - k$라 할 때 길이 $s$인 열 $x_1, \dots, x_s$가 있어 이어 붙인 열 $c = w_1, \dots, w_k, x_1, \dots, x_s$가 $V$의 [[basis|기저]]이다. $U = \operatorname{span}(x_1, \dots, x_s)$로 두면 [[linear-combination-and-span|일차결합과 생성]]의 (N1)에 의해 $U$는 $V$의 부분공간이다.

*$U + W = V$.* [[subspace-intersection-and-sum|부분공간의 교집합과 합]]의 (2)에 의해 $U + W$는 $V$의 부분공간이므로 $U + W \subseteq V$이다. $v \in V$라 하자. $c$가 기저이므로 $v = \gamma_1 c_1 + \cdots + \gamma_d c_d$인 실수의 열 $\gamma$가 있다. $\alpha_i = \gamma_i$ ($1 \le i \le k$), $\beta_j = \gamma_{k+j}$ ($1 \le j \le s$)로 두면 일차독립인 열을 기저로 늘리기의 (1)에 의해

$$
\begin{aligned}
v = {}&(\alpha_1 w_1 + \cdots + \alpha_k w_k)\\
&+ (\beta_1 x_1 + \cdots + \beta_s x_s)
\end{aligned}
$$

이다. 앞의 괄호는 $\operatorname{span}(w_1, \dots, w_k) = W$에, 뒤의 괄호는 $U$에 속하고, [[vector-space|벡터공간]]의 (V1)에 의해 $v$는 ($U$의 원소) $+$ ($W$의 원소)이므로 $v \in U + W$이다.

*$U \cap W = \{0_V\}$.* [[subspace|부분공간]]의 (S1)에 의해 $0_V \in U \cap W$이다. $v \in U \cap W$라 하면 $v = \beta_1 x_1 + \cdots + \beta_s x_s$인 실수의 열 $\beta$와 $v = \alpha_1 w_1 + \cdots + \alpha_k w_k$인 실수의 열 $\alpha$가 있다. $\alpha$ 뒤에 $-\beta_1, \dots, -\beta_s$를 이어 붙인 길이 $d$인 실수의 열을 $\gamma$라 하자. [[real-number-arithmetic|실수의 계산 법칙]]의 (K9)에 의해 $-\beta_j = (-1)\beta_j$이므로, [[finite-sum-of-vectors|벡터의 유한 합]]의 (C2)와 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B5)에 의해 $(-\beta_1)x_1 + \cdots + (-\beta_s)x_s = (-1)v = -v$이다. 일차독립인 열을 기저로 늘리기의 (1)과 (B2)에 의해

$$
\gamma_1 c_1 + \cdots + \gamma_d c_d = v + (-v) = 0_V
$$

이다. [[basis-iff-independent-and-spanning|기저는 일차독립이고 생성하는 열이다]]에 의해 $c$는 일차독립이므로 모든 $\gamma_i$가 $0$이고, 특히 모든 $\alpha_i = \gamma_i$가 $0$이다. 벡터의 유한 합의 (C3)에 의해 $v = 0_V$이다. 따라서 $U \cap W = \{0_V\}$이다.

$k = 0$이면 $w$는 빈 열이고 $U = V$이며, $k = d$이면 $x$는 빈 열이고 $U = \{0_V\}$이다. 위 증명은 이 두 경우도 그대로 포함한다.

**(2)** [[standard-basis|표준기저]]의 $e_1 = (1, 0)$, $e_2 = (0, 1)$에 대하여, (N4)에 의해 $W = \{(t, 0) : t \in \mathbb{R}\}$, $U = \{(0, s) : s \in \mathbb{R}\}$, $U' = \{(s, s) : s \in \mathbb{R}\}$이다. 셋 다 (N1)에 의해 부분공간이다. 실수의 계산은 (K1)–(K12)로 한다.

- $U$: $(0, s) = (t, 0)$이면 둘째 값에서 $s = 0$이므로 $U \cap W$의 원소는 $(0, 0)$뿐이다. 모든 $(a, b) \in \mathbb{R}^2$는 $(0, b) + (a, 0)$이므로 $U + W = \mathbb{R}^2$이다.
- $U'$: $(s, s) = (t, 0)$이면 둘째 값에서 $s = 0$이므로 $U' \cap W$의 원소는 $(0, 0)$뿐이다. 모든 $(a, b)$는 $(b, b) + (a - b, 0)$이므로($b + (a - b) = a$, $b + 0 = b$) $U' + W = \mathbb{R}^2$이다.

$(0, 1) \in U$이지만 $(0, 1) = (s, s)$이면 $s = 0$이고 $s = 1$이어서 (K4)의 $0 \ne 1$에 어긋나므로 $(0, 1) \notin U'$이다. 따라서 $U \ne U'$이고, (1)의 $U$는 $W$만으로 하나로 정해지지 않는다.
:::

:::exercise[차원의 합이 큰 두 부분공간의 교집합]
$V$가 유한차원 벡터공간이고 $U$, $W$가 $V$의 부분공간이라 하자.

1. $\dim U + \dim W > \dim V$이면 $U \cap W$에 $0_V$가 아닌 벡터가 있음을 증명하라.
2. $\mathbb{R}^3$의 부분공간 $\operatorname{span}(e_1, e_2)$와 $\operatorname{span}(e_3)$으로, (1)의 가정을 $\dim U + \dim W = \dim V$로 바꾸면 결론이 성립하지 않는 예를 보여라.
3. $\mathbb{R}^3$의 $2$차원 부분공간 두 개에는 $0$이 아닌 공통의 벡터가 있음을 보여라.
:::

:::solution
**(1)** [[dimension-of-subspace|부분공간의 차원]]의 (1)에 의해 $U$, $W$는 [[dimension|유한차원]]이다. $p = \dim U$, $q = \dim W$, $d = \dim V$라 하자. 차원의 (2)에 의해 벡터공간 $U$, $W$에 각각 길이 $p$, $q$인 기저 $u_1, \dots, u_p$와 $w_1, \dots, w_q$가 있고, [[sequences-in-a-subspace|부분공간 안의 열]]의 (J4)에 의해 두 열은 $V$에서 [[linear-independence|일차독립]]이며 $\operatorname{span}(u_1, \dots, u_p) = U$, $\operatorname{span}(w_1, \dots, w_q) = W$이다. [[extension-to-a-basis|일차독립인 열을 기저로 늘리기]]의 진술대로 두 열을 이어 붙인 길이 $p + q$인 열을 $c$라 하자.

$c$가 일차독립이라면 [[independent-and-spanning-bounds|일차독립인 열과 생성하는 열의 길이]]의 (1)에 의해 $p + q \le d$인데, 가정 $d < p + q$와 함께 [[well-ordering-principle|정렬 원리]]의 (L1)에 어긋난다. 따라서 $c$는 일차종속이고, $\gamma_1 c_1 + \cdots + \gamma_{p+q} c_{p+q} = 0_V$이며 어떤 $\gamma_i$가 $0$이 아닌 실수의 열 $\gamma$가 있다. $\alpha_i = \gamma_i$ ($1 \le i \le p$), $\beta_j = \gamma_{p+j}$ ($1 \le j \le q$)로 두면 일차독립인 열을 기저로 늘리기의 (1)에 의해

$$
\begin{aligned}
&(\alpha_1 u_1 + \cdots + \alpha_p u_p)\\
&\quad+ (\beta_1 w_1 + \cdots + \beta_q w_q) = 0_V
\end{aligned}
$$

이다. 앞의 괄호를 $y$, 뒤의 괄호를 $z$라 하면 $y \in U$, $z \in W$이다.

$y + z = 0_V$이므로 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B2)(덧셈 역원의 유일성)와 [[vector-space|벡터공간]]의 (V1)에 의해 $y = -z$이고, (B5)에 의해 $-z = (-1)z$이며, [[subspace|부분공간]]의 (S3)에 의해 이것은 $W$에 속한다. 곧 $y \in U \cap W$이다.

$y = 0_V$라 하자. $u$가 일차독립이므로 모든 $\alpha_i = 0$이다. 또 $y + z = 0_V$와 [[finite-sum-of-vectors|벡터의 유한 합]]의 (H0)($0_V + z = z$)에 의해 $z = 0_V$이고, $w$가 일차독립이므로 모든 $\beta_j = 0$이다. 그러면 모든 $\gamma_i$가 $0$이 되어 $\gamma$의 고른 방법에 어긋난다. 따라서 $y \ne 0_V$이고, $y$가 $U \cap W$의 $0_V$가 아닌 벡터이다.

**(2)** [[standard-basis|표준기저]]의 (2)에 의해 $e_1, e_2, e_3$은 $\mathbb{R}^3$의 기저이므로 [[basis-iff-independent-and-spanning|기저는 일차독립이고 생성하는 열이다]]에 의해 일차독립이고, [[linear-independence|일차독립과 일차종속]]의 (I3)으로 셋째 항을 지운 열 $e_1, e_2$도 일차독립이다. 부분공간의 차원의 (4)에 의해 $\dim \operatorname{span}(e_1, e_2) = 2$이고, $e_3$은 영벡터가 아니므로 (I4)와 같은 (4)에 의해 $\dim \operatorname{span}(e_3) = 1$이다. 차원의 (4)에 의해 $2 + 1 = 3 = \dim \mathbb{R}^3$이다. 두 부분공간의 공통의 원소는 $ae_1 + be_2 = (a, b, 0)$이면서 [[linear-combination-and-span|일차결합과 생성]]의 (N4)에 의해 $ce_3 = (0, 0, c)$인 벡터인데, 첫째와 둘째 값에서 $a = b = 0$이므로 그런 벡터는 $(0, 0, 0)$뿐이다. 곧 교집합은 $\{(0, 0, 0)\}$이다.

**(3)** 차원의 (4)에 의해 $\dim \mathbb{R}^3 = 3$이고 두 부분공간의 차원의 합은 $2 + 2 = 4 > 3$이므로 (1)에 의해 교집합에 $0$이 아닌 벡터가 있다.
:::

:::exercise[어느 두 개도 일차독립인 세 벡터]
$\mathbb{R}^3$의 벡터 $v_1 = (1, 2, 0)$, $v_2 = (0, 1, 3)$, $v_3 = (1, 3, 3)$을 생각하자.

1. 세 열 $v_1, v_2$와 $v_1, v_3$과 $v_2, v_3$이 모두 일차독립임을 보여라.
2. 열 $v_1, v_2, v_3$은 $\mathbb{R}^3$의 기저가 아님을 보여라.
3. $a, b, c \in \mathbb{R}^3$이고 열 $a, b$가 일차독립이며 $c \notin \operatorname{span}(a, b)$이면 열 $a, b, c$는 $\mathbb{R}^3$의 기저임을 증명하라.
:::

:::solution
$\mathbb{R}^3$의 계산은 [[real-function-space|실숫값 함수의 공간]]의 진술대로 자리마다 하고, 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)로 한다. 길이 $2$인 일차결합은 [[finite-sum-of-vectors|벡터의 유한 합]]의 (H0)에 의해 두 벡터의 합이다.

**(1)** 실수 $\alpha$, $\beta$에 대하여

- $\alpha v_1 + \beta v_2 = (\alpha, 2\alpha + \beta, 3\beta)$이다. 이것이 $(0, 0, 0)$이면 첫째 값에서 $\alpha = 0$이고, 셋째 값에서 $3\beta = 0$이며 $3 \ne 0$이므로 (K10)에 의해 $\beta = 0$이다.
- $\alpha v_1 + \beta v_3 = (\alpha + \beta, 2\alpha + 3\beta, 3\beta)$이다. 이것이 $(0, 0, 0)$이면 셋째 값과 (K10)에서 $\beta = 0$이고, 첫째 값에서 $\alpha = \alpha + 0 = 0$이다.
- $\alpha v_2 + \beta v_3 = (\beta, \alpha + 3\beta, 3\alpha + 3\beta)$이다. 이것이 $(0, 0, 0)$이면 첫째 값에서 $\beta = 0$이고, 둘째 값에서 $\alpha = \alpha + 3 \cdot 0 = 0$이다((K9), (K4)).

세 경우 모두 [[linear-independence|일차독립]]의 정의를 만족한다.

**(2)** 계수의 열 $1, 1, -1$에 대하여

$$
\begin{aligned}
&1v_1 + 1v_2 + (-1)v_3\\
&= (1 + 0 - 1, 2 + 1 - 3, 0 + 3 - 3)\\
&= (0, 0, 0)
\end{aligned}
$$

이고 셋째 계수 $-1$은 $0$이 아니다($-1 = 0$이면 $1 = 1 + 0 = 1 + (-1) = 0$이 되어 (K4)에 어긋난다). 따라서 열 $v_1, v_2, v_3$은 일차종속이고, [[basis-iff-independent-and-spanning|기저는 일차독립이고 생성하는 열이다]]에 의해 기저가 아니다. (1)과 함께 보면, 어느 두 항으로 된 열도 일차독립이라는 것만으로는 세 항의 열이 일차독립이 되지 않는다. 여기서는 $v_3 = v_1 + v_2 \in \operatorname{span}(v_1, v_2)$이다.

**(3)** [[independent-list-extension|일차독립인 열에 벡터 덧붙이기]]의 (1)에 의해, 일차독립인 열 $a, b$에 $\operatorname{span}(a, b)$에 속하지 않는 $c$를 덧붙인 열 $a, b, c$는 일차독립이다. [[dimension|유한차원과 차원]]의 (4)에 의해 $\dim \mathbb{R}^3 = 3$이고 이 열의 길이는 $3$이므로, [[independent-and-spanning-bounds|일차독립인 열과 생성하는 열의 길이]]의 (3)에 의해 $a, b, c$는 $\mathbb{R}^3$의 기저이다.
:::
