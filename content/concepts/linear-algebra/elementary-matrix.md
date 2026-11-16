---
title: 기본행렬과 기본 행 연산
title_en: Elementary Matrices and Elementary Row Operations
aliases: [기본행렬, 기본 행 연산, 행 연산, 행 맞바꾸기, 행 바꾸기, 행의 상수배, 행 더하기, elementary matrix, elementary row operation, row operation, row exchange, row scaling, row replacement]
kind: definition
field: linear-algebra
msc: ["15A06"]
level: undergrad
summary: 두 행을 맞바꾸는 P, 한 행에 0 이 아닌 수를 곱하는 D, 한 행에 다른 행의 상수배를 더하는 R 의 세 종류 정사각행렬을 기본행렬이라 하고, 기본행렬을 왼쪽에 곱하는 것을 기본 행 연산이라 한다. 왼쪽에 곱하면 이름대로 행이 바뀌고, 기본행렬은 가역이며 그 역행렬도 같은 종류의 기본행렬이다.
requires: [function, finite-set, well-ordering-principle, real-number-arithmetic, real-function-space, finite-sum-of-vectors, matrix, matrix-vector-product, matrix-product, matrix-product-properties, invertible-matrix]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "2장 2절 2.1 Row operations, p.40; 2.1.1 Row operations and multiplication by elementary matrices, pp.41–42"
    checked: original
    note: "출처는 2.1절(p.40)에서 세 가지 행 연산, 곧 두 행을 맞바꾸기(row exchange), 한 행에 0 이 아닌 스칼라 곱하기(scaling), k 번째 행을 그것과 j 번째 행의 상수배의 합으로 바꾸고 나머지 행은 그대로 두기(row replacement)를 든다. 2.1.1(pp.41–42)에서는 모든 행 연산이 특별한 기본행렬(elementary matrices)을 왼쪽에 곱하는 것과 같다고 적고, 세 행렬을 점을 찍은 그림으로 보인 뒤, 곱이 그렇게 작용한다는 것은 벡터(열)에 어떻게 작용하는지 보면 알 수 있다고 적는다. 또 세 행렬이 모두 가역이고, 첫째의 역행렬은 자기 자신, 둘째는 a 를 1/a 로, 셋째는 a 를 −a 로 바꾼 것이라고 적되 그 확인은 열에 대한 작용을 보면 된다고 적는다(p.42). 이 항목은 세 행렬을 성분으로 정의하고, 행렬과 벡터의 곱의 행 규칙으로 (1)–(3)을 증명한다. 출처는 세 행렬에 이름이나 기호를 붙이지 않는다. P_{j,k}, D_k(c), R_{k,j}(c) 는 이 항목의 기호이다. 출처는 행 연산을 행렬에 대한 조작으로 먼저 정의하고 기본행렬의 곱을 그 설명으로 쓰지만, 이 항목은 거꾸로 기본 행 연산을 기본행렬을 왼쪽에 곱하는 것으로 정의한다. '기본 행 연산'(elementary row operation)이라는 말은 출처 2장 7절 연습문제 7.1 c(p.67)에 나온다. 기본행렬이 단위행렬에 그 행 연산을 한 것이라는 참고 블록의 내용은 출처 p.42 의 여백 글과 같다. 반례 '오른쪽에 곱하면 열이 바뀐다'는 출처 3장 3.5절 Lemma 3.6 의 증명(p.83)이 기본행렬을 오른쪽에 곱하는 것은 열 연산이라고 적는 것과 같은 발상이다. 출처의 스칼라는 실수 또는 복소수이고 이 항목은 실수만 쓴다. 예시, 다른 반례, 확인 질문은 새로 만들었다(출처 2.1절과 2.1.1 에는 기본행렬의 수치 예가 없다)."
status: source-checked
added: 2026-11-16
---

:::statement
$m$이 자연수라 하자. 아래에서 행렬의 성분을 정할 때마다, $\{1, \dots, m\} \times \{1, \dots, m\}$의 각 원소 $(p, q)$에 실수가 하나씩 정해지므로 [[real-function-space|(G)]]에 의해 그 값을 성분으로 갖는 $m \times m$ [[matrix|행렬]]이 있고, 행렬의 (2)에 의해 그런 행렬은 하나뿐이다.

- (맞바꿈) $j$, $k \in \{1, \dots, m\}$이고 $j \ne k$라 하자. $\tau(j) = k$, $\tau(k) = j$이고 $j$도 $k$도 아닌 $p$에서 $\tau(p) = p$인 [[function|함수]] $\tau : \{1, \dots, m\} \to \{1, \dots, m\}$를 정한다. $(p, q)$ 성분이 $q = \tau(p)$이면 $1$이고 $q \ne \tau(p)$이면 $0$인 $m \times m$ 행렬을 $P_{j,k}$로 쓴다.
- (배) $k \in \{1, \dots, m\}$이고 $c$가 $0$이 아닌 실수라 하자. $(p, q)$ 성분이 $p = q = k$이면 $c$, $p = q \ne k$이면 $1$, $p \ne q$이면 $0$인 $m \times m$ 행렬을 $D_k(c)$로 쓴다.
- (더하기) $j$, $k \in \{1, \dots, m\}$이고 $j \ne k$이며 $c$가 실수라 하자. $(p, q)$ 성분이 $p = q$이면 $1$, $(p, q) = (k, j)$이면 $c$, 그 밖에는 $0$인 $m \times m$ 행렬을 $R_{k,j}(c)$로 쓴다.

이 세 가지 꼴 가운데 하나인 $m \times m$ 행렬을 **기본행렬**(elementary matrix)이라 한다. $n$이 자연수이고 $M$이 $m \times n$ 행렬일 때, 기본행렬 $G$를 왼쪽에 곱한 $GM$을 $M$에서 얻는 것을 **기본 행 연산**(elementary row operation)이라 한다. $G$가 $P_{j,k}$, $D_k(c)$, $R_{k,j}(c)$일 때 이 연산을 각각 **행 맞바꾸기**, **행의 상수배**, **행 더하기**라 한다.

다음이 성립한다. $x = (x_1, \dots, x_m) \in \mathbb{R}^m$이고, $n$은 자연수, $A$는 $m \times n$ 행렬이다. $j$, $k$, $c$, $\tau$는 위의 것이다.

1. (벡터에 곱하기) 모든 $p \in \{1, \dots, m\}$에서 $P_{j,k}x$의 $p$번째 값은 $x_{\tau(p)}$이다. 곧 $P_{j,k}x$의 $j$번째 값은 $x_k$, $k$번째 값은 $x_j$이고, $j$도 $k$도 아닌 $p$번째 값은 $x_p$이다. $D_k(c)x$의 $k$번째 값은 $c x_k$이고, $p \ne k$인 $p$번째 값은 $x_p$이다. $R_{k,j}(c)x$의 $k$번째 값은 $x_k + c x_j$이고, $p \ne k$인 $p$번째 값은 $x_p$이다.
2. (행렬에 곱하기) 모든 $p \in \{1, \dots, m\}$와 $q \in \{1, \dots, n\}$에서
$$(P_{j,k}A)_{p,q} = a_{\tau(p),q}$$
이다. $(D_k(c)A)_{k,q} = c\, a_{k,q}$이고 $p \ne k$이면 $(D_k(c)A)_{p,q} = a_{p,q}$이다. $(R_{k,j}(c)A)_{k,q} = a_{k,q} + c\, a_{j,q}$이고 $p \ne k$이면 $(R_{k,j}(c)A)_{p,q} = a_{p,q}$이다. 곧 $P_{j,k}A$는 $A$의 $j$번째 행과 $k$번째 행을 맞바꾼 행렬, $D_k(c)A$는 $A$의 $k$번째 행에 $c$를 곱한 행렬, $R_{k,j}(c)A$는 $A$의 $k$번째 행에 $j$번째 행의 $c$배를 더한 행렬이고, 그 밖의 행은 $A$의 것과 같다.
3. (역행렬) 상수배 꼴의 $c$는 $0$이 아니므로 $c^{-1}$이 있고 $c^{-1} \ne 0$이다. 또
$$P_{j,k}P_{j,k} = I_m, \qquad D_k(c)D_k(c^{-1}) = D_k(c^{-1})D_k(c) = I_m, \qquad R_{k,j}(c)R_{k,j}(-c) = R_{k,j}(-c)R_{k,j}(c) = I_m$$
이다. 따라서 모든 기본행렬은 [[invertible-matrix|가역]]이고, $P_{j,k}^{-1} = P_{j,k}$, $D_k(c)^{-1} = D_k(c^{-1})$, $R_{k,j}(c)^{-1} = R_{k,j}(-c)$이다. 특히 기본행렬의 역행렬은 같은 꼴의 기본행렬이다.
4. ($m = 1$) $m = 1$이면 $j \ne k$인 $j$, $k \in \{1\}$이 없으므로 $P_{j,k}$와 $R_{k,j}(c)$는 없다. $1 \times 1$ 기본행렬은 $0$이 아닌 실수 $c$에 대한 $D_1(c) = \begin{pmatrix} c \end{pmatrix}$뿐이다.
:::

:::english
Let $m$ be a natural number. Each time entries are specified below, a real number is given for each element $(p, q)$ of $\{1, \dots, m\} \times \{1, \dots, m\}$, so by (G) there is an $m \times m$ matrix with these entries, and by (2) of the entry on matrices there is only one such matrix.

- (Exchange) Let $j$, $k \in \{1, \dots, m\}$ with $j \ne k$. Define the function $\tau : \{1, \dots, m\} \to \{1, \dots, m\}$ by $\tau(j) = k$, $\tau(k) = j$, and $\tau(p) = p$ for $p$ equal to neither $j$ nor $k$. We write $P_{j,k}$ for the $m \times m$ matrix whose $(p, q)$ entry is $1$ if $q = \tau(p)$ and $0$ if $q \ne \tau(p)$.
- (Scaling) Let $k \in \{1, \dots, m\}$ and let $c$ be a nonzero real number. We write $D_k(c)$ for the $m \times m$ matrix whose $(p, q)$ entry is $c$ if $p = q = k$, $1$ if $p = q \ne k$, and $0$ if $p \ne q$.
- (Replacement) Let $j$, $k \in \{1, \dots, m\}$ with $j \ne k$, and let $c$ be a real number. We write $R_{k,j}(c)$ for the $m \times m$ matrix whose $(p, q)$ entry is $1$ if $p = q$, $c$ if $(p, q) = (k, j)$, and $0$ otherwise.

An $m \times m$ matrix of one of these three forms is called an **elementary matrix**. When $n$ is a natural number and $M$ is an $m \times n$ matrix, obtaining $GM$ from $M$ by multiplying by an elementary matrix $G$ on the left is called an **elementary row operation**. When $G$ is $P_{j,k}$, $D_k(c)$, or $R_{k,j}(c)$, this operation is called a **row exchange**, a **row scaling**, or a **row replacement**, respectively.

The following hold. Here $x = (x_1, \dots, x_m) \in \mathbb{R}^m$, $n$ is a natural number, and $A$ is an $m \times n$ matrix. $j$, $k$, $c$, $\tau$ are as above.

1. (Multiplying a vector) For every $p \in \{1, \dots, m\}$, the $p$-th value of $P_{j,k}x$ is $x_{\tau(p)}$. That is, the $j$-th value of $P_{j,k}x$ is $x_k$, its $k$-th value is $x_j$, and its $p$-th value for $p$ equal to neither $j$ nor $k$ is $x_p$. The $k$-th value of $D_k(c)x$ is $c x_k$, and its $p$-th value for $p \ne k$ is $x_p$. The $k$-th value of $R_{k,j}(c)x$ is $x_k + c x_j$, and its $p$-th value for $p \ne k$ is $x_p$.
2. (Multiplying a matrix) For all $p \in \{1, \dots, m\}$ and $q \in \{1, \dots, n\}$,
$$(P_{j,k}A)_{p,q} = a_{\tau(p),q}.$$
Also $(D_k(c)A)_{k,q} = c\, a_{k,q}$, and $(D_k(c)A)_{p,q} = a_{p,q}$ if $p \ne k$. Also $(R_{k,j}(c)A)_{k,q} = a_{k,q} + c\, a_{j,q}$, and $(R_{k,j}(c)A)_{p,q} = a_{p,q}$ if $p \ne k$. That is, $P_{j,k}A$ is $A$ with its $j$-th and $k$-th rows exchanged, $D_k(c)A$ is $A$ with its $k$-th row multiplied by $c$, and $R_{k,j}(c)A$ is $A$ with $c$ times its $j$-th row added to its $k$-th row; the other rows are those of $A$.
3. (Inverses) Since $c$ in the scaling form is nonzero, $c^{-1}$ exists and $c^{-1} \ne 0$. Moreover,
$$P_{j,k}P_{j,k} = I_m, \qquad D_k(c)D_k(c^{-1}) = D_k(c^{-1})D_k(c) = I_m, \qquad R_{k,j}(c)R_{k,j}(-c) = R_{k,j}(-c)R_{k,j}(c) = I_m.$$
Hence every elementary matrix is invertible, and $P_{j,k}^{-1} = P_{j,k}$, $D_k(c)^{-1} = D_k(c^{-1})$, $R_{k,j}(c)^{-1} = R_{k,j}(-c)$. In particular, the inverse of an elementary matrix is an elementary matrix of the same form.
4. ($m = 1$) If $m = 1$, there are no $j$, $k \in \{1\}$ with $j \ne k$, so there is no $P_{j,k}$ and no $R_{k,j}(c)$. The $1 \times 1$ elementary matrices are exactly the matrices $D_1(c) = \begin{pmatrix} c \end{pmatrix}$ with $c$ a nonzero real number.
:::

## 직관

연립방정식을 손으로 풀 때 쓰는 조작은 세 가지입니다. 두 식의 순서를 바꾸고, 한 식의 양변에 $0$이 아닌 수를 곱하고, 한 식에 다른 식의 몇 배를 더합니다. 첨가행렬에서 식 하나는 행 하나이므로 이 조작들은 행에 대한 조작이고, 이 항목의 (2)는 이 조작이 모두 정해진 행렬을 왼쪽에 곱하는 것으로 이루어진다는 뜻입니다. 행렬과 벡터의 곱의 $p$번째 값은 행렬의 $p$번째 행과 벡터의 성분을 짝지어 곱한 합이므로, 행렬의 $p$번째 행에 $0$이 아닌 성분이 하나뿐이면 그 값은 벡터의 한 성분을 그 수만큼 곱한 것이 됩니다. $P_{j,k}$와 $D_k(c)$의 모든 행, $R_{k,j}(c)$의 $k$번째 행이 아닌 행이 그렇고, $R_{k,j}(c)$의 $k$번째 행에만 $0$이 아닐 수 있는 성분이 둘 있습니다.

세 조작은 모두 되돌릴 수 있습니다. 두 행을 다시 맞바꾸면 원래대로이고, $c$를 곱한 행에 $c^{-1}$을 곱하면 원래대로이며, $c$배를 더한 행에서 같은 $c$배를 빼면 원래대로입니다. 이 항목의 (3)은 이것을 행렬의 곱으로 적은 것입니다. $D_k(c)$에서 $c \ne 0$을 요구하는 것은 이 되돌리기 때문입니다. 아래 반례에서 보듯이, $2 \times 2$ 행렬에서 둘째 행에 $0$을 곱하는 행렬은 가역이 아닙니다.

## 성질의 증명

:::proof
**정의에 쓰인 사실.** $\tau$: $j \ne k$이므로 각 $p \in \{1, \dots, m\}$는 $p = j$, $p = k$, "$p$는 $j$도 $k$도 아니다" 가운데 정확히 하나에 해당하고, 어느 경우든 $\{1, \dots, m\}$의 원소 하나가 정해지므로 (G)에 의해 $\tau$가 있다. $P_{j,k}$: 각 $(p, q)$에서 $q = \tau(p)$이거나 아니거나 둘 가운데 하나이다. $D_k(c)$: 각 $(p, q)$는 $p = q = k$, $p = q \ne k$, $p \ne q$ 가운데 정확히 하나에 해당한다. $R_{k,j}(c)$: $j \ne k$이므로 $(k, j)$는 $p = q$인 순서쌍이 아니고, 따라서 각 $(p, q)$는 $p = q$, $(p, q) = (k, j)$, 그 밖의 경우 가운데 정확히 하나에 해당한다.

**한 행에 0이 아닌 성분이 하나인 경우.** $G$가 $m \times m$ 행렬이라 하자. [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)에 의해 $Gx$의 $p$번째 값은 $q$번째 항이 $g_{p,q} x_q$인 실수의 열의 합 $g_{p,1} x_1 + \cdots + g_{p,m} x_m$이다. [[finite-sum-of-vectors|벡터의 유한 합]]에서 실수의 합은 벡터공간 $\mathbb{R}$에서의 합이고 $\mathbb{R}$의 스칼라배는 실수의 곱이므로([[real-function-space|실숫값 함수의 공간]]의 (2)), 이 합은 계수의 열이 $g_{p,1}, \dots, g_{p,m}$이고 벡터의 열이 $x_1, \dots, x_m$인 합이다. 따라서 어떤 $q_0$에서 $q \ne q_0$인 모든 $q$에 대해 $g_{p,q} = 0$이면, 벡터의 유한 합의 (C4)에 의해 $Gx$의 $p$번째 값은 $g_{p,q_0} x_{q_0}$이다. 이것을 (★)라 하자. 아래에서 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 번호로 적는다.

**(1)의 증명.** $P_{j,k}$의 $p$번째 행에서는 $q \ne \tau(p)$이면 성분이 $0$이고 $(p, \tau(p))$ 성분은 $1$이다. (★)에 의해 $P_{j,k}x$의 $p$번째 값은 $1 \cdot x_{\tau(p)}$이고, (K1)과 (K4)에 의해 이것은 $x_{\tau(p)}$이다. $\tau(j) = k$, $\tau(k) = j$이고 나머지 $p$에서 $\tau(p) = p$이므로 둘째 문장이 나온다.

$D_k(c)$의 $p$번째 행에서는 $q \ne p$이면 성분이 $0$이다. (★)에 의해 $D_k(c)x$의 $p$번째 값은 $(p, p)$ 성분과 $x_p$의 곱이다. $p = k$이면 $(k, k)$ 성분이 $c$이므로 $c x_k$이고, $p \ne k$이면 $(p, p)$ 성분이 $1$이므로 (K1)과 (K4)에 의해 $1 \cdot x_p = x_p$이다.

$R_{k,j}(c)$의 $p$번째 행에서 $p \ne k$이면, $q \ne p$인 $(p, q)$는 $p = q$가 아니고 첫 자리가 $k$가 아니므로 $(k, j)$도 아니어서 성분이 $0$이다. (★)에 의해 $p$번째 값은 $1 \cdot x_p = x_p$이다. $k$번째 행에는 $0$이 아닐 수 있는 성분이 둘이므로 합을 나눈다. (G)에 의해 실수의 열 $\alpha$, $\beta$를 $q = k$이면 $\alpha_q = 1$, 아니면 $\alpha_q = 0$으로, $q = j$이면 $\beta_q = c$, 아니면 $\beta_q = 0$으로 정한다. 모든 $q$에서 $(k, q)$ 성분은 $\alpha_q + \beta_q$이다. 실제로 $q = k$이면 $j \ne k$이므로 $\beta_k = 0$이고 성분은 $1 = 1 + 0$이다((K4)). $q = j$이면 $j \ne k$이므로 $(k, j)$는 $p = q$인 순서쌍이 아니어서 성분은 $c$이고, $\alpha_j = 0$이므로 $\alpha_j + \beta_j = 0 + c = c$이다((K1), (K4)). $q$가 $j$도 $k$도 아니면 성분은 $0$이고 $\alpha_q + \beta_q = 0 + 0 = 0$이다((K4)). 두 실수의 열은 항이 모두 같으므로 같은 열이고 합도 같다. 따라서 벡터의 유한 합의 (C1)에 의해
$$R_{k,j}(c)x \text{의 } k\text{번째 값} = (\alpha_1 x_1 + \cdots + \alpha_m x_m) + (\beta_1 x_1 + \cdots + \beta_m x_m)$$
이고, (C4)를 두 합에 각각 쓰면 이것은 $1 \cdot x_k + c x_j = x_k + c x_j$이다((K1), (K4)).

**(2)의 증명.** $G$가 셋 가운데 하나라 하자. [[matrix-product|행렬의 곱]]의 정의에 의해 $GA$의 $q$번째 열은 $G\mathbf{a}_q$이고, [[matrix|행렬]]의 열의 정의에 의해 $(GA)_{p,q}$는 이 열의 $p$번째 값이다. 또 $\mathbf{a}_q$의 $p$번째 값은 $a_{p,q}$이다. 따라서 이 항목의 (1)을 $x = \mathbf{a}_q$에 쓰면 된다. 예를 들어 $(P_{j,k}A)_{p,q}$는 $P_{j,k}\mathbf{a}_q$의 $p$번째 값이므로 이 항목의 (1)에 의해 $\mathbf{a}_q$의 $\tau(p)$번째 값 $a_{\tau(p),q}$이다. $(D_k(c)A)_{k,q}$는 $D_k(c)\mathbf{a}_q$의 $k$번째 값 $c\, a_{k,q}$이고, $p \ne k$이면 $(D_k(c)A)_{p,q}$는 $a_{p,q}$이다. $(R_{k,j}(c)A)_{k,q}$는 $R_{k,j}(c)\mathbf{a}_q$의 $k$번째 값 $a_{k,q} + c\, a_{j,q}$이고, $p \ne k$이면 $(R_{k,j}(c)A)_{p,q}$는 $a_{p,q}$이다. 행에 관한 마지막 문장은 이 등식들을 [[matrix|행렬]]의 행의 정의($p$번째 행의 $q$번째 값이 $(p, q)$ 성분)로 읽은 것이다.

**(3)의 증명.** 먼저 다음을 쓴다. $G$, $G'$이 $m \times m$ 행렬이고 모든 $x \in \mathbb{R}^m$에서 $G(G'x) = x$이면, [[matrix-product|행렬의 곱]]의 (1)과 행렬과 벡터의 곱의 (3)에 의해 $(GG')x = G(G'x) = x = I_m x$이므로 행렬과 벡터의 곱의 (5)에 의해 $GG' = I_m$이다. 이것을 (★★)라 하자. 또 $\mathbb{R}^m$의 두 원소는 모든 자리에서 값이 같으면 같다([[real-function-space|실숫값 함수의 공간]]).

맞바꿈: 모든 $p$에서 $\tau(\tau(p)) = p$이다. $p = j$이면 $\tau(\tau(j)) = \tau(k) = j$, $p = k$이면 $\tau(\tau(k)) = \tau(j) = k$, 그 밖에는 $\tau(\tau(p)) = \tau(p) = p$이다. $y = P_{j,k}x$라 하면 이 항목의 (1)에 의해 $P_{j,k}y$의 $p$번째 값은 $y_{\tau(p)} = x_{\tau(\tau(p))} = x_p$이다. 따라서 $P_{j,k}(P_{j,k}x) = x$이고 (★★)에 의해 $P_{j,k}P_{j,k} = I_m$이다.

상수배: $c \ne 0$이므로 (K6)과 (K8)의 (iii)에 의해 $c c^{-1} = 1$인 $c^{-1}$이 있다. $c^{-1} = 0$이면 (K9)에 의해 $c c^{-1} = 0$이 되어 (K4)의 $0 \ne 1$에 어긋나므로 $c^{-1} \ne 0$이고, $D_k(c^{-1})$이 정해진다. (K1)에 의해 $c^{-1} c = 1$이기도 하다. $y = D_k(c^{-1})x$라 하면 이 항목의 (1)에 의해 $y_k = c^{-1} x_k$이고 $p \ne k$이면 $y_p = x_p$이다. 다시 이 항목의 (1)에 의해 $D_k(c)y$의 $k$번째 값은 $c(c^{-1} x_k) = (c c^{-1}) x_k = 1 \cdot x_k = x_k$이고((K2), (K1), (K4)), $p \ne k$이면 $p$번째 값은 $y_p = x_p$이다. (★★)에 의해 $D_k(c)D_k(c^{-1}) = I_m$이다. 순서를 바꾸어 $y = D_k(c)x$라 하면 $y_k = c x_k$이고 $p \ne k$이면 $y_p = x_p$이며, $D_k(c^{-1})y$의 $k$번째 값은 $c^{-1}(c x_k) = (c^{-1} c) x_k = 1 \cdot x_k = x_k$이고 $p \ne k$이면 $p$번째 값은 $x_p$이다. (★★)에 의해 $D_k(c^{-1})D_k(c) = I_m$이다.

더하기: $y = R_{k,j}(-c)x$라 하면 이 항목의 (1)에 의해 $y_k = x_k + (-c)x_j$이고 $p \ne k$이면 $y_p = x_p$이다. 특히 $j \ne k$이므로 $y_j = x_j$이다. 이 항목의 (1)에 의해 $R_{k,j}(c)y$의 $k$번째 값은
$$y_k + c y_j = (x_k + (-c)x_j) + c x_j = x_k + ((-c)x_j + c x_j) = x_k + ((-c) + c)x_j = x_k + 0 \cdot x_j = x_k$$
이다. 여기서 차례로 (K2), (K12)의 (i), (K1)과 $-c$의 정의 $c + (-c) = 0$, (K9)와 (K4)를 썼다. $p \ne k$이면 $p$번째 값은 $y_p = x_p$이다. (★★)에 의해 $R_{k,j}(c)R_{k,j}(-c) = I_m$이다. 순서를 바꾸어 $y = R_{k,j}(c)x$라 하면 $y_k = x_k + c x_j$, $y_j = x_j$이고 $p \ne k$이면 $y_p = x_p$이다. $R_{k,j}(-c)y$의 $k$번째 값은
$$y_k + (-c)y_j = (x_k + c x_j) + (-c)x_j = x_k + (c x_j + (-c)x_j) = x_k + (c + (-c))x_j = x_k + 0 \cdot x_j = x_k$$
이고((K2), (K12)의 (i), $-c$의 정의, (K9), (K4)), $p \ne k$이면 $p$번째 값은 $x_p$이다. (★★)에 의해 $R_{k,j}(-c)R_{k,j}(c) = I_m$이다.

가역: 기본행렬 $G$와 위에서 짝지은 $m \times m$ 행렬 $G'$($P_{j,k}$에는 $P_{j,k}$, $D_k(c)$에는 $D_k(c^{-1})$, $R_{k,j}(c)$에는 $R_{k,j}(-c)$)은 $G'G = I_m$이고 $GG' = I_m$을 만족한다. [[invertible-matrix|가역행렬]]의 정의에 의해 $G'$은 $G$의 왼쪽 역이면서 오른쪽 역이므로 $G$는 가역이고, 그 항목의 (1)에 의해 $G^{-1} = G'$이다. $c^{-1} \ne 0$이므로 $D_k(c^{-1})$은 상수배 꼴의 기본행렬이고, $R_{k,j}(-c)$는 같은 $j \ne k$에 대한 더하기 꼴의 기본행렬이다.

**(4)의 증명.** [[finite-set|유한집합]] 항목의 정의에 의해 $\{1, \dots, 1\} = \{i \in \mathbb{Z} : 1 \le i \le 1\}$이고, $1 \le i \le 1$이면 [[well-ordering-principle|정렬 원리]] 항목의 (L2)에 의해 $i = 1$이며 $1$은 이 집합에 속하므로 이 집합은 $\{1\}$이다. 따라서 $j$, $k \in \{1\}$이면 $j = 1 = k$이고, $j \ne k$인 $j$, $k$는 없다. 남은 기본행렬은 $k = 1$인 $D_1(c)$이고, 그 유일한 성분 $(1, 1)$은 $p = q = k$인 경우이므로 $c$이다. $\blacksquare$
:::

## 예시와 반례

:::example[3 × 2 행렬에 행 더하기와 행 맞바꾸기]
$m = 3$이고
$$A = \begin{pmatrix} 2 & -1 \\ 1 & 3 \\ 4 & 0 \end{pmatrix}, \qquad R_{3,1}(-2) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ -2 & 0 & 1 \end{pmatrix}$$
이라 합시다. $R_{3,1}(-2)$는 대각성분이 $1$이고 $(3, 1)$ 성분이 $-2$입니다. 이 항목의 (2)에 의해 $R_{3,1}(-2)A$의 셋째 행은 $(4 + (-2) \cdot 2,\ 0 + (-2)(-1)) = (0, 2)$이고 첫째, 둘째 행은 그대로입니다. 열로 계산해도 같습니다. $A$의 첫째 열 $(2, 1, 4)$에 대해 $R_{3,1}(-2)$의 열들의 일차결합 $2(1, 0, -2) + 1(0, 1, 0) + 4(0, 0, 1) = (2, 1, 0)$이고, 둘째 열 $(-1, 3, 0)$에 대해 $(-1)(1, 0, -2) + 3(0, 1, 0) + 0(0, 0, 1) = (-1, 3, 2)$입니다. 따라서
$$R_{3,1}(-2)A = \begin{pmatrix} 2 & -1 \\ 1 & 3 \\ 0 & 2 \end{pmatrix}, \qquad P_{1,2}R_{3,1}(-2)A = \begin{pmatrix} 1 & 3 \\ 2 & -1 \\ 0 & 2 \end{pmatrix}$$
입니다. 둘째 등식은 이 항목의 (2)에 의해 첫째 행과 둘째 행을 맞바꾼 것입니다. 이 항목의 (3)에 의해 $R_{3,1}(2)$를 왼쪽에 곱하면 $R_{3,1}(-2)A$에서 $A$로 돌아옵니다. 실제로 셋째 행이 $(0 + 2 \cdot 2,\ 2 + 2(-1)) = (4, 0)$이 됩니다.
:::

:::counterexample[한 행에 0을 곱하는 행렬은 가역이 아니다]
$D_2(c)$의 정의에서 $c = 0$을 허용했다면 생겼을 $2 \times 2$ 행렬 $N = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$을 봅시다. $B$가 어떤 $2 \times 2$ 행렬이든 [[matrix-product|행렬의 곱]]의 (2)에 의해 $(NB)_{2,2} = 0 \cdot b_{1,2} + 0 \cdot b_{2,2}$이고 (K9)에 의해 두 항은 $0$이므로, 길이 $2$인 열의 합이 두 항의 덧셈이라는 [[finite-sum-of-vectors|벡터의 유한 합]]의 (H0)과 (K4)에 의해 이것은 $0 + 0 = 0$입니다. $I_2$의 $(2, 2)$ 성분은 $1$이고 (K4)에 의해 $0 \ne 1$이므로 $NB \ne I_2$입니다. 곧 $N$은 오른쪽 가역이 아니고 가역이 아닙니다. 따라서 이 항목의 (3)이 성립하려면 상수배 꼴에서 $c \ne 0$이어야 합니다.
:::

:::counterexample[오른쪽에 곱한 맞바꿈 행렬이 열을 바꾸는 예]
$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$이고 $m = 2$라 합시다. 이 항목의 (2)에 의해 $P_{1,2}A = \begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix}$입니다. 한편 $P_{1,2}$의 첫째 열은 $(0, 1)$, 둘째 열은 $(1, 0)$이므로 곱의 정의에 의해 $AP_{1,2}$의 첫째 열은 $0(1, 3) + 1(2, 4) = (2, 4)$, 둘째 열은 $1(1, 3) + 0(2, 4) = (1, 3)$이고
$$AP_{1,2} = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$$
입니다. $(1, 1)$ 성분이 $3$과 $2$로 다르므로 $P_{1,2}A \ne AP_{1,2}$입니다. 이 예에서 오른쪽에 곱한 $P_{1,2}$는 두 행이 아니라 두 열을 맞바꿉니다. 그래서 기본 행 연산은 언제나 왼쪽에 곱하는 것으로 정합니다.
:::

:::remark[기본행렬은 단위행렬에 그 연산을 한 것]
[[matrix-product-properties|행렬 곱의 성질]]의 (4)에 의해 기본행렬 $G$는 $G = GI_m$이므로, 이 항목의 (2)를 $A = I_m$에 쓰면 $G$는 $I_m$에 $G$의 행 연산을 한 행렬입니다. 예를 들어 위 예시의 $R_{3,1}(-2)$는 $I_3$의 셋째 행 $(0, 0, 1)$에 첫째 행 $(1, 0, 0)$의 $-2$배를 더해 셋째 행을 $(-2, 0, 1)$로 바꾼 것입니다. 기본행렬을 외울 때 이 방법이 편합니다.
:::

## 확인 질문

:::check[$m = 3$일 때 $P_{1,3}$을 배열로 쓰면 무엇인가?]
$\tau(1) = 3$, $\tau(3) = 1$, $\tau(2) = 2$이므로 $1$인 성분은 $(1, 3)$, $(2, 2)$, $(3, 1)$뿐이고 나머지는 $0$입니다.
$$P_{1,3} = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{pmatrix}$$
:::

:::check[$m = 2$일 때 $R_{1,2}(5)R_{1,2}(3)$은 어떤 기본행렬인가?]
$R_{1,2}(8)$입니다. $x \in \mathbb{R}^2$이고 $y = R_{1,2}(3)x$라 하면 이 항목의 (1)에 의해 $y_1 = x_1 + 3x_2$, $y_2 = x_2$입니다. 다시 이 항목의 (1)에 의해 $R_{1,2}(5)y$의 첫째 값은 $y_1 + 5y_2 = (x_1 + 3x_2) + 5x_2 = x_1 + (3 + 5)x_2 = x_1 + 8x_2$이고([[real-number-arithmetic|(K2)]], (K12)의 (i), (K7)) 둘째 값은 $y_2 = x_2$이며, 이것은 이 항목의 (1)에 의한 $R_{1,2}(8)x$의 값과 같습니다. [[matrix-product|행렬의 곱]]의 (1)에 의해 모든 $x$에서 $(R_{1,2}(5)R_{1,2}(3))x = R_{1,2}(8)x$이므로 [[matrix-vector-product|행렬과 벡터의 곱]]의 (5)에 의해 두 행렬은 같습니다.
:::
