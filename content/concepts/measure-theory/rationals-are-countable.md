---
title: 유리수 전체는 가산 무한 집합이다
title_en: The Rational Numbers Form a Countably Infinite Set
aliases: [유리수의 가산성, 유리수의 열거, ℚ 는 가산, 가산집합의 부분집합, ℕ 에서 오는 전사, rationals are countable, enumeration of the rationals]
kind: theorem
field: measure-theory
msc: ["03E10", "11B05"]
level: undergrad
summary: 자연수 전체에서 오는 전사가 있는 집합은 가산이고, 무한집합이면 값이 처음 나오는 번호들을 차례로 늘어놓아 전단사를 얻는다는 것을 증명한 뒤, 짝짓기 함수로 자연수에서 유리수로의 전사를 식으로 만들어 유리수 전체가 가산 무한 집합임을 보인다. 가산집합의 부분집합과 ℚ × ℚ 도 다룬다.
requires: [set, subset, cartesian-product, function, injective-surjective-bijective, quantifiers, negation-of-quantified-statements, finite-set, subset-of-finite-set, countably-infinite-set, natural-numbers-are-infinite, n-and-z-have-equal-cardinality, recursion-theorem, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, rational-and-irrational-numbers, subsequence, positive-and-negative-parts, pairing-of-natural-numbers, power-of-a-real-number]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 0.3.5절 Cardinality, Example 0.3.32 (p.18) 와 그 뒤 문단 (p.18); 0.3.6절 Exercise 0.3.24 (p.21)
    checked: original
    note: "출처 Example 0.3.32 는 'The set of rational numbers is countable' 을 스스로 '(informal)' 이라 적은 증명으로 보인다. 양의 유리수는 앞의 Example 0.3.31 처럼 1/1, 1/2, 2/1, … 의 순서로 쓰되 이미 나온 분수(2/2 같은 것)를 빼고, 모든 유리수는 0 과 음수를 끼워 0, 1/1, −1/1, 1/2, −1/2, … 로 늘어놓는다. 이 항목은 짝짓기 함수로 ℕ 에서 ℚ 로의 전사 q 를 식으로 만들고((4)), 이미 나온 값을 빼는 일을 '값이 처음 나오는 번호의 집합'을 차례로 늘어놓는 것으로 바꿔 전단사를 얻는다((1), (5)). 이미 나온 것을 빼는 발상과 0, 양수, 음수를 섞어 늘어놓는 것은 출처와 같다. 출처는 그 뒤 문단(p.18)에서 'If A ⊂ B and B is countable, then A is countable' 을 연습문제의 진술로 소개하고, Exercise 0.3.24 a) 는 가산 무한 집합 B 의 부분집합이 가산임을 전단사를 만들어 보이라고 한다(이 항목의 (3)과 같은 사실). 출처는 결론을 'countable' 로 적고, 이 항목은 '가산 무한' 으로 적는다. 예시 '양의 유리수 전체'는 출처 Example 0.3.32 가 양의 유리수부터 늘어놓는 것과 같은 대상이다. 반례 '$q$에서 같은 수가 여러 번 나오는 예'는 출처가 2/2 처럼 이미 나온 분수를 빼라고 하는 것과 같은 현상을 다룬다. 확인 질문 '정수 전체 $\\mathbb{Z}$에서 짝수인 정수 전체의 집합은 가산인가? 그 근거가 되는 번호를 들어라.'는 출처 Example 0.3.30(p.18, 짝수인 자연수 전체가 ℕ 과 크기가 같다)과 비슷한 대상을 묻는다."
  - ref: sandoval-romero-measure-and-integration
    loc: 1.1절 The integral and limiting processes, Example 1.10 의 증명 (p.17)
    checked: original
    note: "출처는 [0, 1] 의 유리수 전체가 가산이라는 것을 'It is well known' 이라 적고 서로 다른 원소의 열거 {q_1, q_2, …} 를 하나 잡아 쓴다. 이 항목의 (5)는 ℚ 전체에 그런 열거를 식으로 준다."
  - ref: kanovei-katz-positive-function-vanishing-integral
    loc: 1절 Introduction (p.2)
    checked: original
    note: "출처는 ℕ × ℕ 의 'snaking argument' 를 'familiar to each freshman, in the context of enumerating Q' 라고 적는다. 이 항목은 그 논법 대신 짝짓기 함수 π 의 역함수를 쓴다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 표본 확인(러셀의 논법, Kanovei–Katz 인용 대조, min·max 와 1 의 합의 경계 경우). 독립 검토 없음."
added: 2026-11-28
---

:::statement
가산, 가산 무한은 [[countably-infinite-set|가산 무한 집합]]의 것이고, 유한집합, 무한집합, "원소를 $n$개 갖는다"는 [[finite-set]]의 것이다. 함수, 단사, 전사, 전단사는 [[function|함수]]와 [[injective-surjective-bijective|단사, 전사, 전단사]]의 것이다. $\mathbb{Q}$는 [[rational-and-irrational-numbers|유리수와 무리수]]의 것이다. $\pi$, $\kappa_1$, $\kappa_2$는 [[pairing-of-natural-numbers|ℕ × ℕ 과 ℕ 의 전단사]]의 것이고, 첨자열은 [[subsequence]]의 것이며, "$\mathbb{N}$의 부분집합을 차례로 늘어놓은 첨자열"은 [[positive-and-negative-parts|양의 부분과 음의 부분]]의 진술의 것이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)으로 다룬다.

**값이 처음 나오는 번호.** $B$가 집합이고 $s : \mathbb{N} \to B$가 함수일 때, 자연수 $n$ 가운데 "$m < n$인 모든 자연수 $m$에서 $s(m) \ne s(n)$"을 만족하는 것 전체의 집합
$$
A_s = \{n \in \mathbb{N} : \text{위의 조건}\}
$$
을 **$s$의 값이 처음 나오는 번호의 집합**이라 한다.

다음이 성립한다.

1. (자연수에서 오는 전사) $B$가 집합이고 $s : \mathbb{N} \to B$가 전사라 하자.
   - (i) $B$의 각 원소 $b$에 대하여 $\{n \in \mathbb{N} : s(n) = b\}$는 공집합이 아니고, 그 최소 원소는 $A_s$에 속한다. $s(n) = b$인 $n \in A_s$는 그 최소 원소 하나뿐이다. 특히 $n$, $n'$이 $A_s$의 서로 다른 원소이면 $s(n) \ne s(n')$이다.
   - (ii) 어떤 자연수 $M$이 있어 $A_s$의 모든 원소 $n$에서 $n \le M$이면 $B$는 유한집합이다.
   - (iii) 모든 자연수 $M$에 대하여 $M < n$인 $n \in A_s$가 있으면, $A_s$를 차례로 늘어놓은 첨자열 $(p_k)$에 대하여 $k$에서의 값이 $s(p_k)$인 함수 $\mathbb{N} \to B$는 전단사이다. 따라서 $B$는 가산 무한이다.
   - (iv) $B$는 가산이다. $B$가 무한집합이면 (iii)의 가정이 성립하고 $B$는 가산 무한이다.
2. (가산집합에는 자연수에서 오는 전사가 있다) $B$가 공집합이 아닌 가산집합이면 $\mathbb{N}$에서 $B$로의 전사가 있다.
3. (가산집합의 부분집합) $B$가 가산집합이고 $C \subseteq B$이면 $C$는 가산이다.
4. (유리수의 전사) $z : \mathbb{N} \to \mathbb{Z}$를 [[n-and-z-have-equal-cardinality|ℕ 과 ℤ 의 크기]]의 진술의 전단사 $f$라 하자(짝수 $n = 2k$에서 $k$, 홀수 $n = 2k + 1$에서 $-k$). 자연수 $m$에 대하여
   $$
   q(m) = \frac{z(\kappa_1(m))}{\kappa_2(m)}
   $$
   로 정하면 $q$는 $\mathbb{N}$에서 $\mathbb{Q}$로의 전사이다. 또 $\mathbb{N} \subseteq \mathbb{Q}$이고 $\mathbb{Q}$는 무한집합이다.
5. (유리수의 열거) (4)의 $q$에 대하여 $A_q$는 (1)의 (iii)의 가정을 만족한다. $A_q$를 차례로 늘어놓은 첨자열을 $(p_k)$라 하고 $r_k = q(p_k)$로 두면, $k$에서의 값이 $r_k$인 함수 $\mathbb{N} \to \mathbb{Q}$는 전단사이다. 따라서 $\mathbb{Q}$는 가산 무한 집합이다.
6. (유리수의 순서쌍) $m$에서의 값이 $\bigl(q(\kappa_1(m)), q(\kappa_2(m))\bigr)$인 함수 $\mathbb{N} \to \mathbb{Q} \times \mathbb{Q}$는 전사이다. 따라서 $\mathbb{Q} \times \mathbb{Q}$는 가산이다.
:::

:::english
Countable and countably infinite sets are as in the entry on countably infinite sets, and finite sets, infinite sets, and "has $n$ elements" are as in the entry on finite sets. Functions, injections, surjections, and bijections are as in the entries on functions and on injective, surjective, and bijective functions. $\mathbb{Q}$ is as in the entry on rational and irrational numbers. $\pi$, $\kappa_1$, $\kappa_2$ are as in the entry on the bijection between $\mathbb{N} \times \mathbb{N}$ and $\mathbb{N}$; index sequences are as in the entry on subsequences; and "the index sequence listing a subset of $\mathbb{N}$ in order" is as in the statement of the entry on positive and negative parts. The order of the integers is handled by (Z1), (Z5)–(Z8), and (L1)–(L3).

**Indices of first appearance.** For a set $B$ and a function $s : \mathbb{N} \to B$, the set of natural numbers $n$ satisfying "$s(m) \ne s(n)$ for every natural number $m < n$",
$$
A_s = \{n \in \mathbb{N} : \text{the condition above}\},
$$
is called **the set of indices at which values of $s$ first appear**.

The following hold.

1. (Surjections from the natural numbers) Let $B$ be a set and let $s : \mathbb{N} \to B$ be a surjection.
   - (i) For each element $b$ of $B$, the set $\{n \in \mathbb{N} : s(n) = b\}$ is nonempty, and its least element belongs to $A_s$. This least element is the only $n \in A_s$ with $s(n) = b$. In particular, if $n$ and $n'$ are distinct elements of $A_s$, then $s(n) \ne s(n')$.
   - (ii) If there is a natural number $M$ with $n \le M$ for every element $n$ of $A_s$, then $B$ is finite.
   - (iii) If for every natural number $M$ there is $n \in A_s$ with $M < n$, then for the index sequence $(p_k)$ listing $A_s$ in order, the function $\mathbb{N} \to B$ whose value at $k$ is $s(p_k)$ is a bijection. Hence $B$ is countably infinite.
   - (iv) $B$ is countable. If $B$ is infinite, then the hypothesis of (iii) holds and $B$ is countably infinite.
2. (Countable sets admit surjections from the natural numbers) If $B$ is a nonempty countable set, then there is a surjection from $\mathbb{N}$ onto $B$.
3. (Subsets of countable sets) If $B$ is a countable set and $C \subseteq B$, then $C$ is countable.
4. (A surjection onto the rationals) Let $z : \mathbb{N} \to \mathbb{Z}$ be the bijection $f$ in the statement of the entry on the cardinalities of $\mathbb{N}$ and $\mathbb{Z}$ (for even $n = 2k$ it is $k$, for odd $n = 2k + 1$ it is $-k$). Defining, for natural numbers $m$,
   $$
   q(m) = \frac{z(\kappa_1(m))}{\kappa_2(m)},
   $$
   we obtain a surjection $q$ from $\mathbb{N}$ onto $\mathbb{Q}$. Moreover $\mathbb{N} \subseteq \mathbb{Q}$ and $\mathbb{Q}$ is infinite.
5. (An enumeration of the rationals) For $q$ from (4), the set $A_q$ satisfies the hypothesis of (1)(iii). Let $(p_k)$ be the index sequence listing $A_q$ in order and set $r_k = q(p_k)$. Then the function $\mathbb{N} \to \mathbb{Q}$ whose value at $k$ is $r_k$ is a bijection. Hence $\mathbb{Q}$ is a countably infinite set.
6. (Ordered pairs of rationals) The function $\mathbb{N} \to \mathbb{Q} \times \mathbb{Q}$ whose value at $m$ is $\bigl(q(\kappa_1(m)), q(\kappa_2(m))\bigr)$ is a surjection. Hence $\mathbb{Q} \times \mathbb{Q}$ is countable.
:::

## 직관

유리수는 분수로 쓰이므로 "분자와 분모의 순서쌍"으로 번호를 매길 수 있을 것 같습니다. 분자는 정수, 분모는 자연수이고, [[n-and-z-have-equal-cardinality|정수에는 번호가 매겨져 있고]] [[pairing-of-natural-numbers|순서쌍에도 번호가 매겨져 있으므로]], 번호 $m$에 "분자 번호 $\kappa_1(m)$, 분모 $\kappa_2(m)$"인 분수를 붙이면 모든 유리수가 어딘가에 나옵니다. 이것이 (4)의 $q$입니다. 그러나 $\tfrac{0}{1} = \tfrac{0}{2}$처럼 같은 수가 여러 번 나오므로 $q$는 전단사가 아닙니다.

그래서 (1)은 같은 수가 두 번째로 나오는 번호를 모두 지웁니다. 남은 번호, 곧 값이 처음 나오는 번호들을 작은 것부터 차례로 다시 늘어놓으면 각 값이 정확히 한 번씩 나오는 목록이 됩니다. 시험지를 걷을 때 같은 사람이 두 장을 냈으면 먼저 낸 것만 남기고 남은 시험지에 다시 번호를 매기는 것과 같습니다. 비유가 맞지 않는 곳도 있습니다. 남은 번호가 유한 개에서 끝나면(유한집합) 다시 매긴 번호도 유한 개에서 끝나고, 이때는 (1)의 (ii)처럼 결론이 "유한집합"이 됩니다.

이 증명에서는 번호마다 무엇을 골라야 하는 곳이 없습니다. $q$는 식으로 정해지고, 값이 처음 나오는 번호는 [[well-ordering-principle|정렬 원리]]의 가장 작은 원소로 정해지며, 차례로 늘어놓는 것은 재귀 정리로 정해집니다.

## 증명

:::idea
전사 $s$가 있으면, 같은 값을 주는 번호 가운데 가장 작은 것만 남긴다. 남은 번호가 유계이면 $B$는 유한집합이고, 유계가 아니면 남은 번호를 차례로 늘어놓은 첨자열을 $s$에 넣어 전단사를 얻는다. 유리수는 짝짓기 함수로 분자와 분모를 읽어 전사를 만든다.
:::

:::hint
$A_s$의 두 원소 $n < n'$에서 $s(n) \ne s(n')$인 것은 $A_s$의 정의 그대로이다. 그래서 $A_s$ 위에서는 $s$가 단사이다.
:::

:::hint
$\mathbb{Q}$가 무한집합이라는 것은 $\mathbb{N} \subseteq \mathbb{Q}$에서 나온다. 무한집합이면 (1)의 (ii)의 경우가 될 수 없다.
:::

:::proof
**(1)** (i) $s$가 전사이므로 $s(n) = b$인 자연수 $n$이 있어 $\{n \in \mathbb{N} : s(n) = b\}$는 공집합이 아니고, [[well-ordering-principle|정렬 원리]]에 의해 최소 원소 $n_b$를 갖는다. $m < n_b$인 자연수 $m$에서 $s(m) = b$이면 $m$이 그 집합의 원소이므로 $n_b \le m$이 되어 (L1)에 어긋난다. 따라서 $m < n_b$인 모든 $m$에서 $s(m) \ne b = s(n_b)$이고 $n_b \in A_s$이다. 이제 $n, n' \in A_s$이고 $s(n) = s(n')$이라 하자. $n < n'$이면 $n' \in A_s$의 정의에 의해 $s(n) \ne s(n')$이 되어 어긋나고, $n' < n$이면 $n \in A_s$의 정의에 의해 어긋난다. 따라서 (Z5)에 의해 $n = n'$이다. 이것은 마지막 문장과 같고, $s(n) = b$인 $n \in A_s$가 $n_b$ 하나뿐이라는 것도 이것에서 나온다.

(ii) $n \in A_s$이면 $1 \le n \le M$이므로 $A_s \subseteq \{1, \dots, M\}$이다. [[finite-set]]의 (F2)에 의해 $\{1, \dots, M\}$은 원소를 $M$개 가지므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $A_s$는 유한집합이다. 곧 어떤 $0$ 이상인 정수 $c$에 대하여 $A_s$는 원소를 $c$개 갖는다. [[recursion-theorem|재귀 정리]]의 (1)에 의해 $t(n) = s(n)$으로 정한 함수 $t : A_s \to B$가 있다. (i)에 의해 $t$는 단사이고, $B$의 각 원소 $b$에서 $n_b \in A_s$이고 $t(n_b) = b$이므로 전사이다. [[finite-set]]의 (F4)에 의해 $B$는 원소를 $c$개 갖고, 유한집합이다.

(iii) 가정에 의해 $A_s$는 [[positive-and-negative-parts]]의 "차례로 늘어놓은 첨자열"의 가정을 만족하므로, 그 (4)에 의해 $A_s$를 차례로 늘어놓은 첨자열 $(p_k)$가 정확히 하나 있고 (4)의 (i), (ii)가 성립한다. 함수 $\varphi : \mathbb{N} \to B$를 $\varphi(k) = s(p_k)$로 정한다([[recursion-theorem]]의 (1)). 단사: $k \ne k'$이면 (Z5)에 의해 $k < k'$이거나 $k' < k$이다. $k < k'$이면 첨자열의 정의([[subsequence]])에 의해 $p_k < p_{k'}$이고, (4)의 (i)에 의해 $p_{k'} \in A_s$이므로 $A_s$의 정의에서 $s(p_k) \ne s(p_{k'})$이다. $k' < k$이면 $k$와 $k'$을 맞바꾸어 같다. 전사: $b \in B$이면 (i)에 의해 $n_b \in A_s$이고, (4)의 (ii)에 의해 $n_b = p_k$인 자연수 $k$가 있어 $\varphi(k) = s(n_b) = b$이다. 따라서 $\varphi$는 전단사이고, [[countably-infinite-set]]의 정의에 의해 $B$는 가산 무한이다.

(iv) "모든 자연수 $M$에 대하여 $M < n$인 $n \in A_s$가 있다"가 거짓이면, [[negation-of-quantified-statements|한정 기호의 부정]]에 의해 어떤 자연수 $M$이 있어 $A_s$의 모든 원소 $n$에서 $M < n$이 거짓이고, (Z5)에 의해 $n \le M$이다. 따라서 (ii)의 가정과 (iii)의 가정 가운데 하나가 성립하고, $B$는 유한집합이거나 가산 무한, 곧 가산이다. $B$가 무한집합이면 (ii)의 결론이 거짓이므로 (ii)의 가정이 거짓이고, 따라서 (iii)의 가정이 성립하여 $B$는 가산 무한이다.

**(2)** $B$가 유한집합이면, $B$가 원소를 $c$개 갖는 $0$ 이상인 정수 $c$와 전단사 $h : \{1, \dots, c\} \to B$가 있다. $c = 0$이면 (F2)에 의해 $B = \emptyset$이 되어 가정에 어긋나므로 $1 \le c$이다. 자연수 $i$는 (Z5)에 의해 $i \le c$와 $c < i$ 가운데 정확히 하나를 만족하므로, [[recursion-theorem]]의 (1)에 의해 $i \le c$이면 $s(i) = h(i)$, $c < i$이면 $s(i) = h(c)$로 정한 함수 $s : \mathbb{N} \to B$가 있다($c \in \{1, \dots, c\}$). $b \in B$이면 $h$가 전사이므로 $h(i) = b$인 $i \in \{1, \dots, c\}$가 있고 $s(i) = b$이다. 따라서 $s$는 전사이다. $B$가 가산 무한이면 정의에 의해 전단사 $\mathbb{N} \to B$가 있고, 그것이 전사이다.

**(3)** $B$가 유한집합이면 [[subset-of-finite-set]]의 (1)에 의해 $C$는 유한집합이고 가산이다. $B$가 가산 무한이라 하고 전단사 $f : \mathbb{N} \to B$를 잡자. $C = \emptyset$이면 (F2)에 의해 $C$는 유한집합이고 가산이다. $C \ne \emptyset$이면 $C$의 원소 $c$에 대해 $c = f(n)$인 자연수 $n$이 있으므로 $\{n \in \mathbb{N} : f(n) \in C\}$는 공집합이 아니고, 정렬 원리에 의해 최소 원소 $n_0$을 갖는다. 각 자연수 $n$은 $f(n) \in C$와 $f(n) \notin C$ 가운데 정확히 하나를 만족하므로, [[recursion-theorem]]의 (1)에 의해 $f(n) \in C$이면 $s(n) = f(n)$, 그렇지 않으면 $s(n) = f(n_0)$으로 정한 함수 $s : \mathbb{N} \to C$가 있다($f(n_0) \in C$). $c \in C$이면 $f$가 전사이므로 $f(n) = c$인 $n$이 있고 $f(n) \in C$이므로 $s(n) = c$이다. 따라서 $s$는 전사이고 (1)의 (iv)에 의해 $C$는 가산이다.

**(4)** 자연수 $m$에 대하여 $\kappa_1(m)$과 $\kappa_2(m)$은 자연수이므로([[pairing-of-natural-numbers]]의 (1)) $z(\kappa_1(m))$은 정수이고 $\kappa_2(m)$은 $0$이 아닌 정수이다. [[real-number-arithmetic]]의 (K7)에 의해 둘은 실수이고 $\kappa_2(m)$의 역수가 있으므로 $q(m) = z(\kappa_1(m)) \cdot \kappa_2(m)^{-1}$은 실수이며, [[rational-and-irrational-numbers]]의 정의에 의해 유리수이다. [[recursion-theorem]]의 (1)에 의해 $q$는 $\mathbb{N}$에서 $\mathbb{Q}$로의 함수이다.

전사: $x \in \mathbb{Q}$라 하면 $x = a/b$인 정수 $a$, $b$($b \ne 0$)가 있다. (Z5)에 의해 $0 < b$이거나 $b < 0$이다. $b < 0$이면 (Z7)에 의해 $0 < -b$이고, 실수의 계산에서 $(-a)(-b)^{-1} = (-a)\bigl(-(b^{-1})\bigr) = a b^{-1}$이므로 $x = (-a)/(-b)$이다. 그래서 $x = a'/b'$인 정수 $a'$과 $0 < b'$인 정수 $b'$이 있고, (Z1)에 의해 $b'$은 자연수이다. $z$는 전사이므로 $z(k) = a'$인 자연수 $k$가 있다. $m = \pi(k, b')$로 두면 [[pairing-of-natural-numbers]]의 (1)에 의해 $\kappa_1(m) = k$, $\kappa_2(m) = b'$이므로 $q(m) = a'/b' = x$이다.

$n \in \mathbb{N}$이면 $n$은 정수이고 $n = n/1$(실수의 계산 $n \cdot 1^{-1} = n$)이므로 $n \in \mathbb{Q}$이다. 따라서 $\mathbb{N} \subseteq \mathbb{Q}$이고, [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (2)에 의해 $\mathbb{Q}$는 무한집합이다.

**(5)** (4)에 의해 $q : \mathbb{N} \to \mathbb{Q}$는 전사이고 $\mathbb{Q}$는 무한집합이므로, (1)의 (iv)에 의해 $A_q$는 (1)의 (iii)의 가정을 만족한다. (1)의 (iii)에 의해 $k$에서의 값이 $q(p_k) = r_k$인 함수는 전단사 $\mathbb{N} \to \mathbb{Q}$이고 $\mathbb{Q}$는 가산 무한이다.

**(6)** 자연수 $m$에서 $q(\kappa_1(m))$과 $q(\kappa_2(m))$은 유리수이므로 $\bigl(q(\kappa_1(m)), q(\kappa_2(m))\bigr) \in \mathbb{Q} \times \mathbb{Q}$이고, [[recursion-theorem]]의 (1)에 의해 이 값으로 정한 함수 $u : \mathbb{N} \to \mathbb{Q} \times \mathbb{Q}$가 있다. $(x, y) \in \mathbb{Q} \times \mathbb{Q}$이면 (4)에 의해 $q(a) = x$, $q(b) = y$인 자연수 $a$, $b$가 있고, $m = \pi(a, b)$로 두면 $\kappa_1(m) = a$, $\kappa_2(m) = b$이므로 $u(m) = (x, y)$이다. 따라서 $u$는 전사이고 (1)의 (iv)에 의해 $\mathbb{Q} \times \mathbb{Q}$는 가산이다.
:::

## 예시와 반례

:::example[유리수의 열거의 처음 몇 항]
$z(1) = 0$, $z(2) = 1$, $z(3) = -1$, $z(4) = 2$이고, $\pi^{-1}(m) = (\kappa_1(m), \kappa_2(m))$은 $m = 1, \dots, 12$에서 $(1,1)$, $(2,1)$, $(1,2)$, $(3,1)$, $(1,3)$, $(2,2)$, $(1,4)$, $(4,1)$, $(1,5)$, $(2,3)$, $(1,6)$, $(3,2)$입니다(예: $12 = 2^2 \cdot 3$이고 $3 = 2 \cdot 2 - 1$이므로 $(3, 2)$). 따라서
$$
\begin{aligned}
q(1), \dots, q(6) &= 0,\ 1,\ 0,\ -1,\ 0,\ \tfrac{1}{2}, \\
q(7), \dots, q(12) &= 0,\ 2,\ 0,\ \tfrac{1}{3},\ 0,\ -\tfrac{1}{2}
\end{aligned}
$$
입니다. 홀수 번호 $m$에서는 $\kappa_1(m) = 1$이고 $z(1) = 0$이므로 $q(m) = 0$이 되풀이됩니다. 값이 처음 나오는 번호는 $12$까지 $1, 2, 4, 6, 8, 10, 12$이므로 $p_1, \dots, p_7$이 이것이고, 열거는 $r_1, \dots, r_7 = 0, 1, -1, \tfrac{1}{2}, 2, \tfrac{1}{3}, -\tfrac{1}{2}$로 시작합니다. 출처의 늘어놓기($0, 1, -1, \tfrac12, -\tfrac12, \dots$)와 순서는 다르지만, 이미 나온 값을 빼는 것은 같습니다.
:::

:::example[양의 유리수 전체]
$P = \{x \in \mathbb{Q} : 0 < x\}$는 $\mathbb{Q}$의 부분집합이므로 (3)과 (5)에 의해 가산입니다. 또 자연수 $n$은 (4)에 의해 유리수이고 $0 < n$이므로 $\mathbb{N} \subseteq P$이고, [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (2)에 의해 $P$는 무한집합입니다. 가산이면서 무한집합이므로, [[countably-infinite-set]]의 정의(가산은 유한집합이거나 가산 무한)에 의해 $P$는 가산 무한입니다.
:::

:::counterexample[자연수에서 오는 전사가 있는 유한집합의 예]
$B = \{-1, 1\}$이고 $s(n) = (-1)^n$([[power-of-a-real-number]]의 (5): $n$이 짝수이면 $1$, 홀수이면 $-1$)이라 합시다. $s(1) = -1$, $s(2) = 1$이므로 $s$는 전사입니다. $3$ 이상인 $n$은 홀수이면 $s(n) = s(1)$, 짝수이면 $s(n) = s(2)$이고 $1, 2 < n$이므로 $n \notin A_s$입니다. 따라서 $A_s = \{1, 2\}$이고 $M = 2$가 (1)의 (ii)의 가정을 만족하여, $B$는 유한집합(원소 $2$개)입니다. 전사가 있다는 것만으로는 가산 무한이라고 할 수 없고, (1)의 (iv)가 말하는 것은 "가산"입니다.
:::

:::counterexample[$q$에서 같은 수가 여러 번 나오는 예]
$q(1) = z(1)/1 = 0$이고 $q(3) = z(1)/2 = 0$이므로 $q(1) = q(3)$인데 $1 \ne 3$입니다. 따라서 (4)의 $q$는 단사가 아니고 전단사가 아닙니다. 같은 값은 분자가 $0$일 때만 되풀이되는 것도 아닙니다. $q(2) = z(2)/1 = 1$이고 $q(24) = z(4)/2 = 2/2 = 1$입니다($24 = 2^3 \cdot 3$이므로 $\kappa_1(24) = 4$, $\kappa_2(24) = 2$). 그래서 (5)는 $q$를 그대로 쓰지 않고 값이 처음 나오는 번호만 남깁니다.
:::

## 확인 질문

:::check[(5)의 열거에서 $\tfrac{1}{4}$은 몇 번째 항 $r_k$인가? 위 예시의 계산을 이어서 구하라.]
$\tfrac{1}{4} = z(2)/4$이므로 $\kappa_1(m) = 2$, $\kappa_2(m) = 4$인 $m = \pi(2, 4) = 2 \cdot 7 = 14$에서 $q(14) = \tfrac{1}{4}$입니다. $13$은 홀수라 $q(13) = 0$이고, 위 예시에서 $q(1), \dots, q(12)$에는 $\tfrac14$이 없으므로 $14$는 $\tfrac{1}{4}$이 처음 나오는 번호, 곧 $14 \in A_q$입니다. $12$ 다음의 $A_q$의 원소는 $13 \notin A_q$이므로 $14$이고, $p_8 = 14$입니다. 따라서 $r_8 = \tfrac{1}{4}$입니다.
:::

:::check[정수 전체 $\mathbb{Z}$에서 짝수인 정수 전체의 집합은 가산인가? 그 근거가 되는 번호를 들어라.]
가산입니다. [[n-and-z-have-equal-cardinality]]에 의해 $\mathbb{Z}$는 가산 무한이므로 가산이고, 짝수인 정수 전체는 $\mathbb{Z}$의 부분집합이므로 (3)에 의해 가산입니다.
:::
