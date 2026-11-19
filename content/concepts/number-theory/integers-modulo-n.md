---
title: 법 n의 정수
title_en: Integers Modulo n
aliases: [ℤ_n, 잉여류의 집합, 법 n의 덧셈, 법 n의 곱셈, integers mod n, residue classes modulo n]
kind: definition
field: number-theory
msc: ["11A07"]
level: undergrad
summary: 자연수 n에 대하여 법 n 합동의 동치류 전체의 집합 ℤ_n은 원소를 n개 갖고, [a] + [b] = [a + b]와 [a][b] = [ab]로 덧셈과 곱셈이 정해지며, 두 연산은 결합법칙, 교환법칙, 분배법칙을 만족한다.
requires: [set, function, injective-surjective-bijective, finite-set, number-of-elements-is-unique, equivalence-classes-equal-iff-related, congruence-modulo-n, congruence-is-an-equivalence-relation, congruence-arithmetic, residues-modulo-n, divisibility, binary-operation, operation-on-equivalence-classes, recursion-theorem, well-ordering-principle, even-and-odd]
sources:
  - ref: judson-abstract-algebra
    loc: 3.1절 The Integers mod n, p.28–30 (ℤ_n 의 정의 p.28, Example 3.1–3.2 와 Figure 3.3 p.29, Proposition 3.4 p.29–30), 연습문제 3.19–3.24 p.41–42
    checked: original
    note: "출처는 '법 n 의 정수는 ℤ 를 n 개의 동치류로 분할한다'고 말하고 그 동치류 전체를 ℤ_n 으로 쓴다(p.28). n 개라는 것은 그 자리에서 증명 없이 말하고, 2장 연습문제 22(p.25)가 '모든 정수는 0, 1, …, n − 1 가운데 정확히 하나와 법 n 으로 합동'임을 나눗셈 정리로 증명하게 한다. 이 항목은 그것을 (1)로 증명한다. 출처는 덧셈과 곱셈을 'a + b 를 n 으로 나눈 나머지'로 정하고(p.28–29), 혼동이 없으면 동치류 [0], …, [11] 을 0, …, 11 로 쓴다(p.28). 이 사이트는 원소를 늘 동치류 [a] 로 쓰고, 연산은 동치류 위의 연산 항목의 (2)로 정한다. 출처는 연산이 대표에 따르지 않는다는 것을 연습문제 3.22(p.42)로 둔다. 출처 Proposition 3.4(p.29–30)와의 대응: (1) 교환법칙 ↔ 이 항목의 (3), (2) 결합법칙 ↔ (3), (3) 덧셈과 곱셈의 항등원 ↔ (4), (4) 분배법칙 ↔ (3), (5) 덧셈 역원 ↔ (4), (6) 곱셈 역원과 gcd(a, n) = 1 ↔ 이 항목에는 없고 법 n 의 단원군 항목에서 다룬다. 출처는 3.4 의 (1)과 (6)만 증명하고 (2)–(5)는 연습문제 3.19–3.24(p.41–42)로 둔다. 출처는 성질을 합동식(≡ (mod n))으로 적는다. 출처는 3.1절에서 n = 1 을 다루지 않는다. ℤ_1 은 p.152 의 'Zn or Dn, where n = 1, 2, 3, 4, 6' 과 p.153 의 결정군 표 'Z1' 에서만 나온다(검색어 'n = 1', 'Z1', 'mod 1', 'modulo 1'(0건)). 그래서 (5)는 출처에 명제로 없다. 예시의 ℤ_4 덧셈표는 출처 연습문제 3.3(p.40)이 (ℤ_4, +) 의 Cayley 표를 쓰라고 하는 것과 같은 대상이다. ℤ_4 곱셈표는 출처 Figure 3.3(p.29, ℤ_8 의 곱셈표)과 같은 발상(0 이 아닌 두 원소의 곱이 [0])이고 n 이 다르다. 반례([2][2] = [0])는 출처 Example 3.1(p.29)이 '0 이 아닌 두 수의 곱이 법 n 으로 0 과 합동일 수 있다'고 적는 것(3 · 4 ≡ 0 (mod 12))과 같은 결론이다. 첫째 확인 질문은 출처 Example 3.1(p.29)이 법 5, 8, 12 에서 합과 곱을 계산하는 것, 3장 읽기 질문 1(p.40, ℤ₈ 에서 6 + 7)과 같은 발상이고 n 과 수가 다르다. 둘째 확인 질문은 출처 부록의 힌트 3.5.1(p.320, 3 + 7ℤ = {…, −4, 3, 10, …})과 같은 법 7 에서 음의 정수가 속하는 류를 보는 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 경계 경우에서 거짓이 되는 제목·직관과 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$n$이 자연수라 하자. $\sim$을 $\mathbb{Z}$ 위의 [[congruence-is-an-equivalence-relation|법 n 합동]], 곧 "$x \sim y$는 정확히 $x \equiv y \pmod n$일 때"인 동치관계라 하고, [[residues-modulo-n|법 n에 대한 나머지]]에서처럼 정수 $a$의 동치류를 $[a] = \{y \in \mathbb{Z} : y \equiv a \pmod n\}$으로 쓴다. [[operation-on-equivalence-classes|동치류 위의 연산]]의 몫집합
$$\mathbb{Z}_n = \mathbb{Z}/{\sim} = \{[a] : a \in \mathbb{Z}\}$$
을 **법 $n$의 정수**(integers modulo $n$)라 한다. $n$은 문맥에서 고정되어 있으므로 $[a]$에 $n$을 적지 않는다. 다음이 성립한다.

1. (원소의 개수) $\mathbb{Z}_n = \{[r] : r \in \mathbb{Z},\ 0 \le r \le n - 1\}$이고, $0 \le r < s \le n - 1$인 정수 $r$, $s$에 대하여 $[r] \ne [s]$이다. $\mathbb{Z}_n$은 [[finite-set|유한집합]]이고 $|\mathbb{Z}_n| = n$이다. 이 원소들을 $[0], [1], \dots, [n-1]$로 늘어놓아 쓴다.
2. (덧셈과 곱셈) $\mathbb{Z}_n$ 위의 [[binary-operation|이항연산]]으로서 모든 정수 $a$, $b$에서 $[a] + [b] = [a + b]$인 것이 정확히 하나 있고, $[a] \cdot [b] = [ab]$인 것이 정확히 하나 있다. 이것을 $\mathbb{Z}_n$의 **덧셈**과 **곱셈**이라 하고, $[a] \cdot [b]$는 $[a][b]$로도 쓴다. 기호 $+$, $\cdot$은 정수의 것과 같지만, 양쪽이 동치류인지 정수인지로 구별한다.
3. (계산 법칙) $\mathbb{Z}_n$의 덧셈과 곱셈은 결합법칙과 교환법칙을 만족하고, 모든 $P, Q, R \in \mathbb{Z}_n$에서 $P(Q + R) = PQ + PR$이고 $(Q + R)P = QP + RP$이다.
4. (항등원과 덧셈의 역원) $[0]$은 덧셈의 항등원이고 $[1]$은 곱셈의 항등원이다. 모든 정수 $a$에 대하여 $[-a]$는 덧셈에 대한 $[a]$의 역원이고 $[-a] = [n - a]$이다.
5. ($n = 1$) $\mathbb{Z}_1 = \{[0]\}$이고 $[0] = [1]$이다. 곧 $n = 1$이면 덧셈의 항등원과 곱셈의 항등원이 같다.
:::

:::english
Let $n$ be a natural number. Let $\sim$ be congruence modulo $n$ on $\mathbb{Z}$, that is, the equivalence relation with $x \sim y$ exactly when $x \equiv y \pmod n$, and, as in the entry on residues modulo $n$, write the equivalence class of an integer $a$ as $[a] = \{y \in \mathbb{Z} : y \equiv a \pmod n\}$. The quotient set
$$\mathbb{Z}_n = \mathbb{Z}/{\sim} = \{[a] : a \in \mathbb{Z}\}$$
of the entry on operations on equivalence classes is called the **integers modulo $n$**. Since $n$ is fixed by the context, we do not record $n$ in $[a]$. The following hold.

1. (Number of elements) $\mathbb{Z}_n = \{[r] : r \in \mathbb{Z},\ 0 \le r \le n - 1\}$, and $[r] \ne [s]$ for integers $r$, $s$ with $0 \le r < s \le n - 1$. $\mathbb{Z}_n$ is a finite set and $|\mathbb{Z}_n| = n$. We list these elements as $[0], [1], \dots, [n-1]$.
2. (Addition and multiplication) There is exactly one binary operation on $\mathbb{Z}_n$ with $[a] + [b] = [a + b]$ for all integers $a$, $b$, and exactly one with $[a] \cdot [b] = [ab]$. These are called the **addition** and **multiplication** of $\mathbb{Z}_n$, and $[a] \cdot [b]$ is also written $[a][b]$. The symbols $+$ and $\cdot$ are the same as for integers; we tell them apart by whether the two sides are equivalence classes or integers.
3. (Laws of arithmetic) Addition and multiplication of $\mathbb{Z}_n$ are associative and commutative, and $P(Q + R) = PQ + PR$ and $(Q + R)P = QP + RP$ for all $P, Q, R \in \mathbb{Z}_n$.
4. (Identities and additive inverses) $[0]$ is the identity element of addition and $[1]$ is the identity element of multiplication. For every integer $a$, $[-a]$ is an inverse of $[a]$ with respect to addition, and $[-a] = [n - a]$.
5. ($n = 1$) $\mathbb{Z}_1 = \{[0]\}$ and $[0] = [1]$. That is, for $n = 1$ the additive identity and the multiplicative identity coincide.
:::

## 직관

시계는 12시간이 지나면 같은 자리로 돌아옵니다. 시각만 보면 3시와 15시, 27시를 구별할 수 없습니다. $\mathbb{Z}_n$은 "$n$으로 나눈 나머지가 같은 정수는 같은 것으로 본다"는 이 생각을 집합으로 만든 것입니다. 비유에서 시곗바늘이 가리키는 한 자리가 동치류 $[a]$ 하나이고, 시계판의 자리 전체가 $\mathbb{Z}_n$입니다. $n$개의 자리 $[0], \dots, [n-1]$이 있다는 것이 (1)입니다.

$\mathbb{Z}_n$의 원소는 수가 아니라 정수의 집합입니다. 그래서 "$[a] + [b] = [a + b]$"가 덧셈을 정한다고 말하려면, 같은 동치류를 $[a] = [a']$처럼 다른 정수로 불러도 답의 동치류가 같다는 확인이 필요합니다. 그 확인이 정수론 입문의 [[congruence-arithmetic|합동의 계산]]이고, 확인이 끝나면 [[operation-on-equivalence-classes|동치류 위의 연산]]의 (2)가 연산을 정확히 하나 줍니다.

계산 법칙은 대부분 정수의 것을 그대로 물려받습니다. 하지만 물려받지 못하는 것도 있습니다. 정수에서는 $ab = 0$이면 $a = 0$이거나 $b = 0$이지만, $\mathbb{Z}_4$에서는 $[2][2] = [0]$입니다(아래 예시).

:::remark[(1)–(5)의 증명]
(1) $[a] \in \mathbb{Z}_n$이면 [[residues-modulo-n|법 n에 대한 나머지]]의 (3)에 의해 $[a] = [r]$이고 $0 \le r \le n - 1$인 정수 $r$가 있다. 거꾸로 $[r]$는 $\mathbb{Z}_n$의 원소이다. 따라서 첫째 등식이 성립한다. $0 \le r < s \le n - 1$이면 $r$과 $s$는 나열 $[0], \dots, [n-1]$의 서로 다른 자리이므로 같은 항목의 (3)에 의해 $[r] \ne [s]$이다.

$i \in \{1, \dots, n\}$에 $[i - 1] \in \mathbb{Z}_n$을 대응시키면 [[recursion-theorem|재귀 정리]]의 (1)에 의해 함수 $h : \{1, \dots, n\} \to \mathbb{Z}_n$이 정해진다. $i \in \{1, \dots, n\}$이면 $1 \le i \le n$이므로 $0 \le i - 1 \le n - 1$이다((Z7)). 전사: $P \in \mathbb{Z}_n$이면 첫째 등식에 의해 $P = [r]$이고 $0 \le r \le n - 1$인 $r$가 있다. $i = r + 1$로 두면 $1 \le i \le n$이고((Z7)) $h(i) = [r] = P$이다. 단사: $i \ne i'$이면 $i - 1 \ne i' - 1$이고((Z7)), 둘 다 $0$ 이상 $n - 1$ 이하이므로 (Z5)에 의해 하나가 다른 하나보다 작고, 방금 보인 것에 의해 $[i - 1] \ne [i' - 1]$이다. 따라서 $h$는 [[injective-surjective-bijective|전단사]]이고, [[finite-set|유한집합]]의 정의에 의해 $\mathbb{Z}_n$은 원소를 $n$개 갖는다. [[number-of-elements-is-unique|원소의 개수]]의 표기로 $|\mathbb{Z}_n| = n$이다.

(2) [[congruence-arithmetic|합동의 계산]]의 (1)은 정확히 정수의 덧셈이 $\sim$과 호환된다는 것이고, 같은 항목의 (2)는 곱셈이 호환된다는 것이다. 정수의 덧셈과 곱셈은 [[binary-operation|이항연산]]의 (4)에 의해 $\mathbb{Z}$ 위의 이항연산이므로, [[operation-on-equivalence-classes|동치류 위의 연산]]의 (2)에 의해 두 연산이 각각 정확히 하나 있다.

(3) [[binary-operation|이항연산]]의 (4)에 의해 정수의 덧셈과 곱셈은 결합법칙과 교환법칙을 만족하므로, [[operation-on-equivalence-classes|동치류 위의 연산]]의 (4)의 (i)에 의해 $\mathbb{Z}_n$의 두 연산도 그렇다. 정수에서 $a(b + c) = ab + ac$이고 $(b + c)a = ba + ca$이므로([[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 분배법칙과 교환법칙), 같은 항목의 (6)에 의해 분배 등식이 성립한다.

(4) $0$은 정수의 덧셈의 항등원, $1$은 곱셈의 항등원이고 $-a$는 덧셈에 대한 $a$의 역원이므로([[binary-operation|이항연산]]의 (4)), [[operation-on-equivalence-classes|동치류 위의 연산]]의 (4)의 (ii), (iii)에 의해 $[0]$, $[1]$은 각각의 항등원이고 $[-a]$는 $[a]$의 역원이다. $(-a) - (n - a) = n \cdot (-1)$이므로 $n \mid ((-a) - (n - a))$이고([[divisibility|나누어떨어짐]]), [[congruence-modulo-n|합동]]의 정의와 [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]의 2에 의해 $[-a] = [n - a]$이다.

(5) $n = 1$이면 (1)에 의해 $\mathbb{Z}_1 = \{[r] : 0 \le r \le 0\} = \{[0]\}$이다. $[1] \in \mathbb{Z}_1$이므로 $[1] = [0]$이다.

여기서 (Z5), (Z7)은 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 성질이고, 정수끼리의 합·차는 정수이다([[even-and-odd]]에서 받아들인 사실).
:::

## 예시와 반례

:::example[ℤ₄의 덧셈표와 곱셈표]
$n = 4$이면 (1)에 의해 $\mathbb{Z}_4 = \{[0], [1], [2], [3]\}$이고 네 원소는 서로 다릅니다. $[a] + [b] = [a + b]$와 $[a][b] = [ab]$를 계산한 뒤 결과를 $[0], \dots, [3]$ 가운데 하나로 바꾸면 다음 표가 나옵니다. 행이 왼쪽 원소, 열이 오른쪽 원소입니다.

| $+$ | $[0]$ | $[1]$ | $[2]$ | $[3]$ |
|---|---|---|---|---|
| $[0]$ | $[0]$ | $[1]$ | $[2]$ | $[3]$ |
| $[1]$ | $[1]$ | $[2]$ | $[3]$ | $[0]$ |
| $[2]$ | $[2]$ | $[3]$ | $[0]$ | $[1]$ |
| $[3]$ | $[3]$ | $[0]$ | $[1]$ | $[2]$ |

| $\cdot$ | $[0]$ | $[1]$ | $[2]$ | $[3]$ |
|---|---|---|---|---|
| $[0]$ | $[0]$ | $[0]$ | $[0]$ | $[0]$ |
| $[1]$ | $[0]$ | $[1]$ | $[2]$ | $[3]$ |
| $[2]$ | $[0]$ | $[2]$ | $[0]$ | $[2]$ |
| $[3]$ | $[0]$ | $[3]$ | $[2]$ | $[1]$ |

예컨대 $[3] + [2] = [5] = [1]$은 $5 - 1 = 4 \cdot 1$이기 때문이고, $[3][3] = [9] = [1]$은 $9 - 1 = 4 \cdot 2$이기 때문이며, $[2][3] = [6] = [2]$는 $6 - 2 = 4 \cdot 1$이기 때문입니다. 덧셈표에서 $[1]$의 역원은 $[3]$이고, (4)의 식 $[-1] = [4 - 1] = [3]$과 맞습니다.
:::

:::counterexample[곱이 [0]이어도 인수가 [0]이 아닐 수 있다]
위 곱셈표에서 $[2][2] = [0]$이지만 $[2] \ne [0]$입니다((1)). 정수에서 성립하던 "곱이 $0$이면 한 인수가 $0$이다"는 $\mathbb{Z}_4$에서 성립하지 않습니다. $\mathbb{Z}_n$은 정수의 계산 법칙 가운데 (3), (4)에 적은 것을 물려받지만, 이 법칙은 $\mathbb{Z}_4$에서 물려받지 못합니다.
:::

## 확인 질문

:::check[$\mathbb{Z}_6$에서 $[4] + [5]$와 $[4][5]$를 $[0], \dots, [5]$ 가운데 하나로 나타내어라.]
$[4] + [5] = [9] = [3]$입니다($9 - 3 = 6 \cdot 1$). $[4][5] = [20] = [2]$입니다($20 - 2 = 6 \cdot 3$).
:::

:::check[$\mathbb{Z}_7$에서 $[-10]$은 $[0], \dots, [6]$ 가운데 어느 것인가?]
$-10 - 4 = -14 = 7 \cdot (-2)$이므로 $-10 \equiv 4 \pmod 7$이고 $[-10] = [4]$입니다.
:::
