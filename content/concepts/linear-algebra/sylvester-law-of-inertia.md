---
title: 실베스터 관성 법칙
title_en: Sylvester's Law of Inertia
aliases: [관성 법칙, 실베스터의 관성 법칙, 관성지수, 양의 관성지수, 음의 관성지수, Sylvester's law of inertia, index of inertia]
kind: theorem
field: linear-algebra
msc: ["15A63", "15A21"]
level: undergrad
summary: 대칭행렬 A 에 대해 이차형식이 영벡터가 아닌 모든 원소에서 양수인 부분공간의 차원의 최댓값을 A 의 양의 관성지수라 한다. 가역행렬 S 로 SᵀAS 가 대각행렬이 되면 그 양수인 대각성분의 개수는 양의 관성지수와 같고 음수인 것의 개수는 음의 관성지수와 같다. 따라서 대각화하는 방법이 달라도 양수와 음수인 대각성분의 개수는 같다.
requires: [set, finite-set, number-of-elements-is-unique, subset-of-finite-set, injective-surjective-bijective, well-ordering-principle, prime-number, real-number-arithmetic, real-order-axioms, order-properties-of-reals, power-of-a-real-number, vector-space, vector-space-basic-properties, real-function-space, finite-sum-of-vectors, standard-basis, subspace, linear-combination-and-span, linear-independence, sequences-in-a-subspace, basis, dimension, dimension-of-subspace, subspace-intersection-and-sum, concatenating-bases, linear-map, kernel-and-range, geometric-at-most-algebraic, matrix, matrix-vector-product, matrix-product, matrix-product-properties, transpose, invertible-matrix, inverse-matrix-properties, diagonalizable, inner-product-space, standard-inner-product, orthonormal-list, self-adjoint-map, orthogonal-matrix, spectral-theorem, quadratic-form, positive-definite-matrix]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 7장 3절 Sylvester's Law of Inertia 의 도입, p.206, Definition, Theorem 3.1, Lemma 3.2 와 그 증명, pp.207–208, Theorem 3.1 의 증명, p.208
    checked: original
    note: "(3)의 마지막 문장은 출처 7장 3절 도입(p.206)의 관성 법칙 '대각화 D = S*AS 의 양수(음수, 0)인 대각성분의 개수는 대각화에 상관없이 A 로 정해진다'를 실대칭행렬로, 양수와 음수의 개수만 진술한 것이다. 0 인 대각성분의 개수는 싣지 않았다. 출처는 S*AS 로 쓰고 이 항목은 SᵀAS 로 쓴다. A-양 부분공간의 정의는 출처 p.207 의 Definition('A-positive')과 같고, (3)의 앞부분은 출처 Theorem 3.1(p.207, '양수인 대각성분의 개수는 A-양 부분공간의 차원의 최댓값')과 같다. 출처는 그 최댓값에 이름을 붙이지 않는다(source-grep 으로 책 전체에서 'index of inertia' 0건, 'signature' 0건, 'inertia' 6건은 모두 절 제목과 법칙의 이름이다). '양의 관성지수'와 n₊(A) 는 이 사이트가 붙인 이름이고, 최댓값이 있다는 것((1))은 출처가 증명하지 않는다. (2)는 출처 Lemma 3.2(p.207)이다. 출처의 증명은 '표준기저를 다시 번호 매겨 양수인 대각성분이 처음 r₊ 개라고 해도 된다'고 하고(p.207) 그 처음 r₊ 개의 좌표벡터의 생성 E₊ 와 사영을 E 에 제한한 사상 T : E → E₊ 의 계수 정리로 dim E ≤ r₊ 를 얻는다(pp.207–208). 이 항목은 번호를 다시 매기지 않고 E₊ 를 '양수인 대각성분이 아닌 자리의 값이 0' 이라는 조건으로 정하고, 자리마다 비교해 그 기저를 만든다. 사상을 E 로 제한하는 대신 대각행렬 P 와 기저의 상의 일차독립을 쓴다. 출처의 Theorem 3.1 의 증명(p.208)은 S 와 S⁻¹ 이 양의 부분공간을 서로 보낸다는 것으로, 이 항목의 (3)의 증명과 같은 길이다. 출처는 음의 경우를 '−D 에 같은 논법을 쓴다'(p.208)와 '독자에게 맡긴다'(p.208)로 넘기고, 이 항목은 n₋(A) = n₊(−A) 로 정의해 (2), (3)에서 함께 증명한다. (4)는 출처 4절의 Remark(p.209, 고윳값을 구하지 않고 아무 대각화의 대각성분을 보면 된다)와 같은 발상을 거꾸로 쓴 것이다. (5)의 n₊(A) + n₋(A) ≤ n 과 정부호·준정부호·부정부호의 판정은 출처에 명제로 없다(source-grep 으로 책 전체에서 'r\\+ ?\\+ ?r' 0건, 'negative subspace' 0건, 'positive subspace' 14건과 'number of positive' 5건은 모두 7장 3절의 정리 3.1, 보조정리 3.2 와 그 증명이고, 7장 3절과 4절의 연습문제 4.1–4.6 을 처음부터 읽었다. 3절에는 연습문제가 없다). 예시 '대각성분의 크기는 달라도 부호의 개수는 같은 두 대각화'는 출처 3절 도입(p.206)의 S*DS = diag(s₁²λ₁, …, sₙ²λₙ) 와 같은 발상이고, 그 S 로 하는 대각화는 출처 7장 소절 2.2.1(pp.201–202)의 완전제곱으로 대각화하는 방법과 같은 계산이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(예의 행렬식·고유벡터·합동 대각화 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$n$이 자연수이고 $\mathbb{R}^n$에는 [[standard-inner-product|표준내적]]을 주며, $A$가 $n \times n$ [[self-adjoint-map|대칭행렬]]이라 하자. 이차형식 $q_A$는 [[quadratic-form|쌍선형 형식과 이차형식]]의 것, 양의 정부호 등의 낱말은 [[positive-definite-matrix|양의 정부호 행렬]]의 것, 부분공간과 차원은 [[subspace|부분공간]]과 [[dimension|차원]]의 것(부분공간은 제한한 연산으로 벡터공간으로 보고 그 차원을 말한다), 유한집합 $K$의 원소의 개수 $|K|$는 [[number-of-elements-is-unique|원소의 개수의 유일성]]의 것이다. 대칭행렬 $B$에 대하여 $-B$와, 가역인 $n \times n$ 행렬 $S$에 대한 $S^T B S$는 대칭행렬이다(자기수반사상과 대칭행렬의 (5), 이차형식의 (5)).

**정의.** $\mathbb{R}^n$의 부분공간 $E$가 **$A$-양**($A$-positive)인 것은 정확히 $x \in E$이고 $x \ne 0$인 모든 $x$에서 $0 < q_A(x)$일 때이다. $E$가 **$A$-음**인 것은 정확히 $x \in E$이고 $x \ne 0$인 모든 $x$에서 $q_A(x) < 0$일 때이다. 이차형식의 (3)의 $q_{-A} = -q_A$에 의해 $E$가 $A$-음인 것은 정확히 $E$가 $(-A)$-양일 때이다.

1. (관성지수) $A$-양인 부분공간의 차원 전체의 집합을 $N_+(A)$라 하자. $N_+(A)$는 정수의 집합이고 $0 \in N_+(A)$이며, 모든 원소가 $0$ 이상 $n$ 이하이다. 따라서 $N_+(A)$의 최대 원소가 있다. 이것을 $A$의 **양의 관성지수**(positive index of inertia)라 하고 $n_+(A)$로 쓴다. 곧 모든 $A$-양 부분공간 $E$에서 $\dim E \le n_+(A)$이고, $\dim E = n_+(A)$인 $A$-양 부분공간 $E$가 있다. $n_-(A) = n_+(-A)$를 $A$의 **음의 관성지수**(negative index of inertia)라 한다. 이것은 $A$-음 부분공간의 차원의 최댓값이다. $0 \le n_+(A) \le n$이고 $0 \le n_-(A) \le n$이다.
2. (대각행렬) $d_1, \dots, d_n$이 길이 $n$인 실수의 열이고 $D = \operatorname{diag}(d_1, \dots, d_n)$([[diagonalizable|대각화 가능]]의 것)이라 하자.
$0 < d_k$인 $k \in \{1, \dots, n\}$ 전체의 집합 $K_+(D)$와 $d_k < 0$인 $k \in \{1, \dots, n\}$ 전체의 집합 $K_-(D)$는 유한집합이다. $K = K_+(D)$에 대하여 $E_+ = \{x \in \mathbb{R}^n : k \notin K \text{이면 } x_k = 0\}$은 $D$-양 부분공간이고 $\dim E_+ = |K|$이며, 모든 $D$-양 부분공간 $E$에서 $\dim E \le |K|$이다. 따라서 $n_+(D) = |K_+(D)|$이고 $n_-(D) = |K_-(D)|$이다.
3. (관성 법칙) $S$가 [[invertible-matrix|가역]]인 $n \times n$ 행렬이면 $n_+(S^T A S) = n_+(A)$이고 $n_-(S^T A S) = n_-(A)$이다. 따라서 $S^T A S = D$가 대각행렬이면 $n_+(A) = |K_+(D)|$이고 $n_-(A) = |K_-(D)|$이다. 특히 $S$, $S'$이 가역인 $n \times n$ 행렬이고 $D = S^T A S$와 $D' = S'^T A S'$이 둘 다 대각행렬이면, $D$와 $D'$의 양수인 대각성분의 개수는 같고($|K_+(D)| = |K_+(D')|$), 음수인 대각성분의 개수도 같다($|K_-(D)| = |K_-(D')|$).
4. (직교 대각화) [[spectral-theorem|실스펙트럼 정리]]의 (3)에 의해 $A = Q D Q^T$인 [[orthogonal-matrix|직교행렬]] $Q$와 대각행렬 $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$이 있다. 이런 $Q$, $D$에 대하여 $Q^T A Q = D$이고, $n_+(A)$는 $0 < \lambda_k$인 $k$의 개수 $|K_+(D)|$, $n_-(A)$는 $\lambda_k < 0$인 $k$의 개수 $|K_-(D)|$이다.
5. (합과 판정) $n_+(A) + n_-(A) \le n$이다. 또 다음이 성립한다.
   - (i) $A$가 양의 정부호인 것은 정확히 $n_+(A) = n$일 때이고, 음의 정부호인 것은 정확히 $n_-(A) = n$일 때이다.
   - (ii) $A$가 양의 준정부호인 것은 정확히 $n_-(A) = 0$일 때이고, 음의 준정부호인 것은 정확히 $n_+(A) = 0$일 때이다.
   - (iii) $A$가 부정부호인 것은 정확히 $1 \le n_+(A)$이고 $1 \le n_-(A)$일 때이다.
   - (iv) $1 \le n_+(A)$인 것은 정확히 $0 < q_A(x)$인 $x \in \mathbb{R}^n$이 있을 때이다.
:::

:::english
Let $n$ be a natural number, give $\mathbb{R}^n$ the standard inner product, and let $A$ be an $n \times n$ symmetric matrix. The quadratic form $q_A$ is that of the entry on bilinear and quadratic forms, the words positive definite and so on are those of the entry on positive definite matrices, subspaces and dimension are those of the entries on subspaces and dimension (a subspace is regarded as a vector space with the restricted operations, and we speak of its dimension), and the number of elements $|K|$ of a finite set $K$ is that of the entry on the uniqueness of the number of elements. For a symmetric matrix $B$, $-B$ and, for an invertible $n \times n$ matrix $S$, $S^T B S$ are symmetric matrices (item (5) of the entry on self-adjoint maps and symmetric matrices, item (5) of the entry on quadratic forms).

**Definition.** A subspace $E$ of $\mathbb{R}^n$ is **$A$-positive** exactly when $0 < q_A(x)$ for every $x \in E$ with $x \ne 0$. $E$ is **$A$-negative** exactly when $q_A(x) < 0$ for every $x \in E$ with $x \ne 0$. By $q_{-A} = -q_A$ of item (3) of the entry on quadratic forms, $E$ is $A$-negative exactly when $E$ is $(-A)$-positive.

1. (Indices of inertia) Let $N_+(A)$ be the set of dimensions of all $A$-positive subspaces. $N_+(A)$ is a set of integers, $0 \in N_+(A)$, and all its elements are at least $0$ and at most $n$. Hence $N_+(A)$ has a largest element. It is called the **positive index of inertia** of $A$ and written $n_+(A)$. That is, $\dim E \le n_+(A)$ for every $A$-positive subspace $E$, and there is an $A$-positive subspace $E$ with $\dim E = n_+(A)$. $n_-(A) = n_+(-A)$ is called the **negative index of inertia** of $A$; it is the largest dimension of an $A$-negative subspace. $0 \le n_+(A) \le n$ and $0 \le n_-(A) \le n$.
2. (Diagonal matrices) Let $d_1, \dots, d_n$ be a sequence of real numbers of length $n$ and $D = \operatorname{diag}(d_1, \dots, d_n)$ (that of the entry on diagonalizability). The set $K_+(D)$ of all $k \in \{1, \dots, n\}$ with $0 < d_k$ and the set $K_-(D)$ of all $k \in \{1, \dots, n\}$ with $d_k < 0$ are finite. For $K = K_+(D)$, $E_+ = \{x \in \mathbb{R}^n : x_k = 0 \text{ whenever } k \notin K\}$ is a $D$-positive subspace with $\dim E_+ = |K|$, and $\dim E \le |K|$ for every $D$-positive subspace $E$. Hence $n_+(D) = |K_+(D)|$ and $n_-(D) = |K_-(D)|$.
3. (Law of inertia) If $S$ is an invertible $n \times n$ matrix, then $n_+(S^T A S) = n_+(A)$ and $n_-(S^T A S) = n_-(A)$. Hence if $S^T A S = D$ is a diagonal matrix, then $n_+(A) = |K_+(D)|$ and $n_-(A) = |K_-(D)|$. In particular, if $S$, $S'$ are invertible $n \times n$ matrices and $D = S^T A S$ and $D' = S'^T A S'$ are both diagonal, then $D$ and $D'$ have the same number of positive diagonal entries ($|K_+(D)| = |K_+(D')|$) and the same number of negative diagonal entries ($|K_-(D)| = |K_-(D')|$).
4. (Orthogonal diagonalization) By item (3) of the real spectral theorem there are an orthogonal matrix $Q$ and a diagonal matrix $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$ with $A = Q D Q^T$. For such $Q$, $D$ we have $Q^T A Q = D$, $n_+(A)$ is the number $|K_+(D)|$ of $k$ with $0 < \lambda_k$, and $n_-(A)$ is the number $|K_-(D)|$ of $k$ with $\lambda_k < 0$.
5. (Sum and criteria) $n_+(A) + n_-(A) \le n$. Moreover the following hold.
   - (i) $A$ is positive definite exactly when $n_+(A) = n$, and negative definite exactly when $n_-(A) = n$.
   - (ii) $A$ is positive semidefinite exactly when $n_-(A) = 0$, and negative semidefinite exactly when $n_+(A) = 0$.
   - (iii) $A$ is indefinite exactly when $1 \le n_+(A)$ and $1 \le n_-(A)$.
   - (iv) $1 \le n_+(A)$ exactly when there is $x \in \mathbb{R}^n$ with $0 < q_A(x)$.
:::

## 직관

이차형식을 대각행렬의 꼴로 바꾸는 방법은 여러 가지입니다. 직교행렬로 바꾸면 대각성분이 고윳값이 되고, 완전제곱을 만드는 식의 다른 가역행렬로 바꾸면 대각성분의 크기가 달라질 수 있습니다. 그래도 양수인 대각성분의 개수와 음수인 대각성분의 개수는 바뀌지 않는다는 것이 관성 법칙입니다. 지형을 어느 방향에서 재든 "올라가는 방향이 몇 개의 독립된 축으로 이루어지는가"는 바뀌지 않는다는 것과 같습니다. 비유가 정의와 맞는 곳은 "축의 개수"가 차원, 곧 $A$-양 부분공간의 차원이라는 것입니다.

그래서 증명은 개수를 대각화와 상관없는 양으로 다시 씁니다. $q_A$가 영벡터가 아닌 모든 곳에서 양수인 부분공간 가운데 가장 큰 차원 $n_+(A)$는 $A$만으로 정해지고, 변수를 $x = Sy$로 바꾸면 $A$-양 부분공간과 $S^T A S$-양 부분공간이 같은 차원끼리 짝지어집니다((3)). 대각행렬에서는 양수인 대각성분의 자리들로 만든 부분공간이 가장 큰 양의 부분공간이고, 그 차원이 양수인 대각성분의 개수입니다((2)).

$A$가 영행렬이면 $A$-양 부분공간은 $\{0\}$뿐이어서 $n_+(A) = n_-(A) = 0$입니다. $n = 1$이고 $A = \begin{pmatrix} a \end{pmatrix}$이면 $a$의 부호에 따라 $n_+(A)$와 $n_-(A)$ 가운데 하나가 $1$이거나 둘 다 $0$입니다. 대각성분이 $0$인 자리의 개수는 이 항목에서 진술하지 않습니다.

## 증명

:::idea
대각행렬 $D$에서는 양수인 대각성분의 자리에서만 $0$이 아닐 수 있는 벡터들의 부분공간 $E_+$가 $D$-양이고, 다른 $D$-양 부분공간은 그 자리들의 좌표만 남기는 사상으로 $E_+$ 안에 단사로 들어간다. 일반 $A$는 $x = Sy$로 $D = S^T A S$와 양의 부분공간을 주고받는다.
:::

:::hint
$D$-양 부분공간 $E$의 원소 $x$가 양수인 대각성분의 자리에서 모두 $0$이면 $q_D(x) = d_1 x_1^2 + \cdots + d_n x_n^2$의 남은 항은 모두 $0$ 이하입니다.
:::

:::hint
$E$가 $S^T A S$-양이면 $\{Sx : x \in E\}$는 $A$-양입니다. $q_A(Sx) = q_{S^T A S}(x)$를 보세요.
:::

:::proof
아래에서 (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것, (W1)–(W4)는 [[real-order-axioms|실수의 순서]]의 것, (B1)–(B12)는 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 것, (H0)–(H7)과 (C1)–(C6)은 [[finite-sum-of-vectors|벡터의 유한 합]]의 것, (N1)–(N4)는 [[linear-combination-and-span|일차결합과 생성]]의 것, (J1)–(J4)는 [[sequences-in-a-subspace|부분공간 안의 열]]의 것, (T1)–(T5)는 [[linear-map|선형사상]]의 것이고, 순서의 성질은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호로, 이차형식의 성질은 [[quadratic-form|쌍선형 형식과 이차형식]]의 번호로, 부분공간의 차원은 [[dimension-of-subspace|부분공간의 차원]]의 번호로, 차원은 [[dimension|차원]]의 번호로 인용한다. 실수의 제곱 $c^2$은 [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 $cc$이다. $\mathbb{R}^n$의 부분공간은 부분공간의 차원의 (1)에 의해 유한차원이고 (2)와 차원의 (4)에 의해 차원이 $n$ 이하이다.

먼저 두 사실을 준비한다.

- (가) $E$가 $\mathbb{R}^n$의 부분공간이고 $\dim E = d$이며 $B$가 $n \times n$ 행렬이고, $x \in E$이며 $Bx = 0$이면 $x = 0$이라 하자. 그러면 $\{Bx : x \in E\}$는 $\mathbb{R}^n$의 부분공간이고 그 차원은 $d$이다.
- (나) $D = \operatorname{diag}(d_1, \dots, d_n)$이고 $x \in \mathbb{R}^n$이면 이차형식의 (6)에 의해 $q_D(x) = d_1 x_1^2 + \cdots + d_n x_n^2$이다. 순서의 성질 (5)의 (iii)에 의해 모든 $x_k^2$는 $0$ 이상이다.

(가)의 증명: 차원의 (2)에 의해 $E$에 길이 $d$인 기저 $v_1, \dots, v_d$가 있고, (J4)에 의해 이 열은 $\mathbb{R}^n$에서 일차독립이고 $\operatorname{span}(v_1, \dots, v_d) = E$이다. 실수 $\alpha_1, \dots, \alpha_d$에 대하여 $\alpha_1 (Bv_1) + \cdots + \alpha_d (Bv_d) = 0$이면, [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)에 의해 $T_B$가 선형사상이므로 (T5)에 의해 $B(\alpha_1 v_1 + \cdots + \alpha_d v_d) = 0$이다. $\alpha_1 v_1 + \cdots + \alpha_d v_d \in E$이므로 가정에 의해 이것은 $0$이고, $v$의 일차독립에 의해 모든 $\alpha_i = 0$이다. 따라서 $Bv_1, \dots, Bv_d$는 일차독립이다. [[kernel-and-range|핵과 상]]의 (2)를 $T_B$에 쓰면 $\{Bx : x \in E\} = \operatorname{span}(Bv_1, \dots, Bv_d)$이고, (N1)과 부분공간의 차원의 (4)에 의해 이것은 차원이 $d$인 부분공간이다.

**(1).** $\{0\}$은 [[subspace|부분공간]]의 (P4)에 의해 부분공간이고 차원의 (3)에 의해 차원이 $0$이며, 영벡터가 아닌 원소가 없으므로 $A$-양이다. 따라서 $0 \in N_+(A)$이다. 모든 부분공간의 차원은 $0$ 이상 $n$ 이하인 정수이므로 $N_+(A)$는 공집합이 아니고 위로 유계인 정수의 집합이고, [[well-ordering-principle|정렬 원리]]의 (4)에 의해 최대 원소가 있다. 최대 원소의 정의에 의해 그것은 $N_+(A)$의 원소이고 모든 원소 이상이다. $-A$는 대칭이므로 $n_+(-A)$도 정해지고, $A$-음 부분공간은 정확히 $(-A)$-양 부분공간이므로 $n_-(A)$는 $A$-음 부분공간의 차원의 최댓값이다. 범위는 위의 $0 \le \dim E \le n$에서 나온다.

**(2).** $\{1, \dots, n\}$은 [[finite-set|유한집합]]의 (F2)에 의해 원소를 $n$개 갖고, [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 그 부분집합 $K_+(D)$, $K_-(D)$는 유한집합이다. $K = K_+(D)$, $p = |K|$라 하자. 유한집합의 정의에 의해 전단사 $\tau : \{1, \dots, p\} \to K$가 있다($p = 0$이면 빈 함수이다). $i \in \{1, \dots, p\}$에 대하여 $b_i = e_{\tau(i)}$([[standard-basis|표준기저]]의 원소)로 두자.

$E_+ = \operatorname{span}(b_1, \dots, b_p)$이다. 먼저 각 $b_i$는 $E_+$의 원소이다. $b_i$의 $k$에서의 값은 $k = \tau(i)$일 때만 $1$이고 $\tau(i) \in K$이므로, $k \notin K$이면 $0$이다. $E_+$는 $\mathbb{R}^n$의 부분공간이다. $0$은 모든 자리의 값이 $0$이고, $x, y \in E_+$이고 $\alpha$가 실수이면 $k \notin K$에서 $(x + y)_k = 0 + 0 = 0$, $(\alpha x)_k = \alpha \cdot 0 = 0$이기 때문이다([[real-function-space|실숫값 함수의 공간]]의 연산, (K4), (K9)). 따라서 (N3)에 의해 $\operatorname{span}(b_1, \dots, b_p) \subseteq E_+$이다. 거꾸로 $x \in E_+$이고 $y = x_{\tau(1)} b_1 + \cdots + x_{\tau(p)} b_p$라 하자. $j \in \{1, \dots, n\}$에서 표준기저의 (1)에 의해 $y_j$는 $i$번째 항이 $x_{\tau(i)} (b_i)_j$인 열의 합이다. $j \in K$이면 $\tau$가 전단사이므로 $\tau(i_0) = j$인 $i_0$이 정확히 하나 있고, $i \ne i_0$이면 $\tau(i) \ne j$이어서 $i$번째 항은 $0$이다((K9)). (H7)에 의해 $y_j = x_{\tau(i_0)} \cdot 1 = x_j$이다. $j \notin K$이면 모든 $i$에서 $\tau(i) \ne j$이므로 모든 항이 $0$이고, (H5)에 의해 $y_j = 0 = x_j$이다. 따라서 $x = y \in \operatorname{span}(b_1, \dots, b_p)$이다.

$b_1, \dots, b_p$는 일차독립이다. $\tau$가 단사이므로 $i \ne i'$이면 $\tau(i) \ne \tau(i')$이고, [[standard-inner-product|표준내적]]의 (2)에 의해 $\langle b_i, b_{i'} \rangle$는 $i = i'$일 때 $1$, $i \ne i'$일 때 $0$이다. 곧 이 열은 [[orthonormal-list|정규직교 열]]이고, 그 항목의 (2)에 의해 일차독립이다. 부분공간의 차원의 (4)에 의해 $\dim E_+ = p$이다.

$E_+$는 $D$-양이다. $x \in E_+$이고 $x \ne 0$이라 하자. (나)의 합의 $k$번째 항 $d_k x_k^2$은 $k \in K$이면 $0 < d_k$이므로 순서의 성질 (4)의 (iv)에 의해 $0$ 이상이고, $k \notin K$이면 $x_k = 0$이므로 $0$이다((K9)). $x \ne 0$이므로 $x_j \ne 0$인 $j$가 있고, $j \notin K$이면 $x_j = 0$이므로 $j \in K$이다. 순서의 성질 (5)의 (i)과 (W4)에 의해 $0 < d_j x_j^2$이다. [[geometric-at-most-algebraic|기하적 중복도는 대수적 중복도 이하]]의 (1)을 모든 항이 $0$인 열(합은 (H5)에 의해 $0$)과 이 열에 쓰면 $0 \le q_D(x)$이고, $q_D(x) = 0$이면 같은 (1)에 의해 $d_j x_j^2 = 0$이 되어 순서의 성질 (1)의 (i)에 어긋난다. 따라서 $0 < q_D(x)$이다.

$D$-양 부분공간 $E$는 $\dim E \le p$이다. 각 $k$에 실수($k \in K$이면 $1$, 아니면 $0$) $c_k$가 정해지므로 (G)에 의해 길이 $n$인 열 $c$가 있고, $P = \operatorname{diag}(c_1, \dots, c_n)$이라 하자. [[diagonalizable|대각화 가능]]의 (2)에 의해 $(Px)_k = c_k x_k$이므로 $k \notin K$이면 $(Px)_k = 0$, 곧 모든 $x$에서 $Px \in E_+$이다. $x \in E$이고 $Px = 0$이라 하자. $k \in K$이면 $x_k = 1 \cdot x_k = (Px)_k = 0$이다. 따라서 (나)의 합의 항은 $k \in K$이면 $0$이고, $k \notin K$이면 순서의 성질 (1)의 (iii)에 의해 $d_k \le 0$이므로 순서의 성질 (4)의 (iv)와 (K1)에 의해 $d_k x_k^2 \le 0$이다. 기하적 중복도는 대수적 중복도 이하의 (1)에 의해 $q_D(x) \le 0$이다. $x \ne 0$이면 $E$가 $D$-양이므로 $0 < q_D(x)$가 되어 순서의 성질 (1)의 (i)에 어긋나므로 $x = 0$이다. (가)를 $B = P$에 쓰면 $F = \{Px : x \in E\}$는 차원이 $\dim E$인 부분공간이고 $F \subseteq E_+$이다. 부분공간의 차원의 (5)에 의해 $\dim E = \dim F \le \dim E_+ = p$이다.

앞의 두 문단에 의해 $p \in N_+(D)$이고 $N_+(D)$의 모든 원소는 $p$ 이하이므로 $n_+(D) = p = |K_+(D)|$이다. [[matrix|행렬]]의 (1)과 (K9)에 의해 $-D = \operatorname{diag}(-d_1, \dots, -d_n)$이고, 순서의 성질 (3)의 (ii)에 의해 $0 < -d_k$인 것은 정확히 $d_k < 0$일 때이므로 $K_+(-D) = K_-(D)$이다. 따라서 $n_-(D) = n_+(-D) = |K_+(-D)| = |K_-(D)|$이다.

**(3).** $B$가 대칭행렬이고 $S$가 가역이면 $n_+(B) \le n_+(S^T B S)$임을 먼저 보인다. $C = S^T B S$라 하자. (1)에 의해 $\dim F = n_+(B)$인 $B$-양 부분공간 $F$가 있다. [[inverse-matrix-properties|역행렬의 성질]]의 (2)에 의해 $S^{-1}$은 가역이고, $x \in F$이며 $S^{-1}x = 0$이면 $x = (SS^{-1})x = S(S^{-1}x) = 0$이다([[matrix-product|행렬의 곱]]의 (1), 행렬과 벡터의 곱의 (3), (T1)). (가)에 의해 $G = \{S^{-1}x : x \in F\}$는 차원이 $n_+(B)$인 부분공간이다. $y \in G$이고 $y \ne 0$이면 $y = S^{-1}x$인 $x \in F$가 있고, $x = Sy$이며(같은 계산) $x = 0$이면 $y = S^{-1}0 = 0$이므로 $x \ne 0$이다. 이차형식의 (5)에 의해 $q_C(y) = q_B(Sy) = q_B(x) > 0$이다. 따라서 $G$는 $C$-양이고 $n_+(B) = \dim G \le n_+(C)$이다.

이것을 $B = A$에 쓰면 $n_+(A) \le n_+(S^T A S)$이다. 또 [[transpose|전치행렬]]의 (4), [[matrix-product-properties|행렬 곱의 성질]]의 (1), (4)에 의해 $(S^{-1})^T (S^T A S) S^{-1} = (S S^{-1})^T A (S S^{-1}) = I_n^T A I_n = A$이므로(전치행렬의 (3)), $B = S^T A S$와 가역행렬 $S^{-1}$에 쓰면 $n_+(S^T A S) \le n_+(A)$이다. 정렬 원리의 (L2)에 의해 $n_+(S^T A S) = n_+(A)$이다. 행렬 곱의 성질의 (3)과 (B5)에 의해 $-(S^T A S) = S^T(-A)S$이므로, 같은 결과를 $-A$에 쓰면 $n_-(S^T A S) = n_+(S^T(-A)S) = n_+(-A) = n_-(A)$이다.

$S^T A S = D$가 대각행렬이면 [[diagonalizable|대각화 가능]]의 (1)에 의해 $D = \operatorname{diag}(d_{1,1}, \dots, d_{n,n})$이고 (2)에 의해 $n_+(A) = n_+(D) = |K_+(D)|$, $n_-(A) = |K_-(D)|$이다. $D' = S'^T A S'$도 대각행렬이면 같은 이유로 $|K_+(D')| = n_+(A) = |K_+(D)|$이고 음수의 개수도 같다.

**(4).** 직교행렬의 (2)의 (가), (다)에 의해 $Q$는 가역이고 $Q^T Q = I_n$이므로 행렬 곱의 성질의 (1), (4)에 의해 $Q^T A Q = (Q^T Q) D (Q^T Q) = D$이다. (3)을 $S = Q$에 쓴다.

**(5).** 합: (1)에 의해 $\dim E = n_+(A)$인 $A$-양 부분공간 $E$와 $\dim F = n_-(A)$인 $A$-음 부분공간 $F$가 있다. $x \in E \cap F$이고 $x \ne 0$이면 $0 < q_A(x)$이고 $q_A(x) < 0$이어서 순서의 성질 (1)의 (i)에 어긋나므로 $E \cap F = \{0\}$이다. [[concatenating-bases|기저 이어 붙이기]]의 (1)의 (iv)에 의해 $\dim(E + F) = n_+(A) + n_-(A)$이고, [[subspace-intersection-and-sum|부분공간의 교집합과 합]]의 (2)에 의해 $E + F$는 $\mathbb{R}^n$의 부분공간이므로 이 값은 $n$ 이하이다.

(iv) $1 \le n_+(A)$이면 $\dim E = n_+(A)$인 $A$-양 부분공간 $E$는 차원의 (3)에 의해 $\{0\}$이 아니므로 영벡터가 아닌 $x \in E$가 있고 $0 < q_A(x)$이다. 거꾸로 $0 < q_A(x)$이면 이차형식의 (3)에 의해 $x \ne 0$이고, [[linear-independence|일차독립]]의 (I4)와 부분공간의 차원의 (4)에 의해 $\operatorname{span}(x)$는 차원이 $1$인 부분공간이다. 그 원소는 (N4)에 의해 $cx$ 꼴이고, $cx \ne 0$이면 (B3)에 의해 $c \ne 0$이므로 이차형식의 (3), 순서의 성질 (5)의 (i), (W4)에 의해 $q_A(cx) = c^2 q_A(x) > 0$이다. 따라서 $\operatorname{span}(x)$는 $A$-양이고 $1 \le n_+(A)$이다.

(ii) $A$가 음의 준정부호인 것은 정확히 $0 < q_A(x)$인 $x$가 없을 때이고(순서의 성질 (1)의 (iii)), (iv)에 의해 이것은 정확히 "$1 \le n_+(A)$"가 아닐 때, 곧 $n_+(A)$가 $0$ 이상의 정수이므로 $n_+(A) = 0$일 때이다([[well-ordering-principle|정렬 원리]]의 (Z5)와 [[prime-number|소수]]의 (Z1)). [[positive-definite-matrix|양의 정부호 행렬]]의 (2)의 (ii)에 의해 $A$가 양의 준정부호인 것은 정확히 $-A$가 음의 준정부호일 때, 곧 $n_+(-A) = n_-(A) = 0$일 때이다.

(i) $A$가 양의 정부호이면 $\mathbb{R}^n$ 자신이 $A$-양 부분공간이고 차원의 (4)에 의해 $\dim \mathbb{R}^n = n$이므로 $n \le n_+(A) \le n$이고, (L2)에 의해 $n_+(A) = n$이다. 거꾸로 $n_+(A) = n$이면 $\dim E = n$인 $A$-양 부분공간 $E$가 있고, 부분공간의 차원의 (3)에 의해 $E = \mathbb{R}^n$이므로 $A$는 양의 정부호이다. 음의 정부호는 양의 정부호 행렬의 (2)의 (ii)에 의해 $-A$에 쓴다.

(iii) 양의 정부호 행렬의 (2)의 (iii)에 의해 $A$가 부정부호인 것은 정확히 양의 준정부호도 음의 준정부호도 아닐 때이고, (ii)에 의해 이것은 정확히 $n_-(A) \ne 0$이고 $n_+(A) \ne 0$일 때, 곧 (Z5), (Z1)에 의해 둘 다 $1$ 이상일 때이다. $\blacksquare$
:::

## 예시와 반례

:::example[대각성분의 크기는 달라도 부호의 개수는 같은 두 대각화]
$$
A = \begin{pmatrix} 1 & 3 \\ 3 & 1 \end{pmatrix}, \quad
S = \begin{pmatrix} 1 & -3 \\ 0 & 1 \end{pmatrix}
$$
이라 합시다. $AS = \begin{pmatrix} 1 & 0 \\ 3 & -8 \end{pmatrix}$이고 $S^T A S = \begin{pmatrix} 1 & 0 \\ -3 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 3 & -8 \end{pmatrix} = \operatorname{diag}(1, -8)$입니다. 이것은 $q_A(x) = x_1^2 + 6x_1 x_2 + x_2^2 = (x_1 + 3x_2)^2 - 8x_2^2$이라는 완전제곱에 해당합니다. 한편 $A(1, 1) = 4(1, 1)$, $A(1, -1) = -2(1, -1)$이므로 $Q = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$로 $Q^T A Q = \operatorname{diag}(4, -2)$입니다. 두 대각화의 대각성분 $1, -8$과 $4, -2$는 다르지만 양수와 음수가 하나씩인 것은 같고, (3)에 의해 $n_+(A) = n_-(A) = 1$입니다.
:::

:::example[양의 부분공간이 하나로 정해지지 않을 수 있는 예]
위의 $A$에서 $\operatorname{span}(e_1)$은 $q_A(ce_1) = c^2 > 0$ ($c \ne 0$)이므로 $A$-양이고, $\operatorname{span}((1, 1))$도 $q_A(c(1, 1)) = 8c^2 > 0$이므로 $A$-양입니다. 두 부분공간은 다르지만 둘 다 차원이 $n_+(A) = 1$입니다. 관성 법칙이 말하는 것은 가장 큰 양의 부분공간의 차원이고, 그 부분공간 자체가 아닙니다.
:::

:::counterexample[양수인 값이 있어도 양의 부분공간이 아닐 수 있는 예]
$q_A$가 어떤 원소에서 양수라고 그 원소를 포함한 부분공간이 $A$-양인 것은 아닙니다. 위의 $A$에서 $\mathbb{R}^2$ 전체는 $q_A(e_1) = 1 > 0$인 원소를 갖지만, $q_A((1, -1)) = 1 - 6 + 1 = -4 < 0$이므로 $A$-양이 아닙니다. 그래서 $n_+(A)$는 $2$가 아니라 $1$입니다.
:::

## 확인 질문

:::check[$D = \operatorname{diag}(3, 0, -1, 2)$의 $n_+(D)$, $n_-(D)$는 무엇이고, (2)의 $E_+$는 어떤 부분공간인가?]
$K_+(D) = \{1, 4\}$이고 $K_-(D) = \{3\}$이므로 (2)에 의해 $n_+(D) = 2$, $n_-(D) = 1$입니다. $E_+$는 둘째와 셋째 자리의 값이 $0$인 원소 전체, 곧 $\operatorname{span}(e_1, e_4)$이고, 그 원소 $x$에서 $q_D(x) = 3x_1^2 + 2x_4^2$입니다. $n_+(D) + n_-(D) = 3 \le 4$이고, 대각성분 $0$의 자리 하나가 남습니다.
:::

:::check[대칭행렬 $A$를 어떤 가역행렬 $S$로 $S^T A S = \operatorname{diag}(2, 5, -1)$로 만들었다면, $A$를 직교 대각화한 $D = \operatorname{diag}(\lambda_1, \lambda_2, \lambda_3)$에 대해 무엇을 말할 수 있는가?]
(3)에 의해 $n_+(A) = 2$, $n_-(A) = 1$이고, (4)에 의해 $\lambda_1, \lambda_2, \lambda_3$ 가운데 양수인 자리가 정확히 두 개, 음수인 자리가 정확히 하나입니다. 고윳값의 크기는 $2, 5, -1$과 같을 필요가 없습니다. (5)의 (iii)에 의해 $A$는 부정부호입니다.
:::
