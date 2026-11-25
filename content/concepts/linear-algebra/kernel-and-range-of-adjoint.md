---
title: 상과 핵의 직교 관계
title_en: Kernel and Range of the Adjoint
aliases: [기본 부분공간의 직교 관계, 수반사상의 핵과 상, 네 기본 부분공간, fundamental subspaces, kernel and range of the adjoint, rank of the adjoint]
kind: theorem
field: linear-algebra
msc: ["15A04", "15A63"]
level: undergrad
summary: 유한차원 내적공간 사이의 선형사상 T 에 대하여 수반사상의 핵은 T 의 상의 직교 여공간이고, T 의 핵은 수반사상의 상의 직교 여공간이며, 두 상은 각각 상대편 핵의 직교 여공간이다. 따라서 T 와 수반사상의 계수는 같고, T 가 단사인 것은 수반사상이 전사일 때이다. 행렬로는 전치행렬의 사상의 핵이 열공간의 직교 여공간이고, 행 계수와 열 계수가 같다는 것이 다시 나온다.
requires: [function, injective-surjective-bijective, linear-map, kernel-and-range, injective-iff-trivial-kernel, subspace, dimension, dimension-of-subspace, rank-and-nullity, rank-nullity-theorem, matrix, transpose, matrix-vector-product, rank-of-a-matrix, row-rank-equals-column-rank, inner-product-space, standard-inner-product, orthogonal-vectors, orthogonal-complement, kernel-of-transpose-product, adjoint-map]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 5장 Inner product spaces 5절 Adjoint of a linear transformation. Fundamental subspaces revisited. 의 5.2 Relation between fundamental subspaces — Theorem 5.1 과 Remark, p.143, 증명 p.144; 5.3 The "essential" part of a linear transformation, pp.144–145. 2장 7절 Fundamental subspaces of a matrix. Rank. 의 Theorem 7.1 (The Rank Theorem), p.64. 5장 2절 연습문제 2.2, 2.5, pp.128–129. 8장 3절의 3.2 Annihilators and relations between fundamental subspaces, Theorem 3.7, p.231
    checked: original
    note: "(1)–(4)는 출처 Theorem 5.1(p.143)의 1–4 이다. 출처 Theorem 5.1 의 가정은 'an operator acting from one inner product space to another' 이다. 이 항목은 수반사상 항목을 따라 V, W 를 유한차원으로 둔다. 출처의 증명(p.144)은 (E⊥)⊥ = E 로 1 과 3, 2 와 4 를 잇고, 2 를 A* 에 쓴 1 로 보며((A*)* = A), 1 을 행렬 증명과 '좌표 없는' 증명((x, Ay) = (A*x, y) 와 Lemma 1.4) 두 가지로 보인다. 이 항목은 좌표 없는 증명을 따랐고, (E⊥)⊥ = E 는 직교 여공간 항목의 (5)를 인용했다(출처는 이것을 5장 3절 연습문제 3.12(p.134)로 둔다). (5)의 rank T* = rank T 는 출처 5.3(pp.144–145)이 A 를 Ran A* 로 제한한 사상이 Ran A 로의 동형사상이라는 것에서 끌어내는 'rank A = rank A*' 와 같은 결론이다. 이 항목은 (4)와 직교 여공간의 차원(직교 여공간 항목의 (4))과 차원 정리로 보였고, 출처 5.3 의 동형사상은 싣지 않았다(출처는 그것을 'essential part' 라 부르고 이 이름이 a non-standard terminology 라고 적는다). (5)의 둘째 식은 출처 2장 7절 Theorem 7.2 의 2(p.64)가 m × n 행렬에 대해 적는 dim Ker Aᵀ + rank A = m 을 사상으로 옮긴 것과 같은 꼴이고, 확인 질문 '$\\dim V = 3$, $\\dim W = 5$이고 $\\operatorname{rank} T = 2$이면 $\\operatorname{Ker} T^*$의 차원은 무엇인가?'도 같은 계산이다. (6)의 단사·전사의 관계는 (1)–(4)에서 바로 나오는 것을 이 항목이 진술에 둔 것이다. (7)의 rank Aᵀ = rank A 는 출처 2장 7절 Theorem 7.1 (The Rank Theorem, p.64)이고, 출처 Theorem 5.1 뒤의 Remark(p.143)는 2장 7절의 기본 부분공간을 Aᵀ 로 정의했으며 실수에서는 A* 와 차이가 없다고 적는다. (7)의 첫 식은 이 강의 3단원 'AᵀA 의 핵과 가역성' 항목의 (5)와 같은 내용이다. 출처 8장 Theorem 3.7(p.231)은 쌍대공간의 annihilator 로 같은 네 식을 다시 진술한다. 예시 'ℝ² 에서 ℝ³ 으로 가는 계수 1 인 사상'은 출처 5장 2절 연습문제 2.2(p.128)의 (Ran Aᵀ)⊥, (Ran A)⊥ 를 기술하라는 물음과 연습문제 2.5(p.129)를 수로 푼 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(출처 검색 표본, 메모의 진술 번호 대조 — 어긋난 번호 둘을 고쳤다). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$V$, $W$가 [[dimension|유한차원]]인 [[inner-product-space|내적공간]]이고 $T : V \to W$가 [[linear-map|선형사상]]이며, $T^* : W \to V$는 [[adjoint-map|수반사상]]이라 하자. 핵 $\operatorname{Ker}$와 상 $\operatorname{Ran}$은 [[kernel-and-range|핵과 상]]의 것, 직교 여공간 $S^\perp$는 [[orthogonal-complement|직교 여공간]]의 것, 계수 $\operatorname{rank}$와 퇴화차수 $\operatorname{nullity}$는 [[rank-and-nullity|계수와 퇴화차수]]의 것이다.

1. $\operatorname{Ker} T^* = (\operatorname{Ran} T)^\perp$이다. ($W$의 부분집합끼리의 같음이다.)
2. $\operatorname{Ker} T = (\operatorname{Ran} T^*)^\perp$이다. ($V$의 부분집합끼리의 같음이다.)
3. $\operatorname{Ran} T = (\operatorname{Ker} T^*)^\perp$이다.
4. $\operatorname{Ran} T^* = (\operatorname{Ker} T)^\perp$이다.
5. (계수) $\operatorname{rank} T^* = \operatorname{rank} T$이고 $\operatorname{nullity} T^* = \dim W - \operatorname{rank} T$이다.
6. (단사와 전사) $T$가 [[injective-surjective-bijective|단사]]인 것은 정확히 $T^* : W \to V$가 전사일 때이다. $T : V \to W$가 전사인 것은 정확히 $T^*$가 단사일 때이다.
7. (행렬) $m$, $n$이 자연수이고 $A$가 $m \times n$ [[matrix|행렬]]이며, $\mathbb{R}^n$, $\mathbb{R}^m$에 [[standard-inner-product|표준내적]]을 주자. [[matrix-vector-product|행렬과 벡터의 곱]]의 사상 $T_A$, $T_{A^T}$와 열공간 $\operatorname{Col}$, 계수는 [[rank-of-a-matrix|행렬의 계수]]의 것이고, 행공간 $\operatorname{Row} A$는 [[row-rank-equals-column-rank|행 계수와 열 계수]]의 것이다. 그러면
   $$
   \begin{aligned}
   \operatorname{Ker} T_{A^T} &= (\operatorname{Col} A)^\perp, \\
   \operatorname{Ker} T_A &= (\operatorname{Row} A)^\perp, \\
   \operatorname{Col} A &= (\operatorname{Ker} T_{A^T})^\perp, \\
   \operatorname{Row} A &= (\operatorname{Ker} T_A)^\perp
   \end{aligned}
   $$
   이고 $\operatorname{rank} A^T = \operatorname{rank} A$이다. 첫 식은 [[kernel-of-transpose-product|AᵀA 의 핵과 가역성]]의 (5)와 같고, 마지막 식은 [[row-rank-equals-column-rank|행 계수와 열 계수]]의 (2)와 같다.
:::

:::english
Let $V$, $W$ be finite-dimensional inner product spaces, let $T : V \to W$ be a linear map, and let $T^* : W \to V$ be its adjoint. The kernel $\operatorname{Ker}$ and range $\operatorname{Ran}$ are those of the entry on kernel and range, the orthogonal complement $S^\perp$ is that of the entry on orthogonal complements, and rank and nullity are those of the entry on rank and nullity.

1. $\operatorname{Ker} T^* = (\operatorname{Ran} T)^\perp$ (an equality of subsets of $W$).
2. $\operatorname{Ker} T = (\operatorname{Ran} T^*)^\perp$ (an equality of subsets of $V$).
3. $\operatorname{Ran} T = (\operatorname{Ker} T^*)^\perp$.
4. $\operatorname{Ran} T^* = (\operatorname{Ker} T)^\perp$.
5. (Rank) $\operatorname{rank} T^* = \operatorname{rank} T$ and $\operatorname{nullity} T^* = \dim W - \operatorname{rank} T$.
6. (Injective and surjective) $T$ is injective exactly when $T^* : W \to V$ is surjective. $T : V \to W$ is surjective exactly when $T^*$ is injective.
7. (Matrices) Let $m$, $n$ be natural numbers, let $A$ be an $m \times n$ matrix, and give $\mathbb{R}^n$, $\mathbb{R}^m$ the standard inner products. The maps $T_A$, $T_{A^T}$ of the matrix-vector product, the column space $\operatorname{Col}$ and the rank are those of the entry on the rank of a matrix, and the row space $\operatorname{Row} A$ is that of the entry on row rank and column rank. Then
   $$
   \begin{aligned}
   \operatorname{Ker} T_{A^T} &= (\operatorname{Col} A)^\perp, \\
   \operatorname{Ker} T_A &= (\operatorname{Row} A)^\perp, \\
   \operatorname{Col} A &= (\operatorname{Ker} T_{A^T})^\perp, \\
   \operatorname{Row} A &= (\operatorname{Ker} T_A)^\perp,
   \end{aligned}
   $$
   and $\operatorname{rank} A^T = \operatorname{rank} A$. The first equality is the same as item (5) of the entry on the kernel and invertibility of AᵀA, and the last is the same as item (2) of the entry on row rank and column rank.
:::

## 직관

$T$와 $T^*$에서 네 부분공간이 나옵니다. $V$ 안의 $\operatorname{Ker} T$와 $\operatorname{Ran} T^*$, $W$ 안의 $\operatorname{Ran} T$와 $\operatorname{Ker} T^*$입니다. 이 항목은 같은 공간 안의 두 부분공간이 서로의 직교 여공간이라는 것을 말합니다. 비유하면 $W$의 원소 $w$가 $T^*$로 $0$이 된다는 것은 "$T$가 만들어 내는 어떤 벡터로 재어도 $w$ 방향의 성분이 $0$"이라는 것입니다. 수반사상의 정의 $\langle Tv, w \rangle = \langle v, T^* w \rangle$에서 오른쪽이 모든 $v$에서 $0$인 것과 왼쪽이 모든 $v$에서 $0$인 것이 같기 때문입니다((1)).

(1)을 $T^*$에 쓰면 $(T^*)^* = T$이므로 (2)가 나오고, 유한차원 부분공간의 직교 여공간을 두 번 취하면 제자리로 오므로 (3)과 (4)가 나옵니다. (4)와 직교 여공간의 차원 공식에서 $\operatorname{Ran} T^*$의 차원은 $\dim V - \dim \operatorname{Ker} T$이고, 이것은 차원 정리에 의해 $\operatorname{rank} T$입니다. 그래서 $T$와 $T^*$의 계수는 같습니다((5)). $V$와 $W$의 차원이 달라도 계수는 같고, 핵의 차원은 $\dim V - \operatorname{rank} T$와 $\dim W - \operatorname{rank} T$여서 정확히 $\dim V \ne \dim W$일 때 다릅니다.

행렬에서는 $T_A$의 수반사상이 $T_{A^T}$이므로 이 항목이 행렬의 네 기본 부분공간, 곧 열공간, 행공간, $T_A$의 핵, $T_{A^T}$의 핵 사이의 관계가 됩니다((7)). 강의 "선형대수"의 [[row-rank-equals-column-rank|행 계수와 열 계수]]가 증명한 "행 계수와 열 계수는 같다"도 여기서 내적으로 다시 얻습니다.

## 증명

:::idea
$w \in \operatorname{Ker} T^*$는 모든 $v$에서 $\langle v, T^* w \rangle = 0$, 곧 $\langle Tv, w \rangle = 0$과 같고, 이것이 $w \perp \operatorname{Ran} T$이다. 나머지는 이것을 $T^*$에 쓰고 직교 여공간을 두 번 취하는 것과 차원을 세는 것이다.
:::

:::hint
[[inner-product-space|내적과 내적공간]]의 (5)로 $T^* w = 0_V$를 "모든 $v$와의 내적이 $0$"으로 바꿉니다.
:::

:::hint
(3)과 (4)에는 [[orthogonal-complement|직교 여공간]]의 (5)를, (5)에는 그 항목의 (4)와 [[rank-nullity-theorem|차원 정리]]를 씁니다.
:::

:::proof
아래에서 [[inner-product-space|내적과 내적공간]]의 번호는 "내적의 (1)"처럼, [[orthogonal-complement|직교 여공간]]의 번호는 "직교 여공간의 (1)"처럼, [[adjoint-map|수반사상]]의 번호는 "수반의 (1)"처럼 줄여 쓴다. [[kernel-and-range|핵과 상]]의 (1)에 의해 $\operatorname{Ker} T$, $\operatorname{Ran} T^*$는 $V$의 부분공간이고 $\operatorname{Ran} T$, $\operatorname{Ker} T^*$는 $W$의 부분공간이며, [[dimension-of-subspace|부분공간의 차원]]의 (1)에 의해 모두 유한차원이다.

**(1)의 증명.** $w \in W$라 하자. 내적의 (5)의 첫 문장과 내적의 조건 (i)에 의해 $T^* w = 0_V$인 것은 정확히 모든 $v \in V$에서 $\langle v, T^* w \rangle = 0$일 때이다. 수반사상의 정의에 의해 $\langle v, T^* w \rangle = \langle Tv, w \rangle$이고, 내적의 조건 (i)에 의해 이것은 $\langle w, Tv \rangle$이다. $\operatorname{Ran} T$의 원소는 정확히 $Tv$ ($v \in V$) 꼴이므로, 모든 $v$에서 $\langle w, Tv \rangle = 0$인 것은 정확히 $\operatorname{Ran} T$의 모든 원소 $s$에서 $\langle w, s \rangle = 0$일 때, 곧 직교 여공간의 정의에 의해 $w \in (\operatorname{Ran} T)^\perp$일 때이다. 따라서 $w \in \operatorname{Ker} T^*$인 것은 정확히 $w \in (\operatorname{Ran} T)^\perp$일 때이다.

**(2)의 증명.** 수반의 (1)에 의해 $T^* : W \to V$는 유한차원 내적공간 사이의 선형사상이므로 (1)을 $T^*$에 쓸 수 있고, $\operatorname{Ker} (T^*)^* = (\operatorname{Ran} T^*)^\perp$이다. 수반의 (3)의 (iii)에 의해 $(T^*)^* = T$이다.

**(3)의 증명.** $\operatorname{Ran} T$는 $W$의 유한차원 부분공간이므로 직교 여공간의 (5)에 의해 $\operatorname{Ran} T = \bigl((\operatorname{Ran} T)^\perp\bigr)^\perp$이고, (1)에 의해 이것은 $(\operatorname{Ker} T^*)^\perp$이다.

**(4)의 증명.** 같은 방식으로 $\operatorname{Ran} T^*$는 $V$의 유한차원 부분공간이므로 직교 여공간의 (5)와 (2)에 의해 $\operatorname{Ran} T^* = \bigl((\operatorname{Ran} T^*)^\perp\bigr)^\perp = (\operatorname{Ker} T)^\perp$이다.

**(5)의 증명.** 직교 여공간의 (4)를 $V$의 부분공간 $\operatorname{Ker} T$에 쓰면 $\dim \operatorname{Ker} T + \dim (\operatorname{Ker} T)^\perp = \dim V$이다. (4)에 의해 $(\operatorname{Ker} T)^\perp = \operatorname{Ran} T^*$이므로 $\operatorname{nullity} T + \operatorname{rank} T^* = \dim V$이다. [[rank-nullity-theorem|차원 정리]]에 의해 $\operatorname{nullity} T + \operatorname{rank} T = \dim V$이므로 두 식을 비교하면 $\operatorname{rank} T^* = \operatorname{rank} T$이다. 차원 정리를 $T^* : W \to V$에 쓰면 $\operatorname{nullity} T^* = \dim W - \operatorname{rank} T^* = \dim W - \operatorname{rank} T$이다.

**(6)의 증명.** [[injective-iff-trivial-kernel|단사인 선형사상과 핵]]의 (1)에 의해 $T$가 단사인 것은 정확히 $\operatorname{Ker} T = \{0_V\}$일 때이고, [[kernel-and-range|핵과 상]]의 (3)에 의해 $T^*$가 전사인 것은 정확히 $\operatorname{Ran} T^* = V$일 때이다. $\operatorname{Ker} T = \{0_V\}$이면 (4)와 직교 여공간의 (1)에 의해 $\operatorname{Ran} T^* = \{0_V\}^\perp = V$이다. 거꾸로 $\operatorname{Ran} T^* = V$이면 (2)와 직교 여공간의 (1)에 의해 $\operatorname{Ker} T = V^\perp = \{0_V\}$이다. 둘째 문장도 같다. $\operatorname{Ker} T^* = \{0_W\}$이면 (3)에 의해 $\operatorname{Ran} T = \{0_W\}^\perp = W$이고, 거꾸로 $\operatorname{Ran} T = W$이면 (1)에 의해 $\operatorname{Ker} T^* = W^\perp = \{0_W\}$이다. 이것을 단사인 선형사상과 핵의 (1)과 핵과 상의 (3)으로 단사와 전사로 바꾸면 된다.

**(7)의 증명.** [[dimension|차원]]의 (4)에 의해 $\mathbb{R}^n$, $\mathbb{R}^m$은 유한차원이고, 수반의 (4)에 의해 $(T_A)^* = T_{A^T}$이다. [[rank-of-a-matrix|행렬의 계수]]의 정의 뒤 문장에 의해 $\operatorname{Ran} T_A = \operatorname{Col} A$이고, 같은 문장을 $n \times m$ 행렬 $A^T$에 쓰면 $\operatorname{Ran} T_{A^T} = \operatorname{Col} A^T$이며, [[row-rank-equals-column-rank|행 계수와 열 계수]]의 (1)에 의해 이것은 $\operatorname{Row} A$이다. 이것을 $T = T_A$에 대한 (1)–(4)에 넣으면 네 식이 나온다. 또 행렬의 계수의 정의와 (5)에 의해 $\operatorname{rank} A^T = \operatorname{rank} T_{A^T} = \operatorname{rank} (T_A)^* = \operatorname{rank} T_A = \operatorname{rank} A$이다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ² 에서 ℝ³ 으로 가는 계수 1 인 사상]
$A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \\ 0 & 0 \end{pmatrix}$이라 하면 $T_A : \mathbb{R}^2 \to \mathbb{R}^3$이고 $A^T = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 4 & 0 \end{pmatrix}$입니다. 둘째 열이 첫째 열의 $2$배이므로 $\operatorname{Col} A = \operatorname{span}((1, 2, 0))$이고 계수는 $1$입니다.

행 규칙에 의해 $A^T z = (z_1 + 2 z_2, 2 z_1 + 4 z_2)$이므로 $A^T z = 0$인 것은 정확히 $z_1 = -2 z_2$일 때이고, $\operatorname{Ker} T_{A^T}$는 $z_2 (-2, 1, 0) + z_3 (0, 0, 1)$ 꼴의 벡터 전체입니다. $(-2, 1, 0)$과 $(0, 0, 1)$은 모두 $(1, 2, 0)$과의 내적이 $-2 + 2 + 0 = 0$, $0$이어서 $\operatorname{Col} A$와 직교하고, (1)이 말하는 대로 $\operatorname{Ker} T_{A^T} = (\operatorname{Col} A)^\perp$입니다. 그 차원 $2$는 (5)의 $\dim \mathbb{R}^3 - \operatorname{rank} A = 3 - 1$과 맞습니다.

한편 $Ax = (x_1 + 2 x_2, 2 x_1 + 4 x_2, 0)$이므로 $\operatorname{Ker} T_A = \operatorname{span}((-2, 1))$이고, $\operatorname{Row} A$는 행 $(1, 2)$, $(2, 4)$, $(0, 0)$의 생성 $\operatorname{span}((1, 2))$입니다. $\langle (-2, 1), (1, 2) \rangle = 0$이어서 두 부분공간은 $\mathbb{R}^2$ 안에서 서로의 직교 여공간이고, $\operatorname{rank} A^T = 1 = \operatorname{rank} A$입니다.
:::

:::example[단사인 사상의 수반사상은 전사이다]
$\mathbb{R}$에 실수의 곱을 내적으로 주고([[standard-inner-product|ℝⁿ 의 표준내적]]의 (6)) $\mathbb{R}^2$에 표준내적을 줍니다. 실수 $t$에서의 값이 $(t, 2t)$인 선형사상 $T : \mathbb{R} \to \mathbb{R}^2$의 수반사상은 $y$에서의 값이 $y_1 + 2 y_2$인 사상 $S : \mathbb{R}^2 \to \mathbb{R}$입니다. 모든 $t$, $y$에서 $\langle Tt, y \rangle = t y_1 + 2t y_2 = \langle t, Sy \rangle$이므로 수반사상의 정의를 만족하기 때문입니다.

$T$는 $(t, 2t) = (0, 0)$이면 $t = 0$이므로 단사이고, $S$는 실수 $c$마다 $y = (c, 0)$에서 $Sy = c$이므로 전사입니다((6)). 그러나 $S$는 단사가 아닙니다. $\operatorname{Ker} S$는 $y_1 = -2 y_2$인 $y$ 전체, 곧 $\operatorname{span}((-2, 1))$이고, 이것은 (1)이 말하는 대로 $\operatorname{Ran} T = \operatorname{span}((1, 2))$의 직교 여공간입니다.
:::

:::counterexample[T 와 T* 의 핵이 다른 예]
$A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$이면 $Ax = (x_2, 0)$, $A^T y = (0, y_1)$입니다. $\operatorname{Ker} T_A = \operatorname{span}(e_1)$이고 $\operatorname{Ker} T_{A^T} = \operatorname{span}(e_2)$이어서, $V = W = \mathbb{R}^2$인데도 두 핵은 다릅니다. (5)가 말하는 것은 두 핵의 차원이 같다는 것뿐이고(둘 다 $1$), 이 항목이 핵에 대해 말하는 것은 각 핵이 상대편 상의 직교 여공간이라는 것입니다. 실제로 $\operatorname{Ran} T_A = \operatorname{span}(e_1)$의 직교 여공간은 $\operatorname{span}(e_2) = \operatorname{Ker} T_{A^T}$입니다.
:::

## 확인 질문

:::check[$T : V \to W$가 영사상이면 (1)–(4)의 네 부분공간은 각각 무엇인가?]
[[adjoint-map|수반사상]]의 (3)의 (iv)에 의해 $T^*$도 영사상이므로 $\operatorname{Ker} T^* = W$, $\operatorname{Ran} T = \{0_W\}$, $\operatorname{Ker} T = V$, $\operatorname{Ran} T^* = \{0_V\}$입니다. [[orthogonal-complement|직교 여공간]]의 (1)에 의해 $\{0_W\}^\perp = W$이고 $V^\perp = \{0_V\}$ 등이므로 네 식이 모두 맞습니다.
:::

:::check[$\dim V = 3$, $\dim W = 5$이고 $\operatorname{rank} T = 2$이면 $\operatorname{Ker} T^*$의 차원은 무엇인가?]
(5)에 의해 $\operatorname{nullity} T^* = 5 - 2 = 3$입니다. 같은 계수에서 $\operatorname{nullity} T = 3 - 2 = 1$이므로, 두 핵의 차원은 다를 수 있습니다.
:::
