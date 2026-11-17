---
title: 유계인 함수
title_en: Bounded Function
aliases: [유계함수, 위로 유계인 함수, 아래로 유계인 함수, bounded function, function bounded above, function bounded below]
kind: definition
field: real-analysis
msc: ["26A99"]
level: undergrad
summary: 실수의 부분집합 S 위의 실함수 f 가 유계인 것은 모든 x 에서 |f(x)| ≤ B 인 실수 B 가 있을 때이다. 위로·아래로 유계도 같은 꼴로 정의하고, 유계인 것은 정확히 위로도 아래로도 유계일 때이며 상 f(S) 가 유계인 집합일 때임을 보인다. S 가 공집합이 아니고 f 가 위로 유계이면 sup f(S) 가 있다.
requires: [subset, image-and-preimage, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, upper-bound-and-supremum, least-upper-bound-property, infimum-exists, real-valued-function]
sources:
  - ref: lebl-basic-analysis
    loc: 1.3절 Definition 1.3.6 과 그 뒤 문단 (p.38), 연습문제 1.3.8 (p.40); 3.3.1절 첫 문단 (p.130)
    checked: original
    note: "출처의 Definition 1.3.6(p.38)은 정의역 D 위의 함수 f 가 유계인 것을 모든 x ∈ D 에서 |f(x)| ≤ M 인 수 M 이 있는 것으로 정의하고, 3.3.1절 첫 문단(p.130)은 [a, b] 위의 함수에 대해 같은 정의를 B 로 다시 적는다. 이 항목의 유계의 정의는 그것과 같다. 위로 유계인 함수와 아래로 유계인 함수는 출처에 정의가 없다(검색한 범위). 이 항목은 이 강의의 sequence 항목의 유계와 같은 꼴로 정의했다. 출처는 p.38 에서 유계인 f 에 대해 sup f(D) 와 inf f(D) 를 쓰지만, (1)–(4)의 관계를 진술로 적지는 않는다. 이 항목은 그것들을 진술로 올려 증명했다. (5)의 상수배와 합은 출처가 연습문제 1.3.8(p.40)로 둔다. 차, 곱, 절댓값과 (2)의 양수 B 는 출처에 없다(검색한 범위). 예시와 반례의 함수 x 에서의 값이 1/x 인 함수는 출처가 3.3절 Example 3.3.5(p.132)에서 (0, 1) 위의 함수로 들며 값이 0 가까이에서 유계가 아니라고 적는 것과 같은 발상이다. 확인 질문은 출처에 없다(검색한 범위)."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 증명의 수학 오류 없음. 출처의 수열 증명 대신 가산 선택 없이 상한 논법으로 증명. 단원 글의 출처 설명, 출처 메모, 직관 문구를 고침"
added: 2026-11-17
---

:::statement
부분집합은 [[subset]]의 것이고, 실함수와 그 합 $f + g$, 차 $f - g$, 곱 $fg$, 상수배 $kf$, 절댓값 $|f|$, 제한 $f|_A$는 [[real-valued-function]]의 것이며, 상 $f(S)$는 [[image-and-preimage]]의 것이고, 상계, 하계, 위로·아래로 유계, 유계(집합에 대하여), 상한, 하한은 [[upper-bound-and-supremum]]의 것이다. 절댓값은 [[absolute-value]]의 것이다. $S$를 $\mathbb{R}$의 부분집합, $f : S \to \mathbb{R}$를 $S$ 위의 실함수라 하자. $S$는 공집합이어도 된다.

**유계.** $f$가

- **위로 유계**(bounded above)인 것은 정확히 어떤 실수 $B$가 있어 모든 $x \in S$에서 $f(x) \le B$일 때이고,
- **아래로 유계**(bounded below)인 것은 정확히 어떤 실수 $B$가 있어 모든 $x \in S$에서 $B \le f(x)$일 때이고,
- **유계**(bounded)인 것은 정확히 어떤 실수 $B$가 있어 모든 $x \in S$에서 $|f(x)| \le B$일 때이다.

다음이 성립한다. 아래에서 $k$는 실수이다.

1. (상과의 관계) 실수 $B$가 집합 $f(S)$의 상계인 것은 정확히 모든 $x \in S$에서 $f(x) \le B$일 때이고, $f(S)$의 하계인 것은 정확히 모든 $x \in S$에서 $B \le f(x)$일 때이다. 따라서 $f$가 위로 유계인 것은 정확히 집합 $f(S)$가 위로 유계일 때이고, $f$가 아래로 유계인 것은 정확히 $f(S)$가 아래로 유계일 때이다.
2. (유계) $f$가 유계인 것은 정확히 $f$가 위로 유계이고 아래로 유계일 때이다. 따라서 (1)에 의해 $f$가 유계인 것은 정확히 집합 $f(S)$가 [[upper-bound-and-supremum]]의 뜻으로 유계일 때이다. 또 $f$가 유계이면 모든 $x \in S$에서 $|f(x)| \le B$인 **양의** 실수 $B$가 있다.
3. (상한과 하한) $S$가 공집합이 아니라 하자. 그러면 $f(S)$도 공집합이 아니다.
   - $f$가 위로 유계이면 $\sup f(S)$가 있고, 모든 $x \in S$에서 $f(x) \le \sup f(S)$이다. 실수 $c$가 $c < \sup f(S)$이면 $c < f(x)$인 $x \in S$가 있다.
   - $f$가 아래로 유계이면 $\inf f(S)$가 있고, 모든 $x \in S$에서 $\inf f(S) \le f(x)$이다. 실수 $c$가 $\inf f(S) < c$이면 $f(x) < c$인 $x \in S$가 있다.
4. (제한) $A \subseteq S$라 하자. $f$가 위로 유계이면 $f|_A$도 위로 유계이고, $f$가 아래로 유계이면 $f|_A$도 아래로 유계이며, $f$가 유계이면 $f|_A$도 유계이다. 각각 $f$에 대한 $B$를 그대로 $f|_A$에 쓸 수 있다.
5. (연산) $f$와 $g$가 $S$ 위의 유계인 실함수이면 $f + g$, $f - g$, $fg$, $kf$, $|f|$는 유계이다. 더 자세히, 모든 $x \in S$에서 $|f(x)| \le B$이고 $|g(x)| \le C$이면, 모든 $x \in S$에서 $|f(x) + g(x)| \le B + C$, $|f(x) - g(x)| \le B + C$, $|f(x)\,g(x)| \le BC$, $|k f(x)| \le |k|\,B$, $\bigl|\,|f(x)|\,\bigr| \le B$이다.
:::

:::english
Subsets are those of the entry on subsets; real-valued functions and their sum $f + g$, difference $f - g$, product $fg$, scalar multiple $kf$, absolute value $|f|$ and restriction $f|_A$ are those of the entry on real-valued functions; the image $f(S)$ is that of the entry on images and preimages; upper and lower bounds, bounded above and below, bounded (for sets), supremum and infimum are those of the entry on upper bounds and suprema. Absolute value is that of the entry on absolute value. Let $S$ be a subset of $\mathbb{R}$ and let $f : S \to \mathbb{R}$ be a real-valued function on $S$. The set $S$ may be empty.

**Boundedness.** The function $f$ is

- **bounded above** exactly when there is a real number $B$ such that $f(x) \le B$ for all $x \in S$,
- **bounded below** exactly when there is a real number $B$ such that $B \le f(x)$ for all $x \in S$,
- **bounded** exactly when there is a real number $B$ such that $|f(x)| \le B$ for all $x \in S$.

The following hold. Below, $k$ is a real number.

1. (Relation to the image) A real number $B$ is an upper bound of the set $f(S)$ exactly when $f(x) \le B$ for all $x \in S$, and it is a lower bound of $f(S)$ exactly when $B \le f(x)$ for all $x \in S$. Hence $f$ is bounded above exactly when the set $f(S)$ is bounded above, and $f$ is bounded below exactly when $f(S)$ is bounded below.
2. (Boundedness) $f$ is bounded exactly when $f$ is bounded above and bounded below. Hence, by (1), $f$ is bounded exactly when the set $f(S)$ is bounded in the sense of the entry on upper bounds and suprema. Moreover, if $f$ is bounded, then there is a **positive** real number $B$ such that $|f(x)| \le B$ for all $x \in S$.
3. (Supremum and infimum) Suppose $S$ is nonempty. Then $f(S)$ is nonempty as well.
   - If $f$ is bounded above, then $\sup f(S)$ exists and $f(x) \le \sup f(S)$ for all $x \in S$. If a real number $c$ satisfies $c < \sup f(S)$, then there is an $x \in S$ with $c < f(x)$.
   - If $f$ is bounded below, then $\inf f(S)$ exists and $\inf f(S) \le f(x)$ for all $x \in S$. If a real number $c$ satisfies $\inf f(S) < c$, then there is an $x \in S$ with $f(x) < c$.
4. (Restriction) Let $A \subseteq S$. If $f$ is bounded above, then so is $f|_A$; if $f$ is bounded below, then so is $f|_A$; and if $f$ is bounded, then so is $f|_A$. In each case the number $B$ that works for $f$ also works for $f|_A$.
5. (Operations) If $f$ and $g$ are bounded real-valued functions on $S$, then $f + g$, $f - g$, $fg$, $kf$ and $|f|$ are bounded. More precisely, if $|f(x)| \le B$ and $|g(x)| \le C$ for all $x \in S$, then for all $x \in S$ we have $|f(x) + g(x)| \le B + C$, $|f(x) - g(x)| \le B + C$, $|f(x)\,g(x)| \le BC$, $|k f(x)| \le |k|\,B$ and $\bigl|\,|f(x)|\,\bigr| \le B$.
:::

## 직관

유계인 함수는 그래프 전체가 두 수평선 $y = -B$와 $y = B$ 사이의 띠 안에 들어가는 함수입니다. 천장과 바닥이 있는 방에 비유할 수 있습니다. 위로 유계는 천장만 있는 것, 아래로 유계는 바닥만 있는 것이고, 유계는 둘 다 있는 것입니다(이 항목의 (2)). 비유가 맞는 곳은 "모든 $x$에서 같은 $B$ 하나로 누른다"는 점입니다. $x$마다 다른 $B$를 써도 된다면 어떤 함수든 그 점의 값 $f(x)$로 누를 수 있으므로 조건이 아무것도 말하지 않게 됩니다.

정의는 [[sequence|수열]]의 유계와 같은 꼴입니다. 수열에서 자연수 $n$이 하던 자리를 정의역의 원소 $x$가 합니다. 또 수열의 유계가 값의 집합의 유계와 같았듯이, 함수의 유계는 값을 모은 집합 $f(S)$의 유계와 같습니다(이 항목의 (1), (2)). 그래서 $S$가 공집합이 아니고 $f$가 위로 유계이면 [[least-upper-bound-property|최소상계 성질]]로 $\sup f(S)$를 말할 수 있습니다(이 항목의 (3)). $S$가 공집합이면 $f(S)$도 공집합이고 상한이 없으므로 (3)은 $S$가 공집합이 아니라는 가정을 둡니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (1)의 (v)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (7)"처럼 쓴 것은 [[absolute-value]]의 번호, "상한 (4)"처럼 쓴 것은 [[upper-bound-and-supremum]]의 번호, "실함수 (4)"처럼 쓴 것은 [[real-valued-function]]의 번호, "이 항목의 (1)"은 위 진술의 번호이다. [[image-and-preimage]]의 (1)에 의해, 실수 $y$가 $f(S)$의 원소인 것은 정확히 $y = f(x)$인 $x \in S$가 있을 때이다. 특히 $x \in S$이면 $f(x) \in f(S)$이다. 이것을 "상의 정의"라 부른다.

**1의 증명.** $B$가 $f(S)$의 상계라 하자. $x \in S$이면 상의 정의에 의해 $f(x) \in f(S)$이므로 $f(x) \le B$이다. 거꾸로 모든 $x \in S$에서 $f(x) \le B$라 하자. $f(S)$의 원소 $y$는 상의 정의에 의해 어떤 $x \in S$에 대하여 $y = f(x)$이므로 $y \le B$이다. 따라서 $B$는 $f(S)$의 상계이다.

$B$가 $f(S)$의 하계라 하자. $x \in S$이면 $f(x) \in f(S)$이므로 $B \le f(x)$이다. 거꾸로 모든 $x \in S$에서 $B \le f(x)$라 하자. $f(S)$의 원소 $y$는 어떤 $x \in S$에 대하여 $y = f(x)$이므로 $B \le y$이다. 따라서 $B$는 $f(S)$의 하계이다.

$f$가 위로 유계인 것은 정의에 의해 정확히 "모든 $x \in S$에서 $f(x) \le B$"인 실수 $B$가 있을 때이고, 방금 보인 것에 의해 이것은 정확히 $f(S)$의 상계인 실수가 있을 때, 곧 $f(S)$가 위로 유계일 때이다. 아래로 유계인 경우도 따로 쓴다. $f$가 아래로 유계인 것은 정확히 "모든 $x \in S$에서 $B \le f(x)$"인 실수 $B$가 있을 때이고, 방금 보인 것에 의해 이것은 정확히 $f(S)$의 하계인 실수가 있을 때, 곧 $f(S)$가 아래로 유계일 때이다.

**2의 증명.** $f$가 유계라 하자. 모든 $x \in S$에서 $|f(x)| \le B$인 실수 $B$가 있다. 절댓값 (7)의 첫 문장에 의해 모든 $x \in S$에서 $-B \le f(x) \le B$이다. 따라서 $B$는 "모든 $x$에서 $f(x) \le B$"를, $-B$는 "모든 $x$에서 $-B \le f(x)$"를 만족하므로 $f$는 위로 유계이고 아래로 유계이다.

거꾸로 $f$가 위로 유계이고 아래로 유계라 하자. 모든 $x \in S$에서 $f(x) \le B_1$인 실수 $B_1$과 $B_2 \le f(x)$인 실수 $B_2$가 있다. $B = \max\{|B_1|, |B_2|\}$로 둔다. 절댓값 (10)에 의해 $|B_1| \le B$이고 $|B_2| \le B$이다. $x \in S$를 하나 잡는다.

- 절댓값 (6)에 의해 $B_1 \le |B_1|$이므로, $f(x) \le B_1 \le |B_1| \le B$와 순서 성질 (1)의 (v)에 의해 $f(x) \le B$이다.
- 순서 성질 (3)의 (iii)을 $|B_2| \le B$에 쓰면 $-B \le -|B_2|$이고, 절댓값 (6)에 의해 $-|B_2| \le B_2$이다. $-B \le -|B_2| \le B_2 \le f(x)$와 순서 성질 (1)의 (v)에 의해 $-B \le f(x)$이다.

따라서 $-B \le f(x) \le B$이고, 절댓값 (7)의 첫 문장에 의해 $|f(x)| \le B$이다. $x$는 $S$의 임의의 원소였으므로 $f$는 유계이다.

둘째 문장을 보인다. [[upper-bound-and-supremum]]의 정의에 의해 집합 $f(S)$가 유계인 것은 정확히 $f(S)$가 위로 유계이고 아래로 유계일 때이다. 이 항목의 (1)에 의해 이것은 정확히 $f$가 위로 유계이고 아래로 유계일 때이고, 방금 보인 것에 의해 정확히 $f$가 유계일 때이다.

셋째 문장을 보인다. 모든 $x \in S$에서 $|f(x)| \le B$라 하고 $B' = |B| + 1$로 둔다. 절댓값 (2)에 의해 $0 \le |B|$이고, 순서 성질 (5)의 (ii)의 $0 < 1$과 순서 성질 (2)의 (ii)로 양변에 $|B|$를 더하면 (K1), (K4)에 의해 $|B| < |B| + 1 = B'$이다. 순서 성질 (1)의 (v)에 의해 $0 < B'$이다. $x \in S$이면 절댓값 (6)에 의해 $B \le |B|$이므로 $|f(x)| \le B \le |B| < B'$이고, 순서 성질 (1)의 (v)에 의해 $|f(x)| < B'$, 따라서 $|f(x)| \le B'$이다.

**3의 증명.** $S$가 공집합이 아니므로 $x_0 \in S$인 $x_0$이 있고, 상의 정의에 의해 $f(x_0) \in f(S)$이므로 $f(S)$는 공집합이 아니다.

$f$가 위로 유계라 하자. 이 항목의 (1)에 의해 $f(S)$는 위로 유계이고, $f(S)$는 공집합이 아니므로 [[least-upper-bound-property|최소상계 성질]] (U)에 의해 $\sup f(S)$가 있다. 상한은 상계이므로 이 항목의 (1)에 의해 모든 $x \in S$에서 $f(x) \le \sup f(S)$이다. 실수 $c$가 $c < \sup f(S)$이면 상한 (4)에 의해 $c < y$인 $f(S)$의 원소 $y$가 있고, 상의 정의에 의해 $y = f(x)$인 $x \in S$가 있으므로 $c < f(x)$이다.

$f$가 아래로 유계라 하자. 이 항목의 (1)에 의해 $f(S)$는 아래로 유계이고 공집합이 아니므로 [[infimum-exists|하한의 존재]]의 (4)에 의해 $\inf f(S)$가 있다. 하한은 하계이므로 이 항목의 (1)에 의해 모든 $x \in S$에서 $\inf f(S) \le f(x)$이다. 실수 $c$가 $\inf f(S) < c$이면 상한 (4)의 하계에 관한 문장에 의해 $y < c$인 $f(S)$의 원소 $y$가 있고, 상의 정의에 의해 $y = f(x)$인 $x \in S$가 있으므로 $f(x) < c$이다.

**4의 증명.** 실함수 (6)에 의해 $f|_A$는 $A$ 위의 실함수이고 모든 $x \in A$에서 $f|_A(x) = f(x)$이다. 모든 $x \in S$에서 $f(x) \le B$라 하자. $x \in A$이면 $A \subseteq S$이므로 $x \in S$이고, $f|_A(x) = f(x) \le B$이다. 따라서 $f|_A$는 같은 $B$로 위로 유계이다. 모든 $x \in S$에서 $B \le f(x)$이면, 같은 이유로 $x \in A$에서 $B \le f(x) = f|_A(x)$이므로 $f|_A$는 아래로 유계이다. 모든 $x \in S$에서 $|f(x)| \le B$이면, $x \in A$에서 $\bigl|(f|_A)(x)\bigr| = |f(x)| \le B$이므로 $f|_A$는 유계이다.

**5의 증명.** 모든 $x \in S$에서 $|f(x)| \le B$이고 $|g(x)| \le C$라 하자. $x \in S$를 하나 잡는다. 실수의 값은 실함수 (4)에 의해 $(f + g)(x) = f(x) + g(x)$, $(f - g)(x) = f(x) - g(x)$, $(fg)(x) = f(x)\,g(x)$, $(kf)(x) = k\,f(x)$, $|f|(x) = |f(x)|$이다.

- (합) [[triangle-inequality|삼각부등식]]의 (1)에 의해 $|f(x) + g(x)| \le |f(x)| + |g(x)|$이고, 순서 성질 (2)의 (iii)에 의해 $|f(x)| + |g(x)| \le B + C$이다. 순서 성질 (1)의 (v)에 의해 $|f(x) + g(x)| \le B + C$이다.
- (차) [[triangle-inequality|삼각부등식]]의 (3)에 의해 $|f(x) - g(x)| \le |f(x)| + |g(x)| \le B + C$이다(순서 성질 (2)의 (iii), (1)의 (v)).
- (곱) 절댓값 (4)에 의해 $|f(x)\,g(x)| = |f(x)|\,|g(x)|$이다. 절댓값 (2)에 의해 $0 \le |f(x)|$이고 $0 \le |g(x)|$이므로 순서 성질 (11)의 (i)을 $|f(x)| \le B$, $|g(x)| \le C$에 쓰면 $|f(x)|\,|g(x)| \le BC$이다.
- (상수배) 절댓값 (4)에 의해 $|k f(x)| = |k|\,|f(x)|$이고, 절댓값 (2)의 $0 \le |k|$와 순서 성질 (4)의 (iii)에 의해 $|k|\,|f(x)| \le |k|\,B$이다((K1)).
- (절댓값) 절댓값 (2)에 의해 $0 \le |f(x)|$이므로 절댓값 (1)에 의해 $\bigl|\,|f(x)|\,\bigr| = |f(x)| \le B$이다.

$x$는 $S$의 임의의 원소였으므로 다섯 함수는 각각 $B + C$, $B + C$, $BC$, $|k|\,B$, $B$로 유계이다. $\blacksquare$
:::

## 예시와 반례

:::example[$1$ 이상의 실수 위에서 값이 $1/x$인 함수]
$T = \{x \in \mathbb{R} : 1 \le x\}$로 두고 $f(x) = x^{-1}$로 정한 $f : T \to \mathbb{R}$를 봅니다. $x \in T$이면 [[order-properties-of-reals]]의 (5)의 (ii)의 $0 < 1$과 $1 \le x$에서 그 항목의 (1)의 (v)에 의해 $0 < x$이므로 $x^{-1}$이 뜻을 갖고, [[real-valued-function]]의 (1)에 의해 $f$는 $T$ 위의 실함수입니다. 아래에서 "순서 성질"은 [[order-properties-of-reals]]의 번호입니다.

$f$는 유계입니다. $x \in T$라 합시다. 순서 성질 (6)의 (i)에 의해 $0 < x^{-1}$입니다. $x = 1$이면 (K4)의 $1 \cdot 1 = 1$과 (K8)의 (iii)에 의해 $x^{-1} = 1$이고, $1 < x$이면 순서 성질 (6)의 (ii)를 $0 < 1 < x$에 써서 $x^{-1} < 1^{-1} = 1$입니다. 어느 경우든 $0 < f(x) \le 1$이므로 [[absolute-value|절댓값]]의 (1)에 의해 $|f(x)| = f(x) \le 1$입니다.

$T$는 $1$을 원소로 가지므로 공집합이 아니고, 이 항목의 (3)에 의해 $\sup f(T)$가 있습니다. 그 값은 $1$입니다. 방금 본 대로 모든 $x \in T$에서 $f(x) \le 1$이므로 이 항목의 (1)에 의해 $1$은 $f(T)$의 상계이고, $1 = f(1) \in f(T)$이므로 [[upper-bound-and-supremum]]의 최댓값의 정의와 그 항목의 (2)에 의해 $1 = \max f(T) = \sup f(T)$입니다.
:::

:::counterexample[양의 실수 위에서 값이 $1/x$인 함수: 아래로 유계이지만 위로 유계가 아니다]
$U = \{x \in \mathbb{R} : 0 < x\}$로 두고 $h(x) = x^{-1}$로 정한 $h : U \to \mathbb{R}$를 봅니다. [[order-properties-of-reals]]의 (6)의 (i)에 의해 모든 $x \in U$에서 $0 < h(x)$이므로 $h$는 $B = 0$으로 아래로 유계입니다.

그러나 $h$는 위로 유계가 아닙니다. 실수 $B$를 아무것이나 잡고 $N = |B| + 1$로 둡니다. [[absolute-value|절댓값]]의 (2)에 의해 $0 \le |B|$이고, [[order-properties-of-reals]]의 (5)의 (ii)의 $0 < 1$에 그 항목의 (2)의 (ii)로 $|B|$를 더하면 (K1), (K4)에 의해 $|B| < N$이므로, 그 항목의 (1)의 (v)에 의해 $0 < N$입니다. 그 항목의 (6)의 (i)에 의해 $0 < N^{-1}$이므로 $x = N^{-1}$은 $U$의 원소입니다. $N \cdot N^{-1} = 1$이므로 (K1)과 (K8)의 (iii)에 의해 $h(x) = (N^{-1})^{-1} = N$이고, 절댓값 (6)에 의해 $B \le |B| < N = h(x)$입니다. 따라서 [[order-properties-of-reals]]의 (1)의 (i)에 의해 이 $x$에서 $h(x) \le B$는 성립하지 않습니다. "모든 $x \in U$에서 $h(x) \le B$"인 실수 $B$가 없으므로 $h$는 위로 유계가 아니고, 이 항목의 (2)에 의해 유계도 아닙니다.

$T \subseteq U$이고 위 예시의 $f$는 $h|_T$와 같습니다(모든 $x \in T$에서 값이 $x^{-1}$이므로 [[real-valued-function]]의 (2)). 유계가 아닌 함수도 정의역을 줄이면 유계가 될 수 있습니다. 이 항목의 (4)는 거꾸로, 유계인 함수를 줄이면 유계라는 방향만 말합니다.
:::

## 확인 질문

:::check[공집합 위의 실함수 $f : \emptyset \to \mathbb{R}$는 유계인가? $\sup f(\emptyset)$은 있는가?]
유계입니다. $\emptyset$에는 원소가 없으므로 "모든 $x \in \emptyset$에서 $|f(x)| \le B$"는 어떤 실수 $B$에 대해서도 참이고, 예컨대 $B = 0$이 정의를 만족합니다. 그러나 [[image-and-preimage]]의 (1)에 의해 $f(\emptyset)$의 원소 $y$가 있으려면 $y = f(x)$인 $x \in \emptyset$이 있어야 하므로 $f(\emptyset) = \emptyset$이고, [[upper-bound-and-supremum]]의 (5)에 의해 $\emptyset$은 상한을 갖지 않습니다. 그래서 이 항목의 (3)은 $S$가 공집합이 아니라는 가정을 둡니다.
:::

:::check[$f$와 $g$가 위로 유계이면 $fg$도 위로 유계인가?]
그렇다고 할 수 없습니다. $V = \{x \in \mathbb{R} : x \le 0\}$ 위에서 $f = g = i_V$(항등함수)로 두면 모든 $x \in V$에서 $f(x) = x \le 0$이므로 $f$와 $g$는 $0$으로 위로 유계입니다. 그러나 $(fg)(x) = xx$입니다. 실수 $B$에 대하여 $N = |B| + 1$, $x = -N$으로 둡니다. 아래에서 "순서 성질"은 [[order-properties-of-reals]]의 번호입니다. [[absolute-value|절댓값]]의 (2)에 의해 $0 \le |B|$이므로 순서 성질 (2)의 (i)로 양변에 $1$을 더하면 (K1), (K4)에 의해 $1 \le N$이고, 순서 성질 (5)의 (ii)의 $0 < 1$과 (1)의 (v)에 의해 $0 < N$입니다. 순서 성질 (3)의 (ii)에 의해 $x < 0$, 곧 $x \in V$이고, (K12)의 (iii)에 의해 $xx = NN$입니다. $0 \le N$이고 $1 \le N$이므로 순서 성질 (4)의 (iii)에 의해 $1 \cdot N \le NN$, 곧 $N \le NN$입니다((K1), (K4)). 순서 성질 (2)의 (ii)로 $0 < 1$에 $|B|$를 더하면 $|B| < N$이고, 절댓값 (6)에 의해 $B \le |B|$이므로 순서 성질 (1)의 (v)에 의해 $B < N \le NN = xx$, 곧 $B < (fg)(x)$입니다. 순서 성질 (1)의 (i)에 의해 이 $x$에서 $(fg)(x) \le B$는 성립하지 않습니다. 이 항목의 (5)가 곱에 대해 "위로 유계"가 아니라 "유계"를 가정하는 까닭입니다.
:::
