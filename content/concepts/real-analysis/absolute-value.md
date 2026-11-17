---
title: 절댓값
title_en: Absolute Value
aliases: [절대값, absolute value, 두 수의 최대, 두 수의 최소, max, min]
kind: definition
field: real-analysis
msc: ["26A03"]
level: undergrad
summary: 실수 x 의 절댓값을 0 ≤ x 이면 x, x < 0 이면 −x 로 정의하고, 곱과 역수의 절댓값, |x| ≤ y 를 두 부등식으로 바꾸는 법, |y − x| < ε 와 x − ε < y < x + ε 의 동치를 증명한다. 두 수의 최대 max{a, b} 와 최소 min{a, b} 도 정의한다.
requires: [proof-by-contradiction, real-number-arithmetic, real-order-axioms, order-properties-of-reals, upper-bound-and-supremum]
sources:
  - ref: lebl-basic-analysis
    loc: 1.3절 첫머리의 정의와 Proposition 1.3.1 (p.36), 연습문제 1.3.1, 1.3.2 (p.39); 1.2.4절 Maxima and minima (p.34)
    checked: original
    note: "출처는 1.3절 첫머리(p.36)에서 |x| 를 x ≥ 0 이면 x, x < 0 이면 −x 로 정의하고, Proposition 1.3.1(p.36)에서 (i) |x| ≥ 0 이고 |x| = 0 인 것은 정확히 x = 0 일 때, (ii) |−x| = |x|, (iii) |xy| = |x||y|, (iv) |x|² = x², (v) |x| ≤ y 인 것은 정확히 −y ≤ x ≤ y 일 때, (vi) −|x| ≤ x ≤ |x| 를 진술하고 경우를 나누어 증명한다. 이 항목의 (2), (3)의 첫 문장, (4), (5), (7)의 첫 문장, (6)이 차례로 그 (i)–(vi)이다(제곱은 이 사이트에 거듭제곱이 없으므로 곱 xx 로 적었다). 출처는 (ii)와 (iii)의 일부 경우를 'Similarly'로 넘기고 (vi)을 (v)에 y = |x| 를 넣어 얻는다. 이 항목은 모든 경우를 적고, (6)을 (1)에서 직접 보인 뒤 (7)의 증명에 쓴다. (1)과 (9)는 출처에 명제로 없다(검색한 범위). (3)의 둘째 문장은 출처가 Corollary 1.3.3 의 증명(p.37)에서 |b − a| = |a − b| 로 따로 밝히지 않고 쓰는 식이다. (7)의 둘째 문장(< 의 경우)은 출처에 명제로 없고(검색한 범위), 출처는 Lemma 2.2.1 의 증명(p.61)에서 '−ε < x_n − x < ε, 곧 |x_n − x| < ε'처럼 따로 밝히지 않고 쓴다. (8)의 첫 문장은 출처의 연습문제 1.3.1(p.39, |x − y| < ε 인 것은 정확히 x − ε < y < x + ε 일 때)과 같은 내용이고, ≤ 의 경우는 출처에 진술로 없다(검색한 범위). 두 수의 최대와 최소를 출처는 따로 정의하지 않는다. 출처는 1.2.4절(p.34)에서 위로 유계이고 sup A ∈ A 인 실수 집합 A 의 상한을 max A 로 부르고 유한집합에 이 기호를 쓰며(유한집합이 상한을 원소로 갖는다는 것은 연습문제 1.1.2), 연습문제 1.3.2(p.39)에서 max{x, y} = (x + y + |x − y|)/2 와 min 의 같은 꼴의 식을 묻는다. 이 항목은 max{a, b}, min{a, b} 를 경우로 정의하고 (11)에서 집합의 최댓값·최솟값(upper-bound-and-supremum 항목)과 같다는 것을 증명한다. 예시 '3 과의 거리가 2 보다 작은 수'는 연습문제 1.3.1 의 꼴을 구체적인 수에 적용한 것이다. 예시 '|x| = max{x, −x}', 반례, 확인 질문은 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
순서 $<$, $\le$는 [[real-order-axioms]]의 것이고, $-x$, $x^{-1}$, 뺄셈은 [[real-number-arithmetic]]의 것이다.

**절댓값.** 실수 $x$의 **절댓값**(absolute value) $|x|$를 다음과 같이 정한다.
$$
|x| = \begin{cases} x & (0 \le x \text{ 일 때}) \\ -x & (x < 0 \text{ 일 때}) \end{cases}
$$
(W1)에서 나온 [[order-properties-of-reals]]의 (1)의 (iii)에 의해 모든 실수 $x$는 $0 \le x$와 $x < 0$ 가운데 정확히 하나를 만족하므로, $|x|$는 실수 하나로 정해진다. 막대 기호는 집합 $A$의 원소의 개수 $|A|$에도 쓰이지만 그것과는 다른 쓰임이며, 막대 안에 든 것이 실수인지 집합인지로 구별한다.

**두 수의 최대와 최소.** 실수 $a$, $b$에 대하여 $a$와 $b$의 **최대** $\max\{a, b\}$와 **최소** $\min\{a, b\}$를 다음과 같이 정한다.
$$
\max\{a, b\} = \begin{cases} b & (a \le b \text{ 일 때}) \\ a & (b < a \text{ 일 때}) \end{cases}
\qquad
\min\{a, b\} = \begin{cases} a & (a \le b \text{ 일 때}) \\ b & (b < a \text{ 일 때}) \end{cases}
$$
[[order-properties-of-reals]]의 (1)의 (iii)에 의해 $a \le b$와 $b < a$ 가운데 정확히 하나가 성립하므로, 두 수는 각각 실수 하나로 정해진다.

다음이 성립한다. 아래에서 $x$, $y$, $a$, $b$, $c$, $\varepsilon$은 임의의 실수이다.

1. $0 \le x$이면 $|x| = x$이고, $x \le 0$이면 $|x| = -x$이다.
2. $0 \le |x|$이다. $|x| = 0$인 것은 정확히 $x = 0$일 때이다.
3. $|-x| = |x|$이다. 특히 $|a - b| = |b - a|$이다.
4. $|xy| = |x|\,|y|$이다.
5. $|x|\,|x| = xx$이다.
6. $-|x| \le x \le |x|$이다.
7. $|x| \le y$인 것은 정확히 $-y \le x \le y$일 때이다. $|x| < y$인 것은 정확히 $-y < x < y$일 때이다.
8. $|y - x| < \varepsilon$인 것은 정확히 $x - \varepsilon < y < x + \varepsilon$일 때이다. $|y - x| \le \varepsilon$인 것은 정확히 $x - \varepsilon \le y \le x + \varepsilon$일 때이다. (3)에 의해 두 문장에서 $|y - x|$를 $|x - y|$로 바꾸어도 된다.
9. $x \ne 0$이면 $|x| \ne 0$이고 $|x^{-1}| = |x|^{-1}$이다.
10. $\max\{a, b\}$와 $\min\{a, b\}$는 각각 $a$이거나 $b$이다. $a \le \max\{a, b\}$이고 $b \le \max\{a, b\}$이며, $a \le c$이고 $b \le c$이면 $\max\{a, b\} \le c$이다. $\min\{a, b\} \le a$이고 $\min\{a, b\} \le b$이며, $c \le a$이고 $c \le b$이면 $c \le \min\{a, b\}$이다.
11. (집합의 최댓값과의 일치) $\max\{a, b\}$는 집합 $\{a, b\}$의 [[upper-bound-and-supremum]]의 뜻의 최댓값이고, $\min\{a, b\}$는 그 뜻의 최솟값이다. 따라서 기호 $\max\{a, b\}$, $\min\{a, b\}$는 그 항목에서 $E = \{a, b\}$로 둔 $\max E$, $\min E$와 같은 수를 가리킨다. 특히 $\sup\{a, b\} = \max\{a, b\}$이고 $\inf\{a, b\} = \min\{a, b\}$이다.
:::

:::english
The order $<$, $\le$ is the one in the entry on the order of the real numbers, and $-x$, $x^{-1}$ and subtraction are those of the entry on the arithmetic of the real numbers.

**Absolute value.** The **absolute value** $|x|$ of a real number $x$ is defined by
$$
|x| = \begin{cases} x & (\text{if } 0 \le x) \\ -x & (\text{if } x < 0) \end{cases}
$$
By item (1)(iii) of the entry on properties of the order, which follows from (W1), every real number $x$ satisfies exactly one of $0 \le x$ and $x < 0$, so $|x|$ is a well-defined real number. The bars are also used for the number of elements $|A|$ of a set $A$, but that is a different use of the symbol; the two are told apart by whether what stands between the bars is a real number or a set.

**Maximum and minimum of two numbers.** For real numbers $a$ and $b$, the **maximum** $\max\{a, b\}$ and the **minimum** $\min\{a, b\}$ of $a$ and $b$ are defined by
$$
\max\{a, b\} = \begin{cases} b & (\text{if } a \le b) \\ a & (\text{if } b < a) \end{cases}
\qquad
\min\{a, b\} = \begin{cases} a & (\text{if } a \le b) \\ b & (\text{if } b < a) \end{cases}
$$
By item (1)(iii) of the entry on properties of the order, exactly one of $a \le b$ and $b < a$ holds, so each of them is a well-defined real number.

The following hold, where $x$, $y$, $a$, $b$, $c$, $\varepsilon$ are arbitrary real numbers.

1. If $0 \le x$, then $|x| = x$; if $x \le 0$, then $|x| = -x$.
2. $0 \le |x|$. Moreover, $|x| = 0$ exactly when $x = 0$.
3. $|-x| = |x|$. In particular, $|a - b| = |b - a|$.
4. $|xy| = |x|\,|y|$.
5. $|x|\,|x| = xx$.
6. $-|x| \le x \le |x|$.
7. $|x| \le y$ exactly when $-y \le x \le y$. Also, $|x| < y$ exactly when $-y < x < y$.
8. $|y - x| < \varepsilon$ exactly when $x - \varepsilon < y < x + \varepsilon$. Also, $|y - x| \le \varepsilon$ exactly when $x - \varepsilon \le y \le x + \varepsilon$. By (3), $|y - x|$ may be replaced by $|x - y|$ in both sentences.
9. If $x \ne 0$, then $|x| \ne 0$ and $|x^{-1}| = |x|^{-1}$.
10. Each of $\max\{a, b\}$ and $\min\{a, b\}$ equals $a$ or $b$. We have $a \le \max\{a, b\}$ and $b \le \max\{a, b\}$, and if $a \le c$ and $b \le c$, then $\max\{a, b\} \le c$. We have $\min\{a, b\} \le a$ and $\min\{a, b\} \le b$, and if $c \le a$ and $c \le b$, then $c \le \min\{a, b\}$.
11. (Agreement with the maximum of a set) $\max\{a, b\}$ is the maximum of the set $\{a, b\}$ in the sense of the entry on upper bounds and suprema, and $\min\{a, b\}$ is its minimum in that sense. Hence the symbols $\max\{a, b\}$ and $\min\{a, b\}$ denote the same numbers as $\max E$ and $\min E$ of that entry with $E = \{a, b\}$. In particular, $\sup\{a, b\} = \max\{a, b\}$ and $\inf\{a, b\} = \min\{a, b\}$.
:::

## 직관

수직선 위에서 $|x|$는 $x$가 $0$에서 얼마나 떨어져 있는지를 나타냅니다. 집을 $0$으로 두고 동쪽을 양수, 서쪽을 음수로 위치를 적는다고 해 봅시다. 동쪽으로 $3$ 걸음 간 사람도 서쪽으로 $3$ 걸음 간 사람도 집에서 $3$ 걸음 떨어져 있습니다. 이것이 $|-x| = |x|$(이 항목의 (3))이고, 떨어진 거리가 $0$인 것은 집에 있을 때뿐이라는 것이 이 항목의 (2)입니다.

같은 그림에서 $|y - x|$는 두 위치 $x$와 $y$ 사이의 거리로 읽힙니다. 이 항목의 (8)은 "$y$가 $x$에서 $\varepsilon$보다 가깝다"는 것을 "$y$가 $x - \varepsilon$과 $x + \varepsilon$ 사이에 있다"는 두 부등식으로 바꾸어 줍니다. 수열의 극한처럼 "가깝다"를 다루는 정의는 절댓값으로 쓰고, 증명에서는 이렇게 두 부등식으로 풀어 쓰는 일이 많습니다.

비유가 맞지 않는 곳도 있습니다. 이 사이트는 "거리"를 따로 정의하지 않았습니다. $|x|$는 위의 두 경우로 정한 실수일 뿐이고, 위의 성질들은 모두 그 정의와 순서 공리에서 증명합니다. 두 수의 최대와 최소도 같은 방식으로 경우를 나누어 정하며, 이 항목의 (11)이 그것이 집합 $\{a, b\}$의 최댓값·최솟값과 같다는 것을 보여 줍니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (1)의 (iii)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이고, "이 항목의 (1)"처럼 쓴 것은 위 진술의 번호이다. 증명에서 자주 쓰는 두 계산을 먼저 적는다.

- (가) $-0 = 0$이다. (K4)에 의해 $0 + 0 = 0$이므로, (K8)의 (ii)의 유일성에 의해 $-0 = 0$이다.
- (나) 실수 $a$, $b$에 대하여 $-(a - b) = b - a$이고 $(a - b) + b = a$이다. (K12)의 (iv)와 (K9)의 $-(-b) = b$, (K1)에 의해 $-(a - b) = -(a + (-b)) = (-a) + (-(-b)) = (-a) + b = b + (-a) = b - a$이다. 또 (K2), (K1), $-b$의 정의((K8)의 (ii)), (K4)에 의해 $(a - b) + b = a + ((-b) + b) = a + (b + (-b)) = a + 0 = a$이다.

**1의 증명.** $0 \le x$이면 정의에 의해 $|x| = x$이다. $x \le 0$이라 하자. $x < 0$이면 정의에 의해 $|x| = -x$이다. $x = 0$이면 순서 성질 (1)의 (iv)에 의해 $0 \le 0$이므로 정의에 의해 $|x| = |0| = 0$이고, (가)에 의해 $-x = -0 = 0$이므로 $|x| = -x$이다.

**2의 증명.** 순서 성질 (1)의 (iii)에 의해 $0 \le x$이거나 $x < 0$이다. $0 \le x$이면 $|x| = x$이므로 $0 \le |x|$이다. $x < 0$이면 $|x| = -x$이고, 순서 성질 (3)의 (ii)에 의해 $0 < -x$이므로 $0 \le |x|$이다.

$x = 0$이면 이 항목의 (1)에 의해 $|x| = 0$이다. 거꾸로 $|x| = 0$이라 하고 [[proof-by-contradiction]]으로 $x = 0$을 보인다. $x \ne 0$이라 하자. (W1)에 의해 $0 < x$이거나 $x < 0$이다. $0 < x$이면 $|x| = x$이므로 $0 < |x|$이다. $x < 0$이면 $|x| = -x$이고 순서 성질 (3)의 (ii)에 의해 $0 < -x$이므로 $0 < |x|$이다. 어느 경우든 $0 < |x|$이고, 순서 성질 (1)의 (i)에 의해 $|x| \ne 0$이어서 가정과 어긋난다. 따라서 $x = 0$이다.

**3의 증명.** (W1)에 의해 $0 < x$, $x = 0$, $x < 0$ 가운데 하나가 성립한다.

- $0 < x$이면 $|x| = x$이다. 순서 성질 (3)의 (ii)에 의해 $-x < 0$이므로 $|-x| = -(-x)$이고, (K9)에 의해 $-(-x) = x$이다. 따라서 $|-x| = x = |x|$이다.
- $x = 0$이면 (가)에 의해 $-x = 0 = x$이므로 $|-x| = |x|$이다.
- $x < 0$이면 $|x| = -x$이다. 순서 성질 (3)의 (ii)에 의해 $0 < -x$이므로 $|-x| = -x$이다. 따라서 $|-x| = |x|$이다.

$a$, $b$가 실수이면 (나)에 의해 $a - b = -(b - a)$이므로, 방금 보인 것을 $x = b - a$에 적용하면 $|a - b| = |-(b - a)| = |b - a|$이다.

**4의 증명.** 순서 성질 (1)의 (iii)에 의해 $x$는 $0 \le x$와 $x < 0$ 가운데 하나를 만족하고, $y$도 그렇다. 네 경우로 나눈다. $x < 0$이면 $x \le 0$이고 $y$도 그렇다는 것을 쓴다.

- $0 \le x$이고 $0 \le y$이면, 순서 성질 (4)의 (iv)의 첫 문장에 의해 $0 \le xy$이다. 이 항목의 (1)에 의해 $|xy| = xy$이고 $|x|\,|y| = xy$이다.
- $0 \le x$이고 $y < 0$이면, $y \le 0$이므로 순서 성질 (4)의 (iv)의 넷째 문장에 의해 $xy \le 0$이고, 이 항목의 (1)에 의해 $|xy| = -(xy)$이다. 한편 $|x|\,|y| = x(-y)$이고 (K12)의 (ii)에 의해 $x(-y) = -(xy)$이다.
- $x < 0$이고 $0 \le y$이면, $x \le 0$이므로 순서 성질 (4)의 (iv)의 넷째 문장($a = y$, $b = x$)에 의해 $yx \le 0$이고, (K1)에 의해 $xy = yx \le 0$이므로 $|xy| = -(xy)$이다. 한편 $|x|\,|y| = (-x)y$이고 (K9)에 의해 $(-x)y = -(xy)$이다.
- $x < 0$이고 $y < 0$이면, 순서 성질 (4)의 (iv)의 셋째 문장에 의해 $0 < xy$이므로 $|xy| = xy$이다. 한편 $|x|\,|y| = (-x)(-y)$이고 (K12)의 (iii)에 의해 $(-x)(-y) = xy$이다.

어느 경우든 $|xy| = |x|\,|y|$이다.

**5의 증명.** 이 항목의 (4)에 의해 $|x|\,|x| = |xx|$이다. 순서 성질 (5)의 (iii)에 의해 $0 \le xx$이므로 이 항목의 (1)에 의해 $|xx| = xx$이다.

**6의 증명.** $0 \le x$이면 $|x| = x$이므로 순서 성질 (1)의 (iv)에 의해 $x \le |x|$이다. 순서 성질 (3)의 (iii)을 $0 \le x$에 적용하면 $-x \le -0$이고 (가)에 의해 $-|x| = -x \le 0$이다. $0 \le x$와 순서 성질 (1)의 (v)에 의해 $-|x| \le x$이다.

$x < 0$이면 $|x| = -x$이고, (K9)에 의해 $-|x| = -(-x) = x$이므로 순서 성질 (1)의 (iv)에 의해 $-|x| \le x$이다. 또 순서 성질 (3)의 (ii)에 의해 $0 < -x = |x|$이고, $x < 0$과 (W2)에 의해 $x < |x|$이므로 $x \le |x|$이다.

**7의 증명.** $|x| \le y$라 하자. 이 항목의 (6)의 $x \le |x|$와 순서 성질 (1)의 (v)에 의해 $x \le y$이다. 순서 성질 (3)의 (iii)을 $|x| \le y$에 적용하면 $-y \le -|x|$이고, 이 항목의 (6)의 $-|x| \le x$와 순서 성질 (1)의 (v)에 의해 $-y \le x$이다. 따라서 $-y \le x \le y$이다.

거꾸로 $-y \le x \le y$라 하자. $0 \le x$이면 $|x| = x \le y$이다. $x < 0$이면 $|x| = -x$이고, 순서 성질 (3)의 (iii)을 $-y \le x$에 적용하면 $-x \le -(-y)$이며 (K9)에 의해 $-(-y) = y$이므로 $|x| \le y$이다. 순서 성질 (1)의 (iii)에 의해 두 경우 가운데 하나가 성립하므로 $|x| \le y$이다.

$<$의 경우도 같은 순서로 쓴다. $|x| < y$라 하자. $x \le |x|$와 순서 성질 (1)의 (v)에 의해 $x < y$이다. 순서 성질 (3)의 (iii)에 의해 $-y < -|x|$이고, $-|x| \le x$와 순서 성질 (1)의 (v)에 의해 $-y < x$이다. 거꾸로 $-y < x < y$라 하자. $0 \le x$이면 $|x| = x < y$이다. $x < 0$이면 $|x| = -x$이고, 순서 성질 (3)의 (iii)을 $-y < x$에 적용하면 $-x < -(-y) = y$이므로 $|x| < y$이다.

**8의 증명.** 이 항목의 (7)을 실수 $y - x$와 $\varepsilon$에 적용하면, $|y - x| < \varepsilon$인 것은 정확히 $-\varepsilon < y - x$이고 $y - x < \varepsilon$일 때이다. 순서 성질 (2)의 (ii)에 의해 양변에 $x$를 더해도 $<$가 성립하는지는 바뀌지 않으므로, $-\varepsilon < y - x$인 것은 정확히 $-\varepsilon + x < (y - x) + x$일 때이고, $y - x < \varepsilon$인 것은 정확히 $(y - x) + x < \varepsilon + x$일 때이다. 여기서 (나)에 의해 $(y - x) + x = y$이고, (K1)에 의해 $-\varepsilon + x = x + (-\varepsilon) = x - \varepsilon$, $\varepsilon + x = x + \varepsilon$이다. 따라서 $|y - x| < \varepsilon$인 것은 정확히 $x - \varepsilon < y < x + \varepsilon$일 때이다.

$\le$의 경우는 이 항목의 (7)의 첫 문장과 순서 성질 (2)의 (ii)의 둘째 문장($\le$에 관한 것)을 써서 같은 계산을 하면 된다. 곧 $|y - x| \le \varepsilon$인 것은 정확히 $-\varepsilon \le y - x$이고 $y - x \le \varepsilon$일 때이고, 이것은 정확히 $x - \varepsilon \le y$이고 $y \le x + \varepsilon$일 때이다.

마지막 문장은 이 항목의 (3)의 $|x - y| = |y - x|$에서 나온다.

**9의 증명.** $x \ne 0$이라 하자. 이 항목의 (2)에 의해 $|x| = 0$이면 $x = 0$이므로, $|x| \ne 0$이다. (K8)의 (iii)에 의해 $x x^{-1} = 1$이고, 순서 성질 (5)의 (ii)에 의해 $0 < 1$이므로 이 항목의 (1)에 의해 $|1| = 1$이다. 이 항목의 (4)에 의해
$$
|x|\,|x^{-1}| = |x x^{-1}| = |1| = 1
$$
이다. $|x| \ne 0$이므로 (K8)의 (iii)에 의해 $|x|\,z = 1$인 실수 $z$는 $|x|^{-1}$ 하나뿐이고, 따라서 $|x^{-1}| = |x|^{-1}$이다.

**10의 증명.** 정의에 의해 $\max\{a, b\}$와 $\min\{a, b\}$는 각각 $a$이거나 $b$이다. 순서 성질 (1)의 (iii)에 의해 $a \le b$이거나 $b < a$이다.

- $a \le b$이면 $\max\{a, b\} = b$이다. $a \le b$이고, 순서 성질 (1)의 (iv)에 의해 $b \le b$이므로 $a \le \max\{a, b\}$이고 $b \le \max\{a, b\}$이다. 또 $\min\{a, b\} = a$이고, $a \le a$이고 $a \le b$이므로 $\min\{a, b\} \le a$이고 $\min\{a, b\} \le b$이다.
- $b < a$이면 $\max\{a, b\} = a$이다. 순서 성질 (1)의 (iv)에 의해 $a \le a$이고, $b < a$이므로 $b \le a$이다. 따라서 $a \le \max\{a, b\}$이고 $b \le \max\{a, b\}$이다. 또 $\min\{a, b\} = b$이고, $b \le a$이고 $b \le b$이므로 $\min\{a, b\} \le a$이고 $\min\{a, b\} \le b$이다.

$a \le c$이고 $b \le c$라 하자. $\max\{a, b\}$는 $a$이거나 $b$이므로 어느 경우든 $\max\{a, b\} \le c$이다. $c \le a$이고 $c \le b$라 하자. $\min\{a, b\}$는 $a$이거나 $b$이므로 어느 경우든 $c \le \min\{a, b\}$이다.

**11의 증명.** $E = \{a, b\}$라 하자. 이 항목의 (10)에 의해 $\max\{a, b\}$는 $a$이거나 $b$이므로 $E$의 원소이다. $E$의 원소 $z$는 $a$이거나 $b$이고, 이 항목의 (10)에 의해 $a \le \max\{a, b\}$이고 $b \le \max\{a, b\}$이므로 $z \le \max\{a, b\}$이다. 따라서 $\max\{a, b\}$는 $E$의 상계이다. $E$에 속하는 상계이므로 [[upper-bound-and-supremum]]의 정의에 의해 $\max\{a, b\}$는 $E$의 최댓값이고, 그 항목의 (1)에 의해 최댓값은 하나뿐이므로 $\max E = \max\{a, b\}$이다. 그 항목의 (2)에 의해 $\sup E = \max E = \max\{a, b\}$이다.

최소도 같은 순서로 보인다. 이 항목의 (10)에 의해 $\min\{a, b\}$는 $a$이거나 $b$이므로 $E$의 원소이다. $E$의 원소 $z$는 $a$이거나 $b$이고, $\min\{a, b\} \le a$이고 $\min\{a, b\} \le b$이므로 $\min\{a, b\} \le z$이다. 따라서 $\min\{a, b\}$는 $E$에 속하는 $E$의 하계이므로 $E$의 최솟값이고, 그 항목의 (1)에 의해 $\min E = \min\{a, b\}$이며, 그 항목의 (2)에 의해 $\inf E = \min E = \min\{a, b\}$이다. $\blacksquare$
:::

## 예시와 반례

:::example[3과의 거리가 2보다 작은 수]
실수 $t$에 대하여 $|t - 3| < 2$인 것은 정확히 $1 < t < 5$일 때입니다. 이 항목의 (8)을 $x = 3$, $y = t$, $\varepsilon = 2$로 쓰면 $|t - 3| < 2$인 것은 정확히 $3 - 2 < t < 3 + 2$일 때이고, 정수의 계산((K7))으로 $3 - 2 = 1$, $3 + 2 = 5$입니다.

끝점 $t = 1$은 들어가지 않습니다. $1 - 3 = -2$이고 [[order-properties-of-reals]]의 (10)과 (3)의 (ii)에 의해 $-2 < 0$이므로 정의와 (K9)에 의해 $|-2| = -(-2) = 2$인데, (W1)에 의해 $2 < 2$는 성립하지 않습니다. 같은 수에 대해 $\le$의 경우를 쓰면 $|t - 3| \le 2$인 것은 정확히 $1 \le t \le 5$일 때이고, 이때는 $t = 1$과 $t = 5$가 들어갑니다.
:::

:::example[절댓값은 $x$와 $-x$ 가운데 큰 쪽이다]
모든 실수 $x$에 대하여 $|x| = \max\{x, -x\}$입니다. 이 항목의 (6)에 의해 $x \le |x|$이고, $-|x| \le x$에 [[order-properties-of-reals]]의 (3)의 (iii)을 쓰면 $-x \le -(-|x|)$이며 (K9)에 의해 $-(-|x|) = |x|$이므로 $-x \le |x|$입니다. 이 항목의 (10)에 의해 $\max\{x, -x\} \le |x|$입니다. 거꾸로 정의에 의해 $|x|$는 $x$이거나 $-x$이고, 이 항목의 (10)에 의해 $x$와 $-x$는 모두 $\max\{x, -x\}$ 이하이므로 $|x| \le \max\{x, -x\}$입니다. [[order-properties-of-reals]]의 (1)의 (ii)에 의해 $|x| = \max\{x, -x\}$입니다.
:::

:::counterexample[$|-x| = x$는 $x = -3$에서 성립하지 않는다]
"절댓값은 부호를 뗀다"를 "$-x$의 절댓값은 $x$"로 잘못 읽으면 $|-x| = x$라고 쓰게 됩니다. $x = -3$이면 $-x = 3$이고 $0 \le 3$이므로 $|-x| = |3| = 3$입니다. 그런데 $x = -3$이고, [[order-properties-of-reals]]의 (10)에 의해 정수의 부등식 $0 < 3$은 실수의 부등식이며 그 항목의 (3)의 (ii)에 의해 $-3 < 0$이므로, (W2)에 의해 $-3 < 3$이고 그 항목의 (1)의 (i)에 의해 $3 \ne -3$입니다. 맞는 식은 이 항목의 (3)의 $|-x| = |x|$이고, 실제로 $|x| = |-3| = 3$입니다.
:::

## 확인 질문

:::check[$|x| \le -1$인 실수 $x$가 있는가?]
없습니다. 그런 $x$가 있다면 이 항목의 (2)의 $0 \le |x|$와 [[order-properties-of-reals]]의 (1)의 (v)에 의해 $0 \le -1$입니다. 그러나 그 항목의 (5)의 (ii)에 의해 $0 < 1$이고, 그 항목의 (3)의 (ii)에 의해 $-1 < 0$이므로, 그 항목의 (1)의 (i)에 의해 $0 \le -1$은 성립하지 않습니다.
:::

:::check[$a = -2$, $b = -5$일 때 $\max\{a, b\}$, $\min\{a, b\}$, $\max\{|a|, |b|\}$는 무엇인가?]
정수의 부등식 $2 < 5$는 [[order-properties-of-reals]]의 (10)에 의해 실수의 부등식이므로, 그 항목의 (3)의 (iii)에 의해 $-5 < -2$, 곧 $b < a$입니다. 정의에 의해 $\max\{a, b\} = a = -2$이고 $\min\{a, b\} = b = -5$입니다. 한편 $a$, $b$는 음수이므로(그 항목의 (3)의 (ii)) 정의와 (K9)에 의해 $|a| = -(-2) = 2$, $|b| = -(-5) = 5$이고, $2 \le 5$이므로 $\max\{|a|, |b|\} = 5$입니다. 따라서 $\max\{|a|, |b|\} = 5$이고 $|\max\{a, b\}| = |-2| = 2$여서, 두 수는 같지 않습니다.
:::
