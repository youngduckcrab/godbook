---
title: 수열로 본 극한과 연속
title_en: Limits and Continuity Along Sequences
aliases: [수열 판정법, 수열을 따라가는 극한, 연속과 수열의 극한, sequential criterion, sequential continuity, limits along sequences]
kind: proposition
field: real-analysis
msc: ["26A15", "26A03"]
level: undergrad
summary: f 가 c 에서 L 로 수렴하면 c 와 다른 정의역의 점으로 c 로 가는 모든 수열에서 함숫값의 수열이 L 로 수렴하고, f 가 c 에서 연속이면 정의역의 점으로 c 로 가는 모든 수열에서 함숫값의 수열이 f(c) 로 수렴한다. 그 대우로 수열 하나나 둘로 불연속과 극한이 없음을 보인다.
requires: [proof-by-contrapositive, proof-by-contradiction, function, function-composition, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, archimedean-property, sequence, limit-of-sequence, limit-is-unique, basic-limits, limit-of-sum-and-product, power-of-a-real-number, real-valued-function, cluster-point, limit-of-a-function, continuous-function, power-function-is-continuous]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 3.1.3절 Lemma 3.1.7 과 그 증명, 그 뒤 문단 (p.116–117), Example 3.1.8 (p.116–117); 3.2.1절 Proposition 3.2.2 (iii)과 그 증명 (p.122–123); 3.2.3절 Proposition 3.2.9, Example 3.2.10 과 그 뒤 문단 (p.125–126); 연습문제 3.1.11 (p.120), 3.2.13 (p.128)
    checked: original
    note: "출처의 Lemma 3.1.7(p.116)은 'f(x) 가 x → c 에서 L 로 수렴하는 것은 정확히 S \\ {c} 의 점으로 이루어지고 c 로 수렴하는 모든 수열 {x_n} 에서 {f(x_n)} 이 L 로 수렴할 때'이고, Proposition 3.2.2 (iii)(p.122)은 연속에 대한 같은 꼴의 동치이다. 출처는 두 명제를 양방향 동치로 진술하고, 수열에서 극한이나 연속을 끌어내는 방향의 증명에서 각 n 마다 |x_n − c| < 1/n 인 점을 잡는다(p.116, p.123). 이 사이트는 그 방향을 싣지 않는다. 이 항목의 (1), (2)는 두 명제의 나머지 방향이고, 증명 경로(δ 를 잡고 그 δ 에 대한 수열의 번호 M 을 잡는다)는 출처와 같다. (3)의 (i)은 출처의 Proposition 3.2.9(p.125)이고, 출처는 그것이 3.2.2 (iii)에서 바로 나온다고 적는다. (3)의 (ii), (iii)은 출처에 명제로 없다(검색한 범위). 출처의 Example 3.1.8(p.116–117)은 삼각함수의 예에서 함숫값의 수열이 발산하는 수열 하나로 극한이 없음을 보이고(이 항목의 (3)의 (iii)과 같은 쓰임), p.117 에서 '모든 수열'이라는 말을 잊지 말라고 경고한다. 출처의 연습문제 3.1.11(p.120)과 3.2.13(p.128)은 수열에서 극한이나 연속을 끌어내는 방향을 더 강하게 만든 것이고 이 항목은 다루지 않는다. 예시 '계단 함수'는 출처의 Example 3.2.10(p.125; x < 0 이면 −1, x ≥ 0 이면 1)과 같은 꼴의 함수에 같은 수열 −1/n 을 쓴 것이고, 반례 '수열 하나가 f(c) 로 가도'는 그 예 뒤 문단(p.125; f(1/n) = 1 = f(0) 이지만 불연속)과 같은 내용이다. 같은 예시의 두 수열 1/n, −1/n 으로 극한이 없음을 보이는 부분과 예시 '연속함수에 수열 넣기', 확인 질문은 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
수열, 수렴과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, 함수의 수렴은 [[limit-of-a-function]]의 것이며, 연속은 [[continuous-function]]의 것이다. $S$를 $\mathbb{R}$의 부분집합, $f : S \to \mathbb{R}$를 실함수라 하자.

**함숫값의 수열.** 수열 $(x_n)$의 모든 항이 $S$에 속하면, [[function]]의 진술("공역은 선언하기 나름이다")에 의해 함수 $x : \mathbb{N} \to \mathbb{R}$를 $x : \mathbb{N} \to S$로 선언할 수 있고, [[function-composition]]의 합성 $f \circ x : \mathbb{N} \to \mathbb{R}$는 $n$에서의 값이 $f(x_n)$인 수열이다. 이 수열을 $(f(x_n))$으로 쓴다.

1. (극한) $c$가 $S$의 집적점이고 $f$가 $c$에서 $L$로 수렴한다고 하자. 수열 $(x_n)$이 모든 자연수 $n$에서 $x_n \in S$, $x_n \ne c$이고 $c$로 수렴하면, 수열 $(f(x_n))$은 $L$로 수렴한다.
2. (연속) $c \in S$이고 $f$가 $c$에서 연속이라 하자. 수열 $(x_n)$이 모든 자연수 $n$에서 $x_n \in S$이고 $c$로 수렴하면, 수열 $(f(x_n))$은 $f(c)$로 수렴한다.
3. (대우로 쓰기)
   - (i) $c \in S$이고, 모든 항이 $S$에 속하며 $c$로 수렴하는 수열 $(x_n)$ 가운데 $(f(x_n))$이 $f(c)$로 수렴하지 않는 것이 있으면, $f$는 $c$에서 불연속이다.
   - (ii) $c$가 $S$의 집적점이고, 모든 항이 $S - \{c\}$에 속하며 $c$로 수렴하는 두 수열 $(x_n)$, $(y_n)$에서 $(f(x_n))$이 $L$로, $(f(y_n))$이 $L'$으로 수렴하고 $L \ne L'$이면, $f$는 $c$에서 발산한다.
   - (iii) $c$가 $S$의 집적점이고, 모든 항이 $S - \{c\}$에 속하며 $c$로 수렴하는 수열 $(x_n)$에서 $(f(x_n))$이 발산하면, $f$는 $c$에서 발산한다.
:::

:::english
Sequences, convergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, on the limit of a sequence and on uniqueness of limits; convergence of functions is that of the entry on the limit of a function; and continuity is that of the entry on continuous functions. Let $S$ be a subset of $\mathbb{R}$ and $f : S \to \mathbb{R}$ a real-valued function.

**The sequence of function values.** If every term of a sequence $(x_n)$ belongs to $S$, then by the entry on functions ("the codomain is a matter of declaration") the function $x : \mathbb{N} \to \mathbb{R}$ may be declared as $x : \mathbb{N} \to S$, and the composition $f \circ x : \mathbb{N} \to \mathbb{R}$ from the entry on composition is the sequence whose value at $n$ is $f(x_n)$. We write this sequence as $(f(x_n))$.

1. (Limits) Suppose $c$ is a cluster point of $S$ and $f$ converges to $L$ at $c$. If a sequence $(x_n)$ satisfies $x_n \in S$ and $x_n \ne c$ for every natural number $n$ and converges to $c$, then the sequence $(f(x_n))$ converges to $L$.
2. (Continuity) Suppose $c \in S$ and $f$ is continuous at $c$. If a sequence $(x_n)$ satisfies $x_n \in S$ for every natural number $n$ and converges to $c$, then the sequence $(f(x_n))$ converges to $f(c)$.
3. (Contrapositive forms)
   - (i) If $c \in S$ and among the sequences $(x_n)$ whose terms all belong to $S$ and which converge to $c$ there is one for which $(f(x_n))$ does not converge to $f(c)$, then $f$ is discontinuous at $c$.
   - (ii) If $c$ is a cluster point of $S$, and two sequences $(x_n)$, $(y_n)$ whose terms all belong to $S - \{c\}$ converge to $c$ with $(f(x_n))$ converging to $L$, $(f(y_n))$ converging to $L'$, and $L \ne L'$, then $f$ diverges at $c$.
   - (iii) If $c$ is a cluster point of $S$, and a sequence $(x_n)$ whose terms all belong to $S - \{c\}$ converges to $c$ while $(f(x_n))$ diverges, then $f$ diverges at $c$.
:::

## 직관

$f$가 $c$에서 $L$로 수렴하면, $c$에 다가가는 점들의 줄 $x_1, x_2, \dots$를 따라가며 함숫값을 읽어도 $L$에 다가갑니다. 함수의 극한은 "$c$ 근처 어디에서나"에 관한 말이고 수열은 그 근처를 지나가는 한 갈래 길이므로, 근처 어디에서나 성립하는 것은 그 길 위에서도 성립합니다. 비유가 맞지 않는 곳은 길이 $c$에 닿아도 되는지입니다. 극한 (1)에서는 $x_n \ne c$여야 하고(극한은 $f(c)$를 보지 않습니다), 연속 (2)에서는 $x_n = c$여도 됩니다.

이 항목은 한 방향만 말합니다. 한 갈래 길에서 함숫값이 $L$로 간다고 해서 $f$가 $c$에서 $L$로 수렴하는 것은 아닙니다(아래 반례). 그래서 쓰임은 주로 대우 (3)입니다. 함숫값이 엇나가는 길 하나를 찾으면 불연속이고, 서로 다른 값으로 가는 길 둘을 찾으면 극한이 없습니다.

## 증명

:::idea
$\varepsilon$에 대해 함수의 극한이나 연속이 주는 $\delta$를 잡고, 수열의 수렴을 그 $\delta$에 써서 번호 $M$을 잡는다. (3)은 (1), (2)의 대우이다.
:::

:::hint
$|x_n - c| < \delta$가 $M$ 이상인 모든 $n$에서 성립하도록 수열의 수렴의 정의를 "$\varepsilon$ 자리에 $\delta$"로 쓴다.
:::

:::proof
**함숫값의 수열.** [[function]]의 진술에 의해 같은 집합 $x$는 $\mathbb{N}$에서 $S$로의 함수이고, [[function-composition]]의 진술에 의해 $f \circ x$는 $\mathbb{N}$에서 $\mathbb{R}$로의 함수로서 $(f \circ x)(n) = f(x(n)) = f(x_n)$이다. [[sequence]]의 정의에 의해 이것은 수열이다.

**1의 증명.** 양의 실수 $\varepsilon$을 잡는다. $f$가 $c$에서 $L$로 수렴하므로, $t \in S$, $t \ne c$, $|t - c| < \delta$인 모든 $t$에서 $|f(t) - L| < \varepsilon$인 양수 $\delta$가 있다(수열을 나타내는 함수 $x$와 겹치지 않게 변수를 $t$로 쓴다). $(x_n)$이 $c$로 수렴하므로 수렴의 정의를 양수 $\delta$에 쓰면, $M$ 이상인 모든 자연수 $n$에서 $|x_n - c| < \delta$인 자연수 $M$이 있다. $n \ge M$이면 $x_n \in S$, $x_n \ne c$, $|x_n - c| < \delta$이므로 $|f(x_n) - L| < \varepsilon$이다. 따라서 $(f(x_n))$은 $L$로 수렴한다.

**2의 증명.** 양의 실수 $\varepsilon$에 대하여 $f$의 연속이 주는 $\delta$, 곧 $t \in S$, $|t - c| < \delta$인 모든 $t$에서 $|f(t) - f(c)| < \varepsilon$인 양수 $\delta$를 잡고, 1의 증명과 같이 $M$ 이상인 모든 자연수 $n$에서 $|x_n - c| < \delta$인 자연수 $M$을 잡는다. $n \ge M$이면 $x_n \in S$이고 $|x_n - c| < \delta$이므로 $|f(x_n) - f(c)| < \varepsilon$이다. 따라서 $(f(x_n))$은 $f(c)$로 수렴한다.

**3의 증명.** (i) [[proof-by-contrapositive|대우 증명]]을 쓴다. $f$가 $c$에서 연속이면 (2)에 의해 모든 항이 $S$에 속하고 $c$로 수렴하는 모든 수열 $(x_n)$에서 $(f(x_n))$이 $f(c)$로 수렴한다. 이것은 (i)의 가정의 부정이다.

(ii) [[proof-by-contradiction|귀류법]]을 쓴다. $f$가 $c$에서 어떤 실수 $K$로 수렴한다고 하자. (1)을 두 수열에 쓰면 $(f(x_n))$과 $(f(y_n))$은 모두 $K$로 수렴한다. [[limit-is-unique|극한의 유일성]]에 의해 $L = K$이고 $L' = K$이므로 $L = L'$인데, 이것은 가정에 어긋난다. 따라서 $f$는 $c$에서 어떤 실수로도 수렴하지 않고, [[limit-of-a-function]]의 정의에 의해 발산한다.

(iii) $f$가 $c$에서 어떤 실수 $K$로 수렴한다면 (1)에 의해 $(f(x_n))$이 $K$로 수렴하여 [[limit-of-sequence]]의 정의에 의해 수렴하는 수열이 되므로, $(f(x_n))$이 발산한다는 가정에 어긋난다. 따라서 $f$는 $c$에서 발산한다. $\blacksquare$
:::

## 예시와 반례

:::example[계단 함수]
$H(x) = 0$ ($x < 0$일 때), $H(x) = 1$ ($0 \le x$일 때)로 정한 $H : \mathbb{R} \to \mathbb{R}$를 생각합니다. $n$번째 항이 $n^{-1}$인 수열은 [[basic-limits]]의 (2)에 의해 $0$으로 수렴하고, $n$번째 항이 $-n^{-1} = (-1)n^{-1}$인 수열은 [[limit-of-sum-and-product]]의 (5)에 의해 $(-1) \cdot 0 = 0$으로 수렴합니다((K9)). [[order-properties-of-reals]]의 (10)과 (3)의 (ii)에 의해 모든 $n$에서 $0 < n^{-1}$이고 $-n^{-1} < 0$이므로 두 수열의 항은 모두 $\mathbb{R} - \{0\}$에 속하고, $H(n^{-1}) = 1$, $H(-n^{-1}) = 0$입니다.

**불연속.** 수열 $(H(-n^{-1}))$은 모든 항이 $0$인 상수 수열이어서 [[basic-limits]]의 (1)에 의해 $0$으로 수렴합니다. $0 \ne 1 = H(0)$이므로 [[limit-is-unique|극한의 유일성]]에 의해 $1$로는 수렴하지 않고, (3)의 (i)에 의해 $H$는 $0$에서 불연속입니다.

**극한이 없다.** $0$은 $\mathbb{R}$의 집적점이고([[cluster-point]]의 (6)), 수열 $(H(n^{-1}))$은 $1$로, $(H(-n^{-1}))$은 $0$으로 수렴하며 $1 \ne 0$이므로 (3)의 (ii)에 의해 $H$는 $0$에서 발산합니다.
:::

:::example[연속함수에 수열 넣기]
$n$번째 항이 $(2 + n^{-1})^2$인 수열의 극한을 구합니다. $n$번째 항이 $2 + n^{-1}$인 수열은 [[basic-limits]]의 (2)와 [[limit-of-sum-and-product]]의 (5)에 의해 $2 + 0 = 2$로 수렴합니다. [[power-function-is-continuous]]의 (1)에 의해 $p_2(x) = x^2$로 정한 함수는 연속함수이므로, (2)에 의해 $(p_2(2 + n^{-1}))$, 곧 $n$번째 항이 $(2 + n^{-1})^2$인 수열은 $p_2(2) = 4$로 수렴합니다.
:::

:::counterexample[수열 하나에서 함숫값이 $f(c)$로 가도 연속이라는 보장은 없다]
위 예시의 계단 함수 $H$에서, $0$으로 수렴하는 수열 $(n^{-1})$을 따라가면 $(H(n^{-1}))$은 모든 항이 $1$인 상수 수열이므로 $1 = H(0)$으로 수렴합니다. 그러나 예시에서 보았듯이 $H$는 $0$에서 불연속입니다. (2)는 "모든 수열에서 $f(c)$로 수렴한다"를 결론으로 주지만, 수열 하나에서 그렇다는 것으로부터 연속을 끌어낼 수는 없습니다. 이 항목은 수열에서 연속을 끌어내는 방향을 다루지 않습니다.
:::

## 확인 질문

:::check[(1)에서 "$x_n \ne c$"라는 조건을 빼면 결론이 틀릴 수 있는가?]
틀릴 수 있습니다. $g(x) = 0$ ($x \ne 0$일 때), $g(0) = 1$로 정한 $g : \mathbb{R} \to \mathbb{R}$는 $0$과 다른 모든 점에서 값이 $0$인 상수함수와 같으므로 [[limit-of-a-function]]의 (4), (5)에 의해 $0$에서 $0$으로 수렴합니다. 모든 항이 $0$인 수열은 $0$으로 수렴하지만([[basic-limits]]의 (1)) 함숫값의 수열은 모든 항이 $1$이어서 $1$로 수렴하고, 극한의 유일성에 의해 $0$으로는 수렴하지 않습니다. 극한은 $c$에서의 값을 보지 않으므로, $c$에 머무는 항을 허락하면 안 됩니다.
:::

:::check[$f : \mathbb{R} \to \mathbb{R}$가 연속함수이고 $x_n = (-1)^n n^{-1}$이면 수열 $(f(x_n))$은 무엇으로 수렴하는가?]
$f(0)$으로 수렴합니다. [[power-of-a-real-number]]의 (4)와 (2)의 (iv)에 의해 $|(-1)^n| = |-1|^n = 1^n = 1$이므로 [[absolute-value|절댓값]]의 (4), (1)에 의해 $|x_n - 0| = |(-1)^n|\,|n^{-1}| = n^{-1}$입니다. 양의 실수 $\varepsilon$에 대해 [[archimedean-property]]의 (3)이 주는 $M$을 쓰면 $n \ge M$에서 $n^{-1} < \varepsilon$이므로 $(x_n)$은 $0$으로 수렴합니다. (2)에 의해 $(f(x_n))$은 $f(0)$으로 수렴합니다.
:::
