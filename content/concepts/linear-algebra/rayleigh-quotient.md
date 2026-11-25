---
title: 레일리 몫
title_en: Rayleigh Quotient
aliases: [Rayleigh quotient]
kind: definition
field: linear-algebra
msc: ["15A18", "15A42"]
level: undergrad
summary: n × n 대칭행렬 A 와 영벡터가 아닌 x 에 대해 레일리 몫 ρ_A(x) 는 ⟨Ax, x⟩ 를 ⟨x, x⟩ 로 나눈 수이다. x 의 0 이 아닌 배에서 값이 같고, 단위벡터에서는 ⟨Au, u⟩ 이며, 고유벡터에서는 그 고윳값이다. 값의 집합은 공집합이 아니고 유계이므로 최소상계 성질로 상한과 하한을 갖는다.
requires: [set, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, vector-space, vector-space-basic-properties, finite-sum-of-vectors, standard-basis, matrix, matrix-vector-product, eigenvalue-and-eigenvector, upper-bound-and-supremum, least-upper-bound-property, infimum-exists, inner-product-space, standard-inner-product, norm-in-inner-product-space, self-adjoint-map, bound-for-matrix-times-vector]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 7장 4절, 4.2 Minimax characterization of eigenvalues 의 Remark, p.211, 같은 소절의 Theorem 4.3 과 그 증명, pp.211–212; 6장 2절 Theorem 2.1 뒤의 고윳값이 실수라는 독립 증명, pp.166–167
    checked: original
    note: "'레일리 몫'이라는 이름과 몫 ⟨Ax, x⟩⟨x, x⟩⁻¹ 은 출처에 나오지 않는다(source-grep 으로 책 전체에서 'Rayleigh' 0건, 'quotient' 0건). 출처는 같은 양을 단위구 {x : ‖x‖ = 1} 위의 (Ax, x) 로만 다룬다. 출처 7장 4.2 의 Remark(p.211)는 단위구 위에서 (Ax, x) 의 최댓값과 최솟값이 왜 있는지 묻고, 단위구의 콤팩트성과 연속함수로 한 번, '이차형식의 단위구 위의 최댓값과 최솟값은 그 행렬의 가장 큰 고윳값과 가장 작은 고윳값'이라는 것으로 한 번 설명한다. 같은 소절 Theorem 4.3 의 증명(p.212)도 '자기수반행렬 B 에서 단위구 위의 (Bx, x) 의 최댓값과 최솟값은 가장 큰 고윳값과 가장 작은 고윳값이고 대각행렬에서 쉽게 확인된다'고 적는다. 이 항목은 콤팩트성을 쓰지 않고, (3)의 상한과 하한의 존재를 프로베니우스 노름으로 한 어림과 최소상계 성질로 얻는다. (1)의 '단위벡터에서의 값의 집합과 같다'는 출처가 단위구 위의 값만 보는 것과 이 항목의 몫을 잇는 것이다. (2)의 '고유벡터에서는 고윳값'은 출처 6장 2절(p.166)의 고윳값이 실수라는 독립 증명이 Ax = λx 에서 (Ax, x) = λ‖x‖² 를 계산하는 것과 같은 계산이다. 예시 '대각행렬의 레일리 몫'은 출처 p.212 의 '대각행렬에서 쉽게 확인된다'를 3 × 3 대각행렬에서 직접 해 본 것이다. 확인 질문 '$A = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$의 $\\sup \\mathcal{R}_A$와 $\\inf \\mathcal{R}_A$는 무엇인가?'에서 2x₁x₂ 를 (x₁ + x₂)² 와 (x₁ − x₂)² 로 어림하는 것은 출처 7장 2절 2.2.1 의 항등식 (2.1) 4x₁x₂ = (x₁ + x₂)² − (x₁ − x₂)²(p.202)와 같은 발상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(실고윳값 증명 통독, 따름 부등식의 상수 재확인 — 지휘자 지시의 상수가 틀려 작성자가 바로잡았다). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$n$이 자연수이고 $\mathbb{R}^n$에는 [[standard-inner-product|표준내적]]을 주며, $A$가 $n \times n$ [[self-adjoint-map|대칭행렬]]이라 하자. $Ax$는 [[matrix-vector-product|행렬과 벡터의 곱]], $\lVert \cdot \rVert$와 단위벡터는 [[norm-in-inner-product-space|내적공간의 노름]]의 것, $\lVert A \rVert_F$는 [[bound-for-matrix-times-vector|행렬과 벡터의 곱의 어림]]의 프로베니우스 노름이다. 상계, 하계, 유계, 상한, 하한과 $\sup$, $\inf$, $\max$, $\min$은 [[upper-bound-and-supremum|상계와 상한]]의 것이고, $\mathbb{R}$의 부분집합 $E$에 대한 $-E$는 [[infimum-exists|하한의 존재]]의 것이며, 고윳값과 고유벡터는 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 것이다.

$x \in \mathbb{R}^n$이고 $x \ne 0$이면 표준내적의 (1)에 의해 $0 \le \langle x, x \rangle$이고 $\langle x, x \rangle \ne 0$이므로 $0 < \langle x, x \rangle$이다. 실수

$$
\rho_A(x) = \langle Ax, x \rangle \langle x, x \rangle^{-1}
$$

을 $x$에서의 $A$의 **레일리 몫**(Rayleigh quotient)이라 한다. 영벡터에서는 레일리 몫을 정의하지 않는다. 레일리 몫의 값 전체의 집합을

$$
\mathcal{R}_A = \{\rho_A(x) : x \in \mathbb{R}^n,\ x \ne 0\}
$$

로 쓴다. 곧 실수 $c$가 $\mathcal{R}_A$의 원소인 것은 정확히 $c = \rho_A(x)$인 $x \in \mathbb{R}^n$, $x \ne 0$이 있을 때이다. $\mathcal{R}_A$는 이 단원에서 쓰는 이름이다.

다음이 성립한다. $e_1, \dots, e_n$은 [[standard-basis|표준기저]]이다.

1. (스칼라배와 단위벡터) $x \ne 0$이고 $c \ne 0$인 실수이면 $cx \ne 0$이고 $\rho_A(cx) = \rho_A(x)$이다. $u$가 단위벡터이면 $\rho_A(u) = \langle Au, u \rangle$이다. 따라서 $\mathcal{R}_A = \{\langle Au, u \rangle : u \in \mathbb{R}^n,\ \lVert u \rVert = 1\}$이다.
2. (대각성분과 고유벡터) 모든 $k \in \{1, \dots, n\}$에서 $\rho_A(e_k) = a_{k,k}$이다. 특히 $\mathcal{R}_A$는 공집합이 아니다. $x$가 실수 $\lambda$에 속하는 $A$의 고유벡터이면 $\rho_A(x) = \lambda$이다. 따라서 $A$의 모든 고윳값은 $\mathcal{R}_A$의 원소이다.
3. (유계와 상한·하한) $\mathcal{R}_A$의 모든 원소 $c$는 $-\lVert A \rVert_F \le c \le \lVert A \rVert_F$를 만족한다. 따라서 $\mathcal{R}_A$는 공집합이 아니고 유계이며, $\sup \mathcal{R}_A$와 $\inf \mathcal{R}_A$가 있고 $\inf \mathcal{R}_A \le \sup \mathcal{R}_A$이다. 또 모든 $x \in \mathbb{R}^n$에서($x = 0$도 포함하여)
   $$
   \begin{aligned}
   (\inf \mathcal{R}_A) \langle x, x \rangle &\le \langle Ax, x \rangle \\
   &\le (\sup \mathcal{R}_A) \langle x, x \rangle
   \end{aligned}
   $$
   이다.
4. (단위행렬의 배에서 빼기와 부호 바꾸기) $c$가 실수이면 $cI_n - A$와 $-A$는 대칭행렬이고, 모든 $x \in \mathbb{R}^n$에서 $(cI_n - A)x = cx - Ax$, $(-A)x = -(Ax)$이며
   $$
   \begin{aligned}
   &\langle (cI_n - A)x, x \rangle \\
   &= c\langle x, x \rangle - \langle Ax, x \rangle
   \end{aligned}
   $$
   이다. $x \ne 0$이면 $\rho_{cI_n - A}(x) = c - \rho_A(x)$이고 $\rho_{-A}(x) = -\rho_A(x)$이다. 또 $\mathcal{R}_{-A} = -\mathcal{R}_A$이고, $\sup \mathcal{R}_{-A} = -\inf \mathcal{R}_A$, $\inf \mathcal{R}_{-A} = -\sup \mathcal{R}_A$이다.
5. (상한과 하한이 같은 경우) $\inf \mathcal{R}_A = \sup \mathcal{R}_A$인 것은 정확히 $A = cI_n$인 실수 $c$가 있을 때이다. 이때 $\mathcal{R}_A = \{c\}$이고 $\inf \mathcal{R}_A = \sup \mathcal{R}_A = c$이다.
:::

:::english
Let $n$ be a natural number, give $\mathbb{R}^n$ the standard inner product, and let $A$ be an $n \times n$ symmetric matrix. $Ax$ is the matrix-vector product, $\lVert \cdot \rVert$ and unit vectors are those of the entry on the norm in an inner product space, and $\lVert A \rVert_F$ is the Frobenius norm of the entry on the bound for a matrix times a vector. Upper and lower bounds, boundedness, supremum and infimum and $\sup$, $\inf$, $\max$, $\min$ are those of the entry on upper bounds and suprema; for a subset $E$ of $\mathbb{R}$, $-E$ is that of the entry on the existence of infima; eigenvalues and eigenvectors are those of the entry on eigenvalues and eigenvectors.

If $x \in \mathbb{R}^n$ and $x \ne 0$, then $0 \le \langle x, x \rangle$ and $\langle x, x \rangle \ne 0$ by item (1) of the entry on the standard inner product, so $0 < \langle x, x \rangle$. The real number

$$
\rho_A(x) = \langle Ax, x \rangle \langle x, x \rangle^{-1}
$$

is called the **Rayleigh quotient** of $A$ at $x$. The Rayleigh quotient is not defined at the zero vector. The set of all values of the Rayleigh quotient is written

$$
\mathcal{R}_A = \{\rho_A(x) : x \in \mathbb{R}^n,\ x \ne 0\} ;
$$

that is, a real number $c$ belongs to $\mathcal{R}_A$ exactly when there is $x \in \mathbb{R}^n$, $x \ne 0$, with $c = \rho_A(x)$. $\mathcal{R}_A$ is a name used in this unit.

The following hold, where $e_1, \dots, e_n$ is the standard basis.

1. (Scalar multiples and unit vectors) If $x \ne 0$ and $c$ is a nonzero real number, then $cx \ne 0$ and $\rho_A(cx) = \rho_A(x)$. If $u$ is a unit vector, then $\rho_A(u) = \langle Au, u \rangle$. Hence $\mathcal{R}_A = \{\langle Au, u \rangle : u \in \mathbb{R}^n,\ \lVert u \rVert = 1\}$.
2. (Diagonal entries and eigenvectors) For every $k \in \{1, \dots, n\}$, $\rho_A(e_k) = a_{k,k}$. In particular $\mathcal{R}_A$ is nonempty. If $x$ is an eigenvector of $A$ belonging to a real number $\lambda$, then $\rho_A(x) = \lambda$. Hence every eigenvalue of $A$ is an element of $\mathcal{R}_A$.
3. (Boundedness, supremum and infimum) Every element $c$ of $\mathcal{R}_A$ satisfies $-\lVert A \rVert_F \le c \le \lVert A \rVert_F$. Hence $\mathcal{R}_A$ is nonempty and bounded, $\sup \mathcal{R}_A$ and $\inf \mathcal{R}_A$ exist, and $\inf \mathcal{R}_A \le \sup \mathcal{R}_A$. Moreover, for every $x \in \mathbb{R}^n$ (including $x = 0$)
   $$
   \begin{aligned}
   (\inf \mathcal{R}_A) \langle x, x \rangle &\le \langle Ax, x \rangle \\
   &\le (\sup \mathcal{R}_A) \langle x, x \rangle .
   \end{aligned}
   $$
4. (Subtracting from a multiple of the identity, changing sign) If $c$ is a real number, then $cI_n - A$ and $-A$ are symmetric matrices, and for every $x \in \mathbb{R}^n$ we have $(cI_n - A)x = cx - Ax$, $(-A)x = -(Ax)$ and
   $$
   \begin{aligned}
   &\langle (cI_n - A)x, x \rangle \\
   &= c\langle x, x \rangle - \langle Ax, x \rangle .
   \end{aligned}
   $$
   If $x \ne 0$, then $\rho_{cI_n - A}(x) = c - \rho_A(x)$ and $\rho_{-A}(x) = -\rho_A(x)$. Moreover $\mathcal{R}_{-A} = -\mathcal{R}_A$, $\sup \mathcal{R}_{-A} = -\inf \mathcal{R}_A$ and $\inf \mathcal{R}_{-A} = -\sup \mathcal{R}_A$.
5. (Equal supremum and infimum) $\inf \mathcal{R}_A = \sup \mathcal{R}_A$ exactly when there is a real number $c$ with $A = cI_n$. In that case $\mathcal{R}_A = \{c\}$ and $\inf \mathcal{R}_A = \sup \mathcal{R}_A = c$.
:::

## 직관

$\langle Ax, x \rangle$는 $x$를 $A$로 보낸 뒤 원래의 $x$와 얼마나 같은 쪽을 향하는지를 재는 수입니다. 그런데 $x$를 두 배로 늘리면 이 수는 네 배가 됩니다. 길이의 영향을 없애려고 $\langle x, x \rangle$로 나눈 것이 레일리 몫이고, 그래서 (1)처럼 $x$의 방향에만 기대고 길이에는 기대지 않습니다. 경사가 고른 언덕길에서 오른 높이를 걸은 거리로 나눈 기울기가 얼마나 걸었는지와 상관없는 것과 같습니다. 비유가 정의와 맞는 곳은 "같은 방향이면 같은 값"이라는 (1)입니다. 다만 비유와 달리 레일리 몫은 $x$를 $-x$로 뒤집어도 값이 같습니다((1)에서 $c = -1$).

$x$가 고유벡터이면 $Ax = \lambda x$이므로 레일리 몫은 바로 $\lambda$입니다. 그래서 고윳값은 모두 레일리 몫의 값 가운데 있습니다. 거꾸로, 레일리 몫의 값의 집합은 (3)에 의해 위로 유계이므로 실수의 최소상계 성질로 상한이 있습니다. 다음 항목들은 이 상한이 실제로 고윳값이라는 것을 증명합니다. 이 항목 자체는 고윳값이 있다는 것을 말하지 않습니다.

$n = 1$이면 $A$의 성분은 $a_{1,1}$ 하나이고 모든 $x \ne 0$에서 $\rho_A(x) = a_{1,1}$이므로 $\mathcal{R}_A = \{a_{1,1}\}$입니다. 더 일반적으로 (5)에 의해 $\mathcal{R}_A$가 원소 하나뿐인 것은 정확히 $A$가 단위행렬의 배일 때입니다.

## 성질의 증명

:::proof
아래에서 (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것, (V1)–(V8)은 [[vector-space|벡터공간]]의 것, (B1)–(B12)는 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 것이고, 순서의 성질은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호로, 내적의 성질과 조건은 [[inner-product-space|내적과 내적공간]]의 번호로, 노름의 성질은 [[norm-in-inner-product-space|내적공간의 노름]]의 번호로, 표준내적의 성질은 [[standard-inner-product|ℝⁿ 의 표준내적]]의 번호로, 행렬과 벡터의 곱의 성질은 [[matrix-vector-product|행렬과 벡터의 곱]]의 번호로 인용한다. $x \ne 0$이면 앞에서 본 것처럼 $0 < \langle x, x \rangle$이고, 순서의 성질 (6)의 (i)에 의해 $0 < \langle x, x \rangle^{-1}$이다. 또 (K2), (K8)의 (iii), (K4)에 의해 실수 $b$와 $x \ne 0$에서 $(b\langle x, x \rangle)\langle x, x \rangle^{-1} = b$이다. 이것을 (가)라 부른다.

**(1).** $x \ne 0$이고 $c \ne 0$이면 (B6)에 의해 $cx \ne 0$이다. 행렬과 벡터의 곱의 (2)에 의해 $A(cx) = c(Ax)$이고, 내적의 (1)을 두 번 쓰고 (K2)를 쓰면 $\langle A(cx), cx \rangle = \langle c(Ax), cx \rangle = (cc)\langle Ax, x \rangle$, $\langle cx, cx \rangle = (cc)\langle x, x \rangle$이다. (K12)의 (vi)에 의해 $cc \ne 0$이고 $((cc)\langle x, x \rangle)^{-1} = (cc)^{-1}\langle x, x \rangle^{-1}$이므로, (K1), (K2), (K8)의 (iii), (K4)에 의해 $\rho_A(cx) = (cc)(cc)^{-1}\langle Ax, x \rangle \langle x, x \rangle^{-1} = \rho_A(x)$이다.

$u$가 단위벡터이면 노름의 (4)에 의해 $u \ne 0$이고 $\langle u, u \rangle = 1$이다. (K4)에 의해 $1 \cdot 1 = 1$이므로 (K8)의 (iii)에 의해 $1^{-1} = 1$이고, $\rho_A(u) = \langle Au, u \rangle \cdot 1 = \langle Au, u \rangle$이다.

집합의 같음: $c \in \mathcal{R}_A$이면 $c = \rho_A(x)$인 $x \ne 0$이 있다. 노름의 (1)에 의해 $0 < \lVert x \rVert$이고 순서의 성질 (6)의 (i)에 의해 $\lVert x \rVert^{-1} \ne 0$이며, 노름의 (4)에 의해 $u = \lVert x \rVert^{-1} x$는 단위벡터이다. 위에서 보인 두 등식에 의해 $c = \rho_A(x) = \rho_A(u) = \langle Au, u \rangle$이다. 거꾸로 $u$가 단위벡터이면 $u \ne 0$이고 $\langle Au, u \rangle = \rho_A(u) \in \mathcal{R}_A$이다.

**(2).** 행렬과 벡터의 곱의 (3)에 의해 $Ae_k = \mathbf{a}_k$이고, 표준내적의 (2)에 의해 $\langle \mathbf{a}_k, e_k \rangle$는 $\mathbf{a}_k$의 $k$에서의 값, 곧 ([[matrix|행렬]]의 열의 정의에 의해) $a_{k,k}$이며 $\langle e_k, e_k \rangle = 1$이다. 내적의 (2)에 의해 $\langle 0, 0 \rangle = 0$인데 (K4)에 의해 $1 \ne 0$이므로 $e_k \ne 0$이고, (1)에서처럼 $1^{-1} = 1$이므로 $\rho_A(e_k) = a_{k,k}$이다. $n$은 자연수이므로 $1 \in \{1, \dots, n\}$이고 $\rho_A(e_1) \in \mathcal{R}_A$이다.

$x$가 $\lambda$에 속하는 고유벡터이면 고유벡터의 정의에 의해 $Ax = \lambda x$이고 $x \ne 0$이다. 내적의 (1)에 의해 $\langle Ax, x \rangle = \lambda \langle x, x \rangle$이고, (가)에 의해 $\rho_A(x) = \lambda$이다. $\lambda$가 고윳값이면 고윳값의 정의에 의해 $\lambda$에 속하는 고유벡터 $x$가 있으므로 $\lambda = \rho_A(x) \in \mathcal{R}_A$이다.

**(3).** $c \in \mathcal{R}_A$이면 $c = \rho_A(x)$인 $x \ne 0$이 있다. [[bound-for-matrix-times-vector|행렬과 벡터의 곱의 어림]]의 (3)을 $M = A$, $z = x$에 쓰면 $-\lVert A \rVert_F \langle x, x \rangle \le \langle Ax, x \rangle \le \lVert A \rVert_F \langle x, x \rangle$이다. 세 변에 $0 < \langle x, x \rangle^{-1}$을 곱하면 순서의 성질 (4)의 (iii)과 (가), (K9)의 $(-a)b = -(ab)$에 의해 $-\lVert A \rVert_F \le c \le \lVert A \rVert_F$이다. 따라서 $\lVert A \rVert_F$는 $\mathcal{R}_A$의 상계이고 $-\lVert A \rVert_F$는 하계이므로, [[upper-bound-and-supremum|상계와 상한]]의 정의에 의해 $\mathcal{R}_A$는 유계이다. (2)에 의해 공집합이 아니므로 [[least-upper-bound-property|최소상계 성질]] (U)에 의해 $\sup \mathcal{R}_A$가 있고, [[infimum-exists|하한의 존재]]의 (4)에 의해 $\inf \mathcal{R}_A$가 있다. $\rho_A(e_1) \in \mathcal{R}_A$이고 하한은 하계, 상한은 상계이므로 $\inf \mathcal{R}_A \le \rho_A(e_1) \le \sup \mathcal{R}_A$이고, 순서의 성질 (1)의 (v)에 의해 $\inf \mathcal{R}_A \le \sup \mathcal{R}_A$이다.

이차식의 어림: $x \ne 0$이면 $\rho_A(x) \in \mathcal{R}_A$이므로 $\inf \mathcal{R}_A \le \rho_A(x) \le \sup \mathcal{R}_A$이다. (K2), (K8)의 (iii), (K4)에 의해 $\rho_A(x) \langle x, x \rangle = \langle Ax, x \rangle$이므로, 세 변에 $0 \le \langle x, x \rangle$를 곱하면 순서의 성질 (4)의 (iii)에 의해 원하는 부등식이 나온다. $x = 0$이면 [[finite-sum-of-vectors|벡터의 유한 합]]의 (C3)에 의해 $A0 = 0\mathbf{a}_1 + \cdots + 0\mathbf{a}_n = 0$이고 내적의 (2)에 의해 $\langle A0, 0 \rangle = \langle 0, 0 \rangle = 0$이며, (K9)에 의해 $(\inf \mathcal{R}_A) \cdot 0 = 0 = (\sup \mathcal{R}_A) \cdot 0$이므로 세 변이 모두 $0$이다.

**(4).** $cI_n - A$는 [[matrix|행렬]]의 (1)의 벡터공간 $M_{n \times n}$에서 $cI_n + (-A)$이고, (B5)에 의해 $-A = (-1)A$이다. [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (5)에 의해 $I_n$과 $A$가 대칭이므로 $cI_n$, $(-1)A$, 그리고 둘의 합이 대칭이다. 행렬과 벡터의 곱의 (4)와 (3), (B5)에 의해 $(cI_n - A)x = (cI_n)x + ((-1)A)x = c(I_n x) + (-1)(Ax) = cx - Ax$이고, 같은 (4)와 (B5)에 의해 $(-A)x = ((-1)A)x = (-1)(Ax) = -(Ax)$이다. 내적의 (2)와 (1)에 의해 $\langle cx - Ax, x \rangle = \langle cx, x \rangle - \langle Ax, x \rangle = c\langle x, x \rangle - \langle Ax, x \rangle$이고, $\langle -(Ax), x \rangle = -\langle Ax, x \rangle$이다.

$x \ne 0$이면 (K12)의 (i), (K9)와 (가)에 의해 $\rho_{cI_n - A}(x) = (c\langle x, x \rangle - \langle Ax, x \rangle)\langle x, x \rangle^{-1} = c - \rho_A(x)$이고, (K9)의 $(-a)b = -(ab)$에 의해 $\rho_{-A}(x) = -\rho_A(x)$이다. 따라서 실수 $d$가 $\mathcal{R}_{-A}$의 원소인 것은 정확히 $d = -\rho_A(x)$인 $x \ne 0$이 있을 때, 곧 $d = -e$인 $e \in \mathcal{R}_A$가 있을 때이므로 $\mathcal{R}_{-A} = -\mathcal{R}_A$이다. (3)에 의해 $\mathcal{R}_A$는 공집합이 아니고 위로도 아래로도 유계이므로, 하한의 존재의 (3)에 의해 $-\inf \mathcal{R}_A$는 $-\mathcal{R}_A$의 상한이고, 하한의 존재의 (4)에 의해 $\inf(-\mathcal{R}_A) = -\sup \mathcal{R}_A$이다.

**(5).** $s = \sup \mathcal{R}_A$, $t = \inf \mathcal{R}_A$라 하자. $t = s$이면 (3)과 순서의 성질 (1)의 (ii)에 의해 모든 $x \in \mathbb{R}^n$에서 $\langle Ax, x \rangle = s\langle x, x \rangle$이다. $sI_n$은 대칭이고((4)의 첫 단락) 행렬과 벡터의 곱의 (4), (3)과 내적의 (1)에 의해 $\langle (sI_n)x, x \rangle = \langle sx, x \rangle = s\langle x, x \rangle$이므로, 모든 $x$에서 $\langle Ax, x \rangle = \langle (sI_n)x, x \rangle$이다. 자기수반사상과 대칭행렬의 (8)에 의해 $A = sI_n$이다.

거꾸로 $A = cI_n$이면 모든 $x \ne 0$에서 $Ax = cx$이므로 (2)의 둘째 단락의 계산처럼 $\langle Ax, x \rangle = c\langle x, x \rangle$이고 (가)에 의해 $\rho_A(x) = c$이다. 따라서 $\mathcal{R}_A$의 원소는 모두 $c$이고, (2)에 의해 공집합이 아니므로 $\mathcal{R}_A = \{c\}$이다. $c \in \mathcal{R}_A$이고 $c$는 $\mathcal{R}_A$의 상계이자 하계이므로($c \le c$, 순서의 성질 (1)의 (iv)) $c$는 $\mathcal{R}_A$의 최댓값이자 최솟값이고, 상계와 상한의 (2)에 의해 $\sup \mathcal{R}_A = c = \inf \mathcal{R}_A$이다. $\blacksquare$
:::

## 예시와 반례

:::example[대각행렬의 레일리 몫]
$$
D = \begin{pmatrix} 5 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 2 \end{pmatrix}
$$
는 대칭이고, $x = (x_1, x_2, x_3) \ne 0$이면 $Dx = (5x_1, -x_2, 2x_3)$이므로
$$
\rho_D(x) = \frac{5x_1^2 - x_2^2 + 2x_3^2}{x_1^2 + x_2^2 + x_3^2}
$$
입니다. $-x_2^2 \le 5x_2^2$이고 $2x_3^2 \le 5x_3^2$이므로 분자는 $5(x_1^2 + x_2^2 + x_3^2)$ 이하이고, 따라서 모든 $x \ne 0$에서 $\rho_D(x) \le 5$입니다. (2)에 의해 $\rho_D(e_1) = 5$이므로 $5 \in \mathcal{R}_D$이고, $5$는 $\mathcal{R}_D$의 최댓값이며 상계와 상한의 (2)에 의해 $\sup \mathcal{R}_D = 5$입니다. 같은 방법으로 분자는 $-(x_1^2 + x_2^2 + x_3^2)$ 이상이고 $\rho_D(e_2) = -1$이므로 $\inf \mathcal{R}_D = -1$입니다. 대각성분 $2 = \rho_D(e_3)$는 그 사이에 있습니다.
:::

:::example[크기 1 인 행렬과 단위행렬의 배]
$n = 1$이고 $A = \begin{pmatrix} a \end{pmatrix}$이면 $x \ne 0$의 하나뿐인 값을 $x_1$이라 할 때 $\langle Ax, x \rangle = a x_1 x_1$이고 $\langle x, x \rangle = x_1 x_1$이므로 $\rho_A(x) = a$입니다. 곧 $\mathcal{R}_A = \{a\}$이고 상한과 하한이 모두 $a$입니다. $n = 3$이고 $A = 4I_3$이어도 모든 $x \ne 0$에서 $\rho_A(x) = 4$이고 $\mathcal{R}_A = \{4\}$입니다. (5)는 상한과 하한이 같은 대칭행렬이 이런 행렬뿐이라는 것을 말합니다.
:::

:::counterexample[⟨Ax, x⟩ 의 값은 위로 유계가 아닐 수 있다]
레일리 몫에서 $\langle x, x \rangle$로 나누는 것을 빼면 유계성이 사라집니다. $A = I_2$이면 $\langle Ax, x \rangle = \langle x, x \rangle$입니다. 실수 $b$가 주어지면 $c = |b| + 1$로 두고 $x = (c, 0)$을 잡습니다. $1 \le c$이므로 $\langle Ax, x \rangle = cc \ge c > |b| \ge b$이고, 따라서 $b$는 $\{\langle Ax, x \rangle : x \in \mathbb{R}^2\}$의 상계가 아닙니다. 곧 이 집합의 상계인 실수는 없습니다. 레일리 몫으로는 모든 $x \ne 0$에서 $\rho_{I_2}(x) = 1$입니다. (1)이 단위벡터로 줄여 보는 것도 같은 까닭입니다.
:::

## 확인 질문

:::check[$A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$의 $\sup \mathcal{R}_A$와 $\inf \mathcal{R}_A$는 무엇인가?]
$x = (x_1, x_2) \ne 0$이면 $Ax = (x_2, x_1)$이므로 $\langle Ax, x \rangle = 2x_1 x_2$입니다. $(x_1 - x_2)^2 \ge 0$과 $(x_1 + x_2)^2 \ge 0$에서 $-(x_1^2 + x_2^2) \le 2x_1 x_2 \le x_1^2 + x_2^2$이므로 $-1 \le \rho_A(x) \le 1$입니다. $\rho_A((1, 1)) = 2 \cdot 2^{-1} = 1$이고 $\rho_A((1, -1)) = -1$이므로 $\sup \mathcal{R}_A = 1$, $\inf \mathcal{R}_A = -1$입니다. 대각성분은 모두 $0$이어서 (2)의 $\rho_A(e_k) = 0$은 그 사이의 값입니다.
:::

:::check[바로 앞 질문의 $A$에 대하여 $B = 3I_2 - A$의 $\sup \mathcal{R}_B$는 무엇인가?]
(4)에 의해 $x \ne 0$이면 $\rho_B(x) = 3 - \rho_A(x)$입니다. $\rho_A(x) \ge -1$이므로 $\rho_B(x) \le 4$이고, $x = (1, -1)$에서 $\rho_B(x) = 3 - (-1) = 4$이므로 $\sup \mathcal{R}_B = 4$입니다. 이것은 $3 - \inf \mathcal{R}_A$와 같습니다.
:::
