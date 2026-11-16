---
title: 선형사상의 행렬
title_en: Matrix of a Linear Map
aliases: [표준행렬, 선형변환의 행렬, 표현행렬, matrix of a linear map, matrix of a linear transformation, standard matrix]
kind: theorem
field: linear-algebra
msc: ["15A04"]
level: undergrad
summary: ℝⁿ 에서 ℝᵐ 으로의 선형사상 T 의 행렬 [T] 는 k 번째 열이 T e_k 인 m × n 행렬이다. 모든 x 에서 Tx = [T]x 이고, T 를 [T] 로 보내는 대응은 선형사상의 공간에서 행렬의 공간으로의 동형사상이다.
requires: [real-number-arithmetic, vector-space, function, function-composition, inverse-function, injective-surjective-bijective, real-function-space, finite-sum-of-vectors, standard-basis, linear-map, linear-map-examples, linear-maps-form-a-vector-space, isomorphism, matrix, matrix-vector-product]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 3.2절, pp.13–14; 3.4절 Conclusions 와 기호 [T], pp.15–16; 4절 끝의 Remark, p.18; 6.1절 항등사상의 행렬, p.24
    checked: original
    note: "출처는 3.2절(pp.13–14)에서 선형사상 T : Fⁿ → Fᵐ 의 값은 표준기저 위의 값 a_k = T(e_k) 만 알면 정해진다고 하고, x = x_1e_1 + ⋯ + x_ne_n 과 T 의 선형성으로 T(x) = x_1a_1 + ⋯ + x_na_n 을 계산한 뒤 a_k 를 k 번째 열로 하는 행렬이 T 의 정보를 모두 담는다고 적는다. 3.4절(pp.15–16)은 T 의 행렬의 k 번째 열이 Te_k 이고 T(x) = Ax 라고 정리하며, T 의 행렬을 흔히 [T] 로 쓴다고 적는다(p.16). 이 항목의 (1)이 그 계산이다. 출처는 같은 곳(p.16)에서 선형사상과 그 행렬을 흔히 구별하지 않고 같은 기호로 쓰며, 이 책도 혼동이 없을 때는 같은 기호를 쓰겠다고 적는다. 이 항목은 선형사상 T 와 행렬 [T], 행렬 A 와 선형사상 T_A 를 기호로 구별한다. 출처는 4절 끝의 Remark(p.18)에서 Fⁿ → Fᵐ 의 선형사상의 연산이 그 행렬의 연산에 대응한다고 적는데, 그 Remark 에 증명은 없다. 이 항목의 (4)가 그 증명이다. 출처는 6.1절(p.24)에서 항등사상의 행렬이 I_n 이라고 'Clearly'를 붙여 적는다. 이 항목의 (5)가 이에 해당한다. 모든 행렬이 어떤 선형사상의 행렬이라는 (2), 대응이 전단사라는 (3), 대응이 동형사상이라는 결론, 대응의 이름 Φ 와 각 증명은 이 사이트가 썼다. 예시와 반례와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$m$, $n$이 자연수이고 $T : \mathbb{R}^n \to \mathbb{R}^m$이 [[linear-map|선형사상]]이라 하자. $e_1, \dots, e_n$은 $\mathbb{R}^n$의 [[standard-basis|표준기저]]이고, $Te_1, \dots, Te_n$은 [[linear-map|선형사상]]에서 정한, $k$번째 항이 $Te_k$인 $\mathbb{R}^m$의 벡터의 열이다. [[matrix|행렬]]의 (4)에 의해 모든 $k \in \{1, \dots, n\}$에서 $k$번째 열이 $Te_k$인 $m \times n$ 행렬이 정확히 하나 있다. 이 행렬을 $T$의 **행렬**(matrix of $T$)이라 하고 $[T]$로 쓴다. $m \times n$ 행렬 $A$에 대하여 $T_A : \mathbb{R}^n \to \mathbb{R}^m$은 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)에서 정한, $x$에서의 값이 $Ax$인 선형사상이다. 선형사상 $T$와 행렬 $[T]$, 행렬 $A$와 선형사상 $T_A$는 서로 다른 대상이며 기호로 구별한다.

1. 모든 $x \in \mathbb{R}^n$에서 $Tx = [T]x$이다. 곧 $T = T_{[T]}$이다.
2. $A$가 $m \times n$ 행렬이면 $[T_A] = A$이다.
3. 각 $T \in L(\mathbb{R}^n, \mathbb{R}^m)$에 $m \times n$ 행렬 $[T]$가 하나 정해지므로 [[real-function-space|(G)]]에 의해 $T$에서의 값이 $[T]$인 함수 $\Phi : L(\mathbb{R}^n, \mathbb{R}^m) \to M_{m \times n}$이 있다. $\Phi$는 [[injective-surjective-bijective|전단사]]이고, 그 [[inverse-function|역함수]] $\Phi^{-1} : M_{m \times n} \to L(\mathbb{R}^n, \mathbb{R}^m)$은 $A$에서의 값이 $T_A$인 함수이다.
4. $S, T \in L(\mathbb{R}^n, \mathbb{R}^m)$이고 $\alpha$가 실수이면 $[S + T] = [S] + [T]$이고 $[\alpha T] = \alpha[T]$이다. 왼쪽의 $S + T$와 $\alpha T$는 [[linear-maps-form-a-vector-space|선형사상의 공간]]의 연산이고, 오른쪽은 [[matrix|행렬]]의 (1)의 연산이다. 따라서 $\Phi$는 벡터공간 $L(\mathbb{R}^n, \mathbb{R}^m)$에서 벡터공간 $M_{m \times n}$으로의 [[isomorphism|동형사상]]이고, $L(\mathbb{R}^n, \mathbb{R}^m) \cong M_{m \times n}$이다.
5. $\mathbb{R}^n$ 위의 항등함수 $i_{\mathbb{R}^n}$의 행렬은 단위행렬 $I_n$이다.
:::

:::english
Let $m$, $n$ be natural numbers and $T : \mathbb{R}^n \to \mathbb{R}^m$ a linear map. Let $e_1, \dots, e_n$ be the standard basis of $\mathbb{R}^n$, and let $Te_1, \dots, Te_n$ be the sequence of vectors of $\mathbb{R}^m$ whose $k$-th term is $Te_k$, as defined in the entry on linear maps. By (4) of the entry on matrices there is exactly one $m \times n$ matrix whose $k$-th column is $Te_k$ for every $k \in \{1, \dots, n\}$. This matrix is called the **matrix of $T$** and written $[T]$. For an $m \times n$ matrix $A$, $T_A : \mathbb{R}^n \to \mathbb{R}^m$ is the linear map, defined in (2) of the entry on the matrix–vector product, whose value at $x$ is $Ax$. The linear map $T$ and the matrix $[T]$, and the matrix $A$ and the linear map $T_A$, are different objects and are distinguished by notation.

1. $Tx = [T]x$ for every $x \in \mathbb{R}^n$. That is, $T = T_{[T]}$.
2. If $A$ is an $m \times n$ matrix, then $[T_A] = A$.
3. Since an $m \times n$ matrix $[T]$ is assigned to each $T \in L(\mathbb{R}^n, \mathbb{R}^m)$, by (G) there is a function $\Phi : L(\mathbb{R}^n, \mathbb{R}^m) \to M_{m \times n}$ whose value at $T$ is $[T]$. $\Phi$ is a bijection, and its inverse function $\Phi^{-1} : M_{m \times n} \to L(\mathbb{R}^n, \mathbb{R}^m)$ is the function whose value at $A$ is $T_A$.
4. If $S, T \in L(\mathbb{R}^n, \mathbb{R}^m)$ and $\alpha$ is a real number, then $[S + T] = [S] + [T]$ and $[\alpha T] = \alpha[T]$. On the left, $S + T$ and $\alpha T$ are the operations of the space of linear maps, and on the right they are the operations in (1) of the entry on matrices. Hence $\Phi$ is an isomorphism from the vector space $L(\mathbb{R}^n, \mathbb{R}^m)$ to the vector space $M_{m \times n}$, and $L(\mathbb{R}^n, \mathbb{R}^m) \cong M_{m \times n}$.
5. The matrix of the identity function $i_{\mathbb{R}^n}$ on $\mathbb{R}^n$ is the identity matrix $I_n$.
:::

## 직관

선형사상을 기계로, 그 행렬을 기계의 사양표로 생각할 수 있습니다. 사양표에는 표준 입력 $e_1, \dots, e_n$을 넣었을 때 나오는 값 $Te_1, \dots, Te_n$만 적혀 있습니다. 그래도 아무 입력 $x$의 출력을 계산할 수 있는 것은 $x$가 표준 입력들의 일차결합이고 선형사상이 일차결합을 같은 계수의 일차결합으로 보내기 때문입니다. 비유가 맞는 곳은 "몇 개의 값으로 전부가 정해진다"는 점이고, 이것은 기계가 선형이라는 가정 아래에서 맞습니다. 선형이 아닌 함수는 표준 입력에서의 값이 영사상과 같아도 다른 입력에서는 다를 수 있습니다(아래 반례).

증명에서 선형이라는 가정은 (1)에서 $T$를 일차결합에 통과시키는 단계, 곧 [[linear-map|선형사상]]의 (T5)에서 쓰입니다. (2)는 반대 방향으로, 행렬에서 출발해 사상을 만들고 다시 행렬을 읽으면 처음 행렬이 나온다는 것입니다. 두 방향이 서로를 되돌리므로 선형사상 $\mathbb{R}^n \to \mathbb{R}^m$과 $m \times n$ 행렬은 정확히 짝지어지고 (3), 이 짝짓기는 덧셈과 스칼라배까지 보존합니다 (4).

## 증명

:::idea
선형사상은 표준기저 위의 값으로 정해지고, 행렬은 열로 정해진다. 그래서 "$T$에서 행렬로"와 "행렬에서 사상으로"의 두 대응을 차례로 하면 처음으로 돌아오고, 두 합성이 모두 항등함수이므로 대응은 전단사이다. 연산의 보존은 열마다 확인한다.
:::

:::hint
(1)은 $x = x_1 e_1 + \cdots + x_n e_n$으로 쓰고 $T$의 선형성을 쓰세요. 그 결과를 $[T]x$의 정의와 항마다 비교하면 됩니다.
:::

:::hint
(3)에서 전단사를 직접 보이는 대신, $A$에서 $T_A$로 가는 함수를 $\Psi$라 하고 $\Psi \circ \Phi$와 $\Phi \circ \Psi$가 항등함수임을 보이세요. [[isomorphism|동형사상]]의 (1)이 나머지를 해 줍니다.
:::

:::proof
$\mathbb{R}^m$의 덧셈과 스칼라배는 [[real-function-space|실숫값 함수의 공간]]에서 정한 것이고, [[finite-sum-of-vectors|벡터의 유한 합]]의 진술에 의해 길이가 같고 모든 자리의 항이 같은 두 벡터의 열은 같은 열이며 같은 열의 합은 같다. $L(\mathbb{R}^n, \mathbb{R}^m)$의 원소는 선형사상이므로 그 행렬이 정해진다.

**(1)의 증명.** $x = (x_1, \dots, x_n) \in \mathbb{R}^n$이라 하자. [[standard-basis|표준기저]]의 (3)에 의해 $x = x_1 e_1 + \cdots + x_n e_n$이다. $T$가 선형사상이므로 [[linear-map|선형사상]]의 (T5)를 실수의 열 $x_1, \dots, x_n$과 벡터의 열 $e_1, \dots, e_n$에 쓰면
$$Tx = T(x_1 e_1 + \cdots + x_n e_n) = x_1 Te_1 + \cdots + x_n Te_n$$
이고, 오른쪽은 $k$번째 항이 $x_k(Te_k)$인 $\mathbb{R}^m$의 벡터의 열의 합이다. 한편 $[T]$의 $k$번째 열은 $Te_k$이므로 [[matrix-vector-product|행렬과 벡터의 곱]]의 정의에 의해 $[T]x$도 $k$번째 항이 $x_k(Te_k)$인 벡터의 열의 합이다. 두 벡터의 열이 같으므로 $Tx = [T]x$이다. $T$와 $T_{[T]}$는 정의역이 $\mathbb{R}^n$으로 같고 모든 $x$에서 $T_{[T]} x = [T]x = Tx$이므로, [[function|함수의 같음]]에 의해 $T = T_{[T]}$이다.

**(2)의 증명.** [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)에 의해 $T_A$는 선형사상이므로 $[T_A]$가 정해지고, 그 $k$번째 열은 $T_A e_k = Ae_k$이다. 같은 항목의 (3)에 의해 $Ae_k = \mathbf{a}_k$이다. 따라서 모든 $k$에서 $[T_A]$의 $k$번째 열과 $A$의 $k$번째 열이 같고, [[matrix|행렬]]의 (3)에 의해 $[T_A] = A$이다.

**(3)의 증명.** [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)에 의해 모든 $A \in M_{m \times n}$에서 $T_A \in L(\mathbb{R}^n, \mathbb{R}^m)$이므로, (G)에 의해 $A$에서의 값이 $T_A$인 함수 $\Psi : M_{m \times n} \to L(\mathbb{R}^n, \mathbb{R}^m)$이 있다. $T \in L(\mathbb{R}^n, \mathbb{R}^m)$이면 (1)에 의해 $(\Psi \circ \Phi)(T) = \Psi([T]) = T_{[T]} = T$이다. $A \in M_{m \times n}$이면 (2)에 의해 $(\Phi \circ \Psi)(A) = \Phi(T_A) = [T_A] = A$이다. 함수의 같음에 의해 $\Psi \circ \Phi$는 $L(\mathbb{R}^n, \mathbb{R}^m)$ 위의 [[inverse-function|항등함수]]이고 $\Phi \circ \Psi$는 $M_{m \times n}$ 위의 항등함수이다. [[isomorphism|동형사상]]의 (1)은 선형성과 무관한 함수에 대한 사실이므로, 이것을 $\Phi$와 $\Psi$에 쓰면 $\Phi$는 [[injective-surjective-bijective|전단사]]이고 $\Psi = \Phi^{-1}$이다.

**(4)의 증명.** [[linear-maps-form-a-vector-space|선형사상의 공간]]의 (1)에 의해 $S + T$와 $\alpha T$는 선형사상이므로 행렬이 정해진다. $k \in \{1, \dots, n\}$을 잡는다. $[S + T]$의 $k$번째 열은 $(S + T)e_k$이고, 같은 항목에서 정한 덧셈에 의해 이것은 $Se_k + Te_k$이다. 한편 [[matrix|행렬]]의 (5)에 의해 $[S] + [T]$의 $k$번째 열은 $[S]$의 $k$번째 열과 $[T]$의 $k$번째 열의 합, 곧 $Se_k + Te_k$이다. 모든 $k$에서 열이 같으므로 행렬의 (3)에 의해 $[S + T] = [S] + [T]$이다. 스칼라배도 열마다 비교한다. $[\alpha T]$의 $k$번째 열은 $(\alpha T)e_k = \alpha(Te_k)$이고, 행렬의 (5)에 의해 $\alpha[T]$의 $k$번째 열은 $\alpha(Te_k)$이므로, 행렬의 (3)에 의해 $[\alpha T] = \alpha[T]$이다.

이 두 등식은 $\Phi(S + T) = \Phi(S) + \Phi(T)$, $\Phi(\alpha T) = \alpha\Phi(T)$라는 뜻이다. $L(\mathbb{R}^n, \mathbb{R}^m)$은 선형사상의 공간의 (2)에 의해, $M_{m \times n}$은 행렬의 (1)에 의해 벡터공간이므로 $\Phi$는 (T-합)과 (T-배)를 만족하는 [[linear-map|선형사상]]이다. (3)에 의해 $\Phi$는 전단사이므로 [[isomorphism|동형사상]]의 정의에 의해 동형사상이고, 따라서 $L(\mathbb{R}^n, \mathbb{R}^m) \cong M_{m \times n}$이다.

**(5)의 증명.** [[linear-map-examples|선형사상의 예]]의 (2)에 의해 $i_{\mathbb{R}^n}$은 선형사상이므로 행렬이 정해진다. 그 $k$번째 열은 [[inverse-function|항등함수]]의 정의에 의해 $i_{\mathbb{R}^n}(e_k) = e_k$이다. [[matrix|행렬]]의 (6)에 의해 $I_n$의 $k$번째 열도 $e_k$이므로, 행렬의 (3)에 의해 $[i_{\mathbb{R}^n}] = I_n$이다. $\blacksquare$
:::

## 예시와 반례

:::example[표준기저 위의 값에서 행렬과 다른 값 얻기]
선형사상 $T : \mathbb{R}^2 \to \mathbb{R}^3$이 $Te_1 = (1, 0, 2)$, $Te_2 = (-1, 3, 1)$을 만족한다고 합시다. 이런 $T$는 있습니다. [[matrix|행렬]]의 (4)에 의해 이 두 벡터를 차례로 열로 갖는 $3 \times 2$ 행렬 $A$가 있고, $T_A$가 [[matrix-vector-product|행렬과 벡터의 곱]]의 (3)에 의해 그렇습니다. $T$의 행렬은 열을 차례로 적은

$$
[T] = \begin{pmatrix} 1 & -1 \\ 0 & 3 \\ 2 & 1 \end{pmatrix}
$$

이고, (1)에 의해 예를 들어 $x = (4, -1)$에서 $Tx = [T]x = 4(1, 0, 2) + (-1)(-1, 3, 1) = (4, 0, 8) + (1, -3, -1) = (5, -3, 7)$입니다.
:::

:::example[스칼라배 사상의 행렬]
$\gamma$가 실수이고 $S : \mathbb{R}^n \to \mathbb{R}^n$이 모든 $x$에서 값이 $\gamma x$인 함수라 합시다. [[linear-map-examples|선형사상의 예]]의 (3)에 의해 $S$는 선형사상입니다. $[S]$의 $k$번째 열은 $Se_k = \gamma e_k$이고, [[matrix|행렬]]의 (5)와 (6)에 의해 $\gamma I_n$의 $k$번째 열도 $\gamma e_k$이므로 행렬의 (3)에 의해 $[S] = \gamma I_n$입니다. 예를 들어 $n = 2$, $\gamma = 3$이면 $[S] = \begin{pmatrix} 3 & 0 \\ 0 & 3 \end{pmatrix}$입니다. $\gamma = 1$이면 (V5)에 의해 모든 $x$에서 $Sx = 1x = x$이므로 함수의 같음에 의해 $S$는 항등함수이고, [[vector-space|(V5)]]에 의해 $1I_n = I_n$이므로 이것은 (5)와 맞습니다.
:::

:::counterexample[선형이 아닌 함수에서 (1)이 깨지는 예]
$F : \mathbb{R}^2 \to \mathbb{R}^2$를 각 $(x_1, x_2)$에서 값이 $(x_1 x_2, 0)$인 함수라 합시다. $Fe_1 = F(1, 0) = (1 \cdot 0, 0) = (0, 0)$이고 $Fe_2 = F(0, 1) = (0 \cdot 1, 0) = (0, 0)$이므로, 열이 $Fe_1$, $Fe_2$인 행렬은 $2 \times 2$ 영행렬 $O$입니다. 그런데 $x = (1, 1)$에서 $Fx = (1 \cdot 1, 0) = (1, 0)$이고 $Ox = 1(0, 0) + 1(0, 0) = (0, 0)$입니다. 첫째 값이 $1$과 $0$으로 다르므로 $Fx \ne Ox$입니다. 곧 (1)과 같은 꼴의 등식이 $F$와 이 행렬 사이에서는 성립하지 않습니다. $F$가 선형사상이 아니어서 $F$를 일차결합에 통과시키는 단계를 쓸 수 없기 때문입니다. 실제로 $F(1, 1) = (1, 0)$이고 $F(1, 0) + F(0, 1) = (0, 0)$이므로 $F$는 (T-합)을 만족하지 않습니다.
:::

## 확인 질문

:::check[모든 $x$에서 값이 영벡터인 영사상 $o : \mathbb{R}^n \to \mathbb{R}^m$의 행렬은 무엇인가?]
[[linear-map-examples|선형사상의 예]]의 (1)에 의해 $o$는 선형사상이고, $[o]$의 $k$번째 열은 $o(e_k) = (0, \dots, 0)$입니다. 모든 성분이 $0$인 영행렬의 $k$번째 열도 $(0, \dots, 0)$이므로 [[matrix|행렬]]의 (3)에 의해 $[o]$는 $m \times n$ 영행렬입니다.
:::

:::check[선형사상 $T : \mathbb{R}^2 \to \mathbb{R}^2$에서 $T(1, 0) = (2, 1)$이고 $T(1, 1) = (5, 1)$이면 $[T]$는 무엇인가?]
$e_2 = (0, 1) = (1, 1) - (1, 0)$이므로 [[linear-map|선형사상]]의 (T2)에 의해 $Te_2 = T(1, 1) - T(1, 0) = (5, 1) - (2, 1) = (3, 0)$입니다. $Te_1 = (2, 1)$이므로 $[T] = \begin{pmatrix} 2 & 3 \\ 1 & 0 \end{pmatrix}$입니다.
:::
