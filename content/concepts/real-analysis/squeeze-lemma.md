---
title: 조임 정리
title_en: Squeeze Lemma
aliases: [샌드위치 정리, 압착 정리, squeeze lemma, squeeze theorem, sandwich theorem]
kind: lemma
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 모든 n 에서 a_n ≤ x_n ≤ b_n 이고 두 수열 (a_n), (b_n) 이 같은 실수 L 로 수렴하면 (x_n) 도 L 로 수렴한다. 부등식이 어떤 번호 이후에만 성립해도 같다.
requires: [natural-numbers-are-infinite, prime-number, even-and-odd, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, sequence, limit-of-sequence, limit-is-unique, basic-limits]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.2.1절 Lemma 2.2.1 과 그 증명 (p.61), Example 2.2.2 (p.61–62)
    checked: original
    note: "출처의 Lemma 2.2.1(p.61)은 모든 n ∈ ℕ 에서 a_n ≤ x_n ≤ b_n 이고 {a_n}, {b_n} 이 수렴하며 lim a_n = lim b_n 이면 {x_n} 이 수렴하고 lim x_n = lim a_n = lim b_n 이라는 것이고, 이 항목의 (1)이다. 이 항목은 공통의 극한을 L 로 두어 'lim a_n = L 이고 lim b_n = L'로 적었다. 출처의 증명은 M := max{M_1, M_2} 로 두고 x − ε < a_n ≤ x_n ≤ b_n < x + ε 을 얻는다. 이 항목의 증명도 같은 경로이며, 부등식이 K 이상인 n 에서만 성립하는 (2)를 먼저 증명하고 max 를 두 번 겹쳐 세 번호의 최대를 잡는다. (2)는 출처에 없다(검색한 범위). 출처의 Example 2.2.2(p.61–62)는 상수 수열 0 과 1/n 사이에 1/(n√n) 을 끼워 극한이 0 임을 보인다. 예시 '짝수 번째에만 1/n 인 수열'은 같은 두 바깥 수열을 쓰는 같은 발상이다. 가운데 수열을 홀짝으로 나눠 짝수 번째에 1/n 을 두는 꼴은 출처의 연습문제 2.1.15(p.59, 홀수 n 에서 n, 짝수 n 에서 1/n)의 수열과 닮았고, 출처 p.58(Definition 2.1.16 뒤)의 '1, 0, 1/3, 0, 1/5, … 는 {1/n} 의 부분수열이 아니다'의 수열과는 홀짝만 바뀐 꼴이다. 반례(바깥 두 극한이 다른 경우)와 확인 질문은 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
수열, 수렴과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이다. $(a_n)$, $(x_n)$, $(b_n)$을 수열, $L$을 실수라 하자.

1. (**조임 정리**, squeeze lemma) 모든 자연수 $n$에서 $a_n \le x_n \le b_n$이고 $\lim_{n \to \infty} a_n = L$, $\lim_{n \to \infty} b_n = L$이면, $(x_n)$은 수렴하고 $\lim_{n \to \infty} x_n = L$이다.
2. (어떤 번호 이후에만 성립하는 경우) 어떤 자연수 $K$가 있어 $K$ 이상인 모든 자연수 $n$에서 $a_n \le x_n \le b_n$이고 $\lim_{n \to \infty} a_n = L$, $\lim_{n \to \infty} b_n = L$이면, $(x_n)$은 수렴하고 $\lim_{n \to \infty} x_n = L$이다.
:::

:::english
Sequences, convergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, on the limit of a sequence, and on uniqueness of limits. Let $(a_n)$, $(x_n)$, $(b_n)$ be sequences and $L$ a real number.

1. (**Squeeze lemma**) If $a_n \le x_n \le b_n$ for every natural number $n$ and $\lim_{n \to \infty} a_n = L$, $\lim_{n \to \infty} b_n = L$, then $(x_n)$ converges and $\lim_{n \to \infty} x_n = L$.
2. (When it holds only from some index on) If there is a natural number $K$ such that $a_n \le x_n \le b_n$ for every natural number $n$ with $n \ge K$, and $\lim_{n \to \infty} a_n = L$, $\lim_{n \to \infty} b_n = L$, then $(x_n)$ converges and $\lim_{n \to \infty} x_n = L$.
:::

## 직관

두 사람이 양쪽에서 팔짱을 끼고 한 사람을 데려간다고 해 봅시다. 양쪽 두 사람이 같은 문으로 들어가면, 가운데 사람도 그 문으로 들어갈 수밖에 없습니다. 양쪽의 두 사람이 $(a_n)$과 $(b_n)$, 가운데 사람이 $(x_n)$, 문이 극한 $L$입니다. 비유가 맞지 않는 곳은, 수열은 문에 "들어가는" 것이 아니라 어느 번호부터 $L$의 $\varepsilon$ 근처에 머문다는 점입니다.

증명은 이것을 그대로 적습니다. 어느 번호부터 $a_n$이 $L - \varepsilon$보다 크고 $b_n$이 $L + \varepsilon$보다 작으면, 그 사이에 끼인 $x_n$도 $L - \varepsilon$과 $L + \varepsilon$ 사이에 있습니다. 두 바깥 수열의 극한이 **같다**는 가정은 이 단계에서 쓰입니다. 두 극한이 다르면 $a_n$과 $b_n$ 사이의 폭이 $0$에 가까워지지 않아 $x_n$이 한 수 근처로 모이지 않을 수 있습니다(아래 반례).

극한은 앞쪽의 유한 개 항에 상관하지 않으므로, 부등식도 어느 번호 이후에만 성립하면 충분합니다. 그것이 (2)입니다.

## 증명

:::idea
$\varepsilon$이 주어지면 $a_n$과 $b_n$이 모두 $L$의 $\varepsilon$ 근처에 있게 되는 번호를 잡고, 그 번호와 $K$ 가운데 큰 것 이후에서 $L - \varepsilon < a_n \le x_n \le b_n < L + \varepsilon$을 쓴다.
:::

:::hint
[[limit-of-sequence|수열의 극한]]의 (1)에 의해 $|a_n - L| < \varepsilon$은 $L - \varepsilon < a_n < L + \varepsilon$과 같다. $a_n$에서는 왼쪽 부등식을, $b_n$에서는 오른쪽 부등식을 쓴다.
:::

:::hint
세 번호 $M_1$, $M_2$, $K$를 모두 넘는 번호는 두 수의 최대를 두 번 겹쳐 $\max\{\max\{M_1, M_2\}, K\}$로 잡는다.
:::

:::proof
"순서 성질 (1)의 (v)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (10)"은 [[absolute-value]]의 번호, "극한 (1)"은 [[limit-of-sequence]]의 번호이다. [[limit-is-unique]]의 기호의 약속에 의해 "$\lim_{n \to \infty} a_n = L$"은 $(a_n)$이 $L$로 수렴한다는 뜻이다.

**2의 증명.** 양의 실수 $\varepsilon$을 잡는다. $(a_n)$이 $L$로 수렴하므로 극한 (1)에 의해, $M_1$ 이상인 모든 자연수 $n$에서 $L - \varepsilon < a_n < L + \varepsilon$인 자연수 $M_1$이 있다. 같은 이유로 $M_2$ 이상인 모든 자연수 $n$에서 $L - \varepsilon < b_n < L + \varepsilon$인 자연수 $M_2$가 있다. $M_3 = \max\{M_1, M_2\}$, $M = \max\{M_3, K\}$로 둔다. 절댓값 (10)에 의해 $M_3$은 $M_1$이거나 $M_2$이고 $M$은 $M_3$이거나 $K$이므로 $M$은 자연수이며, $M_1 \le M_3 \le M$, $M_2 \le M_3 \le M$, $K \le M$이다.

$M$ 이상인 자연수 $n$을 잡는다. 순서 성질 (1)의 (v)에 의해 $M_1 \le n$, $M_2 \le n$, $K \le n$이다. 따라서 $L - \varepsilon < a_n$이고 $b_n < L + \varepsilon$이며, 가정에 의해 $a_n \le x_n \le b_n$이다. 순서 성질 (1)의 (v)를 $L - \varepsilon < a_n \le x_n$에 쓰면 $L - \varepsilon < x_n$이고, $x_n \le b_n < L + \varepsilon$에 쓰면 $x_n < L + \varepsilon$이다. 극한 (1)에 의해 $|x_n - L| < \varepsilon$이다.

$\varepsilon$은 임의의 양의 실수였으므로 $(x_n)$은 $L$로 수렴하고, [[limit-is-unique]]의 기호로 $\lim_{n \to \infty} x_n = L$이다.

**1의 증명.** $K = 1$로 둔다. 자연수 $n$은 ([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술에 의해) 양의 정수이므로 [[prime-number]]의 (Z1)과 순서 성질 (10)에 의해 $1 \le n$이다. 따라서 (1)의 가정 아래에서 $1$ 이상인 모든 자연수 $n$에서 $a_n \le x_n \le b_n$이고, (2)에 의해 결론이 성립한다. $\blacksquare$
:::

## 예시와 반례

:::example[짝수 번째에만 $n^{-1}$인 수열]
자연수 $n$이 짝수이면 $x_n = n^{-1}$, 홀수이면 $x_n = 0$으로 둡니다. [[even-and-odd]]에서 받아들인 사실(모든 정수는 짝수이거나 홀수이고 둘 다인 것은 없다)에 의해 각 항이 하나씩 정해지므로 [[sequence]]의 (1)에 의해 수열입니다. 처음 세 항은 $x_1 = 0$, $x_2 = 2^{-1}$, $x_3 = 0$이므로 $x_1 < x_2$이고 $x_3 < x_2$이어서 단조가 아닙니다.

$a_n = 0$, $b_n = n^{-1}$로 둡니다. [[order-properties-of-reals]]의 (10)에 의해 $0 < n^{-1}$이므로, $n$이 짝수이면 $0 \le n^{-1} \le n^{-1}$이고 홀수이면 $0 \le 0 \le n^{-1}$입니다. 곧 모든 $n$에서 $a_n \le x_n \le b_n$입니다. [[basic-limits]]의 (1), (2)에 의해 $\lim_{n \to \infty} 0 = 0$이고 $\lim_{n \to \infty} n^{-1} = 0$이므로, 이 항목의 (1)에 의해 $\lim_{n \to \infty} x_n = 0$입니다.
:::

:::counterexample[바깥 두 수열의 극한이 다르면 결론이 나오지 않는다]
[[basic-limits]]의 (3)의 수열 $(s_n)$($n$이 짝수이면 $1$, 홀수이면 $-1$)을 생각합니다. 모든 항이 $-1$인 상수 수열과 모든 항이 $1$인 상수 수열 사이에 끼어 있습니다. [[order-properties-of-reals]]의 (5)의 (ii), (3)의 (ii)와 (W2)에 의해 $-1 < 1$이므로 모든 $n$에서 $-1 \le s_n \le 1$이기 때문입니다. 두 상수 수열은 각각 $-1$과 $1$로 수렴하지만([[basic-limits]]의 (1)), [[order-properties-of-reals]]의 (1)의 (i)에 의해 $-1 \ne 1$이고, $(s_n)$은 발산합니다([[basic-limits]]의 (3)). 두 바깥 수열의 극한이 같다는 가정은 뺄 수 없습니다.
:::

## 확인 질문

:::check[실수 $L$과 수열 $(x_n)$이 모든 $n$에서 $L \le x_n \le L + n^{-1}$을 만족하면 $(x_n)$은 수렴하는가?]
수렴하고 극한은 $L$입니다. $a_n = L$로 두면 [[basic-limits]]의 (1)에 의해 $\lim_{n \to \infty} a_n = L$입니다. $b_n = L + n^{-1}$인 수열도 $L$로 수렴함을 정의로 확인합니다. 양의 실수 $\varepsilon$에 대하여 [[basic-limits]]의 (2)에 의해 $M$ 이상인 모든 자연수 $n$에서 $|n^{-1} - 0| < \varepsilon$인 자연수 $M$이 있습니다. (K1), (K2)와 (K8)의 (ii), (K4)에 의해 $b_n - L = n^{-1} = n^{-1} - 0$이므로 그런 $n$에서 $|b_n - L| < \varepsilon$입니다. 이 항목의 (1)에 의해 $\lim_{n \to \infty} x_n = L$입니다.
:::

:::check[모든 $n$에서 $a_n \le x_n$이고 $\lim_{n \to \infty} a_n = 0$이기만 하면 $(x_n)$은 수렴하는가?]
그렇다고 할 수 없습니다. $a_n = 0$, $x_n = n$으로 두면 [[order-properties-of-reals]]의 (10)에 의해 모든 $n$에서 $0 < n$이므로 $a_n \le x_n$이고 $\lim_{n \to \infty} a_n = 0$([[basic-limits]]의 (1))이지만, $(x_n)$은 발산합니다([[basic-limits]]의 (4)). 조임 정리에는 위에서 누르는 수열 $(b_n)$도 필요합니다.
:::
