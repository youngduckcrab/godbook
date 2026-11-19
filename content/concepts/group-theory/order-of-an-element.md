---
title: 원소의 위수
title_en: Order of an Element
aliases: [위수, 위수가 유한하다, 위수가 무한하다, order of an element, finite order, infinite order]
kind: definition
field: group-theory
msc: ["20A05"]
level: undergrad
summary: 군의 원소 a의 거듭제곱이 항등원이 되는 자연수가 있으면 a의 위수가 유한하다고 하고, 그런 자연수 가운데 가장 작은 것을 ord(a)라 쓴다. 위수가 유한하면 aᵏ = e인 것은 정확히 ord(a)가 k를 나눌 때이고, 위수가 무한하면 지수가 다른 거듭제곱은 모두 다르며, 유한군의 원소는 위수가 유한하다.
requires: [set, function, recursion-theorem, finite-set, pigeonhole-principle, number-of-elements-is-unique, even-and-odd, prime-number, well-ordering-principle, division-theorem, divisibility, congruence-modulo-n, integer-cancellation, equivalence-classes-equal-iff-related, group, group-basic-properties, power-in-a-group, laws-of-exponents, number-groups, integers-modulo-n, group-of-units-modulo-n, subgroup, subgroup-examples]
sources:
  - ref: judson-abstract-algebra
    loc: 4.1절 Cyclic Subgroups, 원소의 위수의 정의(번호 없음) p.46–47, Proposition 4.12 p.48
    checked: original
    note: "정의는 출처 p.46–47 의 것이다. 출처는 aⁿ = e 인 가장 작은 양의 정수를 a 의 위수라 하고 |a| = n 으로 쓰며, 그런 정수가 없으면 위수가 무한하다고 하고 |a| = ∞ 로 쓴다. 이 사이트는 원소의 위수를 ord(a) 로 쓰고(군의 원소의 개수 |G| 와 겹치지 않게), 위수가 무한할 때는 기호를 쓰지 않는다. 가장 작은 자연수가 있고 하나뿐이라는 것은 이 항목이 정렬 원리의 (2)와 (1)로 밝힌다. (2)는 출처 Proposition 4.12(p.48)와 같은 내용을 위수가 유한한 임의의 원소에 대해 진술한 것이다. 출처는 그것을 '위수 n 인 순환군의 생성원 a'에 대해 진술하고, 나눗셈 정리로 같은 방법으로 증명한다. 출처 6장 연습문제 14(p.79, 'gⁿ = e 이면 g 의 위수는 n 을 나눈다')가 (2)의 한 방향이고, 출처 Example 11.9(p.135)가 '위수가 n 이면 n 에 gⁿ 을 대응시키는 준동형의 핵은 nℤ'라고 적는 것이 (2)를 핵의 말로 쓴 것이다. (1)의 앞 방향은 출처 부록의 연습문제 4.5.31 의 힌트(p.322, '항등원의 위수는 유한하다')와 13장의 증명(p.160, '항등원의 위수는 p⁰ = 1')에 나온다. 역방향(위수가 1 이면 항등원)은 출처에서 찾지 못했다(검색어 'order 1' 1건은 9장 연습문제 55 의 (a), 'order one' 0건, 'element of order 1' 0건, 'has order' 18건에 이 진술이 없다). (3), (8)과 (4)의 첫 문장은 출처에 명제로 없다. 출처 Theorem 9.7 의 증명(p.116)이 aᵐ = aⁿ 에서 a^{m−n} = e 를 얻어 '위수가 무한하다'에 모순을 끌어내는데, (4)와 (8)은 같은 논법이다(검색어 'am = an' 1건과 'am−n|ak−l' 1건은 그 증명, 'ak = al', 'ai = aj' 0건). (4)의 끝 문장은 출처 Example 11.9(p.135)의 '위수가 무한하면 그 핵은 {0}'과 같은 내용이다. (9)는 출처에 명제로 없다(검색어 'order of (a|an element|the element) .{0,30}(subgroup|regarded)', 'same order in' 0건, 'same order' 2건은 동형과 갈루아 군의 원소의 개수). (5)는 출처 4장 연습문제 23 의 (a)(p.57)이다. 출처 13장의 증명(p.160–161)도 '위수가 pʳ 인 g 의 역원은 위수가 pʳ'이라고 쓴다. (6)은 출처에서 찾지 못했다(검색어 'finite order' 21건, 'every element.{0,30}finite' 3건, 'pigeon' 0건에 이 진술이 없다. 출처 Corollary 6.11(p.76)은 유한군의 원소의 위수를 말하면서 이것을 전제한다). (7)의 '(ℤ, +) 에서 0 이 아닌 정수의 위수는 무한하다'는 출처 4장 연습문제 10 의 (a)(p.56, 'ℤ 에서 위수가 유한한 원소를 모두 찾아라')에 답하는 것이고, 출처 부록의 힌트(p.321)는 답을 0 이라 적는다. ℤ_m 에서 [1] 의 위수가 m 이라는 것은 출처에서 찾지 못했다(검색어 'order of 1', '1 has order' 의 건들은 16장 Lemma 16.18 의 환의 표수이고, 'order of 1 ∈', '1 ∈ Zn', 'order n in Zn' 은 0건이다). 예시 'U(15) 에서 원소의 위수'는 출처에서 찾지 못했다(검색어 'U (15)' 0건, 'mod 15' 3건은 5장·16장의 합동식과 6장 연습문제 7 의 힌트 4^φ(15) ≡ 1, 'Z15' 2건은 9장 읽기 질문과 22장). 출처 Example 4.6(p.47)이 U(9) 에서 2 의 거듭제곱을 늘어놓고, 4.4절 읽기 질문 1(p.55)이 U(20) 에서 3 의 위수를 묻는데, 같은 종류의 계산이다. 반례 'ℤ₈ 에서 8 · [2] = [0] 이지만 위수는 4'는 출처에서 찾지 못했다(검색어 'Z8' 10건은 곱셈표, 덧셈과 역원의 계산, 생성원, 동형, 직접곱, 자기동형의 문제이고, 'order of 2' 1건은 Example 4.5 의 ℤ₆, '2 ∈ Z8' 0건이다). 출처 Example 4.5(p.47, ℤ₆ 에서 2 의 위수는 3)와 4장 연습문제 5(ℤ₁₈ 의 모든 원소의 위수)가 같은 종류의 계산이다. 반례 '(ℤ, +) 에는 위수가 무한한 원소가 있다'는 위의 연습문제 10 의 (a)와 같은 내용이다. 확인 질문 'U(n) 에서 [−1] 의 위수'는 출처에서 찾지 못했다(검색어 'n − 1 .{0,30}U \\(n\\)', 'U \\(n\\).{0,40}n − 1', '−1 ∈ U', '−1 has order', 'order of −1' 0건). 확인 질문 'ord(a) = 6 일 때 a⁻⁸'은 출처에서 찾지 못했다(검색어 'a−8', 'a6 = e' 0건, 'order 6' 의 건들은 위수 6 인 부분군과 군에 관한 것). 출처 4장 연습문제 11(p.56, 'a²⁴ = e 이면 a 의 위수는 무엇일 수 있는가')이 (2)를 쓰는 다른 문제이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 경계 경우에서 거짓이 되는 문장과 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이며 $a \in G$라 하자. 거듭제곱 $a^n$은 [[power-in-a-group|군의 거듭제곱]]의 것이고, $\mathbb{N}$은 양의 정수의 집합이다.

$a$의 **위수가 유한하다**(has finite order)는 것은 정확히 $a^n = e$인 자연수 $n$이 있을 때이다. 이때 $N_a = \{n \in \mathbb{N} : a^n = e\}$는 $\mathbb{N}$의 공집합이 아닌 부분집합이므로 [[well-ordering-principle|정렬 원리]]의 (2)에 의해 최소 원소를 갖고, 정렬 원리의 (1)에 의해 그 최소 원소는 하나뿐이다. 이 자연수를 $a$의 **위수**(order)라 하고 $\operatorname{ord}(a)$로 쓴다. 곧 $\operatorname{ord}(a)$는 자연수이고, $a^{\operatorname{ord}(a)} = e$이며, $a^n = e$인 모든 자연수 $n$에 대하여 $\operatorname{ord}(a) \le n$이다. 거꾸로 자연수 $m$이 $a^m = e$를 만족하고 $a^n = e$인 모든 자연수 $n$에 대하여 $m \le n$이면, $a$의 위수는 유한하고 $\operatorname{ord}(a) = m$이다.

$a$의 위수가 유한하지 않으면, 곧 $a^n = e$인 자연수 $n$이 없으면 $a$의 **위수가 무한하다**(has infinite order)고 한다. 이때는 기호 $\operatorname{ord}(a)$를 쓰지 않는다.

원소의 위수 $\operatorname{ord}(a)$는 [[group|군]]에서 정한 군의 위수, 곧 유한군 $G$의 원소의 개수 $|G|$와 다른 개념이다.

다음이 성립한다. 아래에서 $k$, $l$은 정수이다.

1. (항등원) $e$의 위수는 유한하고 $\operatorname{ord}(e) = 1$이다. 거꾸로 $a$의 위수가 유한하고 $\operatorname{ord}(a) = 1$이면 $a = e$이다.
2. (거듭제곱이 항등원이 될 조건) $a$의 위수가 유한하고 $n = \operatorname{ord}(a)$이면, $a^k = e$인 것은 정확히 $n \mid k$일 때이다.
3. (같은 거듭제곱, 위수가 유한한 경우) $a$의 위수가 유한하고 $n = \operatorname{ord}(a)$이면, $a^k = a^l$인 것은 정확히 $k \equiv l \pmod n$일 때이다.
4. (같은 거듭제곱, 위수가 무한한 경우) $a$의 위수가 무한하면, $a^k = a^l$인 것은 $k = l$일 때뿐이다. 특히 $a^k = e$인 정수 $k$는 $0$뿐이다.
5. (역원) $a$의 위수가 유한한 것은 정확히 $a^{-1}$의 위수가 유한할 때이고, 그때 $\operatorname{ord}(a^{-1}) = \operatorname{ord}(a)$이다. 따라서 $a$의 위수가 무한하면 $a^{-1}$의 위수도 무한하다.
6. (유한군) $G$가 유한군이면 $G$의 모든 원소의 위수는 유한하다.
7. (덧셈 표기) $G$가 [[number-groups|수로 이루어진 군]]의 덧셈 표기로 쓰는 아벨군이면, 위의 $a^n = e$는 $n \cdot a = 0$이다. 곧 $a$의 위수가 유한한 것은 정확히 $n \cdot a = 0$인 자연수 $n$이 있을 때이고, 그때 $\operatorname{ord}(a)$는 그런 자연수 가운데 가장 작은 것이다. $(\mathbb{Z}, +)$에서 $\operatorname{ord}(0) = 1$이고 $0$이 아닌 정수의 위수는 무한하다. $m$이 자연수이면 $(\mathbb{Z}_m, +)$에서 $\operatorname{ord}([1]) = m$이다.
8. (같은 거듭제곱의 판정) 위수가 유한하든 무한하든, $a^k = a^l$인 것은 정확히 $a^{k-l} = e$일 때이다.
9. (부분군에서 따져도 같다) $H$가 $G$의 [[subgroup|부분군]]이고 $a \in H$이면, 군 $H$에서 $a$의 위수가 유한한 것은 정확히 $G$에서 $a$의 위수가 유한할 때이고, 그때 $H$에서 정한 $\operatorname{ord}(a)$와 $G$에서 정한 $\operatorname{ord}(a)$는 같다.
:::

:::english
Let $G$ be a group with identity $e$, and let $a \in G$. Powers $a^n$ are those of the entry on powers in a group, and $\mathbb{N}$ is the set of positive integers.

We say that $a$ **has finite order** exactly when $a^n = e$ for some natural number $n$. In that case $N_a = \{n \in \mathbb{N} : a^n = e\}$ is a nonempty subset of $\mathbb{N}$, so by (2) of the well-ordering principle it has a least element, and by (1) of the well-ordering principle this least element is unique. This natural number is called the **order** of $a$ and is written $\operatorname{ord}(a)$. Thus $\operatorname{ord}(a)$ is a natural number, $a^{\operatorname{ord}(a)} = e$, and $\operatorname{ord}(a) \le n$ for every natural number $n$ with $a^n = e$. Conversely, if a natural number $m$ satisfies $a^m = e$ and $m \le n$ for every natural number $n$ with $a^n = e$, then $a$ has finite order and $\operatorname{ord}(a) = m$.

If $a$ does not have finite order, that is, if there is no natural number $n$ with $a^n = e$, we say that $a$ **has infinite order**. In that case the symbol $\operatorname{ord}(a)$ is not used.

The order $\operatorname{ord}(a)$ of an element is a different notion from the order of the group defined in the entry on groups, namely the number of elements $|G|$ of a finite group $G$.

The following hold. Below, $k$ and $l$ are integers.

1. (Identity) $e$ has finite order and $\operatorname{ord}(e) = 1$. Conversely, if $a$ has finite order and $\operatorname{ord}(a) = 1$, then $a = e$.
2. (When a power is the identity) If $a$ has finite order and $n = \operatorname{ord}(a)$, then $a^k = e$ exactly when $n \mid k$.
3. (Equal powers, finite order) If $a$ has finite order and $n = \operatorname{ord}(a)$, then $a^k = a^l$ exactly when $k \equiv l \pmod n$.
4. (Equal powers, infinite order) If $a$ has infinite order, then $a^k = a^l$ only when $k = l$. In particular, the only integer $k$ with $a^k = e$ is $0$.
5. (Inverse) $a$ has finite order exactly when $a^{-1}$ has finite order, and then $\operatorname{ord}(a^{-1}) = \operatorname{ord}(a)$. Hence if $a$ has infinite order, so does $a^{-1}$.
6. (Finite groups) If $G$ is a finite group, then every element of $G$ has finite order.
7. (Additive notation) If $G$ is an abelian group written in the additive notation of the entry on groups of numbers, then the condition $a^n = e$ above reads $n \cdot a = 0$. Thus $a$ has finite order exactly when $n \cdot a = 0$ for some natural number $n$, and then $\operatorname{ord}(a)$ is the least such natural number. In $(\mathbb{Z}, +)$, $\operatorname{ord}(0) = 1$ and every nonzero integer has infinite order. If $m$ is a natural number, then $\operatorname{ord}([1]) = m$ in $(\mathbb{Z}_m, +)$.
8. (Criterion for equal powers) Whether the order is finite or infinite, $a^k = a^l$ exactly when $a^{k-l} = e$.
9. (Computing in a subgroup) If $H$ is a subgroup of $G$ and $a \in H$, then $a$ has finite order in the group $H$ exactly when it has finite order in $G$, and then $\operatorname{ord}(a)$ computed in $H$ equals $\operatorname{ord}(a)$ computed in $G$.
:::

## 직관

$a$를 거듭 곱해 $a^1, a^2, a^3, \dots$을 차례로 만들어 갈 때, 항등원 $e$가 나오는 일이 있다면 처음으로 나오는 지수가 $a$의 위수입니다. 시계 바늘이 한 번에 정해진 칸만큼 움직인다고 해 봅시다. 바늘이 처음으로 출발한 자리로 돌아오는 데 걸리는 움직임의 횟수가 위수에 해당하고, "출발한 자리"가 $e$, "한 번 움직임"이 $a$를 한 번 더 곱하는 것입니다. 정의의 "가장 작은 자연수"가 "처음으로"에 해당합니다. 비유가 맞지 않는 곳도 있습니다. 시계 바늘은 언젠가 돌아오지만, 군에서는 끝내 $e$로 돌아오지 않는 원소도 있습니다. 그런 원소의 위수가 무한하다고 합니다.

한 번 $e$로 돌아오면 그다음부터는 같은 원소들이 같은 순서로 되풀이됩니다. 그래서 $a^k = e$인 것은 $k$가 위수의 배수일 때이고((2)), 두 거듭제곱이 같은 것은 지수의 차가 위수의 배수일 때입니다((3)). 위수가 무한하면 되풀이가 없으므로 지수가 다른 거듭제곱은 모두 다릅니다((4)).

유한군에서는 거듭제곱을 원소의 개수보다 하나 더 많이 만들면 그 가운데 같은 것이 둘 나옵니다([[pigeonhole-principle|비둘기집 원리]]). 같은 두 거듭제곱의 지수의 차만큼 거듭제곱하면 $e$가 되므로, 유한군의 원소는 위수가 유한합니다((6)).

"위수"라는 말은 군의 원소의 개수(유한군 $G$의 $|G|$)와 원소의 위수 $\operatorname{ord}(a)$ 두 가지를 가리킵니다. 이 사이트는 앞의 것을 "군의 위수", 뒤의 것을 "원소의 위수"나 "$a$의 위수"로 구별해 씁니다.

:::remark[정의와 (1)–(4), (8)의 증명]
아래에서 "거듭제곱의 ($k$)"는 [[power-in-a-group|군의 거듭제곱]]의 ($k$), "지수법칙의 ($k$)"는 [[laws-of-exponents|지수법칙]]의 ($k$)이다. (Z1)은 [[prime-number|소수]]의 진술에서, (Z5), (Z7)과 (L1)은 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들이거나 증명한 것이다.

**정의의 마지막 문장.** 자연수 $m$이 $a^m = e$를 만족하면 $m \in N_a$이므로 $a$의 위수는 유한하다. 또 $N_a$의 모든 원소 $n$에 대하여 $m \le n$이므로 $m$은 $N_a$의 최소 원소이고, 정렬 원리의 (1)에 의해 $m = \operatorname{ord}(a)$이다.

**(8)** 지수법칙의 (1)에 의해 $a^{k-l}a^l = a^{(k-l)+l} = a^k$이다. $a^k = a^l$이면 $a^{k-l}a^l = a^l = e\,a^l$이고, [[group-basic-properties|군의 기본 성질]]의 (7)(오른쪽 소거)에 의해 $a^{k-l} = e$이다. 거꾸로 $a^{k-l} = e$이면 $a^k = a^{k-l}a^l = e\,a^l = a^l$이다.

**(1)** 거듭제곱의 (1)에 의해 $e^1 = e$이다. (Z1)에 의해 모든 자연수 $n$은 $1 \le n$이다. 정의의 마지막 문장에 의해 $e$의 위수는 유한하고 $\operatorname{ord}(e) = 1$이다. 거꾸로 $\operatorname{ord}(a) = 1$이면 거듭제곱의 (1)에 의해 $a = a^1 = a^{\operatorname{ord}(a)} = e$이다.

**(2)** $n \mid k$이면 [[divisibility|나누어떨어짐]]의 정의에 의해 $k = nc$인 정수 $c$가 있고, 지수법칙의 (2)와 거듭제곱의 (3)에 의해 $a^k = a^{nc} = (a^n)^c = e^c = e$이다.

거꾸로 $a^k = e$라 하자. $n$은 양의 정수이므로 [[division-theorem|나눗셈 정리]]에 의해 $k = qn + r$, $0 \le r < n$인 정수 $q$, $r$이 있다. 지수법칙의 (1), (2)와 거듭제곱의 (3)에 의해
$$a^k = a^{qn + r} = a^{nq}a^r = (a^n)^q a^r = e^q a^r = e\,a^r = a^r$$
이므로 $a^r = e$이다. $r \ne 0$이라 하자. $0 \le r$이므로 $0 < r$이고, $r$은 자연수이며 $a^r = e$이므로 $r \in N_a$이다. 그러면 $n \le r$인데 이것은 $r < n$과 함께 성립할 수 없다((L1)). 따라서 $r = 0$이고 $k = nq$이므로 $n \mid k$이다.

**(3)** (8)에 의해 $a^k = a^l$인 것은 정확히 $a^{k-l} = e$일 때이고, (2)에 의해 이것은 정확히 $n \mid (k - l)$일 때이며, [[congruence-modulo-n|합동]]의 정의에 의해 이것은 정확히 $k \equiv l \pmod n$일 때이다.

**(4)** $a^k = a^l$이고 $k \ne l$이라 하자. (Z5)에 의해 $l < k$이거나 $k < l$이다. $l < k$이면 양변에서 $l$을 빼어((Z7)) $0 < k - l$이고, (8)에 의해 $a^{k-l} = e$이다. $k < l$이면 같은 방법으로 $0 < l - k$이고, $a^l = a^k$에 (8)을 쓰면 $a^{l-k} = e$이다. 어느 경우에도 $a^n = e$인 자연수 $n$이 있으므로 $a$의 위수는 유한하여 가정에 어긋난다. 따라서 $k = l$이다. 끝 문장: $a^k = e = a^0$(거듭제곱의 $0$제곱의 정의)이면 방금 보인 것에 의해 $k = 0$이다.
:::

:::remark[(5)–(7), (9)의 증명]
**(5)** 자연수 $n$에 대하여 지수법칙의 (3)에 의해 $(a^{-1})^n = (a^n)^{-1}$이다. $a^n = e$이면 [[group-basic-properties|군의 기본 성질]]의 (4)에 의해 $(a^n)^{-1} = e^{-1} = e$이다. 거꾸로 $(a^n)^{-1} = e$이면 기본 성질의 (5)와 (4)에 의해 $a^n = \bigl((a^n)^{-1}\bigr)^{-1} = e^{-1} = e$이다. 따라서 자연수 $n$에 대하여 $(a^{-1})^n = e$인 것은 정확히 $a^n = e$일 때이고, $N_{a^{-1}} = N_a$이다. 두 집합이 같으므로 하나가 공집합이 아니면 다른 하나도 공집합이 아니고, 최소 원소도 같다.

**(6)** $G$가 유한군이므로 [[group|군]]의 진술에 의해 $|G|$가 정해진다. $c = |G|$라 하자. [[number-of-elements-is-unique|원소의 개수]]의 뜻에 의해 $G$는 원소를 $c$개 갖는다. 거듭제곱의 (1)에 의해 각 $i \in \{1, \dots, c+1\}$마다 $a^i \in G$가 하나로 정해지므로, [[recursion-theorem|재귀 정리]]의 (1)에 의해 $i$에 $a^i$를 대응시키는 함수 $f : \{1, \dots, c+1\} \to G$가 있다. [[finite-set|유한집합]]의 (F2)에 의해 $\{1, \dots, c+1\}$은 원소를 $c + 1$개 갖고, 정렬 원리의 (L3)에 의해 $c + 1 > c$이다. [[pigeonhole-principle|비둘기집 원리]]의 (2)에 의해 $i \ne j$이고 $a^i = a^j$인 $i, j \in \{1, \dots, c+1\}$이 있다. (Z5)에 의해 $i < j$이거나 $j < i$이다. $i < j$이면 (Z7)에 의해 $j - i$는 자연수이고, $a^j = a^i$에 (8)을 쓰면 $a^{j-i} = e$이다. $j < i$이면 같은 방법으로 $i - j$는 자연수이고 $a^{i-j} = e$이다. 어느 경우에도 $a$의 위수는 유한하다.

**(7)** 덧셈 표기에서는 항등원 $e$를 $0$으로, $a^n$을 $n \cdot a$로 쓴다(거듭제곱의 (4)). 처음 두 문장은 정의를 이 표기로 옮긴 것이다.

$(\mathbb{Z}, +)$: [[number-groups|수로 이루어진 군]]의 (1)에 의해 항등원은 정수 $0$이므로 (1)에 의해 $\operatorname{ord}(0) = 1$이다. $a \ne 0$인 정수라 하자. 자연수 $n$에 대하여 $n \cdot a = 0$이라면 거듭제곱의 (6)에 의해 $na = 0$이고, [[integer-cancellation|정수 곱셈의 소거 법칙]]의 (1)에 의해 $n = 0$이거나 $a = 0$이다. $a \ne 0$이므로 $n = 0$인데, $n$은 양의 정수이므로 $0 < n$이고 (Z5)에 의해 $n = 0$과 함께 성립할 수 없다. 따라서 그런 자연수 $n$은 없고, $a$의 위수는 무한하다.

$(\mathbb{Z}_m, +)$: 수로 이루어진 군의 (4)에 의해 항등원은 $[0]$이다. 거듭제곱의 (7)에 의해 모든 정수 $n$에서 $n \cdot [1] = [n \cdot 1] = [n]$이다. [[integers-modulo-n|법 m의 정수]]의 동치류는 법 $m$ 합동의 동치류이므로, [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]과 합동의 정의에 의해 $[n] = [0]$인 것은 정확히 $m \mid (n - 0)$, 곧 $m \mid n$일 때이다. $m = m \cdot 1$이므로 $m \mid m$이고 $m \cdot [1] = [0]$이다. 자연수 $n$이 $n \cdot [1] = [0]$을 만족하면 $m \mid n$이므로 $m$은 자연수 $n$의 양의 약수이고, [[prime-number|소수]]의 진술에 의해 $m \le n$이다. 정의의 마지막 문장에 의해 $\operatorname{ord}([1]) = m$이다.

**(9)** [[subgroup|부분군]]의 (1)에 의해 군 $H$의 항등원은 $e$이고, 거듭제곱의 (5)에 의해 모든 자연수 $n$에서 군 $H$에서 정한 $a$의 $n$제곱은 $G$에서 정한 $a^n$과 같다. 따라서 두 군에서 정한 집합 $N_a = \{n \in \mathbb{N} : a^n = e\}$는 같은 집합이고, 하나가 공집합이 아니면 다른 하나도 공집합이 아니며 최소 원소도 같다.
:::

## 예시와 반례

:::example[$U(15)$에서 원소의 위수]
$\mathbb{Z}_{15}$에서 $[2][8] = [16] = [1]$이고 $[8][2] = [1]$이며($16 - 1 = 15 \cdot 1$), $[11][11] = [121] = [1]$입니다($121 - 1 = 15 \cdot 8$). [[group-of-units-modulo-n|법 n의 단원군]]의 (3)에 의해 $[2], [11] \in U(15)$이고, 단원군의 (2)에 의해 $U(15)$의 곱은 $\mathbb{Z}_{15}$의 곱셈이며 항등원은 $[1]$입니다.

[[power-in-a-group|군의 거듭제곱]]의 (1)에 의해 $[2]^1 = [2]$, $[2]^2 = [2][2] = [4]$, $[2]^3 = [2]^2[2] = [8]$, $[2]^4 = [2]^3[2] = [16] = [1]$입니다. [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $[1]$, $[2]$, $[4]$, $[8]$은 서로 다르므로 $[2]^1$, $[2]^2$, $[2]^3$은 $[1]$이 아닙니다. $[2]^n = [1]$인 자연수 $n$은 [[prime-number|소수]]의 (Z1)에 의해 $1$ 이상이고, $1$, $2$, $3$이 아니므로 $4$ 이상입니다(정렬 원리의 (Z5)와 (Z1)). 정의의 마지막 문장에 의해 $\operatorname{ord}([2]) = 4$입니다. 그러면 (3)에 의해 $[2]^{10} = [2]^2 = [4]$이고($10 - 2 = 4 \cdot 2$), $[2]^{-1} = [2]^3 = [8]$입니다($-1 - 3 = 4 \cdot (-1)$). 앞의 $[2][8] = [1]$과 맞습니다.

$[11]$은 $[11]^2 = [11][11] = [1]$이고 $[11] \ne [1]$입니다(법 n의 정수의 (1)). 이 항목의 (2)에 의해 $\operatorname{ord}([11])$은 $2$의 양의 약수이므로 소수의 진술에 의해 $1$ 이상 $2$ 이하, 곧 $1$이나 $2$이고, (1)에 의해 $1$이 아닙니다. 따라서 $\operatorname{ord}([11]) = 2$입니다.
:::

:::counterexample[$8 \cdot [2] = [0]$이어도 $\operatorname{ord}([2])$는 $8$이 아니다]
$(\mathbb{Z}_8, +)$에서 [[power-in-a-group|군의 거듭제곱]]의 (7)에 의해 $k \cdot [2] = [2k]$이므로 $8 \cdot [2] = [16] = [0]$입니다. 그러나 $\operatorname{ord}([2]) = 8$은 아닙니다. $4 \cdot [2] = [8] = [0]$입니다. $k = 1, 2, 3$이면 $2k$는 $2$, $4$, $6$이어서 [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $[2k] \ne [0]$이므로, $k \cdot [2] = [0]$인 자연수 $k$는 $4$ 이상입니다([[prime-number|소수]]의 (Z1)과 정렬 원리의 (Z5)). 정의의 마지막 문장에 의해 $\operatorname{ord}([2]) = 4$입니다. $a^n = e$에서 알 수 있는 것은 (2)의 $\operatorname{ord}(a) \mid n$까지이고, 여기서도 $4 \mid 8$입니다.
:::

:::counterexample[유한군이 아닌 $(\mathbb{Z}, +)$에는 위수가 무한한 원소가 있다]
(6)에서 "유한군"이라는 가정을 빼면 결론이 깨질 수 있습니다. [[number-groups|수로 이루어진 군]]의 (1)에 의해 $(\mathbb{Z}, +)$는 무한군이고, (7)에 의해 $1$의 위수는 무한합니다. 실제로 [[power-in-a-group|군의 거듭제곱]]의 (6)에 의해 자연수 $n$에 대하여 $n \cdot 1 = n \ne 0$입니다.
:::

## 확인 질문

:::check[자연수 $n$에 대하여 $U(n)$에서 $[-1]$의 위수는 무엇인가?]
$n = 1$이나 $n = 2$이면 $1$이고, $n \ge 3$이면 $2$입니다. [[subgroup-examples|부분군의 예와 교집합]]의 (8)에 의해 $[-1] \in U(n)$이고, $U(n)$의 곱은 $\mathbb{Z}_n$의 곱셈이므로 $[-1]^2 = [-1][-1] = [(-1)(-1)] = [1]$입니다. 따라서 이 항목의 (2)에 의해 $\operatorname{ord}([-1])$은 $2$의 양의 약수, 곧 $1$이나 $2$입니다([[prime-number|소수]]의 진술과 (Z1)). (1)에 의해 위수가 $1$인 것은 정확히 $[-1] = [1]$일 때이고, 이것은 [[congruence-modulo-n|합동]]의 정의에 의해 $n \mid (-1 - 1)$, 곧 $n \mid 2$일 때입니다. $n \mid 2$이면 $n$은 $2$의 양의 약수이므로 $n \le 2$이고, 거꾸로 $1 \mid 2$, $2 \mid 2$입니다. 그래서 $n \ge 3$이면 $[-1] \ne [1]$이고 위수는 $2$입니다.
:::

:::check[$\operatorname{ord}(a) = 6$이면 $a^{-8}$은 $a^0, a^1, \dots, a^5$ 가운데 어느 것인가?]
$a^4$입니다. $-8 - 4 = -12 = 6 \cdot (-2)$이므로 $-8 \equiv 4 \pmod 6$이고, (3)에 의해 $a^{-8} = a^4$입니다.
:::
