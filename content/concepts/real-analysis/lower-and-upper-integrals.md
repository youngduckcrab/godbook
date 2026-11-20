---
title: 하적분과 상적분
title_en: Lower and Upper Integrals
aliases: [다르부 하적분, 다르부 상적분, 하적분, 상적분, lower Darboux integral, upper Darboux integral, lower integral, upper integral]
kind: definition
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: "[a, b] 위의 유계함수 f 의 하적분은 모든 분할에 대한 다르부 하합의 상한이고, 상적분은 다르부 상합의 하한이다. 둘이 있다는 것, 모든 분할의 하합 ≤ 하적분 ≤ 상적분 ≤ 상합, 함숫값의 범위로 누르기, 하적분과 상적분에 ε 만큼 가까운 분할, 상적분과 하적분의 차를 상합과 하합의 차로 누르기, 상수함수, 함수의 크기 비교를 함께 진술한다."
requires: [set, subset, power-set, real-number-arithmetic, real-order-axioms, order-properties-of-reals, upper-bound-and-supremum, least-upper-bound-property, infimum-exists, supremum-and-arithmetic, real-valued-function, bounded-function, interval, finite-sum-of-reals, linearity-and-order-of-finite-sums, partition-of-an-interval, refinement-of-a-partition, darboux-sums, refinement-and-darboux-sums]
sources:
  - ref: lebl-basic-analysis
    loc: 5.1절(5.1.1 소절) Definition 5.1.3 (p.182), Remark 5.1.5 (p.183), Proposition 5.1.8 과 그 증명 (p.184–185); 5.2절(5.2.2 소절) Proposition 5.2.6 (p.194)
    checked: original
    note: "출처의 Definition 5.1.3(p.182)은 '다르부 하합과 상합의 집합이 유계이므로' 하적분을 sup{L(P, f) : P a partition of [a, b]}, 상적분을 inf{U(P, f) : P a partition of [a, b]} 로 정의하고, 밑줄과 윗줄을 그은 적분 기호로 쓴다. 이 항목은 두 집합이 공집합이 아니라는 것({a, b} 가 분할이다)도 함께 보여 상한과 하한이 있음을 증명한다. 출처는 적분 변수를 붙인 꼴과 붙이지 않은 꼴을 함께 쓰는데, 이 항목은 붙이지 않은 꼴만 쓴다. (3)과 (2)의 가운데 부등식은 출처의 Proposition 5.1.8(p.184–185)이고, 출처는 공통 세분으로 L(P_1, f) ≤ U(P_2, f) 를 보인 뒤 Proposition 1.2.7(sup A ≤ inf B)을 쓴다. 이 사이트에서 그 명제는 supremum-and-arithmetic 의 (5)이다. (7)은 출처의 Proposition 5.2.6(p.194)의 앞부분(f ≤ g 이면 하적분과 상적분이 각각 크기를 지킨다)이고, 출처의 증명(p.194)도 작은 구간마다 하한을 비교해 L(P, f) ≤ L(P, g) 를 얻은 뒤 분할에 걸친 상한을 Proposition 1.3.7 로 비교한다. 이 항목은 마지막 단계를 상한과 하한의 정의로 직접 쓴다. (8)은 출처의 Remark 5.1.5(p.183)의 약속이다. (4)와 (5)는 이 사이트가 진술했다. (5)의 부등식 0 ≤ 상적분 − 하적분 ≤ U(P, f) − L(P, f) 는 출처가 Example 5.1.12(p.186), Proposition 5.1.13 의 증명(p.187), Lemma 5.2.7 의 증명(p.195)에서 근거 없이 쓰는 것이고, (4)의 '한 분할 R 에서 두 부등식이 함께 성립한다'는 출처 연습문제 5.2.2 의 힌트(p.197)가 쓰는 '한 분할'과 같은 발상이다. 확인 질문 2 는 출처 Proposition 5.1.13 의 증명(p.187)과 같은 발상이다. (6)의 상수함수는 출처의 Example 5.1.11(5.1.2 소절, p.186)이 Proposition 5.1.8 을 m = M = c 로 써서 적분가능성과 ∫_a^b c = c(b − a) 를 얻는 것과 같은 대상이다(이 항목의 (3)에 m = M = k 를 넣어도 (6)이 나온다). 예시 '꺾인 함수의 하적분과 상적분'의 |x| 는 refinement-and-darboux-sums 의 예시와 같은 함수이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 틀린 예시 논증 1건과 출처 메모 4곳, 등호를 가리는 말을 고쳤다."
added: 2026-11-20
---

:::statement
$[a, b]$의 분할은 [[partition-of-an-interval]]의 것이고, 세분은 [[refinement-of-a-partition]]의 것이며, 다르부 합 $L(P, f)$, $U(P, f)$는 [[darboux-sums]]의 것이다. 상한 $\sup$, 하한 $\inf$는 [[upper-bound-and-supremum]]의 것이다. 아래에서 $a$, $b$는 $a < b$인 실수이다.

**하합의 집합과 상합의 집합.** $f : [a, b] \to \mathbb{R}$가 유계일 때, 실수 $t$ 가운데 "$t = L(P, f)$인 $[a, b]$의 분할 $P$가 있다"를 만족하는 것 전체의 집합을 $\{L(P, f) : P\text{는 } [a, b]\text{의 분할}\}$로 쓴다. 이것은 $\mathbb{R}$의 부분집합이다. $\{U(P, f) : P\text{는 } [a, b]\text{의 분할}\}$도 같은 뜻이다.

**하적분과 상적분.** $f : [a, b] \to \mathbb{R}$가 유계일 때
$$
\begin{gathered}
\underline{\int_a^b} f = \sup\{L(P, f) : P\text{는 } [a, b]\text{의 분할}\}, \\
\overline{\int_a^b} f = \inf\{U(P, f) : P\text{는 } [a, b]\text{의 분할}\}
\end{gathered}
$$
을 각각 $f$의 $[a, b]$ 위의 **하적분**(lower Darboux integral)과 **상적분**(upper Darboux integral)이라 한다(아래 (1)에 의해 둘 다 있다). $f$가 유계가 아니면 정의하지 않는다.

다음이 성립한다. (1)–(6)에서 $f : [a, b] \to \mathbb{R}$는 유계이다.

1. (존재) 두 집합 $\{L(P, f) : P\text{는 } [a, b]\text{의 분할}\}$과 $\{U(P, f) : P\text{는 } [a, b]\text{의 분할}\}$은 공집합이 아니고 유계이다. 따라서 하적분과 상적분이 있다.
2. (다르부 합 사이) $[a, b]$의 모든 분할 $P$에서
   $$
   L(P, f) \le \underline{\int_a^b} f \le \overline{\int_a^b} f \le U(P, f)
   $$
   이다.
3. (값의 범위로 누르기) 실수 $m$, $M$이 $[a, b]$의 모든 $x$에서 $m \le f(x) \le M$을 만족하면
   $$
   m(b - a) \le \underline{\int_a^b} f \le \overline{\int_a^b} f \le M(b - a)
   $$
   이다.
4. (가까운 분할) 모든 양수 $\varepsilon$에 대하여 $\underline{\int_a^b} f - \varepsilon < L(P_1, f)$인 $[a, b]$의 분할 $P_1$과 $U(P_2, f) < \overline{\int_a^b} f + \varepsilon$인 $[a, b]$의 분할 $P_2$가 있다. 또 $R$이 $P_1 \cup P_2$의 세분이면 $R$ 하나에서 두 부등식 $\underline{\int_a^b} f - \varepsilon < L(R, f)$와 $U(R, f) < \overline{\int_a^b} f + \varepsilon$이 함께 성립한다. 특히 $R = P_1 \cup P_2$로 둘 수 있다.
5. (차를 누르기) $[a, b]$의 모든 분할 $P$에서 $0 \le \overline{\int_a^b} f - \underline{\int_a^b} f \le U(P, f) - L(P, f)$이다.
6. (상수함수) $f$가 값이 $k$인 상수함수이면 $\underline{\int_a^b} f = \overline{\int_a^b} f = k(b - a)$이다.
7. (함수의 크기 비교) $f, g : [a, b] \to \mathbb{R}$가 유계이고 $[a, b]$의 모든 $x$에서 $f(x) \le g(x)$이면, 모든 분할 $P$에서 $L(P, f) \le L(P, g)$, $U(P, f) \le U(P, g)$이고
   $$
   \begin{gathered}
   \underline{\int_a^b} f \le \underline{\int_a^b} g, \\
   \overline{\int_a^b} f \le \overline{\int_a^b} g
   \end{gathered}
   $$
   이다.
8. (더 큰 정의역) $[a, b] \subseteq S \subseteq \mathbb{R}$이고 $h : S \to \mathbb{R}$가 $[a, b]$ 위에서 유계이면(곧 제한 $h|_{[a, b]}$가 유계이면), [[darboux-sums]]의 (8)의 약속에 더해 $\underline{\int_a^b} h$, $\overline{\int_a^b} h$는 $h|_{[a, b]}$의 하적분과 상적분을 뜻한다고 약속한다. 그 (8)에 의해 이 값들은 $h([x_{i-1}, x_i])$의 하한·상한으로 계산한 다르부 합에서 정해진다.
:::

:::english
Partitions of $[a, b]$ are those of the entry on partitions of an interval, refinements are those of the entry on refinements of a partition, and the Darboux sums $L(P, f)$, $U(P, f)$ are those of the entry on Darboux sums. The supremum $\sup$ and infimum $\inf$ are those of the entry on upper bounds and suprema. Below, $a$ and $b$ are real numbers with $a < b$.

**The set of lower sums and the set of upper sums.** When $f : [a, b] \to \mathbb{R}$ is bounded, the set of all real numbers $t$ satisfying "there is a partition $P$ of $[a, b]$ with $t = L(P, f)$" is written $\{L(P, f) : P \text{ is a partition of } [a, b]\}$. It is a subset of $\mathbb{R}$. The set $\{U(P, f) : P \text{ is a partition of } [a, b]\}$ is understood in the same way.

**Lower and upper integrals.** When $f : [a, b] \to \mathbb{R}$ is bounded,
$$
\begin{gathered}
\underline{\int_a^b} f = \sup\{L(P, f) : P \text{ is a partition of } [a, b]\}, \\
\overline{\int_a^b} f = \inf\{U(P, f) : P \text{ is a partition of } [a, b]\}
\end{gathered}
$$
are called the **lower Darboux integral** and the **upper Darboux integral** of $f$ over $[a, b]$, respectively (both exist by (1) below). If $f$ is not bounded, they are not defined.

The following hold. In (1)–(6), $f : [a, b] \to \mathbb{R}$ is bounded.

1. (Existence) The two sets $\{L(P, f) : P \text{ is a partition of } [a, b]\}$ and $\{U(P, f) : P \text{ is a partition of } [a, b]\}$ are nonempty and bounded. Hence the lower and upper integrals exist.
2. (Between Darboux sums) For every partition $P$ of $[a, b]$,
   $$
   L(P, f) \le \underline{\int_a^b} f \le \overline{\int_a^b} f \le U(P, f) .
   $$
3. (Bounding by the range of values) If real numbers $m$, $M$ satisfy $m \le f(x) \le M$ for all $x$ in $[a, b]$, then
   $$
   m(b - a) \le \underline{\int_a^b} f \le \overline{\int_a^b} f \le M(b - a) .
   $$
4. (Nearby partitions) For every positive number $\varepsilon$ there are a partition $P_1$ of $[a, b]$ with $\underline{\int_a^b} f - \varepsilon < L(P_1, f)$ and a partition $P_2$ of $[a, b]$ with $U(P_2, f) < \overline{\int_a^b} f + \varepsilon$. Moreover, if $R$ is a refinement of $P_1 \cup P_2$, then both inequalities $\underline{\int_a^b} f - \varepsilon < L(R, f)$ and $U(R, f) < \overline{\int_a^b} f + \varepsilon$ hold for the single partition $R$. In particular one may take $R = P_1 \cup P_2$.
5. (Bounding the difference) For every partition $P$ of $[a, b]$, $0 \le \overline{\int_a^b} f - \underline{\int_a^b} f \le U(P, f) - L(P, f)$.
6. (Constant functions) If $f$ is the constant function with value $k$, then $\underline{\int_a^b} f = \overline{\int_a^b} f = k(b - a)$.
7. (Comparing functions) If $f, g : [a, b] \to \mathbb{R}$ are bounded and $f(x) \le g(x)$ for all $x$ in $[a, b]$, then $L(P, f) \le L(P, g)$ and $U(P, f) \le U(P, g)$ for every partition $P$, and
   $$
   \begin{gathered}
   \underline{\int_a^b} f \le \underline{\int_a^b} g, \\
   \overline{\int_a^b} f \le \overline{\int_a^b} g .
   \end{gathered}
   $$
8. (A larger domain) If $[a, b] \subseteq S \subseteq \mathbb{R}$ and $h : S \to \mathbb{R}$ is bounded on $[a, b]$ (that is, the restriction $h|_{[a, b]}$ is bounded), then in addition to the convention of item (8) of the entry on Darboux sums we agree that $\underline{\int_a^b} h$ and $\overline{\int_a^b} h$ mean the lower and upper integrals of $h|_{[a, b]}$. By that item (8), these values are determined by the Darboux sums computed from the infima and suprema of $h([x_{i-1}, x_i])$.
:::

## 직관

분할을 바꿀 때마다 하합은 그래프 아래 넓이를 아래에서 어림하고 상합은 위에서 어림합니다. 아래에서의 어림을 가장 좋게 한 값, 곧 모든 하합의 상한이 하적분이고, 위에서의 어림을 가장 좋게 한 값, 곧 모든 상합의 하한이 상적분입니다. 아래에서의 어림은 어떤 분할로 하든 위에서의 어림을 넘지 않으므로([[refinement-and-darboux-sums|세분과 다르부 합]]의 (3)) 하적분은 상적분 이하입니다((2)).

모든 하합의 상한이 꼭 어떤 분할의 하합으로 나오는 것은 아닙니다(아래 예시). 그래서 하적분을 쓸 때는 "하적분보다 $\varepsilon$만큼 작은 수를 넘는 하합을 주는 분할이 있다"는 (4)의 꼴로 쓰는 일이 많습니다. 하합 쪽과 상합 쪽에서 따로 얻은 두 분할도 공통 세분으로 하나로 합칠 수 있습니다. 세분하면 하합은 줄지 않고 상합은 늘지 않아서 두 부등식이 모두 지켜지기 때문입니다.

## 증명

:::idea
$\{a, b\}$가 분할이므로 두 집합은 공집합이 아니고, 다르부 합은 모두 $f$의 값의 범위로 눌리므로 유계이다. 가운데 부등식은 "아무 하합 ≤ 아무 상합"에 두 집합의 상한·하한 비교를 쓴다.
:::

:::hint
(4): 상한의 근사([[supremum-and-arithmetic|상한과 연산]] 항목의 (6))로 $P_1$, $P_2$를 얻고, 세분하면 하합은 줄지 않고 상합은 늘지 않는다는 것을 $R$에 쓴다.
:::

:::hint
(7): 작은 구간 $I$마다 $\inf f(I)$는 $g(I)$의 하계이다.
:::

:::proof
실수의 순서는 [[order-properties-of-reals]]로 다룬다. "다르부 ($n$)", "세분 다르부 ($n$)"은 각각 [[darboux-sums]], [[refinement-and-darboux-sums]]의 번호이다. 두 집합을 $\mathcal{L} = \{L(P, f) : P\text{는 } [a, b]\text{의 분할}\}$, $\mathcal{U} = \{U(P, f) : P\text{는 } [a, b]\text{의 분할}\}$로 줄여 쓴다. [[partition-of-an-interval]]의 (6)에 의해 $[a, b]$의 분할 전체는 $\mathscr{P}([a, b])$의 부분집합을 이루므로, "$t = L(P, f)$인 분할 $P$가 있다"는 실수 $t$에 대한 조건이고 $\mathcal{L}$은 $\mathbb{R}$의 조건으로 정한 부분집합이다.

**1의 증명.** [[partition-of-an-interval]]의 (4)에 의해 $\{a, b\}$는 분할이므로 $L(\{a, b\}, f) \in \mathcal{L}$, $U(\{a, b\}, f) \in \mathcal{U}$이고 두 집합은 공집합이 아니다. $f$가 유계이므로 [[bounded-function]]의 (2)에 의해 $f$는 위로 유계이고 아래로 유계이다. 곧 모든 $x \in [a, b]$에서 $B_2 \le f(x) \le B_1$인 실수 $B_1$, $B_2$가 있다. 다르부 (2)에 의해 모든 분할 $P$에서 $B_2(b - a) \le L(P, f) \le U(P, f) \le B_1(b - a)$이므로 $\mathcal{L}$과 $\mathcal{U}$는 유계이다. [[least-upper-bound-property]]의 (U)에 의해 $\sup \mathcal{L}$이 있고, [[infimum-exists]]의 (4)에 의해 $\inf \mathcal{U}$가 있다.

**2의 증명.** $L(P, f) \in \mathcal{L}$이고 하적분은 $\mathcal{L}$의 상계이므로 $L(P, f) \le \underline{\int_a^b} f$이다. 같은 방식으로 상적분은 $\mathcal{U}$의 하계이므로 $\overline{\int_a^b} f \le U(P, f)$이다. 세분 다르부 (3)에 의해 $\mathcal{L}$의 모든 원소 $L(P_1, f)$와 $\mathcal{U}$의 모든 원소 $U(P_2, f)$에 대하여 $L(P_1, f) \le U(P_2, f)$이므로, [[supremum-and-arithmetic|상한과 연산]] 항목의 (5)에 의해 $\sup \mathcal{L} \le \inf \mathcal{U}$이다.

**3의 증명.** 다르부 (2)를 분할 $\{a, b\}$에 쓰면 $m(b - a) \le L(\{a, b\}, f)$이고 $U(\{a, b\}, f) \le M(b - a)$이다. (2)를 $P = \{a, b\}$에 쓰고 [[order-properties-of-reals]]의 (1)의 (v)로 이으면 된다.

**4의 증명.** [[supremum-and-arithmetic|상한과 연산]] 항목의 (6)에 의해 $\underline{\int_a^b} f - \varepsilon < t$인 $t \in \mathcal{L}$이 있고, $\mathcal{L}$의 정의에 의해 $t = L(P_1, f)$인 분할 $P_1$이 있다. 같은 항목의 (6)의 하한 쪽에 의해 $U(P_2, f) < \overline{\int_a^b} f + \varepsilon$인 분할 $P_2$가 있다. $R$이 $P_1 \cup P_2$의 세분이면 $P_1 \subseteq P_1 \cup P_2 \subseteq R$이므로 $R$은 $P_1$의 세분이고 $P_2$의 세분이다. 세분 다르부 (2)에 의해 $L(P_1, f) \le L(R, f)$이고 $U(R, f) \le U(P_2, f)$이므로 $\underline{\int_a^b} f - \varepsilon < L(R, f)$이고 $U(R, f) < \overline{\int_a^b} f + \varepsilon$이다. [[refinement-of-a-partition]]의 (2)에 의해 $P_1 \cup P_2$는 분할이고, (6)에 의해 자신의 세분이다.

**5의 증명.** (2)에 의해 $\underline{\int_a^b} f \le \overline{\int_a^b} f$이므로 차는 $0$ 이상이다. 또 (2)의 $L(P, f) \le \underline{\int_a^b} f$와 $\overline{\int_a^b} f \le U(P, f)$를 [[order-properties-of-reals]]의 (2)의 (iii)과 (3)의 (iii)으로 합치면 $\overline{\int_a^b} f - \underline{\int_a^b} f \le U(P, f) - L(P, f)$이다.

**6의 증명.** 다르부 (5)에 의해 모든 분할 $P$에서 $L(P, f) = k(b - a)$이므로 $\mathcal{L} = \{k(b - a)\}$이다($\{a, b\}$가 분할이므로 $k(b - a)$는 원소이다). 원소가 하나인 집합에서 그 원소는 최댓값이므로 [[upper-bound-and-supremum]]의 (2)에 의해 $\underline{\int_a^b} f = k(b - a)$이다. 같은 방식으로 $\mathcal{U} = \{k(b - a)\}$이고 상적분도 $k(b - a)$이다.

**7의 증명.** $P$의 점을 $x_0, \dots, x_n$, $I_i = [x_{i-1}, x_i]$라 하자. $x \in I_i$이면 $\inf f(I_i) \le f(x) \le g(x)$이므로 $\inf f(I_i)$는 $g(I_i)$의 하계이고, 하한의 정의에 의해 $\inf f(I_i) \le \inf g(I_i)$이다. 같은 방식으로 $x \in I_i$이면 $f(x) \le g(x) \le \sup g(I_i)$이므로 $\sup f(I_i) \le \sup g(I_i)$이다. $\Delta x_i > 0$이므로 [[order-properties-of-reals]]의 (4)의 (iii)과 [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 (3)에 의해(그 (8)로 범위에서만 정해진 항에 쓴다) $L(P, f) \le L(P, g)$이고 $U(P, f) \le U(P, g)$이다.

모든 분할 $P$에서 $L(P, f) \le L(P, g) \le \underline{\int_a^b} g$이므로 $\underline{\int_a^b} g$는 $\mathcal{L}$의 상계이고, 상한의 정의에 의해 $\underline{\int_a^b} f \le \underline{\int_a^b} g$이다. 또 모든 분할 $P$에서 $\overline{\int_a^b} f \le U(P, f) \le U(P, g)$이므로 $\overline{\int_a^b} f$는 $g$의 상합 전체의 집합의 하계이고, 하한의 정의에 의해 $\overline{\int_a^b} f \le \overline{\int_a^b} g$이다.

**8.** 약속이다. $h|_{[a, b]}$는 $[a, b]$ 위의 실함수이므로([[real-valued-function]]의 (6)) 유계이면 위의 정의와 (1)–(7)이 그대로 적용된다. $\blacksquare$
:::

## 예시와 반례

:::example[꺾인 함수의 하적분과 상적분]
$[-1, 2]$ 위의 $f(x) = |x|$에서 $0 \le f(x) \le 2$이므로 (3)에 의해 하적분과 상적분은 $0$ 이상 $6$ 이하입니다. 분할 $\{-1, 0, 1, 2\}$의 하합은 $0 \cdot 1 + 0 \cdot 1 + 1 \cdot 1 = 1$, 상합은 $1 + 1 + 2 = 4$이므로 (2)에 의해
$$
1 \le \underline{\int_{-1}^{2}} f \le \overline{\int_{-1}^{2}} f \le 4
$$
이고, (5)에 의해 둘의 차는 $3$ 이하입니다. 분할을 더 잘게 하면 이 범위가 좁아질 수 있습니다.

이 예에서 하적분은 어떤 분할의 하합으로도 나오지 않습니다. 분할 $P$의 점이 $x_0, \dots, x_n$이라 하면 $x_{j-1} \le 0 < x_j$인 작은 구간이 있습니다($0$이 든 작은 구간을 잡고, 그 오른쪽 끝이 $0$이면 바로 다음 작은 구간을 잡습니다. $0 < 2 = x_n$이므로 다음 작은 구간이 있습니다). 그 작은 구간에 $0$이 들어 있어 하한은 $f(0) = 0$입니다. $y = x_j/2$를 더하면 $0 < y < x_j$이고, 새 작은 구간 $[y, x_j]$에서 $f(x) = x$의 하한은 $y > 0$이므로 [[refinement-and-darboux-sums|세분과 다르부 합]]의 (1)에 의해 하합이 적어도 $(y - 0)(x_j - y) > 0$만큼 커집니다. 그래서 $L(P, f) < L(P \cup \{y\}, f) \le \underline{\int_{-1}^{2}} f$이고, 하적분은 하합의 집합의 최댓값이 아니라 상한으로만 정해집니다.
:::

:::counterexample[하합 가운데 가장 큰 것이 있을 수도 있다]
값이 $k$인 상수함수에서는 모든 하합이 $k(b - a)$이므로, 하합의 집합 $\{k(b - a)\}$에는 가장 큰 원소가 있고 하적분은 그 하합 자체입니다((6)). 위 예처럼 상한이 하합으로 나오지 않는 경우와 상수함수처럼 나오는 경우가 모두 있으므로, 하적분의 정의는 최댓값이 아니라 상한으로 해야 모든 유계함수에 뜻이 정해집니다.
:::

## 확인 질문

:::check[유계인 $f$가 $[a, b]$에서 $f(x) \le 0$이면 상적분의 부호는?]
$0$ 이하입니다. (7)을 $f$와 값이 $0$인 상수함수 $g$에 쓰면 $\overline{\int_a^b} f \le \overline{\int_a^b} g$이고, (6)에 의해 오른쪽은 $0 \cdot (b - a) = 0$입니다. (3)을 $M = 0$으로 써도 같은 결론이 나옵니다.
:::

:::check[어떤 분할 $P$에서 $U(P, f) - L(P, f) < 1/1000$이면 상적분과 하적분의 차에 대해 무엇을 말할 수 있는가?]
(5)에 의해 $0 \le \overline{\int_a^b} f - \underline{\int_a^b} f < 1/1000$입니다. 이런 분할이 모든 양수 $\varepsilon$에 대해 있으면 차는 모든 양수 이하이므로 [[order-properties-of-reals]]의 (9)에 의해 $0$, 곧 하적분과 상적분이 같습니다.
:::
