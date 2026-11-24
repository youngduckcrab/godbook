---
title: 고윳값과 특성다항식의 근
title_en: Eigenvalues as Roots of the Characteristic Polynomial
aliases: [고윳값은 특성다항식의 근, 특성방정식, 선형사상의 특성다항식, eigenvalues and characteristic polynomial, characteristic polynomial of a linear map]
kind: theorem
field: linear-algebra
msc: ["15A18"]
level: undergrad
summary: 실수 λ 가 n × n 행렬 A 의 고윳값인 것은 정확히 p_A(λ) = 0 일 때이다. 따라서 서로 다른 고윳값의 열의 길이는 n 이하이고, 0 이 고윳값인 것은 det A = 0 일 때이다. 닮은 행렬의 특성다항식은 같으므로 차원이 1 이상인 유한차원 공간의 선형사상 T 의 특성다항식 p_T 를 기저에 관한 행렬로 정의하고, T 의 고윳값도 p_T 의 근으로 찾는다.
requires: [function, real-number-arithmetic, vector-space, standard-basis, dimension, linear-map, isomorphism, matrix, matrix-vector-product, matrix-of-a-linear-map, invertible-matrix, matrix-in-bases, change-of-basis-and-similarity, eigenvalue-and-eigenvector, eigenvectors-of-distinct-eigenvalues, eigenvalue-examples, determinant, determinant-and-invertibility, similarity-invariants, determinant-and-trace-of-linear-map, power-of-a-real-number, polynomial-function, product-of-polynomial-functions, roots-of-polynomial-function, coefficients-of-polynomial-function, characteristic-polynomial]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "4장 1절 Main definitions, 1.2 Finding eigenvalues: characteristic polynomials, p.100; 1.3 Finding characteristic polynomial and eigenvalues of an abstract operator, p.101; 1.5 Multiplicities of eigenvalues, p.102; 4장 1절 연습문제 1.1 c), e), 1.2, p.104; 4장 2절 Diagonalization, 2.7.3 A non-diagonalizable matrix, p.113, 연습문제 2.4, p.114"
    checked: original
    note: "출처 4장 1.2(p.100)는 λ 가 고윳값인 것은 정확히 A − λI 가 가역이 아닐 때이고, 정사각행렬이 가역이 아닌 것은 정확히 행렬식이 0 일 때이므로, λ ∈ σ(A) 인 것은 정확히 det(A − λI) = 0 일 때라고 적는다. (1)은 이 논증을 이 사이트의 번호로 적은 것이다. 출처 1.3(p.101)은 A = SBS⁻¹ 에서 A − λI = S(B − λI)S⁻¹ 를 계산해 닮은 행렬의 특성다항식이 같다고 적고, 한 선형사상의 두 기저에 관한 행렬이 닮았으므로 연산자의 특성다항식을 아무 기저에서의 행렬의 특성다항식으로 정의할 수 있다고 적는다. (4)와 (5)는 이와 같은 경로이고 이 사이트의 닮음은 A = Q⁻¹BQ 로 적는다. 출처는 같은 곳에서 추상 공간의 연산자의 고윳값을 아무 기저에서의 행렬의 고윳값으로 구하라고 적으며, (6)의 둘째 문장은 이것을 선형대수 change-of-basis-and-similarity (6)과 (1)로 증명한 것이다. (2)와 관련해 출처 1.5(p.102)는 n 차 다항식이 복소수 범위에서 중복도를 세어 정확히 n 개의 근을 갖는다고 적고, 이 사이트는 실수의 서로 다른 근의 열의 길이가 n 이하라는 것만 쓴다. (3)은 (1)을 λ = 0 에 쓰고 특성다항식의 상수항 det A 로 읽은 것이다. 출처 4장 연습문제 1.1 은 참·거짓 물음으로 c) 실고윳값이 없는 실정사각행렬이 있는지, e) 닮은 행렬의 고윳값이 늘 같은지를 묻는다. 예시 '근으로 고윳값을 모두 찾은 예'의 A 는 출처 4장 1절 연습문제 1.2(p.104)의 첫 행렬 (4 −5; 2 −3) 과 특성다항식(x² − x − 2)과 고윳값 2, −1 이 같다. 반례 '서로 다른 고윳값이 n 보다 적은 예'의 행렬 N 과 그 특성다항식 (1 − λ)² 은 출처 4장 2.7.3(p.113)의 것과 같고, 선형대수 eigenvalue-examples 의 (2)와 같은 행렬이다. 확인 질문 '$1$과 $2$가 모두 고윳값인 $2 \\times 2$ 행렬 $A$의 특성다항식은 하나로 정해지는가?' 는 출처 4장 2절 연습문제 2.4(p.114)가 고윳값 1, 3 과 그 고유벡터를 정해 행렬을 만들고 그 행렬이 하나뿐인지 묻는 것과 대상이 닮았다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 상수나 영함수의 경우에 거짓이던 직관 4곳, 뒤 항목이 붙으면 거짓이 될 단원 글 1건, 메모의 틀린 번호 1건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$n$이 자연수이고 $A$가 $n \times n$ [[matrix|행렬]]이라 하자. $p_A$는 [[characteristic-polynomial|특성다항식]]이고, 고윳값과 $A - \lambda I_n$은 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 것이며, 근과 "서로 다른 실수의 열"은 [[roots-of-polynomial-function|다항함수의 근의 개수]]의 것이다.

1. (고윳값과 근) 실수 $\lambda$가 $A$의 고윳값인 것은 정확히 $p_A(\lambda) = 0$일 때, 곧 $\lambda$가 $p_A$의 근일 때이다.
2. (고윳값의 개수) $\lambda_1, \dots, \lambda_r$이 서로 다른 실수의 열이고 모든 항이 $A$의 고윳값이면 $r \le n$이다.
3. (고윳값 $0$) $0$이 $A$의 고윳값인 것은 정확히 $\det A = 0$일 때이고, 정확히 $A$가 [[invertible-matrix|가역]]이 아닐 때이다.
4. (닮은 행렬) $B$가 $n \times n$ 행렬이고 $A$와 $B$가 [[change-of-basis-and-similarity|닮았으면]] $p_A = p_B$이다.

**선형사상의 특성다항식.** $V$가 유한차원 [[vector-space|벡터공간]]이고 $\dim V = n \ge 1$이며 $T : V \to V$가 [[linear-map|선형사상]]이라 하자. [[dimension|유한차원과 차원]]의 (2)에 의해 $V$의 모든 기저는 길이가 $n$이고, $V$의 기저 $\mathcal{B}$에 대하여 $[T]_{\mathcal{B}}$는 [[matrix-in-bases|기저에 관한 선형사상의 행렬]]의 $n \times n$ 행렬이다.

5. (기저와 무관) $\mathcal{A}$와 $\mathcal{B}$가 $V$의 기저이면 $p_{[T]_{\mathcal{A}}} = p_{[T]_{\mathcal{B}}}$이다.

   $V$에는 기저가 있으므로(차원의 (1)), (5)에 의해 함수 $p_{[T]_{\mathcal{B}}}$는 $V$의 기저 $\mathcal{B}$를 어떻게 잡아도 같은 하나의 함수이다. 이 함수를 $T$의 **특성다항식**(characteristic polynomial)이라 하고 $p_T$로 쓴다. 곧 $V$의 모든 기저 $\mathcal{B}$에서 $p_T = p_{[T]_{\mathcal{B}}}$이다. $\dim V = 0$인 공간의 선형사상에는 특성다항식을 정의하지 않는다. $T - x\, i_V$는 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]에서 정한 차이고, $\det T$는 [[determinant-and-trace-of-linear-map|선형사상의 행렬식과 대각합]]의 것이다.
6. (선형사상의 경우) 모든 실수 $x$에서 $p_T(x) = \det(T - x\, i_V)$이다. $p_T \in \mathcal{P}_n$이고 $p_T$는 영함수가 아니며, 차수는 $n$, 최고차계수는 $(-1)^n$, 상수항은 $\det T$이다($\mathcal{P}_n$과 계수는 [[polynomial-function|다항함수]]와 [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 것). 실수 $\lambda$가 $T$의 고윳값인 것은 정확히 $p_T(\lambda) = 0$일 때이다. $0$이 $T$의 고윳값인 것은 정확히 $\det T = 0$일 때이고, 정확히 $T$가 [[isomorphism|동형사상]]이 아닐 때이다. 모든 항이 $T$의 고윳값이고 서로 다른 실수의 열의 길이는 $n$ 이하이다.
7. ($\mathbb{R}^n$의 경우) $T_A : \mathbb{R}^n \to \mathbb{R}^n$이 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)의 선형사상이면 $p_{T_A} = p_A$이다.
:::

:::english
Let $n$ be a natural number and let $A$ be an $n \times n$ matrix. $p_A$ is the characteristic polynomial; eigenvalues and $A - \lambda I_n$ are those of the entry on eigenvalues and eigenvectors; and roots and "a sequence of distinct real numbers" are those of the entry on the number of roots of a polynomial function.

1. (Eigenvalues and roots) A real number $\lambda$ is an eigenvalue of $A$ exactly when $p_A(\lambda) = 0$, that is, exactly when $\lambda$ is a root of $p_A$.
2. (Number of eigenvalues) If $\lambda_1, \dots, \lambda_r$ is a sequence of distinct real numbers all of whose terms are eigenvalues of $A$, then $r \le n$.
3. (The eigenvalue $0$) $0$ is an eigenvalue of $A$ exactly when $\det A = 0$, and exactly when $A$ is not invertible.
4. (Similar matrices) If $B$ is an $n \times n$ matrix and $A$ and $B$ are similar, then $p_A = p_B$.

**The characteristic polynomial of a linear map.** Let $V$ be a finite-dimensional vector space with $\dim V = n \ge 1$, and let $T : V \to V$ be a linear map. By item (2) of the entry on finite dimension and dimension, every basis of $V$ has length $n$, and for a basis $\mathcal{B}$ of $V$, $[T]_{\mathcal{B}}$ is the $n \times n$ matrix of the entry on the matrix of a linear map with respect to bases.

5. (Independence of the basis) If $\mathcal{A}$ and $\mathcal{B}$ are bases of $V$, then $p_{[T]_{\mathcal{A}}} = p_{[T]_{\mathcal{B}}}$.

   Since $V$ has a basis (item (1) on dimension), by (5) the function $p_{[T]_{\mathcal{B}}}$ is one and the same function however the basis $\mathcal{B}$ of $V$ is chosen. This function is called the **characteristic polynomial** of $T$ and is denoted $p_T$; thus $p_T = p_{[T]_{\mathcal{B}}}$ for every basis $\mathcal{B}$ of $V$. No characteristic polynomial is defined for linear maps on a space with $\dim V = 0$. $T - x\, i_V$ is the difference defined in the entry on eigenvalues and eigenvectors, and $\det T$ is that of the entry on the determinant and trace of a linear map.
6. (Linear maps) For every real number $x$ we have $p_T(x) = \det(T - x\, i_V)$. We have $p_T \in \mathcal{P}_n$, $p_T$ is not the zero function, its degree is $n$, its leading coefficient is $(-1)^n$, and its constant term is $\det T$. A real number $\lambda$ is an eigenvalue of $T$ exactly when $p_T(\lambda) = 0$. $0$ is an eigenvalue of $T$ exactly when $\det T = 0$, and exactly when $T$ is not an isomorphism. A sequence of distinct real numbers all of whose terms are eigenvalues of $T$ has length at most $n$.
7. (The case of $\mathbb{R}^n$) If $T_A : \mathbb{R}^n \to \mathbb{R}^n$ is the linear map of item (2) of the entry on the product of a matrix and a vector, then $p_{T_A} = p_A$.
:::

## 직관

고윳값의 정의는 "영벡터가 아닌 $x$로 $Ax = \lambda x$를 만족하는 것이 있다"는 존재 문장입니다. 이것을 직접 따지려면 $\lambda$마다 연립방정식을 풀어야 합니다. (1)은 이 존재 문장을 수 하나의 계산, 곧 $p_A(\lambda)$가 $0$인지로 바꿉니다. 그래서 고윳값을 찾는 일은 다항함수 $p_A$의 근을 찾는 일이 됩니다.

자물쇠의 번호를 하나씩 돌려 보는 대신, 번호마다 "열린다/안 열린다"를 알려 주는 표가 있는 것과 비슷합니다. 그 표가 특성다항식이고 열리는 번호가 근입니다. 비유와 다른 점은, 표가 알려 주는 것은 번호(고윳값)뿐이고 어떻게 여는지(고유벡터)는 $A - \lambda I_n$의 핵을 따로 구해야 안다는 것입니다.

(2)는 선형대수의 [[eigenvectors-of-distinct-eigenvalues|서로 다른 고윳값의 고유벡터]]의 (4)를 $T_A : \mathbb{R}^n \to \mathbb{R}^n$($\dim \mathbb{R}^n = n$)에 쓴 것과 같은 결론입니다. 그 항목은 서로 다른 고윳값에 속하는 고유벡터들이 일차독립이라는 것으로 보였고, 이 항목은 영함수가 아닌 $\mathcal{P}_n$의 원소의 서로 다른 근이 $n$개를 넘지 않는다는 것으로 보입니다. (2)는 상계일 뿐이어서, 아래 반례처럼 고윳값이 $n$개보다 적을 수 있고, 선형대수의 [[eigenvalue-examples|고윳값의 예]]의 (1)의 $J$처럼 하나도 없을 수도 있습니다. 그때 (1)에 의해 $p_J$에는 근이 없습니다.

## 증명

:::idea
고윳값은 $A - \lambda I_n$이 가역이 아닌 것과 같고, 가역이 아닌 것은 행렬식이 $0$인 것과 같다. 선형사상은 기저에 관한 행렬로 옮기고, 기저를 바꾼 행렬은 닮았으므로 특성다항식이 같다.
:::

:::hint
(4)는 닮은 두 행렬에서 대각선에서 같은 수를 뺀 두 행렬도 닮았다는 것에서 나온다. 그러면 모든 $x$에서 두 함수의 값은 어떻게 되는가?
:::

:::hint
(6)의 고윳값에 관한 문장은, 선형사상의 고윳값과 그 기저에 관한 행렬의 고윳값이 같다는 선형대수의 진술과 (1)을 잇는다.
:::

:::proof
두 함수는 모든 $x$에서 값이 같으면 같다([[function|함수]]의 같음).

**(1)의 증명.** [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (4)에 의해 $\lambda$가 $A$의 고윳값인 것은 정확히 $A - \lambda I_n$이 가역이 아닐 때이다. [[determinant-and-invertibility|행렬식과 가역성]]의 (1)에 의해 $n \times n$ 행렬 $A - \lambda I_n$이 가역이 아닌 것은 정확히 $\det(A - \lambda I_n) = 0$일 때이고, [[characteristic-polynomial|특성다항식]]의 정의에 의해 $\det(A - \lambda I_n) = p_A(\lambda)$이다(두 항목의 $A - \lambda I_n$은 같은 차 $A + (-(\lambda I_n))$이다). 근의 정의에 의해 $p_A(\lambda) = 0$인 것은 정확히 $\lambda$가 $p_A$의 근일 때이다.

**(2)의 증명.** (1)에 의해 모든 $\lambda_k$는 $p_A$의 근이다. 특성다항식의 (1)에 의해 $p_A \in \mathcal{P}_n$이고 $p_A \ne o$이므로, [[roots-of-polynomial-function|다항함수의 근의 개수]]의 (1)에 의해 $r \le n$이다.

**(3)의 증명.** (1)에 의해 $0$이 고윳값인 것은 정확히 $p_A(0) = 0$일 때이고, 특성다항식의 (2)에 의해 $p_A(0) = \det A$이다. 행렬식과 가역성의 (1)에 의해 $\det A = 0$인 것은 정확히 $A$가 가역이 아닐 때이다.

**(4)의 증명.** $A$와 $B$가 닮았으므로 [[similarity-invariants|닮은 행렬의 행렬식과 대각합]]의 (3)에 의해 모든 실수 $x$에서 $\det(A - xI_n) = \det(B - xI_n)$, 곧 $p_A(x) = p_B(x)$이다. 따라서 $p_A = p_B$이다.

**(5)의 증명.** $\mathcal{A}$와 $\mathcal{B}$는 길이 $n$인 $V$의 기저이다. $Q = [i_V]_{\mathcal{B}\mathcal{A}}$라 하면 [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 (2)에 의해 $Q$는 가역이고, (3)에 의해 $[T]_{\mathcal{A}} = Q^{-1}[T]_{\mathcal{B}}Q$이다. 닮음의 정의에 의해 $[T]_{\mathcal{A}}$와 $[T]_{\mathcal{B}}$는 닮았고, (4)에 의해 $p_{[T]_{\mathcal{A}}} = p_{[T]_{\mathcal{B}}}$이다.

**(6)의 증명.** $\mathcal{B}$를 $V$의 기저라 하고 $M = [T]_{\mathcal{B}}$로 두면 $p_T = p_M$이다. 실수 $x$에서 [[determinant-and-trace-of-linear-map|선형사상의 행렬식과 대각합]]의 (5)에 의해 $\det(T - x\, i_V) = \det(M - xI_n) = p_M(x) = p_T(x)$이다. 특성다항식의 (1)과 (2)를 $M$에 쓰면 $p_T = p_M \in \mathcal{P}_n$, $p_T \ne o$, $\deg p_T = n$, 최고차계수 $(-1)^n$이고, 상수항은 $\det M$이며 이것은 $\det T$의 정의에 의해 $\det T$이다.

기저 변환과 닮은 행렬의 (6)에 의해 $\lambda$가 $T$의 고윳값인 것은 정확히 $\lambda$가 $M$의 고윳값일 때이고, (1)에 의해 이것은 정확히 $p_M(\lambda) = 0$, 곧 $p_T(\lambda) = 0$일 때이다. 이것을 $\lambda = 0$에 쓰면, 상수항에 관한 앞 문단과 [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 (2)의 (iii)(상수항은 $p_T(0)$)에 의해 $0$이 고윳값인 것은 정확히 $\det T = 0$일 때이다. 선형사상의 행렬식과 대각합의 (4)에 의해 $\det T = 0$인 것은 정확히 $T$가 동형사상이 아닐 때이다. 마지막으로 모든 항이 $T$의 고윳값이고 서로 다른 열은 모든 항이 $M$의 고윳값이므로, (2)를 $M$에 쓰면 그 길이는 $n$ 이하이다.

**(7)의 증명.** $\mathcal{E}$를 $\mathbb{R}^n$의 [[standard-basis|표준기저]]라 하자(표준기저의 (2)). [[matrix-in-bases|기저에 관한 선형사상의 행렬]]의 (7)에 의해 $[T_A]_{\mathcal{E}} = [T_A]$이고, [[matrix-of-a-linear-map|선형사상의 행렬]]의 (2)에 의해 $[T_A] = A$이다. [[dimension|유한차원과 차원]]의 (4)에 의해 $\dim \mathbb{R}^n = n \ge 1$이므로 $p_{T_A}$가 정의되고, $p_{T_A} = p_{[T_A]_{\mathcal{E}}} = p_A$이다. $\blacksquare$
:::

## 예시와 반례

:::example[근으로 고윳값을 모두 찾은 예]
$$
A = \begin{pmatrix} 0 & 2 \\ 1 & 1 \end{pmatrix}
$$

이라 합시다. 실수 $x$에서 $A - xI_2 = \begin{pmatrix} -x & 2 \\ 1 & 1 - x \end{pmatrix}$이므로 [[determinant|행렬식]]의 (4)에 의해

$$
\begin{aligned}
p_A(x) &= (-x)(1 - x) - 1 \cdot 2 \\
&= x^2 - x - 2 \\
&= (x - 2)(x + 1)
\end{aligned}
$$

입니다. [[real-number-arithmetic|(K10)]]과 (K9)에 의해 $(\lambda - 2)(\lambda + 1) = 0$인 것은 정확히 $\lambda - 2 = 0$이거나 $\lambda + 1 = 0$일 때, 곧 ((K12)의 (v)에 의해) $\lambda = 2$이거나 $\lambda = -1$일 때이므로, (1)에 의해 $A$의 고윳값은 정확히 $2$와 $-1$입니다. 고유벡터도 확인해 봅시다. $v = (1, 1)$, $w = (2, -1) \in \mathbb{R}^2$라 하면 [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)에 의해 $Av = (0 + 2, 1 + 1) = 2v$이고 $Aw = (0 - 2, 2 - 1) = (-1)w$입니다. 서로 다른 고윳값이 둘이므로 이것은 (2)의 상계 $n = 2$에 닿습니다.
:::

:::counterexample[서로 다른 고윳값이 n 보다 적은 예]
(2)는 상계일 뿐입니다.

$$
N = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}
$$

이면 실수 $x$에서 $N - xI_2 = \begin{pmatrix} 1 - x & 1 \\ 0 & 1 - x \end{pmatrix}$이고, [[determinant|행렬식]]의 (4)에 의해 $p_N(x) = (1 - x)(1 - x) - 0 \cdot 1 = (1 - x)(1 - x)$입니다. [[real-number-arithmetic|(K10)]]에 의해 $p_N(\lambda) = 0$이면 $1 - \lambda = 0$, 곧 $\lambda = 1$이고((K12)의 (v)), 거꾸로 $p_N(1) = 0$입니다. 따라서 (1)에 의해 $N$의 고윳값은 $1$ 하나뿐이고, 서로 다른 고윳값의 열의 길이는 많아야 $1$로 $n = 2$보다 작습니다. 이것은 [[eigenvalue-examples|고윳값의 예]]의 (2)와 맞습니다.
:::

## 확인 질문

:::check[$A$가 가역인 $n \times n$ 행렬이면 $p_A$의 상수항은 $0$일 수 있는가?]
없습니다. [[characteristic-polynomial|특성다항식]]의 (2)에 의해 상수항은 $\det A$이고, [[determinant-and-invertibility|행렬식과 가역성]]의 (1)에 의해 가역인 $A$는 $\det A \ne 0$입니다. 같은 이유로 (3)에 의해 $0$은 $A$의 고윳값이 아닙니다.
:::

:::check[$1$과 $2$가 모두 고윳값인 $2 \times 2$ 행렬 $A$의 특성다항식은 하나로 정해지는가?]
정해집니다. $p_A = (t - 1)(t - 2)$, 곧 모든 $x$에서 $p_A(x) = (x - 1)(x - 2)$입니다. $g = p_A - (t - 1)(t - 2)$로 둡시다. [[characteristic-polynomial|특성다항식]]의 (1)에 의해 $p_A \in \mathcal{P}_2$이고 $t^2$의 계수는 $(-1)^2 = 1$이며, [[product-of-polynomial-functions|다항함수의 곱]]의 (5)와 [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 (8)에 의해 $(t - 1)(t - 2) \in \mathcal{P}_2$이고 $t^2$의 계수는 $1$입니다. [[polynomial-function|다항함수]]의 (1)과 계수의 (3)의 (i)에 의해 $g \in \mathcal{P}_2$이고 $t^2$의 계수는 $0$이므로, $g = o$이거나 $\deg g \le 1$이고(계수의 (4)), 어느 쪽이든 $g \in \mathcal{P}_1$입니다(계수의 (4)의 첫째 줄). (1)에 의해 $p_A(1) = p_A(2) = 0$이므로 $g(1) = g(2) = 0$이고, $1$, $2$는 서로 다른 길이 $2$인 열이므로 [[roots-of-polynomial-function|다항함수의 근의 개수]]의 (2)를 $n = 1$에 쓰면 $g = o$입니다.
:::
