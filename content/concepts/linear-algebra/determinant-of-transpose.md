---
title: 전치행렬의 행렬식
title_en: Determinant of the Transpose
aliases: [det Aᵀ = det A, 열에 대한 행렬식의 성질, 열 연산과 행렬식, determinant of the transpose, column properties of the determinant]
kind: theorem
field: linear-algebra
msc: ["15A15"]
level: undergrad
summary: 정사각행렬 A 에 대하여 det Aᵀ = det A 이다. 따라서 행에 대한 행렬식의 성질이 열에도 성립한다. 행렬식은 각 열에 대해 선형이고(한 열이나 행이 여러 벡터의 일차결합이면 행렬식도 그 계수로 나뉜다), 서로 다른 두 열이 같거나 영열이 있으면 0 이며, 두 열을 맞바꾸면 부호가 바뀌고, 한 열에 다른 열의 상수배를 더해도 바뀌지 않는다. det A = 0 인 것은 정확히 행이 일차종속일 때이다.
requires: [real-number-arithmetic, mathematical-induction, finite-sum-of-vectors, real-function-space, linear-independence, matrix, transpose, invertible-matrix, inverse-matrix-properties, elementary-matrix, row-equivalence, echelon-form, invertible-matrix-and-row-reduction, determinant-function, determinant, determinant-and-invertibility, determinant-of-product]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 3절 Constructing the determinant, 3.1 Basic properties, p.79; 3.2 Properties of determinant deduced from the basic properties, Proposition 3.1, p.79, Proposition 3.2, p.80; 3.5 Determinants of a transpose and of a product. Determinants of elementary matrices, Theorem 3.4, p.82, 그 증명, pp.83–84; 3.6 Summary of properties of determinant 의 1, 2, 4, 5, 9, 10, pp.84–85; 3절 연습문제 3.2, 3.3, p.85; 7절 연습문제 7.1 b)–e), g), p.97"
    checked: original
    note: "(1)은 출처 Theorem 3.4(p.82) 'For a square matrix A, det A = det(Aᵀ)' 와 같다. 출처의 증명(pp.83–84)은 기본행렬 E 에서 det E = det(Eᵀ) 를 '쉽게 확인된다'고 하고, 가역이 아니면 Aᵀ 도 가역이 아니어서 둘 다 0 이며, 가역이면 Lemma 3.8 로 A 를 기본행렬의 곱으로 쓰고 전치가 각 기본행렬을 전치하고 순서를 뒤집는다는 것과 Corollary 3.7 로 마친다. 이 항목도 같은 길이지만, 기본행렬의 전치를 (2)에서 성분으로 계산하고, Corollary 3.7 대신 곱의 행렬식과 사슬의 길이에 대한 귀납법을 쓴다. 출처는 행렬식을 열에 대한 세 기본 성질(각 열에 대해 선형, 두 열을 맞바꾸면 부호가 바뀜, det I = 1 — 3.1절, p.79)에서 출발하고, 같은 두 열·영열·한 열이 다른 열의 배수인 경우·열이 일차종속인 경우의 0(Proposition 3.1, p.79)과 한 열에 다른 열들의 일차결합을 더해도 바뀌지 않는다는 것(Proposition 3.2, p.80)을 먼저 증명한다. 행에 대한 성질은 Theorem 3.4 뒤에 얻는다고 적는다(p.82, 3.6절 p.84). 이 강의는 거꾸로 행에 대한 성질로 행렬식 함수를 정의했으므로, 이 항목의 (3)–(7)에서 열에 대한 성질을 Theorem 3.4 로 얻는다. (3)–(7)은 출처 3.6절의 1, 2, 4, 5, 9(pp.84–85)의 열에 관한 부분에 해당하고, (8)은 같은 절의 6 의 행에 관한 부분(한 행이 다른 행들의 일차결합이면 0)을 '정확히 ~일 때'로 적은 것이다. (9)의 일차결합 꼴의 선형성은 출처가 Proposition 3.1 의 4 의 증명(p.80)에서 열 v₁ 이 α₂v₂ + ⋯ + αₙvₙ 일 때 '선형성에 의해' 합을 바깥으로 꺼내는 데 쓰는 꼴이다. 출처는 그 자리에서 'by linearity' 라고 적고, 기본 성질 1(3.1절)은 두 항의 꼴로 적혀 있다. 이 항목은 항의 개수에 대한 귀납으로 증명한다. 출처 연습문제 7.1(p.97)의 b)(같은 두 행이나 열), c)(두 행이나 열을 맞바꾼 행렬), d)(한 행이나 열에 스칼라를 곱한 행렬), e)(한 행에 다른 행의 배수를 더한 행렬), g)(det(Aᵀ) = −det(A))는 이 성질들을 참·거짓으로 묻는다. 예시 '열 연산으로 계산한 3 × 3 행렬식'은 출처 연습문제 3.3(p.85, 열 연산이나 행 연산으로 행렬식을 계산하라)과 같은 발상이고, 열에 다른 열의 배수를 더하는 계산은 연습문제 3.2 b)(p.85)의 둘째 열 4a₂ + 5a₁ 과 같은 종류이다. 반례 '두 열을 맞바꾸어 행렬식의 부호가 바뀐 3 × 3 행렬'은 출처 연습문제 7.1 c)(p.97)가 거짓인 경우의 예이다. 확인 질문 '$\\det A = 3$인 $3 \\times 3$ 행렬 $A$의 둘째 열에 첫째 열의 $4$배를 더한 뒤 첫째 열과 셋째 열을 맞바꾸면 행렬식은 무엇이 되는가?' 는 출처 연습문제 3.2(p.85)와 같은 종류의 물음이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 거짓이던 직관 2건, 단원 글의 상태 문장 1건, 메모의 부정 주장 2건, 근거 없던 작은 사실 3건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$n$이 자연수이고 $A$가 $n \times n$ [[matrix|행렬]]이라 하자. $A^T$는 [[transpose|전치행렬]]이고 $\det$는 [[determinant|행렬식]]이다. 행렬 $A$, $B$, $C$의 $k$번째 열은 [[matrix|행렬]]에서 정한 $\mathbb{R}^n$의 원소 $\mathbf{a}_k$, $\mathbf{b}_k$, $\mathbf{c}_k$이고, 같은 크기의 두 행렬이 "$p$번째 열을 뺀 모든 열에서 같다"는 것은 $p$가 아닌 모든 열 번호 $k$에서 두 행렬의 $k$번째 열이 같다는 뜻이다. 기본행렬 $P_{j,k}$, $D_k(c)$, $R_{k,j}(c)$는 [[elementary-matrix|기본행렬]]에서 정한 $n \times n$의 것이다.

1. (전치의 행렬식) $\det A^T = \det A$이다.
2. (기본행렬의 전치) $k \in \{1, \dots, n\}$이고 $c \ne 0$이면 $D_k(c)^T = D_k(c)$이다. $j$, $k \in \{1, \dots, n\}$이고 $j \ne k$이면 $P_{j,k}^T = P_{j,k}$이고, 실수 $c$에 대하여 $R_{k,j}(c)^T = R_{j,k}(c)$이다. 따라서 기본행렬 $G$의 전치행렬 $G^T$는 기본행렬이고 $\det G^T = \det G$이다.
3. (각 열에 대해 선형) $p \in \{1, \dots, n\}$, 실수 $\alpha$, $\beta$와 $A$, $B$, $C \in M_{n \times n}$에 대하여, $A$, $B$, $C$가 $p$번째 열을 뺀 모든 열에서 서로 같고 $\mathbf{c}_p = \alpha \mathbf{a}_p + \beta \mathbf{b}_p$이면 $\det C = \alpha \det A + \beta \det B$이다.
4. (같은 두 열) $j \ne k$인 어떤 $j$, $k \in \{1, \dots, n\}$에서 $\mathbf{a}_j = \mathbf{a}_k$이면 $\det A = 0$이다.
5. (영열과 열의 상수배)
   - (a) 어떤 $k$에서 $\mathbf{a}_k$가 $\mathbb{R}^n$의 영벡터이면 $\det A = 0$이다.
   - (b) $c$가 실수($0$이어도 된다)이고 $B$가 $p$번째 열을 뺀 모든 열에서 $A$와 같으며 $\mathbf{b}_p = c\,\mathbf{a}_p$이면 $\det B = c \det A$이다.
6. (열 맞바꾸기) $j$, $k \in \{1, \dots, n\}$이고 $j \ne k$이며, $B$가 $\mathbf{b}_j = \mathbf{a}_k$, $\mathbf{b}_k = \mathbf{a}_j$이고 $j$도 $k$도 아닌 모든 $l$에서 $\mathbf{b}_l = \mathbf{a}_l$인 $n \times n$ 행렬이면 $\det B = -\det A$이다.
7. (열 더하기) $j$, $k \in \{1, \dots, n\}$이고 $j \ne k$이며 $c$가 실수이고, $B$가 $k$번째 열을 뺀 모든 열에서 $A$와 같으며 $\mathbf{b}_k = \mathbf{a}_k + c\,\mathbf{a}_j$이면 $\det B = \det A$이다.
8. (행의 일차종속) $\det A = 0$인 것은 정확히 $A$의 행을 차례로 늘어놓은 $\mathbb{R}^n$의 벡터의 열($j$번째 항이 $A$의 $j$번째 행)이 [[linear-independence|일차종속]]일 때이다.
9. (일차결합으로 쓴 열과 행) $p \ge 0$이 정수이고 $k \in \{1, \dots, n\}$이며, $x_1, \dots, x_p$가 길이 $p$인 실수의 열, $\mathbf{v}_1, \dots, \mathbf{v}_p$가 $\mathbb{R}^n$의 길이 $p$인 벡터의 열이라 하자. 합과 계수를 곱한 합은 [[finite-sum-of-vectors|벡터의 유한 합]]의 것이다.
   - (a) (열) $\mathbf{a}_k = x_1 \mathbf{v}_1 + \cdots + x_p \mathbf{v}_p$이고, 각 $i \in \{1, \dots, p\}$에서 $B_i$가 $k$번째 열을 뺀 모든 열에서 $A$와 같고 $k$번째 열이 $\mathbf{v}_i$인 $n \times n$ 행렬이면
   $$
   \begin{aligned}
   \det A &= x_1 \det B_1 \\
   &\quad + \cdots + x_p \det B_p
   \end{aligned}
   $$
   이다. 오른쪽은 $i$번째 항이 $x_i \det B_i$인 길이 $p$인 실수의 열의 합이다.
   - (b) (행) $A$의 $k$번째 행이 $x_1 \mathbf{v}_1 + \cdots + x_p \mathbf{v}_p$이고, 각 $i$에서 $B_i$가 $k$번째 행을 뺀 모든 행에서 $A$와 같고 $k$번째 행이 $\mathbf{v}_i$인 $n \times n$ 행렬이면 $\det A = x_1 \det B_1 + \cdots + x_p \det B_p$이다.

   $p = 0$이면 두 경우 모두 $A$의 $k$번째 열이나 행이 영벡터이고 오른쪽은 빈 합 $0$이다.

$n = 1$이면 $A^T = A$이고, $j \ne k$인 $j$, $k \in \{1\}$이 없으므로 (4), (6), (7)과 (2)의 $P_{j,k}$, $R_{k,j}(c)$에 관한 부분은 해당하는 경우가 없다.
:::

:::english
Let $n$ be a natural number and $A$ an $n \times n$ matrix. $A^T$ is the transpose and $\det$ is the determinant. The $k$-th columns of matrices $A$, $B$, $C$ are the elements $\mathbf{a}_k$, $\mathbf{b}_k$, $\mathbf{c}_k$ of $\mathbb{R}^n$ defined in the entry on matrices, and two matrices of the same size "agree in every column except the $p$-th" means that their $k$-th columns are equal for every column index $k$ other than $p$. The elementary matrices $P_{j,k}$, $D_k(c)$, $R_{k,j}(c)$ are the $n \times n$ ones defined in the entry on elementary matrices.

1. (Determinant of the transpose) $\det A^T = \det A$.
2. (Transposes of elementary matrices) If $k \in \{1, \dots, n\}$ and $c \ne 0$, then $D_k(c)^T = D_k(c)$. If $j$, $k \in \{1, \dots, n\}$ and $j \ne k$, then $P_{j,k}^T = P_{j,k}$, and for a real number $c$, $R_{k,j}(c)^T = R_{j,k}(c)$. Hence for an elementary matrix $G$ the transpose $G^T$ is an elementary matrix and $\det G^T = \det G$.
3. (Linear in each column) For $p \in \{1, \dots, n\}$, real numbers $\alpha$, $\beta$ and $A$, $B$, $C \in M_{n \times n}$: if $A$, $B$, $C$ agree with one another in every column except the $p$-th and $\mathbf{c}_p = \alpha \mathbf{a}_p + \beta \mathbf{b}_p$, then $\det C = \alpha \det A + \beta \det B$.
4. (Two equal columns) If $\mathbf{a}_j = \mathbf{a}_k$ for some $j \ne k$ in $\{1, \dots, n\}$, then $\det A = 0$.
5. (Zero column and scalar multiple of a column)
   - (a) If $\mathbf{a}_k$ is the zero vector of $\mathbb{R}^n$ for some $k$, then $\det A = 0$.
   - (b) If $c$ is a real number (possibly $0$), $B$ agrees with $A$ in every column except the $p$-th, and $\mathbf{b}_p = c\,\mathbf{a}_p$, then $\det B = c \det A$.
6. (Swapping two columns) If $j$, $k \in \{1, \dots, n\}$, $j \ne k$, and $B$ is the $n \times n$ matrix with $\mathbf{b}_j = \mathbf{a}_k$, $\mathbf{b}_k = \mathbf{a}_j$ and $\mathbf{b}_l = \mathbf{a}_l$ for every $l$ other than $j$ and $k$, then $\det B = -\det A$.
7. (Adding to a column) If $j$, $k \in \{1, \dots, n\}$, $j \ne k$, $c$ is a real number, $B$ agrees with $A$ in every column except the $k$-th, and $\mathbf{b}_k = \mathbf{a}_k + c\,\mathbf{a}_j$, then $\det B = \det A$.
8. (Dependent rows) $\det A = 0$ exactly when the sequence of vectors in $\mathbb{R}^n$ listing the rows of $A$ in order (whose $j$-th term is the $j$-th row of $A$) is linearly dependent.
9. (A column or row written as a linear combination) Let $p \ge 0$ be an integer, $k \in \{1, \dots, n\}$, $x_1, \dots, x_p$ a sequence of real numbers of length $p$, and $\mathbf{v}_1, \dots, \mathbf{v}_p$ a sequence of vectors in $\mathbb{R}^n$ of length $p$. Sums and sums with coefficients are those of finite sums of vectors.
   - (a) (Columns) If $\mathbf{a}_k = x_1 \mathbf{v}_1 + \cdots + x_p \mathbf{v}_p$ and, for each $i \in \{1, \dots, p\}$, $B_i$ is the $n \times n$ matrix that agrees with $A$ in every column except the $k$-th and whose $k$-th column is $\mathbf{v}_i$, then
   $$
   \begin{aligned}
   \det A &= x_1 \det B_1 \\
   &\quad + \cdots + x_p \det B_p.
   \end{aligned}
   $$
   The right side is the sum of the sequence of real numbers of length $p$ whose $i$-th term is $x_i \det B_i$.
   - (b) (Rows) If the $k$-th row of $A$ is $x_1 \mathbf{v}_1 + \cdots + x_p \mathbf{v}_p$ and, for each $i$, $B_i$ is the $n \times n$ matrix that agrees with $A$ in every row except the $k$-th and whose $k$-th row is $\mathbf{v}_i$, then $\det A = x_1 \det B_1 + \cdots + x_p \det B_p$.

   If $p = 0$, then in both cases the $k$-th column or row of $A$ is the zero vector and the right side is the empty sum $0$.

If $n = 1$, then $A^T = A$, and since there are no $j \ne k$ in $\{1\}$, (4), (6), (7) and the parts of (2) about $P_{j,k}$ and $R_{k,j}(c)$ have no cases to which they apply.
:::

## 직관

행렬식은 행에 대한 조건으로 정의되었고, 기본행렬을 왼쪽에 곱하는 $GA$가 행 연산이므로 1단원에서 얻은 기본 행 연산에 관한 성질도 행에 대한 것입니다. 전치는 행과 열을 맞바꾸므로, $\det A^T = \det A$가 성립하면 행에 대해 알던 것을 $A^T$에 쓰고 다시 $A$로 돌아와 열에 대한 성질로 읽을 수 있습니다. 거울에 비친 글자를 읽을 때 거울 속 왼쪽이 실제의 오른쪽인 것처럼, $A^T$의 $k$번째 행이 $A$의 $k$번째 열입니다.

(1)이 성립하는 까닭은 기본행렬에 있습니다. 기본행렬을 전치하면 같은 종류의 기본행렬이 되고 행렬식도 같습니다. 가역행렬은 기본행렬의 곱이고, 곱을 전치하면 각 인자를 전치해 순서를 뒤집은 곱이 되는데, 곱의 행렬식은 순서와 상관없는 실수의 곱입니다. 가역이 아닌 행렬은 전치해도 가역이 아니므로 양쪽 모두 $0$입니다.

$2 \times 2$에서는 $\det A = a_{1,1}a_{2,2} - a_{2,1}a_{1,2}$이고 $A^T$에서는 $a_{1,1}a_{2,2} - a_{1,2}a_{2,1}$이어서 두 식이 실수의 곱의 교환법칙으로 같습니다. 크기가 커지면 이렇게 식을 맞대 보기 어려우므로 기본행렬을 거쳐 증명합니다.

## 증명

:::idea
기본행렬의 전치는 성분으로 계산해 같은 종류의 기본행렬임을 보인다. 가역인 $A$는 기본행렬의 곱이므로 사슬의 길이에 대한 귀납법과 [[determinant-of-product|곱의 행렬식]]으로 (1)을 얻고, 가역이 아니면 양쪽이 $0$이다. 열에 대한 성질은 $A^T$의 $k$번째 행이 $A$의 $k$번째 열이라는 것으로 행에 대한 성질에서 옮겨 온다.
:::

:::hint
$P_{j,k}$의 성분은 $q = \tau(p)$일 때 $1$입니다. $\tau$를 두 번 적용하면 무엇이 됩니까? $R_{k,j}(c)$를 전치하면 $c$가 놓인 자리 $(k, j)$는 어디로 갑니까?
:::

:::hint
기본행렬의 곱 $E$에 이르는 사슬 $F_1, \dots, F_N$에서 $F_{i+1} = GF_i$이면 $F_{i+1}^T = F_i^T G^T$입니다. 사슬의 길이에 대한 귀납법을 쓰세요.
:::

:::proof
행렬식 항목의 번호는 "행렬식의 (n)"으로, [[determinant-of-product|곱의 행렬식]]의 번호는 "곱의 (n)"으로, [[determinant-and-invertibility|행렬식과 가역성]]의 번호는 "가역성의 (n)"으로 인용한다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 번호로 인용한다.

**준비.** [[transpose|전치행렬]]의 (2)에 의해 $n \times n$ 행렬 $X$의 전치행렬 $X^T$의 $k$번째 행은 $X$의 $k$번째 열 $\mathbf{x}_k$이다. 이것을 (가)라 부른다. 또 $X^T$의 $(p, q)$ 성분은 전치행렬의 정의에 의해 $x_{q,p}$이다.

**(2)의 증명.** 성분을 비교하고 [[matrix|행렬]]의 (2)를 쓴다.

- $D_k(c)$: $(D_k(c)^T)_{p,q}$는 $D_k(c)$의 $(q, p)$ 성분이므로 $q = p = k$이면 $c$, $q = p \ne k$이면 $1$, $q \ne p$이면 $0$이다. 이 세 조건은 $p$와 $q$를 맞바꿔도 같은 조건이므로 $D_k(c)$의 $(p, q)$ 성분과 같다.
- $P_{j,k}$: $\tau$를 기본행렬 항목에서 $P_{j,k}$를 정할 때 쓴 함수라 하면 $\tau(\tau(j)) = \tau(k) = j$, $\tau(\tau(k)) = \tau(j) = k$이고 $j$도 $k$도 아닌 $p$에서 $\tau(\tau(p)) = p$이다. 따라서 $p = \tau(q)$이면 $\tau(p) = \tau(\tau(q)) = q$이고, 거꾸로 $q = \tau(p)$이면 $\tau(q) = p$이다. 곧 $p = \tau(q)$인 것은 정확히 $q = \tau(p)$일 때이다. $(P_{j,k}^T)_{p,q}$는 $P_{j,k}$의 $(q, p)$ 성분이므로 $p = \tau(q)$이면 $1$, 아니면 $0$이고, 따라서 $q = \tau(p)$이면 $1$, 아니면 $0$이다. 이것은 $P_{j,k}$의 $(p, q)$ 성분이다.
- $R_{k,j}(c)$: $(R_{k,j}(c)^T)_{p,q}$는 $R_{k,j}(c)$의 $(q, p)$ 성분이므로 $q = p$이면 $1$, $(q, p) = (k, j)$, 곧 $(p, q) = (j, k)$이면 $c$, 그 밖에는 $0$이다. $j \ne k$이므로 $R_{j,k}(c)$는 기본행렬이고, 그 $(p, q)$ 성분은 $p = q$이면 $1$, $(p, q) = (j, k)$이면 $c$, 그 밖에는 $0$이다. 두 성분은 같다.

따라서 $G^T$는 $G$와 같은 꼴의 기본행렬이다. 행렬식의 (5)에 의해 $\det P_{j,k} = -1$, $\det D_k(c) = c$이고 $\det R_{k,j}(c) = 1 = \det R_{j,k}(c)$이므로, 모든 기본행렬 $G$에서 $\det G^T = \det G$이다.

**(1)의 증명.** 먼저 다음을 보인다. (나) $E$가 $n \times n$ 기본행렬의 곱이면 $\det E^T = \det E$이다.

자연수 $N$에 대하여 "$E$에 이르는 길이 $N$인 사슬이 있는 모든 $n \times n$ 행렬 $E$에서 $\det E^T = \det E$"를 $S_N$이라 하고 [[mathematical-induction|수학적 귀납법]]을 쓴다. 사슬은 [[row-equivalence|행 동치]] 항목의 것이다.

- 기초 단계: 길이 $1$인 사슬 $F_1$이 $E$에 이르면 $E = F_1 = I_n$이다. 전치행렬의 (3)에 의해 $I_n^T = I_n$이므로 $\det E^T = \det E$이다.
- 귀납 단계: $S_N$이 참이라 하고, $F_1, \dots, F_{N+1}$이 $E$에 이르는 사슬이라 하자. 처음 $N$개 $F_1, \dots, F_N$은 $F_1 = I_n$이고 $1 \le i < N$에서 $F_{i+1} = GF_i$인 기본행렬 $G$가 있으므로 $F_N$에 이르는 길이 $N$인 사슬이고, $S_N$에 의해 $\det F_N^T = \det F_N$이다. 또 $E = F_{N+1} = GF_N$인 기본행렬 $G$가 있다. 전치행렬의 (4)에 의해 $E^T = F_N^T G^T$이므로, 곱의 (1), $S_N$, (2), (K1), 곱의 (1)을 차례로 써서
  $$
  \begin{aligned}
  \det E^T &= \det F_N^T \cdot \det G^T \\
  &= \det F_N \cdot \det G \\
  &= \det G \cdot \det F_N \\
  &= \det(GF_N) = \det E
  \end{aligned}
  $$
  이다.

따라서 모든 자연수 $N$에서 $S_N$이 참이다. 기본행렬의 곱에는 정의에 의해 어떤 길이 $N \ge 1$의 사슬이 있으므로 (나)가 성립한다.

이제 $A$가 [[invertible-matrix|가역]]이면 [[invertible-matrix-and-row-reduction|가역행렬과 행 소거]]의 (1)의 (i)에서 (iv)로 가는 방향에 의해 $A$는 기본행렬의 곱이고, (나)에 의해 $\det A^T = \det A$이다.

$A$가 가역이 아니라 하자. $A^T$가 가역이라면 [[inverse-matrix-properties|역행렬의 성질]]의 (4)에 의해 $(A^T)^T$가 가역이고 전치행렬의 (1)에 의해 $(A^T)^T = A$이므로 $A$가 가역이 되어 어긋난다. 따라서 $A^T$도 가역이 아니다. 가역성의 (1)에 의해 $\det A = 0$이고 $\det A^T = 0$이다.

**(3)의 증명.** (가)에 의해 $A^T$, $B^T$, $C^T$의 $k$번째 행은 $\mathbf{a}_k$, $\mathbf{b}_k$, $\mathbf{c}_k$이다. 따라서 $A^T$, $B^T$, $C^T$는 $p$번째 행을 뺀 모든 행에서 서로 같고, $C^T$의 $p$번째 행 $\mathbf{c}_p$는 $\alpha$($A^T$의 $p$번째 행) $+ \beta$($B^T$의 $p$번째 행)이다. 행렬식의 (1)의 (i)에 의해 $\det C^T = \alpha \det A^T + \beta \det B^T$이고, (1)에 의해 $\det C = \alpha \det A + \beta \det B$이다.

**(4)의 증명.** (가)에 의해 $A^T$의 $j$번째 행과 $k$번째 행은 $\mathbf{a}_j = \mathbf{a}_k$로 같다. 행렬식의 (1)의 (ii)에 의해 $\det A^T = 0$이고, (1)에 의해 $\det A = 0$이다.

**(5)의 증명.** (a) $\mathbf{a}_k$가 영벡터이면 [[real-function-space|실숫값 함수의 공간]]에 의해 그 모든 값이 $0$이다. $A^T$의 $(k, q)$ 성분은 $a_{q,k}$, 곧 $\mathbf{a}_k$의 $q$번째 값이므로 $0$이고, [[echelon-form|사다리꼴]]의 정의에 의해 $A^T$의 $k$번째 행은 영행이다. 행렬식의 (7)의 (a)와 (1)에 의해 $\det A = \det A^T = 0$이다.

(b) (가)에 의해 $B^T$는 $p$번째 행을 뺀 모든 행에서 $A^T$와 같고 $B^T$의 $p$번째 행은 $c$($A^T$의 $p$번째 행)이다. 행렬식의 (7)의 (b)와 (1)에 의해 $\det B = \det B^T = c \det A^T = c \det A$이다.

**(6)의 증명.** $\tau$를 (2)의 증명의 함수라 하면 모든 $l$에서 $\mathbf{b}_l = \mathbf{a}_{\tau(l)}$이다. 따라서 모든 $p$, $q$에서 $(B^T)_{p,q} = b_{q,p}$는 $\mathbf{b}_p$의 $q$번째 값, 곧 $\mathbf{a}_{\tau(p)}$의 $q$번째 값 $a_{q,\tau(p)}$이다. 한편 [[elementary-matrix|기본행렬]]의 (2)에 의해 $(P_{j,k}A^T)_{p,q} = (A^T)_{\tau(p),q} = a_{q,\tau(p)}$이다. 행렬의 (2)에 의해 $B^T = P_{j,k}A^T$이고, 행렬식의 (5)와 (1)에 의해 $\det B = \det B^T = -\det A^T = -\det A$이다.

**(7)의 증명.** $l$번째 항이 $l \ne k$이면 $\mathbf{a}_l$, $l = k$이면 $\mathbf{a}_j$인 $\mathbb{R}^n$의 벡터의 열이 있으므로([[finite-sum-of-vectors|벡터의 유한 합]]의 진술) 행렬의 (4)에 의해 이 열을 열로 갖는 $n \times n$ 행렬 $A'$이 있다. $A$, $A'$, $B$는 $k$번째 열을 뺀 모든 열에서 서로 같고, $\mathbf{b}_k = 1 \cdot \mathbf{a}_k + c\,\mathbf{a}'_k$이다($\mathbf{a}'_k = \mathbf{a}_j$이고, [[real-function-space|실숫값 함수의 공간]]의 스칼라배와 (K1), (K4)에 의해 $1 \cdot \mathbf{a}_k = \mathbf{a}_k$이다). (3)에 의해 $\det B = 1 \cdot \det A + c \det A'$이다. $A'$의 $j$번째 열과 $k$번째 열은 둘 다 $\mathbf{a}_j$이고 $j \ne k$이므로 (4)에 의해 $\det A' = 0$이다. (K9)와 (K4)에 의해 $\det B = \det A$이다.

**(8)의 증명.** (가)에 의해 $A^T$의 $j$번째 열은 $A$의 $j$번째 행이므로, $A^T$의 열을 차례로 늘어놓은 벡터의 열은 모든 자리에서 $A$의 행을 차례로 늘어놓은 벡터의 열과 항이 같고, 벡터의 유한 합의 진술(길이가 같은 두 열은 모든 자리에서 항이 같으면 같은 열)에 의해 같은 열이다. 가역성의 (3)의 (a)를 $A^T$에 쓰면 $\det A^T = 0$인 것은 정확히 이 열이 일차종속일 때이고, (1)에 의해 $\det A^T = \det A$이다.

**(9)의 증명.** 먼저 (b)를 $p$에 대한 [[mathematical-induction|수학적 귀납법]]으로 보인다(시작점 $0$). $p$마다 명제 "모든 $n \times n$ 행렬 $A$, 모든 $k$와 길이 $p$인 모든 $x$, $\mathbf{v}$에 대하여 (b)가 성립한다"를 $S'_p$라 한다.

- 기초 단계: $p = 0$이면 벡터의 유한 합의 정의에 의해 $A$의 $k$번째 행은 영벡터이고, [[real-function-space|실숫값 함수의 공간]]에 의해 그 모든 값이 $0$이므로 [[echelon-form|사다리꼴]]의 정의에 의해 영행이다. 행렬식의 (7)의 (a)에 의해 $\det A = 0$이고, 오른쪽은 빈 합이므로 $\mathbb{R}$의 영벡터 $0$이다.
- 귀납 단계: $S'_p$가 참이라 하고, 길이 $p + 1$인 $x$, $\mathbf{v}$에 대하여 $A$의 $k$번째 행이 $x_1 \mathbf{v}_1 + \cdots + x_{p+1} \mathbf{v}_{p+1}$이라 하자. $\mathbf{w} = x_1 \mathbf{v}_1 + \cdots + x_p \mathbf{v}_p$(처음 $p$개의 합)라 하면 합의 정의에 의해 $A$의 $k$번째 행은 $\mathbf{w} + x_{p+1} \mathbf{v}_{p+1}$이고, 실숫값 함수의 공간의 스칼라배와 (K1), (K4)에 의해 이것은 $1 \cdot \mathbf{w} + x_{p+1} \mathbf{v}_{p+1}$이다. $k$번째 행을 뺀 모든 행에서 $A$와 같고 $k$번째 행이 $\mathbf{w}$인 $n \times n$ 행렬을 $A'$이라 하자(성분마다 실수가 정해지므로 (G)와 행렬의 (2)에 의해 하나 있다). $A'$, $B_{p+1}$, $A$는 $k$번째 행을 뺀 모든 행에서 서로 같으므로 행렬식의 (1)의 (i)에 의해 $\det A = 1 \cdot \det A' + x_{p+1} \det B_{p+1}$이다. $i \le p$이면 $B_i$는 $k$번째 행을 뺀 모든 행에서 $A'$과도 같고 $k$번째 행이 $\mathbf{v}_i$이므로, $S'_p$를 $A'$에 쓰면 $\det A' = x_1 \det B_1 + \cdots + x_p \det B_p$이다. 따라서 (K4), (K1)과 실수의 열의 합의 정의에 의해
  $$
  \begin{aligned}
  \det A &= (x_1 \det B_1 + \cdots \\
  &\qquad + x_p \det B_p) \\
  &\quad + x_{p+1} \det B_{p+1} \\
  &= x_1 \det B_1 + \cdots \\
  &\quad + x_{p+1} \det B_{p+1}
  \end{aligned}
  $$
  이다.

따라서 모든 $p \ge 0$에서 (b)가 성립한다.

(a) (가)에 의해 $A^T$의 $k$번째 행은 $\mathbf{a}_k = x_1 \mathbf{v}_1 + \cdots + x_p \mathbf{v}_p$이고, $B_i^T$는 $k$번째 행을 뺀 모든 행에서 $A^T$와 같고 $k$번째 행이 $\mathbf{v}_i$이다. (b)를 $A^T$와 $B_1^T, \dots, B_p^T$에 쓰면 $\det A^T = x_1 \det B_1^T + \cdots + x_p \det B_p^T$이다. (1)에 의해 $\det A^T = \det A$이고 각 $i$에서 $\det B_i^T = \det B_i$이므로, 오른쪽의 열은 모든 자리에서 $x_i \det B_i$와 같아 합도 같다. 따라서 $\det A = x_1 \det B_1 + \cdots + x_p \det B_p$이다. $\blacksquare$
:::

## 예시와 반례

:::example[열 연산으로 계산한 3 × 3 행렬식]
$$
C = \begin{pmatrix} 1 & 2 & -1 \\ 3 & 7 & 0 \\ 2 & 4 & 5 \end{pmatrix}
$$

의 둘째 열에 첫째 열의 $-2$배를 더하면 둘째 열은 $(2, 7, 4) - (2, 6, 4) = (0, 1, 0)$이 되고, 이어서 셋째 열에 첫째 열을 더하면 셋째 열은 $(-1, 0, 5) + (1, 3, 2) = (0, 3, 7)$이 됩니다. (7)을 두 번 쓰면

$$
\det C = \det \begin{pmatrix} 1 & 0 & 0 \\ 3 & 1 & 3 \\ 2 & 0 & 7 \end{pmatrix}
$$

이고, [[determinant|행렬식]]의 (4)에 의해 오른쪽은 $1 \cdot (1 \cdot 7 - 0 \cdot 3) - 3 \cdot (0 \cdot 7 - 0 \cdot 0) + 2 \cdot (0 \cdot 3 - 1 \cdot 0) = 7$입니다. $C$에 행렬식의 (4)를 바로 쓰면 $1 \cdot (35 - 0) - 3 \cdot (10 + 4) + 2 \cdot (0 + 7) = 35 - 42 + 14 = 7$로 같은 값이 나옵니다.
:::

:::example[같은 두 열이 있는 3 × 3 행렬]
$$
M = \begin{pmatrix} 1 & 3 & 1 \\ 2 & -1 & 2 \\ 0 & 5 & 0 \end{pmatrix}
$$

은 세 행이 모두 다르고 영행도 없지만 첫째 열과 셋째 열이 같으므로 (4)에 의해 $\det M = 0$입니다. [[determinant|행렬식]]의 (4)로 계산해도 $1 \cdot ((-1) \cdot 0 - 5 \cdot 2) - 2 \cdot (3 \cdot 0 - 5 \cdot 1) + 0 = -10 + 10 = 0$입니다. (8)에 의해 $M$의 행을 차례로 늘어놓은 벡터의 열도 일차종속입니다. 실제로 첫째, 둘째, 셋째 행에 차례로 $10$, $-5$, $-7$을 곱해 더하면 $(10 - 10 - 0, 30 + 5 - 35, 10 - 10 - 0) = (0, 0, 0)$이고, 이 계수는 $0$이 아닙니다.
:::

:::counterexample[두 열을 맞바꾸어 행렬식의 부호가 바뀐 3 × 3 행렬]
위 예시의 $C$에서 첫째 열과 둘째 열을 맞바꾼

$$
C' = \begin{pmatrix} 2 & 1 & -1 \\ 7 & 3 & 0 \\ 4 & 2 & 5 \end{pmatrix}
$$

은 [[determinant|행렬식]]의 (4)에 의해 $\det C' = 2 \cdot (15 - 0) - 7 \cdot (5 + 2) + 4 \cdot (0 + 3) = 30 - 49 + 12 = -7$입니다. 열을 맞바꾸면 같은 열들로 된 행렬이라도 행렬식이 $\det C = 7$과 다를 수 있고, (6)이 말하는 대로 부호만 바뀝니다.
:::

## 확인 질문

:::check[$\det A = 3$인 $3 \times 3$ 행렬 $A$의 둘째 열에 첫째 열의 $4$배를 더한 뒤 첫째 열과 셋째 열을 맞바꾸면 행렬식은 무엇이 되는가?]
(7)에 의해 첫 번째 바꿈 뒤의 행렬식은 그대로 $3$이고, (6)에 의해 두 번째 바꿈 뒤에는 $-3$입니다.
:::

:::check[$A = \begin{pmatrix} 2 & 5 \\ -1 & 3 \end{pmatrix}$와 $A^T$의 행렬식을 각각 계산하면 무엇인가?]
$A^T = \begin{pmatrix} 2 & -1 \\ 5 & 3 \end{pmatrix}$입니다. [[determinant|행렬식]]의 (4)에 의해 $\det A = 2 \cdot 3 - (-1) \cdot 5 = 11$이고 $\det A^T = 2 \cdot 3 - 5 \cdot (-1) = 11$이어서 (1)대로 같습니다.
:::
