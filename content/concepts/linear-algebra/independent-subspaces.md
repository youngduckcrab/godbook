---
title: 일차독립인 부분공간들
title_en: Linearly Independent Subspaces
aliases: [부분공간들의 일차독립, 부분공간의 열, 부분공간들의 합, 직합, linearly independent subspaces, independent family of subspaces, sum of subspaces, direct sum]
kind: definition
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 부분공간의 열 V₁, …, V_p 에서 자리마다 하나씩 든 벡터들의 합이 영벡터이면 모두 영벡터일 때 이 부분공간들이 일차독립이라 한다. 그 합 전체 V₁ + ⋯ + V_p 는 부분공간이고, 일차독립은 표현이 하나뿐인 것과 같으며, 두 부분공간에서는 교집합이 {0} 인 것과 같다. 서로 다른 고윳값의 고유공간들은 일차독립이다.
requires: [set, subset, set-operations, power-set, function, finite-set, real-function-space, real-number-arithmetic, vector-space, vector-space-basic-properties, subspace, subspace-intersection-and-sum, finite-sum-of-vectors, standard-basis, linear-combination-and-span, prime-number, well-ordering-principle, linear-map, eigenvalue-and-eigenvector, eigenvectors-of-distinct-eigenvalues]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 4장 2.4절 Bases of subspaces (AKA direct sums of subspaces) 첫머리의 정의와 Remark 2.4, Remark 2.5, p.109; 2.4절의 기저를 나눠 만든 부분공간의 예, p.110; 4장 연습문제 2.14, p.116
    checked: original
    note: "출처는 2.4절(p.109)에서 벡터공간 V 의 부분공간 V₁, …, V_p 의 계(system)가 일차독립이라는 것을 'v₁ + v₂ + ⋯ + v_p = 0, v_k ∈ V_k 가 자명한 해(모든 k 에서 v_k = 0)만 갖는다'로 정의하고, 같은 것을 'v_k ∈ V_k 인 영이 아닌 벡터들의 계는 모두 일차독립'으로 바꿔 말할 수 있다고 적는다. 이 항목의 정의는 출처의 첫 정의와 같다. 출처는 같은 곳에서 모든 v ∈ V 가 그런 합으로 유일하게 표현될 때 부분공간들의 계가 V 의 기저(basis)라 하고, 표현이 있기만 하면 생성한다(generating)고 하며, Remark 2.5 에서 '기저인 것은 정확히 생성하고 일차독립일 때'를 연습으로 둔다. 이 항목은 '부분공간들의 기저'라는 말을 쓰지 않고, 합 V₁ + ⋯ + V_p 를 집합으로 정의해 '일차독립인 것은 정확히 합의 원소의 표현이 하나뿐일 때'를 (3)으로 증명한다. 출처는 2.4절 제목에서 부분공간들의 기저를 직합(direct sums of subspaces)이라고도 부른다. 이 항목은 직합과 기호 ⊕ 를 쓰지 않는다. 출처의 Remark 2.4(p.109)는 4장 Theorem 2.2 가 고유공간들 E_k := Ker(A − λ_kI) 의 계가 일차독립이라는 것을 말한다고 적고, 이 항목의 (6)이 그것이며 eigenvectors-of-distinct-eigenvalues 의 (1)을 인용한다. (4)의 p = 2 인 경우의 동치는 출처 연습문제 2.14(p.116: 두 부분공간이 일차독립인 것은 정확히 V₁ ∩ V₂ = {0} 일 때)이고, 확인 질문 '$\\mathbb{R}^3$에서 $V_1 = \\operatorname{span}(e_1, e_2)$, $V_2 = \\operatorname{span}(w)$, $w = (1, 1, 1)$은 일차독립인가?'는 이 동치를 쓰는 같은 대상이다. 반례 '두 개씩의 교집합이 영공간인 세 직선의 예'는 이 연습문제의 동치를 부분공간 셋에 두 개씩의 교집합으로 옮기면 성립하지 않는다는 것을 보인다. 부분공간의 열을 함수로 정한 것과 모든 증명은 이 사이트가 썼다. (1)의 재귀 꼴과 (5)는 concatenating-bases 의 귀납에 쓰려고 진술에 올렸다. 예시 'ℝ³ 의 세 좌표축'은 출처 p.110 의 예(기저 v₁, …, v_n 의 첨자를 나눠 생성한 부분공간들은 부분공간들의 기저)에서 첨자를 하나씩 나눈 경우와 같은 대상이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 일반 문장으로 읽히던 반례 제목 1건, 귀납 명제의 범위 2건, 증명과 어긋난 직관 2건, 다른 항목의 예시에 기대던 근거 3건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$V$가 [[vector-space|벡터공간]]이고 $p$가 자연수라 하자. 영벡터는 [[vector-space-basic-properties|(B1)]]의 $0_V$이다.

**부분공간의 열.** 길이 $p$인 **부분공간의 열**(sequence of subspaces) $V_1, \dots, V_p$란 [[function|함수]] $\{1, \dots, p\} \to \mathscr{P}(V)$([[power-set|멱집합]])로서 모든 값 $V_k$가 $V$의 [[subspace|부분공간]]인 것이다. 같은 부분공간이 여러 자리에 나와도 된다. 자리 $k$마다 $V$의 부분공간이 하나씩 정해지면 [[real-function-space|(G)]]에 의해 그 값을 갖는 부분공간의 열이 있다. "처음 $k$개"는 [[finite-sum-of-vectors|벡터의 열]]에서와 같이 정의역을 $\{1, \dots, k\}$로 줄인 것이다.

**합.** 부분공간의 열 $V_1, \dots, V_p$의 **합**(sum)을
$$V_1 + \cdots + V_p = \{v_1 + \cdots + v_p : v_1, \dots, v_p \text{는 모든 } k \text{에서 } v_k \in V_k \text{인 길이 } p \text{인 } V \text{의 열}\}$$
로 정한다. 오른쪽의 $v_1 + \cdots + v_p$는 [[finite-sum-of-vectors|벡터의 유한 합]]이다. 곧 $x \in V$가 이 합의 원소인 것은 정확히 모든 $k$에서 $v_k \in V_k$이고 $x = v_1 + \cdots + v_p$인 길이 $p$인 $V$의 열이 있을 때이고, 이런 열을 $x$의 **표현**(representation)이라 한다.

**일차독립.** 부분공간의 열 $V_1, \dots, V_p$가 **일차독립**(linearly independent)인 것은 정확히 다음이 성립할 때이다. 모든 $k$에서 $v_k \in V_k$인 길이 $p$인 모든 $V$의 열 $v_1, \dots, v_p$에 대하여, $v_1 + \cdots + v_p = 0_V$이면 모든 $k$에서 $v_k = 0_V$이다. 이때 "부분공간들 $V_1, \dots, V_p$가 일차독립이다"라고도 한다. 벡터의 열이 [[linear-independence|일차독립]]이라는 것과 낱말이 같으므로, 부분공간에 대해서는 늘 "부분공간들이 일차독립"이라고 쓴다.

다음이 성립한다. $V_1, \dots, V_p$는 길이 $p$인 부분공간의 열이다.

1. $V_1 + \cdots + V_p$는 $V$의 부분공간이고, 모든 $k$에서 $V_k \subseteq V_1 + \cdots + V_p$이다. $W$가 $V$의 부분공간이고 모든 $k$에서 $V_k \subseteq W$이면 $V_1 + \cdots + V_p \subseteq W$이다. $p = 1$이면 $V_1 + \cdots + V_p = V_1$이다. $p \ge 2$이면 처음 $p - 1$개의 합을 $W'$이라 할 때 $V_1 + \cdots + V_p = W' + V_p$이다. 오른쪽은 [[subspace-intersection-and-sum|부분공간의 교집합과 합]]의 두 부분공간의 합이다. 특히 $p = 2$이면 $V_1 + \cdots + V_p$는 그 항목의 $V_1 + V_2$와 같은 집합이다.
2. 길이 $1$인 부분공간의 열은 언제나 일차독립이다.
3. 부분공간들 $V_1, \dots, V_p$가 일차독립인 것은 정확히 $V_1 + \cdots + V_p$의 모든 원소의 표현이 하나뿐일 때이다. 곧 모든 $k$에서 $v_k, w_k \in V_k$인 길이 $p$인 두 열에 대하여 $v_1 + \cdots + v_p = w_1 + \cdots + w_p$이면 모든 $k$에서 $v_k = w_k$일 때이다.
4. 부분공간들 $V_1, \dots, V_p$가 일차독립이면, $j \ne k$인 모든 $j, k \in \{1, \dots, p\}$에서 $V_j \cap V_k = \{0_V\}$이다. 특히 서로 다른 두 자리에 같은 부분공간 $U$가 나오면 $U = \{0_V\}$이다. $p = 2$이면 거꾸로도 성립한다. 곧 부분공간들 $V_1, V_2$가 일차독립인 것은 정확히 $V_1 \cap V_2 = \{0_V\}$일 때이다.
5. $p \ge 2$이고 처음 $p - 1$개의 합을 $W'$이라 하자. 부분공간들 $V_1, \dots, V_p$가 일차독립인 것은 정확히 처음 $p - 1$개 $V_1, \dots, V_{p-1}$이 일차독립이고 $W' \cap V_p = \{0_V\}$일 때이다.
6. $T : V \to V$가 [[linear-map|선형사상]]이고 $\lambda_1, \dots, \lambda_p$가 [[eigenvectors-of-distinct-eigenvalues|서로 다른]] 실수의 열이면, $k$번째 값이 고유공간 $\operatorname{Ker}(T - \lambda_k i_V)$([[eigenvalue-and-eigenvector|고윳값과 고유벡터]])인 부분공간의 열은 일차독립이다.
:::

:::english
Let $V$ be a vector space and $p$ a natural number. The zero vector is $0_V$ from (B1).

**Sequence of subspaces.** A **sequence of subspaces** $V_1, \dots, V_p$ of length $p$ is a function $\{1, \dots, p\} \to \mathscr{P}(V)$ (power set) all of whose values $V_k$ are subspaces of $V$. The same subspace may appear in several places. If a subspace of $V$ is given for each place $k$, then by (G) there is a sequence of subspaces with these values. "The first $k$ terms" means, as for sequences of vectors, the restriction of the domain to $\{1, \dots, k\}$.

**Sum.** The **sum** of a sequence of subspaces $V_1, \dots, V_p$ is
$$V_1 + \cdots + V_p = \{v_1 + \cdots + v_p : v_1, \dots, v_p \text{ is a sequence in } V \text{ of length } p \text{ with } v_k \in V_k \text{ for all } k\}.$$
Here $v_1 + \cdots + v_p$ is the finite sum of vectors. Thus $x \in V$ belongs to this sum exactly when there is a sequence in $V$ of length $p$ with $v_k \in V_k$ for all $k$ and $x = v_1 + \cdots + v_p$; such a sequence is called a **representation** of $x$.

**Linear independence.** A sequence of subspaces $V_1, \dots, V_p$ is **linearly independent** exactly when the following holds: for every sequence $v_1, \dots, v_p$ in $V$ of length $p$ with $v_k \in V_k$ for all $k$, if $v_1 + \cdots + v_p = 0_V$ then $v_k = 0_V$ for all $k$. We then also say that "the subspaces $V_1, \dots, V_p$ are linearly independent". Since the same word is used for sequences of vectors, for subspaces we always say "the subspaces are linearly independent".

The following hold, where $V_1, \dots, V_p$ is a sequence of subspaces of length $p$.

1. $V_1 + \cdots + V_p$ is a subspace of $V$, and $V_k \subseteq V_1 + \cdots + V_p$ for all $k$. If $W$ is a subspace of $V$ with $V_k \subseteq W$ for all $k$, then $V_1 + \cdots + V_p \subseteq W$. If $p = 1$, then $V_1 + \cdots + V_p = V_1$. If $p \ge 2$ and $W'$ is the sum of the first $p - 1$ terms, then $V_1 + \cdots + V_p = W' + V_p$, where the right side is the sum of two subspaces from the entry on intersections and sums of subspaces. In particular, for $p = 2$ the set $V_1 + \cdots + V_p$ equals $V_1 + V_2$ of that entry.
2. A sequence of subspaces of length $1$ is always linearly independent.
3. The subspaces $V_1, \dots, V_p$ are linearly independent exactly when every element of $V_1 + \cdots + V_p$ has only one representation; that is, exactly when for any two sequences of length $p$ with $v_k, w_k \in V_k$ for all $k$, $v_1 + \cdots + v_p = w_1 + \cdots + w_p$ implies $v_k = w_k$ for all $k$.
4. If the subspaces $V_1, \dots, V_p$ are linearly independent, then $V_j \cap V_k = \{0_V\}$ for all $j, k \in \{1, \dots, p\}$ with $j \ne k$. In particular, if the same subspace $U$ appears in two different places, then $U = \{0_V\}$. For $p = 2$ the converse also holds: the subspaces $V_1, V_2$ are linearly independent exactly when $V_1 \cap V_2 = \{0_V\}$.
5. Let $p \ge 2$ and let $W'$ be the sum of the first $p - 1$ terms. The subspaces $V_1, \dots, V_p$ are linearly independent exactly when the first $p - 1$ terms $V_1, \dots, V_{p-1}$ are linearly independent and $W' \cap V_p = \{0_V\}$.
6. If $T : V \to V$ is a linear map and $\lambda_1, \dots, \lambda_p$ is a distinct sequence of real numbers, then the sequence of subspaces whose $k$th value is the eigenspace $\operatorname{Ker}(T - \lambda_k i_V)$ is linearly independent.
:::

## 직관

여러 부분공간이 "서로 겹치지 않고 따로 논다"는 것을 정확히 말한 것이 부분공간들의 일차독립입니다. 각 부분공간에서 벡터를 하나씩 꺼내 더했을 때 영벡터가 되는 방법이 모두 영벡터를 꺼내는 것뿐이라면, 어느 부분공간의 벡터도 다른 부분공간들의 벡터로 메울 수 없습니다. 여러 사람이 각자 다른 칸의 장부만 적는 경우를 떠올리면, 장부의 합이 $0$일 때 각 칸이 모두 $0$이라는 것이 이 정의의 "모든 $k$에서 $v_k = 0_V$"에 해당합니다. 비유가 맞지 않는 곳은 장부의 칸은 처음부터 서로 다른 자리이지만, 부분공간들은 같은 공간 $V$ 안에 있어서 일차독립인지가 따져 볼 일이라는 점입니다.

벡터 몇 개가 일차독립인 것과 닮았습니다. 길이 $p$인 벡터의 열 $v_1, \dots, v_p$의 항이 모두 영벡터가 아니면, 이 열이 일차독립인 것은 정확히 생성 $\operatorname{span}(v_k)$들로 된 부분공간의 열이 일차독립일 때입니다. $\operatorname{span}(v_k)$의 원소는 $\alpha_k v_k$ 꼴이기 때문입니다. 다만 (4)가 보여 주듯이 두 개씩 교집합이 $\{0_V\}$인 것만으로는 부분공간이 셋 이상일 때 일차독립이 되지 않을 수 있습니다. (5)는 부분공간을 하나씩 늘려 가며 따지는 길을 주고, 다음 항목은 이 길로 기저를 이어 붙입니다.

## 성질의 증명

:::proof
정수의 순서에 관하여 [[prime-number|(Z1)]], [[well-ordering-principle|(Z5), (Z6), (L2), (L3)]]을 쓴다. $p \ge 2$이고 $k \in \{1, \dots, p\}$이면 (Z5)와 (Z1)에 의해 $k \le p - 1$이거나 $k \ge p$이고, 뒤의 경우 $k \le p$와 (L2)에 의해 $k = p$이다. 또 $k \le p - 1$이면 (L3)와 (Z6)에 의해 $k < p$이고 (Z5)에 의해 $k \ne p$이다. (†)

아래에서 "$x$를 $k$번째 자리에만 둔 열"이란, $x \in V$와 $k \in \{1, \dots, p\}$에 대하여 $k$번째 항이 $x$이고 다른 항이 모두 $0_V$인 길이 $p$인 열이다((G)에 의해 있다). [[finite-sum-of-vectors|벡터의 유한 합]]의 (H7)에 의해 그 합은 $x$이다($p = n + 1$, $n = p - 1 \ge 0$). 부분공간은 $0_V$를 원소로 갖고((S1)) 덧셈과 스칼라배에 닫혀 있으며((S2), (S3)), [[vector-space-basic-properties|(B5)]]에 의해 $-x = (-1)x$이므로 $x \in V_k$이면 $-x \in V_k$이다. (‡)

**(1)의 증명.** 합을 $S$로 쓴다. 모든 항이 $0_V$인 길이 $p$인 열은 모든 자리에서 $0_V \in V_k$이고 (H5)에 의해 합이 $0_V$이므로 $0_V \in S$이다. $x, y \in S$이고 $v$, $w$가 각각의 표현이면, (H3)에 의해 $i$번째 항이 $v_i + w_i$인 열의 합은 $x + y$이고 (S2)에 의해 $v_i + w_i \in V_i$이므로 $x + y \in S$이다. 실수 $\alpha$에 대하여 (H4)에 의해 $i$번째 항이 $\alpha v_i$인 열의 합은 $\alpha x$이고 (S3)에 의해 $\alpha v_i \in V_i$이므로 $\alpha x \in S$이다. 따라서 [[subspace|부분공간]]의 정의에 의해 $S$는 부분공간이다. $x \in V_k$이면 $x$를 $k$번째 자리에만 둔 열은 모든 자리에서 $V_i$에 들고(다른 자리는 $0_V$) 합이 $x$이므로 $x \in S$이다. $W$가 모든 $V_k$를 포함하는 부분공간이면, $S$의 원소의 표현은 모든 항이 $W$에 속하므로 (H1)에 의해 그 합은 $W$에 속한다.

$p = 1$이면 (H0)에 의해 길이 $1$인 열 $v_1$의 합은 $v_1$이므로 $S = \{v_1 : v_1 \in V_1\} = V_1$이다. $p \ge 2$라 하자. $x \in S$이고 $v$가 그 표현이면, 합의 재귀 정의에 의해 $x = (v_1 + \cdots + v_{p-1}) + v_p$이다. 처음 $p - 1$개는 모든 $k \le p - 1$에서 $v_k \in V_k$인 열이므로 괄호 안은 $W'$의 원소이고, $v_p \in V_p$이므로 $x \in W' + V_p$이다. 거꾸로 $y = u + w$, $u \in W'$, $w \in V_p$라 하고 $c_1, \dots, c_{p-1}$을 $u$의 표현이라 하자. $c$에 $w$를 덧붙인 열 $c_1, \dots, c_{p-1}, w$는 (†)에 의해 모든 자리 $k$에서 $V_k$에 든다($k \le p - 1$이면 $c_k$, $k = p$이면 $w$). 합의 재귀 정의에 의해 그 합은 $(c_1 + \cdots + c_{p-1}) + w = u + w = y$이므로 $y \in S$이다. $p = 2$이면 처음 $1$개의 합 $W'$은 앞 문단에 의해 $V_1$이므로 $S = V_1 + V_2$이다.

**(2)의 증명.** $p = 1$이고 $v_1 \in V_1$이며 $v_1$ 하나로 된 열의 합이 $0_V$이면, (H0)에 의해 그 합은 $v_1$이므로 $v_1 = 0_V$이다.

**(3)의 증명.** 일차독립이라 하고 $v$, $w$가 같은 합을 갖는 두 표현이라 하자. $i$번째 항이 $-w_i$인 열의 합은 (B5), (H4)에 의해 $(-1)(w_1 + \cdots + w_p) = -(w_1 + \cdots + w_p)$이다. (H3)에 의해 $i$번째 항이 $v_i - w_i$인 열의 합은 $(v_1 + \cdots + v_p) - (w_1 + \cdots + w_p)$이고, 두 합이 같으므로 [[vector-space-basic-properties|(B12)]]에 의해 이것은 $0_V$이다. (‡)에 의해 $v_i - w_i \in V_i$이므로 일차독립의 정의에 의해 모든 $i$에서 $v_i - w_i = 0_V$이고, (B12)에 의해 $v_i = w_i$이다. 거꾸로 표현이 하나뿐이라 하고 $v$가 $0_V$의 표현이라 하자. 모든 항이 $0_V$인 열도 (H5)에 의해 $0_V$의 표현이므로 $v$는 그 열과 같고, 모든 $i$에서 $v_i = 0_V$이다.

**(4)의 증명.** 일차독립이고 $j \ne k$, $x \in V_j \cap V_k$라 하자. $x$를 $j$번째 자리에만 둔 열을 $a$, $-x$를 $k$번째 자리에만 둔 열을 $b$라 하면 두 합은 $x$와 $-x$이다. (H3)에 의해 $i$번째 항이 $a_i + b_i$인 열의 합은 $x + (-x) = 0_V$이다. 이 열의 $j$번째 항은 $x + 0_V = x \in V_j$, $k$번째 항은 $0_V + (-x) = -x \in V_k$((‡)), 나머지 항은 $0_V + 0_V = 0_V$이므로 모든 자리에서 $V_i$에 든다. 일차독립의 정의에 의해 $j$번째 항 $x$는 $0_V$이다. 따라서 $V_j \cap V_k \subseteq \{0_V\}$이고, (S1)에 의해 $0_V \in V_j \cap V_k$이므로 $V_j \cap V_k = \{0_V\}$이다. 서로 다른 두 자리 $j$, $k$에서 $V_j = V_k = U$이면 $U = U \cap U = \{0_V\}$이다. $p = 2$의 거꾸로는 (5)에서 $p = 2$로 둔 것이다. 그때 처음 $1$개 $V_1$은 (2)에 의해 일차독립이고 $W' = V_1$((1))이기 때문이다.

**(5)의 증명.** 일차독립이라 하자. $c_1, \dots, c_{p-1}$이 모든 $k \le p - 1$에서 $c_k \in V_k$이고 합이 $0_V$인 열이면, $c$에 $0_V$를 덧붙인 열은 (†)와 (S1)에 의해 모든 자리에서 $V_k$에 들고 합은 $0_V + 0_V = 0_V$이다. 일차독립의 정의에 의해 그 항들, 곧 모든 $c_k$가 $0_V$이다. 따라서 $V_1, \dots, V_{p-1}$은 일차독립이다. $x \in W' \cap V_p$이고 $c_1, \dots, c_{p-1}$이 $x$의 ($W'$에 관한) 표현이면, $c$에 $-x$를 덧붙인 열은 (‡)에 의해 모든 자리에서 $V_k$에 들고 합은 $x + (-x) = 0_V$이다. 일차독립의 정의에 의해 $p$번째 항 $-x$가 $0_V$이고 $x = -(-x) = -0_V = 0_V$이다((B8), (B4), (B5)). (S1)에 의해 $0_V \in W' \cap V_p$이므로 $W' \cap V_p = \{0_V\}$이다.

거꾸로 처음 $p - 1$개가 일차독립이고 $W' \cap V_p = \{0_V\}$라 하자. 모든 $k$에서 $v_k \in V_k$이고 합이 $0_V$인 길이 $p$인 열에 대하여 $u = v_1 + \cdots + v_{p-1}$로 두면, 합의 재귀 정의에 의해 $u + v_p = 0_V$이다. $u \in W'$이고, (B2)의 유일성에 의해 $u = -v_p$이므로 (‡)에 의해 $u \in V_p$이다. 따라서 $u \in W' \cap V_p$이고 $u = 0_V$이며, (H0)에 의해 $v_p = 0_V + v_p = u + v_p = 0_V$이다. 처음 $p - 1$개는 합이 $u = 0_V$이므로, 그 일차독립에 의해 $k \le p - 1$인 모든 $k$에서 $v_k = 0_V$이다. (†)에 의해 모든 $k$에서 $v_k = 0_V$이다.

**(6)의 증명.** [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (1)에 의해 각 $\operatorname{Ker}(T - \lambda_k i_V)$는 부분공간이므로 (G)에 의해 이 부분공간의 열이 있다. 모든 $k$에서 $u_k \in \operatorname{Ker}(T - \lambda_k i_V)$이고 $u_1 + \cdots + u_p = 0_V$이면, [[eigenvectors-of-distinct-eigenvalues|서로 다른 고윳값의 고유벡터]]의 (1)에 의해 모든 $k$에서 $u_k = 0_V$이다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ³ 의 세 좌표축]
$e_1, e_2, e_3$이 $\mathbb{R}^3$의 [[standard-basis|표준기저]]이고 $V_k = \operatorname{span}(e_k)$라 합시다. [[linear-combination-and-span|일차결합과 생성]]의 (N4)에 의해 $V_k$의 원소는 $\alpha e_k$ 꼴입니다. 모든 $k$에서 $v_k \in V_k$이고 $v_1 + v_2 + v_3 = 0$이라 하고 $v_k = \alpha_k e_k$로 쓰면, 합은 일차결합 $\alpha_1 e_1 + \alpha_2 e_2 + \alpha_3 e_3$입니다. 표준기저의 (3)에 의해 $0 = (0, 0, 0)$의 좌표는 $0, 0, 0$뿐이므로 모든 $\alpha_k = 0$이고, (B3)에 의해 모든 $v_k = 0$입니다. 따라서 세 좌표축은 일차독립입니다. 표현의 유일성 (3)으로 읽으면, $\mathbb{R}^3$의 원소 $(x_1, x_2, x_3)$는 세 좌표축의 원소의 합으로 쓰는 방법이 $x_1 e_1 + x_2 e_2 + x_3 e_3$ 하나뿐입니다.
:::

:::example[영공간이 섞인 부분공간의 열]
$V_1 = \mathbb{R}^2$, $V_2 = \{0\}$이라 합시다. $v_1 \in V_1$, $v_2 \in V_2$이고 $v_1 + v_2 = 0$이면 $v_2 = 0$이므로 $v_1 = v_1 + 0 = 0$입니다. 따라서 부분공간들 $\mathbb{R}^2, \{0\}$은 일차독립입니다. (4)로 보아도 $V_1 \cap V_2 = \{0\}$입니다. 더 일반적으로, 어떤 부분공간의 열이 일차독립이면 그 열에 $\{0_V\}$를 덧붙인 열도 일차독립입니다. 덧붙인 자리의 벡터는 처음부터 $0_V$이므로 나머지 자리의 합이 $0_V$가 되기 때문입니다.
:::

:::counterexample[두 개씩의 교집합이 영공간인 세 직선의 예]
$\mathbb{R}^2$에서 $V_1 = \operatorname{span}(e_1)$, $V_2 = \operatorname{span}(e_2)$, $V_3 = \operatorname{span}(u)$, $u = (1, 1)$이라 합시다. 두 개씩의 교집합은 $\{0\}$입니다. $\alpha u = \beta e_1$이면 둘째 값을 비교해 $\alpha = 0$이므로 $V_3 \cap V_1 = \{0\}$이고, $\alpha u = \beta e_2$이면 첫째 값에서 $\alpha = 0$이며, $\alpha e_1 = \beta e_2$이면 첫째 값에서 $\alpha = 0$입니다. 그런데 $v_1 = e_1$, $v_2 = e_2$, $v_3 = (-1)u$로 두면 $v_1 + v_2 + v_3 = (1, 0) + (0, 1) + (-1, -1) = (0, 0)$이고 세 벡터 모두 영벡터가 아닙니다. 따라서 이 세 부분공간은 일차독립이 아닙니다. 이런 예가 있으므로 (4)의 거꾸로는 $p = 2$일 때만 적었습니다. (5)로 읽으면 $V_1 + V_2 = \mathbb{R}^2$이고 $(V_1 + V_2) \cap V_3 = V_3 \ne \{0\}$입니다.
:::

## 확인 질문

:::check[$\mathbb{R}^2$에서 부분공간의 열 $\operatorname{span}(e_1), \operatorname{span}(e_1)$은 일차독립인가?]
아닙니다. 서로 다른 두 자리에 같은 부분공간 $\operatorname{span}(e_1)$이 나오는데 이 부분공간은 $e_1 \ne 0$을 원소로 가지므로 $\{0\}$이 아닙니다. (4)에 의해 일차독립이 아닙니다. 직접 보면 $v_1 = e_1$, $v_2 = (-1)e_1$이 두 자리에 들고 합이 $0$입니다.
:::

:::check[$\mathbb{R}^3$에서 $V_1 = \operatorname{span}(e_1, e_2)$, $V_2 = \operatorname{span}(w)$, $w = (1, 1, 1)$은 일차독립인가?]
그렇습니다. $p = 2$이므로 (4)에 의해 $V_1 \cap V_2 = \{0\}$을 보이면 됩니다. $x \in V_1 \cap V_2$이면 $x = \alpha e_1 + \beta e_2 = (\alpha, \beta, 0)$이고 (N4)에 의해 $x = \gamma w = (\gamma, \gamma, \gamma)$입니다. 셋째 값을 비교하면 $\gamma = 0$이므로 $x = 0$입니다.
:::
