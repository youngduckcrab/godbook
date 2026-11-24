---
title: 행렬식
title_en: Determinant
aliases: [det, 행렬식의 정의, 첫째 열 전개, 2 × 2 행렬식, 3 × 3 행렬식, determinant, first column expansion]
kind: definition
field: linear-algebra
msc: ["15A15"]
level: undergrad
summary: 자연수 n 마다 n × n 행렬식 함수가 정확히 하나 있으므로, 정사각행렬 A 에 그 함수의 값을 대응시켜 A 의 행렬식 det A 라 한다. det 는 각 행에 대해 선형이고 같은 두 행에서 0 이며 det Iₙ = 1 이고, 첫째 열을 따라 전개되며, 기본행렬의 곱 E 에 대해 det(EA) = det E · det A 이다.
requires: [function, real-number-arithmetic, finite-sum-of-vectors, matrix, echelon-form, elementary-matrix, row-equivalence, power-of-a-real-number, minor-matrix, determinant-function, determinant-function-and-row-operations, determinant-function-is-unique, determinant-function-exists]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 1절 Introduction, pp.75–76; 3.5 Lemma 3.6, p.83; 3.6 Summary of properties of determinant, p.84; 4절 식 (4.2), p.89; 5절 Theorem 5.1, p.90; 7절 연습문제 7.1 a), p.97"
    checked: original
    note: "출처는 1절(p.75)에서 2 × 2 행렬 (a b; c d) 의 행렬식이 ad − bc 이고 3 × 3 행렬의 행렬식은 'Star of David' 규칙으로 구할 수 있다고 적은 뒤, 열벡터 v₁, …, vₙ 의 행렬식 D(v₁, …, vₙ) 과 그 열들로 만든 행렬 A 에 대해 det A = D(v₁, …, vₙ) 으로 쓰고, 세로 막대로 쓰는 표기도 소개한다(p.76). 이 사이트는 행렬식을 det A 로만 쓰고 세로 막대 |A| 는 쓰지 않는다(집합의 원소의 개수, 실수의 절댓값과 겹친다). 출처의 형식적 정의는 4절의 식 (4.2)(p.89), 곧 치환에 대한 합이다. 이 항목은 크기마다 하나뿐인 행렬식 함수의 값으로 정의하고 치환을 쓰지 않는다. 출처는 3.6절(p.84)에서 행렬식이 정사각행렬에만 정의된다고 강조한다. (3)의 첫째 열 전개는 출처 Theorem 5.1(p.90)의 열 전개에서 k = 1 인 경우이다. 출처는 이것을 행렬식이 있다고 놓고 증명하지만, 이 항목은 행렬식 함수의 존재 정리에서 쓴 식이 바로 det 임을 유일성으로 얻는다. (5)의 기본행렬의 행렬식은 출처 Lemma 3.6 의 증명(p.83)이 계산하기 쉽다고 하는 값이고, 출처는 그 증명에서 기본행렬이 단위행렬에 그 연산을 한 것이라 적는다. (4)의 3 × 3 식은 첫째 열 전개로 적은 것이다. 확인 질문 '$\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$를 첫째 열 전개로 적으면 무엇인가?'는 출처 1절(p.75)의 ad − bc 와 같은 식을 묻는다. 반례 '정사각이 아닌 행렬'은 출처 연습문제 7.1 a)(p.97)의 '행렬식은 정사각행렬에만 정의된다'와 같은 내용이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 뒤 항목을 인용하던 확인 질문 1건, 틀린 근거 번호 1건, 출처의 말을 틀리게 옮긴 메모 1건, 조건이 빠진 설명 문장 3건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
[[determinant-function|행렬식 함수]]와 그 조건 (i)–(iii)은 그 항목에서 정한 것이다. 자연수 $n$마다 [[determinant-function-exists|행렬식 함수의 존재]]의 (2)에 의해 $n \times n$ 행렬식 함수가 있고, [[determinant-function-is-unique|행렬식 함수의 유일성]]의 (1)에 의해 그런 함수는 하나뿐이다. 정사각행렬 $A$는 [[matrix|행렬]]의 (7)에 의해 정확히 하나의 자연수 $n$에 대하여 $n \times n$ 행렬이다. 그 $n$의 $n \times n$ 행렬식 함수의 $A$에서의 값을 $A$의 **행렬식**(determinant)이라 하고 $\det A$로 쓴다. 식으로 나타낸 행렬에는 $\det(AB)$처럼 괄호를 친다. 정사각이 아닌 행렬에는 행렬식을 정의하지 않는다. 이 사이트는 행렬식을 막대 기호 $|A|$로 쓰지 않는다.

다음이 성립한다. $n$은 자연수이고 $A \in M_{n \times n}$이다. 기본행렬과 그 곱은 [[elementary-matrix|기본행렬]]과 [[row-equivalence|행 동치]] 항목의 $n \times n$의 것이다.

1. (행렬식 함수의 조건) $A$를 $\det A$로 보내는 함수 $M_{n \times n} \to \mathbb{R}$는 $n \times n$ 행렬식 함수이다. 곧
   - (i) $p \in \{1, \dots, n\}$, 실수 $\alpha$, $\beta$와 $A$, $B$, $C \in M_{n \times n}$에 대하여, $A$, $B$, $C$가 $p$번째 행을 뺀 모든 행에서 서로 같고 $C$의 $p$번째 행이 $\alpha$($A$의 $p$번째 행) $+ \beta$($B$의 $p$번째 행)이면 $\det C = \alpha \det A + \beta \det B$이다.
   - (ii) $j \ne k$인 어떤 $j$, $k$에서 $A$의 $j$번째 행과 $k$번째 행이 같으면 $\det A = 0$이다.
   - (iii) $\det I_n = 1$이다.

   또 $\Delta$가 $n \times n$ 행렬식 함수이면 모든 $A \in M_{n \times n}$에서 $\Delta(A) = \det A$이다.
2. ($1 \times 1$) $n = 1$이면 $\det A = a_{1,1}$이다.
3. (첫째 열 전개) $n \ge 2$이면 $\det A$는 $j$번째 항이 $(-1)^{j+1} a_{j,1} \det A^{(j,1)}$인 길이 $n$인 실수의 열의 합이다. 곧
   $$
   \begin{aligned}
   \det A &= (-1)^{1+1} a_{1,1} \det A^{(1,1)} \\
   &\quad + \cdots \\
   &\quad + (-1)^{n+1} a_{n,1} \det A^{(n,1)}
   \end{aligned}
   $$
   이다. 여기서 $A^{(j,1)}$은 [[minor-matrix|소행렬]], $(-1)^{j+1}$은 [[power-of-a-real-number|실수의 거듭제곱]], 합은 [[finite-sum-of-vectors|벡터의 유한 합]]을 $\mathbb{R}$에 쓴 것이다.
4. ($2 \times 2$와 $3 \times 3$) $n = 2$이면 $\det A = a_{1,1}a_{2,2} - a_{2,1}a_{1,2}$이다. $n = 3$이면
   $$
   \begin{aligned}
   \det A &= a_{1,1}(a_{2,2}a_{3,3} - a_{3,2}a_{2,3}) \\
   &\quad - a_{2,1}(a_{1,2}a_{3,3} - a_{3,2}a_{1,3}) \\
   &\quad + a_{3,1}(a_{1,2}a_{2,3} - a_{2,2}a_{1,3})
   \end{aligned}
   $$
   이다.
5. (기본행렬) $j \ne k$이고 $c$가 실수일 때 $\det(P_{j,k}A) = -\det A$, $\det(R_{k,j}(c)A) = \det A$이고, $c \ne 0$이면 $\det(D_k(c)A) = c \det A$이다. 또 $\det P_{j,k} = -1$, $\det D_k(c) = c$, $\det R_{k,j}(c) = 1$이고, 모든 기본행렬 $G$에서 $\det G \ne 0$이며 $\det(GA) = \det G \cdot \det A$이다.
6. (기본행렬의 곱) $E$가 기본행렬의 곱이면 $\det E \ne 0$이고 $\det(EA) = \det E \cdot \det A$이다.
7. (그 밖의 성질)
   - (a) $A$의 어떤 행이 [[echelon-form|영행]]이면 $\det A = 0$이다.
   - (b) $c$가 실수($0$이어도 된다)이고 $B$가 $p$번째 행을 뺀 모든 행에서 $A$와 같으며 $B$의 $p$번째 행이 $c$($A$의 $p$번째 행)이면 $\det B = c \det A$이다.
   - (c) $E$가 기본행렬의 곱이고 $EA$가 기약 사다리꼴이면, $\det A \ne 0$인 것은 정확히 $EA = I_n$일 때이고, 그때 $\det A = (\det E)^{-1}$이다.
8. (조건 (iii)이 없는 함수) 함수 $\Delta : M_{n \times n} \to \mathbb{R}$가 조건 (i)과 (ii)를 만족하면 모든 $A$에서 $\Delta(A) = \Delta(I_n) \det A$이다.
:::

:::english
Determinant functions and their conditions (i)–(iii) are as in the entry on determinant functions. For each natural number $n$ there is an $n \times n$ determinant function by (2) of the entry on its existence, and there is only one by (1) of the entry on its uniqueness. By (7) of the entry on matrices, a square matrix $A$ is an $n \times n$ matrix for exactly one natural number $n$. The value at $A$ of the $n \times n$ determinant function for that $n$ is called the **determinant** of $A$ and written $\det A$. For a matrix given by an expression we use parentheses, as in $\det(AB)$. The determinant is not defined for matrices that are not square. This site does not write the determinant with bars as $|A|$.

The following hold. $n$ is a natural number and $A \in M_{n \times n}$. Elementary matrices and their products are the $n \times n$ ones from the entries on elementary matrices and row equivalence.

1. (Conditions of a determinant function) The function $M_{n \times n} \to \mathbb{R}$ sending $A$ to $\det A$ is an $n \times n$ determinant function. That is,
   - (i) for $p \in \{1, \dots, n\}$, real numbers $\alpha$, $\beta$ and $A$, $B$, $C \in M_{n \times n}$: if $A$, $B$, $C$ agree with one another in every row except the $p$-th and the $p$-th row of $C$ is $\alpha$(the $p$-th row of $A$) $+ \beta$(the $p$-th row of $B$), then $\det C = \alpha \det A + \beta \det B$;
   - (ii) if the $j$-th and $k$-th rows of $A$ are equal for some $j \ne k$, then $\det A = 0$;
   - (iii) $\det I_n = 1$.

   Moreover, if $\Delta$ is an $n \times n$ determinant function, then $\Delta(A) = \det A$ for every $A \in M_{n \times n}$.
2. ($1 \times 1$) If $n = 1$, then $\det A = a_{1,1}$.
3. (First column expansion) If $n \ge 2$, then $\det A$ is the sum of the sequence of real numbers of length $n$ whose $j$-th term is $(-1)^{j+1} a_{j,1} \det A^{(j,1)}$. That is,
   $$
   \begin{aligned}
   \det A &= (-1)^{1+1} a_{1,1} \det A^{(1,1)} \\
   &\quad + \cdots \\
   &\quad + (-1)^{n+1} a_{n,1} \det A^{(n,1)}.
   \end{aligned}
   $$
   Here $A^{(j,1)}$ is a minor matrix, $(-1)^{j+1}$ is a power of a real number, and the sum is a finite sum of vectors applied to $\mathbb{R}$.
4. ($2 \times 2$ and $3 \times 3$) If $n = 2$, then $\det A = a_{1,1}a_{2,2} - a_{2,1}a_{1,2}$. If $n = 3$, then
   $$
   \begin{aligned}
   \det A &= a_{1,1}(a_{2,2}a_{3,3} - a_{3,2}a_{2,3}) \\
   &\quad - a_{2,1}(a_{1,2}a_{3,3} - a_{3,2}a_{1,3}) \\
   &\quad + a_{3,1}(a_{1,2}a_{2,3} - a_{2,2}a_{1,3}).
   \end{aligned}
   $$
5. (Elementary matrices) For $j \ne k$ and a real number $c$, $\det(P_{j,k}A) = -\det A$ and $\det(R_{k,j}(c)A) = \det A$, and if $c \ne 0$ then $\det(D_k(c)A) = c \det A$. Also $\det P_{j,k} = -1$, $\det D_k(c) = c$, $\det R_{k,j}(c) = 1$, and for every elementary matrix $G$ we have $\det G \ne 0$ and $\det(GA) = \det G \cdot \det A$.
6. (Products of elementary matrices) If $E$ is a product of elementary matrices, then $\det E \ne 0$ and $\det(EA) = \det E \cdot \det A$.
7. (Further properties)
   - (a) If some row of $A$ is a zero row, then $\det A = 0$.
   - (b) If $c$ is a real number (possibly $0$), $B$ agrees with $A$ in every row except the $p$-th, and the $p$-th row of $B$ is $c$(the $p$-th row of $A$), then $\det B = c \det A$.
   - (c) If $E$ is a product of elementary matrices and $EA$ is in reduced echelon form, then $\det A \ne 0$ exactly when $EA = I_n$, and in that case $\det A = (\det E)^{-1}$.
8. (Functions without condition (iii)) If a function $\Delta : M_{n \times n} \to \mathbb{R}$ satisfies conditions (i) and (ii), then $\Delta(A) = \Delta(I_n) \det A$ for every $A$.
:::

## 직관

행렬식 함수는 크기마다 꼭 하나 있으므로, 그 값에 이름을 붙여 정사각행렬마다 수 하나를 정할 수 있습니다. 그것이 행렬식입니다. 이름만 새로 붙였을 뿐 내용은 앞 항목들에 있습니다. (1)은 행렬식 함수의 조건을 $\det$의 말로 다시 적은 것이고, (5)–(8)은 앞 항목들의 진술을 하나뿐인 행렬식 함수에 쓴 것입니다.

새로 얻는 것은 (3)의 첫째 열 전개입니다. 존재를 증명할 때 크기가 하나 작은 행렬식 함수로 만든 함수는 행렬식 함수이므로, 유일성에 의해 그 함수가 바로 $\det$입니다. 그래서 $n \times n$ 행렬의 행렬식을 $(n - 1) \times (n - 1)$ 행렬의 행렬식들로 계산할 수 있고, 되풀이하면 $1 \times 1$까지 내려갑니다. $2 \times 2$에서는 익숙한 $a_{1,1}a_{2,2} - a_{2,1}a_{1,2}$가 나옵니다.

행렬식은 정의의 모양과 상관없이 하나로 정해져 있으므로, 첫째 열 전개로 계산하든 행 소거로 계산하든 같은 값이 나옵니다.

## 성질의 증명

:::proof
앞 항목의 번호는 "행렬식 함수의 (n)", "행 연산의 (n)"([[determinant-function-and-row-operations|행 연산과 행렬식 함수]]), "유일성의 (n)", "존재의 (n)", "소행렬의 (n)"으로 인용한다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 번호로 인용한다.

**정의가 뜻을 갖는 것.** 존재의 (2)와 유일성의 (1)에 의해 자연수 $n$마다 $n \times n$ 행렬식 함수가 정확히 하나 있으므로, 이것을 $\Delta_n$이라 하면 $\Delta_n$은 하나로 정해진 함수이다. 정사각행렬 $A$의 크기 $n$은 [[matrix|행렬]]의 (7)에 의해 하나로 정해지므로 $\det A = \Delta_n(A)$는 하나로 정해진 실수이다.

**(1)의 증명.** $A \in M_{n \times n}$이면 $\det A = \Delta_n(A)$이므로 $A$를 $\det A$로 보내는 함수는 [[function|함수]]의 같음에 의해 $\Delta_n$이고, 행렬식 함수이다. (i)–(iii)은 그 세 조건을 그대로 적은 것이다. $\Delta$가 $n \times n$ 행렬식 함수이면 유일성의 (1)에 의해 $\Delta = \Delta_n$이므로 $\Delta(A) = \det A$이다.

**(2)의 증명.** 행렬식 함수의 (2)에 의해 $A$를 $a_{1,1}$로 보내는 함수가 $1 \times 1$ 행렬식 함수이므로 (1)에 의해 $\det A = a_{1,1}$이다.

**(3)의 증명.** (1)에 의해 $(n - 1) \times (n - 1)$ 행렬을 그 행렬식으로 보내는 함수는 $(n - 1) \times (n - 1)$ 행렬식 함수이다. 이것을 $\Delta'$으로 두고 존재의 (1)을 쓰면, $A$를 $j$번째 항이 $(-1)^{j+1} a_{j,1} \det A^{(j,1)}$인 열의 합으로 보내는 함수가 $n \times n$ 행렬식 함수이다. (1)에 의해 이 함수의 $A$에서의 값은 $\det A$이다.

**(4)의 증명.** $n = 2$이면 소행렬의 (1)에서 $s_1(1) = 2$, $s_2(1) = 1$이고 소행렬의 (2)에 의해 $A^{(1,1)} = \begin{pmatrix} a_{2,2} \end{pmatrix}$, $A^{(2,1)} = \begin{pmatrix} a_{1,2} \end{pmatrix}$이다. (2)에 의해 그 행렬식은 $a_{2,2}$, $a_{1,2}$이다. [[power-of-a-real-number|실수의 거듭제곱]]의 (1)과 (K12)의 (iii), (K9)에 의해 $(-1)^2 = 1$, $(-1)^3 = -1$이다. (3)과 [[finite-sum-of-vectors|벡터의 유한 합]]의 (H0)에 의해 $\det A = a_{1,1}a_{2,2} + (-1)a_{2,1}a_{1,2} = a_{1,1}a_{2,2} - a_{2,1}a_{1,2}$이다((K9), (K4)).

$n = 3$이면 소행렬의 (1)에서 $s_1(1) = 2$, $s_1(2) = 3$, $s_2(1) = 1$, $s_2(2) = 3$, $s_3(1) = 1$, $s_3(2) = 2$이고, 소행렬의 (2)의 $(A^{(j,1)})_{i,l} = a_{s_j(i), l+1}$에 의해
$$
\begin{aligned}
A^{(1,1)} &= \begin{pmatrix} a_{2,2} & a_{2,3} \\ a_{3,2} & a_{3,3} \end{pmatrix}, \\
A^{(2,1)} &= \begin{pmatrix} a_{1,2} & a_{1,3} \\ a_{3,2} & a_{3,3} \end{pmatrix}, \\
A^{(3,1)} &= \begin{pmatrix} a_{1,2} & a_{1,3} \\ a_{2,2} & a_{2,3} \end{pmatrix}
\end{aligned}
$$
이다. 방금 보인 $2 \times 2$의 식으로 각 행렬식을 적고, $(-1)^2 = 1$, $(-1)^3 = -1$, $(-1)^4 = (-1)^3(-1) = 1$을 쓴다. 길이 $3$인 열의 합은 정의에 의해 (처음 $2$개의 합) $+$ 셋째 항이고, (H0)에 의해 처음 $2$개의 합은 두 항의 합이다. 따라서 (3)에서 (4)의 식이 나온다.

**(5)의 증명.** (1)에 의해 $A$를 $\det A$로 보내는 함수는 행렬식 함수이므로, 행 연산의 (1)–(3)에서 첫 세 등식이 나온다. 행 연산의 (4)에 의해 기본행렬 $G$마다 $0$이 아닌 $d$가 있어 모든 행렬식 함수에서 $\Delta(GA) = d\,\Delta(A)$이고 $\Delta(G) = d$이다. 이것을 $\det$에 쓰면 $\det G = d \ne 0$이고 $\det(GA) = \det G \cdot \det A$이다. $G = P_{j,k}$, $D_k(c)$, $R_{k,j}(c)$이면 행 연산의 (4)가 $d$를 $-1$, $c$, $1$로 줄 수 있으므로 $\det G$는 각각 $-1$, $c$, $1$이다.

**(6)의 증명.** 행 연산의 (5)를 $\det$에 쓰면 $0$이 아닌 $c$가 있어 $\det(EA) = c \det A$이고 $\det E = c$이다.

**(7)의 증명.** (a)와 (b)는 행렬식 함수의 (3)의 (a)와 (b)를 $\det$에 쓴 것이다. (c)는 유일성의 (3)을 $\det$에 쓴 것이다.

**(8)의 증명.** (1)에 의해 $A$를 $\det A$로 보내는 함수는 행렬식 함수이므로 유일성의 (2)를 $\Delta_0$을 이 함수로 두고 쓴다. $\blacksquare$
:::

## 예시와 반례

:::example[1 × 1 과 2 × 2 의 행렬식]
(2)에 의해 $\det \begin{pmatrix} -7 \end{pmatrix} = -7$입니다. (4)에 의해

$$
\begin{aligned}
\det \begin{pmatrix} 4 & -2 \\ 3 & 5 \end{pmatrix} &= 4 \cdot 5 - 3 \cdot (-2) \\
&= 20 + 6 = 26
\end{aligned}
$$

입니다.
:::

:::example[기본행렬을 곱한 행렬의 행렬식]
$A = \begin{pmatrix} 4 & -2 \\ 3 & 5 \end{pmatrix}$에 $D_1(3)$을 곱하면 첫째 행에 $3$을 곱한 $\begin{pmatrix} 12 & -6 \\ 3 & 5 \end{pmatrix}$이고, (5)에 의해 그 행렬식은 $3 \cdot 26 = 78$입니다. (4)로 직접 계산해도 $12 \cdot 5 - 3 \cdot (-6) = 60 + 18 = 78$입니다.
:::

:::counterexample[정사각이 아닌 행렬]
$\begin{pmatrix} 2 & 0 & -1 \\ 1 & 3 & 5 \end{pmatrix}$은 $2 \times 3$ 행렬이고, [[matrix|행렬]]의 (7)에 의해 어떤 $n$에 대해서도 $n \times n$ 행렬이 아니므로 이 항목은 그 행렬식을 정의하지 않습니다. 행렬식 함수는 $n \times n$ 행렬 전체에서만 정의된 함수입니다.
:::

## 확인 질문

:::check[$\det \begin{pmatrix} a & b \\ c & d \end{pmatrix}$를 첫째 열 전개로 적으면 무엇인가?]
첫째 열은 $a$, $c$이고 $(1, 1)$ 소행렬은 $\begin{pmatrix} d \end{pmatrix}$, $(2, 1)$ 소행렬은 $\begin{pmatrix} b \end{pmatrix}$입니다. (3)에 의해 $(-1)^2 a d + (-1)^3 c b = ad - cb$입니다.
:::

:::check[$4 \times 4$ 행렬의 첫째 열 전개에서 넷째 항의 부호는 무엇인가?]
넷째 항의 부호는 $(-1)^{4+1} = (-1)^5 = -1$입니다. 부호는 $+, -, +, -$ 차례로 번갈아 붙습니다.
:::
