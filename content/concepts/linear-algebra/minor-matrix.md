---
title: 소행렬
title_en: Minor Matrix
aliases: [(j, k) 소행렬, 행과 열을 지운 행렬, minor matrix]
kind: definition
field: linear-algebra
msc: ["15A15"]
level: undergrad
summary: 2 이상인 자연수 n 에 대하여 n × n 행렬 A 에서 j 번째 행과 k 번째 열을 지우고 남은 성분을 그 순서대로 모은 (n − 1) × (n − 1) 행렬을 A 의 (j, k) 소행렬이라 한다. 한 행만 다른 두 행렬, 두 행이 같은 행렬, 단위행렬, 전치행렬, 두 행렬의 합과 스칼라배의 소행렬이 어떻게 되는지를 함께 증명한다.
requires: [function, finite-set, prime-number, even-and-odd, well-ordering-principle, real-function-space, matrix, transpose]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 5절 Cofactor expansion 첫머리, p.90; 같은 절의 각주 2, p.91; 5.2절 Example (Inverting 2 × 2 matrices), p.93; 6절 Minors and rank 첫머리, p.96"
    checked: original
    note: "출처는 5절 첫머리(p.90)에서 n × n 행렬 A 의 j 번째 행과 k 번째 열을 지워(crossing out) 얻는 (n − 1) × (n − 1) 행렬을 A_{j,k} 로 쓴다. 이 사이트에서 A_{j,k} 는 성분의 기호이므로 이 항목은 A^{(j,k)} 로 쓰고, 지운 뒤 남은 번호를 s_j 로 당겨 매겨 성분을 식으로 정한다. 출처는 각주 2(p.91)에서 k 번째 열을 지우면 첫째 열이 남은 열 가운데 첫째가 된다고, 곧 남은 열이 원래의 순서를 지킨다고 적는다. (1)의 'i < i′ 이면 s_j(i) < s_j(i′)' 가 이 순서를 식으로 적은 것이다. 출처가 minor 라고 부르는 것은 6절 첫머리(p.96)의 k × k 부분행렬(submatrix)의 행렬식이다. 이 사이트의 '소행렬'은 행렬식이 아니라 지운 행렬 자체를 가리킨다. 이 항목은 n ≥ 2 에서만 정의한다(1 × 1 행렬에서 행과 열을 지우면 0 × 0 이 되는데, 이 사이트에는 그런 행렬이 없다). 예시 '2 × 2 행렬의 소행렬은 1 × 1 행렬'은 출처 5.2절의 2 × 2 역행렬의 예(p.93)가 '여인수는 성분, 곧 1 × 1 행렬이다'라고 적는 것과 같은 관찰이다. 반례 '떨어진 두 행이 같을 때 두 소행렬이 다를 수 있는 예'는 각주 2(p.91)가 열 1 과 k 를 맞바꾼 뒤 지우면 남은 열의 순서가 바뀐다고 적는 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 틀린 summary 1건, 출처의 증명을 좁게 옮긴 메모 1건, 경계 경우에서 거짓이거나 조건이 빠진 설명 문장 9건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$n$이 $2$ 이상인 자연수라 하자. 그러면 $n - 1$도 자연수이다. $j \in \{1, \dots, n\}$와 $i \in \{1, \dots, n - 1\}$에 대하여, $i < j$이면 $i$이고 $i \ge j$이면 $i + 1$인 정수를 $s_j(i)$로 쓴다. 아래 (1)에 의해 $s_j(i) \in \{1, \dots, n\}$이므로 [[real-function-space|(G)]]에 의해 $s_j$는 $\{1, \dots, n - 1\}$에서 $\{1, \dots, n\}$로의 [[function|함수]]이다. $s_j$는 $j$를 건너뛰며 번호를 매긴다.

**소행렬.** $A$가 $n \times n$ [[matrix|행렬]]이고 $j$, $k \in \{1, \dots, n\}$이라 하자. $\{1, \dots, n - 1\} \times \{1, \dots, n - 1\}$의 각 원소 $(i, l)$에 실수 $a_{s_j(i), s_k(l)}$가 하나씩 정해지므로 (G)에 의해 $(i, l)$ 성분이 $a_{s_j(i), s_k(l)}$인 $(n - 1) \times (n - 1)$ 행렬이 있고, [[matrix|행렬]]의 (2)에 의해 이런 행렬은 하나뿐이다. 이 행렬을 $A$의 **$(j, k)$ 소행렬**(minor matrix)이라 하고 $A^{(j,k)}$로 쓴다. 곧 $i$, $l \in \{1, \dots, n - 1\}$에서

$$
(A^{(j,k)})_{i,l} = \begin{cases} a_{i,l} & (i < j,\ l < k) \\ a_{i,l+1} & (i < j,\ l \ge k) \\ a_{i+1,l} & (i \ge j,\ l < k) \\ a_{i+1,l+1} & (i \ge j,\ l \ge k) \end{cases}
$$

이다. $A^{(j,k)}$는 $A$에서 $j$번째 행과 $k$번째 열을 지우고 남은 성분을 그 순서대로 모은 행렬이다. $1 \times 1$ 행렬에는 소행렬을 정의하지 않는다.

다음이 성립한다. $A$, $B$, $C$는 $n \times n$ 행렬이고 $j$, $k \in \{1, \dots, n\}$이다. 행렬의 행은 [[matrix|행렬]]에서 정한 것이고, 같은 크기의 두 행렬이 "$p$번째 행을 뺀 모든 행에서 같다"는 것은 $p$가 아닌 모든 행 번호 $i$에서 두 행렬의 $i$번째 행이 같다는 뜻이다.

1. (건너뛰는 번호) $i \in \{1, \dots, n - 1\}$이면 $s_j(i) \in \{1, \dots, n\}$이고 $s_j(i) \ne j$이다. $i$, $i' \in \{1, \dots, n - 1\}$이고 $i < i'$이면 $s_j(i) < s_j(i')$이며, 따라서 $i \ne i'$이면 $s_j(i) \ne s_j(i')$이다. $p \in \{1, \dots, n\}$이고 $p \ne j$이면 $s_j(i) = p$인 $i \in \{1, \dots, n - 1\}$가 정확히 하나 있고, 그것은 $p < j$이면 $p$, $p > j$이면 $p - 1$이다. 특히 모든 $i \in \{1, \dots, n - 1\}$에서 $s_1(i) = i + 1$이고 $s_n(i) = i$이다.
2. (첫째 열을 지운 소행렬) 모든 $i$, $l \in \{1, \dots, n - 1\}$에서 $(A^{(j,1)})_{i,l} = a_{s_j(i), l+1}$이다. 특히 $(A^{(1,1)})_{i,l} = a_{i+1, l+1}$이다.
3. (한 행만 다른 두 행렬) $p \in \{1, \dots, n\}$이고 $A$와 $B$가 $p$번째 행을 뺀 모든 행에서 같다고 하자.
   - (i) $A^{(p,k)} = B^{(p,k)}$이다.
   - (ii) $j \ne p$라 하고, $r$을 $p < j$이면 $p$, $p > j$이면 $p - 1$로 두자. 그러면 $r \in \{1, \dots, n - 1\}$이고 $s_j(r) = p$이다. $A^{(j,k)}$와 $B^{(j,k)}$는 $r$번째 행을 뺀 모든 행에서 같고, $A^{(j,k)}$의 $r$번째 행의 $l$번째 값은 $a_{p, s_k(l)}$이다.
   - (iii) (ii)의 $j$와 $r$에 대하여, $C$도 $p$번째 행을 뺀 모든 행에서 $A$와 같고 실수 $\alpha$, $\beta$에 대하여 $C$의 $p$번째 행이 $\alpha$($A$의 $p$번째 행) $+ \beta$($B$의 $p$번째 행)이면, $C^{(j,k)}$의 $r$번째 행은 $\alpha$($A^{(j,k)}$의 $r$번째 행) $+ \beta$($B^{(j,k)}$의 $r$번째 행)이다. 앞의 연산은 $\mathbb{R}^n$의 것이고 뒤의 연산은 $\mathbb{R}^{n-1}$의 것이다.
4. (두 행이 같은 행렬) $p$, $q \in \{1, \dots, n\}$이고 $p < q$이며 $A$의 $p$번째 행과 $q$번째 행이 같다고 하자.
   - (i) $j \ne p$이고 $j \ne q$이면, (1)에 의해 $s_j(p') = p$, $s_j(q') = q$인 $p'$, $q' \in \{1, \dots, n - 1\}$이 하나씩 있다. 이때 $p' < q'$이고 $A^{(j,k)}$의 $p'$번째 행과 $q'$번째 행이 같다. 또 $q = p + 1$이면 $q' = p' + 1$이다.
   - (ii) $q = p + 1$이면 $A^{(p,k)} = A^{(p+1,k)}$이다.
5. (단위행렬) $(I_n)^{(j,j)} = I_{n-1}$이다.
6. (전치행렬) $(A^T)^{(j,k)} = (A^{(k,j)})^T$이다([[transpose|전치행렬]]).
7. (합과 스칼라배) $(A + B)^{(j,k)} = A^{(j,k)} + B^{(j,k)}$이고, 실수 $\alpha$에 대하여 $(\alpha A)^{(j,k)} = \alpha A^{(j,k)}$이다.
:::

:::english
Let $n$ be a natural number with $n \ge 2$. Then $n - 1$ is also a natural number. For $j \in \{1, \dots, n\}$ and $i \in \{1, \dots, n - 1\}$ we write $s_j(i)$ for the integer that is $i$ if $i < j$ and $i + 1$ if $i \ge j$. By (1) below, $s_j(i) \in \{1, \dots, n\}$, so by (G) $s_j$ is a function from $\{1, \dots, n - 1\}$ to $\{1, \dots, n\}$. The function $s_j$ numbers the indices while skipping $j$.

**Minor matrix.** Let $A$ be an $n \times n$ matrix and $j$, $k \in \{1, \dots, n\}$. A real number $a_{s_j(i), s_k(l)}$ is assigned to each element $(i, l)$ of $\{1, \dots, n - 1\} \times \{1, \dots, n - 1\}$, so by (G) there is an $(n - 1) \times (n - 1)$ matrix whose $(i, l)$ entry is $a_{s_j(i), s_k(l)}$, and by (2) of the entry on matrices there is only one such matrix. It is called the **$(j, k)$ minor matrix** of $A$ and written $A^{(j,k)}$. That is, for $i$, $l \in \{1, \dots, n - 1\}$,

$$
(A^{(j,k)})_{i,l} = \begin{cases} a_{i,l} & (i < j,\ l < k) \\ a_{i,l+1} & (i < j,\ l \ge k) \\ a_{i+1,l} & (i \ge j,\ l < k) \\ a_{i+1,l+1} & (i \ge j,\ l \ge k). \end{cases}
$$

$A^{(j,k)}$ is the matrix formed by deleting the $j$-th row and the $k$-th column of $A$ and keeping the remaining entries in their order. Minor matrices are not defined for $1 \times 1$ matrices.

The following hold. $A$, $B$, $C$ are $n \times n$ matrices and $j$, $k \in \{1, \dots, n\}$. Rows of a matrix are as defined in the entry on matrices, and two matrices of the same size "agree in every row except the $p$-th" means that their $i$-th rows are equal for every row index $i$ other than $p$.

1. (Skipping indices) If $i \in \{1, \dots, n - 1\}$, then $s_j(i) \in \{1, \dots, n\}$ and $s_j(i) \ne j$. If $i$, $i' \in \{1, \dots, n - 1\}$ and $i < i'$, then $s_j(i) < s_j(i')$; hence $i \ne i'$ implies $s_j(i) \ne s_j(i')$. If $p \in \{1, \dots, n\}$ and $p \ne j$, there is exactly one $i \in \{1, \dots, n - 1\}$ with $s_j(i) = p$, namely $p$ if $p < j$ and $p - 1$ if $p > j$. In particular, $s_1(i) = i + 1$ and $s_n(i) = i$ for every $i \in \{1, \dots, n - 1\}$.
2. (Deleting the first column) For all $i$, $l \in \{1, \dots, n - 1\}$, $(A^{(j,1)})_{i,l} = a_{s_j(i), l+1}$. In particular $(A^{(1,1)})_{i,l} = a_{i+1, l+1}$.
3. (Two matrices differing in one row) Let $p \in \{1, \dots, n\}$ and suppose $A$ and $B$ agree in every row except the $p$-th.
   - (i) $A^{(p,k)} = B^{(p,k)}$.
   - (ii) Let $j \ne p$, and let $r$ be $p$ if $p < j$ and $p - 1$ if $p > j$. Then $r \in \{1, \dots, n - 1\}$ and $s_j(r) = p$. The matrices $A^{(j,k)}$ and $B^{(j,k)}$ agree in every row except the $r$-th, and the $l$-th value of the $r$-th row of $A^{(j,k)}$ is $a_{p, s_k(l)}$.
   - (iii) With $j$ and $r$ as in (ii), if $C$ also agrees with $A$ in every row except the $p$-th and, for real numbers $\alpha$, $\beta$, the $p$-th row of $C$ is $\alpha$(the $p$-th row of $A$) $+ \beta$(the $p$-th row of $B$), then the $r$-th row of $C^{(j,k)}$ is $\alpha$(the $r$-th row of $A^{(j,k)}$) $+ \beta$(the $r$-th row of $B^{(j,k)}$). The first operations are those of $\mathbb{R}^n$ and the second those of $\mathbb{R}^{n-1}$.
4. (A matrix with two equal rows) Let $p$, $q \in \{1, \dots, n\}$ with $p < q$, and suppose the $p$-th and $q$-th rows of $A$ are equal.
   - (i) If $j \ne p$ and $j \ne q$, then by (1) there are unique $p'$, $q' \in \{1, \dots, n - 1\}$ with $s_j(p') = p$ and $s_j(q') = q$. Then $p' < q'$ and the $p'$-th and $q'$-th rows of $A^{(j,k)}$ are equal. Moreover, if $q = p + 1$ then $q' = p' + 1$.
   - (ii) If $q = p + 1$, then $A^{(p,k)} = A^{(p+1,k)}$.
5. (Identity matrix) $(I_n)^{(j,j)} = I_{n-1}$.
6. (Transpose) $(A^T)^{(j,k)} = (A^{(k,j)})^T$.
7. (Sums and scalar multiples) $(A + B)^{(j,k)} = A^{(j,k)} + B^{(j,k)}$, and $(\alpha A)^{(j,k)} = \alpha A^{(j,k)}$ for every real number $\alpha$.
:::

## 직관

종이에 적힌 $n \times n$ 표에서 $j$번째 가로줄과 $k$번째 세로줄을 가위로 오려 내고, 남은 조각들을 빈틈없이 다시 붙인다고 생각해 봅시다. 남은 칸들은 서로의 위아래, 왼쪽오른쪽 순서를 그대로 지킨 채 $(n - 1) \times (n - 1)$ 표가 됩니다. 비유가 정의와 맞아떨어지는 곳은 이 순서입니다. 새 표의 $i$번째 가로줄은 원래 표에서 $j$보다 앞이면 같은 번호의 줄이고, $j$ 이상이면 한 칸 아래의 줄이며, 이 번호 옮기기가 $s_j$입니다. 종이에서는 오려 낸 자리가 보이지만, 행렬에서는 번호를 $1$부터 다시 매기므로 어느 줄을 지웠는지가 소행렬에 남지 않습니다.

그래서 서로 다른 자리를 지운 두 소행렬이 같은 행렬일 수 있습니다. (4)의 (ii)가 그런 경우입니다. 이웃한 두 행이 같으면, 같은 열을 지우는 한 위의 행을 지우든 아래의 행을 지우든 남는 행들이 같은 순서로 같습니다. 두 행이 떨어져 있으면 그렇지 않을 수 있다는 것을 아래 반례에서 봅니다.

(3)은 행 하나만 바꾸었을 때 소행렬이 어떻게 따라 바뀌는지를 적은 것입니다. 바꾼 행을 지운 소행렬은 그대로이고, 다른 행을 지운 소행렬에서 달라질 수 있는 것은 바꾼 행이 옮겨 간 자리의 한 행뿐입니다. 그 자리가 $p$인지 $p - 1$인지는 지운 행이 바꾼 행의 위에 있는지 아래에 있는지로 정해집니다.

## 성질의 증명

:::proof
정수에 관해서는 [[prime-number]]의 진술에서 받아들인 (Z1), [[well-ordering-principle|정렬 원리]] 항목의 (Z5)–(Z7)과 (L3), 정수끼리의 합과 차가 정수라는 것([[even-and-odd]]에서 받아들임)을 쓴다. [[finite-set|유한집합]] 항목에서 $\{1, \dots, m\} = \{i \in \mathbb{Z} : 1 \le i \le m\}$이다. $n \ge 2$이므로 (Z7)에 의해 $n - 1 \ge 1$이고, $n - 1$은 정수이므로 자연수이다.

**행의 비교.** [[matrix|행렬]]의 진술에서 $n \times n$ 행렬 $A$의 $i$번째 행은 $q$번째 값이 $a_{i,q}$인 $\mathbb{R}^n$의 원소이다. [[real-function-space|실숫값 함수의 공간]]의 진술의 $\mathbb{R}^n$에 관한 세 줄에 의해, $A$의 $i$번째 행과 $B$의 $i'$번째 행이 같은 것은 정확히 모든 $q \in \{1, \dots, n\}$에서 $a_{i,q} = b_{i',q}$일 때이고, $C$의 $i$번째 행이 $\alpha$($A$의 $i$번째 행) $+ \beta$($B$의 $i$번째 행)인 것은 정확히 모든 $q$에서 $c_{i,q} = \alpha a_{i,q} + \beta b_{i,q}$일 때이다. $(n - 1) \times (n - 1)$ 행렬의 행과 $\mathbb{R}^{n-1}$에 대해서도 같다.

**(1)의 증명.** $i \in \{1, \dots, n - 1\}$, 곧 $1 \le i \le n - 1$인 정수 $i$를 잡는다. (Z5)에 의해 $i < j$와 $i \ge j$ 가운데 정확히 하나가 성립하므로 $s_j(i)$는 하나로 정해진다.

- $i < j$이면 $s_j(i) = i$이다. $1 \le i$이고, (L3)에 의해 $n - 1 < n$이므로 (Z6)에 의해 $i < n$이다. 따라서 $i \in \{1, \dots, n\}$이다. $i < j$이므로 (Z5)에 의해 $i \ne j$이다.
- $i \ge j$이면 $s_j(i) = i + 1$이고 이것은 정수이다. $i \le n - 1$이므로 (Z7)에 의해 $i + 1 \le n$이다. (L3)에 의해 $i < i + 1$이므로 (Z6)에 의해 $1 < i + 1$이고 $j < i + 1$이다. 따라서 $i + 1 \in \{1, \dots, n\}$이고, (Z5)에 의해 $i + 1 \ne j$이다.

$i < i'$이라 하자. (Z5)에 의해 다음 세 경우 가운데 하나이다. $i' < j$이면 (Z6)에 의해 $i < j$이므로 $s_j(i) = i < i' = s_j(i')$이다. $i \ge j$이면 (Z6)에 의해 $i' > j$이므로 $s_j(i) = i + 1 < i' + 1 = s_j(i')$이다((Z7)). $i < j \le i'$이면 $s_j(i) = i < j \le i' < i' + 1 = s_j(i')$이다((L3), (Z6)). 이제 $i \ne i'$이면 (Z5)에 의해 $i < i'$이거나 $i' < i$이고, 어느 쪽이든 방금 보인 것에 의해 $s_j(i)$와 $s_j(i')$ 가운데 하나가 다른 하나보다 작으므로 (Z5)에 의해 $s_j(i) \ne s_j(i')$이다.

$p \in \{1, \dots, n\}$이고 $p \ne j$라 하자. (Z5)에 의해 $p < j$이거나 $p > j$이다.

- $p < j$이면 (Z1)에 의해 $p + 1 \le j \le n$이므로 (Z6)과 (Z7)에 의해 $p \le n - 1$이다. $1 \le p$이므로 $p \in \{1, \dots, n - 1\}$이고, $p < j$이므로 $s_j(p) = p$이다.
- $p > j$이면 (Z1)에 의해 $p \ge j + 1$이므로 (Z7)에 의해 $p - 1 \ge j \ge 1$이다. $p \le n$이므로 (Z7)에 의해 $p - 1 \le n - 1$이다. 따라서 $p - 1 \in \{1, \dots, n - 1\}$이고, $p - 1 \ge j$이므로 $s_j(p - 1) = (p - 1) + 1 = p$이다.

$s_j(i) = p$인 $i$가 둘이면 방금 보인 "$i \ne i'$이면 $s_j(i) \ne s_j(i')$"에 어긋나므로 그런 $i$는 하나뿐이다. 마지막으로 $i \in \{1, \dots, n - 1\}$이면 $i \ge 1$이므로 $s_1(i) = i + 1$이고, $i \le n - 1 < n$이므로 (Z6)에 의해 $i < n$이고 $s_n(i) = i$이다.

**(2)의 증명.** 소행렬의 정의에서 $(A^{(j,1)})_{i,l} = a_{s_j(i), s_1(l)}$이고, (1)에 의해 $s_1(l) = l + 1$이다. $j = 1$이면 다시 (1)에 의해 $s_1(i) = i + 1$이다.

**(3)의 증명.** (i) $i$, $l \in \{1, \dots, n - 1\}$을 잡는다. (1)에 의해 $s_p(i) \ne p$이므로 $A$와 $B$의 $s_p(i)$번째 행이 같고, 행의 비교에 의해 $a_{s_p(i), s_k(l)} = b_{s_p(i), s_k(l)}$이다. 곧 $(A^{(p,k)})_{i,l} = (B^{(p,k)})_{i,l}$이다. 모든 $i$, $l$에서 성립하므로 [[matrix|행렬]]의 (2)에 의해 $A^{(p,k)} = B^{(p,k)}$이다.

(ii) $r \in \{1, \dots, n - 1\}$이고 $s_j(r) = p$라는 것은 (1)이다. $i \in \{1, \dots, n - 1\}$이고 $i \ne r$이면 (1)에 의해 $s_j(i) \ne s_j(r) = p$이므로 $A$와 $B$의 $s_j(i)$번째 행이 같고, 행의 비교에 의해 모든 $l$에서 $(A^{(j,k)})_{i,l} = a_{s_j(i), s_k(l)} = b_{s_j(i), s_k(l)} = (B^{(j,k)})_{i,l}$이다. 다시 행의 비교에 의해 $A^{(j,k)}$와 $B^{(j,k)}$의 $i$번째 행이 같다. 또 $(A^{(j,k)})_{r,l} = a_{s_j(r), s_k(l)} = a_{p, s_k(l)}$이다.

(iii) 모든 $l$에서 (ii)와 행의 비교에 의해
$$
\begin{aligned}
(C^{(j,k)})_{r,l} &= c_{p, s_k(l)} \\
&= \alpha a_{p, s_k(l)} + \beta b_{p, s_k(l)} \\
&= \alpha (A^{(j,k)})_{r,l} + \beta (B^{(j,k)})_{r,l}
\end{aligned}
$$
이다. 행의 비교에 의해 $C^{(j,k)}$의 $r$번째 행은 $\alpha$($A^{(j,k)}$의 $r$번째 행) $+ \beta$($B^{(j,k)}$의 $r$번째 행)이다.

**(4)의 증명.** (i) $p \ne j$, $q \ne j$이므로 (1)에 의해 $p'$, $q'$이 하나씩 있다. $q' = p'$이면 $q = s_j(q') = s_j(p') = p$이고, $q' < p'$이면 (1)에 의해 $q < p$이다. 둘 다 $p < q$와 (Z5)에 어긋나므로 (Z5)에 의해 $p' < q'$이다. 모든 $l$에서 $(A^{(j,k)})_{p',l} = a_{p, s_k(l)}$이고 $(A^{(j,k)})_{q',l} = a_{q, s_k(l)}$이며, $A$의 $p$번째 행과 $q$번째 행이 같으므로 행의 비교에 의해 두 값이 같다. 따라서 행의 비교에 의해 $A^{(j,k)}$의 $p'$번째 행과 $q'$번째 행이 같다.

$q = p + 1$이라 하자. (Z5)에 의해 $j < p$이거나 $j > p$이다. $j > p$이면 (Z1)에 의해 $j \ge p + 1$이고 $j \ne p + 1$이므로 $j > p + 1$이다. $j < p$이면 $p > j$이고 $q > j$이므로 (1)에 의해 $p' = p - 1$, $q' = q - 1 = p = p' + 1$이다. $j > p + 1$이면 $p < j$이고 $q < j$이므로 $p' = p$, $q' = p + 1 = p' + 1$이다.

(ii) $p$, $p + 1 = q \in \{1, \dots, n\}$이므로 두 소행렬이 정의된다. $i \in \{1, \dots, n - 1\}$을 잡는다. (Z5)에 의해 다음 세 경우 가운데 하나이다. $i < p$이면 (L3)과 (Z6)에 의해 $i < p + 1$이므로 $s_p(i) = i = s_{p+1}(i)$이다. $i > p$이면 (Z1)에 의해 $i \ge p + 1$이고 $i \ge p$이므로 $s_p(i) = i + 1 = s_{p+1}(i)$이다. $i = p$이면 $s_p(p) = p + 1$이고 $p < p + 1$이므로 $s_{p+1}(p) = p$이다. 어느 경우든 $A$의 $s_p(i)$번째 행과 $s_{p+1}(i)$번째 행은 같은 행이거나 $A$의 $p$번째 행과 $p + 1$번째 행이므로 같다. 따라서 행의 비교에 의해 모든 $l$에서 $(A^{(p,k)})_{i,l} = a_{s_p(i), s_k(l)} = a_{s_{p+1}(i), s_k(l)} = (A^{(p+1,k)})_{i,l}$이고, [[matrix|행렬]]의 (2)에 의해 $A^{(p,k)} = A^{(p+1,k)}$이다.

**(5)의 증명.** $i$, $l \in \{1, \dots, n - 1\}$이면 [[matrix|행렬]]의 (6)에 의해 $((I_n)^{(j,j)})_{i,l} = (I_n)_{s_j(i), s_j(l)}$은 $s_j(i) = s_j(l)$일 때 $1$이고 아닐 때 $0$이다. $i = l$이면 $s_j(i) = s_j(l)$이고, $i \ne l$이면 (1)에 의해 $s_j(i) \ne s_j(l)$이다. 따라서 이 성분은 $i = l$일 때 $1$, $i \ne l$일 때 $0$이고, 행렬의 (6)에 의해 그런 $(n - 1) \times (n - 1)$ 행렬은 $I_{n-1}$ 하나뿐이다.

**(6)의 증명.** [[transpose|전치행렬]]의 정의에 의해 $A^T$는 $n \times n$ 행렬이고 $(A^T)_{k',j'} = a_{j',k'}$이다. $i$, $l \in \{1, \dots, n - 1\}$이면
$$
\begin{aligned}
((A^T)^{(j,k)})_{i,l} &= (A^T)_{s_j(i), s_k(l)} \\
&= a_{s_k(l), s_j(i)}, \\
((A^{(k,j)})^T)_{i,l} &= (A^{(k,j)})_{l,i} \\
&= a_{s_k(l), s_j(i)}
\end{aligned}
$$
이다. 두 행렬은 모두 $(n - 1) \times (n - 1)$ 행렬이고 모든 성분이 같으므로 [[matrix|행렬]]의 (2)에 의해 같다.

**(7)의 증명.** $i$, $l \in \{1, \dots, n - 1\}$이면 소행렬의 정의와 [[matrix|행렬]]의 (1)에 의해 $((A + B)^{(j,k)})_{i,l} = (A + B)_{s_j(i), s_k(l)} = a_{s_j(i), s_k(l)} + b_{s_j(i), s_k(l)} = (A^{(j,k)})_{i,l} + (B^{(j,k)})_{i,l}$이고, 이것은 다시 행렬의 (1)에 의해 $(A^{(j,k)} + B^{(j,k)})_{i,l}$이다. 같은 방법으로 $((\alpha A)^{(j,k)})_{i,l} = \alpha a_{s_j(i), s_k(l)} = (\alpha A^{(j,k)})_{i,l}$이다. 행렬의 (2)에 의해 두 등식이 성립한다. $\blacksquare$
:::

## 예시와 반례

:::example[3 × 3 행렬의 두 소행렬]
$$
A = \begin{pmatrix} 2 & 0 & -1 \\ 5 & 3 & 4 \\ -2 & 1 & 6 \end{pmatrix}
$$

의 $(2, 3)$ 소행렬을 정의대로 구해 봅시다. $n = 3$이므로 $i$, $l \in \{1, 2\}$입니다. $s_2(1) = 1$, $s_2(2) = 3$이고 $s_3(1) = 1$, $s_3(2) = 2$이므로 $(A^{(2,3)})_{i,l} = a_{s_2(i), s_3(l)}$은 $a_{1,1} = 2$, $a_{1,2} = 0$, $a_{3,1} = -2$, $a_{3,2} = 1$입니다.

$$
\begin{aligned}
A^{(2,3)} &= \begin{pmatrix} 2 & 0 \\ -2 & 1 \end{pmatrix}, \\
A^{(1,1)} &= \begin{pmatrix} 3 & 4 \\ 1 & 6 \end{pmatrix}
\end{aligned}
$$

$A^{(1,1)}$은 (2)의 $(A^{(1,1)})_{i,l} = a_{i+1,l+1}$로 구했습니다. 둘 다 둘째 행과 셋째 열, 또는 첫째 행과 첫째 열을 손으로 가리고 남은 수를 읽은 것과 같습니다.
:::

:::example[2 × 2 행렬의 소행렬은 1 × 1 행렬]
$B = \begin{pmatrix} 7 & -3 \\ 2 & 5 \end{pmatrix}$이면 $n = 2$이므로 소행렬은 $1 \times 1$ 행렬이고, 그 성분은 $b_{s_j(1), s_k(1)}$입니다. $s_1(1) = 2$, $s_2(1) = 1$이므로

$$
\begin{aligned}
B^{(1,1)} &= \begin{pmatrix} 5 \end{pmatrix}, & B^{(1,2)} &= \begin{pmatrix} 2 \end{pmatrix}, \\
B^{(2,1)} &= \begin{pmatrix} -3 \end{pmatrix}, & B^{(2,2)} &= \begin{pmatrix} 7 \end{pmatrix}
\end{aligned}
$$

입니다. 예를 들어 $B^{(1,2)}$의 성분은 $b_{s_1(1), s_2(1)} = b_{2,1} = 2$입니다. 지운 행과 열이 아닌 자리의 성분 하나가 남습니다.
:::

:::counterexample[떨어진 두 행이 같을 때 두 소행렬이 다를 수 있는 예]
$$
A = \begin{pmatrix} 1 & 0 & 2 \\ 3 & -1 & 4 \\ 1 & 0 & 2 \end{pmatrix}
$$

는 첫째 행과 셋째 행이 같습니다. 그러나

$$
\begin{aligned}
A^{(1,1)} &= \begin{pmatrix} -1 & 4 \\ 0 & 2 \end{pmatrix}, \\
A^{(3,1)} &= \begin{pmatrix} 0 & 2 \\ -1 & 4 \end{pmatrix}
\end{aligned}
$$

이고 $(1, 1)$ 성분이 $-1$과 $0$으로 다르므로 $A^{(1,1)} \ne A^{(3,1)}$입니다. 두 소행렬은 같은 두 행을 담고 있지만 그 순서가 다릅니다. (4)의 (ii)가 이웃한 두 행($q = p + 1$)에만 같음을 말하는 까닭이 이것입니다. 한편 둘째 행을 지운 $A^{(2,1)} = \begin{pmatrix} 0 & 2 \\ 0 & 2 \end{pmatrix}$은 (4)의 (i)대로 $p' = 1$, $q' = 2$번째 행이 같습니다.
:::

## 확인 질문

:::check[$I_3$의 $(1, 2)$ 소행렬은 $I_2$인가?]
아닙니다. $s_1(1) = 2$, $s_1(2) = 3$, $s_2(1) = 1$, $s_2(2) = 3$이므로 성분은 $(I_3)_{2,1} = 0$, $(I_3)_{2,3} = 0$, $(I_3)_{3,1} = 0$, $(I_3)_{3,3} = 1$이고

$$
(I_3)^{(1,2)} = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}
$$

입니다. $(1, 1)$ 성분이 $0$이므로 $I_2$가 아닙니다. (5)는 지운 행과 열의 번호가 같은 $(j, j)$ 소행렬에 대한 것입니다.
:::

:::check[$4 \times 4$ 행렬 $A$와 $B$가 넷째 행을 뺀 모든 행에서 같으면, $A^{(3,2)}$와 $B^{(3,2)}$는 어느 행을 뺀 모든 행에서 같은가?]
$p = 4$이고 $j = 3$이므로 $p > j$이고, (3)의 (ii)에서 $r = p - 1 = 3$입니다. 따라서 셋째 행을 뺀 모든 행에서 같습니다. $s_2(1) = 1$, $s_2(2) = 3$, $s_2(3) = 4$이므로 $A^{(3,2)}$의 셋째 행은 $(a_{4,1}, a_{4,3}, a_{4,4})$이고, 이것은 $A$의 넷째 행에서 둘째 값을 지운 것입니다. $j = 4$로 넷째 행 자체를 지우면 (3)의 (i)에 의해 $A^{(4,k)} = B^{(4,k)}$입니다.
:::
