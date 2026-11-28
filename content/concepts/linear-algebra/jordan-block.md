---
title: 조르당 블록과 조르당 행렬
title_en: Jordan Blocks and Jordan Matrices
aliases: [조르당 블록, 조르당 행렬, Jordan block, Jordan matrix, J_p(λ)]
kind: definition
field: linear-algebra
msc: ["15A21"]
level: undergrad
summary: 실수 λ 와 자연수 p 에 대하여 대각성분이 모두 λ 이고 그 바로 오른쪽 성분이 1 이며 나머지가 0 인 p × p 행렬을 조르당 블록 J_p(λ) 라 하고, 조르당 블록 여럿을 대각선을 따라 차례로 놓은 행렬을 조르당 행렬이라 한다. 둘 다 위삼각행렬이고, 그 열의 꼴, 특성다항식, 블록으로 쓴 꼴, 대각부분과 나머지로 나눈 꼴을 함께 정리한다.
requires: [function, real-function-space, real-number-arithmetic, prime-number, well-ordering-principle, vector-space, finite-sum-of-vectors, linear-combination-and-span, linear-independence, standard-basis, dimension, matrix, matrix-vector-product, matrix-product, eigenvalue-and-eigenvector, eigenvalues-of-triangular-matrix, diagonalizable, eigenvalue-examples, determinant-of-triangular-matrix, polynomial-function, product-of-polynomial-functions, multiplicity-of-a-root, characteristic-polynomial, characteristic-polynomial-of-triangular, algebraic-multiplicity, split-characteristic-polynomial, concatenating-bases, block-triangular-determinant]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "9장 4절 Structure of nilpotent operators, (4.1)–(4.3), p.266; 9장 5절 Jordan decomposition theorem, Theorem 5.1 과 (5.1), p.272"
    checked: original
    note: "출처 (4.1)(p.266)은 대각성분이 모두 0 이고 대각선 바로 위의 성분이 1 인 행렬을 멱영 연산자의 '기본 블록'으로 들고, 그 행렬이 기저 v₁, …, v_p 에서의 행렬이면 Av₁ = 0, Av_{k+1} = v_k ((4.2), (4.3))라고 적는다. 이것은 이 항목의 J_p(0) 과 그 열의 꼴 (1)의 (iii)을 λ = 0 에서 쓴 것과 같다. 출처 Theorem 5.1(p.272)은 대각성분이 λ 이고 대각선 바로 위가 1 인 블록 (5.1) 들로 이루어진 블록 대각 꼴을 Jordan canonical form 이라 하고 '크기가 1 인 블록은 그냥 λ' 라고 적는다. 이 항목은 출처처럼 1 을 대각선 위에 두고, 블록 대각 꼴을 블록의 자리를 성분의 첨자 s_k 로 정해 정의한다. (2)의 (iii)의 특성다항식은 출처 9장 Proposition 3.8 의 증명(p.264)이 블록마다 위삼각 기저를 잡아 det(A − λI) 를 (λ_k − λ)^{n_k} 의 곱으로 쓰는 것과 같은 꼴이다."
  - ref: hefferon-linear-algebra
    loc: "Jordan Canonical Form, def:JordanBlock, src/jc/jc4.tex:2121–2128; th:JordanForm, src/jc/jc4.tex:2270–2286; 그 앞의 예 src/jc/jc4.tex:2143–2177 과 src/jc/jc4.tex:2213–2228"
    checked: original
    note: "Hefferon 의 def:JordanBlock(jc4.tex:2121)은 대각성분이 모두 λ ∈ ℂ 이고 대각선 바로 아래(subdiagonal)의 성분이 1 이며 나머지가 0 인 정사각행렬을 Jordan block 이라 하고, 1 × 1 블록에는 대각선 아래의 1 이 없다고 적는다. 이 항목의 J_p(λ) 는 1 을 대각선 위에 두므로 Hefferon 의 블록은 J_p(λ) 의 전치행렬이다. th:JordanForm(jc4.tex:2270)은 대각선을 따라 Jordan block 들이 놓이고 나머지가 0 인 행렬을 Jordan form 이라 한다. 이 항목의 조르당 행렬은 그 꼴을 실수로, 1 을 대각선 위에 두고 정의한 것이다. jc4.tex:2213–2228 의 T_2 는 대각성분이 2 인 크기 3 의 블록(대각선 아래에 1)을 포함하며, 예시 'J₃(2) 의 열과 고유공간'의 J₃(2) 는 그 블록의 전치행렬이다. jc4.tex:2143–2177 의 예는 고윳값이 1/2 뿐인 3 × 3 행렬의 세 대표(블록 크기 1, 1, 1 과 2, 1 과 3)를 드는데, 확인 질문 '블록 J₂(5), J₂(5) 로 이루어진 조르당 행렬에서 5 의 두 중복도는?'은 고윳값이 하나뿐인 조르당 행렬을 다룬다는 점에서 그 예와 닿아 있다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(서로소 판정의 f = 0 경계, 블록 행렬식의 귀납 꼴, 유한 열 보조정리의 r = 0). 독립 검토 없음."
added: 2026-11-28
---

:::statement
행렬, 성분, 대각성분, 단위행렬 $I_p$는 [[matrix|행렬]]의 것이고, 위삼각행렬은 [[eigenvalues-of-triangular-matrix|삼각행렬의 고윳값]], 대각행렬과 $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$은 [[diagonalizable|대각화 가능]], 표준기저 $e_1, \dots, e_n$은 [[standard-basis|표준기저]], 특성다항식 $p_A$는 [[characteristic-polynomial|특성다항식]], 함수의 열의 곱과 거듭제곱은 [[product-of-polynomial-functions|다항함수의 곱]]의 것이다.

**조르당 블록.** $p$가 자연수이고 $\lambda$가 실수라 하자. $(i, l)$ 성분이 $l = i$이면 $\lambda$, $l = i + 1$이면 $1$, 그 밖에는 $0$인 $p \times p$ 행렬이 정확히 하나 있다. 이 행렬을 크기가 $p$이고 대각성분이 $\lambda$인 **조르당 블록**(Jordan block)이라 하고 $J_p(\lambda)$로 쓴다. $J_1(\lambda)$는 $1 \times 1$ 행렬 $(\lambda)$이다.

**조르당 행렬.** $r$이 자연수이고 $\lambda_1, \dots, \lambda_r$이 실수의 열(같은 수가 여러 번 나와도 된다), $p_1, \dots, p_r$이 자연수의 열이라 하자. [[concatenating-bases|이어 붙인 기저]]의 (2)를 $d_k = p_k$로 써서 $s_0 = 0$, $s_k = p_1 + \cdots + p_k$와 $\Lambda = \{(k, j) : 1 \le k \le r,\ 1 \le j \le p_k\}$를 정하고 $n = s_r$이라 하자. 그 (2)의 (iii)을 벡터공간 $\mathbb{R}$에 쓰면, 모든 $(k, j) \in \Lambda$에서 $\delta_{s_{k-1}+j} = \lambda_k$인 길이 $n$인 실수의 열 $\delta$와, $(k, j) \in \Lambda$에서 $j < p_k$이면 $\varepsilon_{s_{k-1}+j} = 1$이고 $j = p_k$이면 $\varepsilon_{s_{k-1}+j} = 0$인 길이 $n$인 실수의 열 $\varepsilon$이 하나씩 있다. $(i, i)$ 성분이 $\delta_i$이고, $i < n$에서 $(i, i + 1)$ 성분이 $\varepsilon_i$이며, 그 밖의 성분이 모두 $0$인 $n \times n$ 행렬이 정확히 하나 있다. 이 행렬을 블록이 차례로 $J_{p_1}(\lambda_1), \dots, J_{p_r}(\lambda_r)$인 **조르당 행렬**(Jordan matrix)이라 한다.

다음이 성립한다.

1. (조르당 블록)
   - (i) $J_p(\lambda)$는 위삼각행렬이고 대각성분은 모두 $\lambda$이다.
   - (ii) $J_p(\lambda) = \lambda I_p + J_p(0)$이다.
   - (iii) (열) $J_p(\lambda)$의 첫째 열은 $\lambda e_1$이고, $2 \le j \le p$이면 $j$번째 열은 $e_{j-1} + \lambda e_j$이다. 곧 $J_p(\lambda) e_1 = \lambda e_1$이고 $2 \le j \le p$에서 $J_p(\lambda) e_j = e_{j-1} + \lambda e_j$이다.
   - (iv) (한 칸 옮기기) $x = (x_1, \dots, x_p) \in \mathbb{R}^p$이면 $J_p(0)x$의 $i$번째 값은 $i < p$이면 $x_{i+1}$, $i = p$이면 $0$이다.
   - (v) (특성다항식과 고윳값) $p_{J_p(\lambda)} = (-1)^p (t - \lambda)^p$이다. $J_p(\lambda)$의 고윳값은 $\lambda$ 하나뿐이고, $\lambda$에 대한 고유공간은 $\operatorname{span}(e_1)$이다. 따라서 $J_p(\lambda)$에서 $\lambda$의 대수적 중복도는 $p$이고 기하적 중복도는 $1$이다.
2. (조르당 행렬) $M$이 블록이 $J_{p_1}(\lambda_1), \dots, J_{p_r}(\lambda_r)$인 조르당 행렬이라 하자.
   - (i) $M$은 위삼각행렬이고, 모든 $(k, j) \in \Lambda$에서 $(s_{k-1} + j, s_{k-1} + j)$ 성분은 $\lambda_k$이다.
   - (ii) (열) $(k, j) \in \Lambda$이고 $l = s_{k-1} + j$라 하자. $j = 1$이면 $M$의 $l$번째 열은 $\lambda_k e_l$이고, $j \ge 2$이면 $e_{l-1} + \lambda_k e_l$이다(여기서 $e_l$은 $\mathbb{R}^n$의 표준기저).
   - (iii) (특성다항식) $p_M = (-1)^n (t - \lambda_1)^{p_1} \cdots (t - \lambda_r)^{p_r}$이다. $M$의 특성다항식은 [[split-characteristic-polynomial|완전히 인수분해된다]]. 실수 $\mu$가 $M$의 고윳값인 것은 정확히 $\mu = \lambda_k$인 $k$가 있을 때이다.
   - (iv) (고윳값이 하나인 경우) 모든 $k$에서 $\lambda_k = \lambda$이면 $p_M = (-1)^n (t - \lambda)^n$이다. 특히 블록이 $J_{p_1}(0), \dots, J_{p_r}(0)$인 조르당 행렬의 특성다항식은 $(-1)^n t^n$이다.
3. (작은 경우)
   - (i) $r = 1$이면 $M = J_{p_1}(\lambda_1)$이다. 특히 모든 조르당 블록은 조르당 행렬이다.
   - (ii) 모든 $k$에서 $p_k = 1$이면 $n = r$이고 $M = \operatorname{diag}(\lambda_1, \dots, \lambda_r)$이다. 특히 모든 대각행렬과 모든 $1 \times 1$ 행렬은 조르당 행렬이다.
4. (블록으로 쓴 꼴) $r \ge 2$이고 $M'$이 블록이 처음 $r - 1$개 $J_{p_1}(\lambda_1), \dots, J_{p_{r-1}}(\lambda_{r-1})$인 조르당 행렬이면, $g = s_{r-1}$, $h = p_r$에 대하여 [[block-triangular-determinant|블록 삼각행렬의 행렬식]]의 블록으로 쓴 꼴로
   $$
   M = \begin{pmatrix} M' & O \\ O & J_{p_r}(\lambda_r) \end{pmatrix}
   $$
   이다.
5. (대각부분과 나머지) $D = \operatorname{diag}(\delta_1, \dots, \delta_n)$이고 $N$이 블록이 $J_{p_1}(0), \dots, J_{p_r}(0)$인 조르당 행렬이면 $M = D + N$이고 $DN = ND$이다.
:::

:::english
Matrices, entries, diagonal entries and the identity matrix $I_p$ are those of the matrix entry; upper triangular matrices are those of the entry on eigenvalues of triangular matrices, diagonal matrices and $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$ those of the diagonalizable entry, the standard basis $e_1, \dots, e_n$ that of the standard basis entry, the characteristic polynomial $p_A$ that of its entry, and products and powers of sequences of functions those of the entry on products of polynomial functions.

**Jordan block.** Let $p$ be a natural number and $\lambda$ a real number. There is exactly one $p \times p$ matrix whose $(i, l)$ entry is $\lambda$ if $l = i$, $1$ if $l = i + 1$, and $0$ otherwise. This matrix is called the **Jordan block** of size $p$ with diagonal entry $\lambda$ and is written $J_p(\lambda)$. $J_1(\lambda)$ is the $1 \times 1$ matrix $(\lambda)$.

**Jordan matrix.** Let $r$ be a natural number, $\lambda_1, \dots, \lambda_r$ a sequence of real numbers (repetitions allowed) and $p_1, \dots, p_r$ a sequence of natural numbers. Using item (2) of the entry on concatenating bases with $d_k = p_k$, define $s_0 = 0$, $s_k = p_1 + \cdots + p_k$ and $\Lambda = \{(k, j) : 1 \le k \le r,\ 1 \le j \le p_k\}$, and let $n = s_r$. Applying item (2)(iii) of that entry to the vector space $\mathbb{R}$, there is exactly one sequence $\delta$ of real numbers of length $n$ with $\delta_{s_{k-1}+j} = \lambda_k$ for all $(k, j) \in \Lambda$, and exactly one sequence $\varepsilon$ of length $n$ with $\varepsilon_{s_{k-1}+j} = 1$ if $j < p_k$ and $\varepsilon_{s_{k-1}+j} = 0$ if $j = p_k$, for $(k, j) \in \Lambda$. There is exactly one $n \times n$ matrix whose $(i, i)$ entry is $\delta_i$, whose $(i, i + 1)$ entry is $\varepsilon_i$ for $i < n$, and all of whose other entries are $0$. This matrix is called the **Jordan matrix** with blocks $J_{p_1}(\lambda_1), \dots, J_{p_r}(\lambda_r)$ in this order.

The following hold.

1. (Jordan blocks)
   - (i) $J_p(\lambda)$ is upper triangular and all its diagonal entries are $\lambda$.
   - (ii) $J_p(\lambda) = \lambda I_p + J_p(0)$.
   - (iii) (Columns) The first column of $J_p(\lambda)$ is $\lambda e_1$, and for $2 \le j \le p$ its $j$th column is $e_{j-1} + \lambda e_j$. That is, $J_p(\lambda) e_1 = \lambda e_1$ and $J_p(\lambda) e_j = e_{j-1} + \lambda e_j$ for $2 \le j \le p$.
   - (iv) (Shifting by one place) If $x = (x_1, \dots, x_p) \in \mathbb{R}^p$, then the $i$th value of $J_p(0)x$ is $x_{i+1}$ if $i < p$ and $0$ if $i = p$.
   - (v) (Characteristic polynomial and eigenvalues) $p_{J_p(\lambda)} = (-1)^p (t - \lambda)^p$. The only eigenvalue of $J_p(\lambda)$ is $\lambda$, and its eigenspace for $\lambda$ is $\operatorname{span}(e_1)$. Hence the algebraic multiplicity of $\lambda$ in $J_p(\lambda)$ is $p$ and its geometric multiplicity is $1$.
2. (Jordan matrices) Let $M$ be the Jordan matrix with blocks $J_{p_1}(\lambda_1), \dots, J_{p_r}(\lambda_r)$.
   - (i) $M$ is upper triangular, and for every $(k, j) \in \Lambda$ its $(s_{k-1} + j, s_{k-1} + j)$ entry is $\lambda_k$.
   - (ii) (Columns) Let $(k, j) \in \Lambda$ and $l = s_{k-1} + j$. If $j = 1$ the $l$th column of $M$ is $\lambda_k e_l$, and if $j \ge 2$ it is $e_{l-1} + \lambda_k e_l$ (where $e_l$ is the standard basis of $\mathbb{R}^n$).
   - (iii) (Characteristic polynomial) $p_M = (-1)^n (t - \lambda_1)^{p_1} \cdots (t - \lambda_r)^{p_r}$. The characteristic polynomial of $M$ splits. A real number $\mu$ is an eigenvalue of $M$ exactly when $\mu = \lambda_k$ for some $k$.
   - (iv) (A single eigenvalue) If $\lambda_k = \lambda$ for every $k$, then $p_M = (-1)^n (t - \lambda)^n$. In particular, the characteristic polynomial of the Jordan matrix with blocks $J_{p_1}(0), \dots, J_{p_r}(0)$ is $(-1)^n t^n$.
3. (Small cases)
   - (i) If $r = 1$ then $M = J_{p_1}(\lambda_1)$. In particular every Jordan block is a Jordan matrix.
   - (ii) If $p_k = 1$ for every $k$, then $n = r$ and $M = \operatorname{diag}(\lambda_1, \dots, \lambda_r)$. In particular every diagonal matrix and every $1 \times 1$ matrix is a Jordan matrix.
4. (Block form) If $r \ge 2$ and $M'$ is the Jordan matrix whose blocks are the first $r - 1$ blocks $J_{p_1}(\lambda_1), \dots, J_{p_{r-1}}(\lambda_{r-1})$, then, in the block form of the entry on determinants of block triangular matrices with $g = s_{r-1}$ and $h = p_r$,
   $$
   M = \begin{pmatrix} M' & O \\ O & J_{p_r}(\lambda_r) \end{pmatrix}.
   $$
5. (Diagonal part and the rest) If $D = \operatorname{diag}(\delta_1, \dots, \delta_n)$ and $N$ is the Jordan matrix with blocks $J_{p_1}(0), \dots, J_{p_r}(0)$, then $M = D + N$ and $DN = ND$.
:::

## 직관

조르당 블록은 대각선에 같은 수 $\lambda$를 늘어놓고 그 바로 오른쪽에 $1$을 한 줄 더 놓은 행렬입니다. 예컨대
$$
J_3(\lambda) = \begin{pmatrix} \lambda & 1 & 0 \\ 0 & \lambda & 1 \\ 0 & 0 & \lambda \end{pmatrix}
$$
입니다. $\lambda = 0$이면 $J_p(0)$은 벡터의 성분을 한 칸씩 위로 옮기고 마지막 자리를 $0$으로 채우는 사상의 행렬이고((1)의 (iv)), 표준기저로 보면 $e_p \to e_{p-1} \to \cdots \to e_1 \to 0$으로 한 칸씩 내려가는 사슬을 만듭니다((1)의 (iii)). $J_p(\lambda)$는 여기에 $\lambda I_p$를 더한 것입니다.

조르당 행렬은 이런 블록 여럿을 대각선을 따라 이어 붙이고 나머지를 $0$으로 채운 행렬입니다. 블록의 경계를 첨자로 정하는 데 [[concatenating-bases|이어 붙인 기저]]의 $s_k$를 씁니다. $k$번째 블록은 행과 열의 번호가 $s_{k-1} + 1$부터 $s_k$까지인 자리를 차지합니다. 두 블록이 만나는 자리의 대각선 바로 오른쪽 성분은 $1$이 아니라 $0$이고, 이것을 열 $\varepsilon$의 $0$이 정합니다.

조르당 행렬은 위삼각행렬이므로 특성다항식이 대각성분으로 바로 읽힙니다. 같은 $\lambda$의 블록이 여럿 있을 수 있고, $J_2(1)$은 [[eigenvalue-examples|고윳값의 예]]의 (2)에서 대각화할 수 없다고 본 행렬 $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$입니다. 대각행렬은 모든 블록의 크기가 $1$인 조르당 행렬입니다.

## 성질의 증명

:::proof
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 번호로, 정수의 순서는 [[well-ordering-principle|정렬 원리]] 항목의 (Z5), (Z7)과 [[prime-number|소수]] 항목의 (Z1)로 인용한다. [[matrix|행렬]]의 (2)에 의해 같은 크기의 두 행렬은 모든 성분이 같으면 같다.

**정의의 행렬.** 정수 $i$, $l$에 대하여 $l = i$와 $l = i + 1$은 함께 성립하지 않으므로((Z7)), 조르당 블록의 정의는 $\{1, \dots, p\} \times \{1, \dots, p\}$의 각 원소에 실수 하나를 정한다. [[real-function-space|(G)]]에 의해 그런 행렬이 있고 행렬의 (2)에 의해 하나뿐이다. $\delta$와 $\varepsilon$은 이어 붙인 기저의 (2)의 (iii)을 $b_{k,j} = \lambda_k$와 $b_{k,j} = (j < p_k$이면 $1$, $j = p_k$이면 $0)$에 쓴 것이다(실수 $\mathbb{R}$는 [[vector-space|벡터공간]]이다). 조르당 행렬의 정의도 같은 이유로 행렬 하나를 정한다.

이어 붙인 기저의 (2)의 (ii)에 의해 $\{1, \dots, n\}$의 모든 $i$는 어떤 $(k, j) \in \Lambda$로 $i = s_{k-1} + j$라 쓸 수 있고, 그때 $\delta_i = \lambda_k$이며 $\varepsilon_i$는 $j < p_k$이면 $1$, $j = p_k$이면 $0$이다. 이 사실을 아래에서 (가)라 부른다.

**(1).** (i) $i > l$이면 $l \ne i$이고 $l < i < i + 1$이므로 $l \ne i + 1$이다. 따라서 $(i, l)$ 성분은 $0$이고 $J_p(\lambda)$는 위삼각행렬이다. 대각성분은 정의에 의해 $\lambda$이다.

(ii) 행렬의 (1), (6)에 의해 $\lambda I_p + J_p(0)$의 $(i, l)$ 성분은 $l = i$이면 $\lambda \cdot 1 + 0 = \lambda$, $l = i + 1$이면 $\lambda \cdot 0 + 1 = 1$, 그 밖에는 $\lambda \cdot 0 + 0 = 0$이다((K4), (K9)).

(iii) $j$번째 열의 $i$번째 값은 $(i, j)$ 성분이다. 그것은 $i = j$이면 $\lambda$, $j = i + 1$, 곧 $i = j - 1$이면 $1$, 그 밖에는 $0$이다. $j = 1$이면 $i = 0$은 $\{1, \dots, p\}$에 없으므로 첫째 열의 값은 $i = 1$에서 $\lambda$, 그 밖에서 $0$이고, 이것은 $\lambda e_1$이다([[standard-basis|표준기저]]). $j \ge 2$이면 $j - 1 \ge 1$이므로 $j$번째 열은 $(j-1)$번째 값이 $1$, $j$번째 값이 $\lambda$, 나머지가 $0$인 원소이고, 이것은 $e_{j-1} + \lambda e_j$이다. [[matrix-vector-product|행렬과 벡터의 곱]]의 (3)에 의해 $A e_j$는 $A$의 $j$번째 열이므로 둘째 문장이 나온다.

(iv) 행렬과 벡터의 곱의 (1)에 의해 $J_p(0)x$의 $i$번째 값은 $l$번째 항이 $(J_p(0))_{i,l}\, x_l$인 길이 $p$인 실수의 열의 합이다. $i < p$이면 $l = i + 1$인 항만 $0$이 아닐 수 있고 그 항은 $x_{i+1}$이므로, [[finite-sum-of-vectors|벡터의 유한 합]]의 (H7)에 의해 합은 $x_{i+1}$이다. $i = p$이면 $l = p + 1$은 범위 밖이므로 모든 항이 $0$이고 (H5)에 의해 합은 $0$이다.

(v) (i)과 [[characteristic-polynomial-of-triangular|삼각행렬의 특성다항식]]의 (2)에 의해 $p_{J_p(\lambda)}$는 모든 항이 $t - \lambda$인 길이 $p$인 열의 곱의 $(-1)^p$배이고, [[product-of-polynomial-functions|다항함수의 곱]]의 정의에 의해 그 곱은 $(t - \lambda)^p$이다. 삼각행렬의 특성다항식의 (3)에 의해 고윳값은 대각성분 $\lambda$뿐이다. [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (4)와 (ii)에 의해 $T_{J_p(\lambda)} - \lambda\, i_{\mathbb{R}^p} = T_{J_p(\lambda) - \lambda I_p} = T_{J_p(0)}$이고, (iv)에 의해 $J_p(0)x = 0$인 것은 정확히 $x_2 = \cdots = x_p = 0$일 때, 곧 [[standard-basis|표준기저]]의 (3)에 의해 $x = x_1 e_1$일 때이다. 따라서 고유공간은 $\{x_1 e_1 : x_1 \in \mathbb{R}\} = \operatorname{span}(e_1)$이다([[linear-combination-and-span|일차결합과 생성]]의 (N4)). $e_1 \ne 0$이므로 [[linear-independence|일차독립]]의 (I4)에 의해 $e_1$ 하나는 일차독립이고 고유공간을 생성하므로 그 기저이며, [[dimension|유한차원과 차원]]의 (2)에 의해 기하적 중복도는 $1$이다. 실수 $(-1)^p$는 $0$이 아니므로 [[multiplicity-of-a-root|근의 중복도]]의 (5)에 의해 $p_{J_p(\lambda)}$에서 $\lambda$의 중복도는 $p$이고, [[algebraic-multiplicity|고윳값의 대수적 중복도와 기하적 중복도]]의 정의에 의해 대수적 중복도는 $p$이다.

**(2).** (i) $i > l$이면 $l \ne i$이고 $l \ne i + 1$이므로 $(i, l)$ 성분은 $0$이다. 대각성분은 $\delta$이고 (가)에 의해 $\delta_{s_{k-1}+j} = \lambda_k$이다.

(ii) $l$번째 열의 $i$번째 값은 $i = l$이면 $\delta_l = \lambda_k$, $i + 1 = l$이면 $\varepsilon_{l-1}$, 그 밖에는 $0$이다. $j \ge 2$이면 $l - 1 = s_{k-1} + (j - 1)$이고 $(k, j - 1) \in \Lambda$, $j - 1 < p_k$이므로 $\varepsilon_{l-1} = 1$이다. 따라서 $l$번째 열은 $e_{l-1} + \lambda_k e_l$이다. $j = 1$이라 하자. $k = 1$이면 $l = 1$이고 $i = 0$은 범위 밖이므로 열은 $\lambda_1 e_1$이다. $k \ge 2$이면 이어 붙인 기저의 (2)의 (i)에 의해 $l - 1 = s_{k-1} = s_{k-2} + p_{k-1}$이고, $(k - 1, p_{k-1}) \in \Lambda$이므로 $\varepsilon_{l-1} = 0$이다. 따라서 열은 $\lambda_k e_l$이다.

(iii) (i)에 의해 $M$은 위삼각행렬이다. $j \in \{1, \dots, r\}$이고 $s_{j-1} < i \le s_j$이면 $i - s_{j-1} \in \{1, \dots, p_j\}$이므로 (가)에 의해 $(i, i)$ 성분은 $\lambda_j$이다. 이어 붙인 기저의 (2)의 (i)에 의해 $s_j = s_{j-1} + p_j$이므로, 삼각행렬의 특성다항식의 (5)를 $\mu_j = \lambda_j$, $m_j = p_j$에 쓰면 첫 문장이 나온다. 완전 인수분해는 [[split-characteristic-polynomial|완전히 인수분해되는 특성다항식]]의 (4)이다. 삼각행렬의 특성다항식의 (3)에 의해 $\mu$가 고윳값인 것은 정확히 어떤 $i$에서 $\mu = \delta_i$일 때이고, (가)에 의해 모든 $\delta_i$는 어떤 $\lambda_k$이며, 거꾸로 $p_k \ge 1$이므로 $(k, 1) \in \Lambda$이고 $\delta_{s_{k-1}+1} = \lambda_k$이다.

(iv) $r$에 대한 귀납으로 $(t - \lambda)^{p_1} \cdots (t - \lambda)^{p_r} = (t - \lambda)^{s_r}$을 보인다. $r = 1$이면 $s_1 = p_1$이다. $r \ge 2$이면 [[product-of-polynomial-functions|다항함수의 곱]]의 (2)에 의해 왼쪽은 처음 $r - 1$개의 곱과 $(t - \lambda)^{p_r}$의 곱이고, 귀납 가정과 같은 항목의 (3)의 $f^{j+k} = f^j f^k$, 그리고 이어 붙인 기저의 (2)의 (i)의 $s_r = s_{r-1} + p_r$에 의해 $(t - \lambda)^{s_{r-1}} (t - \lambda)^{p_r} = (t - \lambda)^{s_r}$이다. (iii)과 $n = s_r$에서 결론이 나온다. $\lambda = 0$이면 $t - 0 = t$이다([[polynomial-function|다항함수]]).

**(3).** (i) $r = 1$이면 $s_0 = 0$, $n = p_1$이고 (가)에 의해 $\delta_j = \lambda_1$, $\varepsilon_j$는 $j < p_1$이면 $1$이다. 따라서 $M$의 성분은 $J_{p_1}(\lambda_1)$의 성분과 같다.

(ii) 모든 $p_k = 1$이면 $s_k = k$이고 $n = r$이다(이어 붙인 기저의 (2)의 (i)과 귀납). (가)에 의해 $\delta_k = \lambda_k$이고 $j = 1 = p_k$이므로 $\varepsilon_k = 0$이다. 따라서 $M$의 성분은 $(k, k)$에서 $\lambda_k$, 그 밖에서 $0$이고, [[diagonalizable|대각화 가능]]에 의해 이것은 $\operatorname{diag}(\lambda_1, \dots, \lambda_r)$이다. 모든 $n \times n$ 대각행렬은 대각성분의 열로 이렇게 쓰이고, $1 \times 1$ 행렬 $(a)$는 $J_1(a)$이다.

**(4).** 이어 붙인 기저의 (2)의 (i)에 의해 $g = s_{r-1} \ge s_1 = p_1 \ge 1$이고 $h = p_r \ge 1$이며 $g + h = s_r = n$이다. $M'$의 $s'_k$, $\Lambda'$, $\delta'$, $\varepsilon'$은 $k \le r - 1$에서 $s'_k = s_k$, $\Lambda' = \{(k, j) \in \Lambda : k \le r - 1\}$이고, (가)를 $M'$에 쓰면 $i \le g$에서 $\delta'_i = \delta_i$, $\varepsilon'_i = \varepsilon_i$이다. [[block-triangular-determinant|블록 삼각행렬의 행렬식]]의 블록으로 쓴 꼴을 $g$, $h$에 대하여 본다.
- $i, l \le g$: 성분은 $l = i$이면 $\delta_i = \delta'_i$, $l = i + 1$이면 $\varepsilon_i = \varepsilon'_i$($i + 1 \le g$이므로 $i < g$), 그 밖에는 $0$이므로 $M'$의 $(i, l)$ 성분이다.
- $i \le g < l$: $0$이 아닐 수 있는 것은 $l = i + 1$인 경우뿐이고 그때 $i = g$, $l = g + 1$이다. $g = s_{r-1} = s_{r-2} + p_{r-1}$이므로 (가)에 의해 $\varepsilon_g = 0$이다. 따라서 오른쪽 위 블록은 영행렬이다.
- $l \le g < i$: $i > l$이므로 (2)의 (i)에 의해 $0$이다.
- $g < i$, $g < l$: $i = g + i'$, $l = g + l'$이라 하면 $(r, i') \in \Lambda$이므로 (가)에 의해 성분은 $l' = i'$이면 $\lambda_r$, $l' = i' + 1$이면 $i' < p_r$이므로 $1$, 그 밖에는 $0$이다. 이것은 $J_{p_r}(\lambda_r)$의 $(i', l')$ 성분이다.

**(5).** $N$은 같은 $p_1, \dots, p_r$로 정한 조르당 행렬이므로 그 $\varepsilon$은 $M$의 $\varepsilon$과 같고 그 $\delta$는 모든 항이 $0$이다. 행렬의 (1)에 의해 $D + N$의 $(i, l)$ 성분은 $l = i$이면 $\delta_i + 0$, $l = i + 1$이면 $0 + \varepsilon_i$, 그 밖에는 $0$이므로 $M$의 성분과 같다. [[matrix-product|행렬의 곱]]의 (2)와 벡터의 유한 합의 (H7), (H5)에 의해 $(DN)_{i,l} = \delta_i\, n_{i,l}$이고 $(ND)_{i,l} = n_{i,l}\, \delta_l$이다. $n_{i,l} \ne 0$이면 $l = i + 1$이고 $\varepsilon_i = 1$이므로, (가)의 $i = s_{k-1} + j$에서 $j < p_k$이고 $i + 1 = s_{k-1} + (j + 1)$, $(k, j + 1) \in \Lambda$이다. 따라서 $\delta_l = \lambda_k = \delta_i$이고 두 성분이 같다. $n_{i,l} = 0$이면 두 성분은 모두 $0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[J₃(2) 의 열과 고유공간]
$$
J_3(2) = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}
$$
의 열은 차례로 $2e_1$, $e_1 + 2e_2$, $e_2 + 2e_3$입니다((1)의 (iii)). $J_3(2) - 2I_3 = J_3(0)$이고 $J_3(0)(x_1, x_2, x_3) = (x_2, x_3, 0)$이므로 고유공간은 $x_2 = x_3 = 0$인 벡터, 곧 $\operatorname{span}(e_1)$입니다. 특성다항식은 $(-1)^3 (t - 2)^3$이고, 모든 실수 $x$에서 그 값은 $(2 - x)^3$입니다. $2$의 대수적 중복도는 $3$, 기하적 중복도는 $1$입니다.
:::

:::example[블록이 J₁(−2), J₃(0) 인 조르당 행렬]
$r = 2$, $\lambda_1 = -2$, $\lambda_2 = 0$, $p_1 = 1$, $p_2 = 3$이면 $s_0 = 0$, $s_1 = 1$, $s_2 = 4$이고 $\delta = (-2, 0, 0, 0)$, $\varepsilon = (0, 1, 1, 0)$입니다. 따라서
$$
M = \begin{pmatrix} -2 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}
$$
입니다. $\varepsilon_1 = 0$이 두 블록이 만나는 자리 $(1, 2)$의 성분이 $0$이라는 것을 정합니다. (2)의 (iii)에 의해 $p_M = (-1)^4 (t + 2)^1 (t - 0)^3$이고, 고윳값은 $-2$와 $0$입니다. (5)의 $D$는 $\operatorname{diag}(-2, 0, 0, 0)$이고 $N = M - D$는 $(2, 3)$, $(3, 4)$ 성분만 $1$인 행렬입니다.
:::

:::counterexample[대각성분이 다른데 오른쪽 위에 1 이 있는 2 × 2 행렬의 예]
$A = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}$은 조르당 행렬이 아닙니다. $2 \times 2$ 조르당 행렬은 $p_1 + \cdots + p_r = 2$인 자연수의 열이 $r = 1$, $p_1 = 2$이거나 $r = 2$, $p_1 = p_2 = 1$이므로 $J_2(\lambda)$이거나 대각행렬입니다((3)). $J_2(\lambda)$의 두 대각성분은 같은데 $A$의 대각성분은 $2 \ne 3$이고, 대각행렬의 $(1, 2)$ 성분은 $0$인데 $A$의 것은 $1$입니다.
:::

## 확인 질문

:::check[블록 J₂(5), J₂(5) 로 이루어진 조르당 행렬에서 5 의 두 중복도는?]
$n = 4$이고 (2)의 (iii)에 의해 $p_M = (-1)^4 (t - 5)^2 (t - 5)^2 = (t - 5)^4$이므로([[product-of-polynomial-functions|다항함수의 곱]]의 (3)) 대수적 중복도는 $4$입니다. (5)의 $D$는 $5I_4$이므로 $M - 5I_4$는 블록이 $J_2(0)$, $J_2(0)$인 조르당 행렬 $N$이고 $(1, 2)$, $(3, 4)$ 성분만 $1$이므로 $(M - 5I_4)x = (x_2, 0, x_4, 0)$입니다. 고유공간은 $\operatorname{span}(e_1, e_3)$이고 기하적 중복도는 $2$입니다.
:::

:::check[$J_p(\lambda)$ 가 $\lambda I_p$ 와 같은 것은 p 가 무엇일 때인가?]
$p = 1$일 때뿐입니다. $p = 1$이면 둘 다 $(\lambda)$입니다. $p \ge 2$이면 $J_p(\lambda)$의 $(1, 2)$ 성분은 $1$이고 $\lambda I_p$의 $(1, 2)$ 성분은 $0$이므로 다릅니다.
:::
