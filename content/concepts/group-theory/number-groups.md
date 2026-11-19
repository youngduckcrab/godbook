---
title: 수로 이루어진 군
title_en: Groups of Numbers
aliases: [덧셈군, 곱셈군, 덧셈 표기, 정수의 덧셈군, 실수의 곱셈군, additive group, multiplicative group, additive notation]
kind: theorem
field: group-theory
msc: ["20A05", "20K99"]
level: undergrad
summary: (ℤ, +), (ℝ, +), (ℝ − {0}, ·)는 무한 아벨군이고 (ℤ_n, +)는 위수 n인 아벨군이다. (ℝ, ·)와 n ≥ 2인 (ℤ_n, ·)는 군이 아니다. 덧셈으로 쓰는 군의 표기를 정한다.
requires: [set, binary-operation, group, natural-numbers-are-infinite, real-number-arithmetic, integers-modulo-n, well-ordering-principle, even-and-odd]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 3.2절 Example 3.8(ℤ 의 덧셈, p.34), 덧셈 표기의 약속(p.34), Example 3.9(ℤ_5 와 ℤ_n 의 덧셈, p.34), Example 3.11(ℤ_n 의 곱셈은 군이 아니다, p.34–35), 연습문제 3.13(ℝ − {0}, p.41), Example 3.24(ℝ∗, p.38)
    checked: original
    note: "(1)은 출처 Example 3.8(p.34)과 같은 대상, 같은 결론이다. 출처는 ℤ 가 무한군이라는 것을 p.36 에서 '|ℤ| = ∞' 로 적는다. 덧셈 표기의 약속(m + n, −n, 0, m − n = m + (−n))은 출처 p.34 의 약속과 같다. '덧셈 표기는 아벨군에만 쓴다'는 이 사이트의 약속이다. (2)의 (ℝ, +)는 출처가 군임을 예로 증명하지 않고 9장 등에서 군으로 쓴다: Example 9.2(p.114)의 'the additive group of real numbers (ℝ, +)', 연습문제(p.79)와 p.134, p.178 의 'the additive group of real numbers', Example 9.14(p.118)의 'the group of real numbers under addition'. (3)은 출처 연습문제 3.13(p.41)이고, 출처 Example 3.24(p.38)는 ℝ∗ 를 곱셈군이라 하고 역원을 1/a 라 적는다. (4)는 출처 Example 3.9(p.34, ℤ_5 와 '명제 3.4 에 의해 ℤ_n 은 덧셈에 대한 군')와 같은 결론이다. 출처는 ℤ_n 을 {0, 1, …, n − 1} 로 쓴다. (5)의 (ℤ_n, ·)가 군이 아니라는 것은 출처 Example 3.11(p.34–35)과 같은 대상, 같은 논법(0 의 곱셈 역원이 없다)이다. 출처는 Example 3.11 에서 n = 1 을 따로 다루지 않는다(ℤ_1 은 p.152–153 의 결정군 문맥에서만 나온다). 출처는 0 이 아닌 실수 ℝ∗ 를 곱셈군으로 쓰고(p.38, p.122, p.143, 기호표 p.337), 0 의 곱셈 역원이 없다는 말은 ℤ_n 에 대해서만 한다(Example 3.11, p.34–35). (ℝ, ·)가 군이 아니라는 진술은 찾지 못했다(검색어 'real numbers under multiplication', 'R is not a group', 'not a group under multiplication' 0건, 'inverse for 0|0 has no|no multiplicative inverse' 2건은 모두 ℤ_n). 예시의 ℤ_5 에서 [2] 의 역원이 [3] 이라는 것은 출처 Example 3.9(p.34)의 '2 + 3 = 3 + 2 = 0' 과 같은 계산이다. 반례(0 이 아닌 정수는 곱셈으로 군이 아니다)의 핵심은 출처 Example 16.2(p.191)의 '2 의 곱셈 역원인 정수는 없다'와 같은 사실이다. 첫째 확인 질문의 {[1], [2]} 는 출처 Example 3.11(p.35)이 n 과 서로소인 0 이 아닌 원소 전체로 정의하는 U(n) 의 n = 3 인 경우와 같은 집합이다. 둘째 확인 질문의 2 의 역원은 출처 Example 3.24(p.38)가 ℝ∗ 에서 a 의 역원을 1/a 라 하는 것과 같은 내용이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 경계 경우에서 거짓이 되는 제목·직관과 출처 메모를 고침"
added: 2026-11-19
---

:::statement
아래에서 [[group|군]]의 용어와 표기를 쓰고, 연산을 $+$로 쓰는 군에는 다음 **덧셈 표기**(additive notation)를 쓴다. 군의 연산 $a \ast b$를 $a + b$로 쓰고 $a$와 $b$의 **합**이라 한다. 항등원을 $0$(군을 밝혀야 하면 $0_G$)으로, $a$의 역원을 $-a$로 쓴다. $a + (-b)$를 $a - b$로 쓴다. 세 원소의 합 $(a + b) + c = a + (b + c)$는 괄호 없이 $a + b + c$로 쓴다. 이 사이트는 덧셈 표기를 아벨군에만 쓴다.

$\mathbb{R}$과 그 덧셈, 곱셈은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이고, $\mathbb{Z}_n$과 그 덧셈, 곱셈은 [[integers-modulo-n|법 n의 정수]]의 것이다. $n$은 자연수이다. 다음이 성립한다.

1. (정수의 덧셈) $(\mathbb{Z}, +)$는 아벨군이고 무한군이다. 항등원은 정수 $0$이고, 정수 $a$의 역원은 정수 $-a$이다.
2. (실수의 덧셈) $(\mathbb{R}, +)$는 아벨군이고 무한군이다. 항등원은 실수 $0$이고, 실수 $a$의 역원은 [[real-number-arithmetic|(K8)]]의 $-a$이다.
3. (0이 아닌 실수의 곱셈) $\mathbb{R} - \{0\}$은 실수의 곱셈에 대해 닫혀 있고, 곱셈을 $\mathbb{R} - \{0\}$으로 제한한 연산으로 $(\mathbb{R} - \{0\}, \cdot)$는 아벨군이고 무한군이다. 항등원은 $1$이고, 이 군에서 $a$의 역원은 (K8)의 역수 $a^{-1}$이다. 곧 두 기호 $a^{-1}$은 같은 실수를 가리킨다.
4. (법 $n$의 덧셈) $(\mathbb{Z}_n, +)$는 아벨군이고 유한군이며 $|\mathbb{Z}_n| = n$이다. 항등원은 $[0]$이고, $[a]$의 역원은 $-[a] = [-a] = [n - a]$이다.
5. (곱셈은 군이 되지 않는 경우) $(\mathbb{R}, \cdot)$는 군이 아니다. $n \ge 2$이면 $(\mathbb{Z}_n, \cdot)$는 군이 아니다. 두 경우 모두 곱셈의 항등원은 $1$, $[1]$이고, $0$, $[0]$이 역원을 갖지 않는다. $n = 1$이면 $\mathbb{Z}_1 = \{[0]\}$이고 $(\mathbb{Z}_1, \cdot)$는 원소가 하나인 군이며 그 항등원은 $[0] = [1]$이다.
:::

:::english
Below we use the terms and notation of the entry on groups, and for groups whose operation is written $+$ we use the following **additive notation**. The group operation $a \ast b$ is written $a + b$ and called the **sum** of $a$ and $b$. The identity is written $0$ (or $0_G$ when the group must be named), and the inverse of $a$ is written $-a$. We write $a - b$ for $a + (-b)$. The sum of three elements $(a + b) + c = a + (b + c)$ is written $a + b + c$ without parentheses. This site uses additive notation only for abelian groups.

$\mathbb{R}$ with its addition and multiplication is as in the entry on the arithmetic of real numbers, and $\mathbb{Z}_n$ with its addition and multiplication is as in the entry on the integers modulo $n$. Here $n$ is a natural number. The following hold.

1. (Addition of integers) $(\mathbb{Z}, +)$ is an abelian group and an infinite group. Its identity is the integer $0$, and the inverse of an integer $a$ is the integer $-a$.
2. (Addition of reals) $(\mathbb{R}, +)$ is an abelian group and an infinite group. Its identity is the real number $0$, and the inverse of a real number $a$ is $-a$ of (K8).
3. (Multiplication of nonzero reals) $\mathbb{R} - \{0\}$ is closed under multiplication of real numbers, and with the restriction of multiplication to $\mathbb{R} - \{0\}$, $(\mathbb{R} - \{0\}, \cdot)$ is an abelian group and an infinite group. Its identity is $1$, and the inverse of $a$ in this group is the reciprocal $a^{-1}$ of (K8). That is, the two symbols $a^{-1}$ denote the same real number.
4. (Addition modulo $n$) $(\mathbb{Z}_n, +)$ is an abelian group and a finite group with $|\mathbb{Z}_n| = n$. Its identity is $[0]$, and the inverse of $[a]$ is $-[a] = [-a] = [n - a]$.
5. (Cases where multiplication gives no group) $(\mathbb{R}, \cdot)$ is not a group. If $n \ge 2$, then $(\mathbb{Z}_n, \cdot)$ is not a group. In both cases the multiplicative identity is $1$, respectively $[1]$, and $0$, respectively $[0]$, has no inverse. If $n = 1$, then $\mathbb{Z}_1 = \{[0]\}$ and $(\mathbb{Z}_1, \cdot)$ is a group with one element whose identity is $[0] = [1]$.
:::

## 직관

군의 예는 먼저 익숙한 수에서 찾습니다. 덧셈은 언제나 되돌릴 수 있으므로($a$를 더한 것은 $-a$를 더해 지운다) 정수, 실수, $\mathbb{Z}_n$이 모두 덧셈으로 군이 됩니다. 실수의 곱셈은 $0$을 곱한 것을 되돌릴 수 없습니다. 그래서 곱셈으로 군을 얻으려면 $0$을 빼야 하고, 실수에서는 $0$만 빼면 충분합니다. 실수에서 $0$이 아닌 수는 모두 역수를 갖기 때문입니다((K6)).

$\mathbb{Z}_n$에서는 $[0]$을 빼는 것만으로 충분하지 않을 수 있습니다. $\mathbb{Z}_4$에서 $[2]$는 $[0]$이 아니지만 $[2][b]$는 $[0]$이나 $[2]$뿐이어서 $[1]$이 되지 않습니다([[integers-modulo-n|법 n의 정수]]의 곱셈표). 곱셈으로 군을 이루는 $\mathbb{Z}_n$의 부분집합은 [[group-of-units-modulo-n|법 n의 단원군]]이 다룹니다.

덧셈 표기는 연산 기호만 바꾼 것입니다. 곱 표기의 $ab$, $e$, $a^{-1}$이 덧셈 표기의 $a + b$, $0$, $-a$에 하나씩 대응하고, [[group-basic-properties|군의 기본 성질]]의 (6) $(ab)^{-1} = b^{-1}a^{-1}$은 덧셈 표기로 $-(a + b) = (-b) + (-a)$가 됩니다.

## 증명

:::idea
세 공리와 교환법칙을 이미 받아들였거나 증명한 계산 법칙의 번호로 하나씩 짚는다. 부분집합에서는 [[binary-operation|이항연산]]의 (3)으로 닫힘, 항등원, 역원을 옮긴다. 무한군임은 $\mathbb{N}$을 포함한다는 것으로 보인다.
:::

:::hint
(3): $a \ne 0$일 때 $a^{-1} \ne 0$임을 따로 보여야 역원이 $\mathbb{R} - \{0\}$에 있다.
:::

:::proof
아래에서 (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 번호이고, (Z5)는 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 삼분법이다.

**(1)** [[binary-operation|이항연산]]의 (4)에 의해 정수의 덧셈은 $\mathbb{Z}$ 위의 결합적이고 가환인 이항연산이고, $0$이 항등원이며 모든 정수 $a$에서 $-a$가 $a$의 역원이다. 따라서 [[group|군]]의 세 조건이 성립하고 아벨군이다. 항등원과 역원은 하나뿐이므로 군의 항등원은 $0$, $a$의 역원은 $-a$이다. $\mathbb{N} \subseteq \mathbb{Z}$이므로 [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (2)에 의해 $\mathbb{Z}$는 무한집합이고, 이 군은 무한군이다.

**(2)** 실수의 덧셈은 $\mathbb{R} \times \mathbb{R}$에서 $\mathbb{R}$로의 함수이므로 $\mathbb{R}$ 위의 이항연산이다. (K2)에 의해 결합적이고 (K1)에 의해 가환이다. (K4)와 (K1)에 의해 모든 실수 $a$에서 $a + 0 = a$이고 $0 + a = a$이므로 $0$이 항등원이다. (K8)의 (ii)에 의해 $a + (-a) = 0$이고 (K1)에 의해 $(-a) + a = 0$이므로 $-a$가 $a$의 역원이다. 따라서 아벨군이고, 항등원과 역원의 유일성에 의해 항등원은 $0$, $a$의 역원은 $-a$이다. (K7)에 의해 정수는 실수이므로 $\mathbb{N} \subseteq \mathbb{R}$이고, [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (2)에 의해 $\mathbb{R}$은 무한집합이다.

**(3)** 닫힘: $a, b \in \mathbb{R} - \{0\}$이면 $a \ne 0$, $b \ne 0$이므로 (K12)의 (vi)에 의해 $ab \ne 0$, 곧 $ab \in \mathbb{R} - \{0\}$이다. 따라서 [[binary-operation|이항연산]]의 (3)에 의해 곱셈을 $\mathbb{R} - \{0\}$으로 제한한 연산은 $\mathbb{R} - \{0\}$ 위의 이항연산이다. 실수의 곱셈은 (K2), (K1)에 의해 결합적이고 가환이므로 같은 항목의 (3)의 (i)에 의해 제한한 연산도 그렇다. (K4)와 (K1)에 의해 모든 실수 $a$에서 $a \cdot 1 = a$, $1 \cdot a = a$이므로 $1$은 실수의 곱셈의 항등원이고, (K4)의 $0 \ne 1$에 의해 $1 \in \mathbb{R} - \{0\}$이므로 (3)의 (ii)에 의해 $1$은 제한한 연산의 항등원이다.

$a \in \mathbb{R} - \{0\}$이라 하자. (K8)의 (iii)에 의해 $aa^{-1} = 1$이고 (K1)에 의해 $a^{-1}a = 1$이므로 $a^{-1}$은 실수의 곱셈에 대한 $a$의 역원이다. 또 $a^{-1} \ne 0$이다. $a^{-1} = 0$이라면 (K9)에 의해 $1 = aa^{-1} = a \cdot 0 = 0$이 되어 (K4)의 $0 \ne 1$에 어긋나기 때문이다. 따라서 $a^{-1} \in \mathbb{R} - \{0\}$이고, (3)의 (iii)에 의해 $a^{-1}$은 제한한 연산에 대한 $a$의 역원이다. 세 조건이 성립하므로 아벨군이고, 역원의 유일성에 의해 이 군에서 $a$의 역원은 (K8)의 $a^{-1}$이다.

무한군: 자연수 $m$은 (K7)에 의해 실수이고, 양의 정수이므로 $0 < m$이며 (Z5)에 의해 $m \ne 0$이다. (K7)에 의해 정수 $0$은 실수 $0$이므로 $m \in \mathbb{R} - \{0\}$이다. 따라서 $\mathbb{N} \subseteq \mathbb{R} - \{0\}$이고, [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (2)에 의해 $\mathbb{R} - \{0\}$은 무한집합이다.

**(4)** [[integers-modulo-n|법 n의 정수]]의 (2), (3)에 의해 $\mathbb{Z}_n$의 덧셈은 결합적이고 가환인 이항연산이고, 같은 항목의 (4)에 의해 $[0]$이 항등원이며 $[-a]$가 $[a]$의 역원이다. $\mathbb{Z}_n$의 모든 원소는 어떤 정수 $a$에 대한 $[a]$이므로 모든 원소가 역원을 갖는다. 따라서 아벨군이고, 같은 항목의 (1)에 의해 $\mathbb{Z}_n$은 유한집합이고 $|\mathbb{Z}_n| = n$이다. 역원의 유일성과 같은 항목의 (4)에 의해 $-[a] = [-a] = [n - a]$이다.

**(5)** $(\mathbb{R}, \cdot)$: (3)의 증명에서 보았듯이 $1$은 실수의 곱셈의 항등원이고 [[binary-operation|이항연산]]의 (1)에 의해 유일하다. $0$의 역원이 있다면 $0 \cdot x = 1$인 실수 $x$가 있어야 하는데, (K9)에 의해 $0 \cdot x = 0$이고 (K4)에 의해 $0 \ne 1$이다. 따라서 $0$은 역원을 갖지 않고 [[group|군]]의 (3)이 깨진다.

$(\mathbb{Z}_n, \cdot)$, $n \ge 2$: [[integers-modulo-n|법 n의 정수]]의 (4)에 의해 $[1]$이 곱셈의 항등원이고 하나뿐이다. 정수 $b$가 무엇이든 $[0][b] = [0 \cdot b] = [0]$이다. $n \ge 2$이면 $0$과 $1$은 둘 다 $0$ 이상 $n - 1$ 이하인 서로 다른 정수이므로 같은 항목의 (1)에 의해 $[0] \ne [1]$이다. 따라서 $[0]$은 역원을 갖지 않고 군의 (3)이 깨진다.

$n = 1$: [[integers-modulo-n|법 n의 정수]]의 (5)에 의해 $\mathbb{Z}_1 = \{[0]\}$이고 $[0] = [1]$이다. [[group|군]]의 (5)에 의해 원소가 하나인 집합 위의 이항연산은 하나뿐이고 그것으로 군이며, 그 항등원은 그 원소 $[0]$이다.
:::

## 예시와 반례

:::example[덧셈 표기로 쓴 계산]
$(\mathbb{Z}_5, +)$에서 $[2]$의 역원은 $-[2] = [5 - 2] = [3]$입니다. 실제로 $[2] + [3] = [5] = [0]$입니다. 또 $[1] - [4] = [1] + (-[4]) = [1] + [1] = [2]$입니다. 정수로 계산한 $1 - 4 = -3$과 $2$가 법 $5$로 합동($-3 - 2 = 5 \cdot (-1)$)이므로 같은 답입니다.
:::

:::counterexample[0이 아닌 정수 전체는 곱셈으로 군이 아니다]
정수의 곱셈을 $\mathbb{Z} - \{0\}$으로 제한한 연산이 있다고 해도 그것으로 군이 되지는 않습니다. $1 \in \mathbb{Z} - \{0\}$이므로 [[binary-operation|이항연산]]의 (3)의 (ii)와 (1)에 의해 그 연산의 항등원은 $1$뿐이고, $2$의 역원은 $2b = 1$인 정수 $b$여야 합니다. 그런데 $2b = 1$이면 $1$이 짝수가 되고, $1 = 2 \cdot 0 + 1$이므로 $1$은 홀수이기도 하여 "짝수이면서 홀수인 정수는 없다"([[even-and-odd]])에 어긋납니다. $(\mathbb{R} - \{0\}, \cdot)$에서는 $2$의 역원 $2^{-1}$이 있지만, 그것은 정수가 아닙니다.
:::

## 확인 질문

:::check[$(\mathbb{Z}_3, \cdot)$에서 $[0]$을 뺀 $\{[1], [2]\}$는 곱셈에 대해 닫혀 있는가? 각 원소의 곱셈 역원은?]
닫혀 있습니다. $[1][1] = [1]$, $[1][2] = [2][1] = [2]$, $[2][2] = [4] = [1]$입니다($4 - 1 = 3 \cdot 1$). $[1]$의 역원은 $[1]$이고, $[2][2] = [1]$이므로 $[2]$의 역원은 $[2]$입니다.
:::

:::check[$(\mathbb{R} - \{0\}, \cdot)$에서 $2$와 $-1$의 역원은?]
$2$의 역원은 역수 $2^{-1}$(곧 $1/2$)입니다. $-1$의 역원은 $-1$입니다. (K9)의 $(-1)a = -a$에 의해 $(-1)(-1) = -(-1)$이고 (K9)의 $-(-a) = a$에 의해 이것은 $1$이기 때문입니다.
:::
