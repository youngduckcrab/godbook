---
written_by: Claude
status: reviewed
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "5장 2절, 연습문제 2.1 (p.128)"
  - ref: treil-linear-algebra-done-wrong
    loc: "5장 4절, 연습문제 4.3, 4.4 (p.141)"
  - ref: treil-linear-algebra-done-wrong
    loc: "5장 3절, 연습문제 3.13 (pp.134–135)"
  - ref: treil-linear-algebra-done-wrong
    loc: "5장 4절, 연습문제 4.5, 4.6 (pp.141–142)"
added: 2026-11-26
---

:::exercise[두 식으로 정한 ℝ⁴ 의 부분공간과 그 직교 여공간]
표준내적을 준 $\mathbb{R}^4$에서 $a = (1, 1, 0, 1)$, $b = (1, 2, 1, 2)$라 하고

$$
\begin{aligned}
E = \{x \in \mathbb{R}^4 :\ & x_1 + x_2 + x_4 = 0, \\
& x_1 + 2x_2 + x_3 \\
& + 2x_4 = 0\}
\end{aligned}
$$

이라 하자.

1. $E = \operatorname{span}(a, b)^\perp$임을 보이고 $\dim E$를 구하라.
2. $E^\perp = \operatorname{span}(a, b)$임을 보여라.
3. $v = (3, 2, 0, -1)$을 $E$의 원소와 $E^\perp$의 원소의 합으로 써라.
:::

:::solution
내적은 [[standard-inner-product|ℝⁿ 의 표준내적]]이고, 직교 여공간은 [[orthogonal-complement|직교 여공간]]의 것이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이고, $\mathbb{R}^4$의 연산은 값마다의 연산이다. $F = \operatorname{span}(a, b)$로 쓴다.

**(1)** $x \in \mathbb{R}^4$이면 $\langle x, a \rangle = x_1 + x_2 + x_4$이고 $\langle x, b \rangle = x_1 + 2x_2 + x_3 + 2x_4$이다. 직교 여공간의 (1)의 마지막 문장에 의해 $F^\perp$는 $x \perp a$이고 $x \perp b$인 $x$ 전체이므로 $F^\perp = E$이다.

$\alpha a + \beta b = (\alpha + \beta,\ \alpha + 2\beta,\ \beta,\ \alpha + 2\beta)$가 영벡터이면 셋째 값에서 $\beta = 0$, 첫째 값에서 $\alpha = 0$이므로 $a, b$는 [[linear-independence|일차독립]]이고, [[dimension-of-subspace|부분공간의 차원]]의 (4)에 의해 $F$는 유한차원이고 $\dim F = 2$이다. [[dimension|유한차원과 차원]]의 (4)에 의해 $\mathbb{R}^4$는 유한차원이고 $\dim \mathbb{R}^4 = 4$이므로, 직교 여공간의 (4)를 $F$에 쓰면 $2 + \dim F^\perp = 4$, 곧 $\dim E = 2$이다.

**(2)** (1)에서 $F$는 유한차원이므로 직교 여공간의 (5)에 의해 $(F^\perp)^\perp = F$이고, $F^\perp = E$이므로 $E^\perp = F$이다.

**(3)** [[matrix|행렬]]의 (4)에 의해 첫째 열이 $a$, 둘째 열이 $b$인 $4 \times 2$ 행렬 $A$가 있고, [[rank-of-a-matrix|행렬의 계수]]의 정의에 의해 $\operatorname{Col} A = F$이다. [[least-squares-solution|최소제곱 해와 정규방정식]]의 진술에서 $b$를 $v$로 두면, 그 (1)의 (나)와 (라)에 의해 $A^T A x = A^T v$인 $x$에서 $Ax = \operatorname{proj}_F v$이다. 표준내적의 (5)와 (3)에 의해

$$
A^T A = \begin{pmatrix} 3 & 5 \\ 5 & 10 \end{pmatrix}, \qquad A^T v = (4, 5)
$$

이다($\langle a, a \rangle = 3$, $\langle a, b \rangle = 5$, $\langle b, b \rangle = 10$, $\langle a, v \rangle = 3 + 2 + 0 - 1 = 4$, $\langle b, v \rangle = 3 + 4 + 0 - 2 = 5$). 정규방정식 $3x_1 + 5x_2 = 4$, $5x_1 + 10x_2 = 5$에서 둘째 식으로 $x_1 = 1 - 2x_2$를 첫째 식에 넣으면 $x_2 = -1$, $x_1 = 3$이다. 따라서

$$
\operatorname{proj}_F v = 3a - b = (2, 1, -1, 1)
$$

이다. 직교 여공간의 (6)을 유한차원 부분공간 $F$에 쓰면 $\operatorname{proj}_{F^\perp} v = v - \operatorname{proj}_F v = (1, 1, 1, -2)$이고, $F^\perp = E$이다. 곧

$$
v = (1, 1, 1, -2) + (2, 1, -1, 1)
$$

이고 앞의 벡터는 $E$에, 뒤의 벡터는 $F = E^\perp$에 속한다. 확인하면 $(1, 1, 1, -2)$는 $1 + 1 - 2 = 0$이고 $1 + 2 + 1 - 4 = 0$이어서 $E$의 두 식을 만족한다. $E$는 유한차원이므로 직교 여공간의 (3)에 의해 이런 분해는 이것 하나뿐이다.
:::

:::exercise[네 점에 가장 가까운 포물선]
$$
\begin{aligned}
A &= \begin{pmatrix} 1 & -1 & 1 \\ 1 & 0 & 0 \\ 1 & 1 & 1 \\ 1 & 2 & 4 \end{pmatrix}, \\
b &= (-1, 5, -1, 1)
\end{aligned}
$$

이라 하고 $\mathbb{R}^4$, $\mathbb{R}^3$에 표준내적을 주자. $A$의 $k$번째 행은 $(1, t_k, t_k t_k)$이고 $t_1, t_2, t_3, t_4$는 $-1, 0, 1, 2$이다. 따라서 $Ax = b$의 최소제곱 해 $x = (c_0, c_1, c_2)$는, $k$번째 항이 $(c_0 + c_1 t_k + c_2 t_k t_k) - b_k$인 길이 $4$인 열의 제곱의 합을 가장 작게 하는 계수이다. $w = (1, -3, 3, -1)$이라 하자.

1. $(\operatorname{Col} A)^\perp = \operatorname{span}(w)$임을 보여라.
2. $\operatorname{proj}_{\operatorname{Col} A} b$를 정규방정식을 풀지 않고 (1)로 구하라.
3. $Ax = b$의 최소제곱 해가 하나뿐임을 보이고 그것을 구하라. 또 $\lVert Ax - b \rVert^2$의 가장 작은 값을 구하라.
:::

:::solution
직교 여공간은 [[orthogonal-complement|직교 여공간]]의 것이고, 최소제곱 해는 [[least-squares-solution|최소제곱 해와 정규방정식]]의 것이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다. $A$의 열을 $\mathbf{a}_1 = (1, 1, 1, 1)$, $\mathbf{a}_2 = (-1, 0, 1, 2)$, $\mathbf{a}_3 = (1, 0, 1, 4)$로 쓴다.

**(1)** $c_0 \mathbf{a}_1 + c_1 \mathbf{a}_2 + c_2 \mathbf{a}_3$의 $k$번째 값은 $c_0 + c_1 t_k + c_2 t_k t_k$이다. 이것이 영벡터이면 $t_2 = 0$에서 $c_0 = 0$, $t_3 = 1$에서 $c_1 + c_2 = 0$, $t_1 = -1$에서 $-c_1 + c_2 = 0$이므로 $c_2 = 0$, $c_1 = 0$이다. 따라서 열은 [[linear-independence|일차독립]]이고, [[rank-of-a-matrix|행렬의 계수]]의 (2)에 의해 $\operatorname{rank} A = 3$, 곧 $\dim \operatorname{Col} A = 3$이다.

$\langle \mathbf{a}_1, w \rangle = 1 - 3 + 3 - 1 = 0$, $\langle \mathbf{a}_2, w \rangle = -1 + 0 + 3 - 2 = 0$, $\langle \mathbf{a}_3, w \rangle = 1 + 0 + 3 - 4 = 0$이므로 [[kernel-of-transpose-product|AᵀA 의 핵과 가역성]]의 (5)에 의해 $w \in (\operatorname{Col} A)^\perp$이다. 직교 여공간의 (1)에 의해 $(\operatorname{Col} A)^\perp$는 부분공간이므로 [[linear-combination-and-span|일차결합과 생성]]의 (N3)에 의해 $\operatorname{span}(w) \subseteq (\operatorname{Col} A)^\perp$이다. 직교 여공간의 (4)에 의해 $\dim (\operatorname{Col} A)^\perp = 4 - 3 = 1$이다. $w \ne 0$이므로 일차독립과 일차종속의 (I4)와 [[dimension-of-subspace|부분공간의 차원]]의 (4)에 의해 $\dim \operatorname{span}(w) = 1$이고, 부분공간의 차원의 (5)에 의해 $\operatorname{span}(w) = (\operatorname{Col} A)^\perp$이다.

**(2)** $\operatorname{Col} A$는 유한차원이므로 직교 여공간의 (5)와 이 문제의 (1)에 의해 $\operatorname{Col} A = ((\operatorname{Col} A)^\perp)^\perp = \operatorname{span}(w)^\perp$이다. 직교 여공간의 (6)을 유한차원 부분공간 $\operatorname{span}(w)$에 쓰면

$$
\operatorname{proj}_{\operatorname{Col} A} b = b - \operatorname{proj}_{\operatorname{span}(w)} b
$$

이다. [[orthogonal-projection|직교사영]]의 (3)을 길이 $1$인 열 $w$에 쓰면 $\operatorname{proj}_{\operatorname{span}(w)} b = \langle b, w \rangle \langle w, w \rangle^{-1} w$이다. $\langle b, w \rangle = -1 - 15 - 3 - 1 = -20$, $\langle w, w \rangle = 1 + 9 + 9 + 1 = 20$이므로 이것은 $-w$이고

$$
p = \operatorname{proj}_{\operatorname{Col} A} b = b + w = (0, 2, 2, 0)
$$

이다.

**(3)** (1)에서 열이 일차독립이므로 최소제곱 해와 정규방정식의 (4)에 의해 최소제곱 해는 하나뿐이고, 그 (1)의 (가)와 (나)에 의해 그것은 $Ax = p$의 해이다. $Ax = p$는 $c_0 - c_1 + c_2 = 0$, $c_0 = 2$, $c_0 + c_1 + c_2 = 2$, $c_0 + 2c_1 + 4c_2 = 0$이다. 둘째 식에서 $c_0 = 2$이고, 첫째·셋째 식에서 $-c_1 + c_2 = -2$, $c_1 + c_2 = 0$이므로 $c_2 = -1$, $c_1 = 1$이며, 넷째 식도 $2 + 2 - 4 = 0$으로 성립한다. 따라서 최소제곱 해는 $x = (2, 1, -1)$이고, 네 점에 가장 가까운 포물선은 $y = 2 + t - tt$이다.

같은 항목의 (2)에 의해 가장 작은 값은 $\lVert b - p \rVert^2 = \lVert -w \rVert^2 = 20$이다. 확인하면 $A^T A = \begin{pmatrix} 4 & 2 & 6 \\ 2 & 6 & 8 \\ 6 & 8 & 18 \end{pmatrix}$이고 $A^T b = (4, 2, 2)$이며([[standard-inner-product|ℝⁿ 의 표준내적]]의 (5)와 (3)), $A^T A (2, 1, -1) = (8 + 2 - 6,\ 4 + 6 - 8,\ 12 + 8 - 18) = (4, 2, 2)$이어서 정규방정식을 만족한다.
:::

:::exercise[합과 교집합의 직교 여공간]
$V$가 내적공간이고 $E$, $F$가 $V$의 부분공간이라 하자.

1. $(E + F)^\perp = E^\perp \cap F^\perp$임을 보여라.
2. $V$가 유한차원이면 $(E \cap F)^\perp = E^\perp + F^\perp$임을 보여라.
:::

:::solution
직교 여공간은 [[orthogonal-complement|직교 여공간]]의 것이고, 부분공간의 합과 교집합은 [[subspace-intersection-and-sum|부분공간의 교집합과 합]]의 것이다.

**(1)** 부분공간의 교집합과 합의 (2)에 의해 $E \subseteq E + F$이고 $F \subseteq E + F$이므로, 직교 여공간의 (1)에 의해 $(E + F)^\perp \subseteq E^\perp$이고 $(E + F)^\perp \subseteq F^\perp$이다. 따라서 $(E + F)^\perp \subseteq E^\perp \cap F^\perp$이다.

거꾸로 $x \in E^\perp \cap F^\perp$이고 $s \in E + F$라 하자. $s = e + f$인 $e \in E$, $f \in F$가 있고, [[inner-product-space|내적과 내적공간]]의 (1)에 의해 $\langle x, s \rangle = \langle x, e \rangle + \langle x, f \rangle = 0 + 0 = 0$이다. 따라서 $x \in (E + F)^\perp$이다.

**(2)** 직교 여공간의 (1)에 의해 $E^\perp$와 $F^\perp$는 부분공간이므로 (1)을 이 둘에 쓰면 $(E^\perp + F^\perp)^\perp = (E^\perp)^\perp \cap (F^\perp)^\perp$이다. $V$가 유한차원이므로 [[dimension-of-subspace|부분공간의 차원]]의 (1)에 의해 $V$의 모든 부분공간은 유한차원이고, 직교 여공간의 (5)에 의해 $(E^\perp)^\perp = E$, $(F^\perp)^\perp = F$이다. 따라서

$$
(E^\perp + F^\perp)^\perp = E \cap F
$$

이다. 부분공간의 교집합과 합의 (2)에 의해 $E^\perp + F^\perp$는 부분공간이고 유한차원이므로, 직교 여공간의 (5)에 의해

$$
\begin{aligned}
(E \cap F)^\perp &= \bigl((E^\perp + F^\perp)^\perp\bigr)^\perp \\
&= E^\perp + F^\perp
\end{aligned}
$$

이다.
:::

:::exercise[두 직교사영의 합성이 영사상이 되는 경우]
$V$가 내적공간이고 $E$, $F$가 $V$의 유한차원 부분공간이며 $P = \operatorname{proj}_E$, $Q = \operatorname{proj}_F$라 하자.

1. $P \circ Q$가 영사상인 것은 정확히 $E$와 $F$가 직교할 때임을 보여라.
2. $E$와 $F$가 직교하면 $V$의 모든 $v$에 $E + F$로의 직교사영이 있고 $\operatorname{proj}_{E + F} = P + Q$임을 보여라.
3. 표준내적을 준 $\mathbb{R}^2$에서 $E = F = \operatorname{span}(e_1)$이면 $P + Q$는 $\mathbb{R}^2$의 어느 부분공간 위로의 직교사영도 아님을 보여라.
:::

:::solution
직교는 [[orthogonal-vectors|직교]]의 것이고, 직교사영과 $\operatorname{proj}$는 [[orthogonal-projection|직교사영]]의 것이며, $E^\perp$는 [[orthogonal-complement|직교 여공간]]의 것이다. [[orthonormal-basis-exists|정규직교 기저의 존재와 확장]]의 (4)에 의해 $P$와 $Q$는 정해진 선형사상이다. $P + Q$는 [[linear-maps-form-a-vector-space|선형사상의 공간]]의 합이다.

**(1)** $E$와 $F$가 직교한다고 하자. $v \in V$이면 직교사영의 (4)의 (ii)에 의해 $Qv \in F$이고, 직교의 (1)에 의해 $F$와 $E$가 직교하므로 $Qv \perp E$, 곧 $Qv \in E^\perp$이다. [[properties-of-orthogonal-projection|직교사영의 성질과 행렬]]의 (1)에 의해 $\operatorname{Ker} P = E^\perp$이므로 $P(Qv) = 0_V$이다. 따라서 $P \circ Q$는 영사상이다.

거꾸로 $P \circ Q$가 영사상이라 하자. $f \in F$이면 직교사영의 (4)의 (iii)에 의해 $Qf = f$이므로 $Pf = P(Qf) = 0_V$이고, $\operatorname{Ker} P = E^\perp$이므로 $f \perp E$이다. 곧 $F$와 $E$가 직교하고, 직교의 (1)에 의해 $E$와 $F$가 직교한다.

**(2)** $v \in V$이고 $w = Pv + Qv$라 하자. 직교사영의 (4)의 (ii)에 의해 $Pv \in E$, $Qv \in F$이므로 $w \in E + F$이다. $e \in E$이면 같은 (ii)에 의해 $v - Pv \perp E$이고, $Qv \in F$와 $E$가 직교하므로 $\langle Qv, e \rangle = 0$이다. [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B10)과 [[vector-space|벡터공간]]의 (V2)에 의해 $v - w = (v - Pv) - Qv$이므로, [[inner-product-space|내적과 내적공간]]의 (2)에 의해 $\langle v - w, e \rangle = \langle v - Pv, e \rangle - \langle Qv, e \rangle = 0 - 0 = 0$이다. $E$와 $F$의 자리를 바꾼 같은 논증으로 $f \in F$이면 $\langle v - w, f \rangle = 0$이다. $s = e + f \in E + F$이면 내적과 내적공간의 (1)에 의해 $\langle v - w, s \rangle = 0 + 0 = 0$이다. 따라서 $v - w \perp E + F$이고, 직교사영의 정의에 의해 $w$는 $v$의 $E + F$로의 직교사영이다. 모든 $v$에 직교사영이 있으므로 직교사영의 (4)의 사상 $\operatorname{proj}_{E + F}$가 정해지고, 모든 $v$에서 $\operatorname{proj}_{E + F} v = Pv + Qv = (P + Q)v$이므로 함수의 같음에 의해 $\operatorname{proj}_{E + F} = P + Q$이다.

**(3)** $e_1 \in E$이므로 직교사영의 (4)의 (iii)에 의해 $Pe_1 = Qe_1 = e_1$이고 $(P + Q)e_1 = 2e_1$이다. $P + Q = \operatorname{proj}_G$인 부분공간 $G$가 있다면 $2e_1$은 $e_1$의 $G$로의 직교사영이므로 직교사영의 (5)에 의해 $\lVert 2e_1 \rVert \le \lVert e_1 \rVert$이어야 한다. 그런데 [[norm-in-inner-product-space|내적공간의 노름]]의 (3)과 (8)에 의해 $\lVert 2e_1 \rVert = 2 > 1 = \lVert e_1 \rVert$이다. 따라서 그런 $G$는 없다. 이때 $\langle e_1, e_1 \rangle = 1 \ne 0$이어서 $E$와 $F$는 직교하지 않고, (1)과 맞게 $P(Qe_1) = e_1 \ne 0$이다.
:::

:::exercise[노름이 가장 작은 최소제곱 해]
$m$, $n$이 자연수이고 $A$가 $m \times n$ 행렬이며 $b \in \mathbb{R}^m$이라 하자. $\mathbb{R}^n$, $\mathbb{R}^m$에 표준내적을 주고 $K = \operatorname{Ker} T_A$라 하자.

1. $Ax = b$의 최소제곱 해 가운데 $K^\perp$에 속하는 것이 정확히 하나 있음을 보여라. 그것을 $x_0$이라 하자.
2. $Ax = b$의 모든 최소제곱 해 $x$에서 $\lVert x_0 \rVert \le \lVert x \rVert$이고, 등호가 성립하는 것은 정확히 $x = x_0$일 때임을 보여라.
3. $A = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$, $b = (1, 3)$일 때 최소제곱 해 전체와 $x_0$을 구하라.
:::

:::solution
최소제곱 해는 [[least-squares-solution|최소제곱 해와 정규방정식]]의 것이고, $T_A$와 $\operatorname{Ker}$는 그 항목에서와 같으며, 직교 여공간은 [[orthogonal-complement|직교 여공간]]의 것이다. 노름은 [[norm-in-inner-product-space|내적공간의 노름]]의 것이다.

**(1)** [[kernel-and-range|핵과 상]]의 (1)에 의해 $K$는 $\mathbb{R}^n$의 부분공간이고, [[dimension|유한차원과 차원]]의 (4)와 [[dimension-of-subspace|부분공간의 차원]]의 (1)에 의해 유한차원이다. 최소제곱 해와 정규방정식의 (2)에 의해 최소제곱 해 $x_1$이 있다. 직교 여공간의 (3)에 의해 $x_1 = k + x_0$인 $k \in K$와 $x_0 \in K^\perp$가 있다. $x_0 - x_1 = -k \in K$이므로([[subspace|부분공간]]의 (S3)과 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B5)) 최소제곱 해와 정규방정식의 (3)에 의해 $x_0$은 최소제곱 해이다.

$x_0$과 $x_0'$이 모두 $K^\perp$에 속하는 최소제곱 해라 하자. (3)에 의해 $x_0 - x_0' \in K$이고, 직교 여공간의 (1)에 의해 $K^\perp$는 부분공간이므로 $x_0 - x_0' \in K^\perp$이다. 직교 여공간의 (2)에 의해 $K \cap K^\perp = \{0\}$이므로 $x_0 - x_0' = 0$이고, 벡터공간의 기본 성질의 (B12)에 의해 $x_0 = x_0'$이다.

**(2)** $x$가 최소제곱 해이면 최소제곱 해와 정규방정식의 (3)에 의해 $h = x - x_0 \in K$이고 $x = x_0 + h$이다. $x_0 \in K^\perp$이므로 $x_0 \perp h$이고, [[orthogonal-vectors|직교]]의 (5)에 의해 $\lVert x \rVert^2 = \lVert x_0 \rVert^2 + \lVert h \rVert^2$이다. [[order-properties-of-reals|실수의 순서의 성질]]의 (5)의 (iii)과 (2)의 (i)에 의해 $\lVert x_0 \rVert^2 \le \lVert x \rVert^2$이고, 노름의 (2)에 의해 $\lVert x_0 \rVert \le \lVert x \rVert$이다. 등호는 노름의 (2)와 [[real-number-arithmetic|(K12)]]의 (v)에 의해 정확히 $\lVert h \rVert^2 = 0$일 때이고, (K10)과 노름의 (1)에 의해 정확히 $h = 0$, 곧 $x = x_0$일 때이다.

**(3)** [[transpose|전치행렬]]의 정의에 의해 $A^T = A$이고, [[matrix-product|행렬의 곱]]의 (2)와 [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)에 의해 $A^T A = \begin{pmatrix} 2 & 2 \\ 2 & 2 \end{pmatrix}$, $A^T b = (4, 4)$이다. 최소제곱 해와 정규방정식의 (1)에 의해 $x$가 최소제곱 해인 것은 정확히 $2x_1 + 2x_2 = 4$, 곧 $x_1 + x_2 = 2$일 때이므로, 최소제곱 해 전체는 $\{(2 - s, s) : s \in \mathbb{R}\}$이다. $Ax = (x_1 + x_2, x_1 + x_2)$이므로 $K = \{x : x_1 + x_2 = 0\} = \operatorname{span}((-1, 1))$이고, 직교 여공간의 (1)의 마지막 문장에 의해 $K^\perp = \{x : -x_1 + x_2 = 0\}$이다. $x_1 = x_2$이고 $x_1 + x_2 = 2$인 것은 $(1, 1)$뿐이므로 $x_0 = (1, 1)$이고 $\lVert x_0 \rVert^2 = 2$이다. 확인하면 $\lVert (2 - s, s) \rVert^2 = 4 - 4s + 2ss = 2 + 2(s - 1)(s - 1)$이어서 $s = 1$일 때만 $2$이고, (2)와 맞는다.
:::

:::exercise[식 하나에 2 를 곱하면 최소제곱 해가 바뀌는 예]
$$
\begin{aligned}
A &= \begin{pmatrix} 1 \\ 1 \end{pmatrix}, \quad b = (0, 3), \\
A' &= \begin{pmatrix} 1 \\ 2 \end{pmatrix}, \quad b' = (0, 6)
\end{aligned}
$$

이라 하자. $A'x = b'$은 $Ax = b$의 둘째 식의 양변에 $2$를 곱한 것이다. $\mathbb{R}^2$, $\mathbb{R}^1$에 표준내적을 준다.

1. $x \in \mathbb{R}^1$에 대하여 $Ax = b$인 것은 정확히 $A'x = b'$일 때임을 보여라.
2. $Ax = b$와 $A'x = b'$의 최소제곱 해를 각각 구하고, 서로 다름을 보여라.
:::

:::solution
최소제곱 해는 [[least-squares-solution|최소제곱 해와 정규방정식]]의 것이다. $x \in \mathbb{R}^1$의 $1$에서의 값을 $x_1$로 쓴다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다.

**(1)** [[matrix-vector-product|행렬과 벡터의 곱]]의 정의에 의해 $Ax = (x_1, x_1)$이고 $A'x = (x_1, 2x_1)$이다. $Ax = b$인 것은 정확히 $x_1 = 0$이고 $x_1 = 3$일 때이고, $A'x = b'$인 것은 정확히 $x_1 = 0$이고 $2x_1 = 6$일 때이다. $2 \ne 0$이므로 (K11)에 의해 $2x_1 = 6 = 2 \cdot 3$인 것은 정확히 $x_1 = 3$일 때이다. 따라서 두 조건은 같다. (실제로 $0 \ne 3$이어서 둘 다 해가 없다.)

**(2)** $A$와 $A'$의 열은 영벡터가 아니므로 [[linear-independence|일차독립과 일차종속]]의 (I4)에 의해 일차독립이고, 최소제곱 해와 정규방정식의 (4)에 의해 두 방정식의 최소제곱 해는 각각 하나뿐이다. [[standard-inner-product|ℝⁿ 의 표준내적]]의 (5)와 (3)에 의해 $A^T A = \begin{pmatrix} 2 \end{pmatrix}$이고 $A^T b$는 $1$에서의 값이 $0 + 3 = 3$인 $\mathbb{R}^1$의 원소이다. 정규방정식은 $2x_1 = 3$이므로 최소제곱 해는 $x_1 = \tfrac{3}{2}$이다. 마찬가지로 $A'^T A' = \begin{pmatrix} 5 \end{pmatrix}$이고 $A'^T b'$의 값은 $0 + 12 = 12$이므로, 정규방정식 $5x_1 = 12$에서 최소제곱 해는 $x_1 = \tfrac{12}{5}$이다. $\tfrac{3}{2} = \tfrac{12}{5}$라면 양변에 $10$을 곱해 $15 = 24$가 되므로 두 해는 다르다.

(1)에 의해 두 방정식은 해의 집합이 같지만, 최소제곱 해는 식마다의 차의 제곱을 더한 것을 가장 작게 하는데, 둘째 식에 $2$를 곱하면 그 식의 차도 $2$배가 되어 제곱의 합에서 더 무겁게 셈해진다. 최소제곱 해와 정규방정식의 (6)에 의해 해가 있는 방정식에서는 최소제곱 해가 해와 같으므로 이런 일이 생기지 않는다.
:::
