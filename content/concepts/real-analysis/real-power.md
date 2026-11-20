---
title: 양수의 실수 거듭제곱
title_en: Real Powers of Positive Numbers
aliases: [실수 지수, 실수 거듭제곱, 무리수 지수, 거듭제곱근, 수 e, 오일러 수, real exponent, Euler's number, nth root]
kind: definition
field: real-analysis
msc: ["26A09"]
level: undergrad
summary: "양수 a 와 실수 y 에 대하여 a 의 y 제곱을 exp(y ln a) 로 정의하고, 수 e 를 exp(1) 로 정의한다. 지수가 0 이상인 정수, −1, 1/2, 1/m 일 때 이 값은 이미 있던 거듭제곱, 역수, 제곱근, m 제곱근과 같다. 실수 지수의 지수법칙, eˣ = exp(x), 밑과 지수에 따른 단조성, 도함수 (ln a)aˣ 와 r x^(r−1), 그리고 2 < e < 3 을 증명한다. 밑이 0 이하인 수에는 이 정의를 쓰지 않는다."
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, power-of-a-real-number, square-root-exists, interval, real-valued-function, derivative, derivative-rules, derivative-of-power, chain-rule, derivative-and-monotonicity, continuously-differentiable, natural-logarithm, laws-of-logarithm, exponential-function, laws-of-exponential-function]
sources:
  - ref: lebl-basic-analysis
    loc: 5.4절 첫머리(소절 앞, p.207); 5.4.2 소절 실수 지수의 문단, e 의 정의, Proposition 5.4.3 (p.211); 5.4.3 소절 연습문제 5.4.1, 5.4.2 (p.211), 5.4.5 (p.212); 1.2절(1.2.5 소절) 연습문제 1.2.11, 1.2.17 과 그 각주 (p.35); 2.5절(2.5.5 소절) 각주 (p.94); 4.1절(4.1.1 소절) Example 4.1.4 (p.156), 4.1.3 소절 연습문제 4.1.3 (p.160); 4.4절(4.4.1 소절) Corollary 4.4.3 (p.177), Example 4.4.5 (p.178), 4.4.2 소절 연습문제 4.4.4 (p.179)
    checked: original
    note: "출처는 5.4절 첫머리(p.207)에서 xⁿ, x⁰ := 1, x⁻ⁿ := 1/xⁿ, 양의 n 제곱근 x^{1/n}, 기약분수 n/m 에 대해 x^{n/m} := (x^{1/m})ⁿ 를 정의하고(대표에 상관없다는 것은 'not difficult to show' 라고 적고, 연습문제 1.2.17 a)(1.2.5 소절, p.35)가 그것을 보이게 한다), 5.4.2 소절(p.211)에서 유리수 y 에 대해 x^y = exp(y ln x) 임을 적은 뒤 무리수 y 에 대해 x^y := exp(y ln x) 로 정의한다. 이 항목은 정의를 하나로 두어, 모든 실수 y 에 대해 a^y = exp(y ln a) 로 정의하고 기존 기호와 같은 값이라는 것((1) 0 이상인 정수 지수, (2) 역수, (3) 제곱근과 m 제곱근, 그리고 출처의 (x^{1/m})ⁿ)을 증명해 진술에 둔다. 그래서 유리수 지수의 대표를 따질 일이 없다. 출처의 '유리수열로 근사해도 같은 값'(p.211)은 싣지 않았다. e 의 정의와 eˣ = exp(x ln e) = exp(x) 는 출처(p.211)와 같다. (4)의 (i)의 ln(a^y) = y ln a 는 출처 Proposition 5.4.3 (ii)(p.211)이고, (4)의 (iii)에서 a = e 인 경우가 출처 Proposition 5.4.3 (i)(exp(xy) = (exp(x))^y)이다. 출처는 이 명제에 대해 'The proof is immediate' 라고만 적는다. (4)의 (i)의 식은 출처 연습문제 5.4.2 d)(p.211)의 log_b(x^y) = y log_b(x) 와 같은 꼴이다. (6)의 단조는 출처 연습문제 1.2.17 b), c)(p.35; 유리수 지수에 대한 같은 내용)를 실수 지수로 한 것이고, 같은 연습문제의 d)는 무리수 지수를 유리수 거듭제곱의 상한·하한으로 정의해 b)의 주장을 실수 지수에 대해 보이게 한다. 첫째 확인 질문((1/2)^x 의 순감소)은 연습문제 1.2.17 c)의 0 < x < 1 인 경우와 같은 내용이다. (7)은 출처 연습문제 5.4.1(p.211; x^y 와 bˣ 의 도함수를 구하라)과 같은 내용이다. (8)의 어림 2 < e < 3 은 출처 5.4절과 연습문제 5.4.1–5.4.11 에서 찾지 못했다(검색어 'Euler’s number' 본문 1건(e 의 정의, 나머지 2건은 색인과 기호표), '2.71', '𝑒 < 3', '2 < 𝑒', '𝑒 ≈' 각 0건, 책 전체). (8)의 아래 어림 9/4 = (1 + 1/2)² 는 출처 연습문제 5.4.5(p.212; eˣ = lim (1 + x/n)ⁿ)의 수열에서 x = 1, n = 2 인 항이다. (3)의 m 제곱근의 존재와 유일성은 출처 연습문제 1.2.11(p.35)과 Corollary 4.4.3(4.4.1 소절, p.177)에 있다. 출처의 1.2절 각주와 2.5절 각주(p.94)는 x^p := exp(p ln x) 로 정의할 것이라고 미리 적는다. 예시 '8^{1/3}, 4^{3/2}, 9^{−1/2}'는 출처 5.4절 첫머리의 x^{n/m} := (x^{1/m})ⁿ 과 같은 계산이다. 예시 'r = −1, r = 1/2 에서의 도함수'의 r = −1 은 출처 연습문제 4.1.3(4.1.3 소절, p.160; 정수 n 에 대한 xⁿ 의 도함수)의 n = −1 인 경우이고, r = 1/2 은 출처 Corollary 4.4.3(p.177; x^{1/n} 의 도함수)의 n = 2 인 경우와 Example 4.1.4(4.1.1 소절, p.156; √x 의 미분계수 1/(2√c))와 같은 결론이다. 반례 '밑이 0 이하인 수'의 (−8)^{1/3} 에 대해, 출처 Example 4.4.5(p.178)는 x³ 의 역함수를 0 과 음수를 포함한 모든 y 에서 y^{1/3} 으로 쓰고, 연습문제 4.4.4(p.179)는 3 이상인 홀수 n 에 대해 모든 실수의 n 제곱근을 묻는다. 이 항목은 거듭제곱 기호 a^y 를 양수 밑에만 쓴다. 둘째 확인 질문(2ˣ 의 0 에서의 미분계수)은 출처 연습문제 5.4.1 의 g(x) = bˣ 에 b = 2 를 넣은 것이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 확인. 틀린 위치 2건, 경계 경우에서 맞지 않던 설명 문장 2건, 겹치는 글자 1건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-20
---

:::statement
$\mathbb{R}_{>0}$과 자연로그 $\ln$은 [[natural-logarithm]]의 것이고, 지수함수 $\exp$는 [[exponential-function]]의 것이다. 거듭제곱 $b^n$($n$은 $0$ 이상인 정수)은 [[power-of-a-real-number]]의 것이고, 제곱근 $\sqrt{a}$는 [[square-root-exists]]의 것이며, $0$이 아닌 실수 $b$의 $b^{-1}$은 [[real-number-arithmetic]]의 역수이다. 순증가와 순감소는 [[derivative-and-monotonicity|도함수와 증가·감소]] 항목의 것이고, 미분가능, 미분계수, 도함수는 [[derivative]]의 것이며, 연속미분가능은 [[continuously-differentiable]]의 것이다.

**양수의 실수 거듭제곱.** $a \in \mathbb{R}_{>0}$이고 $y$가 실수일 때
$$
a^y = \exp(y \ln a)
$$
로 정한다. $a$를 **밑**, $y$를 **지수**라 하고 $a^y$를 $a$의 $y$**제곱**(real power)이라 한다. 지수가 $0$ 이상인 정수일 때와 $-1$일 때는 이미 [[power-of-a-real-number]]의 거듭제곱과 역수의 기호가 있는데, 아래 (1), (2)에 의해 양수 밑에서는 두 정의가 같은 수를 주므로 같은 기호를 써도 된다. **이 정의는 밑이 양수일 때만 쓴다.** 밑이 $0$ 이하인 실수 $b$에 대해서는 $0$ 이상인 정수 $n$에 대한 $b^n$(특히 $0^0 = 1$, $1 \le n$일 때 $0^n = 0$, 음수의 거듭제곱)만 [[power-of-a-real-number]]의 정의대로 있고, $b \ne 0$이면 $b^{-1}$은 역수이다. 밑이 $0$ 이하일 때 그 밖의 지수는 정의하지 않는다.

**수 $e$.** $e = \exp(1)$로 정한다.

다음이 성립한다. 아래에서 $a$, $b$는 $\mathbb{R}_{>0}$의 원소이고, $x$, $y$, $r$는 실수이다.

1. ($0$ 이상인 정수 지수와의 일치) $0$ 이상인 정수 $n$에 대하여 $\exp(n \ln a)$는 [[power-of-a-real-number]]의 $a^n$과 같다. 특히 $a^0 = 1$이고 $a^1 = a$이다.
2. (음의 정수 지수와 역수) 자연수 $n$에 대하여 $a^{-n} = (a^{-1})^n = (a^n)^{-1}$이다. 여기서 $a^{-1}$은 역수이다. 특히 $n = 1$이면, 이 정의의 $a^{-1}$은 역수 $a^{-1}$과 같다.
3. ($m$제곱근) 자연수 $m$에 대하여 $s^m = a$인 $s \in \mathbb{R}_{>0}$가 정확히 하나 있고, 그것은 $a^{1/m}$이다. 특히 $a^{1/2} = \sqrt{a}$이다. 또 $0$ 이상인 정수 $k$에 대하여 $a^{k/m} = (a^{1/m})^k$이고 $a^{-k/m} = \bigl((a^{1/m})^{-1}\bigr)^k$이다.
4. (실수 지수의 지수법칙)
   - (i) $a^y \in \mathbb{R}_{>0}$이고 $\ln(a^y) = y \ln a$이다.
   - (ii) $a^{x + y} = a^x a^y$, $a^{-x} = (a^x)^{-1}$, $a^{x - y} = a^x (a^y)^{-1}$이다. 특히 $a^y a = a^{y + 1}$이다.
   - (iii) $(a^x)^y = a^{xy}$이다.
   - (iv) $(ab)^x = a^x b^x$이고 $1^x = 1$이다.
5. (수 $e$와 $e^x$) $e \in \mathbb{R}_{>0}$이고 $\ln e = 1$이다. 모든 실수 $x$에서 $e^x = \exp(x)$이다.
6. (단조)
   - (i) $1 < a$이면 $x$에서의 값이 $a^x$인 함수 $\mathbb{R} \to \mathbb{R}$는 순증가이고, $a < 1$이면 순감소이며, $a = 1$이면 값이 $1$인 상수함수이다.
   - (ii) $0 < r$이면 $x$에서의 값이 $x^r$인 함수 $\mathbb{R}_{>0} \to \mathbb{R}$는 순증가이고, $r < 0$이면 순감소이며, $r = 0$이면 값이 $1$인 상수함수이다.
7. (도함수)
   - (i) $u(x) = a^x$로 정한 $u : \mathbb{R} \to \mathbb{R}$는 미분가능한 함수이고 모든 실수 $x$에서 $u'(x) = (\ln a)\,a^x$이다. $u$는 연속미분가능하다.
   - (ii) $v(x) = x^r$로 정한 $v : \mathbb{R}_{>0} \to \mathbb{R}$는 미분가능한 함수이고 모든 $x \in \mathbb{R}_{>0}$에서 $v'(x) = r\,x^{r - 1}$이다. $v$는 연속미분가능하다. $r$가 $0$ 이상인 정수이면 이 값은 [[derivative-of-power|거듭제곱 함수의 미분]]의 $p_r'(x)$와 같다.
8. ($e$의 어림) $9/4 < e < (6/5)^6 < 3$이다. 따라서 $2 < e < 3$이다.
:::

:::english
$\mathbb{R}_{>0}$ and the natural logarithm $\ln$ are those of the entry on the natural logarithm, and the exponential function $\exp$ is that of the entry on the exponential function. Powers $b^n$ ($n$ a nonnegative integer) are those of the entry on powers of a real number, the square root $\sqrt{a}$ is that of the entry on the existence of square roots, and for a nonzero real number $b$, $b^{-1}$ is the reciprocal of the entry on the arithmetic of real numbers. Strictly increasing and strictly decreasing are those of the entry on derivatives and monotonicity; differentiability, derivatives at a point and derivative functions are those of the entry on derivatives; continuous differentiability is that of the entry on continuously differentiable functions.

**Real powers of positive numbers.** For $a \in \mathbb{R}_{>0}$ and a real number $y$, define
$$
a^y = \exp(y \ln a).
$$
$a$ is called the **base**, $y$ the **exponent**, and $a^y$ the $y$th **power** of $a$. For nonnegative integer exponents and for the exponent $-1$ there are already the symbols for powers and reciprocals of the entry on powers of a real number; by (1) and (2) below, the two definitions give the same number for a positive base, so the same symbol may be used. **This definition is used only for positive bases.** For a real number $b \le 0$, only $b^n$ for nonnegative integers $n$ (in particular $0^0 = 1$, $0^n = 0$ for $1 \le n$, and powers of negative numbers) exists, as defined in the entry on powers of a real number, and $b^{-1}$ is the reciprocal when $b \ne 0$. Other exponents are not defined for bases $\le 0$.

**The number $e$.** Define $e = \exp(1)$.

The following hold. Below, $a$, $b$ are elements of $\mathbb{R}_{>0}$, and $x$, $y$, $r$ are real numbers.

1. (Agreement for nonnegative integer exponents) For a nonnegative integer $n$, $\exp(n \ln a)$ equals $a^n$ of the entry on powers of a real number. In particular, $a^0 = 1$ and $a^1 = a$.
2. (Negative integer exponents and reciprocals) For a natural number $n$, $a^{-n} = (a^{-1})^n = (a^n)^{-1}$, where $a^{-1}$ is the reciprocal. In particular, for $n = 1$, $a^{-1}$ in this definition equals the reciprocal $a^{-1}$.
3. ($m$th roots) For a natural number $m$ there is exactly one $s \in \mathbb{R}_{>0}$ with $s^m = a$, and it is $a^{1/m}$. In particular, $a^{1/2} = \sqrt{a}$. Moreover, for a nonnegative integer $k$, $a^{k/m} = (a^{1/m})^k$ and $a^{-k/m} = \bigl((a^{1/m})^{-1}\bigr)^k$.
4. (Laws of real exponents)
   - (i) $a^y \in \mathbb{R}_{>0}$ and $\ln(a^y) = y \ln a$.
   - (ii) $a^{x + y} = a^x a^y$, $a^{-x} = (a^x)^{-1}$, and $a^{x - y} = a^x (a^y)^{-1}$. In particular, $a^y a = a^{y + 1}$.
   - (iii) $(a^x)^y = a^{xy}$.
   - (iv) $(ab)^x = a^x b^x$ and $1^x = 1$.
5. (The number $e$ and $e^x$) $e \in \mathbb{R}_{>0}$ and $\ln e = 1$. For every real $x$, $e^x = \exp(x)$.
6. (Monotonicity)
   - (i) If $1 < a$, the function $\mathbb{R} \to \mathbb{R}$ with value $a^x$ at $x$ is strictly increasing; if $a < 1$ it is strictly decreasing; if $a = 1$ it is the constant function with value $1$.
   - (ii) If $0 < r$, the function $\mathbb{R}_{>0} \to \mathbb{R}$ with value $x^r$ at $x$ is strictly increasing; if $r < 0$ it is strictly decreasing; if $r = 0$ it is the constant function with value $1$.
7. (Derivatives)
   - (i) The function $u : \mathbb{R} \to \mathbb{R}$ defined by $u(x) = a^x$ is differentiable and $u'(x) = (\ln a)\,a^x$ for every real $x$. $u$ is continuously differentiable.
   - (ii) The function $v : \mathbb{R}_{>0} \to \mathbb{R}$ defined by $v(x) = x^r$ is differentiable and $v'(x) = r\,x^{r - 1}$ for every $x \in \mathbb{R}_{>0}$. $v$ is continuously differentiable. If $r$ is a nonnegative integer, this value equals $p_r'(x)$ of the entry on the derivative of power functions.
8. (Bounds for $e$) $9/4 < e < (6/5)^6 < 3$. Hence $2 < e < 3$.
:::

## 직관

자연로그는 곱을 합으로 바꿉니다. 그래서 "$a$를 $y$번 곱한다"는 말은 로그의 세계에서 "$\ln a$를 $y$배 한다"가 되고, 이것은 $y$가 자연수가 아니어도 뜻이 있습니다. $y \ln a$를 지수함수로 다시 곱의 세계로 돌려놓은 것이 $a^y$입니다. 자연수 $y = n$이면 $\ln a$를 $n$배 한 것은 $a$를 $n$번 곱한 수의 로그이므로, 이 정의는 원래의 거듭제곱과 같은 수를 줍니다. (1)이 이것입니다.

이 정의는 $\ln a$를 쓰므로 $a$가 양수여야 합니다. $0$과 음수는 자연로그의 정의역 밖에 있습니다. 그래서 $(-8)^{1/3}$처럼 그럴듯한 답($-2$)이 있어 보이는 것도 이 사이트에서는 정의하지 않습니다. 아래 반례에서 보듯이 음수 밑까지 넓히면 지수법칙 (4)의 (iii)이 성립할 수 없습니다.

(3)은 $1/m$제곱이 "$m$번 곱해서 $a$가 되는 양수"라는 것입니다. 이것으로 [[square-root-exists|제곱근의 존재]]의 제곱근과 이 정의의 $1/2$제곱이 같은 수가 되고, $m$제곱근이라는 새 기호를 따로 둘 필요가 없어집니다.

## 성질의 증명

:::proof
"지수함수 (n)"은 [[exponential-function]]의 (n), "덧셈 법칙 (n)"은 [[laws-of-exponential-function|지수함수의 덧셈 법칙]]의 (n), "자연로그 (n)"은 [[natural-logarithm]]의 (n), "로그 (n)"은 [[laws-of-logarithm|로그의 성질]]의 (n), "거듭제곱 (n)"은 [[power-of-a-real-number]]의 (n), "순서 (n)"은 [[order-properties-of-reals]]의 (n)이고, (K…)는 [[real-number-arithmetic]]의 번호이다. 4의 (i)을 먼저 보이고, 1, 2, 4의 나머지, 3, 5, 6, 7, 8의 순서로 보인다.

**4 (i)의 증명.** $a^y = \exp(y \ln a)$는 지수함수 (1)에 의해 $\mathbb{R}_{>0}$의 원소이고 $\ln(a^y) = \ln(\exp(y \ln a)) = y \ln a$이다.

**1의 증명.** 덧셈 법칙 (3)과 지수함수 (1)에 의해 $\exp(n \ln a) = \exp(\ln a)^n = a^n$이다(오른쪽은 거듭제곱의 $a^n$). 거듭제곱의 정의에 의해 $a^0 = 1$이고, 거듭제곱 (1)에 의해 $a^1 = a$이다.

**2의 증명.** $(-n)\ln a = -(n \ln a)$이므로((K9), (K12)의 (ii)) 덧셈 법칙 (3)과 지수함수 (1)에 의해 $\exp(-n \ln a) = \bigl(\exp(\ln a)^{-1}\bigr)^n = (a^{-1})^n$이고, 거듭제곱 (3)에 의해 이것은 $(a^n)^{-1}$이다. $n = 1$이면 거듭제곱 (1)에 의해 $(a^{-1})^1 = a^{-1}$이다.

**4의 나머지의 증명.** (ii): (K12)의 (i)에 의해 $(x + y)\ln a = x \ln a + y \ln a$이므로 덧셈 법칙 (1)에 의해 $a^{x + y} = \exp(x \ln a)\exp(y \ln a) = a^x a^y$이다. $(-x)\ln a = -(x \ln a)$이므로 덧셈 법칙 (2)에 의해 $a^{-x} = \exp(x \ln a)^{-1} = (a^x)^{-1}$이다. $x - y = x + (-y)$이므로 앞의 두 식에서 $a^{x - y} = a^x a^{-y} = a^x (a^y)^{-1}$이다. 마지막으로 1에 의해 $a = a^1$이므로 $a^y a = a^y a^1 = a^{y + 1}$이다.

(iii): (i)에 의해 $a^x \in \mathbb{R}_{>0}$이고 $\ln(a^x) = x \ln a$이므로, 정의와 (K1), (K2)에 의해 $(a^x)^y = \exp\bigl(y (x \ln a)\bigr) = \exp\bigl((xy)\ln a\bigr) = a^{xy}$이다.

(iv): 로그의 진술에 의해 $ab \in \mathbb{R}_{>0}$이고 로그 (1)에 의해 $\ln(ab) = \ln a + \ln b$이므로, (K3)과 덧셈 법칙 (1)에 의해 $(ab)^x = \exp(x \ln a + x \ln b) = a^x b^x$이다. 자연로그 (1)에 의해 $\ln 1 = 0$이므로 (K9)와 지수함수 (1)에 의해 $1^x = \exp(x \cdot 0) = \exp(0) = 1$이다.

**3의 증명.** $s = a^{1/m}$으로 두면 4의 (i)에 의해 $s \in \mathbb{R}_{>0}$이고 $\ln s = m^{-1}\ln a$이다. 1에 의해 거듭제곱 $s^m$은 $\exp(m \ln s) = \exp\bigl(m(m^{-1}\ln a)\bigr) = \exp(\ln a) = a$이다((K2), (K8), (K4)와 지수함수 (1)). $t \in \mathbb{R}_{>0}$이고 $t^m = a$이면 $s^m = t^m$이고 $1 \le m$이므로 거듭제곱 (6)의 (iii)에 의해 $s = t$이다. 따라서 그런 수는 정확히 하나이다. $0 < a$이므로 [[square-root-exists|제곱근의 존재]]의 (1)에 의해 $\sqrt{a} \in \mathbb{R}_{>0}$이고 거듭제곱 (1)에 의해 $(\sqrt{a})^2 = \sqrt{a}\sqrt{a} = a$이므로, $m = 2$일 때의 유일성에 의해 $\sqrt{a} = a^{1/2}$이다.

$k$가 $0$ 이상인 정수이면 4의 (iii)과 1에 의해 $a^{k/m} = a^{m^{-1}k} = (a^{1/m})^k$이다(오른쪽은 거듭제곱). $k = 0$이면 $a^{-k/m} = a^0 = 1 = \bigl((a^{1/m})^{-1}\bigr)^0$이고, $1 \le k$이면 4의 (iii)과 2를 $a^{1/m} \in \mathbb{R}_{>0}$에 쓰면 $a^{-k/m} = (a^{1/m})^{-k} = \bigl((a^{1/m})^{-1}\bigr)^k$이다.

**5의 증명.** 지수함수 (1)에 의해 $e = \exp(1) \in \mathbb{R}_{>0}$이고 $\ln e = \ln(\exp(1)) = 1$이다. 따라서 정의와 (K4)에 의해 $e^x = \exp(x \ln e) = \exp(x \cdot 1) = \exp(x)$이다.

**6의 증명.** (i): $x < x'$이라 하자. $1 < a$이면 자연로그 (3)에 의해 $0 < \ln a$이므로 순서 (4)의 (i)에 의해 $x \ln a < x' \ln a$이고, 지수함수 (2)에 의해 $a^x < a^{x'}$이다. $a < 1$이면 자연로그 (3)에 의해 $\ln a < 0$이므로 순서 (4)의 (ii)에 의해 $x' \ln a < x \ln a$이고 $a^{x'} < a^x$이다. $a = 1$이면 4의 (iv)에 의해 모든 $x$에서 $1^x = 1$이다.

(ii): $x$, $x' \in \mathbb{R}_{>0}$이고 $x < x'$이라 하자. 자연로그 (3)에 의해 $\ln x < \ln x'$이다. $0 < r$이면 순서 (4)의 (i)에 의해 $r \ln x < r \ln x'$이고 지수함수 (2)에 의해 $x^r < x'^r$이다. $r < 0$이면 순서 (4)의 (ii)에 의해 $r \ln x' < r \ln x$이고 $x'^r < x^r$이다. $r = 0$이면 (K9)와 지수함수 (1)에 의해 $x^0 = \exp(0) = 1$이다.

**7의 증명.** (i): $l(x) = (\ln a)\,x$로 정한 $l : \mathbb{R} \to \mathbb{R}$는 [[continuously-differentiable|연속미분가능한 함수]]의 (4)와 [[derivative]]의 (1)에 의해 연속미분가능하고 $l'(x) = \ln a$이다. (K1)에 의해 $u = \exp \circ l$이다. 지수함수 (3)에 의해 $\exp$는 미분가능하고 연속미분가능하므로, [[chain-rule|연쇄 법칙]]의 (2)에 의해 $u'(x) = \exp'(l(x))\,l'(x) = \exp(x \ln a)\ln a = (\ln a)\,a^x$이고, 연속미분가능한 함수의 (5)에 의해 $u$는 연속미분가능하다.

(ii): $w(x) = r \ln x$로 정한 $w : \mathbb{R}_{>0} \to \mathbb{R}$는 자연로그 (2), [[derivative-rules|미분의 규칙]]의 (6)과 연속미분가능한 함수의 (3)에 의해 연속미분가능하고 $w'(x) = r x^{-1}$이다. $v = \exp \circ w$이므로 연쇄 법칙의 (2)에 의해 $v$는 미분가능하고
$$
\begin{aligned}
v'(x) &= \exp(r \ln x)\,r x^{-1} \\
&= r\,x^r x^{-1}
\end{aligned}
$$
이다. 4의 (ii)와 2에 의해 $x^{r - 1} = x^r x^{-1}$이므로 $v'(x) = r\,x^{r - 1}$이다. 연속미분가능한 함수의 (5)에 의해 $v$는 연속미분가능하다.

$r = n$이 $0$ 이상인 정수라 하자. $n = 0$이면 $v'(x) = 0 \cdot x^{-1} = 0$이고, [[derivative-of-power|거듭제곱 함수의 미분]]의 (1)에 의해 $p_0'(x) = 0$이다. $1 \le n$이면 $n - 1$은 $0$ 이상인 정수이므로 1에 의해 $x^{n - 1}$은 거듭제곱의 $x^{n-1}$과 같고, $v'(x) = n\,x^{n - 1} = p_n'(x)$이다.

**8의 증명.** 덧셈 법칙 (4)를 $x = 1/2$에 쓰면 $1/2 \ne 0$이므로 $3/2 = 1 + 1/2 < \exp(1/2)$이다. 덧셈 법칙 (4)를 $x = 1/6$에 쓰면 $1/6 < 1$이고 $1/6 \ne 0$이므로 $\exp(1/6) < (1 - 1/6)^{-1} = (5/6)^{-1} = 6/5$이다. 덧셈 법칙 (3)에 의해
$$
\begin{aligned}
e &= \exp\bigl(2 \cdot (1/2)\bigr) = \exp(1/2)^2, \\
e &= \exp\bigl(6 \cdot (1/6)\bigr) = \exp(1/6)^6
\end{aligned}
$$
이다. $0 \le 3/2 < \exp(1/2)$이고 $0 \le \exp(1/6) < 6/5$이므로(지수함수 (1)) 거듭제곱 (6)의 (ii)에 의해 $(3/2)^2 < e$이고 $e < (6/5)^6$이다. $(3/2)^2 = 9/4$이다. 거듭제곱 (2)의 (iii)과 (3)에 의해 $(6/5)^6 = (6 \cdot 5^{-1})^6 = 6^6 (5^6)^{-1}$이고, 정수의 계산으로 $6^6 = 46656$, $5^6 = 15625$, $3 \cdot 15625 = 46875$이므로 $46656 < 46875$이다. 순서 (6)의 (i), (4)의 (i)에 의해 양변에 $15625^{-1}$을 곱하면 $(6/5)^6 = 46656 \cdot 15625^{-1} < 3$이다. 끝으로 $8 < 9$이므로 같은 방식으로 $2 = 8 \cdot 4^{-1} < 9 \cdot 4^{-1} = 9/4$이다. 따라서 $2 < 9/4 < e < (6/5)^6 < 3$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$8^{1/3}$, $4^{3/2}$, $9^{-1/2}$]
$2^3 = 8$이고 $2 \in \mathbb{R}_{>0}$이므로 (3)의 유일성에 의해 $8^{1/3} = 2$입니다. (3)에 의해 $4^{1/2} = \sqrt{4} = 2$이므로 $4^{3/2} = (4^{1/2})^3 = 2^3 = 8$입니다. $9^{1/2} = \sqrt{9} = 3$이므로 (3)의 둘째 식에 의해 $9^{-1/2} = (3^{-1})^1 = 1/3$입니다. 모두 지수함수를 계산하지 않고 정수의 거듭제곱만으로 얻었습니다.
:::

:::example[$r = -1$, $r = 1/2$에서의 도함수]
(7)의 (ii)를 $r = -1$에 쓰면 $v'(x) = -x^{-2}$이고, (2)에 의해 $x^{-2} = (x^2)^{-1}$이므로 $v'(x) = -(x^2)^{-1}$입니다. (2)에 의해 $v(x) = x^{-1}$은 역수이므로 이것은 [[derivative-rules|미분의 규칙]]의 (5)로 $1/i$($i$는 항등함수)를 미분한 값 $-(x^2)^{-1}$과 같습니다.

$r = 1/2$이면 $v(x) = x^{1/2} = \sqrt{x}$이고 $v'(x) = 2^{-1}x^{-1/2}$입니다. (4)의 (ii)와 (3)에 의해 $x^{-1/2} = (x^{1/2})^{-1} = (\sqrt{x})^{-1}$이므로 $v'(x) = (2\sqrt{x})^{-1}$입니다. $r = 0$이면 $v'(x) = 0$이고 $v$는 값이 $1$인 상수함수이며, $r = 1$이면 $v'(x) = x^0 = 1$이고 $v$는 항등함수입니다.
:::

:::counterexample[밑이 $0$ 이하인 수]
$0^{1/2}$와 $(-8)^{1/3}$은 이 정의에 들지 않습니다. $\ln 0$과 $\ln(-8)$이 정의되지 않기 때문입니다. $0^0 = 1$과 $0^2 = 0$은 [[power-of-a-real-number]]의 정의로 있고, 이 항목의 정의와는 상관이 없습니다.

음수 밑에서 지수법칙 (4)의 (iii)이 성립하도록 정의를 넓힐 수는 없습니다. 밑이 $-1$일 때 $x = 2$, $y = 1/2$를 넣으면, 거듭제곱으로 $(-1)^2 = 1$이므로 왼쪽은 $\bigl((-1)^2\bigr)^{1/2} = 1^{1/2} = 1$이어야 하고((4)의 (iv)), 오른쪽은 $(-1)^{2 \cdot (1/2)} = (-1)^1 = -1$이어야 합니다. 두 값이 다릅니다.
:::

## 확인 질문

:::check[$(1/2)^x$와 $(1/2)^{x'}$ 가운데 $x < x'$일 때 어느 쪽이 큰가?]
$(1/2)^x$가 큽니다. $1/2 < 1$이므로 (6)의 (i)에 의해 $x$에서의 값이 $(1/2)^x$인 함수는 순감소입니다. 예를 들어 $(1/2)^1 = 1/2$이고 (1)에 의해 $(1/2)^2 = 1/4$입니다.
:::

:::check[$u(x) = 2^x$의 $0$에서의 미분계수는 어느 범위에 있는가?]
(7)의 (i)에 의해 $u'(0) = (\ln 2)\,2^0 = \ln 2$이고((1)에 의해 $2^0 = 1$), [[natural-logarithm|자연로그]]의 (6)에 의해 $1/2 < \ln 2 < 1$입니다. 그래프의 $0$에서의 기울기가 $1/2$와 $1$ 사이에 있습니다.
:::
