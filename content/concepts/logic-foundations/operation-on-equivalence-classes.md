---
title: 동치류 위의 연산
title_en: Operations on Equivalence Classes
aliases: [잘 정의됨, 몫집합, 호환, 동치류 위의 함수, well-defined, quotient set, compatible operation, induced operation]
kind: theorem
field: logic-foundations
msc: ["08A30", "03E20"]
level: undergrad
summary: 동치관계와 호환되는 이항연산은 몫집합 위에 [a] ⊛ [b] = [a ∗ b]인 이항연산을 정확히 하나 정하고, 결합법칙, 교환법칙, 항등원, 역원이 그 연산으로 내려간다. 호환되는 함수도 몫집합 위의 함수를 정확히 하나 정한다.
requires: [set, cartesian-product, function, relation, properties-of-relations, equivalence-relation, equivalence-class, equivalence-classes-equal-iff-related, binary-operation, group, recursion-theorem, congruence-modulo-n, divisibility, congruence-is-an-equivalence-relation, congruence-arithmetic, residues-modulo-n, natural-numbers-are-infinite, well-ordering-principle]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 일반 정리로는 없다. 같은 확인을 그때그때 하는 곳은 3.1절의 ℤ_n 의 덧셈·곱셈(p.28–29)과 연습문제 3.22(p.42), 10.1절 Theorem 10.4 의 증명(p.126), 11.2절 Theorem 11.10 의 증명(p.135), 16.4절 Theorem 16.29 의 증명(p.197), 18.1절 Lemma 18.2(p.226)
    checked: original
    note: "출처에는 '동치관계와 호환되는 연산은 동치류 위의 연산을 정한다'는 일반 정리가 없다. 출처가 'well-defined'를 정의하는 곳은 1.2절(p.7)의 사상에 관한 문장('A relation is well-defined if each element in the domain is assigned to a unique element in the range')이고, 그 앞에서 f(p/q) = p 가 1/2 = 2/4 때문에 사상이 되지 못한다는 예를 든다. 동치류 위의 연산이 대표의 선택에 따르지 않음은 경우마다 따로 확인한다: 3.1절은 ℤ_n 의 덧셈·곱셈을 나머지로 정하고(p.28–29) 그것이 잘 정의됨은 연습문제 3.22(p.42)로 둔다. Theorem 10.4 의 증명(p.126)은 몫군의 곱이, Theorem 16.29 의 증명(p.197)은 몫환의 곱이 잉여류의 대표에 따르지 않음을 보이고, Theorem 11.10 의 증명(p.135)은 η(gK) = ψ(g) 가 잘 정의된 사상임을, Lemma 18.2(p.226)는 분수체의 두 연산이 잘 정의됨을 보인다. 확인한 검색(scripts/source-grep.mjs, 책 전체): 'well-defined' 18건(위의 곳들, 집합의 뜻 p.3, 1.2절 p.7, 연습문제 1.27 p.15, 극형식 p.51, Theorem 6.8 의 증명 p.75, Theorem 9.27 의 증명 p.120, Theorem 16.31 의 증명 p.198, 분수체 p.226–227, 연습문제 p.235, p.237, 찾아보기 p.344), 'well defined' 1건(연습문제 3.22), 'independent of' 4건(p.110 확률, p.126, p.197, p.226), 'does not depend' 1건(Theorem 11.10 의 증명), 'compatible' 0건, 'induced' 0건, 'quotient set' 0건. 이 항목의 진술(호환, 한쪽씩 확인, 성질이 내려감, 몫군, 두 연산의 등식, 함수판)과 '몫집합', '호환'이라는 이름, 기호 A/~ 와 ⊛ 는 이 사이트의 것이다. 증명은 대표를 고르지 않고 '조건을 만족하는 동치류가 정확히 하나'임을 보인 뒤 재귀 정리의 (1)로 함수를 정한다. 출처의 위 증명들은 'aN = bN 이고 cN = dN 이라 하자'처럼 두 대표를 놓고 결과가 같음을 보이는데, 이것은 이 항목의 증명에서 유일성 부분에 해당한다. 함수판의 반례는 출처 p.7 의 f(p/q) = p 와 같은 발상(값이 대표에 따라 달라진다)이고, 출처 연습문제 1.17(p.14)이 f(p/q) 꼴의 관계가 사상인지 묻는 것도 같은 발상이다. 예시의 법 n 합동과 덧셈·곱셈은 출처 3.1절과 같은 대상이다. 예시의 [2][2] = [0] (n = 4)은 출처 Example 3.1(p.29)의 3·4 ≡ 0 (mod 12)과 같은 발상(0 이 아닌 두 류의 곱이 [0])이다. 둘째 확인 질문의 '같다' 관계는 출처 p.11 이 동치관계를 같음(equality)의 일반화로 소개하며 = 를 동치관계의 기호로 드는 것과 같은 대상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 경계 경우에서 거짓이 되는 제목·직관과 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$A$가 [[set]]이고 $\sim$이 $A$ 위의 [[equivalence-relation|동치관계]]라 하자. $x \sim y$는 $(x, y) \in {\sim}$을 뜻하고, $a \in A$의 [[equivalence-class|동치류]]는 $[a] = \{x \in A : x \sim a\}$이다. 동치류 전체의 집합
$$A/{\sim} = \{[a] : a \in A\}$$
를 $A$의 $\sim$에 대한 **몫집합**(quotient set)이라 한다. 따라서 $P \in A/{\sim}$인 것은 정확히 $P = [a]$인 $a \in A$가 있을 때이다.

**호환.** $A$ 위의 [[binary-operation|이항연산]] $\ast$가 $\sim$과 **호환된다**(compatible)는 것은 정확히 모든 $a, a', b, b' \in A$에 대하여 $a \sim a'$이고 $b \sim b'$이면 $(a \ast b) \sim (a' \ast b')$일 때이다. $B$가 집합일 때 [[function|함수]] $f : A \to B$가 $\sim$과 **호환된다**는 것은 정확히 모든 $a, a' \in A$에 대하여 $a \sim a'$이면 $f(a) = f(a')$일 때이다.

다음이 성립한다.

1. (동치류 위의 함수) $f : A \to B$가 $\sim$과 호환되면, 함수 $\bar f : A/{\sim} \to B$로서 모든 $a \in A$에서 $\bar f([a]) = f(a)$인 것이 정확히 하나 있다.
2. (동치류 위의 연산) $\ast$가 $\sim$과 호환되면, $A/{\sim}$ 위의 이항연산 $\circledast$로서 모든 $a, b \in A$에서 $[a] \circledast [b] = [a \ast b]$인 것이 정확히 하나 있다. 이것을 **$\ast$가 $A/{\sim}$에 정하는 연산**이라 한다.
3. (한쪽씩 확인하기) $A$ 위의 이항연산 $\ast$가 $\sim$과 호환되는 것은 정확히 다음이 성립할 때이다: 모든 $a, a', b \in A$에 대하여 $a \sim a'$이면 $(a \ast b) \sim (a' \ast b)$이고 $(b \ast a) \sim (b \ast a')$이다.
4. (성질이 내려간다) $\ast$가 $\sim$과 호환되고 $\circledast$가 (2)의 연산이라 하자.
   - (i) $\ast$가 결합법칙을 만족하면 $\circledast$도 결합법칙을 만족한다. 교환법칙도 마찬가지이다.
   - (ii) $e$가 $\ast$의 항등원이면 $[e]$는 $\circledast$의 항등원이다.
   - (iii) (ii)의 가정에 더해 $b$가 $\ast$에 대한 $a$의 역원이면 $[b]$는 $\circledast$에 대한 $[a]$의 역원이다.
5. (군이 내려간다) $(A, \ast)$가 [[group|군]]이고 $\ast$가 $\sim$과 호환되면 $(A/{\sim}, \circledast)$는 군이고, 그 항등원은 $[e]$이며, 모든 $a \in A$에서 $[a]$의 역원은 $[a^{-1}]$이다. $(A, \ast)$가 아벨군이면 $(A/{\sim}, \circledast)$도 아벨군이다.
6. (두 연산 사이의 등식) $\ast$와 $\star$가 둘 다 $\sim$과 호환되는 $A$ 위의 이항연산이고 $\circledast$, $\odot$이 각각 $\ast$, $\star$가 $A/{\sim}$에 정하는 연산이라 하자. 모든 $a, b, c \in A$에서 $a \ast (b \star c) = (a \ast b) \star (a \ast c)$이면 모든 $P, Q, R \in A/{\sim}$에서 $P \circledast (Q \odot R) = (P \circledast Q) \odot (P \circledast R)$이다. 모든 $a, b, c \in A$에서 $(b \star c) \ast a = (b \ast a) \star (c \ast a)$이면 모든 $P, Q, R \in A/{\sim}$에서 $(Q \odot R) \circledast P = (Q \circledast P) \odot (R \circledast P)$이다.
7. (호환되지 않으면) 호환의 가정은 뺄 수 없다. $n \ge 2$인 자연수 $n$에 대하여 $\sim$을 $\mathbb{Z}$ 위의 [[congruence-is-an-equivalence-relation|법 n 합동]]이라 하고, 정수 $a$, $b$에 대하여 $a = b$이면 $a \ast b = 0$, $a \ne b$이면 $a \ast b = 1$로 정하자. 그러면 $\ast$는 $\mathbb{Z}$ 위의 이항연산이지만, $\mathbb{Z}/{\sim}$ 위의 이항연산 $\circledast$로서 모든 정수 $a$, $b$에서 $[a] \circledast [b] = [a \ast b]$인 것은 없다.
:::

:::english
Let $A$ be a set and $\sim$ an equivalence relation on $A$. We write $x \sim y$ for $(x, y) \in {\sim}$, and the equivalence class of $a \in A$ is $[a] = \{x \in A : x \sim a\}$. The set of all equivalence classes
$$A/{\sim} = \{[a] : a \in A\}$$
is called the **quotient set** of $A$ by $\sim$. Hence $P \in A/{\sim}$ exactly when $P = [a]$ for some $a \in A$.

**Compatibility.** A binary operation $\ast$ on $A$ is **compatible** with $\sim$ exactly when, for all $a, a', b, b' \in A$, $a \sim a'$ and $b \sim b'$ imply $(a \ast b) \sim (a' \ast b')$. For a set $B$, a function $f : A \to B$ is **compatible** with $\sim$ exactly when, for all $a, a' \in A$, $a \sim a'$ implies $f(a) = f(a')$.

The following hold.

1. (Functions on equivalence classes) If $f : A \to B$ is compatible with $\sim$, there is exactly one function $\bar f : A/{\sim} \to B$ with $\bar f([a]) = f(a)$ for all $a \in A$.
2. (Operations on equivalence classes) If $\ast$ is compatible with $\sim$, there is exactly one binary operation $\circledast$ on $A/{\sim}$ with $[a] \circledast [b] = [a \ast b]$ for all $a, b \in A$. It is called **the operation that $\ast$ induces on $A/{\sim}$**.
3. (Checking one side at a time) A binary operation $\ast$ on $A$ is compatible with $\sim$ exactly when, for all $a, a', b \in A$, $a \sim a'$ implies $(a \ast b) \sim (a' \ast b)$ and $(b \ast a) \sim (b \ast a')$.
4. (Properties pass to the quotient) Let $\ast$ be compatible with $\sim$ and let $\circledast$ be the operation of (2).
   - (i) If $\ast$ is associative, so is $\circledast$. The same holds for commutativity.
   - (ii) If $e$ is an identity element of $\ast$, then $[e]$ is an identity element of $\circledast$.
   - (iii) If, in addition to the hypothesis of (ii), $b$ is an inverse of $a$ with respect to $\ast$, then $[b]$ is an inverse of $[a]$ with respect to $\circledast$.
5. (Groups pass to the quotient) If $(A, \ast)$ is a group and $\ast$ is compatible with $\sim$, then $(A/{\sim}, \circledast)$ is a group, its identity is $[e]$, and the inverse of $[a]$ is $[a^{-1}]$ for every $a \in A$. If $(A, \ast)$ is abelian, so is $(A/{\sim}, \circledast)$.
6. (Identities between two operations) Let $\ast$ and $\star$ be binary operations on $A$ that are both compatible with $\sim$, and let $\circledast$ and $\odot$ be the operations that $\ast$ and $\star$ induce on $A/{\sim}$. If $a \ast (b \star c) = (a \ast b) \star (a \ast c)$ for all $a, b, c \in A$, then $P \circledast (Q \odot R) = (P \circledast Q) \odot (P \circledast R)$ for all $P, Q, R \in A/{\sim}$. If $(b \star c) \ast a = (b \ast a) \star (c \ast a)$ for all $a, b, c \in A$, then $(Q \odot R) \circledast P = (Q \circledast P) \odot (R \circledast P)$ for all $P, Q, R \in A/{\sim}$.
7. (Without compatibility) The compatibility hypothesis cannot be dropped. For a natural number $n \ge 2$, let $\sim$ be congruence modulo $n$ on $\mathbb{Z}$, and for integers $a$, $b$ put $a \ast b = 0$ if $a = b$ and $a \ast b = 1$ if $a \ne b$. Then $\ast$ is a binary operation on $\mathbb{Z}$, but there is no binary operation $\circledast$ on $\mathbb{Z}/{\sim}$ with $[a] \circledast [b] = [a \ast b]$ for all integers $a$, $b$.
:::

## 직관

학생들이 반으로 나뉘어 있고, 두 반을 짝지어 한 반을 정하는 규칙을 만들고 싶다고 합시다. 손쉬운 방법은 "두 반에서 한 사람씩 데려와 둘에게 계산을 시키고, 나온 사람이 속한 반을 답으로 한다"입니다. 이 방법이 규칙이 되려면, 어느 두 사람을 데려오든 답의 **반**이 같아야 합니다. 그것이 호환의 조건입니다. 비유에서 반이 동치류, 사람이 원소, 사람에게 시키는 계산이 $\ast$, 반의 규칙이 $\circledast$입니다.

호환되면 "$[a] \circledast [b] = [a \ast b]$"가 연산을 정하지만, 이 식만 보고 연산이 정해졌다고 할 수는 없습니다. 동치류에 원소가 둘 이상 있으면 같은 동치류가 여러 이름 $[a] = [a']$으로 불리므로, 이름마다 다른 답이 나오면 이 식은 아무것도 정하지 않습니다. (7)이 그런 경우입니다. 이 확인을 흔히 "연산이 **잘 정의된다**(well-defined)"고 말합니다.

증명은 동치류마다 대표를 하나씩 "골라" 함수를 정하지 않습니다. 두 동치류 $P$, $Q$에 대하여 "$P$의 어떤 원소와 $Q$의 어떤 원소의 연산이 속하는 동치류"가 정확히 하나임을 먼저 보이고, 그 하나뿐인 동치류를 값으로 삼습니다. 호환의 가정은 이 "정확히 하나"의 유일성 부분에서 쓰이고, 동치류가 공집합이 아니라는 것은 존재 부분에서 쓰입니다.

## 증명

:::idea
동치류 $P$, $Q$에 대하여 "어떤 $a \in P$, $b \in Q$에 대해 $R = [a \ast b]$"인 동치류 $R$가 정확히 하나임을 보이고, 이 $R$를 값으로 하는 함수를 재귀 정리의 (1)로 정한다. 나머지는 모든 동치류가 $[a]$ 꼴이라는 것과 $[a] \circledast [b] = [a \ast b]$로 계산을 원소로 옮기는 것이다.
:::

:::hint
유일성: $a, a' \in P$이면 $a \sim a'$이다. $P = [p]$로 놓고 대칭성과 추이성을 쓴다.
:::

:::hint
(7): $[0] = [n]$인데 $0 \ast 0$과 $n \ast 0$은 무엇인가?
:::

:::proof
증명 전체에서 쓰는 사실 둘을 먼저 적는다. 아래에서 반사성, 대칭성, 추이성은 [[equivalence-relation|동치관계]]의 세 조건이다.

- (가) $a \in A$이면 $a \in [a]$이다. 반사성에 의해 $a \sim a$이고, [[equivalence-class|동치류]]의 정의에 의해 $a \in [a]$이다.
- (나) $P \in A/{\sim}$이고 $a, a' \in P$이면 $a \sim a'$이다. $P = [p]$인 $p \in A$가 있다. 동치류의 정의에 의해 $a \sim p$이고 $a' \sim p$이다. 대칭성에 의해 $p \sim a'$이고, 추이성에 의해 $a \sim a'$이다.

또 $a, b \in A$에 대하여 $a \sim b$이면 $[a] = [b]$이다([[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]의 2). 이것을 (다)라 부른다.

**(1)** $P \in A/{\sim}$라 하자. "어떤 $a \in P$에 대하여 $y = f(a)$"를 만족하는 $y \in B$가 정확히 하나 있음을 보인다. 존재: $P = [p]$인 $p \in A$가 있고 (가)에 의해 $p \in P$이므로 $y = f(p)$가 조건을 만족한다. 유일: $y = f(a)$, $y' = f(a')$이고 $a, a' \in P$라 하자. (나)에 의해 $a \sim a'$이고, $f$가 호환되므로 $f(a) = f(a')$, 곧 $y = y'$이다.

따라서 각 $P \in A/{\sim}$마다 조건을 만족하는 $B$의 원소가 정확히 하나 정해져 있다. 이것을 $r(P)$라 하면, [[recursion-theorem|재귀 정리]]의 (1)(정확히 하나임이 증명된 원소는 이미 정해진 대상이다)에 의해 $\bar f = \{(P, r(P)) : P \in A/{\sim}\}$는 $A/{\sim}$에서 $B$로의 함수이고 $\bar f(P) = r(P)$이다. $a \in A$이면 (가)에 의해 $a \in [a]$이므로 $f(a)$는 $P = [a]$에 대한 조건을 만족하고, 유일성에 의해 $\bar f([a]) = r([a]) = f(a)$이다.

그런 함수가 하나뿐임을 보인다. $g : A/{\sim} \to B$도 모든 $a \in A$에서 $g([a]) = f(a)$라 하자. $P \in A/{\sim}$이면 $P = [p]$인 $p \in A$가 있고 $g(P) = g([p]) = f(p) = \bar f([p]) = \bar f(P)$이다. $g$와 $\bar f$는 정의역이 $A/{\sim}$로 같고 모든 $P$에서 값이 같으므로 [[function]]의 함수의 같음에 의해 $g = \bar f$이다.

**(2)** $(P, Q) \in (A/{\sim}) \times (A/{\sim})$라 하자. "어떤 $a \in P$, $b \in Q$에 대하여 $R = [a \ast b]$"를 만족하는 $R \in A/{\sim}$가 정확히 하나 있음을 보인다. 존재: $P = [p]$, $Q = [q]$인 $p, q \in A$가 있고, (가)에 의해 $p \in P$, $q \in Q$이다. $p \ast q \in A$이므로 $[p \ast q] \in A/{\sim}$이고 조건을 만족한다. 유일: $R = [a \ast b]$, $R' = [a' \ast b']$이고 $a, a' \in P$, $b, b' \in Q$라 하자. (나)에 의해 $a \sim a'$, $b \sim b'$이고, $\ast$가 호환되므로 $(a \ast b) \sim (a' \ast b')$이며, (다)에 의해 $[a \ast b] = [a' \ast b']$, 곧 $R = R'$이다.

이 하나뿐인 $R$를 $r(P, Q)$라 하면, [[recursion-theorem|재귀 정리]]의 (1)에 의해 $\circledast = \{((P, Q), r(P, Q)) : (P, Q) \in (A/{\sim}) \times (A/{\sim})\}$는 $(A/{\sim}) \times (A/{\sim})$에서 $A/{\sim}$로의 함수, 곧 $A/{\sim}$ 위의 [[binary-operation|이항연산]]이다. $a, b \in A$이면 (가)에 의해 $a \in [a]$, $b \in [b]$이므로 $[a \ast b]$가 $([a], [b])$에 대한 조건을 만족하고, 유일성에 의해 $[a] \circledast [b] = [a \ast b]$이다.

하나뿐임: $\circledast'$도 $A/{\sim}$ 위의 이항연산이고 모든 $a, b \in A$에서 $[a] \circledast' [b] = [a \ast b]$라 하자. $P, Q \in A/{\sim}$이면 $P = [p]$, $Q = [q]$인 $p, q \in A$가 있고 $P \circledast' Q = [p \ast q] = P \circledast Q$이다. [[binary-operation|이항연산]]의 같음에 의해 $\circledast' = \circledast$이다.

**(3)** $\ast$가 호환된다고 하자. $a \sim a'$이고 $b \in A$이면 반사성에 의해 $b \sim b$이므로, 호환의 정의를 $(a, a', b, b)$에 쓰면 $(a \ast b) \sim (a' \ast b)$이고, $(b, b, a, a')$에 쓰면 $(b \ast a) \sim (b \ast a')$이다. 거꾸로 (3)의 조건이 성립한다고 하자. $a \sim a'$이고 $b \sim b'$이면 조건의 앞쪽을 $a, a', b$에 써서 $(a \ast b) \sim (a' \ast b)$이고, 조건의 뒤쪽을 $b, b', a'$에 써서, 곧 $a$ 자리에 $b$를, $a'$ 자리에 $b'$을, $b$ 자리에 $a'$을 넣어 $(a' \ast b) \sim (a' \ast b')$이다. 추이성에 의해 $(a \ast b) \sim (a' \ast b')$이다.

**(4)** $A/{\sim}$의 원소는 모두 $[a]$ 꼴이다. (i) $P, Q, R \in A/{\sim}$이면 $P = [a]$, $Q = [b]$, $R = [c]$인 $a, b, c \in A$가 있고, (2)를 거듭 써서
$$(P \circledast Q) \circledast R = [a \ast b] \circledast [c] = [(a \ast b) \ast c] = [a \ast (b \ast c)] = [a] \circledast [b \ast c] = P \circledast (Q \circledast R)$$
이다. 가운데 등호는 $\ast$의 결합법칙이다. 교환법칙은 $P \circledast Q = [a \ast b] = [b \ast a] = Q \circledast P$이다. (ii) $P = [a]$이면 $[e] \circledast P = [e \ast a] = [a] = P$이고 $P \circledast [e] = [a \ast e] = [a] = P$이다. (iii) (ii)에 의해 $[e]$가 $\circledast$의 항등원이고, $[a] \circledast [b] = [a \ast b] = [e]$, $[b] \circledast [a] = [b \ast a] = [e]$이다.

**(5)** $(A, \ast)$가 군이면 $\ast$는 결합적이고 항등원 $e$를 가지며 모든 $a \in A$에 역원 $a^{-1}$이 있다. (4)의 (i)에 의해 $\circledast$는 결합적이고, (ii)에 의해 $[e]$가 그 항등원이며, (iii)에 의해 $[a^{-1}]$은 $[a]$의 역원이다. $A/{\sim}$의 모든 원소는 어떤 $a$에 대하여 $[a]$이므로 모든 원소가 역원을 갖는다. 따라서 [[group|군]]의 세 조건이 성립하고, 군의 항등원과 역원은 하나뿐이므로 항등원은 $[e]$, $[a]$의 역원은 $[a^{-1}]$이다. $\ast$가 가환이면 (4)의 (i)에 의해 $\circledast$도 가환이다.

**(6)** $P = [a]$, $Q = [b]$, $R = [c]$라 하자. (2)를 $\ast$와 $\star$에 각각 써서
$$P \circledast (Q \odot R) = [a] \circledast [b \star c] = [a \ast (b \star c)] = [(a \ast b) \star (a \ast c)] = [a \ast b] \odot [a \ast c] = (P \circledast Q) \odot (P \circledast R)$$
이다. 가운데 등호는 가정이다. 둘째 등식도 같은 방법으로 $(Q \odot R) \circledast P = [(b \star c) \ast a] = [(b \ast a) \star (c \ast a)] = (Q \circledast P) \odot (R \circledast P)$이다.

**(7)** 정수 $a$, $b$에 대하여 $a = b$와 $a \ne b$ 가운데 정확히 하나가 성립하므로 각 $(a, b) \in \mathbb{Z} \times \mathbb{Z}$에 정수 $a \ast b$가 하나 정해지고, [[recursion-theorem|재귀 정리]]의 (1)에 의해 $\ast$는 $\mathbb{Z}$ 위의 이항연산이다.

$\circledast$가 그런 연산이라 하자. $0 - n = n \cdot (-1)$이므로 $n \mid (0 - n)$이고([[divisibility|나누어떨어짐]]), [[congruence-modulo-n|합동]]의 정의에 의해 $0 \equiv n \pmod n$, 곧 $0 \sim n$이다. (다)에 의해 $[0] = [n]$이다. $n$은 자연수, 곧 양의 정수이므로([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술) $0 < n$이고, 삼분법 (Z5)에 의해 $n \ne 0$이다. 따라서 $0 \ast 0 = 0$이고 $n \ast 0 = 1$이다. 그러면
$$[0] = [0 \ast 0] = [0] \circledast [0] = [n] \circledast [0] = [n \ast 0] = [1]$$
이다. 셋째 등호는 $[0] = [n]$이어서 $\circledast$의 같은 순서쌍에서의 값이기 때문이다. 그런데 $n \ge 2$이므로 $1 \le n - 1$이고((Z7)), $0 < 1$((Z8))과 (Z6)에 의해 $0$과 $1$은 둘 다 $0$ 이상 $n - 1$ 이하인 서로 다른 정수이다. [[residues-modulo-n|법 n에 대한 나머지]]의 (3)에 의해 나열 $[0], [1], \dots, [n-1]$에서 서로 다른 자리의 두 동치류는 같지 않으므로 $[0] \ne [1]$이다. 이 모순으로 그런 $\circledast$는 없다. 여기서 (Z5)–(Z8)은 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 성질이다.
:::

## 예시와 반례

:::example[법 n 합동과 덧셈·곱셈]
$n$을 자연수, $\sim$을 $\mathbb{Z}$ 위의 [[congruence-is-an-equivalence-relation|법 n 합동]]이라 합시다. [[congruence-arithmetic|합동의 계산]]의 (1)과 (2)는 바로 정수의 덧셈과 곱셈이 $\sim$과 호환된다는 말입니다. 따라서 이 항목의 (2)에 의해 $\mathbb{Z}/{\sim}$ 위에 $[a] \boxplus [b] = [a + b]$, $[a] \odot [b] = [ab]$인 두 이항연산이 정확히 하나씩 있습니다. [[binary-operation|이항연산]]의 (4)와 이 항목의 (4)에 의해 두 연산은 결합적이고 가환이며, $[0]$과 $[1]$이 각각의 항등원이고, $[-a]$가 $\boxplus$에 대한 $[a]$의 역원입니다. 정수의 분배법칙 $a(b + c) = ab + ac$와 (6)에 의해 $[a] \odot ([b] \boxplus [c]) = ([a] \odot [b]) \boxplus ([a] \odot [c])$입니다.

$n = 4$이면 $[3] \boxplus [2] = [5] = [1]$입니다. $5 - 1 = 4 \cdot 1$이라 $5 \sim 1$이기 때문입니다. 또 $[2] \odot [2] = [4] = [0]$입니다. $[2] \ne [0]$인데 그 곱이 $[0]$이 됩니다.
:::

:::example[동치류 위의 함수]
같은 $\sim$(법 $n$ 합동)에 대하여 $f : \mathbb{Z} \to \mathbb{Z}/{\sim}$, $f(a) = [a \cdot a]$라 합시다. $a \sim a'$이면 [[congruence-arithmetic|합동의 계산]]의 (2)를 $a \equiv a'$, $a \equiv a' \pmod n$에 써서 $a \cdot a \equiv a' \cdot a' \pmod n$이고, [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]에 의해 $[a \cdot a] = [a' \cdot a']$입니다. 곧 $f$는 $\sim$과 호환되고, (1)에 의해 $\bar f([a]) = [a \cdot a]$인 함수 $\bar f : \mathbb{Z}/{\sim} \to \mathbb{Z}/{\sim}$가 정확히 하나 있습니다. $n = 4$이면 $\bar f([3]) = [9] = [1]$입니다.
:::

:::counterexample[법 n 합동에서는 대표를 그대로 꺼내는 함수가 없다]
$n$이 자연수이고 $\sim$이 법 $n$ 합동일 때, 모든 정수 $a$에서 $g([a]) = a$인 함수 $g : \mathbb{Z}/{\sim} \to \mathbb{Z}$는 없습니다. $0 - n = n \cdot (-1)$이라 $0 \sim n$이고 $[0] = [n]$이므로, $g$가 있다면 $0 = g([0]) = g([n]) = n$인데, $n$은 양의 정수라 $n \ne 0$입니다. (1)을 쓸 수 없는 까닭은 항등함수 $i_{\mathbb{Z}}$가 $\sim$과 호환되지 않기 때문입니다($0 \sim n$이지만 $0 \ne n$). 법 $n$ 합동에서는 동치류를 그 원소 하나로 "읽는" 일이 함수가 되지 않습니다. 동치관계에 따라서는 그런 함수가 있습니다. $\sim$이 "같다" 관계이면 $[a] = \{a\}$이고 항등함수가 $\sim$과 호환되므로, (1)에 의해 $g(\{a\}) = a$인 함수가 있습니다.
:::

## 확인 질문

:::check[법 $3$ 합동과 정수의 뺄셈은 호환되는가? 그렇다면 $[2] \circledast [1]$과 $[0] \circledast [1]$은?]
호환됩니다. $a \equiv a'$, $b \equiv b' \pmod 3$이면 [[congruence-arithmetic|합동의 계산]]의 (4)에 의해 $a - b \equiv a' - b' \pmod 3$입니다. 뺄셈이 정하는 연산 $\circledast$에서 $[2] \circledast [1] = [1]$이고 $[0] \circledast [1] = [-1] = [2]$입니다. $-1 - 2 = 3 \cdot (-1)$이라 $-1 \equiv 2 \pmod 3$이기 때문입니다.
:::

:::check[$\sim$이 $A$ 위의 "같다" 관계, 곧 $x \sim y$가 정확히 $x = y$일 때라면, $A$ 위의 모든 이항연산이 $\sim$과 호환되는가?]
먼저 "같다" 관계는 반사적($x = x$), 대칭적, 추이적이므로 동치관계입니다. 모든 이항연산이 호환됩니다. $a \sim a'$, $b \sim b'$이면 $a = a'$, $b = b'$이므로 $a \ast b = a' \ast b'$, 곧 $(a \ast b) \sim (a' \ast b')$입니다. 이때 $[a] = \{x \in A : x = a\} = \{a\}$이고, (2)의 연산은 $\{a\} \circledast \{b\} = \{a \ast b\}$입니다.
:::
