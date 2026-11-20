---
title: 방향 있는 적분
title_en: Oriented Integral
aliases: [두 점 사이에서 적분가능, 끝점의 순서를 바꾼 적분, 위끝이 아래끝보다 작은 적분, oriented integral, integral with reversed limits, integrable between two points]
kind: definition
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: "구간 I 위의 함수 f 와 I 의 두 점 α, β 에 대하여, α < β 이면 [α, β] 위의 적분을, β < α 이면 그 부호를 바꾼 것을, α = β 이면 0 을 α 에서 β 까지의 방향 있는 적분으로 정한다. 끝점을 바꾸면 부호가 바뀐다는 것, 순서와 상관없는 세 점의 덧셈, 상수 가까이에 있는 함수의 적분의 어림, 상수함수의 방향 있는 적분, 두 점 사이의 값만으로 정해진다는 것을 함께 진술한다."
requires: [set, subset, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, real-valued-function, interval, dirichlet-function, riemann-integral, additivity-of-the-integral]
sources:
  - ref: lebl-basic-analysis
    loc: 5.1절(5.1.3 소절) More notation (p.188); 5.2절(5.2.5 소절) 연습문제 5.2.8 (p.198); 5.3절(5.3.2 소절) Theorem 5.3.3 의 증명 (p.202); 5.1절(5.1.2 소절) Example 5.1.11 (p.186)
    checked: original
    note: "정의는 출처의 5.1.3 소절 More notation(p.188)의 두 정의, 곧 b < a 이고 f ∈ R[b, a] 일 때 ∫_a^b f := −∫_b^a f 로 두는 것과 'For any function f' 에 대해 ∫_a^a f := 0 으로 두는 것을, 구간 I 위의 함수와 I 의 두 점 α, β 로 다시 쓴 것이다. 출처는 ∫_a^a f 의 정의에서 a 가 f 의 정의역에 속하는지를 적지 않으며, 이 항목은 α ∈ I 로 둔다. 출처의 b < a 인 경우의 조건 f ∈ R[b, a] 가 이 항목의 '사이에서 적분가능'에 해당한다. '방향 있는 적분', '사이에서 적분가능'이라는 이름은 출처에 나오지 않는다(검색어 orient, directed integral, integrable between 은 0건이고, 낱말 signed 는 5.5절 Figure 5.9(p.221)의 설명 'signed area' 에만 나온다). (2)는 출처의 연습문제 5.2.8(5.2.5 소절, p.198)이고, 출처는 'Recall what ∫_a^b f means if b ≤ a' 라고만 덧붙인다. 이 항목은 세 점의 같음과 순서에 따라 경우를 모두 나누어 증명한다. (3)은 출처의 Theorem 5.3.3 의 증명(5.3.2 소절, p.202)이 x > c 일 때 (f(c) − ε)(x − c) ≤ ∫_c^x f ≤ (f(c) + ε)(x − c) 를 적고 'When c > x, then the inequalities are reversed' 라고 적는 단계, 그리고 같은 증명이 x > y 일 때 |∫_y^x f| ≤ M|x − y| 를 쓰는 단계를 방향 있는 적분의 진술로 올린 것이다. (1), (4), (5)는 정의에서 바로 얻어 뒤 항목이 인용하도록 진술에 두었다. 예시 '순서가 섞인 세 점과 상수함수'는 출처 연습문제 5.2.8 의 등식을 출처 Example 5.1.11(5.1.2 소절, p.186)이 적분하는 상수함수에서 확인한 것이다. 예시 '구간 위의 모든 두 점에서 적분을 누르기'의 부등식은 출처의 Theorem 5.3.3 의 증명(p.202)의 첫 단계 |∫_y^x f| ≤ M|x − y| 와 같은 부등식이다. 반례 'β 가 α 보다 작으면 크기 비교가 뒤집히는 예'는 같은 증명이 'When c > x, then the inequalities are reversed' 라고 적는 것과 같은 현상을 상수함수로 보인 것이다. 확인 질문 '∫_α^β f + ∫_β^α f'는 출처 연습문제 5.2.8 에서 γ = α 로 둔 경우와 같고, 확인 질문 '∫_2^0 f 의 범위'는 Theorem 5.3.3 의 증명의 (f(c) − ε)(x − c) ≤ ∫_c^x f ≤ (f(c) + ε)(x − c) 와 같은 꼴의 어림을 위끝이 아래끝보다 작은 경우에 쓴 것이다. 예시 '같은 두 끝점과 디리클레 함수'의 함수는 출처 Example 5.1.4(5.1.1 소절, p.183)의 디리클레 함수이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 경계값에서 거짓이던 설명 문장 4건과 출처 메모의 틀린 서술 1건을 고쳤다."
added: 2026-11-20
---

:::statement
구간과 닫힌구간 $[p, q]$는 [[interval]]의 것이고, 리만 적분가능, 적분 $\int_p^q f$, 정의역이 $[p, q]$보다 큰 함수가 $[p, q]$에서 적분가능하다는 것과 그 적분은 [[riemann-integral]]의 것이다(그 항목의 (4)). 절댓값은 [[absolute-value]]의 것이고, 제한 $f|_{[\alpha, \beta]}$는 [[real-valued-function]]의 것이다.

**두 수 사이의 점.** 실수 $\alpha$, $\beta$, $t$에 대하여, $t$가 $\alpha$**와** $\beta$ **사이에 있다**는 것은 정확히 다음 셋 가운데 하나가 성립할 때이다: $\alpha < \beta$이고 $\alpha \le t \le \beta$이다; $\beta < \alpha$이고 $\beta \le t \le \alpha$이다; $\alpha = \beta$이고 $t = \alpha$이다. 끝점 $\alpha$와 $\beta$도 사이에 있는 점이다.

**사이에서 적분가능.** $I$를 구간, $f : I \to \mathbb{R}$, $\alpha$, $\beta$를 $I$의 원소라 하자. $f$가 $\alpha$**와** $\beta$ **사이에서 적분가능**(integrable between $\alpha$ and $\beta$)하다는 것은 정확히 다음 셋 가운데 하나가 성립할 때이다: $\alpha < \beta$이고 $f$가 $[\alpha, \beta]$에서 적분가능하다; $\beta < \alpha$이고 $f$가 $[\beta, \alpha]$에서 적분가능하다; $\alpha = \beta$이다. 여기서 $[\alpha, \beta] \subseteq I$, $[\beta, \alpha] \subseteq I$이므로([[interval]]의 (4)) "$[\alpha, \beta]$에서 적분가능"은 [[riemann-integral]]의 (4)의 뜻이다.

**방향 있는 적분.** $f$가 $\alpha$와 $\beta$ 사이에서 적분가능할 때, 실수 $\int_\alpha^\beta f$를 다음과 같이 정하고 $f$의 $\alpha$에서 $\beta$까지의 **방향 있는 적분**(oriented integral)이라 한다.

- $\alpha < \beta$이면 $\int_\alpha^\beta f$는 [[riemann-integral]]의 (4)의 적분, 곧 $f|_{[\alpha, \beta]}$의 적분이다.
- $\beta < \alpha$이면 $\int_\alpha^\beta f = -\int_\beta^\alpha f$이다. 오른쪽의 $\int_\beta^\alpha f$는 [[riemann-integral]]의 (4)의 $[\beta, \alpha]$ 위의 적분이다.
- $\alpha = \beta$이면 $\int_\alpha^\beta f = 0$이다.

$\alpha < \beta$이면 이 기호는 [[riemann-integral]]의 기호 $\int_\alpha^\beta f$와 모양도 값도 같으므로 두 뜻이 부딪치지 않는다. $\beta \le \alpha$인 경우의 기호 $\int_\alpha^\beta f$는 이 항목에서 정한다. $\int_\alpha^\beta f(t)\,dt$처럼 적분 변수를 써도 [[riemann-integral]]의 적분 변수의 약속과 같은 뜻이다. $f$가 $\alpha$와 $\beta$ 사이에서 적분가능하지 않으면 $\int_\alpha^\beta f$를 정의하지 않는다.

다음이 성립한다. (1), (3), (4)에서 $I$는 구간, $f : I \to \mathbb{R}$이고 $\alpha$, $\beta$는 $I$의 원소이다.

1. (끝점 바꾸기) $\alpha$와 $\beta$ 사이에 있는 모든 점은 $I$의 원소이다. 실수 $t$가 $\alpha$와 $\beta$ 사이에 있는 것은 정확히 $\beta$와 $\alpha$ 사이에 있을 때이고, 그때 $|t - \alpha| \le |\beta - \alpha|$이다. $f$가 $\alpha$와 $\beta$ 사이에서 적분가능한 것은 정확히 $\beta$와 $\alpha$ 사이에서 적분가능할 때이고, 그때
   $$
   \int_\alpha^\beta f = -\int_\beta^\alpha f
   $$
   이다.
2. (세 점) $I$를 구간, $f : I \to \mathbb{R}$라 하고, $a < b$이고 $[a, b] \subseteq I$이며 $f$가 $[a, b]$에서 적분가능하다고 하자. $\alpha$, $\beta$, $\gamma$가 $[a, b]$의 원소이면(순서와 같음은 아무래도 좋다), $f$는 셋 가운데 어느 두 점 사이에서도 적분가능하고
   $$
   \int_\alpha^\gamma f = \int_\alpha^\beta f + \int_\beta^\gamma f
   $$
   이다.
3. (상수 가까이에서의 어림) $f$가 $\alpha$와 $\beta$ 사이에서 적분가능하고, 실수 $k$와 $0 \le \varepsilon$인 실수 $\varepsilon$이 $\alpha$와 $\beta$ 사이에 있는 모든 $t$에서 $|f(t) - k| \le \varepsilon$을 만족하면
   $$
   \left|\int_\alpha^\beta f - k(\beta - \alpha)\right| \le \varepsilon\,|\beta - \alpha|
   $$
   이다. 특히 $k = 0$으로 두면, $\alpha$와 $\beta$ 사이에 있는 모든 $t$에서 $|f(t)| \le \varepsilon$일 때 $\left|\int_\alpha^\beta f\right| \le \varepsilon\,|\beta - \alpha|$이다.
4. (상수함수) 실수 $k$에 대하여 $\alpha$와 $\beta$ 사이에 있는 모든 $t$에서 $f(t) = k$이면, $f$는 $\alpha$와 $\beta$ 사이에서 적분가능하고 $\int_\alpha^\beta f = k(\beta - \alpha)$이다. 특히 $I$ 위의 값이 $k$인 상수함수는 $I$의 어느 두 점 사이에서도 적분가능하고 $\int_\alpha^\beta k\,dt = k(\beta - \alpha)$이다.
5. (사이의 값만으로 정해진다) $I$, $J$를 구간, $f : I \to \mathbb{R}$, $g : J \to \mathbb{R}$라 하고 $\alpha$, $\beta$가 $I \cap J$의 원소라 하자. $\alpha$와 $\beta$ 사이에 있는 모든 $t$에서 $f(t) = g(t)$이면, $f$가 $\alpha$와 $\beta$ 사이에서 적분가능한 것은 정확히 $g$가 $\alpha$와 $\beta$ 사이에서 적분가능할 때이고, 그때 $\int_\alpha^\beta f = \int_\alpha^\beta g$이다.
:::

:::english
Intervals and closed intervals $[p, q]$ are those of the entry on intervals, and Riemann integrability, the integral $\int_p^q f$, what it means for a function with a domain larger than $[p, q]$ to be integrable on $[p, q]$, and its integral are those of the entry on the Riemann integral (its item (4)). Absolute values are those of the entry on absolute values.

**Points between two numbers.** For real numbers $\alpha$, $\beta$, $t$, we say that $t$ **lies between** $\alpha$ **and** $\beta$ exactly when one of the following three holds: $\alpha < \beta$ and $\alpha \le t \le \beta$; $\beta < \alpha$ and $\beta \le t \le \alpha$; $\alpha = \beta$ and $t = \alpha$. The endpoints $\alpha$ and $\beta$ also lie between them.

**Integrable between two points.** Let $I$ be an interval, $f : I \to \mathbb{R}$, and let $\alpha$, $\beta$ be elements of $I$. We say that $f$ is **integrable between** $\alpha$ **and** $\beta$ exactly when one of the following three holds: $\alpha < \beta$ and $f$ is integrable on $[\alpha, \beta]$; $\beta < \alpha$ and $f$ is integrable on $[\beta, \alpha]$; $\alpha = \beta$. Here $[\alpha, \beta] \subseteq I$ and $[\beta, \alpha] \subseteq I$ (item (4) of the entry on intervals), so "integrable on $[\alpha, \beta]$" is meant in the sense of item (4) of the entry on the Riemann integral.

**Oriented integral.** When $f$ is integrable between $\alpha$ and $\beta$, we define the real number $\int_\alpha^\beta f$ as follows and call it the **oriented integral** of $f$ from $\alpha$ to $\beta$.

- If $\alpha < \beta$, then $\int_\alpha^\beta f$ is the integral of item (4) of the entry on the Riemann integral, that is, the integral of $f|_{[\alpha, \beta]}$.
- If $\beta < \alpha$, then $\int_\alpha^\beta f = -\int_\beta^\alpha f$, where $\int_\beta^\alpha f$ on the right is the integral over $[\beta, \alpha]$ in the sense of item (4) of the entry on the Riemann integral.
- If $\alpha = \beta$, then $\int_\alpha^\beta f = 0$.

When $\alpha < \beta$, this symbol has the same form and the same value as the symbol $\int_\alpha^\beta f$ of the entry on the Riemann integral, so the two meanings do not conflict. The symbol $\int_\alpha^\beta f$ in the case $\beta \le \alpha$ is defined in this entry. Writing a variable of integration, as in $\int_\alpha^\beta f(t)\,dt$, has the same meaning as in the convention on variables of integration in the entry on the Riemann integral. If $f$ is not integrable between $\alpha$ and $\beta$, then $\int_\alpha^\beta f$ is not defined.

The following hold. In (1), (3), and (4), $I$ is an interval, $f : I \to \mathbb{R}$, and $\alpha$, $\beta$ are elements of $I$.

1. (Swapping the endpoints) Every point lying between $\alpha$ and $\beta$ is an element of $I$. A real number $t$ lies between $\alpha$ and $\beta$ exactly when it lies between $\beta$ and $\alpha$, and in that case $|t - \alpha| \le |\beta - \alpha|$. The function $f$ is integrable between $\alpha$ and $\beta$ exactly when it is integrable between $\beta$ and $\alpha$, and in that case
   $$
   \int_\alpha^\beta f = -\int_\beta^\alpha f .
   $$
2. (Three points) Let $I$ be an interval and $f : I \to \mathbb{R}$, and suppose $a < b$, $[a, b] \subseteq I$, and $f$ is integrable on $[a, b]$. If $\alpha$, $\beta$, $\gamma$ are elements of $[a, b]$ (in any order, equal or not), then $f$ is integrable between any two of them, and
   $$
   \int_\alpha^\gamma f = \int_\alpha^\beta f + \int_\beta^\gamma f .
   $$
3. (Estimate near a constant) If $f$ is integrable between $\alpha$ and $\beta$, and a real number $k$ and a real number $\varepsilon$ with $0 \le \varepsilon$ satisfy $|f(t) - k| \le \varepsilon$ for every $t$ lying between $\alpha$ and $\beta$, then
   $$
   \left|\int_\alpha^\beta f - k(\beta - \alpha)\right| \le \varepsilon\,|\beta - \alpha| .
   $$
   In particular, taking $k = 0$: if $|f(t)| \le \varepsilon$ for every $t$ lying between $\alpha$ and $\beta$, then $\left|\int_\alpha^\beta f\right| \le \varepsilon\,|\beta - \alpha|$.
4. (Constant functions) If for a real number $k$ we have $f(t) = k$ for every $t$ lying between $\alpha$ and $\beta$, then $f$ is integrable between $\alpha$ and $\beta$ and $\int_\alpha^\beta f = k(\beta - \alpha)$. In particular, the constant function on $I$ with value $k$ is integrable between any two points of $I$, and $\int_\alpha^\beta k\,dt = k(\beta - \alpha)$.
5. (Determined by the values in between) Let $I$, $J$ be intervals, $f : I \to \mathbb{R}$, $g : J \to \mathbb{R}$, and let $\alpha$, $\beta$ be elements of $I \cap J$. If $f(t) = g(t)$ for every $t$ lying between $\alpha$ and $\beta$, then $f$ is integrable between $\alpha$ and $\beta$ exactly when $g$ is, and in that case $\int_\alpha^\beta f = \int_\alpha^\beta g$.
:::

## 직관

강을 따라 배로 움직인 거리를 잴 때, 하류로 간 거리는 양수로, 상류로 거슬러 간 거리는 음수로 적으면 "어디서 출발해 어디에 닿았는가"만으로 순 이동이 정해집니다. 방향 있는 적분은 적분에 이런 방향을 붙인 것입니다. 비유의 출발점과 도착점이 $\alpha$와 $\beta$이고, 거슬러 가는 것이 $\beta < \alpha$인 경우, 곧 [[riemann-integral|리만 적분]]의 부호를 바꾸는 경우입니다.

방향을 붙이면 세 점의 덧셈 (2)가 점의 순서와 상관없이 하나의 식이 됩니다. [[additivity-of-the-integral|적분의 구간 덧셈]]의 (1)은 $a < b < c$인 세 점에만 말하지만, 예컨대 $\alpha < \gamma < \beta$이면 $\alpha$에서 $\beta$까지 갔다가 $\gamma$로 되돌아온 것으로 읽혀, 되돌아온 몫이 음수로 빠집니다.

(3)은 함숫값이 상수 $k$에서 $\varepsilon$ 이내에 있으면 적분도 "$k$ 곱하기 방향 있는 길이"에서 "$\varepsilon$ 곱하기 길이" 이내에 있다는 것입니다. 오른쪽에 $\beta - \alpha$가 아니라 절댓값 $|\beta - \alpha|$가 있는 것은, $\beta < \alpha$이고 $\varepsilon > 0$이면 $\varepsilon(\beta - \alpha)$가 음수여서 어떤 절댓값도 그 이하일 수 없기 때문입니다.

## 증명

:::idea
모든 것은 정의의 세 경우 $\alpha < \beta$, $\beta < \alpha$, $\alpha = \beta$로 나누어 확인한다. $\beta < \alpha$인 경우는 $[\beta, \alpha]$ 위의 리만 적분으로 바꾸어 $\alpha < \beta$인 경우로 돌린다. (2)는 세 점이 서로 다르면 크기순으로 놓아 [[additivity-of-the-integral|적분의 구간 덧셈]]의 (1)을 쓰고 (1)로 부호를 맞춘다.
:::

:::hint
(2)에서 $\alpha < \gamma < \beta$이면 구간 덧셈은 $\int_\alpha^\beta f = \int_\alpha^\gamma f + \int_\gamma^\beta f$를 줍니다. 여기에 (1)의 $\int_\gamma^\beta f = -\int_\beta^\gamma f$를 넣어 보세요.
:::

:::proof
실수의 계산은 [[real-number-arithmetic]]의 계산 법칙으로 하고, 번호만 쓴 "(1)의 (ii)" 같은 것은 [[order-properties-of-reals]]의 번호이다. "이 항목의 ($n$)"은 위 진술의 번호이고, "구간 덧셈 ($n$)"은 [[additivity-of-the-integral]]의 번호이다. 실수 $\alpha$, $\beta$는 [[real-order-axioms]]의 삼분법 (W1)에 의해 $\alpha < \beta$, $\beta < \alpha$, $\alpha = \beta$ 가운데 정확히 하나를 만족하므로, 두 정의의 세 경우는 서로 겹치지 않고 빠짐없다.

**이 항목의 (1).** $\alpha < \beta$이면 $\alpha$와 $\beta$ 사이의 점은 $[\alpha, \beta]$의 원소이고 [[interval]]의 (4)에 의해 $[\alpha, \beta] \subseteq I$이다. $\beta < \alpha$이면 같은 방법으로 $[\beta, \alpha] \subseteq I$이다. $\alpha = \beta$이면 사이의 점은 $\alpha \in I$뿐이다.

순서쌍 $(\beta, \alpha)$에 정의를 쓰면, $\alpha < \beta$일 때는 둘째 경우("뒤의 수가 앞의 수보다 작다")가 되어 "$\beta$와 $\alpha$ 사이에 있다"는 $\alpha \le t \le \beta$이고, $\beta < \alpha$일 때는 첫째 경우가 되어 $\beta \le t \le \alpha$이며, $\alpha = \beta$일 때는 $t = \alpha$이다. 어느 경우나 "$\alpha$와 $\beta$ 사이에 있다"의 조건과 같다. 또 $\alpha < \beta$이고 $\alpha \le t \le \beta$이면 (3)의 (i)과 (2)의 (ii)에 의해 $0 \le t - \alpha \le \beta - \alpha$이므로 [[absolute-value]]의 (1)에 의해 $|t - \alpha| = t - \alpha \le \beta - \alpha = |\beta - \alpha|$이다. $\beta < \alpha$이고 $\beta \le t \le \alpha$이면 (3)의 (i), (iii)과 (2)의 (ii)에 의해 $t - \alpha \le 0$이고 $0 \le \alpha - t \le \alpha - \beta$이므로 같은 (1)에 의해 $|t - \alpha| = \alpha - t \le \alpha - \beta = |\beta - \alpha|$이다. $\alpha = \beta$이면 $t = \alpha$이고 두 쪽이 모두 $0$이다. "사이에서 적분가능"도 같은 방법으로 두 순서에서 같은 조건이 된다.

이제 $f$가 $\alpha$와 $\beta$ 사이에서 적분가능하다고 하자. $\beta < \alpha$이면 정의에 의해 $\int_\alpha^\beta f = -\int_\beta^\alpha f$이다. $\alpha < \beta$이면 $(\beta, \alpha)$에 둘째 경우의 정의를 써서 $\int_\beta^\alpha f = -\int_\alpha^\beta f$이고, 양변에 $-1$을 곱하면 $\int_\alpha^\beta f = -\int_\beta^\alpha f$이다. $\alpha = \beta$이면 두 값이 모두 $0$이고 $0 = -0$이다.

**이 항목의 (4).** $\alpha < \beta$라 하자. $[\alpha, \beta]$의 모든 점에서 $f$의 값은 $k$이므로, [[riemann-integral]]의 (5)에 의해 $[\alpha, \beta]$ 위의 값이 $k$인 상수함수 $c$는 적분가능하고 $\int_\alpha^\beta c = k(\beta - \alpha)$이며, 그 항목의 (4)의 마지막 문장을 $h_1 = f$, $h_2 = c$에 쓰면 $f$는 $[\alpha, \beta]$에서 적분가능하고 $\int_\alpha^\beta f = k(\beta - \alpha)$이다. $\beta < \alpha$이면 같은 방법으로 $f$는 $[\beta, \alpha]$에서 적분가능하고 $\int_\beta^\alpha f = k(\alpha - \beta)$이므로, 정의에 의해 $\int_\alpha^\beta f = -k(\alpha - \beta) = k(\beta - \alpha)$이다. $\alpha = \beta$이면 정의에 의해 적분가능하고 $\int_\alpha^\beta f = 0 = k \cdot 0 = k(\beta - \alpha)$이다. 상수함수의 경우는 모든 $t$에서 값이 $k$이므로 이것의 특별한 경우이다.

**이 항목의 (3).** 세 경우로 나눈다.

$\alpha < \beta$인 경우. $g = f|_{[\alpha, \beta]}$는 적분가능하고 정의에 의해 $\int_\alpha^\beta f = \int_\alpha^\beta g$이다. $[\alpha, \beta]$의 모든 $t$에서 $|g(t) - k| = |f(t) - k| \le \varepsilon$이므로 [[absolute-value]]의 (8)에 의해 $k - \varepsilon \le g(t) \le k + \varepsilon$이다. [[riemann-integral]]의 (2)의 (i)을 $m = k - \varepsilon$, $M = k + \varepsilon$으로 쓰면
$$
\begin{aligned}
(k - \varepsilon)(\beta - \alpha) &\le \int_\alpha^\beta f \\
&\le (k + \varepsilon)(\beta - \alpha)
\end{aligned}
$$
이고, 분배법칙으로 왼쪽은 $k(\beta - \alpha) - \varepsilon(\beta - \alpha)$, 오른쪽은 $k(\beta - \alpha) + \varepsilon(\beta - \alpha)$이다. [[absolute-value]]의 (8)에 의해 $\left|\int_\alpha^\beta f - k(\beta - \alpha)\right| \le \varepsilon(\beta - \alpha)$이다. $0 < \beta - \alpha$이므로 [[absolute-value]]의 (1)에 의해 $|\beta - \alpha| = \beta - \alpha$이고 진술의 부등식이 된다.

$\beta < \alpha$인 경우. $f$는 $[\beta, \alpha]$에서 적분가능하고, 이 항목의 (1)에 의해 $\beta$와 $\alpha$ 사이의 모든 $t$에서 $|f(t) - k| \le \varepsilon$이다. 앞의 경우를 $\beta < \alpha$에 쓰면 $\left|\int_\beta^\alpha f - k(\alpha - \beta)\right| \le \varepsilon(\alpha - \beta)$이다. 정의에 의해
$$
\begin{aligned}
&\int_\alpha^\beta f - k(\beta - \alpha) \\
&\quad = -\int_\beta^\alpha f + k(\alpha - \beta) \\
&\quad = -\left(\int_\beta^\alpha f - k(\alpha - \beta)\right)
\end{aligned}
$$
이므로 [[absolute-value]]의 (3)에 의해 두 절댓값은 같다. $\beta - \alpha < 0$이므로 [[absolute-value]]의 (1)에 의해 $|\beta - \alpha| = -(\beta - \alpha) = \alpha - \beta$이고 진술의 부등식이 된다.

$\alpha = \beta$인 경우. 왼쪽은 $|0 - k \cdot 0| = |0| = 0$이고 오른쪽은 $\varepsilon \cdot |0| = 0$이다([[absolute-value]]의 (2)). $0 \le 0$이다.

$k = 0$이면 $|f(t) - 0| = |f(t)|$이고 $0 \cdot (\beta - \alpha) = 0$이므로 마지막 문장이 된다.

**이 항목의 (2).** 먼저 적분가능성을 보인다. $x$, $y$가 $\alpha$, $\beta$, $\gamma$ 가운데 둘이라 하자. $x < y$이면 $a \le x < y \le b$이므로, 구간 덧셈 (2)를 (5)의 꼴로 $f$와 $[a, b] \subseteq I$에 쓰면 $f$는 $[x, y]$에서 적분가능하다. $y < x$이면 같은 방법으로 $[y, x]$에서 적분가능하다. $x = y$이면 정의에 의해 적분가능하다. 따라서 $f$는 어느 두 점 사이에서도 적분가능하다.

$\{\alpha, \beta, \gamma\}$의 두 원소 $x$, $y$에 대하여 $A(x, y) = \int_x^y f$로 쓰자. 정의에 의해 $A(x, x) = 0$이고, 이 항목의 (1)에 의해 $A(x, y) = -A(y, x)$이다. 보일 등식은 $A(\alpha, \gamma) = A(\alpha, \beta) + A(\beta, \gamma)$이다. 이것을 (가)라 부른다.

크기순인 세 점: $p$, $q$, $r$가 $\{\alpha, \beta, \gamma\}$의 원소이고 $p < q < r$이면 $A(p, r) = A(p, q) + A(q, r)$이다. 실제로 $a \le p < r \le b$이므로 위와 같이 $f$는 $[p, r]$에서 적분가능하고, 구간 덧셈 (1)을 (5)의 꼴로 $f$와 $p < q < r$, $[p, r] \subseteq I$에 쓰면 $\int_p^r f = \int_p^q f + \int_q^r f$이다. 세 적분은 모두 왼쪽 끝이 오른쪽 끝보다 작은 경우이므로 방향 있는 적분의 정의의 첫째 경우와 같은 수이다.

세 점의 같음에 따라 나눈다.

- $\alpha = \beta = \gamma$: (가)는 $0 = 0 + 0$이다.
- $\alpha = \beta$이고 $\beta \ne \gamma$: $A(\alpha, \beta) = 0$이고 $A(\beta, \gamma) = A(\alpha, \gamma)$이므로 (가)가 성립한다.
- $\beta = \gamma$이고 $\alpha \ne \beta$: $A(\beta, \gamma) = 0$이고 $A(\alpha, \beta) = A(\alpha, \gamma)$이므로 (가)가 성립한다.
- $\alpha = \gamma$이고 $\alpha \ne \beta$: 왼쪽은 $A(\alpha, \alpha) = 0$이고 오른쪽은 $A(\alpha, \beta) + A(\beta, \alpha) = A(\alpha, \beta) - A(\alpha, \beta) = 0$이다.

이 네 경우가 아니면 세 점은 서로 다르다. 서로 다른 두 실수는 (W1)에 의해 한쪽이 다른 쪽보다 작으므로, 세 쌍 $(\alpha, \beta)$, $(\beta, \gamma)$, $(\alpha, \gamma)$마다 어느 쪽이 작은지가 정해진다. "$\alpha < \beta$, $\beta < \gamma$, $\gamma < \alpha$"이면 (1)의 (v)에 의해 $\alpha < \alpha$가 되어 (1)의 (i)에 어긋나고, "$\beta < \alpha$, $\gamma < \beta$, $\alpha < \gamma$"도 같은 까닭으로 일어나지 않는다. 나머지 여섯 가지는 아래의 여섯 순서이고, 각각에서 크기순인 세 점의 등식과 $A(x, y) = -A(y, x)$로 (가)를 얻는다.

- $\alpha < \beta < \gamma$: 크기순인 세 점의 등식 그대로이다.
- $\alpha < \gamma < \beta$: $A(\alpha, \beta) = A(\alpha, \gamma) + A(\gamma, \beta)$이므로 $A(\alpha, \gamma) = A(\alpha, \beta) - A(\gamma, \beta) = A(\alpha, \beta) + A(\beta, \gamma)$이다.
- $\beta < \alpha < \gamma$: $A(\beta, \gamma) = A(\beta, \alpha) + A(\alpha, \gamma)$이므로 $A(\alpha, \gamma) = A(\beta, \gamma) - A(\beta, \alpha) = A(\beta, \gamma) + A(\alpha, \beta)$이다.
- $\beta < \gamma < \alpha$: $A(\beta, \alpha) = A(\beta, \gamma) + A(\gamma, \alpha)$, 곧 $-A(\alpha, \beta) = A(\beta, \gamma) - A(\alpha, \gamma)$이므로 $A(\alpha, \gamma) = A(\alpha, \beta) + A(\beta, \gamma)$이다.
- $\gamma < \alpha < \beta$: $A(\gamma, \beta) = A(\gamma, \alpha) + A(\alpha, \beta)$, 곧 $-A(\beta, \gamma) = -A(\alpha, \gamma) + A(\alpha, \beta)$이므로 $A(\alpha, \gamma) = A(\alpha, \beta) + A(\beta, \gamma)$이다.
- $\gamma < \beta < \alpha$: $A(\gamma, \alpha) = A(\gamma, \beta) + A(\beta, \alpha)$, 곧 $-A(\alpha, \gamma) = -A(\beta, \gamma) - A(\alpha, \beta)$이므로 양변에 $-1$을 곱해 (가)를 얻는다.

**이 항목의 (5).** (1)에 의해 $\alpha$와 $\beta$ 사이의 점은 $I$와 $J$에 모두 속한다. $\alpha < \beta$이면 $[\alpha, \beta]$의 모든 $t$에서 $f(t) = g(t)$이므로, [[riemann-integral]]의 (4)의 마지막 문장을 $h_1 = f$, $h_2 = g$에 쓰면 $f$가 $[\alpha, \beta]$에서 적분가능한 것은 정확히 $g$가 그럴 때이고 그때 두 적분이 같다. $\beta < \alpha$이면 같은 것을 $[\beta, \alpha]$에 쓰고 정의에 의해 두 값에 똑같이 $-1$을 곱한다. $\alpha = \beta$이면 둘 다 적분가능하고 두 값이 모두 $0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[순서가 섞인 세 점과 상수함수]
$\mathbb{R}$ 위의 값이 $3$인 상수함수 $f$와 $\alpha = 4$, $\beta = 1$, $\gamma = 2$를 봅니다. (4)에 의해
$$
\begin{gathered}
\int_4^2 f = 3 \cdot (2 - 4) = -6, \\
\int_4^1 f = 3 \cdot (1 - 4) = -9, \\
\int_1^2 f = 3 \cdot (2 - 1) = 3
\end{gathered}
$$
이고, $-9 + 3 = -6$이어서 (2)의 등식 $\int_4^2 f = \int_4^1 f + \int_1^2 f$가 맞습니다((2)를 쓸 때의 구간은 $[a, b] = [1, 4]$입니다). 정의로 직접 보아도 $\int_4^1 f = -\int_1^4 f = -3 \cdot 3 = -9$입니다.
:::

:::example[구간 위의 모든 두 점에서 적분을 누르기]
$f : [0, 5] \to \mathbb{R}$가 적분가능하고 모든 $t$에서 $|f(t)| \le 2$라 합시다. $[0, 5]$의 두 점 $x$, $y$ 사이에 있는 점은 모두 $[0, 5]$에 있으므로, (2)에 의해 $f$는 $x$와 $y$ 사이에서 적분가능하고 (3)을 $k = 0$, $\varepsilon = 2$로 쓰면 $\left|\int_x^y f\right| \le 2|y - x|$입니다. 예컨대 $x = 4$, $y = 1$이면 $\left|\int_4^1 f\right| \le 6$입니다. $x$와 $y$의 크기를 따로 나누지 않아도 됩니다.
:::

:::counterexample[β 가 α 보다 작으면 크기 비교가 뒤집히는 예]
$[0, 2]$ 위의 값이 $0$인 상수함수 $f$와 값이 $1$인 상수함수 $g$는 모든 점에서 $f(t) \le g(t)$입니다. $\alpha = 0$, $\beta = 2$이면 (4)에 의해 $\int_0^2 f = 0 \le 2 = \int_0^2 g$이지만, $\alpha = 2$, $\beta = 0$이면
$$
\begin{gathered}
\int_2^0 f = 0, \\
\int_2^0 g = 1 \cdot (0 - 2) = -2
\end{gathered}
$$
이어서 $\int_2^0 g < \int_2^0 f$입니다. 그래서 함숫값의 크기 비교를 방향 있는 적분의 크기 비교로 옮길 때는 $\alpha$와 $\beta$의 순서를 밝혀야 합니다.
:::

:::example[같은 두 끝점과 디리클레 함수]
$D$를 $[0, 1]$ 위의 디리클레 함수([[dirichlet-function]])라 합시다. $\alpha = \beta = 1/2$이면 정의에 의해 $D$는 $1/2$과 $1/2$ 사이에서 적분가능하고 $\int_{1/2}^{1/2} D = 0$입니다. 반면 $\alpha = 0$, $\beta = 1$이면 [[riemann-integral]]의 (5)에 의해 $D$는 $[0, 1]$에서 적분가능하지 않으므로 $0$과 $1$ 사이에서 적분가능하지 않고, $\int_0^1 D$와 $\int_1^0 D$는 정의되지 않습니다.
:::

## 확인 질문

:::check[$f$가 $\alpha$와 $\beta$ 사이에서 적분가능하면 $\int_\alpha^\beta f + \int_\beta^\alpha f$는 얼마인가?]
$0$입니다. (1)에 의해 $\int_\alpha^\beta f = -\int_\beta^\alpha f$이기 때문입니다. $f$가 $\alpha$와 $\beta$를 담는 닫힌구간에서 적분가능하면 (2)에서 $\gamma = \alpha$로 둔 등식 $0 = \int_\alpha^\alpha f = \int_\alpha^\beta f + \int_\beta^\alpha f$로도 같은 답이 나옵니다.
:::

:::check[$f : [0, 2] \to \mathbb{R}$가 적분가능하고 모든 $t$에서 $|f(t) - 3| \le 1/2$이면 $\int_2^0 f$는 어느 범위에 있는가?]
$-7$ 이상 $-5$ 이하입니다. (3)을 $\alpha = 2$, $\beta = 0$, $k = 3$, $\varepsilon = 1/2$로 쓰면 $\left|\int_2^0 f - 3 \cdot (0 - 2)\right| \le \frac{1}{2} \cdot |0 - 2| = 1$, 곧 $\left|\int_2^0 f - (-6)\right| \le 1$이고, [[absolute-value]]의 (8)에 의해 $-7 \le \int_2^0 f \le -5$입니다.
:::
