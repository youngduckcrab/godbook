---
title: 함숫값의 상한과 하한의 비교
title_en: Comparing Suprema and Infima of Function Values
aliases: [함수의 진동, 함숫값의 상한, 함숫값의 하한, 집합 위에서 유계, oscillation of a function, supremum of function values, infimum of function values, bounded on a set]
kind: proposition
field: real-analysis
msc: ["26A03"]
level: undergrad
summary: 실함수 f, g 가 공집합이 아닌 D 위에서 유계일 때, 점마다 f ≤ g 이면 상한과 하한도 그 순서이고, 합의 상한은 상한의 합 이하이며, 상수배와 상수 더하기에서 상한·하한이 어떻게 바뀌는지, 상한과 하한의 차(진동)가 r 이하인 것은 정확히 D 의 모든 두 점에서 값의 차가 r 이하일 때라는 것, 그리고 부분집합, 절댓값, 곱에 대한 진동의 비교.
requires: [subset, image-and-preimage, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, upper-bound-and-supremum, least-upper-bound-property, infimum-exists, supremum-and-arithmetic, interval, real-valued-function, bounded-function]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 1.3절 Absolute value and bounded functions, Proposition 1.3.7 (진술 p.38, 증명 p.39), 1.3.1 소절 연습문제 1.3.4, 1.3.5 (p.39), 1.3.7, 1.3.8 (p.40); 1.1.1 소절 연습문제 1.1.4 (p.27); 1.2.3 소절 Proposition 1.2.6 (p.32); 1.2.5 소절 연습문제 1.2.9 (p.35); 4.1.1 소절 Proposition 4.1.8 (p.158); 5.2.2 소절 Proposition 5.2.4 의 증명 (p.193), Proposition 5.2.5 앞 문단과 Proposition 5.2.6 의 증명 (p.194); 5.2.3 소절 Lemma 5.2.7 의 증명 (p.195)
    checked: original
    note: "(1)은 출처의 Proposition 1.3.7 이다. 출처는 sup 쪽만 증명하고(p.39, 상계를 넘겨 받는 같은 경로) inf 쪽은 연습문제 1.3.4 로 돌린다. 출처는 f, g 를 정의역 D 전체 위의 유계인 함수로 두고, 이 항목은 정의역 S 의 부분집합 D 위의 상 f(D) 로 쓴다. 출처는 sup_{x∈D} f(x) 를 sup f(D) 의 다른 표기로 정하고(p.38) 이 항목은 sup f(D) 만 쓴다. (2)는 출처 연습문제 1.3.7 a) 이다. (3)의 상한·하한의 식은 출처의 Proposition 1.2.6 (1.2.3 소절, p.32)을 A = f(D) 에 쓴 것이고, 출처는 Proposition 5.2.4 의 증명(p.193)에서 α ≥ 0 인 경우를 작은 구간 위의 하한에 쓴다. (4)의 이름 '진동'은 출처에서 이 뜻으로 찾지 못했다: 책 전체에서 'oscillat' 는 3.1 절 p.116 의 sin(1/x) 에 대한 동사 'oscillates' 한 곳, 'spread' 는 0건, 'sup … − inf' 꼴은 0건이고, 'M_i − m_i' 꼴은 Example 5.1.14 와 Lemma 5.2.7 의 증명 안의 식 세 곳(p.188, 195)이다. (4)의 (i)과 (ii)가 같은 말이라는 것은 출처 연습문제 1.2.9(두 집합의 합의 상한)를 A = f(D), B = −f(D) 에 쓰면 나오는 것과 같은 내용이고, 이 항목은 그 연습문제를 거치지 않고 상한을 두 번 넘겨 받아 증명한다. 출처의 Lemma 5.2.7 의 증명(p.195)은 작은 구간마다 최대점과 최소점을 잡아 M_i − m_i = f(x) − f(y) 로 쓰는데, (4)는 점을 잡지 않고 같은 자리에 쓰려고 둔 것이다. (5)는 출처 연습문제 1.1.4(inf B ≤ inf A ≤ sup A ≤ sup B)를 f(A) ⊆ f(D) 에 쓴 것이다. 'D 위에서 유계' 단락의 연산에 관한 문장은 출처 연습문제 1.3.8(αf 와 f + g 의 유계성)과 같은 내용을 담는다. (7)의 증명의 항등식 f(x)g(x) − f(y)g(y) = f(x)(g(x) − g(y)) + (f(x) − f(y))g(y) 는 출처 4.1.1 소절 Proposition 4.1.8(곱의 미분법) 뒤 문단(p.158)과 4.1.3 소절 연습문제 4.1.1 의 힌트(p.160)에 나오는 항등식에서 c 를 y 로 바꾼 꼴이다. 출처는 5.2 절에서 Proposition 1.3.7 을 Proposition 5.2.6 의 증명(p.194)에, 연습문제 1.3.7 을 Proposition 5.2.5 앞 문단(p.194)에 다르부 합에 대해 쓴다. 예시 '구간 위의 x 와 1 − x' 는 출처 연습문제 1.3.7 b)(진짜 부등식이 되는 예를 찾으라는 물음)에 대한 답이 되는 예이다. 반례 '점마다 f ≤ g 여도 f 의 상한이 g 의 하한보다 클 수 있다' 는 출처 p.39 의 '흔한 실수' 문단(식 (1.2))과 연습문제 1.3.5 b)와 같은 물음에 대한 예이고, 그 반례의 '모든 x, y 에서 f(x) ≤ g(y) 이면' 문장은 연습문제 1.3.5 a) 이다. 반례 'D 가 공집합인 경우와 유계가 아닌 경우' 는 출처 p.38 의 각주(유계 가정은 간단히 하려는 것이고 확장된 실수를 쓰면 뺄 수 있다)와 연습문제 1.3.6 이 다루는 가정에 관한 것이고, 출처는 1.2.3 소절 Definition 1.2.9 (p.33)에서 공집합의 상한을 −∞ 로 정하지만 이 사이트는 그렇게 정하지 않는다. 확인 질문 '진동이 0 이면' 은 출처 연습문제 5.1.15(5.1.4 소절, p.190, L(P, f) = U(P, f) 이면 f 는 상수함수)와 같은 발상이고, 출처 3.6.1 소절 Corollary 3.6.3 앞 문단(p.150)의 'f(I) is a single point if and only if f is constant' 와 같은 결론이다. 출처 p.38 의 예 x² − 9x + 1 은 쓰지 않았다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 넘겨짚은 일반 문장 3건과 출처 메모의 가리킴을 고쳤다."
added: 2026-11-20
---

:::statement
부분집합은 [[subset]]의 것이고, 실함수와 그 합 $f + g$, 차 $f - g$, 곱 $fg$, 상수배 $kf$, 절댓값 $|f|$, 상수함수, 제한 $f|_D$는 [[real-valued-function]]의 것이며, 상 $f(D) = \{f(x) : x \in D\}$는 [[image-and-preimage]]의 것이다. 상계, 하계, 위로·아래로 유계, 유계(집합에 대하여), 상한 $\sup$, 하한 $\inf$는 [[upper-bound-and-supremum]]의 것이고, 함수의 유계는 [[bounded-function]]의 것이며, 실수 $k$와 $\mathbb{R}$의 공집합이 아닌 부분집합 $A$에 대한 집합 $k + A$, $kA$는 [[supremum-and-arithmetic|상한과 덧셈·곱셈]]의 것이다. 절댓값은 [[absolute-value]]의 것이다.

아래에서 $S$는 $\mathbb{R}$의 부분집합, $f$와 $g$는 $S$ 위의 실함수, $D$는 $S$의 부분집합이다. 실수 $c$에 대하여 $f + c$는 $f$와 $S$ 위의 값이 $c$인 상수함수의 합, 곧 모든 $x \in S$에서 $(f + c)(x) = f(x) + c$인 함수이다. $(f + g)(D)$, $(kf)(D)$, $(f + c)(D)$, $|f|(D)$, $(fg)(D)$는 각각 함수 $f + g$, $kf$, $f + c$, $|f|$, $fg$에 의한 $D$의 상이다.

**집합 위에서 유계.** $f$가 $D$ **위에서 유계**(bounded on $D$)인 것은 정확히 집합 $f(D)$가 유계일 때이다. 다음이 성립한다.

- $f$가 $D$ 위에서 유계인 것은 정확히 제한 $f|_D : D \to \mathbb{R}$가 유계인 함수일 때이고, 또 정확히 어떤 실수 $B$가 있어 모든 $x \in D$에서 $|f(x)| \le B$일 때이다.
- $f$가 유계인 함수이면 $f$는 $S$의 모든 부분집합 위에서 유계이다. $f$가 $D$ 위에서 유계이고 $A \subseteq D$이면 $f$는 $A$ 위에서 유계이다.
- $f$와 $g$가 $D$ 위에서 유계이고 $k$와 $c$가 실수이면 $f + g$, $f - g$, $fg$, $kf$, $|f|$, $f + c$도 $D$ 위에서 유계이다.
- $D$가 공집합이 아니고 $f$가 $D$ 위에서 유계이면 $f(D)$는 공집합이 아니고, $\sup f(D)$와 $\inf f(D)$가 있으며, 모든 $x \in D$에서 $\inf f(D) \le f(x) \le \sup f(D)$이다.

아래 (1)–(7)에서 $D$는 공집합이 아니고 $f$와 $g$는 $D$ 위에서 유계이다.

1. (함숫값의 비교) $D$의 모든 $x$에서 $f(x) \le g(x)$이면 $\sup f(D) \le \sup g(D)$이고 $\inf f(D) \le \inf g(D)$이다.
2. (합) $\sup (f + g)(D) \le \sup f(D) + \sup g(D)$이고 $\inf f(D) + \inf g(D) \le \inf (f + g)(D)$이다.
3. (상수배와 상수 더하기) 실수 $k$, $c$에 대하여 집합의 등식 $(kf)(D) = k\,f(D)$와 $(f + c)(D) = c + f(D)$가 성립한다. 그리고
   - $0 < k$이면 $\sup (kf)(D) = k \sup f(D)$이고 $\inf (kf)(D) = k \inf f(D)$이다.
   - $k < 0$이면 $\sup (kf)(D) = k \inf f(D)$이고 $\inf (kf)(D) = k \sup f(D)$이다.
   - $k = 0$이면 $(kf)(D) = \{0\}$이고 $\sup (kf)(D) = \inf (kf)(D) = 0$이다. 이 값은 $k \sup f(D)$, $k \inf f(D)$와 같다.
   - $\sup (f + c)(D) = c + \sup f(D)$이고 $\inf (f + c)(D) = c + \inf f(D)$이다.

   특히 모든 실수 $k$, $c$에 대하여 $\sup (kf)(D) - \inf (kf)(D) = |k|\,(\sup f(D) - \inf f(D))$이고 $\sup (f + c)(D) - \inf (f + c)(D) = \sup f(D) - \inf f(D)$이다.
4. (진동) 실수 $\sup f(D) - \inf f(D)$를 $D$ 위에서의 $f$의 **진동**(oscillation)이라 한다. 기호는 따로 두지 않는다. 실수 $r$에 대하여 다음 세 조건은 서로 같은 말이다.
   - (i) $\sup f(D) - \inf f(D) \le r$이다.
   - (ii) $D$의 모든 $x$, $y$에서 $f(x) - f(y) \le r$이다.
   - (iii) $D$의 모든 $x$, $y$에서 $|f(x) - f(y)| \le r$이다.

   특히 $D$의 모든 $x$, $y$에서 $|f(x) - f(y)| \le \sup f(D) - \inf f(D)$이고, $0 \le \sup f(D) - \inf f(D)$이다.
5. (부분집합) $A$가 $D$의 공집합이 아닌 부분집합이면 $f$는 $A$ 위에서 유계이고
   $$
   \begin{aligned}
   &\inf f(D) \le \inf f(A) \\
   &\quad \le \sup f(A) \le \sup f(D)
   \end{aligned}
   $$
   이다. 따라서 $\sup f(A) - \inf f(A) \le \sup f(D) - \inf f(D)$이다.
6. (절댓값) $\sup |f|(D) - \inf |f|(D) \le \sup f(D) - \inf f(D)$이다.
7. (곱) 실수 $B$, $C$가 모든 $x \in D$에서 $|f(x)| \le B$이고 $|g(x)| \le C$를 만족하면
   $$
   \begin{aligned}
   &\sup (fg)(D) - \inf (fg)(D) \\
   &\quad \le C\,\bigl(\sup f(D) - \inf f(D)\bigr) \\
   &\qquad + B\,\bigl(\sup g(D) - \inf g(D)\bigr)
   \end{aligned}
   $$
   이다. 특히 $C = B$이면 오른쪽은 $B\,\bigl((\sup f(D) - \inf f(D)) + (\sup g(D) - \inf g(D))\bigr)$이다.
:::

:::english
Subsets are as in the entry on subsets; real-valued functions and their sum $f + g$, difference $f - g$, product $fg$, scalar multiple $kf$, absolute value $|f|$, constant functions, and the restriction $f|_D$ are as in the entry on real-valued functions; the image $f(D) = \{f(x) : x \in D\}$ is as in the entry on images and preimages. Upper and lower bounds, bounded above and below, bounded (for sets), the supremum $\sup$ and the infimum $\inf$ are as in the entry on upper bounds and suprema; boundedness of functions is as in the entry on bounded functions; and for a real number $k$ and a nonempty subset $A$ of $\mathbb{R}$, the sets $k + A$ and $kA$ are as in the entry on suprema and arithmetic. Absolute values are as in the entry on absolute value.

Below, $S$ is a subset of $\mathbb{R}$, $f$ and $g$ are real-valued functions on $S$, and $D$ is a subset of $S$. For a real number $c$, $f + c$ denotes the sum of $f$ and the constant function on $S$ with value $c$; that is, $(f + c)(x) = f(x) + c$ for all $x \in S$. The sets $(f + g)(D)$, $(kf)(D)$, $(f + c)(D)$, $|f|(D)$ and $(fg)(D)$ are the images of $D$ under the functions $f + g$, $kf$, $f + c$, $|f|$ and $fg$, respectively.

**Bounded on a set.** We say that $f$ is **bounded on $D$** exactly when the set $f(D)$ is bounded. The following hold.

- $f$ is bounded on $D$ exactly when the restriction $f|_D : D \to \mathbb{R}$ is a bounded function, and also exactly when there is a real number $B$ with $|f(x)| \le B$ for all $x \in D$.
- If $f$ is a bounded function, then $f$ is bounded on every subset of $S$. If $f$ is bounded on $D$ and $A \subseteq D$, then $f$ is bounded on $A$.
- If $f$ and $g$ are bounded on $D$ and $k$ and $c$ are real numbers, then $f + g$, $f - g$, $fg$, $kf$, $|f|$ and $f + c$ are also bounded on $D$.
- If $D$ is nonempty and $f$ is bounded on $D$, then $f(D)$ is nonempty, $\sup f(D)$ and $\inf f(D)$ exist, and $\inf f(D) \le f(x) \le \sup f(D)$ for all $x \in D$.

In (1)–(7) below, $D$ is nonempty and $f$ and $g$ are bounded on $D$.

1. (Comparing function values) If $f(x) \le g(x)$ for all $x$ in $D$, then $\sup f(D) \le \sup g(D)$ and $\inf f(D) \le \inf g(D)$.
2. (Sums) $\sup (f + g)(D) \le \sup f(D) + \sup g(D)$ and $\inf f(D) + \inf g(D) \le \inf (f + g)(D)$.
3. (Scalar multiples and adding a constant) For real numbers $k$ and $c$ we have the set equalities $(kf)(D) = k\,f(D)$ and $(f + c)(D) = c + f(D)$. Moreover,
   - if $0 < k$, then $\sup (kf)(D) = k \sup f(D)$ and $\inf (kf)(D) = k \inf f(D)$;
   - if $k < 0$, then $\sup (kf)(D) = k \inf f(D)$ and $\inf (kf)(D) = k \sup f(D)$;
   - if $k = 0$, then $(kf)(D) = \{0\}$ and $\sup (kf)(D) = \inf (kf)(D) = 0$; this value equals $k \sup f(D)$ and $k \inf f(D)$;
   - $\sup (f + c)(D) = c + \sup f(D)$ and $\inf (f + c)(D) = c + \inf f(D)$.

   In particular, for all real numbers $k$ and $c$ we have $\sup (kf)(D) - \inf (kf)(D) = |k|\,(\sup f(D) - \inf f(D))$ and $\sup (f + c)(D) - \inf (f + c)(D) = \sup f(D) - \inf f(D)$.
4. (Oscillation) The real number $\sup f(D) - \inf f(D)$ is called the **oscillation** of $f$ on $D$. No separate symbol is introduced for it. For a real number $r$, the following three conditions are equivalent.
   - (i) $\sup f(D) - \inf f(D) \le r$.
   - (ii) $f(x) - f(y) \le r$ for all $x$, $y$ in $D$.
   - (iii) $|f(x) - f(y)| \le r$ for all $x$, $y$ in $D$.

   In particular, $|f(x) - f(y)| \le \sup f(D) - \inf f(D)$ for all $x$, $y$ in $D$, and $0 \le \sup f(D) - \inf f(D)$.
5. (Subsets) If $A$ is a nonempty subset of $D$, then $f$ is bounded on $A$ and
   $$
   \begin{aligned}
   &\inf f(D) \le \inf f(A) \\
   &\quad \le \sup f(A) \le \sup f(D).
   \end{aligned}
   $$
   Consequently $\sup f(A) - \inf f(A) \le \sup f(D) - \inf f(D)$.
6. (Absolute value) $\sup |f|(D) - \inf |f|(D) \le \sup f(D) - \inf f(D)$.
7. (Products) If real numbers $B$ and $C$ satisfy $|f(x)| \le B$ and $|g(x)| \le C$ for all $x \in D$, then
   $$
   \begin{aligned}
   &\sup (fg)(D) - \inf (fg)(D) \\
   &\quad \le C\,\bigl(\sup f(D) - \inf f(D)\bigr) \\
   &\qquad + B\,\bigl(\sup g(D) - \inf g(D)\bigr).
   \end{aligned}
   $$
   In particular, if $C = B$, the right-hand side is $B\,\bigl((\sup f(D) - \inf f(D)) + (\sup g(D) - \inf g(D))\bigr)$.
:::

## 직관

$\sup f(D)$와 $\inf f(D)$는 $D$ 위에서 $f$의 그래프를 위아래로 끼우는 가장 좁은 가로 띠의 위쪽 끝과 아래쪽 끝입니다. 점마다 $f$가 $g$ 아래에 있으면 $f$의 띠도 $g$의 띠보다 위로 올라가지 않습니다((1)). 그러나 두 띠가 겹칠 수는 있어서, $f$의 위쪽 끝이 $g$의 아래쪽 끝보다 높을 수 있습니다(아래 반례). 합의 상한은 상한의 합 이하이고((2)), 아래 첫째 예시에서는 $f$와 $g$가 가장 커지는 점이 달라서 합의 상한이 상한의 합보다 작습니다.

진동 $\sup f(D) - \inf f(D)$는 그 띠의 폭입니다. 하루 기온의 일교차(최고 기온 − 최저 기온)에 비유할 수 있습니다. 하루 중 어느 두 순간의 기온 차도 일교차를 넘지 않고, 거꾸로 어느 두 순간의 기온 차도 $r$도를 넘지 않았다면 일교차도 $r$도 이하입니다. 이것이 (4)의 (i)과 (ii)입니다. 비유가 맞지 않는 곳은, 기온과 달리 함수는 상한이나 하한을 값으로 갖지 않을 수 있다는 점입니다. 그래서 (4)의 증명은 가장 큰 값이 나오는 점을 고르지 않고, 상한의 정의를 두 번 써서 "모든 $x$, $y$"에 대한 부등식만으로 진행합니다.

상수를 더하면 띠가 통째로 옮겨 가므로 폭이 그대로이고, $k$를 곱하면 폭이 $|k|$배가 됩니다($k < 0$이면 띠가 뒤집혀 위쪽 끝과 아래쪽 끝이 바뀝니다)((3)). 절댓값을 씌우면 $0$보다 아래의 값이 위로 접혀 올라오므로 폭이 줄어들 수는 있어도 늘지는 않습니다((6)). 곱 $fg$의 폭은 $f$와 $g$의 폭을 각각 다른 쪽 함수의 크기로 늘린 것의 합을 넘지 않습니다((7)).

## 증명

:::idea
상한을 위에서 누를 때는 늘 같은 일을 한다: 비교하려는 수가 집합의 상계임을 보이고, 상한의 정의("모든 상계 이하")를 쓴다. 진동은 이것을 두 번 한다. $y$를 고정하고 $x$에 대해 상한을 넘겨 받은 뒤, 그 결과를 $y$에 대해 하한으로 넘겨 받는다.
:::

:::hint
(4)의 (ii)에서 (i)로 갈 때, $y \in D$를 고정하면 $r + f(y)$는 $f(D)$의 상계입니다. 그러면 $\sup f(D) - r$은 $f(D)$의 무엇이 될까요?
:::

:::hint
(6)과 (7)은 (4)의 (ii)를 함수 $|f|$와 $fg$에 대해 확인하면 됩니다. $|f(x)| - |f(y)|$에는 역삼각부등식을, $f(x)g(x) - f(y)g(y)$에는 $f(x)\,(g(x) - g(y)) + (f(x) - f(y))\,g(y)$로 나누는 항등식을 씁니다.
:::

:::proof
번호만 쓴 "(2)의 (iii)" 같은 것은 [[order-properties-of-reals]]의 번호이고, (K…)는 [[real-number-arithmetic]]의 번호이며, "이 항목의 (n)"은 위 진술의 번호이다. 상한이 있다는 것은 [[least-upper-bound-property|최소상계 성질]] (U)에서, 하한이 있다는 것은 [[infimum-exists|하한의 존재]]의 (4)에서 얻는다. 상한은 상계이고 하한은 하계이며, 집합의 모든 상계는 상한 이상이고 모든 하계는 하한 이하라는 것은 [[upper-bound-and-supremum]]의 상한·하한의 정의이다. [[image-and-preimage]]의 (1)에 의해 $x \in D$이면 $f(x) \in f(D)$이고, $f(D)$의 원소는 모두 어떤 $x \in D$에 대한 $f(x)$이다. 그래서 "모든 $x \in D$에서 $f(x) \le b$"이면 $b$는 $f(D)$의 상계이고, 하계도 같다. 함수 $f + g$, $kf$, $|f|$, $fg$의 값은 [[real-valued-function]]의 (4)에 의해 $f(x) + g(x)$, $k f(x)$, $|f(x)|$, $f(x)g(x)$이고, $f + c$의 값은 그 항목의 (3), (4)에 의해 $f(x) + c$이다.

**집합 위에서 유계 단락.**

첫째 문장. [[real-valued-function]]의 (6)에 의해 $f|_D$는 $D$ 위의 실함수이고 모든 $x \in D$에서 $f|_D(x) = f(x)$이다. 따라서 [[image-and-preimage]]의 (1)에 의해 실수 $y$가 $f|_D(D)$의 원소인 것은 정확히 $f|_D(x) = y$인 $x \in D$가 있을 때, 곧 $f(x) = y$인 $x \in D$가 있을 때이고, 이것은 $y \in f(D)$와 같다. 그러므로 $f|_D(D) = f(D)$이다. [[bounded-function]]의 (2)를 $D$ 위의 실함수 $f|_D$에 쓰면 $f|_D$가 유계인 것은 정확히 집합 $f|_D(D) = f(D)$가 유계일 때, 곧 $f$가 $D$ 위에서 유계일 때이다. 또 [[bounded-function]]의 유계의 정의에 의해 $f|_D$가 유계인 것은 정확히 어떤 실수 $B$가 있어 모든 $x \in D$에서 $|f|_D(x)| \le B$, 곧 $|f(x)| \le B$일 때이다.

둘째 문장. $f$가 유계인 함수이면 [[bounded-function]]의 정의에 의해 모든 $x \in S$에서 $|f(x)| \le B$인 실수 $B$가 있다. $S$의 부분집합 $E$의 원소는 $S$의 원소이므로 모든 $x \in E$에서 $|f(x)| \le B$이고, 첫째 문장에 의해 $f$는 $E$ 위에서 유계이다. $f$가 $D$ 위에서 유계이면 첫째 문장에 의해 모든 $x \in D$에서 $|f(x)| \le B$인 $B$가 있고, $A \subseteq D$이면 모든 $x \in A$에서도 그러하므로 $f$는 $A$ 위에서 유계이다.

셋째 문장. 첫째 문장에 의해 모든 $x \in D$에서 $|f(x)| \le B$이고 $|g(x)| \le C$인 실수 $B$, $C$가 있고, $f|_D$와 $g|_D$는 $D$ 위의 유계인 실함수이다. [[bounded-function]]의 (5)를 $f|_D$, $g|_D$에 쓰고 $f|_D(x) = f(x)$, $g|_D(x) = g(x)$를 넣으면, 모든 $x \in D$에서 $|f(x) + g(x)| \le B + C$, $|f(x) - g(x)| \le B + C$, $|f(x)\,g(x)| \le BC$, $|k f(x)| \le |k|\,B$, $\bigl|\,|f(x)|\,\bigr| \le B$이다. 이 왼쪽은 각각 $|(f + g)(x)|$, $|(f - g)(x)|$, $|(fg)(x)|$, $|(kf)(x)|$, $\bigl|\,|f|(x)\,\bigr|$이므로 첫째 문장에 의해 다섯 함수는 $D$ 위에서 유계이다. 값이 $c$인 상수함수를 $h$라 하면 모든 $x \in D$에서 $|h(x)| = |c| \le |c|$((1)의 (iv))이므로 $h$는 $D$ 위에서 유계이고, 방금 보인 합의 경우에 의해 $f + c = f + h$도 $D$ 위에서 유계이다.

넷째 문장. $D$의 원소 $x_0$이 있으므로 $f(x_0) \in f(D)$이고 $f(D)$는 공집합이 아니다. $f(D)$는 유계, 곧 위로 유계이고 아래로 유계이므로 (U)에 의해 $\sup f(D)$가 있고 [[infimum-exists|하한의 존재]]의 (4)에 의해 $\inf f(D)$가 있다. $x \in D$이면 $f(x) \in f(D)$이므로, 상한은 상계이고 하한은 하계라는 것에 의해 $\inf f(D) \le f(x) \le \sup f(D)$이다.

**이 항목의 (1).** $x \in D$이면 가정과 단락의 넷째 문장(함수 $g$에 쓴 것)에 의해 $f(x) \le g(x) \le \sup g(D)$이고, (1)의 (v)에 의해 $f(x) \le \sup g(D)$이다. 따라서 $\sup g(D)$는 $f(D)$의 상계이고, 상한의 정의에 의해 $\sup f(D) \le \sup g(D)$이다. 또 $x \in D$이면 단락의 넷째 문장과 가정에 의해 $\inf f(D) \le f(x) \le g(x)$이므로 $\inf f(D) \le g(x)$이다. 따라서 $\inf f(D)$는 $g(D)$의 하계이고, 하한의 정의에 의해 $\inf f(D) \le \inf g(D)$이다.

**이 항목의 (2).** 단락의 셋째 문장에 의해 $f + g$는 $D$ 위에서 유계이므로 넷째 문장에 의해 $\sup (f + g)(D)$와 $\inf (f + g)(D)$가 있다. $x \in D$이면 $f(x) \le \sup f(D)$이고 $g(x) \le \sup g(D)$이므로 (2)의 (iii)에 의해 $(f + g)(x) = f(x) + g(x) \le \sup f(D) + \sup g(D)$이다. 따라서 $\sup f(D) + \sup g(D)$는 $(f + g)(D)$의 상계이고, 상한의 정의에 의해 $\sup (f + g)(D) \le \sup f(D) + \sup g(D)$이다. 또 $x \in D$이면 $\inf f(D) \le f(x)$이고 $\inf g(D) \le g(x)$이므로 (2)의 (iii)에 의해 $\inf f(D) + \inf g(D) \le (f + g)(x)$이다. 따라서 $\inf f(D) + \inf g(D)$는 $(f + g)(D)$의 하계이고, 하한의 정의에 의해 $\inf f(D) + \inf g(D) \le \inf (f + g)(D)$이다.

**이 항목의 (3).** $s = \sup f(D)$, $t = \inf f(D)$로 두고, $A = f(D)$로 쓴다. $A$는 공집합이 아니고 위로도 아래로도 유계이다(단락의 넷째 문장). 실수 $y$가 $(kf)(D)$의 원소인 것은 정확히 $y = k f(x)$인 $x \in D$가 있을 때이다. 이런 $x$가 있으면 $a = f(x)$는 $A$의 원소이고 $y = ka$이므로 $y \in kA$이다. 거꾸로 $y \in kA$이면 $y = ka$인 $a \in A$가 있고, $a = f(x)$인 $x \in D$가 있으므로 $y = k f(x)$이고 $y \in (kf)(D)$이다. 그러므로 $(kf)(D) = kA$이다. 같은 방법으로, $(f + c)(x) = f(x) + c = c + f(x)$((K1))이므로 $(f + c)(D) = c + A$이다.

$0 < k$이면 [[supremum-and-arithmetic|상한과 덧셈·곱셈]]의 (2)에 의해 $\sup (kA) = ks$, $\inf (kA) = kt$이다. $k < 0$이면 그 항목의 (3)에 의해 $\sup (kA) = kt$, $\inf (kA) = ks$이다. $k = 0$이면 (K9)에 의해 $(kf)(D)$의 원소 $0 \cdot f(x)$는 모두 $0$이고, $D$가 공집합이 아니므로 $0$은 그 원소이다. 따라서 $(kf)(D) = \{0\}$이다. $\{0\}$의 원소는 $0$뿐이고 $0 \le 0$이므로 $0$은 $\{0\}$의 최댓값이자 최솟값이며, [[upper-bound-and-supremum]]의 (2)에 의해 $\sup \{0\} = \inf \{0\} = 0$이다. (K9)에 의해 $0 \cdot s = 0 \cdot t = 0$이다. 상수 더하기는 [[supremum-and-arithmetic|상한과 덧셈·곱셈]]의 (1)에 의해 $\sup (c + A) = c + s$, $\inf (c + A) = c + t$이다.

진동에 관한 문장. $0 < k$이면 진동은 $ks - kt$이고, (K3), (K12)의 (ii)에 의해 $ks - kt = k(s - t)$이며, [[absolute-value]]의 (1)에 의해 $|k| = k$이다. $k < 0$이면 진동은 $kt - ks$이고, (K3), (K9), (K12)의 (ii), (iv)에 의해 $kt - ks = -(k(s - t)) = (-k)(s - t)$이며, [[absolute-value]]의 (1)에 의해 $|k| = -k$이다. $k = 0$이면 진동은 $0 - 0 = 0$이고, $|0| = 0$이므로 (K9)에 의해 $|k|(s - t) = 0$이다. 상수 더하기의 진동은 (K1), (K2), (K12)의 (iv)에 의해 $(c + s) - (c + t) = s - t$이다.

**이 항목의 (4).** $s = \sup f(D)$, $t = \inf f(D)$로 둔다. 세 조건을 (i)에서 (iii)으로, (iii)에서 (ii)로, (ii)에서 (i)로 차례로 끌어낸다.

(i)에서 (iii). $s - t \le r$이라 하고 $x$, $y \in D$라 하자. 단락의 넷째 문장에 의해 $t \le f(x) \le s$이고 $t \le f(y) \le s$이다. (3)의 (iii)에 의해 $-f(y) \le -t$이므로 (2)의 (iii)에 의해 $f(x) - f(y) \le s - t$이다. $x$와 $y$를 바꾸면 $f(y) - f(x) \le s - t$이고, (K9)와 (K12)의 (iv)에 의해 $f(y) - f(x) = -(f(x) - f(y))$이므로 (3)의 (iii)과 (K9)에 의해 $-(s - t) \le f(x) - f(y)$이다. 따라서 [[absolute-value]]의 (7)에 의해 $|f(x) - f(y)| \le s - t$이고, (1)의 (v)에 의해 $|f(x) - f(y)| \le r$이다.

(iii)에서 (ii). $x$, $y \in D$이면 [[absolute-value]]의 (6)에 의해 $f(x) - f(y) \le |f(x) - f(y)|$이고, (iii)과 (1)의 (v)에 의해 $f(x) - f(y) \le r$이다.

(ii)에서 (i). (ii)를 가정하고 $y$를 $D$의 원소라 하자. $x \in D$이면 $f(x) - f(y) \le r$이고, (2)의 (i)로 양변에 $f(y)$를 더하면 (K1), (K2), (K4), (K8)의 (ii)에 의해 $f(x) \le r + f(y)$이다. 따라서 $r + f(y)$는 $f(D)$의 상계이고, 상한의 정의에 의해 $s \le r + f(y)$이다. (2)의 (i)로 양변에 $-r$을 더하면 $s - r \le f(y)$이다. 이것이 $D$의 모든 $y$에서 성립하므로 $s - r$은 $f(D)$의 하계이고, 하한의 정의에 의해 $s - r \le t$이다. (2)의 (i)로 양변에 $r - t$를 더하면 (K1), (K2), (K4), (K8)의 (ii)에 의해 $s - t \le r$이다.

특히. $r = s - t$로 두면 (1)의 (iv)에 의해 (i)이 성립하므로 (iii)에 의해 $D$의 모든 $x$, $y$에서 $|f(x) - f(y)| \le s - t$이다. $D$의 원소 $x_0$이 있고, (K8)의 (ii)와 [[absolute-value]]의 (2)에 의해 $|f(x_0) - f(x_0)| = |0| = 0$이므로 $0 \le s - t$이다.

**이 항목의 (5).** 단락의 둘째 문장에 의해 $f$는 $A$ 위에서 유계이다. $y \in f(A)$이면 $y = f(x)$인 $x \in A$가 있고, $A \subseteq D$이므로 $x \in D$이며 $y \in f(D)$이다. 따라서 $f(A) \subseteq f(D)$이다. $A$의 원소 $x_0$에 대해 $f(x_0) \in f(A)$이므로 $f(A)$는 공집합이 아니고, $f(D)$는 위로도 아래로도 유계이다. [[supremum-and-arithmetic|상한과 덧셈·곱셈]]의 (4)를 $f(A) \subseteq f(D)$에 쓰면 $\sup f(A) \le \sup f(D)$이고 $\inf f(D) \le \inf f(A)$이다. 가운데 부등식은 이 항목의 (4)의 마지막 문장을 $A$에 쓴 $0 \le \sup f(A) - \inf f(A)$와 (3)의 (i)에서 나온다. 마지막으로 $\inf f(D) \le \inf f(A)$에서 (3)의 (iii)에 의해 $-\inf f(A) \le -\inf f(D)$이고, 이것과 $\sup f(A) \le \sup f(D)$를 (2)의 (iii)으로 더하면 $\sup f(A) - \inf f(A) \le \sup f(D) - \inf f(D)$이다.

**이 항목의 (6).** 단락의 셋째 문장에 의해 $|f|$는 $D$ 위에서 유계이다. $x$, $y \in D$라 하자. [[absolute-value]]의 (6)에 의해
$$
|f|(x) - |f|(y) = |f(x)| - |f(y)| \le \bigl|\,|f(x)| - |f(y)|\,\bigr|
$$
이고, [[triangle-inequality]]의 (2)(역삼각부등식)에 의해 이것은 $|f(x) - f(y)|$ 이하이며, 이 항목의 (4)의 마지막 문장에 의해 $|f(x) - f(y)| \le \sup f(D) - \inf f(D)$이다. (1)의 (v)에 의해 $|f|(x) - |f|(y) \le \sup f(D) - \inf f(D)$이다. 이것이 $D$의 모든 $x$, $y$에서 성립하므로, 이 항목의 (4)를 함수 $|f|$와 $r = \sup f(D) - \inf f(D)$에 쓰면 (ii)에서 (i)이 나와 $\sup |f|(D) - \inf |f|(D) \le \sup f(D) - \inf f(D)$이다.

**이 항목의 (7).** 단락의 셋째 문장에 의해 $fg$는 $D$ 위에서 유계이다. $p = \sup f(D) - \inf f(D)$, $q = \sup g(D) - \inf g(D)$로 두고 $x$, $y \in D$라 하자. (K1)–(K4), (K8)의 (ii), (K12)의 (i), (ii)에 의해
$$
f(x)g(x) - f(y)g(y) = f(x)\bigl(g(x) - g(y)\bigr) + \bigl(f(x) - f(y)\bigr)g(y)
$$
이다(오른쪽을 풀면 $f(x)g(x) - f(x)g(y) + f(x)g(y) - f(y)g(y)$이다). [[triangle-inequality]]의 (1)과 [[absolute-value]]의 (4)에 의해
$$
\bigl|f(x)g(x) - f(y)g(y)\bigr| \le |f(x)|\,\bigl|g(x) - g(y)\bigr| + \bigl|f(x) - f(y)\bigr|\,|g(y)|
$$
이다. [[absolute-value]]의 (2)에 의해 네 절댓값은 모두 $0$ 이상이고, 가정에 의해 $|f(x)| \le B$, $|g(y)| \le C$이며, 이 항목의 (4)의 마지막 문장에 의해 $|g(x) - g(y)| \le q$, $|f(x) - f(y)| \le p$이다. (11)의 (i)에 의해 $|f(x)|\,|g(x) - g(y)| \le Bq$이고 $|f(x) - f(y)|\,|g(y)| \le pC$이며, (2)의 (iii)과 (1)의 (v)에 의해 오른쪽은 $Bq + pC$ 이하이다. [[absolute-value]]의 (6)과 (1)의 (v)에 의해
$$
(fg)(x) - (fg)(y) = f(x)g(x) - f(y)g(y) \le Bq + pC = Cp + Bq
$$
이다((K1)). 이것이 $D$의 모든 $x$, $y$에서 성립하므로, 이 항목의 (4)를 함수 $fg$와 $r = Cp + Bq$에 쓰면 (ii)에서 (i)이 나와 $\sup (fg)(D) - \inf (fg)(D) \le Cp + Bq$이다. $C = B$이면 (K3)에 의해 $Bp + Bq = B(p + q)$이다. $\blacksquare$
:::

## 예시와 반례

:::example[구간 위의 x 와 1 − x]
$S = \mathbb{R}$, $D = [0, 1]$로 두고 $f(x) = x$, $g(x) = 1 - x$로 정한 실함수 $f$, $g$를 생각합니다. $x \in D$이면 $0 \le x \le 1$이고, [[order-properties-of-reals]]의 (3)의 (iii)과 (2)의 (i)에 의해 $0 \le 1 - x \le 1$입니다. 따라서 $f(D)$와 $g(D)$의 원소는 모두 $0$ 이상 $1$ 이하입니다. $f(1) = 1$, $g(0) = 1$이 각 집합의 원소이므로 $1$은 두 집합의 최댓값이고, $f(0) = 0$, $g(1) = 0$이므로 $0$은 두 집합의 최솟값입니다. [[upper-bound-and-supremum|상계와 상한]]의 (2)에 의해 $\sup f(D) = \sup g(D) = 1$이고 $\inf f(D) = \inf g(D) = 0$입니다.

한편 모든 $x$에서 $(f + g)(x) = x + (1 - x) = 1$이므로 $(f + g)(D) = \{1\}$이고 $\sup (f + g)(D) = \inf (f + g)(D) = 1$입니다. 그래서 (2)의 두 부등식은 이 경우
$$
\begin{aligned}
\sup (f + g)(D) &= 1 < 2 = \sup f(D) + \sup g(D), \\
\inf f(D) + \inf g(D) &= 0 < 1 = \inf (f + g)(D)
\end{aligned}
$$
로 모두 등호가 아닙니다. $f$가 가장 커지는 점($x = 1$)과 $g$가 가장 커지는 점($x = 0$)이 다릅니다. 진동은 $f$와 $g$가 각각 $1$이고 $f + g$는 $0$입니다.
:::

:::example[부호가 바뀌는 함수의 진동]
$S = \mathbb{R}$, $D = [-1, 1]$, $f(x) = x$로 둡니다. $f(D) = D$이고, $1$과 $-1$이 $D$의 최댓값과 최솟값이므로 $\sup f(D) = 1$, $\inf f(D) = -1$이며 진동은 $2$입니다. (4)에 의해 $D$의 모든 $x$, $y$에서 $|x - y| \le 2$이고, $r = 3/2$이면 (ii)가 성립하지 않는 $x = 1$, $y = -1$($f(x) - f(y) = 2$)이 있는데 실제로 진동 $2$도 $3/2$보다 큽니다.

(3)을 $k = -2$에 쓰면 $\sup (kf)(D) = (-2)(-1) = 2$, $\inf (kf)(D) = (-2) \cdot 1 = -2$이고, 진동은 $4 = |-2| \cdot 2$입니다. 절댓값 쪽은 $|f|(D) = \{|x| : -1 \le x \le 1\}$입니다. [[absolute-value]]의 (7)에 의해 $-1 \le x \le 1$이면 $|x| \le 1$이고 그 항목의 (2)에 의해 $0 \le |x|$이며, $|1| = 1$과 $|0| = 0$이 이 집합의 원소이므로 $\sup |f|(D) = 1$, $\inf |f|(D) = 0$입니다. $|f|$의 진동은 $1$이어서 (6)의 부등식 $1 \le 2$는 등호가 아닙니다. 음수 값이 접혀 올라와 폭이 줄었습니다.
:::

:::counterexample[점마다 $f \le g$여도 $f$의 상한이 $g$의 하한보다 클 수 있다]
$S = \mathbb{R}$, $D = [0, 1]$, $f(x) = x$, $g(x) = x + 2^{-1}$로 둡니다. $0 < 2^{-1}$이므로 모든 $x$에서 $f(x) < g(x)$입니다. 앞의 예시처럼 $\sup f(D) = 1$이고, 최댓값 $g(1) = 1 + 2^{-1}$에 의해 $\sup g(D) = 1 + 2^{-1}$입니다. $x \in D$이면 $2^{-1} \le x + 2^{-1}$이고 $g(0) = 2^{-1}$이므로 $\inf g(D) = 2^{-1}$입니다. 따라서 $\sup f(D) = 1 > 2^{-1} = \inf g(D)$입니다. (1)이 말하는 것은 상한끼리($\sup f(D) \le \sup g(D)$, 여기서는 $1 \le 1 + 2^{-1}$)와 하한끼리의 비교뿐입니다. $\sup f(D) \le \inf g(D)$는 더 강한 가정 "$D$의 모든 $x$, $y$에서 $f(x) \le g(y)$"에서 나옵니다. 그 가정이 있으면 [[supremum-and-arithmetic|상한과 덧셈·곱셈]]의 (5)를 $f(D)$와 $g(D)$에 써서 $\sup f(D) \le \inf g(D)$를 얻습니다. 거꾸로 $\sup f(D) \le \inf g(D)$이면 모든 $x$, $y$에서 $f(x) \le \sup f(D) \le \inf g(D) \le g(y)$이므로 그 가정이 성립합니다. 이 예에서는 $x = 1$, $y = 0$에서 $f(1) = 1 > 2^{-1} = g(0)$입니다.
:::

:::counterexample[$D$가 공집합인 경우와 유계가 아닌 경우]
$D = \emptyset$이면 $f(D) = \emptyset$이고, [[upper-bound-and-supremum|상계와 상한]]의 (5)에 의해 공집합은 상한도 하한도 갖지 않으므로 (1)–(7)의 식은 뜻을 갖지 않습니다. 또 $S = D = \mathbb{R}$, $f(x) = x$이면 $f(D) = \mathbb{R}$은 위로 유계가 아닙니다. 실수 $b$가 상계라면 $b + 1 \in \mathbb{R}$이므로 $b + 1 \le b$여야 하는데, [[order-properties-of-reals]]의 (5)의 (ii)와 (2)의 (ii)에 의해 $b < b + 1$이어서 (1)의 (i)과 어긋납니다. 상한은 상계여야 하므로 $\sup f(D)$는 없습니다. 그래서 (1)–(7)에는 "$D$는 공집합이 아니고 $D$ 위에서 유계"라는 가정이 붙어 있습니다.
:::

## 확인 질문

:::check[$D = \{p\}$처럼 원소가 하나뿐이면 진동은 얼마이고, (4)의 $r$는 어떤 수여야 하는가?]
$f(D) = \{f(p)\}$이고 $f(p)$가 이 집합의 최댓값이자 최솟값이므로 [[upper-bound-and-supremum|상계와 상한]]의 (2)에 의해 $\sup f(D) = \inf f(D) = f(p)$이고 진동은 $0$입니다. (4)의 (ii)는 $x = y = p$뿐이어서 $f(p) - f(p) = 0 \le r$, 곧 $0 \le r$이라는 조건이 됩니다. (i)도 $0 \le r$입니다. 그래서 $r < 0$이면 두 조건이 모두 거짓이고, $0 \le r$이면 모두 참입니다.
:::

:::check[$D$ 위에서의 $f$의 진동이 $0$이면 $f$는 $D$ 위에서 어떤 함수인가?]
$D$ 위에서 값이 하나인 함수, 곧 $D$의 모든 $x$, $y$에서 $f(x) = f(y)$입니다. (4)를 $r = 0$에 쓰면 (iii)에 의해 $|f(x) - f(y)| \le 0$이고, [[absolute-value]]의 (2)에 의해 $0 \le |f(x) - f(y)|$이므로 [[order-properties-of-reals]]의 (1)의 (ii)에 의해 $|f(x) - f(y)| = 0$입니다. 다시 [[absolute-value]]의 (2)에 의해 $f(x) - f(y) = 0$이고, [[real-number-arithmetic]]의 (K12)의 (v)에 의해 $f(x) = f(y)$입니다.
:::
