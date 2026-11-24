---
title: 행렬식 함수
title_en: Determinant Function
aliases: [행렬식 함수의 조건, 각 행에 대해 선형, 반대칭, determinant function, multilinear in the rows, alternating]
kind: definition
field: linear-algebra
msc: ["15A15"]
level: undergrad
summary: 자연수 n 에 대하여 n × n 행렬에 실수를 대응시키는 함수 Δ 가 각 행에 대해 선형이고, 서로 다른 두 행이 같은 행렬에서 0 이고, 단위행렬에서 1 이면 행렬식 함수라 한다. 한 행이 영행이면 값이 0 이고 한 행에 c 를 곱하면 값이 c 배가 되며, 첫째 조건 아래에서 이웃한 두 행만 따져도 둘째 조건이 나온다는 것과 둘째 조건이 두 행을 맞바꾸면 부호가 바뀐다는 성질과 같다는 것을 증명한다.
requires: [function, finite-set, prime-number, even-and-odd, well-ordering-principle, mathematical-induction, real-number-arithmetic, real-function-space, matrix, echelon-form, elementary-matrix]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 1절 Introduction, p.75; 2절 What properties determinant should have, pp.76–78; 3절 Constructing the determinant 첫머리, pp.78–79; 3.1 Basic properties, p.79; 3.2 Proposition 3.1, pp.79–80; 3.3 Determinants of diagonal and triangular matrices, p.81; 3.6 Summary of properties of determinant, pp.84–85; 4절 첫머리, p.86, 4절 치환의 부호, p.88; 5절 Theorem 5.1 의 증명, p.90; 7절 연습문제 7.1, 7.2, p.97"
    checked: original
    note: "출처는 2절(pp.76–78)에서 평행육면체의 부피를 동기로 들어 행렬식이 가져야 할 성질 (2.1)–(2.5)를 이끌어 내고, 3.1절(p.79)에서 세 기본 성질, 곧 각 열에 대해 선형, 반대칭(두 열을 맞바꾸면 부호가 바뀐다), det I = 1 을 두고 '이 세 성질이 행렬식을 완전히 정한다'고 적는다. 4절 첫머리(p.86)에서는 이 세 성질을 만족하는 함수(a function, satisfying the basic properties 1, 2, 3)가 있고 하나뿐임을 보이겠다고 적는다. 이 항목은 출처와 두 가지가 다르다. 첫째, 열이 아니라 행에 대한 조건으로 정한다. 이 사이트의 기본행렬은 왼쪽에 곱해 행을 바꾸기 때문이다. 출처는 행에 대한 같은 성질을 3.6절(p.84)에서 전치행렬의 행렬식(Theorem 3.4) 뒤에 적는다. 둘째, 반대칭 대신 '서로 다른 두 행이 같으면 0'을 조건 (ii)로 둔다. 출처는 Proposition 3.1 의 2(p.79)를 반대칭에서 det A = −det A 를 얻어 이것이 det A = 0 일 때만 가능하다고 증명한다(p.80). (5)는 조건 (i) 아래에서 두 조건이 같다는 것을 보이며, 그 한 방향이 2 ≠ 0((K7))에 기댄다는 것을 밝힌다. 출처는 3절 첫머리(pp.78–79)에서 이 구성이 임의의 체의 성분을 갖는 행렬에도 통한다고 적는다. (3)은 Proposition 3.1 의 1 과 기본 성질 1 의 행판이고, 조건 (ii)는 출처 연습문제 7.1 b)(p.97)가 참·거짓으로 묻는 '두 행이나 두 열이 같으면 det A = 0'의 행 쪽이다. (4)의 이웃한 두 행에 관한 보조정리와 관련해, 출처는 4절(p.88)에서 이웃한 두 원소를 맞바꾸는 치환이 치환의 부호를 바꾼다고 적고, Theorem 5.1 의 증명(p.90)에서 이웃한 두 행을 차례로 맞바꾸어 행 전개를 옮긴다. 예시 '2 × 2 에서 성분의 식으로 정한 행렬식 함수'의 식 a₁,₁a₂,₂ − a₁,₂a₂,₁ 은 출처 1절(p.75)의 2 × 2 행렬식 ad − bc 와 같은 식이다. 반례 '각 행에 대해 선형이고 단위행렬에서 1 이지만 행렬식 함수가 아닌 예'의 식 a₁,₁a₂,₂ 는 출처 3.3절(p.81)이 삼각행렬의 행렬식으로 적는 대각성분의 곱과 같은 식이다. 이 반례는 삼각행렬이 아닌 행렬에서 그 식이 조건 (ii)를 깨뜨림을 보인다. 확인 질문 '$2 \\times 2$ 행렬식 함수 $\\Delta$에 대하여 $\\Delta(-I_2)$는 무엇인가?'는 출처 연습문제 7.2(p.97)가 det(−A) 를 묻는 것, 3.6절의 12(p.85)가 det(aA) = aⁿ det A 를 각 행에 a 를 곱하는 것으로 설명하는 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 틀린 summary 1건, 출처의 증명을 좁게 옮긴 메모 1건, 경계 경우에서 거짓이거나 조건이 빠진 설명 문장 9건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$n$이 자연수라 하자. $M_{n \times n}$은 $n \times n$ [[matrix|행렬]] 전체의 집합이고, 행렬의 행은 그 항목에서 정한 $\mathbb{R}^n$의 원소이다. 같은 크기의 두 행렬이 "$p$번째 행을 뺀 모든 행에서 같다"는 것은 $p$가 아닌 모든 행 번호 $i$에서 두 행렬의 $i$번째 행이 같다는 뜻이다.

**행렬식 함수.** [[function|함수]] $\Delta : M_{n \times n} \to \mathbb{R}$가 **행렬식 함수**(determinant function)인 것은 정확히 다음 세 조건이 모두 성립할 때이다. 이것을 **행렬식 함수의 조건** (i)–(iii)이라 부른다.

- (i) (각 행에 대해 선형) $p \in \{1, \dots, n\}$, 실수 $\alpha$, $\beta$와 $A$, $B$, $C \in M_{n \times n}$에 대하여, $A$, $B$, $C$가 $p$번째 행을 뺀 모든 행에서 서로 같고 $C$의 $p$번째 행이 $\alpha$($A$의 $p$번째 행) $+ \beta$($B$의 $p$번째 행)이면 $\Delta(C) = \alpha \Delta(A) + \beta \Delta(B)$이다. 덧셈과 스칼라배는 $\mathbb{R}^n$의 것이다.
- (ii) (같은 두 행) $A \in M_{n \times n}$이고 $j \ne k$인 어떤 $j$, $k \in \{1, \dots, n\}$에서 $A$의 $j$번째 행과 $k$번째 행이 같으면 $\Delta(A) = 0$이다.
- (iii) (단위행렬) $\Delta(I_n) = 1$이다.

다음이 성립한다. $\Delta$는 $M_{n \times n}$에서 $\mathbb{R}$로의 함수이고 $A$, $B$, $C \in M_{n \times n}$이다. $n \ge 2$일 때 $P_{j,k}$는 [[elementary-matrix|기본행렬]]의 맞바꿈 꼴 $n \times n$ 행렬이며, 그 항목의 (2)에 의해 $P_{j,k}A$는 $A$의 $j$번째 행과 $k$번째 행을 맞바꾸고 다른 행은 그대로 둔 행렬이다.

1. (성분으로 읽기) $A$의 $i$번째 행과 $B$의 $i'$번째 행이 같은 것은 정확히 모든 $q \in \{1, \dots, n\}$에서 $a_{i,q} = b_{i',q}$일 때이다. 실수 $\alpha$, $\beta$에 대하여 $C$의 $p$번째 행이 $\alpha$($A$의 $p$번째 행) $+ \beta$($B$의 $p$번째 행)인 것은 정확히 모든 $q$에서 $c_{p,q} = \alpha a_{p,q} + \beta b_{p,q}$일 때이다.
2. ($n = 1$) $n = 1$이면 $A$를 $a_{1,1}$로 보내는 함수 $M_{1 \times 1} \to \mathbb{R}$는 행렬식 함수이다. 이때 (ii)는 $j \ne k$인 $j$, $k \in \{1\}$이 없으므로 저절로 성립한다.
3. (조건 (i)에서 나오는 것) $\Delta$가 (i)을 만족하고 $p \in \{1, \dots, n\}$이라 하자.
   - (a) $A$의 $p$번째 행이 [[echelon-form|영행]]이면 $\Delta(A) = 0$이다.
   - (b) $c$가 실수($0$이어도 된다)이고 $B$가 $p$번째 행을 뺀 모든 행에서 $A$와 같으며 $B$의 $p$번째 행이 $c$($A$의 $p$번째 행)이면 $\Delta(B) = c\,\Delta(A)$이다.
4. (이웃한 두 행) $\Delta$가 (i)을 만족하고, 다음 조건 (ii′)도 만족한다고 하자. (ii′) $p \in \{1, \dots, n - 1\}$이고 $A$의 $p$번째 행과 $p + 1$번째 행이 같으면 $\Delta(A) = 0$이다. 그러면
   - (a) $n \ge 2$이면 모든 $p \in \{1, \dots, n - 1\}$와 모든 $A$에서 $\Delta(P_{p,p+1}A) = -\Delta(A)$이다.
   - (b) $\Delta$는 (ii)를 만족한다.
5. (맞바꿈과 부호) $n \ge 2$이고 $\Delta$가 (i)을 만족한다고 하자.
   - (a) $\Delta$가 (ii)를 만족하면, $j \ne k$인 모든 $j$, $k \in \{1, \dots, n\}$와 모든 $A$에서 $\Delta(P_{j,k}A) = -\Delta(A)$이다. 곧 두 행을 맞바꾸면 값의 부호가 바뀐다.
   - (b) 거꾸로 $j \ne k$인 모든 $j$, $k$와 모든 $A$에서 $\Delta(P_{j,k}A) = -\Delta(A)$이면 $\Delta$는 (ii)를 만족한다.

이 항목은 행렬식 함수가 있다거나 하나뿐이라고 주장하지 않는다.
:::

:::english
Let $n$ be a natural number. $M_{n \times n}$ is the set of all $n \times n$ matrices, and the rows of a matrix are the elements of $\mathbb{R}^n$ defined in the entry on matrices. Two matrices of the same size "agree in every row except the $p$-th" means that their $i$-th rows are equal for every row index $i$ other than $p$.

**Determinant function.** A function $\Delta : M_{n \times n} \to \mathbb{R}$ is a **determinant function** exactly when all three of the following conditions hold. We call them **conditions (i)–(iii) of a determinant function**.

- (i) (Linear in each row) For $p \in \{1, \dots, n\}$, real numbers $\alpha$, $\beta$ and $A$, $B$, $C \in M_{n \times n}$: if $A$, $B$, $C$ agree with one another in every row except the $p$-th and the $p$-th row of $C$ is $\alpha$(the $p$-th row of $A$) $+ \beta$(the $p$-th row of $B$), then $\Delta(C) = \alpha \Delta(A) + \beta \Delta(B)$. The addition and scalar multiplication are those of $\mathbb{R}^n$.
- (ii) (Two equal rows) If $A \in M_{n \times n}$ and the $j$-th and $k$-th rows of $A$ are equal for some $j$, $k \in \{1, \dots, n\}$ with $j \ne k$, then $\Delta(A) = 0$.
- (iii) (Identity matrix) $\Delta(I_n) = 1$.

The following hold. $\Delta$ is a function from $M_{n \times n}$ to $\mathbb{R}$ and $A$, $B$, $C \in M_{n \times n}$. When $n \ge 2$, $P_{j,k}$ is the $n \times n$ elementary matrix of interchange type, and by (2) of that entry $P_{j,k}A$ is the matrix obtained from $A$ by interchanging its $j$-th and $k$-th rows and leaving the other rows unchanged.

1. (Reading in entries) The $i$-th row of $A$ equals the $i'$-th row of $B$ exactly when $a_{i,q} = b_{i',q}$ for every $q \in \{1, \dots, n\}$. For real numbers $\alpha$, $\beta$, the $p$-th row of $C$ is $\alpha$(the $p$-th row of $A$) $+ \beta$(the $p$-th row of $B$) exactly when $c_{p,q} = \alpha a_{p,q} + \beta b_{p,q}$ for every $q$.
2. ($n = 1$) If $n = 1$, the function $M_{1 \times 1} \to \mathbb{R}$ sending $A$ to $a_{1,1}$ is a determinant function. Here (ii) holds automatically, since there are no $j$, $k \in \{1\}$ with $j \ne k$.
3. (Consequences of condition (i)) Suppose $\Delta$ satisfies (i) and $p \in \{1, \dots, n\}$.
   - (a) If the $p$-th row of $A$ is a zero row, then $\Delta(A) = 0$.
   - (b) If $c$ is a real number (possibly $0$), $B$ agrees with $A$ in every row except the $p$-th, and the $p$-th row of $B$ is $c$(the $p$-th row of $A$), then $\Delta(B) = c\,\Delta(A)$.
4. (Adjacent rows) Suppose $\Delta$ satisfies (i) and also the following condition (ii′): if $p \in \{1, \dots, n - 1\}$ and the $p$-th and $(p + 1)$-th rows of $A$ are equal, then $\Delta(A) = 0$. Then
   - (a) if $n \ge 2$, then $\Delta(P_{p,p+1}A) = -\Delta(A)$ for every $p \in \{1, \dots, n - 1\}$ and every $A$;
   - (b) $\Delta$ satisfies (ii).
5. (Interchange and sign) Suppose $n \ge 2$ and $\Delta$ satisfies (i).
   - (a) If $\Delta$ satisfies (ii), then $\Delta(P_{j,k}A) = -\Delta(A)$ for all $j$, $k \in \{1, \dots, n\}$ with $j \ne k$ and every $A$. That is, interchanging two rows changes the sign of the value.
   - (b) Conversely, if $\Delta(P_{j,k}A) = -\Delta(A)$ for all $j \ne k$ and every $A$, then $\Delta$ satisfies (ii).

This entry does not claim that a determinant function exists or that it is unique.
:::

## 직관

$2 \times 2$ 행렬 $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$에 수 $ad - bc$를 대응시키는 식을 본 적이 있을 것입니다. 행렬이 커지면 이런 식을 바로 쓰기 어렵습니다. 이 항목은 거꾸로, 그런 함수가 가져야 할 성질 세 가지를 먼저 정하고 그 성질을 가진 함수를 행렬식 함수라 부릅니다. 각 행을 하나의 손잡이로 보면, (i)은 다른 손잡이를 고정하고 한 손잡이만 움직일 때 값이 그 손잡이에 대해 선형이라는 것, 곧 그 행의 합은 값의 합으로, 그 행의 상수배는 값의 상수배로 옮겨진다는 것이고, (ii)는 두 손잡이가 같은 자리에 있으면 값이 $0$이라는 것이며, (iii)은 단위행렬에서 값을 $1$로 맞추는 약속입니다.

(3)은 (i)만으로 나옵니다. 영행은 영행에 $0$을 곱한 것이므로 값이 $0$배, 곧 $0$이 됩니다. (5)는 $n \ge 2$이고 (i)이 성립할 때 (ii)를 "두 행을 맞바꾸면 부호가 바뀐다"로 바꾸어 말해도 된다는 것입니다. 맞바꿔도 그대로인 행렬, 곧 두 행이 같은 행렬에서 $\Delta(A) = -\Delta(A)$가 되고, $2 \ne 0$이므로 $\Delta(A) = 0$입니다. 이 단계에서 $2 \ne 0$이 쓰입니다.

(4)는 (i)이 성립하는 함수에서 (ii)를 확인할 때 이웃한 두 행만 보면 된다는 것입니다. 떨어진 두 행이 같으면, 아래쪽 행을 바로 위의 행과 맞바꾸는 일을 되풀이해 두 행을 이웃하게 만들 수 있고, 맞바꿀 때마다 값은 부호만 바뀝니다.

## 성질의 증명

:::proof
정수에 관해서는 [[prime-number]]의 진술에서 받아들인 (Z1), [[well-ordering-principle|정렬 원리]] 항목의 (Z5)–(Z7)과 (L3), 정수끼리의 합과 차가 정수라는 것([[even-and-odd]]에서 받아들임)을 쓰고, 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 번호로 인용한다. [[finite-set|유한집합]] 항목에서 $\{1, \dots, n\} = \{i \in \mathbb{Z} : 1 \le i \le n\}$이다. 행렬을 성분으로 정할 때는 [[real-function-space|(G)]]로 있음을, [[matrix|행렬]]의 (2)로 하나뿐임을 쓴다.

**(1)의 증명.** [[matrix|행렬]]의 진술에서 $A$의 $i$번째 행은 $q$번째 값이 $a_{i,q}$인 $\mathbb{R}^n$의 원소이다. [[real-function-space|실숫값 함수의 공간]]의 진술의 $\mathbb{R}^n$에 관한 세 줄에서, 두 원소가 같은 것은 정확히 모든 $q$에서 $q$번째 값이 같을 때이고, $\alpha x + \beta y$의 $q$번째 값은 $\alpha x_q + \beta y_q$이다. 이것을 $A$의 $i$번째 행, $B$의 $i'$번째 행, $C$의 $p$번째 행에 쓰면 (1)이다.

**(2)의 증명.** $A \in M_{1 \times 1}$마다 실수 $a_{1,1}$이 하나 정해지므로 (G)에 의해 $A$를 $a_{1,1}$로 보내는 함수 $f : M_{1 \times 1} \to \mathbb{R}$가 있다. (i): $p \in \{1\}$이면 $p = 1$이다. $C$의 첫째 행이 $\alpha$($A$의 첫째 행) $+ \beta$($B$의 첫째 행)이면 (1)에 의해 $c_{1,1} = \alpha a_{1,1} + \beta b_{1,1}$이므로 $f(C) = \alpha f(A) + \beta f(B)$이다. (ii): $j$, $k \in \{1\}$이면 $j = 1 = k$이므로 $j \ne k$인 경우가 없고, (ii)는 저절로 성립한다. (iii): [[matrix|행렬]]의 (6)에 의해 $(I_1)_{1,1} = 1$이므로 $f(I_1) = 1$이다.

**(3)의 증명.** (a) [[echelon-form|영행]]의 정의에 의해 모든 $q$에서 $a_{p,q} = 0$이고, (K9)와 (K4)에 의해 $0 \cdot a_{p,q} + 0 \cdot a_{p,q} = 0 + 0 = 0 = a_{p,q}$이다. 따라서 (1)에 의해 $A$의 $p$번째 행은 $0$($A$의 $p$번째 행) $+ 0$($A$의 $p$번째 행)이다. 세 행렬을 모두 $A$로 두고 $\alpha = \beta = 0$으로 (i)을 쓰면 $\Delta(A) = 0 \cdot \Delta(A) + 0 \cdot \Delta(A) = 0$이다((K9), (K4)).

(b) 모든 $q$에서 $b_{p,q} = c\,a_{p,q} = c\,a_{p,q} + 0 \cdot a_{p,q}$이므로((K9), (K4)) (1)에 의해 $B$의 $p$번째 행은 $c$($A$의 $p$번째 행) $+ 0$($A$의 $p$번째 행)이다. $A$, $A$, $B$는 $p$번째 행을 뺀 모든 행에서 서로 같으므로 (i)에 의해 $\Delta(B) = c\,\Delta(A) + 0 \cdot \Delta(A) = c\,\Delta(A)$이다.

**맞바꿈에 관한 보조 사실.** $n \ge 2$이고 $\Delta$가 (i)을 만족하며, $j \ne k$인 $j$, $k \in \{1, \dots, n\}$에 대하여 "$j$번째 행과 $k$번째 행이 같은 모든 행렬 $X \in M_{n \times n}$에서 $\Delta(X) = 0$"이라 하자. 그러면 모든 $A$에서 $\Delta(P_{j,k}A) = -\Delta(A)$임을 보인다.

$A$를 잡고 $x$, $y$를 각각 $A$의 $j$번째 행과 $k$번째 행이라 하자. $u$, $v \in \mathbb{R}^n$마다, $(i, q)$ 성분이 $i = j$이면 $u_q$, $i = k$이면 $v_q$, $i$가 $j$도 $k$도 아니면 $a_{i,q}$인 $n \times n$ 행렬을 $H(u, v)$라 하자. $j \ne k$이므로 (Z5)에 의해 각 $i$는 이 세 경우 가운데 정확히 하나에 속하고, (G)와 행렬의 (2)에 의해 이런 행렬이 하나 있다. (1)에 의해 $H(u, v)$의 $j$번째 행은 $u$, $k$번째 행은 $v$이고, 다른 행은 $A$의 것과 같다. 줄여서 $h(u, v) = \Delta(H(u, v))$로 쓴다. 성분을 비교하면 $H(x, y) = A$이다. 또 [[elementary-matrix|기본행렬]]의 (2)에 의해 $(P_{j,k}A)_{i,q} = a_{\tau(i),q}$이고 $\tau(j) = k$, $\tau(k) = j$, 다른 $i$에서 $\tau(i) = i$이므로 $H(y, x) = P_{j,k}A$이다.

$v \in \mathbb{R}^n$을 고정하면 $H(x + y, v)$, $H(x, v)$, $H(y, v)$는 $j$번째 행을 뺀 모든 행에서 서로 같고, (K4)와 (K1)에 의해 $(x + y)_q = 1 \cdot x_q + 1 \cdot y_q$이므로 (1)에 의해 $H(x + y, v)$의 $j$번째 행은 $1 \cdot x + 1 \cdot y$이다. (i)과 (K4), (K1)에 의해 $h(x + y, v) = h(x, v) + h(y, v)$이다. 같은 방법으로 $k$번째 행에 (i)을 쓰면 $u \in \mathbb{R}^n$마다 $h(u, x + y) = h(u, x) + h(u, y)$이다. $z = x + y$로 두면 따라서

$$
\begin{aligned}
h(z, z) &= h(x, z) + h(y, z) \\
&= h(x, x) + h(x, y) \\
&\quad + h(y, x) + h(y, y)
\end{aligned}
$$

이다((K2)). $H(z, z)$, $H(x, x)$, $H(y, y)$는 $j$번째 행과 $k$번째 행이 같으므로 가정에 의해 $\Delta$의 값이 $0$이다. $h(x, y) = \Delta(A)$, $h(y, x) = \Delta(P_{j,k}A)$이므로 (K4)와 (K1)에 의해 $0 = \Delta(A) + \Delta(P_{j,k}A)$이고, (K8)의 (ii)에 의해 $\Delta(P_{j,k}A) = -\Delta(A)$이다.

**(4)의 증명.** (a) $p \in \{1, \dots, n - 1\}$이면 $p \ne p + 1$이고 $p + 1 \in \{1, \dots, n\}$이다((L3), (Z7)). (ii′)는 $p$번째 행과 $p + 1$번째 행이 같은 모든 행렬에서 $\Delta$가 $0$이라는 것이므로, 보조 사실을 $j = p$, $k = p + 1$로 쓰면 $\Delta(P_{p,p+1}A) = -\Delta(A)$이다.

(b) 자연수 $d$마다 명제 $S_d$를 "$p$, $q \in \{1, \dots, n\}$이고 $q - p = d$이며 $A$의 $p$번째 행과 $q$번째 행이 같으면 $\Delta(A) = 0$이다"로 두고, 시작점이 $1$인 [[mathematical-induction|수학적 귀납법]]으로 모든 자연수 $d$에서 $S_d$를 보인다.

기초 단계. $q - p = 1$이면 (Z7)에 의해 $q = p + 1$이고, $q \le n$이므로 다시 (Z7)에 의해 $p \le n - 1$이며 $p \in \{1, \dots, n - 1\}$이다. (ii′)에 의해 $\Delta(A) = 0$이다.

귀납 단계. $S_d$가 참이라 하고 $q - p = d + 1$인 $p$, $q$와, $p$번째 행과 $q$번째 행이 같은 $A$를 잡는다. $(q - 1) - p = d \ge 1$이므로 (Z7)에 의해 $q - 1 \ge p + 1$이고, (L3)과 (Z6)에 의해 $p < q - 1 < q$이다. 따라서 $q - 1 \ge 2$이고 $q - 1 \le n - 1$이므로 $q - 1 \in \{1, \dots, n - 1\}$이며 $n \ge 2$이다. $B = P_{q-1,q}A$라 하자. [[elementary-matrix|기본행렬]]의 (2)에서 $\tau(q - 1) = q$이고, $p$는 $q - 1$도 $q$도 아니므로 $\tau(p) = p$이다. 따라서 모든 $x$에서 $b_{p,x} = a_{p,x}$이고 $b_{q-1,x} = a_{q,x} = a_{p,x}$이므로, (1)에 의해 $B$의 $p$번째 행과 $q - 1$번째 행이 같다. $(q - 1) - p = d$이므로 $S_d$에 의해 $\Delta(B) = 0$이다. 한편 (a)를 $q - 1$에 쓰면 $\Delta(B) = -\Delta(A)$이다. 따라서 $-\Delta(A) = 0$이고, (K9)에 의해 $\Delta(A) = -(-\Delta(A)) = -0 = (-1) \cdot 0 = 0$이다.

이제 (ii)를 보인다. $j \ne k$이고 $A$의 $j$번째 행과 $k$번째 행이 같다고 하자. (Z5)에 의해 $j < k$이거나 $k < j$이다. 둘 가운데 작은 것을 $p$, 큰 것을 $q$라 하면 (Z1)에 의해 $q \ge p + 1$이고 (Z7)에 의해 $q - p \ge 1$이며 $q - p$는 정수이므로 자연수이다. $S_{q-p}$에 의해 $\Delta(A) = 0$이다.

**(5)의 증명.** (a) (ii)에 의해 $j$번째 행과 $k$번째 행이 같은 모든 행렬에서 $\Delta$는 $0$이므로, 보조 사실에 의해 $\Delta(P_{j,k}A) = -\Delta(A)$이다.

(b) $j \ne k$이고 $A$의 $j$번째 행과 $k$번째 행이 같다고 하자. [[elementary-matrix|기본행렬]]의 (2)에 의해 $(P_{j,k}A)_{i,q} = a_{\tau(i),q}$이다. $i = j$이면 이것은 $a_{k,q} = a_{j,q}$이고((1)), $i = k$이면 $a_{j,q} = a_{k,q}$이며, 다른 $i$에서는 $a_{i,q}$이다. 따라서 행렬의 (2)에 의해 $P_{j,k}A = A$이고, 가정에 의해 $\Delta(A) = \Delta(P_{j,k}A) = -\Delta(A)$이다. 양변에 $\Delta(A)$를 더하면 (K12)의 (i), (K4), (K1), (K8)의 (ii)에 의해 $(1 + 1)\Delta(A) = \Delta(A) + \Delta(A) = -\Delta(A) + \Delta(A) = 0$이다. (K7)에 의해 $1 + 1 = 2$이고 $2 \ne 0$이므로, (K10)에 의해 $\Delta(A) = 0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[2 × 2 에서 성분의 식으로 정한 행렬식 함수]
$n = 2$일 때 $f(A) = a_{1,1}a_{2,2} - a_{1,2}a_{2,1}$로 정한 함수 $f : M_{2 \times 2} \to \mathbb{R}$는 행렬식 함수입니다.

(i)을 첫째 행에서 확인합니다. $A$, $B$, $C$의 둘째 행이 모두 $(s, t)$이고 $c_{1,q} = \alpha a_{1,q} + \beta b_{1,q}$이면

$$
\begin{aligned}
f(C) &= (\alpha a_{1,1} + \beta b_{1,1})t \\
&\quad - (\alpha a_{1,2} + \beta b_{1,2})s \\
&= \alpha(a_{1,1}t - a_{1,2}s) \\
&\quad + \beta(b_{1,1}t - b_{1,2}s) \\
&= \alpha f(A) + \beta f(B)
\end{aligned}
$$

입니다. 둘째 행에서도 첫째 행을 $(s, t)$로 고정하고 같은 계산을 하면 $f(C) = s c_{2,2} - t c_{2,1} = \alpha f(A) + \beta f(B)$입니다. (ii): 두 행이 모두 $(s, t)$이면 $f(A) = st - ts = 0$입니다. (iii): $f(I_2) = 1 \cdot 1 - 0 \cdot 0 = 1$입니다.
:::

:::example[n = 1 의 행렬식 함수]
(2)에 의해 $1 \times 1$ 행렬 $\begin{pmatrix} -4 \end{pmatrix}$에서 $A$를 $a_{1,1}$로 보내는 행렬식 함수의 값은 $-4$입니다. $1 \times 1$ 행렬에는 서로 다른 두 행이 없으므로 (ii)는 아무것도 요구하지 않습니다.
:::

:::counterexample[각 행에 대해 선형이고 단위행렬에서 1 이지만 행렬식 함수가 아닌 예]
$n = 2$일 때 $g(A) = a_{1,1}a_{2,2}$로 정한 함수를 봅시다. 다른 행을 고정하면 $g$는 첫째 행의 첫째 값, 둘째 행의 둘째 값에 비례하므로 (i)을 만족하고, $g(I_2) = 1$이므로 (iii)도 만족합니다. 그러나 두 행이 모두 $(1, 1)$인 행렬 $\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$에서 $g$의 값은 $1 \cdot 1 = 1 \ne 0$이므로 (ii)를 만족하지 않습니다. 따라서 (ii)는 (i)과 (iii)에서 나오지 않습니다.
:::

## 확인 질문

:::check[$1 \times 1$ 행렬식 함수로 $A$를 $a_{1,1}$로 보내는 함수 말고 다른 것이 있을 수 있는가?]
없습니다. $A = \begin{pmatrix} a \end{pmatrix}$이면 $A$는 첫째 행을 뺀 모든 행에서 $I_1$과 같고(다른 행이 없습니다) $A$의 첫째 행은 $a$($I_1$의 첫째 행)입니다. (3)의 (b)와 (iii)에 의해 $\Delta(A) = a\,\Delta(I_1) = a$입니다.
:::

:::check[$2 \times 2$ 행렬식 함수 $\Delta$에 대하여 $\Delta(-I_2)$는 무엇인가?]
$-I_2 = \begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$입니다. $I_2$의 첫째 행에 $-1$을 곱한 행렬 $\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$은 (3)의 (b)에 의해 값이 $-\Delta(I_2) = -1$이고, 그 둘째 행에 다시 $-1$을 곱하면 $-I_2$이므로 $\Delta(-I_2) = (-1)(-1) = 1$입니다. 어떤 행렬식 함수이든 값이 같습니다.
:::
