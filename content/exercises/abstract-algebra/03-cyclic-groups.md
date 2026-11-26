---
written_by: Claude
status: reviewed
sources:
  - ref: judson-abstract-algebra
    loc: "3.4절 Reading Questions, 물음 2 (p.40) — 문제 'U(16)의 원소의 위수'와 같은 대상(U(16)에서 곱과 역원을 계산하기). 4.5절 Exercises, 연습문제 13 (p.56) — 같은 문제와 같은 종류(n ≤ 20 인 U(n) 가운데 순환군인 것을 찾기)"
  - ref: judson-abstract-algebra
    loc: "4.5절 Exercises, 연습문제 13 (p.56) — 문제 'U(14)의 생성원'과 같은 종류(n ≤ 20 인 U(n) 가운데 순환군인 것을 찾기)"
  - ref: judson-abstract-algebra
    loc: "3.5절 Exercises, 연습문제 25 (p.42), 4.5절 Exercises, 연습문제 23 (b), (c) (p.57) — 문제 '켤레 원소의 위수'와 같은 발상(ab^na⁻¹ = (aba⁻¹)ⁿ, |a| = |g⁻¹ag|, ab 와 ba 의 위수가 같음)"
  - ref: judson-abstract-algebra
    loc: "4.5절 Exercises, 연습문제 1 (e) (p.55) — 문제 '위수가 무한한 원소와 부분군의 개수'와 같은 주제(부분군이 유한 개인 군은 유한군인가)"
  - ref: judson-abstract-algebra
    loc: "4.5절 Exercises, 연습문제 27, 28 (p.57) — 문제 'ℤ₃₆의 두 순환 부분군의 교집합'과 같은 종류(위수가 15 와 16 인 두 원소가 생성하는 부분군의 교집합, ⟨aᵐ⟩ ∩ ⟨aⁿ⟩ 의 생성원)"
  - ref: judson-abstract-algebra
    loc: "4.5절 Exercises, 연습문제 30, 34 (p.57) — 문제 '교환되는 두 원소의 곱의 위수'와 같은 발상(위수가 서로소인 두 원소가 생성하는 부분군의 교집합은 {e}, 위수가 p 와 q 인 원소가 있는 아벨군은 순환군)"
  - ref: judson-abstract-algebra
    loc: "4.5절 Exercises, 연습문제 14 (p.56) — 문제 '두 가정이 빠지면 곱의 위수가 달라지는 예'와 같은 주제(위수가 유한한 두 행렬의 곱의 위수가 무한한 예)"
added: 2026-11-26
---

:::exercise[U(16)의 원소의 위수]
1. $U(16) = \{[1], [3], [5], [7], [9], [11], [13], [15]\}$이고 $|U(16)| = 8$임을 보여라.
2. $U(16)$의 각 원소의 위수를 구하라.
3. $U(16)$이 순환군이 아님을 보여라.
:::

:::solution
[[integers-modulo-n|법 n의 정수]]의 (2)에 의해 $\mathbb{Z}_{16}$에서 $[a][b] = [ab]$이고, 정수 $x$, $y$의 차가 $16$의 배수이면 [[equivalence-classes-equal-iff-related|동치류가 같을 조건]]의 (2)에 의해 $[x] = [y]$이다. [[group-of-units-modulo-n|법 n의 단원군]]의 (2)에 의해 $U(16)$의 곱은 $\mathbb{Z}_{16}$의 곱셈이고 항등원은 $[1]$이다.

1. *홀수의 동치류.* 차 $32 = 16 \cdot 2$, $64 = 16 \cdot 4$, $48 = 16 \cdot 3$, $80 = 16 \cdot 5$, $224 = 16 \cdot 14$에 의해
   $$
   \begin{aligned} [3][11] &= [33] = [1], \\ [5][13] &= [65] = [1], \\ [7][7] &= [49] = [1], \\ [9][9] &= [81] = [1], \\ [15][15] &= [225] = [1] \end{aligned}
   $$
   이고 $[1][1] = [1]$이며, 곱셈은 가환이다(법 n의 정수의 (3)). 단원군의 (3)에 의해 $[1], [3], [5], [7], [9], [11], [13], [15]$는 모두 $U(16)$에 속한다.

   *짝수의 동치류.* $r$이 $0 \le r \le 15$인 짝수이면 $r = 2c$인 정수 $c$가 있고 $16 = 2 \cdot 8$이므로 $2$는 $r$과 $16$의 공약수이다. [[greatest-common-divisor|최대공약수]]의 정의에 의해 $2 \le \gcd(r, 16)$이고, [[well-ordering-principle|정렬 원리]]의 (L3)에 의해 $1 < 2$이므로 (Z6)에 의해 $1 < \gcd(r, 16)$이며, (Z5)에 의해 $\gcd(r, 16) \ne 1$이다. 단원군의 (1)에 의해 $[r] \notin U(16)$이다.

   법 n의 정수의 (1)에 의해 $\mathbb{Z}_{16}$의 원소는 $[0], \dots, [15]$ 가운데 하나이고 이 열여섯 개는 서로 다르다. $0$ 이상 $15$ 이하의 정수는 짝수이거나 홀수이고([[even-and-odd|짝수와 홀수]]), 홀수인 것은 위의 여덟 개이므로 $U(16)$은 위의 여덟 원소로 이루어진다. $i \in \{1, \dots, 8\}$에 $[2i - 1]$을 대응시키는 함수는 이 여덟 원소 위로의 전단사이므로 [[finite-set|유한집합]]의 정의에 의해 $|U(16)| = 8$이다.

2. [[power-in-a-group|군의 거듭제곱]]의 (1)에 의해 $x^1 = x$이고 $x^{k+1} = x^k x$이므로 거듭제곱을 한 번씩 곱해 나간다. 아래 표의 각 칸은 왼쪽 칸에 $x$를 곱한 대표의 곱을, 차가 $16$의 배수인 $0$ 이상 $15$ 이하의 수로 바꾼 것이다.

   | $x$ | $x^2$ | $x^3$ | $x^4$ |
   |---|---|---|---|
   | $[3]$ | $[9]$ | $[11]$ | $[1]$ |
   | $[5]$ | $[9]$ | $[13]$ | $[1]$ |
   | $[11]$ | $[9]$ | $[3]$ | $[1]$ |
   | $[13]$ | $[9]$ | $[5]$ | $[1]$ |

   대표의 곱과 차는 차례로 다음과 같다. $[3]$의 줄은 $9$, $27 - 11 = 16$, $33 - 1 = 32$이고, $[5]$의 줄은 $25 - 9 = 16$, $45 - 13 = 32$, $65 - 1 = 64$이며, $[11]$의 줄은 $121 - 9 = 112$, $99 - 3 = 96$, $33 - 1 = 32$이고, $[13]$의 줄은 $169 - 9 = 160$, $117 - 5 = 112$, $65 - 1 = 64$이다. 차는 모두 $16$의 배수이다($112 = 16 \cdot 7$, $96 = 16 \cdot 6$, $160 = 16 \cdot 10$).

   이 네 원소는 $x^1$, $x^2$, $x^3$이 $[1]$이 아니고(법 n의 정수의 (1)에 의해 $[1]$은 $[3], [5], [9], [11], [13]$과 다르다) $x^4 = [1]$이다. 자연수 $k$가 $x^k = [1]$이면 [[prime-number|소수]] 항목의 (Z1)과 정렬 원리의 (Z5)에 의해 $k \in \{1, 2, 3\}$이거나 $k \ge 4$인데, 앞의 경우는 표에 의해 아니므로 $k \ge 4$이다. [[order-of-an-element|원소의 위수]]의 정의에 의해 $\operatorname{ord}(x) = 4$이다.

   $[7]$, $[9]$, $[15]$는 $[1]$이 아니고 1에서 제곱이 $[1]$이었으므로 같은 논법으로 위수가 $2$이다. 원소의 위수의 (1)에 의해 $\operatorname{ord}([1]) = 1$이다.

3. [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (4)에 의해 유한군 $U(16)$이 순환군인 것은 정확히 $\operatorname{ord}(x) = |U(16)| = 8$인 원소 $x$가 있을 때이다. 2에 의해 위수는 $1$, $2$, $4$뿐이므로 그런 원소가 없고, $U(16)$은 순환군이 아니다.
:::

:::exercise[U(14)의 생성원]
1. $U(14) = \{[1], [3], [5], [9], [11], [13]\}$이고 $|U(14)| = 6$임을 보여라.
2. $\operatorname{ord}([3]) = 6$임을 보이고, $U(14)$가 순환군임을 보여라.
3. $U(14)$의 생성원을 모두 구하라.
:::

:::solution
[[integers-modulo-n|법 n의 정수]]의 (2)에 의해 $\mathbb{Z}_{14}$에서 $[a][b] = [ab]$이고 곱셈은 가환이다((3)). 정수 $x$, $y$의 차가 $14$의 배수이면 [[equivalence-classes-equal-iff-related|동치류가 같을 조건]]의 (2)에 의해 $[x] = [y]$이다. [[group-of-units-modulo-n|법 n의 단원군]]의 (2)에 의해 $U(14)$의 곱은 $\mathbb{Z}_{14}$의 곱셈이고 항등원은 $[1]$이다.

1. *여섯 원소는 $U(14)$에 속한다.* 차 $15 - 1 = 14$, $99 - 1 = 14 \cdot 7$, $169 - 1 = 14 \cdot 12$에 의해
   $$
   \begin{aligned} [3][5] &= [15] = [1], \\ [9][11] &= [99] = [1], \\ [13][13] &= [169] = [1] \end{aligned}
   $$
   이고 $[1][1] = [1]$이다. 단원군의 (3)에 의해 여섯 원소는 모두 $U(14)$에 속한다.

   *나머지는 속하지 않는다.* $0 \le r \le 13$인 정수 가운데 위의 여섯 개가 아닌 것은 짝수 $0, 2, \dots, 12$와 $7$이다. 짝수 $r$은 $2$가 $r$과 $14 = 2 \cdot 7$의 공약수이고, $7$은 $7$이 $7$과 $14$의 공약수이다. [[greatest-common-divisor|최대공약수]]의 정의에 의해 $\gcd(r, 14) \ge 2 > 1$이므로 $\gcd(r, 14) \ne 1$이고([[well-ordering-principle|정렬 원리]]의 (Z5)), 단원군의 (1)에 의해 $[r] \notin U(14)$이다.

   법 n의 정수의 (1)에 의해 $\mathbb{Z}_{14}$의 원소는 $[0], \dots, [13]$ 가운데 하나이고 이들은 서로 다르므로, $U(14)$는 위의 여섯 원소로 이루어지고 여섯 원소는 서로 다르다. $1, \dots, 6$에 차례로 이 여섯 원소를 대응시키는 함수는 전단사이므로 [[finite-set|유한집합]]의 정의에 의해 $|U(14)| = 6$이다.

2. [[power-in-a-group|군의 거듭제곱]]의 (1)에 의해 $x^1 = x$, $x^{k+1} = x^kx$이다. 차 $27 - 13 = 14$, $39 - 11 = 14 \cdot 2$, $33 - 5 = 14 \cdot 2$, $15 - 1 = 14$에 의해
   $$
   \begin{aligned} [3]^1 &= [3], \\ [3]^2 &= [9], \\ [3]^3 &= [27] = [13], \\ [3]^4 &= [39] = [11], \\ [3]^5 &= [33] = [5], \\ [3]^6 &= [15] = [1] \end{aligned}
   $$
   이다(각 줄은 앞 줄에 $[3]$을 곱한 것이다. 이를테면 $[3]^5 = [3]^4[3] = [11][3] = [33]$). 법 n의 정수의 (1)에 의해 $[3]^1, \dots, [3]^5$는 $[1]$이 아니다. 자연수 $k$가 $[3]^k = [1]$이면 정렬 원리의 (Z5)와 [[prime-number|소수]] 항목의 (Z1)에 의해 $k \le 5$이거나 $k \ge 6$이고, 앞의 경우는 위 계산에 의해 아니므로 $k \ge 6$이다. [[order-of-an-element|원소의 위수]]의 정의에 의해 $\operatorname{ord}([3]) = 6$이다.

   $\operatorname{ord}([3]) = 6 = |U(14)|$이므로 [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (4)에 의해 $[3]$은 $U(14)$의 생성원이고 $U(14)$는 순환군이다.

3. 순환 부분군의 크기의 (1)에 의해 $U(14) = \langle [3] \rangle$의 원소는 정확히 $0 \le k \le 5$인 $[3]^k$이다. [[order-of-a-power|거듭제곱의 위수]]의 (6)에 의해 $[3]^k$가 생성원인 것은 정확히 $\gcd(k, 6) = 1$일 때이다.

   - $k = 1$, $k = 5$이면 $1 = 1 \cdot 1 + 6 \cdot 0 = 6 - 5$이므로 $k$와 $6$의 공약수는 $1$을 나누고, $c > 0$이면 소수 항목의 진술에 의해 $c \le 1$이며 $c \le 0$이면 $c < 1$이다. 따라서 $\gcd(k, 6) = 1$이다.
   - $k = 2$, $4$이면 $2$가, $k = 3$이면 $3$이 $k$와 $6$의 공약수이므로 $\gcd(k, 6) \ge 2$이다.
   - $k = 0$이면 최대공약수의 (iv)에 의해 $\gcd(0, 6) = 6$이다.

   따라서 $U(14)$의 생성원은 $[3]^1 = [3]$과 $[3]^5 = [5]$이다.

:::exercise[켤레 원소의 위수]
$G$가 군이고 $a, g \in G$라 하자.

1. 모든 자연수 $n$에 대하여 $(gag^{-1})^n = ga^ng^{-1}$임을 보여라.
2. $a$의 위수가 유한한 것은 정확히 $gag^{-1}$의 위수가 유한할 때이고, 그때 $\operatorname{ord}(gag^{-1}) = \operatorname{ord}(a)$임을 보여라.
3. $b \in G$이면 $ab$의 위수가 유한한 것은 정확히 $ba$의 위수가 유한할 때이고, 그때 두 위수가 같음을 보여라.
:::

:::solution
세 원소의 곱은 [[group|군]]의 표기의 약속대로 괄호 없이 쓰고, 네 개 이상의 곱은 괄호를 친다. 결합법칙은 군의 조건 (1)이다.

1. [[mathematical-induction|수학적 귀납법]]으로 보인다. [[power-in-a-group|군의 거듭제곱]]의 (1)에 의해 $(gag^{-1})^1 = gag^{-1} = ga^1g^{-1}$이다. $(gag^{-1})^n = ga^ng^{-1}$이라 하자. 거듭제곱의 (1)과 귀납 가정에 의해
   $$
   \begin{aligned} &(gag^{-1})^{n+1} \\ &= (gag^{-1})^n(gag^{-1}) \\ &= \bigl((ga^n)g^{-1}\bigr)\bigl(g(ag^{-1})\bigr) \end{aligned}
   $$
   이다. $u = ga^n$, $v = ag^{-1}$로 두면 결합법칙에 의해 $(ug^{-1})(gv) = u\bigl((g^{-1}g)v\bigr) = u(ev) = uv$이고,
   $$
   \begin{aligned} uv &= (ga^n)(ag^{-1}) \\ &= g\bigl((a^na)g^{-1}\bigr) \\ &= g(a^{n+1}g^{-1}) = ga^{n+1}g^{-1} \end{aligned}
   $$
   이다(거듭제곱의 (1)의 $a^{n+1} = a^na$). 따라서 $n + 1$에서도 성립한다.

2. 먼저 $x \in G$에 대하여 $gxg^{-1} = e$인 것은 정확히 $x = e$일 때임을 보인다. $x = e$이면 $geg^{-1} = gg^{-1} = e$이다. 거꾸로 $gxg^{-1} = e$이면 $(gx)g^{-1} = gg^{-1}$이고, [[group-basic-properties|군의 기본 성질]]의 (7)의 오른쪽 소거에 의해 $gx = g = ge$이며, 왼쪽 소거에 의해 $x = e$이다.

   이것과 1에 의해 모든 자연수 $n$에서 $(gag^{-1})^n = e$인 것은 정확히 $ga^ng^{-1} = e$일 때, 곧 정확히 $a^n = e$일 때이다. 따라서 [[order-of-an-element|원소의 위수]]의 집합 $N_a = \{n \in \mathbb{N} : a^n = e\}$와 $N_{gag^{-1}} = \{n \in \mathbb{N} : (gag^{-1})^n = e\}$는 같다. 위수가 유한하다는 것은 이 집합이 공집합이 아니라는 것이므로 앞의 동치가 성립한다. $a$의 위수가 유한하고 $m = \operatorname{ord}(a)$이면 $m \in N_{gag^{-1}}$이고 $N_{gag^{-1}} = N_a$의 모든 원소 $n$에서 $m \le n$이므로, 원소의 위수의 정의의 마지막 문장에 의해 $\operatorname{ord}(gag^{-1}) = m$이다.

3. 결합법칙에 의해 $a^{-1}(ab)a = a^{-1}\bigl(a(ba)\bigr) = (a^{-1}a)(ba) = ba$이고, 군의 기본 성질의 (5)에 의해 $a = (a^{-1})^{-1}$이다. 곧 $ba = g(ab)g^{-1}$이고 $g = a^{-1}$이다. 2를 원소 $ab$와 $g = a^{-1}$에 쓰면 된다.
:::

:::exercise[위수가 무한한 원소와 부분군의 개수]
군 $G$의 원소 $a$의 위수가 무한하다고 하자.

1. 자연수 $k$, $l$이 $k < l$이면 $\langle a^k \rangle \ne \langle a^l \rangle$임을 보여라.
2. $G$의 부분군 전체의 집합 $\mathcal{S}$가 무한집합임을 보여라.
:::

:::solution
1. $\langle a^k \rangle = \langle a^l \rangle$이라 하자. [[cyclic-subgroup|순환 부분군]]의 (1)에 의해 $a^k \in \langle a^k \rangle = \langle a^l \rangle$이므로 $a^k = (a^l)^j$인 정수 $j$가 있고, [[laws-of-exponents|지수법칙]]의 (2)에 의해 $a^k = a^{lj}$이다. $a$의 위수가 무한하므로 [[order-of-an-element|원소의 위수]]의 (4)에 의해 $k = lj$이다.

   [[well-ordering-principle|정렬 원리]]의 (Z5)와 [[prime-number|소수]] 항목의 (Z1)에 의해 $j \le 0$이거나 $j \ge 1$이다. $j \ge 1$이면 $l > 0$이므로 (Z3)에 의해 $lj \ge l \cdot 1 = l > k$이다. $j \le 0$이면 (Z2)에 의해 $lj \le 0 < k$이다. 두 경우 모두 $k = lj$와 (Z5)에 어긋나므로 $\langle a^k \rangle \ne \langle a^l \rangle$이다.

2. 순환 부분군의 (1)에 의해 모든 자연수 $k$에서 $\langle a^k \rangle \in \mathcal{S}$이므로, [[recursion-theorem|재귀 정리]]의 (1)에 의해 $f(k) = \langle a^k \rangle$인 함수 $f : \mathbb{N} \to \mathcal{S}$가 있다. 서로 다른 자연수 $k$, $l$은 (Z5)에 의해 $k < l$이거나 $l < k$이므로 1에 의해 $f(k) \ne f(l)$이다. 곧 $f$는 단사이다.

   $\mathcal{S}$가 유한집합이라고 하자. [[image-and-preimage|상]] $f(\mathbb{N})$은 $\mathcal{S}$의 부분집합이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 유한집합이고, 원소를 $m$개 갖는다고 하자. $f$는 단사이고 $f : \mathbb{N} \to f(\mathbb{N})$은 전사이므로 전단사이다. [[finite-set|유한집합]]의 (F3)에 의해 그 역관계는 $f(\mathbb{N})$에서 $\mathbb{N}$으로의 전단사이고, (F4)에 의해 $\mathbb{N}$은 원소를 $m$개 갖는다. 이것은 [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (1)에 어긋난다. 따라서 $\mathcal{S}$는 무한집합이다.
:::

:::exercise[ℤ₃₆의 두 순환 부분군의 교집합]
군 $(\mathbb{Z}_{36}, +)$에서

1. $\langle [8] \rangle$, $\langle [9] \rangle$, $\langle [10] \rangle$의 원소의 개수를 구하라.
2. $\langle [8] \rangle \cap \langle [9] \rangle = \{[0]\}$임을 보여라.
3. $\langle [8] \rangle \cap \langle [10] \rangle = \langle [4] \rangle$임을 보여라.
:::

:::solution
$G = (\mathbb{Z}_{36}, +)$는 [[cyclic-subgroup|순환 부분군]]의 (5), (6)과 [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $[1]$이 생성하는 원소 $36$개의 순환군이다. [[power-in-a-group|군의 거듭제곱]]의 (7)에 의해 $k \cdot [1] = [k]$이다. 정수 $c$가 두 정수 $u$, $w$의 공약수이면 정수 $s$, $t$에 대하여 $c \mid su + tw$이다($u = cu'$, $w = cw'$이면 $su + tw = c(su' + tw')$). $c$가 자연수 $v$를 나누면 [[prime-number|소수]] 항목의 진술에 의해 $c > 0$일 때 $c \le v$이고, $c \le 0$이면 $c < v$이다.

1. *최대공약수.* $4$는 $8$과 $36$의 공약수이고 공약수는 $36 - 4 \cdot 8 = 4$를 나누므로 $\gcd(8, 36) = 4$이다. $9 \mid 36$이므로 [[order-of-a-power|거듭제곱의 위수]]의 (1)에 의해 $\gcd(9, 36) = 9$이다. $2$는 $10$과 $36$의 공약수이고 공약수는 $36 - 3 \cdot 10 = 6$을 나누며, 따라서 $10 - 6 = 4$와 $6 - 4 = 2$도 나누므로 $\gcd(10, 36) = 2$이다.

   $36 = 4 \cdot 9 = 9 \cdot 4 = 2 \cdot 18$이므로 [[generators-of-zn|ℤ_n의 생성원]]의 (1)에 의해 $\operatorname{ord}([8]) = 9$, $\operatorname{ord}([9]) = 4$, $\operatorname{ord}([10]) = 18$이다. [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (3)에 의해 $|\langle [8] \rangle| = 9$, $|\langle [9] \rangle| = 4$, $|\langle [10] \rangle| = 18$이다.

2. 순환 부분군의 (1)에 의해 $\langle [8] \rangle$와 $\langle [9] \rangle$는 $G$의 부분군이고, [[subgroup-examples|부분군의 예와 교집합]]의 (4)에 의해 $I = \langle [8] \rangle \cap \langle [9] \rangle$도 $G$의 부분군이다. [[subgroups-of-finite-cyclic-group|유한 순환군의 부분군]]의 (3)에 의해 $I \subseteq \langle [8] \rangle$에서 $|I| \mid 9$이고, $I \subseteq \langle [9] \rangle$에서 $|I| \mid 4$이다. [[subgroup|부분군]]의 (1)에 의해 $[0] \in I$이므로 $I \ne \emptyset$이고, [[finite-set|유한집합]]의 (F2)에 의해 $|I| \ne 0$, 곧 $|I|$는 자연수이다. $|I|$는 $9$와 $4$의 공약수이므로 $9 - 2 \cdot 4 = 1$을 나누고, $|I| \le 1$이다. 따라서 $|I| = 1$이다. 원소가 하나인 집합 $I$는 그 원소 하나로만 이루어지고($h : \{1\} \to I$가 전단사이면 $I = \{h(1)\}$), $[0] \in I$이므로 $I = \{[0]\}$이다.

3. $18 = 9 \cdot 2$이므로 $|\langle [8] \rangle| \mid |\langle [10] \rangle|$이고, 유한 순환군의 부분군의 (3)에 의해 $\langle [8] \rangle \subseteq \langle [10] \rangle$이다. 따라서 $\langle [8] \rangle \cap \langle [10] \rangle = \langle [8] \rangle$이다. 한편 거듭제곱의 위수의 (5)를 위수가 $36$인 $[1]$과 $k = 8$, $d = \gcd(8, 36) = 4$에 쓰면 $\langle 8 \cdot [1] \rangle = \langle 4 \cdot [1] \rangle$, 곧 $\langle [8] \rangle = \langle [4] \rangle$이다. 따라서 $\langle [8] \rangle \cap \langle [10] \rangle = \langle [4] \rangle$이다.
:::

:::exercise[교환되는 두 원소의 곱의 위수]
$G$가 군이고 $a, b \in G$가 $ab = ba$를 만족하며, $\operatorname{ord}(a) = m$, $\operatorname{ord}(b) = n$이고 $\gcd(m, n) = 1$이라 하자.

1. $\langle a \rangle \cap \langle b \rangle = \{e\}$임을 보여라.
2. $\operatorname{ord}(ab) = mn$임을 보여라.
3. $(\mathbb{Z}_{12}, +)$의 $[4]$와 $[3]$에 2를 써서 $[4] + [3]$의 위수를 구하고, [[generators-of-zn|ℤ_n의 생성원]]의 (1)로 검산하라.
:::

:::solution
[[laws-of-exponents|지수법칙]]의 번호를 "지수법칙의 (k)"로, [[order-of-an-element|원소의 위수]]의 번호를 "원소의 위수의 (k)"로 적는다.

1. [[cyclic-subgroup|순환 부분군]]의 (1)과 [[subgroup|부분군]]의 (1)에 의해 $e$는 $\langle a \rangle$와 $\langle b \rangle$에 속한다. 거꾸로 $x \in \langle a \rangle \cap \langle b \rangle$이면 $x = a^i = b^j$인 정수 $i$, $j$가 있다. 지수법칙의 (2)와 [[power-in-a-group|군의 거듭제곱]]의 (3)에 의해
   $$
   \begin{aligned} x^m &= (a^i)^m = a^{im} \\ &= (a^m)^i = e^i = e, \\ x^n &= (b^j)^n = (b^n)^j = e^j = e \end{aligned}
   $$
   이다. [[bezout-identity|베주 항등식]]에 의해 $mu + nv = 1$인 정수 $u$, $v$가 있고, 거듭제곱의 (1)과 지수법칙의 (1), (2)에 의해 $x = x^1 = x^{mu}x^{nv} = (x^m)^u(x^n)^v = e^ue^v = e$이다. 따라서 $\langle a \rangle \cap \langle b \rangle = \{e\}$이다.

2. *$(ab)^{mn} = e$.* $ab = ba$이므로 지수법칙의 (4)와 (2)에 의해 $(ab)^{mn} = a^{mn}b^{mn} = (a^m)^n(b^n)^m = e^ne^m = e$이다. $m$, $n$은 자연수이므로 $mn$도 자연수이고, $ab$의 위수는 유한하다.

   *$(ab)^k = e$이면 $mn \le k$.* 자연수 $k$가 $(ab)^k = e$라 하자. 지수법칙의 (4)에 의해 $a^kb^k = e$이고, [[group-basic-properties|군의 기본 성질]]의 (3)과 지수법칙의 (3)에 의해 $a^k = (b^k)^{-1} = b^{-k}$이다. 이 원소는 $\langle a \rangle \cap \langle b \rangle$에 속하므로 1에 의해 $a^k = e$이고 $b^{-k} = e$이다. 지수법칙의 (3)과 군의 기본 성질의 (4)에 의해 $b^k = (b^{-k})^{-1} = e^{-1} = e$이다. 원소의 위수의 (2)에 의해 $m \mid k$이고 $n \mid k$이며, [[coprime-divisors-product-divides|서로소인 두 약수의 곱은 약수이다]]에 의해 $mn \mid k$, 곧 $k = mn \cdot c$인 정수 $c$가 있다. $c \le 0$이면 [[prime-number|소수]] 항목의 (Z2)에 의해 $k \le 0$이 되어 $k > 0$에 어긋나므로([[well-ordering-principle|정렬 원리]]의 (L1)) $c > 0$이고, (Z1)에 의해 $c \ge 1$이며, (Z3)에 의해 $k = mn \cdot c \ge mn$이다.

   원소의 위수의 정의의 마지막 문장에 의해 $\operatorname{ord}(ab) = mn$이다.

3. $(\mathbb{Z}_{12}, +)$는 아벨군이므로 $[4] + [3] = [3] + [4]$이다. $4 \mid 12$, $3 \mid 12$이므로 [[order-of-a-power|거듭제곱의 위수]]의 (1)에 의해 $\gcd(4, 12) = 4$, $\gcd(3, 12) = 3$이고, $12 = 4 \cdot 3 = 3 \cdot 4$이므로 ℤ_n의 생성원의 (1)에 의해 $\operatorname{ord}([4]) = 3$, $\operatorname{ord}([3]) = 4$이다. $3$과 $4$의 공약수는 $4 - 3 = 1$을 나누어 $1$ 이하이고 $1$은 공약수이므로 $\gcd(3, 4) = 1$이다. 2에 의해 $\operatorname{ord}([4] + [3]) = 12$이다.

   검산: $[4] + [3] = [7]$이다. $7$과 $12$의 공약수는 $7 \cdot 7 - 4 \cdot 12 = 1$을 나누므로 $\gcd(7, 12) = 1$이고, $12 = 1 \cdot 12$이므로 ℤ_n의 생성원의 (1)에 의해 $\operatorname{ord}([7]) = 12$이다.
:::

:::exercise[두 가정이 빠지면 곱의 위수가 달라지는 예]
문제 6의 결론 $\operatorname{ord}(ab) = mn$에서 두 가정 $ab = ba$와 $\gcd(m, n) = 1$을 각각 뺄 수 없음을 다음 예로 보여라.

1. $X = \{1, 2, 3\}$이고 $s, r \in S_3$이 $s(1) = 2$, $s(2) = 1$, $s(3) = 3$, $r(1) = 2$, $r(2) = 3$, $r(3) = 1$이면 $\operatorname{ord}(s) = 2$, $\operatorname{ord}(r) = 3$이지만 $\operatorname{ord}(sr) = 2$이다.
2. $(\mathbb{Z}_4, +)$에서 $a = b = [2]$이면 $\operatorname{ord}(a) = \operatorname{ord}(b) = 2$이지만 $\operatorname{ord}(a + b) = 1$이다.
:::

:::solution
1. [[symmetric-group|대칭군]]의 (1)에 의해 $S_3$의 곱은 합성이고 항등원은 $i_X$이다. 두 치환이 같은 것은 세 점에서 값이 같을 때이다([[function|함수]]의 함수의 같음). $s$와 $r$은 각각 세 값이 서로 다르고 $1, 2, 3$이 모두 나오므로 [[injective-surjective-bijective|전단사]]이고 $S_3$의 원소이다.

   - $s(1) = 2 \ne 1$이므로 $s \ne i_X$이다. $(ss)(1) = s(2) = 1$, $(ss)(2) = s(1) = 2$, $(ss)(3) = 3$이므로 $s^2 = i_X$이다.
   - $r(1) = 2 \ne 1$이므로 $r \ne i_X$이다. $(rr)(1) = r(2) = 3$, $(rr)(2) = r(3) = 1$, $(rr)(3) = r(1) = 2$이므로 $r^2 \ne i_X$이다. $r^3 = r^2r$이므로 $r^3(1) = r^2(2) = 1$, $r^3(2) = r^2(3) = 2$, $r^3(3) = r^2(1) = 3$이고 $r^3 = i_X$이다.
   - $(sr)(1) = s(2) = 1$, $(sr)(2) = s(3) = 3$, $(sr)(3) = s(1) = 2$이므로 $sr \ne i_X$이고, $\bigl((sr)(sr)\bigr)(1) = 1$, $\bigl((sr)(sr)\bigr)(2) = (sr)(3) = 2$, $\bigl((sr)(sr)\bigr)(3) = (sr)(2) = 3$이므로 $(sr)^2 = i_X$이다.

   [[power-in-a-group|군의 거듭제곱]]의 (1)에 의해 $x^2 = xx$, $x^3 = x^2x$이다. [[order-of-an-element|원소의 위수]]의 정의에 의해(지수 $1$, $2$에서 항등원이 되는지를 차례로 보았다) $\operatorname{ord}(s) = 2$, $\operatorname{ord}(r) = 3$, $\operatorname{ord}(sr) = 2$이다. $\gcd(2, 3) = 1$이지만($3 - 2 = 1$) $\operatorname{ord}(sr) = 2 \ne 6$이다. 문제 6의 가정 가운데 깨진 것은 $sr = rs$이다. 실제로 $(rs)(1) = r(2) = 3$이고 $(sr)(1) = 1$이므로 $rs \ne sr$이다.

2. $(\mathbb{Z}_4, +)$는 아벨군이므로 $a + b = b + a$이다. $[2] \ne [0]$이고 $[2] + [2] = [4] = [0]$이므로([[integers-modulo-n|법 n의 정수]]의 (1), $4 - 0 = 4$) 원소의 위수의 정의에 의해 $\operatorname{ord}([2]) = 2$이다. $a + b = [0]$이므로 원소의 위수의 (1)에 의해 $\operatorname{ord}(a + b) = 1 \ne 4 = 2 \cdot 2$이다. 이 예에서 깨진 가정은 $\gcd(2, 2) = 2 \ne 1$이다(2는 $2$의 양의 약수 가운데 가장 크다).
:::
