---
title: 스펙트럼 정리의 따름
title_en: Consequences of the Spectral Theorem
aliases: [스펙트럼 분해, 고유공간의 직교 분해, spectral decomposition]
kind: corollary
field: linear-algebra
msc: ["15A18"]
level: undergrad
summary: 대칭행렬과 자기수반사상은 대각화 가능하고, 특성다항식이 완전히 인수분해되며, 모든 고윳값에서 기하적 중복도와 대수적 중복도가 같다. 서로 다른 고윳값의 고유공간들은 서로 직교하고 합이 전체 공간이며, 대각합과 행렬식은 고윳값을 중복도만큼 더하고 곱한 것이다. 고유공간으로의 직교사영들의 합은 항등사상이고, 사상 자신은 고윳값을 곱한 직교사영들의 합이다.
requires: [real-number-arithmetic, vector-space, vector-space-basic-properties, finite-sum-of-vectors, finite-product-of-reals, linear-map, linear-maps-form-a-vector-space, dimension, matrix, transpose, matrix-product, matrix-vector-product, matrix-of-a-linear-map, real-eigenvalues-2x2, eigenvalue-and-eigenvector, diagonalizable, independent-subspaces, diagonalizable-iff-eigenspace-dimensions, algebraic-multiplicity, split-characteristic-polynomial, diagonalizable-iff-split-and-multiplicities, determinant-and-trace-of-linear-map, inner-product-space, standard-inner-product, orthogonal-vectors, orthogonal-projection, orthonormal-basis-exists, orthogonal-complement, properties-of-orthogonal-projection, self-adjoint-map, invariant-subspaces-of-self-adjoint-map, change-of-orthonormal-basis, symmetric-matrix-has-eigenvalue, spectral-theorem]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 6장 2절 Spectral theorem for self-adjoint and normal operators 의 Theorem 2.1 뒤 문단과 Proposition 2.3, p.167; 6장 1절 연습문제 1.1, p.165; 4장 2절의 Remark 2.4, p.109; 5장 3절 연습문제 3.8, 3.13, pp.134–135; 9장 3절 Generalized eigenspaces 의 Lemma 3.7, p.263
    checked: original
    note: "(2)의 '서로 다른 고윳값의 고유공간들은 직교한다'는 출처 6장 2절(p.167)이 'Theorem 2.1 에서 자기수반사상의 고유공간들이 직교한다는 것이 나온다'고 적고 Proposition 2.3 으로 따로 증명하는 것과 같다. 이 항목은 그 직접 증명을 담은 앞 단원 항목을 인용한다. (1)의 대각화 가능은 출처 Theorem 2.1 의 '고유벡터로 된 정규직교 기저'에서 바로 나오고, 중복도가 같다는 것은 출처 4장의 대각화 판정(기하적 중복도와 대수적 중복도)을 이 사이트의 선형대수 2 항목으로 쓴 것이다. 출처 4장 2절 Remark 2.4(p.109)는 서로 다른 고윳값의 고유공간들이 일차독립이라고 적는다. (2)의 대각합과 행렬식은 출처 6장 1절 연습문제 1.1(p.165)이 상삼각 표현으로 '행렬식은 고윳값의 곱, 대각합은 고윳값의 합(중복도를 세어)'임을 보이라고 하는 것의 대칭행렬판이고, 이 항목은 선형대수 2 의 완전 인수분해 항목의 (7)로 얻는다. (3)의 스펙트럼 분해 T = μ₁P₁ + ⋯ + μ_rP_r 는 출처에 이 꼴로 진술되어 있지 않다(검색어 'spectral decomposition' 0건, 'eigenspaces' 8건과 'orthogonal projection' 으로 6장 1–3절 본문과 연습문제를 읽었다). 출처 5장 3절 연습문제 3.13 의 a)(p.135)는 E 로의 직교사영 P 와 E^⊥ 로의 직교사영 Q 에 대해 P + Q 와 PQ 를 묻는데, 이것은 (3)에서 고유공간이 둘인 경우의 '직교사영의 합은 항등사상, 서로 다른 둘의 합성은 영사상'과 같은 내용이다. 같은 절의 연습문제 3.8(p.134)은 직교사영의 고윳값과 고유공간을 묻는다. 출처 9장 3절 Lemma 3.7(p.263)은 일반화 고유공간 E_k 에 대해 P₁ + P₂ + ⋯ + P_r = I, j ≠ k 이면 P_k 를 E_j 로 제한한 것이 0, E_k 의 원소 v 에서 P_k v = v 인 사상 P_k 를 다항식으로 만드는데, 이것은 (3)의 (i)의 x = P₁x + ⋯ + P_rx 와 (iii)과 같은 꼴의 사실이다(출처의 P_k 는 직교사영으로 정의되지 않고, 출처는 그 자리에서 A 를 λ_kP_k 의 합으로 적지 않는다). 확인 질문 '대칭행렬 $A$의 서로 다른 두 고윳값 $3$과 $7$의 고유벡터가 각각 $(1, 1, 0)$과 $(a, 2, 5)$이면 $a$는 무엇인가?'는 출처 Proposition 2.3(p.167)의 결론을 쓰는 계산이다. 증명은 이 사이트가 썼고, 합의 재배열을 쓰지 않도록 원소의 표현에서 j 번째 항을 떼어 내는 길로 했다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(귀납의 구조 통독, 예의 고유벡터·그람–슈미트 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$V$가 [[dimension|유한차원]]인 [[inner-product-space|내적공간]]이고 $\dim V = n \ge 1$이며 $T : V \to V$가 [[self-adjoint-map|자기수반사상]]이라 하자. 또 $A$가 $n \times n$ [[self-adjoint-map|대칭행렬]]이고 $\mathbb{R}^n$에는 [[standard-inner-product|표준내적]]을 준다. 대각화 가능은 [[diagonalizable|대각화 가능]]의 것, 특성다항식이 완전히 인수분해된다는 것과 완전 인수분해는 [[split-characteristic-polynomial|완전히 인수분해되는 특성다항식]]의 것, 대수적·기하적 중복도는 [[algebraic-multiplicity|고윳값의 대수적 중복도와 기하적 중복도]]의 것, "고윳값을 빠짐없이 늘어놓은 열"과 $E_j$, $g_j$는 [[diagonalizable-iff-eigenspace-dimensions|고유공간의 차원과 대각화]]의 것, 부분공간들의 합과 일차독립은 [[independent-subspaces|일차독립인 부분공간들]]의 것, $E^\perp$는 [[orthogonal-complement|직교 여공간]]의 것, $\operatorname{proj}_E$는 [[orthogonal-projection|직교사영]]의 것, $\operatorname{tr}$, $\det$는 [[determinant-and-trace-of-linear-map|선형사상의 행렬식과 대각합]]과 그 행렬판의 것이다. $L(V, V)$의 덧셈과 스칼라배는 [[linear-maps-form-a-vector-space|선형사상의 공간]]의 것이다.

1. (대각화와 중복도) $T$는 대각화 가능하고, $T$의 특성다항식은 완전히 인수분해되며, $T$의 모든 고윳값 $\lambda$에서 $\lambda$의 기하적 중복도는 대수적 중복도와 같다. $A$에 대해서도 같다.
2. (고유공간) $T$의 고윳값을 빠짐없이 늘어놓은 열 $\mu_1, \dots, \mu_r$이 있고 $r \ge 1$이다. 이런 열에 대하여 $E_j = \operatorname{Ker}(T - \mu_j i_V)$, $g_j = \dim E_j$라 하면 다음이 성립한다.
   - (i) $j \ne k$이면 $E_j \subseteq E_k^\perp$이다. 곧 서로 다른 고윳값의 고유공간들은 서로 직교한다.
   - (ii) 부분공간들 $E_1, \dots, E_r$은 일차독립이고 $E_1 + \cdots + E_r = V$이며 $g_1 + \cdots + g_r = n$이다.
   - (iii) $r$, $\mu$, $g$는 $T$의 특성다항식의 완전 인수분해이고 $\operatorname{tr} T = g_1 \mu_1 + \cdots + g_r \mu_r$, $\det T = \mu_1^{g_1} \cdots \mu_r^{g_r}$이다.

   $A$에 대해서도 $T$를 $A$로, $V$를 $\mathbb{R}^n$으로 바꾸어 같다($E_j$는 $A$의 고유공간이다).
3. (스펙트럼 분해) (2)의 열과 고유공간에 대하여 $P_j = \operatorname{proj}_{E_j} : V \to V$라 하자([[orthonormal-basis-exists|정규직교 기저의 존재와 확장]]의 (4)에 의해 정해진다). 그러면 다음이 성립한다.
   - (i) 모든 $x \in V$에서 $x = P_1 x + \cdots + P_r x$이고 $Tx = \mu_1 P_1 x + \cdots + \mu_r P_r x$이다. 곧 길이 $r$인 열 $P_1 x, \dots, P_r x$는 $x$의 $E_1 + \cdots + E_r$에서의 표현이다.
   - (ii) $L(V, V)$에서 $i_V = P_1 + \cdots + P_r$이고 $T = \mu_1 P_1 + \cdots + \mu_r P_r$이다.
   - (iii) 모든 $j$에서 $P_j \circ P_j = P_j$이고, $j \ne k$이면 $P_j \circ P_k$는 영사상이다.
4. (행렬의 스펙트럼 분해) $\mu_1, \dots, \mu_r$이 $A$의 고윳값을 빠짐없이 늘어놓은 열이고 $E_j$가 $A$의 고유공간, $P_j = \operatorname{proj}_{E_j} : \mathbb{R}^n \to \mathbb{R}^n$이며 $[P_j]$가 [[matrix-of-a-linear-map|선형사상의 행렬]]이면
   $$
   \begin{aligned}
   I_n &= [P_1] + \cdots + [P_r], \\
   A &= \mu_1 [P_1] + \cdots + \mu_r [P_r]
   \end{aligned}
   $$
   이고, 모든 $j$에서 $[P_j]^T = [P_j]$, $[P_j][P_j] = [P_j]$이다.
:::

:::english
Let $V$ be a finite-dimensional inner product space with $\dim V = n \ge 1$ and $T : V \to V$ a self-adjoint map. Let also $A$ be an $n \times n$ symmetric matrix and give $\mathbb{R}^n$ the standard inner product. Diagonalizability is that of the entry on diagonalizability, splitting of the characteristic polynomial and the splitting data are those of the entry on split characteristic polynomials, algebraic and geometric multiplicities are those of the entry on them, "a sequence listing all eigenvalues" and $E_j$, $g_j$ are those of the entry on eigenspace dimensions and diagonalization, sums and independence of subspaces are those of the entry on independent subspaces, $E^\perp$ is the orthogonal complement, $\operatorname{proj}_E$ is the orthogonal projection, and $\operatorname{tr}$, $\det$ are those of the entry on the determinant and trace of a linear map and their matrix versions. Addition and scalar multiplication in $L(V, V)$ are those of the entry on the space of linear maps.

1. (Diagonalization and multiplicities) $T$ is diagonalizable, the characteristic polynomial of $T$ splits, and for every eigenvalue $\lambda$ of $T$ the geometric multiplicity of $\lambda$ equals its algebraic multiplicity. The same holds for $A$.
2. (Eigenspaces) There is a sequence $\mu_1, \dots, \mu_r$ listing all eigenvalues of $T$, and $r \ge 1$. For such a sequence put $E_j = \operatorname{Ker}(T - \mu_j i_V)$ and $g_j = \dim E_j$. Then:
   - (i) If $j \ne k$, then $E_j \subseteq E_k^\perp$; that is, eigenspaces for distinct eigenvalues are orthogonal to each other.
   - (ii) The subspaces $E_1, \dots, E_r$ are independent, $E_1 + \cdots + E_r = V$, and $g_1 + \cdots + g_r = n$.
   - (iii) $r$, $\mu$, $g$ is a splitting of the characteristic polynomial of $T$, and $\operatorname{tr} T = g_1 \mu_1 + \cdots + g_r \mu_r$, $\det T = \mu_1^{g_1} \cdots \mu_r^{g_r}$.

   The same holds for $A$, replacing $T$ by $A$ and $V$ by $\mathbb{R}^n$ ($E_j$ being the eigenspaces of $A$).
3. (Spectral decomposition) For the sequence and eigenspaces of (2), let $P_j = \operatorname{proj}_{E_j} : V \to V$ (determined by item (4) of the entry on the existence and extension of orthonormal bases). Then:
   - (i) For every $x \in V$, $x = P_1 x + \cdots + P_r x$ and $Tx = \mu_1 P_1 x + \cdots + \mu_r P_r x$; that is, the sequence $P_1 x, \dots, P_r x$ of length $r$ is a representation of $x$ in $E_1 + \cdots + E_r$.
   - (ii) In $L(V, V)$, $i_V = P_1 + \cdots + P_r$ and $T = \mu_1 P_1 + \cdots + \mu_r P_r$.
   - (iii) $P_j \circ P_j = P_j$ for every $j$, and $P_j \circ P_k$ is the zero map if $j \ne k$.
4. (Spectral decomposition of matrices) If $\mu_1, \dots, \mu_r$ lists all eigenvalues of $A$, $E_j$ are the eigenspaces of $A$, $P_j = \operatorname{proj}_{E_j} : \mathbb{R}^n \to \mathbb{R}^n$ and $[P_j]$ is the matrix of a linear map, then
   $$
   \begin{aligned}
   I_n &= [P_1] + \cdots + [P_r], \\
   A &= \mu_1 [P_1] + \cdots + \mu_r [P_r] ,
   \end{aligned}
   $$
   and $[P_j]^T = [P_j]$, $[P_j][P_j] = [P_j]$ for every $j$.
:::

## 직관

[[spectral-theorem|실스펙트럼 정리]]는 고유벡터로 된 정규직교 기저가 있다고 말합니다. 그 기저의 벡터들을 고윳값별로 묶으면 각 묶음이 고유공간을 생성하고, 고유공간들은 서로 수직이며 다 합치면 전체 공간이 됩니다. 이 항목은 그 그림을 기저를 고르지 않는 말로 옮깁니다.

스펙트럼 분해는 벡터 $x$를 고유공간마다의 그림자 $P_j x$로 나눈 것입니다. 방 안의 한 점을 바닥, 앞벽, 옆벽 세 방향의 그림자로 나누면 세 그림자를 더해 원래 점이 되는 것과 같습니다. 비유가 정의와 맞는 곳은 세 방향이 서로 수직이라는 것이 (2)의 (i)에, 그림자를 더하면 원래 점이라는 것이 (3)의 (i)에 해당한다는 점입니다. 비유와 달리 한 고유공간이 여러 차원일 수 있고(그림자가 한 직선이 아니라 평면일 수 있고), 고윳값이 하나뿐이면 그림자도 하나뿐이어서 $P_1 = i_V$입니다. $T$는 그림자마다 그 고윳값을 곱할 뿐이므로 $Tx$는 $\mu_j P_j x$의 합입니다.

대칭이 아닌 행렬도 대각화 가능하면 $x$를 고유공간의 원소들의 합으로 나눌 수 있지만, 그때 나눈 조각은 직교사영이 아닐 수 있습니다. (3)의 (i)이 직교사영으로 쓰이는 것은 (2)의 (i)의 직교성 덕분입니다.

## 증명

:::idea
실스펙트럼 정리로 $T$가 대각화 가능함을 얻고, 선형대수 2 의 대각화 판정 항목들로 중복도·완전 인수분해·대각합·행렬식을 읽는다. 스펙트럼 분해는 $x$의 표현 $x_1 + \cdots + x_r$에서 $j$번째 항을 떼어 낸 나머지가 $E_j$에 직교하므로 $x_j$가 $E_j$로의 직교사영이라는 것으로 보인다.
:::

:::hint
$x - x_j$는 $x_j$를 지운 열의 합입니다([[finite-sum-of-vectors|벡터의 유한 합]]의 (H6)). 그 열의 항은 모두 $E_j$와 다른 고유공간에 속합니다.
:::

:::hint
$L(V, V)$의 원소들의 합의 $x$에서의 값은, $S$를 $Sx$로 보내는 함수 $L(V, V) \to V$가 선형사상이라는 것에서 나옵니다.
:::

:::proof
아래에서 (B1)–(B12)는 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 것, (H0)–(H7)은 [[finite-sum-of-vectors|벡터의 유한 합]]의 것, (T-합), (T-배), (T4), (T5)는 [[linear-map|선형사상]]의 것이다. 대각화 판정 항목들은 [[diagonalizable-iff-eigenspace-dimensions|고유공간의 차원과 대각화]]를 "고유공간 항목", [[diagonalizable-iff-split-and-multiplicities|대각화 가능의 판정: 인수분해와 중복도]]를 "중복도 항목"으로 줄여 부른다.

**(1).** [[spectral-theorem|실스펙트럼 정리]]의 (1)에 의해 모든 항이 $T$의 고유벡터인 $V$의 정규직교 기저 $\mathcal{D}$가 있다. [[change-of-orthonormal-basis|정규직교 기저의 변환과 직교 닮음]]의 (6)에서 (가)가 성립하므로 (나)에 의해 $[T]_{\mathcal{D}'}$가 대각행렬인 정규직교 기저 $\mathcal{D}'$이 있고, [[diagonalizable|대각화 가능]]의 정의에 의해 $T$는 대각화 가능하다. 중복도 항목의 (7)에 의해 그 항목의 (1)이 $T$에 대해 성립하므로, $T$의 특성다항식은 완전히 인수분해되고 모든 고윳값에서 두 중복도가 같다.

$A$에 대해서는, [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (2)에 의해 $T_A : \mathbb{R}^n \to \mathbb{R}^n$이 자기수반이고 [[dimension|유한차원과 차원]]의 (4)에 의해 $\dim \mathbb{R}^n = n$이므로, 위의 결과에 의해 $T_A$는 대각화 가능하다. 대각화 가능의 (7)에 의해 $A$는 대각화 가능하고, 중복도 항목의 (1)에 의해 $A$는 완전히 인수분해되며 모든 고윳값에서 두 중복도가 같다.

**(2).** 고유공간 항목의 (1)에 의해 $T$의 고윳값을 빠짐없이 늘어놓은 열 $\mu_1, \dots, \mu_r$이 있다. 차원의 (3)과 $n \ge 1$에 의해 $V \ne \{0_V\}$이므로 [[symmetric-matrix-has-eigenvalue|대칭행렬의 실고윳값]]의 (5)에 의해 $T$는 고윳값 $\lambda$를 갖고, 빠짐없이 늘어놓은 열의 정의에 의해 $\lambda = \mu_k$인 $k \in \{1, \dots, r\}$이 있으므로 $\{1, \dots, r\}$은 공집합이 아니고 $r \ge 1$이다.

(i) $j \ne k$이면 열이 서로 다르므로 $\mu_j \ne \mu_k$이고, [[invariant-subspaces-of-self-adjoint-map|자기수반사상의 고유벡터와 불변 부분공간]]의 (6)에 의해 $E_j \subseteq E_k^\perp$이다.

(ii) 고유공간 항목의 (3)에 의해 부분공간들 $E_1, \dots, E_r$은 일차독립이고, (1)에 의해 $T$가 대각화 가능하므로 같은 (3)의 (나)와 (다)가 성립한다.

(iii) $T$가 대각화 가능하므로 중복도 항목의 (4)를 그 항목의 (7)에 따라 $T$에 쓰면 된다.

$A$에 대해서는 고유공간 항목의 (6)에 의해 같은 논증을 $V = \mathbb{R}^n$, $T = T_A$로 하고, (i)은 자기수반인 $T_A$에 불변 부분공간 항목의 (6)을 쓰며, (iii)은 중복도 항목의 (4)를 $A$에 바로 쓴다.

**(3).** $V$가 유한차원이므로 정규직교 기저의 존재와 확장의 (4)에 의해 각 $E_j$로의 직교사영 $P_j$가 정해지고 선형사상이다.

(i) $x \in V$라 하자. (2)의 (ii)에 의해 $x \in E_1 + \cdots + E_r$이므로, 일차독립인 부분공간들 항목의 합의 정의에 의해 모든 $j$에서 $x_j \in E_j$이고 $x = x_1 + \cdots + x_r$인 길이 $r$인 열 $x_1, \dots, x_r$이 있다. $j \in \{1, \dots, r\}$을 고정하고, $x$의 열에서 $j$번째 항을 지운 길이 $r - 1$인 열을 $c_1, \dots, c_{r-1}$이라 하자. (H6)에 의해 $x = (c_1 + \cdots + c_{r-1}) + x_j$이고, [[vector-space|벡터공간]]의 (V2), (B2), (B1)에 의해 $x - x_j = c_1 + \cdots + c_{r-1}$이다. 지운 열의 정의에 의해 각 $c_i$는 $i < j$이면 $x_i$, $i \ge j$이면 $x_{i+1}$이므로, $j$와 다른 어떤 $k$에서 $c_i \in E_k$이고, (2)의 (i)에 의해 $c_i \in E_j^\perp$이다. $y \in E_j$이면 [[inner-product-space|내적과 내적공간]]의 (3)의 (i)에 의해 $\langle x - x_j, y \rangle = \langle c_1, y \rangle + \cdots + \langle c_{r-1}, y \rangle$이고, 모든 항이 $0$이므로 (H5)에 의해 이 값은 $0$이다. 따라서 [[orthogonal-vectors|직교]]의 정의에 의해 $x - x_j \perp E_j$이고, $x_j \in E_j$이므로 [[orthogonal-projection|직교사영]]의 정의에 의해 $x_j$는 $x$의 $E_j$로의 직교사영이다. 직교사영의 (1)(유일성)과 (4)에 의해 $P_j x = x_j$이다.

이것이 모든 $j$에서 성립하므로 열 $P_1 x, \dots, P_r x$는 열 $x_1, \dots, x_r$과 같은 열이고, $x = P_1 x + \cdots + P_r x$이다. 또 (T4)에 의해 $Tx = Tx_1 + \cdots + Tx_r$이고, [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (1)에 의해 $x_j \in E_j$이면 $Tx_j = \mu_j x_j$이므로 $Tx = \mu_1 x_1 + \cdots + \mu_r x_r = \mu_1 P_1 x + \cdots + \mu_r P_r x$이다.

(ii) $x \in V$를 고정하고, $S \in L(V, V)$에서의 값이 $Sx$인 함수 $\varepsilon : L(V, V) \to V$를 생각한다. [[linear-maps-form-a-vector-space|선형사상의 공간]]의 정의에 의해 $\varepsilon(S + S') = (S + S')x = Sx + S'x$이고 $\varepsilon(\alpha S) = \alpha(Sx)$이므로 $\varepsilon$은 선형사상이다. (T4)와 (T5)에 의해 $(P_1 + \cdots + P_r)x = P_1 x + \cdots + P_r x$이고 $(\mu_1 P_1 + \cdots + \mu_r P_r)x = \mu_1 P_1 x + \cdots + \mu_r P_r x$이다. (i)에 의해 이 값들은 각각 $x = i_V x$와 $Tx$이다. 모든 $x$에서 값이 같으므로 함수의 같음에 의해 $i_V = P_1 + \cdots + P_r$이고 $T = \mu_1 P_1 + \cdots + \mu_r P_r$이다.

(iii) [[properties-of-orthogonal-projection|직교사영의 성질과 행렬]]의 (1)에 의해 $P_j \circ P_j = P_j$이고 $\operatorname{Ker} P_j = E_j^\perp$이다. $j \ne k$이고 $x \in V$이면 직교사영의 (4)의 (ii)에 의해 $P_k x \in E_k$이고, (2)의 (i)에 의해 $E_k \subseteq E_j^\perp = \operatorname{Ker} P_j$이므로 $P_j(P_k x) = 0_V$이다. 따라서 $P_j \circ P_k$는 모든 값이 $0_V$인 영사상이다.

**(4).** (2)를 $A$에 쓴 것과 같은 논증으로, (3)을 자기수반사상 $T_A$와 $V = \mathbb{R}^n$에 쓰면 $i_{\mathbb{R}^n} = P_1 + \cdots + P_r$이고 $T_A = \mu_1 P_1 + \cdots + \mu_r P_r$이다. 선형사상의 행렬의 (4)에 의해 $T$에서의 값이 $[T]$인 함수 $\Phi : L(\mathbb{R}^n, \mathbb{R}^n) \to M_{n \times n}$은 선형사상이므로 (T4)와 (T5)에 의해 $[i_{\mathbb{R}^n}] = [P_1] + \cdots + [P_r]$이고 $[T_A] = \mu_1 [P_1] + \cdots + \mu_r [P_r]$이다. 같은 항목의 (5)와 (2)에 의해 왼쪽은 각각 $I_n$과 $A$이다. 마지막 문장은 직교사영의 성질과 행렬의 (5)이다. $\blacksquare$
:::

## 예시와 반례

:::example[고윳값이 둘인 2 × 2 대칭행렬의 스펙트럼 분해]
$$
A = \begin{pmatrix} 4 & 2 \\ 2 & 1 \end{pmatrix}
$$
은 대칭이고 $\operatorname{tr} A = 5$, $\det A = 0$이어서 판별식이 $25$이므로, [[real-eigenvalues-2x2|2 × 2 행렬의 실고윳값]]의 (4)에 의해 고윳값은 정확히 $5$와 $0$입니다. $A(1, -2) = (0, 0)$이고 $A(2, 1) = (10, 5) = 5(2, 1)$입니다. (2)의 (ii)에 의해 두 고유공간의 차원의 합이 $2$이고 둘 다 영벡터가 아닌 벡터를 가지므로 둘 다 $1$차원이고, 고유공간은 $E_1 = \operatorname{Ker}(A - 0I_2) = \operatorname{span}((1, -2))$, $E_2 = \operatorname{Ker}(A - 5I_2) = \operatorname{span}((2, 1))$입니다. 직교사영의 성질과 행렬의 (4)로 단위벡터 $5^{-1}\sqrt{5}\,(1, -2)$, $5^{-1}\sqrt{5}\,(2, 1)$에서
$$
\begin{aligned}
[P_1] &= \frac{1}{5}\begin{pmatrix} 1 & -2 \\ -2 & 4 \end{pmatrix}, \\
[P_2] &= \frac{1}{5}\begin{pmatrix} 4 & 2 \\ 2 & 1 \end{pmatrix}
\end{aligned}
$$
이고, $[P_1] + [P_2] = I_2$, $0[P_1] + 5[P_2] = A$입니다. 또 $\operatorname{tr} A = 5 = 1 \cdot 0 + 1 \cdot 5$이고 $\det A = 4 - 4 = 0 = 0^1 \cdot 5^1$입니다.
:::

:::example[고윳값이 하나뿐인 경우]
$A = cI_n$이면 $c$가 하나뿐인 고윳값이고($r = 1$), $E_1 = \mathbb{R}^n$, $P_1 = \operatorname{proj}_{\mathbb{R}^n} = i_{\mathbb{R}^n}$입니다([[orthogonal-projection|직교사영]]의 (6)). (4)는 $I_n = [P_1]$, $cI_n = c[P_1]$이 되고, (2)의 (iii)은 $\operatorname{tr}(cI_n) = nc$, $\det(cI_n) = c^n$입니다.
:::

## 확인 질문

:::check[$3 \times 3$ 대칭행렬 $A$의 고윳값이 $2$와 $-1$뿐이고 $2$의 고유공간의 차원이 $1$이면, $\det A$와 $\operatorname{tr} A$는 무엇인가?]
(2)의 (ii)에 의해 기하적 중복도의 합이 $3$이므로 $-1$의 고유공간의 차원은 $2$입니다. (2)의 (iii)에 의해 $\operatorname{tr} A = 1 \cdot 2 + 2 \cdot (-1) = 0$이고 $\det A = 2^1 \cdot (-1)^2 = 2$입니다.
:::

:::check[대칭행렬 $A$의 서로 다른 두 고윳값 $3$과 $7$의 고유벡터가 각각 $(1, 1, 0)$과 $(a, 2, 5)$이면 $a$는 무엇인가?]
(2)의 (i)에 의해 두 고유공간은 직교하므로 $\langle (1, 1, 0), (a, 2, 5) \rangle = a + 2 = 0$이고 $a = -2$입니다.
:::
