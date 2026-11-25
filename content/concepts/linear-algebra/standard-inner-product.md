---
title: ℝⁿ 의 표준내적
title_en: Standard Inner Product on ℝⁿ
aliases: [표준내적, 점곱, 스칼라곱, dot product, standard inner product, Euclidean inner product]
kind: definition
field: linear-algebra
msc: ["15A63"]
level: undergrad
summary: ℝⁿ 의 두 원소 x, y 의 표준내적은 x₁y₁ + ⋯ + xₙyₙ 이고 ℝⁿ 위의 내적이다. 표준기저와의 내적은 성분을 주고, m × n 행렬 A 에 대해 ⟨Ax, y⟩ = ⟨x, Aᵀy⟩ 이며, AᵀB 의 성분은 A 의 열과 B 의 열의 표준내적이다. ℝ 위에서는 곱 xy 가 내적이다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, function, real-function-space, finite-sum-of-vectors, standard-basis, matrix, matrix-vector-product, transpose, matrix-product, double-sum-interchange, geometric-at-most-algebraic, inner-product-space]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 5장 1절, 1.1 Inner product and norm in Rn, pp.117–118; 1.3 Inner product spaces 의 첫 문단과 1.3.1 Examples 의 Example 1.1, p.119; 5절, 5.1 Adjoint matrices and adjoint operators 의 첫 문단, p.142
    checked: original
    note: "출처는 1.1(pp.117–118)에서 ℝⁿ 의 원소를 열벡터로 보고 (x, y) := x₁y₁ + x₂y₂ + … + xₙyₙ = yᵀx 로 정하며, Example 1.1(p.119)에서 이것을 ℝⁿ 의 standard inner product 라 부른다. 이 사이트는 ℝⁿ 의 원소에 전치 기호를 쓰지 않으므로 yᵀx 꼴은 쓰지 않고, 합은 벡터의 유한 합을 ℝ 에 쓴 것으로 쓴다. 출처 p.118 의 여백 메모는 x · y 와 dot product 라는 말 대신 (x, y) 를 쓴다고 적는다. 별칭 '점곱'은 그 말을 옮긴 것이다. 출처 1.3(p.119)은 ℝⁿ 과 ℂⁿ 의 내적이 성질 1–4 를 만족한다고 적고, (1)의 증명은 이 사이트가 썼다(양의 정부호는 기하적 중복도는 대수적 중복도 이하 항목의 (1)의 등호 경우로). (3)은 출처 1장 3.2 의 row by column rule(p.15)을 표준내적으로 적은 것이다. (4)는 출처 5장 5.1(p.142)의 주 항등식 (Ax, y) = (x, A*y) 를 실수 행렬에 쓴 것이고(출처 p.118 에 따라 실수 행렬에서는 A* = Aᵀ), 출처는 그것을 y*Ax = (A*y)*x 처럼 행렬의 곱의 전치로 증명한다. 이 항목은 행 규칙과 이중 합의 순서 바꾸기로 증명했다. (5)는 출처 1장 5.1(p.19)의 행렬의 곱에 대한 row by column rule '(AB)_{j,k} = (row #j of A) · (column #k of B)' 를 Aᵀ 와 B 에 쓴 것과 같은 발상이고, 출처 5장 6.2(p.148)가 '행렬 U 가 등거리인 것은 정확히 그 열들이 정규직교일 때이고 U*U 를 계산해 확인할 수 있다'고 적을 때 쓰는 계산이다. (6)의 ℝ 위의 내적 xy 는 출처의 n = 1 인 경우와 같은 식이다. 확인 질문 '$A$가 $m \\times n$ 행렬이고 $j \\in \\{1, \\dots, m\\}$, $k \\in \\{1, \\dots, n\\}$이면 $\\mathbb{R}^m$의 표준내적 $\\langle A e_k, e_j \\rangle$는 무엇인가? ($e_k \\in \\mathbb{R}^n$, $e_j \\in \\mathbb{R}^m$)' 는 출처 5장 5.2 의 Theorem 5.1 의 'matrix' 증명(p.144)이 x ⊥ a_k 를 (x, a_k) = a_k*x 로 쓰고 a_k* 를 A* 의 k 번째 행으로 읽는 것, 4.1.2(p.137)가 정규방정식을 얻을 때 0 = (b − Ax, a_k) = a_k*(b − Ax) 로 쓰는 것과 같은 계산이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(증명 표본 통독, 출처 검색 표본). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$n$이 자연수라 하자. $\mathbb{R}^n$은 [[real-function-space|실숫값 함수의 공간]]의 것이고, $x \in \mathbb{R}^n$의 $k$에서의 값을 $x_k = x(k)$로 쓴다. 내적과 내적의 조건 (i)–(iii)은 [[inner-product-space|내적과 내적공간]]의 것이다.

$x, y \in \mathbb{R}^n$이면 각 $k \in \{1, \dots, n\}$에 실수 $x_k y_k$가 하나씩 정해지므로 [[real-function-space|(G)]]에 의해 $k$번째 항이 $x_k y_k$인 길이 $n$인 실수의 열이 있다. 그 [[finite-sum-of-vectors|합]]

$$
\langle x, y \rangle = x_1 y_1 + \cdots + x_n y_n
$$

을 $x$와 $y$의 **표준내적**(standard inner product)이라 하고, $(x, y)$에서의 값이 $\langle x, y \rangle$인 함수 $\mathbb{R}^n \times \mathbb{R}^n \to \mathbb{R}$도 표준내적이라 한다. $\mathbb{R}^n$을 내적공간으로 볼 때 다른 말이 없으면 이 내적을 쓴다.

1. (내적이다) 표준내적은 $\mathbb{R}^n$ 위의 내적이다. 특히 $\langle x, x \rangle = x_1 x_1 + \cdots + x_n x_n$이고, $0 \le \langle x, x \rangle$이며, $\langle x, x \rangle = 0$인 것은 정확히 $x = (0, \dots, 0)$일 때이다.
2. (표준기저) $e_1, \dots, e_n$은 [[standard-basis|표준기저]]이다. 모든 $x \in \mathbb{R}^n$과 $k \in \{1, \dots, n\}$에서 $\langle x, e_k \rangle = \langle e_k, x \rangle = x_k$이다. $j, k \in \{1, \dots, n\}$이면 $\langle e_j, e_k \rangle$는 $j = k$일 때 $1$이고 $j \ne k$일 때 $0$이다.

아래 (3)–(5)에서 $m$, $r$은 자연수이고, $\mathbb{R}^m$의 내적도 표준내적이다. 행렬, 열 $\mathbf{a}_k$, 행은 [[matrix|행렬]]의 것이고, $Ax$는 [[matrix-vector-product|행렬과 벡터의 곱]], $A^T$는 [[transpose|전치행렬]], $AB$는 [[matrix-product|행렬의 곱]]이다.

3. (행 꼴과 열 꼴) $A$가 $m \times n$ 행렬이라 하자. $j \in \{1, \dots, m\}$에 대하여 $r_j = (a_{j,1}, \dots, a_{j,n}) \in \mathbb{R}^n$을 $A$의 $j$번째 행([[matrix|행렬]]의 것. $k$에서의 값이 $a_{j,k}$인 $\mathbb{R}^n$의 원소)이라 하고, $\mathbb{R}^m$의 원소 $w$의 $j$에서의 값을 $(w)_j$로도 쓴다. 그러면 모든 $x \in \mathbb{R}^n$과 $j$에서 $(Ax)_j = \langle r_j, x \rangle$이다. 또 모든 $z \in \mathbb{R}^m$과 $k \in \{1, \dots, n\}$에서 $(A^T z)_k = \langle \mathbf{a}_k, z \rangle$이다(왼쪽은 $A^T z \in \mathbb{R}^n$의 $k$에서의 값, 오른쪽은 $\mathbb{R}^m$의 표준내적).
4. (전치행렬과 내적) $A$가 $m \times n$ 행렬이면 모든 $x \in \mathbb{R}^n$과 $y \in \mathbb{R}^m$에서
   $$
   \langle Ax, y \rangle = \langle x, A^T y \rangle
   $$
   이다. 왼쪽은 $\mathbb{R}^m$의 표준내적이고 오른쪽은 $\mathbb{R}^n$의 표준내적이다.
5. (열끼리의 내적) $A$가 $m \times n$ 행렬이고 $B$가 $m \times r$ 행렬이면 $A^T B$는 $n \times r$ 행렬이고, 모든 $j \in \{1, \dots, n\}$와 $k \in \{1, \dots, r\}$에서 $A^T B$의 $(j, k)$ 성분은 $\mathbb{R}^m$의 표준내적 $\langle \mathbf{a}_j, \mathbf{b}_k \rangle$이다. 특히 $A^T A$의 $(j, k)$ 성분은 $\langle \mathbf{a}_j, \mathbf{a}_k \rangle$이고, 대각성분은 $(A^T A)_{k,k} = \langle \mathbf{a}_k, \mathbf{a}_k \rangle$ ($k \in \{1, \dots, n\}$)이다.
6. ($n = 1$과 $\mathbb{R}$) $n = 1$이면 $\langle x, y \rangle = x_1 y_1$이다. 또 [[real-function-space|실숫값 함수의 공간]]의 (2)의 벡터공간 $\mathbb{R}$ 위에서, $(x, y) \in \mathbb{R} \times \mathbb{R}$에서의 값이 곱 $xy$인 함수는 내적이다. $\mathbb{R}$을 내적공간으로 볼 때 다른 말이 없으면 이 내적을 쓴다. ($\mathbb{R}$과 $\mathbb{R}^1$은 다른 집합이다.)
:::

:::english
Let $n$ be a natural number. $\mathbb{R}^n$ is as in the entry on real function spaces, and the value of $x \in \mathbb{R}^n$ at $k$ is written $x_k = x(k)$. Inner products and the conditions (i)–(iii) for an inner product are as in the entry on inner product spaces.

If $x, y \in \mathbb{R}^n$, then a real number $x_k y_k$ is assigned to each $k \in \{1, \dots, n\}$, so by (G) there is a sequence of $n$ real numbers whose $k$-th term is $x_k y_k$. Its sum

$$
\langle x, y \rangle = x_1 y_1 + \cdots + x_n y_n
$$

is called the **standard inner product** of $x$ and $y$, and the function $\mathbb{R}^n \times \mathbb{R}^n \to \mathbb{R}$ whose value at $(x, y)$ is $\langle x, y \rangle$ is also called the standard inner product. When $\mathbb{R}^n$ is regarded as an inner product space, this inner product is used unless stated otherwise.

1. (It is an inner product) The standard inner product is an inner product on $\mathbb{R}^n$. In particular $\langle x, x \rangle = x_1 x_1 + \cdots + x_n x_n$, $0 \le \langle x, x \rangle$, and $\langle x, x \rangle = 0$ exactly when $x = (0, \dots, 0)$.
2. (Standard basis) $e_1, \dots, e_n$ is the standard basis. For every $x \in \mathbb{R}^n$ and $k \in \{1, \dots, n\}$, $\langle x, e_k \rangle = \langle e_k, x \rangle = x_k$. For $j, k \in \{1, \dots, n\}$, $\langle e_j, e_k \rangle$ is $1$ if $j = k$ and $0$ if $j \ne k$.

In (3)–(5) below, $m$ and $r$ are natural numbers, and the inner product on $\mathbb{R}^m$ is also the standard one. Matrices, the columns $\mathbf{a}_k$ and the rows are as in the entry on matrices; $Ax$ is the matrix–vector product, $A^T$ the transpose and $AB$ the matrix product.

3. (Row form and column form) Let $A$ be an $m \times n$ matrix. For $j \in \{1, \dots, m\}$ let $r_j = (a_{j,1}, \dots, a_{j,n}) \in \mathbb{R}^n$ be the $j$-th row of $A$ (as in the entry on matrices: the element of $\mathbb{R}^n$ whose value at $k$ is $a_{j,k}$), and write the value at $j$ of an element $w$ of $\mathbb{R}^m$ also as $(w)_j$. Then $(Ax)_j = \langle r_j, x \rangle$ for every $x \in \mathbb{R}^n$ and every $j$. Moreover $(A^T z)_k = \langle \mathbf{a}_k, z \rangle$ for every $z \in \mathbb{R}^m$ and $k \in \{1, \dots, n\}$ (the left side is the value at $k$ of $A^T z \in \mathbb{R}^n$, the right side the standard inner product on $\mathbb{R}^m$).
4. (Transpose and inner product) If $A$ is an $m \times n$ matrix, then for every $x \in \mathbb{R}^n$ and $y \in \mathbb{R}^m$
   $$
   \langle Ax, y \rangle = \langle x, A^T y \rangle .
   $$
   The left side is the standard inner product on $\mathbb{R}^m$ and the right side the one on $\mathbb{R}^n$.
5. (Inner products of columns) If $A$ is an $m \times n$ matrix and $B$ is an $m \times r$ matrix, then $A^T B$ is an $n \times r$ matrix, and for every $j \in \{1, \dots, n\}$ and $k \in \{1, \dots, r\}$ the $(j, k)$ entry of $A^T B$ is the standard inner product $\langle \mathbf{a}_j, \mathbf{b}_k \rangle$ on $\mathbb{R}^m$. In particular the $(j, k)$ entry of $A^T A$ is $\langle \mathbf{a}_j, \mathbf{a}_k \rangle$, and its diagonal entries are $(A^T A)_{k,k} = \langle \mathbf{a}_k, \mathbf{a}_k \rangle$ ($k \in \{1, \dots, n\}$).
6. ($n = 1$ and $\mathbb{R}$) If $n = 1$, then $\langle x, y \rangle = x_1 y_1$. Moreover, on the vector space $\mathbb{R}$ of item (2) of the entry on real function spaces, the function whose value at $(x, y) \in \mathbb{R} \times \mathbb{R}$ is the product $xy$ is an inner product. When $\mathbb{R}$ is regarded as an inner product space, this inner product is used unless stated otherwise. ($\mathbb{R}$ and $\mathbb{R}^1$ are different sets.)
:::

## 직관

$\mathbb{R}^n$의 두 원소를 자리마다 곱해서 모두 더한 것이 표준내적입니다. 장바구니에 비유하면, $x_k$가 $k$번째 물건의 개수이고 $y_k$가 그 물건의 값일 때 $\langle x, y \rangle$는 계산대에서 치르는 총액입니다. 물건마다 "개수 × 값"을 구해 더한다는 점이 정의와 맞고, 개수와 값의 역할을 바꾸어도 총액이 같다는 것이 대칭입니다. 비유와 다른 점은 성분이 음수일 수도 있다는 것입니다.

자기 자신과의 표준내적 $x_1 x_1 + \cdots + x_n x_n$은 제곱의 합이라 $0$ 이상이고, 제곱의 합이 $0$이면 모든 제곱이 $0$이어서 모든 성분이 $0$입니다. 이것이 양의 정부호이고, 증명에서는 "항마다 비교한 합이 같으면 항마다 같다"는 사실로 적습니다. 표준기저 $e_k$와의 내적은 $k$번째 자리만 남겨 성분 $x_k$를 꺼냅니다((2)).

(4)는 행렬을 내적의 한쪽에서 다른 쪽으로 옮길 때 전치해야 한다는 뜻입니다. 양쪽을 모두 성분으로 펼치면 같은 수 $a_{j,k} x_k y_j$들을 한 번은 행마다, 한 번은 열마다 묶어 더한 것이 되어 같습니다. $m = n = 1$이면 $A$는 성분 $a_{1,1}$ 하나뿐이고 $A^T = A$이며, (4)는 $(a_{1,1} x_1) y_1 = x_1 (a_{1,1} y_1)$이라는 곱셈의 법칙일 뿐입니다. (5)는 행렬의 곱 $A^T B$의 성분이 "$A^T$의 행 = $A$의 열"과 "$B$의 열"의 내적이라는 것을 적은 것입니다.

## 성질의 증명

:::proof
아래에서 (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것, (H0)–(H7)은 [[finite-sum-of-vectors|벡터의 유한 합]]의 것이다. 그 진술에 따라 실수의 합은 $V = \mathbb{R}$인 벡터의 유한 합이고, $\mathbb{R}$의 영벡터는 실수 $0$, 스칼라배는 실수의 곱이다. 같은 진술에 따라 길이가 같고 모든 자리의 항이 같은 두 실수의 열은 같은 열이고 같은 열의 합은 같다. 이것을 "같은 열의 합"이라 부른다. $\mathbb{R}^n$의 덧셈, 스칼라배, 영벡터 $(0, \dots, 0)$, 원소의 같음은 [[real-function-space|실숫값 함수의 공간]]의 $\mathbb{R}^n$ 단락의 것이다: $(\alpha x + \beta y)_k = \alpha x_k + \beta y_k$이고, $x = y$인 것은 정확히 모든 $k$에서 $x_k = y_k$일 때이다.

**(1)의 증명.** 각 $(x, y)$에 실수 $\langle x, y \rangle$가 하나씩 정해지므로 (G)에 의해 표준내적은 함수 $\mathbb{R}^n \times \mathbb{R}^n \to \mathbb{R}$이다. 내적의 조건을 확인한다. $x, y, z \in \mathbb{R}^n$이고 $\alpha$, $\beta$는 실수이다.

- (i) (K1)에 의해 모든 $k$에서 $x_k y_k = y_k x_k$이므로 같은 열의 합에 의해 $\langle x, y \rangle = \langle y, x \rangle$이다.
- (ii) $\langle \alpha x + \beta y, z \rangle$는 $k$번째 항이 $(\alpha x_k + \beta y_k) z_k$인 열의 합이다. (K12)의 (i)과 (K2)에 의해 이 항은 $\alpha(x_k z_k) + \beta(y_k z_k)$이다. 두 열 "$k$번째 항이 $\alpha(x_k z_k)$"와 "$k$번째 항이 $\beta(y_k z_k)$"에 (H3)을 쓰고, 각각에 (H4)를 쓰면 이 합은 $\alpha(x_1 z_1 + \cdots + x_n z_n) + \beta(y_1 z_1 + \cdots + y_n z_n) = \alpha \langle x, z \rangle + \beta \langle y, z \rangle$이다.
- (iii) 모든 $k$에서 [[order-properties-of-reals|실수의 순서의 성질]]의 (5)의 (iii)에 의해 $0 \le x_k x_k$이다. 모든 항이 $0$인 길이 $n$인 열의 합은 (H5)에 의해 $0$이다. [[geometric-at-most-algebraic|기하적 중복도는 대수적 중복도 이하]]의 (1)을 $a_k = 0$, $b_k = x_k x_k$로 쓰면 $0 \le x_1 x_1 + \cdots + x_n x_n = \langle x, x \rangle$이다. $\langle x, x \rangle = 0$이면 두 합이 같으므로 같은 (1)의 둘째 문장에 의해 모든 $k$에서 $x_k x_k = 0$이고, (K10)에 의해 $x_k = 0$이다. 따라서 $x = (0, \dots, 0)$이다. 거꾸로 $x = (0, \dots, 0)$이면 모든 항이 (K9)에 의해 $0 \cdot 0 = 0$이므로 (H5)에 의해 $\langle x, x \rangle = 0$이다. $(0, \dots, 0)$은 $\mathbb{R}^n$의 영벡터이다.

따라서 표준내적은 내적이다. 둘째 문장은 정의와 조건 (iii)이다.

**(2)의 증명.** [[standard-basis|표준기저]]의 정의에 의해 $e_k$의 $i$에서의 값은 $i = k$이면 $1$, $i \ne k$이면 $0$이다. 따라서 $\langle x, e_k \rangle$를 이루는 열의 $i$번째 항은 $i = k$이면 (K4)에 의해 $x_k \cdot 1 = x_k$이고, $i \ne k$이면 (K9)에 의해 $x_i \cdot 0 = 0$이다. $n \ge 1$이므로 이 열은 길이 $(n - 1) + 1$인 열이고, (H7)에 의해 그 합은 $k$번째 항 $x_k$이다. 조건 (i)에 의해 $\langle e_k, x \rangle = \langle x, e_k \rangle = x_k$이다. 이것을 $x = e_j$에 쓰면 $\langle e_j, e_k \rangle$는 $e_j$의 $k$에서의 값이므로, $k = j$이면 $1$이고 $k \ne j$이면 $0$이다.

**(3)의 증명.** [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)에 의해 $(Ax)_j$는 $k$번째 항이 $a_{j,k} x_k$인 열의 합이다. $r_j$의 $k$에서의 값은 $a_{j,k}$이므로 $\langle r_j, x \rangle$도 $k$번째 항이 $a_{j,k} x_k$인 열의 합이고, 같은 열의 합에 의해 두 수는 같다. 둘째 문장: $A^T$는 $n \times m$ 행렬이고 [[transpose|전치행렬]]의 정의에 의해 $(A^T)_{k,j} = a_{j,k}$이다. 행렬과 벡터의 곱의 (1)을 $A^T$와 $z$에 쓰면 $(A^T z)_k$는 $j$번째 항이 $a_{j,k} z_j$인 길이 $m$인 열의 합이다. [[matrix|행렬]]의 정의에 의해 $\mathbf{a}_k$의 $j$에서의 값은 $a_{j,k}$이므로 $\langle \mathbf{a}_k, z \rangle$도 같은 열의 합이다.

**(4)의 증명.** 각 $j \in \{1, \dots, m\}$와 $k \in \{1, \dots, n\}$에 실수 $t_{j,k} = x_k (a_{j,k} y_j)$를 정한다.

$\langle Ax, y \rangle$는 $j$번째 항이 $(Ax)_j y_j$인 길이 $m$인 열의 합이다. 여기서 $(Ax)_j$는 $Ax$의 $j$번째 값이다. (K1)에 의해 $(Ax)_j y_j = y_j (Ax)_j$이고, 행렬과 벡터의 곱의 (1)과 (H4)에 의해 $y_j (Ax)_j = y_j(a_{j,1} x_1) + \cdots + y_j(a_{j,n} x_n)$이다. (K1)과 (K2)에 의해 $y_j(a_{j,k} x_k) = (y_j a_{j,k}) x_k = x_k (a_{j,k} y_j) = t_{j,k}$이므로, 같은 열의 합에 의해 $j$번째 항은 $t_{j,1} + \cdots + t_{j,n}$이다.

$A^T$는 $n \times m$ 행렬이고 $(A^T)_{k,j} = a_{j,k}$이다. 행렬과 벡터의 곱의 (1)을 $A^T$와 $y$에 쓰면 $A^T y$의 $k$번째 값 $(A^T y)_k$는 $a_{1,k} y_1 + \cdots + a_{m,k} y_m$이다. $\langle x, A^T y \rangle$는 $k$번째 항이 $x_k (A^T y)_k$인 길이 $n$인 열의 합이고, (H4)에 의해 이 항은 $x_k(a_{1,k} y_1) + \cdots + x_k(a_{m,k} y_m) = t_{1,k} + \cdots + t_{m,k}$이다.

[[double-sum-interchange|이중 합의 순서 바꾸기]]의 (2)를 $t_{j,k}$에 쓰면 두 합은 같다. 따라서 $\langle Ax, y \rangle = \langle x, A^T y \rangle$이다.

**(5)의 증명.** $A^T$는 $n \times m$ 행렬이고 $B$는 $m \times r$ 행렬이므로 [[matrix-product|행렬의 곱]]에 의해 $A^T B$는 $n \times r$ 행렬이고, 그 (2)에 의해 $(A^T B)_{j,k}$는 $l$번째 항이 $(A^T)_{j,l} b_{l,k} = a_{l,j} b_{l,k}$인 길이 $m$인 열의 합이다. 한편 [[matrix|행렬]]의 정의에 의해 $\mathbf{a}_j$의 $l$에서의 값은 $a_{l,j}$이고 $\mathbf{b}_k$의 $l$에서의 값은 $b_{l,k}$이므로 $\langle \mathbf{a}_j, \mathbf{b}_k \rangle$도 같은 열의 합이다. $B = A$로 두면 둘째 문장이고, 그 $j = k$인 경우가 대각성분의 식이다.

**(6)의 증명.** $n = 1$이면 $\langle x, y \rangle$는 길이 $1$인 열의 합이므로 (H0)에 의해 $x_1 y_1$이다. $\mathbb{R}$ 위의 함수를 보자. (G)에 의해 $(x, y)$에서의 값이 $xy$인 함수 $\mathbb{R} \times \mathbb{R} \to \mathbb{R}$가 있다. 벡터공간 $\mathbb{R}$의 스칼라배와 덧셈은 실수의 곱과 합이고 영벡터는 $0$이다. (i)은 (K1)이다. (ii)는 (K12)의 (i)과 (K2)에 의해 $(\alpha x + \beta y)z = \alpha(xz) + \beta(yz)$이다. (iii)에서 $0 \le xx$는 실수의 순서의 성질의 (5)의 (iii)이고, $xx = 0$이면 (K10)에 의해 $x = 0$이며, $x = 0$이면 (K9)에 의해 $xx = 0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ⁴ 의 두 원소의 표준내적]
$x = (2, -1, 0, 3)$, $y = (1, 4, 5, -2) \in \mathbb{R}^4$이면 항은 $2 \cdot 1 = 2$, $(-1) \cdot 4 = -4$, $0 \cdot 5 = 0$, $3 \cdot (-2) = -6$이고, 합은 $((2 + (-4)) + 0) + (-6) = -8$이므로 $\langle x, y \rangle = -8$입니다. 자기 자신과는 $\langle x, x \rangle = 4 + 1 + 0 + 9 = 14$이고, (2)에 의해 $\langle x, e_4 \rangle = 3$입니다.
:::

:::example[2 × 3 행렬에서 (4)와 (5)를 확인하기]
$$
A = \begin{pmatrix} 1 & 0 & 2 \\ -1 & 3 & 1 \end{pmatrix}
$$

이고 $x = (1, 2, -1) \in \mathbb{R}^3$, $y = (2, 1) \in \mathbb{R}^2$라 합시다. 행 규칙으로 $Ax = (1 + 0 - 2, -1 + 6 - 1) = (-1, 4)$이므로 $\langle Ax, y \rangle = -2 + 4 = 2$입니다. $A^T$는 첫째 행이 $1, -1$, 둘째 행이 $0, 3$, 셋째 행이 $2, 1$인 $3 \times 2$ 행렬이고 $A^T y = (2 - 1, 0 + 3, 4 + 1) = (1, 3, 5)$이므로 $\langle x, A^T y \rangle = 1 + 6 - 5 = 2$입니다. 두 값이 같습니다.

$A$의 열은 $\mathbf{a}_1 = (1, -1)$, $\mathbf{a}_2 = (0, 3)$, $\mathbf{a}_3 = (2, 1)$입니다. (5)에 의해 $A^T A$의 성분은 열끼리의 내적 $\langle \mathbf{a}_1, \mathbf{a}_1 \rangle = 2$, $\langle \mathbf{a}_1, \mathbf{a}_2 \rangle = -3$, $\langle \mathbf{a}_1, \mathbf{a}_3 \rangle = 1$, $\langle \mathbf{a}_2, \mathbf{a}_2 \rangle = 9$, $\langle \mathbf{a}_2, \mathbf{a}_3 \rangle = 3$, $\langle \mathbf{a}_3, \mathbf{a}_3 \rangle = 5$이고, 나머지 성분은 내적의 조건 (i)에 의해 $\langle \mathbf{a}_k, \mathbf{a}_j \rangle = \langle \mathbf{a}_j, \mathbf{a}_k \rangle$이므로 이 값들에서 정해집니다.

$$
A^T A = \begin{pmatrix} 2 & -3 & 1 \\ -3 & 9 & 3 \\ 1 & 3 & 5 \end{pmatrix}
$$

행렬의 곱의 (2)로 직접 계산해도, 예를 들어 $(2, 3)$ 성분은 $0 \cdot 2 + 3 \cdot 1 = 3$입니다.
:::

:::counterexample[영벡터가 아닌 ℝ² 의 두 원소의 표준내적이 0 인 예]
$x = (1, 1)$, $y = (1, -1)$이면 $\langle x, y \rangle = 1 \cdot 1 + 1 \cdot (-1) = 0$이지만 $x$도 $y$도 영벡터가 아닙니다. (6)의 $\mathbb{R}$ 위의 내적에서는 [[real-number-arithmetic|(K10)]]에 의해 $xy = 0$이면 $x = 0$이거나 $y = 0$이지만, $\mathbb{R}^2$의 표준내적에서는 그렇지 않습니다. 내적의 조건 (iii)이 부호와 $0$을 정하는 것은 같은 벡터를 두 자리에 넣은 $\langle x, x \rangle$뿐입니다. 여기서도 $\langle x, x \rangle = 2$, $\langle y, y \rangle = 2$입니다.
:::

## 확인 질문

:::check[$x \in \mathbb{R}^n$ ($n \ge 2$)과 표준기저에서 $\langle x, e_1 + e_2 \rangle$는 무엇인가?]
[[inner-product-space|내적과 내적공간]]의 (1)과 이 항목의 (2)에 의해 $\langle x, e_1 + e_2 \rangle = \langle x, e_1 \rangle + \langle x, e_2 \rangle = x_1 + x_2$입니다.
:::

:::check[$A$가 $m \times n$ 행렬이고 $j \in \{1, \dots, m\}$, $k \in \{1, \dots, n\}$이면 $\mathbb{R}^m$의 표준내적 $\langle A e_k, e_j \rangle$는 무엇인가? ($e_k \in \mathbb{R}^n$, $e_j \in \mathbb{R}^m$)]
[[matrix-vector-product|행렬과 벡터의 곱]]의 (3)에 의해 $A e_k = \mathbf{a}_k$이고, 이 항목의 (2)에 의해 $\langle \mathbf{a}_k, e_j \rangle$는 $\mathbf{a}_k$의 $j$에서의 값, 곧 $a_{j,k}$입니다. 행렬의 성분을 내적으로 꺼낼 수 있습니다.
:::
