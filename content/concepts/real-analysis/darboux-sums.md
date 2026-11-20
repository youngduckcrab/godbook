---
title: 다르부 하합과 상합
title_en: Lower and Upper Darboux Sums
aliases: [다르부 합, 하합, 상합, 다르부 하합, 다르부 상합, Darboux sum, lower Darboux sum, upper Darboux sum, lower sum, upper sum]
kind: definition
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: "[a, b] 위의 유계함수 f 와 분할 P 에 대해, 작은 구간마다 f 의 값의 하한 m_i 와 상한 M_i 를 길이와 곱해 더한 하합 L(P, f) 와 상합 U(P, f) 를 정의한다. 하한·상한과 함숫값의 비교, m(b − a) ≤ L ≤ U ≤ M(b − a), U − L 의 식, 작은 구간을 줄일 때 하한·상한의 단조성, 상수함수와 가장 간단한 분할, 이웃한 두 구간의 분할을 이어 붙였을 때 다르부 합이 더해진다는 것을 함께 진술한다."
requires: [set, subset, set-operations, function, image-and-preimage, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, real-order-axioms, order-properties-of-reals, upper-bound-and-supremum, least-upper-bound-property, infimum-exists, supremum-and-arithmetic, absolute-value, real-valued-function, bounded-function, interval, archimedean-property, finite-sum-of-reals, splitting-and-shifting-finite-sums, linearity-and-order-of-finite-sums, telescoping-sum, increasing-listing-of-finite-set, partition-of-an-interval, refinement-of-a-partition]
sources:
  - ref: lebl-basic-analysis
    loc: 5.1절(5.1.1 소절) Definition 5.1.1 의 뒷부분 (p.181), Proposition 5.1.2 와 그 증명 (p.182), Remark 5.1.5 (p.183), Proposition 5.1.7 의 증명 (p.184); 5.2절(5.2.1 소절) Lemma 5.2.1 의 증명 (p.191)
    checked: original
    note: "출처의 Definition 5.1.1(p.181)은 유계인 f : [a, b] → ℝ 와 [a, b] 의 분할 P 에 대해 m_i = inf{f(x) : x_{i−1} ≤ x ≤ x_i}, M_i = sup{f(x) : x_{i−1} ≤ x ≤ x_i}, L(P, f) = Σ_{i=1}^n m_iΔx_i, U(P, f) = Σ_{i=1}^n M_iΔx_i 로 정의하고 이를 lower Darboux sum, upper Darboux sum 이라 부른다. 출처는 Definition 5.1.1 에서 f 가 유계라고 가정하고 m_i, M_i 를 바로 정의한다. 이 항목은 작은 구간에서의 값의 집합이 공집합이 아니고 유계여서 m_i, M_i 가 있다는 것을 증명한다. (2)는 출처의 Proposition 5.1.2(p.182)이고, 출처는 m ≤ m_i ≤ M_i ≤ M 과 Σ_{i=1}^n Δx_i = (b − a) 를 들어 증명한다. 이 항목의 (1)은 그 증명의 첫 문장 'for all i, we have m ≤ m_i ≤ M_i ≤ M' 을 진술로 올린 것이다. (4)는 출처의 Proposition 5.1.7 의 증명(p.184)이 m_i ≤ m̃_q (k_{i−1} < q ≤ k_i) 를 쓰는 단계에 해당한다. (7)의 이어 붙인 분할의 다르부 합은 출처의 Lemma 5.2.1 의 증명(p.191)이 L(P, f) = Σ_{i=1}^k m_iΔx_i + Σ_{i=k+1}^n m_iΔx_i = L(P_1, f) + L(P_2, f) 로 쓰는 것이다. 출처는 그 식에서 [a, c] 위의 f 를 그대로 써서 L(P_1, f), L(P_2, f) 라 적는데, 이는 Remark 5.1.5(p.183)의 약속(더 큰 정의역 위의 f 는 [a, b] 로의 제한을 쓰고, 그 제한이 유계여야 한다)으로 읽힌다. 이 항목의 (8)은 그 약속을 다르부 합에 대해 적은 것이다. (3), (5), (6)과 이 항목의 증명은 이 사이트가 썼다. 예시 '꺾인 함수의 다르부 합'과 반례 '상한이 값으로 나오지 않는 작은 구간'은 출처 연습문제 5.1.1(p.188, x³ 과 분할 {0, 0.1, 0.4, 1} 의 L, U 계산)과 같은 종류의 계산이다. 반례 '유계가 아닌 함수'는 출처의 Definition 5.1.1 이 f 가 유계라고 가정하는 까닭을 보인다. 확인 질문 2(L(P, f) = U(P, f) 이면 모든 작은 구간에서 m_i = M_i)는 출처 연습문제 5.1.15(5.1.4 소절, p.190, L(P, f) = U(P, f) 인 분할이 있으면 f 는 상수함수)와 같은 발상이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 틀린 예시 논증 1건과 출처 메모 4곳, 등호를 가리는 말을 고쳤다."
added: 2026-11-20
---

:::statement
$[a, b]$의 분할과 그 점 $x_0, \dots, x_n$, $i$번째 작은 구간 $[x_{i-1}, x_i]$, 길이 $\Delta x_i$는 [[partition-of-an-interval]]의 것이고, 세분과 이어 붙이기는 [[refinement-of-a-partition]]의 것이다. 함수의 유계는 [[bounded-function]]의 것이고, 상 $f(X) = \{f(x) : x \in X\}$는 [[image-and-preimage]]의 것이며, 상한 $\sup$, 하한 $\inf$는 [[upper-bound-and-supremum]]의 것이다. 유한 합과 범위에서만 정해진 항의 합은 [[finite-sum-of-reals]]의 것이다. 아래에서 $a$, $b$는 $a < b$인 실수이다.

**작은 구간 위의 하한과 상한.** $f : [a, b] \to \mathbb{R}$가 유계이고 $c < d$이며 $[c, d] \subseteq [a, b]$이면, 집합 $f([c, d])$는 공집합이 아니고 유계이므로 하한 $\inf f([c, d])$와 상한 $\sup f([c, d])$가 있다(아래 증명).

**다르부 합.** $f : [a, b] \to \mathbb{R}$가 유계이고 $P$가 점이 $x_0, \dots, x_n$인 $[a, b]$의 분할이라 하자. $1 \le i \le n$인 정수 $i$마다
$$
\begin{gathered}
m_i = \inf f([x_{i-1}, x_i]), \\
M_i = \sup f([x_{i-1}, x_i])
\end{gathered}
$$
로 두고, $1 \le i \le n$에서만 정해진 항의 합
$$
\begin{gathered}
L(P, f) = \sum_{i=1}^{n} m_i \Delta x_i, \\
U(P, f) = \sum_{i=1}^{n} M_i \Delta x_i
\end{gathered}
$$
를 $f$의 $P$에 대한 **다르부 하합**(lower Darboux sum)과 **다르부 상합**(upper Darboux sum)이라 한다. 둘을 함께 **다르부 합**이라 한다. $m_i$, $M_i$는 $P$와 $f$에 따라 정해진다. 함수가 둘 이상이면 함수를 밝혀 $m_i(f)$, $M_i(f)$로 쓰고, 함수가 하나뿐이면 $m_i$, $M_i$로 쓴다. 분할을 밝혀야 하면 말로 밝힌다. 기호 $L(P, f)$, $U(P, f)$의 글자 $L$, $U$는 정수의 성질 (L1)–(L3)이나 최소상계 성질 (U)의 이름표와 관계가 없다. $f$가 유계가 아니면 다르부 합을 정의하지 않는다.

다음이 성립한다. (1)–(5)에서 $f : [a, b] \to \mathbb{R}$는 유계이고 $P$는 점이 $x_0, \dots, x_n$인 $[a, b]$의 분할이다.

1. (값과 하한·상한) $1 \le i \le n$이면 $m_i \le M_i$이고, $x$가 $i$번째 작은 구간의 점이면, 곧 $x_{i-1} \le x \le x_i$이면 $m_i \le f(x) \le M_i$이다. 실수 $c$가 $[x_{i-1}, x_i]$의 모든 $x$에서 $c \le f(x)$를 만족하면 $c \le m_i$이고, 실수 $C$가 $[x_{i-1}, x_i]$의 모든 $x$에서 $f(x) \le C$를 만족하면 $M_i \le C$이다. 실수 $m$, $M$이 $[a, b]$의 모든 $x$에서 $m \le f(x) \le M$을 만족하면 $1 \le i \le n$인 모든 $i$에서 $m \le m_i \le M_i \le M$이다. 특히 $m = \inf f([a, b])$, $M = \sup f([a, b])$로 둘 수 있다.
2. (다르부 합의 범위) $m$, $M$이 (1)과 같으면
   $$
   m(b - a) \le L(P, f) \le U(P, f) \le M(b - a)
   $$
   이다.
3. (상합과 하합의 차) $U(P, f) - L(P, f) = \sum_{i=1}^{n} (M_i - m_i)\Delta x_i$이고, 이 값은 $0$ 이상이다.
4. (작은 구간을 줄이면) $c < d$, $c' < d'$이고 $[c', d'] \subseteq [c, d] \subseteq [a, b]$이면
   $$
   \inf f([c, d]) \le \inf f([c', d']) \le \sup f([c', d']) \le \sup f([c, d])
   $$
   이다.
5. (상수함수와 가장 간단한 분할) $f$가 값이 $k$인 상수함수이면 모든 $i$에서 $m_i = M_i = k$이고 $L(P, f) = U(P, f) = k(b - a)$이다. 분할이 $\{a, b\}$이면 $L(\{a, b\}, f) = \inf f([a, b]) \cdot (b - a)$이고 $U(\{a, b\}, f) = \sup f([a, b]) \cdot (b - a)$이다.
6. (유계가 아닌 함수) $f$가 유계가 아니면 다르부 합은 정의되지 않는다. 이때는 어떤 작은 구간에서 상한이나 하한이 없을 수 있다(아래 반례).
7. (이어 붙인 분할의 다르부 합) $a < b < c$인 실수 $c$와 유계인 $f : [a, c] \to \mathbb{R}$를 생각하고, 제한 $f_1 = f|_{[a, b]}$, $f_2 = f|_{[b, c]}$를 두자(둘 다 유계이다).
   - (i) $P_1$이 $[a, b]$의 분할, $P_2$가 $[b, c]$의 분할이면
     $$
     \begin{gathered}
     L(P_1 \cup P_2, f) = L(P_1, f_1) + L(P_2, f_2), \\
     U(P_1 \cup P_2, f) = U(P_1, f_1) + U(P_2, f_2)
     \end{gathered}
     $$
     이다.
   - (ii) $P$가 $b$를 원소로 갖는 $[a, c]$의 분할이면 $L(P, f) = L(P \cap [a, b], f_1) + L(P \cap [b, c], f_2)$이고, $U$에 대해서도 같다.
8. (더 큰 정의역) $[a, b] \subseteq S \subseteq \mathbb{R}$이고 $h : S \to \mathbb{R}$의 제한 $h|_{[a, b]}$가 유계일 때(이를 "$h$가 $[a, b]$ 위에서 유계"라 한다), $[a, b]$의 분할 $P$에 대한 $L(P, h)$, $U(P, h)$는 $L(P, h|_{[a, b]})$, $U(P, h|_{[a, b]})$를 뜻한다고 약속한다. $c < d$이고 $[c, d] \subseteq [a, b]$이면 $h|_{[a, b]}([c, d]) = h([c, d])$이므로, $m_i = \inf h([x_{i-1}, x_i])$, $M_i = \sup h([x_{i-1}, x_i])$는 $h$로 계산하든 $h|_{[a, b]}$로 계산하든 같은 수이다. 특히 (7)의 $f_1$, $f_2$에 대하여, 이 약속을 $[a, b]$와 $[b, c]$에 각각 쓰면 $L(P_1, f_1) = L(P_1, f)$, $L(P_2, f_2) = L(P_2, f)$이고 $U$도 같다.
:::

:::english
Partitions of $[a, b]$, their points $x_0, \dots, x_n$, the $i$-th subinterval $[x_{i-1}, x_i]$, and the length $\Delta x_i$ are those of the entry on partitions of an interval, and refinements and joining are those of the entry on refinements of a partition. Boundedness of a function is that of the entry on bounded functions, the image $f(X) = \{f(x) : x \in X\}$ is that of the entry on images and preimages, and the supremum $\sup$ and infimum $\inf$ are those of the entry on upper bounds and suprema. Finite sums and sums of terms determined only on a range are those of the entry on finite sums of real numbers. Below, $a$ and $b$ are real numbers with $a < b$.

**Infimum and supremum on a subinterval.** If $f : [a, b] \to \mathbb{R}$ is bounded, $c < d$, and $[c, d] \subseteq [a, b]$, then the set $f([c, d])$ is nonempty and bounded, so it has an infimum $\inf f([c, d])$ and a supremum $\sup f([c, d])$ (proof below).

**Darboux sums.** Let $f : [a, b] \to \mathbb{R}$ be bounded and let $P$ be a partition of $[a, b]$ with points $x_0, \dots, x_n$. For each integer $i$ with $1 \le i \le n$ put
$$
\begin{gathered}
m_i = \inf f([x_{i-1}, x_i]), \\
M_i = \sup f([x_{i-1}, x_i]),
\end{gathered}
$$
and call the sums of terms determined only for $1 \le i \le n$
$$
\begin{gathered}
L(P, f) = \sum_{i=1}^{n} m_i \Delta x_i, \\
U(P, f) = \sum_{i=1}^{n} M_i \Delta x_i
\end{gathered}
$$
the **lower Darboux sum** and the **upper Darboux sum** of $f$ with respect to $P$. Together they are called **Darboux sums**. The numbers $m_i$ and $M_i$ depend on $P$ and $f$. When there are two or more functions we indicate the function and write $m_i(f)$, $M_i(f)$; when there is only one function we write $m_i$, $M_i$. When the partition must be indicated, we say so in words. The letters $L$, $U$ in $L(P, f)$, $U(P, f)$ have nothing to do with the labels (L1)–(L3) for properties of integers or the label (U) of the least-upper-bound property. If $f$ is not bounded, Darboux sums are not defined.

The following hold. In (1)–(5), $f : [a, b] \to \mathbb{R}$ is bounded and $P$ is a partition of $[a, b]$ with points $x_0, \dots, x_n$.

1. (Values and the infimum and supremum) If $1 \le i \le n$, then $m_i \le M_i$, and if $x$ is a point of the $i$-th subinterval, that is, $x_{i-1} \le x \le x_i$, then $m_i \le f(x) \le M_i$. If a real number $c$ satisfies $c \le f(x)$ for all $x$ in $[x_{i-1}, x_i]$, then $c \le m_i$; if a real number $C$ satisfies $f(x) \le C$ for all $x$ in $[x_{i-1}, x_i]$, then $M_i \le C$. If real numbers $m$, $M$ satisfy $m \le f(x) \le M$ for all $x$ in $[a, b]$, then $m \le m_i \le M_i \le M$ for all $i$ with $1 \le i \le n$. In particular one may take $m = \inf f([a, b])$ and $M = \sup f([a, b])$.
2. (Range of the Darboux sums) If $m$, $M$ are as in (1), then
   $$
   m(b - a) \le L(P, f) \le U(P, f) \le M(b - a) .
   $$
3. (Difference of upper and lower sums) $U(P, f) - L(P, f) = \sum_{i=1}^{n} (M_i - m_i)\Delta x_i$, and this value is at least $0$.
4. (Shrinking a subinterval) If $c < d$, $c' < d'$, and $[c', d'] \subseteq [c, d] \subseteq [a, b]$, then
   $$
   \inf f([c, d]) \le \inf f([c', d']) \le \sup f([c', d']) \le \sup f([c, d]) .
   $$
5. (Constant functions and the simplest partition) If $f$ is the constant function with value $k$, then $m_i = M_i = k$ for all $i$ and $L(P, f) = U(P, f) = k(b - a)$. For the partition $\{a, b\}$, $L(\{a, b\}, f) = \inf f([a, b]) \cdot (b - a)$ and $U(\{a, b\}, f) = \sup f([a, b]) \cdot (b - a)$.
6. (Unbounded functions) If $f$ is not bounded, Darboux sums are not defined. In that case some subinterval may have no supremum or no infimum (counterexample below).
7. (Darboux sums of a joined partition) Consider a real number $c$ with $a < b < c$ and a bounded $f : [a, c] \to \mathbb{R}$, and put $f_1 = f|_{[a, b]}$ and $f_2 = f|_{[b, c]}$ (both are bounded).
   - (i) If $P_1$ is a partition of $[a, b]$ and $P_2$ a partition of $[b, c]$, then
     $$
     \begin{gathered}
     L(P_1 \cup P_2, f) = L(P_1, f_1) + L(P_2, f_2), \\
     U(P_1 \cup P_2, f) = U(P_1, f_1) + U(P_2, f_2) .
     \end{gathered}
     $$
   - (ii) If $P$ is a partition of $[a, c]$ containing $b$, then $L(P, f) = L(P \cap [a, b], f_1) + L(P \cap [b, c], f_2)$, and the same holds for $U$.
8. (A larger domain) When $[a, b] \subseteq S \subseteq \mathbb{R}$ and the restriction $h|_{[a, b]}$ of $h : S \to \mathbb{R}$ is bounded (we then say "$h$ is bounded on $[a, b]$"), we agree that for a partition $P$ of $[a, b]$, $L(P, h)$ and $U(P, h)$ mean $L(P, h|_{[a, b]})$ and $U(P, h|_{[a, b]})$. If $c < d$ and $[c, d] \subseteq [a, b]$, then $h|_{[a, b]}([c, d]) = h([c, d])$, so $m_i = \inf h([x_{i-1}, x_i])$ and $M_i = \sup h([x_{i-1}, x_i])$ are the same numbers whether computed with $h$ or with $h|_{[a, b]}$. In particular, for $f_1$, $f_2$ in (7), applying this convention to $[a, b]$ and to $[b, c]$ respectively, $L(P_1, f_1) = L(P_1, f)$ and $L(P_2, f_2) = L(P_2, f)$, and likewise for $U$.
:::

## 직관

함수의 그래프 아래 넓이를 직사각형으로 어림한다고 생각해 봅시다. 분할로 $[a, b]$를 작은 구간으로 나누고, 작은 구간마다 폭이 $\Delta x_i$인 직사각형을 세웁니다. 높이를 그 작은 구간에서 $f$의 값이 내려가는 바닥 $m_i$로 잡으면 그래프 아래로 들어가는 직사각형들이 되고, 넓이의 합이 하합입니다. 높이를 값이 올라가는 천장 $M_i$로 잡으면 그래프를 덮는 직사각형들이 되고, 넓이의 합이 상합입니다.

바닥과 천장을 최솟값·최댓값이 아니라 하한·상한으로 잡는 것은, 작은 구간에서 $f$가 가장 큰 값을 갖지 않을 수도 있기 때문입니다(아래 반례). 하한과 상한은 $f$가 유계이기만 하면 [[least-upper-bound-property|최소상계 성질]]에 의해 늘 있습니다. 그래서 다르부 합은 "작은 구간마다 점을 하나 골라 그 값을 쓰는" 방식과 달리 고르는 일 없이 $P$와 $f$로 하나로 정해집니다.

(7)은 $[a, b]$의 분할과 $[b, c]$의 분할을 이어 붙이면, 이어 붙인 분할의 작은 구간이 두 분할의 작은 구간을 차례로 늘어놓은 것이어서 다르부 합도 두 합을 더한 것이 된다는 뜻입니다.

## 증명

:::idea
작은 구간의 값의 집합 $f([c, d])$는 $f([a, b])$의 공집합이 아닌 부분집합이므로 하한과 상한이 있고, 부분집합의 하한·상한 비교에서 (1)과 (4)가 나온다. (2)와 (3)은 유한 합의 항별 비교와 선형성, (7)은 작은 구간의 대응과 유한 합의 이어 붙이기이다.
:::

:::hint
(2): 항별로 $m\Delta x_i \le m_i\Delta x_i$이고, $\sum_{i=1}^{n} m\Delta x_i = m \sum_{i=1}^{n} \Delta x_i = m(b - a)$이다.
:::

:::hint
(7)의 (i): 이어 붙인 분할의 $i$번째($i \le k$) 작은 구간은 $P_1$의 $i$번째, $(k + j)$번째 작은 구간은 $P_2$의 $j$번째 작은 구간이다. [[splitting-and-shifting-finite-sums|유한 합의 쪼개기와 첨자 옮기기]]의 (3)을 쓴다.
:::

:::proof
실수의 순서는 [[order-properties-of-reals]]의 (1)–(4)로 다루고, 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7)로 다룬다. "분할 ($n$)", "세분 ($n$)", "선형 ($n$)"은 각각 [[partition-of-an-interval]], [[refinement-of-a-partition]], [[linearity-and-order-of-finite-sums]]의 번호이다. 선형 (8)에 의해 [[finite-sum-of-reals]], [[splitting-and-shifting-finite-sums]], [[linearity-and-order-of-finite-sums]]의 번호는 범위에서만 정해진 항에 그대로 쓴다.

**하한과 상한이 있다는 것.** $f$가 유계이므로 [[bounded-function]]의 (2)에 의해 $f([a, b])$는 유계이다. 곧 $f([a, b])$의 상계 $B_1$과 하계 $B_2$가 있다. $c < d$이고 $[c, d] \subseteq [a, b]$이면 [[interval]]의 (3)에 의해 $c \in [c, d]$이므로 $f(c) \in f([c, d])$이고 $f([c, d])$는 공집합이 아니다. $[c, d] \subseteq [a, b]$이므로 $f([c, d]) \subseteq f([a, b])$이고, $B_1$, $B_2$는 $f([c, d])$의 상계와 하계이기도 하다. [[least-upper-bound-property]]의 (U)에 의해 $\sup f([c, d])$가 있고, [[infimum-exists]]의 (4)에 의해 $\inf f([c, d])$가 있다. 분할 (2)에 의해 $x_{i-1} < x_i$이고 $[x_{i-1}, x_i] \subseteq [a, b]$이므로 $m_i$, $M_i$가 있다. $m_i \Delta x_i$와 $M_i \Delta x_i$는 $1 \le i \le n$에서 이미 정해진 대상으로 정해진 실수이므로 $L(P, f)$, $U(P, f)$는 범위에서만 정해진 항의 합으로 정해진다.

**1의 증명.** $x_{i-1} \le x \le x_i$이면 $f(x) \in f([x_{i-1}, x_i])$이고, $m_i$는 이 집합의 하계, $M_i$는 상계이므로 $m_i \le f(x) \le M_i$이다. $x = x_{i-1}$로 두면 [[order-properties-of-reals]]의 (1)의 (v)에 의해 $m_i \le M_i$이다. $m \le f(x) \le M$($x \in [a, b]$)이면 $m$은 $f([x_{i-1}, x_i])$의 하계이고 $M$은 상계이므로, 하한과 상한의 정의에 의해 $m \le m_i$이고 $M_i \le M$이다. $[a, b]$의 모든 $x$에서 $f(x) \in f([a, b])$이므로 $\inf f([a, b]) \le f(x) \le \sup f([a, b])$이고, 이 둘을 $m$, $M$으로 쓸 수 있다(둘이 있다는 것은 위 문단을 $[c, d] = [a, b]$에 쓴 것이다).

**2의 증명.** 분할 (2)에 의해 $\Delta x_i > 0$이므로 (1)과 [[order-properties-of-reals]]의 (4)의 (iii)에 의해 $1 \le i \le n$에서 $m \Delta x_i \le m_i \Delta x_i \le M_i \Delta x_i \le M \Delta x_i$이다. 선형 (3)에 의해
$$
\sum_{i=1}^{n} m \Delta x_i \le L(P, f) \le U(P, f) \le \sum_{i=1}^{n} M \Delta x_i
$$
이다. 선형 (1)과 분할 (7)에 의해 $\sum_{i=1}^{n} m \Delta x_i = m \sum_{i=1}^{n} \Delta x_i = m(b - a)$이고, 같은 방식으로 $\sum_{i=1}^{n} M \Delta x_i = M(b - a)$이다.

**3의 증명.** 선형 (1)의 둘째 식에 의해 $U(P, f) - L(P, f) = \sum_{i=1}^{n} (M_i \Delta x_i - m_i \Delta x_i)$이고, 분배법칙(K3과 K12)에 의해 각 항은 $(M_i - m_i)\Delta x_i$이다. (1)에 의해 $0 \le M_i - m_i$이고 $0 < \Delta x_i$이므로 [[order-properties-of-reals]]의 (4)의 (iv)에 의해 각 항은 $0$ 이상이고, 선형 (6)에 의해 합도 $0$ 이상이다.

**4의 증명.** $[c', d'] \subseteq [c, d]$이므로 $f([c', d']) \subseteq f([c, d])$이고, 위의 첫 문단에 의해 $f([c', d'])$는 공집합이 아니며 $f([c, d])$는 유계이다. [[supremum-and-arithmetic|상한과 연산]] 항목의 (4)를 $A = f([c', d'])$, $B = f([c, d])$에 쓰면 $\sup f([c', d']) \le \sup f([c, d])$이고 $\inf f([c, d]) \le \inf f([c', d'])$이다. 가운데 부등식은 $c' \in [c', d']$에서 $\inf f([c', d']) \le f(c') \le \sup f([c', d'])$인 것에서 나온다.

**5의 증명.** $f$가 값이 $k$인 상수함수이면 $f([x_{i-1}, x_i]) = \{k\}$이다($x_{i-1}$이 원소이므로 공집합이 아니다). $k$는 $\{k\}$의 원소이면서 상계이자 하계이므로 최댓값이자 최솟값이고, [[upper-bound-and-supremum]]의 (2)에 의해 $m_i = M_i = k$이다. (2)를 $m = M = k$에 쓰면 $k(b - a) \le L(P, f) \le U(P, f) \le k(b - a)$이므로 [[order-properties-of-reals]]의 (1)의 (ii)에 의해 $L(P, f) = U(P, f) = k(b - a)$이다. 분할 $\{a, b\}$는 분할 (4)에 의해 $n = 1$이고 유일한 작은 구간이 $[a, b]$, 길이가 $b - a$이므로, [[finite-sum-of-reals]]의 (2)에 의해 $L(\{a, b\}, f) = m_1 \Delta x_1 = \inf f([a, b]) \cdot (b - a)$이고 $U$도 같다.

**1의 둘째 문장.** $c \le f(x)$($x \in [x_{i-1}, x_i]$)이면 $c$는 $f([x_{i-1}, x_i])$의 하계이므로 하한의 정의에 의해 $c \le m_i$이고, 같은 방식으로 $C$는 상계이므로 $M_i \le C$이다.

**6.** 정의에서 $f$가 유계라고 가정했으므로, 유계가 아닌 $f$에는 다르부 합이 정해지지 않는다. 작은 구간에서 상한이나 하한이 없을 수 있다는 것은 아래 반례 '유계가 아닌 함수'가 보인다.

**7의 증명.** $f$가 유계이므로 [[bounded-function]]의 (4)에 의해 $f_1$, $f_2$도 유계이다. $[c, d] \subseteq [a, b]$이면 [[real-valued-function]]의 (6)에 의해 $[c, d]$의 모든 $x$에서 $f_1(x) = f(x)$이므로 $f_1([c, d]) = f([c, d])$이고, $[c, d] \subseteq [b, c]$이면 같은 방식으로 $f_2([c, d]) = f([c, d])$이다.

(i): $P_1$의 점을 $x_0, \dots, x_k$, $P_2$의 점을 $y_0, \dots, y_l$이라 하자. 세분 (5)의 (i)에 의해 $P_1 \cup P_2$는 $[a, c]$의 분할이고 그 점 $z_0, \dots, z_{k+l}$에 대하여, $1 \le i \le k$이면 $i$번째 작은 구간은 $[x_{i-1}, x_i]$이고, $1 \le j \le l$이면 $(k + j)$번째 작은 구간은 $[y_{j-1}, y_j]$이다. $P_1 \cup P_2$의 다르부 하합의 $i$번째 항을 $t_i$($1 \le i \le k + l$), $P_1$과 $f_1$의 다르부 하합의 $i$번째 항을 $p_i$($1 \le i \le k$), $P_2$와 $f_2$의 $j$번째 항을 $q_j$($1 \le j \le l$)라 하자. 앞 문단에 의해 $1 \le i \le k$에서
$$
\begin{aligned}
t_i &= \inf f([x_{i-1}, x_i]) \cdot (x_i - x_{i-1}) \\
&= \inf f_1([x_{i-1}, x_i]) \cdot (x_i - x_{i-1}) = p_i
\end{aligned}
$$
이고, 같은 방식으로 $1 \le j \le l$에서 $t_{k+j} = q_j$이다. [[splitting-and-shifting-finite-sums]]의 (3)에 의해 $\sum_{i=1}^{k+l} t_i = \sum_{i=1}^{k} p_i + \sum_{j=1}^{l} q_j$, 곧 $L(P_1 \cup P_2, f) = L(P_1, f_1) + L(P_2, f_2)$이다. 하한을 상한으로 바꾸어 같은 논법을 쓰면 $U$에 대한 식을 얻는다.

**8의 증명.** $h|_{[a, b]}$는 $[a, b]$ 위의 실함수이고 $[c, d]$의 모든 $x$에서 $h|_{[a, b]}(x) = h(x)$이므로([[real-valued-function]]의 (6)) 두 상 $h|_{[a, b]}([c, d])$와 $h([c, d])$는 같은 집합이고, 그 하한과 상한도 같다. (7)의 $f_1 = f|_{[a, b]}$에서 $L(P_1, f)$는 약속에 의해 $L(P_1, f|_{[a, b]}) = L(P_1, f_1)$이고, $f_2$와 $[b, c]$에서도 같다.

(ii): 세분 (5)의 (ii)에 의해 $P \cap [a, b]$는 $[a, b]$의 분할, $P \cap [b, c]$는 $[b, c]$의 분할이고 그 합집합은 $P$이다. (i)을 $P_1 = P \cap [a, b]$, $P_2 = P \cap [b, c]$에 쓰면 된다. $\blacksquare$
:::

## 예시와 반례

:::example[꺾인 함수의 다르부 합]
$[-1, 2]$ 위의 $f(x) = |x|$와 분할 $P = \{-1, 0, 2\}$를 봅시다. 첫째 작은 구간 $[-1, 0]$에서 $f$의 값은 $0$부터 $1$까지이므로 $m_1 = 0$, $M_1 = 1$이고, 둘째 작은 구간 $[0, 2]$에서는 $m_2 = 0$, $M_2 = 2$입니다(둘 다 끝점에서 값으로 나옵니다). 길이가 $\Delta x_1 = 1$, $\Delta x_2 = 2$이므로
$$
\begin{gathered}
L(P, f) = 0 \cdot 1 + 0 \cdot 2 = 0, \\
U(P, f) = 1 \cdot 1 + 2 \cdot 2 = 5
\end{gathered}
$$
입니다. $[-1, 2]$에서 $0 \le f(x) \le 2$이므로 (2)대로 $0 \le 0 \le 5 \le 2 \cdot 3 = 6$입니다. 분할 $\{-1, 2\}$로 계산하면 (5)대로 $L = 0 \cdot 3 = 0$, $U = 2 \cdot 3 = 6$입니다.

(7)로 보면 $P = \{-1, 0\} \cup \{0, 2\}$이고, $[-1, 0]$의 분할 $\{-1, 0\}$에 대한 상합 $1$과 $[0, 2]$의 분할 $\{0, 2\}$에 대한 상합 $4$를 더한 것이 $U(P, f) = 5$입니다.
:::

:::counterexample[상한이 값으로 나오지 않는 작은 구간]
$[0, 2]$ 위에서 $x < 1$이면 $g(x) = x$, $1 \le x$이면 $g(x) = 0$인 함수 $g$와 분할 $\{0, 2\}$를 봅시다. $g$의 값의 집합은 $\{x : 0 \le x < 1\} \cup \{0\}$, 곧 $0$ 이상 $1$ 미만의 수 전체이므로 상한은 $1$이지만 $g(x) = 1$인 점은 없습니다. 그래도 상한은 있으므로 $M_1 = 1$이고 $U(\{0, 2\}, g) = 1 \cdot 2 = 2$입니다. 다르부 합을 최댓값으로 정의했다면 이 작은 구간에서는 정해지지 않았을 것입니다.

상한이 $1$이라는 것은 다음과 같습니다. $1$은 상계이고, $1$보다 작은 $c$에 대해 $\max\{c, 0\} < 1$이므로 [[order-properties-of-reals]]의 (8)에 의해 $\max\{c, 0\} < t < 1$인 $t$(두 수의 평균)가 있어 $g(t) = t > c$이므로 $c$는 상계가 아닙니다.
:::

:::counterexample[유계가 아닌 함수]
$[0, 1]$ 위에서 $h(0) = 0$, $0 < x$이면 $h(x) = 1/x$인 함수 $h$는 유계가 아니어서 다르부 합이 정의되지 않습니다. 실제로 $[0, 1]$의 어떤 분할 $P$에서도 첫째 작은 구간 $[0, x_1]$에서 $h$의 값의 집합은 위로 유계가 아닙니다. 실수 $B$가 주어지면 [[archimedean-property]]의 (1)에 의해 $\max\{B, 1/x_1\} < N$인 자연수 $N$이 있고, $t = 1/N$은 $0 < t < x_1$이며($1/x_1 < N$에서) $h(t) = N > B$이기 때문입니다. 그래서 $M_1$이 없습니다.
:::

## 확인 질문

:::check[$[0, 3]$ 위의 $f(x) = x$와 분할 $\{0, 1, 3\}$에 대한 $U(P, f) - L(P, f)$는?]
작은 구간 $[0, 1]$에서 $m_1 = 0$, $M_1 = 1$, $[1, 3]$에서 $m_2 = 1$, $M_2 = 3$입니다. (3)에 의해 $U - L = (1 - 0) \cdot 1 + (3 - 1) \cdot 2 = 5$입니다. 직접 계산해도 $U = 1 + 6 = 7$, $L = 0 + 2 = 2$입니다.
:::

:::check[$L(P, f) = U(P, f)$이면 $P$의 모든 작은 구간에서 $m_i = M_i$인가?]
그렇습니다. (3)에 의해 $\sum_{i=1}^{n} (M_i - m_i)\Delta x_i = 0$입니다. 어떤 $k$에서 $m_k < M_k$라면 그 항 $(M_k - m_k)\Delta x_k$가 양수이고 다른 항은 모두 $0$ 이상이므로 [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 (6)에 의해 합이 양수가 되어 맞지 않습니다. 따라서 모든 $i$에서 $m_i = M_i$이고, (1)에 의해 각 작은 구간에서 $f$는 값이 하나뿐인 함수입니다.
:::
