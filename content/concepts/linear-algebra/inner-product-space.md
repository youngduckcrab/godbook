---
title: 내적과 내적공간
title_en: Inner Product and Inner Product Space
aliases: [내적, 내적공간, 실내적공간, 내적의 조건, inner product, inner product space, real inner product space]
kind: definition
field: linear-algebra
msc: ["15A63"]
level: undergrad
summary: 실벡터공간 V 위의 내적은 V × V 에서 ℝ 로의 함수로 대칭이고 첫째 자리에 대해 선형이며 양의 정부호인 것이다. 둘째 자리에 대해서도 선형이고, 일차결합의 내적을 계수로 펼칠 수 있으며, 부분공간에 제한해도 내적이다. 모든 벡터와의 내적으로 벡터가 정해진다.
requires: [set, cartesian-product, function, adding-or-removing-an-element, real-number-arithmetic, real-order-axioms, order-properties-of-reals, vector-space, vector-space-basic-properties, real-function-space, subspace, finite-sum-of-vectors, linear-combination-and-span, linear-map]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 5장 1절, 1.3 Inner product spaces 의 성질 1–4 와 정의, p.119; 1.4 Properties of inner product 의 성질 2′, (0, x) = (x, 0) = 0, Lemma 1.4, Corollary 1.5, Corollary 1.6, pp.120–121; 1절 연습문제 1.8, p.125
    checked: original
    note: "출처는 1.3(p.119)에서 실 또는 복소 벡터공간 위의 내적을 성질 1–4(대칭, 첫째 자리의 선형성, Non-negativity (x, x) ≥ 0, Non-degeneracy '(x, x) = 0 인 것은 정확히 x = 0 일 때')를 만족하는 함수로 정하고, 내적과 함께 있는 공간을 inner product space 라 한다. 이 항목은 실수만 쓰고, 출처의 성질 3 과 4 를 조건 (iii) 하나로 묶어 '양의 정부호'라 부른다. 출처 5장은 내적의 조건에 positive definite 라는 이름을 붙이지 않는다(검색어 'positive definite' 로 찾은 곳은 6장 3.1절(p.171) 이후의 연산자·이차형식·행렬에 관한 것이다). 출처는 내적을 (x, y) 로 쓰고, 2절 연습문제 2.4(p.129)는 새로 정하는 내적에 ⟨x, y⟩ 를 쓴다. 이 사이트는 순서쌍·열린구간과 겹치지 않게 늘 ⟨x, y⟩ 로 쓴다. (1)의 첫 등식은 출처 1.4(p.120)의 성질 2′ 이고 증명도 같다(성질 1 과 2 로 계산). (1)의 선형사상 꼴과 (2)의 음수·차는 이 사이트가 진술에 올렸다. (2)의 첫 문장은 출처 p.120 이 '성질 2 에서 나온다'고만 적는 (0, x) = (x, 0) = 0 이다. (3)의 일차결합의 내적은 출처가 1.4절에서 명제로 적지 않고 2절 Lemma 2.3 의 증명(p.126)처럼 계산 안에서 쓴다. 이 항목은 선형사상의 (T5)로 증명했다. (4)의 부분공간에 제한한 내적은 출처에 명제로 없다(검색어 'restrict' 15건은 모두 연산자의 제한, 'inherit' 2건은 부분공간의 덧셈·스칼라배, 'induced' 0건, 'subspace … inner product'·'inner product … subspace' 6건은 정의 3.1 의 머리말·연습문제 3.8·색인이다). 출처는 6장 1절 Theorem 1.1 의 증명(p.164)처럼 부분공간 E 에서 정규직교 기저를 잡을 때 이것을 말없이 쓴다. (5)의 첫 문장은 출처 Lemma 1.4(p.120)이고 증명도 같다(y = x 를 넣는다). (5)의 둘째 문장과 (6)의 둘째 문장은 출처 1절 연습문제 1.8 의 b), c)(p.125)와 같다. (6)의 첫 문장은 출처 Corollary 1.5(p.121), 마지막 문장은 출처 Corollary 1.6(p.121)을 넓힌 것이다. 출처 Corollary 1.6 은 두 연산자 A, B : X → Y 에 대해 '모든 x ∈ X, y ∈ Y 에서 (Ax, y) = (Bx, y) 이면 A = B'라고 하고, 이 항목은 정의역이 아무 집합이고 선형이 아닌 함수에도 진술한다. 출처 1.3–1.4절은 V = {0} 을 따로 다루지 않는다(두 소절을 처음부터 끝까지 읽었다). (7)의 증명은 이 사이트가 썼다. 확인 질문 '내적공간 $V$의 벡터 $x$, $y$, $z$에서 $\\langle x, y \\rangle = 2$이고 $\\langle x, z \\rangle = -1$이면 $\\langle 3y - z, x \\rangle$는 무엇인가?'는 출처 1절 연습문제 1.3(p.124)이 주어진 노름과 내적의 값에서 성질만으로 다른 내적을 계산하게 하는 것, 연습문제 1.2 의 Remark(p.124)와 같은 발상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(증명 표본 통독, 출처 검색 표본). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$V$가 [[vector-space|벡터공간]]이라 하자(스칼라는 실수이다). [[cartesian-product|곱집합]] $V \times V$에서 $\mathbb{R}$로의 [[function|함수]]가 주어졌을 때 그 $(x, y)$에서의 값을 $\langle x, y \rangle$로 쓰고, 이 함수를 $\langle \cdot, \cdot \rangle$으로 쓴다. 함수 $\langle \cdot, \cdot \rangle : V \times V \to \mathbb{R}$가 $V$ 위의 **내적**(inner product)인 것은 정확히 다음 세 조건이 모두 성립할 때이다. 이 셋을 **내적의 조건** (i)–(iii)이라 부른다. 아래에서 $x$, $y$, $z$는 $V$의 임의의 원소이고 $\alpha$, $\beta$는 임의의 실수이며, 순서 $\le$는 [[real-order-axioms|실수의 순서]]의 것이다.

- (i) (대칭) $\langle x, y \rangle = \langle y, x \rangle$이다.
- (ii) (첫째 자리에 대한 선형성) $\langle \alpha x + \beta y, z \rangle = \alpha \langle x, z \rangle + \beta \langle y, z \rangle$이다.
- (iii) (양의 정부호) $0 \le \langle x, x \rangle$이고, $\langle x, x \rangle = 0$인 것은 정확히 $x = 0_V$일 때이다.

벡터공간 $V$와 $V$ 위의 내적의 순서쌍을 **내적공간**(inner product space)이라 한다. 내적이 문맥에서 분명하면 "내적공간 $V$"라고 줄여 말한다. 꺾쇠괄호는 늘 쉼표로 가른 두 자리에 쓴다.

다음이 성립한다. 아래에서 $V$는 내적공간이고 $x$, $x'$, $y$, $z$는 $V$의 임의의 원소, $\alpha$, $\beta$는 임의의 실수이다. $\mathbb{R}$은 [[real-function-space|실숫값 함수의 공간]]의 (2)에 의해 실수의 합과 곱으로 벡터공간이다.

1. (둘째 자리에 대한 선형성) $\langle z, \alpha x + \beta y \rangle = \alpha \langle z, x \rangle + \beta \langle z, y \rangle$이다. $y$를 고정하면, $x$에서의 값이 $\langle x, y \rangle$인 함수 $V \to \mathbb{R}$와 $x$에서의 값이 $\langle y, x \rangle$인 함수 $V \to \mathbb{R}$는 모두 [[linear-map|선형사상]]이다. 특히 $\langle x + x', y \rangle = \langle x, y \rangle + \langle x', y \rangle$, $\langle \alpha x, y \rangle = \alpha \langle x, y \rangle$, $\langle y, x + x' \rangle = \langle y, x \rangle + \langle y, x' \rangle$, $\langle y, \alpha x \rangle = \alpha \langle y, x \rangle$이다.
2. (영벡터, 음수, 차) $\langle 0_V, y \rangle = \langle y, 0_V \rangle = 0$이다. $\langle -x, y \rangle = \langle x, -y \rangle = -\langle x, y \rangle$이다. $\langle x - x', y \rangle = \langle x, y \rangle - \langle x', y \rangle$이고 $\langle y, x - x' \rangle = \langle y, x \rangle - \langle y, x' \rangle$이다.
3. (일차결합의 내적) $n \ge 0$, $m \ge 0$이 정수이고 $\alpha_1, \dots, \alpha_n$과 $\beta_1, \dots, \beta_m$이 실수의 열, $v_1, \dots, v_n$과 $w_1, \dots, w_m$이 $V$의 [[finite-sum-of-vectors|벡터의 열]]이라 하자.
   - (i) $\langle \alpha_1 v_1 + \cdots + \alpha_n v_n, y \rangle = \alpha_1 \langle v_1, y \rangle + \cdots + \alpha_n \langle v_n, y \rangle$이고 $\langle y, \alpha_1 v_1 + \cdots + \alpha_n v_n \rangle = \alpha_1 \langle y, v_1 \rangle + \cdots + \alpha_n \langle y, v_n \rangle$이다. 오른쪽은 $i$번째 항이 각각 $\alpha_i \langle v_i, y \rangle$, $\alpha_i \langle y, v_i \rangle$인 길이 $n$인 실수의 열의 합이다. 특히 $\langle v_1 + \cdots + v_n, y \rangle = \langle v_1, y \rangle + \cdots + \langle v_n, y \rangle$이다.
   - (ii) (두 자리 모두 일차결합) $x = \alpha_1 v_1 + \cdots + \alpha_n v_n$이고 $w = \beta_1 w_1 + \cdots + \beta_m w_m$이면 $\langle x, w \rangle = s_1 + \cdots + s_n$이다. 여기서 $s_i$는 $j$번째 항이 $(\alpha_i \beta_j) \langle v_i, w_j \rangle$인 길이 $m$인 실수의 열의 합 $s_i = (\alpha_i \beta_1)\langle v_i, w_1 \rangle + \cdots + (\alpha_i \beta_m)\langle v_i, w_m \rangle$이다.
4. (부분공간에 제한한 내적) $W$가 $V$의 [[subspace|부분공간]]이면 $W \times W \subseteq V \times V$이고, 내적의 $W \times W$로의 [[adding-or-removing-an-element|제한]] $\langle \cdot, \cdot \rangle|_{W \times W} : W \times W \to \mathbb{R}$는 ([[subspace|(P1)]]의 제한한 연산으로 본) 벡터공간 $W$ 위의 내적이다. 이 내적의 $(x, y)$에서의 값은 $\langle x, y \rangle$이다. 곧 $W$의 두 원소의 내적은 내적공간 $W$ 안에서 계산하든 $V$에서 계산하든 같으므로 같은 기호로 쓴다. 부분공간을 내적공간으로 볼 때는 언제나 이 내적을 쓴다.
5. (영벡터의 판정) $x = 0_V$인 것은 정확히 모든 $y \in V$에서 $\langle x, y \rangle = 0$일 때이다. 또 $V$를 [[linear-combination-and-span|생성]]하는 길이 $n \ge 0$인 열 $v_1, \dots, v_n$이 있으면, $x = 0_V$인 것은 정확히 모든 $k \in \{1, \dots, n\}$에서 $\langle x, v_k \rangle = 0$일 때이다. (i)에 의해 두 문장에서 $\langle x, y \rangle$, $\langle x, v_k \rangle$를 $\langle y, x \rangle$, $\langle v_k, x \rangle$로 바꾸어도 된다.
6. (같음의 판정) $x = x'$인 것은 정확히 모든 $y \in V$에서 $\langle x, y \rangle = \langle x', y \rangle$일 때이다. $V$를 생성하는 열 $v_1, \dots, v_n$이 있으면, $x = x'$인 것은 정확히 모든 $k$에서 $\langle x, v_k \rangle = \langle x', v_k \rangle$일 때이다. 또 $U$가 집합이고 $S, T : U \to V$가 함수이며 모든 $u \in U$와 모든 $y \in V$에서 $\langle S(u), y \rangle = \langle T(u), y \rangle$이면 $S = T$이다.
7. (영공간) $V = \{0_V\}$인 벡터공간 위에는 내적이 정확히 하나 있다. 그것은 하나뿐인 원소 $(0_V, 0_V)$에서의 값이 $0$인 함수이다.
:::

:::english
Let $V$ be a vector space (the scalars are real numbers). Given a function from the Cartesian product $V \times V$ to $\mathbb{R}$, write its value at $(x, y)$ as $\langle x, y \rangle$, and write the function itself as $\langle \cdot, \cdot \rangle$. The function $\langle \cdot, \cdot \rangle : V \times V \to \mathbb{R}$ is an **inner product** on $V$ exactly when the following three conditions all hold. We call them the **conditions for an inner product** (i)–(iii). Below, $x$, $y$, $z$ are arbitrary elements of $V$, $\alpha$, $\beta$ are arbitrary real numbers, and the order $\le$ is that of the real numbers.

- (i) (Symmetry) $\langle x, y \rangle = \langle y, x \rangle$.
- (ii) (Linearity in the first argument) $\langle \alpha x + \beta y, z \rangle = \alpha \langle x, z \rangle + \beta \langle y, z \rangle$.
- (iii) (Positive definiteness) $0 \le \langle x, x \rangle$, and $\langle x, x \rangle = 0$ exactly when $x = 0_V$.

An ordered pair consisting of a vector space $V$ and an inner product on $V$ is called an **inner product space**. When the inner product is clear from the context, we simply say "the inner product space $V$". Angle brackets are always used with two slots separated by a comma.

The following hold. Below, $V$ is an inner product space, $x$, $x'$, $y$, $z$ are arbitrary elements of $V$, and $\alpha$, $\beta$ are arbitrary real numbers. By item (2) of the entry on real function spaces, $\mathbb{R}$ is a vector space under the sum and product of real numbers.

1. (Linearity in the second argument) $\langle z, \alpha x + \beta y \rangle = \alpha \langle z, x \rangle + \beta \langle z, y \rangle$. If $y$ is fixed, the function $V \to \mathbb{R}$ whose value at $x$ is $\langle x, y \rangle$ and the function $V \to \mathbb{R}$ whose value at $x$ is $\langle y, x \rangle$ are both linear maps. In particular $\langle x + x', y \rangle = \langle x, y \rangle + \langle x', y \rangle$, $\langle \alpha x, y \rangle = \alpha \langle x, y \rangle$, $\langle y, x + x' \rangle = \langle y, x \rangle + \langle y, x' \rangle$ and $\langle y, \alpha x \rangle = \alpha \langle y, x \rangle$.
2. (Zero vector, negatives, differences) $\langle 0_V, y \rangle = \langle y, 0_V \rangle = 0$. $\langle -x, y \rangle = \langle x, -y \rangle = -\langle x, y \rangle$. $\langle x - x', y \rangle = \langle x, y \rangle - \langle x', y \rangle$ and $\langle y, x - x' \rangle = \langle y, x \rangle - \langle y, x' \rangle$.
3. (Inner products of linear combinations) Let $n \ge 0$ and $m \ge 0$ be integers, let $\alpha_1, \dots, \alpha_n$ and $\beta_1, \dots, \beta_m$ be sequences of real numbers, and let $v_1, \dots, v_n$ and $w_1, \dots, w_m$ be sequences of vectors in $V$.
   - (i) $\langle \alpha_1 v_1 + \cdots + \alpha_n v_n, y \rangle = \alpha_1 \langle v_1, y \rangle + \cdots + \alpha_n \langle v_n, y \rangle$ and $\langle y, \alpha_1 v_1 + \cdots + \alpha_n v_n \rangle = \alpha_1 \langle y, v_1 \rangle + \cdots + \alpha_n \langle y, v_n \rangle$. The right-hand sides are the sums of the sequences of $n$ real numbers whose $i$-th terms are $\alpha_i \langle v_i, y \rangle$ and $\alpha_i \langle y, v_i \rangle$, respectively. In particular $\langle v_1 + \cdots + v_n, y \rangle = \langle v_1, y \rangle + \cdots + \langle v_n, y \rangle$.
   - (ii) (Linear combinations in both arguments) If $x = \alpha_1 v_1 + \cdots + \alpha_n v_n$ and $w = \beta_1 w_1 + \cdots + \beta_m w_m$, then $\langle x, w \rangle = s_1 + \cdots + s_n$, where $s_i$ is the sum $s_i = (\alpha_i \beta_1)\langle v_i, w_1 \rangle + \cdots + (\alpha_i \beta_m)\langle v_i, w_m \rangle$ of the sequence of $m$ real numbers whose $j$-th term is $(\alpha_i \beta_j) \langle v_i, w_j \rangle$.
4. (Restriction to a subspace) If $W$ is a subspace of $V$, then $W \times W \subseteq V \times V$, and the restriction $\langle \cdot, \cdot \rangle|_{W \times W} : W \times W \to \mathbb{R}$ of the inner product to $W \times W$ is an inner product on the vector space $W$ (with the restricted operations of (P1)). Its value at $(x, y)$ is $\langle x, y \rangle$; that is, the inner product of two elements of $W$ is the same whether computed in the inner product space $W$ or in $V$, so we use the same symbol. Whenever a subspace is regarded as an inner product space, this inner product is used.
5. (Test for the zero vector) $x = 0_V$ exactly when $\langle x, y \rangle = 0$ for every $y \in V$. Moreover, if there is a sequence $v_1, \dots, v_n$ of length $n \ge 0$ spanning $V$, then $x = 0_V$ exactly when $\langle x, v_k \rangle = 0$ for every $k \in \{1, \dots, n\}$. By (i), in both sentences $\langle x, y \rangle$ and $\langle x, v_k \rangle$ may be replaced by $\langle y, x \rangle$ and $\langle v_k, x \rangle$.
6. (Test for equality) $x = x'$ exactly when $\langle x, y \rangle = \langle x', y \rangle$ for every $y \in V$. If there is a sequence $v_1, \dots, v_n$ spanning $V$, then $x = x'$ exactly when $\langle x, v_k \rangle = \langle x', v_k \rangle$ for every $k$. Moreover, if $U$ is a set, $S, T : U \to V$ are functions, and $\langle S(u), y \rangle = \langle T(u), y \rangle$ for every $u \in U$ and every $y \in V$, then $S = T$.
7. (The zero space) On a vector space $V = \{0_V\}$ there is exactly one inner product: the function whose value at the only element $(0_V, 0_V)$ is $0$.
:::

## 직관

$\mathbb{R}^2$나 $\mathbb{R}^3$에서 두 화살표의 길이와 사이각을 함께 재는 수로 배운 "점곱"을, 화살표가 아닌 벡터공간에서도 쓸 수 있도록 성질만 뽑아 정의한 것이 내적입니다. 정의에는 계산식이 없고 세 조건만 있습니다. 바꿔 넣어도 값이 같다는 것(대칭), 첫째 자리에 일차결합을 넣으면 값도 같은 일차결합이 된다는 것(선형성), 자기 자신과의 내적은 $0$ 이상이고 $0$이 되는 것은 영벡터뿐이라는 것(양의 정부호)입니다.

비유로, 두 사람의 취향이 얼마나 겹치는지 점수를 매기는 규칙을 생각해 볼 수 있습니다. 누가 먼저 오든 점수가 같아야 하고(대칭), 두 사람의 취향을 섞은 사람의 점수는 각자의 점수를 같은 비율로 섞은 것이어야 하며(선형성), 자기 자신과의 점수는 음수가 아니고 취향이 전혀 없는 사람만 $0$점이어야 합니다(양의 정부호). 비유와 다른 점은 서로 다른 두 벡터의 점수가 음수일 수도 있다는 것입니다. 조건 (iii)은 같은 벡터를 두 자리에 넣었을 때만 부호를 정합니다.

조건은 첫째 자리의 선형성만 요구하지만, 대칭 때문에 둘째 자리의 선형성이 따라옵니다((1)). 그래서 $y$를 고정한 함수 "$x$에서의 값이 $\langle x, y \rangle$"는 선형사상이고, 선형사상의 성질에서 영벡터와의 내적이 $0$이라는 것((2))과 일차결합의 내적을 계수로 펼칠 수 있다는 것((3))이 바로 나옵니다. (5)와 (6)은 "모든 벡터와의 내적을 알면 벡터가 정해진다"는 뜻입니다. 이것은 조건 (iii)에서 나옵니다. 모든 $y$와의 내적이 $0$이면 $y = x$로 둔 $\langle x, x \rangle$도 $0$이기 때문입니다. 한 벡터와의 내적만 같은 서로 다른 두 벡터는 있을 수 있습니다(아래 반례).

$V = \{0_V\}$이면 조건 (iii)의 "정확히 $x = 0_V$일 때"는 늘 참인 문장이 되어 버리고, 값이 $0$인 함수 하나가 내적입니다((7)). $V$에 영벡터가 아닌 벡터 $x$가 있으면 모든 값이 $0$인 함수는 $\langle x, x \rangle = 0$이 되어 내적이 아닙니다(아래 확인 질문).

## 성질의 증명

:::proof
아래에서 (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것, (V1)–(V8)은 [[vector-space|벡터공간]]의 것, (B1)–(B12)는 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 것, (T-합), (T-배), (T1)–(T5)는 [[linear-map|선형사상]]의 것, (H0)–(H7)은 [[finite-sum-of-vectors|벡터의 유한 합]]의 것이다. 벡터공간 $\mathbb{R}$([[real-function-space|실숫값 함수의 공간]]의 (2))에서 덧셈은 실수의 합, 스칼라배는 실수의 곱이고, 영벡터는 실수 $0$이며(벡터의 유한 합의 "실수의 합" 단락), 실수 $a$의 덧셈 역원은 (B2)에 의해 $a + w = 0$인 하나뿐인 실수 $w$이므로 (K8)의 (ii)에 의해 실수 $-a$이다. 따라서 $\mathbb{R}$에서 벡터공간의 뺄셈 $a + (-b)$는 실수의 뺄셈 $a - b$이다. 벡터의 유한 합의 진술에 따라 길이가 같고 모든 자리의 항이 같은 두 실수의 열은 같은 열이고, 같은 열의 합은 같다. 이것을 "같은 열의 합"이라 부른다.

**(1)의 증명.** 조건 (i), (ii), (i)을 차례로 쓰면 $\langle z, \alpha x + \beta y \rangle = \langle \alpha x + \beta y, z \rangle = \alpha \langle x, z \rangle + \beta \langle y, z \rangle = \alpha \langle z, x \rangle + \beta \langle z, y \rangle$이다.

$y$를 고정하자. 각 $x \in V$에 실수 $\langle x, y \rangle$가 하나씩 정해지므로 [[real-function-space|(G)]]에 의해 $x$에서의 값이 $\langle x, y \rangle$인 함수 $L : V \to \mathbb{R}$가 있다. 같은 방식으로 $x$에서의 값이 $\langle y, x \rangle$인 함수 $R : V \to \mathbb{R}$가 있다. 모든 $u, v \in V$와 실수 $\alpha$, $\beta$에서 조건 (ii)에 의해 $L(\alpha u + \beta v) = \alpha L(u) + \beta L(v)$이고, 앞 문단에 의해 $R(\alpha u + \beta v) = \alpha R(u) + \beta R(v)$이다. 오른쪽의 스칼라배와 덧셈은 $\mathbb{R}$의 것, 곧 실수의 곱과 합이다. (T3)에 의해 $L$과 $R$은 선형사상이다. 그러면 (T-합)과 (T-배)가 $L$과 $R$에 대해 성립하고, 이것이 마지막 문장의 네 등식이다.

**(2)의 증명.** (1)의 선형사상 $L$, $R$에 (T1)을 쓰면 $L(0_V) = 0$, $R(0_V) = 0$이므로 $\langle 0_V, y \rangle = 0$이고 $\langle y, 0_V \rangle = 0$이다. (T2)를 $L$에 쓰면 $L(-x) = -L(x)$, 곧 $\langle -x, y \rangle = -\langle x, y \rangle$이고, $L(x - x') = L(x) - L(x')$, 곧 $\langle x - x', y \rangle = \langle x, y \rangle - \langle x', y \rangle$이다. 오른쪽의 음수와 뺄셈은 위에서 본 대로 실수의 것이다. $y$를 고정한 $R$에 (T2)를 쓰면 $\langle y, -x \rangle = -\langle y, x \rangle$이고 $\langle y, x - x' \rangle = \langle y, x \rangle - \langle y, x' \rangle$이다. 앞의 등식에서 $x$와 $y$의 역할을 바꾸면 $\langle x, -y \rangle = -\langle x, y \rangle$이다.

**(3)의 증명.** (i) $L$은 선형사상이므로 (T5)에 의해 $L(\alpha_1 v_1 + \cdots + \alpha_n v_n) = \alpha_1 L(v_1) + \cdots + \alpha_n L(v_n)$이다. 오른쪽은 $\mathbb{R}$에서 $i$번째 항이 $\alpha_i L(v_i) = \alpha_i \langle v_i, y \rangle$인 열의 합이므로 첫째 등식이다. $R$에 (T5)를 쓰면 둘째 등식이다. $L$에 (T4)를 쓰면 마지막 등식이다. $n = 0$이면 왼쪽은 $\langle 0_V, y \rangle$ 또는 $\langle y, 0_V \rangle$이고 오른쪽은 빈 열의 합 $0$이어서, 이 경우도 (T5)에 들어 있다.

(ii) (i)의 첫째 등식을 $y = w$로 쓰면 $\langle x, w \rangle = \alpha_1 \langle v_1, w \rangle + \cdots + \alpha_n \langle v_n, w \rangle$이다. 각 $i$에서 (i)의 둘째 등식을 $v_i$와 열 $\beta$, $w_1, \dots, w_m$에 쓰면 $\langle v_i, w \rangle = \beta_1 \langle v_i, w_1 \rangle + \cdots + \beta_m \langle v_i, w_m \rangle$이다. (H4)를 $\mathbb{R}$에 쓰면 $\alpha_i \langle v_i, w \rangle$는 $j$번째 항이 $\alpha_i(\beta_j \langle v_i, w_j \rangle)$인 열의 합이고, (K2)에 의해 그 항은 $(\alpha_i \beta_j)\langle v_i, w_j \rangle$이다. 따라서 같은 열의 합에 의해 $\alpha_i \langle v_i, w \rangle = s_i$이다. 그러면 $\langle x, w \rangle$를 이룬 열과 $s_1, \dots, s_n$은 모든 자리의 항이 같으므로 같은 열의 합에 의해 $\langle x, w \rangle = s_1 + \cdots + s_n$이다.

**(4)의 증명.** $(x, y) \in W \times W$이면 [[cartesian-product|곱집합]]의 정의에 의해 $x \in W$, $y \in W$이고, $W \subseteq V$이므로 $x, y \in V$, 곧 $(x, y) \in V \times V$이다. 따라서 $W \times W \subseteq V \times V$이다. [[adding-or-removing-an-element|함수의 제한]]에 의해 $g = \langle \cdot, \cdot \rangle|_{W \times W}$는 $W \times W$에서 $\mathbb{R}$로의 함수이고 모든 $(x, y) \in W \times W$에서 $g(x, y) = \langle x, y \rangle$이다. [[subspace|(P1)]]에 의해 $W$는 제한한 연산 $+_W$, $\cdot_W$로 벡터공간이고, 그 값은 $V$의 덧셈과 스칼라배의 값과 같으며, $W$의 영벡터는 $0_V$이다. $g$가 내적의 조건을 만족함을 보인다. $x, y, z \in W$이고 $\alpha$, $\beta$가 실수라 하자.

- (i) $g(x, y) = \langle x, y \rangle = \langle y, x \rangle = g(y, x)$이다.
- (ii) $W$에서 계산한 $(\alpha \cdot_W x) +_W (\beta \cdot_W y)$는 $V$에서 계산한 $\alpha x + \beta y$와 같은 벡터이고 $W$에 속한다. 따라서 $g$의 그 점에서의 값은 $\langle \alpha x + \beta y, z \rangle = \alpha \langle x, z \rangle + \beta \langle y, z \rangle = \alpha g(x, z) + \beta g(y, z)$이다.
- (iii) $0 \le \langle x, x \rangle = g(x, x)$이다. $g(x, x) = 0$인 것은 정확히 $\langle x, x \rangle = 0$일 때, 곧 $x = 0_V$일 때이고, $0_V$는 $W$의 영벡터이다.

따라서 $g$는 $W$ 위의 내적이다.

**(5)의 증명.** $x = 0_V$이면 (2)에 의해 모든 $y$에서 $\langle x, y \rangle = 0$이다. 거꾸로 모든 $y \in V$에서 $\langle x, y \rangle = 0$이면 $y = x$로 두어 $\langle x, x \rangle = 0$이고, 조건 (iii)에 의해 $x = 0_V$이다.

생성하는 열이 있는 경우를 보자. $x = 0_V$이면 (2)에 의해 모든 $k$에서 $\langle x, v_k \rangle = 0$이다. 거꾸로 모든 $k$에서 $\langle x, v_k \rangle = 0$이라 하고 $y \in V$라 하자. 열 $v_1, \dots, v_n$이 $V$를 생성하므로 [[linear-combination-and-span|일차결합과 생성]]의 정의에 의해 $y = \beta_1 v_1 + \cdots + \beta_n v_n$인 실수의 열 $\beta_1, \dots, \beta_n$이 있다. (3)의 (i)의 둘째 등식에 의해 $\langle x, y \rangle$는 $k$번째 항이 $\beta_k \langle x, v_k \rangle = \beta_k \cdot 0$인 열의 합이고, (K9)에 의해 모든 항이 $0$이므로 (H5)에 의해 $\langle x, y \rangle = 0$이다. ($n = 0$이면 $y$는 빈 열의 합 $0_V$이고 같은 계산이 빈 합으로 성립한다.) $y$는 임의였으므로 앞 문단에 의해 $x = 0_V$이다. 조건 (i)에 의해 $\langle y, x \rangle = \langle x, y \rangle$, $\langle v_k, x \rangle = \langle x, v_k \rangle$이므로 마지막 문장이 성립한다.

**(6)의 증명.** $x = x'$이면 두 쪽의 값은 같은 함수의 같은 점에서의 값이므로 같다. 거꾸로 모든 $y$에서 $\langle x, y \rangle = \langle x', y \rangle$이면, (2)에 의해 $\langle x - x', y \rangle = \langle x, y \rangle - \langle x', y \rangle$이고 (K12)의 (v)에 의해 이것은 $0$이다. (5)에 의해 $x - x' = 0_V$이고 (B12)에 의해 $x = x'$이다. 생성하는 열의 경우도 같다: 모든 $k$에서 $\langle x - x', v_k \rangle = \langle x, v_k \rangle - \langle x', v_k \rangle = 0$이므로 (5)의 둘째 문장에 의해 $x - x' = 0_V$이고 $x = x'$이다.

마지막 문장: 각 $u \in U$에서 $S(u)$와 $T(u)$는 $V$의 원소이고 모든 $y$에서 $\langle S(u), y \rangle = \langle T(u), y \rangle$이므로 첫 문장에 의해 $S(u) = T(u)$이다. $S$와 $T$는 정의역이 $U$로 같고 모든 원소에서 값이 같으므로 [[function|함수]]의 같음에 의해 $S = T$이다.

**(7)의 증명.** $V = \{0_V\}$이면 $V \times V$의 원소는 $(0_V, 0_V)$ 하나뿐이다. [[real-function-space|(G)]]에 의해 그 점에서의 값이 $0$인 함수 $g : V \times V \to \mathbb{R}$가 있다. $V$의 원소는 모두 $0_V$이므로 $x$, $y$, $z$, $\alpha x + \beta y$가 모두 $0_V$이고 $g$의 값은 늘 $0$이다. 조건 (i)은 $0 = 0$이다. 조건 (ii)의 오른쪽은 $\alpha \cdot 0 + \beta \cdot 0$이고 (K9)와 (K4)에 의해 $0$이므로 왼쪽의 $0$과 같다. 조건 (iii)에서 $0 \le 0$은 [[order-properties-of-reals|실수의 순서의 성질]]의 (1)의 (iv)이고, "$g(x, x) = 0$"과 "$x = 0_V$"가 모든 $x \in V$에서 둘 다 참이므로 하나가 성립하는 것은 정확히 다른 하나가 성립할 때이다. 따라서 $g$는 내적이다. 거꾸로 $\langle \cdot, \cdot \rangle$이 $V$ 위의 어떤 내적이면 (2)에 의해 $\langle 0_V, 0_V \rangle = 0$이므로, $\langle \cdot, \cdot \rangle$과 $g$는 정의역이 같고 하나뿐인 원소에서 값이 같아 같은 함수이다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ 위에서 값이 3xy 인 함수]
$\mathbb{R}$을 실수의 합과 곱으로 벡터공간으로 보고, $(x, y) \in \mathbb{R} \times \mathbb{R}$에서의 값이 $3xy$인 함수를 생각합니다. 여기서 $3xy$는 $3(xy)$입니다. (K1)과 (K2)에 의해 $3(xy) = 3(yx)$이므로 조건 (i)이 성립합니다. 실수 $x$, $y$, $z$, $\alpha$, $\beta$에서 (K12)의 (i)과 (K1), (K2)에 의해 $3((\alpha x + \beta y)z) = \alpha(3(xz)) + \beta(3(yz))$이므로 조건 (ii)가 성립합니다. [[order-properties-of-reals|실수의 순서의 성질]]의 (5)의 (iii)에 의해 $0 \le xx$이고, 같은 항목의 (10)에 의해 정수 사이의 부등식 $0 < 3$을 실수의 부등식으로 쓸 수 있으므로 (4)의 (iv)에 의해 $0 \le 3(xx)$입니다. $3(xx) = 0$이면 (K10)에 의해 $3 = 0$이거나 $xx = 0$인데 (K7)에 의해 $3 \ne 0$이므로 $xx = 0$이고, 다시 (K10)에 의해 $x = 0$입니다. 거꾸로 $x = 0$이면 (K9)에 의해 값이 $0$입니다. 따라서 조건 (iii)도 성립하고 이 함수는 $\mathbb{R}$ 위의 내적입니다. 예를 들어 $x = 2$, $y = -5$이면 값은 $-30$이어서, 서로 다른 두 벡터의 내적은 음수일 수 있습니다.
:::

:::counterexample[ℝ 위에서 값이 xy + 1 인 함수]
$\mathbb{R}$ 위에서 $(x, y)$에서의 값이 $xy + 1$인 함수는 대칭이고, $x = y$이면 값 $xx + 1$이 $1$ 이상이어서([[order-properties-of-reals|실수의 순서의 성질]]의 (5)의 (iii)과 (ii)) 양수입니다. 그러나 내적이 아닙니다. 내적이라면 (2)에 의해 영벡터 $0$과의 값이 $0$이어야 하는데, $(0, 5)$에서의 값은 $0 \cdot 5 + 1 = 1$입니다. 조건 (ii)를 직접 보아도, $\alpha = 2$, $\beta = 0$, $x = 1$, $y = 0$, $z = 1$에서 왼쪽은 $(2 \cdot 1) \cdot 1 + 1 = 3$이고 오른쪽은 $2(1 \cdot 1 + 1) + 0 \cdot (0 \cdot 1 + 1) = 4$입니다. 이 함수에서는 조건 (iii)의 "값이 $0$인 것은 정확히 영벡터일 때"도 깨집니다. $x = 0$에서의 값이 $1$이기 때문입니다.
:::

:::counterexample[한 벡터와의 내적만 같은 서로 다른 두 벡터]
(6)은 "모든 $y$"에서 값이 같아야 $x = x'$라고 말합니다. 위의 예시의 내적(값 $3xy$)에서 $y = 0$ 하나만 보면 모든 $x$에서 값이 $0$이므로, $x = 1$과 $x' = 2$는 $y = 0$과의 내적이 같지만 같은 벡터가 아닙니다. $y = 1$과의 내적은 $3$과 $6$으로 다릅니다.
:::

## 확인 질문

:::check[내적공간 $V$의 벡터 $x$, $y$, $z$에서 $\langle x, y \rangle = 2$이고 $\langle x, z \rangle = -1$이면 $\langle 3y - z, x \rangle$는 무엇인가?]
조건 (i)에 의해 $\langle 3y - z, x \rangle = \langle x, 3y - z \rangle$이고, (2)와 (1)에 의해 이것은 $\langle x, 3y \rangle - \langle x, z \rangle = 3\langle x, y \rangle - \langle x, z \rangle = 3 \cdot 2 - (-1) = 7$입니다.
:::

:::check[모든 값이 $0$인 함수 $\mathbb{R} \times \mathbb{R} \to \mathbb{R}$은 $\mathbb{R}$ 위의 내적인가?]
아닙니다. 조건 (i)과 (ii)는 성립하지만(양쪽이 모두 $0$입니다), $x = 1$에서 $\langle 1, 1 \rangle = 0$인데 $1 \ne 0$이어서 조건 (iii)의 "값이 $0$인 것은 정확히 영벡터일 때"가 깨집니다. 모든 값이 $0$인 함수가 내적인 것은 (7)의 $V = \{0_V\}$에서입니다.
:::
