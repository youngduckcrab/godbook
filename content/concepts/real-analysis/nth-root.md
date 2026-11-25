---
title: n제곱근
title_en: nth Root
aliases: [거듭제곱근, n 제곱근, 세제곱근, nth root, n-th root]
kind: definition
field: real-analysis
msc: ["26A09"]
level: undergrad
summary: 0 이상인 실수 a 와 자연수 n 에 대하여 bⁿ = a 이고 b ≥ 0 인 실수 b 가 정확히 하나 있고, 그것을 a 의 n제곱근이라 한다. n = 1 이면 a 자신, n = 2 이면 제곱근 √a, a > 0 이면 실수 거듭제곱 a^{1/n} 과 같다. 곱과 역수, 거듭제곱과의 관계, 순서를 보존한다는 것을 함께 진술한다.
requires: [natural-numbers-are-infinite, prime-number, real-number-arithmetic, real-order-axioms, order-properties-of-reals, power-of-a-real-number, square-root-exists, natural-logarithm, real-power]
sources:
  - ref: lebl-basic-analysis
    loc: 1.2.1절 The set of real numbers 본문 (p.30), 1.2.5절 Exercise 1.2.11 (p.35), 3.3.2절 Example 3.3.11 (p.135), 4.4.1절 Corollary 4.4.3 과 그 증명 (p.177–178), 4.4.2절 Exercise 4.4.3, 4.4.4 (p.179), 5.4절 첫머리 (p.207)
    checked: original
    note: "출처 1.2.1절 본문(p.30)은 √2 의 존재 증명과 같은 방법으로 모든 x > 0 과 n ∈ ℕ 에 대해 rⁿ = x 인 양수 r 가 하나뿐임을 보일 수 있다고 적고 증명을 연습문제로 넘기며, Exercise 1.2.11(p.35)이 그것을 묻고 'Usually, r is denoted by x^{1/n}' 이라고 적는다. Example 3.3.11(p.135)은 사잇값 정리로 양수 y 의 k 제곱근의 존재를 보인다. Corollary 4.4.3(p.177)은 n ∈ ℕ 과 x ≥ 0 에 대해 yⁿ = x 인 y ≥ 0 이 하나뿐임을 진술하고 그것을 x^{1/n} 으로 쓰며, 증명(p.178)은 x = 0 은 'trivial' 이라 하고 x > 0 은 f(y) = yⁿ 의 순증가와 사잇값 정리로 보인다. 이 항목의 (1)은 Corollary 4.4.3 의 첫 문장과 같은 내용이다. 다만 이 항목은 기호를 ⁿ√a 로 두고, a^{1/n} 은 리만 적분 강의 real-power 의 뜻(밑이 양수일 때의 exp((1/n) ln a))으로만 쓰며 0 으로 넓히지 않는다. 존재는 출처의 경로 대신 a > 0 이면 real-power 의 (3), a = 0 이면 0 으로 보이고, 유일성은 해석학 입문 power-of-a-real-number 의 (6)의 (iii)으로 보인다. (3)의 (iii)이 두 기호가 양수에서 같다는 것이다. 출처 5.4절 첫머리(p.207)도 x > 0 의 x^{1/n} 을 'the unique positive nth root' 로 정의한다. 출처 Exercise 4.4.3, 4.4.4(p.179)는 짝수 n 에서 양수의 음의 n제곱근과 홀수 n 에서 모든 실수의 n제곱근을 묻는다. 이 항목은 음수의 n제곱근과 음의 n제곱근을 정의하지 않는다. 반례 '제곱하여 9 가 되는 두 실수'는 Exercise 4.4.3 이 n = 2 에서 묻는 음의 제곱근과 같은 대상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(경계 c = 0, L = 1 의 예 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
실수의 계산과 역수 $a^{-1}$은 [[real-number-arithmetic]]의 것이고, 순서는 [[real-order-axioms]]의 것이다. 거듭제곱 $b^n$($n$은 $0$ 이상인 정수)은 [[power-of-a-real-number]]의 것이고, 제곱근 $\sqrt{a}$는 [[square-root-exists]]의 것이다. $\mathbb{R}_{>0}$은 [[natural-logarithm]]의 것이고, 양수 밑의 실수 거듭제곱 $a^y$는 [[real-power]]의 것이다.

**$n$제곱근.** $a$를 $0 \le a$인 실수, $n$을 자연수라 하자. 아래 (1)에 의해 $b^n = a$이고 $0 \le b$인 실수 $b$가 정확히 하나 있다. 이 $b$를 $a$의 **$n$제곱근**($n$th root)이라 하고 $\sqrt[n]{a}$로 쓴다. 곧 $\sqrt[n]{a}$는 $0 \le \sqrt[n]{a}$이고 $\bigl(\sqrt[n]{a}\bigr)^n = a$인 실수이다. 음수의 $n$제곱근은 정의하지 않는다. $0 < a$이면 $\sqrt[n]{a}$는 [[real-power]]의 $a^{1/n}$과 같은 수이지만(아래 (3)의 (iii)), 기호 $a^{1/n}$은 그 항목대로 밑이 양수일 때만 쓰고 $a = 0$으로 넓히지 않는다.

다음이 성립한다. 아래에서 $a$, $c$는 $0$ 이상인 실수이고 $n$은 자연수이다.

1. (존재와 유일성) $b^n = a$이고 $0 \le b$인 실수 $b$가 정확히 하나 있다. 곧 실수 $b$가 $0 \le b$이고 $b^n = a$이면 $b = \sqrt[n]{a}$이다. $\sqrt[n]{0} = 0$이고, $0 < a$이면 $0 < \sqrt[n]{a}$이다.
2. (거듭제곱과 $n$제곱근) $0 \le t$인 실수 $t$에 대하여 $\sqrt[n]{t^n} = t$이다. 특히 $\sqrt[n]{1} = 1$이다. 또 $0$ 이상인 정수 $k$에 대하여 $\sqrt[n]{a^k} = \bigl(\sqrt[n]{a}\bigr)^k$이다.
3. (다른 기호와의 일치)
   - (i) $\sqrt[1]{a} = a$이다.
   - (ii) $\sqrt[2]{a} = \sqrt{a}$이다.
   - (iii) $0 < a$이면, 곧 $a \in \mathbb{R}_{>0}$이면 $\sqrt[n]{a} = a^{1/n}$이다.
4. (곱과 역수) $\sqrt[n]{ac} = \sqrt[n]{a}\,\sqrt[n]{c}$이다. $0 < a$이면 $\sqrt[n]{a^{-1}} = \bigl(\sqrt[n]{a}\bigr)^{-1}$이다.
5. (순서)
   - (i) $a < c$인 것은 정확히 $\sqrt[n]{a} < \sqrt[n]{c}$일 때이고, $a \le c$인 것은 정확히 $\sqrt[n]{a} \le \sqrt[n]{c}$일 때이다.
   - (ii) $0 \le r$인 실수 $r$에 대하여, $\sqrt[n]{a} \le r$인 것은 정확히 $a \le r^n$일 때이고, $\sqrt[n]{a} < r$인 것은 정확히 $a < r^n$일 때이다. 또 $r \le \sqrt[n]{a}$인 것은 정확히 $r^n \le a$일 때이고, $r < \sqrt[n]{a}$인 것은 정확히 $r^n < a$일 때이다.
   - (iii) $\sqrt[n]{a} < 1$, $\sqrt[n]{a} = 1$, $1 < \sqrt[n]{a}$인 것은 각각 정확히 $a < 1$, $a = 1$, $1 < a$일 때이다.
:::

:::english
Arithmetic of real numbers and the reciprocal $a^{-1}$ are those of the entry on real arithmetic, and the order is that of the order axioms of the reals. The power $b^n$ (for an integer $n \ge 0$) is that of the entry on powers of a real number, and the square root $\sqrt{a}$ is that of the entry on the existence of square roots. $\mathbb{R}_{>0}$ is that of the entry on the natural logarithm, and the real power $a^y$ with positive base is that of the entry on real powers.

**$n$th root.** Let $a$ be a real number with $0 \le a$ and let $n$ be a natural number. By (1) below there is exactly one real number $b$ with $b^n = a$ and $0 \le b$. This $b$ is called the **$n$th root** of $a$ and is written $\sqrt[n]{a}$. That is, $\sqrt[n]{a}$ is the real number with $0 \le \sqrt[n]{a}$ and $\bigl(\sqrt[n]{a}\bigr)^n = a$. The $n$th root of a negative number is not defined. If $0 < a$, then $\sqrt[n]{a}$ is the same number as $a^{1/n}$ of the entry on real powers ((3)(iii) below), but the symbol $a^{1/n}$ is used, as in that entry, only for a positive base and is not extended to $a = 0$.

The following hold. Below, $a$ and $c$ are real numbers $\ge 0$ and $n$ is a natural number.

1. (Existence and uniqueness) There is exactly one real number $b$ with $b^n = a$ and $0 \le b$. That is, if a real number $b$ satisfies $0 \le b$ and $b^n = a$, then $b = \sqrt[n]{a}$. Moreover $\sqrt[n]{0} = 0$, and if $0 < a$ then $0 < \sqrt[n]{a}$.
2. (Powers and $n$th roots) For a real number $t$ with $0 \le t$, $\sqrt[n]{t^n} = t$. In particular $\sqrt[n]{1} = 1$. Also, for an integer $k \ge 0$, $\sqrt[n]{a^k} = \bigl(\sqrt[n]{a}\bigr)^k$.
3. (Agreement with other symbols)
   - (i) $\sqrt[1]{a} = a$.
   - (ii) $\sqrt[2]{a} = \sqrt{a}$.
   - (iii) If $0 < a$, that is, $a \in \mathbb{R}_{>0}$, then $\sqrt[n]{a} = a^{1/n}$.
4. (Products and reciprocals) $\sqrt[n]{ac} = \sqrt[n]{a}\,\sqrt[n]{c}$. If $0 < a$, then $\sqrt[n]{a^{-1}} = \bigl(\sqrt[n]{a}\bigr)^{-1}$.
5. (Order)
   - (i) $a < c$ if and only if $\sqrt[n]{a} < \sqrt[n]{c}$, and $a \le c$ if and only if $\sqrt[n]{a} \le \sqrt[n]{c}$.
   - (ii) For a real number $r$ with $0 \le r$: $\sqrt[n]{a} \le r$ if and only if $a \le r^n$, and $\sqrt[n]{a} < r$ if and only if $a < r^n$. Also $r \le \sqrt[n]{a}$ if and only if $r^n \le a$, and $r < \sqrt[n]{a}$ if and only if $r^n < a$.
   - (iii) $\sqrt[n]{a} < 1$, $\sqrt[n]{a} = 1$, $1 < \sqrt[n]{a}$ hold if and only if $a < 1$, $a = 1$, $1 < a$, respectively.
:::

## 직관

$n$제곱근은 $0$ 이상인 수에서 $n$제곱을 되돌리는 연산입니다. 부피가 $8$인 정육면체의 한 변의 길이를 묻는 것과 같습니다. 한 변이 $b$이면 부피는 $b^3$이고, 길이는 $0$ 이상이므로 $b^3 = 8$이고 $0 \le b$인 $b$, 곧 $\sqrt[3]{8} = 2$가 답입니다. 정의의 조건 "$b^n = a$"가 "부피가 $a$"에, "$0 \le b$"가 "길이는 음수가 아니다"에 해당합니다. 비유가 맞지 않는 곳은 $n$이 $4$ 이상일 때 그림이 없다는 것과, $a = 0$이면 정육면체가 아니라 점이 된다는 것입니다. 정의는 $a = 0$도 받아들여 $\sqrt[n]{0} = 0$입니다.

$n$이 짝수이면 조건 $0 \le b$가 있어야 답이 하나로 정해집니다. $b$와 $-b$의 $n$제곱이 같기 때문입니다(반례 '제곱하여 9 가 되는 두 실수'). 이 항목은 음수의 $n$제곱근을 정의하지 않습니다.

리만 적분 강의의 [[real-power]]에 이미 양수 $a$의 $a^{1/n}$이 있습니다. 이 항목이 기호를 새로 두는 것은 $a = 0$을 함께 다루기 위해서입니다. 급수의 근 판정법은 $n$번째 항의 절댓값의 $n$제곱근을 쓰는데, 항이 $0$일 수 있습니다. $a^{1/n}$은 $\exp$와 $\ln$으로 정의되어 $a = 0$에서 뜻이 없으므로, (3)으로 양수에서 두 기호가 같다는 것만 밝히고 $0$에서는 $\sqrt[n]{a}$만 씁니다.

(5)는 $n$제곱근이 순서를 그대로 옮긴다는 것입니다. 특히 (ii)는 "$\sqrt[n]{a} \le r$"을 근호가 없는 "$a \le r^n$"으로 바꾸게 해 주어, 근호를 다루는 부등식을 거듭제곱의 부등식으로 옮길 때 씁니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (4)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이며, "거듭제곱 (6)"처럼 쓴 것은 [[power-of-a-real-number]]의 번호이다. 자연수 $n$은 양의 정수이므로([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]) [[prime-number]]의 (Z1)에 의해 $n \ge 1$이고, 순서 성질 (10)에 의해 이것을 실수의 부등식으로 읽어도 된다.

**1의 증명.** 먼저 유일성을 보인다. 실수 $b$, $b'$이 $0 \le b$, $0 \le b'$이고 $b^n = a = b'^n$이면, $n \ge 1$이므로 거듭제곱 (6)의 (iii)에 의해 $b = b'$이다. 따라서 조건을 만족하는 실수는 많아야 하나이다.

존재를 보인다. $0 \le a$이므로 [[real-order-axioms]]의 $\le$의 뜻에 의해 $a = 0$이거나 $0 < a$이다.

- $a = 0$이면 $b = 0$으로 둔다. 순서 성질 (1)의 (iv)에 의해 $0 \le 0$이고, $n \ge 1$이므로 거듭제곱 (2)의 (iv)에 의해 $0^n = 0 = a$이다.
- $0 < a$이면 $a \in \mathbb{R}_{>0}$이다. [[real-power]]의 (3)을 $m = n$으로 쓰면 $s^n = a$인 $s \in \mathbb{R}_{>0}$이 있고 그것은 $a^{1/n}$이다. 여기서 $s^n$은 [[real-power]]의 (1)에 의해 [[power-of-a-real-number]]의 거듭제곱 $s^n$과 같은 수이다. $s \in \mathbb{R}_{>0}$이므로 $0 < s$이고, 따라서 $0 \le s$이다. $b = s$로 둔다.

이로써 조건을 만족하는 실수가 정확히 하나 있다. 진술의 둘째 문장은 유일성을 다시 쓴 것이다.

$a = 0$일 때 위에서 찾은 $b$는 $0$이므로 $\sqrt[n]{0} = 0$이다. $0 < a$라 하자. $\sqrt[n]{a} = 0$이라면 거듭제곱 (2)의 (iv)에 의해 $a = 0^n = 0$인데, 순서 성질 (1)의 (i)에 의해 $0 < a$이면 $0 \ne a$이므로 모순이다. 따라서 $\sqrt[n]{a} \ne 0$이고, $0 \le \sqrt[n]{a}$와 $\le$의 뜻에 의해 $0 < \sqrt[n]{a}$이다.

**2의 증명.** $0 \le t$이면 거듭제곱 (6)의 (i)에 의해 $0 \le t^n$이므로 $\sqrt[n]{t^n}$이 정해진다. $t$는 $0 \le t$이고 $t^n = t^n$이므로 (1)의 둘째 문장에 의해 $\sqrt[n]{t^n} = t$이다. $t = 1$이면 거듭제곱 (2)의 (iv)에 의해 $1^n = 1$이고, 순서 성질 (5)의 (ii)에 의해 $0 \le 1$이므로 $\sqrt[n]{1} = \sqrt[n]{1^n} = 1$이다.

$k$를 $0$ 이상인 정수라 하고 $b = \sqrt[n]{a}$로 두자. 거듭제곱 (6)의 (i)에 의해 $0 \le a^k$이므로 $\sqrt[n]{a^k}$가 정해지고, 같은 (i)에 의해 $0 \le b^k$이다. 거듭제곱 (2)의 (ii)와, (K1)과 (K7)에 의해 정수 $kn$과 $nk$가 같다는 것에 의해
$$
(b^k)^n = b^{kn} = b^{nk} = (b^n)^k = a^k
$$
이다. 따라서 (1)의 둘째 문장에 의해 $\sqrt[n]{a^k} = b^k = \bigl(\sqrt[n]{a}\bigr)^k$이다.

**3의 증명.** (i) 거듭제곱 (1)에 의해 $a^1 = a$이고 $0 \le a$이므로, (1)의 둘째 문장을 $n = 1$, $b = a$에 쓰면 $\sqrt[1]{a} = a$이다. (ii) [[square-root-exists]]의 (1)에 의해 $0 \le \sqrt{a}$이고 $\sqrt{a}\,\sqrt{a} = a$이다. 거듭제곱 (1)에 의해 $\bigl(\sqrt{a}\bigr)^2 = \sqrt{a}\,\sqrt{a} = a$이므로, (1)의 둘째 문장을 $n = 2$, $b = \sqrt{a}$에 쓰면 $\sqrt[2]{a} = \sqrt{a}$이다. (iii) 1의 증명의 둘째 경우에서 본 것처럼, [[real-power]]의 (3)과 (1)에 의해 $0 < a^{1/n}$이고 $\bigl(a^{1/n}\bigr)^n = a$이다. (1)의 둘째 문장에 의해 $\sqrt[n]{a} = a^{1/n}$이다.

**4의 증명.** $b = \sqrt[n]{a}$, $d = \sqrt[n]{c}$로 두자. 순서 성질 (4)의 (iv)에 의해 $0 \le ac$이고 $0 \le bd$이며, 거듭제곱 (2)의 (iii)에 의해 $(bd)^n = b^n d^n = ac$이다. (1)의 둘째 문장에 의해 $\sqrt[n]{ac} = bd$이다.

$0 < a$라 하자. (1)에 의해 $0 < b$이므로 순서 성질 (1)의 (i)에 의해 $b \ne 0$이고, 순서 성질 (6)의 (i)에 의해 $0 < b^{-1}$이며 $0 < a^{-1}$이다. 거듭제곱 (3)에 의해 $(b^{-1})^n = (b^n)^{-1} = a^{-1}$이다. (1)의 둘째 문장에 의해 $\sqrt[n]{a^{-1}} = b^{-1}$이다.

**5의 증명.** (i) $b = \sqrt[n]{a}$, $d = \sqrt[n]{c}$로 두면 $0 \le b$, $0 \le d$, $b^n = a$, $d^n = c$이다. $b < d$이면 $n \ge 1$이므로 거듭제곱 (6)의 (ii)에 의해 $b^n < d^n$, 곧 $a < c$이다. 거꾸로 $a < c$, 곧 $b^n < d^n$이면 거듭제곱 (6)의 (iii)에 의해 $b < d$이다. 마찬가지로 $b \le d$이면 거듭제곱 (6)의 (ii)의 첫 문장에 의해 $a = b^n \le d^n = c$이고, $a \le c$이면 거듭제곱 (6)의 (iii)에 의해 $b \le d$이다.

(ii) $0 \le r$이면 거듭제곱 (6)의 (i)에 의해 $0 \le r^n$이고, (2)에 의해 $\sqrt[n]{r^n} = r$이다. (i)을 $c = r^n$에 쓰면 $a \le r^n$인 것은 정확히 $\sqrt[n]{a} \le r$일 때이고, $a < r^n$인 것은 정확히 $\sqrt[n]{a} < r$일 때이다. (i)을 $a$ 자리에 $r^n$, $c$ 자리에 $a$를 넣어 쓰면 $r^n \le a$인 것은 정확히 $r \le \sqrt[n]{a}$일 때이고, $r^n < a$인 것은 정확히 $r < \sqrt[n]{a}$일 때이다.

(iii) (2)에 의해 $\sqrt[n]{1} = 1$이다. (i)을 $c = 1$에 쓰면 $\sqrt[n]{a} < 1$인 것은 정확히 $a < 1$일 때이고, (i)을 $a$ 자리에 $1$, $c$ 자리에 $a$를 넣어 쓰면 $1 < \sqrt[n]{a}$인 것은 정확히 $1 < a$일 때이다. $a = 1$이면 $\sqrt[n]{a} = \sqrt[n]{1} = 1$이고, 거꾸로 $\sqrt[n]{a} = 1$이면 $a = \bigl(\sqrt[n]{a}\bigr)^n = 1^n = 1$이다(거듭제곱 (2)의 (iv)). $\blacksquare$
:::

## 예시와 반례

:::example[세제곱근과 네제곱근의 계산]
$2^3 = 8$이고 $0 \le 2$이므로 (1)에 의해 $\sqrt[3]{8} = 2$입니다. $8^{-1} = 1/8$이므로 (4)에 의해 $\sqrt[3]{1/8} = \bigl(\sqrt[3]{8}\bigr)^{-1} = 1/2$입니다.

$2^4 = 16$이고 $3^4 = 81$이므로 (1)에 의해 $\sqrt[4]{16} = 2$, $\sqrt[4]{81} = 3$입니다. $16 \cdot 81 = 1296$이므로 (4)에 의해 $\sqrt[4]{1296} = \sqrt[4]{16}\,\sqrt[4]{81} = 2 \cdot 3 = 6$입니다. 실제로 $6^4 = 36 \cdot 36 = 1296$입니다.
:::

:::example[0 과 1 의 n제곱근]
모든 자연수 $n$에서 $\sqrt[n]{0} = 0$이고 $\sqrt[n]{1} = 1$입니다((1), (2)). $n = 1$이면 (3)의 (i)에 의해 $\sqrt[1]{5} = 5$입니다. (5)의 (iii)에 의해 $0 \le a < 1$이면 모든 $n$에서 $\sqrt[n]{a} < 1$이고, $1 < a$이면 모든 $n$에서 $1 < \sqrt[n]{a}$입니다. 예컨대 $1/2 < 1$이므로 $\sqrt[5]{1/2} < 1$이고, (1)에 의해 $0 < \sqrt[5]{1/2}$입니다.
:::

:::counterexample[제곱하여 9 가 되는 두 실수]
$3 \cdot 3 = 9$이고 $(-3)(-3) = 3 \cdot 3 = 9$입니다([[real-number-arithmetic]]의 (K12)의 (iii)). 그래서 조건 $0 \le b$를 빼면 $3$과 $-3$이 모두 $b^2 = 9$를 만족하므로([[power-of-a-real-number]]의 (1)에 의해 $b^2 = bb$), $n$제곱근을 하나로 정할 수 없습니다. 조건 $0 \le b$를 붙이면 $3$만 남아 $\sqrt[2]{9} = 3$입니다.

음수에 대해서는 $n = 2$일 때 $b^2 = -4$인 실수 $b$가 아예 없습니다. [[power-of-a-real-number]]의 (1)과 [[order-properties-of-reals]]의 (5)의 (iii)에 의해 $b^2 = bb \ge 0$이기 때문입니다. $n = 3$이면 $(-2)^3 = -8$이지만, 이 항목은 음수의 $n$제곱근을 정의하지 않으므로 $\sqrt[3]{-8}$이라는 기호는 쓰지 않습니다.
:::

## 확인 질문

:::check[$\sqrt[3]{1000}$과 $\sqrt[3]{1/1000}$은 무엇인가?]
$10^3 = 1000$이고 $0 \le 10$이므로 (1)에 의해 $\sqrt[3]{1000} = 10$입니다. $1/1000 = 1000^{-1}$이므로 (4)에 의해 $\sqrt[3]{1/1000} = 10^{-1} = 1/10$입니다.
:::

:::check[$0 \le a$일 때 $\sqrt[3]{a} \le 2$인 것은 언제인가?]
정확히 $a \le 8$일 때입니다. (5)의 (ii)를 $r = 2$에 쓰면 $\sqrt[3]{a} \le 2$인 것은 정확히 $a \le 2^3 = 8$일 때입니다.
:::

:::check[$\sqrt[2]{(-3)^2}$은 무엇인가? (2)를 $t = -3$에 쓸 수 있는가?]
$3$입니다. $(-3)^2 = 9$이고 $\sqrt[2]{9} = 3$입니다(반례 '제곱하여 9 가 되는 두 실수'). (2)는 $0 \le t$를 가정하므로 $t = -3$에는 쓸 수 없고, 실제로 결과 $3$은 $-3$이 아닙니다.
:::
