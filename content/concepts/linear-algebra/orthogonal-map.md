---
title: 직교사상
title_en: Orthogonal Map
aliases: [내적을 보존하는 선형사상, orthogonal map, inner product preserving linear map]
kind: definition
field: linear-algebra
msc: ["15A04"]
level: undergrad
summary: 내적공간 사이의 선형사상 T 가 모든 x, y 에서 ⟨Tx, Ty⟩ = ⟨x, y⟩ 를 만족할 때 직교사상이라 한다. 직교사상인 것은 노름을 보존하는 것과 같고, 직교사상은 단사이며 정규직교 열을 정규직교 열로 보낸다. 유한차원이면 T*∘T = i_V 와 같고, 차원이 같으면 동형사상이며 역사상은 수반사상이고 다시 직교사상이다. 정규직교 기저를 같은 길이의 정규직교 기저로 보내는 선형사상은 직교사상이다.
requires: [function, inverse-function, composition-is-associative, injective-surjective-bijective, real-number-arithmetic, vector-space-basic-properties, finite-sum-of-vectors, linear-map, linear-map-examples, composition-of-linear-maps, linear-map-determined-by-basis, isomorphism, isomorphism-and-bases, dimension, injective-iff-surjective-equal-dimension, matrix-in-bases, inner-product-space, standard-inner-product, norm-in-inner-product-space, orthogonal-vectors, orthonormal-list, orthonormal-basis, orthonormal-basis-exists, adjoint-map]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "5장 6절 Isometries and unitary operators. Unitary and orthogonal matrices., 6.1 Main definitions 의 Definition(isometry), Theorem 6.1, p.146–147, Lemma 6.2, Definition(unitary operator), Proposition 6.3, 성질 1–4, pp.147–148; 6.2 Examples 의 둘째 예, p.148"
    checked: original
    note: "출처는 노름을 보존하는(‖Ux‖ = ‖x‖) 선형사상 U : X → Y 를 isometry 라 부르고(p.146), Theorem 6.1 에서 그것이 내적을 보존하는 것과 같음을 극화 항등식으로 증명한다. 이 항목은 거꾸로 내적을 보존하는 선형사상을 '직교사상'이라 정의하고 노름의 보존을 (1)로 증명한다. 출처는 가역인 isometry 를 unitary operator 라 부르고(p.147), 5장 7절 Theorem 7.1 의 증명 끝(p.153)에서 orthogonal transformation 을 실내적공간의 unitary transformation 이라 적는다. 따라서 이 항목의 직교사상은 출처의 isometry 와 같고, 가역일 필요가 없다는 점에서 출처의 orthogonal transformation 보다 넓다. (2)의 단사는 출처가 Lemma 6.2 뒤에 'an isometry is always left invertible' 이라 적는 것에 해당한다. (4)는 이 항목이 (3)에서 끌어낸다. (5)는 Lemma 6.2 이고 증명도 같은 길이다(출처는 Corollary 1.5 를 쓴다). (6)의 앞 문장은 Proposition 6.3 이다. 출처의 증명은 'a left invertible square matrix is invertible' 을 쓰고, 이 항목은 단사와 차원이 같은 공간 사이의 선형사상에 관한 항목을 쓴다. (6)의 T⁻¹ = T* 와 T⁻¹ 이 다시 직교사상이라는 것은 출처의 성질 1, 2(p.147–148)이고, 정규직교 기저의 상이 정규직교 기저라는 것은 성질 3 이다. 출처는 성질 1–4 를 증명 없이 적는다. (3)의 앞 문장은 성질 3 의 앞 문장을 정규직교 기저가 아닌 정규직교 열로 넓힌 것이다. (3)의 뒤 문장과 (7)은 출처 6.2 의 둘째 예(p.148)와 같은 발상이고(출처는 dim X = dim Y = n 인 두 공간의 정규직교 기저 x_k 를 y_k 로 보내는 사상을 다룬다), 출처는 노름의 제곱을 좌표로 계산해 노름의 보존을 보이며, 이 항목은 좌표로 내적을 계산한다. (8)의 합성은 출처의 성질 4 와 연습문제 6.4(p.150)의 사상판이다. 출처 5장 6절 연습문제 6.5 a)(p.150)는 유한차원 X 에서 X 로의 노름을 보존하는 선형사상이 unitary 인지 묻는데, 이것은 (1)과 (6)으로 답할 수 있다. 출처 6장 2절 연습문제 2.1 e)(p.169)는 unitary operator 의 수반사상이 unitary 인지 묻고, 2.1 i)는 노름을 보존하지만 내적을 보존하지 않는 선형사상이 있는지 묻는다(참·거짓). 예시 '정규직교 기저에 관한 좌표벡터'는 출처 6.2 의 둘째 예에서 Y 를 ℝⁿ, y_k 를 표준기저로 둔 것과 같은 발상이고, 출처 5장 2절 Remark 2.8(p.128)이 정규직교 기저의 좌표로 내적을 표준내적처럼 계산할 수 있어 유한차원 실내적공간의 본질적인 예는 ℝⁿ 뿐이라고 적는 것, 연습문제 2.3(p.128)의 파스발 항등식과 같은 내용이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(2 × 2 고유벡터의 계산 재확인). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$V$, $W$가 [[inner-product-space|내적공간]]이고 $T : V \to W$가 [[linear-map|선형사상]]이라 하자. 노름 $\lVert x \rVert$는 [[norm-in-inner-product-space|내적공간의 노름]]의 것이다. $T$가 **직교사상**(orthogonal map)인 것은 정확히 모든 $x, y \in V$에서

$$
\langle Tx, Ty \rangle = \langle x, y \rangle
$$

일 때이다. 왼쪽은 $W$의 내적이고 오른쪽은 $V$의 내적이다. $V$와 $W$는 [[dimension|유한차원]]이 아니어도 되고, 같은 공간이 아니어도 된다.

다음이 성립한다. 아래에서 $T : V \to W$는 선형사상이다. 직교 $\perp$는 [[orthogonal-vectors|직교]]의 것이고, 정규직교 열과 정규직교 기저는 [[orthonormal-list|직교하는 열과 정규직교 열]]과 [[orthonormal-basis|정규직교 기저]]의 것이다.

1. (노름으로 쓴 판정) $T$가 직교사상인 것은 정확히 모든 $x \in V$에서 $\lVert Tx \rVert = \lVert x \rVert$일 때이다. $T$가 직교사상이면 모든 $x, y \in V$에서 $\lVert Tx - Ty \rVert = \lVert x - y \rVert$이고, $x \perp y$인 것은 정확히 $Tx \perp Ty$일 때이다.
2. (단사) 직교사상은 [[injective-surjective-bijective|단사]]이다.
3. (정규직교 열) $T$가 직교사상이고 $r \ge 0$이 정수이며 $v_1, \dots, v_r$이 $V$의 직교하는 열(정규직교 열)이면, $Tv_1, \dots, Tv_r$은 $W$의 직교하는 열(정규직교 열)이다. 거꾸로 $V$가 유한차원이고 $n \ge 0$이 정수이며 $b_1, \dots, b_n$이 $V$의 정규직교 기저일 때 $Tb_1, \dots, Tb_n$이 $W$의 정규직교 열이면, $T$는 직교사상이다.
4. (차원) $V$, $W$가 유한차원이고 $T$가 직교사상이면 $\dim V \le \dim W$이다.
5. (수반사상) $V$, $W$가 유한차원이라 하자. $T^*$는 [[adjoint-map|수반사상]]의 것이다. $T$가 직교사상인 것은 정확히 $T^* \circ T = i_V$일 때이다.
6. (차원이 같을 때) $V$, $W$가 유한차원이고 $T$가 직교사상이라 하자. $T$가 [[isomorphism|동형사상]]인 것은 정확히 $\dim V = \dim W$일 때이다. 이때 $T^{-1} = T^*$이고 $T \circ T^* = i_W$이며, $T^{-1} : W \to V$도 직교사상이다. 또 이때 $b_1, \dots, b_n$이 $V$의 정규직교 기저이면 $Tb_1, \dots, Tb_n$은 $W$의 정규직교 기저이다.
7. (정규직교 기저를 정규직교 기저로) $n \ge 0$이 정수이고 $b_1, \dots, b_n$이 $V$의 정규직교 기저, $c_1, \dots, c_n$이 $W$의 정규직교 기저라 하자. 그러면 모든 $k \in \{1, \dots, n\}$에서 $Sb_k = c_k$인 선형사상 $S : V \to W$가 정확히 하나 있고, 이 $S$는 직교사상이며 동형사상이다.
8. (항등사상과 합성) 항등함수 $i_V$는 직교사상이다. $X$가 내적공간이고 $T : V \to W$와 $S : W \to X$가 직교사상이면 [[composition-of-linear-maps|합성]] $S \circ T : V \to X$도 직교사상이다.
:::

:::english
Let $V$, $W$ be inner product spaces and let $T : V \to W$ be a linear map; the norm $\lVert x \rVert$ is as in the entry on norms in inner product spaces. $T$ is an **orthogonal map** exactly when

$$
\langle Tx, Ty \rangle = \langle x, y \rangle
$$

for all $x, y \in V$. The left side is the inner product of $W$ and the right side that of $V$. $V$ and $W$ need not be finite-dimensional, and need not be the same space.

The following hold. Below, $T : V \to W$ is a linear map. Orthogonality $\perp$ is as in the entry on orthogonality, and orthonormal sequences and orthonormal bases are as in the entries on orthogonal and orthonormal sequences and on orthonormal bases.

1. (Criterion via norms) $T$ is an orthogonal map exactly when $\lVert Tx \rVert = \lVert x \rVert$ for all $x \in V$. If $T$ is an orthogonal map, then $\lVert Tx - Ty \rVert = \lVert x - y \rVert$ for all $x, y \in V$, and $x \perp y$ exactly when $Tx \perp Ty$.
2. (Injectivity) An orthogonal map is injective.
3. (Orthonormal sequences) If $T$ is an orthogonal map, $r \ge 0$ is an integer and $v_1, \dots, v_r$ is an orthogonal (orthonormal) sequence in $V$, then $Tv_1, \dots, Tv_r$ is an orthogonal (orthonormal) sequence in $W$. Conversely, if $V$ is finite-dimensional, $n \ge 0$ is an integer, $b_1, \dots, b_n$ is an orthonormal basis of $V$ and $Tb_1, \dots, Tb_n$ is an orthonormal sequence in $W$, then $T$ is an orthogonal map.
4. (Dimension) If $V$, $W$ are finite-dimensional and $T$ is an orthogonal map, then $\dim V \le \dim W$.
5. (Adjoint) Let $V$, $W$ be finite-dimensional; $T^*$ is as in the entry on adjoints. $T$ is an orthogonal map exactly when $T^* \circ T = i_V$.
6. (Equal dimensions) Let $V$, $W$ be finite-dimensional and let $T$ be an orthogonal map. $T$ is an isomorphism exactly when $\dim V = \dim W$. In that case $T^{-1} = T^*$, $T \circ T^* = i_W$, and $T^{-1} : W \to V$ is also an orthogonal map. Moreover, in that case, if $b_1, \dots, b_n$ is an orthonormal basis of $V$, then $Tb_1, \dots, Tb_n$ is an orthonormal basis of $W$.
7. (Orthonormal bases to orthonormal bases) Let $n \ge 0$ be an integer, let $b_1, \dots, b_n$ be an orthonormal basis of $V$ and $c_1, \dots, c_n$ an orthonormal basis of $W$. Then there is exactly one linear map $S : V \to W$ with $Sb_k = c_k$ for all $k \in \{1, \dots, n\}$, and this $S$ is an orthogonal map and an isomorphism.
8. (Identity and composition) The identity function $i_V$ is an orthogonal map. If $X$ is an inner product space and $T : V \to W$ and $S : W \to X$ are orthogonal maps, then the composition $S \circ T : V \to X$ is an orthogonal map.
:::

## 직관

직교사상은 벡터를 다른 곳으로 옮기되 길이와 내적을 하나도 바꾸지 않는 선형사상입니다. 비유하면 종이에 원점에서 그은 화살표들을 축척 $1$로 다른 종이에 옮겨 그리는 것과 닮았습니다. 정의의 "모든 $x, y$"는 원점에서 그은 모든 두 화살표에 해당하고, 옮긴 그림에서도 화살표마다의 길이와 두 화살표의 내적이 그대로라는 뜻입니다. 옮겨 그릴 때 그림을 돌리거나 뒤집어도 되지만 늘이거나 줄여서는 안 됩니다. (1)에 의해 길이만 그대로여도 내적이 그대로 따라옵니다. 내적이 노름의 제곱으로 쓰이는 극화 항등식 때문입니다.

옮겨 받는 종이가 더 클 수는 있습니다. 직교사상은 단사이지만((2)) 전사일 필요는 없고, 유한차원이면 정의역의 차원이 공역의 차원보다 클 수 없습니다((4)). 두 공간의 차원이 같으면 남는 자리가 없어서 직교사상은 동형사상이 되고, 그 역사상은 수반사상과 같습니다((6)). 유한차원에서 "직교사상"은 "$T^*$가 왼쪽 역 노릇을 한다"는 것과 같습니다((5)).

직교사상은 직교하는 두 벡터를 직교하는 두 벡터로 보내지만((1)), 직교사상의 조건은 그보다 강합니다. 노름까지 보존해야 하므로, 직교를 보존하더라도 길이를 바꾸는 사상은 직교사상이 아닙니다(반례). 정규직교 기저가 있으면 직교사상인지는 그 기저의 상만 보면 판정할 수 있습니다((3)).

## 성질의 증명

:::proof
아래에서 [[inner-product-space|내적과 내적공간]]의 번호는 "내적의 (1)"처럼, [[norm-in-inner-product-space|내적공간의 노름]]의 번호는 "노름의 (1)"처럼 줄여 쓴다. (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것이고, (T-합), (T1), (T2), (T5)는 [[linear-map|선형사상]]의 것이며, (B12)는 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 것이다.

**(1)의 증명.** $T$가 직교사상이고 $x \in V$라 하자. 노름의 (2)에 의해 $\lVert x \rVert^2 = \langle x, x \rangle$이고, 정의에서 $y = x$로 두면 $\langle Tx, Tx \rangle = \langle x, x \rangle = \lVert x \rVert^2$이다. 노름의 (1)에 의해 $0 \le \lVert x \rVert$이므로, $W$에서의 노름의 (2)를 $c = \lVert x \rVert$로 쓰면 $\lVert Tx \rVert = \lVert x \rVert$이다.

거꾸로 모든 $x$에서 $\lVert Tx \rVert = \lVert x \rVert$라 하고 $x, y \in V$라 하자. (T-합)과 (T2)에 의해 $Tx + Ty = T(x + y)$이고 $Tx - Ty = T(x - y)$이다. $W$와 $V$에서의 노름의 (6)(극화 항등식)에 의해

$$
\begin{aligned}
&\langle Tx, Ty \rangle \\
&= 4^{-1}\bigl(\lVert T(x + y) \rVert^2 - \lVert T(x - y) \rVert^2\bigr) \\
&= 4^{-1}\bigl(\lVert x + y \rVert^2 - \lVert x - y \rVert^2\bigr) \\
&= \langle x, y \rangle
\end{aligned}
$$

이다. 둘째 등호는 가정을 $x + y$와 $x - y$에 쓴 것이다. 따라서 $T$는 직교사상이다.

$T$가 직교사상이면, (T2)에 의해 $Tx - Ty = T(x - y)$이므로 앞 문단의 첫 문장을 $x - y$에 쓰면 $\lVert Tx - Ty \rVert = \lVert x - y \rVert$이다. 또 정의에 의해 $\langle x, y \rangle = 0$인 것은 정확히 $\langle Tx, Ty \rangle = 0$일 때이고, 이것이 $x \perp y$와 $Tx \perp Ty$의 정의이다.

**(2)의 증명.** $T$가 직교사상이고 $x, x' \in V$에서 $Tx = Tx'$라 하자. (T2)와 (B12)에 의해 $T(x - x') = Tx - Tx' = 0_W$이다. (1)과 노름의 (1)에 의해 $\lVert x - x' \rVert = \lVert T(x - x') \rVert = \lVert 0_W \rVert = 0$이고, 다시 노름의 (1)에 의해 $x - x' = 0_V$이며, (B12)에 의해 $x = x'$이다. [[injective-surjective-bijective|단사, 전사, 전단사]]의 단사의 동치 꼴에 의해 $T$는 단사이다.

**(3)의 증명.** $T$가 직교사상이고 $v_1, \dots, v_r$이 직교하는 열이라 하자. $i \ne j$이면 $\langle Tv_i, Tv_j \rangle = \langle v_i, v_j \rangle = 0$이므로 $Tv_i \perp Tv_j$이고, $Tv_1, \dots, Tv_r$은 직교하는 열이다. $v_1, \dots, v_r$이 정규직교 열이면 모든 $i$, $j$에서 $\langle Tv_i, Tv_j \rangle = \langle v_i, v_j \rangle$이고, 이 값은 $i = j$일 때 $1$, $i \ne j$일 때 $0$이므로 [[orthonormal-list|직교하는 열과 정규직교 열]]의 정의의 "곧" 꼴에 의해 $Tv_1, \dots, Tv_r$은 정규직교 열이다.

거꾸로 $b_1, \dots, b_n$이 $V$의 정규직교 기저이고 $Tb_1, \dots, Tb_n$이 $W$의 정규직교 열이라 하자. $x, y \in V$라 하고, [[orthonormal-basis|정규직교 기저]]의 (2)에 의해 $x$, $y$의 이 기저에 관한 좌표를 $\alpha_k = \langle x, b_k \rangle$, $\beta_k = \langle y, b_k \rangle$로 둔다. 곧 $x = \alpha_1 b_1 + \cdots + \alpha_n b_n$이고 $y = \beta_1 b_1 + \cdots + \beta_n b_n$이다. (T5)에 의해

$$
\begin{aligned}
Tx &= \alpha_1 Tb_1 + \cdots + \alpha_n Tb_n, \\
Ty &= \beta_1 Tb_1 + \cdots + \beta_n Tb_n
\end{aligned}
$$

이다. 정규직교 열 $Tb_1, \dots, Tb_n$에 [[orthonormal-list|직교하는 열과 정규직교 열]]의 (1)을 쓰면 모든 $k$에서 $\langle Tx, Tb_k \rangle = \alpha_k$이다. 내적의 (3)의 (i)의 둘째 식에 의해

$$
\begin{aligned}
\langle Tx, Ty \rangle &= \beta_1 \langle Tx, Tb_1 \rangle + \cdots \\
&\quad + \beta_n \langle Tx, Tb_n \rangle \\
&= \beta_1 \alpha_1 + \cdots + \beta_n \alpha_n
\end{aligned}
$$

이고, 오른쪽은 $k$번째 항이 $\beta_k \alpha_k$인 길이 $n$인 실수의 열의 합이다. 한편 정규직교 기저의 (3)에 의해 $\langle x, y \rangle = \alpha_1 \beta_1 + \cdots + \alpha_n \beta_n$이다. (K1)에 의해 모든 $k$에서 $\beta_k \alpha_k = \alpha_k \beta_k$이므로 두 실수의 열은 같은 함수이고, 따라서 두 합이 같다. 곧 $\langle Tx, Ty \rangle = \langle x, y \rangle$이다. ($n = 0$이면 두 합은 모두 빈 합 $0$이다.)

**(4)의 증명.** $d = \dim V$라 하자. [[orthonormal-basis-exists|정규직교 기저의 존재와 확장]]의 (1)에 의해 $V$에는 길이 $d$인 정규직교 기저 $b_1, \dots, b_d$가 있고, (3)에 의해 $Tb_1, \dots, Tb_d$는 $W$의 정규직교 열이다. 정규직교 기저의 (1)을 $W$에 쓰면 $W$의 정규직교 열의 길이는 $\dim W$ 이하이므로 $d \le \dim W$이다.

**(5)의 증명.** [[adjoint-map|수반사상]]의 (2)를 $w = Tx$에 쓰면 모든 $x, y \in V$에서

$$
\begin{aligned}
\langle (T^* \circ T)x, y \rangle &= \langle T^*(Tx), y \rangle \\
&= \langle Tx, Ty \rangle
\end{aligned}
$$

이다. $T$가 직교사상이면 오른쪽은 $\langle x, y \rangle = \langle i_V x, y \rangle$이므로, 내적의 (6)의 마지막 문장을 두 함수 $T^* \circ T$, $i_V : V \to V$에 쓰면 $T^* \circ T = i_V$이다. 거꾸로 $T^* \circ T = i_V$이면 위 식의 왼쪽이 $\langle x, y \rangle$이므로 $\langle Tx, Ty \rangle = \langle x, y \rangle$이고, $T$는 직교사상이다.

**(6)의 증명.** $\dim V = \dim W$라 하자. (2)에 의해 $T$는 단사이므로 [[injective-iff-surjective-equal-dimension|차원이 같은 공간 사이의 선형사상]]에 의해 동형사상이다. 거꾸로 $T$가 동형사상이라 하자. [[dimension|유한차원과 차원]]의 (2)에 의해 $V$에는 길이 $\dim V$인 기저 $v_1, \dots, v_d$가 있고, [[isomorphism-and-bases|동형사상과 기저]]의 (3)에 의해 $Tv_1, \dots, Tv_d$는 $W$의 기저이다. 차원의 (2)에 의해 $W$의 모든 기저의 길이는 $\dim W$이므로 $\dim V = d = \dim W$이다.

이제 $T$가 동형사상이라 하자. [[inverse-function|역관계와 역함수]]에 의해 $T \circ T^{-1} = i_W$이다. (5)에 의해 $T^* \circ T = i_V$이고, [[composition-of-linear-maps|선형사상의 합성]]의 (2)와 [[composition-is-associative|합성의 결합법칙]]에 의해

$$
\begin{aligned}
T^* &= T^* \circ i_W = T^* \circ (T \circ T^{-1}) \\
&= (T^* \circ T) \circ T^{-1} \\
&= i_V \circ T^{-1} = T^{-1}
\end{aligned}
$$

이다. 따라서 $T \circ T^* = T \circ T^{-1} = i_W$이다. [[isomorphism|동형사상]]의 (2)에 의해 $T^{-1}$은 선형사상이고, 모든 $w, w' \in W$에서 $T$가 직교사상이라는 것을 $T^{-1}w$, $T^{-1}w'$에 쓰면

$$
\begin{aligned}
&\langle T^{-1}w, T^{-1}w' \rangle \\
&= \langle T(T^{-1}w), T(T^{-1}w') \rangle \\
&= \langle w, w' \rangle
\end{aligned}
$$

이므로 $T^{-1}$은 직교사상이다. 마지막으로 $b_1, \dots, b_n$이 $V$의 정규직교 기저이면 정규직교 기저의 (1)에 의해 $n = \dim V = \dim W$이고, (3)에 의해 $Tb_1, \dots, Tb_n$은 $W$의 길이 $\dim W$인 정규직교 열이므로, 정규직교 기저의 (1)에 의해 $W$의 정규직교 기저이다.

**(7)의 증명.** [[linear-map-determined-by-basis|기저 위의 값으로 정해지는 선형사상]]의 (2)에 의해 모든 $k$에서 $Sb_k = c_k$인 선형사상 $S : V \to W$가 정확히 하나 있다. $V$는 기저 $b_1, \dots, b_n$을 가지므로 차원의 (1)에 의해 유한차원이고, $Sb_1, \dots, Sb_n$은 정규직교 열 $c_1, \dots, c_n$이므로 (3)의 뒤 문장에 의해 $S$는 직교사상이다. $b_1, \dots, b_n$이 $V$의 기저이고 $Sb_1, \dots, Sb_n$이 $W$의 기저이므로 동형사상과 기저의 (4)에 의해 $S$는 동형사상이다.

**(8)의 증명.** 모든 $x, y$에서 $\langle i_V x, i_V y \rangle = \langle x, y \rangle$이다. $T$와 $S$가 직교사상이면 선형사상의 합성의 (1)에 의해 $S \circ T$는 선형사상이고, 모든 $x, y \in V$에서 $\langle S(Tx), S(Ty) \rangle = \langle Tx, Ty \rangle = \langle x, y \rangle$이다. 첫째 등호는 $S$가 직교사상이라는 것을 $Tx$, $Ty$에 쓴 것이다. $\blacksquare$
:::

## 예시와 반례

:::example[정규직교 기저에 관한 좌표벡터]
$V$가 유한차원인 내적공간이고 $\dim V = n \ge 1$이라 합시다. [[orthonormal-basis-exists|정규직교 기저의 존재와 확장]]의 (1)에 의해 $V$에는 정규직교 기저 $\mathcal{B} = b_1, \dots, b_n$이 있습니다. [[matrix-in-bases|기저에 관한 선형사상의 행렬]]의 좌표 동형사상 $C_{\mathcal{B}} : \mathbb{R}^n \to V$의 역함수 $C_{\mathcal{B}}^{-1}$은 $v$를 좌표벡터 $[v]_{\mathcal{B}}$로 보내는 동형사상이고, [[orthonormal-basis|정규직교 기저]]의 (3)에 의해 모든 $v, w \in V$에서

$$
\langle [v]_{\mathcal{B}}, [w]_{\mathcal{B}} \rangle = \langle v, w \rangle
$$

입니다. 왼쪽은 $\mathbb{R}^n$의 [[standard-inner-product|표준내적]]입니다. 따라서 $C_{\mathcal{B}}^{-1} : V \to \mathbb{R}^n$은 직교사상입니다. 또 $x, y \in \mathbb{R}^n$이면 기저에 관한 선형사상의 행렬의 (1)에 의해 $[C_{\mathcal{B}} x]_{\mathcal{B}} = x$, $[C_{\mathcal{B}} y]_{\mathcal{B}} = y$이므로 위 식을 $v = C_{\mathcal{B}} x$, $w = C_{\mathcal{B}} y$에 쓰면 $\langle C_{\mathcal{B}} x, C_{\mathcal{B}} y \rangle = \langle x, y \rangle$이고, $C_{\mathcal{B}}$도 직교사상입니다. 정규직교 기저에 관한 좌표를 쓰면 $n$차원 내적공간의 내적 계산을 모두 $\mathbb{R}^n$의 표준내적으로 옮길 수 있다는 뜻입니다.
:::

:::counterexample[직교를 보존하지만 길이를 두 배로 늘이는 사상]
$V$가 $V \ne \{0_V\}$인 내적공간이라 합시다. 실수 $c$에 대하여 모든 $x$에서 값이 $cx$인 함수 $V \to V$는 [[linear-map-examples|선형사상의 예]]의 (3)에 의해 선형사상이고, [[inner-product-space|내적과 내적공간]]의 (1)과 [[real-number-arithmetic|(K2)]]에 의해 모든 $x, y$에서 $\langle cx, cy \rangle = (cc)\langle x, y \rangle$입니다.

$c = 2$이면 $\langle 2x, 2y \rangle = 4\langle x, y \rangle$이고 (K7)에 의해 $4 \ne 0$이므로, (K9)와 (K10)에 의해 $\langle x, y \rangle = 0$인 것은 정확히 $\langle 2x, 2y \rangle = 0$일 때입니다. 곧 이 사상은 직교하는 두 벡터를 직교하는 두 벡터로, 직교하지 않는 두 벡터를 직교하지 않는 두 벡터로 보냅니다. 그러나 $x \ne 0_V$를 하나 잡으면 내적의 조건 (iii)에 의해 $a = \langle x, x \rangle$는 $0$이 아니고, $\langle 2x, 2x \rangle = 4a$입니다. $4a = a$이면 (K12)의 (i), (v)와 (K7)에 의해 $3a = 4a - a = 0$이 되어 (K10)과 $3 \ne 0$에 의해 $a = 0$이므로 모순입니다. 따라서 $\langle 2x, 2x \rangle \ne \langle x, x \rangle$이고 이 사상은 직교사상이 아닙니다.

같은 계산으로 일반의 $c$를 봅시다. $cc = 1$이면 모든 $x, y$에서 $\langle cx, cy \rangle = \langle x, y \rangle$입니다. 거꾸로 직교사상이면 위의 $x$에서 $(cc)a = a = 1a$이고 $a \ne 0$이므로 (K11)에 의해 $cc = 1$입니다. $cc = 1$이면 (K3), (K12)로 $(c - 1)(c + 1) = cc - 1 = 0$이므로 (K10)에 의해 $c = 1$이거나 $c = -1$이고, 그 역도 맞습니다. 곧 이 사상이 직교사상인 것은 정확히 $c = 1$이거나 $c = -1$일 때입니다. 특히 모든 $x$를 $-x$로 보내는 사상은 직교사상입니다.
:::

## 확인 질문

:::check[영공간 $\{0_V\}$에서 내적공간 $W$로의 선형사상은 직교사상인가?]
그렇습니다. 정의역의 원소는 $0_V$ 하나뿐이므로 $x = y = 0_V$인 경우만 확인하면 됩니다. [[linear-map|선형사상]]의 (T1)에 의해 $T0_V = 0_W$이고, [[inner-product-space|내적과 내적공간]]의 (2)에 의해 $\langle T0_V, T0_V \rangle = \langle 0_W, 0_W \rangle = 0 = \langle 0_V, 0_V \rangle$입니다. $W$가 무엇이든 그렇습니다.
:::

:::check[$\mathbb{R}^2$에서 $\mathbb{R}$로의 직교사상이 있는가?]
없습니다. $\mathbb{R}^2$에는 표준내적을, $\mathbb{R}$에는 [[standard-inner-product|ℝⁿ 의 표준내적]]의 (6)의 내적 $xy$를 줍니다. [[dimension|유한차원과 차원]]의 (4), (5)에 의해 $\dim \mathbb{R}^2 = 2$이고 $\dim \mathbb{R} = 1$인데, 직교사상 $\mathbb{R}^2 \to \mathbb{R}$가 있으면 (4)에 의해 $2 \le 1$이 되어야 합니다.
:::
