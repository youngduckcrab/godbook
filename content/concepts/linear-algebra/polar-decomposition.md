---
title: 극분해
title_en: Polar Decomposition
aliases: [극형식 분해, polar decomposition]
kind: theorem
field: linear-algebra
msc: ["15A23"]
level: undergrad
summary: 모든 n × n 행렬 A 는 직교행렬 U 와 AᵀA 의 양의 준정부호 제곱근 R 로 A = UR 로 쓸 수 있고, 같은 U 와 AAᵀ 의 양의 준정부호 제곱근 R′ 로 A = R′U 로도 쓸 수 있다. 특잇값 분해 A = WΣVᵀ 에서 U = WVᵀ, R = VΣVᵀ 로 얻는다. A 가 가역이면 R 은 양의 정부호이고 U = AR⁻¹ 이다. 1 × 1 에서는 실수를 부호와 절댓값의 곱으로 쓰는 것이다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, square-root-exists, matrix, standard-basis, kernel-and-range, matrix-vector-product, matrix-product, matrix-product-properties, transpose, invertible-matrix, rank-of-a-matrix, diagonalizable, standard-inner-product, norm-in-inner-product-space, self-adjoint-map, orthogonal-matrix, change-of-orthonormal-basis, positive-definite-matrix, positive-semidefinite-square-root, singular-value-decomposition]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 6장 3절 Polar and singular value decompositions 의 3.2 Modulus of an operator. Singular values. 의 Theorem 3.5 와 그 뒤의 두 Remark 와 증명, pp.172–173, 3.4.1 From singular value decomposition to the polar decomposition. 의 식 (3.6)과 그 뒤 단락, p.177
    checked: original
    note: "(1)은 출처 6장 3절 Theorem 3.5(p.172: 정사각행렬 A 는 유니터리 U 로 A = U|A| 로 쓸 수 있다)를 실수 행렬로 옮긴 것이다. 출처의 |A| = √(A*A) 를 이 사이트는 √(AᵀA) 로 쓴다. 출처의 Theorem 3.5 의 증명(p.173)은 Ran|A| 위에 U₀(|A|v) = Av 를 정의하고 선형성은 연습으로 남긴 뒤 Ker A 에서 Ker A* 로 가는 유니터리 U₁ 을 더하는 길이고, 이 항목은 3.4.1(p.177)의 길, 곧 식 (3.6) A = WΣV* = (WV*)(VΣV*) 와 그 뒤 단락(VΣV* 는 양의 준정부호이고 그 제곱이 A*A 이므로 |A| = VΣV*)을 따른다. 출처는 이 길이 정사각행렬에서만 된다고 적는다(p.177). 출처의 첫 Remark(p.172)는 U 가 일반적으로 하나로 정해지지 않고 정확히 A 가 가역일 때 하나로 정해진다고 적는다. 이 항목은 유일성을 진술하지 않고, (3)에서 가역일 때 U = AR⁻¹ 이라는 것만 적는다. (4)의 A = R′U 꼴은 같은 특잇값 분해에서 (WΣW*)(WV*) 로 묶은 것이고, 출처의 둘째 Remark(p.173)는 A : X → Y 에 대한 극분해를 말한다. 예시 '2 × 2 행렬의 두 꼴'의 행렬은 선형대수 2 characteristic-polynomial-examples 의 (2)의 J 의 둘째 열을 2 배 한 것이고, 그 예시의 U 는 출처 5장 6절 연습문제 6.1(p.150)의 둘째 행렬 (0 −1; 1 0) 과 같다. 반례 '가역이 아니면 U 가 여럿일 수 있는 예'는 출처의 첫 Remark(p.172)가 'U 는 정확히 A 가 가역일 때 하나로 정해진다'고 적는 것의 한쪽을 한 행렬에서 본 것이다. 확인 질문 '$A = UR$이 극분해이면 $\\lVert Ae_1 \\rVert$와 $\\lVert Re_1 \\rVert$는 어떤 관계인가?'는 출처 Proposition 3.3(p.172) ‖|A|x‖ = ‖Ax‖ 를 x = e₁ 에서 쓴 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(예의 특잇값·극분해 수치 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$n$이 자연수이고 $A$가 $n \times n$ [[matrix|행렬]]이라 하자. $\mathbb{R}^n$에는 [[standard-inner-product|표준내적]]을 주고, 직교행렬은 [[orthogonal-matrix|직교행렬]]의 것, 대칭행렬은 [[self-adjoint-map|자기수반사상과 대칭행렬]]의 것, 양의 정부호와 양의 준정부호는 [[positive-definite-matrix|양의 정부호 행렬]]의 것, $\sqrt{\ }$은 [[positive-semidefinite-square-root|양의 준정부호 제곱근]]의 것, 특잇값 분해는 [[singular-value-decomposition|특잇값 분해]]의 것이다. 양의 정부호 행렬의 (9)에 의해 $A^T A$와 $AA^T$는 대칭이고 양의 준정부호이므로 $R = \sqrt{A^T A}$와 $R' = \sqrt{AA^T}$가 정해진다.

1. (극분해) $A = UR$인 $n \times n$ 직교행렬 $U$가 있다. 이 꼴을 $A$의 **극분해**(polar decomposition)라 한다. 구체적으로 $(W, \Sigma, V)$가 $A$의 특잇값 분해이면 $U = WV^T$는 직교행렬이고 $R = V\Sigma V^T$이며 $A = UR$이다.
2. ($R$의 성질) $R$은 대칭이고 양의 준정부호이며 $RR = A^T A$이다. 모든 $x \in \mathbb{R}^n$에서 [[norm-in-inner-product-space|노름]]에 대하여 $\lVert Rx \rVert = \lVert Ax \rVert$이고, $\operatorname{Ker} T_R = \operatorname{Ker} T_A$이며 [[rank-of-a-matrix|계수]]에 대하여 $\operatorname{rank} R = \operatorname{rank} A$이다.
3. (가역인 경우) $A$가 [[invertible-matrix|가역]]인 것은 정확히 $R$이 양의 정부호일 때이고, 또 정확히 $R$이 가역일 때이다. 이때 $A = UR$인 직교행렬 $U$는 $U = AR^{-1}$을 만족한다.
4. (다른 순서) (1)의 $U$에 대하여 $A = R'U$이다. 구체적으로 (1)의 특잇값 분해에서 $R' = W\Sigma W^T$이다.
5. (작은 경우)
   - (i) $n = 1$이고 $A = \begin{pmatrix} a \end{pmatrix}$이면 $R = \begin{pmatrix} |a| \end{pmatrix}$이다([[absolute-value|절댓값]]). $0 \le a$이면 $U = \begin{pmatrix} 1 \end{pmatrix}$, $a < 0$이면 $U = \begin{pmatrix} -1 \end{pmatrix}$로 $A = UR$이다. $a = 0$이면 $U$가 $\begin{pmatrix} 1 \end{pmatrix}$이든 $\begin{pmatrix} -1 \end{pmatrix}$이든 $A = UR$이다.
   - (ii) $A$가 영행렬이면 $R$은 영행렬이고, 모든 $n \times n$ 직교행렬 $U$에서 $A = UR$이다.
   - (iii) $A$가 직교행렬이면 $R = I_n$이고 $A = AR$이다.
   - (iv) $A$가 대칭이고 양의 준정부호이면 $R = A$이고 $A = I_n R$이다.
:::

:::english
Let $n$ be a natural number and $A$ an $n \times n$ matrix. Give $\mathbb{R}^n$ the standard inner product; orthogonal matrices are those of the entry on orthogonal matrices, symmetric matrices are those of the entry on self-adjoint maps and symmetric matrices, positive definiteness and positive semidefiniteness are those of the entry on positive definite matrices, $\sqrt{\ }$ is that of the entry on the positive semidefinite square root, and singular value decompositions are those of the entry on the singular value decomposition. By (9) of the entry on positive definite matrices, $A^T A$ and $AA^T$ are symmetric and positive semidefinite, so $R = \sqrt{A^T A}$ and $R' = \sqrt{AA^T}$ are defined.

1. (Polar decomposition) There is an $n \times n$ orthogonal matrix $U$ with $A = UR$. This form is called a **polar decomposition** of $A$. Concretely, if $(W, \Sigma, V)$ is a singular value decomposition of $A$, then $U = WV^T$ is an orthogonal matrix, $R = V\Sigma V^T$, and $A = UR$.
2. (Properties of $R$) $R$ is symmetric and positive semidefinite and $RR = A^T A$. For every $x \in \mathbb{R}^n$, $\lVert Rx \rVert = \lVert Ax \rVert$ for the norm; $\operatorname{Ker} T_R = \operatorname{Ker} T_A$, and for ranks $\operatorname{rank} R = \operatorname{rank} A$.
3. (Invertible case) $A$ is invertible exactly when $R$ is positive definite, and also exactly when $R$ is invertible. In that case every orthogonal matrix $U$ with $A = UR$ satisfies $U = AR^{-1}$.
4. (Other order) For the $U$ of (1), $A = R'U$. Concretely, for the singular value decomposition in (1), $R' = W\Sigma W^T$.
5. (Small cases)
   - (i) If $n = 1$ and $A = \begin{pmatrix} a \end{pmatrix}$, then $R = \begin{pmatrix} |a| \end{pmatrix}$. If $0 \le a$ then $U = \begin{pmatrix} 1 \end{pmatrix}$, and if $a < 0$ then $U = \begin{pmatrix} -1 \end{pmatrix}$, gives $A = UR$. If $a = 0$, then $A = UR$ whether $U$ is $\begin{pmatrix} 1 \end{pmatrix}$ or $\begin{pmatrix} -1 \end{pmatrix}$.
   - (ii) If $A$ is the zero matrix, then $R$ is the zero matrix and $A = UR$ for every $n \times n$ orthogonal matrix $U$.
   - (iii) If $A$ is an orthogonal matrix, then $R = I_n$ and $A = AR$.
   - (iv) If $A$ is symmetric and positive semidefinite, then $R = A$ and $A = I_n R$.
:::

## 직관

$0$이 아닌 실수 $a$는 부호 $\pm 1$과 크기 $|a|$의 곱입니다. 극분해는 정사각행렬에서 같은 일을 합니다. "크기"의 자리에 오는 것이 $R = \sqrt{A^T A}$이고, (2)에 의해 $R$은 모든 벡터의 길이를 $A$와 똑같이 바꿉니다. "부호"의 자리에 오는 것이 길이를 바꾸지 않는 직교행렬 $U$입니다. 비유하면 사진을 늘이고 나서 길이를 바꾸지 않고 옮겨 놓는 두 단계입니다. 비유가 맞는 곳은 "늘이기"가 $R$의 고유벡터 방향마다 $0$ 이상인 수를 곱하는 것에, "옮겨 놓기"가 $U$에 해당한다는 점이고, 비유와 달리 $R$은 어떤 방향을 $0$으로 눌러 없앨 수 있습니다.

특잇값 분해 $A = W\Sigma V^T$의 가운데에 $V^T V = I_n$을 끼워 $A = (WV^T)(V\Sigma V^T)$로 묶으면 극분해가 됩니다. $V\Sigma V^T$가 $\sqrt{A^T A}$라는 것은 그것이 대칭이고 양의 준정부호이며 제곱이 $A^T A$라는 것과 제곱근이 하나뿐이라는 것에서 나옵니다. 이 길이 정사각행렬에서만 되는 까닭은 $W$가 $m \times m$, $V$가 $n \times n$, $\Sigma$가 $m \times n$이어서 $m = n$이어야 $WV^T$와 $V\Sigma V^T$를 만들 수 있기 때문입니다.

$R$은 $A$만으로 정해지지만 $U$는 그렇지 않을 수 있습니다((5)의 (i), (ii)). $A$가 가역이면 $R$도 가역이어서 $U = AR^{-1}$로 정해집니다.

## 증명

:::idea
특잇값 분해에서 $\Sigma$는 대각성분이 $0$ 이상인 대각행렬이므로 $V\Sigma V^T$는 대칭이고 양의 준정부호이며, $(V\Sigma V^T)(V\Sigma V^T) = V\Sigma\Sigma V^T = A^T A$이다. 제곱근의 유일성으로 이것이 $R$이다.
:::

:::hint
특잇값 분해의 (4)의 (i)에 의해 $A^T = V\Sigma^T W^T$이고, $m = n$이면 $\Sigma^T = \Sigma$입니다.
:::

:::proof
아래에서 "분해의 (n)"은 [[singular-value-decomposition|특잇값 분해]]의 번호, "제곱근의 (n)"은 [[positive-semidefinite-square-root|양의 준정부호 제곱근]]의 번호, "양의 정부호의 (n)"은 [[positive-definite-matrix|양의 정부호 행렬]]의 번호, "직교행렬의 (n)"은 [[orthogonal-matrix|직교행렬]]의 번호이다. 행렬의 곱의 결합법칙과 단위행렬은 [[matrix-product-properties|행렬의 곱의 성질]]의 (1), (4)이다.

**(1).** 분해의 (3)에 의해 $A$의 특잇값 분해 $(W, \Sigma, V)$가 있다. 그 $r$과 $\sigma$를 $r$과 $\sigma_1, \dots, \sigma_r$이라 하면, $m = n$이므로 분해의 (1)의 (v)에 의해 $\Sigma = \operatorname{diag}(\delta_1, \dots, \delta_n)$이고 $\Sigma^T = \Sigma$이며, $\delta_k$는 $\sigma_k$이거나 $0$이므로 모든 $k$에서 $0 \le \delta_k$이다. $P = V\Sigma V^T$로 두자. [[change-of-orthonormal-basis|정규직교 기저의 변환과 직교 닮음]]의 정의와 (5)에 의해 $P$는 대칭이고, 직교행렬의 (2)의 (다)에 의해 $V$는 가역이므로 양의 정부호의 (4)의 (ii)를 $S = V$로 쓰면 $P$는 양의 준정부호이다. 직교행렬의 정의에 의해 $V^T V = I_n$, $W^T W = I_n$이고, 분해의 (4)의 (i)에 의해 $A^T = V\Sigma^T W^T = V\Sigma W^T$이므로
$$
\begin{aligned}
PP &= V\Sigma(V^T V)\Sigma V^T \\
&= V(\Sigma\Sigma)V^T, \\
A^T A &= V\Sigma(W^T W)\Sigma V^T \\
&= V(\Sigma\Sigma)V^T
\end{aligned}
$$
이다. 따라서 $PP = A^T A$이고, 제곱근의 (1)의 유일성에 의해 $P = R$이다. 직교행렬의 (4)에 의해 $V^T$와 $WV^T$는 직교행렬이고,
$$
\begin{aligned}
UR &= (WV^T)(V\Sigma V^T) \\
&= W(V^T V)\Sigma V^T = W\Sigma V^T = A
\end{aligned}
$$
이다.

**(2).** 제곱근의 (1)에 의해 $R$은 대칭이고 양의 준정부호이며 $RR = A^T A$이다. 나머지는 제곱근의 (7)을 $M = A$로 쓴 것이다.

**(3).** [[rank-of-a-matrix|행렬의 계수]]의 (5)에 의해 $A$가 가역인 것은 정확히 $\operatorname{rank} A = n$일 때이고, (2)에 의해 정확히 $\operatorname{rank} R = n$일 때, 같은 (5)에 의해 정확히 $R$이 가역일 때이다. $R$은 양의 준정부호이므로 양의 정부호의 (5)의 (iii)에 의해 $R$이 양의 정부호인 것은 정확히 $R$이 가역일 때이다. 이때 $U$가 직교행렬이고 $A = UR$이면 $AR^{-1} = U(RR^{-1}) = UI_n = U$이다.

**(4).** $P' = W\Sigma W^T$로 두면 (1)의 $P$와 같은 이유로 $P'$은 대칭이고 양의 준정부호이며, $AA^T = (W\Sigma V^T)(V\Sigma W^T) = W(\Sigma\Sigma)W^T = P'P'$이므로 제곱근의 (1)에 의해 $P' = R'$이다. 또
$$
\begin{aligned}
R'U &= (W\Sigma W^T)(WV^T) \\
&= W\Sigma(W^T W)V^T \\
&= W\Sigma V^T = A
\end{aligned}
$$
이다.

**(5).** (i) $A^T A$는 [[matrix-product|행렬의 곱]]의 (2)에 의해 $\begin{pmatrix} aa \end{pmatrix}$이고, [[absolute-value|절댓값]]의 (5)에 의해 $aa = |a||a|$이며 절댓값의 (2)에 의해 $0 \le |a|$이다. 제곱근의 (6)의 (i)과 [[square-root-exists|제곱근의 존재]]의 (2)의 $\sqrt{bb} = b$ ($b = |a|$)에 의해 $R = \begin{pmatrix} |a| \end{pmatrix}$이다. 절댓값의 정의에 의해 $0 \le a$이면 $|a| = a$이므로 $\begin{pmatrix} 1 \end{pmatrix}\begin{pmatrix} |a| \end{pmatrix} = A$이고, $a < 0$이면 $|a| = -a$이므로 $(-1)(-a) = a$((K12)의 (iii))에 의해 $\begin{pmatrix} -1 \end{pmatrix}\begin{pmatrix} |a| \end{pmatrix} = A$이다. 직교행렬의 (7)에 의해 두 $1 \times 1$ 행렬은 직교행렬이다. $a = 0$이면 $R$은 영행렬이고 $(\pm 1) \cdot 0 = 0$이다.

(ii) $A^T A$는 영행렬이고 제곱근의 (6)의 (ii)에 의해 $R$은 영행렬이다. 모든 $U$에서 $UR$의 열은 $U$와 영벡터의 곱이므로([[matrix-product|행렬의 곱]]의 정의, [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)의 선형성) 영벡터이고 $UR = A$이다.

(iii) 직교행렬의 정의에 의해 $A^T A = I_n$이고 제곱근의 (6)의 (ii)에 의해 $R = I_n$이므로 $AR = AI_n = A$이다.

(iv) $A$는 대칭이고 양의 준정부호이며 $AA = A^T A$이므로 제곱근의 (1)의 유일성에 의해 $R = A$이고, $A = I_n A = I_n R$이다. $I_n$은 직교행렬의 (7)에 의해 직교행렬이다. $\blacksquare$
:::

## 예시와 반례

:::example[2 × 2 행렬의 두 꼴]
$$
A = \begin{pmatrix} 0 & -2 \\ 1 & 0 \end{pmatrix}
$$
이면 $A^T A = \operatorname{diag}(1, 4)$, $AA^T = \operatorname{diag}(4, 1)$이고, 제곱근의 (6)의 (ii)에 의해 $R = \operatorname{diag}(1, 2)$, $R' = \operatorname{diag}(2, 1)$입니다. $A$는 가역이므로 (3)에 의해
$$
\begin{aligned}
U &= AR^{-1} = \begin{pmatrix} 0 & -2 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & 2^{-1} \end{pmatrix} \\
&= \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}
\end{aligned}
$$
이고, $U^T U = I_2$입니다. 곱해 보면 $UR = \begin{pmatrix} 0 & -2 \\ 1 & 0 \end{pmatrix} = A$이고 $R'U = \begin{pmatrix} 0 & -2 \\ 1 & 0 \end{pmatrix} = A$입니다. $A$는 $e_2$를 $-2e_1$로, $e_1$을 $e_2$로 보내므로, 둘째 축을 $2$배로 늘이고($R$) 길이를 바꾸지 않고 옮기는($U$) 것으로 읽힙니다.
:::

:::counterexample[가역이 아니면 U 가 여럿일 수 있는 예]
$A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$이면 $A^T A = A$이고 (5)의 (iv)에 의해 $R = A$입니다. $U_1 = I_2$와 $U_2 = \operatorname{diag}(1, -1)$은 모두 직교행렬이고 $U_1 R = A$, $U_2 R = \operatorname{diag}(1 \cdot 1, (-1) \cdot 0) = A$입니다. 가역이 아니면 $R^{-1}$이 없고, 이 예처럼 $A = UR$인 직교행렬 $U$가 하나로 정해지지 않을 수 있습니다. $R$ 쪽은 늘 $\sqrt{A^T A}$ 하나입니다.
:::

## 확인 질문

:::check[$A$가 $n \times n$ 직교행렬 $Q$와 실수 $c > 0$으로 $A = cQ$이면 $A$의 극분해는 무엇인가?]
$A^T A = (cc)Q^T Q = (cc)I_n$이고 제곱근의 (6)의 (ii)와 제곱근의 존재의 (2)의 $\sqrt{cc} = c$에 의해 $R = \sqrt{(cc)I_n} = cI_n$입니다. $A$는 가역이므로(직교행렬의 역행렬 $c^{-1}Q^T$) (3)에 의해 $U = AR^{-1} = (cQ)(c^{-1}I_n) = Q$입니다. 곧 $A = Q(cI_n)$입니다.
:::

:::check[$A = UR$이 극분해이면 $\lVert Ae_1 \rVert$와 $\lVert Re_1 \rVert$는 어떤 관계인가?]
(2)에 의해 모든 $x$에서 $\lVert Rx \rVert = \lVert Ax \rVert$이므로 같습니다. 직교행렬 $U$가 길이를 바꾸지 않으므로([[orthogonal-matrix|직교행렬]]의 (2)의 (아)) $\lVert Ae_1 \rVert = \lVert U(Re_1) \rVert = \lVert Re_1 \rVert$로도 볼 수 있습니다.
:::
