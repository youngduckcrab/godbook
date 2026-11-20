---
title: 곱의 적분가능성
title_en: The Product of Integrable Functions Is Integrable
aliases: [적분가능한 함수의 곱, 제곱의 적분가능성, product of integrable functions]
kind: theorem
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: "[a, b] 에서 리만 적분가능한 두 함수 f, g 의 곱 fg 는 리만 적분가능하다. 특히 f 의 제곱과 상수배도 적분가능하다. 곱의 적분은 적분의 곱과 같지 않을 수 있다."
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, power-of-a-real-number, real-valued-function, bounded-function, interval, finite-sum-of-reals, linearity-and-order-of-finite-sums, partition-of-an-interval, darboux-sums, supremum-of-function-values, riemann-integral, integrability-criterion, riemann-integral-examples, absolute-value-is-integrable]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.3절(5.3.4 소절) 연습문제 5.3.5 (p.205); 5.2절(5.2.2 소절) Proposition 5.2.4 (p.193); 5.2.5 소절 연습문제 5.2.2 와 그 힌트 (p.197)
    checked: original
    note: "출처는 두 적분가능한 함수의 곱이 적분가능하다는 것을 명제나 연습문제로 진술하지 않는다(검색어 'product', 'multipl', '𝑓 𝑔', '𝑓 2', 'square of' 를 책 전체에서 찾았다. 5장에서 나온 것은 Proposition 5.2.4 증명의 'multiplication by α', 치환적분 Theorem 5.3.5 의 f(g(x))g′(x), 기본정리 Theorem 5.3.1 증명의 'multiplying by Δx_i' 이고, 6장의 연습문제 6.1.6(p.232)은 함수열의 곱의 고른 수렴을 묻는다. 5.1.4, 5.2.5, 5.3.4 소절의 연습문제를 처음부터 읽었다). 가장 가까운 것은 연습문제 5.3.5(p.205, 부분적분)로, F, G 가 연속미분가능하다고 가정해 곱 F G′, F′ G 가 연속함수가 되게 한다. 연습문제 5.2.17(p.199)도 연속함수 f 와 립시츠 함수 g 의 곱 g(t − x)f(t) 의 적분을 쓴다. (3)의 상수배는 출처 Proposition 5.2.4 (i)(p.193, αf 의 적분가능성과 값)의 적분가능 부분과 같은 결론이고, 이 항목은 값을 다루지 않는다. 증명의 '한 분할에서 두 함수의 차를 함께 작게 한다'는 출처 연습문제 5.2.2 의 힌트(p.197)와 같은 발상이다. 예시 'x 와 x 의 곱' 의 ∫_0^1 x² dx = 1/3 은 출처 Example 5.3.2(p.201)의 값과 같다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 출처 메모의 틀린 부정 주장 1건과 넘겨짚은 일반 문장 5건을 고쳤다."
added: 2026-11-20
---

:::statement
실함수의 곱 $fg$, 상수배 $kf$, 상수함수는 [[real-valued-function]]의 것이고, $[a, b]$의 분할은 [[partition-of-an-interval]]의 것이며, 다르부 합은 [[darboux-sums]]의 것이고, 리만 적분가능과 $\int_a^b f$는 [[riemann-integral]]의 것이다. 아래에서 $a$, $b$는 $a < b$인 실수이다.

1. (곱) $f, g : [a, b] \to \mathbb{R}$가 리만 적분가능하면 곱 $fg$도 리만 적분가능하다. 더 자세히, 실수 $B$, $C$가 $[a, b]$의 모든 $x$에서 $|f(x)| \le B$, $|g(x)| \le C$를 만족하면, $[a, b]$의 모든 분할 $P$에서
   $$
   \begin{aligned}
   &U(P, fg) - L(P, fg) \\
   &\quad \le C\,\bigl(U(P, f) - L(P, f)\bigr) \\
   &\qquad + B\,\bigl(U(P, g) - L(P, g)\bigr)
   \end{aligned}
   $$
   이다. 이 부등식은 $f$, $g$가 유계이기만 하면 성립한다.
2. (제곱) $f : [a, b] \to \mathbb{R}$가 리만 적분가능하면 $ff$, 곧 $x$에서의 값이 $f(x)^2$인 함수도 리만 적분가능하다.
3. (상수배) $f : [a, b] \to \mathbb{R}$가 리만 적분가능하고 $k$가 실수이면 $kf$도 리만 적분가능하다.
4. (곱의 적분은 적분의 곱이 아닐 수 있다) $[0, 1]$ 위에서 $f(x) = x$이면 $\int_0^1 f \cdot \int_0^1 f = \frac{1}{4}$이지만 $\int_0^1 ff = \frac{1}{3}$이다.
:::

:::english
The product $fg$ and scalar multiple $kf$ of real-valued functions and constant functions are as in the entry on real-valued functions; partitions of $[a, b]$ are as in the entry on partitions of an interval; Darboux sums are as in the entry on Darboux sums; and Riemann integrability and $\int_a^b f$ are as in the entry on the Riemann integral. Below, $a$ and $b$ are real numbers with $a < b$.

1. (Products) If $f, g : [a, b] \to \mathbb{R}$ are Riemann integrable, then the product $fg$ is Riemann integrable. More precisely, if real numbers $B$ and $C$ satisfy $|f(x)| \le B$ and $|g(x)| \le C$ for all $x$ in $[a, b]$, then for every partition $P$ of $[a, b]$,
   $$
   \begin{aligned}
   &U(P, fg) - L(P, fg) \\
   &\quad \le C\,\bigl(U(P, f) - L(P, f)\bigr) \\
   &\qquad + B\,\bigl(U(P, g) - L(P, g)\bigr).
   \end{aligned}
   $$
   This inequality holds whenever $f$ and $g$ are bounded.
2. (Squares) If $f : [a, b] \to \mathbb{R}$ is Riemann integrable, then $ff$, that is, the function whose value at $x$ is $f(x)^2$, is also Riemann integrable.
3. (Scalar multiples) If $f : [a, b] \to \mathbb{R}$ is Riemann integrable and $k$ is a real number, then $kf$ is Riemann integrable.
4. (The integral of a product need not be the product of the integrals) If $f(x) = x$ on $[0, 1]$, then $\int_0^1 f \cdot \int_0^1 f = \frac{1}{4}$, but $\int_0^1 ff = \frac{1}{3}$.
:::

## 직관

작은 구간 하나에서 곱 $f(x)g(x)$가 흔들리는 폭은, $f$가 흔들리는 폭에 $g$의 크기를 곱한 것과 $g$가 흔들리는 폭에 $f$의 크기를 곱한 것을 더한 것을 넘지 않습니다([[supremum-of-function-values|함숫값의 상한과 하한의 비교]]의 (7)). 길이를 곱해 더하면 같은 관계가 상합과 하합의 차 사이에도 성립합니다((1)의 부등식). 그래서 $f$와 $g$의 틈을 한 분할에서 함께 작게 만들면 곱의 틈도 작아집니다. $f$와 $g$가 유계라는 것은 "크기"가 $B$, $C$로 눌려 있다는 데 쓰입니다.

적분가능성과 달리 적분의 값은 곱을 따라가지 않습니다. (4)처럼 $\int fg$는 $\int f \cdot \int g$와 다를 수 있고, 이 항목은 $\int fg$를 $f$와 $g$의 적분으로 나타내는 식을 주지 않습니다.

## 증명

:::idea
작은 구간마다 곱의 진동을 $C \cdot (f\text{의 진동}) + B \cdot (g\text{의 진동})$으로 누르고 길이를 곱해 더하면 (1)의 부등식이다. 판정의 "두 함수에 한 분할"로 $f$와 $g$의 차를 함께 작게 하면 곱의 차도 작아진다.
:::

:::hint
$U(P, f) - L(P, f) < \varepsilon'$, $U(P, g) - L(P, g) < \varepsilon'$이면 (1)의 부등식의 오른쪽은 $(B + C)\varepsilon'$ 이하입니다. $\varepsilon'$을 어떻게 잡으면 이것이 $\varepsilon$보다 작을까요?
:::

:::proof
번호만 쓴 "(1)의 (v)" 같은 것은 [[order-properties-of-reals]]의 번호이고, (K…)는 [[real-number-arithmetic]]의 번호이며, "이 항목의 (n)"은 위 진술의 번호이다.

**이 항목의 (1)의 부등식.** $f$, $g$가 유계이고 모든 $x$에서 $|f(x)| \le B$, $|g(x)| \le C$라 하자. [[bounded-function]]의 (5)에 의해 $fg$도 유계이다. $[a, b]$는 공집합이 아니므로 그 원소 $x_0$에서 [[absolute-value]]의 (2)에 의해 $0 \le |f(x_0)| \le B$이고 $0 \le C$이다. $P$의 점을 $x_0, \dots, x_n$이라 하고 $1 \le i \le n$인 $i$를 하나 정해 $D = [x_{i-1}, x_i]$로 둔다. $D$는 공집합이 아닌 $[a, b]$의 부분집합이고, $f$, $g$는 [[supremum-of-function-values|함숫값의 상한과 하한의 비교]]의 "집합 위에서 유계" 단락의 둘째 문장에 의해 $D$ 위에서 유계이며, $D$의 모든 $x$에서 $|f(x)| \le B$, $|g(x)| \le C$이다. 그 항목의 (7)과 [[darboux-sums]]의 정의에 의해
$$
M_i(fg) - m_i(fg) \le C\,\bigl(M_i(f) - m_i(f)\bigr) + B\,\bigl(M_i(g) - m_i(g)\bigr)
$$
이다. $0 < \Delta x_i$이므로 (4)의 (iii)과 (K3)에 의해 양변에 $\Delta x_i$를 곱해도 부등식이 유지된다. 이것을 $1 \le i \le n$에서 [[linearity-and-order-of-finite-sums]]의 (3), (1), (8)로 더하고 [[darboux-sums]]의 (3)을 $fg$, $f$, $g$에 쓰면 (1)의 부등식을 얻는다.

**이 항목의 (1)의 적분가능.** $f$, $g$가 적분가능하면 [[riemann-integral]]의 (6)에 의해 유계이므로, [[bounded-function]]의 정의에 의해 위와 같은 $B$, $C$가 있다. 양수 $\varepsilon$이 주어지면 $\varepsilon' = \varepsilon \cdot (B + C + 1)^{-1}$로 둔다. $0 \le B + C$이므로 $0 < B + C + 1$이고, (6)의 (i)과 (4)의 (i)에 의해 $0 < \varepsilon'$이다. [[integrability-criterion|리만 적분가능성의 판정]]의 (3)에 의해 $U(P, f) - L(P, f) < \varepsilon'$와 $U(P, g) - L(P, g) < \varepsilon'$가 함께 성립하는 분할 $P$가 있다. $0 \le C$, $0 \le B$이므로 (4)의 (iii)에 의해 $C(U(P, f) - L(P, f)) \le C\varepsilon'$이고 $B(U(P, g) - L(P, g)) \le B\varepsilon'$이다. (1)의 부등식과 (2)의 (iii), (1)의 (v)에 의해
$$
U(P, fg) - L(P, fg) \le (B + C)\,\varepsilon' < (B + C + 1)\,\varepsilon' = \varepsilon
$$
이다(가운데 부등식은 $B + C < B + C + 1$과 $0 < \varepsilon'$, (4)의 (i)). 판정의 (1)에 의해 $fg$는 적분가능하다.

**이 항목의 (2).** (1)을 $g = f$에 쓰면 $ff$가 적분가능하다. [[real-valued-function]]의 (4)와 [[power-of-a-real-number]]의 (1)에 의해 $(ff)(x) = f(x)f(x) = f(x)^2$이다.

**이 항목의 (3).** 값이 $k$인 상수함수 $c$는 [[riemann-integral]]의 (5)에 의해 적분가능하므로 (1)에 의해 $cf$가 적분가능하다. $[a, b]$의 모든 $x$에서 $(cf)(x) = k f(x) = (kf)(x)$이므로 [[real-valued-function]]의 (2)에 의해 $cf = kf$이다.

**이 항목의 (4).** [[riemann-integral-examples|리만 적분의 예]]의 (1)에 의해 $\int_0^1 x\,dx = \frac{1}{2}$이므로 $\int_0^1 f \cdot \int_0^1 f = \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4}$이다. $(ff)(x) = x \cdot x = x^2$이므로 $ff$는 $\int_0^1 x^2\,dx$의 함수와 같고, 그 항목의 (2)에 의해 $\int_0^1 ff = \frac{1}{3}$이다. $\frac{1}{4} \ne \frac{1}{3}$이다($3 \ne 4$에서 (K7)과 (K11)). $\blacksquare$
:::

## 예시와 반례

:::example[적분가능한 두 함수의 곱]
[[riemann-integral-examples|리만 적분의 예]]의 (4)에서 본, $[0, 2]$ 위에서 $1$에서만 값이 $3$이고 나머지에서 $0$인 함수 $h$와, $f(x) = x$인 함수는 둘 다 적분가능하므로 (1)에 의해 곱 $hf$도 적분가능합니다. 실제로 $hf$는 $1$에서 값이 $3 \cdot 1 = 3$이고 나머지에서 $0$이어서 $h$와 같은 함수입니다. 이 경우에는 곱을 직접 알아보아도 같은 결론이 나옵니다.
:::

:::counterexample[적분가능하지 않은 함수의 제곱]
(1)은 $f$와 $g$가 적분가능하다고 가정합니다. 그 가정이 없어도 곱이 적분가능한 경우가 있습니다. [[absolute-value-is-integrable|절댓값 함수의 적분가능성]]의 (3)의 함수 $g$(유리수에서 $1$, 무리수에서 $-1$)는 적분가능하지 않지만, $gg$는 모든 $x$에서 값이 $1$인 상수함수이므로 적분가능합니다. 그래서 곱이 적분가능하다는 것에서 각 함수가 적분가능하다는 결론을 끌어낼 수 없습니다.
:::

## 확인 질문

:::check[(1)의 부등식에서 $B = 0$이면 무엇을 말하는가?]
$B = 0$이면 모든 $x$에서 $|f(x)| \le 0$이므로 $f(x) = 0$이고 $fg$는 값이 $0$인 상수함수입니다. 부등식은 $U(P, fg) - L(P, fg) \le C\,(U(P, f) - L(P, f)) = C \cdot 0 = 0$이 되고, 실제로 상수함수의 상합과 하합은 같습니다([[darboux-sums]]의 (5)).
:::

:::check[$[-1, 1]$ 위의 $f(x) = x$에 대해 $x$에서의 값이 $x^2$인 함수는 적분가능한가?]
그렇습니다. $f$는 [[riemann-integral-examples|리만 적분의 예]]의 (1)에 의해 $[-1, 1]$에서 적분가능하고, (2)에 의해 $ff$, 곧 값이 $x^2$인 함수도 적분가능합니다. 그 항목의 (2)는 $0 \le a$인 구간만 다루므로 값은 여기서 나오지 않습니다.
:::
