---
written_by: Claude
status: reviewed
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "6장 3절, 연습문제 3.3, 3.4, 3.5, 3.6 (p.178); 6장 4.2절, 작용소 노름의 성질 2 (p.182)"
added: 2026-11-26
---

:::exercise[2 × 2 행렬의 특잇값 분해와 극분해]
$\mathbb{R}^2$에 표준내적을 주고

$$
A = \begin{pmatrix} 3 & 0 \\ 4 & 5 \end{pmatrix}
$$

이라 하자.

1. $A^T A$와 그 고윳값을 구하라.
2. $A$의 특잇값 분해 $(W, \Sigma, V)$를 하나 구하라.
3. $A$의 특잇값과 $\gamma_A$를 구하고, $\lVert A \rVert_F^2$이 특잇값의 제곱의 합과 같음을 확인하라.
4. (2)의 분해로 $A$의 극분해 $A = UR$을 구하라.
:::

:::solution
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]으로 하고, $\sqrt{\ }$는 [[square-root-exists|제곱근의 존재]]의 것이다. 제곱근의 존재의 (2)에 의해 $\sqrt{45} = \sqrt{9}\sqrt{5} = 3\sqrt{5}$이고 $\sqrt{10} = \sqrt{2}\sqrt{5}$이며, $\sqrt{9} = 3$, $\sqrt{1600} = 40$은 $3 \cdot 3 = 9$, $40 \cdot 40 = 1600$과 같은 항목의 (1)의 유일성에서 나온다.

**(1)** [[standard-inner-product|ℝⁿ 의 표준내적]]의 (5)에 의해 $A^T A$의 $(j, k)$ 성분은 $A$의 $j$번째 열과 $k$번째 열의 내적이므로

$$
A^T A = \begin{pmatrix} 25 & 20 \\ 20 & 25 \end{pmatrix}
$$

이다. [[real-eigenvalues-2x2|2 × 2 행렬의 실고윳값]]으로 계산하면 $\operatorname{tr}(A^T A) = 50$, $\det(A^T A) = 625 - 400 = 225$이고 판별식은 $2500 - 900 = 1600 > 0$이므로, 그 항목의 (4)에 의해 고윳값은 정확히 $2^{-1}(50 + 40) = 45$와 $2^{-1}(50 - 40) = 5$이다.

**(2)** [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)에 의해 $A(1, 1) = (3, 9)$, $A(1, -1) = (3, -1)$이다.

$$
\begin{aligned}
\mathbf{v}_1 &= (\sqrt{2})^{-1}(1, 1), \\
\mathbf{v}_2 &= (\sqrt{2})^{-1}(1, -1), \\
\mathbf{w}_1 &= (\sqrt{10})^{-1}(1, 3), \\
\mathbf{w}_2 &= (\sqrt{10})^{-1}(3, -1)
\end{aligned}
$$

이고 $\sigma_1 = 3\sqrt{5}$, $\sigma_2 = \sqrt{5}$로 두자. 표준내적으로 $\langle (1, 1), (1, -1) \rangle = 0$, $\langle (1, 3), (3, -1) \rangle = 3 - 3 = 0$이고, (K12)의 (vi)에 의해 $\lVert \mathbf{v}_k \rVert^2 = 2^{-1} \cdot 2 = 1$, $\lVert \mathbf{w}_k \rVert^2 = 10^{-1} \cdot 10 = 1$이다. 곧 $\mathbf{v}_1, \mathbf{v}_2$와 $\mathbf{w}_1, \mathbf{w}_2$는 각각 정규직교 열이고, [[orthogonal-matrix|직교행렬]]의 (2)의 (가)와 (라)에 의해 $k$번째 열이 $\mathbf{v}_k$인 $V$와 $k$번째 열이 $\mathbf{w}_k$인 $W$는 직교행렬이다.

행렬과 벡터의 곱의 (2)에 의해 $A\mathbf{v}_1 = (\sqrt{2})^{-1}(3, 9)$이고, $\sigma_1 \mathbf{w}_1 = 3\sqrt{5}(\sqrt{2}\sqrt{5})^{-1}(1, 3) = (\sqrt{2})^{-1}(3, 9)$이다. 또 $A\mathbf{v}_2 = (\sqrt{2})^{-1}(3, -1)$이고 $\sigma_2 \mathbf{w}_2 = \sqrt{5}(\sqrt{2}\sqrt{5})^{-1}(3, -1) = (\sqrt{2})^{-1}(3, -1)$이다. $\sigma_1$, $\sigma_2$는 제곱근의 존재의 (1)에 의해 양수이므로 $\Sigma = \operatorname{diag}(3\sqrt{5}, \sqrt{5})$는 [[singular-value-decomposition|특잇값 분해]]의 "$r = 2$와 $\sigma_1, \sigma_2$로 만든 $2 \times 2$ 행렬"이다. 특잇값 분해의 (2)에 의해 $A = W\Sigma V^T$이고, $(W, \Sigma, V)$는 $r = 2$인 $A$의 특잇값 분해이다.

$$
\begin{aligned}
W &= \frac{1}{\sqrt{10}}\begin{pmatrix} 1 & 3 \\ 3 & -1 \end{pmatrix}, \\
\Sigma &= \begin{pmatrix} 3\sqrt{5} & 0 \\ 0 & \sqrt{5} \end{pmatrix}, \\
V &= \frac{1}{\sqrt{2}}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}
\end{aligned}
$$

**(3)** [[singular-values|특잇값]]의 (2)에 의해 $A$의 특잇값은 정확히 $3\sqrt{5}$와 $\sqrt{5}$이다. [[largest-singular-value|가장 큰 특잇값과 행렬의 크기]]의 (4)에 의해 $A$가 영행렬이 아니므로 $\gamma_A$는 $A$의 특잇값이면서 모든 특잇값 이상이다. $\sqrt{5} < 3\sqrt{5}$이므로($0 < 2\sqrt{5}$) $\gamma_A = 3\sqrt{5}$이다. 한편 [[bound-for-matrix-times-vector|행렬과 벡터의 곱의 어림]]의 (1)에 의해 $\lVert A \rVert_F^2 = 9 + 0 + 16 + 25 = 50$이고, $\sigma_1^2 + \sigma_2^2 = 45 + 5 = 50$이다. 이것은 특잇값의 (5)대로이다.

**(4)** [[polar-decomposition|극분해]]의 (1)에 의해 $U = WV^T$는 직교행렬이고 $R = \sqrt{A^T A} = V\Sigma V^T$이며 $A = UR$이다. [[matrix-product|행렬의 곱]]의 (2)로 계산하면 $\sqrt{10}\sqrt{2} = \sqrt{4}\sqrt{5} = 2\sqrt{5}$이므로

$$
\begin{aligned}
U &= \frac{1}{2\sqrt{5}}\begin{pmatrix} 1 & 3 \\ 3 & -1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \\
&= \frac{1}{2\sqrt{5}}\begin{pmatrix} 4 & -2 \\ 2 & 4 \end{pmatrix} \\
&= \frac{1}{\sqrt{5}}\begin{pmatrix} 2 & -1 \\ 1 & 2 \end{pmatrix}, \\
R &= \frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} 3\sqrt{5} & 0 \\ 0 & \sqrt{5} \end{pmatrix} \\
&\qquad \cdot \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \\
&= \frac{1}{2}\begin{pmatrix} 4\sqrt{5} & 2\sqrt{5} \\ 2\sqrt{5} & 4\sqrt{5} \end{pmatrix} \\
&= \sqrt{5}\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}
\end{aligned}
$$

이다($V^T = V$). $(\sqrt{5})^{-1}\sqrt{5} = 1$이므로 곱해 보면 $UR = \begin{pmatrix} 2 & -1 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 3 & 0 \\ 4 & 5 \end{pmatrix} = A$이고, $RR = 5\begin{pmatrix} 5 & 4 \\ 4 & 5 \end{pmatrix} = A^T A$이다.
:::

:::exercise[직교행렬을 양쪽에 곱한 행렬의 특잇값]
$m$, $n$이 자연수이고 $A$가 $m \times n$ 행렬이며, $P$가 $m \times m$ 직교행렬, $Q$가 $n \times n$ 직교행렬이라 하자.

1. $(W, \Sigma, V)$가 $A$의 특잇값 분해이면 $(PW, \Sigma, Q^T V)$가 $PAQ$의 특잇값 분해임을 증명하라.
2. 양수 $s$가 $A$의 특잇값인 것은 정확히 $s$가 $PAQ$의 특잇값일 때임을 보여라.
3. $\gamma_{PAQ} = \gamma_A$임을 보여라.
:::

:::solution
특잇값 분해는 [[singular-value-decomposition|특잇값 분해]]의 것, 특잇값은 [[singular-values|특잇값]]의 것, $\gamma$는 [[largest-singular-value|가장 큰 특잇값과 행렬의 크기]]의 것이다. 곱의 계산은 [[matrix-product-properties|행렬 곱의 성질]]의 (1)(결합법칙)과 (4)로 한다.

**(1)** [[orthogonal-matrix|직교행렬]]의 (4)에 의해 $PW$는 $m \times m$ 직교행렬이고, $Q^T$와 $Q^T V$는 $n \times n$ 직교행렬이다. [[transpose|전치행렬]]의 (4)와 (1)에 의해 $(Q^T V)^T = V^T (Q^T)^T = V^T Q$이다. 따라서

$$
\begin{aligned}
PAQ &= P(W\Sigma V^T)Q \\
&= (PW)\Sigma(V^T Q) \\
&= (PW)\Sigma(Q^T V)^T
\end{aligned}
$$

이고, $\Sigma$는 그대로 같은 $r$과 $\sigma$로 만든 $m \times n$ 행렬이므로 $(PW, \Sigma, Q^T V)$는 $PAQ$의 특잇값 분해이고 그 $r$과 $\sigma$는 $A$의 분해와 같다.

**(2)** 특잇값 분해의 (3)에 의해 $A$에는 특잇값 분해 $(W, \Sigma, V)$가 있다. 그 $r$과 $\sigma$를 $r$과 $\sigma_1, \dots, \sigma_r$이라 하자. 특잇값의 (2)를 $A$와 이 분해에 쓰면, 양수 $s$가 $A$의 특잇값인 것은 정확히 $s = \sigma_k$인 $k$가 있을 때이다. (1)에 의해 $(PW, \Sigma, Q^T V)$는 같은 $\sigma_1, \dots, \sigma_r$을 갖는 $PAQ$의 특잇값 분해이므로, 특잇값의 (2)를 $PAQ$와 이 분해에 쓰면 양수 $s$가 $PAQ$의 특잇값인 것도 정확히 $s = \sigma_k$인 $k$가 있을 때이다.

**(3)** 특잇값의 (3)에 의해 행렬에 특잇값이 있는 것은 정확히 그 행렬이 영행렬이 아닐 때이고, (2)에 의해 $A$와 $PAQ$의 특잇값은 같으므로, $A$가 영행렬인 것은 정확히 $PAQ$가 영행렬일 때이다. 둘 다 영행렬이면 가장 큰 특잇값과 행렬의 크기의 (4)의 마지막 문장에 의해 $\gamma_A = \gamma_{PAQ} = 0$이다. 둘 다 영행렬이 아니면 같은 (4)에 의해 $\gamma_A$는 $A$의 특잇값 가운데 다른 모든 특잇값 이상인 것이고 $\gamma_{PAQ}$도 $PAQ$에 대해 그렇다. (2)에 의해 두 행렬의 특잇값은 같으므로 $\gamma_A$는 $PAQ$의 특잇값이고 $\gamma_A \le \gamma_{PAQ}$이며, 같은 까닭으로 $\gamma_{PAQ} \le \gamma_A$이다. [[order-properties-of-reals|실수의 순서의 성질]]의 (1)의 (ii)에 의해 $\gamma_{PAQ} = \gamma_A$이다.
:::

:::exercise[행렬식의 절댓값과 특잇값의 곱]
$n$이 자연수이고 $A$가 $n \times n$ 행렬이며 $(W, \Sigma, V)$가 $A$의 특잇값 분해이고 그 $r$과 $\sigma$가 $r$과 $\sigma_1, \dots, \sigma_r$이라 하자.

1. $r < n$이면 $\det A = 0$임을 보여라.
2. $r = n$이면 $|\det A| = \sigma_1 \sigma_2 \cdots \sigma_n$임을 증명하라.
3. 문제 1의 $A$에서 (2)를 확인하라.
:::

:::solution
$\det$는 [[determinant|행렬식]], 실수의 열의 곱은 [[finite-product-of-reals|실수의 유한 곱]]의 것이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]으로 한다.

*공통.* [[determinant-of-product|곱의 행렬식]]의 (1)을 두 번 쓰고 [[determinant-of-transpose|전치행렬의 행렬식]]의 (1)을 쓰면 $\det A = \det W \cdot \det \Sigma \cdot \det V^T = (\det W \cdot \det V)\det \Sigma$이다. [[orthogonal-matrix|직교행렬]]의 (5)에 의해 $\det W$와 $\det V$는 각각 $1$이거나 $-1$이므로, (K4)와 (K12)의 (iii)에 의해 $\varepsilon = \det W \cdot \det V$도 $1$이거나 $-1$이다. [[singular-value-decomposition|특잇값 분해]]의 (1)의 (v)에 의해 $\Sigma = \operatorname{diag}(\delta_1, \dots, \delta_n)$이고, $\delta_k$는 $k \le r$일 때 $\sigma_k$, $k > r$일 때 $0$이다. [[determinant-of-triangular-matrix|삼각행렬의 행렬식]]의 (5)에 의해 $\det \Sigma = \delta_1 \delta_2 \cdots \delta_n$이다.

**(1)** $r < n$이면 $\delta_n = 0$이므로 실수의 유한 곱의 (5)에 의해 $\det \Sigma = 0$이고, (K9)에 의해 $\det A = \varepsilon \cdot 0 = 0$이다.

**(2)** $r = n$이면 모든 $k$에서 $\delta_k = \sigma_k$이므로 $\det \Sigma = \sigma_1 \cdots \sigma_n$이고, 모든 $\sigma_k$가 양수이므로 [[positive-definite-matrix|양의 정부호 행렬]]의 (1)의 (i)에 의해 $c = \sigma_1 \cdots \sigma_n$은 양수이다. $\det A = \varepsilon c$이므로 [[absolute-value|절댓값]]의 (4)와 (1)에 의해 $|\det A| = |\varepsilon|\,|c| = 1 \cdot c = c$이다($|1| = 1$이고 $|-1| = -(-1) = 1$).

**(3)** 문제 1의 분해는 $r = n = 2$, $\sigma_1 = 3\sqrt{5}$, $\sigma_2 = \sqrt{5}$이므로 $\sigma_1 \sigma_2 = 3 \cdot 5 = 15$이다. 행렬식의 (4)에 의해 $\det A = 3 \cdot 5 - 4 \cdot 0 = 15$이므로 $|\det A| = 15$와 맞는다.
:::

:::exercise[역행렬의 양의 준정부호 제곱근]
$n$이 자연수이고 $A$가 양의 정부호인 $n \times n$ 대칭행렬이라 하자.

1. $A$가 가역이고 $A^{-1}$이 대칭이며 양의 준정부호임을 보여라.
2. $\sqrt{A}$가 가역이고 $\sqrt{A^{-1}} = (\sqrt{A})^{-1}$임을 증명하라.
:::

:::solution
양의 정부호와 양의 준정부호는 [[positive-definite-matrix|양의 정부호 행렬]]의 것, $\sqrt{\ }$는 [[positive-semidefinite-square-root|양의 준정부호 제곱근]]의 것, 이차형식 $q$는 [[quadratic-form|쌍선형 형식과 이차형식]]의 것, 역행렬은 [[invertible-matrix|가역행렬과 역행렬]]의 것이다.

**(1)** 양의 정부호 행렬의 (6)의 (i)에 의해 $A$는 가역이다. [[inverse-matrix-properties|역행렬의 성질]]의 (4)와 $A^T = A$에 의해 $(A^{-1})^T = (A^T)^{-1} = A^{-1}$이므로 $A^{-1}$은 대칭이다. $x \in \mathbb{R}^n$이고 $z = A^{-1}x$라 하면 [[matrix-product|행렬의 곱]]의 (1)과 [[matrix-vector-product|행렬과 벡터의 곱]]의 (3)에 의해 $Az = (AA^{-1})x = I_n x = x$이고, 내적의 조건 (i)([[inner-product-space|내적과 내적공간]])에 의해

$$
\begin{aligned}
q_{A^{-1}}(x) &= \langle z, Az \rangle = \langle Az, z \rangle \\
&= q_A(z) \ge 0
\end{aligned}
$$

이다(양의 정부호 행렬의 (2)의 (i)). 따라서 $A^{-1}$은 양의 준정부호이다.

**(2)** 양의 준정부호 제곱근의 (4)에 의해 $\sqrt{A}$는 양의 정부호이고 가역이다. $B = (\sqrt{A})^{-1}$이라 하자.

*$B$는 대칭이고 양의 준정부호이다.* $\sqrt{A}$는 대칭이므로 (1)과 같은 계산으로 $B^T = B$이다. $x \in \mathbb{R}^n$이고 $z = Bx$이면 $\sqrt{A}\,z = x$이므로, (1)과 같은 계산으로 $q_B(x) = \langle z, \sqrt{A}\,z \rangle = q_{\sqrt{A}}(z) \ge 0$이다($\sqrt{A}$는 양의 준정부호이다).

*$BB = A^{-1}$이다.* 역행렬의 성질의 (3)에 의해 $\sqrt{A}\sqrt{A} = A$의 역행렬은 $(\sqrt{A})^{-1}(\sqrt{A})^{-1} = BB$이다. 곧 $BB = A^{-1}$이다.

(1)에 의해 $A^{-1}$은 양의 준정부호인 대칭행렬이므로, 양의 준정부호 제곱근의 (1)의 유일성에 의해 대칭이고 양의 준정부호이며 제곱이 $A^{-1}$인 행렬은 $\sqrt{A^{-1}}$ 하나뿐이다. 따라서 $\sqrt{A^{-1}} = B = (\sqrt{A})^{-1}$이다.

예컨대 $A = \operatorname{diag}(4, 9)$이면 양의 준정부호 제곱근의 (6)의 (ii)에 의해 $\sqrt{A} = \operatorname{diag}(2, 3)$이고, [[diagonalizable|대각화 가능]]의 (3)으로 $A^{-1} = \operatorname{diag}(4^{-1}, 9^{-1})$이므로 $\sqrt{A^{-1}} = \operatorname{diag}(2^{-1}, 3^{-1}) = (\sqrt{A})^{-1}$이다. $A$가 양의 준정부호이기만 하고 가역이 아니면 $A^{-1}$이 없으므로 이 문제는 그런 $A$를 다루지 않는다.
:::

:::exercise[곱과 합의 가장 큰 특잇값]
$m$, $n$, $p$가 자연수이고 $A$, $A'$이 $m \times n$ 행렬, $B$가 $n \times p$ 행렬이라 하자. 표준내적을 준다.

1. $\gamma_{AB} \le \gamma_A \gamma_B$임을 증명하라.
2. $\gamma_{A + A'} \le \gamma_A + \gamma_{A'}$임을 증명하라.
3. $A = \operatorname{diag}(1, 0)$, $B = \operatorname{diag}(0, 1)$이면 (1)과 (2)의 부등식이 모두 등호가 아님을 보여라.
:::

:::solution
$\gamma$와 그 성질은 [[largest-singular-value|가장 큰 특잇값과 행렬의 크기]]의 것이고, 노름은 [[norm-in-inner-product-space|내적공간의 노름]]의 것이다. 순서는 [[order-properties-of-reals|실수의 순서의 성질]]로 다룬다. 가장 큰 특잇값과 행렬의 크기의 (1)에 의해 $\gamma_A$는 제곱근이므로 $0 \le \gamma_A$이다(다른 행렬도 같다).

**(1)** $x \in \mathbb{R}^p$이라 하자. [[matrix-product|행렬의 곱]]의 (1)에 의해 $(AB)x = A(Bx)$이고, 가장 큰 특잇값과 행렬의 크기의 (3)을 $A$와 $Bx$에, 또 $B$와 $x$에 쓰면

$$
\begin{aligned}
\lVert (AB)x \rVert &\le \gamma_A \lVert Bx \rVert \\
&\le \gamma_A (\gamma_B \lVert x \rVert) \\
&= (\gamma_A \gamma_B)\lVert x \rVert
\end{aligned}
$$

이다. 둘째 부등식은 $\lVert Bx \rVert \le \gamma_B \lVert x \rVert$의 양변에 $0 \le \gamma_A$를 곱한 것이다(실수의 순서의 성질의 (4)의 (iii)). 실수의 순서의 성질의 (4)의 (iv)에 의해 $0 \le \gamma_A \gamma_B$이므로, 가장 큰 특잇값과 행렬의 크기의 (3)의 둘째 문장을 $AB$와 $c = \gamma_A \gamma_B$에 쓰면 $\gamma_{AB} \le \gamma_A \gamma_B$이다.

**(2)** $x \in \mathbb{R}^n$이면 [[matrix-vector-product|행렬과 벡터의 곱]]의 (4)에 의해 $(A + A')x = Ax + A'x$이고, [[triangle-inequality-for-norm|노름의 삼각부등식]]의 (1)과 가장 큰 특잇값과 행렬의 크기의 (3)에 의해

$$
\begin{aligned}
\lVert (A + A')x \rVert &\le \lVert Ax \rVert + \lVert A'x \rVert \\
&\le (\gamma_A + \gamma_{A'})\lVert x \rVert
\end{aligned}
$$

이다(실수의 순서의 성질의 (2)의 (iii)과 [[real-number-arithmetic|(K3)]]). $0 \le \gamma_A + \gamma_{A'}$이므로 (3)의 둘째 문장에 의해 $\gamma_{A + A'} \le \gamma_A + \gamma_{A'}$이다.

**(3)** 대각행렬은 대칭이고([[self-adjoint-map|자기수반사상과 대칭행렬]]의 (5)와 [[transpose|전치행렬]]의 정의), [[diagonalizable|대각화 가능]]의 (4)에 의해 $\operatorname{diag}(1, 0)$과 $\operatorname{diag}(0, 1)$의 고윳값은 모두 $1$과 $0$이다. 가장 큰 특잇값과 행렬의 크기의 (6)과 (8)의 (ii)에 의해 $\gamma$는 고윳값의 절댓값 가운데 가장 큰 것이므로 $\gamma_A = \gamma_B = 1$이다. 대각화 가능의 (3)에 의해 $AB = \operatorname{diag}(0, 0)$은 영행렬이므로 같은 항목의 (4)에 의해 $\gamma_{AB} = 0 < 1 = \gamma_A \gamma_B$이다. 또 $A + B = I_2$이고 (8)의 (i)에 의해 $\gamma_{I_2} = 1 < 2 = \gamma_A + \gamma_B$이다(여기서는 (2)의 $A'$을 $B$로 둔다).
:::

:::exercise[곱하는 순서에 따라 특잇값이 달라지는 두 행렬]
$$
A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, \qquad B = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}
$$

이라 하자. $AB$에는 특잇값이 없고 $BA$의 특잇값은 $1$ 하나뿐임을 보여라.
:::

:::solution
특잇값은 [[singular-values|특잇값]]의 것이다. [[matrix-product|행렬의 곱]]의 (2)로 계산하면

$$
AB = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}, \qquad BA = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}
$$

이다. 특잇값의 (3)에 의해 영행렬 $AB$에는 특잇값이 없다. $C = BA$라 하면 [[standard-inner-product|ℝⁿ 의 표준내적]]의 (5)에 의해 $C^T C$의 성분은 $C$의 열 $(0, 0)$과 $(1, 0)$끼리의 내적이므로 $C^T C = \operatorname{diag}(0, 1)$이고, [[diagonalizable|대각화 가능]]의 (4)에 의해 그 고윳값은 정확히 $0$과 $1$이다. 양수 $s$가 $C$의 특잇값인 것은 정확히 $ss$가 $C^T C$의 고윳값일 때, 곧 $ss = 1$일 때이고, $0 < s$이므로 [[square-root-exists|제곱근의 존재]]의 (1)의 유일성에 의해 $s = 1$이다. 따라서 $BA$의 특잇값은 $1$ 하나뿐이다.

정사각행렬 $A$, $B$에서 곱의 행렬식은 [[determinant-of-product|곱의 행렬식]]의 (2)에 의해 곱하는 순서에 상관없지만, 특잇값은 이 예처럼 순서에 따라 달라질 수 있다.
:::
