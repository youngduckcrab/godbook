---
title: 이차형식의 예
title_en: Examples of Quadratic Forms
aliases: [양의 정부호 판정의 예, 관성 법칙의 예, examples of quadratic forms, examples of positive definite matrices]
kind: proposition
field: linear-algebra
msc: ["15A63"]
level: undergrad
summary: 3 × 3 대칭행렬 하나를 실베스터 판정법과 직교 대각화의 두 길로 양의 정부호라고 판정하고, 부정부호인 3 × 3 행렬을 완전제곱과 직교 대각화의 두 가지로 대각화해 양수와 음수인 대각성분의 개수가 같다는 것을 계산으로 본다. 앞 주 소행렬의 행렬식이 모두 0 이상이지만 양의 준정부호가 아닌 3 × 3 행렬과, 2 × 2 행렬을 판정법과 행렬식·대각합으로 판정하는 예도 든다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, square-root-exists, vector-space, vector-space-basic-properties, real-function-space, finite-sum-of-vectors, standard-basis, matrix, matrix-vector-product, matrix-product, matrix-product-properties, transpose, invertible-matrix, diagonalizable, determinant, determinant-of-triangular-matrix, trace, inner-product-space, standard-inner-product, orthonormal-list, self-adjoint-map, orthogonal-matrix, quadratic-form, positive-definite-matrix, sylvester-law-of-inertia, sylvester-criterion]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 7장 2절 소절 2.2.1 Diagonalization by completion of squares, pp.201–203; 7장 3절 Sylvester's Law of Inertia 의 도입, p.206; 7장 4절 소절 4.1 의 식 (4.1), p.209, 소절 4.3 Some remarks, pp.213–214, 연습문제 4.1, 4.4, 4.6, p.214
    checked: original
    note: "(1)의 A 는 3I₃ 에 vvᵀ (v = (1, −1, 1)) 를 더한 꼴로, 출처 7장 연습문제 2.2(p.206)와 6장 연습문제 4.3(p.187)의 (2 1 1; 1 2 1; 1 1 2), 곧 I₃ 에 모든 성분이 1 인 행렬을 더한 것과 같은 꼴이다. (2)의 B 의 왼쪽 위 2 × 2 블록 (1 2; 2 1) 은 출처 5장 6절 연습문제 6.1(p.150)의 첫째 행렬과 같고, V 의 앞 두 열은 출처 7장 소절 2.1 의 예(p.201)의 U 의 두 열과 부호를 빼고 같은 벡터이다. (1)은 출처 연습문제 4.1(p.214, 실베스터 판정법으로 3 × 3 행렬이 양의 정부호인지 확인하라)과 같은 종류의 계산이고, 고윳값으로 한 번 더 확인하는 것은 출처 Theorem 4.1(p.209)의 판정을 쓴 것이다. (2)의 S 는 출처 소절 2.2.1(pp.201–203)의 완전제곱으로 대각화하는 방법과 같은 발상이고, 두 대각화의 대각성분이 달라도 부호의 개수가 같다는 것은 출처 3절 도입(p.206)이 말하는 관성 법칙의 내용이다. (3)은 출처 연습문제 4.6(p.214, a₁,₁ > 0 이고 k = 2, 3 에서 det A_k ≥ 0 이지만 양의 준정부호가 아닌 3 × 3 대칭행렬을 찾아라)과 같은 물음이고, 소절 4.3(p.213)의 '판정법은 n ≥ 3 에서 양의 준정부호로 일반화되지 않는다'의 예이다. (4)의 F 의 판정은 출처 (4.1)(p.209, a > 0 이고 det A > 0)과 같은 꼴이고, G 의 판정은 소절 4.3(p.214)의 음의 정부호 판정 (−1)ᵏ det A_k > 0 을 쓴 것이다. 확인 질문 '(2)의 $B$에 대하여 $q_B(x) < 0$인 $x$를 하나 찾아라.'와 '(3)의 $C$의 $1 \\times 1$ 앞 주 소행렬만 보고 $C$가 양의 준정부호라고 할 수 있는가?'는 이 항목의 계산을 다시 쓴 것이고, 뒤의 것은 출처 연습문제 4.6(p.214)이 det A_k ≥ 0 에 a₁,₁ > 0 을 더해도 양의 준정부호가 되지 않는 예를 묻는 것과 같은 상황이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(예의 행렬식·고유벡터·합동 대각화 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$\mathbb{R}^n$에는 [[standard-inner-product|표준내적]]을 주고, 이차형식 $q_A$는 [[quadratic-form|쌍선형 형식과 이차형식]]의 것, 양의 정부호 등의 낱말은 [[positive-definite-matrix|양의 정부호 행렬]]의 것, 앞 주 소행렬 $A^{[k]}$는 [[sylvester-criterion|실베스터 판정법]]의 것, 관성지수 $n_+$, $n_-$는 [[sylvester-law-of-inertia|실베스터 관성 법칙]]의 것, 직교행렬은 [[orthogonal-matrix|직교행렬]]의 것이다.

1. (양의 정부호인 $3 \times 3$ 행렬)
   $$
   A = \begin{pmatrix} 4 & -1 & 1 \\ -1 & 4 & -1 \\ 1 & -1 & 4 \end{pmatrix}
   $$
   이라 하자. $A$는 대칭이고 $\det A^{[1]} = 4$, $\det A^{[2]} = 15$, $\det A = 54$이다. 또 열이
   $$
   \begin{aligned}
   \mathbf{u}_1 &= (\sqrt{3})^{-1}(1, -1, 1), \\
   \mathbf{u}_2 &= (\sqrt{2})^{-1}(1, 1, 0), \\
   \mathbf{u}_3 &= (\sqrt{6})^{-1}(-1, 1, 2)
   \end{aligned}
   $$
   인 $3 \times 3$ 행렬 $U$는 직교행렬이고 $A = U \operatorname{diag}(6, 3, 3) U^T$이다. 따라서 $A$는 양의 정부호이고 $n_+(A) = 3$이다.
2. (부정부호인 $3 \times 3$ 행렬과 두 대각화)
   $$
   \begin{aligned}
   B &= \begin{pmatrix} 1 & 2 & 0 \\ 2 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}, \\
   S &= \begin{pmatrix} 1 & -2 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}
   \end{aligned}
   $$
   이라 하자. $B$는 대칭이고 $q_B(x) = x_1^2 + 4x_1 x_2 + x_2^2 + x_3^2$이다. $S$는 가역이고 $S^T B S = \operatorname{diag}(1, -3, 1)$이다. 또 열이 $(\sqrt{2})^{-1}(1, 1, 0)$, $(\sqrt{2})^{-1}(1, -1, 0)$, $e_3$인 $3 \times 3$ 행렬 $V$는 직교행렬이고 $V^T B V = \operatorname{diag}(3, -1, 1)$이다. 두 대각행렬의 대각성분은 다르지만 양수인 것이 둘, 음수인 것이 하나이고, $n_+(B) = 2$, $n_-(B) = 1$이며 $B$는 부정부호이다. $\det B^{[1]} = 1$, $\det B^{[2]} = -3$, $\det B = -3$이다.
3. (판정법을 준정부호로 바꾸면 성립하지 않을 수 있는 예)
   $$
   C = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 1 & 0 \\ 0 & 0 & -1 \end{pmatrix}
   $$
   이라 하자. $C$는 대칭이고 $\det C^{[1]} = 1$, $\det C^{[2]} = 0$, $\det C = 0$이어서 모두 $0$ 이상이지만, $q_C(e_3) = -1$이므로 $C$는 양의 준정부호가 아니다. $q_C(e_1) = 1$이므로 $C$는 부정부호이고, $n_+(C) = 1$, $n_-(C) = 1$이다.
4. ($2 \times 2$ 행렬의 두 판정)
   $$
   \begin{aligned}
   F &= \begin{pmatrix} 5 & -4 \\ -4 & 4 \end{pmatrix}, \\
   G &= \begin{pmatrix} -3 & 1 \\ 1 & -2 \end{pmatrix}
   \end{aligned}
   $$
   이라 하자. $\det F = 4$, $\operatorname{tr} F = 9$이고 $\det G = 5$, $\operatorname{tr} G = -5$이다. $F$는 양의 정부호이고 $G$는 음의 정부호이다. 이것은 실베스터 판정법의 (4), (3)으로도, 양의 정부호 행렬의 (10)의 (iii)으로도 나온다.
:::

:::english
Give $\mathbb{R}^n$ the standard inner product. The quadratic form $q_A$ is that of the entry on bilinear and quadratic forms, the words positive definite and so on are those of the entry on positive definite matrices, the leading principal submatrix $A^{[k]}$ is that of Sylvester's criterion, the indices of inertia $n_+$, $n_-$ are those of Sylvester's law of inertia, and orthogonal matrices are those of the entry on orthogonal matrices.

1. (A positive definite $3 \times 3$ matrix) Let
   $$
   A = \begin{pmatrix} 4 & -1 & 1 \\ -1 & 4 & -1 \\ 1 & -1 & 4 \end{pmatrix} .
   $$
   $A$ is symmetric, and $\det A^{[1]} = 4$, $\det A^{[2]} = 15$, $\det A = 54$. Moreover the $3 \times 3$ matrix $U$ with columns
   $$
   \begin{aligned}
   \mathbf{u}_1 &= (\sqrt{3})^{-1}(1, -1, 1), \\
   \mathbf{u}_2 &= (\sqrt{2})^{-1}(1, 1, 0), \\
   \mathbf{u}_3 &= (\sqrt{6})^{-1}(-1, 1, 2)
   \end{aligned}
   $$
   is an orthogonal matrix and $A = U \operatorname{diag}(6, 3, 3) U^T$. Hence $A$ is positive definite and $n_+(A) = 3$.
2. (An indefinite $3 \times 3$ matrix and two diagonalizations) Let
   $$
   \begin{aligned}
   B &= \begin{pmatrix} 1 & 2 & 0 \\ 2 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}, \\
   S &= \begin{pmatrix} 1 & -2 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} .
   \end{aligned}
   $$
   $B$ is symmetric and $q_B(x) = x_1^2 + 4x_1 x_2 + x_2^2 + x_3^2$. $S$ is invertible and $S^T B S = \operatorname{diag}(1, -3, 1)$. Moreover the $3 \times 3$ matrix $V$ with columns $(\sqrt{2})^{-1}(1, 1, 0)$, $(\sqrt{2})^{-1}(1, -1, 0)$, $e_3$ is an orthogonal matrix and $V^T B V = \operatorname{diag}(3, -1, 1)$. The two diagonal matrices have different diagonal entries, but each has two positive and one negative entry; $n_+(B) = 2$, $n_-(B) = 1$, and $B$ is indefinite. $\det B^{[1]} = 1$, $\det B^{[2]} = -3$, $\det B = -3$.
3. (An example where the criterion may fail when changed to semidefiniteness) Let
   $$
   C = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 1 & 0 \\ 0 & 0 & -1 \end{pmatrix} .
   $$
   $C$ is symmetric and $\det C^{[1]} = 1$, $\det C^{[2]} = 0$, $\det C = 0$, all at least $0$, but $q_C(e_3) = -1$, so $C$ is not positive semidefinite. Since $q_C(e_1) = 1$, $C$ is indefinite, and $n_+(C) = 1$, $n_-(C) = 1$.
4. (Two criteria for $2 \times 2$ matrices) Let
   $$
   \begin{aligned}
   F &= \begin{pmatrix} 5 & -4 \\ -4 & 4 \end{pmatrix}, \\
   G &= \begin{pmatrix} -3 & 1 \\ 1 & -2 \end{pmatrix} .
   \end{aligned}
   $$
   $\det F = 4$, $\operatorname{tr} F = 9$, $\det G = 5$, $\operatorname{tr} G = -5$. $F$ is positive definite and $G$ is negative definite. This follows from items (4), (3) of Sylvester's criterion as well as from item (10)(iii) of the entry on positive definite matrices.
:::

## 직관

같은 질문, 곧 "이 대칭행렬은 양의 정부호인가"에 답하는 길이 여럿입니다. 실베스터 판정법은 행렬식 몇 개만 계산하면 되고, 직교 대각화는 고유벡터를 찾아야 하지만 고윳값과 주축까지 알려 줍니다. 완전제곱은 고윳값을 몰라도 대각화를 주고, 관성 법칙이 그 대각성분의 부호의 개수를 믿을 수 있게 해 줍니다. (1)과 (2)는 같은 행렬에서 두 길의 답이 맞는 것을 봅니다.

(3)은 판정법의 "양수"를 "$0$ 이상"으로 바꾸어도 된다고 생각하기 쉬운 곳을 짚습니다. $C$의 앞 주 소행렬의 행렬식은 모두 $0$ 이상이지만, 셋째 좌표 방향으로는 $q_C$가 음수입니다. 이 $C$에서는 계산해 보면 $\det C = 0$인데, $\det C^{[2]} = 0$이어서 셋째 대각성분 $-1$의 부호가 행렬식에 나타나지 않습니다.

## 증명

:::idea
행렬의 곱과 행렬식은 성분으로 계산한다. 직교 대각화는 열이 정규직교인지와 $A\mathbf{u}_k = \lambda_k \mathbf{u}_k$인지를 확인하면 $AU = U\operatorname{diag}(\lambda_1, \lambda_2, \lambda_3)$에서 나온다.
:::

:::proof
행렬의 곱은 [[matrix-product|행렬의 곱]]의 (2)로, $2 \times 2$와 $3 \times 3$ 행렬식은 [[determinant|행렬식]]의 (4)로, 대각합은 [[trace|대각합]]의 정의로, 행렬과 벡터의 곱은 [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)로 계산한다. 이차형식의 값은 [[quadratic-form|쌍선형 형식과 이차형식]]의 (1)의 성분 꼴로 계산한다. 분수와 제곱근의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]과 [[square-root-exists|제곱근의 존재]]의 (1), (2)로 한다($\sqrt{a}\sqrt{a} = a$, $\sqrt{ab} = \sqrt{a}\sqrt{b}$). 실수의 부호는 [[order-properties-of-reals|실수의 순서의 성질]]로 판정한다. 세 행렬 $A$, $B$, $C$가 대칭인 것은 [[transpose|전치행렬]]의 정의에 의해 $(j, k)$ 성분과 $(k, j)$ 성분을 비교해 확인한다.

다음 사실을 (가)라 부른다. $M$이 $3 \times 3$ 행렬이고 $\mathbf{w}_1, \mathbf{w}_2, \mathbf{w}_3$이 $\mathbb{R}^3$의 [[orthonormal-list|정규직교 열]]이며 실수 $\mu_k$에 대해 $M\mathbf{w}_k = \mu_k \mathbf{w}_k$이면, 열이 $\mathbf{w}_k$인 행렬 $W$는 직교행렬이고 $W^T M W = \operatorname{diag}(\mu_1, \mu_2, \mu_3)$, $M = W \operatorname{diag}(\mu_1, \mu_2, \mu_3) W^T$이다. 증명: 직교행렬의 (2)의 (라)에 의해 $W$는 직교행렬이고, (다)에 의해 $W^{-1} = W^T$이다. 행렬의 곱의 정의에 의해 $MW$의 $k$번째 열은 $M\mathbf{w}_k = \mu_k \mathbf{w}_k$이고, [[diagonalizable|대각화 가능]]의 (2)에 의해 $\operatorname{diag}(\mu_1, \mu_2, \mu_3)$의 $k$번째 열은 $\mu_k e_k$이므로 $W\operatorname{diag}(\mu)$의 $k$번째 열은 $W(\mu_k e_k) = \mu_k \mathbf{w}_k$이다(행렬과 벡터의 곱의 (2), (3)). [[matrix|행렬]]의 (3)에 의해 $MW = W\operatorname{diag}(\mu)$이다. 왼쪽에 $W^T$를 곱하면 $W^T M W = (W^T W)\operatorname{diag}(\mu) = \operatorname{diag}(\mu)$이고, 오른쪽에 $W^T$를 곱하면 $M = M(WW^T) = W\operatorname{diag}(\mu)W^T$이다([[matrix-product-properties|행렬 곱의 성질]]의 (1), (4)와 직교행렬의 (2)의 (가), (나)).

**(1).** $\det A^{[1]} = 4$, $\det A^{[2]} = 4 \cdot 4 - (-1)(-1) = 15$이고
$$
\begin{aligned}
\det A &= 4(16 - 1) \\
&\quad - (-1)(-4 - (-1)) \\
&\quad + 1(1 - 4) \\
&= 60 - 3 - 3 = 54
\end{aligned}
$$
이다. 셋 다 양수이므로 [[sylvester-criterion|실베스터 판정법]]의 (2)에 의해 $A$는 양의 정부호이다.

다른 길: $A(1, -1, 1) = (6, -6, 6)$, $A(1, 1, 0) = (3, 3, 0)$, $A(-1, 1, 2) = (-3, 3, 6)$이므로 $\mathbf{u}_1, \mathbf{u}_2, \mathbf{u}_3$은 각각 $6$, $3$, $3$에 속하는 고유벡터이다(행렬과 벡터의 곱의 (2)로 양의 상수배를 꺼낸다). 표준내적은 $\langle (1, -1, 1), (1, 1, 0) \rangle = 0$, $\langle (1, -1, 1), (-1, 1, 2) \rangle = -1 - 1 + 2 = 0$, $\langle (1, 1, 0), (-1, 1, 2) \rangle = 0$이고, 세 벡터와 자기 자신의 표준내적은 $3$, $2$, $6$이므로 $\mathbf{u}_k$들은 정규직교 열이다([[inner-product-space|내적]]의 (1)). (가)에 의해 $U$는 직교행렬이고 $A = U\operatorname{diag}(6, 3, 3)U^T$이다. 대각성분이 모두 양수이므로 양의 정부호 행렬의 (4)의 (i)을 $S = U$에 쓰면 $A$는 양의 정부호이고, 양의 정부호 행렬의 (6)에 의해 $\det A = 6 \cdot 3 \cdot 3 = 54$로 위의 계산과 맞는다. [[sylvester-law-of-inertia|실베스터 관성 법칙]]의 (4)에 의해 $n_+(A) = |\{1, 2, 3\}| = 3$이다.

**(2).** 이차형식의 (1)의 성분 꼴에 의해 $q_B(x) = (x_1 + 2x_2)x_1 + (2x_1 + x_2)x_2 + x_3 x_3 = x_1^2 + 4x_1 x_2 + x_2^2 + x_3^2$이다. $S$는 대각성분이 모두 $1$인 위삼각행렬이므로 [[determinant-of-triangular-matrix|삼각행렬의 행렬식]]의 (6)에 의해 가역이다. 성분으로 계산하면
$$
BS = \begin{pmatrix} 1 & 0 & 0 \\ 2 & -3 & 0 \\ 0 & 0 & 1 \end{pmatrix}
$$
이고
$$
S^T(BS) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & -3 & 0 \\ 0 & 0 & 1 \end{pmatrix}
$$
이다. 예컨대 $BS$의 $(2, 2)$ 성분은 $2(-2) + 1 \cdot 1 + 0 = -3$이고, $S^T(BS)$의 $(2, 1)$ 성분은 $(-2) \cdot 1 + 1 \cdot 2 + 0 = 0$이다. 이것은 $q_B(x) = (x_1 + 2x_2)^2 - 3x_2^2 + x_3^2$이라는 완전제곱에 해당한다.

$B(1, 1, 0) = (3, 3, 0)$, $B(1, -1, 0) = (-1, 1, 0)$, $Be_3 = e_3$이고, 세 열 $(\sqrt{2})^{-1}(1, 1, 0)$, $(\sqrt{2})^{-1}(1, -1, 0)$, $e_3$은 서로의 표준내적이 $0$이고 자기 자신과의 표준내적이 $1$이므로 정규직교 열이다. (가)에 의해 $V$는 직교행렬이고 $V^T B V = \operatorname{diag}(3, -1, 1)$이다. 관성 법칙의 (3)을 $S$와 $D = \operatorname{diag}(1, -3, 1)$에 쓰면 $n_+(B) = |\{1, 3\}| = 2$, $n_-(B) = |\{2\}| = 1$이고, $V$와 $\operatorname{diag}(3, -1, 1)$에 써도 $|\{1, 3\}| = 2$, $|\{2\}| = 1$로 같다. 관성 법칙의 (5)의 (iii)에 의해 $B$는 부정부호이다. 행렬식은 $\det B^{[1]} = 1$, $\det B^{[2]} = 1 - 4 = -3$, $\det B = 1(1 - 0) - 2(2 - 0) + 0 = -3$이다.

**(3).** $\det C^{[1]} = 1$, $\det C^{[2]} = 1 - 1 = 0$, $\det C = 1(-1 - 0) - 1(-1 - 0) + 0 = 0$이다. [[standard-basis|표준기저]]에서 이차형식의 (1)에 의해 $q_C(e_k) = c_{k,k}$이므로 $q_C(e_3) = -1 < 0$이고 $q_C(e_1) = 1 > 0$이다. 앞의 것에 의해 $C$는 양의 준정부호가 아니고, 둘을 합치면 정의에 의해 $C$는 부정부호이다. $C(1, 1, 0) = (2, 2, 0)$, $C(1, -1, 0) = (0, 0, 0)$, $Ce_3 = -e_3$이므로 (2)와 같은 열을 가진 직교행렬 $V$로 (가)에 의해 $V^T C V = \operatorname{diag}(2, 0, -1)$이고, 관성 법칙의 (4)에 의해 $n_+(C) = |\{1\}| = 1$, $n_-(C) = |\{3\}| = 1$이다.

**(4).** $\det F = 20 - 16 = 4$, $\operatorname{tr} F = 9$, $\det G = 6 - 1 = 5$, $\operatorname{tr} G = -5$이다. $F$는 대칭이고 $0 < 5$, $0 < 4$이므로 실베스터 판정법의 (4)에 의해 양의 정부호이다. $G$는 대칭이고 $(-1)^1 \det G^{[1]} = 3 > 0$, $(-1)^2 \det G = 5 > 0$이므로 실베스터 판정법의 (3)에 의해 음의 정부호이다. 양의 정부호 행렬의 (10)의 (iii)으로는 $0 < \det F$이고 $0 < \operatorname{tr} F$이므로 $F$가 양의 정부호이고, $0 < \det G$이고 $\operatorname{tr} G < 0$이므로 $G$가 음의 정부호이다. $\blacksquare$
:::

## 확인 질문

:::check[(2)의 $B$에 대하여 $q_B(x) < 0$인 $x$를 하나 찾아라.]
(2)의 완전제곱 $q_B(x) = (x_1 + 2x_2)^2 - 3x_2^2 + x_3^2$에서 $x_1 + 2x_2 = 0$, $x_3 = 0$, $x_2 \ne 0$이면 음수입니다. 예컨대 $x = (-2, 1, 0)$이면 $q_B(x) = 4 - 8 + 1 = -3$입니다. 직교 대각화의 쪽에서는 $-1$에 속하는 고유벡터 $(1, -1, 0)$에서 $q_B = 1 - 4 + 1 = -2$입니다.
:::

:::check[(3)의 $C$의 $1 \times 1$ 앞 주 소행렬만 보고 $C$가 양의 준정부호라고 할 수 있는가?]
없습니다. $\det C^{[1]} = 1 > 0$은 $q_C(e_1) = 1 > 0$을 말할 뿐이고, (3)에서 본 것처럼 $q_C(e_3) = -1$입니다. 실베스터 판정법의 (2)는 모든 $k$에서의 행렬식을 요구하고, 그것도 "양수"여야 양의 정부호라고 결론짓습니다.
:::
