---
title: 리만 적분
title_en: The Riemann Integral
aliases: [리만 적분가능, 적분가능, 리만 적분가능한 함수, 적분 변수, Riemann integrable, Riemann integrable function, integral, variable of integration]
kind: definition
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: "[a, b] 위의 유계함수 f 는 하적분과 상적분이 같을 때 리만 적분가능하고, 그 공통값이 리만 적분이다. 적분이 모든 다르부 하합과 상합 사이에 있다는 것, 함숫값의 범위로 적분을 누르기, 모든 하합과 상합 사이에 끼인 수는 적분과 같다는 것, 더 큰 정의역의 함수의 적분, 상수함수와 디리클레 함수, 유계가 아닌 함수를 함께 진술한다."
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, upper-bound-and-supremum, real-valued-function, bounded-function, interval, partition-of-an-interval, darboux-sums, lower-and-upper-integrals, dirichlet-function]
sources:
  - ref: lebl-basic-analysis
    loc: 5.1절(5.1.2 소절) Definition 5.1.9 와 그 뒤 문단, Proposition 5.1.10 과 그 뒤 문단 (p.185), Example 5.1.11 (p.186); 5.1.3 소절 More notation (p.188); 5.1.1 소절 Example 5.1.4 (p.183)
    checked: original
    note: "정의는 출처의 Definition 5.1.9(p.185)와 같다. 출처는 적분가능한 함수 전체를 R[a, b] 로 쓰고 이 항목은 그 기호를 두지 않는다. 출처는 1.4 절(p.41)에서 구간 기호 [a, b] 를 a < b 일 때 정하고, 이 항목도 a < b 를 가정한다. '적분가능한 함수는 유계이다'(이 항목 (6)의 둘째 문장)는 출처의 Definition 5.1.9 뒤 문단 'By definition, a Riemann integrable function is bounded' 이다. (1)은 출처의 Proposition 5.1.8 과 정의에서 바로 나오는 것이고, 출처는 Example 5.1.12 의 끝(p.187)에서 L(P, f) ≤ ∫ ≤ U(P, f) 를 쓴다. (2)의 첫 문장은 출처의 Proposition 5.1.10(p.185, 출처는 Proposition 5.1.8 에서 '바로 얻는다'고 적는다)이고, 한쪽만 아는 꼴의 위쪽은 그 뒤 문단의 'weaker form' 이다. (ii)의 아래쪽 꼴은 그 문단의 짝이다. (iii)의 꼴(|f| ≤ M 에서 −M(b − a) ≤ ∫ ≤ M(b − a), |∫| ≤ M × 길이)은 출처가 5.2.3 소절 Lemma 5.2.8 의 증명(p.196)과 5.3.2 소절 Theorem 5.3.3 의 증명(p.202)에서 쓴다. (3)은 출처에 명제로 없다(검색어 'any number', 'unique number', 'between', 'sandwich', 'squeeze' 를 5장에서 찾고 5.1.4 소절 연습문제를 처음부터 읽었다). 출처는 Theorem 5.3.1 의 증명(p.201)에서 같은 결론을 상한과 하한을 다시 잡아 얻는다. (4)는 출처의 5.1.3 소절 첫 문단(p.188, 제한으로 정의)과 같고, 둘째 문장(값이 같은 두 함수)은 이 사이트가 제한이 같은 함수라는 데서 끌어낸 것이다. 출처 5.1.3 소절은 b < a 와 a = b 의 적분도 같은 곳에서 정의하는데 이 항목은 정의하지 않는다. 적분 변수 문단은 출처 5.1.3 소절 끝(p.188)의 '다른 글자를 써도 된다'와 같은 내용이다. (5)의 상수함수는 출처의 Example 5.1.11(p.186)과 같은 결론이고, 디리클레 함수는 출처 Example 5.1.4(p.183, [0, 1] 에서 하적분 0, 상적분 1)를 [a, b] 로 넓힌 사이트의 dirichlet-function 에서 온다. 예시 '값이 3 인 상수함수' 는 Example 5.1.11 과 같은 발상이다. 예시 '정의역이 ℝ 인 함수를 [1, 4] 에서' 는 5.1.3 소절 첫 문단의 약속을 쓰는 예이다. 반례 '적분이 음수인 예' 도 Example 5.1.11 과 같은 발상(상수함수)이다. 확인 질문 'L(P, f) = U(P, f) = 7 이면' 은 출처 연습문제 5.1.15(5.1.4 소절, p.190, L(P, f) = U(P, f) 인 분할이 있으면 f 는 상수함수)와 같은 조건을 쓴다. 출처는 5.3.3 소절 Example 5.3.7 뒤 문단(p.204)에서 유계가 아닌 함수가 리만 적분가능하지 않다고 적는다(이 항목 (6))."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 거꾸로 쓴 직관 문장 1건과 출처 메모의 틀린 주장 3건을 고쳤다."
added: 2026-11-20
---

:::statement
$[a, b]$의 분할은 [[partition-of-an-interval]]의 것이고, 다르부 합 $L(P, f)$, $U(P, f)$는 [[darboux-sums]]의 것이며, 하적분 $\underline{\int_a^b} f$와 상적분 $\overline{\int_a^b} f$는 [[lower-and-upper-integrals]]의 것이다. 함수의 유계는 [[bounded-function]]의 것이고, 실함수, 함수의 같음, 상수함수, 제한은 [[real-valued-function]]의 것이다. 절댓값은 [[absolute-value]]의 것이다. 아래에서 $a$, $b$는 $a < b$인 실수이다.

**리만 적분.** $f : [a, b] \to \mathbb{R}$가 **리만 적분가능**(Riemann integrable)인 것은 정확히 $f$가 유계이고 $\underline{\int_a^b} f = \overline{\int_a^b} f$일 때이다. 줄여서 **적분가능**(integrable)이라고도 한다. 이때 이 공통값을 $f$의 $[a, b]$ 위의 **리만 적분**(Riemann integral), 줄여서 **적분**이라 하고 $\int_a^b f$로 쓴다. 곧
$$
\int_a^b f = \underline{\int_a^b} f = \overline{\int_a^b} f
$$
이다. $f$가 적분가능하지 않으면 $\int_a^b f$를 정의하지 않는다. 적분가능한 함수 전체의 집합에는 기호를 두지 않는다. 이 항목은 $a < b$일 때만 $\int_a^b f$를 정의하며, $a = b$이거나 $b < a$인 경우의 기호 $\int_a^b f$는 이 항목에서 정의하지 않는다.

**적분 변수.** $\int_a^b f$를 $\int_a^b f(x)\,dx$로도 쓴다. 이 수는 $f$, $a$, $b$만으로 정해지므로 글자 $x$와 $dx$는 이 기호 안에서만 쓰는 이름(**적분 변수**, variable of integration)이고, 다른 글자로 바꾼 $\int_a^b f(t)\,dt$는 같은 수이다. $[a, b]$의 각 원소 $x$에서 정해지는 식을 써서 "$\int_a^b (x\text{에 대한 식})\,dx$"라 쓰면, [[real-valued-function]]의 (1)로 $x$에서의 값이 그 식이 되게 정한 함수 $[a, b] \to \mathbb{R}$의 적분을 뜻한다. 예컨대 실수 $k$에 대하여 $\int_a^b k\,dx$는 $[a, b]$ 위의 값이 $k$인 상수함수의 적분이다.

다음이 성립한다.

1. (다르부 합 사이) $f : [a, b] \to \mathbb{R}$가 적분가능하면 $[a, b]$의 모든 분할 $P$에서
   $$
   L(P, f) \le \int_a^b f \le U(P, f)
   $$
   이다.
2. (함숫값의 범위로 누르기) $f : [a, b] \to \mathbb{R}$가 적분가능하다고 하자.
   - (i) 실수 $m$, $M$이 $[a, b]$의 모든 $x$에서 $m \le f(x) \le M$을 만족하면 $m(b - a) \le \int_a^b f \le M(b - a)$이다.
   - (ii) 실수 $M$이 $[a, b]$의 모든 $x$에서 $f(x) \le M$을 만족하면 $\int_a^b f \le M(b - a)$이다. 실수 $m$이 $[a, b]$의 모든 $x$에서 $m \le f(x)$를 만족하면 $m(b - a) \le \int_a^b f$이다.
   - (iii) 실수 $B$가 $[a, b]$의 모든 $x$에서 $|f(x)| \le B$를 만족하면 $\left|\int_a^b f\right| \le B(b - a)$이다.
3. (사이에 끼인 수) $f : [a, b] \to \mathbb{R}$가 적분가능하고 실수 $I$가 $[a, b]$의 모든 분할 $P$에서 $L(P, f) \le I \le U(P, f)$를 만족하면 $I = \int_a^b f$이다.
4. (더 큰 정의역) $[a, b] \subseteq S \subseteq \mathbb{R}$이고 $h : S \to \mathbb{R}$라 하자. $h$가 $[a, b]$**에서 리만 적분가능**(적분가능)하다는 것은 정확히 제한 $h|_{[a, b]} : [a, b] \to \mathbb{R}$가 리만 적분가능하다는 것이고, 그때 $\int_a^b h$와 $\int_a^b h(x)\,dx$는 $\int_a^b h|_{[a, b]}$를 뜻한다. 이 약속은 [[darboux-sums]]의 (8)과 [[lower-and-upper-integrals]]의 (8)의 약속과 맞는다. 곧 $h$가 $[a, b]$에서 적분가능한 것은 정확히 $h$가 $[a, b]$ 위에서 유계이고 $\underline{\int_a^b} h = \overline{\int_a^b} h$일 때이다. $S = [a, b]$이면 $h|_{[a, b]} = h$이므로 앞의 정의와 같다. 또 $[a, b] \subseteq S_1$, $[a, b] \subseteq S_2$이고 $h_1 : S_1 \to \mathbb{R}$, $h_2 : S_2 \to \mathbb{R}$가 $[a, b]$의 모든 $x$에서 $h_1(x) = h_2(x)$를 만족하면, $h_1$이 $[a, b]$에서 적분가능한 것은 정확히 $h_2$가 $[a, b]$에서 적분가능할 때이고, 그때 $\int_a^b h_1 = \int_a^b h_2$이다.
5. (상수함수와 디리클레 함수) 실수 $k$에 대하여 $[a, b]$ 위의 값이 $k$인 상수함수는 적분가능하고 $\int_a^b k\,dx = k(b - a)$이다. 특히 값이 $0$인 상수함수의 적분은 $0$이다. $[a, b]$ 위의 디리클레 함수([[dirichlet-function]])는 유계이지만 적분가능하지 않다.
6. (유계가 아닌 함수) $f : [a, b] \to \mathbb{R}$가 유계가 아니면 $f$는 적분가능하지 않다. 곧 적분가능한 함수는 유계이다.
:::

:::english
Partitions of $[a, b]$ are as in the entry on partitions of an interval; the Darboux sums $L(P, f)$ and $U(P, f)$ are as in the entry on Darboux sums; the lower integral $\underline{\int_a^b} f$ and the upper integral $\overline{\int_a^b} f$ are as in the entry on lower and upper integrals. Boundedness of functions is as in the entry on bounded functions; real-valued functions, equality of functions, constant functions and restrictions are as in the entry on real-valued functions. Absolute values are as in the entry on absolute value. Below, $a$ and $b$ are real numbers with $a < b$.

**The Riemann integral.** A function $f : [a, b] \to \mathbb{R}$ is **Riemann integrable** exactly when $f$ is bounded and $\underline{\int_a^b} f = \overline{\int_a^b} f$. We also say simply **integrable**. In that case the common value is called the **Riemann integral** of $f$ over $[a, b]$, or simply the **integral**, and is denoted $\int_a^b f$. That is,
$$
\int_a^b f = \underline{\int_a^b} f = \overline{\int_a^b} f.
$$
If $f$ is not integrable, $\int_a^b f$ is not defined. No symbol is introduced for the set of all integrable functions. This entry defines $\int_a^b f$ only when $a < b$; the symbol $\int_a^b f$ for $a = b$ or $b < a$ is not defined in this entry.

**Variable of integration.** We also write $\int_a^b f$ as $\int_a^b f(x)\,dx$. Since this number is determined by $f$, $a$ and $b$ alone, the letters $x$ and $dx$ are names used only inside this symbol (the **variable of integration**), and $\int_a^b f(t)\,dt$, with another letter, is the same number. If we write "$\int_a^b (\text{an expression in } x)\,dx$" using an expression defined at each element $x$ of $[a, b]$, it means the integral of the function $[a, b] \to \mathbb{R}$ whose value at $x$ is that expression, defined as in (1) of the entry on real-valued functions. For example, for a real number $k$, $\int_a^b k\,dx$ is the integral of the constant function on $[a, b]$ with value $k$.

The following hold.

1. (Between Darboux sums) If $f : [a, b] \to \mathbb{R}$ is integrable, then for every partition $P$ of $[a, b]$,
   $$
   L(P, f) \le \int_a^b f \le U(P, f).
   $$
2. (Bounding by the range of values) Suppose $f : [a, b] \to \mathbb{R}$ is integrable.
   - (i) If real numbers $m$ and $M$ satisfy $m \le f(x) \le M$ for all $x$ in $[a, b]$, then $m(b - a) \le \int_a^b f \le M(b - a)$.
   - (ii) If a real number $M$ satisfies $f(x) \le M$ for all $x$ in $[a, b]$, then $\int_a^b f \le M(b - a)$. If a real number $m$ satisfies $m \le f(x)$ for all $x$ in $[a, b]$, then $m(b - a) \le \int_a^b f$.
   - (iii) If a real number $B$ satisfies $|f(x)| \le B$ for all $x$ in $[a, b]$, then $\left|\int_a^b f\right| \le B(b - a)$.
3. (A number squeezed between the sums) If $f : [a, b] \to \mathbb{R}$ is integrable and a real number $I$ satisfies $L(P, f) \le I \le U(P, f)$ for every partition $P$ of $[a, b]$, then $I = \int_a^b f$.
4. (Larger domains) Let $[a, b] \subseteq S \subseteq \mathbb{R}$ and $h : S \to \mathbb{R}$. We say that $h$ is **Riemann integrable on $[a, b]$** (integrable on $[a, b]$) exactly when the restriction $h|_{[a, b]} : [a, b] \to \mathbb{R}$ is Riemann integrable, and then $\int_a^b h$ and $\int_a^b h(x)\,dx$ mean $\int_a^b h|_{[a, b]}$. This convention agrees with the conventions in (8) of the entry on Darboux sums and (8) of the entry on lower and upper integrals; that is, $h$ is integrable on $[a, b]$ exactly when $h$ is bounded on $[a, b]$ and $\underline{\int_a^b} h = \overline{\int_a^b} h$. If $S = [a, b]$, then $h|_{[a, b]} = h$, so this agrees with the definition above. Moreover, if $[a, b] \subseteq S_1$, $[a, b] \subseteq S_2$, and $h_1 : S_1 \to \mathbb{R}$, $h_2 : S_2 \to \mathbb{R}$ satisfy $h_1(x) = h_2(x)$ for all $x$ in $[a, b]$, then $h_1$ is integrable on $[a, b]$ exactly when $h_2$ is integrable on $[a, b]$, and in that case $\int_a^b h_1 = \int_a^b h_2$.
5. (Constant functions and the Dirichlet function) For a real number $k$, the constant function on $[a, b]$ with value $k$ is integrable and $\int_a^b k\,dx = k(b - a)$. In particular, the integral of the constant function with value $0$ is $0$. The Dirichlet function on $[a, b]$ is bounded but not integrable.
6. (Unbounded functions) If $f : [a, b] \to \mathbb{R}$ is not bounded, then $f$ is not integrable. That is, every integrable function is bounded.
:::

## 직관

$f \ge 0$이면 하합은 그래프 아래 영역 안에 들어가는 직사각형들의 넓이, 상합은 그 영역을 덮는 직사각형들의 넓이로 볼 수 있습니다. 하적분은 안쪽에서 채우는 넓이로 다가갈 수 있는 끝이고 상적분은 바깥에서 덮는 넓이로 다가갈 수 있는 끝입니다. 두 끝이 만나는 함수에서만 "그래프 아래의 넓이"를 수 하나로 정하고, 그 수가 리만 적분입니다. 디리클레 함수처럼 두 끝이 만나지 않는 함수에는 적분을 정하지 않습니다.

비유가 맞는 곳과 맞지 않는 곳이 있습니다. 넓이의 그림은 $f \ge 0$일 때의 것이고, $f$가 음수 값을 가지면 그 부분은 $x$축 아래이므로 적분에 음수로 들어갑니다(아래 반례). 정의 자체는 넓이를 쓰지 않고 다르부 합의 상한과 하한만 씁니다.

(3)은 적분이 "모든 하합 이상이고 모든 상합 이하인 수"로 하나로 정해진다는 것입니다. 어떤 수가 적분과 같다는 것을 보일 때, 그 수가 모든 분할에서 하합과 상합 사이에 있다는 것만 보이면 됩니다. 적분가능하다는 가정이 필요한 까닭은, 하적분과 상적분이 다르면 그 사이의 수가 모두 이 조건을 만족해 수가 하나로 정해지지 않기 때문입니다(디리클레 함수에서는 $0$과 $b - a$ 사이의 모든 수가 그렇습니다).

## 증명

:::idea
리만 적분은 하적분이자 상적분이므로, 하적분과 상적분에 대해 이미 아는 부등식([[lower-and-upper-integrals|하적분과 상적분]]의 (2), (3), (6))이 그대로 적분의 부등식이 된다. (3)은 상한이 "가장 작은 상계"이고 하한이 "가장 큰 하계"라는 정의를 한 번씩 쓴다.
:::

:::hint
(3)에서 $I$는 모든 하합의 상계입니다. 그러면 $I$와 하적분 사이에는 어떤 부등식이 성립할까요?
:::

:::proof
번호만 쓴 "(1)의 (ii)" 같은 것은 [[order-properties-of-reals]]의 번호이고, (K…)는 [[real-number-arithmetic]]의 번호이며, "이 항목의 (n)"은 위 진술의 번호이다. 적분가능한 $f$에 대하여 $J = \int_a^b f$로 쓰면 정의에 의해 $J = \underline{\int_a^b} f = \overline{\int_a^b} f$이다.

**이 항목의 (1).** [[lower-and-upper-integrals|하적분과 상적분]]의 (2)에 의해 모든 분할 $P$에서 $L(P, f) \le \underline{\int_a^b} f$이고 $\overline{\int_a^b} f \le U(P, f)$이다. 두 값이 모두 $J$이므로 $L(P, f) \le J \le U(P, f)$이다.

**이 항목의 (2).** (i) [[lower-and-upper-integrals|하적분과 상적분]]의 (3)에 의해 $m(b - a) \le \underline{\int_a^b} f = J$이고 $J = \overline{\int_a^b} f \le M(b - a)$이다.

(ii) $f$는 유계이므로 [[bounded-function]]의 정의에 의해 $[a, b]$의 모든 $x$에서 $|f(x)| \le B_0$인 실수 $B_0$이 있고, [[absolute-value]]의 (7)에 의해 모든 $x$에서 $-B_0 \le f(x) \le B_0$이다. 모든 $x$에서 $f(x) \le M$이면 (i)을 $-B_0$과 $M$에 써서 $J \le M(b - a)$를 얻는다. 모든 $x$에서 $m \le f(x)$이면 (i)을 $m$과 $B_0$에 써서 $m(b - a) \le J$를 얻는다.

(iii) 모든 $x$에서 $|f(x)| \le B$이면 [[absolute-value]]의 (7)에 의해 $-B \le f(x) \le B$이다. (i)에 의해 $(-B)(b - a) \le J \le B(b - a)$이고, (K9)에 의해 $(-B)(b - a) = -(B(b - a))$이다. 다시 [[absolute-value]]의 (7)에 의해 $|J| \le B(b - a)$이다.

**이 항목의 (3).** [[lower-and-upper-integrals|하적분과 상적분]]의 정의에 의해 $\underline{\int_a^b} f$는 집합 $\{L(P, f) : P\text{는 } [a, b]\text{의 분할}\}$의 상한이다. 이 집합의 원소 $t$는 어떤 분할 $P$에 대한 $L(P, f)$이므로 가정에 의해 $t \le I$이다. 따라서 $I$는 이 집합의 상계이고, [[upper-bound-and-supremum]]의 상한의 정의(모든 상계 이하)에 의해 $\underline{\int_a^b} f \le I$이다. 같은 방법으로 $I$는 집합 $\{U(P, f) : P\text{는 } [a, b]\text{의 분할}\}$의 하계이고, 하한의 정의에 의해 $I \le \overline{\int_a^b} f$이다. 두 값이 모두 $J$이므로 $J \le I \le J$이고, (1)의 (ii)에 의해 $I = J$이다.

**이 항목의 (4).** 첫 문장은 정의이다. 제한 $h|_{[a, b]}$는 [[real-valued-function]]의 (6)에 의해 $[a, b]$ 위의 실함수이다. 정의에 의해 $h|_{[a, b]}$가 적분가능한 것은 정확히 $h|_{[a, b]}$가 유계이고 그 하적분과 상적분이 같을 때이다. [[darboux-sums]]의 (8)에 의해 "$h|_{[a, b]}$가 유계"를 "$h$가 $[a, b]$ 위에서 유계"라 하고, [[lower-and-upper-integrals|하적분과 상적분]]의 (8)에 의해 $\underline{\int_a^b} h$, $\overline{\int_a^b} h$는 $h|_{[a, b]}$의 하적분과 상적분이므로 둘째 문장이 성립한다. $S = [a, b]$이면 $[a, b]$의 모든 $x$에서 $h|_{[a, b]}(x) = h(x)$이고 두 함수의 정의역이 모두 $[a, b]$이므로 [[real-valued-function]]의 (2)에 의해 $h|_{[a, b]} = h$이다.

마지막 문장. $h_1|_{[a, b]}$와 $h_2|_{[a, b]}$는 둘 다 $[a, b]$ 위의 실함수이고, $[a, b]$의 모든 $x$에서 [[real-valued-function]]의 (6)과 가정에 의해 $h_1|_{[a, b]}(x) = h_1(x) = h_2(x) = h_2|_{[a, b]}(x)$이다. 그 항목의 (2)에 의해 $h_1|_{[a, b]} = h_2|_{[a, b]}$이므로, 한쪽이 적분가능한 것은 정확히 다른 쪽이 적분가능할 때이고 적분도 같다.

**이 항목의 (5).** 값이 $k$인 상수함수 $c$는 모든 $x$에서 $|c(x)| = |k| \le |k|$((1)의 (iv))이므로 유계이다. [[lower-and-upper-integrals|하적분과 상적분]]의 (6)에 의해 $\underline{\int_a^b} c = \overline{\int_a^b} c = k(b - a)$이므로 $c$는 적분가능하고 $\int_a^b k\,dx = k(b - a)$이다. $k = 0$이면 (K9)에 의해 $0 \cdot (b - a) = 0$이다. $[a, b]$ 위의 디리클레 함수 $D$는 [[dirichlet-function]]의 (2)에 의해 유계이고, 그 항목의 (4)에 의해 $\underline{\int_a^b} D < \overline{\int_a^b} D$이므로 (1)의 (i)에 의해 두 값은 같지 않다. 따라서 $D$는 적분가능하지 않다.

**이 항목의 (6).** 적분가능의 정의에 "$f$가 유계"가 들어 있으므로, 유계가 아닌 $f$는 적분가능하지 않다. 둘째 문장은 첫 문장의 대우이다. $\blacksquare$
:::

## 예시와 반례

:::example[값이 3 인 상수함수]
$[-1, 2]$ 위의 값이 $3$인 상수함수는 (5)에 의해 적분가능하고 $\int_{-1}^{2} 3\,dx = 3 \cdot (2 - (-1)) = 9$입니다. 적분 변수의 글자를 바꾼 $\int_{-1}^{2} 3\,dt$도 같은 수 $9$입니다. (2)의 (i)을 $m = M = 3$으로 쓰면 $9 \le \int_{-1}^{2} 3\,dx \le 9$이어서 같은 값이 나옵니다.
:::

:::example[정의역이 ℝ 인 함수를 [1, 4] 에서]
$h : \mathbb{R} \to \mathbb{R}$를 $0 \le x$이면 $h(x) = 2$, $x < 0$이면 $h(x) = -1$로 정합니다([[real-valued-function]]의 (1), 각 실수는 [[order-properties-of-reals]]의 (1)의 (iii)에 의해 정확히 한 경우에 듭니다). $[1, 4]$의 모든 $x$에서 $0 < 1 \le x$이므로 $h(x) = 2$이고, 이것은 $[1, 4]$ 위의 값이 $2$인 상수함수 $c$와 같은 값입니다. (4)의 둘째 문장을 $h_1 = h$, $h_2 = c$에 쓰면 $h$는 $[1, 4]$에서 적분가능하고, (5)에 의해 $\int_1^4 h = \int_1^4 2\,dx = 2 \cdot 3 = 6$입니다. $h$ 자체는 $\mathbb{R}$ 전체에서 상수가 아니지만, $[1, 4]$에서의 적분은 $[1, 4]$ 위의 값만으로 정해집니다.
:::

:::counterexample[적분이 음수인 예]
$[0, 2]$ 위의 값이 $-1$인 상수함수의 적분은 (5)에 의해 $\int_0^2 (-1)\,dx = (-1) \cdot 2 = -2$입니다. 그래프와 $x$축 사이의 넓이는 $2$이지만 적분은 $-2$입니다. 이 예처럼 함숫값이 음수이면 적분을 그래프와 $x$축 사이의 넓이로 읽을 수 없습니다.
:::

## 확인 질문

:::check[적분가능한 $f : [0, 4] \to \mathbb{R}$가 모든 $x$에서 $|f(x)| \le 1/2$이면 $\int_0^4 f$는 어느 범위에 있는가?]
(2)의 (iii)에 의해 $\left|\int_0^4 f\right| \le \frac{1}{2} \cdot 4 = 2$이므로, [[absolute-value]]의 (7)에 의해 $-2 \le \int_0^4 f \le 2$입니다.
:::

:::check[적분가능한 $f$와 어떤 분할 $P$에서 $L(P, f) = U(P, f) = 7$이면 $\int_a^b f$는?]
$7$입니다. (1)에 의해 $7 = L(P, f) \le \int_a^b f \le U(P, f) = 7$이므로, [[order-properties-of-reals]]의 (1)의 (ii)에 의해 $\int_a^b f = 7$입니다.
:::
