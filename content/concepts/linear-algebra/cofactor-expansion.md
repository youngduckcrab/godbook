---
title: 여인수 전개
title_en: Cofactor Expansion
aliases: [여인수, 라플라스 전개, 행 전개, 열 전개, cofactor, cofactor expansion, Laplace expansion]
kind: theorem
field: linear-algebra
msc: ["15A15"]
level: undergrad
summary: 2 이상인 n 에 대하여 n × n 행렬 A 의 (j, k) 여인수를 (−1)^(j+k) det A⁽ʲ·ᵏ⁾ 로 정의한다. det A 는 어느 열이나 어느 행을 따라서도 성분과 그 자리의 여인수의 곱들의 합으로 전개되고, 한 열(행)의 성분을 다른 열(행)의 여인수와 짝지어 더하면 0 이다.
requires: [real-number-arithmetic, even-and-odd, prime-number, well-ordering-principle, mathematical-induction, real-function-space, finite-sum-of-vectors, matrix, transpose, power-of-a-real-number, minor-matrix, determinant, determinant-of-transpose]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 5절 Cofactor expansion, 첫 문단과 Theorem 5.1, p.90, 그 증명과 각주 2, pp.90–91, Definition(cofactors), p.91, 그 뒤의 식과 두 Remark, p.92; 5.1 Cofactor formula for the inverse matrix, Theorem 5.2 의 증명, p.93; 5.2 Example (Inverting 2 × 2 matrices), p.93; 5절 연습문제 5.1, 5.2, p.94"
    checked: original
    note: "(1)(2)는 출처 Theorem 5.1(p.90)의 행 전개와 열 전개와 같고, 여인수의 정의는 출처의 Definition(p.91) 'The numbers C_{j,k} = (−1)^{j+k} det A_{j,k} are called cofactors' 와 같다. 이 사이트는 여인수에 문자 C_{j,k} 를 쓰지 않고, 출처의 A_{j,k}(소행렬)는 A^{(j,k)} 로 쓴다. 출처의 증명은 첫째 행 전개부터 한다. 첫째 행에서 a₁,₁ 만 0 이 아니면 열 연산과 삼각행렬로 det A = a₁,₁ det A₁,₁ 을 얻고, a₁,ₖ 만 0 이 아니면 이웃한 두 열을 맞바꾸기를 되풀이해 그 경우로 돌리며(각주 2: 1 번째 열과 k 번째 열을 바로 맞바꾸면 남은 열의 순서가 바뀐다), 일반의 경우는 첫째 행의 선형성으로 합친다. 다른 행은 이웃한 두 행을 맞바꿔 얻고 열 전개는 전치로 얻는다(pp.90–91). 출처는 이 되풀이를 'Repeating this procedure' 라고 적는다. 그 앞 문장(p.90)은 a₁,₃ 의 경우를 'interchanging rows 2 and 3' 으로 앞 경우에 돌린다고 적는데, 문맥으로는 열 2 와 3 을 맞바꾸는 것이다(PDF 100 쪽 그림에서도 'rows' 이다). 이 항목은 행렬식을 첫째 열 전개로 이미 가지고 있으므로(행렬식 항목의 (3)), 첫째 열이 아닌 k 번째 열을 맨 앞으로 옮기는 보조정리 (4)를 이웃한 두 열의 맞바꿈에 대한 귀납으로 증명한다. 1 번째 열과 k 번째 열을 바로 맞바꾸지 않고 이웃한 두 열을 맞바꾸어 남은 열의 순서를 지키는 것은 출처 각주 2(p.91)와 같은 발상이다. 행 전개는 전치로 얻는다. (3)은 출처가 5.1절 Theorem 5.2 의 증명(p.93)에서 j 번째 행을 k 번째 행으로 바꾼 행렬의 j 번째 행 전개와 같은 두 행으로 보이는 사실(그 자리에서는 a_{k,1}C_{j,1} + ⋯ + a_{k,n}C_{j,n} = 0)을 행판과 열판의 진술로 올린 것이다. 출처의 Remark(p.92)는 여인수 전개를 행렬식의 정의로 쓰는 일이 많고, 3 × 3 보다 큰 행렬의 계산에는 맞지 않으며 행이나 열에 0 이 많을 때만 실용적이라고 적는다. 예시 '0 이 많은 열을 따라 전개한 3 × 3 행렬식'은 출처 연습문제 5.2(p.94, 0 이 많은 행이나 열을 골라 전개하라)와 같은 발상이다. 확인 질문 '$\\begin{pmatrix} 1 & 4 & 2 \\\\ 0 & 0 & 3 \\\\ 5 & 1 & 0 \\end{pmatrix}$의 행렬식을 둘째 행을 따라 전개하면 무엇인가?'도 같은 연습문제 5.2 와 같은 발상이다. 예시 '2 × 2 행렬의 네 가지 전개'의 여인수 d, −c, −b, a 는 출처 5.2절의 Example (Inverting 2 × 2 matrices)(p.93)가 적는 cofactor matrix (d −c; −b a) 와 같다. 반례 '다른 열의 여인수와 짝지은 3 × 3 의 합'은 위 Theorem 5.2 의 증명(p.93)이 대각 밖의 성분을 0 으로 보이는 계산을 열에 대해 한 행렬에서 확인한 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 근거 없는 최상급 1건, 행렬식이 0 인 경우에 거짓이던 반례 문장 1건, 메모의 부정 주장 2건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$n$이 $2$ 이상인 자연수이고 $A$가 $n \times n$ [[matrix|행렬]]이라 하자. 소행렬 $A^{(j,k)}$는 [[minor-matrix|소행렬]]의 것이고, 부호 $(-1)^{j+k}$는 [[power-of-a-real-number|실수의 거듭제곱]]의 것이며, 실수의 열의 합은 [[finite-sum-of-vectors|벡터의 유한 합]]을 $\mathbb{R}$에 쓴 것이다.

**여인수.** $j$, $k \in \{1, \dots, n\}$에 대하여 실수 $(-1)^{j+k} \det A^{(j,k)}$를 $A$의 **$(j, k)$ 여인수**(cofactor)라 한다. $1 \times 1$ 행렬에는 소행렬이 없으므로 여인수를 정의하지 않는다.

1. (열 전개) $k \in \{1, \dots, n\}$이면 $\det A$는 $j$번째 항이 $a_{j,k}$와 $(j, k)$ 여인수의 곱인 길이 $n$인 실수의 열의 합이다. 곧
   $$
   \begin{aligned}
   \det A &= a_{1,k} \big((-1)^{1+k} \det A^{(1,k)}\big) \\
   &\quad + \cdots \\
   &\quad + a_{n,k} \big((-1)^{n+k} \\
   &\qquad \det A^{(n,k)}\big)
   \end{aligned}
   $$
   이다.
2. (행 전개) $j \in \{1, \dots, n\}$이면 $\det A$는 $k$번째 항이 $a_{j,k}$와 $(j, k)$ 여인수의 곱인 길이 $n$인 실수의 열의 합이다.
3. (남의 여인수로 전개하면 $0$)
   - (a) (열) $k$, $l \in \{1, \dots, n\}$이고 $l \ne k$이면, $j$번째 항이 $a_{j,l}$과 $(j, k)$ 여인수의 곱인 길이 $n$인 실수의 열의 합은 $0$이다.
   - (b) (행) $i$, $j \in \{1, \dots, n\}$이고 $i \ne j$이면, $k$번째 항이 $a_{i,k}$와 $(j, k)$ 여인수의 곱인 길이 $n$인 실수의 열의 합은 $0$이다.
4. (열을 맨 앞으로 옮기기) $k \in \{1, \dots, n\}$이라 하자. 첫째 열이 $\mathbf{a}_k$이고, $2 \le l \le k$이면 $l$번째 열이 $\mathbf{a}_{l-1}$이며, $l > k$이면 $l$번째 열이 $\mathbf{a}_l$인 $n \times n$ 행렬을 $B$라 하면, 모든 $j \in \{1, \dots, n\}$에서 $B^{(j,1)} = A^{(j,k)}$이고 $\det B = (-1)^{k-1} \det A$이다. $k = 1$이면 $B = A$이다.

$k = 1$인 (1)은 [[determinant|행렬식]]의 (3)의 첫째 열 전개이다.
:::

:::english
Let $n$ be a natural number with $n \ge 2$ and $A$ an $n \times n$ matrix. The minor matrix $A^{(j,k)}$ is that of the entry on minor matrices, the sign $(-1)^{j+k}$ is a power of a real number, and sums of sequences of real numbers are finite sums of vectors applied to $\mathbb{R}$.

**Cofactors.** For $j$, $k \in \{1, \dots, n\}$, the real number $(-1)^{j+k} \det A^{(j,k)}$ is called the **$(j, k)$ cofactor** of $A$. Since a $1 \times 1$ matrix has no minor matrices, cofactors are not defined for it.

1. (Column expansion) If $k \in \{1, \dots, n\}$, then $\det A$ is the sum of the sequence of real numbers of length $n$ whose $j$-th term is the product of $a_{j,k}$ and the $(j, k)$ cofactor. That is,
   $$
   \begin{aligned}
   \det A &= a_{1,k} \big((-1)^{1+k} \det A^{(1,k)}\big) \\
   &\quad + \cdots \\
   &\quad + a_{n,k} \big((-1)^{n+k} \\
   &\qquad \det A^{(n,k)}\big).
   \end{aligned}
   $$
2. (Row expansion) If $j \in \{1, \dots, n\}$, then $\det A$ is the sum of the sequence of real numbers of length $n$ whose $k$-th term is the product of $a_{j,k}$ and the $(j, k)$ cofactor.
3. (Expanding with another line's cofactors gives $0$)
   - (a) (Columns) If $k$, $l \in \{1, \dots, n\}$ and $l \ne k$, then the sum of the sequence of real numbers of length $n$ whose $j$-th term is the product of $a_{j,l}$ and the $(j, k)$ cofactor is $0$.
   - (b) (Rows) If $i$, $j \in \{1, \dots, n\}$ and $i \ne j$, then the sum of the sequence of real numbers of length $n$ whose $k$-th term is the product of $a_{i,k}$ and the $(j, k)$ cofactor is $0$.
4. (Moving a column to the front) Let $k \in \{1, \dots, n\}$. If $B$ is the $n \times n$ matrix whose first column is $\mathbf{a}_k$, whose $l$-th column is $\mathbf{a}_{l-1}$ for $2 \le l \le k$, and whose $l$-th column is $\mathbf{a}_l$ for $l > k$, then $B^{(j,1)} = A^{(j,k)}$ for every $j \in \{1, \dots, n\}$ and $\det B = (-1)^{k-1} \det A$. If $k = 1$, then $B = A$.

The case $k = 1$ of (1) is the first column expansion, (3) of the entry on the determinant.
:::

## 직관

행렬식은 첫째 열을 따라 전개할 수 있었습니다. $k$번째 열을 따라 전개하려면 그 열을 맨 앞으로 데려오면 됩니다. 이때 $k$번째 열을 첫째 열과 바로 맞바꾸면 첫째 열이 $k$번째 자리로 가서 나머지 열의 순서가 흐트러지므로, 줄을 선 사람이 앞사람과 한 명씩 자리를 바꾸며 앞으로 나오듯이 이웃한 열과 $k - 1$번 맞바꿉니다. 그러면 나머지 열은 원래 순서를 지키고, 맞바꿀 때마다 부호가 한 번씩 바뀌어 $(-1)^{k-1}$이 붙습니다. 이 부호와 첫째 열 전개의 부호 $(-1)^{j+1}$을 곱하면 $(-1)^{j+k}$가 됩니다.

부호 $(-1)^{j+k}$는 $(1, 1)$ 자리에서 $+$이고 가로나 세로로 한 칸 옮길 때마다 바뀌어 바둑판 무늬를 이룹니다. 행 전개는 전치행렬의 열 전개입니다.

(3)은 "다른 열의 성분으로 전개한 것"이 같은 두 열을 가진 행렬의 전개라는 것입니다. $k$번째 열을 $l$번째 열로 바꾼 행렬을 $k$번째 열로 전개하면 바로 그 합이 나오는데, 이 행렬은 같은 두 열을 가지므로 행렬식이 $0$입니다.

## 증명

:::idea
(4)는 $k$에 대한 귀납법으로, $k + 1$번째 열을 앞으로 옮기는 것은 먼저 $k$번째 열과 $k + 1$번째 열을 맞바꾼 뒤 $k$번째 열을 앞으로 옮기는 것과 같다는 것을 쓴다. (1)은 $B$의 첫째 열 전개에 $(-1)^{k-1}$을 곱한 것이고, (2)는 $A^T$에 (1)을 쓴 것이며, (3)은 같은 두 열(행)을 가진 행렬에 (1)(2)를 쓴 것이다.
:::

:::hint
$B$의 $(1, 1)$ 소행렬이 아니라 $(j, 1)$ 소행렬의 $(i, l)$ 성분을 [[minor-matrix|소행렬]]의 (2)로 적고, $l + 1 \le k$인 경우와 $l + 1 > k$인 경우로 나눠 보세요.
:::

:::hint
$(-1)^{k-1}(-1)^{k-1}$과 $(-1)^{k-1}(-1)^{j+1}$은 무엇입니까?
:::

:::proof
행렬식 항목의 번호는 "행렬식의 (n)"으로, [[determinant-of-transpose|전치행렬의 행렬식]]의 번호는 "전치의 (n)"으로 인용한다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 번호로 인용한다. 행렬 $X$의 $l$번째 열 $\mathbf{x}_l$의 $r$번째 값은 [[matrix|행렬]]의 정의에 의해 $x_{r,l}$이고, 행렬의 (3)에 의해 같은 크기의 두 행렬은 모든 열이 같으면 같다. 또 행렬의 (4)에 의해 열을 하나씩 정하면 그 열들을 갖는 행렬이 하나 있다.

**(4)의 증명.** $k \in \{1, \dots, n\}$과 $n \times n$ 행렬 $X$에 대하여, (4)의 규칙으로 $X$의 열에서 만든 행렬을 $B_k(X)$로 쓴다.

소행렬의 등식. $j$, $i$, $l$을 잡는다($i$, $l \in \{1, \dots, n - 1\}$). 소행렬의 (2)에 의해 $(B^{(j,1)})_{i,l} = b_{s_j(i), l+1}$이다. [[prime-number|소수]] 항목의 (Z1)과 [[well-ordering-principle|정렬 원리]] 항목의 (Z5)에 의해 $l + 1 \le k$이거나 $l + 1 > k$이다. $l + 1 \le k$이면 $2 \le l + 1 \le k$이므로 $B$의 $l + 1$번째 열은 $\mathbf{a}_l$이고 $b_{s_j(i), l+1} = a_{s_j(i), l}$이다. 이때 정렬 원리 항목의 (L3)에 의해 $l < l + 1 \le k$이므로 $l < k$이고 $s_k(l) = l$이다. $l + 1 > k$이면 $B$의 $l + 1$번째 열은 $\mathbf{a}_{l+1}$이고 $b_{s_j(i), l+1} = a_{s_j(i), l+1}$이다. 이때 $k < l + 1$이므로 (Z1)에 의해 $k + 1 \le l + 1$이고 정렬 원리 항목의 (Z7)에 의해 $l \ge k$이므로 $s_k(l) = l + 1$이다. 어느 경우든 $(B^{(j,1)})_{i,l} = a_{s_j(i), s_k(l)} = (A^{(j,k)})_{i,l}$이고, 행렬의 (2)에 의해 $B^{(j,1)} = A^{(j,k)}$이다.

$k = 1$이면 $B$의 첫째 열은 $\mathbf{a}_1$이고 $l > 1$인 모든 $l$에서 $l$번째 열은 $\mathbf{a}_l$이므로 행렬의 (3)에 의해 $B = A$이다.

행렬식의 등식. 자연수 $k$에 대하여 명제 "$k \le n$이면 모든 $n \times n$ 행렬 $X$에서 $\det B_k(X) = (-1)^{k-1} \det X$"를 $S_k$라 하고 [[mathematical-induction|수학적 귀납법]]을 쓴다.

- 기초 단계: 위에서 본 것처럼 $B_1(X) = X$이고 $(-1)^0 = 1$이므로 (K1), (K4)에 의해 성립한다.
- 귀납 단계: $S_k$가 참이라 하고 $k + 1 \le n$이라 하자. $k < k + 1 \le n$이다. $X$가 $n \times n$ 행렬일 때, $k$번째 열이 $\mathbf{x}_{k+1}$이고 $k + 1$번째 열이 $\mathbf{x}_k$이며 나머지 열은 $X$와 같은 $n \times n$ 행렬을 $X'$이라 하자. $B_k(X')$의 열을 차례로 보면, 첫째 열은 $\mathbf{x}'_k = \mathbf{x}_{k+1}$이고, $2 \le l \le k$이면 $\mathbf{x}'_{l-1} = \mathbf{x}_{l-1}$($l - 1 \le k - 1$이므로)이며, $l = k + 1$이면 $\mathbf{x}'_{k+1} = \mathbf{x}_k$이고, $l > k + 1$이면 $\mathbf{x}'_l = \mathbf{x}_l$이다. 이것은 $B_{k+1}(X)$의 열과 모든 자리에서 같으므로 행렬의 (3)에 의해 $B_{k+1}(X) = B_k(X')$이다. $S_k$와 전치의 (6), (K9)에 의해 $\det B_{k+1}(X) = (-1)^{k-1} \det X' = (-1)^{k-1}(-\det X) = ((-1)^{k-1}(-1)) \det X$이고, 실수의 거듭제곱의 (1)에 의해 $(-1)^{k-1}(-1) = (-1)^k$이다.

따라서 모든 자연수 $k$에서 $S_k$가 참이고, $X = A$로 두면 (4)가 나온다.

**(1)의 증명.** $B = B_k(A)$라 하자. (4)에 의해 $\det B = (-1)^{k-1} \det A$이다. [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (i)에 의해 $(-1)^{k-1}(-1)^{k-1} = (-1)^{2(k-1)}$이고, $2(k - 1)$은 [[even-and-odd|짝수]]이므로 실수의 거듭제곱의 (5)에 의해 이것은 $1$이다. 양변에 $(-1)^{k-1}$을 곱하면 (K2), (K4)에 의해 $\det A = (-1)^{k-1} \det B$이다.

$n \ge 2$이므로 행렬식의 (3)에 의해 $\det B$는 $j$번째 항이 $(-1)^{j+1} b_{j,1} \det B^{(j,1)}$인 열의 합이다. $B$의 첫째 열은 $\mathbf{a}_k$이므로 $b_{j,1} = a_{j,k}$이고, (4)에 의해 $B^{(j,1)} = A^{(j,k)}$이다. 벡터의 유한 합의 (H4)에 의해 $(-1)^{k-1} \det B$는 $j$번째 항이 $(-1)^{k-1}\big((-1)^{j+1} a_{j,k} \det A^{(j,k)}\big)$인 열의 합이다. 실수의 거듭제곱의 (2)의 (i)과 $(k - 1) + (j + 1) = j + k$((K7))에 의해 $(-1)^{k-1}(-1)^{j+1} = (-1)^{j+k}$이므로, (K1), (K2)에 의해 이 항은 $a_{j,k}\big((-1)^{j+k} \det A^{(j,k)}\big)$이다. 두 열은 모든 자리에서 항이 같으므로 합도 같고, (1)이 나온다.

**(2)의 증명.** (1)을 $A^T$와 열 번호 $j$에 쓰면, $\det A^T$는 $i$번째 항이 $(A^T)_{i,j}\big((-1)^{i+j} \det (A^T)^{(i,j)}\big)$인 열의 합이다. [[transpose|전치행렬]]의 정의에 의해 $(A^T)_{i,j} = a_{j,i}$이고, 소행렬의 (6)과 전치의 (1)에 의해 $\det (A^T)^{(i,j)} = \det (A^{(j,i)})^T = \det A^{(j,i)}$이며, (K7)에 의해 $(-1)^{i+j} = (-1)^{j+i}$이다. 따라서 이 열의 $i$번째 항은 $a_{j,i}$와 $(j, i)$ 여인수의 곱이고, 전치의 (1)에 의해 $\det A = \det A^T$이다. 첨자 $i$를 $k$로 바꿔 읽으면 (2)이다.

**(3)의 증명.** (a) $k$번째 열이 $\mathbf{a}_l$이고 나머지 열은 $A$와 같은 $n \times n$ 행렬을 $A'$이라 하자. $A'$의 $k$번째 열과 $l$번째 열은 둘 다 $\mathbf{a}_l$이고 $l \ne k$이므로 전치의 (4)에 의해 $\det A' = 0$이다. 한편 (1)을 $A'$과 $k$에 쓰면 $\det A'$은 $j$번째 항이 $a'_{j,k}\big((-1)^{j+k} \det A'^{(j,k)}\big)$인 열의 합이다. $a'_{j,k} = a_{j,l}$이다. 또 소행렬의 정의에 의해 $(A'^{(j,k)})_{i,m} = a'_{s_j(i), s_k(m)}$이고 소행렬의 (1)에 의해 $s_k(m) \ne k$이므로 이 성분은 $a_{s_j(i), s_k(m)} = (A^{(j,k)})_{i,m}$이다. 행렬의 (2)에 의해 $A'^{(j,k)} = A^{(j,k)}$이다. 따라서 이 열의 $j$번째 항은 $a_{j,l}$과 $A$의 $(j, k)$ 여인수의 곱이고, 그 합은 $\det A' = 0$이다.

(b) $j$번째 행이 $A$의 $i$번째 행이고 나머지 행은 $A$와 같은 $n \times n$ 행렬을 $A''$이라 하자(성분마다 실수가 정해지므로 [[real-function-space|(G)]]와 행렬의 (2)에 의해 하나 있다). $A''$의 $i$번째 행과 $j$번째 행은 같고 $i \ne j$이므로 행렬식의 (1)의 (ii)에 의해 $\det A'' = 0$이다. (2)를 $A''$과 $j$에 쓰면 $\det A''$은 $k$번째 항이 $a''_{j,k}\big((-1)^{j+k} \det A''^{(j,k)}\big)$인 열의 합이다. $a''_{j,k} = a_{i,k}$이고, $A''$과 $A$는 $j$번째 행을 뺀 모든 행에서 같으므로 소행렬의 (3)의 (i)에 의해 $A''^{(j,k)} = A^{(j,k)}$이다. 따라서 그 합은 $0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[2 × 2 행렬의 네 가지 전개]
$A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$의 소행렬은 $1 \times 1$이고, 여인수는 $(1, 1)$이 $d$, $(1, 2)$가 $-c$, $(2, 1)$이 $-b$, $(2, 2)$가 $a$입니다. 첫째 행 전개는 $ad + b(-c)$, 둘째 행 전개는 $c(-b) + da$, 첫째 열 전개는 $ad + c(-b)$, 둘째 열 전개는 $b(-c) + da$이고, 넷 모두 [[determinant|행렬식]]의 (4)의 $ad - cb$와 같습니다.
:::

:::example[0 이 많은 열을 따라 전개한 3 × 3 행렬식]
$$
M = \begin{pmatrix} 2 & 0 & 1 \\ -1 & 3 & 0 \\ 4 & 0 & 5 \end{pmatrix}
$$

의 둘째 열은 $0$, $3$, $0$이므로 (1)을 $k = 2$로 쓰면 항이 하나만 남습니다.

$$
\begin{aligned}
\det M &= 3 \cdot (-1)^{2+2} \det \begin{pmatrix} 2 & 1 \\ 4 & 5 \end{pmatrix} \\
&= 3 \cdot (10 - 4) = 18
\end{aligned}
$$

[[determinant|행렬식]]의 (4)로 계산하면 $2 \cdot (15 - 0) - (-1) \cdot (0 - 0) + 4 \cdot (0 - 3) = 30 - 12 = 18$로 같습니다.
:::

:::counterexample[다른 열의 여인수와 짝지은 3 × 3 의 합]
위의 $M$에서 둘째 열의 여인수는 $(1, 2)$가 $(-1)^3 \det \begin{pmatrix} -1 & 0 \\ 4 & 5 \end{pmatrix} = 5$, $(2, 2)$가 $\det \begin{pmatrix} 2 & 1 \\ 4 & 5 \end{pmatrix} = 6$, $(3, 2)$가 $(-1)^5 \det \begin{pmatrix} 2 & 1 \\ -1 & 0 \end{pmatrix} = -1$입니다. 둘째 열의 성분 $0$, $3$, $0$과 짝지으면 $0 + 18 + 0 = 18 = \det M$이지만, 첫째 열의 성분 $2$, $-1$, $4$와 짝지으면 $10 - 6 - 4 = 0$이고 셋째 열의 성분 $1$, $0$, $5$와 짝지으면 $5 + 0 - 5 = 0$입니다. 이 예에서는 같은 열끼리 짝지은 합만 $\det M = 18$이고, 다른 열과 짝지은 합은 (3)대로 $0$입니다.
:::

## 확인 질문

:::check[$4 \times 4$ 행렬의 $(2, 3)$ 여인수에 붙는 부호는 무엇인가?]
$(-1)^{2+3} = (-1)^5 = -1$입니다. 그래서 $(2, 3)$ 여인수는 $-\det A^{(2,3)}$입니다.
:::

:::check[$\begin{pmatrix} 1 & 4 & 2 \\ 0 & 0 & 3 \\ 5 & 1 & 0 \end{pmatrix}$의 행렬식을 둘째 행을 따라 전개하면 무엇인가?]
둘째 행은 $0$, $0$, $3$이므로 (2)에서 셋째 항만 남고, $3 \cdot (-1)^{2+3} \det \begin{pmatrix} 1 & 4 \\ 5 & 1 \end{pmatrix} = -3 \cdot (1 - 20) = 57$입니다.
:::
