---
title: 기약 사다리꼴에서 해 읽기
title_en: Reading Solutions from the Reduced Echelon Form
aliases: [해 읽기, 자유변수, 기본변수, 피벗 변수, 일반해, 연립방정식의 해의 존재와 유일성, free variable, basic variable, general solution, consistent system, inconsistent system]
kind: theorem
field: linear-algebra
msc: ["15A06"]
level: undergrad
summary: 계수행렬이 기약 사다리꼴이면 연립일차방정식은 피벗보다 아래의 우변 값이 모두 0 일 때 해를 갖고, 그때 자유 열 자리의 값을 마음대로 정할 때마다 해가 정확히 하나 있으며 피벗 자리의 값은 식으로 정해진다. 해가 하나뿐인 것은 모든 열이 피벗 열일 때, 모든 우변에 해가 있는 것은 모든 행에 피벗이 있을 때이다. 일반 연립방정식은 첨가행렬을 기약 사다리꼴로 소거해 이 경우로 옮긴다.
requires: [prime-number, well-ordering-principle, real-number-arithmetic, real-function-space, vector-space, vector-space-basic-properties, subspace, finite-sum-of-vectors, standard-basis, linear-map, kernel-and-range, injective-iff-trivial-kernel, matrix, matrix-vector-product, rank-of-a-matrix, system-of-linear-equations, row-equivalence, echelon-form, row-reduction]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "2장 2절 2.3 Echelon form 의 해 읽기, p.45; 3절 Analyzing the pivots, pp.46–47"
    checked: original
    note: "출처는 2.3절(p.45)에서 첨가행렬의 기약 사다리꼴(3 × 6, 피벗이 1, 3, 5 번째 열)을 예로 들어, 피벗이 없는 열에 대응하는 변수(자유변수, free variables)를 우변으로 옮기면 해를 바로 쓸 수 있다고 적고 해를 자유변수의 식으로 적는다. 3절(pp.46–47)에서는 연립방정식에 해가 없는 것은 정확히 첨가행렬의 사다리꼴의 마지막 열에 피벗이 있을 때라고 적고, 그 이유로 0x_1 + ⋯ + 0x_n = b ≠ 0 인 행을 들며, 그런 행이 없으면 기약 사다리꼴로 만들어 해를 읽으면 된다고 적는다. 이어 계수행렬에 관한 세 진술, 곧 해가 (있다면) 하나뿐인 것은 사다리꼴의 모든 열에 피벗이 있을 때, 모든 우변에 해가 있는 것은 모든 행에 피벗이 있을 때, 모든 우변에 해가 하나뿐인 것은 둘 다일 때를 적는다. 첫째는 자유변수가 해가 하나가 아닌 것의 원인이라는 말로, 둘째의 한 방향은 마지막 행이 영행이면 우변 (0, …, 0, 1) 에 해가 없다는 논증으로 적는다(p.47). 이 항목은 계수행렬이 기약 사다리꼴인 경우에 이 사실들을 진술하고 증명한다. (2)와 (3)은 피벗 자리에서만 0 이 아닐 수 있는 벡터에 대한 계산 하나((1))로 증명하고, 해가 하나뿐일 조건 (4)는 자유변수를 세는 대신 계수(rank)로 증명한다. 자유변수의 값을 함수 f : N → ℝ 로 정해 해를 하나로 정하는 (3)의 꼴은 출처에 이렇게 진술되어 있지 않다(출처는 예로 보인다). '자유 열'이라는 말은 출처에 나오지 않는다(줄바꿈으로 나뉜 경우까지 검색한 범위). '기본변수'(basic variables)는 7.3절 Theorem 7.2 의 증명(p.64)에 피벗의 개수를 세는 말로 한 번 나온다. 출처는 사다리꼴(기약이 아닌 것 포함)의 피벗으로 말하지만 이 항목은 기약 사다리꼴만 다룬다. (5)의 '모든 우변에 해가 있다'의 증명에서 우변 e_m 을 쓰는 것은 출처 p.47 의 (0, …, 0, 1) 과 같은 발상이다. 예시는 출처 p.45 의 예와 같은 발상(기약 사다리꼴에서 자유변수로 해를 쓴다)이고 행렬과 수는 다르다. 반례와 확인 질문은 출처 3절 연습문제 3.1(p.51)과 6절 연습문제 6.1, 6.2(p.59)를 다시 읽고 겹치지 않게 만들었다."
status: reviewed
review_note: "2026-11-16 작성자의 자기 검토 뒤 독립 검토 통과(전반 2회, 후반 1회). 기약 사다리꼴의 계수와 기본행렬의 작용을 진술에 더하고, 출처 메모, 헷갈리는 용어와 겹치는 글자, 직관의 일반화를 보완했다. 마지막 수정은 지휘자가 변경분을 확인했다."
added: 2026-11-16
---

:::statement
$m$, $n$이 자연수이고 $U$가 $m \times n$ [[echelon-form|기약 사다리꼴]]이며, 그 피벗의 개수가 $r$이고 피벗 열의 번호가 $\ell_1, \dots, \ell_r$이라 하자. 자유 열의 번호 전체의 집합을
$$N = \{k \in \{1, \dots, n\} : 1 \le j \le r \text{인 모든 } j \text{에서 } k \ne \ell_j\}$$
로 쓴다. $c = (c_1, \dots, c_m) \in \mathbb{R}^m$이고, $x \in \mathbb{R}^n$의 $k$번째 값을 $x_k$로 쓴다. [[system-of-linear-equations|연립일차방정식]] $Ux = c$에 대하여 다음이 성립한다.

1. (피벗 자리의 계산) 모든 $x \in \mathbb{R}^n$과 $r < i \le m$인 모든 $i$에서 $Ux$의 $i$번째 값은 $0$이다. $w \in \mathbb{R}^n$이 모든 $k \in N$에서 $w_k = 0$이면, $1 \le i \le r$인 모든 $i$에서 $Uw$의 $i$번째 값은 $w_{\ell_i}$이다.
2. (해가 있을 조건) $Ux = c$의 해가 있는 것은 정확히 $r < i \le m$인 모든 $i$에서 $c_i = 0$일 때이다.
3. (해를 정하는 자유 자리의 값) $Ux = c$의 해가 있다고 하자. 함수 $f : N \to \mathbb{R}$마다, 모든 $k \in N$에서 $x_k = f(k)$인 해 $x$가 정확히 하나 있다. $k \in N$이면 $k$번째 값이 $f(k)$이고 $k \notin N$이면 $0$인 $\mathbb{R}^n$의 원소를 $f'$이라 하면, 이 해의 피벗 자리의 값은 $1 \le j \le r$에서
$$x_{\ell_j} = c_j - (u_{j,1} f'_1 + \cdots + u_{j,n} f'_n)$$
이다. ($N = \emptyset$이면 $f$는 빈 함수이고, 해는 정확히 하나이다.)
4. (해가 하나뿐일 조건) $Ux = c$의 해가 있을 때, 해가 하나뿐인 것은 정확히 $r = n$일 때이다.
5. (모든 우변에 해가 있을 조건) 모든 $c \in \mathbb{R}^m$에서 $Ux = c$의 해가 있는 것은 정확히 $r = m$일 때이다.
6. (첨가행렬로 판정하기) $B$가 $m \times n$ 행렬이고 $d \in \mathbb{R}^m$이며 첨가행렬 $(B \mid d)$가 기약 사다리꼴이면, $B$도 기약 사다리꼴이고, $Bx = d$의 해가 있는 것은 정확히 $n + 1$이 $(B \mid d)$의 자유 열의 번호일 때, 곧 $(B \mid d)$의 마지막 열이 피벗 열이 아닐 때이다.
7. (일반 연립방정식) $A$가 $m \times n$ 행렬이고 $b \in \mathbb{R}^m$이면 $E(A \mid b)$가 기약 사다리꼴인 기본행렬의 곱 $E$가 있다. 이런 $E$에 대하여 $E(A \mid b) = (EA \mid Eb)$이고, $EA$는 기약 사다리꼴이며, $Ax = b$의 해집합은 $(EA)x = Eb$의 해집합과 같다.
:::

:::english
Let $m$, $n$ be natural numbers and let $U$ be an $m \times n$ matrix in reduced echelon form with $r$ pivots and pivot column indices $\ell_1, \dots, \ell_r$. We write
$$N = \{k \in \{1, \dots, n\} : k \ne \ell_j \text{ for every } j \text{ with } 1 \le j \le r\}$$
for the set of all free column indices. Let $c = (c_1, \dots, c_m) \in \mathbb{R}^m$, and write $x_k$ for the $k$-th value of $x \in \mathbb{R}^n$. For the system of linear equations $Ux = c$ the following hold.

1. (Computation at pivot positions) For every $x \in \mathbb{R}^n$ and every $i$ with $r < i \le m$, the $i$-th value of $Ux$ is $0$. If $w \in \mathbb{R}^n$ satisfies $w_k = 0$ for every $k \in N$, then for every $i$ with $1 \le i \le r$ the $i$-th value of $Uw$ is $w_{\ell_i}$.
2. (Condition for a solution) $Ux = c$ has a solution exactly when $c_i = 0$ for every $i$ with $r < i \le m$.
3. (Free values determine the solution) Suppose $Ux = c$ has a solution. For each function $f : N \to \mathbb{R}$ there is exactly one solution $x$ with $x_k = f(k)$ for every $k \in N$. If $f'$ is the element of $\mathbb{R}^n$ whose $k$-th value is $f(k)$ for $k \in N$ and $0$ for $k \notin N$, then the values of this solution at the pivot positions are, for $1 \le j \le r$,
$$x_{\ell_j} = c_j - (u_{j,1} f'_1 + \cdots + u_{j,n} f'_n).$$
(If $N = \emptyset$, then $f$ is the empty function and there is exactly one solution.)
4. (Condition for uniqueness) When $Ux = c$ has a solution, the solution is unique exactly when $r = n$.
5. (Condition for a solution for every right side) $Ux = c$ has a solution for every $c \in \mathbb{R}^m$ exactly when $r = m$.
6. (Test by the augmented matrix) If $B$ is an $m \times n$ matrix, $d \in \mathbb{R}^m$, and the augmented matrix $(B \mid d)$ is in reduced echelon form, then $B$ is in reduced echelon form, and $Bx = d$ has a solution exactly when $n + 1$ is a free column index of $(B \mid d)$, that is, when the last column of $(B \mid d)$ is not a pivot column.
7. (General systems) If $A$ is an $m \times n$ matrix and $b \in \mathbb{R}^m$, then there is a product of elementary matrices $E$ such that $E(A \mid b)$ is in reduced echelon form. For such an $E$, $E(A \mid b) = (EA \mid Eb)$, $EA$ is in reduced echelon form, and the solution set of $Ax = b$ equals the solution set of $(EA)x = Eb$.
:::

## 직관

기약 사다리꼴의 $j$번째 행은 "피벗 변수 $x_{\ell_j}$ 하나와 자유 변수들"만 담은 식입니다. 피벗 열은 표준기저 벡터이므로 다른 피벗 변수가 이 식에 끼어들지 않기 때문입니다. 그래서 자유 자리의 값을 아무렇게나 정하면 각 식에서 피벗 변수의 값이 꼭 하나로 정해지고, 이것이 (3)입니다. 영행에 해당하는 식은 $0 = c_i$이므로, 그런 $i$에서 $c_i \ne 0$이면 해가 없습니다. 이것이 (2)입니다.

요리법에 비유하면 자유 변수는 입맛대로 정하는 재료의 양이고, 피벗 변수는 그 양이 정해지면 따라서 맞춰야 하는 양념입니다. 비유가 맞는 곳은 자유롭게 고르는 값마다 결과가 하나로 정해진다는 점이고, 맞지 않는 곳은 요리에서는 양이 음수일 수 없지만 여기서는 어떤 실수든 된다는 점입니다.

(4)와 (5)는 피벗의 개수로 해의 개수와 존재를 판정합니다. 해가 있을 때 자유 자리가 하나라도 있으면 그 값을 바꿔 해를 여럿 만들 수 있고, 영행이 하나라도 있으면 그 자리의 우변을 $0$이 아니게 골라 해를 없앨 수 있습니다. (4)는 자유 자리의 개수를 세는 대신 [[rank-of-a-matrix|행렬의 계수]]로 증명합니다.

## 증명

:::idea
피벗 자리에서만 $0$이 아닐 수 있는 벡터 $w$에 대해 $Uw$의 $i$번째 값은 $w_{\ell_i}$ 하나뿐이다((1)). 해를 "자유 자리의 값으로 정한 부분"과 "피벗 자리의 값으로 정한 부분"의 합으로 쓰면 이 계산으로 존재와 유일성이 모두 나온다.
:::

:::hint
$Uw$의 $i$번째 값은 행 규칙에 의해 $u_{i,k} w_k$들의 합입니다. $k$가 자유 열의 번호이면 $w_k = 0$이고, $k = \ell_j$이면 $u_{i,k}$는 $e_j$의 $i$번째 값입니다. 이 합에서 $0$이 아닐 수 있는 항이 몇 개인지 봅니다.
:::

:::hint
(4)는 "해가 하나뿐 ⇔ 핵이 $\{0\}$ ⇔ 계수가 $n$"으로 옮기고, [[echelon-form|사다리꼴]]의 (6)을 씁니다.
:::

:::proof
정수에 관해서는 [[prime-number]]의 진술에서 받아들인 (Z1)과 [[well-ordering-principle|정렬 원리]] 항목의 (Z5), (Z6), (L1)을 쓴다. $\mathbb{R}^m$과 $\mathbb{R}^n$의 원소는 값마다 비교하고, 덧셈과 뺄셈도 값마다 한다([[real-function-space|실숫값 함수의 공간]]). $T_U$는 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)의 [[linear-map|선형사상]]이다.

**자유 열과 피벗 열의 번호.** $k \in \{1, \dots, n\}$이면 $k \in N$이거나, 아니면 $N$의 정의에 의해 $k = \ell_j$인 $j \in \{1, \dots, r\}$이 있다. [[echelon-form|사다리꼴]]의 (2)에 의해 $\ell$의 서로 다른 자리의 값은 다르므로, 그런 $j$는 하나뿐이다. 또 $\ell_j \notin N$이다. 이것을 (☆)라 하자.

**(1)의 증명.** 행 규칙(행렬과 벡터의 곱의 (1))에 의해 $Ux$의 $i$번째 값은 $k$번째 항이 $u_{i,k} x_k$인 길이 $n$인 실수의 열의 합이다. $r < i \le m$이면 사다리꼴의 (다)에 의해 $u_{i,k} = 0$이므로 모든 항이 [[real-number-arithmetic|(K9)]]에 의해 $0$이고, [[finite-sum-of-vectors|벡터의 유한 합]]의 (H5)에 의해 합은 $0$이다.

이제 $w$가 $N$에서 $0$이고 $1 \le i \le r$이라 하자. $k$번째 항 $u_{i,k} w_k$를 본다. $k \in N$이면 $w_k = 0$이므로 (K9)에 의해 이 항은 $0$이다. $k = \ell_j$이고 $j \ne i$이면, 사다리꼴의 (라)에 의해 $U$의 $\ell_j$번째 열은 $e_j$이므로 $u_{i,\ell_j}$는 $e_j$의 $i$번째 값 $0$이고 이 항은 $0$이다. $k = \ell_i$이면 같은 이유로 $u_{i,\ell_i} = 1$이고 이 항은 $1 \cdot w_{\ell_i} = w_{\ell_i}$이다((K1), (K4)). (☆)에 의해 $\ell_i$가 아닌 모든 $k$는 앞의 두 경우 가운데 하나이므로, 벡터의 유한 합의 (H7)에 의해 합은 $w_{\ell_i}$이다.

**존재.** $r < i \le m$인 모든 $i$에서 $c_i = 0$이라 하고, $f : N \to \mathbb{R}$를 잡는다. [[real-function-space|(G)]]에 의해 진술의 $f'$이 있다. (☆)에 의해 각 $k \in \{1, \dots, n\}$에 대해, $k \in N$이면 $0$을, $k = \ell_j$이면 $c_j - (Uf')_j$를 정할 수 있으므로($(Uf')_j$는 $Uf'$의 $j$번째 값이다), (G)에 의해 이 값을 갖는 $w \in \mathbb{R}^n$이 있다. $x = f' + w$라 하자.

$k \in N$이면 $x_k = f(k) + 0 = f(k)$이다((K4)). $1 \le j \le r$이면 $\ell_j \notin N$이므로 $x_{\ell_j} = 0 + (c_j - (Uf')_j) = c_j - (Uf')_j$이고, 행 규칙에 의해 $(Uf')_j = u_{j,1} f'_1 + \cdots + u_{j,n} f'_n$이므로 진술의 식이 성립한다. $T_U$가 선형사상이므로 $Ux = Uf' + Uw$이다. $1 \le i \le r$이면 (1)에 의해 $Uw$의 $i$번째 값은 $w_{\ell_i} = c_i - (Uf')_i$이므로 $Ux$의 $i$번째 값은 $(Uf')_i + (c_i - (Uf')_i) = c_i$이다((K1), (K2), (K4), $-a$의 정의). $r < i \le m$이면 (1)에 의해 $Ux$의 $i$번째 값은 $0 = c_i$이다. 따라서 $Ux = c$이다.

**유일성.** $x$, $x'$이 해이고 모든 $k \in N$에서 $x_k = x'_k$라 하자. $z = x - x'$이라 하면 [[linear-map|선형사상]]의 (T2)에 의해 $Uz = Ux - Ux' = c - c$이고 [[vector-space-basic-properties|(B12)]]에 의해 이것은 영벡터이다. $k \in N$이면 $z_k = x_k - x'_k = 0$이다([[real-number-arithmetic|(K12)]]의 (v)). (1)에 의해 $1 \le j \le r$에서 $z_{\ell_j}$는 $Uz$의 $j$번째 값이므로 $0$이다. (☆)에 의해 모든 $k$에서 $z_k = 0$이고, $z$는 영벡터이며, (B12)에 의해 $x = x'$이다.

**(2)의 증명.** $Ux = c$인 $x$가 있으면, (1)에 의해 $r < i \le m$에서 $c_i$는 $Ux$의 $i$번째 값 $0$이다. 거꾸로 $r < i \le m$에서 $c_i = 0$이면, 위의 존재를 $N$에서 값이 모두 $0$인 함수 $f$에 쓰면 해가 있다.

**(3)의 증명.** 해가 있으면 (2)에 의해 $r < i \le m$에서 $c_i = 0$이므로, 위의 존재와 유일성에 의해 결론이 나온다.

**(4)의 증명.** $x_0$이 해라 하자. [[system-of-linear-equations|연립일차방정식]]의 (2)에 의해 해집합은 $\{x_0 + h : h \in \operatorname{Ker} T_U\}$이다. $\operatorname{Ker} T_U = \{0\}$이면 해집합은 $\{x_0 + 0\} = \{x_0\}$이다(벡터의 유한 합의 (H0)과 [[vector-space|(V1)]]). 거꾸로 해가 하나뿐이고 $h \in \operatorname{Ker} T_U$이면 $x_0 + h$가 해이므로 $x_0 + h = x_0 = x_0 + 0$이고, (V1)과 (B7)에 의해 $h = 0$이다. [[kernel-and-range|핵]]은 부분공간이므로 [[subspace|(S1)]]에 의해 $0$을 원소로 가지고, 따라서 $\operatorname{Ker} T_U = \{0\}$이다. 곧 해가 하나뿐인 것은 정확히 $\operatorname{Ker} T_U = \{0\}$일 때이다. [[injective-iff-trivial-kernel|단사와 핵]]의 (1)에 의해 이것은 $T_U$가 단사일 때이고, [[rank-of-a-matrix|행렬의 계수]]의 (2)에 의해 $\operatorname{rank} U = n$일 때이며, 사다리꼴의 (6)에 의해 $\operatorname{rank} U = r$이므로 $r = n$일 때이다.

**(5)의 증명.** $r = m$이면 $r < i \le m$인 $i$가 (L1)에 의해 없으므로 (2)의 조건이 모든 $c$에서 저절로 성립한다. 거꾸로 $r \ne m$이면 $r \le m$이므로 $r < m$이다. $c = e_m$([[standard-basis|표준기저]]의 벡터)이라 하면 $r < m \le m$이고 $c_m = 1 \ne 0$이므로((K4)) (2)에 의해 $Ux = e_m$의 해가 없다.

**(6)의 증명.** $(B \mid d)$의 피벗의 개수를 $s$, 피벗 열의 번호를 $p_1, \dots, p_s$라 하자. 연립일차방정식의 (3)에 의해 $(B \mid d)$의 처음 $n$개의 열은 $B$의 열이므로, [[matrix|행렬]]의 (3)에 의해 $(B \mid d)$의 처음 $n$개의 열로 된 행렬은 $B$이다. 사다리꼴의 (4)를 $k = n$에 쓰면 $B$는 기약 사다리꼴이고, 그 피벗의 자리는 $p_j \le n$인 $(j, p_j)$들이다. 또 $(B \mid d)$의 $(j, n + 1)$ 성분은 $d_j$이다(연립일차방정식의 (3)).

$n + 1$이 자유 열의 번호라 하자. 모든 $j \le s$에서 $p_j \le n + 1$이고 $p_j \ne n + 1$이므로 $p_j \le n$이다. 따라서 사다리꼴의 (4)에 의해 $B$의 피벗의 개수는 $s$이다($s = 0$이면 $0$). $s < i \le m$이면 $(B \mid d)$의 (다)에 의해 $i$번째 행이 영행이므로 $d_i = 0$이고, (2)를 $U = B$에 쓰면 해가 있다.

$n + 1$이 자유 열의 번호가 아니라 하자. 그러면 $p_t = n + 1$인 $t \in \{1, \dots, s\}$가 있다. $t < s$이면 사다리꼴의 (2)에 의해 $n + 1 = p_t < p_s \le n + 1$이 되어 (L1)에 어긋나므로, (Z5)에 의해 $t = s$이다. $j < s$이면 $p_j < p_s = n + 1$이므로 $p_j \le n$이다. 따라서 사다리꼴의 (4)에 의해 $B$의 피벗의 개수는 $s - 1$이다($s = 1$이면 $p_1 \le n$인 $j$가 없으므로 $0$이다). $(B \mid d)$의 (라)에 의해 $(n + 1)$번째 열 $d$는 $e_s$이므로 $d_s = 1 \ne 0$이고, $s - 1 < s \le m$이므로 (2)를 $U = B$에 쓰면 해가 없다.

**(7)의 증명.** [[row-reduction|행 소거]]의 (2)를 $m \times (n + 1)$ 행렬 $(A \mid b)$에 쓰면 그런 $E$가 있다. 연립일차방정식의 (4)에 의해 $E(A \mid b) = (EA \mid Eb)$이고, (6)에 의해 $EA$는 기약 사다리꼴이다. [[row-equivalence|행 동치]]의 (5)에 의해 $Ax = b$의 해집합은 $(EA)x = Eb$의 해집합과 같다. $\blacksquare$
:::

## 예시와 반례

:::example[자유 자리가 둘인 연립방정식]
$$U = \begin{pmatrix} 1 & 0 & -1 & 2 \\ 0 & 1 & 2 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}, \qquad c = (3, -1, 0)$$
이라 합시다. $U$는 $r = 2$, $\ell_1 = 1$, $\ell_2 = 2$인 기약 사다리꼴이고 $N = \{3, 4\}$입니다. $c_3 = 0$이므로 (2)에 의해 해가 있습니다. 자유 자리의 값을 $f(3) = s$, $f(4) = t$로 정하면 $f' = (0, 0, s, t)$이고 $(Uf')_1 = -s + 2t$, $(Uf')_2 = 2s + t$이므로, (3)에 의해 해는
$$x = (3 + s - 2t,\ -1 - 2s - t,\ s,\ t)$$
하나입니다. 예를 들어 $s = 1$, $t = 0$이면 $x = (4, -3, 1, 0)$이고, 실제로 첫째 식 $x_1 - x_3 + 2x_4 = 4 - 1 + 0 = 3$, 둘째 식 $x_2 + 2x_3 + x_4 = -3 + 2 + 0 = -1$이 성립합니다. $r = 2 < 4 = n$이므로 (4)에 의해 해는 하나가 아니고, $r = 2 < 3 = m$이므로 (5)에 의해 해가 없는 우변이 있습니다.
:::

:::counterexample[피벗 아래의 우변이 0이 아니면 해가 없다]
같은 $U$와 $c = (3, -1, 5)$이면 $c_3 = 5 \ne 0$이므로 (2)에 의해 해가 없습니다. 실제로 셋째 식은 $0x_1 + 0x_2 + 0x_3 + 0x_4 = 5$이고 왼쪽은 언제나 $0$입니다. 첨가행렬로 보면, $c = e_3 = (0, 0, 1)$일 때
$$(U \mid e_3) = \begin{pmatrix} 1 & 0 & -1 & 2 & 0 \\ 0 & 1 & 2 & 1 & 0 \\ 0 & 0 & 0 & 0 & 1 \end{pmatrix}$$
는 피벗이 셋($\ell_3 = 5$)인 기약 사다리꼴이고, 마지막 열이 피벗 열이므로 (6)에 의해 $Ux = e_3$의 해가 없습니다. 반면 $c = (3, -1, 0)$이면 $(U \mid c)$는 피벗이 둘인 기약 사다리꼴이고 마지막 열이 자유 열이어서 해가 있습니다.
:::

## 확인 질문

:::check[$U = \begin{pmatrix} 1 & 4 & 0 \\ 0 & 0 & 1 \end{pmatrix}$, $c = (5, 2)$일 때 둘째 자리의 값이 $-1$인 해는 무엇인가?]
$x = (9, -1, 2)$입니다. $r = 2$, $\ell_1 = 1$, $\ell_2 = 3$이고 $N = \{2\}$이며, $r = m$이므로 해가 있습니다. $f(2) = -1$이면 $f' = (0, -1, 0)$이고 $(Uf')_1 = 4 \cdot (-1) = -4$, $(Uf')_2 = 0$이므로 (3)에 의해 $x_1 = 5 - (-4) = 9$, $x_3 = 2 - 0 = 2$입니다. 실제로 $9 + 4(-1) = 5$이고 $x_3 = 2$입니다.
:::

:::check[$m \times n$ 기약 사다리꼴 $U$에 대하여 $Ux = c$가 모든 $c$에서 해를 정확히 하나씩 가지면 $U$는 무엇인가?]
$m = n$이고 $U = I_n$입니다. (5)에 의해 $r = m$이고, 해가 있으므로 (4)에 의해 $r = n$입니다. 따라서 $U$는 피벗이 $n$개인 $n \times n$ 기약 사다리꼴이고, [[echelon-form|사다리꼴]]의 (5)에 의해 $U = I_n$입니다.
:::
