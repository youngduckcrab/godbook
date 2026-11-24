---
title: 실수의 유한 곱
title_en: Finite Product of Real Numbers
aliases: [유한 곱, 빈 곱, 실수의 곱, 끝항 떼기, finite product, empty product, product of a finite sequence]
kind: definition
field: linear-algebra
msc: ["15"]
level: undergrad
summary: 길이 n 인 실수의 열 a₁, …, aₙ 의 곱 a₁⋯aₙ 을 재귀 정리로 정의한다(길이 0 인 열의 곱은 1). 끝항 떼기, 두 열을 이어 붙인 열의 곱, 항별 곱, 모든 항이 같은 열의 곱이 거듭제곱이라는 것, 곱이 0 인 것은 정확히 어떤 항이 0 일 때라는 것, k 번째 항 떼어 내기를 증명한다.
requires: [function, finite-set, mathematical-induction, prime-number, well-ordering-principle, even-and-odd, natural-numbers-are-infinite, recursion-theorem, real-number-arithmetic, finite-sum-of-vectors, power-of-a-real-number]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 3장 3절, 3.3 Determinants of diagonal and triangular matrices, p.81; 3장 5절, Theorem 5.1 의 증명, p.90; 4장 1절, 1.5 Multiplicities of eigenvalues, p.103
    checked: original
    note: "출처는 3장 3.3(p.81)에서 대각행렬과 삼각행렬의 행렬식을 대각성분의 곱 a₁a₂ … aₙ, a₁,₁a₂,₂ … aₙ,ₙ 으로 적고, 4장 1.5(p.103)에서 다항식을 aₙ(z − λ₁)(z − λ₂) … (z − λₙ) 으로 적으며, 3장 연습문제 5.6(p.95)과 8장 1.4.2(p.223)에서는 곱 기호 Π 를 쓴다. 이 곱이 무엇인지(괄호를 어떻게 치는지, 항이 없을 때 무엇인지)는 적지 않는다(책 전체를 'product of', 'finite product', 'empty product', 'product of all', 'a1 a2 . . .' 로 찾아 나온 곳을 읽은 범위). 3장 5절 Theorem 5.1 의 증명(p.90)은 '첫째 항 a₁,₁ 을 뺀 대각성분 전체의 곱'을 쓰는데, 이 항목의 (6)에서 k = 1 인 경우에 해당한다. 재귀 정리로 하는 정의, 빈 곱을 1 로 정한 것, (1)–(6)의 진술과 증명은 이 사이트의 것이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 뒤 항목에 기대던 반례 2건을 바꾸고, 예시 메모의 부정 주장 2건을 지웠으며, 정의하지 않은 표기와 범위 없는 변수를 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
실수의 계산과 $a^{-1}$은 [[real-number-arithmetic]]의 것이고, 실수의 열과 그 "처음 $k$개", "덧붙인 열", "$k$번째 항을 지운 열"은 [[finite-sum-of-vectors|벡터의 유한 합]]의 진술에서 정한 것이다(길이 $n$인 실수의 열은 함수 $\{1, \dots, n\} \to \mathbb{R}$이고 $n = 0$인 빈 열을 허용한다). 실수의 거듭제곱 $c^n$은 [[power-of-a-real-number]]의 것이다.

**정의.** $n \ge 0$이 정수이고 $a_1, \dots, a_n$이 길이 $n$인 실수의 열이라 하자.

- $n = 0$이면 $a_1 \cdots a_n = 1$로 정하고, 이것을 **빈 곱**(empty product)이라 한다.
- $n \ge 1$이면, 자연수 $k$와 실수 $s$마다 $k + 1 \le n$일 때 $s \cdot a_{k+1}$, $k + 1 > n$일 때 $s$를 값으로 하는 함수 $g : \mathbb{N} \times \mathbb{R} \to \mathbb{R}$를 생각한다([[recursion-theorem|재귀 정리]]의 (1). 정수 $k + 1$과 $n$에 대하여 두 경우 가운데 정확히 하나가 성립한다는 것은 [[well-ordering-principle|(Z5)]]이다). 재귀 정리와 그 (3)에 의해 $p_1 = a_1$이고 모든 자연수 $k$에서 $p_{k+1} = g(k, p_k)$인 수열 $(p_k)$가 정확히 하나 있다. $a_1 \cdots a_n = p_n$으로 정한다.

$a_1 \cdots a_n$을 열 $a_1, \dots, a_n$의 **곱**(product)이라 하고 $a_1 a_2 \cdots a_n$으로도 쓴다. 항이 식으로 주어진 열의 곱도 같은 꼴로 쓴다. 예컨대 $i$번째 항이 $c_i - x$인 길이 $n$인 열의 곱을 $(c_1 - x)(c_2 - x) \cdots (c_n - x)$로 쓴다. 곱은 열(함수)만으로 정해지므로, 길이가 같고 모든 자리의 항이 같은 두 열의 곱은 같다. 곱 기호 $\Pi$는 쓰지 않는다. 정수론 입문 강의도 정수의 열의 곱을 정의하지만, 이 항목은 그것과 따로 정의하며 이 강의는 두 값이 같다는 사실을 쓰지 않는다. 열의 항의 순서를 바꾸어도 곱이 같다는 것(재배열)은 아래 (6)의 경우 말고는 주장하지 않는다.

다음이 성립한다. 아래에서 $m$, $n$은 $0$ 이상인 정수이다.

1. (끝항 떼기) 길이 $n + 1$인 실수의 열 $a_1, \dots, a_{n+1}$에 대하여
   $$a_1 \cdots a_{n+1} = (a_1 \cdots a_n)\, a_{n+1}$$
   이다. 오른쪽의 $a_1 \cdots a_n$은 이 열의 처음 $n$개로 이루어진 길이 $n$인 열의 곱이다. 특히 길이 $1$인 열 $a_1$의 곱은 $a_1$이고, 길이 $2$인 열 $a_1, a_2$의 곱은 실수의 곱 $a_1 a_2$이다.
2. (이어 붙이기) $a_1, \dots, a_m$과 $b_1, \dots, b_n$이 실수의 열이고, 길이 $m + n$인 열 $c_1, \dots, c_{m+n}$을 $c_i = a_i$ ($1 \le i \le m$), $c_{m+j} = b_j$ ($1 \le j \le n$)로 정하면
   $$(a_1 \cdots a_m)(b_1 \cdots b_n) = c_1 \cdots c_{m+n}$$
   이다.
3. (항별 곱) $a_1, \dots, a_n$과 $b_1, \dots, b_n$이 길이가 같은 실수의 열이면, $i$번째 항이 $a_i b_i$인 열의 곱은 두 곱의 곱이다. 곧
   $$(a_1 b_1)(a_2 b_2) \cdots (a_n b_n) = (a_1 \cdots a_n)(b_1 \cdots b_n)$$
   이다.
4. (모든 항이 같은 열) 길이 $n$인 열의 모든 항이 실수 $c$이면 그 곱은 $c^n$이다. 특히 모든 항이 $1$이면 곱은 $1$이다.
5. (곱이 $0$인 경우) $a_1 \cdots a_n = 0$인 것은 정확히 어떤 $i \in \{1, \dots, n\}$에서 $a_i = 0$일 때이다. 따라서 모든 항이 $0$이 아니면 곱은 $0$이 아니다.
6. ($k$번째 항 떼어 내기) $a_1, \dots, a_{n+1}$이 길이 $n + 1$인 실수의 열이고 $k \in \{1, \dots, n+1\}$이며 $c_1, \dots, c_n$이 $k$번째 항을 지운 열($c_i = a_i$ ($1 \le i < k$), $c_i = a_{i+1}$ ($k \le i \le n$))이면
   $$a_1 \cdots a_{n+1} = (c_1 \cdots c_n)\, a_k$$
   이다.
:::

:::english
The arithmetic of real numbers and $a^{-1}$ are those of the entry on real number arithmetic, and sequences of real numbers together with their "first $k$ terms", "appended sequence" and "sequence with the $k$-th term deleted" are as defined in the statement of the entry on finite sums of vectors (a sequence of real numbers of length $n$ is a function $\{1, \dots, n\} \to \mathbb{R}$, and the empty sequence with $n = 0$ is allowed). The power $c^n$ of a real number is that of the entry on powers of a real number.

**Definition.** Let $n \ge 0$ be an integer and let $a_1, \dots, a_n$ be a sequence of real numbers of length $n$.

- If $n = 0$, we set $a_1 \cdots a_n = 1$ and call it the **empty product**.
- If $n \ge 1$, consider the function $g : \mathbb{N} \times \mathbb{R} \to \mathbb{R}$ whose value at a natural number $k$ and a real number $s$ is $s \cdot a_{k+1}$ when $k + 1 \le n$ and $s$ when $k + 1 > n$ (item (1) of the recursion theorem; that exactly one of the two cases holds for the integers $k + 1$ and $n$ is (Z5)). By the recursion theorem and its item (3) there is exactly one sequence $(p_k)$ with $p_1 = a_1$ and $p_{k+1} = g(k, p_k)$ for every natural number $k$. We set $a_1 \cdots a_n = p_n$.

$a_1 \cdots a_n$ is called the **product** of the sequence $a_1, \dots, a_n$ and is also written $a_1 a_2 \cdots a_n$. The product of a sequence whose terms are given by expressions is written in the same way; for example, the product of the sequence of length $n$ whose $i$-th term is $c_i - x$ is written $(c_1 - x)(c_2 - x) \cdots (c_n - x)$. Since the product is determined by the sequence (a function) alone, two sequences of the same length whose terms agree in every position have the same product. The product symbol $\Pi$ is not used. The course on elementary number theory also defines the product of a sequence of integers; this entry defines the product separately, and this course does not use the fact that the two values agree. That the product is unchanged when the terms are put in a different order (rearrangement) is not claimed, except for the case in (6) below.

The following hold. Below, $m$ and $n$ are integers with $m, n \ge 0$.

1. (Splitting off the last term) For a sequence of real numbers $a_1, \dots, a_{n+1}$ of length $n + 1$,
   $$a_1 \cdots a_{n+1} = (a_1 \cdots a_n)\, a_{n+1}.$$
   Here $a_1 \cdots a_n$ on the right is the product of the sequence of length $n$ formed by the first $n$ terms. In particular, the product of a sequence $a_1$ of length $1$ is $a_1$, and the product of a sequence $a_1, a_2$ of length $2$ is the product $a_1 a_2$ of real numbers.
2. (Concatenation) If $a_1, \dots, a_m$ and $b_1, \dots, b_n$ are sequences of real numbers and the sequence $c_1, \dots, c_{m+n}$ of length $m + n$ is defined by $c_i = a_i$ ($1 \le i \le m$) and $c_{m+j} = b_j$ ($1 \le j \le n$), then
   $$(a_1 \cdots a_m)(b_1 \cdots b_n) = c_1 \cdots c_{m+n}.$$
3. (Termwise product) If $a_1, \dots, a_n$ and $b_1, \dots, b_n$ are sequences of real numbers of the same length, then the product of the sequence whose $i$-th term is $a_i b_i$ is the product of the two products, that is,
   $$(a_1 b_1)(a_2 b_2) \cdots (a_n b_n) = (a_1 \cdots a_n)(b_1 \cdots b_n).$$
4. (Constant sequence) If every term of a sequence of length $n$ is the real number $c$, then its product is $c^n$. In particular, if every term is $1$, the product is $1$.
5. (Zero product) $a_1 \cdots a_n = 0$ exactly when $a_i = 0$ for some $i \in \{1, \dots, n\}$. Hence if no term is $0$, the product is not $0$.
6. (Splitting off the $k$-th term) If $a_1, \dots, a_{n+1}$ is a sequence of real numbers of length $n + 1$, $k \in \{1, \dots, n+1\}$, and $c_1, \dots, c_n$ is the sequence with the $k$-th term deleted ($c_i = a_i$ for $1 \le i < k$ and $c_i = a_{i+1}$ for $k \le i \le n$), then
   $$a_1 \cdots a_{n+1} = (c_1 \cdots c_n)\, a_k.$$
:::

## 직관

곱 $a_1 a_2 \cdots a_n$은 첫 항에서 시작해 다음 항을 하나씩 오른쪽에 곱해 가는 계산입니다. 계산기에 $a_1$을 넣고 "$\times a_2$", "$\times a_3$"을 차례로 누르는 것과 같습니다. 정의의 수열 $(p_k)$가 계산기 화면에 찍히는 값이고, $p_k$는 처음 $k$개를 곱한 값입니다. $n$번째 항을 곱한 뒤에는 더 곱할 항이 없으므로 정의의 함수 $g$는 값을 그대로 둡니다. 비유에서 "단추를 누르는 순서"는 (1)의 괄호 $(a_1 \cdots a_n)a_{n+1}$에 해당합니다.

항이 없는 열의 곱을 $1$로 정한 것은 곱해도 아무것도 바꾸지 않는 수가 $1$이기 때문입니다. 이렇게 정하면 (1)이 $n = 0$에서도 성립하고($1 \cdot a_1 = a_1$), (4)가 $c^0 = 1$과 맞으며, (2)에서 한쪽 열이 비어도 그대로 참입니다. 같은 까닭으로 [[finite-sum-of-vectors|벡터의 유한 합]]은 빈 열의 합을 $0$으로 정합니다.

(6)은 곱의 한 항을 맨 끝으로 옮겨도 곱이 같다는 것입니다. (2)로 열을 "그 항까지"와 "그 뒤"로 나누고, 실수의 곱의 교환법칙과 결합법칙으로 그 항을 끝으로 보냅니다. 항의 순서를 아무렇게나 바꾸는 일반적인 재배열은 이 항목이 다루지 않습니다.

## 성질의 증명

:::proof
아래에서 열의 "처음 $k$개", "지운 열"은 [[finite-sum-of-vectors|벡터의 유한 합]]의 진술의 것이고, 실수의 계산 (K1), (K2), (K4), (K9), (K10)은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다. 자연수는 ([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술에 의해) 양의 정수이고, 정수의 합은 정수이다([[even-and-odd]]에서 받아들인 사실). 정수의 순서에는 [[prime-number|(Z1)]]과 [[well-ordering-principle|(Z5)–(Z7)]]을 쓴다. 귀납법은 [[mathematical-induction|수학적 귀납법]]의 시작점이 $0$인 꼴이다.

**보조 사실 (가).** $n \ge 1$이고 $a_1, \dots, a_n$이 길이 $n$인 실수의 열이며 $(p_k)$가 정의의 수열이라 하자. $1 \le k \le n$이고 $b_1, \dots, b_k$가 이 열의 처음 $k$개이면 $b_1 \cdots b_k = p_k$이다.

증명. 열 $b$에 대한 정의의 함수와 수열을 $g'$, $(p'_j)$라 하자. $b_1 \cdots b_k = p'_k$이므로 $p'_k = p_k$를 보이면 된다. 자연수 $j$에 대한 명제 "$j \le k$이면 $p'_j = p_j$"를 귀납법(시작점 $1$)으로 보인다. $j = 1$이면 $p'_1 = b_1 = a_1 = p_1$이다. $j \le k$에서 성립하고 $j + 1 \le k$라 하자. 그러면 (Z6)에 의해 $j < j + 1 \le k$이므로 $j \le k$이고 귀납 가정에 의해 $p'_j = p_j$이다. 또 $j + 1 \le k \le n$이므로 (Z6)에 의해 $j + 1 \le n$이고, 두 함수 $g'$, $g$는 모두 첫째 경우를 써서 $g'(j, s) = s \cdot b_{j+1} = s \cdot a_{j+1} = g(j, s)$이다(처음 $k$개의 정의에 의해 $j + 1 \le k$에서 $b_{j+1} = a_{j+1}$). 따라서 $p'_{j+1} = g'(j, p'_j) = g(j, p_j) = p_{j+1}$이다. $j < j + 1$은 [[well-ordering-principle|(L3)]]이다. 귀납법에 의해 모든 자연수 $j \le k$에서 $p'_j = p_j$이고, 특히 $p'_k = p_k$이다.

**(1)의 증명.** $n = 0$이면 처음 $0$개의 곱은 빈 곱 $1$이고, 길이 $1$인 열의 곱은 $p_1 = a_1$이다. (K4)와 (K1)에 의해 $1 \cdot a_1 = a_1$이므로 등식이 성립한다. $n \ge 1$이면 길이 $n + 1$인 열의 정의의 수열 $(p_k)$에서 $n + 1 \le n + 1$이므로 $g(n, s) = s \cdot a_{n+1}$이고, $a_1 \cdots a_{n+1} = p_{n+1} = g(n, p_n) = p_n a_{n+1}$이다. 보조 사실 (가)를 $k = n$으로 쓰면 처음 $n$개의 곱은 $p_n$이다. 따라서 $a_1 \cdots a_{n+1} = (a_1 \cdots a_n) a_{n+1}$이다. 길이 $1$인 열의 곱이 $a_1$이라는 것은 위의 $n = 0$인 경우이고, 길이 $2$인 열에 $n = 1$을 넣으면 $a_1 a_2 = (a_1) a_2$, 곧 실수의 곱이다.

아래 (2)–(5)는 (1)만으로 증명한다. 길이 $n + 1$인 열의 처음 $n$개를 $a'$으로 쓴다.

**(2)의 증명.** $m$을 고정하고 $n$에 대한 귀납법을 쓴다. $n = 0$이면 $c$는 길이 $m$이고 모든 $i$에서 $c_i = a_i$이므로 $c$와 $a$는 같은 열이고 곱이 같다. $b$의 곱은 빈 곱 $1$이므로 왼쪽은 (K4)에 의해 $a_1 \cdots a_m = c_1 \cdots c_m$이다. $n$에서 성립한다고 하고 $b$가 길이 $n + 1$이라 하자. $c$의 처음 $m + n$개는 $i \le m$에서 $a_i$, $1 \le j \le n$에서 $(m + j)$번째 항이 $b_j = b'_j$이므로 $a$와 $b'$을 이어 붙인 열이다. (1)과 귀납 가정과 (K2)에 의해
$$
\begin{aligned}
&c_1 \cdots c_{m+n+1} \\
&= (c_1 \cdots c_{m+n})\, c_{m+n+1} \\
&= \bigl((a_1 \cdots a_m)(b'_1 \cdots b'_n)\bigr) \\
&\qquad \cdot b_{n+1} \\
&= (a_1 \cdots a_m) \\
&\qquad \cdot \bigl((b'_1 \cdots b'_n)\, b_{n+1}\bigr)
\end{aligned}
$$
이고, (1)에 의해 마지막 괄호는 $b_1 \cdots b_{n+1}$이다.

**(3)의 증명.** $n$에 대한 귀납법. $n = 0$이면 세 곱이 모두 빈 곱이고 (K4)에 의해 $1 = 1 \cdot 1$이다. $n$에서 성립한다고 하고 두 열이 길이 $n + 1$이라 하자. $i$번째 항이 $a_i b_i$인 열을 $d$라 하면 $d$의 처음 $n$개는 $i$번째 항이 $a'_i b'_i$인 열이다. (1)과 귀납 가정에 의해 $d_1 \cdots d_{n+1} = \bigl((a'_1 \cdots a'_n)(b'_1 \cdots b'_n)\bigr)(a_{n+1} b_{n+1})$이고, (K1)과 (K2)로 순서를 바꾸면 $\bigl((a'_1 \cdots a'_n) a_{n+1}\bigr)\bigl((b'_1 \cdots b'_n) b_{n+1}\bigr)$이며, (1)에 의해 이것은 $(a_1 \cdots a_{n+1})(b_1 \cdots b_{n+1})$이다.

**(4)의 증명.** $n$에 대한 귀납법. $n = 0$이면 곱은 빈 곱 $1$이고 [[power-of-a-real-number|실수의 거듭제곱]]의 정의에 의해 $c^0 = 1$이다. $n$에서 성립한다고 하자. 모든 항이 $c$인 길이 $n + 1$인 열의 처음 $n$개는 모든 항이 $c$인 길이 $n$인 열이므로, (1)과 귀납 가정에 의해 곱은 $c^n c$이고 거듭제곱의 정의($a^{n+1} = a^n \cdot a$)에 의해 $c^{n+1}$이다. $c = 1$이면 거듭제곱의 (2)의 (iv)에 의해 $1^n = 1$이다.

**(5)의 증명.** $n$에 대한 귀납법. $n = 0$이면 곱은 $1$이고 (K4)에 의해 $1 \ne 0$이며, $\{1, \dots, 0\}$은 공집합이라 $a_i = 0$인 $i$가 없다. 두 문장이 모두 거짓이므로 "정확히 ~일 때"가 성립한다. $n$에서 성립한다고 하고 열이 길이 $n + 1$이라 하자. (1)에 의해 $a_1 \cdots a_{n+1} = (a'_1 \cdots a'_n) a_{n+1}$이다.

- 곱이 $0$이면 (K10)에 의해 $a'_1 \cdots a'_n = 0$이거나 $a_{n+1} = 0$이다. 앞의 경우 귀납 가정에 의해 어떤 $i \le n$에서 $a'_i = 0$이고 $a'_i = a_i$이다. 어느 경우든 $a_i = 0$인 $i \in \{1, \dots, n+1\}$이 있다.
- 거꾸로 $i \in \{1, \dots, n+1\}$에서 $a_i = 0$이라 하자. (Z5)에 의해 $i = n + 1$이거나 $i < n + 1$이고, 뒤의 경우 (Z1)에 의해 $i + 1 \le n + 1$, 곧 (Z7)에 의해 $i \le n$이다. $i = n + 1$이면 (K9)에 의해 곱은 $(a'_1 \cdots a'_n) \cdot 0 = 0$이다. $i \le n$이면 $a'_i = a_i = 0$이므로 귀납 가정에 의해 $a'_1 \cdots a'_n = 0$이고 (K9)에 의해 곱은 $0 \cdot a_{n+1} = 0$이다.

마지막 문장은 앞 문장의 대우이다.

**(6)의 증명.** 처음 $k - 1$개를 $u_1, \dots, u_{k-1}$이라 하고, 길이 $n + 1 - k$인 열 $w$를 $w_j = a_{k+j}$ ($1 \le j \le n + 1 - k$)로 정한다($k \le n + 1$이므로 (Z7)에 의해 $n + 1 - k \ge 0$이고, $1 \le j$에서 $k + 1 \le k + j \le n + 1$이다). 다음 세 가지를 확인한다.

- 처음 $k$개는 $u$에 $a_k$를 덧붙인 열이므로 (1)에 의해 그 곱은 $(u_1 \cdots u_{k-1}) a_k$이다. ($k = 1$이면 $u$는 빈 열이다.)
- 열 $a$는 처음 $k$개와 $w$를 이어 붙인 열이다. $i \le k$에서 $i$번째 항이 $a_i$이고, $(k + j)$번째 항이 $a_{k+j} = w_j$이기 때문이다.
- 지운 열 $c$는 $u$와 $w$를 이어 붙인 열이다. $i \le k - 1$, 곧 $i < k$에서 $c_i = a_i = u_i$이고, $1 \le j \le n + 1 - k$에서 $i = (k - 1) + j$는 $k \le i \le n$을 만족하므로 $c_i = a_{i+1} = a_{k+j} = w_j$이기 때문이다.

(2)를 둘째와 셋째에 쓰고 첫째를 넣으면, (K1)과 (K2)에 의해
$$
\begin{aligned}
a_1 \cdots a_{n+1} &= \bigl((u_1 \cdots u_{k-1}) a_k\bigr) \\
&\qquad \cdot (w_1 \cdots w_{n+1-k}) \\
&= \bigl((u_1 \cdots u_{k-1}) \\
&\qquad \cdot (w_1 \cdots w_{n+1-k})\bigr) a_k \\
&= (c_1 \cdots c_n)\, a_k
\end{aligned}
$$
이다. $\blacksquare$
:::

## 예시와 반례

:::example[길이 4 인 열의 곱과 둘째 항 떼어 내기]
열 $3, -2, 5, \tfrac{1}{2}$의 곱은 (1)을 세 번 써서 앞에서부터 $3$, $3 \cdot (-2) = -6$, $(-6) \cdot 5 = -30$, $(-30) \cdot \tfrac{1}{2} = -15$로 계산합니다. 여기서 $\tfrac{1}{2}$은 [[real-number-arithmetic|(K7)]]의 약속대로 $2^{-1}$이고, $(-30) \cdot 2^{-1} = (-15 \cdot 2) \cdot 2^{-1} = -15$입니다. (6)을 $k = 2$로 쓰면 둘째 항 $-2$를 지운 열 $3, 5, \tfrac{1}{2}$의 곱은 $15 \cdot \tfrac{1}{2} = \tfrac{15}{2}$이고, 여기에 $-2$를 곱하면 $-15$로 같습니다.
:::

:::example[모든 항이 같은 열과 항별 곱]
모든 항이 $-1$인 길이 $3$인 열의 곱은 (4)에 의해 $(-1)^3$이고, 거듭제곱의 (5)에 의해 $3$이 홀수이므로 $-1$입니다. 이것과 열 $2, 7, -4$에 (3)을 쓰면, $i$번째 항이 $(-1)a_i$인 열 $-2, -7, 4$의 곱은 $(-1) \cdot (2 \cdot 7 \cdot (-4)) = (-1)(-56) = 56$입니다. 직접 곱해도 $(-2)(-7) = 14$, $14 \cdot 4 = 56$입니다.
:::

:::counterexample[항별 합의 곱이 곱의 합과 다른 예]
(3)은 항끼리 곱한 열에 대한 것입니다. 항끼리 더한 열에는 같은 꼴이 성립하지 않을 수 있습니다. 두 열 $1, 1$과 $1, 1$에서 $i$번째 항이 $1 + 1$인 열의 곱은 $2 \cdot 2 = 4$이지만, 두 곱의 합은 $1 \cdot 1 + 1 \cdot 1 = 2$입니다.
:::

## 확인 질문

:::check[열 $4, 0, -3$의 곱은 무엇이고, (5)의 어느 방향으로 설명되는가?]
어떤 항(둘째 항)이 $0$이므로 (5)의 "어떤 $i$에서 $a_i = 0$이면 곱이 $0$" 방향에 의해 곱은 $0$입니다. 직접 계산해도 $4 \cdot 0 = 0$, $0 \cdot (-3) = 0$입니다.
:::

:::check[길이 $0$인 열과 열 $6, -1$을 이어 붙인 열의 곱을 (2)로 구하면 무엇인가?]
(2)에서 $m = 0$, $n = 2$이면 이어 붙인 열은 $6, -1$ 자신이고, (2)의 왼쪽은 빈 곱 $1$과 $6 \cdot (-1) = -6$의 곱이므로 $-6$입니다.
:::
