---
title: 직교사영
title_en: Orthogonal Projection
aliases: [정사영, 직교 사영, 베셀 부등식, orthogonal projection, projection onto a subspace, Bessel's inequality]
kind: definition
field: linear-algebra
msc: ["15A63"]
level: undergrad
summary: 내적공간 V 의 부분공간 E 와 v ∈ V 에 대해, E 에 속하고 v − w 가 E 와 직교하는 w 를 v 의 E 로의 직교사영이라 한다. 직교사영은 있으면 하나뿐이고, E 의 원소 가운데 v 에 가장 가까운 것과 같다. E 가 영벡터가 없는 직교하는 열로 생성되면 모든 v 에 직교사영이 있고 내적으로 쓴 식으로 주어진다. 모든 v 에 직교사영이 있으면 그것을 값으로 하는 사상 proj_E 는 선형이고 E 위에서 항등이며, 직교사영의 노름은 v 의 노름 이하이다.
requires: [function, inverse-function, real-number-arithmetic, real-order-axioms, order-properties-of-reals, power-of-a-real-number, vector-space, vector-space-basic-properties, real-function-space, subspace, finite-sum-of-vectors, linear-combination-and-span, linear-map, inner-product-space, standard-inner-product, norm-in-inner-product-space, orthogonal-vectors, orthonormal-list, orthonormal-basis]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 5장 3절 Orthogonal projection and Gram-Schmidt orthogonalization 의 Definition 3.1, Theorem 3.2, pp.129–130; Proposition 3.3 과 그 증명, Remark 3.4, pp.130–131; 3.3 Orthogonal complement 의 첫 문단, p.133; 4절 4.1.1 Geometric approach, p.136
    checked: original
    note: "출처 Definition 3.1(p.129)은 부분공간 E 와 벡터 v 에 대해 '1. w ∈ E, 2. v − w ⊥ E' 인 벡터 w 를 v 의 E 로의 orthogonal projection 이라 하고 P_E v 로 쓴다. 출처는 먼저 유일성을 보이고 이어 직교사영을 찾는 방법을 보여 존재를 증명하겠다고 적는다(p.129). 이 사이트는 P 가 기본행렬 P_{j,k} 와 겹치므로 proj_E 로 쓰고, 이 기호는 모든 v 에 직교사영이 있을 때 사상의 이름으로만 쓴다. (1)의 유일성은 출처 Theorem 3.2(pp.129–130)의 증명에서 나오는 것이고, 이 항목은 '모든 y ∈ E 에서 ⟨w, y⟩ = ⟨v, y⟩' 꼴로 따로 증명했다. (2)의 '직교사영이 가장 가깝고, 같은 거리이면 같은 원소'는 출처 Theorem 3.2 이고 증명도 같다(y = w − x 로 두고 피타고라스). (2)의 거꾸로의 방향(가장 가까운 원소이면 직교사영)은 출처 4절 4.1.1(p.136)이 최소제곱에서 'Ax 가 Ran A 의 모든 벡터를 지나므로 ‖Ax − b‖ 가 가장 작은 것은 정확히 Ax = P_{Ran A} b 일 때'라고 적는 것과 같은 내용이다. 이 항목은 그 방향을 직교사영의 존재를 가정하지 않고, E 의 원소 w + ty 에 t = ⟨v − w, y⟩⟨y, y⟩⁻¹ 을 넣는 계산으로 증명했다. (3)은 출처 Proposition 3.3(p.130)과 그 뒤 문장('이 식을 기저가 아닌 직교하는 system 에 쓰면 그 생성 위로의 사영을 준다')이고 증명도 같다(Lemma 2.3 으로 v − w ⊥ v_k 만 확인한다). 출처의 증명 안의 'k = 1, 2, …, n'(p.131)은 r 의 오타로 보아 옮기지 않았다. (4)의 선형성은 출처 Remark 3.4(p.130)가 식 (3.1)에서, 또는 정의와 유일성에서 보인다고 적는 것이고, 이 항목은 뒤의 길(정의와 유일성)로 증명했다. Remark 3.4 의 식 'αx + βy − (αP_E x − βP_E y)' 의 가운데 부호는 + 의 오타로 보아 옮기지 않았다. 출처 3.3(p.133)은 '직교사영의 정의에 의해 V 의 모든 벡터가 v = v₁ + v₂ (v₁ ∈ E, v₂ ⊥ E) 로 한 가지로 쓰이고 v₁ = P_E v' 라고 적는다. '베셀 부등식'이라는 이름은 출처에 나오지 않는다(검색어 'Bessel', 'Bess' 0건, 'inequalit' 24건은 코시–슈바르츠·삼각·민코프스키 부등식과 6장 4절의 타원체·작용소 노름, 7장의 이차형식에 관한 것이다). 예시 'ℝ³ 의 평면 위로의 직교사영'은 출처 3절 연습문제 3.5(p.134)가 서로 직교하는 두 벡터의 생성 위로의 직교사영을 구하게 하는 것과 같은 발상이고, 거리를 비교하는 부분은 연습문제 3.4, 3.6(p.134)이 부분공간까지의 거리를 구하게 하는 것과 같은 대상이다. 확인 질문 '$w$가 $v$의 $E$로의 직교사영이고 $\\lVert v \\rVert = 5$, $\\lVert w \\rVert = 3$이면 $\\lVert v - w \\rVert$는 무엇인가?'는 출처 1절 연습문제 1.3(p.124)처럼 주어진 노름으로 다른 노름을 계산하는 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(최소 거리의 양방향 증명 통독). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$V$가 [[inner-product-space|내적공간]]이고 $E$가 $V$의 [[subspace|부분공간]]이며 $v \in V$라 하자. 직교 $\perp$는 [[orthogonal-vectors|직교]]의 것이고, 노름은 [[norm-in-inner-product-space|내적공간의 노름]]의 것이다. $w \in V$가 **$v$의 $E$로의 직교사영**(orthogonal projection of $v$ onto $E$)인 것은 정확히 $w \in E$이고 $v - w \perp E$일 때이다.

다음이 성립한다. 아래에서 $v$는 $V$의 임의의 원소이다.

1. (판정과 유일성) $w \in E$일 때, $v - w \perp E$인 것은 정확히 모든 $y \in E$에서 $\langle w, y \rangle = \langle v, y \rangle$일 때이다. $u_1, \dots, u_r$이 $V$의 벡터의 열이고 $E = \operatorname{span}(u_1, \dots, u_r)$이면([[linear-combination-and-span|생성]]), 이것은 또 정확히 모든 $k \in \{1, \dots, r\}$에서 $\langle w, u_k \rangle = \langle v, u_k \rangle$일 때이다. $v$의 $E$로의 직교사영은 있으면 하나뿐이다. $v \in E$이면 $v$의 $E$로의 직교사영이 있고 그것은 $v$ 자신이다. 거꾸로 $v$의 $E$로의 직교사영이 있고 $v$와 같으면 $v \in E$이다.
2. (가장 가까운 원소) $w \in E$라 하자. $w$가 $v$의 $E$로의 직교사영인 것은 정확히 $E$의 모든 원소 $x$에서 $\lVert v - w \rVert \le \lVert v - x \rVert$일 때이다. $w$가 직교사영이면 $E$의 모든 원소 $x$에서
   $$
   \begin{aligned}
   &\lVert v - x \rVert^2 \\
   &\quad = \lVert v - w \rVert^2 + \lVert x - w \rVert^2
   \end{aligned}
   $$
   이고, $x \in E$이면서 $\lVert v - x \rVert = \lVert v - w \rVert$이면 $x = w$이다.
3. (직교하는 열로 생성될 때) $r \ge 0$이 정수이고 $u_1, \dots, u_r$이 모든 항이 영벡터가 아닌 [[orthonormal-list|직교하는 열]]이며 $E = \operatorname{span}(u_1, \dots, u_r)$이라 하자. 그러면 $V$의 모든 $v$에 $E$로의 직교사영이 있고, 그것은 $k$번째 항이 $c_k = \langle v, u_k \rangle \langle u_k, u_k \rangle^{-1}$인 실수의 열로 쓴
   $$
   c_1 u_1 + \cdots + c_r u_r
   $$
   이다. $u_1, \dots, u_r$이 정규직교 열이면 이것은 $\langle v, u_1 \rangle u_1 + \cdots + \langle v, u_r \rangle u_r$이다. $r = 0$, 곧 $E = \{0_V\}$이면 이것은 $0_V$이다. [[orthonormal-basis|정규직교 기저]]의 (6)에 의해, $V$의 정규직교 열 $u_1, \dots, u_r$의 생성이 $E$인 것은 정확히 $u$가 내적공간 $E$의 정규직교 기저인 것이므로, 특히 $E$가 정규직교 기저를 가지면 모든 $v$에 $E$로의 직교사영이 있다.
4. (사상 $\operatorname{proj}_E$) $V$의 모든 $v$에 $E$로의 직교사영이 있다고 하자. (1)에 의해 그것은 $v$마다 하나로 정해지므로 $v$에서의 값이 $v$의 $E$로의 직교사영인 함수 $V \to V$가 있다. 이 함수를 $\operatorname{proj}_E$로 쓴다. 기호 $\operatorname{proj}_E$는 모든 $v$에 직교사영이 있을 때만 쓴다. 다음이 성립한다.
   - (i) $\operatorname{proj}_E$는 [[linear-map|선형사상]]이다.
   - (ii) 모든 $v$에서 $\operatorname{proj}_E v \in E$이고 $v - \operatorname{proj}_E v \perp E$이다. $\operatorname{proj}_E$의 상은 $E$이다.
   - (iii) $\operatorname{proj}_E v = v$인 것은 정확히 $v \in E$일 때이다. 특히 $E$의 모든 원소 $x$에서 $\operatorname{proj}_E x = x$이다.
5. (베셀 부등식) $w$가 $v$의 $E$로의 직교사영이면 $\lVert v \rVert^2 = \lVert w \rVert^2 + \lVert v - w \rVert^2$이고 $\lVert w \rVert \le \lVert v \rVert$이다. $\lVert w \rVert = \lVert v \rVert$인 것은 정확히 $v \in E$일 때이다. 따라서 $u_1, \dots, u_r$이 $V$의 정규직교 열이면
   $$
   \langle v, u_1 \rangle^2 + \cdots + \langle v, u_r \rangle^2 \le \lVert v \rVert^2
   $$
   이고(**베셀 부등식**, Bessel's inequality), 등호는 정확히 $v \in \operatorname{span}(u_1, \dots, u_r)$일 때 성립한다.
6. (두 끝의 경우) 모든 $v$에서 $v$의 $\{0_V\}$로의 직교사영은 $0_V$이고, $v$의 $V$로의 직교사영은 $v$이다. 곧 $\operatorname{proj}_{\{0_V\}}$는 모든 값이 $0_V$인 함수이고 $\operatorname{proj}_V$는 [[inverse-function|항등함수]] $i_V$이다.
:::

:::english
Let $V$ be an inner product space, $E$ a subspace of $V$, and $v \in V$. Orthogonality $\perp$ is that of the entry on orthogonality, and norms are those of the entry on norms. A vector $w \in V$ is the **orthogonal projection of $v$ onto $E$** exactly when $w \in E$ and $v - w \perp E$.

The following hold. Below, $v$ is an arbitrary element of $V$.

1. (Test and uniqueness) For $w \in E$, $v - w \perp E$ exactly when $\langle w, y \rangle = \langle v, y \rangle$ for every $y \in E$. If $u_1, \dots, u_r$ is a sequence of vectors in $V$ and $E = \operatorname{span}(u_1, \dots, u_r)$, this happens also exactly when $\langle w, u_k \rangle = \langle v, u_k \rangle$ for every $k \in \{1, \dots, r\}$. The orthogonal projection of $v$ onto $E$, if it exists, is unique. If $v \in E$, the orthogonal projection of $v$ onto $E$ exists and is $v$ itself. Conversely, if the orthogonal projection of $v$ onto $E$ exists and equals $v$, then $v \in E$.
2. (The closest element) Let $w \in E$. Then $w$ is the orthogonal projection of $v$ onto $E$ exactly when $\lVert v - w \rVert \le \lVert v - x \rVert$ for every element $x$ of $E$. If $w$ is the orthogonal projection, then for every element $x$ of $E$
   $$
   \begin{aligned}
   &\lVert v - x \rVert^2 \\
   &\quad = \lVert v - w \rVert^2 + \lVert x - w \rVert^2,
   \end{aligned}
   $$
   and if $x \in E$ and $\lVert v - x \rVert = \lVert v - w \rVert$, then $x = w$.
3. (When $E$ is spanned by an orthogonal sequence) Let $r \ge 0$ be an integer, let $u_1, \dots, u_r$ be an orthogonal sequence none of whose terms is the zero vector, and let $E = \operatorname{span}(u_1, \dots, u_r)$. Then every $v \in V$ has an orthogonal projection onto $E$, namely
   $$
   c_1 u_1 + \cdots + c_r u_r,
   $$
   written with the sequence of real numbers whose $k$-th term is $c_k = \langle v, u_k \rangle \langle u_k, u_k \rangle^{-1}$. If $u_1, \dots, u_r$ is orthonormal, this is $\langle v, u_1 \rangle u_1 + \cdots + \langle v, u_r \rangle u_r$. If $r = 0$, that is, $E = \{0_V\}$, this is $0_V$. By item (6) of the entry on orthonormal bases, an orthonormal sequence $u_1, \dots, u_r$ in $V$ spans $E$ exactly when $u$ is an orthonormal basis of the inner product space $E$; in particular, if $E$ has an orthonormal basis, then every $v$ has an orthogonal projection onto $E$.
4. (The map $\operatorname{proj}_E$) Suppose every $v \in V$ has an orthogonal projection onto $E$. By (1) it is determined uniquely by $v$, so there is a function $V \to V$ whose value at $v$ is the orthogonal projection of $v$ onto $E$. We write this function as $\operatorname{proj}_E$. The symbol $\operatorname{proj}_E$ is used only when every $v$ has an orthogonal projection. The following hold.
   - (i) $\operatorname{proj}_E$ is a linear map.
   - (ii) For every $v$, $\operatorname{proj}_E v \in E$ and $v - \operatorname{proj}_E v \perp E$. The range of $\operatorname{proj}_E$ is $E$.
   - (iii) $\operatorname{proj}_E v = v$ exactly when $v \in E$. In particular, $\operatorname{proj}_E x = x$ for every element $x$ of $E$.
5. (Bessel's inequality) If $w$ is the orthogonal projection of $v$ onto $E$, then $\lVert v \rVert^2 = \lVert w \rVert^2 + \lVert v - w \rVert^2$ and $\lVert w \rVert \le \lVert v \rVert$. Moreover $\lVert w \rVert = \lVert v \rVert$ exactly when $v \in E$. Hence, if $u_1, \dots, u_r$ is an orthonormal sequence in $V$, then
   $$
   \langle v, u_1 \rangle^2 + \cdots + \langle v, u_r \rangle^2 \le \lVert v \rVert^2
   $$
   (**Bessel's inequality**), with equality exactly when $v \in \operatorname{span}(u_1, \dots, u_r)$.
6. (The two extreme cases) For every $v$, the orthogonal projection of $v$ onto $\{0_V\}$ is $0_V$, and the orthogonal projection of $v$ onto $V$ is $v$. That is, $\operatorname{proj}_{\{0_V\}}$ is the function all of whose values are $0_V$, and $\operatorname{proj}_V$ is the identity function $i_V$.
:::

## 직관

평면 위의 한 점에서 바닥의 직선에 수선을 내리면, 수선의 발은 직선 위에 있고 점에서 발로 가는 화살표는 직선과 직각을 이룹니다. 직교사영은 이 그림을 부분공간 $E$로 옮긴 것입니다. $w$는 $E$ 안에 있어야 하고, 남은 부분 $v - w$는 $E$의 모든 원소와 직교해야 합니다. 비유에서 "바닥의 직선"이 $E$, "수선의 발"이 $w$이고, "직각"은 내적이 $0$이라는 것입니다.

수선의 발은 직선 위에서 그 점에 가장 가까운 점이기도 합니다((2)). $E$의 다른 원소 $x$로 가는 화살표 $v - x$는 $v - w$와 $w - x$의 합이고 두 부분이 직교하므로, 피타고라스 식에 의해 $\lVert v - x \rVert^2$는 $\lVert v - w \rVert^2$에 $\lVert x - w \rVert^2$를 더한 것입니다. 거꾸로 가장 가까운 원소 $w$에서 $v - w$가 $E$의 어떤 원소 $y$와 직교하지 않으면, $w$를 $y$ 방향으로 알맞게 옮겨 더 가까운 원소를 만들 수 있습니다. 그래서 두 성질이 같습니다.

정의만으로는 직교사영이 있는지 알 수 없습니다. $E$가 영벡터가 없는 직교하는 열로 생성되면 (3)의 식이 직교사영을 주는데, 이것은 [[orthonormal-list|직교하는 열과 정규직교 열]]의 계수 꺼내기에서 나옵니다. 모든 $v$에 직교사영이 있으면 $v$를 그 직교사영으로 보내는 사상 $\operatorname{proj}_E$가 생기고, 이 사상은 선형이며 $E$의 원소는 그대로 둡니다. $E = \{0_V\}$이면 모든 것을 $0_V$로, $E = V$이면 모든 것을 자기 자신으로 보냅니다((6)).

## 성질의 증명

:::proof
아래에서 (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것, (V1)–(V8)은 [[vector-space|벡터공간]]의 것, (B1)–(B12)는 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 것, (S1)–(S3)과 (P3)은 [[subspace|부분공간]]의 것, (H0)은 [[finite-sum-of-vectors|벡터의 유한 합]]의 것이다. [[inner-product-space|내적과 내적공간]]의 번호는 "내적의 (1)"처럼, [[norm-in-inner-product-space|내적공간의 노름]], [[orthogonal-vectors|직교]], [[orthonormal-list|직교하는 열과 정규직교 열]]의 번호는 "노름의 (1)", "직교의 (1)", "정규직교 열의 (1)"처럼 줄여 쓴다. 실수의 순서의 성질은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다. 다음 두 사실을 먼저 보인다.

(가) $w, z \in V$이면 $v - (w + z) = (v - w) - z$이다. (B10)에 의해 $-(w + z) = (-w) + (-z)$이고, (V2)에 의해 $v + ((-w) + (-z)) = (v + (-w)) + (-z)$이기 때문이다. 따라서 노름의 (5)의 둘째 식에 의해
$$
\begin{aligned}
&\lVert v - (w + z) \rVert^2 \\
&\quad = \bigl(\lVert v - w \rVert^2 - 2\langle v - w, z \rangle\bigr) \\
&\qquad + \lVert z \rVert^2
\end{aligned}
$$
이다.

(나) $w, x \in V$이면 $w + (x - w) = x$이다. (V1), (V2), (B2), (H0)에 의해 $w + (x + (-w)) = w + ((-w) + x) = (w + (-w)) + x = 0_V + x = x$이기 때문이다.

**(1)의 증명.** $w \in E$라 하자. $v - w \perp E$는 모든 $y \in E$에서 $\langle v - w, y \rangle = 0$이라는 것이다. 내적의 (2)에 의해 $\langle v - w, y \rangle = \langle v, y \rangle - \langle w, y \rangle$이고, (K12)의 (v)에 의해 이것이 $0$인 것은 정확히 $\langle w, y \rangle = \langle v, y \rangle$일 때이다. $E = \operatorname{span}(u_1, \dots, u_r)$이면 직교의 (4)에 의해 $v - w \perp E$인 것은 정확히 모든 $k$에서 $v - w \perp u_k$일 때이고, 같은 계산으로 이것은 정확히 모든 $k$에서 $\langle w, u_k \rangle = \langle v, u_k \rangle$일 때이다.

유일성: $w$와 $w'$이 둘 다 $v$의 $E$로의 직교사영이라 하자. 앞 문단에 의해 모든 $y \in E$에서 $\langle w, y \rangle = \langle v, y \rangle = \langle w', y \rangle$이다. (S3), (B5), (S2)에 의해 $z = w - w' = w + (-1)w'$은 $E$에 속하므로, $y = z$로 두면 내적의 (2)와 (K12)의 (v)에 의해 $\langle z, z \rangle = \langle w, z \rangle - \langle w', z \rangle = 0$이다. 내적의 조건 (iii)에 의해 $z = 0_V$이고 (B12)에 의해 $w = w'$이다.

$v \in E$이면 (B12)에 의해 $v - v = 0_V$이고, 직교의 (2)에 의해 $0_V \perp E$이므로 $v$ 자신이 $v$의 직교사영이다. 거꾸로 $v$의 직교사영 $w$가 있고 $w = v$이면, 직교사영의 정의에 의해 $v = w \in E$이다.

**(2)의 증명.** 먼저 $w$가 직교사영이라 하고 $x \in E$라 하자. $z = x - w$라 하면 (S3), (B5), (S2)에 의해 $z \in E$이므로 $\langle v - w, z \rangle = 0$이고, (나)에 의해 $w + z = x$이다. (가)에 의해 $\lVert v - x \rVert^2 = (\lVert v - w \rVert^2 - 2 \cdot 0) + \lVert z \rVert^2$이다. (K9)에 의해 $2 \cdot 0 = 0$이고, (K4)에 의해 $0 + 0 = 0$이므로 (K8)의 (ii)에 의해 $-0 = 0$이어서, (K4)에 의해 $\lVert v - x \rVert^2 = \lVert v - w \rVert^2 + \lVert z \rVert^2$이다. 이것이 둘째 문장의 등식이다. 노름의 (2)와 내적의 조건 (iii)에 의해 $0 \le \lVert z \rVert^2$이므로, 실수의 순서의 성질의 (2)의 (i)로 양변에 $\lVert v - w \rVert^2$을 더하고 (K1), (K4)를 쓰면 $\lVert v - w \rVert^2 \le \lVert v - x \rVert^2$이고, 노름의 (2)에 의해 $\lVert v - w \rVert \le \lVert v - x \rVert$이다. 또 $\lVert v - x \rVert = \lVert v - w \rVert$이면 노름의 (2)에 의해 두 제곱이 같으므로 $\lVert v - w \rVert^2 + \lVert z \rVert^2 = \lVert v - w \rVert^2$이고, 양변에 $-\lVert v - w \rVert^2$을 더하면 (K1), (K2), (K4), (K8)의 (ii)에 의해 $\lVert z \rVert^2 = 0$이다. 노름의 (2)와 내적의 조건 (iii)에 의해 $z = 0_V$이고, (나)와 (V1), (H0)에 의해 $x = w + z = w + 0_V = w$이다.

거꾸로 $w \in E$이고 $E$의 모든 원소 $x$에서 $\lVert v - w \rVert \le \lVert v - x \rVert$라 하자. (1)에 의해 모든 $y \in E$에서 $p = \langle v - w, y \rangle$가 $0$임을 보이면 된다. $y \in E$라 하자. $y = 0_V$이면 내적의 (2)에 의해 $p = 0$이다. $y \ne 0_V$이면 내적의 조건 (iii)에 의해 $a = \langle y, y \rangle$는 $0 \le a$이고 $a \ne 0$이므로 [[real-order-axioms|실수의 순서]]의 $\le$의 뜻에 의해 $0 < a$이다. $t = p a^{-1}$로 두면 (S3)과 (S2)에 의해 $x = w + ty \in E$이고, 가정과 노름의 (2)에 의해 $\lVert v - w \rVert^2 \le \lVert v - x \rVert^2$이다. 내적의 (1)과 조건 (ii)에 의해 $\langle v - w, ty \rangle = tp$이고 $\lVert ty \rVert^2 = \langle ty, ty \rangle = t(ta)$이다. $q = (pp)a^{-1}$이라 하면 (K1), (K2)에 의해 $tp = (pa^{-1})p = q$이고, (K1), (K2), (K8)의 (iii), (K4)에 의해 $t(ta) = t(p(a^{-1}a)) = t(p \cdot 1) = tp = q$이다. 따라서 (가)에 $z = ty$를 넣으면
$$
\lVert v - x \rVert^2 = \bigl(\lVert v - w \rVert^2 - 2q\bigr) + q
$$
이다. (K7)의 $2 = 1 + 1$과 (K12)의 (i), (K1), (K4)에 의해 $2q = q + q$이고, (K12)의 (iv), (K2), (K8)의 (ii), (K4)에 의해 $(-(q + q)) + q = (-q) + ((-q) + q) = -q$이므로, 뺄셈의 정의와 (K2)에 의해 오른쪽은 $\lVert v - w \rVert^2 + (-q)$이다. 그러면 $\lVert v - w \rVert^2 \le \lVert v - w \rVert^2 + (-q)$이므로 실수의 순서의 성질의 (2)의 (ii)로 양변에 $-\lVert v - w \rVert^2$을 더하면 (K1), (K2), (K4), (K8)의 (ii)에 의해 $0 \le -q$이고, 같은 항목의 (3)의 (iii)과 (K9)와 $-0 = 0$에 의해 $q = -(-q) \le -0 = 0$이다. 한편 같은 항목의 (5)의 (iii)에 의해 $0 \le pp$이고 같은 항목의 (6)의 (i)에 의해 $0 < a^{-1}$이므로, 같은 항목의 (4)의 (iv)에 의해 $0 \le q$이다. 같은 항목의 (1)의 (ii)에 의해 $q = 0$이다. $a^{-1} \ne 0$이므로 (K10)에 의해 $pp = 0$이고, 다시 (K10)에 의해 $p = 0$이다. 따라서 $w$는 직교사영이다.

**(3)의 증명.** 모든 $k$에서 $u_k \ne 0_V$이므로 내적의 조건 (iii)에 의해 $\langle u_k, u_k \rangle \ne 0$이고, $c_k$가 정해진다. [[real-function-space|(G)]]에 의해 $k$번째 항이 $c_k$인 실수의 열이 있다. $w = c_1 u_1 + \cdots + c_r u_r$이라 하면 $w$는 $u$의 일차결합이므로 $w \in E$이다. 정규직교 열의 (1)과 (K2), (K8)의 (iii), (K4)에 의해 모든 $k$에서
$$
\begin{aligned}
\langle w, u_k \rangle &= c_k \langle u_k, u_k \rangle \\
&= \langle v, u_k \rangle \bigl(\langle u_k, u_k \rangle^{-1} \langle u_k, u_k \rangle\bigr) \\
&= \langle v, u_k \rangle
\end{aligned}
$$
이므로, (1)의 둘째 문장에 의해 $w$는 $v$의 $E$로의 직교사영이다. $u$가 정규직교 열이면 $\langle u_k, u_k \rangle = 1$이고 (K4)에 의해 $1 \cdot 1 = 1$이므로 (K8)의 (iii)에 의해 $1^{-1} = 1$이어서 $c_k = \langle v, u_k \rangle$이다. 두 열은 모든 자리의 항이 같으므로 합도 같다. $r = 0$이면 [[linear-combination-and-span|일차결합과 생성]]의 정의에 의해 $E = \{0_V\}$이고 $w$는 빈 열의 합 $0_V$이다. 마지막 문장은 [[orthonormal-basis|정규직교 기저]]의 (6)과 앞의 문장들에서 나온다.

**(4)의 증명.** 각 $v$에 $V$의 원소 하나가 정해지므로 (G)에 의해 함수 $\operatorname{proj}_E : V \to V$가 있다. (ii)의 첫 문장은 직교사영의 정의이다.

(i) $x, x' \in V$이고 $\alpha$, $\beta$가 실수라 하자. $p = \alpha \operatorname{proj}_E x + \beta \operatorname{proj}_E x'$은 (P3)에 의해 $E$에 속한다. $y \in E$이면 내적의 조건 (ii), (1), 다시 조건 (ii)에 의해
$$
\begin{aligned}
\langle p, y \rangle &= \alpha \langle \operatorname{proj}_E x, y \rangle \\
&\quad + \beta \langle \operatorname{proj}_E x', y \rangle \\
&= \alpha \langle x, y \rangle + \beta \langle x', y \rangle \\
&= \langle \alpha x + \beta x', y \rangle
\end{aligned}
$$
이다. (1)에 의해 $p$는 $\alpha x + \beta x'$의 직교사영이고, 유일성에 의해 $\operatorname{proj}_E(\alpha x + \beta x') = p$이다. [[linear-map|선형사상]]의 (T3)에 의해 $\operatorname{proj}_E$는 선형사상이다.

(ii)의 둘째 문장: 모든 값이 $E$에 속하므로 상은 $E$에 포함된다. $x \in E$이면 (1)에 의해 $\operatorname{proj}_E x = x$이므로 $x$는 상에 속한다. 따라서 상은 $E$이다.

(iii) $v \in E$이면 (1)과 유일성에 의해 $\operatorname{proj}_E v = v$이다. 거꾸로 $\operatorname{proj}_E v = v$이면 (ii)에 의해 $v = \operatorname{proj}_E v \in E$이다.

**(5)의 증명.** (나)에 의해 $w + (v - w) = v$이다. $w \in E$이고 $v - w \perp E$이므로 $v - w \perp w$이고, 직교의 (1)에 의해 $w \perp v - w$이다. 직교의 (5)에 의해 $\lVert v \rVert^2 = \lVert w \rVert^2 + \lVert v - w \rVert^2$이다. $0 \le \lVert v - w \rVert^2$이므로 (2)의 증명에서와 같이 $\lVert w \rVert^2 \le \lVert v \rVert^2$이고 노름의 (2)에 의해 $\lVert w \rVert \le \lVert v \rVert$이다. $\lVert w \rVert = \lVert v \rVert$이면 노름의 (2)에 의해 두 제곱이 같고, (2)의 증명에서와 같이 $\lVert v - w \rVert^2 = 0$이어서 $v - w = 0_V$, 곧 (B12)에 의해 $v = w \in E$이다. 거꾸로 $v \in E$이면 (1)과 유일성에 의해 $w = v$이므로 두 노름이 같다.

정규직교 열 $u_1, \dots, u_r$에 대해서는 $E' = \operatorname{span}(u_1, \dots, u_r)$로 두자. [[linear-combination-and-span|일차결합과 생성]]의 (N1)에 의해 $E'$은 부분공간이고, 정규직교 열의 항은 단위벡터이므로 영벡터가 아니다(노름의 (4)). (3)에 의해 $w = \langle v, u_1 \rangle u_1 + \cdots + \langle v, u_r \rangle u_r$은 $v$의 $E'$으로의 직교사영이고, 정규직교 열의 (3)에 의해 $\lVert w \rVert^2 = \langle v, u_1 \rangle^2 + \cdots + \langle v, u_r \rangle^2$이다. 앞 문단을 $E'$에 쓰면 이 값은 $\lVert v \rVert^2$ 이하이다. 등호가 성립하는 것은 노름의 (2)에 의해 정확히 $\lVert w \rVert = \lVert v \rVert$일 때이고, 앞 문단에 의해 이것은 정확히 $v \in E'$일 때이다.

**(6)의 증명.** [[subspace|부분공간]]의 (P4)에 의해 $\{0_V\}$와 $V$는 부분공간이다. $0_V \in \{0_V\}$이다. (H0)에 의해 $0_V + 0_V = 0_V$이므로 (B2)의 유일성에 의해 $-0_V = 0_V$이고, $v - 0_V = v + 0_V = v$이다((V1), (H0)). $\{0_V\}$의 원소는 $0_V$뿐이고 직교의 (2)에 의해 $v \perp 0_V$이므로 $v - 0_V \perp \{0_V\}$이다. 따라서 $0_V$가 $v$의 $\{0_V\}$로의 직교사영이고, 모든 $v$에 있으므로 $\operatorname{proj}_{\{0_V\}}$는 모든 값이 $0_V$인 함수이다. $v \in V$이므로 (1)에 의해 $v$의 $V$로의 직교사영은 $v$이고, $\operatorname{proj}_V$는 모든 $v$에서 값이 $v$인 함수, 곧 $i_V$이다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ³ 의 평면 위로의 직교사영]
표준내적을 준 $\mathbb{R}^3$에서 $u_1 = (1, 0, 1)$, $u_2 = (1, 2, -1)$이라 하면 $\langle u_1, u_2 \rangle = 1 + 0 + (-1) = 0$이므로 $u_1, u_2$는 영벡터가 없는 직교하는 열이고, $\langle u_1, u_1 \rangle = 2$, $\langle u_2, u_2 \rangle = 1 + 4 + 1 = 6$입니다. $E = \operatorname{span}(u_1, u_2)$, $v = (0, 3, 1)$이라 합시다. $\langle v, u_1 \rangle = 1$, $\langle v, u_2 \rangle = 0 + 6 + (-1) = 5$이므로 (3)에 의해 직교사영은
$$
w = \tfrac{1}{2} u_1 + \tfrac{5}{6} u_2 = \bigl(\tfrac{4}{3}, \tfrac{5}{3}, -\tfrac{1}{3}\bigr)
$$
입니다. 성분마다 $\tfrac{1}{2} + \tfrac{5}{6} = \tfrac{4}{3}$, $0 + \tfrac{10}{6} = \tfrac{5}{3}$, $\tfrac{1}{2} - \tfrac{5}{6} = -\tfrac{1}{3}$입니다. 확인하면 $v - w = \bigl(-\tfrac{4}{3}, \tfrac{4}{3}, \tfrac{4}{3}\bigr)$이고 $\langle v - w, u_1 \rangle = -\tfrac{4}{3} + \tfrac{4}{3} = 0$, $\langle v - w, u_2 \rangle = -\tfrac{4}{3} + \tfrac{8}{3} - \tfrac{4}{3} = 0$입니다.

(5)도 확인됩니다. $\lVert v \rVert^2 = 10$, $\lVert w \rVert^2 = \tfrac{16 + 25 + 1}{9} = \tfrac{14}{3}$, $\lVert v - w \rVert^2 = \tfrac{48}{9} = \tfrac{16}{3}$이고 $\tfrac{14}{3} + \tfrac{16}{3} = 10$입니다. (2)에 의해 $E$의 다른 원소, 예를 들어 $u_1$까지는 더 멉니다. $\lVert v - u_1 \rVert^2 = \lVert (-1, 3, 0) \rVert^2 = 10$이고 $\tfrac{16}{3} < 10$입니다.
:::

:::counterexample[직교하지 않는 열에 (3)의 식을 쓰면 직교사영이 아닐 수 있는 예]
$\mathbb{R}^2$에서 $u_1 = (1, 0)$, $u_2 = (1, 1)$은 직교하지 않습니다. 이 열의 생성 $E$는 $\mathbb{R}^2$ 전체이므로(모든 $(a, b)$가 $(a - b)u_1 + b u_2$입니다) (6)에 의해 $v = (0, 1)$의 직교사영은 $v$ 자신입니다. 그런데 (3)의 식을 그대로 쓰면 $\langle v, u_1 \rangle = 0$, $\langle v, u_2 \rangle = 1$, $\langle u_2, u_2 \rangle = 2$이므로 $0 \cdot u_1 + \tfrac{1}{2} u_2 = \bigl(\tfrac{1}{2}, \tfrac{1}{2}\bigr)$이 나오고, 이것은 $v$가 아닙니다. 실제로 $v - \bigl(\tfrac{1}{2}, \tfrac{1}{2}\bigr) = \bigl(-\tfrac{1}{2}, \tfrac{1}{2}\bigr)$은 $u_1$과의 내적이 $-\tfrac{1}{2}$이어서 $E$와 직교하지 않습니다. (3)의 계산은 정규직교 열 항목의 (1)에 기대는데, 그 항목은 직교하는 열에 대해서만 그 식을 진술합니다.
:::

## 확인 질문

:::check[표준내적을 준 $\mathbb{R}^3$에서 $E = \operatorname{span}(e_1, e_2)$이면 $v = (a, b, c)$의 $E$로의 직교사영은 무엇인가?]
$e_1, e_2$는 정규직교 열이고([[standard-inner-product|ℝⁿ 의 표준내적]]의 (2)), $\langle v, e_1 \rangle = a$, $\langle v, e_2 \rangle = b$이므로 (3)에 의해 직교사영은 $a e_1 + b e_2 = (a, b, 0)$입니다. 실제로 $v - (a, b, 0) = (0, 0, c)$는 $e_1$, $e_2$와 내적이 $0$입니다.
:::

:::check[$w$가 $v$의 $E$로의 직교사영이고 $\lVert v \rVert = 5$, $\lVert w \rVert = 3$이면 $\lVert v - w \rVert$는 무엇인가?]
(5)에 의해 $25 = 9 + \lVert v - w \rVert^2$이므로 $\lVert v - w \rVert^2 = 16$입니다. [[order-properties-of-reals|실수의 순서의 성질]]의 (10)에 의해 정수 사이의 부등식 $0 \le 4$을 실수의 부등식으로 쓸 수 있고 $4 \cdot 4 = 16$이므로 [[norm-in-inner-product-space|내적공간의 노름]]의 (2)에 의해 $\lVert v - w \rVert = 4$입니다.
:::
