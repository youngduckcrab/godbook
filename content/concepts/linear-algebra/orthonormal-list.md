---
title: 직교하는 열과 정규직교 열
title_en: Orthogonal and Orthonormal Sequences
aliases: [직교하는 열, 정규직교 열, 직교계, 정규직교계, 정규화한 열, 일반화된 피타고라스 정리, orthogonal sequence, orthonormal sequence, orthogonal system, orthonormal system, generalized Pythagorean identity]
kind: definition
field: linear-algebra
msc: ["15A63"]
level: undergrad
summary: 내적공간의 벡터의 열에서 서로 다른 두 자리의 항이 모두 직교하면 직교하는 열, 거기에 모든 항이 단위벡터이면 정규직교 열이다. 직교하는 열의 일차결합에서 계수를 내적으로 꺼낼 수 있고, 영벡터가 없는 직교하는 열은 일차독립이며, 일차결합의 노름의 제곱은 계수의 제곱에 노름의 제곱을 곱한 것의 합이다. 정규화하면 정규직교 열이 되고, 서로 직교하는 두 정규직교 열을 이어 붙이면 정규직교 열이다.
requires: [real-number-arithmetic, order-properties-of-reals, prime-number, well-ordering-principle, power-of-a-real-number, real-function-space, subspace, finite-sum-of-vectors, linear-combination-and-span, linear-independence, extension-to-a-basis, inner-product-space, norm-in-inner-product-space, standard-inner-product, orthogonal-vectors]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 5장 2절 Orthogonality. Orthogonal and orthonormal bases 의 Definition 2.4, Lemma 2.5, Corollary 2.6, pp.126–127; 2절의 Remark, p.127; 2.1 Orthogonal and orthonormal bases 의 식 (2.1)의 계산, p.127; 3절 3.2 An example 뒤의 Remark, p.133; 8절 8.3.2, p.157, 8.3.4, p.160; 6장 1절 Theorem 1.1 의 증명, p.164
    checked: original
    note: "출처 Definition 2.4(p.126)는 벡터의 system v₁, …, vₙ 에서 j ≠ k 이면 (v_j, v_k) = 0 일 때 orthogonal, 거기에 모든 k 에서 ‖v_k‖ = 1 이면 orthonormal 이라 한다. 이 사이트는 system 을 벡터의 열로 다루고(같은 벡터가 되풀이되어도 된다), 빈 열과 길이 1 인 열도 이 정의에 넣는다. 출처 2절의 Remark(p.127)는 앞으로 직교하는 system 이라 하면 보통 영벡터가 없는 것을 뜻한다고 적는다. 이 항목은 그런 약속을 두지 않고 '모든 항이 영벡터가 아닌'을 그때마다 적는다. (1)은 출처 2.1(p.127)이 직교 기저의 좌표를 구하는 계산(양변과 v_k 의 내적을 취해 α_k(v_k, v_k) 를 얻는 것, 식 (2.1))을 기저가 아닌 직교하는 열의 일차결합에 쓴 것이다. (2)는 출처 Corollary 2.6(p.126)이다. 출처는 Lemma 2.5 로 증명하고 이 항목은 (1)로 증명했다. (3)은 출처 Lemma 2.5(p.126, Generalized Pythagorean identity)를 실수에 쓴 것이다. 출처는 이중 합을 펼쳐 j = k 인 항만 남기고, 이 항목은 직교 항목의 (5)의 여러 항의 꼴로 증명했다. (4)의 배수와 정규화는 출처 3절의 Remark(p.133)가 '스칼라를 곱해도 직교성은 변하지 않고, 벡터를 각자의 노름으로 나누어 정규화하면 정규직교가 된다'고 말로 적는 것이다. (5)의 꼴, 곧 두 정규직교 열을 이어 붙여 정규직교 열(기저)을 얻는 것은 출처가 5장 8절 8.3.2(p.157)와 8.3.4(p.160)에서 'v₁, …, vₙ, U₀v₁, …, U₀vₙ 은 전체 공간의 정규직교 기저'라고, 6장 1절 Theorem 1.1 의 증명(p.164)에서 'u₁, v₂, …, vₙ 은 정규직교 기저'라고 말로 쓰는 것이다. 예시 'ℝ³ 의 직교하는 세 벡터에서 계수 꺼내기'는 출처 2.1(p.127)의 식 (2.1)로 좌표를 구하는 것과 같은 계산이다. 확인 질문 '직교하는 열 $v_1, v_2$에서 $v_1 = v_2$이면 $v_1$은 무엇인가?'는 출처 2절 Remark(p.127)가 영벡터는 언제나 직교하는 system 에 덧붙일 수 있다고 적는 것과 같은 대상(영벡터가 들어간 직교하는 열)을 다룬다. 반례 '영벡터를 항으로 갖는 직교하는 열'은 출처 2절 Remark(p.127)가 영벡터는 모든 것과 직교하므로 언제나 직교하는 system 에 덧붙일 수 있다고 적는 것과 같은 대상이다. 확인 질문 '내적공간의 정규직교 열 $u_1, u_2, u_3$에서 $\\lVert 2u_1 - u_2 + 2u_3 \\rVert$는 무엇인가?'는 출처 Lemma 2.5(p.126)를 정규직교 열에 쓴 계산이고, 출처 1절 연습문제 1.2 의 Remark(p.124)가 성질만으로 노름을 계산하게 하는 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(최소 거리의 양방향 증명 통독). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$V$가 [[inner-product-space|내적공간]]이고 $r \ge 0$이 정수이며 $v_1, \dots, v_r$이 $V$의 길이 $r$인 [[finite-sum-of-vectors|벡터의 열]]이라 하자. 직교 $\perp$는 [[orthogonal-vectors|직교]]의 것이고, 노름과 단위벡터는 [[norm-in-inner-product-space|내적공간의 노름]]의 것이다. 열 $v_1, \dots, v_r$이 **직교하는 열**(orthogonal sequence)인 것은 정확히 $i \ne j$인 모든 $i, j \in \{1, \dots, r\}$에서 $v_i \perp v_j$일 때이다. 직교하는 열이 **정규직교 열**(orthonormal sequence)인 것은 정확히 모든 $k \in \{1, \dots, r\}$에서 $v_k$가 단위벡터일 때이다. 곧 $v_1, \dots, v_r$이 정규직교 열인 것은 정확히 모든 $i, j \in \{1, \dots, r\}$에서 $\langle v_i, v_j \rangle$가 $i = j$일 때 $1$이고 $i \ne j$일 때 $0$일 때이다. 빈 열($r = 0$)은 정규직교 열이고, 길이 $1$인 열은 언제나 직교하는 열이다.

다음이 성립한다. 아래에서 $\alpha_1, \dots, \alpha_r$은 길이 $r$인 실수의 열이다.

1. (계수 꺼내기) $v_1, \dots, v_r$이 직교하는 열이고 $x = \alpha_1 v_1 + \cdots + \alpha_r v_r$이면, 모든 $k \in \{1, \dots, r\}$에서 $\langle x, v_k \rangle = \langle v_k, x \rangle = \alpha_k \langle v_k, v_k \rangle$이다. 따라서 $v_k \ne 0_V$이면 $\alpha_k = \langle x, v_k \rangle \langle v_k, v_k \rangle^{-1}$이고, $v_1, \dots, v_r$이 정규직교 열이면 모든 $k$에서 $\alpha_k = \langle x, v_k \rangle$이다.
2. (일차독립) 모든 항이 영벡터가 아닌 직교하는 열은 [[linear-independence|일차독립]]이다. 정규직교 열은 일차독립이다.
3. (피타고라스) $v_1, \dots, v_r$이 직교하는 열이면
   $$
   \begin{aligned}
   &\lVert \alpha_1 v_1 + \cdots + \alpha_r v_r \rVert^2 \\
   &\quad = \alpha_1^2 \lVert v_1 \rVert^2 + \cdots \\
   &\qquad + \alpha_r^2 \lVert v_r \rVert^2
   \end{aligned}
   $$
   이다. 오른쪽은 $k$번째 항이 $\alpha_k^2 \lVert v_k \rVert^2$인 길이 $r$인 실수의 열의 합이고, $\alpha_k^2$는 [[power-of-a-real-number|실수의 거듭제곱]]이다. 정규직교 열이면 이 값은 $\alpha_1^2 + \cdots + \alpha_r^2$이다.
4. (배수와 정규화) $v_1, \dots, v_r$이 직교하는 열이고 $c_1, \dots, c_r$이 길이 $r$인 실수의 열이면, $k$번째 항이 $c_k v_k$인 열 $c_1 v_1, \dots, c_r v_r$도 직교하는 열이다. $v_1, \dots, v_r$이 모든 항이 영벡터가 아닌 직교하는 열이면, $k$번째 항이 $\lVert v_k \rVert^{-1} v_k$인 열 $u_1, \dots, u_r$은 정규직교 열이고 $\operatorname{span}(u_1, \dots, u_r) = \operatorname{span}(v_1, \dots, v_r)$이다([[linear-combination-and-span|생성]]). 이 열을 $v_1, \dots, v_r$을 **정규화한 열**이라 한다.
5. (이어 붙이기) $s \ge 0$이 정수이고 $w_1, \dots, w_s$가 $V$의 벡터의 열이라 하자. [[extension-to-a-basis|기저로 늘리기]]의 진술에서 정한, $v$와 $w$를 이어 붙인 열 $v_1, \dots, v_r, w_1, \dots, w_s$가 직교하는 열인 것은 정확히 $v_1, \dots, v_r$과 $w_1, \dots, w_s$가 각각 직교하는 열이고 모든 $i \in \{1, \dots, r\}$와 $j \in \{1, \dots, s\}$에서 $v_i \perp w_j$일 때이다. 이어 붙인 열이 정규직교 열인 것은 정확히 두 열이 각각 정규직교 열이고 모든 $i$, $j$에서 $v_i \perp w_j$일 때이다. $s = 1$이면 이어 붙인 열은 $v$에 $w_1$을 덧붙인 열 $v_1, \dots, v_r, w_1$이다. 또 $0 \le q \le r$인 정수 $q$에 대하여, 직교하는 열(정규직교 열)의 처음 $q$개는 직교하는 열(정규직교 열)이다.
6. (부분공간 안의 열) $W$가 $V$의 [[subspace|부분공간]]이고 $W$를 [[inner-product-space|내적과 내적공간]]의 (4)의 내적으로 내적공간으로 보자. $v_1, \dots, v_r$의 모든 항이 $W$에 속하면, 이 열이 내적공간 $W$에서 직교하는 열(정규직교 열)인 것은 정확히 $V$에서 직교하는 열(정규직교 열)일 때이다.
:::

:::english
Let $V$ be an inner product space, let $r \ge 0$ be an integer, and let $v_1, \dots, v_r$ be a sequence of vectors in $V$ of length $r$. Orthogonality $\perp$ is that of the entry on orthogonality, and norms and unit vectors are those of the entry on norms. The sequence $v_1, \dots, v_r$ is an **orthogonal sequence** exactly when $v_i \perp v_j$ for all $i, j \in \{1, \dots, r\}$ with $i \ne j$. An orthogonal sequence is an **orthonormal sequence** exactly when $v_k$ is a unit vector for every $k \in \{1, \dots, r\}$. That is, $v_1, \dots, v_r$ is an orthonormal sequence exactly when, for all $i, j \in \{1, \dots, r\}$, $\langle v_i, v_j \rangle$ is $1$ if $i = j$ and $0$ if $i \ne j$. The empty sequence ($r = 0$) is orthonormal, and every sequence of length $1$ is orthogonal.

The following hold. Below, $\alpha_1, \dots, \alpha_r$ is a sequence of real numbers of length $r$.

1. (Extracting coefficients) If $v_1, \dots, v_r$ is an orthogonal sequence and $x = \alpha_1 v_1 + \cdots + \alpha_r v_r$, then $\langle x, v_k \rangle = \langle v_k, x \rangle = \alpha_k \langle v_k, v_k \rangle$ for every $k \in \{1, \dots, r\}$. Hence, if $v_k \ne 0_V$, then $\alpha_k = \langle x, v_k \rangle \langle v_k, v_k \rangle^{-1}$, and if $v_1, \dots, v_r$ is orthonormal, then $\alpha_k = \langle x, v_k \rangle$ for every $k$.
2. (Linear independence) An orthogonal sequence none of whose terms is the zero vector is linearly independent. An orthonormal sequence is linearly independent.
3. (Pythagoras) If $v_1, \dots, v_r$ is an orthogonal sequence, then
   $$
   \begin{aligned}
   &\lVert \alpha_1 v_1 + \cdots + \alpha_r v_r \rVert^2 \\
   &\quad = \alpha_1^2 \lVert v_1 \rVert^2 + \cdots \\
   &\qquad + \alpha_r^2 \lVert v_r \rVert^2.
   \end{aligned}
   $$
   The right-hand side is the sum of the sequence of $r$ real numbers whose $k$-th term is $\alpha_k^2 \lVert v_k \rVert^2$, where $\alpha_k^2$ is a power of a real number. If the sequence is orthonormal, this value is $\alpha_1^2 + \cdots + \alpha_r^2$.
4. (Multiples and normalization) If $v_1, \dots, v_r$ is an orthogonal sequence and $c_1, \dots, c_r$ is a sequence of real numbers of length $r$, then the sequence $c_1 v_1, \dots, c_r v_r$ whose $k$-th term is $c_k v_k$ is also orthogonal. If $v_1, \dots, v_r$ is an orthogonal sequence none of whose terms is the zero vector, then the sequence $u_1, \dots, u_r$ whose $k$-th term is $\lVert v_k \rVert^{-1} v_k$ is orthonormal and $\operatorname{span}(u_1, \dots, u_r) = \operatorname{span}(v_1, \dots, v_r)$. This sequence is called the **normalization** of $v_1, \dots, v_r$.
5. (Concatenation) Let $s \ge 0$ be an integer and $w_1, \dots, w_s$ a sequence of vectors in $V$. The concatenation $v_1, \dots, v_r, w_1, \dots, w_s$ of $v$ and $w$, as defined in the statement of the entry on extending to a basis, is an orthogonal sequence exactly when $v_1, \dots, v_r$ and $w_1, \dots, w_s$ are each orthogonal sequences and $v_i \perp w_j$ for all $i \in \{1, \dots, r\}$ and $j \in \{1, \dots, s\}$. The concatenation is orthonormal exactly when the two sequences are each orthonormal and $v_i \perp w_j$ for all $i$, $j$. If $s = 1$, the concatenation is the sequence $v_1, \dots, v_r, w_1$ obtained by appending $w_1$ to $v$. Moreover, for an integer $q$ with $0 \le q \le r$, the first $q$ terms of an orthogonal (orthonormal) sequence form an orthogonal (orthonormal) sequence.
6. (Sequences inside a subspace) Let $W$ be a subspace of $V$, regarded as an inner product space with the inner product of item (4) of the entry on inner product spaces. If every term of $v_1, \dots, v_r$ belongs to $W$, then this sequence is orthogonal (orthonormal) in the inner product space $W$ exactly when it is orthogonal (orthonormal) in $V$.
:::

## 직관

직교하는 열은 서로 다른 어느 두 항을 골라도 직교하는 열입니다. 이웃한 항끼리만이 아니라 모든 짝이 직교해야 합니다(아래 반례). 정규직교 열은 거기에 모든 항의 길이가 $1$인 열이어서, $\mathbb{R}^n$의 표준기저처럼 "서로 직각이고 길이가 $1$인 자" 여러 개를 모아 둔 것과 같습니다.

이런 열이 편한 까닭은 (1)에 있습니다. 일반적으로 열의 일차결합 $x = \alpha_1 v_1 + \cdots + \alpha_r v_r$에서 계수를 찾으려면 연립방정식을 풀어야 하지만, 직교하는 열에서는 $x$와 $v_k$의 내적을 취하면 다른 항이 모두 사라지고 $\alpha_k \langle v_k, v_k \rangle$만 남습니다. 정규직교 열이면 계수가 바로 $\langle x, v_k \rangle$입니다. 영벡터인 항 $v_k = 0_V$에서는 $\langle v_k, v_k \rangle = 0$이어서 이 식으로 $\alpha_k$를 정할 수 없습니다. 영벡터는 모든 벡터와 직교하므로 직교하는 열에 넣을 수 있지만, 그러면 일차독립이 깨집니다.

같은 계산에서 (3)도 나옵니다. 서로 직교하는 항 $\alpha_k v_k$들의 합이므로 [[orthogonal-vectors|직교]]의 피타고라스 식이 그대로 쓰이고, 각 항의 노름의 제곱이 $\alpha_k^2 \lVert v_k \rVert^2$입니다. (5)는 두 직교하는 열을 이어 붙일 때 확인할 것이 "두 열 사이의 짝"뿐이라는 뜻입니다. 이 꼴로 정규직교 열에 벡터를 하나 덧붙인 열이나, 서로 직교하는 두 정규직교 열을 이어 붙인 열이 정규직교 열인지 확인할 수 있습니다.

## 성질의 증명

:::proof
아래에서 (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것, (H0)–(H7)은 [[finite-sum-of-vectors|벡터의 유한 합]]의 것, (N1)–(N4)는 [[linear-combination-and-span|일차결합과 생성]]의 것이고, [[inner-product-space|내적과 내적공간]]의 번호는 "내적의 (1)"처럼, [[norm-in-inner-product-space|내적공간의 노름]]의 번호는 "노름의 (1)"처럼, [[orthogonal-vectors|직교]]의 번호는 "직교의 (1)"처럼 줄여 쓴다. 정수의 순서는 [[prime-number|소수]]의 (Z1)과 [[well-ordering-principle|정렬 원리]]의 (Z5)–(Z7), (L1), (L3)을 쓴다.

**정의 다음 문장들.** 노름의 (4)에 의해 $v_k$가 단위벡터인 것은 정확히 $\langle v_k, v_k \rangle = 1$일 때이고, $i \ne j$에서 $v_i \perp v_j$는 $\langle v_i, v_j \rangle = 0$이므로 정규직교 열의 정의는 둘째 문장과 같다. $r = 0$이면 $\{1, \dots, r\}$이 공집합이어서 두 조건이 모두 참이다. $r = 1$이면 서로 다른 두 자리 $i \ne j$가 없어서 직교하는 열의 조건이 참이다.

**(1)의 증명.** $k \in \{1, \dots, r\}$이므로 $r \ge 1$이다. 내적의 (3)의 (i)에 의해 $\langle x, v_k \rangle$는 $i$번째 항이 $\alpha_i \langle v_i, v_k \rangle$인 길이 $r$인 열의 합이다. $i \ne k$이면 $v_i \perp v_k$이므로 (K9)에 의해 그 항은 $\alpha_i \cdot 0 = 0$이다. 길이 $r = (r - 1) + 1$인 열에 (H7)을 쓰면 이 합은 $k$번째 항 $\alpha_k \langle v_k, v_k \rangle$이다. 내적의 조건 (i)에 의해 $\langle v_k, x \rangle = \langle x, v_k \rangle$이다.

$v_k \ne 0_V$이면 내적의 조건 (iii)에 의해 $c = \langle v_k, v_k \rangle \ne 0$이므로 (K8)의 (iii)의 $c^{-1}$이 있다. 앞 문단의 등식에 $c^{-1}$을 곱하면 (K2), (K8)의 (iii), (K4)에 의해 $\langle x, v_k \rangle c^{-1} = \alpha_k (c c^{-1}) = \alpha_k \cdot 1 = \alpha_k$이다. 정규직교 열이면 $c = 1$이므로 (K4)에 의해 $\langle x, v_k \rangle = \alpha_k \cdot 1 = \alpha_k$이다.

**(2)의 증명.** 모든 항이 영벡터가 아닌 직교하는 열에서 $\alpha_1 v_1 + \cdots + \alpha_r v_r = 0_V$라 하자. 모든 $k$에서 (1)과 내적의 (2)에 의해 $0 = \langle 0_V, v_k \rangle = \alpha_k \langle v_k, v_k \rangle$이고, $\langle v_k, v_k \rangle \ne 0$이므로 (K10)에 의해 $\alpha_k = 0$이다. 따라서 열은 [[linear-independence|일차독립]]이다($r = 0$이면 빈 열은 일차독립의 정의에 의해 일차독립이고, 위의 논증도 $k$가 없어서 그대로 성립한다). 정규직교 열의 항은 단위벡터이고 노름의 (4)에 의해 $0_V$는 단위벡터가 아니므로 모든 항이 영벡터가 아니고, 앞의 경우에 들어간다.

**(3)의 증명.** $i \ne j$이면 $v_i \perp v_j$이므로 직교의 (3)에 의해 $\alpha_i v_i \perp \alpha_j v_j$이다. 따라서 $k$번째 항이 $\alpha_k v_k$인 열은 서로 다른 두 자리의 항이 직교하고, 직교의 (5)에 의해 $\lVert \alpha_1 v_1 + \cdots + \alpha_r v_r \rVert^2$는 $k$번째 항이 $\lVert \alpha_k v_k \rVert^2$인 열의 합이다. 노름의 (2), 내적의 조건 (ii)와 (1), (K2), [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해
$$
\begin{aligned}
\lVert \alpha_k v_k \rVert^2 &= \langle \alpha_k v_k, \alpha_k v_k \rangle \\
&= \alpha_k (\alpha_k \langle v_k, v_k \rangle) = \alpha_k^2 \lVert v_k \rVert^2
\end{aligned}
$$
이다. 두 열은 모든 자리의 항이 같으므로 합도 같다. 정규직교 열이면 $\lVert v_k \rVert^2 = \langle v_k, v_k \rangle = 1$이므로 (K4)에 의해 $k$번째 항은 $\alpha_k^2$이다.

**(4)의 증명.** 첫 문장: $i \ne j$이면 $v_i \perp v_j$이고 직교의 (3)에 의해 $c_i v_i \perp c_j v_j$이다. 둘째 문장: 노름의 (1)에 의해 모든 $k$에서 $0 < \lVert v_k \rVert$이므로 $\lVert v_k \rVert \ne 0$이고 역수 $\lVert v_k \rVert^{-1}$이 있다. 각 $k$에 벡터 $\lVert v_k \rVert^{-1} v_k$가 하나씩 정해지므로 [[real-function-space|(G)]]에 의해 열 $u$가 있다. 첫 문장을 $c_k = \lVert v_k \rVert^{-1}$로 쓰면 $u$는 직교하는 열이고, 노름의 (4)에 의해 모든 $u_k$는 단위벡터이므로 $u$는 정규직교 열이다. 생성: (N1)과 (N2)에 의해 $\operatorname{span}(v_1, \dots, v_r)$은 모든 $v_k$를 포함하는 부분공간이므로 [[subspace|부분공간]]의 (S3)에 의해 $u_k = \lVert v_k \rVert^{-1} v_k$도 포함하고, (N3)에 의해 $\operatorname{span}(u_1, \dots, u_r) \subseteq \operatorname{span}(v_1, \dots, v_r)$이다. 노름의 (4)에 의해 $v_k = \lVert v_k \rVert u_k$이므로 같은 논증으로 거꾸로의 포함도 성립하고, 두 집합은 같다.

**(5)의 증명.** 이어 붙인 열을 $c$라 하자. 곧 $c$는 길이 $r + s$이고 $c_i = v_i$ ($1 \le i \le r$), $c_{r+j} = w_j$ ($1 \le j \le s$)이다. $p \in \{1, \dots, r + s\}$이면 (Z5)와 (Z1)에 의해 $p \le r$이거나 $p \ge r + 1$이고, 뒤의 경우 (Z7)에 의해 $j = p - r$은 $1 \le j \le s$이고 $p = r + j$이다. 따라서 $c$의 모든 자리는 "$v$의 자리 $i$"이거나 "$w$의 자리 $j$에 $r$을 더한 것"이고, 두 경우는 함께 일어나지 않는다. $i \le r$이고 $j \ge 1$이면 (L3), (Z7), (Z6)에 의해 $i \le r < r + 1 \le r + j$이므로 $i \ne r + j$이다((L1)). 또 $j \ne j'$이면 (Z7)에 의해 $r + j \ne r + j'$이다.

$c$가 직교하는 열이라 하자. $i \ne i'$이 $v$의 자리이면 $v_i = c_i \perp c_{i'} = v_{i'}$이다. $j \ne j'$이 $w$의 자리이면 $r + j \ne r + j'$이므로 $w_j = c_{r+j} \perp c_{r+j'} = w_{j'}$이다. $i$가 $v$의 자리, $j$가 $w$의 자리이면 $i \ne r + j$이므로 $v_i = c_i \perp c_{r+j} = w_j$이다. 거꾸로 세 조건이 성립하고 $p \ne p'$이 $c$의 자리라 하자. 둘 다 $v$의 자리이면 $c_p = v_p \perp v_{p'} = c_{p'}$이다. 둘 다 $w$의 자리이면 $p - r \ne p' - r$이므로 $c_p = w_{p-r} \perp w_{p'-r} = c_{p'}$이다. $p$가 $v$의 자리이고 $p'$이 $w$의 자리이면 $c_p = v_p \perp w_{p'-r} = c_{p'}$이고, 그 반대이면 직교의 (1)에 의해 $c_p = w_{p-r} \perp v_{p'} = c_{p'}$이다. 따라서 $c$는 직교하는 열이다.

정규직교: $c$의 항은 모두 $v$나 $w$의 항이고 $v$와 $w$의 항은 모두 $c$의 항이므로, "$c$의 모든 항이 단위벡터"는 "$v$와 $w$의 모든 항이 단위벡터"와 같다. 앞 문단과 합치면 둘째 문장이다. $s = 1$이면 $c$는 처음 $r$개가 $v_1, \dots, v_r$이고 $(r + 1)$번째 항이 $w_1$인 길이 $r + 1$인 열이므로 [[finite-sum-of-vectors|덧붙인 열]]의 정의에 의해 $v_1, \dots, v_r, w_1$이다. 끝으로 처음 $q$개의 서로 다른 두 자리 $i \ne j$ ($i, j \le q \le r$)의 항은 $v_i$, $v_j$이므로 직교하고, 그 항들은 $v$의 항이므로 $v$가 정규직교 열이면 단위벡터이다.

**(6)의 증명.** 내적의 (4)에 의해 $W$의 두 원소의 내적은 $W$에서 계산하든 $V$에서 계산하든 같다. 따라서 직교의 (6)에 의해 $i \ne j$에서 "$W$에서 $v_i \perp v_j$"와 "$V$에서 $v_i \perp v_j$"가 같고, 노름의 (2)의 마지막 문장에 의해 $W$에서 잰 $v_k$의 노름과 $V$에서 잰 노름이 같으므로 단위벡터인지도 같다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ³ 의 직교하는 세 벡터에서 계수 꺼내기]
표준내적을 준 $\mathbb{R}^3$에서 $v_1 = (1, 1, 0)$, $v_2 = (1, -1, 1)$, $v_3 = (-1, 1, 2)$라 합시다. $\langle v_1, v_2 \rangle = 1 - 1 + 0 = 0$, $\langle v_1, v_3 \rangle = -1 + 1 + 0 = 0$, $\langle v_2, v_3 \rangle = -1 - 1 + 2 = 0$이고 직교의 (1)에 의해 순서를 바꾼 짝도 직교하므로 $v_1, v_2, v_3$은 직교하는 열입니다. $\langle v_1, v_1 \rangle = 2$, $\langle v_2, v_2 \rangle = 3$, $\langle v_3, v_3 \rangle = 6$입니다.

$x = (2, 0, 3)$은 $x = 1 \cdot v_1 + \tfrac{5}{3} v_2 + \tfrac{2}{3} v_3$입니다. 성분마다 $1 + \tfrac{5}{3} - \tfrac{2}{3} = 2$, $1 - \tfrac{5}{3} + \tfrac{2}{3} = 0$, $0 + \tfrac{5}{3} + \tfrac{4}{3} = 3$이기 때문입니다. (1)에 의해 이 계수는 $\langle x, v_1 \rangle = 2$, $\langle x, v_2 \rangle = 2 + 0 + 3 = 5$, $\langle x, v_3 \rangle = -2 + 0 + 6 = 4$를 각각 $2$, $3$, $6$으로 나눈 $1$, $\tfrac{5}{3}$, $\tfrac{2}{3}$이어야 하고, 실제로 그렇습니다. (3)도 확인됩니다. $\lVert x \rVert^2 = 4 + 0 + 9 = 13$이고 $1 \cdot 2 + \tfrac{25}{9} \cdot 3 + \tfrac{4}{9} \cdot 6 = 2 + \tfrac{25}{3} + \tfrac{8}{3} = 13$입니다.
:::

:::counterexample[영벡터를 항으로 갖는 직교하는 열]
$\mathbb{R}^2$에서 열 $(1, 0), (0, 0)$은 $\langle (1, 0), (0, 0) \rangle = 0$이므로 직교하는 열입니다. 그러나 $0 \cdot (1, 0) + 1 \cdot (0, 0) = (0, 0)$이어서 일차독립이 아닙니다. 이 예는 (2)에서 "모든 항이 영벡터가 아닌"을 뺄 수 없음을 보입니다. 이 열에서 (1)의 등식은 $k = 2$에서 $\langle x, (0, 0) \rangle = \alpha_2 \cdot 0$으로 성립하지만, $\alpha_2$를 정해 주지 못합니다.
:::

:::counterexample[이웃한 항끼리만 직교하는 열의 예]
$\mathbb{R}^3$에서 $v_1 = (1, 0, 0)$, $v_2 = (0, 1, 0)$, $v_3 = (1, 0, 1)$이면 $v_1 \perp v_2$이고 $\langle v_2, v_3 \rangle = 0$이어서 $v_2 \perp v_3$이지만, $\langle v_1, v_3 \rangle = 1$이므로 이 열은 직교하는 열이 아닙니다. 정의는 서로 다른 모든 두 자리의 짝을 요구합니다. 이 열에서는 (3)의 식도 성립하지 않습니다. 계수 $1, 0, 1$의 일차결합 $v_1 + 0v_2 + v_3 = (2, 0, 1)$의 노름의 제곱은 $5$인데, (3)의 오른쪽 꼴로 계산한 값은 $1 \cdot 1 + 0 \cdot 1 + 1 \cdot 2 = 3$입니다.
:::

## 확인 질문

:::check[내적공간의 정규직교 열 $u_1, u_2, u_3$에서 $\lVert 2u_1 - u_2 + 2u_3 \rVert$는 무엇인가?]
$2u_1 - u_2 + 2u_3$은 계수의 열 $2, -1, 2$의 일차결합이므로 (3)에 의해 노름의 제곱은 $4 + 1 + 4 = 9$입니다. [[order-properties-of-reals|실수의 순서의 성질]]의 (10)에 의해 정수 사이의 부등식 $0 \le 3$을 실수의 부등식으로 쓸 수 있고 $3 \cdot 3 = 9$이므로 [[norm-in-inner-product-space|내적공간의 노름]]의 (2)에 의해 노름은 $3$입니다.
:::

:::check[직교하는 열 $v_1, v_2$에서 $v_1 = v_2$이면 $v_1$은 무엇인가?]
$1 \ne 2$이므로 $v_1 \perp v_2$이고, $v_2 = v_1$이므로 $v_1 \perp v_1$입니다. [[orthogonal-vectors|직교]]의 (2)에 의해 $v_1 = 0_V$입니다. 곧 같은 벡터가 두 자리에 나오는 직교하는 열에서 그 벡터는 영벡터입니다.
:::
