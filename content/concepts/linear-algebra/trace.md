---
title: 대각합
title_en: Trace
aliases: [행렬의 대각합, 대각합 함수, 자취, trace, trace of a matrix]
kind: definition
field: linear-algebra
msc: ["15A15"]
level: undergrad
summary: n × n 행렬의 대각합 tr A 는 대각성분 a₁,₁, …, aₙ,ₙ 의 합이다. 대각합은 n × n 행렬 전체의 공간에서 ℝ 로의 선형사상이고, 전치해도 같으며, 단위행렬 Iₙ 의 대각합은 n 이다.
requires: [real-number-arithmetic, function, injective-surjective-bijective, mathematical-induction, vector-space, vector-space-basic-properties, real-function-space, finite-sum-of-vectors, linear-map, matrix, transpose]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 5절, 5.5 Trace and matrix multiplication 의 첫 문단, p.23; 5장 1절, 1.3 Inner product spaces 의 Example 1.3 앞 문단, p.120
    checked: original
    note: "출처는 1장 5.5(p.23)에서 정사각(n × n)행렬 A 의 대각합을 대각성분의 합 Σ a_{k,k} 로 정하고 trace A 로 쓰며, 5장 1.3(p.120)에서 같은 정의를 다시 적는다. 이 사이트는 tr A 로 쓰고 합은 벡터의 유한 합을 ℝ 에 쓴 것으로 쓴다. 출처는 1장 5.5 에서 Theorem 5.1 의 둘째 증명 방법을 귀띔하며 X 를 trace(AX) 로 보내는 함수를 선형변환이라 부른다. 책 전체에서 'trace' 가 나오는 곳(32건)과 'diagonal entr', 'sum of the diagonal' 로 찾은 곳을 읽었고, 그 가운데 이 항목의 (1)–(5)를 명제로 적은 곳은 없었다. (1)–(5)의 증명은 이 사이트가 썼다. 확인 질문 '$n \\times n$ 행렬 $A$가 $A^T = -A$를 만족하면 $\\operatorname{tr} A$는 무엇인가?' 의 행렬은 출처 3장 3절 연습문제 3.4(p.85)의 반대칭(skew-symmetric) 행렬과 같은 대상이다. 출처는 그 행렬의 행렬식을 묻는다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 경계 경우에서 거짓이던 설명 문장 4건과 출처에 해석을 돌린 메모 1건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$n$이 자연수이고 $A$가 $n \times n$ [[matrix|행렬]]이라 하자. 각 $k \in \{1, \dots, n\}$에 $A$의 대각성분([[matrix|행렬]]의 (6)) $a_{k,k}$가 하나씩 정해지므로 [[real-function-space|(G)]]에 의해 $k$번째 항이 $a_{k,k}$인 길이 $n$인 실수의 열이 있다. 그 [[finite-sum-of-vectors|합]]

$$
\operatorname{tr} A = a_{1,1} + \cdots + a_{n,n}
$$

을 $A$의 **대각합**(trace)이라 한다. 합, 곱, 스칼라배로 나타낸 행렬의 대각합은 $\operatorname{tr}(A + B)$, $\operatorname{tr}(AB)$처럼 괄호를 쳐 쓴다. 대각합은 정사각행렬에만 정의한다.

다음이 성립한다. $A$, $B$는 $n \times n$ 행렬이고 $\alpha$는 실수이다. $M_{n \times n}$은 [[matrix|행렬]]의 (1)의 덧셈과 스칼라배로 [[vector-space|벡터공간]]이고, $\mathbb{R}$은 [[real-function-space|실숫값 함수의 공간]]의 (2)에 의해 벡터공간이다.

1. $\operatorname{tr}(A + B) = \operatorname{tr} A + \operatorname{tr} B$이고 $\operatorname{tr}(\alpha A) = \alpha \operatorname{tr} A$이다. 따라서 각 $A \in M_{n \times n}$을 $\operatorname{tr} A$로 보내는 함수 $M_{n \times n} \to \mathbb{R}$(이 함수도 $\operatorname{tr}$로 쓴다)는 [[linear-map|선형사상]]이다.
2. 영행렬의 대각합은 $0$이다. 또 $\operatorname{tr}(-A) = -\operatorname{tr} A$이고 $\operatorname{tr}(A - B) = \operatorname{tr} A - \operatorname{tr} B$이다.
3. $\operatorname{tr} A^T = \operatorname{tr} A$이다. ($A^T$는 [[transpose|전치행렬]]이다.)
4. $\operatorname{tr} I_n = n$이다. 오른쪽의 $n$은 정수 $n$을 [[real-number-arithmetic|(K7)]]에 의해 실수로 본 것이다. 따라서 실수 $c$에 대하여 $\operatorname{tr}(c I_n) = nc$이다.
5. $n = 1$이면 $\operatorname{tr} A = a_{1,1}$이다.
:::

:::english
Let $n$ be a natural number and let $A$ be an $n \times n$ matrix. Since a diagonal entry $a_{k,k}$ of $A$ (item (6) of the entry on matrices) is assigned to each $k \in \{1, \dots, n\}$, by (G) there is a sequence of $n$ real numbers whose $k$-th term is $a_{k,k}$. Its sum

$$
\operatorname{tr} A = a_{1,1} + \cdots + a_{n,n}
$$

is called the **trace** of $A$. The trace of a matrix given by a sum, product or scalar multiple is written with parentheses, as in $\operatorname{tr}(A + B)$ and $\operatorname{tr}(AB)$. The trace is defined only for square matrices.

The following hold. $A$, $B$ are $n \times n$ matrices and $\alpha$ is a real number. $M_{n \times n}$ is a vector space under the addition and scalar multiplication of item (1) of the entry on matrices, and $\mathbb{R}$ is a vector space by item (2) of the entry on real function spaces.

1. $\operatorname{tr}(A + B) = \operatorname{tr} A + \operatorname{tr} B$ and $\operatorname{tr}(\alpha A) = \alpha \operatorname{tr} A$. Hence the function $M_{n \times n} \to \mathbb{R}$ sending each $A \in M_{n \times n}$ to $\operatorname{tr} A$ (this function is also written $\operatorname{tr}$) is a linear map.
2. The trace of the zero matrix is $0$. Also $\operatorname{tr}(-A) = -\operatorname{tr} A$ and $\operatorname{tr}(A - B) = \operatorname{tr} A - \operatorname{tr} B$.
3. $\operatorname{tr} A^T = \operatorname{tr} A$. ($A^T$ is the transpose.)
4. $\operatorname{tr} I_n = n$. The $n$ on the right is the integer $n$ regarded as a real number by (K7). Hence $\operatorname{tr}(c I_n) = nc$ for every real number $c$.
5. If $n = 1$, then $\operatorname{tr} A = a_{1,1}$.
:::

## 직관

정사각행렬의 성분 가운데 행 번호와 열 번호가 같은 자리, 곧 왼쪽 위에서 오른쪽 아래로 내려가는 대각선 위의 성분만 더한 것이 대각합입니다. 사람 $n$명이 서로 주고받은 돈을 $(j, k)$ 칸에 "$j$가 $k$에게 준 돈"으로 적은 표가 있다면, 대각선 칸은 각자가 자기에게 준 돈이고 대각합은 그 합계입니다. 두 표를 칸마다 더하면 대각선 칸도 더해지므로 합계도 더해지는데, 이것이 (1)의 $\operatorname{tr}(A + B) = \operatorname{tr} A + \operatorname{tr} B$입니다. 비유와 다른 점은 행렬의 성분이 음수를 포함한 아무 실수라는 것입니다.

$n \ge 2$이면 대각합은 행렬의 정보를 버립니다. 대각선 밖에 성분이 있고 그 성분은 대각합에 전혀 나타나지 않으므로, 대각합이 같은 서로 다른 $n \times n$ 행렬이 있습니다(아래 반례). $n = 1$이면 대각선 밖의 성분이 없고 대각합은 하나뿐인 성분 그 자체입니다((5)). 전치는 $(j, k)$ 성분과 $(k, j)$ 성분을 맞바꾸는데 대각선 위에서는 $j = k$라 아무것도 바뀌지 않으므로 (3)이 성립합니다. 단위행렬은 대각선에 $1$이 $n$개 있으므로 대각합이 크기 $n$과 같습니다((4)).

(4)에서 정수 $n$을 실수로 보는 것은, 대각합은 실수의 합인데 $n$은 행렬의 크기를 센 정수이기 때문입니다. 두 수가 같다는 것은 $1$을 하나씩 더해 가는 귀납으로 보이고, 그 각 걸음에서 정수의 덧셈과 실수의 덧셈이 같은 값을 준다는 (K7)을 씁니다.

## 성질의 증명

:::proof
아래에서 (H0), (H3), (H4)는 [[finite-sum-of-vectors|벡터의 유한 합]]의 것이고, 그 진술에 따라 실수의 합은 $V = \mathbb{R}$인 벡터의 유한 합이다. $\mathbb{R}$을 벡터공간으로 볼 때 덧셈은 실수의 합, 스칼라배는 실수의 곱이고([[real-function-space|실숫값 함수의 공간]]의 (2)), 영벡터는 실수 $0$이다(벡터의 유한 합의 "실수의 합" 단락). 같은 진술에 의해 길이가 같고 모든 자리의 항이 같은 두 실수의 열은 같은 열이고 같은 열의 합은 같다. 이것을 "같은 열의 합"이라 부른다. (K1), (K7), (K8)은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다.

**(1)의 증명.** [[matrix|행렬]]의 (1)에 의해 각 $k$에서 $(A + B)_{k,k} = a_{k,k} + b_{k,k}$이다. 따라서 $\operatorname{tr}(A + B)$는 $k$번째 항이 $a_{k,k} + b_{k,k}$인 실수의 열의 합이고, 두 열 $a_{1,1}, \dots, a_{n,n}$과 $b_{1,1}, \dots, b_{n,n}$에 (H3)을 쓰면 그 합은 $(a_{1,1} + \cdots + a_{n,n}) + (b_{1,1} + \cdots + b_{n,n}) = \operatorname{tr} A + \operatorname{tr} B$이다. 같은 (1)에 의해 각 $k$에서 $(\alpha A)_{k,k} = \alpha a_{k,k}$이므로 $\operatorname{tr}(\alpha A)$는 $k$번째 항이 $\alpha a_{k,k}$인 열의 합이다. (H4)를 $V = \mathbb{R}$에 쓰면(스칼라배는 실수의 곱이다) $\alpha(a_{1,1} + \cdots + a_{n,n}) = \alpha a_{1,1} + \cdots + \alpha a_{n,n}$이므로 $\operatorname{tr}(\alpha A) = \alpha \operatorname{tr} A$이다.

각 $A \in M_{n \times n}$에 실수 $\operatorname{tr} A$가 하나씩 정해지므로 (G)에 의해 $A$에서의 값이 $\operatorname{tr} A$인 함수 $M_{n \times n} \to \mathbb{R}$이 있다. 위의 두 등식은 이 함수가 [[linear-map|선형사상]]의 조건 (T-합)과 (T-배)를 만족한다는 것이다. 덧셈과 스칼라배는 정의역 쪽에서는 행렬의 (1)의 것, 공역 쪽에서는 실수의 합과 곱이다. 따라서 $\operatorname{tr}$은 선형사상이다.

**(2)의 증명.** (1)에 의해 $\operatorname{tr}$은 선형사상이므로 선형사상의 (T1)과 (T2)를 쓸 수 있다. 행렬의 (1)에 의해 $M_{n \times n}$의 영벡터는 영행렬이고, $\mathbb{R}$의 영벡터는 실수 $0$이므로 (T1)에 의해 영행렬의 대각합은 $0$이다. 행렬의 (1)에 의해 $M_{n \times n}$에서 $A$의 덧셈 역원은 성분이 $-a_{j,k}$인 행렬 $-A$이다. $\mathbb{R}$에서 실수 $x$의 덧셈 역원은 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B2)에 의해 $x + w = 0$인 하나뿐인 실수 $w$이고, (K8)의 (ii)에 의해 그 수는 실수 $-x$이다. 따라서 (T2)의 $T(-v) = -Tv$는 $\operatorname{tr}(-A) = -\operatorname{tr} A$가 된다. 또 (B2)에 의해 벡터공간에서 $u - v = u + (-v)$이고 실수의 뺄셈도 $x - y = x + (-y)$이므로, (T2)의 $T(u - v) = Tu - Tv$는 $\operatorname{tr}(A - B) = \operatorname{tr} A - \operatorname{tr} B$가 된다.

**(3)의 증명.** $A^T$는 $n \times n$ 행렬이고 [[transpose|전치행렬]]의 정의에 $k = j$를 넣으면 각 $k$에서 $(A^T)_{k,k} = a_{k,k}$이다. 따라서 $\operatorname{tr} A^T$를 정한 열과 $\operatorname{tr} A$를 정한 열은 모든 자리의 항이 같고, 같은 열의 합에 의해 $\operatorname{tr} A^T = \operatorname{tr} A$이다.

**(4)의 증명.** 먼저 다음을 보인다: 정수 $p \ge 0$마다, 모든 항이 $1$인 길이 $p$인 실수의 열의 합은 정수 $p$를 실수로 본 것과 같다. $p$에 대한 [[mathematical-induction|수학적 귀납법]](시작점이 $0$인 꼴)을 쓴다. $p = 0$이면 합의 정의에 의해 빈 열의 합은 영벡터, 곧 실수 $0$이고, (K7)에 의해 정수 $0$은 실수 $0$이다. 정수 $p \ge 0$에서 성립한다고 하자. 모든 항이 $1$인 길이 $p + 1$인 열의 처음 $p$개는 모든 항이 $1$인 길이 $p$인 열이므로, 합의 재귀 정의와 귀납 가정에 의해 그 합은 실수의 덧셈 $p + 1$이다. (K7)에 의해 이것은 정수로서 계산한 $p + 1$과 같은 수이다. 따라서 $p + 1$에서도 성립한다.

[[matrix|행렬]]의 (6)에 의해 $I_n$의 대각성분은 모두 $1$이므로 $\operatorname{tr} I_n$은 모든 항이 $1$인 길이 $n$인 열의 합이고, 위의 사실에 의해 $n$이다. 실수 $c$에 대하여 (1)에 의해 $\operatorname{tr}(c I_n) = c \operatorname{tr} I_n = cn$이고, (K1)에 의해 이것은 $nc$이다.

**(5)의 증명.** $n = 1$이면 $\operatorname{tr} A$는 첫째 항이 $a_{1,1}$인 길이 $1$인 열의 합이므로 (H0)에 의해 $a_{1,1}$이다. $\blacksquare$
:::

## 예시와 반례

:::example[3 × 3 행렬의 대각합]
$$
A = \begin{pmatrix} 2 & -1 & 5 \\ 0 & 3 & 4 \\ 7 & 1 & -6 \end{pmatrix}
$$

의 대각성분은 $2$, $3$, $-6$이므로 $\operatorname{tr} A = (2 + 3) + (-6) = -1$입니다. 대각선 밖의 성분 $-1$, $5$, $0$, $4$, $7$, $1$은 쓰이지 않습니다. $A^T$의 대각성분도 $2$, $3$, $-6$이므로 $\operatorname{tr} A^T = -1$로 (3)과 맞습니다. (1), (2), (4)를 함께 쓰면 $\operatorname{tr}(2A - I_3) = 2 \operatorname{tr} A - \operatorname{tr} I_3 = -2 - 3 = -5$이고, $2A - I_3$의 대각성분 $3$, $5$, $-13$을 직접 더해도 $-5$입니다.
:::

:::counterexample[대각합이 0 이지만 영행렬이 아닌 2 × 2 행렬]
$$
A = \begin{pmatrix} 1 & 5 \\ -2 & -1 \end{pmatrix}
$$

의 대각합은 $1 + (-1) = 0$이지만 $A$는 영행렬이 아닙니다. 영행렬의 대각합도 $0$((2))이므로, 대각합이 같은 두 행렬이 같은 행렬이라고 할 수는 없습니다. 선형사상의 말로 하면 $\operatorname{tr} : M_{2 \times 2} \to \mathbb{R}$은 [[injective-surjective-bijective|단사]]가 아닙니다.
:::

## 확인 질문

:::check[$n \times n$ 행렬 $A$가 $A^T = -A$를 만족하면 $\operatorname{tr} A$는 무엇인가?]
(3)과 (2)에 의해 $\operatorname{tr} A = \operatorname{tr} A^T = \operatorname{tr}(-A) = -\operatorname{tr} A$이므로 $\operatorname{tr} A + \operatorname{tr} A = 0$입니다. [[real-number-arithmetic|실수의 계산 법칙]]의 (K4)와 (K1)에 의해 $\operatorname{tr} A = 1 \cdot \operatorname{tr} A$이므로, (K12)의 (i)와 (K7)의 $1 + 1 = 2$에 의해 왼쪽은 $(1 + 1)\operatorname{tr} A = 2 \operatorname{tr} A$이고, $2 \ne 0$((K7))이므로 (K10)에 의해 $\operatorname{tr} A = 0$입니다.
:::

:::check[$4 \times 4$ 행렬 $A$의 대각합이 $5$이면 $\operatorname{tr}(3 I_4 - A)$는 무엇인가?]
(2)와 (4)에 의해 $\operatorname{tr}(3 I_4 - A) = \operatorname{tr}(3 I_4) - \operatorname{tr} A = 4 \cdot 3 - 5 = 7$입니다.
:::
