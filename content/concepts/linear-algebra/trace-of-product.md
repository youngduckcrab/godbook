---
title: 곱의 대각합
title_en: Trace of a Product
aliases: [대각합의 순환성, 곱의 순서와 대각합, trace of a product, cyclic property of the trace]
kind: theorem
field: linear-algebra
msc: ["15A15"]
level: undergrad
summary: A 가 m × n, B 가 n × m 행렬이면 AB 와 BA 의 크기가 달라도 tr(AB) = tr(BA) 이다. 따라서 세 행렬의 곱은 돌려 가며 바꾸어도 대각합이 같고, 가역인 Q 에 대해 tr(Q⁻¹MQ) = tr M 이다.
requires: [real-number-arithmetic, finite-sum-of-vectors, matrix, matrix-product, matrix-product-properties, invertible-matrix, double-sum-interchange, trace]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 5절, 5.5 Trace and matrix multiplication 의 Theorem 5.1, p.23; 1장 5절 연습문제 5.6, p.24; 2장 8절 연습문제 8.5, p.73
    checked: original
    note: "(1)은 출처 Theorem 5.1(p.23)과 같은 진술이다(A 는 m × n, B 는 n × m). 출처는 그 증명을 연습문제 5.6(p.24)으로 돌리고 두 길을 귀띔한다: AB 와 BA 의 대각성분을 계산해 합을 비교하는 길과, X 를 trace(AX), trace(XA) 로 보내는 두 선형변환이 생성하는 행렬들(한 성분만 1 인 X_{j,k})에서 같음을 보이는 길이다. 이 항목은 첫째 길을 따르고, 합의 순서를 바꾸는 단계는 [이중 합의 순서 바꾸기] 항목의 (2)로 한다. (3)은 출처 2장 8절의 연습문제 8.5(p.73)가 증명하라는 '닮은 행렬의 대각합은 같다'를 Q⁻¹MQ 의 꼴로 적은 것이고, 그 연습문제는 trace(XY) 와 trace(YX) 의 관계를 떠올리라고 귀띔한다. 출처에서 'trace' 가 나오는 곳(책 전체 32건)과 'ABC' 로 찾은 곳(3건)을 읽었고 'cyclic' 은 0건이었으며, 그 가운데 (2)의 세 행렬의 꼴을 적은 곳은 없었다. 증명은 이 사이트가 썼다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 경계 경우에서 거짓이던 설명 문장 4건과 출처에 해석을 돌린 메모 1건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
아래에서 $m$, $n$, $p$는 자연수이다. 대각합 $\operatorname{tr}$은 [[trace|대각합]]에서, 행렬의 곱은 [[matrix-product|행렬의 곱]]에서 정한 것이다.

1. $A$가 $m \times n$ [[matrix|행렬]]이고 $B$가 $n \times m$ 행렬이면 $AB$는 $m \times m$ 행렬, $BA$는 $n \times n$ 행렬이고
   $$
   \operatorname{tr}(AB) = \operatorname{tr}(BA)
   $$
   이다.
2. $A$가 $m \times n$, $B$가 $n \times p$, $C$가 $p \times m$ 행렬이면 $ABC$, $BCA$, $CAB$는 각각 $m \times m$, $n \times n$, $p \times p$ 행렬이고
   $$
   \begin{aligned} \operatorname{tr}(ABC) &= \operatorname{tr}(BCA) \\ &= \operatorname{tr}(CAB) \end{aligned}
   $$
   이다. 괄호 없이 쓴 세 행렬의 곱, 예를 들어 $ABC$는 $(AB)C = A(BC)$이다([[matrix-product-properties|행렬 곱의 성질]]의 (1)).
3. $M$이 $n \times n$ 행렬이고 $Q$가 [[invertible-matrix|가역]]인 $n \times n$ 행렬이면 $\operatorname{tr}(Q^{-1} M Q) = \operatorname{tr} M$이다.
:::

:::english
Below, $m$, $n$, $p$ are natural numbers. The trace $\operatorname{tr}$ and the matrix product are as defined in the corresponding entries.

1. If $A$ is an $m \times n$ matrix and $B$ is an $n \times m$ matrix, then $AB$ is an $m \times m$ matrix, $BA$ is an $n \times n$ matrix, and
   $$
   \operatorname{tr}(AB) = \operatorname{tr}(BA).
   $$
2. If $A$ is $m \times n$, $B$ is $n \times p$ and $C$ is $p \times m$, then $ABC$, $BCA$, $CAB$ are $m \times m$, $n \times n$, $p \times p$ matrices respectively, and
   $$
   \begin{aligned} \operatorname{tr}(ABC) &= \operatorname{tr}(BCA) \\ &= \operatorname{tr}(CAB). \end{aligned}
   $$
   A product of three matrices written without parentheses, for example $ABC$, means $(AB)C = A(BC)$ (item (1) of the entry on properties of matrix multiplication).
3. If $M$ is an $n \times n$ matrix and $Q$ is an invertible $n \times n$ matrix, then $\operatorname{tr}(Q^{-1} M Q) = \operatorname{tr} M$.
:::

## 직관

행렬의 곱은 순서를 바꾸면 달라질 수 있고, $A$가 $m \times n$이고 $m \ne n$이면 $AB$와 $BA$는 크기부터 다릅니다. 그런데도 대각합은 같습니다. 까닭은 두 대각합이 같은 $mn$개의 곱을 다르게 묶어 더한 것이기 때문입니다. $AB$의 $(j, j)$ 성분은 $a_{j,1}b_{1,j} + \cdots + a_{j,n}b_{n,j}$이고 $BA$의 $(l, l)$ 성분은 $b_{l,1}a_{1,l} + \cdots + b_{l,m}a_{m,l}$입니다. 곱 $a_{j,l}b_{l,j}$를 $(j, l)$ 칸에 적은 $m \times n$ 표를 만들면, $\operatorname{tr}(AB)$는 이 표를 행마다 더한 뒤 모두 더한 것이고 $\operatorname{tr}(BA)$는 열마다 더한 뒤 모두 더한 것입니다. [[double-sum-interchange|이중 합의 순서 바꾸기]]가 둘이 같다고 말해 줍니다.

증명에서 실수의 곱의 교환법칙 (K1)이 쓰이는 자리는 $b_{l,j}a_{j,l}$을 $a_{j,l}b_{l,j}$로 바꾸는 곳입니다. 행렬의 곱은 교환되지 않을 수 있어도 성분인 실수의 곱은 교환되므로, 두 행렬의 곱의 대각합에서는 곱하는 순서가 드러나지 않습니다. 크기의 가정($A$가 $m \times n$, $B$가 $n \times m$)은 두 곱 $AB$, $BA$가 모두 정의되고 정사각행렬이 되게 하는 데 쓰입니다.

(2)는 세 행렬을 맨 앞의 것을 맨 뒤로 옮기는 식으로 돌려도 대각합이 같다는 것입니다. 글자의 순서 $A$, $C$, $B$는 $A$, $B$, $C$를 이렇게 돌린 순서가 아니므로 (2)는 $\operatorname{tr}(ACB)$와 $\operatorname{tr}(ABC)$를 잇지 않고, 실제로 둘이 다를 수 있습니다(아래 반례). (3)에서 $M$을 $Q^{-1}MQ$로 바꾸는 것은 [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 (3)에서 기저를 바꿀 때 선형사상의 행렬이 바뀌는 꼴과 같습니다.

## 증명

:::idea
$\operatorname{tr}(AB)$와 $\operatorname{tr}(BA)$를 성분으로 펼치면 같은 곱 $a_{j,l}b_{l,j}$들을 행과 열의 두 방향으로 묶은 이중 합이 된다. (2)와 (3)은 (1)을 곱의 결합법칙과 함께 거듭 쓴다.
:::

:::hint
$t_{j,l} = a_{j,l}b_{l,j}$ ($j \in \{1, \dots, m\}$, $l \in \{1, \dots, n\}$)로 두고, $(AB)_{j,j}$와 $(BA)_{l,l}$을 이 $t$로 적어 보라.
:::

:::hint
(3)에서는 $Q^{-1}M$을 한 행렬로 보고 (1)을 $Q^{-1}M$과 $Q$에 쓴다.
:::

:::proof
아래에서 (K1)은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다. [[finite-sum-of-vectors|벡터의 유한 합]]의 진술에 의해 길이가 같고 모든 자리의 항이 같은 두 실수의 열은 같은 열이고 같은 열의 합은 같다. 이것을 "같은 열의 합"이라 부른다.

**(1)의 증명.** $A$는 $m \times n$, $B$는 $n \times m$ 행렬이므로 [[matrix-product|행렬의 곱]]의 정의에 의해 $AB$는 $m \times m$, $BA$는 $n \times n$ 행렬이다. 각 $j \in \{1, \dots, m\}$와 $l \in \{1, \dots, n\}$에 실수 $t_{j,l} = a_{j,l} b_{l,j}$를 정한다.

$j \in \{1, \dots, m\}$이면 행렬의 곱의 (2)에 의해 $(AB)_{j,j}$는 $l$번째 항이 $a_{j,l}b_{l,j} = t_{j,l}$인 길이 $n$인 실수의 열의 합이다. 곧 $(AB)_{j,j} = t_{j,1} + \cdots + t_{j,n}$이다. 따라서 [[trace|대각합]]의 정의에 의해 $\operatorname{tr}(AB)$는 $j$번째 항이 $t_{j,1} + \cdots + t_{j,n}$인 길이 $m$인 실수의 열의 합이다.

$l \in \{1, \dots, n\}$이면 행렬의 곱의 (2)를 $n \times m$ 행렬 $B$와 $m \times n$ 행렬 $A$에 쓴 것에 의해 $(BA)_{l,l}$은 $j$번째 항이 $b_{l,j}a_{j,l}$인 길이 $m$인 실수의 열의 합이다. (K1)에 의해 $b_{l,j}a_{j,l} = a_{j,l}b_{l,j} = t_{j,l}$이므로, 같은 열의 합에 의해 $(BA)_{l,l} = t_{1,l} + \cdots + t_{m,l}$이다. 따라서 $\operatorname{tr}(BA)$는 $l$번째 항이 $t_{1,l} + \cdots + t_{m,l}$인 길이 $n$인 실수의 열의 합이다.

[[double-sum-interchange|이중 합의 순서 바꾸기]]의 (2)를 이 $t_{j,l}$에 쓰면(그 항목의 $k$를 $l$로 읽는다) 두 합은 같다. 따라서 $\operatorname{tr}(AB) = \operatorname{tr}(BA)$이다.

**(2)의 증명.** 행렬의 곱의 정의에 의해 $AB$는 $m \times p$, $BC$는 $n \times m$, $CA$는 $p \times n$ 행렬이므로 $ABC$는 $m \times m$, $BCA$는 $n \times n$, $CAB$는 $p \times p$ 행렬이다. [[matrix-product-properties|행렬 곱의 성질]]의 (1)에 의해 $ABC = A(BC)$이다. $A$는 $m \times n$, $BC$는 $n \times m$이므로 (1)에 의해 $\operatorname{tr}(A(BC)) = \operatorname{tr}((BC)A) = \operatorname{tr}(BCA)$이다. 다시 같은 (1)에 의해 $BCA = B(CA)$이고, $B$는 $n \times p$, $CA$는 $p \times n$이므로 (1)에 의해 $\operatorname{tr}(B(CA)) = \operatorname{tr}((CA)B) = \operatorname{tr}(CAB)$이다.

**(3)의 증명.** $Q$는 가역인 $n \times n$ 행렬이므로 [[invertible-matrix|가역행렬과 역행렬]]의 (1)에 의해 $Q^{-1}$은 $Q^{-1}Q = I_n$이고 $QQ^{-1} = I_n$인 $n \times n$ 행렬이다. $Q^{-1}M$은 $n \times n$ 행렬이고 $Q^{-1}MQ = (Q^{-1}M)Q$이다. (1)을 $n \times n$ 행렬 $Q^{-1}M$과 $Q$에 쓰고, 행렬 곱의 성질의 (1)과 (4)를 쓰면

$$
\begin{aligned} \operatorname{tr}((Q^{-1}M)Q) &= \operatorname{tr}(Q(Q^{-1}M)) \\ &= \operatorname{tr}((QQ^{-1})M) \\ &= \operatorname{tr}(I_n M) = \operatorname{tr} M \end{aligned}
$$

이다. $\blacksquare$
:::

## 예시와 반례

:::example[1 × 3 행렬과 3 × 1 행렬]
$$
A = \begin{pmatrix} 1 & 2 & -1 \end{pmatrix}, \qquad B = \begin{pmatrix} 3 \\ 0 \\ 4 \end{pmatrix}
$$

이면 $m = 1$, $n = 3$입니다. $AB$는 $1 \times 1$ 행렬이고 그 성분은 $(1 \cdot 3 + 2 \cdot 0) + (-1) \cdot 4 = -1$이므로, [[trace|대각합]]의 (5)에 의해 $\operatorname{tr}(AB) = -1$입니다. $BA$는 $3 \times 3$ 행렬이고 $(l, k)$ 성분은 $b_{l,1}a_{1,k}$입니다.

$$
BA = \begin{pmatrix} 3 & 6 & -3 \\ 0 & 0 & 0 \\ 4 & 8 & -4 \end{pmatrix}
$$

의 대각합은 $(3 + 0) + (-4) = -1$로 $\operatorname{tr}(AB)$와 같습니다. 두 행렬의 크기는 다릅니다. $3 \times 1$ 행렬 $B$를 (1)의 $A$ 자리에, $1 \times 3$ 행렬 $A$를 (1)의 $B$ 자리에 놓고 읽으면, 이것은 $m = 3$, $n = 1$인 경우이기도 합니다.
:::

:::example[곱이 다르지만 대각합이 같은 2 × 2 행렬]
$$
A = \begin{pmatrix} 1 & 2 \\ 3 & 0 \end{pmatrix}, \qquad B = \begin{pmatrix} 0 & 1 \\ -1 & 2 \end{pmatrix}
$$

이면 성분을 [[matrix-product|행렬의 곱]]의 (2)로 계산해

$$
\begin{aligned} AB &= \begin{pmatrix} -2 & 5 \\ 0 & 3 \end{pmatrix}, \\ BA &= \begin{pmatrix} 3 & 0 \\ 5 & -2 \end{pmatrix} \end{aligned}
$$

입니다. 예를 들어 $(AB)_{1,1} = 1 \cdot 0 + 2 \cdot (-1) = -2$이고 $(BA)_{2,1} = (-1) \cdot 1 + 2 \cdot 3 = 5$입니다. $AB \ne BA$이지만 $\operatorname{tr}(AB) = -2 + 3 = 1$이고 $\operatorname{tr}(BA) = 3 + (-2) = 1$입니다.
:::

:::counterexample[tr(ACB) 가 tr(ABC) 와 다른 2 × 2 의 예]
$$
\begin{aligned} A &= \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}, & B &= \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}, \\ C &= \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix} & & \end{aligned}
$$

이라 합시다. 성분을 계산하면

$$
\begin{aligned} AB &= \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}, \; ABC = \begin{pmatrix} 2 & 2 \\ 1 & 2 \end{pmatrix}, \\ BC &= \begin{pmatrix} 1 & 0 \\ 1 & 2 \end{pmatrix}, \; BCA = \begin{pmatrix} 1 & 1 \\ 1 & 3 \end{pmatrix} \end{aligned}
$$

이므로 $\operatorname{tr}(ABC) = 4 = \operatorname{tr}(BCA)$로 (2)와 맞습니다. 그러나

$$
\begin{aligned} AC &= \begin{pmatrix} 1 & 2 \\ 0 & 2 \end{pmatrix}, & ACB &= \begin{pmatrix} 3 & 2 \\ 2 & 2 \end{pmatrix} \end{aligned}
$$

이므로 $\operatorname{tr}(ACB) = 5$입니다. 세 행렬의 순서를 돌리지 않고 두 개만 맞바꾸면 대각합이 달라질 수 있습니다.
:::

:::counterexample[tr(AB) 와 tr A · tr B 가 다른 예]
대각합은 곱을 대각합의 곱으로 보내지 않을 수 있습니다. $A = B = I_2$이면 [[matrix-product-properties|행렬 곱의 성질]]의 (4)에 의해 $AB = I_2$이므로 [[trace|대각합]]의 (4)에 의해 $\operatorname{tr}(AB) = 2$입니다. 그러나 $\operatorname{tr} A \cdot \operatorname{tr} B = 2 \cdot 2 = 4$이고 $2 \ne 4$입니다. 또 $A$가 $m \times n$이고 $m \ne n$이면 $\operatorname{tr} A$는 정의되지도 않습니다.
:::

## 확인 질문

:::check[$n \times n$ 행렬 $A$, $B$ 가운데 $AB - BA = I_n$인 것이 있는가?]
없습니다. 어떤 $n \times n$ 행렬 $A$, $B$에서든 [[trace|대각합]]의 (2)와 이 항목의 (1)에 의해 $\operatorname{tr}(AB - BA) = \operatorname{tr}(AB) - \operatorname{tr}(BA) = 0$입니다. 한편 대각합의 (4)에 의해 $\operatorname{tr} I_n = n$이고, $n$은 자연수라 정수로서 $0$이 아니며 [[real-number-arithmetic|실수의 계산 법칙]]의 (K7)에 의해 정수 $0$은 실수 $0$이므로, 실수로 보아도 $n \ne 0$입니다. 대각합이 다른 두 행렬은 같을 수 없으므로 $AB - BA \ne I_n$입니다.
:::

:::check[$A = \begin{pmatrix} 1 & 0 & 3 \\ 0 & 1 & -1 \end{pmatrix}$, $B = \begin{pmatrix} 1 & 1 \\ 2 & 0 \\ 0 & 3 \end{pmatrix}$이면 $3 \times 3$ 행렬 $BA$의 대각합은 무엇인가?]
(1)에 의해 $\operatorname{tr}(BA) = \operatorname{tr}(AB)$이므로 $2 \times 2$ 행렬 $AB$의 대각성분만 계산하면 됩니다. $(AB)_{1,1} = (1 \cdot 1 + 0 \cdot 2) + 3 \cdot 0 = 1$, $(AB)_{2,2} = (0 \cdot 1 + 1 \cdot 0) + (-1) \cdot 3 = -3$이므로 $\operatorname{tr}(BA) = -2$입니다. $BA$를 직접 계산하면 대각성분이 $1$, $0$, $-3$이어서 같은 값이 나옵니다.
:::
