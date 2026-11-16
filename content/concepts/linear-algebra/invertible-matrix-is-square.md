---
title: 가역행렬은 정사각행렬이다
title_en: An Invertible Matrix Is Square
aliases: [가역행렬은 정사각, 한쪽 역과 행렬의 크기, invertible matrix is square, left invertible matrix, right invertible matrix]
kind: theorem
field: linear-algebra
msc: ["15A09"]
level: undergrad
summary: m × n 행렬이 왼쪽 가역이면 n ≤ m, 오른쪽 가역이면 m ≤ n 이다. 따라서 가역행렬은 정사각행렬이다.
requires: [vector-space, real-number-arithmetic, injective-surjective-bijective, isomorphism, linear-map, kernel-and-range, injective-iff-trivial-kernel, dimension, rank-and-nullity, rank-nullity-theorem, matrix, matrix-vector-product, matrix-product, invertible-matrix, transpose, real-function-space, well-ordering-principle]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "1장 6.2절, Remark 6.2, p.26; 2장 3.2절, Corollary 3.7, p.50"
    checked: original
    note: "출처 1장의 Remark 6.2(p.26)는 가역행렬이 정사각(n × n)이어야 한다고 적고 여백에 '뒤에서 증명한다'고 밝힌다. 2장의 Corollary 3.7(p.50)이 그것으로, 출처는 Proposition 3.6(가역인 것은 정확히 사다리꼴의 모든 행과 모든 열에 피벗이 있을 때)에서 곧바로 나온다고 한다. 이 항목은 피벗을 쓰지 않고 차원 정리와 계수로 증명한다. 왼쪽 가역이면 n ≤ m, 오른쪽 가역이면 m ≤ n 이라는 (1), (2)는 출처에 이 꼴로 진술되어 있지 않다(1장 6절, 2장 3–7절의 본문과 연습문제를 읽은 범위). 출처 1장 연습문제 6.2(1 × 2 행 (1, 1) 이 왼쪽 가역이 아님)와 6.4(3 × 1 열 (1, 2, 3)ᵀ 가 오른쪽 가역인지)는 (1), (2)의 특별한 경우를 묻는다. 증명에서 BA = I_n 이고 Ax = 0 이면 x = B(Ax) = 0 이라는 계산과 AC = I_m 이면 b = A(Cb) 라는 계산은 출처 2장 Proposition 3.8 의 증명(p.50–51)의 계산과 같다. 예시는 출처 1장 p.26 의 예 4(행 (1, 1) 은 오른쪽 가역이지만 왼쪽 가역이 아니다)와 같은 발상이다(정사각이 아닌 행렬의 한쪽 역). 반례와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$m$, $n$이 자연수이고 $A$가 $m \times n$ [[matrix|행렬]]이라 하자. 왼쪽 가역, 오른쪽 가역, 가역은 [[invertible-matrix|가역행렬과 역행렬]]에서 정한 것이다.

1. $A$가 왼쪽 가역이면 $n \le m$이다.
2. $A$가 오른쪽 가역이면 $m \le n$이다.
3. $A$가 가역이면 $m = n$이다. 곧 가역행렬은 정사각행렬이다.
:::

:::english
Let $m$ and $n$ be natural numbers and let $A$ be an $m \times n$ matrix. Left invertibility, right invertibility, and invertibility are as defined for invertible matrices.

1. If $A$ is left invertible, then $n \le m$.
2. If $A$ is right invertible, then $m \le n$.
3. If $A$ is invertible, then $m = n$. That is, an invertible matrix is square.
:::

## 직관

$m \times n$ 행렬 $A$는 $\mathbb{R}^n$의 벡터를 $\mathbb{R}^m$의 벡터로 옮기는 사상 $T_A$를 정합니다. 왼쪽 역 $B$가 있으면 $A$로 옮긴 결과에서 $B$로 원래 벡터를 되찾을 수 있으므로, $T_A$는 서로 다른 벡터를 같은 곳으로 보내지 않습니다(단사). 여행 가방에 짐을 넣는 데 빗대면, 짐을 하나도 겹치지 않게 넣으려면 가방이 짐보다 작을 수 없습니다. 여기서 "크기"는 차원이고, 단사인 선형사상은 정의역의 차원만큼의 차원을 상에 그대로 옮깁니다.

오른쪽 역 $C$가 있으면 $\mathbb{R}^m$의 어떤 벡터 $b$도 $Cb$의 상이므로 $T_A$는 전사이고, 이번에는 상의 차원 $m$이 정의역의 차원 $n$을 넘을 수 없습니다. 두 쪽을 모두 가지면 두 부등식이 함께 성립해 $m = n$입니다. 비유와 다른 점은, 가방과 짐의 크기는 부피 같은 양이지만 여기서 비교하는 것은 차원이라는 정수이고, 그 비교를 [[rank-nullity-theorem|차원 정리]]가 해 준다는 것입니다.

## 증명

:::idea
왼쪽 역이 있으면 $T_A$가 단사이므로 계수가 $n$이고, 계수는 $\dim \mathbb{R}^m = m$을 넘지 않는다. 오른쪽 역이 있으면 $T_A$가 전사이므로 계수가 $m$이고, 계수는 $\dim \mathbb{R}^n = n$을 넘지 않는다.
:::

:::hint
$BA = I_n$이고 $Ax$가 영벡터이면 $x = I_n x = (BA)x$를 [[matrix-product|행렬의 곱]]의 (1)로 바꿔 보세요.
:::

:::hint
단사인 것에서 계수를 얻을 때는 [[rank-and-nullity|계수와 퇴화차수]]의 (4)와 [[rank-nullity-theorem|차원 정리]]를 함께 씁니다.
:::

:::proof
[[dimension|차원]]의 (4)에 의해 $\mathbb{R}^n$과 $\mathbb{R}^m$은 유한차원이고 $\dim \mathbb{R}^n = n$, $\dim \mathbb{R}^m = m$이다. [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)에 의해 $T_A : \mathbb{R}^n \to \mathbb{R}^m$은 선형사상이다. 정수의 계산과 (Z7), (L2)는 [[well-ordering-principle|정렬 원리]]의 진술에 있는 것이다.

**(1)** $BA = I_n$인 $n \times m$ 행렬 $B$가 있다고 하자. $x \in \mathbb{R}^n$이고 $Ax = 0_{\mathbb{R}^m}$이라 하자. 행렬과 벡터의 곱의 (3)에 의해 $x = I_n x$이고, [[matrix-product|행렬의 곱]]의 (1)에 의해 $(BA)x = B(Ax)$이다. $T_B$는 선형사상이므로 [[linear-map|(T1)]]에 의해 $B0_{\mathbb{R}^m} = 0_{\mathbb{R}^n}$이다. 따라서
$$x = I_n x = (BA)x = B(Ax) = B0_{\mathbb{R}^m} = 0_{\mathbb{R}^n}$$
이다. 또 (T1)에 의해 $0_{\mathbb{R}^n} \in \operatorname{Ker} T_A$이므로 $\operatorname{Ker} T_A = \{0_{\mathbb{R}^n}\}$이고, [[injective-iff-trivial-kernel|단사인 선형사상과 핵]]의 (1)에 의해 $T_A$는 [[injective-surjective-bijective|단사]]이다. [[rank-and-nullity|계수와 퇴화차수]]의 (4)에 의해 $\operatorname{nullity} T_A = 0$이고, [[rank-nullity-theorem|차원 정리]]에 의해 $\operatorname{rank} T_A = 0 + \operatorname{rank} T_A = n$이다. 계수와 퇴화차수의 (3)에 의해 $\operatorname{rank} T_A \le \dim \mathbb{R}^m = m$이므로 $n \le m$이다.

**(2)** $AC = I_m$인 $n \times m$ 행렬 $C$가 있다고 하자. $b \in \mathbb{R}^m$이면 $Cb \in \mathbb{R}^n$이고, 행렬과 벡터의 곱의 (3)과 행렬의 곱의 (1)에 의해
$$b = I_m b = (AC)b = A(Cb)$$
이다. 따라서 모든 $b \in \mathbb{R}^m$에 대하여 $T_A$의 값이 $b$인 점 $Cb$가 있으므로 $T_A : \mathbb{R}^n \to \mathbb{R}^m$은 전사이다. 계수와 퇴화차수의 (5)에 의해 $\operatorname{rank} T_A = \dim \mathbb{R}^m = m$이고, (2)에 의해 $\operatorname{rank} T_A \le \dim \mathbb{R}^n = n$이므로 $m \le n$이다.

**(3)** $A$가 가역이면 정의에 의해 왼쪽 가역이고 오른쪽 가역이므로, 이 항목의 (1)과 (2)에 의해 $n \le m$이고 $m \le n$이다. (L2)에 의해 $m = n$이다.
:::

## 예시와 반례

:::example[오른쪽 역만 있는 2 × 3 행렬]
$$A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}, \qquad C = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix}$$
이라 합시다. [[matrix-product|행렬의 곱]]의 정의에 의해 $AC$의 $k$번째 열은 $A\mathbf{c}_k$입니다. [[matrix-vector-product|행렬과 벡터의 곱]]의 정의로 계산하면 $A\mathbf{c}_1 = 1(1, 0) + 0(0, 1) + 0(0, 0) = (1, 0)$이고 $A\mathbf{c}_2 = 0(1, 0) + 1(0, 1) + 0(0, 0) = (0, 1)$입니다. 이것은 $I_2$의 두 열이므로 [[matrix|행렬]]의 (3)에 의해 $AC = I_2$이고, $A$는 오른쪽 가역입니다. 이는 이 항목의 (2)의 $2 \le 3$과 맞습니다. 그러나 $2 < 3$이므로 [[well-ordering-principle|(L1)]]에 의해 $3 \le 2$가 아니고, 이 항목의 (1)에 의해 $A$는 왼쪽 가역이 아닙니다. 곧 $BA = I_3$인 $3 \times 2$ 행렬 $B$는 없습니다.
:::

:::counterexample[정사각이어도 가역이 아닐 수 있다]
이 항목의 (3)의 거꾸로는 성립하지 않습니다. $2 \times 2$ 행렬 $D = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$와 $y = (1, -1)$에 대하여 행렬과 벡터의 곱의 정의로 $Dy = 1(1, 1) + (-1)(1, 1) = (1 - 1, 1 - 1) = (0, 0)$입니다([[real-number-arithmetic|(K4), (K9)]]와 (K8)의 (ii)). $y \ne (0, 0)$이고 [[linear-map|(T1)]]에 의해 $T_D$의 영벡터에서의 값도 $(0, 0)$이므로 $T_D$는 단사가 아닙니다. $D$가 가역이라면 [[invertible-matrix|가역행렬과 역행렬]]의 (2)에 의해 $T_D$가 [[isomorphism|동형사상]], 곧 단사이어야 하므로 $D$는 가역이 아닙니다. 정사각이라는 것만으로는 가역이 되지 않습니다.
:::

## 확인 질문

:::check[$4 \times 2$ 행렬은 오른쪽 가역일 수 있는가?]
없습니다. $m = 4$, $n = 2$이고 $2 < 4$이므로 [[well-ordering-principle|(L1)]]에 의해 $4 \le 2$가 아닙니다. 따라서 이 항목의 (2)에 의해 $4 \times 2$ 행렬은 오른쪽 가역이 아닙니다.
:::

:::check[$m \times n$ 행렬 $A$가 왼쪽 역 $B$를 가지면 $A^T$는 무엇을 가지는가? 이것과 이 항목의 (2)로 다시 얻는 부등식은 무엇인가?]
$A^T$는 오른쪽 역 $B^T$를 가집니다. [[transpose|전치행렬]]의 (4)와 (3)에 의해 $A^T B^T = (BA)^T = I_n^T = I_n$이고, $A^T$는 $n \times m$ 행렬, $B^T$는 $m \times n$ 행렬입니다. 이 항목의 (2)를 $n \times m$ 행렬 $A^T$에 쓰면 $n \le m$이 나오고, 이것은 이 항목의 (1)의 결론과 같습니다.
:::
