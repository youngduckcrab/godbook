---
title: 고윳값의 대수적 중복도와 기하적 중복도
title_en: Algebraic and Geometric Multiplicity of an Eigenvalue
aliases: [대수적 중복도, 기하적 중복도, 고윳값의 중복도, 중복도, algebraic multiplicity, geometric multiplicity, multiplicity of an eigenvalue]
kind: definition
field: linear-algebra
msc: ["15A18"]
level: undergrad
summary: n × n 행렬 A 와 실수 λ 에 대하여, 특성다항식 p_A 의 근으로서 λ 의 중복도를 λ 의 대수적 중복도, 고유공간의 차원을 기하적 중복도라 한다. λ 가 고윳값인 것은 정확히 둘 가운데 어느 하나가 1 이상일 때이고, 둘 다 n 이하이며, 기하적 중복도는 n − rank(A − λIₙ) 이다. 닮은 행렬은 두 중복도가 같고, 선형사상의 두 중복도도 같은 방식으로 정한다.
requires: [function, real-number-arithmetic, prime-number, well-ordering-principle, vector-space, vector-space-basic-properties, subspace, finite-sum-of-vectors, linear-combination-and-span, linear-independence, standard-basis, linear-map, kernel-and-range, isomorphism, matrix, matrix-vector-product, matrix-in-bases, dimension, dimension-of-subspace, isomorphic-iff-equal-dimension, rank-and-nullity, rank-nullity-theorem, rank-of-a-matrix, eigenvalue-and-eigenvector, change-of-basis-and-similarity, eigenvalue-examples, determinant, determinant-of-product, similarity-invariants, power-of-a-real-number, polynomial-function, product-of-polynomial-functions, roots-of-polynomial-function, multiplicity-of-a-root, characteristic-polynomial, eigenvalue-iff-root]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "4장 1절 Main definitions, 1.5 Multiplicities of eigenvalues, pp.102–103; 1.3 Finding characteristic polynomial and eigenvalues of an abstract operator, p.101; 4장 1절 연습문제 1.1 c), 1.3, p.104; 4장 2절 Diagonalization, 2.5 Criterion of diagonalizability, Theorem 2.8 과 그 증명, p.111; 2.7.2 Complex eigenvalues, p.113; 2.7.3 A non-diagonalizable matrix, pp.113–114 와 각주 5, p.114; 4장 2절 연습문제 2.10, p.115; 5장 3절 Orthogonal projection and Gram-Schmidt orthogonalization, 연습문제 3.8, p.134"
    checked: original
    note: "출처 4장 1.5(p.102)는 다항식 p 의 근 λ 에 대하여 (z − λ)ᵏ 이 p(z) 를 나누는 가장 큰 양의 정수 k 를 근 λ 의 multiplicity 라 하고, 연산자(행렬) A 의 고윳값 λ 가 특성다항식 p(z) = det(A − zI) 의 근이므로 이 근의 중복도를 고윳값 λ 의 (algebraic) multiplicity 라 부른다. 이어 p.103 에서 고유공간 Ker(A − λI) 의 차원을 고윳값 λ 의 geometric multiplicity 라 하고, 그냥 'multiplicity' 라 하면 보통 대수적 중복도를 뜻한다고, 두 중복도는 다를 수 있다고 적는다. 출처는 두 중복도를 고윳값 λ 에 대해 정의한다. 이 항목은 multiplicity-of-a-root 의 중복도(근이 아니면 0)로 모든 실수 λ 에 두 수를 정하고, λ 가 고윳값이 아니면 둘 다 0 이라는 것을 (1)로 보인다. 이 사이트는 행렬 A 의 고유공간을 선형대수 eigenvalue-and-eigenvector 대로 Ker(T_A − λ i_{ℝⁿ}) 로 쓴다(출처의 Ker(A − λI)). 선형사상의 두 중복도는 출처 4장 1.3(p.101)이 연산자의 특성다항식을 아무 기저에서의 행렬의 것으로 정하는 것과 eigenvalue-iff-root 의 p_T 를 따른다. (3)과 관련해 출처 1.5(p.102)는 n 차 다항식이 복소수 범위에서 중복도를 세어 정확히 n 개의 근을 갖는다고 적고, 이 항목은 실수의 서로 다른 근의 중복도의 합이 n 이하라는 것만 쓴다. (4)는 출처 2.7.3(p.113)이 dim Ker(A − I) 를 '피벗이 1 개이므로 2 − 1 = 1 개의 자유 변수'로 세는 것, 2.7.2(p.113)가 A − λI 의 계수가 1 이므로 고유공간이 벡터 하나로 생성된다고 적는 것과 같은 발상이다. (5)와 관련해 출처 4장 2.5 의 Theorem 2.8 의 증명(p.111) 첫 문장은 대각행렬에서 두 중복도가 같으므로 대각화 가능한 연산자에서도 같다고 적는데, 이것은 닮은 행렬에서 두 중복도가 같다는 것을 말없이 쓴다. (1)–(6)의 진술과 증명은 이 사이트가 썼다. 예시 '두 중복도가 다른 행렬 N'의 N 과 그 결론(대수적 중복도 2, 기하적 중복도 1)은 출처 4장 2.7.3(p.113)의 것과 같고, 선형대수 eigenvalue-examples 의 (2)와 같은 행렬이다. 예시 '단위행렬에서 두 중복도가 같은 예'는 위 Theorem 2.8 의 증명 첫 문장(대각행렬에서 두 중복도가 같다)의 한 경우이다. 예시 '모든 실수에서 두 중복도가 0 인 행렬'의 J 는 출처 4장 1절 연습문제 1.3(p.104)의 회전행렬에서 α 를 직각으로 둔 것이고, 연습문제 1.1 c)(p.104)가 묻는 '실고윳값이 없는 실정사각행렬'의 한 예이며, 출처 2.7.2(p.113)의 (1 2; −2 1) 도 실고윳값이 없는 행렬이다. 확인 질문 '$3 \\times 3$ 행렬 $A$와 실수 $\\lambda$에 대하여 $A - \\lambda I_3$의 계수가 $1$이면 $\\lambda$의 기하적 중복도는 무엇인가? $\\lambda$는 $A$의 고윳값인가?' 는 출처 4장 2절 연습문제 2.10(p.115)이 5 × 5 행렬의 고유공간 하나의 차원을 주고 대각화를 묻는 것과 대상이 닮았다. 확인 질문 '$n \\times n$ 행렬 $A$에서 실수 $\\lambda$의 기하적 중복도가 $n$이면 $A$는 어떤 행렬인가?' 는 출처 2.7.3 의 각주 5(p.114)가 어떤 기저에서 행렬이 I 인 선형사상은 항등사상뿐이라고 적는 것과 같은 발상이다. 출처 5장 연습문제 3.8(p.134)은 정사영의 두 중복도를 구하라고 한다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인(증명 통독, 부호와 경계 n = 1 확인). 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$n$이 자연수이고 $A$가 $n \times n$ [[matrix|행렬]]이며 $\lambda$가 실수라 하자. $p_A$는 [[characteristic-polynomial|특성다항식]]이고, 근과 근의 중복도는 [[multiplicity-of-a-root|근의 중복도]]의 것이며, 고윳값, $T_A$, 고유공간은 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 것이고, 차원은 [[dimension|유한차원과 차원]]과 [[dimension-of-subspace|부분공간의 차원]]의 것이다.

**행렬의 두 중복도.** 특성다항식의 (1)에 의해 $p_A$는 영함수가 아닌 다항함수이므로 $p_A$에서 $\lambda$의 중복도가 정해진다. 이 수를 $A$에서 $\lambda$의 **대수적 중복도**(algebraic multiplicity)라 한다. 또 $\lambda$에 대한 $A$의 고유공간 $\operatorname{Ker}(T_A - \lambda\, i_{\mathbb{R}^n})$은 $\mathbb{R}^n$의 [[subspace|부분공간]]이고 $\mathbb{R}^n$은 유한차원이므로(차원의 (4)), 부분공간의 차원의 (1)에 의해 이 고유공간은 유한차원이다. 그 차원을 $A$에서 $\lambda$의 **기하적 중복도**(geometric multiplicity)라 한다. 두 수는 모두 $0$ 이상인 정수이다. $\lambda$가 $A$의 고윳값일 때는 "고윳값 $\lambda$의 대수적 중복도"처럼도 쓴다. 중복도에는 기호를 두지 않는다.

**선형사상의 두 중복도.** $V$가 유한차원 [[vector-space|벡터공간]]이고 $\dim V = n$이며 $T : V \to V$가 [[linear-map|선형사상]]이라 하자. [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (6)에 의해 $p_T$는 영함수가 아닌 다항함수이다. $p_T$에서 $\lambda$의 중복도를 $T$에서 $\lambda$의 **대수적 중복도**라 하고, 유한차원인 고유공간 $\operatorname{Ker}(T - \lambda\, i_V)$(부분공간의 차원의 (1))의 차원을 $T$에서 $\lambda$의 **기하적 중복도**라 한다.

다음이 성립한다. (1)–(4)의 문장은 $A$를 $T$로, $\mathbb{R}^n$을 $V$로 바꾸어도 성립한다.

1. (고윳값과 중복도) $\lambda$가 $A$의 고윳값인 것은 정확히 $A$에서 $\lambda$의 대수적 중복도가 $1$ 이상일 때이고, 또 정확히 기하적 중복도가 $1$ 이상일 때이다. $\lambda$가 $A$의 고윳값이 아니면 두 중복도는 모두 $0$이다.
2. (상계) $A$에서 $\lambda$의 대수적 중복도와 기하적 중복도는 둘 다 $n$ 이하이다.
3. (대수적 중복도의 합) $r \ge 0$이 정수이고 $\mu_1, \dots, \mu_r$이 서로 다른 실수의 열([[roots-of-polynomial-function|다항함수의 근의 개수]]의 뜻)이며 $m_j$가 $A$에서 $\mu_j$의 대수적 중복도이면 $m_1 + \cdots + m_r \le n$이다. 특히 서로 다른 고윳값들의 대수적 중복도의 합은 $n$ 이하이다.
4. (계수로 쓰기) $A$에서 $\lambda$의 기하적 중복도는 $n - \operatorname{rank}(A - \lambda I_n)$이다([[rank-of-a-matrix|행렬의 계수]]). $T$에서 $\lambda$의 기하적 중복도는 $n - \operatorname{rank}(T - \lambda\, i_V)$이다([[rank-and-nullity|계수와 퇴화차수]]).
5. (닮은 행렬) $B$가 $n \times n$ 행렬이고 $A$와 $B$가 [[change-of-basis-and-similarity|닮았으면]], 모든 실수 $\lambda$에서 $A$에서 $\lambda$의 대수적 중복도는 $B$에서 $\lambda$의 대수적 중복도와 같고, 기하적 중복도도 같다.
6. (행렬과 선형사상) (i) $A$에서 $\lambda$의 두 중복도는 각각 선형사상 $T_A : \mathbb{R}^n \to \mathbb{R}^n$에서 $\lambda$의 두 중복도와 같다. (ii) $\mathcal{B}$가 $V$의 기저이면 $T$에서 $\lambda$의 두 중복도는 각각 $[T]_{\mathcal{B}}$([[matrix-in-bases|기저에 관한 선형사상의 행렬]])에서 $\lambda$의 두 중복도와 같다.
:::

:::english
Let $n$ be a natural number, let $A$ be an $n \times n$ matrix, and let $\lambda$ be a real number. $p_A$ is the characteristic polynomial; roots and the multiplicity of a root are those of the entry on the multiplicity of a root; eigenvalues, $T_A$ and eigenspaces are those of the entry on eigenvalues and eigenvectors; and dimension is that of the entries on finite dimension and dimension and on the dimension of subspaces.

**The two multiplicities of a matrix.** By (1) of the entry on the characteristic polynomial, $p_A$ is a polynomial function that is not the zero function, so the multiplicity of $\lambda$ in $p_A$ is defined. This number is called the **algebraic multiplicity** of $\lambda$ in $A$. Also, the eigenspace $\operatorname{Ker}(T_A - \lambda\, i_{\mathbb{R}^n})$ of $A$ for $\lambda$ is a subspace of $\mathbb{R}^n$, and $\mathbb{R}^n$ is finite-dimensional ((4) of the entry on dimension), so this eigenspace is finite-dimensional by (1) of the entry on the dimension of subspaces. Its dimension is called the **geometric multiplicity** of $\lambda$ in $A$. Both numbers are integers $\ge 0$. When $\lambda$ is an eigenvalue of $A$, we also say "the algebraic multiplicity of the eigenvalue $\lambda$" and the like. No symbol is assigned to multiplicities.

**The two multiplicities of a linear map.** Let $V$ be a finite-dimensional vector space with $\dim V = n$ and let $T : V \to V$ be a linear map. By (6) of the entry on eigenvalues as roots of the characteristic polynomial, $p_T$ is a polynomial function that is not the zero function. The multiplicity of $\lambda$ in $p_T$ is called the **algebraic multiplicity** of $\lambda$ in $T$, and the dimension of the finite-dimensional eigenspace $\operatorname{Ker}(T - \lambda\, i_V)$ ((1) of the entry on the dimension of subspaces) is called the **geometric multiplicity** of $\lambda$ in $T$.

The following hold. The sentences (1)–(4) remain true when $A$ is replaced by $T$ and $\mathbb{R}^n$ by $V$.

1. (Eigenvalues and multiplicities) $\lambda$ is an eigenvalue of $A$ exactly when the algebraic multiplicity of $\lambda$ in $A$ is at least $1$, and also exactly when the geometric multiplicity is at least $1$. If $\lambda$ is not an eigenvalue of $A$, both multiplicities are $0$.
2. (Upper bounds) The algebraic multiplicity and the geometric multiplicity of $\lambda$ in $A$ are both at most $n$.
3. (Sum of algebraic multiplicities) If $r \ge 0$ is an integer, $\mu_1, \dots, \mu_r$ is a sequence of distinct real numbers (in the sense of the entry on the number of roots of a polynomial function), and $m_j$ is the algebraic multiplicity of $\mu_j$ in $A$, then $m_1 + \cdots + m_r \le n$. In particular, the sum of the algebraic multiplicities of distinct eigenvalues is at most $n$.
4. (In terms of rank) The geometric multiplicity of $\lambda$ in $A$ is $n - \operatorname{rank}(A - \lambda I_n)$. The geometric multiplicity of $\lambda$ in $T$ is $n - \operatorname{rank}(T - \lambda\, i_V)$.
5. (Similar matrices) If $B$ is an $n \times n$ matrix and $A$ and $B$ are similar, then for every real number $\lambda$ the algebraic multiplicity of $\lambda$ in $A$ equals that in $B$, and so does the geometric multiplicity.
6. (Matrices and linear maps) (i) The two multiplicities of $\lambda$ in $A$ are equal, respectively, to the two multiplicities of $\lambda$ in the linear map $T_A : \mathbb{R}^n \to \mathbb{R}^n$. (ii) If $\mathcal{B}$ is a basis of $V$, then the two multiplicities of $\lambda$ in $T$ are equal, respectively, to the two multiplicities of $\lambda$ in $[T]_{\mathcal{B}}$.
:::

## 직관

고윳값 $\lambda$를 두 가지 방식으로 "몇 겹인지" 잴 수 있습니다. 하나는 특성다항식에서 인수 $t - \lambda$가 몇 번 곱해져 있는지이고(대수적 중복도), 다른 하나는 $Ax = \lambda x$를 만족하는 벡터들이 몇 차원의 공간을 이루는지입니다(기하적 중복도). 앞의 것은 특성다항식을 계산해 얻는 수이고, 뒤의 것은 $A$를 곱하면 $\lambda$배가 되는 방향이 몇 개나 독립으로 있는지입니다.

책장에 비유하면, 대수적 중복도는 목록에 그 책이 몇 줄 적혀 있는지이고 기하적 중복도는 책장에 실제로 꽂힌 서로 다른 권수와 비슷합니다. 목록과 책장이 늘 같지는 않다는 것이 $N = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$의 예입니다. 특성다항식에는 $t - 1$이 두 번 나오지만 $N$을 곱해 $1$배가 되는 벡터는 한 직선 위에만 있습니다. 비유가 맞지 않는 곳은, 책장의 권수는 목록과 상관없이 정해지지만 두 중복도는 (1)처럼 함께 $0$이거나 함께 $1$ 이상이라는 것입니다.

두 수는 모든 실수 $\lambda$에서 정의합니다. 고윳값이 아닌 $\lambda$에서는 둘 다 $0$이므로((1)), 고윳값이 하나도 없는 행렬에서는 모든 실수에서 두 중복도가 $0$입니다. 두 수는 닮은 행렬에서 같고((5)), 선형사상의 두 중복도는 어느 기저에 관한 행렬로 계산해도 같은 값입니다((6)).

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 것이고, (Z…)와 (L…)은 [[prime-number]]와 [[well-ordering-principle]]의 것이다. 함수에서 $\lambda$의 중복도는 함수만으로 정해지므로 같은 함수에서는 같다([[multiplicity-of-a-root|근의 중복도]]의 (1)의 유일성).

먼저 행렬 $A$의 두 중복도가 $T_A$의 것과 같다는 (6)의 (i)을 보이고, (1)–(4)는 선형사상 $T$에 대해 증명한다. (6)의 (i)에 의해 그것을 $T = T_A$, $V = \mathbb{R}^n$에 쓰면 $A$에 대한 문장이 된다. 여기서 $T_A$의 고윳값은 정의에 의해 $A$의 고윳값이다.

**(6)의 (i)의 증명.** [[dimension|유한차원과 차원]]의 (4)에 의해 $\dim \mathbb{R}^n = n$이다. [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (7)에 의해 $p_{T_A} = p_A$이므로 두 대수적 중복도는 같은 함수에서 $\lambda$의 중복도이고 따라서 같다. 두 기하적 중복도는 정의에 의해 둘 다 $\operatorname{Ker}(T_A - \lambda\, i_{\mathbb{R}^n})$의 차원이다.

이제 $V$, $T$를 진술의 것이라 하고, $E = \operatorname{Ker}(T - \lambda\, i_V)$로 두자.

**(1)의 증명.** 고윳값과 특성다항식의 근의 (6)에 의해 $\lambda$가 $T$의 고윳값인 것은 정확히 $p_T(\lambda) = 0$, 곧 $\lambda$가 $p_T$의 근일 때이고, 근의 중복도의 (2)에 의해 이것은 정확히 $p_T$에서 $\lambda$의 중복도가 $1$ 이상일 때이다. 또 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (2)에 의해 $\lambda$가 고윳값인 것은 정확히 $E \ne \{0_V\}$일 때이다. 유한차원과 차원의 (3)에 의해 $E = \{0_V\}$인 것은 정확히 $\dim E = 0$일 때이다. $\dim E$는 $0$ 이상인 정수이므로 (Z5)와 (Z1)에 의해 $\dim E = 0$이거나 $\dim E \ge 1$이고, (Z8)과 (L1)에 의해 둘이 함께 성립하지는 않는다. 따라서 $\dim E \ne 0$인 것은 정확히 $\dim E \ge 1$일 때이다. 따라서 $\lambda$가 고윳값인 것은 정확히 $\dim E \ge 1$일 때이다.

$\lambda$가 고윳값이 아니면 $\lambda$는 $p_T$의 근이 아니므로 근의 중복도의 (1) 다음의 정의 문단에 의해 대수적 중복도는 $0$이고, 앞 문단에 의해 $E = \{0_V\}$이므로 $\dim E = 0$이다.

**(2)의 증명.** 고윳값과 특성다항식의 근의 (6)에 의해 $\deg p_T = n$이므로, 근의 중복도의 (2)에 의해 $p_T$에서 $\lambda$의 중복도는 $\deg p_T = n$ 이하이다. $E$는 $V$의 부분공간이므로([[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (1)) [[dimension-of-subspace|부분공간의 차원]]의 (2)에 의해 $\dim E \le \dim V = n$이다.

**(3)의 증명.** 근의 중복도의 (6)을 $f = p_T$에 쓰면 $m_1 + \cdots + m_r \le \deg p_T = n$이다. 서로 다른 고윳값들의 열은 서로 다른 실수의 열이므로 둘째 문장은 첫째 문장의 경우이다.

**(4)의 증명.** 고윳값과 고유벡터의 (1)에 의해 $T - \lambda\, i_V$는 $V$에서 $V$로의 선형사상이다. [[rank-nullity-theorem|차원 정리]]에 의해 $\operatorname{nullity}(T - \lambda\, i_V) + \operatorname{rank}(T - \lambda\, i_V) = n$이고, [[rank-and-nullity|계수와 퇴화차수]]의 정의에 의해 $\operatorname{nullity}(T - \lambda\, i_V) = \dim E$이다. 따라서 (K…)에 의해 $\dim E = n - \operatorname{rank}(T - \lambda\, i_V)$이다.

행렬 $A$에 대해서는, 고윳값과 고유벡터의 (4)에 의해 $T_A - \lambda\, i_{\mathbb{R}^n} = T_{A - \lambda I_n}$이므로 $A$의 고유공간은 $\operatorname{Ker} T_{A - \lambda I_n}$이다. [[rank-of-a-matrix|행렬의 계수]]의 (4)를 $n \times n$ 행렬 $A - \lambda I_n$에 쓰면 $\operatorname{nullity} T_{A - \lambda I_n} + \operatorname{rank}(A - \lambda I_n) = n$이므로, 같은 방법으로 $A$에서 $\lambda$의 기하적 중복도는 $n - \operatorname{rank}(A - \lambda I_n)$이다.

**(5)의 증명.** 고윳값과 특성다항식의 근의 (4)에 의해 $p_A = p_B$이므로 두 대수적 중복도는 같다. 기하적 중복도를 보자. 닮음의 정의에 의해 $A = Q^{-1}BQ$인 가역 $n \times n$ 행렬 $Q$가 있다. [[similarity-invariants|닮은 행렬의 행렬식과 대각합]]의 (3)에 의해 $A - \lambda I_n = Q^{-1}(B - \lambda I_n)Q$이고, 이것은 $\bigl(Q^{-1}(B - \lambda I_n)\bigr)Q$이다([[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 괄호 약속). 행렬의 계수의 (7)을 두 번 쓰면
$$
\begin{aligned}
&\operatorname{rank}(A - \lambda I_n) \\
&\quad \le \operatorname{rank}\bigl(Q^{-1}(B - \lambda I_n)\bigr) \\
&\quad \le \operatorname{rank}(B - \lambda I_n)
\end{aligned}
$$
이다. 기저 변환과 닮은 행렬의 (4)에 의해 $B$도 $A$와 닮았으므로, 같은 논법에서 $\operatorname{rank}(B - \lambda I_n) \le \operatorname{rank}(A - \lambda I_n)$이다. (L2)에 의해 두 계수는 같고, (4)에 의해 두 기하적 중복도 $n - \operatorname{rank}(A - \lambda I_n)$과 $n - \operatorname{rank}(B - \lambda I_n)$이 같다.

**(6)의 (ii)의 증명.** 유한차원과 차원의 (2)에 의해 $\mathcal{B}$의 길이는 $n$이다. $M = [T]_{\mathcal{B}}$로 두자. 고윳값과 특성다항식의 근의 $p_T$의 정의에 의해 $p_T = p_M$이므로 두 대수적 중복도는 같다.

$E' = \operatorname{Ker}(T_M - \lambda\, i_{\mathbb{R}^n})$으로 두자. 먼저 모든 $v \in V$에서 $v \in E$인 것은 정확히 $[v]_{\mathcal{B}} \in E'$일 때임을 보인다. 고윳값과 고유벡터의 (1)에 의해 $v \in E$인 것은 정확히 $v = 0_V$이거나 $v$가 $\lambda$에 속하는 $T$의 고유벡터일 때이다. 기저 변환과 닮은 행렬의 (6)에 의해 $v$가 $\lambda$에 속하는 $T$의 고유벡터인 것은 정확히 $[v]_{\mathcal{B}}$가 $\lambda$에 속하는 $M$의 고유벡터, 곧 $T_M$의 고유벡터일 때이고, [[matrix-in-bases|기저에 관한 선형사상의 행렬]]의 (1)에 의해 $v = 0_V$인 것은 정확히 $[v]_{\mathcal{B}} = 0$일 때이다. 다시 고윳값과 고유벡터의 (1)에 의해 "$[v]_{\mathcal{B}} = 0$이거나 $[v]_{\mathcal{B}}$가 $\lambda$에 속하는 $T_M$의 고유벡터"인 것은 정확히 $[v]_{\mathcal{B}} \in E'$일 때이다.

$L = C_{\mathcal{B}}^{-1} : V \to \mathbb{R}^n$은 기저에 관한 선형사상의 행렬에서 정한 대로 [[isomorphism|동형사상]]이고, $L(v) = [v]_{\mathcal{B}}$이다. [[kernel-and-range|핵과 상]]의 (4)에 의해 $L$을 $E$로 제한한 함수는 벡터공간 $E$에서 $\mathbb{R}^n$으로의 선형사상이고, 앞 문단에 의해 그 값은 모두 $E'$에 든다. $E'$의 덧셈과 스칼라배는 $\mathbb{R}^n$의 것을 제한한 것이므로([[subspace|(P1)]]) 이 함수는 $E$에서 $E'$으로의 선형사상이기도 하다. $L$이 단사이므로 이 함수도 단사이다. $x \in E'$이면 $v = C_{\mathcal{B}} x$에 대하여 기저에 관한 선형사상의 행렬의 (1)에 의해 $[v]_{\mathcal{B}} = x$이고, 앞 문단에 의해 $v \in E$이며 $L(v) = x$이다. 따라서 이 함수는 $E$에서 $E'$으로의 전단사이고 동형사상이다. $E$가 유한차원이므로 [[isomorphic-iff-equal-dimension|유한차원 공간이 동형일 조건]]의 (1)에 의해 $\dim E' = \dim E$이다. $\dim E'$은 $M$에서 $\lambda$의 기하적 중복도이므로 두 기하적 중복도는 같다. $\blacksquare$
:::

## 예시와 반례

:::example[두 중복도가 다른 행렬 N]
$N = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$이라 합시다. 실수 $x$에서 $N - xI_2 = \begin{pmatrix} 1 - x & 1 \\ 0 & 1 - x \end{pmatrix}$이므로 [[determinant|행렬식]]의 (4)에 의해 $p_N(x) = (1 - x)(1 - x) - 0 \cdot 1 = (1 - x)^2$입니다. [[real-number-arithmetic|(K9)]]와 (K12)에 의해 $1 - x = (-1)(x - 1)$이고, [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iii)과 (5)에 의해 $(1 - x)^2 = (-1)^2(x - 1)^2 = (x - 1)^2$입니다. [[product-of-polynomial-functions|다항함수의 곱]]에서 정한 거듭제곱의 값에 의해 이것은 $(t - 1)^2$의 $x$에서의 값이므로 [[vector-space|(V5)]]와 함께 $p_N = (t - 1)^2 = 1 \cdot (t - 1)^2$입니다. [[multiplicity-of-a-root|근의 중복도]]의 (4)에 의해 $N$에서 $1$의 대수적 중복도는 $2$이고, $1$이 아닌 실수의 대수적 중복도는 $0$입니다.

[[eigenvalue-examples|고윳값이 없는 행렬과 대각화할 수 없는 행렬]]의 (2)에 의해 $1$에 대한 $N$의 고유공간은 $\operatorname{span}(e_1)$입니다. $e_1 \ne 0$이므로 [[linear-independence|일차독립]]의 (I4)에 의해 길이 $1$인 열 $e_1$은 일차독립이고, [[dimension-of-subspace|부분공간의 차원]]의 (4)에 의해 이 고유공간의 차원은 $1$입니다. 따라서 $1$의 기하적 중복도는 $1$이고, 대수적 중복도 $2$와 다릅니다. $1$이 아닌 실수는 (1)에 의해 두 중복도가 모두 $0$입니다.
:::

:::example[단위행렬에서 두 중복도가 같은 예]
$n$이 자연수라 합시다. 실수 $x$에서 [[vector-space-basic-properties|(B11)]]과 [[vector-space|(V5)]]에 의해 $I_n - xI_n = (1 - x)I_n$이고, [[determinant-of-product|곱의 행렬식]]의 (4)에 의해 $p_{I_n}(x) = (1 - x)^n$입니다. 앞 예시와 같이 $(1 - x)^n = (-1)^n (x - 1)^n$이므로 $p_{I_n} = (-1)^n (t - 1)^n$이고, $(-1)^n \ne 0$입니다([[power-of-a-real-number|실수의 거듭제곱]]의 (5)). [[multiplicity-of-a-root|근의 중복도]]의 (4)를 $a = (-1)^n$, $k = n$에 쓰면 $I_n$에서 $1$의 대수적 중복도는 $n$입니다.

[[matrix-vector-product|행렬과 벡터의 곱]]의 (3)과 (V5)에 의해 모든 $x \in \mathbb{R}^n$에서 $I_n x = x = 1x$이므로, [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (1)에 의해 $1$에 대한 고유공간은 $\{x \in \mathbb{R}^n : I_n x = 1x\} = \mathbb{R}^n$입니다. [[dimension|유한차원과 차원]]의 (4)에 의해 그 차원은 $n$이므로 기하적 중복도도 $n$입니다. 두 중복도가 (2)의 상계 $n$에 닿는 예입니다. $1$이 아닌 실수는 대수적 중복도가 $0$이므로 (1)에 의해 고윳값이 아니고 두 중복도가 모두 $0$입니다.
:::

:::example[모든 실수에서 두 중복도가 0 인 행렬]
$J = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$이라 합시다. [[eigenvalue-examples|고윳값이 없는 행렬과 대각화할 수 없는 행렬]]의 (1)에 의해 어떤 실수도 $J$의 고윳값이 아니므로, (1)에 의해 모든 실수 $\lambda$에서 $J$에서 $\lambda$의 대수적 중복도와 기하적 중복도는 둘 다 $0$입니다. 이때 (3)의 합은 어떤 서로 다른 실수의 열을 잡아도 $0$입니다.
:::

## 확인 질문

:::check[$3 \times 3$ 행렬 $A$와 실수 $\lambda$에 대하여 $A - \lambda I_3$의 계수가 $1$이면 $\lambda$의 기하적 중복도는 무엇인가? $\lambda$는 $A$의 고윳값인가?]
(4)에 의해 기하적 중복도는 $3 - 1 = 2$입니다. $2 \ge 1$이므로 (1)에 의해 $\lambda$는 $A$의 고윳값이고, 대수적 중복도도 $1$ 이상입니다.
:::

:::check[$n \times n$ 행렬 $A$에서 실수 $\lambda$의 기하적 중복도가 $n$이면 $A$는 어떤 행렬인가?]
$A = \lambda I_n$입니다. 고유공간 $E = \operatorname{Ker}(T_A - \lambda\, i_{\mathbb{R}^n})$은 $\mathbb{R}^n$의 부분공간이고 $\dim E = n = \dim \mathbb{R}^n$이므로([[dimension|유한차원과 차원]]의 (4)) [[dimension-of-subspace|부분공간의 차원]]의 (3)에 의해 $E = \mathbb{R}^n$입니다. 그러면 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (1)에 의해 모든 $x \in \mathbb{R}^n$에서 $Ax = \lambda x$이고, [[matrix-vector-product|행렬과 벡터의 곱]]의 (4)와 (3)에 의해 $\lambda x = \lambda(I_n x) = (\lambda I_n)x$입니다. 같은 항목의 (5)에 의해 $A = \lambda I_n$입니다.
:::
