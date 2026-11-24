---
title: 고유공간의 차원과 대각화
title_en: Eigenspace Dimensions and Diagonalizability
aliases: [고윳값을 빠짐없이 늘어놓은 열, 고유공간의 차원의 합, 대각화 판정, 기하적 중복도의 합, diagonalizability criterion, sum of eigenspace dimensions, eigenspaces form a basis]
kind: theorem
field: linear-algebra
msc: ["15A18"]
level: undergrad
summary: 유한차원 공간의 선형사상이나 정사각행렬의 서로 다른 고윳값을 빠짐없이 늘어놓은 열은 늘 있다. 고윳값이 하나도 없으면 대각화 가능하지 않고, 고윳값이 있으면 대각화 가능한 것은 정확히 고유공간들의 합이 공간 전체일 때이고, 정확히 고유공간들의 차원의 합이 공간의 차원과 같을 때이다.
requires: [function, finite-set, prime-number, well-ordering-principle, real-function-space, real-number-arithmetic, vector-space, vector-space-basic-properties, subspace, finite-sum-of-vectors, standard-basis, linear-combination-and-span, linear-independence, basis, basis-iff-independent-and-spanning, dimension, independent-and-spanning-bounds, sequences-in-a-subspace, dimension-of-subspace, linear-map, kernel-and-range, matrix, matrix-vector-product, eigenvalue-and-eigenvector, matrix-in-bases, change-of-basis-and-similarity, diagonalizable, diagonalizable-iff-eigenbasis, eigenvectors-of-distinct-eigenvalues, eigenvalues-of-triangular-matrix, eigenvalue-examples, independent-subspaces, concatenating-bases]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 4장 2.5절 Criterion of diagonalizability 의 Theorem 2.8 의 증명, p.112; 2.7.3절 A non-diagonalizable matrix, pp.113–114; 4장 연습문제 2.7, 2.10, p.115; 9장 3.1절 Invariant subspaces 의 고유공간 문단, p.260
    checked: original
    note: "출처는 이 정리를 중복도 없이 따로 진술하지 않는다. 9장 3.1절(p.260)이 지나가며 고유공간들 Ker(A − λ_kI) 이 늘 기저(부분공간들의 기저)를 이루지는 않고, 정확히 A 가 대각화 가능할 때 이룬다고 적으며 4장 Theorem 2.1 을 가리킨다. 이 항목의 (3)의 (가)와 (나)가 그 동치이다. 출처의 Theorem 2.8(p.111)은 '중복도를 세어 고윳값이 정확히 n = dim V 개'라는 가정 아래 대각화 가능인 것은 정확히 모든 고윳값에서 고유공간의 차원(기하적 중복도)이 대수적 중복도와 같을 때라고 진술하고, 그 증명의 뒤쪽(p.112)은 고유공간 E_k 들이 Remark 2.4 에 의해 일차독립이고 각 E_k 의 기저 B_k 를 Lemma 2.7 로 합치면 dim E_k 들의 합만큼의 일차독립인 고유벡터가 생기며, 그 수가 n 이면 기저라고 적는다. 이 항목의 (3)의 (다) ⇒ (가)가 이 논증을 대수적 중복도 없이 쓴 것이다. 출처는 고윳값 전체를 스펙트럼 σ(A)(p.100)라는 집합으로 두고, 이 항목은 집합 대신 '고윳값을 빠짐없이 늘어놓은 열'을 정의해 (1)에서 그런 열이 있다는 것을 eigenvectors-of-distinct-eigenvalues 의 (4)와 정렬 원리로 증명한다. (5)는 출처 Corollary 2.3(p.109: 서로 다른 고윳값이 정확히 n = dim V 개이면 대각화 가능)과 같은 결론이다. (4)는 출처 9장 3.1절(p.260)이 불변 부분공간들의 기저를 이어 붙인 기저에서 행렬이 블록 대각 꼴이 되고 고유공간으로 제한한 사상은 λ_kI 라고 적은 것을 고유공간들에 쓴 것과 같은 꼴이다. 모든 증명은 이 사이트가 썼다. 예시 'N 의 고유공간의 차원'은 출처 2.7.3절(pp.113–114)의 (1 1; 0 1) 과 같은 행렬이고, 출처도 그 절 끝에서 특성다항식 없이 '고유공간이 1 차원이므로 대각화 가능하다면 대각형이 단위행렬이 되어 고유공간이 2 차원이어야 한다'고 같은 결론을 낸다. 고윳값 1 과 고유공간 span(e₁) 은 eigenvalue-examples 의 (2)를 인용한다. 예시 '겹친 대각성분의 고유공간이 2 차원인 아래삼각행렬'은 출처 연습문제 2.7(p.115: 대각성분 2, 2, 4 인 위삼각행렬 (2 0 6; 0 2 4; 0 0 4) 의 대각화)과 같은 발상(삼각행렬에서 겹친 대각성분의 고유공간이 2 차원이라 대각화 가능하다)이다. 확인 질문 '$4 \\times 4$ 행렬 $A$의 고윳값이 정확히 서로 다른 두 수 $\\mu_1$, $\\mu_2$이고 $\\operatorname{Ker}(T_A - \\mu_1 i_{\\mathbb{R}^4})$가 3차원이면 $A$는 대각화 가능인가?'는 출처 연습문제 2.10(p.115: 고윳값이 셋인 5 × 5 행렬에서 한 고유공간이 3 차원이면 대각화 가능한지 묻는다)과 같은 발상이다. 확인 질문 '$B = \\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}$은 대각화 가능인가?'의 행렬은 자기 자신과의 곱이 영행렬이므로 eigenvalue-examples 의 (3)과 출처 연습문제 2.12(p.115: 0 이 아닌 멱영행렬은 대각화할 수 없다)와 같은 결론이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 일반 문장으로 읽히던 반례 제목 1건, 귀납 명제의 범위 2건, 증명과 어긋난 직관 2건, 다른 항목의 예시에 기대던 근거 3건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$V$가 [[dimension|유한차원]] [[vector-space|벡터공간]]이고 $\dim V = n \ge 1$이며 $T : V \to V$가 [[linear-map|선형사상]]이라 하자. 고윳값, 고유벡터, 고유공간 $\operatorname{Ker}(T - \mu i_V)$는 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]에서, 실수의 열이 서로 다르다는 것은 [[eigenvectors-of-distinct-eigenvalues|서로 다른 고윳값의 고유벡터]]에서, 대각화 가능은 [[diagonalizable|대각화 가능]]에서, 부분공간들의 합과 일차독립은 [[independent-subspaces|일차독립인 부분공간들]]에서 정한 것이다.

**고윳값을 빠짐없이 늘어놓은 열.** $r \ge 0$인 정수와 길이 $r$인 실수의 열 $\mu_1, \dots, \mu_r$에 대하여, 이 열이 **$T$의 고윳값을 빠짐없이 늘어놓은 열**인 것은 정확히 이 열이 서로 다르고, 모든 항이 $T$의 고윳값이며, $T$의 모든 고윳값 $\lambda$에 대하여 $\lambda = \mu_k$인 $k \in \{1, \dots, r\}$이 있을 때이다. 이때 $E_k = \operatorname{Ker}(T - \mu_k i_V)$로 쓰고, $E_k$는 $V$의 부분공간이므로 [[dimension-of-subspace|부분공간의 차원]]의 (1)에 의해 유한차원이다. $g_k = \dim E_k$로 쓴다.

1. $T$의 고윳값을 빠짐없이 늘어놓은 열이 있다. 그런 열의 길이 $r$은 $r \le n$이다.
2. $r = 0$인 열이 $T$의 고윳값을 빠짐없이 늘어놓은 열이면, 곧 $T$에 고윳값이 하나도 없으면, $T$는 대각화 가능하지 않다.
3. $\mu_1, \dots, \mu_r$이 $T$의 고윳값을 빠짐없이 늘어놓은 열이고 $r \ge 1$이라 하자. 모든 $k$에서 $g_k \ge 1$이고, 부분공간들 $E_1, \dots, E_r$은 일차독립이다. 다음 세 조건은 서로 같다.

   (가) $T$는 대각화 가능이다.

   (나) $E_1 + \cdots + E_r = V$이다.

   (다) $g_1 + \cdots + g_r = n$이다.
4. (3)의 조건이 성립한다고 하자. $s_0 = 0$, $1 \le k \le r$에서 $s_k = g_1 + \cdots + g_k$로 두고 $\Lambda = \{(k, j) \in \mathbb{Z} \times \mathbb{Z} : 1 \le k \le r,\ 1 \le j \le g_k\}$라 하자([[concatenating-bases|이어 붙인 기저]]의 (2)에서 $d = g$로 둔 것). 그러면 $V$의 기저 $\mathcal{B} = b_1, \dots, b_n$으로서 모든 $(k, j) \in \Lambda$에서 $b_{s_{k-1}+j} \in E_k$이고 각 $k$에서 $j$를 $b_{s_{k-1}+j}$로 보내는 길이 $g_k$인 열이 $E_k$의 기저인 것이 있다. 이런 기저에 대하여, 모든 $(k, j) \in \Lambda$에서 $\delta_{s_{k-1}+j} = \mu_k$인 길이 $n$인 실수의 열 $\delta$가 꼭 하나 있고 $[T]_{\mathcal{B}} = \operatorname{diag}(\delta_1, \dots, \delta_n)$이다([[matrix-in-bases|기저에 관한 선형사상의 행렬]]).
5. 모든 항이 $T$의 고윳값이고 서로 다른 길이 $n$인 실수의 열은 $T$의 고윳값을 빠짐없이 늘어놓은 열이고, 그 열에 대하여 (3)의 (나)와 (다)가 성립한다. 따라서 (3)에 의해 $T$는 대각화 가능이다. 이것은 서로 다른 고윳값의 고유벡터의 (5)와 같은 결론이다.
6. (행렬) $A$가 $n \times n$ [[matrix|행렬]]이면, $A$의 고윳값과 고유공간은 $T_A : \mathbb{R}^n \to \mathbb{R}^n$의 것이고 $\dim \mathbb{R}^n = n$이다. "$A$의 고윳값을 빠짐없이 늘어놓은 열"은 $T_A$의 고윳값을 빠짐없이 늘어놓은 열을 말한다. (1)–(5)는 $V = \mathbb{R}^n$, $T = T_A$로 두고 "$T$는 대각화 가능이다"를 "$A$는 대각화 가능이다"로 바꿔도 성립한다. (4)의 기저 $\mathcal{B}$에 대하여 $k$번째 열이 $b_k$인 행렬을 $S$라 하면 $S$는 가역이고 $A = S \operatorname{diag}(\delta_1, \dots, \delta_n) S^{-1}$이다.
:::

:::english
Let $V$ be a finite-dimensional vector space with $\dim V = n \ge 1$, and let $T : V \to V$ be a linear map. Eigenvalues, eigenvectors and eigenspaces $\operatorname{Ker}(T - \mu i_V)$ are as in the entry on eigenvalues and eigenvectors, distinctness of a sequence of real numbers as in the entry on eigenvectors of distinct eigenvalues, diagonalizability as in the entry on diagonalizability, and sums and linear independence of subspaces as in the entry on linearly independent subspaces.

**A list of all eigenvalues.** For an integer $r \ge 0$ and a sequence $\mu_1, \dots, \mu_r$ of real numbers of length $r$, this sequence is **a list of all eigenvalues of $T$** exactly when it is distinct, every term is an eigenvalue of $T$, and for every eigenvalue $\lambda$ of $T$ there is $k \in \{1, \dots, r\}$ with $\lambda = \mu_k$. We then write $E_k = \operatorname{Ker}(T - \mu_k i_V)$; since $E_k$ is a subspace of $V$, it is finite-dimensional by (1) of the entry on dimensions of subspaces. We write $g_k = \dim E_k$.

1. A list of all eigenvalues of $T$ exists. The length $r$ of such a list satisfies $r \le n$.
2. If the sequence with $r = 0$ is a list of all eigenvalues of $T$, that is, if $T$ has no eigenvalue at all, then $T$ is not diagonalizable.
3. Let $\mu_1, \dots, \mu_r$ be a list of all eigenvalues of $T$ with $r \ge 1$. Then $g_k \ge 1$ for every $k$, and the subspaces $E_1, \dots, E_r$ are linearly independent. The following three conditions are equivalent.

   (a) $T$ is diagonalizable.

   (b) $E_1 + \cdots + E_r = V$.

   (c) $g_1 + \cdots + g_r = n$.
4. Suppose the conditions of (3) hold. Put $s_0 = 0$ and $s_k = g_1 + \cdots + g_k$ for $1 \le k \le r$, and let $\Lambda = \{(k, j) \in \mathbb{Z} \times \mathbb{Z} : 1 \le k \le r,\ 1 \le j \le g_k\}$ (as in (2) of the entry on concatenating bases with $d = g$). Then there is a basis $\mathcal{B} = b_1, \dots, b_n$ of $V$ such that $b_{s_{k-1}+j} \in E_k$ for all $(k, j) \in \Lambda$ and, for each $k$, the sequence of length $g_k$ sending $j$ to $b_{s_{k-1}+j}$ is a basis of $E_k$. For such a basis there is exactly one sequence $\delta$ of real numbers of length $n$ with $\delta_{s_{k-1}+j} = \mu_k$ for all $(k, j) \in \Lambda$, and $[T]_{\mathcal{B}} = \operatorname{diag}(\delta_1, \dots, \delta_n)$.
5. A distinct sequence of real numbers of length $n$ every term of which is an eigenvalue of $T$ is a list of all eigenvalues of $T$, and for this list conditions (b) and (c) of (3) hold. Hence, by (3), $T$ is diagonalizable. This is the same conclusion as (5) of the entry on eigenvectors of distinct eigenvalues.
6. (Matrices) If $A$ is an $n \times n$ matrix, the eigenvalues and eigenspaces of $A$ are those of $T_A : \mathbb{R}^n \to \mathbb{R}^n$, and $\dim \mathbb{R}^n = n$. "A list of all eigenvalues of $A$" means a list of all eigenvalues of $T_A$. Statements (1)–(5) hold with $V = \mathbb{R}^n$, $T = T_A$, and "$T$ is diagonalizable" replaced by "$A$ is diagonalizable". For the basis $\mathcal{B}$ of (4), if $S$ is the matrix whose $k$th column is $b_k$, then $S$ is invertible and $A = S \operatorname{diag}(\delta_1, \dots, \delta_n) S^{-1}$.
:::

## 직관

대각화 가능하다는 것은 고유벡터만으로 기저를 채울 수 있다는 것이었습니다([[diagonalizable-iff-eigenbasis|대각화와 고유벡터의 기저]]). 고유벡터는 모두 어떤 고유공간에 들고, 서로 다른 고윳값의 고유공간들은 일차독립이므로, 고유공간마다 기저를 잡아 이어 붙이면 고유벡터로 된 일차독립인 열이 됩니다([[concatenating-bases|이어 붙인 기저]]). 그 길이가 고유공간들의 차원의 합이고, 이 합이 $\dim V$에 이르는지가 고유벡터로 기저를 채울 수 있는지를 정합니다. 방마다 정원이 있는 기숙사에 비유하면, 고유공간이 방이고 그 차원이 정원이며, 정원의 합이 전체 인원 $n$과 같아야 모두가 방에 들어갑니다. 비유가 맞지 않는 곳은 정원의 합이 $n$보다 클 수는 없다는 점입니다. 고유공간들의 합은 $V$의 부분공간이기 때문입니다.

고윳값을 "빠짐없이" 늘어놓아야 한다는 조건은 (3)의 (가) ⇒ (다)의 증명에서 고유벡터로 된 기저의 각 항이 늘어놓은 고유공간 가운데 하나에 든다는 단계와, (2)의 증명에서 쓰입니다. 고윳값을 하나 빠뜨리면 그 고유공간의 차원이 빠져 대각화 가능한 사상에서도 합이 $n$보다 작을 수 있습니다(아래 반례). (2)는 고윳값이 하나도 없으면 고유벡터가 없으므로 고유벡터로 된 기저도 없다는 것입니다. 특성다항식과 대수적 중복도는 이 정리에 쓰이지 않습니다.

## 증명

:::idea
(가) ⇒ (나)는 고유벡터로 된 기저의 항이 모두 고유공간들의 합에 든다는 것이고, (나) ⇒ (가)는 고유공간들의 기저를 이어 붙인 열이 $V$의 기저이면서 고유벡터로 되어 있다는 것이다. (나)와 (다)는 이어 붙인 기저의 길이가 차원의 합이라는 것으로 오간다.
:::

:::hint
(1)에서는 "모든 항이 고윳값인 서로 다른 열"의 길이 전체의 집합을 생각하세요. $0$을 원소로 갖고 $n$ 이하이므로 최대 원소가 있습니다. 그 길이의 열에 빠진 고윳값이 있다면 덧붙여 보세요.
:::

:::hint
(다) ⇒ (나)에서는 [[dimension-of-subspace|부분공간의 차원]]의 (3)을, (나) ⇒ (가)에서는 기저의 항이 영벡터가 아니라는 것([[linear-independence|일차독립]]의 (I1))을 쓰세요.
:::

:::proof
정수의 순서에 관하여 [[prime-number|(Z1)]], [[well-ordering-principle|(Z5), (Z6), (L1)–(L3)]]을 쓴다. 고윳값 항목의 (1)에 의해 각 실수 $\mu$에서 $\operatorname{Ker}(T - \mu i_V) = \{v \in V : Tv = \mu v\}$는 $V$의 부분공간이고, $v$가 이 고유공간에 속하는 것은 정확히 $v = 0_V$이거나 $v$가 $\mu$에 속하는 고유벡터일 때이다. (♮)

**(1)의 증명.** $L$을 "모든 항이 $T$의 고윳값이고 서로 다른 길이 $m$인 실수의 열이 있는" $0$ 이상의 정수 $m$ 전체의 집합이라 하자. 빈 열은 서로 다르다는 조건과 모든 항이 고윳값이라는 조건을 공허하게 만족하므로 $0 \in L$이다. 서로 다른 고윳값의 고유벡터의 (4)에 의해 $L$의 모든 원소는 $n$ 이하이다. 정렬 원리의 (나)에 의해 $L$은 최대 원소 $r$을 갖고, $r \in L$이므로 모든 항이 고윳값이고 서로 다른 길이 $r$인 열 $\mu_1, \dots, \mu_r$이 있다. 이 열에 들지 않는 고윳값 $\lambda$가 있다고 하자. $\mu$에 $\lambda$를 덧붙인 열 $\mu_1, \dots, \mu_r, \lambda$([[finite-sum-of-vectors|벡터의 유한 합]]의 진술 첫 문단)는 모든 항이 고윳값이다. $\{1, \dots, r + 1\}$의 원소 $k$는 (Z5)와 (Z1)에 의해 $k \le r$이거나 $k \ge r + 1$이고, 뒤의 경우 (L2)에 의해 $k = r + 1$이다. 이 열에서 $j \ne k$인 두 자리가 둘 다 $r$ 이하이면 $\mu_j \ne \mu_k$이다. 한쪽이 $r + 1$이면 다른 쪽은 $r + 1$이 아니므로 $r$ 이하의 $k$이고, $\lambda$는 열 $\mu$에 들지 않으므로 $\lambda \ne \mu_k$이다. 따라서 이 열은 서로 다르다. 따라서 $r + 1 \in L$이고 $r + 1 \le r$인데, (L3)에 의해 $r < r + 1$이므로 (L1)에 어긋난다. 따라서 $\mu_1, \dots, \mu_r$은 $T$의 고윳값을 빠짐없이 늘어놓은 열이다. 그런 열은 모든 항이 고윳값이고 서로 다르므로, 서로 다른 고윳값의 고유벡터의 (4)에 의해 그 길이는 $n$ 이하이다.

**(2)의 증명.** $T$가 대각화 가능이라 하자. [[diagonalizable-iff-eigenbasis|대각화와 고유벡터의 기저]]의 (2)에 의해 모든 항이 $T$의 고유벡터인 길이 $n$인 $V$의 기저가 있고, $n \ge 1$이므로 첫째 항 $b_1$이 있다. $b_1$은 어떤 실수 $\lambda$에 속하는 고유벡터이므로 $\lambda$는 고윳값이다. 길이 $0$인 열이 고윳값을 빠짐없이 늘어놓은 열이면 $\lambda = \mu_k$인 $k \in \{1, \dots, 0\}$이 있어야 하는데 이 집합은 공집합이다. 모순이므로 $T$는 대각화 가능하지 않다.

**(3)의 증명.** $\mu_k$는 고윳값이므로 고윳값 항목의 (2)에 의해 $E_k \ne \{0_V\}$이다. [[dimension|유한차원과 차원]]의 (3)에 의해 $g_k \ne 0$이고(부분공간 $E_k$의 영벡터는 [[subspace|(P1)]]에 의해 $0_V$이다), $g_k$는 $0$ 이상의 정수이므로 (Z5)와 (Z1)에 의해 $g_k \ge 1$이다. $\mu$가 서로 다르므로 [[independent-subspaces|일차독립인 부분공간들]]의 (6)에 의해 $E_1, \dots, E_r$은 일차독립이다. 이어 붙인 기저의 (4)에 의해 $E_1 + \cdots + E_r$은 유한차원이고 $\dim(E_1 + \cdots + E_r) = g_1 + \cdots + g_r$이며, 이 합의 기저 $c$로서 모든 $(k, j) \in \Lambda$에서 $c_{s_{k-1}+j} \in E_k$인 것이 있다. 이 문단의 기호를 아래에서 쓴다. 일차독립인 부분공간들의 (1)에 의해 $E_1 + \cdots + E_r$은 $V$의 부분공간이고 모든 $E_k$를 포함한다.

(다) ⇒ (나): $\dim(E_1 + \cdots + E_r) = n = \dim V$이므로 부분공간의 차원의 (3)에 의해 $E_1 + \cdots + E_r = V$이다.

(나) ⇒ (가): $c$는 일차독립이고 $\operatorname{span}(c) = E_1 + \cdots + E_r = V$이므로([[sequences-in-a-subspace|부분공간 안의 열]]의 (J4)) [[basis-iff-independent-and-spanning|기저와 일차독립·생성]]에 의해 $c$는 $V$의 기저이다. $c$의 길이는 $s_r$이다. 이어 붙인 기저의 (2)의 (ii)에 의해 $\{1, \dots, s_r\}$의 모든 $i$는 어떤 $(k, j) \in \Lambda$로 $i = s_{k-1} + j$이므로 $c_i \in E_k$이다. $c$는 일차독립이므로 [[linear-independence|일차독립]]의 (I1)에 의해 $c_i \ne 0_V$이고, (♮)에 의해 $c_i$는 $\mu_k$에 속하는 고유벡터이다. 곧 $c$는 고유벡터로 된 $V$의 기저이고, 대각화와 고유벡터의 기저의 (2)에 의해 $T$는 대각화 가능이다.

(가) ⇒ (다): 대각화와 고유벡터의 기저의 (2)에 의해 고유벡터로 된 $V$의 기저 $b_1, \dots, b_n$이 있다. 각 $b_i$는 어떤 실수 $\lambda$에 속하는 고유벡터이고 $\lambda$는 고윳값이므로, 고윳값을 빠짐없이 늘어놓은 열이라는 가정에 의해 $\lambda = \mu_k$인 $k$가 있다. (♮)에 의해 $b_i \in E_k \subseteq E_1 + \cdots + E_r$이다. [[linear-combination-and-span|일차결합과 생성]]의 (N3)에 의해 $V = \operatorname{span}(b_1, \dots, b_n) \subseteq E_1 + \cdots + E_r$이고, 이 합은 $V$의 부분집합이므로 $E_1 + \cdots + E_r = V$이다. 그러면 앞 단락에서처럼 $c$는 $V$의 기저이고, 차원의 (2)에 의해 그 길이 $g_1 + \cdots + g_r$은 $\dim V = n$이다.

**(4)의 증명.** (3)의 증명의 $c$를 $\mathcal{B}$로 둔다. (나)가 성립하므로 (3)의 (나) ⇒ (가)에서 본 것처럼 $c$는 $V$의 기저이고, 차원의 (2)에 의해 그 길이는 $n$이며, (다)에 의해 $s_r = g_1 + \cdots + g_r = n$이다. 이어 붙인 기저의 (4)에 의해 $b_{s_{k-1}+j} \in E_k$이고 $j$를 $b_{s_{k-1}+j}$로 보내는 열은 $E_k$의 기저이다. 이제 $\mathcal{B}$가 (4)의 조건을 만족하는 아무 기저라 하자. (3)의 (나) ⇒ (가)의 논증과 같이, 이어 붙인 기저의 (2)의 (ii)에 의해 $\{1, \dots, n\}$의 모든 $i$는 어떤 $(k, j) \in \Lambda$로 $s_{k-1} + j$이고$b_i \in E_k$이며 $b_i \ne 0_V$이므로 $b_i$는 $\mu_k$에 속하는 고유벡터이다. 고윳값 항목의 (5)에 의해 $b_i$가 속하는 고윳값은 하나뿐이므로, $i$가 $s_{k-1} + j$로도 $s_{k'-1} + j'$으로도 쓰이면 $\mu_k = \mu_{k'}$이다. 따라서 $\delta_i$를 $b_i$가 속하는 고윳값으로 두면 [[real-function-space|(G)]]에 의해 길이 $n$인 실수의 열 $\delta$가 있고, $\delta_{s_{k-1}+j} = \mu_k$이다. 조건을 만족하는 열은 모든 자리에서 값이 정해지므로 하나뿐이다. 대각화와 고유벡터의 기저의 (2)에 의해 $[T]_{\mathcal{B}} = \operatorname{diag}(\delta_1, \dots, \delta_n)$이다.

**(5)의 증명.** $\lambda_1, \dots, \lambda_n$이 모든 항이 고윳값이고 서로 다른 열이라 하자. 이 열에 들지 않는 고윳값 $\eta$가 있다면, (1)의 증명과 같이 $\eta$를 덧붙인 길이 $n + 1$인 열은 모든 항이 고윳값이고 서로 다르므로 서로 다른 고윳값의 고유벡터의 (4)에 의해 $n + 1 \le n$이 되어 (L1), (L3)에 어긋난다. 따라서 이 열은 고윳값을 빠짐없이 늘어놓은 열이고 $r = n \ge 1$이다. 서로 다른 고윳값의 고유벡터의 (3)에 의해 모든 $k$에서 $v_k$가 $\lambda_k$에 속하는 고유벡터인 길이 $n$인 열이 있고, 그 (2)에 의해 이 열은 일차독립이며, [[independent-and-spanning-bounds|일차독립인 열과 생성하는 열의 길이]]의 (3)에 의해 $V$의 기저이다. (♮)에 의해 $v_k \in \operatorname{Ker}(T - \lambda_k i_V) \subseteq E_1 + \cdots + E_n$이므로, (3)의 (가) ⇒ (다)의 증명과 같이 (N3)에 의해 $E_1 + \cdots + E_n = V$이다. 곧 (나)가 성립하고, (3)에 의해 (다)와 (가)도 성립한다.

**(6)의 증명.** 고윳값 항목의 정의에 의해 $A$의 고윳값, 고유벡터, 고유공간은 $T_A$의 것이고, 차원의 (4)에 의해 $\dim \mathbb{R}^n = n$이다. 따라서 (1)–(5)를 $V = \mathbb{R}^n$, $T = T_A$에 쓸 수 있다. [[diagonalizable|대각화 가능]]의 (7)에 의해 $A$가 대각화 가능인 것은 정확히 $T_A$가 대각화 가능일 때이므로 두 문구를 바꿔 쓸 수 있다. (4)의 기저 $\mathcal{B}$의 모든 항은 $A$의 고유벡터이고 $b_i$가 속하는 고윳값은 $\delta_i$이므로, 대각화와 고유벡터의 기저의 (4)에 의해 $S$는 가역이고 $A = S \operatorname{diag}(\delta_1, \dots, \delta_n) S^{-1}$이다. $\blacksquare$
:::

## 예시와 반례

:::example[N 의 고유공간의 차원]
$N = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$이라 합시다. [[eigenvalue-examples|고윳값이 없는 행렬과 대각화할 수 없는 행렬]]의 (2)에 의해 $N$의 고윳값은 $1$뿐이고 고유공간은 $\operatorname{span}(e_1)$입니다. 따라서 길이 $1$인 열 $1$이 $N$의 고윳값을 빠짐없이 늘어놓은 열이고, $e_1 \ne 0$이므로 [[dimension-of-subspace|부분공간의 차원]]의 (4)와 [[linear-independence|일차독립]]의 (I4)에 의해 $g_1 = 1$입니다. $1 \ne 2$이므로 (3)과 (6)에 의해 $N$은 대각화 가능하지 않습니다. 이것은 eigenvalue-examples 의 (2)와 같은 결론을 고유공간의 차원으로 다시 얻은 것입니다.
:::

:::example[겹친 대각성분의 고유공간이 2 차원인 아래삼각행렬]
$$A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 2 & -1 & 4 \end{pmatrix}$$
이라 합시다. $A$는 아래삼각행렬이고 대각성분이 $1, 1, 4$이므로 [[eigenvalues-of-triangular-matrix|삼각행렬의 고윳값]]의 (3)에 의해 고윳값은 정확히 $1$과 $4$입니다. 따라서 $1, 4$가 $A$의 고윳값을 빠짐없이 늘어놓은 열입니다.

고윳값 항목의 (4)에 의해 $E_1 = \operatorname{Ker} T_{A - I_3}$이고, [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)에 의해 $x = (x_1, x_2, x_3)$에 대하여 $(A - I_3)x = (0, 0, 2x_1 - x_2 + 3x_3)$입니다. 따라서 $x \in E_1$인 것은 정확히 $x_2 = 2x_1 + 3x_3$일 때이고, 그때 $x = (x_1, 2x_1 + 3x_3, x_3) = x_1 p + x_3 q$, $p = (1, 2, 0)$, $q = (0, 3, 1)$입니다. 거꾸로 $\alpha p + \beta q = (\alpha, 2\alpha + 3\beta, \beta)$는 이 조건을 만족하므로 $E_1 = \operatorname{span}(p, q)$입니다. $\alpha p + \beta q = 0$이면 첫째 값과 셋째 값에서 $\alpha = \beta = 0$이므로 $p, q$는 일차독립이고, 부분공간의 차원의 (4)에 의해 $g_1 = 2$입니다. 같은 방식으로 $(A - 4I_3)x = (-3x_1, -3x_2, 2x_1 - x_2)$이므로 $x \in E_2$인 것은 정확히 $x_1 = x_2 = 0$일 때이고, $E_2 = \operatorname{span}(e_3)$, $g_2 = 1$입니다.

$g_1 + g_2 = 3$이므로 (3)과 (6)에 의해 $A$는 대각화 가능입니다. (4)의 기저는 예를 들어 $p, q, e_3$이고, 실제로 $Ap = (1, 2, 2 - 2 + 0) = p$, $Aq = (0, 3, 0 - 3 + 4) = q$, $Ae_3 = (0, 0, 4) = 4e_3$이므로 $A = S \operatorname{diag}(1, 1, 4) S^{-1}$, $S$의 열은 $p, q, e_3$입니다. 고윳값은 둘뿐이므로 서로 다른 고윳값의 고유벡터의 (5)로는 이 결론을 얻을 수 없습니다.
:::

:::counterexample[고윳값 하나를 빠뜨린 열의 예]
$D = \operatorname{diag}(1, 2)$는 대각행렬이고 [[change-of-basis-and-similarity|닮음]]의 (4)(반사성)에 의해 자기 자신과 닮았으므로 대각화 가능입니다. [[diagonalizable|대각화 가능]]의 (4)에 의해 고윳값은 정확히 $1$과 $2$입니다. 길이 $1$인 열 $1$은 서로 다르고 모든 항이 고윳값이지만 고윳값 $2$가 빠져 있으므로 $D$의 고윳값을 빠짐없이 늘어놓은 열이 아닙니다. 이 열의 고유공간 $\operatorname{Ker}(T_D - i_{\mathbb{R}^2})$는 $\{x : (0, x_2) = 0\} = \operatorname{span}(e_1)$이므로 그 차원은 $1 \ne 2$입니다. 빠뜨린 고윳값이 있으면 (3)의 (다)는 대각화 가능한 행렬에서도 성립하지 않을 수 있고, 이 예가 그런 경우입니다.
:::

## 확인 질문

:::check[$4 \times 4$ 행렬 $A$의 고윳값이 정확히 서로 다른 두 수 $\mu_1$, $\mu_2$이고 $\operatorname{Ker}(T_A - \mu_1 i_{\mathbb{R}^4})$가 3차원이면 $A$는 대각화 가능인가?]
그렇습니다. $\mu_1, \mu_2$는 고윳값을 빠짐없이 늘어놓은 열이고 $g_1 = 3$입니다. (3)에 의해 $g_2 \ge 1$이므로 (Z7)에 의해 $g_1 + g_2 \ge 4$입니다. 한편 (3)의 증명처럼 [[concatenating-bases|이어 붙인 기저]]의 (4)에 의해 $g_1 + g_2$는 $\mathbb{R}^4$의 부분공간 $E_1 + E_2$의 차원이므로 [[dimension-of-subspace|부분공간의 차원]]의 (2)에 의해 $4$ 이하입니다. (L2)에 의해 $g_1 + g_2 = 4$이고, (3)과 (6)에 의해 $A$는 대각화 가능입니다.
:::

:::check[$B = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$은 대각화 가능인가?]
아닙니다. $B$는 위삼각행렬이고 대각성분이 모두 $0$이므로 [[eigenvalues-of-triangular-matrix|삼각행렬의 고윳값]]의 (2)에 의해 고윳값은 $0$뿐이고, 길이 $1$인 열 $0$이 고윳값을 빠짐없이 늘어놓은 열입니다. 고윳값 항목의 (4)에 의해 고윳값 $0$의 고유공간은 $\operatorname{Ker} T_{B - 0I_3} = \operatorname{Ker} T_B$이고 행렬과 벡터의 곱의 (1)(행 규칙)에 의해 $Bx = (x_2, 0, 0)$이므로 $\operatorname{Ker} T_B = \{x : x_2 = 0\}$입니다. 이 집합의 원소는 $x_1 e_1 + x_3 e_3$이므로 이것은 $\operatorname{span}(e_1, e_3)$이고, $e_1, e_3$은 일차독립이므로(첫째 값과 셋째 값) 부분공간의 차원의 (4)에 의해 그 차원은 $2$입니다. $2 \ne 3$이므로 (3)과 (6)에 의해 $B$는 대각화 가능하지 않습니다.
:::
