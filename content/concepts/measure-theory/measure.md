---
title: 측도와 측도공간
title_en: Measure and Measure Space
aliases: [측도, 측도공간, 유한 측도, σ-가법성, 가산 가법성, 유한 가법성, 가산 준가법성, measure, measure space, finite measure, countable additivity, countable subadditivity]
kind: definition
field: measure-theory
msc: ["28A10"]
level: undergrad
summary: "가측공간의 σ-대수에서 [0, ∞] 로 가는 함수 가운데 공집합에서 0 이고 서로소인 집합열의 합집합에서 값의 합과 같은 것을 측도라 하고, 유한 가법성, 포함된 집합과의 차의 꼴과 단조성, 두 집합의 합집합과 교집합의 등식, 가산 준가법성을 증명한다."
requires: [set-operations, prime-number, well-ordering-principle, real-number-arithmetic, finite-set, natural-numbers-are-infinite, indicator-function, sequence-of-sets, sigma-algebra, extended-nonnegative-reals, series-in-extended-nonnegative-reals]
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 4.1절 Definitions and examples, Definition 4.1 (p.89–90), Definition 4.2 (p.90), Proposition 4.4 (p.90–92), Proposition 4.13 (p.96), Proposition 4.21 (p.102); 4.2절 Measure spaces, Definition 4.24 (p.104); 4.5절 Exercises, Exercise 4.3 (p.112), Exercise 4.13 (p.113)
    checked: original
    note: "출처의 Definition 4.1(p.89–90)은 가측공간 (X, S) 위의 측도를 함수 µ : S → R̄ 로 두고 (M1) µ(∅) = 0, (M2) 모든 A ∈ S 에서 µ(A) ≥ 0, (M3) 서로소인 열의 σ-가법성을 요구한다. 이 항목은 값의 집합을 [0, ∞] 로 두어 출처의 (M2)를 대신하고, 출처의 (M3)을 이 항목의 (M2)로 적는다. 유한 측도는 출처의 Definition 4.2(p.90)와 같다. 출처의 σ-유한은 이 항목에 두지 않았다. 측도공간은 출처의 Definition 4.24(p.104)와 같다. 출처의 가측공간은 X 가 공집합이 아니지만 이 사이트의 가측공간은 X = ∅ 을 허락한다. (1)의 (iii)은 출처의 Proposition 4.4 (1)(p.90)이고 증명도 같은 방법(뒤 항을 공집합으로 채운 열)이다. (1)의 (i)(ii)는 같은 방법으로 N 개의 집합에 대해 진술했다. (2)는 출처의 Proposition 4.4 (2)(3)(p.90–91)이다. 출처의 (3)은 µ(A) < +∞ 를 가정하고 µ(B ∖ A) = µ(B) − µ(A) 라 적는데, [0, ∞] 에는 뺄셈이 없으므로 이 항목은 µ(B) = µ(A) + µ(B − A) 꼴로 진술하고, 실수의 뺄셈은 µ(B) < ∞ 일 때만 쓰며, µ(A) < ∞ = µ(B) 이면 µ(B − A) = ∞ 라는 것을 따로 적었다. (3)의 등식은 출처의 Proposition 4.4 (4)(p.91–92)이고, 이 항목은 A ∪ B 를 A − B 와 B 로 나누어 증명했다. (4)의 첫 부등식은 출처의 Proposition 4.21(p.102)이고 증명도 같은 방법(서로소로 바꾼 열)이다. 예시 '값 $\\infty$를 갖는 두 점 위의 측도'의 측도는 3δ_1 + ∞·δ_2 꼴로, 출처 Proposition 4.13(p.96)의 측도의 일차결합과 같은 꼴이다(출처의 계수는 0 이상인 실수이다). 반례 '(M1)을 만족하지만 σ-가법이 아닌 함수'의 함수는 출처 Exercise 4.3(p.112)의 µ(유한집합에서 0, 무한집합에서 +∞)를 X = ℕ 에 둔 것과 같다. 확인 질문 '모든 원소에서 값이 $\\infty$인 함수 $\\mathcal{M} \\to [0, \\infty]$는 측도인가?'는 출처 Exercise 4.13 (2)(p.113, µ(∅) = 0 이 다른 조건에서 나오지 않는 예를 들라)와 같은 발상이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(셈측도·디랙 측도·축약의 경계 경우, 유한 가법성의 N = 0). 독립 검토 없음."
added: 2026-11-28
---

:::statement
가측공간, $\mathcal{M}$의 원소로 된 집합열, (σ1)–(σ3)은 [[sigma-algebra|σ-대수와 가측공간]]의 것이다. 집합열, 서로소인 집합열, $\bigcup_{n=1}^{N} A_n$, $\bigcup_{n=1}^{\infty} A_n$, $\bigcup_{n=K}^{\infty} A_n$은 [[sequence-of-sets|집합열]]의 것이다. $[0, \infty]$와 그 순서, 덧셈은 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 것이고, $[0, \infty]$의 원소의 유한 합 $\sum_{n=1}^{N}$과 원소열의 합 $\sum_{n=1}^{\infty}$, $\sum_{n=K}^{\infty}$는 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 것이다. 아래에서 $(X, \mathcal{M})$은 가측공간이다.

**측도.** 함수 $\mu : \mathcal{M} \to [0, \infty]$가 $(X, \mathcal{M})$ 위의 **측도**(measure)인 것은 정확히 다음 두 조건이 성립할 때이다.

- (M1) $\mu(\emptyset) = 0$이다.
- (M2) $(A_n)$이 $\mathcal{M}$의 원소로 된 서로소인 집합열이면
  $$
  \mu\Bigl( \bigcup_{n=1}^{\infty} A_n \Bigr) = \sum_{n=1}^{\infty} \mu(A_n)
  $$
  이다.

(M1)의 $\emptyset$은 σ-대수의 (1)에 의해 $\mathcal{M}$의 원소이고, (M2)의 왼쪽은 (σ3)에 의해 $\mathcal{M}$의 원소인 합집합에서의 값이며, 오른쪽은 $n$번째 항이 $\mu(A_n)$인 $[0, \infty]$의 원소열의 합이다. (M2)를 $\mu$의 **σ-가법성**(countable additivity)이라 한다. $A \in \mathcal{M}$에서의 값 $\mu(A)$를 $A$의 **측도**라 한다.

$\mu$가 $(X, \mathcal{M})$ 위의 측도일 때 세 쌍 $(X, \mathcal{M}, \mu)$를 **측도공간**(measure space)이라 한다. $\mu(X) < \infty$, 곧 $\mu(X)$가 실수일 때 $\mu$를 **유한 측도**(finite measure)라 한다.

다음이 성립한다. 아래에서 $(X, \mathcal{M}, \mu)$는 측도공간이고 $A$, $B$는 $\mathcal{M}$의 원소이다.

1. (유한 가법성)
   - (i) $(A_n)$이 $\mathcal{M}$의 원소로 된 서로소인 집합열이면 $0$ 이상인 모든 정수 $N$에서 $\mu\bigl(\bigcup_{n=1}^{N} A_n\bigr) = \sum_{n=1}^{N} \mu(A_n)$이다.
   - (ii) $N$이 $0$ 이상인 정수이고, $1 \le n \le N$인 정수 $n$마다 $\mathcal{M}$의 원소 $B_n$이 정해져 있으며, $n \ne m$이면 $B_n \cap B_m = \emptyset$이라 하자. $1 \le n \le N$이면 $B_n$, $N < n$이면 $\emptyset$인 집합열을 $B_1, \dots, B_N$을 **$\emptyset$으로 채운 집합열**이라 한다. 이것은 $\mathcal{M}$의 원소로 된 서로소인 집합열이다. 그 $\bigcup_{n=1}^{N}$을 $\bigcup_{n=1}^{N} B_n$으로 쓰면, 대상 $x$가 $\bigcup_{n=1}^{N} B_n$의 원소인 것은 정확히 $x \in B_n$인 정수 $n$이 $1 \le n \le N$에 있을 때이고
     $$
     \mu\Bigl( \bigcup_{n=1}^{N} B_n \Bigr) = \sum_{n=1}^{N} \mu(B_n)
     $$
     이다.
   - (iii) $A \cap B = \emptyset$이면 $\mu(A \cup B) = \mu(A) + \mu(B)$이다.
2. (포함된 집합과의 차, 단조성) $A \subseteq B$이면 $B - A \in \mathcal{M}$이고
   $$
   \mu(B) = \mu(A) + \mu(B - A)
   $$
   이다. 따라서 $\mu(A) \le \mu(B)$이다. 또 다음이 성립한다.
   - (i) $\mu(B) < \infty$이면 $\mu(A)$와 $\mu(B - A)$는 실수이고, 실수의 뺄셈으로 $\mu(B - A) = \mu(B) - \mu(A)$이다.
   - (ii) $\mu(A) < \infty$이고 $\mu(B) = \infty$이면 $\mu(B - A) = \infty$이다.
   - (iii) $\mu$가 유한 측도이면 $\mathcal{M}$의 모든 원소의 측도는 실수이다.
3. (두 집합의 합집합과 교집합)
   $$
   \begin{aligned}
   &\mu(A \cup B) + \mu(A \cap B) \\
   &\quad = \mu(A) + \mu(B)
   \end{aligned}
   $$
   이고, 따라서 $\mu(A \cup B) \le \mu(A) + \mu(B)$이다.
4. (가산 준가법성) $(A_n)$이 $\mathcal{M}$의 원소로 된 집합열이면(서로소가 아니어도 된다) 다음이 성립한다.
   - (i) $\mu\bigl(\bigcup_{n=1}^{\infty} A_n\bigr) \le \sum_{n=1}^{\infty} \mu(A_n)$이다.
   - (ii) $0$ 이상인 모든 정수 $N$에서 $\mu\bigl(\bigcup_{n=1}^{N} A_n\bigr) \le \sum_{n=1}^{N} \mu(A_n)$이다.
   - (iii) 모든 자연수 $K$에서 $\mu\bigl(\bigcup_{n=K}^{\infty} A_n\bigr) \le \sum_{n=K}^{\infty} \mu(A_n)$이다.
:::

:::english
Measurable spaces, sequences of elements of $\mathcal{M}$, and (σ1)–(σ3) are as in the σ-algebra entry. Sequences of sets, pairwise disjoint sequences, $\bigcup_{n=1}^{N} A_n$, $\bigcup_{n=1}^{\infty} A_n$ and $\bigcup_{n=K}^{\infty} A_n$ are as in the entry on sequences of sets. $[0, \infty]$ with its order and addition is as in the entry on extended nonnegative reals, and finite sums $\sum_{n=1}^{N}$ of elements of $[0, \infty]$ and sums $\sum_{n=1}^{\infty}$, $\sum_{n=K}^{\infty}$ of sequences in $[0, \infty]$ are as in the entry on sums in $[0, \infty]$. Below, $(X, \mathcal{M})$ is a measurable space.

**Measure.** A function $\mu : \mathcal{M} \to [0, \infty]$ is a **measure** on $(X, \mathcal{M})$ exactly when the following two conditions hold.

- (M1) $\mu(\emptyset) = 0$.
- (M2) If $(A_n)$ is a pairwise disjoint sequence of elements of $\mathcal{M}$, then
  $$
  \mu\Bigl( \bigcup_{n=1}^{\infty} A_n \Bigr) = \sum_{n=1}^{\infty} \mu(A_n).
  $$

The set $\emptyset$ in (M1) belongs to $\mathcal{M}$ by (1) of the σ-algebra entry; the left side of (M2) is the value at the union, which belongs to $\mathcal{M}$ by (σ3), and the right side is the sum of the sequence in $[0, \infty]$ whose $n$th term is $\mu(A_n)$. Condition (M2) is called the **countable additivity** of $\mu$. For $A \in \mathcal{M}$, the value $\mu(A)$ is called the **measure** of $A$.

When $\mu$ is a measure on $(X, \mathcal{M})$, the triple $(X, \mathcal{M}, \mu)$ is called a **measure space**. When $\mu(X) < \infty$, that is, when $\mu(X)$ is a real number, $\mu$ is called a **finite measure**.

The following hold. Below, $(X, \mathcal{M}, \mu)$ is a measure space and $A$, $B$ are elements of $\mathcal{M}$.

1. (Finite additivity)
   - (i) If $(A_n)$ is a pairwise disjoint sequence of elements of $\mathcal{M}$, then $\mu\bigl(\bigcup_{n=1}^{N} A_n\bigr) = \sum_{n=1}^{N} \mu(A_n)$ for every integer $N \ge 0$.
   - (ii) Let $N$ be an integer with $N \ge 0$, suppose that for each integer $n$ with $1 \le n \le N$ an element $B_n$ of $\mathcal{M}$ is given, and that $B_n \cap B_m = \emptyset$ whenever $n \ne m$. The sequence of sets that is $B_n$ for $1 \le n \le N$ and $\emptyset$ for $N < n$ is called the sequence **obtained by filling $B_1, \dots, B_N$ with $\emptyset$**. It is a pairwise disjoint sequence of elements of $\mathcal{M}$. Writing its $\bigcup_{n=1}^{N}$ as $\bigcup_{n=1}^{N} B_n$, an object $x$ belongs to $\bigcup_{n=1}^{N} B_n$ exactly when $x \in B_n$ for some integer $n$ with $1 \le n \le N$, and
     $$
     \mu\Bigl( \bigcup_{n=1}^{N} B_n \Bigr) = \sum_{n=1}^{N} \mu(B_n).
     $$
   - (iii) If $A \cap B = \emptyset$, then $\mu(A \cup B) = \mu(A) + \mu(B)$.
2. (Difference with a contained set, monotonicity) If $A \subseteq B$, then $B - A \in \mathcal{M}$ and
   $$
   \mu(B) = \mu(A) + \mu(B - A).
   $$
   Hence $\mu(A) \le \mu(B)$. Moreover:
   - (i) If $\mu(B) < \infty$, then $\mu(A)$ and $\mu(B - A)$ are real numbers and, with real subtraction, $\mu(B - A) = \mu(B) - \mu(A)$.
   - (ii) If $\mu(A) < \infty$ and $\mu(B) = \infty$, then $\mu(B - A) = \infty$.
   - (iii) If $\mu$ is a finite measure, then the measure of every element of $\mathcal{M}$ is a real number.
3. (Union and intersection of two sets)
   $$
   \begin{aligned}
   &\mu(A \cup B) + \mu(A \cap B) \\
   &\quad = \mu(A) + \mu(B),
   \end{aligned}
   $$
   and hence $\mu(A \cup B) \le \mu(A) + \mu(B)$.
4. (Countable subadditivity) If $(A_n)$ is a sequence of elements of $\mathcal{M}$ (not necessarily pairwise disjoint), then:
   - (i) $\mu\bigl(\bigcup_{n=1}^{\infty} A_n\bigr) \le \sum_{n=1}^{\infty} \mu(A_n)$.
   - (ii) $\mu\bigl(\bigcup_{n=1}^{N} A_n\bigr) \le \sum_{n=1}^{N} \mu(A_n)$ for every integer $N \ge 0$.
   - (iii) $\mu\bigl(\bigcup_{n=K}^{\infty} A_n\bigr) \le \sum_{n=K}^{\infty} \mu(A_n)$ for every natural number $K$.
:::

## 직관

측도는 집합에 "크기"를 주는 함수입니다. 물건의 질량이나 유한집합의 원소의 개수가 이런 크기를 떠올리게 합니다. 질량으로 비유하면, $\mu(A)$는 영역 $A$에 놓인 물질의 질량이고, 아무것도 없는 곳의 질량은 $0$이며((M1)), 겹치지 않는 조각들의 질량을 모두 더하면 그 조각들을 합친 곳의 질량이 됩니다((M2)). 비유가 정의보다 좁은 곳이 있습니다. 측도는 값 $\infty$를 가질 수 있고, $\mathcal{M}$에 들지 않는 집합에는 아예 값을 주지 않습니다.

(M2)는 서로소인 집합이 끝없이 많을 때에도 합을 요구합니다. 오른쪽 합은 $[0, \infty]$에서 늘 정해지므로, 이 조건은 "합이 있으면"이 아니라 언제나 등식입니다. 유한 개의 조각에 대한 등식 (1)은 남는 자리를 공집합으로 채워 (M2)에서 얻습니다.

$[0, \infty]$에는 뺄셈이 없으므로 (2)는 $\mu(B - A)$를 $\mu(B) - \mu(A)$로 쓰지 않고 $\mu(B) = \mu(A) + \mu(B - A)$로 씁니다. $\mu(A) = \mu(B) = \infty$이면 이 등식은 $\infty = \infty + \mu(B - A)$이고 $\mu(B - A)$에 대해 아무것도 알려 주지 않습니다(아래 예시). 뺄셈은 $\mu(B)$가 실수일 때만 씁니다.

(4)는 서로소가 아닌 집합열에서는 겹친 부분을 여러 번 세므로 합집합의 측도가 측도의 합보다 클 수 없다는 것입니다. 증명은 [[sequence-of-sets|집합열]]의 (7)로 열을 서로소로 바꾼 뒤 (M2)를 씁니다. 겹치는 곳의 측도가 $0$이면 등호가 될 수 있습니다.

## 성질의 증명

:::proof
정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다룬다. 집합열의 원소 판정, 포함, 유한 합집합은 [[sequence-of-sets|집합열]]의 (1), (2), (3)이고, 차집합과 합집합, 교집합의 원소 판정은 [[set-operations|집합의 연산]]의 정의이다. σ-대수의 성질은 [[sigma-algebra|σ-대수와 가측공간]]의 번호로, $[0, \infty]$의 성질은 [[extended-nonnegative-reals|0 이상인 확장된 실수 항목]]의 번호로, 합의 성질은 [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]]의 번호로 인용한다.

**(가) 뒤가 공집합인 서로소인 열.** $(C_n)$이 $\mathcal{M}$의 원소로 된 서로소인 집합열이고 $N$이 $0$ 이상인 정수이며 $N < n$인 모든 자연수 $n$에서 $C_n = \emptyset$이면 $\mu\bigl(\bigcup_{n=1}^{N} C_n\bigr) = \sum_{n=1}^{N} \mu(C_n)$임을 먼저 보인다. 집합열의 (1)에 의해 대상 $x$가 $\bigcup_{n=1}^{\infty} C_n$의 원소인 것은 $x \in C_n$인 자연수 $n$이 있을 때이다. 그런 $n$은 $C_n \ne \emptyset$이므로 (Z5)에 의해 $n \le N$이고, 자연수이므로 (Z1)에 의해 $1 \le n$이어서 $n \in \{1, \dots, N\}$이다. 거꾸로 $n \in \{1, \dots, N\}$이면 $n$은 자연수이다. 따라서 집합열의 (1)에 의해 $\bigcup_{n=1}^{\infty} C_n = \bigcup_{n=1}^{N} C_n$이다. (M2)에 의해 $\mu\bigl(\bigcup_{n=1}^{N} C_n\bigr) = \sum_{n=1}^{\infty} \mu(C_n)$이다. $N < n$이면 (M1)에 의해 $\mu(C_n) = \mu(\emptyset) = 0$이므로, 합 항목의 (4)에 의해 이 합은 $\sum_{n=1}^{N} \mu(C_n)$이다.

**(1)** (i) $n \le N$이면 $C_n = A_n$, $N < n$이면 $C_n = \emptyset$으로 두면 (Z5)에 의해 각 $n$에서 둘 가운데 정확히 하나이므로 [[sequence-of-sets|집합열]]의 진술에 의해 $n$번째 항이 $C_n$인 집합열이 있다. σ-대수의 (1)에 의해 $\emptyset \in \mathcal{M}$이므로 모든 항이 $\mathcal{M}$의 원소이다. $n \ne m$이면 둘 다 $N$ 이하일 때 $C_n \cap C_m = A_n \cap A_m = \emptyset$이고, 그렇지 않으면 한쪽이 $\emptyset$이어서 $C_n \cap C_m = \emptyset$이다. 곧 $(C_n)$은 서로소이다. $T = \{1, \dots, N\}$의 원소 $n$에서 $C_n = A_n$이므로 집합열의 (1)에 의해 $\bigcup_{n=1}^{N} C_n = \bigcup_{n=1}^{N} A_n$이다. (가)에 의해 $\mu\bigl(\bigcup_{n=1}^{N} A_n\bigr) = \sum_{n=1}^{N} \mu(C_n)$이고, $1 \le n \le N$에서 $\mu(C_n) = \mu(A_n)$이므로 합 항목의 (1)의 (ii)에 의해 이것은 $\sum_{n=1}^{N} \mu(A_n)$이다.

(ii) $\emptyset$으로 채운 집합열을 $(C_n)$이라 하자. 이것이 집합열로 정해지는 것과 $\mathcal{M}$의 원소로 된 서로소인 집합열이라는 것은 (i)의 앞부분과 같은 논법이다(여기서는 $n \ne m$이고 둘 다 $N$ 이하일 때 가정 $B_n \cap B_m = \emptyset$을 쓴다). 집합열의 (1)에 의해 $x \in \bigcup_{n=1}^{N} C_n$인 것은 $x \in C_n$인 $n \in \{1, \dots, N\}$이 있을 때이고, 그런 $n$에서 $C_n = B_n$이다. (가)를 $(C_n)$에 쓰고 $1 \le n \le N$에서 $\mu(C_n) = \mu(B_n)$이므로 합 항목의 (1)의 (ii)에 의해 등식을 얻는다.

(iii) $N = 2$, $B_1 = A$, $B_2 = B$로 두면 $1 \ne 2$이고 $B_1 \cap B_2 = A \cap B = \emptyset$이므로 (ii)를 쓸 수 있다. (ii)에 의해 $x \in \bigcup_{n=1}^{2} B_n$인 것은 $x \in B_1 = A$이거나 $x \in B_2 = B$일 때, 곧 $x \in A \cup B$일 때이다. 합 항목의 (1)의 (i)에 의해 $\sum_{n=1}^{2} \mu(B_n) = \sum_{n=1}^{1} \mu(B_n) + \mu(B_2) = \mu(A) + \mu(B)$이다. 따라서 $\mu(A \cup B) = \mu(A) + \mu(B)$이다.

**(2)** σ-대수의 (1)에 의해 $B - A \in \mathcal{M}$이다. $B = A \cup (B - A)$이다: $x \in B$이면 $x \in A$이거나 $x \notin A$이고, 뒤의 경우 $x \in B - A$이다. 거꾸로 $A \subseteq B$이고 $B - A \subseteq B$이다. 또 $A \cap (B - A) = \emptyset$이다($x \in A$와 $x \notin A$가 함께 성립할 수 없다). (1)의 (iii)에 의해 $\mu(B) = \mu(A) + \mu(B - A)$이고, $[0, \infty]$의 (3)의 (ii)(곧 $a \le a + b$)에 의해 $\mu(A) \le \mu(B)$이다.

(i) $\mu(B) < \infty$이면 $[0, \infty]$의 (3)의 (iii)에 의해 $\mu(A) < \infty$이고 $\mu(B - A) < \infty$이며, (2)의 (iv)에 의해 둘 다 실수이다. 두 실수의 $[0, \infty]$에서의 합은 실수의 합이므로 $\mu(B) = \mu(A) + \mu(B - A)$는 실수의 등식이고, [[real-number-arithmetic]]에 의해 양변에서 $\mu(A)$를 빼면 $\mu(B - A) = \mu(B) - \mu(A)$이다.

(ii) $\mu(A) + \mu(B - A) = \mu(B) = \infty$는 $\infty$보다 작지 않으므로, $[0, \infty]$의 (3)의 (iii)에 의해 $\mu(A) < \infty$와 $\mu(B - A) < \infty$가 함께 성립하지는 않는다. $\mu(A) < \infty$이므로 $\mu(B - A) < \infty$가 아니고, $[0, \infty]$의 (2)의 (iii)에 의해 $\infty \le \mu(B - A)$이며 (2)의 (iv)와 (ii)에 의해 $\mu(B - A) = \infty$이다.

(iii) $A \in \mathcal{M}$이면 $A \subseteq X$이므로 앞에서 보인 단조성에 의해 $\mu(A) \le \mu(X) < \infty$이고, $[0, \infty]$의 (2)의 (iii)에 의해 $\mu(A) < \infty$, 곧 $\mu(A)$는 실수이다.

**(3)** σ-대수의 (1)에 의해 $A \cup B$, $A \cap B$, $A - B$는 $\mathcal{M}$의 원소이다. $A \cup B = (A - B) \cup B$이다: $x \in A \cup B$이고 $x \notin B$이면 $x \in A$이므로 $x \in A - B$이고, 거꾸로 $A - B \subseteq A$이다. $(A - B) \cap B = \emptyset$이다. 그러므로 (1)의 (iii)에 의해 $\mu(A \cup B) = \mu(A - B) + \mu(B)$이다. 한편 $A \cap B \subseteq A$이고 $A - (A \cap B) = A - B$이다($x \in A$일 때 "$x \in A$이고 $x \in B$"가 아닌 것은 $x \notin B$인 것이다). (2)에 의해 $\mu(A) = \mu(A \cap B) + \mu(A - B)$이다. $[0, \infty]$의 (3)의 (i)(교환법칙과 결합법칙)에 의해
$$
\begin{aligned}
&\mu(A \cup B) + \mu(A \cap B) \\
&\quad = \mu(A - B) + \mu(B) + \mu(A \cap B) \\
&\quad = \bigl(\mu(A \cap B) + \mu(A - B)\bigr) + \mu(B) \\
&\quad = \mu(A) + \mu(B)
\end{aligned}
$$
이다. $[0, \infty]$의 (3)의 (ii)에 의해 $\mu(A \cup B) \le \mu(A \cup B) + \mu(A \cap B) = \mu(A) + \mu(B)$이다.

**(4)** $(E_n)$을 집합열의 (7)의 집합열, 곧 $n$번째 항이 $A_n - \bigcup_{i=1}^{n-1} A_i$인 집합열이라 하자. σ-대수의 (3)에 의해 $(E_n)$은 $\mathcal{M}$의 원소로 된 서로소인 집합열이고, 집합열의 (7)의 (i)에 의해 모든 $n$에서 $E_n \subseteq A_n$이므로 (2)에 의해 $\mu(E_n) \le \mu(A_n)$이다.

(i) 집합열의 (7)의 (iii)에 의해 $\bigcup_{n=1}^{\infty} E_n = \bigcup_{n=1}^{\infty} A_n$이다. (M2)와 합 항목의 (5)의 비교에 의해 $\mu\bigl(\bigcup_{n=1}^{\infty} A_n\bigr) = \sum_{n=1}^{\infty} \mu(E_n) \le \sum_{n=1}^{\infty} \mu(A_n)$이다.

(ii) 집합열의 (7)의 (iii)에 의해 $\bigcup_{n=1}^{N} E_n = \bigcup_{n=1}^{N} A_n$이다. (1)의 (i)과 합 항목의 (1)의 (iii)의 비교에 의해 $\mu\bigl(\bigcup_{n=1}^{N} A_n\bigr) = \sum_{n=1}^{N} \mu(E_n) \le \sum_{n=1}^{N} \mu(A_n)$이다.

(iii) 자연수 $j$에서 $j + K - 1$은 (Z7)에 의해 $K$ 이상인 자연수이므로, $j$번째 항이 $D_j = A_{j+K-1}$인 집합열 $(D_j)$가 있고 그 항은 $\mathcal{M}$의 원소이다. $\bigcup_{j=1}^{\infty} D_j = \bigcup_{n=K}^{\infty} A_n$이다: 집합열의 (1)에 의해 $x \in D_j$이면 $n = j + K - 1$이 $K \le n$인 자연수이고 $x \in A_n$이다. 거꾸로 $K \le n$이고 $x \in A_n$이면 (Z7)에 의해 $j = n - K + 1 \ge 1$인 정수, 곧 자연수 $j$가 있어 $D_j = A_n$이고 $x \in D_j$이다. (i)을 $(D_j)$에 쓰면 $\mu\bigl(\bigcup_{n=K}^{\infty} A_n\bigr) \le \sum_{j=1}^{\infty} \mu(A_{j+K-1})$이고, 합 항목의 정의에 의해 오른쪽은 $\sum_{n=K}^{\infty} \mu(A_n)$이다.
:::

## 예시와 반례

:::example[값 $\infty$를 갖는 두 점 위의 측도]
$X = \{1, 2\}$, $\mathcal{M} = \mathscr{P}(X)$로 두고, $A \subseteq X$에서
$$
\mu(A) = 3\,\chi_A(1) + \infty \cdot \chi_A(2)
$$
로 정합시다. $\chi_A$는 $X$ 위의 [[indicator-function|지시함수]]이고, 곱과 합은 $[0, \infty]$의 것입니다. 네 부분집합에서 값을 계산하면 $\mu(\emptyset) = 0 + \infty \cdot 0 = 0$, $\mu(\{1\}) = 3 + \infty \cdot 0 = 3$, $\mu(\{2\}) = 0 + \infty \cdot 1 = \infty$, $\mu(X) = 3 + \infty = \infty$입니다.

$\mu$는 측도입니다. (M1)은 위의 계산입니다. (M2): $(A_n)$이 $X$의 서로소인 집합열이고 $U = \bigcup_{n=1}^{\infty} A_n$이라 합시다. 각 점 $p \in X$에서 [[indicator-function|지시함수]]의 (6)의 (ii)에 의해 $n$번째 항이 $\chi_{A_n}(p)$인 실수열의 급수는 수렴하고 합이 $\chi_U(p)$이며, 항이 $0$ 이상인 실수이므로 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (3)의 (i)에 의해 $\sum_{n=1}^{\infty} \chi_{A_n}(p) = \chi_U(p)$입니다. 같은 항목의 (5)(항별 합과 상수배)에 의해
$$
\begin{aligned}
\sum_{n=1}^{\infty} \mu(A_n) &= 3 \sum_{n=1}^{\infty} \chi_{A_n}(1) \\
&\quad + \infty \cdot \sum_{n=1}^{\infty} \chi_{A_n}(2) \\
&= 3\,\chi_U(1) + \infty \cdot \chi_U(2) \\
&= \mu(U)
\end{aligned}
$$
입니다. $\mu(X) = \infty$이므로 유한 측도는 아닙니다.

(2)의 등식 $\mu(X) = \mu(\{2\}) + \mu(X - \{2\})$는 $\infty = \infty + 3$입니다. 같은 $X$ 위에서 $3$을 $5$로 바꾼 측도 $\nu$도 $\nu(X) = \nu(\{2\}) = \infty$이지만 $\nu(X - \{2\}) = 5$입니다. 곧 $X$와 $\{2\}$의 측도만으로는 $X - \{2\}$의 측도가 정해지지 않습니다. "$\infty - \infty$"에 어떤 값을 정해 두어도 그 값은 $3$과 $5$ 가운데 적어도 하나와 다르므로, $\mu$와 $\nu$ 둘 다에서 $\mu(X - \{2\}) = \mu(X) - \mu(\{2\})$ 꼴의 등식이 맞을 수는 없습니다. 반면 $\{1\} \subseteq X - \{2\}$처럼 큰 쪽의 측도가 실수이면 (2)의 (i)로 뺄셈을 쓸 수 있습니다.
:::

:::counterexample[(M1)을 만족하지만 σ-가법이 아닌 함수]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$으로 두고, $A \subseteq \mathbb{N}$이 [[finite-set|유한집합]]이면 $\nu(A) = 0$, 무한집합이면 $\nu(A) = \infty$로 정합시다. $\emptyset$은 원소를 $0$개 갖는 유한집합이므로([[finite-set]]의 (F2)) $\nu(\emptyset) = 0$이고 (M1)이 성립합니다.

그러나 (M2)는 성립하지 않습니다. $n$번째 항이 $\{n\}$인 집합열은 서로소이고($n \ne m$이면 $\{n\} \cap \{m\} = \emptyset$), 각 항은 $\{1\}$에서 $\{n\}$으로 가는 전단사가 있어 원소를 $1$개 갖는 유한집합이므로 $\nu(\{n\}) = 0$입니다. [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (2)에 의해 $\sum_{n=1}^{\infty} \nu(\{n\}) = 0$입니다. 한편 [[sequence-of-sets|집합열]]의 (1)에 의해 합집합은 $\mathbb{N}$이고, [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (1)에 의해 $\mathbb{N}$은 무한집합이므로 $\nu(\mathbb{N}) = \infty \ne 0$입니다. 따라서 $\nu$는 측도가 아닙니다.
:::

## 확인 질문

:::check[측도공간에서 $\mu(A) = 2$, $\mu(B) = 3$, $\mu(A \cup B) = 4$이면 $\mu(A \cap B)$는 얼마인가?]
$1$입니다. (2)에 의해 $\mu(A \cap B) \le \mu(A) = 2$이므로 $\mu(A \cap B)$는 실수이고, (3)에 의해 $4 + \mu(A \cap B) = 2 + 3 = 5$는 실수의 등식이어서 $\mu(A \cap B) = 1$입니다.
:::

:::check[모든 원소에서 값이 $\infty$인 함수 $\mathcal{M} \to [0, \infty]$는 측도인가?]
아닙니다. [[sigma-algebra|σ-대수]]의 (1)에 의해 $\emptyset \in \mathcal{M}$이고 그 값이 $\infty \ne 0$이어서 (M1)이 성립하지 않습니다. (M2)는 성립합니다: 서로소인 집합열 $(A_n)$에서 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (2)에 의해 $\infty = \mu(A_1) \le \sum_{n=1}^{\infty} \mu(A_n)$이므로 합은 $\infty$이고, 합집합의 값도 $\infty$입니다. 그래서 (M1)은 (M2)에서 나오지 않는 조건입니다.
:::
