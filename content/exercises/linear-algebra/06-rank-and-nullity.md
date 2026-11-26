---
written_by: Claude
status: reviewed
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "2장 7절, 연습문제 7.4–7.6 (p.67–68); 1장 5절, 연습문제 5.5, 5.7 (p.23–24)"
added: 2026-11-26
---

:::exercise[성분의 차로 정한 ℝ³ 위의 사상]

$$
A = \begin{pmatrix} 1 & -1 & 0 \\ 0 & 1 & -1 \\ -1 & 0 & 1 \end{pmatrix}
$$

과 선형사상 $T_A : \mathbb{R}^3 \to \mathbb{R}^3$을 생각하자. $x \in \mathbb{R}^3$의 $i$번째 값을 $x_i$로 쓴다.

1. $\operatorname{Ker} T_A$와 $\operatorname{nullity} T_A$를 구하라.
2. $\operatorname{rank} T_A$를 구하라.
3. $P = \{y \in \mathbb{R}^3 : y_1 + y_2 + y_3 = 0\}$이라 할 때 $\operatorname{Ran} T_A = P$임을 보여라. 행렬 $B = \begin{pmatrix} 1 & 1 & 1 \end{pmatrix}$을 써도 된다.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1)–(K12)로 한다. [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)에 의해

$$
Ax = (x_1 - x_2,\ x_2 - x_3,\ -x_1 + x_3)
$$

이다.

**(1)** (K12)의 (v)에 의해 $Ax = (0, 0, 0)$이면 $x_1 = x_2$이고 $x_2 = x_3$이다. 거꾸로 $x_1 = x_2 = x_3 = t$이면 세 값은 $t - t = 0$, $t - t = 0$, $-t + t = 0$이다. 따라서 $c = (1, 1, 1)$이라 하면 $\operatorname{Ker} T_A = \{tc : t \in \mathbb{R}\}$이고, [[linear-combination-and-span|일차결합과 생성]]의 (N4)에 의해 이것은 $\operatorname{span}(c)$이다. $c \ne (0, 0, 0)$이므로 [[linear-independence|일차독립과 일차종속]]의 (I4)에 의해 길이 $1$인 열 $c$는 일차독립이고, [[dimension-of-subspace|부분공간의 차원]]의 (4)에 의해 $\dim \operatorname{span}(c) = 1$이다. 곧 [[rank-and-nullity|계수와 퇴화차수]]의 정의에 의해 $\operatorname{nullity} T_A = 1$이다.

**(2)** [[dimension|유한차원과 차원]]의 (4)에 의해 $\dim \mathbb{R}^3 = 3$이므로 [[rank-nullity-theorem|차원 정리]]에 의해 $1 + \operatorname{rank} T_A = 3$이고, [[well-ordering-principle|정렬 원리]]의 (Z7)로 양변에서 $1$을 빼면 $\operatorname{rank} T_A = 2$이다.

**(3)** *$P$의 차원.* 행 규칙에 의해 $By$는 $1$에서의 값이 $y_1 + y_2 + y_3$인 $\mathbb{R}^1$의 원소이고 $\mathbb{R}^1$의 영벡터는 값이 $0$인 함수이므로, $P = \operatorname{Ker} T_B$이다. [[kernel-and-range|핵과 상]]의 (1)에 의해 $P$는 $\mathbb{R}^3$의 부분공간이다. $B$의 $(1, 1)$ 성분은 $1 \ne 0$이어서 $B$는 영행렬이 아니므로 [[rank-of-a-matrix|행렬의 계수]]의 (6)에 의해 $\operatorname{rank} B \ne 0$이고, 같은 항목의 (1)에 의해 $\operatorname{rank} B \le 1$이다. $\operatorname{rank} B$는 $0$ 이상의 정수이므로 (Z5)와 (L1)에 의해 $0 < \operatorname{rank} B$이고, [[prime-number|(Z1)]]에 의해 $1 \le \operatorname{rank} B$이며, (L2)에 의해 $\operatorname{rank} B = 1$이다. 행렬의 계수의 (4)에 의해 $\operatorname{nullity} T_B + 1 = 3$이므로 $\operatorname{nullity} T_B = 2$, 곧 $P$는 유한차원이고 $\dim P = 2$이다.

*포함.* $y = Ax$이면 (K1), (K2), (K8)의 (ii)로

$$
\begin{aligned}
&y_1 + y_2 + y_3\\
&= (x_1 - x_2) + (x_2 - x_3)\\
&\quad + (-x_1 + x_3)\\
&= 0
\end{aligned}
$$

이므로 $\operatorname{Ran} T_A \subseteq P$이다. 두 집합은 핵과 상의 (1)에 의해 $\mathbb{R}^3$의 부분공간이고, $P$가 유한차원이며 $\dim \operatorname{Ran} T_A = \operatorname{rank} T_A = 2 = \dim P$이므로, 부분공간의 차원의 (5)에 의해 $\operatorname{Ran} T_A = P$이다.
:::

:::exercise[부분공간으로 제한한 차원 정리]
$V$가 유한차원 벡터공간, $W$가 벡터공간, $T : V \to W$가 선형사상이고 $U$가 $V$의 부분공간이라 하자. $T(U) = \{Tu : u \in U\}$로 쓴다. 아래의 부분공간은 모두 제한한 연산에 관한 벡터공간으로 보고 차원을 말한다.

1. $T(U)$가 $W$의 부분공간이고 $U \cap \operatorname{Ker} T$와 $T(U)$가 유한차원이며 $\dim(U \cap \operatorname{Ker} T) + \dim T(U) = \dim U$임을 보여라.
2. $\dim T(U) \le \dim U$이고 $\dim T(U) \le \operatorname{rank} T$임을 보여라.
:::

:::solution
**(1)** [[dimension-of-subspace|부분공간의 차원]]의 (1)에 의해 $U$는 [[dimension|유한차원]]이다. [[kernel-and-range|핵과 상]]의 (4)에 의해 $U$는 [[subspace|부분공간]]의 (P1)의 벡터공간이고, $T$를 $U$로 제한한 함수 $T|_U : U \to W$는 선형사상이다. 제한한 함수의 값은 $T|_U(u) = Tu$이므로

$$
\begin{aligned}
\operatorname{Ran}(T|_U) &= \{Tu : u \in U\} = T(U),\\
\operatorname{Ker}(T|_U) &= \{u \in U : Tu = 0_W\}\\
&= U \cap \operatorname{Ker} T
\end{aligned}
$$

이다. 핵과 상의 (1)을 $T|_U$에 쓰면 $T(U)$는 $W$의 부분공간이다.

$U \cap \operatorname{Ker} T$는 벡터공간 $U$의 부분공간이므로 (P5)에 의해 $V$의 부분공간이기도 하다. $U$의 연산은 $V$의 연산을 $U$로 제한한 것이므로, $U \cap \operatorname{Ker} T$로 다시 제한한 연산은 $V$의 연산을 $U \cap \operatorname{Ker} T$로 바로 제한한 것과 모든 점에서 값이 같고, [[function|함수]]의 같음에 의해 같은 연산이다. 곧 어느 쪽으로 보아도 같은 벡터공간이다.

정의역 $U$가 유한차원이므로 [[rank-and-nullity|계수와 퇴화차수]]의 (1)에 의해 $\operatorname{Ker}(T|_U) = U \cap \operatorname{Ker} T$와 $\operatorname{Ran}(T|_U) = T(U)$는 유한차원이고, [[rank-nullity-theorem|차원 정리]]를 $T|_U$에 쓰면

$$
\begin{aligned}
&\dim(U \cap \operatorname{Ker} T) + \dim T(U)\\
&= \operatorname{nullity}(T|_U) + \operatorname{rank}(T|_U)\\
&= \dim U
\end{aligned}
$$

이다.

**(2)** 차원은 $0$ 이상의 정수이므로 [[well-ordering-principle|정렬 원리]]의 (Z7)에 의해 $\dim T(U) = 0 + \dim T(U) \le \dim(U \cap \operatorname{Ker} T) + \dim T(U) = \dim U$이다.

$u \in U$이면 $Tu \in \operatorname{Ran} T$이므로 $T(U) \subseteq \operatorname{Ran} T$이다. 두 집합은 $W$의 부분공간이고, 계수와 퇴화차수의 (1)에 의해 $\operatorname{Ran} T$는 유한차원이다. 부분공간의 차원의 (5)를 벡터공간 $W$와 그 부분공간 $T(U) \subseteq \operatorname{Ran} T$에 쓰면($W$는 유한차원이 아니어도 된다) $\dim T(U) \le \dim \operatorname{Ran} T = \operatorname{rank} T$이다.
:::

:::exercise[자기 자신과의 합성이 영사상인 선형사상]
$V$가 유한차원 벡터공간이고 $T : V \to V$가 선형사상이며 $T \circ T$가 영사상이라 하자.

1. $\operatorname{Ran} T \subseteq \operatorname{Ker} T$임을 보여라.
2. $\operatorname{rank} T + \operatorname{rank} T \le \dim V$임을 보여라.
3. $\dim V = 3$이면 $\operatorname{rank} T \le 1$임을 보여라. 또 $A = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$이면 $T_A \circ T_A$가 영사상이고 $\operatorname{rank} T_A = 1$임을 보여라.
:::

:::solution
**(1)** $y \in \operatorname{Ran} T$이면 $y = Tv$인 $v \in V$가 있고, [[function-composition|합성]]의 식과 가정에 의해 $Ty = T(Tv) = (T \circ T)v = 0_V$이다. 따라서 $y \in \operatorname{Ker} T$이다.

**(2)** [[kernel-and-range|핵과 상]]의 (1)과 [[rank-and-nullity|계수와 퇴화차수]]의 (1)에 의해 $\operatorname{Ran} T$와 $\operatorname{Ker} T$는 $V$의 유한차원 부분공간이다. (1)과 [[dimension-of-subspace|부분공간의 차원]]의 (5)에 의해 $\operatorname{rank} T \le \operatorname{nullity} T$이다. [[well-ordering-principle|정렬 원리]]의 (Z7)로 양변에 $\operatorname{rank} T$를 더하고 [[rank-nullity-theorem|차원 정리]]를 쓰면

$$
\begin{aligned}
&\operatorname{rank} T + \operatorname{rank} T\\
&\le \operatorname{nullity} T + \operatorname{rank} T\\
&= \dim V
\end{aligned}
$$

이다.

**(3)** $r = \operatorname{rank} T$라 하자. $r \ge 2$라면 (Z7)과 (Z6)에 의해 $r + r \ge 2 + r \ge 2 + 2 = 4$이고, (2)에 의해 $r + r \le 3$이므로 (Z6)에 의해 $4 \le 3$이 되어, $3 < 4$와 함께 (L1)에 어긋난다. 따라서 (Z5)에 의해 $r < 2$이고, [[prime-number|(Z1)]]에 의해 $r + 1 \le 2$, (Z7)에 의해 $r \le 1$이다.

주어진 $A$의 열은 $\mathbf{a}_1 = \mathbf{a}_2 = (0, 0, 0)$, $\mathbf{a}_3 = e_1$이다([[standard-basis|표준기저]]). [[matrix-product|행렬의 곱]]의 정의에 의해 $AA$의 $k$번째 열은 $A\mathbf{a}_k$이다. $T_A$가 선형사상이므로 [[linear-map|선형사상]]의 (T1)에 의해 $A(0, 0, 0) = (0, 0, 0)$이고, [[matrix-vector-product|행렬과 벡터의 곱]]의 (3)에 의해 $Ae_1 = \mathbf{a}_1 = (0, 0, 0)$이다. 따라서 $AA$의 세 열은 모두 영벡터이고, [[matrix|행렬]]의 (3)에 의해 $AA$는 영행렬 $O$이다. 행렬의 곱의 (1)에 의해 $T_A \circ T_A = T_{AA} = T_O$이고, 행렬과 벡터의 곱의 정의와 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B4), [[finite-sum-of-vectors|벡터의 유한 합]]의 (H5)에 의해 모든 $x$에서 $Ox = (0, 0, 0)$이므로 $T_A \circ T_A$는 영사상이다.

$\operatorname{Col} A = \operatorname{span}(\mathbf{a}_1, \mathbf{a}_2, \mathbf{a}_3)$는 [[linear-combination-and-span|일차결합과 생성]]의 (N1), (N2)에 의해 $e_1$을 원소로 갖는 부분공간이므로 (N3)에 의해 $\operatorname{span}(e_1) \subseteq \operatorname{Col} A$이다. 거꾸로 세 열 $0e_1$, $0e_1$, $e_1$은 (N4)에 의해 부분공간 $\operatorname{span}(e_1)$에 속하므로((B3)) (N3)에 의해 $\operatorname{Col} A \subseteq \operatorname{span}(e_1)$이다. $e_1 \ne 0$이므로 [[linear-independence|(I4)]]와 부분공간의 차원의 (4)에 의해 $\dim \operatorname{span}(e_1) = 1$이고, [[rank-of-a-matrix|행렬의 계수]]의 정의에 의해 $\operatorname{rank} T_A = \operatorname{rank} A = 1$이다.
:::

:::exercise[합의 계수의 어림]
$m$, $n$이 자연수이고 $A$, $B$가 $m \times n$ 행렬이라 하자.

1. $\operatorname{rank}(A + B) \le \operatorname{rank} A + \operatorname{rank} B$임을 증명하라.
2. $A = I_2$, $B = (-1)I_2$이면 $\operatorname{rank}(A + B)$와 $\operatorname{rank} A + \operatorname{rank} B$는 각각 얼마인가?
:::

:::solution
**(1)** $p = \operatorname{rank} A$, $q = \operatorname{rank} B$라 하자. [[rank-of-a-matrix|행렬의 계수]]의 진술에 의해 벡터공간 $\operatorname{Col} A$에 길이 $p$인 기저 $u_1, \dots, u_p$가, $\operatorname{Col} B$에 길이 $q$인 기저 $w_1, \dots, w_q$가 있다. [[sequences-in-a-subspace|부분공간 안의 열]]의 (J4)에 의해 $\operatorname{span}(u_1, \dots, u_p) = \operatorname{Col} A$이고 $\operatorname{span}(w_1, \dots, w_q) = \operatorname{Col} B$이다. [[extension-to-a-basis|일차독립인 열을 기저로 늘리기]]의 진술대로 두 열을 이어 붙인 길이 $p + q$인 $\mathbb{R}^m$의 열을 $c$라 하고 $S = \operatorname{span}(c)$라 하자. [[linear-combination-and-span|일차결합과 생성]]의 (N1)에 의해 $S$는 $\mathbb{R}^m$의 부분공간이다.

$k \in \{1, \dots, n\}$이라 하자. [[matrix|행렬]]의 (5)에 의해 $A + B$의 $k$번째 열은 $\mathbf{a}_k + \mathbf{b}_k$이다. (N2)에 의해 $\mathbf{a}_k \in \operatorname{Col} A$이므로 $\mathbf{a}_k = \alpha_1 u_1 + \cdots + \alpha_p u_p$인 실수의 열 $\alpha$가 있고, 같은 이유로 $\mathbf{b}_k = \beta_1 w_1 + \cdots + \beta_q w_q$인 $\beta$가 있다. 일차독립인 열을 기저로 늘리기의 (1)에 의해 $\mathbf{a}_k + \mathbf{b}_k$는 $\alpha$와 $\beta$를 이어 붙인 계수에 대한 $c$의 일차결합이므로 $S$에 속한다. 따라서 (N3)에 의해 $\operatorname{Col}(A + B) \subseteq S$이다.

[[dimension-of-subspace|부분공간의 차원]]의 (4)에 의해 $S$는 유한차원이고 $\dim S \le p + q$이다. $\operatorname{Col}(A + B)$와 $S$는 $\mathbb{R}^m$의 부분공간이므로 부분공간의 차원의 (5)에 의해 $\operatorname{rank}(A + B) = \dim \operatorname{Col}(A + B) \le \dim S$이고, [[well-ordering-principle|정렬 원리]]의 (Z6)에 의해 $\operatorname{rank}(A + B) \le p + q$이다.

**(2)** [[inverse-matrix-properties|역행렬의 성질]]의 (1)에 의해 $I_2$는 가역이다. [[matrix-product-properties|행렬 곱의 성질]]의 (3)과 (4), [[real-number-arithmetic|실수의 계산 법칙]]의 (K12)의 (iii)에 의해

$$
\begin{aligned}
&((-1)I_2)((-1)I_2)\\
&= (-1)\bigl((-1)(I_2 I_2)\bigr)\\
&= ((-1)(-1))I_2 = 1 I_2 = I_2
\end{aligned}
$$

이므로 ([[vector-space|벡터공간]]의 (V6), (V5)) $(-1)I_2$도 가역이다. 행렬의 계수의 (5)에 의해 $\operatorname{rank} A = \operatorname{rank} B = 2$이고 $\operatorname{rank} A + \operatorname{rank} B = 4$이다. 한편 행렬의 (1)에 의해 $A + B$의 $(j, k)$ 성분은 $I_2$의 $(j, k)$ 성분과 그 $-1$배의 합이므로 (K9)와 (K8)의 (ii)에 의해 $0$이고, $A + B$는 영행렬이다. 행렬의 계수의 (6)에 의해 $\operatorname{rank}(A + B) = 0$이다. 이 예에서 $\operatorname{rank}(A + B)$는 $\operatorname{rank} A$와 $\operatorname{rank} B$ 어느 쪽보다도 작다.
:::

:::exercise[곱하는 순서를 바꾼 두 곱의 계수]
1. $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, $B = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$에 대하여 $AB$와 $BA$를 구하고 $\operatorname{rank}(AB) \ne \operatorname{rank}(BA)$임을 보여라.
2. $n$이 자연수이고 $A$, $B$가 $n \times n$ 행렬이면 $\operatorname{rank}(AB) = n$인 것은 정확히 $\operatorname{rank}(BA) = n$일 때임을 증명하라.
:::

:::solution
**(1)** [[matrix-product|행렬의 곱]]의 정의에 의해 $AB$의 열은 $A\mathbf{b}_1$, $A\mathbf{b}_2$이다. $\mathbf{b}_1 = (1, 0) = e_1$이므로 [[matrix-vector-product|행렬과 벡터의 곱]]의 (3)에 의해 $A\mathbf{b}_1 = \mathbf{a}_1 = (0, 0)$이고, $\mathbf{b}_2 = (0, 0)$이므로 [[linear-map|선형사상]]의 (T1)을 $T_A$에 써서 $A\mathbf{b}_2 = (0, 0)$이다. 따라서 [[matrix|행렬]]의 (3)에 의해 $AB$는 영행렬이다. 같은 방법으로 $BA$의 열은 $B\mathbf{a}_1 = B(0, 0) = (0, 0)$과 $B\mathbf{a}_2 = Be_1 = \mathbf{b}_1 = (1, 0)$이므로

$$
AB = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}, \qquad BA = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}
$$

이다. [[rank-of-a-matrix|행렬의 계수]]의 (6)에 의해 $\operatorname{rank}(AB) = 0$이고, $BA$는 $(1, 2)$ 성분이 $1 \ne 0$이어서 영행렬이 아니므로 같은 (6)에 의해 $\operatorname{rank}(BA) \ne 0$이다.

**(2)** $\operatorname{rank}(AB) = n$이라 하자. 행렬의 계수의 (5)에 의해 $AB$는 가역이고, [[one-sided-inverse-of-square-matrix|정사각행렬의 한쪽 역]]의 (2)에 의해 $A$와 $B$는 둘 다 가역이다. [[inverse-matrix-properties|역행렬의 성질]]의 (3)을 가역인 $n \times n$ 행렬 $B$, $A$에 쓰면 $BA$는 가역이고, 행렬의 계수의 (5)에 의해 $\operatorname{rank}(BA) = n$이다. 거꾸로 $\operatorname{rank}(BA) = n$이면 같은 논증에서 $A$와 $B$의 자리를 바꾸어 $\operatorname{rank}(AB) = n$을 얻는다. (1)과 함께 보면, 두 곱의 계수는 다를 수 있지만 한쪽이 $n$이면 다른 쪽도 $n$이다.
:::
