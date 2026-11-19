---
title: 일반선형군
title_en: General Linear Group
aliases: [GL_n(ℝ), 가역행렬의 군, general linear group]
kind: theorem
field: group-theory
msc: ["20H20", "15A30"]
level: undergrad
summary: n × n 행렬의 곱은 M_{n×n} 위의 결합적인 이항연산이고, 가역인 n × n 행렬 전체 GL_n(ℝ)는 행렬의 곱으로 군이며 항등원은 단위행렬, 역원은 역행렬이다. n ≥ 2이면 아벨군이 아니고, n = 1이면 아벨군이다.
requires: [function, binary-operation, group, recursion-theorem, real-number-arithmetic, finite-sum-of-vectors, matrix, matrix-product, matrix-product-properties, invertible-matrix, inverse-matrix-properties, elementary-matrix]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 3.2절 Example 3.14(GL₂(ℝ), p.35), 12.1절 The General and Special Linear Groups(GL_n(ℝ) 의 표기, p.143), 연습문제 3.8(p.41)
    checked: original
    note: "출처 Example 3.14(p.35)는 2 × 2 가역행렬 전체 GL₂(ℝ) 를 다루고, 가역이라는 것을 'AA⁻¹ = A⁻¹A = I 인 A⁻¹ 이 있다'로 정의한 뒤 '행렬식이 0 이 아닌 것과 같다'고 덧붙인다. 역행렬 공식(ad − bc)⁻¹(…)을 적고, '두 가역행렬의 곱은 가역이다', '행렬의 곱은 결합적이다', 'AB = BA 가 일반적으로 성립하지 않으므로 아벨군이 아니다'라고 적는다. 일반의 n 은 12.1절(p.143)에서 'n × n 가역행렬 전체는 일반선형군을 이루고 GL_n(ℝ) 로 쓴다'고 한다. 이 항목은 행렬식을 쓰지 않는다(이 사이트에 없다). 가역은 선형대수의 invertible-matrix 의 정의(왼쪽 역과 오른쪽 역이 모두 있다)를 쓰고, 곱에 닫혀 있음과 역행렬이 가역이라는 것은 inverse-matrix-properties 의 (2), (3)을 인용한다. 출처는 n × n 행렬의 곱이 M_{n×n} 위의 이항연산이라는 것을 따로 적지 않는다(검색어 'matrix multiplication is' 3건은 결합법칙만, 'binary operation … matri' 1건은 덧셈군 M₂(ℝ), p.38). (3)(n ≥ 2 이면 아벨군이 아니다)은 출처가 2 × 2 에 대해 '일반적으로 AB ≠ BA' 라고만 하고 연습문제 3.8(p.41)로 AB ≠ BA 인 두 원소를 찾게 하는 것과 같은 결론이다. 이 항목은 모든 n ≥ 2 에서 두 기본행렬로 보인다. (4)(n = 1)는 출처에서 찾지 못했다(검색어 'GL1', 'GL 1(', '1 × 1', '1 by 1' 0건). 예시(2 × 2 가역행렬과 그 역행렬을 곱으로 확인)는 출처 Example 12.2(p.143)가 행렬 (2 1; 5 3)의 역행렬을 곱으로 확인하는 것과 같은 발상이고 행렬이 다르다. 이 항목은 출처 Example 3.14 의 행렬식 공식을 쓰지 않는다. 둘째 확인 질문의 n = 2 인 R_{1,2}(1) = (1 1; 0 1)은 출처 p.144 의 SL₂(ℝ) 예의 행렬 A 와 같은 행렬이다. 반례의 영행렬은 출처 Example 3.27(p.38–39)이 '영행렬은 GL₂(ℝ) 에 없다'고 적는 것과 같은 대상이다(그 예의 논점은 덧셈에 관한 것이다)."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 경계 경우에서 거짓이 되는 제목·직관과 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$n$이 자연수라 하자. $M_{n \times n}$, 성분 $a_{j,k}$, 단위행렬 $I_n$은 [[matrix|행렬]]의 것이고, 행렬의 곱은 [[matrix-product|행렬의 곱]]의 것이며, 가역과 역행렬 $A^{-1}$은 [[invertible-matrix|가역행렬과 역행렬]]의 것이다.

1. (행렬의 곱) $A, B \in M_{n \times n}$에 곱 $AB \in M_{n \times n}$을 대응시키는 것은 $M_{n \times n}$ 위의 [[binary-operation|이항연산]]이다. 이 연산은 결합법칙을 만족하고 $I_n$이 그 항등원이다.
2. (일반선형군) $n \times n$ 가역행렬 전체의 집합을
   $$GL_n(\mathbb{R}) = \{A \in M_{n \times n} : A \text{는 가역}\}$$
   으로 쓴다. $GL_n(\mathbb{R})$은 행렬의 곱에 대해 닫혀 있고, 행렬의 곱을 $GL_n(\mathbb{R})$로 제한한 연산으로 [[group|군]]이다. 이 군을 **일반선형군**(general linear group)이라 한다. 항등원은 $I_n$이고, $A \in GL_n(\mathbb{R})$의 역원은 역행렬 $A^{-1}$이다. 곧 두 기호 $A^{-1}$은 같은 행렬을 가리킨다.
3. ($n \ge 2$) $n \ge 2$이면 $GL_n(\mathbb{R})$은 아벨군이 아니다.
4. ($n = 1$) $1 \times 1$ 행렬 $A$, $B$에 대하여 $(AB)_{1,1} = a_{1,1} b_{1,1}$이다. $1 \times 1$ 행렬 $A$가 가역인 것은 정확히 $a_{1,1} \ne 0$일 때이고, 이때 $(A^{-1})_{1,1} = (a_{1,1})^{-1}$이다. $GL_1(\mathbb{R})$은 아벨군이다. $GL_1(\mathbb{R})$의 각 $A$에 실수 $a_{1,1}$을 대응시키는 것은 $GL_1(\mathbb{R})$에서 $\mathbb{R} - \{0\}$으로의 전단사이다.
:::

:::english
Let $n$ be a natural number. $M_{n \times n}$, the entries $a_{j,k}$ and the identity matrix $I_n$ are as in the entry on matrices, the product of matrices is as in the entry on the matrix product, and invertibility and the inverse matrix $A^{-1}$ are as in the entry on invertible matrices.

1. (Matrix product) Assigning to $A, B \in M_{n \times n}$ their product $AB \in M_{n \times n}$ is a binary operation on $M_{n \times n}$. This operation is associative and $I_n$ is its identity element.
2. (General linear group) The set of all invertible $n \times n$ matrices is written
   $$GL_n(\mathbb{R}) = \{A \in M_{n \times n} : A \text{ is invertible}\}.$$
   $GL_n(\mathbb{R})$ is closed under the matrix product, and with the restriction of the matrix product to $GL_n(\mathbb{R})$ it is a group, called the **general linear group**. Its identity is $I_n$, and the inverse of $A \in GL_n(\mathbb{R})$ is the inverse matrix $A^{-1}$. That is, the two symbols $A^{-1}$ denote the same matrix.
3. ($n \ge 2$) If $n \ge 2$, then $GL_n(\mathbb{R})$ is not abelian.
4. ($n = 1$) For $1 \times 1$ matrices $A$, $B$ we have $(AB)_{1,1} = a_{1,1} b_{1,1}$. A $1 \times 1$ matrix $A$ is invertible exactly when $a_{1,1} \ne 0$, and then $(A^{-1})_{1,1} = (a_{1,1})^{-1}$. $GL_1(\mathbb{R})$ is abelian. Assigning to each $A \in GL_1(\mathbb{R})$ the real number $a_{1,1}$ is a bijection from $GL_1(\mathbb{R})$ to $\mathbb{R} - \{0\}$.
:::

## 직관

$n \times n$ 행렬은 $\mathbb{R}^n$을 $\mathbb{R}^n$으로 보내는 선형사상을 적는 방법이고, 행렬의 곱은 사상의 합성에 해당합니다([[matrix-product|행렬의 곱]]의 (1)). 그 가운데 되돌릴 수 있는 사상, 곧 가역행렬만 모은 것이 $GL_n(\mathbb{R})$입니다. 대칭군이 집합의 전단사를 모았듯이, 일반선형군은 $\mathbb{R}^n$의 선형인 전단사를 행렬로 모은 것이라 볼 수 있습니다.

행렬 전체 $M_{n \times n}$은 곱으로 군이 되지 않습니다. 영행렬처럼 되돌릴 수 없는 행렬이 있기 때문입니다(아래 반례). 그래서 가역행렬만 모으고, 이 모음이 곱과 역행렬에 대해 닫혀 있다는 것은 선형대수의 [[inverse-matrix-properties|역행렬의 성질]]이 이미 보였습니다.

$n = 1$이면 행렬은 성분 하나뿐이라 곱이 실수의 곱이 되고, 일반선형군은 $0$이 아닌 실수의 곱셈과 같은 계산을 합니다. $n \ge 2$가 되면 행을 섞는 행렬들이 생겨 곱의 순서가 결과를 바꿀 수 있습니다((3)).

## 증명

:::idea
(1)과 (2)는 선형대수에서 증명한 곱의 결합법칙, 단위행렬, 역행렬의 성질을 [[binary-operation|이항연산]]의 (3)으로 옮긴다. (3)은 두 "행 더하기" 기본행렬의 곱의 $(1, 1)$ 성분을 두 순서로 계산해 비교한다.
:::

:::hint
(3): $R_{1,2}(1)$은 $1$번째 행에 $2$번째 행을 더하고, $R_{2,1}(1)$은 $2$번째 행에 $1$번째 행을 더한다.
:::

:::proof
아래에서 (K1)–(K9)는 [[real-number-arithmetic|실수의 계산 법칙]]의 번호이다.

**(1)** $A, B \in M_{n \times n}$이면 [[matrix-product|행렬의 곱]]에 의해 $n \times n$ 행렬 $AB$가 정확히 하나 정해진다. [[recursion-theorem|재귀 정리]]의 (1)에 의해 각 $(A, B)$에 $AB$를 대응시키는 것은 $M_{n \times n} \times M_{n \times n}$에서 $M_{n \times n}$으로의 함수, 곧 이항연산이다. [[matrix-product-properties|행렬 곱의 성질]]의 (1)을 $m = n = r = s$로 쓰면 결합법칙이 성립하고, 같은 항목의 (4)를 $m = n$으로 쓰면 모든 $A \in M_{n \times n}$에서 $I_n A = A$, $A I_n = A$이므로 $I_n$이 항등원이다.

**(2)** 닫힘: $A, B \in GL_n(\mathbb{R})$이면 [[inverse-matrix-properties|역행렬의 성질]]의 (3)을 $m = n = r$로 쓰면 $AB$가 가역이므로 $AB \in GL_n(\mathbb{R})$이다. [[binary-operation|이항연산]]의 (3)에 의해 곱을 $GL_n(\mathbb{R})$로 제한한 연산은 $GL_n(\mathbb{R})$ 위의 이항연산이고, (1)과 (3)의 (i)에 의해 결합적이다. [[inverse-matrix-properties|역행렬의 성질]]의 (1)에 의해 $I_n \in GL_n(\mathbb{R})$이고, (1)과 (3)의 (ii)에 의해 $I_n$은 제한한 연산의 항등원이다.

$A \in GL_n(\mathbb{R})$이면 [[invertible-matrix|가역행렬과 역행렬]]의 (1)에 의해 $A^{-1}$은 $A^{-1}A = I_n$이고 $AA^{-1} = I_n$인 $n \times n$ 행렬이므로, (1)의 연산에 대한 $A$의 역원이다. [[inverse-matrix-properties|역행렬의 성질]]의 (2)에 의해 $A^{-1}$은 가역이므로 $A^{-1} \in GL_n(\mathbb{R})$이고, (3)의 (iii)에 의해 제한한 연산에 대한 $A$의 역원이다. [[group|군]]의 세 조건이 성립하고, 역원의 유일성에 의해 군의 역원은 $A^{-1}$이다.

**(3)** $n \ge 2$이므로 $1, 2 \in \{1, \dots, n\}$이고 $1 \ne 2$이다. [[elementary-matrix|기본행렬]]의 $A = R_{1,2}(1)$과 $B = R_{2,1}(1)$을 생각한다. 같은 항목의 (3)에 의해 둘 다 가역이므로 $A, B \in GL_n(\mathbb{R})$이다. 정의에 의해 $B$의 $(1, 1)$ 성분은 $1$이고 $(2, 1)$ 성분은 $1$이며, $A$의 $(1, 1)$ 성분은 $1$이다. 같은 항목의 (2)에 의해, $A = R_{1,2}(1)$을 왼쪽에 곱하면 $1$번째 행에 $2$번째 행이 더해지므로
$$(AB)_{1,1} = b_{1,1} + 1 \cdot b_{2,1} = 1 + 1 = 2$$
이고, $B = R_{2,1}(1)$을 왼쪽에 곱하면 $2$번째가 아닌 행은 그대로이므로
$$(BA)_{1,1} = a_{1,1} = 1$$
이다. (K7)에 의해 $2 \ne 1$이므로 [[matrix|행렬]]의 (2)에 의해 $AB \ne BA$이다. 따라서 $GL_n(\mathbb{R})$은 아벨군이 아니다.

**(4)** $A$, $B$가 $1 \times 1$ 행렬이면 [[matrix-product|행렬의 곱]]의 (2)에 의해 $(AB)_{1,1}$은 첫째 항이 $a_{1,1}b_{1,1}$인 길이 $1$인 실수의 열의 합이고, [[finite-sum-of-vectors|벡터의 유한 합]]의 (H0)에 의해 그 합은 $a_{1,1}b_{1,1}$이다. [[matrix|행렬]]의 (6)에 의해 $I_1$의 $(1, 1)$ 성분은 $1$이다.

$A$가 가역이면 $BA = I_1$인 $1 \times 1$ 행렬 $B$가 있고, 성분을 비교하면 $b_{1,1}a_{1,1} = 1$이다. $a_{1,1} = 0$이라면 (K9)에 의해 $b_{1,1} \cdot 0 = 0$이 되어 (K4)의 $0 \ne 1$에 어긋나므로 $a_{1,1} \ne 0$이다. 거꾸로 $c = a_{1,1} \ne 0$이라 하자. [[elementary-matrix|기본행렬]]의 $1 \times 1$ 행렬 $D_1(c)$는 $(1, 1)$ 성분이 $c$이므로 [[matrix|행렬]]의 (2)에 의해 $A = D_1(c)$이고, [[elementary-matrix|기본행렬]]의 (3)에 의해 가역이며 $A^{-1} = D_1(c^{-1})$, 곧 $(A^{-1})_{1,1} = c^{-1}$이다.

$A, B \in GL_1(\mathbb{R})$이면 $(AB)_{1,1} = a_{1,1}b_{1,1} = b_{1,1}a_{1,1} = (BA)_{1,1}$이므로((K1)) [[matrix|행렬]]의 (2)에 의해 $AB = BA$이고, $GL_1(\mathbb{R})$은 아벨군이다.

끝으로 $A \in GL_1(\mathbb{R})$에 $a_{1,1}$을 대응시키는 것은 방금 보인 것에 의해 값이 $\mathbb{R} - \{0\}$에 있고, [[recursion-theorem|재귀 정리]]의 (1)에 의해 함수 $GL_1(\mathbb{R}) \to \mathbb{R} - \{0\}$이다. 단사: $a_{1,1} = b_{1,1}$이면 [[matrix|행렬]]의 (2)에 의해 $A = B$이다. 전사: $c \in \mathbb{R} - \{0\}$이면 $D_1(c) \in GL_1(\mathbb{R})$이고 그 $(1, 1)$ 성분이 $c$이다.
:::

## 예시와 반례

:::example[2 × 2 가역행렬과 그 역행렬]
$n = 2$이고
$$A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}, \qquad C = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$$
이라 합시다. [[matrix-product|행렬의 곱]]의 (2)로 성분을 계산하면 $(AC)_{1,1} = 2 \cdot 1 + 1 \cdot (-1) = 1$, $(AC)_{1,2} = 2 \cdot (-1) + 1 \cdot 2 = 0$, $(AC)_{2,1} = 1 \cdot 1 + 1 \cdot (-1) = 0$, $(AC)_{2,2} = 1 \cdot (-1) + 1 \cdot 2 = 1$이므로 $AC = I_2$입니다. 같은 방법으로 $(CA)_{1,1} = 1 \cdot 2 + (-1) \cdot 1 = 1$, $(CA)_{1,2} = 1 \cdot 1 + (-1) \cdot 1 = 0$, $(CA)_{2,1} = (-1) \cdot 2 + 2 \cdot 1 = 0$, $(CA)_{2,2} = (-1) \cdot 1 + 2 \cdot 1 = 1$이므로 $CA = I_2$입니다. 따라서 $A$는 가역이고 $A \in GL_2(\mathbb{R})$이며, 이 군에서 $A$의 역원은 $C = A^{-1}$입니다. 행렬식을 쓰지 않고 곱을 직접 계산해 확인했습니다.
:::

:::counterexample[행렬 전체는 곱으로 군이 되지 않는다]
$M_{n \times n}$ 전체는 행렬의 곱으로 군이 아닙니다. 모든 성분이 $0$인 영행렬 $O$를 보면, $B \in M_{n \times n}$이 무엇이든 [[matrix-product|행렬의 곱]]의 (2)에 의해 $(BO)_{j,k}$는 항이 $b_{j,l} \cdot 0 = 0$((K9))인 실수의 열의 합이고, [[finite-sum-of-vectors|벡터의 유한 합]]의 (H5)에 의해 $0$입니다. 따라서 $BO$의 $(1, 1)$ 성분은 $0$이고 $I_n$의 $(1, 1)$ 성분 $1$과 다르므로((K4)) $BO \ne I_n$입니다. 곧 $O$는 (1)의 연산에 대한 역원을 갖지 않습니다. 이 때문에 가역행렬만 모읍니다.
:::

## 확인 질문

:::check[$n = 1$일 때 $GL_1(\mathbb{R})$에서 성분이 $-3$인 행렬의 역원은?]
(4)에 의해 성분이 $-3$인 $1 \times 1$ 행렬은 가역이고, 역원은 성분이 $(-3)^{-1}$인 $1 \times 1$ 행렬입니다. 성분끼리 곱하면 $(-3)(-3)^{-1} = 1$이 되어 단위행렬 $I_1$이 나옵니다.
:::

:::check[(3)의 증명의 $A = R_{1,2}(1)$, $B = R_{2,1}(1)$에 대하여 $n = 2$일 때 $AB$와 $BA$를 모두 적어라.]
$n = 2$이면 $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$, $B = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}$입니다. $AB$는 $B$의 $1$번째 행에 $2$번째 행을 더한 것이므로 $AB = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$이고, $BA$는 $A$의 $2$번째 행에 $1$번째 행을 더한 것이므로 $BA = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$입니다. 두 행렬은 $(1, 1)$ 성분이 $2$와 $1$로 다릅니다.
:::
