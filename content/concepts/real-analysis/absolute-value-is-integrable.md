---
title: 절댓값 함수의 적분가능성
title_en: The Absolute Value of an Integrable Function Is Integrable
aliases: [절댓값의 적분가능성, 함수의 절댓값의 적분가능성, absolute value of an integrable function]
kind: theorem
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: "[a, b] 위의 유계함수 f 와 모든 분할 P 에서 |f| 의 상합과 하합의 차는 f 의 상합과 하합의 차 이하이다. 따라서 f 가 리만 적분가능하면 |f| 도 적분가능하다. 거꾸로는 성립하지 않을 수 있다."
requires: [rational-and-irrational-numbers, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, upper-bound-and-supremum, real-valued-function, bounded-function, interval, derivative-and-monotonicity, finite-sum-of-reals, linearity-and-order-of-finite-sums, partition-of-an-interval, darboux-sums, dirichlet-function, supremum-of-function-values, riemann-integral, integrability-criterion, monotone-implies-integrable, riemann-integral-examples]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.2절(5.2.5 소절) 연습문제 5.2.15 (p.199), 연습문제 5.2.10 (p.198); 6.2절(6.2.5 소절) 연습문제 사이의 문단 (p.243)
    checked: original
    note: "(2)는 출처 연습문제 5.2.15(p.199, 'Challenging', f 가 리만 적분가능하면 |f(x)| 로 정한 함수도 적분가능함을 보이고 연습문제 5.2.10 의 부등식을 보이라)의 앞부분이다. 출처는 증명을 주지 않는다. 그 연습문제의 뒷부분인 부등식 |∫f| ≤ ∫|f| 는 이 항목에 싣지 않았다. 출처 연습문제 5.2.10(p.198)은 불연속점이 유한 개인 유계함수에 대해 |f| 의 적분가능성과 같은 부등식을 묻는다. 출처 6.2.5 소절의 연습문제 사이 문단(p.243)은 'It is true that |f| is integrable whenever f is, see Exercise 5.2.15' 라고 다시 가리킨다. (1)의 분할마다의 비교는 supremum-of-function-values 의 (6)(작은 구간마다의 진동의 비교, 그 증명은 역삼각부등식과 진동의 판정)을 길이를 곱해 더한 것이다. 출처 연습문제 5.2.15 의 텍스트에서 절댓값 막대는 추출되지 않으므로 PDF p.199 를 그림으로 보고 진술을 대조했다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 출처 메모의 틀린 부정 주장 1건과 넘겨짚은 일반 문장 5건을 고쳤다."
added: 2026-11-20
---

:::statement
실함수의 절댓값 $|f|$(곧 $|f|(x) = |f(x)|$인 함수)는 [[real-valued-function]]의 것이고, $[a, b]$의 분할은 [[partition-of-an-interval]]의 것이며, 다르부 합은 [[darboux-sums]]의 것이고, 리만 적분가능은 [[riemann-integral]]의 것이다. 아래에서 $a$, $b$는 $a < b$인 실수이다.

1. (분할마다의 비교) $f : [a, b] \to \mathbb{R}$가 유계이면 $|f|$도 유계이고, $[a, b]$의 모든 분할 $P$에서
   $$
   \begin{aligned}
   &U(P, |f|) - L(P, |f|) \\
   &\quad \le U(P, f) - L(P, f)
   \end{aligned}
   $$
   이다.
2. (적분가능) $f : [a, b] \to \mathbb{R}$가 리만 적분가능하면 $|f|$도 리만 적분가능하다.
3. (거꾸로는 성립하지 않을 수 있다) $[a, b]$의 원소 $x$가 유리수이면 $g(x) = 1$, 무리수이면 $g(x) = -1$로 정한 함수 $g : [a, b] \to \mathbb{R}$는 적분가능하지 않지만, $|g|$는 값이 $1$인 상수함수이므로 적분가능하다.
:::

:::english
The absolute value $|f|$ of a real-valued function (the function with $|f|(x) = |f(x)|$) is as in the entry on real-valued functions; partitions of $[a, b]$ are as in the entry on partitions of an interval; Darboux sums are as in the entry on Darboux sums; and Riemann integrability is as in the entry on the Riemann integral. Below, $a$ and $b$ are real numbers with $a < b$.

1. (Comparison for each partition) If $f : [a, b] \to \mathbb{R}$ is bounded, then $|f|$ is bounded, and for every partition $P$ of $[a, b]$,
   $$
   \begin{aligned}
   &U(P, |f|) - L(P, |f|) \\
   &\quad \le U(P, f) - L(P, f).
   \end{aligned}
   $$
2. (Integrability) If $f : [a, b] \to \mathbb{R}$ is Riemann integrable, then $|f|$ is Riemann integrable.
3. (The converse can fail) The function $g : [a, b] \to \mathbb{R}$ defined by $g(x) = 1$ if $x$ is rational and $g(x) = -1$ if $x$ is irrational is not integrable, but $|g|$ is the constant function with value $1$ and is therefore integrable.
:::

## 직관

절댓값을 씌우면 $0$보다 아래에 있던 값이 위로 접혀 올라옵니다. 그래서 작은 구간 하나에서 값이 흔들리는 폭은 줄어들 수는 있어도 늘지는 않습니다([[supremum-of-function-values|함숫값의 상한과 하한의 비교]]의 (6)). 상합과 하합의 차는 그 폭에 길이를 곱해 더한 것이므로 $|f|$ 쪽이 $f$ 쪽 이하이고, $f$ 쪽을 얼마든지 작게 만드는 분할이 있으면 같은 분할이 $|f|$에도 통합니다.

거꾸로 가는 길은 막힙니다. 접는 과정에서 부호의 정보가 사라지기 때문입니다. (3)의 $g$는 어디서나 $1$과 $-1$ 사이를 오가지만, 접으면 모든 값이 $1$이 되어 흔들림이 전혀 남지 않습니다.

## 증명

:::idea
작은 구간마다 $|f|$의 진동이 $f$의 진동 이하라는 것([[supremum-of-function-values|함숫값의 상한과 하한의 비교]]의 (6))에 길이를 곱해 더하면 (1)이고, 판정에 넣으면 (2)이다.
:::

:::hint
(3)에서는 $g$의 모든 작은 구간에 유리수와 무리수가 함께 있다는 것([[dirichlet-function|디리클레 함수의 하적분과 상적분]]의 (2))을 쓰면 $U(P, g) - L(P, g)$가 분할에 상관없이 정해집니다.
:::

:::proof
번호만 쓴 "(1)의 (v)" 같은 것은 [[order-properties-of-reals]]의 번호이고, "이 항목의 (n)"은 위 진술의 번호이다.

**이 항목의 (1).** $|f|$가 유계라는 것은 [[bounded-function]]의 (5)이다. $P$의 점을 $x_0, \dots, x_n$이라 하고 $1 \le i \le n$인 $i$를 하나 정해 $D = [x_{i-1}, x_i]$로 둔다. $D$는 공집합이 아닌 $[a, b]$의 부분집합이고, $f$는 유계이므로 [[supremum-of-function-values|함숫값의 상한과 하한의 비교]]의 "집합 위에서 유계" 단락의 둘째 문장에 의해 $D$ 위에서 유계이다. 그 항목의 (6)에 의해
$$
\sup |f|(D) - \inf |f|(D) \le \sup f(D) - \inf f(D)
$$
이고, [[darboux-sums]]의 정의에 의해 왼쪽은 $M_i(|f|) - m_i(|f|)$, 오른쪽은 $M_i(f) - m_i(f)$이다. $0 < \Delta x_i$이므로 (4)의 (iii)에 의해 $(M_i(|f|) - m_i(|f|))\Delta x_i \le (M_i(f) - m_i(f))\Delta x_i$이다. 이것이 $1 \le i \le n$인 모든 $i$에서 성립하므로 [[linearity-and-order-of-finite-sums]]의 (3), (8)로 더하고 [[darboux-sums]]의 (3)을 두 함수에 쓰면 $U(P, |f|) - L(P, |f|) \le U(P, f) - L(P, f)$이다.

**이 항목의 (2).** $f$는 [[riemann-integral]]의 (6)에 의해 유계이고, (1)에 의해 $|f|$도 유계이다. 양수 $\varepsilon$이 주어지면 [[integrability-criterion|리만 적분가능성의 판정]]의 (1)에 의해 $U(P, f) - L(P, f) < \varepsilon$인 분할 $P$가 있고, (1)과 (1)의 (v)에 의해 $U(P, |f|) - L(P, |f|) < \varepsilon$이다. 판정의 (1)에 의해 $|f|$는 적분가능하다.

**이 항목의 (3).** 각 실수는 유리수이거나 무리수이고 둘 다는 아니므로([[rational-and-irrational-numbers|유리수와 무리수]]) $g$는 [[real-valued-function]]의 (1)로 정해진다. $|1| = 1$이고 $|-1| = 1$이므로([[absolute-value]]의 (1), (3)) $[a, b]$의 모든 $x$에서 $|g|(x) = 1$이고, [[real-valued-function]]의 (2)에 의해 $|g|$는 값이 $1$인 상수함수이다. [[riemann-integral]]의 (5)에 의해 $|g|$는 적분가능하다.

$g$의 값은 $1$이나 $-1$이므로 $|g(x)| \le 1$이고 $g$는 유계이다. $P$를 점이 $x_0, \dots, x_n$인 분할이라 하자. [[dirichlet-function|디리클레 함수의 하적분과 상적분]]의 (2)에 의해 각 작은 구간 $[x_{i-1}, x_i]$에는 유리수와 무리수가 모두 있으므로 $g([x_{i-1}, x_i]) = \{-1, 1\}$이고, [[absolute-value]]의 (11)에 의해 $m_i = -1$, $M_i = 1$이다. [[darboux-sums]]의 (3), [[linearity-and-order-of-finite-sums]]의 (1), (8)과 [[partition-of-an-interval]]의 (7)에 의해
$$
U(P, g) - L(P, g) = \sum_{i=1}^{n} \bigl(1 - (-1)\bigr)\Delta x_i = 2 \sum_{i=1}^{n} \Delta x_i = 2(b - a)
$$
이다. 이것이 모든 분할에서 성립하므로 양수 $\varepsilon = 2(b - a)$에 대해 $U(P, g) - L(P, g) < \varepsilon$인 분할이 없고, [[integrability-criterion|리만 적분가능성의 판정]]의 (1)에 의해 $g$는 적분가능하지 않다. $\blacksquare$
:::

## 예시와 반례

:::example[부호가 바뀌는 x]
$[-1, 1]$ 위의 $f(x) = x$는 [[riemann-integral-examples|리만 적분의 예]]의 (1)에 의해 적분가능하므로, (2)에 의해 $|f|(x) = |x|$인 함수도 $[-1, 1]$에서 적분가능합니다. $|x|$는 $[-1, 1]$ 위에서 단조가 아닙니다($|-1| = 1 > 0 = |0|$이고 $|0| < |1|$). 분할 $P = \{-1, 0, 1\}$에서 확인하면, $f$는 단조증가이므로 [[monotone-implies-integrable|단조함수의 적분가능성]]의 (2)에 의해 $U(P, f) - L(P, f) = (0 - (-1)) \cdot 1 + (1 - 0) \cdot 1 = 2$입니다. $|f|$는 두 작은 구간 $[-1, 0]$, $[0, 1]$에서 모두 값이 $0$ 이상 $1$ 이하이고([[absolute-value]]의 (2), (7)) $|0| = 0$과 $|-1| = |1| = 1$이 값이므로 $m_i = 0$, $M_i = 1$이고, $U(P, |f|) - L(P, |f|) = 1 \cdot 1 + 1 \cdot 1 = 2$로 같습니다. 분할 $\{-1, 1\}$에서는 $f$ 쪽 차가 $(1 - (-1)) \cdot 2 = 4$이고 $|f|$ 쪽 차가 $(1 - 0) \cdot 2 = 2$여서, (1)의 부등식이 등호가 아닙니다.
:::

## 확인 질문

:::check[$f$가 $[a, b]$에서 적분가능하고 모든 $x$에서 $0 \le f(x)$이면 (2)는 새로운 것을 말하는가?]
아닙니다. 모든 $x$에서 $|f(x)| = f(x)$이므로([[absolute-value]]의 (1)) $|f| = f$이고([[real-valued-function]]의 (2)), (2)의 결론은 가정과 같습니다. (1)도 등호로 성립합니다.
:::

:::check[(3)의 $g$와 디리클레 함수 $D$ 사이에는 어떤 관계가 있는가?]
[[dirichlet-function|디리클레 함수]]를 $D$라 하면 모든 $x$에서 $g(x) = 2D(x) - 1$입니다. $x$가 유리수이면 $2 \cdot 1 - 1 = 1$, 무리수이면 $2 \cdot 0 - 1 = -1$이기 때문입니다. $D$와 $g$는 둘 다 적분가능하지 않고, 이 항목의 증명은 이 관계를 쓰지 않고 $g$의 다르부 합을 직접 계산합니다.
:::
