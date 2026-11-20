---
title: 안쪽 구간에서 적분가능한 유계함수
title_en: Bounded Functions Integrable on Inner Intervals
aliases: [안쪽 닫힌구간에서의 적분가능성, 끝점 근처를 뺀 적분, 적분의 끝점 극한, integrable on every inner interval, integral as a limit of integrals over inner intervals]
kind: theorem
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: "유계함수 f : [a, b] → ℝ 가 a < c < d < b 인 모든 [c, d] 에서 적분가능하면 [a, b] 에서 적분가능하고, [a, b] 위의 적분과 [c, d] 위의 적분의 차는 유계의 수와 잘라 낸 두 끝의 길이로 눌린다. 한쪽 끝만 자르는 꼴, 끝점으로 수렴하는 수열의 꼴, 유계 가정을 뺄 수 없다는 예를 함께 진술한다."
requires: [subset, riemann-integral-examples, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, real-valued-function, bounded-function, interval, sequence, limit-of-sequence, continuous-function, continuity-of-sum-and-product, lower-and-upper-integrals, riemann-integral, continuous-implies-integrable, additivity-of-lower-and-upper-integrals, additivity-of-the-integral]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.2절(5.2.3 소절) Lemma 5.2.8 과 그 증명 (p.195–196); 5.2절(5.2.4 소절) Proposition 5.2.10 의 증명 개요 (p.197); 5.1절(5.1.4 소절) 연습문제 5.1.9 (p.189); 5.2절(5.2.5 소절) 연습문제 5.2.3 (p.197); 5.5절 Definition 5.5.1 뒤 문단과 Proposition 5.5.2 (p.214); 3.2절(3.2.1 소절) Example 3.2.3 (p.123); 5.1절(5.1.3 소절) 첫 문단 (p.188)
    checked: original
    note: "출처의 Lemma 5.2.8(5.2.3 소절, p.195–196)은 수열 a_n, b_n 이 a < a_n < b_n < b 이고 a 와 b 로 수렴하며 f 가 모든 [a_n, b_n] 에서 적분가능할 때 f 가 적분가능하고 ∫_a^b f 가 ∫_{a_n}^{b_n} f 의 극한이라고 진술한다. 이것은 이 항목의 (4)이고, 이 항목은 수열의 이름을 c_n, d_n 으로 바꿨다. 출처는 ∫_{a_n}^{b_n} f 의 수열이 유계라는 것에서 볼차노–바이어슈트라스 정리로 수렴하는 부분수열을 잡고, 하적분과 상적분의 덧셈(Lemma 5.2.1)으로 하적분 ≥ L, 상적분 ≤ L 을 얻은 뒤, 끝으로 Proposition 2.3.7(유계인 수열의 수렴하는 부분수열이 모두 x 로 수렴하면 수열도 x 로 수렴한다)로 극한을 얻는다. 이 항목의 (1)과 (2)는 수열과 부분수열을 쓰지 않고, (4)는 주어진 수열에 (1)과 (2)를 쓴다. [a, c], [c, d], [d, b] 의 세 조각으로 나누는 것은 출처 증명의 [a, a_{n_k}], [a_{n_k}, b_{n_k}], [b_{n_k}, b] 와 같다. (1)은 a < c < d < b 인 모든 c, d 를 가정으로 두고, 하적분과 상적분의 차를 additivity-of-lower-and-upper-integrals 의 (4)로 세 조각으로 나눈 뒤 양 끝 조각을 lower-and-upper-integrals 의 (3)으로 눌러 c 와 d 를 식으로 정한다. (2)의 어림은 출처의 극한을 ε 없이 부등식으로 쓴 것이고, (4)는 (1)과 (2)에서 바로 얻는다. 출처의 증명에서 유계의 수 M 의 부등식은 텍스트 추출에서 절댓값 막대가 빠지므로 PDF p.196 을 그림으로 보고 |f(x)| ≤ M 임을 확인했다. (6)은 출처 5.1.3 소절(p.188)의 약속(정의역이 [a, b] 보다 큰 함수는 제한이 적분가능할 때 [a, b] 에서 적분가능하다고 한다)을 (1)–(4)에 쓴 꼴이다. (3)은 출처가 5.5절 Definition 5.5.1 뒤 문단(p.214)에서 '끝점 b 가 유한하고 f 가 유계이면 Lemma 5.2.8 에 의해 새로 정의한 것이 없다'고 적는 것을 진술로 둔 것이다. (5)의 함수(0 < x ≤ 1 에서 x⁻¹)는 출처 Proposition 5.5.2(5.5절, p.214)의 ∫_0^1 x^{−p} dx 에서 p = 1 인 함수와 같은 함수이고, 출처는 그것을 유계가 아닌 함수의 이상적분으로 다룬다. (5)의 연속은 출처 Example 3.2.3(3.2.1 소절, p.123; (0, ∞) 위의 1/x 가 연속)과 같은 함수의 같은 결론이고, 출처는 수열로 보인다. 예시 '0 에서만 값을 바꾼 일차함수'는 출처 연습문제 5.1.9(5.1.4 소절, p.189; [0, 1] 의 두 함수가 (0, 1] 에서 같으면 적분도 같다), 연습문제 5.2.3(5.2.5 소절, p.197; (a, b) 에서 같은 두 함수)과 같은 발상이고, 출처는 Proposition 5.2.10 의 증명 개요(5.2.4 소절, p.197)에서 연습문제 5.2.3 을 Lemma 5.2.8 로 풀라고 적는다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 경계에서 거짓이거나 부정확한 설명 문장 9건과 범위가 넓었던 출처 메모 3건을 고쳤다."
added: 2026-11-20
---

:::statement
리만 적분가능, 적분 $\int_a^b f$, 정의역이 $[a, b]$보다 큰 함수가 "$[a, b]$에서 적분가능하다"는 것과 그 적분은 [[riemann-integral]]의 것이고(그 항목의 (4)), 하적분 $\underline{\int_a^b} f$와 상적분 $\overline{\int_a^b} f$는 [[lower-and-upper-integrals]]의 것이다. 함수의 유계는 [[bounded-function|유계인 함수]]의 것이고 "$[a, b]$ 위에서 유계"는 [[lower-and-upper-integrals]]의 (8)의 것이며, 제한은 [[real-valued-function]]의 것이다. 수열은 [[sequence|수열]]의 것이고 그 수렴은 [[limit-of-sequence]]의 것이며, 연속은 [[continuous-function]]의 것이다. (1)–(4)에서 $a$, $b$는 $a < b$인 실수이고 $f : [a, b] \to \mathbb{R}$이다.

1. (적분가능) $f$가 유계이고, $a < c < d < b$인 모든 실수 $c$, $d$에서 $f$가 $[c, d]$에서 적분가능하면, $f$는 적분가능하다.
2. (적분의 어림) $f$가 적분가능하고 실수 $B$가 $[a, b]$의 모든 $x$에서 $|f(x)| \le B$를 만족한다고 하자. 그러면 $a < c < d < b$인 모든 실수 $c$, $d$에서 $f$는 $[c, d]$에서 적분가능하고
   $$
   \begin{aligned}
   &\left|\int_a^b f - \int_c^d f\right| \\
   &\quad \le B\bigl((c - a) + (b - d)\bigr)
   \end{aligned}
   $$
   이다.
3. (한쪽 끝만) $f$가 유계이고, $a < c < b$인 모든 실수 $c$에서 $f$가 $[c, b]$에서 적분가능하면, $f$는 적분가능하다. $a < c < b$인 모든 실수 $c$에서 $f$가 $[a, c]$에서 적분가능한 경우도 같다.
4. (수열의 꼴) $f$가 유계이고, 수열 $(c_n)$, $(d_n)$이 모든 자연수 $n$에서 $a < c_n < d_n < b$를 만족하며, $(c_n)$은 $a$로, $(d_n)$은 $b$로 수렴하고, 모든 자연수 $n$에서 $f$가 $[c_n, d_n]$에서 적분가능하다고 하자. 그러면 $f$는 적분가능하고, $n$번째 항이 $\int_{c_n}^{d_n} f$인 수열은 $\int_a^b f$로 수렴한다.
5. (유계 가정을 뺄 수 없다) $\varphi : [0, 1] \to \mathbb{R}$를 $\varphi(0) = 0$이고 $0 < x \le 1$이면 $\varphi(x) = x^{-1}$로 정한 함수라 하자. $\varphi$는 $0 < x \le 1$인 모든 $x$에서 연속이고, $0 < c < d \le 1$인 모든 실수 $c$, $d$에서 $[c, d]$에서 적분가능하다. 그러나 $\varphi$는 유계가 아니고, 따라서 적분가능하지 않다. 곧 (1)과 (3)에서 "$f$가 유계"라는 가정을 빼면 결론이 성립하지 않을 수 있다.
6. (더 큰 정의역) $a < b$이고 $[a, b] \subseteq D \subseteq \mathbb{R}$이며 $h : D \to \mathbb{R}$가 $[a, b]$ 위에서 유계라 하자(곧 $h|_{[a, b]}$가 유계). 그러면 (1)–(4)는 $f$를 $h$로 바꾸어도 그대로 성립한다. 여기서 적분가능과 적분은 모두 [[riemann-integral]]의 (4)의 뜻이고, (2)의 부등식 $|h(x)| \le B$는 $[a, b]$의 모든 $x$에 대한 것이다.
:::

:::english
Riemann integrability, the integral $\int_a^b f$, what it means for a function with a domain larger than $[a, b]$ to be "integrable on $[a, b]$", and its integral are those of the entry on the Riemann integral (its item (4)); the lower integral $\underline{\int_a^b} f$ and the upper integral $\overline{\int_a^b} f$ are those of the entry on lower and upper integrals. Boundedness of a function and "bounded on $[a, b]$" are those of the entry on bounded functions and of item (8) of the entry on lower and upper integrals, and restrictions are those of the entry on real-valued functions. Sequences and their convergence are those of the entries on sequences and on limits of sequences, and continuity is that of the entry on continuous functions. In (1)–(4), $a$ and $b$ are real numbers with $a < b$ and $f : [a, b] \to \mathbb{R}$.

1. (Integrability) If $f$ is bounded and $f$ is integrable on $[c, d]$ for all real numbers $c$, $d$ with $a < c < d < b$, then $f$ is integrable.
2. (Estimate of the integral) Suppose $f$ is integrable and a real number $B$ satisfies $|f(x)| \le B$ for all $x$ in $[a, b]$. Then for all real numbers $c$, $d$ with $a < c < d < b$, $f$ is integrable on $[c, d]$ and
   $$
   \begin{aligned}
   &\left|\int_a^b f - \int_c^d f\right| \\
   &\quad \le B\bigl((c - a) + (b - d)\bigr) .
   \end{aligned}
   $$
3. (One end only) If $f$ is bounded and $f$ is integrable on $[c, b]$ for all real numbers $c$ with $a < c < b$, then $f$ is integrable. The same holds if $f$ is integrable on $[a, c]$ for all real numbers $c$ with $a < c < b$.
4. (Sequence form) Suppose $f$ is bounded, sequences $(c_n)$, $(d_n)$ satisfy $a < c_n < d_n < b$ for every natural number $n$, $(c_n)$ converges to $a$, $(d_n)$ converges to $b$, and $f$ is integrable on $[c_n, d_n]$ for every natural number $n$. Then $f$ is integrable, and the sequence whose $n$-th term is $\int_{c_n}^{d_n} f$ converges to $\int_a^b f$.
5. (The boundedness assumption cannot be dropped) Let $\varphi : [0, 1] \to \mathbb{R}$ be the function defined by $\varphi(0) = 0$ and $\varphi(x) = x^{-1}$ for $0 < x \le 1$. Then $\varphi$ is continuous at every $x$ with $0 < x \le 1$, and $\varphi$ is integrable on $[c, d]$ for all real numbers $c$, $d$ with $0 < c < d \le 1$. However, $\varphi$ is not bounded, and hence not integrable. That is, if the assumption "$f$ is bounded" is dropped from (1) and (3), the conclusion may fail.
6. (Larger domain) Let $a < b$, let $[a, b] \subseteq D \subseteq \mathbb{R}$, and let $h : D \to \mathbb{R}$ be bounded on $[a, b]$ (that is, $h|_{[a, b]}$ is bounded). Then (1)–(4) remain true with $f$ replaced by $h$. Here integrability and integrals are all in the sense of item (4) of the entry on the Riemann integral, and the inequality $|h(x)| \le B$ in (2) is required for all $x$ in $[a, b]$.
:::

## 직관

구간의 양 끝 가까이에서 함수가 어떻게 생겼는지 알기 어려울 때가 있습니다. 이 정리는 함수가 유계이기만 하면 양 끝의 짧은 토막은 적분가능성에 영향을 주지 못한다고 말합니다. 비유로, 긴 판자의 넓이를 재는데 양 끝 몇 센티미터는 모양이 울퉁불퉁하다고 합시다. 판자의 높이가 $B$를 넘지 않으면 양 끝 토막의 넓이는 $B$와 토막 길이의 곱보다 클 수 없으므로, 토막을 짧게 잡을수록 그 부분이 낳는 불확실함은 작아집니다. 비유에서 판자의 높이 한계가 유계의 수 $B$이고, 토막의 길이가 $c - a$와 $b - d$입니다.

증명에서 이 불확실함은 "상적분 빼기 하적분"입니다. [[additivity-of-lower-and-upper-integrals|하적분과 상적분의 구간 덧셈]]의 (4)로 이 차를 $[a, c]$, $[c, d]$, $[d, b]$의 세 조각으로 나누면 가운데 조각은 $0$이고, 양 끝 조각은 각각 $2B(c - a)$와 $2B(b - d)$ 이하입니다. $c$와 $d$를 끝점에 가깝게 잡으면 차가 주어진 어느 양수 이하가 되므로 $0$입니다.

유계라는 가정은 첫 단계부터 쓰입니다. 하적분과 상적분은 유계인 함수에만 정의되므로 차를 쓰려면 먼저 유계여야 하고(적분가능의 정의에도 유계가 들어 있습니다), 양 끝 조각을 $2B$와 길이의 곱으로 누를 때 $B$가 필요합니다. (5)의 함수 $\varphi$는 $0$ 가까이에서 값이 한없이 커져서 첫째 자리에서부터 막힙니다.

## 증명

:::idea
(상적분 − 하적분)을 $[a, c]$, $[c, d]$, $[d, b]$로 나누면 가운데는 $0$이고 양 끝은 $2B$와 길이의 곱 이하이다. $c$와 $d$를 주어진 양수에 맞춰 식으로 정하면 차는 그 양수 이하이므로 $0$이다. (2)는 적분의 구간 덧셈과 적분을 함숫값의 범위로 누르는 것으로 한다.
:::

:::hint
$a < c < d < b$이면 하적분과 상적분의 구간 덧셈의 (4)를 $a < c < b$에, 다시 $c < d < b$에 쓸 수 있습니다. 둘째에는 정의역이 더 큰 함수의 꼴이 필요합니다.
:::

:::hint
양수 $\varepsilon$이 주어지면 $t = \min\{(b - a)/3,\ \varepsilon/(4B)\}$로 두고 $c = a + t$, $d = b - t$로 잡아 보십시오.
:::

:::proof
실수의 계산은 [[real-number-arithmetic]]의 계산 법칙으로 하고, 번호만 쓴 "(1)의 (v)" 같은 것은 [[order-properties-of-reals]]의 번호이다. "이 항목의 ($n$)"은 위 진술의 번호이고, "덧셈 보조정리 ($n$)"은 [[additivity-of-lower-and-upper-integrals]]의 번호, "구간 덧셈 ($n$)"은 [[additivity-of-the-integral]]의 번호이다. 하적분과 상적분의 차를 $\overline{\int_p^q} f - \underline{\int_p^q} f$로 쓴다.

**안쪽 구간의 포함.** $a < b$이고 $a \le c < d \le b$이면 $c$와 $d$는 $[a, b]$의 원소이므로 [[interval]]의 (4)에 의해 $[c, d] \subseteq [a, b]$이다. 아래에서 이것을 말없이 쓴다.

**이 항목의 (1).** $f$가 유계이므로 [[bounded-function]]의 (2)에 의해 $[a, b]$의 모든 $x$에서 $|f(x)| \le B$인 양의 실수 $B$가 있고, [[absolute-value]]의 (7)에 의해 그 $x$에서 $-B \le f(x) \le B$이다. [[bounded-function]]의 (4)에 의해 $f$는 $[a, b]$에 포함된 모든 닫힌구간 위에서 유계이고, 그 위에서도 같은 $B$로 $-B \le f(x) \le B$이다.

$c$, $d$를 $a < c < d < b$인 실수라 하자. 덧셈 보조정리 (4)를 $a < c < b$와 $f$에 쓰면
$$
\begin{aligned}
&\overline{\int_a^b} f - \underline{\int_a^b} f \\
&\quad = \left(\overline{\int_a^c} f - \underline{\int_a^c} f\right) + \left(\overline{\int_c^b} f - \underline{\int_c^b} f\right)
\end{aligned}
$$
이다. 덧셈 보조정리 (5)를 $D = [a, b]$, $h = f$와 $c < d < b$에 쓰면($[c, b] \subseteq [a, b]$이고 $f$는 $[c, b]$ 위에서 유계이다), 그 (4)에 의해
$$
\begin{aligned}
&\overline{\int_c^b} f - \underline{\int_c^b} f \\
&\quad = \left(\overline{\int_c^d} f - \underline{\int_c^d} f\right) + \left(\overline{\int_d^b} f - \underline{\int_d^b} f\right)
\end{aligned}
$$
이다. 가정에 의해 $f$는 $[c, d]$에서 적분가능하므로 [[riemann-integral]]의 (4)에 의해 $\underline{\int_c^d} f = \overline{\int_c^d} f$이고, 가운데 괄호는 $0$이다. $[a, c]$ 위에서는 [[lower-and-upper-integrals]]의 (3)을 $f|_{[a, c]}$와 $m = -B$, $M = B$에 쓰면(그 항목의 (8)의 약속에 의해 위의 하적분과 상적분은 $f|_{[a, c]}$의 것이다) $-B(c - a) \le \underline{\int_a^c} f$이고 $\overline{\int_a^c} f \le B(c - a)$이므로, (2)의 (iii)과 (3)의 (iii)에 의해
$$
\begin{aligned}
&\overline{\int_a^c} f - \underline{\int_a^c} f \\
&\quad \le B(c - a) + B(c - a) \\
&\quad = 2B(c - a)
\end{aligned}
$$
이다. 같은 방법으로 $[d, b]$ 위에서 $\overline{\int_d^b} f - \underline{\int_d^b} f \le 2B(b - d)$이다. 두 등식에 넣고 (2)의 (iii)을 쓰면
$$
\begin{aligned}
&\overline{\int_a^b} f - \underline{\int_a^b} f \\
&\quad \le 2B(c - a) + 2B(b - d)
\end{aligned}
$$
이다. 이것은 $a < c < d < b$인 모든 $c$, $d$에서 성립하고, 아래에서 이 부등식을 "차의 어림"이라 부른다.

이제 $\varepsilon$을 양수라 하고 $t = \min\{(b - a)/3,\ \varepsilon/(4B)\}$로 두자. $b - a > 0$이고 $3 > 0$, $4B > 0$이므로((10)과 [[real-order-axioms]]의 (W4)) (6)의 (i)과 (W4)에 의해 두 수는 양수이고, [[absolute-value]]의 (10)에 의해 $t$는 그 가운데 하나이므로 $0 < t$이며 $t \le (b - a)/3$, $t \le \varepsilon/(4B)$이다. $c = a + t$, $d = b - t$로 두자. $0 < t$이므로 $a < c$이고 $d < b$이다. 또 $2t \le 2(b - a)/3 < b - a$이므로(둘째 부등식은 $0 < b - a$에서 $(b - a)/3 > 0$이기 때문이다) $a + t < b - t$, 곧 $c < d$이다. 따라서 $a < c < d < b$이고, 차의 어림에 의해
$$
\begin{aligned}
&\overline{\int_a^b} f - \underline{\int_a^b} f \\
&\quad \le 2Bt + 2Bt = 4Bt \\
&\quad \le 4B \cdot \frac{\varepsilon}{4B} = \varepsilon
\end{aligned}
$$
이다(마지막 부등식은 $0 < 4B$와 (4)의 (iii)). 이것이 모든 양수 $\varepsilon$에서 성립하므로 (9)에 의해 차는 $0$ 이하이다. 한편 [[lower-and-upper-integrals]]의 (5)에 의해 차는 $0$ 이상이므로, (9)의 둘째 문장에 의해 차는 $0$이다. 곧 $\underline{\int_a^b} f = \overline{\int_a^b} f$이고, $f$가 유계이므로 [[riemann-integral]]의 정의에 의해 $f$는 적분가능하다.

**이 항목의 (2).** $a < c < d < b$라 하자. 구간 덧셈 (1)을 $a < c < b$에 쓰면 $f$는 $[a, c]$와 $[c, b]$에서 적분가능하고 $\int_a^b f = \int_a^c f + \int_c^b f$이다. 구간 덧셈 (5)로 그 (1)을 $h = f$와 $c < d < b$에 쓰면($[c, b] \subseteq [a, b]$) $f$는 $[c, d]$와 $[d, b]$에서 적분가능하고 $\int_c^b f = \int_c^d f + \int_d^b f$이다. 따라서
$$
\int_a^b f - \int_c^d f = \int_a^c f + \int_d^b f
$$
이다. $f|_{[a, c]}$는 적분가능하고 $[a, c]$의 모든 $x$에서 $|f|_{[a, c]}(x)| = |f(x)| \le B$이므로, [[riemann-integral]]의 (2)의 (iii)에 의해 $\left|\int_a^c f\right| \le B(c - a)$이다. 같은 방법으로 $\left|\int_d^b f\right| \le B(b - d)$이다. [[triangle-inequality]]의 (1)과 (2)의 (iii)에 의해
$$
\begin{aligned}
&\left|\int_a^b f - \int_c^d f\right| \\
&\quad \le \left|\int_a^c f\right| + \left|\int_d^b f\right| \\
&\quad \le B(c - a) + B(b - d)
\end{aligned}
$$
이고, 오른쪽은 분배법칙으로 $B\bigl((c - a) + (b - d)\bigr)$이다.

**이 항목의 (3).** 첫째 경우: $a < c < d < b$이면 $a < c < b$이므로 가정에 의해 $f$는 $[c, b]$에서 적분가능하고, $c \le c < d \le b$이므로 구간 덧셈 (5)로 그 (2)를 $h = f$와 $[c, b] \subseteq [a, b]$에 쓰면 $f$는 $[c, d]$에서 적분가능하다. 둘째 경우: $a < c < d < b$이면 $a < d < b$이므로 가정에 의해 $f$는 $[a, d]$에서 적분가능하고, $a \le c < d \le d$이므로 같은 방법으로 $f$는 $[c, d]$에서 적분가능하다. 어느 경우나 (1)의 가정이 성립하므로 $f$는 적분가능하다.

**이 항목의 (4).** 적분가능: $c$, $d$를 $a < c < d < b$인 실수라 하자. $c - a > 0$이므로 $(c_n)$이 $a$로 수렴한다는 것([[limit-of-sequence]]의 정의)에 의해 자연수 $M_1$이 있어 $n \ge M_1$이면 $|c_n - a| < c - a$이고, [[absolute-value]]의 (8)에 의해 $c_n < a + (c - a) = c$이다. 같은 방법으로 $b - d > 0$에 대해 자연수 $M_2$가 있어 $n \ge M_2$이면 $b - (b - d) < d_n$, 곧 $d < d_n$이다. $n = M_1 + M_2$로 두면 자연수 $M_1$, $M_2$는 양수이므로((10)) (2)의 (i)에 의해 $n \ge M_1$이고 $n \ge M_2$이다. 그러면 $c_n < c < d < d_n$이고 가정에 의해 $f$는 $[c_n, d_n]$에서 적분가능하므로, 구간 덧셈 (5)로 그 (2)를 $h = f$와 $[c_n, d_n] \subseteq [a, b]$, $c_n \le c < d \le d_n$에 쓰면 $f$는 $[c, d]$에서 적분가능하다. (1)에 의해 $f$는 적분가능하다.

수렴: 자연수 $n$마다 실수 $\int_{c_n}^{d_n} f$는 이미 정해진 수이므로 [[sequence]]의 (1)에 의해 $n$번째 항이 이것인 수열이 있다. (1)의 증명 첫 문단처럼 $[a, b]$의 모든 $x$에서 $|f(x)| \le B$인 양의 실수 $B$를 잡는다. $\varepsilon$을 양수라 하자. $\varepsilon/(2B) > 0$이므로 수렴의 정의에 의해 자연수 $M_1$, $M_2$가 있어 $n \ge M_1$이면 $|c_n - a| < \varepsilon/(2B)$이고 $n \ge M_2$이면 $|d_n - b| < \varepsilon/(2B)$이다. $M = M_1 + M_2$로 두고 $n \ge M$이라 하자. 그러면 위와 같이 $n \ge M_1$, $n \ge M_2$이다. $a < c_n$이므로 [[absolute-value]]의 (1)에 의해 $c_n - a = |c_n - a|$이고, $d_n < b$이므로 (3)의 (i)과 [[absolute-value]]의 (1), (3)에 의해 $b - d_n = |d_n - b|$이다. (2)를 $c = c_n$, $d = d_n$에 쓰고 (4)의 (i), (2)의 (iv)를 쓰면
$$
\begin{aligned}
&\left|\int_{c_n}^{d_n} f - \int_a^b f\right| \\
&\quad \le B\bigl(|c_n - a| + |d_n - b|\bigr) \\
&\quad < B\left(\frac{\varepsilon}{2B} + \frac{\varepsilon}{2B}\right) = \varepsilon
\end{aligned}
$$
이다(첫 부등식은 [[absolute-value]]의 (3)으로 절댓값 안의 차의 순서를 바꾼 것이다). 따라서 이 수열은 $\int_a^b f$로 수렴한다.

**이 항목의 (5).** [[real-valued-function]]의 (1)에 의해 $\varphi$는 $[0, 1]$ 위의 실함수이다($[0, 1]$의 각 원소 $x$는 $x = 0$과 $0 < x \le 1$ 가운데 정확히 하나를 만족하고, 뒤의 경우 $x \ne 0$이므로 $x^{-1}$이 있다).

연속: $x$를 $0 < x \le 1$인 실수라 하자. $g = i_{[0, 1]}$은 [[continuous-function]]의 (4)에 의해 $x$에서 연속이고 $g(x) = x \ne 0$이다. $Z = \{y \in [0, 1] : y \ne 0\}$으로 두면 [[continuity-of-sum-and-product|연속함수의 합·곱·몫]]의 (2)에 의해 $1/g : Z \to \mathbb{R}$는 $x$에서 연속이고, [[real-valued-function]]의 (5)와 (3)에 의해 $Z$의 모든 $y$에서 $(1/g)(y) = g(y)^{-1} = y^{-1}$이다. $A = \{y \in [0, 1] : |y - x| < x\}$로 두자. $A$의 원소 $y$는 [[absolute-value]]의 (8)에 의해 $x - x < y$, 곧 $0 < y$이므로 $y \in Z$이고 $\varphi(y) = y^{-1} = (1/g)(y)$이다. $x \in A$이므로 [[continuous-function]]의 (5)에 의해 $(1/g)|_A$는 $x$에서 연속이고, 이 함수와 $\varphi|_A$는 $A$의 모든 점에서 값이 같으므로 [[real-valued-function]]의 (6), (2)에 의해 같은 함수이다. [[continuous-function]]의 (6)을 $\delta_0 = x$에 쓰면 $\varphi$는 $x$에서 연속이다.

적분가능: $0 < c < d \le 1$이면 $[c, d]$의 모든 점 $x$는 $0 < c \le x \le 1$을 만족하므로 위에 의해 $\varphi$는 $[c, d]$에서 연속이다. $[c, d] \subseteq [0, 1]$이므로 [[continuous-implies-integrable]]의 (2)에 의해 $\varphi$는 $[c, d]$에서 적분가능하다.

유계가 아니다: 실수 $B$가 $[0, 1]$의 모든 $x$에서 $|\varphi(x)| \le B$를 만족한다고 하자. $1^{-1} = 1$이므로 $1 = |\varphi(1)| \le B$이고, $0 < 1 < B + 1$이다((5)의 (ii)와 (2)의 (iv)). (6)의 (ii)에 의해 $x = (B + 1)^{-1}$은 $0 < x < 1^{-1} = 1$을 만족하므로 $x \in [0, 1]$이고 $\varphi(x) = x^{-1}$이다. $(B + 1)\,x = 1$이므로 (K8)의 (iii)(역수의 유일성)에 의해 $x^{-1} = B + 1$이다. 그러면 $|\varphi(x)| = B + 1 > B$이므로 모순이다. 따라서 $\varphi$는 유계가 아니고, [[riemann-integral]]의 (6)에 의해 적분가능하지 않다.

$a = 0$, $b = 1$로 두면, 위의 적분가능에서 $d < 1$인 경우에 의해 $\varphi$는 (1)의 "$a < c < d < b$인 모든 $c$, $d$에서 $[c, d]$에서 적분가능"을 만족하고, $d = 1$인 경우에 의해 (3)의 첫째 경우의 "$a < c < b$인 모든 $c$에서 $[c, b]$에서 적분가능"을 만족한다. 그러나 $\varphi$는 유계가 아니고 적분가능하지 않다. 곧 (1)과 (3)의 가정 가운데 유계만 빠진 함수에서 결론이 성립하지 않으므로 마지막 문장이 성립한다.

**이 항목의 (6).** $\psi = h|_{[a, b]}$로 두면 가정에 의해 $\psi$는 유계이다. $a \le p < q \le b$이면 $[p, q] \subseteq [a, b] \subseteq D$이고 [[real-valued-function]]의 (6)에 의해 $[p, q]$의 모든 $x$에서 $\psi(x) = h(x)$이므로, [[riemann-integral]]의 (4)의 마지막 문장에 의해 $\psi$가 $[p, q]$에서 적분가능한 것은 정확히 $h$가 $[p, q]$에서 적분가능할 때이고 그때 $\int_p^q \psi = \int_p^q h$이다. $p = a$, $q = b$인 경우가 "$h$가 $[a, b]$에서 적분가능"의 뜻이다. 또 $[a, b]$의 모든 $x$에서 $|\psi(x)| = |h(x)|$이다. 그러므로 (1)–(4)의 가정과 결론에서 $h$에 관한 문장을 $\psi$에 관한 같은 문장으로 바꿀 수 있고, (1)–(4)를 $\psi$에 쓴 것이 $h$에 대한 (1)–(4)이다. $\blacksquare$
:::

## 예시와 반례

:::example[0 에서만 값을 바꾼 일차함수]
$f : [0, 1] \to \mathbb{R}$를 $f(0) = 1$이고 $0 < x \le 1$이면 $f(x) = x$로 정합니다([[real-valued-function]]의 (1)). $[0, 1]$의 모든 $x$에서 $0 \le f(x) \le 1$이므로 $|f(x)| \le 1$이고 $f$는 유계입니다.

$0 < c < d < 1$이면 $[c, d]$의 모든 점에서 $f$의 값은 $x$이므로, [[riemann-integral-examples|리만 적분의 예]]의 (1)($p = 1$, $q = 0$)과 [[riemann-integral]]의 (4)의 마지막 문장에 의해 $f$는 $[c, d]$에서 적분가능하고 $\int_c^d f = (d^2 - c^2)/2$입니다. (1)에 의해 $f$는 적분가능합니다.

값도 구할 수 있습니다. $0 < t < 1/2$이면 $c = t$, $d = 1 - t$는 $0 < c < d < 1$을 만족하고
$$
\begin{aligned}
\frac{d^2 - c^2}{2} &= \frac{(1 - t)^2 - t^2}{2} \\
&= \frac{1 - 2t}{2} = \frac{1}{2} - t
\end{aligned}
$$
입니다. (2)를 $B = 1$에 쓰면 $\left|\int_0^1 f - \left(\frac12 - t\right)\right| \le t + t = 2t$이고, [[triangle-inequality]]의 (4)로 $\left|\int_0^1 f - \frac12\right| \le 2t + t = 3t$입니다. 양수 $\varepsilon$이 주어지면 $t = \min\{1/4,\ \varepsilon/3\}$은 $0 < t < 1/2$이고 $3t \le \varepsilon$이므로, $\left|\int_0^1 f - \frac12\right|$은 모든 양수 이하이고 [[order-properties-of-reals]]의 (9)와 [[absolute-value]]의 (2)에 의해 $\int_0^1 f = 1/2$입니다. $0$에서의 값 $1$은 적분에 아무 영향을 주지 않았습니다.
:::

:::counterexample[유계 가정이 빠진 역수 함수]
(5)의 함수 $\varphi$는 $0 < c < d < 1$인 모든 $[c, d]$에서 적분가능하므로 (1)의 가정 가운데 "안쪽 구간에서 적분가능"은 만족하지만, $0$ 가까이에서 값이 한없이 커져 유계가 아닙니다. 예컨대 자연수 $n$에 대해 $\varphi(n^{-1}) = n$입니다($n \cdot n^{-1} = 1$과 (K8)의 (iii)). 유계가 아닌 함수에는 하적분과 상적분이 정의되지 않으므로, (1)의 증명은 첫 단계(차를 세 조각으로 나누기)에서 막힙니다. [[riemann-integral]]의 (6)에 의해 $\varphi$는 적분가능하지 않습니다.
:::

## 확인 질문

:::check[(2)에서 $f$가 $[a, b]$ 위의 값이 $k$인 상수함수이고 $B = |k|$이면 양변은 각각 얼마인가?]
[[riemann-integral]]의 (5)와 (4)에 의해 $\int_a^b f = k(b - a)$이고 $\int_c^d f = k(d - c)$이므로 왼쪽은 $|k(b - a) - k(d - c)| = |k|\,\bigl((c - a) + (b - d)\bigr)$입니다($(b - a) - (d - c) = (c - a) + (b - d)$이고, 이 수는 양수입니다). 오른쪽도 $|k|\,\bigl((c - a) + (b - d)\bigr)$이므로 등호가 성립합니다. 상수함수에서는 (2)의 어림을 더 줄일 수 없습니다.
:::

:::check[(1)의 가정을 "$a \le c < d \le b$인 모든 $c$, $d$에서 $[c, d]$에서 적분가능"으로 바꾸면 결론은 새로운 것인가?]
아닙니다. 그 가정에는 $c = a$, $d = b$인 경우, 곧 "$f$가 $[a, b]$에서 적분가능"이 이미 들어 있으므로 결론을 가정한 셈입니다. (1)이 쓸모 있는 까닭은 끝점을 포함하는 구간에서의 적분가능성을 가정하지 않는 데 있습니다.
:::
