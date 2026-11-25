---
title: 직교사영의 성질과 행렬
title_en: Properties and Matrix of an Orthogonal Projection
aliases: [직교사영의 행렬, 사영 행렬, 정사영 행렬, orthogonal projection matrix, projection matrix]
kind: proposition
field: linear-algebra
msc: ["15A63"]
level: undergrad
summary: 내적공간의 유한차원 부분공간 E 로의 직교사영 P 는 P∘P = P 를 만족하고, 상이 E, 핵이 E 의 직교 여공간이며, 모든 x, y 에서 ⟨Px, y⟩ = ⟨x, Py⟩ 이다. 고윳값은 1 과 0 뿐이고 고유공간은 E 와 그 직교 여공간이다. ℝⁿ 에서 E 의 정규직교 기저를 열로 하는 행렬 U 로 직교사영의 행렬은 UUᵀ 이고 UᵀU 는 단위행렬이며, 직교사영의 행렬은 전치해도, 제곱해도 그대로이다.
requires: [real-number-arithmetic, vector-space, vector-space-basic-properties, finite-sum-of-vectors, linear-combination-and-span, linear-map, kernel-and-range, dimension, dimension-of-subspace, matrix, matrix-vector-product, matrix-product, transpose, matrix-of-a-linear-map, rank-of-a-matrix, eigenvalue-and-eigenvector, inner-product-space, standard-inner-product, orthogonal-projection, orthonormal-basis, orthonormal-basis-exists, orthogonal-complement]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 5장 3절 Orthogonal projection and Gram-Schmidt orthogonalization 의 Remark 3.4 와 Remark 3.5, p.130; 같은 절의 연습문제 3.2, p.133 과 3.8, 3.9, 3.11, 3.13, pp.134–135; 4절 Least square solution. Formula for the orthogonal projection 의 4.2 Formula for the orthogonal projection, p.137
    checked: original
    note: "(1)의 P∘P = P 와 (5)의 행렬판 두 식은 출처 연습문제 3.11(p.134)이 직교사영의 행렬 P 에 대해 P* = P 와 P² = P 를 보이게 하는 것이고, 출처는 그 뒤에 이 두 성질이 직교사영을 특징짓는다고 적고 뒤에서 다루겠다고 한다. 이 항목은 행렬로 가기 전에 (2)의 등식 ⟨Px, y⟩ = ⟨x, Py⟩ 를 직교사영의 정의와 유일성에서 보이고, 행렬판 [P]ᵀ = [P] 를 그것과 전치행렬과 내적의 관계로 증명했다. (3)은 출처 연습문제 3.8(p.134)이 직교사영의 고윳값과 고유공간을 구하게 하는 것이다(그 연습문제가 함께 묻는 대수적·기하적 중복도는 이 항목에 두지 않았다). (4)의 행렬 UUᵀ 는 출처 Remark 3.5 의 식 (3.2)(p.130)를 정규직교 기저의 경우로 옮긴 것이다. 출처는 직교하는 기저 v₁, …, v_r 로 P_E = Σ ‖v_k‖⁻² v_k v_k* 라 쓰고 'Recalling the definition of inner product' 에서 얻는다고 적는다. 이 사이트는 ℝⁿ 의 원소에 전치 기호를 붙이지 않으므로 v_k v_k* 의 합 대신 k 번째 열이 u_k 인 행렬 U 로 UUᵀ 를 썼고, 증명은 행렬과 벡터의 곱의 정의와 표준내적의 열 꼴로 했다. 진술 첫머리의 'proj_E 는 선형사상' 은 출처 Remark 3.4(p.130)가 식 (3.1)에서, 또는 정의와 유일성에서 보인다고 적는 것이다. (5)의 I_n − [P] 는 출처 연습문제 3.13(pp.134–135)이 E 와 E⊥ 로의 직교사영 P, Q 의 합을 묻는 것과 같은 대상이다. 출처 4절 4.2(p.137)는 A*A 가 가역일 때 Ran A 로의 직교사영의 행렬을 A(A*A)⁻¹A* 로 적는다. 예시 'ℝ³ 의 직선 위로의 직교사영의 행렬' 은 출처 연습문제 3.9 a)(p.134)가 ℝⁿ 의 1차원 부분공간 span((1, 1, …, 1)) 위로의 직교사영의 행렬을 구하게 하는 것, 연습문제 3.2(p.133)가 2차원 부분공간 위로의 직교사영의 행렬을 구하게 하는 것과 같은 발상이다. 확인 질문 '표준내적을 준 $\\mathbb{R}^2$에서 $E = \\operatorname{span}(e_1)$이면 $[P]$는 무엇이고, (5)의 세 식은 어떻게 확인되는가?' 도 같은 발상이다. 반례 '정규화하지 않은 열로 만든 행렬이 직교사영의 행렬이 아닐 수 있는 예' 의 모든 성분이 1 인 2 × 2 행렬은 출처 연습문제 3.9 b)(p.134)의 '모든 성분이 1 인 n × n 행렬' 에서 n = 2 인 것과 같은 대상이고, 그것이 span((1, 1)) 위로의 직교사영의 행렬의 2 배라는 것은 연습문제 3.9 a), b)를 잇는 발상과 같다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(계수 등식의 증명 통독). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$V$가 [[inner-product-space|내적공간]]이고 $E$가 $V$의 유한차원 [[subspace|부분공간]]이라 하자($V$는 유한차원이 아니어도 된다). [[orthonormal-basis-exists|정규직교 기저의 존재와 확장]]의 (4)에 의해 [[orthogonal-projection|직교사영]]의 (4)의 사상 $\operatorname{proj}_E : V \to V$가 정해지고 [[linear-map|선형사상]]이다. 이 사상을 $P = \operatorname{proj}_E$로 쓴다. $E^\perp$와 $\operatorname{proj}_{E^\perp}$는 [[orthogonal-complement|직교 여공간]]의 것이고, 핵과 상은 [[kernel-and-range|핵과 상]]의 것이다.

1. (두 번 사영하기, 상과 핵) $P \circ P = P$이다. $\operatorname{Ran} P = E$이고 $\operatorname{Ker} P = E^\perp$이다. 곧 $v \in V$에 대하여 $Pv = v$인 것은 정확히 $v \in E$일 때이고, $Pv = 0_V$인 것은 정확히 $v \in E^\perp$일 때이다.
2. (내적 안에서 옮기기) 모든 $x, y \in V$에서 $\langle Px, y \rangle = \langle x, Py \rangle = \langle Px, Py \rangle$이다.
3. (고윳값과 고유공간) 고윳값과 고유공간은 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 것이다. 고유공간 $\operatorname{Ker}(P - 1\,i_V)$는 $E$이고 고유공간 $\operatorname{Ker}(P - 0\,i_V)$는 $E^\perp$이다. $1$이 $P$의 고윳값인 것은 정확히 $E \ne \{0_V\}$일 때이고, $0$이 $P$의 고윳값인 것은 정확히 $E \ne V$일 때이다. $\lambda \ne 0$이고 $\lambda \ne 1$인 실수 $\lambda$는 $P$의 고윳값이 아니다.

아래 (4)와 (5)에서 $n$은 자연수이고 $V = \mathbb{R}^n$에 [[standard-inner-product|표준내적]]을 준다. $E$는 $\mathbb{R}^n$의 부분공간이다. $\mathbb{R}^n$이 유한차원이므로 $E$는 유한차원이고, $P = \operatorname{proj}_E : \mathbb{R}^n \to \mathbb{R}^n$의 [[matrix-of-a-linear-map|행렬]] $[P]$는 $n \times n$ 행렬이다. 행렬의 열, 전치 $A^T$, 곱, 열공간 $\operatorname{Col}$은 [[matrix|행렬]], [[transpose|전치행렬]], [[matrix-product|행렬의 곱]], [[rank-of-a-matrix|행렬의 계수]]의 것이다.

4. (행렬 $UU^T$) $r$이 자연수이고 $u_1, \dots, u_r$이 $\mathbb{R}^n$의 정규직교 열이며 $\operatorname{span}(u_1, \dots, u_r) = E$라 하자([[linear-combination-and-span|생성]]). 이런 열은 $E \ne \{0_V\}$이면 있고, 이때 $r = \dim E$이다. $k$번째 열이 $u_k$인 $n \times r$ 행렬을 $U$라 하자. 그러면 다음이 성립한다.
   - (i) $U^T U = I_r$이고 $\operatorname{Col} U = E$이다.
   - (ii) 모든 $x \in \mathbb{R}^n$에서 $U^T x \in \mathbb{R}^r$의 $k$에서의 값은 $\langle u_k, x \rangle$이다($k \in \{1, \dots, r\}$).
   - (iii) $[P] = UU^T$이다. 곧 모든 $x \in \mathbb{R}^n$에서
     $$
     \begin{aligned}
     Px &= UU^T x \\
     &= \langle x, u_1 \rangle u_1 + \cdots \\
     &\quad + \langle x, u_r \rangle u_r
     \end{aligned}
     $$
     이다.

   또 $E = \{0_V\}$이면 $[P]$는 $n \times n$ 영행렬이고, $E = \mathbb{R}^n$이면 $[P] = I_n$이다.
5. (행렬의 성질) $[P]^T = [P]$이고 $[P][P] = [P]$이다. 또 $I_n - [P] = [\operatorname{proj}_{E^\perp}]$이다.
:::

:::english
Let $V$ be an inner product space and $E$ a finite-dimensional subspace of $V$ ($V$ need not be finite-dimensional). By item (4) of the entry on existence and extension of orthonormal bases, the map $\operatorname{proj}_E : V \to V$ of item (4) of the entry on orthogonal projections is defined and is a linear map. We write it as $P = \operatorname{proj}_E$. $E^\perp$ and $\operatorname{proj}_{E^\perp}$ are those of the entry on orthogonal complements, and kernels and ranges are those of the entry on kernel and range.

1. (Projecting twice, range and kernel) $P \circ P = P$. Moreover $\operatorname{Ran} P = E$ and $\operatorname{Ker} P = E^\perp$. That is, for $v \in V$, $Pv = v$ exactly when $v \in E$, and $Pv = 0_V$ exactly when $v \in E^\perp$.
2. (Moving inside the inner product) For all $x, y \in V$, $\langle Px, y \rangle = \langle x, Py \rangle = \langle Px, Py \rangle$.
3. (Eigenvalues and eigenspaces) Eigenvalues and eigenspaces are those of the entry on eigenvalues and eigenvectors. The eigenspace $\operatorname{Ker}(P - 1\,i_V)$ is $E$ and the eigenspace $\operatorname{Ker}(P - 0\,i_V)$ is $E^\perp$. The number $1$ is an eigenvalue of $P$ exactly when $E \ne \{0_V\}$, and $0$ is an eigenvalue of $P$ exactly when $E \ne V$. No real number $\lambda$ with $\lambda \ne 0$ and $\lambda \ne 1$ is an eigenvalue of $P$.

In (4) and (5) below, $n$ is a natural number and $V = \mathbb{R}^n$ carries the standard inner product. $E$ is a subspace of $\mathbb{R}^n$. Since $\mathbb{R}^n$ is finite-dimensional, $E$ is finite-dimensional, and the matrix $[P]$ of $P = \operatorname{proj}_E : \mathbb{R}^n \to \mathbb{R}^n$ is an $n \times n$ matrix. Columns of matrices, the transpose $A^T$, products, and column spaces $\operatorname{Col}$ are those of the entries on matrices, transposes, matrix products, and the rank of a matrix.

4. (The matrix $UU^T$) Let $r$ be a natural number, let $u_1, \dots, u_r$ be an orthonormal sequence in $\mathbb{R}^n$ with $\operatorname{span}(u_1, \dots, u_r) = E$. Such a sequence exists if $E \ne \{0_V\}$, and then $r = \dim E$. Let $U$ be the $n \times r$ matrix whose $k$-th column is $u_k$. Then the following hold.
   - (i) $U^T U = I_r$ and $\operatorname{Col} U = E$.
   - (ii) For every $x \in \mathbb{R}^n$, the value of $U^T x \in \mathbb{R}^r$ at $k$ is $\langle u_k, x \rangle$ ($k \in \{1, \dots, r\}$).
   - (iii) $[P] = UU^T$. That is, for every $x \in \mathbb{R}^n$,
     $$
     \begin{aligned}
     Px &= UU^T x \\
     &= \langle x, u_1 \rangle u_1 + \cdots \\
     &\quad + \langle x, u_r \rangle u_r.
     \end{aligned}
     $$

   Moreover, if $E = \{0_V\}$, then $[P]$ is the $n \times n$ zero matrix, and if $E = \mathbb{R}^n$, then $[P] = I_n$.
5. (Properties of the matrix) $[P]^T = [P]$ and $[P][P] = [P]$. Moreover $I_n - [P] = [\operatorname{proj}_{E^\perp}]$.
:::

## 직관

바닥 위로 그림자를 떨어뜨리는 일을 생각하면, 이미 바닥에 있는 그림자를 다시 떨어뜨려도 그림자는 그대로입니다((1)의 $P \circ P = P$). 바닥에 떨어지는 것 전체가 $E$이고, 그림자가 한 점(영벡터)으로 줄어드는 것은 바닥과 직각인 방향의 벡터, 곧 $E^\perp$의 원소입니다. 비유에서 "그림자"가 $Pv$이고 "바닥과 직각"이 $v \perp E$입니다.

(2)는 $x$와 $y$ 가운데 어느 쪽을 사영해도 내적이 같고, 둘 다 사영해도 같다는 것입니다. $\langle Px, y \rangle$에서 $y$를 $Py$와 $y - Py$로 나누면, $y - Py$는 $E$와 직교하고 $Px$는 $E$에 있으므로 그 부분의 내적은 $0$입니다. 같은 일을 $x$ 쪽에서 하면 세 값이 모두 같아집니다.

고윳값은 $1$과 $0$뿐입니다((3)). $Pv = \lambda v$인 영벡터가 아닌 $v$가 있으면, 한 번 더 사영해도 $Pv$는 바뀌지 않으므로 $\lambda v = \lambda \lambda v$이고, $\lambda$는 $\lambda \lambda = \lambda$를 만족하는 수입니다. $E = \{0_V\}$이고 $V \ne \{0_V\}$이면 $P$는 영사상이어서 고윳값이 $0$뿐이고, $E = V \ne \{0_V\}$이면 $P$는 항등사상이어서 고윳값이 $1$뿐입니다. $V = \{0_V\}$이면 영벡터가 아닌 벡터가 없으므로 고윳값이 하나도 없습니다.

$\mathbb{R}^n$에서는 정규직교 기저 $u_1, \dots, u_r$로 $Px = \langle x, u_1 \rangle u_1 + \cdots + \langle x, u_r \rangle u_r$이었습니다. $U^T x$는 이 계수 $\langle u_k, x \rangle$들을 모은 $\mathbb{R}^r$의 원소이고, 거기에 $U$를 곱하면 계수로 열들의 일차결합을 만듭니다. 그래서 행렬이 $UU^T$입니다.

## 증명

:::idea
(1)과 (2)는 직교사영의 정의, 유일성, 판정 "모든 $y \in E$에서 $\langle w, y \rangle = \langle v, y \rangle$"에서 나온다. 행렬은 직교사영의 식을 행렬과 벡터의 곱으로 다시 쓰면 나오고, 전치에 관한 식은 (2)와 $\langle Ax, y \rangle = \langle x, A^T y \rangle$에서 나온다.
:::

:::hint
$Py$는 $y$의 $E$로의 직교사영이고 $Px \in E$이므로, [[orthogonal-projection|직교사영]]의 (1)에 의해 $\langle Py, Px \rangle = \langle y, Px \rangle$입니다.
:::

:::hint
$U(U^T x)$는 정의에 의해 $U^T x$의 값들을 계수로 쓴 $U$의 열들의 일차결합입니다.
:::

:::proof
아래에서 (V5), (V6)은 [[vector-space|벡터공간]]의 것, (B2)–(B12)는 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 것, (H0)은 [[finite-sum-of-vectors|벡터의 유한 합]]의 것, (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다. [[inner-product-space|내적과 내적공간]]의 번호와 조건은 "내적의 (1)", "내적의 조건 (i)"처럼, [[orthogonal-projection|직교사영]], [[orthogonal-complement|직교 여공간]], [[standard-inner-product|ℝⁿ 의 표준내적]]의 번호는 "직교사영의 (1)", "직교 여공간의 (1)", "표준내적의 (1)"처럼 줄여 쓴다.

**(1)의 증명.** $v \in V$이면 직교사영의 (4)의 (ii)에 의해 $Pv \in E$이고, 같은 항목의 (4)의 (iii)에 의해 $P(Pv) = Pv$이다. 두 함수 $P \circ P$와 $P$는 정의역이 같고 모든 $v$에서 값이 같으므로 같다. $\operatorname{Ran} P = E$는 직교사영의 (4)의 (ii)이고, "$Pv = v$인 것은 정확히 $v \in E$일 때"는 같은 항목의 (4)의 (iii)이다.

$Pv = 0_V$인 것이 정확히 $v \in E^\perp$일 때임을 보이자. 먼저 (H0)에 의해 $0_V + 0_V = 0_V$이므로 (B2)의 유일성에 의해 $-0_V = 0_V$이고, $v - 0_V = v + 0_V = v$이다([[vector-space|(V1)]]과 (H0)). $Pv = 0_V$라 하자. $Pv$는 $v$의 $E$로의 직교사영이므로 직교 여공간의 (2)에 의해 $v - Pv = v - 0_V = v$는 $E^\perp$에 속한다. 거꾸로 $v \in E^\perp$라 하자. $0_V \in E$이고 $v - 0_V = v \in E^\perp$이므로 직교 여공간의 (2)에 의해 $0_V$는 $v$의 $E$로의 직교사영이고, 직교사영의 (1)의 유일성에 의해 $Pv = 0_V$이다. 따라서 $\operatorname{Ker} P = \{v \in V : Pv = 0_V\} = E^\perp$이다.

**(2)의 증명.** $x, y \in V$라 하자. (1)에 의해 $Px, Py \in E$이다. $Py$는 $y$의 $E$로의 직교사영이므로 직교사영의 (1)에 의해 모든 $z \in E$에서 $\langle Py, z \rangle = \langle y, z \rangle$이고, $z = Px$로 두면 $\langle Py, Px \rangle = \langle y, Px \rangle$이다. 같은 이유로 $Px$는 $x$의 직교사영이므로 $z = Py$로 두면 $\langle Px, Py \rangle = \langle x, Py \rangle$이다. 내적의 조건 (i)을 쓰면
$$
\begin{aligned}
\langle Px, y \rangle &= \langle y, Px \rangle = \langle Py, Px \rangle \\
&= \langle Px, Py \rangle = \langle x, Py \rangle
\end{aligned}
$$
이다.

**(3)의 증명.** [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (1)에 의해 실수 $\lambda$에 대하여 $\operatorname{Ker}(P - \lambda i_V) = \{v \in V : Pv = \lambda v\}$이다. (V5)에 의해 $1v = v$이므로 $\lambda = 1$일 때 이 집합은 $\{v : Pv = v\}$이고, (1)에 의해 $E$이다. (B3)에 의해 $0v = 0_V$이므로 $\lambda = 0$일 때 이 집합은 $\{v : Pv = 0_V\}$이고, (1)에 의해 $E^\perp$이다.

같은 항목의 (2)에 의해 $\lambda$가 고윳값인 것은 정확히 $\operatorname{Ker}(P - \lambda i_V) \ne \{0_V\}$일 때이다. 따라서 $1$이 고윳값인 것은 정확히 $E \ne \{0_V\}$일 때이고, $0$이 고윳값인 것은 정확히 $E^\perp \ne \{0_V\}$일 때이다. 이것이 정확히 $E \ne V$일 때임을 보이자. $E = V$이면 직교 여공간의 (1)에 의해 $E^\perp = V^\perp = \{0_V\}$이다. 거꾸로 $E^\perp = \{0_V\}$이면, $E$가 유한차원이므로 직교 여공간의 (5)와 (1)에 의해 $E = (E^\perp)^\perp = \{0_V\}^\perp = V$이다.

$\lambda$가 $P$의 고윳값이라 하고, $Pv = \lambda v$이며 $v \ne 0_V$라 하자. [[linear-map|선형사상]]의 (T-배)와 (V6)에 의해 $P(Pv) = P(\lambda v) = \lambda (Pv) = \lambda(\lambda v) = (\lambda\lambda) v$이고, (1)에 의해 $P(Pv) = Pv = \lambda v$이다. 따라서 $(\lambda\lambda)v = \lambda v$이고, (B11)과 (B12)에 의해 $(\lambda\lambda - \lambda)v = (\lambda\lambda)v - \lambda v = 0_V$이다. $v \ne 0_V$이므로 (B6)에 의해 $\lambda\lambda - \lambda = 0$이다. (K4), (K12)의 (ii), (K3)에 의해 $\lambda\lambda - \lambda = \lambda\lambda + \lambda(-1) = \lambda(\lambda + (-1)) = \lambda(\lambda - 1)$이므로, (K10)에 의해 $\lambda = 0$이거나 $\lambda - 1 = 0$이고, 뒤의 경우 (K12)의 (v)에 의해 $\lambda = 1$이다. 따라서 $0$도 $1$도 아닌 실수는 고윳값이 아니다.

**(4)와 (5)의 준비.** [[dimension|차원]]의 (4)에 의해 $\mathbb{R}^n$은 유한차원이고, [[dimension-of-subspace|부분공간의 차원]]의 (1)에 의해 $E$는 유한차원이다. 따라서 위에서처럼 $P$는 선형사상이고, [[matrix-of-a-linear-map|선형사상의 행렬]]에 의해 $[P]$가 있으며 그 (1)에 의해 모든 $x$에서 $[P]x = Px$이다.

**(4)의 증명.** $E \ne \{0_V\}$이면 차원의 (3)에 의해 $0$ 이상의 정수 $\dim E$는 $0$이 아니므로 자연수이고, [[orthonormal-basis-exists|정규직교 기저의 존재와 확장]]의 (3)에 의해 길이 $\dim E$인 $\mathbb{R}^n$의 정규직교 열로서 생성이 $E$인 것이 있다. 거꾸로 $u_1, \dots, u_r$이 진술의 열이면, [[orthonormal-basis|정규직교 기저]]의 (6)에 의해 이 열은 내적공간 $E$의 정규직교 기저이므로 $E$의 기저이고, 차원의 (2)에 의해 $r = \dim E$이다. [[matrix|행렬]]의 (4)에 의해 $k$번째 열이 $u_k$인 $n \times r$ 행렬 $U$가 하나 있다. 행렬의 약속에 따라 $U$의 $k$번째 열을 $\mathbf{u}_k$로 쓰면 $\mathbf{u}_k = u_k$이다.

(i) 표준내적의 (5)를 $A = B = U$에 쓰면 $U^T U$는 $r \times r$ 행렬이고 그 $(j, k)$ 성분은 $\langle u_j, u_k \rangle$이다. 정규직교 열이므로 이 값은 $j = k$일 때 $1$, $j \ne k$일 때 $0$이고, 이것은 행렬의 (6)의 $I_r$의 $(j, k)$ 성분이다. 행렬의 (2)에 의해 $U^T U = I_r$이다. [[rank-of-a-matrix|행렬의 계수]]의 정의에 의해 $\operatorname{Col} U = \operatorname{span}(\mathbf{u}_1, \dots, \mathbf{u}_r) = \operatorname{span}(u_1, \dots, u_r) = E$이다.

(ii) 표준내적의 (3)의 둘째 문장을 $A = U$, $z = x$에 쓰면 $(U^T x)_k = \langle \mathbf{u}_k, x \rangle = \langle u_k, x \rangle$이다.

(iii) $x \in \mathbb{R}^n$이라 하고 $c = U^T x \in \mathbb{R}^r$라 하자. [[matrix-vector-product|행렬과 벡터의 곱]]의 정의에 의해 $Uc = c_1 u_1 + \cdots + c_r u_r$이다. (ii)와 내적의 조건 (i)에 의해 모든 $k$에서 $c_k u_k = \langle x, u_k \rangle u_k$이므로, 두 열은 모든 자리의 항이 같아 합도 같고 $Uc = \langle x, u_1 \rangle u_1 + \cdots + \langle x, u_r \rangle u_r$이다. 정규직교 기저의 존재와 확장의 (4)에 의해 이것은 $Px$이다. [[matrix-product|행렬의 곱]]의 (1)에 의해 $(UU^T)x = U(U^T x) = Uc$이다. 따라서 모든 $x$에서 $(UU^T)x = Px = [P]x$이고, 행렬과 벡터의 곱의 (5)에 의해 $[P] = UU^T$이다.

$E = \{0_V\}$이면 직교사영의 (6)에 의해 $P$는 모든 값이 $0_V$인 함수이다. 선형사상의 행렬의 정의에 의해 $[P]$의 $k$번째 열은 $Pe_k = 0_V$이므로, 행렬의 (4)에 의해 $[P]$의 $(j, k)$ 성분은 $0_V$의 $j$번째 값 $0$이고, $[P]$는 영행렬이다. $E = \mathbb{R}^n$이면 직교사영의 (6)에 의해 $P = i_{\mathbb{R}^n}$이고, 선형사상의 행렬의 (5)에 의해 $[P] = I_n$이다.

**(5)의 증명.** $y \in \mathbb{R}^n$이라 하자. 모든 $x \in \mathbb{R}^n$에서, 표준내적의 (4)와 (2)에 의해
$$
\begin{aligned}
\langle x, [P]^T y \rangle &= \langle [P]x, y \rangle = \langle Px, y \rangle \\
&= \langle x, Py \rangle = \langle x, [P]y \rangle
\end{aligned}
$$
이고, 내적의 조건 (i)에 의해 $\langle [P]^T y, x \rangle = \langle [P]y, x \rangle$이다. 내적의 (6)에 의해 $[P]^T y = [P]y$이다. $[P]^T$와 $[P]$는 둘 다 $n \times n$ 행렬이고([[transpose|전치행렬]]의 정의) 이것이 모든 $y$에서 성립하므로, 행렬과 벡터의 곱의 (5)에 의해 $[P]^T = [P]$이다.

행렬의 곱의 (3)에 의해 $[P \circ P] = [P][P]$이고, (1)에 의해 $P \circ P = P$이므로 $[P][P] = [P]$이다.

$I_n - [P]$는 행렬의 (1)의 벡터공간 $M_{n \times n}$에서의 차 $I_n + (-[P])$이고, 행렬의 (1)과 (K9)에 의해 $-[P]$의 $(j, k)$ 성분은 $-[P]_{j,k} = (-1)[P]_{j,k}$이므로 행렬의 (2)에 의해 $-[P] = (-1)[P]$이다. $x \in \mathbb{R}^n$이면 행렬과 벡터의 곱의 (4)와 (3), (B5)에 의해
$$
\begin{aligned}
(I_n - [P])x &= I_n x + ((-1)[P])x \\
&= x + (-1)(Px) \\
&= x - Px
\end{aligned}
$$
이다. 직교 여공간의 (6)에 의해 이것은 $\operatorname{proj}_{E^\perp} x$이고, 선형사상의 행렬의 (1)에 의해 $[\operatorname{proj}_{E^\perp}]x$이다. 이것이 모든 $x$에서 성립하므로 행렬과 벡터의 곱의 (5)에 의해 $I_n - [P] = [\operatorname{proj}_{E^\perp}]$이다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ³ 의 직선 위로의 직교사영의 행렬]
표준내적을 준 $\mathbb{R}^3$에서 $q = \bigl(\tfrac{1}{3}, \tfrac{2}{3}, \tfrac{2}{3}\bigr)$이라 하면 $\langle q, q \rangle = \tfrac{1 + 4 + 4}{9} = 1$이므로 $q$는 길이 $1$인 정규직교 열입니다. $E = \operatorname{span}(q)$라 하고 $U$를 이 열 하나로 된 $3 \times 1$ 행렬이라 하면, [[matrix-product|행렬의 곱]]의 (2)에 의해 $UU^T$의 $(j, k)$ 성분은 $q_j q_k$이므로 (4)에 의해
$$
[P] = UU^T = \frac{1}{9}\begin{pmatrix} 1 & 2 & 2 \\ 2 & 4 & 4 \\ 2 & 4 & 4 \end{pmatrix}
$$
입니다. (5)를 확인해 봅시다. 이 행렬은 $(j, k)$ 성분과 $(k, j)$ 성분이 같으므로 전치해도 같습니다. $[P][P]$의 $(1, 1)$ 성분은 $\tfrac{1 \cdot 1 + 2 \cdot 2 + 2 \cdot 2}{81} = \tfrac{9}{81} = \tfrac{1}{9}$, $(1, 2)$ 성분은 $\tfrac{1 \cdot 2 + 2 \cdot 4 + 2 \cdot 4}{81} = \tfrac{18}{81} = \tfrac{2}{9}$, $(2, 2)$ 성분은 $\tfrac{2 \cdot 2 + 4 \cdot 4 + 4 \cdot 4}{81} = \tfrac{36}{81} = \tfrac{4}{9}$이고, 나머지 성분도 같은 계산으로 $[P]$의 성분과 같습니다.

$x = e_1$이면 $[P]e_1 = \bigl(\tfrac{1}{9}, \tfrac{2}{9}, \tfrac{2}{9}\bigr) = \tfrac{1}{3} q$이고, 실제로 $\langle e_1, q \rangle = \tfrac{1}{3}$입니다. 나머지 $e_1 - [P]e_1 = \bigl(\tfrac{8}{9}, -\tfrac{2}{9}, -\tfrac{2}{9}\bigr)$과 $q$의 내적이 $\tfrac{8 - 4 - 4}{27} = 0$이어서 $E^\perp$에 속하고, (5)에 의해 그것이 $e_1$의 $E^\perp$로의 직교사영입니다. (3)에 의해 $Pq = q$이고, $q$와 직교하는 모든 벡터는 $0$으로 갑니다.
:::

:::counterexample[정규화하지 않은 열로 만든 행렬이 직교사영의 행렬이 아닐 수 있는 예]
표준내적을 준 $\mathbb{R}^2$에서 $w = (1, 1)$, $E = \operatorname{span}(w)$라 하고, 이 열 하나로 된 $2 \times 1$ 행렬 $W$로 $WW^T$를 만들면 모든 성분이 $1$인 $2 \times 2$ 행렬입니다. 그 제곱은 모든 성분이 $1 \cdot 1 + 1 \cdot 1 = 2$인 행렬이어서 $WW^T$와 다르므로, (5)에 의해 $WW^T$는 어느 부분공간으로의 직교사영의 행렬도 아닙니다. $w$는 $\langle w, w \rangle = 2$여서 단위벡터가 아니고, (4)는 정규직교 열에 대한 진술입니다. 실제로 [[orthogonal-projection|직교사영]]의 (3)에 의해 $Px = \tfrac{x_1 + x_2}{2} w$이므로 $[P]$의 두 열은 모두 $\bigl(\tfrac{1}{2}, \tfrac{1}{2}\bigr)$이고, $[P]$는 $WW^T$의 모든 성분을 $\tfrac{1}{2}$배 한 것입니다.
:::

## 확인 질문

:::check[$Pv = 2v$인 영벡터가 아닌 $v \in V$가 있을 수 있는가?]
없습니다. 그런 $v$가 있으면 $2$가 $P$의 고윳값인데, (3)에 의해 $0$도 $1$도 아닌 실수는 고윳값이 아닙니다. 실제로 $Pv = 2v$이면 $2v = P(Pv) = 4v$가 되어 $v = 0_V$입니다.
:::

:::check[표준내적을 준 $\mathbb{R}^2$에서 $E = \operatorname{span}(e_1)$이면 $[P]$는 무엇이고, (5)의 세 식은 어떻게 확인되는가?]
$e_1$은 단위벡터이므로 (4)에서 $U$는 열이 $e_1$ 하나인 $2 \times 1$ 행렬이고, $[P] = UU^T = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$입니다. 이 행렬은 전치해도 같고, 제곱하면 $(1, 1)$ 성분이 $1 \cdot 1 + 0 \cdot 0 = 1$, 나머지 성분이 $0$이어서 그대로입니다. $I_2 - [P] = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$이고, $E^\perp = \operatorname{span}(e_2)$이므로 이것은 (4)를 $e_2$에 쓴 행렬, 곧 $[\operatorname{proj}_{E^\perp}]$와 같습니다.
:::
