---
title: 양의 준정부호 제곱근
title_en: Positive Semidefinite Square Root
aliases: [행렬의 제곱근, 대칭행렬의 제곱근, 양의 제곱근, square root of a matrix, positive square root, positive semidefinite square root]
kind: theorem
field: linear-algebra
msc: ["15A24", "15B48"]
level: undergrad
summary: 양의 준정부호인 대칭행렬 A 에는 대칭이고 양의 준정부호이며 BB = A 인 행렬 B 가 정확히 하나 있고, 이것을 √A 로 쓴다. A = QDQᵀ 로 직교 대각화하면 √A 는 대각성분을 제곱근으로 바꾼 Q diag(√λ₁, …, √λₙ)Qᵀ 이다. 유일성은 A 의 고유벡터에서 √A 가 고윳값의 제곱근을 곱한다는 것으로 보인다. MᵀM 의 제곱근 R 은 모든 x 에서 ‖Rx‖ = ‖Mx‖ 를 만족한다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, square-root-exists, vector-space, vector-space-basic-properties, finite-sum-of-vectors, standard-basis, linear-combination-and-span, basis, linear-map, linear-map-determined-by-basis, kernel-and-range, rank-and-nullity, matrix, matrix-vector-product, matrix-product, matrix-product-properties, transpose, invertible-matrix, rank-of-a-matrix, determinant, trace, eigenvalue-and-eigenvector, diagonalizable, inner-product-space, standard-inner-product, norm-in-inner-product-space, orthonormal-basis, kernel-of-transpose-product, self-adjoint-map, orthogonal-matrix, quadratic-form, change-of-orthonormal-basis, spectral-theorem, positive-definite-matrix]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 6장 3절 Polar and singular value decompositions 의 3.1 Positive definite operators. Square roots. 의 Corollary 3.2 와 그 증명, pp.171–172; 같은 절 3.2 Modulus of an operator. Singular values. 의 첫 단락, Proposition 3.3 과 Corollary 3.4, p.172; 6장 2절 연습문제 2.4, 2.5, 2.6, pp.169–170
    checked: original
    note: "(1)은 출처 6장 3절 Corollary 3.2(p.171: '양의 준정부호 연산자 A 에는 B² = A 인 양의 준정부호 연산자 B 가 꼭 하나 있다')를 실대칭행렬로 옮긴 것이다. 출처는 이 B 를 (positive) square root 라 하고 √A 또는 A^{1/2} 로 쓴다. 이 사이트는 행렬의 거듭제곱 기호를 쓰지 않으므로 B² 대신 BB 로 쓰고, A^{1/2} 는 쓰지 않는다. 존재의 증명은 출처(p.171: A 의 정규직교 고유기저에서 B 의 행렬을 diag(√λ₁, …, √λₙ) 으로 정한다)와 같은 길을 A = QDQᵀ 로 적은 것이 (2)이다. 유일성의 증명에서 출처(p.172)는 C 의 고유기저에서 C 와 A = C² 가 diag(μ_k) 와 diag(μ_k²) 이므로 'A 의 고윳값은 μ_k² 꼴이고, Ax = λx 이면 Cx = √λ x 이다'라고 적고 곧바로 B = C 로 끝낸다. 이 항목은 그 둘째 문장을 (3)의 (i)로 따로 증명한다(같은 λ 가 여러 μ_k² 로 나오는 경우를 C 의 고유기저와의 내적으로 다룬다). (7)의 ‖Rx‖ = ‖Mx‖ 와 Ker T_R = Ker T_M 은 출처 3.2(p.172)의 Proposition 3.3 과 Corollary 3.4 의 첫 등식을 실수 행렬로 옮긴 것이고, 출처는 이 R = √(A*A) 를 연산자의 modulus 라 하고 |A| 로 쓴다. 이 사이트는 그 이름과 기호를 쓰지 않는다(|A| 는 절댓값·원소의 개수와 겹친다). (5)는 출처 6장 2절 연습문제 2.5(p.170: '모든 자기수반행렬은 자기수반인 제곱근을 갖는다'의 참·거짓)의 답을 진술로 둔 것이다. (6)의 (ii)는 출처 4장 2절 연습문제 2.8(p.115)의 힌트 '대각행렬의 제곱근을 찾기는 쉽다'와 같은 내용이다. 예시 '고윳값을 쓰지 않고 제곱근 알아보기'는 출처 연습문제 2.6(p.170: (7 2; 2 4) 를 직교 대각화해 양의 고윳값을 갖는 제곱근을 찾으라)과 같은 종류의 물음(주어진 2 × 2 대칭행렬의 양의 제곱근)을 다른 행렬에서 직교 대각화 없이 답한 것이다. 예시 '가역이 아닌 양의 준정부호 행렬의 제곱근'은 직교 대각화한 뒤 대각성분의 제곱근을 취하는 출처의 존재 증명(p.171)과 연습문제 2.6 과 같은 발상이다. 반례 '양의 준정부호를 빼면 제곱근이 여럿일 수 있는 예'는 출처 연습문제 2.4(p.169: (3 2; 2 3) 의 제곱근을 모두 찾으라)와 4장 2절 연습문제 2.8(p.115: (5 2; −3 0) 의 제곱근을 모두 찾으라)과 같은 발상(제곱근이 여럿이다)이고, 행렬 diag(1, −1) 은 출처 1장 8절(p.33)이 x 축에 대한 대칭(reflection)의 행렬로 드는 것, 1장 3절 3.1 Examples(p.12)의 첫째 좌표축에 대한 반사와 같다. 반례 '대칭인 제곱근이 없는 대칭행렬의 예'의 J 는 출처 5장 6절 연습문제 6.1(p.150)의 둘째 행렬 (0 −1; 1 0) 과 같다. 반례 '대칭인 제곱근이 없는 대칭행렬의 예'는 연습문제 2.5 와 같은 물음이다. 확인 질문 '양의 준정부호 행렬의 제곱근의 성분은 성분의 제곱근인가?'의 행렬 (1 1; 1 1) 은 출처 5장 3절 연습문제 3.9 b)(p.134)의 '모든 성분이 1 인 n × n 행렬'의 n = 2 인 것이다. 확인 질문 '$A$가 양의 준정부호이고 $0 \\le c$이면 $\\sqrt{cA}$는 무엇인가?'는 출처 6장 3절 연습문제 3.7 c)(p.178)가 특잇값에 대해 cA 를 묻는 것과 스칼라배를 묻는다는 점에서 닮았다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(존재 증명의 불변 부분공간 단계 통독). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$n$이 자연수이고 $\mathbb{R}^n$에는 [[standard-inner-product|표준내적]]을 준다. 대칭행렬은 [[self-adjoint-map|자기수반사상과 대칭행렬]]의 것, 양의 정부호와 양의 준정부호는 [[positive-definite-matrix|양의 정부호 행렬]]의 것, 직교행렬은 [[orthogonal-matrix|직교행렬]]의 것, $\operatorname{diag}$는 [[diagonalizable|대각화 가능]]의 것, 고윳값과 고유벡터는 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 것이고, 음이 아닌 실수 $a$의 제곱근 $\sqrt{a}$는 [[square-root-exists|제곱근의 존재]]의 것이다. $T_B$는 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)의 선형사상이고, 노름은 [[norm-in-inner-product-space|내적공간의 노름]]의 것이다. 행렬의 거듭제곱 기호는 쓰지 않고, 행렬 $B$와 $B$의 곱을 $BB$로 쓴다. 아래에서 $A$는 $n \times n$ 대칭행렬이다.

1. (존재와 유일성) $A$가 양의 준정부호이면, 대칭행렬이고 양의 준정부호이며 $BB = A$인 $n \times n$ 행렬 $B$가 정확히 하나 있다. 이 $B$를 $A$의 **양의 준정부호 제곱근**(positive semidefinite square root)이라 하고 $\sqrt{A}$로 쓴다. 근호는 실수의 제곱근과 같은 글자이지만 여기서는 행렬이며, $n = 1$에서 두 뜻이 맞는다는 것은 (6)의 (i)이다.

   아래 (2)–(4)에서는 $A$가 양의 준정부호이다.
2. (만드는 법) $Q$가 $n \times n$ 직교행렬이고 $\lambda_1, \dots, \lambda_n$이 길이 $n$인 실수의 열이며 $A = Q \operatorname{diag}(\lambda_1, \dots, \lambda_n) Q^T$이면, 모든 $k$에서 $0 \le \lambda_k$이고
   $$
   \begin{aligned}
   \sqrt{A} &= Q E Q^T, \\
   E &= \operatorname{diag}(\sqrt{\lambda_1}, \dots, \sqrt{\lambda_n})
   \end{aligned}
   $$
   이다. [[spectral-theorem|실스펙트럼 정리]]의 (3)에 의해 이런 $Q$와 $\lambda_1, \dots, \lambda_n$이 있다.
3. (고유벡터와 핵)
   - (i) $\lambda$가 $0 \le \lambda$인 실수이고 $x \in \mathbb{R}^n$이 $Ax = \lambda x$를 만족하면 $\sqrt{A}\,x = \sqrt{\lambda}\,x$이다. 특히 $A$의 모든 고윳값 $\lambda$는 $0 \le \lambda$이고, $\lambda$에 속하는 $A$의 고유벡터는 $\sqrt{\lambda}$에 속하는 $\sqrt{A}$의 고유벡터이다.
   - (ii) 실수 $\mu$와 $x \in \mathbb{R}^n$에 대하여, $x$가 $\mu$에 속하는 $\sqrt{A}$의 고유벡터이면 $0 \le \mu$이고 $x$는 $\mu\mu$에 속하는 $A$의 고유벡터이다. 따라서 실수 $\mu$가 $\sqrt{A}$의 고윳값인 것은 정확히 $0 \le \mu$이고 $\mu\mu$가 $A$의 고윳값일 때이다.
   - (iii) [[kernel-and-range|핵]]에 대하여 $\operatorname{Ker} T_{\sqrt{A}} = \operatorname{Ker} T_A$이다.
   - (iv) $A \sqrt{A} = \sqrt{A}\, A$이다.
4. (양의 정부호) $\sqrt{A}$가 양의 정부호인 것은 정확히 $A$가 양의 정부호일 때이다. 이때 $\sqrt{A}$는 [[invertible-matrix|가역]]이다.
5. (대칭인 제곱근이 있을 조건) $BB = A$인 $n \times n$ 대칭행렬 $B$가 있는 것은 정확히 $A$가 양의 준정부호일 때이다.
6. (작은 경우)
   - (i) $n = 1$이고 $A = \begin{pmatrix} a \end{pmatrix}$이면, $A$가 양의 준정부호인 것은 정확히 $0 \le a$일 때이고, 그때 $\sqrt{A} = \begin{pmatrix} \sqrt{a} \end{pmatrix}$이다.
   - (ii) $d_1, \dots, d_n$이 모든 $k$에서 $0 \le d_k$인 실수의 열이면 $\operatorname{diag}(d_1, \dots, d_n)$은 대칭행렬이고 양의 준정부호이며 $\sqrt{\operatorname{diag}(d_1, \dots, d_n)} = \operatorname{diag}(\sqrt{d_1}, \dots, \sqrt{d_n})$이다. 특히 $n \times n$ 영행렬 $O$에 대하여 $\sqrt{O} = O$이고, $\sqrt{I_n} = I_n$이며, $0 \le c$인 실수 $c$에 대하여 $\sqrt{cI_n} = \sqrt{c}\, I_n$이다.
7. ($M^T M$의 제곱근) $m$이 자연수이고 $M$이 $m \times n$ 행렬이라 하자. [[positive-definite-matrix|양의 정부호 행렬]]의 (9)에 의해 $M^T M$은 대칭행렬이고 양의 준정부호이다. $R = \sqrt{M^T M}$이라 하면 모든 $x \in \mathbb{R}^n$에서 $\lVert Rx \rVert = \lVert Mx \rVert$이고, $\operatorname{Ker} T_R = \operatorname{Ker} T_M$이며, [[rank-of-a-matrix|계수]]에 대하여 $\operatorname{rank} R = \operatorname{rank} M$이다.
:::

:::english
Let $n$ be a natural number and give $\mathbb{R}^n$ the standard inner product. Symmetric matrices are those of the entry on self-adjoint maps and symmetric matrices, positive definiteness and positive semidefiniteness are those of the entry on positive definite matrices, orthogonal matrices are those of the entry on orthogonal matrices, $\operatorname{diag}$ is that of the entry on diagonalizability, eigenvalues and eigenvectors are those of the entry on eigenvalues and eigenvectors, and the square root $\sqrt{a}$ of a nonnegative real number $a$ is that of the entry on the existence of square roots. $T_B$ is the linear map of item (2) of the entry on the product of a matrix and a vector, and the norm is that of the entry on the norm in an inner product space. We do not use a power notation for matrices and write the product of a matrix $B$ with $B$ as $BB$. Below, $A$ is an $n \times n$ symmetric matrix.

1. (Existence and uniqueness) If $A$ is positive semidefinite, then there is exactly one $n \times n$ matrix $B$ that is symmetric and positive semidefinite with $BB = A$. This $B$ is called the **positive semidefinite square root** of $A$ and is written $\sqrt{A}$. The radical sign is the same symbol as for the square root of a real number, but here it is a matrix; that the two meanings agree when $n = 1$ is (6)(i).

   In (2)–(4) below, $A$ is positive semidefinite.
2. (Construction) If $Q$ is an $n \times n$ orthogonal matrix, $\lambda_1, \dots, \lambda_n$ is a sequence of real numbers of length $n$, and $A = Q \operatorname{diag}(\lambda_1, \dots, \lambda_n) Q^T$, then $0 \le \lambda_k$ for every $k$ and
   $$
   \begin{aligned}
   \sqrt{A} &= Q E Q^T, \\
   E &= \operatorname{diag}(\sqrt{\lambda_1}, \dots, \sqrt{\lambda_n}).
   \end{aligned}
   $$
   By (3) of the real spectral theorem such $Q$ and $\lambda_1, \dots, \lambda_n$ exist.
3. (Eigenvectors and kernel)
   - (i) If $\lambda$ is a real number with $0 \le \lambda$ and $x \in \mathbb{R}^n$ satisfies $Ax = \lambda x$, then $\sqrt{A}\,x = \sqrt{\lambda}\,x$. In particular every eigenvalue $\lambda$ of $A$ satisfies $0 \le \lambda$, and an eigenvector of $A$ belonging to $\lambda$ is an eigenvector of $\sqrt{A}$ belonging to $\sqrt{\lambda}$.
   - (ii) For a real number $\mu$ and $x \in \mathbb{R}^n$, if $x$ is an eigenvector of $\sqrt{A}$ belonging to $\mu$, then $0 \le \mu$ and $x$ is an eigenvector of $A$ belonging to $\mu\mu$. Hence a real number $\mu$ is an eigenvalue of $\sqrt{A}$ exactly when $0 \le \mu$ and $\mu\mu$ is an eigenvalue of $A$.
   - (iii) For kernels, $\operatorname{Ker} T_{\sqrt{A}} = \operatorname{Ker} T_A$.
   - (iv) $A \sqrt{A} = \sqrt{A}\, A$.
4. (Positive definiteness) $\sqrt{A}$ is positive definite exactly when $A$ is positive definite. In that case $\sqrt{A}$ is invertible.
5. (When a symmetric square root exists) There is an $n \times n$ symmetric matrix $B$ with $BB = A$ exactly when $A$ is positive semidefinite.
6. (Small cases)
   - (i) If $n = 1$ and $A = \begin{pmatrix} a \end{pmatrix}$, then $A$ is positive semidefinite exactly when $0 \le a$, and in that case $\sqrt{A} = \begin{pmatrix} \sqrt{a} \end{pmatrix}$.
   - (ii) If $d_1, \dots, d_n$ is a sequence of real numbers with $0 \le d_k$ for every $k$, then $\operatorname{diag}(d_1, \dots, d_n)$ is symmetric and positive semidefinite and $\sqrt{\operatorname{diag}(d_1, \dots, d_n)} = \operatorname{diag}(\sqrt{d_1}, \dots, \sqrt{d_n})$. In particular, for the $n \times n$ zero matrix $O$ we have $\sqrt{O} = O$, also $\sqrt{I_n} = I_n$, and for a real number $c$ with $0 \le c$ we have $\sqrt{cI_n} = \sqrt{c}\, I_n$.
7. (The square root of $M^T M$) Let $m$ be a natural number and $M$ an $m \times n$ matrix. By (9) of the entry on positive definite matrices, $M^T M$ is symmetric and positive semidefinite. If $R = \sqrt{M^T M}$, then $\lVert Rx \rVert = \lVert Mx \rVert$ for every $x \in \mathbb{R}^n$, $\operatorname{Ker} T_R = \operatorname{Ker} T_M$, and for ranks $\operatorname{rank} R = \operatorname{rank} M$.
:::

## 직관

음이 아닌 실수 $a$에는 제곱해서 $a$가 되는 음이 아닌 수가 하나뿐입니다. 이 항목은 같은 일을 대칭행렬에서 합니다. 실수 자리에 오는 것이 양의 준정부호 행렬이고, "음이 아닌 수"라는 조건 자리에 오는 것도 "양의 준정부호"입니다.

$A = QDQ^T$로 직교 대각화하면 $A$는 $Q$의 열들, 곧 서로 수직인 방향마다 길이를 $\lambda_k$배 하는 일을 합니다. 이 일을 같은 방향들로 두 번에 나누어 하려면 방향마다 $\sqrt{\lambda_k}$배씩 하면 됩니다. 비유하면 한 번에 $\lambda$배로 크기를 바꾸는 복사 대신 $\sqrt{\lambda}$배로 바꾸는 복사를 두 번 하는 것입니다. 비유가 정의와 맞는 곳은 "두 번"이 $BB = A$에, "같은 방향들로"가 (3)의 (i), 곧 $A$의 고유벡터가 $\sqrt{A}$의 고유벡터라는 것에, "크기만 바꾸고 뒤집지 않는다"가 $\sqrt{A}$의 양의 준정부호, 곧 고윳값이 $0$ 이상이라는 것에 해당한다는 점입니다. 비유와 달리 $\lambda_k = 0$인 방향은 $0$으로 눌립니다.

유일성에서 두 조건이 쓰이는 곳은 다릅니다. $B$가 대칭이라는 것은 증명에서 $B$의 고유벡터로 된 정규직교 기저를 잡는 데와 $\langle Bx, y \rangle = \langle x, By \rangle$를 쓰는 데 쓰입니다. $B$가 양의 준정부호라는 것은 $\mu\mu = \lambda$인 $\mu$ 가운데 $-\sqrt{\lambda}$가 아니라 $\sqrt{\lambda}$를 고르게 합니다. 이 조건을 빼면 $BB = I_2$인 대칭행렬이 여럿 있습니다(아래 반례).

## 증명

:::idea
존재는 $A = QDQ^T$의 대각성분에 실수의 제곱근을 취해 만든다. 유일성은 조건을 만족하는 행렬 $C$마다 "$Ax = \lambda x$이면 $Cx = \sqrt{\lambda}\,x$"임을 $C$의 정규직교 고유기저와의 내적으로 보이고, 그것을 $A$의 고유벡터로 된 기저에 써서 두 행렬이 기저에서 같은 값을 낸다는 것으로 끝낸다.
:::

:::hint
$C$가 대칭이고 $C\mathbf{p}_k = \mu_k \mathbf{p}_k$이면 $\langle CCx, \mathbf{p}_k \rangle$를 두 번 옮겨 $\mu_k \mu_k \langle x, \mathbf{p}_k \rangle$로 쓸 수 있습니다. 이것을 $\langle \lambda x, \mathbf{p}_k \rangle$와 비교해 보십시오.
:::

:::hint
$\mu_k \mu_k = \lambda$이고 $0 \le \mu_k$이면 제곱근의 유일성에 의해 $\mu_k = \sqrt{\lambda}$입니다. $\langle x, \mathbf{p}_k \rangle = 0$인 자리에서는 $\mu_k$가 무엇이든 $\mu_k \langle x, \mathbf{p}_k \rangle = \sqrt{\lambda}\langle x, \mathbf{p}_k \rangle$입니다.
:::

:::proof
아래에서 (K…)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것, (W1)–(W4)는 [[real-order-axioms|실수의 순서]]의 것, "순서 성질"은 [[order-properties-of-reals|실수의 순서 성질]]의 번호, "제곱근"은 [[square-root-exists|제곱근의 존재]]의 번호, "양의 정부호"는 [[positive-definite-matrix|양의 정부호 행렬]]의 번호이다. 내적의 조건 (i)–(iii)과 내적의 번호는 [[inner-product-space|내적과 내적공간]]의 것이다. 대칭행렬 $C$에 대하여 [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (2)에 의해 모든 $y, z \in \mathbb{R}^n$에서 $\langle Cy, z \rangle = \langle y, Cz \rangle$이고, 이것을 "(대칭)"이라 부른다. 행렬의 곱의 결합법칙과 단위행렬은 [[matrix-product-properties|행렬의 곱의 성질]]의 (1)과 (4)이고, [[matrix-product|행렬의 곱]]의 (1)에 의해 $(BC)x = B(Cx)$이다.

**보조 사실 (가).** $Q$가 $n \times n$ 직교행렬이고 $\lambda_1, \dots, \lambda_n$이 모든 $k$에서 $0 \le \lambda_k$인 실수의 열이며 $A = QDQ^T$, $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$이라 하자. 제곱근 (1)에 의해 각 $\sqrt{\lambda_k}$가 정해지므로 $E = \operatorname{diag}(\sqrt{\lambda_1}, \dots, \sqrt{\lambda_n})$과 $B = QEQ^T$가 정해진다. 그러면 $B$는 대칭행렬이고 양의 준정부호이며 $BB = A$이다.

증명: [[change-of-orthonormal-basis|정규직교 기저의 변환과 직교 닮음]]의 정의에 의해 $B$는 직교 대각화 가능하고, 같은 항목의 (5)에 의해 대칭행렬이다. [[orthogonal-matrix|직교행렬]]의 (2)의 (다)에 의해 $Q$는 가역이고, 모든 $k$에서 제곱근 (1)에 의해 $0 \le \sqrt{\lambda_k}$이므로 양의 정부호 (4)의 (ii)를 $S = Q$와 대각행렬 $E$로 쓰면 $B$는 양의 준정부호이다. 직교행렬의 정의에 의해 $Q^T Q = I_n$이므로 결합법칙과 단위행렬의 성질에 의해
$$
\begin{aligned}
BB &= (QEQ^T)(QEQ^T) \\
&= QE(Q^T Q)EQ^T \\
&= Q(EE)Q^T
\end{aligned}
$$
이다. [[diagonalizable|대각화 가능]]의 (3)과 제곱근 (1)에 의해 $EE = \operatorname{diag}(\sqrt{\lambda_1}\sqrt{\lambda_1}, \dots, \sqrt{\lambda_n}\sqrt{\lambda_n}) = \operatorname{diag}(\lambda_1, \dots, \lambda_n) = D$이므로 $BB = QDQ^T = A$이다.

**보조 사실 (나).** $A$가 $n \times n$ 행렬이고 $C$가 $n \times n$ 대칭행렬이며 양의 준정부호이고 $CC = A$라 하자. $\lambda$가 $0 \le \lambda$인 실수이고 $x \in \mathbb{R}^n$이 $Ax = \lambda x$를 만족하면 $Cx = \sqrt{\lambda}\,x$이다.

증명: $C$는 대칭이므로 [[spectral-theorem|실스펙트럼 정리]]의 (3)에 의해 $C = PMP^T$인 직교행렬 $P$와 대각행렬 $M$이 있고, 대각화 가능의 (1)에 의해 $M = \operatorname{diag}(\mu_1, \dots, \mu_n)$ ($\mu_k = m_{k,k}$)이다. 같은 (3)의 마지막 단락에 의해 $P$의 열 $\mathbf{p}_1, \dots, \mathbf{p}_n$은 $\mathbb{R}^n$의 정규직교 기저이고 모든 $k$에서 $C\mathbf{p}_k = \mu_k \mathbf{p}_k$이다. $C$가 양의 준정부호이므로 양의 정부호 (4)의 (ii)를 $S = P$로 쓰면 모든 $k$에서 $0 \le \mu_k$이다.

$k \in \{1, \dots, n\}$을 잡고 $c_k = \langle x, \mathbf{p}_k \rangle$로 두자. (대칭)을 두 번 쓰고 내적의 (1)을 쓰면
$$
\begin{aligned}
\langle Ax, \mathbf{p}_k \rangle &= \langle C(Cx), \mathbf{p}_k \rangle \\
&= \langle Cx, C\mathbf{p}_k \rangle \\
&= \mu_k \langle Cx, \mathbf{p}_k \rangle \\
&= \mu_k \langle x, C\mathbf{p}_k \rangle \\
&= \mu_k \mu_k c_k
\end{aligned}
$$
이다(마지막 등호는 내적의 (1)과 (K2)). 한편 $Ax = \lambda x$이므로 내적의 (1)에 의해 $\langle Ax, \mathbf{p}_k \rangle = \lambda c_k$이다. 따라서 $\mu_k \mu_k c_k = \lambda c_k$이고, (K12)의 (v)에 의해 $\mu_k \mu_k c_k - \lambda c_k = 0$이며, (K12)의 (i), (ii)와 (K1)에 의해 이 값은 $(\mu_k \mu_k - \lambda) c_k$이다. [[real-number-arithmetic|(K10)]]에 의해 $c_k = 0$이거나 $\mu_k \mu_k = \lambda$이다. $c_k = 0$이면 (K9)에 의해 $\mu_k c_k = 0 = \sqrt{\lambda}\, c_k$이다. $\mu_k \mu_k = \lambda$이면 $0 \le \mu_k$이므로 제곱근 (1)의 유일성에 의해 $\mu_k = \sqrt{\lambda}$이고, 역시 $\mu_k c_k = \sqrt{\lambda}\, c_k$이다. 어느 경우든 (대칭)과 내적의 (1)에 의해
$$
\begin{aligned}
\langle Cx, \mathbf{p}_k \rangle &= \langle x, C\mathbf{p}_k \rangle = \mu_k c_k \\
&= \sqrt{\lambda}\, c_k = \langle \sqrt{\lambda}\, x, \mathbf{p}_k \rangle
\end{aligned}
$$
이다. 이것이 모든 $k$에서 성립하고 $\mathbf{p}_1, \dots, \mathbf{p}_n$은 기저이므로 [[basis|기저]]의 정의에 의해 $\mathbb{R}^n$을 [[linear-combination-and-span|생성]]한다. 내적의 (6)에 의해 $Cx = \sqrt{\lambda}\, x$이다.

**(1)과 (2).** $A$가 양의 준정부호라 하자. (2)의 꼴 $A = Q\operatorname{diag}(\lambda_1, \dots, \lambda_n)Q^T$가 주어지면, 직교행렬의 (2)의 (다)에 의해 $Q$는 가역이므로 양의 정부호 (4)의 (ii)를 $S = Q$로 쓰면 모든 $k$에서 $0 \le \lambda_k$이다. 실스펙트럼 정리의 (3)에 의해 대칭인 $A$에는 $A = QDQ^T$인 직교행렬 $Q$와 대각행렬 $D$가 있고, 대각화 가능의 (1)에 의해 $D = \operatorname{diag}(d_{1,1}, \dots, d_{n,n})$이므로 (2)의 꼴이 있다. 그 꼴로 보조 사실 (가)의 $B$를 만들면 $B$는 대칭이고 양의 준정부호이며 $BB = A$이다. 따라서 그런 행렬이 있다.

하나뿐임: $B$와 $C$가 모두 대칭행렬이고 양의 준정부호이며 $BB = A$, $CC = A$라 하자. 위의 꼴 $A = Q\operatorname{diag}(\lambda_1, \dots, \lambda_n)Q^T$를 하나 잡으면, 실스펙트럼 정리의 (3)의 마지막 단락에 의해 $Q$의 열 $\mathbf{q}_1, \dots, \mathbf{q}_n$은 $\mathbb{R}^n$의 정규직교 기저이고 모든 $k$에서 $A\mathbf{q}_k = \lambda_k \mathbf{q}_k$이며, 위에서 본 대로 $0 \le \lambda_k$이다. 보조 사실 (나)를 $B$와 $C$에 각각 쓰면 모든 $k$에서 $B\mathbf{q}_k = \sqrt{\lambda_k}\,\mathbf{q}_k = C\mathbf{q}_k$, 곧 $T_B \mathbf{q}_k = T_C \mathbf{q}_k$이다. $\mathbf{q}_1, \dots, \mathbf{q}_n$은 $\mathbb{R}^n$을 생성하므로 [[linear-map-determined-by-basis|기저에서의 값이 정하는 선형사상]]의 (1)에 의해 $T_B = T_C$이고, 행렬과 벡터의 곱의 (5)에 의해 $B = C$이다. 이로써 (1)이 증명되었다.

(2)의 등식: 주어진 꼴로 보조 사실 (가)의 $B = Q\operatorname{diag}(\sqrt{\lambda_1}, \dots, \sqrt{\lambda_n})Q^T$를 만들면 $B$는 (1)의 세 조건을 만족하므로 (1)의 유일성에 의해 $B = \sqrt{A}$이다.

**(3).** (i) 앞의 문장은 보조 사실 (나)를 $C = \sqrt{A}$로 쓴 것이다. $\lambda$가 $A$의 고윳값이면 양의 정부호 (3)의 (ii)에 의해 $0 \le \lambda$이다. $x$가 $\lambda$에 속하는 $A$의 고유벡터이면 $x \ne 0$이고 앞의 문장에 의해 $\sqrt{A}\,x = \sqrt{\lambda}\,x$이므로 $x$는 $\sqrt{\lambda}$에 속하는 $\sqrt{A}$의 고유벡터이다.

(ii) $x$가 $\mu$에 속하는 $\sqrt{A}$의 고유벡터이면 $\mu$는 $\sqrt{A}$의 고윳값이고, $\sqrt{A}$는 대칭이며 양의 준정부호이므로 양의 정부호 (3)의 (ii)에 의해 $0 \le \mu$이다. 행렬과 벡터의 곱의 (2)에 의해
$$
\begin{aligned}
Ax &= (\sqrt{A}\sqrt{A})x = \sqrt{A}(\sqrt{A}\,x) \\
&= \sqrt{A}(\mu x) = \mu(\sqrt{A}\,x) \\
&= \mu(\mu x) = (\mu\mu)x
\end{aligned}
$$
이고(마지막 등호는 [[vector-space|(V6)]]), $x \ne 0$이므로 $x$는 $\mu\mu$에 속하는 $A$의 고유벡터이다. 마지막 문장: $\mu$가 $\sqrt{A}$의 고윳값이면 그에 속하는 고유벡터가 있으므로 방금 보인 것에 의해 $0 \le \mu$이고 $\mu\mu$는 $A$의 고윳값이다. 거꾸로 $0 \le \mu$이고 $\mu\mu$가 $A$의 고윳값이면, 그에 속하는 고유벡터 $x$에 대하여 순서 성질 (5)의 (iii)에 의해 $0 \le \mu\mu$이므로 (i)과 제곱근 (2)의 $\sqrt{\mu\mu} = \mu$에 의해 $\sqrt{A}\,x = \mu x$이다. 따라서 $\mu$는 $\sqrt{A}$의 고윳값이다.

(iii) $x \in \operatorname{Ker} T_A$이면 $Ax = 0 = 0x$이므로 (i)을 $\lambda = 0$으로 쓰면 제곱근 (2)의 $\sqrt{0 \cdot 0} = 0$, 곧 $\sqrt{0} = 0$에 의해 $\sqrt{A}\,x = 0x = 0$이다([[vector-space-basic-properties|(B3)]]). 거꾸로 $\sqrt{A}\,x = 0$이면 $Ax = \sqrt{A}(\sqrt{A}\,x) = \sqrt{A}\,0 = 0$이다([[linear-map|선형사상]]의 (T1)). 따라서 두 핵은 같다.

(iv) 결합법칙에 의해 $A\sqrt{A} = (\sqrt{A}\sqrt{A})\sqrt{A} = \sqrt{A}(\sqrt{A}\sqrt{A}) = \sqrt{A}\,A$이다.

**(4).** 양의 정부호 (3)의 (i)에 의해 대칭행렬이 양의 정부호인 것은 정확히 모든 고윳값이 양수일 때이다. $A$가 양의 정부호라 하고 $\mu$가 $\sqrt{A}$의 고윳값이라 하자. (3)의 (ii)에 의해 $0 \le \mu$이고 $\mu\mu$는 $A$의 고윳값이므로 $0 < \mu\mu$이다. $\mu = 0$이면 (K9)에 의해 $\mu\mu = 0$이 되어 순서 성질 (1)의 (i)에 어긋나므로 $\mu \ne 0$이고, $0 \le \mu$이므로 $0 < \mu$이다. 따라서 $\sqrt{A}$는 양의 정부호이다. 거꾸로 $\sqrt{A}$가 양의 정부호라 하고 $\lambda$가 $A$의 고윳값이라 하자. (3)의 (i)에 의해 $0 \le \lambda$이고 $\sqrt{\lambda}$는 $\sqrt{A}$의 고윳값이므로 $0 < \sqrt{\lambda}$이고, (W4)와 제곱근 (1)에 의해 $0 < \sqrt{\lambda}\sqrt{\lambda} = \lambda$이다. 따라서 $A$는 양의 정부호이다. 이때 $\sqrt{A}$는 양의 정부호이므로 양의 정부호 (6)의 (i)에 의해 가역이다.

**(5).** $A$가 양의 준정부호이면 (1)의 $\sqrt{A}$가 그런 $B$이다. 거꾸로 $B$가 대칭행렬이고 $BB = A$이면 $B^T = B$이므로 $A = B^T B$이고, 양의 정부호 (9)를 $m = n$, $M = B$로 쓰면 $B^T B$는 양의 준정부호이다. 따라서 $A$는 양의 준정부호이다.

**(6).** (i) 양의 정부호 (10)의 (i)에 의해 $A$가 양의 준정부호인 것은 정확히 $0 \le a$일 때이다. 이때 $B = \begin{pmatrix} \sqrt{a} \end{pmatrix}$는 자기수반사상과 대칭행렬의 (5)에 의해 대칭이고, $0 \le \sqrt{a}$이므로 양의 정부호 (10)의 (i)에 의해 양의 준정부호이며, 행렬의 곱의 (2)와 [[finite-sum-of-vectors|(H0)]]에 의해 $BB$의 $(1, 1)$ 성분은 $\sqrt{a}\sqrt{a} = a$이므로 [[matrix|행렬]]의 (2)에 의해 $BB = A$이다. (1)의 유일성에 의해 $\sqrt{A} = B$이다.

(ii) $D = \operatorname{diag}(d_1, \dots, d_n)$이라 하자. [[transpose|전치행렬]]의 (3)과 단위행렬의 성질에 의해 $D = I_n D I_n^T$이고, 직교행렬의 (7)에 의해 $I_n$은 직교행렬이다. 따라서 정규직교 기저의 변환의 정의와 (5)에 의해 $D$는 대칭이고, 양의 정부호 (4)의 (ii)를 $S = I_n$으로 쓰면 $D$는 양의 준정부호이다. (2)를 $Q = I_n$으로 쓰면 $\sqrt{D} = I_n \operatorname{diag}(\sqrt{d_1}, \dots, \sqrt{d_n}) I_n^T = \operatorname{diag}(\sqrt{d_1}, \dots, \sqrt{d_n})$이다.

특히 행렬의 (1), (6)과 대각화 가능의 $\operatorname{diag}$의 정의에 의해, 성분을 비교하면 $O = \operatorname{diag}(0, \dots, 0)$, $I_n = \operatorname{diag}(1, \dots, 1)$, $cI_n = \operatorname{diag}(c, \dots, c)$이다. 제곱근 (2)의 $\sqrt{aa} = a$에 의해 $\sqrt{0} = 0$, $\sqrt{1} = 1$이므로 $\sqrt{O} = O$, $\sqrt{I_n} = I_n$이고, $\operatorname{diag}(\sqrt{c}, \dots, \sqrt{c}) = \sqrt{c}\, I_n$이므로 $\sqrt{cI_n} = \sqrt{c}\, I_n$이다.

**(7).** $R = \sqrt{M^T M}$은 대칭이고 $RR = M^T M$이다. $x \in \mathbb{R}^n$이면 (대칭), 내적의 조건 (i), [[kernel-of-transpose-product|AᵀA 의 핵과 가역성]]의 (1)에 의해
$$
\begin{aligned}
\langle Rx, Rx \rangle &= \langle x, R(Rx) \rangle \\
&= \langle x, (M^T M)x \rangle \\
&= \langle M^T M x, x \rangle \\
&= \langle Mx, Mx \rangle
\end{aligned}
$$
이다. [[norm-in-inner-product-space|내적공간의 노름]]의 (2)에 의해 $\lVert Rx \rVert = \lVert Mx \rVert$이다. 노름의 (1)에 의해 $Rx = 0$인 것은 정확히 $\lVert Rx \rVert = 0$일 때, 곧 $\lVert Mx \rVert = 0$일 때, 곧 $Mx = 0$일 때이므로 $\operatorname{Ker} T_R = \operatorname{Ker} T_M$이다. 두 핵이 같으므로 [[rank-and-nullity|계수와 퇴화차수]]의 퇴화차수가 같고, [[rank-of-a-matrix|행렬의 계수]]의 (4)에 의해 $\operatorname{nullity} T_R + \operatorname{rank} R = n = \operatorname{nullity} T_M + \operatorname{rank} M$이므로 $\operatorname{rank} R = \operatorname{rank} M$이다. $\blacksquare$
:::

## 예시와 반례

:::example[고윳값을 쓰지 않고 제곱근 알아보기]
$$
A = \begin{pmatrix} 5 & 5 \\ 5 & 10 \end{pmatrix}, \qquad B = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}
$$
이라 합시다. $BB$의 성분은 $2 \cdot 2 + 1 \cdot 1 = 5$, $2 \cdot 1 + 1 \cdot 3 = 5$, $1 \cdot 2 + 3 \cdot 1 = 5$, $1 \cdot 1 + 3 \cdot 3 = 10$이므로 $BB = A$입니다. $B$는 대칭이고 $\det B = 6 - 1 = 5 > 0$, $\operatorname{tr} B = 5 > 0$이므로 [[positive-definite-matrix|양의 정부호 행렬]]의 (10)의 (iii)에 의해 양의 정부호이고, 같은 항목의 (2)의 (i)에 의해 양의 준정부호입니다. (5)에 의해 $A$도 양의 준정부호이고, (1)의 유일성에 의해 $\sqrt{A} = B$입니다. $B$의 고윳값은 $2^{-1}(5 + \sqrt{5})$와 $2^{-1}(5 - \sqrt{5})$이지만, 그것을 구하지 않고도 $\sqrt{A}$를 알아볼 수 있습니다. (4)에 의해 $A$도 양의 정부호입니다.
:::

:::example[가역이 아닌 양의 준정부호 행렬의 제곱근]
$$
Q = 5^{-1}\begin{pmatrix} 3 & 4 \\ 4 & -3 \end{pmatrix}
$$
의 두 열 $5^{-1}(3, 4)$, $5^{-1}(4, -3)$은 노름이 $1$이고 서로 직교하므로 $Q$는 직교행렬입니다. $D = \operatorname{diag}(25, 0)$이면
$$
\begin{aligned}
QDQ^T &= 25^{-1}\begin{pmatrix} 75 & 0 \\ 100 & 0 \end{pmatrix}\begin{pmatrix} 3 & 4 \\ 4 & -3 \end{pmatrix} \\
&= \begin{pmatrix} 9 & 12 \\ 12 & 16 \end{pmatrix} = A
\end{aligned}
$$
입니다($Q^T = Q$). $A$는 대칭이고 $25$와 $0$이 $0$ 이상이므로 양의 정부호 행렬의 (4)의 (ii)에 의해 양의 준정부호이며, (2)에 의해
$$
\begin{aligned}
\sqrt{A} &= Q \operatorname{diag}(5, 0) Q^T \\
&= 25^{-1}\begin{pmatrix} 45 & 60 \\ 60 & 80 \end{pmatrix} \\
&= 5^{-1}\begin{pmatrix} 9 & 12 \\ 12 & 16 \end{pmatrix}
\end{aligned}
$$
이고, 곱해 보면 $25^{-1}(81 + 144) = 9$, $25^{-1}(108 + 192) = 12$, $25^{-1}(144 + 256) = 16$으로 $\sqrt{A}\sqrt{A} = A$가 맞습니다. $x = (4, -3)$이면 $Ax = (36 - 36, 48 - 48) = 0$이고 $\sqrt{A}\,x = 0$이어서 (3)의 (iii)대로 두 핵이 같습니다. 이 $A$는 $\det A = 144 - 144 = 0$이라 가역이 아니고, $\sqrt{A}$도 가역이 아닙니다.
:::

:::counterexample[양의 준정부호를 빼면 제곱근이 여럿일 수 있는 예]
$B_1 = I_2$, $B_2 = -I_2$, $B_3 = \operatorname{diag}(1, -1)$은 모두 대칭이고 $B_1 B_1 = B_2 B_2 = B_3 B_3 = I_2$입니다. 이 가운데 양의 준정부호인 것은 $B_1$뿐입니다. $B_2$는 $q_{B_2}(e_1) = -1 < 0$이고 $B_3$은 $q_{B_3}(e_2) = -1 < 0$이기 때문입니다. 그래서 (1)의 "양의 준정부호"를 "대칭"으로만 바꾸면 하나뿐이라는 결론이 성립하지 않고, $\sqrt{I_2} = I_2$는 (6)의 (ii)대로 양의 준정부호 조건이 골라낸 것입니다.
:::

:::counterexample[대칭인 제곱근이 없는 대칭행렬의 예]
$A = -I_2$는 대칭이지만 $q_A(e_1) = -1 < 0$이어서 양의 준정부호가 아니므로, (5)에 의해 $BB = -I_2$인 $2 \times 2$ 대칭행렬 $B$는 없습니다. 대칭이 아닌 제곱근은 있습니다. $J = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$이면 $JJ$의 성분은 $0 \cdot 0 + (-1) \cdot 1 = -1$, $0 \cdot (-1) + (-1) \cdot 0 = 0$, $1 \cdot 0 + 0 \cdot 1 = 0$, $1 \cdot (-1) + 0 \cdot 0 = -1$이어서 $JJ = -I_2$입니다.
:::

## 확인 질문

:::check[양의 준정부호 행렬의 제곱근의 성분은 성분의 제곱근인가?]
대각행렬이면 (6)의 (ii)대로 그렇지만 일반적으로는 아닙니다. $B = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$은 대칭이고 $q_B(x) = (x_1 + x_2)x_1 + (x_1 + x_2)x_2 = (x_1 + x_2)^2 \ge 0$이어서 양의 준정부호이며, $BB = \begin{pmatrix} 2 & 2 \\ 2 & 2 \end{pmatrix}$입니다. (1)의 유일성에 의해 $\sqrt{BB} = B$이고, 그 성분 $1$은 $BB$의 성분 $2$의 제곱근 $\sqrt{2}$가 아닙니다.
:::

:::check[$A$가 양의 준정부호이고 $0 \le c$이면 $\sqrt{cA}$는 무엇인가?]
$\sqrt{c}\sqrt{A}$입니다. [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (5)에 의해 $cA$와 $\sqrt{c}\sqrt{A}$는 대칭이고, [[matrix-vector-product|행렬과 벡터의 곱]]의 (4)와 내적의 선형성에 의해 $q_{cA}(x) = c\,q_A(x) \ge 0$, $q_{\sqrt{c}\sqrt{A}}(x) = \sqrt{c}\,q_{\sqrt{A}}(x) \ge 0$이므로 둘 다 양의 준정부호입니다. [[matrix-product-properties|행렬의 곱의 성질]]의 (3)에 의해 $(\sqrt{c}\sqrt{A})(\sqrt{c}\sqrt{A}) = (\sqrt{c}\sqrt{c})(\sqrt{A}\sqrt{A}) = cA$이므로 (1)의 유일성에 의해 $\sqrt{cA} = \sqrt{c}\sqrt{A}$입니다. $c = 0$이면 양쪽 모두 영행렬입니다.
:::
