---
title: 행렬과 벡터의 곱
title_en: Matrix–Vector Product
aliases: [행렬-벡터 곱, 행렬과 벡터의 곱셈, 열 규칙, 행 규칙, matrix-vector product, matrix-vector multiplication, column rule, row rule]
kind: definition
field: linear-algebra
msc: ["15"]
level: undergrad
summary: m × n 행렬 A 와 x ∈ ℝⁿ 의 곱 Ax 는 A 의 열들에 x 의 값을 계수로 곱해 더한 ℝᵐ 의 벡터이다. Ax 의 j 번째 값은 A 의 j 번째 행으로 계산되고, x 를 Ax 로 보내는 함수 T_A 는 선형사상이며 그 상은 열들의 생성이다.
requires: [real-number-arithmetic, vector-space, function, inverse-function, real-function-space, finite-sum-of-vectors, linear-combination-and-span, standard-basis, linear-map, kernel-and-range, matrix]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 3.2절 Linear transformations Fⁿ → Fᵐ. Matrix–column multiplication, pp.13–15; 3.4절의 Remark(곱할 수 있는 크기), p.16
    checked: original
    note: "출처는 3.2절(pp.13–14)에서 선형사상 T : Fⁿ → Fᵐ 에서 출발해 a_k = T(e_k) 로 두고, x = x_1e_1 + ⋯ + x_ne_n 과 T 의 선형성으로 T(x) = x_1a_1 + ⋯ + x_na_n 을 얻은 뒤, Ax = T(x) 가 되려면 Ax 를 이 합으로 정해야 한다고 적는다(열에 좌표를 곱하는 규칙, p.14). 이 항목은 거꾸로 곱을 행렬에서 먼저 정의하고, x 에서의 값이 Ax 인 사상 T_A 가 선형임을 (2)로 증명한다. 출처는 p.15 에서 결과를 성분 하나씩 계산하는 편이 손으로는 편하다며 행 규칙을 적는데, 열 규칙에서 끌어내지는 않는다. 이 항목의 (1)이 그 유도이다. 출처의 행 규칙은 결과의 k 번째 값을 a_{k,1}x_1 + ⋯ + a_{k,n}x_n 의 꼴로 적어 행 번호를 k 로 쓰는데, 5.1절(p.19)은 행 번호를 j 로 쓴다. 이 항목은 행 번호를 언제나 j 로 쓴다. 출처는 3.4절의 Remark(p.16)에서 Fⁿ 의 벡터에는 m × n 행렬만 곱할 수 있다고 적는다. 기호 T_A 와 (2)–(6)의 진술과 증명은 이 사이트가 썼다. 예시는 출처 pp.14–15 의 두 예처럼 2 × 3 행렬과 ℝ³ 의 벡터의 곱에 두 규칙을 써 보는 것이고, 수는 새로 골랐다. 반례와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$m$, $n$이 자연수이고 $A$가 $m \times n$ [[matrix|행렬]]이며 $x = (x_1, \dots, x_n) \in \mathbb{R}^n$이라 하자($x_k = x(k)$). $x$는 함수 $\{1, \dots, n\} \to \mathbb{R}$이므로 길이 $n$인 [[finite-sum-of-vectors|실수의 열]]이다. $A$와 $x$의 **곱**(product) $Ax$를

$$
Ax = x_1 \mathbf{a}_1 + \cdots + x_n \mathbf{a}_n
$$

로 정한다. 여기서 $\mathbf{a}_1, \dots, \mathbf{a}_n$은 [[matrix|행렬]]에서 정한, $A$의 열을 차례로 늘어놓은 $\mathbb{R}^m$의 벡터의 열이고, 오른쪽은 [[finite-sum-of-vectors|벡터의 유한 합]]에서 정한, $k$번째 항이 $x_k \mathbf{a}_k$인 $\mathbb{R}^m$의 벡터의 열의 합이다. 따라서 $Ax \in \mathbb{R}^m$이다. $m \times n$ 행렬과 $\mathbb{R}^n$이 아닌 공간의 벡터의 곱은 정의하지 않는다.

다음이 성립한다. $A$, $B$는 $m \times n$ 행렬이고 $x$, $y \in \mathbb{R}^n$이며($x_k = x(k)$, $y_k = y(k)$) $\alpha$는 실수이다.

1. (행 규칙) 모든 $j \in \{1, \dots, m\}$에서 $Ax$의 $j$번째 값은 $a_{j,1} x_1 + \cdots + a_{j,n} x_n$이다. 오른쪽은 $k$번째 항이 $a_{j,k} x_k$인 실수의 열의 합이다.
2. 각 $x \in \mathbb{R}^n$에 $Ax \in \mathbb{R}^m$가 하나 정해지므로 [[real-function-space|(G)]]에 의해 $x$에서의 값이 $Ax$인 함수 $T_A : \mathbb{R}^n \to \mathbb{R}^m$가 있다. $T_A$는 [[linear-map|선형사상]]이다. 곧 $A(x + y) = Ax + Ay$이고 $A(\alpha x) = \alpha(Ax)$이다.
3. $k \in \{1, \dots, n\}$이면 $Ae_k = \mathbf{a}_k$이다(곧 $A$와 [[standard-basis|표준기저]]의 $e_k$의 곱은 $A$의 $k$번째 열이다). 또 $I_n x = x$이다. 곧 $T_{I_n}$은 $\mathbb{R}^n$ 위의 [[inverse-function|항등함수]] $i_{\mathbb{R}^n}$이다.
4. $(A + B)x = Ax + Bx$이고 $(\alpha A)x = \alpha(Ax)$이다.
5. $A = B$인 것은 정확히 모든 $x \in \mathbb{R}^n$에서 $Ax = Bx$일 때이다. 곧 $A = B$인 것은 정확히 $T_A = T_B$일 때이다.
6. $T_A$의 [[kernel-and-range|상]]은 $A$의 열들의 [[linear-combination-and-span|생성]]이다. 곧 $\operatorname{Ran} T_A = \operatorname{span}(\mathbf{a}_1, \dots, \mathbf{a}_n)$이다.
:::

:::english
Let $m$, $n$ be natural numbers, $A$ an $m \times n$ matrix, and $x = (x_1, \dots, x_n) \in \mathbb{R}^n$ (where $x_k = x(k)$). Since $x$ is a function $\{1, \dots, n\} \to \mathbb{R}$, it is a sequence of real numbers of length $n$. We define the **product** $Ax$ of $A$ and $x$ by

$$
Ax = x_1 \mathbf{a}_1 + \cdots + x_n \mathbf{a}_n.
$$

Here $\mathbf{a}_1, \dots, \mathbf{a}_n$ is the sequence of vectors of $\mathbb{R}^m$ formed by the columns of $A$ in order, as defined in the entry on matrices, and the right-hand side is the sum, as defined in the entry on finite sums of vectors, of the sequence of vectors of $\mathbb{R}^m$ whose $k$-th term is $x_k \mathbf{a}_k$. Hence $Ax \in \mathbb{R}^m$. The product of an $m \times n$ matrix and a vector of a space other than $\mathbb{R}^n$ is not defined.

The following hold. $A$, $B$ are $m \times n$ matrices, $x$, $y \in \mathbb{R}^n$ (with $x_k = x(k)$, $y_k = y(k)$), and $\alpha$ is a real number.

1. (Row rule) For every $j \in \{1, \dots, m\}$, the $j$-th value of $Ax$ is $a_{j,1} x_1 + \cdots + a_{j,n} x_n$. The right-hand side is the sum of the sequence of real numbers whose $k$-th term is $a_{j,k} x_k$.
2. Since an element $Ax \in \mathbb{R}^m$ is assigned to each $x \in \mathbb{R}^n$, by (G) there is a function $T_A : \mathbb{R}^n \to \mathbb{R}^m$ whose value at $x$ is $Ax$. $T_A$ is a linear map. That is, $A(x + y) = Ax + Ay$ and $A(\alpha x) = \alpha(Ax)$.
3. If $k \in \{1, \dots, n\}$, then $Ae_k = \mathbf{a}_k$ (that is, the product of $A$ and the vector $e_k$ of the standard basis is the $k$-th column of $A$). Also $I_n x = x$. That is, $T_{I_n}$ is the identity function $i_{\mathbb{R}^n}$ on $\mathbb{R}^n$.
4. $(A + B)x = Ax + Bx$ and $(\alpha A)x = \alpha(Ax)$.
5. $A = B$ exactly when $Ax = Bx$ for every $x \in \mathbb{R}^n$. That is, $A = B$ exactly when $T_A = T_B$.
6. The range of $T_A$ is the span of the columns of $A$. That is, $\operatorname{Ran} T_A = \operatorname{span}(\mathbf{a}_1, \dots, \mathbf{a}_n)$.
:::

## 직관

장보기 목록으로 생각해 볼 수 있습니다. 재료가 $n$가지이고 재료 $k$ 한 단위에 든 영양소 $m$가지의 양을 적은 것이 열 $\mathbf{a}_k$라 합시다. 재료 $k$를 $x_k$단위 사면 영양소의 총량은 $x_1 \mathbf{a}_1 + \cdots + x_n \mathbf{a}_n$, 곧 $Ax$입니다. 영양소 $j$ 하나의 총량만 알고 싶으면 재료마다 "단위당 양 $a_{j,k}$ 곱하기 단위 수 $x_k$"를 더하면 되는데, 이것이 행 규칙 (1)입니다. 비유가 정의와 맞지 않는 곳은 $x_k$와 $a_{j,k}$가 음수일 수 있다는 점입니다. 장보기에서는 재료를 음수 단위로 살 수 없고 영양소의 양도 음수가 아닙니다.

정의는 열로 하고 계산은 행으로도 할 수 있다는 것이 이 항목의 요점입니다. 열로 정의하면 $Ax$가 일차결합이라는 것이 드러나서, $T_A$의 선형성 (2)는 계수의 열에 관한 계산 규칙에서 바로 나오고, 상이 열들의 생성이라는 (6)은 정의를 다시 읽은 것입니다. (3)은 $T_A$가 표준기저를 $A$의 열로 보낸다는 뜻입니다. 다음 항목은 거꾸로 모든 선형사상 $\mathbb{R}^n \to \mathbb{R}^m$이 어떤 행렬 $A$의 $T_A$라는 것을 보입니다.

## 성질의 증명

:::proof
증명에서 인용하는 (V1)–(V8)은 [[vector-space]]의 것, (H0)–(H7)과 (C1)–(C6)은 [[finite-sum-of-vectors]]의 것, (K1)–(K12)는 [[real-number-arithmetic]]의 것이다. $\mathbb{R}^m$과 $\mathbb{R}^n$의 덧셈과 스칼라배는 [[real-function-space|실숫값 함수의 공간]]에서 정한 대로 값마다 한다. 또 [[finite-sum-of-vectors|벡터의 유한 합]]의 진술에 의해 길이가 같고 모든 자리의 항이 같은 두 벡터의 열(실수의 열도 마찬가지)은 같은 열이고, 같은 열의 합은 같다.

**(1)의 증명.** $Ax$는 $k$번째 항이 $f_k = x_k \mathbf{a}_k$인 $\mathbb{R}^m$의 벡터의 열 $f_1, \dots, f_n$의 합이다. $\mathbb{R}^m = \mathbb{R}^{\{1, \dots, m\}}$이므로 [[standard-basis|표준기저]]의 (1)을 집합 $\{1, \dots, m\}$과 이 열에 쓰면, $j \in \{1, \dots, m\}$에서 $(Ax)(j) = f_1(j) + \cdots + f_n(j)$이다. 오른쪽은 $k$번째 항이 $f_k(j)$인 실수의 열의 합이다. 스칼라배는 값마다 하므로 $f_k(j) = x_k \cdot \mathbf{a}_k(j) = x_k a_{j,k}$이고, (K1)에 의해 이것은 $a_{j,k} x_k$이다. 따라서 이 실수의 열은 $k$번째 항이 $a_{j,k} x_k$인 실수의 열과 같고, 같은 열의 합은 같으므로 $(Ax)(j) = a_{j,1} x_1 + \cdots + a_{j,n} x_n$이다.

**(2)의 증명.** $T_A$가 있다는 것은 진술에 적은 대로 (G)이다. (T-합): $x + y$의 $k$번째 값은 $x_k + y_k$이므로 $A(x + y)$는 $k$번째 항이 $(x_k + y_k)\mathbf{a}_k$인 벡터의 열의 합이다. (C1)을 실수의 열 $x_1, \dots, x_n$과 $y_1, \dots, y_n$, 벡터의 열 $\mathbf{a}_1, \dots, \mathbf{a}_n$에 쓰면
$$Ax + Ay = (x_1 \mathbf{a}_1 + \cdots + x_n \mathbf{a}_n) + (y_1 \mathbf{a}_1 + \cdots + y_n \mathbf{a}_n) = (x_1 + y_1)\mathbf{a}_1 + \cdots + (x_n + y_n)\mathbf{a}_n = A(x + y)$$
이다. 곧 $T_A(x + y) = T_A x + T_A y$이다. (T-배): $\alpha x$의 $k$번째 값은 $\alpha x_k$이므로 $A(\alpha x)$는 $k$번째 항이 $(\alpha x_k)\mathbf{a}_k$인 벡터의 열의 합이다. (C2)에서 $\gamma = \alpha$로 두면 $\alpha(Ax) = (\alpha x_1)\mathbf{a}_1 + \cdots + (\alpha x_n)\mathbf{a}_n = A(\alpha x)$이다. 곧 $T_A(\alpha x) = \alpha T_A x$이다. 두 조건이 모두 성립하므로 $T_A$는 [[linear-map|선형사상]]이다.

**(3)의 증명.** [[standard-basis|표준기저]]의 진술에 의해 $e_k$의 $i$번째 값은 $i = k$이면 $1$이고 $i \ne k$이면 $0$이다. 따라서 $Ae_k$는 계수의 열이 $e_k$인 일차결합이고, $k$번째가 아닌 계수가 모두 $0$이므로 (C4)에 의해 $Ae_k = 1\mathbf{a}_k$이다. (V5)에 의해 $1\mathbf{a}_k = \mathbf{a}_k$이다. 다음으로 [[matrix|행렬]]의 (6)에 의해 $I_n$의 $k$번째 열은 $e_k$이므로, $I_n$의 열을 차례로 늘어놓은 벡터의 열은 모든 자리에서 벡터의 열 $e_1, \dots, e_n$과 항이 같으므로 같은 열이다. 따라서 $I_n x = x_1 e_1 + \cdots + x_n e_n$이고, 이것은 표준기저의 (3)에 의해 $x$이다. $T_{I_n}$과 $i_{\mathbb{R}^n}$은 정의역이 $\mathbb{R}^n$으로 같고 모든 $x$에서 $T_{I_n} x = I_n x = x = i_{\mathbb{R}^n}(x)$이므로([[inverse-function|항등함수]]의 정의), [[function|함수의 같음]]에 의해 $T_{I_n} = i_{\mathbb{R}^n}$이다.

**(4)의 증명.** [[matrix|행렬]]의 (5)에 의해 $A + B$의 $k$번째 열은 $\mathbf{a}_k + \mathbf{b}_k$이므로 $(A + B)x$는 $k$번째 항이 $x_k(\mathbf{a}_k + \mathbf{b}_k)$인 벡터의 열의 합이다. (V7)에 의해 $x_k(\mathbf{a}_k + \mathbf{b}_k) = x_k \mathbf{a}_k + x_k \mathbf{b}_k$이므로 이 벡터의 열은 $k$번째 항이 $x_k \mathbf{a}_k + x_k \mathbf{b}_k$인 벡터의 열과 같다. (H3)을 벡터의 열 $x_1 \mathbf{a}_1, \dots, x_n \mathbf{a}_n$과 $x_1 \mathbf{b}_1, \dots, x_n \mathbf{b}_n$에 쓰면 그 합은 $(x_1 \mathbf{a}_1 + \cdots + x_n \mathbf{a}_n) + (x_1 \mathbf{b}_1 + \cdots + x_n \mathbf{b}_n) = Ax + Bx$이다. 따라서 $(A + B)x = Ax + Bx$이다.

같은 행렬의 (5)에 의해 $\alpha A$의 $k$번째 열은 $\alpha \mathbf{a}_k$이므로 $(\alpha A)x$는 $k$번째 항이 $x_k(\alpha \mathbf{a}_k)$인 벡터의 열의 합이다. (V6)과 (K1)에 의해 $x_k(\alpha \mathbf{a}_k) = (x_k \alpha)\mathbf{a}_k = (\alpha x_k)\mathbf{a}_k$이므로, 이 벡터의 열은 $k$번째 항이 $(\alpha x_k)\mathbf{a}_k$인 벡터의 열과 같다. 그 합은 (C2)에 의해 $\alpha(x_1 \mathbf{a}_1 + \cdots + x_n \mathbf{a}_n) = \alpha(Ax)$이다. 따라서 $(\alpha A)x = \alpha(Ax)$이다.

**(5)의 증명.** $A = B$이면 $Ax$와 $Bx$는 같은 행렬과 같은 벡터의 곱이므로 같다. 거꾸로 모든 $x \in \mathbb{R}^n$에서 $Ax = Bx$라 하자. $k \in \{1, \dots, n\}$을 잡고 $x = e_k$로 두면 (3)에 의해 $\mathbf{a}_k = Ae_k = Be_k = \mathbf{b}_k$이다. 모든 $k$에서 열이 같으므로 [[matrix|행렬]]의 (3)에 의해 $A = B$이다. 끝으로 $T_A$와 $T_B$는 정의역이 $\mathbb{R}^n$으로 같은 함수이므로 [[function|함수의 같음]]에 의해 $T_A = T_B$인 것은 정확히 모든 $x$에서 $T_A x = T_B x$, 곧 $Ax = Bx$일 때이다.

**(6)의 증명.** (2)에 의해 $T_A$가 선형사상이므로 [[kernel-and-range|핵과 상]]의 정의에 의해 $\operatorname{Ran} T_A = \{Ax : x \in \mathbb{R}^n\}$이다. $w \in \operatorname{Ran} T_A$이면 어떤 $x$에서 $w = Ax = x_1 \mathbf{a}_1 + \cdots + x_n \mathbf{a}_n$이므로 $w$는 계수의 열이 $x_1, \dots, x_n$인 [[linear-combination-and-span|일차결합]]이고 $w \in \operatorname{span}(\mathbf{a}_1, \dots, \mathbf{a}_n)$이다. 거꾸로 $w \in \operatorname{span}(\mathbf{a}_1, \dots, \mathbf{a}_n)$이면 길이 $n$인 실수의 열 $\alpha_1, \dots, \alpha_n$이 있어 $w = \alpha_1 \mathbf{a}_1 + \cdots + \alpha_n \mathbf{a}_n$이다. 이 열 $\alpha$는 함수 $\{1, \dots, n\} \to \mathbb{R}$이므로 $\mathbb{R}^n$의 원소이고, $\alpha$의 $k$번째 값은 $\alpha_k$이므로 곱의 정의에 의해 $A\alpha = w$이다. 따라서 $w = T_A \alpha \in \operatorname{Ran} T_A$이다. 두 포함에 의해 두 집합은 같다. $\blacksquare$
:::

## 예시와 반례

:::example[열 규칙과 행 규칙으로 같은 곱 계산하기]
$$
A = \begin{pmatrix} 2 & -1 & 0 \\ 1 & 3 & 4 \end{pmatrix}, \qquad x = (3, 1, -2) \in \mathbb{R}^3
$$

이라 합시다. 정의대로 열에 계수를 곱해 더하면

$$
Ax = 3(2, 1) + 1(-1, 3) + (-2)(0, 4) = (6, 3) + (-1, 3) + (0, -8) = (5, -2)
$$

입니다. 행 규칙 (1)로 값을 하나씩 계산해도 첫째 값은 $2 \cdot 3 + (-1) \cdot 1 + 0 \cdot (-2) = 6 - 1 + 0 = 5$이고 둘째 값은 $1 \cdot 3 + 3 \cdot 1 + 4 \cdot (-2) = 3 + 3 - 8 = -2$로 같습니다. $A$는 $2 \times 3$ 행렬이므로 $A$와 $\mathbb{R}^2$의 원소, 예를 들어 $(1, 2)$의 곱은 정의되지 않습니다.
:::

:::counterexample[한 벡터에서 곱이 같아도 행렬은 다를 수 있다]
(5)는 모든 $x$에서 $Ax = Bx$일 것을 요구합니다. $B = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$이라 하고 $x = (1, 0)$으로 두면 (3)에 의해 $I_2 x = x = (1, 0)$이고, $Bx = 1(1, 0) + 0(1, 0) = (1, 0) + (0, 0) = (1, 0)$입니다. 곱은 같지만 $b_{1,2} = 1$이고 $I_2$의 $(1, 2)$ 성분은 $0$이므로 $B \ne I_2$입니다. 실제로 $x = (0, 1)$에서는 $I_2 x = (0, 1)$이고 $Bx = 0(1, 0) + 1(1, 0) = (1, 0)$이라 곱이 다릅니다.
:::

## 확인 질문

:::check[$2 \times 2$ 행렬 $A$에서 $Ae_1 = (3, 1)$이고 $Ae_2 = (0, 2)$이면 $A$는 무엇이고, $x = (1, 1)$일 때 $Ax$는 무엇인가?]
(3)에 의해 $A$의 첫째 열은 $(3, 1)$, 둘째 열은 $(0, 2)$입니다. [[matrix|행렬]]의 (4)에 의해 이런 행렬은 하나뿐이므로 $A = \begin{pmatrix} 3 & 0 \\ 1 & 2 \end{pmatrix}$입니다. 정의에 의해 $Ax = 1(3, 1) + 1(0, 2) = (3, 1) + (0, 2) = (3, 3)$입니다.
:::

:::check[$A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$이고 $x = (2, -1)$이면 $Ax$는 무엇이고, $T_A$의 핵에 대해 무엇을 알 수 있는가?]
$Ax = 2(1, 2) + (-1)(2, 4) = (2, 4) + (-2, -4) = (0, 0)$입니다. 따라서 영벡터가 아닌 $(2, -1)$이 [[kernel-and-range|핵]] $\operatorname{Ker} T_A$에 속합니다. 곧 $\operatorname{Ker} T_A \ne \{(0, 0)\}$입니다.
:::
