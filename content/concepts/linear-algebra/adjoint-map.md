---
title: 수반사상
title_en: Adjoint of a Linear Map
aliases: [수반 사상, 수반작용소, 수반변환, adjoint, adjoint map, adjoint operator, adjoint transformation]
kind: definition
field: linear-algebra
msc: ["15A04", "47A05"]
level: undergrad
summary: 유한차원 내적공간 사이의 선형사상 T 에 대하여, 모든 v, w 에서 Tv 와 w 의 내적이 v 와 Sw 의 내적과 같은 함수 S 를 T 의 수반사상 T* 라 한다. 리스 표현 정리로 수반사상은 정확히 하나 있고 선형이며, 합·스칼라배·합성·이중 수반·항등사상·영사상·역사상에 대한 계산 법칙이 성립한다. 표준내적에서 행렬 A 의 사상의 수반사상은 전치행렬의 사상이고, 정규직교 기저에 관한 수반사상의 행렬은 원래 행렬의 전치행렬이다.
requires: [function, inverse-function, real-number-arithmetic, real-function-space, vector-space, linear-map, linear-map-examples, linear-maps-form-a-vector-space, composition-of-linear-maps, isomorphism, dimension, standard-basis, matrix, transpose, matrix-vector-product, matrix-of-a-linear-map, matrix-in-bases, inner-product-space, standard-inner-product, inner-product-examples, orthonormal-basis, riesz-representation-theorem]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 5장 Inner product spaces 5절 Adjoint of a linear transformation. Fundamental subspaces revisited. 의 5.1 Adjoint matrices and adjoint operators, p.142; 5.1.1 Uniqueness of the adjoint, p.142; 5.1.2 Adjoint transformation in abstract setting, p.143; 5.1.3 Useful formulas, p.143. 8장 Dual spaces and tensors 3절의 3.1.3 A coordinate-free way to define the dual transformation 과 Remark 3.3, pp.229–230; 3절 연습문제 3.2, p.231
    checked: original
    note: "출처 5.1(p.142)은 m × n 행렬 A 의 Hermitian adjoint(또는 adjoint) A* 를 Aᵀ 의 성분마다 켤레를 취한 것으로 정의하고 주 성질 (Ax, y) = (x, A*y) 를 보인다. 실수 행렬에서 A* = Aᵀ 이므로 이 사이트는 행렬에 adjoint 의 이름과 * 를 쓰지 않고 전치행렬로 쓴다. (4)는 이 주 성질의 실수판이고, 증명은 ℝⁿ 의 표준내적 항목의 (4)를 인용했다. 5.1.1(p.142)은 (Ax, y) = (x, By) 가 모든 x, y 에서 성립하는 행렬 B 는 A* 뿐임을 보이고, 5.1.2(p.143)는 내적공간 사이의 사상 A 의 수반 A* 를 모든 x, y 에서 (Ax, y) = (x, A*y) 인 사상으로 정의한다. 출처는 그 존재를 정규직교 기저에 관한 행렬 [A*]_{𝒜ℬ} = ([A]_{ℬ𝒜})* 로 만들고 그것이 수반임의 증명을 독자에게 맡긴다. 이 항목은 존재를 리스 표현 정리로 보였다. 이것은 출처 8장 3.1.3(p.229)이 쌍대사상을 기저 없이 정하는 논법이고, 출처 Remark 3.3(p.230)과 연습문제 3.2(p.231)가 리스 표현 정리와 이 논법으로 수반을 기저 없이 정의하라고 독자에게 맡긴 것이다. 선형성의 계산은 출처 3.1.3 의 것과 같은 발상이다. 출처 5.1.2 는 두 공간의 정규직교 기저를 잡아 존재를 보인다. 이 항목은 V, W 가 모두 유한차원이라고 진술에서 가정한다. (6)은 출처 1장 6절 Theorem 6.5(p.26)의 '가역행렬 A 의 전치도 가역이고 (Aᵀ)⁻¹ = (A⁻¹)ᵀ' 를 수반사상으로 옮긴 것과 같은 결론이고, 증명도 출처가 (AB)ᵀ = BᵀAᵀ 로 하는 것을 (3)의 (ii)로 한 같은 발상이다. (5)는 출처 5.1.2 의 [A*]_{𝒜ℬ} = ([A]_{ℬ𝒜})* 의 실수판을 증명한 것이다. (3)의 합·스칼라배·합성·이중 수반과 (2)의 대칭 꼴은 출처 5.1.3(p.143)의 1–5 이고, 출처는 증명을 독자에게 맡긴다. 출처 5.1.3 의 목록은 이 다섯 줄이다. 예시 'ℝ³ 에서 ℝ² 로의 사상의 수반사상'은 (4)를 수로 확인한 것이다. 반례 '가중치를 곱한 내적에서 수반사상이 전치행렬의 사상이 아닌 예'는 출처 5.1.2 가 정규직교 기저를 쓰는 까닭을 수로 보인 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(리스 정리의 증명 통독). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$V$, $W$가 [[dimension|유한차원]]인 [[inner-product-space|내적공간]]이고 $T : V \to W$가 [[linear-map|선형사상]]이라 하자. [[function|함수]] $S : W \to V$가 $T$의 **수반사상**(adjoint)인 것은 정확히 모든 $v \in V$와 모든 $w \in W$에서

$$
\langle Tv, w \rangle = \langle v, Sw \rangle
$$

일 때이다. 왼쪽은 $W$의 내적이고 오른쪽은 $V$의 내적이다. 아래 (1)에 의해 $T$의 수반사상은 정확히 하나 있으며, 그것을 $T^*$로 쓴다.

1. (존재, 유일성, 선형성) $T$의 수반사상은 정확히 하나 있고, 그것은 선형사상이다. 각 $w \in W$에서 $T^* w$는 $v$에서의 값이 $\langle Tv, w \rangle$인 선형사상 $V \to \mathbb{R}$를 [[riesz-representation-theorem|리스 표현 정리]]의 (1)에서 나타내는 벡터이다.
2. (자리를 바꾼 꼴) 모든 $v \in V$와 $w \in W$에서 $\langle T^* w, v \rangle = \langle w, Tv \rangle$이다. 거꾸로 함수 $S : W \to V$가 모든 $v$, $w$에서 $\langle Sw, v \rangle = \langle w, Tv \rangle$를 만족하면 $S = T^*$이다.
3. (계산 법칙) $T_1, T_2 : V \to W$가 선형사상이고 $\alpha$가 실수이며, $U$가 유한차원인 내적공간이고 $R : U \to V$가 선형사상이라 하자. 합과 스칼라배는 [[linear-maps-form-a-vector-space|선형사상의 공간]]의 것이다.
   - (i) $(T_1 + T_2)^* = T_1^* + T_2^*$이고 $(\alpha T)^* = \alpha T^*$이다.
   - (ii) $(T \circ R)^* = R^* \circ T^*$이다.
   - (iii) $T^* : W \to V$의 수반사상은 $T$이다. 곧 $(T^*)^* = T$이다.
   - (iv) 항등함수 $i_V$의 수반사상은 $i_V$이다. [[linear-map-examples|영사상]] $o : V \to W$의 수반사상은 영사상 $o : W \to V$이다.
4. (행렬의 사상) $m$, $n$이 자연수이고 $A$가 $m \times n$ [[matrix|행렬]]이며 $\mathbb{R}^n$, $\mathbb{R}^m$에 [[standard-inner-product|표준내적]]을 주자. [[matrix-vector-product|행렬과 벡터의 곱]]의 사상 $T_A : \mathbb{R}^n \to \mathbb{R}^m$에 대하여 $(T_A)^* = T_{A^T}$이다([[transpose|전치행렬]]). 따라서 선형사상 $R : \mathbb{R}^n \to \mathbb{R}^m$의 수반사상의 [[matrix-of-a-linear-map|행렬]]은 $[R^*] = [R]^T$이다.
5. (정규직교 기저에 관한 행렬) $n$, $m$이 자연수이고 $\mathcal{B} = b_1, \dots, b_n$이 $V$의 [[orthonormal-basis|정규직교 기저]], $\mathcal{C} = c_1, \dots, c_m$이 $W$의 정규직교 기저라 하자. 그러면 [[matrix-in-bases|기저에 관한 행렬]]에 대하여
   $$
   [T^*]_{\mathcal{B}\mathcal{C}} = \bigl([T]_{\mathcal{C}\mathcal{B}}\bigr)^T
   $$
   이다. 특히 $W = V$이고 $\mathcal{C} = \mathcal{B}$이면 $[T^*]_{\mathcal{B}} = ([T]_{\mathcal{B}})^T$이다.
6. (동형사상) $T$가 [[isomorphism|동형사상]]이면 $T^*$도 동형사상이고 $(T^*)^{-1} = (T^{-1})^*$이다.
:::

:::english
Let $V$, $W$ be finite-dimensional inner product spaces and let $T : V \to W$ be a linear map. A function $S : W \to V$ is an **adjoint** of $T$ exactly when for all $v \in V$ and all $w \in W$

$$
\langle Tv, w \rangle = \langle v, Sw \rangle,
$$

where the left-hand side is the inner product of $W$ and the right-hand side is that of $V$. By (1) below, $T$ has exactly one adjoint, which is written $T^*$.

1. (Existence, uniqueness, linearity) $T$ has exactly one adjoint, and it is a linear map. For each $w \in W$, $T^* w$ is the vector that represents, in the sense of item (1) of the Riesz representation theorem, the linear map $V \to \mathbb{R}$ whose value at $v$ is $\langle Tv, w \rangle$.
2. (Swapped form) For all $v \in V$ and $w \in W$, $\langle T^* w, v \rangle = \langle w, Tv \rangle$. Conversely, if a function $S : W \to V$ satisfies $\langle Sw, v \rangle = \langle w, Tv \rangle$ for all $v$, $w$, then $S = T^*$.
3. (Rules) Let $T_1, T_2 : V \to W$ be linear maps and $\alpha$ a real number, and let $U$ be a finite-dimensional inner product space and $R : U \to V$ a linear map. Sums and scalar multiples are those of the space of linear maps.
   - (i) $(T_1 + T_2)^* = T_1^* + T_2^*$ and $(\alpha T)^* = \alpha T^*$.
   - (ii) $(T \circ R)^* = R^* \circ T^*$.
   - (iii) The adjoint of $T^* : W \to V$ is $T$; that is, $(T^*)^* = T$.
   - (iv) The adjoint of the identity function $i_V$ is $i_V$. The adjoint of the zero map $o : V \to W$ is the zero map $o : W \to V$.
4. (Maps of matrices) Let $m$, $n$ be natural numbers, let $A$ be an $m \times n$ matrix, and give $\mathbb{R}^n$, $\mathbb{R}^m$ the standard inner products. For the map $T_A : \mathbb{R}^n \to \mathbb{R}^m$ of the matrix-vector product, $(T_A)^* = T_{A^T}$. Hence for a linear map $R : \mathbb{R}^n \to \mathbb{R}^m$ the matrix of its adjoint is $[R^*] = [R]^T$.
5. (Matrices with respect to orthonormal bases) Let $n$, $m$ be natural numbers, let $\mathcal{B} = b_1, \dots, b_n$ be an orthonormal basis of $V$ and $\mathcal{C} = c_1, \dots, c_m$ an orthonormal basis of $W$. Then for the matrices with respect to bases
   $$
   [T^*]_{\mathcal{B}\mathcal{C}} = \bigl([T]_{\mathcal{C}\mathcal{B}}\bigr)^T.
   $$
   In particular, if $W = V$ and $\mathcal{C} = \mathcal{B}$, then $[T^*]_{\mathcal{B}} = ([T]_{\mathcal{B}})^T$.
6. (Isomorphisms) If $T$ is an isomorphism, then so is $T^*$, and $(T^*)^{-1} = (T^{-1})^*$.
:::

## 직관

수반사상은 내적 안에서 $T$를 한쪽 자리에서 다른 쪽 자리로 옮기는 사상입니다. $Tv$를 $w$와 내적하는 대신, $v$는 그대로 두고 $w$를 $T^*$로 $V$에 보낸 뒤 $V$에서 내적해도 값이 같습니다. 비유하면 내적을 "$w$ 방향으로 재는 측정"으로 볼 때, 물건 $v$를 $T$로 옮긴 다음 재는 것과, 재는 기준 $w$를 $T^*$로 $V$에 옮겨 놓고 물건을 제자리에서 재는 것이 모든 $v$와 모든 $w$에서 같은 값을 준다는 것입니다. $T^*$는 $W$에서 $V$로 가지만 일반적으로 $T$의 역사상이 아닙니다(아래 예시). $V$, $W$가 유한차원이면 $T$가 동형사상이 아니어도 수반사상이 있습니다.

$w$를 하나 고정하면 $v$에서의 값이 $\langle Tv, w \rangle$인 함수는 선형사상 $V \to \mathbb{R}$이므로, 리스 표현 정리가 그것을 나타내는 $V$의 벡터를 하나 줍니다. 그 벡터가 $T^* w$입니다((1)). 수반사상이 하나뿐이므로, 어떤 함수가 정의의 등식을 만족하는지만 확인하면 그것이 수반사상입니다. (3)의 계산 법칙은 모두 이렇게 증명됩니다.

표준내적에서는 이 옮기기가 전치행렬입니다((4)). 일반적인 공간에서도 정규직교 기저를 잡으면 수반사상의 행렬은 전치행렬입니다((5)). 정규직교가 아닌 기저나 다른 내적에서는 그렇지 않을 수 있습니다(아래 반례).

이름에 대하여: 강의 "선형대수 2"의 [[adjugate-matrix|수반행렬]] $\operatorname{adj} A$(adjugate)는 여인수로 만든 행렬이고, 이 항목의 수반사상(adjoint)과는 다른 것입니다. 이 사이트는 행렬에는 adjoint 의 이름과 기호 $A^*$를 쓰지 않습니다. 실수 행렬에서 출처의 adjoint $A^*$는 전치행렬 $A^T$와 같기 때문입니다.

## 성질의 증명

:::proof
아래에서 [[inner-product-space|내적과 내적공간]]의 번호는 "내적의 (1)"처럼 쓴다. 정의역이 같은 두 함수가 같다는 것은 [[function|함수]]의 같음, 곧 모든 점에서 값이 같다는 것으로 보인다.

**(1)의 증명.** $w \in W$를 고정하자. 내적의 (1)에 의해 $W$에서 $x$에서의 값이 $\langle x, w \rangle$인 함수 $W \to \mathbb{R}$는 선형사상이고, [[composition-of-linear-maps|선형사상의 합성]]의 (1)에 의해 그것과 $T$의 합성, 곧 $v$에서의 값이 $\langle Tv, w \rangle$인 함수 $g_w : V \to \mathbb{R}$는 선형사상이다. $V$는 유한차원이므로 [[riesz-representation-theorem|리스 표현 정리]]의 (1)에 의해 모든 $v \in V$에서 $g_w(v) = \langle v, u \rangle$인 $u \in V$가 정확히 하나 있다. 이것을 $u_w$라 하자. 각 $w \in W$에 $V$의 원소 $u_w$가 하나씩 정해지므로 [[real-function-space|(G)]]에 의해 $w$에서의 값이 $u_w$인 함수 $S_0 : W \to V$가 있고, 모든 $v$, $w$에서 $\langle Tv, w \rangle = g_w(v) = \langle v, S_0 w \rangle$이다. 따라서 $S_0$은 $T$의 수반사상이다.

유일성: $S : W \to V$도 $T$의 수반사상이면, 각 $w$에서 $Sw$는 모든 $v$에서 $g_w(v) = \langle v, Sw \rangle$를 만족하므로 리스 표현 정리의 (1)의 유일성에 의해 $Sw = u_w = S_0 w$이다. 따라서 $S = S_0$이다.

선형: $w, w' \in W$이고 $\alpha$, $\beta$가 실수라 하자. 모든 $v \in V$에서, 정의와 내적의 (1)에 의해
$$
\begin{aligned}
&\langle v, S_0(\alpha w + \beta w') \rangle \\
&= \langle Tv, \alpha w + \beta w' \rangle \\
&= \alpha \langle Tv, w \rangle + \beta \langle Tv, w' \rangle \\
&= \alpha \langle v, S_0 w \rangle + \beta \langle v, S_0 w' \rangle \\
&= \langle v, \alpha S_0 w + \beta S_0 w' \rangle
\end{aligned}
$$
이다. 내적의 조건 (i)에 의해 모든 $v$에서 $\langle S_0(\alpha w + \beta w'), v \rangle = \langle \alpha S_0 w + \beta S_0 w', v \rangle$이므로, 내적의 (6)의 첫 문장에 의해 $S_0(\alpha w + \beta w') = \alpha S_0 w + \beta S_0 w'$이다. [[linear-map|선형사상]]의 (T3)에 의해 $S_0$은 선형사상이다. 마지막 문장은 $T^* = S_0$과 $u_w$의 정의이다.

**(2)의 증명.** 정의의 등식의 양쪽에 내적의 조건 (i)을 쓰면 $\langle T^* w, v \rangle = \langle v, T^* w \rangle = \langle Tv, w \rangle = \langle w, Tv \rangle$이다. 거꾸로 $S$가 모든 $v$, $w$에서 $\langle Sw, v \rangle = \langle w, Tv \rangle$를 만족하면, 같은 방식으로 $\langle Tv, w \rangle = \langle w, Tv \rangle = \langle Sw, v \rangle = \langle v, Sw \rangle$이므로 $S$는 $T$의 수반사상이고, (1)의 유일성에 의해 $S = T^*$이다.

**(3)의 증명.** 각 경우에 오른쪽의 함수가 왼쪽의 사상의 수반사상의 정의를 만족함을 보이면 (1)의 유일성에 의해 두 쪽이 같다. $v \in V$, $w \in W$, $x \in U$는 임의이다.

(i) [[linear-maps-form-a-vector-space|선형사상의 공간]]의 (1)에 의해 $T_1 + T_2$와 $\alpha T$는 선형사상 $V \to W$이고, $T_1^* + T_2^*$와 $\alpha T^*$는 함수 $W \to V$이다. 그 항목의 덧셈의 정의와 내적의 (1)에 의해
$$
\begin{aligned}
&\langle (T_1 + T_2) v, w \rangle \\
&= \langle T_1 v, w \rangle + \langle T_2 v, w \rangle \\
&= \langle v, T_1^* w \rangle + \langle v, T_2^* w \rangle \\
&= \langle v, (T_1^* + T_2^*) w \rangle
\end{aligned}
$$
이다. 스칼라배의 정의와 내적의 조건 (ii)와 내적의 (1)에 의해 $\langle (\alpha T) v, w \rangle = \alpha \langle Tv, w \rangle = \alpha \langle v, T^* w \rangle = \langle v, (\alpha T^*) w \rangle$이다.

(ii) 선형사상의 합성의 (1)에 의해 $T \circ R : U \to W$는 선형사상이고, $U$, $W$는 유한차원이므로 그 수반사상이 있다. $R^* \circ T^*$는 함수 $W \to U$이다. $R$과 $T$의 수반사상의 정의를 차례로 쓰면 $\langle (T \circ R) x, w \rangle = \langle T(Rx), w \rangle = \langle Rx, T^* w \rangle = \langle x, R^*(T^* w) \rangle = \langle x, (R^* \circ T^*) w \rangle$이다.

(iii) (1)에 의해 $T^* : W \to V$는 유한차원 내적공간 사이의 선형사상이므로 수반사상 $(T^*)^* : V \to W$가 있고, 그것은 모든 $w \in W$, $v \in V$에서 $\langle T^* w, v \rangle = \langle w, (T^*)^* v \rangle$인 하나뿐인 함수이다. (2)에 의해 $T$가 이 등식을 만족하므로 $(T^*)^* = T$이다.

(iv) $\langle i_V v, v' \rangle = \langle v, v' \rangle = \langle v, i_V v' \rangle$ ($v, v' \in V$)이므로 $i_V$는 $i_V$의 수반사상이다. [[linear-map-examples|선형사상의 예]]의 (1)의 영사상 $o : V \to W$와 $o : W \to V$에 대하여, 내적의 (2)에 의해 $\langle o v, w \rangle = \langle 0_W, w \rangle = 0 = \langle v, 0_V \rangle = \langle v, o w \rangle$이다.

**(4)의 증명.** [[dimension|차원]]의 (4)에 의해 $\mathbb{R}^n$, $\mathbb{R}^m$은 유한차원이고, [[standard-inner-product|ℝⁿ 의 표준내적]]의 (1)에 의해 표준내적은 내적이다. [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)에 의해 $T_A$와 $T_{A^T} : \mathbb{R}^m \to \mathbb{R}^n$은 선형사상이다($A^T$는 $n \times m$ 행렬이다). 표준내적의 (4)에 의해 모든 $x \in \mathbb{R}^n$, $y \in \mathbb{R}^m$에서 $\langle T_A x, y \rangle = \langle Ax, y \rangle = \langle x, A^T y \rangle = \langle x, T_{A^T} y \rangle$이므로, (1)의 유일성에 의해 $(T_A)^* = T_{A^T}$이다. $R : \mathbb{R}^n \to \mathbb{R}^m$이 선형사상이면 [[matrix-of-a-linear-map|선형사상의 행렬]]의 (1)에 의해 $R = T_{[R]}$이므로 $R^* = T_{[R]^T}$이고, 그 항목의 (2)에 의해 $[R^*] = [T_{[R]^T}] = [R]^T$이다.

**(5)의 증명.** $[T]_{\mathcal{C}\mathcal{B}}$는 $m \times n$ 행렬이고, (1)에 의해 $T^* : W \to V$가 선형사상이므로 $[T^*]_{\mathcal{B}\mathcal{C}}$는 $n \times m$ 행렬이다([[matrix-in-bases|기저에 관한 행렬]]의 정의. 둘째 첨자가 정의역의 기저이다). $k \in \{1, \dots, n\}$, $j \in \{1, \dots, m\}$이라 하자. [[orthonormal-basis|정규직교 기저]]의 (4)를 $T^* : W \to V$와 정의역의 정규직교 기저 $\mathcal{C}$, 공역의 정규직교 기저 $\mathcal{B}$에 쓰면 $([T^*]_{\mathcal{B}\mathcal{C}})_{k,j} = \langle T^* c_j, b_k \rangle$이다. (2)와 내적의 조건 (i)에 의해 이것은 $\langle c_j, T b_k \rangle = \langle T b_k, c_j \rangle$이고, 정규직교 기저의 (4)를 $T$에 쓰면 $([T]_{\mathcal{C}\mathcal{B}})_{j,k}$이며, [[transpose|전치행렬]]의 정의에 의해 $\bigl(([T]_{\mathcal{C}\mathcal{B}})^T\bigr)_{k,j}$이다. 두 $n \times m$ 행렬의 모든 성분이 같으므로 [[matrix|행렬]]의 (2)에 의해 두 행렬은 같다. $W = V$, $\mathcal{C} = \mathcal{B}$이면 $[\,\cdot\,]_{\mathcal{B}}$는 $[\,\cdot\,]_{\mathcal{B}\mathcal{B}}$의 줄임이다.

**(6)의 증명.** [[isomorphism|동형사상]]의 (2)에 의해 $T^{-1} : W \to V$는 선형사상이고, [[inverse-function|역함수]]의 정의 뒤의 두 등식에 의해 $T^{-1} \circ T = i_V$, $T \circ T^{-1} = i_W$이다. (3)의 (ii)를 $T^{-1} : W \to V$와 $R = T$에 쓰고 (iv)를 쓰면 $T^* \circ (T^{-1})^* = (T^{-1} \circ T)^* = (i_V)^* = i_V$이고, (ii)를 $T$와 $R = T^{-1}$에 쓰고 (iv)를 $W$에 쓰면 $(T^{-1})^* \circ T^* = (T \circ T^{-1})^* = (i_W)^* = i_W$이다. $(T^{-1})^* : V \to W$는 (1)에 의해 선형사상이므로, 동형사상의 (3)을 선형사상 $T^* : W \to V$와 $(T^{-1})^*$에 쓰면 $T^*$는 동형사상이고 $(T^*)^{-1} = (T^{-1})^*$이다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ³ 에서 ℝ² 로의 사상의 수반사상]
$A = \begin{pmatrix} 1 & 0 & 2 \\ -1 & 3 & 0 \end{pmatrix}$이라 하면 $T_A : \mathbb{R}^3 \to \mathbb{R}^2$이고, (4)에 의해 표준내적에 관한 수반사상은 $T_{A^T} : \mathbb{R}^2 \to \mathbb{R}^3$, $A^T = \begin{pmatrix} 1 & -1 \\ 0 & 3 \\ 2 & 0 \end{pmatrix}$입니다. $x = (1, 1, 1)$, $y = (2, -1)$로 확인하면 행 규칙에 의해 $Ax = (1 + 0 + 2, -1 + 3 + 0) = (3, 2)$이고 $\langle Ax, y \rangle = 6 - 2 = 4$입니다. 한편 $A^T y = (2 + 1, 0 - 3, 4 + 0) = (3, -3, 4)$이고 $\langle x, A^T y \rangle = 3 - 3 + 4 = 4$입니다.

$(T_A)^*$는 $\mathbb{R}^2$에서 $\mathbb{R}^3$으로 가지만 $T_A$의 역사상이 아닙니다. 예를 들어 $z = Ax = (3, 2)$로 두면 $(T_A)^*(T_A x) = A^T z = (3 - 2, 0 + 6, 6 + 0) = (1, 6, 6)$이어서 $x$로 돌아오지 않습니다.
:::

:::example[ℝ 에서 ℝ² 로의 사상의 수반사상]
$\mathbb{R}$에 실수의 곱을 내적으로 주고([[standard-inner-product|ℝⁿ 의 표준내적]]의 (6)) $\mathbb{R}^2$에 표준내적을 줍니다. [[dimension|차원]]의 (4), (5)에 의해 두 공간은 유한차원입니다. 실수 $t$에서의 값이 $t(1, 2) = (t, 2t)$인 함수 $T : \mathbb{R} \to \mathbb{R}^2$는 [[vector-space|벡터공간]]의 (V8)과 (V6)에 의해 $T(s + t) = Ts + Tt$, $T(\alpha t) = \alpha(Tt)$이므로 선형사상입니다. $y = (y_1, y_2)$에서의 값이 $y_1 + 2 y_2$인 함수 $S : \mathbb{R}^2 \to \mathbb{R}$를 보면, 모든 $t$와 $y$에서
$$
\begin{aligned}
\langle Tt, y \rangle &= t y_1 + 2t y_2 \\
&= t(y_1 + 2 y_2) = \langle t, Sy \rangle
\end{aligned}
$$
이므로 정의에 의해 $S = T^*$입니다. $\mathbb{R}$과 $\mathbb{R}^1$은 다른 집합이어서 (4)를 그대로 쓸 수는 없지만, $T^* y$는 $y$와 $T(1) = (1, 2)$의 내적이라는 같은 모양이 나옵니다.
:::

:::counterexample[가중치를 곱한 내적에서 수반사상이 전치행렬의 사상이 아닌 예]
$\mathbb{R}^2$에 [[inner-product-examples|내적의 예]]의 (1)의 가중치 $3$, $1$을 곱한 내적 $\langle x, y \rangle_w = 3 x_1 y_1 + x_2 y_2$를 줍니다. 가중치가 모두 양수이므로 그 항목의 (1)의 (iii)에 의해 내적입니다. $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$이면 $Ax = (x_2, 0)$이고 $A^T y = (0, y_1)$입니다.

$y$에서의 값이 $(0, 3 y_1)$인 함수 $S$를 보면, 모든 $x$, $y$에서 $\langle Ax, y \rangle_w = 3 x_2 y_1$이고 $\langle x, Sy \rangle_w = 3 x_1 \cdot 0 + x_2 \cdot 3 y_1 = 3 x_2 y_1$이므로, 이 내적에 관한 $T_A$의 수반사상은 $S$입니다. 그런데 $x = y = (1, 1)$에서 $\langle x, A^T y \rangle_w = 0 + 1 = 1$이고 $\langle Ax, y \rangle_w = 3$이어서 $T_{A^T}$는 수반사상이 아닙니다. 표준기저 $e_1, e_2$에 관한 행렬로 보면 $T_A$의 행렬은 $A$이고 $S$의 행렬은 $\begin{pmatrix} 0 & 0 \\ 3 & 0 \end{pmatrix}$이어서 $A^T$가 아닙니다. 이 내적에서는 $\langle e_1, e_1 \rangle_w = 3$이어서 표준기저가 정규직교 기저가 아니므로 (5)와 어긋나지 않습니다.
:::

## 확인 질문

:::check[$W = V$이고 $\gamma$가 실수이며 $T$가 모든 $v$에서 값이 $\gamma v$인 사상이면 $T^*$는 무엇인가?]
$T^* = T$입니다. [[linear-maps-form-a-vector-space|선형사상의 공간]]의 스칼라배로 보면 $T = \gamma i_V$이므로 (3)의 (i)과 (iv)에 의해 $T^* = \gamma (i_V)^* = \gamma i_V = T$입니다. 정의로 직접 보아도 $\langle \gamma v, v' \rangle = \gamma \langle v, v' \rangle = \langle v, \gamma v' \rangle$입니다.
:::

:::check[$W = \{0_W\}$이면 $T^* : W \to V$는 무엇인가? $V = \{0_V\}$이면 어떤가?]
두 경우 모두 영사상입니다. $W = \{0_W\}$이면 $W$의 원소는 $0_W$뿐이고, (1)에 의해 $T^*$는 선형사상이므로 [[linear-map|선형사상]]의 (T1)에 의해 $T^* 0_W = 0_V$입니다. $V = \{0_V\}$이면 $T^*$의 값은 모두 $V$의 원소, 곧 $0_V$입니다.
:::
