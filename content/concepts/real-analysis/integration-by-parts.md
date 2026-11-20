---
title: 부분적분
title_en: Integration by Parts
aliases: [부분 적분, 부분적분법, integration by parts]
kind: theorem
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: "F, G 가 연속미분가능하면 F G′ 의 적분은 F(b)G(b) − F(a)G(a) 에서 F′ G 의 적분을 뺀 것이다. 곱의 법칙을 미적분의 기본정리와 적분의 선형성으로 옮긴 것이고, 구간 위의 방향 있는 적분의 꼴로도 진술한다."
requires: [real-number-arithmetic, power-of-a-real-number, interval, real-valued-function, continuous-function, continuity-of-sum-and-product, derivative, derivative-of-power, riemann-integral, oriented-integral, linearity-of-the-integral, continuously-differentiable, fundamental-theorem-of-calculus-first-form, fundamental-theorem-of-calculus-second-form, antiderivative-and-integral-of-power, change-of-variables]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.3절(5.3.4 소절) 연습문제 5.3.5 (p.205); 4.1절(4.1.3 소절) 연습문제 4.1.8 (p.160)
    checked: original
    note: "출처는 부분적분을 연습문제 5.3.5(p.205)로 둔다: F, G 가 [a, b] 위의 연속미분가능한 함수이면 ∫_a^b F(x)G′(x) dx = F(b)G(b) − F(a)G(a) − ∫_a^b F′(x)G(x) dx 를 증명하라는 것이고, 출처에 증명은 없다. 이 항목의 (1)은 이 진술과 같고, 증명은 곱의 법칙(continuously-differentiable 의 (3)), 미적분의 기본정리 (첫째 꼴)의 (2), 적분의 선형성(linearity-of-the-integral 의 (6))으로 이 사이트가 썼다. (2)의 방향 있는 꼴은 같은 증명을 구간 위의 두 점에 쓴 것이다. 확인 질문 1 의 ∫ F F′ 은 출처 연습문제 4.1.8(4.1.3 소절, p.160; (fⁿ)′ = n fⁿ⁻¹ f′)의 n = 2 를 적분으로 옮긴 것과 같은 식이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 넘겨짚은 일반 문장 1건, 근거 없는 까닭 문장 1건, 섞이기 쉬운 이름(평균값 정리)을 고쳤다."
added: 2026-11-20
---

:::statement
연속미분가능은 [[continuously-differentiable]]의 것이고, 실함수의 곱 $FG$와 도함수는 [[real-valued-function]]과 [[derivative]]의 것이다. 리만 적분은 [[riemann-integral]]의 것이고, 방향 있는 적분 $\int_\alpha^\beta f$와 "$\alpha$와 $\beta$ 사이에서 적분가능"은 [[oriented-integral]]의 것이다.

1. (닫힌구간) $a < b$이고 $F$, $G : [a, b] \to \mathbb{R}$가 연속미분가능하면 $FG'$과 $F'G$는 연속함수이고 리만 적분가능하며
   $$
   \begin{aligned}
   &\int_a^b F G' \\
   &\quad = F(b)\,G(b) - F(a)\,G(a) \\
   &\qquad - \int_a^b F' G
   \end{aligned}
   $$
   이다. 적분 변수를 쓰면 $\int_a^b F(x)\,G'(x)\,dx = F(b)\,G(b) - F(a)\,G(a) - \int_a^b F'(x)\,G(x)\,dx$이다.
2. (방향 있는 꼴) $I$가 구간이고 $F$, $G : I \to \mathbb{R}$가 연속미분가능하면, $FG'$과 $F'G$는 $I$의 어느 두 점 사이에서도 적분가능하고 $I$의 모든 원소 $\alpha$, $\beta$에서
   $$
   \begin{aligned}
   &\int_\alpha^\beta F G' \\
   &\quad = F(\beta)\,G(\beta) - F(\alpha)\,G(\alpha) \\
   &\qquad - \int_\alpha^\beta F' G
   \end{aligned}
   $$
   이다.
:::

:::english
Continuous differentiability is that of the entry on continuously differentiable functions, and the product $FG$ of real-valued functions and the derivative are those of the entries on real-valued functions and on derivatives. The Riemann integral is that of the entry on the Riemann integral, and the oriented integral $\int_\alpha^\beta f$ and "integrable between $\alpha$ and $\beta$" are those of the entry on the oriented integral.

1. (Closed interval) If $a < b$ and $F$, $G : [a, b] \to \mathbb{R}$ are continuously differentiable, then $FG'$ and $F'G$ are continuous functions and Riemann integrable, and
   $$
   \begin{aligned}
   &\int_a^b F G' \\
   &\quad = F(b)\,G(b) - F(a)\,G(a) \\
   &\qquad - \int_a^b F' G.
   \end{aligned}
   $$
   With a variable of integration, $\int_a^b F(x)\,G'(x)\,dx = F(b)\,G(b) - F(a)\,G(a) - \int_a^b F'(x)\,G(x)\,dx$.
2. (Oriented form) If $I$ is an interval and $F$, $G : I \to \mathbb{R}$ are continuously differentiable, then $FG'$ and $F'G$ are integrable between any two points of $I$, and for all elements $\alpha$, $\beta$ of $I$
   $$
   \begin{aligned}
   &\int_\alpha^\beta F G' \\
   &\quad = F(\beta)\,G(\beta) - F(\alpha)\,G(\alpha) \\
   &\qquad - \int_\alpha^\beta F' G.
   \end{aligned}
   $$
:::

## 직관

곱의 법칙 $(FG)' = FG' + F'G$의 양변을 적분하면, 왼쪽은 미적분의 기본정리에 의해 $FG$의 끝점 값의 차가 되고 오른쪽은 두 적분의 합이 됩니다. 그 가운데 하나를 옮긴 것이 부분적분입니다. 그래서 $FG'$의 적분이 어려울 때 "미분을 $G$에서 $F$로 넘긴" $F'G$의 적분으로 바꿀 수 있습니다.

비유하면 두 사람이 함께 쌓은 양 $F(b)G(b) - F(a)G(a)$를 "$F$를 고정하고 $G$가 변한 몫"과 "$G$를 고정하고 $F$가 변한 몫"으로 나누는 셈입니다. 한쪽 몫을 알면 다른 쪽 몫은 전체에서 빼서 얻습니다. 비유가 맞지 않는 곳은, 각 몫이 음수일 수도 있다는 점입니다.

## 증명

:::idea
$FG$는 연속미분가능하고 $(FG)' = FG' + F'G$이다. 첫째 꼴로 $\int (FG)' = F(\beta)G(\beta) - F(\alpha)G(\alpha)$이고, 선형성으로 왼쪽을 두 적분의 합으로 나눈다.
:::

:::hint
$FG'$과 $F'G$가 적분가능하다는 것부터 확인하세요. $F$, $G$, $F'$, $G'$이 모두 연속함수입니다.
:::

:::proof
"연속미분가능 (3)"처럼 쓴 것은 [[continuously-differentiable]]의 번호, "첫째 꼴 (2)"는 [[fundamental-theorem-of-calculus-first-form|미적분의 기본정리 (첫째 꼴)]]의 번호, "선형성 (6)"은 [[linearity-of-the-integral|적분의 선형성]]의 번호이다. (2)를 먼저 보인다.

**2의 증명.** 연속미분가능 (1)에 의해 $F$와 $G$는 연속함수이고, 정의에 의해 $F'$과 $G'$도 연속함수이다. [[continuity-of-sum-and-product|연속함수의 연산]]의 (3)에 의해 $FG'$과 $F'G$는 $I$ 위의 연속함수이고, [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 (둘째 꼴)]]의 (4)에 의해 $I$의 어느 두 점 사이에서도 적분가능하다.

연속미분가능 (3)에 의해 $FG$는 연속미분가능하고 $(FG)' = FG' + F'G$이다. 첫째 꼴 (2)에 의해 $I$의 모든 원소 $\alpha$, $\beta$에서 $\int_\alpha^\beta (FG)' = F(\beta)\,G(\beta) - F(\alpha)\,G(\alpha)$이다([[real-valued-function]]의 (4)). 선형성 (6)에 의해
$$
\begin{aligned}
\int_\alpha^\beta (FG' + F'G) &= \int_\alpha^\beta FG' \\
&\quad + \int_\alpha^\beta F'G
\end{aligned}
$$
이다. 두 식의 왼쪽은 같은 함수의 적분이므로
$$
\begin{aligned}
&\int_\alpha^\beta FG' + \int_\alpha^\beta F'G \\
&\quad = F(\beta)\,G(\beta) - F(\alpha)\,G(\alpha)
\end{aligned}
$$
이고, 양변에서 $\int_\alpha^\beta F'G$를 빼면 결론을 얻는다([[real-number-arithmetic]]의 (K1), (K2), (K4), (K5)).

**1의 증명.** $[a, b]$는 [[interval]]의 (1)에 의해 구간이다. $FG'$과 $F'G$는 2의 증명에서처럼 연속함수이고, 2를 $I = [a, b]$, $\alpha = a$, $\beta = b$에 쓰면 된다. $a < b$이므로 방향 있는 적분은 [[riemann-integral]]의 적분이고([[oriented-integral]]의 정의), 따라서 $FG'$과 $F'G$는 리만 적분가능하다. $\blacksquare$
:::

## 예시와 반례

:::example[$\int_0^1 x\,(1 - x)^3\,dx$]
$F(x) = x$, $G(x) = -4^{-1}(1 - x)^4$로 정한 $F$, $G : [0, 1] \to \mathbb{R}$를 생각합니다. $h(x) = 1 - x$로 두면 $G = (-4^{-1})(p_4 \circ h)$이고, [[continuously-differentiable]]의 (3), (4), (5)에 의해 $F$와 $G$는 연속미분가능하며 $F' = 1$,
$$
\begin{aligned}
G'(x) &= -4^{-1} \cdot 4\,(1 - x)^3 \cdot (-1) \\
&= (1 - x)^3
\end{aligned}
$$
입니다([[derivative-of-power|거듭제곱 함수의 미분]]의 (1), [[real-number-arithmetic]]의 (K2), (K8)의 (iii), (K9)). (1)에 의해
$$
\begin{aligned}
&\int_0^1 x\,(1 - x)^3\,dx \\
&\quad = F(1)\,G(1) - F(0)\,G(0) \\
&\qquad - \int_0^1 1 \cdot G(x)\,dx \\
&\quad = 0 - 0 + 4^{-1}\int_0^1 (1 - x)^4\,dx
\end{aligned}
$$
입니다([[linearity-of-the-integral|적분의 선형성]]의 (4)로 $-4^{-1}$을 밖으로). [[change-of-variables|치환적분]]의 (3)을 $m = -1$, $k = 1$로 쓰면 $\int_0^1 (-1)(1 - x)^4\,dx = \int_1^0 u^4\,du = -5^{-1}$이고([[antiderivative-and-integral-of-power|원시함수와 거듭제곱의 적분]]의 (3)), 선형성의 (4)를 $k = -1$로 쓰면 $\int_0^1 (1 - x)^4\,dx = 5^{-1}$입니다. 따라서 값은 $4^{-1} \cdot 5^{-1} = 1/20$입니다. 전개한 식 $x - 3x^2 + 3x^3 - x^4$의 원시함수로 계산해도 $1/2 - 1 + 3/4 - 1/5 = 1/20$으로 같습니다.
:::

## 확인 질문

:::check[$F$가 $[a, b]$ 위에서 연속미분가능하면 $\int_a^b F F'$은?]
$\bigl(F(b)^2 - F(a)^2\bigr)/2$입니다. (1)을 $G = F$로 쓰면 $\int_a^b FF' = F(b)^2 - F(a)^2 - \int_a^b F'F$이고([[power-of-a-real-number]]의 (1)로 $F(b)F(b) = F(b)^2$), [[real-number-arithmetic]]의 (K1)에 의해 $F'F = FF'$이므로 $2\int_a^b FF' = F(b)^2 - F(a)^2$입니다. 양변에 $2^{-1}$을 곱하면 됩니다.
:::

:::check[$G$가 $[a, b]$ 위의 값이 $c$인 상수함수이면 (1)의 양변은 각각 무엇인가?]
둘 다 $0$입니다. [[derivative]]의 (1)에 의해 $G' = 0$이므로 왼쪽은 값이 $0$인 상수함수의 적분 $0$입니다([[riemann-integral]]의 (5)). 오른쪽은 $cF(b) - cF(a) - \int_a^b cF'$이고, [[linearity-of-the-integral|적분의 선형성]]의 (4)와 [[fundamental-theorem-of-calculus-first-form|미적분의 기본정리 (첫째 꼴)]]의 (2)에 의해 $\int_a^b cF' = c\bigl(F(b) - F(a)\bigr)$이므로 오른쪽도 $0$입니다.
:::
