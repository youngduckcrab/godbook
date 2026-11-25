---
title: 복소 급수의 절대수렴
title_en: Absolute Convergence of Complex Series
aliases: [복소 급수의 절대수렴, 복소 급수의 비교 판정법, 복소 급수의 비 판정법, 복소 급수의 근 판정법, 복소 등비급수, absolute convergence of complex series, complex geometric series, ratio test for complex series, root test for complex series]
kind: theorem
field: complex-analysis
msc: ["30", "40A05"]
level: undergrad
summary: 복소 급수가 절대수렴한다는 것을 항의 절댓값의 실수 급수가 수렴한다는 것으로 정하고, 절대수렴하는 복소 급수는 수렴하며 합의 절댓값이 절댓값의 합 이하라는 것을 증명한다. 비교 판정법, 비 판정법, 근 판정법을 복소 급수로 옮기고, 복소 등비급수가 |z| < 1 에서 1/(1 − z) 로 수렴하고 |z| ≥ 1 에서 발산한다는 것을 보인다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, nth-root, sequence, limit-of-sequence, basic-limits, limit-of-sum-and-product, limits-preserve-inequalities, geometric-sequence-limit, series-and-partial-sums, finite-sum-of-reals, comparison-test, absolute-convergence, ratio-test-for-series, root-test, limit-superior-and-inferior, alternating-series-test, harmonic-series-diverges, sum-of-a-series, series-indexed-from-zero, mertens-theorem, ring-basic-properties, complex-number, complex-field, modulus-of-complex-number, power-of-a-complex-number, complex-finite-sum, convergence-of-complex-sequences, limit-laws-for-complex-sequences, complex-series]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.1절 Complex numbers, 11.1.2소절 Complex numbers and limits (p.141–142), Proposition 11.1.5 (p.142); 11.1.4소절 Exercise 11.1.5 (p.143); 11.3절 Power series and analytic functions, 11.3.1소절 Analytic functions (p.153); 11.3.6소절 Exercise 11.3.11 (p.162)"
    checked: original
    note: "출처 11.1.2소절(p.141)은 복소 급수가 절대수렴한다는 것을 Σ_{n=1}^∞ |z_n| 이 수렴한다는 것으로 정의한다. 이 항목의 정의는 그것을 첫 번호가 m 인 항으로 넓힌 것이다. 출처 Proposition 11.1.5(p.142)는 절대수렴하는 복소 급수가 수렴한다는 것이고 증명은 Exercise 11.1.5(p.143)로 남긴다. (2)의 앞 문장이 그것이다. 출처 p.142 는 Σ|z_n| 이 실수 급수이므로 절대수렴을 말하는 판정법(ratio test, root test 등)은 |z_n| 에 그대로 쓸 수 있고 복소 급수에 대해 다시 증명할 필요가 없다고 적는다. (3)–(5)의 수렴 쪽이 그 말을 진술한 것이다. 발산 쪽은 '|z_n| 의 급수가 발산한다'에서 바로 나오지 않으므로, 이 항목은 실수판 판정법이 진술하는 '항이 0 으로 수렴하지 않는다'를 거쳐 복소 급수의 발산을 얻는다. 출처 11.3.1소절(p.153)은 |z| < 1 이면 1/(1 − z) = Σ_{n=0}^∞ zⁿ 이고 오른쪽은 |z| < 1 일 때만 수렴한다고 적는다. 그 자리에는 증명이 없고, (6)이 그 진술과 증명이다. 출처 Exercise 11.3.11(p.162)은 모든 n 에서 |c_n| ≤ 1 이고 |z| < 1 이면 |Σ c_n zⁿ| ≤ 1/(1 − |z|) 임을 보이게 한다. 이것은 (3)을 w_n = |z|ⁿ 에 쓰고 (6)의 (i)의 둘째 등식을 쓴 것과 같은 부등식이다. 예시 '공비가 i/2 인 등비급수'는 p.153 의 등식 1/(1 − z) = Σ zⁿ 에 z = i/2 를 넣은 것이고, 확인 질문 '$z = i$일 때 $(z^n)_{n \\ge 0}$의 급수는 수렴하는가?'는 p.153 의 '오른쪽은 |z| < 1 일 때만 수렴한다'를 |z| = 1 인 한 점에서 본 것이다."
  - ref: lebl-basic-analysis
    loc: "2.5절 Series, 2.5.3소절 Basic properties, Example 2.5.10 (p.90); 2.5.6소절 Ratio test, Example 2.5.20 (p.97); 2.6절 More on series, 2.6.3소절 Rearrangements, Example 2.6.4 (p.103); 2.6.6소절 Exercise 2.6.1 (p.110)"
    checked: original
    note: "(6)의 (ii)의 증명(|zⁿ| = |z|ⁿ ≥ 1 이라 항이 0 으로 가지 않는다)은 출처 Example 2.5.10(p.90)이 실수 r ≥ 1, r ≤ −1 의 등비급수가 발산함을 보이는 증명 '|rⁿ| = |r|ⁿ ≥ 1ⁿ = 1' 과 같은 발상이다. 예시 '비 판정법으로 보는 n(i/2)ⁿ'은 출처 Example 2.5.20(p.97)이 비 판정법으로 Σ 2ⁿ/n! 의 절대수렴을 보이는 것과 같은 방법이다. 반례 '수렴하지만 절대수렴하지 않는 예'의 허수부 ((−1)ⁿ/n) 은 출처 Example 2.6.4(p.103)의 교대 조화급수(부호만 반대)이고, 출처도 그것이 절대수렴하지 않는다고 적는다. 확인 질문 '$n$번째 항이 $z_n = \\bigl(n i / (2n + 1)\\bigr)^n$인 복소수열의 급수는 절대수렴하는가?'는 출처 Exercise 2.6.1 d)(p.110)의 nⁿ/(n + 1)^{2n} 처럼 항이 n제곱 꼴인 급수에 근 판정법을 쓰는 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(첫 번호 m 의 정의 재진술과 복소 메르텐스의 경로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 복소수의 절댓값 $|z|$는 [[modulus-of-complex-number]], 복소수의 거듭제곱은 [[power-of-a-complex-number]]의 것이다. 복소수열, 그 수렴과 극한, 0부터 번호가 붙은 복소수열은 [[convergence-of-complex-sequences|복소수열의 수렴]]의 것이고, 복소 급수, "$n \ge m$에서 정해진 항 $t_n$의 급수", 1부터 다시 번호 붙인 수열, 합의 기호 $\sum_{n=m}^{\infty}$는 [[complex-series|복소 급수]]의 것이다. 실수 항의 급수와 그 합의 기호, 실수열의 절대수렴은 [[series-and-partial-sums]], [[sum-of-a-series]], [[series-indexed-from-zero]], [[absolute-convergence]]의 것이고, 0부터 번호가 붙은 실수열의 급수의 절대수렴은 [[mertens-theorem]]의 진술의 것이다. $n$제곱근은 [[nth-root]], 상극한은 [[limit-superior-and-inferior]]의 것이다.

**절대수렴.** $m$을 $0$ 이상인 정수라 하고, $m$ 이상인 정수 $n$마다 복소수 $t_n$이 [[complex-series|복소 급수]]의 뜻으로 정해져 있다고 하자. $n \ge m$에서 정해진 항 $t_n$의 급수가 **절대수렴한다**(converges absolutely)는 것은 정확히 $n \ge m$에서 정해진 실수 항 $|t_n|$의 급수가 수렴할 때이다. 특히 복소수열 $(z_n)$의 급수가 절대수렴하는 것은 정확히 $n$번째 항이 $|z_n|$인 실수열의 급수가 수렴할 때이고, 0부터 번호가 붙은 복소수열 $(z_n)_{n \ge 0}$의 급수가 절대수렴하는 것은 정확히 $n$에서의 값이 $|z_n|$인 0부터 번호가 붙은 실수열의 급수가 수렴할 때이다.

다음이 성립한다. 아래에서 $m$, $t_n$은 위와 같고, $w_n$은 $m$ 이상인 정수 $n$마다 정해진 실수, $(z_n)$은 복소수열이며, $z$와 $a$는 복소수이다.

1. (실수 항의 급수와의 일치) $m$ 이상인 정수 $n$마다 실수 $x_n$이 정해져 있으면, $\iota(x_n)$의 급수가 절대수렴하는 것은 정확히 실수 항 $|x_n|$의 급수가 수렴할 때이다. 따라서 $m = 1$이면 실수열 $(x_n)$의 급수가 [[absolute-convergence]]의 뜻으로 절대수렴할 때이고, $m = 0$이면 0부터 번호가 붙은 실수열 $(x_n)_{n \ge 0}$의 급수가 [[mertens-theorem]]의 진술의 뜻으로 절대수렴할 때이다.
2. (절대수렴하면 수렴) $t_n$의 급수가 절대수렴하면, 실수 항 $|\operatorname{Re} t_n|$의 급수와 $|\operatorname{Im} t_n|$의 급수도 수렴하고, $t_n$의 급수는 수렴하며
   $$
   \Bigl| \sum_{n=m}^{\infty} t_n \Bigr| \le \sum_{n=m}^{\infty} |t_n|
   $$
   이다.
3. (**비교 판정법**) $m$ 이상인 모든 정수 $n$에서 $|t_n| \le w_n$이고 $w_n$의 급수가 수렴하면, $t_n$의 급수는 절대수렴하고
   $$
   \Bigl| \sum_{n=m}^{\infty} t_n \Bigr| \le \sum_{n=m}^{\infty} |t_n| \le \sum_{n=m}^{\infty} w_n
   $$
   이다.
4. (**비 판정법**)
   - (i) $0 \le r < 1$인 실수 $r$과 자연수 $M$이 있어 $M$ 이상인 모든 자연수 $n$에서 $|z_{n+1}| \le r\,|z_n|$이면, $(z_n)$의 급수는 절대수렴한다.
   - (ii) 자연수 $M$이 있어 $z_M \ne 0$이고 $M$ 이상인 모든 자연수 $n$에서 $|z_{n+1}| \ge |z_n|$이면, $(z_n)$은 $0$으로 수렴하지 않고 $(z_n)$의 급수는 발산한다.
   - (iii) 모든 자연수 $n$에서 $z_n \ne 0$이고 $n$번째 항이 $q_n = |z_{n+1}|\,|z_n|^{-1}$인 실수열이 실수 $L$로 수렴한다고 하자. $L < 1$이면 $(z_n)$의 급수는 절대수렴하고, $L > 1$이면 $(z_n)$은 $0$으로 수렴하지 않고 $(z_n)$의 급수는 발산한다.
5. (**근 판정법**) $n$번째 항이 $\sqrt[n]{|z_n|}$인 실수열을 $(y_n)$이라 하자.
   - (i) $r < 1$인 실수 $r$과 자연수 $M$이 있어 $M$ 이상인 모든 자연수 $n$에서 $y_n \le r$이면, $(z_n)$의 급수는 절대수렴한다.
   - (ii) 모든 자연수 $M$에 대하여 $n \ge M$이고 $1 \le y_n$인 자연수 $n$이 있으면, $(z_n)$은 $0$으로 수렴하지 않고 $(z_n)$의 급수는 발산한다.
   - (iii) $(y_n)$이 유계라 하고 $L = \limsup_{n \to \infty} y_n$으로 두자. $L < 1$이면 $(z_n)$의 급수는 절대수렴하고, $1 < L$이면 $(z_n)$은 $0$으로 수렴하지 않고 $(z_n)$의 급수는 발산한다.
6. (**복소 등비급수**) $n$에서의 값이 $z^n$인 0부터 번호가 붙은 복소수열을 $(z^n)_{n \ge 0}$으로 쓴다($z^0 = 1$, 특히 $0^0 = 1$).
   - (i) $|z| < 1$이면 $(z^n)_{n \ge 0}$의 급수는 절대수렴하고
     $$
     \begin{aligned}
     \sum_{n=0}^{\infty} z^n &= \frac{1}{1 - z}, \\
     \sum_{n=0}^{\infty} |z^n| &= \frac{1}{1 - |z|}
     \end{aligned}
     $$
     이다. 따라서 $n$에서의 값이 $a z^n$인 0부터 번호가 붙은 복소수열의 급수도 수렴하고 $\sum_{n=0}^{\infty} a z^n = a / (1 - z)$이다.
   - (ii) $|z| \ge 1$이면 $0$ 이상인 모든 정수 $n$에서 $1 \le |z^n|$이고, $a \ne 0$이면 $n$에서의 값이 $a z^n$인 0부터 번호가 붙은 복소수열은 $0$으로 수렴하지 않으며 그 급수는 발산한다. 특히 $(z^n)_{n \ge 0}$의 급수는 발산한다.
   - (iii) 따라서 $a \ne 0$이면 $n$에서의 값이 $a z^n$인 0부터 번호가 붙은 복소수열의 급수가 수렴하는 것은 정확히 $|z| < 1$일 때이다. $a = 0$이면 모든 복소수 $z$에서 그 급수는 수렴하고 합은 $0$이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, and $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, and the convention for writing real numbers where complex numbers are required are those of the entry on the field of complex numbers; the modulus $|z|$ is that of the entry on the modulus of a complex number, and powers of complex numbers are those of their entry. Complex sequences, their convergence and limits, and complex sequences indexed from zero are those of the entry on convergence of complex sequences; complex series, "the series of the terms $t_n$ defined for $n \ge m$", renumberings from 1, and the notation $\sum_{n=m}^{\infty}$ are those of the entry on complex series. Series of real terms and their sum notation, and absolute convergence of real sequences, are those of the entries on series and partial sums, the notation for the sum of a series, sequences indexed from zero, and absolute convergence; absolute convergence of the series of a real sequence indexed from zero is that of the statement of Mertens' theorem. $n$th roots are those of the entry on $n$th roots, and the limit superior is that of the entry on limit superior and inferior.

**Absolute convergence.** Let $m$ be an integer $\ge 0$, and suppose that for each integer $n \ge m$ a complex number $t_n$ is given in the sense of the entry on complex series. The series of the terms $t_n$ defined for $n \ge m$ **converges absolutely** exactly when the series of the real terms $|t_n|$ defined for $n \ge m$ converges. In particular, the series of a complex sequence $(z_n)$ converges absolutely exactly when the series of the real sequence whose $n$th term is $|z_n|$ converges, and the series of a complex sequence $(z_n)_{n \ge 0}$ indexed from zero converges absolutely exactly when the series of the real sequence indexed from zero whose value at $n$ is $|z_n|$ converges.

The following hold. Below, $m$ and $t_n$ are as above, $w_n$ are real numbers given for each integer $n \ge m$, $(z_n)$ is a complex sequence, and $z$ and $a$ are complex numbers.

1. (Agreement with series of real terms) If a real number $x_n$ is given for each integer $n \ge m$, then the series of $\iota(x_n)$ converges absolutely exactly when the series of the real terms $|x_n|$ converges. Hence, for $m = 1$, exactly when the series of the real sequence $(x_n)$ converges absolutely in the sense of the entry on absolute convergence, and for $m = 0$, exactly when the series of the real sequence $(x_n)_{n \ge 0}$ indexed from zero converges absolutely in the sense of the statement of Mertens' theorem.
2. (Absolute convergence implies convergence) If the series of $t_n$ converges absolutely, then the series of the real terms $|\operatorname{Re} t_n|$ and of $|\operatorname{Im} t_n|$ also converge, the series of $t_n$ converges, and
   $$
   \Bigl| \sum_{n=m}^{\infty} t_n \Bigr| \le \sum_{n=m}^{\infty} |t_n|.
   $$
3. (**Comparison test**) If $|t_n| \le w_n$ for every integer $n \ge m$ and the series of $w_n$ converges, then the series of $t_n$ converges absolutely and
   $$
   \Bigl| \sum_{n=m}^{\infty} t_n \Bigr| \le \sum_{n=m}^{\infty} |t_n| \le \sum_{n=m}^{\infty} w_n.
   $$
4. (**Ratio test**)
   - (i) If there are a real number $r$ with $0 \le r < 1$ and a natural number $M$ such that $|z_{n+1}| \le r\,|z_n|$ for every natural number $n \ge M$, then the series of $(z_n)$ converges absolutely.
   - (ii) If there is a natural number $M$ such that $z_M \ne 0$ and $|z_{n+1}| \ge |z_n|$ for every natural number $n \ge M$, then $(z_n)$ does not converge to $0$ and the series of $(z_n)$ diverges.
   - (iii) Suppose $z_n \ne 0$ for every natural number $n$ and the real sequence whose $n$th term is $q_n = |z_{n+1}|\,|z_n|^{-1}$ converges to a real number $L$. If $L < 1$, the series of $(z_n)$ converges absolutely; if $L > 1$, then $(z_n)$ does not converge to $0$ and the series of $(z_n)$ diverges.
5. (**Root test**) Let $(y_n)$ be the real sequence whose $n$th term is $\sqrt[n]{|z_n|}$.
   - (i) If there are a real number $r < 1$ and a natural number $M$ such that $y_n \le r$ for every natural number $n \ge M$, then the series of $(z_n)$ converges absolutely.
   - (ii) If for every natural number $M$ there is a natural number $n \ge M$ with $1 \le y_n$, then $(z_n)$ does not converge to $0$ and the series of $(z_n)$ diverges.
   - (iii) Suppose $(y_n)$ is bounded and let $L = \limsup_{n \to \infty} y_n$. If $L < 1$, the series of $(z_n)$ converges absolutely; if $1 < L$, then $(z_n)$ does not converge to $0$ and the series of $(z_n)$ diverges.
6. (**Complex geometric series**) Write $(z^n)_{n \ge 0}$ for the complex sequence indexed from zero whose value at $n$ is $z^n$ (with $z^0 = 1$; in particular $0^0 = 1$).
   - (i) If $|z| < 1$, then the series of $(z^n)_{n \ge 0}$ converges absolutely and
     $$
     \begin{aligned}
     \sum_{n=0}^{\infty} z^n &= \frac{1}{1 - z}, \\
     \sum_{n=0}^{\infty} |z^n| &= \frac{1}{1 - |z|}.
     \end{aligned}
     $$
     Hence the series of the complex sequence indexed from zero whose value at $n$ is $a z^n$ also converges, and $\sum_{n=0}^{\infty} a z^n = a / (1 - z)$.
   - (ii) If $|z| \ge 1$, then $1 \le |z^n|$ for every integer $n \ge 0$, and if $a \ne 0$, the complex sequence indexed from zero whose value at $n$ is $a z^n$ does not converge to $0$ and its series diverges. In particular, the series of $(z^n)_{n \ge 0}$ diverges.
   - (iii) Hence, if $a \ne 0$, the series of the complex sequence indexed from zero whose value at $n$ is $a z^n$ converges exactly when $|z| < 1$. If $a = 0$, that series converges for every complex number $z$, and its sum is $0$.
:::

## 직관

복소수 $t_n$의 절댓값은 원점에서 $t_n$까지의 거리입니다. 급수의 부분합은 원점에서 출발해 $t_1$, $t_2$, …만큼씩 차례로 옮겨 가는 점이고, 걸음의 길이를 모두 더한 것이 $|t_n|$의 급수입니다. 걸음 길이의 합이 유한하면 점이 아무리 방향을 바꾸어도 한없이 떠돌 수 없고, 도착점은 출발점에서 걸은 거리의 합보다 멀리 있지 않습니다. 이것이 (2)입니다. 비유가 정의와 맞는 곳은 "걸음 길이의 합"이 실수 항 $|t_n|$의 급수라는 것이고, 어긋나는 곳은 걸음이 끝없이 이어진다는 것입니다.

증명은 이 그림 대신 실수부와 허수부를 씁니다. $|\operatorname{Re} t_n| \le |t_n|$이므로 실수부의 급수는 실수판 비교 판정법으로 절대수렴하고, 허수부도 같습니다. 그러면 [[complex-series|복소 급수]]의 (2)가 복소 급수의 수렴을 줍니다. 비 판정법과 근 판정법의 수렴 쪽은 실수 항 $|z_n|$에 실수판을 쓰면 끝납니다. 발산 쪽은 조금 다릅니다. "$|z_n|$의 급수가 발산한다"는 것만으로는 복소 급수가 발산한다고 할 수 없으므로(아래 반례), 실수판 판정법이 함께 진술하는 "항이 $0$으로 수렴하지 않는다"를 거쳐 [[complex-series|복소 급수]]의 (7)로 발산을 얻습니다.

등비급수 $\sum z^n$은 공비 $z$의 절댓값만으로 수렴과 발산이 갈립니다. $|z| < 1$이면 $|z^n| = |z|^n$이 $0$으로 줄어 유한 등비합 $(1 - z^{k+1})/(1 - z)$이 $1/(1 - z)$로 다가갑니다. $|z| \ge 1$이면 모든 항의 절댓값이 $1$ 이상이라 항이 $0$으로 갈 수 없습니다. $|z| = 1$인 $z = 1$, $-1$, $i$에서도 모든 항의 절댓값이 $1$이므로 발산합니다. 다만 첫째 항이 $0$이면($a = 0$) 모든 항이 $0$이어서 공비와 상관없이 합이 $0$입니다.

## 증명

:::idea
첫 번호가 $m$인 항의 급수를 1부터 다시 번호 붙인 수열 $(u_j)$의 급수로 바꾸면, 절대수렴은 실수열 $(|u_j|)$의 급수의 수렴이다. 수렴은 $|\operatorname{Re} u_j| \le |u_j|$와 실수판 비교 판정법, 부등식은 부분합의 삼각부등식에 극한을 취해 얻는다. 판정법은 실수열 $(|z_n|)$에 실수판을 쓴다.
:::

:::hint
비 판정법에서 $L > 1$이면, 수렴의 정의를 $\varepsilon = L - 1$로 써서 어느 번호부터 $q_n > 1$, 곧 $|z_{n+1}| > |z_n|$임을 보입니다. 그 뒤는 (ii)입니다.
:::

:::hint
등비급수의 합은 [[complex-finite-sum|복소수의 유한 합]]의 (9)로 부분합을 $(1 - z^{k+1})(1 - z)^{-1}$로 쓰고, $|z^{k+1}| = |z|^{k+1}$이 $0$으로 수렴한다는 것을 씁니다.
:::

:::proof
"복소 급수 (n)", "수렴 (n)", "극한 법칙 (n)", "복소 절댓값 (n)", "복소 거듭제곱 (n)", "유한 합 (n)", "복소수체 (n)"은 [[complex-series]], [[convergence-of-complex-sequences]], [[limit-laws-for-complex-sequences]], [[modulus-of-complex-number]], [[power-of-a-complex-number]], [[complex-finite-sum]], [[complex-field]]의 번호이고, "순서 성질 (n)"은 [[order-properties-of-reals]], "절댓값 (n)"은 [[absolute-value]]의 번호이다. (K…)는 [[real-number-arithmetic]]의 진술이다.

**준비: 1부터 다시 번호 붙인 수열로 바꾸기.** $t_n$을 1부터 다시 번호 붙인 수열을 $(u_j)$라 하자. 곧 $u_j = t_{j+m-1}$이다. [[complex-series|복소 급수]]의 진술의 첫 문단에 의해 실수 항 $|t_n|$의 급수는 $j$번째 항이 $|t_{j+m-1}| = |u_j|$인 실수열 $(|u_j|)$의 급수이고, 수렴하면 $\sum_{n=m}^{\infty} |t_n| = \sum_{j=1}^{\infty} |u_j|$이다. 실수 항 $w_n$의 급수도 $j$번째 항이 $v_j = w_{j+m-1}$인 실수열 $(v_j)$의 급수이고, 수렴하면 $\sum_{n=m}^{\infty} w_n = \sum_{j=1}^{\infty} v_j$이다. 실수 항 $|\operatorname{Re} t_n|$의 급수도 같은 이유로 $j$번째 항이 $|\operatorname{Re} u_j|$인 실수열의 급수이고, 허수부도 같다. 정의에 의해 $t_n$의 급수가 수렴하는 것은 $(u_j)$의 급수가 수렴하는 것이고 그 합은 같다. 그러므로 (2)와 (3)은 $m = 1$, 곧 복소수열 $(u_j)$의 급수에 대해 보이면 된다. 복소 절댓값 (1)에 의해 모든 $j$에서 $0 \le |u_j|$이다.

**1의 증명.** 복소 절댓값 (5)에 의해 $|\iota(x_n)| = |x_n|$이다. 따라서 실수 항 $|\iota(x_n)|$과 $|x_n|$은 같은 항이고, 정의에 의해 앞 문장이 나온다. $m = 1$이면 실수 항 $|x_n|$의 급수는 $n$번째 항이 $|x_n|$인 실수열의 급수이고 이것이 [[absolute-convergence]]의 절대수렴의 정의이다. $m = 0$이면 그것은 $n$에서의 값이 $|x_n|$인 0부터 번호가 붙은 수열의 급수이고 이것이 [[mertens-theorem]]의 진술의 정의이다.

**2의 증명.** 준비에 의해 $(|u_j|)$의 급수가 수렴한다고 하자. 복소 절댓값 (6)에 의해 모든 $j$에서 $0 \le |\operatorname{Re} u_j| \le |u_j|$이므로 [[comparison-test|비교 판정법]]의 (2)에 의해 $n$번째 항이 $|\operatorname{Re} u_j|$인 실수열의 급수가 수렴한다. 곧 $(\operatorname{Re} u_j)$의 급수는 절대수렴하고, [[absolute-convergence]]의 (1)에 의해 수렴한다. 허수부도 같다. 복소 급수 (2)에 의해 $(u_j)$의 급수는 수렴한다. 그 합을 $S$, $(|u_j|)$의 급수의 합을 $U$라 하자.

$k$번째 부분합 $P_k = \sum_{j=1}^{k} u_j$에 대하여 유한 합 (7)에 의해 $|P_k| \le \sum_{j=1}^{k} |u_j|$이고, [[finite-sum-of-reals|실수의 유한 합]]의 (1)에 의해 오른쪽은 $(|u_j|)$의 $k$번째 부분합이다. 비교 판정법의 (1)에 의해 그것은 $U$ 이하이다. 따라서 모든 자연수 $k$에서 $|P_k| \le U$이다. $(P_k)$는 $S$로 수렴하므로 극한 법칙 (4)에 의해 $(|P_k|)$는 $|S|$로 수렴하고, [[limits-preserve-inequalities|극한과 부등식]]의 (3)에 의해 $|S| \le U$이다. 준비에 의해 이것이 결론이다.

**3의 증명.** 준비의 $(u_j)$, $(v_j)$에 대하여 $j + m - 1 \ge m$이므로 가정에 의해 모든 $j$에서 $0 \le |u_j| \le v_j$이다. 비교 판정법의 (2)에 의해 $(|u_j|)$의 급수는 수렴하고, 두 합을 $U$, $V$라 하면 $U \le V$이다. 곧 $t_n$의 급수는 절대수렴하고 $\sum_{n=m}^{\infty} |t_n| \le \sum_{n=m}^{\infty} w_n$이다. 앞 부등식은 (2)이다.

**판정법의 준비.** 아래에서 실수열 $(x_n)$을 $x_n = |z_n|$으로 둔다. 절댓값 (1)과 $0 \le |z_n|$에 의해 $|x_n| = |z_n|$이므로, $n$번째 항이 $|x_n|$인 실수열은 $(x_n)$ 자신이다. 따라서 $(x_n)$의 급수가 [[absolute-convergence]]의 뜻으로 절대수렴하는 것은 정확히 $(x_n)$의 급수가 수렴할 때이고, 정의에 의해 이것은 $(z_n)$의 급수가 절대수렴할 때이다. 또 수렴 (1)의 마지막 문장에 의해 $(z_n)$이 $0$으로 수렴하는 것은 정확히 $(x_n)$이 $0$으로 수렴할 때이다. 그러므로 $(x_n)$이 $0$으로 수렴하지 않으면 $(z_n)$도 $0$으로 수렴하지 않고, 복소 급수 (7)에 의해 $(z_n)$의 급수는 발산한다. 이것을 (가)라 부른다.

**4의 증명.** (i) 가정은 모든 $n \ge M$에서 $|x_{n+1}| \le r\,|x_n|$이라는 것이므로, [[ratio-test-for-series|급수의 비 판정법]]의 (1)에 의해 $(x_n)$의 급수는 절대수렴한다. 판정법의 준비에 의해 $(z_n)$의 급수가 절대수렴한다.

(ii) 복소 절댓값 (1)에 의해 $x_M = |z_M| \ne 0$이고, 가정은 모든 $n \ge M$에서 $|x_{n+1}| \ge |x_n|$이라는 것이다. 비 판정법의 (4)에 의해 $(x_n)$은 $0$으로 수렴하지 않으므로, (가)에 의해 결론이 나온다.

(iii) 복소 절댓값 (1)에 의해 모든 $n$에서 $x_n \ne 0$이고, $q_n = |x_{n+1}|\,|x_n|^{-1}$은 비 판정법의 $(q_n)$과 같다. $L < 1$이면 비 판정법의 (2)에 의해 $(x_n)$의 급수는 절대수렴하고, 판정법의 준비에 의해 $(z_n)$의 급수가 절대수렴한다. $L > 1$이라 하자. $\varepsilon = L - 1$은 양수이므로 [[limit-of-sequence|수열의 수렴]]의 정의에 의해 자연수 $M$이 있어 $n \ge M$이면 $|q_n - L| < L - 1$이고, 절댓값 (8)에 의해 $L - (L - 1) < q_n$, 곧 $1 < q_n$이다. $n \ge M$이면 $0 < |z_n|$이므로 순서 성질 (4)의 (i)과 (K2), (K4), (K8)에 의해 $|z_n| = 1 \cdot |z_n| < q_n |z_n| = |z_{n+1}|$이고, 특히 $|z_{n+1}| \ge |z_n|$이다. $z_M \ne 0$이므로 (ii)에 의해 결론이 나온다.

**5의 증명.** 판정법의 준비에 의해 $\sqrt[n]{|x_n|} = \sqrt[n]{|z_n|} = y_n$이므로, $(y_n)$은 [[root-test|근 판정법]]의 진술에서 $(x_n)$에 대해 정한 수열과 같다.

(i) 근 판정법의 (1)에 의해 $(x_n)$의 급수는 절대수렴하고, 판정법의 준비에 의해 $(z_n)$의 급수가 절대수렴한다.

(ii) 근 판정법의 (2)에 의해 $(x_n)$은 $0$으로 수렴하지 않으므로 (가)에 의해 결론이 나온다.

(iii) $L < 1$이면 근 판정법의 (3)의 (i)과 판정법의 준비에 의해 $(z_n)$의 급수가 절대수렴한다. $1 < L$이면 근 판정법의 (6)의 (ii)를 유계인 수열 $(y_n)$과 $r = 1$에 쓰면, 모든 자연수 $M$에 대하여 $n \ge M$이고 $1 < y_n$인 자연수 $n$이 있다. 이때 $1 \le y_n$이므로 (ii)에 의해 결론이 나온다.

**6의 증명.** 복소 거듭제곱 (4)에 의해 $0$ 이상인 모든 정수 $n$에서 $|z^n| = |z|^n$이고, 복소 절댓값 (3)에 의해 $|a z^n| = |a|\,|z|^n$이다.

(i) $|z| < 1$이라 하자. 절댓값 (1)에 의해 $\bigl||z|\bigr| = |z| < 1$이므로 [[series-indexed-from-zero]]의 (13)의 (ii)에 의해 $n$에서의 값이 $|z|^n$인 0부터 번호가 붙은 실수열의 급수는 수렴하고 합은 $(1 - |z|)^{-1}$이다. 이 수열은 $n$에서의 값이 $|z^n|$인 수열과 같으므로, 정의에 의해 $(z^n)_{n \ge 0}$의 급수는 절대수렴하고 둘째 등식이 성립한다. (2)에 의해 $(z^n)_{n \ge 0}$의 급수는 수렴한다.

합을 구한다. 복소 절댓값 (5)에 의해 $|1| = 1$이고 $|z| < 1$이므로 $z \ne 1$이다. 유한 합 (9)에 의해 $0$ 이상인 모든 정수 $k$에서
$$
\sum_{n=0}^{k-1} z^n = \bigl(1 - z^{k}\bigr)(1 - z)^{-1}
$$
이다(유한 합 (9)를 $K = k - 1 \ge -1$에 쓴 것). 복소 급수 (1)에 의해 $(z^n)_{n \ge 0}$을 한 칸 옮긴 수열의 $k$번째 부분합은 $\sum_{n=0}^{k-1} z^n$이고, 급수의 합은 부분합 수열의 극한이다. 자연수 $k$에서 $|z^k| = |z|^k$이고 [[geometric-sequence-limit|등비수열의 극한]]의 (1)에 의해 $(|z|^k)$는 $0$으로 수렴하므로, 수렴 (1)의 마지막 문장에 의해 $k$번째 항이 $z^k$인 복소수열은 $0$으로 수렴한다. 수렴 (2)의 상수 수열과 극한 법칙 (1), (2)에 의해 $k$번째 항이 $(1 - z^k)(1 - z)^{-1}$인 복소수열은 $(1 - 0)(1 - z)^{-1} = (1 - z)^{-1}$로 수렴한다. 따라서 $\sum_{n=0}^{\infty} z^n = 1/(1 - z)$이다. $a z^n$의 급수는 복소 급수 (5)의 상수배에 의해 수렴하고 합은 $a(1 - z)^{-1} = a/(1 - z)$이다.

(ii) $|z| \ge 1$이라 하자. 순서 성질 (5)의 (ii)에 의해 $0 \le 1 \le |z|$이므로 [[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (ii)와 (2)의 (iv)에 의해 $1 = 1^n \le |z|^n = |z^n|$이다. 복소 절댓값 (1)에 의해 $0 \le |a|$이고, 순서 성질 (4)의 (iii)과 (K1), (K4)에 의해 $|a| = 1 \cdot |a| \le |z|^n |a| = |a z^n|$이다. $a \ne 0$이면 복소 절댓값 (1)에 의해 $0 < |a|$이다. $n$에서의 값이 $a z^n$인 0부터 번호가 붙은 복소수열이 $0$으로 수렴한다고 하자. 수렴 (6)의 (ii)에 의해 $\varepsilon = |a|$에 대하여 $0$ 이상인 정수 $M$이 있어 $n \ge M$이면 $|a z^n| = |a z^n - 0| < |a|$이다. $n = M$에서 이것은 $|a| \le |a z^M|$과 함께 성립하지 않는다(순서 성질 (1)의 (i)). 따라서 그 수열은 $0$으로 수렴하지 않고, 복소 급수 (7)에 의해 그 급수는 발산한다. $(z^n)_{n \ge 0}$은 $a = 1$인 경우이다(복소수체 (1)에 의해 $1$은 체 $\mathbb{C}$의 단위원이므로 $1 z^n = z^n$이고 $1 \ne 0$이다).

(iii) $a \ne 0$이면 (i)과 (ii)에서 나온다. $a = 0$이면 [[ring-basic-properties|환의 기본 성질]]의 (1)에 의해 모든 항이 $0$이고, 복소 급수 (3)에 의해 그 급수는 수렴하고 합은 $0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[공비가 i/2 인 등비급수]
$z = i/2$이면 [[modulus-of-complex-number|복소수의 절댓값]]의 (5)에 의해 $|z| = 1/2 < 1$이므로 (6)의 (i)에 의해
$$
\sum_{n=0}^{\infty} \Bigl(\frac{i}{2}\Bigr)^n = \frac{1}{1 - i/2}
$$
입니다. [[modulus-of-complex-number|복소수의 절댓값]]의 (4)로 역수를 구하면 $|1 - i/2|^2 = 1 + 1/4 = 5/4$이므로 $(1 - i/2)^{-1} = (4/5)(1 + i/2) = 4/5 + (2/5) i$입니다. 실수부와 허수부로 확인할 수 있습니다. [[power-of-a-complex-number|복소수의 거듭제곱]]의 (6)에 의해 항은 $1$, $i/2$, $-1/4$, $-i/8$, $1/16$, …이고, 실수부는 공비 $-1/4$인 등비급수 $1 - 1/4 + 1/16 - \cdots$로 합이 $(1 + 1/4)^{-1} = 4/5$, 허수부는 첫째 항이 $1/2$이고 공비가 $-1/4$인 등비급수로 합이 $(1/2)(1 + 1/4)^{-1} = 2/5$입니다.
:::

:::example[비 판정법으로 보는 n(i/2)ⁿ]
$n$번째 항이 $z_n = n (i/2)^n$인 복소수열을 봅니다. [[power-of-a-complex-number|복소수의 거듭제곱]]의 (4)와 [[modulus-of-complex-number|복소수의 절댓값]]의 (3), (5)에 의해 $|z_n| = n\,2^{-n}$이고 모든 $n$에서 $z_n \ne 0$입니다. 비는
$$
q_n = \frac{(n + 1)\,2^{-n-1}}{n\,2^{-n}} = \frac{1}{2} + \frac{1}{2} \cdot \frac{1}{n}
$$
이고, [[basic-limits]]의 (2)와 [[limit-of-sum-and-product|극한의 사칙연산]]에 의해 $1/2$로 수렴합니다. $1/2 < 1$이므로 (4)의 (iii)에 의해 $(z_n)$의 급수는 절대수렴합니다. 항의 방향은 $i^n$을 따라 네 방향을 돌지만, 절댓값의 급수가 수렴하므로 합이 정해집니다.
:::

:::counterexample[수렴하지만 절대수렴하지 않는 예]
$n$번째 항이 $z_n = (-1)^n n^{-1} i$인 순허수 항의 복소수열을 봅니다. 실수부의 수열은 모든 항이 $0$이고, 허수부의 수열 $((-1)^n n^{-1})$의 급수는 [[alternating-series-test|교대급수 판정법]]의 (4)에 의해 수렴하므로 [[complex-series|복소 급수]]의 (2)에 의해 $(z_n)$의 급수는 수렴합니다. 그러나 [[modulus-of-complex-number|복소수의 절댓값]]의 (5)에 의해 $|z_n| = n^{-1}$이고, $(|z_n|)$의 급수는 조화급수라 [[harmonic-series-diverges|조화급수는 발산한다]]의 (2)에 의해 발산합니다. 그래서 (2)의 거꾸로는 성립하지 않을 수 있고, "$|z_n|$의 급수가 발산한다"는 것만으로 복소 급수가 발산한다고 할 수 없습니다.
:::

## 확인 질문

:::check[$z = i$일 때 $(z^n)_{n \ge 0}$의 급수는 수렴하는가?]
발산합니다. $|i| = 1$이므로 (6)의 (ii)에 의해 모든 항의 절댓값이 $1$ 이상이고 항이 $0$으로 수렴하지 않습니다. 실제로 [[power-of-a-complex-number|복소수의 거듭제곱]]의 (6)에 의해 항은 $1$, $i$, $-1$, $-i$를 되풀이하고, 부분합은 $1$, $1 + i$, $i$, $0$을 되풀이합니다. $1/(1 - i) = (1 + i)/2$는 정해지는 복소수이지만, 급수가 발산하므로 $\sum_{n=0}^{\infty} i^n$이라는 기호는 쓰지 않습니다.
:::

:::check[$n$번째 항이 $z_n = \bigl(n i / (2n + 1)\bigr)^n$인 복소수열의 급수는 절대수렴하는가?]
절대수렴합니다. [[power-of-a-complex-number|복소수의 거듭제곱]]의 (4)와 [[modulus-of-complex-number|복소수의 절댓값]]의 (5)에 의해 $|z_n| = \bigl(n / (2n + 1)\bigr)^n$이고, [[nth-root]]의 (2)에 의해 $\sqrt[n]{|z_n|} = n / (2n + 1)$입니다. $2n \le 2n + 1$이므로 모든 $n$에서 $n / (2n + 1) \le 1/2$이고, (5)의 (i)을 $r = 1/2$, $M = 1$에 쓰면 됩니다.
:::
