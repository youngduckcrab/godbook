---
title: 행 연산과 행렬식 함수
title_en: Row Operations and Determinant Functions
aliases: [기본 행 연산과 행렬식, 기본행렬과 행렬식 함수, row operations and determinants]
kind: proposition
field: linear-algebra
msc: ["15A15"]
level: undergrad
summary: 행렬식 함수의 값은 두 행을 맞바꾸면 부호가 바뀌고, 한 행에 0 이 아닌 수 c 를 곱하면 c 배가 되며, 한 행에 다른 행의 상수배를 더하면 바뀌지 않는다. 따라서 기본행렬의 곱 E 마다 행렬식 함수와 무관한 0 이 아닌 수 c 가 있어 모든 행렬식 함수 Δ 에서 Δ(EA) = cΔ(A) 이다.
requires: [well-ordering-principle, mathematical-induction, real-number-arithmetic, real-function-space, finite-sum-of-vectors, matrix, matrix-product-properties, echelon-form, elementary-matrix, row-equivalence, determinant-function]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 3절 3.2 Proposition 3.1, Proposition 3.2, pp.79–81; 3.3 Determinants of diagonal and triangular matrices, p.81; 3.5 Lemma 3.6, Corollary 3.7, p.83; 3.6 Summary of properties of determinant, p.84; 7절 연습문제 7.1 c)–e), p.97"
    checked: original
    note: "출처는 Proposition 3.1(p.79)에서 영열이 있거나 두 열이 같거나 한 열이 다른 열의 배이면 행렬식이 0 이라 하고, Proposition 3.2(p.80)에서 한 열에 다른 열들의 일차결합을 더해도 행렬식이 바뀌지 않는다고 하며, 그 여백 주석에서 열에 자기 자신의 배를 더하는 것은 허용되지 않는다고 적는다. Lemma 3.6(p.83)은 기본행렬 E 에 대해 det(AE) = (det A)(det E) 라 하고, 그 증명에서 특별한 행렬의 행렬식은 계산하기 쉽고 오른쪽에 기본행렬을 곱하는 것은 열 연산이며, 기본행렬은 단위행렬에 그 열 연산을 한 것이므로 그 행렬식은 1 에 그 연산의 효과를 곱한 것이라고 적는다. Corollary 3.7(p.83)은 이것을 N 번 쓴 것이다. 출처는 이 성질들을 열로 말하고, 행에 대한 같은 성질은 3.6절(p.84)에서 전치행렬의 행렬식 뒤에 적는다. 이 항목은 행렬식 함수의 조건 (i)(ii)에서 행 연산의 효과를 직접 증명하고, 기본행렬은 왼쪽에 곱한다. 결론은 '같은 수 d(또는 c)가 모든 행렬식 함수에 통한다'는 꼴로 적는다. 기본행렬의 곱은 행 동치 항목의 사슬로 정의된 것이므로 (5)는 사슬의 길이에 대한 귀납으로 증명한다. 출처 연습문제 7.1 의 c)(두 행 맞바꾸기), d)(한 행에 스칼라 곱하기), e)(한 행에 다른 행의 배 더하기)(p.97)는 (1)–(3)이 답하는 참·거짓 문제다. 반례 '한 행에 그 행 자신의 배를 더하면 값이 바뀔 수 있는 예'는 출처 Proposition 3.2 의 여백 주석(p.80)과 같은 내용이다. 예시 '행 맞바꾸기와 상수배로 값이 정해지는 3 × 3 행렬'에서 대각행렬을 단위행렬의 행에 수를 곱해 얻는 것은 출처 3.3절(p.81)이 대각행렬을 단위행렬의 열에 수를 곱해 얻는 것과 같은 발상이다. 확인 질문 '$2 \\times 2$ 행렬식 함수 $\\Delta$에 대하여 $\\Delta(R_{1,2}(5))$는 무엇인가?'와 (4)의 Δ(G) = d 는 위 Lemma 3.6 증명의 둘째 문단과 같은 발상이고, 확인 질문 '$3 \\times 3$ 행렬식 함수 $\\Delta$에 대하여 $\\Delta(P_{1,3}D_2(4))$는 무엇인가?'는 Corollary 3.7(p.83)을 기본행렬 둘에 쓴 것과 같은 발상이다. (6)의 앞 문장(영행이 있으면 0)은 출처 Proposition 3.1 의 1(p.79)의 행판이고 3.6절의 4(p.84)에 있다. 참고 '한 행에 0을 곱하는 경우'는 출처 Proposition 3.1 의 1 의 증명(p.79)이 영열에 0 을 곱해도 행렬이 바뀌지 않는다고 하는 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 틀린 summary 1건, 출처의 증명을 좁게 옮긴 메모 1건, 경계 경우에서 거짓이거나 조건이 빠진 설명 문장 9건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$n$이 자연수이고 $A \in M_{n \times n}$이라 하자. [[determinant-function|행렬식 함수]]와 그 조건 (i)–(iii)은 그 항목에서 정한 $n \times n$의 것이고, $P_{j,k}$, $D_k(c)$, $R_{k,j}(c)$는 [[elementary-matrix|기본행렬]]에서 정한 $n \times n$ 기본행렬이며, 기본행렬의 곱은 [[row-equivalence|행 동치]] 항목에서 사슬로 정한 것이다. $\Delta$는 행렬식 함수이다.

1. (행 맞바꾸기) $j$, $k \in \{1, \dots, n\}$이고 $j \ne k$이면 $\Delta(P_{j,k}A) = -\Delta(A)$이다.
2. (행의 상수배) $k \in \{1, \dots, n\}$이고 $c$가 $0$이 아닌 실수이면 $\Delta(D_k(c)A) = c\,\Delta(A)$이다.
3. (행 더하기) $j$, $k \in \{1, \dots, n\}$이고 $j \ne k$이며 $c$가 실수이면 $\Delta(R_{k,j}(c)A) = \Delta(A)$이다.
4. (기본행렬) $G$가 $n \times n$ 기본행렬이면 $0$이 아닌 실수 $d$가 있어, 모든 행렬식 함수 $\Delta$와 모든 $A \in M_{n \times n}$에서 $\Delta(GA) = d\,\Delta(A)$이다. $G$가 $P_{j,k}$이면 $d = -1$, $D_k(c)$이면 $d = c$, $R_{k,j}(c)$이면 $d = 1$로 둘 수 있다. 또 모든 행렬식 함수 $\Delta$에서 $\Delta(G) = d$이다.
5. (기본행렬의 곱) $E$가 $n \times n$ 기본행렬의 곱이면 $0$이 아닌 실수 $c$가 있어, 모든 행렬식 함수 $\Delta$와 모든 $A \in M_{n \times n}$에서 $\Delta(EA) = c\,\Delta(A)$이다. 또 모든 행렬식 함수 $\Delta$에서 $\Delta(E) = c$이다.
6. (영행) $A$의 어떤 행이 [[echelon-form|영행]]이면 $\Delta(A) = 0$이다. 또 $E$가 $n \times n$ 기본행렬의 곱이고 $EA$의 어떤 행이 영행이면 $\Delta(A) = 0$이다.

$n = 1$이면 $j \ne k$인 $j$, $k \in \{1\}$이 없으므로 (1)과 (3)은 해당하는 경우가 없다.
:::

:::english
Let $n$ be a natural number and $A \in M_{n \times n}$. Determinant functions and their conditions (i)–(iii) are the $n \times n$ ones from the entry on determinant functions; $P_{j,k}$, $D_k(c)$, $R_{k,j}(c)$ are the $n \times n$ elementary matrices from the entry on elementary matrices; and products of elementary matrices are defined by chains as in the entry on row equivalence. $\Delta$ is a determinant function.

1. (Interchanging rows) If $j$, $k \in \{1, \dots, n\}$ and $j \ne k$, then $\Delta(P_{j,k}A) = -\Delta(A)$.
2. (Scaling a row) If $k \in \{1, \dots, n\}$ and $c$ is a nonzero real number, then $\Delta(D_k(c)A) = c\,\Delta(A)$.
3. (Adding a multiple of a row) If $j$, $k \in \{1, \dots, n\}$, $j \ne k$ and $c$ is a real number, then $\Delta(R_{k,j}(c)A) = \Delta(A)$.
4. (Elementary matrices) If $G$ is an $n \times n$ elementary matrix, there is a nonzero real number $d$ such that $\Delta(GA) = d\,\Delta(A)$ for every determinant function $\Delta$ and every $A \in M_{n \times n}$. One may take $d = -1$ if $G$ is $P_{j,k}$, $d = c$ if $G$ is $D_k(c)$, and $d = 1$ if $G$ is $R_{k,j}(c)$. Moreover $\Delta(G) = d$ for every determinant function $\Delta$.
5. (Products of elementary matrices) If $E$ is a product of $n \times n$ elementary matrices, there is a nonzero real number $c$ such that $\Delta(EA) = c\,\Delta(A)$ for every determinant function $\Delta$ and every $A \in M_{n \times n}$. Moreover $\Delta(E) = c$ for every determinant function $\Delta$.
6. (Zero rows) If some row of $A$ is a zero row, then $\Delta(A) = 0$. Also, if $E$ is a product of $n \times n$ elementary matrices and some row of $EA$ is a zero row, then $\Delta(A) = 0$.

If $n = 1$, there are no $j$, $k \in \{1\}$ with $j \ne k$, so (1) and (3) have no cases.
:::

## 직관

행렬식 함수의 세 조건은 행 하나를 바꾸거나 두 행을 비교하는 말로 되어 있으므로, 기본 행 연산을 했을 때 값이 어떻게 바뀌는지가 조건에서 바로 나옵니다. 맞바꾸면 부호가 바뀌고, 한 행에 $c$를 곱하면 $c$배가 되며, 한 행에 다른 행의 상수배를 더하면 그대로입니다. 마지막 것은 (i)로 값을 두 개로 쪼개면 둘째 값이 "같은 두 행"을 가진 행렬의 값, 곧 $0$이 되기 때문입니다.

중요한 것은 바뀌는 비율 $-1$, $c$, $1$이 어느 행렬식 함수인지에도, 어느 행렬 $A$인지에도 기대지 않는다는 점입니다. 비율은 기본행렬 $G$만 보고 정해집니다. 그래서 기본행렬을 여러 번 곱한 $E$에 대해서도 비율 $c$는 $E$만으로 정해지고, $A$를 단위행렬로 두면 그 비율이 바로 $\Delta(E)$입니다.

## 증명

:::idea
(1)과 (2)는 행렬식 함수 항목의 (5)와 (3)이고, (3)은 조건 (i)로 값을 쪼개 조건 (ii)를 쓴다. (5)는 사슬의 길이에 대한 귀납으로 (4)를 되풀이한다.
:::

:::hint
$R_{k,j}(c)A$의 $k$번째 행은 $A$의 $k$번째 행 더하기 $c$배의 $A$의 $j$번째 행입니다. $k$번째 행을 $A$의 $j$번째 행으로 바꾼 행렬을 생각해 보세요.
:::

:::hint
$E$에 이르는 사슬 $F_1, \dots, F_{N+1}$에서 $E = GF_N$입니다. $\Delta(G(F_N A))$에 (4)를 쓰세요.
:::

:::proof
[[determinant-function|행렬식 함수]] 항목의 번호는 "행렬식 함수의 (n)"으로 인용한다. 행렬 곱의 결합법칙과 단위행렬 법칙은 [[matrix-product-properties|행렬 곱의 성질]]의 (1)과 (4)이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 번호로 인용한다.

**(1)의 증명.** $j \ne k$이므로 $n \ge 2$이다. 행렬식 함수는 (i)과 (ii)를 만족하므로 행렬식 함수의 (5)의 (a)에 의해 $\Delta(P_{j,k}A) = -\Delta(A)$이다.

**(2)의 증명.** [[elementary-matrix|기본행렬]]의 (2)에 의해 $(D_k(c)A)_{k,q} = c\,a_{k,q}$이고 $p \ne k$이면 $(D_k(c)A)_{p,q} = a_{p,q}$이다. 행렬식 함수의 (1)에 의해 $D_k(c)A$는 $k$번째 행을 뺀 모든 행에서 $A$와 같고, 그 $k$번째 행은 $c$($A$의 $k$번째 행)이다. 행렬식 함수의 (3)의 (b)에 의해 $\Delta(D_k(c)A) = c\,\Delta(A)$이다.

**(3)의 증명.** $(p, q)$ 성분이 $p = k$이면 $a_{j,q}$이고 $p \ne k$이면 $a_{p,q}$인 $n \times n$ 행렬을 $A'$이라 하자([[real-function-space|(G)]]와 [[matrix|행렬]]의 (2)). [[elementary-matrix|기본행렬]]의 (2)에 의해 $(R_{k,j}(c)A)_{k,q} = a_{k,q} + c\,a_{j,q}$이고 $p \ne k$이면 $(R_{k,j}(c)A)_{p,q} = a_{p,q}$이다. 따라서 행렬식 함수의 (1)에 의해 $A$, $A'$, $R_{k,j}(c)A$는 $k$번째 행을 뺀 모든 행에서 서로 같다. 또 (K4)와 (K1)에 의해 $a_{k,q} + c\,a_{j,q} = 1 \cdot a_{k,q} + c\,a'_{k,q}$이므로 $R_{k,j}(c)A$의 $k$번째 행은 $1$($A$의 $k$번째 행) $+ c$($A'$의 $k$번째 행)이다. 조건 (i)에 의해

$$
\Delta(R_{k,j}(c)A) = 1 \cdot \Delta(A) + c\,\Delta(A')
$$

이다. $j \ne k$이므로 $A'$의 $j$번째 행의 성분은 $a'_{j,q} = a_{j,q}$이고 $k$번째 행의 성분은 $a'_{k,q} = a_{j,q}$이다. 행렬식 함수의 (1)에 의해 $A'$의 $j$번째 행과 $k$번째 행이 같으므로 조건 (ii)에 의해 $\Delta(A') = 0$이다. (K4)와 (K9)에 의해 $\Delta(R_{k,j}(c)A) = \Delta(A) + c \cdot 0 = \Delta(A)$이다.

**(4)의 증명.** $G$는 기본행렬이므로 세 꼴 가운데 하나이다. $G = P_{j,k}$이면 $d = -1$로 두면 (1)에 의해, $G = D_k(c)$이면 $d = c$로 두면 (2)에 의해, $G = R_{k,j}(c)$이면 $d = 1$로 두면 (3)과 (K4), (K1)에 의해 모든 행렬식 함수 $\Delta$와 모든 $A$에서 $\Delta(GA) = d\,\Delta(A)$이다. 어느 경우든 $d$는 $\Delta$와 $A$를 정하기 전에 $G$만으로 정했다. $-1 \ne 0$은 (K7)의 정수 사이의 계산이고, 상수배 꼴의 $c$는 $0$이 아니며, (K4)에 의해 $1 \ne 0$이다. 마지막으로 $A = I_n$으로 두면 단위행렬 법칙에 의해 $GI_n = G$이고, 조건 (iii)과 (K4)에 의해 $\Delta(G) = d\,\Delta(I_n) = d$이다.

**(5)의 증명.** 정수 $N \ge 1$마다 명제 $S_N$을 "$E$에 이르는 길이 $N$인 사슬이 있는 모든 $n \times n$ 행렬 $E$에 대하여, $0$이 아닌 실수 $c$가 있어 모든 행렬식 함수 $\Delta$와 모든 $A$에서 $\Delta(EA) = c\,\Delta(A)$이다"로 두고, 시작점이 $1$인 [[mathematical-induction|수학적 귀납법]]으로 보인다.

기초 단계. $E$에 이르는 길이 $1$인 사슬 $F_1$이 있으면 사슬의 정의에 의해 $E = F_1 = I_n$이다. $c = 1$로 두면 단위행렬 법칙과 (K4), (K1)에 의해 $\Delta(EA) = \Delta(I_nA) = \Delta(A) = 1 \cdot \Delta(A)$이고, (K4)에 의해 $1 \ne 0$이다.

귀납 단계. $S_N$이 참이라 하고, $E$에 이르는 길이 $N + 1$인 사슬 $F_1, \dots, F_{N+1}$을 잡는다. 그 처음 $N$개의 항 $F_1, \dots, F_N$([[finite-sum-of-vectors|벡터의 열]]의 처음 $N$개)은 $F_N$에 이르는 길이 $N$인 사슬이다. 실제로 $N \ge 1$이므로 첫 항은 $F_1 = I_n$이고 끝 항은 $F_N$이며, $1 \le i < N$이면 (L3)과 (Z6)에 의해 $i < N + 1$이므로 원래 사슬의 조건에서 $F_{i+1} = G'F_i$인 기본행렬 $G'$이 있다. $S_N$에 의해 $0$이 아닌 실수 $c'$이 있어 모든 $\Delta$와 $A$에서 $\Delta(F_N A) = c'\,\Delta(A)$이다. 또 (L3)에 의해 $N < N + 1$이므로 $E = F_{N+1} = GF_N$인 기본행렬 $G$가 있고, (4)에 의해 $0$이 아닌 실수 $d$가 있어 모든 $\Delta$와 모든 행렬 $B$에서 $\Delta(GB) = d\,\Delta(B)$이다. $c = dc'$으로 두면 (K12)의 (vi)에 의해 $c \ne 0$이고, 모든 $\Delta$와 $A$에서 결합법칙과 (K2)에 의해

$$
\begin{aligned}
\Delta(EA) &= \Delta(G(F_N A)) = d\,\Delta(F_N A) \\
&= d\,(c'\,\Delta(A)) = c\,\Delta(A)
\end{aligned}
$$

이다. 따라서 $S_{N+1}$이 참이다. 여기서 $d$와 $c'$은 $\Delta$와 $A$를 정하기 전에 정했으므로 $c$도 그렇다. [[row-equivalence|행 동치]]의 정의에 의해 기본행렬의 곱 $E$에는 어떤 $N \ge 1$에 대한 길이 $N$인 사슬이 있으므로 $S_N$에서 첫 주장이 나온다. $A = I_n$으로 두면 단위행렬 법칙, 조건 (iii), (K4)에 의해 $\Delta(E) = c\,\Delta(I_n) = c$이다.

정수에 관해서는 [[well-ordering-principle|정렬 원리]] 항목의 (Z6)과 (L3)을 썼다.

**(6)의 증명.** 첫 주장은 행렬식 함수의 (3)의 (a)이다. $EA$의 어떤 행이 영행이면 (5)의 $c$에 대하여, 첫 주장을 $EA$에 써서 $c\,\Delta(A) = \Delta(EA) = 0$이고, $c \ne 0$이므로 (K10)에 의해 $\Delta(A) = 0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[행 맞바꾸기와 상수배로 값이 정해지는 3 × 3 행렬]
$$
A = \begin{pmatrix} 0 & 2 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 3 \end{pmatrix}
$$

이라 합시다. 첫째 행과 둘째 행을 맞바꾸면 $P_{1,2}A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$이고, 이것은 $I_3$의 둘째 행에 $2$를, 셋째 행에 $3$을 곱한 것, 곧 $D_2(2)D_3(3)I_3$입니다. 행렬식 함수 $\Delta$가 무엇이든 (1), (2), (4)와 조건 (iii)에 의해

$$
\begin{aligned}
\Delta(A) &= -\Delta(P_{1,2}A) \\
&= -\Delta(D_2(2)(D_3(3)I_3)) \\
&= -2 \cdot 3 \cdot \Delta(I_3) = -6
\end{aligned}
$$

입니다. 첫 등식은 (1)을 $P_{1,2}A$에 쓴 $\Delta(P_{1,2}(P_{1,2}A)) = -\Delta(P_{1,2}A)$와, [[elementary-matrix|기본행렬]]의 (3)의 $P_{1,2}P_{1,2} = I_3$ 및 [[matrix-product-properties|행렬 곱의 성질]]의 (1), (4)로 얻는 $P_{1,2}(P_{1,2}A) = A$에서 나옵니다.
:::

:::counterexample[한 행에 그 행 자신의 배를 더하면 값이 바뀔 수 있는 예]
(3)은 $j \ne k$일 때만 말합니다. $2 \times 2$에서 $I_2$의 첫째 행에 첫째 행 자신의 $1$배를 더하면 $\begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}$이 되고, 행렬식 함수의 (3)의 (b)에 의해 이 행렬의 값은 $2\,\Delta(I_2) = 2$입니다. $\Delta(I_2) = 1$과 다릅니다. 자기 자신의 배를 더하는 것은 그 행에 $1 + c$를 곱하는 것이므로 값이 $1 + c$배가 됩니다.
:::

:::remark[한 행에 0을 곱하는 경우]
$D_k(c)$는 $c \ne 0$일 때만 기본행렬이므로 (2)는 $c = 0$을 말하지 않습니다. 그래도 한 행에 $0$을 곱한 행렬은 그 행이 영행이므로 (6)에 의해 값이 $0$이고, 이것은 행렬식 함수의 (3)의 (b)에서 $c = 0$으로 둔 것과 같습니다.
:::

## 확인 질문

:::check[$2 \times 2$ 행렬식 함수 $\Delta$에 대하여 $\Delta(R_{1,2}(5))$는 무엇인가?]
(4)에 의해 행 더하기 꼴의 기본행렬에서는 $d = 1$이므로 $\Delta(R_{1,2}(5)) = 1$입니다. 직접 보면 $R_{1,2}(5) = R_{1,2}(5)I_2$는 $I_2$의 첫째 행에 둘째 행의 $5$배를 더한 $\begin{pmatrix} 1 & 5 \\ 0 & 1 \end{pmatrix}$이고, (3)에 의해 값은 $\Delta(I_2) = 1$입니다.
:::

:::check[$3 \times 3$ 행렬식 함수 $\Delta$에 대하여 $\Delta(P_{1,3}D_2(4))$는 무엇인가?]
(1)을 $A = D_2(4)$에 쓰면 $\Delta(P_{1,3}D_2(4)) = -\Delta(D_2(4))$이고, (4)에 의해 $\Delta(D_2(4)) = 4$입니다. 따라서 값은 $-4$입니다.
:::
