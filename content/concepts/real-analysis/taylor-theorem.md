---
title: 테일러 정리
title_en: Taylor's Theorem
aliases: [테일러의 정리, 라그랑주 나머지, 라그랑주 나머지항, 나머지항, Taylor's theorem, Lagrange remainder, Lagrange form of the remainder]
kind: theorem
field: real-analysis
msc: ["26A24", "41A58"]
level: undergrad
summary: "a < b 이고 f : [a, b] → ℝ 가 n 번 미분가능하며 f^(n) 이 연속이고 열린구간 (a, b) 에서 미분가능하면, [a, b] 의 서로 다른 두 점 x₀, x 에 대하여 둘 사이(끝점 제외)의 c 가 있어 f(x) = T_n^{x₀} f(x) + f^(n+1)(c)(x − x₀)^(n+1)/(n + 1)! 이다. n = 0 은 평균값 정리이다. 구간 위의 n + 1 번 미분가능한 함수에 대한 꼴과 나머지항의 어림도 진술한다."
requires: [real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, interval, real-valued-function, limit-of-a-function, continuous-function, continuity-of-sum-and-product, derivative, differentiable-implies-continuous, derivative-rules, rolle-theorem, mean-value-theorem, natural-logarithm, recursion-theorem, finite-sum-of-reals, linearity-and-order-of-finite-sums, telescoping-sum, series-indexed-from-zero, factorial-from-zero, finite-sums-of-functions, higher-derivative, taylor-polynomial]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "4.3절 Taylor's theorem 의 4.3.2절 Taylor's theorem: 정리 앞 문단 (p.171), Theorem 4.3.2 (Taylor) 와 그 뒤 문단, 증명 (p.172–173); 4.3.3절 Exercises 의 Exercise 4.3.5 와 그 각주 (p.174)"
    checked: original
    note: "출처 Theorem 4.3.2(p.172)는 f : [a, b] → ℝ 가 [a, b] 에서 n 개의 연속인 도함수를 갖고 f^(n+1) 이 (a, b) 에서 있을 때, [a, b] 의 서로 다른 두 점 x₀, x 에 대해 'c between x₀ and x' 가 있어 f(x) = P_n^{x₀}(x) + f^(n+1)(c)/(n+1)! (x − x₀)^(n+1) 이라고 진술하고, 이 나머지를 'the Lagrange form of the remainder' 라 부르며 'There are other ways to write the remainder term, but we skip those' 라고 적는다. 이 항목의 (1)은 같은 진술이다. 출처의 '연속인 n 개의 도함수'는 이 항목에서 'n 번 미분가능하고 f^(n) 이 연속'이고(낮은 차수의 연속은 고계 도함수 항목의 (7)로 따라 나온다), 'between' 은 증명에서 평균값 정리로 얻는 점이므로 끝점을 뺀 뜻으로 읽어 부등식으로 적었다. 출처의 증명은 f(x) = P_n^{x₀}(x) + M(x − x₀)^(n+1) 인 M 을 잡고 g(s) = f(s) − P_n^{x₀}(s) − M(s − x₀)^(n+1) 이 x₀ 에서 n 계까지 0 임을 'We compute' 로 얻은 뒤, 평균값 정리를 n + 1 번 되풀이해('We repeat the argument n + 1 times') g^(n+1)(c) = 0 인 c 를 얻는다. 이 항목은 그 길을 따르지 않고, t 를 변수로 하는 Φ(t) = Σ_{k=0}^n f^(k)(t)(x − t)^k/k! 의 도함수가 망원 합으로 f^(n+1)(t)(x − t)^n/n! 이 되는 것을 보이고 롤의 정리를 한 번만 쓴다(점을 n + 1 번 차례로 잡지 않는다). 출처는 정리 앞 문단(p.171)에서 이 정리가 평균값 정리를 포함하고 평균값 정리는 n = 0 인 테일러 정리로 볼 수 있다고 적는다. 이 항목의 (2)가 그 내용이다. (3)의 구간 판과 (4)의 어림은 출처에 명제로 없다(검색어 'remainder', 'Lagrange', 'Taylor's theorem' 으로 책 전체를 찾았고 4.3.3절 연습문제를 처음부터 읽었다). 출처의 연습문제 4.3.5(p.174)는 n + 1 번 연속미분가능하면 R_n^{x₀}(x)/(x − x₀)^n 이 x₀ 에서 0 으로 간다는 것이고, 그 각주는 n 번만 미분가능해도 같은 진술이 성립하지만 증명이 훨씬 어렵다고 적는다. 예시 'x³ 에서 어느 c 든 되는 나머지항'의 함수 x³ 과 x₀ = 1 은 출처 2.6.5절(p.109)이 다항식을 x₀ = 1 둘레로 다시 쓰는 예와 같은 발상이고, 다항식의 나머지항이 0 이 되는 것은 연습문제 4.3.2(p.174)와 같은 발상이다. 반례 'x|x| 에서 c 가 없는 두 점'은 연습문제 4.3.3(p.174)의 |x|³ 처럼 절댓값으로 도함수의 차수가 끊기는 함수를 쓰는 발상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(테일러 정리의 망원 합·롤 정리 경로와 이계도함수 판정의 가정 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
닫힌구간, 열린구간과 구간은 [[interval]]의 것이고, 연속과 연속함수는 [[continuous-function]]의 것이며, 미분가능, 미분계수, "열린구간에서 미분가능하다"는 말은 [[derivative]]의 것이다. $n$번 미분가능, $k$계 도함수 $f^{(k)}$와 한 점에서의 값 $f^{(n+1)}(c)$는 [[higher-derivative]]의 것이고, 테일러 다항식 $T_n^{x_0} f$는 [[taylor-polynomial]]의 것이며, $0$ 이상인 정수의 계승은 [[factorial-from-zero]]의 것이다. 두 수의 최대 $\max\{x_0, x\}$와 최소 $\min\{x_0, x\}$는 [[absolute-value]]의 것이다. 아래에서 $n$은 $0$ 이상인 정수이다.

1. (닫힌구간, 라그랑주 꼴의 나머지항) $a < b$인 실수 $a$, $b$와 $f : [a, b] \to \mathbb{R}$에 대하여, $f$가 $n$번 미분가능하고 $f^{(n)}$이 연속함수이며 $f^{(n)}$이 열린구간 $(a, b)$에서 미분가능하다고 하자. 그러면 $x_0 \ne x$인 $[a, b]$의 모든 원소 $x_0$, $x$에 대하여
   $$
   \min\{x_0, x\} < c < \max\{x_0, x\}
   $$
   이고
   $$
   \begin{aligned}
   &f(x) \\
   &= T_n^{x_0} f(x) \\
   &\qquad + \frac{f^{(n+1)}(c)}{(n + 1)!}\, (x - x_0)^{n+1}
   \end{aligned}
   $$
   인 실수 $c$가 있다. 여기서 $c \in (a, b)$이므로 $f^{(n+1)}(c) = (f^{(n)})'(c)$가 정해진다. $f(x) - T_n^{x_0} f(x)$를 **나머지항**(remainder term)이라 하고, 오른쪽 둘째 항의 꼴을 나머지항의 **라그랑주 꼴**(Lagrange form)이라 한다. 정수의 나눗셈의 "나머지"와는 다른 말이다. $c$는 $x_0$과 $x$에 따라 달라질 수 있다. $x = x_0$이면 [[taylor-polynomial]]의 (1)에 의해 나머지항은 $0$이고, 이때는 $c$를 말하지 않는다.
2. ($n = 0$) $n = 0$일 때 (1)의 가정은 $f$가 연속함수이고 $(a, b)$에서 미분가능하다는 것이고, 결론은 $f(x) = f(x_0) + f'(c)(x - x_0)$이다. 곧 (1)은 $n = 0$에서 [[mean-value-theorem|평균값 정리]]를 $[\min\{x_0, x\}, \max\{x_0, x\}]$에 쓴 것과 같은 결론이다.
3. (구간 위의 함수) $I$가 구간이고 $f : I \to \mathbb{R}$가 $n + 1$번 미분가능하면, $x_0 \ne x$인 $I$의 모든 원소 $x_0$, $x$에 대하여 $\min\{x_0, x\} < c < \max\{x_0, x\}$이고 $f(x) = T_n^{x_0} f(x) + f^{(n+1)}(c)\,\bigl((n + 1)!\bigr)^{-1} (x - x_0)^{n+1}$인 실수 $c$가 있다. 이 $c$는 $I$의 원소이다.
4. (나머지항의 어림) (1) 또는 (3)의 가정 아래, $x_0$, $x$가 (1)에서는 $[a, b]$의, (3)에서는 $I$의 원소이고 $K$가 실수이며 $\min\{x_0, x\} < t < \max\{x_0, x\}$인 모든 실수 $t$에서 $|f^{(n+1)}(t)| \le K$이면
   $$
   \begin{aligned}
   &\bigl| f(x) - T_n^{x_0} f(x) \bigr| \\
   &\le \frac{K\, |x - x_0|^{n+1}}{(n + 1)!}
   \end{aligned}
   $$
   이다. $x = x_0$이어도 된다(양쪽이 $0$이다).
:::

:::english
Closed intervals, open intervals and intervals are those of the entry on intervals; continuity and continuous functions are those of the entry on continuous functions; differentiability, the derivative at a point and the phrase "differentiable on an open interval" are those of the entry on the derivative. Being $n$ times differentiable, the $k$th derivative $f^{(k)}$ and the value $f^{(n+1)}(c)$ at a point are those of the entry on higher-order derivatives; the Taylor polynomial $T_n^{x_0} f$ is that of the entry on Taylor polynomials; factorials of integers $\ge 0$ are those of the entry on factorials from zero. The maximum $\max\{x_0, x\}$ and minimum $\min\{x_0, x\}$ of two numbers are those of the entry on absolute value. Below, $n$ is an integer $\ge 0$.

1. (Closed interval, remainder term in Lagrange form) Let $a < b$ be real numbers and $f : [a, b] \to \mathbb{R}$, and suppose $f$ is $n$ times differentiable, $f^{(n)}$ is a continuous function, and $f^{(n)}$ is differentiable on the open interval $(a, b)$. Then for all elements $x_0$, $x$ of $[a, b]$ with $x_0 \ne x$ there is a real number $c$ with
   $$
   \min\{x_0, x\} < c < \max\{x_0, x\}
   $$
   and
   $$
   \begin{aligned}
   &f(x) \\
   &= T_n^{x_0} f(x) \\
   &\qquad + \frac{f^{(n+1)}(c)}{(n + 1)!}\, (x - x_0)^{n+1} .
   \end{aligned}
   $$
   Here $c \in (a, b)$, so $f^{(n+1)}(c) = (f^{(n)})'(c)$ is defined. $f(x) - T_n^{x_0} f(x)$ is called the **remainder term**, and the form of the second term on the right is called the **Lagrange form** of the remainder term. This is a different word from the remainder of integer division. $c$ may depend on $x_0$ and $x$. If $x = x_0$, the remainder term is $0$ by item (1) of the entry on Taylor polynomials, and then no $c$ is spoken of.
2. ($n = 0$) For $n = 0$ the hypothesis of (1) says that $f$ is a continuous function differentiable on $(a, b)$, and the conclusion is $f(x) = f(x_0) + f'(c)(x - x_0)$. That is, for $n = 0$, (1) gives the same conclusion as the mean value theorem applied on $[\min\{x_0, x\}, \max\{x_0, x\}]$.
3. (Functions on an interval) If $I$ is an interval and $f : I \to \mathbb{R}$ is $n + 1$ times differentiable, then for all elements $x_0$, $x$ of $I$ with $x_0 \ne x$ there is a real number $c$ with $\min\{x_0, x\} < c < \max\{x_0, x\}$ and $f(x) = T_n^{x_0} f(x) + f^{(n+1)}(c)\,\bigl((n + 1)!\bigr)^{-1} (x - x_0)^{n+1}$. This $c$ belongs to $I$.
4. (Bound on the remainder term) Under the hypotheses of (1) or (3), if $x_0$, $x$ are elements of $[a, b]$ in case (1) and of $I$ in case (3), $K$ is a real number, and $|f^{(n+1)}(t)| \le K$ for every real $t$ with $\min\{x_0, x\} < t < \max\{x_0, x\}$, then
   $$
   \begin{aligned}
   &\bigl| f(x) - T_n^{x_0} f(x) \bigr| \\
   &\le \frac{K\, |x - x_0|^{n+1}}{(n + 1)!} .
   \end{aligned}
   $$
   $x = x_0$ is allowed (both sides are $0$).
:::

## 직관

[[mean-value-theorem|평균값 정리]]는 $f(x) - f(x_0)$을 어떤 중간점의 기울기 $f'(c)$와 거리 $x - x_0$의 곱으로 씁니다. 테일러 정리는 이것을 한 단계씩 넓힙니다. $f(x_0)$ 대신 [[taylor-polynomial|테일러 다항식]] $T_n^{x_0} f(x)$로 어림하면, 남는 오차는 중간점에서의 $n + 1$계 도함수와 거리의 $n + 1$제곱으로 쓸 수 있다는 것입니다. 그래서 $|f^{(n+1)}|$이 $K$ 이하이면 오차는 $K\,|x - x_0|^{n+1}/(n + 1)!$ 이하입니다((4)). 거리가 $1$보다 작으면 $n$이 클수록 이 상한이 빠르게 작아질 수 있습니다.

증명의 생각은 "$x$를 고정하고 출발점을 움직인다"는 것입니다. 출발점 $t$에서 만든 테일러 다항식의 $x$에서의 값 $\Phi(t)$를 보면, $t = x$에서는 $f(x)$이고 $t = x_0$에서는 $T_n^{x_0} f(x)$입니다. $\Phi$를 $t$로 미분하면 거의 모든 항이 이웃한 항과 지워져(망원 합) 마지막 한 항만 남습니다. 여기에 알맞은 보정 항을 더해 양 끝 값을 같게 만들고 [[rolle-theorem|롤의 정리]]를 한 번 쓰면 $c$가 나옵니다.

가정에서 $f^{(n)}$의 연속은 닫힌구간 전체에서, 미분가능은 열린구간에서만 요구합니다. 증명에서 연속은 롤의 정리를 쓸 함수가 양 끝까지 연속이 되게 하는 데에, 미분가능은 열린구간의 점마다 $\Phi$를 미분하는 데에 쓰입니다. 아래 반례는 $f^{(n)}$이 열린구간의 한 점에서만 미분가능하지 않아도 결론이 깨질 수 있음을 보입니다.

## 증명

:::idea
$x$를 고정하고 $\Phi(t) = \sum_{k=0}^{n} f^{(k)}(t)(k!)^{-1}(x - t)^k$를 $t$의 함수로 보면 $\Phi'(t) = f^{(n+1)}(t)(n!)^{-1}(x - t)^n$이 된다(망원 합). $\Phi$에 $(x - t)^{n+1}$의 배수를 더해 $t = x_0$과 $t = x$에서 값이 같게 하고 롤의 정리를 쓴다.
:::

:::hint
$\Phi(x) = f(x)$이고 $\Phi(x_0) = T_n^{x_0} f(x)$이다. $t = x$를 넣으면 $k \ge 1$인 항이 모두 $0$이 되기 때문이다.
:::

:::hint
$k \ge 1$이면 $f^{(k)}(t)(k!)^{-1}(x - t)^k$의 도함수는 $f^{(k+1)}(t)(k!)^{-1}(x - t)^k - f^{(k)}(t)\bigl((k - 1)!\bigr)^{-1}(x - t)^{k-1}$이다. $\gamma_k = f^{(k+1)}(t)(k!)^{-1}(x - t)^k$로 두면 이것은 $\gamma_k - \gamma_{k-1}$이다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (4)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. "합의 규칙 (3)"처럼 쓴 것은 [[series-indexed-from-zero]]의 번호이고, 범위에서만 정해진 항에 쓰는 것은 같은 항목의 (4)에 의한다. "고계 (3)"은 [[higher-derivative]]의 번호이다.

**1의 증명.** $x_0 \ne x$인 $x_0$, $x \in [a, b]$를 고정하고 $\alpha = \min\{x_0, x\}$, $\beta = \max\{x_0, x\}$로 둔다. [[absolute-value]]의 최대·최소의 정의에 의해 $x_0 < x$이면 $\alpha = x_0$, $\beta = x$이고, $x < x_0$이면 $\alpha = x$, $\beta = x_0$이다(순서 성질 (1)로 $x_0 \ne x$이면 둘 가운데 정확히 하나가 성립한다). 따라서 $\{\alpha, \beta\} = \{x_0, x\}$이고 $\alpha < \beta$이다. [[interval]]의 (4)에 의해 $[\alpha, \beta] \subseteq [a, b]$이고, $\alpha < t < \beta$이면 $a \le \alpha < t < \beta \le b$이므로 $t \in (a, b)$이다. 아래에서 $t$는 $[\alpha, \beta]$의 원소이고, 함수는 모두 $[\alpha, \beta]$ 위의 실함수로 본다. $f$와 그 도함수들은 $[\alpha, \beta]$로 제한해 쓰며, 제한의 값은 원래 함수의 값과 같다([[real-valued-function]]의 (6)).

**(가) 항의 연속과 미분.** $0 \le k \le n$인 $k$에서 $w_k(t) = (x - t)^k$로 정한 함수 $w_k$를 생각한다. [[power-of-a-real-number]]의 (2)의 (iii)과 (K…)에 의해 $(x - t)^k = (-1)^k (t - x)^k$이므로, [[finite-sums-of-functions|함수의 유한 합]]의 (7)의 (iv)와 (iii)(한 항, $a = x$, 계수 $(-1)^k$)에 의해 $w_k$는 연속미분가능하다. 그 도함수는 $k = 0$이면 값이 $0$인 상수함수이고, $k \ge 1$이면 $t$에서의 값이 $k(-1)^k(t - x)^{k-1} = -k(x - t)^{k-1}$인 함수이다(같은 거듭제곱의 성질). 또 $f^{(k)}$는 $k \le n - 1$이면 고계 (7)에 의해 연속함수이고 $k = n$이면 가정에 의해 연속함수이며, [[continuous-function]]의 (5)에 의해 제한도 연속함수이다. 그리고 $\alpha < t < \beta$이면 $f^{(k)}$는 $t$에서 미분가능하다. $k \le n - 1$이면 고계 (7)에 의해 $f^{(k)}$가 미분가능한 함수이고, $k = n$이면 $t \in (a, b)$이기 때문이다. 고계 (3)에 의해 그 미분계수는 $f^{(k+1)}(t)$이고, [[derivative]]의 (2)에 의해 제한한 함수의 $t$에서의 미분계수도 같다.

**(나) $\Phi$와 그 도함수.** 0부터 번호가 붙은 사상의 열 $(\varphi_k)_{k \ge 0}$을, $0 \le k \le n$이면 $\varphi_k(t) = f^{(k)}(t)\,(k!)^{-1}\, w_k(t)$, $k \ge n + 1$이면 값이 $0$인 상수함수로 정한다(각 $\varphi_k$는 이미 정해진 함수이므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 이런 열이 있다). 함수의 유한 합의 (6)의 $0$부터의 $n$번째 부분합 함수를 $\Phi$라 하면 모든 $t$에서
$$
\Phi(t) = \sum_{k=0}^{n} \frac{f^{(k)}(t)}{k!}\, (x - t)^k
$$
이다. (가)와 [[continuity-of-sum-and-product|연속함수의 합·곱]]의 (3)에 의해 $0 \le k \le n$인 $\varphi_k$는 연속함수이므로 함수의 유한 합의 (6)의 (ii)에 의해 $\Phi$는 연속함수이다.

$\alpha < t < \beta$인 $t$를 고정한다. (가)와 [[derivative-rules|미분법]]의 (1), (4)에 의해 $\varphi_k$는 $t$에서 미분가능하다. $0 \le k \le n$에서 $\gamma_k = f^{(k+1)}(t)\,(k!)^{-1}(x - t)^k$로 두면($t$를 고정했으므로 0부터 번호가 붙은 실수이다) 다음이 성립한다.

- $k = 0$이면 $w_0$은 값이 $1$인 상수함수이고 $0! = 1$이므로 $\varphi_0'(t) = f^{(1)}(t) \cdot 1 + f(t) \cdot 0 = \gamma_0$이다.
- $1 \le k \le n$이면 곱의 법칙과 (가)에 의해
  $$
  \begin{aligned}
  &\varphi_k'(t) \\
  &= \frac{1}{k!}\Bigl( f^{(k+1)}(t)\,(x - t)^k \\
  &\qquad - f^{(k)}(t)\, k\,(x - t)^{k-1} \Bigr)
  \end{aligned}
  $$
  이다. [[factorial-from-zero]]의 (4)의 셋째 식($n = k - 1$)에 의해 $k\,(k!)^{-1} = \bigl((k - 1)!\bigr)^{-1}$이므로 $\varphi_k'(t) = \gamma_k - \gamma_{k-1}$이다.

함수의 유한 합의 (6)의 (iii)과 합의 규칙 (3), [[telescoping-sum]]의 (1)($j = 0$, 끝 번호 $n$)에 의해
$$
\begin{aligned}
&\Phi'(t) \\
&= \gamma_0 + \sum_{k=1}^{n} (\gamma_k - \gamma_{k-1}) \\
&= \gamma_0 + (\gamma_n - \gamma_0) = \gamma_n
\end{aligned}
$$
이다. $n = 0$이면 가운데 합은 빈 합이고 $\gamma_n = \gamma_0$이므로 같은 식이 성립한다. 곧 $\alpha < t < \beta$이면 $\Phi$는 $t$에서 미분가능하고
$$
\Phi'(t) = \frac{f^{(n+1)}(t)}{n!}\, (x - t)^n
$$
이다.

**(다) 양 끝의 값.** $t = x$이면 $x - x = 0$이고, $0^0 = 1$, $k \ge 1$이면 $0^k = 0$이다([[power-of-a-real-number]]의 정의와 (2)의 (iv)). 합의 규칙 (3)과 [[linearity-and-order-of-finite-sums]]의 (2)에 의해 $\Phi(x) = f^{(0)}(x)(0!)^{-1} \cdot 1 + 0 = f(x)$이다(고계 (1)). $t = x_0$이면 [[taylor-polynomial]]의 정의에 의해 $\Phi(x_0) = T_n^{x_0} f(x)$이다.

**(라) 롤의 정리.** $x - x_0 \ne 0$이므로 [[power-of-a-real-number]]의 (3)에 의해 $(x - x_0)^{n+1} \ne 0$이다. 실수
$$
\begin{aligned}
&M \\
&= \bigl( f(x) - T_n^{x_0} f(x) \bigr)\,(n + 1)! \\
&\qquad \cdot \bigl((x - x_0)^{n+1}\bigr)^{-1}
\end{aligned}
$$
을 두고 $\Psi(t) = \Phi(t) + M\,\bigl((n + 1)!\bigr)^{-1} w_{n+1}(t)$로 정한다. 여기서 $w_{n+1}(t) = (x - t)^{n+1}$이고, (가)와 같은 이유로 $w_{n+1}$은 연속미분가능하며 도함수의 값은 $-(n + 1)(x - t)^n$이다. $\Psi$는 연속함수이고([[continuity-of-sum-and-product|연속함수의 합·곱]]의 (3), [[differentiable-implies-continuous|미분가능하면 연속]]의 (2)), $\alpha < t < \beta$이면 미분법의 (1), (2)와 (나)에 의해 $t$에서 미분가능하며, [[factorial-from-zero]]의 (4)의 셋째 식에 의해 $(n + 1)\bigl((n + 1)!\bigr)^{-1} = (n!)^{-1}$이므로
$$
\begin{aligned}
&\Psi'(t) \\
&= \bigl( f^{(n+1)}(t) - M \bigr)\, (n!)^{-1}\, (x - t)^n
\end{aligned}
$$
이다. (다)에 의해 $\Psi(x) = f(x) + 0 = f(x)$이고($n + 1 \ge 1$이므로 $0^{n+1} = 0$), $\Psi(x_0) = T_n^{x_0} f(x) + M\,\bigl((n + 1)!\bigr)^{-1}(x - x_0)^{n+1} = T_n^{x_0} f(x) + \bigl(f(x) - T_n^{x_0} f(x)\bigr) = f(x)$이다((K8)의 (iii)). $\{\alpha, \beta\} = \{x_0, x\}$이므로 $\Psi(\alpha) = \Psi(\beta)$이다. [[rolle-theorem|롤의 정리]]를 $[\alpha, \beta]$ 위의 $\Psi$에 쓰면 $\alpha < c < \beta$이고 $\Psi'(c) = 0$인 $c$가 있다. $c \ne x$이므로($x$는 $\alpha$이거나 $\beta$이다) $x - c \ne 0$이고 $(x - c)^n \ne 0$이며, [[factorial-from-zero]]의 (3)에 의해 $(n!)^{-1} \ne 0$이다. (K9)에 의해 $f^{(n+1)}(c) - M = 0$, 곧 $M = f^{(n+1)}(c)$이다. $M$의 정의의 양변에 $\bigl((n + 1)!\bigr)^{-1}(x - x_0)^{n+1}$을 곱하면
$$
\begin{aligned}
&f(x) - T_n^{x_0} f(x) \\
&= \frac{f^{(n+1)}(c)}{(n + 1)!}\, (x - x_0)^{n+1}
\end{aligned}
$$
이다. 여기서 $f^{(n+1)}(c)$는 $[a, b]$ 위의 $f$에 대한 고계 (3)의 값이다((가)의 끝에서 보았듯이 제한해도 같다).

**2의 증명.** $n = 0$이면 고계 (1)에 의해 $f^{(0)} = f$이므로 가정은 $f$가 연속함수이고 $(a, b)$에서 미분가능하다는 것이다. [[taylor-polynomial]]의 (1)에 의해 $T_0^{x_0} f(x) = f(x_0)$이고, 고계 (3)에 의해 $f^{(1)}(c) = f'(c)$이며 $1! = 1$, $(x - x_0)^1 = x - x_0$이다. 평균값 정리를 $[\alpha, \beta]$ 위의 제한에 쓰면 $f(\beta) - f(\alpha) = f'(c)(\beta - \alpha)$인 $\alpha < c < \beta$가 있고, $x = \beta$이면 이것이 그대로, $x = \alpha$이면 양변에 $-1$을 곱한 것이 $f(x) - f(x_0) = f'(c)(x - x_0)$이다.

**3의 증명.** $\alpha$, $\beta$를 위와 같이 두면 [[interval]]의 (4)에 의해 $[\alpha, \beta] \subseteq I$이다. 고계 (5)에 의해 $g = f|_{[\alpha, \beta]}$는 $n + 1$번 미분가능하고 $0 \le k \le n + 1$에서 $g^{(k)} = f^{(k)}|_{[\alpha, \beta]}$이다. 고계 (1)과 (7)에 의해 $g^{(n)}$은 미분가능한 함수이고 연속함수이므로 특히 $(\alpha, \beta)$에서 미분가능하다. (1)을 $a = \alpha$, $b = \beta$, $g$에 쓰면 $\alpha < c < \beta$이고 $g(x) = T_n^{x_0} g(x) + g^{(n+1)}(c)\,\bigl((n + 1)!\bigr)^{-1}(x - x_0)^{n+1}$인 $c$가 있다. $g(x) = f(x)$이고, [[taylor-polynomial]]의 (5)에 의해 $T_n^{x_0} g = T_n^{x_0} f$이며, $g^{(n+1)}(c) = f^{(n+1)}(c)$이다. $c \in [\alpha, \beta] \subseteq I$이다.

**4의 증명.** $x = x_0$이면 [[taylor-polynomial]]의 (1)에 의해 왼쪽은 $|0| = 0$이고, 오른쪽은 $0^{n+1} = 0$이므로 $0$이다. $x \ne x_0$이면 (1) 또는 (3)의 $c$를 잡는다. $c$는 가정의 범위에 들므로 $|f^{(n+1)}(c)| \le K$이다. [[factorial-from-zero]]의 (3)에 의해 $(n + 1)! > 0$이므로, [[absolute-value]]의 (1), (4), (9)와 [[power-of-a-real-number]]의 (4)에 의해
$$
\begin{aligned}
&\bigl| f(x) - T_n^{x_0} f(x) \bigr| \\
&= \frac{|f^{(n+1)}(c)|\, |x - x_0|^{n+1}}{(n + 1)!} \\
&\le \frac{K\, |x - x_0|^{n+1}}{(n + 1)!}
\end{aligned}
$$
이다(부등식은 순서 성질 (4)의 (iii)을 $0 \le |x - x_0|^{n+1}((n + 1)!)^{-1}$에 쓴 것이다). $\blacksquare$
:::

## 예시와 반례

:::example[x³ 에서 어느 c 든 되는 나머지항]
$h(x) = x^3$으로 정한 $h : \mathbb{R} \to \mathbb{R}$, $x_0 = 1$, $n = 2$를 생각합니다. [[higher-derivative]]의 (8)($a = 0$, $m = 3$, $c_3 = 1$, 나머지 계수 $0$)에 의해 $h'(x) = 3x^2$, $h''(x) = 6x$이고 $h^{(3)}$은 값이 $6$인 상수함수, $h^{(4)}$는 값이 $0$인 상수함수입니다. $h(1) = 1$, $h'(1) = 3$, $h''(1) = 6$이므로 $T_2^{1} h(x) = 1 + 3(x - 1) + 6 \cdot (2!)^{-1}(x - 1)^2 = 1 + 3(x - 1) + 3(x - 1)^2$입니다. $x = 2$이면 $h(2) - T_2^{1} h(2) = 8 - 7 = 1$이고, $1 < c < 2$인 어느 $c$에서도
$$
\frac{h^{(3)}(c)}{3!}\, (2 - 1)^3 = \frac{6}{6} = 1
$$
이므로, (3)의 $c$는 하나로 정해지지 않고 $(1, 2)$의 모든 점이 됩니다. $n = 3$으로 올리면 $h^{(4)}$가 값이 $0$인 상수함수이므로 나머지항은 $0$이고, $h = T_3^{1} h$입니다.
:::

:::example[자연로그의 어림]
[[natural-logarithm|자연로그]]의 (2)에 의해 $\ln$은 $\mathbb{R}_{>0}$ 위의 미분가능한 함수이고 $\ln'(x) = x^{-1}$입니다. $i$를 $\mathbb{R}_{>0}$ 위의 항등함수라 하면 $\ln' = 1/i$이고, $i$는 미분가능하며 $0$이 되지 않으므로 [[derivative-rules|미분법]]의 (6)에 의해 $\ln'$은 미분가능한 함수이고 $(\ln')'(c) = -1 \cdot (c^2)^{-1}$입니다. 따라서 [[higher-derivative]]의 (2), (1)에 의해 $\ln$은 $2$번 미분가능하고 $\ln''(c) = -(c^2)^{-1}$입니다. $x_0 = 1$, $n = 1$이면 $T_1^{1} \ln(x) = \ln 1 + \ln'(1)(x - 1) = x - 1$이므로, (3)에 의해 $1$이 아닌 양수 $x$마다 $1$과 $x$ 사이(끝점 제외)의 $c$가 있어
$$
\ln x = (x - 1) - \frac{(x - 1)^2}{2c^2}
$$
입니다. $(x - 1)^2 > 0$이고 $c^2 > 0$이므로 $\ln x < x - 1$입니다. $x > 1$이면 $1 < c$이므로 $1 < c^2$이고 $(c^2)^{-1} < 1$이어서 $\ln x > (x - 1) - 2^{-1}(x - 1)^2$입니다. 예컨대 $x = 11/10$이면
$$
\frac{19}{200} < \ln\frac{11}{10} < \frac{1}{10}
$$
입니다($10^{-1} - 2^{-1} \cdot 100^{-1} = 200^{-1}(20 - 1)$).
:::

:::counterexample[x|x| 에서 c 가 없는 두 점]
$g(x) = x\,|x|$로 정한 함수를 $[-1, 1]$로 제한해 $f$라 하고 $n = 1$, $x_0 = -2^{-1}$, $x = 2^{-1}$을 봅시다. $g$는 미분가능한 함수이고 도함수는 $x$에서의 값이 $2|x|$인 함수이며, 이것은 연속함수이지만 $0$에서 미분가능하지 않고, $c \ne 0$에서는 $c$에서 미분가능하며 [[higher-derivative]]의 (3)의 값이 $c > 0$이면 $2$, $c < 0$이면 $-2$입니다. ($g'(c)$는 $c \ne 0$이면 [[derivative-rules|미분법]]의 (4)와 [[derivative]]의 (3)으로, $c = 0$이면 차분몫 $|x|$로 계산합니다. $2|x|$가 $0$에서 미분가능하다면 미분법의 (1)에 의해 $|x|$도 그럴 텐데, 이것은 [[derivative]]의 (3)에 어긋납니다.) [[derivative]]의 (2)와 [[higher-derivative]]의 (5)에 의해 제한 $f$에서도 이 값들은 같습니다. 곧 $f$는 $1$번 미분가능하고 $f'$은 연속함수이지만, $f'$은 열린구간 $(-1, 1)$의 한 점 $0$에서 미분가능하지 않아 (1)의 가정이 하나 빠집니다.

$f(-2^{-1}) = -4^{-1}$, $f'(-2^{-1}) = 1$이므로 $T_1^{-1/2} f(2^{-1}) = -4^{-1} + 1 \cdot 1 = 3 \cdot 4^{-1}$이고, 나머지항은 $f(2^{-1}) - 3 \cdot 4^{-1} = 4^{-1} - 3 \cdot 4^{-1} = -2^{-1}$입니다. 한편 $(x - x_0)^2 = 1$이므로 (1)의 결론은 $f''(c) \cdot 2^{-1} = -2^{-1}$, 곧 $f''(c) = -1$인 $-2^{-1} < c < 2^{-1}$을 요구합니다. 그러나 $c \ne 0$에서 $f''(c)$는 $2$나 $-2$이고 $c = 0$에서는 $f''(0)$이 정해지지 않으므로 그런 $c$는 없습니다.
:::

## 확인 질문

:::check[$f(x) = x^3$으로 정한 $f : \mathbb{R} \to \mathbb{R}$, $x_0 = 0$, $x = 1$, $n = 1$일 때 (3)의 $c$는 무엇인가?]
$c = 3^{-1}$ 하나뿐입니다. [[higher-derivative]]의 (8)에 의해 $f'(x) = 3x^2$, $f''(x) = 6x$이고 $f(0) = f'(0) = 0$이므로 $T_1^{0} f(1) = 0$이고 나머지항은 $f(1) = 1$입니다. 결론은 $6c \cdot 2^{-1} \cdot 1^2 = 1$, 곧 $3c = 1$이므로 $c = 3^{-1}$이고, 이것은 $0 < c < 1$을 만족합니다.
:::

:::check[$f : \mathbb{R} \to \mathbb{R}$가 $2$번 미분가능하고 $f(0) = 1$, $f'(0) = 0$이며 모든 실수 $t$에서 $|f''(t)| \le 2$이면 $f(2^{-1})$은 어느 범위에 있는가?]
$3 \cdot 4^{-1} \le f(2^{-1}) \le 5 \cdot 4^{-1}$입니다. [[taylor-polynomial|테일러 다항식]]의 (1)에 의해 $T_1^{0} f(x) = 1 + 0 \cdot x = 1$이고, (3)의 가정 아래 (4)를 $n = 1$, $K = 2$, $x_0 = 0$, $x = 2^{-1}$에 쓰면 $|f(2^{-1}) - 1| \le 2 \cdot (2^{-1})^2 \cdot (2!)^{-1} = 4^{-1}$입니다. [[absolute-value]]의 (8)에 의해 이것은 $1 - 4^{-1} \le f(2^{-1}) \le 1 + 4^{-1}$과 같습니다. 예컨대 $f(x) = 1 + x^2$이면 등호 $f(2^{-1}) = 5 \cdot 4^{-1}$이 나오므로 이 범위는 더 좁힐 수 없습니다.
:::
