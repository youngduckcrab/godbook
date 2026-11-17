---
title: 극한과 부등식
title_en: Limits Preserve Non-strict Inequalities
aliases: [극한은 부등식을 보존한다, 극한의 순서 보존, limits and inequalities, limits preserve inequalities]
kind: lemma
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 수렴하는 두 수열이 모든 n 에서(또는 어떤 번호 이후에서) x_n ≤ y_n 이면 lim x_n ≤ lim y_n 이다. 특히 a ≤ x_n ≤ b 이면 a ≤ lim x_n ≤ b 이다. 엄격한 부등식은 극한에서 보존되지 않는다.
requires: [proof-by-contradiction, natural-numbers-are-infinite, prime-number, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, sequence, limit-of-sequence, limit-is-unique, basic-limits, convergent-sequence-is-bounded]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.2.1절 Lemma 2.2.3 과 그 증명, Corollary 2.2.4 와 그 뒤 문단 (p.62), 연습문제 2.2.1 (p.70)
    checked: original
    note: "출처의 Lemma 2.2.3(p.62)은 수렴하는 두 수열이 모든 n ∈ ℕ 에서 x_n ≤ y_n 이면 lim x_n ≤ lim y_n 이라는 것이고, 이 항목의 (1)이다. 출처는 ε/2 로 x − y < ε 을 얻은 뒤 'ε 은 임의였다'로 x − y ≤ 0 을 결론짓는다. 이 항목은 lim y_n < lim x_n 이라 가정하고 두 극한의 중점 c 를 잡아, 어느 번호에서 y_n < c < x_n 이 되어 x_n ≤ y_n 에 어긋남을 보이는 귀류법으로 증명한다. 부등식이 K 이상인 n 에서만 성립하는 (2)는 출처에 없다(검색한 범위). 출처의 Corollary 2.2.4(p.62)는 (i) 모든 n 에서 x_n ≥ 0 이면 lim x_n ≥ 0, (ii) a ≤ x_n ≤ b 이면 a ≤ lim x_n ≤ b 이고, 출처는 '상수 수열을 Lemma 2.2.3 에 쓰면 나온다'고 하며 증명을 연습문제 2.2.1(p.70, 힌트: 상수 수열과 Lemma 2.2.3)로 둔다. 이 항목의 (3)은 그 진술이고, 그 힌트대로 직접 증명했다. 출처는 Corollary 2.2.4 뒤에서 x_n = −1/n, y_n = 1/n 으로 엄격한 부등식이 극한에서 보존되지 않음을 보인다. 반례 '0 과 1/n'은 같은 발상이다. 예시 '유계인 수렴 수열의 극한'은 (3)을 a = −B, b = B 에 쓴 것으로, 출처에 없다(검색한 범위). 확인 질문은 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
수열, 수렴과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이다. $(x_n)$, $(y_n)$을 수렴하는 수열이라 하자.

1. 모든 자연수 $n$에서 $x_n \le y_n$이면 $\lim_{n \to \infty} x_n \le \lim_{n \to \infty} y_n$이다.
2. (어떤 번호 이후에만 성립하는 경우) 어떤 자연수 $K$가 있어 $K$ 이상인 모든 자연수 $n$에서 $x_n \le y_n$이면 $\lim_{n \to \infty} x_n \le \lim_{n \to \infty} y_n$이다.
3. (상수와의 비교) $a$, $b$를 실수라 하자. 모든 자연수 $n$에서 $a \le x_n$이면 $a \le \lim_{n \to \infty} x_n$이고, 모든 자연수 $n$에서 $x_n \le b$이면 $\lim_{n \to \infty} x_n \le b$이다. 따라서 모든 자연수 $n$에서 $a \le x_n \le b$이면 $a \le \lim_{n \to \infty} x_n \le b$이고, 특히 모든 자연수 $n$에서 $0 \le x_n$이면 $0 \le \lim_{n \to \infty} x_n$이다. 이 문장들의 "모든 자연수 $n$에서"를 "어떤 자연수 $K$ 이상인 모든 자연수 $n$에서"로 바꾸어도 성립한다.
:::

:::english
Sequences, convergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, on the limit of a sequence, and on uniqueness of limits. Let $(x_n)$ and $(y_n)$ be convergent sequences.

1. If $x_n \le y_n$ for every natural number $n$, then $\lim_{n \to \infty} x_n \le \lim_{n \to \infty} y_n$.
2. (When it holds only from some index on) If there is a natural number $K$ such that $x_n \le y_n$ for every natural number $n$ with $n \ge K$, then $\lim_{n \to \infty} x_n \le \lim_{n \to \infty} y_n$.
3. (Comparison with constants) Let $a$ and $b$ be real numbers. If $a \le x_n$ for every natural number $n$, then $a \le \lim_{n \to \infty} x_n$; if $x_n \le b$ for every natural number $n$, then $\lim_{n \to \infty} x_n \le b$. Hence if $a \le x_n \le b$ for every natural number $n$, then $a \le \lim_{n \to \infty} x_n \le b$; in particular, if $0 \le x_n$ for every natural number $n$, then $0 \le \lim_{n \to \infty} x_n$. These statements remain true when "for every natural number $n$" is replaced by "for every natural number $n$ with $n \ge K$, for some natural number $K$".
:::

## 직관

형과 동생이 해마다 키를 재는데, 동생의 키는 언제나 형의 키 이하라고 합시다. 두 사람의 키가 자라면서 각각 어떤 값에 다가간다면, 동생이 다가가는 값도 형이 다가가는 값 이하일 것입니다. 두 사람의 키가 $x_n$, $y_n$이고 다가가는 값이 두 극한입니다. 이 비유에서 주의할 점은, 해마다 동생이 형보다 **작더라도** 두 사람이 다가가는 값은 같을 수 있다는 것입니다(아래 반례). 비유가 맞지 않는 곳은, 실제 키는 끝없이 재는 것도 아니고 어떤 값에 다가간다는 보장도 없다는 점입니다. 이 항목은 두 수열이 수렴한다고 가정합니다. 극한은 "$\le$"는 지키지만 "$<$"는 지키지 못합니다.

증명은 귀류법입니다. 동생의 극한이 형의 극한보다 크다고 해 봅시다. 두 극한 사이의 가운데 값 $c$를 잡으면, 충분히 뒤의 번호에서는 동생의 키가 $c$보다 크고 형의 키는 $c$보다 작아집니다. 그 번호 하나에서 "동생이 형 이하"라는 가정과 어긋납니다. 가정 $x_n \le y_n$은 이 한 번호에서만 쓰이므로, 그 번호를 $K$ 이후에서 고를 수 있으면 충분합니다. 그것이 (2)입니다.

(3)은 상수 수열을 (1), (2)에 넣은 것입니다. 수열의 모든 항이 $a$ 이상 $b$ 이하이면 극한도 $a$ 이상 $b$ 이하입니다. 다만 "모든 항이 $0$보다 크다"에서는 "극한이 $0$ 이상"까지만 나옵니다.

## 증명

:::idea
$\lim y_n < \lim x_n$이라 가정하고 두 극한의 중점 $c$를 잡는다. 충분히 큰 번호 $n$에서 $y_n < c < x_n$이 되어 $x_n \le y_n$에 어긋난다.
:::

:::hint
[[order-properties-of-reals|실수의 순서의 성질]]의 (8)에 의해 $L' < L$이면 $L' < c < L$인 $c = \dfrac{L' + L}{2}$가 있다. $\varepsilon$을 $L - c$와 $c - L'$로 잡아 [[limit-of-sequence|수열의 극한]]의 (1)을 쓴다.
:::

:::hint
(3)은 모든 항이 $a$인 상수 수열을 (2)의 한쪽 수열로 쓴다.
:::

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (1)의 (v)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (10)"은 [[absolute-value]]의 번호, "극한 (1)"은 [[limit-of-sequence]]의 번호이다. [[limit-is-unique]]의 기호의 약속에 의해 $L = \lim_{n \to \infty} x_n$은 $(x_n)$이 $L$로 수렴한다는 뜻이다.

**2의 증명.** $L = \lim_{n \to \infty} x_n$, $L' = \lim_{n \to \infty} y_n$으로 둔다. $L' < L$이라 가정하고 모순을 이끈다.

순서 성질 (8)에 의해 $c = \dfrac{L' + L}{2}$는 $L' < c < L$을 만족한다. $\varepsilon_1 = L - c$, $\varepsilon_2 = c - L'$으로 두면 순서 성질 (3)의 (i)에 의해 $0 < \varepsilon_1$이고 $0 < \varepsilon_2$이다. 또 (K12)의 (iv), (K9), (K2), (K8)의 (ii), (K1), (K4)에 의해
$$
L - \varepsilon_1 = L + \bigl((-L) + c\bigr) = \bigl(L + (-L)\bigr) + c = c
$$
이고, (K1), (K2), (K8)의 (ii), (K4)에 의해
$$
L' + \varepsilon_2 = L' + \bigl((-L') + c\bigr) = \bigl(L' + (-L')\bigr) + c = c
$$
이다. 첫 식의 첫 등호는 $-(L + (-c)) = (-L) + (-(-c)) = (-L) + c$를 쓴 것이다.

$(x_n)$이 $L$로 수렴하므로 극한 (1)을 $\varepsilon_1$에 쓰면, $M_1$ 이상인 모든 자연수 $n$에서 $L - \varepsilon_1 < x_n$, 곧 $c < x_n$인 자연수 $M_1$이 있다. $(y_n)$이 $L'$으로 수렴하므로 극한 (1)을 $\varepsilon_2$에 쓰면, $M_2$ 이상인 모든 자연수 $n$에서 $y_n < L' + \varepsilon_2$, 곧 $y_n < c$인 자연수 $M_2$가 있다. $M = \max\{\max\{M_1, M_2\}, K\}$로 두면 절댓값 (10)에 의해 $M$은 $M_1$, $M_2$, $K$ 가운데 하나이므로 자연수이고, $M_1 \le M$, $M_2 \le M$, $K \le M$이다(순서 성질 (1)의 (v)).

$n = M$에서 $c < x_M$이고 $y_M < c$이며, 가정에 의해 $x_M \le y_M$이다. 순서 성질 (1)의 (v)를 $c < x_M \le y_M$에 쓰면 $c < y_M$이고, 다시 $c < y_M$과 $y_M < c$에 (W2)를 쓰면 $c < c$이다. 이것은 (W1)($c < c$와 $c = c$는 함께 성립하지 않는다)에 어긋난다. 따라서 $L' < L$은 성립하지 않고, 순서 성질 (1)의 (iii)에 의해 $L \le L'$이다.

**1의 증명.** 자연수 $n$은 ([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술에 의해) 양의 정수이므로 [[prime-number]]의 (Z1)과 순서 성질 (10)에 의해 $1 \le n$이다. 따라서 (1)의 가정 아래에서 $1$ 이상인 모든 자연수 $n$에서 $x_n \le y_n$이고, (2)를 $K = 1$로 쓰면 결론을 얻는다.

**3의 증명.** 어떤 자연수 $K$ 이상인 모든 자연수 $n$에서 $a \le x_n$이라 하자("모든 자연수 $n$에서"인 경우는 1의 증명에서처럼 $K = 1$이다). 모든 항이 $a$인 상수 수열은 [[basic-limits]]의 (1)에 의해 $a$로 수렴하고, $K$ 이상인 모든 $n$에서 그 $n$번째 항 $a$는 $x_n$ 이하이다. (2)를 이 상수 수열과 $(x_n)$에 쓰면 $a = \lim_{n \to \infty} a \le \lim_{n \to \infty} x_n$이다.

$K$ 이상인 모든 자연수 $n$에서 $x_n \le b$이면, 같은 방식으로 (2)를 $(x_n)$과 모든 항이 $b$인 상수 수열에 써서 $\lim_{n \to \infty} x_n \le \lim_{n \to \infty} b = b$이다. $a \le x_n \le b$이면 두 결론을 함께 얻고, $0 \le x_n$인 경우는 $a = 0$인 경우이다. $\blacksquare$
:::

## 예시와 반례

:::example[유계인 수렴 수열의 극한]
$(x_n)$이 수렴하는 수열이면 [[convergent-sequence-is-bounded|수렴하는 수열이 유계라는 정리]]의 (2)에 의해 모든 자연수 $n$에서 $|x_n| \le B$인 실수 $B$가 있습니다. 이런 $B$를 하나 잡으면 극한도 $|\lim_{n \to \infty} x_n| \le B$를 만족합니다.

[[absolute-value|절댓값]]의 (7)에 의해 모든 $n$에서 $-B \le x_n \le B$이므로, 이 항목의 (3)을 $a = -B$, $b = B$에 쓰면 $-B \le \lim_{n \to \infty} x_n \le B$입니다. 다시 절댓값의 (7)에 의해 $|\lim_{n \to \infty} x_n| \le B$입니다. 항을 누르는 수는 극한도 누릅니다.
:::

:::counterexample[엄격한 부등식은 보존되지 않는다]
모든 항이 $0$인 수열 $(x_n)$과 $n$번째 항이 $n^{-1}$인 수열 $(y_n)$을 생각합니다. [[order-properties-of-reals]]의 (10)에 의해 모든 $n$에서 $0 < n^{-1}$, 곧 $x_n < y_n$입니다. 그러나 [[basic-limits]]의 (1), (2)에 의해 $\lim_{n \to \infty} x_n = 0 = \lim_{n \to \infty} y_n$이고, (W1)에 의해 $0 < 0$은 성립하지 않으므로 $\lim_{n \to \infty} x_n < \lim_{n \to \infty} y_n$은 거짓입니다.

같은 수열 $(y_n)$은 (3)에서도 "$<$"가 지켜지지 않음을 보여 줍니다. 모든 항이 $0$보다 크지만 극한은 $0$보다 크지 않습니다. 모든 $n$에서 $x_n < y_n$이면 결론으로 얻는 것은 $\lim_{n \to \infty} x_n \le \lim_{n \to \infty} y_n$뿐입니다.
:::

## 확인 질문

:::check[수렴하는 수열 $(x_n)$이 $5$ 이상인 모든 자연수 $n$에서 $x_n \le -1$을 만족한다. 극한은 양수, $0$, 음수 가운데 어느 것인가?]
음수입니다. 처음 네 항에는 아무 조건이 없지만, 이 항목의 (3)의 마지막 문장을 $K = 5$, $b = -1$로 쓰면 $\lim_{n \to \infty} x_n \le -1$입니다. [[order-properties-of-reals]]의 (5)의 (ii), (3)의 (ii)에 의해 $-1 < 0$이므로 그 항목의 (1)의 (v)에 의해 $\lim_{n \to \infty} x_n < 0$입니다.
:::

:::check[모든 항이 $1$ 이상 $3$ 이하인 수렴하는 수열을 모두 생각할 때, 그 극한이 될 수 있는 실수는 무엇인가?]
$1 \le c \le 3$인 실수 $c$ 전체입니다. 이 항목의 (3)에 의해 그런 수열의 극한 $c$는 $1 \le c \le 3$을 만족합니다. 거꾸로 $1 \le c \le 3$인 실수 $c$가 주어지면 모든 항이 $c$인 상수 수열은 모든 항이 $1$ 이상 $3$ 이하이고 [[basic-limits]]의 (1)에 의해 $c$로 수렴합니다.
:::
