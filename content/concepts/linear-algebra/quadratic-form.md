---
title: 쌍선형 형식과 이차형식
title_en: Bilinear Forms and Quadratic Forms
aliases: [쌍선형 형식, 이차형식, 이차 형식, bilinear form, quadratic form]
kind: definition
field: linear-algebra
msc: ["15A63"]
level: undergrad
summary: ℝⁿ 위의 쌍선형 형식은 두 자리 각각에 대해 선형인 함수 ℝⁿ × ℝⁿ → ℝ 이고, 그런 것은 정확히 n × n 행렬 A 로 ⟨Ax, y⟩ 꼴로 쓰이는 것이며 A 는 하나로 정해진다. 행렬 A 의 이차형식 q_A 는 x 에서의 값이 ⟨Ax, x⟩ 인 함수이다. 이차형식은 대칭행렬 하나로 정해지고, 변수를 x = Sy 로 바꾸면 행렬이 SᵀAS 로 바뀐다.
requires: [cartesian-product, function, real-number-arithmetic, power-of-a-real-number, vector-space, vector-space-basic-properties, real-function-space, finite-sum-of-vectors, standard-basis, linear-map, matrix, matrix-vector-product, matrix-product, matrix-product-properties, transpose, diagonalizable, inner-product-space, standard-inner-product, self-adjoint-map]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 7장 1절 Main definition 의 소절 1.1 Bilinear forms on Rⁿ, pp.197–198, 소절 1.2 Quadratic forms on Rⁿ, p.198, 소절 1.3 의 Lemma 1.2, p.199; 7장 2절 Diagonalization of quadratic forms 의 소절 2.1 Orthogonal diagonalization 첫 단락, p.200
    checked: original
    note: "쌍선형 형식의 정의(두 자리 각각에 대한 선형성)는 출처 소절 1.1(p.197)과 같다. 출처는 쌍선형 형식을 L(x, y) = Σ_{j,k} a_{j,k} x_k y_j 와 행렬 꼴 (Ax, y) 로 '쓸 수 있다'고 하고 'A 는 L 로 하나로 정해진다'고 적을 뿐(pp.197–198) 증명하지 않는다. 이 항목의 (1)은 그 증명이고 행렬의 성분을 a_{j,k} = L(e_k, e_j) 로 정하는 것은 출처의 합의 꼴(x_k y_j 의 계수가 a_{j,k})과 같은 약속이다. 출처는 이차형식을 쌍선형 형식의 '대각선' Q[x] = L(x, x) = (Ax, x) 로 한 번, 2차 동차다항식으로 한 번 정의하는데(p.198), 이 사이트에는 여러 변수의 다항식이 없으므로 앞의 정의만 쓴다. 이차형식의 기호는 출처의 Q[x] 대신 q_A(x) 로 쓴다. (2)의 '대칭인 쌍선형 형식'과 그 판정은 출처 7장 1절에 따로 진술되어 있지 않다(source-grep 으로 책 전체에서 'symmetric bilinear' 0건, 'symmetric form' 0건, 'symmetric tensor' 0건, 'L(y, x)' 0건, 'form L is symmetric' 0건. 7장 1절의 연습문제 1.1–1.4 를 처음부터 읽었다). (4)는 출처 p.198 의 '대칭행렬로 나타내는 방법은 하나뿐'과 그 앞의 '여러(무한히 많은) 행렬로 쓸 수 있다'를 정리한 것이고, 출처는 이것도 증명하지 않는다. 대칭 대표 2⁻¹(A + Aᵀ) 를 쓰는 존재 증명과 유일성 증명(자기수반사상과 대칭행렬의 (8))은 이 사이트가 썼다. (4)의 극화 항등식은 출처 소절 1.3 의 Lemma 1.2 의 2(p.199)와 같은 식이다. (5)는 출처 소절 2.1(p.200)의 계산 Q[Sy] = (ASy, Sy) = (S*ASy, y) 를 S 가 n × m 행렬인 경우로 넓힌 것이다(출처는 S 를 가역인 n × n 행렬로 둔다). (6)의 대각행렬의 꼴은 출처 7장 2절 첫머리(p.200)의 Q[x] = a₁x₁² + ⋯ + aₙxₙ² 와 같다. 예시 '같은 이차형식을 주는 여러 행렬'은 출처 p.198 의 x₁² + x₂² − 4x₁x₂ 를 세 행렬과 (1 a−4; −a 1) 꼴의 행렬로 나타내는 예와 같은 발상이고, 반례 '이차형식이 같고 쌍선형 형식이 다른 두 행렬'은 같은 예의 두 행렬이 서로 다른 쌍선형 형식을 준다는 것을 따로 계산한 것이다. 확인 질문 '$L(x, y) = x_1 y_2$인 함수 $L : \\mathbb{R}^2 \\times \\mathbb{R}^2 \\to \\mathbb{R}$는 쌍선형 형식인가? 그 행렬은 무엇이고 $L$은 대칭인가?'는 출처 연습문제 1.1, 1.2(p.199, 쌍선형 형식의 행렬 구하기)와 같은 발상이다. 확인 질문 '$A = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$, $S = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$이면 $q_A(Sy)$는 무엇인가?'는 출처 소절 2.1 의 변수 바꾸기를 한 번 해 본 것이고, 같은 소절 2.2.1 의 완전제곱으로 대각화하는 계산(pp.201–203)을 거꾸로 한 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(고윳값 판정과 2 × 2 판정 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$n$이 자연수이고 $\mathbb{R}^n$에는 [[standard-inner-product|표준내적]]을 준다. $x \in \mathbb{R}^n$의 $k$에서의 값을 $x_k$로 쓰고, $e_1, \dots, e_n$은 [[standard-basis|표준기저]]이며, $Ax$는 [[matrix-vector-product|행렬과 벡터의 곱]], $A^T$는 [[transpose|전치행렬]], 대칭행렬은 [[self-adjoint-map|자기수반사상과 대칭행렬]]의 것이다. 실수 $c$의 제곱 $c^2$은 [[power-of-a-real-number|실수의 거듭제곱]]으로 $cc$와 같다. $\mathbb{R}^n \times \mathbb{R}^n$은 [[cartesian-product|곱집합]]이고, 함수 $L : \mathbb{R}^n \times \mathbb{R}^n \to \mathbb{R}$의 $(x, y)$에서의 값을 $L(x, y)$로 쓴다.

**쌍선형 형식.** 함수 $L : \mathbb{R}^n \times \mathbb{R}^n \to \mathbb{R}$가 $\mathbb{R}^n$ 위의 **쌍선형 형식**(bilinear form)인 것은 정확히 모든 $x, x', y, y' \in \mathbb{R}^n$과 모든 실수 $\alpha$, $\beta$에서 다음 두 조건이 성립할 때이다.

- (i) $L(\alpha x + \beta x', y) = \alpha L(x, y) + \beta L(x', y)$이다.
- (ii) $L(x, \alpha y + \beta y') = \alpha L(x, y) + \beta L(x, y')$이다.

쌍선형 형식 $L$이 **대칭**(symmetric)인 것은 정확히 모든 $x, y \in \mathbb{R}^n$에서 $L(x, y) = L(y, x)$일 때이다. $n \times n$ [[matrix|행렬]] $A$에 대하여, 각 $(x, y) \in \mathbb{R}^n \times \mathbb{R}^n$에 실수 $\langle Ax, y \rangle$가 하나씩 정해지므로 [[real-function-space|(G)]]에 의해 $(x, y)$에서의 값이 $\langle Ax, y \rangle$인 함수가 있다. 이 함수를 $L_A : \mathbb{R}^n \times \mathbb{R}^n \to \mathbb{R}$로 쓴다.

**이차형식.** $n \times n$ 행렬 $A$에 대하여, $x$에서의 값이 $\langle Ax, x \rangle$인 함수 $\mathbb{R}^n \to \mathbb{R}$(같은 (G)로 있다)를 $A$의 **이차형식**(quadratic form)이라 하고 $q_A$로 쓴다. 곧 $q_A(x) = \langle Ax, x \rangle = L_A(x, x)$이다. 함수 $q : \mathbb{R}^n \to \mathbb{R}$가 $\mathbb{R}^n$ 위의 **이차형식**인 것은 정확히 $q = q_A$인 $n \times n$ 행렬 $A$가 있을 때이다.

다음이 성립한다. 아래에서 $A$, $B$는 $n \times n$ 행렬이고 $x, y \in \mathbb{R}^n$이며 $c$, $\alpha$는 실수이다.

1. (쌍선형 형식과 행렬) $L_A$는 쌍선형 형식이고, 모든 $j, k \in \{1, \dots, n\}$에서 $L_A(e_k, e_j) = a_{j,k}$이다. 거꾸로 $L$이 쌍선형 형식이고 $A$가 $(j, k)$ 성분이 $L(e_k, e_j)$인 $n \times n$ 행렬이면 $L = L_A$이다. 또 $L_A = L_B$인 것은 정확히 $A = B$일 때이다. 따라서 모든 쌍선형 형식 $L$에 대하여 $L = L_A$인 $n \times n$ 행렬 $A$가 정확히 하나 있다. 성분으로는
   $$
   \begin{aligned}
   L_A(x, y) &= (Ax)_1 y_1 + \cdots \\
   &\quad + (Ax)_n y_n
   \end{aligned}
   $$
   이고(오른쪽은 $j$번째 항이 $(Ax)_j y_j$인 길이 $n$인 실수의 열의 합), 여기서 $Ax$의 $j$에서의 값은 $(Ax)_j = a_{j,1} x_1 + \cdots + a_{j,n} x_n$이다. 특히 $q_A(x)$는 이 식에서 $y = x$로 둔 것이다.
2. (대칭) $L_A(y, x) = L_{A^T}(x, y)$이다. $L_A$가 대칭인 것은 정확히 $A$가 대칭행렬일 때이다.
3. (이차형식의 계산) $q_A(0) = 0$이고 $q_A(cx) = c^2 q_A(x)$이다. $q_{A + B}(x) = q_A(x) + q_B(x)$, $q_{\alpha A}(x) = \alpha q_A(x)$이고, 특히 $q_{-A}(x) = -q_A(x)$이다.
4. (대칭 대표)
   - (i) $q_{A^T} = q_A$이다. $2^{-1}(A + A^T)$는 대칭행렬이고 $q_{2^{-1}(A + A^T)} = q_A$이다.
   - (ii) $A$, $B$가 대칭행렬이고 $q_A = q_B$이면 $A = B$이다. 따라서 $\mathbb{R}^n$ 위의 모든 이차형식 $q$에 대하여 $q = q_A$인 $n \times n$ 대칭행렬 $A$가 정확히 하나 있다.
   - (iii) $q_A = q_B$인 것은 정확히 $A + A^T = B + B^T$일 때이다. 특히 모든 $x$에서 $q_A(x) = 0$인 것은 정확히 $A^T = -A$일 때이다.
   - (iv) (극화 항등식) $A$가 대칭행렬이면 $L_A(x, y) = 4^{-1}\bigl(q_A(x + y) - q_A(x - y)\bigr)$이다.
5. (변수 바꾸기) $m$이 자연수이고 $S$가 $n \times m$ 행렬이면 $S^T A S$는 $m \times m$ 행렬이고, 모든 $y, y' \in \mathbb{R}^m$에서 $L_A(Sy, Sy') = L_{S^T A S}(y, y')$, 특히 $q_A(Sy) = q_{S^T A S}(y)$이다. $A$가 대칭행렬이면 $S^T A S$도 대칭행렬이다.
6. (대각행렬과 $n = 2$) $d_1, \dots, d_n$이 길이 $n$인 실수의 열이고 $D = \operatorname{diag}(d_1, \dots, d_n)$([[diagonalizable|대각화 가능]]의 것)이면
   $$
   q_D(x) = d_1 x_1^2 + \cdots + d_n x_n^2
   $$
   이다(오른쪽은 $k$번째 항이 $d_k x_k^2$인 열의 합). 특히 $q_D(e_k) = d_k$이다. $n = 2$이면 $q_A(x) = a_{1,1} x_1^2 + (a_{1,2} + a_{2,1}) x_1 x_2 + a_{2,2} x_2^2$이다.
:::

:::english
Let $n$ be a natural number and give $\mathbb{R}^n$ the standard inner product. The value of $x \in \mathbb{R}^n$ at $k$ is written $x_k$, $e_1, \dots, e_n$ is the standard basis, $Ax$ is the matrix-vector product, $A^T$ is the transpose, and symmetric matrices are those of the entry on self-adjoint maps and symmetric matrices. The square $c^2$ of a real number $c$ is the power of a real number and equals $cc$. $\mathbb{R}^n \times \mathbb{R}^n$ is the Cartesian product, and the value of a function $L : \mathbb{R}^n \times \mathbb{R}^n \to \mathbb{R}$ at $(x, y)$ is written $L(x, y)$.

**Bilinear forms.** A function $L : \mathbb{R}^n \times \mathbb{R}^n \to \mathbb{R}$ is a **bilinear form** on $\mathbb{R}^n$ exactly when the following two conditions hold for all $x, x', y, y' \in \mathbb{R}^n$ and all real numbers $\alpha$, $\beta$.

- (i) $L(\alpha x + \beta x', y) = \alpha L(x, y) + \beta L(x', y)$.
- (ii) $L(x, \alpha y + \beta y') = \alpha L(x, y) + \beta L(x, y')$.

A bilinear form $L$ is **symmetric** exactly when $L(x, y) = L(y, x)$ for all $x, y \in \mathbb{R}^n$. For an $n \times n$ matrix $A$, a real number $\langle Ax, y \rangle$ is determined for each $(x, y) \in \mathbb{R}^n \times \mathbb{R}^n$, so by (G) there is a function whose value at $(x, y)$ is $\langle Ax, y \rangle$. We write this function as $L_A : \mathbb{R}^n \times \mathbb{R}^n \to \mathbb{R}$.

**Quadratic forms.** For an $n \times n$ matrix $A$, the function $\mathbb{R}^n \to \mathbb{R}$ whose value at $x$ is $\langle Ax, x \rangle$ (it exists by the same (G)) is called the **quadratic form** of $A$ and is written $q_A$. That is, $q_A(x) = \langle Ax, x \rangle = L_A(x, x)$. A function $q : \mathbb{R}^n \to \mathbb{R}$ is a **quadratic form** on $\mathbb{R}^n$ exactly when there is an $n \times n$ matrix $A$ with $q = q_A$.

The following hold, where $A$, $B$ are $n \times n$ matrices, $x, y \in \mathbb{R}^n$, and $c$, $\alpha$ are real numbers.

1. (Bilinear forms and matrices) $L_A$ is a bilinear form, and $L_A(e_k, e_j) = a_{j,k}$ for all $j, k \in \{1, \dots, n\}$. Conversely, if $L$ is a bilinear form and $A$ is the $n \times n$ matrix whose $(j, k)$ entry is $L(e_k, e_j)$, then $L = L_A$. Moreover $L_A = L_B$ exactly when $A = B$. Hence for every bilinear form $L$ there is exactly one $n \times n$ matrix $A$ with $L = L_A$. In terms of entries,
   $$
   \begin{aligned}
   L_A(x, y) &= (Ax)_1 y_1 + \cdots \\
   &\quad + (Ax)_n y_n
   \end{aligned}
   $$
   (the right side is the sum of the sequence of real numbers of length $n$ whose $j$th term is $(Ax)_j y_j$), where the value of $Ax$ at $j$ is $(Ax)_j = a_{j,1} x_1 + \cdots + a_{j,n} x_n$. In particular $q_A(x)$ is this expression with $y = x$.
2. (Symmetry) $L_A(y, x) = L_{A^T}(x, y)$. $L_A$ is symmetric exactly when $A$ is a symmetric matrix.
3. (Computing with quadratic forms) $q_A(0) = 0$ and $q_A(cx) = c^2 q_A(x)$. $q_{A + B}(x) = q_A(x) + q_B(x)$ and $q_{\alpha A}(x) = \alpha q_A(x)$; in particular $q_{-A}(x) = -q_A(x)$.
4. (Symmetric representative)
   - (i) $q_{A^T} = q_A$. $2^{-1}(A + A^T)$ is a symmetric matrix and $q_{2^{-1}(A + A^T)} = q_A$.
   - (ii) If $A$, $B$ are symmetric matrices and $q_A = q_B$, then $A = B$. Hence for every quadratic form $q$ on $\mathbb{R}^n$ there is exactly one $n \times n$ symmetric matrix $A$ with $q = q_A$.
   - (iii) $q_A = q_B$ exactly when $A + A^T = B + B^T$. In particular $q_A(x) = 0$ for all $x$ exactly when $A^T = -A$.
   - (iv) (Polarization identity) If $A$ is a symmetric matrix, then $L_A(x, y) = 4^{-1}\bigl(q_A(x + y) - q_A(x - y)\bigr)$.
5. (Change of variables) If $m$ is a natural number and $S$ is an $n \times m$ matrix, then $S^T A S$ is an $m \times m$ matrix, and for all $y, y' \in \mathbb{R}^m$ we have $L_A(Sy, Sy') = L_{S^T A S}(y, y')$, in particular $q_A(Sy) = q_{S^T A S}(y)$. If $A$ is a symmetric matrix, then so is $S^T A S$.
6. (Diagonal matrices and $n = 2$) If $d_1, \dots, d_n$ is a sequence of real numbers of length $n$ and $D = \operatorname{diag}(d_1, \dots, d_n)$ (that of the entry on diagonalizability), then
   $$
   q_D(x) = d_1 x_1^2 + \cdots + d_n x_n^2
   $$
   (the right side is the sum of the sequence whose $k$th term is $d_k x_k^2$). In particular $q_D(e_k) = d_k$. If $n = 2$, then $q_A(x) = a_{1,1} x_1^2 + (a_{1,2} + a_{2,1}) x_1 x_2 + a_{2,2} x_2^2$.
:::

## 직관

쌍선형 형식은 두 벡터를 받아 수 하나를 내놓는데, 한 자리를 고정하면 다른 자리에 대해 선형인 함수입니다. 표준내적 $\langle x, y \rangle$가 대표적인 예이고, 이것은 $A = I_n$인 $L_A$입니다. 가게의 영수증에 비유할 수 있습니다. 상품 $k$의 수량이 $x_k$이고 손님 $j$의 할인율이 $y_j$일 때, 손님 $j$와 상품 $k$의 조합마다 정해진 값 $a_{j,k}$를 곱해 모두 더한 것이 $L_A(x, y)$입니다. 수량을 두 배로 하면 합계가 두 배가 되고, 할인율에 대해서도 마찬가지라는 것이 두 자리의 선형성입니다. 비유가 정의와 맞는 곳은 조합마다의 값 $a_{j,k} = L(e_k, e_j)$만 알면 전체가 정해진다는 (1)입니다. 비유와 달리 수량이나 할인율이 음수여도 됩니다.

이차형식은 쌍선형 형식의 두 자리에 같은 벡터를 넣은 것입니다. $n = 2$이면 (6)에 의해 $q_A(x) = a_{1,1} x_1^2 + (a_{1,2} + a_{2,1}) x_1 x_2 + a_{2,2} x_2^2$이어서 $x_1 x_2$의 계수에는 $a_{1,2}$와 $a_{2,1}$의 합만 남습니다. 그래서 서로 다른 행렬이 같은 이차형식을 줄 수 있고, 두 비대각 성분을 반씩 나누어 같게 만든 대칭행렬이 이차형식을 하나로 대표합니다. 이것이 (4)입니다. $n = 1$이면 $q_A(x) = a_{1,1} x_1^2$이고 모든 $1 \times 1$ 행렬은 대칭이므로, 이차형식과 행렬이 처음부터 하나씩 짝지어집니다.

(5)는 변수를 $x = Sy$로 바꾸면 이차형식의 행렬이 $A$에서 $S^T A S$로 바뀐다는 것입니다. 행렬의 닮음 $S^{-1} A S$와 달리 역행렬 대신 전치행렬이 붙습니다. $S$가 직교행렬이면 $S^T = S^{-1}$이어서 둘이 같아지고, 다음 항목은 이 점을 써서 이차형식을 대각행렬의 이차형식으로 바꿉니다.

## 성질의 증명

:::proof
아래에서 (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것, (V1)–(V8)은 [[vector-space|벡터공간]]의 것, (B1)–(B12)는 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 것, (H0)–(H7)과 (C1)–(C6)은 [[finite-sum-of-vectors|벡터의 유한 합]]의 것, (T1), (T3), (T5)는 [[linear-map|선형사상]]의 것이고, 내적의 조건과 성질은 [[inner-product-space|내적과 내적공간]]의 번호로, 표준내적의 성질은 [[standard-inner-product|ℝⁿ 의 표준내적]]의 번호로, 행렬과 벡터의 곱의 성질은 [[matrix-vector-product|행렬과 벡터의 곱]]의 번호로 인용한다. 표준내적의 (1)에 의해 표준내적은 $\mathbb{R}^n$ 위의 내적이다. [[real-function-space|실숫값 함수의 공간]]의 (2)에 의해 $\mathbb{R}$은 실수의 합과 곱으로 벡터공간이므로, 함수 $\mathbb{R}^n \to \mathbb{R}$에 대해 선형사상을 말할 수 있다. 실수의 열의 합은 벡터의 유한 합을 $\mathbb{R}$에 쓴 것이고, 길이가 같고 모든 자리의 항이 같은 두 열의 합은 같다(벡터의 유한 합의 진술).

**(1).** $L_A$가 쌍선형 형식인 것: 행렬과 벡터의 곱의 (2)에 의해 $A(\alpha x + \beta x') = \alpha(Ax) + \beta(Ax')$이므로 내적의 조건 (ii)에 의해 $L_A(\alpha x + \beta x', y) = \alpha L_A(x, y) + \beta L_A(x', y)$이다. 내적의 (1)에 의해 $L_A(x, \alpha y + \beta y') = \alpha L_A(x, y) + \beta L_A(x, y')$이다.

$L_A(e_k, e_j) = a_{j,k}$인 것: 행렬과 벡터의 곱의 (3)에 의해 $Ae_k = \mathbf{a}_k$이고, 표준내적의 (2)에 의해 $\langle \mathbf{a}_k, e_j \rangle$는 $\mathbf{a}_k$의 $j$에서의 값, 곧 [[matrix|행렬]]의 열의 정의에 의해 $a_{j,k}$이다.

거꾸로 $L$이 쌍선형 형식이라 하자. 각 $(j, k)$에 실수 $L(e_k, e_j)$가 하나씩 정해지므로 (G)에 의해 $(j, k)$ 성분이 $L(e_k, e_j)$인 $n \times n$ 행렬 $A$가 있다. $x, y \in \mathbb{R}^n$을 고정하자. 조건 (i)과 (T3)에 의해 $z$에서의 값이 $L(z, y)$인 함수 $\mathbb{R}^n \to \mathbb{R}$는 선형사상이고, 조건 (ii)와 (T3)에 의해 각 $k$에서 $w$에서의 값이 $L(e_k, w)$인 함수도 선형사상이다. 표준기저의 (3)에 의해 $x = x_1 e_1 + \cdots + x_n e_n$이고 $y = y_1 e_1 + \cdots + y_n e_n$이므로, (T5)를 두 번 쓰면
$$
\begin{aligned}
L(x, y) &= x_1 L(e_1, y) + \cdots \\
&\quad + x_n L(e_n, y), \\
L(e_k, y) &= y_1 L(e_k, e_1) + \cdots \\
&\quad + y_n L(e_k, e_n)
\end{aligned}
$$
이다. $A$의 정의에 의해 $L(e_k, e_j) = a_{j,k}$이므로 $L(e_k, y) = y_1 a_{1,k} + \cdots + y_n a_{n,k}$이다. 한편 표준내적의 (4)와 정의에 의해 $\langle Ax, y \rangle = \langle x, A^T y \rangle = x_1 (A^T y)_1 + \cdots + x_n (A^T y)_n$이고, 행렬과 벡터의 곱의 (1)과 전치행렬의 정의에 의해 $(A^T y)_k = a_{1,k} y_1 + \cdots + a_{n,k} y_n$이다. (K1)에 의해 두 합의 $j$번째 항 $y_j a_{j,k}$와 $a_{j,k} y_j$가 같으므로 모든 $k$에서 $L(e_k, y) = (A^T y)_k$이고, 따라서 $L(x, y) = \langle Ax, y \rangle = L_A(x, y)$이다. $x$, $y$는 임의였으므로 두 함수 $L$, $L_A$는 모든 원소에서 값이 같고, [[function|함수]]의 같음에 의해 $L = L_A$이다.

$L_A = L_B$이면 위에서 보인 것에 의해 모든 $j$, $k$에서 $a_{j,k} = L_A(e_k, e_j) = L_B(e_k, e_j) = b_{j,k}$이므로 행렬의 (2)에 의해 $A = B$이다. $A = B$이면 $L_A = L_B$인 것은 정의에서 바로 나온다. 앞의 두 문단을 합치면 쌍선형 형식 $L$마다 $L = L_A$인 $A$가 있고 하나뿐이다.

성분의 꼴: 표준내적의 정의에 의해 $\langle Ax, y \rangle$는 $j$번째 항이 $(Ax)_j y_j$인 열의 합이고, 행렬과 벡터의 곱의 (1)에 의해 $(Ax)_j = a_{j,1} x_1 + \cdots + a_{j,n} x_n$이다.

**(2).** 표준내적의 (4)와 내적의 조건 (i)에 의해 $L_A(y, x) = \langle Ay, x \rangle = \langle y, A^T x \rangle = \langle A^T x, y \rangle = L_{A^T}(x, y)$이다. 따라서 $L_A$가 대칭인 것은 정확히 모든 $x$, $y$에서 $L_A(x, y) = L_{A^T}(x, y)$일 때, 곧 함수의 같음에 의해 $L_A = L_{A^T}$일 때이고, (1)에 의해 정확히 $A = A^T$일 때이다.

**(3).** 행렬과 벡터의 곱의 (2)에 의해 $T_A$는 선형사상이므로 (T1)에 의해 $A0 = 0$이고, 내적의 (2)에 의해 $q_A(0) = \langle 0, 0 \rangle = 0$이다. 행렬과 벡터의 곱의 (2)와 내적의 (1)을 두 번 쓰면 $q_A(cx) = \langle c(Ax), cx \rangle = c(c\langle Ax, x \rangle)$이고, (K2)와 실수의 거듭제곱의 (1)에 의해 이것은 $c^2 q_A(x)$이다. 행렬과 벡터의 곱의 (4)와 내적의 (1)에 의해 $q_{A + B}(x) = \langle Ax + Bx, x \rangle = q_A(x) + q_B(x)$이고 $q_{\alpha A}(x) = \langle \alpha(Ax), x \rangle = \alpha q_A(x)$이다. (B5)에 의해 $-A = (-1)A$이므로 $q_{-A}(x) = (-1)q_A(x) = -q_A(x)$이다((K9)).

**(4).** (i) (2)를 $y = x$에 쓰면 $q_A(x) = L_A(x, x) = L_{A^T}(x, x) = q_{A^T}(x)$이다. 전치행렬의 (1)에 의해 $(2^{-1}(A + A^T))^T = 2^{-1}(A^T + (A^T)^T) = 2^{-1}(A^T + A)$이고 (V1)에 의해 이것은 $2^{-1}(A + A^T)$이므로 대칭행렬이다. (3)에 의해 $q_{2^{-1}(A + A^T)}(x) = 2^{-1}(q_A(x) + q_{A^T}(x)) = 2^{-1}(2 q_A(x)) = q_A(x)$이다((K7)의 $2 = 1 + 1$과 $2 \ne 0$, (K12)의 (i), (K4), (K2), (K8)의 (iii)).

(ii) $A$, $B$가 대칭이고 모든 $x$에서 $\langle Ax, x \rangle = \langle Bx, x \rangle$이면 [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (8)의 마지막 문장에 의해 $A = B$이다. 이차형식 $q$가 주어지면 정의에 의해 $q = q_C$인 $C$가 있고, (i)에 의해 $2^{-1}(C + C^T)$가 대칭이고 같은 이차형식을 주므로 $q = q_A$인 대칭행렬 $A$가 있다. 앞 문장에 의해 그런 대칭행렬은 하나뿐이다.

(iii) $A + A^T = B + B^T$이면 (i)에 의해 $q_A = q_{2^{-1}(A + A^T)} = q_{2^{-1}(B + B^T)} = q_B$이다. 거꾸로 $q_A = q_B$이면 (i)에 의해 대칭행렬 $2^{-1}(A + A^T)$와 $2^{-1}(B + B^T)$가 같은 이차형식을 주므로 (ii)에 의해 둘은 같고, 양변에 $2$를 곱하면 (V6), (K8)의 (iii), (V5)에 의해 $A + A^T = B + B^T$이다. $B$를 영행렬 $O$로 두면 행렬과 벡터의 곱의 정의와 (C3)에 의해 $Ox = 0$이어서 $q_O(x) = 0$이고, $O + O^T = O$이다. 따라서 모든 $x$에서 $q_A(x) = 0$인 것은 정확히 $A + A^T = O$일 때, 곧 (B2)의 덧셈 역원의 유일성에 의해 $A^T = -A$일 때이다.

(iv) $A$가 대칭이면 자기수반사상과 대칭행렬의 (2)에 의해 $T_A$가 자기수반이고, 같은 항목의 (8)을 $T = T_A$에 쓰면 $\langle Ax, y \rangle = 4^{-1}(\langle A(x + y), x + y \rangle - \langle A(x - y), x - y \rangle)$이다.

**(5).** $S^T$는 $m \times n$ 행렬이므로 [[matrix-product|행렬의 곱]]의 정의에 의해 $AS$는 $n \times m$, $S^T(AS)$는 $m \times m$ 행렬이고, [[matrix-product-properties|행렬 곱의 성질]]의 (1)에 의해 이것은 $(S^T A)S$와 같으므로 $S^T A S$로 쓴다. $y, y' \in \mathbb{R}^m$이면 행렬의 곱의 (1)을 두 번 쓰면 $(S^T A S)y = S^T(A(Sy))$이다. 표준내적의 (4)를 $m \times n$ 행렬 $S^T$에 쓰고 전치행렬의 (1)의 $(S^T)^T = S$를 쓰면
$$
\begin{aligned}
L_{S^T A S}(y, y') &= \langle S^T(A(Sy)), y' \rangle \\
&= \langle A(Sy), Sy' \rangle \\
&= L_A(Sy, Sy')
\end{aligned}
$$
이다. $y' = y$로 두면 $q_{S^T A S}(y) = q_A(Sy)$이다. $A^T = A$이면 전치행렬의 (4)를 두 번 쓰고 (1)을 쓰면 $(S^T(AS))^T = (AS)^T (S^T)^T = (S^T A^T) S = S^T A S$이다.

**(6).** [[diagonalizable|대각화 가능]]의 (2)에 의해 $Dx$의 $k$번째 값은 $d_k x_k$이므로 표준내적의 정의에 의해 $q_D(x)$는 $k$번째 항이 $(d_k x_k) x_k$인 열의 합이고, (K2)와 실수의 거듭제곱의 (1)에 의해 이 항은 $d_k x_k^2$이다. $x = e_k$이면 $i \ne k$에서 $(e_k)_i = 0$이므로 $i$번째 항은 $d_i \cdot 0 \cdot 0 = 0$이고((K9)), $k$번째 항은 $d_k \cdot 1 \cdot 1 = d_k$이므로 (H7)에 의해 $q_D(e_k) = d_k$이다. $n = 2$이면 (1)의 성분의 꼴과 (H0)에 의해
$$
\begin{aligned}
q_A(x) &= (a_{1,1} x_1 + a_{1,2} x_2) x_1 \\
&\quad + (a_{2,1} x_1 + a_{2,2} x_2) x_2
\end{aligned}
$$
이고, (K1)–(K3)과 실수의 거듭제곱의 (1)로 정리하면 $a_{1,1} x_1^2 + (a_{1,2} + a_{2,1}) x_1 x_2 + a_{2,2} x_2^2$이다. $\blacksquare$
:::

## 예시와 반례

:::example[같은 이차형식을 주는 여러 행렬]
$$
A = \begin{pmatrix} 3 & 4 \\ 0 & -1 \end{pmatrix}, \quad
B = \begin{pmatrix} 3 & 2 \\ 2 & -1 \end{pmatrix}
$$
이라 합시다. (6)의 $n = 2$ 꼴에 의해 $q_A(x) = 3x_1^2 + (4 + 0)x_1 x_2 - x_2^2$이고 $q_B(x) = 3x_1^2 + (2 + 2)x_1 x_2 - x_2^2$이므로 $q_A = q_B$입니다. $A^T = \begin{pmatrix} 3 & 0 \\ 4 & -1 \end{pmatrix}$도 $x_1 x_2$의 계수가 $0 + 4 = 4$여서 같은 이차형식을 줍니다. 이 셋 가운데 대칭인 것은 $B$뿐이고, $B = 2^{-1}(A + A^T)$입니다. 실제로 $A + A^T = \begin{pmatrix} 6 & 4 \\ 4 & -2 \end{pmatrix}$입니다.

$C = \begin{pmatrix} 0 & 5 \\ -5 & 0 \end{pmatrix}$이면 $C^T = -C$이고, $q_C(x) = (5 + (-5))x_1 x_2 = 0$입니다. 그래서 $A + C$도 $q_{A + C} = q_A + q_C = q_A$가 되어 같은 이차형식을 줍니다. (4)의 (iii)은 같은 이차형식을 주는 행렬이 정확히 이렇게 $A + A^T$가 같은 것들이라는 것입니다.
:::

:::counterexample[이차형식이 같고 쌍선형 형식이 다른 두 행렬]
위 예시의 $A$와 $B$는 $q_A = q_B$이지만 $L_A \ne L_B$입니다. (1)에 의해 $L_A(e_2, e_1) = a_{1,2} = 4$이고 $L_B(e_2, e_1) = b_{1,2} = 2$이기 때문입니다. 곧 이차형식만으로는 쌍선형 형식이 정해지지 않습니다. 대칭행렬로 제한하면 (4)의 (iv)의 극화 항등식이 $q_B$에서 $L_B$를 되살립니다. 실제로 $q_B(e_2 + e_1) = 3 + 4 - 1 = 6$, $q_B(e_2 - e_1) = 3 - 4 - 1 = -2$이고 $4^{-1}(6 - (-2)) = 2 = L_B(e_2, e_1)$입니다. 같은 계산을 $A$에 하면 $4^{-1}(q_A(e_2 + e_1) - q_A(e_2 - e_1)) = 2$이어서 $L_A(e_2, e_1) = 4$와 다르므로, 극화 항등식에는 대칭이라는 가정이 필요합니다.
:::

## 확인 질문

:::check[$L(x, y) = x_1 y_2$인 함수 $L : \mathbb{R}^2 \times \mathbb{R}^2 \to \mathbb{R}$는 쌍선형 형식인가? 그 행렬은 무엇이고 $L$은 대칭인가?]
$x_1$은 $x$에 대해, $y_2$는 $y$에 대해 선형이므로 (i)과 (ii)가 성립합니다. 예컨대 $(\alpha x + \beta x')_1 y_2 = \alpha x_1 y_2 + \beta x'_1 y_2$입니다. (1)에 의해 행렬의 $(j, k)$ 성분은 $L(e_k, e_j)$이고, $L(e_k, e_j)$는 $k = 1$이고 $j = 2$일 때만 $1$이며 나머지는 $0$입니다. 따라서 $A = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$이고, 실제로 $Ax = (0, x_1)$이어서 $\langle Ax, y \rangle = x_1 y_2$입니다. $A$가 대칭이 아니므로 (2)에 의해 $L$은 대칭이 아닙니다. 예컨대 $L(e_1, e_2) = 1$이고 $L(e_2, e_1) = 0$입니다.
:::

:::check[$A = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$, $S = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$이면 $q_A(Sy)$는 무엇인가?]
$Sy = (y_1 + y_2, y_2)$이므로 (6)에 의해 $q_A(Sy) = (y_1 + y_2)^2 - y_2^2 = y_1^2 + 2y_1 y_2$입니다. (5)로 계산하면 $AS = \begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix}$, $S^T A S = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$이고, (6)의 $n = 2$ 꼴로 $q_{S^T A S}(y) = y_1^2 + 2y_1 y_2$이어서 두 계산이 맞습니다. $S^T A S$는 대각행렬이 아니므로 이 변수 바꾸기는 이차형식을 대각행렬의 꼴로 만들지 않습니다.
:::
