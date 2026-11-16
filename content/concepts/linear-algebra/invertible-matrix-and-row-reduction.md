---
title: 가역행렬과 행 소거
title_en: Invertible Matrices and Row Reduction
aliases: [역행렬 구하기, 가우스-조르당 역행렬, 가역행렬은 기본행렬의 곱, 가역행렬과 단위행렬의 행 동치, finding the inverse by row reduction, invertible matrix is a product of elementary matrices]
kind: theorem
field: linear-algebra
msc: ["15A09"]
level: undergrad
summary: 정사각행렬 A 에 대하여, A 가 가역인 것, A 가 단위행렬과 행 동치인 것, A 와 행 동치인 기약 사다리꼴의 피벗이 n 개인 것, A 가 기본행렬의 곱인 것은 모두 같은 조건이다. 또 (A | Iₙ) 을 기약 사다리꼴로 소거하면 (EA | E) 가 되고, EA = Iₙ 이면 E 가 역행렬이며, EA 가 Iₙ 이 아니면 A 는 가역이 아니다.
requires: [prime-number, well-ordering-principle, real-number-arithmetic, linear-map, matrix, matrix-vector-product, matrix-product, matrix-product-properties, invertible-matrix, inverse-matrix-properties, one-sided-inverse-of-square-matrix, rank-of-a-matrix, system-of-linear-equations, elementary-matrix, row-equivalence, echelon-form, row-reduction]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "2장 3.2절 Proposition 3.6, p.50; 4절 Finding A⁻¹ by row reduction, pp.52–53, Theorem 4.1, p.53"
    checked: original
    note: "출처 Proposition 3.6(p.50)은 행렬이 가역인 것은 정확히 그 사다리꼴의 모든 열과 모든 행에 피벗이 있을 때라고 적는다. 4절(p.52)은 가역행렬의 사다리꼴에는 모든 행과 열에 피벗이 있으므로 기약 사다리꼴이 I 이고, 따라서 가역행렬은 단위행렬과 행 동치라고 적은 뒤, (A | I) 를 행 소거하여 A 를 I 로 바꾸면 덧붙인 I 가 A⁻¹ 로 바뀌고, A 를 I 로 바꿀 수 없으면 A 는 가역이 아니라는 알고리즘을 적는다. 그 이유를 EA = I 이므로 E = A⁻¹ 이고 같은 행 연산이 (A | I) 를 (EA | E) = (I | A⁻¹) 로 바꾼다고 설명한다(p.53). Theorem 4.1(p.53)은 모든 가역행렬이 기본행렬의 곱이라는 것이고, A⁻¹ = E_N ⋯ E_1 에서 A = E_1⁻¹ ⋯ E_N⁻¹ 로 증명한다. 이 항목의 (1)은 이 사실들을 네 조건의 동치로 모아, 가역이면 기약 사다리꼴이 I_n 이라는 것을 계수와 echelon-form 의 (5), (6)으로 증명하고, 기본행렬의 곱의 역행렬이 기본행렬의 곱이라는 것은 row-equivalence 의 (3)을 인용한다. 출처 알고리즘의 4 번 'A 를 I 로 바꿀 수 없으면'은 이 항목의 (2)에서 'EA 가 I_n 이 아닌 기약 사다리꼴이면'으로 정확히 적는다. EA = I_n 에서 E = A⁻¹ 을 얻는 데는 정사각행렬은 한쪽 역만 있으면 가역이라는 것(one-sided-inverse-of-square-matrix 의 (1))을 쓴다. 예시는 출처 p.53 의 3 × 3 예와 4절 연습문제 4.1(p.54)의 두 행렬과 다른 행렬로 새로 골랐고, 과정은 출처의 알고리즘과 같다. 반례와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$n$이 자연수이고 $A$가 $n \times n$ [[matrix|행렬]]이라 하자. [[row-equivalence|기본행렬의 곱과 행 동치]], [[echelon-form|기약 사다리꼴]]과 피벗의 개수는 그 항목들에서 정한 것이다.

1. 다음 네 조건은 서로 같다.
   - (가) $A$는 [[invertible-matrix|가역]]이다.
   - (나) $A$와 $I_n$은 행 동치이다.
   - (다) $A$와 행 동치인 기약 사다리꼴 가운데 피벗의 개수가 $n$인 것이 있다.
   - (라) $A$는 $n \times n$ 기본행렬의 곱이다.

   또 $A$가 가역이면 $A$와 행 동치인 기약 사다리꼴은 $I_n$뿐이다. $A$가 가역이 아니면 $A$와 행 동치인 모든 기약 사다리꼴은 피벗의 개수가 $n$보다 작고, 그 $n$번째 행은 영행이다.
2. (역행렬 구하기) $E$가 $n \times n$ 기본행렬의 곱이고 $n \times 2n$ 행렬 $E(A \mid I_n)$이 기약 사다리꼴이라 하자([[row-reduction|행 소거]]의 (2)에 의해 이런 $E$는 있다). 그러면 $E(A \mid I_n) = (EA \mid E)$이고 $EA$는 기약 사다리꼴이다. $EA = I_n$이면 $A$는 가역이고 $A^{-1} = E$이다. $EA \ne I_n$이면 $A$는 가역이 아니다. 더 일반적으로, 기본행렬의 곱 $E$에 대해 $EA$가 $I_n$이 아닌 기약 사다리꼴이면 $A$는 가역이 아니다.
:::

:::english
Let $n$ be a natural number and $A$ an $n \times n$ matrix. Products of elementary matrices and row equivalence, the reduced echelon form, and the number of pivots are as defined in their entries.

1. The following four conditions are equivalent.
   - (a) $A$ is invertible.
   - (b) $A$ and $I_n$ are row equivalent.
   - (c) Among the matrices in reduced echelon form row equivalent to $A$ there is one with $n$ pivots.
   - (d) $A$ is an $n \times n$ product of elementary matrices.

   Moreover, if $A$ is invertible, the only matrix in reduced echelon form row equivalent to $A$ is $I_n$. If $A$ is not invertible, every matrix in reduced echelon form row equivalent to $A$ has fewer than $n$ pivots, and its $n$-th row is a zero row.
2. (Finding the inverse) Let $E$ be an $n \times n$ product of elementary matrices such that the $n \times 2n$ matrix $E(A \mid I_n)$ is in reduced echelon form (such an $E$ exists by (2) of the entry on row reduction). Then $E(A \mid I_n) = (EA \mid E)$ and $EA$ is in reduced echelon form. If $EA = I_n$, then $A$ is invertible and $A^{-1} = E$. If $EA \ne I_n$, then $A$ is not invertible. More generally, if $E$ is a product of elementary matrices and $EA$ is in reduced echelon form but not equal to $I_n$, then $A$ is not invertible.
:::

## 직관

정사각행렬을 기약 사다리꼴로 소거하면 갈림길은 둘뿐입니다. 피벗이 $n$개이면 결과는 $I_n$이고, 피벗이 $n$개보다 적으면 마지막 행이 영행으로 남습니다. 앞의 경우에는 행 연산을 모두 모은 $E$가 $EA = I_n$을 만족하므로 $E$가 바로 역행렬입니다. 뒤의 경우에는 계수가 $n$보다 작아 가역일 수 없습니다.

(2)는 이 $E$를 따로 계산하지 않고 얻는 방법입니다. $A$ 옆에 $I_n$을 붙여 두면 행 연산이 두 부분에 똑같이 적용되므로, 왼쪽이 $EA$가 될 때 오른쪽은 $EI_n = E$가 됩니다. 장부의 원본과 사본을 나란히 놓고 같은 수정을 함께 하는 것과 같습니다. 원본이 깨끗한 꼴($I_n$)이 되었을 때 사본에는 그동안 한 수정의 기록이 남습니다. 비유가 맞지 않는 곳은 사본이 원본의 복사가 아니라 처음부터 $I_n$이라는 점입니다.

(라)는 가역행렬을 기본행렬로 쪼갤 수 있다는 뜻입니다. 가역행렬에 대한 사실을 세 종류의 기본행렬에 대해서만 확인하면 되는 경우가 있어 쓸모가 있습니다.

## 증명

:::idea
$A$와 행 동치인 기약 사다리꼴 $U = EA$의 계수는 $A$의 계수와 같고 피벗의 개수와도 같다. 정사각이고 피벗이 $n$개이면 $U = I_n$이므로 $A = E^{-1}$이다.
:::

:::hint
$A$가 가역인 것은 [[rank-of-a-matrix|행렬의 계수]]의 (5)에 의해 $\operatorname{rank} A = n$일 때입니다. $\operatorname{rank} U$는 [[echelon-form|사다리꼴]]의 (6)으로 구합니다.
:::

:::hint
(2)에서 $E(A \mid I_n)$의 처음 $n$개의 열로 된 행렬이 $EA$입니다. 사다리꼴의 (4)를 씁니다.
:::

:::proof
결합법칙과 단위행렬 법칙은 [[matrix-product-properties|행렬 곱의 성질]]의 (1)과 (4)이다. 정수에 관해서는 [[well-ordering-principle|정렬 원리]] 항목의 (Z5)와 [[prime-number]]의 진술에서 받아들인 (Z1)을 쓴다.

**보조 사실.** $E$가 기본행렬의 곱이고 $U = EA$가 기약 사다리꼴이며 그 피벗의 개수가 $r$이라 하자. [[row-equivalence|행 동치]]의 (5)에 의해 $\operatorname{rank} U = \operatorname{rank} A$이고, 사다리꼴의 (6)에 의해 $\operatorname{rank} U = r$이므로 $r = \operatorname{rank} A$이다. 행렬의 계수의 (5)에 의해 $A$가 가역인 것은 정확히 $\operatorname{rank} A = n$, 곧 $r = n$일 때이다. 이것을 (☆)라 하자.

**(1)의 증명.** (가)⇒(나): [[row-reduction|행 소거]]의 (2)에 의해 $EA$가 기약 사다리꼴인 기본행렬의 곱 $E$가 있다. (☆)에 의해 $EA$의 피벗의 개수는 $n$이고, 사다리꼴의 (5)에 의해 $EA = I_n$이다. 따라서 $A$와 $I_n$은 행 동치이다.

(나)⇒(다): $I_n = EA$인 기본행렬의 곱 $E$가 있다. $I_n$은 $r = n$, $\ell_j = j$로 기약 사다리꼴이다. 실제로 (가) $(j, j)$ 성분은 $1 \ne 0$이고([[real-number-arithmetic|(K4)]]) $k < j$이면 $k \ne j$이므로 $(j, k)$ 성분은 $0$이며, (나) $j < j + 1$이고, (다) $n < j \le n$인 $j$는 없고, (라) [[matrix|행렬]]의 (6)에 의해 $j$번째 열은 $e_j$이다. 따라서 $I_n$은 $A$와 행 동치이고 피벗의 개수가 $n$인 기약 사다리꼴이다.

(다)⇒(라): 피벗이 $n$개인 기약 사다리꼴 $U$가 $A$와 행 동치이면, 행 동치의 정의에 의해 $U = EA$인 기본행렬의 곱 $E$가 있다. 사다리꼴의 (5)에 의해 $U = I_n$이다. 행 동치의 (3)에 의해 $E$는 가역이고 $E^{-1}$은 기본행렬의 곱이다. [[invertible-matrix|가역행렬]]의 (1)의 $E^{-1}E = I_n$과 결합법칙, 단위행렬 법칙에 의해
$$A = I_n A = (E^{-1}E)A = E^{-1}(EA) = E^{-1}I_n = E^{-1}$$
이므로 $A$는 기본행렬의 곱이다.

(라)⇒(가): 행 동치의 (3)에 의해 기본행렬의 곱은 가역이다.

나머지 두 문장: $U$가 $A$와 행 동치인 기약 사다리꼴이면 $U = EA$인 기본행렬의 곱 $E$가 있다. $A$가 가역이면 (☆)에 의해 $U$의 피벗의 개수는 $n$이고 사다리꼴의 (5)에 의해 $U = I_n$이다. $A$가 가역이 아니면 (☆)에 의해 $U$의 피벗의 개수 $r$은 $n$이 아니고, $r \le n$이므로 $r < n$이다. 그러면 $r < n \le n$이므로 사다리꼴의 (다)에 의해 $U$의 $n$번째 행은 영행이다.

**(2)의 증명.** [[system-of-linear-equations|연립일차방정식]]의 (4)와 단위행렬 법칙에 의해 $E(A \mid I_n) = (EA \mid EI_n) = (EA \mid E)$이다. 연립일차방정식의 (3)에 의해 $(EA \mid E)$의 처음 $n$개의 열은 $EA$의 열이므로, 행렬의 (3)에 의해 그 열들로 된 $n \times n$ 행렬은 $EA$이다. 사다리꼴의 (4)를 $k = n$에 쓰면 $EA$는 기약 사다리꼴이다.

$EA = I_n$이면 $E$는 $A$의 왼쪽 역인 $n \times n$ 행렬이므로, [[one-sided-inverse-of-square-matrix|정사각행렬의 한쪽 역]]의 (1)에 의해 $A$는 가역이고 $A^{-1} = E$이다.

$EA$가 $I_n$이 아닌 기약 사다리꼴이면($E$는 기본행렬의 곱), $EA$는 $A$와 행 동치인 기약 사다리꼴이다. $A$가 가역이라면 (1)에 의해 $EA = I_n$이어야 하므로 모순이고, $A$는 가역이 아니다. 앞 문단의 $E$로 $EA \ne I_n$인 경우가 이것의 특별한 경우이다. $\blacksquare$
:::

## 예시와 반례

:::example[3 × 3 행렬의 역행렬]
$$A = \begin{pmatrix} 0 & 2 & 1 \\ 1 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix}$$
의 역행렬을 (2)로 구합니다. $(A \mid I_3)$에 다음 행 연산을 차례로 합니다. 각 단계는 [[elementary-matrix|기본행렬]]의 (2)로 계산합니다.

1. $P_{1,2}$: 첫째와 둘째 행을 맞바꾼다.
2. $P_{2,3}$: 둘째와 셋째 행을 맞바꾼다(둘째 열의 아래 값 가운데 $1$인 것을 둘째 행으로 올린다).
3. $R_{1,2}(-1)$, $R_{3,2}(-2)$: 첫째 행에서 둘째 행을, 셋째 행에서 둘째 행의 $2$배를 뺀다.
4. $D_3(-1)$: 셋째 행에 $-1$을 곱한다.
5. $R_{1,3}(1)$, $R_{2,3}(-1)$: 첫째 행에 셋째 행을 더하고, 둘째 행에서 셋째 행을 뺀다.

$$\left(\begin{array}{ccc|ccc} 0 & 2 & 1 & 1 & 0 & 0 \\ 1 & 1 & 0 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 & 0 & 1 \end{array}\right) \to \left(\begin{array}{ccc|ccc} 1 & 1 & 0 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 & 0 & 1 \\ 0 & 2 & 1 & 1 & 0 & 0 \end{array}\right) \to \left(\begin{array}{ccc|ccc} 1 & 0 & -1 & 0 & 1 & -1 \\ 0 & 1 & 1 & 0 & 0 & 1 \\ 0 & 0 & -1 & 1 & 0 & -2 \end{array}\right) \to \left(\begin{array}{ccc|ccc} 1 & 0 & 0 & -1 & 1 & 1 \\ 0 & 1 & 0 & 1 & 0 & -1 \\ 0 & 0 & 1 & -1 & 0 & 2 \end{array}\right)$$

(세로줄은 $(A \mid I_3)$의 두 부분을 가르는 표시입니다. 첫째 화살표는 1, 2단계, 둘째는 3단계, 셋째는 4, 5단계입니다.) 마지막 행렬은 피벗이 $1, 2, 3$번째 열에 있는 기약 사다리꼴이고 왼쪽 부분이 $I_3$이므로, (2)에 의해
$$A^{-1} = E = \begin{pmatrix} -1 & 1 & 1 \\ 1 & 0 & -1 \\ -1 & 0 & 2 \end{pmatrix}$$
입니다. 검산: $AE$의 첫째 열은 $E$의 첫째 열 $(-1, 1, -1)$에 대한 $A$의 열들의 일차결합 $(-1)(0, 1, 0) + 1(2, 1, 1) + (-1)(1, 0, 1) = (1, 0, 0)$이고, 같은 계산으로 둘째 열은 $1(0, 1, 0) = (0, 1, 0)$, 셋째 열은 $1(0, 1, 0) + (-1)(2, 1, 1) + 2(1, 0, 1) = (0, 0, 1)$입니다. 따라서 $AE = I_3$이기도 합니다.
:::

:::counterexample[소거하면 영행이 남는 행렬]
$A = \begin{pmatrix} 1 & -3 \\ -2 & 6 \end{pmatrix}$이면 $R_{2,1}(2)A$는 둘째 행에 첫째 행의 $2$배를 더한 $\begin{pmatrix} 1 & -3 \\ 0 & 0 \end{pmatrix}$입니다(둘째 행은 $(-2 + 2,\ 6 - 6) = (0, 0)$). 이것은 $r = 1$, $\ell_1 = 1$인 기약 사다리꼴이고 $I_2$가 아니므로, (2)의 마지막 문장에 의해 $A$는 가역이 아닙니다. (1)대로 둘째 행이 영행입니다. 실제로 $x = (3, 1)$이면 $Ax = 3(1, -2) + 1(-3, 6) = (0, 0)$이고, [[linear-map|선형사상]]의 (T1)에 의해 $T_A$는 영벡터도 영벡터로 보내므로 $T_A$는 단사가 아닙니다.
:::

## 확인 질문

:::check[$2 \times 2$ 행렬 $A$에 대하여 $R_{1,2}(5)\,D_2(-1)A = I_2$이면 $A$는 무엇인가?]
$E = R_{1,2}(5)D_2(-1)$이면 $EA = I_2$이므로 (2)에 의해 $A^{-1} = E$이고, $A = E^{-1}$입니다. [[elementary-matrix|기본행렬]]의 (3)과 [[inverse-matrix-properties|역행렬의 성질]]의 (3)에 의해 $E^{-1} = D_2(-1)^{-1}R_{1,2}(5)^{-1} = D_2(-1)R_{1,2}(-5)$입니다([[real-number-arithmetic|(K12)]]의 (iii)에 의해 $(-1)(-1) = 1$이므로 $(-1)^{-1} = -1$). $R_{1,2}(-5) = \begin{pmatrix} 1 & -5 \\ 0 & 1 \end{pmatrix}$의 둘째 행에 $-1$을 곱하면 $A = \begin{pmatrix} 1 & -5 \\ 0 & -1 \end{pmatrix}$입니다.
:::

:::check[$A$가 가역인 $n \times n$ 행렬이고 $E$가 기본행렬의 곱이며 $EA$가 기약 사다리꼴이면 $EA$는 무엇인가?]
$I_n$입니다. $EA$는 $A$와 행 동치인 기약 사다리꼴이므로 (1)에 의해 $I_n$뿐입니다. 곧 가역행렬은 어떤 순서로 소거해도 기약 사다리꼴로 만들면 $I_n$이 됩니다.
:::
