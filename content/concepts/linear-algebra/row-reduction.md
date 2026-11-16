---
title: 행 소거와 기약 사다리꼴의 존재
title_en: Row Reduction and Existence of the Reduced Echelon Form
aliases: [행 소거, 행 소거법, 가우스-조르당 소거법, 가우스 조르당 소거, 소거법, 기약 행 사다리꼴의 존재, row reduction, Gauss-Jordan elimination, Gaussian elimination]
kind: theorem
field: linear-algebra
msc: ["15A06"]
level: undergrad
summary: 모든 행렬은 기본 행 연산을 유한 번 하여 기약 사다리꼴로 만들 수 있다. 곧 모든 m × n 행렬 A 에 대하여 EA 가 기약 사다리꼴인 기본행렬의 곱 E 가 있다. 열의 개수에 대한 귀납으로 증명하며, 그 핵심은 한 벡터를 다음 표준기저 벡터로 보내면서 앞의 표준기저 벡터들은 그대로 두는 기본행렬의 곱을 만드는 것이다.
requires: [prime-number, well-ordering-principle, mathematical-induction, real-number-arithmetic, real-function-space, linear-combination-and-span, standard-basis, linear-map, matrix, matrix-vector-product, matrix-product, matrix-product-properties, system-of-linear-equations, elementary-matrix, row-equivalence, echelon-form]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "2장 2절 2.2 Row reduction, pp.42–43; 2.2.1 An example of row reduction, pp.43–44; 2.3 Echelon form 의 후진 단계, p.45"
    checked: original
    note: "출처는 2.2절(pp.42–43)에서 행 소거의 '주 단계'를 세 하위 단계로 적는다. 가장 왼쪽의 0 이 아닌 열을 찾고, 필요하면 행 맞바꾸기로 그 열의 첫 성분이 0 이 아니게 하여 이것을 피벗이라 부르고, 첫 행의 적당한 배수를 2, 3, …, m 번째 행에서 빼어 피벗 아래의 성분을 모두 0 으로 만든다. 그다음 첫 행은 그대로 두고 2, …, m 번째 행에 주 단계를 되풀이하며, 주 단계를 유한 번(많아야 m 번) 하면 사다리꼴을 얻는다고 적는다(p.43). 기약 사다리꼴은 사다리꼴에서 아래에서 위로, 오른쪽에서 왼쪽으로 행 더하기로 피벗 위의 성분을 지워 얻는다고 적고(p.45), 이 후진 단계의 알고리즘을 정식화하는 것은 독자의 연습으로 남긴다(p.44). 출처는 이 절차를 정리로 진술하거나 증명하지 않는다. 이 항목은 '모든 행렬에 대하여 EA 가 기약 사다리꼴인 기본행렬의 곱 E 가 있다'를 정리로 진술하고, 출처와 달리 행이 아니라 열의 개수에 대한 귀납으로 증명한다. 이 귀납은 왼쪽 열부터 차례로 피벗을 만들면서 피벗 열의 다른 성분을 모두 지우므로 사다리꼴을 거치지 않고 기약 사다리꼴을 바로 준다. 출처의 '주 단계'의 하위 단계 2, 3 은 이 항목의 (1)(피벗 만들기)에 해당하고, 출처가 첫 행의 배수를 다른 행에서 빼는 것을 이 항목은 처리한 행의 번호에 대한 귀납으로 적는다. 출처의 '많아야 m 번'은 이 항목에서 두 귀납이 대신한다. '가우스–조르당 소거'(Gauss–Jordan elimination)라는 이름은 출처 2절 첫머리(p.40)에 행 소거(row reduction)의 다른 이름으로 나온다. 기약 사다리꼴이 하나로 정해지는지는 출처 연습문제 3.9(p.52)가 묻는데, 이 항목은 그것을 다루지 않는다. 예시의 행렬과 계산은 출처 2.2.1(pp.43–44)의 3 × 3 예와 다르게 새로 만들었다. 반례와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$m$이 자연수라 하자. [[elementary-matrix|기본행렬]], [[row-equivalence|기본행렬의 곱과 행 동치]], [[echelon-form|기약 사다리꼴]]은 그 항목들에서 정한 것이고, $e_1, \dots, e_m$은 $\mathbb{R}^m$의 [[standard-basis|표준기저]]이다.

1. (피벗 만들기) $r$이 $0 \le r < m$인 정수이고 $d \in \mathbb{R}^m$이며, $r < i \le m$인 어떤 $i$에서 $d$의 $i$번째 값이 $0$이 아니라 하자. 그러면 $m \times m$ 기본행렬의 곱 $F$가 있어 $1 \le j \le r$인 모든 $j$에서 $Fe_j = e_j$이고 $Fd = e_{r+1}$이다.
2. (행 소거) $n$이 자연수이면, 모든 $m \times n$ 행렬 $A$에 대하여 $EA$가 기약 사다리꼴인 $m \times m$ 기본행렬의 곱 $E$가 있다. 곧 모든 행렬은 어떤 기약 사다리꼴과 행 동치이다.

이 항목은 $A$와 행 동치인 기약 사다리꼴이 하나뿐인지는 다루지 않는다.
:::

:::english
Let $m$ be a natural number. Elementary matrices, products of elementary matrices and row equivalence, and the reduced echelon form are as defined in their entries, and $e_1, \dots, e_m$ is the standard basis of $\mathbb{R}^m$.

1. (Making a pivot) Let $r$ be an integer with $0 \le r < m$, let $d \in \mathbb{R}^m$, and suppose the $i$-th value of $d$ is nonzero for some $i$ with $r < i \le m$. Then there is an $m \times m$ product of elementary matrices $F$ such that $Fe_j = e_j$ for every $j$ with $1 \le j \le r$ and $Fd = e_{r+1}$.
2. (Row reduction) If $n$ is a natural number, then for every $m \times n$ matrix $A$ there is an $m \times m$ product of elementary matrices $E$ such that $EA$ is in reduced echelon form. That is, every matrix is row equivalent to some matrix in reduced echelon form.

This entry does not address whether the reduced echelon form row equivalent to $A$ is unique.
:::

## 직관

연립방정식을 손으로 풀 때는 첫 미지수를 한 식에만 남기고 나머지 식에서 지운 뒤, 다음 미지수로 넘어갑니다. 행렬로 말하면 왼쪽 열부터 한 열씩 다듬는 것입니다. 지금까지 다듬은 앞쪽 열들이 피벗 $r$개를 가진 기약 사다리꼴이라 하고 새 열 $d$를 봅시다. $d$의 $r$번째보다 아래 값이 모두 $0$이면 새 열은 이미 $e_1, \dots, e_r$의 일차결합이므로 손댈 것이 없고, 자유 열이 됩니다. 아래에 $0$이 아닌 값이 있으면 그 값을 $(r + 1)$번째 행으로 옮기고, $1$로 만들고, 나머지 값을 모두 지웁니다. 이것이 (1)이고, 새 열은 $e_{r+1}$이 되어 새 피벗 열이 됩니다.

(1)에서 중요한 것은 앞쪽 열을 망가뜨리지 않는다는 점입니다. 앞쪽 열은 모두 $e_1, \dots, e_r$의 일차결합인데, (1)의 $F$는 $e_1, \dots, e_r$을 그대로 두므로 선형성에 의해 그 일차결합도 그대로 둡니다. 피벗을 만드는 데 쓰는 행 연산은 $r$번째보다 아래의 행끼리 맞바꾸거나 $(r + 1)$번째 행에 수를 곱하거나 $(r + 1)$번째 행의 배수를 다른 행에 더하는 것이고, 앞쪽 열에서 $r$번째보다 아래 행의 성분은 모두 $0$이기 때문입니다. 공장의 조립 라인에 비유하면, 이미 조립한 부품은 그대로 두고 새 부품 하나만 제자리에 끼우는 작업을 열마다 되풀이하는 셈입니다. 비유가 맞지 않는 곳은, 새 부품이 이미 있는 부품으로 만들어질 수 있으면(자유 열) 아무것도 끼우지 않는다는 점입니다.

## 증명

:::idea
열의 개수에 대한 귀납을 쓴다. 처음 $n$개의 열을 기약 사다리꼴로 만든 뒤, 새 열의 아래쪽 값이 모두 $0$이면 그대로 두고, 아니면 앞의 표준기저 벡터들을 고정하면서 새 열을 다음 표준기저 벡터로 보내는 기본행렬의 곱을 곱한다.
:::

:::hint
(1)은 세 단계로 나뉜다. 행 맞바꾸기로 $0$이 아닌 값을 $(r + 1)$번째 자리로 옮기고, 상수배로 그 값을 $1$로 만들고, $(r + 1)$번째 행의 배수를 다른 행에 더해 나머지 값을 하나씩 지운다. 이 연산들이 $e_1, \dots, e_r$을 바꾸지 않는지 [[elementary-matrix|기본행렬]]의 (5)로 확인한다.
:::

:::hint
(2)의 귀납 단계에서 $A = (A' \mid \mathbf{a}_{n+1})$로 나누고, 귀납 가정의 $E'$을 곱하면 [[system-of-linear-equations|연립일차방정식]]의 (4)에 의해 $E'A = (E'A' \mid E'\mathbf{a}_{n+1})$이다. 새 열의 아래쪽 값에 따라 두 경우로 나눈다.
:::

:::proof
정수에 관해서는 [[prime-number]]의 진술에서 받아들인 (Z1)과 [[well-ordering-principle|정렬 원리]] 항목의 (Z5)–(Z7), (L1)–(L3)을 쓴다. $\mathbb{R}^m$의 원소의 같음은 값마다 비교한다([[real-function-space|실숫값 함수의 공간]]). 결합법칙과 단위행렬 법칙은 [[matrix-product-properties|행렬 곱의 성질]]의 (1)과 (4)이고, 행렬과 벡터의 곱의 결합 $(GH)x = G(Hx)$는 [[matrix-product|행렬의 곱]]의 (1)이다. $I_m$이 기본행렬의 곱이라는 것, 기본행렬의 곱에 기본행렬을 왼쪽에 곱해도 기본행렬의 곱이라는 것, 두 기본행렬의 곱의 곱이 기본행렬의 곱이라는 것은 [[row-equivalence|행 동치]]의 (1), (2)이다. 아래에서 $x \in \mathbb{R}^m$의 $k$번째 값을 $x_k$로 쓴다.

**(1)의 증명.** $d_i \ne 0$인 $i$ ($r < i \le m$)를 하나 잡는다. $r < m$이므로 (Z1)에 의해 $r + 1 \le m$이고, $r + 1 \in \{1, \dots, m\}$이다.

첫째 단계(맞바꿈). $i = r + 1$이면 $P = I_m$으로, $i \ne r + 1$이면 $P = P_{r+1,i}$로 둔다. 어느 경우든 $P$는 기본행렬의 곱이다. $d' = Pd$라 하자. $P = I_m$이면 [[matrix-vector-product|행렬과 벡터의 곱]]의 (3)에 의해 $d' = d$이고 $d'_{r+1} = d_{r+1} = d_i$이다. $P = P_{r+1,i}$이면 기본행렬의 (1)에 의해 $d'_{r+1} = d_i$이다. 어느 경우든 $d'_{r+1} \ne 0$이다. 또 $1 \le j \le r$이면 $j < r + 1$이고 $r < i$이므로 (Z6)에 의해 $j < i$이며, (L1)에 의해 $j$는 $r + 1$도 $i$도 아니다. 따라서 $P = I_m$이면 $Pe_j = e_j$이고, $P = P_{r+1,i}$이면 맞바꿈의 함수 $\tau$가 $\tau(j) = j$이므로 기본행렬의 (5)에 의해 $Pe_j = e_{\tau(j)} = e_j$이다.

둘째 단계(상수배). $c = d'_{r+1} \ne 0$이라 하고 $D = D_{r+1}(c^{-1})$이라 한다(기본행렬의 (3)에 의해 $c^{-1} \ne 0$). $y = Dd'$이라 하면 기본행렬의 (1)에 의해 $y_{r+1} = c^{-1} c = 1$이다([[real-number-arithmetic|(K1)]]과 $c^{-1}$의 정의). $1 \le j \le r$이면 $j \ne r + 1$이므로 기본행렬의 (5)에 의해 $De_j = e_j$이다.

셋째 단계(지우기). $t \ge 0$인 정수마다 명제 $S_t$를 다음으로 두고, 시작점이 $0$인 [[mathematical-induction|수학적 귀납법]]으로 보인다.

> $S_t$: $t \le m$이면 기본행렬의 곱 $H$가 있어 (i) $1 \le j \le r$인 모든 $j$에서 $He_j = e_j$이고, (ii) $z = Hy$의 $(r + 1)$번째 값은 $1$이며, (iii) $1 \le k \le t$이고 $k \ne r + 1$인 모든 $k$에서 $z_k = 0$이다.

기초 단계: $H = I_m$으로 두면 행렬과 벡터의 곱의 (3)에 의해 $He_j = e_j$이고 $z = y$이므로 $z_{r+1} = 1$이며, $1 \le k \le 0$인 $k$는 (L1)에 의해 없으므로 (iii)은 저절로 성립한다.

귀납 단계: $t \ge 0$이고 $S_t$가 참이라 하자. $t + 1 \le m$이라 하자. (L3)과 (Z6)에 의해 $t \le m$이므로 귀납 가정의 $H$가 있고, $z = Hy$라 한다. $t + 1 \in \{1, \dots, m\}$이다.

- $t + 1 = r + 1$이면 $H' = H$로 둔다. (i), (ii)는 그대로이고, $1 \le k \le t + 1$이고 $k \ne r + 1 = t + 1$이면 (Z5)와 (Z1)에 의해 $k \le t$이므로 (iii)은 귀납 가정에서 나온다.
- $t + 1 \ne r + 1$이면 $G = R_{t+1,r+1}(-z_{t+1})$이라 하고 $H' = GH$로 둔다. $H'$은 기본행렬의 곱이다. $z' = H'y$라 하면 $z' = G(Hy) = Gz$이다. 기본행렬의 (1)에 의해 $z'_{t+1} = z_{t+1} + (-z_{t+1}) z_{r+1} = z_{t+1} + (-z_{t+1}) \cdot 1 = 0$이고((K4), $-z_{t+1}$의 정의), $k \ne t + 1$이면 $z'_k = z_k$이다. 따라서 (ii) $z'_{r+1} = z_{r+1} = 1$이고, (iii) $1 \le k \le t + 1$, $k \ne r + 1$이면 $k = t + 1$일 때 $z'_k = 0$이며 $k \ne t + 1$일 때는 $k \le t$이므로 $z'_k = z_k = 0$이다. (i) $1 \le j \le r$이면 $j \ne r + 1$이므로 기본행렬의 (5)에 의해 $Ge_j = e_j$이고, $H'e_j = G(He_j) = Ge_j = e_j$이다.

어느 경우든 $S_{t+1}$이 참이다. 귀납법에 의해 $S_m$이 참이다. 그 $H$와 $z = Hy$에서 $z_{r+1} = 1$이고 $r + 1$이 아닌 모든 $k \in \{1, \dots, m\}$에서 $z_k = 0$이므로, 값을 비교하면 $z = e_{r+1}$이다.

이제 $F = H(DP)$로 둔다. 기본행렬의 곱의 곱이므로 $F$는 기본행렬의 곱이다. $1 \le j \le r$이면 $Fe_j = H(D(Pe_j)) = H(De_j) = He_j = e_j$이고, $Fd = H(D(Pd)) = H(Dd') = Hy = e_{r+1}$이다.

**(2)의 증명.** $m$을 고정하고, 자연수 $n$마다 명제 $Q_n$을 "모든 $m \times n$ 행렬 $A$에 대하여 $EA$가 기약 사다리꼴인 기본행렬의 곱 $E$가 있다"로 두어 시작점이 $1$인 귀납법으로 보인다. 아래에서 [[echelon-form|사다리꼴]]의 조건 (가)–(라)를 쓴다.

기초 단계: $A$가 $m \times 1$ 행렬이라 하자. 모든 $i$에서 $\mathbf{a}_1$의 $i$번째 값이 $0$이면 $A$의 모든 성분이 $0$이다. 이때 $r = 0$(빈 열 $\ell$)으로 (가), (나), (라)는 $1 \le j \le 0$인 $j$가 없어 저절로 성립하고, (다)는 모든 행이 영행이라는 것이므로 성립한다. 곧 $A$는 기약 사다리꼴이고, $E = I_m$으로 두면 단위행렬 법칙에 의해 $EA = A$이다. 어떤 $i$에서 $\mathbf{a}_1$의 $i$번째 값이 $0$이 아니면 $0 < i \le m$이므로 (1)을 $r = 0$, $d = \mathbf{a}_1$에 쓸 수 있고, $F\mathbf{a}_1 = e_1$인 기본행렬의 곱 $F$가 있다. 행렬의 곱의 정의에 의해 $FA$는 유일한 열이 $e_1$인 $m \times 1$ 행렬이다. $r = 1$, $\ell_1 = 1$로 두면 (가) $(1, 1)$ 성분은 $1 \ne 0$이고((K4)) $k < 1$인 $k \in \{1\}$은 없으며, (나)는 $1 \le j < 1$인 $j$가 없어 성립하고, (다) $1 < j \le m$이면 $(j, 1)$ 성분은 $e_1$의 $j$번째 값 $0$이며, (라) 첫째 열은 $e_1$이다. 따라서 $E = F$로 두면 $EA$는 기약 사다리꼴이다.

귀납 단계: $n \ge 1$이고 $Q_n$이 참이라 하자. $A$가 $m \times (n + 1)$ 행렬이라 하자. [[system-of-linear-equations|연립일차방정식]]의 (3)에 의해 $A = (A' \mid \mathbf{a}_{n+1})$이고, $A'$은 $A$의 처음 $n$개의 열로 된 $m \times n$ 행렬이다. 귀납 가정에 의해 $U = E'A'$이 기약 사다리꼴인 기본행렬의 곱 $E'$이 있다. $U$의 피벗의 개수를 $r$, 피벗 열의 번호를 $\ell_1, \dots, \ell_r$이라 하자. $d = E'\mathbf{a}_{n+1}$이라 하면 연립일차방정식의 (4)에 의해 $E'A = (U \mid d)$이다. 같은 항목의 (3)에 의해 $M = (U \mid d)$의 $(j, k)$ 성분은 $k \le n$이면 $u_{j,k}$이고 $k = n + 1$이면 $d_j$이다. 또 사다리꼴 항목의 (2)에 의해 $\ell_j \le n$이다.

경우 1: $r < i \le m$인 모든 $i$에서 $d_i = 0$이다. $M$이 같은 $r$과 $\ell$로 기약 사다리꼴임을 보인다. (가) $1 \le j \le r$이면 $1 \le \ell_j \le n \le n + 1$이고 $M$의 $(j, \ell_j)$ 성분은 $u_{j,\ell_j} \ne 0$이다. $k \in \{1, \dots, n + 1\}$이고 $k < \ell_j$이면 $k < \ell_j \le n$이므로 $k \le n$이고 $(j, k)$ 성분은 $u_{j,k} = 0$이다. (나)는 $U$에서와 같다. (다) $r < j \le m$이면 $k \le n$에서 $(j, k)$ 성분은 $U$의 $j$번째 행이 영행이므로 $0$이고, $(j, n + 1)$ 성분은 $d_j = 0$이다. (라) $1 \le j \le r$이면 $\ell_j \le n$이므로 $M$의 $\ell_j$번째 열은 $U$의 $\ell_j$번째 열이고 $e_j$이다. 따라서 $E = E'$으로 두면 $EA = M$은 기약 사다리꼴이다.

경우 2: $r < i \le m$인 어떤 $i$에서 $d_i \ne 0$이다. 그러면 (Z6)에 의해 $r < m$이므로 (1)에 의해 $1 \le j \le r$에서 $Fe_j = e_j$이고 $Fd = e_{r+1}$인 기본행렬의 곱 $F$가 있다. 사다리꼴 항목의 (3)에 의해 $U$의 각 열 $\mathbf{u}_k$는 $\operatorname{span}(e_1, \dots, e_r)$에 속하므로, 어떤 실수의 열 $\beta_1, \dots, \beta_r$로 $\mathbf{u}_k = \beta_1 e_1 + \cdots + \beta_r e_r$이다([[linear-combination-and-span|생성]]의 정의). $T_F$는 선형사상이므로 [[linear-map|선형사상]]의 (T5)에 의해 $F\mathbf{u}_k = \beta_1 Fe_1 + \cdots + \beta_r Fe_r = \beta_1 e_1 + \cdots + \beta_r e_r = \mathbf{u}_k$이다. 행렬의 곱의 정의와 [[matrix|행렬]]의 (3)에 의해 $FU = U$이다. 따라서 연립일차방정식의 (4)와 결합법칙에 의해
$$(FE')A = F(E'A) = F(U \mid d) = (FU \mid Fd) = (U \mid e_{r+1})$$
이다. $M' = (U \mid e_{r+1})$이라 하면, 그 $(j, k)$ 성분은 $k \le n$이면 $u_{j,k}$이고 $k = n + 1$이면 $e_{r+1}$의 $j$번째 값이다. $r + 1 \le m$이다. [[real-function-space|(G)]]에 의해 $j \le r$에서 $\ell'_j = \ell_j$이고 $\ell'_{r+1} = n + 1$인 길이 $r + 1$인 정수의 열 $\ell'$을 잡고, $M'$이 $r + 1$과 $\ell'$으로 기약 사다리꼴임을 보인다.

- (가) $1 \le j \le r$이면 $1 \le \ell_j \le n \le n + 1$이고 $M'$의 $(j, \ell_j)$ 성분은 $u_{j,\ell_j} \ne 0$이다. $k \in \{1, \dots, n + 1\}$이고 $k < \ell_j$이면 $k \le n$이므로 $(j, k)$ 성분은 $u_{j,k} = 0$이다. $j = r + 1$이면 $1 \le n + 1$이고, $(r + 1, n + 1)$ 성분은 $e_{r+1}$의 $(r + 1)$번째 값 $1 \ne 0$이며, $k < n + 1$이면 $k \le n$이므로 $(r + 1, k)$ 성분은 $u_{r+1,k}$이고 $r < r + 1$이므로 $U$의 (다)에 의해 $0$이다.
- (나) $1 \le j < r$이면 $U$의 (나)에 의해 $\ell'_j < \ell'_{j+1}$이다. $r \ge 1$이고 $j = r$이면 $\ell'_r = \ell_r \le n < n + 1 = \ell'_{r+1}$이다((L3), (Z6)).
- (다) $r + 1 < j \le m$이면 $k \le n$에서 $(j, k)$ 성분은 $j > r$이므로 $0$이고, $(j, n + 1)$ 성분은 $j \ne r + 1$이므로 $0$이다.
- (라) $1 \le j \le r$이면 $M'$의 $\ell_j$번째 열은 $U$의 $\ell_j$번째 열 $e_j$이다. $j = r + 1$이면 $M'$의 $(n + 1)$번째 열은 $e_{r+1}$이다.

따라서 $E = FE'$으로 두면 $E$는 기본행렬의 곱이고 $EA = M'$은 기약 사다리꼴이다.

어느 경우든 $Q_{n+1}$이 참이다. 귀납법에 의해 모든 자연수 $n$에서 $Q_n$이 참이다. 마지막 문장은 행 동치의 정의이다. $\blacksquare$
:::

## 예시와 반례

:::example[3 × 4 행렬을 열마다 소거하기]
$$A = \begin{pmatrix} 0 & 2 & 4 & 2 \\ 1 & 1 & 1 & 3 \\ 1 & 3 & 5 & 5 \end{pmatrix}$$
를 증명의 순서대로 소거합니다. 각 단계의 행 연산은 [[elementary-matrix|기본행렬]]의 (2)로 계산합니다. 곱하는 수가 $0$인 행 더하기 $R_{k,j}(0)$이나 $D_k(1)$은 $I_3$이므로 적지 않습니다.

첫째 열 $(0, 1, 1)$은 $r = 0$이고 둘째 값이 $0$이 아니므로 $P_{1,2}$로 첫째와 둘째 행을 맞바꾸고, $R_{3,1}(-1)$로 셋째 행에서 첫째 행을 뺍니다.
$$\begin{pmatrix} 1 & 1 & 1 & 3 \\ 0 & 2 & 4 & 2 \\ 1 & 3 & 5 & 5 \end{pmatrix} \to \begin{pmatrix} 1 & 1 & 1 & 3 \\ 0 & 2 & 4 & 2 \\ 0 & 2 & 4 & 2 \end{pmatrix}$$
둘째 열은 이제 $(1, 2, 2)$이고 $r = 1$이며 둘째 값 $2$가 $0$이 아닙니다. $D_2(2^{-1})$로 둘째 행을 $(0, 1, 2, 1)$로 만들고($2^{-1} \cdot 4 = (2^{-1} \cdot 2) \cdot 2 = 2$), $R_{1,2}(-1)$로 첫째 행에서 둘째 행을 빼고, $R_{3,2}(-2)$로 셋째 행에서 둘째 행의 $2$배를 뺍니다.
$$U = \begin{pmatrix} 1 & 0 & -1 & 2 \\ 0 & 1 & 2 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$
셋째 열 $(-1, 2, 0)$과 넷째 열 $(2, 1, 0)$은 $r = 2$보다 아래 값, 곧 셋째 값이 $0$이므로 경우 1이고 손대지 않습니다. $U$는 피벗이 $2$개($\ell_1 = 1$, $\ell_2 = 2$)인 기약 사다리꼴이고,
$$E = R_{3,2}(-2)\, R_{1,2}(-1)\, D_2(2^{-1})\, R_{3,1}(-1)\, P_{1,2}$$
로 두면 결합법칙에 의해 $EA = U$입니다. 처음 한 연산 $P_{1,2}$가 가장 오른쪽에 놓입니다.
:::

:::counterexample[피벗 위를 지우지 않은 사다리꼴]
위 예시에서 피벗 아래만 지우고 피벗 위를 지우지 않으면, 둘째 열을 다룰 때 $R_{1,2}(-1)$을 하지 않게 되어
$$V = \begin{pmatrix} 1 & 1 & 1 & 3 \\ 0 & 1 & 2 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$
를 얻습니다. $V$는 $r = 2$, $\ell_1 = 1$, $\ell_2 = 2$로 사다리꼴이지만, 둘째 피벗 열 $(1, 1, 0)$이 $e_2 = (0, 1, 0)$이 아니므로 [[echelon-form|사다리꼴]] 항목의 (라)를 만족하지 않아 기약 사다리꼴이 아닙니다. 이 항목의 (1)이 $(r + 1)$번째가 아닌 모든 자리의 값을 지우는 까닭이 이것입니다.
:::

## 확인 질문

:::check[$m = 2$, $r = 1$, $d = (3, 0)$에 이 항목의 (1)을 쓸 수 있는가?]
쓸 수 없습니다. (1)은 $r < i \le m$, 곧 $i = 2$에서 $d$의 값이 $0$이 아니어야 하는데 $d$의 둘째 값은 $0$입니다. 실제로 $Fe_1 = e_1$이면 $T_F$의 선형성에 의해 $Fd = F(3e_1) = 3e_1 = (3, 0)$이므로 $Fd = e_2$일 수 없습니다. 이런 열은 (2)의 증명에서 경우 1, 곧 자유 열이 됩니다.
:::

:::check[$A = \begin{pmatrix} 0 & 2 & 6 \end{pmatrix}$과 행 동치인 기약 사다리꼴을 하나 구하라.]
$D_1(2^{-1})A = \begin{pmatrix} 0 & 1 & 3 \end{pmatrix}$입니다. [[elementary-matrix|기본행렬]]의 (2)에 의해 유일한 행에 $2^{-1}$을 곱하면 $(2^{-1} \cdot 0,\ 2^{-1} \cdot 2,\ 2^{-1} \cdot 6) = (0, 1, 3)$입니다($2^{-1} \cdot 6 = (2^{-1} \cdot 2) \cdot 3 = 3$). 이 행렬은 $r = 1$, $\ell_1 = 2$로 [[echelon-form|기약 사다리꼴]]입니다. $(1, 2)$ 성분이 $1 \ne 0$이고 그 앞의 $(1, 1)$ 성분이 $0$이며, $m = 1$이므로 (다)는 저절로 성립하고, 둘째 열은 $1$에서의 값이 $1$인 $\mathbb{R}^1$의 원소, 곧 $e_1$입니다. $D_1(2^{-1})$은 기본행렬이므로 [[row-equivalence|행 동치]]의 (1)에 의해 기본행렬의 곱입니다.
:::
