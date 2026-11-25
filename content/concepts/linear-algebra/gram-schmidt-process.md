---
title: 그람–슈미트 과정
title_en: Gram–Schmidt Process
aliases: [그람-슈미트 과정, 그람–슈미트 직교화, 그람 슈미트, 정규직교화, Gram–Schmidt process, Gram–Schmidt orthogonalization, Gram-Schmidt]
kind: theorem
field: linear-algebra
msc: ["15A63", "65F25"]
level: undergrad
summary: 내적공간의 일차독립인 열 x₁, …, x_r 에서, 각 항에서 앞의 항들이 생성하는 부분공간으로의 직교사영을 빼는 식으로 영벡터가 없는 직교하는 열 v₁, …, v_r 을 만들고 정규화하면, 모든 k 에서 처음 k 개의 생성이 x 의 처음 k 개의 생성과 같은 정규직교 열이 나온다. 앞부분이 이미 직교하면 그 부분은 바뀌지 않고, 일차종속인 열에 같은 식을 쓰면 어느 자리에서 영벡터가 나온다.
requires: [real-number-arithmetic, well-ordering-principle, mathematical-induction, vector-space, vector-space-basic-properties, real-function-space, subspace, finite-sum-of-vectors, linear-combination-and-span, linear-independence, independent-list-extension, extension-to-a-basis, inner-product-space, norm-in-inner-product-space, orthogonal-vectors, orthonormal-list, orthogonal-projection]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 5장 3절 Orthogonal projection and Gram-Schmidt orthogonalization 의 3.1 Gram-Schmidt orthogonalization algorithm, pp.131–132; 3.2 An example 뒤의 Remark, p.133
    checked: original
    note: "출처 3.1(pp.131–132)은 일차독립인 system x₁, …, xₙ 에서 v₁ := x₁ 로 시작해 v_{r+1} := x_{r+1} − P_{E_r} x_{r+1} = x_{r+1} − Σ_{k=1}^{r} (x_{r+1}, v_k)/‖v_k‖² v_k (E_r = span{v₁, …, v_r})로 직교하는 system 을 만들고, 모든 r ≤ n 에서 span{x₁, …, x_r} = span{v₁, …, v_r} 이라고 적는다. 출처는 1–3 단계와 일반 단계 r + 1 을 적고, 'x_{r+1} ∉ E_r 이므로 v_{r+1} ≠ 0' 이라고 적은 뒤 '…'와 'Continuing this algorithm'(p.132)으로 과정을 잇는다. 이 항목은 '그런 열이 있다'를 k 에 대한 귀납으로 증명하고(재귀 정리를 쓰지 않는다), 식이 열을 하나로 정한다는 것과 x_{k+1} ∉ span(x₁, …, x_k) 인 까닭((3))을 진술에 올렸다. 출처는 v₁ := x₁ 을 따로 두고, 이 항목은 빈 합으로 k = 0 도 같은 식에 넣는다. (2)의 정규화는 출처 3.2 뒤의 Remark(p.133)가 '벡터를 각자의 노름으로 나누면 정규직교 system 이 된다'고 적는 것이다. 출처의 Σ 는 이 사이트에서 벡터의 유한 합으로 쓴다. 출처는 직교사영을 P_E 로 쓰고 이 사이트는 직교사영 항목의 이름을 쓴다. (5)와 확인 질문 '내적공간의 열 $x_1, x_2, x_3$에서 $x_1, x_2$는 일차독립이고 $x_3 = x_1 - 2x_2$이면 과정의 셋째 단계에서 무엇이 나오는가?'는 출처 3.1(pp.131–132)의 'x_{r+1} ∉ E_r 이므로 v_{r+1} ≠ 0' 의 가정이 깨지는 경우이다. 반례 '생성이 같은 직교하는 열이 하나뿐이지는 않은 예'는 출처 3.2 뒤의 Remark(p.133)가 '스칼라를 곱해도 직교성은 변하지 않으므로 그람–슈미트로 얻은 v_k 에 0 이 아닌 수를 곱해도 된다'고 적는 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(예의 수치 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$V$가 [[inner-product-space|내적공간]]이고 $r \ge 0$이 정수이며 $x_1, \dots, x_r$이 $V$의 [[linear-independence|일차독립]]인 벡터의 열이라 하자. $0 \le k \le r$인 정수 $k$마다 $E_k = \operatorname{span}(x_1, \dots, x_k)$로 쓴다([[linear-combination-and-span|생성]]. $E_0 = \{0_V\}$). 직교하는 열, 정규직교 열, 정규화한 열은 [[orthonormal-list|직교하는 열과 정규직교 열]]의 것이고, 직교사영은 [[orthogonal-projection|직교사영]]의 것이다.

1. (직교하는 열) 모든 항이 영벡터가 아닌 직교하는 열 $v_1, \dots, v_r$로서, $0 \le k < r$인 모든 정수 $k$에서
   $$
   \begin{aligned}
   v_{k+1} &= x_{k+1} \\
   &\quad - (c_{k,1} v_1 + \cdots + c_{k,k} v_k), \\
   c_{k,i} &= \langle x_{k+1}, v_i \rangle \langle v_i, v_i \rangle^{-1} \\
   &\quad (1 \le i \le k)
   \end{aligned}
   $$
   인 것이 정확히 하나 있다. 괄호 안은 $i$번째 항이 $c_{k,i} v_i$인 길이 $k$인 열의 합이고, $k = 0$이면 빈 합 $0_V$이어서 $v_1 = x_1$이다. 이 열에서 $0 \le k \le r$인 모든 $k$에서 $\operatorname{span}(v_1, \dots, v_k) = E_k$이고, $k < r$이면 괄호 안의 벡터는 $x_{k+1}$의 $E_k$로의 직교사영이다.
2. (정규직교 열) (1)의 열을 정규화한 열, 곧 $k$번째 항이 $u_k = \lVert v_k \rVert^{-1} v_k$인 열 $u_1, \dots, u_r$은 정규직교 열이고, $0 \le k \le r$인 모든 $k$에서 $\operatorname{span}(u_1, \dots, u_k) = E_k$이다. $0 \le k < r$이면
   $$
   \begin{aligned}
   v_{k+1} &= x_{k+1} \\
   &\quad - \bigl(\langle x_{k+1}, u_1 \rangle u_1 + \cdots \\
   &\qquad + \langle x_{k+1}, u_k \rangle u_k\bigr)
   \end{aligned}
   $$
   이다. 따라서 일차독립인 모든 열 $x_1, \dots, x_r$에 대하여, 모든 $k$에서 처음 $k$개의 생성이 $E_k$인 정규직교 열 $u_1, \dots, u_r$이 있다. (1)의 $v$와 (2)의 $u$를 $x_1, \dots, x_r$에 **그람–슈미트 과정**(Gram–Schmidt process)을 쓴 결과라 한다.
3. ($v_{k+1}$이 영벡터가 아닌 까닭) $0 \le k \le r$이면 처음 $k$개 $x_1, \dots, x_k$는 일차독립이다. $0 \le k < r$이면 $x_{k+1} \notin E_k$이다.
4. (이미 직교하는 앞부분) $0 \le s \le r$인 정수 $s$에 대하여 처음 $s$개 $x_1, \dots, x_s$가 직교하는 열이면 모든 $i \le s$에서 $v_i = x_i$이다. 처음 $s$개가 정규직교 열이면 모든 $i \le s$에서 $u_i = x_i$이다. 특히 $x_1, \dots, x_r$이 정규직교 열이면 $u_1, \dots, u_r$은 $x_1, \dots, x_r$ 자신이다.
5. (일차종속인 열) 이 (5)에서는 $x_1, \dots, x_r$이 일차독립이라고 가정하지 않는다. $0 \le k < r$이고 처음 $k$개 $x_1, \dots, x_k$가 일차독립이라 하고, $v_1, \dots, v_k$를 $x_1, \dots, x_k$에 (1)을 쓴 열이라 하자. 그러면 (1)과 같은 식으로 정한 벡터 $y = x_{k+1} - (c_{k,1} v_1 + \cdots + c_{k,k} v_k)$가 $0_V$인 것은 정확히 $x_1, \dots, x_{k+1}$이 일차종속일 때, 곧 정확히 $x_{k+1} \in E_k$일 때이다. $x_1, \dots, x_r$이 일차종속이면 $x_1, \dots, x_k$는 일차독립이고 $x_1, \dots, x_{k+1}$은 일차종속인 정수 $k$ ($0 \le k < r$)가 있어서, 그 자리에서 $y = 0_V$가 된다.
:::

:::english
Let $V$ be an inner product space, let $r \ge 0$ be an integer, and let $x_1, \dots, x_r$ be a linearly independent sequence of vectors in $V$. For each integer $k$ with $0 \le k \le r$ write $E_k = \operatorname{span}(x_1, \dots, x_k)$ (so $E_0 = \{0_V\}$). Orthogonal sequences, orthonormal sequences and normalizations are those of the entry on orthogonal and orthonormal sequences, and orthogonal projections are those of the entry on orthogonal projections.

1. (Orthogonal sequence) There is exactly one orthogonal sequence $v_1, \dots, v_r$ none of whose terms is the zero vector such that, for every integer $k$ with $0 \le k < r$,
   $$
   \begin{aligned}
   v_{k+1} &= x_{k+1} \\
   &\quad - (c_{k,1} v_1 + \cdots + c_{k,k} v_k), \\
   c_{k,i} &= \langle x_{k+1}, v_i \rangle \langle v_i, v_i \rangle^{-1} \\
   &\quad (1 \le i \le k).
   \end{aligned}
   $$
   The parenthesis is the sum of the sequence of length $k$ whose $i$-th term is $c_{k,i} v_i$; for $k = 0$ it is the empty sum $0_V$, so $v_1 = x_1$. For this sequence, $\operatorname{span}(v_1, \dots, v_k) = E_k$ for every $k$ with $0 \le k \le r$, and for $k < r$ the vector in the parenthesis is the orthogonal projection of $x_{k+1}$ onto $E_k$.
2. (Orthonormal sequence) The normalization of the sequence in (1), that is, the sequence $u_1, \dots, u_r$ whose $k$-th term is $u_k = \lVert v_k \rVert^{-1} v_k$, is orthonormal, and $\operatorname{span}(u_1, \dots, u_k) = E_k$ for every $k$ with $0 \le k \le r$. For $0 \le k < r$,
   $$
   \begin{aligned}
   v_{k+1} &= x_{k+1} \\
   &\quad - \bigl(\langle x_{k+1}, u_1 \rangle u_1 + \cdots \\
   &\qquad + \langle x_{k+1}, u_k \rangle u_k\bigr).
   \end{aligned}
   $$
   Hence for every linearly independent sequence $x_1, \dots, x_r$ there is an orthonormal sequence $u_1, \dots, u_r$ such that, for every $k$, the span of its first $k$ terms is $E_k$. The $v$ of (1) and the $u$ of (2) are called the result of applying the **Gram–Schmidt process** to $x_1, \dots, x_r$.
3. (Why $v_{k+1}$ is not zero) If $0 \le k \le r$, the first $k$ terms $x_1, \dots, x_k$ are linearly independent. If $0 \le k < r$, then $x_{k+1} \notin E_k$.
4. (An initial part that is already orthogonal) For an integer $s$ with $0 \le s \le r$, if the first $s$ terms $x_1, \dots, x_s$ form an orthogonal sequence, then $v_i = x_i$ for every $i \le s$. If the first $s$ terms form an orthonormal sequence, then $u_i = x_i$ for every $i \le s$. In particular, if $x_1, \dots, x_r$ is orthonormal, then $u_1, \dots, u_r$ is $x_1, \dots, x_r$ itself.
5. (Linearly dependent sequences) In this item (5), $x_1, \dots, x_r$ is not assumed to be linearly independent. Let $0 \le k < r$, suppose the first $k$ terms $x_1, \dots, x_k$ are linearly independent, and let $v_1, \dots, v_k$ be the sequence obtained by applying (1) to $x_1, \dots, x_k$. Then the vector $y = x_{k+1} - (c_{k,1} v_1 + \cdots + c_{k,k} v_k)$, defined by the same formula as in (1), is $0_V$ exactly when $x_1, \dots, x_{k+1}$ is linearly dependent, that is, exactly when $x_{k+1} \in E_k$. If $x_1, \dots, x_r$ is linearly dependent, there is an integer $k$ ($0 \le k < r$) such that $x_1, \dots, x_k$ is linearly independent and $x_1, \dots, x_{k+1}$ is linearly dependent, and at that position $y = 0_V$.
:::

## 직관

일차독립인 열 $x_1, x_2, \dots$에서 서로 직교하는 열을 만들려면, 각 항에서 앞의 항들과 겹치는 부분을 덜어 내면 됩니다. $x_2$에서 $x_1$ 방향의 그림자, 곧 $x_1$이 생성하는 직선으로의 직교사영을 빼면 $x_1$과 직교하는 벡터가 남고, $x_3$에서 앞의 두 항이 생성하는 평면으로의 직교사영을 빼면 그 평면과 직교하는 벡터가 남습니다. 비유하면 벽에 기대 선 막대에서 벽에 비친 그림자를 빼고 벽에서 곧게 뻗은 부분만 남기는 것입니다. 남은 부분이 "벽"(앞의 항들의 생성)의 모든 원소와 직교한다는 것이 직교사영의 정의입니다.

빼는 그림자는 앞의 항들의 일차결합이므로, 처음 $k$개가 생성하는 부분공간은 과정 내내 바뀌지 않습니다. 남은 부분이 영벡터가 아닌 것은 일차독립이라는 가정 덕분입니다. $x_{k+1}$이 앞의 항들의 생성에 속하지 않으므로 그림자와 같을 수 없습니다((3)). 거꾸로 일차종속인 열에 같은 식을 쓰면, 처음으로 앞의 항들의 생성에 속하는 항에서 남는 부분이 영벡터가 됩니다((5)). 이미 직교하는 앞부분은 빼는 그림자가 영벡터이므로 그대로 남습니다((4)).

직교사영의 식은 앞에서 만든 직교하는 열로 계산하므로, 열을 하나씩 늘려 가며 만들어야 합니다. 이 항목은 "처음 $k$개가 조건을 만족하는 열이 있다"를 $k$에 대한 귀납으로 증명합니다. 각 단계에서 덧붙이는 벡터가 식으로 정해지므로 무엇을 고를 필요가 없습니다.

## 증명

:::idea
$k$번째 단계까지 만든 직교하는 열이 $E_k$를 생성하면, $x_{k+1}$에서 $E_k$로의 직교사영을 뺀 벡터는 $E_k$와 직교하고, 일차독립 때문에 영벡터가 아니다. 이것을 덧붙이면 다음 단계의 열이 된다.
:::

:::hint
일차독립인 열의 처음 $k$개도 일차독립임을 먼저 보이고, [[independent-list-extension|일차독립인 열에 벡터 덧붙이기]]의 (1)로 $x_{k+1} \notin E_k$를 얻습니다.
:::

:::hint
$\operatorname{span}(v_1, \dots, v_k) = E_k$이면 [[orthogonal-projection|직교사영]]의 (3)에 의해 괄호 안의 벡터가 $x_{k+1}$의 $E_k$로의 직교사영입니다. 덧붙인 열이 직교하는 것은 [[orthonormal-list|직교하는 열과 정규직교 열]]의 (5)에서 $s = 1$인 경우입니다.
:::

:::proof
아래에서 (K…)는 [[real-number-arithmetic|실수의 계산 법칙]], (V…)는 [[vector-space|벡터공간]], (B…)는 [[vector-space-basic-properties|벡터공간의 기본 성질]], (S…)는 [[subspace|부분공간]], (H…)와 (C…)는 [[finite-sum-of-vectors|벡터의 유한 합]], (N…)은 [[linear-combination-and-span|일차결합과 생성]], (I…)는 [[linear-independence|일차독립]]의 번호이다. [[orthogonal-vectors|직교]], [[orthonormal-list|직교하는 열과 정규직교 열]], [[orthogonal-projection|직교사영]]의 번호는 "직교의 (1)", "정규직교 열의 (1)", "직교사영의 (1)"처럼 줄여 쓴다. 정수의 순서는 [[well-ordering-principle|정렬 원리]]의 (Z5)–(Z7), (L1), (L3)과 [[prime-number|소수]]의 (Z1)을 쓴다. 열의 "처음 $k$개"와 "덧붙인 열"은 벡터의 유한 합의 것이고, 길이 $k + 1$인 열의 처음 $k + 1$개는 처음 $k$개에 $(k+1)$번째 항을 덧붙인 열이다.

**(3)의 증명.** $0 \le k \le r$이고 $\alpha_1 x_1 + \cdots + \alpha_k x_k = 0_V$라 하자. $x$는 처음 $k$개와, $j$번째 항이 $x_{k+j}$인 길이 $r - k$인 열을 [[extension-to-a-basis|이어 붙인 열]]이다. $\gamma$를 $\alpha$와 모든 항이 $0$인 길이 $r - k$인 열을 이어 붙인 실수의 열이라 하면, 이어 붙인 열의 일차결합에 관한 그 항목의 (1), (C3), (H0)에 의해 $\gamma_1 x_1 + \cdots + \gamma_r x_r = 0_V + 0_V = 0_V$이다. $x$가 일차독립이므로 모든 $\gamma_i = 0$이고, 특히 모든 $i \le k$에서 $\alpha_i = \gamma_i = 0$이다. 따라서 처음 $k$개는 일차독립이다. $k < r$이면 처음 $k + 1$개는 처음 $k$개에 $x_{k+1}$을 덧붙인 열이고 앞 문장에 의해 일차독립이므로, [[independent-list-extension|일차독립인 열에 벡터 덧붙이기]]의 (1)에 의해 $x_{k+1} \notin E_k$이다.

**(1)의 존재.** $0 \le k \le r$인 정수 $k$에 대한 명제 $P_k$를 다음으로 둔다. "모든 항이 영벡터가 아닌 길이 $k$인 직교하는 열 $v_1, \dots, v_k$가 있어서, $0 \le j < k$인 모든 $j$에서 (1)의 식이 성립하고 $0 \le j \le k$인 모든 $j$에서 $\operatorname{span}(v_1, \dots, v_j) = E_j$이다." 식 $v_{j+1} = \cdots$의 오른쪽은 $x_{j+1}$과 $v_1, \dots, v_j$만 쓰므로, 이 조건은 열의 처음 $j + 1$개만 보고 정해진다. [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로 $k \le r$에서 $P_k$를 보인다.

$P_0$: 빈 열은 직교하는 열이고 영벡터인 항이 없으며, 식의 조건은 $j$가 없어 참이고, $\operatorname{span}() = \{0_V\} = E_0$이다.

$0 \le k < r$에서 $P_k$가 참이라 하고 그 열을 $v_1, \dots, v_k$라 하자. $\operatorname{span}(v_1, \dots, v_k) = E_k$이고 $v$는 영벡터가 없는 직교하는 열이므로 직교사영의 (3)에 의해 $w = c_{k,1} v_1 + \cdots + c_{k,k} v_k$는 $x_{k+1}$의 $E_k$로의 직교사영이다. $v_{k+1} = x_{k+1} - w$로 두고 덧붙인 열 $v_1, \dots, v_{k+1}$을 생각한다.

- 직교사영의 정의에 의해 $w \in E_k$이고 $v_{k+1} \perp E_k$이다. $i \le k$이면 (N2)에 의해 $v_i \in \operatorname{span}(v_1, \dots, v_k) = E_k$이므로 $v_{k+1} \perp v_i$이고, 직교의 (1)에 의해 $v_i \perp v_{k+1}$이다. 길이 $1$인 열 $v_{k+1}$은 직교하는 열이므로 정규직교 열의 (5)에서 $s = 1$인 경우에 의해 $v_1, \dots, v_{k+1}$은 직교하는 열이다.
- $v_{k+1} = 0_V$이면 (B12)에 의해 $x_{k+1} = w \in E_k$가 되어 (3)에 어긋난다. 따라서 $v_{k+1} \ne 0_V$이다.
- $j < k$에서 식과 $j \le k$에서 생성의 등식은 처음 $k$개가 그대로이므로 $P_k$에서 성립하고, $j = k$에서 식은 $v_{k+1}$의 정의이다.
- $\operatorname{span}(v_1, \dots, v_{k+1}) = E_{k+1}$: (N1), (N2), (N3)에 의해 $E_k \subseteq E_{k+1}$이다(처음 $k$개의 항이 모두 $E_{k+1}$에 속하므로). $i \le k$이면 $v_i \in E_k \subseteq E_{k+1}$이고, $x_{k+1} \in E_{k+1}$, $w \in E_k \subseteq E_{k+1}$이므로 (S3), (B5), (S2)에 의해 $v_{k+1} = x_{k+1} + (-1)w \in E_{k+1}$이다. (N3)에 의해 $\operatorname{span}(v_1, \dots, v_{k+1}) \subseteq E_{k+1}$이다. 거꾸로 $i \le k$이면 $x_i \in E_k = \operatorname{span}(v_1, \dots, v_k) \subseteq \operatorname{span}(v_1, \dots, v_{k+1})$이고, (V1), (V2), (B2), (H0)에 의해 $x_{k+1} = (x_{k+1} + (-w)) + w = v_{k+1} + w$인데 $v_{k+1}$과 $w$가 모두 $\operatorname{span}(v_1, \dots, v_{k+1})$에 속하므로 (S2)에 의해 $x_{k+1}$도 속한다. (N3)에 의해 $E_{k+1} \subseteq \operatorname{span}(v_1, \dots, v_{k+1})$이다.

따라서 $P_{k+1}$이 참이다. 귀납법에 의해 $P_r$이 참이고, 그 열이 (1)의 열이다. 마지막 문장은 위에서 본 대로 직교사영의 (3)이다.

**(1)의 유일성.** $v$와 $v'$이 둘 다 모든 항이 영벡터가 아니고 (1)의 식을 만족하는 길이 $r$인 열이라 하자. $0 \le k \le r$에서 "처음 $k$개가 같다"를 귀납으로 보인다. $k = 0$이면 둘 다 빈 열이다. $k < r$이고 처음 $k$개가 같으면, 모든 $i \le k$에서 $c_{k,i}$와 $c'_{k,i}$는 같은 식으로 같은 값이고, 두 열의 $(k+1)$번째 항은 모든 자리의 항이 같은 열의 합을 $x_{k+1}$에서 뺀 것이므로 같다. 따라서 처음 $k + 1$개가 같고, $k = r$에서 $v = v'$이다.

**(2)의 증명.** (1)의 열은 영벡터가 없는 직교하는 열이므로 정규직교 열의 (4)에 의해 $u$는 정규직교 열이다. $k \le r$이면 $v$의 처음 $k$개도 영벡터가 없는 직교하는 열이고(정규직교 열의 (5)), 그것을 정규화한 열은 $u$의 처음 $k$개이므로 정규직교 열의 (4)에 의해 $\operatorname{span}(u_1, \dots, u_k) = \operatorname{span}(v_1, \dots, v_k) = E_k$이다. $k < r$이면 $u_1, \dots, u_k$는 정규직교 열이고(정규직교 열의 (5)) 그 생성이 $E_k$이므로, 직교사영의 (3)에 의해 $\langle x_{k+1}, u_1 \rangle u_1 + \cdots + \langle x_{k+1}, u_k \rangle u_k$는 $x_{k+1}$의 $E_k$로의 직교사영이다. 직교사영의 (1)의 유일성에 의해 이것은 (1)의 괄호 안의 벡터와 같으므로 둘째 문장의 식이 성립한다. 셋째 문장은 (1)과 앞 문장들에서 나온다.

**(4)의 증명.** $0 \le j \le s$에서 "모든 $i \le j$에서 $v_i = x_i$"를 $j$에 대한 귀납으로 보인다. $j = 0$이면 참이다. $j < s$이고 모든 $i \le j$에서 $v_i = x_i$라 하자. $i \le j$이면 $i \le j < j + 1 \le s$이므로 $i \ne j + 1$이고, 처음 $s$개가 직교하는 열이므로 $\langle x_{j+1}, v_i \rangle = \langle x_{j+1}, x_i \rangle = 0$이다. (K9)에 의해 $c_{j,i} = 0$이고 (C3)에 의해 괄호 안의 합은 $0_V$이다. (H0)에 의해 $0_V + 0_V = 0_V$이므로 (B2)에 의해 $-0_V = 0_V$이고, $v_{j+1} = x_{j+1} + 0_V = x_{j+1}$이다((V1), (H0)). 처음 $s$개가 정규직교 열이면 $i \le s$에서 $\lVert x_i \rVert = 1$이고, (K4)와 (K8)의 (iii)에 의해 $1^{-1} = 1$이므로 (V5)에 의해 $u_i = 1 x_i = x_i$이다. $s = r$이면 마지막 문장이다.

**(5)의 증명.** 처음 $k$개는 일차독립이므로 (1)을 $x_1, \dots, x_k$에 쓸 수 있고, $\operatorname{span}(v_1, \dots, v_k) = E_k$이다. 직교사영의 (3)에 의해 $w = c_{k,1} v_1 + \cdots + c_{k,k} v_k$는 $x_{k+1}$의 $E_k$로의 직교사영이고 $y = x_{k+1} - w$이다. (B12)에 의해 $y = 0_V$인 것은 정확히 $x_{k+1} = w$일 때이다. $x_{k+1} = w$이면 $x_{k+1} \in E_k$이다. 거꾸로 $x_{k+1} \in E_k$이면 직교사영의 (1)에 의해 $x_{k+1}$ 자신이 $x_{k+1}$의 직교사영이므로 유일성에 의해 $w = x_{k+1}$이다. 또 처음 $k + 1$개는 처음 $k$개에 $x_{k+1}$을 덧붙인 열이므로 [[independent-list-extension|일차독립인 열에 벡터 덧붙이기]]의 (1)에 의해, 그것이 일차종속인 것은 정확히 $x_{k+1} \in E_k$일 때이다.

마지막 문장: $x_1, \dots, x_r$이 일차종속이라 하자. 빈 열은 일차독립이므로 $r \ge 1$이다. $M$을 처음 $m$개가 일차종속인 $m \in \{1, \dots, r\}$ 전체의 집합이라 하면, 처음 $r$개는 $x$ 자신이므로 $r \in M$이고, $M$은 $\mathbb{N}$의 공집합이 아닌 부분집합이다. 정렬 원리의 (2)에 의해 $M$의 최소 원소 $m$이 있다. $k = m - 1$로 두면 $0 \le k < r$이다. $k = 0$이면 처음 $k$개는 빈 열이어서 일차독립이고, $k \ge 1$이면 (L3)에 의해 $k < m$이고 $m$이 최소 원소이므로 (L1)에 의해 $k \notin M$, 곧 처음 $k$개는 일차독립이다. 처음 $k + 1 = m$개는 일차종속이므로 앞 문단에 의해 그 자리에서 $y = 0_V$이다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ² 의 두 벡터에 과정을 쓰기]
표준내적을 준 $\mathbb{R}^2$에서 $x_1 = (3, 4)$, $x_2 = (1, 0)$이라 합시다. $v_1 = x_1$이고 $\langle v_1, v_1 \rangle = 25$, $\langle x_2, v_1 \rangle = 3$이므로 $c_{1,1} = \tfrac{3}{25}$이고
$$
v_2 = (1, 0) - \tfrac{3}{25}(3, 4) = \bigl(\tfrac{16}{25}, -\tfrac{12}{25}\bigr)
$$
입니다. $\langle v_1, v_2 \rangle = \tfrac{48}{25} - \tfrac{48}{25} = 0$이고 $\langle v_2, v_2 \rangle = \tfrac{256 + 144}{625} = \tfrac{16}{25}$입니다. 정규화하면 $\lVert v_1 \rVert = 5$, $\lVert v_2 \rVert = \tfrac{4}{5}$이므로 $u_1 = \bigl(\tfrac{3}{5}, \tfrac{4}{5}\bigr)$, $u_2 = \bigl(\tfrac{4}{5}, -\tfrac{3}{5}\bigr)$입니다.
:::

:::counterexample[생성이 같은 직교하는 열이 하나뿐이지는 않은 예]
(1)의 "정확히 하나"는 식을 만족하는 열에 대한 말입니다. 처음 $k$개의 생성이 $E_k$와 같은 직교하는 열은 그 밖에도 있을 수 있습니다. 위의 예에서 $2v_1, -v_2$도 영벡터가 없는 직교하는 열이고, 처음 $1$개와 $2$개의 생성이 각각 $E_1$, $E_2$와 같습니다. 그러나 $2v_1 = (6, 8) \ne x_1$이어서 (1)의 식 $v_1 = x_1$을 만족하지 않습니다.
:::

## 확인 질문

:::check[일차독립인 열 $x_1, x_2$에서 $x_1 \perp x_2$이면 그람–슈미트 과정의 $v_2$는 무엇인가?]
(4)에서 $s = 2$인 경우입니다. $\langle x_2, v_1 \rangle = \langle x_2, x_1 \rangle = 0$이므로 $c_{1,1} = 0$이고 $v_2 = x_2$입니다.
:::

:::check[내적공간의 열 $x_1, x_2, x_3$에서 $x_1, x_2$는 일차독립이고 $x_3 = x_1 - 2x_2$이면 과정의 셋째 단계에서 무엇이 나오는가?]
$x_3 \in \operatorname{span}(x_1, x_2) = E_2$이므로 (5)에 의해 셋째 단계의 벡터 $x_3 - (c_{2,1} v_1 + c_{2,2} v_2)$는 영벡터입니다. 곧 영벡터가 없는 직교하는 열을 길이 $3$까지 만들 수 없습니다.
:::
