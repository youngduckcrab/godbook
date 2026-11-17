---
title: 극한의 사칙연산
title_en: Limits of Sums, Differences, Products and Quotients
aliases: [극한의 성질, 극한의 계산 법칙, 수열의 극한의 사칙연산, 상수배의 극한, 거듭제곱의 극한, algebraic limit theorem, limit of a sum, limit of a product, limit of a quotient]
kind: proposition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 수렴하는 두 수열의 합, 차, 곱은 수렴하고 극한은 극한의 합, 차, 곱이다. 분모의 극한과 모든 항이 0 이 아니면 몫도 그렇다. 상수배, 상수 더하기, 거듭제곱의 극한과, 0 으로 수렴하는 수열과 유계인 수열의 곱이 0 으로 수렴한다는 것을 함께 증명한다.
requires: [natural-numbers-are-infinite, prime-number, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, square-root-exists, recursion-theorem, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, basic-limits, convergent-sequence-is-bounded, monotone-convergence-theorem, tail-of-a-sequence, limits-preserve-inequalities, comparison-with-null-sequence]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.2.2절 Proposition 2.2.5 와 그 증명 (p.63–64), 그 뒤 두 문단 (p.65), Proposition 2.2.7 뒤의 예 (p.66), 2.2.3절 Example 2.2.8 (p.66–67), 연습문제 2.2.2, 2.2.3, 2.2.12 (p.70–71)
    checked: original
    note: "출처의 Proposition 2.2.5(p.63)는 수렴하는 두 수열에 대해 (i) 합, (ii) 차, (iii) 곱이 수렴하고 극한이 극한의 합·차·곱이며, (iv) lim y_n ≠ 0 이고 모든 n 에서 y_n ≠ 0 이면 몫도 그렇다는 것이다. 이 항목의 (1)–(4)이다. 출처는 (i)을 ε/2 로 증명하고, (ii)는 '거의 같으므로 연습문제'(연습문제 2.2.2)로 둔다. 이 항목은 (ii)를 (−1)·y_n 의 극한과 (1)로 증명했다. 출처는 (iii)을 K := max{|x|, |y|, ε/3, 1} 로 두고 |z_n − z| 를 세 항으로 나누어 증명한다. 이 항목은 네 수의 max 를 쓰지 않고, 먼저 (7)(0 으로 수렴하는 수열과 유계인 수열의 곱은 0 으로 수렴한다)을 두 수의 max 로 증명한 뒤 x_n y_n − L₁L₂ = x_n(y_n − L₂) + L₂(x_n − L₁) 과 convergent-sequence-is-bounded 의 (2)로 (3)을 얻는다. (7)은 출처의 연습문제 2.2.12 a)(p.71)이다. 출처는 (iv)를 먼저 1/y_n 의 극한으로 바꾸고 min{|y|²ε/2, |y|/2} 로 |1/y_n| < 2/|y| 를 얻는다. 이 항목도 |y_n| > |L₂|/2 인 번호를 잡는 같은 발상이지만, 그 뒤는 comparison-with-null-sequence 의 (3)과 이 항목의 (5)로 끝낸다. 상수배·상수 더하기 (5)는 출처가 p.65 에서 '상수 수열을 넣으면 쉽게 나오는 따름'이라고만 하는 것이고, 거듭제곱 (6)은 출처가 p.65 에서 '보일 수 있다(exercise)'고 하는 것으로 연습문제 2.2.3(p.70, 힌트: 귀납법)이다. 둘 다 직접 증명했다. 출처는 p.66 에서 n²/(n+1) − n 의 극한은 −1 이지만 {n²/(n+1)} 과 {n} 이 수렴하지 않으므로 'lim n²/(n+1) − lim n' 은 뜻이 없다(nonsense)고 경고한다. 반례 'n 과 −n'은 같은 경고를 더 간단한 수열로 보인 것이다. 예시 '√2 로 가는 수열'은 출처 Example 2.2.8(p.66–67)과 같은 수열과 같은 경로(양수임, x_n² ≥ 2 로 단조감소, 1-꼬리, 2x_n x_{n+1} = x_n² + 2 의 극한)이다. 이 항목은 수열이 있다는 것을 recursion-theorem 의 (3)을 양의 실수 전체에 써서 정당화하고, x_{n+1} − x_n = (2 − x_n²)/(2x_n) 으로 단조감소를 보였다. 다른 예시, 반례 '분모의 극한이 0', 확인 질문은 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
수열, 유계, 수렴과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, 거듭제곱은 [[power-of-a-real-number]]의 것이다. 아래에서 "$n$번째 항이 $x_n + y_n$인 수열"처럼 식으로 쓴 수열은 [[sequence]]의 (1)로 정한 것이다. $(x_n)$, $(y_n)$을 수렴하는 수열이라 하고 $L_1 = \lim_{n \to \infty} x_n$, $L_2 = \lim_{n \to \infty} y_n$으로 두자.

1. (합) $n$번째 항이 $x_n + y_n$인 수열은 수렴하고 극한은 $L_1 + L_2$이다. 곧 $\lim_{n \to \infty} (x_n + y_n) = L_1 + L_2$이다.
2. (차) $n$번째 항이 $x_n - y_n$인 수열은 수렴하고 극한은 $L_1 - L_2$이다.
3. (곱) $n$번째 항이 $x_n y_n$인 수열은 수렴하고 극한은 $L_1 L_2$이다.
4. (몫) $L_2 \ne 0$이고 모든 자연수 $n$에서 $y_n \ne 0$이면, $n$번째 항이 $y_n^{-1}$인 수열은 수렴하고 극한은 $L_2^{-1}$이며, $n$번째 항이 $x_n / y_n$인 수열은 수렴하고 극한은 $L_1 / L_2$이다.
5. (상수배와 상수 더하기) 실수 $c$에 대하여, $n$번째 항이 $c\,x_n$인 수열은 수렴하고 극한은 $c\,L_1$이며, $n$번째 항이 $c + x_n$인 수열은 수렴하고 극한은 $c + L_1$이다.
6. (거듭제곱) $k \ge 0$인 정수 $k$에 대하여, $n$번째 항이 $x_n^k$인 수열은 수렴하고 극한은 $L_1^k$이다.
7. (0으로 수렴하는 수열과 유계인 수열의 곱) $(u_n)$이 $0$으로 수렴하는 수열이고 $(v_n)$이 수열이며, 어떤 실수 $C$가 있어 모든 자연수 $n$에서 $|v_n| \le C$이면, $n$번째 항이 $u_n v_n$인 수열은 $0$으로 수렴한다.
:::

:::english
Sequences, boundedness, convergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, on the limit of a sequence, and on uniqueness of limits, and powers are those of the entry on powers of a real number. Below, a sequence written by a formula, such as "the sequence whose $n$th term is $x_n + y_n$", is defined by item (1) of the entry on sequences. Let $(x_n)$ and $(y_n)$ be convergent sequences, and put $L_1 = \lim_{n \to \infty} x_n$ and $L_2 = \lim_{n \to \infty} y_n$.

1. (Sum) The sequence whose $n$th term is $x_n + y_n$ converges, and its limit is $L_1 + L_2$. That is, $\lim_{n \to \infty} (x_n + y_n) = L_1 + L_2$.
2. (Difference) The sequence whose $n$th term is $x_n - y_n$ converges, and its limit is $L_1 - L_2$.
3. (Product) The sequence whose $n$th term is $x_n y_n$ converges, and its limit is $L_1 L_2$.
4. (Quotient) If $L_2 \ne 0$ and $y_n \ne 0$ for every natural number $n$, then the sequence whose $n$th term is $y_n^{-1}$ converges with limit $L_2^{-1}$, and the sequence whose $n$th term is $x_n / y_n$ converges with limit $L_1 / L_2$.
5. (Constant multiples and adding a constant) For a real number $c$, the sequence whose $n$th term is $c\,x_n$ converges with limit $c\,L_1$, and the sequence whose $n$th term is $c + x_n$ converges with limit $c + L_1$.
6. (Powers) For an integer $k \ge 0$, the sequence whose $n$th term is $x_n^k$ converges, and its limit is $L_1^k$.
7. (Product of a sequence converging to $0$ and a bounded sequence) If $(u_n)$ is a sequence converging to $0$, $(v_n)$ is a sequence, and there is a real number $C$ with $|v_n| \le C$ for every natural number $n$, then the sequence whose $n$th term is $u_n v_n$ converges to $0$.
:::

## 직관

두 사람이 각자 목표 지점 $L_1$, $L_2$로 다가가면, 두 사람의 위치의 합은 $L_1 + L_2$로 다가갑니다. 합의 오차는 두 오차의 합 이하이므로(삼각부등식), 각자의 오차를 $\varepsilon$의 절반 아래로 만들면 합의 오차는 $\varepsilon$ 아래가 됩니다. 비유가 맞지 않는 곳은, 수열은 목표에 도착하지 않아도 되고 다가가는 정도만 따진다는 점입니다.

곱은 오차가 곱해지지 않고 섞입니다. $x_n y_n - L_1 L_2 = x_n(y_n - L_2) + L_2(x_n - L_1)$로 쓰면, 각 항은 "$0$으로 가는 것"과 "크기가 일정한 수 이하인 것"의 곱입니다. 그래서 (7)이 곱의 핵심이고, 곱에서 $(x_n)$이 유계라는 것([[convergent-sequence-is-bounded|수렴하는 수열이 유계라는 정리]])이 쓰입니다. 몫은 분모 $y_n$이 $0$ 가까이로 가지 않아야 하므로, 어느 번호부터 $|y_n| > |L_2|/2$임을 먼저 보입니다. 이때 $L_2 \ne 0$이 쓰입니다.

이 법칙들은 "오른쪽의 극한들이 있으면 왼쪽의 극한도 있고 같다"는 방향으로만 읽어야 합니다. 합의 극한이 있어도 각 수열의 극한은 없을 수 있습니다(아래 반례).

## 증명

:::idea
합은 삼각부등식과 $\varepsilon/2$로 보인다. 곱은 $0$으로 가는 수열과 유계인 수열의 곱 (7)로 바꾸고, 몫은 $|y_n|$이 $|L_2|/2$보다 커지는 번호 뒤에서 $|y_n^{-1} - L_2^{-1}|$을 $|y_n - L_2|$의 상수배로 누른다.
:::

:::hint
$(w_n)$이 $L$로 수렴하는 것은 정확히 $n$번째 항이 $w_n - L$인 수열이 $0$으로 수렴할 때이다. $|(w_n - L) - 0| = |w_n - L|$이기 때문이다.
:::

:::hint
몫에서는 $y_n^{-1} - L_2^{-1} = (L_2 - y_n)\,y_n^{-1} L_2^{-1}$을 쓰고, [[triangle-inequality|삼각부등식]]의 (2)로 $|L_2| - |y_n| \le |y_n - L_2|$를 얻는다.
:::

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (8)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (4)"는 [[absolute-value]]의 번호, "극한 (1)"은 [[limit-of-sequence]]의 번호, "비교 (3)"은 [[comparison-with-null-sequence]]의 번호이다. 기호의 약속([[limit-is-unique]])에 의해 "$\lim_{n \to \infty} w_n = L$"은 정확히 $(w_n)$이 $L$로 수렴한다는 뜻이다. 먼저 두 사실을 본다.

- (ㄱ) $0 < \varepsilon$이면 순서 성질 (8)에 의해 $0 < \varepsilon \cdot 2^{-1}$이고, $\varepsilon \cdot 2^{-1} + \varepsilon \cdot 2^{-1} = \varepsilon$이다. (K4), (K3), (K7), (K1)과 (K8)의 (iii)에 의해 $2^{-1} + 2^{-1} = 2^{-1}(1 + 1) = 2^{-1} \cdot 2 = 1$이고, (K3), (K4)에 의해 $\varepsilon 2^{-1} + \varepsilon 2^{-1} = \varepsilon(2^{-1} + 2^{-1}) = \varepsilon$이기 때문이다.
- (ㄴ) 수열 $(w_n)$과 실수 $L$에 대하여, $(w_n)$이 $L$로 수렴하는 것은 정확히 $n$번째 항이 $w_n - L$인 수열이 $0$으로 수렴할 때이다. (K4)와 (K8)의 (ii)에 의해 $-0 = 0$이므로 $(w_n - L) - 0 = w_n - L$이고, 두 수렴의 정의([[limit-of-sequence]])가 같은 명제이기 때문이다.

또 자연수 $n$은 ([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]에 의해) 양의 정수이고, 아래에서 쓰는 두 수의 최대는 절댓값 (10)에 의해 두 수 가운데 하나이며 두 수 이상이다.

**7의 증명.** $C' = \max\{C, 1\}$로 두면 $C \le C'$이고 $1 \le C'$이므로, 순서 성질 (5)의 (ii)와 (1)의 (v)에 의해 $0 < C'$이고 순서 성질 (6)의 (i)에 의해 $0 < C'^{-1}$이다. 양의 실수 $\varepsilon$을 잡으면 (W4)에 의해 $0 < \varepsilon C'^{-1}$이고, $(u_n)$이 $0$으로 수렴하므로 $M$ 이상인 모든 자연수 $n$에서 $|u_n - 0| < \varepsilon C'^{-1}$인 자연수 $M$이 있다. 그런 $n$에서 $u_n - 0 = u_n$이므로 $|u_n| < \varepsilon C'^{-1}$이다. 절댓값 (2)에 의해 $0 \le |u_n|$이고 $|v_n| \le C \le C'$이므로, 절댓값 (4)와 순서 성질 (4)의 (iii), (4)의 (i)에 의해
$$
|u_n v_n - 0| = |u_n|\,|v_n| \le |u_n|\,C' < \varepsilon C'^{-1} C' = \varepsilon
$$
이다(마지막 등호는 (K2), (K8)의 (iii), (K4)). 순서 성질 (1)의 (v)에 의해 $|u_n v_n - 0| < \varepsilon$이므로, $n$번째 항이 $u_n v_n$인 수열은 $0$으로 수렴한다.

**1의 증명.** 양의 실수 $\varepsilon$을 잡는다. (ㄱ)에 의해 $0 < \varepsilon 2^{-1}$이므로, $M_1$ 이상인 모든 자연수 $n$에서 $|x_n - L_1| < \varepsilon 2^{-1}$인 자연수 $M_1$과, $M_2$ 이상인 모든 자연수 $n$에서 $|y_n - L_2| < \varepsilon 2^{-1}$인 자연수 $M_2$가 있다. $M = \max\{M_1, M_2\}$로 두고 $M$ 이상인 자연수 $n$을 잡으면 순서 성질 (1)의 (v)에 의해 $n \ge M_1$, $n \ge M_2$이다. (K1), (K2)와 (K12)의 (iv)에 의해 $(x_n + y_n) - (L_1 + L_2) = (x_n - L_1) + (y_n - L_2)$이므로, [[triangle-inequality|삼각부등식]]의 (1), 순서 성질 (2)의 (iv)와 (ㄱ)에 의해
$$
|(x_n + y_n) - (L_1 + L_2)| \le |x_n - L_1| + |y_n - L_2| < \varepsilon 2^{-1} + \varepsilon 2^{-1} = \varepsilon
$$
이다. 순서 성질 (1)의 (v)에 의해 $|(x_n + y_n) - (L_1 + L_2)| < \varepsilon$이므로 (1)이 성립한다.

**3의 증명.** (K1)–(K3)과 (K12)의 (ii)로 전개하면 $x_n(y_n - L_2) = x_n y_n - x_n L_2$이고 $L_2(x_n - L_1) = x_n L_2 - L_1 L_2$이므로, (K2), (K8)의 (ii), (K4)에 의해
$$
x_n y_n - L_1 L_2 = x_n (y_n - L_2) + L_2 (x_n - L_1)
$$
이다. (ㄴ)에 의해 $n$번째 항이 $y_n - L_2$인 수열과 $x_n - L_1$인 수열은 $0$으로 수렴한다. [[convergent-sequence-is-bounded|수렴하는 수열이 유계라는 정리]]의 (2)에 의해 모든 $n$에서 $|x_n| \le B$인 실수 $B$가 있으므로, (7)과 (K1)에 의해 $n$번째 항이 $x_n(y_n - L_2)$인 수열은 $0$으로 수렴한다. 모든 항이 $L_2$인 상수 수열은 모든 항의 절댓값이 $|L_2|$ 이하이므로, (7)과 (K1)에 의해 $n$번째 항이 $L_2(x_n - L_1)$인 수열도 $0$으로 수렴한다. (1)과 (K4)에 의해 $n$번째 항이 두 항의 합, 곧 $x_n y_n - L_1 L_2$인 수열은 $0 + 0 = 0$으로 수렴하고, (ㄴ)에 의해 $n$번째 항이 $x_n y_n$인 수열은 $L_1 L_2$로 수렴한다.

**5의 증명.** 모든 항이 $c$인 상수 수열은 [[basic-limits]]의 (1)에 의해 $c$로 수렴한다. (3)을 이 상수 수열과 $(x_n)$에 쓰면 $n$번째 항이 $c\,x_n$인 수열은 $c\,L_1$로 수렴하고, (1)을 쓰면 $n$번째 항이 $c + x_n$인 수열은 $c + L_1$로 수렴한다.

**2의 증명.** (K9)에 의해 $(-1)y_n = -y_n$이고 $(-1)L_2 = -L_2$이므로, (5)를 $c = -1$로 쓰면 $n$번째 항이 $-y_n$인 수열은 $-L_2$로 수렴한다. $x_n - y_n = x_n + (-y_n)$이므로 (1)에 의해 $n$번째 항이 $x_n - y_n$인 수열은 $L_1 + (-L_2) = L_1 - L_2$로 수렴한다.

**4의 증명.** $L_2 \ne 0$이므로 절댓값 (2)에 의해 $0 < |L_2|$이다. $h = |L_2| \cdot 2^{-1}$로 두면 (ㄱ)에 의해 $0 < h$이고 $h + h = |L_2|$이다. $M_0$ 이상인 모든 자연수 $n$에서 $|y_n - L_2| < h$인 자연수 $M_0$을 잡는다. 그런 $n$에서 절댓값 (6), [[triangle-inequality|삼각부등식]]의 (2), 절댓값 (3)에 의해
$$
|L_2| - |y_n| \le \bigl|\,|L_2| - |y_n|\,\bigr| \le |L_2 - y_n| = |y_n - L_2| < h
$$
이고, 순서 성질 (2)의 (ii)로 양변에 $|y_n| - h$를 더하면 (K1), (K2), (K8)의 (ii), (K4)와 $h + h = |L_2|$에 의해 $h < |y_n|$이다. 순서 성질 (6)의 (ii)에 의해 $|y_n|^{-1} < h^{-1}$이고, (K12)의 (vi)와 $2^{-1} \cdot 2 = 1$에서 나오는 $(2^{-1})^{-1} = 2$((K8)의 (iii))에 의해 $h^{-1} = |L_2|^{-1} \cdot 2$이다.

$y_n \ne 0$이므로 (K1)–(K4), (K8)의 (iii), (K12)의 (i), (ii)로 전개하면
$$
(L_2 - y_n)\,y_n^{-1} L_2^{-1} = y_n^{-1}(L_2 L_2^{-1}) - (y_n y_n^{-1}) L_2^{-1} = y_n^{-1} - L_2^{-1}
$$
이다. $D = 2\,|L_2|^{-1}|L_2|^{-1}$로 두자. $M_0$ 이상인 자연수 $n$에서 절댓값 (4), (3), (9)와 순서 성질 (4)의 (iii)에 의해(곱하는 수는 모두 $0$ 이상이다)
$$
|y_n^{-1} - L_2^{-1}| = |y_n - L_2|\,|y_n|^{-1}\,|L_2|^{-1} \le |y_n - L_2| \cdot 2|L_2|^{-1} \cdot |L_2|^{-1} = D\,|y_n - L_2|
$$
이다. 비교 (1)에 의해 $n$번째 항이 $|y_n - L_2|$인 수열은 $0$으로 수렴하므로, (5)와 (K9)에 의해 $n$번째 항이 $D\,|y_n - L_2|$인 수열은 $D \cdot 0 = 0$으로 수렴한다. 비교 (3)을 $K = M_0$으로 쓰면 $n$번째 항이 $y_n^{-1}$인 수열은 $L_2^{-1}$로 수렴한다. 마지막으로 $x_n / y_n = x_n y_n^{-1}$이므로 (3)에 의해 $n$번째 항이 $x_n / y_n$인 수열은 $L_1 L_2^{-1} = L_1 / L_2$로 수렴한다.

**6의 증명.** $k$에 대한 귀납법([[power-of-a-real-number|거듭제곱]]의 증명에서처럼 시작점이 $0$인 꼴)을 쓴다. $k = 0$이면 모든 $n$에서 $x_n^0 = 1$이고 $L_1^0 = 1$이므로 [[basic-limits]]의 (1)에 의해 성립한다. $k$에서 성립한다고 하자. 거듭제곱의 정의에 의해 $x_n^{k+1} = x_n^k x_n$이고 $L_1^{k+1} = L_1^k L_1$이므로, (3)을 $n$번째 항이 $x_n^k$인 수열과 $(x_n)$에 쓰면 $k + 1$에서도 성립한다. $\blacksquare$
:::

## 예시와 반례

:::example[$n$번째 항이 $(3n + 2)\,n^{-1}$인 수열]
(K3), (K12)의 (i)과 (K8)의 (iii), (K4)에 의해 $(3n + 2)\,n^{-1} = 3 + 2n^{-1}$입니다. [[basic-limits]]의 (2)에 의해 $\lim_{n \to \infty} n^{-1} = 0$이므로, 이 항목의 (5)에 의해 $n$번째 항이 $2n^{-1}$인 수열은 $2 \cdot 0 = 0$으로 수렴하고, 다시 (5)에 의해 $n$번째 항이 $3 + 2n^{-1}$인 수열은 $3 + 0 = 3$으로 수렴합니다. 따라서 $\lim_{n \to \infty} (3n + 2)\,n^{-1} = 3$입니다. 등식은 오른쪽에서 왼쪽으로, 곧 "각 부분의 극한이 있으므로 전체의 극한도 있다"로 읽습니다.
:::

:::example[$\sqrt{2}$로 가는 재귀 수열]
$X = \{t \in \mathbb{R} : 0 < t\}$로 둡니다. $t \in X$이면 [[order-properties-of-reals]]의 (10)과 (W4)에 의해 $0 < 2t$이므로 $(2t)^{-1}$이 있고 그 항목의 (6)의 (i)에 의해 $0 < (2t)^{-1}$이며, 그 항목의 (5)의 (iii)과 (2)의 (iv)에 의해 $0 < tt + 2$이므로 (W4)에 의해 $(tt + 2)(2t)^{-1} \in X$입니다. [[recursion-theorem|재귀 정리]]의 (1)에 의해 $g(n, t) = (tt + 2)(2t)^{-1}$인 함수 $g : \mathbb{N} \times X \to X$가 있고, $2 \in X$이므로 재귀 정리와 그 (3)에 의해 $x_1 = 2$이고 모든 $n$에서 $x_{n+1} = (x_n x_n + 2)(2x_n)^{-1}$인 수열이 정확히 하나 있으며 모든 항이 양수입니다.

실수의 계산 법칙으로 전개하면 모든 $n$에서 다음이 성립합니다. $s = x_n x_n$으로 둡니다.
$$
x_{n+1} - x_n = (2 - s)(2x_n)^{-1}, \qquad x_{n+1} x_{n+1} - 2 = (s - 2)(s - 2)\,(4s)^{-1}, \qquad 2x_n\,x_{n+1} = s + 2.
$$
첫 식은 $x_n = (2s)(2x_n)^{-1}$을 빼서, 둘째 식은 $(2x_n)(2x_n) = 4s$, $2 = (8s)(4s)^{-1}$과 $(s + 2)(s + 2) - 8s = (s - 2)(s - 2)$에서, 셋째 식은 첫 식처럼 $(2x_n)(2x_n)^{-1} = 1$에서 얻습니다. $0 < s$이므로 $0 < (4s)^{-1}$이고 $0 \le (s - 2)(s - 2)$이므로, 둘째 식에서 모든 $n$에서 $2 \le x_{n+1} x_{n+1}$입니다. $x_1 x_1 = 4 \ge 2$이므로 모든 $n$에서 $2 \le x_n x_n$, 곧 $2 - x_n x_n \le 0$이고, 첫 식과 그 항목의 (4)의 (iv)에 의해 $x_{n+1} \le x_n$입니다. 따라서 $(x_n)$은 단조감소이고 $0$이 하계이므로, [[monotone-convergence-theorem|단조수렴정리]]의 (2)에 의해 수렴합니다. $L = \lim_{n \to \infty} x_n$으로 두면 [[limits-preserve-inequalities|극한과 부등식]]의 (3)에 의해 $0 \le L$입니다.

$n$번째 항이 $x_{n+1}$인 수열은 $(x_n)$의 $1$-꼬리이므로 [[tail-of-a-sequence|수열의 꼬리]]의 (1)에 의해 $L$로 수렴합니다. 셋째 식의 양변을 이 항목의 (3), (5)와 (6)으로 계산하면 왼쪽의 극한은 $2LL$, 오른쪽의 극한은 $LL + 2$이고, 두 쪽은 같은 수열이므로 [[limit-is-unique]]에 의해 $2LL = LL + 2$, 곧 $LL = 2$입니다. $0 \le L$이므로 [[square-root-exists]]의 (1)의 유일성에 의해 $L = \sqrt{2}$입니다.
:::

:::counterexample[합의 극한이 있어도 각 극한은 없을 수 있다]
$x_n = n$, $y_n = -n$으로 두면 모든 $n$에서 $x_n + y_n = 0$이므로 $n$번째 항이 $x_n + y_n$인 수열은 $0$으로 수렴합니다. 그러나 $(x_n)$은 [[basic-limits]]의 (4)에 의해 발산합니다. $(y_n)$도 발산합니다. $(y_n)$이 수렴한다면 이 항목의 (5)를 $c = -1$로 써서 $n$번째 항이 $(-1)(-n) = n$인 수열이 수렴하게 되어 [[basic-limits]]의 (4)에 어긋나기 때문입니다. 그래서 "$\lim_{n \to \infty} (x_n + y_n) = \lim_{n \to \infty} x_n + \lim_{n \to \infty} y_n$"의 오른쪽은 뜻이 없습니다. (1)은 두 수열이 수렴한다는 가정 아래에서만 쓸 수 있습니다.
:::

:::counterexample[분모의 극한이 $0$인 경우]
모든 항이 $1$인 수열 $(x_n)$과 $n$번째 항이 $n^{-1}$인 수열 $(y_n)$은 모두 수렴하고, 모든 $n$에서 $y_n \ne 0$입니다. 그러나 $\lim_{n \to \infty} y_n = 0$이고, (K8)의 (iii)에 의해 $(n^{-1})^{-1} = n$이므로 $x_n / y_n = 1 \cdot n = n$이어서 몫의 수열은 [[basic-limits]]의 (4)에 의해 발산합니다. (4)의 가정 $L_2 \ne 0$은 뺄 수 없습니다.
:::

## 확인 질문

:::check[$n$번째 항이 $(n^{-1} + 2)^3$인 수열의 극한은?]
$8$입니다. [[basic-limits]]의 (2)와 이 항목의 (5)에 의해 $n$번째 항이 $n^{-1} + 2$인 수열은 $0 + 2 = 2$로 수렴합니다((K1)). (6)을 $k = 3$으로 쓰면 극한은 $2^3 = 8$입니다.
:::

:::check[$n$번째 항이 $x_n y_n$인 수열이 수렴하면 $(x_n)$과 $(y_n)$도 수렴하는가?]
그렇다고 할 수 없습니다. [[basic-limits]]의 (3)의 수열 $(s_n)$($n$이 짝수이면 $1$, 홀수이면 $-1$)을 $x_n = y_n = s_n$으로 두면, $1 \cdot 1 = 1$이고 (K12)의 (iii)에 의해 $(-1)(-1) = 1$이므로 모든 $n$에서 $x_n y_n = 1$이고 곱의 수열은 $1$로 수렴합니다. 그러나 $(s_n)$은 발산합니다. (3)도 두 수열이 수렴한다는 가정에서 출발합니다.
:::
