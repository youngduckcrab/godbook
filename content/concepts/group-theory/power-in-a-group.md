---
title: 군의 거듭제곱
title_en: Powers in a Group
aliases: [군의 원소의 거듭제곱, 정수 거듭제곱, n배, 배수 표기, powers of a group element, integer powers, multiples]
kind: definition
field: group-theory
msc: ["20A05"]
level: undergrad
summary: 군의 원소 a의 거듭제곱 aⁿ을 자연수 n에 대해서는 a¹ = a, aⁿ⁺¹ = aⁿa로 재귀적으로, 0과 음의 정수에 대해서는 a⁰ = e, a⁻ⁿ = (a⁻¹)ⁿ으로 정의하고, 부분군과 수로 이루어진 군에서 거듭제곱이 무엇이 되는지 보인다.
requires: [set, cartesian-product, function, recursion-theorem, natural-numbers-are-infinite, mathematical-induction, prime-number, well-ordering-principle, group, group-basic-properties, subgroup, number-groups, integers-modulo-n, group-of-units-modulo-n, finite-product, congruence-arithmetic, congruence-modulo-n, equivalence-classes-equal-iff-related]
sources:
  - ref: judson-abstract-algebra
    loc: 3.2절 Basic Properties of Groups, Theorem 3.23 앞 문단(거듭제곱의 정의, 번호 없음)과 뒤 문단(덧셈 표기 ng), p.37
    checked: original
    note: "출처는 g⁰ = e, 자연수 n 에 대해 gⁿ = g · g ⋯ g (n 번), g⁻ⁿ = g⁻¹ · g⁻¹ ⋯ g⁻¹ (n 번)로 정의한다(p.37, 그림으로 대조). 이 사이트는 임의 개수의 곱을 정의하지 않았으므로 자연수 지수를 재귀 정리로 정하고(a¹ = a, aⁿ⁺¹ = aⁿa), 음의 지수는 출처와 같이 a⁻¹ 의 거듭제곱으로 정한다. 정의가 정수마다 하나라는 것과 지수가 −1 인 거듭제곱이 역원과 같다는 것(1)은 출처가 따로 적지 않는다. 덧셈 표기 ng 는 출처가 ℤ 와 ℤ_n 에 대해 p.37 에서 쓰는 것이고, 이 항목은 '배수'라는 이름과 기호 n · a 를 쓴다. (2), (3), (5)–(8)은 출처에 명제로 없다(검색어 'n times' 5건은 p.6 의 곱집합, p.37 의 정의, p.194 의 환의 nr, 기호표; 'gn+1', 'an+1', 'en = e', 'multiples' 의 건들에는 이런 진술이 없다). 출처 Theorem 6.18(오일러 정리)의 증명(p.77)은 U(n) 에서의 거듭제곱과 정수의 거듭제곱을 같은 것으로 쓴다. (8)은 그 둘을 잇는 사실을 이 사이트가 귀납법으로 보인 것이다. (ℝ − {0}, ·) 의 거듭제곱과 실수의 거듭제곱의 관계는 다루지 않는다. 예시 'U(7) 에서 [3] 의 거듭제곱'은 출처에서 찾지 못했다(검색어 'U (7)' 0건. 출처 Example 4.6(p.47)은 U(9) 에서 2 의 거듭제곱을 늘어놓는데, 같은 종류의 계산이다). 예시 'ℤ₆ 의 배수'는 출처에서 찾지 못했다(출처 Example 4.5(p.47)는 ℤ₆ 의 생성원 1, 5 와 ⟨2⟩ 를 든다). 반례(덧셈군의 2 배는 정수의 제곱이 아니다)는 출처 p.37 이 ℤ 와 ℤ_n 에서 gⁿ 대신 ng 로 쓴다고 하는 것과 같은 취지이고, 3 + 3 과 3 · 3 의 비교는 출처에 없다. 확인 질문(S₃ 의 호환의 −3 제곱, (ℤ, +) 의 (−3) · 4)은 출처에서 찾지 못했다(검색어 '(−1)' 의 건들은 2장의 계산과 16장 연습문제)."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 경계 경우에서 거짓이 되는 문장과 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$(G, \ast)$가 [[group|군]]이고 $e$가 그 항등원이며 $a \in G$라 하자. 곱 $ab$와 역원 $a^{-1}$은 [[group|군]]의 표기이고, $R_a : G \to G$, $R_a(t) = ta$는 [[group-basic-properties|군의 기본 성질]]의 (10)의 오른쪽 곱이다. $\mathbb{N}$은 양의 정수의 집합이다.

**자연수 지수.** $\mathbb{N} \times G$의 각 원소 $(k, t)$에 $R_a(t) = ta$를 대응시키는 것은 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $\mathbb{N} \times G$에서 $G$로의 함수이다. 재귀 정리에 의해 함수 $w_a : \mathbb{N} \to G$로서 $w_a(1) = a$이고 모든 자연수 $k$에서 $w_a(k+1) = w_a(k)a$인 것이 정확히 하나 있다. 자연수 $n$에 대하여 $a^n = w_a(n)$으로 쓰고 $a$의 **$n$제곱**(the $n$th power of $a$)이라 한다.

**0과 음의 지수.** $a^0 = e$로 정한다. $n$이 음의 정수이면 $-n$은 자연수이고, $a^n = (a^{-1})^{-n}$으로 정한다. 오른쪽은 $a^{-1}$의 $(-n)$제곱이다. 이렇게 정한 $a^n$($n \in \mathbb{Z}$)을 $a$의 **거듭제곱**(power)이라 한다.

다음이 성립한다. 아래에서 $n$은 정수이다.

1. (정의가 정수마다 하나) 모든 정수 $n$에 대하여 $a^n$은 $G$의 원소 하나로 정해진다. $a^1 = a$이고, 모든 자연수 $n$에서 $a^{n+1} = a^n a$이며 $a^{-n} = (a^{-1})^n$이다. 특히 $a^2 = aa$이다. 지수가 $-1$인 거듭제곱은 $(a^{-1})^1 = a^{-1}$이므로 역원 $a^{-1}$과 같은 원소이다. 따라서 기호 $a^{-1}$을 어느 뜻으로 읽어도 같다.
2. (하나 더 곱하기와 하나 덜 곱하기) 모든 정수 $n$에서 $a^{n+1} = a^n a = a a^n$이고 $a^{n-1} = a^n a^{-1} = a^{-1} a^n$이다.
3. (항등원의 거듭제곱) 모든 정수 $n$에서 $e^n = e$이다.
4. (덧셈 표기) $G$가 [[number-groups|수로 이루어진 군]]의 덧셈 표기로 쓰는 아벨군이면 $a^n$을 $n \cdot a$로 쓰고 $a$의 **$n$배**(the $n$th multiple of $a$)라 한다. 곧 $1 \cdot a = a$, $0 \cdot a = 0$이고, 모든 자연수 $n$에서 $(n + 1) \cdot a = n \cdot a + a$, $(-n) \cdot a = n \cdot (-a)$이다. 기호 $\cdot$는 정수의 곱셈과 같지만, 왼쪽이 정수이고 오른쪽이 군의 원소이다.
5. (부분군에서의 일치) $H$가 $G$의 [[subgroup|부분군]]이고 $a \in H$이면, 모든 정수 $n$에서 $a^n \in H$이고, 군 $(H, \ast)$에서 정한 $a$의 $n$제곱은 $G$에서 정한 $a^n$과 같다.
6. ($(\mathbb{Z}, +)$) 정수 $n$, $a$에 대하여 군 $(\mathbb{Z}, +)$에서의 $n \cdot a$는 정수의 곱 $na$이다.
7. ($(\mathbb{Z}_m, +)$) $m$이 자연수이고 $n$, $a$가 정수이면 [[integers-modulo-n|법 m의 정수]]의 군 $(\mathbb{Z}_m, +)$에서 $n \cdot [a] = [na]$이다.
8. ($U(m)$) $m$이 자연수이고 $a$가 $\gcd(a, m) = 1$인 정수이며 $k$가 자연수이면, [[group-of-units-modulo-n|법 m의 단원군]] $U(m)$에서의 거듭제곱 $[a]^k$는 $[a^k]$이다. 여기서 $a^k$는 [[congruence-arithmetic|합동의 계산]]에서 유한 곱으로 정의한 정수의 거듭제곱이고, 모든 자연수 $k$에서 $a^{k+1} = a^k \cdot a$이다.

실수의 거듭제곱은 해석학 입문에서 따로 정의한다. 군 $(\mathbb{R} - \{0\}, \cdot)$에서의 거듭제곱과 그 값이 같다는 것은 이 강의에서 증명하지 않으며 쓰지 않는다.
:::

:::english
Let $(G, \ast)$ be a group with identity $e$, and let $a \in G$. Products $ab$ and inverses $a^{-1}$ are written as in the entry on groups, and $R_a : G \to G$, $R_a(t) = ta$, is right multiplication from (10) of the entry on basic properties of groups. $\mathbb{N}$ is the set of positive integers.

**Natural exponents.** By (1) of the recursion theorem, assigning $R_a(t) = ta$ to each $(k, t) \in \mathbb{N} \times G$ is a function from $\mathbb{N} \times G$ to $G$. By the recursion theorem there is exactly one function $w_a : \mathbb{N} \to G$ with $w_a(1) = a$ and $w_a(k+1) = w_a(k)a$ for every natural number $k$. For a natural number $n$ we write $a^n = w_a(n)$ and call it the **$n$th power** of $a$.

**Zero and negative exponents.** We set $a^0 = e$. If $n$ is a negative integer, then $-n$ is a natural number, and we set $a^n = (a^{-1})^{-n}$; the right side is the $(-n)$th power of $a^{-1}$. The elements $a^n$ ($n \in \mathbb{Z}$) defined in this way are the **powers** of $a$.

The following hold, where $n$ denotes an integer.

1. (One value for each integer) For every integer $n$, $a^n$ is a well-determined element of $G$. We have $a^1 = a$, and for every natural number $n$, $a^{n+1} = a^n a$ and $a^{-n} = (a^{-1})^n$. In particular $a^2 = aa$. The power with exponent $-1$ is $(a^{-1})^1 = a^{-1}$, the same element as the inverse $a^{-1}$. Hence the symbol $a^{-1}$ may be read either way.
2. (One more and one fewer factor) For every integer $n$, $a^{n+1} = a^n a = a a^n$ and $a^{n-1} = a^n a^{-1} = a^{-1} a^n$.
3. (Powers of the identity) $e^n = e$ for every integer $n$.
4. (Additive notation) If $G$ is an abelian group written in the additive notation of the entry on groups of numbers, we write $a^n$ as $n \cdot a$ and call it the **$n$th multiple** of $a$. Thus $1 \cdot a = a$, $0 \cdot a = 0$, and for every natural number $n$, $(n + 1) \cdot a = n \cdot a + a$ and $(-n) \cdot a = n \cdot (-a)$. The symbol $\cdot$ is the same as for multiplication of integers, but here the left factor is an integer and the right one is an element of the group.
5. (Agreement in subgroups) If $H$ is a subgroup of $G$ and $a \in H$, then $a^n \in H$ for every integer $n$, and the $n$th power of $a$ defined in the group $(H, \ast)$ equals $a^n$ defined in $G$.
6. ($(\mathbb{Z}, +)$) For integers $n$ and $a$, $n \cdot a$ in the group $(\mathbb{Z}, +)$ is the integer product $na$.
7. ($(\mathbb{Z}_m, +)$) If $m$ is a natural number and $n$, $a$ are integers, then $n \cdot [a] = [na]$ in the group $(\mathbb{Z}_m, +)$ of integers modulo $m$.
8. ($U(m)$) If $m$ is a natural number, $a$ is an integer with $\gcd(a, m) = 1$, and $k$ is a natural number, then the power $[a]^k$ in the group of units $U(m)$ is $[a^k]$. Here $a^k$ is the integer power defined as a finite product in the entry on congruence arithmetic, and $a^{k+1} = a^k \cdot a$ for every natural number $k$.

Powers of real numbers are defined separately in the introductory analysis course. That they agree with the powers in the group $(\mathbb{R} - \{0\}, \cdot)$ is not proved in this course and is not used.
:::

## 직관

$a^n$은 "$a$를 $n$번 곱한 것"입니다. 이 말을 그대로 정의로 쓰려면 $n$개의 곱을 먼저 정의해야 하는데, 이 강의는 임의 개수의 곱을 정의하지 않았습니다. 그래서 "한 번 곱한 것은 $a$, 한 번 더 곱하려면 오른쪽에 $a$를 붙인다"는 규칙만 정하고, 이 규칙을 모든 자연수까지 이어 주는 일은 재귀 정리에 맡깁니다. 계단을 오르는 것과 같습니다. 첫 계단의 자리($a^1 = a$)와 한 계단 오르는 방법($a^{k+1} = a^k a$)만 정하면 모든 계단의 자리가 하나씩 정해집니다.

$0$제곱과 음의 지수는 이 규칙을 아래로 늘인 것입니다. 한 계단 내려가는 일은 오른쪽에 $a^{-1}$을 곱하는 것이므로, $a^1$에서 한 계단 내려가면 $a a^{-1} = e$, 거기서 또 내려가면 $a^{-1}$, 그다음은 $a^{-1}a^{-1}$입니다. (2)는 이 계단이 위로도 아래로도 어긋나지 않게 이어진다는 것입니다. 비유가 맞지 않는 곳도 있습니다. 계단은 서로 다른 높이에 있지만 거듭제곱은 지수가 달라도 같은 원소일 수 있습니다. 예컨대 $e^n$은 모든 $n$에서 $e$입니다((3)).

덧셈으로 쓰는 군에서는 "$n$번 곱한다"가 "$n$번 더한다"가 되므로 $n \cdot a$로 씁니다. $(\mathbb{Z}, +)$에서는 이것이 보통의 곱 $na$와 같고((6)), $\mathbb{Z}_m$에서는 $[na]$입니다((7)). 이 일치는 정의에서 저절로 나오지 않고 귀납법으로 증명합니다.

:::remark[(1)–(3)의 증명]
**(1)** 정수 $n$에 대하여 (Z5)에 의해 $0 < n$, $n = 0$, $n < 0$ 가운데 정확히 하나가 성립한다. $0 < n$이면 $n$은 양의 정수, 곧 자연수이고 $a^n = w_a(n)$이다. $n = 0$이면 $a^n = e$이다. $n < 0$이면 양변에 $-n$을 더해((Z7)) $0 < -n$이므로 $-n$은 자연수이고, $a^{-1}$에 대해서도 같은 방법으로 함수 $w_{a^{-1}}$이 정확히 하나 있으므로 $a^n = w_{a^{-1}}(-n)$이다. 세 경우가 겹치지 않으므로 $a^n$은 정수 $n$마다 하나로 정해진다. 자연수 $n$에서 $a^1 = w_a(1) = a$, $a^{n+1} = w_a(n+1) = w_a(n)a = a^n a$이다. 자연수 $n$이면 $-n < 0$이므로 정의에 의해 $a^{-n} = (a^{-1})^{-(-n)} = (a^{-1})^n$이다. $a^2 = a^1 a = aa$이고, $n = 1$로 두면 $a^{-1} = (a^{-1})^1 = a^{-1}$이다(왼쪽은 거듭제곱, 오른쪽은 역원).

(Z5), (Z7)은 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 성질이다. 아래에서 $b$가 $G$의 원소일 때 "$b$에 대한 (1)"은 $a$ 자리에 $b$를 넣은 (1)이다.

**(2)** 먼저 모든 자연수 $n$에서 $a a^n = a^n a$임을 $n$에 대한 [[mathematical-induction|수학적 귀납법]]으로 보인다. $n = 1$이면 두 변이 모두 $aa$이다. $a a^k = a^k a$라 하면
$$a a^{k+1} = a(a^k a) = (a a^k)a = (a^k a)a = a^{k+1}a$$
이다(정의, 결합법칙, 귀납 가정, 정의). 이 사실을 이 증명에서 "교환 보조 사실"이라 부른다. 같은 사실은 $G$의 모든 원소에 대해 성립한다.

이제 $a^{n+1} = a^n a = a a^n$을 정수 $n$에 대해 보인다. (Z5)와 [[prime-number|소수]]의 (Z1)에 의해 정수 $n$은 $n \ge 1$이거나 $n \le 0$이고, $n \le 0$이면 $n = 0$이거나 $n \le -1$이며, $n \le -1$이면 $n = -1$이거나 $n \le -2$이다. 네 경우를 차례로 본다.

- $n \ge 1$: $n$은 자연수이므로 (1)에 의해 $a^{n+1} = a^n a$이고, 교환 보조 사실에 의해 $a^n a = a a^n$이다.
- $n = 0$: $a^1 = a$이고 $a^0 a = ea = a$, $a a^0 = ae = a$이다.
- $n = -1$: $a^0 = e$이고 (1)에 의해 $a^{-1}$은 역원이므로 $a^{-1}a = e$, $a a^{-1} = e$이다.
- $n \le -2$: $k = -n$으로 두면 $k \ge 2$인 자연수이고, $k - 1 \ge 1$이므로((Z7)) $k - 1$도 자연수이다. $b = a^{-1}$로 쓰자. $b$에 대한 (1)과 교환 보조 사실에 의해 $b^k = b^{k-1}b = b\, b^{k-1}$이다. $n + 1 = -(k-1)$이므로 (1)에 의해 $a^n = b^k$이고 $a^{n+1} = b^{k-1}$이다. 따라서
$$a^n a = (b^{k-1}b)a = b^{k-1}(ba) = b^{k-1}e = b^{k-1} = a^{n+1}$$
이고($ba = a^{-1}a = e$),
$$a a^n = a(b\, b^{k-1}) = (ab)b^{k-1} = e\, b^{k-1} = b^{k-1} = a^{n+1}$$
이다($ab = aa^{-1} = e$).

끝으로 $a^{n-1}$에 관한 등식이다. 방금 보인 것을 정수 $n - 1$에 쓰면 $a^n = a^{n-1}a = a\,a^{n-1}$이다. 따라서 $a^n a^{-1} = (a^{n-1}a)a^{-1} = a^{n-1}(aa^{-1}) = a^{n-1}e = a^{n-1}$이고, $a^{-1}a^n = a^{-1}(a\,a^{n-1}) = (a^{-1}a)a^{n-1} = a^{n-1}$이다. 이 증명의 "결합법칙"은 [[group|군]]의 (1)이고, $e$와 역원의 성질은 군의 진술의 것이다.

**(3)** 자연수 $n$에 대한 귀납법으로 $e^n = e$를 보인다. $e^1 = e$이고, $e^k = e$이면 $e^{k+1} = e^k e = ee = e$이다. $e^0 = e$는 정의이다. $n$이 음의 정수이면 $-n$은 자연수이고, [[group-basic-properties|군의 기본 성질]]의 (4)에 의해 $e^{-1} = e$이므로 $e^n = (e^{-1})^{-n} = e^{-n} = e$이다.
:::

:::remark[(4)–(8)의 증명]
**(4)** 덧셈 표기에서는 곱 $ab$를 $a + b$로, $e$를 $0$으로, $a^{-1}$을 $-a$로 쓴다([[number-groups|수로 이루어진 군]]). 정의와 (1)을 이 표기로 옮긴 것이 (4)이다. 마지막 등식은 (1)의 $a^{-n} = (a^{-1})^n$이다.

**(5)** $\ast$를 $H$로 제한한 연산을 $\ast_H$로 쓰자. [[subgroup|부분군]]의 (3)에 의해 $s, t \in H$에서 $s \ast_H t = st$이다. 군 $(H, \ast_H)$에서 $a$의 거듭제곱을 정하는 함수를 $v : \mathbb{N} \to H$라 하면 $v(1) = a$이고 모든 자연수 $k$에서 $v(k+1) = v(k) \ast_H a = v(k)a$이다. $v$의 값은 모두 $G$에 속하므로 [[function|함수]]의 진술("공역은 선언하기 나름이다")에 의해 $v$는 $\mathbb{N}$에서 $G$로의 함수이기도 하고, $w_a$와 같은 두 조건을 만족한다. [[recursion-theorem|재귀 정리]]의 "정확히 하나"에 의해 $v = w_a$이다. 따라서 자연수 $n$에서 $H$에서 정한 $n$제곱과 $G$에서 정한 $a^n$이 같고, 그 값 $v(n)$은 $H$에 속한다. $n = 0$이면 부분군의 (1)에 의해 $(H, \ast)$의 항등원은 $e$이고 $e \in H$이다. $n$이 음의 정수이면 부분군의 (2)에 의해 $(H, \ast)$에서 $a$의 역원은 $a^{-1}$이고 $a^{-1} \in H$이므로, 방금 보인 자연수의 경우를 $a^{-1}$과 자연수 $-n$에 쓰면 두 군에서 정한 $(a^{-1})^{-n}$이 같고 $H$에 속한다.

**(6)** [[number-groups|수로 이루어진 군]]의 (1)에 의해 $(\mathbb{Z}, +)$의 항등원은 $0$이고 $a$의 역원은 정수 $-a$이다. 자연수 $n$에 대한 귀납법으로 $n \cdot a = na$를 보인다. $1 \cdot a = a = 1a$이다. $k \cdot a = ka$이면 $(k + 1) \cdot a = k \cdot a + a = ka + a = (k + 1)a$이다(분배법칙). $0 \cdot a = 0 = 0a$이다. $n$이 음의 정수이면 $k = -n$은 자연수이고, (4)와 자연수의 경우에 의해 $n \cdot a = k \cdot (-a) = k(-a) = (-k)a = na$이다. 여기서 쓴 정수의 계산 법칙은 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 것이다.

**(7)** [[number-groups|수로 이루어진 군]]의 (4)에 의해 $(\mathbb{Z}_m, +)$의 항등원은 $[0]$이고 $[a]$의 역원은 $[-a]$이며, [[integers-modulo-n|법 n의 정수]]의 (2)에 의해 $[s] + [t] = [s + t]$이다. 자연수 $n$에 대한 귀납법: $1 \cdot [a] = [a] = [1a]$이고, $k \cdot [a] = [ka]$이면 $(k + 1) \cdot [a] = k \cdot [a] + [a] = [ka] + [a] = [ka + a] = [(k + 1)a]$이다. $0 \cdot [a] = [0] = [0a]$이다. $n$이 음의 정수이면 $k = -n$은 자연수이고 $n \cdot [a] = k \cdot [-a] = [k(-a)] = [(-k)a] = [na]$이다.

**(8)** [[group-of-units-modulo-n|법 n의 단원군]]의 (1)에 의해 $[a] \in U(m)$이고, (2)에 의해 $U(m)$의 곱은 $\mathbb{Z}_m$의 곱셈 $[s][t] = [st]$이다. 먼저 정수의 거듭제곱에 대하여 $a^{k+1} = a^k \cdot a$를 보인다. $a^{k+1}$은 모든 자리가 $a$인 길이 $k + 1$인 열 $u$의 곱이다. [[finite-product|유한 곱]]의 정의에 의해 그 곱은 $u$의 처음 $k$개의 곱에 $u_{k+1} = a$를 곱한 것이다. $u$의 처음 $k$개는 모든 자리가 $a$인 길이 $k$인 열이므로 그 곱은 $a^k$이다. 따라서 $a^{k+1} = a^k \cdot a$이다. 이제 $k$에 대한 귀납법으로 $[a]^k = [a^k]$를 보인다. [[congruence-arithmetic|합동의 계산]]의 진술에 의해 $a^1 = a$이므로 $[a]^1 = [a] = [a^1]$이다. $[a]^k = [a^k]$이면 $[a]^{k+1} = [a]^k[a] = [a^k][a] = [a^k \cdot a] = [a^{k+1}]$이다.
:::

## 예시와 반례

:::example[법 7의 단원군에서 양수와 음수 지수]
$\mathbb{Z}_7$에서 $[3][5] = [15] = [1]$이고 $[5][3] = [1]$입니다($15 - 1 = 7 \cdot 2$). [[group-of-units-modulo-n|법 n의 단원군]]의 (3)에 의해 $[3]$과 $[5]$는 $U(7)$의 원소이고, [[group-basic-properties|군의 기본 성질]]의 (3)에 의해 $U(7)$에서 $[3]^{-1} = [5]$입니다. $U(7)$의 곱은 $\mathbb{Z}_7$의 곱셈이므로 (1)과 (2)에 의해
$$[3]^2 = [3][3] = [9] = [2], \qquad [3]^3 = [3]^2[3] = [2][3] = [6]$$
이고($9 - 2 = 7 \cdot 1$), $[3]^{-2} = ([3]^{-1})^2 = [5][5] = [25] = [4]$입니다($25 - 4 = 7 \cdot 3$). 실제로 $[3]^2[3]^{-2} = [2][4] = [8] = [1]$입니다. $[3] \in U(7)$이므로 단원군의 (1)에 의해 $\gcd(3, 7) = 1$이고, (8)에 의해 $[3]^3$은 정수의 거듭제곱 $3^3 = 27$의 동치류이기도 하며, $27 - 6 = 7 \cdot 3$이므로 $[27] = [6]$으로 맞습니다.
:::

:::example[덧셈으로 쓰는 군의 배수]
$(\mathbb{Z}_6, +)$에서 (7)에 의해 $4 \cdot [5] = [20] = [2]$이고($20 - 2 = 6 \cdot 3$), $(-2) \cdot [5] = [-10] = [2]$입니다($-10 - 2 = 6 \cdot (-2)$). 지수 $4$와 $-2$가 달라도 같은 원소가 나올 수 있습니다. (4)의 마지막 등식으로 계산하면 $(-2) \cdot [5] = 2 \cdot (-[5]) = 2 \cdot [-5] = [-10]$이 되어 같은 값입니다.
:::

:::counterexample[정수의 덧셈군에서 3의 2배는 3의 제곱이 아니다]
$(\mathbb{Z}, +)$에서 $3$의 "$2$제곱", 곧 이 항목의 정의로 $3^2$에 해당하는 원소는 $3 + 3 = 6$입니다. 덧셈 표기로는 $2 \cdot 3 = 6$이고, (6)에 의해 정수의 곱 $2 \cdot 3$과 같습니다. 정수의 제곱 $3 \cdot 3 = 9$와는 다릅니다. 군의 거듭제곱은 그 군의 연산을 되풀이한 것이므로, 같은 집합 $\mathbb{Z}$라도 어떤 연산의 군으로 보느냐에 따라 값이 다를 수 있습니다($0$이나 $2$에서는 $0 + 0 = 0 \cdot 0$, $2 + 2 = 2 \cdot 2$로 우연히 같습니다). 그래서 덧셈으로 쓰는 군에서는 지수 표기 대신 $n \cdot a$로 씁니다.
:::

## 확인 질문

:::check[$X = \{1, 2, 3\}$이고 $t = \{(1, 2), (2, 1), (3, 3)\}$일 때, 대칭군 $S_X$에서 $t^{-3}$은 무엇인가?]
$t$입니다. $t(t(1)) = 1$, $t(t(2)) = 2$, $t(t(3)) = 3$이므로 $tt = i_X$이고, [[group-basic-properties|군의 기본 성질]]의 (3)에 의해 $t^{-1} = t$입니다. (1)에 의해 $t^{-3} = (t^{-1})^3 = t^3$이고, $t^2 = tt = i_X$, $t^3 = t^2 t = i_X t = t$입니다.
:::

:::check[$(\mathbb{Z}, +)$에서 $(-3) \cdot 4$와 $3 \cdot (-4)$는 각각 무엇인가?]
둘 다 $-12$입니다. (6)에 의해 $(-3) \cdot 4$는 정수의 곱 $(-3)4 = -12$이고, $3 \cdot (-4)$는 $3(-4) = -12$입니다. (4)의 $(-n) \cdot a = n \cdot (-a)$에 $n = 3$, $a = 4$를 넣은 것과도 맞습니다.
:::
