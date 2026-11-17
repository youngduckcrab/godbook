---
title: 극한의 유일성
title_en: Uniqueness of Limits
aliases: [수열의 극한은 하나뿐이다, 극한의 기호, lim, uniqueness of limits, limit notation]
kind: theorem
field: real-analysis
msc: ["40A05", "26A03"]
level: undergrad
summary: 수열이 두 실수 L, L′ 으로 수렴하면 L = L′ 이다. 그래서 수렴하는 수열의 극한은 하나뿐이고, 그것을 lim x_n 으로 쓴다.
requires: [real-number-arithmetic, order-properties-of-reals, absolute-value, triangle-inequality, sequence, limit-of-sequence]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.1절 Definition 2.1.2 (p.52), Proposition 2.1.6 (p.53)
    checked: original
    note: "출처의 Proposition 2.1.6(p.53)은 '수렴하는 수열은 극한이 하나뿐이다'이고, 출처는 극한 x, y 와 ε 에 대해 |x_n − x| < ε/2 인 M_1, |x_n − y| < ε/2 인 M_2 를 잡고, n ≥ M_1 이고 n ≥ M_2 인 n 에서 |y − x| ≤ |x_n − x| + |x_n − y| < ε 을 얻은 뒤 '모든 ε > 0 에 대해 |y − x| < ε 이므로 |y − x| = 0' 으로 끝낸다. 이 항목의 증명은 같은 경로이며, n 을 max{M_1, M_2} 로 정하고(출처는 그런 n 을 잡는다고만 쓴다), ε/2 + ε/2 = ε 의 계산과 마지막 단계의 근거(order-properties-of-reals 의 (9))를 적었다. 기호 lim_{n→∞} x_n 은 출처가 Definition 2.1.2(p.52)에서 유일성을 뒤에서 증명한다고 미리 밝히고 도입하는 기호이다. 이 항목은 유일성을 증명한 뒤에 도입한다. 출처는 lim_{n→∞} x_n = x 라고 쓰면 수렴한다는 것과 극한이 x 라는 것 두 가지를 말한다고 적는다(p.53). 이 항목의 기호 문단은 같은 내용이다. 'x_n → L' 같은 다른 기호는 출처의 2.1절에 없어(검색한 범위) 쓰지 않는다. 예시, 반례, 확인 질문은 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
수열과 수렴은 [[sequence]]과 [[limit-of-sequence]]의 것이다. $(x_n)$이 수열이고 $L$, $L'$이 실수일 때, $(x_n)$이 $L$로 수렴하고 $L'$으로도 수렴하면 $L = L'$이다. 따라서 수렴하는 수열은 극한을 정확히 하나 갖는다.

**극한의 기호.** $(x_n)$이 수렴할 때 그 하나뿐인 극한을
$$
\lim_{n \to \infty} x_n
$$
으로 쓰고 "$n$이 한없이 커질 때 $x_n$의 극한"이라 읽는다. 여기서 $\infty$는 수가 아니라 이 기호의 일부이다. 실수 $L$에 대하여 "$\lim_{n \to \infty} x_n = L$"은 정확히 $(x_n)$이 $L$로 수렴한다는 뜻이다. 곧 이 등식은 $(x_n)$이 수렴한다는 것과 그 극한이 $L$이라는 것을 함께 말한다. 발산하는 수열에는 이 기호를 쓰지 않는다. $n$번째 항이 $r_n$인 수열([[sequence]]의 (1))의 극한은 $\lim_{n \to \infty} r_n$으로 쓴다.
:::

:::english
Sequences and convergence are those of the entries on sequences and on the limit of a sequence. If $(x_n)$ is a sequence, $L$ and $L'$ are real numbers, and $(x_n)$ converges to $L$ and also to $L'$, then $L = L'$. Hence a convergent sequence has exactly one limit.

**Notation for the limit.** When $(x_n)$ converges, its unique limit is written
$$
\lim_{n \to \infty} x_n
$$
and read "the limit of $x_n$ as $n$ grows without bound". Here $\infty$ is not a number but part of the symbol. For a real number $L$, "$\lim_{n \to \infty} x_n = L$" means exactly that $(x_n)$ converges to $L$; that is, this equation says both that $(x_n)$ converges and that its limit is $L$. The symbol is not used for divergent sequences. The limit of the sequence whose $n$th term is $r_n$ (item (1) of the entry on sequences) is written $\lim_{n \to \infty} r_n$.
:::

## 직관

한 수열이 $L$에도 $L'$에도 수렴한다면, 충분히 뒤의 항들은 $L$ 가까이에도 $L'$ 가까이에도 있어야 합니다. 두 사람이 같은 버스를 탔는데 한 사람은 "버스가 서울역에 도착한다", 다른 사람은 "부산역에 도착한다"고 말하는 것과 같습니다. 버스가 결국 머무는 곳은 한 곳뿐이고, 두 역 사이가 떨어져 있으면 두 말이 함께 맞을 수 없습니다.

증명은 이 생각을 수로 적습니다. 두 극한 사이의 거리 $|L - L'|$은 어떤 양수 $\varepsilon$보다도 작아지고, 그런 $0$ 이상의 수는 $0$뿐입니다. 비유가 맞지 않는 곳은 수열이 "도착"할 필요가 없다는 점입니다. 수열은 $L$에 한없이 가까워지기만 하면 되고, 증명도 "가까이 있다"만 씁니다.

이 정리 덕분에 "수열의 극한"을 하나의 수로 가리킬 수 있고, 극한을 기호 $\lim$으로 적을 수 있습니다.

## 증명

:::idea
충분히 뒤의 한 항 $x_n$을 잡아 삼각부등식으로 $|L - L'| \le |x_n - L| + |x_n - L'|$을 만들고, 오른쪽의 두 항을 각각 $\varepsilon/2$보다 작게 한다.
:::

:::hint
$\varepsilon$ 대신 $\varepsilon/2$로 수렴의 정의를 두 번 쓰면 $M_1$과 $M_2$가 나온다. 두 조건을 모두 만족하는 $n$으로 무엇을 고르면 되는가?
:::

:::hint
모든 양수 $\varepsilon$에 대해 $|L - L'| < \varepsilon$이면 $|L - L'|$은 무엇인가? [[order-properties-of-reals]]의 (9)를 본다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. "순서 성질 (8)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (3)"은 [[absolute-value]]의 번호, "삼각부등식 (4)"는 [[triangle-inequality]]의 번호이다.

$(x_n)$이 $L$과 $L'$으로 수렴한다고 하자. 양의 실수 $\varepsilon$을 하나 잡는다. 순서 성질 (8)의 둘째 문장에 의해 $0 < \varepsilon/2$이다. [[limit-of-sequence]]의 정의를 $\varepsilon/2$에 쓰면, $n \ge M_1$인 모든 자연수 $n$에서 $|x_n - L| < \varepsilon/2$인 자연수 $M_1$이 있고, $n \ge M_2$인 모든 자연수 $n$에서 $|x_n - L'| < \varepsilon/2$인 자연수 $M_2$가 있다.

$n = \max\{M_1, M_2\}$로 둔다. 절댓값 (10)에 의해 $n$은 $M_1$이거나 $M_2$이므로 자연수이고, $M_1 \le n$이며 $M_2 \le n$이다. 따라서 $|x_n - L| < \varepsilon/2$이고 $|x_n - L'| < \varepsilon/2$이다.

삼각부등식 (4)를 $x = L$, $y = x_n$, $z = L'$에 쓰고 절댓값 (3)의 $|L - x_n| = |x_n - L|$을 쓰면
$$
|L - L'| \le |x_n - L| + |x_n - L'|
$$
이다. 순서 성질 (2)의 (iv)를 $|x_n - L| < \varepsilon/2$와 $|x_n - L'| \le \varepsilon/2$에 쓰면 $|x_n - L| + |x_n - L'| < \varepsilon/2 + \varepsilon/2$이다. (K4), (K3), (K7)의 $1 + 1 = 2$, (K8)의 (iii)(정수 $2$는 (K7)에 의해 $0$이 아니다)에 의해 $\varepsilon \cdot 2^{-1} + \varepsilon \cdot 2^{-1} = \varepsilon \cdot (2^{-1} \cdot 1 + 2^{-1} \cdot 1) = \varepsilon \cdot (2^{-1} \cdot 2) = \varepsilon \cdot 1 = \varepsilon$이다((K1)로 곱의 순서를 바꾼다). 순서 성질 (1)의 (v)에 의해 $|L - L'| < \varepsilon$이고, 따라서 $|L - L'| \le \varepsilon$이다.

$\varepsilon$은 임의의 양의 실수였으므로 모든 양의 실수 $\varepsilon$에 대하여 $|L - L'| \le \varepsilon$이다. 순서 성질 (9)에 의해 $|L - L'| \le 0$이고, 절댓값 (2)에 의해 $0 \le |L - L'|$이므로 같은 (9)의 둘째 문장에 의해 $|L - L'| = 0$이다. 절댓값 (2)에 의해 $L - L' = 0$이고, (K12)의 (v)에 의해 $L = L'$이다.

기호 문단은 이 결과에 기댄다. $(x_n)$이 수렴하면 수렴하는 실수가 있고, 방금 보인 것에 의해 그런 실수는 하나뿐이므로 $\lim_{n \to \infty} x_n$은 실수 하나를 가리킨다. 그 수를 $L_0$이라 하면, $(x_n)$이 $L$로 수렴하는 것은 정확히 $L = L_0$일 때이다. $\blacksquare$
:::

## 예시와 반례

:::example[상수 수열은 다른 수로 수렴하지 않는다]
모든 항이 $4$인 수열을 생각합니다. 양의 실수 $\varepsilon$마다 $M = 1$로 두면 모든 $n$에서 $|4 - 4| = |0| = 0 < \varepsilon$이므로([[absolute-value|절댓값]]의 (2)) 이 수열은 $4$로 수렴합니다. 이 정리에 의해 $4$가 아닌 실수로는 수렴하지 않습니다. 예컨대 $5$로 수렴하는지를 정의로 따로 확인할 필요가 없습니다. 기호로는 $\lim_{n \to \infty} 4 = 4$입니다.
:::

:::counterexample[정의의 "모든 $\varepsilon$"을 "어떤 $\varepsilon$"으로 바꾸면 유일성이 깨진다]
"어떤 양의 실수 $\varepsilon$에 대하여 자연수 $M$이 있어 $n \ge M$이면 $|x_n - L| < \varepsilon$"을 수렴의 정의로 잘못 쓰면, 모든 항이 $0$인 수열은 $L = 0$에 대해서도 $L = 1/2$에 대해서도 이 조건을 만족합니다. $\varepsilon = 1$, $M = 1$로 두면 $|0 - 0| = 0 < 1$이고, [[absolute-value|절댓값]]의 (3)과 (1)에 의해 $|0 - 1/2| = |-(1/2)| = |1/2| = 1/2 < 1$이기 때문입니다([[order-properties-of-reals]]의 (8)에 의해 $0 < 1/2 < 1$). 그 항목의 (1)의 (i)에 의해 $0 \ne 1/2$이므로 "극한"이 둘이 됩니다. 증명에서 $\varepsilon$을 얼마든지 작게 잡을 수 있다는 것이 마지막 단계(순서 성질 (9))에 쓰였습니다.
:::

## 확인 질문

:::check[증명에서 $\varepsilon/2$ 대신 $\varepsilon$으로 $M_1$, $M_2$를 잡으면 무엇이 나오고, 그것으로도 증명을 끝낼 수 있는가?]
같은 계산으로 모든 양수 $\varepsilon$에 대해 $|L - L'| < \varepsilon + \varepsilon$이 나옵니다. 끝낼 수 있습니다. 양수 $\delta$가 주어지면 $\varepsilon = \delta/2$도 양수이고([[order-properties-of-reals]]의 (8)), $\delta/2 + \delta/2 = \delta$이므로 $|L - L'| < \delta$입니다. 그러면 증명의 마지막 단락이 그대로 쓰입니다. $\varepsilon/2$로 시작하는 것은 이 한 단계를 앞으로 옮긴 것입니다.
:::

:::check[두 수열 $(x_n)$, $(y_n)$이 모든 $n$에서 $x_n = y_n$이고, $(x_n)$은 $L$로, $(y_n)$은 $L'$으로 수렴한다. $L = L'$인가?]
그렇습니다. [[sequence]]의 진술(함수의 같음)에 의해 $(x_n) = (y_n)$이므로, $(x_n)$이 $L$과 $L'$ 모두로 수렴하고 이 정리에 의해 $L = L'$입니다.
:::
