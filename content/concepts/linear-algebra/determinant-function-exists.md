---
title: 행렬식 함수의 존재
title_en: Existence of the Determinant Function
aliases: [행렬식의 존재, 첫째 열 전개로 만든 행렬식, existence of the determinant]
kind: theorem
field: linear-algebra
msc: ["15A15"]
level: undergrad
summary: 크기가 하나 작은 행렬식 함수가 있으면, 첫째 열의 성분과 부호와 소행렬의 값을 곱한 것들을 더하는 함수가 행렬식 함수이다. 크기에 대한 귀납으로 모든 자연수 n 에 n × n 행렬식 함수가 있다.
requires: [prime-number, well-ordering-principle, even-and-odd, mathematical-induction, real-number-arithmetic, real-function-space, finite-sum-of-vectors, matrix, elementary-matrix, power-of-a-real-number, minor-matrix, determinant-function]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 4절 Formal definition. Existence and uniqueness of the determinant, pp.86–89; 5절 Cofactor expansion 의 Theorem 5.1 과 증명, pp.90–91; 같은 절의 Remark, p.92"
    checked: original
    note: "출처는 4절(p.89)에서 행렬식을 치환에 대한 합 (4.2)로 정의하면 기본 성질 1–3 을 만족한다는 것을 확인하기 쉽다고 하고, 각 열의 선형성, 두 열을 맞바꾸면 부호가 바뀐다는 것, 단위행렬에서 1 이라는 것을 한 문장씩 적는다. 5절의 Remark(p.92)는 여인수 전개의 식을 행렬식의 정의로 쓰는 일이 많다고 하고, 그 식이 기본 성질을 만족한다는 것을 보이는 일에 대해 정규화는 자명하고 반대칭은 쉬우며 선형성은 조금 번거롭다(그리 어렵지는 않다)고 적는다. 이 항목은 그 길을 따르되 행에 대한 조건으로 증명한다. 선형성은 j = p 인 항과 j ≠ p 인 항으로 나눠 확인하고, 조건 (ii)는 이웃한 두 행만 확인한 뒤 행렬식 함수 항목의 (4)를 쓴다. 출처의 Theorem 5.1(p.90)은 행렬식이 있다고 놓고 그것이 행과 열의 전개식을 만족한다는 정리이고, 그 증명은 첫째 행에서 성분 하나만 0 이 아닌 경우를 열 연산과 삼각행렬로 계산한 뒤 첫째 행의 선형성으로 합친다(pp.90–91). 이 항목의 (1)은 전개식으로 새 함수를 만들어 그것이 행렬식 함수임을 보이는 것이므로 방향이 다르다. 출처 4절의 식 (4.1)(p.87)은 첫째 열의 선형성으로 D(v₁, …, vₙ) 을 a_{j,1}D(e_j, v₂, …, vₙ) 들의 합으로 펼치는데, 첫째 열을 따라 펼친다는 점에서 (1)의 식과 같은 발상이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 뒤 항목을 인용하던 확인 질문 1건, 틀린 근거 번호 1건, 출처의 말을 틀리게 옮긴 메모 1건, 조건이 빠진 설명 문장 3건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
[[determinant-function|행렬식 함수]]와 그 조건 (i)–(iii)은 그 항목에서 정한 것이고, 소행렬 $A^{(j,1)}$은 [[minor-matrix|소행렬]]의 것이다. 부호 $(-1)^{j+1}$은 [[power-of-a-real-number|실수의 거듭제곱]]의 것이고, 실수의 열의 합은 [[finite-sum-of-vectors|벡터의 유한 합]]을 $\mathbb{R}$에 쓴 것이다.

1. (첫째 열로 만든 함수) $n$이 $2$ 이상인 자연수이고 $\Delta'$이 $(n - 1) \times (n - 1)$ 행렬식 함수라 하자. $A \in M_{n \times n}$마다, $j$번째 항이 $(-1)^{j+1} a_{j,1}\,\Delta'(A^{(j,1)})$인 길이 $n$인 실수의 열의 합을 $\Delta(A)$라 하자. 곧
   $$
   \begin{aligned}
   \Delta(A) &= (-1)^{1+1} a_{1,1}\,\Delta'(A^{(1,1)}) \\
   &\quad + \cdots \\
   &\quad + (-1)^{n+1} a_{n,1}\,\Delta'(A^{(n,1)})
   \end{aligned}
   $$
   이다. 그러면 $A$를 $\Delta(A)$로 보내는 함수 $\Delta : M_{n \times n} \to \mathbb{R}$는 $n \times n$ 행렬식 함수이다.
2. (존재) 모든 자연수 $n$에 대하여 $n \times n$ 행렬식 함수가 있다.
:::

:::english
Determinant functions and their conditions (i)–(iii) are as in the entry on determinant functions, and the minor matrices $A^{(j,1)}$ are as in the entry on minor matrices. The sign $(-1)^{j+1}$ is the power from the entry on powers of real numbers, and sums of sequences of real numbers are finite sums of vectors applied to $\mathbb{R}$.

1. (A function built from the first column) Let $n$ be a natural number with $n \ge 2$ and let $\Delta'$ be an $(n - 1) \times (n - 1)$ determinant function. For $A \in M_{n \times n}$, let $\Delta(A)$ be the sum of the sequence of real numbers of length $n$ whose $j$-th term is $(-1)^{j+1} a_{j,1}\,\Delta'(A^{(j,1)})$. That is,
   $$
   \begin{aligned}
   \Delta(A) &= (-1)^{1+1} a_{1,1}\,\Delta'(A^{(1,1)}) \\
   &\quad + \cdots \\
   &\quad + (-1)^{n+1} a_{n,1}\,\Delta'(A^{(n,1)}).
   \end{aligned}
   $$
   Then the function $\Delta : M_{n \times n} \to \mathbb{R}$ sending $A$ to $\Delta(A)$ is an $n \times n$ determinant function.
2. (Existence) For every natural number $n$ there is an $n \times n$ determinant function.
:::

## 직관

$2 \times 2$ 행렬에서 첫째 열을 따라 읽으면 $a_{1,1}a_{2,2} - a_{2,1}a_{1,2}$는 "$a_{1,1}$ 곱하기 그 행과 열을 지운 나머지, 빼기 $a_{2,1}$ 곱하기 그 행과 열을 지운 나머지"입니다. (1)은 이 읽는 법을 모든 크기로 넓힙니다. 크기가 하나 작은 행렬식 함수가 이미 있으면, 첫째 열의 성분마다 그 행과 첫째 열을 지운 소행렬의 값을 곱하고 부호를 번갈아 붙여 더한 것이 다시 행렬식 함수가 됩니다. $1 \times 1$에서 시작해 크기를 하나씩 키우면 모든 크기에 행렬식 함수가 생깁니다.

세 조건을 확인하는 일은 소행렬이 행 하나의 변화에 어떻게 따라 움직이는지에 달려 있습니다. $p$번째 행만 바꾸면, $p$번째 항에서 바뀔 수 있는 것은 성분 $a_{p,1}$뿐이고 소행렬은 그대로이며, 다른 항에서는 성분은 그대로이고 소행렬에서 바뀔 수 있는 것은 한 행뿐입니다. 어느 쪽이든 그 항이 바뀐 행에 대해 선형입니다. 이웃한 두 행이 같으면 그 두 행을 지운 두 항은 소행렬이 같고 부호만 반대여서 서로 지워지고, 나머지 항은 소행렬에 같은 두 행이 남아 $0$입니다. 떨어진 두 행이 같으면 소행렬이 같지 않을 수 있어서(소행렬 항목의 반례) 이 방법이 바로 통하지 않으므로, 이웃한 두 행만 확인하고 [[determinant-function|행렬식 함수]]의 (4)로 넘어갑니다.

## 증명

:::idea
조건 (i)은 각 항이 바뀐 행에 대해 선형임을 보이고 합의 성질 (H3), (H4)로 더한다. (ii)는 이웃한 두 행이 같을 때 두 항이 지워지고 나머지가 $0$임을 보인 뒤 행렬식 함수의 (4)를 쓴다. (iii)은 $I_n$의 첫째 열에서 첫째 항만 남는다는 것이다. (2)는 $n$에 대한 귀납법이다.
:::

:::hint
$j \ne p$인 항에서 $a_{j,1}$은 $A$, $B$, $C$에서 같습니다. 남는 것은 세 소행렬 $A^{(j,1)}$, $B^{(j,1)}$, $C^{(j,1)}$ 사이의 관계이고, 그것은 소행렬 항목의 (3)에 있습니다.
:::

:::hint
$p$번째 항과 $p + 1$번째 항의 부호는 $(-1)^{p+1}$과 $(-1)^{p+2} = (-1)^{p+1}(-1)$입니다.
:::

:::proof
[[determinant-function|행렬식 함수]] 항목의 번호는 "행렬식 함수의 (n)", [[minor-matrix|소행렬]] 항목의 번호는 "소행렬의 (n)"으로 인용한다. $\mathbb{R}$은 실수의 합과 곱으로 벡터공간이고([[real-function-space|실숫값 함수의 공간]]의 명제 (2)), 그 영벡터는 $0$이다([[finite-sum-of-vectors|벡터의 유한 합]]의 진술). 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 번호로, 정수의 순서는 [[prime-number]]의 진술에서 받아들인 (Z1)과 [[well-ordering-principle|정렬 원리]] 항목의 (Z5)–(Z7)로 인용한다. 정수끼리의 합이 정수라는 것은 [[even-and-odd]]에서 받아들인 것이다.

**(1)의 증명.** $A \in M_{n \times n}$과 $j \in \{1, \dots, n\}$마다 실수 $t_j(A) = (-1)^{j+1} a_{j,1}\,\Delta'(A^{(j,1)})$가 하나 정해지므로, [[real-function-space|(G)]]에 의해 $j$번째 항이 $t_j(A)$인 길이 $n$인 실수의 열이 있고 그 합 $\Delta(A)$가 정해진다. 다시 (G)에 의해 $\Delta : M_{n \times n} \to \mathbb{R}$는 함수이다. [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 $(-1)^{j+2} = (-1)^{j+1}(-1) = -(-1)^{j+1}$이고((K9), (K1)), $(-1)^{1+1} = (-1)^2 = (-1)(-1) = 1$이다((K12)의 (iii), (K4)).

조건 (i). $p \in \{1, \dots, n\}$, 실수 $\alpha$, $\beta$와, $p$번째 행을 뺀 모든 행에서 서로 같고 $C$의 $p$번째 행이 $\alpha$($A$의 $p$번째 행) $+ \beta$($B$의 $p$번째 행)인 $A$, $B$, $C$를 잡는다. 먼저 모든 $j$에서
$$
t_j(C) = \alpha\,t_j(A) + \beta\,t_j(B)
$$
임을 보인다.

- $j = p$인 경우. 행렬식 함수의 (1)에 의해 $c_{p,1} = \alpha a_{p,1} + \beta b_{p,1}$이다. 소행렬의 (3)의 (i)을 $A$와 $B$, $A$와 $C$에 쓰면 $A^{(p,1)} = B^{(p,1)} = C^{(p,1)}$이고, 이 행렬을 $M$이라 하면 (K1)–(K3)에 의해 $t_p(C) = (-1)^{p+1}(\alpha a_{p,1} + \beta b_{p,1})\Delta'(M) = \alpha\,t_p(A) + \beta\,t_p(B)$이다.
- $j \ne p$인 경우. 세 행렬의 $j$번째 행이 같으므로 행렬식 함수의 (1)에 의해 $a_{j,1} = b_{j,1} = c_{j,1}$이다. 소행렬의 (3)의 (ii)의 $r$에 대하여, (ii)를 세 쌍 $(A, B)$, $(A, C)$, $(B, C)$에 쓰면 $A^{(j,1)}$, $B^{(j,1)}$, $C^{(j,1)}$은 $r$번째 행을 뺀 모든 행에서 서로 같고, (3)의 (iii)에 의해 $C^{(j,1)}$의 $r$번째 행은 $\alpha$($A^{(j,1)}$의 $r$번째 행) $+ \beta$($B^{(j,1)}$의 $r$번째 행)이다. $\Delta'$은 조건 (i)을 만족하므로 $\Delta'(C^{(j,1)}) = \alpha\Delta'(A^{(j,1)}) + \beta\Delta'(B^{(j,1)})$이고, (K1)–(K3)에 의해 $t_j(C) = (-1)^{j+1} a_{j,1}(\alpha\Delta'(A^{(j,1)}) + \beta\Delta'(B^{(j,1)})) = \alpha\,t_j(A) + \beta\,t_j(B)$이다.

이제 $\Delta(C)$는 $j$번째 항이 $\alpha\,t_j(A) + \beta\,t_j(B)$인 열의 합이다. [[finite-sum-of-vectors|벡터의 유한 합]]의 (H3)에 의해 이것은 $j$번째 항이 $\alpha\,t_j(A)$인 열의 합과 $j$번째 항이 $\beta\,t_j(B)$인 열의 합을 더한 것이고, (H4)에 의해 앞의 것은 $\alpha\Delta(A)$, 뒤의 것은 $\beta\Delta(B)$이다. 따라서 $\Delta(C) = \alpha\Delta(A) + \beta\Delta(B)$이다.

조건 (ii). 행렬식 함수의 (4)에 의해, (i)을 만족하는 $\Delta$가 다음 조건 (ii′)을 만족하면 (ii)를 만족한다. (ii′) $p \in \{1, \dots, n - 1\}$이고 $A$의 $p$번째 행과 $p + 1$번째 행이 같으면 $\Delta(A) = 0$이다. 이것을 보인다. 그런 $p$와 $A$를 잡는다.

- $j \notin \{p, p + 1\}$이면 소행렬의 (4)의 (i)에 의해 $A^{(j,1)}$의 서로 다른 두 행(번호 $p'$과 $p' + 1$)이 같다. $\Delta'$은 조건 (ii)를 만족하므로 $\Delta'(A^{(j,1)}) = 0$이고, (K9)에 의해 $t_j(A) = 0$이다.
- 행렬식 함수의 (1)에 의해 $a_{p,1} = a_{p+1,1}$이고, 소행렬의 (4)의 (ii)에 의해 $A^{(p,1)} = A^{(p+1,1)}$이다. 이 성분을 $x$, 이 행렬을 $M$이라 하면 $t_p(A) = (-1)^{p+1} x\,\Delta'(M)$이고 $t_{p+1}(A) = (-1)^{p+2} x\,\Delta'(M) = -((-1)^{p+1} x\,\Delta'(M)) = -t_p(A)$이다((K9), (K2)).

길이 $n$인 실수의 열 $u$와 $w$를 $u_p = t_p(A)$, $w_{p+1} = t_{p+1}(A)$이고 다른 자리에서는 $0$인 열로 정한다((G). $p \ne p + 1$이고 둘 다 $\{1, \dots, n\}$에 속한다). 모든 $j$에서 $t_j(A) = u_j + w_j$이다. 실제로 $j = p$이면 $t_p(A) + 0$, $j = p + 1$이면 $0 + t_{p+1}(A)$, 그 밖에는 $0 + 0$이고 (K4), (K1)을 쓴다. (H3)에 의해 $\Delta(A)$는 $u$의 합과 $w$의 합을 더한 것이다. $n - 1 \ge 0$이므로 길이 $n$인 열을 길이 $(n - 1) + 1$인 열로 보아 (H7)을 쓰면 $u$의 합은 $t_p(A)$, $w$의 합은 $t_{p+1}(A)$이다. 따라서 $\Delta(A) = t_p(A) + (-t_p(A)) = 0$이다((K8)). 행렬식 함수의 (4)의 (b)에 의해 $\Delta$는 조건 (ii)를 만족한다.

조건 (iii). [[matrix|행렬]]의 (6)에 의해 $(I_n)_{1,1} = 1$이고 $j \ne 1$이면 $(I_n)_{j,1} = 0$이다. 따라서 $j \ne 1$이면 (K9)에 의해 $t_j(I_n) = 0$이다. 소행렬의 (5)에 의해 $(I_n)^{(1,1)} = I_{n-1}$이고 $\Delta'(I_{n-1}) = 1$이므로 $t_1(I_n) = (-1)^{1+1} \cdot 1 \cdot 1 = 1$이다((K4)). (H7)을 $k = 1$로 쓰면 $\Delta(I_n) = t_1(I_n) = 1$이다.

세 조건이 성립하므로 $\Delta$는 $n \times n$ 행렬식 함수이다.

**(2)의 증명.** 자연수 $n$마다 명제 $S_n$을 "$n \times n$ 행렬식 함수가 있다"로 두고 시작점이 $1$인 [[mathematical-induction|수학적 귀납법]]으로 보인다. 기초 단계: 행렬식 함수의 (2)에 의해 $A$를 $a_{1,1}$로 보내는 함수가 $1 \times 1$ 행렬식 함수이다. 귀납 단계: $S_n$이 참이라 하고 $n \times n$ 행렬식 함수 $\Delta'$을 하나 잡는다. $n + 1 \ge 2$이고((Z7)) $(n + 1) - 1 = n$이므로, (1)을 크기 $n + 1$과 $\Delta'$에 쓰면 $(n + 1) \times (n + 1)$ 행렬식 함수가 있다. 따라서 $S_{n+1}$이 참이다. $\blacksquare$
:::

## 예시와 반례

:::example[n = 2 에서 만든 함수]
$n = 2$이면 $\Delta'$은 $1 \times 1$ 행렬식 함수입니다. [[determinant-function|행렬식 함수]]의 (2)의 함수, 곧 $1 \times 1$ 행렬을 그 성분으로 보내는 함수를 $\Delta'$으로 쓰면, 소행렬의 (1)에서 $s_1(1) = 2$, $s_2(1) = 1$이므로 $A^{(1,1)} = \begin{pmatrix} a_{2,2} \end{pmatrix}$, $A^{(2,1)} = \begin{pmatrix} a_{1,2} \end{pmatrix}$이고

$$
\begin{aligned}
\Delta(A) &= (-1)^2 a_{1,1}a_{2,2} \\
&\quad + (-1)^3 a_{2,1}a_{1,2} \\
&= a_{1,1}a_{2,2} - a_{2,1}a_{1,2}
\end{aligned}
$$

입니다. 행렬식 함수 항목의 예시 '2 × 2 에서 성분의 식으로 정한 행렬식 함수'와 같은 함수가 나옵니다.
:::

:::example[n = 3 에서 만든 함수의 한 값]
$n = 3$이고 $\Delta'$이 위의 $2 \times 2$ 함수라 하고

$$
A = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 3 & 1 \\ 1 & 0 & 4 \end{pmatrix}
$$

에서 값을 구해 봅시다. $a_{2,1} = 0$이므로 둘째 항은 $0$입니다. $A^{(1,1)} = \begin{pmatrix} 3 & 1 \\ 0 & 4 \end{pmatrix}$, $A^{(3,1)} = \begin{pmatrix} 1 & 0 \\ 3 & 1 \end{pmatrix}$이므로

$$
\begin{aligned}
\Delta(A) &= 2(3 \cdot 4 - 0 \cdot 1) \\
&\quad + 1 \cdot (1 \cdot 1 - 3 \cdot 0) \\
&= 24 + 1 = 25
\end{aligned}
$$

입니다. 셋째 항의 부호는 $(-1)^{3+1} = 1$입니다.
:::

:::counterexample[2 × 2 에서 부호를 모두 + 로 둔 식]
$n = 2$에서 부호를 빼고 $g(A) = a_{1,1}a_{2,2} + a_{2,1}a_{1,2}$로 두면, 두 행이 모두 $(1, 1)$인 행렬에서 $g$의 값은 $1 + 1 = 2 \ne 0$이므로 조건 (ii)가 깨집니다. 증명에서 이웃한 두 항이 지워지는 것은 부호 $(-1)^{p+1}$과 $(-1)^{p+2}$가 반대이기 때문입니다.
:::

## 확인 질문

:::check[(1)에서 $n = 2$이고 $A = \begin{pmatrix} 5 & 2 \\ 0 & -1 \end{pmatrix}$이면 $\Delta(A)$는 무엇인가?]
첫째 열의 둘째 성분이 $0$이므로 첫째 항만 남고, $A^{(1,1)} = \begin{pmatrix} -1 \end{pmatrix}$이므로 $\Delta(A) = (-1)^2 \cdot 5 \cdot (-1) = -5$입니다.
:::

:::check[(1)에서 $n = 3$이고 $A = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$이면 $\Delta(A)$는 무엇인가?]
첫째 열에서 $0$이 아닌 성분은 $a_{2,1} = 1$뿐이므로 둘째 항만 남습니다. $A^{(2,1)}$은 첫째 행과 셋째 행, 둘째 열과 셋째 열로 된 $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I_2$이므로 $\Delta(A) = (-1)^{2+1} \cdot 1 \cdot \Delta'(I_2) = -1$입니다. $A$는 $I_3$의 첫째 행과 둘째 행을 맞바꾼 $P_{1,2}$이므로 행렬식 함수의 (5)의 (a)와도 맞습니다.
:::
