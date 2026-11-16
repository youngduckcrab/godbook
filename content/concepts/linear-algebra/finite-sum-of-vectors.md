---
title: 벡터의 유한 합
title_en: Finite Sum of Vectors
aliases: [벡터의 열, 벡터의 합, 빈 합, 유한 합, 계수와 벡터의 열, finite sum, sequence of vectors, empty sum, list of vectors]
kind: definition
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 벡터의 열 v₁, …, vₙ (길이 0 인 빈 열도 허용)의 합을 앞에서부터 하나씩 더하는 재귀로 정의하고, 부분공간에 속한다는 것, 이어 붙이기, 항별 합, 스칼라배, k번째 항 떼어 내기와 계수를 곱한 합의 계산 규칙을 증명한다.
requires: [function, finite-set, mathematical-induction, real-number-arithmetic, vector-space, vector-space-basic-properties, real-function-space, subspace]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 2절, 첫 문단(일차결합의 첫 등장), p.6; Remark 2.4, p.7; 번호 없는 정의(자명한 일차결합), p.8; 1장 1절의 Remark(ℝ 은 벡터공간), p.3
    checked: original
    note: "출처는 합 기호 Σ 와 α₁v₁ + α₂v₂ + … + α_pv_p 를 정의 없이 쓰고(p.6) 괄호를 어떻게 치는지 말하지 않는다. 합의 계산도 증명하지 않고 쓴다. Remark 2.4(p.7)는 두 일차결합의 합을 계수의 합으로 쓴 일차결합과 같다고 하는데 이것이 이 항목의 (C1)과 (C2)에 해당하고, p.8은 자명한 일차결합(계수가 모두 0)이 언제나 0 이라고 하는데 (C3)에 해당한다. 출처는 벡터의 모임을 'system'이라 부르고 같은 벡터가 되풀이되는지, 집합인지를 정하지 않는다(연습문제 2.2는 'set'이라 쓴다). 이 항목은 벡터의 모임을 열(함수 {1, …, n} → V)로 다루고, 길이 0 인 빈 열과 그 합 0_V 를 허용하며, 앞에서부터 하나씩 더하는 재귀 정의와 성질 (H0)–(H7), (C1)–(C6)과 증명을 이 사이트가 썼다. '열', '항', '빈 열', '덧붙인 열', '지운 열'이라는 용어와 성질의 번호는 출처에 나오지 않는다. 출처는 ℝ 이 실벡터공간이라고 적는다(p.3). 예시와 반례와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$V$가 [[vector-space|벡터공간]]이고 $n \ge 0$이 정수라 하자. 길이 $n$인 **벡터의 열**(finite sequence of vectors)이란 [[function|함수]] $v : \{1, \dots, n\} \to V$이다([[finite-set|유한집합]] 항목의 $\{1, \dots, n\}$). $v(i)$를 $v_i$로 쓰고 열을 $v_1, \dots, v_n$으로 나타내며, $v_i$를 $i$번째 **항**(term)이라 한다. 같은 벡터가 여러 자리에 나와도 된다. 함수의 같음에 의해, 길이가 같은 두 열이 같은 열인 것은 정확히 모든 자리에서 항이 같을 때이다. $n = 0$인 열은 정의역이 공집합인 함수 하나뿐이고 **빈 열**(empty sequence)이라 한다. $0 \le k \le n$일 때 열 $v_1, \dots, v_n$의 **처음 $k$개**란 $v$의 정의역을 $\{1, \dots, k\}$로 줄인 함수, 곧 $i \le k$에서 $v_i$를 값으로 갖는 길이 $k$인 열 $v_1, \dots, v_k$이다. 길이 $n$인 열 $v_1, \dots, v_n$과 $x \in V$에 대하여, 처음 $n$개가 $v_1, \dots, v_n$이고 $(n+1)$번째 항이 $x$인 길이 $n + 1$인 열을 $v_1, \dots, v_n, x$로 쓰고 $v$에 $x$를 **덧붙인 열**(appended sequence)이라 한다. 길이 $n + 1$인 열 $v_1, \dots, v_{n+1}$과 $k \in \{1, \dots, n+1\}$에 대하여 $c_i = v_i$ ($1 \le i < k$), $c_i = v_{i+1}$ ($k \le i \le n$)로 정한 길이 $n$인 열 $c_1, \dots, c_n$을 $k$번째 항을 **지운 열**(sequence with the $k$-th term deleted)이라 한다. 자리 $i$마다 $V$의 원소가 하나씩 정해지면 [[real-function-space|(G)]]에 의해 그 값을 항으로 갖는 열이 있고, 이 열은 값으로 정해진다. **실수의 열**은 같은 방식으로 함수 $\{1, \dots, n\} \to \mathbb{R}$이고, 실수의 열에도 "처음 $k$개", "덧붙인 열", "$k$번째 항을 지운 열"을 같은 방식으로 쓴다.

$V$의 영벡터는 [[vector-space-basic-properties|(B1)]]의 $0_V$이다. 길이 $n$인 벡터의 열 $v_1, \dots, v_n$의 **합**(sum) $v_1 + \cdots + v_n$을 $n$에 대한 재귀로 다음과 같이 정의한다.

- $n = 0$이면 $v_1 + \cdots + v_n$은 영벡터 $0_V$이다.
- $n \ge 0$이고 길이 $n + 1$인 열 $v_1, \dots, v_{n+1}$이 주어지면
$$v_1 + \cdots + v_{n+1} = (v_1 + \cdots + v_n) + v_{n+1}$$
이다. 오른쪽의 $v_1 + \cdots + v_n$은 이 열의 처음 $n$개로 이루어진 길이 $n$인 열의 합이고, 바깥의 $+$는 $V$의 덧셈이다.

모든 정수 $n \ge 0$과 길이 $n$인 벡터의 열마다 이 규칙을 만족하는 벡터 하나가 정해진다는 것은 [[mathematical-induction|수학적 귀납법]]의 원리와 함께 증명 없이 받아들인다. 따라서 같은 열의 합은 같다. 이 항목의 합은 항이 없는 경우($n = 0$)도 정의한다. 열의 항의 순서를 바꾸어도 합이 같다는 것(재배열)은 이 항목에서 주장하지 않는다.

**실수의 합.** [[real-function-space|$\mathbb{R}$은 벡터공간]]이고 $\mathbb{R}$의 영벡터는 ([[real-number-arithmetic|(K4)]]에 의해 모든 $a$에서 $a + 0 = a$이므로, 그리고 [[vector-space-basic-properties|(B1)]]의 유일성에 의해) 실수 $0$이다. 따라서 실수의 열 $a_1, \dots, a_n$의 합 $a_1 + \cdots + a_n$은 $V = \mathbb{R}$인 위의 정의로 정해진다(덧셈은 실수의 합).

**계수를 곱한 합.** $\alpha_1, \dots, \alpha_n$이 길이 $n$인 실수의 열이고 $v_1, \dots, v_n$이 길이 $n$인 벡터의 열이면, 각 $i$에 벡터 $\alpha_i v_i$가 하나씩 정해지므로 $i$번째 항이 $\alpha_i v_i$인 길이 $n$인 벡터의 열 $\alpha_1 v_1, \dots, \alpha_n v_n$이 있다. 이 열의 합을 $\alpha_1 v_1 + \cdots + \alpha_n v_n$으로 쓴다.

다음이 성립한다. 아래에서 $V$는 벡터공간이고 $n$, $m$은 $0$ 이상의 정수이다.

- (H0) 길이 $1$인 열 $v_1$의 합은 $v_1$이다. 길이 $2$인 열 $v_1, v_2$의 합은 $V$의 덧셈 $v_1 + v_2$이다. 또 모든 $x \in V$에서 $0_V + x = x$이다.
- (H1) $W$가 $V$의 [[subspace|부분공간]]이고 열 $v_1, \dots, v_n$의 모든 항이 $W$에 속하면 $v_1 + \cdots + v_n \in W$이다.
- (H2) (이어 붙이기) $v_1, \dots, v_m$과 $w_1, \dots, w_n$이 벡터의 열일 때, 이 둘을 차례로 늘어놓은 길이 $m + n$인 열 $c_1, \dots, c_{m+n}$을 $c_i = v_i$ ($1 \le i \le m$), $c_{m+j} = w_j$ ($1 \le j \le n$)로 정한다. 그러면
$$(v_1 + \cdots + v_m) + (w_1 + \cdots + w_n) = c_1 + \cdots + c_{m+n}$$
이다.
- (H3) (항별 합) $v_1, \dots, v_n$과 $w_1, \dots, w_n$이 길이가 같은 벡터의 열일 때, $i$번째 항이 $v_i + w_i$인 열의 합은 두 합의 합이다. 곧
$$(v_1 + w_1) + \cdots + (v_n + w_n) = (v_1 + \cdots + v_n) + (w_1 + \cdots + w_n)$$
이다.
- (H4) (스칼라배) $\alpha$가 실수이면 $\alpha(v_1 + \cdots + v_n) = \alpha v_1 + \cdots + \alpha v_n$이다. 오른쪽은 $i$번째 항이 $\alpha v_i$인 열의 합이다.
- (H5) 모든 항이 $0_V$이면 합은 $0_V$이다.
- (H6) ($k$번째 항 떼어 내기) $v_1, \dots, v_{n+1}$이 길이 $n + 1$인 벡터의 열이고 $k \in \{1, \dots, n+1\}$이라 하자. 길이 $n$인 열 $c_1, \dots, c_n$을 $c_i = v_i$ ($1 \le i < k$), $c_i = v_{i+1}$ ($k \le i \le n$)로 정한다(위에서 정한 $k$번째 항을 지운 열). 그러면
$$v_1 + \cdots + v_{n+1} = (c_1 + \cdots + c_n) + v_k$$
이다.
- (H7) (H6)의 설정에서 $i \ne k$인 모든 $i$에서 $v_i = 0_V$이면 $v_1 + \cdots + v_{n+1} = v_k$이다.

$\alpha_1, \dots, \alpha_n$과 $\beta_1, \dots, \beta_n$이 길이 $n$인 실수의 열, $v_1, \dots, v_n$이 길이 $n$인 벡터의 열, $\gamma$가 실수라 하자. 다음이 성립한다.

- (C1) $(\alpha_1 v_1 + \cdots + \alpha_n v_n) + (\beta_1 v_1 + \cdots + \beta_n v_n) = (\alpha_1 + \beta_1) v_1 + \cdots + (\alpha_n + \beta_n) v_n$이다. 오른쪽은 $i$번째 항이 $(\alpha_i + \beta_i) v_i$인 열의 합이다.
- (C2) $\gamma(\alpha_1 v_1 + \cdots + \alpha_n v_n) = (\gamma\alpha_1) v_1 + \cdots + (\gamma\alpha_n) v_n$이다.
- (C3) 모든 $i$에서 $\alpha_i = 0$이면 $\alpha_1 v_1 + \cdots + \alpha_n v_n = 0_V$이다.
- (C4) $1 \le k \le n$이고 $i \ne k$인 모든 $i$에서 $\alpha_i = 0$이면 $\alpha_1 v_1 + \cdots + \alpha_n v_n = \alpha_k v_k$이다.
- (C5) (계수 끼워 넣기와 떼어 내기) $n \ge 0$이라 하고, $v_1, \dots, v_{n+1}$이 길이 $n + 1$인 벡터의 열, $c_1, \dots, c_n$이 $v$에서 $k$번째 항을 지운 열($k \in \{1, \dots, n+1\}$), $\gamma_1, \dots, \gamma_n$이 길이 $n$인 실수의 열, $t$가 실수라 하자. $\gamma$의 $k$번째 자리에 $t$를 **끼워 넣은** 길이 $n + 1$인 실수의 열 $\alpha$를 $\alpha_i = \gamma_i$ ($1 \le i < k$), $\alpha_k = t$, $\alpha_i = \gamma_{i-1}$ ($k < i \le n + 1$)로 정한다. 그러면
$$\alpha_1 v_1 + \cdots + \alpha_{n+1} v_{n+1} = (\gamma_1 c_1 + \cdots + \gamma_n c_n) + t v_k$$
이다. 거꾸로 길이 $n + 1$인 임의의 실수의 열 $\alpha$에서 $k$번째 항을 지운 열을 $\gamma$라 하면 $\alpha$는 $\gamma$에 $t = \alpha_k$를 끼워 넣은 열이므로 같은 등식이 $t = \alpha_k$로 성립한다.
- (C6) (차) $(\alpha_1 v_1 + \cdots + \alpha_n v_n) - (\beta_1 v_1 + \cdots + \beta_n v_n) = (\alpha_1 - \beta_1) v_1 + \cdots + (\alpha_n - \beta_n) v_n$이다. 오른쪽은 $i$번째 항이 $(\alpha_i - \beta_i) v_i$인 열의 합이다.

증명은 아래 각 성질의 이름이 붙은 참고 블록에 있고, 앞의 성질만 쓰므로 순환하지 않는다.
:::

:::english
Let $V$ be a vector space and $n \ge 0$ an integer. A **finite sequence of vectors** of length $n$ is a function $v : \{1, \dots, n\} \to V$. We write $v_i$ for $v(i)$, denote the sequence by $v_1, \dots, v_n$, and call $v_i$ the $i$-th **term**. The same vector may occur in several positions. By equality of functions, two sequences of the same length are the same sequence exactly when their terms agree in every position. The sequence with $n = 0$ is the function whose domain is the empty set, of which there is only one, and it is called the **empty sequence**. For $0 \le k \le n$, the **first $k$ terms** of a sequence $v_1, \dots, v_n$ form the sequence $v_1, \dots, v_k$ of length $k$, namely the function obtained by shrinking the domain of $v$ to $\{1, \dots, k\}$, whose value at $i \le k$ is $v_i$. For a sequence $v_1, \dots, v_n$ of length $n$ and $x \in V$, the sequence of length $n + 1$ whose first $n$ terms are $v_1, \dots, v_n$ and whose $(n+1)$-st term is $x$ is written $v_1, \dots, v_n, x$ and is called the sequence **obtained by appending** $x$ to $v$. For a sequence $v_1, \dots, v_{n+1}$ of length $n + 1$ and $k \in \{1, \dots, n+1\}$, the sequence $c_1, \dots, c_n$ of length $n$ defined by $c_i = v_i$ ($1 \le i < k$) and $c_i = v_{i+1}$ ($k \le i \le n$) is called the sequence **with the $k$-th term deleted**. If a vector of $V$ is assigned to each position $i$, then by (G) there is a sequence having these vectors as its terms, and this sequence is determined by its values. A **sequence of real numbers** is likewise a function $\{1, \dots, n\} \to \mathbb{R}$, and "first $k$ terms", "appending" and "deleting the $k$-th term" are used for sequences of real numbers in the same way.

The zero vector of $V$ is the $0_V$ of (B1). The **sum** $v_1 + \cdots + v_n$ of a sequence of vectors $v_1, \dots, v_n$ of length $n$ is defined recursively on $n$ as follows.

- If $n = 0$, then $v_1 + \cdots + v_n$ is the zero vector $0_V$.
- If $n \ge 0$ and a sequence $v_1, \dots, v_{n+1}$ of length $n + 1$ is given, then
$$v_1 + \cdots + v_{n+1} = (v_1 + \cdots + v_n) + v_{n+1}.$$
Here $v_1 + \cdots + v_n$ on the right is the sum of the sequence of length $n$ formed by the first $n$ terms, and the outer $+$ is the addition of $V$.

That for every integer $n \ge 0$ and every sequence of vectors of length $n$ there is exactly one vector satisfying this rule is accepted without proof, together with the principle of mathematical induction. Hence equal sequences have equal sums. The sum here is defined also when there are no terms ($n = 0$). That the sum is unchanged when the terms are put in a different order (rearrangement) is not claimed in this entry.

**Sums of real numbers.** $\mathbb{R}$ is a vector space, and its zero vector is the real number $0$ (by (K4), $a + 0 = a$ for every $a$, and by the uniqueness in (B1)). Hence the sum $a_1 + \cdots + a_n$ of a sequence of real numbers $a_1, \dots, a_n$ is determined by the definition above with $V = \mathbb{R}$ (the addition being the sum of real numbers).

**Sums with coefficients.** If $\alpha_1, \dots, \alpha_n$ is a sequence of real numbers of length $n$ and $v_1, \dots, v_n$ is a sequence of vectors of length $n$, then a vector $\alpha_i v_i$ is assigned to each $i$, so there is a sequence of vectors $\alpha_1 v_1, \dots, \alpha_n v_n$ of length $n$ whose $i$-th term is $\alpha_i v_i$. Its sum is written $\alpha_1 v_1 + \cdots + \alpha_n v_n$.

The following hold. Below, $V$ is a vector space and $n$, $m$ are integers that are $0$ or greater.

- (H0) The sum of a sequence $v_1$ of length $1$ is $v_1$. The sum of a sequence $v_1, v_2$ of length $2$ is the addition $v_1 + v_2$ in $V$. Also $0_V + x = x$ for every $x \in V$.
- (H1) If $W$ is a subspace of $V$ and every term of the sequence $v_1, \dots, v_n$ belongs to $W$, then $v_1 + \cdots + v_n \in W$.
- (H2) (Concatenation) Let $v_1, \dots, v_m$ and $w_1, \dots, w_n$ be sequences of vectors. Define the sequence $c_1, \dots, c_{m+n}$ of length $m + n$, obtained by listing the two sequences one after the other, by $c_i = v_i$ ($1 \le i \le m$) and $c_{m+j} = w_j$ ($1 \le j \le n$). Then
$$(v_1 + \cdots + v_m) + (w_1 + \cdots + w_n) = c_1 + \cdots + c_{m+n}.$$
- (H3) (Termwise sum) Let $v_1, \dots, v_n$ and $w_1, \dots, w_n$ be sequences of vectors of the same length. The sum of the sequence whose $i$-th term is $v_i + w_i$ is the sum of the two sums. That is,
$$(v_1 + w_1) + \cdots + (v_n + w_n) = (v_1 + \cdots + v_n) + (w_1 + \cdots + w_n).$$
- (H4) (Scalar multiple) If $\alpha$ is a real number, then $\alpha(v_1 + \cdots + v_n) = \alpha v_1 + \cdots + \alpha v_n$. The right-hand side is the sum of the sequence whose $i$-th term is $\alpha v_i$.
- (H5) If every term is $0_V$, then the sum is $0_V$.
- (H6) (Removing the $k$-th term) Let $v_1, \dots, v_{n+1}$ be a sequence of vectors of length $n + 1$ and $k \in \{1, \dots, n+1\}$. Define the sequence $c_1, \dots, c_n$ of length $n$ (the sequence with the $k$-th term deleted, as defined above) by $c_i = v_i$ ($1 \le i < k$) and $c_i = v_{i+1}$ ($k \le i \le n$). Then
$$v_1 + \cdots + v_{n+1} = (c_1 + \cdots + c_n) + v_k.$$
- (H7) In the setting of (H6), if $v_i = 0_V$ for every $i \ne k$, then $v_1 + \cdots + v_{n+1} = v_k$.

Let $\alpha_1, \dots, \alpha_n$ and $\beta_1, \dots, \beta_n$ be sequences of real numbers of length $n$, let $v_1, \dots, v_n$ be a sequence of vectors of length $n$, and let $\gamma$ be a real number. The following hold.

- (C1) $(\alpha_1 v_1 + \cdots + \alpha_n v_n) + (\beta_1 v_1 + \cdots + \beta_n v_n) = (\alpha_1 + \beta_1) v_1 + \cdots + (\alpha_n + \beta_n) v_n$. The right-hand side is the sum of the sequence whose $i$-th term is $(\alpha_i + \beta_i) v_i$.
- (C2) $\gamma(\alpha_1 v_1 + \cdots + \alpha_n v_n) = (\gamma\alpha_1) v_1 + \cdots + (\gamma\alpha_n) v_n$.
- (C3) If $\alpha_i = 0$ for every $i$, then $\alpha_1 v_1 + \cdots + \alpha_n v_n = 0_V$.
- (C4) If $1 \le k \le n$ and $\alpha_i = 0$ for every $i \ne k$, then $\alpha_1 v_1 + \cdots + \alpha_n v_n = \alpha_k v_k$.
- (C5) (Inserting and removing a coefficient) Let $n \ge 0$, let $v_1, \dots, v_{n+1}$ be a sequence of vectors of length $n + 1$, let $c_1, \dots, c_n$ be the sequence obtained from $v$ by deleting the $k$-th term ($k \in \{1, \dots, n+1\}$), let $\gamma_1, \dots, \gamma_n$ be a sequence of real numbers of length $n$, and let $t$ be a real number. Define the sequence of real numbers $\alpha$ of length $n + 1$, obtained by **inserting** $t$ into $\gamma$ at position $k$, by $\alpha_i = \gamma_i$ ($1 \le i < k$), $\alpha_k = t$ and $\alpha_i = \gamma_{i-1}$ ($k < i \le n + 1$). Then
$$\alpha_1 v_1 + \cdots + \alpha_{n+1} v_{n+1} = (\gamma_1 c_1 + \cdots + \gamma_n c_n) + t v_k.$$
Conversely, if $\alpha$ is any sequence of real numbers of length $n + 1$ and $\gamma$ is the sequence obtained from it by deleting the $k$-th term, then $\alpha$ is $\gamma$ with $t = \alpha_k$ inserted, so the same equation holds with $t = \alpha_k$.
- (C6) (Difference) $(\alpha_1 v_1 + \cdots + \alpha_n v_n) - (\beta_1 v_1 + \cdots + \beta_n v_n) = (\alpha_1 - \beta_1) v_1 + \cdots + (\alpha_n - \beta_n) v_n$. The right-hand side is the sum of the sequence whose $i$-th term is $(\alpha_i - \beta_i) v_i$.

The proofs are given below, each in the block named after the property, and each proof uses only earlier properties, so there is no circularity.
:::

## 직관

길을 걷는 장면을 떠올려 봅시다. 벡터 하나를 "한 걸음", 합을 "그 걸음들을 차례로 걸은 뒤의 위치"라고 하면, 시작점이 $0_V$이고 걸음을 하나 더 걸을 때마다 "지금까지의 위치"에 새 걸음을 더합니다. 이 정의가 정확히 그 동작입니다. $v_1 + \cdots + v_n$은 $(\cdots((0_V + v_1) + v_2) + \cdots) + v_n$이고, 걸음이 하나도 없으면(빈 열) 제자리, 곧 $0_V$입니다. 벡터의 덧셈은 두 벡터 사이의 연산이어서 세 벡터 이상의 합에는 정의가 필요하고, 이 항목이 그것을 맡습니다.

이 비유가 맞지 않는 곳도 있습니다. 벡터공간의 벡터가 꼭 평면 위의 위치인 것은 아닙니다. 함수도 벡터이고, 그 합은 길을 걷는 일과 상관이 없습니다. 또 이 항목은 걸음의 순서를 바꾸어도 도착점이 같다고 주장하지 않습니다. (H6)이 보이는 것은 어느 한 걸음을 마지막으로 보내도 합이 같다는 것까지입니다.

(H1)–(H7)과 (C1)–(C6)은 이 사이트의 뒤 항목들이 쓸 계산 규칙입니다. 일차결합이 부분공간을 이룬다는 것, 계수를 더한 일차결합의 합, 계수가 모두 $0$이면 $0_V$라는 것, 영벡터를 포함한 열이나 같은 벡터가 되풀이되는 열이 일차종속이라는 것의 증명이 이 규칙을 인용합니다. 벡터의 모임을 집합이 아니라 열로 다루는 까닭은 같은 벡터가 되풀이되는 경우를 구별하기 위해서입니다. 빈 열을 허용하는 까닭은 "항이 없는 합"이 $0_V$로 정해지면 뒤의 진술(예를 들어 $\{0_V\}$의 기저)에 예외를 둘 필요가 없어지기 때문입니다.

## 성질의 증명

:::remark[(H0) 길이 1과 2의 합과 영벡터]
$n = 1$이면 정의의 둘째 줄에서 $v_1$의 합은 (처음 $0$개의 합) $+ v_1 = 0_V + v_1$이다. 영벡터의 정의("모든 $x$에서 $x + z = x$")에서 $x = v_1$, $z = 0_V$로 두면 $v_1 + 0_V = v_1$이고, ([[vector-space|(V1)]])에 의해 $0_V + v_1 = v_1 + 0_V = v_1$이다. 같은 논증이 임의의 $x \in V$에서 $0_V + x = x$를 준다. 따라서 길이 $1$인 열의 합은 $v_1$이다. $n = 2$이면 정의의 둘째 줄에서 합은 (처음 $1$개의 합) $+ v_2$이고, 방금 보인 것에 의해 처음 $1$개의 합은 $v_1$이므로 합은 $v_1 + v_2$이다.
:::

:::remark[(H5) 모든 항이 0 일 때]
[[mathematical-induction|수학적 귀납법]](시작점이 $0$인 꼴)으로 증명한다. $S_n$을 "모든 항이 $0_V$인 길이 $n$인 열의 합은 $0_V$이다"로 둔다. 기초 단계. $n = 0$이면 정의에 의해 합은 $0_V$이다. 귀납 단계. $S_k$가 참이라 하고 모든 항이 $0_V$인 길이 $k + 1$인 열 $v_1, \dots, v_{k+1}$을 잡는다. 처음 $k$개도 모든 항이 $0_V$이므로 $S_k$에 의해 그 합은 $0_V$이다. 정의에 의해 $v_1 + \cdots + v_{k+1} = 0_V + v_{k+1} = 0_V + 0_V$이고, 영벡터의 정의에서 $x = 0_V$, $z = 0_V$로 두면 $0_V + 0_V = 0_V$이다. 따라서 $S_{k+1}$이 참이다. 시작점이 $0$인 귀납법의 원리에 의해 모든 정수 $n \ge 0$에 대하여 $S_n$이 참이다.
:::

:::remark[(H1) 부분공간에 속한다]
귀납법으로 증명한다. $S_n$을 "모든 항이 $W$에 속하는 길이 $n$인 열의 합은 $W$에 속한다"로 둔다. 기초 단계. $n = 0$이면 합은 $0_V$이고 [[subspace|(S1)]]에 의해 $0_V \in W$이다. 귀납 단계. $S_k$가 참이라 하고 모든 항이 $W$에 속하는 길이 $k + 1$인 열을 잡는다. 처음 $k$개의 항도 $W$에 속하므로 $S_k$에 의해 그 합 $s$는 $W$에 속한다. 정의에 의해 $v_1 + \cdots + v_{k+1} = s + v_{k+1}$이고, $s \in W$이고 $v_{k+1} \in W$이므로 (S2)에 의해 $s + v_{k+1} \in W$이다. 따라서 $S_{k+1}$이 참이다. 귀납법의 원리(시작점 $0$)에 의해 모든 $n \ge 0$에서 $S_n$이 참이다.
:::

:::remark[(H2) 이어 붙이기]
첫째 열 $v_1, \dots, v_m$을 고정하고 $A = v_1 + \cdots + v_m$이라 쓴다. $n$에 대한 귀납법으로 증명한다. $S_n$을 "길이 $n$인 모든 열 $w_1, \dots, w_n$에 대하여, 위처럼 만든 $c_1, \dots, c_{m+n}$이 $A + (w_1 + \cdots + w_n) = c_1 + \cdots + c_{m+n}$을 만족한다"로 둔다.

기초 단계. $n = 0$이면 $c$는 길이 $m$이고 $1 \le i \le m$에서 $c_i = v_i$이므로 $c$는 열 $v$와 같다. 따라서 $c_1 + \cdots + c_m = A$이다. 한편 빈 열 $w$의 합은 $0_V$이고 $A + 0_V = A$이므로($0_V$는 영벡터) $A + (w_1 + \cdots + w_n) = A = c_1 + \cdots + c_{m+n}$이다.

귀납 단계. $S_k$가 참이라 하고 길이 $k + 1$인 열 $w_1, \dots, w_{k+1}$과 이어 붙인 열 $c_1, \dots, c_{m+k+1}$을 잡는다. $w'$을 $w$의 처음 $k$개로 이루어진 열이라 하고 $B = w_1 + \cdots + w_k$라 하면 정의에 의해 $w_1 + \cdots + w_{k+1} = B + w_{k+1}$이다. $c$의 처음 $m + k$개는 $1 \le i \le m$에서 $v_i$이고 $m + j$ ($1 \le j \le k$)에서 $w_j$이므로 $v$와 $w'$을 이어 붙인 열과 같고, $S_k$에 의해 그 합은 $A + B$이다. 또 $c_{m+k+1} = w_{k+1}$이다. 따라서 정의의 둘째 줄과 [[vector-space|(V2)]]에 의해
$$c_1 + \cdots + c_{m+k+1} = (A + B) + w_{k+1} = A + (B + w_{k+1}) = A + (w_1 + \cdots + w_{k+1})$$
이다. 따라서 $S_{k+1}$이 참이고, 귀납법의 원리(시작점 $0$)에 의해 모든 $n \ge 0$에서 $S_n$이 참이다.
:::

:::remark[(H3) 항별 합]
먼저 벡터 $a$, $b$, $c$, $d$에 대하여 $(a + b) + (c + d) = (a + c) + (b + d)$임을 보인다. [[vector-space|(V2)]]에 의해 $(a + b) + (c + d) = a + (b + (c + d))$이고, (V2)에 의해 $b + (c + d) = (b + c) + d$이며, [[vector-space|(V1)]]에 의해 $b + c = c + b$이므로 $b + (c + d) = (c + b) + d$이다. 다시 (V2)에 의해 $(c + b) + d = c + (b + d)$이다. 따라서 $(a + b) + (c + d) = a + (c + (b + d))$이고 (V2)에 의해 이것은 $(a + c) + (b + d)$이다. 이 등식을 (X)라 부른다.

$n$에 대한 귀납법으로 증명한다. $S_n$을 "길이 $n$인 모든 열 $v$, $w$에 대하여 (H3)의 등식이 성립한다"로 둔다. 기초 단계. $n = 0$이면 왼쪽은 $0_V$이고 오른쪽은 $0_V + 0_V = 0_V$이다(영벡터의 정의에서 $x = z = 0_V$). 귀납 단계. $S_k$가 참이라 하고 길이 $k + 1$인 두 열 $v$, $w$를 잡는다. $v' = v_1 + \cdots + v_k$, $w' = w_1 + \cdots + w_k$라 하면 $S_k$에 의해 $(v_1 + w_1) + \cdots + (v_k + w_k) = v' + w'$이다. 정의에 의해 왼쪽 $(v_1 + w_1) + \cdots + (v_{k+1} + w_{k+1})$은 $(v' + w') + (v_{k+1} + w_{k+1})$이고, (X)에 의해 이것은 $(v' + v_{k+1}) + (w' + w_{k+1})$이다. 정의에 의해 $v' + v_{k+1} = v_1 + \cdots + v_{k+1}$이고 $w' + w_{k+1} = w_1 + \cdots + w_{k+1}$이다. 따라서 $S_{k+1}$이 참이고, 귀납법의 원리(시작점 $0$)에 의해 모든 $n \ge 0$에서 $S_n$이 참이다.
:::

:::remark[(H4) 스칼라배]
$\alpha$를 실수로 고정하고 $n$에 대한 귀납법으로 증명한다. $S_n$을 "길이 $n$인 모든 열 $v$에 대하여 (H4)의 등식이 성립한다"로 둔다. 기초 단계. $n = 0$이면 $\alpha(v_1 + \cdots + v_n) = \alpha 0_V = 0_V$이다([[vector-space-basic-properties|(B4)]]). 오른쪽은 빈 열의 합이므로 $0_V$이다. 귀납 단계. $S_k$가 참이라 하고 길이 $k + 1$인 열을 잡는다. $v' = v_1 + \cdots + v_k$라 하면 $v_1 + \cdots + v_{k+1} = v' + v_{k+1}$이고, [[vector-space|(V7)]]에 의해 $\alpha(v' + v_{k+1}) = \alpha v' + \alpha v_{k+1}$이다. $S_k$에 의해 $\alpha v'$은 $\alpha v_1, \dots, \alpha v_k$의 합이다. 이 열은 열 $\alpha v_1, \dots, \alpha v_{k+1}$의 처음 $k$개이므로, 정의에 의해 $\alpha v' + \alpha v_{k+1} = \alpha v_1 + \cdots + \alpha v_{k+1}$이다. 따라서 $S_{k+1}$이 참이고, 귀납법의 원리(시작점 $0$)에 의해 모든 $n \ge 0$에서 $S_n$이 참이다.
:::

:::remark[(H6) k번째 항 떼어 내기]
$n$에 대한 귀납법으로 증명한다. $S_n$을 "길이 $n + 1$인 모든 열 $v$와 모든 $k \in \{1, \dots, n+1\}$에 대하여 (H6)의 등식이 성립한다"로 둔다.

기초 단계. $n = 0$이면 $k = 1$이고 $c$는 빈 열이어서 $c$의 합은 $0_V$이다. 길이 $1$인 열 $v_1$의 합은 (H0)에 의해 $v_1$이다. 한편 $c$의 합에 $v_1$을 더하면 $0_V + v_1$이고, 이것은 (H0)에 의해 $v_1$이다. 따라서 $S_0$이 참이다.

귀납 단계. $S_n$이 참이라 하고, 길이 $n + 2$인 열 $v_1, \dots, v_{n+2}$와 $k \in \{1, \dots, n+2\}$를 잡는다. $c$는 $k$번째 항을 지운 길이 $n + 1$인 열이다.

(i) $k = n + 2$이면 $c_i = v_i$ ($1 \le i \le n+1$)이므로 $c$는 $v$의 처음 $n + 1$개이다. 정의에 의해 $v_1 + \cdots + v_{n+2} = (c_1 + \cdots + c_{n+1}) + v_{n+2}$이고 $v_{n+2} = v_k$이다.

(ii) $k \le n + 1$이면 $v'$을 $v$의 처음 $n + 1$개로 이루어진 길이 $n + 1$인 열이라 하고 $S_n$을 $v'$과 $k$에 적용한다. $v'$에서 $k$번째 항을 지운 길이 $n$인 열 $c'$는 $c'_i = v_i$ ($i < k$), $c'_i = v_{i+1}$ ($k \le i \le n$)이고, 이것은 $c$의 처음 $n$개와 같다. 또 $k \le n + 1$이므로 $c_{n+1} = v_{n+2}$이다. $Q = c'_1 + \cdots + c'_n$이라 하면 $S_n$에 의해 $v_1 + \cdots + v_{n+1} = Q + v_k$이다. 정의, [[vector-space|(V2)]], [[vector-space|(V1)]]에 의해
$$v_1 + \cdots + v_{n+2} = (Q + v_k) + v_{n+2} = Q + (v_k + v_{n+2}) = Q + (v_{n+2} + v_k) = (Q + v_{n+2}) + v_k$$
이다. 정의에 의해 $Q + v_{n+2} = Q + c_{n+1} = c_1 + \cdots + c_{n+1}$이므로 $v_1 + \cdots + v_{n+2} = (c_1 + \cdots + c_{n+1}) + v_k$이다. (i), (ii)에서 $S_{n+1}$이 참이고, 귀납법의 원리(시작점 $0$)에 의해 모든 $n \ge 0$에서 $S_n$이 참이다.
:::

:::remark[(H7) 한 항 말고는 모두 0 일 때]
(H6)의 설정에서 $c_i$는 $i < k$이면 $v_i$, $k \le i \le n$이면 $v_{i+1}$이고, 두 경우 모두 $v$의 $k$가 아닌 자리의 항이다($i < k$이면 $i \ne k$이고 $i \ge k$이면 $i + 1 > k$). 따라서 모든 $c_i$가 $0_V$이고 (H5)에 의해 $c_1 + \cdots + c_n = 0_V$이다. (H6)에 의해 $v_1 + \cdots + v_{n+1} = 0_V + v_k = v_k$이다(마지막 등호는 (H0)).
:::

:::remark[(C1)–(C4) 계수를 곱한 합]
(C1) 열 $\alpha_i v_i$와 $\beta_i v_i$에 (H3)을 쓰면 $(\alpha_1 v_1 + \cdots + \alpha_n v_n) + (\beta_1 v_1 + \cdots + \beta_n v_n)$은 $i$번째 항이 $\alpha_i v_i + \beta_i v_i$인 열의 합이다. [[vector-space|(V8)]]에 의해 $\alpha_i v_i + \beta_i v_i = (\alpha_i + \beta_i) v_i$이므로 이 열은 $i$번째 항이 $(\alpha_i + \beta_i) v_i$인 열과 같고, 따라서 (C1)이다.

(C2) 열 $\alpha_i v_i$에 (H4)를 쓰면 $\gamma(\alpha_1 v_1 + \cdots + \alpha_n v_n)$은 $i$번째 항이 $\gamma(\alpha_i v_i)$인 열의 합이다. [[vector-space|(V6)]]에 의해 $\gamma(\alpha_i v_i) = (\gamma\alpha_i) v_i$이므로 (C2)이다.

(C3) 모든 $i$에서 $\alpha_i = 0$이면 [[vector-space-basic-properties|(B3)]]에 의해 $\alpha_i v_i = 0 v_i = 0_V$이므로 열 $\alpha_i v_i$의 모든 항이 $0_V$이고 (H5)에 의해 합은 $0_V$이다.

(C4) $i \ne k$이면 (B3)에 의해 $\alpha_i v_i = 0_V$이다. 열 $\alpha_1 v_1, \dots, \alpha_n v_n$은 길이 $n = (n - 1) + 1$이고 $n - 1 \ge 0$이다. 이 열과 $k \in \{1, \dots, n\}$에 (H7)을 ((H7)의 $n$을 $n - 1$로 두어) 쓰면, $k$번째 항 말고는 모두 $0_V$이므로 합은 $k$번째 항 $\alpha_k v_k$이다.
:::

:::remark[(C5) 계수 끼워 넣기와 떼어 내기]
$w_i = \alpha_i v_i$ ($1 \le i \le n + 1$)라 하고 $w$에서 $k$번째 항을 지운 열을 $c'$라 하자. $1 \le i < k$에서 $c'_i = w_i = \alpha_i v_i = \gamma_i v_i = \gamma_i c_i$이고, $k \le i \le n$에서 $c'_i = w_{i+1} = \alpha_{i+1} v_{i+1} = \gamma_i v_{i+1} = \gamma_i c_i$이다($i + 1 > k$이므로 $\alpha_{i+1} = \gamma_i$). 따라서 $c'$는 $i$번째 항이 $\gamma_i c_i$인 열이다. (H6)을 $w$와 $k$에 쓰면 $w_1 + \cdots + w_{n+1} = (c'_1 + \cdots + c'_n) + w_k$이고, $c'$의 합은 $\gamma_1 c_1 + \cdots + \gamma_n c_n$, $w_k = \alpha_k v_k = t v_k$이다. 이것이 첫째 등식이다. 둘째 주장은 정의에서 바로 나온다. $\alpha$에서 $k$번째 항을 지운 열 $\gamma$는 $\gamma_i = \alpha_i$ ($i < k$), $\gamma_i = \alpha_{i+1}$ ($k \le i \le n$)이므로, $\gamma$의 $k$번째 자리에 $t = \alpha_k$를 끼워 넣으면 $\alpha_i = \gamma_i$ ($i < k$), $\alpha_k = t$, $k < i$에서 $\alpha_i = \gamma_{i-1}$로 다시 $\alpha$가 된다.
:::

:::remark[(C6) 차]
$x = \alpha_1 v_1 + \cdots + \alpha_n v_n$, $y = \beta_1 v_1 + \cdots + \beta_n v_n$이라 쓰면 $x - y$는 $x + (-y)$이다. [[vector-space-basic-properties|(B5)]]에 의해 $-y = (-1)y$이고, (C2)에 의해 $(-1)y = ((-1)\beta_1) v_1 + \cdots + ((-1)\beta_n) v_n$이다. [[real-number-arithmetic|(K9)]]에 의해 $(-1)\beta_i = -\beta_i$이다. 따라서 (C1)에 의해 $x + (-y) = (\alpha_1 + (-\beta_1)) v_1 + \cdots + (\alpha_n + (-\beta_n)) v_n$이고, $\alpha_i + (-\beta_i) = \alpha_i - \beta_i$이다.
:::

## 예시와 반례

:::example[ℝ²의 벡터 셋을 더하기]
$V = \mathbb{R}^2$([[real-function-space]]의 성분별 연산)에서 열 $v_1 = (1, 2)$, $v_2 = (3, -1)$, $v_3 = (0, 4)$의 합을 정의대로 계산합니다. 영벡터는 $(0, 0)$입니다. $0$개의 합은 $(0, 0)$, $1$개의 합은 $(0, 0) + (1, 2) = (1, 2)$, $2$개의 합은 $(1, 2) + (3, -1) = (4, 1)$, $3$개의 합은 $(4, 1) + (0, 4) = (4, 5)$입니다. 따라서 $v_1 + v_2 + v_3 = (4, 5)$입니다.

규칙도 계산으로 확인해 봅시다. (H6)에서 $k = 2$로 두면 $c = (1, 2), (0, 4)$이고 $c$의 합은 $((0, 0) + (1, 2)) + (0, 4) = (1, 6)$이므로 $(1, 6) + v_2 = (1, 6) + (3, -1) = (4, 5)$이고 앞의 값과 같습니다. (H4)에서 $\alpha = 2$로 두면 $2(4, 5) = (8, 10)$이고, 열 $2v_1, 2v_2, 2v_3 = (2, 4), (6, -2), (0, 8)$의 합은 $(2, 4) + (6, -2) = (8, 2)$, $(8, 2) + (0, 8) = (8, 10)$으로 같습니다.
:::

:::example[실수의 합]
실수의 열 $2, 3, 5$의 합은 $\mathbb{R}$이 벡터공간이라는 것에 의해 $\bigl((0 + 2) + 3\bigr) + 5 = 10$입니다. 길이 $2$인 열 $2, 3$의 합은 $2 + 3 = 5$이고, 이것은 (H0)이 말하는 대로 실수의 덧셈 자체입니다.
:::

:::counterexample[열은 집합이 아니다]
$\mathbb{R}^2$의 열 $v_1 = (1, 0)$, $v_2 = (1, 0)$(같은 벡터가 두 자리)의 합은 $((0, 0) + (1, 0)) + (1, 0) = (2, 0)$입니다. 한 번만 나온 열 $(1, 0)$의 합은 $(1, 0)$이므로 두 열의 합이 다릅니다. 항을 모은 집합 $\{(1, 0)\}$으로는 이 두 열을 구별할 수 없고, 열은 자리마다 항을 정하므로 같은 벡터도 자리마다 따로 더해집니다.
:::

:::counterexample[(H1)에서 부분공간이라는 가정을 빼면 깨진다]
$W = \{(1, 0)\}$은 $\mathbb{R}^2$의 부분집합이고 $(0, 0) \notin W$이므로 부분공간이 아닙니다. 열 $(1, 0), (1, 0)$의 모든 항은 $W$에 속하지만 합 $(2, 0)$은 $W$의 원소가 아닙니다($2 \ne 1$이므로 $(2, 0) \ne (1, 0)$).
:::

## 확인 질문

:::check[$\mathbb{R}^2$의 열 $(1, 0), (2, 3)$과 열 $(0, 1)$을 이어 붙인 열의 합을 정의대로 구하고, (H2)의 왼쪽과 같은지 확인하라.]
이어 붙인 열은 $(1, 0), (2, 3), (0, 1)$이고 정의대로 $(1, 0) + (2, 3) = (3, 3)$, $(3, 3) + (0, 1) = (3, 4)$입니다. (H2)의 왼쪽은 열 $(1, 0), (2, 3)$의 합 $(3, 3)$과 길이 $1$인 열 $(0, 1)$의 합 $(0, 1)$을 더한 $(3, 3) + (0, 1) = (3, 4)$이고 같습니다.
:::

:::check[$\mathbb{R}^3$에서 빈 열의 합은 무엇이고, 길이 $1$인 열 $(4, 5, 6)$의 합은 무엇인가?]
빈 열의 합은 정의에 의해 $\mathbb{R}^3$의 영벡터 $(0, 0, 0)$입니다. 길이 $1$인 열의 합은 $(0, 0, 0) + (4, 5, 6) = (4, 5, 6)$으로 (H0)에 의해 항 자신입니다.
:::
