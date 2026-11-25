---
title: 자기수반 멱등사상과 직교사영
title_en: Self-Adjoint Idempotents Are Orthogonal Projections
aliases: [직교사영의 판정, 직교사영 행렬의 판정, 대칭 멱등행렬, 멱등사상, orthogonal projection characterization, self-adjoint idempotent, symmetric idempotent matrix]
kind: theorem
field: linear-algebra
msc: ["15A04", "15A63"]
level: undergrad
summary: 유한차원 내적공간 위의 선형사상 P 가 어떤 부분공간 위로의 직교사영인 것은 정확히 P 를 두 번 합성해도 P 이고 P 가 자기수반일 때이며, 그때 그 부분공간은 P 의 상이고 P 의 핵은 그 직교 여공간이다. 행렬로는 정사각행렬 M 이 ℝⁿ 의 어떤 부분공간 위로의 직교사영의 행렬인 것은 정확히 MM = M 이고 M 이 대칭일 때이다.
requires: [function, vector-space-basic-properties, linear-map, linear-map-examples, linear-maps-form-a-vector-space, kernel-and-range, subspace, dimension, dimension-of-subspace, matrix, transpose, matrix-vector-product, matrix-product, matrix-of-a-linear-map, rank-of-a-matrix, inner-product-space, standard-inner-product, orthogonal-vectors, orthogonal-projection, orthonormal-basis-exists, orthogonal-complement, properties-of-orthogonal-projection, self-adjoint-map]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 5장 Inner product spaces 3절 Orthogonal projection and Gram-Schmidt orthogonalization 의 연습문제 3.11 과 그 Remark, p.134; 5절 Adjoint of a linear transformation. Fundamental subspaces revisited. 의 연습문제 5.6, p.146
    checked: original
    note: "출처 5장 3절 연습문제 3.11(p.134)은 직교사영의 행렬 P 가 자기수반(P* = P)이고 P² = P 임을 보이라고 하고, 그 뒤 Remark 에서 이 두 성질이 직교사영을 완전히 특징짓는다고 적은 뒤 나중에 다루겠다고 한다. 출처 5장 5절 연습문제 5.6(p.146)은 자기수반이고 P² = P 인 행렬 P 가 직교사영의 행렬임을 보이라고 하고, 분해 x = x₁ + x₂ (x₁ ∈ Ran P, x₂ ⊥ Ran P)에서 Px₁ = x₁, Px₂ = 0 을 보이라는 힌트를 준다. 이 항목의 (1)은 이 두 연습문제를 선형사상으로 진술한 것이다. ⇒ 방향은 3단원 '직교사영의 성질과 행렬' 항목의 (1), (2)를 인용했다. ⇐ 방향은 출처의 힌트와 달리 분해를 쓰지 않고, E = Ran P 로 두어 v − Pv 가 E 의 모든 원소 Pu 와 직교함을 자기수반성과 P∘P = P 로 바로 보였다. 출처는 P² 를 행렬의 거듭제곱으로 쓴다. 이 사이트는 행렬의 거듭제곱을 정의하지 않았으므로 P ∘ P 와 행렬의 곱 MM 으로 쓴다. (3)의 i_V − P 는 직교 여공간 항목의 (6)을 이 판정과 함께 진술한 것이다. 예시 'ℝ³ 의 평면 위로의 직교사영이 되는 대칭 멱등행렬'은 출처 연습문제 5.6 을 수로 확인한 것과 같은 발상이다. 반례 '대칭이 아닌 멱등행렬'과 '멱등이 아닌 대칭행렬'은 출처 연습문제 5.6 의 힌트가 '한 등식에는 자기수반성이, 다른 등식에는 P² = P 가 필요하다'고 적는 두 가정을 하나씩 뺀 경우이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(출처 검색 표본, 메모의 진술 번호 대조 — 어긋난 번호 둘을 고쳤다). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$V$가 [[dimension|유한차원]]인 [[inner-product-space|내적공간]]이고 $P : V \to V$가 [[linear-map|선형사상]]이라 하자. 자기수반은 [[self-adjoint-map|자기수반사상과 대칭행렬]]의 것이고, 직교사영과 $\operatorname{proj}_E$는 [[orthogonal-projection|직교사영]]의 것, $E^\perp$는 [[orthogonal-complement|직교 여공간]]의 것이다. $V$가 유한차원이므로 [[orthonormal-basis-exists|정규직교 기저의 존재와 확장]]의 (4)에 의해 $V$의 모든 부분공간 $E$에 대하여 $\operatorname{proj}_E : V \to V$가 정해진다. $P \circ P = P$인 선형사상 $P$를 **멱등**(idempotent)이라 하고, 자연수 $n$과 $n \times n$ 행렬 $M$에서 $MM = M$이면 $M$을 멱등이라 한다.

1. (판정) $V$의 어떤 [[subspace|부분공간]] $E$에서 $P = \operatorname{proj}_E$인 것은 정확히 $P \circ P = P$이고 $P$가 자기수반일 때이다.
2. (사영하는 부분공간) $P = \operatorname{proj}_E$이면 $E = \operatorname{Ran} P$이고 $\operatorname{Ker} P = E^\perp = (\operatorname{Ran} P)^\perp$이다([[kernel-and-range|핵과 상]]). 따라서 (1)의 $E$는 $P$가 정하는 하나뿐인 부분공간이다.
3. (나머지 쪽) $P \circ P = P$이고 $P$가 자기수반이면 $i_V - P$도 그렇고, $i_V - P = \operatorname{proj}_{(\operatorname{Ran} P)^\perp}$이다. 여기서 $i_V - P$는 [[linear-maps-form-a-vector-space|선형사상의 공간]]에서의 차이다.
4. (행렬) $n$이 자연수이고 $M$이 $n \times n$ [[matrix|행렬]]이며 $\mathbb{R}^n$에 [[standard-inner-product|표준내적]]을 주자. $\mathbb{R}^n$의 어떤 부분공간 $E$에서 $M = [\operatorname{proj}_E]$([[matrix-of-a-linear-map|선형사상의 행렬]])인 것은 정확히 [[matrix-product|행렬의 곱]] $MM$이 $M$이고 $M$이 대칭일 때이다. 이때 $E = \operatorname{Col} M$이다([[rank-of-a-matrix|열공간]]).
:::

:::english
Let $V$ be a finite-dimensional inner product space and let $P : V \to V$ be a linear map. Self-adjointness is as in the entry on self-adjoint maps and symmetric matrices, orthogonal projections and $\operatorname{proj}_E$ are as in the entry on orthogonal projections, and $E^\perp$ is as in the entry on orthogonal complements. Since $V$ is finite-dimensional, by item (4) of the entry on the existence and extension of orthonormal bases, $\operatorname{proj}_E : V \to V$ is defined for every subspace $E$ of $V$. A linear map $P$ with $P \circ P = P$ is called **idempotent**, and for a natural number $n$ an $n \times n$ matrix $M$ with $MM = M$ is called idempotent.

1. (Criterion) $P = \operatorname{proj}_E$ for some subspace $E$ of $V$ exactly when $P \circ P = P$ and $P$ is self-adjoint.
2. (The subspace projected onto) If $P = \operatorname{proj}_E$, then $E = \operatorname{Ran} P$ and $\operatorname{Ker} P = E^\perp = (\operatorname{Ran} P)^\perp$. Hence the $E$ in (1) is the unique subspace determined by $P$.
3. (The other side) If $P \circ P = P$ and $P$ is self-adjoint, then so is $i_V - P$, and $i_V - P = \operatorname{proj}_{(\operatorname{Ran} P)^\perp}$. Here $i_V - P$ is the difference in the space of linear maps.
4. (Matrices) Let $n$ be a natural number, let $M$ be an $n \times n$ matrix, and give $\mathbb{R}^n$ the standard inner product. Then $M = [\operatorname{proj}_E]$ for some subspace $E$ of $\mathbb{R}^n$ exactly when the matrix product $MM$ equals $M$ and $M$ is symmetric. In that case $E = \operatorname{Col} M$.
:::

## 직관

직교사영 $\operatorname{proj}_E$는 두 번 써도 한 번 쓴 것과 같고(이미 $E$에 있는 벡터는 움직이지 않으므로), 내적 안에서 어느 쪽 자리에 두어도 같습니다. 이 항목은 이 두 성질만 있으면 거꾸로 직교사영이라는 것입니다. 사영하는 부분공간은 따로 주지 않아도 $P$의 상으로 정해집니다.

두 성질은 서로 다른 일을 합니다. $P \circ P = P$는 $P$가 상 $\operatorname{Ran} P$ 위의 벡터를 그대로 둔다는 것이고, 이것만으로는 "어느 방향으로 눌러 상에 내려놓는지"가 정해지지 않습니다. 비유하면 그림자를 만드는 빛의 방향이 비스듬해도 바닥 위의 물건의 그림자는 물건 자신입니다. 자기수반성은 그 방향이 상과 직교한다는 것, 곧 빛이 바닥에 수직으로 비친다는 것입니다. 증명에서는 $v - Pv$가 상의 원소 $Pu$와 직교한다는 것을 보일 때 두 성질을 한 번씩 씁니다.

자기수반이 아닌 멱등사상은 상이 같아도 비스듬히 누르는 사상이어서 직교사영이 아닐 수 있습니다(아래 반례). 대칭이지만 두 번 쓰면 달라지는 행렬도 직교사영이 아닙니다.

## 증명

:::idea
$P \circ P = P$이고 $P$가 자기수반이면, $E = \operatorname{Ran} P$에서 $Pv \in E$이고 $E$의 원소 $Pu$에 대해 $\langle v - Pv, Pu \rangle = \langle P(v - Pv), u \rangle = \langle Pv - Pv, u \rangle = 0$이므로 $Pv$는 $v$의 $E$로의 직교사영이다. 거꾸로는 3단원에서 보인 직교사영의 성질이다.
:::

:::hint
$E = \operatorname{Ran} P$로 두고 직교사영의 정의 "$w \in E$이고 $v - w \perp E$"를 $w = Pv$에 대해 확인합니다.
:::

:::hint
$\langle v - Pv, Pu \rangle$에서 $P$를 [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (1)로 왼쪽 자리로 옮깁니다.
:::

:::proof
아래에서 [[inner-product-space|내적과 내적공간]]의 번호는 "내적의 (1)"처럼, [[properties-of-orthogonal-projection|직교사영의 성질과 행렬]]의 번호는 "사영의 성질의 (1)"처럼, [[self-adjoint-map|자기수반사상과 대칭행렬]]의 번호는 "자기수반의 (1)"처럼 쓴다. $V$가 유한차원이므로 [[dimension-of-subspace|부분공간의 차원]]의 (1)에 의해 $V$의 모든 부분공간은 유한차원이고, 사영의 성질 항목을 쓸 수 있다.

**(1)의 증명.** ($\Rightarrow$) $P = \operatorname{proj}_E$라 하자. 사영의 성질의 (1)에 의해 $P \circ P = P$이고, 그 항목의 (2)에 의해 모든 $x, y$에서 $\langle Px, y \rangle = \langle x, Py \rangle$이므로 자기수반의 (1)에 의해 $P$는 자기수반이다.

($\Leftarrow$) $P \circ P = P$이고 $P$가 자기수반이라 하자. $E = \operatorname{Ran} P$로 두면 [[kernel-and-range|핵과 상]]의 (1)에 의해 $E$는 $V$의 부분공간이다. $v \in V$를 임의로 잡는다. $Pv \in E$이다. $E$의 원소는 모두 $Pu$ ($u \in V$) 꼴이고, 자기수반의 (1)과 [[linear-map|선형사상]]의 (T2)에 의해
$$
\begin{aligned}
\langle v - Pv, Pu \rangle &= \langle P(v - Pv), u \rangle \\
&= \langle Pv - P(Pv), u \rangle
\end{aligned}
$$
이다. $P(Pv) = (P \circ P)v = Pv$이므로 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B12)에 의해 $Pv - P(Pv) = 0_V$이고, 내적의 (2)에 의해 이 값은 $0$이다. 따라서 $v - Pv$는 $E$의 모든 원소와 직교하고([[orthogonal-vectors|직교]]의 정의), 직교사영의 정의에 의해 $Pv$는 $v$의 $E$로의 직교사영이다. 직교사영은 하나뿐이므로([[orthogonal-projection|직교사영]]의 (1)) 모든 $v$에서 $\operatorname{proj}_E v = Pv$이고, [[function|함수]]의 같음에 의해 $P = \operatorname{proj}_E$이다.

**(2)의 증명.** 사영의 성질의 (1)에 의해 $\operatorname{Ran} P = E$이고 $\operatorname{Ker} P = E^\perp$이다. 두 부분공간 $E$, $E'$에서 $P = \operatorname{proj}_E = \operatorname{proj}_{E'}$이면 $E = \operatorname{Ran} P = E'$이다.

**(3)의 증명.** (1)에 의해 $P = \operatorname{proj}_E$이고 (2)에 의해 $E = \operatorname{Ran} P$이다. [[orthogonal-complement|직교 여공간]]의 (6)에 의해 모든 $v$에서 $\operatorname{proj}_{E^\perp} v = v - Pv = (i_V - P)v$이므로 함수의 같음에 의해 $i_V - P = \operatorname{proj}_{E^\perp}$이다. $E^\perp$는 $V$의 부분공간이므로(직교 여공간의 (1)) (1)의 ($\Rightarrow$)에 의해 $i_V - P$는 두 번 합성해도 같고 자기수반이다.

**(4)의 증명.** $T_M : \mathbb{R}^n \to \mathbb{R}^n$은 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)의 선형사상이고, [[dimension|차원]]의 (4)에 의해 $\mathbb{R}^n$은 유한차원이다.

($\Rightarrow$) $M = [\operatorname{proj}_E]$이면 사영의 성질의 (5)에 의해 $M^T = M$이고 $MM = M$이다.

($\Leftarrow$) $MM = M$이고 $M^T = M$이라 하자. 자기수반의 (2)에 의해 $T_M$은 자기수반이다. [[matrix-product|행렬의 곱]]의 (1)에 의해 $T_M \circ T_M = T_{MM} = T_M$이다. (1)과 (2)에 의해 $T_M = \operatorname{proj}_E$이고 $E = \operatorname{Ran} T_M$이며, [[rank-of-a-matrix|행렬의 계수]]의 정의 뒤 문장에 의해 $\operatorname{Ran} T_M = \operatorname{Col} M$이다. [[matrix-of-a-linear-map|선형사상의 행렬]]의 (2)에 의해 $[\operatorname{proj}_E] = [T_M] = M$이다.

마지막 문장: $M = [\operatorname{proj}_E]$이면 선형사상의 행렬의 (1)에 의해 $\operatorname{proj}_E = T_{[\operatorname{proj}_E]} = T_M$이고, (2)에 의해 $E = \operatorname{Ran} T_M = \operatorname{Col} M$이다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ³ 의 평면 위로의 직교사영이 되는 대칭 멱등행렬]
$M = \dfrac{1}{2}\begin{pmatrix} 1 & 0 & -1 \\ 0 & 2 & 0 \\ -1 & 0 & 1 \end{pmatrix}$이라 합시다. $(j, k)$ 성분과 $(k, j)$ 성분이 같으므로 $M$은 대칭입니다. $MM$의 성분을 행과 열의 곱으로 계산하면 $(1, 1)$ 성분은 $\tfrac{1 + 0 + 1}{4} = \tfrac{1}{2}$, $(1, 3)$ 성분은 $\tfrac{-1 + 0 - 1}{4} = -\tfrac{1}{2}$, $(2, 2)$ 성분은 $\tfrac{0 + 4 + 0}{4} = 1$, $(1, 2)$ 성분은 $\tfrac{0 + 0 + 0}{4} = 0$이고, 나머지 성분도 같은 계산으로 $M$의 성분과 같습니다. 곧 $MM = M$이므로 (4)에 의해 $M$은 $E = \operatorname{Col} M$ 위로의 직교사영의 행렬입니다.

$M$의 열은 $\bigl(\tfrac{1}{2}, 0, -\tfrac{1}{2}\bigr)$, $(0, 1, 0)$, $\bigl(-\tfrac{1}{2}, 0, \tfrac{1}{2}\bigr)$이므로 $E = \operatorname{span}((1, 0, -1), (0, 1, 0))$, 곧 $x_1 + x_3 = 0$인 평면입니다. 확인해 보면 $v = e_1$에서 $Me_1 = \bigl(\tfrac{1}{2}, 0, -\tfrac{1}{2}\bigr) \in E$이고, $e_1 - Me_1 = \bigl(\tfrac{1}{2}, 0, \tfrac{1}{2}\bigr)$은 $(1, 0, -1)$, $(0, 1, 0)$과의 내적이 모두 $0$이어서 $E$와 직교합니다.
:::

:::counterexample[대칭이 아닌 멱등행렬]
$M = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$이면 $MM = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix} = M$이지만, $(1, 2)$ 성분 $1$과 $(2, 1)$ 성분 $0$이 달라 대칭이 아닙니다. $\operatorname{Col} M = \operatorname{span}(e_1)$이고, $v = e_2$에서 $Mv = (1, 0)$인데 $v - Mv = (-1, 1)$은 $e_1$과의 내적이 $-1$이어서 $\operatorname{span}(e_1)$과 직교하지 않습니다. 따라서 $T_M$은 $\operatorname{span}(e_1)$ 위로의 직교사영이 아니고, (2)에 의해 다른 부분공간 위로의 직교사영일 수도 없습니다. $T_M$은 $e_2$를 비스듬히 $e_1$ 위로 보냅니다.
:::

:::counterexample[멱등이 아닌 대칭행렬]
$M = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$은 대칭이지만 $MM = \begin{pmatrix} 2 & 2 \\ 2 & 2 \end{pmatrix} \ne M$이므로 (4)에 의해 어느 부분공간 위로의 직교사영의 행렬도 아닙니다. 실제로 $\operatorname{Col} M = \operatorname{span}((1, 1))$의 원소 $(1, 1)$을 $M$이 $(2, 2)$로 보내므로, 그 부분공간 위의 벡터를 그대로 두지 않습니다.
:::

## 확인 질문

:::check[영사상과 항등함수 $i_V$는 각각 어느 부분공간 위로의 직교사영인가?]
둘 다 두 번 합성해도 같고 [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (4)에 의해 자기수반이므로 (1)에 의해 직교사영입니다. (2)에 의해 영사상은 상 $\{0_V\}$ 위로의, $i_V$는 상 $V$ 위로의 직교사영입니다.
:::

:::check[$P$가 $V$의 부분공간 $E$ 위로의 직교사영이면 $i_V - P$의 핵과 상은 무엇인가?]
(3)에 의해 $i_V - P = \operatorname{proj}_{E^\perp}$이므로 (2)에 의해 그 상은 $E^\perp$이고 핵은 $(E^\perp)^\perp$이며, [[orthogonal-complement|직교 여공간]]의 (5)에 의해 이것은 $E$입니다.
:::
