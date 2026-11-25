---
title: 이차형식의 직교 대각화
title_en: Orthogonal Diagonalization of Quadratic Forms
aliases: [주축 정리, 주축정리, principal axes theorem, orthogonal diagonalization of a quadratic form]
kind: theorem
field: linear-algebra
msc: ["15A63", "15A18"]
level: undergrad
summary: 대칭행렬 A 를 직교행렬 Q 와 대각행렬 diag(λ₁, …, λₙ) 로 A = QDQᵀ 로 쓰면, 새 변수 y = Qᵀx 에서 이차형식은 λ₁y₁² + ⋯ + λₙyₙ² 이 되고 y 는 Q 의 열들로 된 정규직교 기저에 관한 x 의 좌표이다. 단위벡터에서 q_A 가 갖는 값은 정확히 가장 작은 고윳값과 가장 큰 고윳값 사이의 실수 전체이고, 두 끝값은 정확히 그 고윳값의 단위 고유벡터에서 나온다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, square-root-exists, power-of-a-real-number, vector-space, vector-space-basic-properties, finite-sum-of-vectors, standard-basis, matrix, matrix-vector-product, matrix-product, matrix-product-properties, transpose, diagonalizable, eigenvalue-and-eigenvector, upper-bound-and-supremum, inner-product-space, standard-inner-product, norm-in-inner-product-space, orthonormal-basis, self-adjoint-map, orthogonal-matrix, rayleigh-quotient, semidefinite-cauchy-schwarz, symmetric-matrix-has-eigenvalue, spectral-theorem, quadratic-form]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 7장 2절 Diagonalization of quadratic forms 의 소절 2.1 Orthogonal diagonalization 과 그 뒤의 기하적 설명, pp.200–201; 7장 4절 소절 4.2 Minimax characterization of eigenvalues 의 Remark, p.211
    checked: original
    note: "(1)은 출처 소절 2.1(pp.200–201)의 'A = UDU* = UDU⁻¹ 로 쓰면 D = U*AU 이고, 변수 y = U⁻¹x 에서 이차형식은 대각행렬을 갖는다'와 그 뒤의 'y₁, …, yₙ 은 새 기저 u₁, …, uₙ 에 관한 x 의 좌표로 볼 수 있다'를 실수 행렬로 진술한 것이다. 출처는 이 계산을 문단으로 설명할 뿐 정리 번호를 붙이지 않는다. '주축 정리(principal axes theorem)'라는 이름은 출처에 나오지 않는다(source-grep 으로 책 전체에서 'principal axes' 0건, 'principal' 3건은 일반 낱말과 6장 4절 타원체의 축을 말하는 곳이다). 출처의 말은 'orthogonal diagonalization' 이고 한국어 이름은 그것을 따랐다. (2)의 (i)의 부등식과 등호는 대칭행렬의 실고윳값 항목의 (4)를 이차형식으로 다시 적은 것이다. 출처 소절 4.2 의 Remark(p.211)는 단위구 위에서 이차형식의 최댓값과 최솟값이 가장 큰 고윳값과 가장 작은 고윳값이라는 것이 '쉽게 보인다'고 적는다. 같은 소절의 Theorem 4.3 의 증명(p.212)도 '자기수반행렬 B 에서 단위구 위의 (Bx, x) 의 최댓값과 최솟값은 가장 큰 고윳값과 가장 작은 고윳값'이라고 적는다. (2)의 (ii)의 '끝값은 정확히 단위 고유벡터에서 나온다'와 (iii)의 '단위벡터에서의 값이 두 끝값 사이의 실수 전체'는 출처에 명제로 없다(source-grep 으로 책 전체에서 'unit sphere' 3건(p.211 두 곳, p.212), 'attain' 4건(p.178 연습문제 3.5 의 두 줄, p.211 두 곳), 'maximum and minimum' 8건(pp.211–212), 'all values' 0건, 'every value' 0건, 'intermediate' 1건(p.195, 행렬식에 쓴 사잇값 정리). p.211–212 의 것은 최댓값·최솟값의 존재와 값에 관한 것이고, 6장 3절 연습문제 3.5(p.178)는 행렬 (2 3; 0 2) 에서 단위벡터 위의 ‖Ax‖ 의 최댓값·최솟값과 그것이 닿는 벡터를 특잇값 분해로 구하라고 하는데, ‖Ax‖² = q_{AᵀA}(x) 이므로 이것은 (2)의 (ii)를 한 행렬에서 묻는 것과 같은 물음이다. 7장 1절, 2절, 4절의 연습문제 1.1–1.4, 2.1–2.2, 4.1–4.6 을 처음부터 읽었고 이 진술을 묻는 것은 없다). (iii)의 증명에서 두 고유벡터의 일차결합을 잡는 것은 이 사이트가 썼다. 출처 p.201 의 예는 집합 {x : (Ax, x) = 1} 이 타원이라고 설명하는데, 이 사이트에는 타원의 정의가 없어 직관에서만 말한다. 예시 '고윳값이 20 과 −5 인 2 × 2 대칭행렬'의 행렬과 확인 질문 '$A = \\begin{pmatrix} -1 & 0 \\\\ 0 & 4 \\end{pmatrix}$일 때 $q_A(u) = 0$인 단위벡터 $u$를 하나 찾아라.'는 출처 소절 2.1 의 예(A = (2 1; 1 2) 를 직교 대각화하는 것, p.201)와 같은 종류의 계산이다. 반례 '대각성분이 고윳값의 범위의 끝이 아닐 수 있는 예'의 '대각성분은 범위 안에 있다'는 출처 7장 4절 Corollary 4.4(p.212, 고윳값의 끼임)를 1 × 1 소행렬 (a₁,₁) 에 쓴 것과 같은 결론이다. 확인 질문 '$3 \\times 3$ 대칭행렬 $A$의 고윳값이 $2$ 하나뿐이면 $q_A(x)$는 무엇인가?'는 출처 6장 2절 연습문제 2.1 의 h)(p.169)와 같은 계열의 물음이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(고윳값 판정과 2 × 2 판정 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$n$이 자연수이고 $\mathbb{R}^n$에는 [[standard-inner-product|표준내적]]을 주며, $A$가 $n \times n$ [[self-adjoint-map|대칭행렬]]이라 하자. 이차형식 $q_A$는 [[quadratic-form|쌍선형 형식과 이차형식]]의 것, 직교행렬은 [[orthogonal-matrix|직교행렬]]의 것, $\operatorname{diag}$는 [[diagonalizable|대각화 가능]]의 것, 노름과 단위벡터는 [[norm-in-inner-product-space|내적공간의 노름]]의 것, 고윳값과 고유벡터는 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 것이다. [[spectral-theorem|실스펙트럼 정리]]의 (3)에 의해 $A = Q D Q^T$인 $n \times n$ 직교행렬 $Q$와 대각행렬 $D$가 있다. 이런 $Q$와 $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$을 하나 잡고, $Q$의 열을 $\mathbf{q}_1, \dots, \mathbf{q}_n$이라 하자. 레일리 몫의 값의 집합 $\mathcal{R}_A$는 [[rayleigh-quotient|레일리 몫]]의 것이고, $\lambda_{\max} = \sup \mathcal{R}_A$, $\lambda_{\min} = \inf \mathcal{R}_A$로 쓴다. [[symmetric-matrix-has-eigenvalue|대칭행렬의 실고윳값]]의 (2)와 (3)에 의해 $\lambda_{\max}$는 $A$의 가장 큰 고윳값이고 $\lambda_{\min}$은 가장 작은 고윳값이다.

1. (새 변수) $x \in \mathbb{R}^n$이고 $y = Q^T x$라 하자.
   - (i) 모든 $k \in \{1, \dots, n\}$에서 $y_k = \langle x, \mathbf{q}_k \rangle$이고, $x = Qy = y_1 \mathbf{q}_1 + \cdots + y_n \mathbf{q}_n$이다. 곧 $y_1, \dots, y_n$은 $\mathbb{R}^n$의 정규직교 기저 $\mathbf{q}_1, \dots, \mathbf{q}_n$에 관한 $x$의 좌표이다. 또 $\lVert y \rVert = \lVert x \rVert$이다.
   - (ii) $q_A(x) = q_D(y) = \lambda_1 y_1^2 + \cdots + \lambda_n y_n^2$이다. 곧
     $$
     \begin{aligned}
     q_A(x) &= \lambda_1 \langle x, \mathbf{q}_1 \rangle^2 + \cdots \\
     &\quad + \lambda_n \langle x, \mathbf{q}_n \rangle^2
     \end{aligned}
     $$
     이다(오른쪽은 $k$번째 항이 $\lambda_k \langle x, \mathbf{q}_k \rangle^2$인 길이 $n$인 실수의 열의 합).
   - (iii) 거꾸로 모든 $y \in \mathbb{R}^n$에서 $q_A(Qy) = q_D(y)$이다. 또 모든 $k$에서 $q_A(\mathbf{q}_k) = \lambda_k$이다.
2. (값의 범위)
   - (i) 모든 $x \in \mathbb{R}^n$에서 $\lambda_{\min} \lVert x \rVert^2 \le q_A(x) \le \lambda_{\max} \lVert x \rVert^2$이다. 모든 $k$에서 $\lambda_{\min} \le \lambda_k \le \lambda_{\max}$이다.
   - (ii) 단위벡터 $u$에 대하여, $q_A(u) = \lambda_{\max}$인 것은 정확히 $u$가 $\lambda_{\max}$에 속하는 $A$의 고유벡터일 때이고, $q_A(u) = \lambda_{\min}$인 것은 정확히 $u$가 $\lambda_{\min}$에 속하는 $A$의 고유벡터일 때이다.
   - (iii) 단위벡터에서의 $q_A$의 값의 집합 $U_A = \{q_A(u) : u \in \mathbb{R}^n,\ \lVert u \rVert = 1\}$(이 항목에서 쓰는 이름)은 $\lambda_{\min} \le t \le \lambda_{\max}$인 실수 $t$ 전체의 집합이다. 곧 $U_A = \{t \in \mathbb{R} : \lambda_{\min} \le t \le \lambda_{\max}\}$이다. 이 집합은 레일리 몫의 값의 집합 $\mathcal{R}_A$와 같고, 최댓값은 $\lambda_{\max}$, 최솟값은 $\lambda_{\min}$이다([[upper-bound-and-supremum|상계와 상한]]의 $\max$, $\min$).
:::

:::english
Let $n$ be a natural number, give $\mathbb{R}^n$ the standard inner product, and let $A$ be an $n \times n$ symmetric matrix. The quadratic form $q_A$ is that of the entry on bilinear and quadratic forms, orthogonal matrices are those of the entry on orthogonal matrices, $\operatorname{diag}$ is that of the entry on diagonalizability, norms and unit vectors are those of the entry on the norm in an inner product space, and eigenvalues and eigenvectors are those of the entry on eigenvalues and eigenvectors. By item (3) of the real spectral theorem there are an $n \times n$ orthogonal matrix $Q$ and a diagonal matrix $D$ with $A = Q D Q^T$. Fix such $Q$ and $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$, and let $\mathbf{q}_1, \dots, \mathbf{q}_n$ be the columns of $Q$. The set $\mathcal{R}_A$ of values of the Rayleigh quotient is that of the entry on the Rayleigh quotient, and we write $\lambda_{\max} = \sup \mathcal{R}_A$, $\lambda_{\min} = \inf \mathcal{R}_A$. By items (2) and (3) of the entry on real eigenvalues of symmetric matrices, $\lambda_{\max}$ is the largest eigenvalue of $A$ and $\lambda_{\min}$ is the smallest.

1. (New variables) Let $x \in \mathbb{R}^n$ and $y = Q^T x$.
   - (i) For every $k \in \{1, \dots, n\}$, $y_k = \langle x, \mathbf{q}_k \rangle$, and $x = Qy = y_1 \mathbf{q}_1 + \cdots + y_n \mathbf{q}_n$. That is, $y_1, \dots, y_n$ are the coordinates of $x$ with respect to the orthonormal basis $\mathbf{q}_1, \dots, \mathbf{q}_n$ of $\mathbb{R}^n$. Moreover $\lVert y \rVert = \lVert x \rVert$.
   - (ii) $q_A(x) = q_D(y) = \lambda_1 y_1^2 + \cdots + \lambda_n y_n^2$. That is,
     $$
     \begin{aligned}
     q_A(x) &= \lambda_1 \langle x, \mathbf{q}_1 \rangle^2 + \cdots \\
     &\quad + \lambda_n \langle x, \mathbf{q}_n \rangle^2
     \end{aligned}
     $$
     (the right side is the sum of the sequence of real numbers of length $n$ whose $k$th term is $\lambda_k \langle x, \mathbf{q}_k \rangle^2$).
   - (iii) Conversely, $q_A(Qy) = q_D(y)$ for every $y \in \mathbb{R}^n$. Moreover $q_A(\mathbf{q}_k) = \lambda_k$ for every $k$.
2. (Range of values)
   - (i) For every $x \in \mathbb{R}^n$, $\lambda_{\min} \lVert x \rVert^2 \le q_A(x) \le \lambda_{\max} \lVert x \rVert^2$. For every $k$, $\lambda_{\min} \le \lambda_k \le \lambda_{\max}$.
   - (ii) For a unit vector $u$, $q_A(u) = \lambda_{\max}$ exactly when $u$ is an eigenvector of $A$ belonging to $\lambda_{\max}$, and $q_A(u) = \lambda_{\min}$ exactly when $u$ is an eigenvector of $A$ belonging to $\lambda_{\min}$.
   - (iii) The set $U_A = \{q_A(u) : u \in \mathbb{R}^n,\ \lVert u \rVert = 1\}$ of values of $q_A$ at unit vectors (a name used in this entry) is the set of all real numbers $t$ with $\lambda_{\min} \le t \le \lambda_{\max}$. That is, $U_A = \{t \in \mathbb{R} : \lambda_{\min} \le t \le \lambda_{\max}\}$.
     This set equals the set $\mathcal{R}_A$ of values of the Rayleigh quotient; its maximum is $\lambda_{\max}$ and its minimum is $\lambda_{\min}$ ($\max$, $\min$ of the entry on upper bounds and suprema).
:::

## 직관

이차형식 $q_A(x)$의 식에는 보통 $x_1 x_2$ 같은 섞인 항이 있어서, $x$를 어느 쪽으로 움직이면 값이 커지는지 한눈에 보이지 않습니다. 좌표축을 $A$의 정규직교 고유벡터 $\mathbf{q}_1, \dots, \mathbf{q}_n$으로 돌려 놓고 그 축에 관한 좌표 $y_k = \langle x, \mathbf{q}_k \rangle$로 다시 쓰면, 섞인 항이 모두 사라지고 $q_A(x) = \lambda_1 y_1^2 + \cdots + \lambda_n y_n^2$이 됩니다. 이 정리는 주축 정리(principal axes theorem)라고도 부릅니다. 지도를 볼 때 길이 비스듬히 나 있으면 길 방향으로 지도를 돌려 놓고 읽는 것과 같습니다. 비유가 맞는 곳은 지도를 돌려도 거리가 그대로라는 것, 곧 (1)의 (i)의 $\lVert y \rVert = \lVert x \rVert$입니다. 비유와 달리 $Q$는 거울에 비춘 것처럼 방향을 뒤집을 수도 있습니다(직교행렬의 행렬식은 $1$이거나 $-1$입니다).

$n = 2$에서 $\lambda_1 > 0 > \lambda_2$이면 $q_A$는 $\mathbf{q}_1$의 $0$이 아닌 배에서는 양수, $\mathbf{q}_2$의 $0$이 아닌 배에서는 음수입니다. 두 고윳값이 모두 양수이면 집합 $\{x : q_A(x) = 1\}$은 교과서에서 타원이라 부르는 곡선이 되는데, 이 사이트는 타원을 정의하지 않았으므로 여기서는 값의 부호와 크기만 말합니다.

(2)는 단위벡터에서 $q_A$의 값이 가장 작은 고윳값과 가장 큰 고윳값 사이에 있고, 그 사이의 값을 하나도 빠짐없이 갖는다는 것입니다. (1)의 식에서 $y_1^2 + \cdots + y_n^2 = 1$이면 $q_A$의 값은 $\lambda_k$들을 $y_k^2$의 비율로 섞은 것이라 그 사이에 있습니다. 거꾸로 사이의 값 $t$는 가장 큰 고윳값과 가장 작은 고윳값의 두 고유벡터를 알맞은 비율로 섞어 얻습니다. $A = cI_n$이면 두 끝값이 같아서 값은 $c$ 하나뿐입니다.

## 증명

:::idea
(1)은 이차형식의 변수 바꾸기 $q_A(Qy) = q_{Q^T A Q}(y)$와 $Q^T A Q = D$이다. (2)의 사이의 값은 $\lambda_{\max}$와 $\lambda_{\min}$에 속하는 단위 고유벡터 $v$, $w$를 잡아 $u = cv + sw$ ($c^2 + s^2 = 1$)에서 얻는다. 두 고윳값이 다르면 $v \perp w$이다.
:::

:::hint
$Q$가 직교행렬이면 $Q^T Q = I_n$이고 $Q Q^T = I_n$입니다. $Q^T A Q = Q^T Q D Q^T Q$를 정리해 보세요.
:::

:::hint
$q_A(u) = \lambda_{\max}$이면 $B = \lambda_{\max} I_n - A$는 모든 $x$에서 $\langle Bx, x \rangle \ge 0$이고 $\langle Bu, u \rangle = 0$입니다.
:::

:::proof
아래에서 (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것, (V1)–(V8)은 [[vector-space|벡터공간]]의 것, (B1)–(B12)는 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 것이고, 순서의 성질은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호로, 내적의 조건과 성질은 [[inner-product-space|내적과 내적공간]]의 번호로, 노름의 성질은 [[norm-in-inner-product-space|내적공간의 노름]]의 번호로, 표준내적의 성질은 [[standard-inner-product|ℝⁿ 의 표준내적]]의 번호로, 이차형식의 성질은 [[quadratic-form|쌍선형 형식과 이차형식]]의 번호로, 직교행렬의 성질은 [[orthogonal-matrix|직교행렬]]의 번호로 인용한다. 표준내적의 (1)에 의해 표준내적은 내적이다. 실수의 제곱 $c^2$은 [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 $cc$이다.

**(1).** 직교행렬의 (2)의 (가), (나)에 의해 $Q^T Q = I_n$이고 $Q Q^T = I_n$이다.

(i) 표준내적의 (3)을 $Q$에 쓰면 $y_k = (Q^T x)_k = \langle \mathbf{q}_k, x \rangle$이고, 내적의 조건 (i)에 의해 이것은 $\langle x, \mathbf{q}_k \rangle$이다. [[matrix-product|행렬의 곱]]의 (1)과 [[matrix-vector-product|행렬과 벡터의 곱]]의 (3)에 의해 $Qy = Q(Q^T x) = (Q Q^T)x = I_n x = x$이고, 행렬과 벡터의 곱의 정의에 의해 $Qy = y_1 \mathbf{q}_1 + \cdots + y_n \mathbf{q}_n$이다. [[spectral-theorem|실스펙트럼 정리]]의 (3)에 의해 $\mathbf{q}_1, \dots, \mathbf{q}_n$은 $\mathbb{R}^n$의 정규직교 기저이므로, [[orthonormal-basis|정규직교 기저]]의 (2)에 의해 $x$의 이 기저에 관한 좌표는 $\langle x, \mathbf{q}_1 \rangle, \dots, \langle x, \mathbf{q}_n \rangle$, 곧 $y_1, \dots, y_n$이다. 직교행렬의 (4)에 의해 $Q^T$도 직교행렬이므로 직교행렬의 (2)의 (아)에 의해 $\lVert Q^T x \rVert = \lVert x \rVert$이다.

(iii) [[matrix-product-properties|행렬 곱의 성질]]의 (1), (4)에 의해
$$
\begin{aligned}
Q^T A Q &= (Q^T Q) D (Q^T Q) \\
&= I_n D I_n = D
\end{aligned}
$$
이다. 이차형식의 (5)를 $m = n$, $S = Q$에 쓰면 모든 $y$에서 $q_A(Qy) = q_{Q^T A Q}(y) = q_D(y)$이다. [[standard-basis|표준기저]]의 $e_k$에 대하여 행렬과 벡터의 곱의 (3)에 의해 $Qe_k = \mathbf{q}_k$이므로, 이차형식의 (6)에 의해 $q_A(\mathbf{q}_k) = q_D(e_k) = \lambda_k$이다.

(ii) (i)에 의해 $x = Qy$이므로 (iii)에 의해 $q_A(x) = q_D(y)$이고, 이차형식의 (6)에 의해 $q_D(y) = \lambda_1 y_1^2 + \cdots + \lambda_n y_n^2$이다. (i)의 $y_k = \langle x, \mathbf{q}_k \rangle$를 넣으면 둘째 식이 된다.

**(2)의 (i).** [[symmetric-matrix-has-eigenvalue|대칭행렬의 실고윳값]]의 (4)에 의해 모든 $x$에서 $\lambda_{\min} \langle x, x \rangle \le \langle Ax, x \rangle \le \lambda_{\max} \langle x, x \rangle$이고, 노름의 (2)에 의해 $\langle x, x \rangle = \lVert x \rVert^2$이다. 실스펙트럼 정리의 (3)에 의해 각 $\lambda_k$는 $A$의 고윳값이므로 대칭행렬의 실고윳값의 (4)에 의해 $\lambda_{\min} \le \lambda_k \le \lambda_{\max}$이다.

**(2)의 (ii).** $u$가 단위벡터이면 노름의 (4)에 의해 $\langle u, u \rangle = 1$이고 $u \ne 0$이다. $u$가 $\lambda_{\max}$에 속하는 고유벡터이면 대칭행렬의 실고윳값의 (4)에 의해 $q_A(u) = \lambda_{\max} \langle u, u \rangle = \lambda_{\max}$이다((K4)).

거꾸로 $q_A(u) = \lambda_{\max}$라 하자. [[rayleigh-quotient|레일리 몫]]의 (4)에 의해 $B = \lambda_{\max} I_n - A$는 대칭행렬이고 모든 $x$에서 $\langle Bx, x \rangle = \lambda_{\max} \langle x, x \rangle - \langle Ax, x \rangle$이다. (i)과 순서의 성질 (3)의 (i)에 의해 모든 $x$에서 $0 \le \langle Bx, x \rangle$이고, $\langle Bu, u \rangle = \lambda_{\max} - \lambda_{\max} = 0$이다. [[semidefinite-cauchy-schwarz|⟨Bx, x⟩ ≥ 0 인 대칭행렬의 코시–슈바르츠 부등식]]의 (2)에 의해 $Bu = 0$이다. 레일리 몫의 (4)에 의해 $Bu = \lambda_{\max} u - Au$이므로 (B12)에 의해 $Au = \lambda_{\max} u$이고, $u \ne 0$이므로 $u$는 $\lambda_{\max}$에 속하는 고유벡터이다.

$\lambda_{\min}$의 경우: 레일리 몫의 (4)에 의해 $-A$는 대칭이고 $\sup \mathcal{R}_{-A} = -\lambda_{\min}$이며, 이차형식의 (3)에 의해 $q_{-A}(u) = -q_A(u)$이다. 또 모든 $v$에서 $(-A)v = -(Av)$이므로, (B9), (B8)과 (B2)의 유일성에 의해 실수 $\mu$에 대하여 $(-A)v = (-\mu)v$인 것은 정확히 $Av = \mu v$일 때이다. 곧 $v$가 $-\mu$에 속하는 $-A$의 고유벡터인 것은 정확히 $v$가 $\mu$에 속하는 $A$의 고유벡터일 때이다. 앞 문단을 $-A$에 쓰면, $q_A(u) = \lambda_{\min}$인 것은 정확히 $q_{-A}(u) = -\lambda_{\min}$일 때((K9)의 $-(-a) = a$), 곧 정확히 $u$가 $-\lambda_{\min}$에 속하는 $-A$의 고유벡터일 때, 곧 정확히 $u$가 $\lambda_{\min}$에 속하는 $A$의 고유벡터일 때이다.

**(2)의 (iii).** 오른쪽 집합을 $I$라 하자. 레일리 몫의 (1)에 의해 $\mathcal{R}_A = \{\langle Au, u \rangle : \lVert u \rVert = 1\} = U_A$이다.

$U_A \subseteq I$: $u$가 단위벡터이면 (i)과 $\lVert u \rVert^2 = 1$에 의해 $\lambda_{\min} \le q_A(u) \le \lambda_{\max}$이다.

$I \subseteq U_A$: 대칭행렬의 실고윳값의 (2), (3)에 의해 $\lambda_{\max}$와 $\lambda_{\min}$은 고윳값이므로, 고윳값의 정의에 의해 각각에 속하는 고유벡터가 있다. 그 둘을 노름의 (4)로 정규화한 것을 $v$, $w$라 하자. 고유벡터의 $0$이 아닌 배는 같은 고윳값에 속하는 고유벡터이므로(행렬과 벡터의 곱의 (2), (B6), (V6), (K1)) $v$는 $\lambda_{\max}$에, $w$는 $\lambda_{\min}$에 속하는 단위 고유벡터이다. $t \in I$라 하자.

경우 1: $\lambda_{\min} = \lambda_{\max}$. 순서의 성질 (1)의 (ii)에 의해 $t = \lambda_{\max}$이고, (ii)에 의해 $q_A(v) = \lambda_{\max} = t$이므로 $t \in U_A$이다.

경우 2: $\lambda_{\min} \ne \lambda_{\max}$. 대칭행렬의 실고윳값의 (4)에 의해 $\lambda_{\min} \le \lambda_{\max}$이므로 $\lambda_{\min} < \lambda_{\max}$이고, $\delta = \lambda_{\max} - \lambda_{\min}$은 양수이다(순서의 성질 (3)의 (i)). 먼저 $\langle v, w \rangle = 0$이다. [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (2)의 (iii)과 내적의 (1)에 의해 $\lambda_{\max} \langle v, w \rangle = \langle Av, w \rangle = \langle v, Aw \rangle = \lambda_{\min} \langle v, w \rangle$이므로 $\delta \langle v, w \rangle = 0$이고((K12)의 (i), (K12)의 (v)), $\delta \ne 0$이므로 (K10)에 의해 $\langle v, w \rangle = 0$이다.

$p = (t - \lambda_{\min})\delta^{-1}$로 두자. 순서의 성질 (3)의 (i)과 (2)의 (ii)에 의해 $0 \le t - \lambda_{\min} \le \delta$이고, 세 변에 $0 < \delta^{-1}$(순서의 성질 (6)의 (i))을 곱하면 순서의 성질 (4)의 (iii)과 (K8)의 (iii)에 의해 $0 \le p \le 1$이다. 따라서 $0 \le 1 - p$이고, [[square-root-exists|제곱근의 존재]]의 (1)에 의해 $c = \sqrt{p}$와 $s = \sqrt{1 - p}$가 있어 $cc = p$, $ss = 1 - p$이다. $u = cv + sw$라 하자. 내적의 (1)과 $\langle v, v \rangle = \langle w, w \rangle = 1$, $\langle v, w \rangle = \langle w, v \rangle = 0$에 의해
$$
\begin{aligned}
\langle u, u \rangle &= (cc)\langle v, v \rangle + (cs)\langle v, w \rangle \\
&\quad + (sc)\langle w, v \rangle + (ss)\langle w, w \rangle \\
&= p + (1 - p) = 1
\end{aligned}
$$
이므로 노름의 (4)에 의해 $u$는 단위벡터이다. 행렬과 벡터의 곱의 (2)에 의해 $Au = c(Av) + s(Aw) = (c\lambda_{\max})v + (s\lambda_{\min})w$이므로((V6), (K1)), 같은 계산으로
$$
\begin{aligned}
q_A(u) &= (cc)\lambda_{\max} + (ss)\lambda_{\min} \\
&= p\lambda_{\max} + (1 - p)\lambda_{\min} \\
&= \lambda_{\min} + p\delta = t
\end{aligned}
$$
이다((K1)–(K4), (K12)의 (i), (K8)의 (iii)). 따라서 $t \in U_A$이다.

최댓값과 최솟값: $\lambda_{\max}$, $\lambda_{\min}$은 $I$의 원소이고($\lambda_{\min} \le \lambda_{\max}$, 순서의 성질 (1)의 (iv)) $I$의 모든 원소 $t$는 $\lambda_{\min} \le t \le \lambda_{\max}$이므로, 상계와 상한의 최댓값·최솟값의 정의에 의해 $\max U_A = \lambda_{\max}$, $\min U_A = \lambda_{\min}$이다. $\blacksquare$
:::

## 예시와 반례

:::example[고윳값이 20 과 −5 인 2 × 2 대칭행렬]
$$
A = \begin{pmatrix} 4 & 12 \\ 12 & 11 \end{pmatrix}, \quad
Q = \frac{1}{5}\begin{pmatrix} 3 & 4 \\ 4 & -3 \end{pmatrix}
$$
이라 합시다. $A(3, 4) = (60, 80) = 20(3, 4)$이고 $A(4, -3) = (-20, 15) = -5(4, -3)$입니다. $Q$의 두 열 $\mathbf{q}_1 = 5^{-1}(3, 4)$, $\mathbf{q}_2 = 5^{-1}(4, -3)$은 길이가 $1$이고 $\langle \mathbf{q}_1, \mathbf{q}_2 \rangle = 25^{-1}(12 - 12) = 0$이므로 $Q$는 직교행렬입니다. 두 열이 고유벡터이므로 $AQ = Q \operatorname{diag}(20, -5)$이고, $Q^{-1} = Q^T$이므로 $A = Q \operatorname{diag}(20, -5) Q^T$입니다.

새 변수는 $y_1 = \langle x, \mathbf{q}_1 \rangle = 5^{-1}(3x_1 + 4x_2)$, $y_2 = \langle x, \mathbf{q}_2 \rangle = 5^{-1}(4x_1 - 3x_2)$이고, (1)에 의해
$$
\begin{aligned}
q_A(x) &= 4x_1^2 + 24 x_1 x_2 + 11 x_2^2 \\
&= 20 y_1^2 - 5 y_2^2
\end{aligned}
$$
입니다. 직접 펼쳐 보면 $20 y_1^2 = 25^{-1}(180 x_1^2 + 480 x_1 x_2 + 320 x_2^2)$, $5 y_2^2 = 25^{-1}(80 x_1^2 - 120 x_1 x_2 + 45 x_2^2)$이고 그 차는 $25^{-1}(100 x_1^2 + 600 x_1 x_2 + 275 x_2^2)$이어서 맞습니다. (2)에 의해 단위벡터에서 $q_A$의 값은 정확히 $-5$ 이상 $20$ 이하인 실수 전체이고, $q_A(e_1) = 4$와 $q_A(e_2) = 11$은 그 사이에 있습니다.
:::

:::counterexample[대각성분이 고윳값의 범위의 끝이 아닐 수 있는 예]
대각성분 $a_{k,k} = q_A(e_k)$는 (2)의 범위 안에 있지만, 가장 큰 대각성분이 가장 큰 고윳값일 필요는 없습니다. 위 예시에서 대각성분은 $4$와 $11$이고 가장 큰 고윳값은 $20$, 가장 작은 고윳값은 $-5$입니다. $q_A(e_2) = 11 < 20$이므로 (2)의 (ii)에 의해 $e_2$는 $20$에 속하는 고유벡터가 아니고, 실제로 $Ae_2 = (12, 11)$은 $e_2$의 배가 아닙니다. 대각성분이 고윳값과 같아지는 것은 예컨대 $A$가 대각행렬일 때입니다.
:::

## 확인 질문

:::check[$A = \begin{pmatrix} -1 & 0 \\ 0 & 4 \end{pmatrix}$일 때 $q_A(u) = 0$인 단위벡터 $u$를 하나 찾아라.]
$A$는 대각행렬이므로 $Q = I_2$로 둘 수 있고 $\lambda_{\max} = 4$, $\lambda_{\min} = -1$이며 $v = e_2$, $w = e_1$이 단위 고유벡터입니다. (2)의 (iii)의 증명대로 $p = (0 - (-1)) \cdot 5^{-1} = 5^{-1}$로 두면 $u = \sqrt{5^{-1}}\, e_2 + \sqrt{4 \cdot 5^{-1}}\, e_1 = (2/\sqrt{5}, 1/\sqrt{5})$입니다. 실제로 $\lVert u \rVert^2 = 4/5 + 1/5 = 1$이고 $q_A(u) = -4/5 + 4 \cdot 1/5 = 0$입니다.
:::

:::check[$3 \times 3$ 대칭행렬 $A$의 고윳값이 $2$ 하나뿐이면 $q_A(x)$는 무엇인가?]
[[symmetric-matrix-has-eigenvalue|대칭행렬의 실고윳값]]의 (4)에 의해 고윳값이 하나뿐인 대칭행렬은 $cI_3$ 꼴이고, $2$가 고윳값이므로 $A = 2I_3$입니다. 따라서 $q_A(x) = 2\langle x, x \rangle = 2(x_1^2 + x_2^2 + x_3^2)$입니다. 이때는 모든 직교행렬 $Q$가 $A = Q(2I_3)Q^T$를 만족하므로, (1)의 새 변수는 어느 정규직교 기저로 잡아도 $q_A(x) = 2(y_1^2 + y_2^2 + y_3^2)$입니다.
:::
