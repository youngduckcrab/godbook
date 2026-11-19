---
title: 역상과 집합의 연산
title_en: Preimages and Set Operations
aliases: [역상의 성질, 상의 성질, preimage of union, preimage of intersection, image of union, 역상과 합집합, 역상과 교집합, 역상과 여집합]
kind: proposition
field: logic-foundations
msc: ["03E20"]
level: intro
summary: "함수의 역상은 합집합, 교집합(집합족 포함), 차집합, 합성과 그대로 맞물리고, 상은 합집합(집합족 포함)과 맞물리지만 교집합과는 포함만 성립한다. 전단사 함수에서는 역함수에 의한 역상이 원래 함수에 의한 상과 같다."
requires: [set, subset, set-operations, function, image-and-preimage, family-of-sets, function-composition, inverse-function, injective-surjective-bijective, bijective-iff-inverse-is-a-function]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: "12.6절 Image and Preimage, Theorem 12.4, p.243 (12.6절 연습문제 5–14 는 p.243, 풀이는 pp.354–355)"
    checked: original
    note: "(1)의 (i)–(vi)은 출처 Theorem 12.4(p.243)의 1–6 과 같은 식을 같은 순서로 적은 것이다. 출처는 Theorem 12.4 에 이 여섯 식만 적고, 증명은 12.6절 연습문제 5, 7, 9, 10, 11(p.243)로 남기며, 그 가운데 5, 7, 9, 11 의 증명을 책 끝 풀이(pp.354–355)에 싣는다. (2)–(7)은 Theorem 12.4 의 목록에 없다. 반례 '교집합의 상이 상들의 교집합보다 작은 경우'는 12.6절 연습문제 8(f(W ∩ X) = f(W) ∩ f(X) 가 일반적으로 거짓임을 보이는 반례를 들라)과 같은 물음에 답한 것이고, 그 반례 안의 f(f⁻¹(V)) ≠ V 는 연습문제 6 과 같은 물음이다. 확인 질문 '단사이면 교집합의 상은 상들의 교집합인가'는 연습문제 12(단사일 조건을 상과 역상으로 쓰기)와 같은 단사 함수를 다루지만 다른 등식을 묻는다. 예시 '유한집합에서 확인하기'와 두 반례의 함수 f 는 출처 예 12.13(p.242)처럼 단사도 전사도 아닌 작은 유한집합 위의 함수에서 상과 역상을 계산하는 같은 발상이다(집합과 대응은 다르다). 확인 질문 '(g ∘ f)⁻¹({1}) 을 두 가지로'에서 합성을 순서쌍으로 구하는 계산은 출처 예 12.8(p.236, 세 원소 집합 위의 두 함수의 합성)과 같은 종류이고, 이 질문은 그 역상을 묻는다."
  - ref: fuglede-basic-topology
    loc: "Continuous functions 절의 Proposition preimage-props, content/topological-spaces.tex:271–281"
    checked: original
    note: "출처는 f : X → Y 와 첨수가 붙은 Y 의 부분집합들의 족 {B_i}_{i∈I} 에 대해 역상이 합집합·교집합과 바뀐다는 것, f⁻¹(Bᶜ) = f⁻¹(B)ᶜ, g : Y → Z 일 때 (g ∘ f)⁻¹(C) = f⁻¹(g⁻¹(C)) 를 적고 증명하지 않는다. 이 항목의 (2)는 첨수 대신 집합족 꼴로 쓰고 어느 집합의 집합족으로 본 교집합인지와 빈 집합족의 경우를 밝힌 것이다. (3)의 둘째 식은 출처의 여집합 식을 차집합으로 쓴 것이고, (4)의 첫째 식은 출처의 합성 식과 같다. 출처는 바로 앞 문단(265–269)에서 역상의 기호 f⁻¹ 는 역함수가 없어도 쓴다고 주의를 준다. (6)의 (iii)은 출처가 Theorem funcs-compact 의 증명(content/compactness.tex:62)에서 전단사 f 에 대해 증명 없이 쓰는 식 f(U)ᶜ = f(Uᶜ) 와 같은 내용이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 상수함수에서 거짓이던 일반 문장 2건과 근거 없는 주장을 고쳤다."
added: 2026-11-19
---

:::statement
상과 역상은 [[image-and-preimage|상과 역상]]의 것이고, 집합족과 그 합집합·교집합, 식으로 정한 집합족, 빈 집합족은 [[family-of-sets]]의 것이다. 합성은 [[function-composition|함수의 합성]]의 것이고, 항등함수와 역함수는 [[inverse-function|역관계와 역함수]]의 것이다. 아래에서 $f : A \to B$는 [[function|함수]]이고, $f^{-1}(V)$처럼 괄호 안이 부분집합인 기호는 언제나 역상이다.

1. (두 집합) $W$, $X$가 $A$의 부분집합이고 $Y$, $Z$가 $B$의 부분집합이면 다음이 성립한다.
   - (i) $f(W \cap X) \subseteq f(W) \cap f(X)$
   - (ii) $f(W \cup X) = f(W) \cup f(X)$
   - (iii) $X \subseteq f^{-1}(f(X))$
   - (iv) $f^{-1}(Y \cup Z) = f^{-1}(Y) \cup f^{-1}(Z)$
   - (v) $f^{-1}(Y \cap Z) = f^{-1}(Y) \cap f^{-1}(Z)$
   - (vi) $f(f^{-1}(Y)) \subseteq Y$
2. (집합족의 역상) $\mathcal{A}$가 $B$의 집합족이면 $\{f^{-1}(V) : V \in \mathcal{A}\}$는 $A$의 집합족이고
$$
f^{-1}\Bigl(\bigcup \mathcal{A}\Bigr) = \bigcup \{f^{-1}(V) : V \in \mathcal{A}\}, \qquad f^{-1}\Bigl(\bigcap \mathcal{A}\Bigr) = \bigcap \{f^{-1}(V) : V \in \mathcal{A}\}
$$
이다. 둘째 등식에서 왼쪽의 $\bigcap \mathcal{A}$는 $B$의 집합족으로 본 교집합이고, 오른쪽은 $A$의 집합족으로 본 교집합이다. 두 등식은 $\mathcal{A} = \emptyset$일 때에도 성립한다. 이때 첫째 등식의 양쪽은 $\emptyset$이고, 둘째 등식의 양쪽은 $A$이다.
3. (차집합) $V$, $W$가 $B$의 부분집합이면 $f^{-1}(V - W) = f^{-1}(V) - f^{-1}(W)$이다. 특히 $f^{-1}(B - W) = A - f^{-1}(W)$이다.
4. (합성) $g : B \to D$가 함수이면, $E \subseteq D$에 대하여 $(g \circ f)^{-1}(E) = f^{-1}(g^{-1}(E))$이고, $X \subseteq A$에 대하여 $(g \circ f)(X) = g(f(X))$이다.
5. (집합족의 상) $\mathcal{C}$가 $A$의 집합족이면 $\{f(S) : S \in \mathcal{C}\}$는 $B$의 집합족이고 $f\bigl(\bigcup \mathcal{C}\bigr) = \bigcup \{f(S) : S \in \mathcal{C}\}$이다. $\mathcal{C} = \emptyset$이면 이 등식은 $f(\emptyset) = \emptyset$이다.
6. (전단사와 역함수) $f : A \to B$가 전단사라 하자. [[bijective-iff-inverse-is-a-function|전단사일 조건]]에 의해 역관계는 $B$에서 $A$로의 함수, 곧 $f$의 역함수이다. 이 역함수를 $g : B \to A$라 쓰자. 그러면 다음이 성립한다.
   - (i) $U \subseteq A$이면, $g$에 의한 $U$의 역상 $g^{-1}(U) = \{y \in B : g(y) \in U\}$는 $f$에 의한 $U$의 상 $f(U)$와 같다.
   - (ii) $V \subseteq B$이면, $f$에 의한 $V$의 역상 $f^{-1}(V)$는 $g$에 의한 $V$의 상 $g(V)$와 같다. 곧 전단사 $f$에서는 $f^{-1}(V)$를 $f$에 의한 역상으로 읽든 역함수에 의한 상으로 읽든 같은 집합이다.
   - (iii) $U \subseteq A$이면 $f(A - U) = B - f(U)$이다.
7. (포함, 전체와 공집합) $V \subseteq W \subseteq B$이면 $f^{-1}(V) \subseteq f^{-1}(W)$이다. $f^{-1}(B) = A$이고 $f^{-1}(\emptyset) = \emptyset$이다. 또 $S \subseteq T \subseteq A$이면 $f(S) \subseteq f(T)$이다.
:::

:::english
Images and preimages, families of sets with their unions and intersections, families given by an expression, and the empty family are as in the earlier entries; so are composition, identity functions and inverse functions. Throughout, $f : A \to B$ is a function, and a symbol such as $f^{-1}(V)$ with a subset inside the parentheses always denotes a preimage.

1. (Two sets) If $W$ and $X$ are subsets of $A$ and $Y$ and $Z$ are subsets of $B$, then:
   - (i) $f(W \cap X) \subseteq f(W) \cap f(X)$
   - (ii) $f(W \cup X) = f(W) \cup f(X)$
   - (iii) $X \subseteq f^{-1}(f(X))$
   - (iv) $f^{-1}(Y \cup Z) = f^{-1}(Y) \cup f^{-1}(Z)$
   - (v) $f^{-1}(Y \cap Z) = f^{-1}(Y) \cap f^{-1}(Z)$
   - (vi) $f(f^{-1}(Y)) \subseteq Y$
2. (Preimage of a family) If $\mathcal{A}$ is a family of subsets of $B$, then $\{f^{-1}(V) : V \in \mathcal{A}\}$ is a family of subsets of $A$, and
$$
f^{-1}\Bigl(\bigcup \mathcal{A}\Bigr) = \bigcup \{f^{-1}(V) : V \in \mathcal{A}\}, \qquad f^{-1}\Bigl(\bigcap \mathcal{A}\Bigr) = \bigcap \{f^{-1}(V) : V \in \mathcal{A}\}.
$$
In the second equality, $\bigcap \mathcal{A}$ on the left is the intersection of $\mathcal{A}$ regarded as a family of subsets of $B$, and the right-hand side is an intersection regarded as a family of subsets of $A$. Both equalities also hold when $\mathcal{A} = \emptyset$; then both sides of the first equality are $\emptyset$ and both sides of the second are $A$.
3. (Differences) If $V$ and $W$ are subsets of $B$, then $f^{-1}(V - W) = f^{-1}(V) - f^{-1}(W)$. In particular, $f^{-1}(B - W) = A - f^{-1}(W)$.
4. (Composition) If $g : B \to D$ is a function, then $(g \circ f)^{-1}(E) = f^{-1}(g^{-1}(E))$ for $E \subseteq D$, and $(g \circ f)(X) = g(f(X))$ for $X \subseteq A$.
5. (Image of a family) If $\mathcal{C}$ is a family of subsets of $A$, then $\{f(S) : S \in \mathcal{C}\}$ is a family of subsets of $B$, and $f\bigl(\bigcup \mathcal{C}\bigr) = \bigcup \{f(S) : S \in \mathcal{C}\}$. When $\mathcal{C} = \emptyset$, this equality reads $f(\emptyset) = \emptyset$.
6. (Bijections and inverse functions) Let $f : A \to B$ be bijective. Then the inverse relation is a function from $B$ to $A$, that is, the inverse function of $f$; denote it by $g : B \to A$. Then:
   - (i) If $U \subseteq A$, the preimage $g^{-1}(U) = \{y \in B : g(y) \in U\}$ of $U$ under $g$ equals the image $f(U)$ of $U$ under $f$.
   - (ii) If $V \subseteq B$, the preimage $f^{-1}(V)$ of $V$ under $f$ equals the image $g(V)$ of $V$ under $g$. That is, for a bijection $f$, the set $f^{-1}(V)$ is the same whether it is read as a preimage under $f$ or as an image under the inverse function.
   - (iii) If $U \subseteq A$, then $f(A - U) = B - f(U)$.
7. (Inclusions, the whole set and the empty set) If $V \subseteq W \subseteq B$, then $f^{-1}(V) \subseteq f^{-1}(W)$. Moreover $f^{-1}(B) = A$ and $f^{-1}(\emptyset) = \emptyset$. Also, if $S \subseteq T \subseteq A$, then $f(S) \subseteq f(T)$.
:::

## 직관

[[image-and-preimage|상과 역상]]의 비유를 이어 씁니다. $f$가 학생마다 담임 선생님을 정해 준다고 합시다. 선생님들의 모임 $V$의 역상은 "담임이 $V$에 있는 학생 전체"입니다. 학생 한 명이 어느 역상에 드는지는 그 학생의 담임 한 사람만 보면 정해지므로, "담임이 $V$에 있거나 $W$에 있다", "담임이 $V$에 있고 $W$에 있다", "담임이 $V$에 있고 $W$에는 없다"가 곧 역상끼리의 합집합, 교집합, 차집합입니다. 그래서 역상은 집합의 연산과 빈틈없이 맞물립니다((2), (3), (1)의 (iv), (v)).

상은 사정이 다릅니다. 학생들의 모임 $X$의 상은 "$X$의 어떤 학생의 담임인 선생님 전체"이고, 여기에는 "어떤 학생"이라는 존재가 들어 있습니다. "$W$의 어떤 학생의 담임이면서 $X$의 어떤 학생의 담임"인 선생님은 두 학생이 서로 다를 수 있으므로 "$W$와 $X$에 함께 든 어떤 학생의 담임"이라고 할 수 없습니다. 그래서 교집합의 상에는 포함만 성립합니다((1)의 (i)). "또는"은 존재와 순서를 바꿔도 되므로 합집합의 상은 등식입니다((1)의 (ii), (5)).

$f$가 전단사이면 학생과 선생님이 한 사람씩 짝지어집니다. 그러면 "학생 모임 $U$의 담임들"과 "담임을 거꾸로 따라가 $U$에 닿는 선생님들"이 같은 모임이 되어, 상과 역상이 자리를 바꿉니다((6)). 이 경우에는 $f^{-1}(V)$를 역상으로 읽든 역함수의 상으로 읽든 결과가 같습니다.

## 증명

:::idea
대부분은 원소 하나를 잡아 상과 역상의 정의를 푸는 것으로 끝납니다. 역상은 "$f(x)$가 어디에 드는가"라는 조건 하나이므로 그 조건에 논리의 "또는", "그리고", "아니다", "모든", "어떤"을 붙이는 것이 집합의 연산이 됩니다.
:::

:::hint
$a \in A$이면 "$a \in f^{-1}(V)$"와 "$f(a) \in V$"는 같은 말입니다([[image-and-preimage|상과 역상]]의 2). 집합족의 교집합에서는 [[family-of-sets]]의 (9)를 씁니다.
:::

:::hint
(6)에서는 역함수 $g$에 대해 $g(f(x)) = x$, $f(g(y)) = y$가 성립한다는 것([[inverse-function|역관계와 역함수]]의 두 등식)만 있으면 됩니다. (iii)은 (i)과 (3)을 $g$에 적용해서 얻습니다.
:::

:::proof
두 집합은 원소가 정확히 일치할 때 같으므로([[set]]), 등식은 양쪽 포함으로 보인다. [[image-and-preimage|상과 역상]]의 진술에 의해, $b \in B$에 대하여 $b \in f(S)$인 것은 정확히 $f(x) = b$인 $x \in S$가 있을 때이고, $a \in A$에 대하여 $a \in f^{-1}(V)$인 것은 정확히 $f(a) \in V$일 때이다. 또 $f^{-1}(V) \subseteq A$이고 $f(S) \subseteq B$이다. 이 둘을 아래에서 "상의 정의", "역상의 정의"라 부른다. 합집합, 교집합, 차집합의 정의는 [[set-operations|합집합, 교집합, 차집합]]의 것이다.

**(7).** $V \subseteq W \subseteq B$이고 $a \in f^{-1}(V)$이면 $a \in A$이고 $f(a) \in V \subseteq W$이므로 역상의 정의에 의해 $a \in f^{-1}(W)$이다. $f^{-1}(B) \subseteq A$이고, $a \in A$이면 [[function]]의 진술에 의해 $f(a) \in B$이므로 $a \in f^{-1}(B)$이다. 따라서 $f^{-1}(B) = A$이다. $f(a) \in \emptyset$인 $a$는 없으므로 $f^{-1}(\emptyset) = \emptyset$이다. 끝으로 $S \subseteq T \subseteq A$이고 $b \in f(S)$이면 $f(x) = b$인 $x \in S$가 있고, $x \in T$이므로 $b \in f(T)$이다.

**(1).** (i) $b \in f(W \cap X)$이면 $f(x) = b$인 $x \in W \cap X$가 있다. $x \in W$이므로 $b \in f(W)$이고, $x \in X$이므로 $b \in f(X)$이다. 따라서 $b \in f(W) \cap f(X)$이다.

(ii) $b \in f(W \cup X)$이면 $f(x) = b$인 $x \in W \cup X$가 있다. $x \in W$이면 $b \in f(W)$이고, $x \in X$이면 $b \in f(X)$이다. 어느 경우든 $b \in f(W) \cup f(X)$이다. 거꾸로 $b \in f(W)$이면 $f(x) = b$인 $x \in W$가 있고 $x \in W \cup X$이므로 $b \in f(W \cup X)$이다. $b \in f(X)$이면 $f(x) = b$인 $x \in X$가 있고 $x \in W \cup X$이므로 $b \in f(W \cup X)$이다.

(iii) $x \in X$이면 $X \subseteq A$이므로 $x \in A$이고, 상의 정의에 의해 $f(x) \in f(X)$이다. 역상의 정의에 의해 $x \in f^{-1}(f(X))$이다.

(iv) $a \in f^{-1}(Y \cup Z)$이면 $a \in A$이고 $f(a) \in Y$이거나 $f(a) \in Z$이다. 앞의 경우 $a \in f^{-1}(Y)$, 뒤의 경우 $a \in f^{-1}(Z)$이므로 $a \in f^{-1}(Y) \cup f^{-1}(Z)$이다. 거꾸로 $a \in f^{-1}(Y)$이면 $a \in A$이고 $f(a) \in Y \subseteq Y \cup Z$이므로 $a \in f^{-1}(Y \cup Z)$이다. $a \in f^{-1}(Z)$이면 $a \in A$이고 $f(a) \in Z \subseteq Y \cup Z$이므로 $a \in f^{-1}(Y \cup Z)$이다.

(v) $a \in f^{-1}(Y \cap Z)$이면 $a \in A$이고 $f(a) \in Y$이고 $f(a) \in Z$이므로 $a \in f^{-1}(Y)$이고 $a \in f^{-1}(Z)$이다. 거꾸로 $a \in f^{-1}(Y) \cap f^{-1}(Z)$이면 $a \in A$이고 $f(a) \in Y$이고 $f(a) \in Z$이므로 $f(a) \in Y \cap Z$이고 $a \in f^{-1}(Y \cap Z)$이다.

(vi) $b \in f(f^{-1}(Y))$이면 $f(a) = b$인 $a \in f^{-1}(Y)$가 있고, 역상의 정의에 의해 $f(a) \in Y$이다. 곧 $b \in Y$이다.

**(2).** 각 $V \in \mathcal{A}$에서 $f^{-1}(V)$는 $A$의 부분집합이므로, $\mathcal{D} = \{f^{-1}(V) : V \in \mathcal{A}\}$는 $T = \mathcal{A}$이고 $F(V) = f^{-1}(V)$인 식으로 정한 집합족이며 $A$의 집합족이다([[family-of-sets]]의 식으로 정한 집합족 단락).

합집합. $a \in f^{-1}(\bigcup \mathcal{A})$이면 $a \in A$이고 $f(a) \in \bigcup \mathcal{A}$이므로 $f(a) \in V$인 $V \in \mathcal{A}$가 있다. 이 $V$에서 $a \in f^{-1}(V)$이므로 [[family-of-sets]]의 (9)에 의해 $a \in \bigcup \mathcal{D}$이다. 거꾸로 $a \in \bigcup \mathcal{D}$이면 같은 (9)에 의해 $a \in f^{-1}(V)$인 $V \in \mathcal{A}$가 있다. 그러면 $a \in A$이고 $f(a) \in V$이므로 $f(a) \in \bigcup \mathcal{A}$이고 $a \in f^{-1}(\bigcup \mathcal{A})$이다.

교집합. $a \in A$라 하자. $f(a) \in B$이므로, $B$의 집합족으로 본 교집합의 정의에 의해 $f(a) \in \bigcap \mathcal{A}$인 것은 정확히 모든 $V \in \mathcal{A}$에서 $f(a) \in V$일 때이고, 이것은 정확히 모든 $V \in \mathcal{A}$에서 $a \in f^{-1}(V)$일 때이다. [[family-of-sets]]의 (9)에 의해 이것은 정확히 $a \in \bigcap \mathcal{D}$($A$의 집합족으로 본 교집합)일 때이다. 양쪽 집합이 모두 $A$의 부분집합이므로($f^{-1}(\bigcap \mathcal{A}) \subseteq A$는 역상의 정의, $\bigcap \mathcal{D} \subseteq A$는 집합족의 정의) 두 집합은 같다.

$\mathcal{A} = \emptyset$이어도 위의 논증은 그대로 성립한다. 이때 $\mathcal{D} = \emptyset$이고, [[family-of-sets]]의 빈 집합족 단락에 의해 $\bigcup \mathcal{A} = \emptyset$, $\bigcup \mathcal{D} = \emptyset$, $\bigcap \mathcal{A} = B$, $\bigcap \mathcal{D} = A$이다. (7)에 의해 $f^{-1}(\emptyset) = \emptyset$이고 $f^{-1}(B) = A$이므로 진술의 마지막 문장도 성립한다.

**(3).** $a \in f^{-1}(V - W)$이면 $a \in A$이고 $f(a) \in V$이고 $f(a) \notin W$이다. 앞의 것에서 $a \in f^{-1}(V)$이고, $f(a) \notin W$이므로 역상의 정의에 의해 $a \notin f^{-1}(W)$이다. 따라서 $a \in f^{-1}(V) - f^{-1}(W)$이다. 거꾸로 $a \in f^{-1}(V) - f^{-1}(W)$이면 $a \in A$이고 $f(a) \in V$이며, $a \notin f^{-1}(W)$이고 $a \in A$이므로 $f(a) \notin W$이다. 따라서 $f(a) \in V - W$이고 $a \in f^{-1}(V - W)$이다. $V = B$로 두면 (7)에 의해 $f^{-1}(B) = A$이므로 $f^{-1}(B - W) = A - f^{-1}(W)$이다.

**(4).** [[function-composition|함수의 합성]]의 진술에 의해 $g \circ f : A \to D$이고 모든 $x \in A$에서 $(g \circ f)(x) = g(f(x))$이다. $a \in A$라 하자. $a \in (g \circ f)^{-1}(E)$인 것은 정확히 $g(f(a)) \in E$일 때이다. $f(a) \in B$이므로 이것은 정확히 $f(a) \in g^{-1}(E)$일 때이고, 다시 정확히 $a \in f^{-1}(g^{-1}(E))$일 때이다. 양쪽 집합이 모두 $A$의 부분집합이므로 첫째 등식이 성립한다.

둘째 등식. $z \in (g \circ f)(X)$이면 $(g \circ f)(x) = z$인 $x \in X$가 있다. $y = f(x)$라 하면 $y \in f(X)$이고 $g(y) = g(f(x)) = z$이므로 $z \in g(f(X))$이다. 거꾸로 $z \in g(f(X))$이면 $g(y) = z$인 $y \in f(X)$가 있고, $f(x) = y$인 $x \in X$가 있다. 그러면 $(g \circ f)(x) = g(f(x)) = g(y) = z$이므로 $z \in (g \circ f)(X)$이다.

**(5).** 각 $S \in \mathcal{C}$에서 $f(S) \subseteq B$이므로 $\mathcal{E} = \{f(S) : S \in \mathcal{C}\}$는 $B$의 집합족이다(식으로 정한 집합족). $b \in f(\bigcup \mathcal{C})$이면 $f(x) = b$인 $x \in \bigcup \mathcal{C}$가 있고, $x \in S$인 $S \in \mathcal{C}$가 있다. 그 $S$에서 $b \in f(S)$이므로 [[family-of-sets]]의 (9)에 의해 $b \in \bigcup \mathcal{E}$이다. 거꾸로 $b \in \bigcup \mathcal{E}$이면 같은 (9)에 의해 $b \in f(S)$인 $S \in \mathcal{C}$가 있고, $f(x) = b$인 $x \in S$가 있다. $S \subseteq \bigcup \mathcal{C}$이므로([[family-of-sets]]의 (1)) $x \in \bigcup \mathcal{C}$이고 $b \in f(\bigcup \mathcal{C})$이다. $\mathcal{C} = \emptyset$이면 빈 집합족 단락에 의해 $\bigcup \mathcal{C} = \emptyset$이고, $\mathcal{E} = \emptyset$이므로 $\bigcup \mathcal{E} = \emptyset$이다. 곧 등식은 $f(\emptyset) = \emptyset$이다.

**(6).** [[bijective-iff-inverse-is-a-function|전단사일 조건]]에 의해 역관계 $g$는 $B$에서 $A$로의 함수이고, [[inverse-function|역관계와 역함수]]의 진술에 의해 $g \circ f = i_A$, $f \circ g = i_B$이다. [[function-composition|함수의 합성]]의 진술과 함께 쓰면, 모든 $x \in A$에서 $g(f(x)) = x$이고 모든 $y \in B$에서 $f(g(y)) = y$이다.

(i) $y \in g^{-1}(U)$이면 $y \in B$이고 $g(y) \in U$이다. $x = g(y)$라 하면 $x \in U$이고 $f(x) = f(g(y)) = y$이므로 $y \in f(U)$이다. 거꾸로 $y \in f(U)$이면 $f(x) = y$인 $x \in U$가 있다. $y \in B$이고 $g(y) = g(f(x)) = x \in U$이므로 $y \in g^{-1}(U)$이다.

(ii) $x \in f^{-1}(V)$이면 $x \in A$이고 $f(x) \in V$이다. $y = f(x)$라 하면 $y \in V$이고 $g(y) = g(f(x)) = x$이므로 $x \in g(V)$이다. 거꾸로 $x \in g(V)$이면 $g(y) = x$인 $y \in V$가 있다. $x \in A$이고 $f(x) = f(g(y)) = y \in V$이므로 $x \in f^{-1}(V)$이다.

(iii) $A - U \subseteq A$이므로 (i)에 의해 $f(A - U) = g^{-1}(A - U)$이다. (3)을 함수 $g : B \to A$에 쓰면 $g^{-1}(A - U) = B - g^{-1}(U)$이고, (i)에 의해 $g^{-1}(U) = f(U)$이다. 따라서 $f(A - U) = B - f(U)$이다.
:::

## 예시와 반례

:::example[유한집합에서 확인하기]
$A = \{1, 2, 3\}$, $B = \{p, q, r\}$($p$, $q$, $r$는 서로 다른 대상)이고 $f = \{(1, p), (2, p), (3, q)\}$라 합시다. $f(1) = f(2)$이므로 $f$는 단사가 아니고, $r$가 값이 아니므로 $f : A \to B$는 전사가 아닙니다.

$\mathcal{A} = \bigl\{\{p, r\}, \{q, r\}\bigr\}$라 하면 $f^{-1}(\{p, r\}) = \{1, 2\}$이고 $f^{-1}(\{q, r\}) = \{3\}$입니다.

- 합집합: $\bigcup \mathcal{A} = \{p, q, r\} = B$이므로 $f^{-1}(\bigcup \mathcal{A}) = A$이고, $\{1, 2\} \cup \{3\} = A$와 같습니다.
- 교집합: $\bigcap \mathcal{A} = \{r\}$이고 $r$를 값으로 갖는 원소가 없으므로 $f^{-1}(\{r\}) = \emptyset$입니다. $\{1, 2\} \cap \{3\} = \emptyset$과 같습니다.
- 차집합: $f^{-1}(B - \{p, r\}) = f^{-1}(\{q\}) = \{3\}$이고, $A - f^{-1}(\{p, r\}) = A - \{1, 2\} = \{3\}$과 같습니다.

$\mathcal{A} = \emptyset$으로 두면, $B$의 집합족으로 본 $\bigcap \emptyset$은 $B$이므로 $f^{-1}(\bigcap \emptyset) = f^{-1}(B) = A$이고, 오른쪽의 $\{f^{-1}(V) : V \in \emptyset\}$은 빈 집합족이므로 $A$의 집합족으로 본 교집합이 $A$입니다. 오른쪽을 $B$의 집합족으로 보면 $B$가 되어 왼쪽과 같은 집합이 아니게 되므로, (2)에서 어느 집합의 집합족으로 보는지를 밝혀야 합니다.
:::

:::counterexample[교집합의 상이 상들의 교집합보다 작은 경우]
위의 $f$에서 $W = \{1, 3\}$, $X = \{2, 3\}$이라 합시다. $W \cap X = \{3\}$이므로 $f(W \cap X) = \{q\}$입니다. 한편 $f(W) = \{p, q\}$, $f(X) = \{p, q\}$이므로 $f(W) \cap f(X) = \{p, q\}$입니다. $p$는 $W$의 원소 $1$과 $X$의 원소 $2$의 값이지만 두 원소가 서로 달라서, $W \cap X$의 어떤 원소의 값도 아닙니다. 따라서 (1)의 (i)에서 등호는 이 경우 성립하지 않습니다.

같은 $f$에서 $V = \{p, r\}$이면 $f(f^{-1}(V)) = f(\{1, 2\}) = \{p\} \ne V$이므로 (1)의 (vi)에서도 등호가 성립하지 않습니다.
:::

:::counterexample[차집합의 상은 상의 차집합이 아닐 수 있다]
(3)과 같은 꼴의 등식은 상에서는 성립하지 않을 수 있습니다. 위의 $f$에서 $U = \{3\}$이면 $f(A - U) = f(\{1, 2\}) = \{p\}$이지만 $B - f(U) = B - \{q\} = \{p, r\}$입니다. 이 $f$는 단사도 전사도 아닙니다. (6)의 (iii)은 $f$가 전단사이면 이 등식이 성립한다는 것입니다.
:::

## 확인 질문

:::check[$f : A \to B$가 단사이면 $A$의 부분집합 $W$, $X$에 대하여 $f(W \cap X) = f(W) \cap f(X)$인가?]
그렇습니다. (1)의 (i)에서 $f(W \cap X) \subseteq f(W) \cap f(X)$입니다. 거꾸로 $b \in f(W) \cap f(X)$이면 $f(w) = b$인 $w \in W$와 $f(x) = b$인 $x \in X$가 있습니다. $f(w) = f(x)$이고 $f$가 단사이므로([[injective-surjective-bijective|단사]]의 동치 꼴) $w = x$이고, 따라서 $w \in W \cap X$이며 $b = f(w) \in f(W \cap X)$입니다.
:::

:::check[$f = \{(1, p), (2, p), (3, q)\}$를 $\{1, 2, 3\}$에서 $\{p, q, r\}$로의 함수로 보고, $g : \{p, q, r\} \to \{0, 1\}$를 $g(p) = 0$, $g(q) = 1$, $g(r) = 1$로 정할 때 $(g \circ f)^{-1}(\{1\})$을 두 가지 방법으로 구하라.]
직접 구하면 $(g \circ f)(1) = g(p) = 0$, $(g \circ f)(2) = g(p) = 0$, $(g \circ f)(3) = g(q) = 1$이므로 $(g \circ f)^{-1}(\{1\}) = \{3\}$입니다. (4)를 쓰면 $g^{-1}(\{1\}) = \{q, r\}$이고 $f^{-1}(\{q, r\}) = \{3\}$이므로 같은 답이 나옵니다.
:::
