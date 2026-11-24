---
title: 특성다항식
title_en: Characteristic Polynomial
aliases: [고유다항식, 특성 다항식, characteristic polynomial, p_A]
kind: definition
field: linear-algebra
msc: ["15A18"]
level: undergrad
summary: n × n 행렬 A 의 특성다항식 p_A 는 x 를 det(A − xIₙ) 로 보내는 함수 ℝ → ℝ 이다. p_A 는 𝒫ₙ 에 드는 다항함수이고 차수는 n, 최고차계수는 (−1)ⁿ, 상수항은 det A 이며, 전치행렬의 특성다항식은 같다.
requires: [function, real-number-arithmetic, vector-space, vector-space-basic-properties, real-function-space, matrix, transpose, eigenvalue-and-eigenvector, determinant, determinant-of-product, determinant-of-transpose, power-of-a-real-number, polynomial-function, coefficients-of-polynomial-function, determinant-of-matrix-pencil]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "4장 1절 Main definitions, 1.2 Finding eigenvalues: characteristic polynomials, p.100; 1.5 Multiplicities of eigenvalues, p.102; 4장 1절 연습문제 1.10, p.105; 4장 2절 연습문제 2.1 a), p.114; 9장 1절 Cayley–Hamilton Theorem 의 A “standard” proof, p.255; 9장 3절 Theorem 3.4 의 증명, p.262"
    checked: original
    note: "출처 4장 1.2(p.100)는 n × n 행렬 A 에 대하여 det(A − λI) 가 변수 λ 의 n 차 다항식이라 적고 이 다항식을 A 의 characteristic polynomial 이라 부른다. 다항식이라는 것과 차수가 n 이라는 것은 증명하지 않는다. 출처는 λ 를 변수와 고윳값 양쪽에 쓰고, 1.5(p.102)에서는 p(z) = det(A − zI) 로 적는다. 이 사이트는 특성다항식을 x 에서의 값이 det(A − xIₙ) 인 실함수로 정의하고, 함수의 이름에는 t, 값의 변수에는 x 를 써서 λ 는 고윳값에만 남긴다. (1)은 determinant-of-matrix-pencil 로 증명했다. 출처는 최고차계수 (−1)ⁿ 을 명제로 적지 않는다(검색어 leading coefficient, highest, monic 0건, coefficient of 1건(연습문제 1.11), (−1)n 2건). (−1)ⁿ 이 나오는 곳은 9장 1절의 A “standard” proof(p.255)로, 삼각행렬에 대해 p(z) = (λ₁ − z)⋯(λₙ − z) = (−1)ⁿ(z − λ₁)⋯(z − λₙ) 로 적는다. 한편 9장 3절 Theorem 3.4 의 증명(p.262)은 서로 다른 고윳값 λ_k 와 그 중복도 m_k 로 만든 곱 (z − λ₁)^{m₁}⋯(z − λ_r)^{m_r} 을 A 의 특성다항식이라 적는데, 이것은 n 이 홀수이면 det(A − zI) 와 부호가 다르다. det(λI − A) 로 정의하는 꼴은 출처에서 찾지 못했다(검색어 λI − A, zI − A 0건). (2)는 출처 4장 연습문제 1.10(p.105)의 귀띔이 λ = 0 을 넣거나 상수항(free terms)을 비교하라고 하는 것과 같은 발상이다. (3)과 관련해 출처 4장 2절 연습문제 2.1 a)(p.114)는 Aᵀ 와 A 의 고윳값이 같은지를 참·거짓으로 묻는다. 반례 '자리를 바꾼 행렬식이 p_A 와 다른 예'는 위의 p.262 의 부호 차이와 같은 것을 보인다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 상수나 영함수의 경우에 거짓이던 직관 4곳, 뒤 항목이 붙으면 거짓이 될 단원 글 1건, 메모의 틀린 번호 1건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$n$이 자연수이고 $A$가 $n \times n$ [[matrix|행렬]]이라 하자. 실수 $x$에 대하여 $A - xI_n$은 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]에서 정한 차, 곧 벡터공간 $M_{n \times n}$에서의 $A + \bigl(-(xI_n)\bigr)$이고 $n \times n$ 행렬이다. 실수 $x$마다 실수 $\det(A - xI_n)$이 하나 정해지므로([[determinant|행렬식]]) [[real-function-space|(G)]]에 의해 $x$에서의 값이 $\det(A - xI_n)$인 함수 $\mathbb{R} \to \mathbb{R}$가 있다. 이 함수를 $A$의 **특성다항식**(characteristic polynomial)이라 하고 $p_A$로 쓴다. 곧 모든 실수 $x$에서 $p_A(x) = \det(A - xI_n)$이다. $p_A$는 함수의 이름이고, 함숫값을 말할 때는 $x$를 쓴다.

$\mathcal{P}_n$, 영함수 $o$, $t^k$는 [[polynomial-function|다항함수]]의 것이고, $t^k$의 계수, 상수항, 차수 $\deg$, 최고차계수는 [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 것이며, $(-1)^n$은 [[power-of-a-real-number|실수의 거듭제곱]]이다.

1. (다항함수와 차수) 모든 실수 $x$에서 $A - xI_n = A + x(-I_n)$이다. 따라서 $p_A$는 [[determinant-of-matrix-pencil|성분이 일차식인 행렬의 행렬식]]의 $B = A$, $C = -I_n$인 함수이다. $p_A \in \mathcal{P}_n$이고 $p_A \ne o$이며, $\deg p_A = n$이고 최고차계수는 $(-1)^n$이다. 곧 최고차계수는 $n$이 짝수이면 $1$, 홀수이면 $-1$이다. 특히 $p_A$는 다항함수이다.
2. (상수항) $p_A$의 상수항은 $p_A(0) = \det A$이다.
3. (전치행렬) 모든 실수 $x$에서 $(A - xI_n)^T = A^T - xI_n$이다. 따라서 $p_{A^T} = p_A$이다($A^T$는 [[transpose|전치행렬]]).
4. ($1 \times 1$) $n = 1$이면 $p_A = a_{1,1} t^0 - t$이다. 곧 모든 실수 $x$에서 $p_A(x) = a_{1,1} - x$이다.
:::

:::english
Let $n$ be a natural number and let $A$ be an $n \times n$ matrix. For a real number $x$, $A - xI_n$ is the difference defined in the entry on eigenvalues and eigenvectors, namely $A + \bigl(-(xI_n)\bigr)$ in the vector space $M_{n \times n}$, and it is an $n \times n$ matrix. For every real number $x$ one real number $\det(A - xI_n)$ is determined, so by (G) there is a function $\mathbb{R} \to \mathbb{R}$ whose value at $x$ is $\det(A - xI_n)$. This function is called the **characteristic polynomial** of $A$ and is denoted $p_A$. Thus $p_A(x) = \det(A - xI_n)$ for every real number $x$. $p_A$ is the name of a function; we use $x$ when speaking of its values.

$\mathcal{P}_n$, the zero function $o$ and $t^k$ are those of the entry on polynomial functions; the coefficient of $t^k$, the constant term, the degree $\deg$ and the leading coefficient are those of the entry on coefficients and degree; and $(-1)^n$ is a power of a real number.

1. (Polynomial function and degree) For every real number $x$ we have $A - xI_n = A + x(-I_n)$. Hence $p_A$ is the function of the entry on determinants of matrices with linear entries with $B = A$ and $C = -I_n$. We have $p_A \in \mathcal{P}_n$ and $p_A \ne o$, $\deg p_A = n$, and the leading coefficient is $(-1)^n$; that is, the leading coefficient is $1$ if $n$ is even and $-1$ if $n$ is odd. In particular, $p_A$ is a polynomial function.
2. (Constant term) The constant term of $p_A$ is $p_A(0) = \det A$.
3. (Transpose) For every real number $x$ we have $(A - xI_n)^T = A^T - xI_n$. Hence $p_{A^T} = p_A$.
4. ($1 \times 1$) If $n = 1$, then $p_A = a_{1,1} t^0 - t$; that is, $p_A(x) = a_{1,1} - x$ for every real number $x$.
:::

## 직관

[[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (4)에 의해 실수 $\lambda$가 $A$의 고윳값인 것은 $A - \lambda I_n$이 가역이 아닐 때이고, 정사각행렬이 가역이 아닌 것은 행렬식이 $0$일 때입니다. 그래서 고윳값을 찾으려면 "대각선에서 $x$를 뺀 행렬의 행렬식"을 $x$의 함수로 보는 것이 자연스럽습니다. 그 함수가 특성다항식입니다. 이름이 "다항식"인 것은 정의가 아니라 (1)의 결과입니다. 정의는 함수로만 하고, 그 함수가 $\mathcal{P}_n$에 든다는 것을 따로 증명합니다.

음악에 빗대면, 대각선에서 빼는 수 $x$를 돌려 가며 소리가 멎는 자리(행렬식이 $0$이 되는 자리)를 찾는 조율과 비슷합니다. 특성다항식은 손잡이의 위치마다 소리의 크기를 적어 둔 표이고, 고윳값은 그 표에서 값이 $0$인 자리입니다. 비유와 다른 점은 행렬식이 음수일 수도 있다는 것, 그리고 그런 자리가 하나도 없을 수 있다는 것입니다.

(1)의 최고차계수 $(-1)^n$은 $A$의 성분과 관계없습니다. 성분이 일차식인 행렬의 행렬식에서 $t^n$의 계수는 $x$에 곱해진 행렬, 여기서는 $-I_n$의 행렬식이기 때문입니다. 상수항은 $x = 0$을 넣은 값이므로 $\det A$입니다((2)). $n = 1$이면 둘 다 바로 보입니다. $p_A(x) = a_{1,1} - x$의 $t^1$의 계수는 $-1 = (-1)^1$이고 상수항은 $a_{1,1} = \det A$입니다.

## 성질의 증명

:::proof
(B…)는 [[vector-space-basic-properties]]의 것을 [[matrix|행렬]]의 (1)의 벡터공간 $M_{n \times n}$에 쓴 것이고, (K…)는 [[real-number-arithmetic]]의 것이다. 두 함수는 모든 $x$에서 값이 같으면 같다([[function|함수]]의 같음).

**(1)의 증명.** 실수 $x$에서 (B9)에 의해 $-(xI_n) = x(-I_n)$이므로 $A - xI_n = A + x(-I_n)$이다. 따라서 모든 $x$에서 $p_A(x) = \det(A + x(-I_n))$이고, 이것은 [[determinant-of-matrix-pencil|성분이 일차식인 행렬의 행렬식]]의 $B = A$, $C = -I_n$인 함수 $\varphi$의 값이므로 $p_A = \varphi$이다. (B5)에 의해 $-I_n = (-1)I_n$이므로 [[determinant-of-product|곱의 행렬식]]의 (4)에 의해 $\det(-I_n) = (-1)^n$이다. $-1 \ne 0$이므로((K7)) [[power-of-a-real-number|실수의 거듭제곱]]의 (3)에 의해 $(-1)^n \ne 0$이다. 그러므로 성분이 일차식인 행렬의 행렬식의 (3)에 의해 $p_A \in \mathcal{P}_n$이고, 같은 항목의 (4)에 의해 $p_A \ne o$, $\deg p_A = n$이며 최고차계수는 $\det(-I_n) = (-1)^n$이다. 거듭제곱의 (5)에 의해 이 수는 $n$이 짝수이면 $1$, 홀수이면 $-1$이다. $p_A \in \mathcal{P}_n$이므로 [[polynomial-function|다항함수]]의 정의에 의해 $p_A$는 다항함수이다.

**(2)의 증명.** (1)에서 $p_A = \varphi$이므로, 성분이 일차식인 행렬의 행렬식의 (3)에 의해 상수항은 $p_A(0) = \det B = \det A$이다.

**(3)의 증명.** 실수 $x$에서 (1)의 등식과 [[transpose|전치행렬]]의 (1)에 의해 $(A - xI_n)^T = (A + x(-I_n))^T = A^T + x(-I_n)^T$이다. (B5)와 전치행렬의 (1), (3)에 의해 $(-I_n)^T = ((-1)I_n)^T = (-1)I_n^T = (-1)I_n = -I_n$이다. 따라서 $(A - xI_n)^T = A^T + x(-I_n)$이고, (1)의 등식을 $A^T$에 쓰면 이것은 $A^T - xI_n$이다. [[determinant-of-transpose|전치행렬의 행렬식]]의 (1)에 의해
$$
\begin{aligned}
p_{A^T}(x) &= \det(A^T - xI_n) \\
&= \det\bigl((A - xI_n)^T\bigr) \\
&= \det(A - xI_n) = p_A(x)
\end{aligned}
$$
이고, 모든 $x$에서 값이 같으므로 $p_{A^T} = p_A$이다.

**(4)의 증명.** $n = 1$이면 성분이 일차식인 행렬의 행렬식의 (5)에 의해 $p_A = \varphi = a_{1,1} t^0 + c_{1,1} t$이고, $C = -I_1$의 $(1, 1)$ 성분은 $c_{1,1} = -1$이다([[matrix|행렬]]의 (1), (6)). (B5)에 의해 $(-1)t = -t$이고, (B2)에 의해 $a_{1,1} t^0 + (-t) = a_{1,1} t^0 - t$이다. 그 값은 $a_{1,1} \cdot 1 - x = a_{1,1} - x$이다((K4)). $\blacksquare$
:::

## 예시와 반례

:::example[영행렬의 특성다항식]
$O$를 $n \times n$ 영행렬이라 합시다. 실수 $x$에서 (1)에 의해 $O - xI_n = O + x(-I_n)$이고, $O$는 $M_{n \times n}$의 영벡터이므로([[matrix|행렬]]의 (1)) [[vector-space|(V1)]]과 (V3)의 영벡터의 뜻에 의해 이것은 $x(-I_n)$입니다. 또 [[vector-space|(V6)]]과 [[real-number-arithmetic|(K9)]]에 의해 $x(-I_n) = x((-1)I_n) = (-x)I_n$입니다([[vector-space-basic-properties|(B5)]]). [[determinant-of-product|곱의 행렬식]]의 (4)에 의해 $\det((-x)I_n) = (-x)^n$이고, [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iii)에 의해 $(-x)^n = ((-1)x)^n = (-1)^n x^n$입니다. 따라서

$$
p_O = (-1)^n t^n
$$

입니다. $n = 2$이면 $p_O = t^2$, $n = 3$이면 $p_O = -t^3$입니다. 최고차계수는 (1)대로 $(-1)^n$이고, $t^n$ 말고는 계수가 모두 $0$이므로 상수항도 $0 = \det O$입니다.
:::

:::example[전치해도 특성다항식이 같은 예]
$$
A = \begin{pmatrix} 2 & -1 \\ 3 & 0 \end{pmatrix}, \quad A^T = \begin{pmatrix} 2 & 3 \\ -1 & 0 \end{pmatrix}
$$

이라 합시다. $A \ne A^T$입니다. 실수 $x$에서 $A - xI_2 = \begin{pmatrix} 2 - x & -1 \\ 3 & -x \end{pmatrix}$이므로 [[determinant|행렬식]]의 (4)에 의해 $p_A(x) = (2 - x)(-x) - 3 \cdot (-1) = x^2 - 2x + 3$입니다. 같은 식으로 $p_{A^T}(x) = (2 - x)(-x) - (-1) \cdot 3 = x^2 - 2x + 3$입니다. 따라서 [[polynomial-function|다항함수]]의 (3)에 의해 $p_A = p_{A^T} = 3t^0 + (-2)t^1 + 1t^2$이고, 이것은 (3)과 맞습니다. 최고차계수는 $1 = (-1)^2$이고 상수항은 $3 = 2 \cdot 0 - 3 \cdot (-1) = \det A$입니다.
:::

:::counterexample[자리를 바꾼 행렬식이 p_A 와 다른 예]
대각선에서 $x$를 빼는 대신 $xI_n$에서 $A$를 빼면 다른 함수가 될 수 있습니다. $n = 1$이고 $A = \begin{pmatrix} 3 \end{pmatrix}$이면 (4)에 의해 $p_A(x) = 3 - x$이지만, $xI_1 - A$의 행렬식은 [[determinant|행렬식]]의 (2)에 의해 $x - 3$입니다. 두 함수는 $x = 0$에서 값이 $3$과 $-3$으로 다릅니다.

일반적으로는 $M_{n \times n}$에서 $xI_n - A = -(A - xI_n)$이므로([[vector-space-basic-properties|(B2)]], (B8), (B10)과 [[vector-space|(V1)]]) [[determinant-of-product|곱의 행렬식]]의 (4)에 의해 $\det(xI_n - A) = \det(-(A - xI_n)) = (-1)^n p_A(x)$입니다. 따라서 두 함수는 $n$이 짝수이면 같고, $n$이 홀수이면 서로 $-1$배입니다. 어느 쪽이든 값이 $0$인 $x$는 같습니다.
:::

## 확인 질문

:::check[$3 \times 3$ 행렬 $A$의 행렬식이 $5$이면 $p_A$의 상수항과 최고차계수는 무엇인가?]
(2)에 의해 상수항은 $\det A = 5$이고, (1)에 의해 최고차계수는 $(-1)^3 = -1$입니다([[power-of-a-real-number|실수의 거듭제곱]]의 (5)). 차수는 $3$입니다.
:::

:::check[$n \times n$ 행렬 $A$와 실수 $c$에 대하여 $p_{A - cI_n}(x)$를 $p_A$의 값으로 나타내면 무엇인가?]
$p_A(c + x)$입니다. $M_{n \times n}$에서 $(A - cI_n) - xI_n = \bigl(A + (-c)I_n\bigr) + (-x)I_n = A + ((-c) + (-x))I_n$이고([[vector-space-basic-properties|(B2)]], [[vector-space-basic-properties|(B9)]], [[vector-space|(V2)]], [[vector-space|(V8)]]), [[real-number-arithmetic|(K12)]]의 (iv)에 의해 $(-c) + (-x) = -(c + x)$이므로 이 행렬은 $A - (c + x)I_n$입니다. 따라서 $p_{A - cI_n}(x) = \det(A - (c + x)I_n) = p_A(c + x)$입니다.
:::
