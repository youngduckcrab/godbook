---
title: 적분의 단조성
title_en: Monotonicity of the Integral
aliases: [적분의 순서 보존, 적분의 절댓값, 적분의 절댓값 부등식, 적분의 삼각부등식, monotonicity of the Riemann integral, absolute value of an integral, triangle inequality for integrals]
kind: theorem
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: "[a, b] 의 모든 점에서 f ≤ g 이면 다르부 합, 하적분과 상적분, 그리고 둘이 적분가능할 때 적분도 이 순서를 지킨다. 0 이상인 함수의 적분은 0 이상이고, 적분가능한 f 에 대해 적분의 절댓값은 |f| 의 적분 이하이다. 방향 있는 적분에서는 아래끝이 위끝 이하일 때의 꼴을 진술한다."
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, real-valued-function, bounded-function, interval, partition-of-an-interval, darboux-sums, lower-and-upper-integrals, riemann-integral, riemann-integral-examples, absolute-value-is-integrable, additivity-of-the-integral, oriented-integral, linearity-of-the-integral]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.2절(5.2.2 소절) Proposition 5.2.6 과 그 증명 (p.194); 5.2절(5.2.5 소절) 연습문제 5.2.10 (p.198), 5.2.15 (p.199), 5.2.5 (p.197); 5.1절(5.1.4 소절) 연습문제 5.1.6 (p.189); 5.1절(5.1.3 소절) (p.188); 5.3절(5.3.2 소절) Theorem 5.3.3 의 증명 (p.202); 5.3절(5.3.4 소절) 연습문제 5.3.7 (p.205)
    checked: original
    note: "(1)–(3)은 출처의 Proposition 5.2.6(5.2.2 소절, p.194)이다. 출처는 하적분의 비교를 분할마다의 L(P, f) ≤ L(P, g) 에서 'We take the supremum over all P (see Proposition 1.3.7)' 로 얻고 상적분은 'Similarly' 라고 적는다. 이 사이트에서는 (1)과 (2)가 lower-and-upper-integrals 의 (7)에 이미 증명되어 있어 그것을 인용한다. (4)는 (3)을 값이 0 인 상수함수와 비교한 것이다. (5)의 부등식은 출처가 연습문제 5.2.10(5.2.5 소절, p.198, 유계이고 불연속점이 유한 개인 f)과 연습문제 5.2.15(p.199, 적분가능한 f 의 |f| 가 적분가능함을 보이고 'the same inequality as Exercise 5.2.10' 을 보이라는 것)로 두는 것이다. 이 사이트에서는 |f| 의 적분가능성이 absolute-value-is-integrable 의 (2)에 있으므로 (5)는 그것과 선형성과 (3)으로 증명한다. (6)은 (3)과 (5)를 방향 있는 적분(출처 5.1.3 소절의 b ≤ a 인 경우의 약속, p.188)으로 옮긴 것이다. 반례 'f ≤ g 이고 적분이 같아도 f ≠ g 일 수 있는 예'의 함수는 출처 연습문제 5.1.6(5.1.4 소절, p.189)의 한 점에서만 값이 0 이 아닌 함수와 같은 꼴이다. 그 반례의 g − f 는 0 이상이고 적분이 0 인데 0 이 아닌 함수로, 출처 연습문제 5.2.5(5.2.5 소절, p.197)가 f 가 연속이면 이런 함수가 0 뿐임을 보이라는 것과 같은 상황에서 연속이 아닌 경우이다. 확인 질문 '모든 점에서 f ≤ g 이고 적분이 같으면 ∫|g − f| 는'의 g − f 도 연습문제 5.2.5 의 가정(0 이상이고 적분이 0)을 만족한다. 반례 'β < α 이면 (ii)의 부등식이 뒤집힐 수 있는 예'는 출처 Theorem 5.3.3 의 증명(5.3.2 소절, p.202)이 'When c > x, then the inequalities are reversed' 라고 적는 현상과 같다. 예시 '부호가 바뀌는 x 의 적분과 그 절댓값의 적분'에서 |x| 의 적분을 0 에서 나누어 구하는 계산은 출처 연습문제 5.3.7 c)(5.3.4 소절, p.205)가 f(x) = |x| 에 대해 구하게 하는 적분과 같은 종류의 계산이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 경계값에서 틀리거나 근거가 없던 설명 문장 9건과 잘못 적은 인용 1건을 고쳤다."
added: 2026-11-20
---

:::statement
실함수의 절댓값 $|f|$, 상수배, 상수함수, 제한은 [[real-valued-function]]의 것이고, $[a, b]$의 분할은 [[partition-of-an-interval]]의 것이며, 다르부 합 $L(P, f)$, $U(P, f)$는 [[darboux-sums]]의 것이고, 하적분과 상적분은 [[lower-and-upper-integrals]]의 것이다. 리만 적분가능과 $\int_a^b f$는 [[riemann-integral]]의 것이고, "사이에 있다", "사이에서 적분가능", 방향 있는 적분 $\int_\alpha^\beta f$는 [[oriented-integral]]의 것이다. 절댓값은 [[absolute-value]]의 것이다. (1)–(5)에서 $a$, $b$는 $a < b$인 실수이다.

1. (분할마다의 비교) $f, g : [a, b] \to \mathbb{R}$가 유계이고 $[a, b]$의 모든 $x$에서 $f(x) \le g(x)$이면, $[a, b]$의 모든 분할 $P$에서 $L(P, f) \le L(P, g)$이고 $U(P, f) \le U(P, g)$이다.
2. (하적분과 상적분의 비교) (1)과 같은 가정에서
   $$
   \begin{gathered}
   \underline{\int_a^b} f \le \underline{\int_a^b} g, \\
   \overline{\int_a^b} f \le \overline{\int_a^b} g
   \end{gathered}
   $$
   이다. (1)과 (2)는 [[lower-and-upper-integrals|하적분과 상적분]]의 (7)이다.
3. (적분의 비교) $f, g : [a, b] \to \mathbb{R}$가 리만 적분가능하고 $[a, b]$의 모든 $x$에서 $f(x) \le g(x)$이면 $\int_a^b f \le \int_a^b g$이다.
4. ($0$ 이상인 함수) $f : [a, b] \to \mathbb{R}$가 리만 적분가능하고 $[a, b]$의 모든 $x$에서 $0 \le f(x)$이면 $0 \le \int_a^b f$이다.
5. (적분의 절댓값) $f : [a, b] \to \mathbb{R}$가 리만 적분가능하면 $|f|$도 리만 적분가능하고
   $$
   -\int_a^b |f| \le \int_a^b f \le \int_a^b |f|
   $$
   이다. 곧 $\left|\int_a^b f\right| \le \int_a^b |f|$이다.
6. (방향 있는 적분) $I$를 구간, $f, g : I \to \mathbb{R}$, $\alpha$, $\beta$를 $I$의 원소라 하자.
   - (i) $\alpha \le \beta$이고, $f$와 $g$가 $\alpha$와 $\beta$ 사이에서 적분가능하며, $\alpha$와 $\beta$ 사이에 있는 모든 $t$에서 $f(t) \le g(t)$이면 $\int_\alpha^\beta f \le \int_\alpha^\beta g$이다.
   - (ii) $f$가 $\alpha$와 $\beta$ 사이에서 적분가능하면 $|f|$도 $\alpha$와 $\beta$ 사이에서 적분가능하다. 이때 $\alpha \le \beta$이면 $\left|\int_\alpha^\beta f\right| \le \int_\alpha^\beta |f|$이다.
   - (iii) $f$가 $\alpha$와 $\beta$ 사이에서 적분가능하면, $\alpha$와 $\beta$의 순서와 상관없이 $\left|\int_\alpha^\beta f\right| \le \left|\int_\alpha^\beta |f|\right|$이다.
:::

:::english
The absolute value $|f|$ of a real-valued function, scalar multiples, constant functions, and restrictions are as in the entry on real-valued functions; partitions of $[a, b]$ are as in the entry on partitions of an interval; the Darboux sums $L(P, f)$, $U(P, f)$ are as in the entry on Darboux sums; and lower and upper integrals are as in the entry on lower and upper integrals. Riemann integrability and $\int_a^b f$ are as in the entry on the Riemann integral, and "lies between", "integrable between", and the oriented integral $\int_\alpha^\beta f$ are as in the entry on the oriented integral. Absolute values are as in the entry on absolute value. In (1)–(5), $a$ and $b$ are real numbers with $a < b$.

1. (Comparison for each partition) If $f, g : [a, b] \to \mathbb{R}$ are bounded and $f(x) \le g(x)$ for all $x$ in $[a, b]$, then $L(P, f) \le L(P, g)$ and $U(P, f) \le U(P, g)$ for every partition $P$ of $[a, b]$.
2. (Comparison of lower and upper integrals) Under the same hypotheses as in (1),
   $$
   \begin{gathered}
   \underline{\int_a^b} f \le \underline{\int_a^b} g, \\
   \overline{\int_a^b} f \le \overline{\int_a^b} g .
   \end{gathered}
   $$
   Items (1) and (2) are item (7) of the entry on lower and upper integrals.
3. (Comparison of integrals) If $f, g : [a, b] \to \mathbb{R}$ are Riemann integrable and $f(x) \le g(x)$ for all $x$ in $[a, b]$, then $\int_a^b f \le \int_a^b g$.
4. (Nonnegative functions) If $f : [a, b] \to \mathbb{R}$ is Riemann integrable and $0 \le f(x)$ for all $x$ in $[a, b]$, then $0 \le \int_a^b f$.
5. (Absolute value of an integral) If $f : [a, b] \to \mathbb{R}$ is Riemann integrable, then $|f|$ is Riemann integrable and
   $$
   -\int_a^b |f| \le \int_a^b f \le \int_a^b |f| ;
   $$
   that is, $\left|\int_a^b f\right| \le \int_a^b |f|$.
6. (Oriented integrals) Let $I$ be an interval, $f, g : I \to \mathbb{R}$, and let $\alpha$, $\beta$ be elements of $I$.
   - (i) If $\alpha \le \beta$, $f$ and $g$ are integrable between $\alpha$ and $\beta$, and $f(t) \le g(t)$ for every $t$ lying between $\alpha$ and $\beta$, then $\int_\alpha^\beta f \le \int_\alpha^\beta g$.
   - (ii) If $f$ is integrable between $\alpha$ and $\beta$, then so is $|f|$. In that case, if $\alpha \le \beta$, then $\left|\int_\alpha^\beta f\right| \le \int_\alpha^\beta |f|$.
   - (iii) If $f$ is integrable between $\alpha$ and $\beta$, then, regardless of the order of $\alpha$ and $\beta$, $\left|\int_\alpha^\beta f\right| \le \left|\int_\alpha^\beta |f|\right|$.
:::

## 직관

매일 받는 용돈이 친구보다 많지 않으면 한 달 동안 받은 합도 친구보다 많지 않습니다. 적분은 작은 구간마다 함숫값의 크기를 길이만큼 쌓은 합에 가까운 수이므로, 점마다 $f \le g$이면 적분도 $\int_a^b f \le \int_a^b g$입니다. 비유의 "매일"이 "$[a, b]$의 모든 점에서"에 해당합니다. 하루라도 친구보다 많이 받은 날이 있으면 그것만으로는 한 달 합의 크기를 말할 수 없듯이, (3)은 모든 점에서의 부등식을 가정합니다.

(5)는 유한 합의 부등식 $\left|\sum x_i\right| \le \sum |x_i|$의 적분판에 해당합니다. $\int_a^b f$에서는 $f$의 양의 값과 음의 값이 서로 지워지지만 $\int_a^b |f|$에서는 지워지지 않습니다. $f$가 모든 점에서 $0$ 이상이면 $|f| = f$이고 (4)에 의해 $\int_a^b f \ge 0$이므로 등식이 됩니다. 아래 예시처럼 $f$가 부호를 바꾸면 진짜 부등식일 수 있습니다.

방향 있는 적분에서 $\beta < \alpha$이면 $\int_\alpha^\beta$는 부호를 바꾼 적분이므로 크기 비교가 뒤집힐 수 있습니다. 그래서 (6)의 (i)과 (ii)의 부등식은 $\alpha \le \beta$일 때만 말하고, 순서를 모를 때는 (iii)처럼 바깥에도 절댓값을 씌웁니다.

## 증명

:::idea
(1)과 (2)는 이미 증명된 [[lower-and-upper-integrals|하적분과 상적분]]의 (7)이다. 적분가능하면 적분이 하적분과 같으므로 (3)이 나오고, $-|f| \le f \le |f|$에 (3)을 두 번 쓰면 (5)가 나온다. 방향 있는 적분은 정의대로 제한의 적분으로 돌아가 같은 결과를 쓴다.
:::

:::hint
(4)는 (3)에서 $f$ 자리에 어떤 함수를 두면 될까요?
:::

:::hint
(5)에서 $x$에서의 값이 $-|f(x)|$인 함수는 $|f|$의 상수배입니다. 그 적분가능성과 적분은 [[linearity-of-the-integral|적분의 선형성]]에서 얻습니다.
:::

:::proof
**이 항목의 (1)과 (2).** [[lower-and-upper-integrals|하적분과 상적분]]의 (7)이 바로 이 두 진술이다.

**이 항목의 (3).** [[riemann-integral]]의 정의에 의해 $f$와 $g$는 유계이고 $\int_a^b f = \underline{\int_a^b} f$, $\int_a^b g = \underline{\int_a^b} g$이다. (2)에 의해 $\underline{\int_a^b} f \le \underline{\int_a^b} g$이므로 $\int_a^b f \le \int_a^b g$이다.

**이 항목의 (4).** $z$를 $[a, b]$ 위의 값이 $0$인 상수함수라 하자. [[riemann-integral]]의 (5)에 의해 $z$는 적분가능하고 $\int_a^b z = 0$이다. 모든 $x$에서 $z(x) = 0 \le f(x)$이므로 (3)에 의해 $0 = \int_a^b z \le \int_a^b f$이다.

**이 항목의 (5).** [[absolute-value-is-integrable|절댓값 함수의 적분가능성]]의 (2)에 의해 $|f|$는 적분가능하다. [[linearity-of-the-integral|적분의 선형성]]의 (4)를 $k = -1$에 쓰면 $(-1)|f|$는 적분가능하고 $\int_a^b (-1)|f| = -\int_a^b |f|$이다. 모든 $x \in [a, b]$에서 [[real-number-arithmetic]]의 (K9)와 [[absolute-value]]의 (6)에 의해
$$
\begin{aligned}
\bigl((-1)|f|\bigr)(x) &= -|f(x)| \le f(x) \\
&\le |f(x)| = |f|(x)
\end{aligned}
$$
이다. (3)을 $(-1)|f|$와 $f$에, 또 $f$와 $|f|$에 쓰면 $-\int_a^b |f| \le \int_a^b f \le \int_a^b |f|$이다. [[absolute-value]]의 (7)에 의해 이것은 $\left|\int_a^b f\right| \le \int_a^b |f|$와 같은 말이다.

**이 항목의 (6).** 먼저 제한에 관한 사실 하나를 보인다. $p < q$이고 $[p, q] \subseteq I$일 때 $h : I \to \mathbb{R}$의 제한 $h_1 = h|_{[p, q]}$를 생각하면, [[real-valued-function]]의 (4)와 (6)에 의해 $[p, q]$의 모든 $t$에서 $|h|(t) = |h(t)| = |h_1(t)| = |h_1|(t)$이다. 따라서 [[riemann-integral]]의 (4)의 마지막 문장을 $h_1 = |h|$, $h_2 = |h_1|$에 쓰면, $|h|$가 $[p, q]$에서 적분가능한 것은 정확히 $|h_1|$이 적분가능할 때이고 그때 두 적분이 같다. 이것을 (가)라 부른다.

(ii)의 앞부분. [[real-order-axioms]]의 (W1)에 의해 $\alpha < \beta$, $\beta < \alpha$, $\alpha = \beta$ 가운데 하나가 성립한다. $\alpha < \beta$이면 방향 있는 적분의 정의와 [[riemann-integral]]의 (4)에 의해 $f|_{[\alpha, \beta]}$가 적분가능하고, [[absolute-value-is-integrable|절댓값 함수의 적분가능성]]의 (2)에 의해 $|f|_{[\alpha, \beta]}|$도 적분가능하며, (가)에 의해 $|f|$는 $[\alpha, \beta]$에서 적분가능하다. $\beta < \alpha$이면 $[\beta, \alpha]$에 같은 논법을 쓴다. $\alpha = \beta$이면 정의에 의해 $|f|$는 $\alpha$와 $\beta$ 사이에서 적분가능하다. 어느 경우에도 $|f|$는 $\alpha$와 $\beta$ 사이에서 적분가능하다.

(i). $\alpha = \beta$이면 정의에 의해 두 적분이 모두 $0$이므로 $\int_\alpha^\beta f \le \int_\alpha^\beta g$이다. $\alpha < \beta$라 하자. 방향 있는 적분의 정의와 [[riemann-integral]]의 (4)에 의해 $f_1 = f|_{[\alpha, \beta]}$와 $g_1 = g|_{[\alpha, \beta]}$는 적분가능하고 $\int_\alpha^\beta f = \int_\alpha^\beta f_1$, $\int_\alpha^\beta g = \int_\alpha^\beta g_1$이다. $[\alpha, \beta]$의 모든 $t$는 $\alpha$와 $\beta$ 사이에 있으므로 가정에 의해 $f_1(t) = f(t) \le g(t) = g_1(t)$이다. (3)을 $[\alpha, \beta]$ 위의 $f_1$, $g_1$에 쓰면 $\int_\alpha^\beta f \le \int_\alpha^\beta g$이다.

(ii)의 부등식. $\alpha = \beta$이면 두 쪽이 모두 $|0| = 0$과 $0$이므로([[absolute-value]]의 (2)) 성립한다. $\alpha < \beta$이면 $f_1 = f|_{[\alpha, \beta]}$에 (5)를 쓰면 $\left|\int_\alpha^\beta f_1\right| \le \int_\alpha^\beta |f_1|$이고, 방향 있는 적분의 정의와 (가)에 의해 왼쪽은 $\left|\int_\alpha^\beta f\right|$, 오른쪽은 $\int_\alpha^\beta |f|$이다.

(iii). [[absolute-value]]의 (2)에 의해 $0 \le \left|\int_\alpha^\beta f\right|$이다. $\alpha \le \beta$이면 (ii)에 의해 $0 \le \left|\int_\alpha^\beta f\right| \le \int_\alpha^\beta |f|$이므로 [[absolute-value]]의 (1)에 의해 $\left|\int_\alpha^\beta |f|\right| = \int_\alpha^\beta |f|$이고, (ii)의 부등식이 곧 (iii)이다. $\beta < \alpha$이면 [[oriented-integral|방향 있는 적분]]의 (1)에 의해 $f$와 $|f|$는 $\beta$와 $\alpha$ 사이에서 적분가능하고 $\int_\alpha^\beta f = -\int_\beta^\alpha f$, $\int_\alpha^\beta |f| = -\int_\beta^\alpha |f|$이다. [[absolute-value]]의 (3)과 앞의 경우를 $\beta \le \alpha$에 쓴 것에 의해
$$
\begin{aligned}
\left|\int_\alpha^\beta f\right| &= \left|\int_\beta^\alpha f\right| \le \left|\int_\beta^\alpha |f|\right| \\
&= \left|-\int_\beta^\alpha |f|\right| = \left|\int_\alpha^\beta |f|\right|
\end{aligned}
$$
이다.
:::

## 예시와 반례

:::example[부호가 바뀌는 x 의 적분과 그 절댓값의 적분]
$f(x) = x$로 정한 $f : [-1, 2] \to \mathbb{R}$를 생각합니다. [[riemann-integral-examples|리만 적분의 예]]의 (1)에 의해 $\int_{-1}^{2} x\,dx = \frac{4 - 1}{2} = \frac{3}{2}$입니다.

$|f|$의 적분은 $0$에서 나누어 구합니다. $[-1, 0]$의 $x$는 $x \le 0$이므로 [[absolute-value]]의 (1)에 의해 $|f|(x) = -x$이고, 같은 예의 (1)을 기울기 $-1$, 상수 $0$에 쓰면 $x$에서의 값이 $-x$인 $[-1, 0]$ 위의 함수의 적분은 $\frac{(-1)(0 - 1)}{2} = \frac{1}{2}$입니다. $[0, 2]$의 $x$에서는 $|f|(x) = x$이고 그 적분은 $\frac{4 - 0}{2} = 2$입니다. [[riemann-integral]]의 (4)에 의해 $|f|$는 $[-1, 0]$과 $[0, 2]$에서 적분가능하고 적분이 각각 $\frac{1}{2}$과 $2$이며, [[additivity-of-the-integral|적분의 구간 덧셈]]의 (1)에 의해 $\int_{-1}^{2} |x|\,dx = \frac{1}{2} + 2 = \frac{5}{2}$입니다.

따라서 $\left|\int_{-1}^{2} f\right| = \frac{3}{2} < \frac{5}{2} = \int_{-1}^{2} |f|$이고, (5)의 부등식은 여기서 진짜 부등식입니다. 차 $1$은 $[-1, 0]$의 음의 값이 $\int f$에서는 빠지고 $\int |f|$에서는 더해진 몫의 두 배입니다.
:::

:::counterexample[f ≤ g 이고 적분이 같아도 f ≠ g 일 수 있는 예]
$[0, 2]$ 위에서 값이 $0$인 상수함수를 $f$라 하고, $g(1) = 5$이고 $x \ne 1$이면 $g(x) = 0$인 함수를 $g$라 합니다. 모든 $x$에서 $f(x) \le g(x)$이고, [[riemann-integral]]의 (5)와 [[riemann-integral-examples|리만 적분의 예]]의 (4)에 의해 둘 다 적분가능하며 $\int_0^2 f = 0 = \int_0^2 g$입니다. 그러나 $f(1) = 0 \ne 5 = g(1)$이므로 $f \ne g$입니다. (3)에서 적분이 같다는 것으로부터 함수가 같다는 것을 끌어낼 수는 없습니다.
:::

:::counterexample[β < α 이면 (ii)의 부등식이 뒤집힐 수 있는 예]
$[0, 1]$ 위의 값이 $1$인 상수함수 $f$와 $\alpha = 1$, $\beta = 0$을 생각합니다. 모든 점에서 $|f| = f$이고 [[oriented-integral|방향 있는 적분]]의 (4)에 의해 $\int_1^0 f = \int_1^0 |f| = 1 \cdot (0 - 1) = -1$입니다. 그러면
$$
\left|\int_1^0 f\right| = 1 > -1 = \int_1^0 |f|
$$
이므로, $\beta < \alpha$일 때 (ii)의 부등식은 성립하지 않을 수 있습니다. (iii)의 꼴로 쓰면 $\left|\int_1^0 f\right| = 1 \le 1 = \left|\int_1^0 |f|\right|$입니다.
:::

## 확인 질문

:::check[$f : [0, 2] \to \mathbb{R}$가 적분가능하고 모든 $x$에서 $|f(x)| \le x$이면 $\left|\int_0^2 f\right|$는 얼마 이하인가?]
$2$ 이하입니다. (5)에 의해 $\left|\int_0^2 f\right| \le \int_0^2 |f|$이고, 모든 $x$에서 $|f|(x) \le x$이므로 (3)과 [[riemann-integral-examples|리만 적분의 예]]의 (1)에 의해 $\int_0^2 |f| \le \int_0^2 x\,dx = \frac{4}{2} = 2$입니다.
:::

:::check[$f$, $g$가 $[a, b]$에서 적분가능하고 모든 점에서 $f \le g$이며 $\int_a^b f = \int_a^b g$이면 $\int_a^b |g - f|$는?]
$0$입니다. 모든 $x$에서 $0 \le g(x) - f(x)$이므로 [[absolute-value]]의 (1)에 의해 $|g - f| = g - f$이고, [[linearity-of-the-integral|적분의 선형성]]의 (4)에 의해 $\int_a^b |g - f| = \int_a^b g - \int_a^b f = 0$입니다.
:::
