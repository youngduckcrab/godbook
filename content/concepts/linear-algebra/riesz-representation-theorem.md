---
title: 리스 표현 정리
title_en: Riesz Representation Theorem
aliases: [리스의 표현 정리, 선형 범함수, 선형 범함수의 표현, Riesz representation theorem, linear functional, representing vector]
kind: theorem
field: linear-algebra
msc: ["15A63", "46C05"]
level: undergrad
summary: 유한차원 내적공간 V 위의 선형사상 f 에서 ℝ 로의 사상은 어떤 벡터 u 와의 내적으로 쓰인다. 곧 모든 x 에서 f(x) 가 x 와 u 의 내적인 u 가 정확히 하나 있고, 정규직교 기저 b₁, …, bₙ 이 있으면 u 는 f(b₁)b₁ + ⋯ + f(bₙ)bₙ 이다. 이 대응으로 V 와 V 에서 ℝ 로의 선형사상의 공간은 동형이다.
requires: [function, real-number-arithmetic, real-function-space, finite-sum-of-vectors, linear-map, linear-map-examples, linear-maps-form-a-vector-space, injective-surjective-bijective, isomorphism, basis, dimension, independent-and-spanning-bounds, standard-basis, matrix, transpose, matrix-product-properties, trace, inner-product-space, standard-inner-product, inner-product-examples, orthonormal-list, orthonormal-basis, orthonormal-basis-exists]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 8장 Dual spaces and tensors 첫머리(모든 공간이 유한차원이라는 약속)와 1절 Dual spaces 의 1.1 Linear functionals and the dual space — Definition 1.1, p.217; 2절 Dual of an inner product space 의 2.1 Riesz representation theorem — Theorem 2.1, 그 증명, Remark, 각주 3, pp.224–225; 2.2 Is an inner product space a dual to itself?, pp.225–226
    checked: original
    note: "출처 Theorem 2.1(p.224)은 내적공간 H 위의 linear functional L 에 대하여 모든 v 에서 L(v) = (v, y) 인 y 가 꼭 하나 있다고 진술한다. 유한차원이라는 가정은 8장 첫머리(p.217)의 'All vector spaces in this chapter are finite-dimensional' 에 있다. 출처는 linear functional 을 Definition 1.1(p.217)에서 V 에서 스칼라로의 선형사상으로 정의한다. 이 사이트는 '선형 범함수'라는 이름을 정의하지 않고 선형사상 V → ℝ 로 쓴다. 출처의 증명(pp.224–225)은 정규직교 기저 e_k 를 잡고 y 를 L_k = L(e_k) 의 켤레를 계수로 한 합으로 정한 뒤(실수에서는 켤레가 아무 일도 하지 않는다고 적는다), 좌표로 (v, y) 를 계산해 L(v) 와 같음을 보이고, 유일성은 (y, e_k) = L_k 와 정규직교 기저에 관한 분해로 보인다. 이 항목의 (2)는 그 y 이다. 존재는 출처와 같이 이 벡터로 보이되 좌표 대신 내적의 일차결합 식과 선형사상의 (T5)로 계산했고, 유일성은 모든 벡터와의 내적이 벡터를 정한다는 것(내적과 내적공간의 (6))으로 보였다. 출처의 Remark(p.225)는 진술에는 기저가 필요 없지만 증명은 정규직교 기저를 쓰며, 나타내는 벡터 y 는 기저에 따르지 않는다고 적는다. '나타내는 벡터'는 이 Remark 의 the representing vector y 를 옮긴 것이다. 각주 3(p.225)은 무한차원에서도 통하는 다른 증명이 있고 그것은 단위공의 강한 볼록성(strong convexity)과 해석학의 완비성을 쓴다고 적는다. 이 항목은 유한차원만 다룬다. (3)은 출처 2.2(pp.225–226)가 y 를 L_y(v) = (v, y) 로 보내는 사상이 단사이고 Theorem 2.1 에 의해 전사이며, 실내적공간이면 선형이어서 동형사상이라고 적는 것을 증명한 것이다. 예시 '단위행렬과의 내적으로 쓰이는 대각합'은 출처 5장 1절 Example 1.3(p.120)의 프로베니우스 내적 (A, B) = trace(B*A) 를 쓰고, 출처 1장 5.5절(p.23)은 Theorem 5.1 의 증명을 안내하면서 X 에서의 값이 trace(AX) 인 선형사상을 다룬다. 예시 'ℝ² 의 다른 정규직교 기저로 구한 나타내는 벡터'의 f 는 출처 8장 1.1(p.218)이 ℝⁿ 위의 linear functional 을 1 × n 행렬(행)로 나타내고 그 전치로 ℝⁿ 과 동형이라고 적는 것과 같은 대상이고, 계산은 출처 Remark(p.225)의 '나타내는 벡터는 기저에 따르지 않는다'를 수로 확인한 것이다. 반례 '정규직교가 아닌 기저에서 (2)의 식이 맞지 않는 예'는 출처 8장 2.3 Biorthogonal systems and orthonormal bases(pp.226–227)가 일반 기저의 분해에는 쌍대(biorthogonal) 기저를 쓰고 정규직교 기저는 자기 자신의 쌍대라고 적는 것과 같은 주제다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(리스 정리의 증명 통독). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$V$가 [[dimension|유한차원]]인 [[inner-product-space|내적공간]]이라 하자. $\mathbb{R}$은 [[real-function-space|실숫값 함수의 공간]]의 (2)에 의해 실수의 합과 곱으로 벡터공간이고, $f : V \to \mathbb{R}$는 [[linear-map|선형사상]]이다. 정규직교 기저는 [[orthonormal-basis|정규직교 기저]]의 것이다.

1. (존재와 유일성) 모든 $x \in V$에서
   $$
   f(x) = \langle x, u \rangle
   $$
   인 $u \in V$가 정확히 하나 있다. 이 $u$를 $f$를 **나타내는 벡터**(representing vector)라 한다. $V = \{0_V\}$이면 $u = 0_V$이다.
2. (정규직교 기저로 쓴 식) $n \ge 0$이 정수이고 $b_1, \dots, b_n$이 $V$의 정규직교 기저이면 $f$를 나타내는 벡터는
   $$
   u = f(b_1) b_1 + \cdots + f(b_n) b_n
   $$
   이다. 오른쪽은 $k$번째 항이 $f(b_k) b_k$인 $V$의 [[finite-sum-of-vectors|벡터의 열]]의 합이고, $n = 0$이면 빈 합 $0_V$이다.
3. ($V$와 선형사상의 공간) 각 $u \in V$에서, $x$에서의 값이 $\langle x, u \rangle$인 함수 $V \to \mathbb{R}$는 선형사상이다. 각 $u \in V$에 이 선형사상을 대응시키는 함수 $V \to L(V, \mathbb{R})$는 [[isomorphism|동형사상]]이다. 여기서 $L(V, \mathbb{R})$는 [[linear-maps-form-a-vector-space|선형사상의 공간]]이다.
:::

:::english
Let $V$ be a finite-dimensional inner product space. By item (2) of the entry on real-valued function spaces, $\mathbb{R}$ is a vector space under the sum and product of real numbers, and let $f : V \to \mathbb{R}$ be a linear map. Orthonormal bases are those of the entry on orthonormal bases.

1. (Existence and uniqueness) There is exactly one $u \in V$ such that for all $x \in V$
   $$
   f(x) = \langle x, u \rangle.
   $$
   This $u$ is called the **representing vector** of $f$. If $V = \{0_V\}$, then $u = 0_V$.
2. (Formula in an orthonormal basis) If $n \ge 0$ is an integer and $b_1, \dots, b_n$ is an orthonormal basis of $V$, then the representing vector of $f$ is
   $$
   u = f(b_1) b_1 + \cdots + f(b_n) b_n,
   $$
   where the right-hand side is the sum of the sequence of vectors of $V$ whose $k$th term is $f(b_k) b_k$, and is the empty sum $0_V$ if $n = 0$.
3. ($V$ and the space of linear maps) For each $u \in V$, the function $V \to \mathbb{R}$ whose value at $x$ is $\langle x, u \rangle$ is a linear map. The function $V \to L(V, \mathbb{R})$ that assigns this linear map to each $u \in V$ is an isomorphism, where $L(V, \mathbb{R})$ is the space of linear maps.
:::

## 직관

선형사상 $V \to \mathbb{R}$는 벡터마다 실수 하나를 내놓는 선형인 "측정"입니다. 이런 사상을 흔히 **선형 범함수**(linear functional)라 부르지만, 이 사이트는 그 이름을 따로 정의하지 않고 선형사상 $V \to \mathbb{R}$라고 씁니다. 고정한 벡터 $u$가 있으면 $x$에서의 값이 $\langle x, u \rangle$인 함수가 그런 측정의 한 예입니다. 이 정리는 유한차원 내적공간에서는 거꾸로 모든 선형인 측정이 이런 꼴, 곧 어떤 벡터 하나와의 내적이라는 것입니다.

비유하면 장바구니의 총액입니다. 상품마다 담은 개수를 늘어놓은 것을 $x$라 하면, 총액 $f(x)$는 개수에 대해 선형이고, 상품마다의 가격을 늘어놓은 가격표 $u$와의 표준내적 $\langle x, u \rangle$입니다. 가격표의 $k$번째 값은 $k$번째 상품 하나만 담았을 때의 총액 $f(e_k)$이고, 이것이 (2)의 계수 $f(b_k)$에 해당합니다. 총액을 아는 한 가격표는 하나로 정해집니다((1)의 유일성).

(2)의 식은 정규직교 기저에 대해 증명한 것입니다. 정규직교 기저에서는 $\langle x, b_k \rangle$가 $x$의 $k$번째 좌표이므로 $\langle x, u \rangle$가 "좌표와 $f(b_k)$를 곱해 더한 것"이 되고, 그것이 선형성으로 펼친 $f(x)$와 같습니다. 정규직교가 아닌 기저에서는 같은 식이 다른 벡터를 줄 수 있습니다(아래 반례). 나타내는 벡터 자체는 기저에 따르지 않고, 어느 정규직교 기저로 계산해도 같은 $u$가 나옵니다. 다만 내적을 바꾸면 나타내는 벡터도 바뀔 수 있습니다(확인 질문).

## 증명

:::idea
정규직교 기저 $b_1, \dots, b_n$으로 $x$를 푸리에 전개하면 $f(x)$는 좌표 $\langle x, b_k \rangle$와 $f(b_k)$를 곱해 더한 것이고, 이것은 $\langle x, f(b_1) b_1 + \cdots + f(b_n) b_n \rangle$을 펼친 것과 같다. 유일성은 모든 벡터와의 내적이 같은 두 벡터가 같다는 것이다.
:::

:::hint
[[orthonormal-basis-exists|정규직교 기저의 존재와 확장]]의 (1)로 정규직교 기저를 잡고, [[orthonormal-basis|정규직교 기저]]의 (2)로 $x$를 기저의 일차결합으로 씁니다.
:::

:::hint
$\langle x, u \rangle$는 [[inner-product-space|내적과 내적공간]]의 (3)의 (i)로, $f(x)$는 [[linear-map|선형사상]]의 (T5)로 펼쳐 항을 비교합니다.
:::

:::proof
아래에서 [[inner-product-space|내적과 내적공간]]의 번호는 "내적의 (1)"처럼, (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것으로 쓴다. $\mathbb{R}$의 스칼라배는 실수의 곱이다.

**(2)의 벡터가 $f$를 나타낸다는 것.** $b_1, \dots, b_n$이 $V$의 정규직교 기저라 하자. 각 $k \in \{1, \dots, n\}$에 $V$의 원소 $f(b_k) b_k$가 하나씩 정해지므로 [[real-function-space|(G)]]에 의해 $k$번째 항이 $f(b_k) b_k$인 $V$의 벡터의 열이 있다. 그 합을 $u_0 = f(b_1) b_1 + \cdots + f(b_n) b_n$이라 하자. $x \in V$를 임의로 잡는다. 내적의 (3)의 (i)의 둘째 등식에 의해 $\langle x, u_0 \rangle$는 $k$번째 항이 $f(b_k) \langle x, b_k \rangle$인 길이 $n$인 실수의 열의 합이다. 한편 정규직교 기저의 (2)에 의해 $x = \langle x, b_1 \rangle b_1 + \cdots + \langle x, b_n \rangle b_n$이고, 선형사상의 (T5)에 의해 $f(x)$는 $k$번째 항이 $\langle x, b_k \rangle f(b_k)$인 길이 $n$인 실수의 열의 합이다. (K1)에 의해 두 열은 모든 자리에서 항이 같으므로 [[function|함수]]의 같음에 의해 같은 열이고, 따라서 합도 같다. 곧 모든 $x \in V$에서 $f(x) = \langle x, u_0 \rangle$이다. ($n = 0$이면 두 합은 모두 빈 합 $0$이다.)

**(1)의 증명.** 존재: $\dim V = d$라 하면 [[orthonormal-basis-exists|정규직교 기저의 존재와 확장]]의 (1)에 의해 $V$에는 길이 $d$인 정규직교 기저가 있고, 앞 문단에 의해 그 기저로 만든 $u_0$가 모든 $x$에서 $f(x) = \langle x, u_0 \rangle$를 만족한다.

유일성: $u, u' \in V$가 모두 모든 $x \in V$에서 $f(x) = \langle x, u \rangle$, $f(x) = \langle x, u' \rangle$를 만족한다고 하자. 그러면 모든 $x$에서 $\langle x, u \rangle = \langle x, u' \rangle$이고, 내적의 조건 (i)에 의해 $\langle u, x \rangle = \langle u', x \rangle$이다. 내적의 (6)의 첫 문장에 의해 $u = u'$이다.

$V = \{0_V\}$이면 나타내는 벡터는 $V$의 원소이므로 $0_V$이다.

**(2)의 증명.** 첫 문단에 의해 $u_0 = f(b_1) b_1 + \cdots + f(b_n) b_n$은 모든 $x$에서 $f(x) = \langle x, u_0 \rangle$를 만족하므로, (1)의 유일성에 의해 $f$를 나타내는 벡터는 $u_0$이다.

**(3)의 증명.** $u \in V$이면 내적의 (1)에 의해 $x$에서의 값이 $\langle x, u \rangle$인 함수 $g_u : V \to \mathbb{R}$는 선형사상이다. 곧 $g_u \in L(V, \mathbb{R})$이다. 각 $u \in V$에 $L(V, \mathbb{R})$의 원소 $g_u$가 하나씩 정해지므로 (G)에 의해 $u$에서의 값이 $g_u$인 함수 $\Psi : V \to L(V, \mathbb{R})$가 있다.

선형: $u, u' \in V$이고 $\alpha$, $\beta$가 실수라 하자. 모든 $x \in V$에서, 내적의 (1)에 의해
$$
\begin{aligned}
g_{\alpha u + \beta u'}(x) &= \langle x, \alpha u + \beta u' \rangle \\
&= \alpha \langle x, u \rangle + \beta \langle x, u' \rangle
\end{aligned}
$$
이고, 이것은 [[linear-maps-form-a-vector-space|선형사상의 공간]]의 덧셈과 스칼라배의 정의에 의해 $(\alpha g_u + \beta g_{u'})(x)$이다. 정의역이 같은 두 함수가 모든 점에서 값이 같으므로 함수의 같음에 의해 $\Psi(\alpha u + \beta u') = \alpha \Psi(u) + \beta \Psi(u')$이고, 선형사상의 (T3)에 의해 $\Psi$는 선형사상이다.

단사: $\Psi(u) = \Psi(u')$이면 모든 $x$에서 $\langle x, u \rangle = g_u(x) = g_{u'}(x) = \langle x, u' \rangle$이므로, (1)의 유일성의 증명과 같이 내적의 조건 (i)과 내적의 (6)에 의해 $u = u'$이다.

전사: $h \in L(V, \mathbb{R})$이면 (1)에 의해 모든 $x$에서 $h(x) = \langle x, u \rangle = g_u(x)$인 $u \in V$가 있고, 함수의 같음에 의해 $\Psi(u) = g_u = h$이다.

따라서 $\Psi$는 [[injective-surjective-bijective|전단사]]인 선형사상이고, [[isomorphism|동형사상]]의 정의에 의해 동형사상이다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ² 의 다른 정규직교 기저로 구한 나타내는 벡터]
표준내적을 준 $\mathbb{R}^2$에서 $f(x) = x_1 - x_2$라 합시다. $f$는 $x$에서의 값이 $\langle x, (1, -1) \rangle$인 함수이므로 (3)에 의해 선형사상이고, 나타내는 벡터는 $(1, -1)$입니다. 이것을 표준기저가 아닌 정규직교 기저로 (2)를 써서 다시 구해 봅니다.

$b_1 = \bigl(\tfrac{5}{13}, \tfrac{12}{13}\bigr)$, $b_2 = \bigl(-\tfrac{12}{13}, \tfrac{5}{13}\bigr)$이면 $\langle b_1, b_1 \rangle = \tfrac{25 + 144}{169} = 1$, $\langle b_2, b_2 \rangle = \tfrac{144 + 25}{169} = 1$, $\langle b_1, b_2 \rangle = \tfrac{-60 + 60}{169} = 0$이므로 $b_1, b_2$는 정규직교 열이고, [[dimension|차원]]의 (4)에 의해 $\dim \mathbb{R}^2 = 2$이므로 [[orthonormal-basis|정규직교 기저]]의 (1)에 의해 정규직교 기저입니다. $f(b_1) = \tfrac{5 - 12}{13} = -\tfrac{7}{13}$, $f(b_2) = \tfrac{-12 - 5}{13} = -\tfrac{17}{13}$이므로

$$
\begin{aligned}
&f(b_1) b_1 + f(b_2) b_2 \\
&= \Bigl(\tfrac{-35 + 204}{169}, \tfrac{-84 - 85}{169}\Bigr) = (1, -1)
\end{aligned}
$$

입니다. 표준기저 $e_1, e_2$로 계산해도 $f(e_1) e_1 + f(e_2) e_2 = e_1 - e_2 = (1, -1)$이어서, 두 정규직교 기저가 같은 벡터를 줍니다.
:::

:::example[단위행렬과의 내적으로 쓰이는 대각합]
$n$이 자연수이고 $M_{n \times n}$에 [[inner-product-examples|내적의 예]]의 (2)의 프로베니우스 내적, 곧 $(A, B)$에서의 값이 $\operatorname{tr}(A^T B)$인 내적을 줍니다. [[trace|대각합]]의 (1)에 의해 $\operatorname{tr} : M_{n \times n} \to \mathbb{R}$는 선형사상입니다. 모든 $n \times n$ 행렬 $A$에서 [[matrix-product-properties|행렬 곱의 성질]]의 (4)에 의해 $A^T I_n = A^T$이고 대각합의 (3)에 의해 $\operatorname{tr} A^T = \operatorname{tr} A$이므로, $A$와 $I_n$의 프로베니우스 내적은 $\operatorname{tr}(A^T I_n) = \operatorname{tr} A$입니다. 곧 대각합은 단위행렬과의 내적입니다.

이 예시는 그런 행렬을 직접 찾았으므로 (1)을 쓰지 않고, 따라서 $M_{n \times n}$이 유한차원이라는 것도 쓰지 않습니다. 모든 $A$에서 $\operatorname{tr} A$가 $A$와 $B$의 프로베니우스 내적인 행렬 $B$가 $I_n$ 하나뿐이라는 것은 내적의 조건 (i)과 [[inner-product-space|내적과 내적공간]]의 (6)에서 나옵니다.
:::

:::counterexample[정규직교가 아닌 기저에서 (2)의 식이 맞지 않는 예]
표준내적을 준 $\mathbb{R}^2$에서 $f(x) = x_1$이라 합시다. [[standard-inner-product|ℝⁿ 의 표준내적]]의 (2)에 의해 $f(x) = \langle x, e_1 \rangle$이므로 나타내는 벡터는 $e_1 = (1, 0)$입니다. 열 $(1, 0), (1, 1)$은 $\alpha(1, 0) + \beta(1, 1) = (\alpha + \beta, \beta)$가 영벡터이면 $\beta = 0$, $\alpha = 0$이므로 일차독립이고, 길이가 $\dim \mathbb{R}^2 = 2$이므로 [[independent-and-spanning-bounds|일차독립인 열과 생성하는 열의 길이]]의 (3)에 의해 기저입니다. 그러나 $\langle (1, 0), (1, 1) \rangle = 1$이어서 정규직교 기저가 아닙니다. 이 기저로 (2)의 오른쪽을 만들면 $f((1, 0))(1, 0) + f((1, 1))(1, 1) = (1, 0) + (1, 1) = (2, 1)$인데, $x = (1, 1)$에서 $\langle (1, 1), (2, 1) \rangle = 3$이고 $f((1, 1)) = 1$이어서 $(2, 1)$은 $f$를 나타내지 않습니다.
:::

## 역사와 맥락

출처(Treil)는 이 정리를 쌍대공간을 다루는 8장에서, 그 장의 모든 벡터공간이 유한차원이라는 약속 아래 진술하고 정규직교 기저로 증명합니다. 각주에서 Treil은 무한차원에서도 통하는 다른 증명이 있고, 그 증명은 내적공간의 단위공의 강한 볼록성과 해석학의 완비성을 쓴다고 적고 있습니다. 이 사이트는 유한차원만 다룹니다.

## 확인 질문

:::check[$\mathbb{R}^2$에 가중치 $2$, $1$을 곱한 내적 $2 x_1 y_1 + x_2 y_2$를 주면 $f(x) = x_1 + x_2$를 나타내는 벡터는 무엇인가?]
$u = \bigl(\tfrac{1}{2}, 1\bigr)$입니다. 이 함수는 [[inner-product-examples|내적의 예]]의 (1)의 (iii)에 의해 내적이고, 모든 $x$에서 $2 x_1 \cdot \tfrac{1}{2} + x_2 \cdot 1 = x_1 + x_2 = f(x)$이므로 (1)의 유일성에 의해 이것이 나타내는 벡터입니다. 표준내적에서 같은 $f$를 나타내는 벡터는 $(1, 1)$이므로, 나타내는 벡터는 내적에 따라 달라질 수 있습니다.
:::

:::check[실수의 곱을 내적으로 준 $\mathbb{R}$에서 $f(x) = 5x$를 나타내는 벡터는 무엇인가?]
$5$입니다. [[standard-inner-product|ℝⁿ 의 표준내적]]의 (6)에 의해 $\mathbb{R}$의 내적은 $\langle x, y \rangle = xy$이고, [[linear-map-examples|선형사상의 예]]의 (5)에 의해 $f$는 선형사상입니다. 모든 실수 $x$에서 $f(x) = 5x = x \cdot 5 = \langle x, 5 \rangle$이므로 (1)의 유일성에 의해 나타내는 벡터는 $5$입니다. [[dimension|차원]]의 (5)에 의해 $\mathbb{R}$의 기저는 항이 $1$ 하나인 열이고 $\langle 1, 1 \rangle = 1$이므로 이 열은 정규직교 기저이며, (2)로 계산해도 $f(1) \cdot 1 = 5$입니다.
:::
