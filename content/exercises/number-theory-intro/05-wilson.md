---
written_by: Claude
status: reviewed
sources:
  - ref: stein-elementary-number-theory
    loc: "1.2.1절, Theorem 1.2.1 (Euclid) 의 증명 (p.11) — 문제 'n! + 1의 약수'의 2와 같은 발상(곱에 1 을 더한 수의 소인수는 그 곱을 나누는 수일 수 없다)"
  - ref: hammack-book-of-proof
    loc: "6.1절 Proving Statements with Contradiction, 소수가 무한히 많다는 명제의 증명 (p.140) — 문제 'n! + 1의 약수'의 2와 같은 발상"
  - ref: stein-elementary-number-theory
    loc: "2.6절, 연습문제 2.12 의 풀이 (Answers and Hints, p.150) — 문제 '짝을 거듭제곱으로 구하기'와 같은 발상(거듭제곱 하나가 법 p 의 역원이다)"
  - ref: stein-elementary-number-theory
    loc: "5.7절, Theorem 5.7.1 의 (⇐) 증명 (p.120) — 문제 '법 13에서 제곱이 −1과 합동인 수'의 3과 같은 결론(4 로 나눈 나머지가 1 인 소수 p 에서 r² ≡ −1 (mod p) 인 정수 r 이 있다). 출처는 Proposition 4.2.1 로 얻고 이 문제는 p = 13 에서 윌슨 정리로 얻는다"
  - ref: stein-elementary-number-theory
    loc: "1.3절, 연습문제 1.13 (a)와 그 힌트 (p.20) — 문제 '법 13에서 제곱이 −1과 합동인 수'의 4와 같은 발상(나머지마다 제곱의 나머지를 구해 어떤 꼴이 제곱이 될 수 없음을 보인다)"
added: 2026-11-26
---

:::exercise[n! + 1의 약수]
$n$이 자연수라 하자.

1. $d$가 $n! + 1$의 양의 약수이고 $d \ge 2$이면 $d > n$임을 증명하라.
2. $n$보다 큰 소수가 있음을 증명하라.
:::

:::solution
[[prime-number|소수]]의 진술의 (Z1)과 [[well-ordering-principle|정렬 원리]]의 진술의 (Z5)–(Z7), (L1)을 쓰고, 정수끼리의 합과 차가 정수라는 것은 [[even-and-odd|짝수와 홀수]]에서 받아들인 사실을 쓴다.

**1.** [[factorial|계승]]의 2에 의해 $n!$은 양의 정수이므로 (Z1)에 의해 $n! \ge 1$이고, (Z7)에 의해 $n! + 1 \ge 2$이다. 따라서 $n! + 1$은 자연수이다.

$d \le n$이라고 가정하자. $1 < 2 \le d$에서 (Z6)에 의해 $1 < d$이므로 $1 \le d$이고, 계승의 2에 의해 $d \mid n!$이다. $n! = du$, $n! + 1 = dv$인 정수 $u$, $v$가 있고, 빼면 $1 = d(v - u)$이므로 $d \mid 1$이다. $d$는 자연수 $1$의 양의 약수이므로 소수의 진술에 의해 $d \le 1$이다. 그런데 $1 < d$이고, 이는 (L1)에 의해 $d \le 1$과 함께 성립할 수 없다. 따라서 $d \le n$이 아니고, (Z5)에 의해 $d > n$이다.

**2.** $N = n! + 1$은 $2$ 이상인 정수이므로 [[prime-factorization-exists|소인수분해의 존재]]에 의해 $N = p_1 p_2 \cdots p_\ell$인 소수 $p_1, \dots, p_\ell$($\ell \ge 1$)이 있다. [[finite-product|유한 곱]]의 (P4)에 의해 $p_1 \mid N$이다. $p_1$은 소수이므로 $1$과 $p_1$이 서로 다른 두 양의 약수이고 $p_1 \ne 1$이며, (Z1)에 의해 $p_1 \ge 1$이므로 $p_1 > 1$이고 다시 (Z1)에 의해 $p_1 \ge 2$이다. 따라서 $p_1$은 $N$의 양의 약수이고 $p_1 \ge 2$이므로 1에 의해 $p_1 > n$이다. $p_1$이 $n$보다 큰 소수이다.

예를 들어 $n = 4$이면 $4! + 1 = 25 = 5 \cdot 5$이고, $25$의 약수 $5$는 1이 말하는 대로 $4$보다 크다.
:::

:::exercise[짝을 거듭제곱으로 구하기]
1. $p$가 $p \ge 3$인 소수이고 $a \in \{1, \dots, p - 1\}$이면, $a$의 짝 $a^*$([[inverse-pairing-modulo-p|법 p에서 역원의 짝]])는 $a^{p-2}$를 $p$로 나눈 나머지임을 증명하라.
2. $13$이 소수임을 보이고, 1의 방법으로 법 $13$에서 $4^*$를 구하라.
:::

:::solution
[[prime-number|소수]]의 진술의 (Z1)과 [[well-ordering-principle|정렬 원리]]의 진술의 (Z5)–(Z7), (L1)을 쓴다. 합동의 반사성·대칭성·추이성은 [[congruence-is-an-equivalence-relation|합동은 동치관계이다]]에서 쓴다. 다음 사실을 먼저 적어 둔다.

(☆) 정수 $a$와 자연수 $k$에 대하여 $a^{k+1} = a^k \cdot a$이다. 거듭제곱 $a^{k+1}$은 [[congruence-arithmetic|합동은 덧셈, 곱셈과 양립한다]]의 진술에서 정한 대로 모든 자리가 $a$인 길이 $k + 1$인 열의 곱이고, [[finite-product|유한 곱]]의 정의의 둘째 줄에 의해 처음 $k$개로 이루어진 열(모든 자리가 $a$인 길이 $k$인 열)의 곱 $a^k$에 마지막 항 $a$를 곱한 것이다.

**1.** $p \ge 3$이므로 (Z7)에 의해 $p - 2 \ge 1$이고 $p - 2$는 자연수이다. [[euler-phi-function|오일러 피 함수]]의 4에 의해 $a \in \{1, \dots, p - 1\} = P_p$이므로 $\gcd(a, p) = 1$이다. $p \mid a$라면 $p \mid p$이므로 $p$는 $a$와 $p$의 공약수이고, [[greatest-common-divisor|최대공약수]]의 정의의 조건 2에 의해 $p \le 1$이 되어 $1 < 3 \le p$((Z6))와 (L1)에 어긋난다. 따라서 $p \nmid a$이고 [[fermats-little-theorem|페르마의 소정리]]의 1에 의해 $a^{p-1} \equiv 1 \pmod p$이다.

$r$을 $a^{p-2}$를 $p$로 나눈 나머지라 하면 [[residues-modulo-n|법 n에 대한 나머지]]의 1에 의해 $a^{p-2} \equiv r \pmod p$이고 $0 \le r \le p - 1$이다. 대칭성에 의해 $r \equiv a^{p-2}$이고 $a \equiv a$이므로 합동은 덧셈, 곱셈과 양립한다의 2에 의해 $ar \equiv a \cdot a^{p-2} \pmod p$이고, 곱셈의 교환법칙과 (☆)에 의해 $a \cdot a^{p-2} = a^{p-2} \cdot a = a^{p-1} \equiv 1$이다. 추이성에 의해 $ar \equiv 1 \pmod p$이다.

$r = 0$이라면 $ar = 0$이므로 $0 \equiv 1 \pmod p$, 곧 $p \mid (0 - 1)$이다. $-1 = pc$인 정수 $c$가 있고 $1 = p(-c)$이므로 $p \mid 1$이며, 소수의 진술에 의해 $p \le 1$이 되어 위와 같이 어긋난다. 따라서 $r \ne 0$이고 $0 \le r$이므로 $0 < r$이며, (Z1)에 의해 $1 \le r$이다. 곧 $r \in \{1, \dots, p - 1\}$이고 $ar \equiv 1 \pmod p$이므로, 법 p에서 역원의 짝의 1(그런 수는 $a^*$ 하나뿐이다)에 의해 $r = a^*$이다.

$p \ge 3$은 $p - 2$가 자연수가 되게 하는 데 쓰였다. $p = 2$이면 $a^0$은 정의되어 있지 않다.

**2.** *$13$은 소수이다.* $13$의 양의 약수 $d$는 소수의 진술에 의해 $1 \le d \le 13$이다.
$$
\begin{aligned}
13 &= 2 \cdot 6 + 1 = 3 \cdot 4 + 1 \\
&= 4 \cdot 3 + 1 = 5 \cdot 2 + 3 \\
&= 6 \cdot 2 + 1 = 7 \cdot 1 + 6 \\
&= 8 \cdot 1 + 5 = 9 \cdot 1 + 4 \\
&= 10 \cdot 1 + 3 = 11 \cdot 1 + 2 \\
&= 12 \cdot 1 + 1
\end{aligned}
$$
이다. $2 \le d \le 12$인 $d$가 $13$을 나눈다면 $13 = dc = cd + 0$이므로 [[division-theorem|나눗셈 정리]]의 유일성에 의해 위의 나머지가 $0$이어야 하는데 모두 $0$이 아니다. 따라서 $13$의 양의 약수는 $1$과 $13$뿐이고 $13$은 소수이다.

$13 \ge 3$이고 $4 \in \{1, \dots, 12\}$이므로 1에 의해 $4^*$는 $4^{11}$을 $13$으로 나눈 나머지이다. $4^k \equiv s \pmod{13}$이면 (☆)과 합동은 덧셈, 곱셈과 양립한다의 2에 의해 $4^{k+1} = 4^k \cdot 4 \equiv s \cdot 4$이고, $x = 13q + s'$이면 $x \equiv s'$이므로, 추이성을 써서 차례로
$$
\begin{aligned}
4^2 &\equiv 4 \cdot 4 = 16 = 1 \cdot 13 + 3, \\
4^3 &\equiv 3 \cdot 4 = 12, \\
4^4 &\equiv 12 \cdot 4 = 48 = 3 \cdot 13 + 9, \\
4^5 &\equiv 9 \cdot 4 = 36 = 2 \cdot 13 + 10, \\
4^6 &\equiv 10 \cdot 4 = 40 = 3 \cdot 13 + 1, \\
4^7 &\equiv 1 \cdot 4 = 4, \\
4^8 &\equiv 4 \cdot 4 = 16 = 1 \cdot 13 + 3, \\
4^9 &\equiv 3 \cdot 4 = 12, \\
4^{10} &\equiv 12 \cdot 4 = 48 = 3 \cdot 13 + 9, \\
4^{11} &\equiv 9 \cdot 4 = 36 = 2 \cdot 13 + 10
\end{aligned}
$$
을 얻는다. 곧 $4^{11} \equiv 10 \pmod{13}$이고 $0 \le 10 \le 12$이므로 나머지는 $10$이다. 따라서 $4^* = 10$이다. 실제로 $4 \cdot 10 = 40 = 3 \cdot 13 + 1$이다.
:::

:::exercise[(p − 3)!의 나머지]
1. $p$가 $p \ge 5$인 소수이면 $2 \cdot (p - 3)! \equiv -1 \pmod p$임을 증명하라.
2. 1을 써서 $10!$을 $13$으로 나눈 나머지를 구하라.
:::

:::solution
[[well-ordering-principle|정렬 원리]]의 진술의 (Z7)을 쓰고, 합동의 반사성·대칭성·추이성은 [[congruence-is-an-equivalence-relation|합동은 동치관계이다]]에서 쓴다. 정수의 곱셈의 교환·결합법칙과 음수의 계산은 정렬 원리의 진술에서 받아들인 계산 법칙이다.

**1.** $p \ge 5$이므로 (Z7)에 의해 $p - 3 \ge 2$이고, $p - 3$과 $p - 2$는 자연수이다. [[factorial|계승]]의 1을 $n = p - 3$과 $n = p - 2$에 쓰면
$$
\begin{aligned}
(p - 2)! &= (p - 3)! \cdot (p - 2), \\
(p - 1)! &= (p - 2)! \cdot (p - 1)
\end{aligned}
$$
이다. $(p - 2) - (-2) = p$, $(p - 1) - (-1) = p$이므로 [[congruence-modulo-n|합동]]의 정의에 의해 $p - 2 \equiv -2$, $p - 1 \equiv -1 \pmod p$이다. [[congruence-arithmetic|합동은 덧셈, 곱셈과 양립한다]]의 2를 두 번 쓰면
$$
\begin{aligned}
(p - 1)! &= \bigl((p - 3)!\,(p - 2)\bigr)(p - 1) \\
&\equiv \bigl((p - 3)!\,(-2)\bigr)(-1) \\
&= 2 \cdot (p - 3)! \pmod p
\end{aligned}
$$
이다. [[wilson-theorem|윌슨 정리]]의 1에 의해 $(p - 1)! \equiv -1 \pmod p$이므로, 대칭성과 추이성에 의해 $2 \cdot (p - 3)! \equiv -1 \pmod p$이다.

$p \ge 5$는 $(p - 3)!$이 정의되게 하는 데 쓰였다. $p = 3$이면 $(p - 3)! = 0!$인데 계승은 자연수에서만 정의되어 있다.

**2.** 문제 2의 2에서 $13$은 소수이고 $13 \ge 5$이므로 1에 의해 $2 \cdot 10! \equiv -1 \pmod{13}$이다. $12 - (-1) = 13$이므로 $-1 \equiv 12 = 6 \cdot 2$이고, 교환법칙과 추이성에 의해 $10! \cdot 2 \equiv 6 \cdot 2 \pmod{13}$이다.

$g = \gcd(2, 13)$이면 $g$는 $2$와 $13$의 공약수이므로 $2 = gv$, $13 = gu$인 정수 $u$, $v$가 있고 $1 = 13 - 6 \cdot 2 = g(u - 6v)$이어서 $g \mid 1$이다. [[greatest-common-divisor|최대공약수]]의 (i)에 의해 $g \ge 1$이고, $g$는 자연수 $1$의 양의 약수이므로 [[prime-number|소수]]의 진술에 의해 $g \le 1$이다. 정렬 원리의 진술의 (L2)에 의해 $g = 1$이다. [[congruence-cancellation|합동식의 소거 법칙]]에 의해 $10! \equiv 6 \pmod{13}$이고, $0 \le 6 \le 12$이므로 [[residues-modulo-n|법 n에 대한 나머지]]의 1에 의해 구하는 나머지는 $6$이다.

직접 보아도 $10! = 3628800 = 279138 \cdot 13 + 6$이다.
:::

:::exercise[a의 p제곱과 (p − 1)!]
$p$가 소수이고 $a$가 정수이면 $p \mid \bigl(a^p \cdot (p - 1)! + a\bigr)$임을 증명하라.
:::

:::solution
[[fermats-little-theorem|페르마의 소정리]]의 2에 의해 $a^p \equiv a \pmod p$이고, [[wilson-theorem|윌슨 정리]]의 1에 의해 $(p - 1)! \equiv -1 \pmod p$이다. [[congruence-arithmetic|합동은 덧셈, 곱셈과 양립한다]]의 2에 의해
$$
\begin{aligned}
a^p \cdot (p - 1)! &\equiv a \cdot (-1) \\
&= -a \pmod p
\end{aligned}
$$
이다. [[congruence-is-an-equivalence-relation|합동은 동치관계이다]]의 1에 의해 $a \equiv a$이므로 합동은 덧셈, 곱셈과 양립한다의 1에 의해 $a^p \cdot (p - 1)! + a \equiv -a + a = 0 \pmod p$이다. [[congruence-modulo-n|합동]]의 정의에 의해 $p \mid \bigl((a^p \cdot (p - 1)! + a) - 0\bigr)$, 곧 $p \mid \bigl(a^p \cdot (p - 1)! + a\bigr)$이다.

예를 들어 $p = 5$, $a = 2$이면 $2^5 = 32$, $4! = 24$이고 $32 \cdot 24 + 2 = 770 = 5 \cdot 154$이다.
:::

:::exercise[법 13에서 제곱이 −1과 합동인 수]
$7 \cdot 8 \cdots 12$는 $i$번째 항이 $6 + i$인 길이 $6$인 정수의 열의 곱을 뜻한다.

1. $12! = 6! \cdot (7 \cdot 8 \cdots 12)$임을 보여라.
2. $7 \cdot 8 \cdots 12 \equiv 6! \pmod{13}$임을 보여라.
3. $x^2 \equiv -1 \pmod{13}$인 정수 $x$를 $0$ 이상 $12$ 이하에서 하나 찾아라.
4. $x^2 \equiv -1 \pmod 7$인 정수 $x$는 없음을 보여라.
:::

:::solution
합동의 반사성·대칭성·추이성은 [[congruence-is-an-equivalence-relation|합동은 동치관계이다]]에서 쓰고, 정수의 계산은 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 계산 법칙을 쓴다.

**1.** $a_i = i$($1 \le i \le 6$)인 열의 곱은 $6!$이다([[factorial|계승]]의 정의). $b_j = 6 + j$($1 \le j \le 6$)인 열의 곱을 $B = 7 \cdot 8 \cdots 12$라 하자. [[finite-product|유한 곱]]의 (P2)에 의해 $6! \cdot B = c_1 c_2 \cdots c_{12}$이고, 여기서 $c_i = a_i = i$($1 \le i \le 6$), $c_{6+j} = b_j = 6 + j$($1 \le j \le 6$)이다. 곧 모든 $i \in \{1, \dots, 12\}$에서 $c_i = i$이므로 $c$는 $i$번째 항이 $i$인 길이 $12$인 열이고, 그 곱은 $12!$이다. 따라서 $12! = 6! \cdot B$이다.

**2.** $d_j = j - 7$($1 \le j \le 6$)로 정하면 $d$는 열 $-6, -5, -4, -3, -2, -1$이다. $b_j - d_j = (6 + j) - (j - 7) = 13$이므로 [[congruence-modulo-n|합동]]의 정의에 의해 모든 $j$에서 $b_j \equiv d_j \pmod{13}$이다. [[congruence-arithmetic|합동은 덧셈, 곱셈과 양립한다]]의 3에 의해 $B \equiv d_1 d_2 \cdots d_6 \pmod{13}$이다. 유한 곱의 정의대로 계산하면
$$
\begin{aligned}
(-6)(-5) &= 30, \\
30 \cdot (-4) &= -120, \\
(-120)(-3) &= 360, \\
360 \cdot (-2) &= -720, \\
(-720)(-1) &= 720
\end{aligned}
$$
이므로 $d_1 \cdots d_6 = 720$이다. 계승의 1에 의해 $1! = 1$, $2! = 2$, $3! = 6$, $4! = 24$, $5! = 120$, $6! = 720$이므로 $B \equiv 6! \pmod{13}$이다.

**3.** 문제 2의 2에서 $13$은 소수이므로 [[wilson-theorem|윌슨 정리]]의 1에 의해 $12! \equiv -1 \pmod{13}$이다. 1과 2, 합동은 덧셈, 곱셈과 양립한다의 2에 의해 $12! = 6! \cdot B \equiv 6! \cdot 6! \pmod{13}$이고, 대칭성과 추이성에 의해 $6! \cdot 6! \equiv -1 \pmod{13}$이다. $720 = 55 \cdot 13 + 5$이므로 $6! \equiv 5$이고, 합동은 덧셈, 곱셈과 양립한다의 2에 의해 $5 \cdot 5 \equiv 6! \cdot 6! \equiv -1 \pmod{13}$이다. 거듭제곱의 정의에 의해 $5^2 = 5 \cdot 5 = 25$이므로 $x = 5$가 답이다. 직접 보아도 $25 - (-1) = 26 = 2 \cdot 13$이다.

**4.** $x$가 정수라 하고 $r$을 $x$를 $7$로 나눈 나머지라 하자. [[residues-modulo-n|법 n에 대한 나머지]]의 1에 의해 $x \equiv r \pmod 7$이고 $r$은 $0, 1, \dots, 6$ 가운데 하나이며, 합동은 덧셈, 곱셈과 양립한다의 2에 의해 $x^2 = x \cdot x \equiv r \cdot r \pmod 7$이다. $r \cdot r$은 차례로
$$
\begin{aligned}
&0, \quad 1, \quad 4, \quad 9 = 7 + 2, \\
&16 = 2 \cdot 7 + 2, \quad 25 = 3 \cdot 7 + 4, \\
&36 = 5 \cdot 7 + 1
\end{aligned}
$$
이므로 $x^2$은 $0$, $1$, $2$, $4$ 가운데 하나인 $s$와 합동이다. 한편 $6 - (-1) = 7$이므로 $-1 \equiv 6 \pmod 7$이다. $x^2 \equiv -1$이라면 대칭성과 추이성에 의해 $s \equiv 6 \pmod 7$이고, $0 \le s \le 6$, $0 \le 6 \le 6$이므로 [[coprime-to-modulus|법과 서로소인 수의 성질]]의 5에 의해 $s = 6$이 되어 어긋난다. 따라서 그런 $x$는 없다.

법 $7$에서 1–3과 같은 계산을 하면 $6! = 3! \cdot (4 \cdot 5 \cdot 6)$이고 $4 \cdot 5 \cdot 6 \equiv (-3)(-2)(-1) = -6 = -(3!)$이어서 $6! \equiv -(3! \cdot 3!)$이 된다. 이 경우에는 윌슨 정리가 $3! \cdot 3! \equiv 1$을 줄 뿐이고, 제곱이 $-1$과 합동인 수는 나오지 않는다.
:::

:::exercise[법 13에서 짝짓기 곱의 가정]
[[inverse-pairing-modulo-p|법 p에서 역원의 짝]]의 4는 $S \subseteq \{1, \dots, p - 1\}$에 네 가정(공집합이 아니다, $1 \notin S$, $p - 1 \notin S$, 짝에 대해 닫혀 있다)을 두고 $\prod_{s \in S} s \equiv 1 \pmod p$라고 말한다.

1. $p = 13$, $S = \{3, 4, 5\}$일 때 네 가정 가운데 성립하지 않는 것을 찾고, $\prod_{s \in S} s \not\equiv 1 \pmod{13}$임을 보여라.
2. $p = 13$, $S = \{2, 7, 12\}$일 때 같은 일을 하라.
3. $p$가 소수이고 $S$가 $\{1, \dots, p - 1\}$의 공집합이 아닌 부분집합이며 $p - 1 \notin S$이고 짝에 대해 닫혀 있으면, $1 \in S$이더라도 $\prod_{s \in S} s \equiv 1 \pmod p$임을 증명하라.
:::

:::solution
문제 2의 2에서 $13$은 소수이다. 아래에서 "짝의 $i$"는 [[inverse-pairing-modulo-p|법 p에서 역원의 짝]]의 $i$이고, 합동의 반사성·대칭성·추이성은 [[congruence-is-an-equivalence-relation|합동은 동치관계이다]]에서 쓴다. 두 수 $u$, $v$가 $0$ 이상 $12$ 이하이고 $u \ne v$이면 [[coprime-to-modulus|법과 서로소인 수의 성질]]의 5에 의해 $u \not\equiv v \pmod{13}$이다. 이 사실을 (◇)라 부른다.

**1.** $3 \cdot 9 = 27 = 2 \cdot 13 + 1$이므로 $3 \cdot 9 \equiv 1 \pmod{13}$이고 $9 \in \{1, \dots, 12\}$이므로 짝의 1에 의해 $3^* = 9$이다. $9 \notin S$이므로 $S$는 짝에 대해 닫혀 있지 않다. 나머지 세 가정은 성립한다($S \ne \emptyset$, $1 \notin S$, $12 \notin S$).

$h(1) = 3$, $h(2) = 4$, $h(3) = 5$로 정한 $h$는 $\{1, 2, 3\}$에서 $S$로의 전단사이므로 [[product-over-a-finite-set|유한집합 위의 곱]]의 1에 의해 $\prod_{s \in S} s = (3 \cdot 4) \cdot 5 = 60$이다. $60 = 4 \cdot 13 + 8$이므로 $60 \equiv 8$이다. $60 \equiv 1$이라면 대칭성과 추이성에 의해 $8 \equiv 1$이 되어 (◇)에 어긋난다. 따라서 $\prod_{s \in S} s \not\equiv 1 \pmod{13}$이다.

**2.** $2 \cdot 7 = 14 = 13 + 1$이므로 1과 같은 방법으로 $2^* = 7$이고, 짝의 2에 의해 $7^* = (2^*)^* = 2$이며, 짝의 3에 의해 $12^* = 12$이다($12 = p - 1$). 따라서 $S = \{2, 7, 12\}$는 짝에 대해 닫혀 있고, 공집합이 아니며 $1 \notin S$이다. 성립하지 않는 가정은 $p - 1 = 12 \notin S$이다.

$(1, 2)$, $(2, 7)$, $(3, 12)$로 나열하면 유한집합 위의 곱의 1에 의해 $\prod_{s \in S} s = (2 \cdot 7) \cdot 12 = 168$이다. $168 = 12 \cdot 13 + 12$이므로 $168 \equiv 12$이고, 1과 같은 방법으로 (◇)에 의해 $\prod_{s \in S} s \not\equiv 1 \pmod{13}$이다.

**3.** $1 \notin S$이면 짝의 4에 의해 결론이 성립한다. $1 \in S$라 하자. $\{1, \dots, p - 1\}$은 원소를 $p - 1$개 가지므로([[finite-set|유한집합과 원소의 개수]]의 (F2)) [[subset-of-finite-set|유한집합의 부분집합]]의 1에 의해 $S$는 유한집합이고, 원소를 $k$개 갖는다고 하자. $S \ne \emptyset$이므로 (F2)에 의해 $k \ne 0$이고, [[well-ordering-principle|정렬 원리]]의 진술의 (Z5)와 [[prime-number|소수]]의 진술의 (Z1)에 의해 $k \ge 1$이다.

*$k = 1$인 경우.* [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (b)에 의해 $S - \{1\}$은 원소를 $0$개 가지므로 (F2)에 의해 공집합이고, $S = \{1\}$이다. 유한집합 위의 곱의 2에 의해 $\prod_{s \in S} s = 1 \equiv 1 \pmod p$이다.

*$k \ne 1$인 경우.* (Z5)에 의해 $k > 1$이고 (Z1)에 의해 $k \ge 2$이다. 유한집합 위의 곱의 3을 $b = 1$에 쓰면 $T = S - \{1\}$은 공집합이 아닌 유한집합이고 $\prod_{s \in S} s = \bigl(\prod_{s \in T} s\bigr) \cdot 1$이다. $T$가 짝의 4의 네 가정을 만족함을 보인다. $T \subseteq S \subseteq \{1, \dots, p - 1\}$이고, $T \ne \emptyset$이며, $1 \notin T$이고, $p - 1 \notin S$이므로 $p - 1 \notin T$이다. $t \in T$이면 $t \in S$이므로 $t^* \in S$이다. $t^* = 1$이라면 짝의 2와 3에 의해 $t = (t^*)^* = 1^* = 1$이 되어 $t \in T$에 어긋나므로 $t^* \ne 1$이고 $t^* \in T$이다. 짝의 4에 의해 $\prod_{s \in T} s \equiv 1 \pmod p$이고, [[congruence-arithmetic|합동은 덧셈, 곱셈과 양립한다]]의 2에 의해 $\prod_{s \in S} s \equiv 1 \cdot 1 = 1 \pmod p$이다.

1과 2의 두 경우에는 각각 닫혀 있다는 가정과 $p - 1 \notin S$라는 가정이 빠져서 결론이 성립하지 않았다. 3은 $1 \notin S$라는 가정은 빼도 결론이 성립함을 보여 준다.
:::
