---
title: 삼각행렬의 고윳값
title_en: Eigenvalues of a Triangular Matrix
aliases: [위삼각행렬, 아래삼각행렬, 삼각행렬, 상삼각행렬, 하삼각행렬, upper triangular matrix, lower triangular matrix, triangular matrix]
kind: theorem
field: linear-algebra
msc: ["15A18"]
level: undergrad
summary: 대각성분 아래(또는 위)의 성분이 모두 0 인 정사각행렬은 대각성분이 모두 0 이 아닐 때 정확히 가역이고, 그 고윳값은 정확히 대각성분들이다. 행렬과 그 전치행렬은 고윳값이 같다.
requires: [real-number-arithmetic, vector-space, vector-space-basic-properties, real-function-space, finite-sum-of-vectors, standard-basis, linear-combination-and-span, linear-independence, basis-iff-independent-and-spanning, exchange-lemma, extension-to-a-basis, linear-map, kernel-and-range, injective-iff-trivial-kernel, dimension, injective-iff-surjective-equal-dimension, matrix, matrix-vector-product, transpose, invertible-matrix, inverse-matrix-properties, mathematical-induction, well-ordering-principle, prime-number, eigenvalue-and-eigenvector]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 4장 1.7절 Eigenvalues of a triangular matrix, pp.103–104; 위삼각·아래삼각행렬의 정의는 3장 3.3절, p.81; 4장 연습문제 1.5(p.104), 2.1 a(p.114)
    checked: original
    note: "출처는 3장 3.3절(p.81)에서 a_{j,k} = 0 (k < j) 인 정사각행렬을 위삼각행렬, a_{j,k} = 0 (j < k) 인 것을 아래삼각행렬이라 하고, 대각성분에 0 이 있는 삼각행렬은 가역이 아님을 '열 연산으로 쉽게 확인할 수 있다'고 적은 뒤 삼각행렬의 행렬식이 대각성분의 곱이라는 것을 보인다. 4장 1.7절(p.103)은 삼각행렬의 고윳값이 (중복도를 세어) 정확히 대각성분이라 하고, 행렬식이 대각성분의 곱이라는 것으로 특성다항식을 계산해 증명한다. 같은 곳에서 대각행렬의 고윳값이 대각성분이라는 것을 특별한 경우로 적는다. 이 항목은 행렬식 없이 증명한다. (1)의 ⇐ 는 Ux = 0 의 해를 아래 자리부터 차례로 0 으로 만드는 귀납, ⇒ 는 처음 k 개의 열이 e_1, …, e_{k−1} 의 생성에 들어가 교환 보조정리로 일차종속이 된다는 논증이다. (2)는 중복도를 말하지 않고 고윳값의 집합만 말한다. A 와 Aᵀ 의 고윳값이 같다는 (3)은 출처 연습문제 2.1 a(p.114)이고, 출처의 연습문제 1.5(p.104)는 삼각행렬의 고윳값을 묻는다. 출처 4장 1.7절은 아래삼각행렬도 함께 다루며, 이 항목은 (3)으로 아래삼각행렬을 위삼각행렬로 돌린다. 예시와 반례와 확인 질문은 새로 만들었다."
status: reviewed
review_note: "2026-11-16 작성자의 자기 검토 뒤 독립 검토 통과(전반 2회, 후반 1회). 고유벡터의 정의, 출처 메모, 출처의 예와 같은 꼴임을 밝히는 일, 반례의 일반화를 보완했다. 마지막 표현 수정은 지휘자가 변경분을 확인했다."
added: 2026-11-16
---

:::statement
$n$이 자연수라 하자. $n \times n$ [[matrix|행렬]] $A$가 **위삼각행렬**(upper triangular matrix)인 것은 정확히 $j > k$인 모든 $j, k \in \{1, \dots, n\}$에서 $a_{j,k} = 0$일 때이고, **아래삼각행렬**(lower triangular matrix)인 것은 정확히 $j < k$인 모든 $j, k \in \{1, \dots, n\}$에서 $a_{j,k} = 0$일 때이다. 대각성분은 [[matrix|행렬]]의 (6)에서 정한 $a_{k,k}$이다.

1. $U$가 $n \times n$ 위삼각행렬이면, $U$가 [[invertible-matrix|가역]]인 것은 정확히 모든 $k \in \{1, \dots, n\}$에서 $u_{k,k} \ne 0$일 때이다.
2. $U$가 $n \times n$ 위삼각행렬이고 $c$가 실수이면, $c$가 $U$의 [[eigenvalue-and-eigenvector|고윳값]]인 것은 정확히 $c = u_{k,k}$인 $k \in \{1, \dots, n\}$이 있을 때이다.
3. $A$가 $n \times n$ 행렬이고 $\lambda$가 실수이면, $\lambda$가 $A$의 고윳값인 것은 정확히 $\lambda$가 $A^T$의 고윳값일 때이다. $A$가 아래삼각행렬이면 $A^T$는 위삼각행렬이고 대각성분이 $A$와 같으며, $A$에 대하여 (1)과 (2)가 그대로 성립한다. 곧 $A$가 가역인 것은 정확히 모든 $a_{k,k}$가 $0$이 아닐 때이고, $c$가 $A$의 고윳값인 것은 정확히 $c = a_{k,k}$인 $k$가 있을 때이다.
:::

:::english
Let $n$ be a natural number. An $n \times n$ matrix $A$ is **upper triangular** exactly when $a_{j,k} = 0$ for all $j, k \in \{1, \dots, n\}$ with $j > k$, and **lower triangular** exactly when $a_{j,k} = 0$ for all $j, k \in \{1, \dots, n\}$ with $j < k$. The diagonal entries are the $a_{k,k}$ of (6) of the entry on matrices.

1. If $U$ is an $n \times n$ upper triangular matrix, then $U$ is invertible exactly when $u_{k,k} \ne 0$ for every $k \in \{1, \dots, n\}$.
2. If $U$ is an $n \times n$ upper triangular matrix and $c$ is a real number, then $c$ is an eigenvalue of $U$ exactly when there is $k \in \{1, \dots, n\}$ with $c = u_{k,k}$.
3. If $A$ is an $n \times n$ matrix and $\lambda$ is a real number, then $\lambda$ is an eigenvalue of $A$ exactly when $\lambda$ is an eigenvalue of $A^T$. If $A$ is lower triangular, then $A^T$ is upper triangular with the same diagonal entries as $A$, and (1) and (2) hold for $A$ as they stand. That is, $A$ is invertible exactly when every $a_{k,k}$ is nonzero, and $c$ is an eigenvalue of $A$ exactly when there is $k$ with $c = a_{k,k}$.
:::

## 직관

위삼각행렬로 $Ux = 0$을 풀면 맨 아래 식에는 $x_n$ 하나만 나오고, 그 위의 식에는 $x_{n-1}$과 이미 정해진 $x_n$만 나옵니다. 도미노를 끝에서부터 세우는 것처럼 아래 자리부터 하나씩 정해지므로, 대각성분이 모두 $0$이 아니면 $x_n = 0$, $x_{n-1} = 0$, …으로 이어져 해가 영벡터뿐입니다. 거꾸로 어느 대각성분 $u_{k,k}$가 $0$이면 그 자리에서 사슬이 끊겨, 처음 $k$개의 열이 $k - 1$개의 표준기저 벡터만으로 표현되어 서로 독립일 수 없습니다. 비유가 맞는 곳은 "한 자리가 앞 자리에만 기대고 뒤 자리에 기대지 않는다"는 점입니다.

고윳값으로 옮기면, $U - cI_n$도 위삼각이고 대각성분이 $u_{k,k} - c$이므로, $c$가 고윳값인 것은 이 가운데 하나가 $0$일 때, 곧 $c$가 대각성분 가운데 하나일 때입니다 (2). 이 항목은 행렬식을 쓰지 않으므로 대각성분 가운데 같은 수가 몇 번 나오는지(중복도)는 말하지 않습니다. 삼각행렬이 아닌 행렬에서는 대각성분이 고윳값이 아닐 수 있습니다(아래 반례).

## 증명

:::idea
(1)의 ⇐는 $Ux = 0$이면 $x_n, x_{n-1}, \dots, x_1$의 차례로 $0$임을 귀납으로 보이고, ⇒의 대우는 $u_{k,k} = 0$이면 처음 $k$개의 열이 $e_1, \dots, e_{k-1}$의 생성에 들어감을 보여 교환 보조정리로 일차종속을 끌어낸다. (2)는 (1)을 $U - cI_n$에, (3)은 전치행렬의 역행렬에 쓴다.
:::

:::hint
(1)의 ⇐에서 정수 $t$에 대한 명제 "$t \le n$이면 $k > n - t$인 모든 $k$에서 $x_k = 0$"을 생각해 보세요. $t = n$이 원하는 결론입니다.
:::

:::hint
(1)의 ⇒에서 $u_{k,k} = 0$이면, $l \le k$인 열 $\mathbf{u}_l$은 $j \ge k$번째 값이 모두 $0$입니다. $k = 1$이면 $e_1, \dots, e_0$은 빈 열입니다.
:::

:::proof
정수의 순서에 관하여 [[prime-number|(Z1)]], [[well-ordering-principle|(Z5)–(Z7), (L1)–(L3)]]을 쓰고, 정수 $c$, $k$에 대하여 "$c \le k$이거나 $c \ge k + 1$"을 (Z5)와 (Z1)로 인용한다. $\mathbb{R}^n$의 원소의 같음과 연산은 [[real-function-space|실숫값 함수의 공간과 ℝⁿ]]의 값마다의 규칙을 따른다. [[finite-sum-of-vectors|벡터의 유한 합]]의 (H7)은 (H6)의 설정, 곧 길이가 $1$ 이상인 열에 관한 것이며, 아래에서 (H7)을 쓰는 합은 모두 길이가 $1$ 이상이다. 먼저 쓰는 사실을 하나 보인다.

(가) $k \in \{1, \dots, n\}$이고 길이 $k - 1$인 실수의 열 $y_1, \dots, y_{k-1}$에 대하여 $z = y_1 e_1 + \cdots + y_{k-1}e_{k-1}$이면, $j \le k - 1$에서 $z$의 $j$번째 값은 $y_j$이고 $j \ge k$에서 $0$이다. 증명: [[standard-basis|표준기저]]의 (1)과 스칼라배의 값의 규칙에 의해 $z$의 $j$번째 값은 $i$번째 항이 $y_i e_i(j)$인 실수의 열의 합이다. $i \ne j$이면 $e_i(j) = 0$이므로 그 항은 [[real-number-arithmetic|(K9)]]에 의해 $0$이다. $j \le k - 1$이면 $j$번째 항만 $y_j \cdot 1 = y_j$이고 나머지는 $0$이므로 (H7)에 의해 합은 $y_j$이다. $j \ge k$이면 모든 $i \le k - 1 < j$에서 $i \ne j$((Z6), (Z5))이므로 모든 항이 $0$이고 (H5)에 의해 합은 $0$이다. 특히 $z = 0$이면 모든 $j \le k - 1$에서 $y_j = 0$이므로 열 $e_1, \dots, e_{k-1}$은 [[linear-independence|일차독립]]이다. 또 $y \in \mathbb{R}^n$이 $j \ge k$인 모든 $j$에서 $y_j = 0$이면, 처음 $k - 1$개의 값으로 만든 $z = y_1 e_1 + \cdots + y_{k-1}e_{k-1}$은 모든 자리에서 $y$와 값이 같으므로 $y = z \in \operatorname{span}(e_1, \dots, e_{k-1})$이다([[linear-combination-and-span|생성]]). $k = 1$이면 열과 합이 비어 있고 $\operatorname{span}$은 $\{0\}$이며, 위의 말은 그대로 맞다.

**(1)의 ⇐.** 모든 $u_{k,k} \ne 0$이라 하고 $x \in \mathbb{R}^n$이 $Ux = 0$을 만족한다고 하자. 정수 $t \ge 0$마다 명제 $P_t$: "$t \le n$이면 $k > n - t$인 모든 $k \in \{1, \dots, n\}$에서 $x_k = 0$이다"를 [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로 보인다.

$P_0$: $k \in \{1, \dots, n\}$이면 $k \le n$이므로 (L1)에 의해 $k > n$이 아니다. 따라서 결론은 공허하게 참이다.

$P_t$에서 $P_{t+1}$: $t + 1 \le n$이라 하자. $t < t + 1$이므로 (Z6)에 의해 $t \le n$이고 $P_t$의 결론이 성립한다. $j = n - t$로 두면 (Z7)에 의해 $1 \le j$이고, $t \ge 0$에서 $j \le n$이므로 $j \in \{1, \dots, n\}$이다. [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)에 의해 $Ux$의 $j$번째 값 $0$은 $l$번째 항이 $u_{j,l}x_l$인 길이 $n$인 실수의 열의 합이다. $l < j$이면 $U$가 위삼각이므로 $u_{j,l} = 0$이고, $l > j = n - t$이면 $P_t$에 의해 $x_l = 0$이다. 어느 경우든 (K9)에 의해 그 항은 $0$이다. (Z5)에 의해 $l \ne j$이면 $l < j$이거나 $l > j$이므로, $j$번째 항 말고는 모든 항이 $0$이고 (H7)에 의해 $0 = u_{j,j}x_j$이다. $u_{j,j} \ne 0$이므로 (K10)에 의해 $x_j = 0$이다. 이제 $k > n - (t + 1) = j - 1$이면 (Z1)에 의해 $k \ge j$이고, (Z5)에 의해 $k = j$이거나 $k > j$이므로 $x_k = 0$이다. 곧 $P_{t+1}$이 참이다.

$P_n$에 의해 $k > 0$인 모든 $k$, 곧 모든 $k \in \{1, \dots, n\}$에서 $x_k = 0$이므로 $x = 0$이다. 따라서 [[kernel-and-range|핵]] $\operatorname{Ker} T_U$는 $\{0\}$이고([[linear-map|선형사상]]의 (T1)에 의해 $0 \in \operatorname{Ker} T_U$), [[injective-iff-trivial-kernel|단사인 선형사상과 핵]]의 (1)에 의해 $T_U$는 단사이다. [[dimension|유한차원과 차원]]의 (4)에 의해 $\mathbb{R}^n$은 $n$차원이므로 [[injective-iff-surjective-equal-dimension|차원이 같은 공간 사이의 선형사상]]에 의해 $T_U$는 동형사상이고, [[invertible-matrix|가역행렬과 역행렬]]의 (2)에 의해 $U$는 가역이다.

**(1)의 ⇒.** 대우를 보인다. 어떤 $k$에서 $u_{k,k} = 0$이라 하자. $l \in \{1, \dots, k\}$이고 $j \ge k$이면 $\mathbf{u}_l$의 $j$번째 값 $u_{j,l}$은 $0$이다. $j > l$이면 $U$가 위삼각이기 때문이고, $j \le l$이면 $j \ge k \ge l$과 (L2)에 의해 $j = l = k$여서 $u_{k,k} = 0$이기 때문이다((Z5)로 두 경우를 나눈다). (가)에 의해 처음 $k$개의 열 $\mathbf{u}_1, \dots, \mathbf{u}_k$의 모든 항은 일차독립인 길이 $k - 1$의 열 $e_1, \dots, e_{k-1}$의 생성에 속한다. 이 $k$개의 열이 일차독립이라면 [[exchange-lemma|교환 보조정리]]에 의해 $k \le k - 1$인데, (L3)에 의해 $k - 1 < k$이므로 (L1)에 어긋난다. 따라서 $\mathbf{u}_1, \dots, \mathbf{u}_k$는 일차종속이고, $\alpha_1 \mathbf{u}_1 + \cdots + \alpha_k \mathbf{u}_k = 0$이며 $\alpha_m \ne 0$인 $m$이 있는 길이 $k$인 실수의 열 $\alpha$가 있다.

$\alpha$와 모든 항이 $0$인 길이 $n - k$인 실수의 열을 이어 붙인 길이 $n$인 열을 $\beta$라 하자. [[extension-to-a-basis|기저로 늘리기]]의 (1)과 (C3), (H0)에 의해
$$\beta_1 \mathbf{u}_1 + \cdots + \beta_n \mathbf{u}_n = (\alpha_1 \mathbf{u}_1 + \cdots + \alpha_k \mathbf{u}_k) + (0\mathbf{u}_{k+1} + \cdots + 0\mathbf{u}_n) = 0 + 0 = 0$$
이고 $\beta_m = \alpha_m \ne 0$이므로 $U$의 열 $\mathbf{u}_1, \dots, \mathbf{u}_n$은 일차종속이다. 일차종속인 열은 [[basis-iff-independent-and-spanning|기저의 판정]]에 의해 기저가 아니므로, 가역행렬과 역행렬의 (3)에 의해 $U$는 가역이 아니다.

**(2)의 증명.** [[matrix|행렬]]의 (1), (6)에 의해 $U - cI_n = U + \bigl(-(cI_n)\bigr)$의 $(j, k)$ 성분은 $u_{j,k} + \bigl(-(c(I_n)_{j,k})\bigr)$이다. $j \ne k$이면 $(I_n)_{j,k} = 0$이고 (K9)와 $-0 = 0$((K4)의 $0 + 0 = 0$과 (K8)(ii))에 의해 이 성분은 $u_{j,k}$이며, $j = k$이면 $u_{k,k} - c$이다. 따라서 $U - cI_n$은 위삼각행렬이고 대각성분은 $u_{k,k} - c$이다. [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (4)에 의해 $c$가 고윳값인 것은 정확히 $U - cI_n$이 가역이 아닐 때이고, (1)에 의해 정확히 $u_{k,k} - c = 0$인 $k$가 있을 때이며, (K12)(v)에 의해 정확히 $c = u_{k,k}$인 $k$가 있을 때이다.

**(3)의 증명.** [[vector-space-basic-properties|(B5)]]에 의해 $-(\lambda I_n) = (-1)(\lambda I_n)$이므로, [[transpose|전치행렬]]의 (1), (3)에 의해 $(A - \lambda I_n)^T = A^T + \bigl((-1)(\lambda I_n)\bigr)^T = A^T + (-1)\bigl(\lambda I_n^T\bigr) = A^T + (-1)(\lambda I_n)$이고, 다시 (B5)에 의해 이것은 $A^T - \lambda I_n$이다. $A - \lambda I_n$이 가역이면 [[inverse-matrix-properties|역행렬의 성질]]의 (4)에 의해 $A^T - \lambda I_n = (A - \lambda I_n)^T$도 가역이다. 거꾸로 $A^T - \lambda I_n$이 가역이면 같은 (4)에 의해 $(A^T - \lambda I_n)^T$가 가역이고, 전치행렬의 (1)의 $(B^T)^T = B$에 의해 이것은 $A - \lambda I_n$이다. 곧 $A - \lambda I_n$이 가역인 것은 정확히 $A^T - \lambda I_n$이 가역일 때이고, 고윳값과 고유벡터의 (4)에 의해 $\lambda$가 $A$의 고윳값인 것은 정확히 $\lambda$가 $A^T$의 고윳값일 때이다.

$A$가 아래삼각행렬이라 하자. $(A^T)_{k,j} = a_{j,k}$이므로 $k > j$이면 $j < k$이어서 $(A^T)_{k,j} = 0$이다. 곧 $A^T$는 위삼각행렬이고 대각성분은 $(A^T)_{k,k} = a_{k,k}$이다. 앞 문단과 같은 근거(역행렬의 성질의 (4)와 $(A^T)^T = A$)로 $A$가 가역인 것은 정확히 $A^T$가 가역일 때이므로, (1)을 $A^T$에 쓰면 $A$에 대한 (1)이 나온다. 앞 문단의 첫 결론과 (2)를 $A^T$에 쓰면 $A$에 대한 (2)가 나온다. $\blacksquare$
:::

## 예시와 반례

:::example[대각성분을 읽어 판정하기]
$U = \begin{pmatrix} 2 & 5 & 1 \\ 0 & -1 & 4 \\ 0 & 0 & 2 \end{pmatrix}$는 위삼각행렬이고 대각성분이 $2$, $-1$, $2$로 모두 $0$이 아니므로 (1)에 의해 가역이고, (2)에 의해 고윳값은 정확히 $2$와 $-1$입니다. 실제로 $Ue_1 = (2, 0, 0) = 2e_1$입니다. 같은 행렬의 $(2, 2)$ 성분을 $0$으로 바꾼 $U' = \begin{pmatrix} 2 & 5 & 1 \\ 0 & 0 & 4 \\ 0 & 0 & 2 \end{pmatrix}$는 (1)에 의해 가역이 아닙니다. 증명이 말하는 대로 처음 두 열 $(2, 0, 0)$, $(5, 0, 0)$이 $e_1$의 생성에 들어가고, $5(2, 0, 0) + (-2)(5, 0, 0) = (0, 0, 0)$이어서 일차종속입니다.
:::

:::counterexample[삼각행렬이 아니면 대각성분은 고윳값이 아닐 수 있다]
$A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$의 대각성분은 $1$, $1$이지만 $1$은 $A$의 고윳값이 아닙니다. $(A - I_2)x = (2x_2, 2x_1)$이므로 이것이 $0$이면 (K10)과 $2 \ne 0$에 의해 $x_1 = x_2 = 0$이고, [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 (2)에 의해 $1$은 고윳값이 아닙니다. 이 행렬은 위삼각도 아래삼각도 아닙니다($a_{2,1} = a_{1,2} = 2 \ne 0$). 또 대각성분이 모두 $0$이 아닌 $\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$은 $(1, -1)$을 $0$으로 보내므로 가역이 아닙니다. 두 예 모두 삼각이라는 가정이 빠졌습니다.
:::

## 확인 질문

:::check[$\begin{pmatrix} 0 & 7 \\ 0 & 0 \end{pmatrix}$의 고윳값은 무엇이고, 이 행렬은 가역인가?]
위삼각행렬이고 대각성분이 $0$, $0$이므로 (2)에 의해 고윳값은 $0$뿐이고, (1)에 의해 가역이 아닙니다.
:::

:::check[$L = \begin{pmatrix} 4 & 0 & 0 \\ 1 & 4 & 0 \\ 2 & 3 & -1 \end{pmatrix}$은 가역인가? 고윳값은?]
$j < k$인 성분이 모두 $0$이므로 아래삼각행렬이고 대각성분은 $4$, $4$, $-1$입니다. (3)에 의해 모두 $0$이 아니므로 가역이고, 고윳값은 정확히 $4$와 $-1$입니다.
:::
