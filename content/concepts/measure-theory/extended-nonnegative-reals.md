---
title: 0 이상인 확장된 실수
title_en: Extended Nonnegative Real Numbers
aliases: ["[0, ∞]", 확장된 실수, 무한대, extended nonnegative reals, extended real numbers, "0·∞ = 0"]
kind: definition
field: measure-theory
msc: ["28"]
level: undergrad
summary: "실수가 아닌 대상 ∞ 가 있음을 러셀의 논법으로 보이고, [0, ∞] = [0, ∞) ∪ {∞} 에 순서, 덧셈, 0·∞ = 0 인 곱셈을 정한다. 모든 부분집합이 상한과 하한을 갖고, 상한이 덧셈·상수배와 바뀌며, 단조증가열의 극한을 상한으로 정하며, 두 원소의 최소·최대를 하한·상한으로 정한다. 실수의 상한·극한과 겹치는 곳에서는 같은 값이다."
requires: [set, subset, open-sentence, proof-by-contradiction, family-of-sets, function, recursion-theorem, mathematical-induction, real-number-arithmetic, real-order-axioms, order-properties-of-reals, upper-bound-and-supremum, least-upper-bound-property, infimum-exists, supremum-and-arithmetic, archimedean-property, absolute-value, interval, sequence, limit-of-sequence, limit-is-unique, monotone-convergence-theorem, subsequence]
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 3.3절 The extended real line, Definition 3.25–3.27 (p.73)
    checked: original
    note: "출처의 Definition 3.25(p.73)는 R̄ := {−∞} ∪ ℝ ∪ {+∞} 로 두고 덧셈 x + (±∞) = ±∞, 곱셈 x·(±∞) = ±∞ (x > 0), 0 (x = 0), ∓∞ (x < 0) 과 순서 −∞ < x < ∞ 를 정한다. 3.3절 첫 문단은 +∞ 와 −∞ 를 '기호'(symbols)라고 적는다. 이 항목은 −∞ 를 두지 않고 [0, ∞] 만 다루며, 실수가 아닌 대상이 있다는 것을 (1)의 러셀의 논법으로 보이고 ∞ 를 그 대상으로 정한다. 0·∞ = 0 은 출처와 같은 약속이다. 출처의 Definition 3.26(p.73)은 R̄ 의 부분집합 A 가 위로 유계가 아니면 sup(A) := +∞ 로 정한다. 이 항목은 [0, ∞] 의 순서로 상계와 상한을 정의하고 상한이 있다는 것과 공집합의 상한 0, 하한 ∞ 를 (5)에서 증명한다. 덧셈·곱셈의 법칙((3), (4)), 상한과 연산((6)), 단조증가열의 극한((7))도 이 항목이 증명한다. Definition 3.27(p.73)의 lim inf, lim sup 은 이 항목에 두지 않았다."
  - ref: lebl-basic-analysis
    loc: 1.2.3절 Using supremum and infimum, Definition 1.2.9 와 그 뒤 문단 (p.33–34); 1.1.1절 Exercises, Exercise 1.1.13 (p.28); 2.3.4절 Infinite limits, Definition 2.3.9, Proposition 2.3.10, Example 2.3.11 (p.79)
    checked: original
    note: "출처의 Definition 1.2.9(p.33)는 ℝ 의 부분집합 A 에 대해 공집합의 상한을 −∞, 위로 유계가 아닌 집합의 상한을 ∞ 로 정하고, 그 뒤 문단(p.33–34)에서 확장된 실수 ℝ* = ℝ ∪ {−∞, ∞} 의 순서를 적은 뒤 '0·(±∞)' 을 정의하지 않고 남겨 둔다고 적는다. 이 항목은 0·∞ = 0 으로 정하므로 이 점에서 출처와 다르다. 공집합의 상한이 출처는 −∞ 이고 이 항목은 0 인 것은 이 항목이 [0, ∞] 의 순서로 상한을 정하기 때문이다. 출처의 Exercise 1.1.13(p.28)은 ℕ ∪ {∞} 에서 모든 부분집합(공집합 포함)이 상한을 가짐을 보이라는 것으로, (5)의 (i)(ii)와 같은 꼴의 사실이다. 출처의 Definition 2.3.9(p.79)는 모든 K 에 대해 어느 번호부터 x_n > K 인 수열을 'diverges to infinity' 라 하고 lim x_n := ∞ 로 쓰며, Proposition 2.3.10(p.79)은 단조증가하고 유계가 아닌 수열의 극한이 ∞ 라고 진술한다. 이 항목은 단조증가열의 극한을 상한으로 정의하므로 정의의 길이 다르고, (7)의 (iii)의 둘째 문장이 Proposition 2.3.10 의 증가하는 경우와 같은 결론이다. 예시 '세 집합의 상한'의 둘째·셋째 집합은 출처 Definition 1.2.9 의 (ii)와 (i)이 다루는 두 경우(위로 유계가 아닌 집합, 공집합)이고, 공집합의 값은 출처의 −∞ 와 다르다. 반례 '$a_n = n^{-1}$과 $b_n = n$의 곱'의 극한 lim n = ∞ 는 출처 Example 2.3.11(p.79)의 첫 극한과 같다. 확인 질문 '$\\{a \\in [0, \\infty] : a < \\infty\\}$ 의 상한은 무엇이고, 이 상한은 집합에 속하는가?'는 출처 Definition 1.2.9 (ii)(위로 유계가 아닌 집합의 상한을 ∞ 로 정한다)를 [0, ∞) 에 쓴 것이다. 확인 질문 '$\\inf\\{\\infty\\}$와 $\\inf \\emptyset$은 무엇인가?'의 inf ∅ = ∞ 는 출처 Definition 1.2.9 (iii)과 같다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 표본 확인(러셀의 논법, Kanovei–Katz 인용 대조, min·max 와 1 의 합의 경계 경우). 독립 검토 없음."
added: 2026-11-28
---

:::statement
실수와 그 계산, 순서는 [[real-number-arithmetic]], [[real-order-axioms]]의 것이고, 실수 집합의 상계·하계·위로 유계·상한·하한은 [[upper-bound-and-supremum]]의 것이다. 조건으로 정한 부분집합 $\{x \in X : P(x)\}$는 [[family-of-sets|집합족의 합집합과 교집합]]의 것이다.

**실수가 아닌 대상 $\infty$.** 집합 $X$에 대하여, $P(x)$를 "$x$는 집합이고 $x \notin x$"라는 [[open-sentence|열린 문장]]이라 하고
$$
r(X) = \{x \in X : P(x)\}
$$
로 둔다. 아래 (1)에 의해 $r(\mathbb{R})$은 실수가 아니다. 이 대상을 $\infty$로 쓴다. 곧 $\infty = r(\mathbb{R})$이다. 아래에서 $\infty$에 대해 쓰는 것은 $\infty \notin \mathbb{R}$이라는 것뿐이다. 급수와 멱급수 강의의 급수의 합의 기호와 극한 기호 $\lim_{n \to \infty}$에 든 $\infty$는 여전히 기호의 일부이고 이 대상을 가리키지 않는다.

**$[0, \infty)$와 $[0, \infty]$.** $[0, \infty) = \{x \in \mathbb{R} : 0 \le x\}$로 쓴다(이 기호 안의 $\infty$도 이름의 일부이다). $[0, \infty)$와 아래의 $[0, \infty]$는 이 항목에서 새로 정한 집합의 이름이고, [[interval|구간]] 항목의 구간 기호(유계인 구간의 기호)와는 따로 정한 것이다. 그리고
$$
[0, \infty] = [0, \infty) \cup \{\infty\}
$$
로 정하고, $[0, \infty]$의 원소를 **0 이상인 확장된 실수**(extended nonnegative real number)라 한다. $[0, \infty)$의 원소를 $[0, \infty]$의 **실수인 원소**라 한다.

**순서.** $a$, $b$가 $[0, \infty]$의 원소일 때 $a \le b$인 것은 정확히 다음 둘 가운데 하나가 성립할 때이다: $a$와 $b$가 실수이고 실수로서 $a \le b$이다; $b = \infty$이다. $a < b$인 것은 정확히 $a \le b$이고 $a \ne b$일 때이다. $a \ge b$, $a > b$는 $b \le a$, $b < a$를 뜻한다.

**덧셈과 곱셈.** $a$, $b$가 $[0, \infty]$의 원소일 때 $a + b$와 $ab$를 다음과 같이 정한다.

- $a$, $b$가 실수이면 $a + b$는 실수의 합이고, $a = \infty$이거나 $b = \infty$이면 $a + b = \infty$이다.
- $a$, $b$가 실수이면 $ab$는 실수의 곱이다. $a$, $b$ 가운데 하나가 $\infty$이면, 다른 하나가 $0$일 때 $ab = 0$이고 다른 하나가 $0$이 아닐 때 $ab = \infty$이다.

 특히 $0 \cdot \infty = \infty \cdot 0 = 0$이고 $\infty \cdot \infty = \infty$이다. $ab$를 $a \cdot b$로도 쓴다. 뺄셈과 나눗셈은 정하지 않는다.

**상한과 하한.** $S$를 $[0, \infty]$의 부분집합이라 하자. $[0, \infty]$의 원소 $u$가 $S$의 **상계**인 것은 정확히 $S$의 모든 원소 $s$에 대하여 $s \le u$일 때이고, $S$의 **상한**인 것은 정확히 $u$가 $S$의 상계이고 $S$의 모든 상계 $v$에 대하여 $u \le v$일 때이다. **하계**와 **하한**도 부등호를 바꾸어 같은 방식으로 정한다. 이 부등호는 모두 위의 $[0, \infty]$의 순서이다.

**원소열과 단조증가열의 극한.** 함수 $a : \mathbb{N} \to [0, \infty]$를 **$[0, \infty]$의 원소열**이라 하고, $a(n)$을 $a_n$으로, $a$를 $(a_n)$으로 쓴다. 자연수 $n$마다 $[0, \infty]$의 원소 $a_n$이 식이나 이미 정해진 대상으로 정해져 있으면 [[recursion-theorem|재귀 정리]]의 (1)에 의해 그런 원소열이 있다. 모든 항이 실수인 원소열은 [[sequence]]의 수열이기도 하다. $(a_n)$이 **단조증가**인 것은 정확히 모든 자연수 $n$에서 $a_n \le a_{n+1}$일 때이고, 이때
$$
\lim_{n \to \infty} a_n = \sup\{a_n : n \in \mathbb{N}\}
$$
을 $(a_n)$의 **극한**이라 한다.

다음이 성립한다. 아래에서 $a$, $b$, $c$, $d$는 $[0, \infty]$의 원소이고 $S$, $T$는 $[0, \infty]$의 부분집합이다.

1. ($\infty$는 실수가 아니다)
   - (i) 모든 집합 $X$에 대하여 $r(X) \notin X$이다.
   - (ii) $\infty \notin \mathbb{R}$이다. 따라서 $[0, \infty]$의 원소는 실수인 원소이거나 $\infty$이고, 둘 다인 원소는 없다. 위의 순서, 덧셈, 곱셈은 이 두 경우로 나누어 정한 것이므로 $a \le b$의 참·거짓과 $a + b$, $ab$의 값이 하나씩 정해지고, $a + b$와 $ab$는 $[0, \infty]$의 원소이다.
2. (순서)
   - (i) $a$, $b$가 실수이면 $a \le b$, $a < b$는 실수의 순서로 읽은 것과 같다.
   - (ii) $a \le a$이다. $a \le b$이고 $b \le a$이면 $a = b$이다. $a \le b$이고 $b \le c$이면 $a \le c$이다. $a \le b$이거나 $b \le a$이다.
   - (iii) "$a < b$"가 성립하지 않는 것은 정확히 $b \le a$일 때이다. $a < b$이고 $b \le c$이거나, $a \le b$이고 $b < c$이면 $a < c$이다.
   - (iv) $0 \le a \le \infty$이다. $a < \infty$인 것은 정확히 $a$가 실수일 때이다. $b$가 실수이고 $a \le b$이면 $a$도 실수이다.
3. (덧셈)
   - (i) $a + b = b + a$, $(a + b) + c = a + (b + c)$, $a + 0 = a$, $a + \infty = \infty$이다.
   - (ii) $a \le b$이면 $a + c \le b + c$이다. $a \le b$이고 $c \le d$이면 $a + c \le b + d$이다. $a \le a + b$이다.
   - (iii) $a + b < \infty$인 것은 정확히 $a < \infty$이고 $b < \infty$일 때이다. $a + b = 0$인 것은 정확히 $a = 0$이고 $b = 0$일 때이다.
4. (곱셈)
   - (i) $ab = ba$, $(ab)c = a(bc)$, $1a = a$, $0a = 0$이다. $0 < a$이면 $a\infty = \infty$이다.
   - (ii) (분배법칙) $a(b + c) = ab + ac$이다.
   - (iii) $a \le b$이면 $ca \le cb$이다.
   - (iv) $ab = 0$인 것은 정확히 $a = 0$이거나 $b = 0$일 때이다.
5. (상한과 하한)
   - (i) $S$는 상한과 하한을 하나씩 갖는다. 곧 상한인 원소가 있고 둘 이상 있지 않으며, 하한도 그렇다. 이것들을 $\sup S$, $\inf S$로 쓴다.
   - (ii) $\sup \emptyset = 0$이고 $\inf \emptyset = \infty$이다.
   - (iii) (실수의 상한·하한과의 일치) $S$가 $[0, \infty)$의 공집합이 아닌 부분집합이고 $\mathbb{R}$의 부분집합으로서 위로 유계이면, $S$는 [[upper-bound-and-supremum]]의 뜻의 상한을 갖고 그것이 이 항목의 $\sup S$이다. $S$가 $[0, \infty)$의 공집합이 아닌 부분집합이면, $S$는 그 항목의 뜻의 하한을 갖고 그것이 이 항목의 $\inf S$이다. 그래서 $[0, \infty]$의 부분집합에 $\sup$, $\inf$을 이 항목의 뜻으로 읽어도, 실수의 상한·하한이 있는 곳에서는 같은 수이다.
   - (iv) $\sup S < \infty$인 것은 정확히 $\infty \notin S$이고 $S$가 $\mathbb{R}$의 부분집합으로서 위로 유계일 때이다. $S$에 실수인 원소가 있으면 $\inf S = \inf(S - \{\infty\})$이다.
   - (v) $b < \sup S$이면 $b < s$인 $s \in S$가 있다. $\inf S < b$이면 $s < b$인 $s \in S$가 있다.
   - (vi) $S$의 모든 원소 $s$마다 $s \le t$인 $t \in T$가 있으면 $\sup S \le \sup T$이다. 특히 $S \subseteq T$이면 $\sup S \le \sup T$이고 $\inf T \le \inf S$이다.
6. (상한과 덧셈·곱셈)
   - (i) $S$와 $T$가 공집합이 아니면 $\sup\{s + t : s \in S,\ t \in T\} = \sup S + \sup T$이다.
   - (ii) $\sup\{cs : s \in S\} = c \sup S$이다($S = \emptyset$이어도 된다).
7. (단조증가열의 극한) $(a_n)$, $(b_n)$이 단조증가인 $[0, \infty]$의 원소열이라 하자.
   - (i) $n \le m$인 모든 자연수 $n$, $m$에서 $a_n \le a_m$이고, 모든 자연수 $n$에서 $a_n \le \lim_{n \to \infty} a_n$이다.
   - (ii) $b < \lim_{n \to \infty} a_n$이면 어떤 자연수 $N$이 있어 $N$ 이상인 모든 자연수 $n$에서 $b < a_n$이다.
   - (iii) (실수열의 극한과의 일치) 모든 $a_n$이 실수라 하자. $(a_n)$이 위로 유계이면 수열 $(a_n)$은 [[limit-of-sequence]]의 뜻으로 수렴하고, 그 극한([[limit-is-unique]])이 이 항목의 $\lim_{n \to \infty} a_n$이다. $(a_n)$이 위로 유계가 아니면 $\lim_{n \to \infty} a_n = \infty$이다. 그래서 단조증가인 $[0, \infty]$의 원소열에 $\lim$을 이 항목의 뜻으로 읽어도, 실수열의 극한이 있는 곳에서는 같은 수이다.
   - (iv) $(a_n + b_n)$과 $(c\,a_n)$은 단조증가이고
     $$
     \begin{aligned}
     &\lim_{n \to \infty} (a_n + b_n) \\
     &\quad = \lim_{n \to \infty} a_n + \lim_{n \to \infty} b_n, \\
     &\lim_{n \to \infty} c\,a_n = c \lim_{n \to \infty} a_n
     \end{aligned}
     $$
     이다. 모든 자연수 $n$에서 $a_n \le b_n$이면 $\lim_{n \to \infty} a_n \le \lim_{n \to \infty} b_n$이다. 모든 항이 $c$인 원소열은 단조증가이고 그 극한은 $c$이다.
   - (v) $(n_j)$가 [[subsequence]]의 뜻의 첨자열이면 $j$번째 항이 $a_{n_j}$인 원소열은 단조증가이고 $\lim_{j \to \infty} a_{n_j} = \lim_{n \to \infty} a_n$이다.
8. (두 원소의 최소와 최대) $\min\{a, b\} = \inf\{a, b\}$, $\max\{a, b\} = \sup\{a, b\}$로 정한다.
   - (i) $a \le b$이면 $\min\{a, b\} = a$이고 $\max\{a, b\} = b$이다. 따라서 $\min\{a, b\}$와 $\max\{a, b\}$는 각각 $a$, $b$ 가운데 하나이고, $\min\{a, b\} \le a \le \max\{a, b\}$, $\min\{a, b\} \le b \le \max\{a, b\}$이다. 특히 $\min\{a, \infty\} = a$, $\max\{a, \infty\} = \infty$이다.
   - (ii) $a$, $b$가 실수이면 $\min\{a, b\}$, $\max\{a, b\}$는 [[absolute-value]]의 두 실수의 최소·최대와 같다.
:::

:::english
Real numbers, their arithmetic and their order are those of the entry "Arithmetic of the Real Numbers" and the entry "Order Axioms for the Real Numbers"; upper and lower bounds, bounded above, suprema and infima of sets of reals are those of the entry "Upper Bound and Supremum". A subset given by a condition, $\{x \in X : P(x)\}$, is as in the entry "Union and Intersection of a Family of Sets".

**An object that is not a real number.** For a set $X$, let $P(x)$ be the open sentence "$x$ is a set and $x \notin x$", and put
$$
r(X) = \{x \in X : P(x)\}.
$$
By (1) below, $r(\mathbb{R})$ is not a real number. We denote this object by $\infty$; that is, $\infty = r(\mathbb{R})$. The only fact about $\infty$ used below is $\infty \notin \mathbb{R}$. In the symbol for the sum of a series from the course on series and power series and in the limit symbol $\lim_{n \to \infty}$, the sign $\infty$ is still part of the symbol and does not denote this object.

**$[0, \infty)$ and $[0, \infty]$.** We write $[0, \infty) = \{x \in \mathbb{R} : 0 \le x\}$ (the $\infty$ in this symbol is part of the name). $[0, \infty)$ and $[0, \infty]$ below are names of sets newly defined in this entry, set up separately from the interval notation (for bounded intervals) of the entry "Interval". We define
$$
[0, \infty] = [0, \infty) \cup \{\infty\}
$$
and call its elements **extended nonnegative real numbers**. Elements of $[0, \infty)$ are called the **real elements** of $[0, \infty]$.

**Order.** For $a, b \in [0, \infty]$, $a \le b$ holds exactly when one of the following holds: $a$ and $b$ are real and $a \le b$ as real numbers; $b = \infty$. We have $a < b$ exactly when $a \le b$ and $a \ne b$. $a \ge b$ and $a > b$ mean $b \le a$ and $b < a$.

**Addition and multiplication.** For $a, b \in [0, \infty]$ we define $a + b$ and $ab$ as follows.

- If $a$ and $b$ are real, $a + b$ is the real sum; if $a = \infty$ or $b = \infty$, then $a + b = \infty$.
- If $a$ and $b$ are real, $ab$ is the real product. If one of $a$, $b$ is $\infty$, then $ab = 0$ when the other is $0$, and $ab = \infty$ when the other is not $0$.

In particular $0 \cdot \infty = \infty \cdot 0 = 0$ and $\infty \cdot \infty = \infty$. We also write $ab$ as $a \cdot b$. Subtraction and division are not defined.

**Suprema and infima.** Let $S$ be a subset of $[0, \infty]$. An element $u$ of $[0, \infty]$ is an **upper bound** of $S$ exactly when $s \le u$ for every $s \in S$, and is a **supremum** of $S$ exactly when $u$ is an upper bound of $S$ and $u \le v$ for every upper bound $v$ of $S$. **Lower bounds** and **infima** are defined in the same way with the inequalities reversed. All these inequalities are in the order of $[0, \infty]$ above.

**Sequences and limits of increasing sequences.** A function $a : \mathbb{N} \to [0, \infty]$ is called a **sequence in $[0, \infty]$**; we write $a(n)$ as $a_n$ and $a$ as $(a_n)$. If for each natural number $n$ an element $a_n$ of $[0, \infty]$ is given by a formula or by an already determined object, such a sequence exists by (1) of the entry "Recursion Theorem". A sequence all of whose terms are real is also a sequence in the sense of the entry "Sequence". $(a_n)$ is **increasing** exactly when $a_n \le a_{n+1}$ for every natural number $n$, and then
$$
\lim_{n \to \infty} a_n = \sup\{a_n : n \in \mathbb{N}\}
$$
is called the **limit** of $(a_n)$.

The following hold. Below $a, b, c, d$ are elements of $[0, \infty]$ and $S, T$ are subsets of $[0, \infty]$.

1. ($\infty$ is not a real number)
   - (i) For every set $X$, $r(X) \notin X$.
   - (ii) $\infty \notin \mathbb{R}$. Hence every element of $[0, \infty]$ is either a real element or $\infty$, and none is both. Since the order, addition and multiplication above are defined by splitting into these two cases, the truth value of $a \le b$ and the values $a + b$, $ab$ are determined, and $a + b$ and $ab$ are elements of $[0, \infty]$.
2. (Order)
   - (i) If $a$ and $b$ are real, then $a \le b$ and $a < b$ mean the same as in the order of the reals.
   - (ii) $a \le a$. If $a \le b$ and $b \le a$, then $a = b$. If $a \le b$ and $b \le c$, then $a \le c$. Either $a \le b$ or $b \le a$.
   - (iii) "$a < b$" fails exactly when $b \le a$. If $a < b$ and $b \le c$, or $a \le b$ and $b < c$, then $a < c$.
   - (iv) $0 \le a \le \infty$. We have $a < \infty$ exactly when $a$ is real. If $b$ is real and $a \le b$, then $a$ is real.
3. (Addition)
   - (i) $a + b = b + a$, $(a + b) + c = a + (b + c)$, $a + 0 = a$, $a + \infty = \infty$.
   - (ii) If $a \le b$, then $a + c \le b + c$. If $a \le b$ and $c \le d$, then $a + c \le b + d$. $a \le a + b$.
   - (iii) $a + b < \infty$ exactly when $a < \infty$ and $b < \infty$. $a + b = 0$ exactly when $a = 0$ and $b = 0$.
4. (Multiplication)
   - (i) $ab = ba$, $(ab)c = a(bc)$, $1a = a$, $0a = 0$. If $0 < a$, then $a\infty = \infty$.
   - (ii) (Distributive law) $a(b + c) = ab + ac$.
   - (iii) If $a \le b$, then $ca \le cb$.
   - (iv) $ab = 0$ exactly when $a = 0$ or $b = 0$.
5. (Suprema and infima)
   - (i) $S$ has exactly one supremum and exactly one infimum; that is, a supremum exists and there are not two of them, and likewise for the infimum. They are written $\sup S$ and $\inf S$.
   - (ii) $\sup \emptyset = 0$ and $\inf \emptyset = \infty$.
   - (iii) (Agreement with suprema and infima of reals) If $S$ is a nonempty subset of $[0, \infty)$ that is bounded above as a subset of $\mathbb{R}$, then $S$ has a supremum in the sense of the entry "Upper Bound and Supremum" and it is the $\sup S$ of this entry. If $S$ is a nonempty subset of $[0, \infty)$, then $S$ has an infimum in the sense of that entry and it is the $\inf S$ of this entry. So reading $\sup$ and $\inf$ of subsets of $[0, \infty]$ in the sense of this entry gives the same number wherever the real supremum or infimum exists.
   - (iv) $\sup S < \infty$ exactly when $\infty \notin S$ and $S$ is bounded above as a subset of $\mathbb{R}$. If $S$ has a real element, then $\inf S = \inf(S - \{\infty\})$.
   - (v) If $b < \sup S$, there is $s \in S$ with $b < s$. If $\inf S < b$, there is $s \in S$ with $s < b$.
   - (vi) If for every element $s$ of $S$ there is $t \in T$ with $s \le t$, then $\sup S \le \sup T$. In particular, if $S \subseteq T$, then $\sup S \le \sup T$ and $\inf T \le \inf S$.
6. (Suprema, addition and multiplication)
   - (i) If $S$ and $T$ are nonempty, then $\sup\{s + t : s \in S,\ t \in T\} = \sup S + \sup T$.
   - (ii) $\sup\{cs : s \in S\} = c \sup S$ (also when $S = \emptyset$).
7. (Limits of increasing sequences) Let $(a_n)$ and $(b_n)$ be increasing sequences in $[0, \infty]$.
   - (i) $a_n \le a_m$ for all natural numbers $n \le m$, and $a_n \le \lim_{n \to \infty} a_n$ for every natural number $n$.
   - (ii) If $b < \lim_{n \to \infty} a_n$, then there is a natural number $N$ such that $b < a_n$ for every natural number $n \ge N$.
   - (iii) (Agreement with limits of real sequences) Suppose every $a_n$ is real. If $(a_n)$ is bounded above, then the sequence $(a_n)$ converges in the sense of the entry "Limit of a Sequence" and its limit (the entry "Uniqueness of Limits") is the $\lim_{n \to \infty} a_n$ of this entry. If $(a_n)$ is not bounded above, then $\lim_{n \to \infty} a_n = \infty$. So reading $\lim$ of increasing sequences in $[0, \infty]$ in the sense of this entry gives the same number wherever the limit of the real sequence exists.
   - (iv) $(a_n + b_n)$ and $(c\,a_n)$ are increasing, and
     $$
     \begin{aligned}
     &\lim_{n \to \infty} (a_n + b_n) \\
     &\quad = \lim_{n \to \infty} a_n + \lim_{n \to \infty} b_n, \\
     &\lim_{n \to \infty} c\,a_n = c \lim_{n \to \infty} a_n.
     \end{aligned}
     $$
     If $a_n \le b_n$ for every natural number $n$, then $\lim_{n \to \infty} a_n \le \lim_{n \to \infty} b_n$. The sequence all of whose terms are $c$ is increasing and its limit is $c$.
   - (v) If $(n_j)$ is an index sequence in the sense of the entry "Subsequence", then the sequence whose $j$th term is $a_{n_j}$ is increasing and $\lim_{j \to \infty} a_{n_j} = \lim_{n \to \infty} a_n$.
8. (Minimum and maximum of two elements) We define $\min\{a, b\} = \inf\{a, b\}$ and $\max\{a, b\} = \sup\{a, b\}$.
   - (i) If $a \le b$, then $\min\{a, b\} = a$ and $\max\{a, b\} = b$. Hence $\min\{a, b\}$ and $\max\{a, b\}$ are each one of $a$, $b$, and $\min\{a, b\} \le a \le \max\{a, b\}$, $\min\{a, b\} \le b \le \max\{a, b\}$. In particular $\min\{a, \infty\} = a$ and $\max\{a, \infty\} = \infty$.
   - (ii) If $a$ and $b$ are real, then $\min\{a, b\}$ and $\max\{a, b\}$ equal the minimum and maximum of two real numbers of the entry "Absolute Value".
:::

## 직관

지금까지의 강의는 "끝없이 커진다"를 수로 쓰지 않았습니다. 급수와 멱급수 강의는 발산하는 급수에 합의 기호를 쓰지 않고, 부분합이 한없이 커지는 것을 "모든 $M$에 번호가 있다" 꼴로 진술했습니다. 이 항목은 실수 $0$ 이상의 범위에 원소 하나 $\infty$를 더해, 발산하는 양항급수의 "합"이나 위로 유계가 아닌 집합의 "상한"을 값 하나로 적을 수 있게 합니다.

비유하자면 눈금이 $0$부터 시작하는 자에 맨 끝 칸 하나를 덧붙이고 "어느 눈금보다도 큼"이라고 적어 둔 것입니다. 이 칸은 모든 눈금보다 위에 있고((2)의 (iv)), 이 칸에 무엇을 더해도 그대로 이 칸입니다((3)의 (i)). 비유가 맞는 것은 여기까지입니다. 실제 자에서는 눈금끼리 뺄 수 있지만, 이 칸에서는 뺄셈을 정하지 않습니다($1 + \infty = 2 + \infty$이므로 "같은 것을 빼면 같다"가 깨집니다).

$\infty$가 실수가 아닌 대상으로 정말 있어야 $[0, \infty]$의 원소가 "실수이거나 $\infty$"로 깔끔하게 둘로 나뉩니다. (1)의 (i)이 그것을 보장합니다. 자기 자신을 원소로 갖지 않는 집합들을 $X$ 안에서 모으면, 그 모임은 $X$의 원소가 될 수 없다는 **러셀의 논법**입니다. 이 논법은 $X$가 무엇이든 $X$ 밖의 대상을 하나 만들어 주므로, $X = \mathbb{R}$로 두어 실수가 아닌 대상을 얻습니다.

곱셈에서 $0 \cdot \infty = 0$으로 정한 것은 (6)의 (ii)와 (7)의 (iv)가 예외 없이 성립하게 하려는 것입니다. 예컨대 모든 자연수를 모은 집합 $S = \mathbb{N}$은 위로 유계가 아니므로 $\sup S = \infty$이고, $0$을 곱한 집합 $\{0 \cdot s : s \in S\} = \{0\}$의 상한은 $0$입니다. (6)의 (ii)가 $c = 0$에서도 성립하려면 $0 \cdot \infty$는 $0$이어야 합니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (2)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. 실수인 원소 $a$, 곧 $a \in [0, \infty)$는 정의에 의해 실수이고 $0 \le a$이다.

**1의 증명.** (i) $X$를 집합이라 하고 $r = r(X)$로 두자. [[family-of-sets|집합족의 합집합과 교집합]]의 "조건으로 정한 부분집합"에 의해 $r$은 집합이고, 대상 $y$가 $r$의 원소인 것은 정확히 $y \in X$이고 $y$가 집합이며 $y \notin y$일 때이다. $r \notin X$를 [[proof-by-contradiction|귀류법]]으로 보인다. $r \in X$라고 가정하자. $r$은 집합이므로, 위의 판정을 $y = r$에 쓰면 $r \in r$인 것은 정확히 $r \notin r$일 때이다. $r \in r$이면 이 판정에 의해 $r \notin r$이고, $r \notin r$이면 판정에 의해 $r \in r$이다. 어느 쪽이든 $r \in r$과 $r \notin r$가 함께 성립하므로 모순이다. 따라서 $r \notin X$이다.

(ii) (i)을 $X = \mathbb{R}$에 쓰면 $\infty = r(\mathbb{R}) \notin \mathbb{R}$이다. $[0, \infty]$의 원소는 합집합의 정의에 의해 $[0, \infty)$에 속하거나 $\infty$와 같다. $[0, \infty) \subseteq \mathbb{R}$이고 $\infty \notin \mathbb{R}$이므로 둘을 함께 만족하는 원소는 없다. 따라서 순서와 연산의 정의에서 경우들은 서로 겹치지 않고 모든 경우를 덮으므로 각 정의는 참·거짓이나 값을 하나씩 정한다. 덧셈과 곱셈의 값이 $[0, \infty]$에 속함을 본다. $\infty$인 값은 $[0, \infty]$에 속한다. $a$, $b$가 실수이면 $0 \le a$, $0 \le b$이므로 순서 성질 (2)의 (iii)과 (K4)에 의해 $0 = 0 + 0 \le a + b$이고, 순서 성질 (4)의 (iv)에 의해 $0 \le ab$이다. 따라서 실수의 합과 곱은 $[0, \infty)$에 속한다. 곱셈의 둘째 경우의 값 $0$도 $[0, \infty)$에 속한다.

**2의 증명.** (iv)를 먼저 보인다. $a$가 실수이면 $0$과 $a$가 실수이고 $0 \le a$이므로 $0 \le a$이다. $a = \infty$이면 정의의 둘째 경우에 의해 $0 \le \infty$이다. 어느 $a$든 정의의 둘째 경우에 의해 $a \le \infty$이다. $a$가 실수이면 (1)의 (ii)에 의해 $a \ne \infty$이므로 $a < \infty$이다. 거꾸로 $a < \infty$이면 $a \ne \infty$이므로 (1)의 (ii)에 의해 $a$는 실수이다. 마지막 문장: $b$가 실수이면 $b \ne \infty$이므로 $a \le b$는 정의의 첫째 경우로만 성립하고, 그 경우 $a$는 실수이다. 이 마지막 사실을 아래에서 (가)라 부른다.

(i) $a$, $b$가 실수이면 $b \ne \infty$이므로 $a \le b$는 정의의 첫째 경우, 곧 실수로서 $a \le b$와 같다. $a < b$는 "$a \le b$이고 $a \ne b$"이고, 실수에서 이것은 [[real-order-axioms]]의 $\le$의 정의와 순서 성질 (1)의 (i)에 의해 실수의 $a < b$와 같다.

(ii) 반사: $a$가 실수이면 순서 성질 (1)의 (iv)에 의해 $a \le a$이고, $a = \infty$이면 정의의 둘째 경우이다. 반대칭: $a \le b$이고 $b \le a$라 하자. $a = \infty$이면 $\infty \le b$이고 $\infty$는 실수가 아니므로 정의의 둘째 경우로 $b = \infty = a$이다. $b = \infty$이면 같은 이유로 $a = \infty = b$이다. 둘 다 실수이면 (i)과 순서 성질 (1)의 (ii)에 의해 $a = b$이다. 추이: $a \le b$이고 $b \le c$라 하자. $c = \infty$이면 $a \le c$이다. $c$가 실수이면 (가)에 의해 $b$가 실수이고, 다시 (가)에 의해 $a$가 실수이므로 순서 성질 (1)의 (v)에 의해 $a \le c$이다. 비교 가능성: $b = \infty$이면 $a \le b$, $a = \infty$이면 $b \le a$이고, 둘 다 실수이면 순서 성질 (1)의 (iv)에 의해 $a \le b$이거나 $b \le a$이다.

(iii) "$a < b$"가 성립하지 않는다는 것은 "$a \le b$가 아니거나 $a = b$"라는 것이다. $a \le b$가 아니면 (ii)의 비교 가능성에 의해 $b \le a$이고, $a = b$이면 (ii)의 반사에 의해 $b \le a$이다. 거꾸로 $b \le a$이고 $a < b$라면 $a \le b$이므로 반대칭에 의해 $a = b$가 되어 $a \ne b$와 어긋난다. 섞인 추이: $a < b$이고 $b \le c$이면 (ii)에 의해 $a \le c$이고, $a = c$라면 $c \le b$와 $b \le c$에서 반대칭으로 $b = c = a$가 되어 $a \ne b$와 어긋나므로 $a \ne c$이다. $a \le b$이고 $b < c$인 경우도 $a = c$이면 $b \le a$와 $a \le b$에서 $a = b = c$가 되어 $b \ne c$와 어긋난다.

**3의 증명.** (i) 교환: 둘 다 실수이면 (K1)이고, 그렇지 않으면 양쪽 모두 정의에 의해 $\infty$이다. 결합: $a$, $b$, $c$ 가운데 $\infty$가 있다고 하자. $a$나 $b$가 $\infty$이면 $a + b = \infty$이고, $c = \infty$이면 덧셈의 정의에 의해 어느 경우든 $(a + b) + c = \infty$이다. 같은 방식으로 $b$나 $c$가 $\infty$이면 $b + c = \infty$이고, $a = \infty$이면 바로 $a + (b + c) = \infty$이다. 따라서 양쪽 모두 $\infty$이다. 모두 실수이면 (1)의 (ii)에 의해 중간의 합도 실수이므로 (K2)이다. $a + 0$: $a$가 실수이면 (K4)이고, $a = \infty$이면 $\infty$이다. $a + \infty = \infty$는 정의이다.

(ii) $a \le b$라 하자. $c = \infty$이면 양쪽이 $\infty$이므로 (2)의 (ii)에 의해 $a + c \le b + c$이다. $b = \infty$이면 $b + c = \infty$이므로 (2)의 (iv)에 의해 성립한다. $b$와 $c$가 실수이면 (2)의 (iv)의 (가)에 의해 $a$도 실수이고, 순서 성질 (2)의 (i)에 의해 $a + c \le b + c$이다. 둘째 문장은 첫째 문장과 교환법칙으로 $a + c \le b + c = c + b \le d + b = b + d$를 얻고 (2)의 (ii)의 추이를 쓴다. 셋째 문장은 (2)의 (iv)의 $0 \le b$와 첫째 문장에서 $a = a + 0 \le a + b$이다.

(iii) $a$, $b$가 모두 실수이면 $a + b$는 실수이므로 (2)의 (iv)에 의해 $a + b < \infty$이다. 하나가 $\infty$이면 $a + b = \infty$이다. (2)의 (iv)에 의해 이것이 첫 문장이다. 둘째 문장: $a = b = 0$이면 (K4)에 의해 $a + b = 0$이다. 거꾸로 $a + b = 0$이면 $0$은 실수이므로 첫 문장에 의해 $a$, $b$는 실수이고, $0 \le b$와 순서 성질 (2)의 (i)에 의해 $a = a + 0 \le a + b = 0$이다. $0 \le a$와 순서 성질 (1)의 (ii)에 의해 $a = 0$이고, 같은 방식으로 $b = 0$이다.

**4의 증명.** 먼저 (iv)와 "$0a = 0$"을 본다. $a$, $b$가 실수이면 [[real-number-arithmetic]]의 (K9), (K10)에 의해 $ab = 0$인 것은 정확히 $a = 0$이거나 $b = 0$일 때이다. 하나가 $\infty$이면 정의에 의해 $ab = 0$인 것은 정확히 다른 하나가 $0$일 때이다. 이것이 (iv)이다. $0a$: $a$가 실수이면 (K9)에 의해 $0a = 0$이고, $a = \infty$이면 정의에 의해 $0$이다. $0 < a$이면 $a \ne 0$이므로 정의에 의해 $a\infty = \infty$이다.

(i) 교환: 정의의 세 경우는 $a$와 $b$에 대해 대칭이고, 첫째 경우는 (K1)이다. $1a$: $a$가 실수이면 (K1)과 (K4)에 의해 $1a = a1 = a$이고, $a = \infty$이면 $1 \ne 0$이므로 $\infty$이다. 결합: $a$, $b$, $c$ 가운데 $0$이 있으면 위의 (iv)에 의해 그것이 든 곱이 $0$이고, 다시 (iv)에 의해 양쪽 모두 $0$이다. $0$이 없으면 (iv)에 의해 중간의 곱 $ab$, $bc$도 $0$이 아니다. 이때 $\infty$가 있다고 하자. $c = \infty$이면 $(ab)c$는 $0$이 아닌 $ab$와 $\infty$의 곱이므로 $\infty$이고, $c \ne \infty$이면 $a$나 $b$가 $\infty$이므로 $ab$는 $\infty$와 $0$이 아닌 원소의 곱으로 $\infty$이고 $(ab)c = \infty c = \infty$이다. 같은 방식으로 $a = \infty$이면 $a(bc) = \infty$이고, $a \ne \infty$이면 $bc = \infty$이므로 $a(bc) = \infty$이다. 따라서 양쪽 모두 $\infty$이다. 모두 실수이면 (K2)이다.

(ii) $a = 0$이면 양쪽은 $0$이고 오른쪽은 $0 + 0 = 0$이다. $a = \infty$라 하자. $b + c = 0$이면 (3)의 (iii)에 의해 $b = c = 0$이므로 양쪽은 $0$이다. $b + c \ne 0$이면 (3)의 (iii)에 의해 $b$, $c$ 가운데 $0$이 아닌 것이 있고, 그것과 $\infty$의 곱이 $\infty$이므로 오른쪽은 $\infty$이고 왼쪽도 $\infty$이다. $a$가 $0$이 아닌 실수라 하자. $b$나 $c$가 $\infty$이면 $b + c = \infty$이고 양쪽 모두 $\infty$이다(오른쪽은 $a\infty = \infty$가 든 합이다). $b$, $c$가 실수이면 (K3)이다.

(iii) $a \le b$라 하자. $c = 0$이면 양쪽은 $0$이다. $c = \infty$라 하자. $a = 0$이면 $ca = 0 \le cb$이다((2)의 (iv)). $a \ne 0$이면 $0 < a \le b$이므로 (2)의 (iii)에 의해 $0 < b$이고 $ca = \infty = cb$이다. $c$가 $0$이 아닌 실수라 하자. $b = \infty$이면 $cb = \infty$이고 (2)의 (iv)이다. $b$가 실수이면 (2)의 (iv)의 (가)에 의해 $a$도 실수이고, $0 \le c$와 순서 성질 (4)의 (iii)에 의해 $ac \le bc$이며 (K1)으로 $ca \le cb$이다.

**5의 증명.** (i)과 (ii)의 상한, (iii)의 앞 문장, (iv)의 앞 문장을 함께 보인다. 상한이 둘 이상 있지 않다는 것은 다음과 같다. $u$, $u'$이 모두 $S$의 상한이면 $u \le u'$이고 $u' \le u$이므로 (2)의 (ii)에 의해 $u = u'$이다. 하한도 같다. 상한이 있다는 것은 경우를 나누어 보인다.

- $S = \emptyset$인 경우: (2)의 (iv)에 의해 $0$은 모든 $v$에 대해 $0 \le v$이고, $S$의 원소가 없으므로 $0$은 $S$의 상계이다. 따라서 $0$이 상한이다.
- $S$가 $[0, \infty)$의 공집합이 아닌 부분집합이고 $\mathbb{R}$의 부분집합으로서 위로 유계인 경우: [[least-upper-bound-property|최소상계 성질]] (U)에 의해 실수의 상한 $u$가 있다. $s \in S$를 하나 잡으면 $0 \le s \le u$이므로 $u \in [0, \infty)$이다. $s \in S$이면 실수로서 $s \le u$이므로 (2)의 (i)에 의해 $s \le u$이다. $v$가 이 항목의 뜻의 상계라 하자. $v = \infty$이면 $u \le v$이다. $v$가 실수이면 (2)의 (i)에 의해 $v$는 실수의 상계이고, 실수의 상한의 정의에 의해 $u \le v$이다. 따라서 $u$는 이 항목의 뜻의 상한이다.
- 나머지 경우, 곧 $\infty \in S$이거나, $S$가 $[0, \infty)$의 공집합이 아닌 부분집합이고 위로 유계가 아닌 경우: (2)의 (iv)에 의해 $\infty$는 $S$의 상계이다. $v$를 상계라 하자. $\infty \in S$이면 $\infty \le v$이므로 (2)의 (ii)와 (iv)에 의해 $v = \infty$이다. $S \subseteq [0, \infty)$이고 위로 유계가 아니면, $v$가 실수라고 할 때 (2)의 (i)에 의해 $v$는 실수의 상계가 되어 어긋나므로 $v = \infty$이다. 어느 쪽이든 $\infty \le v$이므로 $\infty$가 상한이다.

세 경우는 모든 $S$를 덮는다($S$가 $\infty$를 품지 않으면 $S \subseteq [0, \infty)$이다). 셋째 경우에만 상한이 $\infty$이고 앞의 두 경우의 상한은 실수이다. 앞의 두 경우를 합친 것이 "$\infty \notin S$이고 $S$가 $\mathbb{R}$의 부분집합으로서 위로 유계"이다($\emptyset$은 [[upper-bound-and-supremum]]의 (5)에 의해 위로 유계이다). 이것으로 (iv)의 앞 문장, (iii)의 앞 문장(둘째 경우), $\sup \emptyset = 0$이 나온다.

하한: $L$을 $S$의 하계 전체의 집합이라 하고 $t = \sup L$로 두자(위에서 보인 대로 있다). $s \in S$이면 $L$의 모든 원소 $\ell$이 $\ell \le s$를 만족하므로 $s$는 $L$의 상계이고, 상한의 정의에 의해 $t \le s$이다. 따라서 $t$는 $S$의 하계이다. $\ell$이 $S$의 하계이면 $\ell \in L$이므로 $\ell \le t$이다. 따라서 $t$는 $S$의 하한이다. $S = \emptyset$이면 모든 원소가 $S$의 하계이므로 $L = [0, \infty]$이고, $\infty \in L$이므로 위의 셋째 경우에 의해 $\inf \emptyset = \sup L = \infty$이다.

(iii)의 뒤 문장: $S$가 $[0, \infty)$의 공집합이 아닌 부분집합이면 실수 $0$이 $S$의 실수의 하계이므로 [[infimum-exists|하한의 존재]]의 (4)에 의해 실수의 하한 $t$가 있다. $0$이 하계이므로 $0 \le t$이고 $t \in [0, \infty)$이다. $t$는 (2)의 (i)에 의해 이 항목의 뜻의 하계이다. $\ell$이 이 항목의 뜻의 하계이면, $S$의 원소 $s$를 하나 잡을 때 $\ell \le s$이고 $s$는 실수이므로 (2)의 (iv)의 (가)에 의해 $\ell$은 실수이고 (2)의 (i)에 의해 실수의 하계이다. 따라서 $\ell \le t$이다. 곧 $t$는 이 항목의 뜻의 하한이다.

(iv)의 뒤 문장: $S' = S - \{\infty\}$로 두면, (2)의 (iv)에 의해 모든 $\ell$이 $\ell \le \infty$이므로 $\ell$이 $S$의 하계인 것은 정확히 $S'$의 하계일 때이다. 하계 전체가 같으므로 하한도 같다.

(v) $b < \sup S$인데 $b < s$인 $s \in S$가 없다고 하자. 그러면 (2)의 (iii)에 의해 모든 $s \in S$에서 $s \le b$이므로 $b$는 상계이고 $\sup S \le b$이다. 이것은 (2)의 (iii)에 의해 $b < \sup S$와 함께 성립하지 않으므로 모순이다. 하한도 부등호를 바꾸어 같다: $\inf S < b$인데 $s < b$인 $s \in S$가 없으면 모든 $s$에서 $b \le s$이므로 $b \le \inf S$가 되어 모순이다.

(vi) $s \in S$마다 $s \le t$인 $t \in T$가 있고 $t \le \sup T$이므로 (2)의 (ii)에 의해 $s \le \sup T$이다. 곧 $\sup T$는 $S$의 상계이고 $\sup S \le \sup T$이다. $S \subseteq T$이면 $t = s$로 잡으면 된다. 이때 $\inf T$는 $T$의 하계이므로 $S$의 하계이기도 하고 $\inf T \le \inf S$이다.

**6의 증명.** (i) $U = \{s + t : s \in S,\ t \in T\}$, $\alpha = \sup S$, $\beta = \sup T$, $\upsilon = \sup U$로 두자. $s \in S$, $t \in T$이면 $s \le \alpha$, $t \le \beta$이므로 (3)의 (ii)에 의해 $s + t \le \alpha + \beta$이다. 따라서 $\upsilon \le \alpha + \beta$이다. 거꾸로 $\alpha + \beta \le \upsilon$을 보인다. $\upsilon = \infty$이면 (2)의 (iv)이다. $\upsilon$이 실수라 하자. $s \in S$, $t \in T$이면 $s + t \le \upsilon$이므로 (2)의 (iv)의 (가)에 의해 $s + t$는 실수이고, (3)의 (iii)에 의해 $s$, $t$는 실수이다. $T$가 공집합이 아니므로 $S$의 모든 원소가 실수이고, 같은 이유로 $T$의 모든 원소가 실수이다. $t \in T$를 하나 고정하면 모든 $s \in S$에서 실수로서 $s + t \le \upsilon$이므로 순서 성질 (2)의 (ii)에 의해 $s \le \upsilon - t$이다. 따라서 $S$는 공집합이 아니고 위로 유계이며 (5)의 (iii)에 의해 $\alpha$는 실수의 상한이고 $\alpha \le \upsilon - t$이다. 다시 순서 성질 (2)의 (ii)에 의해 $t \le \upsilon - \alpha$이고, 이것이 모든 $t \in T$에서 성립하므로 같은 이유로 $\beta \le \upsilon - \alpha$, 곧 $\alpha + \beta \le \upsilon$이다. (2)의 (ii)의 반대칭에 의해 $\upsilon = \alpha + \beta$이다.

(ii) $cS = \{cs : s \in S\}$, $\sigma = \sup S$로 두자.

- $S = \emptyset$이면 $cS = \emptyset$이고 양쪽은 (5)의 (ii)와 (4)의 (i)에 의해 $0 = c \cdot 0$이다.
- $c = 0$이고 $S \ne \emptyset$이면 (4)의 (i)에 의해 $cS = \{0\}$이고, $0$이 그 최댓값이므로 $\sup cS = 0 = 0\sigma$이다.
- $c$가 $0$이 아닌 실수이고 $S \ne \emptyset$이라 하자. $\sigma < \infty$이면 (5)의 (iv)에 의해 $S$는 $[0, \infty)$의 부분집합이고 위로 유계이므로 $cS$도 $[0, \infty)$의 공집합이 아닌 부분집합이다. [[supremum-and-arithmetic|상한과 덧셈·곱셈]]의 (2)에 의해 $cS$는 위로 유계이고 실수의 상한이 $c\sigma$이며, (5)의 (iii)에 의해 이것이 $\sup cS$이다. $\sigma = \infty$이면 (5)의 (iv)에 의해 $\infty \in S$이거나 $S$가 위로 유계가 아니다. $\infty \in S$이면 $c\infty = \infty \in cS$이므로 $\sup cS = \infty$이다. $S \subseteq [0, \infty)$이고 위로 유계가 아닌데 $cS$가 실수 $B$를 상계로 가진다면 모든 $s$에서 $cs \le B$이므로 순서 성질 (6)의 (iv)에 의해 $s \le c^{-1}B$가 되어 어긋난다. 따라서 $cS$는 위로 유계가 아니고 $\sup cS = \infty = c\sigma$이다.
- $c = \infty$이고 $S \ne \emptyset$이라 하자. $\sigma = 0$이면 모든 $s \in S$에서 $0 \le s \le 0$이므로 $s = 0$이고 $cS = \{0\}$이므로 양쪽은 $0$이다. $\sigma \ne 0$이면 $0 < \sigma$이므로 (5)의 (v)에 의해 $0 < s$인 $s \in S$가 있고, $cs = \infty \in cS$이므로 $\sup cS = \infty = \infty\sigma$이다.

**7의 증명.** (i) 앞 문장은 $n$을 고정하고 $m$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $n$)으로 보인다. $m = n$이면 (2)의 (ii)이고, $a_n \le a_m$이면 $a_m \le a_{m+1}$과 (2)의 (ii)의 추이에 의해 $a_n \le a_{m+1}$이다. 뒤 문장은 상한이 상계라는 것이다.

(ii) (5)의 (v)에 의해 $b < a_N$인 자연수 $N$이 있다. $n \ge N$이면 (i)에 의해 $a_N \le a_n$이고 (2)의 (iii)에 의해 $b < a_n$이다.

(iii) $E = \{a_n : n \in \mathbb{N}\}$은 $[0, \infty)$의 공집합이 아닌 부분집합이다. $(a_n)$이 위로 유계이면 [[sequence]]의 (2)에 의해 $E$는 위로 유계이고, [[monotone-convergence-theorem|단조수렴정리]]의 (1)에 의해 수열 $(a_n)$은 실수의 상한 $\sup E$로 수렴한다. (5)의 (iii)에 의해 이것이 이 항목의 $\sup E$이다. 위로 유계가 아니면 $E$가 위로 유계가 아니므로 (5)의 (iv)에 의해 $\sup E = \infty$이다.

(iv) 단조증가: (3)의 (ii)에 의해 $a_n + b_n \le a_{n+1} + b_{n+1}$이고, (4)의 (iii)에 의해 $c\,a_n \le c\,a_{n+1}$이다. $A = \{a_n : n \in \mathbb{N}\}$, $B = \{b_n : n \in \mathbb{N}\}$, $U = \{s + t : s \in A,\ t \in B\}$라 하자. (6)의 (i)에 의해 $\sup U = \sup A + \sup B$이다. $a_n + b_n \in U$이므로 (5)의 (vi)에 의해 $\sup\{a_n + b_n : n \in \mathbb{N}\} \le \sup U$이다. 거꾸로 $U$의 원소 $a_m + b_k$에 대하여 $p = \max\{m, k\}$([[absolute-value]]의 두 수의 최대)로 두면, 그 항목의 (11)에 의해 $p$는 집합 $\{m, k\}$의 최댓값이므로 $m$, $k$ 가운데 하나여서 자연수이고 $m \le p$, $k \le p$이다. 따라서 (i)과 (3)의 (ii)에 의해 $a_m + b_k \le a_p + b_p$이다. (5)의 (vi)에 의해 $\sup U \le \sup\{a_n + b_n : n \in \mathbb{N}\}$이다. 반대칭으로 첫 등식이 나온다. 둘째 등식은 (6)의 (ii)를 $S = A$에 쓴 것이다. 셋째 문장은 (5)의 (vi)에서 $s = a_n$에 $t = b_n$을 잡은 것이다. 모든 항이 $c$인 원소열은 (2)의 (ii)에 의해 단조증가이고 값의 집합이 $\{c\}$이며 그 상한은 $c$이다.

(v) $j < j'$이면 $n_j < n_{j'}$이므로 (i)에 의해 $a_{n_j} \le a_{n_{j'}}$이고, 특히 $j' = j + 1$에서 단조증가이다. 값의 집합 $\{a_{n_j} : j \in \mathbb{N}\}$은 $\{a_n : n \in \mathbb{N}\}$의 부분집합이므로 (5)의 (vi)에 의해 $\lim_{j} a_{n_j} \le \lim_n a_n$이다. 거꾸로 자연수 $n$마다 [[subsequence]]의 (1)에 의해 $n \le n_n$이므로 (i)에 의해 $a_n \le a_{n_n}$이고, (5)의 (vi)에 의해 $\lim_n a_n \le \lim_j a_{n_j}$이다.

**8의 증명.** (i) $a \le b$이면 $a$는 $\{a, b\}$의 하계이다($a \le a$, $a \le b$). $\ell$이 하계이면 $a \in \{a, b\}$이므로 $\ell \le a$이다. 따라서 $a$가 하한이고 (5)의 (i)에 의해 $\min\{a, b\} = a$이다. 같은 방식으로 $b$는 상계이고 모든 상계 $u$에서 $b \le u$이므로 $\max\{a, b\} = b$이다. (2)의 (ii)에 의해 $a \le b$이거나 $b \le a$이고, 뒤의 경우는 $\{a, b\} = \{b, a\}$에 같은 논법을 쓰면 $\min\{a, b\} = b$, $\max\{a, b\} = a$이다. 어느 경우든 둘째 문장의 부등식이 나온다. $b = \infty$이면 (2)의 (iv)에 의해 $a \le \infty$이다.

(ii) $\{a, b\}$는 $[0, \infty)$의 공집합이 아닌 부분집합이고 위로 유계이므로, (5)의 (iii)에 의해 이 항목의 $\sup\{a, b\}$, $\inf\{a, b\}$는 실수의 상한·하한과 같다. [[absolute-value]]의 (11)에 의해 그것은 두 실수의 최대 $\max\{a, b\}$, 최소 $\min\{a, b\}$이다. $\blacksquare$
:::

## 예시와 반례

:::example[세 집합의 상한]
- $S = \{1 - n^{-1} : n \in \mathbb{N}\}$은 $[0, \infty)$의 공집합이 아닌 부분집합이고 $1$이 실수의 상계이므로 (5)의 (iii)에 의해 $\sup S$는 실수의 상한과 같습니다. 실수의 상한은 $1$입니다.
- $S = \mathbb{N}$은 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 위로 유계가 아니고 $\infty \notin \mathbb{N}$이므로 (5)의 (iv)에 의해 $\sup \mathbb{N} = \infty$입니다. 실수의 상한은 없습니다.
- $S = \emptyset$이면 (5)의 (ii)에 의해 $\sup S = 0$입니다. 실수의 상한은 [[upper-bound-and-supremum]]의 (5)에 의해 없습니다.

자연수 $n$에서 $0 < n^{-1} \le 1$이므로([[order-properties-of-reals]]의 (10)과 (6)의 (ii)) $0 \le 1 - n^{-1} < 1$입니다. 따라서 첫째 집합은 $[0, \infty)$의 부분집합이고 $1$은 상계입니다. $b < 1$인 실수 $b$를 잡으면 $0 < 1 - b$이므로 [[archimedean-property]]의 (3)에 의해 $n^{-1} < 1 - b$인 자연수 $n$이 있고, 이때 $b < 1 - n^{-1}$이므로 $b$는 상계가 아닙니다. 따라서 실수의 상한은 $1$입니다.
:::

:::example[어느 항에서 $\infty$가 되는 단조증가열]
$n \le 2$이면 $a_n = n$, $n \ge 3$이면 $a_n = \infty$인 원소열 $(a_n)$은 $1 \le 2 \le \infty \le \infty \le \cdots$이므로 단조증가이고, $\infty$가 값의 집합에 속하므로 (5)의 (iv)에 의해 $\lim_{n \to \infty} a_n = \infty$입니다. 이 원소열은 [[sequence]]의 수열이 아닙니다(값이 실수가 아닌 항이 있습니다).

모든 항이 $5$인 원소열 $(b_n)$을 더한 $(a_n + b_n)$은 $6, 7, \infty, \infty, \dots$이고, (7)의 (iv)에 의해 그 극한은 $\infty + 5 = \infty$입니다. 값의 집합 $\{6, 7, \infty\}$의 상한도 $\infty$이므로 두 계산이 맞습니다.
:::

:::counterexample[덧셈의 소거가 깨지는 예]
$1 + \infty = \infty = 2 + \infty$이지만 $1 \ne 2$입니다. 실수에서는 $a + c = b + c$이면 양변에 $-c$를 더해 $a = b$를 얻지만, $c = \infty$이면 더해 줄 $-\infty$가 $[0, \infty]$에 없습니다. 이 항목이 뺄셈 $\infty - \infty$를 정하지 않는 까닭이 이것입니다. 어떤 값으로 정하든 $(1 + \infty) - \infty$와 $(2 + \infty) - \infty$가 같은 값이 되어 "$(a + c) - c = a$"가 성립하지 않습니다.

곱셈도 같습니다. $1 \cdot \infty = 2 \cdot \infty$이므로 양변을 $\infty$로 "나누어" $1 = 2$를 얻을 수 없습니다.
:::

:::counterexample[$a_n = n^{-1}$과 $b_n = n$의 곱]
$b_n = n$은 단조증가인 원소열이고 (7)의 (iii)에 의해 $\lim_{n \to \infty} b_n = \infty$입니다. $a_n = n^{-1}$은 실수열로서 $0$으로 수렴하지만 단조감소입니다. 두 극한을 곱하면 $0 \cdot \infty = 0$인데, 항끼리의 곱은 모든 $n$에서 $a_n b_n = 1$이므로 $1$로 수렴합니다. 곧 $0 \cdot \infty = 0$이라는 약속은 극한과 곱셈을 바꾸는 규칙을 일반적으로 주지 않습니다. (7)의 (iv)의 곱은 상수 $c$와 단조증가열의 곱뿐입니다.
:::

## 확인 질문

:::check[$2 \cdot \infty + 0 \cdot \infty$와 $(2 + 0) \cdot \infty$는 각각 무엇인가?]
둘 다 $\infty$입니다. $0 < 2$이므로 $2 \cdot \infty = \infty$이고 $0 \cdot \infty = 0$이므로 앞의 것은 $\infty + 0 = \infty$입니다. 뒤의 것은 $2 \cdot \infty = \infty$입니다. 두 값이 같은 것은 (4)의 (ii)의 분배법칙과 맞습니다.
:::

:::check[$\{a \in [0, \infty] : a < \infty\}$ 의 상한은 무엇이고, 이 상한은 집합에 속하는가?]
상한은 $\infty$이고 집합에 속하지 않습니다. (2)의 (iv)에 의해 이 집합은 $[0, \infty)$이고, $\mathbb{N} \subseteq [0, \infty)$인데 $\mathbb{N}$은 [[archimedean-property]]의 (1)에 의해 위로 유계가 아니므로 $[0, \infty)$도 위로 유계가 아닙니다. (5)의 (iv)에 의해 상한은 $\infty$입니다. $\infty$는 실수가 아니므로 $[0, \infty)$에 속하지 않습니다.
:::

:::check[$\inf\{\infty\}$와 $\inf \emptyset$은 무엇인가?]
둘 다 $\infty$입니다. $\{\infty\}$의 하계는 (2)의 (iv)에 의해 모든 원소이므로 그 가운데 가장 큰 것은 $\infty$입니다. $\inf \emptyset = \infty$는 (5)의 (ii)입니다. 하한이 같아도 두 집합은 다릅니다. 상한은 $\sup\{\infty\} = \infty$, $\sup \emptyset = 0$입니다.
:::
