---
title: n제곱근의 극한
title_en: Limits of nth Roots
aliases: [n의 n제곱근의 극한, limit of n-th root of n, lim n^(1/n)]
kind: proposition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 양수 a 에 대하여 n 번째 항이 ⁿ√a 인 수열과, n 번째 항이 ⁿ√n 인 수열은 모두 1 로 수렴한다. 더 일반적으로 양수 a 와 0 이상인 정수 k 에 대하여 ⁿ√(a n^k) 과 그 역수도 1 로 수렴한다. 또 모든 자연수 n 에서 n < 2ⁿ 이고 1 ≤ ⁿ√n < 2 이다.
requires: [mathematical-induction, natural-numbers-are-infinite, prime-number, real-number-arithmetic, real-order-axioms, order-properties-of-reals, archimedean-property, absolute-value, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, basic-limits, squeeze-lemma, limit-of-sum-and-product, ratio-test-for-sequences, nth-root]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.2.4절 Some convergence tests, Lemma 2.2.12 (p.68), Example 2.2.14 (p.70). 2.2.5절 Exercise 2.2.15 (p.72). 2.6.6절 Exercise 2.6.10 a) (p.111). 5.4.3절 Exercise 5.4.9 (p.213). 6.2.4절 Corollary 6.2.13 의 증명 (p.242)
    checked: original
    note: "출처 Example 2.2.14(p.70)는 lim n^{1/n} = 1 을 진술하고, ε > 0 에 대해 n/(1 + ε)ⁿ 의 이웃한 항의 비가 1/(1 + ε) < 1 로 수렴하므로 수열의 비 판정법(Lemma 2.2.12, p.68 — 해석학 입문 ratio-test-for-sequences)에 의해 이 수열이 0 으로 수렴하고, 어떤 M 부터 n < (1 + ε)ⁿ, 곧 n^{1/n} < 1 + ε 이며 n ≥ 1 이므로 n^{1/n} ≥ 1 이라고 증명한다. 이 항목의 (2)의 증명은 이 경로를 따르고, 'n < (1 + ε)ⁿ 이면 ⁿ√n < 1 + ε' 은 nth-root 의 (5)의 (ii)로 근거를 단다. 출처는 n^{1/n} 을 0 이상인 수의 n제곱근(4.4.1절 Corollary 4.4.3 의 기호)으로 쓰고 이 항목은 ⁿ√n 으로 쓴다. 출처는 같은 극한을 Exercise 2.6.10 a)(p.111)에서 n^{1/n} = 1 + b_n 과 (1 + b_n)ⁿ ≥ n(n − 1)b_n²/2 로, Exercise 5.4.9(p.213)에서 로그로 다시 구하게 한다. 출처 6.2.4절 Corollary 6.2.13 의 증명(p.242)이 Example 2.2.14 를 인용해 어떤 N 부터 n^{1/n} < 1 + ε 이라고 쓴다. (1)의 양수 a 의 ⁿ√a 의 극한과 (3)은 이 항목이 (2)와 nth-root 의 성질로 증명한 것이고, (4)의 n < 2ⁿ 은 귀납법으로 보였다. Exercise 2.2.15(p.72)는 lim (n² + 1)^{1/n} = 1 을 묻는데, 확인 질문 'n번째 항이 ⁿ√(n + 1)인 수열의 극한은 무엇인가?'는 n제곱근 안이 다항식인 같은 발상의 물음이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(경계 c = 0, L = 1 의 예 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
수열, 수렴과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, $n$제곱근 $\sqrt[n]{a}$($0 \le a$, $n$은 자연수)는 [[nth-root]]의 것이며, 거듭제곱은 [[power-of-a-real-number]]의 것이다. 각 자연수 $n$마다 $\sqrt[n]{a}$는 하나로 정해진 실수이므로, 아래에서 식으로 쓴 수열은 [[sequence]]의 (1)로 정한 것이다.

1. (양수의 $n$제곱근) $0 < a$인 실수 $a$에 대하여, $n$번째 항이 $\sqrt[n]{a}$인 수열은 $1$로 수렴한다. 곧 $\lim_{n \to \infty} \sqrt[n]{a} = 1$이다.
2. ($n$의 $n$제곱근) $n$번째 항이 $\sqrt[n]{n}$인 수열은 $1$로 수렴한다. 곧 $\lim_{n \to \infty} \sqrt[n]{n} = 1$이다.
3. (상수배와 거듭제곱) $0 < a$인 실수 $a$와 $0$ 이상인 정수 $k$에 대하여, $n$번째 항이 $\sqrt[n]{a n^k}$인 수열과 $n$번째 항이 $\sqrt[n]{(a n^k)^{-1}}$인 수열은 모두 $1$로 수렴한다.
4. (모든 $n$에서의 어림) 모든 자연수 $n$에서 $n < 2^n$이고 $1 \le \sqrt[n]{n} < 2$이다.
:::

:::english
Sequences, convergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, limits of sequences and uniqueness of limits; the $n$th root $\sqrt[n]{a}$ ($0 \le a$, $n$ a natural number) is that of the entry on $n$th roots, and powers are those of the entry on powers of a real number. For each natural number $n$, $\sqrt[n]{a}$ is a uniquely determined real number, so the sequences written by formulas below are defined by item (1) of the entry on sequences.

1. (Roots of a positive number) For a real number $a$ with $0 < a$, the sequence whose $n$th term is $\sqrt[n]{a}$ converges to $1$. That is, $\lim_{n \to \infty} \sqrt[n]{a} = 1$.
2. (The $n$th root of $n$) The sequence whose $n$th term is $\sqrt[n]{n}$ converges to $1$. That is, $\lim_{n \to \infty} \sqrt[n]{n} = 1$.
3. (Constant multiples and powers) For a real number $a$ with $0 < a$ and an integer $k \ge 0$, the sequence whose $n$th term is $\sqrt[n]{a n^k}$ and the sequence whose $n$th term is $\sqrt[n]{(a n^k)^{-1}}$ both converge to $1$.
4. (A bound for every $n$) For every natural number $n$, $n < 2^n$ and $1 \le \sqrt[n]{n} < 2$.
:::

## 직관

$a = 2$로 두고 $\sqrt[n]{2}$를 봅시다. $n$제곱해서 $2$가 되는 수이므로, $n$이 커질수록 그 수는 $1$에 가까워야 합니다. $1$보다 조금이라도 큰 수 $1 + \varepsilon$은 거듭제곱하면 결국 $2$를 넘기 때문입니다. 저금에 비유하면, 매번 같은 비율 $1 + \varepsilon$으로 불어나는 돈은 아무리 비율이 작아도 언젠가 원금의 두 배를 넘습니다. 그래서 $n$번 불려서 정확히 두 배가 되게 하는 비율 $\sqrt[n]{2}$는 $n$이 커지면 $1$에 다가갈 수밖에 없습니다. 비유에서 "두 배"가 $a$에, "불리는 횟수"가 $n$에 해당합니다.

(2)는 $n$제곱근 안의 수 $n$도 함께 커지는데도 극한이 $1$이라는 것입니다. 거듭제곱 $(1 + \varepsilon)^n$은 $n$보다 훨씬 빨리 커지므로, 어느 번호부터는 $n < (1 + \varepsilon)^n$, 곧 $\sqrt[n]{n} < 1 + \varepsilon$이 됩니다. 증명은 이것을 [[ratio-test-for-sequences|수열의 비 판정법]]으로 보입니다.

(3)은 $n$제곱근 안에 양의 상수를 곱하거나 $n$의 거듭제곱을 곱하거나 나누어도 극한이 $1$로 같다는 것입니다. 급수의 근 판정법에서 $(n^2)^{-1}$이나 $n^{-1}$ 같은 항의 $n$제곱근이 모두 $1$로 간다는 것을 이것으로 봅니다. 반대로 $3^n$처럼 $n$제곱으로 자라는 인수가 들어 있으면 극한이 $1$이 아닐 수 있습니다(반례 '3ⁿ n 의 n제곱근').

## 증명

:::idea
$n$제곱근의 부등식을 거듭제곱의 부등식으로 바꾼다. $\sqrt[n]{n} < 1 + \varepsilon$은 $n < (1 + \varepsilon)^n$과 같고, 이것은 $n$번째 항이 $n\bigl((1 + \varepsilon)^n\bigr)^{-1}$인 수열이 $0$으로 가는 데서 나온다. $1 \le a$이면 $a \le n$이 되는 번호부터 $\sqrt[n]{a}$를 $1$과 $\sqrt[n]{n}$ 사이에 끼우고, $a < 1$이면 역수 $a^{-1}$로 돌린다.
:::

:::hint
$n$번째 항이 $n\bigl((1 + \varepsilon)^n\bigr)^{-1}$인 수열의 이웃한 두 항의 비를 계산하고, 그 극한을 구하라.
:::

:::hint
$1 \le a$이면 어떤 번호부터 $a \le n$이다. [[nth-root]]의 (5)로 $\sqrt[n]{a}$를 $1$과 $\sqrt[n]{n}$ 사이에 넣어라. $a < 1$이면 역수 $a^{-1}$로 돌린다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (4)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이며, "거듭제곱 (6)", "근 (5)"처럼 쓴 것은 [[power-of-a-real-number|실수의 거듭제곱]]과 [[nth-root|n제곱근]] 항목의 번호이다. 자연수는 양의 정수이므로([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]) [[prime-number]]의 (Z1)에 의해 $1$ 이상이고, 순서 성질 (10)에 의해 양의 실수이다. 이 증명에서 "극한 (5)"처럼 쓴 것은 [[limit-of-sum-and-product]]의 번호이다.

**4의 증명.** $n < 2^n$을 시작점이 $1$인 [[mathematical-induction|수학적 귀납법]]으로 보인다. 기초 단계: 거듭제곱 (1)에 의해 $2^1 = 2$이고 $1 < 2$이다. 귀납 단계: $n < 2^n$이라 하자. $1 < 2$이므로 거듭제곱 (6)의 (iv)에 의해 $1 \le 2^n$이다. 순서 성질 (2)의 (ii), (i)과 (K3), (K4), (K7), 거듭제곱 (1)에 의해
$$
\begin{aligned}
n + 1 &< 2^n + 1 \le 2^n + 2^n \\
&= 2^n \cdot 2 = 2^{n+1}
\end{aligned}
$$
이고, 순서 성질 (1)의 (v)에 의해 $n + 1 < 2^{n+1}$이다. 따라서 모든 자연수 $n$에서 $n < 2^n$이다. $0 \le 2$이므로 근 (5)의 (ii)를 $r = 2$에 쓰면 $\sqrt[n]{n} < 2$이다. 또 $1 \le n$이고 거듭제곱 (2)의 (iv)에 의해 $1^n = 1$이므로, 근 (5)의 (ii)를 $r = 1$에 쓰면 $1 \le \sqrt[n]{n}$이다.

**2의 증명.** $\varepsilon$을 양의 실수라 하고 $q = 1 + \varepsilon$으로 두자. 순서 성질 (2)의 (ii)와 (K4)에 의해 $1 < q$이고, 순서 성질 (5)의 (ii)와 (1)의 (v)에 의해 $0 < q$이다. 거듭제곱 (6)의 (i)에 의해 모든 자연수 $n$에서 $0 < q^n$이므로 순서 성질 (6)의 (i)에 의해 $0 < (q^n)^{-1}$이고, 순서 성질 (4)의 (iv)와 [[real-order-axioms]]의 (W4)에 의해
$$
x_n = n\,(q^n)^{-1}
$$
은 양수이다. [[sequence]]의 (1)에 의해 $(x_n)$은 수열이고, 순서 성질 (1)의 (i)에 의해 모든 $n$에서 $x_n \ne 0$이며, [[absolute-value]]의 정의에 의해 $|x_n| = x_n$이다.

이웃한 두 항의 비를 계산한다. 거듭제곱 (1)에 의해 $q^{n+1} = q^n q$이므로 (K12)의 (vi)에 의해 $(q^{n+1})^{-1} = (q^n)^{-1} q^{-1}$이다. 또 (K12)의 (vi)와, $(q^n)^{-1} \cdot q^n = 1$이므로 (K8)의 (iii)에 의해 $\bigl((q^n)^{-1}\bigr)^{-1} = q^n$이라는 것에 의해 $x_n^{-1} = n^{-1} q^n$이다. 따라서 (K1), (K2), (K3), (K4), (K8)에 의해
$$
\begin{aligned}
&|x_{n+1}|\,|x_n|^{-1} \\
&\quad = (n + 1)(q^n)^{-1} q^{-1} \cdot n^{-1} q^n \\
&\quad = (n + 1)\,n^{-1}\,q^{-1} \\
&\quad = (1 + n^{-1})\,q^{-1}
\end{aligned}
$$
이다. [[basic-limits]]의 (2)에 의해 $\lim_{n \to \infty} n^{-1} = 0$이므로 극한 (5)를 두 번 쓰면 이 비의 수열은 $(1 + 0)q^{-1} = q^{-1}$로 수렴한다. $0 < 1 < q$이므로 순서 성질 (6)의 (ii)에 의해 $q^{-1} < 1^{-1} = 1$이다((K4)와 (K8)의 (iii)에 의해 $1^{-1} = 1$). 따라서 [[ratio-test-for-sequences|수열의 비 판정법]]의 (1)에 의해 $(x_n)$은 $0$으로 수렴한다.

[[limit-of-sequence]]의 정의를 $1$이라는 양수에 쓰면, 자연수 $M$이 있어 $M$ 이상인 모든 자연수 $n$에서 $|x_n - 0| < 1$, 곧 $n\,(q^n)^{-1} < 1$이다. 양변에 양수 $q^n$을 곱하면 순서 성질 (4)의 (i)과 (K2), (K8), (K4)에 의해 $n < q^n$이다. $0 \le q$이므로 근 (5)의 (ii)를 $r = q$에 쓰면 $\sqrt[n]{n} < q = 1 + \varepsilon$이다. 또 (4)에 의해 $1 \le \sqrt[n]{n}$이다. 따라서 $M$ 이상인 모든 $n$에서 순서 성질 (3)의 (i)과 (2)의 (ii)에 의해 $0 \le \sqrt[n]{n} - 1 < \varepsilon$이고, [[absolute-value]]의 정의에 의해 $\bigl|\sqrt[n]{n} - 1\bigr| < \varepsilon$이다. $\varepsilon$은 임의의 양수였으므로 $n$번째 항이 $\sqrt[n]{n}$인 수열은 $1$로 수렴한다.

**1의 증명.** 순서 성질 (1)의 (iii)에 의해 $1 \le a$이거나 $a < 1$이다.

$1 \le a$인 경우. [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $a < K$인 자연수 $K$가 있다. $K$ 이상인 자연수 $n$에서는 순서 성질 (1)의 (v)에 의해 $a < n$이므로 $a \le n$이고, 근 (5)의 (i)에 의해 $\sqrt[n]{a} \le \sqrt[n]{n}$이다. 또 $1 \le a$이므로 근 (5)의 (ii)를 $r = 1$에 쓰면 ($1^n = 1$) $1 \le \sqrt[n]{a}$이다. 곧 $K$ 이상인 모든 자연수 $n$에서
$$
1 \le \sqrt[n]{a} \le \sqrt[n]{n}
$$
이다. 모든 항이 $1$인 수열은 [[basic-limits]]의 (1)에 의해 $1$로 수렴하고, $n$번째 항이 $\sqrt[n]{n}$인 수열은 (2)에 의해 $1$로 수렴하므로, [[squeeze-lemma|조임 정리]]의 (2)에 의해 $n$번째 항이 $\sqrt[n]{a}$인 수열은 $1$로 수렴한다.

$0 < a < 1$인 경우. 순서 성질 (6)의 (ii)에 의해 $1^{-1} < a^{-1}$, 곧 $1 < a^{-1}$이다. 앞 경우를 $a^{-1}$에 쓰면 $n$번째 항이 $y_n = \sqrt[n]{a^{-1}}$인 수열은 $1$로 수렴한다. 근 (1)에 의해 $0 < y_n$이므로 $y_n \ne 0$이다. $0 < a^{-1}$이고 (K8)의 (iii)에 의해 $(a^{-1})^{-1} = a$이므로, 근 (4)를 $a^{-1}$에 쓰면 $\sqrt[n]{a} = \sqrt[n]{(a^{-1})^{-1}} = y_n^{-1}$이다. 극한 (4)에 의해 이 수열은 $1^{-1} = 1$로 수렴한다.

**3의 증명.** $0 < a$이고 $k \ge 0$이라 하자. 거듭제곱 (6)의 (i)에 의해 $0 < n^k$이므로 (W4)에 의해 $0 < a n^k$이다. 근 (4)와 (2)에 의해
$$
\sqrt[n]{a n^k} = \sqrt[n]{a}\,\sqrt[n]{n^k} = \sqrt[n]{a}\,\bigl(\sqrt[n]{n}\bigr)^k
$$
이다. (2)와 극한 (6)에 의해 $n$번째 항이 $\bigl(\sqrt[n]{n}\bigr)^k$인 수열은 $1^k = 1$로 수렴하고(거듭제곱 (2)의 (iv)), (1)과 극한 (3)에 의해 $n$번째 항이 $\sqrt[n]{a n^k}$인 수열은 $1 \cdot 1 = 1$로 수렴한다. 근 (4)에 의해 $\sqrt[n]{(a n^k)^{-1}} = \bigl(\sqrt[n]{a n^k}\bigr)^{-1}$이고, 근 (1)에 의해 $\sqrt[n]{a n^k} \ne 0$이므로, 극한 (4)에 의해 $n$번째 항이 $\sqrt[n]{(a n^k)^{-1}}$인 수열은 $1^{-1} = 1$로 수렴한다. $\blacksquare$
:::

## 예시와 반례

:::example[5 와 1/5 의 n제곱근]
(1)에 의해 $\lim_{n \to \infty} \sqrt[n]{5} = 1$이고 $\lim_{n \to \infty} \sqrt[n]{1/5} = 1$입니다. 얼마나 가까운지는 [[nth-root]]의 (5)의 (ii)로 거듭제곱의 부등식으로 바꾸어 볼 수 있습니다. $(6/5)^{10} = 60466176/9765625$는 $5 = 48828125/9765625$보다 크므로 $\sqrt[10]{5} < 6/5$입니다. $1 < 5$이므로 [[nth-root]]의 (5)의 (iii)에 의해 $1 < \sqrt[10]{5}$입니다.
:::

:::example[3n² 의 n제곱근과 1/n 의 n제곱근]
(3)을 $a = 3$, $k = 2$에 쓰면 $\lim_{n \to \infty} \sqrt[n]{3n^2} = 1$입니다. (3)을 $a = 1$, $k = 1$에 쓰면 $1 \cdot n^1 = n$이므로 $\lim_{n \to \infty} \sqrt[n]{n^{-1}} = 1$이고, $a = 1$, $k = 2$에 쓰면 $\lim_{n \to \infty} \sqrt[n]{(n^2)^{-1}} = 1$입니다. 두 수열의 항은 $n \ge 2$에서 $1$보다 작지만 극한은 $1$입니다.
:::

:::counterexample[a = 0 인 경우]
(1)은 $0 < a$를 가정합니다. $a = 0$이면 [[nth-root]]의 (1)에 의해 모든 자연수 $n$에서 $\sqrt[n]{0} = 0$이므로, $n$번째 항이 $\sqrt[n]{0}$인 수열은 상수 수열이고 [[basic-limits]]의 (1)에 의해 $0$으로 수렴합니다. 극한은 $1$이 아닙니다.
:::

:::counterexample[3ⁿ n 의 n제곱근]
$n$번째 항이 $\sqrt[n]{3^n n}$인 수열은 $1$로 수렴하지 않습니다. [[nth-root]]의 (4)와 (2)에 의해 $\sqrt[n]{3^n n} = \sqrt[n]{3^n}\,\sqrt[n]{n} = 3\sqrt[n]{n}$이고, (2)와 [[limit-of-sum-and-product]]의 (5)에 의해 이 수열은 $3$으로 수렴합니다. (3)은 $n$제곱근 안에 양의 상수와 $n$의 거듭제곱 $n^k$만 있을 때의 이야기입니다. $3^n$처럼 $n$제곱 꼴인 인수는 [[nth-root]]의 (2)에 의해 $n$제곱근 밖으로 밑 $3$이 나옵니다.
:::

## 확인 질문

:::check[$n$번째 항이 $\sqrt[n]{n + 1}$인 수열의 극한은 무엇인가?]
$1$입니다. 자연수 $n$에서 $n \le n + 1 \le 2n$이므로 [[nth-root]]의 (5)의 (i)과 (4)에 의해 $\sqrt[n]{n} \le \sqrt[n]{n + 1} \le \sqrt[n]{2n} = \sqrt[n]{2}\,\sqrt[n]{n}$입니다. 왼쪽 수열은 (2)에 의해, 오른쪽 수열은 (3)을 $a = 2$, $k = 1$에 써서 $1$로 수렴하므로, [[squeeze-lemma|조임 정리]]의 (1)에 의해 극한은 $1$입니다.
:::

:::check[$\sqrt[n]{2} < 11/10$인 자연수 $n$은 무엇인가?]
정확히 $n \ge 8$입니다. [[nth-root]]의 (5)의 (ii)에 의해 $\sqrt[n]{2} < 11/10$인 것은 정확히 $2 < (11/10)^n$일 때입니다. $(11/10)^7 = 19487171/10^7 < 2$이고 $(11/10)^8 = 214358881/10^8 > 2$입니다. $1 < 11/10$이므로 [[power-of-a-real-number]]의 (6)의 (iv)와 [[sequence]]의 (4)에 의해 $n$번째 항이 $(11/10)^n$인 수열은 단조증가이고, 따라서 $n \le 7$이면 $(11/10)^n \le (11/10)^7 < 2$이며 $n \ge 8$이면 $(11/10)^n \ge (11/10)^8 > 2$입니다.
:::
