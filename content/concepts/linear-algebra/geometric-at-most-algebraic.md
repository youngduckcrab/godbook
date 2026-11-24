---
title: 기하적 중복도는 대수적 중복도 이하
title_en: Geometric Multiplicity Is at Most Algebraic Multiplicity
aliases: [기하적 중복도와 대수적 중복도의 비교, 중복도의 부등식, geometric multiplicity at most algebraic multiplicity]
kind: theorem
field: linear-algebra
msc: ["15A18"]
level: undergrad
summary: 모든 정사각행렬과 모든 실수 λ 에서 λ 의 기하적 중복도는 대수적 중복도 이하이다. 따라서 서로 다른 실수들의 기하적 중복도의 합은 대수적 중복도의 합 이하이고 그것은 n 이하이며, 기하적 중복도의 합이 n 이면 각 수에서 두 중복도가 같다. 길이가 같은 두 실수의 열의 합을 항마다 비교하는 보조 사실도 함께 증명한다.
requires: [function, real-number-arithmetic, prime-number, well-ordering-principle, mathematical-induction, real-order-axioms, order-properties-of-reals, vector-space, vector-space-basic-properties, subspace, finite-sum-of-vectors, linear-combination-and-span, linear-independence, standard-basis, linear-map, matrix, matrix-vector-product, dimension, sequences-in-a-subspace, dimension-of-subspace, extension-to-a-basis, eigenvalue-and-eigenvector, matrix-in-bases, eigenvalue-examples, determinant-with-leading-columns, power-of-a-real-number, polynomial-function, product-of-polynomial-functions, roots-of-polynomial-function, multiplicity-of-a-root, characteristic-polynomial, eigenvalue-iff-root, characteristic-polynomial-of-triangular, algebraic-multiplicity]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "4장 1절 Main definitions, 1.5 Multiplicities of eigenvalues, Proposition 1.1, p.103; 4장 1절 연습문제 1.7–1.9, p.105; 4장 2절 Diagonalization, 2.5 Criterion of diagonalizability, Theorem 2.8 의 증명, pp.111–112; 2.7.3 A non-diagonalizable matrix, p.113; 4장 2절 연습문제 2.6, 2.7, 2.10, pp.114–115"
    checked: original
    note: "출처 4장 1.5 의 Proposition 1.1(p.103)은 고윳값의 기하적 중복도가 대수적 중복도를 넘지 않는다고 적고, 증명을 연습문제 1.9(p.105)로 돌린다. 연습문제 1.9 는 1.7(블록 삼각행렬의 특성다항식이 두 대각 블록의 특성다항식의 곱이다)과 1.8(기저의 처음 k 개 벡터가 고윳값 λ 의 고유벡터이면 그 기저에 관한 행렬은 왼쪽 위가 λI_k 인 블록 삼각 꼴이다)을 써서 보이라고 한다. 이 항목의 (2)의 증명은 이 두 단계를 따르되, 블록 삼각행렬 일반 대신 처음 g 개 열이 λe_k 인 꼴만 다루는 determinant-with-leading-columns 의 (3)을 쓴다. (1)은 이 강의가 Σ 없이 합을 다루므로 (3)의 증명에 쓰려고 둔 보조 사실이다. (3)과 관련해 출처 Theorem 2.8 의 증명(pp.111–112)은 고유공간들의 기저를 이어 붙인 열의 길이가 중복도의 합이고 그것이 n 이라고 적는데, 여기서는 두 중복도가 같다는 가정 아래에서다. (4)는 이 항목의 (2)와 algebraic-multiplicity 의 (1)을 합친 것이다. 예시 '기하적 중복도가 대수적 중복도보다 작은 행렬 N'의 N 과 그 두 중복도는 출처 4장 2.7.3(p.113)의 것과 같다. 예시 '같은 고윳값에서 두 중복도가 같은 3 × 3 행렬과 다른 3 × 3 행렬'의 두 위삼각행렬은 출처 4장 2절 연습문제 2.6, 2.7(pp.114–115)이 고윳값 2 를 두 번 갖는 3 × 3 위삼각행렬의 대각화를 묻는 것과 대상이 닮았다. 확인 질문 '$3 \\times 3$ 행렬 $A$에 서로 다른 고윳값 $1$, $2$, $3$이 있으면 각 고윳값의 두 중복도는 무엇인가?' 는 출처 Corollary 2.3(p.109)이 서로 다른 고윳값이 n 개이면 대각화 가능하다고 적는 것과 대상이 닮았다. 확인 질문 '서로 다른 고윳값 $\\mu_1, \\dots, \\mu_r$의 기하적 중복도의 합이 $n$이고 $\\mu_1$의 대수적 중복도가 $2$이면 $\\mu_1$의 기하적 중복도는 무엇인가?' 는 출처 연습문제 2.10(p.115)이 고유공간 하나의 차원을 주고 대각화를 묻는 것과 대상이 닮았다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인(새로 쓴 증명 통독, 예의 수치 확인). 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
대수적 중복도와 기하적 중복도는 [[algebraic-multiplicity|고윳값의 대수적 중복도와 기하적 중복도]]의 것이고, 고윳값과 고유공간은 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 것이며, 실수의 열과 그 합 $a_1 + \cdots + a_r$은 [[finite-sum-of-vectors|벡터의 유한 합]]을 $\mathbb{R}$에 쓴 것이고, 순서 $\le$, $<$는 [[real-order-axioms|실수의 순서]]의 것이다. 정수의 순서와 합은 실수로서의 것과 같다([[order-properties-of-reals|실수의 순서의 성질]]의 (10)).

1. (항마다 비교한 합) $r \ge 0$이 정수이고 $a_1, \dots, a_r$과 $b_1, \dots, b_r$이 길이 $r$인 실수의 열이며 모든 $k \in \{1, \dots, r\}$에서 $a_k \le b_k$라 하자. 그러면 $a_1 + \cdots + a_r \le b_1 + \cdots + b_r$이다. 또 $a_1 + \cdots + a_r = b_1 + \cdots + b_r$이면 모든 $k$에서 $a_k = b_k$이다.

$n$이 자연수이고 $A$가 $n \times n$ [[matrix|행렬]]이라 하자. 또 $V$가 유한차원 [[vector-space|벡터공간]]이고 $\dim V = n$이며 $T : V \to V$가 [[linear-map|선형사상]]이라 하자.

2. (기하적 중복도 $\le$ 대수적 중복도) 모든 실수 $\lambda$에서 $T$에서 $\lambda$의 기하적 중복도는 $T$에서 $\lambda$의 대수적 중복도 이하이다. 모든 실수 $\lambda$에서 $A$에서 $\lambda$의 기하적 중복도는 $A$에서 $\lambda$의 대수적 중복도 이하이다.
3. (중복도의 합) $r \ge 0$이 정수이고 $\mu_1, \dots, \mu_r$이 서로 다른 실수의 열([[roots-of-polynomial-function|다항함수의 근의 개수]]의 뜻)이며, $g_j$와 $m_j$가 $A$에서 $\mu_j$의 기하적 중복도와 대수적 중복도라 하자. 그러면
   $$
   \begin{aligned}
   &g_1 + \cdots + g_r \\
   &\quad \le m_1 + \cdots + m_r \le n
   \end{aligned}
   $$
   이다. $g_1 + \cdots + g_r = n$이면 모든 $j$에서 $g_j = m_j$이고 $m_1 + \cdots + m_r = n$이다. $A$를 $T$로 바꾸어도 같다.
4. (대수적 중복도가 $1$인 고윳값) $\lambda$가 $A$의 고윳값이고 $A$에서 $\lambda$의 대수적 중복도가 $1$이면 기하적 중복도도 $1$이다. $A$를 $T$로 바꾸어도 같다.
:::

:::english
The algebraic and geometric multiplicities are those of the entry on the algebraic and geometric multiplicity of an eigenvalue, eigenvalues and eigenspaces are those of the entry on eigenvalues and eigenvectors, sequences of real numbers and their sums $a_1 + \cdots + a_r$ are those of the entry on finite sums of vectors applied to $\mathbb{R}$, and the order $\le$, $<$ is that of the order axioms of the reals. The order and sums of integers agree with those as real numbers ((10) of the entry on order properties of the reals).

1. (Comparing sums term by term) Let $r \ge 0$ be an integer, let $a_1, \dots, a_r$ and $b_1, \dots, b_r$ be sequences of real numbers of length $r$, and suppose $a_k \le b_k$ for every $k \in \{1, \dots, r\}$. Then $a_1 + \cdots + a_r \le b_1 + \cdots + b_r$. Moreover, if $a_1 + \cdots + a_r = b_1 + \cdots + b_r$, then $a_k = b_k$ for every $k$.

Let $n$ be a natural number and let $A$ be an $n \times n$ matrix. Also let $V$ be a finite-dimensional vector space with $\dim V = n$ and let $T : V \to V$ be a linear map.

2. (Geometric multiplicity $\le$ algebraic multiplicity) For every real number $\lambda$, the geometric multiplicity of $\lambda$ in $T$ is at most the algebraic multiplicity of $\lambda$ in $T$. For every real number $\lambda$, the geometric multiplicity of $\lambda$ in $A$ is at most the algebraic multiplicity of $\lambda$ in $A$.
3. (Sums of multiplicities) Let $r \ge 0$ be an integer, let $\mu_1, \dots, \mu_r$ be a sequence of distinct real numbers (in the sense of the entry on the number of roots of a polynomial function), and let $g_j$ and $m_j$ be the geometric and algebraic multiplicities of $\mu_j$ in $A$. Then
   $$
   \begin{aligned}
   &g_1 + \cdots + g_r \\
   &\quad \le m_1 + \cdots + m_r \le n.
   \end{aligned}
   $$
   If $g_1 + \cdots + g_r = n$, then $g_j = m_j$ for every $j$ and $m_1 + \cdots + m_r = n$. The same holds with $A$ replaced by $T$.
4. (Eigenvalues of algebraic multiplicity $1$) If $\lambda$ is an eigenvalue of $A$ and the algebraic multiplicity of $\lambda$ in $A$ is $1$, then the geometric multiplicity is also $1$. The same holds with $A$ replaced by $T$.
:::

## 직관

기하적 중복도가 $g$라는 것은 $\lambda$배가 되는 방향이 $g$개 독립으로 있다는 것입니다. 그 $g$개의 벡터로 기저를 시작하면, 그 기저에 관한 행렬의 처음 $g$개의 열은 $\lambda e_1, \dots, \lambda e_g$가 됩니다. 이런 행렬에서 대각선의 $x$를 빼고 행렬식을 구하면 $(\lambda - x)$가 적어도 $g$번 곱해져 나옵니다. 그래서 특성다항식에 인수 $t - \lambda$가 적어도 $g$번 들어 있고, 대수적 중복도는 $g$ 이상입니다.

거꾸로는 성립하지 않을 수 있습니다. 특성다항식에 $t - \lambda$가 두 번 들어 있어도 $\lambda$배가 되는 방향은 한 직선뿐일 수 있습니다. $N = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$이 그런 예입니다. 창고의 재고 목록(대수적 중복도)에 상자가 두 개라고 적혀 있어도 실제로 꺼내 쓸 수 있는 상자(기하적 중복도)는 하나뿐일 수 있지만, 목록에 없는 상자를 꺼낼 수는 없는 것과 비슷합니다. 비유가 맞는 것은 "실제의 것이 목록의 것을 넘지 않는다"는 데까지이고, 중복도는 상자처럼 하나씩 셀 수 있는 물건이 아닙니다.

(3)은 이것을 여러 고윳값에 대해 더한 것입니다. 기하적 중복도의 합이 공간의 차원 $n$에 닿으면, 대수적 중복도의 합은 그보다 작을 수도 $n$보다 클 수도 없으므로 둘 다 $n$이고, 각 고윳값에서 두 중복도가 같아야 합니다. 이 마지막 단계에 쓰는 것이 (1)입니다. 항마다 $a_k \le b_k$인데 합이 같으면, 한 항이라도 $a_k < b_k$이면 합이 진짜로 작아지므로 모든 항이 같아야 합니다.

## 증명

:::idea
고유공간의 기저를 공간 전체의 기저로 늘리면, 그 기저에 관한 행렬의 처음 $g$개 열이 $\lambda e_k$이다. 그 행렬의 특성다항식에서 $(t - \lambda)^g$를 떼어 낼 수 있으므로 중복도는 $g$ 이상이다.
:::

:::hint
$g \ge 1$이면 고유공간의 기저 $v_1, \dots, v_g$를 $V$의 기저 $\mathcal{B}$로 늘려 보라. $[T]_{\mathcal{B}}$의 $k$번째 열($k \le g$)은 무엇인가?
:::

:::hint
처음 몇 열이 $\lambda e_k$인 행렬 $B$에 대하여 $\det(B - xI_n)$은 3단원에서 이미 계산했다. $(\lambda - x)^g$를 $(x - \lambda)^g$로 바꾸면 부호가 어떻게 되는가?
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 것이고, (Z…)는 [[prime-number]]와 [[well-ordering-principle]]의 것이며, 실수의 순서의 성질의 번호는 [[order-properties-of-reals]]의 것이다. 대수적 중복도와 기하적 중복도는 $0$ 이상인 정수이다.

**(1)의 증명.** 첫 문장을 $r$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로 보인다. $r = 0$이면 두 합은 빈 열의 합이므로 둘 다 $0$이고 $0 \le 0$이다. 길이 $r$에서 성립한다고 하고 길이 $r + 1$인 두 열이 항마다 $a_k \le b_k$를 만족한다고 하자. [[finite-sum-of-vectors|벡터의 유한 합]]의 (H6)을 $k = r + 1$에 쓰면 $a_1 + \cdots + a_{r+1} = (a_1 + \cdots + a_r) + a_{r+1}$이고 $b$도 같다. 처음 $r$개의 두 열도 항마다 $\le$이므로 귀납 가정에 의해 $a_1 + \cdots + a_r \le b_1 + \cdots + b_r$이고, $a_{r+1} \le b_{r+1}$이므로 실수의 순서의 성질의 (2)의 (iii)에 의해 $a_1 + \cdots + a_{r+1} \le b_1 + \cdots + b_{r+1}$이다.

둘째 문장. 두 합이 같다고 하자. 어떤 $j$에서 $a_j < b_j$라 가정하면, (H6)을 $k = j$에 써서 $j$번째 항을 지운 두 열 $a'$, $b'$(길이 $r - 1$)에 대하여 $a_1 + \cdots + a_r = (a'_1 + \cdots + a'_{r-1}) + a_j$이고 $b$도 같다. $a'$과 $b'$은 항마다 $\le$이므로 첫 문장에 의해 $a'$의 합은 $b'$의 합 이하이고, $a_j < b_j$이므로 실수의 순서의 성질의 (2)의 (iv)와 (K1)에 의해 $a_1 + \cdots + a_r < b_1 + \cdots + b_r$이다. 이것은 두 합이 같다는 것과 실수의 순서의 성질의 (1)의 (i)에 의해 함께 성립하지 않는다. 따라서 어떤 $k$에서도 $a_k < b_k$가 아니고, $a_k \le b_k$는 $a_k < b_k$이거나 $a_k = b_k$라는 뜻이므로 모든 $k$에서 $a_k = b_k$이다.

**(2)의 증명.** $\lambda$를 실수라 하고 $E = \operatorname{Ker}(T - \lambda\, i_V)$, $g = \dim E$로 두자. $m$을 $T$에서 $\lambda$의 대수적 중복도라 하자. $g = 0$이면 $0 \le m$이므로 $g \le m$이다.

$g \ge 1$이라 하자. 기하적 중복도의 정의에 의해 벡터공간 $E$에는 길이 $g$인 기저 $v_1, \dots, v_g$가 있다([[dimension|유한차원과 차원]]의 (2)). [[sequences-in-a-subspace|부분공간 안의 열]]의 (J4)에 의해 이 열은 $V$에서 [[linear-independence|일차독립]]이다. [[extension-to-a-basis|기저로 늘리기]]의 (2)에 의해 $g \le n$이고 길이 $n - g$인 열 $x_1, \dots, x_{n-g}$가 있어 두 열을 이어 붙인 열 $\mathcal{B} = b_1, \dots, b_n$($k \le g$이면 $b_k = v_k$)이 $V$의 기저이다. $B = [T]_{\mathcal{B}}$로 두면 $B$는 [[matrix-in-bases|기저에 관한 선형사상의 행렬]]의 $n \times n$ 행렬이다.

$k \in \{1, \dots, g\}$라 하자. $b_k \in E$이므로 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (1)에 의해 $Tb_k = \lambda b_k$이다. 기저에 관한 선형사상의 행렬의 (2)에 의해 $B$의 $k$번째 열은 $[Tb_k]_{\mathcal{B}} = [\lambda b_k]_{\mathcal{B}}$이고, 같은 항목의 (1)에 의해 이것은 $\lambda [b_k]_{\mathcal{B}} = \lambda e_k$이다. 따라서 [[determinant-with-leading-columns|처음 몇 열이 정해진 행렬의 행렬식]]의 (3)을 쓸 수 있다.

[[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 $p_T$의 정의에 의해 $p_T = p_B$이다. 실수 $x$에서 (K9)와 (K12)에 의해 $\lambda - x = (-1)(x - \lambda)$이므로 [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iii)에 의해 $(\lambda - x)^g = (-1)^g (x - \lambda)^g$이다.

- $g < n$이면 처음 몇 열이 정해진 행렬의 행렬식의 (3)의 $B'$에 대하여 $p_B(x) = (\lambda - x)^g \det(B' - xI_{n-g}) = (\lambda - x)^g p_{B'}(x)$이다. $h = (-1)^g p_{B'}$으로 두면, [[characteristic-polynomial|특성다항식]]의 (1)과 [[polynomial-function|다항함수]]의 (1)에 의해 $h$는 다항함수이고, (K1), (K2)에 의해 $p_B(x) = (x - \lambda)^g h(x)$이다.
- $g = n$이면 같은 (3)에 의해 $p_B(x) = (\lambda - x)^n = (-1)^n (x - \lambda)^n$이다. $h = (-1)^n t^0$으로 두면 $h$는 다항함수이고 $p_B(x) = (x - \lambda)^g h(x)$이다.

어느 경우든 [[product-of-polynomial-functions|다항함수의 곱]]에서 정한 곱과 거듭제곱의 값에 의해 $(x - \lambda)^g h(x)$는 함수 $(t - \lambda)^g h$의 $x$에서의 값이다. 모든 $x$에서 값이 같으므로 $p_T = p_B = (t - \lambda)^g h$이다. [[multiplicity-of-a-root|근의 중복도]]의 (2)의 마지막 문장을 $f = p_T$, $k = g$에 쓰면 $g \le m$이다.

행렬 $A$에 대해서는, 고윳값의 대수적 중복도와 기하적 중복도의 (6)의 (i)에 의해 $A$에서 $\lambda$의 두 중복도는 $T_A : \mathbb{R}^n \to \mathbb{R}^n$에서의 것과 같고, 유한차원과 차원의 (4)에 의해 $\dim \mathbb{R}^n = n$이므로 앞의 결론을 $V = \mathbb{R}^n$, $T = T_A$에 쓰면 된다.

**(3)의 증명.** (2)에 의해 모든 $j$에서 $g_j \le m_j$이므로 (1)에 의해 $g_1 + \cdots + g_r \le m_1 + \cdots + m_r$이다. 고윳값의 대수적 중복도와 기하적 중복도의 (3)에 의해 $m_1 + \cdots + m_r \le n$이다. $g_1 + \cdots + g_r = n$이면 $n \le m_1 + \cdots + m_r \le n$이므로 실수의 순서의 성질의 (1)의 (ii)에 의해 $m_1 + \cdots + m_r = n = g_1 + \cdots + g_r$이고, (1)의 둘째 문장에 의해 모든 $j$에서 $g_j = m_j$이다. $T$에 대해서도 같은 논법에 같은 항목의 번호를 $T$에 쓴다.

**(4)의 증명.** $\lambda$가 고윳값이므로 고윳값의 대수적 중복도와 기하적 중복도의 (1)에 의해 기하적 중복도는 $1$ 이상이고, (2)에 의해 대수적 중복도 $1$ 이하이다. 실수의 순서의 성질의 (1)의 (ii)에 의해 기하적 중복도는 $1$이다. $\blacksquare$
:::

## 예시와 반례

:::example[기하적 중복도가 대수적 중복도보다 작은 행렬 N]
$N = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$은 위삼각행렬이고 대각성분이 $1$, $1$로 이어져 있으므로 [[characteristic-polynomial-of-triangular|삼각행렬의 특성다항식]]의 (5)에 의해 $p_N = (-1)^2 (t - 1)^2$입니다. [[multiplicity-of-a-root|근의 중복도]]의 (5)의 (i)에 의해 $1$의 대수적 중복도는 $2$입니다. [[eigenvalue-examples|고윳값이 없는 행렬과 대각화할 수 없는 행렬]]의 (2)에 의해 $1$의 고유공간은 $\operatorname{span}(e_1)$이고, $e_1 \ne 0$이므로 [[linear-independence|일차독립]]의 (I4)와 [[dimension-of-subspace|부분공간의 차원]]의 (4)에 의해 그 차원은 $1$입니다. 따라서 $1 < 2$로, (2)의 부등식이 등호 없이 성립합니다.
:::

:::example[같은 고윳값에서 두 중복도가 같은 3 × 3 행렬과 다른 3 × 3 행렬]
$$
A = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 5 \end{pmatrix}
$$

$$
B = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 5 \end{pmatrix}
$$

이라 합시다. 둘 다 위삼각행렬이고 대각성분이 $2$, $2$, $5$이므로 [[characteristic-polynomial-of-triangular|삼각행렬의 특성다항식]]의 (5)에 의해 $p_A = p_B = (-1)^3 (t - 2)^2 (t - 5)^1$이고, [[multiplicity-of-a-root|근의 중복도]]의 (5)의 (i)에 의해 두 행렬 모두에서 $2$의 대수적 중복도는 $2$, $5$의 대수적 중복도는 $1$입니다.

$x = (x_1, x_2, x_3) \in \mathbb{R}^3$에서 [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)에 의해 $Ax = (2x_1, 2x_2, 5x_3)$이고 $Bx = (2x_1 + x_2, 2x_2, 5x_3)$입니다. $\mathbb{R}^3$의 두 원소는 세 자리의 값이 모두 같을 때 같으므로, $Ax = 2x$인 것은 정확히 $5x_3 = 2x_3$, 곧 $3x_3 = 0$이고 $x_3 = 0$일 때입니다([[real-number-arithmetic|(K10)]]). [[standard-basis|표준기저]]의 (3)에 의해 $x = x_1 e_1 + x_2 e_2 + x_3 e_3$이므로, $x_3 = 0$인 것은 정확히 $x$가 $x_1 e_1 + x_2 e_2$ 꼴일 때입니다([[vector-space-basic-properties|(B3)]]와 [[finite-sum-of-vectors|벡터의 유한 합]]의 (H6)). 따라서 $A$의 $2$에 대한 고유공간은 $\operatorname{span}(e_1, e_2)$이고, 표준기저에서 $e_3$을 지운 열 $e_1, e_2$는 [[linear-independence|일차독립]]의 (I3)에 의해 일차독립이므로 그 차원은 $2$입니다([[dimension-of-subspace|부분공간의 차원]]의 (4)). $Bx = 2x$인 것은 정확히 $2x_1 + x_2 = 2x_1$이고 $5x_3 = 2x_3$일 때, 곧 $x_2 = x_3 = 0$일 때이므로 $B$의 $2$에 대한 고유공간은 $\operatorname{span}(e_1)$이고 차원은 $1$입니다.

정리하면 $2$에서 $A$는 두 중복도가 $2$와 $2$로 같고, $B$는 $1$과 $2$로 다릅니다. $5$는 두 행렬 모두 대수적 중복도가 $1$이므로 (4)에 의해 기하적 중복도도 $1$입니다. 서로 다른 고윳값의 열 $2, 5$에 대해 (3)의 합을 보면, $A$는 $2 + 1 = 3 = 2 + 1$이고 $B$는 $1 + 1 = 2 < 3 = 2 + 1$입니다.
:::

## 확인 질문

:::check[$3 \times 3$ 행렬 $A$에 서로 다른 고윳값 $1$, $2$, $3$이 있으면 각 고윳값의 두 중복도는 무엇인가?]
모두 $1$입니다. 세 고윳값의 대수적 중복도를 $m_1$, $m_2$, $m_3$이라 하면 [[algebraic-multiplicity|고윳값의 대수적 중복도와 기하적 중복도]]의 (1)에 의해 모두 $1$ 이상이고, 같은 항목의 (3)에 의해 $m_1 + m_2 + m_3 \le 3$입니다. 모든 항이 $1$인 열과 비교하면 (1)에 의해 $3 \le m_1 + m_2 + m_3$이므로 합은 $3$이고, (1)의 둘째 문장에 의해 $m_1 = m_2 = m_3 = 1$입니다. 그러면 (4)에 의해 기하적 중복도도 모두 $1$입니다.
:::

:::check[서로 다른 고윳값 $\mu_1, \dots, \mu_r$의 기하적 중복도의 합이 $n$이고 $\mu_1$의 대수적 중복도가 $2$이면 $\mu_1$의 기하적 중복도는 무엇인가?]
$2$입니다. (3)에 의해 기하적 중복도의 합이 $n$이면 각 $\mu_j$에서 두 중복도가 같으므로 $\mu_1$의 기하적 중복도는 대수적 중복도 $2$와 같습니다.
:::
