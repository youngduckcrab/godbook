---
title: 대각화의 예와 반례
title_en: Examples of Diagonalization
aliases: [대각화의 예, 대각화할 수 없는 행렬의 예, diagonalization examples, non-diagonalizable matrices]
kind: proposition
field: linear-algebra
msc: ["15A18"]
level: undergrad
summary: 서로 다른 고윳값 셋을 가진 3 × 3 행렬을 실제로 대각화하고, 고윳값이 겹쳐도 대각화 가능한 3 × 3 행렬, 완전히 인수분해되지만 대각화 가능이 아닌 행렬, 인수분해되지 않는 행렬, 실고윳값이 하나뿐인 3 × 3 행렬을 판정한다.
requires: [function, real-number-arithmetic, real-function-space, vector-space, vector-space-basic-properties, subspace, finite-sum-of-vectors, standard-basis, linear-combination-and-span, linear-independence, dimension, independent-and-spanning-bounds, dimension-of-subspace, matrix, matrix-vector-product, matrix-product, invertible-matrix, eigenvalue-and-eigenvector, diagonalizable, diagonalizable-iff-eigenbasis, eigenvectors-of-distinct-eigenvalues, eigenvalue-examples, independent-subspaces, concatenating-bases, diagonalizable-iff-eigenspace-dimensions, determinant-with-leading-columns, polynomial-function, product-of-polynomial-functions, multiplicity-of-a-root, characteristic-polynomial, eigenvalue-iff-root, characteristic-polynomial-2x2, characteristic-polynomial-examples, real-eigenvalues-2x2, algebraic-multiplicity, geometric-at-most-algebraic, split-characteristic-polynomial, diagonalizable-iff-split-and-multiplicities]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 4장 2절 Diagonalization, 2.7 Some example, 2.7.1 Real eigenvalues, 2.7.2 Complex eigenvalues, 2.7.3 A non-diagonalizable matrix, pp.112–114; 4장 2절 연습문제 2.5, 2.6, p.114; 2.7, 2.10, 2.11, p.115
    checked: original
    note: "출처 2.7.1(pp.112–113)은 (1 2; 8 1) 의 특성다항식에서 고윳값 5, −3 을 구하고 영공간에서 고유벡터 (1, 2), (1, −2) 를 얻어 A = (1 1; 2 −2) diag(5, −3) (1 1; 2 −2)⁻¹ 로 대각화한다. (1)은 같은 일(고윳값과 고유공간에서 S 와 D 를 적는다)을 3 × 3 행렬 하나에 한 것으로 같은 발상이다. M 은 characteristic-polynomial-examples 의 (1)의 행렬이고 S 의 열은 그 항목이 적은 세 고유공간을 생성하는 벡터이다. 출처 연습문제 2.5 c)(p.114)도 3 × 3 행렬 (−2 2 6; 5 1 −6; −5 2 9) 를 대각화하라고 한다. (2)의 N 은 출처 2.7.3(pp.113–114)의 (1 1; 0 1) 이고, 출처도 대수적 중복도 2 와 기하적 중복도 1 이 달라 대각화할 수 없다고 결론짓는다. (3)의 J 와 같은 까닭(특성다항식에 실근이 없다)의 행렬을 출처는 2.7.2(p.113)에서 (1 2; −2 1) 로 들고 복소 고윳값 1 ± 2i 로 복소 대각화한다. 이 항목은 복소수를 쓰지 않는다. (4)의 A 는 고윳값 1 이 겹치고 그 고유공간이 2 차원이라 대각화 가능하다는 점에서 출처 연습문제 2.7(p.115: 대각성분 2, 2, 4 인 위삼각행렬 (2 0 6; 0 2 4; 0 0 4) 의 대각화)과 같은 발상이다. (4)에서 다른 고윳값이 없음을 고유공간의 차원으로 보이는 것은 출처 연습문제 2.10(p.115)의 '고유공간의 차원으로 판정하기'와 같은 발상이다. (5)의 C 는 대각화할 수 없는 3 × 3 행렬의 예로 출처 연습문제 2.11(p.115: 대각화할 수 없는 3 × 3 행렬을 만들라)이 묻는 것과 같은 결론이고, 오른쪽 아래 2 × 2 부분에 실고윳값이 없어 특성다항식이 실수 범위에서 인수분해되지 않는다는 점은 split-characteristic-polynomial 의 반례 '실수 범위에서 인수분해되지 않는 2 × 2 행렬과 3 × 3 행렬'의 C 와 같은 꼴이다. 확인 질문 '$\\begin{pmatrix} 4 & -1 \\\\ 1 & 2 \\end{pmatrix}$은 대각화 가능인가?'는 출처 연습문제 2.5 a), b)(p.114: 2 × 2 행렬을 할 수 있으면 대각화하라)와 같은 종류의 물음이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인(판정 정리의 증명 통독, 예의 수치 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
고윳값과 고유공간은 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 것, 대각화 가능과 $\operatorname{diag}$는 [[diagonalizable|대각화 가능]]의 것, $p_A$는 [[characteristic-polynomial|특성다항식]], 완전히 인수분해된다는 것은 [[split-characteristic-polynomial|완전히 인수분해되는 특성다항식]]의 것, 두 중복도는 [[algebraic-multiplicity|고윳값의 대수적 중복도와 기하적 중복도]]의 것이다. $t - c$와 거듭제곱 $(t - c)^k$는 [[polynomial-function|다항함수]]와 [[product-of-polynomial-functions|다항함수의 곱]]의 것이고, $e_1, e_2, e_3$은 $\mathbb{R}^3$의 [[standard-basis|표준기저]]이다.

1. (서로 다른 고윳값 셋) $M = \begin{pmatrix} 0 & 0 & 2 \\ 1 & 2 & 1 \\ 2 & 1 & 0 \end{pmatrix}$,
   $$
   S = \begin{pmatrix} 2 & 2 & 1 \\ -3 & 5 & 0 \\ 1 & 3 & -1 \end{pmatrix}
   $$
   이고 $D = \operatorname{diag}(1, 3, -2)$라 하면
   $$
   MS = SD = \begin{pmatrix} 2 & 6 & -2 \\ -3 & 15 & 0 \\ 1 & 9 & 2 \end{pmatrix}
   $$
   이고, $S$는 [[invertible-matrix|가역]]이며 $M = SDS^{-1}$이다.
2. (완전히 인수분해되지만 대각화 가능이 아니다) $N = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$이면 $p_N = (-1)^2 (t - 1)^2$이고 $N$은 완전히 인수분해된다. 고윳값은 $1$뿐이고 그 대수적 중복도는 $2$, 기하적 중복도는 $1$이다. $N$은 대각화 가능이 아니다.
3. (인수분해되지 않는다) $J = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$은 완전히 인수분해되지 않고 대각화 가능이 아니다.
4. (고윳값이 겹치고 대각화 가능하다) $A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 2 & 0 \\ 0 & 1 & 1 \end{pmatrix}$의 고윳값은 정확히 $1$과 $2$이다. 고윳값 $1$의 고유공간은 $\{x \in \mathbb{R}^3 : x_2 = 0\} = \operatorname{span}(e_1, e_3)$이고 고윳값 $2$의 고유공간은 $\operatorname{span}(w)$, $w = (1, 1, 1)$이다. 두 고윳값의 기하적 중복도는 $2$와 $1$이고 대수적 중복도도 $2$와 $1$이며, $p_A = (-1)^3 (t - 1)^2 (t - 2)^1$이다. $A$는 대각화 가능이고, $k$번째 열이 차례로 $e_1, e_3, w$인 행렬을 $R$이라 하면 $R$은 가역이고 $A = R \operatorname{diag}(1, 1, 2) R^{-1}$이다.
5. (실고윳값이 하나뿐인 $3 \times 3$ 행렬) $C = \begin{pmatrix} 5 & 0 & 0 \\ 0 & 1 & -2 \\ 0 & 2 & 1 \end{pmatrix}$이면 모든 실수 $x$에서 $p_C(x) = (5 - x)(x^2 - 2x + 5)$이고, $C$의 고윳값은 정확히 $5$ 하나이며 그 대수적 중복도와 기하적 중복도는 모두 $1$이다. $C$는 완전히 인수분해되지 않고 대각화 가능이 아니다.
:::

:::english
Eigenvalues and eigenspaces are as in the entry on eigenvalues and eigenvectors, diagonalizability and $\operatorname{diag}$ as in the entry on diagonalizability, $p_A$ is the characteristic polynomial, splitting is as in the entry on split characteristic polynomials, and the two multiplicities are as in the entry on algebraic and geometric multiplicities. $t - c$ and the powers $(t - c)^k$ are as in the entries on polynomial functions and products of polynomial functions, and $e_1, e_2, e_3$ is the standard basis of $\mathbb{R}^3$.

1. (Three distinct eigenvalues) With $M = \begin{pmatrix} 0 & 0 & 2 \\ 1 & 2 & 1 \\ 2 & 1 & 0 \end{pmatrix}$,
   $$
   S = \begin{pmatrix} 2 & 2 & 1 \\ -3 & 5 & 0 \\ 1 & 3 & -1 \end{pmatrix}
   $$
   and $D = \operatorname{diag}(1, 3, -2)$, we have
   $$
   MS = SD = \begin{pmatrix} 2 & 6 & -2 \\ -3 & 15 & 0 \\ 1 & 9 & 2 \end{pmatrix},
   $$
   $S$ is invertible, and $M = SDS^{-1}$.
2. (Splits but not diagonalizable) If $N = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$, then $p_N = (-1)^2 (t - 1)^2$ and $N$ splits. Its only eigenvalue is $1$, with algebraic multiplicity $2$ and geometric multiplicity $1$. $N$ is not diagonalizable.
3. (Does not split) $J = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ does not split and is not diagonalizable.
4. (Repeated eigenvalue, diagonalizable) The eigenvalues of $A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 2 & 0 \\ 0 & 1 & 1 \end{pmatrix}$ are exactly $1$ and $2$. The eigenspace for $1$ is $\{x \in \mathbb{R}^3 : x_2 = 0\} = \operatorname{span}(e_1, e_3)$, and the eigenspace for $2$ is $\operatorname{span}(w)$ with $w = (1, 1, 1)$. The geometric multiplicities of the two eigenvalues are $2$ and $1$, the algebraic multiplicities are also $2$ and $1$, and $p_A = (-1)^3 (t - 1)^2 (t - 2)^1$. $A$ is diagonalizable: if $R$ is the matrix whose columns are $e_1, e_3, w$ in this order, then $R$ is invertible and $A = R \operatorname{diag}(1, 1, 2) R^{-1}$.
5. (A $3 \times 3$ matrix with a single real eigenvalue) If $C = \begin{pmatrix} 5 & 0 & 0 \\ 0 & 1 & -2 \\ 0 & 2 & 1 \end{pmatrix}$, then $p_C(x) = (5 - x)(x^2 - 2x + 5)$ for every real $x$, the eigenvalues of $C$ are exactly the single number $5$, and both its multiplicities are $1$. $C$ does not split and is not diagonalizable.
:::

## 직관

[[diagonalizable-iff-split-and-multiplicities|대각화 가능의 판정]]은 대각화가 안 되는 길이 둘이라고 말합니다. 실수 범위에서 인수분해되지 않거나, 인수분해는 되지만 어떤 고윳값에서 고유벡터가 모자라는 것입니다. 이 항목의 다섯 행렬은 그 경우들을 하나씩 보여 줍니다. (1)과 (4)는 대각화되는 경우, (2)는 고유벡터가 모자라는 경우, (3)과 (5)는 인수분해되지 않는 경우입니다. (5)는 고윳값이 있어도 그것만으로는 모자랄 수 있다는 예입니다.

(4)는 고윳값이 겹친다고 해서 대각화가 막히지는 않는다는 예입니다. 고윳값 $1$이 대수적 중복도 $2$를 가지지만 그 고유공간도 $2$차원이어서 자리가 모두 채워집니다. 거꾸로 (2)의 $N$은 같은 대수적 중복도 $2$를 가지면서 고유공간이 $1$차원입니다. 특성다항식이 같아도 대각화 가능인지는 다를 수 있습니다. $N$과 $I_2$는 특성다항식이 $(t - 1)^2$로 같지만([[characteristic-polynomial-examples|특성다항식으로 고윳값을 구하는 예]]의 (3)), $I_2$는 대각화 가능하고 $N$은 그렇지 않습니다. 그래서 고유공간을 직접 계산해야 합니다.

## 증명

:::idea
(1)은 열마다 $M\mathbf{s}_k = \lambda_k \mathbf{s}_k$를 확인한다. (2)와 (3)은 앞 단원들의 예에서 고윳값과 고유공간을 가져와 판정 정리에 넣는다. (4)는 두 고유공간을 연립방정식으로 구하고, 차원의 합이 $3$이라는 것으로 다른 고윳값이 없음과 대각화 가능을 함께 얻는다. (5)는 첫째 열로 특성다항식을 쪼갠다.
:::

:::proof
행렬과 벡터의 곱은 [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)로 계산하고, 행렬의 곱의 $k$번째 열은 [[matrix-product|행렬의 곱]]의 정의에 의해 왼쪽 행렬과 오른쪽 행렬의 $k$번째 열의 곱이다. [[diagonalizable-iff-split-and-multiplicities|대각화 가능의 판정]]을 "판정 정리", [[diagonalizable-iff-eigenspace-dimensions|고유공간의 차원과 대각화]]를 "차원 항목"이라 부르고, 차원 항목은 그 (6)에 의해 행렬에 쓴다.

**(1).** $S$의 열을 $\mathbf{s}_1 = (2, -3, 1)$, $\mathbf{s}_2 = (2, 5, 3)$, $\mathbf{s}_3 = (1, 0, -1)$이라 하자. 행 규칙에 의해
$$
\begin{aligned}
M\mathbf{s}_1 &= (0 + 0 + 2,\ 2 - 6 + 1, \\
&\qquad 4 - 3 + 0) = (2, -3, 1), \\
M\mathbf{s}_2 &= (0 + 0 + 6,\ 2 + 10 + 3, \\
&\qquad 4 + 5 + 0) = (6, 15, 9), \\
M\mathbf{s}_3 &= (0 + 0 - 2,\ 1 + 0 - 1, \\
&\qquad 2 + 0 + 0) = (-2, 0, 2)
\end{aligned}
$$
이고, 이것은 차례로 $1\mathbf{s}_1$, $3\mathbf{s}_2$, $(-2)\mathbf{s}_3$이다. 이것이 $MS$의 세 열이다. [[diagonalizable|대각화 가능]]의 (2)에 의해 $D$의 $k$번째 열은 $\lambda_k e_k$($\lambda = 1, 3, -2$)이고, 행렬과 벡터의 곱의 (2), (3)에 의해 $S(\lambda_k e_k) = \lambda_k \mathbf{s}_k$이므로 $SD$의 열도 $1\mathbf{s}_1$, $3\mathbf{s}_2$, $(-2)\mathbf{s}_3$이다. 따라서 $MS = SD$이고 성분은 진술의 행렬과 같다. 세 벡터는 첫째 값이 $0$이 아니므로 영벡터가 아니고, 차례로 서로 다른 고윳값 $1$, $3$, $-2$에 속하는 고유벡터이다. [[eigenvectors-of-distinct-eigenvalues|서로 다른 고윳값의 고유벡터]]의 (2)에 의해 일차독립이고, $\dim \mathbb{R}^3 = 3$이므로 [[independent-and-spanning-bounds|일차독립인 열과 생성하는 열의 길이]]의 (3)에 의해 $\mathbb{R}^3$의 기저이다. [[diagonalizable-iff-eigenbasis|대각화와 고유벡터의 기저]]의 (4)에 의해 $S$는 가역이고 $M = SDS^{-1}$이다.

**(2).** [[characteristic-polynomial-examples|특성다항식으로 고윳값을 구하는 예]]의 (3)에 의해 $p_N = (t - 1)^2$이고 $(-1)^2 = 1$이므로, $r = 1$, $\mu = 1$, $m = 2$가 완전 인수분해이다. 완전히 인수분해되는 특성다항식의 (2)에 의해 고윳값은 $1$뿐이고 그 대수적 중복도는 $2$이다. [[eigenvalue-examples|고윳값이 없는 행렬과 대각화할 수 없는 행렬]]의 (2)에 의해 고유공간은 $\operatorname{span}(e_1)$이고, $e_1 \ne 0$이므로 [[linear-independence|일차독립]]의 (I4)와 [[dimension-of-subspace|부분공간의 차원]]의 (4)에 의해 기하적 중복도는 $1$이다. $1 < 2$이므로 판정 정리의 (2)에 의해 $N$은 대각화 가능이 아니다.

**(3).** 특성다항식으로 고윳값을 구하는 예의 (2)에 의해 $J$에는 고윳값이 없다. $J$가 완전히 인수분해된다면 완전히 인수분해되는 특성다항식의 (2)의 (ii)에 의해 $\mu_1$이 고윳값이어야 하므로($r \ge 1$) 완전히 인수분해되지 않는다. 판정 정리의 (1)에 의해 $J$는 대각화 가능이 아니다.

**(4).** [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (4)에 의해 실수 $\lambda$의 고유공간은 $(A - \lambda I_3)x = 0$인 $x$ 전체이다. 행 규칙에 의해 $(A - I_3)x = (x_2, x_2, x_2)$이므로 고윳값 $1$의 고유공간은 $x_2 = 0$인 $x$ 전체이고, 그런 $x$는 $x_1 e_1 + x_3 e_3$이며 거꾸로 $\alpha e_1 + \beta e_3 = (\alpha, 0, \beta)$는 $x_2 = 0$을 만족하므로 이 고유공간은 $\operatorname{span}(e_1, e_3)$이다. $\alpha e_1 + \beta e_3 = 0$이면 첫째 값과 셋째 값에서 $\alpha = \beta = 0$이므로 $e_1, e_3$은 일차독립이고, 부분공간의 차원의 (4)에 의해 그 차원은 $2$이다. 또 $(A - 2I_3)x = (-x_1 + x_2,\ 0,\ x_2 - x_3)$이므로 고윳값 $2$의 고유공간은 $x_1 = x_2 = x_3$인 $x$ 전체, 곧 $\{\gamma w : \gamma \in \mathbb{R}\} = \operatorname{span}(w)$이고([[linear-combination-and-span|일차결합과 생성]]의 (N4)), $w \ne 0$이므로 그 차원은 $1$이다. 두 고유공간이 $\{0\}$이 아니므로 $1$과 $2$는 고윳값이다(고윳값 항목의 (2)).

다른 고윳값이 없음을 보인다. $\eta$가 $1$, $2$와 다른 고윳값이라 하자. 열 $1, 2, \eta$는 서로 다르고 모든 항이 고윳값이므로, [[independent-subspaces|일차독립인 부분공간들]]의 (6)에 의해 세 고유공간은 일차독립이다. $\eta$의 고유공간은 $\{0\}$이 아니므로 그 차원 $g$는 $1$ 이상이다([[dimension|유한차원과 차원]]의 (3)). [[concatenating-bases|이어 붙인 기저]]의 (4)에 의해 세 고유공간의 합은 차원이 $2 + 1 + g \ge 4$인 $\mathbb{R}^3$의 부분공간인데, 부분공간의 차원의 (2)에 의해 그 차원은 $3$ 이하이므로 모순이다. 따라서 열 $1, 2$는 $A$의 고윳값을 빠짐없이 늘어놓은 열이다.

기하적 중복도의 합이 $2 + 1 = 3$이므로 차원 항목의 (3)에 의해 $A$는 대각화 가능이다. 판정 정리의 (4)에 의해 $r = 2$, $\mu = 1, 2$, $g = 2, 1$은 $p_A$의 완전 인수분해이므로 $p_A = (-1)^3 (t - 1)^2 (t - 2)^1$이고, 완전히 인수분해되는 특성다항식의 (2)의 (iii)에 의해 대수적 중복도는 $2$와 $1$이다. 마지막으로 행 규칙에 의해 $Ae_1 = (1, 0, 0) = 1e_1$, $Ae_3 = (0, 0, 1) = 1e_3$, $Aw = (1 + 1,\ 2,\ 1 + 1) = 2w$이고, $e_1, e_3, w$는 고유벡터들의 열이다. 이 열은 일차독립이다. $\alpha e_1 + \beta e_3 + \gamma w = (\alpha + \gamma, \gamma, \beta + \gamma) = 0$이면 둘째 값에서 $\gamma = 0$이고 나머지에서 $\alpha = \beta = 0$이기 때문이다. 일차독립인 열과 생성하는 열의 길이의 (3)에 의해 이 열은 $\mathbb{R}^3$의 기저이고, 대각화와 고유벡터의 기저의 (4)에 의해 $R$은 가역이며 $A = R \operatorname{diag}(1, 1, 2) R^{-1}$이다.

**(5).** $C$의 첫째 열은 $5e_1$이다. [[determinant-with-leading-columns|처음 몇 열이 단위벡터의 배수인 행렬의 행렬식]]의 (3)을 $g = 1$, $\lambda = 5$로 쓰면, $(i, l)$ 성분이 $c_{1+i, 1+l}$인 $2 \times 2$ 행렬 $B = \begin{pmatrix} 1 & -2 \\ 2 & 1 \end{pmatrix}$에 대하여 모든 실수 $x$에서 $p_C(x) = \det(C - xI_3) = (5 - x)\det(B - xI_2) = (5 - x)p_B(x)$이다. [[characteristic-polynomial-2x2|2 × 2 행렬의 특성다항식]]의 (1)에 의해 $\operatorname{tr} B = 2$, $\det B = 1 + 4 = 5$이고 $p_B(x) = x^2 - 2x + 5$이다. 따라서 진술의 식이 성립한다. [[real-eigenvalues-2x2|2 × 2 행렬의 실고윳값]]의 (1)에 의해 $\operatorname{disc} B = 0^2 + 4 \cdot (-2) \cdot 2 = -16 < 0$이고, 그 (2)에 의해 모든 $x$에서 $0 < p_B(x)$이다. [[real-number-arithmetic|(K10)]]에 의해 $p_C(x) = 0$인 것은 정확히 $5 - x = 0$, 곧 $x = 5$일 때이고, [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (1)에 의해 $C$의 고윳값은 정확히 $5$이다.

대수적 중복도: $h = (-1)p_B$로 두면 $p_B \in \mathcal{P}_2$(특성다항식의 (1))이고 $\mathcal{P}_2$는 부분공간이므로 $h$는 다항함수이며, 모든 $x$에서 $(x - 5)h(x) = (5 - x)p_B(x) = p_C(x)$이므로 $p_C = (t - 5)h$이다. $h(5) = -(25 - 10 + 5) = -20 \ne 0$이므로 [[multiplicity-of-a-root|근의 중복도]]의 (1)의 유일성에 의해($(t - 5)^1 = t - 5$) $5$의 대수적 중복도는 $1$이다. 기하적 중복도: [[geometric-at-most-algebraic|기하적 중복도는 대수적 중복도 이하]]의 (2)에 의해 $1$ 이하이고, 두 중복도의 (1)에 의해 $1$ 이상이므로 $1$이다.

$C$가 완전히 인수분해된다고 하자. 완전 인수분해 $r$, $\mu$, $m$에서 완전히 인수분해되는 특성다항식의 (2)의 (ii)에 의해 모든 $\mu_j$는 고윳값, 곧 $5$이다. $r \ge 2$이면 $\mu_1 = \mu_2$가 되어 서로 다르다는 데 어긋나므로 $r = 1$이고, 그 (2)의 (i)과 [[finite-sum-of-vectors|벡터의 유한 합]]의 (H0)에 의해 $m_1 = 3$이다. 그러면 $p_C = (-1)^3 (t - 5)^3$이다. [[product-of-polynomial-functions|다항함수의 곱]]의 (3)에 의해 $(t - 5)^3 = \bigl((t - 5)(t - 5)\bigr)(t - 5)$이고 함수의 곱의 값은 값의 곱이므로, $p_C(1) = (-1)\bigl((-4)(-4)\bigr)(-4) = 64$이다. 그런데 진술의 식에 의해 $p_C(1) = 4 \cdot (1 - 2 + 5) = 16$이다. $16 \ne 64$이므로 모순이고, $C$는 완전히 인수분해되지 않는다. 판정 정리의 (1)에 의해 $C$는 대각화 가능이 아니다. $\blacksquare$
:::

## 확인 질문

:::check[$\begin{pmatrix} 4 & -1 \\ 1 & 2 \end{pmatrix}$은 대각화 가능인가?]
아닙니다. 2 × 2 행렬의 실고윳값의 (1)에 의해 판별식은 $(4 - 2)^2 + 4 \cdot (-1) \cdot 1 = 4 - 4 = 0$이고, $h = 2^{-1}(4 + 2) = 3$입니다. 이 행렬은 $(1, 2)$ 성분이 $-1 \ne 0$이므로 $3I_2$가 아니고, 판정 정리의 (6)에 의해 대각화 가능이 아닙니다.
:::

:::check[$5 \times 5$ 행렬 $A$에 대하여 $p_A = (-1)^5 (t - 1)(t - 2)(t - 3)(t - 4)^2$이고 고윳값 $4$의 고유공간이 2차원이면 $A$는 대각화 가능인가?]
그렇습니다. 이 식은 $r = 4$, $\mu = 1, 2, 3, 4$, $m = 1, 1, 1, 2$인 완전 인수분해입니다($t - c$는 $(t - c)^1$). 완전히 인수분해되는 특성다항식의 (2)의 (iii)에 의해 고윳값 $1, 2, 3$의 대수적 중복도는 $1$이므로, 기하적 중복도는 대수적 중복도 이하의 (4)에 의해 그 기하적 중복도도 $1$입니다. 고윳값 $4$의 두 중복도는 $2$로 같습니다. 판정 정리의 (1)에 의해 $A$는 대각화 가능입니다.
:::
