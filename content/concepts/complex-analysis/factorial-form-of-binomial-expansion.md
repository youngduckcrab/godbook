---
title: 계승 꼴의 이항 전개
title_en: Binomial Expansion in Factorial Form
aliases: [이항 전개, 이항정리의 계승 꼴, binomial expansion, binomial theorem in factorial form]
kind: lemma
field: complex-analysis
msc: ["30"]
level: undergrad
summary: 0 이상인 정수 n 과 복소수 z, w 에 대하여 (z + w)ⁿ 을 n! 으로 나눈 것은 k = 0 부터 n 까지 z^k/k! 와 w^(n−k)/(n−k)! 의 곱을 더한 것과 같다. 양변에 n! 을 곱한 꼴과, 실수 x, y 에서 같은 등식이 실수의 등식으로 성립한다는 것도 진술한다. 이항계수라는 이름은 쓰지 않는다.
requires: [well-ordering-principle, mathematical-induction, real-number-arithmetic, power-of-a-real-number, series-indexed-from-zero, factorial-from-zero, ring, ring-basic-properties, field, complex-number, complex-field, power-of-a-complex-number, complex-finite-sum]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 2.1절 Mathematical Induction, Example 2.4 (p.18–19), 계승의 정의 (p.19); 2.4절 Exercises 8 (p.24); 8.1절 Error-Detecting and Correcting Codes, Theorem 8.7 의 증명 (p.95); 22.1절 Structure of a Finite Field, Lemma 22.3 (p.278–279)
    checked: original
    note: "Judson 의 Example 2.4(p.18–19)는 실수 a, b 와 자연수 n 에 대하여 이항정리 (a + b)ⁿ = Σ_{k=0}^n \\binom{n}{k} a^k b^{n−k} 를 이항계수 \\binom{n}{k} = n!/(k!(n − k)!) 로 진술하고, 먼저 계승을 통분해 \\binom{n+1}{k} = \\binom{n}{k} + \\binom{n}{k−1} 을 보인 뒤 n 에 대한 귀납법으로 증명한다. n = 1 인 경우는 'easy to verify' 라고만 적는다. 같은 절 p.19 는 양의 정수 n 의 계승만 두 가지로 정의하고(1! = 1, n > 1 에서 n! = n(n − 1)!), Example 2.4 의 k = 0 과 k = n 인 항에는 0! 이 들어간다. 이 항목은 같은 등식을 이항계수라는 이름 없이 양변을 n! 으로 나눈 꼴 (1)로 진술하고, 복소수 z, w 와 n = 0 까지 넓힌다. 증명은 파스칼의 등식 대신 계승의 점화식 (k + 1)((k + 1)!)⁻¹ = (k!)⁻¹ 을 써서, z 를 곱한 합과 w 를 곱한 합을 k = 0 부터 n + 1 까지의 합으로 맞추고 항마다 계수 k 와 n + 1 − k 를 더한다. (2)의 둘째 등식의 계수 n!/(k!(n − k)!) 은 출처가 이항계수를 정의하는 식과 같고, (3)은 n ≥ 1 에서 출처의 진술과 같은 내용이다. 같은 2.4절 연습문제 8(p.24)의 라이프니츠 규칙 (fg)^{(n)} = Σ \\binom{n}{k} f^{(k)} g^{(n−k)} 도 같은 이항계수로 적힌 전개이고, 8.1절 Theorem 8.7 의 증명(p.95)은 같은 식 n!/(k!(n − k)!) 을 'the number of combinations of n things taken k at a time' 이라 부른다. 반례 '계승이나 가운데 항을 빼면 틀리는 예'의 끝의 두 항만 남긴 식 (z + w)ⁿ = zⁿ + wⁿ 은 22.1절 Lemma 22.3(p.278–279, 'Freshman's Dream')이 표수가 소수 p 인 정역에서 지수 p^n 에 대해 성립한다고 증명하는 식과 같은 꼴이고, 그 증명은 n = 1 인 경우에 Example 2.4 를 인용한다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(연속 증명 통독, 예 (2)–(4)에 경계값, 보조정리 n = 0). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수와 허수단위 $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산, 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 복소수의 거듭제곱 $z^k$는 [[power-of-a-complex-number]], $0$부터의 복소수 합 $\sum_{k=0}^{n}$은 [[complex-finite-sum]]의 것이다. $0$ 이상인 정수 $k$의 계승 $k!$은 [[factorial-from-zero|0부터의 계승]]의 것이다. 그 항목의 (3)에 의해 $k!$은 $0$이 아닌 실수이고 [[complex-field]]의 (2)의 (i)에 의해 $\iota(k!) \ne 0$이므로, 복소수 $u$에 대하여 $u / k!$은 $u\,\iota(k!)^{-1}$이다. 실수의 거듭제곱은 [[power-of-a-real-number]], 실수의 $0$부터의 합은 [[series-indexed-from-zero]]의 것이다. 합의 첨자로 $i$를 쓰지 않는다.

$n$을 $0$ 이상인 정수라 하자. $0 \le k \le n$인 정수 $k$에서 $n - k$는 $0$ 이상인 정수이므로, 복소수 $z$, $w$에 대하여
$$
\frac{z^k}{k!} \cdot \frac{w^{n-k}}{(n-k)!}
$$
은 $0 \le k \le n$에서 정해진 복소수이다. 다음이 성립한다.

1. (계승 꼴의 이항 전개) 모든 복소수 $z$, $w$에 대하여
   $$
   \frac{(z + w)^n}{n!} = \sum_{k=0}^{n} \frac{z^k}{k!} \cdot \frac{w^{n-k}}{(n-k)!}
   $$
   이다.
2. (계승을 곱한 꼴) 모든 복소수 $z$, $w$에 대하여
   $$
   \begin{aligned}
   &(z + w)^n \\
   &\quad = n! \sum_{k=0}^{n} \frac{z^k}{k!} \cdot \frac{w^{n-k}}{(n-k)!} \\
   &\quad = \sum_{k=0}^{n} \frac{n!}{k!\,(n-k)!}\, z^k w^{n-k}
   \end{aligned}
   $$
   이다. 여기서 $\frac{n!}{k!\,(n-k)!}$은 실수 $n! \cdot \bigl(k!\,(n-k)!\bigr)^{-1}$이다.
3. (실수판) 모든 실수 $x$, $y$에 대하여
   $$
   \begin{aligned}
   &\frac{(x + y)^n}{n!} \\
   &\quad = \sum_{k=0}^{n} \frac{x^k}{k!} \cdot \frac{y^{n-k}}{(n-k)!}, \\
   &(x + y)^n \\
   &\quad = \sum_{k=0}^{n} \frac{n!}{k!\,(n-k)!}\, x^k y^{n-k}
   \end{aligned}
   $$
   이 실수의 등식으로 성립한다. 여기서 거듭제곱은 실수의 거듭제곱이고 합은 실수의 $0$부터의 합이다. 따라서 (1)과 (2)의 둘째 등식에서 $z$, $w$ 자리에 실수 $x$, $y$를 쓰면, 각 변은 위 실수의 등식의 대응하는 변을 $\iota$로 옮긴 것과 같다.
:::

:::english
Complex numbers and the imaginary unit $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, and the convention for writing real numbers where complex numbers are required are those of the entry on the field of complex numbers; powers $z^k$ of complex numbers are those of their entry; and sums from zero $\sum_{k=0}^{n}$ of complex numbers are those of the entry on finite sums of complex numbers. The factorial $k!$ of an integer $k \ge 0$ is that of the entry on factorials from zero. By item (3) of that entry, $k!$ is a nonzero real number, and by item (2)(i) of the entry on the field of complex numbers $\iota(k!) \ne 0$; so for a complex number $u$, $u / k!$ means $u\,\iota(k!)^{-1}$. Powers of real numbers are those of their entry, and sums from zero of real numbers are those of the entry on sequences indexed from zero. The letter $i$ is not used as a summation index.

Let $n$ be an integer $\ge 0$. For an integer $k$ with $0 \le k \le n$, $n - k$ is an integer $\ge 0$, so for complex numbers $z$, $w$,
$$
\frac{z^k}{k!} \cdot \frac{w^{n-k}}{(n-k)!}
$$
is a complex number defined for $0 \le k \le n$. The following hold.

1. (Binomial expansion in factorial form) For all complex numbers $z$, $w$,
   $$
   \frac{(z + w)^n}{n!} = \sum_{k=0}^{n} \frac{z^k}{k!} \cdot \frac{w^{n-k}}{(n-k)!}.
   $$
2. (Form multiplied by the factorial) For all complex numbers $z$, $w$,
   $$
   \begin{aligned}
   &(z + w)^n \\
   &\quad = n! \sum_{k=0}^{n} \frac{z^k}{k!} \cdot \frac{w^{n-k}}{(n-k)!} \\
   &\quad = \sum_{k=0}^{n} \frac{n!}{k!\,(n-k)!}\, z^k w^{n-k}.
   \end{aligned}
   $$
   Here $\frac{n!}{k!\,(n-k)!}$ is the real number $n! \cdot \bigl(k!\,(n-k)!\bigr)^{-1}$.
3. (Real version) For all real numbers $x$, $y$,
   $$
   \begin{aligned}
   &\frac{(x + y)^n}{n!} \\
   &\quad = \sum_{k=0}^{n} \frac{x^k}{k!} \cdot \frac{y^{n-k}}{(n-k)!}, \\
   &(x + y)^n \\
   &\quad = \sum_{k=0}^{n} \frac{n!}{k!\,(n-k)!}\, x^k y^{n-k}
   \end{aligned}
   $$
   hold as equalities of real numbers, where the powers are powers of real numbers and the sums are sums from zero of real numbers. Hence, if real numbers $x$, $y$ are written in place of $z$, $w$ in (1) and in the second equality of (2), each side is the image under $\iota$ of the corresponding side of the real equalities above.
:::

## 직관

$(z + w)^n$을 곱셈을 풀어 전개하면 $z^k w^{n-k}$ 꼴의 항들이 나오고, 이 항목은 그 계수를 따로 이름 붙이지 않고 양변을 $n!$으로 나눈 꼴로 적습니다. 그러면 $k$번째 항은 $z^k / k!$와 $w^{n-k} / (n-k)!$의 곱이 되어, $z$만 든 인수와 $w$만 든 인수로 갈라집니다. 이 오른쪽은 두 수열 $(z^k / k!)_{k \ge 0}$과 $(w^k / k!)_{k \ge 0}$의 [[cauchy-product-of-complex-series|코시 곱]]의 $n$에서의 값과 같은 꼴입니다.

증명은 $n$에서 $n + 1$로 넘어갈 때 $z + w$를 곱합니다. $z$를 곱한 항 $z \cdot z^k / k!$은 $(k + 1)\, z^{k+1} / (k + 1)!$이 되고, $w$를 곱한 항 $w \cdot w^{n-k} / (n - k)!$은 $(n + 1 - k)\, w^{n+1-k} / (n + 1 - k)!$이 됩니다. 그래서 $n + 1$일 때의 $k$번째 항의 자리에는 $z$ 쪽에서 계수 $k$, $w$ 쪽에서 계수 $n + 1 - k$가 모이고, 그 합은 $k$가 무엇이든 $n + 1$입니다. $n + 1$명이 두 방에 나뉘어 있으면 어떻게 나뉘든 두 방의 인원을 더하면 $n + 1$명인 것과 같습니다. 비유에서 한쪽 방이 비어 있는 경우가 $k = 0$과 $k = n + 1$인 끝의 두 자리이고, 증명에서는 그 자리에 계수 $0$을 곱한 항을 더해 두 합의 범위를 $0$부터 $n + 1$까지로 맞춥니다.

$n = 0$이면 양변이 모두 $1$입니다($0! = 1$이고 $z + w = 0$이어도 $0^0 = 1$). (3)은 같은 등식이 실수 $x$, $y$에서 실수의 등식으로도 성립한다는 것이어서, 실수를 복소수 자리에 써도 두 읽기의 값이 어긋나지 않습니다.

## 증명

:::idea
$(z + w)^n$이 $n!$과 오른쪽 합의 곱이라는 것을 $n$에 대한 귀납법으로 보인다. $n$에서 $n + 1$로 갈 때 합에 $z + w$를 곱하면, 계승의 점화식으로 같은 자리에 모이는 두 계수 $k$와 $n + 1 - k$의 합이 $n + 1$이 된다. 나눗셈은 끝에서 한 번만 한다.
:::

:::hint
오른쪽 합에 $n!$을 곱한 꼴, 곧 (2)의 첫 등식을 $n$에 대한 귀납법으로 보이세요. $n!$으로 나누는 것은 마지막에 한 번만 하면 됩니다.
:::

:::hint
[[factorial-from-zero|0부터의 계승]]의 (4)에 의해 $z \cdot z^k / k! = (k + 1)\, z^{k+1} / (k + 1)!$입니다. $w$ 쪽도 같은 방법으로 쓰고, 두 합을 모두 $k = 0$부터 $n + 1$까지의 합으로 맞춘 뒤 항끼리 더하세요.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "복소수체의 (2)"는 [[complex-field]], "거듭제곱의 (1)"은 [[power-of-a-complex-number]], "유한 합의 (8)"은 [[complex-finite-sum]], "계승의 (1)"은 [[factorial-from-zero]]의 번호이다. 정수의 순서는 [[well-ordering-principle]]의 (Z7)로 다룬다. 복소수체의 (1)에 의해 $\mathbb{C}$는 체이므로, 곱의 순서를 바꾸거나 괄호를 옮기거나 분배하는 곳은 [[ring|환]]의 조건(결합법칙, 분배법칙)과 [[field|체]]의 곱셈의 교환법칙에 의한다.

**진술의 확인.** $0 \le k \le n$이면 (Z7)에 의해 $k \le n$의 양변에서 $k$를 빼서 $0 \le n - k$이므로 $(n - k)!$이 정해진다. 계승의 (3)과 복소수체의 (2)의 (i)에 의해 $\iota(k!)$와 $\iota((n - k)!)$은 $0$이 아니므로 진술의 항은 정해진 복소수이다. $n + 1$에 대해서도 같으므로 $0 \le k \le n + 1$에서 $(n + 1 - k)!$이 정해진다.

여러 번 쓰는 사실:

- (가) 실수 $a$, $b$에서 $\iota(a)\iota(b) = \iota(ab)$이고 $\iota(a) + \iota(b) = \iota(a + b)$이며, $a \ne 0$이면 $\iota(a)^{-1} = \iota(a^{-1})$이다(복소수체의 (2)와 그 (i)).
- (나) $-1$ 이상인 정수 $K$와 $0 \le k \le K$에서 정해진 복소수 $u_k$, 복소수 $c$에 대하여 $\sum_{k=0}^{K} c\,u_k = c \sum_{k=0}^{K} u_k$이다. 유한 합의 (8)로 옮긴 (4)의 첫 등식을 모든 항이 $0$인 합에 쓰면 $\sum (c\,u_k + 0) = c \sum u_k + \sum 0$이고, (4)의 상수의 합과 [[ring-basic-properties|환의 기본 성질]]의 (1)에 의해 $\sum 0 = (K + 1) \cdot 0 = 0$이며, 유한 합의 (8)로 옮긴 (1)에 의해 왼쪽은 $\sum c\,u_k$이다.
- (다) $0$ 이상인 정수 $m$과 복소수 $u$에 대하여
  $$
  u \cdot \frac{u^m}{m!} = (m + 1) \cdot \frac{u^{m+1}}{(m + 1)!}
  $$
  이다. 계승의 (4)의 셋째 등식 $(m + 1)\bigl((m + 1)!\bigr)^{-1} = (m!)^{-1}$을 (가)로 옮기면 $\iota(m + 1)\,\iota((m + 1)!)^{-1} = \iota(m!)^{-1}$이고, 거듭제곱의 (1)에 의해 $u\,u^m = u^{m+1}$이므로 $u\bigl(u^m \iota(m!)^{-1}\bigr) = u^{m+1} \iota(m!)^{-1} = \iota(m + 1)\, u^{m+1} \iota((m + 1)!)^{-1}$이다.

복소수 $z$, $w$를 정하고, $0$ 이상인 정수 $n$과 $0 \le k \le n$인 정수 $k$에 대하여
$$
\begin{aligned}
b_{n,k} &= \frac{z^k}{k!} \cdot \frac{w^{n-k}}{(n-k)!}, \\
B_n &= \sum_{k=0}^{n} b_{n,k}
\end{aligned}
$$
로 둔다.

**(라) $0$ 이상인 모든 정수 $n$에서 $(n + 1) B_{n+1} = (z + w) B_n$이다.** 먼저 $z B_n$을 본다. $0 \le k \le n$에서 (다)를 $u = z$, $m = k$에 쓰면
$$
z\,b_{n,k} = (k + 1) \cdot \frac{z^{k+1}}{(k + 1)!} \cdot \frac{w^{n-k}}{(n-k)!}
$$
이고, (K7)에 의해 $(n + 1) - (k + 1) = n - k$이므로 이것은 $(k + 1)\, b_{n+1,k+1}$이다. $0 \le j \le n + 1$에서 $c_j = j\, b_{n+1,j}$로 두면, (나), 유한 합의 (8)로 옮긴 (1)(항마다 같으면 합이 같다)과 (8)의 $\sum_{n=0}^{K} z_{n+1} = \sum_{n=1}^{K+1} z_n$에 의해
$$
z B_n = \sum_{k=0}^{n} z\,b_{n,k} = \sum_{k=0}^{n} c_{k+1} = \sum_{j=1}^{n+1} c_j
$$
이다. 복소수체의 (2)의 (i)의 $\iota(0) = 0$과 환의 기본 성질의 (1)에 의해 $c_0 = 0 \cdot b_{n+1,0} = 0$이므로, 유한 합의 (8)의 첫 항 떼기($K = n + 1 \ge 0$)에 의해 $\sum_{j=0}^{n+1} c_j = c_0 + \sum_{j=1}^{n+1} c_j = z B_n$이다.

다음으로 $w B_n$을 본다. $0 \le k \le n$에서 $n - k$는 $0$ 이상인 정수이므로 (다)를 $u = w$, $m = n - k$에 쓰면
$$
\begin{aligned}
w\,b_{n,k} &= \frac{z^k}{k!} \cdot (n - k + 1) \\
&\qquad \cdot \frac{w^{n-k+1}}{(n-k+1)!}
\end{aligned}
$$
이고, (K7)에 의해 $n - k + 1 = (n + 1) - k$이므로 이것은 $(n + 1 - k)\, b_{n+1,k}$이다. $0 \le k \le n + 1$에서 $d_k = (n + 1 - k)\, b_{n+1,k}$로 두면 $d_{n+1} = 0 \cdot b_{n+1,n+1} = 0$이므로, (나), 유한 합의 (8)로 옮긴 (1)과 (8)의 끝항 떼기에 의해
$$
\begin{aligned}
w B_n &= \sum_{k=0}^{n} d_k = \sum_{k=0}^{n} d_k + d_{n+1} \\
&= \sum_{k=0}^{n+1} d_k
\end{aligned}
$$
이다.

끝으로 분배법칙과 유한 합의 (8)로 옮긴 (4)의 첫 등식($c = 1$)에 의해 $(z + w) B_n = z B_n + w B_n = \sum_{k=0}^{n+1} (c_k + d_k)$이다. $0 \le k \le n + 1$에서 분배법칙, (가), (K7)에 의해
$$
\begin{aligned}
c_k + d_k &= \iota\bigl(k + (n + 1 - k)\bigr)\, b_{n+1,k} \\
&= (n + 1)\, b_{n+1,k}
\end{aligned}
$$
이므로, 유한 합의 (8)로 옮긴 (1)과 (나)에 의해 $(z + w) B_n = \sum_{k=0}^{n+1} (n + 1)\, b_{n+1,k} = (n + 1) B_{n+1}$이다.

**2의 첫 등식.** $(z + w)^n = n!\, B_n$을 $n$에 대한 시작점이 $0$인 [[mathematical-induction|수학적 귀납법]]으로 보인다. $n = 0$이면 유한 합의 (8)에 의해 $B_0 = b_{0,0}$이고, 거듭제곱의 정의의 $z^0 = w^0 = 1$, 계승의 (1)의 $0! = 1$, 복소수체의 (2)의 (i)의 $\iota(1) = 1$에 의해 $b_{0,0} = (1 \cdot 1^{-1})(1 \cdot 1^{-1}) = 1$이다. 따라서 $0!\, B_0 = 1 = (z + w)^0$이다. $n$에서 성립한다고 하면, 거듭제곱의 정의, 귀납 가정, (라), (가), 계승의 (1)에 의해
$$
\begin{aligned}
(z + w)^{n+1} &= (z + w)^n (z + w) \\
&= n!\,(z + w) B_n \\
&= n!\,(n + 1) B_{n+1} \\
&= (n + 1)!\, B_{n+1}
\end{aligned}
$$
이다.

**1의 증명.** 계승의 (3)과 복소수체의 (2)의 (i)에 의해 $\iota(n!) \ne 0$이다. (2)의 첫 등식의 양변에 $\iota(n!)^{-1}$을 곱하면 $(z + w)^n \iota(n!)^{-1} = B_n$이고, 왼쪽은 $(z + w)^n / n!$이다.

**2의 둘째 등식.** (나)에 의해 $n!\, B_n = \sum_{k=0}^{n} n!\, b_{n,k}$이다. $0 \le k \le n$에서 (가)와 (K12)의 (vi)의 $\bigl(k!\,(n - k)!\bigr)^{-1} = (k!)^{-1}\bigl((n - k)!\bigr)^{-1}$에 의해
$$
\begin{aligned}
n!\, b_{n,k} &= \iota(n!)\,\iota(k!)^{-1} \\
&\qquad \cdot \iota((n - k)!)^{-1} z^k w^{n-k} \\
&= \frac{n!}{k!\,(n-k)!}\, z^k w^{n-k}
\end{aligned}
$$
이므로 유한 합의 (8)로 옮긴 (1)에서 나온다.

**3의 증명.** $x$, $y$를 실수라 하고 $z = \iota(x)$, $w = \iota(y)$에 (1)을 쓴다. 복소수체의 (2)와 거듭제곱의 (5)에 의해 $(\iota(x) + \iota(y))^n = \iota(x + y)^n = \iota((x + y)^n)$이고, (가)에 의해 (1)의 왼쪽은 $\iota\bigl((x + y)^n (n!)^{-1}\bigr)$이다. $0 \le k \le n$에서 실수 $r_k = x^k (k!)^{-1} y^{n-k} \bigl((n - k)!\bigr)^{-1}$로 두면, 같은 이유로 (1)의 오른쪽의 $k$번째 항은 $\iota(r_k)$이고, 유한 합의 (8)로 옮긴 (6)에 의해 오른쪽은 $\iota\bigl(\sum_{k=0}^{n} r_k\bigr)$이다. 오른쪽의 합은 실수의 $0$부터의 합이다. $\iota$는 단사이므로(복소수체의 (2)) 첫째 실수 등식이 성립한다. 둘째 실수 등식도 같은 방법으로 (2)의 $\sum_{k=0}^{n} \frac{n!}{k!\,(n-k)!}\, z^k w^{n-k}$에 $z = \iota(x)$, $w = \iota(y)$를 넣어 $k$번째 항이 $\iota\bigl(\frac{n!}{k!\,(n-k)!}\, x^k y^{n-k}\bigr)$임을 보고 같은 논법을 쓰면 나온다. 마지막 문장은 방금 본 것, 곧 (1)의 양변과 (2)의 둘째 등식의 양변이 각각 실수 등식의 대응하는 변을 $\iota$로 옮긴 것이라는 것이다. $\blacksquare$
:::

## 예시와 반례

:::example[n = 3 이고 z = 2, w = i 인 경우]
$(2 + i)^2 = 4 + 4i + i^2 = 3 + 4i$이고 $(2 + i)^3 = (3 + 4i)(2 + i) = 6 + 3i + 8i + 4i^2 = 2 + 11i$입니다([[power-of-a-complex-number|복소수의 거듭제곱]]의 (6)의 $i^2 = -1$). $3! = 6$이므로 (1)의 왼쪽은 $(2 + 11i)/6 = \frac{1}{3} + \frac{11}{6} i$입니다.

오른쪽의 네 항은 $0! = 1! = 1$, $2! = 2$, $3! = 6$([[factorial-from-zero|0부터의 계승]]의 (1)), $i^3 = -i$, 그리고 거듭제곱의 (5)에 의한 $2^k$(실수의 거듭제곱을 옮긴 것)로 계산합니다.

| $k$ | $\frac{2^k}{k!} \cdot \frac{i^{3-k}}{(3-k)!}$ |
|---|---|
| $0$ | $1 \cdot \frac{-i}{6} = -\frac{1}{6} i$ |
| $1$ | $2 \cdot \frac{-1}{2} = -1$ |
| $2$ | $\frac{4}{2} \cdot i = 2i$ |
| $3$ | $\frac{8}{6} \cdot 1 = \frac{4}{3}$ |

더하면 실수부는 $-1 + \frac{4}{3} = \frac{1}{3}$, 허수부는 $-\frac{1}{6} + 2 = \frac{11}{6}$이어서 왼쪽과 같습니다.
:::

:::example[z + w = 0 인 경우]
$z = 1$, $w = -1$이면 $z + w = 0$입니다. $n \ge 1$이면 [[power-of-a-complex-number|복소수의 거듭제곱]]의 (3)의 (i)에 의해 $0^n = 0$이므로 (1)에 의해
$$
\sum_{k=0}^{n} \frac{1}{k!} \cdot \frac{(-1)^{n-k}}{(n-k)!} = 0
$$
입니다. 예컨대 $n = 2$이면 세 항은 $\frac{1}{2}$, $-1$, $\frac{1}{2}$입니다. $n = 0$이면 $0^0 = 1$이므로 합은 $0$이 아니라 $1$이고, 실제로 항은 $k = 0$인 하나뿐이며 그 값은 $1$입니다.
:::

:::counterexample[계승이나 가운데 항을 빼면 틀리는 예]
$n = 2$, $z = w = 1$이면 (1)의 양변은 $\frac{2^2}{2} = 2$와 $\frac{1}{2} + 1 + \frac{1}{2} = 2$입니다. 계승을 모두 빼고 $\sum_{k=0}^{2} z^k w^{2-k}$를 계산하면 $1 + 1 + 1 = 3$이어서 $(z + w)^2 = 4$와 다릅니다. 끝의 두 항만 남긴 $z^2 + w^2 = 2$도 $4$와 다릅니다. 다만 $n \ge 1$이고 $z = 0$이거나 $w = 0$이면 $0^n = 0$이므로 $(z + w)^n = z^n + w^n$이 성립합니다. $n = 0$이면 $z$, $w$가 무엇이든 $(z + w)^0 = 1$이고 $z^0 + w^0 = 2$입니다.
:::

## 확인 질문

:::check[$\sum_{k=0}^{4} \frac{1}{k!\,(4-k)!}$는 무엇인가?]
(3)의 첫 등식을 $x = y = 1$, $n = 4$에 쓰면 [[power-of-a-real-number|실수의 거듭제곱]]에서 $1^k = 1$이므로 합은 $\frac{(1 + 1)^4}{4!} = \frac{16}{24} = \frac{2}{3}$입니다. 직접 더하면 $\frac{1}{24} + \frac{1}{6} + \frac{1}{4} + \frac{1}{6} + \frac{1}{24} = \frac{1 + 4 + 6 + 4 + 1}{24} = \frac{16}{24}$입니다.
:::

:::check[복소수 $z$와 $0$ 이상인 정수 $n$에서 $\sum_{k=0}^{n} \frac{z^k}{k!} \cdot \frac{z^{n-k}}{(n-k)!}$는 무엇인가?]
(1)을 $w = z$에 쓰면 합은 $\frac{(z + z)^n}{n!}$입니다. 분배법칙으로 $z + z = 2z$이고 [[power-of-a-complex-number|복소수의 거듭제곱]]의 (3)의 (i)과 (5)에 의해 $(2z)^n = 2^n z^n$이므로, 합은 $\frac{2^n}{n!} z^n$입니다. $n = 0$이면 $1$입니다.
:::
