---
title: 양의 정부호 행렬
title_en: Positive Definite Matrices
aliases: [양의 정부호, 양의 준정부호, 음의 정부호, 음의 준정부호, 부정부호, 그람 행렬, positive definite matrix, positive semidefinite matrix, negative definite, indefinite matrix, Gram matrix]
kind: definition
field: linear-algebra
msc: ["15A63", "15B48"]
level: undergrad
summary: 대칭행렬 A 가 양의 정부호인 것은 영벡터가 아닌 모든 x 에서 이차형식 ⟨Ax, x⟩ 가 양수일 때이고, 양의 준정부호, 음의 정부호, 음의 준정부호, 부정부호도 이차형식의 부호로 정한다. 양의 정부호인 것은 정확히 모든 고윳값이 양수일 때이고, 그때 행렬식은 양수이며, ⟨Ax, y⟩ 가 내적이 되는 것은 정확히 A 가 대칭이고 양의 정부호일 때이다. 기저의 그람 행렬과 MᵀM 이 그 예이다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, mathematical-induction, power-of-a-real-number, finite-product-of-reals, vector-space, vector-space-basic-properties, real-function-space, finite-sum-of-vectors, standard-basis, geometric-at-most-algebraic, linear-independence, matrix, matrix-vector-product, matrix-product, matrix-product-properties, transpose, invertible-matrix, inverse-matrix-properties, rank-of-a-matrix, basis, matrix-in-bases, double-sum-interchange, diagonalizable, eigenvalue-and-eigenvector, determinant, determinant-and-invertibility, determinant-of-product, determinant-of-triangular-matrix, trace, trace-of-product, upper-bound-and-supremum, inner-product-space, standard-inner-product, inner-product-examples, norm-in-inner-product-space, orthogonal-vectors, orthonormal-list, orthonormal-basis, kernel-of-transpose-product, self-adjoint-map, orthogonal-matrix, rayleigh-quotient, semidefinite-cauchy-schwarz, symmetric-matrix-has-eigenvalue, spectral-theorem, quadratic-form]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 7장 4절 Positive definite forms. Minimax characterization of eigenvalues and the Sylvester's criterion of positivity 의 첫 Definition, p.208, 둘째 Definition, Theorem 4.1 과 그 증명, Remark, p.209, 소절 4.1 Sylvester's criterion of positivity 의 첫 단락과 식 (4.1), p.209, Theorem 4.2 의 첫째 증명의 첫 단락, p.210, 연습문제 4.1, p.214; 7장 5절 Positive definite forms and inner products, pp.214–215; 6장 3절 Polar and singular value decompositions 의 소절 3.1 Positive definite operators. Square roots. 의 Definition 과 Theorem 3.1 과 그 증명, p.171, 소절 3.2 첫 단락, p.172; 6장 2절 연습문제 2.8, p.170
    checked: original
    note: "다섯 낱말의 정의는 출처 7장 4절의 첫 Definition(p.208, 이차형식에 대해)과 둘째 Definition(p.209, 'A = A* 인 행렬은 그 이차형식이 양의 정부호 등일 때 양의 정부호 등이라 한다')을 실대칭행렬로 옮긴 것이다. 출처 6장 소절 3.1(p.171)은 자기수반사상에 같은 정의를 하고 A > 0, A ≥ 0 이라는 기호를 쓰는데, 이 사이트는 기호를 두지 않고 말로 쓴다. (1)의 곱의 부호는 이 사이트의 실수의 유한 곱 항목에 없는 사실이라 여기서 증명한다. 출처는 Theorem 4.2 의 증명(p.210, p.213)에서 '양의 정부호 행렬의 고윳값은 모두 양수이므로 det A_k > 0' 이라고 적고, 양수의 곱이 양수라는 근거는 따로 적지 않는다. (3)은 출처 Theorem 4.1(p.209)과 6장 Theorem 3.1(p.171)이다. 출처는 두 정리를 '직교 대각화에서 곧바로 나온다'고 증명하는데, 이 항목은 ⇐ 방향을 스펙트럼 정리 없이 레일리 몫의 하한(가장 작은 고윳값)으로 증명한다. (4)의 대각행렬의 경우는 출처 Theorem 3.1 의 증명(p.171)의 '대각행렬이 양의 정부호(양의 준정부호)인 것은 정확히 대각성분이 모두 양수(음이 아님)일 때'이고, 출처 4절의 Remark(p.209)는 직교가 아닌 아무 대각화 D = S*AS 의 대각성분을 보면 된다고 실베스터 관성 법칙을 근거로 적는다. 이 항목의 (4)는 A = SDSᵀ (S 가역) 꼴로 쓰고(출처의 D = S*AS 와 S 를 (Sᵀ)⁻¹ 로 바꾸어 같은 꼴), 관성 법칙 없이 직접 증명한다. (5)는 6단원의 ⟨Bx, x⟩ ≥ 0 인 대칭행렬의 코시–슈바르츠 부등식이 다루는 행렬이 곧 양의 준정부호 행렬이라는 것을 밝힌다. (6)의 '양의 정부호이면 det A > 0'은 위의 Theorem 4.2 의 증명(p.210)이 k = n 에서 쓰는 것과 같은 사실이다. (7)은 출처 5절 끝(p.215)의 '양의 정부호인 G 로 (x, y)_G := (Gx, y) 를 정하면 내적이 된다는 것은 쉽게 확인된다'에 거꾸로의 방향을 더한 것이다. (8)은 출처 5절(pp.214–215)의 행렬 G = (g_{j,k}), g_{j,k} = (v_k, v_j) 와 (x, y) = (G[x]_B, [y]_B) 이고, 출처는 'G 가 양의 정부호인 것은 곧바로 보인다(why?)'와 'G = I 인 것은 정확히 기저가 정규직교일 때'를 증명 없이 적는다. 증명은 이 사이트가 썼다. '그람 행렬'이라는 이름은 출처에 나오지 않는다(source-grep 으로 책 전체에서 'Gram matrix' 0건, 'Gramian' 0건, 'Gram determinant' 0건, 'Gram' 은 Gram–Schmidt 에 관한 것뿐이다). 같은 행렬을 출처 8장 4절 소절 4.3.1 Einstein notation, metric tensor(pp.235–236)는 g_{j,k} = (b_k, b_j) 인 양의 정부호 행렬 G 로 다시 쓰고 '흔히 metric tensor 라 부른다'고 적으며, p.237 에서 'G 는 대칭이다'라고 적는다. (9)의 앞부분은 출처 6장 연습문제 2.8 a), b)(p.170, A*A 는 자기수반이고 고윳값이 음이 아니다)와 소절 3.2 첫 단락(p.172, A*A 는 양의 준정부호이다)과 같은 사실이다. (10)의 (iii)의 2 × 2 판정은 출처 소절 4.1 의 (4.1)(p.209, 'a > 0 이고 det A > 0')을 행렬식과 대각합으로 쓴 것이고, 증명이 고윳값의 곱과 합을 쓰는 것은 출처가 (4.1)의 한 방향을 증명하는 방법(λ₁λ₂ = det A, λ₁ + λ₂ = trace A)과 같은 발상이다. 예시 '2 × 2 행렬을 판정하고 완전제곱으로 확인하기'의 완전제곱은 출처 7장 소절 2.2.1 의 완전제곱으로 대각화하는 방법(pp.201–202)과 같은 발상이다. 반례 '행렬식이 양수이지만 양의 정부호가 아닌 예'는 출처 (4.1)(p.209)이 det A > 0 에 a > 0 을 함께 요구하는 까닭을 −I₂ 에서 본 것이고, 출처 소절 4.3(p.214)이 음의 정부호 판정을 (−1)ᵏ det A_k > 0 으로 적는 것과 같은 계열이다. 반례 '대각성분이 모두 양수인 부정부호 행렬'의 행렬은 출처 5장 6절 연습문제 6.1(p.150)의 첫째 행렬 (1 2; 2 1) 과 같은 꼴(대각성분이 같은 양수이고 비대각 성분이 그보다 큰 2 × 2 대칭행렬)이다. 확인 질문 '$A$가 양의 정부호이면 $A^{-1}$도 양의 정부호인가?'는 출처 연습문제 4.1(p.214)이 묻는 '−A, A³, A⁻¹ 은 양의 정부호인가' 가운데 A⁻¹ 과 같은 물음이다. 확인 질문 '$\\mathbb{R}^2$의 기저 $b_1 = (1, 0)$, $b_2 = (1, 1)$의 그람 행렬은 무엇이고, 좌표로 내적을 어떻게 계산하는가?'는 출처 5절(pp.214–215)의 계산을 한 기저에 해 본 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(고윳값 판정과 2 × 2 판정 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$n$이 자연수이고 $\mathbb{R}^n$에는 [[standard-inner-product|표준내적]]을 주며, $A$가 $n \times n$ [[self-adjoint-map|대칭행렬]]이라 하자. 이차형식 $q_A$와 쌍선형 형식 $L_A$는 [[quadratic-form|쌍선형 형식과 이차형식]]의 것이다.

- $A$가 **양의 정부호**(positive definite)인 것은 정확히 $x \ne 0$인 모든 $x \in \mathbb{R}^n$에서 $0 < q_A(x)$일 때이다.
- $A$가 **양의 준정부호**(positive semidefinite)인 것은 정확히 모든 $x \in \mathbb{R}^n$에서 $0 \le q_A(x)$일 때이다.
- $A$가 **음의 정부호**(negative definite)인 것은 정확히 $x \ne 0$인 모든 $x \in \mathbb{R}^n$에서 $q_A(x) < 0$일 때이다.
- $A$가 **음의 준정부호**(negative semidefinite)인 것은 정확히 모든 $x \in \mathbb{R}^n$에서 $q_A(x) \le 0$일 때이다.
- $A$가 **부정부호**(indefinite)인 것은 정확히 $0 < q_A(x_1)$인 $x_1 \in \mathbb{R}^n$과 $q_A(x_2) < 0$인 $x_2 \in \mathbb{R}^n$이 있을 때이다.

이 다섯 낱말은 대칭행렬에만 쓴다. 고윳값은 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 것이고, 레일리 몫의 값의 집합 $\mathcal{R}_A$는 [[rayleigh-quotient|레일리 몫]]의 것이며, [[symmetric-matrix-has-eigenvalue|대칭행렬의 실고윳값]]의 (2), (3)에 의해 $\sup \mathcal{R}_A$와 $\inf \mathcal{R}_A$는 각각 $A$의 가장 큰 고윳값과 가장 작은 고윳값이다. $\det$는 [[determinant|행렬식]], $\operatorname{tr}$은 [[trace|대각합]], $\operatorname{diag}$는 [[diagonalizable|대각화 가능]]의 것이고, 실수의 열의 곱은 [[finite-product-of-reals|실수의 유한 곱]]의 것이다. 다음이 성립한다.

1. (곱의 부호) $m \ge 0$이 정수이고 $a_1, \dots, a_m$이 길이 $m$인 실수의 열이라 하자.
   - (i) 모든 $i$에서 $0 < a_i$이면 $0 < a_1 \cdots a_m$이다.
   - (ii) 모든 $i$에서 $0 \le a_i$이면 $0 \le a_1 \cdots a_m$이다.
   - (iii) $m \ge 1$이고 $k \in \{1, \dots, m\}$이며 $i \ne k$인 모든 $i$에서 $0 < a_i$라 하자. $a_k \le 0$이면 $a_1 \cdots a_m \le 0$이고, $a_k < 0$이면 $a_1 \cdots a_m < 0$이다.
2. (부호의 관계) $-A$는 대칭행렬이다.
   - (i) 양의 정부호이면 양의 준정부호이고, 음의 정부호이면 음의 준정부호이다.
   - (ii) $A$가 음의 정부호인 것은 정확히 $-A$가 양의 정부호일 때이고, $A$가 음의 준정부호인 것은 정확히 $-A$가 양의 준정부호일 때이며, $A$가 부정부호인 것은 정확히 $-A$가 부정부호일 때이다.
   - (iii) $A$가 부정부호인 것은 정확히 $A$가 양의 준정부호도 아니고 음의 준정부호도 아닐 때이다.
   - (iv) $A$가 양의 준정부호이면서 음의 준정부호인 것은 정확히 $A$가 영행렬일 때이다. $n \times n$ 영행렬은 양의 정부호도, 음의 정부호도, 부정부호도 아니다.
3. (고윳값 판정)
   - (i) $A$가 양의 정부호인 것은 정확히 $A$의 모든 고윳값이 양수일 때이고, 또 정확히 $0 < \inf \mathcal{R}_A$일 때이다.
   - (ii) $A$가 양의 준정부호인 것은 정확히 $A$의 모든 고윳값이 $0$ 이상일 때이고, 또 정확히 $0 \le \inf \mathcal{R}_A$일 때이다.
   - (iii) $A$가 음의 정부호인 것은 정확히 $A$의 모든 고윳값이 음수일 때이고, 또 정확히 $\sup \mathcal{R}_A < 0$일 때이다.
   - (iv) $A$가 음의 준정부호인 것은 정확히 $A$의 모든 고윳값이 $0$ 이하일 때이고, 또 정확히 $\sup \mathcal{R}_A \le 0$일 때이다.
   - (v) $A$가 부정부호인 것은 정확히 $A$가 양수인 고윳값과 음수인 고윳값을 모두 가질 때이고, 또 정확히 $\inf \mathcal{R}_A < 0 < \sup \mathcal{R}_A$일 때이다.
4. (대각행렬로 쓴 꼴) $S$가 [[invertible-matrix|가역]]인 $n \times n$ 행렬이고 $d_1, \dots, d_n$이 길이 $n$인 실수의 열이며 $D = \operatorname{diag}(d_1, \dots, d_n)$이고 $A = S D S^T$라 하자. 그러면 모든 $x \in \mathbb{R}^n$에서 $y = S^T x$로 두면 $q_A(x) = q_D(y) = d_1 y_1^2 + \cdots + d_n y_n^2$이고, 다음이 성립한다.
   - (i) $A$가 양의 정부호인 것은 정확히 모든 $k$에서 $0 < d_k$일 때이다.
   - (ii) $A$가 양의 준정부호인 것은 정확히 모든 $k$에서 $0 \le d_k$일 때이다.
   - (iii) $A$가 음의 정부호인 것은 정확히 모든 $k$에서 $d_k < 0$일 때이다.
   - (iv) $A$가 음의 준정부호인 것은 정확히 모든 $k$에서 $d_k \le 0$일 때이다.
   - (v) $A$가 부정부호인 것은 정확히 $0 < d_j$인 $j$와 $d_k < 0$인 $k$가 있을 때이다.

   특히 [[spectral-theorem|실스펙트럼 정리]]의 (3)의 $A = QDQ^T$ ($Q$는 [[orthogonal-matrix|직교행렬]])에 쓸 수 있고, $S = I_n$으로 두면 대각행렬 $D$ 자신에 대한 판정이 된다.
5. (양의 준정부호와 코시–슈바르츠 부등식) $A$가 양의 준정부호인 것은 정확히 모든 $x$에서 $0 \le \langle Ax, x \rangle$일 때이므로, [[semidefinite-cauchy-schwarz|⟨Bx, x⟩ ≥ 0 인 대칭행렬의 코시–슈바르츠 부등식]]의 $B$는 곧 양의 준정부호 행렬이다. $A$가 양의 준정부호이면 다음이 성립한다.
   - (i) 모든 $x, y$에서 $\langle Ax, y \rangle^2 \le q_A(x) q_A(y)$이다.
   - (ii) $q_A(x) = 0$인 것은 정확히 $Ax = 0$일 때이다.
   - (iii) $A$가 양의 정부호인 것은 정확히 $A$가 가역일 때이고, 또 정확히 $\det A \ne 0$일 때이다.
6. (행렬식과 가역) $A = Q D Q^T$이고 $Q$가 직교행렬, $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$이면 $\det A = \lambda_1 \cdots \lambda_n$이고 $\operatorname{tr} A = \lambda_1 + \cdots + \lambda_n$이다. 또 다음이 성립한다.
   - (i) $A$가 양의 정부호이면 $0 < \det A$이고 $A$는 가역이다. $A$가 양의 준정부호이면 $0 \le \det A$이다.
   - (ii) $A$가 음의 정부호이면 $0 < (-1)^n \det A$이고 $A$는 가역이다. $A$가 음의 준정부호이면 $0 \le (-1)^n \det A$이다.
7. (내적) $B$가 $n \times n$ 행렬(대칭이라고 가정하지 않는다)이면, $L_B$, 곧 $(x, y)$에서의 값이 $\langle Bx, y \rangle$인 함수가 $\mathbb{R}^n$ 위의 [[inner-product-space|내적]]인 것은 정확히 $B$가 대칭행렬이고 양의 정부호일 때이다.
8. (그람 행렬) $V$가 내적공간이고 $\mathcal{B} = b_1, \dots, b_n$이 $V$의 [[basis|기저]]라 하자. $(j, k)$ 성분이 $\langle b_k, b_j \rangle$인 $n \times n$ 행렬 $G$를 $\mathcal{B}$의 **그람 행렬**(Gram matrix)이라 한다. $[x]_{\mathcal{B}}$는 [[matrix-in-bases|기저에 관한 선형사상의 행렬]]의 좌표벡터이다.
   - (i) $G$는 대칭행렬이고 양의 정부호이다.
   - (ii) 모든 $x, y \in V$에서 $\langle x, y \rangle = \langle G[x]_{\mathcal{B}}, [y]_{\mathcal{B}} \rangle$이다. 오른쪽은 $\mathbb{R}^n$의 표준내적이다.
   - (iii) $G = I_n$인 것은 정확히 $\mathcal{B}$가 $V$의 [[orthonormal-basis|정규직교 기저]]일 때이다.
   - (iv) $m$이 자연수이고 $V = \mathbb{R}^m$(표준내적)이며 $M$이 $k$번째 열이 $b_k$인 $m \times n$ 행렬이면 $G = M^T M$이다.
9. ($M^T M$) $m$이 자연수이고 $M$이 $m \times n$ 행렬이면 $M^T M$은 대칭행렬이고 양의 준정부호이다. $M^T M$이 양의 정부호인 것은 정확히 $M$의 열들이 [[linear-independence|일차독립]]일 때이고, 또 정확히 [[rank-of-a-matrix|계수]]가 $\operatorname{rank} M = n$일 때이다. 특히 $m < n$이면 $M^T M$은 양의 정부호가 아니다.
10. (작은 경우)
    - (i) $n = 1$이고 $A = \begin{pmatrix} a \end{pmatrix}$이면 $q_A(x) = a x_1^2$이다. $A$가 양의 정부호, 양의 준정부호, 음의 정부호, 음의 준정부호인 것은 각각 정확히 $0 < a$, $0 \le a$, $a < 0$, $a \le 0$일 때이고, $A$는 부정부호가 아니다.
    - (ii) 대각행렬 $D = \operatorname{diag}(d_1, \dots, d_n)$에 대해서는 (4)가 $S = I_n$으로 성립한다. 특히 실수 $c$에 대하여 $cI_n$은 $0 < c$일 때 양의 정부호이고 $c < 0$일 때 음의 정부호이다. $I_n$은 양의 정부호이고 $-I_n$은 음의 정부호이다.
    - (iii) $n = 2$이면, $A$가 양의 정부호인 것은 정확히 $0 < \det A$이고 $0 < \operatorname{tr} A$일 때이고, $A$가 음의 정부호인 것은 정확히 $0 < \det A$이고 $\operatorname{tr} A < 0$일 때이며, $A$가 부정부호인 것은 정확히 $\det A < 0$일 때이다.
:::

:::english
Let $n$ be a natural number, give $\mathbb{R}^n$ the standard inner product, and let $A$ be an $n \times n$ symmetric matrix. The quadratic form $q_A$ and the bilinear form $L_A$ are those of the entry on bilinear and quadratic forms.

- $A$ is **positive definite** exactly when $0 < q_A(x)$ for every $x \in \mathbb{R}^n$ with $x \ne 0$.
- $A$ is **positive semidefinite** exactly when $0 \le q_A(x)$ for every $x \in \mathbb{R}^n$.
- $A$ is **negative definite** exactly when $q_A(x) < 0$ for every $x \in \mathbb{R}^n$ with $x \ne 0$.
- $A$ is **negative semidefinite** exactly when $q_A(x) \le 0$ for every $x \in \mathbb{R}^n$.
- $A$ is **indefinite** exactly when there are $x_1 \in \mathbb{R}^n$ with $0 < q_A(x_1)$ and $x_2 \in \mathbb{R}^n$ with $q_A(x_2) < 0$.

These five words are used only for symmetric matrices. Eigenvalues are those of the entry on eigenvalues and eigenvectors, the set $\mathcal{R}_A$ of values of the Rayleigh quotient is that of the entry on the Rayleigh quotient, and by items (2) and (3) of the entry on real eigenvalues of symmetric matrices, $\sup \mathcal{R}_A$ and $\inf \mathcal{R}_A$ are the largest and the smallest eigenvalue of $A$. $\det$ is the determinant, $\operatorname{tr}$ is the trace, $\operatorname{diag}$ is that of the entry on diagonalizability, and the product of a sequence of real numbers is that of the entry on finite products of reals. The following hold.

1. (Sign of a product) Let $m \ge 0$ be an integer and $a_1, \dots, a_m$ a sequence of real numbers of length $m$.
   - (i) If $0 < a_i$ for all $i$, then $0 < a_1 \cdots a_m$.
   - (ii) If $0 \le a_i$ for all $i$, then $0 \le a_1 \cdots a_m$.
   - (iii) Let $m \ge 1$, $k \in \{1, \dots, m\}$, and $0 < a_i$ for all $i \ne k$. If $a_k \le 0$, then $a_1 \cdots a_m \le 0$; if $a_k < 0$, then $a_1 \cdots a_m < 0$.
2. (Relations between the signs) $-A$ is a symmetric matrix.
   - (i) Positive definite implies positive semidefinite, and negative definite implies negative semidefinite.
   - (ii) $A$ is negative definite exactly when $-A$ is positive definite, $A$ is negative semidefinite exactly when $-A$ is positive semidefinite, and $A$ is indefinite exactly when $-A$ is indefinite.
   - (iii) $A$ is indefinite exactly when $A$ is neither positive semidefinite nor negative semidefinite.
   - (iv) $A$ is both positive semidefinite and negative semidefinite exactly when $A$ is the zero matrix. The $n \times n$ zero matrix is neither positive definite, nor negative definite, nor indefinite.
3. (Eigenvalue criteria)
   - (i) $A$ is positive definite exactly when all eigenvalues of $A$ are positive, and also exactly when $0 < \inf \mathcal{R}_A$.
   - (ii) $A$ is positive semidefinite exactly when all eigenvalues of $A$ are at least $0$, and also exactly when $0 \le \inf \mathcal{R}_A$.
   - (iii) $A$ is negative definite exactly when all eigenvalues of $A$ are negative, and also exactly when $\sup \mathcal{R}_A < 0$.
   - (iv) $A$ is negative semidefinite exactly when all eigenvalues of $A$ are at most $0$, and also exactly when $\sup \mathcal{R}_A \le 0$.
   - (v) $A$ is indefinite exactly when $A$ has both a positive eigenvalue and a negative eigenvalue, and also exactly when $\inf \mathcal{R}_A < 0 < \sup \mathcal{R}_A$.
4. (Form written with a diagonal matrix) Let $S$ be an invertible $n \times n$ matrix, $d_1, \dots, d_n$ a sequence of real numbers of length $n$, $D = \operatorname{diag}(d_1, \dots, d_n)$, and $A = S D S^T$. Then for every $x \in \mathbb{R}^n$, putting $y = S^T x$, we have $q_A(x) = q_D(y) = d_1 y_1^2 + \cdots + d_n y_n^2$, and the following hold.
   - (i) $A$ is positive definite exactly when $0 < d_k$ for all $k$.
   - (ii) $A$ is positive semidefinite exactly when $0 \le d_k$ for all $k$.
   - (iii) $A$ is negative definite exactly when $d_k < 0$ for all $k$.
   - (iv) $A$ is negative semidefinite exactly when $d_k \le 0$ for all $k$.
   - (v) $A$ is indefinite exactly when there are $j$ with $0 < d_j$ and $k$ with $d_k < 0$.

   In particular this applies to $A = QDQ^T$ of item (3) of the real spectral theorem ($Q$ an orthogonal matrix), and with $S = I_n$ it is the criterion for the diagonal matrix $D$ itself.
5. (Positive semidefinite matrices and the Cauchy–Schwarz inequality) $A$ is positive semidefinite exactly when $0 \le \langle Ax, x \rangle$ for all $x$, so the matrices $B$ of the entry on the Cauchy–Schwarz inequality for symmetric matrices with $\langle Bx, x \rangle \ge 0$ are exactly the positive semidefinite matrices. If $A$ is positive semidefinite, the following hold.
   - (i) $\langle Ax, y \rangle^2 \le q_A(x) q_A(y)$ for all $x, y$.
   - (ii) $q_A(x) = 0$ exactly when $Ax = 0$.
   - (iii) $A$ is positive definite exactly when $A$ is invertible, and also exactly when $\det A \ne 0$.
6. (Determinant and invertibility) If $A = Q D Q^T$ with $Q$ an orthogonal matrix and $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$, then $\det A = \lambda_1 \cdots \lambda_n$ and $\operatorname{tr} A = \lambda_1 + \cdots + \lambda_n$. Moreover the following hold.
   - (i) If $A$ is positive definite, then $0 < \det A$ and $A$ is invertible. If $A$ is positive semidefinite, then $0 \le \det A$.
   - (ii) If $A$ is negative definite, then $0 < (-1)^n \det A$ and $A$ is invertible. If $A$ is negative semidefinite, then $0 \le (-1)^n \det A$.
7. (Inner products) If $B$ is an $n \times n$ matrix (not assumed symmetric), then $L_B$, the function whose value at $(x, y)$ is $\langle Bx, y \rangle$, is an inner product on $\mathbb{R}^n$ exactly when $B$ is a symmetric matrix and positive definite.
8. (Gram matrix) Let $V$ be an inner product space and $\mathcal{B} = b_1, \dots, b_n$ a basis of $V$. The $n \times n$ matrix $G$ whose $(j, k)$ entry is $\langle b_k, b_j \rangle$ is called the **Gram matrix** of $\mathcal{B}$. $[x]_{\mathcal{B}}$ is the coordinate vector of the entry on matrices of linear maps with respect to bases.
   - (i) $G$ is a symmetric matrix and positive definite.
   - (ii) For all $x, y \in V$, $\langle x, y \rangle = \langle G[x]_{\mathcal{B}}, [y]_{\mathcal{B}} \rangle$; the right side is the standard inner product of $\mathbb{R}^n$.
   - (iii) $G = I_n$ exactly when $\mathcal{B}$ is an orthonormal basis of $V$.
   - (iv) If $m$ is a natural number, $V = \mathbb{R}^m$ (with the standard inner product), and $M$ is the $m \times n$ matrix whose $k$th column is $b_k$, then $G = M^T M$.
9. ($M^T M$) If $m$ is a natural number and $M$ is an $m \times n$ matrix, then $M^T M$ is a symmetric matrix and positive semidefinite. $M^T M$ is positive definite exactly when the columns of $M$ are linearly independent, and also exactly when the rank satisfies $\operatorname{rank} M = n$. In particular, if $m < n$, then $M^T M$ is not positive definite.
10. (Small cases)
    - (i) If $n = 1$ and $A = \begin{pmatrix} a \end{pmatrix}$, then $q_A(x) = a x_1^2$. $A$ is positive definite, positive semidefinite, negative definite, negative semidefinite exactly when $0 < a$, $0 \le a$, $a < 0$, $a \le 0$ respectively, and $A$ is not indefinite.
    - (ii) For a diagonal matrix $D = \operatorname{diag}(d_1, \dots, d_n)$, item (4) holds with $S = I_n$. In particular, for a real number $c$, $cI_n$ is positive definite when $0 < c$ and negative definite when $c < 0$. $I_n$ is positive definite and $-I_n$ is negative definite.
    - (iii) If $n = 2$, then $A$ is positive definite exactly when $0 < \det A$ and $0 < \operatorname{tr} A$, $A$ is negative definite exactly when $0 < \det A$ and $\operatorname{tr} A < 0$, and $A$ is indefinite exactly when $\det A < 0$.
:::

## 직관

이차형식의 값을 원점에서 잰 높이로 생각하면, 양의 정부호는 원점에서 어느 방향으로 가든 땅이 올라가는 그릇 모양입니다. 음의 정부호는 그것을 뒤집은 모양이고, 부정부호는 어떤 방향으로는 올라가고 어떤 방향으로는 내려가는 말안장 모양입니다. 양의 준정부호는 내려가는 방향만 없으면 되는 것으로, 평평하게 머무는 방향이 있어도 됩니다. 비유가 정의와 맞는 곳은 "영벡터가 아닌 모든 방향"이라는 한정입니다. 원점 자체에서는 늘 $q_A(0) = 0$이라서 정부호의 정의에서 빠집니다.

(3)과 (4)는 이 모양을 고윳값으로 읽게 해 줍니다. 직교 대각화로 축을 돌리면 $q_A$는 $\lambda_1 y_1^2 + \cdots + \lambda_n y_n^2$이 되므로, 모든 계수가 양수이면 그릇이고 부호가 섞이면 말안장입니다. 그런데 (3)의 "모든 고윳값이 양수이면 양의 정부호"는 스펙트럼 정리 없이도 나옵니다. 가장 작은 고윳값은 레일리 몫의 하한이어서 모든 $x$에서 $q_A(x) \ge (\inf \mathcal{R}_A)\langle x, x \rangle$이기 때문입니다.

영행렬은 땅이 완전히 평평한 경우입니다. 모든 값이 $0$이라 양의 준정부호이자 음의 준정부호이지만 정부호도 부정부호도 아닙니다. $n = 1$이면 $q_A(x) = a x_1^2$이어서 $a$의 부호가 곧 판정이고, 부정부호인 $1 \times 1$ 행렬은 없습니다. 내적의 조건 (iii)을 "양의 정부호"라 부르는 것도 같은 뜻입니다. (7)에 의해 $\langle Bx, y \rangle$가 내적인 것은 $B$가 대칭이고 이 뜻으로 양의 정부호일 때입니다.

## 성질의 증명

:::proof
아래에서 (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것, (W1)–(W4)는 [[real-order-axioms|실수의 순서]]의 것, (V1)–(V8)은 [[vector-space|벡터공간]]의 것, (B1)–(B12)는 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 것, (H0)–(H7)과 (C1)–(C6)은 [[finite-sum-of-vectors|벡터의 유한 합]]의 것이고, 순서의 성질은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호로, 내적의 조건과 성질은 [[inner-product-space|내적과 내적공간]]의 번호로, 표준내적의 성질은 [[standard-inner-product|ℝⁿ 의 표준내적]]의 번호로, 이차형식의 성질은 [[quadratic-form|쌍선형 형식과 이차형식]]의 번호로, 곱의 성질은 [[finite-product-of-reals|실수의 유한 곱]]의 번호로 인용한다. 표준내적의 (1)에 의해 표준내적은 내적이고, $x \ne 0$이면 $0 < \langle x, x \rangle$이다(조건 (iii)). 실수의 제곱 $c^2$은 [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 $cc$이다. 고윳값 $\lambda$에 속하는 고유벡터 $v$에서 $q_A(v) = \langle \lambda v, v \rangle = \lambda \langle v, v \rangle$이고(내적의 (1)), 이것을 (가)라 부른다. 또 [[symmetric-matrix-has-eigenvalue|대칭행렬의 실고윳값]]의 (4)에 의해 모든 $x$에서
$$
\begin{aligned}
(\inf \mathcal{R}_A)\langle x, x \rangle &\le q_A(x) \\
&\le (\sup \mathcal{R}_A)\langle x, x \rangle
\end{aligned}
$$
이고, 이것을 (나)라 부른다.

**(1).** (i)과 (ii)는 $m$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로 보인다. $m = 0$이면 곱은 빈 곱 $1$이고 순서의 성질 (5)의 (ii)에 의해 $0 < 1$이다. 길이 $m$에서 성립한다고 하고 $a_1, \dots, a_{m+1}$의 모든 항이 양수라 하자. 처음 $m$개로 이루어진 열의 항도 모두 양수이므로 귀납 가정에 의해 그 곱 $p$는 양수이고, 곱의 (1)에 의해 $a_1 \cdots a_{m+1} = p\,a_{m+1}$이며 (W4)에 의해 이것은 양수이다. (ii)는 같은 귀납에서 $0 < 1$ 대신 $0 \le 1$을, (W4) 대신 순서의 성질 (4)의 (iv)의 첫 문장을 쓴다.

(iii) $m = l + 1$이라 하자($l \ge 0$). $k$번째 항을 지운 길이 $l$인 열 $c_1, \dots, c_l$의 항은 $k$가 아닌 자리의 $a_i$이므로 모두 양수이고, (i)에 의해 $p = c_1 \cdots c_l$은 양수이다. 곱의 (6)에 의해 $a_1 \cdots a_m = p\,a_k$이다. $a_k \le 0$이면 순서의 성질 (4)의 (iv)의 넷째 문장에 의해 $p\,a_k \le 0$이고, $a_k < 0$이면 둘째 문장에 의해 $p\,a_k < 0$이다.

**(2).** (B5)에 의해 $-A = (-1)A$이고 [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (5)에 의해 이것은 대칭이다. 이차형식의 (3)에 의해 $q_A(0) = 0$이고 $q_{-A}(x) = -q_A(x)$이다.

(i) $A$가 양의 정부호이면 $x \ne 0$에서 $0 < q_A(x)$이므로 $0 \le q_A(x)$이고, $x = 0$에서 $q_A(0) = 0$이므로 $0 \le q_A(0)$이다. 음의 경우도 같다.

(ii) 순서의 성질 (3)의 (ii)에 의해 $q_A(x) < 0$인 것은 정확히 $0 < -q_A(x) = q_{-A}(x)$일 때이고, 같은 항목의 (3)의 (iii)과 $-0 = 0$에 의해 $q_A(x) \le 0$인 것은 정확히 $0 \le q_{-A}(x)$일 때이다. 이 두 동치를 모든 $x$(또는 $x \ne 0$인 모든 $x$)에 쓰면 첫 두 문장이 나온다. 같은 동치와 $0 < q_A(x)$인 것이 정확히 $q_{-A}(x) < 0$일 때라는 것에 의해, 부정부호의 정의의 두 조건이 $A$와 $-A$ 사이에서 서로 바뀐다.

(iii) 순서의 성질 (1)의 (iii)에 의해 "$0 \le q_A(x)$"가 성립하지 않는 것은 정확히 $q_A(x) < 0$일 때이므로, $A$가 양의 준정부호가 아닌 것은 정확히 $q_A(x_2) < 0$인 $x_2$가 있을 때이다. 같은 이유로 $A$가 음의 준정부호가 아닌 것은 정확히 $0 < q_A(x_1)$인 $x_1$이 있을 때이다. 두 문장을 합치면 부정부호의 정의이다.

(iv) 양쪽 준정부호이면 모든 $x$에서 $0 \le q_A(x) \le 0$이므로 순서의 성질 (1)의 (ii)에 의해 $\langle Ax, x \rangle = 0$이고, 자기수반사상과 대칭행렬의 (8)에 의해 $A$는 영행렬이다. 거꾸로 영행렬 $O$는 대칭이고(같은 항목의 (5)) [[matrix-vector-product|행렬과 벡터의 곱]]의 정의와 (C3)에 의해 $Ox = 0$이므로 $q_O(x) = 0$이며, 따라서 양쪽 준정부호이다. $n$은 자연수이므로 [[standard-basis|표준기저]]의 $e_1$이 있고 $e_1 \ne 0$인데 $q_O(e_1) = 0$이므로, 순서의 성질 (1)의 (i)에 의해 $O$는 양의 정부호도 음의 정부호도 아니다. (iii)에 의해 $O$는 부정부호가 아니다.

**(3).** 대칭행렬의 실고윳값의 (1), (3)에 의해 $\sup \mathcal{R}_A$와 $\inf \mathcal{R}_A$는 $A$의 고윳값이고, (4)에 의해 모든 고윳값 $\mu$는 $\inf \mathcal{R}_A \le \mu \le \sup \mathcal{R}_A$이다.

(i) $A$가 양의 정부호이고 $\lambda$가 고윳값이면 그 고유벡터 $v$에서 (가)에 의해 $0 < \lambda\langle v, v \rangle$이고 $0 < \langle v, v \rangle$이므로, (K9)와 순서의 성질 (6)의 (iv)에 의해 $0 < \lambda$이다. 모든 고윳값이 양수이면 고윳값 $\inf \mathcal{R}_A$도 양수이다. $0 < \inf \mathcal{R}_A$이면 $x \ne 0$에서 (W4)에 의해 $0 < (\inf \mathcal{R}_A)\langle x, x \rangle$이고 (나)와 순서의 성질 (1)의 (v)에 의해 $0 < q_A(x)$이다.

(ii) (i)의 논법에서 $<$를 $\le$로 바꾼다. 고유벡터에서 $0 \le \lambda\langle v, v \rangle$이면 순서의 성질 (6)의 (iv)에 의해 $0 \le \lambda$이고, $0 \le \inf \mathcal{R}_A$이면 순서의 성질 (4)의 (iv)에 의해 모든 $x$에서 $0 \le (\inf \mathcal{R}_A)\langle x, x \rangle \le q_A(x)$이다.

(iii), (iv) $A$가 음의 정부호이면 고유벡터에서 $\lambda\langle v, v \rangle < 0$이므로 순서의 성질 (6)의 (iv)에 의해 $\lambda < 0$이다. 모든 고윳값이 음수이면 고윳값 $\sup \mathcal{R}_A$도 음수이다. $\sup \mathcal{R}_A < 0$이면 $x \ne 0$에서 순서의 성질 (4)의 (iv)의 둘째 문장과 (K1)에 의해 $(\sup \mathcal{R}_A)\langle x, x \rangle < 0$이고 (나)에 의해 $q_A(x) < 0$이다. (iv)는 같은 논법에서 $<$를 $\le$로 바꾸고 순서의 성질 (4)의 (iv)의 넷째 문장을 쓴다.

(v) $A$가 부정부호이면 $0 < q_A(x_1)$인 $x_1$이 있고, $q_A(0) = 0$이므로 $x_1 \ne 0$이다. (나)에 의해 $0 < (\sup \mathcal{R}_A)\langle x_1, x_1 \rangle$이고 순서의 성질 (6)의 (iv)에 의해 $0 < \sup \mathcal{R}_A$이다. 같은 방법으로 $q_A(x_2) < 0$인 $x_2$에서 $\inf \mathcal{R}_A < 0$이다. $\inf \mathcal{R}_A < 0 < \sup \mathcal{R}_A$이면 이 두 수가 각각 음수인 고윳값과 양수인 고윳값이다. $A$가 양수인 고윳값 $\lambda$와 음수인 고윳값 $\mu$를 가지면, 그 고유벡터 $v$, $w$에서 (가)와 (W4), 순서의 성질 (4)의 (iv)에 의해 $0 < q_A(v)$이고 $q_A(w) < 0$이므로 $A$는 부정부호이다.

**(4).** [[inverse-matrix-properties|역행렬의 성질]]의 (4)에 의해 $S^T$는 가역이다. 이차형식의 (5)를 $m = n$과 행렬 $S^T$에 쓰고 [[transpose|전치행렬]]의 (1)의 $(S^T)^T = S$를 쓰면 $q_D(S^T x) = q_{S D S^T}(x) = q_A(x)$이고, 이차형식의 (6)에 의해 $q_D(y) = d_1 y_1^2 + \cdots + d_n y_n^2$이다. 다음 두 사실을 쓴다.

- (다) $x \ne 0$이면 $y = S^T x \ne 0$이다. $y = 0$이면 [[matrix-product|행렬의 곱]]의 (1)과 행렬과 벡터의 곱의 (2), (3)에 의해 $x = ((S^T)^{-1} S^T)x = (S^T)^{-1} y = 0$이기 때문이다.
- (라) 각 $k$에서 $z = (S^T)^{-1} e_k$로 두면 같은 계산으로 $S^T z = e_k$이고, $e_k \ne 0$이므로 $z \ne 0$이며($S^T 0 = 0$), 이차형식의 (6)에 의해 $q_A(z) = q_D(e_k) = d_k$이다.

(i) $A$가 양의 정부호이면 (라)에 의해 $d_k = q_A(z) > 0$이다. 거꾸로 모든 $d_k$가 양수라 하고 $x \ne 0$이라 하자. (다)에 의해 $y \ne 0$이므로 [[real-function-space|실숫값 함수의 공간]]의 $\mathbb{R}^n$의 같음에 의해 $y_j \ne 0$인 $j$가 있다. 순서의 성질 (5)의 (iii), (i)과 (4)의 (iv), (W4)에 의해 모든 $k$에서 $0 \le d_k y_k^2$이고 $0 < d_j y_j^2$이다. [[geometric-at-most-algebraic|기하적 중복도는 대수적 중복도 이하]]의 (1)을 모든 항이 $0$인 열(합은 (H5)에 의해 $0$)과 이 열에 쓰면 $0 \le q_D(y)$이고, $q_D(y) = 0$이면 같은 (1)에 의해 모든 항이 $0$이어서 $d_j y_j^2 = 0$이 되어 순서의 성질 (1)의 (i)에 어긋난다. 따라서 $0 < q_D(y) = q_A(x)$이다.

(ii) $A$가 양의 준정부호이면 (라)에 의해 $d_k = q_A(z) \ge 0$이다. 거꾸로 모든 $d_k \ge 0$이면 모든 항 $d_k y_k^2$이 $0$ 이상이므로 같은 (1)에 의해 $0 \le q_A(x)$이다.

(iii), (iv) [[matrix|행렬]]의 (1)과 (K9)에 의해 $(-1)D$는 대각성분이 $-d_k$이고 나머지 성분이 $0$인 행렬, 곧 $\operatorname{diag}(-d_1, \dots, -d_n)$이다. [[matrix-product-properties|행렬 곱의 성질]]의 (3)과 (B5)에 의해 $-A = S((-1)D)S^T$이다. (2)의 (ii)와 위의 (i), (ii)를 $-A$에 쓰면 $A$가 음의 정부호인 것은 정확히 모든 $k$에서 $0 < -d_k$일 때, 곧 순서의 성질 (3)의 (ii)에 의해 $d_k < 0$일 때이고, 음의 준정부호도 순서의 성질 (3)의 (iii)으로 같다.

(v) (2)의 (iii)과 (i), (iv)에 의해 $A$가 부정부호인 것은 정확히 "모든 $k$에서 $0 \le d_k$"도 "모든 $k$에서 $d_k \le 0$"도 성립하지 않을 때이고, 순서의 성질 (1)의 (iii)에 의해 이것은 $d_k < 0$인 $k$와 $0 < d_j$인 $j$가 있다는 것이다.

마지막 문장: 실스펙트럼 정리의 (3)의 $Q$는 직교행렬이므로 [[orthogonal-matrix|직교행렬]]의 (2)의 (다)에 의해 가역이다. $S = I_n$이면 [[inverse-matrix-properties|역행렬의 성질]]의 (1)에 의해 가역이고, 전치행렬의 (3)과 행렬 곱의 성질의 (4)에 의해 $I_n D I_n^T = D$이다.

**(5).** 첫 문장은 정의를 풀어 쓴 것이다. (i)과 (ii)는 ⟨Bx, x⟩ ≥ 0 인 대칭행렬의 코시–슈바르츠 부등식의 (1), (2)를 $B = A$에 쓴 것이다. (iii) [[determinant-and-invertibility|행렬식과 가역성]]의 (1)에 의해 가역인 것은 정확히 $\det A \ne 0$일 때이다. $A$가 양의 정부호이고 $Ax = 0$이면 $q_A(x) = \langle 0, x \rangle = 0$이므로(내적의 (2)) $x = 0$이다. 따라서 같은 항목의 (3)의 (b)가 성립하지 않으므로 $\det A \ne 0$이다. 거꾸로 $A$가 가역이고 $x \ne 0$이라 하자. $q_A(x) = 0$이면 (ii)에 의해 $Ax = 0$이고 $x = (A^{-1}A)x = A^{-1}(Ax) = A^{-1}0 = 0$이 되어 어긋나므로 $q_A(x) \ne 0$이다. $0 \le q_A(x)$이므로 $0 < q_A(x)$이다.

**(6).** 직교행렬의 (2)의 (다)에 의해 $Q$는 가역이고 $Q^T = Q^{-1}$이다. 역행렬의 성질의 (2)에 의해 $P = Q^{-1}$은 가역이고 $P^{-1} = Q$이므로 $A = P^{-1} D P$이다. [[determinant-of-product|곱의 행렬식]]의 (3)에 의해 $\det A = \det D$이고, [[determinant-of-triangular-matrix|삼각행렬의 행렬식]]의 (5)에 의해 $\det D = \lambda_1 \cdots \lambda_n$이다. [[trace-of-product|곱의 대각합]]의 (3)에 의해 $\operatorname{tr} A = \operatorname{tr}(Q D Q^{-1}) = \operatorname{tr} D$이고, [[diagonalizable|대각화 가능]]의 (1)에 의해 $D$의 대각성분은 $\lambda_1, \dots, \lambda_n$이므로 대각합의 정의에 의해 $\operatorname{tr} D = \lambda_1 + \cdots + \lambda_n$이다.

(i) 실스펙트럼 정리의 (3)에 의해 이런 $Q$, $D$가 있고, 모든 $\lambda_k$는 $A$의 고윳값이다. $A$가 양의 정부호이면 (3)의 (i)에 의해 모든 $\lambda_k$가 양수이므로 (1)의 (i)에 의해 $0 < \det A$이고, (5)의 (iii)에 의해 $A$는 가역이다. 양의 준정부호이면 (3)의 (ii)와 (1)의 (ii)에 의해 $0 \le \det A$이다.

(ii) $A$가 음의 정부호이면 (2)의 (ii)에 의해 $-A$는 양의 정부호이므로 (i)에 의해 $0 < \det(-A)$이고, 곱의 행렬식의 (4)에 의해 $\det(-A) = (-1)^n \det A$이다. $\det A = 0$이면 (K9)에 의해 $(-1)^n \det A = 0$이 되어 어긋나므로 $\det A \ne 0$이고, 행렬식과 가역성의 (1)에 의해 $A$는 가역이다. 음의 준정부호도 같다.

**(7).** 이차형식의 (1)에 의해 $L_B$는 쌍선형 형식이므로 내적의 조건 (ii)를 만족한다. 이차형식의 (2)에 의해 $L_B$가 내적의 조건 (i)(대칭)을 만족하는 것은 정확히 $B$가 대칭일 때이다. 따라서 $B$가 대칭이 아니면 $L_B$는 내적이 아니다. $B$가 대칭이라 하자. $L_B(x, x) = q_B(x)$이므로 조건 (iii)은 "모든 $x$에서 $0 \le q_B(x)$이고, $q_B(x) = 0$인 것은 정확히 $x = 0$일 때"이다. $B$가 양의 정부호이면 $x \ne 0$에서 $0 < q_B(x)$이고 $q_B(0) = 0$이므로(이차형식의 (3)) 조건 (iii)이 성립한다. 거꾸로 조건 (iii)이 성립하면 $x \ne 0$에서 $0 \le q_B(x)$이고 $q_B(x) \ne 0$이므로 $0 < q_B(x)$이다.

**(8).** $[x]_{\mathcal{B}} = \alpha$, $[y]_{\mathcal{B}} = \beta$라 하자. 기저에 관한 선형사상의 행렬의 (1)에 의해 $x = \alpha_1 b_1 + \cdots + \alpha_n b_n$, $y = \beta_1 b_1 + \cdots + \beta_n b_n$이다. 각 $j, k \in \{1, \dots, n\}$에 대하여 $t_{j,k} = (\alpha_k \beta_j)\langle b_k, b_j \rangle$로 두자.

(ii) 내적의 (3)의 (ii)에 의해 $\langle x, y \rangle = s_1 + \cdots + s_n$이고 $s_k = (\alpha_k \beta_1)\langle b_k, b_1 \rangle + \cdots + (\alpha_k \beta_n)\langle b_k, b_n \rangle = t_{1,k} + \cdots + t_{n,k}$이다. 한편 표준내적의 정의와 행렬과 벡터의 곱의 (1)에 의해 $\langle G\alpha, \beta \rangle$는 $j$번째 항이 $(g_{j,1}\alpha_1 + \cdots + g_{j,n}\alpha_n)\beta_j$인 열의 합이고, (K1), (H4)(실수에 쓴 것), (K2)에 의해 이 항은 $t_{j,1} + \cdots + t_{j,n}$이다. [[double-sum-interchange|이중 합의 순서 바꾸기]]의 (2)에 의해 두 이중 합은 같으므로 $\langle x, y \rangle = \langle G\alpha, \beta \rangle$이다.

(i) 내적의 조건 (i)에 의해 $g_{k,j} = \langle b_j, b_k \rangle = \langle b_k, b_j \rangle = g_{j,k}$이므로 전치행렬의 정의와 행렬의 (2)에 의해 $G^T = G$이다. $\alpha \in \mathbb{R}^n$이고 $\alpha \ne 0$이라 하자. $x = \alpha_1 b_1 + \cdots + \alpha_n b_n$이면 기저에 관한 선형사상의 행렬의 (1)에 의해 $[x]_{\mathcal{B}} = \alpha$이고, 같은 (1)의 "$[x]_{\mathcal{B}} = 0$인 것은 정확히 $x = 0_V$일 때"에 의해 $x \ne 0_V$이다. (ii)에 의해 $q_G(\alpha) = \langle G\alpha, \alpha \rangle = \langle x, x \rangle$이고, 내적의 조건 (iii)에 의해 이것은 양수이다.

(iii) 행렬의 (2)와 (6)에 의해 $G = I_n$인 것은 정확히 모든 $j$, $k$에서 $\langle b_k, b_j \rangle$가 $j = k$일 때 $1$이고 $j \ne k$일 때 $0$일 때이다. [[orthogonal-vectors|직교]]의 정의와 [[norm-in-inner-product-space|내적공간의 노름]]의 (4)(단위벡터인 것은 정확히 $\langle u, u \rangle = 1$일 때)에 의해, 이것은 정확히 $\mathcal{B}$가 [[orthonormal-list|정규직교 열]]일 때이다. $\mathcal{B}$는 기저이므로 정규직교 기저의 정의에 의해 이것은 정확히 $\mathcal{B}$가 정규직교 기저일 때이다.

(iv) 표준내적의 (5)에 의해 $M^T M$의 $(j, k)$ 성분은 $\langle \mathbf{m}_j, \mathbf{m}_k \rangle = \langle b_j, b_k \rangle$이고, 내적의 조건 (i)에 의해 이것은 $\langle b_k, b_j \rangle = g_{j,k}$이다. 행렬의 (2)에 의해 $G = M^T M$이다.

**(9).** [[kernel-of-transpose-product|AᵀA 의 핵과 가역성]]의 (1)에 의해 $M^T M$은 대칭이고 모든 $x$에서 $0 \le \langle M^T M x, x \rangle$이므로 양의 준정부호이다. (5)의 (iii)에 의해 $M^T M$이 양의 정부호인 것은 정확히 가역일 때이고, 같은 항목의 (4)에 의해 이것은 정확히 $\operatorname{rank} M = n$일 때, 또 정확히 열들이 일차독립일 때이다. 같은 (4)에 의해 $m < n$이면 $M^T M$은 가역이 아니다.

**(10).** (i) 자기수반사상과 대칭행렬의 (5)에 의해 $A$는 대칭이고, [[diagonalizable|대각화 가능]]의 대각행렬의 정의에 의해 $A = \operatorname{diag}(a)$이다. 이차형식의 (6)에 의해 $q_A(x) = a x_1^2$이다. (ii)의 첫 문장에 의해 (4)가 $S = I_1$, $d_1 = a$로 성립하고, 그 (i)–(iv)가 네 판정이다. (4)의 (v)의 $j$와 $k$는 둘 다 $1$이어야 하므로 $0 < a$이고 $a < 0$이 되어 순서의 성질 (1)의 (i)에 어긋난다. 따라서 $A$는 부정부호가 아니다.

(ii) 첫 문장은 (4)의 마지막 문장이다. $cI_n$의 대각성분은 모두 $c$이고 나머지는 $0$이므로 $cI_n = \operatorname{diag}(c, \dots, c)$이다. (4)의 (i), (iii)에 의해 둘째 문장이 나오고, $c = 1$과 $c = -1$로 두면((B5)) 셋째 문장이 나온다.

(iii) 실스펙트럼 정리의 (3)에 의해 $A = QDQ^T$, $D = \operatorname{diag}(\lambda_1, \lambda_2)$인 직교행렬 $Q$가 있다. (6)과 곱의 (1), (H0)에 의해 $\det A = \lambda_1 \lambda_2$이고 $\operatorname{tr} A = \lambda_1 + \lambda_2$이다. (4)를 $S = Q$에 쓴다.

양의 정부호: (4)의 (i)에 의해 $A$가 양의 정부호인 것은 정확히 $0 < \lambda_1$이고 $0 < \lambda_2$일 때이다. 그러면 (W4)에 의해 $0 < \lambda_1 \lambda_2$이고 순서의 성질 (2)의 (iv)와 (K4)에 의해 $0 < \lambda_1 + \lambda_2$이다. 거꾸로 $0 < \lambda_1 \lambda_2$이면 순서의 성질 (6)의 (iii)에 의해 두 수가 모두 양수이거나 모두 음수이다. 모두 음수이면 순서의 성질 (2)의 (iv)에 의해 $\lambda_1 + \lambda_2 < 0$이어서 $0 < \operatorname{tr} A$에 어긋나므로, 두 수는 모두 양수이다.

음의 정부호: 곱의 행렬식의 (4)와 실수의 거듭제곱의 (5)에 의해 $\det(-A) = (-1)^2 \det A = \det A$이고, 행렬의 (1)과 대각합의 정의, (H0)과 (K12)의 (iv)에 의해 $\operatorname{tr}(-A) = (-a_{1,1}) + (-a_{2,2}) = -\operatorname{tr} A$이다. (2)의 (ii)와 앞 문단을 $-A$에 쓰면 $A$가 음의 정부호인 것은 정확히 $0 < \det A$이고 $0 < -\operatorname{tr} A$, 곧 $\operatorname{tr} A < 0$일 때이다(순서의 성질 (3)의 (ii)).

부정부호: $A$가 부정부호이면 (4)의 (v)에 의해 $0 < \lambda_j$인 $j$와 $\lambda_k < 0$인 $k$가 있고, 순서의 성질 (1)의 (i)에 의해 $j \ne k$이므로 $\{j, k\} = \{1, 2\}$이다. 순서의 성질 (4)의 (iv)의 둘째 문장과 (K1)에 의해 $\lambda_1 \lambda_2 < 0$이다. 거꾸로 $\lambda_1 \lambda_2 < 0$이면 (K9)에 의해 두 수는 모두 $0$이 아니고, (W1)에 의해 각각 양수이거나 음수이다. 둘이 같은 부호이면 (W4)와 순서의 성질 (4)의 (iv)의 셋째 문장에 의해 곱이 양수가 되어 순서의 성질 (1)의 (i)에 어긋나므로, 하나는 양수이고 하나는 음수이다. (4)의 (v)에 의해 $A$는 부정부호이다. $\blacksquare$
:::

## 예시와 반례

:::example[2 × 2 행렬을 판정하고 완전제곱으로 확인하기]
$$
A = \begin{pmatrix} 2 & -3 \\ -3 & 5 \end{pmatrix}
$$
은 대칭이고 $\det A = 10 - 9 = 1 > 0$, $\operatorname{tr} A = 7 > 0$이므로 (10)의 (iii)에 의해 양의 정부호입니다. 직접 확인하면 이차형식의 (6)에 의해 $q_A(x) = 2x_1^2 - 6x_1 x_2 + 5x_2^2$이고
$$
q_A(x) = 2\Bigl(x_1 - \tfrac{3}{2} x_2\Bigr)^2 + \tfrac{1}{2} x_2^2
$$
입니다(펼치면 $2x_1^2 - 6x_1 x_2 + \tfrac{9}{2} x_2^2 + \tfrac{1}{2} x_2^2$). $x \ne 0$이면 $x_2 \ne 0$이어서 둘째 항이 양수이거나, $x_2 = 0$이고 $x_1 \ne 0$이어서 첫째 항이 $2x_1^2 > 0$이므로 $q_A(x) > 0$입니다. (7)에 의해 $\langle Ax, y \rangle = 2x_1 y_1 - 3x_2 y_1 - 3x_1 y_2 + 5x_2 y_2$는 $\mathbb{R}^2$ 위의 내적입니다.
:::

:::counterexample[대각성분이 모두 양수인 부정부호 행렬]
$$
B = \begin{pmatrix} 2 & 3 \\ 3 & 2 \end{pmatrix}
$$
의 대각성분은 $q_B(e_1) = q_B(e_2) = 2$로 모두 양수입니다. 그러나 $x = (1, -1)$이면 $q_B(x) = 2 - 6 + 2 = -2 < 0$이므로 $B$는 부정부호입니다. 실제로 $\det B = 4 - 9 = -5 < 0$이어서 (10)의 (iii)과도 맞습니다. 대각성분은 표준기저 방향의 값만 알려 주고, 비스듬한 방향의 값은 비대각 성분에 달려 있습니다.
:::

:::counterexample[행렬식이 양수이지만 양의 정부호가 아닌 예]
(6)의 (i)의 거꾸로, 곧 "$0 < \det A$이면 양의 정부호"는 $n = 2$에서 성립하지 않을 수 있습니다. $-I_2$는 $\det(-I_2) = (-1)^2 = 1 > 0$이지만 $q_{-I_2}(x) = -(x_1^2 + x_2^2)$이어서 (10)의 (ii)에 의해 음의 정부호입니다. $n = 2$에서는 $\det A > 0$에 $\operatorname{tr} A > 0$을 더하면 양의 정부호와 같은 조건이 됩니다((10)의 (iii)). $n = 1$이면 $\det A = a_{1,1}$이어서 (10)의 (i)에 의해 거꾸로도 성립합니다.
:::

:::example[열이 일차종속인 행렬의 MᵀM]
$$
M = \begin{pmatrix} 1 & -1 \\ 2 & -2 \\ 0 & 0 \end{pmatrix}
$$
이면 표준내적의 (5)에 의해
$$
M^T M = \begin{pmatrix} 5 & -5 \\ -5 & 5 \end{pmatrix}
$$
입니다. 두 열은 $\mathbf{m}_2 = -\mathbf{m}_1$이어서 일차종속이므로, (9)에 의해 $M^T M$은 양의 준정부호이지만 양의 정부호가 아닙니다. 실제로 $q_{M^T M}(x) = 5x_1^2 - 10x_1 x_2 + 5x_2^2 = 5(x_1 - x_2)^2 = \lVert Mx \rVert^2$이고 $x = (1, 1)$에서 $0$입니다. $\det(M^T M) = 25 - 25 = 0$이어서 (5)의 (iii)과도 맞습니다.
:::

:::remark[대칭이 아닌 행렬과 가중치를 곱한 합]
다섯 낱말은 대칭행렬에만 정의했습니다. 대칭이 아닌 $C$에 대해서는 이차형식의 (4)의 (i)에 의해 $q_C = q_{2^{-1}(C + C^T)}$이므로, $q_C$의 부호는 대칭행렬 $2^{-1}(C + C^T)$의 판정으로 알 수 있습니다. 대각행렬 $D = \operatorname{diag}(w_1, \dots, w_n)$이면 $\langle Dx, y \rangle = w_1 x_1 y_1 + \cdots + w_n x_n y_n$은 [[inner-product-examples|내적의 예]]의 (1)의 가중치를 곱한 합 $\langle x, y \rangle_w$이고, 그 (1)의 (iii)의 "내적인 것은 정확히 모든 $w_k$가 양수일 때"는 (7)과 (10)의 (ii)를 합친 것과 같은 결론입니다.
:::

## 확인 질문

:::check[$A$가 양의 정부호이면 $A^{-1}$도 양의 정부호인가?]
그렇습니다. (6)의 (i)에 의해 $A$는 가역이고, [[inverse-matrix-properties|역행렬의 성질]]의 (4)에 의해 $(A^{-1})^T = (A^T)^{-1} = A^{-1}$이어서 $A^{-1}$은 대칭입니다. $x \ne 0$이고 $z = A^{-1}x$라 하면 $Az = x$이므로 $z \ne 0$이고, 대칭성과 내적의 대칭에 의해 $q_{A^{-1}}(x) = \langle z, Az \rangle = \langle Az, z \rangle = q_A(z) > 0$입니다.
:::

:::check[$\mathbb{R}^2$의 기저 $b_1 = (1, 0)$, $b_2 = (1, 1)$의 그람 행렬은 무엇이고, 좌표로 내적을 어떻게 계산하는가?]
$\langle b_1, b_1 \rangle = 1$, $\langle b_1, b_2 \rangle = \langle b_2, b_1 \rangle = 1$, $\langle b_2, b_2 \rangle = 2$이므로 $G = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$입니다. $\det G = 1 > 0$, $\operatorname{tr} G = 3 > 0$이어서 (10)의 (iii)에 의해 양의 정부호이고, (8)의 (i)과 맞습니다. $x = \alpha_1 b_1 + \alpha_2 b_2$, $y = \beta_1 b_1 + \beta_2 b_2$이면 (8)의 (ii)에 의해 $\langle x, y \rangle = \alpha_1 \beta_1 + \alpha_1 \beta_2 + \alpha_2 \beta_1 + 2\alpha_2 \beta_2$입니다. 실제로 $x = (\alpha_1 + \alpha_2, \alpha_2)$이므로 $\langle x, y \rangle = (\alpha_1 + \alpha_2)(\beta_1 + \beta_2) + \alpha_2 \beta_2$이고 펼치면 같습니다. $G \ne I_2$이므로 이 기저는 정규직교가 아닙니다.
:::
