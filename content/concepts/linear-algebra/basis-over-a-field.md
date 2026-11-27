---
title: 체 위의 기저와 좌표
title_en: Basis and Coordinates over a Field
aliases: [체 위의 기저, 좌표, 표준기저 (체), 부분열 (벡터의 열), basis over a field, coordinates]
kind: definition
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 체 F 위의 벡터공간의 기저를 일차독립이고 공간을 생성하는 열로 정의하고, 기저인 것은 모든 벡터의 계수가 하나로 정해질 때라는 것, 좌표의 계산, Fⁿ 의 표준기저, 벡터의 열의 부분열, 모든 열에 같은 생성을 갖는 일차독립인 부분열이 있다는 것(그래서 생성하는 열은 기저인 부분열을 갖는다), ℝ 위에서는 선형대수 강의의 기저와 같다는 것을 보인다.
requires: [set, function, recursion-theorem, finite-set, mathematical-induction, prime-number, well-ordering-principle, group, finite-product-in-a-group, ring, ring-basic-properties, field, finite-integral-domain-is-a-field, integers-modulo-n, finite-sums-in-a-ring, real-function-space, vector-space-over-a-field, span-and-independence-over-a-field, vector-space, basis, standard-basis]
sources:
  - ref: judson-abstract-algebra
    loc: "20.3절 Linear Independence, 기저의 정의 (번호 없음, p.255), Example 20.12, 20.13 (p.255), Proposition 20.9 (p.254–255); 20.5절 Exercises, 연습문제 6, 11 (p.257)"
    checked: original
    note: "출처는 기저를 '공간을 생성하는 일차독립인 집합 {e_1, …, e_n}' 으로 정의한다(p.255). 이 항목은 선형대수 강의처럼 열로 정의하고, 일차독립과 생성의 두 조건을 정의로 삼는다(출처와 같은 꼴). 출처는 기저에 관한 '좌표' 라는 낱말을 쓰지 않는다(검색어 'coordinate' 로 책 전체를 찾은 32건은 곱군의 성분별 연산(3·9장), 복소수의 직교·극좌표(4장), 부호의 자리(8장), 분수체의 순서쌍(18장), 20장 머리말의 공간 좌표(p.252), 작도(21장)이다). (1)의 '좌표가 하나뿐' 은 Proposition 20.9(p.254–255)와 기저의 정의를 합친 것이다. (4)의 표준기저는 Example 20.12 의 ℝ³ 의 e_1, e_2, e_3 을 Fⁿ 으로 넓힌 것이고, Fⁿ 의 차원이 n 이라는 연습문제 6(p.257)이 묻는 기저이다. (5)의 부분열은 출처에 없는 낱말이다(검색어 'subsequence', 'subset of'). (6)의 '생성하는 열은 기저를 포함한다' 는 출처 Proposition 20.10(종속이면 한 벡터가 나머지의 일차결합)을 되풀이해 쓰면 나오는 내용이고, 출처는 이것을 명제로 두지 않는다(검색어 'contains a basis', 'reduce' 로 책 전체를 찾고 20.5절 연습문제 1–18 을 처음부터 읽었다). 출처의 Theorem 20.15(p.256)와 연습문제 11 은 길이가 차원과 같은 생성하는 집합이 기저라는 것을 말하고 증명은 연습으로 둔다. (6)의 증명은 앞에서부터 차례로 '앞의 것들의 생성에 들지 않는 항' 만 남기는 귀납으로, 지울 항을 고르지 않는다. 예시 '$\\mathbb{Z}_5^2$의 기저와 좌표' 의 계산은 출처 Example 20.12 가 ℝ³ 의 다른 기저 {(3, 2, 1), (3, 2, 0), (1, 1, 1)} 을 드는 것과 같은 종류이다. 예시 '생성하는 열에서 기저인 부분열을 남기는 예' 의 한 벡터의 생성 span_F(w_1) = {(t, [2]t)} 은 출처 20.4절 읽기 물음 2(p.256)가 한 원소 u 가 생성하는 부분공간을 묻는 것과 같은 종류이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(출처 주장 검색 — 연습문제의 따름인 '명제로 없다' 5건을 겹침으로 고침, 반례 대입). 독립 검토 없음."
added: 2026-11-27
---

:::statement
$F$가 [[field|체]]이고 $V$가 $F$ 위의 [[vector-space-over-a-field|벡터공간]]이라 하자. 영벡터 $0_V$, 벡터의 열과 스칼라의 열, 합의 기호 $\sum$은 [[vector-space-over-a-field|체 위의 벡터공간]]의 것이고, 생성 $\operatorname{span}_F$, 생성한다, 일차독립, 덧붙인 열은 [[span-and-independence-over-a-field|체 위의 생성과 일차독립]]의 것이다. 아래에서 $n$, $r$은 $0$ 이상인 정수이다.

**기저와 좌표.** 벡터의 열 $v_1, \dots, v_n$이 $V$의 ($F$ 위의) **기저**(basis)인 것은 정확히 이 열이 일차독립이고 $V$를 생성할 때이다. 열이 기저이면, 각 $x \in V$에 대하여 $x = \sum_{k=1}^{n} \alpha_k v_k$인 길이 $n$인 스칼라의 열 $\alpha_1, \dots, \alpha_n$이 있고(생성) 하나뿐이다([[span-and-independence-over-a-field|생성과 일차독립]]의 (3)의 (iv)). 이 열을 이 기저에 관한 $x$의 **좌표**(coordinates)라 한다.

**부분열.** $s : \{1, \dots, r\} \to \{1, \dots, n\}$이 **순증가**(strictly increasing)인 것은 정확히 $i < j$인 모든 $i, j \in \{1, \dots, r\}$에서 $s(i) < s(j)$일 때이다($r = 0$이면 $s$는 빈 함수이고 순증가이다). 그런 $s$와 벡터의 열 $v_1, \dots, v_n$에 대하여 $i$번째 항이 $v_{s(i)}$인 길이 $r$인 열 $v_{s(1)}, \dots, v_{s(r)}$, 곧 [[function-composition|합성]] $v \circ s$를 $v$의 ($s$로 정한) **부분열**(subsequence)이라 한다.

다음이 성립한다. $v_1, \dots, v_n$은 $V$의 벡터의 열이다.

1. (좌표로 본 기저) 열 $v_1, \dots, v_n$이 $V$의 기저인 것은 정확히 모든 $x \in V$에 대하여 $x = \sum_{k=1}^{n} \alpha_k v_k$인 길이 $n$인 스칼라의 열이 하나 있고 하나뿐일 때이다.
2. (빈 열) 빈 열이 $V$의 기저인 것은 정확히 $V = \{0_V\}$일 때이다.
3. (좌표의 계산) 열이 $V$의 기저이고 $x$, $y \in V$의 좌표가 각각 $\alpha$, $\beta$이며 $\gamma \in F$이면, $x + y$의 좌표는 $k$번째 항이 $\alpha_k + \beta_k$인 열이고 $\gamma x$의 좌표는 $k$번째 항이 $\gamma\alpha_k$인 열이다.
4. (표준기저) $n$이 자연수이고 $k \in \{1, \dots, n\}$이면, $F^n$([[vector-space-over-a-field|체 위의 벡터공간]]의 (3))의 원소 $e_k$를 $k$번째 값이 $1$이고 나머지 값이 $0$인 함수로 정한다. 열 $e_1, \dots, e_n$은 $F^n$의 기저이고, 이것을 **표준기저**(standard basis)라 한다. $x = (x_1, \dots, x_n) \in F^n$의 이 기저에 관한 좌표는 $x_1, \dots, x_n$이다. 곧 $x = \sum_{k=1}^{n} x_k e_k$이다. 또 $F$ 자신(같은 항목의 (3)의 (iv))에서 항이 $1$ 하나인 길이 $1$인 열은 $F$의 기저이다.
5. (부분열의 성질) $s : \{1, \dots, r\} \to \{1, \dots, n\}$이 순증가라 하자.
   - (i) 모든 $i \in \{1, \dots, r\}$에서 $i \le s(i)$이고, $r \le n$이다.
   - (ii) $r = n$이면 모든 $i$에서 $s(i) = i$이고, 따라서 부분열 $v \circ s$는 $v$ 자신이다.
   - (iii) $\operatorname{span}_F(v_{s(1)}, \dots, v_{s(r)}) \subseteq \operatorname{span}_F(v_1, \dots, v_n)$이다.
6. (일차독립인 부분열) 모든 열 $v_1, \dots, v_n$에 대하여, 순증가인 $s : \{1, \dots, r\} \to \{1, \dots, n\}$이 있어 부분열 $v \circ s$가 일차독립이고 $\operatorname{span}_F(v_{s(1)}, \dots, v_{s(r)}) = \operatorname{span}_F(v_1, \dots, v_n)$이다. 특히 $v_1, \dots, v_n$이 $V$를 생성하면 $v$의 부분열 가운데 $V$의 기저인 것이 있다.
7. (실수의 경우) $V$가 [[vector-space|벡터공간]]이고 [[vector-space-over-a-field|체 위의 벡터공간]]의 (2)에 의해 $\mathbb{R}$ 위의 벡터공간으로 본다고 하자. 열이 이 항목의 뜻에서 $\mathbb{R}$ 위의 기저인 것은 정확히 [[basis|기저]]의 뜻에서 기저일 때이고, 두 쪽의 좌표는 같다. $F = \mathbb{R}$인 (4)의 $e_1, \dots, e_n$은 [[standard-basis|표준기저]]의 $e_1, \dots, e_n$과 같다.
:::

:::english
Let $F$ be a field and $V$ a vector space over $F$. The zero vector $0_V$, sequences of vectors and of scalars, and the summation sign $\sum$ are those of the entry on vector spaces over a field, and the span $\operatorname{span}_F$, "spans", linear independence and appended sequences are those of the entry on span and linear independence over a field. Below, $n$ and $r$ are integers $\ge 0$.

**Bases and coordinates.** A sequence of vectors $v_1, \dots, v_n$ is a **basis** of $V$ (over $F$) exactly when it is linearly independent and spans $V$. If the sequence is a basis, then for each $x \in V$ there is a sequence of scalars $\alpha_1, \dots, \alpha_n$ of length $n$ with $x = \sum_{k=1}^{n} \alpha_k v_k$ (by spanning), and it is unique ((3)(iv) of the entry on span and linear independence). This sequence is called the **coordinates** of $x$ with respect to the basis.

**Subsequences.** A function $s : \{1, \dots, r\} \to \{1, \dots, n\}$ is **strictly increasing** exactly when $s(i) < s(j)$ for all $i, j \in \{1, \dots, r\}$ with $i < j$ (if $r = 0$, $s$ is the empty function, which is strictly increasing). For such $s$ and a sequence of vectors $v_1, \dots, v_n$, the sequence $v_{s(1)}, \dots, v_{s(r)}$ of length $r$ whose $i$-th term is $v_{s(i)}$, that is, the composition $v \circ s$, is called the **subsequence** of $v$ (determined by $s$).

The following hold, where $v_1, \dots, v_n$ is a sequence of vectors of $V$.

1. (Bases via coordinates) The sequence $v_1, \dots, v_n$ is a basis of $V$ exactly when for every $x \in V$ there is one and only one sequence of scalars of length $n$ with $x = \sum_{k=1}^{n} \alpha_k v_k$.
2. (The empty sequence) The empty sequence is a basis of $V$ exactly when $V = \{0_V\}$.
3. (Computing coordinates) If the sequence is a basis of $V$, the coordinates of $x$, $y \in V$ are $\alpha$, $\beta$ respectively, and $\gamma \in F$, then the coordinates of $x + y$ are the sequence whose $k$-th term is $\alpha_k + \beta_k$, and the coordinates of $\gamma x$ are the sequence whose $k$-th term is $\gamma\alpha_k$.
4. (The standard basis) If $n$ is a natural number and $k \in \{1, \dots, n\}$, let $e_k$ be the element of $F^n$ ((3) of the entry on vector spaces over a field) whose $k$-th value is $1$ and whose other values are $0$. The sequence $e_1, \dots, e_n$ is a basis of $F^n$, called the **standard basis**. The coordinates of $x = (x_1, \dots, x_n) \in F^n$ with respect to it are $x_1, \dots, x_n$; that is, $x = \sum_{k=1}^{n} x_k e_k$. Also, in $F$ itself ((3)(iv) of the same entry), the sequence of length $1$ whose term is $1$ is a basis of $F$.
5. (Properties of subsequences) Let $s : \{1, \dots, r\} \to \{1, \dots, n\}$ be strictly increasing.
   - (i) $i \le s(i)$ for every $i \in \{1, \dots, r\}$, and $r \le n$.
   - (ii) If $r = n$, then $s(i) = i$ for every $i$, so the subsequence $v \circ s$ is $v$ itself.
   - (iii) $\operatorname{span}_F(v_{s(1)}, \dots, v_{s(r)}) \subseteq \operatorname{span}_F(v_1, \dots, v_n)$.
6. (Linearly independent subsequences) For every sequence $v_1, \dots, v_n$ there is a strictly increasing $s : \{1, \dots, r\} \to \{1, \dots, n\}$ such that the subsequence $v \circ s$ is linearly independent and $\operatorname{span}_F(v_{s(1)}, \dots, v_{s(r)}) = \operatorname{span}_F(v_1, \dots, v_n)$. In particular, if $v_1, \dots, v_n$ spans $V$, then some subsequence of $v$ is a basis of $V$.
7. (The real case) Let $V$ be a vector space in the sense of the linear algebra course, regarded as a vector space over $\mathbb{R}$ by (2) of the entry on vector spaces over a field. A sequence is a basis over $\mathbb{R}$ in the sense of this entry exactly when it is a basis in the sense of the entry on bases, and the coordinates are the same on both sides. For $F = \mathbb{R}$, the $e_1, \dots, e_n$ of (4) are the $e_1, \dots, e_n$ of the entry on the standard basis.
:::

## 직관

기저는 공간의 모든 벡터를 한 가지 방법으로만 만들어 내는 재료의 목록입니다. 생성한다는 조건이 "만들 수 있다"를, 일차독립이라는 조건이 "한 가지 방법으로만"을 맡습니다((1)). 그래서 기저를 하나 정하면 벡터와 좌표의 열이 짝을 이루고, (3)은 벡터를 더하거나 스칼라배하면 좌표도 그렇게 바뀐다는 것을 말합니다.

(6)은 재료 목록을 앞에서부터 읽으며 "앞에서 남긴 것들로 이미 만들 수 있는 재료"를 버리는 방법입니다. 버리는 재료는 앞의 것들로 만들 수 있으므로 생성은 줄지 않고, 남기는 재료는 앞의 것들로 만들 수 없으므로 덧붙여도 일차독립이 유지됩니다([[span-and-independence-over-a-field|생성과 일차독립]]의 (4)). 남길지 버릴지는 각 항에서 정해지므로 무엇을 고를 필요가 없습니다.

## 증명

:::idea
(1)은 생성이 좌표의 존재를, 일차독립이 좌표의 유일성을 준다는 것이다. (6)은 열의 길이에 대한 귀납으로, 마지막 항이 앞에서 남긴 부분열의 생성에 들면 버리고 들지 않으면 덧붙인다.
:::

:::hint
(5)의 (ii)에서는 큰 번호부터 거꾸로 $s(i) \le i$를 보인다.
:::

:::hint
(6)의 귀납 단계에서 마지막 항 $v_{n+1}$을 덧붙인 부분열의 생성이 $v$ 전체의 생성과 같다는 것은, 두 열의 항이 서로 상대의 생성에 든다는 것으로 보인다.
:::

:::proof
**쓰는 사실.** [[vector-space-over-a-field|체 위의 벡터공간]]을 "벡터공간 항목", [[span-and-independence-over-a-field|체 위의 생성과 일차독립]]을 "생성 항목"으로 줄여 부르고 그 번호로 인용한다. 합의 성질은 [[finite-sums-in-a-ring|환의 유한 합]]의 번호로 인용한다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7), (L1)–(L3)으로 다룬다. 함수와 열은 값으로 정하고([[recursion-theorem|재귀 정리]]의 (1)), 정의역이 같은 두 함수는 모든 점에서 값이 같을 때 같다([[function|함수]]).

**1의 증명.** 기저이면 생성하므로 그런 열이 있고, 생성 항목의 (3)의 (iv)에 의해 하나뿐이다. 거꾸로 모든 $x$에 그런 열이 하나 있고 하나뿐이라 하자. 있다는 것은 열이 $V$를 생성한다는 것이다. $\sum_{k=1}^{n} \alpha_k v_k = 0_V$이면, 모든 자리가 $0$인 열 $o$도 벡터공간 항목의 (4)의 (v)에 의해 $\sum_{k} o_k v_k = 0_V$이므로, 하나뿐이라는 것에 의해 $\alpha = o$, 곧 모든 $\alpha_k = 0$이다. 따라서 열은 일차독립이고 기저이다.

**2의 증명.** 생성 항목의 정의에 의해 빈 열은 일차독립이고 그 생성은 $\{0_V\}$이다. 따라서 빈 열이 기저인 것은 정확히 $V = \{0_V\}$일 때이다.

**3의 증명.** $x = \sum_{k} \alpha_k v_k$, $y = \sum_{k} \beta_k v_k$이면 벡터공간 항목의 (4)의 (iii), (iv)에 의해 $x + y = \sum_{k} (\alpha_k + \beta_k) v_k$이고 $\gamma x = \sum_{k} (\gamma\alpha_k) v_k$이다. 좌표는 하나뿐이므로((1)) 이 계수의 열이 $x + y$와 $\gamma x$의 좌표이다.

**4의 증명.** 재귀 정리의 (1)에 의해 $e_k$가 있다. $x \in F^n$과 $j \in \{1, \dots, n\}$에 대하여 벡터공간 항목의 (3)의 (ii)에 의해
$$
\begin{aligned}
\Bigl(\sum_{k=1}^{n} x_k e_k\Bigr)_j &= \sum_{k=1}^{n} (x_k e_k)_j \\
&= \sum_{k=1}^{n} x_k (e_k)_j
\end{aligned}
$$
이다. $k \ne j$이면 $(e_k)_j = 0$이므로 $x_k (e_k)_j = 0$이고([[ring-basic-properties|환의 기본 성질]]의 (1)), $k = j$이면 $x_j (e_j)_j = x_j 1 = x_j$이다. 환의 유한 합의 (6)의 (v)에 의해 이 합은 $x_j$이다. 모든 $j$에서 값이 같으므로 벡터공간 항목의 (3)의 (i)에 의해 $\sum_{k} x_k e_k = x$이다. 거꾸로 $\sum_{k} \alpha_k e_k = x$이면 같은 계산으로 $j$번째 값에서 $\alpha_j = x_j$이다. 따라서 모든 $x$에 계수의 열이 하나 있고 하나뿐이며, (1)에 의해 표준기저는 기저이고 $x$의 좌표는 $x_1, \dots, x_n$이다.

$F$ 자신에서는 스칼라배가 $F$의 곱셈이므로, 각 $x \in F$에 대하여 계수가 $x$ 하나인 일차결합은 환의 유한 합의 (1)에 의해 $x$와 $1$의 곱 $x1 = x$이고, $\alpha 1 = \beta 1$이면 $\alpha = \beta$이다. (1)에 의해 항이 $1$인 길이 $1$인 열은 기저이다.

**5의 증명.** (i) $i$에 대한 귀납법으로 보인다. $r \ge 1$이면 $s(1) \in \{1, \dots, n\}$이므로 $1 \le s(1)$이다. $1 \le i < r$이고 $i \le s(i)$이면 순증가에 의해 $s(i) < s(i+1)$이므로 (Z6)에 의해 $i < s(i+1)$이고, (Z1)에 의해 $i + 1 \le s(i+1)$이다. $r \ge 1$이면 $r \le s(r) \le n$이고, $r = 0$이면 $0 \le n$이다.

(ii) $r = n$이라 하자. $n = 0$이면 보일 것이 없다. $n \ge 1$이면 $0 \le t \le n - 1$인 정수 $t$에 대하여 $s(n - t) \le n - t$임을 $t$에 대한 귀납법으로 보인다. $t = 0$이면 $s(n) \in \{1, \dots, n\}$이므로 $s(n) \le n$이다. $t + 1 \le n - 1$이고 $s(n - t) \le n - t$이면, 순증가에 의해 $s(n - t - 1) < s(n - t) \le n - t$이므로 (Z1)과 (Z7)에 의해 $s(n - t - 1) \le n - t - 1$이다. 따라서 모든 $i \in \{1, \dots, n\}$에서 $s(i) \le i$이고, (i)과 (L2)에 의해 $s(i) = i$이다. 그러면 $v \circ s$의 $i$번째 항은 $v_{s(i)} = v_i$이므로 $v \circ s$와 $v$는 같은 열이다.

(iii) 부분열의 각 항 $v_{s(i)}$는 $v$의 항이므로 생성 항목의 (2)의 (i)에 의해 $\operatorname{span}_F(v_1, \dots, v_n)$에 속하고, 생성 항목의 (2)의 (iii)에 의해 포함이 성립한다.

**6의 증명.** $n$에 대한 귀납법으로, 명제 "길이 $n$인 모든 벡터의 열 $v$에 대하여 (6)의 $r$과 $s$가 있다"를 보인다.

$n = 0$이면 $r = 0$과 빈 함수 $s$를 잡는다. 부분열은 빈 열이고, 빈 열은 일차독립이며 두 생성은 모두 $\{0_V\}$이다.

$n$에서 성립한다고 하고 $v_1, \dots, v_{n+1}$을 길이 $n + 1$인 열, $v'$을 그 처음 $n$개라 하자. $v$는 $v'$에 $v_{n+1}$을 덧붙인 열이다. 귀납 가정에 의해 순증가인 $s : \{1, \dots, r\} \to \{1, \dots, n\}$이 있어 $u = v' \circ s$가 일차독립이고 $\operatorname{span}_F(u) = \operatorname{span}_F(v')$이다. $i \le r$이면 $s(i) \le n$이므로 $u_i = v'_{s(i)} = v_{s(i)}$이다. 같은 $s$를 공역이 $\{1, \dots, n+1\}$인 함수로 보아도 순증가이고 $v \circ s = u$이다.

*경우 1: $v_{n+1} \in \operatorname{span}_F(u)$.* $\operatorname{span}_F(u) = \operatorname{span}_F(v')$이므로 생성 항목의 (2)의 (iv)에 의해 $\operatorname{span}_F(v) = \operatorname{span}_F(v') = \operatorname{span}_F(u)$이다. 같은 $s$와 $u$가 $v$에 대한 (6)의 조건을 만족한다.

*경우 2: $v_{n+1} \notin \operatorname{span}_F(u)$.* $s^+ : \{1, \dots, r+1\} \to \{1, \dots, n+1\}$을 $i \le r$이면 $s^+(i) = s(i)$, $s^+(r+1) = n + 1$로 정한다. $i < j \le r$이면 $s^+(i) < s^+(j)$이고, $i \le r$이면 $s^+(i) = s(i) \le n < n + 1 = s^+(r+1)$이므로 $s^+$는 순증가이다. 부분열 $u^+ = v \circ s^+$는 $u$에 $v_{n+1}$을 덧붙인 열이고, 생성 항목의 (4)의 (i)에 의해 일차독립이다. $u^+$의 항은 모두 $v$의 항이므로 (5)의 (iii)에 의해 $\operatorname{span}_F(u^+) \subseteq \operatorname{span}_F(v)$이다. 거꾸로 $k \le n$이면 $v_k \in \operatorname{span}_F(v') = \operatorname{span}_F(u) \subseteq \operatorname{span}_F(u^+)$이고(생성 항목의 (2)의 (i), (iv)), $v_{n+1}$은 $u^+$의 항이므로 $\operatorname{span}_F(u^+)$에 속한다. 생성 항목의 (2)의 (iii)에 의해 $\operatorname{span}_F(v) \subseteq \operatorname{span}_F(u^+)$이다. 따라서 두 생성은 같다.

두 경우 가운데 하나는 반드시 일어나므로 $n + 1$에서도 성립한다. 마지막 문장: $v$가 $V$를 생성하면 부분열 $v \circ s$는 일차독립이고 생성이 $V$이므로 기저이다.

**7의 증명.** 벡터공간 항목의 (2)에 의해 $\mathbb{R}$ 위의 벡터공간으로 본 $V$의 영벡터와 연산은 선형대수 강의의 것과 같고, 같은 항목의 (5)에 의해 길이 $n$인 실수의 열 $\alpha$마다 $\sum_{k=1}^{n} \alpha_k v_k = \alpha_1 v_1 + \cdots + \alpha_n v_n$이다. [[basis|기저]]의 정의는 "모든 $x \in V$에 대하여 $x = \alpha_1 v_1 + \cdots + \alpha_n v_n$인 실수의 열이 하나 있고 하나뿐"이므로 (1)의 조건과 같은 조건이고, 두 쪽의 좌표는 같은 열이다. [[standard-basis|표준기저]]의 $e_k$는 $\mathbb{R}^n$에서 $k$번째 값이 $1$이고 나머지 값이 $0$인 함수이고, 벡터공간 항목의 (3)의 (iii)에 의해 $\mathbb{R}^n$은 $F^n$($F = \mathbb{R}$)과 같은 집합이므로 두 $e_k$는 같은 함수이다.
:::

## 예시와 반례

:::example[$\mathbb{Z}_5^2$의 기저와 좌표]
$F = \mathbb{Z}_5$([[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3))이고 $b_1 = ([1], [2])$, $b_2 = ([0], [1])$이라 하자. $(a, c) \in \mathbb{Z}_5^2$에 대하여 $\alpha b_1 + \beta b_2 = (\alpha,\ [2]\alpha + \beta)$이므로, 이것이 $(a, c)$인 것은 정확히 $\alpha = a$이고 $\beta = c - [2]a$일 때이다. 곧 모든 $(a, c)$에 계수의 열이 하나 있고 하나뿐이므로 (1)에 의해 $b_1, b_2$는 기저이고, $(a, c)$의 좌표는 $a$, $c - [2]a$이다. 예컨대 $([3], [3])$의 좌표는 $[3]$, $[3] - [6] = [-3] = [2]$이고, 실제로
$$
\begin{aligned}
[3]b_1 + [2]b_2 &= ([3], [6]) + ([0], [2]) \\
&= ([3], [8]) \\
&= ([3], [3])
\end{aligned}
$$
이다. 같은 벡터의 표준기저에 관한 좌표는 $[3]$, $[3]$이다((4)).
:::

:::example[생성하는 열에서 기저인 부분열을 남기는 예]
$\mathbb{Z}_5^2$의 열 $w_1 = ([1], [2])$, $w_2 = ([2], [4])$, $w_3 = ([0], [1])$을 (6)의 증명대로 앞에서부터 읽는다. $w_1 \ne 0_V$이므로 빈 열에 덧붙인 $w_1$은 일차독립이다. $w_2 = [2]w_1 \in \operatorname{span}_F(w_1)$이므로 버린다. $\operatorname{span}_F(w_1) = \{(t, [2]t) : t \in \mathbb{Z}_5\}$이고 $([0], [1])$이 여기에 들려면 $t = [0]$이고 $[2]t = [1]$이어야 하므로 $w_3$은 들지 않고, 덧붙인다. 남은 부분열은 $s(1) = 1$, $s(2) = 3$으로 정한 $w_1, w_3$이고, 이것은 앞의 예시의 기저 $b_1, b_2$이다. 앞의 예시에서 $b_1, b_2$가 $\mathbb{Z}_5^2$를 생성하므로 $w_1, w_2, w_3$도 $\mathbb{Z}_5^2$를 생성한다((5)의 (iii)).
:::

:::counterexample[생성하지만 기저가 아닌 열과 일차독립이지만 기저가 아닌 열]
$\mathbb{Z}_3^2$에서 열 $e_1, e_2, e_1 + e_2$는 $e_1, e_2$를 포함하므로 $\mathbb{Z}_3^2$를 생성하지만([[span-and-independence-over-a-field|생성과 일차독립]]의 (2)의 (iv)), 계수 $[1], [1], [2]$로 $e_1 + e_2 + [2](e_1 + e_2) = [3](e_1 + e_2) = 0_V$이므로 일차종속이고 기저가 아니다. 이 열에서 좌표가 하나로 정해지지 않는다. $e_1 + e_2$는 계수 $[1], [1], [0]$으로도 $[0], [0], [1]$로도 나타난다. 거꾸로 길이 $1$인 열 $e_1$은 일차독립이지만($e_1 \ne 0_V$), 그 생성 $\{(t, [0]) : t \in \mathbb{Z}_3\}$에 $e_2$가 들지 않으므로 기저가 아니다.
:::

## 확인 질문

:::check[$\alpha \ne 0$인 스칼라 $\alpha$에 대하여, 항이 $\alpha$ 하나인 길이 $1$인 열은 $F$ 자신의 기저인가?]
그렇다. $x \in F$이면 $x = (x\alpha^{-1})\alpha$이므로 열은 $F$를 생성하고, [[span-and-independence-over-a-field|생성과 일차독립]]의 (3)의 (iii)에 의해 $\alpha \ne 0$이므로 일차독립이다. 좌표는 $x\alpha^{-1}$ 하나이다.
:::

:::check[$v_1, v_2$가 $V$의 기저이면 순서를 바꾼 열 $v_2, v_1$도 기저인가?]
그렇다. [[finite-sums-in-a-ring|환의 유한 합]]의 (1)에 의해 길이 $2$인 열의 합은 두 항의 합이고 $V$의 덧셈은 교환법칙을 만족하므로 $\alpha_1 v_2 + \alpha_2 v_1 = \alpha_2 v_1 + \alpha_1 v_2$이다. 곧 새 열의 일차결합은 계수의 순서를 바꾼 옛 열의 일차결합이다. 따라서 새 열도 $V$를 생성하고, 영벡터를 나타내는 계수는 모두 $0$이어야 하므로 일차독립이다. $x$의 좌표는 옛 좌표의 순서를 바꾼 것이다.
:::
