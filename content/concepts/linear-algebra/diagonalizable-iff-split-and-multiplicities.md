---
title: "대각화 가능의 판정: 인수분해와 중복도"
title_en: "Diagonalizability Criterion: Splitting and Multiplicities"
aliases: [대각화 판정, 대각화 가능할 필요충분조건, 기하적 중복도와 대수적 중복도가 같다, diagonalizability criterion, criterion of diagonalizability, real diagonalization]
kind: theorem
field: linear-algebra
msc: ["15A18"]
level: undergrad
summary: 정사각행렬이나 유한차원 공간의 선형사상이 대각화 가능한 것은 정확히 특성다항식이 실수 범위에서 완전히 인수분해되고 모든 고윳값에서 기하적 중복도가 대수적 중복도와 같을 때이다. 고윳값이 하나뿐인 대각화 가능 행렬은 스칼라 행렬뿐이고, 2 × 2 행렬은 판별식으로 판정된다.
requires: [function, finite-set, well-ordering-principle, mathematical-induction, real-number-arithmetic, real-function-space, vector-space, vector-space-basic-properties, finite-sum-of-vectors, standard-basis, dimension, linear-map, linear-maps-form-a-vector-space, matrix, matrix-vector-product, eigenvalue-and-eigenvector, matrix-in-bases, change-of-basis-and-similarity, diagonalizable, eigenvectors-of-distinct-eigenvalues, independent-subspaces, diagonalizable-iff-eigenspace-dimensions, trace, determinant, determinant-and-trace-of-linear-map, finite-product-of-reals, characteristic-polynomial, eigenvalue-iff-root, real-eigenvalues-2x2, algebraic-multiplicity, geometric-at-most-algebraic, split-characteristic-polynomial]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 4장 2절 Diagonalization, 2.1 Preliminaries 끝의 문단, p.107; 2.5 Criterion of diagonalizability 의 첫 문단, Theorem 2.8 과 각주 4, 그 증명, pp.111–112; 2.6 Real factorization, Theorem 2.9, p.112; 2.7.3 A non-diagonalizable matrix 와 각주 5, pp.113–114; 4장 1절 1.6 Trace and determinant, Theorem 1.2, p.103
    checked: original
    note: "출처의 Theorem 2.8(p.111)은 연산자 A : V → V 가 '중복도를 세어 정확히 n = dim V 개의 고윳값'을 가질 때, A 가 대각화 가능인 것은 정확히 모든 고윳값 λ 에서 고유공간 Ker(A − λI) 의 차원(기하적 중복도)이 대수적 중복도와 같을 때라고 진술한다. 이 항목의 (1)은 그 가정을 '특성다항식이 완전히 인수분해된다'(split-characteristic-polynomial 의 정의)로 바꿔 판정 안에 넣은 꼴이다. 출처는 2.5절 첫 문단(p.111)에서 대각행렬의 고윳값이 중복도를 세어 대각성분이므로 대각화 가능한 연산자는 중복도를 세어 정확히 n 개의 고윳값을 갖는다고 적고, Theorem 2.8 의 증명 첫머리에서 대각행렬은 두 중복도가 같으므로 대각화 가능한 연산자도 그렇다고 한 줄로 적는다. 이 항목은 이 방향을 diagonalizable-iff-eigenspace-dimensions 의 (1), (3)과 geometric-at-most-algebraic 의 (3), split-characteristic-polynomial 의 (3)으로 증명한다. 반대 방향의 출처 증명(p.112: 고유공간의 기저를 Lemma 2.7 로 합친 dim V 개의 일차독립인 고유벡터)은 diagonalizable-iff-eigenspace-dimensions 의 (3)이 맡는다. 각주 4(p.111)는 복소 공간에서는 가정이 저절로 성립한다고 적는다. 출처는 2.1절 끝(p.107)에서 행렬의 대각화를 보통 복소 대각화로 뜻한다고 적고, Theorem 2.9(p.112)에서 실수 행렬이 실수 대각화(A = SDS⁻¹, S 와 D 가 실수 행렬)를 갖는 것은 정확히 복소 대각화를 갖고 모든 고윳값이 실수일 때라고 진술한다. 이 사이트의 대각화 가능은 처음부터 실수 위의 것이고, 복소수를 거치지 않고 (1)로 판정한다. (3)은 출처 4장 Corollary 2.3(p.109)과 같은 결론이다. (4)는 출처 4장 1.6절 Theorem 1.2(p.103: 중복도를 세어 늘어놓은 복소 고윳값의 합과 곱이 대각합과 행렬식)를 대각화 가능한 실수 행렬에서 중복도를 지수로 쓴 꼴이다. (5)는 출처 2.7.3절의 각주 5(p.114: 어떤 기저에서 행렬이 단위행렬인 선형변환은 항등변환뿐이므로 (1 1; 0 1) 은 대각화할 수 없다)와 같은 발상이다. (6)의 판별식에 의한 2 × 2 판정과 (7)의 선형사상판과 모든 증명은 이 사이트가 썼다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인(판정 정리의 증명 통독, 예의 수치 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$n$이 자연수이고 $A$가 $n \times n$ [[matrix|행렬]]이라 하자. $p_A$는 [[characteristic-polynomial|특성다항식]], 완전히 인수분해된다는 것과 완전 인수분해는 [[split-characteristic-polynomial|완전히 인수분해되는 특성다항식]]의 것, 대수적 중복도와 기하적 중복도는 [[algebraic-multiplicity|고윳값의 대수적 중복도와 기하적 중복도]]의 것, 고윳값은 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 것, 대각화 가능은 [[diagonalizable|대각화 가능]]의 것(실수 행렬의 닮음으로 정한 것)이며, "고윳값을 빠짐없이 늘어놓은 열"은 [[diagonalizable-iff-eigenspace-dimensions|고유공간의 차원과 대각화]]의 것이다.

1. (판정) $A$가 대각화 가능인 것은 정확히 $A$가 완전히 인수분해되고, $A$의 모든 고윳값 $\lambda$에서 $\lambda$의 기하적 중복도가 대수적 중복도와 같을 때이다. 특히 $r$, $\mu$, $m$이 $p_A$의 완전 인수분해이면, $A$가 대각화 가능인 것은 정확히 모든 $j \in \{1, \dots, r\}$에서 $\mu_j$의 기하적 중복도가 $m_j$일 때이다.
2. (대각화 가능이 아닌 경우) $A$가 완전히 인수분해되면, $A$가 대각화 가능이 아닌 것은 정확히 기하적 중복도가 대수적 중복도보다 작은 고윳값이 있을 때이다.
3. (서로 다른 고윳값이 $n$개) 모든 항이 $A$의 고윳값이고 서로 다른 길이 $n$인 실수의 열 $\lambda_1, \dots, \lambda_n$이 있으면, $A$는 완전히 인수분해되고 대각화 가능이며, 모든 $k$에서 $\lambda_k$의 기하적 중복도와 대수적 중복도는 모두 $1$이다. 대각화 가능이라는 결론은 [[eigenvectors-of-distinct-eigenvalues|서로 다른 고윳값의 고유벡터]]의 (5)와 같다.
4. (대각합과 행렬식) $A$가 대각화 가능이고 $\mu_1, \dots, \mu_r$이 $A$의 고윳값을 빠짐없이 늘어놓은 열이며 $g_j$가 $\mu_j$의 기하적 중복도이면, $r$, $\mu$, $g$는 $p_A$의 완전 인수분해이고
   $$
   \begin{aligned}
   \operatorname{tr} A &= g_1 \mu_1 + \cdots + g_r \mu_r, \\
   \det A &= \mu_1^{g_1} \mu_2^{g_2} \cdots \mu_r^{g_r}
   \end{aligned}
   $$
   이다($\operatorname{tr}$은 [[trace|대각합]], $\det$는 [[determinant|행렬식]], 둘째 식의 오른쪽은 [[finite-product-of-reals|실수의 유한 곱]]).
5. (고윳값이 하나뿐인 경우) $\lambda$가 실수이면, $A$가 대각화 가능이고 $A$의 고윳값이 정확히 $\lambda$ 하나인 것은 정확히 $A = \lambda I_n$일 때이다. 특히 영행렬과 $I_n$은 대각화 가능이고, $n = 1$이면 모든 $A$가 대각화 가능이다.
6. ($2 \times 2$) $n = 2$이고 $\operatorname{disc} A$와 $h = 2^{-1}\operatorname{tr} A$가 [[real-eigenvalues-2x2|2 × 2 행렬의 실고윳값]]의 것이라 하자. $0 < \operatorname{disc} A$이면 $A$는 대각화 가능이고, $\operatorname{disc} A < 0$이면 대각화 가능이 아니다. $\operatorname{disc} A = 0$이면, $A$가 대각화 가능인 것은 정확히 $A = hI_2$일 때이다.
7. (선형사상) $V$가 유한차원 벡터공간이고 $\dim V = n$이며 $T : V \to V$가 [[linear-map|선형사상]]이라 하자. (1)–(3)은 $A$를 $T$로 바꾸어도 성립하고($p_T$와 $T$의 두 중복도로), (4)는 $\operatorname{tr} T$, $\det T$([[determinant-and-trace-of-linear-map|선형사상의 행렬식과 대각합]])로 성립하며, (5)는 $\lambda I_n$을 $\lambda i_V$로 바꾸어 성립한다.
:::

:::english
Let $n$ be a natural number and $A$ an $n \times n$ matrix. Here $p_A$ is the characteristic polynomial; splitting and complete factorizations are as in the entry on split characteristic polynomials; algebraic and geometric multiplicities are as in the entry on the two multiplicities; eigenvalues are as in the entry on eigenvalues and eigenvectors; diagonalizability is as in the entry on diagonalizability (defined by similarity of real matrices); and "a list of all eigenvalues" is as in the entry on eigenspace dimensions and diagonalizability.

1. (Criterion) $A$ is diagonalizable exactly when $A$ splits and, for every eigenvalue $\lambda$ of $A$, the geometric multiplicity of $\lambda$ equals its algebraic multiplicity. In particular, if $r$, $\mu$, $m$ is a complete factorization of $p_A$, then $A$ is diagonalizable exactly when, for every $j \in \{1, \dots, r\}$, the geometric multiplicity of $\mu_j$ is $m_j$.
2. (Non-diagonalizable case) If $A$ splits, then $A$ is not diagonalizable exactly when there is an eigenvalue whose geometric multiplicity is less than its algebraic multiplicity.
3. ($n$ distinct eigenvalues) If there is a distinct sequence $\lambda_1, \dots, \lambda_n$ of real numbers of length $n$ every term of which is an eigenvalue of $A$, then $A$ splits and is diagonalizable, and for every $k$ both multiplicities of $\lambda_k$ equal $1$. The conclusion that $A$ is diagonalizable is the same as (5) of the entry on eigenvectors of distinct eigenvalues.
4. (Trace and determinant) If $A$ is diagonalizable, $\mu_1, \dots, \mu_r$ is a list of all eigenvalues of $A$, and $g_j$ is the geometric multiplicity of $\mu_j$, then $r$, $\mu$, $g$ is a complete factorization of $p_A$ and
   $$
   \begin{aligned}
   \operatorname{tr} A &= g_1 \mu_1 + \cdots + g_r \mu_r, \\
   \det A &= \mu_1^{g_1} \mu_2^{g_2} \cdots \mu_r^{g_r}
   \end{aligned}
   $$
   (the right side of the second formula is a finite product of real numbers).
5. (A single eigenvalue) For a real number $\lambda$, $A$ is diagonalizable and its eigenvalues are exactly the single number $\lambda$ exactly when $A = \lambda I_n$. In particular, the zero matrix and $I_n$ are diagonalizable, and if $n = 1$ every $A$ is diagonalizable.
6. ($2 \times 2$) Let $n = 2$, and let $\operatorname{disc} A$ and $h = 2^{-1}\operatorname{tr} A$ be as in the entry on real eigenvalues of $2 \times 2$ matrices. If $0 < \operatorname{disc} A$, then $A$ is diagonalizable; if $\operatorname{disc} A < 0$, it is not. If $\operatorname{disc} A = 0$, then $A$ is diagonalizable exactly when $A = hI_2$.
7. (Linear maps) Let $V$ be a finite-dimensional vector space with $\dim V = n$ and $T : V \to V$ a linear map. Statements (1)–(3) hold with $A$ replaced by $T$ (with $p_T$ and the two multiplicities of $T$), (4) holds with $\operatorname{tr} T$ and $\det T$, and (5) holds with $\lambda I_n$ replaced by $\lambda i_V$.
:::

## 직관

앞 항목 [[diagonalizable-iff-eigenspace-dimensions|고유공간의 차원과 대각화]]는 대각화 가능을 고유공간들의 차원의 합이 $n$인지로 판정했습니다. 그 합은 고윳값마다의 기하적 중복도를 더한 것이고, [[geometric-at-most-algebraic|기하적 중복도는 대수적 중복도 이하]]이며 대수적 중복도를 다 더해도 $n$을 넘지 않습니다. 따라서 기하적 중복도의 합이 $n$에 이르려면 두 부등식이 모두 등호여야 합니다. 대수적 중복도의 합이 $n$이라는 것이 "완전히 인수분해된다"이고, 고윳값마다 등호라는 것이 "두 중복도가 같다"입니다. 각 고윳값에 자리가 대수적 중복도만큼 배정되어 있고, 고유벡터가 그 자리를 모두 채워야 대각화가 된다고 생각할 수 있습니다. 비유가 맞지 않는 곳은 자리 수가 $n$에 모자랄 수도 있다는 점입니다. 실수 범위에서 인수분해되지 않으면 자리부터 모자랍니다.

그래서 대각화가 안 되는 길은 두 가지입니다. 하나는 $J = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$처럼 실수 범위에서 인수분해되지 않는 것이고, 다른 하나는 $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$처럼 인수분해는 되지만 고유벡터가 모자라는 것입니다. (2)는 뒤의 길을 말합니다. 이 강의의 대각화 가능은 실수 행렬 $S$, $D$로 하는 것이고, 복소수를 허락한 대각화는 다루지 않습니다.

## 증명

:::idea
대각화 가능하면 고윳값을 빠짐없이 늘어놓은 열에서 기하적 중복도의 합이 $n$이고, 기하적 중복도 $\le$ 대수적 중복도와 대수적 중복도의 합 $\le n$ 사이에 끼어 모두 등호가 된다. 거꾸로 완전 인수분해의 열은 고윳값을 빠짐없이 늘어놓은 열이고 대수적 중복도의 합이 $n$이므로, 두 중복도가 같으면 기하적 중복도의 합도 $n$이다.
:::

:::hint
⇒ 에서는 [[diagonalizable-iff-eigenspace-dimensions|고유공간의 차원과 대각화]]의 (1), (3)과 [[geometric-at-most-algebraic|기하적 중복도는 대수적 중복도 이하]]의 (3)을, 그다음 [[split-characteristic-polynomial|완전히 인수분해되는 특성다항식]]의 (3)을 쓰세요.
:::

:::hint
(5)에서 고윳값이 $\lambda$ 하나뿐이면 길이 $1$인 열 $\lambda$가 고윳값을 빠짐없이 늘어놓은 열입니다. 대각화 가능하면 그 고유공간이 공간 전체입니다.
:::

:::proof
$A$의 고윳값, 고유공간, 두 중복도는 [[algebraic-multiplicity|두 중복도]]의 정의와 그 (6)의 (i)에 의해 $T_A : \mathbb{R}^n \to \mathbb{R}^n$의 것과 같다. $A$가 대각화 가능인 것은 [[diagonalizable|대각화 가능]]의 (7)에 의해 정확히 $T_A$가 대각화 가능일 때이고, $\dim \mathbb{R}^n = n$이다([[dimension|유한차원과 차원]]의 (4)). 고유공간의 차원과 대각화를 "차원 항목", 그 (6)을 쓰면 $A$에 대해 그 (1)–(5)를 쓸 수 있다. 실수 $\lambda$의 기하적 중복도는 $\operatorname{Ker}(T_A - \lambda\, i_{\mathbb{R}^n})$의 차원이므로, 차원 항목에서 $g_j = \dim E_j$로 둔 수는 $\mu_j$의 기하적 중복도이다. 차원 항목의 "서로 다르다"와 두 중복도·완전 인수분해 항목의 "서로 다른 실수의 열"은 모두 [[eigenvectors-of-distinct-eigenvalues|서로 다른 고윳값의 고유벡터]]의 진술에서 정한 같은 뜻이다.

**(1)의 증명.** ⇒: $A$가 대각화 가능이라 하자. 차원 항목의 (1)에 의해 $A$의 고윳값을 빠짐없이 늘어놓은 열 $\mu_1, \dots, \mu_r$이 있고, 그 (2)에 의해 $r \ge 1$이다. $g_j$, $m_j$를 $\mu_j$의 기하적·대수적 중복도라 하면, 차원 항목의 (3)에 의해 $g_1 + \cdots + g_r = n$이다. 기하적 중복도는 대수적 중복도 이하의 (3)에 의해 모든 $j$에서 $g_j = m_j$이고 $m_1 + \cdots + m_r = n$이다. $\mu$는 서로 다르고 모든 항이 고윳값이므로, [[split-characteristic-polynomial|완전히 인수분해되는 특성다항식]]의 (3)에 의해 $A$는 완전히 인수분해된다. $A$의 고윳값 $\lambda$는 빠짐없이 늘어놓은 열의 어떤 항 $\mu_j$이고, 그 두 중복도는 $g_j = m_j$로 같다.

⇐: $A$가 완전히 인수분해되고 모든 고윳값에서 두 중복도가 같다고 하자. $r$, $\mu$, $m$을 $p_A$의 완전 인수분해라 하자. 완전히 인수분해되는 특성다항식의 (2)의 (ii)에 의해 $A$의 고윳값은 정확히 $\mu_1, \dots, \mu_r$이고, $\mu$는 서로 다르므로 $\mu$는 $A$의 고윳값을 빠짐없이 늘어놓은 열이며 $r \ge 1$이다. 그 (2)의 (iii)에 의해 $\mu_j$의 대수적 중복도는 $m_j$이고, 가정에 의해 $\mu_j$의 기하적 중복도 $g_j$도 $m_j$이다. 두 열 $g$, $m$은 모든 자리에서 같으므로 같은 열이고([[finite-sum-of-vectors|벡터의 유한 합]]의 진술 첫 문단), 그 (2)의 (i)에 의해 $g_1 + \cdots + g_r = m_1 + \cdots + m_r = n$이다. 차원 항목의 (3)에 의해 $A$는 대각화 가능이다.

"특히"의 문장: $r$, $\mu$, $m$이 완전 인수분해이면, 앞 단락과 같이 $\mu$는 고윳값을 빠짐없이 늘어놓은 열이고 $\mu_j$의 대수적 중복도는 $m_j$이다. 모든 $j$에서 $\mu_j$의 기하적 중복도가 $m_j$이면 앞 단락의 논증으로 $A$는 대각화 가능이다. 거꾸로 $A$가 대각화 가능이면 ⇒ 에 의해 모든 고윳값, 특히 $\mu_j$에서 두 중복도가 같으므로 $\mu_j$의 기하적 중복도는 $m_j$이다.

**(2)의 증명.** $A$가 완전히 인수분해되므로 (1)에 의해, $A$가 대각화 가능이 아닌 것은 정확히 두 중복도가 다른 고윳값 $\lambda$가 있을 때이다. 기하적 중복도는 대수적 중복도 이하의 (2)에 의해 기하적 중복도는 대수적 중복도 이하이므로, 두 정수가 다른 것은 정확히 기하적 중복도가 더 작을 때이다([[well-ordering-principle|(Z5)]]와 (L1)).

**(3)의 증명.** 차원 항목의 (5)에 의해 $\lambda_1, \dots, \lambda_n$은 고윳값을 빠짐없이 늘어놓은 열이고, $g_k$를 $\lambda_k$의 기하적 중복도라 하면 $g_1 + \cdots + g_n = n$이며 $A$는 대각화 가능이다. (1)에 의해 $A$는 완전히 인수분해된다. 기하적 중복도는 대수적 중복도 이하의 (3)에 의해 $\lambda_k$의 대수적 중복도 $m_k$는 $g_k$와 같다. [[algebraic-multiplicity|두 중복도]]의 (1)에 의해 모든 $k$에서 $1 \le g_k$이다. 모든 항이 $1$인 길이 $q$인 실수의 열의 합은 $q$이다. 실제로 $q = 0$이면 빈 열의 합 $0$이고, 길이 $q$에서 그 합이 $q$이면 합의 재귀 정의에 의해 길이 $q + 1$에서 $q + 1$이다([[mathematical-induction|수학적 귀납법]]). 그러므로 기하적 중복도는 대수적 중복도 이하의 (1)을 $a_k = 1$, $b_k = g_k$에 쓰면, 두 합이 모두 $n$이므로 모든 $k$에서 $g_k = 1$이고, 따라서 $m_k = 1$이다. 서로 다른 고윳값의 고유벡터의 (5)도 같은 가정에서 대각화 가능을 결론짓는다.

**(4)의 증명.** (1)의 ⇒ 의 증명은 고윳값을 빠짐없이 늘어놓은 열이면 어느 것에나 쓸 수 있다. 그 증명을 주어진 열 $\mu$에 쓰면 $g_j$는 $\mu_j$의 대수적 중복도와 같고 그 합은 $n$이며, 완전히 인수분해되는 특성다항식의 (3)에 의해 $r$, $\mu$, $g$는 $p_A$의 완전 인수분해이다. 그 (7)에 의해 두 식이 성립한다.

**(5)의 증명.** $A$가 대각화 가능이고 고윳값이 정확히 $\lambda$ 하나라 하자. 길이 $1$인 열 $\lambda$는 서로 다르고(조건이 공허하다) 모든 항이 고윳값이며 모든 고윳값이 이 항이므로, 고윳값을 빠짐없이 늘어놓은 열이다. 차원 항목의 (3)의 (나)와 [[independent-subspaces|일차독립인 부분공간들]]의 (1)($p = 1$)에 의해 $\operatorname{Ker}(T_A - \lambda\, i_{\mathbb{R}^n}) = \mathbb{R}^n$이다. 따라서 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (1)에 의해 모든 $x \in \mathbb{R}^n$에서 $Ax = \lambda x$이다. [[matrix-vector-product|행렬과 벡터의 곱]]의 (4)와 (3)에 의해 $(\lambda I_n)x = \lambda(I_n x) = \lambda x$이므로, 모든 $x$에서 $Ax = (\lambda I_n)x$이고 그 (5)에 의해 $A = \lambda I_n$이다.

거꾸로 $A = \lambda I_n$이라 하자. [[matrix|행렬]]의 (1), (6)에 의해 $\lambda I_n$의 $(j, k)$ 성분은 $j = k$이면 $\lambda \cdot 1 = \lambda$, $j \ne k$이면 $\lambda \cdot 0 = 0$이므로([[real-number-arithmetic|(K4), (K9)]]) $\lambda I_n$은 대각행렬이고 대각화 가능의 (1)에 의해 $\operatorname{diag}(\lambda, \dots, \lambda)$이다. [[change-of-basis-and-similarity|닮음]]의 (4)(반사성)에 의해 자기 자신과 닮았으므로 대각화 가능이고, 대각화 가능의 (4)에 의해 고윳값은 정확히 $\lambda$이다. 영행렬은 $\lambda = 0$인 경우이다(행렬의 (1), (6)과 (K9)에 의해 $0 I_n$은 모든 성분이 $0$이다). $I_n$은 $\lambda = 1$인 경우이다(행렬의 (1)과 (K4)). $n = 1$이면 $A$의 유일한 성분을 $a$라 할 때 $aI_1$의 성분도 $a \cdot 1 = a$이므로 행렬의 (2)에 의해 $A = aI_1$이고, 앞 문단에 의해 $A$는 대각화 가능이다.

**(6)의 증명.** $0 < \operatorname{disc} A$이면 2 × 2 행렬의 실고윳값의 (4)에 의해 $A$는 대각화 가능이다. $\operatorname{disc} A < 0$이면 그 (2)에 의해 $A$에는 고윳값이 없으므로, 길이 $0$인 열이 고윳값을 빠짐없이 늘어놓은 열이고 차원 항목의 (2)에 의해 $A$는 대각화 가능이 아니다. $\operatorname{disc} A = 0$이면 그 (3)에 의해 $A$의 고윳값은 정확히 $h$ 하나이다. (5)에 의해 $A$가 대각화 가능인 것은 정확히 $A = hI_2$일 때이다.

**(7)의 증명.** $n$은 자연수이므로 $\dim V \ge 1$이다. $V$의 기저 $\mathcal{B}$를 하나 잡고([[dimension|유한차원과 차원]]의 (1)) $B = [T]_{\mathcal{B}}$로 둔다([[matrix-in-bases|기저에 관한 선형사상의 행렬]]). 대각화 가능의 (6)에 의해 $T$가 대각화 가능인 것은 정확히 $B$가 대각화 가능일 때이다. 완전히 인수분해되는 특성다항식의 (5)에 의해 $T$가 완전히 인수분해되는 것은 정확히 $B$가 그럴 때이고, [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (5)의 정의에 의해 $p_T = p_B$이므로 두 완전 인수분해는 같다. [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 (6)에 의해 $T$의 고윳값은 정확히 $B$의 고윳값이고, 두 중복도의 (6)의 (ii)에 의해 모든 실수에서 $T$의 두 중복도는 $B$의 것과 같다. 따라서 (1)–(3)의 조건과 결론이 $T$와 $B$에서 같은 말이 되고, $B$에 대한 (1)–(3)에서 $T$에 대한 것이 나온다. (4): $T$의 고윳값을 빠짐없이 늘어놓은 열은 $B$의 것과 같고 $\operatorname{tr} T = \operatorname{tr} B$, $\det T = \det B$이다([[determinant-and-trace-of-linear-map|선형사상의 행렬식과 대각합]]).

(5)의 선형사상판: $T$가 대각화 가능이고 고윳값이 정확히 $\lambda$ 하나이면, (5)의 증명의 첫 문단과 같이 차원 항목의 (3)의 (나)에 의해 $\operatorname{Ker}(T - \lambda\, i_V) = V$이고 모든 $v$에서 $Tv = \lambda v = (\lambda i_V)v$이다([[linear-maps-form-a-vector-space|선형사상의 공간]]의 스칼라배는 값마다의 것이다). 값이 모두 같으므로 함수로서 $T = \lambda i_V$이다. 거꾸로 $T = \lambda i_V$이면 모든 $v$에서 $Tv = \lambda v$이므로 $\operatorname{Ker}(T - \lambda\, i_V) = V$이다. $n \ge 1$이므로 $V$의 기저의 첫째 항은 $0_V$가 아니고 $\lambda$에 속하는 고유벡터이다. $\mu$가 고윳값이고 $v$가 $\mu$에 속하는 고유벡터이면 $\lambda v = Tv = \mu v$이므로 [[vector-space-basic-properties|(B11), (B6)]]과 [[real-number-arithmetic|(K12)]]에 의해 $\mu = \lambda$이다. 따라서 고윳값은 정확히 $\lambda$이고, 길이 $1$인 열 $\lambda$에 대하여 차원 항목의 (3)의 (나)가 성립하므로 $T$는 대각화 가능이다. $\blacksquare$
:::

## 예시와 반례

:::example[대각성분이 2, 0, 2 인 대각행렬]
$D = \operatorname{diag}(2, 0, 2)$는 대각행렬이므로 [[change-of-basis-and-similarity|닮음]]의 (4)에 의해 자기 자신과 닮아 대각화 가능입니다. (4)로 읽어 봅시다. [[diagonalizable|대각화 가능]]의 (4)에 의해 고윳값은 정확히 $2$와 $0$이고, 열 $2, 0$이 고윳값을 빠짐없이 늘어놓은 열입니다. [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)에 의해 $(D - 2I_3)x = (0, -2x_2, 0)$이므로 고윳값 $2$의 고유공간은 $x_2 = 0$인 $x$ 전체, 곧 $\operatorname{span}(e_1, e_3)$이고 그 차원은 $2$입니다. $(D - 0I_3)x = Dx = (2x_1, 0, 2x_3)$이므로 고윳값 $0$의 고유공간은 $\operatorname{span}(e_2)$이고 차원은 $1$입니다. (4)에 의해 $p_D = (-1)^3 (t - 2)^2 (t - 0)^1$이고 $\operatorname{tr} D = 2 \cdot 2 + 1 \cdot 0 = 4$, $\det D = 2^2 \cdot 0^1 = 0$입니다. 대각성분으로 직접 계산한 $2 + 0 + 2 = 4$, $2 \cdot 0 \cdot 2 = 0$과 맞습니다. 이 예에서 고윳값 $2$의 대수적 중복도는 $2$가 대각성분에 나오는 횟수와 같고, 두 자리가 이어져 있지 않아도 그렇습니다.
:::

:::counterexample[대각성분이 같고 대각화 가능이 아닌 2 × 2 행렬]
$K = \begin{pmatrix} -1 & 4 \\ 0 & -1 \end{pmatrix}$이라 합시다. [[real-eigenvalues-2x2|2 × 2 행렬의 실고윳값]]의 (1)에 의해 $\operatorname{disc} K = (-1 - (-1))^2 + 4 \cdot 4 \cdot 0 = 0$이고, $h = 2^{-1} \cdot (-2) = -1$입니다. $K \ne (-1)I_2$($(1, 2)$ 성분이 $4 \ne 0$)이므로 (6)에 의해 $K$는 대각화 가능이 아닙니다. 그 (3)에 의해 $p_K = (t - (-1))^2$이고 $(-1)^2 = 1$이므로 $K$는 완전히 인수분해되며, (2)에 따르면 고윳값 $-1$의 기하적 중복도가 대수적 중복도 $2$보다 작아야 합니다. 실제로 $(K + I_2)x = (4x_2, 0)$이므로 고유공간은 $\operatorname{span}(e_1)$이고 그 차원은 $1$입니다. 판별식이 $0$인 $2 \times 2$ 행렬 가운데 $(-1)I_2$는 대각화 가능하고 $K$는 그렇지 않으므로, 판별식만으로는 정해지지 않습니다.
:::

## 확인 질문

:::check[$3 \times 3$ 행렬 $A$가 대각화 가능이고 고윳값이 정확히 $5$ 하나이면 $A$는 무엇인가?]
$5I_3$입니다. (5)에 의해 대각화 가능이고 고윳값이 정확히 $5$ 하나인 것은 정확히 $A = 5I_3$일 때입니다.
:::

:::check[$4 \times 4$ 행렬 $A$의 특성다항식이 $(t - 1)^2 (t - 2)^2$이고 고윳값 $1$의 고유공간이 2차원, 고윳값 $2$의 고유공간이 1차원이면 $A$는 대각화 가능인가?]
아닙니다. $(-1)^4 = 1$이므로 이것은 $r = 2$, $\mu = 1, 2$, $m = 2, 2$인 완전 인수분해이고, 완전히 인수분해되는 특성다항식의 (2)의 (iii)에 의해 고윳값 $2$의 대수적 중복도는 $2$입니다. 그 기하적 중복도는 $1 < 2$이므로 (2)에 의해 $A$는 대각화 가능이 아닙니다. 고윳값 $1$에서 두 중복도가 같아도 그렇습니다.
:::
