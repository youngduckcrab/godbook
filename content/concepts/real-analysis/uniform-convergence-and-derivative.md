---
title: 고른 수렴과 미분
title_en: Uniform Convergence and the Derivative
aliases: [고른 극한의 미분, 미분과 극한의 교환, derivative of the limit, interchange of limit and derivative]
kind: theorem
field: real-analysis
msc: ["26A24", "40A30"]
level: undergrad
summary: 닫힌구간 위의 연속미분가능한 함수들의 도함수가 g 로 고르게 수렴하고 한 점에서 값의 수열이 수렴하면, 함수들은 연속미분가능한 함수 f 로 고르게 수렴하고 f′ = g 이다. 함수들만 고르게 수렴해서는 도함수의 극한이 극한의 도함수와 다를 수 있다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, order-properties-of-reals, absolute-value, triangle-inequality, interval, power-of-a-real-number, sequence, limit-of-sequence, basic-limits, subsequence, real-valued-function, continuous-function, derivative, continuously-differentiable, oriented-integral, fundamental-theorem-of-calculus-first-form, fundamental-theorem-of-calculus-second-form, power-function-is-continuous, pointwise-convergence, uniform-convergence, uniform-limit-of-continuous-maps, uniform-convergence-and-integral]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "6.2.3절 Derivative of the limit: Theorem 6.2.10 과 증명, 증명 뒤 문단 (p.239–240); 6.2.5절 연습문제 6.2.2, 6.2.7 (p.243)"
    checked: original
    note: "출처 Theorem 6.2.10(p.239)은 유계인 구간 I 위의 연속미분가능한 f_n 의 도함수가 g 로 고르게 수렴하고 어떤 c ∈ I 에서 (f_n(c)) 가 수렴하면, (f_n) 이 연속미분가능한 f 로 고르게 수렴하고 f′ = g 라는 것이다. 이 항목은 I 를 닫힌구간 [a, b] 로 두었다(출처의 증명도 고른 어림에서 I 의 하계 a 와 상계 b 만 쓴다). 증명의 줄기는 출처(p.240, 그림으로 대조)와 같다: 미적분의 기본정리로 f_n(x) = f_n(c) + ∫_c^x f_n′ 로 쓰고, f(x) = L + ∫_c^x g 로 정해 미적분의 기본정리 둘째 꼴로 f′ = g 를 얻고, |f(x) − f_n(x)| 를 |L − f_n(c)| 와 적분의 어림으로 누른다. 출처는 g 가 '연속함수의 고른 극한이라 연속'이라고만 적고(번호는 적지 않는다. Theorem 6.2.2 의 내용이다), 이 항목은 uniform-limit-of-continuous-maps 의 (3)으로, 적분의 수렴은 uniform-convergence-and-integral 의 (4)로 인용한다. 출처는 f(x) 를 '두 극한의 합'으로 정하지만 이 항목은 f(x) = L + ∫_c^x g 를 정의로 쓰고, f 가 점별 극한이라는 것은 고른 수렴에서 얻는다. 증명 뒤 문단(p.240: 유계가 아닌 I = ℝ 에서 f_n(x) = x/n 은 고른 수렴만 빠진다)은 닫힌구간으로 진술한 까닭과 같은 것을 말한다. 반례 '함수만 고르게 수렴하는 경우의 예: 닫힌구간 [0, 1] 위의 xⁿ/n'은 출처 연습문제 6.2.2(p.243: [0, 1] 위의 xⁿ/n 은 미분가능한 f 로 고르게 수렴하지만 f′(1) ≠ lim f_n′(1))와 같은 함수, 같은 결론이다. 출처의 삼각함수 예(Example 6.2.8)와 1/(1 + nx²) 의 예(Example 6.2.9)는 쓰지 않았다. 출처 연습문제 6.2.7(p.243: C¹ 노름 ‖f‖ + ‖f′‖ 로 코시인 연속미분가능 함수열은 연속미분가능한 함수로 고르게 수렴함을 보이라)은 이 정리로 푸는 같은 주제의 물음이다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 경계값에서 거짓이거나 근거 없던 설명 문장 약 10건, 다른 항목의 예시에 기대던 근거 4건, 메모의 확인하지 않은 주장 3건을 작성자가 고쳤다. 지휘자의 지적으로 겹치는 글자 1건을 바꾸고 진술 번호 2개를 더했다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
닫힌구간은 [[interval]]의 것이고, 미분가능, 도함수, 연속미분가능은 [[derivative]], [[continuously-differentiable]]의 것이며, 연속은 [[continuous-function]]의 것이다. 방향 있는 적분 $\int_c^x g$는 [[oriented-integral]]의 것이다. 사상의 열과 점별 수렴은 [[pointwise-convergence|사상의 열과 점별 수렴]]의 것이고, 고른 수렴은 [[uniform-convergence|고른 수렴]]의 것이다($\mathbb{R}$에는 보통 거리를 준다). 아래에서 $a$, $b$는 $a < b$인 실수이고, $(f_n)$은 $[a, b]$에서 $\mathbb{R}$로의 사상의 열로서 모든 $f_n$이 연속미분가능하며, 도함수의 열 $(f_n')$(각 $n$에서 $f_n'$은 이미 정해진 함수이므로 [[pointwise-convergence|사상의 열과 점별 수렴]]의 (1)로 정해진다)은 $g : [a, b] \to \mathbb{R}$로 고르게 수렴한다. 또 $c \in [a, b]$이고 실수열 $(f_n(c))$는 실수 $L$로 수렴한다.

1. (도함수의 극한은 연속이다) $g$는 연속함수이고, $[a, b]$의 어느 두 점 사이에서도 적분가능하다.
2. (극한 함수) $f(x) = L + \int_c^x g$로 정한 $f : [a, b] \to \mathbb{R}$는 연속미분가능하고 $f' = g$이며 $f(c) = L$이다.
3. (고른 수렴) $(f_n)$은 (2)의 $f$로 고르게 수렴한다. 더 자세히, 자연수 $n$과 $0 \le \eta$인 실수 $\eta$가 $[a, b]$의 모든 $t$에서 $|f_n'(t) - g(t)| \le \eta$를 만족하면, $[a, b]$의 모든 $x$에서
   $$
   \begin{aligned}
   &|f_n(x) - f(x)| \\
   &\quad \le |f_n(c) - L| + \eta\,(b - a)
   \end{aligned}
   $$
   이다.
4. (미분과 극한의 교환) $(f_n)$의 점별 극한은 $f$이고, 모든 $x \in [a, b]$에서
   $$
   \begin{aligned}
   \Bigl(\lim_{n \to \infty} f_n\Bigr)'(x) &= f'(x) = g(x) \\
   &= \lim_{n \to \infty} f_n'(x)
   \end{aligned}
   $$
   이다. 여기서 $\lim_{n \to \infty} f_n$은 점별 극한 $f$를 가리킨다.
:::

:::english
Closed intervals are as defined earlier; differentiability, derivatives and continuous differentiability are those of the derivative and of continuously differentiable functions; continuity is that of continuous functions. The oriented integral $\int_c^x g$ is that of the oriented integral. Sequences of maps and pointwise convergence are those of sequences of maps and pointwise convergence, and uniform convergence is that of uniform convergence ($\mathbb{R}$ carries the standard metric). Below, $a$, $b$ are real numbers with $a < b$, $(f_n)$ is a sequence of maps from $[a, b]$ to $\mathbb{R}$ all of which are continuously differentiable, and the sequence of derivatives $(f_n')$ (each $f_n'$ is an already determined function, so the sequence is determined by (1) of sequences of maps) converges uniformly to $g : [a, b] \to \mathbb{R}$. Also $c \in [a, b]$, and the real sequence $(f_n(c))$ converges to a real number $L$.

1. (The limit of the derivatives is continuous) $g$ is a continuous function and is integrable between any two points of $[a, b]$.
2. (The limit function) The function $f : [a, b] \to \mathbb{R}$ defined by $f(x) = L + \int_c^x g$ is continuously differentiable, $f' = g$, and $f(c) = L$.
3. (Uniform convergence) $(f_n)$ converges uniformly to the $f$ of (2). More precisely, if a natural number $n$ and a real number $\eta$ with $0 \le \eta$ satisfy $|f_n'(t) - g(t)| \le \eta$ for all $t$ in $[a, b]$, then for all $x$ in $[a, b]$
   $$
   \begin{aligned}
   &|f_n(x) - f(x)| \\
   &\quad \le |f_n(c) - L| + \eta\,(b - a).
   \end{aligned}
   $$
4. (Interchanging derivative and limit) The pointwise limit of $(f_n)$ is $f$, and for all $x \in [a, b]$
   $$
   \begin{aligned}
   \Bigl(\lim_{n \to \infty} f_n\Bigr)'(x) &= f'(x) = g(x) \\
   &= \lim_{n \to \infty} f_n'(x).
   \end{aligned}
   $$
   Here $\lim_{n \to \infty} f_n$ denotes the pointwise limit $f$.
:::

## 직관

함수가 고르게 가까워져도 기울기는 가까워지지 않을 수 있습니다. 아주 작은 높이로 빠르게 출렁이는 함수나, 반례의 $x^n/n$처럼 끝에서만 가파르게 솟는 함수는 높이로는 $0$에 고르게 다가가지만 기울기는 그렇지 않습니다. 그래서 이 정리는 거꾸로, 기울기의 고른 수렴을 가정하고 함숫값의 수렴을 결론으로 얻습니다.

비유하자면 출발점의 위치와 매 순간의 속도를 알면 위치가 정해집니다. 출발점 $c$에서의 위치 $f_n(c)$가 $L$로 다가가고, 모든 시각의 속도 $f_n'$이 고르게 $g$로 다가가면, 위치 $f_n(x) = f_n(c) + \int_c^x f_n'$도 고르게 $L + \int_c^x g$로 다가갑니다. "출발점의 위치"가 $f_n(c)$에, "속도"가 도함수에, "위치를 속도로 되찾기"가 미적분의 기본정리에 맞습니다.

닫힌구간이 쓰이는 곳은 (3)의 어림의 $\eta(b - a)$입니다. 속도의 오차가 $\eta$여도 시간이 길면 위치의 오차가 쌓이므로, 구간의 길이가 유한해야 위치의 오차를 고르게 누를 수 있습니다.

## 증명

:::idea
미적분의 기본정리로 $f_n(x) = f_n(c) + \int_c^x f_n'$이다. 오른쪽이 고르게 $L + \int_c^x g$로 가고, 이 함수의 도함수는 둘째 꼴에 의해 $g$이다.
:::

:::hint
$g$의 연속은 연속함수의 고른 극한이기 때문입니다. 그러면 $\int_c^x g$가 모든 $x$에서 정해집니다.
:::

:::hint
$f(x) - f_n(x) = (L - f_n(c)) + \int_c^x (g - f_n')$로 쓰고, 둘째 항을 $\eta\,|x - c|$로 누르세요. $x$와 $c$가 모두 $[a, b]$에 있으므로 $|x - c| \le b - a$입니다.
:::

:::proof
아래에서 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술). 자연수 $P$, $Q$에 대하여 $P + Q$는 자연수이고 $P < P + Q$, $Q < P + Q$이다([[even-and-odd]], [[well-ordering-principle]]의 (Z6), (Z7), [[prime-number]]의 (Z1)). 실수의 부등식은 [[order-properties-of-reals]]의 번호로, 절댓값은 [[absolute-value|절댓값]]과 [[triangle-inequality]]의 번호로 인용한다. [[uniform-convergence|고른 수렴]]을 줄여 "고른 수렴의 항목"이라 쓰고, 그 (8)에 의해 $(f_n')$이 $g$로 고르게 수렴한다는 것은 모든 양의 실수 $\varepsilon$마다 자연수 $N$이 있어 $n \ge N$과 모든 $t \in [a, b]$에서 $|f_n'(t) - g(t)| < \varepsilon$이라는 뜻이다. $[a, b]$는 [[interval]]의 (1)에 의해 구간이다.

**(1).** 각 $f_n$이 연속미분가능하므로 [[continuously-differentiable]]의 정의에 의해 $f_n'$은 연속함수이다. [[uniform-limit-of-continuous-maps|연속 사상의 고른 극한에 관한 정리]]의 (3)을 $S = [a, b]$에 쓰면 $g$는 연속함수이다. [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 둘째 꼴]]의 (4)에 의해 구간 위의 연속함수는 그 구간의 어느 두 점 사이에서도 적분가능하다.

**(2).** (1)과 [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 둘째 꼴]]의 진술 첫머리에 의해, 밑점 $c$로 $G(x) = \int_c^x g$로 정한 함수 $G : [a, b] \to \mathbb{R}$가 있고, 그 (4)에 의해 $G$는 연속미분가능하며 $G' = g$이다. [[continuously-differentiable]]의 (4)에 의해 $h(x) = 0 \cdot x + L$로 정한 상수함수 $h : [a, b] \to \mathbb{R}$는 연속미분가능하고 $h'$은 값이 $0$인 상수함수이다. [[real-valued-function]]의 (4)에 의해 $f = h + G$이고, [[continuously-differentiable]]의 (3)에 의해 $f$는 연속미분가능하며 모든 $x$에서 $f'(x) = 0 + g(x) = g(x)$, 곧 $f' = g$이다([[real-valued-function]]의 (2)). [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 둘째 꼴]]의 (6)에 의해 $G(c) = 0$이므로 $f(c) = L$이다.

**(3).** 먼저 어림을 보인다. 자연수 $n$과 $\eta$가 가정을 만족한다고 하고 $x \in [a, b]$를 잡는다. [[fundamental-theorem-of-calculus-first-form|미적분의 기본정리 첫째 꼴]]의 (2)에 의해 연속미분가능한 $f_n$에 대하여 $f_n'$은 $c$와 $x$ 사이에서 적분가능하고 $\int_c^x f_n' = f_n(x) - f_n(c)$이다. $t$가 $c$와 $x$ 사이에 있으면 [[oriented-integral]]의 (1)에 의해 $t \in [a, b]$이므로 $|f_n'(t) - g(t)| \le \eta$이다. [[uniform-convergence-and-integral]]의 (4)의 어림을 $I = [a, b]$, 열 $(f_n')$, 극한 $g$, $\alpha = c$, $\beta = x$에 쓰면
$$
\left|\int_c^x f_n' - \int_c^x g\right| \le \eta\,|x - c|
$$
이다. $a \le x \le b$이고 $a \le c \le b$이므로 [[order-properties-of-reals]]의 (2)와 (3)에 의해 $-(b - a) \le x - c \le b - a$이고, [[absolute-value]]의 (7)에 의해 $|x - c| \le b - a$이다. 따라서 [[order-properties-of-reals]]의 (4)의 (iii)에 의해 $\eta\,|x - c| \le \eta\,(b - a)$이다. 실수의 계산으로
$$
\begin{aligned}
f_n(x) - f(x) &= (f_n(c) - L) \\
&\quad + \left(\int_c^x f_n' - \int_c^x g\right)
\end{aligned}
$$
이므로, [[triangle-inequality]]의 (1)에 의해 $|f_n(x) - f(x)| \le |f_n(c) - L| + \eta\,(b - a)$이다.

다음으로 고른 수렴을 보인다. 양의 실수 $\varepsilon$을 잡는다. $(f_n(c))$가 $L$로 수렴하므로 [[limit-of-sequence]]의 정의에 의해 자연수 $N_1$이 있어 $n \ge N_1$이면 $|f_n(c) - L| < \varepsilon \cdot 2^{-1}$이다. $\eta = \varepsilon\,(2(b - a))^{-1}$로 두면 [[order-properties-of-reals]]의 (6)의 (i)과 (4)의 (iv)에 의해 $0 < \eta$이고 $\eta\,(b - a) = \varepsilon \cdot 2^{-1}$이다. 고른 수렴으로 자연수 $N_2$가 있어 $n \ge N_2$와 모든 $t$에서 $|f_n'(t) - g(t)| < \eta$이다. $N = N_1 + N_2$로 두고 $n \ge N$, $x \in [a, b]$를 잡으면 (Z6)에 의해 $n \ge N_1$, $n \ge N_2$이므로, 앞 문단의 어림과 [[order-properties-of-reals]]의 (2)의 (iv)에 의해
$$
\begin{aligned}
|f_n(x) - f(x)| &< \varepsilon \cdot 2^{-1} + \varepsilon \cdot 2^{-1} \\
&= \varepsilon
\end{aligned}
$$
이다. 고른 수렴의 항목의 (8)에 의해 $(f_n)$은 $f$로 고르게 수렴한다.

**(4).** 고른 수렴의 항목의 (1)에 의해 $(f_n)$은 $f$로 점별 수렴하고, [[pointwise-convergence|사상의 열과 점별 수렴]]의 (3)에 의해 점별 극한은 $f$뿐이다. 같은 까닭으로 $(f_n')$의 점별 극한은 $g$이고, 그 (4)에 의해 모든 $x$에서 $g(x) = \lim_{n \to \infty} f_n'(x)$이다. (2)에 의해 $f' = g$이므로 식이 성립한다.
:::

## 예시와 반례

:::counterexample[함수만 고르게 수렴하는 경우의 예: 닫힌구간 [0, 1] 위의 xⁿ/n]
$[0, 1]$ 위에서 $f_n(x) = x^n n^{-1}$로 정한 열을 생각합시다. $f_n$은 $p_n$의 $[0, 1]$로의 제한의 $n^{-1}$배이므로 [[continuously-differentiable]]의 (4)와 (3)에 의해 연속미분가능하고 $f_n' = n^{-1} \cdot n\,p_{n-1}$의 제한, 곧 $f_n'(x) = x^{n-1}$입니다($n = 1$이면 $p_0$은 값이 $1$인 상수함수입니다).

함수들은 $0$으로 고르게 수렴합니다. $0 \le x \le 1$이면 [[power-of-a-real-number]]의 (6)의 (i), (ii)와 (2)의 (iv)에 의해 $0 \le x^n \le 1$이므로 $|f_n(x) - 0| \le n^{-1}$이고, [[basic-limits]]의 (2)와 [[uniform-convergence|고른 수렴]]의 (4)에 의해 $(f_n)$은 상수함수 $0$으로 고르게 수렴합니다. 이 극한의 도함수는 모든 점에서 $0$입니다([[derivative]]의 (1)). 그런데 모든 $n$에서 $f_n'(1) = 1^{n-1} = 1$이므로 $\lim f_n'(1) = 1 \ne 0$입니다.

이 열에서 빠진 가정은 도함수의 고른 수렴입니다. $(f_n')$이 어떤 함수로 고르게 수렴한다면, [[subsequence]]의 (4)에 의해 $i$를 $i + 1$로 보내는 함수는 첨자열이므로 고른 수렴의 (5)에 의해 그 부분수열 $(f_{i+1}') = (p_i|_{[0, 1]})$도 고르게 수렴해야 하는데, 이것은 고른 수렴의 (9)의 (ii)와 어긋납니다.
:::

## 확인 질문

:::check[f_n 이 모두 같은 함수에 상수 n⁻¹ 을 더한 것, 곧 f_n(x) = u(x) + n⁻¹ 이면 이 정리는 무엇을 말하는가?]
$u : [a, b] \to \mathbb{R}$가 연속미분가능하면 [[continuously-differentiable]]의 (3), (4)에 의해 $f_n' = u'$이므로 $(f_n')$은 상수 열이고 [[uniform-convergence|고른 수렴]]의 (3)에 의해 $u'$으로 고르게 수렴합니다. 아무 $c$에서 $f_n(c) = u(c) + n^{-1}$은 $L = u(c)$로 수렴합니다. (2)의 $f(x) = u(c) + \int_c^x u'$은 [[fundamental-theorem-of-calculus-first-form|미적분의 기본정리 첫째 꼴]]의 (2)에 의해 $u(x)$이므로, 정리는 $(f_n)$이 $u$로 고르게 수렴하고 그 도함수가 $u'$이라는 것을 말합니다. 실제로 $|f_n(x) - u(x)| = n^{-1}$입니다.
:::

:::check[이 정리에서 한 점 c 에서의 수렴을 빼면, 함수들의 열은 수렴하지 않을 수 있는가?]
그렇습니다. $[a, b]$ 위의 상수함수 $f_n(x) = n$을 보면 $f_n' = 0$이므로 도함수의 열은 상수 열이어서 고르게 수렴하지만, 어느 점에서도 $(f_n(c)) = (n)$은 [[basic-limits]]의 (4)에 의해 발산합니다. 도함수는 함수를 상수만큼만 정하므로, 그 상수를 정해 주는 가정이 필요합니다.
:::
