---
title: 서로 다른 고윳값의 고유벡터
title_en: Eigenvectors of Distinct Eigenvalues
aliases: [서로 다른 고윳값의 고유벡터는 일차독립, 고유공간의 독립, 고윳값의 개수, eigenvectors of distinct eigenvalues are linearly independent, distinct eigenvalues]
kind: theorem
field: linear-algebra
msc: ["15A18"]
level: undergrad
summary: 서로 다른 고윳값의 고유공간에서 하나씩 뽑은 벡터들의 합이 영벡터이면 모두 영벡터이고, 따라서 서로 다른 고윳값에 속하는 고유벡터들은 일차독립이다. 유한차원에서 서로 다른 고윳값의 열의 길이는 차원을 넘지 않고, 길이가 차원과 같으면 대각화 가능이다.
requires: [real-number-arithmetic, vector-space, vector-space-basic-properties, real-function-space, finite-sum-of-vectors, standard-basis, subspace, linear-independence, dimension, independent-and-spanning-bounds, linear-map, mathematical-induction, well-ordering-principle, prime-number, matrix, matrix-vector-product, eigenvalue-and-eigenvector, change-of-basis-and-similarity, diagonalizable, diagonalizable-iff-eigenbasis]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 4장 2.3절 The case of n distinct eigenvalues, Theorem 2.2와 그 증명, pp.108–109; Corollary 2.3과 그 증명, p.109; 2.4절 Remark 2.4, p.109
    checked: original
    note: "출처의 Theorem 2.2(p.108)는 서로 다른 고윳값 λ_1, …, λ_r 에 대응하는 고유벡터 v_1, …, v_r 이 일차독립이라고 진술하고, r 에 대한 귀납으로 증명한다. c_1v_1 + ⋯ + c_rv_r = 0 에 A − λ_rI 를 적용해 c_k(λ_k − λ_r) 를 계수로 하는 r − 1 개의 합을 얻고 귀납 가정과 λ_k ≠ λ_r 로 c_k = 0 을 얻은 뒤 c_r = 0 을 끌어낸다. 이 항목의 (1)은 출처 Remark 2.4(p.109)가 말하는 '고유공간들의 독립'으로, 같은 귀납을 고유공간의 원소들에 대해 한다. 시작점은 r = 0(빈 열)으로 두고, 귀납 명제가 길이 r 인 모든 서로 다른 실수의 열과 모든 벡터의 열을 감싸도록 적었다. (2)는 (1)에서 따라 나온다. 출처의 Corollary 2.3(p.109)은 dim V 개의 서로 다른 고윳값이 있으면 대각화 가능이라 하고, 증명에서 '고윳값마다 고유벡터를 하나씩 고른다(just pick one)'고 적는다. 이 항목은 그 고르기를 (3)의 귀납으로 정당화하고, 출처의 '정확히 n 개의 서로 다른 고윳값'을 집합의 원소 개수가 아니라 서로 다른 고윳값의 열의 길이로 말한다. 서로 다른 고윳값의 열의 길이가 차원 이하라는 (4)는 출처에 진술로 없다(4장을 검색한 범위). 출처 연습문제 1.1 a(p.104)가 가장 가깝다. 행렬판은 이 사이트가 덧붙였다. 예시의 위삼각행렬에 (5)를 쓰는 것은 출처 연습문제 2.6(p.114, 위삼각행렬이 계산 없이 대각화 가능한지 묻는다)과 같은 발상이며, 행렬은 새로 골랐다. 반례와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$V$가 [[vector-space|벡터공간]]이고 $T : V \to V$가 [[linear-map|선형사상]]이며 $r \ge 0$이 정수라 하자. 길이 $r$인 실수의 열 $\lambda_1, \dots, \lambda_r$이 **서로 다르다**는 것은 정확히 $j \ne k$인 모든 $j, k \in \{1, \dots, r\}$에서 $\lambda_j \ne \lambda_k$일 때이다. 고윳값, 고유벡터, 고유공간 $\operatorname{Ker}(T - \lambda i_V)$는 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]에서 정한 것이다.

1. (고유공간들의 독립) $\lambda_1, \dots, \lambda_r$이 서로 다른 실수의 열이고 $u_1, \dots, u_r$이 길이 $r$인 $V$의 열이며, 모든 $k$에서 $u_k \in \operatorname{Ker}(T - \lambda_k i_V)$이고 $u_1 + \cdots + u_r = 0_V$이면, 모든 $k$에서 $u_k = 0_V$이다.
2. $\lambda_1, \dots, \lambda_r$이 서로 다른 실수의 열이고 모든 $k$에서 $v_k$가 $\lambda_k$에 속하는 $T$의 고유벡터이면, 열 $v_1, \dots, v_r$은 [[linear-independence|일차독립]]이다.
3. 실수의 열 $\lambda_1, \dots, \lambda_r$의 모든 항이 $T$의 고윳값이면, 모든 $k$에서 $v_k$가 $\lambda_k$에 속하는 $T$의 고유벡터인 길이 $r$인 $V$의 열 $v_1, \dots, v_r$이 있다. (여기에는 서로 다르다는 가정이 필요 없다.)
4. $V$가 [[dimension|유한차원]]이고 $\dim V = n$이라 하자. 모든 항이 $T$의 고윳값이고 서로 다른 실수의 열 $\lambda_1, \dots, \lambda_r$이 있으면 $r \le n$이다.
5. $V$가 유한차원이고 $\dim V = n \ge 1$이며, 모든 항이 $T$의 고윳값이고 서로 다른 길이 $n$인 실수의 열이 있으면 $T$는 [[diagonalizable|대각화 가능]]이다. 특히 $n$이 자연수이고 $n \times n$ 행렬 $A$에 대하여 모든 항이 $A$의 고윳값이고 서로 다른 길이 $n$인 실수의 열이 있으면 $A$는 대각화 가능이다.
:::

:::english
Let $V$ be a vector space, $T : V \to V$ a linear map and $r \ge 0$ an integer. A sequence of real numbers $\lambda_1, \dots, \lambda_r$ of length $r$ is **distinct** exactly when $\lambda_j \ne \lambda_k$ for all $j, k \in \{1, \dots, r\}$ with $j \ne k$. Eigenvalues, eigenvectors and eigenspaces $\operatorname{Ker}(T - \lambda i_V)$ are as defined in the entry on eigenvalues and eigenvectors.

1. (Independence of eigenspaces) If $\lambda_1, \dots, \lambda_r$ is a distinct sequence of real numbers, $u_1, \dots, u_r$ a sequence in $V$ of length $r$ with $u_k \in \operatorname{Ker}(T - \lambda_k i_V)$ for every $k$, and $u_1 + \cdots + u_r = 0_V$, then $u_k = 0_V$ for every $k$.
2. If $\lambda_1, \dots, \lambda_r$ is a distinct sequence of real numbers and, for every $k$, $v_k$ is an eigenvector of $T$ corresponding to $\lambda_k$, then the sequence $v_1, \dots, v_r$ is linearly independent.
3. If every term of a sequence of real numbers $\lambda_1, \dots, \lambda_r$ is an eigenvalue of $T$, then there is a sequence $v_1, \dots, v_r$ in $V$ of length $r$ such that, for every $k$, $v_k$ is an eigenvector of $T$ corresponding to $\lambda_k$. (Distinctness is not needed here.)
4. Let $V$ be finite-dimensional with $\dim V = n$. If there is a distinct sequence of real numbers $\lambda_1, \dots, \lambda_r$ every term of which is an eigenvalue of $T$, then $r \le n$.
5. If $V$ is finite-dimensional with $\dim V = n \ge 1$ and there is a distinct sequence of real numbers of length $n$ every term of which is an eigenvalue of $T$, then $T$ is diagonalizable. In particular, if $n$ is a natural number and, for an $n \times n$ matrix $A$, there is a distinct sequence of real numbers of length $n$ every term of which is an eigenvalue of $A$, then $A$ is diagonalizable.
:::

## 직관

서로 다른 고윳값의 고유벡터는 "서로 다른 배율로 늘어나는 방향"입니다. 여러 사람이 서로 다른 속도로 같은 출발점에서 걸어 나가는 장면을 떠올리면, 처음 위치들이 서로를 상쇄해 출발점으로 돌아오는 조합이 있더라도 한 걸음 지나면 각자의 속도가 달라 그 상쇄가 깨집니다. 증명은 이 생각을 그대로 씁니다. 합이 $0_V$인 등식에 $T - \lambda_{r+1}i_V$를 씌우면 마지막 항은 사라지고 나머지 항은 $\lambda_k - \lambda_{r+1}$배가 되므로, 항이 하나 적은 같은 꼴의 등식이 생깁니다. 서로 다르다는 가정은 이 배율 $\lambda_k - \lambda_{r+1}$이 $0$이 아니어서 나눌 수 있다는 단계에서 쓰입니다. 비유가 맞지 않는 곳은 이 강의의 벡터에는 위치나 시간이 없다는 점이고, 비유는 "배율이 다르면 섞일 수 없다"는 것만 전합니다.

(4)는 이로부터 유한차원 공간의 선형사상이 차원보다 긴 서로 다른 고윳값의 열을 가질 수 없다는 것이고, (5)는 그 열의 길이가 차원과 같으면 고유벡터만으로 기저가 채워져 대각화 가능이라는 것입니다. 출처는 "고윳값마다 고유벡터를 하나씩 고른다"고 적지만, 이 사이트에는 여러 번 고르는 일을 한꺼번에 하는 원리가 없으므로 (3)에서 길이에 대한 귀납으로 고유벡터의 열을 만듭니다.

## 증명

:::idea
(1)은 길이 $r$에 대한 귀납이다. 합에 $T - \lambda_{r+1}i_V$를 적용하면 마지막 항이 없어지고, 나머지 항은 같은 고유공간에 머문 채 $0$이 아닌 수가 곱해진다. (2)는 (1)에 계수를 곱한 항을 넣은 것이고, (4)와 (5)는 일차독립인 열의 길이에 관한 앞 단원의 결과로 끝난다.
:::

:::hint
(1)의 귀납 명제는 "길이 $r$인 모든 서로 다른 실수의 열과, 조건을 만족하는 길이 $r$인 모든 벡터의 열에 대하여"를 감싸야 합니다. 귀납 단계에서 처음 $r$개의 $\lambda$와 새로 만든 벡터의 열에 귀납 가정을 쓰기 때문입니다.
:::

:::hint
(3)에서는 처음 $r$개에 대한 고유벡터의 열에 $\lambda_{r+1}$의 고유벡터 하나를 덧붙이세요.
:::

:::proof
고윳값 항목은 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]를 가리킨다. 그 (1)에 의해 각 실수 $\mu$에서 $T - \mu i_V$는 선형사상이고 모든 $v$에서 $(T - \mu i_V)v = Tv - \mu v$이며, $\operatorname{Ker}(T - \mu i_V) = \{v \in V : Tv = \mu v\}$는 $V$의 [[subspace|부분공간]]이다. 정수의 순서에 관하여 [[prime-number|(Z1)]], [[well-ordering-principle|(Z5), (Z6), (L1)–(L3)]]을 쓴다. 특히 $k \in \{1, \dots, r\}$이면 $k \le r < r + 1$((L3))이므로 (Z6)에 의해 $k < r + 1$이고, (Z5)에 의해 $k \ne r + 1$이다. 또 $k \in \{1, \dots, r + 1\}$이면 (Z5)와 (Z1)에 의해 $k \le r$이거나 $k \ge r + 1$이고, 뒤의 경우 $k \le r + 1$과 (L2)에 의해 $k = r + 1$이다. (†)

**(1)의 증명.** 정수 $r \ge 0$마다 다음 명제 $P_r$을 생각한다. "길이 $r$인 모든 서로 다른 실수의 열 $\lambda_1, \dots, \lambda_r$과, 모든 $k$에서 $u_k \in \operatorname{Ker}(T - \lambda_k i_V)$인 길이 $r$인 모든 $V$의 열 $u_1, \dots, u_r$에 대하여, $u_1 + \cdots + u_r = 0_V$이면 모든 $k$에서 $u_k = 0_V$이다." [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로 모든 $r \ge 0$에서 $P_r$을 보인다.

기초 단계: $r = 0$이면 $\{1, \dots, 0\}$에 원소가 없으므로 "모든 $k$에서 $u_k = 0_V$"는 공허하게 참이다.

귀납 단계: $r \ge 0$에서 $P_r$이 참이라 하자. $\lambda_1, \dots, \lambda_{r+1}$이 서로 다른 실수의 열이고 $u_1, \dots, u_{r+1}$이 모든 $k$에서 $u_k \in \operatorname{Ker}(T - \lambda_k i_V)$, $u_1 + \cdots + u_{r+1} = 0_V$를 만족한다고 하자. $R = T - \lambda_{r+1}i_V$로 둔다. $R$은 선형사상이므로 [[linear-map|선형사상]]의 (T1), (T4)에 의해
$$0_V = R0_V = R(u_1 + \cdots + u_{r+1}) = Ru_1 + \cdots + Ru_{r+1}$$
이다. 각 $k$에서 $Tu_k = \lambda_k u_k$이므로 [[vector-space-basic-properties|(B11)]]에 의해 $Ru_k = Tu_k - \lambda_{r+1}u_k = \lambda_k u_k - \lambda_{r+1}u_k = (\lambda_k - \lambda_{r+1})u_k$이다. 특히 [[real-number-arithmetic|(K12)(v)]]에 의해 $\lambda_{r+1} - \lambda_{r+1} = 0$이므로 (B3)에 의해 $Ru_{r+1} = 0u_{r+1} = 0_V$이다. [[finite-sum-of-vectors|벡터의 유한 합]]의 재귀 정의에 의해 $Ru_1 + \cdots + Ru_{r+1} = (Ru_1 + \cdots + Ru_r) + Ru_{r+1} = (Ru_1 + \cdots + Ru_r) + 0_V$이고, $0_V$는 영벡터이므로 이것은 $Ru_1 + \cdots + Ru_r$이다. 곧 $w_k = Ru_k = (\lambda_k - \lambda_{r+1})u_k$ ($k \in \{1, \dots, r\}$)로 둔 길이 $r$인 열에 대하여 $w_1 + \cdots + w_r = 0_V$이다.

$k \in \{1, \dots, r\}$이면 $u_k$가 부분공간 $\operatorname{Ker}(T - \lambda_k i_V)$에 속하므로 부분공간의 (S3)에 의해 $w_k \in \operatorname{Ker}(T - \lambda_k i_V)$이다. 처음 $r$개의 실수의 열 $\lambda_1, \dots, \lambda_r$도 서로 다르다. 따라서 $P_r$을 이 두 열에 쓰면 모든 $k \in \{1, \dots, r\}$에서 $(\lambda_k - \lambda_{r+1})u_k = 0_V$이다. (†)에 의해 $k \ne r + 1$이므로 $\lambda_k \ne \lambda_{r+1}$이고 (K12)(v)에 의해 $\lambda_k - \lambda_{r+1} \ne 0$이다. (B6)에 의해 $u_k = 0_V$이다. 그러면 합의 재귀 정의와 벡터의 유한 합의 (H5), (H0)에 의해
$$0_V = u_1 + \cdots + u_{r+1} = (u_1 + \cdots + u_r) + u_{r+1} = 0_V + u_{r+1} = u_{r+1}$$
이다. (†)에 의해 $\{1, \dots, r+1\}$의 모든 $k$는 $k \le r$이거나 $k = r + 1$이므로 모든 $k$에서 $u_k = 0_V$이다. 곧 $P_{r+1}$이 참이다.

**(2)의 증명.** 길이 $r$인 실수의 열 $c_1, \dots, c_r$에 대하여 $c_1 v_1 + \cdots + c_r v_r = 0_V$라 하자. $u_k = c_k v_k$로 두면 이 일차결합은 열 $u_1, \dots, u_r$의 합이다(벡터의 유한 합의 "계수를 곱한 합"). 고윳값 항목의 (1)에 의해 $v_k \in \operatorname{Ker}(T - \lambda_k i_V)$이고, (S3)에 의해 $u_k \in \operatorname{Ker}(T - \lambda_k i_V)$이다. (1)에 의해 모든 $k$에서 $c_k v_k = 0_V$이고, $v_k \ne 0_V$이므로 (B6)에 의해 $c_k = 0$이다. 일차독립의 정의에 의해 $v_1, \dots, v_r$은 일차독립이다.

**(3)의 증명.** 정수 $r \ge 0$마다 명제 $Q_r$: "모든 항이 $T$의 고윳값인 길이 $r$인 모든 실수의 열 $\lambda_1, \dots, \lambda_r$에 대하여, 모든 $k$에서 $v_k$가 $\lambda_k$에 속하는 고유벡터인 길이 $r$인 $V$의 열이 있다"를 수학적 귀납법(시작점 $0$)으로 보인다. $r = 0$이면 $V$의 빈 열이 조건을 공허하게 만족한다. $Q_r$이 참이라 하고 $\lambda_1, \dots, \lambda_{r+1}$의 모든 항이 고윳값이라 하자. 처음 $r$개의 모든 항도 고윳값이므로 $Q_r$에 의해 조건을 만족하는 길이 $r$인 열 $v_1, \dots, v_r$이 있다. $\lambda_{r+1}$이 고윳값이므로 고윳값의 정의에 의해 $\lambda_{r+1}$에 속하는 고유벡터 $x$가 있다. $v$에 $x$를 덧붙인 열 $v_1, \dots, v_r, x$(벡터의 유한 합의 진술 첫 문단)는 처음 $r$개가 $v_1, \dots, v_r$이고 $(r + 1)$번째 항이 $x$이다. (†)에 의해 모든 $k \in \{1, \dots, r + 1\}$은 $k \le r$이거나 $k = r + 1$이므로, 이 열의 모든 $k$번째 항은 $\lambda_k$에 속하는 고유벡터이다. 곧 $Q_{r+1}$이 참이다.

**(4)의 증명.** (3)에 의해 모든 $k$에서 $v_k$가 $\lambda_k$에 속하는 고유벡터인 길이 $r$인 열 $v_1, \dots, v_r$이 있고, $\lambda$가 서로 다르므로 (2)에 의해 이 열은 일차독립이다. [[independent-and-spanning-bounds|일차독립인 열과 생성하는 열의 길이]]의 (1)에 의해 $r \le n$이다.

**(5)의 증명.** 길이 $n$인 그 열에 (3), (2)를 쓰면 모든 항이 $T$의 고유벡터인 길이 $n$의 일차독립인 열이 있고, 일차독립인 열과 생성하는 열의 길이의 (3)에 의해 이 열은 $V$의 기저이다. 곧 고유벡터로 된 기저가 있으므로 [[diagonalizable-iff-eigenbasis|대각화와 고유벡터의 기저]]의 (2)에 의해 $T$는 대각화 가능이다. 행렬의 경우: 고윳값 항목의 정의에 의해 $A$의 고윳값은 $T_A$의 고윳값이고, [[dimension|유한차원과 차원]]의 (4)에 의해 $\dim \mathbb{R}^n = n$이므로 앞의 결과에 의해 $T_A$는 대각화 가능이다. [[diagonalizable|대각화 가능]]의 (7)에 의해 $A$는 대각화 가능이다. $\blacksquare$
:::

## 예시와 반례

:::example[세 고윳값을 가진 $3 \times 3$ 행렬]
$A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 3 \end{pmatrix}$이라 합시다. 행렬과 벡터의 곱의 정의에 의해 $Ae_1 = (1, 0, 0) = 1e_1$이고, $p = (1, 1, 0)$이면 $Ap = (1, 0, 0) + (1, 2, 0) = (2, 2, 0) = 2p$이며, $q = (1, 2, 2)$이면 $Aq = (1, 0, 0) + 2(1, 2, 0) + 2(0, 1, 3) = (3, 6, 6) = 3q$입니다. 세 벡터는 첫째 값이 $1 \ne 0$이므로 영벡터가 아니고, $1$, $2$, $3$은 서로 다른 고윳값입니다. (2)에 의해 $e_1$, $p$, $q$는 일차독립이고, $\dim \mathbb{R}^3 = 3$이므로 (5)에 의해 $A$는 대각화 가능입니다. 일차독립을 직접 확인하지 않아도 됩니다. (4)에 의해 $A$의 서로 다른 고윳값의 열은 길이가 $3$을 넘지 않으므로, $A$에는 $1$, $2$, $3$이 아닌 고윳값이 없습니다. 그런 고윳값 $c$가 있다면 $1, 2, 3, c$가 길이 $4$인 서로 다른 고윳값의 열이 되기 때문입니다.
:::

:::counterexample[고윳값이 같으면 일차독립이 아닐 수 있다]
$I_2$에서 $e_1$과 $2e_1$은 둘 다 $1$에 속하는 고유벡터입니다($I_2 x = x = 1x$). 그러나 $2e_1 + (-1)(2e_1) = 0$이므로 열 $e_1, 2e_1$은 일차종속입니다. 고윳값의 열 $1, 1$이 서로 다르지 않으므로 (2)의 가정이 충족되지 않습니다.
:::

:::counterexample[(5)의 역이 성립하지 않는 예]
$I_2 = \operatorname{diag}(1, 1)$은 대각행렬이므로 대각화 가능입니다([[change-of-basis-and-similarity|닮음]]의 반사성). 그런데 [[diagonalizable|대각화 가능]]의 (4)에 의해 $I_2$의 고윳값은 $1$뿐이므로, 모든 항이 $I_2$의 고윳값인 길이 $2$의 열은 $1, 1$뿐이고 이 열은 서로 다르지 않습니다. 이 예에서는 대각화 가능하지만 (5)의 가정이 성립하지 않습니다.
:::

## 확인 질문

:::check[$\dim V = 2$인 $V$ 위의 선형사상 $T$가 $1$, $2$, $3$을 모두 고윳값으로 가질 수 있는가?]
없습니다. $1, 2, 3$은 길이 $3$인 서로 다른 실수의 열이므로, 모두 고윳값이라면 (4)에 의해 $3 \le 2$가 되어야 하는데 이것은 거짓입니다.
:::

:::check[$u \in \operatorname{Ker}(T - 2i_V)$, $w \in \operatorname{Ker}(T - 5i_V)$이고 $2u = 3w$이면 $u$와 $w$는 무엇인가?]
둘 다 $0_V$입니다. $2u + (-3)w = 2u - 3w = 0_V$이고((B9), (B12)), 부분공간의 (S3)에 의해 $2u \in \operatorname{Ker}(T - 2i_V)$, $(-3)w \in \operatorname{Ker}(T - 5i_V)$입니다. $2 \ne 5$이므로 (1)에 의해 $2u = 0_V$이고 $(-3)w = 0_V$이며, (B6)에 의해 $u = 0_V$, $w = 0_V$입니다.
:::
