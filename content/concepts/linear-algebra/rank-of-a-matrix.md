---
title: 행렬의 계수
title_en: Rank of a Matrix
aliases: [열공간, 행렬의 랭크, 열 계수, rank of a matrix, column space, Col A]
kind: definition
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: m × n 행렬 A 의 열공간은 열들의 생성이고 Ran T_A 와 같으며, 그 차원이 A 의 계수 rank A 이다. rank A 는 m 과 n 이하이고, n 인 것은 열이 일차독립일 때, m 인 것은 열이 ℝᵐ 을 생성할 때, 0 인 것은 영행렬일 때이며, 곱의 계수는 두 인수의 계수를 넘지 않는다.
requires: [vector-space, vector-space-basic-properties, real-function-space, finite-sum-of-vectors, linear-combination-and-span, linear-independence, subspace, linear-map, kernel-and-range, injective-surjective-bijective, sequences-in-a-subspace, dimension, dimension-of-subspace, rank-and-nullity, rank-nullity-theorem, one-sided-inverse-of-square-matrix, matrix, matrix-vector-product, matrix-product, invertible-matrix, well-ordering-principle, prime-number]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "2장 7절 Fundamental subspaces of a matrix. Rank., 첫머리와 Definition, p.59–60; 같은 절 연습문제 7.1, 7.4, 7.5, p.67–68"
    checked: original
    note: "출처는 m × n 행렬 A 를 Fⁿ 에서 Fᵐ 로의 사상으로 보고, 행렬과 벡터의 곱의 '열과 좌표' 규칙에서 Ran A 의 모든 원소가 A 의 열의 일차결합이라서 Ran A 를 열공간(column space, Col A)이라고도 부른다고 적는다(p.60). 계수는 선형변환(행렬)에 대하여 rank A := dim Ran A 로 정의한다(p.60). 이 항목은 열공간을 열들의 생성으로 정의하고 matrix-vector-product (6)으로 Ran T_A 와 같음을 쓰며, rank A 를 rank T_A 로 정한다. 출처는 행렬과 사상을 같은 기호 A 로 쓰고 이 사이트는 T_A 로 구별한다. (6)은 출처의 참·거짓 연습문제 7.1 b(p.67, m × n 영행렬만이 계수 0 인 m × n 행렬인가), (1)의 n × n 인 경우는 7.1 g(n × n 행렬의 계수는 n 이하인가), (5)의 한 방향은 7.1 h(계수가 n 인 n × n 행렬은 가역인가)가 묻는다. (2)는 7.1 e(계수는 일차독립인 열의 최대 개수인가)와 관련된다. (7)은 출처가 연습문제 7.4(p.67–68, dim AV ≤ rank A 와 rank(AB) ≤ rank A)와 7.5(p.68, dim AV ≤ dim V 와 rank(AB) ≤ rank B)로 둔다. (1)–(7)의 증명은 이 사이트의 것이다. 첫째 확인 질문은 출처 2장 연습문제 3.5(p.51, F⁴ 의 벡터 5 개가 일차독립일 수 있는가)와 같은 발상이다. 예시와 반례와 둘째 확인 질문은 새로 만들었다."
status: reviewed
review_note: "2026-11-16 작성자의 자기 검토 뒤 독립 검토 통과(전반 2회, 후반 1회). 출처의 연습문제와 같은 발상임을 메모에 밝히고, 틀린 일반화와 인용 누락을 보완했다. 마지막 수정은 지휘자가 변경분을 확인했다."
added: 2026-11-16
---

:::statement
$m$, $n$이 자연수이고 $A$가 $m \times n$ [[matrix|행렬]]이라 하자. $\mathbf{a}_1, \dots, \mathbf{a}_n$은 $A$의 열을 차례로 늘어놓은 $\mathbb{R}^m$의 벡터의 열이고, $T_A : \mathbb{R}^n \to \mathbb{R}^m$은 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)의 선형사상이다.

$A$의 **열공간**(column space)은 $\mathbb{R}^m$의 부분공간 $\operatorname{Col} A = \operatorname{span}(\mathbf{a}_1, \dots, \mathbf{a}_n)$이다. 행렬과 벡터의 곱의 (6)에 의해 $\operatorname{Col} A = \operatorname{Ran} T_A$이다. [[dimension|차원]]의 (4)에 의해 $\mathbb{R}^n$은 유한차원이므로 [[rank-and-nullity|계수와 퇴화차수]]에 의해 $T_A$의 계수가 정해지고, $A$의 **계수**(rank)를 $\operatorname{rank} A = \operatorname{rank} T_A$로 정한다. 곧 $\operatorname{rank} A$는 열공간 $\operatorname{Col} A$를 [[subspace|(P1)]]의 제한한 연산으로 본 벡터공간의 차원이고, 정수 $r \ge 0$에 대하여 $\operatorname{rank} A = r$인 것은 정확히 벡터공간 $\operatorname{Col} A$에 길이 $r$인 기저가 있을 때이다.

1. $\operatorname{rank} A \le n$이고 $\operatorname{rank} A \le m$이다.
2. $\operatorname{rank} A = n$인 것은 정확히 벡터의 열 $\mathbf{a}_1, \dots, \mathbf{a}_n$이 [[linear-independence|일차독립]]일 때이고, 또 정확히 $T_A$가 [[injective-surjective-bijective|단사]]일 때이다.
3. $\operatorname{rank} A = m$인 것은 정확히 $\mathbf{a}_1, \dots, \mathbf{a}_n$이 $\mathbb{R}^m$을 생성할 때이고, 또 정확히 $T_A : \mathbb{R}^n \to \mathbb{R}^m$이 전사일 때이다.
4. $\operatorname{nullity} T_A + \operatorname{rank} A = n$이다.
5. $m = n$이면, $A$가 [[invertible-matrix|가역]]인 것은 정확히 $\operatorname{rank} A = n$일 때이다.
6. $\operatorname{rank} A = 0$인 것은 정확히 $A$가 영행렬일 때이다.
7. $r$이 자연수이고 $B$가 $n \times r$ 행렬이면 $\operatorname{Col}(AB) \subseteq \operatorname{Col} A$이고, $\operatorname{rank}(AB) \le \operatorname{rank} A$이며 $\operatorname{rank}(AB) \le \operatorname{rank} B$이다.
:::

:::english
Let $m$ and $n$ be natural numbers and let $A$ be an $m \times n$ matrix. Let $\mathbf{a}_1, \dots, \mathbf{a}_n$ be the sequence of vectors in $\mathbb{R}^m$ formed by the columns of $A$ in order, and let $T_A : \mathbb{R}^n \to \mathbb{R}^m$ be the linear map of property (2) of the matrix–vector product.

The **column space** of $A$ is the subspace $\operatorname{Col} A = \operatorname{span}(\mathbf{a}_1, \dots, \mathbf{a}_n)$ of $\mathbb{R}^m$. By property (6) of the matrix–vector product, $\operatorname{Col} A = \operatorname{Ran} T_A$. Since $\mathbb{R}^n$ is finite-dimensional by property (4) of dimension, the rank of $T_A$ is defined, and we define the **rank** of $A$ by $\operatorname{rank} A = \operatorname{rank} T_A$. That is, $\operatorname{rank} A$ is the dimension of the column space $\operatorname{Col} A$ regarded as a vector space under the restricted operations of (P1), and for an integer $r \ge 0$, $\operatorname{rank} A = r$ exactly when the vector space $\operatorname{Col} A$ has a basis of length $r$.

1. $\operatorname{rank} A \le n$ and $\operatorname{rank} A \le m$.
2. $\operatorname{rank} A = n$ exactly when the sequence of vectors $\mathbf{a}_1, \dots, \mathbf{a}_n$ is linearly independent, and also exactly when $T_A$ is injective.
3. $\operatorname{rank} A = m$ exactly when $\mathbf{a}_1, \dots, \mathbf{a}_n$ spans $\mathbb{R}^m$, and also exactly when $T_A : \mathbb{R}^n \to \mathbb{R}^m$ is surjective.
4. $\operatorname{nullity} T_A + \operatorname{rank} A = n$.
5. If $m = n$, then $A$ is invertible exactly when $\operatorname{rank} A = n$.
6. $\operatorname{rank} A = 0$ exactly when $A$ is the zero matrix.
7. If $r$ is a natural number and $B$ is an $n \times r$ matrix, then $\operatorname{Col}(AB) \subseteq \operatorname{Col} A$, and $\operatorname{rank}(AB) \le \operatorname{rank} A$ and $\operatorname{rank}(AB) \le \operatorname{rank} B$.
:::

## 직관

행렬의 계수는 "열들 가운데 정말로 새로운 방향이 몇 개인가"를 셉니다. 요리 재료에 빗대면, 열은 재료이고 열공간은 재료를 섞어 만들 수 있는 모든 맛입니다. 어떤 재료가 다른 재료를 섞어 만들 수 있는 것이라면 그 재료가 없어도 만들 수 있는 맛은 같습니다. 계수는 맛의 공간을 만드는 데 꼭 필요한 재료의 수, 곧 열공간의 기저의 길이입니다. 비유와 다른 점은, 재료를 섞는 것은 실수배와 덧셈이고, 어느 재료를 빼느냐는 정해져 있지 않으며 남는 수만 정해진다는 것입니다.

(1)–(4)는 [[rank-and-nullity|계수와 퇴화차수]]와 [[rank-nullity-theorem|차원 정리]]를 $T_A$에 쓴 것이고, 열공간이 $\operatorname{Ran} T_A$라는 것을 거쳐 열에 관한 말로 바뀝니다. (7)은 $AB$로 옮긴 벡터가 먼저 $B$로, 다음에 $A$로 옮겨진다는 것에서 나옵니다. 두 번 옮기는 동안 상의 차원이 늘어날 수는 없습니다.

## 성질의 증명

:::proof
[[dimension|차원]]의 (4)에 의해 $\dim \mathbb{R}^n = n$, $\dim \mathbb{R}^m = m$이다. $\operatorname{Col} A$와 $\operatorname{Ran} T_A$는 같은 집합이므로 같은 부분공간이고, (P1)의 제한한 연산도 같아 같은 벡터공간이다. 따라서 정의 다음의 문장은 [[rank-and-nullity|계수와 퇴화차수]]의 정의 다음의 문장을 $T_A$에 쓴 것이다. 정수의 계산과 (Z6), (Z7)은 [[well-ordering-principle|정렬 원리]]의 진술에 있는 것이다.

**(1)** [[rank-and-nullity|계수와 퇴화차수]]의 (2)에 의해 $\operatorname{rank} T_A \le \dim \mathbb{R}^n = n$이고, (3)에 의해 $\operatorname{rank} T_A \le \dim \mathbb{R}^m = m$이다.

**(2)** [[dimension-of-subspace|부분공간의 차원]]의 (4)를 $\mathbb{R}^m$의 벡터의 열 $\mathbf{a}$에 쓰면, 부분공간 $\operatorname{span}(\mathbf{a}_1, \dots, \mathbf{a}_n) = \operatorname{Col} A$의 차원이 $n$인 것은 정확히 $\mathbf{a}$가 일차독립일 때이다. 또 [[rank-nullity-theorem|차원 정리]]에 의해 $\operatorname{nullity} T_A + \operatorname{rank} A = n$이므로, (Z7)에 의해 $\operatorname{rank} A = n$인 것은 정확히 $\operatorname{nullity} T_A = 0$일 때이고, 계수와 퇴화차수의 (4)에 의해 이것은 정확히 $T_A$가 단사일 때이다.

**(3)** 계수와 퇴화차수의 (5)에 의해 $\operatorname{rank} A = m$인 것은 정확히 $T_A : \mathbb{R}^n \to \mathbb{R}^m$이 전사일 때이다. [[kernel-and-range|핵과 상]]의 (3)에 의해 이것은 정확히 $\operatorname{Ran} T_A = \mathbb{R}^m$, 곧 $\operatorname{span}(\mathbf{a}_1, \dots, \mathbf{a}_n) = \mathbb{R}^m$일 때이다.

**(4)** 차원 정리를 $T_A$에 쓴 것이다.

**(5)** $m = n$이면 [[one-sided-inverse-of-square-matrix|정사각행렬의 한쪽 역]]의 (가)와 (라)가 같으므로 $A$가 가역인 것은 정확히 $T_A$가 단사일 때이고, 이 항목의 (2)에 의해 이것은 정확히 $\operatorname{rank} A = n$일 때이다.

**(6)** $O$를 $m \times n$ 영행렬이라 하자. 그 성분은 모두 $0$이므로 $O$의 각 열은 모든 값이 $0$인 $\mathbb{R}^m$의 원소, 곧 영벡터 $0_{\mathbb{R}^m}$이다([[real-function-space|함수의 공간]]의 진술).

$\operatorname{rank} A = 0$이라 하자. 벡터공간 $\operatorname{Col} A$는 유한차원이고(계수와 퇴화차수의 (1)) 차원이 $0$이며 (P1)에 의해 영벡터가 $0_{\mathbb{R}^m}$이므로, 차원의 (3)에 의해 $\operatorname{Col} A = \{0_{\mathbb{R}^m}\}$이다. [[linear-combination-and-span|(N2)]]에 의해 모든 $k$에서 $\mathbf{a}_k \in \operatorname{Col} A$이므로 $\mathbf{a}_k = 0_{\mathbb{R}^m}$이고, 이는 $O$의 $k$번째 열과 같다. [[matrix|행렬]]의 (3)에 의해 $A = O$이다.

거꾸로 $A = O$라 하자. 모든 $k$에서 $\mathbf{a}_k = 0_{\mathbb{R}^m}$이다. 길이 $n$인 실수의 열 $\alpha$에 대하여 일차결합 $\alpha_1 \mathbf{a}_1 + \cdots + \alpha_n \mathbf{a}_n$의 각 항 $\alpha_k \mathbf{a}_k = \alpha_k 0_{\mathbb{R}^m}$은 [[vector-space-basic-properties|(B4)]]에 의해 영벡터이므로, [[finite-sum-of-vectors|(H5)]]에 의해 이 일차결합은 영벡터이다. 따라서 $\operatorname{Col} A \subseteq \{0_{\mathbb{R}^m}\}$이고, $\operatorname{Col} A$는 부분공간이므로 [[subspace|(S1)]]에 의해 $\operatorname{Col} A = \{0_{\mathbb{R}^m}\}$이다. 차원의 (3)에 의해 $\operatorname{rank} A = 0$이다.

**(7)** [[matrix-product|행렬의 곱]]의 (1)에 의해 모든 $z \in \mathbb{R}^r$에서 $(AB)z = A(Bz)$이다.

첫째 부등식. $y \in \operatorname{Ran} T_{AB}$이면 $y = (AB)z = A(Bz)$인 $z$가 있으므로 $y \in \operatorname{Ran} T_A$이다. 곧 $\operatorname{Col}(AB) = \operatorname{Ran} T_{AB} \subseteq \operatorname{Ran} T_A = \operatorname{Col} A$이고, 둘 다 $\mathbb{R}^m$의 부분공간이며([[kernel-and-range|핵과 상]]의 (1)) $\operatorname{Ran} T_A$는 유한차원이다(계수와 퇴화차수의 (1)). [[dimension-of-subspace|부분공간의 차원]]의 (5)를 $\mathbb{R}^m$의 두 부분공간 $\operatorname{Ran} T_{AB} \subseteq \operatorname{Ran} T_A$에 쓰면 $\operatorname{rank}(AB) \le \operatorname{rank} A$이다.

둘째 부등식. $s = \operatorname{rank} B$라 하면 벡터공간 $\operatorname{Ran} T_B$에 길이 $s$인 기저 $y_1, \dots, y_s$가 있다(계수와 퇴화차수의 정의 다음의 문장). [[sequences-in-a-subspace|부분공간 안의 열]]의 "두 가지로 보는 열"과 (J4)에 의해 $y$는 모든 항이 $\operatorname{Ran} T_B$에 속하는 $\mathbb{R}^n$의 벡터의 열이고 $\operatorname{span}(y_1, \dots, y_s) = \operatorname{Ran} T_B$이다. 핵과 상의 (2)를 $T_A$와 이 열에 쓰면
$$\{Ax : x \in \operatorname{Ran} T_B\} = \operatorname{span}(Ay_1, \dots, Ay_s)$$
이다. 왼쪽 집합은 $\{A(Bz) : z \in \mathbb{R}^r\} = \{(AB)z : z \in \mathbb{R}^r\} = \operatorname{Ran} T_{AB}$이다. 따라서 $\operatorname{Ran} T_{AB} = \operatorname{span}(Ay_1, \dots, Ay_s)$이고, 부분공간의 차원의 (4)에 의해 그 차원은 $s$ 이하이다. 곧 $\operatorname{rank}(AB) \le \operatorname{rank} B$이다.
:::

## 예시와 반례

:::example[열이 모두 한 방향인 행렬]
$$A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \end{pmatrix}$$
의 열은 $\mathbf{a}_1 = (1, 2)$, $\mathbf{a}_2 = (2, 4) = 2\mathbf{a}_1$, $\mathbf{a}_3 = (3, 6) = 3\mathbf{a}_1$입니다. [[linear-combination-and-span|(N1), (N2)]]에 의해 $\operatorname{Col} A$는 $\mathbf{a}_1$을 원소로 갖는 부분공간이므로 (N3)에 의해 $\operatorname{span}(\mathbf{a}_1) \subseteq \operatorname{Col} A$입니다. 거꾸로 세 열은 모두 (N4)에 의해 부분공간 $\operatorname{span}(\mathbf{a}_1)$의 원소이므로 (N3)에 의해 $\operatorname{Col} A \subseteq \operatorname{span}(\mathbf{a}_1)$입니다. 따라서 $\operatorname{Col} A = \operatorname{span}(\mathbf{a}_1)$이고, $\mathbf{a}_1 \ne (0, 0)$이므로 [[linear-independence|(I4)]]와 [[dimension-of-subspace|부분공간의 차원]]의 (4)에 의해 $\operatorname{rank} A = 1$입니다. 이 항목의 (4)에 의해 $\operatorname{nullity} T_A = 3 - 1 = 2$이고, $1 \ne 3$이므로 이 항목의 (2)에 의해 세 열은 일차독립이 아닙니다.
:::

:::counterexample[곱의 계수가 두 계수보다 작을 수 있다]
이 항목의 (7)의 부등식에서 등호가 성립한다고 생각하기 쉽지만 그렇지 않은 예가 있습니다. $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$, $B = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$이라 합시다. $AB$의 열은 $A\mathbf{b}_1 = 0(1, 0) + 0(0, 0) = (0, 0)$과 $A\mathbf{b}_2 = 0(1, 0) + 1(0, 0) = (0, 0)$입니다. $AB$의 두 열은 모두 영벡터이고 $2 \times 2$ 영행렬의 열도 모두 영벡터이므로, [[matrix|행렬]]의 (3)에 의해 $AB$는 영행렬이고, 이 항목의 (6)에 의해 $\operatorname{rank}(AB) = 0$입니다. 한편 $A$와 $B$는 $0$이 아닌 성분이 있어 영행렬이 아니므로 이 항목의 (6)에 의해 계수가 $0$이 아닙니다. 계수는 $0$ 이상의 정수이므로 [[well-ordering-principle|정렬 원리]]의 진술에서 정한 $\ge$의 뜻에 의해 $0$보다 크고, [[prime-number|(Z1)]]에 의해 $\operatorname{rank} A$와 $\operatorname{rank} B$는 $1$ 이상입니다. 이 예에서 $\operatorname{rank}(AB)$는 두 계수 가운데 작은 쪽보다도 작습니다.
:::

## 확인 질문

:::check[$3 \times 5$ 행렬의 열(ℝ³의 원소 다섯 개로 된 벡터의 열)은 일차독립일 수 있는가?]
없습니다. 행렬을 $A$라 하면 이 항목의 (1)에 의해 $\operatorname{rank} A \le 3$이고 $3 < 5$이므로 [[well-ordering-principle|(Z6)]]에 의해 $\operatorname{rank} A < 5$, 곧 (Z5)에 의해 $\operatorname{rank} A \ne 5$입니다. 이 항목의 (2)에 의해 열은 일차독립이 아닙니다.
:::

:::check[$n \times n$ 행렬 $A$의 열이 $\mathbb{R}^n$을 생성하면 $A$는 가역인가?]
그렇습니다. 이 항목의 (3)에서 $m = n$이므로 $\operatorname{rank} A = n$이고, 이 항목의 (5)에 의해 $A$는 가역입니다.
:::
