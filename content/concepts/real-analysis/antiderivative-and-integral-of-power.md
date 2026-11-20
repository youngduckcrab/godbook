---
title: 원시함수와 거듭제곱의 적분
title_en: Antiderivatives and Integrals of Powers
aliases: [원시함수, 역도함수, antiderivative, primitive function]
kind: proposition
field: real-analysis
msc: ["26A36"]
level: undergrad
summary: "구간 위의 함수 f 의 원시함수는 도함수가 f 인 미분가능한 함수이다. 두 원시함수는 상수만큼 다르고, 구간 위의 연속함수에는 원시함수가 있으며 그 적분은 아무 원시함수의 값의 차이다. 이것으로 모든 실수 α, β 에서 xⁿ 의 적분을 구하고, 적분가능하지만 원시함수가 없는 함수의 예를 든다."
requires: [real-number-arithmetic, order-properties-of-reals, power-of-a-real-number, absolute-value, interval, real-valued-function, limit-of-a-function, continuous-function, continuity-of-sum-and-product, power-function-is-continuous, derivative, differentiable-implies-continuous, derivative-rules, derivative-of-power, mean-value-theorem, derivative-and-monotonicity, riemann-integral, riemann-integral-examples, monotone-implies-integrable, oriented-integral, continuously-differentiable, fundamental-theorem-of-calculus-first-form, fundamental-theorem-of-calculus-second-form]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5장 첫 문단 (p.181); 5.3절 첫 문단 (p.200); 5.3절(5.3.1 소절) Example 5.3.2 (p.201); 5.3절(5.3.2 소절) 로그와 erf 의 문단 (p.203); 5.3절(5.3.4 소절) 연습문제 5.3.6 (p.205); 4.2절(4.2.6 소절) 연습문제 4.2.8 (p.169)
    checked: original
    note: "출처는 'antiderivative' 라는 말을 정의 문장 없이 쓴다. 책 전체에서 'antiderivative' 6건(p.181 의 5장 첫 문단 두 번, p.200 의 5.3절 첫 문단, p.203 의 자연로그를 1/x 의 antiderivative 로 정하는 문단과 erf 의 문단, p.237), 'antidifferentiate' 1건(p.241)을 찾아 읽었고, 'primitive', 'anti-derivative' 는 0건이었다. 이 항목의 정의(미분가능하고 F′ = f)는 그 쓰임에 맞춘 것이다. (1)은 출처 연습문제 4.2.8(p.169; (a, b) 위의 f′ = g′ 이면 f = g + C)과 연습문제 5.3.6(p.205; 도함수가 같은 두 연속미분가능한 함수는 상수만큼 다르다는 것을 미적분의 기본정리로 보이라)과 같은 결론이고, 이 항목은 derivative-and-monotonicity 의 (2)로 보인다. (2)는 출처 5.3절 첫 문단(p.200)의 '적분으로 antiderivative 를 계산하고 그 거꾸로도 한다'는 말을 미적분의 기본정리의 두 꼴로 진술한 것이다. (3)은 출처 Example 5.3.2(p.201; x³/3 의 도함수가 x² 이므로 ∫_0^1 x² dx = 1/3)를 모든 n 과 모든 α, β 로 넓힌 것과 같은 발상이다. 연습문제 5.3.13(p.206; Σ k^ℓ/n^{ℓ+1} 의 극한)은 같은 값 1/(ℓ + 1) 을 합의 극한으로 묻는다. (5)의 함수는 출처 5.3.2 소절(p.203)의 예의 f(x < 0 이면 −1, x ≥ 0 이면 1)와 같은 꼴이다. 출처는 그 예에서 ∫_0^x f = |x| 가 0 에서 미분가능하지 않다고 적고, 이 항목은 원시함수가 없다는 것을 미분의 평균값 정리(mean-value-theorem)로 보인다. 예시 '∫_0^2 (3x² − 2x + 1) dx' 와 확인 질문은 원시함수를 식으로 하나 찾아 (2)를 쓰는 계산이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 넘겨짚은 일반 문장 1건, 근거 없는 까닭 문장 1건, 섞이기 쉬운 이름(평균값 정리)을 고쳤다."
added: 2026-11-20
---

:::statement
구간은 [[interval]]의 것이고, 미분가능, 미분가능한 함수와 도함수는 [[derivative]]의 것이며, 연속함수는 [[continuous-function]]의 것이다. 방향 있는 적분 $\int_\alpha^\beta f$와 적분 변수를 쓴 $\int_\alpha^\beta (x\text{에 대한 식})\,dx$는 [[oriented-integral]]과 [[riemann-integral]]의 것이고, 함수 $p_n$은 [[power-function-is-continuous]]의 (1)의 것이다.

**원시함수.** $I$를 구간, $f : I \to \mathbb{R}$라 하자. 함수 $F : I \to \mathbb{R}$가 $f$의 **원시함수**(antiderivative)인 것은 정확히 $F$가 미분가능한 함수이고 $F' = f$일 때이다. 곧 $I$의 모든 $x$에서 $F$가 $x$에서 미분가능하고 $F'(x) = f(x)$일 때이다. 이 사이트는 "부정적분"이라는 말과 끝이 적히지 않은 적분 기호를 쓰지 않는다.

다음이 성립한다. (1), (2)에서 $I$는 구간이고 $f : I \to \mathbb{R}$이다.

1. (상수 차) $F$, $G$가 $f$의 원시함수이면 $F - G$는 상수함수이다. 곧 어떤 실수 $C$가 있어 $I$의 모든 $x$에서 $F(x) = G(x) + C$이다. 거꾸로 $G$가 $f$의 원시함수이고 $C$가 실수이면 $G(x) + C$로 정한 함수도 $f$의 원시함수이다.
2. (연속함수의 원시함수와 적분) $f$가 연속함수이면 $f$는 원시함수를 갖는다. 예를 들어 $I$의 아무 원소 $p$에 대하여 $F(x) = \int_p^x f$로 정한 $F : I \to \mathbb{R}$가 그렇다. 또 $G$가 $f$의 아무 원시함수이면 $I$의 모든 원소 $\alpha$, $\beta$에서
   $$
   \begin{aligned}
   \int_\alpha^\beta f &= G(\beta) - G(\alpha)
   \end{aligned}
   $$
   이다.
3. (거듭제곱) $n$이 $0$ 이상인 정수이면 $x^{n+1}(n + 1)^{-1}$로 정한 함수 $\mathbb{R} \to \mathbb{R}$는 $p_n$의 원시함수이고, 구간 $I$로 제한한 것은 $p_n|_I$의 원시함수이다. 따라서 모든 실수 $\alpha$, $\beta$에서
   $$
   \begin{aligned}
   &\int_\alpha^\beta x^n\,dx \\
   &\quad = \bigl(\beta^{n+1} - \alpha^{n+1}\bigr)(n + 1)^{-1}
   \end{aligned}
   $$
   이다. 특히 $n = 0$이면 $\int_\alpha^\beta 1\,dx = \beta - \alpha$이다.
4. (3단원의 예와의 일치) $a < b$이면 (3)의 $n = 1$의 값 $(b^2 - a^2)/2$는 [[riemann-integral-examples|리만 적분의 예]]의 (1)에서 $p = 1$, $q = 0$인 값과 같고, $0 \le a$이면 $n = 2$의 값 $(b^3 - a^3)/3$은 같은 항목의 (2)의 값과 같다. (3)은 $a < 0$인 구간 위의 $x^2$의 적분도 준다.
5. (원시함수가 없는 함수) 실수 $d$에 대하여 $f : [-1, 1] \to \mathbb{R}$를 $x < 0$이면 $f(x) = -1$, $f(0) = d$, $0 < x$이면 $f(x) = 1$로 정하면, $f$는 원시함수를 갖지 않는다. $d = 1$이면 이 $f$는 단조증가이므로 리만 적분가능하다. 곧 적분가능한 함수가 원시함수를 갖지 않을 수 있다.
:::

:::english
Intervals are those of the entry on intervals; differentiability, differentiable functions and the derivative are those of the entry on derivatives; continuous functions are those of the entry on continuous functions. The oriented integral $\int_\alpha^\beta f$ and $\int_\alpha^\beta (\text{expression in } x)\,dx$ with a variable of integration are those of the entries on the oriented integral and the Riemann integral, and the function $p_n$ is that of (1) of the entry on the continuity of power functions.

**Antiderivative.** Let $I$ be an interval and $f : I \to \mathbb{R}$. A function $F : I \to \mathbb{R}$ is an **antiderivative** of $f$ exactly when $F$ is a differentiable function and $F' = f$; that is, exactly when for every $x$ in $I$, $F$ is differentiable at $x$ and $F'(x) = f(x)$. This site does not use the term "indefinite integral" or an integral sign without limits.

The following hold. In (1) and (2), $I$ is an interval and $f : I \to \mathbb{R}$.

1. (Constant difference) If $F$ and $G$ are antiderivatives of $f$, then $F - G$ is a constant function; that is, there is a real number $C$ with $F(x) = G(x) + C$ for all $x$ in $I$. Conversely, if $G$ is an antiderivative of $f$ and $C$ is a real number, then the function defined by $G(x) + C$ is also an antiderivative of $f$.
2. (Antiderivatives and integrals of continuous functions) If $f$ is a continuous function, then $f$ has an antiderivative; for example, for any element $p$ of $I$, the function $F : I \to \mathbb{R}$ defined by $F(x) = \int_p^x f$ is one. Moreover, if $G$ is any antiderivative of $f$, then for all elements $\alpha$, $\beta$ of $I$
   $$
   \begin{aligned}
   \int_\alpha^\beta f &= G(\beta) - G(\alpha).
   \end{aligned}
   $$
3. (Powers) If $n$ is an integer with $n \ge 0$, then the function $\mathbb{R} \to \mathbb{R}$ defined by $x^{n+1}(n + 1)^{-1}$ is an antiderivative of $p_n$, and its restriction to an interval $I$ is an antiderivative of $p_n|_I$. Hence for all real numbers $\alpha$, $\beta$
   $$
   \begin{aligned}
   &\int_\alpha^\beta x^n\,dx \\
   &\quad = \bigl(\beta^{n+1} - \alpha^{n+1}\bigr)(n + 1)^{-1}.
   \end{aligned}
   $$
   In particular, for $n = 0$, $\int_\alpha^\beta 1\,dx = \beta - \alpha$.
4. (Agreement with the examples of Unit 3) If $a < b$, the value $(b^2 - a^2)/2$ of (3) for $n = 1$ equals the value of (1) of the entry on examples of Riemann integrals with $p = 1$, $q = 0$, and if $0 \le a$, the value $(b^3 - a^3)/3$ for $n = 2$ equals the value of (2) of that entry. Statement (3) also gives the integral of $x^2$ over intervals with $a < 0$.
5. (A function without an antiderivative) For a real number $d$, define $f : [-1, 1] \to \mathbb{R}$ by $f(x) = -1$ if $x < 0$, $f(0) = d$, and $f(x) = 1$ if $0 < x$. Then $f$ has no antiderivative. If $d = 1$, this $f$ is increasing and hence Riemann integrable. Thus an integrable function may have no antiderivative.
:::

## 직관

원시함수는 "미분하면 $f$가 되는 함수"입니다. 미분을 거꾸로 하는 셈입니다. 상수함수의 도함수는 $0$이므로 원시함수에 상수를 더해도 원시함수이고, (1)은 구간 위에서는 그것 말고 다른 차이가 없다는 것입니다. 구간이라는 조건은 증명에서 [[derivative-and-monotonicity|도함수와 증가·감소]]의 (2)를 쓰는 데 들어갑니다.

(2)는 미적분의 기본정리의 두 꼴을 원시함수의 말로 다시 적은 것입니다. 둘째 꼴로 원시함수를 하나 만들 수 있고, 첫째 꼴로 적분을 아무 원시함수의 값의 차로 계산합니다. 그래서 적분을 구하는 일이 "도함수가 $f$인 식을 하나 찾는 일"로 바뀝니다. (3)은 그 첫 예로, 3단원에서 다르부 합으로 힘들게 구한 $x$와 $x^2$의 적분이 한 줄로 나옵니다.

모든 함수가 원시함수를 갖지는 않습니다. (5)의 함수는 $0$의 왼쪽에서 $-1$, 오른쪽에서 $1$로 건너뜁니다. 원시함수가 있다면 미분의 평균값 정리에 의해 그 함수는 $0$의 오른쪽에서 기울기 $1$, 왼쪽에서 기울기 $-1$로 움직여야 하므로 절댓값 함수처럼 $0$에서 꺾이게 되어 $0$에서 미분가능하지 않습니다.

## 증명

:::idea
(1)은 도함수가 같은 두 함수가 상수만큼 다르다는 것이고, (2)는 미적분의 기본정리의 두 꼴이며, (3)은 거듭제곱 함수의 미분이다. (5)는 원시함수가 있다고 하고 미분의 평균값 정리로 $0$ 근처의 값을 구하면 절댓값 함수와 같은 차분몫이 나온다는 것이다.
:::

:::hint
(3)에서 $x^{n+1}(n + 1)^{-1}$의 도함수는 거듭제곱 함수의 미분과 상수배의 법칙으로 구합니다. 그 함수가 연속미분가능하다는 것을 확인하면 첫째 꼴의 (2)를 바로 쓸 수 있습니다.
:::

:::hint
(5)에서 원시함수 $G$가 있다고 하고, $0 < x \le 1$이면 $[0, x]$에서, $-1 \le x < 0$이면 $[x, 0]$에서 $G$에 미분의 평균값 정리를 쓰세요. $G(x) - G(0)$이 무엇이 되나요?
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. "실함수 (2)"처럼 쓴 것은 [[real-valued-function]]의 번호, "첫째 꼴 (2)"는 [[fundamental-theorem-of-calculus-first-form|미적분의 기본정리 (첫째 꼴)]]의 번호, "둘째 꼴 (4)"는 [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 (둘째 꼴)]]의 번호이다.

**1의 증명.** $F$, $G$가 $f$의 원시함수이면 둘은 $I$ 위의 미분가능한 함수이고 모든 $x \in I$에서 $F'(x) = f(x) = G'(x)$이다. [[derivative-and-monotonicity|도함수와 증가·감소]]의 (2)에 의해 $F - G$는 상수함수이고, 그 값을 $C$라 하면 실함수 (4)와 (K1), (K2), (K4), (K5)에 의해 $F(x) = G(x) + C$이다. 거꾸로 $G$가 원시함수이고 $u$가 $I$ 위의 값이 $C$인 상수함수이면, [[derivative]]의 (1)에 의해 $u$는 미분가능한 함수이고 $u'$은 값이 $0$인 상수함수이다. [[derivative-rules|미분의 규칙]]의 (6)에 의해 $G + u$는 미분가능한 함수이고 $(G + u)' = G' + u'$이며, 모든 $x$에서 그 값은 $f(x) + 0 = f(x)$이다((K4)). 실함수 (2), (4)에 의해 $G + u$는 $G(x) + C$로 정한 함수이다.

**2의 증명.** $f$가 연속함수이고 $p \in I$이면 둘째 꼴 (4)에 의해 $f$는 $I$의 어느 두 점 사이에서도 적분가능하고, $F(x) = \int_p^x f$로 정한 $F$는 미분가능한 함수이며 $F' = f$이다. 곧 $F$는 $f$의 원시함수이다. $G$가 $f$의 아무 원시함수이면 $G' = f$는 연속함수이므로 [[continuously-differentiable]]의 정의에 의해 $G$는 연속미분가능하다. 첫째 꼴 (2)에 의해 $I$의 모든 원소 $\alpha$, $\beta$에서 $\int_\alpha^\beta G' = G(\beta) - G(\alpha)$이고, $G' = f$이므로 왼쪽은 $\int_\alpha^\beta f$이다.

**3의 증명.** $n$을 $0$ 이상인 정수라 하고 $H = (n + 1)^{-1}\,p_{n+1}$로 두자. $n + 1 \ge 1$은 정수이고 $n + 1 \ne 0$이므로 $(n + 1)^{-1}$은 실수이다((K7), (K8)의 (iii)). 실함수 (4)에 의해 $H(x) = (n + 1)^{-1}x^{n+1} = x^{n+1}(n + 1)^{-1}$이다((K1)). [[derivative-of-power|거듭제곱 함수의 미분]]의 (1)에 의해 $p_{n+1}$은 미분가능한 함수이고 $p_{n+1}' = (n + 1)\,p_n$이다. [[derivative-rules|미분의 규칙]]의 (6)에 의해 $H$는 미분가능한 함수이고, 모든 실수 $x$에서 (K2), (K8)의 (iii), (K4)에 의해
$$
\begin{aligned}
H'(x) &= (n + 1)^{-1}(n + 1)\,x^n \\
&= x^n \\
&= p_n(x)
\end{aligned}
$$
이다. 따라서 $H$는 $p_n$의 원시함수이다. $I$가 구간이면 [[derivative]]의 (2)에 의해 $H|_I$는 미분가능한 함수이고 모든 $x \in I$에서 $(H|_I)'(x) = H'(x) = p_n|_I(x)$이므로 $H|_I$는 $p_n|_I$의 원시함수이다.

$p_n$은 [[power-function-is-continuous]]의 (1)에 의해 연속함수이고, $\mathbb{R}$은 [[interval]]의 (2)에 의해 구간이다. 2를 $I = \mathbb{R}$, $f = p_n$, $G = H$에 쓰면 모든 실수 $\alpha$, $\beta$에서
$$
\begin{aligned}
\int_\alpha^\beta x^n\,dx &= H(\beta) - H(\alpha) \\
&= \bigl(\beta^{n+1} - \alpha^{n+1}\bigr)(n + 1)^{-1}
\end{aligned}
$$
이다((K12)의 (i)). 왼쪽은 $\int_\alpha^\beta p_n$을 적분 변수로 쓴 것이다. $n = 0$이면 [[power-of-a-real-number]]의 정의에 의해 $x^0 = 1$, $x^1 = x$이고 $1^{-1} = 1$이므로 $\int_\alpha^\beta 1\,dx = \beta - \alpha$이다.

**4의 증명.** $a < b$이면 $\int_a^b$의 방향 있는 적분은 [[riemann-integral]]의 적분이다([[oriented-integral]]의 정의). (3)에서 $n = 1$이면 $(b^2 - a^2)2^{-1}$이고, [[riemann-integral-examples|리만 적분의 예]]의 (1)에서 $p = 1$, $q = 0$으로 두면 $1 \cdot (b^2 - a^2)/2 + 0 \cdot (b - a) = (b^2 - a^2)/2$이다((K4), (K9)). $n = 2$이면 $(b^3 - a^3)3^{-1}$이고, 이것은 $0 \le a$일 때 같은 항목의 (2)의 값이다. (3)은 $a$의 부호에 조건을 두지 않으므로 $a < 0$이어도 값을 준다.

**5의 증명.** $f$의 원시함수 $G : [-1, 1] \to \mathbb{R}$가 있다고 하자. $G$는 미분가능한 함수이므로 [[differentiable-implies-continuous|미분가능하면 연속이라는 정리]]의 (2)에 의해 연속함수이다.

$0 < x \le 1$이라 하자. $[0, x] \subseteq [-1, 1]$이고([[interval]]의 (4)), $G|_{[0, x]}$는 [[continuous-function]]의 (5)에 의해 연속함수이며, $0 < t < x$이면 [[derivative]]의 (2)에 의해 $t$에서 미분가능하고 미분계수가 $G'(t) = f(t) = 1$이다. [[mean-value-theorem|평균값 정리]]에 의해 $0 < c < x$이고 $G(x) - G(0) = G'(c)(x - 0)$인 $c$가 있고, $G'(c) = 1$이므로 $G(x) - G(0) = x$이다.

$-1 \le x < 0$이라 하자. 같은 방법으로 $[x, 0]$에서 미분의 평균값 정리를 쓰면 $x < c < 0$이고 $G(0) - G(x) = G'(c)(0 - x)$인 $c$가 있고, $G'(c) = f(c) = -1$이므로 (K9), (K12)에 의해 $G(0) - G(x) = x$, 곧 $G(x) - G(0) = -x$이다.

$s(x) = |x|$로 정한 $s : [-1, 1] \to \mathbb{R}$를 생각하자. [[absolute-value|절댓값]]의 (1)에 의해 위의 두 경우 모두 $G(x) - G(0) = |x| - |0| = s(x) - s(0)$이다. 따라서 $[-1, 1] - \{0\}$의 모든 $x$에서 $G$의 $0$에서의 차분몫과 $s$의 $0$에서의 차분몫은 값이 같다([[derivative]]의 정의). $G$는 $0$에서 미분가능하므로 $G$의 차분몫은 $0$에서 수렴하고, [[limit-of-a-function]]의 (5)에 의해 $s$의 차분몫도 $0$에서 수렴한다. 곧 $s$가 $0$에서 미분가능하다. 그런데 $[-1, 1]$은 구간이고 $-1$과 $1$을 원소로 가지므로 [[derivative]]의 (3)을 $r = 1$로 쓰면 $s$는 $0$에서 미분가능하지 않다. 모순이므로 $f$의 원시함수는 없다.

$d = 1$이면 $x < y$인 $[-1, 1]$의 원소에서 $f(x) \le f(y)$이므로($f$의 값은 $-1$이거나 $1$이고, $f(x) = 1$이면 $0 \le x < y$이므로 $f(y) = 1$이다) $f$는 [[derivative-and-monotonicity|도함수와 증가·감소]]의 뜻으로 단조증가이고, [[monotone-implies-integrable|단조함수의 적분가능성]]의 (4)에 의해 리만 적분가능하다. $\blacksquare$
:::

## 예시와 반례

:::example[$\int_0^2 (3x^2 - 2x + 1)\,dx$]
$f(x) = 3x^2 - 2x + 1$로 정한 $f : \mathbb{R} \to \mathbb{R}$는 [[continuous-function]]의 (4), [[power-function-is-continuous]]의 (1), [[continuity-of-sum-and-product|연속함수의 연산]]의 (3)에 의해 연속함수입니다. $G(x) = x^3 - x^2 + x$로 정한 $G : \mathbb{R} \to \mathbb{R}$는 [[derivative-of-power|거듭제곱 함수의 미분]]의 (1)과 [[derivative-rules|미분의 규칙]]의 (6)에 의해 미분가능한 함수이고 $G'(x) = 3x^2 - 2x + 1$이므로 $f$의 원시함수입니다. (2)에 의해
$$
\begin{aligned}
&\int_0^2 (3x^2 - 2x + 1)\,dx \\
&\quad = G(2) - G(0) \\
&\quad = (8 - 4 + 2) - 0 \\
&\quad = 6
\end{aligned}
$$
입니다. 적분의 선형성을 쓰지 않고 원시함수 하나로 계산했습니다. (1)에 의해 다른 원시함수 $G(x) + C$를 써도 $C$가 지워져 같은 값이 나옵니다.
:::

:::counterexample[건너뛰는 함수: 적분가능하지만 원시함수가 없는 예]
(5)에서 $d = 1$인 함수 $f$, 곧 $[-1, 1]$ 위에서 $x < 0$이면 $-1$, $0 \le x$이면 $1$인 함수를 봅니다. $f$는 적분가능하므로 [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 (둘째 꼴)]]의 꼴로 $F(x) = \int_0^x f$를 정할 수 있지만, (5)에 의해 이 $F$를 포함해 어떤 함수도 $f$의 원시함수가 아닙니다. 둘째 꼴의 (4)의 가정 "$f$가 연속함수"를 "$f$가 적분가능"으로 바꿀 수 없다는 것을 보입니다. (5)의 증명은 $f(0)$의 값을 쓰지 않으므로, $0$에서의 값을 어떻게 바꾸어도 원시함수는 생기지 않습니다.
:::

## 확인 질문

:::check[$\int_{-2}^{1} x^3\,dx$는?]
$-15/4$입니다. (3)을 $n = 3$, $\alpha = -2$, $\beta = 1$로 쓰면 $\bigl(1^4 - (-2)^4\bigr)4^{-1} = (1 - 16)/4 = -15/4$입니다([[power-of-a-real-number]]의 (1)로 $(-2)^4 = 16$).
:::

:::check[$f$가 구간 $I$ 위의 연속함수이고 $p \in I$일 때, $f$의 원시함수 $G$ 가운데 $G(p) = 0$인 것은 몇 개인가?]
하나뿐이고, 그것은 $F(x) = \int_p^x f$입니다. $F$는 (2)에 의해 원시함수이고 [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 (둘째 꼴)]]의 (6)에 의해 $F(p) = 0$입니다. $G$가 $G(p) = 0$인 원시함수이면 (1)에 의해 $G(x) = F(x) + C$인 실수 $C$가 있고, $x = p$를 넣으면 $0 = 0 + C$이므로 $C = 0$, 곧 $G = F$입니다([[real-valued-function]]의 (2)).
:::
