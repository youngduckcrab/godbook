---
title: 원소의 위수와 군의 위수
title_en: The Order of an Element Divides the Order of the Group
aliases: [원소의 위수는 군의 위수를 나눈다, 소수 위수의 군, 위수가 소수인 군, order of an element divides the order of the group, group of prime order]
kind: theorem
field: group-theory
msc: ["20A05", "20D99"]
level: undergrad
summary: 유한군 G의 모든 원소 a에 대해 ord(a)는 |G|를 나누고 a의 |G|제곱은 항등원이다. |G|가 소수이면 G는 순환군이고 부분군은 {e}와 G뿐이며, 원소가 둘 이상이고 부분군이 {e}와 G뿐인 군은 원소의 개수가 소수인 유한군이다. 정수론의 오일러 정리를 군 U(n)에서 다시 얻는다.
requires: [set, subset, function, finite-set, greatest-common-divisor, number-of-elements-is-unique, subset-of-finite-set, even-and-odd, prime-number, well-ordering-principle, divisibility, division-theorem, congruence-modulo-n, equivalence-classes-equal-iff-related, integers-modulo-n, euler-phi-function, euler-theorem, group, subgroup, power-in-a-group, laws-of-exponents, cyclic-subgroup, group-of-units-modulo-n, order-of-an-element, order-of-cyclic-subgroup, lagrange-theorem]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 6.2절 Corollary 6.11, Corollary 6.12 p.76. 6.3절 Theorem 6.17, Theorem 6.18 p.77, Theorem 6.19 p.78. 4.5절 연습문제 26, 37 p.57–58. 13.1절 Lemma 13.6 의 증명 p.160
    checked: original
    note: "(1)은 출처 Corollary 6.11(p.76)이고, 출처는 증명을 적지 않는다. 이 항목은 원소의 위수가 그 원소가 생성하는 순환 부분군의 원소의 개수와 같다는 것(3단원)과 라그랑주 정리로 증명한다. (2)는 출처에 명제로 없다(검색어 'g|G| = e' 의 꼴 0건, 'a|G| =' 0건, '|G| = e' 1건(13장의 다른 계산)). 출처는 Theorem 6.18 의 증명(p.77)에서 'U(n) 의 위수가 φ(n) 이므로 U(n) 의 모든 a 에 대해 a^{φ(n)} = 1'이라고 쓰며 이 사실을 말없이 쓴다. (3)은 출처 Corollary 6.12(p.76) '|G| = p 가 소수이면 G 는 순환군이고 g ≠ e 인 모든 g 가 생성원이다'이고 증명도 같다(위수가 p 를 나누고 1 보다 크다). '부분군은 {e} 와 G 뿐'은 출처 Corollary 6.12 에 없고, 출처 4.5절 연습문제 26(p.57)이 ℤ_p 에 대해 같은 것을 묻는다. (4)는 출처 4.5절 연습문제 37(p.58, '진부분군이고 자명하지 않은 부분군이 없으면 G 는 순환군이다')의 결론에 '유한군이고 원소의 개수가 소수'를 더한 것이다. 출처 13.1절 Lemma 13.6 의 증명(p.160)은 유한 아벨군에 대해 '자명하지 않은 진부분군이 없으면 G = ⟨a⟩ 이고 연습문제 4.5.39 에 의해 G 의 위수는 소수'라고 쓴다. 증명(무한 위수이면 ⟨a²⟩ 이 진부분군, 유한 위수이면 약수 d 에 대한 ⟨a^d⟩)은 이 사이트의 것이다. (5)는 출처 Theorem 6.18(오일러 정리, p.77)과 같은 진술이고 증명의 발상도 같다. 출처는 a ∈ U(n) 의 거듭제곱과 정수의 거듭제곱을 같은 글자로 쓰고, 이 항목은 둘이 같다는 것을 군의 거듭제곱 항목의 (8)로 잇는다. 이 사이트에서는 정수론 입문의 오일러 정리 항목이 같은 진술을 군 없이 증명했다. 출처 Theorem 6.19(페르마의 소정리, p.78)는 증명 없이 6.18 의 특수한 경우라고 하는데, 이 항목은 페르마의 소정리를 따로 진술하지 않는다. 예시 'U(5) 의 원소의 위수'는 출처 9.4절 연습문제 32(p.123, 'U(5) ≅ ℤ₄ 를 보여라')와 같은 결론(U(5) 는 원소가 넷인 순환군)에 이르고. 확인 질문 '원소가 12 개인 군에서 위수 5'는 출처 6.5절 연습문제 1(p.78, 위수 5 와 7 인 원소가 있으면 |G| ≥ 35)과 같은 발상이고, 출처 Remark 6.14(p.76)의 '위수 12 인 군의 부분군의 위수는 1, 2, 3, 4, 6 가운데 하나'와도 같은 발상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 올린 뒤 표본 독립 검토 1회(수학 오류 0건)의 지적을 고쳤다. 경계 경우에서 거짓이 되는 문장과 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이라 하자. 거듭제곱 $a^n$은 [[power-in-a-group|군의 거듭제곱]]의 것이고, 원소의 위수와 $\operatorname{ord}(a)$는 [[order-of-an-element|원소의 위수]]의 것이며, $\langle a \rangle$와 생성원과 순환군은 [[cyclic-subgroup|순환 부분군]]의 것이다. 지표 $[G : H]$는 [[lagrange-theorem|라그랑주 정리]]의 것이고, 소수는 [[prime-number|소수]]의 정의이다.

1. (위수는 군의 위수를 나눈다) $G$가 유한군이면 모든 $a \in G$의 위수는 유한하고 $\operatorname{ord}(a) \mid |G|$이다. 더 자세히, $|G| = [G : \langle a \rangle] \cdot \operatorname{ord}(a)$이다.
2. ($|G|$제곱) $G$가 유한군이면 모든 $a \in G$에서 $a^{|G|} = e$이다.
3. (원소의 개수가 소수인 군) $G$가 유한군이고 $|G|$가 소수이면, $e$가 아닌 $G$의 모든 원소 $a$는 $\operatorname{ord}(a) = |G|$를 만족하고 $G$의 생성원이다. 따라서 $G$는 순환군이다. 또 $G$의 부분군은 $\{e\}$와 $G$뿐이다.
4. (부분군이 둘뿐인 군) $G$에 서로 다른 두 원소가 있고 $G$의 부분군이 $\{e\}$와 $G$뿐이면, $G$는 유한군이고 $|G|$는 소수이다.
5. (오일러 정리와의 관계) $n$이 자연수이고 $x$가 $\gcd(x, n) = 1$인 정수이면, [[group-of-units-modulo-n|법 n의 단원군]] $U(n)$에서 $[x]^{\varphi(n)} = [1]$이고, 따라서 $x^{\varphi(n)} \equiv 1 \pmod n$이다. 여기서 $\varphi(n)$은 [[euler-phi-function|오일러 피 함수]]이고 자연수이며, $x^{\varphi(n)}$은 [[euler-theorem|오일러 정리]]의 진술과 같은 정수의 거듭제곱이다. 곧 이것은 오일러 정리와 같은 진술이고, (2)를 군 $U(n)$에 써서 다시 얻은 것이다.
:::

:::english
Let $G$ be a group with identity $e$. Powers $a^n$ are those of the entry on powers in a group, the order of an element and $\operatorname{ord}(a)$ are those of the entry on the order of an element, and $\langle a \rangle$, generators and cyclic groups are those of the entry on cyclic subgroups. The index $[G : H]$ is that of the entry on Lagrange's theorem, and primes are as defined in the entry on prime numbers.

1. (The order of an element divides the order of the group) If $G$ is a finite group, then every $a \in G$ has finite order and $\operatorname{ord}(a) \mid |G|$. More precisely, $|G| = [G : \langle a \rangle] \cdot \operatorname{ord}(a)$.
2. (The $|G|$-th power) If $G$ is a finite group, then $a^{|G|} = e$ for every $a \in G$.
3. (Groups whose number of elements is prime) If $G$ is a finite group and $|G|$ is prime, then every element $a$ of $G$ other than $e$ satisfies $\operatorname{ord}(a) = |G|$ and is a generator of $G$. Hence $G$ is cyclic. Moreover, the only subgroups of $G$ are $\{e\}$ and $G$.
4. (Groups with only two subgroups) If $G$ has two distinct elements and the only subgroups of $G$ are $\{e\}$ and $G$, then $G$ is a finite group and $|G|$ is prime.
5. (Relation to Euler's theorem) If $n$ is a natural number and $x$ is an integer with $\gcd(x, n) = 1$, then $[x]^{\varphi(n)} = [1]$ in the group of units $U(n)$, and hence $x^{\varphi(n)} \equiv 1 \pmod n$. Here $\varphi(n)$ is Euler's phi function, which is a natural number, and $x^{\varphi(n)}$ is the same integer power as in the statement of Euler's theorem. Thus this is the same statement as Euler's theorem, obtained again by applying (2) to the group $U(n)$.
:::

## 직관

원소 $a$ 하나가 생성하는 순환 부분군 $\langle a \rangle$는 원소를 정확히 $\operatorname{ord}(a)$개 갖습니다([[order-of-cyclic-subgroup|순환 부분군의 크기]]). 이것도 부분군이므로 [[lagrange-theorem|라그랑주 정리]]에 의해 그 원소의 개수가 $|G|$를 나눕니다. 그래서 원소의 위수를 구할 때 $|G|$의 양의 약수만 확인하면 됩니다. 예를 들어 원소가 $4$개인 군에서 $a^2 \ne e$이면 위수는 $4$입니다(아래 예시).

$a^{|G|} = e$는 위수가 $|G|$를 나눈다는 것을 거듭제곱으로 옮긴 것입니다. 정수론 입문의 [[euler-theorem|오일러 정리]]는 $n$과 서로소인 나머지들을 모두 곱해 비교하는 방법으로 증명했습니다. 같은 진술이 군 $U(n)$의 원소의 개수가 $\varphi(n)$이라는 것과 (2)에서 바로 나옵니다.

원소의 개수가 소수 $p$이면 $e$가 아닌 원소의 위수는 $1$이 아닌 $p$의 양의 약수, 곧 $p$뿐이어서 그 원소 하나가 군 전체를 생성합니다. 원소가 둘 이상인 군에서 부분군이 $\{e\}$와 $G$뿐인 것은 바로 이런 군입니다((3), (4)).

## 증명

:::idea
(1)은 $\langle a \rangle$에 [[lagrange-theorem|라그랑주 정리]]를 쓰고, $\langle a \rangle$의 원소의 개수가 $\operatorname{ord}(a)$라는 것을 쓴다. (3)은 위수가 $1$이 아닌 $|G|$의 양의 약수라는 것으로, (4)는 $e$가 아닌 원소 $a$에 대해 $\langle a \rangle = G$에서 시작해 $\langle a^2 \rangle$과 $\langle a^d \rangle$을 본다. (5)는 (2)를 $U(n)$에 쓰고 군의 거듭제곱을 정수의 거듭제곱으로 바꾼다.
:::

:::hint
(4)에서 $a$의 위수가 무한하면 $a \notin \langle a^2 \rangle$입니다. $a = a^{2k}$이면 $1 = 2k$가 되기 때문입니다.
:::

:::hint
(4)에서 $n = \operatorname{ord}(a)$의 양의 약수 $d$에 대해 $\langle a^d \rangle$는 $\{e\}$이거나 $G$입니다. 앞의 경우 $n \mid d$, 뒤의 경우 $a = a^{dk}$에서 $d \mid 1$이 나옵니다.
:::

:::proof
아래에서 "위수의 ($k$)"는 [[order-of-an-element|원소의 위수]]의 ($k$), "크기의 ($k$)"는 [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 ($k$), "라그랑주의 ($k$)"는 [[lagrange-theorem|라그랑주 정리]]의 ($k$)이다.

**(1)** $G$가 유한군이고 $a \in G$라 하자. 위수의 (6)에 의해 $a$의 위수는 유한하고, 크기의 (1)에 의해 $\langle a \rangle$는 유한집합이며 $|\langle a \rangle| = \operatorname{ord}(a)$이다. [[cyclic-subgroup|순환 부분군]]의 (1)에 의해 $\langle a \rangle$는 $G$의 부분군이므로, 라그랑주의 (1)에 의해 $|G| = [G : \langle a \rangle] \cdot |\langle a \rangle| = [G : \langle a \rangle] \cdot \operatorname{ord}(a)$이고 $\operatorname{ord}(a) \mid |G|$이다.

**(2)** (1)에 의해 $\operatorname{ord}(a) \mid |G|$이므로, 위수의 (2)를 $k = |G|$에 쓰면 $a^{|G|} = e$이다.

**(3)** $|G| = p$가 소수라 하자. $a \in G$이고 $a \ne e$라 하자. (1)에 의해 $\operatorname{ord}(a)$는 $p$를 나누는 자연수, 곧 $p$의 양의 약수이므로 소수의 정의에 의해 $\operatorname{ord}(a) = 1$이거나 $\operatorname{ord}(a) = p$이다. 위수의 (1)에 의해 $\operatorname{ord}(a) = 1$이면 $a = e$이므로, $\operatorname{ord}(a) = p = |G|$이다. 크기의 (4)에 의해 $a$는 $G$의 생성원이다. 소수는 $1$이 아닌 자연수이므로 (Z5)와 (Z1)에 의해 $2$ 이상이고, 따라서 $G \ne \{e\}$이고(원소의 개수가 $1$인 집합 $\{e\}$와 같다면 [[number-of-elements-is-unique|원소의 개수]]의 유일성에 의해 $p = 1$), $e$가 아닌 원소가 있다. 따라서 $G$는 순환군이다.

$H$가 $G$의 부분군이라 하자. 라그랑주의 (1)에 의해 $|H|$는 $p$의 양의 약수이므로 $|H| = 1$이거나 $|H| = p$이다. $|H| = 1$이면, [[subgroup|부분군]]의 (1)에 의해 $\{e\} \subseteq H$이고 $|\{e\}| = 1 = |H|$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 2에 의해 $H = \{e\}$이다. $|H| = p = |G|$이면 $H \subseteq G$와 같은 정리의 2에 의해 $H = G$이다.

**(4)** $G$에 서로 다른 두 원소가 있으므로 $G \ne \{e\}$이고, $a \ne e$인 $a \in G$가 있다. 이런 $a$를 하나 잡는다. 순환 부분군의 (1)에 의해 $\langle a \rangle$는 $a$를 포함하는 부분군이고 $a \ne e$이므로 $\langle a \rangle \ne \{e\}$이다. 가정에 의해 $\langle a \rangle = G$이다.

*$a$의 위수는 유한하다.* 위수가 무한하다고 하자. 순환 부분군의 (1)에 의해 $\langle a^2 \rangle$은 $G$의 부분군이다. [[laws-of-exponents|지수법칙]]의 (2)에 의해 $(a^2)^k = a^{2k}$이므로, $a \in \langle a^2 \rangle$이면 $a^1 = a^{2k}$인 정수 $k$가 있고 위수의 (4)에 의해 $1 = 2k$가 되어 $1$이 짝수가 된다. 이는 [[even-and-odd|짝수와 홀수]]에서 받아들인, 짝수이면서 홀수인 정수는 없다는 사실에 어긋난다($1 = 2 \cdot 0 + 1$은 홀수). 따라서 $a \notin \langle a^2 \rangle$이고 $\langle a^2 \rangle \ne G$이다. 또 위수의 (4)에 의해 $a^2 = e = a^0$이면 $2 = 0$이 되므로 $a^2 \ne e$이고, $a^2 \in \langle a^2 \rangle$이므로 $\langle a^2 \rangle \ne \{e\}$이다. 이는 가정에 어긋나므로 $a$의 위수는 유한하다.

*$G$는 유한군이다.* $n = \operatorname{ord}(a)$라 하면 크기의 (1)에 의해 $G = \langle a \rangle$는 유한집합이고 $|G| = n$이다. 위수의 (1)에 의해 $a \ne e$이므로 $n \ne 1$이고, $n \ge 1$이므로 (Z5)와 (Z1)에 의해 $n \ge 2$이다.

*$n$은 소수이다.* $d$가 $n$의 양의 약수라 하자. $\langle a^d \rangle$은 $G$의 부분군이므로 $\{e\}$이거나 $G$이다.
- $\langle a^d \rangle = \{e\}$이면 $a^d = e$이고, 위수의 (2)에 의해 $n \mid d$이다. $d$는 자연수이므로 [[prime-number|소수]]의 진술에 의해 $n \le d$이다. 또 $d$는 $n$의 양의 약수이므로 같은 진술에 의해 $d \le n$이다. [[well-ordering-principle|정렬 원리]]의 (L2)에 의해 $d = n$이다.
- $\langle a^d \rangle = G$이면 $a \in \langle a^d \rangle$이므로 지수법칙의 (2)에 의해 $a^1 = a^{dk}$인 정수 $k$가 있다. 위수의 (3)에 의해 $dk \equiv 1 \pmod n$, 곧 $dk - 1 = nt$인 정수 $t$가 있다. $n = dc$인 정수 $c$가 있으므로 $1 = dk - dct = d(k - ct)$이고, $d$는 $1$의 양의 약수이다. 소수의 진술에 의해 $d \le 1$이고 $d \ge 1$이므로 (L2)에 의해 $d = 1$이다.

따라서 $n$의 양의 약수는 $1$과 $n$뿐이고 $n \ge 2$이므로 $1 \ne n$이어서, 소수의 정의에 의해 $|G| = n$은 소수이다.

**(5)** $n$이 자연수이고 $\gcd(x, n) = 1$이라 하자. [[group-of-units-modulo-n|법 n의 단원군]]의 (1)에 의해 $[x] \in U(n)$이고, 같은 항목의 (5)에 의해 $U(n)$은 유한군이며 $|U(n)| = \varphi(n)$이다. (2)를 군 $U(n)$과 원소 $[x]$에 쓰면 $[x]^{\varphi(n)}$은 $U(n)$의 항등원이고, 같은 항목의 (2)에 의해 그 항등원은 $[1]$이다. [[euler-phi-function|오일러 피 함수]]의 2에 의해 $\varphi(n)$은 자연수이므로 [[power-in-a-group|군의 거듭제곱]]의 (8)에 의해 $[x]^{\varphi(n)} = [x^{\varphi(n)}]$이고, 여기서 $x^{\varphi(n)}$은 [[euler-theorem|오일러 정리]]의 진술과 같은 정수의 거듭제곱(합동의 계산에서 유한 곱으로 정의한 것)이다. 따라서 $\mathbb{Z}_n$에서 $[x^{\varphi(n)}] = [1]$이고, [[integers-modulo-n|법 n의 정수]]의 동치류와 [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]에 의해 $x^{\varphi(n)} \equiv 1 \pmod n$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$U(5)$의 원소의 위수]
$5$는 소수입니다. $5$의 양의 약수 $d$는 $1 \le d \le 5$이고([[prime-number|소수]]의 진술), $5 = 2 \cdot 2 + 1 = 3 \cdot 1 + 2 = 4 \cdot 1 + 1$에서 [[division-theorem|나눗셈 정리]]의 나머지의 유일성에 의해 $2$, $3$, $4$는 $5$를 나누지 않기 때문입니다. [[euler-phi-function|오일러 피 함수]]의 4에 의해 $\varphi(5) = 4$이므로 [[group-of-units-modulo-n|법 n의 단원군]]의 (5)에 의해 $|U(5)| = 4$입니다. $5$의 양의 약수는 $1$과 $5$뿐이고 $5$는 $2$와 $4$의 양의 약수가 아니므로(양의 약수는 그 수 이하), $\gcd(2, 5) = \gcd(4, 5) = 1$이고 $[2], [4] \in U(5)$입니다([[greatest-common-divisor|최대공약수]]). 같은 방법으로 $4$의 양의 약수는 $1$, $2$, $4$뿐입니다($4 = 3 \cdot 1 + 1$).

(1)에 의해 $U(5)$의 원소의 위수는 $1$, $2$, $4$ 가운데 하나입니다. [[power-in-a-group|군의 거듭제곱]]의 (8)에 의해 $[2]^1 = [2]$, $[2]^2 = [4]$이고, $0 \le 2, 4 \le 4$이므로 [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 둘 다 $[1]$이 아닙니다. 따라서 $\operatorname{ord}([2])$는 $1$도 $2$도 아니고 $4$입니다. $[2]^3$을 계산하지 않고도 위수를 알았습니다. [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (4)에 의해 $[2]$는 생성원이고 $U(5)$는 순환군입니다. 한편 $[4]^2 = [16] = [1]$이고 $[4] \ne [1]$이므로 $\operatorname{ord}([4]) = 2$입니다.
:::

## 확인 질문

:::check[원소가 $12$개인 군 $G$에 $a^5 = e$이고 $a \ne e$인 원소 $a$가 있을 수 있는가?]
없습니다. [[order-of-an-element|원소의 위수]]의 (2)에 의해 $\operatorname{ord}(a) \mid 5$이고, 위 예시에서 본 대로 $5$의 양의 약수는 $1$과 $5$뿐이며, $a \ne e$이므로 같은 항목의 (1)에 의해 $\operatorname{ord}(a) = 5$입니다. (1)에 의해 $5 \mid 12$이어야 하는데, $12 = 5 \cdot 2 + 2$이므로 나눗셈 정리의 나머지의 유일성에 의해 $5$는 $12$를 나누지 않습니다.
:::

:::check[원소가 $4$개인 군 $G$의 부분군이 $\{e\}$와 $G$뿐일 수 있는가?]
없습니다. $G$는 원소를 $4$개 가지므로 전단사 $\{1, 2, 3, 4\} \to G$가 있고 $1$과 $2$의 값이 서로 다른 두 원소입니다. 부분군이 $\{e\}$와 $G$뿐이라면 (4)에 의해 $4$가 소수여야 하는데, $4 = 2 \cdot 2$이므로 $2$는 $1$도 $4$도 아닌 $4$의 양의 약수이고 $4$는 소수가 아닙니다.

:::
