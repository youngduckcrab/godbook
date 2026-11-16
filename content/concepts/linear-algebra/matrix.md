---
title: 행렬
title_en: Matrix
aliases: [행렬의 성분, 행렬의 열, 행렬의 행, 단위행렬, 항등행렬, 영행렬, matrix, entry, column, row, identity matrix, zero matrix]
kind: definition
field: linear-algebra
msc: ["15"]
level: undergrad
summary: 자연수 m, n 에 대하여 m × n 행렬은 {1, …, m} × {1, …, n} 에서 ℝ 로의 함수이고, 성분마다의 연산으로 벡터공간을 이룬다. 행렬은 성분으로도, 열로도 하나로 정해지고 행의 개수와 열의 개수도 하나로 정해지며, 단위행렬 Iₙ 의 k 번째 열은 표준기저의 e_k 이다.
requires: [cartesian-product, function, finite-set, prime-number, well-ordering-principle, real-number-arithmetic, vector-space, real-function-space, finite-sum-of-vectors, standard-basis]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 1.2절 Matrix notation, p.4; 1.1절 Examples 의 예 'The space M_{m×n}', p.3; 3.2절 열의 표기, p.14; 6.1절 단위행렬, p.24
    checked: original
    note: "출처는 m × n 행렬을 행이 m 개, 열이 n 개인 직사각형 배열이라 하고 배열의 원소를 성분(entries)이라 부르며, 첫째 첨자가 행 번호, 둘째 첨자가 열 번호라고 적는다(1.2절, p.4). 행 j, 열 k 의 성분을 A_{j,k} 나 (A)_{j,k} 로, 또는 같은 글자의 소문자로 쓴다고도 적는다(p.4). 이 항목은 행렬을 배열이 아니라 함수 {1, …, m} × {1, …, n} → ℝ 로 정의하고, 배열은 이 함수를 적는 표기로 둔다. 출처는 M_{m×n} 의 덧셈과 스칼라배를 성분마다 정하고, 연산이 성분마다이므로 공리가 스칼라에서 그대로 성립한다며 그 이유를 'can you see why?'로 돌린다(1.1절, pp.3–4). 이 항목은 M_{m×n} 을 real-function-space 항목의 ℝ^X 로 두어 그 항목의 명제로 벡터공간임을 얻는다. 출처는 3.2절(p.14)에서 A 의 k 번째 열을 a_k 로 쓰고 A = [a_1, …, a_n] 으로 적는다. 이 항목은 성분 a_{j,k} 와 구별하려고 열을 굵은 글자 𝐚_k 로 쓴다. 출처는 6.1절(p.24)에서 항등사상의 행렬이 주대각선이 1 이고 나머지가 0 인 n × n 행렬 I = I_n 이라고 'Clearly'를 붙여 적는다. 이 항목은 I_n 을 성분으로 정의하고 그 열이 e_k 임을 보인다. 두 행렬이 같을 조건(성분, 열), 열을 주면 행렬이 하나로 정해진다는 것, 합과 스칼라배의 열, 행의 개수와 열의 개수가 행렬마다 하나로 정해진다는 (7), 그리고 그 증명은 이 사이트가 썼다. 출처는 n × n 행렬을 square 라 부른다(5.3절, p.22). 출처는 F^n 의 원소를 세로 열로 적고 열(column)과 같은 것으로 다루지만, 이 강의는 ℝ^m 의 원소를 m × 1 행렬로 여기지 않는다. 출처의 스칼라는 실수 또는 복소수이고 이 항목은 실수만 쓴다. 예시와 반례와 확인 질문은 새로 만들었다."
status: reviewed
review_note: "2026-11-16 작성자의 자기 검토 뒤 독립 검토 통과(전반 2회, 후반 1회). 행렬의 크기가 하나로 정해진다는 사실을 진술에 더하고, 1 × 1 행렬과 ℝ¹ 의 원소의 표기, 직관의 설명, 출처 메모를 보완했다. 마지막 수정은 지휘자가 변경분을 확인했다."
added: 2026-11-16
---

:::statement
$m$, $n$이 자연수라 하자. $A$가 **$m \times n$ 행렬**(matrix)인 것은 정확히 $A$가 [[cartesian-product|곱집합]] $\{1, \dots, m\} \times \{1, \dots, n\}$에서 $\mathbb{R}$로의 [[function|함수]]일 때이다($\{1, \dots, m\}$은 [[finite-set|유한집합]] 항목의 것이다). $m \times n$ 행렬 전체의 집합을 $M_{m \times n}$으로 쓴다. 곧 $X = \{1, \dots, m\} \times \{1, \dots, n\}$이라 하면 $M_{m \times n}$은 [[real-function-space|실숫값 함수의 공간]] $\mathbb{R}^X$이다.

**성분.** $X$의 원소는 모두 $j \in \{1, \dots, m\}$, $k \in \{1, \dots, n\}$인 순서쌍 $(j, k)$이고, 순서쌍의 같음에 의해 원소마다 이 $j$와 $k$가 하나로 정해진다. 행렬 $A$의 $(j, k)$에서의 값을 $A_{j,k}$로 쓰고 $A$의 **$(j, k)$ 성분**(entry)이라 한다. $j$를 **행** 번호, $k$를 **열** 번호라 한다. 대문자 한 글자로 이름 붙인 행렬의 성분은 같은 글자의 소문자로도 쓰고(예를 들어 $A$, $B$의 성분은 $a_{j,k}$, $b_{j,k}$), $A + B$처럼 식으로 나타낸 행렬의 성분은 $(A + B)_{j,k}$처럼 괄호를 쳐 쓴다. 행렬 $A$를 $j$번째 줄의 $k$번째 자리에 $a_{j,k}$를 적은 직사각형 배열

$$
A = \begin{pmatrix} a_{1,1} & a_{1,2} & \cdots & a_{1,n} \\ a_{2,1} & a_{2,2} & \cdots & a_{2,n} \\ \vdots & \vdots & & \vdots \\ a_{m,1} & a_{m,2} & \cdots & a_{m,n} \end{pmatrix}
$$

로 나타낸다. 이 배열은 함수 $A$를 적는 표기이다. 배열의 가로줄은 $m$개, 세로줄은 $n$개이다.

**열과 행.** $A \in M_{m \times n}$이고 $k \in \{1, \dots, n\}$이라 하자. 각 $j \in \{1, \dots, m\}$에 실수 $a_{j,k}$가 정해져 있으므로 [[real-function-space|(G)]]에 의해 $j$에서의 값이 $a_{j,k}$인 $\mathbb{R}^m$의 원소 $(a_{1,k}, \dots, a_{m,k})$가 있다. 이것을 $A$의 **$k$번째 열**(column)이라 한다. 대문자 한 글자로 이름 붙인 행렬의 $k$번째 열은 같은 글자의 굵은 소문자로 쓴다(예를 들어 $A$, $B$의 $k$번째 열은 $\mathbf{a}_k$, $\mathbf{b}_k$). 곧 $\mathbf{a}_k \in \mathbb{R}^m$이고 $\mathbf{a}_k$의 $j$번째 값은 $a_{j,k}$이다. 또 $j \in \{1, \dots, m\}$에 대하여, 각 $k \in \{1, \dots, n\}$에 실수 $a_{j,k}$가 정해져 있으므로 (G)에 의해 $k$에서의 값이 $a_{j,k}$인 $\mathbb{R}^n$의 원소 $(a_{j,1}, \dots, a_{j,n})$이 있다. 이것을 $A$의 **$j$번째 행**(row)이라 한다. 각 $k$에 $\mathbb{R}^m$의 원소 $\mathbf{a}_k$가 하나씩 정해지므로 $k$번째 항이 $\mathbf{a}_k$인 $\mathbb{R}^m$의 [[finite-sum-of-vectors|벡터의 열]] $\mathbf{a}_1, \dots, \mathbf{a}_n$이 있다. "행렬의 $k$번째 열"(column)과 "벡터의 열"(sequence)은 낱말이 같지만 다른 것이다.

다음이 성립한다. $A$, $B$는 $m \times n$ 행렬이고 $\alpha$는 실수이다.

1. $M_{m \times n}$은 성분마다의 덧셈과 스칼라배, 곧 모든 $j$, $k$에서 $(A + B)_{j,k} = a_{j,k} + b_{j,k}$, $(\alpha A)_{j,k} = \alpha a_{j,k}$인 연산으로 [[vector-space|벡터공간]]이다. 영벡터는 모든 성분이 $0$인 행렬이고, 이것을 **영행렬**(zero matrix)이라 한다. $-A$는 $(j, k)$ 성분이 $-a_{j,k}$인 행렬이다.
2. $A = B$인 것은 정확히 모든 $j \in \{1, \dots, m\}$와 모든 $k \in \{1, \dots, n\}$에서 $a_{j,k} = b_{j,k}$일 때이다.
3. $A = B$인 것은 정확히 모든 $k \in \{1, \dots, n\}$에서 $\mathbf{a}_k = \mathbf{b}_k$일 때이다.
4. $v_1, \dots, v_n$이 $\mathbb{R}^m$의 길이 $n$인 벡터의 열이면, 모든 $k \in \{1, \dots, n\}$에서 $k$번째 열이 $v_k$인 $m \times n$ 행렬이 정확히 하나 있다. 그 행렬의 $(j, k)$ 성분은 $v_k$의 $j$번째 값 $v_k(j)$이다.
5. $A + B$의 $k$번째 열은 $\mathbf{a}_k + \mathbf{b}_k$이고, $\alpha A$의 $k$번째 열은 $\alpha \mathbf{a}_k$이다. 오른쪽의 덧셈과 스칼라배는 $\mathbb{R}^m$의 것이다.
6. (단위행렬) $n$이 자연수이면 $(j, k)$ 성분이 $j = k$일 때 $1$이고 $j \ne k$일 때 $0$인 $n \times n$ 행렬이 정확히 하나 있다. 이 행렬을 **단위행렬**(identity matrix)이라 하고 $I_n$으로 쓴다. $n \times n$ 행렬의 $(j, j)$ 성분($j \in \{1, \dots, n\}$)을 **대각성분**(diagonal entry)이라 한다. $I_n$의 대각성분은 모두 $1$이고 나머지 성분은 모두 $0$이다. $I_n$의 $k$번째 열은 [[standard-basis|표준기저]]의 $e_k$이다.
7. (크기) $A$가 $m \times n$ 행렬이면서 $p \times q$ 행렬이기도 하면($p$, $q$는 자연수) $m = p$이고 $n = q$이다. 따라서 행렬 $A$마다 $m$과 $n$이 하나로 정해지며, $m$을 $A$의 **행의 개수**, $n$을 $A$의 **열의 개수**라 한다. 행의 개수와 열의 개수가 같은 행렬, 곧 $n \times n$ 행렬을 **정사각행렬**(square matrix)이라 한다.

$m = 0$이나 $n = 0$인 행렬은 이 항목에서 다루지 않는다.
:::

:::english
Let $m$, $n$ be natural numbers. $A$ is an **$m \times n$ matrix** exactly when $A$ is a function from the Cartesian product $\{1, \dots, m\} \times \{1, \dots, n\}$ to $\mathbb{R}$ (here $\{1, \dots, m\}$ is the one from the entry on finite sets). We write $M_{m \times n}$ for the set of all $m \times n$ matrices. That is, if $X = \{1, \dots, m\} \times \{1, \dots, n\}$, then $M_{m \times n}$ is the space of real-valued functions $\mathbb{R}^X$.

**Entries.** Every element of $X$ is an ordered pair $(j, k)$ with $j \in \{1, \dots, m\}$ and $k \in \{1, \dots, n\}$, and by equality of ordered pairs these $j$ and $k$ are determined by the element. We write $A_{j,k}$ for the value of a matrix $A$ at $(j, k)$ and call it the **$(j, k)$ entry** of $A$. We call $j$ the **row** index and $k$ the **column** index. For a matrix named by a single capital letter we also write the entries with the same lowercase letter (for example, the entries of $A$, $B$ are $a_{j,k}$, $b_{j,k}$), and for a matrix given by an expression such as $A + B$ we write the entries with parentheses, as in $(A + B)_{j,k}$. We denote the matrix $A$ by the rectangular array with $a_{j,k}$ in the $k$-th place of the $j$-th line,

$$
A = \begin{pmatrix} a_{1,1} & a_{1,2} & \cdots & a_{1,n} \\ a_{2,1} & a_{2,2} & \cdots & a_{2,n} \\ \vdots & \vdots & & \vdots \\ a_{m,1} & a_{m,2} & \cdots & a_{m,n} \end{pmatrix}.
$$

This array is a notation for the function $A$. The array has $m$ horizontal lines and $n$ vertical lines.

**Columns and rows.** Let $A \in M_{m \times n}$ and $k \in \{1, \dots, n\}$. A real number $a_{j,k}$ is given for each $j \in \{1, \dots, m\}$, so by (G) there is the element $(a_{1,k}, \dots, a_{m,k})$ of $\mathbb{R}^m$ whose value at $j$ is $a_{j,k}$. It is called the **$k$-th column** of $A$. For a matrix named by a single capital letter we write the $k$-th column with the same lowercase letter in bold (for example, the $k$-th columns of $A$, $B$ are $\mathbf{a}_k$, $\mathbf{b}_k$). That is, $\mathbf{a}_k \in \mathbb{R}^m$ and the $j$-th value of $\mathbf{a}_k$ is $a_{j,k}$. Also, for $j \in \{1, \dots, m\}$, a real number $a_{j,k}$ is given for each $k \in \{1, \dots, n\}$, so by (G) there is the element $(a_{j,1}, \dots, a_{j,n})$ of $\mathbb{R}^n$ whose value at $k$ is $a_{j,k}$. It is called the **$j$-th row** of $A$. Since an element $\mathbf{a}_k$ of $\mathbb{R}^m$ is assigned to each $k$, there is the sequence of vectors $\mathbf{a}_1, \dots, \mathbf{a}_n$ of $\mathbb{R}^m$ whose $k$-th term is $\mathbf{a}_k$. The "$k$-th column of a matrix" and a "sequence of vectors" are different things, although the Korean text uses the same word (열) for both.

The following hold. $A$, $B$ are $m \times n$ matrices and $\alpha$ is a real number.

1. $M_{m \times n}$ is a vector space under entrywise addition and scalar multiplication, that is, under the operations with $(A + B)_{j,k} = a_{j,k} + b_{j,k}$ and $(\alpha A)_{j,k} = \alpha a_{j,k}$ for all $j$, $k$. The zero vector is the matrix all of whose entries are $0$, called the **zero matrix**. $-A$ is the matrix whose $(j, k)$ entry is $-a_{j,k}$.
2. $A = B$ exactly when $a_{j,k} = b_{j,k}$ for every $j \in \{1, \dots, m\}$ and every $k \in \{1, \dots, n\}$.
3. $A = B$ exactly when $\mathbf{a}_k = \mathbf{b}_k$ for every $k \in \{1, \dots, n\}$.
4. If $v_1, \dots, v_n$ is a sequence of vectors of $\mathbb{R}^m$ of length $n$, then there is exactly one $m \times n$ matrix whose $k$-th column is $v_k$ for every $k \in \{1, \dots, n\}$. Its $(j, k)$ entry is the $j$-th value $v_k(j)$ of $v_k$.
5. The $k$-th column of $A + B$ is $\mathbf{a}_k + \mathbf{b}_k$, and the $k$-th column of $\alpha A$ is $\alpha \mathbf{a}_k$. The addition and scalar multiplication on the right are those of $\mathbb{R}^m$.
6. (Identity matrix) If $n$ is a natural number, there is exactly one $n \times n$ matrix whose $(j, k)$ entry is $1$ when $j = k$ and $0$ when $j \ne k$. This matrix is called the **identity matrix** and written $I_n$. The $(j, j)$ entries ($j \in \{1, \dots, n\}$) of an $n \times n$ matrix are called its **diagonal entries**. All diagonal entries of $I_n$ are $1$ and all other entries are $0$. The $k$-th column of $I_n$ is the vector $e_k$ of the standard basis.
7. (Size) If $A$ is an $m \times n$ matrix and also a $p \times q$ matrix ($p$, $q$ natural numbers), then $m = p$ and $n = q$. Hence $m$ and $n$ are determined by the matrix $A$; $m$ is called the **number of rows** of $A$ and $n$ the **number of columns** of $A$. A matrix whose number of rows equals its number of columns, that is, an $n \times n$ matrix, is called a **square matrix**.

Matrices with $m = 0$ or $n = 0$ are not treated in this entry.
:::

## 직관

행렬은 칸마다 수가 하나씩 적힌 표입니다. 표의 칸은 "몇째 줄, 몇째 자리"라는 두 번호로 찾아가므로, 칸의 주소는 순서쌍 $(j, k)$이고 칸에 적힌 수가 그 주소에서의 함숫값 $a_{j,k}$입니다. 표에는 빈칸이 있을 수 있지만, 행렬은 함수이므로 모든 주소에 값이 꼭 하나 있어야 합니다. 비유가 정의와 맞아떨어지는 곳은 주소와 칸의 수이고, 빈칸을 허용하지 않는다는 점이 다릅니다.

행렬을 함수로 정하면 따로 증명할 것이 줄어듭니다. 행렬의 덧셈과 스칼라배는 함수의 공간 $\mathbb{R}^X$의 연산 그 자체이므로 벡터공간임이 바로 나오고, 두 행렬이 같다는 것은 함수의 같음, 곧 모든 칸의 수가 같다는 것입니다. 같은 표를 세로줄로 잘라 읽으면 열이 되고, (3)과 (4)는 행렬과 "열을 차례로 늘어놓은 것"이 서로를 정확히 하나씩 정한다는 뜻입니다. 다음 항목들에서 행렬과 벡터의 곱, 행렬의 곱을 모두 열로 정의하므로 이 사실이 계속 쓰입니다.

## 성질의 증명

:::proof
$X = \{1, \dots, m\} \times \{1, \dots, n\}$이라 한다. [[cartesian-product|곱집합]]의 정의에 의해 $X$의 원소는 $j \in \{1, \dots, m\}$, $k \in \{1, \dots, n\}$인 순서쌍 $(j, k)$이고, 거꾸로 이런 순서쌍은 모두 $X$에 속한다. 또 순서쌍의 같음에 의해 $(j, k) = (j', k')$이면 $j = j'$이고 $k = k'$이다.

**(1)의 증명.** $M_{m \times n} = \mathbb{R}^X$이므로 [[real-function-space|실숫값 함수의 공간]]의 명제 (1)에 의해, 값마다의 덧셈 $(A + B)(x) = A(x) + B(x)$와 스칼라배 $(\alpha A)(x) = \alpha A(x)$ ($x \in X$)로 $M_{m \times n}$은 벡터공간이다. $x = (j, k)$로 두면 이것은 $(A + B)_{j,k} = a_{j,k} + b_{j,k}$, $(\alpha A)_{j,k} = \alpha a_{j,k}$이다. 같은 명제에 의해 영벡터는 모든 $x \in X$에서 값이 $0$인 함수, 곧 모든 성분이 $0$인 행렬이고, $-A$는 $x$에서의 값이 $-A(x)$인 함수, 곧 $(j, k)$ 성분이 $-a_{j,k}$인 행렬이다.

**(2)의 증명.** $A$와 $B$는 정의역이 같은 $X$인 함수이므로 [[function|함수의 같음]]에 의해 $A = B$인 것은 정확히 모든 $x \in X$에서 $A(x) = B(x)$일 때이다. $X$의 원소는 바로 $j \in \{1, \dots, m\}$, $k \in \{1, \dots, n\}$인 순서쌍 $(j, k)$들이므로, 이 조건은 모든 $j$와 모든 $k$에서 $a_{j,k} = b_{j,k}$라는 것과 같다.

**(3)의 증명.** $A = B$라 하자. $k \in \{1, \dots, n\}$을 잡으면 (2)에 의해 모든 $j$에서 $\mathbf{a}_k$의 $j$번째 값 $a_{j,k}$와 $\mathbf{b}_k$의 $j$번째 값 $b_{j,k}$가 같다. $\mathbf{a}_k$와 $\mathbf{b}_k$는 정의역이 $\{1, \dots, m\}$인 함수이므로 함수의 같음에 의해 $\mathbf{a}_k = \mathbf{b}_k$이다. 거꾸로 모든 $k$에서 $\mathbf{a}_k = \mathbf{b}_k$라 하자. $j$, $k$를 잡으면 $a_{j,k}$는 $\mathbf{a}_k$의 $j$번째 값이고 $b_{j,k}$는 $\mathbf{b}_k$의 $j$번째 값이므로 $a_{j,k} = b_{j,k}$이다. (2)에 의해 $A = B$이다.

**(4)의 증명.** 존재: $x \in X$이면 $x = (j, k)$인 $j$, $k$가 하나로 정해지므로 $x$에 실수 $v_k(j)$가 하나 정해진다. [[real-function-space|(G)]]에 의해 $(j, k)$에서의 값이 $v_k(j)$인 함수 $C : X \to \mathbb{R}$, 곧 $c_{j,k} = v_k(j)$인 $m \times n$ 행렬 $C$가 있다. $k$를 잡으면 $C$의 $k$번째 열 $\mathbf{c}_k$의 $j$번째 값은 $c_{j,k} = v_k(j)$이므로, 정의역이 $\{1, \dots, m\}$인 두 함수 $\mathbf{c}_k$와 $v_k$는 모든 $j$에서 값이 같고 함수의 같음에 의해 $\mathbf{c}_k = v_k$이다. 유일성: $D$도 모든 $k$에서 $k$번째 열이 $v_k$인 $m \times n$ 행렬이면 모든 $k$에서 $\mathbf{d}_k = v_k = \mathbf{c}_k$이므로 (3)에 의해 $D = C$이다. 성분이 $v_k(j)$라는 것은 $C$를 만든 방법 그대로이다.

**(5)의 증명.** $k$를 잡는다. $A + B$의 $k$번째 열의 $j$번째 값은 열의 정의에 의해 $(A + B)_{j,k}$이고, (1)에 의해 이것은 $a_{j,k} + b_{j,k}$이다. $\mathbb{R}^m$의 덧셈은 [[real-function-space|실숫값 함수의 공간]]에서 값마다 정했으므로 $\mathbf{a}_k + \mathbf{b}_k$의 $j$번째 값도 $a_{j,k} + b_{j,k}$이다. 두 함수의 정의역이 $\{1, \dots, m\}$으로 같고 모든 $j$에서 값이 같으므로 함수의 같음에 의해 $A + B$의 $k$번째 열은 $\mathbf{a}_k + \mathbf{b}_k$이다. 스칼라배도 값을 비교한다. $\alpha A$의 $k$번째 열의 $j$번째 값은 열의 정의에 의해 $(\alpha A)_{j,k}$이고 (1)에 의해 이것은 $\alpha a_{j,k}$이다. 또 $\mathbb{R}^m$의 스칼라배의 정의에 의해 $\alpha \mathbf{a}_k$의 $j$번째 값도 $\alpha a_{j,k}$이다. 따라서 함수의 같음에 의해 $\alpha A$의 $k$번째 열은 $\alpha \mathbf{a}_k$이다.

**(6)의 증명.** $X = \{1, \dots, n\} \times \{1, \dots, n\}$의 원소 $(j, k)$마다 $j = k$이거나 $j \ne k$이고 둘 가운데 하나만 성립하므로, $(j, k)$에 실수($j = k$이면 $1$, $j \ne k$이면 $0$)가 하나 정해진다. (G)에 의해 이 값을 갖는 $n \times n$ 행렬이 있고, (2)에 의해 이런 행렬은 하나뿐이다. 그 $(j, j)$ 성분은 $1$이고 $j \ne k$인 $(j, k)$ 성분은 $0$이다. $k \in \{1, \dots, n\}$을 잡으면 $I_n$의 $k$번째 열의 $j$번째 값은 $j = k$이면 $1$이고 $j \ne k$이면 $0$이다. [[standard-basis|표준기저]]의 진술에 의해 $e_k$의 $j$번째 값도 $j = k$이면 $1$이고 $j \ne k$이면 $0$이다. 정의역이 $\{1, \dots, n\}$인 두 함수의 값이 모두 같으므로 함수의 같음에 의해 $I_n$의 $k$번째 열은 $e_k$이다.

**(7)의 증명.** $A$가 $m \times n$ 행렬이면서 $p \times q$ 행렬이면, $A$는 집합으로서 하나이므로 [[function|함수]]의 진술("두 함수가 같으면 정의역도 같다")에 의해 두 정의역 $\{1, \dots, m\} \times \{1, \dots, n\}$과 $\{1, \dots, p\} \times \{1, \dots, q\}$가 같다. [[finite-set|유한집합]] 항목에서 $\{1, \dots, m\} = \{i \in \mathbb{Z} : 1 \le i \le m\}$이다. $m$, $n$은 자연수, 곧 양의 정수이므로 [[prime-number]]의 진술에서 받아들인 (Z1)에 의해 $m \ge 1$, $n \ge 1$이고, $m \le m$, $1 \le 1$이므로 $m \in \{1, \dots, m\}$, $1 \in \{1, \dots, n\}$이다. 따라서 $(m, 1)$은 왼쪽 집합에 속하고, 두 집합이 같으므로 오른쪽 집합에도 속한다. [[cartesian-product|곱집합]]의 진술에 의해 $m \in \{1, \dots, p\}$, 곧 $m \le p$이다. 같은 논증을 $(p, 1)$에 쓴다. $p$, $q$도 자연수이므로 (Z1)에 의해 $p \ge 1$, $q \ge 1$이고, 따라서 $(p, 1)$은 오른쪽 집합에 속하고 따라서 왼쪽 집합에 속하므로 $p \in \{1, \dots, m\}$, 곧 $p \le m$이다. [[well-ordering-principle|정렬 원리]] 항목의 (L2)에 의해 $m = p$이다. 열의 개수도 같은 방식으로 원소를 바꾸어 쓴다. $(1, n)$은 왼쪽 집합에 속하므로 오른쪽 집합에 속하고 $n \le q$이다. $(1, q)$는 오른쪽 집합에 속하므로 왼쪽 집합에 속하고 $q \le n$이다. (L2)에 의해 $n = q$이다. $\blacksquare$
:::

## 예시와 반례

:::example[2 × 3 행렬의 성분, 열, 행]
$$
A = \begin{pmatrix} 4 & -1 & 0 \\ 2 & 5 & -3 \end{pmatrix}
$$

은 $2 \times 3$ 행렬입니다. 성분은 $a_{1,1} = 4$, $a_{1,2} = -1$, $a_{1,3} = 0$, $a_{2,1} = 2$, $a_{2,2} = 5$, $a_{2,3} = -3$이고, 함수로 적으면 순서쌍 여섯 개 $((1,1), 4)$, $((1,2), -1)$, $((1,3), 0)$, $((2,1), 2)$, $((2,2), 5)$, $((2,3), -3)$의 집합입니다. 둘째 열은 $\mathbf{a}_2 = (-1, 5) \in \mathbb{R}^2$이고 첫째 행은 $(4, -1, 0) \in \mathbb{R}^3$입니다.

같은 크기의 행렬 $B = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 2 & 3 \end{pmatrix}$에 대하여 $A + B$와 $2A$는 성분마다 계산합니다.

$$
A + B = \begin{pmatrix} 5 & 0 & 1 \\ 2 & 7 & 0 \end{pmatrix}, \qquad 2A = \begin{pmatrix} 8 & -2 & 0 \\ 4 & 10 & -6 \end{pmatrix}
$$

예를 들어 $(A + B)_{2,3} = -3 + 3 = 0$입니다. $A + B$의 둘째 열 $(0, 7)$은 (5)대로 $\mathbf{a}_2 + \mathbf{b}_2 = (-1, 5) + (1, 2) = (0, 7)$과 같습니다.
:::

:::counterexample[같은 네 수로 이루어진 서로 다른 두 행렬]
$P = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$와 $Q = \begin{pmatrix} 2 & 1 \\ 3 & 4 \end{pmatrix}$는 같은 네 수 $1, 2, 3, 4$를 성분으로 가집니다. 그러나 $p_{1,1} = 1$이고 $q_{1,1} = 2$이므로 (2)에 의해 $P \ne Q$입니다. 행렬은 수의 모임이 아니라 자리 $(j, k)$마다 수를 정하는 함수이므로, 어느 자리에 어느 수가 있는지가 행렬을 정합니다. 열로 보아도 $\mathbf{p}_1 = (1, 3)$이고 $\mathbf{q}_1 = (2, 3)$이므로 (3)에 의해 같지 않습니다.
:::

:::remark[ℝᵐ의 원소와 m × 1 행렬]
행렬의 $k$번째 열은 $\mathbb{R}^m$의 원소, 곧 정의역이 $\{1, \dots, m\}$인 함수입니다. 한편 $m \times 1$ 행렬은 정의역이 $\{1, \dots, m\} \times \{1\}$인 함수입니다. 이 강의는 둘을 같은 것으로 여기지 않고, $\mathbb{R}^m$의 원소를 행렬로 바꾸어 쓰지 않습니다. 다음 항목의 행렬과 벡터의 곱도 행렬과 $\mathbb{R}^n$의 원소의 곱으로 정의합니다.
:::

## 확인 질문

:::check[$I_3$의 $(2, 3)$ 성분과 둘째 열, 셋째 행은 무엇인가?]
$2 \ne 3$이므로 $(2, 3)$ 성분은 $0$입니다. 둘째 열은 $j$번째 값이 $(I_3)_{j,2}$인 $\mathbb{R}^3$의 원소이므로 $(0, 1, 0) = e_2$이고, 셋째 행은 $k$번째 값이 $(I_3)_{3,k}$인 $\mathbb{R}^3$의 원소이므로 $(0, 0, 1)$입니다.
:::

:::check[$2 \times 3$ 행렬과 $3 \times 2$ 행렬이 같을 수 있는가?]
없습니다. 두 행렬이 같으면 집합으로 같은 함수이므로 [[function|함수]]의 진술에 의해 정의역도 같아야 합니다. 그런데 $(1, 3)$은 $\{1, 2\} \times \{1, 2, 3\}$에 속하지만 $3 \notin \{1, 2\}$이므로 $\{1, 2, 3\} \times \{1, 2\}$에는 속하지 않습니다. 두 정의역이 다르므로 두 행렬은 같지 않습니다.
:::
