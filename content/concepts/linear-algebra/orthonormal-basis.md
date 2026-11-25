---
title: 정규직교 기저
title_en: Orthonormal Basis
aliases: [정규직교기저, 푸리에 전개, 파스발 항등식, orthonormal basis, Fourier expansion, abstract Fourier decomposition, Parseval's identity]
kind: definition
field: linear-algebra
msc: ["15A63"]
level: undergrad
summary: 정규직교 열이면서 기저인 열을 정규직교 기저라 한다. 차원이 n 인 내적공간에서 길이 n 인 정규직교 열은 정규직교 기저이다. 정규직교 기저에 관한 벡터의 좌표는 그 벡터와 기저의 항의 내적이고(푸리에 전개), 두 벡터의 내적은 좌표벡터의 표준내적이다(파스발). 정규직교 기저에 관한 선형사상의 행렬의 성분도 내적으로 쓴다.
requires: [real-number-arithmetic, power-of-a-real-number, function, real-function-space, finite-sum-of-vectors, linear-combination-and-span, subspace, sequences-in-a-subspace, basis, dimension, independent-and-spanning-bounds, standard-basis, linear-map, matrix, matrix-vector-product, matrix-in-bases, inner-product-space, standard-inner-product, inner-product-examples, norm-in-inner-product-space, orthonormal-list]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 5장 2절 Orthogonality. Orthogonal and orthonormal bases 의 2.1 Orthogonal and orthonormal bases — Definition 2.7 과 그 뒤 문장, 식 (2.1), p.127; 식 (2.2), Remark 2.8, p.128; 2절 연습문제 2.3, 2.4, pp.128–129
    checked: original
    note: "출처 Definition 2.7(p.127)은 직교(정규직교) system 이면서 기저인 것을 직교(정규직교) 기저라 한다. 이 항목은 정규직교 기저만 정의한다. (1)의 '길이 n 인 정규직교 열은 기저'는 출처가 Definition 2.7 바로 뒤에서 'dim V = n 이면 영벡터가 아닌 n 개의 벡터로 된 직교 system 은 직교 기저'라고 'It is clear' 로 적는 것의 정규직교판이다. 이 항목은 정규직교 열은 일차독립이라는 것과 일차독립인 열과 생성하는 열의 길이 항목의 (3)으로 증명했다. (2)는 출처 식 (2.1)(p.127)과 식 (2.2)(p.128)이다. 출처는 (2.2)를 (a baby version of) the abstract orthogonal Fourier decomposition 이라 부른다. 증명은 출처와 같다(양변과 v_k 의 내적을 취한다). (3)은 출처 연습문제 2.3 의 a), b)(p.128)의 실수판이다. 출처는 b)를 Parseval's identity 라 부른다. 출처 Remark 2.8(p.128)은 정규직교 기저를 고정하면 좌표로 𝔽ⁿ 에서처럼 계산할 수 있고, 연습문제 2.3 이 좌표의 표준내적으로 내적을 계산할 수 있음을 보인다고 적는다. (4)는 기저에 관한 선형사상의 행렬 항목의 (2)와 이 항목의 (2)로 증명했다. 출처 5절 5.1.2(p.143)는 정규직교 기저에 관한 행렬로 수반사상을 정하고, 그것이 수반사상이라는 증명을 독자에게 맡긴다. (5)는 표준기저가 표준내적에 대해 정규직교라는 것이다. (6)은 부분공간 안의 열 항목의 (J4)와 정규직교 열 항목의 (6)으로 증명했다. 예시 '좌표의 내적으로 정한 내적에서 정규직교인 기저'는 출처 2절 연습문제 2.4(p.129)가 기저를 정규직교로 선언해 내적을 정하는 것과 같은 발상이다. 예시 'ℝ² 의 정규직교 기저에서 좌표와 내적'은 출처 식 (2.2)와 연습문제 2.3 의 a), b)를 수로 확인한 것이다. 예시 '정규직교 기저에 관한 행렬을 내적으로 구하기'의 사상 T_A 는 출처 1장 3절 연습문제 3.2(p.17)의 직선 x₁ = x₂ 에 대한 반사와 같은 사상이고, 표준기저가 아닌 기저에 관한 ℝ² 위의 사상의 행렬을 구하는 것은 출처 2장 8절 연습문제 8.4(p.73)와 같은 발상이다. 반례 '단위벡터가 아닌 직교하는 기저에서 (2)의 식이 맞지 않는 예'는 출처 식 (2.1)(p.127)의 직교 기저의 좌표 α_k = (x, v_k)/‖v_k‖² 과 연습문제 2.3 의 c)(p.129)와 같은 대상(정규직교가 아닌 직교 기저)을 다룬다. 확인 질문 '$b_1, b_2, b_3$이 내적공간 $V$의 정규직교 기저이고 $v = 2b_1 - b_3$, $w = b_1 + b_2 + b_3$이면 $\\langle v, w \\rangle$는 무엇인가?'는 출처 연습문제 2.3 의 a)를 수로 쓴 것이다. 확인 질문 '표준내적을 준 $\\mathbb{R}^3$에서 길이 $2$인 정규직교 열이 $\\mathbb{R}^3$의 기저일 수 있는가?'는 출처 Definition 2.7 뒤 문장(p.127)과 같은 대상(차원과 같은 길이의 직교하는 열)을 다룬다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(최소 거리의 양방향 증명 통독). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$V$가 [[inner-product-space|내적공간]]이라 하자. 직교하는 열과 정규직교 열은 [[orthonormal-list|직교하는 열과 정규직교 열]]의 것이다. $n \ge 0$이 정수이고 $b_1, \dots, b_n$이 $V$의 길이 $n$인 벡터의 열일 때, 이 열이 $V$의 **정규직교 기저**(orthonormal basis)인 것은 정확히 이 열이 정규직교 열이고 $V$의 [[basis|기저]]일 때이다. 기저를 $\mathcal{B} = b_1, \dots, b_n$처럼 이름 붙여 쓴다.

다음이 성립한다.

1. (길이와 기저) $V$가 [[dimension|유한차원]]이고 $\dim V = d$라 하자. $V$의 모든 정규직교 열의 길이는 $d$ 이하이다. 길이 $d$인 $V$의 정규직교 열은 $V$의 정규직교 기저이다. $V$의 정규직교 기저의 길이는 $d$이다. $d = 0$, 곧 $V = \{0_V\}$이면 빈 열이 $V$의 하나뿐인 정규직교 기저이다.
2. (푸리에 전개와 좌표) $\mathcal{B} = b_1, \dots, b_n$이 $V$의 정규직교 기저이고 $v \in V$이면
   $$
   v = \langle v, b_1 \rangle b_1 + \cdots + \langle v, b_n \rangle b_n
   $$
   이다. 오른쪽은 $k$번째 항이 $\langle v, b_k \rangle b_k$인 열의 합이다. 곧 $\mathcal{B}$에 관한 $v$의 좌표는 $\langle v, b_1 \rangle, \dots, \langle v, b_n \rangle$이다. $n \ge 1$이면 [[matrix-in-bases|기저에 관한 선형사상의 행렬]]의 좌표벡터 $[v]_{\mathcal{B}}$는 $k$에서의 값이 $\langle v, b_k \rangle$인 $\mathbb{R}^n$의 원소이다.
3. (좌표로 계산하는 내적) $\mathcal{B} = b_1, \dots, b_n$이 $V$의 정규직교 기저이고 $v, w \in V$의 $\mathcal{B}$에 관한 좌표가 각각 $\alpha_1, \dots, \alpha_n$과 $\beta_1, \dots, \beta_n$이면 $\langle v, w \rangle = \alpha_1 \beta_1 + \cdots + \alpha_n \beta_n$이다. 곧
   $$
   \begin{aligned}
   \langle v, w \rangle &= \langle v, b_1 \rangle \langle w, b_1 \rangle + \cdots \\
   &\quad + \langle v, b_n \rangle \langle w, b_n \rangle
   \end{aligned}
   $$
   이고(**파스발 항등식**, Parseval's identity), 특히 $\lVert v \rVert^2 = \langle v, b_1 \rangle^2 + \cdots + \langle v, b_n \rangle^2$이다. $n \ge 1$이면 $\langle v, w \rangle = \langle [v]_{\mathcal{B}}, [w]_{\mathcal{B}} \rangle$이고, 오른쪽은 $\mathbb{R}^n$의 [[standard-inner-product|표준내적]]이다.
4. (선형사상의 행렬의 성분) $W$도 내적공간이고 $n$, $m$이 자연수이며, $\mathcal{B} = b_1, \dots, b_n$이 $V$의 정규직교 기저, $\mathcal{C} = c_1, \dots, c_m$이 $W$의 정규직교 기저, $T : V \to W$가 [[linear-map|선형사상]]이라 하자. 그러면 모든 $j \in \{1, \dots, m\}$와 $k \in \{1, \dots, n\}$에서 $[T]_{\mathcal{C}\mathcal{B}}$의 $(j, k)$ 성분은
   $$
   ([T]_{\mathcal{C}\mathcal{B}})_{j,k} = \langle T b_k, c_j \rangle
   $$
   이다. 오른쪽은 $W$의 내적이다. 특히 $W = V$이고 $\mathcal{C} = \mathcal{B}$이면 $([T]_{\mathcal{B}})_{j,k} = \langle T b_k, b_j \rangle$이다.
5. ($\mathbb{R}^n$의 표준기저) $n$이 자연수이면 [[standard-basis|표준기저]] $e_1, \dots, e_n$은 표준내적을 준 $\mathbb{R}^n$의 정규직교 기저이다.
6. (부분공간의 정규직교 기저) $E$가 $V$의 [[subspace|부분공간]]이고 $E$를 [[inner-product-space|내적과 내적공간]]의 (4)의 내적으로 내적공간으로 보자. $V$의 벡터의 열 $b_1, \dots, b_n$이 (모든 항이 $E$에 속하고) 내적공간 $E$의 정규직교 기저인 것은 정확히 $b_1, \dots, b_n$이 $V$의 정규직교 열이고 $\operatorname{span}(b_1, \dots, b_n) = E$일 때이다([[linear-combination-and-span|생성]]).
:::

:::english
Let $V$ be an inner product space. Orthogonal and orthonormal sequences are those of the entry on orthogonal and orthonormal sequences. For an integer $n \ge 0$ and a sequence $b_1, \dots, b_n$ of vectors in $V$ of length $n$, this sequence is an **orthonormal basis** of $V$ exactly when it is an orthonormal sequence and a basis of $V$. We name a basis as in $\mathcal{B} = b_1, \dots, b_n$.

The following hold.

1. (Length and bases) Let $V$ be finite-dimensional with $\dim V = d$. Every orthonormal sequence in $V$ has length at most $d$. An orthonormal sequence in $V$ of length $d$ is an orthonormal basis of $V$. An orthonormal basis of $V$ has length $d$. If $d = 0$, that is, $V = \{0_V\}$, the empty sequence is the only orthonormal basis of $V$.
2. (Fourier expansion and coordinates) If $\mathcal{B} = b_1, \dots, b_n$ is an orthonormal basis of $V$ and $v \in V$, then
   $$
   v = \langle v, b_1 \rangle b_1 + \cdots + \langle v, b_n \rangle b_n.
   $$
   The right-hand side is the sum of the sequence whose $k$-th term is $\langle v, b_k \rangle b_k$. That is, the coordinates of $v$ with respect to $\mathcal{B}$ are $\langle v, b_1 \rangle, \dots, \langle v, b_n \rangle$. If $n \ge 1$, the coordinate vector $[v]_{\mathcal{B}}$ of the entry on matrices with respect to bases is the element of $\mathbb{R}^n$ whose value at $k$ is $\langle v, b_k \rangle$.
3. (Inner products computed from coordinates) If $\mathcal{B} = b_1, \dots, b_n$ is an orthonormal basis of $V$ and the coordinates of $v, w \in V$ with respect to $\mathcal{B}$ are $\alpha_1, \dots, \alpha_n$ and $\beta_1, \dots, \beta_n$, then $\langle v, w \rangle = \alpha_1 \beta_1 + \cdots + \alpha_n \beta_n$. That is,
   $$
   \begin{aligned}
   \langle v, w \rangle &= \langle v, b_1 \rangle \langle w, b_1 \rangle + \cdots \\
   &\quad + \langle v, b_n \rangle \langle w, b_n \rangle
   \end{aligned}
   $$
   (**Parseval's identity**), and in particular $\lVert v \rVert^2 = \langle v, b_1 \rangle^2 + \cdots + \langle v, b_n \rangle^2$. If $n \ge 1$, then $\langle v, w \rangle = \langle [v]_{\mathcal{B}}, [w]_{\mathcal{B}} \rangle$, where the right-hand side is the standard inner product of $\mathbb{R}^n$.
4. (Entries of the matrix of a linear map) Let $W$ also be an inner product space, let $n$, $m$ be natural numbers, let $\mathcal{B} = b_1, \dots, b_n$ be an orthonormal basis of $V$ and $\mathcal{C} = c_1, \dots, c_m$ an orthonormal basis of $W$, and let $T : V \to W$ be a linear map. Then for all $j \in \{1, \dots, m\}$ and $k \in \{1, \dots, n\}$ the $(j, k)$ entry of $[T]_{\mathcal{C}\mathcal{B}}$ is
   $$
   ([T]_{\mathcal{C}\mathcal{B}})_{j,k} = \langle T b_k, c_j \rangle,
   $$
   where the right-hand side is the inner product of $W$. In particular, if $W = V$ and $\mathcal{C} = \mathcal{B}$, then $([T]_{\mathcal{B}})_{j,k} = \langle T b_k, b_j \rangle$.
5. (The standard basis of $\mathbb{R}^n$) For a natural number $n$, the standard basis $e_1, \dots, e_n$ is an orthonormal basis of $\mathbb{R}^n$ with the standard inner product.
6. (Orthonormal bases of subspaces) Let $E$ be a subspace of $V$, regarded as an inner product space with the inner product of item (4) of the entry on inner product spaces. A sequence $b_1, \dots, b_n$ of vectors in $V$ is (has all its terms in $E$ and is) an orthonormal basis of the inner product space $E$ exactly when $b_1, \dots, b_n$ is an orthonormal sequence in $V$ and $\operatorname{span}(b_1, \dots, b_n) = E$.
:::

## 직관

기저가 있으면 모든 벡터를 좌표로 나타낼 수 있지만, 일반적인 기저에서 좌표를 구하려면 연립방정식을 풀어야 합니다. 정규직교 기저에서는 그럴 필요가 없습니다. $k$번째 좌표는 그 벡터와 $b_k$의 내적이고((2)), 이것은 $\mathbb{R}^n$의 벡터의 $k$번째 성분을 표준기저 $e_k$와의 내적으로 읽는 것과 같은 계산입니다. 비유하면 서로 직각으로 놓인 길이 $1$인 자들로 벡터의 그림자를 하나씩 재는 것입니다. 자가 직각이 아니거나 길이가 $1$이 아니면 그림자의 길이가 좌표와 달라질 수 있습니다(아래 반례).

좌표를 구하는 식이 내적이므로 내적도 좌표로 계산됩니다((3)). 차원이 $1$ 이상인 공간에서 정규직교 기저를 하나 정하면 $V$의 덧셈, 스칼라배, 내적이 모두 좌표벡터의 $\mathbb{R}^n$에서의 계산과 같아집니다. 선형사상의 행렬의 성분도 같은 이유로 $\langle T b_k, c_j \rangle$입니다((4)). 행렬의 $k$번째 열은 $T b_k$의 좌표이고, 그 $j$번째 값이 $c_j$와의 내적이기 때문입니다.

정규직교 열은 일차독립이므로, 차원이 $d$인 공간에서는 길이가 $d$이기만 하면 생성하는지 따로 확인하지 않아도 기저입니다((1)). 차원이 $0$인 공간에서는 빈 열이 정규직교 기저이고, 그때 (2)의 오른쪽은 빈 합 $0_V$입니다.

## 성질의 증명

:::proof
아래에서 (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것이고, [[inner-product-space|내적과 내적공간]]의 번호는 "내적의 (1)"처럼, [[orthonormal-list|직교하는 열과 정규직교 열]]의 번호는 "정규직교 열의 (1)"처럼 줄여 쓴다.

**(1)의 증명.** 정규직교 열의 (2)에 의해 $V$의 정규직교 열은 일차독립이므로, [[independent-and-spanning-bounds|일차독립인 열과 생성하는 열의 길이]]의 (1)에 의해 그 길이는 $d$ 이하이다. 길이가 $d$이면 같은 항목의 (3)에 의해 그 열은 $V$의 기저이고, 정규직교 열이므로 정규직교 기저이다. 정규직교 기저는 기저이므로 [[dimension|차원]]의 (2)에 의해 그 길이는 $d$이다. $d = 0$이면 차원의 (3)에 의해 $V = \{0_V\}$이고, [[basis|기저]]의 (Q1)에 의해 빈 열은 기저이며, 정규직교 열 항목의 정의 다음 문장에 의해 빈 열은 정규직교 열이다. 앞 문장에 의해 정규직교 기저는 모두 길이 $0$이고 길이 $0$인 열은 빈 열 하나뿐이므로, 빈 열이 하나뿐인 정규직교 기저이다.

**(2)의 증명.** $\mathcal{B}$가 기저이므로 [[basis|기저]]의 정의에 의해 $v = \alpha_1 b_1 + \cdots + \alpha_n b_n$인 실수의 열 $\alpha$가 하나 있고, 이것이 $v$의 좌표이다. $\mathcal{B}$는 정규직교 열이므로 정규직교 열의 (1)에 의해 모든 $k$에서 $\alpha_k = \langle v, b_k \rangle$이다. 따라서 $\alpha$는 $k$번째 항이 $\langle v, b_k \rangle$인 열과 모든 자리에서 같은 열이고, 첫 등식과 좌표에 관한 문장이 성립한다. $n \ge 1$이면 기저에 관한 선형사상의 행렬의 (1)에 의해 $[v]_{\mathcal{B}}$의 $k$번째 값은 $v$의 $k$번째 좌표 $\langle v, b_k \rangle$이다.

**(3)의 증명.** (2)에 의해 모든 $k$에서 $\alpha_k = \langle v, b_k \rangle$, $\beta_k = \langle w, b_k \rangle$이고 $w = \beta_1 b_1 + \cdots + \beta_n b_n$이다. 내적의 (3)의 (i)의 둘째 등식에 의해 $\langle v, w \rangle$는 $k$번째 항이 $\beta_k \langle v, b_k \rangle = \beta_k \alpha_k$인 열의 합이고, (K1)에 의해 그 항은 $\alpha_k \beta_k$이다. 두 열은 모든 자리의 항이 같으므로 $\langle v, w \rangle = \alpha_1 \beta_1 + \cdots + \alpha_n \beta_n$이고, $\alpha_k$, $\beta_k$에 위의 값을 넣으면 파스발 항등식이다. $w = v$로 두면 [[norm-in-inner-product-space|내적공간의 노름]]의 (2)에 의해 $\lVert v \rVert^2 = \langle v, v \rangle$이고, [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 $k$번째 항 $\langle v, b_k \rangle \langle v, b_k \rangle$는 $\langle v, b_k \rangle^2$이다. $n \ge 1$이면 (2)에 의해 $[v]_{\mathcal{B}}$와 $[w]_{\mathcal{B}}$의 $k$에서의 값은 $\alpha_k$와 $\beta_k$이므로, 표준내적의 정의에 의해 $\langle [v]_{\mathcal{B}}, [w]_{\mathcal{B}} \rangle$는 $k$번째 항이 $\alpha_k \beta_k$인 열의 합, 곧 $\langle v, w \rangle$이다.

**(4)의 증명.** 기저에 관한 선형사상의 행렬의 (2)에 의해 $[T]_{\mathcal{C}\mathcal{B}}$의 $k$번째 열은 $[T b_k]_{\mathcal{C}} \in \mathbb{R}^m$이고, [[matrix|행렬]]의 열의 정의에 의해 $(j, k)$ 성분은 $k$번째 열의 $j$번째 값이다. $\mathcal{C}$는 내적공간 $W$의 정규직교 기저이고 $m \ge 1$이므로, (2)를 $W$와 $\mathcal{C}$와 $T b_k \in W$에 쓰면 $[T b_k]_{\mathcal{C}}$의 $j$번째 값은 $\langle T b_k, c_j \rangle$이다. $W = V$, $\mathcal{C} = \mathcal{B}$이면 $[T]_{\mathcal{B}}$는 $[T]_{\mathcal{B}\mathcal{B}}$의 줄임이므로 마지막 문장이 나온다.

**(5)의 증명.** [[standard-inner-product|ℝⁿ 의 표준내적]]의 (2)에 의해 $\langle e_j, e_k \rangle$는 $j = k$일 때 $1$이고 $j \ne k$일 때 $0$이므로, 정규직교 열 항목의 정의 다음 문장에 의해 $e_1, \dots, e_n$은 정규직교 열이다. [[standard-basis|표준기저]]의 (2)에 의해 이 열은 $\mathbb{R}^n$의 기저이다.

**(6)의 증명.** $b_1, \dots, b_n$이 내적공간 $E$의 정규직교 기저라 하자. 정규직교 열의 (6)에 의해 $b$는 $V$에서도 정규직교 열이고, $b$는 벡터공간 $E$의 기저이므로 [[sequences-in-a-subspace|부분공간 안의 열]]의 (J4)에 의해 $\operatorname{span}(b_1, \dots, b_n) = E$이다. 거꾸로 $b$가 $V$의 정규직교 열이고 그 생성이 $E$라 하자. [[linear-combination-and-span|일차결합과 생성]]의 (N2)에 의해 모든 항이 $E$에 속한다. 정규직교 열의 (2)에 의해 $b$는 $V$에서 일차독립이므로 (J4)에 의해 $b$는 벡터공간 $E$의 기저이고, 정규직교 열의 (6)에 의해 내적공간 $E$에서도 정규직교 열이다. 따라서 $E$의 정규직교 기저이다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ² 의 정규직교 기저에서 좌표와 내적]
표준내적을 준 $\mathbb{R}^2$에서 $b_1 = \bigl(\tfrac{3}{5}, \tfrac{4}{5}\bigr)$, $b_2 = \bigl(-\tfrac{4}{5}, \tfrac{3}{5}\bigr)$이라 합시다. $\langle b_1, b_1 \rangle = \tfrac{9}{25} + \tfrac{16}{25} = 1$, $\langle b_2, b_2 \rangle = \tfrac{16}{25} + \tfrac{9}{25} = 1$, $\langle b_1, b_2 \rangle = -\tfrac{12}{25} + \tfrac{12}{25} = 0$이므로 $b_1, b_2$는 정규직교 열이고, $\dim \mathbb{R}^2 = 2$이므로 (1)에 의해 정규직교 기저입니다.

$v = (2, 1)$이면 $\langle v, b_1 \rangle = \tfrac{6}{5} + \tfrac{4}{5} = 2$, $\langle v, b_2 \rangle = -\tfrac{8}{5} + \tfrac{3}{5} = -1$이므로 (2)에 의해 $v = 2b_1 - b_2$입니다. 직접 계산하면 $2b_1 - b_2 = \bigl(\tfrac{6}{5} + \tfrac{4}{5}, \tfrac{8}{5} - \tfrac{3}{5}\bigr) = (2, 1)$입니다. $w = (1, 3)$이면 $\langle w, b_1 \rangle = \tfrac{3}{5} + \tfrac{12}{5} = 3$, $\langle w, b_2 \rangle = -\tfrac{4}{5} + \tfrac{9}{5} = 1$이고, (3)에 의해 $\langle v, w \rangle = 2 \cdot 3 + (-1) \cdot 1 = 5$입니다. 표준내적으로 직접 계산해도 $2 + 3 = 5$입니다.
:::

:::example[정규직교 기저에 관한 행렬을 내적으로 구하기]
위의 예시의 기저 $\mathcal{B} = b_1, b_2$와, 첫째 행이 $0, 1$이고 둘째 행이 $1, 0$인 $2 \times 2$ 행렬 $A$의 사상 $T_A$([[matrix-vector-product|행렬과 벡터의 곱]]의 (2))를 생각합니다. 행 규칙에 의해 $T_A$는 두 성분을 맞바꾸므로 $T_A b_1 = \bigl(\tfrac{4}{5}, \tfrac{3}{5}\bigr)$, $T_A b_2 = \bigl(\tfrac{3}{5}, -\tfrac{4}{5}\bigr)$입니다. (4)에 의해 $[T_A]_{\mathcal{B}}$의 성분은
$\langle T_A b_1, b_1 \rangle = \tfrac{12}{25} + \tfrac{12}{25} = \tfrac{24}{25}$, $\langle T_A b_1, b_2 \rangle = -\tfrac{16}{25} + \tfrac{9}{25} = -\tfrac{7}{25}$, $\langle T_A b_2, b_1 \rangle = \tfrac{9}{25} - \tfrac{16}{25} = -\tfrac{7}{25}$, $\langle T_A b_2, b_2 \rangle = -\tfrac{12}{25} - \tfrac{12}{25} = -\tfrac{24}{25}$이고,

$$
[T_A]_{\mathcal{B}} = \begin{pmatrix} \tfrac{24}{25} & -\tfrac{7}{25} \\ -\tfrac{7}{25} & -\tfrac{24}{25} \end{pmatrix}
$$

입니다. $(1, 1)$ 성분은 $\langle T_A b_1, b_1 \rangle$이고 $(2, 1)$ 성분은 $\langle T_A b_1, b_2 \rangle$입니다. 첫째 열이 맞는지 보면 $\tfrac{24}{25} b_1 - \tfrac{7}{25} b_2 = \bigl(\tfrac{72}{125} + \tfrac{28}{125}, \tfrac{96}{125} - \tfrac{21}{125}\bigr) = \bigl(\tfrac{4}{5}, \tfrac{3}{5}\bigr) = T_A b_1$입니다.
:::

:::example[좌표의 내적으로 정한 내적에서 정규직교인 기저]
$\mathbb{R}^2$의 열 $\mathcal{A} = (1, 0), (1, 1)$은 $a(1, 0) + b(1, 1) = (a + b, b)$가 영벡터이면 $b = 0$, $a = 0$이므로 일차독립이고, $\dim \mathbb{R}^2 = 2$이므로 [[independent-and-spanning-bounds|일차독립인 열과 생성하는 열의 길이]]의 (3)에 의해 기저입니다. 이 기저는 표준내적에서는 $\langle (1, 0), (1, 1) \rangle = 1$이어서 정규직교가 아닙니다. [[inner-product-examples|내적의 예]]의 (3)의 (ii)의 내적 $\langle x, y \rangle_{\mathcal{A}}$에서는 그 항목의 마지막 문장에 의해 $\mathcal{A}$가 정규직교 열이므로 정규직교 기저입니다. 어느 열이 정규직교 기저인지는 내적에 따라 달라질 수 있습니다.
:::

:::counterexample[단위벡터가 아닌 직교하는 기저에서 (2)의 식이 맞지 않는 예]
$\mathbb{R}^2$의 열 $(1, 2), (-2, 1)$은 $\langle (1, 2), (-2, 1) \rangle = -2 + 2 = 0$이어서 영벡터가 없는 직교하는 열이므로 [[orthonormal-list|직교하는 열과 정규직교 열]]의 (2)에 의해 일차독립이고, 길이가 $\dim \mathbb{R}^2 = 2$이므로 기저입니다. 그러나 두 항의 노름의 제곱이 $5$여서 정규직교가 아닙니다. $v = (1, 0)$에서 $\langle v, (1, 2) \rangle = 1$, $\langle v, (-2, 1) \rangle = -2$이고 $1 \cdot (1, 2) + (-2) \cdot (-2, 1) = (5, 0) \ne v$입니다. 이 기저에 관한 좌표는 [[orthonormal-list|직교하는 열과 정규직교 열]]의 (1)에 의해 내적을 노름의 제곱 $5$로 나눈 $\tfrac{1}{5}$과 $-\tfrac{2}{5}$이고, 실제로 $\tfrac{1}{5}(1, 2) - \tfrac{2}{5}(-2, 1) = (1, 0)$입니다.
:::

## 확인 질문

:::check[$b_1, b_2, b_3$이 내적공간 $V$의 정규직교 기저이고 $v = 2b_1 - b_3$, $w = b_1 + b_2 + b_3$이면 $\langle v, w \rangle$는 무엇인가?]
$0 \cdot b_2 = 0_V$이므로 $v = 2b_1 + 0b_2 + (-1)b_3$이어서 $v$의 좌표는 $2, 0, -1$이고, 같은 방식으로 $w$의 좌표는 $1, 1, 1$이므로 (3)에 의해 $\langle v, w \rangle = 2 \cdot 1 + 0 \cdot 1 + (-1) \cdot 1 = 1$입니다.
:::

:::check[표준내적을 준 $\mathbb{R}^3$에서 길이 $2$인 정규직교 열이 $\mathbb{R}^3$의 기저일 수 있는가?]
그럴 수 없습니다. 길이 $2$인 정규직교 열이 $\mathbb{R}^3$의 기저라면 정규직교 기저인데, $\dim \mathbb{R}^3 = 3$이므로 (1)에 의해 정규직교 기저의 길이는 $3$이어야 합니다. 그런 열은 [[orthonormal-list|직교하는 열과 정규직교 열]]의 (2)에 의해 일차독립이지만 $\mathbb{R}^3$을 생성하지 않습니다.
:::
