---
title: 이항정리
title_en: Binomial Theorem
aliases: [이항 전개, 신입생의 꿈, 프로베니우스 등식, binomial theorem, binomial expansion, freshman's dream]
kind: theorem
field: ring-theory
msc: ["13", "05A10"]
level: undergrad
summary: 단위원을 갖는 가환환에서 (a + b)ⁿ 을 이항계수를 정수배로 붙인 유한 합으로 펼친다. 표수가 소수 p 이면 (a + b)ᵖ = aᵖ + bᵖ 와 (a − b)ᵖ = aᵖ − bᵖ 이고, 지수가 p 의 거듭제곱이어도 같다.
requires: [mathematical-induction, prime-number, well-ordering-principle, even-and-odd, divisibility, prime-power-divisors, power-in-a-group, laws-of-exponents, ring, ring-basic-properties, ring-examples, integers-modulo-n, finite-sums-in-a-ring, finite-products-in-a-commutative-ring, characteristic-of-a-ring, binomial-coefficient]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "2.1절 Mathematical Induction, Example 2.4 (p.18–19); 22.1절 Structure of a Finite Field, Lemma 22.3 과 그 증명 (p.278–279); 22.4절 Exercises, 연습문제 14 (p.290); 16.7절 Exercises, 연습문제 27 (p.206)"
    checked: original
    note: "(1)은 출처 Example 2.4(p.18–19)의 이항정리 (a + b)^n = Σ_{k=0}^n \\binom{n}{k} a^k b^{n−k} 를 실수 a, b 에서 단위원을 갖는 가환환의 원소로 넓히고, 지수를 0 이상인 정수로 넓힌 것이다(출처는 자연수 n). 계수는 이항계수의 정수배로 읽는다. 증명은 출처와 같이 n 에 대한 귀납법과 파스칼 규칙이고, 출처가 a^{n+1} 과 b^{n+1} 을 따로 떼어 쓰는 곳을 이 항목은 범위 밖의 이항계수가 0 이라는 것(binomial-coefficient (2))으로 한 번에 묶는다. (2)는 출처 Lemma 22.3(Freshman's Dream, p.278–279)의 n = 1 단계이고, (3)의 첫 등식은 Lemma 22.3 이다. 출처는 표수 p 인 정역을 가정하지만 이 항목은 표수 p 인 단위원을 갖는 가환환에서 진술한다(증명이 영인자가 없다는 것을 쓰지 않는다). (2)와 (3)의 뺄셈 꼴은 출처 연습문제 22.4.14(p.290) '(a − b)^{p^n} = a^{p^n} − b^{p^n}' 과 같은 내용이다. 확인 질문 '$a^2 = 0$, $b^2 = 0$이면 $(a + b)^3$은 무엇인가?' 는 연습문제 16.27(p.206, 가환환의 멱영원 전체는 아이디얼이다)에서 쓰는 '멱영원의 합의 거듭제곱'과 같은 발상이다."
status: reviewed
review_note: "2026-11-27 자기 검토(docs/self-review.md)와 지휘자의 확인(이항계수 (5)(6) 과 표수 (3) 에 경계값, 2·7단원 경로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-27
---

:::statement
$R$이 단위원 $1$을 갖는 가환환([[ring|환]]의 뜻)이고 $a$, $b \in R$이라 하자. 거듭제곱 $a^k$는 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]], 합의 기호 $\sum_{k=m}^{n}$은 [[finite-sums-in-a-ring|환의 유한 합]], 정수배 $q \cdot x$는 [[ring|환]], 이항계수 $C(n, k)$는 [[binomial-coefficient|이항계수]], 표수 $\operatorname{char} R$는 [[characteristic-of-a-ring|환의 표수]]의 것이다. $0 \le k \le n$이면 $n - k$는 $0$ 이상인 정수이므로 $C(n, k) \cdot (a^k b^{n-k})$는 $0 \le k \le n$에서 정해진 $R$의 원소이다.

1. (이항정리) $0$ 이상인 모든 정수 $n$에 대하여
   $$
   (a + b)^n = \sum_{k=0}^{n} C(n, k) \cdot (a^k b^{n-k})
   $$
   이다.
2. (표수가 소수인 환) $\operatorname{char} R = p$이고 $p$가 소수이면
   $$
   \begin{aligned}
   (a + b)^p &= a^p + b^p, \\
   (a - b)^p &= a^p - b^p
   \end{aligned}
   $$
   이다.
3. (지수가 $p$의 거듭제곱) (2)와 같은 가정 아래 $0$ 이상인 모든 정수 $r$에 대하여
   $$
   \begin{aligned}
   (a + b)^{p^r} &= a^{p^r} + b^{p^r}, \\
   (a - b)^{p^r} &= a^{p^r} - b^{p^r}
   \end{aligned}
   $$
   이다. 여기서 지수 $p^r$은 [[prime-power-divisors|소수의 거듭제곱인 약수]]의 정수의 거듭제곱이다.
:::

:::english
Let $R$ be a commutative ring with unity $1$ (in the sense of the entry on rings) and let $a$, $b \in R$. Powers $a^k$ are those of the entry on finite products and powers in a commutative ring, the summation notation $\sum_{k=m}^{n}$ is that of the entry on finite sums in a ring, integer multiples $q \cdot x$ are those of the entry on rings, binomial coefficients $C(n, k)$ are those of the entry on binomial coefficients, and the characteristic $\operatorname{char} R$ is that of the entry on the characteristic of a ring. If $0 \le k \le n$, then $n - k$ is an integer $\ge 0$, so $C(n, k) \cdot (a^k b^{n-k})$ is an element of $R$ given for $0 \le k \le n$.

1. (Binomial theorem) For every integer $n \ge 0$,
   $$
   (a + b)^n = \sum_{k=0}^{n} C(n, k) \cdot (a^k b^{n-k}).
   $$
2. (Rings of prime characteristic) If $\operatorname{char} R = p$ with $p$ prime, then
   $$
   \begin{aligned}
   (a + b)^p &= a^p + b^p, \\
   (a - b)^p &= a^p - b^p.
   \end{aligned}
   $$
3. (Exponents that are powers of $p$) Under the hypothesis of (2), for every integer $r \ge 0$,
   $$
   \begin{aligned}
   (a + b)^{p^r} &= a^{p^r} + b^{p^r}, \\
   (a - b)^{p^r} &= a^{p^r} - b^{p^r},
   \end{aligned}
   $$
   where the exponent $p^r$ is the integer power of the entry on prime power divisors.
:::

## 직관

$(a + b)^n$은 $(a + b)$를 $n$번 곱한 것입니다. 하나씩 곱해 나갈 때마다 지금까지의 각 항에 $a$를 곱한 것과 $b$를 곱한 것이 생기고, $a^k b^{n+1-k}$ 꼴의 항은 "$a^{k-1}b^{n+1-k}$에 $a$를 곱한 것"과 "$a^k b^{n-k}$에 $b$를 곱한 것"의 두 곳에서 옵니다. 그래서 계수는 윗줄의 두 계수의 합이 되고, 이것이 파스칼 규칙과 정확히 맞습니다. 증명이 바로 이 셈입니다.

계수 $C(n, k)$는 정수이고 $R$의 원소가 아니므로 정수배로 붙입니다. 표수가 소수 $p$인 환에서는 $p \cdot x = 0$이고, $p$째 줄의 양 끝을 뺀 이항계수가 모두 $p$의 배수이므로 가운데 항이 모두 사라집니다. 그래서 $(a + b)^p = a^p + b^p$가 됩니다. 정수나 실수에서는 $(1 + 1)^2 = 4 \ne 2 = 1^2 + 1^2$이므로 이런 일이 일어나지 않습니다. (2)는 표수에 기대는 등식입니다.

뺄셈 꼴은 $-b$를 $b$ 자리에 넣어 얻는데, $(-b)^p$가 $-(b^p)$인지는 $p$가 홀수인지에 달려 있습니다. $p = 2$이면 $(-b)^2 = b^2$이지만, 표수가 $2$인 환에서는 $b^2 = -b^2$이므로 결과는 같습니다.

## 증명

:::idea
(1)은 $n$에 대한 귀납법이다. $(a + b)$를 곱해 생긴 두 합의 번호를 맞추고, 범위 밖의 이항계수가 $0$이라는 것으로 두 합의 범위를 같게 한 뒤 파스칼 규칙으로 묶는다. (2)는 (1)과 $p \mid C(p, k)$이고, (3)은 $r$에 대한 귀납법이다.
:::

:::hint
$a \cdot \bigl(C(n, k) \cdot (a^k b^{n-k})\bigr) = C(n, k) \cdot (a^{k+1} b^{n-k})$이다. 이 합을 번호를 하나 옮겨 $k = 1$부터 $n + 1$까지의 합으로 쓴다.
:::

:::hint
(2)의 뺄셈 꼴에서 $p$가 짝수인 소수이면 $p = 2$이다. 그때 $2 \cdot b^2 = 0$을 쓴다.
:::

:::proof
**쓰는 사실.** "합의 (n)"은 [[finite-sums-in-a-ring|환의 유한 합]], "곱의 (n)"은 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]], "계수의 (n)"은 [[binomial-coefficient|이항계수]], "표수의 (n)"은 [[characteristic-of-a-ring|환의 표수]]의 (n)이다. 정수배의 계산은 [[ring-basic-properties|환의 기본 성질]]의 (5) $(q \cdot x)y = q \cdot (xy) = x(q \cdot y)$와 [[laws-of-exponents|지수법칙]]의 (6) $q \cdot x + q' \cdot x = (q + q') \cdot x$, $q \cdot (q' \cdot x) = (qq') \cdot x$, 그리고 [[power-in-a-group|군의 거듭제곱]]의 (4) $0 \cdot x = 0$, $1 \cdot x = x$를 쓴다. 귀납법은 [[mathematical-induction|수학적 귀납법]](시작점 $0$)이다. 정수의 순서와 계산은 [[prime-number]]의 (Z1), [[well-ordering-principle]]의 (Z5)–(Z7)과 그 진술의 계산 법칙, [[even-and-odd]]의 받아들인 사실을 쓴다.

**1의 증명.** $n = 0$이면 왼쪽은 곱의 (6)의 (i)에 의해 $1$이고, 오른쪽은 합의 (1)에 의해 $C(0, 0) \cdot (a^0 b^0) = 1 \cdot (1 \cdot 1) = 1$이다.

$n$에서 성립한다고 하자. $0 \le k \le n + 1$에서 $x_k = a^k b^{n+1-k}$로 둔다. $0 \le k \le n$이면 곱의 (6)의 (i), (ii)와 교환법칙, 결합법칙에 의해 $a \cdot a^k b^{n-k} = x_{k+1}$이고 $b \cdot a^k b^{n-k} = x_k$이므로, 환의 기본 성질의 (5)에 의해
$$
\begin{aligned}
&a \bigl(C(n, k) \cdot (a^k b^{n-k})\bigr) \\
&\quad = C(n, k) \cdot x_{k+1}, \\
&b \bigl(C(n, k) \cdot (a^k b^{n-k})\bigr) \\
&\quad = C(n, k) \cdot x_k
\end{aligned}
$$
이다. 곱의 (6)의 (i), 귀납 가정, 분배법칙, 합의 (9)와 (3)에 의해
$$
\begin{aligned}
(a + b)^{n+1} &= (a + b)(a + b)^n \\
&= \sum_{k=0}^{n} C(n, k) \cdot x_{k+1} \\
&\qquad + \sum_{k=0}^{n} C(n, k) \cdot x_k
\end{aligned}
$$
이다. 이 두 합을 $S_1$, $S_2$라 하자.

합의 (5)를 $t = 1$에서 쓰면 $S_1 = \sum_{k=1}^{n+1} C(n, k - 1) \cdot x_k$이다. 계수의 (2)에 의해 $C(n, -1) = 0$이므로 $C(n, 0 - 1) \cdot x_0 = 0$이고, 합의 (2)의 둘째 등식에 의해 $\sum_{k=0}^{n+1} C(n, k - 1) \cdot x_k = 0 + S_1 = S_1$이다. 또 계수의 (2)에 의해 $C(n, n + 1) = 0$이므로, 합의 (2)의 첫 등식에 의해 $\sum_{k=0}^{n+1} C(n, k) \cdot x_k = S_2 + 0 = S_2$이다. 따라서 합의 (6)의 (i), 지수법칙의 (6), 파스칼 규칙(계수의 정의)에 의해
$$
\begin{aligned}
S_1 + S_2 &= \sum_{k=0}^{n+1} \bigl(C(n, k - 1) \\
&\qquad\qquad + C(n, k)\bigr) \cdot x_k \\
&= \sum_{k=0}^{n+1} C(n + 1, k) \cdot x_k
\end{aligned}
$$
이고, 이것이 $n + 1$에서의 등식이다.

**2의 증명.** 표수의 (6)에 의해 모든 $x \in R$에서 $p \cdot x = 0$이다. (1)을 $n = p$에 쓰고 $y_k = C(p, k) \cdot (a^k b^{p-k})$라 하자. $p \ge 2$이므로 합의 (2)의 두 등식에 의해 $\sum_{k=0}^{p} y_k = y_0 + \sum_{k=1}^{p-1} y_k + y_p$이다. $1 \le k \le p - 1$이면 계수의 (5)에 의해 $C(p, k) = p \cdot c$인 정수 $c$가 있고(정수의 곱), 지수법칙의 (6)에 의해 $y_k = (cp) \cdot (a^k b^{p-k}) = c \cdot \bigl(p \cdot (a^k b^{p-k})\bigr) = c \cdot 0 = 0$이다(군의 거듭제곱의 (3)). 합의 (6)의 (iv)와 (3)에 의해 가운데 합은 $0$이다. 계수의 (2)에 의해 $C(p, 0) = C(p, p) = 1$이므로 $y_0 = b^p$, $y_p = a^p$이다(곱의 (6)의 (i)). 따라서 $(a + b)^p = b^p + 0 + a^p = a^p + b^p$이다.

뺄셈 꼴: 앞의 결과를 $a$와 $-b$에 쓰면 $(a - b)^p = a^p + (-b)^p$이다. $(-b)^p = -(b^p)$임을 보이면 된다. [[even-and-odd]]에 의해 $p$는 홀수이거나 짝수이다. $p = 2q + 1$이면 환의 기본 성질의 (6)에 의해 $(-b) = (-1)b$이고 $(-1)(-1) = 1$이므로, 곱의 (6)의 (ii)–(v)에 의해 $(-b)^p = (-1)^p b^p = \bigl((-1)^2\bigr)^q (-1)\, b^p = 1^q (-1) b^p = -(b^p)$이다. $p$가 짝수이면 $2 \mid p$이고 $2$는 $p$의 양의 약수이므로, 소수의 정의에 의해 $2 = p$이다. 그때 $(-b)^2 = b^2$이고(곱의 (6)의 (iv)와 $(-1)(-1) = 1$), $b^2 + b^2 = 2 \cdot b^2 = 0$이므로 $b^2 = -(b^2)$이다.

**3의 증명.** $r$에 대한 귀납법. $r = 0$이면 [[prime-power-divisors|소수의 거듭제곱인 약수]]의 정의에 의해 $p^0 = 1$이고 곱의 (6)의 (i)에 의해 두 등식은 $a + b = a + b$, $a - b = a - b$이다. $r$에서 성립하면, 같은 항목의 (1)의 (i)에 의해 $p^{r+1} = p^r \cdot p$이므로 곱의 (6)의 (iii), 귀납 가정, (2)에 의해
$$
\begin{aligned}
(a + b)^{p^{r+1}} &= \bigl((a + b)^{p^r}\bigr)^p \\
&= \bigl(a^{p^r} + b^{p^r}\bigr)^p \\
&= \bigl(a^{p^r}\bigr)^p + \bigl(b^{p^r}\bigr)^p \\
&= a^{p^{r+1}} + b^{p^{r+1}}
\end{aligned}
$$
이다. 뺄셈 꼴도 같은 계산에서 (2)의 뺄셈 꼴을 쓰면 된다. 곧 $(a - b)^{p^{r+1}} = \bigl(a^{p^r} - b^{p^r}\bigr)^p = \bigl(a^{p^r}\bigr)^p - \bigl(b^{p^r}\bigr)^p = a^{p^{r+1}} - b^{p^{r+1}}$이다.
:::

## 예시와 반례

:::example[세제곱의 전개]
$n = 3$이면 [[binomial-coefficient|이항계수]]의 셋째 줄 $1, 3, 3, 1$에 의해 $(a + b)^3 = b^3 + 3 \cdot (ab^2) + 3 \cdot (a^2 b) + a^3$입니다. 환 $\mathbb{Z}$에서 $a = 2$, $b = -1$이면 왼쪽은 $1^3 = 1$이고, 오른쪽은 $-1 + 3 \cdot 2 + 3 \cdot (-4) + 8 = -1 + 6 - 12 + 8 = 1$입니다.
:::

:::example[법 3의 정수에서 세제곱]
$\mathbb{Z}_3$의 표수는 $3$이므로([[characteristic-of-a-ring|환의 표수]]의 (4)) (2)에 의해 $([1] + [2])^3 = [1]^3 + [2]^3$입니다. 실제로 왼쪽은 $[3]^3 = [0]^3 = [0]$이고, 오른쪽은 $[1] + [8] = [9] = [0]$입니다. 전개의 가운데 항 $3 \cdot ([1][2]^2)$와 $3 \cdot ([1]^2[2])$는 $3 \cdot x = [0]$이어서 사라집니다.
:::

:::counterexample[표수가 소수가 아니면 가운데 항이 남을 수 있다]
$\mathbb{Z}_4$의 표수는 $4$입니다. $([1] + [1])^2 = [2]^2 = [4] = [0]$이지만 $[1]^2 + [1]^2 = [2] \ne [0]$입니다. 가운데 항 $C(2, 1) \cdot ([1][1]) = 2 \cdot [1] = [2]$가 남기 때문입니다. 또 $\mathbb{Z}_4$에서 $([1] + [1])^4 = [16] = [0]$이고 $[1]^4 + [1]^4 = [2]$이므로, 지수를 $4$로 바꾸어도 같은 꼴의 등식은 성립하지 않습니다.
:::

## 확인 질문

:::check[$a^2 = 0$, $b^2 = 0$이면 $(a + b)^3$은 무엇인가?]
$0$입니다. (1)에 의해 $(a + b)^3 = \sum_{k=0}^{3} C(3, k) \cdot (a^k b^{3-k})$이고, 각 항에서 $k \ge 2$이거나 $3 - k \ge 2$이므로 $a^k$나 $b^{3-k}$에 $a^2 = 0$이나 $b^2 = 0$이 곱해져 $0$이 됩니다(가환환의 유한 곱의 (6)의 (ii)). 따라서 모든 항이 $0$입니다.
:::

:::check[표수가 $5$인 가환환에서 $(a + b)^{25}$를 간단히 하면?]
$a^{25} + b^{25}$입니다. (3)을 $p = 5$, $r = 2$에 쓴 것입니다.
:::
