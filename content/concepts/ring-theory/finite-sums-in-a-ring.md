---
title: 환의 유한 합
title_en: Finite Sums in a Ring
aliases: [유한 합, 빈 합, 합의 기호, 시그마 기호, 아벨군의 유한 합, 망원 합, finite sum, empty sum, summation notation, sigma notation, telescoping sum]
kind: definition
field: ring-theory
msc: ["13", "20K99"]
level: undergrad
summary: 덧셈 표기로 쓰는 아벨군(특히 환의 덧셈군)의 원소의 열의 합을 군의 유한 곱으로 정의하고, 시작 번호와 끝 번호를 붙인 합의 기호를 정한다. 끝항과 첫 항 떼기, 쪼개기, 첨자 옮기기, 항별 계산, 망원 합, 준동형과 부분군, 환에서의 분배, 선형대수의 벡터의 유한 합과의 일치를 보인다.
requires: [set, function, finite-set, recursion-theorem, mathematical-induction, prime-number, well-ordering-principle, even-and-odd, group, group-basic-properties, number-groups, subgroup, power-in-a-group, laws-of-exponents, group-homomorphism, finite-product-in-a-group, integers-modulo-n, ring, ring-examples, vector-space, vector-space-basic-properties, real-function-space, finite-sum-of-vectors]
sources:
  - ref: judson-abstract-algebra
    loc: "17.1절 Polynomial Rings, 다항식과 곱의 계수의 식 (p.209–210), Theorem 17.3 의 증명 (p.211), Theorem 17.5 의 증명 (p.212); 2.1절 첫머리 (p.17)와 Example 2.4 (p.18–19); 2.4절 Exercises, 연습문제 1, 2, 4 (p.24); 4.1절 Example 4.5 (p.47)"
    checked: original
    note: "출처는 17.1절에서 다항식을 Σ_{i=0}^n a_i x^i 로 적고(p.209), 두 다항식의 곱의 계수를 c_i = Σ_{k=0}^i a_k b_{i−k} 로 적는다(p.210). Theorem 17.3 의 증명(p.211)과 Theorem 17.5 의 증명(p.212)은 합을 곱하고 다시 묶는 계산을 쓴다. 기호 Σ 는 2.1절 Example 2.4(p.18–19)의 이항정리에서 처음 나온다. 출처에서 합의 기호를 정의하는 문장과 합의 성질을 진술하는 명제를 찾지 못했다(줄을 이은 텍스트에서 검색어 'generalized associative' 0건, 'summation' 0건, 'finite sum' 0건, 'sigma notation' 0건, 'empty sum|empty product' 0건, 'rearrang' 6건은 모두 다른 대상(소인수의 순서 p.22, 도형의 대칭 p.31, 18장과 23장의 증명 안). 출처의 PreTeXt 원본(XML)의 기호 목록(notation)에도 Σ 가 없다). 이 항목은 출처의 표기를 군의 작용과 실로우 정리 강의의 군의 유한 곱(finite-product-in-a-group)을 덧셈군에 쓴 것으로 정하고, 성질 (1)–(10)과 증명은 이 사이트가 썼다. 출처의 합은 첨자 0 에서 시작하는 것이 많으므로 시작 번호를 정수 전체로 둔다. 예시 '두 항만 남는 합'은 자연수 항의 합의 닫힌 꼴을 구하는 것으로, 출처 2.1절 첫머리(p.17)가 1 + 2 + ⋯ + n = n(n + 1)/2 를 귀납법으로 보이는 것과 같은 종류의 물음이고, 출처 2.4절 연습문제 1, 2, 4(p.24, 1² + ⋯ + n², 1³ + ⋯ + n³, x + 4x + 7x + ⋯ + (3n − 2)x 의 닫힌 꼴)도 같은 종류의 물음이다. 반례 '0 이 아닌 항만 더해도 합이 0 일 수 있다'의 3·[2] = [0] 은 출처 4.1절 Example 4.5(p.47)의 'Z6 에서 2 의 위수는 3'과 같은 계산이다."
status: reviewed
review_note: "2026-11-27 자기 검토(docs/self-review.md)와 지휘자의 확인(이항계수 (5)(6) 과 표수 (3) 에 경계값, 2·7단원 경로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-27
---

:::statement
$A$가 [[number-groups|수로 이루어진 군]]의 덧셈 표기로 쓰는 [[group|아벨군]]이라 하자. 곧 $A$의 연산을 $a + b$로, 항등원을 $0$으로, $a$의 역원을 $-a$로 쓰고 $a - b = a + (-b)$이며, 정수배 $q \cdot a$는 [[power-in-a-group|군의 거듭제곱]]의 (4)의 것이다. [[ring|환]] $R$의 덧셈군 $(R, +)$는 이런 아벨군이므로 아래의 모든 것을 환의 원소에 쓴다. 원소의 열, 항, 처음 몇 개의 항, 이어 붙인 열, 빈 열은 [[finite-product-in-a-group|군의 유한 곱]]의 것이다.

**열의 합.** $n$이 $0$ 이상인 정수일 때 $A$의 원소의 길이 $n$인 열 $a_1, \dots, a_n$의 **합**(sum) $a_1 + a_2 + \cdots + a_n$은 군 $(A, +)$에서 이 열의 곱([[finite-product-in-a-group|군의 유한 곱]])을 덧셈 표기로 쓴 것이다. 길이가 $0$인 열의 합은 $0$이고, 이것을 **빈 합**(empty sum)이라 한다.

**합의 기호.** $m$, $n$이 $m - 1 \le n$인 정수이고, $m \le k \le n$인 정수 $k$마다 $A$의 원소 $a_k$가 $k$에 대한 식이나 이미 정해진 대상으로 하나씩 정해져 있다고 하자($n = m - 1$이면 그런 $k$가 없다). $N = n - m + 1$은 $0$ 이상인 정수이고, $1 \le j \le N$이면 $m \le m + j - 1 \le n$이므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $j$번째 항이 $a_{m+j-1}$인 길이 $N$인 열이 있다. 이 열의 합을
$$
\sum_{k=m}^{n} a_k
$$
로 쓰고, $a_k$의 $k = m$부터 $n$까지의 **유한 합**(finite sum)이라 한다. $m$을 **시작 번호**, $n$을 **끝 번호**라 한다. $n = m - 1$이면 이 합은 빈 합 $0$이다. 시작 번호는 음수여도 된다. 글자 $k$는 이 기호 안에서만 쓰는 이름(**합의 첨자**)이고, 다른 글자로 바꾸어 쓴 $\sum_{j=m}^{n} a_j$는 같은 원소이다.

다음이 성립한다. 아래에서 $m$, $n$은 $m - 1 \le n$인 정수이고, $a_k$, $b_k$는 식에 나오는 번호 $k$마다 정해진 $A$의 원소이다.

1. (짧은 합과 열의 합) $\sum_{k=m}^{m-1} a_k = 0$이고 $\sum_{k=m}^{m} a_k = a_m$이며 $\sum_{k=m}^{m+1} a_k = a_m + a_{m+1}$이다. 또 길이 $n \ge 0$인 열 $a_1, \dots, a_n$에 대하여 $\sum_{k=1}^{n} a_k = a_1 + \cdots + a_n$이다.
2. (끝항과 첫 항 떼기) $\sum_{k=m}^{n+1} a_k = \sum_{k=m}^{n} a_k + a_{n+1}$이다. $m \le n$이면 $\sum_{k=m}^{n} a_k = a_m + \sum_{k=m+1}^{n} a_k$이다.
3. (범위 안의 항에만 의존) $m \le k \le n$인 모든 정수 $k$에서 $a_k = b_k$이면 $\sum_{k=m}^{n} a_k = \sum_{k=m}^{n} b_k$이다.
4. (쪼개기) $m - 1 \le l \le n$인 정수 $l$에 대하여 $\sum_{k=m}^{n} a_k = \sum_{k=m}^{l} a_k + \sum_{k=l+1}^{n} a_k$이다.
5. (첨자 옮기기) 정수 $t$에 대하여 $\sum_{k=m}^{n} a_k = \sum_{k=m+t}^{n+t} a_{k-t}$이다. 오른쪽의 항 $a_{k-t}$는 $m + t \le k \le n + t$에서 정해진다.
6. (항별 계산)
   - (i) $\sum_{k=m}^{n} (a_k + b_k) = \sum_{k=m}^{n} a_k + \sum_{k=m}^{n} b_k$이다.
   - (ii) $\sum_{k=m}^{n} (-a_k) = -\sum_{k=m}^{n} a_k$이고 $\sum_{k=m}^{n} (a_k - b_k) = \sum_{k=m}^{n} a_k - \sum_{k=m}^{n} b_k$이다.
   - (iii) 정수 $q$에 대하여 $\sum_{k=m}^{n} (q \cdot a_k) = q \cdot \sum_{k=m}^{n} a_k$이다.
   - (iv) $c \in A$이면 모든 항이 $c$인 합은 $\sum_{k=m}^{n} c = (n - m + 1) \cdot c$이다. 특히 모든 항이 $0$인 합은 $0$이다.
   - (v) (한 항만 남는 합) $m \le l \le n$인 정수 $l$이 있어 $l$과 다른 모든 번호 $k$($m \le k \le n$)에서 $a_k = 0$이면 $\sum_{k=m}^{n} a_k = a_l$이다.
   - (vi) (망원 합) $m \le k \le n + 1$인 번호마다 $a_k$가 정해져 있으면 $\sum_{k=m}^{n} (a_{k+1} - a_k) = a_{n+1} - a_m$이다.
7. (준동형) $B$가 덧셈 표기로 쓰는 아벨군이고 $\varphi : A \to B$가 [[group-homomorphism|군 준동형]]이면 $\varphi\bigl(\sum_{k=m}^{n} a_k\bigr) = \sum_{k=m}^{n} \varphi(a_k)$이다.
8. (부분군) $H$가 $A$의 [[subgroup|부분군]]이고 $m \le k \le n$인 모든 $k$에서 $a_k \in H$이면 $\sum_{k=m}^{n} a_k \in H$이고, 이 합은 군 $H$에서 같은 항으로 만든 합과 같다.
9. (환에서의 분배) $R$이 환이고 $c \in R$이며 모든 $a_k$가 $R$의 원소이면
   $$
   \begin{aligned}
   c \sum_{k=m}^{n} a_k &= \sum_{k=m}^{n} c\,a_k, \\
   \Bigl(\sum_{k=m}^{n} a_k\Bigr) c &= \sum_{k=m}^{n} a_k\,c
   \end{aligned}
   $$
   이다. 곱은 환 $R$의 곱이다.
10. (벡터의 유한 합) $V$가 [[vector-space|벡터공간]]이면 $V$의 덧셈으로 $(V, +)$는 아벨군이고, 그 항등원은 영벡터 $0_V$, $v$의 역원은 덧셈 역원 $-v$이다. 벡터의 열 $v_1, \dots, v_n$의 [[finite-sum-of-vectors|벡터의 유한 합]] $v_1 + \cdots + v_n$은 군 $(V, +)$에서의 이 항목의 합과 같다. 특히 실수의 열의 합(벡터의 유한 합을 $\mathbb{R}$에 쓴 것)은 덧셈군 $(\mathbb{R}, +)$에서의 이 항목의 합과 같다.
:::

:::english
Let $A$ be an abelian group written in the additive notation of the entry on groups of numbers: the operation is $a + b$, the identity is $0$, the inverse of $a$ is $-a$, $a - b = a + (-b)$, and integer multiples $q \cdot a$ are those of (4) of the entry on powers in a group. The additive group $(R, +)$ of a ring $R$ is such an abelian group, so everything below applies to elements of rings. Sequences of elements, terms, first terms, concatenations and the empty sequence are as in the entry on finite products in a group.

**Sum of a sequence.** For an integer $n \ge 0$, the **sum** $a_1 + a_2 + \cdots + a_n$ of a sequence $a_1, \dots, a_n$ of elements of $A$ of length $n$ is the product of this sequence in the group $(A, +)$ (finite product in a group), written additively. The sum of the sequence of length $0$ is $0$ and is called the **empty sum**.

**Summation notation.** Let $m$, $n$ be integers with $m - 1 \le n$, and suppose that for each integer $k$ with $m \le k \le n$ an element $a_k$ of $A$ is given by an expression in $k$ or by an already determined object (if $n = m - 1$ there is no such $k$). Then $N = n - m + 1$ is an integer $\ge 0$, and since $m \le m + j - 1 \le n$ for $1 \le j \le N$, by (1) of the recursion theorem there is a sequence of length $N$ whose $j$th term is $a_{m+j-1}$. Its sum is written
$$
\sum_{k=m}^{n} a_k
$$
and called the **finite sum** of $a_k$ from $k = m$ to $n$; $m$ is the **lower index** and $n$ the **upper index**. If $n = m - 1$ this sum is the empty sum $0$. The lower index may be negative. The letter $k$ is a name used only inside the symbol (the **summation index**), and $\sum_{j=m}^{n} a_j$, written with another letter, is the same element.

The following hold, where $m$, $n$ are integers with $m - 1 \le n$, and $a_k$, $b_k$ are elements of $A$ given for each index $k$ occurring in the formula.

1. (Short sums and sums of sequences) $\sum_{k=m}^{m-1} a_k = 0$, $\sum_{k=m}^{m} a_k = a_m$, and $\sum_{k=m}^{m+1} a_k = a_m + a_{m+1}$. Also, for a sequence $a_1, \dots, a_n$ of length $n \ge 0$, $\sum_{k=1}^{n} a_k = a_1 + \cdots + a_n$.
2. (Splitting off the last and the first term) $\sum_{k=m}^{n+1} a_k = \sum_{k=m}^{n} a_k + a_{n+1}$. If $m \le n$, then $\sum_{k=m}^{n} a_k = a_m + \sum_{k=m+1}^{n} a_k$.
3. (Dependence only on the terms in the range) If $a_k = b_k$ for every integer $k$ with $m \le k \le n$, then $\sum_{k=m}^{n} a_k = \sum_{k=m}^{n} b_k$.
4. (Splitting) For an integer $l$ with $m - 1 \le l \le n$, $\sum_{k=m}^{n} a_k = \sum_{k=m}^{l} a_k + \sum_{k=l+1}^{n} a_k$.
5. (Shifting the index) For an integer $t$, $\sum_{k=m}^{n} a_k = \sum_{k=m+t}^{n+t} a_{k-t}$; the terms $a_{k-t}$ on the right are given for $m + t \le k \le n + t$.
6. (Termwise computations)
   - (i) $\sum_{k=m}^{n} (a_k + b_k) = \sum_{k=m}^{n} a_k + \sum_{k=m}^{n} b_k$.
   - (ii) $\sum_{k=m}^{n} (-a_k) = -\sum_{k=m}^{n} a_k$ and $\sum_{k=m}^{n} (a_k - b_k) = \sum_{k=m}^{n} a_k - \sum_{k=m}^{n} b_k$.
   - (iii) For an integer $q$, $\sum_{k=m}^{n} (q \cdot a_k) = q \cdot \sum_{k=m}^{n} a_k$.
   - (iv) If $c \in A$, the sum all of whose terms are $c$ is $\sum_{k=m}^{n} c = (n - m + 1) \cdot c$. In particular a sum all of whose terms are $0$ is $0$.
   - (v) (A sum with one surviving term) If there is an integer $l$ with $m \le l \le n$ such that $a_k = 0$ for every index $k$ ($m \le k \le n$) different from $l$, then $\sum_{k=m}^{n} a_k = a_l$.
   - (vi) (Telescoping sum) If $a_k$ is given for every index $m \le k \le n + 1$, then $\sum_{k=m}^{n} (a_{k+1} - a_k) = a_{n+1} - a_m$.
7. (Homomorphisms) If $B$ is an abelian group written additively and $\varphi : A \to B$ is a group homomorphism, then $\varphi\bigl(\sum_{k=m}^{n} a_k\bigr) = \sum_{k=m}^{n} \varphi(a_k)$.
8. (Subgroups) If $H$ is a subgroup of $A$ and $a_k \in H$ for every $k$ with $m \le k \le n$, then $\sum_{k=m}^{n} a_k \in H$, and this sum equals the sum formed from the same terms in the group $H$.
9. (Distributivity in a ring) If $R$ is a ring, $c \in R$ and all $a_k$ are elements of $R$, then
   $$
   \begin{aligned}
   c \sum_{k=m}^{n} a_k &= \sum_{k=m}^{n} c\,a_k, \\
   \Bigl(\sum_{k=m}^{n} a_k\Bigr) c &= \sum_{k=m}^{n} a_k\,c,
   \end{aligned}
   $$
   where the products are those of the ring $R$.
10. (Finite sums of vectors) If $V$ is a vector space, then $(V, +)$ is an abelian group under the addition of $V$, with identity the zero vector $0_V$ and with $-v$, the additive inverse, as the inverse of $v$. For a sequence of vectors $v_1, \dots, v_n$, the finite sum of vectors $v_1 + \cdots + v_n$ equals the sum of this entry in the group $(V, +)$. In particular the sum of a sequence of real numbers (the finite sum of vectors applied to $\mathbb{R}$) equals the sum of this entry in the additive group $(\mathbb{R}, +)$.
:::

## 직관

줄임표로 적은 $a_m + a_{m+1} + \cdots + a_n$은 "가운데를 알아서 채우라"는 말이어서 증명의 근거가 되지 못합니다. 이 항목은 군의 작용과 실로우 정리 강의에서 군의 원소 여러 개의 곱을 재귀로 정해 둔 것을 덧셈군에 그대로 씁니다. 덧셈은 교환되므로, 곱에서는 지켜야 했던 항의 순서를 합에서는 (6)처럼 항끼리 섞어 계산할 수 있습니다.

합의 기호는 "번호 $m$부터 $n$까지 차례로 더한다"를 적는 방법입니다. 계산대에서 물건값을 하나씩 찍어 누적하는 것에 비유할 수 있습니다. 누적 합에 다음 값을 더하는 것이 (2)의 끝항 떼기이고, 찍을 물건이 없으면 합계가 $0$인 것이 빈 합입니다. 비유가 맞지 않는 곳은 번호입니다. 계산대는 첫 물건부터 세지만 이 항목의 시작 번호 $m$은 $0$이나 음수여도 되고, 번호를 모두 $t$만큼 옮겨 적어도 같은 합인 것이 (5)입니다.

빈 합을 $0$으로 정해 두면 (2)와 (4)가 경계에서도 그대로 성립합니다. 예컨대 (4)에서 $l = m - 1$이면 앞쪽 합이 빈 합이 되어 $0 + \sum_{k=m}^{n} a_k$이고, (6)의 (vi)에서 $n = m - 1$이면 양쪽이 모두 $0$입니다.

## 증명

:::idea
합의 기호는 군의 유한 곱을 덧셈군에서 계산한 것이므로, (1)–(4)와 (7), (8)은 군의 유한 곱의 성질을 옮긴 것이다. 나머지는 끝 번호에 대한 귀납법과 (7)이다.
:::

:::hint
$\sum_{k=m}^{n} a_k$를 만드는 열과 $\sum_{k=m}^{n+1} a_k$를 만드는 열의 처음 $n - m + 1$개를 비교해 보라.
:::

:::hint
(6)의 (iii)과 (9)는 "정수배를 하는 함수"와 "$c$를 왼쪽에 곱하는 함수"가 덧셈군의 준동형이라는 데서 나온다.
:::

:::proof
**쓰는 사실.** [[finite-product-in-a-group|군의 유한 곱]]을 군 $(A, +)$에 쓰고 덧셈 표기로 읽는다. 곧 그 항목의 곱 $a_1 \cdots a_n$은 합 $a_1 + \cdots + a_n$, 항등원 $e$는 $0$, $g^n$은 $n \cdot g$이다(덧셈 표기의 읽기는 [[group-homomorphism|군 준동형]]의 (6)과 같은 규칙이다). 귀납법은 [[mathematical-induction|수학적 귀납법]](시작점이 정수 $m$인 꼴)이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7), (L1)–(L3)을 쓰고, 정수끼리의 계산(예: $(m + j - 1) + 1 = m + j$)은 그 진술에서 받아들인 계산 법칙이며, 정수끼리의 합과 차가 정수라는 것은 [[even-and-odd]]에서 받아들인 사실이다. 아벨군의 계산은 [[group|군]]의 결합법칙, 항등원과 역원의 성질, 교환법칙을 쓴다.

**정의에 대하여.** $m - 1 \le n$이면 (Z7)에 의해 $0 \le n - m + 1$이다. $1 \le j \le N$이면 (Z7)에 의해 $m \le m + j - 1$이고 $m + j - 1 \le m + N - 1 = n$이다. 따라서 $a_{m+j-1}$은 정해진 원소이고, 열은 [[recursion-theorem|재귀 정리]]의 (1)에 의해 함수 $\{1, \dots, N\} \to A$로 정해진다. 아래에서 이 열을 "$\sum_{k=m}^{n} a_k$의 열"이라 부른다.

**1의 증명.** $\sum_{k=m}^{m-1} a_k$의 열은 길이가 $0$이므로 합은 빈 합 $0$이다. $\sum_{k=m}^{m} a_k$의 열은 길이 $1$이고 첫째 항이 $a_m$이므로, 군의 유한 곱의 (1)에 의해 합은 $a_m$이다. $\sum_{k=m}^{m+1} a_k$의 열은 길이 $2$이고 항이 차례로 $a_m$, $a_{m+1}$이므로, 같은 (1)에 의해 합은 $a_m + a_{m+1}$이다. 열 $a_1, \dots, a_n$에 대하여 $\sum_{k=1}^{n} a_k$의 열의 $j$번째 항은 $a_{1+j-1} = a_j$이므로 이 열은 $a$ 자신이다([[function|함수]]의 같음).

**2의 증명.** $N = n - m + 1$이라 하자. $\sum_{k=m}^{n+1} a_k$의 열은 길이 $N + 1$이고, 그 처음 $N$개의 $j$번째 항은 $a_{m+j-1}$이어서 $\sum_{k=m}^{n} a_k$의 열과 같다. $N + 1$번째 항은 $a_{m+N} = a_{n+1}$이다. 따라서 군의 유한 곱의 (2)에 의해 첫 등식이 성립한다.

$m \le n$이면 $N \ge 1$이다. $\sum_{k=m}^{n} a_k$의 열을 $c$라 하면, 군의 유한 곱의 (4)에서 $c$의 맨 앞을 뗀 열은 $j$번째 항이 $c_{j+1} = a_{m+j}$인 길이 $N - 1$인 열이다. 이것은 $\sum_{k=m+1}^{n} a_k$의 열(길이 $n - (m + 1) + 1 = N - 1$, $j$번째 항 $a_{(m+1)+j-1} = a_{m+j}$)과 같다. 따라서 군의 유한 곱의 (4)에 의해 $\sum_{k=m}^{n} a_k = c_1 + (c_2 + \cdots + c_N) = a_m + \sum_{k=m+1}^{n} a_k$이다.

**3의 증명.** 두 합의 열은 길이가 같고 모든 $j$에서 $j$번째 항이 $a_{m+j-1} = b_{m+j-1}$이므로 같은 열이다. 따라서 합이 같다.

**4의 증명.** $L = l - m + 1$, $N = n - m + 1$이라 하면 (Z7)에 의해 $0 \le L \le N$이고 $N - L = n - l$이다. $\sum_{k=m}^{n} a_k$의 열 $c$에서, $1 \le j \le L$이면 $c_j = a_{m+j-1}$은 $\sum_{k=m}^{l} a_k$의 열의 $j$번째 항이고, $1 \le j' \le N - L$이면 $c_{L+j'} = a_{m+L+j'-1} = a_{l+j'}$은 $\sum_{k=l+1}^{n} a_k$의 열의 $j'$번째 항 $a_{(l+1)+j'-1}$이다. 곧 $c$는 두 열을 이어 붙인 열이므로, 군의 유한 곱의 (3)(일반 결합법칙)에 의해 (4)가 성립한다.

**5의 증명.** $m + t \le k \le n + t$이면 (Z7)에 의해 $m \le k - t \le n$이므로 $a_{k-t}$가 정해진다. 오른쪽 합의 열은 길이가 $(n + t) - (m + t) + 1 = N$이고 $j$번째 항이 $a_{(m+t+j-1)-t} = a_{m+j-1}$이므로 왼쪽 합의 열과 같다.

**6의 (i)의 증명.** 끝 번호 $n$에 대하여 시작점이 $m - 1$인 귀납법을 쓴다. $n = m - 1$이면 세 합이 모두 빈 합이고 $0 = 0 + 0$이다. $n$에서 성립하고 $a_k$, $b_k$가 $m \le k \le n + 1$에서 정해졌다고 하자. (2), 귀납 가정, 아벨군의 결합법칙과 교환법칙에 의해
$$
\begin{aligned}
&\sum_{k=m}^{n+1} (a_k + b_k) \\
&\quad = \sum_{k=m}^{n} (a_k + b_k) \\
&\qquad + (a_{n+1} + b_{n+1}) \\
&\quad = \Bigl(\sum_{k=m}^{n} a_k + \sum_{k=m}^{n} b_k\Bigr) \\
&\qquad + (a_{n+1} + b_{n+1}) \\
&\quad = \Bigl(\sum_{k=m}^{n} a_k + a_{n+1}\Bigr) \\
&\qquad + \Bigl(\sum_{k=m}^{n} b_k + b_{n+1}\Bigr) \\
&\quad = \sum_{k=m}^{n+1} a_k + \sum_{k=m}^{n+1} b_k
\end{aligned}
$$
이다.

**7의 증명.** $\sum_{k=m}^{n} a_k$의 열을 $c$라 하면, 군의 유한 곱의 (7)에 의해 $\varphi(c_1 + \cdots + c_N)$은 $j$번째 항이 $\varphi(c_j) = \varphi(a_{m+j-1})$인 열의 합이다. 이 열은 $\sum_{k=m}^{n} \varphi(a_k)$의 열이다.

**6의 (iii)과 (ii)의 증명.** 정수 $q$에 대하여 각 $x \in A$에 $q \cdot x$를 대응시키는 함수 $A \to A$는 [[laws-of-exponents|지수법칙]]의 (6)의 $q \cdot (x + y) = q \cdot x + q \cdot y$에 의해 군 준동형이다. (7)을 이 함수에 쓰면 (iii)이다. [[power-in-a-group|군의 거듭제곱]]의 (4)에 의해 $(-1) \cdot x = 1 \cdot (-x) = -x$이므로, (iii)을 $q = -1$에 쓰면 (ii)의 첫 등식이다. 둘째 등식은 $a_k - b_k = a_k + (-b_k)$이므로 (i)과 첫 등식에서 나온다.

**6의 (iv)의 증명.** $\sum_{k=m}^{n} c$의 열은 길이 $N = n - m + 1$이고 모든 항이 $c$이므로, 군의 유한 곱의 (6)에 의해 합은 $N \cdot c$이다. $c = 0$이면 군의 거듭제곱의 (3)에 의해 $N \cdot 0 = 0$이다.

**6의 (v)의 증명.** (4)를 $l - 1$에서 쓰고($m - 1 \le l - 1 \le n$), (2)의 둘째 등식을 $\sum_{k=l}^{n} a_k$에 쓰면($l \le n$)
$$
\sum_{k=m}^{n} a_k = \sum_{k=m}^{l-1} a_k + \Bigl(a_l + \sum_{k=l+1}^{n} a_k\Bigr)
$$
이다. $m \le k \le l - 1$이거나 $l + 1 \le k \le n$인 $k$는 $l$과 다르므로((L3), (L1)) $a_k = 0$이고, (3)과 (iv)에 의해 두 합은 모두 $0$이다. 따라서 합은 $0 + (a_l + 0) = a_l$이다.

**6의 (vi)의 증명.** 끝 번호 $n$에 대하여 시작점이 $m - 1$인 귀납법을 쓴다. $n = m - 1$이면 왼쪽은 빈 합 $0$이고 오른쪽은 $a_m - a_m = 0$이다. $n$에서 성립하고 $a_k$가 $m \le k \le n + 2$에서 정해졌다고 하자. (2)와 귀납 가정에 의해 왼쪽은 $(a_{n+1} - a_m) + (a_{n+2} - a_{n+1})$이고, 아벨군의 교환법칙과 결합법칙, $-a_{n+1} + a_{n+1} = 0$에 의해 이것은 $a_{n+2} - a_m$이다.

**8의 증명.** 군의 유한 곱의 (9)를 $\sum_{k=m}^{n} a_k$의 열에 쓴 것이다.

**9의 증명.** 각 $x \in R$에 $cx$를 대응시키는 함수 $R \to R$는 [[ring|환]]의 분배법칙 $c(x + y) = cx + cy$에 의해 덧셈군 $(R, +)$에서 $(R, +)$로의 군 준동형이다. (7)을 이 함수에 쓰면 첫 등식이다. 각 $x$에 $xc$를 대응시키는 함수도 분배법칙 $(x + y)c = xc + yc$에 의해 군 준동형이고, (7)에 의해 둘째 등식이 성립한다.

**10의 증명.** [[vector-space|벡터공간]]의 (V2)는 결합법칙, (V1)은 교환법칙이다. [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B1)의 $0_V$는 모든 $v$에서 $v + 0_V = v$이고 (V1)에 의해 $0_V + v = v$이므로 항등원이다. (B2)의 $-v$는 $v + (-v) = 0_V$이고 (V1)에 의해 $(-v) + v = 0_V$이므로 $v$의 역원이다. 따라서 $(V, +)$는 아벨군이다. 길이 $n$에 대한 귀납법(시작점 $0$)으로 두 합이 같음을 보인다. $n = 0$이면 [[finite-sum-of-vectors|벡터의 유한 합]]의 정의에 의해 빈 열의 합은 $0_V$이고, 이 항목의 빈 합도 군 $(V, +)$의 항등원 $0_V$이다. 길이 $n$의 모든 열에서 같다고 하자. 길이 $n + 1$인 열에 대하여 벡터의 유한 합의 정의는 $v_1 + \cdots + v_{n+1} = (v_1 + \cdots + v_n) + v_{n+1}$(오른쪽 괄호는 처음 $n$개의 합)이고, 이 항목의 합도 군의 유한 곱의 (2)에 의해 같은 식을 만족한다. 귀납 가정에 의해 처음 $n$개의 두 합이 같으므로 두 합이 같다. [[real-function-space|함수의 공간]]의 (2)에 의해 $\mathbb{R}$은 실수의 합을 덧셈으로 하는 벡터공간이고, 이때의 군 $(\mathbb{R}, +)$는 [[number-groups|수로 이루어진 군]]의 (2)의 군과 집합과 연산이 같으므로 마지막 문장이 성립한다.
:::

## 예시와 반례

:::example[법 7의 정수에서 번호를 모두 더한 합]
[[ring-examples|환의 예]]의 (3)의 환 $\mathbb{Z}_7$에서 $\sum_{k=1}^{6} [k]$를 (2)의 첫 등식을 되풀이해 계산합니다. [[integers-modulo-n|법 n의 정수]]의 덧셈은 $[a] + [b] = [a + b]$입니다. 누적 합은 차례로 $[1]$, $[1] + [2] = [3]$, $[3] + [3] = [6]$, $[6] + [4] = [10] = [3]$, $[3] + [5] = [8] = [1]$, $[1] + [6] = [7] = [0]$이므로 합은 $[0]$입니다.

(5)를 $t = -1$로 쓰면 같은 합을 $\sum_{k=0}^{5} [k + 1]$로도 적을 수 있습니다. 시작 번호가 $0$인 합도 같은 기호로 다룹니다.
:::

:::example[두 항만 남는 합]
환 $\mathbb{Z}$에서 정수 $k$마다 $a_k = k \cdot k$(정수의 곱)라 하면 $a_{k+1} - a_k = (k + 1)(k + 1) - k \cdot k = 2k + 1$입니다. 자연수 $n$에 대하여 (3)과 (6)의 (vi)에 의해
$$
\begin{aligned}
\sum_{k=1}^{n} (2k + 1) &= \sum_{k=1}^{n} (a_{k+1} - a_k) \\
&= (n + 1)(n + 1) - 1
\end{aligned}
$$
입니다. $n = 3$이면 왼쪽은 $3 + 5 + 7 = 15$이고 오른쪽은 $16 - 1 = 15$입니다.
:::

:::counterexample[0 이 아닌 항만 더해도 합이 0 일 수 있다]
환 $\mathbb{Z}_6$에서 모든 항이 $[2]$인 합 $\sum_{k=1}^{3} [2]$를 생각합니다. 항은 모두 $[0]$이 아니지만 (6)의 (iv)와 [[power-in-a-group|군의 거듭제곱]]의 (7)에 의해 합은 $3 \cdot [2] = [6] = [0]$입니다. 정수에서는 양수만 더하면 합이 $0$이 되지 않지만, 덧셈군에 따라서는 그렇지 않습니다.
:::

## 확인 질문

:::check[$\sum_{k=4}^{3} a_k$는 정의되는가? 정의되면 그 값은?]
정의됩니다. 시작 번호 $4$와 끝 번호 $3$이 $4 - 1 \le 3$을 만족하고, 열의 길이가 $3 - 4 + 1 = 0$이므로 빈 합 $0$입니다((1)). 항 $a_k$가 정해져야 하는 번호는 하나도 없습니다.
:::

:::check[환 $\mathbb{Z}$에서 $\sum_{k=-2}^{2} k$는 무엇인가?]
$0$입니다. (2)의 첫 등식을 되풀이하면 누적 합이 차례로 $-2$, $-3$, $-3$, $-2$, $0$입니다. 시작 번호가 음수여도 정의에 문제가 없습니다.
:::
