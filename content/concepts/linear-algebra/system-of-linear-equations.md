---
title: 연립일차방정식
title_en: System of Linear Equations
aliases: [일차연립방정식, 선형연립방정식, 해집합, 계수행렬, 첨가행렬, 동차 연립일차방정식, 제차 연립방정식, system of linear equations, linear system, solution set, coefficient matrix, augmented matrix, homogeneous system]
kind: definition
field: linear-algebra
msc: ["15A06"]
level: undergrad
summary: m × n 행렬 A 와 b ∈ ℝᵐ 에 대하여 Ax = b 인 x ∈ ℝⁿ 을 연립일차방정식의 해라 하고, 열을 옆으로 이어 붙인 첨가행렬 (A | b) 를 정한다. 해는 m 개의 식을 모두 만족하는 것과 같고, 동차방정식의 해집합은 핵이며, 해가 하나 있으면 해집합은 그 해에 핵의 원소를 더한 것 전체이고, 왼쪽에 곱한 행렬은 이어 붙인 두 부분에 따로 곱해진다.
requires: [prime-number, even-and-odd, well-ordering-principle, real-number-arithmetic, vector-space-basic-properties, real-function-space, finite-sum-of-vectors, linear-combination-and-span, subspace, linear-map, kernel-and-range, injective-iff-trivial-kernel, matrix, matrix-vector-product, matrix-product]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "2장 1절 Different faces of linear systems, pp.39–40; 6절 General solution of a linear system 의 동차 연립방정식의 정의와 Theorem 6.1, p.57; 7절 Fundamental subspaces of a matrix. Rank. 의 첫머리, p.60"
    checked: original
    note: "출처는 1절(pp.39–40)에서 연립일차방정식을 미지수 x_1, …, x_n 에 관한 m 개의 일차방정식으로 적은 뒤, 같은 것을 행렬과 벡터의 방정식 Ax = b 로, 다시 열의 일차결합 x_1a_1 + … + x_na_n = b 로 쓸 수 있다고 적는다. 이 항목은 Ax = b 를 정의로 삼고 m 개의 식과 같은 조건이라는 것을 (1)로 증명한다. 출처는 A 를 계수행렬(coefficient matrix), A 에 열 b 를 붙인 행렬을 첨가행렬(augmented matrix)이라 부르고 세로줄로 A 와 b 를 가른다고 적는다(p.40). 출처는 b 를 열(column)로 다루지만 이 강의에서 b 는 ℝᵐ 의 원소이므로, 이 항목은 (A | b) 를 '마지막 열이 b 인 행렬'로 matrix 항목의 (4)로 정의한다. 두 행렬을 옆으로 이어 붙인 (A | B) 의 일반형은 출처에 정의되어 있지 않다(출처는 (A | b) 와 4절 p.52 의 (A | I) 를 따로 적는다). 출처는 2절 2.1.1(p.42)에서 첨가행렬에 행 연산을 하는 것이 연립방정식에 왼쪽에서 행렬 E 를 곱하는 것과 같다고 적지만, E(A | b) = (EA | Eb) 를 식으로 적지는 않는다. 4절(p.53)에서 (A | I) 가 (EA | E) 로 바뀐다고 적는다. 이 항목의 (4)는 이것을 일반형으로 증명한다. 동차(homogeneous)의 정의와 일반해의 정리 Theorem 6.1 은 6절(p.57)에 있고, 출처는 x = x_1 + x_h 의 계산으로 증명한다. 이 항목은 그 정리를 injective-iff-trivial-kernel 의 (2)로 인용한다. '핵은 동차방정식의 해집합이고 상은 해가 있는 우변 전체'는 출처 7절 첫머리(p.60)에 적혀 있다. 동차방정식의 해집합이 부분공간이라는 것은 출처 연습문제 6.1 i(p.59)가 참·거짓으로 묻는다. 반례(해가 없는 연립방정식)는 출처 연습문제 6.1 a, d(p.59)가 묻는 것과 같은 발상이다. 예시는 특수해와 동차방정식의 해를 넣어 확인하고 (2)로 둘의 합도 해임을 보이는데, 이것은 출처 6절 p.58 의 예(Theorem 6.1 로 일반해를 확인하는 방법)와 같은 발상이다. 행렬과 수는 다르다(출처는 4 × 5). 예시의 첫째 식의 왼쪽 x_1 + 2x_2 − x_3 은 출처 연습문제 2.1 a(p.46)의 첫째 식의 왼쪽과 같다(우변과 나머지 식은 다르다). 확인 질문은 출처 2절 연습문제 2.1(p.46)과 6절 연습문제 6.1, 6.2(p.59)를 다시 읽고 물음이 겹치지 않게 만들었다."
status: reviewed
review_note: "2026-11-16 작성자의 자기 검토 뒤 독립 검토 통과(전반 2회, 후반 1회). 기약 사다리꼴의 계수와 기본행렬의 작용을 진술에 더하고, 출처 메모, 헷갈리는 용어와 겹치는 글자, 직관의 일반화를 보완했다. 마지막 수정은 지휘자가 변경분을 확인했다."
added: 2026-11-16
---

:::statement
$m$, $n$이 자연수이고 $A$가 $m \times n$ [[matrix|행렬]], $b \in \mathbb{R}^m$이라 하자. $x \in \mathbb{R}^n$에 관한 방정식 $Ax = b$를 **계수행렬**(coefficient matrix)이 $A$이고 **우변**(right side)이 $b$인 **연립일차방정식**(system of linear equations)이라 한다. $Ax = b$인 $x \in \mathbb{R}^n$을 이 연립일차방정식의 **해**(solution)라 하고, 해 전체의 집합
$$\{x \in \mathbb{R}^n : Ax = b\}$$
를 **해집합**(solution set)이라 한다. $Ax$는 [[matrix-vector-product|행렬과 벡터의 곱]]이다. $b$가 $\mathbb{R}^m$의 영벡터일 때 연립일차방정식 $Ax = b$, 곧 $Ax = 0$을 **동차**(homogeneous)라 한다.

**이어 붙인 행렬.** $p$가 자연수이고 $B$가 $m \times p$ 행렬이라 하자. $n + p$는 자연수이다. $\{1, \dots, n + p\}$의 각 $k$는 $k \le n$이거나 $k \ge n + 1$이고 둘 가운데 하나만 성립하며, $k \ge n + 1$이면 $k - n$은 $1 \le k - n \le p$인 정수이다. 따라서 $k \le n$이면 $\mathbf{a}_k$를, $k \ge n + 1$이면 $\mathbf{b}_{k-n}$을 $k$번째 항으로 갖는 $\mathbb{R}^m$의 길이 $n + p$인 [[finite-sum-of-vectors|벡터의 열]]이 있고, [[matrix|행렬]]의 (4)에 의해 $k$번째 열이 이 항인 $m \times (n + p)$ 행렬이 정확히 하나 있다. 이 행렬을 $A$와 $B$를 **이어 붙인 행렬**이라 하고 $(A \mid B)$로 쓴다. 또 $b \in \mathbb{R}^m$이면, 첫째 열이 $b$인 $m \times 1$ 행렬을 $B$라 할 때([[matrix|행렬]]의 (4)에 의해 이런 행렬은 정확히 하나 있다) $(A \mid B)$를 $(A \mid b)$로 쓴다. 곧 $(A \mid b)$는 $k \le n$이면 $k$번째 열이 $\mathbf{a}_k$이고 $(n + 1)$번째 열이 $b$인 $m \times (n + 1)$ 행렬이다. $(A \mid b)$를 연립일차방정식 $Ax = b$의 **첨가행렬**(augmented matrix)이라 한다.

다음이 성립한다. $x = (x_1, \dots, x_n) \in \mathbb{R}^n$이고 $b = (b_1, \dots, b_m)$이다.

1. (성분으로 쓴 식) $x$가 $Ax = b$의 해인 것은 정확히 모든 $j \in \{1, \dots, m\}$에서
   $$a_{j,1} x_1 + \cdots + a_{j,n} x_n = b_j$$
   일 때이다. 왼쪽은 $k$번째 항이 $a_{j,k} x_k$인 실수의 열의 합이다.
2. (해집합의 꼴) 동차 연립일차방정식 $Ax = 0$의 해집합은 $\operatorname{Ker} T_A$이고 $\mathbb{R}^n$의 [[subspace|부분공간]]이다. $Ax = b$의 해가 있는 것은 정확히 $b \in \operatorname{Ran} T_A = \operatorname{span}(\mathbf{a}_1, \dots, \mathbf{a}_n)$일 때이다. $u \in \mathbb{R}^n$이 $Ax = b$의 해이면 해집합은 $\{u + h : h \in \operatorname{Ker} T_A\}$이다. ($T_A$는 행렬과 벡터의 곱의 (2)의 [[linear-map|선형사상]]이다.)
3. (이어 붙인 행렬의 성분과 분해) $(A \mid B)$의 $(j, k)$ 성분은 $k \le n$이면 $a_{j,k}$이고 $k \ge n + 1$이면 $b_{j,k-n}$이다. 특히 $(A \mid b)$의 $(j, n + 1)$ 성분은 $b_j$이다. $A'$이 $m \times n$ 행렬이고 $B'$이 $m \times p$ 행렬이며 $(A \mid B) = (A' \mid B')$이면 $A = A'$이고 $B = B'$이다. 특히 $b' \in \mathbb{R}^m$이고 $(A \mid b) = (A' \mid b')$이면 $A = A'$이고 $b = b'$이다. 또 모든 $m \times (n + p)$ 행렬 $M$은, 처음 $n$개의 열 $\mathbf{m}_1, \dots, \mathbf{m}_n$으로 된 $m \times n$ 행렬을 $A'$, $k$번째 열이 $\mathbf{m}_{n+k}$ ($1 \le k \le p$)인 $m \times p$ 행렬을 $B'$이라 하면 $M = (A' \mid B')$이다. 특히 모든 $m \times (n + 1)$ 행렬 $M$은 $M = (A' \mid \mathbf{m}_{n+1})$이다.
4. (왼쪽에 곱하기) $q$가 자연수이고 $E$가 $q \times m$ 행렬이면 $E(A \mid B) = (EA \mid EB)$이고 $E(A \mid b) = (EA \mid Eb)$이다.
:::

:::english
Let $m$, $n$ be natural numbers, let $A$ be an $m \times n$ matrix, and let $b \in \mathbb{R}^m$. The equation $Ax = b$ in the unknown $x \in \mathbb{R}^n$ is called the **system of linear equations** with **coefficient matrix** $A$ and **right side** $b$. An $x \in \mathbb{R}^n$ with $Ax = b$ is called a **solution** of the system, and the set of all solutions
$$\{x \in \mathbb{R}^n : Ax = b\}$$
is called the **solution set**. Here $Ax$ is the matrix–vector product. When $b$ is the zero vector of $\mathbb{R}^m$, the system $Ax = b$, that is, $Ax = 0$, is called **homogeneous**.

**Juxtaposed matrices.** Let $p$ be a natural number and $B$ an $m \times p$ matrix. Then $n + p$ is a natural number. Each $k$ in $\{1, \dots, n + p\}$ satisfies exactly one of $k \le n$ and $k \ge n + 1$, and if $k \ge n + 1$, then $k - n$ is an integer with $1 \le k - n \le p$. Hence there is a sequence of vectors of $\mathbb{R}^m$ of length $n + p$ whose $k$-th term is $\mathbf{a}_k$ if $k \le n$ and $\mathbf{b}_{k-n}$ if $k \ge n + 1$, and by (4) of the entry on matrices there is exactly one $m \times (n + p)$ matrix whose $k$-th column is this term. This matrix is called the matrix obtained by **juxtaposing** $A$ and $B$, written $(A \mid B)$. Also, if $b \in \mathbb{R}^m$ and $B$ is the $m \times 1$ matrix whose first column is $b$ (by (4) of the entry on matrices there is exactly one such matrix), we write $(A \mid b)$ for $(A \mid B)$. That is, $(A \mid b)$ is the $m \times (n + 1)$ matrix whose $k$-th column is $\mathbf{a}_k$ for $k \le n$ and whose $(n + 1)$-th column is $b$. The matrix $(A \mid b)$ is called the **augmented matrix** of the system $Ax = b$.

The following hold. Here $x = (x_1, \dots, x_n) \in \mathbb{R}^n$ and $b = (b_1, \dots, b_m)$.

1. (Equations in entries) $x$ is a solution of $Ax = b$ exactly when, for every $j \in \{1, \dots, m\}$,
   $$a_{j,1} x_1 + \cdots + a_{j,n} x_n = b_j.$$
   The left side is the sum of the sequence of reals whose $k$-th term is $a_{j,k} x_k$.
2. (Shape of the solution set) The solution set of the homogeneous system $Ax = 0$ is $\operatorname{Ker} T_A$, and it is a subspace of $\mathbb{R}^n$. The system $Ax = b$ has a solution exactly when $b \in \operatorname{Ran} T_A = \operatorname{span}(\mathbf{a}_1, \dots, \mathbf{a}_n)$. If $u \in \mathbb{R}^n$ is a solution of $Ax = b$, then the solution set is $\{u + h : h \in \operatorname{Ker} T_A\}$. ($T_A$ is the linear map of (2) of the entry on the matrix–vector product.)
3. (Entries and splitting of juxtaposed matrices) The $(j, k)$ entry of $(A \mid B)$ is $a_{j,k}$ if $k \le n$ and $b_{j,k-n}$ if $k \ge n + 1$. In particular, the $(j, n + 1)$ entry of $(A \mid b)$ is $b_j$. If $A'$ is an $m \times n$ matrix, $B'$ is an $m \times p$ matrix, and $(A \mid B) = (A' \mid B')$, then $A = A'$ and $B = B'$. In particular, if $b' \in \mathbb{R}^m$ and $(A \mid b) = (A' \mid b')$, then $A = A'$ and $b = b'$. Moreover, every $m \times (n + p)$ matrix $M$ satisfies $M = (A' \mid B')$, where $A'$ is the $m \times n$ matrix formed by the first $n$ columns $\mathbf{m}_1, \dots, \mathbf{m}_n$ and $B'$ is the $m \times p$ matrix whose $k$-th column is $\mathbf{m}_{n+k}$ ($1 \le k \le p$). In particular, every $m \times (n + 1)$ matrix $M$ satisfies $M = (A' \mid \mathbf{m}_{n+1})$.
4. (Multiplying on the left) If $q$ is a natural number and $E$ is a $q \times m$ matrix, then $E(A \mid B) = (EA \mid EB)$ and $E(A \mid b) = (EA \mid Eb)$.
:::

## 직관

연립일차방정식은 미지수 $n$개에 관한 일차식 $m$개를 한꺼번에 만족시키는 문제입니다. 이 항목의 (1)은 행렬의 말로 쓴 $Ax = b$가 바로 그 $m$개의 식이라는 뜻입니다. 행렬과 벡터의 곱의 $j$번째 값이 $j$번째 식의 왼쪽이기 때문입니다. 한편 $Ax$는 정의에 의해 $A$의 열들의 일차결합이므로, 해를 찾는 것은 "$A$의 열들을 몇 배씩 더해 $b$를 만드는 방법"을 찾는 것이기도 합니다. 이 항목의 (2)의 둘째 문장이 이 관점입니다.

식을 풀 때 미지수의 이름은 중요하지 않습니다. 필요한 것은 계수의 표와 우변뿐이므로, 둘을 한 표에 모은 첨가행렬 $(A \mid b)$만 들고 다니면 됩니다. 장부에 비유하면 계수행렬은 항목별 단가표이고, 우변은 맞춰야 할 합계 줄입니다. 비유가 맞는 곳은 표의 한 줄이 식 하나라는 점이고, 맞지 않는 곳은 장부의 합계는 계산 결과이지만 우변은 주어진 값이라는 점입니다.

이 항목의 (4)는 이 표를 다룰 때의 계산 규칙입니다. 행렬의 곱 $E(A \mid B)$는 열마다 따로 계산되므로, 붙여 놓은 두 부분에 $E$를 따로 곱한 뒤 다시 붙인 것과 같습니다. 그래서 첨가행렬에 $E$를 곱하면 계수행렬과 우변에 같은 $E$를 곱한 연립일차방정식 $(EA)x = Eb$의 첨가행렬이 됩니다.

## 성질의 증명

:::proof
이 증명에서 정수에 관해 쓰는 것은 다음이다. 정수끼리의 합과 차는 정수라는 것([[even-and-odd]]에서 증명 없이 받아들임), [[prime-number]]의 진술에서 받아들인 (Z1), [[well-ordering-principle|정렬 원리]] 항목의 (Z5)–(Z7)과 (L1)–(L3).

**정의에 쓰인 사실.** $n$, $p$는 양의 정수이므로 (Z7)에 의해 $n = n + 0 < n + p$이고, $0 < n$이므로 (Z6)에 의해 $0 < n + p$이다. $n + p$는 정수이므로 자연수이다. $k \in \{1, \dots, n + p\}$라 하자. (Z5)와 (Z1)에 의해 $k \le n$이거나 $k \ge n + 1$이다. $k \ge n + 1$이면 (L3)에 의해 $n < n + 1$이므로 (Z6)에 의해 $n < k$이고, (L1)에 의해 $k \le n$은 성립하지 않는다. 따라서 둘이 함께 성립하지는 않는다. $k \ge n + 1$이면 (Z7)에 의해 $k - n \ge 1$이고, $k \le n + p$이므로 (Z7)에 의해 $k - n \le p$이며, $k - n$은 정수이다. 따라서 $k - n \in \{1, \dots, p\}$이고 $\mathbf{b}_{k-n}$이 정해진다. 각 $k$에 $\mathbb{R}^m$의 원소가 하나씩 정해지므로 [[real-function-space|(G)]]에 의해 그 값을 항으로 갖는 벡터의 열이 있다. $(A \mid b)$의 열에 관한 문장은 $B$의 첫째 열 $\mathbf{b}_1$이 $b$이고, $p = 1$이면 $k \ge n + 1$인 $k \in \{1, \dots, n + 1\}$은 (L2)에 의해 $n + 1$뿐이며 그때 $k - n = 1$이라는 데서 나온다.

**(1)의 증명.** [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)(행 규칙)에 의해 $Ax$의 $j$번째 값은 $a_{j,1} x_1 + \cdots + a_{j,n} x_n$이다. [[real-function-space|실숫값 함수의 공간]]에서 $\mathbb{R}^m$의 두 원소가 같은 것은 정확히 모든 자리에서 값이 같을 때이므로, $Ax = b$인 것은 정확히 모든 $j \in \{1, \dots, m\}$에서 $a_{j,1} x_1 + \cdots + a_{j,n} x_n = b_j$일 때이다.

**(2)의 증명.** 행렬과 벡터의 곱의 (2)에 의해 모든 $x$에서 $T_A x = Ax$이다. 따라서 [[kernel-and-range|핵]]의 정의에 의해 $\{x \in \mathbb{R}^n : Ax = 0\} = \{x \in \mathbb{R}^n : T_A x = 0\} = \operatorname{Ker} T_A$이고, 핵과 상의 (1)에 의해 이것은 $\mathbb{R}^n$의 부분공간이다. 해가 있다는 것은 $Ax = b$, 곧 $T_A x = b$인 $x \in \mathbb{R}^n$이 있다는 것이고, 상의 정의에 의해 이것은 정확히 $b \in \operatorname{Ran} T_A$일 때이다. 행렬과 벡터의 곱의 (6)에 의해 $\operatorname{Ran} T_A = \operatorname{span}(\mathbf{a}_1, \dots, \mathbf{a}_n)$이다. 끝으로 $u$가 해이면 $T_A u = b$이므로 [[injective-iff-trivial-kernel|단사와 핵]]의 (2)를 $T = T_A$에 써서
$$\{x \in \mathbb{R}^n : Ax = b\} = \{x \in \mathbb{R}^n : T_A x = b\} = \{u + h : h \in \operatorname{Ker} T_A\}$$
를 얻는다.

**(3)의 증명.** 성분: [[matrix|행렬]]의 (4)에 의해 $(A \mid B)$의 $(j, k)$ 성분은 $k$번째 항의 $j$번째 값이다. $k \le n$이면 그 항은 $\mathbf{a}_k$이고 그 $j$번째 값은 행렬의 열의 정의에 의해 $a_{j,k}$이다. $k \ge n + 1$이면 그 항은 $\mathbf{b}_{k-n}$이고 그 $j$번째 값은 $b_{j,k-n}$이다. $(A \mid b) = (A \mid B)$이고 $B$의 첫째 열이 $b$이면, $k = n + 1$에서 $(j, n + 1)$ 성분은 $b_{j,1}$, 곧 $B$의 첫째 열 $b$의 $j$번째 값 $b_j$이다.

분해의 유일성: $(A \mid B) = (A' \mid B')$이라 하자. 두 행렬은 같은 $m \times (n + p)$ 행렬이므로 행렬의 (3)에 의해 모든 $k$에서 $k$번째 열이 같다. $k \in \{1, \dots, n\}$이면 $k \le n$이므로 양쪽의 $k$번째 열은 $\mathbf{a}_k$와 $\mathbf{a}'_k$이고, 따라서 $\mathbf{a}_k = \mathbf{a}'_k$이다. 행렬의 (3)에 의해 $A = A'$이다. $t \in \{1, \dots, p\}$이면 $k = n + t$는 (Z7)에 의해 $n + 1 \le k \le n + p$이고 $k - n = t$이므로, 양쪽의 $k$번째 열은 $\mathbf{b}_t$와 $\mathbf{b}'_t$이고 $\mathbf{b}_t = \mathbf{b}'_t$이다. 행렬의 (3)에 의해 $B = B'$이다. 첨가행렬의 경우: $(A \mid b) = (A \mid B)$, $(A' \mid b') = (A' \mid B')$이고 $B$, $B'$은 첫째 열이 각각 $b$, $b'$인 $m \times 1$ 행렬이다. 방금 보인 것에 의해 $A = A'$이고 $B = B'$이며, 따라서 두 행렬의 첫째 열 $b$와 $b'$도 같다.

분해: $M$이 $m \times (n + p)$ 행렬이라 하자. $k \in \{1, \dots, p\}$이면 (Z7)에 의해 $n + 1 \le n + k \le n + p$이므로 $\mathbf{m}_{n+k}$가 정해지고, 행렬의 (4)에 의해 위에서 말한 $A'$과 $B'$이 있다. $(A' \mid B')$의 $k$번째 열은 $k \le n$이면 $\mathbf{a}'_k = \mathbf{m}_k$이고, $k \ge n + 1$이면 $\mathbf{b}'_{k-n} = \mathbf{m}_{n + (k - n)} = \mathbf{m}_k$이다. 모든 열이 $M$의 열과 같으므로 행렬의 (3)에 의해 $M = (A' \mid B')$이다. $p = 1$이면 $B'$은 첫째 열이 $\mathbf{m}_{n+1}$인 $m \times 1$ 행렬이므로 $(A' \mid B') = (A' \mid \mathbf{m}_{n+1})$이다.

**(4)의 증명.** $(A \mid B)$는 $m \times (n + p)$ 행렬이고 $E$는 $q \times m$ 행렬이므로 곱 $E(A \mid B)$는 $q \times (n + p)$ 행렬이다. $EA$는 $q \times n$, $EB$는 $q \times p$ 행렬이므로 $(EA \mid EB)$도 $q \times (n + p)$ 행렬이다. [[matrix-product|행렬의 곱]]의 정의에 의해 $E(A \mid B)$의 $k$번째 열은 $E$와 $(A \mid B)$의 $k$번째 열의 곱이다. $k \le n$이면 이것은 $E\mathbf{a}_k$이고, 곱의 정의에 의해 $E\mathbf{a}_k$는 $EA$의 $k$번째 열이며, 이것은 $(EA \mid EB)$의 $k$번째 열이다. $k \ge n + 1$이면 이것은 $E\mathbf{b}_{k-n}$이고, 곱의 정의에 의해 $EB$의 $(k - n)$번째 열이며, 이것은 $(EA \mid EB)$의 $k$번째 열이다. 모든 열이 같으므로 행렬의 (3)에 의해 $E(A \mid B) = (EA \mid EB)$이다.

$b$의 경우: $B$를 첫째 열이 $b$인 $m \times 1$ 행렬이라 하면 방금 보인 것에 의해 $E(A \mid b) = E(A \mid B) = (EA \mid EB)$이다. 곱의 정의에 의해 $q \times 1$ 행렬 $EB$의 첫째 열은 $E\mathbf{b}_1 = Eb$이므로, $(EA \mid Eb)$의 정의에 쓰인 "첫째 열이 $Eb$인 $q \times 1$ 행렬"은 행렬의 (4)의 유일성에 의해 $EB$이다. 따라서 $E(A \mid b) = (EA \mid Eb)$이다. $\blacksquare$
:::

## 예시와 반례

:::example[식 두 개, 미지수 세 개]
연립방정식
$$x_1 + 2x_2 - x_3 = 3, \qquad 2x_1 + 4x_2 + x_3 = 0$$
은 이 항목의 (1)에 의해 계수행렬과 우변이
$$A = \begin{pmatrix} 1 & 2 & -1 \\ 2 & 4 & 1 \end{pmatrix}, \qquad b = (3, 0)$$
인 연립일차방정식 $Ax = b$와 같은 조건입니다. 첨가행렬은
$$(A \mid b) = \begin{pmatrix} 1 & 2 & -1 & 3 \\ 2 & 4 & 1 & 0 \end{pmatrix}$$
입니다. $u = (1, 0, -2)$를 넣으면 첫째 식의 왼쪽은 $1 + 0 + 2 = 3$, 둘째 식의 왼쪽은 $2 + 0 - 2 = 0$이므로 $u$는 해입니다. $h = (-2, 1, 0)$을 넣으면 $-2 + 2 + 0 = 0$, $-4 + 4 + 0 = 0$이므로 $h$는 동차방정식 $Ax = 0$의 해, 곧 $h \in \operatorname{Ker} T_A$입니다. 이 항목의 (2)에 의해 $u + h = (-1, 1, -2)$도 $Ax = b$의 해이고, 실제로 $-1 + 2 + 2 = 3$, $-2 + 4 - 2 = 0$입니다.
:::

:::counterexample[해가 없는 연립일차방정식]
$$A = \begin{pmatrix} 1 & 1 \\ 2 & 2 \end{pmatrix}, \qquad b = (1, 3)$$
이라 합시다. 이 항목의 (1)에 의해 $x = (x_1, x_2)$가 해인 것은 $x_1 + x_2 = 1$이고 $2x_1 + 2x_2 = 3$일 때입니다. 첫째 식이 성립하면 [[real-number-arithmetic|(K3)]]에 의해 $2x_1 + 2x_2 = 2(x_1 + x_2) = 2 \cdot 1 = 2$이고 (K7)에 의해 $2 \ne 3$이므로 둘째 식은 성립하지 않습니다. 따라서 이 연립일차방정식의 해집합은 공집합이고, 이 항목의 (2)에 의해 $b \notin \operatorname{Ran} T_A$입니다. 계수행렬이 같아도 우변을 $b = (1, 2)$로 바꾸면 $(1, 0)$이 해가 되므로, 해가 있는지는 계수행렬만으로 정해지지 않습니다.
:::

## 확인 질문

:::check[$A$가 $2 \times 2$ 행렬이고 $b = (b_1, b_2) \in \mathbb{R}^2$이면 첨가행렬 $(A \mid b)$의 $(2, 3)$ 성분과 $(1, 2)$ 성분은 무엇인가?]
$(A \mid b) = (A \mid B)$이고 $B$는 첫째 열이 $b$인 $2 \times 1$ 행렬입니다. 이 항목의 (3)에 의해 $3 \ge 2 + 1$이므로 $(2, 3)$ 성분은 $b_{2,3-2} = b_{2,1}$이고, 이것은 $B$의 첫째 열 $b$의 둘째 값 $b_2$입니다. $2 \le 2$이므로 $(1, 2)$ 성분은 $a_{1,2}$입니다.
:::

:::check[$u$와 $u'$이 모두 $Ax = b$의 해이면 $u - u'$은 어떤 연립일차방정식의 해인가?]
동차 연립일차방정식 $Ax = 0$의 해입니다. $T_A$가 선형사상이므로 [[linear-map|선형사상]]의 (T2)에 의해 $A(u - u') = Au - Au' = b - b$이고, [[vector-space-basic-properties|(B12)]]에 의해 $b - b = 0$입니다. 곧 $u - u' \in \operatorname{Ker} T_A$이고, 이것은 이 항목의 (2)의 "해집합은 $\{u' + h : h \in \operatorname{Ker} T_A\}$"와도 맞습니다.
:::
