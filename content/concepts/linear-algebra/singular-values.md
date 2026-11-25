---
title: 특잇값
title_en: Singular Values
aliases: [특이값, singular value, singular values]
kind: definition
field: linear-algebra
msc: ["15A18"]
level: undergrad
summary: m × n 행렬 A 의 특잇값은 제곱이 AᵀA 의 고윳값인 양수이다. 특잇값은 정확히 A 의 아무 특잇값 분해의 Σ 의 양수인 대각성분이므로 분해에 상관없이 정해지고, AᵀA 의 고유공간은 분해의 열로 적힌다. 특잇값이 있는 것은 정확히 A 가 영행렬이 아닐 때이고, A 와 Aᵀ 의 특잇값은 같으며, 대칭행렬의 특잇값은 0 이 아닌 고윳값의 절댓값이다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, square-root-exists, power-of-a-real-number, vector-space, vector-space-basic-properties, finite-sum-of-vectors, linear-combination-and-span, basis, standard-basis, linear-map, matrix, matrix-vector-product, matrix-product, matrix-product-properties, transpose, trace, trace-of-product, kernel-and-range, dimension-of-subspace, eigenvalue-and-eigenvector, eigenvalue-iff-root, diagonalizable, inner-product-space, standard-inner-product, norm-in-inner-product-space, orthonormal-basis, orthogonal-complement, self-adjoint-map, orthogonal-matrix, positive-definite-matrix, bound-for-matrix-times-vector, singular-value-decomposition]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 6장 3절 Polar and singular value decompositions 의 3.3 Singular values. Schmidt decomposition. 의 첫 Definition 과 그 뒤의 Remark, p.173, 3.4 의 Remark 3.10, p.177, 같은 절 연습문제 3.1, 3.7, 3.8, 3.10, pp.177–178; 6장 4절 4.2 Operator norm of a linear transformation. 의 프로베니우스 노름과의 비교, p.182, 연습문제 4.2, p.187
    checked: original
    note: "출처 6장 3.3(p.173)은 특잇값을 |A| = √(A*A) 의 고윳값으로 정의하고 '곧 λ₁, …, λₙ 이 A*A 의 고윳값이면 √λ₁, …, √λₙ 이 특잇값'이라 적으며, 0 도 특잇값에 넣고 중복도를 세어 n 개를 늘어놓는다. 그 뒤의 Remark(p.173)는 문헌에서는 흔히 A*A 의 고윳값의 음이 아닌 제곱근으로 바로 정의한다고 적는다. 이 항목은 A*A 대신 AᵀA 를 쓰고, 0 을 넣지 않고 양수만 특잇값이라 부르며, 늘어놓거나 중복도를 세지 않는다. 중복도에 해당하는 것은 (1)의 고유공간 기술로만 적는다. (2)는 출처 Remark 3.10(p.177: 특잇값 분해의 σ_k := σ_{k,k} 는 특잇값이고 v_k 는 A*A 의 고유벡터)과 같은 내용이고, 거꾸로 방향(모든 특잇값이 분해에 나온다)은 (1)로 보인다. (3)의 '0 이 아닌 특잇값의 수는 계수와 같다'는 출처 연습문제 3.1(p.177)과 3.10(p.178)이 묻는 것인데, 이 항목은 수를 세지 않고 특잇값 분해의 r = rank A 로 대신한다. (4)는 출처 연습문제 3.8(p.178: A*A 와 AA* 의 0 이 아닌 고윳값은 중복도를 세어 같다)의 중복도를 뺀 꼴이다. (5)는 출처 6장 4.2(p.182)가 ‖A‖₂² = trace(A*A) 를 특잇값의 제곱의 합으로 적는 것과 같고, 출처는 '대각합은 고윳값의 합'으로 보이며 이 항목은 특잇값 분해와 대각합의 순환성으로 보인다. (6)의 (i)은 출처 연습문제 3.7 c)(p.178: s 가 A 의 특잇값이면 |c|s 는 cA 의 특잇값인가)와 같은 물음이다. (6)의 (ii)는 출처 6장 4절 연습문제 4.2(p.187: 정규 연산자의 특잇값은 고윳값의 절댓값)의 실대칭행렬판이고 출처 연습문제 3.7 e)(p.178: 자기수반행렬의 특잇값은 고윳값과 같은가)와 같은 물음이다. 예시 '대칭이지만 양의 준정부호가 아닌 2 × 2 행렬'은 연습문제 3.7 a), e)와 같은 결론(특잇값이 고윳값이 아닐 수 있다)이다. 예시 '고윳값이 없는 행렬의 특잇값'의 B 는 선형대수 2 characteristic-polynomial-examples 의 (2)의 J 와 같은 행렬이고, 출처 4장 연습문제 1.1 c)(p.104)가 실고윳값이 없는 실정사각행렬이 있는지 묻는 것과 같은 결론을 쓴다. 그 B 는 출처 5장 6절 연습문제 6.1(p.150)의 둘째 행렬과 같고, 출처 6.2 Examples(p.148)가 회전행렬이 직교행렬이라고 보이는 것과 같은 대상이다. 확인 질문 '$A$의 특잇값이 $2$와 $5$뿐이면 $3A$와 $-A$의 특잇값은 무엇인가?'는 출처 연습문제 3.7 c)(p.178)와 같은 물음을 c = 3, c = −1 에서 본 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(예의 특잇값·극분해 수치 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$m$, $n$이 자연수이고 $A$가 $m \times n$ [[matrix|행렬]]이라 하자. $\mathbb{R}^n$, $\mathbb{R}^m$에는 [[standard-inner-product|표준내적]]을 주고, $A^T$는 [[transpose|전치행렬]], 고윳값과 고유벡터와 고유공간은 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 것이다. [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (6)에 의해 $A^T A$는 $n \times n$ 대칭행렬이다. 특잇값 분해와 그 $r$, $\sigma$, 열 $\mathbf{v}_k$, $\mathbf{w}_k$는 [[singular-value-decomposition|특잇값 분해]]의 것이고, 실수 $s$에 대하여 $s^2 = ss$는 [[power-of-a-real-number|실수의 거듭제곱]]이다.

양수 $s$가 $A$의 **특잇값**(singular value)인 것은 정확히 $s^2$이 $A^T A$의 고윳값일 때이다. $0$과 음수는 특잇값이라 하지 않는다.

다음이 성립한다. 아래에서 $(W, \Sigma, V)$는 $A$의 특잇값 분해이고 그 $r$과 $\sigma$는 $r$과 $\sigma_1, \dots, \sigma_r$이다. 특잇값 분해의 (3)에 의해 이런 분해가 있다.

1. (고유공간) $s$가 양수이면, $A^T A$의 고유공간 $\operatorname{Ker}(T_{A^T A} - s^2 i_{\mathbb{R}^n})$은 "$k > r$이거나 $\sigma_k \ne s$인 모든 $k \in \{1, \dots, n\}$에서 $\langle x, \mathbf{v}_k \rangle = 0$"인 $x \in \mathbb{R}^n$ 전체의 집합이다. 또 $k \le r$이고 $\sigma_k = s$이면 $\mathbf{v}_k$는 이 고유공간에 속하는 단위벡터이다.
2. (분해와의 관계) 양수 $s$가 $A$의 특잇값인 것은 정확히 $s = \sigma_k$인 $k \in \{1, \dots, r\}$가 있을 때이다. 따라서 $\sigma_1, \dots, \sigma_r$은 모두 $A$의 특잇값이고, 분해의 $\sigma$에 나오는 수 전체의 집합 $\{\sigma_1, \dots, \sigma_r\}$은 $A$의 특잇값 전체의 집합으로서 분해에 상관없이 정해진다.
3. (영행렬) $A$의 특잇값이 있는 것은 정확히 $A$가 영행렬이 아닐 때이다. 특잇값 분해의 $r$은 $\operatorname{rank} A$이다.
4. (전치) 양수 $s$가 $A$의 특잇값인 것은 정확히 $s$가 $n \times m$ 행렬 $A^T$의 특잇값일 때이다. 곧 양수 $\lambda$가 $A^T A$의 고윳값인 것은 정확히 $A A^T$의 고윳값일 때이다.
5. (프로베니우스 노름) [[bound-for-matrix-times-vector|행렬과 벡터의 곱의 어림]]의 프로베니우스 노름에 대하여 $\sigma_1^2 + \cdots + \sigma_r^2 = \lVert A \rVert_F^2$이다. 왼쪽은 $k$번째 항이 $\sigma_k^2$인 길이 $r$인 실수의 열의 합이고, $r = 0$이면 $0$이다.
6. (특별한 행렬)
   - (i) (스칼라배) $c$가 $0$이 아닌 실수이면, 양수 $s$가 $A$의 특잇값인 것은 정확히 $|c|s$가 $cA$의 특잇값일 때이다.
   - (ii) (대칭행렬) $m = n$이고 $A$가 대칭이면, 양수 $s$가 $A$의 특잇값인 것은 정확히 $s$나 $-s$가 $A$의 고윳값일 때이다. 곧 $A$의 특잇값은 정확히 $A$의 $0$이 아닌 고윳값의 [[absolute-value|절댓값]]들이다.
   - (iii) (양의 준정부호) $m = n$이고 $A$가 대칭이며 [[positive-definite-matrix|양의 준정부호]]이면, $A$의 특잇값은 정확히 $A$의 양수인 고윳값들이다.
   - (iv) (직교행렬) $m = n$이고 $A$가 [[orthogonal-matrix|직교행렬]]이면 $A$의 특잇값은 $1$ 하나뿐이다.
   - (v) (열이나 행이 하나) $n = 1$이고 $A$의 열 $\mathbf{a}_1$이 영벡터가 아니면 $A$의 특잇값은 $\lVert \mathbf{a}_1 \rVert$ 하나뿐이다. $m = 1$이고 $A$의 행을 $\mathbb{R}^n$의 원소로 본 것 $a$가 영벡터가 아니면 $A$의 특잇값은 $\lVert a \rVert$ 하나뿐이다.
:::

:::english
Let $m$, $n$ be natural numbers and $A$ an $m \times n$ matrix. Give $\mathbb{R}^n$, $\mathbb{R}^m$ the standard inner product; $A^T$ is the transpose, and eigenvalues, eigenvectors and eigenspaces are those of the entry on eigenvalues and eigenvectors. By (6) of the entry on self-adjoint maps and symmetric matrices, $A^T A$ is an $n \times n$ symmetric matrix. Singular value decompositions and their $r$, $\sigma$, columns $\mathbf{v}_k$, $\mathbf{w}_k$ are those of the entry on the singular value decomposition, and for a real number $s$, $s^2 = ss$ is the power of a real number.

A positive number $s$ is a **singular value** of $A$ exactly when $s^2$ is an eigenvalue of $A^T A$. Zero and negative numbers are not called singular values.

The following hold. Below, $(W, \Sigma, V)$ is a singular value decomposition of $A$ whose $r$ and $\sigma$ are $r$ and $\sigma_1, \dots, \sigma_r$. By (3) of the entry on the singular value decomposition such a decomposition exists.

1. (Eigenspaces) If $s$ is positive, the eigenspace $\operatorname{Ker}(T_{A^T A} - s^2 i_{\mathbb{R}^n})$ of $A^T A$ is the set of all $x \in \mathbb{R}^n$ with $\langle x, \mathbf{v}_k \rangle = 0$ for every $k \in \{1, \dots, n\}$ such that $k > r$ or $\sigma_k \ne s$. Moreover, if $k \le r$ and $\sigma_k = s$, then $\mathbf{v}_k$ is a unit vector in this eigenspace.
2. (Relation to decompositions) A positive number $s$ is a singular value of $A$ exactly when $s = \sigma_k$ for some $k \in \{1, \dots, r\}$. Hence $\sigma_1, \dots, \sigma_r$ are all singular values of $A$, and the set $\{\sigma_1, \dots, \sigma_r\}$ of numbers occurring in the $\sigma$ of the decomposition is the set of all singular values of $A$, so it does not depend on the decomposition.
3. (Zero matrix) $A$ has a singular value exactly when $A$ is not the zero matrix. The $r$ of a singular value decomposition is $\operatorname{rank} A$.
4. (Transpose) A positive number $s$ is a singular value of $A$ exactly when $s$ is a singular value of the $n \times m$ matrix $A^T$. That is, a positive number $\lambda$ is an eigenvalue of $A^T A$ exactly when it is an eigenvalue of $A A^T$.
5. (Frobenius norm) For the Frobenius norm of the entry on bounds for the product of a matrix and a vector, $\sigma_1^2 + \cdots + \sigma_r^2 = \lVert A \rVert_F^2$. The left side is the sum of the sequence of real numbers of length $r$ whose $k$-th term is $\sigma_k^2$, and it is $0$ if $r = 0$.
6. (Special matrices)
   - (i) (Scalar multiples) If $c$ is a nonzero real number, a positive number $s$ is a singular value of $A$ exactly when $|c|s$ is a singular value of $cA$.
   - (ii) (Symmetric matrices) If $m = n$ and $A$ is symmetric, a positive number $s$ is a singular value of $A$ exactly when $s$ or $-s$ is an eigenvalue of $A$. That is, the singular values of $A$ are exactly the absolute values of the nonzero eigenvalues of $A$.
   - (iii) (Positive semidefinite) If $m = n$ and $A$ is symmetric and positive semidefinite, the singular values of $A$ are exactly the positive eigenvalues of $A$.
   - (iv) (Orthogonal matrices) If $m = n$ and $A$ is an orthogonal matrix, then $1$ is the only singular value of $A$.
   - (v) (One column or one row) If $n = 1$ and the column $\mathbf{a}_1$ of $A$ is not the zero vector, then $\lVert \mathbf{a}_1 \rVert$ is the only singular value of $A$. If $m = 1$ and the row $a$ of $A$, viewed as an element of $\mathbb{R}^n$, is not the zero vector, then $\lVert a \rVert$ is the only singular value of $A$.
:::

## 직관

[[singular-value-decomposition|특잇값 분해]]는 $A$를 정규직교 기저 둘로 "$\mathbf{v}_k$를 $\sigma_k \mathbf{w}_k$로 보낸다"는 꼴로 보여 줍니다. 분해는 하나로 정해지지 않지만, 늘이는 배수 $\sigma_k$들이 어떤 수들인지는 분해와 상관없습니다. 그 수들이 특잇값입니다. 정의는 분해를 거치지 않고 $A^T A$의 고윳값으로 합니다. $\lVert Ax \rVert^2 = \langle A^T A x, x \rangle$이므로 $A^T A$는 "$A$가 길이를 어떻게 바꾸는지"를 대칭행렬 하나에 모은 것이고, 그 고윳값의 제곱근이 방향마다 길이가 바뀌는 배수입니다.

비유하면 특잇값은 고무판을 잡아당긴 뒤 원이 늘어난 모양의 반지름들입니다. 판을 어떤 각도로 놓고 재든 반지름들의 길이는 같다는 것이 "분해에 상관없다"에 해당하고, 반지름 $0$인 방향(눌려 없어진 방향)은 세지 않는다는 것이 "양수만 특잇값"에 해당합니다. 비유와 달리 이 항목은 같은 길이의 반지름이 몇 개인지를 세지 않고, 그 길이에 해당하는 방향들의 공간((1)의 고유공간)으로만 말합니다.

특잇값은 고윳값과 다릅니다. 고윳값은 $Ax = \lambda x$처럼 방향이 그대로인 벡터에서 재고, 특잇값은 들어가는 쪽과 나오는 쪽에 따로 고른, 서로 다를 수 있는 두 정규직교 기저에서 잽니다. 그래서 고윳값이 없는 $2 \times 2$ 행렬에도 특잇값은 있을 수 있고, 대칭행렬에서도 음수 고윳값은 그 절댓값이 특잇값이 됩니다((6)의 (ii)).

:::remark[분해와 정의의 순서]
특잇값을 "특잇값 분해의 $\Sigma$의 양수인 대각성분"으로 정의하면, 분해가 여럿이므로 그 수들이 분해마다 같은지를 먼저 보여야 합니다. 이 항목은 $A^T A$로 정의해 그 일을 (2)의 증명으로 넘깁니다.
:::

## 증명

:::idea
분해에서 $A^T A \mathbf{v}_k$는 $k \le r$이면 $\sigma_k^2 \mathbf{v}_k$, $k > r$이면 $0$이므로, $x$와 $\mathbf{v}_k$의 내적을 비교하면 $A^T A x = s^2 x$인 $x$가 정확히 어떤 좌표만 가질 수 있는지 읽힌다. 대칭행렬에서는 $AA - s^2 I_n = (A - sI_n)(A + sI_n)$으로 $s$나 $-s$가 고윳값이 된다.
:::

:::hint
$\langle A^T A x, \mathbf{v}_k \rangle$를 $A^T A$의 대칭으로 $\langle x, A^T A \mathbf{v}_k \rangle$로 옮겨 보십시오.
:::

:::hint
$(A^T A - s^2 I_n)x = 0$에서 $y = (A + sI_n)x$로 두면 $(A - sI_n)y = 0$입니다. $y$가 영벡터인 경우와 아닌 경우를 나누십시오.
:::

:::proof
아래에서 (K…)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것, "순서 성질"은 [[order-properties-of-reals|실수의 순서 성질]]의 번호, (V…)와 (B…)는 [[vector-space|벡터공간]]과 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 것, "내적의 (n)"과 내적의 조건은 [[inner-product-space|내적과 내적공간]]의 것, "분해의 (n)"은 [[singular-value-decomposition|특잇값 분해]]의 번호이다. 고윳값과 고유벡터의 (1)에 의해 고유공간 $\operatorname{Ker}(T_{A^T A} - s^2 i_{\mathbb{R}^n})$은 $A^T A x = s^2 x$인 $x$ 전체이다. [[real-order-axioms|실수의 순서]]의 (W4)와 순서 성질 (7)의 (iv)에 의해, 양수 $a$, $b$에서 $a^2 = b^2$인 것은 정확히 $a = b$일 때이다. 이것을 (가)라 부른다.

**(1).** 분해의 (4)의 (iii)에 의해 $k \le r$이면 $A^T A \mathbf{v}_k = \sigma_k^2 \mathbf{v}_k$, $k > r$이면 $A^T A \mathbf{v}_k = 0$이다. $k \in \{1, \dots, n\}$에 대하여 $d_k$를 $k \le r$일 때 $\sigma_k^2$, $k > r$일 때 $0$으로 두면 모든 $k$에서 $A^T A \mathbf{v}_k = d_k \mathbf{v}_k$이다($k > r$이면 (B3)). $x \in \mathbb{R}^n$이고 $c_k = \langle x, \mathbf{v}_k \rangle$라 하자. $A^T A$가 대칭이므로 [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (2)와 내적의 (1)에 의해
$$
\langle A^T A x, \mathbf{v}_k \rangle = \langle x, d_k \mathbf{v}_k \rangle = d_k c_k
$$
이고, $\langle s^2 x, \mathbf{v}_k \rangle = s^2 c_k$이다. 직교행렬의 (2)의 (마)에 의해 $\mathbf{v}_1, \dots, \mathbf{v}_n$은 $\mathbb{R}^n$의 [[orthonormal-basis|정규직교 기저]]이므로 [[basis|기저]]의 정의에 의해 $\mathbb{R}^n$을 생성하고, 내적의 (6)에 의해 $A^T A x = s^2 x$인 것은 정확히 모든 $k$에서 $d_k c_k = s^2 c_k$, 곧 ((K12)의 (i), (ii), (v)와 (K1)에 의해) $(d_k - s^2) c_k = 0$일 때이다. [[real-number-arithmetic|(K10)]]과 (K9)에 의해 이것은 정확히 $d_k \ne s^2$인 모든 $k$에서 $c_k = 0$일 때이다. 그런데 $k > r$이면 $d_k = 0$이고 $s^2 > 0$(W4)이므로 $d_k \ne s^2$이다. $k \le r$이면 $\sigma_k$와 $s$가 양수이므로 (가)에 의해 $d_k = \sigma_k^2 \ne s^2$인 것은 정확히 $\sigma_k \ne s$일 때이다. 따라서 "$d_k \ne s^2$"은 정확히 "$k > r$이거나 $\sigma_k \ne s$"이고, 첫 문장이 나온다. 둘째 문장: $k \le r$이고 $\sigma_k = s$이면 $A^T A \mathbf{v}_k = \sigma_k^2 \mathbf{v}_k = s^2 \mathbf{v}_k$이고, $\mathbf{v}_k$는 정규직교 기저의 항이므로 단위벡터이다.

**(2).** $s$가 양수라 하자. $s = \sigma_k$인 $k \le r$이 있으면 (1)에 의해 단위벡터 $\mathbf{v}_k$가 고유공간에 속하고, [[norm-in-inner-product-space|내적공간의 노름]]의 (4)에 의해 $\mathbf{v}_k \ne 0$이므로 고윳값과 고유벡터의 (2)에 의해 $s^2$은 $A^T A$의 고윳값이다. 거꾸로 그런 $k$가 없으면, 모든 $k$에서 "$k > r$이거나 $\sigma_k \ne s$"이므로 (1)에 의해 고유공간의 모든 $x$는 모든 $k$에서 $\langle x, \mathbf{v}_k \rangle = 0$을 만족하고, 내적의 (5)에 의해 $x = 0$이다. 고윳값과 고유벡터의 (2)에 의해 $s^2$은 고윳값이 아니다. 나머지 문장은 이 동치에서 나온다. 특잇값의 정의는 분해와 상관없으므로, 어떤 분해의 $\sigma$에 나오는 수의 집합도 특잇값 전체의 집합과 같다.

**(3).** 둘째 문장은 분해의 (4)의 (iv)이다. (2)에 의해 특잇값이 있는 것은 정확히 $r \ge 1$일 때이고, 분해의 (4)의 (iv)에 의해 이것은 정확히 $A$가 영행렬이 아닐 때이다.

**(4).** 분해의 (4)의 (i)에 의해 $(V, \Sigma^T, W)$는 $A^T$의 특잇값 분해이고 그 $r$과 $\sigma$는 같다. (2)를 $A$와 $A^T$에 각각 쓰면, 양수 $s$가 $A$의 특잇값인 것과 $A^T$의 특잇값인 것은 둘 다 정확히 $s = \sigma_k$인 $k \le r$이 있을 때이다. 둘째 문장: 전치행렬의 (1)에 의해 $(A^T)^T A^T = A A^T$이다. $\lambda$가 양수이면 [[square-root-exists|제곱근의 존재]]의 (1)에 의해 $s = \sqrt{\lambda}$는 양수이고 $s^2 = \lambda$이므로, 첫 문장을 이 $s$에 쓰면 된다.

**(5).** 분해의 (4)의 (i)과 [[matrix-product-properties|행렬의 곱의 성질]]의 (1), (4), 직교행렬의 정의 $W^T W = I_m$에 의해
$$
\begin{aligned}
A^T A &= (V\Sigma^T W^T)(W\Sigma V^T) \\
&= V(\Sigma^T \Sigma)V^T
\end{aligned}
$$
이다. [[trace-of-product|곱의 대각합]]의 (1)을 $V$와 $(\Sigma^T\Sigma)V^T$에 쓰고 $V^T V = I_n$을 쓰면 $\operatorname{tr}(A^T A) = \operatorname{tr}\bigl((\Sigma^T\Sigma)V^T V\bigr) = \operatorname{tr}(\Sigma^T \Sigma)$이다. 분해의 (1)의 (iv)에 의해 $\Sigma^T \Sigma = \operatorname{diag}(d_1, \dots, d_n)$이고((1)의 증명의 $d_k$), [[trace|대각합]]의 정의에 의해 $\operatorname{tr}(\Sigma^T\Sigma) = d_1 + \cdots + d_n$이다. 열 $d$는 길이 $r$인 열 $\sigma_1^2, \dots, \sigma_r^2$과 모든 항이 $0$인 길이 $n - r$인 열을 이어 붙인 것이므로 [[finite-sum-of-vectors|(H2)]]와 (H5), (K4)에 의해 $d_1 + \cdots + d_n = \sigma_1^2 + \cdots + \sigma_r^2$이다. 행렬과 벡터의 곱의 어림의 정의에 의해 $\lVert A \rVert_F^2 = \operatorname{tr}(A^T A)$이다.

**(6).** (i) [[transpose|전치행렬]]의 (1)과 행렬의 곱의 성질의 (3)에 의해 $(cA)^T(cA) = (cc)(A^T A)$이다. [[matrix-vector-product|행렬과 벡터의 곱]]의 (4)와 (V6)에 의해 $x \ne 0$이면 $A^T A x = s^2 x$인 것은 정확히 $(cc)A^T A x = (cc)s^2 x$일 때이다($cc \ne 0$이므로 거꾸로는 $(cc)^{-1}$을 곱한다. (K6), (V5)). [[absolute-value|절댓값]]의 (5)와 (K1), (K2)에 의해 $(cc)s^2 = (|c|s)^2$이고, 절댓값의 (2)와 (W4)에 의해 $|c|s$는 양수이다. 따라서 $s^2$이 $A^T A$의 고윳값인 것은 정확히 $(|c|s)^2$이 $(cA)^T(cA)$의 고윳값일 때이다.

(ii) $A^T = A$이므로 $A^T A = AA$이다. $s$나 $-s$가 $A$의 고윳값이고 $x$가 그에 속하는 고유벡터라 하자. $t \in \{s, -s\}$를 그 고윳값이라 하면 $AAx = A(tx) = t(Ax) = (tt)x$이고 (K12)의 (iii)에 의해 $tt = s^2$이므로 $s^2$은 $AA$의 고윳값이다. 거꾸로 $s^2$이 $AA$의 고윳값이고 $x \ne 0$이 $AAx = s^2 x$를 만족한다고 하자. $y = Ax + sx$로 두면 [[matrix-product|행렬의 곱]]의 (1), 행렬과 벡터의 곱의 (2), (V6), (V7), (B11)과 거듭제곱의 (1)에 의해
$$
\begin{aligned}
Ay - sy &= AAx + s(Ax) \\
&\quad - s(Ax) - (ss)x \\
&= s^2 x - s^2 x = 0
\end{aligned}
$$
이다. $y \ne 0$이면 $Ay = sy$이므로 $s$가 고윳값이다. $y = 0$이면 $Ax = -(sx) = (-s)x$이고 $x \ne 0$이므로 $-s$가 고윳값이다. 마지막 문장: 절댓값의 정의에 의해 $0$이 아닌 고윳값 $\lambda$의 절댓값은 $\lambda$나 $-\lambda$이고 양수이므로(절댓값의 (2)), 양수 $s$가 어떤 $0$이 아닌 고윳값의 절댓값인 것은 정확히 $s$나 $-s$가 고윳값일 때이다.

(iii) [[positive-definite-matrix|양의 정부호 행렬]]의 (3)의 (ii)에 의해 $A$의 고윳값은 모두 $0$ 이상이므로 양수 $s$에 대하여 $-s$는 고윳값이 아니다. (ii)에 의해 양수 $s$가 특잇값인 것은 정확히 $s$가 고윳값일 때이다.

(iv) 직교행렬의 정의에 의해 $A^T A = I_n$이다. 양수 $s$에 대하여 $s^2$이 $I_n$의 고윳값이면 $x \ne 0$이 $x = I_n x = s^2 x$를 만족하므로(행렬과 벡터의 곱의 (3)) (B12), (B11), (V5)에 의해 $(1 - s^2)x = 0$, (B6)에 의해 $1 - s^2 = 0$, (K12)의 (v)에 의해 $s^2 = 1$이고, (가)에 의해 ($1 = 1^2$이므로) $s = 1$이다. 거꾸로 $I_n e_1 = e_1 = 1^2 e_1$이고 $e_1 \ne 0$이므로 $1$은 특잇값이다.

(v) $n = 1$이면 $A^T A$는 $1 \times 1$ 행렬이고 [[standard-inner-product|ℝⁿ 의 표준내적]]의 (5)에 의해 그 성분은 $\langle \mathbf{a}_1, \mathbf{a}_1 \rangle = \lVert \mathbf{a}_1 \rVert^2$이다(노름의 (2)). $\mathbb{R}^1$의 원소 $x \ne 0$에서 $A^T A x$의 $1$에서의 값은 $\lVert \mathbf{a}_1 \rVert^2 x_1$이므로([[matrix-vector-product|행렬과 벡터의 곱]]의 (1), [[finite-sum-of-vectors|(H0)]]) $A^T A x = \mu x$인 것은 정확히 $(\lVert \mathbf{a}_1 \rVert^2 - \mu)x_1 = 0$일 때이고, $x_1 \ne 0$이므로 (K10)에 의해 정확히 $\mu = \lVert \mathbf{a}_1 \rVert^2$일 때이다. $\mathbf{a}_1 \ne 0$이므로 노름의 (1)에 의해 $\lVert \mathbf{a}_1 \rVert$는 양수이고, (가)에 의해 특잇값은 $\lVert \mathbf{a}_1 \rVert$ 하나뿐이다. $m = 1$이면 전치행렬의 (2)에 의해 $A^T$는 열이 하나이고 그 열이 $a$이므로, 앞 문장과 (4)에 의해 $A$의 특잇값은 $\lVert a \rVert$ 하나뿐이다. $\blacksquare$
:::

## 예시와 반례

:::example[대칭이지만 양의 준정부호가 아닌 2 × 2 행렬]
$$
A = \begin{pmatrix} 1 & 2 \\ 2 & -2 \end{pmatrix}
$$
에서 $p = (2, 1)$, $q = (1, -2)$로 두면 $Ap = (4, 2) = 2p$, $Aq = (-3, 6) = -3q$입니다. [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (2)에 의해 $2 \times 2$ 행렬의 서로 다른 고윳값은 둘 이하이므로 $A$의 고윳값은 정확히 $2$와 $-3$이고, $-3 < 0$이라 $A$는 양의 준정부호가 아닙니다. (6)의 (ii)에 의해 $A$의 특잇값은 정확히 $2$와 $3$입니다. 직접 확인하면 $AA = \begin{pmatrix} 5 & -2 \\ -2 & 8 \end{pmatrix}$이고 $AAp = (8, 4) = 4p$, $AAq = (9, -18) = 9q$입니다. 특잇값 $3$은 $A$의 고윳값이 아닙니다.
:::

:::example[고윳값이 없는 행렬의 특잇값]
$B = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$이면 $B^T B = I_2$이므로 $B$는 직교행렬이고 (6)의 (iv)에 의해 특잇값은 $1$ 하나뿐입니다. 그런데 $B$에는 실수인 고윳값이 없습니다. $Bx = \lambda x$이면 $(-x_2, x_1) = (\lambda x_1, \lambda x_2)$에서 $x_1 = \lambda x_2 = \lambda(-\lambda x_1)$, 곧 $(1 + \lambda\lambda)x_1 = 0$이고 $1 + \lambda\lambda > 0$이므로 $x_1 = 0$, 따라서 $x_2 = 0$이기 때문입니다.
:::

:::counterexample[0 이 특잇값이 아닌 예]
$C = \operatorname{diag}(3, 0)$이면 $C^T C = \operatorname{diag}(9, 0)$의 고윳값은 $9$와 $0$입니다. 이 항목의 정의로 $C$의 특잇값은 $3$ 하나이고, $0$은 고윳값 $0$의 제곱근이지만 특잇값이라 하지 않습니다. 고윳값 $0$의 고유공간 $\operatorname{span}(e_2)$는 $\operatorname{Ker} T_C$와 같습니다.
:::

## 확인 질문

:::check[$A$의 특잇값이 $2$와 $5$뿐이면 $3A$와 $-A$의 특잇값은 무엇인가?]
(6)의 (i)에 의해 $3A$의 특잇값은 정확히 $|3| \cdot 2 = 6$과 $|3| \cdot 5 = 15$이고, $-A$의 특잇값은 $|-1| \cdot 2 = 2$와 $5$로 $A$와 같습니다. $c = -1$이면 $(-A)^T(-A) = A^T A$이기도 합니다.
:::

:::check[$2 \times 3$ 행렬 $A$의 특잇값이 $4$뿐이면 $A^T A$의 고유공간 $\operatorname{Ker}(T_{A^T A} - 16 i_{\mathbb{R}^3})$의 차원은 얼마일 수 있는가?]
분해의 $r$은 $r \le 2$이고 (2)에 의해 $\sigma_1, \dots, \sigma_r$은 모두 $4$이며 $r \ge 1$입니다. (1)에 의해 그 고유공간은 $k > r$인 모든 $k$에서 $\langle x, \mathbf{v}_k \rangle = 0$인 $x$ 전체, 곧 [[orthogonal-complement|직교 여공간]]의 (1)에 의해 $\operatorname{span}(\mathbf{v}_{r+1}, \dots, \mathbf{v}_3)^\perp$입니다. 특잇값 분해의 (4)의 (iv)에 의해 이것은 $(\operatorname{Ker} T_A)^\perp = \operatorname{span}(\mathbf{v}_1, \dots, \mathbf{v}_r)$이고, 정규직교 열은 일차독립이므로 차원은 $r$, 곧 $1$이거나 $2$입니다. $\begin{pmatrix} 4 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$이면 $1$이고 $\begin{pmatrix} 4 & 0 & 0 \\ 0 & 4 & 0 \end{pmatrix}$이면 $2$입니다.
:::
