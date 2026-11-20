---
title: 불연속점이 유한 개인 함수의 적분가능성
title_en: Integrability of Functions with Finitely Many Discontinuities
aliases: [불연속점이 유한 개인 함수, 유한 개의 점을 빼고 연속인 함수, finitely many discontinuities, piecewise continuous function is integrable]
kind: theorem
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: "닫힌구간 위의 함수가 유한 개의 점을 빼고 연속이라는 것을 정의하고 그것이 불연속점 전체의 집합이 유한집합이라는 것과 같은 말임을 보인 뒤, 그런 함수가 유계이면 리만 적분가능하다는 것을 증명한다. 불연속점과 양 끝점으로 분할을 만들고 각 작은 구간에 안쪽 구간의 정리를 쓴다."
requires: [set, subset, set-operations, injective-surjective-bijective, image-and-preimage, finite-set, subset-of-finite-set, disjoint-union-count, natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, absolute-value, archimedean-property, real-valued-function, bounded-function, interval, sequence, continuous-function, continuity-of-sum-and-product, derivative-and-monotonicity, partition-of-an-interval, riemann-integral, monotone-implies-integrable, continuous-implies-integrable, additivity-of-the-integral, integrable-on-inner-intervals]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.2절(5.2.3 소절) Theorem 5.2.9 앞의 정의 문단과 Theorem 5.2.9 와 그 증명 (p.196); 5.1절(5.1.2 소절) Example 5.1.12 (p.186); 5.1절(5.1.3 소절) 첫 문단 (p.188); 5.1절(5.1.4 소절) 연습문제 5.1.5 (p.189); 3.6절(3.6.1 소절) Example 3.6.5 (p.151)와 3.6.3 소절 연습문제 3.6.4 (p.153); 5.2절(5.2.5 소절) 연습문제 5.2.10 (p.198); 5.3절(5.3.4 소절) 연습문제 5.3.11 (p.206); 5.2절(5.2.4 소절) Proposition 5.2.11 (p.197); 5.2절(5.2.5 소절) 연습문제 5.2.11 (p.198), 5.2.14 (p.199); 3.3절(3.3.1 소절) Example 3.3.6 (p.132)
    checked: original
    note: "정의는 출처 5.2.3 소절의 Theorem 5.2.9 앞 문단(p.196)의 'finitely many discontinuities'(유한집합 S = {x_1, …, x_n} ⊂ [a, b] 가 있어 f 가 [a, b] \\ S 의 모든 점에서 연속)와 같다. 출처의 ⊂ 는 같은 경우를 포함한다. (1)의 세 꼴이 같은 말이라는 것은 이 항목이 덧붙여 진술한 것이다. (3)은 출처의 Theorem 5.2.9(p.196)이다. 출처의 증명은 구간을 f 가 안쪽에서 연속인 유한 개의 구간 [a_i, b_i] 로 나누고, 그 안쪽의 [c_i, d_i] 에서 연속이므로 적분가능하며, Lemma 5.2.8 로 [a_i, b_i] 에서 적분가능하고, 적분의 덧셈(과 귀납법)으로 합친다고 적는다. 이 항목은 나누는 법을 (2)로 진술에 두었다(불연속점과 양 끝점의 집합이 [a, b] 의 분할이라는 것). 합치는 단계는 additivity-of-the-integral 의 (3)(분할판)을 쓰므로 이 항목 안에서 귀납법을 쓰지 않는다. 안쪽 구간에서의 연속은 continuous-implies-integrable 의 (2)로, 작은 구간에서의 적분가능은 integrable-on-inner-intervals 의 (6), (1)로 한다. (4)는 출처 5.1.3 소절(p.188)의 약속(정의역이 [a, b] 보다 큰 함수는 제한이 적분가능할 때 [a, b] 에서 적분가능하다고 한다)을 (3)에 쓴 꼴이다. 출처 연습문제 5.2.10(5.2.5 소절, p.198)은 유계이고 불연속점이 유한 개인 f 에 대해 |f| 도 그렇고 따라서 적분가능하다는 것을 보이라 하고, 연습문제 5.3.11 a)(5.3.4 소절, p.206)는 0 에서만 불연속일 수 있는 유계함수 sin(1/x) 가 모든 구간에서 적분가능함을 보이라 한다. 둘 다 (3)을 쓰는 물음이다. 예시 '1 에서 값이 뛰는 톱니 함수'는 출처 Example 5.1.12(5.1.2 소절, p.186; [0, 2] 위에서 1 을 지나며 값이 바뀌는 함수)와 연습문제 5.1.5(5.1.4 소절, p.189; [−1, 1] 위에서 0 을 지나며 값이 바뀌는 함수)와 같은 발상이고, 출처는 그 둘을 분할을 직접 잡아 계산한다. 예시 '불연속점이 무한히 많은 단조함수'는 출처 Example 3.6.5(3.6.1 소절, p.151; 1/(1 − x) 의 정수 부분으로 만든 순증가 함수가 점 1 − 1/k 마다 불연속)와 같은 발상이고, 출처는 그 주장의 증명을 연습문제 3.6.4(3.6.3 소절, p.153)로 둔다. 그 예시가 단조증가로 적분가능성을 얻는 것은 출처 Proposition 5.2.11(5.2.4 소절, p.197; 단조함수는 리만 적분가능하다, 증명은 연습문제 5.2.14 a), b), p.199)과 같은 결론이고, 출처 연습문제 5.2.11(5.2.5 소절, p.198)은 모든 유리수에서 불연속인 Thomae 함수가 적분가능함을 보이라는 것으로, 불연속점이 유한 개가 아닌 적분가능한 함수라는 같은 결론을 다른 함수로 묻는다. 반례 '유계가 아닌 함수의 예'의 함수는 integrable-on-inner-intervals 의 (5)의 함수이고, 출처 Example 3.3.6(3.3.1 소절, p.132; [0, 1] 위에서 x > 0 이면 1/x, 0 에서 0 인 함수가 0 에서 연속이 아니고 최댓값을 갖지 않는다)과 같은 함수이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 경계에서 거짓이거나 부정확한 설명 문장 9건과 범위가 넓었던 출처 메모 3건을 고쳤다."
added: 2026-11-20
---

:::statement
연속, 불연속, "$A$에서 연속"은 [[continuous-function]]의 것이고, 유한집합과 "원소를 $n$개 갖는다"는 [[finite-set]]의 것이다. $[a, b]$의 분할, 그 점, 작은 구간은 [[partition-of-an-interval]]의 것이고, 리만 적분가능과 "$[a, b]$에서 적분가능"은 [[riemann-integral]]의 것이며(그 항목의 (4)), 함수의 유계는 [[bounded-function|유계인 함수]]의 것이다. 아래에서 $a$, $b$는 $a < b$인 실수이고, (1)–(3)에서 $f : [a, b] \to \mathbb{R}$이다.

**불연속점이 유한 개.** $f$가 불연속인 $[a, b]$의 점을 $f$의 **불연속점**(point of discontinuity)이라 한다. $f$가 **불연속점이 유한 개**(has finitely many discontinuities)라는 것은 정확히 $[a, b]$의 부분집합인 유한집합 $S$가 있어 $f$가 $[a, b] - S$의 모든 점에서 연속일 때이다. $S$는 공집합이어도 된다.

1. (같은 말) 다음 세 조건은 서로 같은 말이다.
   - (i) $f$는 불연속점이 유한 개이다.
   - (ii) $f$의 불연속점 전체의 집합 $\{x \in [a, b] : f\text{는 } x\text{에서 불연속}\}$이 유한집합이다.
   - (iii) 어떤 유한집합 $S$가 있어 $f$가 $[a, b] - S$의 모든 점에서 연속이다. 여기서 $S$는 $[a, b]$의 부분집합이 아니어도 된다.
2. (유한집합으로 정한 분할) $S$가 $[a, b]$의 부분집합인 유한집합이면 $T = S \cup \{a, b\}$는 $[a, b]$의 분할이다. $T$의 점이 $t_0, \dots, t_m$이면, $1 \le j \le m$인 모든 정수 $j$와 $t_{j-1} < x < t_j$인 모든 실수 $x$에 대하여 $x$는 $[a, b] - S$의 원소이다.
3. (적분가능) $f$가 유계이고 불연속점이 유한 개이면, $f$는 리만 적분가능하다.
4. (더 큰 정의역) $[a, b] \subseteq D \subseteq \mathbb{R}$이고 $h : D \to \mathbb{R}$가 $[a, b]$ 위에서 유계(곧 $h|_{[a, b]}$가 유계)라 하자. 어떤 유한집합 $S$가 있어 $h$가 $[a, b] - S$의 모든 점에서 연속이면, $h$는 $[a, b]$에서 리만 적분가능하다.
:::

:::english
Continuity, discontinuity, and "continuous on $A$" are those of the entry on continuous functions, and finite sets and "has $n$ elements" are those of the entry on finite sets. Partitions of $[a, b]$, their points, and subintervals are those of the entry on partitions of an interval, Riemann integrability and "integrable on $[a, b]$" are those of the entry on the Riemann integral (its item (4)), and boundedness of a function is that of the entry on bounded functions. Below, $a$ and $b$ are real numbers with $a < b$, and in (1)–(3), $f : [a, b] \to \mathbb{R}$.

**Finitely many discontinuities.** A point of $[a, b]$ at which $f$ is discontinuous is called a **point of discontinuity** of $f$. We say $f$ **has finitely many discontinuities** exactly when there is a finite set $S$ that is a subset of $[a, b]$ such that $f$ is continuous at every point of $[a, b] - S$. The set $S$ may be empty.

1. (Equivalent conditions) The following three conditions are equivalent.
   - (i) $f$ has finitely many discontinuities.
   - (ii) The set of all points of discontinuity of $f$, $\{x \in [a, b] : f \text{ is discontinuous at } x\}$, is a finite set.
   - (iii) There is a finite set $S$ such that $f$ is continuous at every point of $[a, b] - S$. Here $S$ need not be a subset of $[a, b]$.
2. (Partition given by a finite set) If $S$ is a finite set that is a subset of $[a, b]$, then $T = S \cup \{a, b\}$ is a partition of $[a, b]$. If the points of $T$ are $t_0, \dots, t_m$, then for every integer $j$ with $1 \le j \le m$ and every real number $x$ with $t_{j-1} < x < t_j$, $x$ is an element of $[a, b] - S$.
3. (Integrability) If $f$ is bounded and has finitely many discontinuities, then $f$ is Riemann integrable.
4. (Larger domain) Let $[a, b] \subseteq D \subseteq \mathbb{R}$ and let $h : D \to \mathbb{R}$ be bounded on $[a, b]$ (that is, $h|_{[a, b]}$ is bounded). If there is a finite set $S$ such that $h$ is continuous at every point of $[a, b] - S$, then $h$ is Riemann integrable on $[a, b]$.
:::

## 직관

닫힌구간 위의 연속함수는 적분가능합니다. 이 정리는 유계라면 연속이 몇 군데에서 깨져도, 깨지는 곳이 유한 개이면 괜찮다고 말합니다. 비유로, 몇 군데가 끊긴 울타리의 넓이를 잰다고 합시다. 끊긴 기둥마다 울타리를 잘라 토막으로 나누면 각 토막은 양 끝을 빼면 이어져 있고, 끊긴 곳에서도 높이가 한정되어 있다면 끝의 아주 짧은 부분은 넓이에 거의 영향을 주지 않습니다. 비유에서 끊긴 기둥이 불연속점, 토막이 분할의 작은 구간, 높이의 한정이 유계입니다.

증명은 이 그림을 그대로 따릅니다. 불연속점들과 양 끝점 $a$, $b$를 모은 유한집합은 $[a, b]$의 분할이고(2), 각 작은 구간의 안쪽에서 $f$는 연속입니다. 그래서 작은 구간 안쪽의 닫힌구간에서는 연속함수의 적분가능성을 쓰고, [[integrable-on-inner-intervals|안쪽 구간에서 적분가능한 유계함수]]로 작은 구간 전체에서의 적분가능성을 얻고, [[additivity-of-the-integral|적분의 구간 덧셈]]으로 합칩니다.

유계 가정은 둘째 단계, 곧 안쪽 구간에서 작은 구간 전체로 넓히는 곳에서 쓰입니다. 불연속점이 끝점 하나뿐인데도 유계가 아닌 함수가 있고, 그런 함수는 적분가능하지 않습니다(아래 반례). 거꾸로 불연속점이 유한 개라는 조건은 적분가능하기 위해 꼭 필요한 것은 아닙니다(아래의 단조함수 예).

## 증명

:::idea
불연속점들을 담은 유한집합에 양 끝점을 더하면 $[a, b]$의 분할이 되고, 각 작은 구간의 안쪽에는 불연속점이 없다. 안쪽 닫힌구간에서는 연속이므로 적분가능하고, 안쪽 구간의 정리로 작은 구간에서 적분가능하며, 적분의 구간 덧셈의 분할판으로 $[a, b]$에서 적분가능하다.
:::

:::hint
$T$의 원소 $t_i$가 $t_{j-1}$과 $t_j$ 사이에 엄격하게 있다면 번호 $i$는 $j - 1 < i < j$를 만족해야 합니다. 그런 정수가 있습니까?
:::

:::hint
$t_{j-1} < c < d < t_j$이면 $[c, d]$의 모든 점은 (2)에 의해 $[a, b] - S$에 속합니다. 그 다음은 [[continuous-implies-integrable|연속함수의 적분가능성]]의 (2)와 [[integrable-on-inner-intervals|안쪽 구간에서 적분가능한 유계함수]]입니다.
:::

:::proof
실수의 계산은 [[real-number-arithmetic]]의 계산 법칙으로 하고, 번호만 쓴 "(1)의 (v)" 같은 것은 [[order-properties-of-reals]]의 번호이다. "이 항목의 ($n$)"은 위 진술의 번호이다.

**이 항목의 (1).** 불연속점 전체의 집합을 $E$로 쓴다.

(i)이면 (iii): (i)의 $S$는 유한집합이므로 (iii)의 $S$로 쓸 수 있다.

(iii)이면 (ii): $x \in E$라 하자. $x \in [a, b]$이고 $f$는 $x$에서 연속이 아니므로 $x \notin [a, b] - S$이다. 따라서 $x \in S$이다. 곧 $E \subseteq S$이다. $S$는 유한집합이므로 어떤 정수 $n \ge 0$에 대해 원소를 $n$개 갖고, [[subset-of-finite-set]]의 (1)에 의해 $E$는 유한집합이다.

(ii)이면 (i): $S = E$로 두면 $S \subseteq [a, b]$이고 $S$는 유한집합이다. $x \in [a, b] - E$이면 $f$는 $x$에서 불연속이 아니므로, 불연속의 정의(연속이 아닌 것)와 이중 부정에 의해 $f$는 $x$에서 연속이다.

**이 항목의 (2).** $S \subseteq [a, b]$이고 $a$, $b$는 $[a, b]$의 원소이므로([[interval]]의 (3)) $T \subseteq [a, b]$이다. [[partition-of-an-interval|구간의 분할]]의 (4)에 의해 $\{a, b\}$는 $[a, b]$의 분할이므로, 분할의 정의에 의해 유한집합이다. $S$와 $\{a, b\}$가 유한집합이므로 [[disjoint-union-count]]의 (3)에 의해 $T = S \cup \{a, b\}$는 유한집합이다. $a \in T$이고 $b \in T$이므로 $T$는 $[a, b]$의 분할이다.

$T$의 점을 $t_0, \dots, t_m$이라 하고, $1 \le j \le m$인 정수 $j$와 $t_{j-1} < x < t_j$인 실수 $x$를 잡자. [[partition-of-an-interval|구간의 분할]]의 (2)에 의해 $j$번째 작은 구간 $[t_{j-1}, t_j]$는 $[a, b]$의 부분집합이고 $x$는 그 원소이므로 $x \in [a, b]$이다. $x \in S$라고 가정하면 $x \in T$이고, [[partition-of-an-interval|구간의 분할]]의 (1)에 의해 $T = \{t_i : 0 \le i \le m\text{인 정수 } i\}$이므로 $x = t_i$인 정수 $i$($0 \le i \le m$)가 있다. 그러면 $t_{j-1} < t_i < t_j$이고, 그 (1)에 의해 $j - 1 < i$이고 $i < j$이다. [[prime-number]]의 (Z1)에 의해 $j - 1 < i$에서 $j \le i$이고, 이것은 $i < j$와 함께 성립하지 않는다([[well-ordering-principle]]의 (L1)). 이 모순으로 $x \notin S$이고, 따라서 $x \in [a, b] - S$이다.

**이 항목의 (3).** (i)의 정의에 의해 $[a, b]$의 부분집합인 유한집합 $S$가 있어 $f$는 $[a, b] - S$의 모든 점에서 연속이다. (2)에 의해 $T = S \cup \{a, b\}$는 $[a, b]$의 분할이고, 그 점을 $t_0, \dots, t_m$이라 하자.

$j$를 $1 \le j \le m$인 정수라 하자. [[partition-of-an-interval|구간의 분할]]의 (2)에 의해 $t_{j-1} < t_j$이고 $[t_{j-1}, t_j] \subseteq [a, b]$이다. $c$, $d$가 $t_{j-1} < c < d < t_j$인 실수이면, $[c, d]$의 모든 점 $x$는 $c \le x \le d$이므로 (1)의 (v)에 의해 $t_{j-1} < x < t_j$이고, (2)에 의해 $x \in [a, b] - S$이므로 $f$는 $x$에서 연속이다. 곧 $f$는 $[c, d]$에서 연속이다. $[c, d] \subseteq [a, b]$이므로 [[continuous-implies-integrable]]의 (2)(그 항목의 $S$를 $[a, b]$로 두고)에 의해 $f$는 $[c, d]$에서 적분가능하다. 한편 [[bounded-function]]의 (4)에 의해 $f|_{[t_{j-1}, t_j]}$는 유계이다. 따라서 [[integrable-on-inner-intervals]]의 (6)으로 그 (1)을 $D = [a, b]$, $h = f$와 구간 $[t_{j-1}, t_j]$에 쓰면 $f$는 $[t_{j-1}, t_j]$에서 적분가능하다.

이것이 $1 \le j \le m$인 모든 $j$에서 성립하므로 [[additivity-of-the-integral]]의 (3)에 의해 $f$는 $[a, b]$에서 적분가능하다.

**이 항목의 (4).** $\psi = h|_{[a, b]}$로 두면 $\psi : [a, b] \to \mathbb{R}$는 유계이다. $x \in [a, b] - S$이면 $h$는 $x$에서 연속이므로 [[continuous-function]]의 (5)에 의해 $\psi$도 $x$에서 연속이다. 따라서 $\psi$는 (1)의 (iii)을 만족하므로 불연속점이 유한 개이고, (3)에 의해 $\psi$는 적분가능하다. [[riemann-integral]]의 (4)에 의해 이것은 $h$가 $[a, b]$에서 적분가능하다는 뜻이다. $\blacksquare$
:::

## 예시와 반례

:::example[1 에서 값이 뛰는 톱니 함수]
$f : [0, 2] \to \mathbb{R}$를 $0 \le x < 1$이면 $f(x) = x$, $1 \le x \le 2$이면 $f(x) = x - 1$로 정합니다([[real-valued-function]]의 (1)). 모든 $x$에서 $0 \le f(x) \le 1$이므로 $f$는 유계입니다.

$x \ne 1$인 $[0, 2]$의 점에서 $f$는 연속입니다. $0 \le x < 1$이면 $A = \{y \in [0, 2] : |y - x| < 1 - x\}$의 원소 $y$는 $y < x + (1 - x) = 1$이므로([[absolute-value]]의 (8)) $f(y) = y$이고, $f|_A$는 $A$ 위의 항등함수 $i_A$입니다. $i_A$는 연속함수이므로([[continuous-function]]의 (4)) [[continuous-function]]의 (6)을 $\delta_0 = 1 - x$에 쓰면 $f$는 $x$에서 연속입니다. $1 < x \le 2$이면 $A = \{y \in [0, 2] : |y - x| < x - 1\}$의 원소 $y$는 $1 < y$이므로 $f(y) = y - 1$이고, $f|_A$는 $i_A$와 값이 $-1$인 상수함수의 합이므로 [[continuity-of-sum-and-product|연속함수의 합·곱·몫]]의 (3)에 의해 연속함수이며, 같은 방법으로 $f$는 $x$에서 연속입니다. 따라서 $f$는 $[0, 2] - \{1\}$의 모든 점에서 연속이고, (1)의 (iii)에 의해 불연속점이 유한 개이며, (3)에 의해 적분가능합니다.

이 함수에는 [[monotone-implies-integrable|단조함수의 적분가능성]]과 [[continuous-implies-integrable|연속함수의 적분가능성]]을 $[0, 2]$ 전체에 바로 쓸 수 없습니다. $f(0) = 0 < f(1/2) = 1/2$이고 $f(1/2) = 1/2 > 0 = f(1)$이므로 단조증가도 단조감소도 아니고, $1$에서 연속이 아닙니다. 실제로 $\varepsilon = 1/2$로 두면, 양수 $\delta$마다 $y = 1 - \min\{\delta/2,\ 1/2\}$는 $|y - 1| < \delta$이고 $1/2 \le y < 1$이므로 $|f(y) - f(1)| = |y - 0| = y \ge 1/2$입니다([[continuous-function]]의 (1)).
:::

:::example[불연속점이 무한히 많은 단조함수]
(3)의 조건은 적분가능하기 위한 충분조건이고, 필요조건은 아닙니다. 그런 함수를 하나 만들어 봅니다.

$0 < x \le 1$이면 $0 \le x^{-1}$이므로, [[archimedean-property|아르키메데스 성질]]의 (4)에 의해 $N - 1 \le x^{-1} < N$인 정수 $N$이 정확히 하나 있고 그것은 자연수입니다. 이 수를 $N(x)$로 쓰고, $g : [0, 1] \to \mathbb{R}$를 $g(0) = 0$, $0 < x \le 1$이면 $g(x) = N(x)^{-1}$로 정합니다($N(x)$는 하나로 정해진 수이므로 [[real-valued-function]]의 (1)로 정할 수 있습니다).

단조증가: $x < y$인 $[0, 1]$의 두 점을 생각합니다. $x = 0$이면 $g(0) = 0 < N(y)^{-1} = g(y)$입니다([[order-properties-of-reals]]의 (6)의 (i)). $0 < x$이면 그 (6)의 (ii)에 의해 $y^{-1} < x^{-1}$이고, $N(y) - 1 \le y^{-1} < x^{-1} < N(x)$이므로 $N(y) - 1 < N(x)$이며, 그 (10)으로 정수의 순서로 읽고 [[prime-number]]의 (Z1)을 쓰면 $N(y) \le N(x)$입니다. $N(y) = N(x)$이면 $g(x) = g(y)$이고, $N(y) < N(x)$이면 (6)의 (ii)에 의해 $g(x) < g(y)$입니다. 따라서 $g$는 단조증가이고([[derivative-and-monotonicity|도함수와 증가·감소]]의 정의), [[monotone-implies-integrable|단조함수의 적분가능성]]의 (4)에 의해 적분가능합니다.

$k \ge 2$인 정수 $k$마다 $g$는 $k^{-1}$에서 불연속입니다. $(k^{-1})^{-1} = k$이고 $k \le k < k + 1$이므로 $N(k^{-1}) = k + 1$이고 $g(k^{-1}) = (k + 1)^{-1}$입니다. 또 $k^{-1} < x \le (k - 1)^{-1}$이면 (6)의 (ii)에 의해 $k - 1 \le x^{-1} < k$이므로 $N(x) = k$이고 $g(x) = k^{-1}$입니다. $\varepsilon = k^{-1} - (k + 1)^{-1}$은 양수입니다. 양수 $\delta$마다 $s = \min\{\delta/2,\ (k - 1)^{-1} - k^{-1}\}$은 양수이고 $x = k^{-1} + s$는 $k^{-1} < x \le (k - 1)^{-1} \le 1$, $|x - k^{-1}| = s < \delta$를 만족하며 $|g(x) - g(k^{-1})| = \varepsilon$입니다. [[continuous-function]]의 (1)에 의해 $g$는 $k^{-1}$에서 불연속입니다.

불연속점 전체의 집합 $E$는 유한집합이 아닙니다. 유한집합이라고 하면, $\psi(j) = (j + 1)^{-1}$로 정한 함수 $\psi : \mathbb{N} \to E$는 위에 의해 값이 $E$에 들고([[sequence]]의 (1)), $(j + 1)^{-1} = (j' + 1)^{-1}$이면 역수를 다시 취해 $j = j'$이므로 [[injective-surjective-bijective|단사]]입니다. 상 $\psi(\mathbb{N})$은 $E$의 부분집합이므로 [[subset-of-finite-set]]의 (1)에 의해 원소를 어떤 $n$개 갖고, $\psi : \mathbb{N} \to \psi(\mathbb{N})$은 단사이고 [[image-and-preimage|상]]의 정의에 의해 전사이므로 전단사입니다. [[finite-set]]의 (F3)과 (F4)에 의해 $\mathbb{N}$은 원소를 $n$개 갖게 되어 [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (1)과 모순입니다. 따라서 $g$는 (1)의 (ii)에 의해 불연속점이 유한 개가 아니지만 적분가능합니다.
:::

:::counterexample[유계가 아닌 함수의 예]
[[integrable-on-inner-intervals|안쪽 구간에서 적분가능한 유계함수]]의 (5)의 함수 $\varphi : [0, 1] \to \mathbb{R}$($\varphi(0) = 0$, $0 < x \le 1$이면 $\varphi(x) = x^{-1}$)는 $0 < x \le 1$인 모든 점에서 연속이므로 $S = \{0\}$으로 (1)의 (iii)을 만족하고, 불연속점이 유한 개입니다. 그러나 같은 (5)에 의해 유계가 아니고 적분가능하지 않습니다. (3)에서 유계라는 가정을 빼면 결론이 성립하지 않을 수 있습니다.
:::

## 확인 질문

:::check[$S = \emptyset$이면 (2)의 분할과 (3)은 무엇을 말하는가?]
$T = \{a, b\}$이고 점은 $t_0 = a$, $t_1 = b$이며, (2)는 $a < x < b$인 모든 $x$가 $[a, b]$에 속한다는 것입니다. (3)은 "$f$가 유계이고 $[a, b]$의 모든 점에서 연속이면 적분가능하다"가 되어, [[continuous-implies-integrable|연속함수의 적분가능성]]의 (1)과 같은 결론입니다. 그 항목은 유계를 가정하지 않습니다.
:::

:::check[$f : [0, 4] \to \mathbb{R}$가 유계이고 $0$, $3$, $4$를 뺀 모든 점에서 연속이면, 증명에서 쓰는 분할과 그 작은 구간은 무엇인가?]
$S = \{0, 3, 4\}$이고 $T = S \cup \{0, 4\} = \{0, 3, 4\}$입니다. 점은 $t_0 = 0$, $t_1 = 3$, $t_2 = 4$이고 작은 구간은 $[0, 3]$과 $[3, 4]$입니다. 끝점 $0$과 $4$는 처음부터 $T$에 들어 있으므로 나누는 점을 늘리지 않고, $f$는 두 작은 구간의 안쪽에서 연속이므로 각각에서 적분가능하며, 따라서 $[0, 4]$에서 적분가능합니다.
:::
