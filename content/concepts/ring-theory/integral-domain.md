---
title: 영인자와 정역
title_en: Zero Divisors and Integral Domains
aliases: [영인자, 정역, 소거법칙, zero divisor, integral domain, cancellation law]
kind: definition
field: ring-theory
msc: ["13"]
level: undergrad
summary: 가환환에서 0이 아닌 원소 a가 0이 아닌 b와 곱해 0이 되면 a를 영인자라 하고, 영인자가 없는 단위원을 갖는 가환환을 정역이라 한다. 정역인 것은 소거법칙이 성립하는 것과 같고, ℤ와 ℝ은 정역이며, n ≥ 2일 때 ℤ_n이 정역인 것은 n이 소수일 때이다.
requires: [ring, ring-basic-properties, ring-examples, subring, integers-modulo-n, equivalence-classes-equal-iff-related, congruence-modulo-n, divisibility, prime-number, euclids-lemma, integer-cancellation, well-ordering-principle, real-number-arithmetic, recursion-theorem, matrix, matrix-product, finite-sum-of-vectors]
sources:
  - ref: judson-abstract-algebra
    loc: 16.1절 영인자의 정의 p.191, 정역의 정의 p.190, 16.2절 첫머리의 정의 p.193, Proposition 16.15 p.194, Example 16.2, 16.4, 16.6 p.191, 16.4절 Example 16.39 p.199, 16.7절 연습문제 37 p.207
    checked: original
    note: "출처는 영인자를 가환환의 0 이 아닌 원소로서 ab = 0 인 0 이 아닌 b 가 있는 것으로 정의한다(p.191, 16.2절 첫머리 p.193 에서 다시). 정역은 p.190 에서 '단위원을 갖는 가환환으로서 ab = 0 이면 a = 0 또는 b = 0 인 것', p.193 에서 '영인자가 없는 단위원을 갖는 가환환'으로 두 번 정의하며, 이 항목은 둘이 같다는 것을 정의 문장에 함께 적는다. (1)은 출처 Proposition 16.15(p.194)와 같은 진술, 같은 증명 경로이다. 출처는 b − c = 0 에서 b = c 를 얻는 근거를 적지 않고, 이 항목은 덧셈의 결합법칙으로 적는다. (2)의 ℤ 는 출처 Example 16.2(p.191, 'Certainly if ab = 0 …')와 같고, ℝ 은 출처가 Example 16.3(p.191)에서 체라 하고 p.199 에서 '모든 체는 정역'이라 적는 데서 나오는 것이다. (3)은 출처 Example 3.1(p.29, 3 · 4 ≡ 0 (mod 12))과 Example 16.4(p.191)와 같은 발상이고, 출처는 Example 16.17(p.194)에서 ℤ_p 가 체임을 명제 3.4 로 보이고, Example 16.39(p.199)에서 'ℤ/nℤ ≅ ℤ_n 은 n 이 소수일 때만 정역'이라고 적고 증명을 적지 않는다. 이 항목은 (ii)를 유클리드 보조정리로 증명한다. (4)는 출처에 명제로 없다(검색어 'subring.{0,40}integral domain|integral domain.{0,40}subring' 2건, 'contain(s|ing) (the )?(identity|1)' 2건, 'subring' 30건; 18장 연습문제 4(p.235)는 '1 을 포함하는 체의 부분환은 정역인가'를 묻는다 — 가역원과 체 항목의 (6)과 같은 물음). (5)는 출처 연습문제 16.37(p.207)의 앞부분이다. (6)은 출처 Example 16.6(p.191)이 2 × 2 행렬에서 'A, B 가 0 이 아니어도 AB = 0 일 수 있다'고 말하는 것과 같은 결론이다. 출처는 영인자를 가환환에서만 정의한다(p.191, p.193). 예시(ℤ₇ 에서 [3]x 를 풀기)는 출처 연습문제 3.1(a)(p.40, 3x ≡ 2 (mod 7))와 같은 종류의 계산이다. 둘째 반례(ℤ₈)의 곱 2·1 = 2·5 와 4·4 = 0 은 출처 Example 3.2 의 ℤ₈ 곱셈표(Figure 3.3, p.29)에 있다. 출처는 그 표로 2, 4, 6 에 곱셈의 역원이 없음을 보인다. 셋째 반례(ℤ₆ 의 [3], [4])는 연습문제 16.37 뒷부분(0, 1 이 아닌 멱등원을 갖는 환)의 답에 해당한다(출처 힌트 p.330 은 M₂(ℝ) 를 가리킨다). 첫째 확인 질문(ℤ₁₀ 의 영인자)은 출처 연습문제 16.3(a)(p.204, ℤ₁₀ 의 단원, 힌트 {1, 3, 7, 9})와 같은 대상이고 그 나머지를 묻는다. 둘째 확인 질문(2ℤ)은 출처 Example 16.9(p.193)의 nℤ 와 같은 대상이다. 출처 p.194 의 'due to Wedderburn' 같은 역사 서술은 옮기지 않았다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 올린 뒤 표본 독립 검토 1회(수학 오류 0건)의 지적을 고쳤다. 경계 경우(영환, 소수의 1·p 분해)에서 거짓이 되는 문장과 근거 누락을 고침"
added: 2026-11-19
---

:::statement
$R$이 [[ring|환]]이라 하자. $0$, $1$, 곱 $ab$, $a - b$는 [[ring|환]]의 표기이다.

$R$이 가환환이고 $a \in R$이라 하자. $a$가 $R$의 **영인자**(zero divisor)인 것은 정확히 $a \ne 0$이고 $ab = 0$인 $b \ne 0$이 $R$에 있을 때이다. 영인자는 가환환에서만 정의한다.

$R$이 **정역**(integral domain)인 것은 정확히 $R$이 단위원을 갖는 가환환이고 영인자를 갖지 않을 때이다. 곧 단위원을 갖는 가환환 $R$이 정역인 것은 정확히 모든 $a, b \in R$에 대하여 $ab = 0$이면 $a = 0$이거나 $b = 0$일 때이다. 영환 $\{0\}$은 단위원을 갖는 환이 아니므로 정역이 아니다.

다음이 성립한다.

1. (소거법칙) $R$이 단위원을 갖는 가환환이라 하자. $R$이 정역인 것은 정확히 다음이 성립할 때이다: 모든 $a, b, c \in R$에 대하여 $a \ne 0$이고 $ab = ac$이면 $b = c$이다.
2. (정수와 실수) [[ring-examples|환의 예]]의 (1), (2)의 환 $\mathbb{Z}$와 $\mathbb{R}$은 정역이다.
3. (법 $n$의 정수) $n$이 자연수이고 $\mathbb{Z}_n$이 [[ring-examples|환의 예]]의 (3)의 환이라 하자.
   - (i) $n \ge 2$이고 $n$이 소수가 아니면, $1 < d < n$이고 $1 < c < n$이며 $n = dc$인 정수 $d$, $c$가 있고, 이때 $[d] \ne [0]$, $[c] \ne [0]$, $[d][c] = [0]$이다. 따라서 $[d]$는 $\mathbb{Z}_n$의 영인자이고 $\mathbb{Z}_n$은 정역이 아니다.
   - (ii) $n$이 소수이면 $\mathbb{Z}_n$은 정역이다.
   - (iii) $n = 1$이면 $\mathbb{Z}_1$은 영환이므로 정역이 아니다.
   
   따라서 $\mathbb{Z}_n$이 정역인 것은 정확히 $n$이 소수일 때이다.
4. (부분환) $R$이 정역이고 $S$가 $1 \in S$인 $R$의 [[subring|부분환]]이면 $S$는 정역이다.
5. (곱해서 자기 자신이 되는 원소) $R$이 정역이고 $a \in R$이 $aa = a$를 만족하면 $a = 0$이거나 $a = 1$이다.
6. (행렬) $n \ge 2$인 자연수 $n$에 대하여, [[ring-examples|환의 예]]의 (5)의 환 $M_n(\mathbb{R})$에는 $N \ne O$이고 $NN = O$인 행렬 $N$이 있다($O$는 영행렬). 곧 영행렬이 아닌 두 행렬의 곱이 영행렬일 수 있다. $M_n(\mathbb{R})$은 가환환이 아니므로($n \ge 2$) 위의 영인자와 정역의 정의는 이 환에 쓰지 않는다.
:::

:::english
Let $R$ be a ring. The notation $0$, $1$, the product $ab$ and $a - b$ are those of the entry on rings.

Let $R$ be a commutative ring and $a \in R$. Then $a$ is a **zero divisor** of $R$ exactly when $a \ne 0$ and there is $b \ne 0$ in $R$ with $ab = 0$. Zero divisors are defined only in commutative rings.

$R$ is an **integral domain** exactly when $R$ is a commutative ring with unity that has no zero divisors. That is, a commutative ring with unity $R$ is an integral domain exactly when, for all $a, b \in R$, $ab = 0$ implies $a = 0$ or $b = 0$. The zero ring $\{0\}$ is not a ring with unity, so it is not an integral domain.

The following hold.

1. (Cancellation law) Let $R$ be a commutative ring with unity. Then $R$ is an integral domain exactly when the following holds: for all $a, b, c \in R$, if $a \ne 0$ and $ab = ac$, then $b = c$.
2. (Integers and real numbers) The rings $\mathbb{Z}$ and $\mathbb{R}$ of (1) and (2) in the entry on examples of rings are integral domains.
3. (Integers modulo $n$) Let $n$ be a natural number and let $\mathbb{Z}_n$ be the ring of (3) in the entry on examples of rings.
   - (i) If $n \ge 2$ and $n$ is not prime, then there are integers $d$, $c$ with $1 < d < n$, $1 < c < n$ and $n = dc$, and for them $[d] \ne [0]$, $[c] \ne [0]$ and $[d][c] = [0]$. Hence $[d]$ is a zero divisor of $\mathbb{Z}_n$ and $\mathbb{Z}_n$ is not an integral domain.
   - (ii) If $n$ is prime, then $\mathbb{Z}_n$ is an integral domain.
   - (iii) If $n = 1$, then $\mathbb{Z}_1$ is the zero ring, so it is not an integral domain.
   
   Hence $\mathbb{Z}_n$ is an integral domain exactly when $n$ is prime.
4. (Subrings) If $R$ is an integral domain and $S$ is a subring of $R$ with $1 \in S$, then $S$ is an integral domain.
5. (Elements equal to their own square) If $R$ is an integral domain and $a \in R$ satisfies $aa = a$, then $a = 0$ or $a = 1$.
6. (Matrices) For every natural number $n \ge 2$, the ring $M_n(\mathbb{R})$ of (5) in the entry on examples of rings contains a matrix $N$ with $N \ne O$ and $NN = O$ (where $O$ is the zero matrix). That is, a product of two matrices that are not the zero matrix can be the zero matrix. Since $M_n(\mathbb{R})$ is not a commutative ring ($n \ge 2$), the definitions of zero divisor and integral domain above are not applied to this ring.
:::

## 직관

정수에서는 곱이 $0$이면 둘 가운데 하나가 $0$입니다. 이 성질 덕분에 $x(x - 3) = 0$에서 $x = 0$이나 $x = 3$을 읽어 내고, $2x = 2y$에서 양변의 $2$를 지웁니다. 환의 공리만으로는 이 성질이 나오지 않습니다. $\mathbb{Z}_6$에서는 $[2][3] = [6] = [0]$이기 때문입니다. 영인자는 이렇게 "$0$이 아닌데 $0$이 아닌 짝과 곱해 $0$을 만드는" 원소이고, 정역은 그런 원소가 없는 단위원을 갖는 가환환입니다.

비유하자면 영인자가 있는 환은 "흔적 없이 지워지는" 계산이 있는 장부와 같습니다. 0이 아닌 $a$를 곱해 $0$이 되는 0이 아닌 $b$가 있으면, $a$를 곱한 결과 $ab$만 보고는 $b$를 되찾을 수 없습니다($a0$도 $0$이기 때문입니다). 장부의 항목이 환의 원소, $a$를 곱한 결과에서 원래 항목을 되찾는 일이 소거법칙 $ab = ac \Rightarrow b = c$입니다. (1)은 바로 이 둘, 곧 "곱이 $0$이면 한쪽이 $0$"과 "$0$이 아닌 원소는 지울 수 있다"가 같은 조건이라는 것입니다.

$n \ge 2$인 $\mathbb{Z}_n$에서는 $n$을 $1$보다 큰 두 수의 곱 $dc$로 쪼갤 수 있느냐가 갈림길입니다. 쪼개지면 $[d][c] = [n] = [0]$이 영인자를 주고, 쪼개지지 않는 소수 $p$에서는 유클리드 보조정리가 "$p$가 곱을 나누면 한쪽을 나눈다"를 보장합니다.

:::remark[(1)–(5)의 증명]
(1) $R$이 정역이고 $a \ne 0$, $ab = ac$라 하자. [[ring-basic-properties|환의 기본 성질]]의 (4)에 의해 $a(b - c) = ab - ac = 0$이고, $a \ne 0$이므로 정역의 정의에 의해 $b - c = 0$이다. 양변에 $c$를 더하면 덧셈의 결합법칙에 의해 $b = b + ((-c) + c) = (b - c) + c = 0 + c = c$이다. 거꾸로 소거법칙이 성립하고 $ab = 0$이라 하자. $a = 0$이면 할 일이 없다. $a \ne 0$이면 환의 기본 성질의 (1)에 의해 $ab = 0 = a0$이므로 소거법칙에 의해 $b = 0$이다. 따라서 $R$은 정역이다.

(2) [[ring-examples|환의 예]]의 (1), (2)에 의해 둘 다 단위원을 갖는 가환환이다. 정수 $a$, $b$가 $ab = 0$이면 [[integer-cancellation|정수의 소거법칙]]의 (1)에 의해 $a = 0$이거나 $b = 0$이고, 실수 $a$, $b$가 $ab = 0$이면 [[real-number-arithmetic|실수의 계산 법칙]]의 (K10)에 의해 $a = 0$이거나 $b = 0$이다.

(3) 아래에서 정수 $x$, $y$에 대하여 $[x] = [y]$인 것은 정확히 $x \equiv y \pmod n$, 곧 $n \mid x - y$일 때이다([[equivalence-classes-equal-iff-related|동치류가 같을 조건]], [[congruence-modulo-n|법 n 합동]]). [[integers-modulo-n|법 n의 정수]]의 (2)에 의해 $[x][y] = [xy]$이다.

(i) $n \ge 2$이고 $n$이 소수가 아니면 [[prime-number|소수]]의 진술에 의해 $1$과 $n$이 아닌 $n$의 양의 약수 $d$가 있다. 같은 진술에 의해 $1 \le d \le n$이고, $d \ne 1$, $d \ne n$이므로 $1 < d < n$이다. $n = dc$인 정수 $c$를 잡는다. $c \le 0$이면 양수 $d$와 $0$ 이하인 $c$의 곱 $n$이 $0$ 이하가 되어((Z2)) $n \ge 2$에 어긋나므로 $c > 0$이고, $n = cd$이므로 $c$도 $n$의 양의 약수이며 $1 \le c \le n$이다. $c = 1$이면 $n = d$, $c = n$이면 $n = dn$이고 (Z4)에 의해 $d = 1$이 되어 어느 쪽도 $d$의 선택에 어긋난다. 따라서 $1 < c < n$이다. (Z1)에 의해 $0 \le 0 < d \le n - 1$, $0 < c \le n - 1$이므로 [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $[d] \ne [0]$, $[c] \ne [0]$이다. $dc - 0 = n = n \cdot 1$이므로 $[d][c] = [dc] = [0]$이다. 따라서 $[d]$는 영인자이다. 여기서 (Z1), (Z2), (Z4)는 [[prime-number]]의 진술에서 받아들인 성질이고, $d < n$에서 $d \le n - 1$을 얻을 때 [[well-ordering-principle|정렬 원리]]의 진술의 (Z7)을 쓴다.

(ii) $n = p$가 소수이면 $p$의 양의 약수는 $1$과 $p$ 둘이므로 $p \ne 1$이고, $p$는 양의 정수이므로 (Z5)와 (Z1)에 의해 $p \ge 2$이다. [[ring-examples|환의 예]]의 (3)에 의해 $\mathbb{Z}_p$는 단위원 $[1]$을 갖는 가환환이다. $[a][b] = [0]$이면 $[ab] = [0]$이므로 $p \mid ab$이고, [[euclids-lemma|유클리드 보조정리]]의 (1)에 의해 $p \mid a$이거나 $p \mid b$이다. 곧 $p \mid a - 0$이거나 $p \mid b - 0$이므로 $[a] = [0]$이거나 $[b] = [0]$이다. 따라서 $\mathbb{Z}_p$는 정역이다.

(iii) [[ring-examples|환의 예]]의 (3)에 의해 $\mathbb{Z}_1$은 영환이고 단위원을 갖는 환이 아니다.

마지막 문장: $n$이 소수이면 (ii)에 의해 정역이다. $n$이 소수가 아니면, $n = 1$이거나 $n \ge 2$이고((Z5), (Z1)), 각각 (iii)과 (i)에 의해 정역이 아니다.

(4) [[subring|부분환]]의 (5)의 (i)에 의해 $S$는 단위원 $1$을 갖는 환이고, 같은 항목의 (3)의 (ii)에 의해 가환환이다. 같은 항목의 (1)에 의해 $S$의 $0$과 곱은 $R$의 것과 같으므로, $a, b \in S$이고 $ab = 0$이면 $R$에서 $ab = 0$이고 $a = 0$이거나 $b = 0$이다.

(5) $aa = a = a1$이다. $a \ne 0$이면 (1)의 소거법칙에 의해 $a = 1$이다. 따라서 $a = 0$이거나 $a = 1$이다.
:::

:::remark[(6)의 증명]
$n \ge 2$이므로 $(1, 2) \in \{1, \dots, n\} \times \{1, \dots, n\}$이다. 각 $(j, k)$에 $(j, k) = (1, 2)$이면 $1$, 아니면 $0$을 대응시키면 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $n \times n$ [[matrix|행렬]] $N$이 정해진다. $N$의 $(1, 2)$ 성분은 $1 \ne 0$((K4))이므로 행렬의 (2)에 의해 $N \ne O$이다.

[[matrix-product|행렬의 곱]]의 (2)에 의해 $(NN)_{j,k}$는 $l$번째 항이 $n_{j,l} n_{l,k}$인 길이 $n$인 실수의 열의 합이다. 이 항이 $0$이 아니려면 $n_{j,l} \ne 0$이고 $n_{l,k} \ne 0$이어야 하므로((K9)에 의해 한쪽이 $0$이면 곱이 $0$) $(j, l) = (1, 2)$이고 $(l, k) = (1, 2)$, 곧 $l = 2$이고 $l = 1$이어야 하는데 이것은 불가능하다. 따라서 모든 항이 $0$이고, [[finite-sum-of-vectors|벡터의 유한 합]]의 (H5)(실수의 합은 $\mathbb{R}$을 벡터공간으로 본 경우이다)에 의해 $(NN)_{j,k} = 0$이다. 모든 $(j, k)$에서 그러하므로 행렬의 (2)에 의해 $NN = O$이다. [[ring-examples|환의 예]]의 (5)에 의해 $n \ge 2$이면 $M_n(\mathbb{R})$은 가환환이 아니다.
:::

## 예시와 반례

:::example[법 7의 정수에서 소거하기]
(3)의 (ii)에 의해 $\mathbb{Z}_7$은 정역이므로 (1)의 소거법칙이 성립합니다. $[3][x] = [3][5]$를 만족하는 $x$를 찾으면, $[3] \ne [0]$이므로 $[x] = [5]$뿐입니다. 실제로 $[3][5] = [15] = [1]$이고($15 - 1 = 14 = 7 \cdot 2$), $0$ 이상 $6$ 이하의 $x$ 가운데 $[3x] = [1]$인 것은 $3x$가 $1, 8, 15$ 가운데 하나인 $x = 5$뿐입니다.
:::

:::counterexample[법 8의 정수에서 [2]는 지울 수 없다]
$8 = 2 \cdot 4$이므로 (3)의 (i)에 의해 $\mathbb{Z}_8$은 정역이 아닙니다. 소거법칙도 실제로 깨집니다. $[2][1] = [2]$이고 $[2][5] = [10] = [2]$($10 - 2 = 8$)이며 $[2] \ne [0]$이지만, $0 \le 1 < 5 \le 7$이므로 [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $[1] \ne [5]$입니다. 또 $[4][4] = [16] = [0]$이므로 $[4]$는 자기 자신과 곱해 $[0]$이 되는 영인자입니다.
:::

:::counterexample[곱해서 자기 자신이 되는 원소가 0과 1 말고도 있는 환]
(5)의 가정에서 정역을 뺄 수는 없습니다. 정역이 아닌 $\mathbb{Z}_6$에서는 $[3][3] = [9] = [3]$($9 - 3 = 6$)이고 $[4][4] = [16] = [4]$($16 - 4 = 12$)인데, $[3]$과 $[4]$는 $[0]$도 $[1]$도 아닙니다(법 n의 정수의 (1)). 이 계산은 [[ring-examples|환의 예]]의 첫째 확인 질문의 답과 같습니다.
:::

## 확인 질문

:::check[$\mathbb{Z}_{10}$의 영인자를 모두 찾아라.]
$[2]$, $[4]$, $[5]$, $[6]$, $[8]$입니다. $[2][5] = [10] = [0]$, $[4][5] = [20] = [0]$, $[6][5] = [30] = [0]$, $[8][5] = [40] = [0]$, $[5][2] = [10] = [0]$이고 곱한 짝이 모두 $[0]$이 아니므로(법 n의 정수의 (1)) 이 다섯은 영인자입니다. 나머지 $[1]$, $[3]$, $[7]$, $[9]$는 영인자가 아닙니다. $[1][1] = [1]$, $[3][7] = [21] = [1]$, $[9][9] = [81] = [1]$이므로 이 넷은 각각 $[v][u] = [1]$인 $[v]$를 가집니다. 그런 $[u]$에 대해 $[u][b] = [0]$이면 곱셈의 결합법칙과 [[ring-basic-properties|환의 기본 성질]]의 (1)에 의해 $[b] = [1][b] = ([v][u])[b] = [v]([u][b]) = [v][0] = [0]$입니다. $[0]$은 정의에 의해 영인자가 아닙니다.
:::

:::check[$\mathbb{Z}$의 부분환 $2\mathbb{Z}$는 정역인가?]
아닙니다. $2\mathbb{Z}$에서 곱이 $0$인 두 원소는 정수로서 곱이 $0$이므로 한쪽이 $0$이지만, [[ring-examples|환의 예]]의 (4)에 의해 $2\mathbb{Z}$에는 곱셈의 항등원이 없어 단위원을 갖는 환이 아닙니다. (4)에서 $1 \in S$를 뺄 수 없는 까닭이 이것입니다.
:::
