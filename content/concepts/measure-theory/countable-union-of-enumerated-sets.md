---
title: 열거가 주어진 가산집합들의 합집합
title_en: Unions of Enumerated Countable Sets
aliases: [가산 합집합, 가산 개의 가산집합의 합집합, 열거, 유한 개의 가산집합의 합집합, countable union of countable sets, enumerated sets, counted sets]
kind: theorem
field: measure-theory
msc: ["03E10"]
level: undergrad
summary: 집합열의 모든 항을 한 함수 e(n, k) 가 한꺼번에 열거하면, 짝짓기 함수로 e 를 한 줄로 늘어놓아 그 합집합이 가산임을 증명한다. 공집합인 항이 있는 경우와, 열거가 주어지지 않은 유한 개의 가산집합의 합집합도 다룬다.
requires: [set, subset, set-operations, cartesian-product, function, injective-surjective-bijective, mathematical-induction, recursion-theorem, finite-set, countably-infinite-set, natural-numbers-are-infinite, n-and-z-have-equal-cardinality, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, rational-and-irrational-numbers, sequence-of-sets, pairing-of-natural-numbers, rationals-are-countable]
proof: full
sources:
  - ref: kanovei-katz-positive-function-vanishing-integral
    loc: 1절 Introduction (p.2); 3절 각주 2 (p.4)
    checked: original
    note: "출처는 1절(p.2)에서 ℕ 과의 일대일 대응이 있기만 한 'countable set' 과, 특정한 대응 ι_B : B → ℕ 이 골라져 있는 'counted set' 을 구별하고, 서로소인 counted 집합들의 가산 족은 'immediately identifiable with N × N' 이어서 그 합집합이 'snaking argument' 로 가산이라고 적는다. 이어서 같은 논법이 countable 집합들의 족에는 'does not a priori work in ZF' 인데, 각 A_α 와 ℕ 의 대응을 모든 α 에 대해 동시에 골라야 하고 'This procedure requires the axiom of countable choice (ACC)' 라고 적는다. 이 항목의 '열거'는 출처의 counted 와 같은 구실을 한다. 다만 출처는 B → ℕ 방향의 대응을 쓰고 이 항목은 ℕ 에서 A_n 으로의 전사를 한 함수 e 로 묶어 주며, 서로소를 요구하지 않는다. 출처 3절의 각주 2(p.4)는 'there is no need for the axiom of choice to prove that a finite union of countable sets is itself countable' 이라고 적는다(이 항목의 (3)). 출처는 그 근거로 Fremlin 의 책(참고문헌 [3])을 가리킨다."
  - ref: lebl-basic-analysis
    loc: 0.3.5절 Cardinality, Example 0.3.31 (p.18); Example 0.3.32 (p.18); 0.3.6절 Exercise 0.3.19 (p.21)
    checked: original
    note: "출처 Example 0.3.31 은 ℕ × ℕ 을 두 성분의 합이 같은 것끼리 차례로 늘어놓아 가산 무한임을 보이고, 이 항목의 (1)은 그 늘어놓기 대신 짝짓기 함수 π 의 역함수로 e 를 한 줄로 늘어놓는다. Exercise 0.3.19 는 합집합이 유한집합이 아닌 유한집합들의 가산 족의 예를 들라고 한다. 확인 질문 '$X = \\mathbb{Z}$, $A_n = \\{-n, n\\}$이고 $e(n, 1) = -n$, $k \\ge 2$에서 $e(n, k) = n$이라 하자. $e$가 $(A_n)$을 열거함을 확인하고 $u(1), \\dots, u(6)$을 구하라.'의 A_n = {−n, n} 은 이 연습문제가 묻는 꼴의 한 예이다(원소 두 개인 집합들의 합집합이 0 이 아닌 정수 전체). 예시 '분모가 $n$인 분수들의 합집합'은 출처 Example 0.3.32(p.18)와 같은 대상(분수로 쓴 유리수 전체의 가산성)을 다룬다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 표본 확인(러셀의 논법, Kanovei–Katz 인용 대조, min·max 와 1 의 합의 경계 경우). 독립 검토 없음."
added: 2026-11-28
---

:::statement
집합열, 그 합집합 $\bigcup_{n=1}^{\infty} A_n$과 $\bigcup_{n=1}^{N} A_n$은 [[sequence-of-sets|집합열]]의 것이고, 가산과 가산 무한은 [[countably-infinite-set|가산 무한 집합]], 유한집합은 [[finite-set]]의 것이다. $\pi$, $\kappa_1$, $\kappa_2$는 [[pairing-of-natural-numbers|ℕ × ℕ 과 ℕ 의 전단사]]의 것이다. 아래에서 $X$는 집합이고 $(A_n)$은 $X$의 집합열이다.

**열거.** 함수 $e : \mathbb{N} \times \mathbb{N} \to X$가 $(A_n)$을 **열거한다**(enumerates)는 것은 정확히 모든 자연수 $n$에서
$$
A_n = \{e(n, k) : k \in \mathbb{N}\}
$$
일 때, 곧 모든 자연수 $n$, $k$에서 $e(n, k) \in A_n$이고 $A_n$의 모든 원소가 어떤 자연수 $k$의 $e(n, k)$일 때이다. 이때 $e$를 $(A_n)$의 **열거**(enumeration)라 한다. $e$가 $(A_n)$을 열거하면 각 $n$에서 $e(n, 1) \in A_n$이므로 $A_n$은 공집합이 아니고, $k$에서의 값이 $e(n, k)$인 함수는 $\mathbb{N}$에서 $A_n$으로의 전사이다.

다음이 성립한다.

1. (열거가 주어진 합집합) $e : \mathbb{N} \times \mathbb{N} \to X$가 $(A_n)$을 열거하면, 자연수 $m$에서
   $$
   u(m) = e(\kappa_1(m), \kappa_2(m))
   $$
   로 정한 함수 $u$는 $\mathbb{N}$에서 $\bigcup_{n=1}^{\infty} A_n$으로의 전사이다. 곧 $\bigcup_{n=1}^{\infty} A_n = \{u(m) : m \in \mathbb{N}\}$이다. 따라서 $\bigcup_{n=1}^{\infty} A_n$은 가산이다.
2. (공집합인 항이 있어도 되는 꼴) 함수 $e : \mathbb{N} \times \mathbb{N} \to X$가 모든 자연수 $n$에서 $A_n \subseteq \{e(n, k) : k \in \mathbb{N}\}$를 만족하면 $\bigcup_{n=1}^{\infty} A_n$은 가산이다. 이 가정은 $A_n = \emptyset$인 $n$에서 $e(n, k)$에 아무 조건도 두지 않는다.
3. (유한 개의 가산집합) $N$이 $0$ 이상인 정수이고 $1 \le n \le N$인 모든 자연수 $n$에서 $A_n$이 가산이면 $\bigcup_{n=1}^{N} A_n$은 가산이다. 특히 $X$의 두 가산 부분집합 $B$, $C$에 대하여 $B \cup C$는 가산이다. 이 문장은 열거를 가정하지 않는다.
:::

:::english
Sequences of sets and their unions $\bigcup_{n=1}^{\infty} A_n$ and $\bigcup_{n=1}^{N} A_n$ are as in the entry on sequences of sets; countable and countably infinite sets are as in the entry on countably infinite sets, and finite sets as in the entry on finite sets. $\pi$, $\kappa_1$, $\kappa_2$ are as in the entry on the bijection between $\mathbb{N} \times \mathbb{N}$ and $\mathbb{N}$. Throughout, $X$ is a set and $(A_n)$ is a sequence of subsets of $X$.

**Enumerations.** A function $e : \mathbb{N} \times \mathbb{N} \to X$ **enumerates** $(A_n)$ exactly when for every natural number $n$
$$
A_n = \{e(n, k) : k \in \mathbb{N}\},
$$
that is, when $e(n, k) \in A_n$ for all natural numbers $n$, $k$ and every element of $A_n$ is $e(n, k)$ for some natural number $k$. In this case $e$ is called an **enumeration** of $(A_n)$. If $e$ enumerates $(A_n)$, then $e(n, 1) \in A_n$ for each $n$, so $A_n$ is nonempty, and the function whose value at $k$ is $e(n, k)$ is a surjection from $\mathbb{N}$ onto $A_n$.

The following hold.

1. (Unions with a given enumeration) If $e : \mathbb{N} \times \mathbb{N} \to X$ enumerates $(A_n)$, then the function $u$ defined for natural numbers $m$ by
   $$
   u(m) = e(\kappa_1(m), \kappa_2(m))
   $$
   is a surjection from $\mathbb{N}$ onto $\bigcup_{n=1}^{\infty} A_n$. That is, $\bigcup_{n=1}^{\infty} A_n = \{u(m) : m \in \mathbb{N}\}$. Hence $\bigcup_{n=1}^{\infty} A_n$ is countable.
2. (A form allowing empty terms) If a function $e : \mathbb{N} \times \mathbb{N} \to X$ satisfies $A_n \subseteq \{e(n, k) : k \in \mathbb{N}\}$ for every natural number $n$, then $\bigcup_{n=1}^{\infty} A_n$ is countable. This hypothesis imposes no condition on $e(n, k)$ for those $n$ with $A_n = \emptyset$.
3. (Finitely many countable sets) If $N$ is an integer with $N \ge 0$ and $A_n$ is countable for every natural number $n$ with $1 \le n \le N$, then $\bigcup_{n=1}^{N} A_n$ is countable. In particular, $B \cup C$ is countable for any two countable subsets $B$, $C$ of $X$. This statement does not assume an enumeration.
:::

## 직관

가산집합이 끝없이 많이 있을 때, 각 집합의 원소를 $e(n, 1), e(n, 2), e(n, 3), \dots$처럼 늘어놓은 목록이 모두 하나의 표 $e$로 주어져 있다고 합시다. $n$번째 줄이 $A_n$의 목록입니다. 이 표의 칸에는 [[pairing-of-natural-numbers|짝짓기 함수]]가 번호를 붙여 두었으므로, 칸을 번호 순서대로 읽으면 모든 줄의 모든 원소를 한 줄의 목록 $u(1), u(2), u(3), \dots$로 읽게 됩니다. 같은 원소가 여러 번 나와도 상관없습니다. [[rationals-are-countable|자연수에서 오는 전사가 있으면 가산]]이기 때문입니다.

이 항목이 "각 $A_n$이 가산이다"가 아니라 "표 $e$가 주어져 있다"를 가정에 두는 까닭은 증명의 첫걸음에 있습니다. 각 $A_n$이 공집합이 아닌 가산집합이라는 것만 알면, $n$마다 $A_n$의 목록이 하나 이상 있다는 것은 알지만 그 가운데 어느 것을 $n$번째 줄로 쓸지는 정해지지 않습니다. 끝없이 많은 $n$에서 목록을 하나씩 고르는 일은 [[recursion-theorem|재귀 정리]]의 (1)이 말하는 "정해져 있다"에 들지 않으므로, 이 사이트는 그 고르기를 하지 않고 표를 가정으로 받습니다. 집합이 유한 개이면 사정이 다릅니다. (3)의 증명은 귀납법의 각 단계에서 목록을 두 개만 잡으면 되고, 그것은 "목록이 있다"는 사실에서 바로 나옵니다.

출석부에 비유하면, 열거는 모든 반의 출석부가 한 권에 묶여 있는 것입니다. 묶음이 있으면 첫 장부터 차례로 넘기며 모든 학생을 부를 수 있습니다. 비유가 맞지 않는 곳도 있습니다. 출석부의 이름은 끝나지만 열거의 줄은 끝없이 이어지고, 한 학생이 한 줄에 여러 번 나와도 됩니다.

## 증명

:::idea
표 $e$의 칸 $(n, k)$를 짝짓기 함수의 번호 $\pi(n, k)$로 읽으면 자연수에서 합집합으로의 전사가 되고, 전사가 있는 집합은 가산이다. 유한 개의 합집합은 두 집합의 합집합에 귀납법을 쓴다.
:::

:::hint
$x \in A_n$이면 $x = e(n, k)$인 $k$가 있다. $m = \pi(n, k)$에서 $u(m)$을 계산해 본다.
:::

:::hint
두 가산집합 $B$, $C$가 공집합이 아니면, 전사 $s : \mathbb{N} \to B$, $t : \mathbb{N} \to C$로 첫째 줄은 $s$, 나머지 줄은 $t$인 표를 만든다.
:::

:::proof
**(1)** 자연수 $m$에 대하여 $\kappa_1(m)$, $\kappa_2(m)$은 자연수이므로([[pairing-of-natural-numbers]]의 (1)) $u(m) = e(\kappa_1(m), \kappa_2(m))$은 $X$의 원소이고, 열거의 정의에 의해 $u(m) \in A_{\kappa_1(m)}$이다. [[sequence-of-sets|집합열]]의 (1)에 의해 $u(m) \in \bigcup_{n=1}^{\infty} A_n$이므로, [[recursion-theorem|재귀 정리]]의 (1)에 의해 $u$는 $\mathbb{N}$에서 $\bigcup_{n=1}^{\infty} A_n$으로의 함수이다. 전사: $x \in \bigcup_{n=1}^{\infty} A_n$이면 [[sequence-of-sets|집합열]]의 (1)에 의해 $x \in A_n$인 자연수 $n$이 있고, 열거의 정의에 의해 $x = e(n, k)$인 자연수 $k$가 있다. $m = \pi(n, k)$로 두면 [[pairing-of-natural-numbers]]의 (1)에 의해 $\kappa_1(m) = n$, $\kappa_2(m) = k$이므로 $u(m) = e(n, k) = x$이다. 따라서 $u$는 전사이고 $\bigcup_{n=1}^{\infty} A_n = \{u(m) : m \in \mathbb{N}\}$이다. [[rationals-are-countable|유리수의 가산성]]의 (1)의 (iv)에 의해 $\bigcup_{n=1}^{\infty} A_n$은 가산이다.

**(2)** 자연수 $n$마다 $D_n = \{e(n, k) : k \in \mathbb{N}\}$은 $e$로 정해진 $X$의 부분집합이므로 $n$번째 항이 $D_n$인 집합열 $(D_n)$이 있고([[sequence-of-sets|집합열]]의 집합열의 정의), 정의 그대로 $e$는 $(D_n)$을 열거한다. (1)에 의해 $\bigcup_{n=1}^{\infty} D_n$은 가산이다. 모든 $n$에서 $A_n \subseteq D_n \subseteq \bigcup_{n=1}^{\infty} D_n$([[sequence-of-sets|집합열]]의 (2))이므로, [[sequence-of-sets|집합열]]의 (2)의 마지막 문장에 의해 $\bigcup_{n=1}^{\infty} A_n \subseteq \bigcup_{n=1}^{\infty} D_n$이다. [[rationals-are-countable|유리수의 가산성]]의 (3)에 의해 $\bigcup_{n=1}^{\infty} A_n$은 가산이다.

**(3)** 먼저 두 집합을 보인다. $B$, $C$를 $X$의 가산 부분집합이라 하자. $B = \emptyset$이면 $B \cup C = C$이고, $C = \emptyset$이면 $B \cup C = B$이므로 가산이다. $B \ne \emptyset$이고 $C \ne \emptyset$이면 [[rationals-are-countable|유리수의 가산성]]의 (2)에 의해 전사 $s : \mathbb{N} \to B$와 전사 $t : \mathbb{N} \to C$가 있다. 이 둘을 잡자. 자연수 $n$은 (Z5)와 (Z1)에 의해 $n = 1$과 $2 \le n$ 가운데 정확히 하나를 만족하므로, [[recursion-theorem]]의 (1)에 의해 $n = 1$이면 $D_n = B$, $2 \le n$이면 $D_n = C$로 정한 집합열 $(D_n)$과, $n = 1$이면 $e(n, k) = s(k)$, $2 \le n$이면 $e(n, k) = t(k)$로 정한 함수 $e : \mathbb{N} \times \mathbb{N} \to X$가 있다. $s$와 $t$가 전사이므로 $e$는 $(D_n)$을 열거한다. [[sequence-of-sets|집합열]]의 (1)에 의해 $x \in \bigcup_{n=1}^{\infty} D_n$인 것은 정확히 $x \in D_n$인 $n$이 있을 때, 곧 $x \in B$이거나 $x \in C$일 때이므로($D_2 = C$) $\bigcup_{n=1}^{\infty} D_n = B \cup C$이다. (1)에 의해 $B \cup C$는 가산이다.

이제 $N$에 관한 [[mathematical-induction|수학적 귀납법]]으로 보인다(정확히는 자연수 $j$에 대한 명제 "$N = j - 1$이면 성립한다"에 쓴다). $N = 0$이면 [[sequence-of-sets|집합열]]의 (3)에 의해 $\bigcup_{n=1}^{0} A_n = \emptyset$이고, [[finite-set]]의 (F2)에 의해 공집합은 유한집합이므로 가산이다. $N$에서 성립한다고 하고, $1 \le n \le N + 1$인 모든 $n$에서 $A_n$이 가산이라 하자. 그러면 $1 \le n \le N$인 모든 $n$에서도 $A_n$이 가산이므로, 귀납 가정에 의해 $\bigcup_{n=1}^{N} A_n$은 가산이다. [[sequence-of-sets|집합열]]의 (3)에 의해 $\bigcup_{n=1}^{N+1} A_n = \bigl(\bigcup_{n=1}^{N} A_n\bigr) \cup A_{N+1}$이고, 두 가산집합의 합집합이므로 위에서 보인 것에 의해 가산이다.
:::

## 예시와 반례

:::example[분모가 $n$인 분수들의 합집합]
$X = \mathbb{Q}$이고 $A_n = \{a/n : a \in \mathbb{Z}\}$, 곧 분모를 $n$으로 쓸 수 있는 유리수 전체라 합시다. $z : \mathbb{N} \to \mathbb{Z}$를 [[n-and-z-have-equal-cardinality|ℕ 과 ℤ 의 크기]]의 전단사라 하고 $e(n, k) = z(k)/n$으로 정하면, $z$가 전사이므로 $e$는 $(A_n)$을 열거합니다. 각 $A_n$은 $\mathbb{Q}$의 부분집합이고, 거꾸로 $x \in \mathbb{Q}$이면 [[rationals-are-countable|유리수의 가산성]]의 (4)에 의해 $q(m) = x$인 자연수 $m$이 있어 $x = z(\kappa_1(m))/\kappa_2(m) \in A_{\kappa_2(m)}$이므로 $\bigcup_{n=1}^{\infty} A_n = \mathbb{Q}$입니다. (1)의 전사는 $u(m) = z(\kappa_2(m))/\kappa_1(m)$입니다. 예를 들어 $u(1) = z(1)/1 = 0$, $u(2) = z(1)/2 = 0$, $u(3) = z(2)/1 = 1$, $u(12) = z(2)/3 = \tfrac{1}{3}$입니다($\pi^{-1}(12) = (3, 2)$). 이것은 [[rationals-are-countable|유리수의 가산성]]의 (4)의 $q$에서 분자와 분모의 번호를 맞바꾼 것입니다.
:::

:::example[공집합인 항이 섞인 열]
$X = \mathbb{N}$이고, $n$이 홀수이면 $A_n = \emptyset$, 짝수이면 $A_n = \{n\}$이라 합시다. $A_1 = \emptyset$이므로 $(A_n)$의 열거는 없습니다($e(1, 1) \in A_1$일 수 없습니다). 그러나 $e(n, k) = n$으로 정하면 모든 $n$에서 $A_n \subseteq \{n\} = \{e(n, k) : k \in \mathbb{N}\}$이므로 (2)의 가정을 만족하고, $\bigcup_{n=1}^{\infty} A_n$, 곧 짝수인 자연수 전체는 가산입니다.
:::

:::counterexample[공집합인 항이 있으면 열거는 있을 수 없다]
집합열 $(A_n)$에 $A_{n_0} = \emptyset$인 항이 하나라도 있으면, 함수 $e : \mathbb{N} \times \mathbb{N} \to X$가 무엇이든 $e(n_0, 1) \in A_{n_0}$이 거짓이므로 $e$는 $(A_n)$을 열거하지 않습니다. 그래서 (1)만으로는 공집합인 항이 있는 열을 다룰 수 없고, (2)가 그 경우를 맡습니다. 위 예시의 열이 그런 열입니다.
:::

## 확인 질문

:::check[$X = \mathbb{Z}$, $A_n = \{-n, n\}$이고 $e(n, 1) = -n$, $k \ge 2$에서 $e(n, k) = n$이라 하자. $e$가 $(A_n)$을 열거함을 확인하고 $u(1), \dots, u(6)$을 구하라.]
모든 $k$에서 $e(n, k)$는 $-n$이나 $n$이므로 $A_n$에 속하고, $-n = e(n, 1)$, $n = e(n, 2)$이므로 $A_n$의 원소는 모두 어떤 $e(n, k)$입니다. 따라서 $e$는 $(A_n)$을 열거합니다. $\pi^{-1}(1), \dots, \pi^{-1}(6)$은 $(1,1)$, $(2,1)$, $(1,2)$, $(3,1)$, $(1,3)$, $(2,2)$이므로 $u(1), \dots, u(6) = -1, -2, 1, -3, 1, 2$입니다. 합집합은 $0$이 아닌 정수 전체이고, (1)에 의해 가산입니다.
:::

:::check[모든 $n$에서 $A_n = \emptyset$이면 (2)의 가정을 만족하는 $e$가 있는가?]
$X \ne \emptyset$이면 있습니다. $X$의 원소 $x_0$을 잡고 $e(n, k) = x_0$으로 두면 $\emptyset \subseteq \{x_0\}$이므로 가정을 만족합니다. $X = \emptyset$이면 $\mathbb{N} \times \mathbb{N}$은 공집합이 아니므로 $\mathbb{N} \times \mathbb{N}$에서 $\emptyset$으로의 함수는 없고, (2)는 쓸 수 없습니다. 그래도 합집합은 [[sequence-of-sets|집합열]]의 (1)에 의해 $\emptyset$이고, 공집합은 유한집합이므로 가산입니다.
:::
