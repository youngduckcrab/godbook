---
title: 지수법칙
title_en: Laws of Exponents in a Group
aliases: [군의 지수법칙, 거듭제곱의 곱, 거듭제곱의 거듭제곱, laws of exponents, exponent laws]
kind: theorem
field: group-theory
msc: ["20A05"]
level: undergrad
summary: 군에서 모든 정수 m, n에 대하여 aᵐaⁿ = aᵐ⁺ⁿ, (aᵐ)ⁿ = aᵐⁿ, (aⁿ)⁻¹ = a⁻ⁿ = (a⁻¹)ⁿ이고, ab = ba이면 (ab)ⁿ = aⁿbⁿ이다. 교환되지 않는 두 원소에서는 마지막 등식이 깨질 수 있다.
requires: [function, function-composition, inverse-function, injective-surjective-bijective, mathematical-induction, prime-number, well-ordering-principle, group, group-basic-properties, power-in-a-group, number-groups, symmetric-group]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 3.2절 Basic Properties of Groups, Theorem 3.23 과 그 뒤 문단(덧셈 표기의 지수법칙) p.37, 3.5절 연습문제 3.16, 3.29 p.41–42
    checked: original
    note: "(1), (2)는 출처 Theorem 3.23 의 1, 2(p.37)이고, (5)는 그 3 의 앞부분 (gh)ⁿ = (h⁻¹g⁻¹)⁻ⁿ 이다(그림으로 대조). 출처는 '아벨군이면 (gh)ⁿ = gⁿhⁿ'이라 적고, 이 항목의 (4)는 그것을 교환되는 두 원소에 대해 진술하고 a^m b^n = b^n a^m 을 덧붙였다. (3)은 출처에 명제로 없고, 출처 Theorem 4.3 의 증명(p.46)이 '역원은 a⁻ⁿ' 으로 쓴다. 출처는 Theorem 3.23 의 증명을 연습문제 3.29(p.42)로 둔다. 증명은 이 사이트가 m 을 고정하고 n 을 0 에서 위아래로 옮기는 귀납법으로 썼다. (6)의 덧셈 표기판은 출처 p.37 의 세 등식 mg + ng = (m + n)g, m(ng) = (mn)g, m(g + h) = mg + mh 와 같고, 이 항목은 −(n · a) = (−n) · a = n · (−a) 를 덧붙였다. 반례(S₃ 의 두 호환에서 (su)² ≠ s²u²)는 출처 연습문제 3.16(p.41, '(gh)ⁿ ≠ gⁿhⁿ 인 군과 원소의 예를 들어라')에 답하는 예이다. 예시(ℤ₆ 에서 (6)의 확인)는 출처에서 찾지 못했다. 첫째 확인 질문(a¹² = e 이면 a⁻⁵ = a⁷)과 둘째 확인 질문(a³ = e, b² = e 이면 (ab)⁶ = e)은 출처에서 찾지 못했다(검색어 '(ab)' 의 건들은 2장과 3.19, 'a24 = e' 는 4장 연습문제 11 의 위수 문제이다)."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 경계 경우에서 거짓이 되는 문장과 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이며 $a, b \in G$라 하자. 거듭제곱 $a^n$은 [[power-in-a-group|군의 거듭제곱]]의 것이다. 모든 정수 $m$, $n$에 대하여 다음이 성립한다.

1. $a^m a^n = a^{m+n}$이다. 따라서 $a^m a^n = a^n a^m$이다.
2. $(a^m)^n = a^{mn}$이다.
3. $(a^n)^{-1} = a^{-n} = (a^{-1})^n$이다.
4. (교환되는 두 원소) $ab = ba$이면 $a^m b^n = b^n a^m$이고 $(ab)^n = a^n b^n$이다. 특히 $G$가 아벨군이면 모든 $a, b \in G$에서 $(ab)^n = a^n b^n$이다.
5. $(ab)^n = (b^{-1}a^{-1})^{-n}$이다.
6. (덧셈 표기) $G$가 덧셈 표기로 쓰는 아벨군이면, [[power-in-a-group|군의 거듭제곱]]의 (4)의 배수 $n \cdot a$에 대하여 $m \cdot a + n \cdot a = (m + n) \cdot a$, $n \cdot (m \cdot a) = (nm) \cdot a$, $-(n \cdot a) = (-n) \cdot a = n \cdot (-a)$, $n \cdot (a + b) = n \cdot a + n \cdot b$이다.
:::

:::english
Let $G$ be a group with identity $e$, and let $a, b \in G$. Powers $a^n$ are those of the entry on powers in a group. For all integers $m$ and $n$ the following hold.

1. $a^m a^n = a^{m+n}$. Hence $a^m a^n = a^n a^m$.
2. $(a^m)^n = a^{mn}$.
3. $(a^n)^{-1} = a^{-n} = (a^{-1})^n$.
4. (Two commuting elements) If $ab = ba$, then $a^m b^n = b^n a^m$ and $(ab)^n = a^n b^n$. In particular, if $G$ is abelian, then $(ab)^n = a^n b^n$ for all $a, b \in G$.
5. $(ab)^n = (b^{-1}a^{-1})^{-n}$.
6. (Additive notation) If $G$ is an abelian group written additively, then for the multiples $n \cdot a$ of (4) of the entry on powers in a group we have $m \cdot a + n \cdot a = (m + n) \cdot a$, $n \cdot (m \cdot a) = (nm) \cdot a$, $-(n \cdot a) = (-n) \cdot a = n \cdot (-a)$, and $n \cdot (a + b) = n \cdot a + n \cdot b$.
:::

## 직관

$a^m$이 "$a$를 $m$번 곱한 것"이라면, $a^m a^n$은 $a$를 $m$번 곱한 뒤 $n$번 더 곱한 것이므로 $m + n$번 곱한 것입니다. 지수가 음수이면 "$a^{-1}$을 곱하는 것", 곧 한 번 되돌리는 것이므로, 지수를 더하는 것은 "앞으로 몇 걸음, 뒤로 몇 걸음"을 합하는 것과 같습니다. 이 그림이 정수 전체에서 어긋나지 않는다는 것이 (1)입니다. 증명은 $m$을 고정하고 $n$을 $0$에서 한 걸음씩 위로, 그리고 한 걸음씩 아래로 옮기며 [[power-in-a-group|군의 거듭제곱]]의 (2)를 되풀이해 씁니다.

(4)에는 $ab = ba$라는 가정이 있습니다. $(ab)^2 = (ab)(ab)$를 $a^2b^2 = (aa)(bb)$로 바꾸려면 가운데의 $ba$를 $ab$로 바꿔야 하기 때문입니다. 교환되지 않는 두 원소에서는 실제로 $(ab)^2 \ne a^2b^2$일 수 있습니다(아래 반례). 교환되지 않아도 성립하는 것은 (5)입니다. $b^{-1}a^{-1}$은 $ab$의 역원이므로, (5)는 "$c$의 $n$제곱은 $c^{-1}$의 $-n$제곱"이라는 (3)의 한 경우입니다.

## 증명

:::idea
$m$을 고정하고 $n$에 대한 명제를 $n \ge 0$에서는 $n$에 대한 귀납법으로, $n \le 0$에서는 $-n$에 대한 귀납법으로 보인다. 귀납 단계는 [[power-in-a-group|군의 거듭제곱]]의 (2), 곧 $a^{k+1} = a^k a$와 $a^{k-1} = a^k a^{-1}$이다. (2)–(5)는 (1)과 (3)을 써서 경우 나눔을 줄인다.
:::

:::hint
(1): $a^m a^{n+1} = a^m(a^n a)$이고, 음의 쪽은 $a^m a^{n-1} = a^m(a^n a^{-1})$이다.
:::

:::hint
(4): 먼저 $ab = ba$에서 $a^{-1}b = ba^{-1}$을 얻고, $a^n b = b a^n$을 $n \ge 0$에서 귀납법으로 보인 뒤 $a^{-1}$에 같은 것을 쓴다.
:::

:::proof
아래에서 "거듭제곱의 ($k$)"는 [[power-in-a-group|군의 거듭제곱]]의 진술의 ($k$)이고, "결합법칙"은 [[group|군]]의 (1)이다. 증명 없이 쓰는 정수의 성질은 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 (Z5)–(Z7)과 정수의 계산 법칙, [[prime-number|소수]]의 (Z1)이다.

**정수를 두 쪽으로 나누기.** 정수 $n$은 (Z5)에 의해 $n \ge 0$이거나 $n < 0$이다. $n < 0$이면 양변에 $-n$을 더해((Z7)) $0 < -n$이고, $k = -n$으로 두면 $k \ge 0$이고 $n = -k$이다. 따라서 모든 정수 $n$은 $0$ 이상인 정수 $k$에 대해 $n = k$이거나 $n = -k$이다. 정수 $n$에 관한 명제 $P(n)$을 모든 정수에서 보일 때는, $k \ge 0$인 정수에 관한 두 명제 "$P(k)$"와 "$P(-k)$"를 [[mathematical-induction|수학적 귀납법]]의 시작점이 $0$인 꼴로 각각 보인다. 이것을 아래에서 "두 쪽 귀납"이라 부른다.

**(1)** 정수 $m$을 고정한다. 두 쪽 귀납으로 모든 정수 $n$에서 $a^m a^n = a^{m+n}$을 보인다.

- 기초($k = 0$): $a^m a^0 = a^m e = a^m = a^{m+0}$이다($a^0 = e$는 정의).
- 위쪽($k \ge 0$에서 $k + 1$로): $a^m a^k = a^{m+k}$라 하면
$$a^m a^{k+1} = a^m(a^k a) = (a^m a^k)a = a^{m+k}a = a^{m+k+1}$$
이다. 차례로 거듭제곱의 (2)(정수 $k$에 대해), 결합법칙, 귀납 가정, 거듭제곱의 (2)(정수 $m + k$에 대해)를 썼다.
- 아래쪽($-k$에서 $-(k+1)$로): $a^m a^{-k} = a^{m-k}$라 하면
$$a^m a^{-k-1} = a^m(a^{-k}a^{-1}) = (a^m a^{-k})a^{-1} = a^{m-k}a^{-1} = a^{m-k-1}$$
이다. 차례로 거듭제곱의 (2)의 $a^{n-1} = a^n a^{-1}$(정수 $-k$에 대해), 결합법칙, 귀납 가정, 같은 등식(정수 $m - k$에 대해)을 썼다.

기초는 두 쪽에 공통이다. 따라서 모든 정수 $n$에서 $a^m a^n = a^{m+n}$이다. $m + n = n + m$이므로 $a^m a^n = a^{m+n} = a^{n+m} = a^n a^m$이다.

**(3)** (1)에 의해 $a^n a^{-n} = a^0 = e$이므로 [[group-basic-properties|군의 기본 성질]]의 (3)에 의해 $a^{-n} = (a^n)^{-1}$이다. 다음으로 $a^{-n} = (a^{-1})^n$을 본다. 정수를 두 쪽으로 나누어, $k \ge 0$인 정수 $k$에 대해 $n = k$인 경우와 $n = -k$인 경우를 본다.
- $n = 0$: 두 변이 모두 $e$이다.
- $n = k$, $k$는 자연수: 거듭제곱의 (1)에 의해 $a^{-k} = (a^{-1})^k$이다.
- $n = -k$, $k$는 자연수: 왼쪽은 $a^{-n} = a^k$이다. 오른쪽은 $(a^{-1})^{-k}$이고, 거듭제곱의 (1)을 $a^{-1}$에 쓰면 $(a^{-1})^{-k} = \bigl((a^{-1})^{-1}\bigr)^k$이며, [[group-basic-properties|군의 기본 성질]]의 (5)에 의해 $(a^{-1})^{-1} = a$이므로 오른쪽도 $a^k$이다.

**(2)** 정수 $m$을 고정하고 $c = a^m$으로 둔다. 정수를 두 쪽으로 나눈다.
- $n = 0$이면 $c^0 = e = a^0 = a^{m \cdot 0}$이다.
- $n \ge 0$에서 귀납법: $c^k = a^{mk}$라 하면 $c^{k+1} = c^k c = a^{mk}a^m = a^{mk+m} = a^{m(k+1)}$이다(거듭제곱의 (2), 귀납 가정, (1)).
- $n = -k$, $k \ge 0$: (3)을 $c$에 쓰면 $c^{-k} = (c^k)^{-1}$이고, 방금 보인 것에 의해 $c^k = a^{mk}$이므로, (3)을 다시 $a$에 쓰면 $c^{-k} = (a^{mk})^{-1} = a^{-mk} = a^{m(-k)}$이다.

**(4)** 아래 *가*–*다*는 $ab = ba$인 임의의 두 원소 $a$, $b$에 대한 사실로 보이고, *라*와 *마*에서는 그것을 다른 두 원소에도 쓴다. $ab = ba$라 하자.

*가.* $a^{-1}b = ba^{-1}$이다. 실제로
$$a^{-1}b = a^{-1}\bigl(b(aa^{-1})\bigr) = a^{-1}\bigl((ba)a^{-1}\bigr) = a^{-1}\bigl((ab)a^{-1}\bigr) = a^{-1}\bigl(a(ba^{-1})\bigr) = (a^{-1}a)(ba^{-1}) = ba^{-1}$$
이다. 차례로 $e$와 역원의 성질, 결합법칙, 가정, 결합법칙, 결합법칙, 역원과 $e$의 성질을 썼다.

*나.* $x$, $y \in G$가 $xy = yx$이면 $0$ 이상인 모든 정수 $k$에서 $x^k y = y x^k$이다. $k = 0$이면 $ey = y = ye$이다. $x^k y = y x^k$이면
$$x^{k+1}y = (x^k x)y = x^k(xy) = x^k(yx) = (x^k y)x = (y x^k)x = y(x^k x) = y x^{k+1}$$
이다(거듭제곱의 (2), 결합법칙, 가정, 결합법칙, 귀납 가정, 결합법칙, 거듭제곱의 (2)).

*다.* 모든 정수 $m$에서 $a^m b = b a^m$이다. $m = k \ge 0$이면 *나*를 $x = a$, $y = b$에 쓴다. $m = -k$, $k \ge 0$이면 (3)에 의해 $a^{-k} = (a^{-1})^k$이고, *가*에 의해 $a^{-1}b = ba^{-1}$이므로 *나*를 $x = a^{-1}$, $y = b$에 쓴다.

*라.* 모든 정수 $m$, $n$에서 $a^m b^n = b^n a^m$이다. *다*에 의해 $a^m$과 $b$가 교환되므로, *다*를 $a$ 자리에 $b$를, $b$ 자리에 $a^m$을 넣어 쓰면($b a^m = a^m b$가 가정이 된다) $b^n a^m = a^m b^n$이다.

*마.* 모든 정수 $n$에서 $(ab)^n = a^n b^n$이다. 먼저 $n = k \ge 0$에서 귀납법으로 보인다. $k = 0$이면 $e = ee$이다. $(ab)^k = a^k b^k$라 하면
$$(ab)^{k+1} = (ab)^k(ab) = (a^k b^k)(ab) = a^k\bigl(b^k(ab)\bigr) = a^k\bigl((b^k a)b\bigr) = a^k\bigl((a b^k)b\bigr) = a^k\bigl(a(b^k b)\bigr) = (a^k a)(b^k b) = a^{k+1}b^{k+1}$$
이다. 차례로 거듭제곱의 (2), 귀납 가정, 결합법칙, 결합법칙, *라*($b^k a = a b^k$), 결합법칙, 결합법칙, 거듭제곱의 (2)를 썼다. 다음으로 $n = -k$, $k \ge 0$이라 하자. [[group-basic-properties|군의 기본 성질]]의 (6)에 의해 $(ab)^{-1} = b^{-1}a^{-1}$이고, 같은 성질과 가정에 의해 $a^{-1}b^{-1} = (ba)^{-1} = (ab)^{-1} = b^{-1}a^{-1}$이므로 $b^{-1}$과 $a^{-1}$은 교환된다. 따라서
$$(ab)^{-k} = \bigl((ab)^{-1}\bigr)^k = (b^{-1}a^{-1})^k = (b^{-1})^k(a^{-1})^k = b^{-k}a^{-k} = a^{-k}b^{-k}$$
이다. 차례로 (3), 방금 본 역원, 이미 보인 $k \ge 0$의 경우(교환되는 두 원소 $b^{-1}$, $a^{-1}$에 대해), (3), *라*를 썼다.

$G$가 아벨군이면 모든 $a, b$에서 $ab = ba$이므로 $(ab)^n = a^n b^n$이다.

**(5)** $c = ab$로 두면 [[group-basic-properties|군의 기본 성질]]의 (6)에 의해 $c^{-1} = b^{-1}a^{-1}$이다. (3)을 $c$와 정수 $-n$에 쓰면 $c^{-(-n)} = (c^{-1})^{-n}$, 곧 $c^n = (b^{-1}a^{-1})^{-n}$이다.

**(6)** 덧셈 표기에서 $a^n$은 $n \cdot a$, 곱 $ab$는 $a + b$, 역원 $a^{-1}$은 $-a$이다([[number-groups|수로 이루어진 군]]). (1)은 $m \cdot a + n \cdot a = (m + n) \cdot a$, (2)는 $n \cdot (m \cdot a) = (mn) \cdot a$이고 $mn = nm$이다. (3)은 $-(n \cdot a) = (-n) \cdot a = n \cdot (-a)$이다. 덧셈 표기는 아벨군에만 쓰므로 $a + b = b + a$이고, (4)는 $n \cdot (a + b) = n \cdot a + n \cdot b$이다.
:::

## 예시와 반례

:::example[덧셈으로 쓰는 군에서의 지수법칙]
아벨군 $(\mathbb{Z}_6, +)$에서 (6)을 확인해 봅시다. [[power-in-a-group|군의 거듭제곱]]의 (7)에 의해 $3 \cdot ([1] + [4]) = 3 \cdot [5] = [15] = [3]$이고, $3 \cdot [1] + 3 \cdot [4] = [3] + [12] = [15] = [3]$입니다($15 - 3 = 6 \cdot 2$). 또 $2 \cdot (3 \cdot [4]) = 2 \cdot [12] = [24] = [0]$이고 $(2 \cdot 3) \cdot [4] = 6 \cdot [4] = [24] = [0]$입니다($24 - 0 = 6 \cdot 4$).
:::

:::counterexample[교환되지 않는 두 치환에서 $(ab)^2 \ne a^2b^2$]
$X = \{1, 2, 3\}$이고 $s = \{(1, 2), (2, 1), (3, 3)\}$, $u = \{(1, 1), (2, 3), (3, 2)\}$라 합시다. 세 점에서 값을 계산하면 $s \circ s = i_X$이고 $u \circ u = i_X$입니다. $f \circ f = i_X$인 $f : X \to X$는 $f(x) = f(y)$이면 $x = f(f(x)) = f(f(y)) = y$이므로 [[injective-surjective-bijective|단사]]이고 $y = f(f(y))$이므로 전사여서, $s, u \in S_X$입니다. [[symmetric-group|대칭군]]의 (1)에 의해 $S_X$의 곱은 합성이므로 $s^2 = ss = i_X$, $u^2 = uu = i_X$이고 $s^2u^2 = i_X$입니다.

한편 $su = s \circ u$는 $1$을 $s(u(1)) = s(1) = 2$로, $2$를 $s(u(2)) = s(3) = 3$으로, $3$을 $s(u(3)) = s(2) = 1$로 보냅니다. 따라서 $(su)^2 = (su)(su)$는 $1$을 $(su)(2) = 3$으로 보내고, $3 \ne 1$이므로 $(su)^2 \ne i_X = s^2u^2$입니다. (4)의 가정 $ab = ba$는 뺄 수 없습니다. 실제로 $us$는 $1$을 $u(s(1)) = u(2) = 3$으로 보내므로 $su \ne us$입니다.
:::

## 확인 질문

:::check[군의 원소 $a$가 $a^{12} = e$를 만족하면 $a^{-5}$를 $a$의 $0$ 이상 $11$ 이하인 거듭제곱으로 나타내어라.]
$a^7$입니다. (1)에 의해 $a^{-5} = a^{-5}e = a^{-5}a^{12} = a^{7}$입니다.
:::

:::check[아벨군 $G$의 원소 $a$, $b$가 $a^3 = e$, $b^2 = e$를 만족하면 $(ab)^6$은 무엇인가?]
$e$입니다. (4)에 의해 $(ab)^6 = a^6b^6$이고, (2)에 의해 $a^6 = (a^3)^2 = e^2 = e$, $b^6 = (b^2)^3 = e^3 = e$입니다([[power-in-a-group|군의 거듭제곱]]의 (3)). 따라서 $(ab)^6 = ee = e$입니다.
:::
