---
title: 자기수반사상과 대칭행렬
title_en: Self-Adjoint Maps and Symmetric Matrices
aliases: [자기수반사상, 자기수반, 대칭행렬, 자기수반 작용소, self-adjoint map, self-adjoint operator, symmetric matrix]
kind: definition
field: linear-algebra
msc: ["15A04", "15B57"]
level: undergrad
summary: 유한차원 내적공간 위의 선형사상 T 가 자기 자신의 수반사상일 때 자기수반사상이라 하고, 전치행렬이 자기 자신인 정사각행렬을 대칭행렬이라 한다. T 가 자기수반인 것은 모든 x, y 에서 Tx 와 y 의 내적이 x 와 Ty 의 내적과 같을 때이고, 표준내적에서 행렬 A 의 사상이 자기수반인 것은 A 가 대칭일 때, 정규직교 기저에 관한 행렬이 대칭일 때이다. 합·스칼라배와 AᵀA, AAᵀ 는 대칭이고, 자기수반사상은 극화 항등식으로 x 와 Tx 의 내적들만으로 정해진다.
requires: [function, real-number-arithmetic, vector-space, vector-space-basic-properties, linear-map, linear-map-examples, linear-maps-form-a-vector-space, composition-of-linear-maps, dimension, independent-and-spanning-bounds, standard-basis, matrix, transpose, matrix-vector-product, matrix-product, matrix-of-a-linear-map, matrix-in-bases, real-eigenvalues-2x2, inner-product-space, standard-inner-product, inner-product-examples, orthonormal-basis, adjoint-map]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 6장 Structure of operators in inner product spaces 2절 Spectral theorem for self-adjoint and normal operators 첫머리, p.166; 1장 Basic notions 2절 연습문제 2.3, p.11, 1절 연습문제 1.2 d), p.5; 5장 Inner product spaces 3절 연습문제 3.11, p.134, 5절 연습문제 5.3, p.145, 6절 연습문제 6.3, p.150; 6장 2절 연습문제 2.1 d), p.169, 2.7, 2.8 a), p.170; 7장 Bilinear and quadratic forms 1절의 1.2 Quadratic forms on ℝⁿ, p.198, 1.3 의 Lemma 1.2, p.199
    checked: original
    note: "출처 6장 2절 첫머리(p.166)는 A = A* 인 사상을 self-adjoint 라 부르고, 어떤 정규직교 기저에 관한 그 행렬, 곧 A* = A 인 행렬을 Hermitian matrix 라 부른다. 출처 5장 3절 연습문제 3.11(p.134)도 'self-adjoint, meaning that P* = P' 라고 쓴다. 이 항목은 수반사상 항목의 T* 로 정의한다. 대칭행렬은 출처 1장 2절 연습문제 2.3(p.11)의 'a matrix is called symmetric if Aᵀ = A' 와 1절 연습문제 1.2 d)(p.5)의 Aᵀ = A 인 n × n 행렬이다. 이 사이트는 실수만 쓰므로 Hermitian matrix 대신 대칭행렬만 쓴다. (3)은 출처 6장 2절 첫머리의 '자기수반사상의 정규직교 기저에 관한 행렬'이라는 말을 수반사상 항목의 (5)로 증명한 것이다. (4)의 합은 출처 6장 2절 연습문제 2.1 d)(p.169)이고, 합성에 관한 문장은 연습문제 2.7 a)(p.170)의 '두 자기수반 행렬의 곱은 자기수반인가'에 답한 것이다. (6)의 대칭성은 출처 연습문제 2.8 a)(p.170)이고, 등식 ⟨(R* ∘ R)x, x⟩ = ⟨Rx, Rx⟩ 는 출처 5장 5절 연습문제 5.3(p.145)의 힌트 ‖Ax‖² = (Ax, Ax) = (A*Ax, x) 와 같은 식이다. (7)은 선형대수 2 의 '2 × 2 행렬의 실고윳값' 항목의 (5)가 b = c 를 '대칭인 2 × 2 행렬'이라 부르는 것과 이 항목의 정의가 같은 뜻임을 진술한 것이다. (8)의 극화 항등식은 출처 5장 6절 연습문제 6.3(p.150)의 실수판(A = A*)이고, 출처 7장 Lemma 1.2 의 2(p.199)가 그것을 다시 적으며 증명은 연습문제 6.3 에 맡긴다. (8)의 마지막 문장은 출처 7장 1.2(p.198)가 이차형식을 대칭행렬로 나타내는 방법이 하나뿐이라고 적는 것의 유일성 부분을 증명한 것이다. 예시 'AᵀA 와 AAᵀ 의 계산'은 출처 연습문제 2.8 a)를 수로 확인한 것이고, 출처 5장 4절의 4.3.1 An example(p.139)도 최소제곱을 풀며 A*A 를 계산한다. 반례 '곱이 대칭이 아닌 두 대칭행렬'은 출처 연습문제 2.7 a)에 대한 답이다. 반례 '대칭이 아닌 행렬에서 x 와 Ax 의 내적이 모두 0 인 예'의 행렬은 출처 5장 6절 연습문제 6.1(p.150)의 둘째 행렬과 같고, 같은 (Ax, x) 를 주는 행렬이 여럿이라는 출처 7장 1.2(p.198)의 관찰과 같은 발상이다. 확인 질문 '정규직교가 아닌 기저에서 자기수반사상의 행렬이 대칭이 아닐 수 있는가?'는 출처 6장 2절 첫머리(p.166)가 Hermitian matrix 를 '어떤 정규직교 기저에 관한' 자기수반사상의 행렬로 한정하는 것과 같은 대상을 다룬다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(리스 정리의 증명 통독). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$V$가 [[dimension|유한차원]]인 [[inner-product-space|내적공간]]이고 $T : V \to V$가 [[linear-map|선형사상]]이라 하자. $T^*$는 [[adjoint-map|수반사상]]의 것이다. $T$가 **자기수반사상**(self-adjoint map)인 것은 정확히 $T^* = T$일 때이고, 이때 "$T$는 자기수반이다"라고도 한다.

$n$이 자연수일 때 $n \times n$ [[matrix|행렬]] $A$가 **대칭행렬**(symmetric matrix)인 것은 정확히 $A^T = A$일 때이고([[transpose|전치행렬]]), 이때 "$A$는 대칭이다"라고도 한다.

다음이 성립한다. 아래에서 $n$은 자연수이고, $\mathbb{R}^n$에는 [[standard-inner-product|표준내적]]을 준다.

1. (내적으로 쓴 판정) $T$가 자기수반인 것은 정확히 모든 $x, y \in V$에서 $\langle Tx, y \rangle = \langle x, Ty \rangle$일 때이다.
2. (행렬의 사상) $A$가 $n \times n$ 행렬이면 다음 셋은 서로 동치이다. (i) [[matrix-vector-product|행렬과 벡터의 곱]]의 사상 $T_A : \mathbb{R}^n \to \mathbb{R}^n$이 자기수반이다. (ii) $A$가 대칭이다. (iii) 모든 $x, y \in \mathbb{R}^n$에서 $\langle Ax, y \rangle = \langle x, Ay \rangle$이다. 따라서 선형사상 $R : \mathbb{R}^n \to \mathbb{R}^n$이 자기수반인 것은 정확히 그 [[matrix-of-a-linear-map|행렬]] $[R]$가 대칭일 때이다.
3. (정규직교 기저에 관한 행렬) $\mathcal{B} = b_1, \dots, b_n$이 $V$의 [[orthonormal-basis|정규직교 기저]]이면, $T$가 자기수반인 것은 정확히 [[matrix-in-bases|기저에 관한 행렬]] $[T]_{\mathcal{B}}$가 대칭일 때이다.
4. (합, 스칼라배, 합성) $T_1, T_2 : V \to V$가 자기수반이고 $\alpha$가 실수이면 $T_1 + T_2$와 $\alpha T_1$은 자기수반이다([[linear-maps-form-a-vector-space|선형사상의 공간]]의 연산). 항등함수 $i_V$와 [[linear-map-examples|영사상]] $o : V \to V$는 자기수반이다. 또 $T_1 \circ T_2$가 자기수반인 것은 정확히 $T_1 \circ T_2 = T_2 \circ T_1$일 때이다.
5. (대칭행렬의 합, 스칼라배, 곱) $A$, $B$가 $n \times n$ 대칭행렬이고 $\alpha$가 실수이면 $A + B$와 $\alpha A$는 대칭이다. $I_n$과 $n \times n$ 영행렬은 대칭이고, 모든 $1 \times 1$ 행렬은 대칭이다. 또 [[matrix-product|행렬의 곱]] $AB$가 대칭인 것은 정확히 $AB = BA$일 때이다.
6. (수반사상과의 합성) $W$가 유한차원인 내적공간이고 $R : V \to W$가 선형사상이면 $R^* \circ R : V \to V$와 $R \circ R^* : W \to W$는 자기수반이고, 모든 $x \in V$에서 $\langle (R^* \circ R) x, x \rangle = \langle Rx, Rx \rangle$이다. 행렬로는, $m$이 자연수이고 $A$가 $m \times n$ 행렬이면 $A^T A$($n \times n$)와 $A A^T$($m \times m$)는 대칭이다.
7. ($2 \times 2$ 행렬) $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$가 대칭인 것은 정확히 $b = c$일 때이다. 따라서 [[real-eigenvalues-2x2|2 × 2 행렬의 실고윳값]]의 (5)의 "대칭인 $2 \times 2$ 행렬"($b = c$)은 이 항목의 대칭행렬과 같은 뜻이다.
8. (자기수반사상의 극화 항등식) $T$가 자기수반이면 모든 $x, y \in V$에서
   $$
   \begin{aligned}
   &\langle Tx, y \rangle \\
   &= 4^{-1}\bigl(\langle T(x + y), x + y \rangle \\
   &\qquad - \langle T(x - y), x - y \rangle\bigr)
   \end{aligned}
   $$
   이다. 따라서 자기수반인 $T$가 모든 $x \in V$에서 $\langle Tx, x \rangle = 0$이면 $T$는 영사상이고, 자기수반인 $T_1, T_2 : V \to V$가 모든 $x \in V$에서 $\langle T_1 x, x \rangle = \langle T_2 x, x \rangle$이면 $T_1 = T_2$이다. 행렬로는, $n \times n$ 대칭행렬 $A$가 모든 $x \in \mathbb{R}^n$에서 $\langle Ax, x \rangle = 0$이면 $A$는 영행렬이고, $n \times n$ 대칭행렬 $A$, $B$가 모든 $x \in \mathbb{R}^n$에서 $\langle Ax, x \rangle = \langle Bx, x \rangle$이면 $A = B$이다.
:::

:::english
Let $V$ be a finite-dimensional inner product space and let $T : V \to V$ be a linear map; $T^*$ is as in the entry on adjoints. $T$ is a **self-adjoint map** exactly when $T^* = T$; we then also say "$T$ is self-adjoint".

For a natural number $n$, an $n \times n$ matrix $A$ is a **symmetric matrix** exactly when $A^T = A$; we then also say "$A$ is symmetric".

The following hold. Below, $n$ is a natural number and $\mathbb{R}^n$ is given the standard inner product.

1. (Criterion via inner products) $T$ is self-adjoint exactly when $\langle Tx, y \rangle = \langle x, Ty \rangle$ for all $x, y \in V$.
2. (Maps of matrices) For an $n \times n$ matrix $A$ the following three are equivalent: (i) the map $T_A : \mathbb{R}^n \to \mathbb{R}^n$ of the matrix-vector product is self-adjoint; (ii) $A$ is symmetric; (iii) $\langle Ax, y \rangle = \langle x, Ay \rangle$ for all $x, y \in \mathbb{R}^n$. Hence a linear map $R : \mathbb{R}^n \to \mathbb{R}^n$ is self-adjoint exactly when its matrix $[R]$ is symmetric.
3. (Matrices with respect to orthonormal bases) If $\mathcal{B} = b_1, \dots, b_n$ is an orthonormal basis of $V$, then $T$ is self-adjoint exactly when the matrix $[T]_{\mathcal{B}}$ with respect to the basis is symmetric.
4. (Sums, scalar multiples, compositions) If $T_1, T_2 : V \to V$ are self-adjoint and $\alpha$ is a real number, then $T_1 + T_2$ and $\alpha T_1$ are self-adjoint (operations of the space of linear maps). The identity function $i_V$ and the zero map $o : V \to V$ are self-adjoint. Moreover, $T_1 \circ T_2$ is self-adjoint exactly when $T_1 \circ T_2 = T_2 \circ T_1$.
5. (Sums, scalar multiples, products of symmetric matrices) If $A$, $B$ are $n \times n$ symmetric matrices and $\alpha$ is a real number, then $A + B$ and $\alpha A$ are symmetric. $I_n$ and the $n \times n$ zero matrix are symmetric, and every $1 \times 1$ matrix is symmetric. Moreover, the matrix product $AB$ is symmetric exactly when $AB = BA$.
6. (Composition with the adjoint) If $W$ is a finite-dimensional inner product space and $R : V \to W$ is a linear map, then $R^* \circ R : V \to V$ and $R \circ R^* : W \to W$ are self-adjoint, and $\langle (R^* \circ R) x, x \rangle = \langle Rx, Rx \rangle$ for all $x \in V$. For matrices: if $m$ is a natural number and $A$ is an $m \times n$ matrix, then $A^T A$ ($n \times n$) and $A A^T$ ($m \times m$) are symmetric.
7. ($2 \times 2$ matrices) $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ is symmetric exactly when $b = c$. Hence the "symmetric $2 \times 2$ matrices" ($b = c$) of item (5) of the entry on real eigenvalues of $2 \times 2$ matrices are the same as the symmetric matrices of this entry.
8. (Polarization identity for self-adjoint maps) If $T$ is self-adjoint, then for all $x, y \in V$
   $$
   \begin{aligned}
   &\langle Tx, y \rangle \\
   &= 4^{-1}\bigl(\langle T(x + y), x + y \rangle \\
   &\qquad - \langle T(x - y), x - y \rangle\bigr).
   \end{aligned}
   $$
   Hence if a self-adjoint $T$ satisfies $\langle Tx, x \rangle = 0$ for all $x \in V$, then $T$ is the zero map, and if self-adjoint $T_1, T_2 : V \to V$ satisfy $\langle T_1 x, x \rangle = \langle T_2 x, x \rangle$ for all $x \in V$, then $T_1 = T_2$. For matrices: if an $n \times n$ symmetric matrix $A$ satisfies $\langle Ax, x \rangle = 0$ for all $x \in \mathbb{R}^n$, then $A$ is the zero matrix, and if $n \times n$ symmetric matrices $A$, $B$ satisfy $\langle Ax, x \rangle = \langle Bx, x \rangle$ for all $x \in \mathbb{R}^n$, then $A = B$.
:::

## 직관

자기수반사상은 내적 안에서 어느 쪽 자리에 두어도 값이 같은 사상입니다((1)). 곧 $x$와 $y$를 바꾸어 넣은 두 값 $\langle Tx, y \rangle$와 $\langle Ty, x \rangle$가 늘 같습니다. 정규직교 기저에 관한 행렬로 보면 이것은 성분표가 대각선에 대해 대칭이라는 것입니다. 정규직교 기저 $\mathcal{B}$에서 $[T]_{\mathcal{B}}$의 $(j, k)$ 성분은 $\langle T b_k, b_j \rangle$이므로, 대칭이라는 것은 "$b_k$를 $T$로 보내 $b_j$ 방향으로 잰 값"과 "$b_j$를 $T$로 보내 $b_k$ 방향으로 잰 값"이 같다는 뜻입니다. 비유하면 도시 사이의 거리표에서 $j$번째 도시에서 $k$번째 도시까지의 칸과 $k$번째에서 $j$번째까지의 칸이 같은 것과 닮았습니다.

행렬의 대칭성이 사상의 자기수반성과 맞아떨어지는 것은 표준내적이나 정규직교 기저에서입니다((2), (3)). 정규직교가 아닌 기저에서는 자기수반사상의 행렬이 대칭이 아닐 수 있고(확인 질문), 다른 내적에서는 대칭이 아닌 행렬의 사상이 자기수반일 수 있습니다(예시).

$1 \times 1$ 행렬, 단위행렬, 영행렬은 대칭이지만, 두 대칭행렬의 곱은 두 행렬이 교환될 때만 대칭입니다((5)). $A$가 정사각이 아니어도 $A^T A$와 $A A^T$는 언제나 대칭입니다((6)). 극화 항등식 (8)은 자기수반사상이 "$x$와 $Tx$의 내적"들만으로 정해진다는 것을 말합니다. 자기수반이라는 가정은 극화 항등식의 증명에서 $\langle Ty, x \rangle$를 $\langle Tx, y \rangle$로 바꾸는 한 단계에서만 쓰이고, 그 가정이 없으면 결론이 깨질 수 있습니다(반례).

## 성질의 증명

:::proof
아래에서 [[inner-product-space|내적과 내적공간]]의 번호는 "내적의 (1)"처럼, [[adjoint-map|수반사상]]의 번호는 "수반의 (1)"처럼 줄여 쓴다. (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다.

**(1)의 증명.** $T^* = T$이면 수반사상의 정의에 의해 모든 $x$, $y$에서 $\langle Tx, y \rangle = \langle x, T^* y \rangle = \langle x, Ty \rangle$이다. 거꾸로 모든 $x$, $y$에서 $\langle Tx, y \rangle = \langle x, Ty \rangle$이면 함수 $T : V \to V$가 $T$의 수반사상의 정의를 만족하므로 수반의 (1)의 유일성에 의해 $T = T^*$이다.

**(2)의 증명.** [[dimension|차원]]의 (4)에 의해 $\mathbb{R}^n$은 유한차원이다. 수반의 (4)에 의해 $(T_A)^* = T_{A^T}$이므로, (i)은 $T_{A^T} = T_A$와 같다. $A^T$와 $A$는 모두 $n \times n$ 행렬이므로 [[matrix-vector-product|행렬과 벡터의 곱]]의 (5)에 의해 이것은 $A^T = A$, 곧 (ii)와 같다. (1)을 $T_A$에 쓰면 (i)은 모든 $x$, $y$에서 $\langle T_A x, y \rangle = \langle x, T_A y \rangle$, 곧 (iii)과 같다. 마지막 문장은 [[matrix-of-a-linear-map|선형사상의 행렬]]의 (1)의 $R = T_{[R]}$에 이것을 쓴 것이다.

**(3)의 증명.** 수반의 (5)에 의해 $[T^*]_{\mathcal{B}} = ([T]_{\mathcal{B}})^T$이다. $T^* = T$이면 $([T]_{\mathcal{B}})^T = [T^*]_{\mathcal{B}} = [T]_{\mathcal{B}}$이므로 $[T]_{\mathcal{B}}$는 대칭이다. 거꾸로 $[T]_{\mathcal{B}}$가 대칭이면 $[T^*]_{\mathcal{B}} = [T]_{\mathcal{B}}$이다. $v \in V$이면 [[matrix-in-bases|기저에 관한 행렬]]의 (3)에 의해 $[T^* v]_{\mathcal{B}} = [T^*]_{\mathcal{B}} [v]_{\mathcal{B}} = [T]_{\mathcal{B}} [v]_{\mathcal{B}} = [Tv]_{\mathcal{B}}$이고, 그 항목의 (1)에 의해 $T^* v = C_{\mathcal{B}}([T^* v]_{\mathcal{B}}) = C_{\mathcal{B}}([Tv]_{\mathcal{B}}) = Tv$이다. 모든 $v$에서 값이 같으므로 [[function|함수]]의 같음에 의해 $T^* = T$이다.

**(4)의 증명.** 수반의 (3)의 (i)에 의해 $(T_1 + T_2)^* = T_1^* + T_2^* = T_1 + T_2$이고 $(\alpha T_1)^* = \alpha T_1^* = \alpha T_1$이다. 수반의 (3)의 (iv)에 의해 $(i_V)^* = i_V$이고 영사상 $o : V \to V$의 수반사상은 $o$이다. [[composition-of-linear-maps|선형사상의 합성]]의 (1)에 의해 $T_1 \circ T_2$는 선형사상이다. 수반의 (3)의 (ii)를 $U = V$, $R = T_2$, $T = T_1$에 쓰면 $(T_1 \circ T_2)^* = T_2^* \circ T_1^* = T_2 \circ T_1$이다. 따라서 $(T_1 \circ T_2)^* = T_1 \circ T_2$인 것은 정확히 $T_2 \circ T_1 = T_1 \circ T_2$일 때이다.

**(5)의 증명.** [[transpose|전치행렬]]의 (1)에 의해 $(A + B)^T = A^T + B^T = A + B$이고 $(\alpha A)^T = \alpha A^T = \alpha A$이다. 전치행렬의 (3)에 의해 $I_n^T = I_n$이다. 영행렬을 $O$라 하면 전치행렬의 정의에 의해 $O^T$의 모든 성분은 $O$의 성분 $0$이므로 [[matrix|행렬]]의 (2)에 의해 $O^T = O$이다. $1 \times 1$ 행렬 $C$에서는 $C^T$도 $1 \times 1$ 행렬이고 그 하나뿐인 성분은 $(C^T)_{1,1} = c_{1,1}$이므로 행렬의 (2)에 의해 $C^T = C$이다. 마지막으로 전치행렬의 (4)에 의해 $(AB)^T = B^T A^T = BA$이므로, $(AB)^T = AB$인 것은 정확히 $BA = AB$일 때이다.

**(6)의 증명.** 수반의 (1)에 의해 $R^* : W \to V$는 선형사상이다. 수반의 (3)의 (ii)를 선형사상 $R^* : W \to V$와 $R : V \to W$에 쓰고 수반의 (3)의 (iii)을 쓰면 $(R^* \circ R)^* = R^* \circ (R^*)^* = R^* \circ R$이다. 같은 방식으로 (ii)를 $R : V \to W$와 $R^* : W \to V$에 쓰면 $(R \circ R^*)^* = (R^*)^* \circ R^* = R \circ R^*$이다. 수반의 (2)를 $R$에 쓰면 모든 $x \in V$에서 $\langle R^*(Rx), x \rangle = \langle Rx, Rx \rangle$이다. 행렬로는, $A^T$가 $n \times m$ 행렬이므로 $A^T A$는 $n \times n$, $A A^T$는 $m \times m$ 행렬이고, 전치행렬의 (4)와 (1)에 의해 $(A^T A)^T = A^T (A^T)^T = A^T A$, $(A A^T)^T = (A^T)^T A^T = A A^T$이다.

**(7)의 증명.** 전치행렬의 정의에 의해 $A^T$의 $(1, 1)$, $(1, 2)$, $(2, 1)$, $(2, 2)$ 성분은 각각 $a$, $c$, $b$, $d$이다. 행렬의 (2)에 의해 $A^T = A$인 것은 정확히 $c = b$이고 $b = c$일 때, 곧 $b = c$일 때이다. [[real-eigenvalues-2x2|2 × 2 행렬의 실고윳값]]의 (5)는 같은 꼴의 $A$에서 $b = c$인 경우를 다룬다.

**(8)의 증명.** $T$가 자기수반이고 $x, y \in V$라 하자. [[linear-map|선형사상]]의 (T-합)과 (T2)에 의해 $T(x + y) = Tx + Ty$, $T(x - y) = Tx - Ty$이다. $a = \langle Tx, x \rangle$, $p = \langle Tx, y \rangle$, $q = \langle Ty, x \rangle$, $b = \langle Ty, y \rangle$라 하자. 내적의 (1)에 의해 $\langle Tx + Ty, x + y \rangle = (a + p) + (q + b)$이고, 내적의 (2)에 의해 $\langle Tx - Ty, x - y \rangle = (a - p) - (q - b)$이다. (1)과 내적의 조건 (i)에 의해 $q = \langle Ty, x \rangle = \langle y, Tx \rangle = \langle Tx, y \rangle = p$이다. 따라서 두 값은 $(a + p) + (p + b)$와 $(a - p) - (p - b)$이고, (K1), (K2), (K4), (K9), (K12)로 항을 모으면 그 차는 $(a - a) + (p + p + p + p) + (b - b) = 4p$이다((K12)의 (i)과 (K7)의 $2 + 2 = 4$). (K7)에 의해 $4 \ne 0$이므로 (K2)와 (K8)의 역수에 의해 $4^{-1}(4p) = (4^{-1} \cdot 4) p = 1p = p$이고, 이것이 극화 항등식이다.

자기수반인 $T$가 모든 $x$에서 $\langle Tx, x \rangle = 0$이면, 극화 항등식의 오른쪽의 두 값이 모두 $0$이므로 모든 $x$, $y$에서 $\langle Tx, y \rangle = 4^{-1}(0 - 0) = 0$이다((K9)). 내적의 (5)의 첫 문장에 의해 모든 $x$에서 $Tx = 0_V$이고, 함수의 같음에 의해 $T$는 영사상 $o$이다.

자기수반인 $T_1$, $T_2$가 모든 $x$에서 $\langle T_1 x, x \rangle = \langle T_2 x, x \rangle$라 하자. (4)에 의해 $T_1 - T_2 = T_1 + (-1)T_2$는 자기수반이고, [[linear-maps-form-a-vector-space|선형사상의 공간]]의 연산의 정의와 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B5)에 의해 $(T_1 - T_2)x = T_1 x - T_2 x$이므로, 내적의 (2)와 (K12)의 (v)에 의해 $\langle (T_1 - T_2)x, x \rangle = \langle T_1 x, x \rangle - \langle T_2 x, x \rangle = 0$이다. 앞 문단에 의해 $T_1 - T_2$는 영사상, 곧 벡터공간 $L(V, V)$의 영벡터이고, (B12)에 의해 $T_1 = T_2$이다.

$A$가 대칭이고 모든 $x$에서 $\langle Ax, x \rangle = 0$이면, (2)에 의해 $T_A$는 자기수반이고 $\langle T_A x, x \rangle = 0$이므로 영사상에 관한 위의 문단에 의해 모든 $x$에서 $Ax = 0$이다. 행렬과 벡터의 곱의 (3)에 의해 모든 $k$에서 $A$의 $k$번째 열은 $A e_k = 0$이고([[standard-basis|표준기저]]), [[matrix|행렬]]의 정의에 의해 $A$의 모든 성분 $a_{j,k}$는 그 열의 $j$번째 값 $0$이다. 행렬의 (2)에 의해 $A$는 영행렬이다.

$A$, $B$가 대칭이고 모든 $x$에서 $\langle Ax, x \rangle = \langle Bx, x \rangle$라 하자. $A - B = A + (-1)B$는 (5)에 의해 대칭이다. 행렬과 벡터의 곱의 (4)와 (B5)에 의해 $(A - B)x = Ax + (-1)(Bx) = Ax - Bx$이고, 내적의 (2)에 의해 $\langle (A - B)x, x \rangle = \langle Ax, x \rangle - \langle Bx, x \rangle = 0$이다((K12)의 (v)). 앞 문단에 의해 $A - B$는 영행렬, 곧 [[matrix|행렬]]의 (1)의 벡터공간 $M_{n \times n}$의 영벡터이고, (B12)에 의해 $A = B$이다. $\blacksquare$
:::

## 예시와 반례

:::example[AᵀA 와 AAᵀ 의 계산]
$A = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & -1 \end{pmatrix}$이라 합시다($2 \times 3$). $A$의 열은 $\mathbf{a}_1 = (1, 0)$, $\mathbf{a}_2 = (2, 1)$, $\mathbf{a}_3 = (0, -1)$이고, [[standard-inner-product|ℝⁿ 의 표준내적]]의 (5)에 의해 $A^T A$의 $(j, k)$ 성분은 $\langle \mathbf{a}_j, \mathbf{a}_k \rangle$입니다. $\langle \mathbf{a}_1, \mathbf{a}_1 \rangle = 1$, $\langle \mathbf{a}_1, \mathbf{a}_2 \rangle = 2$, $\langle \mathbf{a}_1, \mathbf{a}_3 \rangle = 0$, $\langle \mathbf{a}_2, \mathbf{a}_2 \rangle = 5$, $\langle \mathbf{a}_2, \mathbf{a}_3 \rangle = -1$, $\langle \mathbf{a}_3, \mathbf{a}_3 \rangle = 1$이므로

$$
A^T A = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 5 & -1 \\ 0 & -1 & 1 \end{pmatrix}
$$

입니다. [[transpose|전치행렬]]의 (2)에 의해 $A^T$의 열은 $A$의 행 $(1, 2, 0)$, $(0, 1, -1)$이고, 전치행렬의 (1)에 의해 $A A^T = (A^T)^T A^T$이므로 같은 방식으로 그 $(1, 1)$, $(1, 2)$, $(2, 1)$, $(2, 2)$ 성분은 이 두 행끼리의 내적 $5$, $2$, $2$, $2$입니다. 곧 $A A^T = \begin{pmatrix} 5 & 2 \\ 2 & 2 \end{pmatrix}$입니다. 두 행렬은 크기가 다르지만 모두 대칭이고, 이것은 (6)과 맞습니다.
:::

:::example[가중치를 곱한 내적에서 자기수반인 사상]
$\mathbb{R}^2$에 [[inner-product-examples|내적의 예]]의 (1)의 가중치 $2$, $1$을 곱한 내적 $\langle x, y \rangle_w = 2 x_1 y_1 + x_2 y_2$를 줍니다. 그 항목의 (1)의 (iii)에 의해 이것은 내적이고, [[dimension|차원]]의 (4)에 의해 $\mathbb{R}^2$는 유한차원입니다. $A = \begin{pmatrix} 0 & 1 \\ 2 & 0 \end{pmatrix}$은 $(1, 2)$ 성분이 $1$, $(2, 1)$ 성분이 $2$여서 대칭이 아니고, $Ax = (x_2, 2 x_1)$입니다. 모든 $x$, $y$에서

$$
\begin{aligned}
\langle Ax, y \rangle_w &= 2 x_2 y_1 + 2 x_1 y_2, \\
\langle x, Ay \rangle_w &= 2 x_1 y_2 + x_2 \cdot 2 y_1
\end{aligned}
$$

이므로 두 값이 같고, (1)에 의해 $T_A$는 이 내적에 관한 자기수반사상입니다. (2)의 판정은 표준내적에 대한 것이어서 이 예와 어긋나지 않습니다.
:::

:::counterexample[곱이 대칭이 아닌 두 대칭행렬]
$A = \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}$와 $B = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$은 (7)에 의해 대칭입니다. 그러나

$$
AB = \begin{pmatrix} 1 & 1 \\ 2 & 2 \end{pmatrix}, \qquad BA = \begin{pmatrix} 1 & 2 \\ 1 & 2 \end{pmatrix}
$$

이어서 $AB$의 $(1, 2)$ 성분 $1$과 $(2, 1)$ 성분 $2$가 다르므로 $AB$는 대칭이 아닙니다. (5)에 따르면 이것은 $AB \ne BA$이기 때문입니다.
:::

:::counterexample[대칭이 아닌 행렬에서 x 와 Ax 의 내적이 모두 0 인 예]
$A = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$이면 $Ax = (-x_2, x_1)$이고, 모든 $x \in \mathbb{R}^2$에서 $\langle Ax, x \rangle = -x_2 x_1 + x_1 x_2 = 0$입니다. 그런데 $A$는 영행렬이 아닙니다. $A$는 $(1, 2)$ 성분이 $-1$, $(2, 1)$ 성분이 $1$이어서 대칭이 아니므로 (8)과 어긋나지 않습니다. 실제로 $x = e_1$, $y = e_2$에서 $\langle Ae_1, e_2 \rangle = \langle (0, 1), (0, 1) \rangle = 1$인데 극화 항등식의 오른쪽은 $4^{-1}(0 - 0) = 0$이어서, 대칭이 아니면 극화 항등식이 성립하지 않을 수 있습니다. 같은 이유로 영행렬 $O$와 $A$는 모든 $x$에서 $\langle Ox, x \rangle = \langle Ax, x \rangle$이지만 다른 행렬입니다.
:::

## 확인 질문

:::check[정규직교가 아닌 기저에서 자기수반사상의 행렬이 대칭이 아닐 수 있는가?]
그럴 수 있습니다. $D = \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}$은 (7)에 의해 대칭이므로 (2)에 의해 $T_D$는 표준내적에 관한 자기수반사상입니다. $b_1 = (1, 0)$, $b_2 = (1, 1)$이라 하면 $\alpha b_1 + \beta b_2 = (\alpha + \beta, \beta)$가 영벡터일 때 $\alpha = \beta = 0$이므로 열 $\mathcal{B} = b_1, b_2$는 일차독립이고, 길이가 $\dim \mathbb{R}^2 = 2$이므로 [[independent-and-spanning-bounds|일차독립인 열과 생성하는 열의 길이]]의 (3)에 의해 기저입니다. 행 규칙에 의해 $T_D b_1 = (1, 0) = 1 \cdot b_1 + 0 \cdot b_2$이고 $T_D b_2 = (1, 2) = (-1) \cdot b_1 + 2 \cdot b_2$이므로 [[matrix-in-bases|기저에 관한 행렬]]의 (2)에 의해 $[T_D]_{\mathcal{B}} = \begin{pmatrix} 1 & -1 \\ 0 & 2 \end{pmatrix}$이고, 이것은 대칭이 아닙니다. $\langle b_1, b_2 \rangle = 1$이어서 $\mathcal{B}$는 정규직교 기저가 아니므로 (3)과 어긋나지 않습니다.
:::

:::check[$\mathbb{R}^1$ 위의 선형사상은 모두 자기수반인가?]
그렇습니다. 선형사상 $R : \mathbb{R}^1 \to \mathbb{R}^1$의 [[matrix-of-a-linear-map|행렬]] $[R]$는 $1 \times 1$ 행렬이고, (5)에 의해 모든 $1 \times 1$ 행렬은 대칭이므로 (2)의 마지막 문장에 의해 $R$는 자기수반입니다.
:::
