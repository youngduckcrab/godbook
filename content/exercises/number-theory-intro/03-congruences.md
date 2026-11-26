---
written_by: Claude
status: reviewed
sources:
  - ref: stein-elementary-number-theory
    loc: "2.1절, Proposition 2.1.15 의 증명 (p.25) — 문제 '일차 합동식의 해 전체'의 1과 같은 발상(양변과 법을 최대공약수로 나누어 법이 작은 합동식으로 바꾸기)"
  - ref: stein-elementary-number-theory
    loc: "1.3 Exercises, 연습문제 1.13 (a) (p.20) — 문제 '세 제곱수의 합의 나머지'와 같은 발상(제곱수를 나눈 나머지를 모두 따져 어떤 나머지가 나오지 않음을 보이기. 출처는 법 4)"
  - ref: hammack-book-of-proof
    loc: "Exercises for Chapter 7, 연습문제 22 (p.155), Exercises for Chapter 6, 연습문제 18 (p.144) — 문제 '세 제곱수의 합의 나머지'와 같은 발상(법 4 에서 제곱수와 제곱수의 합의 나머지)"
  - ref: stein-elementary-number-theory
    loc: "2.6 Exercises, 연습문제 2.13, 2.17 (p.46) — 문제 '세 합동식을 함께 풀기'와 같은 종류(2.17 은 여러 합동식을 함께 만족하는 수)"
  - ref: stein-elementary-number-theory
    loc: "2.1절, Proposition 2.1.13 (Units) (p.24) — 문제 '법이 소수인 일차 합동식'의 1과 2는 이 명제의 n 이 소수인 경우이다(출처는 완전 잉여계로 증명한다). 2.6 Exercises, 연습문제 2.10 (p.45) — 같은 문제의 3과 같은 종류(역원 구하기)"
  - ref: stein-elementary-number-theory
    loc: "2.6 Exercises, 연습문제 2.23 (p.47), 3.4절 p.64 의 문장(x² ≡ 1 (mod p) 이면 x ≡ ±1) — 문제 '제곱이 합동인 두 수'와 같은 발상(2.23 은 법 35 에서 x² ≡ 1 의 해가 ±1 말고도 있음을, 3.4절의 문장은 법이 소수 p 이면 ±1 뿐임을 말한다)"
added: 2026-11-26
---

:::exercise[큰 수의 곱을 7 로 나눈 나머지]
$N = 1234 \cdot 5678 + 999$, $M = 1234 \cdot 5678 - 999$라 하자. 곱을 계산하지 말고 합동의 계산으로 $N$과 $M$을 각각 $7$로 나눈 나머지를 구하라. 그다음 곱을 직접 계산해 검산하라.
:::

:::solution
[[division-theorem|나눗셈 정리]]로 세 수를 $7$로 나눈다. $1234 = 176 \cdot 7 + 2$($176 \cdot 7 = 1232$), $5678 = 811 \cdot 7 + 1$($811 \cdot 7 = 5677$), $999 = 142 \cdot 7 + 5$($142 \cdot 7 = 994$)이다. 따라서 [[congruence-modulo-n|합동의 정의]]에 의해
$$
\begin{aligned} 1234 &\equiv 2 \pmod 7, \\ 5678 &\equiv 1 \pmod 7, \\ 999 &\equiv 5 \pmod 7 \end{aligned}
$$
이다(차가 각각 $7 \cdot 176$, $7 \cdot 811$, $7 \cdot 142$이다).

*$N$의 나머지.* [[congruence-arithmetic|합동의 계산 법칙]]의 (2)에 의해 $1234 \cdot 5678 \equiv 2 \cdot 1 = 2 \pmod 7$이고, 이것과 $999 \equiv 5$에 (1)을 쓰면 $N \equiv 2 + 5 = 7 \pmod 7$이다. $7 - 0 = 7 \cdot 1$이므로 $7 \equiv 0 \pmod 7$이고, [[congruence-is-an-equivalence-relation|합동은 동치관계이다]]의 (3)에 의해 $N \equiv 0 \pmod 7$이다. $0 \le 0 \le 6$이므로 [[residues-modulo-n|법 n에 대한 나머지]]의 (1)에 의해 $N$을 $7$로 나눈 나머지는 $0$이다. 곧 $7 \mid N$이다.

*$M$의 나머지.* 계산 법칙의 (4)에 의해 $M \equiv 2 - 5 = -3 \pmod 7$이다. $-3 - 4 = -7 = 7 \cdot (-1)$이므로 $-3 \equiv 4 \pmod 7$이고, 추이성에 의해 $M \equiv 4 \pmod 7$이다. $0 \le 4 \le 6$이므로 $M$을 $7$로 나눈 나머지는 $4$이다.

*검산.* $1234 \cdot 5678 = 7006652$이다($1234 \cdot 5000 = 6170000$, $1234 \cdot 678 = 836652$). $N = 7007651 = 7 \cdot 1001093$이고, $M = 7005653 = 7 \cdot 1000807 + 4$($7 \cdot 1000807 = 7005649$)이다.
:::

:::exercise[일차 합동식의 해 전체]
1. 정수 $x$가 $21x \equiv 14 \pmod{35}$를 만족하는 것은 정확히 $x \equiv 4 \pmod 5$일 때임을 보여라.
2. $0 \le x \le 34$이고 $21x \equiv 14 \pmod{35}$인 정수 $x$를 모두 구하라.
:::

:::solution
1. ($\Rightarrow$) $21x \equiv 14 \pmod{35}$이면 [[congruence-modulo-n|합동의 정의]]에 의해 $21x - 14 = 35k$인 정수 $k$가 있다. 곧 $7(3x - 2) = 7(5k)$이다. $7 \ne 0$이므로 [[integer-cancellation|정수 곱셈의 소거 법칙]]의 (2)에 의해 $3x - 2 = 5k$이다. 그러면
   $$
   \begin{aligned} x - 4 &= 2(3x - 2) - 5x \\ &= 2 \cdot 5k - 5x \\ &= 5(2k - x) \end{aligned}
   $$
   이고 $2k - x$는 정수이므로 $x \equiv 4 \pmod 5$이다.

   ($\Leftarrow$) $x \equiv 4 \pmod 5$이면 $x - 4 = 5t$인 정수 $t$가 있고 $x = 5t + 4$이다. 그러면
   $$
   \begin{aligned} 21x - 14 &= 105t + 84 - 14 \\ &= 105t + 70 \\ &= 35(3t + 2) \end{aligned}
   $$
   이고 $3t + 2$는 정수이므로 $21x \equiv 14 \pmod{35}$이다.

   $\gcd(21, 35) = 7$이고 $7 \mid 14$이므로 해가 있다는 것은 [[linear-congruence-solvability|일차 합동식이 풀릴 조건]]의 (2)와도 맞는다($21$의 양의 약수 $1, 3, 7, 21$ 가운데 $35$를 나누는 것은 $1, 7$이다).

2. 1에 의해 구하는 $x$는 $0 \le x \le 34$이고 $x \equiv 4 \pmod 5$인 정수이다. $x \equiv 4 \pmod 5$이면 $x = 5t + 4$인 정수 $t$가 있다. [[well-ordering-principle|정렬 원리]]의 (Z5)와 [[prime-number|소수]] 항목의 (Z1)에 의해 정수 $t$는 $t \le -1$, $0 \le t \le 6$, $t \ge 7$ 가운데 하나이다. $t \le -1$이면 (Z3)과 (Z7)에 의해 $x = 5t + 4 \le -5 + 4 = -1 < 0$이고, $t \ge 7$이면 $x \ge 35 + 4 = 39 > 34$이다. 따라서 $0 \le t \le 6$이고, $x$는
   $$
   4, \ 9, \ 14, \ 19, \ 24, \ 29, \ 34
   $$
   가운데 하나이다. 거꾸로 이 일곱 수는 모두 $5t + 4$($t = 0, \dots, 6$) 꼴이어서 $x \equiv 4 \pmod 5$이므로 1에 의해 해이다. 몇 개를 직접 확인하면 $21 \cdot 4 - 14 = 70 = 35 \cdot 2$, $21 \cdot 19 - 14 = 385 = 35 \cdot 11$, $21 \cdot 34 - 14 = 700 = 35 \cdot 20$이다.
:::

:::exercise[세 제곱수의 합의 나머지]
1. 모든 정수 $x$에 대하여 $x^2$을 $8$로 나눈 나머지는 $0$, $1$, $4$ 가운데 하나임을 보여라.
2. 모든 정수 $x$, $y$, $z$에 대하여 $x^2 + y^2 + z^2$을 $8$로 나눈 나머지는 $7$이 아님을 보여라. 이로부터 $31$은 세 정수의 제곱의 합으로 쓸 수 없음을 보여라.
:::

:::solution
$x^2$은 [[congruence-arithmetic|합동의 계산 법칙]]에서 정한 거듭제곱, 곧 $x^2 = x \cdot x$이다.

1. [[residues-modulo-n|법 n에 대한 나머지]]의 (1)에 의해 $x \equiv r \pmod 8$이고 $0 \le r \le 7$인 정수 $r$이 있다. 계산 법칙의 (5)를 $k = 2$로 쓰면 $x^2 \equiv r^2 \pmod 8$이다. $r$마다 $r^2$과 그것과 합동인 $0$ 이상 $7$ 이하의 수를 적으면 다음과 같다.

   | $r$ | $r^2$ | $r^2 - s$ | $s$ |
   |---|---|---|---|
   | $0$ | $0$ | $0$ | $0$ |
   | $1$ | $1$ | $0$ | $1$ |
   | $2$ | $4$ | $0$ | $4$ |
   | $3$ | $9$ | $8$ | $1$ |
   | $4$ | $16$ | $16$ | $0$ |
   | $5$ | $25$ | $24$ | $1$ |
   | $6$ | $36$ | $32$ | $4$ |
   | $7$ | $49$ | $48$ | $1$ |

   $r^2 - s$ 열의 차는 모두 $8$의 배수($8 \cdot 0$, $8 \cdot 1$, $8 \cdot 2$, $8 \cdot 3$, $8 \cdot 4$, $8 \cdot 6$)이므로 $r^2 \equiv s \pmod 8$이다. [[congruence-is-an-equivalence-relation|합동은 동치관계이다]]의 (3)에 의해 $x^2 \equiv s \pmod 8$이고 $s$는 $0$, $1$, $4$ 가운데 하나이다. 나머지 항목의 (1)에 의해 $x^2$의 나머지는 이 $s$이다.

2. 1에 의해 $x^2 \equiv s_1$, $y^2 \equiv s_2$, $z^2 \equiv s_3 \pmod 8$인 $s_1, s_2, s_3 \in \{0, 1, 4\}$가 있다. 계산 법칙의 (1)을 두 번 쓰면 $x^2 + y^2 + z^2 \equiv s_1 + s_2 + s_3 \pmod 8$이다. 덧셈은 순서를 바꿔도 같으므로 세 수가 무엇인지만 보면 된다.

   - $0$이 둘 이상: $0 + 0 + 0 = 0$, $0 + 0 + 1 = 1$, $0 + 0 + 4 = 4$
   - $0$이 하나: $0 + 1 + 1 = 2$, $0 + 1 + 4 = 5$, $0 + 4 + 4 = 8 \equiv 0$
   - $0$이 없음: $1 + 1 + 1 = 3$, $1 + 1 + 4 = 6$, $1 + 4 + 4 = 9 \equiv 1$, $4 + 4 + 4 = 12 \equiv 4$

   ($8 - 0 = 8$, $9 - 1 = 8$, $12 - 4 = 8$이다.) 곧 합은 $0$ 이상 $6$ 이하인 어떤 정수 $t$와 $8$을 법으로 합동이다. 따라서 $x^2 + y^2 + z^2 \equiv t \pmod 8$이고 $0 \le t \le 6$이다. 나머지 항목의 (1)에 의해 $0$ 이상 $7$ 이하에서 $x^2 + y^2 + z^2$과 합동인 수는 하나뿐이므로 나머지는 $t$이고, $t \ne 7$이다.

   $31 = 3 \cdot 8 + 7$이므로 $31$을 $8$로 나눈 나머지는 $7$이다. $31 = x^2 + y^2 + z^2$인 정수 $x$, $y$, $z$가 있다면 같은 수의 나머지가 $7$이면서 $7$이 아니게 되므로, 그런 정수는 없다.
:::

:::exercise[세 합동식을 함께 풀기]
다음 세 합동식을 모두 만족하는 정수 $x$ 가운데 $0 \le x \le 104$인 것이 정확히 하나 있음을 보이고 그 수를 구하라.
$$
\begin{aligned} x &\equiv 1 \pmod 3, \\ x &\equiv 4 \pmod 5, \\ x &\equiv 6 \pmod 7 \end{aligned}
$$
:::

:::solution
쓰는 정리는 [[chinese-remainder-theorem|중국인의 나머지 정리]]이다. 필요한 서로소 조건부터 확인한다. $3$의 양의 약수 $1, 3$ 가운데 $5$를 나누는 것은 $1$뿐이므로($3 < 5 < 6$) $\gcd(3, 5) = 1$이다. $7$의 양의 약수는 $1, 7$이고 $14 < 15 < 21$이어서 $7 \nmid 15$이므로 $\gcd(15, 7) = 1$이다. 또 $3 \cdot 5 = 15$, $15 \cdot 7 = 105$이다.

*앞의 두 합동식.* $x_1 = 4$는 $4 - 1 = 3 = 3 \cdot 1$, $4 - 4 = 0 = 5 \cdot 0$이므로 두 합동식을 만족한다. 중국인의 나머지 정리의 (2)를 $m = 3$, $n = 5$에 쓰면, 두 합동식을 만족하는 정수 $x$는 $x \equiv 4 \pmod{15}$이다. 거꾸로 (3)에 의해 $x \equiv 4 \pmod{15}$인 정수는 두 합동식을 만족한다. 곧 앞의 두 합동식은 함께 $x \equiv 4 \pmod{15}$와 같은 조건이다.

*셋째 합동식과 합치기.* 이제 $x \equiv 4 \pmod{15}$와 $x \equiv 6 \pmod 7$을 함께 푼다. $x \equiv 4 \pmod{15}$인 수 $4 + 15u$에 $u = 0, 1, 2$를 넣으면 $4, 19, 34$이고, 이 가운데 $x_2 = 34$가 $34 - 4 = 30 = 15 \cdot 2$, $34 - 6 = 28 = 7 \cdot 4$이므로 두 합동식을 만족한다. 정리의 (2), (3)을 $m = 15$, $n = 7$에 쓰면, 이 두 합동식을 함께 만족하는 것은 정확히 $x \equiv 34 \pmod{105}$인 정수이다.

*결론.* 앞의 두 문단에 의해 세 합동식을 모두 만족하는 것은 정확히 $x \equiv 4 \pmod{15}$이고 $x \equiv 6 \pmod 7$인 정수이며, 이것은 정확히 $x \equiv 34 \pmod{105}$인 정수이다. 정리의 (4)를 $m = 15$, $n = 7$에 쓰면 이 가운데 $0 \le x \le 104$인 것은 정확히 하나이고, $0 \le 34 \le 104$이므로 그것은 $34$이다. 검산하면 $34 - 1 = 33 = 3 \cdot 11$, $34 - 4 = 30 = 5 \cdot 6$, $34 - 6 = 28 = 7 \cdot 4$이다.
:::

:::exercise[법이 소수인 일차 합동식]
$p$가 소수이고 $a$, $b$가 정수이며 $p \nmid a$라 하자.

1. $ax \equiv b \pmod p$인 정수 $x$가 있음을 보여라.
2. $x$와 $x'$이 모두 $ax \equiv b \pmod p$를 만족하면 $x \equiv x' \pmod p$임을 보여라.
3. $6x \equiv 5 \pmod{13}$을 만족하는 정수 전체를 구하라. ($13$이 소수라는 것은 써도 된다.)
:::

:::solution
*먼저 $\gcd(a, p) = 1$이다.* $p$는 자연수이므로 $a$와 $p$는 둘 다 $0$은 아니다. $d$를 $a$와 $p$의 양의 공약수라 하자. $d$는 소수 $p$의 양의 약수이므로 $d = 1$ 또는 $d = p$이다([[prime-number|소수]]의 정의). $d = p$이면 $p \mid a$가 되어 가정에 어긋나므로 $d = 1$이다. [[greatest-common-divisor|최대공약수]]의 성질 (i)에 의해 $\gcd(a, p)$는 양의 공약수이므로 $\gcd(a, p) = 1$이다.

1. [[inverse-modulo-n|법 n에 대한 역원]]의 (1)에 의해 $aa' \equiv 1 \pmod p$인 정수 $a'$이 있다. $x = a'b$로 두면 곱셈의 결합법칙과 [[congruence-arithmetic|합동의 계산 법칙]]의 (2)(곱하는 두 쌍은 $aa' \equiv 1$과 반사성으로 얻는 $b \equiv b$)에 의해
   $$
   \begin{aligned} a(a'b) &= (aa')b \\ &\equiv 1 \cdot b = b \pmod p \end{aligned}
   $$
   이다. 반사성은 [[congruence-is-an-equivalence-relation|합동은 동치관계이다]]의 (1)이다.

2. $ax \equiv b$이고 $ax' \equiv b \pmod p$이면 합동은 동치관계이다의 (2)와 (3)에 의해 $ax \equiv ax' \pmod p$, 곧 $xa \equiv x'a \pmod p$이다. $\gcd(a, p) = 1$이므로 [[congruence-cancellation|합동식의 소거 법칙]]에 의해 $x \equiv x' \pmod p$이다.

3. $p = 13$, $a = 6$, $b = 5$이다. $13 \cdot 0 < 6 < 13 \cdot 1$이므로 $6 = 13m$인 정수 $m$은 없다([[well-ordering-principle|정렬 원리]]의 (Z5)와 소수 항목의 (Z1)에 의해 $m \le 0$이거나 $m \ge 1$이고, 소수 항목의 (Z2)와 (Z3)에 의해 각각 $13m \le 0 < 6$, $13m \ge 13 > 6$). 곧 $13 \nmid 6$이어서 1과 2를 쓸 수 있다.

   $6 \cdot 11 = 66 = 5 \cdot 13 + 1$이므로 $6 \cdot 11 - 1 = 65 = 13 \cdot 5$이고, $a' = 11$이 $6$의 법 $13$ 역원이다. 1의 $x = a'b = 55$이고 $55 - 3 = 52 = 13 \cdot 4$이므로 $55 \equiv 3 \pmod{13}$이다. 직접 확인하면 $6 \cdot 3 - 5 = 13 = 13 \cdot 1$이므로 $x = 3$이 해이다.

   해 전체는 $x \equiv 3 \pmod{13}$인 정수 전체이다. 해 $x$는 2에 의해 해 $3$과 $x \equiv 3 \pmod{13}$이다. 거꾸로 $x \equiv 3 \pmod{13}$이면 계산 법칙의 (2)에 의해 $6x \equiv 6 \cdot 3 = 18 \pmod{13}$이고 $18 - 5 = 13$이므로 $18 \equiv 5$이어서, 추이성에 의해 $6x \equiv 5 \pmod{13}$이다.
:::

:::exercise[제곱이 합동인 두 수]
1. $n = 8$일 때, $a^2 \equiv b^2 \pmod 8$이지만 $a \not\equiv b \pmod 8$이고 $a \not\equiv -b \pmod 8$인 정수 $a$, $b$의 예를 들어라.
2. $p$가 소수이고 정수 $a$, $b$가 $a^2 \equiv b^2 \pmod p$를 만족하면 $a \equiv b \pmod p$이거나 $a \equiv -b \pmod p$임을 보여라.
:::

:::solution
$a^2 = a \cdot a$는 [[congruence-arithmetic|합동의 계산 법칙]]에서 정한 거듭제곱이다.

1. $a = 1$, $b = 3$으로 둔다. $a^2 - b^2 = 1 - 9 = -8 = 8 \cdot (-1)$이므로 $a^2 \equiv b^2 \pmod 8$이다. 그런데 $a - b = -2$이고 $a - (-b) = 4$이다. $8 \cdot (-1) < -2 < 8 \cdot 0$이고 $8 \cdot 0 < 4 < 8 \cdot 1$이므로 $-2$와 $4$는 $8$의 배수가 아니다. 이웃한 두 배수 사이에 있는 수가 배수가 아닌 것은 [[well-ordering-principle|정렬 원리]]의 (Z5), [[prime-number|소수]] 항목의 (Z1)과 (Z3)에 의한다. 이를테면 $4 = 8m$이면 $m \le 0$이거나 $m \ge 1$이고, 각각 $8m \le 0 < 4$, $8m \ge 8 > 4$이다. 따라서 $a \not\equiv b$이고 $a \not\equiv -b \pmod 8$이다.

   또 $1^2 = 1$, $3^2 = 9$, $5^2 = 25$, $7^2 = 49$는 모두 $8$을 법으로 $1$과 합동이다($9 - 1 = 8$, $25 - 1 = 24$, $49 - 1 = 48$). 곧 법 $8$에서는 $x^2 \equiv 1$을 만족하는 $x$가 $1$과 $-1 \equiv 7$ 말고도 있다($3$과 $5$).

2. 계산하면
   $$
   \begin{aligned} &(a - b)(a + b) \\ &= a \cdot a + ab - ba - b \cdot b \\ &= a^2 - b^2 \end{aligned}
   $$
   이다. $a^2 \equiv b^2 \pmod p$이므로 [[congruence-modulo-n|합동의 정의]]에 의해 $p \mid a^2 - b^2$, 곧 $p \mid (a - b)(a + b)$이다. $p$는 소수이므로 [[euclids-lemma|유클리드 보조정리]]의 (1)에 의해 $p \mid a - b$ 또는 $p \mid a + b$이다. $p \mid a - b$이면 $a \equiv b \pmod p$이다. $p \mid a + b$이면 $a + b = a - (-b)$이므로 $a \equiv -b \pmod p$이다.

   1의 $n = 8$에서는 이 논증이 유클리드 보조정리를 쓰는 단계에서 막힌다. $8 \mid (1 - 3)(1 + 3) = -8$이지만 $8$은 소수가 아니어서 유클리드 보조정리를 쓸 수 없고, 실제로 $8$은 $-2$도 $4$도 나누지 않는다.
:::
