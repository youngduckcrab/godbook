---
title: 실베스터 판정법
title_en: Sylvester's Criterion
aliases: [실베스터 판정법, 앞 주 소행렬, 앞 주 소행렬식, Sylvester's criterion, Sylvester's criterion of positivity, leading principal submatrix, leading principal minor]
kind: theorem
field: linear-algebra
msc: ["15A63", "15A15"]
level: undergrad
summary: 대칭행렬 A 의 처음 k 개의 행과 열로 이루어진 k × k 행렬을 A 의 k 번째 앞 주 소행렬이라 한다. A 가 양의 정부호인 것은 정확히 모든 앞 주 소행렬의 행렬식이 양수일 때이고, 음의 정부호인 것은 정확히 k 번째 앞 주 소행렬의 행렬식에 (−1)ᵏ 을 곱한 값이 모두 양수일 때이다. 증명은 스펙트럼 정리와 k 에 대한 귀납으로 하고, 셈을 쓰지 않는 두 갈래로 나눈다.
requires: [mathematical-induction, real-number-arithmetic, real-order-axioms, order-properties-of-reals, power-of-a-real-number, vector-space, vector-space-basic-properties, real-function-space, finite-sum-of-vectors, standard-basis, linear-independence, matrix, matrix-vector-product, matrix-product, transpose, diagonalizable, determinant, determinant-of-product, eigenvalue-and-eigenvector, inner-product-space, standard-inner-product, orthonormal-list, self-adjoint-map, spectral-theorem, quadratic-form, positive-definite-matrix]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 7장 4절 소절 4.1 Sylvester's criterion of positivity 의 첫 단락과 식 (4.1), p.209, 앞 주 소행렬 A₁, …, Aₙ 과 Theorem 4.2, 첫째 증명의 개요, p.210; 같은 절 Theorem 4.2 의 둘째 증명, p.213; 소절 4.3 Some remarks, pp.213–214; 연습문제 4.3–4.6, p.214
    checked: original
    note: "(2)는 출처 Theorem 4.2(p.210)를 실대칭행렬로 진술한 것이다. 출처는 앞 주 소행렬을 A_k 로 쓰고('upper left submatrices', p.210) 이름을 붙이지 않는다. 이 사이트에서 A_k(b) 는 크라메르 공식의 열을 바꾼 행렬이므로 A^{[k]} 로 쓰고, '앞 주 소행렬'(leading principal submatrix)이라는 이름은 이 사이트가 붙였다(source-grep 으로 책 전체에서 'leading principal' 0건, 'principal minor' 0건, 'upper left' 2건 — p.168 의 왼쪽 위 성분과 p.210 의 이 행렬들). 선형대수 2 의 소행렬 A^{(j,k)} 와는 다른 행렬이다. 증명은 출처와 다르다. 출처의 ⇒ 는 'A > 0 이면 A_k > 0 도 성립한다(설명할 수 있는가?)'(p.210, p.213)이고, 이 항목의 (1)의 끼워 넣기가 그 설명이다. 출처의 ⇐ 의 첫째 증명(p.210)은 행·열 연산을 차례로 하는 개요이고 남는 경우를 연습으로 돌리며, 둘째 증명(p.213)은 k 에 대한 귀납과 고윳값의 끼임(Corollary 4.4, 최소최대 정리의 따름)으로 λ_j ≥ μ_j > 0 을 얻는다. 이 사이트는 최소최대 정리와 고윳값을 크기순으로 늘어놓는 것을 싣지 않으므로, 귀납은 출처의 둘째 증명과 같이 하되 끼임 대신 스펙트럼 정리의 정규직교 고유벡터 둘을 마지막 성분이 0 이 되게 섞는 갈래 (가)와 행렬식의 부호로 끝내는 갈래 (나)로 나눈다. (3)은 출처 소절 4.3(p.214)의 'A 가 음의 정부호인 것은 정확히 (−1)ᵏ det A_k > 0 일 때'이다. (4)는 출처 (4.1)(p.209)과 같다. 반례 '모든 앞 주 소행렬의 행렬식이 0 이상인데 양의 준정부호가 아닌 예'는 출처 연습문제 4.4(p.214, det A_k ≥ 0 이지만 양의 준정부호가 아닌 행렬을 가장 작은 n 에서 찾아라)와 같은 물음이다. 출처 소절 4.3(p.214)은 '2 × 2 행렬에서는 det A_k ≥ 0 이면 양의 준정부호'라고 적는데, 이 반례는 2 × 2 이고 a₁,₁ = 0 이어서 그 문장과 맞지 않는다. 출처가 그 근거로 드는 연습문제 4.3 은 a₁,₁ > 0 을 가정한다. 반례 '앞 주 소행렬의 행렬식이 모두 음수인 행렬'은 출처 소절 4.3(p.214)의 '학생들이 흔히 하는 실수: det A_k < 0 이면 음의 정부호'와 같은 내용이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(예의 행렬식·고유벡터·합동 대각화 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$n$이 자연수이고 $\mathbb{R}^n$에는 [[standard-inner-product|표준내적]]을 주며, $A$가 $n \times n$ [[matrix|행렬]]이라 하자. 이차형식 $q_A$는 [[quadratic-form|쌍선형 형식과 이차형식]]의 것, 양의 정부호와 음의 정부호는 [[positive-definite-matrix|양의 정부호 행렬]]의 것, $\det$는 [[determinant|행렬식]]의 것이다.

**정의.** $k \in \{1, \dots, n\}$이면, 각 $(i, j) \in \{1, \dots, k\} \times \{1, \dots, k\}$에 실수 $a_{i,j}$가 정해지므로 [[real-function-space|(G)]]에 의해 $(i, j)$ 성분이 $a_{i,j}$인 $k \times k$ 행렬이 있다. 이것을 $A$의 $k$번째 **앞 주 소행렬**(leading principal submatrix)이라 하고 $A^{[k]}$로 쓴다. 곧 $A^{[k]}$는 $A$의 처음 $k$개의 행과 처음 $k$개의 열로 이루어진 행렬이다. [[matrix|행렬]]의 (2)에 의해 $A^{[n]} = A$이고, $A^{[1]} = \begin{pmatrix} a_{1,1} \end{pmatrix}$이다.

1. (끼워 넣기) $k \in \{1, \dots, n\}$이라 하고, $j$번째 열이 [[standard-basis|표준기저]]의 $e_j \in \mathbb{R}^n$ ($j \in \{1, \dots, k\}$)인 $n \times k$ 행렬을 $E$라 하자. $y \in \mathbb{R}^k$이면 $Ey$는 $i \le k$에서의 값이 $y_i$이고 $i > k$에서의 값이 $0$인 $\mathbb{R}^n$의 원소이다. 다음이 성립한다.
   - (i) $A^{[k]} = E^T A E$이다. 따라서 모든 $y \in \mathbb{R}^k$에서 $q_A(Ey) = q_{A^{[k]}}(y)$이다.
   - (ii) $Ey = 0$인 것은 정확히 $y = 0$일 때이다. $x \in \mathbb{R}^n$이고 $i > k$인 모든 $i$에서 $x_i = 0$이면, $i \le k$에서 $y_i = x_i$인 $y \in \mathbb{R}^k$에 대하여 $x = Ey$이다.
   - (iii) $A$가 대칭이면 $A^{[k]}$도 대칭이다. $A$가 대칭이고 양의 정부호이면 $A^{[k]}$도 양의 정부호이다.
   - (iv) $1 \le l \le k$이면 $(A^{[k]})^{[l]} = A^{[l]}$이다.
2. (판정법) $A$가 대칭이면, $A$가 양의 정부호인 것은 정확히 모든 $k \in \{1, \dots, n\}$에서 $0 < \det A^{[k]}$일 때이다.
3. (음의 정부호) $A$가 대칭이면, $A$가 음의 정부호인 것은 정확히 모든 $k \in \{1, \dots, n\}$에서 $0 < (-1)^k \det A^{[k]}$일 때이다.
4. ($n = 2$) $n = 2$이고 $A = \begin{pmatrix} a & b \\ b & c \end{pmatrix}$이면, $A$가 양의 정부호인 것은 정확히 $0 < a$이고 $0 < ac - bb$일 때이다.
:::

:::english
Let $n$ be a natural number, give $\mathbb{R}^n$ the standard inner product, and let $A$ be an $n \times n$ matrix. The quadratic form $q_A$ is that of the entry on bilinear and quadratic forms, positive definite and negative definite are those of the entry on positive definite matrices, and $\det$ is the determinant.

**Definition.** For $k \in \{1, \dots, n\}$, a real number $a_{i,j}$ is determined for each $(i, j) \in \{1, \dots, k\} \times \{1, \dots, k\}$, so by (G) there is a $k \times k$ matrix whose $(i, j)$ entry is $a_{i,j}$. It is called the $k$th **leading principal submatrix** of $A$ and written $A^{[k]}$. That is, $A^{[k]}$ is the matrix formed by the first $k$ rows and the first $k$ columns of $A$. By item (2) of the entry on matrices, $A^{[n]} = A$, and $A^{[1]} = \begin{pmatrix} a_{1,1} \end{pmatrix}$.

1. (Embedding) Let $k \in \{1, \dots, n\}$ and let $E$ be the $n \times k$ matrix whose $j$th column is the standard basis vector $e_j \in \mathbb{R}^n$ ($j \in \{1, \dots, k\}$). For $y \in \mathbb{R}^k$, $Ey$ is the element of $\mathbb{R}^n$ whose value at $i \le k$ is $y_i$ and whose value at $i > k$ is $0$. The following hold.
   - (i) $A^{[k]} = E^T A E$. Hence $q_A(Ey) = q_{A^{[k]}}(y)$ for every $y \in \mathbb{R}^k$.
   - (ii) $Ey = 0$ exactly when $y = 0$. If $x \in \mathbb{R}^n$ and $x_i = 0$ for every $i > k$, then $x = Ey$ for the $y \in \mathbb{R}^k$ with $y_i = x_i$ for $i \le k$.
   - (iii) If $A$ is symmetric, then so is $A^{[k]}$. If $A$ is symmetric and positive definite, then $A^{[k]}$ is positive definite.
   - (iv) If $1 \le l \le k$, then $(A^{[k]})^{[l]} = A^{[l]}$.
2. (Criterion) If $A$ is symmetric, then $A$ is positive definite exactly when $0 < \det A^{[k]}$ for every $k \in \{1, \dots, n\}$.
3. (Negative definite) If $A$ is symmetric, then $A$ is negative definite exactly when $0 < (-1)^k \det A^{[k]}$ for every $k \in \{1, \dots, n\}$.
4. ($n = 2$) If $n = 2$ and $A = \begin{pmatrix} a & b \\ b & c \end{pmatrix}$, then $A$ is positive definite exactly when $0 < a$ and $0 < ac - bb$.
:::

## 직관

양의 정부호인지 보려면 원래는 영벡터가 아닌 모든 $x$에서 $q_A(x)$의 부호를 따지거나 고윳값을 모두 구해야 합니다. 판정법은 행렬식 $n$개만 계산하면 된다고 말합니다. $A^{[k]}$의 이차형식은 $q_A$를 처음 $k$개의 좌표만 움직이고 나머지를 $0$으로 둔 벡터에 제한한 것이므로((1)), $A$가 양의 정부호이면 모든 $A^{[k]}$가 양의 정부호이고 그 행렬식이 양수인 것은 자연스럽습니다.

거꾸로는 좌표를 하나씩 늘려 가며 봅니다. $A^{[k-1]}$이 양의 정부호인데 $A^{[k]}$가 아니라면, $A^{[k]}$의 고윳값 가운데 $0$ 이하인 것이 있습니다. 그런 고윳값이 둘이면 그 두 고유벡터를 섞어 마지막 좌표가 $0$인 벡터를 만들 수 있고, 그 벡터에서 $q$가 $0$ 이하라서 $A^{[k-1]}$이 양의 정부호라는 데 어긋납니다. 하나뿐이면 행렬식, 곧 고윳값의 곱이 $0$ 이하가 되어 $\det A^{[k]} > 0$에 어긋납니다. 증명은 "하나뿐", "둘 이상"을 세지 않고 "다른 자리에도 $0$ 이하인 고윳값이 있는가"로 나눕니다.

$n = 1$이면 판정법은 $a_{1,1} > 0$이고, $A = I_n$이면 모든 $A^{[k]} = I_k$의 행렬식이 $1$입니다. 부호가 바뀌는 음의 정부호에서는 홀수 번째 행렬식이 음수, 짝수 번째가 양수여야 합니다.

## 증명

:::idea
(1)의 끼워 넣기로 ⇒ 를 얻는다. ⇐ 는 $k$에 대한 귀납이다. $M = A^{[k]}$를 직교 대각화하고, 양의 정부호가 아니면 $0$ 이하인 고윳값 $\lambda_i$가 있다. 다른 $0$ 이하인 고윳값 $\lambda_j$가 있으면 두 고유벡터의 일차결합으로 마지막 성분이 $0$인 영벡터가 아닌 $x$를 만들어 $q_M(x) \le 0$을 얻고, 없으면 $\det M = \lambda_1 \cdots \lambda_k \le 0$이다.
:::

:::hint
$E^T A E$의 $(i, j)$ 성분은 $E$의 $i$번째 열과 $AE$의 $j$번째 열의 표준내적입니다.
:::

:::hint
두 정규직교 고유벡터의 마지막 성분이 $c_i$, $c_j$이면 $c_j \mathbf{q}_i - c_i \mathbf{q}_j$의 마지막 성분은 $0$입니다. $c_i = c_j = 0$이면 $\mathbf{q}_i$ 자신이 그런 벡터입니다.
:::

:::proof
아래에서 (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것, (W1)–(W4)는 [[real-order-axioms|실수의 순서]]의 것, (B1)–(B12)는 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 것, (H0)–(H7)과 (C1)–(C6)은 [[finite-sum-of-vectors|벡터의 유한 합]]의 것이고, 순서의 성질은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호로, 내적의 조건과 성질은 [[inner-product-space|내적과 내적공간]]의 번호로, 표준내적의 성질은 [[standard-inner-product|ℝⁿ 의 표준내적]]의 번호로, 이차형식의 성질은 [[quadratic-form|쌍선형 형식과 이차형식]]의 번호로, 양의 정부호 행렬의 성질은 [[positive-definite-matrix|양의 정부호 행렬]]의 번호로 인용한다. 표준내적은 표준내적의 (1)에 의해 내적이다.

**(1).** $Ey$의 값: [[matrix-vector-product|행렬과 벡터의 곱]]의 정의에 의해 $Ey = y_1 e_1 + \cdots + y_k e_k$이고, [[standard-basis|표준기저]]의 (1)에 의해 $i$에서의 값은 $j$번째 항이 $y_j (e_j)_i$인 열의 합이다. $i \le k$이면 $j = i$인 항만 $y_i$이고 나머지는 $0$이므로 (H7)에 의해 그 값은 $y_i$이고, $i > k$이면 모든 항이 $0$이므로 (H5)에 의해 $0$이다((K4), (K9)).

(i) $E^T$는 $k \times n$, $AE$는 $n \times k$ 행렬이다. [[matrix-product|행렬의 곱]]의 정의와 행렬과 벡터의 곱의 (3)에 의해 $AE$의 $j$번째 열은 $Ae_j = \mathbf{a}_j$이다. 표준내적의 (5)에 의해 $E^T(AE)$의 $(i, j)$ 성분은 $\langle e_i, \mathbf{a}_j \rangle$이고, 표준내적의 (2)에 의해 이것은 $\mathbf{a}_j$의 $i$에서의 값 $a_{i,j}$이다. [[matrix|행렬]]의 (2)에 의해 $E^T A E = A^{[k]}$이다. 이차형식의 (5)를 $m = k$, $S = E$에 쓰면 $q_A(Ey) = q_{E^T A E}(y) = q_{A^{[k]}}(y)$이다.

(ii) $Ey = 0$이면 위의 값에 의해 모든 $i \le k$에서 $y_i = 0$이므로 $y = 0$이고, $y = 0$이면 (C3)에 의해 $Ey = 0$이다. 둘째 문장의 $y$는 (G)로 있고, $x$와 $Ey$는 $i \le k$에서 $x_i = y_i$, $i > k$에서 둘 다 $0$이므로 같다.

(iii) $A$가 대칭이면 $(A^{[k]})_{j,i} = a_{j,i} = a_{i,j}$이므로 [[transpose|전치행렬]]의 정의와 행렬의 (2)에 의해 $A^{[k]}$는 대칭이다. $A$가 양의 정부호이고 $y \ne 0$이면 (ii)에 의해 $Ey \ne 0$이고, (i)에 의해 $q_{A^{[k]}}(y) = q_A(Ey) > 0$이다.

(iv) 두 행렬은 모두 $l \times l$이고 $(i, j)$ 성분이 둘 다 $a_{i,j}$이므로 행렬의 (2)에 의해 같다.

**(2) ⇒.** $A$가 양의 정부호이면 (1)의 (iii)에 의해 모든 $A^{[k]}$가 대칭이고 양의 정부호이며, 양의 정부호 행렬의 (6)의 (i)에 의해 $0 < \det A^{[k]}$이다.

**(2) ⇐.** 모든 $k$에서 $0 < \det A^{[k]}$라 하자. 자연수 $k$에 대한 명제 "$k \le n$이면 $A^{[k]}$는 양의 정부호이다"를 [[mathematical-induction|수학적 귀납법]]으로 보인다. $A^{[k]}$는 (1)의 (iii)에 의해 대칭이다.

기초: [[determinant|행렬식]]의 (2)에 의해 $\det A^{[1]} = a_{1,1}$이므로 $0 < a_{1,1}$이고, 양의 정부호 행렬의 (10)의 (i)에 의해 $A^{[1]}$은 양의 정부호이다.

귀납 단계: $k \ge 2$이고 $k \le n$이며 $A^{[k-1]}$이 양의 정부호라 하자. $M = A^{[k]}$라 하면 (1)의 (iv)에 의해 $M^{[k-1]} = A^{[k-1]}$이다. $M$이 양의 정부호가 아니라고 하자. [[spectral-theorem|실스펙트럼 정리]]의 (3)에 의해 $M = QDQ^T$인 $k \times k$ 직교행렬 $Q$와 $D = \operatorname{diag}(\lambda_1, \dots, \lambda_k)$가 있고, $Q$의 열 $\mathbf{q}_1, \dots, \mathbf{q}_k$는 $\mathbb{R}^k$의 정규직교 기저이며 모든 $l$에서 $M\mathbf{q}_l = \lambda_l \mathbf{q}_l$이다. 양의 정부호 행렬의 (4)의 (i)을 $S = Q$에 쓰면, 모든 $l$에서 $0 < \lambda_l$인 것은 아니므로 순서의 성질 (1)의 (iii)에 의해 $\lambda_i \le 0$인 $i$가 있다. 다음 두 경우 가운데 하나가 성립한다.

- (가) $j \ne i$이고 $\lambda_j \le 0$인 $j$가 있다.
- (나) $j \ne i$인 모든 $j$에서 $0 < \lambda_j$이다.

(가)의 경우: $c_i$, $c_j$를 $\mathbf{q}_i$, $\mathbf{q}_j$의 $k$에서의 값이라 하고, $c_i = c_j = 0$이면 $(\alpha, \beta) = (1, 0)$, 아니면 $(\alpha, \beta) = (c_j, -c_i)$로 두자. 어느 쪽이든 $\alpha$, $\beta$ 가운데 $0$이 아닌 것이 있다. $x = \alpha \mathbf{q}_i + \beta \mathbf{q}_j$라 하자. $\langle \mathbf{q}_i, \mathbf{q}_j \rangle = 0$이고 둘 다 단위벡터이므로 두 항의 열 $\mathbf{q}_i, \mathbf{q}_j$는 [[orthonormal-list|정규직교 열]]이고 그 항목의 (2)에 의해 [[linear-independence|일차독립]]이므로 $x \ne 0$이다. $x$의 $k$에서의 값은 [[real-function-space|실숫값 함수의 공간]]의 연산에 의해 $\alpha c_i + \beta c_j$이고, 첫째 경우 $0 + 0 = 0$, 둘째 경우 $c_j c_i - c_i c_j = 0$이다((K1), (K9)). 행렬과 벡터의 곱의 (2)에 의해 $Mx = (\alpha\lambda_i)\mathbf{q}_i + (\beta\lambda_j)\mathbf{q}_j$이므로, 내적의 (1)과 정규직교성에 의해
$$
\begin{aligned}
q_M(x) &= (\alpha\lambda_i)\alpha + (\beta\lambda_j)\beta \\
&= \alpha^2 \lambda_i + \beta^2 \lambda_j
\end{aligned}
$$
이다((K1), (K2), [[power-of-a-real-number|실수의 거듭제곱]]의 (1)). 순서의 성질 (5)의 (iii)과 (4)의 (iv)에 의해 두 항은 모두 $0$ 이하이고, 순서의 성질 (2)의 (iii)에 의해 $q_M(x) \le 0$이다. (1)의 (ii)를 $M$과 $k - 1$에 쓰면 $x = E'y$인 $y \in \mathbb{R}^{k-1}$이 있고($E'$은 $M$에 대한 (1)의 $k \times (k-1)$ 행렬), $x \ne 0$이므로 $y \ne 0$이다. (1)의 (i)에 의해 $q_{A^{[k-1]}}(y) = q_{M^{[k-1]}}(y) = q_M(x) \le 0$이 되어, $A^{[k-1]}$이 양의 정부호라는 데 어긋난다(순서의 성질 (1)의 (i)).

(나)의 경우: 양의 정부호 행렬의 (6)에 의해 $\det M = \lambda_1 \cdots \lambda_k$이고, 그 항목의 (1)의 (iii)을 $m = k$, 이 $i$에 쓰면 $\lambda_1 \cdots \lambda_k \le 0$이다. 이것은 $0 < \det A^{[k]} = \det M$에 어긋난다.

두 경우 모두 어긋나므로 $M = A^{[k]}$는 양의 정부호이다. 귀납법에 의해 모든 $k \le n$에서 $A^{[k]}$가 양의 정부호이고, $k = n$이면 $A^{[n]} = A$이다.

**(3).** $-A$는 대칭이고(자기수반사상과 대칭행렬의 (5)), [[matrix|행렬]]의 (1)에 의해 $(-A)^{[k]}$의 $(i, j)$ 성분은 $-a_{i,j}$이므로 $(-A)^{[k]} = -(A^{[k]})$이다. [[determinant-of-product|곱의 행렬식]]의 (4)에 의해 $\det(-(A^{[k]})) = (-1)^k \det A^{[k]}$이다. 양의 정부호 행렬의 (2)의 (ii)에 의해 $A$가 음의 정부호인 것은 정확히 $-A$가 양의 정부호일 때이고, (2)를 $-A$에 쓰면 이것은 정확히 모든 $k$에서 $0 < (-1)^k \det A^{[k]}$일 때이다.

**(4).** $A^{[1]} = \begin{pmatrix} a \end{pmatrix}$이고 $A^{[2]} = A$이다. 행렬식의 (2)와 (4)에 의해 $\det A^{[1]} = a$, $\det A = ac - bb$이므로 (2)에서 나온다. $\blacksquare$
:::

## 예시와 반례

:::example[3 × 3 행렬을 행렬식 셋으로 판정하기]
$$
A = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 2 & 1 \\ 0 & 1 & 2 \end{pmatrix}
$$
은 대칭이고 $\det A^{[1]} = 2$, $\det A^{[2]} = 4 - 1 = 3$이며, [[determinant|행렬식]]의 (4)의 $3 \times 3$ 식으로 계산하면 $\det A = 2(4 - 1) - 1(2 - 0) + 0 = 4$입니다. 셋 다 양수이므로 (2)에 의해 $A$는 양의 정부호입니다. 고윳값을 구하지 않고도 판정할 수 있습니다. 실제로 $q_A(x) = 2x_1^2 + 2x_2^2 + 2x_3^2 + 2x_1 x_2 + 2x_2 x_3$이고, 이것은 $x_1^2 + (x_1 + x_2)^2 + (x_2 + x_3)^2 + x_3^2$과 같아서 $x \ne 0$이면 양수입니다.
:::

:::counterexample[모든 앞 주 소행렬의 행렬식이 0 이상인데 양의 준정부호가 아닌 예]
"양수"를 "$0$ 이상"으로, "양의 정부호"를 "양의 준정부호"로 바꾼 판정은 성립하지 않을 수 있습니다.
$$
B = \begin{pmatrix} 0 & 0 \\ 0 & -1 \end{pmatrix}
$$
에서 $\det B^{[1]} = 0$이고 $\det B = 0$이어서 둘 다 $0$ 이상이지만, $q_B(e_2) = -1 < 0$이므로 $B$는 양의 준정부호가 아닙니다. (2)의 증명의 귀납은 앞 주 소행렬이 양의 정부호라는 것을 다음 단계로 넘기는데, 이 $B$에서는 $B^{[1]} = \begin{pmatrix} 0 \end{pmatrix}$이 양의 정부호가 아니어서 첫 단계부터 넘길 것이 없습니다.
:::

:::counterexample[앞 주 소행렬의 행렬식이 모두 음수인 행렬]
$$
C = \begin{pmatrix} -1 & 2 \\ 2 & 1 \end{pmatrix}
$$
은 $\det C^{[1]} = -1 < 0$, $\det C = -1 - 4 = -5 < 0$이지만 음의 정부호가 아닙니다. $q_C(e_2) = 1 > 0$이기 때문입니다. (3)의 조건은 $k = 2$에서 $(-1)^2 \det C = -5 > 0$을 요구하는데 이것이 거짓입니다. 실제로 [[positive-definite-matrix|양의 정부호 행렬]]의 (10)의 (iii)에 의해 $\det C < 0$이므로 $C$는 부정부호입니다.
:::

## 확인 질문

:::check[$A = \begin{pmatrix} 1 & 2 & 0 \\ 2 & t & 0 \\ 0 & 0 & 3 \end{pmatrix}$가 양의 정부호가 되는 실수 $t$는 무엇인가?]
$\det A^{[1]} = 1 > 0$, $\det A^{[2]} = t - 4$, [[determinant|행렬식]]의 (4)의 $3 \times 3$ 식으로 $\det A = 3t - 12 = 3(t - 4)$입니다. (2)에 의해 양의 정부호인 것은 정확히 $t - 4 > 0$이고 $3(t - 4) > 0$일 때, 곧 $t > 4$일 때입니다.
:::

:::check[$A$가 대칭이고 $a_{1,1} \le 0$이면 $A$가 양의 정부호일 수 있는가?]
없습니다. $\det A^{[1]} = a_{1,1} \le 0$이므로 (2)의 조건이 $k = 1$에서 깨집니다. 직접 보아도 $q_A(e_1) = a_{1,1} \le 0$이고 $e_1 \ne 0$입니다. 같은 까닭으로 양의 정부호인 행렬의 대각성분은 모두 양수입니다($q_A(e_k) = a_{k,k}$).
:::
