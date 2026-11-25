---
title: 가장 큰 특잇값과 행렬의 크기
title_en: The Largest Singular Value and the Size of a Matrix
aliases: [가장 큰 특잇값, 작용소 노름, 연산자 노름, 스펙트럼 노름, largest singular value, operator norm, spectral norm]
kind: theorem
field: linear-algebra
msc: ["15A18", "15A60"]
level: undergrad
summary: m × n 행렬 A 에 대하여 AᵀA 의 레일리 몫의 상한, 곧 AᵀA 의 가장 큰 고윳값의 제곱근 γ 를 잡으면, 단위벡터 x 에 대한 ‖Ax‖ 전체의 집합은 최댓값 γ 를 갖고, 모든 x 에서 ‖Ax‖ ≤ γ‖x‖ 이며 γ 는 이런 상수 가운데 가장 작다. A 가 영행렬이 아니면 γ 는 A 의 가장 큰 특잇값이다. γ 는 프로베니우스 노름 이하이고, 정사각행렬의 실고윳값의 절댓값 이상이다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, square-root-exists, power-of-a-real-number, upper-bound-and-supremum, vector-space, vector-space-basic-properties, standard-basis, linear-map, matrix, matrix-vector-product, transpose, trace, eigenvalue-and-eigenvector, diagonalizable, inner-product-space, standard-inner-product, norm-in-inner-product-space, kernel-of-transpose-product, self-adjoint-map, orthogonal-matrix, bound-for-matrix-times-vector, rayleigh-quotient, symmetric-matrix-has-eigenvalue, positive-definite-matrix, singular-value-decomposition, singular-values]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 6장 4절 Applications of the singular value decomposition 의 4.2 Operator norm of a linear transformation., pp.181–182; 6장 3절 연습문제 3.5, 3.9, 3.11, pp.178–179
    checked: original
    note: "출처 6장 4.2(p.181)는 닫힌 단위공 B = {x : ‖x‖ ≤ 1} 위의 ‖Ax‖ 의 최대를 구하는데, 먼저 '대각' 행렬에서 그 최대가 가장 큰 대각성분임을 보이고(식 (4.1)), 일반 행렬은 특잇값 분해와 '유니터리 변환은 노름을 바꾸지 않는다'로 '단위공 위의 ‖Ax‖ 의 최대는 가장 큰 특잇값'이라 결론짓는다. 그 최대는 유한 개의 대각성분 가운데 가장 큰 것이다. p.182 의 Definition 은 max{‖Ax‖ : x ∈ X, ‖x‖ ≤ 1} 을 A 의 operator norm 이라 하고 ‖A‖ 로 쓰며, ‖Ax‖ ≤ ‖A‖·‖x‖ 와 '‖A‖ 는 이 부등식을 만족하는 가장 작은 C ≥ 0' 을 적고, 특잇값의 제곱의 합이 ‖A‖₂² = trace(A*A) 라는 것으로 ‖A‖ ≤ ‖A‖₂ 를 보인 뒤 코시–슈바르츠 부등식으로 직접 증명할 수도 있다고 적는다. 이 항목은 길이가 다르다. 유한집합의 최댓값을 쓰지 않으려고 AᵀA 의 레일리 몫의 상한(대칭행렬의 실고윳값 항목이 가장 큰 고윳값임을 보인 수)으로 γ_A 를 정하고, 단위공 대신 단위벡터 전체 위의 최댓값을 다루며((3)이 단위공의 것을 대신한다), 특잇값 분해를 거치지 않는다. 기호 ‖A‖ 는 쓰지 않는다(이 사이트에서 ‖·‖ 는 내적이 정하는 노름에만 쓰고, M_{m×n} 에 프로베니우스 내적을 주면 그 노름은 ‖A‖_F 이다). γ_A 와 𝓛_A 는 이 항목의 지역 이름이다. (6)은 출처 6장 3절 연습문제 3.9(p.178: A 의 가장 큰 특잇값 s 와 절댓값이 가장 큰 고윳값 λ 에 대하여 |λ| ≤ s)를 실고윳값에 대해 진술한 것이다. 출처 연습문제 3.5 a)(p.178)는 한 2 × 2 행렬에서 단위공 위의 ‖Ax‖ 의 최대와 그 최대를 내는 벡터를 묻는다. (5)의 등호에 관해 출처 연습문제 3.11(p.179)은 작용소 노름이 프로베니우스 노름과 같은 것은 정확히 계수가 1 일 때라는 것을 보이라고 한다. 확인 질문 '$3 \\times 3$ 대각행렬 $D = \\operatorname{diag}(-4, 1, 3)$의 $\\gamma_D$와 $\\lVert D \\rVert_F$는 얼마인가?'는 출처 4.2 의 대각 행렬의 경우(p.181)와 같은 발상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(예의 특잇값·극분해 수치 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$m$, $n$이 자연수이고 $A$가 $m \times n$ [[matrix|행렬]]이라 하자. $\mathbb{R}^n$, $\mathbb{R}^m$에는 [[standard-inner-product|표준내적]]을 주고, 노름과 단위벡터는 [[norm-in-inner-product-space|내적공간의 노름]]의 것, $\lVert A \rVert_F$는 [[bound-for-matrix-times-vector|행렬과 벡터의 곱의 어림]]의 프로베니우스 노름, 레일리 몫의 값의 집합 $\mathcal{R}$은 [[rayleigh-quotient|레일리 몫]]의 것, $\sup$, $\max$는 [[upper-bound-and-supremum|상계와 상한]]의 것, 특잇값은 [[singular-values|특잇값]]의 것이다. [[positive-definite-matrix|양의 정부호 행렬]]의 (9)에 의해 $A^T A$는 $n \times n$ 대칭행렬이고 양의 준정부호이다.

1. (정의) $\sup \mathcal{R}_{A^T A}$는 $A^T A$의 가장 큰 고윳값이고 $0 \le \sup \mathcal{R}_{A^T A}$이다. 그 제곱근을
   $$
   \gamma_A = \sqrt{\sup \mathcal{R}_{A^T A}}
   $$
   로 쓴다([[square-root-exists|제곱근의 존재]]). $\gamma_A$는 이 항목에서 쓰는 이름이고, 행렬의 노름 기호 $\lVert A \rVert$는 쓰지 않는다.
2. (단위벡터 위의 최댓값) 집합 $\mathcal{L}_A = \{\lVert Ax \rVert : x \in \mathbb{R}^n,\ \lVert x \rVert = 1\}$은 최댓값을 갖고 $\max \mathcal{L}_A = \gamma_A$이다. $u$가 $\sup \mathcal{R}_{A^T A}$에 속하는 $A^T A$의 단위 고유벡터이면 $\lVert Au \rVert = \gamma_A$이고, 이런 $u$가 있다.
3. (가장 작은 상수) 모든 $x \in \mathbb{R}^n$에서 $\lVert Ax \rVert \le \gamma_A \lVert x \rVert$이다. 또 $0 \le c$인 실수 $c$가 모든 $x \in \mathbb{R}^n$에서 $\lVert Ax \rVert \le c\lVert x \rVert$를 만족하면 $\gamma_A \le c$이다.
4. (가장 큰 특잇값) $A$가 영행렬이 아니면 $0 < \gamma_A$이고, $\gamma_A$는 $A$의 특잇값이며, $A$의 모든 특잇값 $s$는 $s \le \gamma_A$를 만족한다. 곧 $\gamma_A$는 $A$의 가장 큰 특잇값이다. 따라서 $A$의 아무 [[singular-value-decomposition|특잇값 분해]]의 $\sigma_1, \dots, \sigma_r$에 대해서도 모든 $k$에서 $\sigma_k \le \gamma_A$이고 $\sigma_k = \gamma_A$인 $k$가 있다. $A$가 영행렬이면 $\mathcal{L}_A = \{0\}$이고 $\gamma_A = 0$이다.
5. (프로베니우스 노름과의 비교) $\gamma_A \le \lVert A \rVert_F$이다.
6. (실고윳값) $m = n$이고 실수 $\mu$가 $A$의 [[eigenvalue-and-eigenvector|고윳값]]이면 $|\mu| \le \gamma_A$이다([[absolute-value|절댓값]]).
7. (전치) $\gamma_{A^T} = \gamma_A$이다.
8. (작은 경우)
   - (i) $m = n$이고 $A$가 [[orthogonal-matrix|직교행렬]]이면 $\mathcal{L}_A = \{1\}$이고 $\gamma_A = 1$이다. 특히 $\gamma_{I_n} = 1$이고 $\lVert I_n \rVert_F = \sqrt{n}$이다.
   - (ii) $m = n$이고 $A$가 [[self-adjoint-map|대칭행렬]]이면 $|\mu| = \gamma_A$인 $A$의 고윳값 $\mu$가 있다. 곧 $\gamma_A$는 $A$의 고윳값의 절댓값 가운데 가장 큰 것이다.
:::

:::english
Let $m$, $n$ be natural numbers and $A$ an $m \times n$ matrix. Give $\mathbb{R}^n$, $\mathbb{R}^m$ the standard inner product; norms and unit vectors are those of the entry on the norm in an inner product space, $\lVert A \rVert_F$ is the Frobenius norm of the entry on bounds for the product of a matrix and a vector, the set $\mathcal{R}$ of values of the Rayleigh quotient is that of the entry on the Rayleigh quotient, $\sup$ and $\max$ are those of the entry on upper bounds and suprema, and singular values are those of the entry on singular values. By (9) of the entry on positive definite matrices, $A^T A$ is an $n \times n$ symmetric matrix and positive semidefinite.

1. (Definition) $\sup \mathcal{R}_{A^T A}$ is the largest eigenvalue of $A^T A$ and $0 \le \sup \mathcal{R}_{A^T A}$. Its square root is written
   $$
   \gamma_A = \sqrt{\sup \mathcal{R}_{A^T A}}.
   $$
   $\gamma_A$ is a name used in this entry, and the matrix norm notation $\lVert A \rVert$ is not used.
2. (Maximum over unit vectors) The set $\mathcal{L}_A = \{\lVert Ax \rVert : x \in \mathbb{R}^n,\ \lVert x \rVert = 1\}$ has a maximum and $\max \mathcal{L}_A = \gamma_A$. If $u$ is a unit eigenvector of $A^T A$ belonging to $\sup \mathcal{R}_{A^T A}$, then $\lVert Au \rVert = \gamma_A$, and such a $u$ exists.
3. (Smallest constant) For every $x \in \mathbb{R}^n$, $\lVert Ax \rVert \le \gamma_A \lVert x \rVert$. Moreover, if a real number $c$ with $0 \le c$ satisfies $\lVert Ax \rVert \le c\lVert x \rVert$ for every $x \in \mathbb{R}^n$, then $\gamma_A \le c$.
4. (Largest singular value) If $A$ is not the zero matrix, then $0 < \gamma_A$, $\gamma_A$ is a singular value of $A$, and every singular value $s$ of $A$ satisfies $s \le \gamma_A$; that is, $\gamma_A$ is the largest singular value of $A$. Hence for the $\sigma_1, \dots, \sigma_r$ of any singular value decomposition of $A$, $\sigma_k \le \gamma_A$ for every $k$ and $\sigma_k = \gamma_A$ for some $k$. If $A$ is the zero matrix, then $\mathcal{L}_A = \{0\}$ and $\gamma_A = 0$.
5. (Comparison with the Frobenius norm) $\gamma_A \le \lVert A \rVert_F$.
6. (Real eigenvalues) If $m = n$ and a real number $\mu$ is an eigenvalue of $A$, then $|\mu| \le \gamma_A$.
7. (Transpose) $\gamma_{A^T} = \gamma_A$.
8. (Small cases)
   - (i) If $m = n$ and $A$ is an orthogonal matrix, then $\mathcal{L}_A = \{1\}$ and $\gamma_A = 1$. In particular $\gamma_{I_n} = 1$ and $\lVert I_n \rVert_F = \sqrt{n}$.
   - (ii) If $m = n$ and $A$ is a symmetric matrix, then $A$ has an eigenvalue $\mu$ with $|\mu| = \gamma_A$; that is, $\gamma_A$ is the largest of the absolute values of the eigenvalues of $A$.
:::

## 직관

행렬 $A$가 벡터의 길이를 얼마나 크게 늘일 수 있는지를 묻습니다. 길이 $1$인 벡터를 모두 넣어 보고 나온 길이 $\lVert Ax \rVert$ 가운데 가장 큰 것이 있으면 그것이 답이고, (3)에 의해 그 수는 "$\lVert Ax \rVert \le c\lVert x \rVert$가 늘 성립하는 가장 작은 $c$"와 같습니다. 비유하면 확성기의 최대 증폭률입니다. 어떤 소리를 넣어도 그 배수를 넘지 않고, 그 배수만큼 커지는 소리가 실제로 있습니다. 비유가 정의와 맞는 곳은 "넘지 않는다"가 (3)의 부등식에, "실제로 그만큼 커지는 소리"가 (2)의 $u$에 해당한다는 점입니다.

답은 $A^T A$에 있습니다. $\lVert Ax \rVert^2 = \langle A^T A x, x \rangle$이므로 단위벡터에서 $\lVert Ax \rVert^2$은 $A^T A$의 레일리 몫이고, 6단원의 [[symmetric-matrix-has-eigenvalue|대칭행렬의 실고윳값]]이 레일리 몫의 상한이 가장 큰 고윳값이며 그 고유벡터에서 실제로 닿는다는 것을 보였습니다. 그래서 유한 개의 수 가운데 가장 큰 것을 고르지 않고도 최댓값이 있다는 것이 나옵니다.

$\gamma_A$는 $A$의 고윳값이 아니라 특잇값으로 정해집니다. (6)에 의해 실고윳값의 절댓값은 $\gamma_A$를 넘지 못하지만 같지 않을 수 있습니다. $\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$는 고윳값이 $0$뿐이지만 $e_2$를 $e_1$로 보내므로 $\gamma = 1$입니다. 또 $\gamma_A$는 프로베니우스 노름보다 작을 수 있습니다. $I_n$은 $n \ge 2$이면 $\gamma = 1 < \sqrt{n}$입니다.

## 증명

:::idea
단위벡터 $x$에서 $\lVert Ax \rVert^2 = \langle A^T A x, x \rangle \le \sup \mathcal{R}_{A^T A}$이고, 가장 큰 고윳값에 속하는 단위 고유벡터에서 등호가 된다. 나머지는 정규화와 특잇값의 정의로 옮긴다.
:::

:::hint
$x \ne 0$이면 $\lVert x \rVert^{-1} x$는 단위벡터이고 $\lVert Ax \rVert = \lVert x \rVert \, \lVert A(\lVert x \rVert^{-1} x) \rVert$입니다.
:::

:::proof
아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서 성질]]의 번호, "노름의 (n)"은 [[norm-in-inner-product-space|내적공간의 노름]]의 번호, "내적의 (n)"은 [[inner-product-space|내적과 내적공간]]의 번호이다. $\lambda = \sup \mathcal{R}_{A^T A}$로 둔다. [[kernel-of-transpose-product|AᵀA 의 핵과 가역성]]의 (1)에 의해 모든 $x$에서 $\langle A^T A x, x \rangle = \lVert Ax \rVert^2$이다. 이것을 (가)라 부른다. $0 \le a$, $0 \le b$인 실수에 대하여 [[power-of-a-real-number|거듭제곱]]의 (1)과 순서 성질 (7)의 (ii), (iii)에 의해 $a \le b$인 것은 정확히 $a^2 \le b^2$일 때이다. 이것을 (나)라 부른다.

**(1).** [[symmetric-matrix-has-eigenvalue|대칭행렬의 실고윳값]]의 (1), (2)에 의해 $\lambda$는 $A^T A$의 고윳값이고 가장 큰 고윳값이다. $A^T A$가 양의 준정부호이므로 [[positive-definite-matrix|양의 정부호 행렬]]의 (3)의 (ii)에 의해 $0 \le \lambda$이고, 제곱근의 존재의 (1)에 의해 $\gamma_A$가 정해지며 $0 \le \gamma_A$, $\gamma_A^2 = \lambda$이다.

**(2).** $x$가 단위벡터이면 (가), [[rayleigh-quotient|레일리 몫]]의 (3)과 $\langle x, x \rangle = 1$(노름의 (4))에 의해 $\lVert Ax \rVert^2 = \langle A^T A x, x \rangle \le \lambda \langle x, x \rangle = \lambda = \gamma_A^2$이고, 노름의 (1)에 의해 $0 \le \lVert Ax \rVert$이므로 (나)에 의해 $\lVert Ax \rVert \le \gamma_A$이다. 따라서 $\gamma_A$는 $\mathcal{L}_A$의 상계이다.

$\lambda$는 고윳값이므로 그에 속하는 고유벡터 $v$가 있고, 노름의 (4)에 의해 $u = \lVert v \rVert^{-1} v$는 단위벡터이며 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)에 의해 $A^T A u = \lVert v \rVert^{-1}(\lambda v) = \lambda u$이다([[vector-space|(V6)]], [[real-number-arithmetic|(K1)]]). $u$가 이런 단위 고유벡터이면 (가)와 내적의 (1)에 의해 $\lVert Au \rVert^2 = \langle \lambda u, u \rangle = \lambda \langle u, u \rangle = \lambda = \gamma_A^2$이고, 노름의 (2)에 의해($0 \le \gamma_A$) $\lVert Au \rVert = \gamma_A$이다. 따라서 $\gamma_A \in \mathcal{L}_A$이고, [[upper-bound-and-supremum|상계와 상한]]의 최댓값의 정의에 의해 $\gamma_A$는 $\mathcal{L}_A$의 최댓값이다.

**(3).** $x = 0$이면 [[linear-map|선형사상]]의 (T1)과 노름의 (1)에 의해 $\lVert A0 \rVert = 0 = \gamma_A \cdot 0$이다((K9)). $x \ne 0$이면 노름의 (1)에 의해 $0 < \lVert x \rVert$이고 $u = \lVert x \rVert^{-1} x$는 단위벡터이다. 행렬과 벡터의 곱의 (2), 노름의 (4), (3)에 의해 $\lVert Ax \rVert = \lVert \lVert x \rVert (Au) \rVert = \lVert x \rVert \, \lVert Au \rVert$이고(절댓값의 (1)), (2)에 의해 $\lVert Au \rVert \le \gamma_A$이므로 순서 성질 (4)의 (iii)과 (K1)에 의해 $\lVert Ax \rVert \le \gamma_A \lVert x \rVert$이다. 둘째 문장: (2)의 $u$에서 $\gamma_A = \lVert Au \rVert \le c\lVert u \rVert = c$이다.

**(4).** $A$가 영행렬이 아니라 하자. $\gamma_A = 0$이면 (3)에 의해 모든 $x$에서 $\lVert Ax \rVert \le 0$이고, 노름의 (1)과 순서 성질 (1)의 (ii)에 의해 $\lVert Ax \rVert = 0$, 곧 $Ax = 0$이다. 영행렬 $O$도 모든 $x$에서 $Ox = 0$이므로([[finite-sum-of-vectors|(H5)]], [[vector-space-basic-properties|(B4)]]) 행렬과 벡터의 곱의 (5)에 의해 $A = O$가 되어 어긋난다. 따라서 $0 < \gamma_A$이다. $\gamma_A$는 양수이고 $\gamma_A^2 = \lambda$는 $A^T A$의 고윳값이므로 [[singular-values|특잇값]]의 정의에 의해 $\gamma_A$는 특잇값이다. $s$가 $A$의 특잇값이면 $s^2$은 $A^T A$의 고윳값이므로 대칭행렬의 실고윳값의 (2)에 의해 $s^2 \le \lambda = \gamma_A^2$이고, (나)에 의해 $s \le \gamma_A$이다. 특잇값 분해에 대한 문장은 특잇값의 (2)에 의해 $\sigma_1, \dots, \sigma_r$이 모두 특잇값이고 특잇값 $\gamma_A$가 그 가운데 하나라는 것이다.

$A$가 영행렬이면 모든 단위벡터 $x$에서 $Ax = 0$이고 $\lVert Ax \rVert = 0$이다. [[standard-basis|표준기저]]의 $e_1$은 노름의 (8)에 의해 단위벡터이므로 $\mathcal{L}_A = \{0\}$이고, (2)에 의해 $\gamma_A = \max \mathcal{L}_A = 0$이다.

**(5).** 행렬과 벡터의 곱의 어림의 (2)에 의해 모든 $x$에서 $\lVert Ax \rVert \le \lVert A \rVert_F \lVert x \rVert$이고 같은 항목의 (1)에 의해 $0 \le \lVert A \rVert_F$이므로, (3)의 둘째 문장에 의해 $\gamma_A \le \lVert A \rVert_F$이다.

**(6).** $\mu$에 속하는 $A$의 고유벡터 $v$를 정규화한 $u = \lVert v \rVert^{-1} v$는 단위벡터이고 (2)의 계산과 같이 $Au = \mu u$이다. 노름의 (3)에 의해 $\lVert Au \rVert = |\mu| \, \lVert u \rVert = |\mu|$이고, (2)에 의해 $|\mu| \in \mathcal{L}_A$이므로 $|\mu| \le \gamma_A$이다.

**(7).** [[transpose|전치행렬]]의 정의에 의해 $A$가 영행렬인 것은 정확히 $A^T$가 영행렬일 때이다. 둘 다 영행렬이면 (4)에 의해 $\gamma_A = 0 = \gamma_{A^T}$이다. 둘 다 영행렬이 아니면 특잇값의 (4)에 의해 $A$와 $A^T$의 특잇값은 같으므로, (4)에 의해 $\gamma_A$는 $A^T$의 특잇값이고 $\gamma_A \le \gamma_{A^T}$이며, 같은 방식으로 $\gamma_{A^T} \le \gamma_A$이다. 순서 성질 (1)의 (ii)에 의해 둘은 같다.

**(8).** (i) [[orthogonal-matrix|직교행렬]]의 (2)의 (아)에 의해 모든 단위벡터 $x$에서 $\lVert Ax \rVert = \lVert x \rVert = 1$이고, $e_1$이 단위벡터이므로 $\mathcal{L}_A = \{1\}$이며 (2)에 의해 $\gamma_A = 1$이다. 직교행렬의 (7)에 의해 $I_n$은 직교행렬이다. [[trace|대각합]]의 (4)와 전치행렬의 (3)에 의해 $\lVert I_n \rVert_F^2 = \operatorname{tr}(I_n^T I_n) = \operatorname{tr} I_n = n$이므로 $\lVert I_n \rVert_F = \sqrt{n}$이다.

(ii) $A$가 영행렬이면 $e_1$이 $0$에 속하는 고유벡터이고 $|0| = 0 = \gamma_A$이다. 영행렬이 아니면 (4)에 의해 $\gamma_A$는 특잇값이고, 특잇값의 (6)의 (ii)에 의해 $\gamma_A$나 $-\gamma_A$가 $A$의 고윳값이다. 그 고윳값 $\mu$는 절댓값의 (1)과 (3)에 의해 $|\mu| = \gamma_A$이다. (6)과 함께 둘째 문장이 나온다. $\blacksquare$
:::

## 예시와 반례

:::example[대각행렬의 가장 큰 특잇값]
$D = \begin{pmatrix} 2 & 0 & 0 \\ 0 & -5 & 0 \end{pmatrix}$이면 $D^T D = \operatorname{diag}(4, 25, 0)$이고, [[diagonalizable|대각화 가능]]의 (4)에 의해 대각행렬의 고윳값은 대각성분이므로 그 가장 큰 고윳값은 $25$, 곧 $\gamma_D = 5$입니다. $x = (x_1, x_2, x_3)$이면 $Dx = (2x_1, -5x_2)$이고 $\lVert Dx \rVert^2 = 4x_1^2 + 25x_2^2 \le 25(x_1^2 + x_2^2 + x_3^2)$이므로 (3)의 부등식이 직접 보이고, $x = e_2$에서 $\lVert De_2 \rVert = 5$로 등호가 됩니다. $\lVert D \rVert_F = \sqrt{4 + 25} = \sqrt{29} > 5$입니다.
:::

:::counterexample[고윳값의 절댓값이 γ 보다 작을 수 있는 예]
$B = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$이면 $Bx = \mu x$에서 $(x_2, 0) = (\mu x_1, \mu x_2)$이므로 $\mu \ne 0$이면 $x_2 = 0$, $x_1 = 0$이 되어 고윳값은 $0$뿐입니다. 그런데 $B^T B = \operatorname{diag}(0, 1)$이므로 $\gamma_B = 1$이고 $\lVert Be_2 \rVert = \lVert e_1 \rVert = 1$입니다. (6)의 부등식 $|0| \le 1$은 등호가 아닙니다. (8)의 (ii)의 "대칭"을 빼면 결론이 성립하지 않을 수 있습니다.
:::

## 확인 질문

:::check[$3 \times 3$ 대각행렬 $D = \operatorname{diag}(-4, 1, 3)$의 $\gamma_D$와 $\lVert D \rVert_F$는 얼마인가?]
$D$는 대칭이고 대각화 가능의 (4)에 의해 고윳값은 대각성분 $-4$, $1$, $3$이므로 (8)의 (ii)에 의해 $\gamma_D$는 그 절댓값 가운데 가장 큰 $4$입니다. $\lVert D \rVert_F = \sqrt{16 + 1 + 9} = \sqrt{26}$이고 (5)대로 $4 \le \sqrt{26}$입니다.
:::

:::check[$\lVert Ax \rVert \le 3\lVert x \rVert$가 모든 $x$에서 성립하고 $\lVert Au \rVert = 3$인 단위벡터 $u$가 있으면 $\gamma_A$는 얼마인가?]
(3)의 둘째 문장에 의해 $\gamma_A \le 3$이고, $3 \in \mathcal{L}_A$이며 (2)에 의해 $\gamma_A$는 $\mathcal{L}_A$의 최댓값이므로 $3 \le \gamma_A$입니다. 따라서 $\gamma_A = 3$입니다.
:::
