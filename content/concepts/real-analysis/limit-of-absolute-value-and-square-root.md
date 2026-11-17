---
title: 절댓값과 제곱근의 극한
title_en: Limits of Absolute Values and Square Roots
aliases: [절댓값의 극한, 제곱근의 극한, limit of absolute value, limit of square root]
kind: proposition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 수렴하는 수열의 절댓값의 수열은 극한의 절댓값으로 수렴한다. 모든 항이 0 이상이고 수렴하는 수열은 극한도 0 이상이고, 제곱근의 수열은 극한의 제곱근으로 수렴한다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, square-root-exists, sequence, limit-of-sequence, limit-is-unique, basic-limits, limits-preserve-inequalities, comparison-with-null-sequence, limit-of-sum-and-product]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.2.2절 Proposition 2.2.6 과 그 증명 (p.65), Proposition 2.2.7 과 그 증명 (p.65–66), Proposition 2.2.7 뒤의 예 (p.66)
    checked: original
    note: "출처의 Proposition 2.2.6(p.65)은 모든 n 에서 x_n ≥ 0 인 수렴하는 수열에 대해 lim √x_n = √(lim x_n) 이라는 것이고, 출처는 진술 바로 뒤에서 Corollary 2.2.4 로 lim x_n ≥ 0 임을 먼저 보아야 한다고 적는다. 이 항목의 (2)이다. 출처의 증명은 극한 x 가 0 인 경우를 x_n < ε² 에서 √x_n < ε 으로 끝내고, x > 0 인 경우는 |√x_n − √x| ≤ |x_n − x|/√x 까지 보인 뒤 '나머지는 독자에게 맡긴다'고 한다. 이 항목은 그 나머지를 comparison-with-null-sequence 의 (3)과 limit-of-sum-and-product 의 (5)로 마쳤고, x = 0 인 경우는 square-root-exists 의 (2)(a < b 인 것은 정확히 √a < √b 일 때)로 √x_n < √(εε) = ε 을 얻었다. 출처의 Proposition 2.2.7(p.65–66)은 수렴하는 수열의 절댓값의 수열이 수렴하고 극한이 극한의 절댓값이라는 것이고, 출처는 역삼각부등식을 적은 뒤 '세부는 독자에게 맡긴다'고 한다. 이 항목의 (1)이고 같은 부등식으로 증명했다. 출처는 2.2.6 뒤에서 k 제곱근도 비슷하게 된다고 하고 연습문제 2.2.10(Challenging)으로 두는데, 이 항목은 k 제곱근을 다루지 않는다. 예시 '√(4 + n⁻¹)'은 출처 p.66 의 예 √(1 + 1/n − 100/n²) → 1 과 같은 발상이다. 반례 '음수인 항'과 확인 질문은 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
수열, 수렴과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, 절댓값은 [[absolute-value]], 제곱근 $\sqrt{a}$($0 \le a$)는 [[square-root-exists]]의 것이다. 아래의 수열은 [[sequence]]의 (1)로 정한 것이다. $(x_n)$을 수렴하는 수열이라 하자.

1. (절댓값) $n$번째 항이 $|x_n|$인 수열은 수렴하고 극한은 $\bigl|\lim_{n \to \infty} x_n\bigr|$이다.
2. (제곱근) 모든 자연수 $n$에서 $0 \le x_n$이면 $0 \le \lim_{n \to \infty} x_n$이고, $n$번째 항이 $\sqrt{x_n}$인 수열은 수렴하며 극한은 $\sqrt{\lim_{n \to \infty} x_n}$이다.
:::

:::english
Sequences, convergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, on the limit of a sequence, and on uniqueness of limits; the absolute value is the one in the entry on absolute value, and the square root $\sqrt{a}$ ($0 \le a$) is the one in the entry on the existence of square roots. The sequences below are defined by item (1) of the entry on sequences. Let $(x_n)$ be a convergent sequence.

1. (Absolute value) The sequence whose $n$th term is $|x_n|$ converges, and its limit is $\bigl|\lim_{n \to \infty} x_n\bigr|$.
2. (Square root) If $0 \le x_n$ for every natural number $n$, then $0 \le \lim_{n \to \infty} x_n$, and the sequence whose $n$th term is $\sqrt{x_n}$ converges with limit $\sqrt{\lim_{n \to \infty} x_n}$.
:::

## 직관

절댓값과 제곱근은 가까운 수를 가까운 수로 보냅니다. 절댓값은 두 수의 거리를 늘리지 않으므로([[triangle-inequality|역삼각부등식]]), $x_n$이 $L$에 가까우면 $|x_n|$도 $|L|$에 그만큼 이상 가깝습니다. 제곱근은 $L > 0$이면 $\sqrt{x_n} - \sqrt{L} = (x_n - L)/(\sqrt{x_n} + \sqrt{L})$로 써서 거리가 많아야 $1/\sqrt{L}$배가 됨을 봅니다. 비유하면, 목적지에 가까워지는 차를 비추는 그림자도 목적지의 그림자에 가까워진다는 것입니다. 비유가 맞지 않는 곳은, 실제 그림자는 물체보다 길어질 수 있지만 절댓값은 거리를 늘리지 않는다는 점입니다.

$L = 0$은 따로 다룹니다. 위의 나눗셈에서 분모 $\sqrt{L}$이 $0$이 되기 때문입니다. 이때는 "$x_n < \varepsilon\varepsilon$이면 $\sqrt{x_n} < \varepsilon$"을 씁니다. 가정 $0 \le x_n$은 $\sqrt{x_n}$이 뜻을 갖게 하고, [[limits-preserve-inequalities|극한과 부등식]]의 (3)을 거쳐 $\sqrt{L}$이 뜻을 갖게 합니다.

## 증명

:::idea
(1)은 $\bigl|\,|x_n| - |L|\,\bigr| \le |x_n - L|$과 [[comparison-with-null-sequence|0 으로 가는 수열과의 비교]]의 (3)이다. (2)는 $L = 0$이면 제곱근의 순서 보존으로, $L > 0$이면 $|\sqrt{x_n} - \sqrt{L}| \le |x_n - L| / \sqrt{L}$로 보인다.
:::

:::hint
$0 \le a$, $0 \le b$이면 $(\sqrt{a} - \sqrt{b})(\sqrt{a} + \sqrt{b}) = a - b$이다.
:::

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (6)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (3)"은 [[absolute-value]]의 번호, "제곱근 (1)"은 [[square-root-exists]]의 번호, "비교 (3)"은 [[comparison-with-null-sequence]]의 번호, "사칙연산 (5)"는 [[limit-of-sum-and-product]]의 번호이다. $L = \lim_{n \to \infty} x_n$으로 둔다. (K4), (K8)의 (ii)에 의해 $-0 = 0$이므로 모든 실수 $t$에서 $t - 0 = t$이다.

**1의 증명.** 자연수 $n$마다 [[triangle-inequality|삼각부등식]]의 (2)에 의해 $\bigl|\,|x_n| - |L|\,\bigr| \le |x_n - L|$이다. 비교 (1)에 의해 $n$번째 항이 $|x_n - L|$인 수열은 $0$으로 수렴하므로, 비교 (3)을 수열 $(|x_n|)$, 실수 $|L|$, $a_n = |x_n - L|$, $K = 1$에 쓰면 $n$번째 항이 $|x_n|$인 수열은 $|L|$로 수렴한다.

**2의 증명.** [[limits-preserve-inequalities|극한과 부등식]]의 (3)에 의해 $0 \le L$이므로 $\sqrt{L}$이 뜻을 갖는다. 순서 성질 (1)의 (iii)에 의해 $L \le 0$이거나 $0 < L$이고, $L \le 0$이면 순서 성질 (1)의 (ii)에 의해 $L = 0$이다.

($L = 0$인 경우) $0 \cdot 0 = 0$((K9))이고 $0 \le 0$이므로 제곱근 (1)의 유일성에 의해 $\sqrt{0} = 0$이다. 양의 실수 $\varepsilon$을 잡는다. (W4)에 의해 $0 < \varepsilon\varepsilon$이므로, $M$ 이상인 모든 자연수 $n$에서 $|x_n - 0| < \varepsilon\varepsilon$인 자연수 $M$이 있다. 그런 $n$에서 절댓값 (6)에 의해 $x_n = x_n - 0 \le |x_n - 0|$이므로 순서 성질 (1)의 (v)에 의해 $x_n < \varepsilon\varepsilon$이다. $0 \le x_n$, $0 \le \varepsilon\varepsilon$이므로 제곱근 (2)에 의해 $\sqrt{x_n} < \sqrt{\varepsilon\varepsilon}$이고, $0 \le \varepsilon$이므로 제곱근 (2)에 의해 $\sqrt{\varepsilon\varepsilon} = \varepsilon$이다. 제곱근 (1)에 의해 $0 \le \sqrt{x_n}$이므로 절댓값 (1)에 의해 $|\sqrt{x_n} - \sqrt{0}| = |\sqrt{x_n}| = \sqrt{x_n} < \varepsilon$이다. 따라서 $n$번째 항이 $\sqrt{x_n}$인 수열은 $0 = \sqrt{0}$으로 수렴한다.

($0 < L$인 경우) 제곱근 (1)에 의해 $0 < \sqrt{L}$이다. 자연수 $n$을 잡고 $a = \sqrt{x_n}$, $b = \sqrt{L}$로 둔다. 제곱근 (1)에 의해 $0 \le a$이므로 순서 성질 (2)의 (i)과 (K1), (K4)에 의해 $b \le a + b$이고, 순서 성질 (1)의 (v)에 의해 $0 < a + b$이다. (K1)–(K3), (K12)의 (i), (ii)와 (K8)의 (ii), (K4)로 전개하면
$$
(a - b)(a + b) = aa + ab - ba - bb = aa - bb = x_n - L
$$
이므로, $a + b \ne 0$이고 (K8)의 (iii)에 의해 $a - b = (x_n - L)(a + b)^{-1}$이다. $0 < b \le a + b$이므로, $b < a + b$이면 순서 성질 (6)의 (ii)에 의해, $b = a + b$이면 그대로 $(a + b)^{-1} \le b^{-1}$이다. 절댓값 (4), (9)와 (1)(양수의 절댓값은 그 수), 순서 성질 (4)의 (iii)에 의해
$$
|\sqrt{x_n} - \sqrt{L}| = |x_n - L|\,(a + b)^{-1} \le |x_n - L|\,b^{-1} = (\sqrt{L})^{-1}\,|x_n - L|
$$
이다((K1)). 비교 (1)에 의해 $n$번째 항이 $|x_n - L|$인 수열은 $0$으로 수렴하고, 사칙연산 (5)와 (K9)에 의해 $n$번째 항이 $(\sqrt{L})^{-1}|x_n - L|$인 수열은 $(\sqrt{L})^{-1} \cdot 0 = 0$으로 수렴한다. 비교 (3)을 $K = 1$로 쓰면 $n$번째 항이 $\sqrt{x_n}$인 수열은 $\sqrt{L}$로 수렴한다. $\blacksquare$
:::

## 예시와 반례

:::example[$n$번째 항이 $\sqrt{4 + n^{-1}}$인 수열]
[[order-properties-of-reals]]의 (10)에 의해 $0 < n^{-1}$이고 $0 < 4$이므로 그 항목의 (2)의 (iv)에 의해 $0 < 4 + n^{-1}$이고, 제곱근이 뜻을 갖습니다. [[basic-limits]]의 (2)와 [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)에 의해 $n$번째 항이 $4 + n^{-1}$인 수열은 $4 + 0 = 4$로 수렴하므로, 이 항목의 (2)에 의해 $n$번째 항이 $\sqrt{4 + n^{-1}}$인 수열은 $\sqrt{4}$로 수렴합니다. $2 \cdot 2 = 4$이고 $0 \le 2$이므로 [[square-root-exists]]의 (1)의 유일성에 의해 $\sqrt{4} = 2$이고, 극한은 $2$입니다.
:::

:::counterexample[항이 음수이면 제곱근의 수열이 없다]
$n$번째 항이 $-n^{-1}$인 수열은 [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)를 $c = -1$로 써서 $(-1) \cdot 0 = 0$으로 수렴하고, 극한 $0$은 제곱근을 갖습니다. 그러나 [[order-properties-of-reals]]의 (10)과 (3)의 (ii)에 의해 모든 항이 음수이므로 어느 항도 제곱근을 갖지 않고, "$n$번째 항이 $\sqrt{-n^{-1}}$인 수열"은 정해지지 않습니다. (2)의 가정 "모든 $n$에서 $0 \le x_n$"은 극한이 $0$ 이상이라는 것만으로 바꿀 수 없습니다.
:::

## 확인 질문

:::check[$\lim_{n \to \infty} x_n = -3$이면 $n$번째 항이 $|x_n|$인 수열의 극한은?]
$3$입니다. 이 항목의 (1)에 의해 극한은 $|-3|$이고, $-3 < 0$이므로 절댓값의 정의와 (K9)에 의해 $|-3| = -(-3) = 3$입니다.
:::

:::check[$n$번째 항이 $\sqrt{n^{-1}}$인 수열은 수렴하는가?]
$0$으로 수렴합니다. 모든 항 $n^{-1}$이 양수이고 [[basic-limits]]의 (2)에 의해 $\lim_{n \to \infty} n^{-1} = 0$이므로, 이 항목의 (2)에 의해 극한은 $\sqrt{0} = 0$입니다($0 \cdot 0 = 0$과 [[square-root-exists]]의 (1)의 유일성).
:::
