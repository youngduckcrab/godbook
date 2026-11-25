---
title: 정규직교 기저의 변환과 직교 닮음
title_en: Change of Orthonormal Basis and Orthogonal Similarity
aliases: [직교 닮음, 직교 대각화, 직교 대각화 가능, orthogonally similar, orthogonal similarity, orthogonally diagonalizable, orthogonal diagonalization, unitarily equivalent]
kind: theorem
field: linear-algebra
msc: ["15A21", "15B10"]
level: undergrad
summary: 두 정규직교 기저 사이의 기저 변환 행렬은 직교행렬이므로, 정규직교 기저에 관한 선형사상의 두 행렬은 직교행렬 Q 로 B = QᵀAQ 꼴로 이어진다. 이런 관계를 직교 닮음이라 하고, 직교행렬 Q 와 대각행렬 D 로 A = QDQᵀ 라 쓸 수 있는 행렬을 직교 대각화 가능이라 한다. A 가 직교 대각화 가능인 것은 정확히 A 의 고유벡터로 된 ℝⁿ 의 정규직교 기저가 있을 때이고, 직교 대각화 가능한 행렬은 대칭이다.
requires: [relation, equivalence-relation, real-number-arithmetic, standard-basis, linear-map, matrix, matrix-vector-product, matrix-product, matrix-product-properties, transpose, invertible-matrix, matrix-in-bases, change-of-basis-and-similarity, eigenvalue-and-eigenvector, diagonalizable, diagonalizable-iff-eigenbasis, trace, trace-of-product, real-eigenvalues-2x2, inner-product-space, standard-inner-product, orthonormal-basis, orthonormal-basis-exists, self-adjoint-map, orthogonal-map, orthogonal-matrix]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "5장 6절 Isometries and unitary operators. Unitary and orthogonal matrices., 6.2 Examples 의 둘째 예, p.148; 6.4 Unitary equivalent operators 의 Definition 과 Proposition 6.5, 그 증명, p.149; 6절 연습문제 6.2, 6.6, 6.7, pp.150–151"
    checked: original
    note: "출처 6.4(p.149)는 연산자(행렬) A, B 가 A = UBU* 인 unitary operator U 가 있을 때 unitarily equivalent 라 부르고, U⁻¹ = U* 이므로 unitarily equivalent 인 행렬은 닮았으며 그 역은 성립하지 않는다고 적는다. 이 항목의 '직교 닮음'은 실수만 쓰는 이 사이트에서 그것에 해당하는 이름이고, B = QᵀAQ 로 정의한다. (3)의 A = QBQᵀ 가 출처의 A = UBU* 와 같은 꼴이다. 출처는 6장 2절 연습문제 2.10, 2.11(p.170)과 5장 6절 연습문제 6.1(p.150)에서 'orthogonally diagonalize' 라는 말을 쓰고, 6.1 에서는 A = UDU* 인 unitary U 와 대각행렬 D 를 찾으라는 뜻으로 쓴다. (4)는 출처 Proposition 6.5(p.149) '행렬이 대각행렬과 unitarily equivalent 인 것은 정확히 고유벡터로 된 직교(정규직교) 기저를 가질 때'의 실수판이고, 증명도 같은 길이다. 출처는 그 증명에서 [A]_{SS} = [I]_{SB}[A]_{BB}[I]_{BS} = UDU⁻¹ 이라는 기저 변환 공식을 쓰고, 이 항목은 '대각화와 고유벡터의 기저' 항목의 (3)을 쓴다. 출처 연습문제 6.2(p.150)는 Proposition 6.5 를 참·거짓으로 다시 묻는다. (1)은 출처 6.2 의 둘째 예(p.148)가 두 정규직교 기저를 잇는 사상이 unitary 라고 적는 것을 기저 변환 행렬에 쓴 것이고, (2)는 정규직교 기저를 바꾸면 선형사상의 두 행렬이 직교 닮음으로 이어진다는 것을 기저 변환 행렬로 증명한 것이다. (3)의 대각합 등식은 출처 연습문제 6.6 a)(p.150)의 trace(A*A) = trace(B*B) 이다. 출처 연습문제 6.7(pp.150–151)은 여러 행렬 쌍이 unitarily equivalent 인지 묻고 그 힌트에 대각합, 행렬식, 고윳값이 같아야 한다고 적는다. (5)의 '직교 대각화 가능이면 대칭'은 이 항목이 전치행렬의 계산으로 증명한다. (6)은 (4)를 정규직교 기저에 관한 선형사상의 행렬로 옮긴 것이다. 반례 '대각화 가능하지만 직교 대각화 가능이 아닌 행렬'은 출처 6.4(p.149)가 '닮았지만 unitarily equivalent 가 아닌 행렬의 쌍을 만들기 쉽다'고 적고 Proposition 6.5 를 그 방법으로 드는 것과 같은 발상이고, 연습문제 6.7 e)(p.151)의 위삼각행렬과 대각행렬의 쌍과도 같은 발상이다. 확인 질문 '대각성분이 1, 2 인 대각행렬과 첫째 행이 1, 1 이고 둘째 행이 0, 2 인 행렬은 직교 닮았는가?'는 연습문제 6.6 b)(p.150)와 6.7 의 힌트처럼 성분의 제곱합(대각합 tr(A*A))으로 직교 닮음이 아님을 보이는 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(반사 행렬의 수치 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$n$이 자연수라 하자. 직교행렬은 [[orthogonal-matrix|직교행렬]]의 것이고, 대각행렬과 $\operatorname{diag}$, 대각화 가능은 [[diagonalizable|대각화 가능]]의 것, 대칭행렬은 [[self-adjoint-map|자기수반사상과 대칭행렬]]의 것, 고윳값과 고유벡터는 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 것이다. $\mathbb{R}^n$에는 [[standard-inner-product|표준내적]]을 준다.

$A$, $B$가 $n \times n$ 행렬일 때, $B$가 $A$와 **직교 닮았다**(orthogonally similar)는 것은 정확히 $B = Q^T A Q$인 $n \times n$ 직교행렬 $Q$가 있을 때이다. $M_{n \times n}$ 위의 [[relation|관계]] $\{(B, A) \in M_{n \times n} \times M_{n \times n} : B\text{가 } A\text{와 직교 닮았다}\}$를 **직교 닮음**이라 한다. $n \times n$ 행렬 $A$가 **직교 대각화 가능**(orthogonally diagonalizable)인 것은 정확히 $A = Q D Q^T$인 $n \times n$ 직교행렬 $Q$와 $n \times n$ 대각행렬 $D$가 있을 때이다.

아래 (1), (2), (6)에서 $V$는 [[inner-product-space|내적공간]]이고 $\mathcal{B} = b_1, \dots, b_n$, $\mathcal{C} = c_1, \dots, c_n$은 $V$의 [[orthonormal-basis|정규직교 기저]]이다(따라서 $V$는 유한차원이고 $\dim V = n$이다). 기저 변환 행렬과 닮음은 [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 것이고, $[T]_{\mathcal{B}}$는 [[matrix-in-bases|기저에 관한 선형사상의 행렬]]의 것이다.

1. (정규직교 기저 사이의 기저 변환 행렬) $\mathcal{B}$에서 $\mathcal{C}$로의 기저 변환 행렬 $Q = [i_V]_{\mathcal{C}\mathcal{B}}$는 직교행렬이고, 그 $(j, k)$ 성분은 $\langle b_k, c_j \rangle$이다. 그 역행렬은 $Q^T = [i_V]_{\mathcal{B}\mathcal{C}}$이다.
2. (두 행렬의 관계) $T : V \to V$가 [[linear-map|선형사상]]이고 $Q = [i_V]_{\mathcal{C}\mathcal{B}}$이면 $[T]_{\mathcal{B}} = Q^T [T]_{\mathcal{C}} Q$이다. 곧 $[T]_{\mathcal{B}}$는 $[T]_{\mathcal{C}}$와 직교 닮았다.
3. (직교 닮음의 성질) 직교 닮음은 $M_{n \times n}$ 위의 [[equivalence-relation|동치관계]]이다. 따라서 $B$가 $A$와 직교 닮았으면 $A$도 $B$와 직교 닮았으므로 이때 $A$와 $B$가 직교 닮았다고 한다. $B = Q^T A Q$이고 $Q$가 직교행렬이면 $B = Q^{-1} A Q$이고 $A = Q B Q^T$이며, $A$와 $B$는 닮았다. 또 이때 $\operatorname{tr}(B^T B) = \operatorname{tr}(A^T A)$이고, $A$가 대칭이면 $B$도 대칭이다.
4. (직교 대각화와 정규직교 고유기저) $A$가 $n \times n$ 행렬이고 $\lambda_1, \dots, \lambda_n$이 길이 $n$인 실수의 열이며 $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$이라 하자.
   - (i) $Q$가 직교행렬이고 $A = Q D Q^T$이면, $Q$의 열 $\mathbf{q}_1, \dots, \mathbf{q}_n$은 $\mathbb{R}^n$의 정규직교 기저이고 모든 $k$에서 $\mathbf{q}_k$는 $\lambda_k$에 속하는 $A$의 고유벡터이다.
   - (ii) 거꾸로 $\mathbb{R}^n$의 정규직교 기저 $u_1, \dots, u_n$이 모든 $k$에서 $A u_k = \lambda_k u_k$를 만족하면, $k$번째 열이 $u_k$인 $n \times n$ 행렬 $Q$는 직교행렬이고 $A = Q D Q^T$이다.

   따라서 $A$가 직교 대각화 가능인 것은 정확히 모든 항이 $A$의 고유벡터인 $\mathbb{R}^n$의 정규직교 기저(**고유벡터로 된 정규직교 기저**)가 있을 때이다. 직교 대각화 가능한 행렬은 대각화 가능하다.
5. (직교 대각화 가능이면 대칭) 직교 대각화 가능한 $n \times n$ 행렬은 대칭행렬이다.
6. (선형사상) $T : V \to V$가 선형사상이라 하자. 다음 넷은 서로 같다.
   - (가) 모든 항이 $T$의 고유벡터인 $V$의 정규직교 기저가 있다.
   - (나) $[T]_{\mathcal{D}}$가 대각행렬인 $V$의 정규직교 기저 $\mathcal{D}$가 있다.
   - (다) $[T]_{\mathcal{B}}$는 직교 대각화 가능이다.
   - (라) $V$의 모든 정규직교 기저 $\mathcal{D}$에서 $[T]_{\mathcal{D}}$는 직교 대각화 가능이다.
:::

:::english
Let $n$ be a natural number. Orthogonal matrices are as in the entry on orthogonal matrices; diagonal matrices, $\operatorname{diag}$ and diagonalizability as in the entry on diagonalizability; symmetric matrices as in the entry on self-adjoint maps and symmetric matrices; eigenvalues and eigenvectors as in the entry on eigenvalues and eigenvectors. $\mathbb{R}^n$ carries the standard inner product.

For $n \times n$ matrices $A$, $B$, we say $B$ is **orthogonally similar** to $A$ exactly when there is an $n \times n$ orthogonal matrix $Q$ with $B = Q^T A Q$. The relation $\{(B, A) \in M_{n \times n} \times M_{n \times n} : B \text{ is orthogonally similar to } A\}$ on $M_{n \times n}$ is called **orthogonal similarity**. An $n \times n$ matrix $A$ is **orthogonally diagonalizable** exactly when there are an $n \times n$ orthogonal matrix $Q$ and an $n \times n$ diagonal matrix $D$ with $A = Q D Q^T$.

In (1), (2) and (6) below, $V$ is an inner product space and $\mathcal{B} = b_1, \dots, b_n$, $\mathcal{C} = c_1, \dots, c_n$ are orthonormal bases of $V$ (so $V$ is finite-dimensional and $\dim V = n$). Change-of-basis matrices and similarity are as in the entry on change of basis and similar matrices, and $[T]_{\mathcal{B}}$ as in the entry on matrices of linear maps with respect to bases.

1. (Change-of-basis matrix between orthonormal bases) The change-of-basis matrix $Q = [i_V]_{\mathcal{C}\mathcal{B}}$ from $\mathcal{B}$ to $\mathcal{C}$ is an orthogonal matrix, and its $(j, k)$ entry is $\langle b_k, c_j \rangle$. Its inverse is $Q^T = [i_V]_{\mathcal{B}\mathcal{C}}$.
2. (Relation between the two matrices) If $T : V \to V$ is a linear map and $Q = [i_V]_{\mathcal{C}\mathcal{B}}$, then $[T]_{\mathcal{B}} = Q^T [T]_{\mathcal{C}} Q$. That is, $[T]_{\mathcal{B}}$ is orthogonally similar to $[T]_{\mathcal{C}}$.
3. (Properties of orthogonal similarity) Orthogonal similarity is an equivalence relation on $M_{n \times n}$. Hence if $B$ is orthogonally similar to $A$, then $A$ is orthogonally similar to $B$, and we then say $A$ and $B$ are orthogonally similar. If $B = Q^T A Q$ with $Q$ orthogonal, then $B = Q^{-1} A Q$ and $A = Q B Q^T$, and $A$ and $B$ are similar. Moreover, in that case $\operatorname{tr}(B^T B) = \operatorname{tr}(A^T A)$, and if $A$ is symmetric then so is $B$.
4. (Orthogonal diagonalization and orthonormal eigenbases) Let $A$ be an $n \times n$ matrix, let $\lambda_1, \dots, \lambda_n$ be a sequence of real numbers of length $n$, and let $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$.
   - (i) If $Q$ is an orthogonal matrix and $A = Q D Q^T$, then the columns $\mathbf{q}_1, \dots, \mathbf{q}_n$ of $Q$ form an orthonormal basis of $\mathbb{R}^n$ and, for every $k$, $\mathbf{q}_k$ is an eigenvector of $A$ belonging to $\lambda_k$.
   - (ii) Conversely, if an orthonormal basis $u_1, \dots, u_n$ of $\mathbb{R}^n$ satisfies $A u_k = \lambda_k u_k$ for every $k$, then the $n \times n$ matrix $Q$ whose $k$th column is $u_k$ is an orthogonal matrix and $A = Q D Q^T$.

   Hence $A$ is orthogonally diagonalizable exactly when there is an orthonormal basis of $\mathbb{R}^n$ all of whose terms are eigenvectors of $A$ (an **orthonormal eigenbasis**). An orthogonally diagonalizable matrix is diagonalizable.
5. (Orthogonally diagonalizable implies symmetric) An orthogonally diagonalizable $n \times n$ matrix is a symmetric matrix.
6. (Linear maps) Let $T : V \to V$ be a linear map. The following four are equivalent.
   - (a) There is an orthonormal basis of $V$ all of whose terms are eigenvectors of $T$.
   - (b) There is an orthonormal basis $\mathcal{D}$ of $V$ such that $[T]_{\mathcal{D}}$ is a diagonal matrix.
   - (c) $[T]_{\mathcal{B}}$ is orthogonally diagonalizable.
   - (d) For every orthonormal basis $\mathcal{D}$ of $V$, $[T]_{\mathcal{D}}$ is orthogonally diagonalizable.
:::

## 직관

정규직교 기저는 $V$에 그은 "직각인 눈금자"입니다. 눈금자를 다른 직각인 눈금자로 바꾸는 기저 변환 행렬은 길이와 내적을 바꾸지 않으므로 직교행렬이고((1)), 그 역행렬은 계산할 필요 없이 전치행렬입니다. 그래서 같은 선형사상을 두 정규직교 기저로 적은 두 행렬은 일반적인 닮음 $Q^{-1} A Q$보다 좁은 관계 $Q^T A Q$로 이어집니다((2)). 이 관계가 직교 닮음입니다.

대각화는 고유벡터로 된 기저를 찾는 일이었습니다. 직교 대각화는 그 기저가 정규직교이기까지 한 경우이고((4)), 이때 $A = Q D Q^T$의 $Q$의 열이 바로 그 기저입니다. 직교 닮음은 닮음보다 좁으므로 직교 대각화 가능은 대각화 가능보다 좁은 성질입니다. 대각화 가능하지만 직교 대각화 가능이 아닌 행렬이 있습니다(예시).

$Q D Q^T$의 전치는 다시 $Q D Q^T$이므로 직교 대각화 가능한 행렬은 대칭입니다((5)). 전치를 해도 $Q$와 $Q^T$의 자리가 바뀌고 대각행렬 $D$는 그대로이기 때문입니다.

## 증명

:::idea
정규직교 기저에서는 좌표로 내적을 계산할 수 있으므로 기저 변환 행렬의 열이 정규직교이고, 그래서 그 역행렬이 전치행렬입니다. 나머지는 이미 있는 닮음과 대각화의 정리에서 $Q^{-1}$을 $Q^T$로 바꾸어 읽는 것입니다.
:::

:::hint
$[i_V]_{\mathcal{C}\mathcal{B}}$는 항등사상의 행렬이고, 항등사상은 직교사상입니다. 직교행렬 항목의 (3)을 보십시오.
:::

:::hint
$(Q D Q^T)^T$를 전치행렬의 성질로 계산하십시오. 대각행렬의 전치는 무엇입니까?
:::

:::proof
아래에서 [[orthogonal-matrix|직교행렬]]의 번호는 "직교행렬의 (1)"처럼, [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 번호는 "기저 변환의 (1)"처럼, [[transpose|전치행렬]]의 번호는 "전치의 (1)"처럼, [[matrix-product-properties|행렬 곱의 성질]]의 번호는 "곱의 성질의 (1)"처럼 줄여 쓴다. 괄호 없이 쓴 세 행렬의 곱은 곱의 성질의 (1)에 의해 괄호를 어떻게 치든 같다. 직교행렬의 (2)의 (가)–(다)에 의해 직교행렬 $Q$는 가역이고 $Q^{-1} = Q^T$이며 $Q^T Q = Q Q^T = I_n$이다.

**(1)의 증명.** [[orthogonal-map|직교사상]]의 (8)에 의해 $i_V$는 직교사상이므로, 직교행렬의 (3)을 $W = V$, $p = q = n$, $T = i_V$에 쓰면 $[i_V]_{\mathcal{C}\mathcal{B}}$는 직교행렬이다. [[orthonormal-basis|정규직교 기저]]의 (4)에 의해 그 $(j, k)$ 성분은 $\langle i_V b_k, c_j \rangle = \langle b_k, c_j \rangle$이다. 기저 변환의 (2)에 의해 $Q$의 역행렬은 $[i_V]_{\mathcal{B}\mathcal{C}}$이고, [[invertible-matrix|가역행렬과 역행렬]]의 (1)에 의해 역행렬은 하나뿐이므로 $[i_V]_{\mathcal{B}\mathcal{C}} = Q^{-1} = Q^T$이다.

**(2)의 증명.** 기저 변환의 (3)을 그 항목의 $\mathcal{A}$, $\mathcal{B}$ 자리에 각각 $\mathcal{B}$, $\mathcal{C}$를 넣어 쓰면 $[T]_{\mathcal{B}} = Q^{-1}[T]_{\mathcal{C}} Q$이고, (1)에 의해 $Q^{-1} = Q^T$이다. (1)에 의해 $Q$는 직교행렬이므로 $[T]_{\mathcal{B}}$는 $[T]_{\mathcal{C}}$와 직교 닮았다.

**(3)의 증명.** (반사성) 직교행렬의 (7)에 의해 $I_n$은 직교행렬이고, 전치의 (3)과 곱의 성질의 (4)에 의해 $A = I_n^T A I_n$이다. (대칭성) $B = Q^T A Q$이고 $Q$가 직교행렬이면, 곱의 성질의 (1), (4)에 의해 $Q B Q^T = (Q Q^T) A (Q Q^T) = I_n A I_n = A$이다. 직교행렬의 (4)에 의해 $Q^T$는 직교행렬이고 전치의 (1)에 의해 $(Q^T)^T = Q$이므로 $A = (Q^T)^T B Q^T$이고, $A$는 $B$와 직교 닮았다. (추이성) $B = Q^T A Q$, $C = R^T B R$이고 $Q$, $R$가 직교행렬이면, 전치의 (4)에 의해 $C = R^T Q^T A Q R = (QR)^T A (QR)$이고, 직교행렬의 (4)에 의해 $QR$은 직교행렬이다. [[equivalence-relation|동치관계]]의 정의에 의해 직교 닮음은 동치관계이다.

$B = Q^T A Q$이면 $Q^T = Q^{-1}$이므로 $B = Q^{-1} A Q$이고, [[change-of-basis-and-similarity|닮음]]의 정의에 의해 $B$는 $A$와 닮았으며, 기저 변환의 (4)에 의해 $A$와 $B$는 닮았다. $A = Q B Q^T$는 대칭성의 증명에서 보았다.

전치의 (4)와 (1)에 의해 $B^T = Q^T A^T (Q^T)^T = Q^T A^T Q$이므로 $B^T B = Q^T A^T (Q Q^T) A Q = Q^T (A^T A Q)$이다. [[trace-of-product|곱의 대각합]]의 (1)을 $n \times n$ 행렬 $Q^T$와 $A^T A Q$에 쓰면

$$
\begin{aligned}
\operatorname{tr}(B^T B) &= \operatorname{tr}\bigl((A^T A Q) Q^T\bigr) \\
&= \operatorname{tr}\bigl(A^T A (Q Q^T)\bigr) \\
&= \operatorname{tr}(A^T A)
\end{aligned}
$$

이다. $A^T = A$이면 $B^T = Q^T A Q = B$이므로 $B$는 대칭이다.

**(4)의 증명.** (i) $Q$가 직교행렬이면 직교행렬의 (2)에 의해 $Q$는 가역이고 $Q^T = Q^{-1}$이며 그 열 $\mathbf{q}_1, \dots, \mathbf{q}_n$은 $\mathbb{R}^n$의 정규직교 기저이다. $A = Q D Q^T = Q D Q^{-1}$이므로 [[diagonalizable-iff-eigenbasis|대각화와 고유벡터의 기저]]의 (3)을 $S = Q$에 쓰면 모든 $k$에서 $\mathbf{q}_k$는 $\lambda_k$에 속하는 $A$의 고유벡터이다.

(ii) [[matrix|행렬]]의 (4)에 의해 $k$번째 열이 $u_k$인 $n \times n$ 행렬 $Q$가 있다. 그 열이 $\mathbb{R}^n$의 정규직교 기저이므로 직교행렬의 (2)의 (마)에 의해 $Q$는 직교행렬이고, 가역이며 $Q^{-1} = Q^T$이다. 모든 $k$에서 $A u_k = \lambda_k u_k$이므로 대각화와 고유벡터의 기저의 (3)을 $S = Q$에 쓰면 $A = Q D Q^{-1} = Q D Q^T$이다.

이제 $A$가 직교 대각화 가능이면 $A = Q D Q^T$인 직교행렬 $Q$와 대각행렬 $D$가 있고, [[diagonalizable|대각화 가능]]의 (1)에 의해 $D = \operatorname{diag}(d_{1,1}, \dots, d_{n,n})$이므로 (i)에 의해 $Q$의 열이 고유벡터로 된 정규직교 기저이다. 거꾸로 고유벡터로 된 정규직교 기저 $u_1, \dots, u_n$이 있으면, [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 정의와 (5)에 의해 각 $u_k$가 속하는 고윳값이 하나로 정해지고, 그것을 $\lambda_k$로 둔 열에 (ii)를 쓰면 $A$는 직교 대각화 가능이다. 마지막으로 $A = Q D Q^T = Q D Q^{-1}$이고 $Q$가 가역이므로 대각화 가능의 (5)에 의해 $A$는 대각화 가능이다.

**(5)의 증명.** $A = Q D Q^T$이고 $D$가 대각행렬이라 하자. 전치행렬의 정의에 의해 $(D^T)_{j,k} = d_{k,j}$이다. $j = k$이면 이것은 $d_{j,k}$이고, $j \ne k$이면 $D$가 대각행렬이므로 $d_{k,j} = 0 = d_{j,k}$이다. 행렬의 (2)에 의해 $D^T = D$이다. 전치의 (4)를 두 번 쓰고 전치의 (1)을 쓰면

$$
\begin{aligned}
A^T &= (Q D Q^T)^T = (Q^T)^T D^T Q^T \\
&= Q D Q^T = A
\end{aligned}
$$

이므로 $A$는 대칭이다.

**(6)의 증명.** (가) ⇒ (나): $\mathcal{D} = d_1, \dots, d_n$이 모든 항이 $T$의 고유벡터인 $V$의 정규직교 기저이면, 대각화와 고유벡터의 기저의 (2)에 의해 $[T]_{\mathcal{D}}$는 대각행렬이다.

(나) ⇒ (라): $\mathcal{D}$가 (나)의 정규직교 기저이고 $D_0 = [T]_{\mathcal{D}}$라 하자. $\mathcal{A}$가 $V$의 아무 정규직교 기저이면, (2)를 $\mathcal{B} = \mathcal{A}$, $\mathcal{C} = \mathcal{D}$에 쓰면 $P = [i_V]_{\mathcal{D}\mathcal{A}}$는 직교행렬이고 $[T]_{\mathcal{A}} = P^T D_0 P$이다. 직교행렬의 (4)에 의해 $P^T$는 직교행렬이고 전치의 (1)에 의해 $P = (P^T)^T$이므로 $[T]_{\mathcal{A}} = P^T D_0 (P^T)^T$는 직교 대각화 가능이다.

(라) ⇒ (다): $\mathcal{B}$는 $V$의 정규직교 기저이므로 (라)에 의해 $[T]_{\mathcal{B}}$는 직교 대각화 가능이다.

(다) ⇒ (가): $[T]_{\mathcal{B}}$가 직교 대각화 가능이면 (4)에 의해 $[T]_{\mathcal{B}}$의 고유벡터로 된 $\mathbb{R}^n$의 정규직교 기저 $x_1, \dots, x_n$이 있다. $v_k = C_{\mathcal{B}} x_k$로 두면 기저에 관한 선형사상의 행렬의 (1)에 의해 $[v_k]_{\mathcal{B}} = x_k$이다. 기저 변환의 (6)에 의해 $x_k$가 $\lambda$에 속하는 $[T]_{\mathcal{B}}$의 고유벡터이면 $v_k$는 $\lambda$에 속하는 $T$의 고유벡터이다. 정규직교 기저의 (3)에 의해 $\langle v_j, v_k \rangle = \langle [v_j]_{\mathcal{B}}, [v_k]_{\mathcal{B}} \rangle = \langle x_j, x_k \rangle$이므로 $v_1, \dots, v_n$은 $V$의 정규직교 열이고, 그 길이 $n$이 $\dim V$이므로 정규직교 기저의 (1)에 의해 $V$의 정규직교 기저이다. 이것이 (가)의 기저이다. $\blacksquare$
:::

## 예시와 반례

:::example[2 × 2 대칭행렬의 직교 대각화]
$u_1 = (3/5, 4/5)$, $u_2 = (-4/5, 3/5)$라 하면 $\langle u_1, u_1 \rangle = \langle u_2, u_2 \rangle = 9/25 + 16/25 = 1$이고 $\langle u_1, u_2 \rangle = -12/25 + 12/25 = 0$이므로 $u_1, u_2$는 정규직교 열이고, [[orthonormal-basis|정규직교 기저]]의 (1)에 의해 $\mathbb{R}^2$의 정규직교 기저입니다. 
$$
A = \begin{pmatrix} -11 & 12 \\ 12 & -4 \end{pmatrix}
$$

이라 합시다. $v = (3, 4)$, $w = (-4, 3)$이라 하면 [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)에 의해 $Av = (-33 + 48, 36 - 16) = (15, 20) = 5v$이고 $Aw = (44 + 36, -48 - 12) = (80, -60) = -20w$입니다. $u_1 = 5^{-1}v$, $u_2 = 5^{-1}w$이므로 $Au_1 = 5u_1$, $Au_2 = -20u_2$입니다. 따라서 $k$번째 열이 $u_k$인 행렬을 $Q$, $D = \operatorname{diag}(5, -20)$이라 하면 (4)의 (ii)에 의해 $Q$는 직교행렬이고 $A = Q D Q^T$이며, $A$는 직교 대각화 가능입니다. $A$는 (5)대로 대칭입니다.
:::

:::counterexample[대각화 가능하지만 직교 대각화 가능이 아닌 행렬]
$$
A = \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}
$$

이라 합시다. $\operatorname{tr} A = 3$, $\det A = 2$이므로 [[real-eigenvalues-2x2|2 × 2 행렬의 실고윳값]]의 판별식은 $9 - 8 = 1 > 0$이고, 그 항목의 (4)에 의해 $A$는 서로 다른 두 고윳값 $2$, $1$을 갖고 대각화 가능입니다. 그러나 $(1, 2)$ 성분 $1$과 $(2, 1)$ 성분 $0$이 달라 $A$는 대칭이 아니므로 (5)에 의해 직교 대각화 가능이 아닙니다. 실제로 행 규칙에 의해 $(A - I_2)x = (x_2, x_2)$, $(A - 2I_2)x = (-x_1 + x_2, 0)$이므로 $1$에 속하는 고유벡터는 $(c, 0)$ 꼴, $2$에 속하는 고유벡터는 $(d, d)$ 꼴($c$, $d$는 $0$이 아닌 실수)이고, 두 꼴의 표준내적은 $cd \ne 0$입니다.
:::

## 확인 질문

:::check[대각성분이 1, 2 인 대각행렬과 첫째 행이 1, 1 이고 둘째 행이 0, 2 인 행렬은 직교 닮았는가?]
아닙니다. 첫째 행렬 $A = \operatorname{diag}(1, 2)$와 둘째 행렬 $B = \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}$에서 [[standard-inner-product|ℝⁿ 의 표준내적]]의 (5)에 의해 $A^T A$의 대각성분은 열과 자기 자신의 내적 $1$, $4$이고 $B^T B$의 대각성분은 $1$, $1 + 4 = 5$이므로 $\operatorname{tr}(A^T A) = 5$, $\operatorname{tr}(B^T B) = 6$입니다. 직교 닮았다면 (3)에 의해 두 값이 같아야 합니다.
:::

:::check[$1 \times 1$ 행렬은 모두 직교 대각화 가능인가?]
그렇습니다. $A = \begin{pmatrix} a \end{pmatrix}$이면 $A$는 대각행렬이고, [[orthogonal-matrix|직교행렬]]의 (7)에 의해 $I_1$은 직교행렬이며 [[transpose|전치행렬]]의 (3)과 [[matrix-product-properties|행렬 곱의 성질]]의 (4)에 의해 $A = I_1 A I_1^T$입니다. (5)와도 맞게, [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (5)에 의해 모든 $1 \times 1$ 행렬은 대칭입니다.
:::
