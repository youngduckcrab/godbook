---
title: 유한 개의 값을 바꾼 함수의 적분
title_en: Changing Finitely Many Values of an Integrable Function
aliases: [유한 개의 점에서 값을 바꾸기, 한 점에서 값을 바꾼 함수의 적분, changing values at finitely many points, integral unchanged by finitely many values]
kind: theorem
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: "적분가능한 함수 f 와 유한집합 밖의 모든 점에서 값이 같은 함수 g 는 적분가능하고 적분도 같다. 한 점에서만 값이 다른 경우를 먼저 보이고 바꾼 점의 개수에 대한 귀납법으로 넓힌다. 거꾸로 적분가능하지 않은 함수는 유한 개의 값을 바꾸어도 적분가능하지 않다."
requires: [set, subset, set-operations, injective-surjective-bijective, finite-set, adding-or-removing-an-element, subset-of-finite-set, mathematical-induction, rational-and-irrational-numbers, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, real-valued-function, bounded-function, interval, dirichlet-function, riemann-integral, riemann-integral-examples, additivity-of-the-integral, integrable-on-inner-intervals]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.2절(5.2.4 소절) Proposition 5.2.10 과 그 증명 개요 (p.197); 5.2절(5.2.5 소절) 연습문제 5.2.3 (p.197); 5.1절(5.1.4 소절) 연습문제 5.1.6, 5.1.9 (p.189); 5.1절(5.1.2 소절) Example 5.1.12 (p.186); 5.1절(5.1.1 소절) Example 5.1.4 (p.183); 5.1절(5.1.3 소절) 첫 문단 (p.188)
    checked: original
    note: "(1)은 출처의 Proposition 5.2.10(5.2.4 소절, p.197)이다. 출처는 S 를 유한집합이라고만 하고 [a, b] 의 부분집합이라고 하지 않는다. 출처의 증명은 'Sketch of proof' 로, 적분의 덧셈으로 [a, b] 를 f(x) = g(x) 가 끝점에서만 깨지는 작은 구간으로 나누고('details are left to the reader'), 일반성을 잃지 않고 (a, b) 에서 f = g 라고 두어 Lemma 5.2.8 로 마치며 그 부분을 연습문제 5.2.3(5.2.5 소절, p.197)으로 둔다. Proposition 5.2.10 의 진술과 증명 개요, 연습문제 5.2.3 의 문장에는 g 가 유계라는 말이 없다. 이 항목은 작은 구간으로 나누지 않고 한 점에서만 값이 다른 경우(2)를 먼저 보인 뒤, 바꾼 점 가운데 [a, b] 에 있는 것의 개수에 대한 귀납법으로 (1)을 얻는다. g 의 유계는 한 점의 경우에 두 수의 최대로 보이고, 양 끝에서만 다른 경우는 integrable-on-inner-intervals 의 (1), (2)로 한다(출처 연습문제 5.2.3 의 내용이 증명의 (가)이다). 출처 연습문제 5.1.6(5.1.4 소절, p.189)은 a < c < b 인 한 점에서만 값이 d 이고 나머지는 0 인 함수의 적분을 정의로 구하라는 것으로, (2)를 f = 0 에 쓴 경우이고 riemann-integral-examples 의 (4)와 같은 내용이다. 출처 연습문제 5.1.9(p.189)는 [0, 1] 의 두 함수가 (0, 1] 에서 같을 때로, (1)에서 S = {0} 인 경우이다. (3)은 (1)의 대우를 진술로 둔 것이고, (4)는 출처 5.1.3 소절(p.188)의 약속(정의역이 [a, b] 보다 큰 함수는 제한이 적분가능할 때 [a, b] 에서 적분가능하다고 한다)을 (1)에 쓴 꼴이다. 예시 '톱니 함수의 적분'은 출처 Example 5.1.12(5.1.2 소절, p.186; [0, 2] 위에서 1 을 지나며 값이 바뀌는 함수의 적분을 구한다)와 같은 발상이고, 출처는 분할을 직접 잡아 계산한다. 둘째 확인 질문(항등함수의 세 점에서 값을 바꾼 함수)은 출처 연습문제 5.1.6 과 같은 발상(값을 바꾼 점에서도 적분이 그대로)이다. 반례 '유리수에서 모두 값을 바꾼 예'의 디리클레 함수는 출처 Example 5.1.4(5.1.1 소절, p.183)의 함수이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 경계에서 거짓이거나 부정확한 설명 문장 9건과 범위가 넓었던 출처 메모 3건을 고쳤다."
added: 2026-11-20
---

:::statement
리만 적분가능, 적분 $\int_a^b f$, 정의역이 $[a, b]$보다 큰 함수가 "$[a, b]$에서 적분가능하다"는 것과 그 적분은 [[riemann-integral]]의 것이고(그 항목의 (4)), 유한집합은 [[finite-set]]의 것이며, 제한은 [[real-valued-function]]의 것이다. 아래에서 $a$, $b$는 $a < b$인 실수이다.

1. (유한 개의 값 바꾸기) $f : [a, b] \to \mathbb{R}$가 적분가능하고 $S$가 유한집합이라 하자. $g : [a, b] \to \mathbb{R}$가 $[a, b] - S$의 모든 $x$에서 $g(x) = f(x)$를 만족하면, $g$는 적분가능하고
   $$
   \int_a^b g = \int_a^b f
   $$
   이다. $S$는 공집합이어도 되고, $[a, b]$의 부분집합이 아니어도 된다.
2. (한 점) $f : [a, b] \to \mathbb{R}$가 적분가능하고 $p$가 실수라 하자. $g : [a, b] \to \mathbb{R}$가 $x \ne p$인 $[a, b]$의 모든 $x$에서 $g(x) = f(x)$를 만족하면, $g$는 적분가능하고 $\int_a^b g = \int_a^b f$이다. $p$는 $a$나 $b$여도 되고 $[a, b]$ 밖의 수여도 된다.
3. (적분가능하지 않은 함수) $f : [a, b] \to \mathbb{R}$가 적분가능하지 않고 $S$가 유한집합이라 하자. $g : [a, b] \to \mathbb{R}$가 $[a, b] - S$의 모든 $x$에서 $g(x) = f(x)$를 만족하면, $g$도 적분가능하지 않다.
4. (더 큰 정의역) $[a, b] \subseteq D_1 \subseteq \mathbb{R}$, $[a, b] \subseteq D_2 \subseteq \mathbb{R}$이고 $h_1 : D_1 \to \mathbb{R}$가 $[a, b]$에서 적분가능하며 $S$가 유한집합이라 하자. $h_2 : D_2 \to \mathbb{R}$가 $[a, b] - S$의 모든 $x$에서 $h_2(x) = h_1(x)$를 만족하면, $h_2$는 $[a, b]$에서 적분가능하고 $\int_a^b h_2 = \int_a^b h_1$이다.
:::

:::english
Riemann integrability, the integral $\int_a^b f$, what it means for a function with a domain larger than $[a, b]$ to be "integrable on $[a, b]$", and its integral are those of the entry on the Riemann integral (its item (4)); finite sets are those of the entry on finite sets, and restrictions are those of the entry on real-valued functions. Below, $a$ and $b$ are real numbers with $a < b$.

1. (Changing finitely many values) Let $f : [a, b] \to \mathbb{R}$ be integrable and let $S$ be a finite set. If $g : [a, b] \to \mathbb{R}$ satisfies $g(x) = f(x)$ for all $x$ in $[a, b] - S$, then $g$ is integrable and
   $$
   \int_a^b g = \int_a^b f .
   $$
   The set $S$ may be empty and need not be a subset of $[a, b]$.
2. (One point) Let $f : [a, b] \to \mathbb{R}$ be integrable and let $p$ be a real number. If $g : [a, b] \to \mathbb{R}$ satisfies $g(x) = f(x)$ for all $x$ in $[a, b]$ with $x \ne p$, then $g$ is integrable and $\int_a^b g = \int_a^b f$. The number $p$ may be $a$ or $b$, and may lie outside $[a, b]$.
3. (Non-integrable functions) Let $f : [a, b] \to \mathbb{R}$ be not integrable and let $S$ be a finite set. If $g : [a, b] \to \mathbb{R}$ satisfies $g(x) = f(x)$ for all $x$ in $[a, b] - S$, then $g$ is not integrable either.
4. (Larger domain) Let $[a, b] \subseteq D_1 \subseteq \mathbb{R}$ and $[a, b] \subseteq D_2 \subseteq \mathbb{R}$, let $h_1 : D_1 \to \mathbb{R}$ be integrable on $[a, b]$, and let $S$ be a finite set. If $h_2 : D_2 \to \mathbb{R}$ satisfies $h_2(x) = h_1(x)$ for all $x$ in $[a, b] - S$, then $h_2$ is integrable on $[a, b]$ and $\int_a^b h_2 = \int_a^b h_1$.
:::

## 직관

적분은 넓이이고, 점 하나는 폭이 없으므로 그 위의 값을 바꾸어도 넓이는 달라지지 않을 것입니다. 비유로, 모래를 고르게 깐 마당에 막대 몇 개를 꽂아도 모래의 양은 그대로입니다. 비유에서 막대가 값을 바꾼 점이고, 막대의 개수가 유한하다는 것이 $S$가 유한집합이라는 가정입니다.

증명은 한 점에서 시작합니다. 값을 바꾼 점 $p$를 끝점으로 하여 $[a, b]$를 나누면, 각 조각에서 두 함수는 끝점에서만 다를 수 있습니다. 끝점에서만 다른 두 함수는 [[integrable-on-inner-intervals|안쪽 구간에서 적분가능한 유계함수]]로 다룹니다. 안쪽 닫힌구간 위에서는 두 함수가 같으므로 적분도 같고, 그 정리의 어림 (2)에 의해 양 끝의 짧은 토막이 만드는 차이는 얼마든지 작습니다. 이 단계에서 바꾼 함수 $g$가 유계라는 것이 필요한데, 점 하나의 값만 바뀌었으므로 $f$의 유계의 수와 $|g(p)|$ 가운데 큰 것이 $g$를 누릅니다.

점이 여럿이면 하나씩 되돌립니다. [[riemann-integral-examples|리만 적분의 예]]의 (4)는 값이 모두 $0$인 함수를 안쪽의 한 점에서 바꾼 경우이고, (2)는 그것을 적분가능한 아무 함수와 끝점을 포함한 아무 점으로 넓힌 것입니다. 바꾼 점이 무한히 많으면 적분가능하지 않게 될 수 있습니다(아래 반례).

## 증명

:::idea
한 점에서만 다른 경우는, 그 점을 끝점으로 하는 구간들에서 두 함수가 안쪽에서 같다는 것과 안쪽 구간의 정리의 어림으로 한다. 여러 점은 $[a, b]$ 안의 바꾼 점의 개수에 대한 귀납법으로, 점을 하나씩 원래 값으로 되돌려 한 점의 경우로 줄인다.
:::

:::hint
$g$와 $f$가 $a < x < b$에서 같으면, $a < c < d < b$인 $[c, d]$에서 두 적분은 같습니다. 안쪽 구간의 정리의 (2)를 두 함수에 쓰고 삼각부등식으로 합치면 $\left|\int_a^b g - \int_a^b f\right|$를 누를 수 있습니다.
:::

:::hint
귀납 단계에서 원소를 $n + 1$개 갖는 $T$의 원소 $p$를 하나 잡고, $p$에서만 값을 $f(p)$로 되돌린 함수를 생각하십시오.
:::

:::proof
실수의 계산은 [[real-number-arithmetic]]의 계산 법칙으로 하고, 번호만 쓴 "(1)의 (v)" 같은 것은 [[order-properties-of-reals]]의 번호이다. "이 항목의 ($n$)"은 위 진술의 번호이고, "안쪽 구간 ($n$)"은 [[integrable-on-inner-intervals]]의 번호, "구간 덧셈 ($n$)"은 [[additivity-of-the-integral]]의 번호이다.

**(가) 양 끝에서만 다른 경우.** $\alpha < \beta$이고 $u, v : [\alpha, \beta] \to \mathbb{R}$이며, $u$는 적분가능하고, 양수 $K$가 $[\alpha, \beta]$의 모든 $x$에서 $|u(x)| \le K$와 $|v(x)| \le K$를 만족하며, $\alpha < x < \beta$인 모든 $x$에서 $v(x) = u(x)$라 하자. 그러면 $v$는 적분가능하고 $\int_\alpha^\beta v = \int_\alpha^\beta u$임을 보인다.

$\alpha < c < d < \beta$이면 안쪽 구간 (2)에 의해 $u$는 $[c, d]$에서 적분가능하다. $[c, d]$의 모든 $x$는 (1)의 (v)에 의해 $\alpha < x < \beta$이므로 $v(x) = u(x)$이고, [[riemann-integral]]의 (4)의 마지막 문장에 의해 $v$는 $[c, d]$에서 적분가능하고 $\int_c^d v = \int_c^d u$이다. $v$는 유계이므로 안쪽 구간 (1)에 의해 $v$는 적분가능하다. 안쪽 구간 (2)를 $u$와 $v$에 쓰고 $\int_c^d v = \int_c^d u$와 [[triangle-inequality]]의 (4)를 쓰면
$$
\begin{aligned}
&\left|\int_\alpha^\beta v - \int_\alpha^\beta u\right| \\
&\quad \le \left|\int_\alpha^\beta v - \int_c^d v\right| \\
&\qquad + \left|\int_c^d u - \int_\alpha^\beta u\right| \\
&\quad \le 2K\bigl((c - \alpha) + (\beta - d)\bigr)
\end{aligned}
$$
이다(둘째 항은 [[absolute-value]]의 (3)으로 차의 순서를 바꾼 것이다). 이것은 $\alpha < c < d < \beta$인 모든 $c$, $d$에서 성립한다.

$\varepsilon$을 양수라 하고 $t = \min\{(\beta - \alpha)/3,\ \varepsilon/(4K)\}$로 두자. 두 수는 양수이므로([[real-order-axioms]]의 (W4)와 (6)의 (i)) [[absolute-value]]의 (10)에 의해 $0 < t$이고 $t \le (\beta - \alpha)/3$, $t \le \varepsilon/(4K)$이다. $c = \alpha + t$, $d = \beta - t$로 두면 $\alpha < c$, $d < \beta$이고, $2t \le 2(\beta - \alpha)/3 < \beta - \alpha$이므로 $c < d$이다. 위의 부등식에 의해 $\left|\int_\alpha^\beta v - \int_\alpha^\beta u\right| \le 2K \cdot 2t = 4Kt \le \varepsilon$이다(마지막은 $0 < 4K$와 (4)의 (iii)). 이것이 모든 양수 $\varepsilon$에서 성립하고 [[absolute-value]]의 (2)에 의해 이 절댓값은 $0$ 이상이므로, (9)에 의해 절댓값은 $0$이다. 다시 [[absolute-value]]의 (2)에 의해 $\int_\alpha^\beta v - \int_\alpha^\beta u = 0$이고, [[real-number-arithmetic]]의 (K12)의 (v)에 의해 $\int_\alpha^\beta v = \int_\alpha^\beta u$이다.

**이 항목의 (2).** $p \notin [a, b]$이면 $[a, b]$의 모든 $x$가 $x \ne p$이므로 모든 $x$에서 $g(x) = f(x)$이고, [[real-valued-function]]의 (2)에 의해 $g = f$이다. 이제 $p \in [a, b]$라 하자.

$f$는 적분가능하므로 [[riemann-integral]]의 (6)에 의해 유계이고, [[bounded-function]]의 (2)에 의해 $[a, b]$의 모든 $x$에서 $|f(x)| \le B$인 양수 $B$가 있다. $K = \max\{B, |g(p)|\}$로 두면 [[absolute-value]]의 (10)에 의해 $B \le K$이고 $|g(p)| \le K$이므로 $K$는 양수이다. $[a, b]$의 모든 $x$에서 $|f(x)| \le B \le K$이다. 또 $x \ne p$이면 $|g(x)| = |f(x)| \le K$이고 $x = p$이면 $|g(x)| = |g(p)| \le K$이므로, 모든 $x$에서 $|g(x)| \le K$이다.

$p$는 $[a, b]$의 원소이므로 $p = a$, $p = b$, $a < p < b$ 가운데 하나이다((1)의 (iii)).

- $p = a$이거나 $p = b$인 경우: $a < x < b$이면 $x \ne p$이므로 $g(x) = f(x)$이다. (가)를 $\alpha = a$, $\beta = b$, $u = f$, $v = g$에 쓰면 $g$는 적분가능하고 $\int_a^b g = \int_a^b f$이다.
- $a < p < b$인 경우: 구간 덧셈 (1)에 의해 $f$는 $[a, p]$와 $[p, b]$에서 적분가능하고 $\int_a^b f = \int_a^p f + \int_p^b f$이다. $u = f|_{[a, p]}$, $v = g|_{[a, p]}$로 두면 $u$는 적분가능하고([[riemann-integral]]의 (4)), $[a, p]$의 모든 $x$에서 $|u(x)| \le K$, $|v(x)| \le K$이며, $a < x < p$이면 $x \ne p$이므로 $v(x) = g(x) = f(x) = u(x)$이다. (가)에 의해 $v$는 적분가능하고 $\int_a^p v = \int_a^p u$, 곧 $g$는 $[a, p]$에서 적분가능하고 $\int_a^p g = \int_a^p f$이다. 같은 방법으로 $[p, b]$에서 $g$는 적분가능하고 $\int_p^b g = \int_p^b f$이다($p < x < b$이면 $x \ne p$이다). 구간 덧셈 (1)에 의해 $g$는 적분가능하고 $\int_a^b g = \int_a^p g + \int_p^b g = \int_a^p f + \int_p^b f = \int_a^b f$이다.

**이 항목의 (1).** $f$를 고정한다. 정수 $n \ge 0$에 대한 명제 $Q_n$을 "원소를 $n$개 갖는 $[a, b]$의 모든 부분집합 $T$와, $[a, b] - T$의 모든 $x$에서 $g'(x) = f(x)$인 모든 함수 $g' : [a, b] \to \mathbb{R}$에 대하여, $g'$은 적분가능하고 $\int_a^b g' = \int_a^b f$이다"로 두고, 시작점이 $0$인 [[mathematical-induction]]을 쓴다.

기초 단계 $Q_0$: 원소를 $0$개 갖는 집합은 [[finite-set]]의 (F2)에 의해 $\emptyset$이므로 $[a, b] - T = [a, b]$이고, $[a, b]$의 모든 $x$에서 $g'(x) = f(x)$이다. [[real-valued-function]]의 (2)에 의해 $g' = f$이므로 $Q_0$이 참이다.

귀납 단계: $n \ge 0$이고 $Q_n$이 참이라 하자. $T$가 원소를 $n + 1$개 갖는 $[a, b]$의 부분집합이고 $g' : [a, b] \to \mathbb{R}$가 $[a, b] - T$에서 $f$와 같다고 하자. [[finite-set]]의 정의에 의해 [[injective-surjective-bijective|전단사]] $\{1, \dots, n + 1\} \to T$가 있고 $n + 1 \ge 1$이므로 그 함수의 $n + 1$에서의 값은 $T$의 원소이다. 곧 $T$의 원소 $p$가 있다. [[adding-or-removing-an-element]]의 (b)에 의해 $T - \{p\}$는 원소를 $n$개 갖고, $[a, b]$의 부분집합이다. $p \in T \subseteq [a, b]$이므로 $g_1 : [a, b] \to \mathbb{R}$를 $g_1(p) = f(p)$, $x \ne p$이면 $g_1(x) = g'(x)$로 정할 수 있다([[real-valued-function]]의 (1)). $x \in [a, b] - (T - \{p\})$라 하자. $x = p$이면 $g_1(x) = f(p) = f(x)$이다. $x \ne p$이면 $x \notin T - \{p\}$에서 $x \notin T$이므로 $g_1(x) = g'(x) = f(x)$이다. 따라서 $Q_n$을 $T - \{p\}$와 $g_1$에 쓰면 $g_1$은 적분가능하고 $\int_a^b g_1 = \int_a^b f$이다. 또 $x \ne p$인 $[a, b]$의 모든 $x$에서 $g'(x) = g_1(x)$이므로, (2)를 적분가능한 $g_1$과 $g'$에 쓰면 $g'$은 적분가능하고 $\int_a^b g' = \int_a^b g_1 = \int_a^b f$이다. 곧 $Q_{n+1}$이 참이다. 귀납법에 의해 모든 정수 $n \ge 0$에서 $Q_n$이 참이다.

이제 (1)의 $S$와 $g$를 생각한다. $T = S \cap [a, b]$로 두면 $T \subseteq S$이고 $S$는 어떤 정수 $n' \ge 0$에 대해 원소를 $n'$개 가지므로, [[subset-of-finite-set]]의 (1)에 의해 $T$는 유한집합이다. 곧 $T$는 어떤 정수 $n \ge 0$에 대해 원소를 $n$개 갖는 $[a, b]$의 부분집합이다. $x \in [a, b] - T$이면 $x \in [a, b]$이고 $x \notin S \cap [a, b]$이므로 $x \notin S$이고, 따라서 $g(x) = f(x)$이다. $Q_n$에 의해 $g$는 적분가능하고 $\int_a^b g = \int_a^b f$이다.

**이 항목의 (3).** $g$가 적분가능하다고 가정하자. $[a, b] - S$의 모든 $x$에서 $f(x) = g(x)$이므로, (1)을 적분가능한 $g$와 $f$에 (두 함수의 자리를 바꾸어) 쓰면 $f$가 적분가능하다. 이것은 가정에 어긋나므로 $g$는 적분가능하지 않다.

**이 항목의 (4).** $\psi_1 = h_1|_{[a, b]}$, $\psi_2 = h_2|_{[a, b]}$로 두자. [[riemann-integral]]의 (4)에 의해 $\psi_1$은 적분가능하고 $\int_a^b \psi_1 = \int_a^b h_1$이다. $[a, b] - S$의 모든 $x$에서 [[real-valued-function]]의 (6)에 의해 $\psi_2(x) = h_2(x) = h_1(x) = \psi_1(x)$이므로, (1)에 의해 $\psi_2$는 적분가능하고 $\int_a^b \psi_2 = \int_a^b \psi_1$이다. [[riemann-integral]]의 (4)에 의해 이것은 $h_2$가 $[a, b]$에서 적분가능하고 $\int_a^b h_2 = \int_a^b h_1$이라는 뜻이다. $\blacksquare$
:::

## 예시와 반례

:::example[톱니 함수의 적분]
$f : [0, 2] \to \mathbb{R}$를 $0 \le x < 1$이면 $f(x) = x$, $1 \le x \le 2$이면 $f(x) = x - 1$로 정합니다([[real-valued-function]]의 (1)). $[0, 1]$에서 $f$는 $x \ne 1$인 모든 점에서 항등함수와 값이 같고 $f(1) = 0$입니다. [[riemann-integral-examples|리만 적분의 예]]의 (1)($p = 1$, $q = 0$)에 의해 $[0, 1]$ 위의 항등함수는 적분가능하고 적분이 $\frac{1^2 - 0^2}{2} = \frac12$이므로, (2)를 $p = 1$에 쓰면 $f|_{[0, 1]}$은 적분가능하고 $\int_0^1 f = \frac12$입니다. $[1, 2]$에서는 모든 점에서 $f(x) = x - 1$이므로 같은 (1)($p = 1$, $q = -1$)과 [[riemann-integral]]의 (4)의 마지막 문장에 의해
$$
\begin{aligned}
\int_1^2 f &= \frac{2^2 - 1^2}{2} + (-1)(2 - 1) \\
&= \frac32 - 1 = \frac12
\end{aligned}
$$
입니다. [[additivity-of-the-integral|적분의 구간 덧셈]]의 (1)에 의해 $f$는 $[0, 2]$에서 적분가능하고 $\int_0^2 f = \frac12 + \frac12 = 1$입니다.
:::

:::counterexample[유리수에서 모두 값을 바꾼 예]
$[0, 1]$ 위의 값이 $0$인 상수함수 $z$와 디리클레 함수 $D$([[dirichlet-function]])를 비교합니다. [[rational-and-irrational-numbers|무리수]] $x$에서는 $D(x) = 0 = z(x)$이므로, 두 함수는 $[0, 1] - A$의 모든 점에서 값이 같습니다. 여기서 $A$는 $[0, 1]$의 유리수 전체의 집합입니다. $z$는 적분가능하지만 $D$는 적분가능하지 않습니다([[riemann-integral]]의 (5)).

$A$가 유한집합이라면 (1)에 의해 $D$가 적분가능해야 하므로, $A$는 유한집합이 아닙니다. 값을 바꾼 점의 집합이 유한집합이 아니면 이 정리의 결론이 성립하지 않을 수 있습니다.
:::

## 확인 질문

:::check[$f$가 $[0, 1]$에서 적분가능하고, $g : [0, 1] \to \mathbb{R}$가 $0$과 $-1$과 $5$를 빼면 모든 $x$에서 $g(x) = f(x)$이다. (1)을 쓸 때 증명의 귀납법은 몇 개의 점에 대한 것인가?]
$S = \{-1, 0, 5\}$이고 $T = S \cap [0, 1] = \{0\}$이므로 한 점에 대한 것입니다. $[0, 1]$ 밖의 점 $-1$과 $5$는 $g$의 정의역에 없어서 아무 역할도 하지 않습니다. 결론은 $g$가 적분가능하고 $\int_0^1 g = \int_0^1 f$라는 것입니다.
:::

:::check[$g : [0, 2] \to \mathbb{R}$를 $x$가 $0$, $1$, $2$ 가운데 하나이면 $g(x) = 3$, 아니면 $g(x) = x$로 정하면 $\int_0^2 g$는?]
$g$는 $[0, 2] - \{0, 1, 2\}$에서 항등함수와 같습니다. [[riemann-integral-examples|리만 적분의 예]]의 (1)에 의해 $[0, 2]$ 위의 항등함수의 적분은 $\frac{2^2 - 0^2}{2} = 2$이므로, (1)에 의해 $g$는 적분가능하고 $\int_0^2 g = 2$입니다. 양 끝점 $0$, $2$에서 바꾼 값도 적분에 영향을 주지 않습니다.
:::
