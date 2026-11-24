---
title: 삼각행렬의 행렬식
title_en: Determinant of a Triangular Matrix
aliases: [대각행렬의 행렬식, 위삼각행렬의 행렬식, 아래삼각행렬의 행렬식, determinant of a triangular matrix, determinant of a diagonal matrix]
kind: proposition
field: linear-algebra
msc: ["15A15"]
level: undergrad
summary: 첫째 열이나 첫째 행에서 (1, 1) 성분 c 말고는 모두 0 인 정사각행렬 M 은 det M = c·det M⁽¹·¹⁾ 이다. 이것을 되풀이하면 위삼각행렬, 아래삼각행렬, 대각행렬의 행렬식은 대각성분의 곱이고, 삼각행렬이 가역인 것은 정확히 대각성분이 모두 0 이 아닐 때이다.
requires: [real-number-arithmetic, well-ordering-principle, mathematical-induction, finite-sum-of-vectors, matrix, transpose, invertible-matrix, eigenvalues-of-triangular-matrix, diagonalizable, power-of-a-real-number, minor-matrix, determinant, determinant-and-invertibility, determinant-of-product, determinant-of-transpose, finite-product-of-reals]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 3절 Constructing the determinant, 3.3 Determinants of diagonal and triangular matrices, p.81; 3.6 Summary of properties of determinant 의 3, p.84; 3절 연습문제 3.10, p.86; 5절 Cofactor expansion, Theorem 5.1 의 증명, p.90; 7절 연습문제 7.1 f), p.97; 4장 1절 1.7 Eigenvalues of a triangular matrix, pp.103–104, 연습문제 1.4, p.104"
    checked: original
    note: "(3)–(5)는 출처 3.3절(p.81)의 두 문장 'Determinant of a diagonal matrix equal the product of the diagonal entries' 와 'Determinant of a triangular matrix equals to the product of the diagonal entries, det A = a₁,₁a₂,₂ … aₙ,ₙ' 와 같다. 출처는 대각행렬을 단위행렬의 k 번째 열에 a_k 를 곱한 것으로 보아 열의 선형성으로 얻고, 삼각행렬은 '쉽게 알 수 있다'고 한 뒤, 대각성분에 0 이 있으면 가역이 아니어서 양쪽이 0 이고, 없으면 열 더하기로 같은 대각성분의 대각행렬로 바꾼다고 적는다(pp.81–82). 이 항목은 첫째 열 전개로 얻은 (1)을 n 에 대한 귀납으로 되풀이하고, 아래삼각행렬은 전치로 위삼각행렬에 돌린다. 출처의 위삼각·아래삼각의 정의(a_{j,k} = 0 for k < j, for j < k, p.81)는 선형대수 강의의 정의와 같다. (2)의 꼴(첫째 행에서 a₁,₁ 말고는 0 이면 det A = a₁,₁ det A₁,₁)은 출처가 5절 Theorem 5.1 의 증명(p.90)의 첫 특수한 경우로 열 연산과 삼각행렬로 얻는 것과 같은 진술이다. (1)에서 c = 1 인 경우는 출처 연습문제 3.10(p.86)의 블록 삼각행렬 (I ∗; 0 A) 에서 왼쪽 위의 I 가 1 × 1 인 경우와 같은 대상이다. (6)의 '대각성분에 0 이 있으면 가역이 아니다'는 출처가 3.3절에서 열 연산으로 쉽게 확인된다고 적는 사실이다. 출처 3.6절의 3(p.84)과 연습문제 7.1 f)(p.97, 참·거짓)도 (3)(4)를 적는다. 예시 '4 × 4 위삼각행렬의 행렬식'은 출처 4장 1.7(pp.103–104)이 삼각행렬의 행렬식이 대각성분의 곱이라는 것으로 특성다항식을 (a₁,₁ − λ)(a₂,₂ − λ) … (aₙ,ₙ − λ) 로 적는 것, 4장 연습문제 1.4(p.104)가 위삼각·아래삼각 4 × 4 행렬의 특성다항식을 곱으로 남기게 하는 것과 같은 계산을 한 행렬에서 한 것이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 근거 없는 최상급 1건, 행렬식이 0 인 경우에 거짓이던 반례 문장 1건, 메모의 부정 주장 2건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$n$이 자연수라 하자. 위삼각행렬과 아래삼각행렬은 [[eigenvalues-of-triangular-matrix|삼각행렬의 고윳값]]에서, 대각행렬과 $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$은 [[diagonalizable|대각화 가능]]에서 정한 것이다. 위삼각행렬이거나 아래삼각행렬인 행렬을 **삼각행렬**(triangular matrix)이라 한다. 소행렬 $M^{(1,1)}$은 [[minor-matrix|소행렬]]의 것이고, 실수의 열의 곱은 [[finite-product-of-reals|실수의 유한 곱]]의 것이다. $n \times n$ 행렬 $A$에 대하여, $k$번째 항이 대각성분 $a_{k,k}$인 길이 $n$인 실수의 열의 곱을 $a_{1,1} a_{2,2} \cdots a_{n,n}$으로 쓰고 **대각성분의 곱**이라 한다.

1. (첫째 열이 $c\,e_1$) $n \ge 2$이고 $M$이 $n \times n$ 행렬이며 $c$가 실수라 하자. $m_{1,1} = c$이고 $2 \le j \le n$인 모든 $j$에서 $m_{j,1} = 0$이면, 곧 $M$의 첫째 열이 $c\,e_1$이면 $\det M = c \det M^{(1,1)}$이다.
2. (첫째 행이 $c\,e_1$) $n \ge 2$이고 $M$이 $n \times n$ 행렬이며 $c$가 실수라 하자. $m_{1,1} = c$이고 $2 \le k \le n$인 모든 $k$에서 $m_{1,k} = 0$이면 $\det M = c \det M^{(1,1)}$이다.
3. (위삼각행렬) $U$가 $n \times n$ 위삼각행렬이면 $\det U = u_{1,1} u_{2,2} \cdots u_{n,n}$이다.
4. (아래삼각행렬) $L$이 $n \times n$ 아래삼각행렬이면 $\det L = l_{1,1} l_{2,2} \cdots l_{n,n}$이다.
5. (대각행렬) $\lambda_1, \dots, \lambda_n$이 길이 $n$인 실수의 열이면 $\det \operatorname{diag}(\lambda_1, \dots, \lambda_n) = \lambda_1 \lambda_2 \cdots \lambda_n$이다. 특히 실수 $c$에 대하여 $\det(cI_n) = c^n$이고, 이것은 [[determinant-of-product|곱의 행렬식]]의 (4)와 맞는다.
6. (삼각행렬의 가역성) $A$가 $n \times n$ 삼각행렬이면, $\det A \ne 0$인 것은 정확히 모든 $k \in \{1, \dots, n\}$에서 $a_{k,k} \ne 0$일 때이다. 따라서 [[determinant-and-invertibility|행렬식과 가역성]]의 (1)에 의해 $A$가 [[invertible-matrix|가역]]인 것은 정확히 대각성분이 모두 $0$이 아닐 때이다. 이것은 삼각행렬의 고윳값 항목의 (1)(위삼각)과 (3)(아래삼각)의 가역성에 관한 진술과 같은 결론이다.

$n = 1$이면 모든 $1 \times 1$ 행렬은 위삼각행렬이자 아래삼각행렬이자 대각행렬이고, (3)–(5)는 [[determinant|행렬식]]의 (2)의 $\det A = a_{1,1}$이 길이 $1$인 열의 곱 $a_{1,1}$과 같다는 것이다.
:::

:::english
Let $n$ be a natural number. Upper and lower triangular matrices are as in the entry on eigenvalues of triangular matrices, and diagonal matrices and $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$ are as in the entry on diagonalizability. A matrix that is upper triangular or lower triangular is called a **triangular matrix**. The minor matrix $M^{(1,1)}$ is that of the entry on minor matrices, and products of sequences of real numbers are those of finite products of reals. For an $n \times n$ matrix $A$, the product of the sequence of real numbers of length $n$ whose $k$-th term is the diagonal entry $a_{k,k}$ is written $a_{1,1} a_{2,2} \cdots a_{n,n}$ and called the **product of the diagonal entries**.

1. (First column $c\,e_1$) Let $n \ge 2$, $M$ an $n \times n$ matrix and $c$ a real number. If $m_{1,1} = c$ and $m_{j,1} = 0$ for every $j$ with $2 \le j \le n$, that is, if the first column of $M$ is $c\,e_1$, then $\det M = c \det M^{(1,1)}$.
2. (First row $c\,e_1$) Let $n \ge 2$, $M$ an $n \times n$ matrix and $c$ a real number. If $m_{1,1} = c$ and $m_{1,k} = 0$ for every $k$ with $2 \le k \le n$, then $\det M = c \det M^{(1,1)}$.
3. (Upper triangular matrices) If $U$ is an $n \times n$ upper triangular matrix, then $\det U = u_{1,1} u_{2,2} \cdots u_{n,n}$.
4. (Lower triangular matrices) If $L$ is an $n \times n$ lower triangular matrix, then $\det L = l_{1,1} l_{2,2} \cdots l_{n,n}$.
5. (Diagonal matrices) If $\lambda_1, \dots, \lambda_n$ is a sequence of real numbers of length $n$, then $\det \operatorname{diag}(\lambda_1, \dots, \lambda_n) = \lambda_1 \lambda_2 \cdots \lambda_n$. In particular, for a real number $c$, $\det(cI_n) = c^n$, which agrees with (4) of the entry on the determinant of a product.
6. (Invertibility of triangular matrices) If $A$ is an $n \times n$ triangular matrix, then $\det A \ne 0$ exactly when $a_{k,k} \ne 0$ for every $k \in \{1, \dots, n\}$. Hence, by (1) of the entry on determinant and invertibility, $A$ is invertible exactly when all its diagonal entries are nonzero. This is the same conclusion as the statements about invertibility in (1) (upper triangular) and (3) (lower triangular) of the entry on eigenvalues of triangular matrices.

If $n = 1$, every $1 \times 1$ matrix is upper triangular, lower triangular and diagonal, and (3)–(5) say that $\det A = a_{1,1}$ from (2) of the entry on the determinant equals the product $a_{1,1}$ of a sequence of length $1$.
:::

## 직관

첫째 열 전개에서 첫째 열의 성분이 $(1, 1)$ 자리 말고 모두 $0$이면, 합의 항이 하나만 남아 $\det M = m_{1,1} \det M^{(1,1)}$이 됩니다. 위삼각행렬은 첫째 열이 이런 꼴이고, 첫째 행과 첫째 열을 지운 $(1, 1)$ 소행렬도 다시 위삼각행렬입니다. 그래서 같은 일을 대각선을 따라 한 칸씩 내려가며 되풀이하면 대각성분이 하나씩 곱해져 나옵니다. 양파 껍질을 한 겹씩 벗기면서 겹마다 수 하나를 적어 두는 것과 같습니다. 겹이 $(1, 1)$ 소행렬을 남기는 한 번의 전개이고, 적어 두는 수가 대각성분입니다.

아래삼각행렬은 전치하면 위삼각행렬이 되고 대각성분은 그대로이며, 전치해도 행렬식이 같으므로 같은 식을 얻습니다. 대각행렬은 위삼각행렬이기도 합니다.

곱이 $0$인 것은 정확히 어떤 인자가 $0$일 때이므로, 삼각행렬의 행렬식은 대각성분 가운데 $0$이 하나라도 있으면 $0$이고 없으면 $0$이 아닙니다. 삼각행렬이 아니면 대각성분만으로 행렬식이 정해지지 않을 수 있습니다.

## 증명

:::idea
(1)은 [[determinant|행렬식]]의 (3)의 첫째 열 전개에서 $j \ge 2$인 항이 모두 $0$이 되는 것이고, (2)는 전치로 (1)에 돌린다. 위삼각행렬은 $n$에 대한 귀납법으로 (1)과 소행렬을 되풀이한다.
:::

:::hint
위삼각행렬 $U$의 $(1, 1)$ 소행렬의 $(i, l)$ 성분은 $u_{i+1, l+1}$입니다. $i > l$이면 이 성분은 무엇입니까?
:::

:::hint
아래삼각행렬 $L$에 대해서는 $L^T$를 생각하고 [[determinant-of-transpose|전치행렬의 행렬식]]의 (1)을 쓰세요.
:::

:::proof
행렬식 항목의 번호는 "행렬식의 (n)"으로, [[finite-product-of-reals|실수의 유한 곱]]의 번호는 "곱의 성질 (n)"으로 인용한다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 번호로 인용한다.

**(1)의 증명.** 행렬식의 (3)에 의해 $\det M$은 $j$번째 항이 $(-1)^{j+1} m_{j,1} \det M^{(j,1)}$인 길이 $n$인 실수의 열의 합이다. $j \ge 2$이면 $m_{j,1} = 0$이므로 (K9)에 의해 이 항은 $0$이다. $n \ge 2$이므로 이 열은 길이 $(n - 1) + 1$인 열이고, [[finite-sum-of-vectors|벡터의 유한 합]]의 (H7)을 첫째 항($k = 1$)에 쓰면 합은 첫째 항 $(-1)^{2} m_{1,1} \det M^{(1,1)}$이다. [[power-of-a-real-number|실수의 거듭제곱]]의 (5)에 의해 $(-1)^2 = 1$이므로 (K4), (K1)에 의해 $\det M = c \det M^{(1,1)}$이다.

**(2)의 증명.** [[transpose|전치행렬]]의 정의에 의해 $(M^T)_{j,1} = m_{1,j}$이므로 $M^T$의 $(1, 1)$ 성분은 $c$이고 $j \ge 2$이면 $(M^T)_{j,1} = 0$이다. (1)에 의해 $\det M^T = c \det (M^T)^{(1,1)}$이다. 소행렬의 (6)에 의해 $(M^T)^{(1,1)} = (M^{(1,1)})^T$이고, [[determinant-of-transpose|전치행렬의 행렬식]]의 (1)을 $M$과 $M^{(1,1)}$에 쓰면 $\det M = \det M^T = c \det (M^{(1,1)})^T = c \det M^{(1,1)}$이다.

**(3)의 증명.** 자연수 $n$에 대하여 "모든 $n \times n$ 위삼각행렬 $U$에서 $\det U = u_{1,1} \cdots u_{n,n}$"을 $S_n$이라 하고 [[mathematical-induction|수학적 귀납법]]을 쓴다.

- 기초 단계: $n = 1$이면 행렬식의 (2)에 의해 $\det U = u_{1,1}$이고, 곱의 성질 (1)에 의해 길이 $1$인 열 $u_{1,1}$의 곱도 $u_{1,1}$이다.
- 귀납 단계: $S_n$이 참이라 하고 $U$가 $(n + 1) \times (n + 1)$ 위삼각행렬이라 하자. $n + 1 \ge 2$이다. $2 \le j \le n + 1$이면 $j > 1$이므로 위삼각행렬의 정의에 의해 $u_{j,1} = 0$이다. (1)에 의해 $\det U = u_{1,1} \det U^{(1,1)}$이다. 소행렬의 (2)에 의해 $i$, $l \in \{1, \dots, n\}$에서 $(U^{(1,1)})_{i,l} = u_{i+1,l+1}$이다. $i > l$이면 [[well-ordering-principle|정렬 원리]] 항목의 (Z7)에 의해 $i + 1 > l + 1$이므로 이 성분은 $0$이다. 따라서 $U^{(1,1)}$은 $n \times n$ 위삼각행렬이고, 그 $(i, i)$ 성분은 $u_{i+1,i+1}$이다. $S_n$에 의해 $\det U^{(1,1)}$은 $i$번째 항이 $u_{i+1,i+1}$인 길이 $n$인 열의 곱이다. 이 열은 $k$번째 항이 $u_{k,k}$인 길이 $n + 1$인 열에서 첫째 항을 지운 열이므로, 곱의 성질 (6)을 $k = 1$로 쓰면 $u_{1,1} \cdots u_{n+1,n+1} = (\det U^{(1,1)})\, u_{1,1}$이다. (K1)에 의해 $\det U = u_{1,1} \det U^{(1,1)} = u_{1,1} \cdots u_{n+1,n+1}$이다.

따라서 모든 자연수 $n$에서 $S_n$이 참이다.

**(4)의 증명.** 삼각행렬의 고윳값 항목의 (3)에 의해 $L^T$는 위삼각행렬이고 대각성분이 $L$과 같다. 따라서 $k$번째 항이 $(L^T)_{k,k}$인 열과 $k$번째 항이 $l_{k,k}$인 열은 같은 열이다. (3)과 전치행렬의 행렬식의 (1)에 의해 $\det L = \det L^T = l_{1,1} \cdots l_{n,n}$이다.

**(5)의 증명.** $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$이라 하자. 대각화 가능 항목의 정의에 의해 $j \ne k$이면 $d_{j,k} = 0$이고, 그 항목의 (1)에 의해 $d_{k,k} = \lambda_k$이다. $j > k$이면 $j \ne k$이므로 $d_{j,k} = 0$이고, $D$는 위삼각행렬이다. (3)에 의해 $\det D = \lambda_1 \cdots \lambda_n$이다.

실수 $c$에 대하여 [[matrix|행렬]]의 (1)과 (6)에 의해 $cI_n$의 $(j, k)$ 성분은 $j = k$이면 $c \cdot 1 = c$이고 $j \ne k$이면 $c \cdot 0 = 0$이다((K4), (K9)). 행렬의 (2)에 의해 $cI_n = \operatorname{diag}(c, \dots, c)$(모든 항이 $c$인 길이 $n$인 열)이고, 앞 문단과 곱의 성질 (4)에 의해 $\det(cI_n) = c^n$이다. [[determinant-of-product|곱의 행렬식]]의 (4)도 $\det(cI_n) = c^n$을 준다.

**(6)의 증명.** (3) 또는 (4)에 의해 $\det A = a_{1,1} \cdots a_{n,n}$이다. 곱의 성질 (5)에 의해 이 곱이 $0$인 것은 정확히 어떤 $k$에서 $a_{k,k} = 0$일 때이므로, 양쪽을 부정하면 $\det A \ne 0$인 것은 정확히 모든 $k$에서 $a_{k,k} \ne 0$일 때이다. [[determinant-and-invertibility|행렬식과 가역성]]의 (1)과 이으면 가역성에 관한 문장이 나오고, 이것은 [[eigenvalues-of-triangular-matrix|삼각행렬의 고윳값]]의 (1)과 (3)이 위삼각행렬과 아래삼각행렬에 대해 말하는 것과 같다. $\blacksquare$
:::

## 예시와 반례

:::example[4 × 4 위삼각행렬의 행렬식]
$$
U = \begin{pmatrix} 3 & 1 & 0 & 2 \\ 0 & -2 & 5 & 1 \\ 0 & 0 & 1 & 7 \\ 0 & 0 & 0 & 4 \end{pmatrix}
$$

이면 (3)에 의해 $\det U = 3 \cdot (-2) \cdot 1 \cdot 4 = -24$입니다. (1)을 한 번 쓰면 $\det U = 3 \det U^{(1,1)}$이고 $U^{(1,1)}$은 대각성분이 $-2$, $1$, $4$인 $3 \times 3$ 위삼각행렬이므로 $\det U^{(1,1)} = -8$입니다. 대각성분이 모두 $0$이 아니므로 (6)에 의해 $U$는 가역입니다.
:::

:::example[삼각행렬이 아니어도 첫째 열이 c e₁ 인 3 × 3 행렬]
$$
M = \begin{pmatrix} 2 & 1 & 4 \\ 0 & 3 & -1 \\ 0 & 5 & 2 \end{pmatrix}
$$

은 첫째 열이 $2e_1$이지만 $(3, 2)$ 성분이 $5$여서 삼각행렬이 아닙니다. 그래도 (1)에 의해 $\det M = 2 \det \begin{pmatrix} 3 & -1 \\ 5 & 2 \end{pmatrix} = 2 \cdot (6 + 5) = 22$입니다. [[determinant|행렬식]]의 (4)로 계산해도 $2 \cdot (3 \cdot 2 - 5 \cdot (-1)) - 0 + 0 = 22$입니다.
:::

:::counterexample[대각성분의 곱이 행렬식과 다른 2 × 2 행렬]
$A = \begin{pmatrix} 2 & 3 \\ 1 & 5 \end{pmatrix}$은 위삼각행렬도 아래삼각행렬도 아닙니다. 대각성분의 곱은 $2 \cdot 5 = 10$이지만 [[determinant|행렬식]]의 (4)에 의해 $\det A = 10 - 3 = 7$입니다. (3)과 (4)는 삼각행렬에 대한 것이고, 삼각행렬이 아니면 대각성분 밖의 성분도 행렬식에 들어올 수 있습니다.
:::

## 확인 질문

:::check[$L = \begin{pmatrix} -1 & 0 & 0 \\ 4 & 2 & 0 \\ 7 & -3 & 5 \end{pmatrix}$의 행렬식은 무엇인가?]
$L$은 아래삼각행렬이므로 (4)에 의해 $\det L = (-1) \cdot 2 \cdot 5 = -10$입니다.
:::

:::check[실수 $c$가 어떤 값일 때 $\begin{pmatrix} c & 1 & 2 \\ 0 & c - 1 & 3 \\ 0 & 0 & 2 \end{pmatrix}$이 가역이 아닌가?]
위삼각행렬이므로 (6)에 의해 가역이 아닌 것은 정확히 대각성분 $c$, $c - 1$, $2$ 가운데 $0$인 것이 있을 때입니다. $2 \ne 0$이므로 $c = 0$이거나 $c - 1 = 0$, 곧 $c = 0$이거나 $c = 1$일 때입니다.
:::
