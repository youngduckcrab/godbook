---
title: 불변 부분공간에 맞춘 기저와 블록 꼴
title_en: Bases Adapted to Invariant Subspaces and Block Form
aliases: [불변 부분공간과 블록 위삼각행렬, 불변 직합과 특성다항식, invariant subspace and block triangular form]
kind: theorem
field: linear-algebra
msc: ["15A18"]
level: undergrad
summary: 선형사상 T 에 대하여, 기저의 처음 g 개가 생성하는 부분공간이 T-불변인 것은 그 기저에 관한 T 의 행렬이 블록 위삼각행렬인 것과 같고, 그때 왼쪽 위 블록은 제한한 사상의 행렬이다. 그래서 0 이 아닌 T-불변 부분공간 E 에 대하여 p_T 는 p_{T|E} 와 어떤 다항함수의 곱이고, V 가 영이 아닌 T-불변 부분공간들의 일차독립인 합이면 p_T 는 조각마다의 특성다항식의 곱이며 대수적 중복도는 조각마다의 대수적 중복도의 합이다.
requires: [function, real-number-arithmetic, prime-number, well-ordering-principle, mathematical-induction, vector-space, subspace, finite-sum-of-vectors, linear-combination-and-span, basis, sequences-in-a-subspace, linear-map, basis-iff-independent-and-spanning, linear-map-determined-by-basis, dimension, extension-to-a-basis, dimension-of-subspace, matrix, matrix-in-bases, eigenvalue-and-eigenvector, characteristic-polynomial, eigenvalue-iff-root, polynomial-function, product-of-polynomial-functions, multiplicity-of-a-root, algebraic-multiplicity, independent-subspaces, concatenating-bases, invariant-subspaces-of-self-adjoint-map, block-triangular-determinant]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "9장 3절 Generalized eigenspaces. Geometric meaning of algebraic multiplicity, 3.1 Invariant subspaces, pp.259–260; 3.2 Generalized eigenspaces, Theorem 3.4 와 Remark 3.5, p.262; 3.3 Geometric meaning of algebraic multiplicity, Proposition 3.8 의 증명, p.264; 6장 1절 Upper triangular (Schur) representation of an operator, Theorem 1.1 뒤의 Remark, p.164; 4장 1절 Main definitions, 연습문제 1.7, 1.8, p.105; 6장 5절 Structure of orthogonal matrices, Theorem 5.1 의 증명, p.189; 3장 4절 연습문제 4.2, p.89"
    checked: original
    note: "출처 9장 3.1절(p.259)은 불변 부분공간과 제한 A|_E 를 정의하고, 불변 부분공간들이 부분공간들의 기저를 이루면 제한들이 서로 섞이지 않는다고 적은 뒤, 각 부분공간의 기저를 이어 붙인 기저에서 A 의 행렬이 블록 대각 꼴 diag{A₁, …, A_r} 가 된다고 적는다(p.260). Remark 3.5(p.262)도 일반화된 고유공간의 기저를 이어 붙인 기저에서 같은 블록 대각 꼴을 적는다. 이 항목의 (3)의 (iv)와 (5)는 그 두 조각판을 성분으로 증명한 것이다. 6장 Theorem 1.1 뒤의 Remark(p.164)는 첫째 기저 벡터가 생성하는 부분공간 E 에 대해 'AE ⊂ E 인 것은 정확히 ∗ 로 적은 성분(첫째 행의 λ₁ 을 뺀 성분)이 모두 0 일 때'라고 적는데, 이것은 그 문맥의 행렬에서 E 의 직교 여공간의 불변성을 말하는 것이고, (3)의 (ii)는 기저의 처음 g 개가 생성하는 부분공간의 불변성과 왼쪽 아래 블록이 영행렬인 것의 동치이다. 4장 연습문제 1.8(p.105)은 기저의 처음 k 개가 고윳값 λ 의 고유벡터이면 그 기저에서 행렬이 (λI_k ∗; 0 B) 꼴이라는 것을 보이라 하는데, 그것은 (3)의 (ii), (iii)에서 E 가 고유공간에 들어 있는 경우이다. (4)의 곱 공식은 연습문제 1.7(p.105, 블록 삼각행렬의 특성다항식)을 (3)의 블록 꼴에 쓴 것이다. 9장 Proposition 3.8 의 증명(p.264)은 블록 대각 꼴에서 det(A − λI) 를 블록마다의 곱으로 쓰는데, (6)은 그 곱 공식을 일차독립인 불변 부분공간들 일반에 대해 진술한 것이다. 6장 5절 Structure of orthogonal matrices 의 Theorem 5.1 의 증명(p.189)은 불변 부분공간 E_λ 의 정규직교 기저를 늘린 기저에서 U 의 행렬이 블록 삼각 꼴 (R_{−α} ∗; 0 U₁) 이라고 적는데, 그것은 (3)의 (ii), (iii)을 쓰는 자리와 같다. 확인 질문 'V 의 기저 b₁, b₂, b₃ 에 관한 T 의 행렬의 첫째 열이 (4, 0, 0) 이면 어떤 부분공간이 T-불변인가?'는 4장 연습문제 1.8 의 k = 1 인 경우를 거꾸로 읽은 것과 같은 발상이다. 반례 '불변이 아닌 직선을 앞에 둔 기저의 예'의 행렬 (0 1; 1 0) 은 출처 3장 4절 연습문제 4.2(p.89)가 다루는 치환행렬의 하나이다. 출처는 스칼라를 실수 또는 복소수로 두고, 이 항목은 실수만 쓴다."
  - ref: hefferon-linear-algebra
    loc: "Jordan Canonical Form, def:invariant, src/jc/jc4.tex:2986–2992; 같은 소절의 연습문제 src/jc/jc4.tex:4551–4568(부분공간의 기저로 불변성 판정), src/jc/jc4.tex:4570–4600(불변 부분공간의 교집합, 합집합, 여공간, 합); Diagonalizability, 연습문제 src/jc/jc2.tex:2613–2627"
    checked: original
    note: "Hefferon 의 def:invariant 는 t(M) ⊆ M 일 때 부분공간 M 을 t-불변이라 한다(스칼라는 복소수). 이 사이트는 불변 부분공간과 제한을 선형대수 3 의 invariant-subspaces-of-self-adjoint-map 의 정의로 쓴다. jc4.tex:4551 의 연습문제는 부분공간이 t-불변인 것은 정확히 그 기저의 모든 원소의 상이 부분공간에 들 때라는 것을 보이라 하며, (1)은 그것을 생성하는 열 일반에 대해 진술한 것이다. jc4.tex:4570 의 연습문제는 불변 부분공간의 합이 불변인지 묻고 풀이에서 '두 불변 부분공간의 합은 불변이다'라고 답하는데, (2)의 (i)은 그것을 p 개에 대해 진술한 것이다. 예시 '두 직선으로 나뉘는 ℝ² 위의 사상'의 T 는 표준기저에서의 행렬이 (1 2; 2 1) 인 사상이고, 이 행렬은 Diagonalizability 소절의 연습문제(jc2.tex:2613–2627)가 대각화할 수 있음을 보이라고 하는 행렬이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(서로소 판정의 f = 0 경계, 블록 행렬식의 귀납 꼴, 유한 열 보조정리의 r = 0). 독립 검토 없음."
added: 2026-11-28
---

:::statement
$V$가 [[vector-space|벡터공간]]이고 $T : V \to V$가 [[linear-map|선형사상]]이라 하자. **$T$-불변** 부분공간과 **제한한 사상** $T|_E : E \to E$는 [[invariant-subspaces-of-self-adjoint-map|자기수반사상의 고유벡터와 불변 부분공간]]에서 정한 것이고(그 정의와 (1), (2)는 내적을 쓰지 않는다), $V$의 부분공간은 [[subspace|(P1)]]의 제한한 연산으로 벡터공간으로 본다. 기저에 관한 행렬 $[T]_{\mathcal{B}}$와 좌표는 [[matrix-in-bases|기저에 관한 선형사상의 행렬]]의 것, 차원이 $1$ 이상인 공간 위의 선형사상의 특성다항식 $p_T$는 [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (5)의 것, 대수적 중복도는 [[algebraic-multiplicity|고윳값의 대수적 중복도와 기하적 중복도]]의 것이다. 블록으로 쓴 꼴, 블록 위삼각행렬, 블록 대각행렬은 [[block-triangular-determinant|블록 삼각행렬의 행렬식]]의 것이고, 함수의 곱과 열의 곱은 [[product-of-polynomial-functions|다항함수의 곱]]의 것이다. 부분공간의 열의 합과 일차독립은 [[independent-subspaces|일차독립인 부분공간들]]의 것이고, 두 열을 이어 붙인 열은 [[extension-to-a-basis|기저로 늘리기]]의 것이다.

1. (생성하는 열로 판정하기) $k \ge 0$이 정수이고 $u_1, \dots, u_k$가 $V$의 벡터의 열이라 하자. $\operatorname{span}(u_1, \dots, u_k)$가 $T$-불변인 것은 정확히 모든 $j \in \{1, \dots, k\}$에서 $Tu_j \in \operatorname{span}(u_1, \dots, u_k)$일 때이다.
2. (합과 제한)
   - (i) $p$가 자연수이고 $V_1, \dots, V_p$가 모두 $T$-불변인 부분공간의 열이면 $V_1 + \cdots + V_p$는 $T$-불변이다.
   - (ii) $W$와 $E$가 $T$-불변인 부분공간이고 $E \subseteq W$이면, $E$는 벡터공간 $W$의 부분공간이고 $T|_W$-불변이며, $(T|_W)|_E = T|_E$이다.
3. (기저의 앞부분과 블록 위삼각행렬) $n \ge 2$이고 $\mathcal{B} = b_1, \dots, b_n$이 $V$의 기저이며 $g \in \{1, \dots, n - 1\}$, $h = n - g$라 하자. $\mathcal{B}_E$를 처음 $g$개의 열 $b_1, \dots, b_g$, $\mathcal{B}_F$를 $j$번째 항이 $b_{g+j}$인 길이 $h$인 열 $b_{g+1}, \dots, b_n$이라 하고, $E = \operatorname{span}(\mathcal{B}_E)$, $F = \operatorname{span}(\mathcal{B}_F)$라 하자. 블록은 $g$, $h$에 대하여 말한다.
   - (i) $\mathcal{B}_E$는 $E$의 기저, $\mathcal{B}_F$는 $F$의 기저이고, $V = E + F$, $E \cap F = \{0_V\}$이다. 따라서 $\dim E = g$, $\dim F = h$이다.
   - (ii) $E$가 $T$-불변인 것은 정확히 $[T]_{\mathcal{B}}$가 블록 위삼각행렬일 때이다.
   - (iii) $E$가 $T$-불변이면 $[T]_{\mathcal{B}}$의 왼쪽 위 블록은 $[T|_E]_{\mathcal{B}_E}$이다. 곧 어떤 $g \times h$ 행렬 $C$와 $h \times h$ 행렬 $D$로
     $$
     [T]_{\mathcal{B}} = \begin{pmatrix} [T|_E]_{\mathcal{B}_E} & C \\ O & D \end{pmatrix}
     $$
     이다.
   - (iv) $E$와 $F$가 둘 다 $T$-불변인 것은 정확히 $[T]_{\mathcal{B}}$가 블록 대각행렬일 때이고, 그때
     $$
     [T]_{\mathcal{B}} = \begin{pmatrix} [T|_E]_{\mathcal{B}_E} & O \\ O & [T|_F]_{\mathcal{B}_F} \end{pmatrix}
     $$
     이다.
4. (불변 부분공간의 특성다항식) $V$가 유한차원이고 $\dim V = n \ge 1$이며 $E$가 $T$-불변인 부분공간이고 $\dim E = g \ge 1$이라 하자.
   - (i) $g < n$이면 처음 $g$개가 $E$의 기저인 $V$의 기저가 있다. 그런 모든 기저 $\mathcal{B}$에서 $[T]_{\mathcal{B}}$는 (3)의 (iii)의 꼴이고, 그 오른쪽 아래 블록을 $D$라 하면 $p_T = p_{T|_E}\, p_D$이다.
   - (ii) $g = n$이면 $E = V$이고 $T|_E = T$이며 $p_{T|_E} = p_T$이다.
   - (iii) 따라서 $p_T = p_{T|_E}\, q$인 다항함수 $q$가 있다. $q$는 영함수가 아니다. ($g < n$이면 $q = p_D$로, $g = n$이면 $q = t^0$으로 잡을 수 있다.)
   - (iv) 모든 실수 $\lambda$에서, $T|_E$에서 $\lambda$의 대수적 중복도는 $T$에서 $\lambda$의 대수적 중복도 이하이다.
5. (두 불변 부분공간의 직합) $V$가 유한차원이고 $E$, $F$가 $T$-불변인 부분공간이며 $E + F = V$, $E \cap F = \{0_V\}$, $\dim E = g \ge 1$, $\dim F = h \ge 1$이라 하자. $\mathcal{B}_E$가 $E$의 기저이고 $\mathcal{B}_F$가 $F$의 기저이면, 두 열을 이어 붙인 열 $\mathcal{B}$는 $V$의 기저이고 $\dim V = g + h$이며, $g$, $h$에 대하여
   $$
   [T]_{\mathcal{B}} = \begin{pmatrix} [T|_E]_{\mathcal{B}_E} & O \\ O & [T|_F]_{\mathcal{B}_F} \end{pmatrix}
   $$
   이다. 따라서 $p_T = p_{T|_E}\, p_{T|_F}$이고, 모든 실수 $\lambda$에서 $T$에서 $\lambda$의 대수적 중복도는 $T|_E$에서의 것과 $T|_F$에서의 것의 합이다.
6. (불변 부분공간 여럿의 직합) $V$가 유한차원이고 $p$가 자연수이며, $V_1, \dots, V_p$가 일차독립인 부분공간의 열로서 모든 $V_k$가 $T$-불변이고 $\dim V_k \ge 1$이며 $V_1 + \cdots + V_p = V$라 하자. 그러면
   $$
   p_T = p_{T|_{V_1}} \cdots p_{T|_{V_p}}
   $$
   이다. 오른쪽은 $k$번째 항이 $p_{T|_{V_k}}$인 함수의 열의 곱이다. 또 모든 실수 $\lambda$에서, $T$에서 $\lambda$의 대수적 중복도는 $k$번째 항이 $T|_{V_k}$에서 $\lambda$의 대수적 중복도인 정수의 열의 합이다. 차원이 $0$인 부분공간 위의 사상에는 특성다항식이 정의되지 않으므로 (4)–(6)은 차원이 $1$ 이상인 조각만 다룬다.
:::

:::english
Let $V$ be a vector space and $T : V \to V$ a linear map. **$T$-invariant** subspaces and the **restriction** $T|_E : E \to E$ are as defined in the entry on eigenvectors and invariant subspaces of self-adjoint maps (that definition and its items (1), (2) do not use an inner product), and subspaces of $V$ are regarded as vector spaces with the restricted operations of (P1). The matrix $[T]_{\mathcal{B}}$ with respect to a basis and coordinates are those of the entry on matrices of linear maps with respect to bases; the characteristic polynomial $p_T$ of a linear map on a space of dimension at least $1$ is that of item (5) of the entry on eigenvalues as roots of the characteristic polynomial; algebraic multiplicity is that of the multiplicity entry. Block form, block upper triangular and block diagonal matrices are those of the entry on determinants of block triangular matrices; products of functions and of sequences of functions are those of the entry on products of polynomial functions. Sums and linear independence of sequences of subspaces are those of the entry on linearly independent subspaces, and concatenation of two sequences is that of the entry on extending to a basis.

1. (Testing with a spanning sequence) Let $k \ge 0$ be an integer and $u_1, \dots, u_k$ a sequence of vectors of $V$. Then $\operatorname{span}(u_1, \dots, u_k)$ is $T$-invariant exactly when $Tu_j \in \operatorname{span}(u_1, \dots, u_k)$ for every $j \in \{1, \dots, k\}$.
2. (Sums and restrictions)
   - (i) If $p$ is a natural number and $V_1, \dots, V_p$ is a sequence of $T$-invariant subspaces, then $V_1 + \cdots + V_p$ is $T$-invariant.
   - (ii) If $W$ and $E$ are $T$-invariant subspaces with $E \subseteq W$, then $E$ is a subspace of the vector space $W$, it is $T|_W$-invariant, and $(T|_W)|_E = T|_E$.
3. (The first part of a basis and block upper triangular matrices) Let $n \ge 2$, let $\mathcal{B} = b_1, \dots, b_n$ be a basis of $V$, let $g \in \{1, \dots, n - 1\}$ and $h = n - g$. Let $\mathcal{B}_E$ be the first $g$ terms $b_1, \dots, b_g$, let $\mathcal{B}_F$ be the sequence $b_{g+1}, \dots, b_n$ of length $h$ whose $j$th term is $b_{g+j}$, and let $E = \operatorname{span}(\mathcal{B}_E)$, $F = \operatorname{span}(\mathcal{B}_F)$. Blocks are taken with respect to $g$, $h$.
   - (i) $\mathcal{B}_E$ is a basis of $E$, $\mathcal{B}_F$ is a basis of $F$, $V = E + F$ and $E \cap F = \{0_V\}$. Hence $\dim E = g$ and $\dim F = h$.
   - (ii) $E$ is $T$-invariant exactly when $[T]_{\mathcal{B}}$ is block upper triangular.
   - (iii) If $E$ is $T$-invariant, then the upper left block of $[T]_{\mathcal{B}}$ is $[T|_E]_{\mathcal{B}_E}$; that is, for some $g \times h$ matrix $C$ and $h \times h$ matrix $D$,
     $$
     [T]_{\mathcal{B}} = \begin{pmatrix} [T|_E]_{\mathcal{B}_E} & C \\ O & D \end{pmatrix}.
     $$
   - (iv) Both $E$ and $F$ are $T$-invariant exactly when $[T]_{\mathcal{B}}$ is block diagonal, and then
     $$
     [T]_{\mathcal{B}} = \begin{pmatrix} [T|_E]_{\mathcal{B}_E} & O \\ O & [T|_F]_{\mathcal{B}_F} \end{pmatrix}.
     $$
4. (Characteristic polynomial of an invariant subspace) Let $V$ be finite-dimensional with $\dim V = n \ge 1$, and let $E$ be a $T$-invariant subspace with $\dim E = g \ge 1$.
   - (i) If $g < n$, then $V$ has a basis whose first $g$ terms form a basis of $E$. For every such basis $\mathcal{B}$, the matrix $[T]_{\mathcal{B}}$ has the form in (3)(iii), and if $D$ is its lower right block then $p_T = p_{T|_E}\, p_D$.
   - (ii) If $g = n$, then $E = V$, $T|_E = T$ and $p_{T|_E} = p_T$.
   - (iii) Hence there is a polynomial function $q$ with $p_T = p_{T|_E}\, q$, and $q$ is not the zero function. (One can take $q = p_D$ if $g < n$ and $q = t^0$ if $g = n$.)
   - (iv) For every real $\lambda$, the algebraic multiplicity of $\lambda$ in $T|_E$ is at most the algebraic multiplicity of $\lambda$ in $T$.
5. (Direct sum of two invariant subspaces) Let $V$ be finite-dimensional and let $E$, $F$ be $T$-invariant subspaces with $E + F = V$, $E \cap F = \{0_V\}$, $\dim E = g \ge 1$ and $\dim F = h \ge 1$. If $\mathcal{B}_E$ is a basis of $E$ and $\mathcal{B}_F$ is a basis of $F$, then their concatenation $\mathcal{B}$ is a basis of $V$, $\dim V = g + h$, and with respect to $g$, $h$
   $$
   [T]_{\mathcal{B}} = \begin{pmatrix} [T|_E]_{\mathcal{B}_E} & O \\ O & [T|_F]_{\mathcal{B}_F} \end{pmatrix}.
   $$
   Hence $p_T = p_{T|_E}\, p_{T|_F}$, and for every real $\lambda$ the algebraic multiplicity of $\lambda$ in $T$ is the sum of those in $T|_E$ and in $T|_F$.
6. (Direct sum of several invariant subspaces) Let $V$ be finite-dimensional, let $p$ be a natural number, and let $V_1, \dots, V_p$ be a linearly independent sequence of subspaces such that every $V_k$ is $T$-invariant with $\dim V_k \ge 1$ and $V_1 + \cdots + V_p = V$. Then
   $$
   p_T = p_{T|_{V_1}} \cdots p_{T|_{V_p}},
   $$
   the product of the sequence of functions whose $k$th term is $p_{T|_{V_k}}$. Moreover, for every real $\lambda$, the algebraic multiplicity of $\lambda$ in $T$ is the sum of the sequence of integers whose $k$th term is the algebraic multiplicity of $\lambda$ in $T|_{V_k}$. Since the characteristic polynomial is not defined for maps on a space of dimension $0$, items (4)–(6) only deal with pieces of dimension at least $1$.
:::

## 직관

$T$-불변 부분공간 $E$는 $T$가 자기 안으로만 보내는 부분입니다. 기저를 $E$의 기저부터 늘어놓으면, 그 처음 $g$개의 상은 다시 처음 $g$개의 일차결합이므로 행렬의 처음 $g$개의 열에서 아래쪽 $h$개의 성분이 모두 $0$이 됩니다. 이것이 왼쪽 아래 블록이 영행렬이라는 뜻이고, 왼쪽 위 블록은 $T$를 $E$ 안에서만 본 사상 $T|_E$의 행렬입니다. 오른쪽 위 블록 $C$는 뒤쪽 기저 벡터가 $E$ 쪽으로 보내는 몫이라 $0$이 아닐 수 있습니다.

그러면 [[block-triangular-determinant|블록 삼각행렬의 행렬식]]의 (5)에 의해 $p_T$가 $p_{T|_E}$와 $p_D$의 곱으로 쪼개집니다. 회사의 한 부서가 바깥에서 일을 받기는 해도 부서 안의 일은 부서 밖으로 내보내지 않는다면, 그 부서의 일정표가 회사 전체 일정표의 한 조각이 되는 것과 비슷합니다. 비유의 "부서 안의 일을 밖으로 내보내지 않는다"가 불변성이고, "바깥에서 일을 받는다"가 오른쪽 위 블록 $C$입니다. 바깥에서도 일을 받지 않는 두 부서로 나뉘면(직합) $C$도 영행렬이 되어 일정표가 깨끗하게 둘로 나뉩니다.

(6)은 이것을 조각이 여럿일 때로 넓힌 것이고, 대수적 중복도가 조각마다 더해진다는 것도 함께 말합니다. 차원이 $0$인 조각은 특성다항식이 없으므로 빼고 셉니다.

## 증명

:::idea
행렬의 $l$번째 열은 $Tb_l$의 좌표이다. $E$가 불변이면 $l \le g$에서 $Tb_l$이 $b_1, \dots, b_g$만의 일차결합이므로 그 좌표의 아래쪽 $h$개가 $0$이고, 위쪽 $g$개가 $T|_E b_l$의 $\mathcal{B}_E$에 관한 좌표이다. 특성다항식은 블록 삼각행렬의 행렬식으로 쪼개고, 여러 조각은 조각의 개수에 대한 귀납으로 다룬다.
:::

:::hint
$x_1, \dots, x_g$와 $0, \dots, 0$을 이어 붙인 길이 $n$인 계수의 열로 $\mathcal{B}$의 일차결합을 만들면 [[extension-to-a-basis|기저로 늘리기]]의 (1)에 의해 그것은 $x_1 b_1 + \cdots + x_g b_g$입니다.
:::

:::hint
(6)은 $W' = V_1 + \cdots + V_{p-1}$이 $T$-불변이고 $W' \cap V_p = \{0_V\}$라는 것으로 (5)를 쓰고, $T|_{W'}$에 귀납 가정을 씁니다.
:::

:::proof
**(1).** 앞 방향: [[linear-combination-and-span|일차결합과 생성]]의 (N2)에 의해 $u_j \in \operatorname{span}(u_1, \dots, u_k)$이므로 불변성에서 $Tu_j \in \operatorname{span}(u_1, \dots, u_k)$이다. 거꾸로: $v \in \operatorname{span}(u_1, \dots, u_k)$이면 $v = \alpha_1 u_1 + \cdots + \alpha_k u_k$인 실수의 열이 있고, [[linear-map|선형사상]]의 (T5)에 의해 $Tv = \alpha_1 Tu_1 + \cdots + \alpha_k Tu_k$이다. 모든 $Tu_j$가 부분공간 $\operatorname{span}(u_1, \dots, u_k)$(생성의 (N1))에 속하므로 (S3)과 [[finite-sum-of-vectors|벡터의 유한 합]]의 (H1)에 의해 $Tv$도 속한다.

**(2).** (i) $v \in V_1 + \cdots + V_p$이면 모든 $k$에서 $v_k \in V_k$이고 $v = v_1 + \cdots + v_p$인 열이 있다. (T4)에 의해 $Tv = Tv_1 + \cdots + Tv_p$이고 $Tv_k \in V_k$이므로 $Tv \in V_1 + \cdots + V_p$이다.

(ii) [[subspace|부분공간]]의 (P5)에 의해 $E$는 벡터공간 $W$의 부분공간이다. $v \in E$이면 $(T|_W)v = Tv \in E$이므로 $E$는 $T|_W$-불변이다. $(T|_W)|_E$와 $T|_E$는 둘 다 $E$에서 $E$로의 함수이고 모든 $v \in E$에서 값이 $Tv$이므로 같다([[function|함수]]의 같음).

**(3).** 열의 정의에 의해 $\mathcal{B}$는 $\mathcal{B}_E$와 $\mathcal{B}_F$를 이어 붙인 열이다. 길이 $g$인 실수의 열 $x$와 길이 $h$인 실수의 열 $y$에 대하여 둘을 이어 붙인 길이 $n$인 열을 $(x, y)$로 쓰자. 기저로 늘리기의 (1)에 의해
$$
\begin{aligned}
&(x, y)_1 b_1 + \cdots + (x, y)_n b_n \\
&= (x_1 b_1 + \cdots + x_g b_g) \\
&\quad + (y_1 b_{g+1} + \cdots + y_h b_{g+h})
\end{aligned}
$$
이다. 이 등식을 (가)라 부른다. [[matrix-in-bases|기저에 관한 선형사상의 행렬]]의 (1)에 의해, $v \in V$의 $\mathcal{B}$에 관한 좌표가 $(x, y)$인 것은 정확히 $v$가 (가)의 오른쪽일 때이다.

(i) $x_1 b_1 + \cdots + x_g b_g = 0_V$라 하자. $y$를 모두 $0$인 열로 두면 (C3)에 의해 (가)의 오른쪽은 $0_V + 0_V = 0_V$이고, 모든 계수가 $0$인 열도 $0_V$를 주므로([[basis|기저]]의 유일성) $(x, y)$의 모든 항이 $0$이다. 곧 $\mathcal{B}_E$는 일차독립이고, $E$를 생성하므로 [[sequences-in-a-subspace|부분공간 안의 열]]의 (J4)에 의해 $E$의 기저이다. $y_1 b_{g+1} + \cdots + y_h b_{g+h} = 0_V$이면 $x$를 모두 $0$인 열로 두어 (가)를 쓰면 계수 $(x, y)$의 일차결합이 $0_V$이므로, 기저의 유일성에 의해 $y$의 항이 모두 $0$이다. 곧 $\mathcal{B}_F$는 일차독립이고 $F$를 생성하므로 $F$의 기저이다. $V$의 모든 원소는 (가)의 꼴이므로 $V = E + F$이다. $v \in E \cap F$이면 $v = x_1 b_1 + \cdots + x_g b_g = y_1 b_{g+1} + \cdots + y_h b_{g+h}$인 $x$, $y$가 있고, (가)에 의해 $v$는 계수 $(x, 0)$으로도 $(0, y)$로도 쓰이므로 기저의 유일성에 의해 $x$와 $y$의 항이 모두 $0$이며 $v = 0_V$이다. 차원은 [[dimension|유한차원과 차원]]의 (2)에서 나온다.

(ii) 행렬의 $(i, l)$ 성분을 $m_{i,l}$이라 하자. 기저에 관한 행렬의 (2)에 의해 $l$번째 열은 $[Tb_l]_{\mathcal{B}}$이므로 $m_{i,l}$은 $Tb_l$의 $\mathcal{B}$에 관한 $i$번째 좌표이다. $E$가 $T$-불변이고 $l \le g$라 하자. (N2)에 의해 $b_l \in E$이므로 $Tb_l \in E$이고 $Tb_l = x_1 b_1 + \cdots + x_g b_g$인 $x$가 있다. (가)에 의해 $Tb_l$의 좌표는 $(x, 0)$이므로 $i > g$이면 $m_{i,l} = 0$이다. 곧 $[T]_{\mathcal{B}}$는 블록 위삼각행렬이다. 거꾸로 $l \le g < i$에서 $m_{i,l} = 0$이라 하자. $l \le g$이면 $Tb_l$의 좌표는 $(x, 0)$ 꼴($x_i = m_{i,l}$)이므로 (가)와 (C3)에 의해 $Tb_l = x_1 b_1 + \cdots + x_g b_g \in E$이고, (1)에 의해 $E$는 $T$-불변이다.

(iii) $E$가 $T$-불변이면 (i)에 의해 $\dim E = g \ge 1$이고 $[T|_E]_{\mathcal{B}_E}$는 $g \times g$ 행렬이다. $l \le g$이면 (ii)의 증명에 의해 $T|_E b_l = Tb_l = m_{1,l} b_1 + \cdots + m_{g,l} b_g$이다. 기저에 관한 행렬의 (1), (2)를 $E$와 기저 $\mathcal{B}_E$에 쓰면 $[T|_E]_{\mathcal{B}_E}$의 $l$번째 열은 $(m_{1,l}, \dots, m_{g,l})$이다. 곧 $[T|_E]_{\mathcal{B}_E}$의 $(i, l)$ 성분은 $m_{i,l}$이고, 이것은 [[block-triangular-determinant|블록 삼각행렬의 행렬식]]에서 정한 $[T]_{\mathcal{B}}$의 왼쪽 위 블록이다. $C$와 $D$는 그 항목의 오른쪽 위, 오른쪽 아래 블록이다.

(iv) $F$가 $T$-불변이라 하고 $l' \in \{1, \dots, h\}$, $l = g + l'$이라 하자. (N2)에 의해 $b_l \in F$이므로 $Tb_l \in F$이고 $Tb_l = y_1 b_{g+1} + \cdots + y_h b_{g+h}$인 $y$가 있다. (가)와 (C3)에 의해 $Tb_l$의 좌표는 $(0, y)$이므로 $i \le g$이면 $m_{i,l} = 0$이다. 거꾸로 $i \le g < l$에서 $m_{i,l} = 0$이라 하자. $l = g + l'$이면 $Tb_l$의 좌표는 $y_{i'} = m_{g+i',\,l}$인 $(0, y)$이므로 (가)와 (C3)에 의해 $Tb_l = y_1 b_{g+1} + \cdots + y_h b_{g+h} \in F$이고, (1)에 의해 $F$는 $T$-불변이다. 따라서 $F$가 $T$-불변인 것은 정확히 오른쪽 위 블록이 영행렬일 때이고, (ii)와 합치면 $E$와 $F$가 둘 다 $T$-불변인 것은 정확히 $[T]_{\mathcal{B}}$가 블록 대각행렬일 때이다. 그때 $T|_F b_{g+l'} = m_{g+1,\,g+l'} b_{g+1} + \cdots + m_{g+h,\,g+l'} b_{g+h}$이므로, 기저에 관한 행렬의 (1), (2)를 $F$와 기저 $\mathcal{B}_F$에 쓰면 $[T|_F]_{\mathcal{B}_F}$의 $(i, l')$ 성분은 $m_{g+i,\,g+l'}$, 곧 오른쪽 아래 블록의 성분이다. 왼쪽 위 블록은 (iii)에 의해 $[T|_E]_{\mathcal{B}_E}$이다.

**(4).** [[dimension-of-subspace|부분공간의 차원]]의 (1)에 의해 $E$는 유한차원이다.

(i) [[dimension|유한차원과 차원]]의 (1), (2)에 의해 길이 $g$인 $E$의 기저 $u_1, \dots, u_g$가 있고, (J4)에 의해 이 열은 $V$에서 일차독립이다. 기저로 늘리기의 (2)에 의해 $u_1, \dots, u_g$에 길이 $n - g$인 열을 이어 붙인 $V$의 기저가 있고, 그 처음 $g$개는 $u_1, \dots, u_g$이다. $\mathcal{B}$를 처음 $g$개가 $E$의 기저인 $V$의 기저라 하자. $g < n$이므로 $n \ge 2$이고, 처음 $g$개의 생성은 $E$이므로 (3)의 (ii), (iii)에 의해 $[T]_{\mathcal{B}}$는 (3)의 (iii)의 꼴이다. [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (5)에 의해 $p_T = p_{[T]_{\mathcal{B}}}$, $p_{T|_E} = p_{[T|_E]_{\mathcal{B}_E}}$이고, 블록 삼각행렬의 행렬식의 (5)에 의해 $p_{[T]_{\mathcal{B}}} = p_{[T|_E]_{\mathcal{B}_E}}\, p_D$이다.

(ii) 부분공간의 차원의 (3)에 의해 $E = V$이다. $T|_V$와 $T$는 둘 다 $V$에서 $V$로의 함수이고 값이 같으므로 같다. 따라서 $p_{T|_E} = p_T$이다.

(iii) $g < n$이면 $q = p_D$이고, [[characteristic-polynomial|특성다항식]]의 (1)에 의해 $p_D$는 영함수가 아닌 다항함수이다. $g = n$이면 $q = t^0$이고, [[product-of-polynomial-functions|다항함수의 곱]]의 (1)에 의해 $p_T\, t^0 = t^0 p_T = p_T$이며, $t^0$은 모든 값이 $1$인 다항함수이다([[polynomial-function|다항함수]]).

(iv) 특성다항식의 (1)과 고윳값과 특성다항식의 근의 (6)에 의해 $p_T$와 $p_{T|_E}$는 영함수가 아닌 다항함수이다. [[multiplicity-of-a-root|근의 중복도]]의 (3)에 의해 $p_T = p_{T|_E}\, q$에서 $\lambda$의 중복도는 $p_{T|_E}$에서의 중복도와 $q$에서의 중복도의 합이고, 뒤의 것은 $0$ 이상이다. 대수적 중복도의 정의에 의해 (iv)가 나온다.

**(5).** [[concatenating-bases|이어 붙인 기저]]의 (1)의 (iii)에 의해 $\mathcal{B}$는 $E + F = V$의 기저이고, 그 (iv)에 의해 $\dim V = g + h \ge 2$이다. $\mathcal{B}$의 처음 $g$개는 $\mathcal{B}_E$이고 나머지 $h$개의 열은 $\mathcal{B}_F$이며, 기저의 생성은 그 공간이므로([[basis|기저]]의 정의) 그 생성은 각각 $E$, $F$이다. (3)의 (iv)에 의해 행렬이 위의 꼴이다. 블록 대각행렬은 블록 위삼각행렬이므로 블록 삼각행렬의 행렬식의 (5)와 고윳값과 특성다항식의 근의 (5)에 의해 $p_T = p_{T|_E}\, p_{T|_F}$이다. 중복도는 (4)의 (iv)의 증명처럼 근의 중복도의 (3)에서 나온다.

**(6).** $p$에 대한 [[mathematical-induction|수학적 귀납법]]을 쓴다. 명제는 "모든 유한차원 벡터공간 $V$, 모든 선형사상 $T : V \to V$, 조건을 만족하는 길이 $p$인 모든 부분공간의 열에 대하여 결론이 성립한다"이다.

$p = 1$이면 [[independent-subspaces|일차독립인 부분공간들]]의 (1)에 의해 $V = V_1$이고, (4)의 (ii)에 의해 $p_{T|_{V_1}} = p_T$이다. 길이 $1$인 열의 곱은 그 항이고(다항함수의 곱의 (2)) 길이 $1$인 열의 합도 그 항이므로(벡터의 유한 합의 (H0)) 성립한다.

$p \ge 2$이고 길이 $p - 1$에서 성립한다고 하자. $W' = V_1 + \cdots + V_{p-1}$이라 하면 일차독립인 부분공간들의 (1)에 의해 $V = W' + V_p$이고, 같은 항목의 (5)에 의해 $V_1, \dots, V_{p-1}$은 일차독립이며 $W' \cap V_p = \{0_V\}$이다. (2)의 (i)에 의해 $W'$는 $T$-불변이다. 일차독립인 부분공간들의 (1)에 의해 $V_1 \subseteq W'$이고, $\dim V_1 \ge 1$이므로 [[dimension|유한차원과 차원]]의 (3)에 의해 $V_1 \ne \{0_V\}$, 따라서 $W' \ne \{0_V\}$이며 $W'$는 유한차원이고 $\dim W' \ge 1$이다. (5)를 $E = W'$, $F = V_p$에 쓰면 $p_T = p_{T|_{W'}}\, p_{T|_{V_p}}$이고 대수적 중복도도 두 조각의 것의 합이다.

이제 벡터공간 $W'$와 선형사상 $T|_{W'}$를 보자. (2)의 (ii)에 의해 $V_1, \dots, V_{p-1}$은 벡터공간 $W'$의 부분공간이고 $T|_{W'}$-불변이며 $(T|_{W'})|_{V_k} = T|_{V_k}$이다. (J1)에 의해 $W'$에서 계산한 합은 $V$에서 계산한 것과 같으므로, 이 열은 벡터공간 $W'$의 부분공간의 열로서 일차독립이고 그 합은 $W'$이다. 귀납 가정에 의해 $p_{T|_{W'}} = p_{T|_{V_1}} \cdots p_{T|_{V_{p-1}}}$이고, $T|_{W'}$에서 $\lambda$의 대수적 중복도는 처음 $p - 1$개의 조각의 대수적 중복도의 합이다. 다항함수의 곱의 (2)와 벡터의 유한 합의 정의(끝항 떼기)에 의해 결론이 길이 $p$에서 성립한다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ³ 에서 평면이 불변인 사상의 블록 꼴]
$\mathbb{R}^3$의 표준기저 $e_1, e_2, e_3$에 대하여 $Te_1 = 2e_1 + e_2$, $Te_2 = e_1 + 2e_2$, $Te_3 = e_1 + e_3$인 선형사상 $T$를 생각합시다. $E = \operatorname{span}(e_1, e_2)$에 대하여 $Te_1, Te_2 \in E$이므로 (1)에 의해 $E$는 $T$-불변입니다. $g = 2$, $h = 1$에 대하여
$$
[T]_{\mathcal{E}} = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 0 \\ 0 & 0 & 1 \end{pmatrix}
$$
의 왼쪽 아래 블록은 $(0\ \ 0)$이고, 왼쪽 위 블록 $\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$가 $[T|_E]_{e_1, e_2}$입니다. (4)의 (i)에 의해 모든 실수 $x$에서 $p_T(x) = \bigl((2 - x)^2 - 1\bigr)(1 - x) = (1 - x)(3 - x)(1 - x)$이고, $p_{T|_E}(x) = (1 - x)(3 - x)$입니다. $T|_E$에서 $1$의 대수적 중복도는 $1$이고 $T$에서는 $2$이므로 (4)의 (iv)의 부등식이 등호 없이 성립합니다.

$F = \operatorname{span}(e_3)$은 $Te_3 = e_1 + e_3 \notin F$이므로 $T$-불변이 아니고, 행렬의 오른쪽 위 블록 $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$이 영행렬이 아닌 것과 맞습니다((3)의 (iv)).
:::

:::example[두 직선으로 나뉘는 ℝ² 위의 사상]
$\mathbb{R}^2$에서 $u = (1, 1)$, $w = (1, -1)$이라 하고 $Tu = 3u$, $Tw = -w$인 선형사상 $T$를 생각합시다$\alpha u + \beta w = (\alpha + \beta, \alpha - \beta) = (0, 0)$이면 $\alpha = \beta = 0$이고, $e_1 = \tfrac{1}{2}u + \tfrac{1}{2}w$, $e_2 = \tfrac{1}{2}u - \tfrac{1}{2}w$이므로 $u, w$는 $\mathbb{R}^2$를 생성합니다. [[basis-iff-independent-and-spanning|기저와 일차독립·생성]]에 의해 $u, w$는 기저이고, [[linear-map-determined-by-basis|기저에서의 값으로 정해지는 선형사상]]에 의해 이런 $T$가 하나 있습니다. $E = \operatorname{span}(u)$, $F = \operatorname{span}(w)$는 [[invariant-subspaces-of-self-adjoint-map|불변 부분공간]]의 (1)에 의해 $T$-불변이고, (3)의 (i)에 의해 $E + F = \mathbb{R}^2$, $E \cap F = \{0\}$입니다. (5)에 의해 기저 $u, w$에서 $[T] = \begin{pmatrix} 3 & 0 \\ 0 & -1 \end{pmatrix}$이고, $p_{T|_E}(x) = 3 - x$, $p_{T|_F}(x) = -1 - x$이므로 $p_T(x) = (3 - x)(-1 - x)$입니다.
:::

:::counterexample[불변이 아닌 직선을 앞에 둔 기저의 예]
$\mathbb{R}^2$ 위에서 $T(x_1, x_2) = (x_2, x_1)$인 선형사상과 기저 $e_1, e_2$를 생각합시다. $Te_1 = e_2$이므로
$$
[T]_{\mathcal{E}} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}
$$
이고 왼쪽 아래 블록 $(1)$이 영행렬이 아닙니다. (3)의 (ii)에 의해 $\operatorname{span}(e_1)$은 $T$-불변이 아니고, 실제로 $Te_1 = e_2 \notin \operatorname{span}(e_1)$입니다. 이 경우 왼쪽 위 블록 $(0)$의 특성다항식 $-t$에 대하여 $p_T = (-t)\,q$인 다항함수 $q$는 없습니다. 그런 $q$가 있으면 $p_T(0) = 0$이어야 하는데, $p_T(x) = x^2 - 1$이므로 $p_T(0) = -1$이기 때문입니다.
:::

## 확인 질문

:::check[(6)에서 조각이 셋이고 차원이 1, 1, 2 이며 앞의 두 조각에서 T 가 2 배 사상이고 셋째 조각의 특성다항식의 값이 (2 − x)(5 − x) 이면 T 에서 2 의 대수적 중복도는?]
$\dim V_1 = 1$이고 $T|_{V_1} = 2\,i_{V_1}$이면 $p_{T|_{V_1}}(x) = 2 - x$이므로 $2$의 대수적 중복도는 $1$이고, $V_2$에서도 $1$, $V_3$에서는 $(2 - x)(5 - x)$에서 $1$입니다. (6)에 의해 $T$에서 $2$의 대수적 중복도는 $1 + 1 + 1 = 3$입니다. $\dim V = 4$이고 $p_T(x) = (2 - x)^3 (5 - x)$입니다.
:::

:::check[V 의 기저 b₁, b₂, b₃ 에 관한 T 의 행렬의 첫째 열이 (4, 0, 0) 이면 어떤 부분공간이 T-불변인가?]
첫째 열이 $[Tb_1]_{\mathcal{B}} = (4, 0, 0)$이므로 $Tb_1 = 4b_1$입니다. $g = 1$, $h = 2$에 대하여 $[T]_{\mathcal{B}}$는 블록 위삼각행렬이므로 (3)의 (ii)에 의해 $\operatorname{span}(b_1)$이 $T$-불변입니다. 왼쪽 위 블록 $(4)$가 $[T|_{\operatorname{span}(b_1)}]$입니다.
:::
