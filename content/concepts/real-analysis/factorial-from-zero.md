---
title: 0부터의 계승
title_en: Factorials from Zero
aliases: [0의 계승, 0 팩토리얼, 영 팩토리얼, 0! = 1, factorial of zero, zero factorial]
kind: definition
field: real-analysis
msc: ["05A10"]
level: undergrad
summary: 0 이상인 정수 n 에 대하여 n! 을, n ≥ 1 이면 정수론 입문의 계승으로, n = 0 이면 0! = 1 로 정한다. 모든 n ≥ 0 에서 (n + 1)! = n!·(n + 1) 이고, 이 점화식이 n! 을 정하며, n! 은 1 이상인 자연수이고 n 에 대해 단조증가이다. 이웃한 계승의 몫도 진술한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, mathematical-induction, recursion-theorem, factorial, real-number-arithmetic, order-properties-of-reals]
sources:
  - ref: hammack-book-of-proof
    loc: 3.4절 Factorials and Permutations, Definition 3.1 (p.78), 그 뒤의 표와 식 (3.1) (p.79)
    checked: original
    note: "Hammack 의 Definition 3.1(p.78)은 음이 아닌 정수 n 에 대해 n! 을 n 개의 기호로 만들 수 있는 중복 없는 길이 n 인 목록의 개수로 정하고 'Thus 0! = 1 and 1! = 1' 이라고 적는다. p.79 는 표로 0! = 1 부터 6! = 720 까지 적고, 식 (3.1) n! = n·(n − 1)! 에 n = 1 을 넣으면 1! = 1·0! 이므로 0! 을 0 으로 두면 1! = 0 이 되어 틀린다고 적는다. 이 항목은 목록을 세는 정의를 쓰지 않고, n ≥ 1 에서는 정수론 입문의 계승(유한 곱)을 그대로 쓰고 0! = 1 만 덧붙여 정의한다. (1)의 점화식은 식 (3.1)과 같은 내용이다(이 항목은 n ≥ 0 에서 (n + 1)! = n!·(n + 1) 로 적는다). 반례 '0! 을 0 으로 두면 깨지는 점화식'은 p.79 의 위 논법과 같은 발상이다. 예시 '0! 부터 5! 까지'의 값은 p.79 의 표와 같다. 확인 질문 '0 이상인 정수 n에서 (n + 2)! · (n!)^{-1}은 무엇인가? n = 0에서 확인하라.'는 3.4절 p.82–83 의 식 P(n, k) = n!/(n − k)! 에 n + 2 와 k = 2 를 넣은 것과 같은 계산이고, 확인 질문 'n! = 1인 0 이상의 정수 n은 무엇인가?'의 두 값은 p.79 의 표에서 0! = 1! = 1 로 보인다."
  - ref: lebl-basic-analysis
    loc: 0.3절 Example 0.3.7 (p.13), 2.6.5절 Example 2.6.7 (p.106), 4.3.1절 Definition 4.3.1 (p.171)
    checked: original
    note: "Lebl 은 Example 0.3.7(p.13)에서 자연수 n 에 대해 'recall n! = 1 · 2 · 3 · · · n' 이라고만 적고 계승을 따로 정의하지 않는다(검색어 'factorial', '0!', 'n! =' 으로 책 전체를 찾은 범위에서 정의는 없다). Example 2.6.7(p.106)의 Σ_{n=0}^∞ (1/n!) xⁿ 과 Definition 4.3.1(p.171)의 테일러 다항식 Σ_{k=0}^n f^{(k)}(x₀)/k! (x − x₀)^k 은 n = 0, k = 0 인 항에 0! 이 들어가고, Definition 4.3.1 은 그 항을 f(x₀) 으로 풀어 적어 0! = 1 을 말없이 쓴다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(정의가 둘이 되지 않는지 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
자연수 $n$의 계승 $n!$은 [[factorial]]의 것이다. 그 항목의 (2)에 의해 그것은 양의 정수이고, [[real-number-arithmetic]]의 (K7)에 의해 정수는 실수이며 정수끼리의 곱은 정수로서 계산하든 실수로서 계산하든 같다. 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]).

**0부터의 계승.** $0$ 이상인 정수 $n$에 대하여 실수 $n!$을 다음과 같이 정한다.

- $n \ge 1$이면 $n!$은 [[factorial]]의 계승 $n!$이다. 곧 $n \ge 1$에서 이 항목의 $n!$은 정수론 입문의 $n!$과 같은 수이다.
- $n = 0$이면 $0! = 1$이다.

$n!$을 $n$의 **계승**(factorial)이라 한다. [[recursion-theorem|재귀 정리]]의 (1)에 의해 $n$에서의 값이 $n!$인 함수 $\{n \in \mathbb{Z} : 0 \le n\} \to \mathbb{R}$가 있다. 음의 정수의 계승은 정의하지 않는다.

다음이 성립한다. 아래에서 $n$, $k$는 $0$ 이상인 정수이다.

1. (점화식) $0! = 1$이고 $1! = 1$이다. $0$ 이상인 모든 정수 $n$에서 $(n + 1)! = n! \cdot (n + 1)$이다.
2. (점화식으로 알아보기) $0$ 이상인 정수 전체의 집합에서 $\mathbb{R}$로의 함수 $q$가 $q(0) = 1$이고 $0$ 이상인 모든 정수 $k$에서 $q(k + 1) = q(k) \cdot (k + 1)$을 만족하면, $0$ 이상인 모든 정수 $k$에서 $q(k) = k!$이다.
3. (부호와 크기) $n!$은 자연수이다. 따라서 $1 \le n!$이고 $0 < n!$이며, 특히 $n! \ne 0$이다. 또 $n! \le (n + 1)!$이다. 따라서 $n \le k$이면 $n! \le k!$이다.
4. (이웃한 계승의 몫)
   $$
   \begin{gathered}
   (n + 1)! \cdot (n!)^{-1} = n + 1, \\
   \bigl((n + 1)!\bigr)^{-1} = (n!)^{-1} (n + 1)^{-1}, \\
   (n + 1) \bigl((n + 1)!\bigr)^{-1} = (n!)^{-1}
   \end{gathered}
   $$
   이다.
:::

:::english
The factorial $n!$ of a natural number $n$ is that of the entry on factorials. By item (2) of that entry it is a positive integer; by (K7) of the entry on real arithmetic, integers are real numbers and a product of integers is the same whether computed as integers or as real numbers. Natural numbers are positive integers.

**Factorials from zero.** For an integer $n \ge 0$, define the real number $n!$ as follows.

- If $n \ge 1$, $n!$ is the factorial $n!$ of the entry on factorials. That is, for $n \ge 1$ the $n!$ of this entry is the same number as the $n!$ of Elementary Number Theory.
- If $n = 0$, $0! = 1$.

$n!$ is called the **factorial** of $n$. By item (1) of the recursion theorem there is a function $\{n \in \mathbb{Z} : 0 \le n\} \to \mathbb{R}$ whose value at $n$ is $n!$. Factorials of negative integers are not defined.

The following hold. Below, $n$ and $k$ are integers $\ge 0$.

1. (Recurrence) $0! = 1$ and $1! = 1$. For every integer $n \ge 0$, $(n + 1)! = n! \cdot (n + 1)$.
2. (Recognizing by the recurrence) If a function $q$ from the set of integers $\ge 0$ to $\mathbb{R}$ satisfies $q(0) = 1$ and $q(k + 1) = q(k) \cdot (k + 1)$ for every integer $k \ge 0$, then $q(k) = k!$ for every integer $k \ge 0$.
3. (Sign and size) $n!$ is a natural number. Hence $1 \le n!$ and $0 < n!$; in particular $n! \ne 0$. Moreover $n! \le (n + 1)!$. Hence if $n \le k$, then $n! \le k!$.
4. (Quotients of neighbouring factorials)
   $$
   \begin{gathered}
   (n + 1)! \cdot (n!)^{-1} = n + 1, \\
   \bigl((n + 1)!\bigr)^{-1} = (n!)^{-1} (n + 1)^{-1}, \\
   (n + 1) \bigl((n + 1)!\bigr)^{-1} = (n!)^{-1}
   \end{gathered}
   $$
:::

## 직관

정수론 입문의 [[factorial|계승]]은 $1$부터 $n$까지를 곱한 수이고, 곱할 수가 하나도 없는 $0!$은 정의하지 않았습니다. 그런데 $n$에서의 값이 $x^n (n!)^{-1}$인 식처럼 번호를 $0$부터 붙이는 식에서는 $n = 0$인 자리에 $0!$이 필요합니다. 이 항목은 $0! = 1$로 정해 그 자리를 채웁니다. $1$ 이상에서는 정수론 입문의 계승을 그대로 쓰므로 같은 기호에 두 정의가 생기지 않습니다.

왜 $1$인지는 점화식이 알려 줍니다. 계단을 한 칸 오를 때마다 새 수를 곱한다고 해 봅시다. $n$칸째의 값 $n!$에 $n + 1$을 곱하면 $n + 1$칸째의 값이 됩니다. 이 규칙을 $0$칸째에서 $1$칸째로 가는 걸음에도 그대로 쓰려면 $1! = 0! \cdot 1$이어야 하고, $1! = 1$이므로 $0! = 1$일 수밖에 없습니다. (1)이 이 규칙이고, (2)는 거꾸로 이 규칙과 출발값 $1$만으로 계승이 하나로 정해진다는 것입니다. 비유가 맞지 않는 곳은 "$0$칸째"에 실제로 곱한 수가 있는 것은 아니라는 점입니다. $0! = 1$은 계산의 결과가 아니라 정의입니다.

(3)과 (4)는 $x^n (n!)^{-1}$ 같은 항을 다룰 때 쓰는 계산입니다. $n!$이 $0$이 아니어서 역수를 쓸 수 있고, 이웃한 두 항의 비는 $(n + 1)^{-1}$처럼 간단해집니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (4)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다루고, 순서 성질 (10)에 의해 정수 사이의 부등식은 실수의 부등식으로 읽어도 된다. 정수의 합과 곱은 정수이다([[even-and-odd]]).

**진술의 확인.** $0$ 이상인 정수 $n$은 (Z5)에 의해 $n = 0$이거나 $0 < n$이고, $0 < n$이면 (Z1)에 의해 $1 \le n$이므로 $n$은 자연수이다. 두 경우는 함께 성립하지 않으므로 각 $n$에 $n!$이 정확히 하나 정해진다. 따라서 재귀 정리의 (1)에 의해 진술의 함수가 있다.

**1의 증명.** $0! = 1$은 정의이고, [[factorial]]의 (1)에 의해 $1! = 1$이다. $n \ge 1$이면 같은 (1)에 의해 정수로서 $(n + 1)! = n! \cdot (n + 1)$이고, (K7)에 의해 이것은 실수의 곱으로서도 같은 등식이다. $n = 0$이면 $(0 + 1)! = 1! = 1$이고 $0! \cdot (0 + 1) = 1 \cdot 1 = 1$이다((K4)). 따라서 $0$ 이상인 모든 $n$에서 점화식이 성립한다.

**2의 증명.** $0$ 이상인 정수 $k$에 대한 명제 "$q(k) = k!$"을 시작점이 $0$인 [[mathematical-induction|수학적 귀납법]]으로 보인다. 기초 단계: $q(0) = 1 = 0!$이다. 귀납 단계: $k \ge 0$이고 $q(k) = k!$이면, 가정과 (1)에 의해 $q(k + 1) = q(k) \cdot (k + 1) = k! \cdot (k + 1) = (k + 1)!$이다.

**3의 증명.** $n = 0$이면 $0! = 1$은 자연수이다. $n \ge 1$이면 [[factorial]]의 (2)에 의해 $n!$은 양의 정수, 곧 자연수이다. 자연수는 (Z1)에 의해 $1 \le n!$이고, 순서 성질 (10)과 (5)의 (ii), (1)의 (v)에 의해 $0 < 1 \le n!$에서 $0 < n!$이며, 순서 성질 (1)의 (i)에 의해 $n! \ne 0$이다.

$0 \le n$이므로 (Z7)에 의해 $1 \le n + 1$이다. $0 \le n!$이므로 순서 성질 (4)의 (iii)을 $c = n!$, $1 \le n + 1$에 쓰면 $1 \cdot n! \le (n + 1) \cdot n!$이고, (K1), (K4)와 (1)에 의해 $n! \le n! \cdot (n + 1) = (n + 1)!$이다. $n \le k$이면 $k$에 대한 귀납법(시작점 $n$)으로 $n! \le k!$을 얻는다. 기초 단계는 $n! \le n!$(순서 성질 (1)의 (iv))이고, $n! \le k!$이면 방금 보인 것과 순서 성질 (1)의 (v)에 의해 $n! \le k! \le (k + 1)!$이다.

**4의 증명.** (3)에 의해 $n! \ne 0$이고 $(n + 1)! \ne 0$이며, $n + 1 \ge 1$이므로 순서 성질 (10)과 (5)의 (ii)에 의해 $0 < n + 1$이고 $n + 1 \ne 0$이다. 따라서 세 역수가 모두 정해진다. (1)과 (K1), (K2), (K8)의 (iii), (K4)에 의해
$$
\begin{aligned}
&(n + 1)! \cdot (n!)^{-1} \\
&\quad = \bigl(n! \cdot (n + 1)\bigr)(n!)^{-1} \\
&\quad = (n + 1)\bigl(n! \cdot (n!)^{-1}\bigr) \\
&\quad = (n + 1) \cdot 1 = n + 1
\end{aligned}
$$
이다. (K12)의 (vi)에 의해 $\bigl((n + 1)!\bigr)^{-1} = \bigl(n! \cdot (n + 1)\bigr)^{-1} = (n!)^{-1} (n + 1)^{-1}$이다. 이것에 $n + 1$을 곱하면 (K1), (K2), (K8)의 (iii), (K4)에 의해 $(n + 1)\bigl((n + 1)!\bigr)^{-1} = (n!)^{-1}\bigl((n + 1)(n + 1)^{-1}\bigr) = (n!)^{-1}$이다. $\blacksquare$
:::

## 예시와 반례

:::example[0! 부터 5! 까지]
(1)을 차례로 쓰면 $0! = 1$, $1! = 0! \cdot 1 = 1$, $2! = 1! \cdot 2 = 2$, $3! = 2! \cdot 3 = 6$, $4! = 6 \cdot 4 = 24$, $5! = 24 \cdot 5 = 120$입니다. $0!$과 $1!$은 같고 그 뒤로는 커집니다. (3)의 $n! \le (n + 1)!$은 $n = 0$에서 등호입니다. (4)를 $n = 4$에 쓰면 $(5!)^{-1} = (4!)^{-1} \cdot 5^{-1} = 24^{-1} \cdot 5^{-1} = 120^{-1}$이고, $n = 0$에 쓰면 $1 \cdot (1!)^{-1} = 1 = (0!)^{-1}$입니다.
:::

:::counterexample[0! 을 0 으로 두면 깨지는 점화식]
$0!$을 $1$이 아니라 $0$으로 두었다고 해 봅시다. 그러면 점화식 $(n + 1)! = n! \cdot (n + 1)$은 $n = 0$에서 $1! = 0 \cdot 1 = 0$을 요구하는데, 정수론 입문의 계승으로 $1! = 1$이므로 등식이 깨집니다. 같은 이유로 $0!$을 $1$이 아닌 어떤 실수 $c$로 두어도 $n = 0$에서 $c \cdot 1 = c \ne 1 = 1!$이 되어 점화식이 깨집니다. (1)이 $n = 0$을 포함해 성립하게 하는 값은 $1$ 하나뿐입니다.
:::

## 확인 질문

:::check[$0$ 이상인 정수 $n$에서 $(n + 2)! \cdot (n!)^{-1}$은 무엇인가? $n = 0$에서 확인하라.]
$(n + 2)(n + 1)$입니다. (1)을 두 번 쓰면 $(n + 2)! = (n + 1)! \cdot (n + 2) = n! \cdot (n + 1)(n + 2)$이므로, $n! \ne 0$((3))이고 (K1), (K2), (K8)의 (iii), (K4)에 의해 $(n + 2)! \cdot (n!)^{-1} = (n + 1)(n + 2)$입니다. $n = 0$이면 $2! \cdot (0!)^{-1} = 2 \cdot 1 = 2$이고 $(0 + 2)(0 + 1) = 2$입니다.
:::

:::check[$n! = 1$인 $0$ 이상의 정수 $n$은 무엇인가?]
$n = 0$과 $n = 1$뿐입니다. 둘 다 (1)에 의해 $1$입니다. $n \ge 2$이면 $n - 1 \ge 1$이고 (1)에 의해 $n! = (n - 1)! \cdot n$입니다. (3)에 의해 $(n - 1)! \ge 1$이고 $0 \le n$이므로 [[order-properties-of-reals]]의 (4)의 (iii)에 의해 $1 \cdot n \le (n - 1)! \cdot n = n!$이고, (1)의 (v)에 의해 $n! \ge n \ge 2 > 1$이므로 $n! \ne 1$입니다.
:::
