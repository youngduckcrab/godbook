---
title: 여인수행렬과 수반행렬
title_en: Cofactor Matrix and Adjugate Matrix
aliases: [여인수행렬, 수반행렬, cof, adj, cofactor matrix, adjugate, adjugate matrix, classical adjoint]
kind: definition
field: linear-algebra
msc: ["15A15"]
level: undergrad
summary: 2 이상인 n 에 대하여 n × n 행렬 A 의 (j, k) 성분이 (j, k) 여인수인 행렬을 여인수행렬 cof A, 그 전치행렬을 수반행렬 adj A 라 한다. 2 × 2 의 수반행렬의 식, 전치행렬과 단위행렬과 스칼라배의 수반행렬을 함께 증명한다.
requires: [real-number-arithmetic, even-and-odd, real-function-space, matrix, transpose, echelon-form, power-of-a-real-number, minor-matrix, determinant, determinant-of-product, determinant-of-transpose, cofactor-expansion]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 5절 Cofactor expansion, Definition(cofactors), p.91; 5.1 Cofactor formula for the inverse matrix 첫 문장과 Theorem 5.2, p.92; 5.2 Some applications of the cofactor formula for the inverse, Example (Inverting 2 × 2 matrices), p.93; 5절 연습문제 5.4, p.95"
    checked: original
    note: "출처는 여인수 C_{j,k} = (−1)^{j+k} det A_{j,k} 를 정의하고(p.91), 5.1절 첫 문장(p.92)에서 여인수를 성분으로 갖는 행렬 C = {C_{j,k}} 를 A 의 cofactor matrix 라 부른다. 이 항목의 여인수행렬 cof A 는 이 C 와 같다. 출처는 Theorem 5.2(p.92)에서 그 전치행렬 Cᵀ 를 이름 없이 쓴다. 이 항목은 이 전치행렬을 수반행렬 adj A 라 부른다. 'adjugate' 와 'classical adjoint' 는 출처에 나오지 않고(검색 0건), 'adj' 로 찾으면 'adjoint' 가 든 곳만 나오고, 그것은 5장의 에르미트 수반(Hermitian adjoint) A*(p.118, 5장 5.1절 p.142)와 자기수반(self-adjoint) 연산자처럼 다른 대상이다. 출처는 n = 1 의 여인수를 말하지 않는다. 이 항목은 소행렬이 n ≥ 2 에서만 정의되므로 n ≥ 2 에서만 정의한다. (1)의 여인수행렬은 출처 5.2절의 2 × 2 의 예(p.93)가 적는 cofactor matrix (d −c; −b a) 와 같은 것을 성분의 기호로 쓴 것이다. (2)–(4)는 출처에 명제로 없다(검색어 'cofactor matrix' 3건 — 줄 4485, 4486, 4534 — 과 'adjugate' 0건, 'transpose of the cofactor' 0건, 'C T' 로 찾은 곳을 읽었고, 3장 5절 연습문제 5.1–5.7 과 7절 연습문제 7.1–7.5 를 처음부터 읽었다). 예시 '3 × 3 행렬의 여인수행렬과 수반행렬'은 출처 연습문제 5.4(p.95, 3 × 3 행렬 하나를 포함한 네 행렬의 역행렬을 여인수로 구하라)와 같은 발상이다(행렬은 다르다). 확인 질문 '$\\begin{pmatrix} 3 & -1 \\\\ 4 & 2 \\end{pmatrix}$의 수반행렬은 무엇인가?'는 출처 5.2절 2 × 2 의 예(p.93)와 같은 계산이다. 확인 질문 '$A$가 $3 \\times 3$ 행렬이면 $\\operatorname{adj}(-A)$와 $\\operatorname{adj} A$는 어떤 관계인가?'는 출처 연습문제 7.2(p.97, det(3A), det(−A) 를 det A 로 나타내라)와 비슷한 물음을 수반행렬에 한 것이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인(증명 통독, 예의 수치 재계산). 가역 가정 없는 꼴과 n = 1, det A = 0 의 경우를 진술에 두었다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$n$이 $2$ 이상인 자연수이고 $A$가 $n \times n$ [[matrix|행렬]]이라 하자. $A$의 $(j, k)$ 여인수는 [[cofactor-expansion|여인수 전개]]에서 정한 실수 $(-1)^{j+k} \det A^{(j,k)}$이다. 여기서 $A^{(j,k)}$는 [[minor-matrix|소행렬]], $\det$는 [[determinant|행렬식]], $(-1)^{j+k}$는 [[power-of-a-real-number|실수의 거듭제곱]]이다.

**여인수행렬과 수반행렬.** $\{1, \dots, n\} \times \{1, \dots, n\}$의 각 원소 $(j, k)$에 $A$의 $(j, k)$ 여인수가 하나씩 정해지므로 [[real-function-space|(G)]]에 의해 $(j, k)$ 성분이 $A$의 $(j, k)$ 여인수인 $n \times n$ 행렬이 있고, [[matrix|행렬]]의 (2)에 의해 이런 행렬은 하나뿐이다. 이 행렬을 $A$의 **여인수행렬**(cofactor matrix)이라 하고 $\operatorname{cof} A$로 쓴다. 그 [[transpose|전치행렬]] $(\operatorname{cof} A)^T$를 $A$의 **수반행렬**(adjugate matrix)이라 하고 $\operatorname{adj} A$로 쓴다. 곧 모든 $j$, $k \in \{1, \dots, n\}$에서

$$
\begin{aligned}
(\operatorname{cof} A)_{j,k} &= (-1)^{j+k} \det A^{(j,k)}, \\
(\operatorname{adj} A)_{k,j} &= (-1)^{j+k} \det A^{(j,k)}
\end{aligned}
$$

이다. $\operatorname{adj} A$의 $(k, j)$ 성분이 $A$의 $(j, k)$ 여인수이므로 두 첨자의 자리가 바뀐다. $1 \times 1$ 행렬에는 여인수가 없으므로 여인수행렬과 수반행렬을 정의하지 않는다. 식으로 나타낸 행렬에는 $\operatorname{adj}(A^T)$처럼 괄호를 친다.

다음이 성립한다. $A$는 $n \times n$ 행렬이고 $c$는 실수이다.

1. ($2 \times 2$) $n = 2$이면
   $$
   \begin{aligned}
   \operatorname{cof} A &= \begin{pmatrix} a_{2,2} & -a_{2,1} \\ -a_{1,2} & a_{1,1} \end{pmatrix}, \\
   \operatorname{adj} A &= \begin{pmatrix} a_{2,2} & -a_{1,2} \\ -a_{2,1} & a_{1,1} \end{pmatrix}
   \end{aligned}
   $$
   이다.
2. (전치행렬) $\operatorname{cof}(A^T) = (\operatorname{cof} A)^T$이고 $\operatorname{adj}(A^T) = (\operatorname{adj} A)^T$이다.
3. (단위행렬) $\operatorname{cof} I_n = I_n$이고 $\operatorname{adj} I_n = I_n$이다.
4. (스칼라배) $\operatorname{cof}(cA) = c^{n-1} \operatorname{cof} A$이고 $\operatorname{adj}(cA) = c^{n-1} \operatorname{adj} A$이다. 특히 $\operatorname{adj}(-A) = (-1)^{n-1} \operatorname{adj} A$이고, $n \times n$ 영행렬의 여인수행렬과 수반행렬은 영행렬이다.
:::

:::english
Let $n$ be a natural number with $n \ge 2$ and $A$ an $n \times n$ matrix. The $(j, k)$ cofactor of $A$ is the real number $(-1)^{j+k} \det A^{(j,k)}$ defined in the entry on cofactor expansion. Here $A^{(j,k)}$ is the minor matrix, $\det$ is the determinant, and $(-1)^{j+k}$ is a power of a real number.

**Cofactor matrix and adjugate matrix.** Since each element $(j, k)$ of $\{1, \dots, n\} \times \{1, \dots, n\}$ determines the $(j, k)$ cofactor of $A$, by (G) there is an $n \times n$ matrix whose $(j, k)$ entry is the $(j, k)$ cofactor of $A$, and by (2) of the entry on matrices there is only one such matrix. It is called the **cofactor matrix** of $A$ and written $\operatorname{cof} A$. Its transpose $(\operatorname{cof} A)^T$ is called the **adjugate matrix** of $A$ and written $\operatorname{adj} A$. That is, for all $j$, $k \in \{1, \dots, n\}$,

$$
\begin{aligned}
(\operatorname{cof} A)_{j,k} &= (-1)^{j+k} \det A^{(j,k)}, \\
(\operatorname{adj} A)_{k,j} &= (-1)^{j+k} \det A^{(j,k)}.
\end{aligned}
$$

Since the $(k, j)$ entry of $\operatorname{adj} A$ is the $(j, k)$ cofactor of $A$, the two indices change places. A $1 \times 1$ matrix has no cofactors, so its cofactor matrix and adjugate matrix are not defined. For a matrix given by an expression we use parentheses, as in $\operatorname{adj}(A^T)$.

The following hold, where $A$ is an $n \times n$ matrix and $c$ is a real number.

1. ($2 \times 2$) If $n = 2$, then
   $$
   \begin{aligned}
   \operatorname{cof} A &= \begin{pmatrix} a_{2,2} & -a_{2,1} \\ -a_{1,2} & a_{1,1} \end{pmatrix}, \\
   \operatorname{adj} A &= \begin{pmatrix} a_{2,2} & -a_{1,2} \\ -a_{2,1} & a_{1,1} \end{pmatrix}.
   \end{aligned}
   $$
2. (Transpose) $\operatorname{cof}(A^T) = (\operatorname{cof} A)^T$ and $\operatorname{adj}(A^T) = (\operatorname{adj} A)^T$.
3. (Identity matrix) $\operatorname{cof} I_n = I_n$ and $\operatorname{adj} I_n = I_n$.
4. (Scalar multiples) $\operatorname{cof}(cA) = c^{n-1} \operatorname{cof} A$ and $\operatorname{adj}(cA) = c^{n-1} \operatorname{adj} A$. In particular $\operatorname{adj}(-A) = (-1)^{n-1} \operatorname{adj} A$, and the cofactor matrix and the adjugate matrix of the $n \times n$ zero matrix are the zero matrix.
:::

## 직관

여인수 하나를 구할 때는 행렬의 한 칸을 손가락으로 짚고, 그 칸이 있는 행과 열을 손으로 가린 뒤 남은 칸들로 행렬식을 계산하고 부호를 붙입니다. 짚은 칸이 $(j, k)$이면 가려지는 것이 정확히 $j$번째 행과 $k$번째 열이고, 남은 칸들이 원래 순서대로 모인 것이 소행렬 $A^{(j,k)}$입니다. 모든 칸에서 이렇게 얻은 수를 그 칸에 적은 표가 여인수행렬입니다.

수반행렬은 이 표를 대각선을 따라 뒤집은 것입니다. 뒤집는 까닭은 곱 $A \cdot \operatorname{adj} A$를 계산할 때 드러납니다. 이 곱의 $(j, j)$ 성분은 $A$의 $j$번째 행과 $\operatorname{adj} A$의 $j$번째 열을 짝지은 합인데, $\operatorname{adj} A$의 $j$번째 열은 여인수행렬의 $j$번째 행이므로 이 합은 $j$번째 행을 따라 전개한 행렬식이 됩니다. 이 계산은 [[adjugate-formula|수반행렬과 역행렬의 공식]]에서 합니다.

$2 \times 2$ 행렬에서는 소행렬이 $1 \times 1$이라 여인수가 성분 하나에 부호를 붙인 것이고, 수반행렬은 대각성분 둘을 맞바꾸고 나머지 두 성분의 부호를 바꾼 행렬이 됩니다. $3 \times 3$ 이상에서는 소행렬이 $2 \times 2$ 이상이라 여인수가 성분 여러 개를 곱한 것들의 합이 됩니다. 그래서 (4)의 $c^{n-1}$처럼 스칼라배가 수반행렬로 그대로 옮겨 가지 않을 수 있습니다. $n \ge 3$이면 $\operatorname{adj}(2I_n) = 2^{n-1} I_n$이고 $2^{n-1} \ge 4$이므로, 이것은 $2 \operatorname{adj} I_n = 2I_n$과 다릅니다.

## 성질의 증명

:::proof
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 번호로 인용한다. 행렬의 (2)에 의해 같은 크기의 두 행렬은 모든 성분이 같으면 같으므로, 아래에서는 성분을 비교한다. 여인수행렬의 성분은 정의에 의해 $(\operatorname{cof} A)_{j,k} = (-1)^{j+k} \det A^{(j,k)}$이고, 전치행렬의 정의에 의해 $(\operatorname{adj} A)_{k,j} = (\operatorname{cof} A)_{j,k}$이다.

**(1)의 증명.** $n = 2$이면 소행렬은 $1 \times 1$ 행렬이다. 소행렬의 (1)에 의해 $s_1(1) = 1 + 1 = 2$이고 $s_2(1) = 1$이므로, 소행렬의 정의에 의해 $A^{(1,1)}$, $A^{(1,2)}$, $A^{(2,1)}$, $A^{(2,2)}$의 $(1, 1)$ 성분은 차례로 $a_{2,2}$, $a_{2,1}$, $a_{1,2}$, $a_{1,1}$이다. [[determinant|행렬식]]의 (2)에 의해 $1 \times 1$ 행렬의 행렬식은 그 성분이다. $2$와 $4$는 짝수이고 $3$은 홀수이므로([[even-and-odd|짝수와 홀수]]의 정의: $2 = 2 \cdot 1$, $4 = 2 \cdot 2$, $3 = 2 \cdot 1 + 1$) 실수의 거듭제곱의 (5)에 의해 $(-1)^{1+1} = (-1)^{2+2} = 1$이고 $(-1)^{1+2} = (-1)^{2+1} = -1$이다. (K4)와 (K9)의 $(-1)a = -a$에 의해 여인수는 $(1, 1)$이 $a_{2,2}$, $(1, 2)$가 $-a_{2,1}$, $(2, 1)$이 $-a_{1,2}$, $(2, 2)$가 $a_{1,1}$이다. 이것이 $\operatorname{cof} A$의 성분이고, 수반행렬의 성분은 $(\operatorname{adj} A)_{1,1} = (\operatorname{cof} A)_{1,1} = a_{2,2}$, $(\operatorname{adj} A)_{1,2} = (\operatorname{cof} A)_{2,1} = -a_{1,2}$, $(\operatorname{adj} A)_{2,1} = (\operatorname{cof} A)_{1,2} = -a_{2,1}$, $(\operatorname{adj} A)_{2,2} = (\operatorname{cof} A)_{2,2} = a_{1,1}$이다.

**(2)의 증명.** $j$, $k \in \{1, \dots, n\}$이라 하자. 소행렬의 (6)에 의해 $(A^T)^{(j,k)} = (A^{(k,j)})^T$이고, 이것은 $(n - 1) \times (n - 1)$ 행렬이므로 [[determinant-of-transpose|전치행렬의 행렬식]]의 (1)에 의해 $\det (A^T)^{(j,k)} = \det A^{(k,j)}$이다. (K7)에 의해 $j + k = k + j$이므로
$$
\begin{aligned}
&(\operatorname{cof}(A^T))_{j,k} \\
&= (-1)^{j+k} \det (A^T)^{(j,k)} \\
&= (-1)^{k+j} \det A^{(k,j)} \\
&= (\operatorname{cof} A)_{k,j} \\
&= ((\operatorname{cof} A)^T)_{j,k}
\end{aligned}
$$
이다. 따라서 $\operatorname{cof}(A^T) = (\operatorname{cof} A)^T$이다. 그러면 수반행렬의 정의와 [[transpose|전치행렬]]의 (1)의 $(X^T)^T = X$에 의해 $\operatorname{adj}(A^T) = (\operatorname{cof}(A^T))^T = ((\operatorname{cof} A)^T)^T = \operatorname{cof} A$이고, $(\operatorname{adj} A)^T = ((\operatorname{cof} A)^T)^T = \operatorname{cof} A$이다. 두 행렬이 모두 $\operatorname{cof} A$이므로 $\operatorname{adj}(A^T) = (\operatorname{adj} A)^T$이다.

**(3)의 증명.** 단위행렬의 성분은 [[matrix|행렬]]의 (6)의 것이다. $j \in \{1, \dots, n\}$이면 소행렬의 (5)에 의해 $(I_n)^{(j,j)} = I_{n-1}$이고 행렬식의 (1)의 (iii)에 의해 $\det I_{n-1} = 1$이다. $j + j = 2j$는 짝수이므로 실수의 거듭제곱의 (5)에 의해 $(-1)^{j+j} = 1$이고, (K4)에 의해 $(\operatorname{cof} I_n)_{j,j} = 1$이다.

$j \ne k$라 하자. 소행렬의 (1)에 의해 $s_j(r) = k$인 $r \in \{1, \dots, n - 1\}$이 있다. 소행렬의 정의에 의해 $(I_n)^{(j,k)}$의 $r$번째 행의 $l$번째 성분은 $(I_n)_{s_j(r), s_k(l)} = (I_n)_{k, s_k(l)}$이고, 소행렬의 (1)에 의해 $s_k(l) \ne k$이므로 이 성분은 $0$이다. 곧 $(I_n)^{(j,k)}$의 $r$번째 행은 [[echelon-form|영행]]이고, 행렬식의 (7)의 (a)에 의해 $\det (I_n)^{(j,k)} = 0$이다. (K9)에 의해 $(\operatorname{cof} I_n)_{j,k} = (-1)^{j+k} \cdot 0 = 0$이다.

따라서 $\operatorname{cof} I_n$의 성분은 $I_n$의 성분과 모두 같고 $\operatorname{cof} I_n = I_n$이다. 전치행렬의 (3)에 의해 $\operatorname{adj} I_n = I_n^T = I_n$이다.

**(4)의 증명.** $j$, $k \in \{1, \dots, n\}$이라 하자. 소행렬의 (7)에 의해 $(cA)^{(j,k)} = c A^{(j,k)}$이다. $n - 1$은 자연수이므로 [[determinant-of-product|곱의 행렬식]]의 (4)를 $(n - 1) \times (n - 1)$ 행렬 $A^{(j,k)}$에 쓰면 $\det(c A^{(j,k)}) = c^{n-1} \det A^{(j,k)}$이다. (K1), (K2)에 의해
$$
\begin{aligned}
&(\operatorname{cof}(cA))_{j,k} \\
&= (-1)^{j+k} \big(c^{n-1} \det A^{(j,k)}\big) \\
&= c^{n-1} (\operatorname{cof} A)_{j,k}
\end{aligned}
$$
이고, 오른쪽은 행렬의 (1)에 의해 $c^{n-1} \operatorname{cof} A$의 $(j, k)$ 성분이다. 따라서 $\operatorname{cof}(cA) = c^{n-1} \operatorname{cof} A$이다. 전치행렬의 (1)의 $(\alpha X)^T = \alpha X^T$에 의해 $\operatorname{adj}(cA) = (c^{n-1} \operatorname{cof} A)^T = c^{n-1} \operatorname{adj} A$이다. $c = -1$로 두면 $\operatorname{adj}(-A) = (-1)^{n-1} \operatorname{adj} A$이다(행렬의 (1)과 (K9)에 의해 $(-1)A = -A$이다).

$c = 0$으로 두자. 행렬의 (1)과 (K9)에 의해 $0A$는 영행렬이다. $n - 1 \ge 1$이므로 실수의 거듭제곱의 (2)의 (iv)에 의해 $0^{n-1} = 0$이고, 같은 이유로 $0 \operatorname{cof} A$와 $0 \operatorname{adj} A$는 영행렬이다. 따라서 영행렬의 여인수행렬과 수반행렬은 영행렬이다. $\blacksquare$
:::

## 예시와 반례

:::example[3 × 3 행렬의 여인수행렬과 수반행렬]
$$
A = \begin{pmatrix} 1 & 2 & 0 \\ 3 & 1 & 1 \\ 0 & 2 & 4 \end{pmatrix}
$$
이라 합시다. 아홉 개의 소행렬과 그 행렬식은 [[determinant|행렬식]]의 (4)의 $2 \times 2$ 식으로 다음과 같습니다.

- 첫째 행을 지운 것: $A^{(1,1)} = \begin{pmatrix} 1 & 1 \\ 2 & 4 \end{pmatrix}$에서 $2$, $A^{(1,2)} = \begin{pmatrix} 3 & 1 \\ 0 & 4 \end{pmatrix}$에서 $12$, $A^{(1,3)} = \begin{pmatrix} 3 & 1 \\ 0 & 2 \end{pmatrix}$에서 $6$.
- 둘째 행을 지운 것: $A^{(2,1)} = \begin{pmatrix} 2 & 0 \\ 2 & 4 \end{pmatrix}$에서 $8$, $A^{(2,2)} = \begin{pmatrix} 1 & 0 \\ 0 & 4 \end{pmatrix}$에서 $4$, $A^{(2,3)} = \begin{pmatrix} 1 & 2 \\ 0 & 2 \end{pmatrix}$에서 $2$.
- 셋째 행을 지운 것: $A^{(3,1)} = \begin{pmatrix} 2 & 0 \\ 1 & 1 \end{pmatrix}$에서 $2$, $A^{(3,2)} = \begin{pmatrix} 1 & 0 \\ 3 & 1 \end{pmatrix}$에서 $1$, $A^{(3,3)} = \begin{pmatrix} 1 & 2 \\ 3 & 1 \end{pmatrix}$에서 $-5$.

$j + k$가 홀수인 자리에 부호 $-1$을 붙이면
$$
\begin{aligned}
\operatorname{cof} A &= \begin{pmatrix} 2 & -12 & 6 \\ -8 & 4 & -2 \\ 2 & -1 & -5 \end{pmatrix}, \\
\operatorname{adj} A &= \begin{pmatrix} 2 & -8 & 2 \\ -12 & 4 & -1 \\ 6 & -2 & -5 \end{pmatrix}
\end{aligned}
$$
입니다. $A$의 첫째 행 $1$, $2$, $0$과 $\operatorname{cof} A$의 첫째 행 $2$, $-12$, $6$을 짝지어 더하면 $2 - 24 + 0 = -22$이고, [[cofactor-expansion|여인수 전개]]의 (2)에 의해 이것이 $\det A$입니다.
:::

:::counterexample[합의 수반행렬과 수반행렬의 합이 다른 3 × 3 의 예]
[[matrix|행렬]]의 (1)과 [[real-number-arithmetic|(K12)]]의 (i), (K7)에 의해 $I_3 + I_3$의 성분은 $I_3$의 성분의 $1 + 1 = 2$배이므로 $I_3 + I_3 = 2I_3$이고, (4)와 (3)에 의해 $\operatorname{adj}(I_3 + I_3) = 2^2 \operatorname{adj} I_3 = 4I_3$입니다. 한편 (3)에 의해 $\operatorname{adj} I_3 + \operatorname{adj} I_3 = 2I_3$입니다. 두 행렬은 $(1, 1)$ 성분이 $4$와 $2$로 다르므로, 이 예에서 $\operatorname{adj}(I_3 + I_3) \ne \operatorname{adj} I_3 + \operatorname{adj} I_3$입니다.

$2 \times 2$에서는 사정이 다릅니다. (1)에 의해 $\operatorname{adj} A$의 성분은 $A$의 성분이거나 그 부호를 바꾼 것이므로, [[matrix|행렬]]의 (1)과 [[real-number-arithmetic|(K12)]]의 (iv) $-(a + b) = (-a) + (-b)$에 의해 모든 $2 \times 2$ 행렬 $A$, $B$에서 $\operatorname{adj}(A + B) = \operatorname{adj} A + \operatorname{adj} B$입니다.
:::

## 확인 질문

:::check[$\begin{pmatrix} 3 & -1 \\ 4 & 2 \end{pmatrix}$의 수반행렬은 무엇인가?]
(1)에 의해 대각성분 $3$과 $2$를 맞바꾸고 나머지 두 성분의 부호를 바꾼 $\begin{pmatrix} 2 & 1 \\ -4 & 3 \end{pmatrix}$입니다. 여인수행렬은 그 전치행렬 $\begin{pmatrix} 2 & -4 \\ 1 & 3 \end{pmatrix}$입니다.
:::

:::check[$A$가 $3 \times 3$ 행렬이면 $\operatorname{adj}(-A)$와 $\operatorname{adj} A$는 어떤 관계인가?]
같습니다. (4)에 의해 $\operatorname{adj}(-A) = (-1)^{3-1} \operatorname{adj} A = (-1)^2 \operatorname{adj} A$이고, $2$는 짝수이므로 [[power-of-a-real-number|실수의 거듭제곱]]의 (5)에 의해 $(-1)^2 = 1$입니다. 소행렬이 $2 \times 2$이고 [[determinant-of-product|곱의 행렬식]]의 (4)에 의해 $2 \times 2$ 행렬의 부호를 모두 바꿔도 행렬식이 그대로이기 때문입니다.
:::
