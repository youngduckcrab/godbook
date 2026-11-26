---
title: 복소수열의 수렴
title_en: Convergence of Complex Sequences
aliases: [복소수열, 복소평면의 완비성, ℂ 의 완비성, 복소수열의 코시 수열, 0부터 번호가 붙은 복소수열, sequence of complex numbers, completeness of the complex plane]
kind: proposition
field: complex-analysis
msc: ["30", "40A05"]
level: undergrad
summary: 복소수열은 ℂ 의 수열이고, 복소수 z 로 수렴하는 것은 정확히 |zₙ − z| 가 0 으로 수렴할 때, 또 정확히 실수부의 수열과 허수부의 수열이 각각 Re z, Im z 로 수렴할 때이다. 극한은 하나뿐이고, 수렴하는 수열은 유계이며, 코시 수열인 것도 실수부와 허수부로 판정한다. ℂ 는 완비 거리공간이다. 0부터 번호가 붙은 복소수열의 수렴과 유계도 정한다.
requires: [function, recursion-theorem, mathematical-induction, prime-number, well-ordering-principle, natural-numbers-are-infinite, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, sequence, limit-of-sequence, limit-is-unique, basic-limits, limit-of-sum-and-product, tail-of-a-sequence, archimedean-property, cauchy-sequence, cauchy-iff-convergent, series-indexed-from-zero, complex-number, complex-field, modulus-of-complex-number, metric-space, metric-space-examples, sequence-in-a-space, convergence-in-metric-spaces, metric-space-is-hausdorff, limit-unique-in-hausdorff, bounded-sequence-in-metric-space, cauchy-sequence-in-metric-space, complete-metric-space, completeness-of-products, complex-plane-as-metric-space]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.1절 Complex numbers, 11.1.1소절 The complex plane (p.140); 11.1.2소절 Complex numbers and limits (p.141); 11.1.4소절 Exercise 11.1.7 (p.143); 11.3절 Power series and analytic functions, 11.3.1소절 Analytic functions (p.153)"
    checked: original
    note: "출처 11.1.2소절(p.141)은 ℂ 에서의 수렴이 ℝ² 에서의 수렴과 같으므로 복소수열은 실수부와 허수부가 수렴할 때 정확히 수렴한다고 적고, ℝ² 의 수렴에 관해 배운 것과 실수에 관한 결과를 실수부와 허수부에 그대로 써도 된다고 말한다. 증명은 앞 권의 ℝ² 의 사실에 넘긴다. (3)은 그 문장을 이 사이트의 거리공간 항목으로 증명한 것이다. 출처 11.1.1소절(p.140)은 ℝ² 가 완비 거리공간이므로 ℂ 도 완비라고 한 줄로 적는다. (5)가 그것이고, 이 사이트는 실수부와 허수부의 코시 수열로 증명한다. 출처 Exercise 11.1.7(p.143)은 복소수열이 유계라는 것을 '모든 n 에서 |z_n| ≤ M 인 M 이 있다'로 풀어 적는데, (4)의 앞 문장이 그 두 뜻이 같다는 것이다. 출처는 복소수열을 {z_n}_{n=1}^∞ 로 1부터 번호를 붙여 쓰고(p.141), 11.3.1소절(p.153)의 멱급수에서는 n = 0 부터의 항을 쓴다. (6)의 0부터 번호가 붙은 복소수열은 급수와 멱급수 강의의 0부터 번호가 붙은 수열에 맞춘 것이다."
  - ref: lebl-basic-analysis
    loc: "7.3절 Sequences and convergence, 7.3.2소절 Convergence in euclidean space, Proposition 7.3.9 와 Example 7.3.10 (p.276); 7.4절 Completeness and compactness, 7.4.1소절 Cauchy sequences and completeness, Proposition 7.4.4 (p.279); 2.1절 Sequences and limits, Definition 2.1.1 과 그 뒤 (p.51), Example 2.1.5 (p.53), 2.1.4소절 Exercises 2.1.2, 2.1.7 (p.59); 2.5절 Series, 2.5.1소절 Remark 2.5.2 (p.87)"
    checked: original
    note: "출처 Example 7.3.10(p.276)은 ℂ 를 거리공간 ℝ² 로 보면, Proposition 7.3.9(ℝⁿ 의 수열은 모든 성분이 수렴할 때 정확히 수렴한다)에 의해 z_n = x_n + iy_n 이 z = x + iy 로 수렴하는 것은 정확히 (x_n) 이 x 로, (y_n) 이 y 로 수렴할 때라고 적는다. (3)과 같은 내용이다. 출처 Proposition 7.4.4(p.279)는 ℝⁿ 이 표준 거리로 완비라는 것이고, (5)의 완비성은 그것을 ℝ × ℝ 에서 본 것과 같다(이 사이트에서는 completeness-of-products 의 (4)). 예시 'n번째 항이 n⁻¹ + (1 − n⁻¹)i 인 수열'은 실수부와 허수부의 극한을 따로 구하는 이 예의 방법을 쓴 것이다. 반례 '실수부의 수열만 수렴하는 예'의 허수부의 수열은 출처 Example 2.1.5(p.53)가 발산함을 보이는 수열 ((−1)ⁿ) 과 같은 수열이다. (1)의 마지막 문장은 출처 Exercise 2.1.7 a)(p.59: 실수열이 0 으로 수렴하는 것은 정확히 절댓값의 수열이 0 으로 수렴할 때)를 복소수열로 옮긴 것이다. 확인 질문 '$n$번째 항이 $n^{-1} + n i$인 복소수열은 수렴하는가?'의 허수부의 수열 (n) 은 출처 p.51 이 Definition 2.1.1 뒤에서 유계가 아니라고 적는 수열 {n} 이고, Exercise 2.1.2(p.59)는 그 수열이 수렴하는지 묻는다. 출처의 수열은 ℕ 위의 함수이고(Definition 2.1.1), Remark 2.5.2(p.87)는 급수를 1 이 아닌 번호부터 쓰는 것이 편할 때가 있다며 Σ_{n=0}^∞ rⁿ 을 예로 든다. (6)의 0부터 번호가 붙은 수열은 같은 쓰임이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(d 와 d_E 가 같은 함수라는 것, 꼬리판 역수의 극한 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]]의 것이고, 체 $\mathbb{C}$의 연산과 표기, 함수 $\iota$, $a + bi$ 꼴은 [[complex-field]]의 것이며, 복소수의 절댓값 $|z|$는 [[modulus-of-complex-number]]의 것이다. $\mathbb{C}$에는 [[complex-plane-as-metric-space|복소평면의 거리]] $d(z, w) = |z - w|$와 그 거리위상을 준다. 집합 $X$의 수열, 수렴, 발산, 극한, 상수 수열, 부분수열, $K$-꼬리는 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 것이고, 하우스도르프 공간의 극한의 기호 $\lim_{n \to \infty}$는 [[limit-unique-in-hausdorff]]의 것이다. 거리공간의 수열의 유계는 [[bounded-sequence-in-metric-space]], 코시 수열은 [[cauchy-sequence-in-metric-space]], 완비는 [[complete-metric-space]]의 것이다. 실수열과 그 유계, 수렴, 극한의 기호, 코시 수열은 해석학 입문의 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]], [[cauchy-sequence]]의 것이다.

**복소수열.** $\mathbb{C}$의 수열, 곧 함수 $\mathbb{N} \to \mathbb{C}$를 **복소수열**(sequence of complex numbers)이라 한다. $(z_n)$이 복소수열이면 각 자연수 $n$에 대하여 $\operatorname{Re} z_n$, $\operatorname{Im} z_n$은 이미 정해진 실수이므로 $n$번째 항이 $\operatorname{Re} z_n$인 실수열과 $n$번째 항이 $\operatorname{Im} z_n$인 실수열이 있다([[sequence]]의 (1)). 이것을 $(z_n)$의 **실수부의 수열** $(\operatorname{Re} z_n)$, **허수부의 수열** $(\operatorname{Im} z_n)$이라 한다. 복소수 $z$에 대하여 $n$번째 항이 $|z_n - z|$인 실수열도 같은 방법으로 있다.

다음이 성립한다. 아래에서 $(z_n)$은 복소수열이고 $z$는 복소수이다.

1. (ε–M 꼴) $(z_n)$이 $z$로 수렴하는 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 자연수 $M$이 있어 $n \ge M$인 모든 자연수 $n$에서 $|z_n - z| < \varepsilon$일 때이다. 또 정확히 $n$번째 항이 $|z_n - z|$인 실수열이 $0$으로 수렴할 때이다. 특히 $(z_n)$이 $0$으로 수렴하는 것은 정확히 $n$번째 항이 $|z_n|$인 실수열이 $0$으로 수렴할 때이다.
2. (극한은 하나뿐이다) $(\mathbb{C}, \mathcal{T}_d)$는 하우스도르프 공간이다. 따라서 $(z_n)$이 $z$로 수렴하고 복소수 $w$로도 수렴하면 $z = w$이고, 수렴하는 복소수열의 극한을 $\lim_{n \to \infty} z_n$으로 쓴다. 복소수 $c$에 대하여 모든 항이 $c$인 상수 수열의 극한은 $c$이고, 수렴하는 복소수열의 모든 부분수열과 모든 $K$-꼬리는 같은 극한으로 수렴한다.
3. (실수부와 허수부) $(z_n)$이 $z$로 수렴하는 것은 정확히 $(\operatorname{Re} z_n)$이 $\operatorname{Re} z$로 수렴하고 $(\operatorname{Im} z_n)$이 $\operatorname{Im} z$로 수렴할 때이다. 따라서 $(z_n)$이 수렴하는 것은 정확히 $(\operatorname{Re} z_n)$과 $(\operatorname{Im} z_n)$이 모두 수렴할 때이고, 이때
   $$
   \begin{aligned}
   \operatorname{Re} \lim_{n \to \infty} z_n &= \lim_{n \to \infty} \operatorname{Re} z_n, \\
   \operatorname{Im} \lim_{n \to \infty} z_n &= \lim_{n \to \infty} \operatorname{Im} z_n
   \end{aligned}
   $$
   이다. 곧 $\lim_{n \to \infty} z_n = \lim_{n \to \infty} \operatorname{Re} z_n + \bigl(\lim_{n \to \infty} \operatorname{Im} z_n\bigr) i$이다.
4. (유계) $(z_n)$이 $(\mathbb{C}, d)$에서 유계인 것은 정확히 모든 자연수 $n$에서 $|z_n| \le B$인 실수 $B$가 있을 때이고, 또 정확히 $(\operatorname{Re} z_n)$과 $(\operatorname{Im} z_n)$이 모두 [[sequence]]의 뜻으로 유계일 때이다. $(z_n)$이 수렴하면 $(z_n)$은 유계이다.
5. (코시 수열과 완비성) $(z_n)$이 $(\mathbb{C}, d)$의 코시 수열인 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 자연수 $M$이 있어 $n \ge M$이고 $k \ge M$인 모든 자연수 $n$, $k$에서 $|z_n - z_k| < \varepsilon$일 때이다. 또 정확히 $(\operatorname{Re} z_n)$과 $(\operatorname{Im} z_n)$이 모두 코시 수열일 때이다. $(\mathbb{C}, d)$는 완비 거리공간이다. 따라서 복소수열이 수렴하는 것은 정확히 그것이 코시 수열일 때이다.
6. (0부터 번호가 붙은 복소수열) $0$ 이상인 정수 전체의 집합 $\{n \in \mathbb{Z} : 0 \le n\}$에서 $\mathbb{C}$로의 함수 $z$를 **0부터 번호가 붙은 복소수열**이라 하고, $n$에서의 값을 $z_n$, 함수 $z$를 $(z_n)_{n \ge 0}$으로 쓴다. $0$ 이상인 정수 $n$마다 복소수 $r_n$이 $n$에 대한 식이나 이미 정해진 대상으로 하나씩 정해져 있으면, [[recursion-theorem|재귀 정리]]의 (1)에 의해 $n$에서의 값이 $r_n$인 0부터 번호가 붙은 복소수열이 있다. $(z_n)_{n \ge 0}$에서 자연수 $n$에서의 값만 쓴 복소수열을 $(z_n)_{n \ge 1}$로 쓴다. 또 $n$에서의 값이 $\operatorname{Re} z_n$, $\operatorname{Im} z_n$인 0부터 번호가 붙은 수열([[series-indexed-from-zero]]의 것)을 $(\operatorname{Re} z_n)_{n \ge 0}$, $(\operatorname{Im} z_n)_{n \ge 0}$으로 쓴다.
   - (i) $(z_n)_{n \ge 0}$이 $z$로 **수렴한다**는 것은 정확히 $(z_n)_{n \ge 1}$이 $z$로 수렴할 때이고, $(z_n)_{n \ge 0}$이 수렴하면 $\lim_{n \to \infty} z_n$은 $(z_n)_{n \ge 1}$의 극한을 뜻한다. **발산한다**는 것은 수렴하지 않는다는 것이다.
   - (ii) $(z_n)_{n \ge 0}$이 $z$로 수렴하는 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 $0$ 이상인 정수 $M$이 있어 $n \ge M$인 $0$ 이상인 모든 정수 $n$에서 $|z_n - z| < \varepsilon$일 때이다. 또 정확히 $j$번째 항이 $z_{j-1}$인 복소수열(한 칸 옮긴 수열)이 $z$로 수렴할 때이고, 이때 그 극한은 $\lim_{n \to \infty} z_n$이다. 또 정확히 $(\operatorname{Re} z_n)_{n \ge 1}$이 $\operatorname{Re} z$로 수렴하고 $(\operatorname{Im} z_n)_{n \ge 1}$이 $\operatorname{Im} z$로 수렴할 때이다.
   - (iii) $(z_n)_{n \ge 0}$이 **유계**라는 것은 정확히 $0$ 이상인 모든 정수 $n$에서 $|z_n| \le B$인 실수 $B$가 있을 때이다. 이것은 정확히 $(z_n)_{n \ge 1}$이 유계일 때이고, $(z_n)_{n \ge 0}$이 수렴하면 $(z_n)_{n \ge 0}$은 유계이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, and $i$ are those of the entry on complex numbers; the operations and notation of the field $\mathbb{C}$, the function $\iota$, and the form $a + bi$ are those of the entry on the field of complex numbers; the modulus $|z|$ is that of the entry on the modulus of a complex number. $\mathbb{C}$ carries the metric of the complex plane, $d(z, w) = |z - w|$, and its metric topology. Sequences in a set $X$, convergence, divergence, limits, constant sequences, subsequences, and $K$-tails are those of the entry on sequences and convergence in a topological space, and the limit notation $\lim_{n \to \infty}$ in a Hausdorff space is that of the entry on uniqueness of limits in Hausdorff spaces. Bounded sequences in a metric space are as in the entry on bounded sequences in a metric space, Cauchy sequences as in the entry on Cauchy sequences in a metric space, and completeness as in the entry on complete metric spaces. Real sequences and their boundedness, convergence, limit notation, and Cauchy sequences are those of the entries on sequences, limits of sequences, uniqueness of limits, and Cauchy sequences in introductory analysis.

**Complex sequences.** A sequence in $\mathbb{C}$, that is, a function $\mathbb{N} \to \mathbb{C}$, is called a **sequence of complex numbers** (complex sequence). If $(z_n)$ is a complex sequence, then for each natural number $n$ the numbers $\operatorname{Re} z_n$, $\operatorname{Im} z_n$ are already determined real numbers, so there are a real sequence whose $n$th term is $\operatorname{Re} z_n$ and a real sequence whose $n$th term is $\operatorname{Im} z_n$ (item (1) of the entry on sequences). These are called the **sequence of real parts** $(\operatorname{Re} z_n)$ and the **sequence of imaginary parts** $(\operatorname{Im} z_n)$ of $(z_n)$. For a complex number $z$ there is, in the same way, a real sequence whose $n$th term is $|z_n - z|$.

The following hold. Below, $(z_n)$ is a complex sequence and $z$ is a complex number.

1. (The ε–M form) $(z_n)$ converges to $z$ exactly when for every positive real number $\varepsilon$ there is a natural number $M$ such that $|z_n - z| < \varepsilon$ for all natural numbers $n \ge M$. It also does so exactly when the real sequence whose $n$th term is $|z_n - z|$ converges to $0$. In particular, $(z_n)$ converges to $0$ exactly when the real sequence whose $n$th term is $|z_n|$ converges to $0$.
2. (The limit is unique) $(\mathbb{C}, \mathcal{T}_d)$ is a Hausdorff space. Hence if $(z_n)$ converges to $z$ and also to a complex number $w$, then $z = w$, and the limit of a convergent complex sequence is written $\lim_{n \to \infty} z_n$. For a complex number $c$, the limit of the constant sequence all of whose terms are $c$ is $c$, and every subsequence and every $K$-tail of a convergent complex sequence converges to the same limit.
3. (Real and imaginary parts) $(z_n)$ converges to $z$ exactly when $(\operatorname{Re} z_n)$ converges to $\operatorname{Re} z$ and $(\operatorname{Im} z_n)$ converges to $\operatorname{Im} z$. Hence $(z_n)$ converges exactly when $(\operatorname{Re} z_n)$ and $(\operatorname{Im} z_n)$ both converge, and in that case
   $$
   \begin{aligned}
   \operatorname{Re} \lim_{n \to \infty} z_n &= \lim_{n \to \infty} \operatorname{Re} z_n, \\
   \operatorname{Im} \lim_{n \to \infty} z_n &= \lim_{n \to \infty} \operatorname{Im} z_n.
   \end{aligned}
   $$
   That is, $\lim_{n \to \infty} z_n = \lim_{n \to \infty} \operatorname{Re} z_n + \bigl(\lim_{n \to \infty} \operatorname{Im} z_n\bigr) i$.
4. (Boundedness) $(z_n)$ is bounded in $(\mathbb{C}, d)$ exactly when there is a real number $B$ with $|z_n| \le B$ for all natural numbers $n$, and also exactly when $(\operatorname{Re} z_n)$ and $(\operatorname{Im} z_n)$ are both bounded in the sense of the entry on sequences. If $(z_n)$ converges, then $(z_n)$ is bounded.
5. (Cauchy sequences and completeness) $(z_n)$ is a Cauchy sequence of $(\mathbb{C}, d)$ exactly when for every positive real number $\varepsilon$ there is a natural number $M$ such that $|z_n - z_k| < \varepsilon$ for all natural numbers $n \ge M$ and $k \ge M$. It is one also exactly when $(\operatorname{Re} z_n)$ and $(\operatorname{Im} z_n)$ are both Cauchy sequences. $(\mathbb{C}, d)$ is a complete metric space. Hence a complex sequence converges exactly when it is a Cauchy sequence.
6. (Complex sequences indexed from zero) A function $z$ from the set $\{n \in \mathbb{Z} : 0 \le n\}$ of all integers at least $0$ to $\mathbb{C}$ is called a **complex sequence indexed from zero**; its value at $n$ is written $z_n$ and the function $z$ is written $(z_n)_{n \ge 0}$. If for each integer $n \ge 0$ a complex number $r_n$ is given by a formula in $n$ or by an already determined object, then by item (1) of the recursion theorem there is a complex sequence indexed from zero whose value at $n$ is $r_n$. The complex sequence that uses only the values of $(z_n)_{n \ge 0}$ at natural numbers is written $(z_n)_{n \ge 1}$. The sequences indexed from zero (those of the entry on sequences indexed from zero) whose values at $n$ are $\operatorname{Re} z_n$, $\operatorname{Im} z_n$ are written $(\operatorname{Re} z_n)_{n \ge 0}$, $(\operatorname{Im} z_n)_{n \ge 0}$.
   - (i) $(z_n)_{n \ge 0}$ **converges** to $z$ exactly when $(z_n)_{n \ge 1}$ converges to $z$, and if $(z_n)_{n \ge 0}$ converges, $\lim_{n \to \infty} z_n$ means the limit of $(z_n)_{n \ge 1}$. It **diverges** when it does not converge.
   - (ii) $(z_n)_{n \ge 0}$ converges to $z$ exactly when for every positive real number $\varepsilon$ there is an integer $M \ge 0$ such that $|z_n - z| < \varepsilon$ for all integers $n \ge M$ with $n \ge 0$. It does so also exactly when the complex sequence whose $j$th term is $z_{j-1}$ (the shifted sequence) converges to $z$, and then that limit is $\lim_{n \to \infty} z_n$. It does so also exactly when $(\operatorname{Re} z_n)_{n \ge 1}$ converges to $\operatorname{Re} z$ and $(\operatorname{Im} z_n)_{n \ge 1}$ converges to $\operatorname{Im} z$.
   - (iii) $(z_n)_{n \ge 0}$ is **bounded** exactly when there is a real number $B$ with $|z_n| \le B$ for all integers $n \ge 0$. This holds exactly when $(z_n)_{n \ge 1}$ is bounded, and if $(z_n)_{n \ge 0}$ converges, then $(z_n)_{n \ge 0}$ is bounded.
:::

## 직관

복소수열이 $z$로 수렴한다는 것은 평면 위의 점들이 점 $z$에 한없이 가까이 모인다는 것이고, 가까움은 [[complex-plane-as-metric-space|복소평면의 거리]] $|z_n - z|$로 잽니다((1)). 비유하자면 지도 위의 배가 항구에 다가가는 것과 같습니다. 배가 항구에 다가가는 것은 정확히 동서 방향의 위치와 남북 방향의 위치가 각각 항구의 것에 다가가는 것입니다((3)). 거리 $|z_n - z|$는 두 방향의 차 가운데 어느 쪽보다도 작지 않고 두 차의 합보다 크지 않으므로, 거리가 작아지면 두 차가 모두 작아지고 두 차가 모두 작아지면 거리도 작아집니다. 이 비유에서 "모든 $\varepsilon$에 번호 $M$이 있다"는 "항구 둘레의 어떤 원을 그려도 어느 때부터는 배가 그 원 안에 머문다"에 해당합니다.

이 두 방향의 읽기 덕분에 복소수열에 관한 물음은 실수열 두 개에 관한 물음이 됩니다. 수렴(3), 유계(4), 코시 수열(5)이 모두 그렇고, 실수의 코시 완비성에서 복소평면의 완비성이 나옵니다. 다만 실수부만 수렴해서는 모자랍니다. 허수부의 수열이 수렴하지 않으면 점들은 한 점에 모이지 않습니다(아래 반례).

## 증명

:::idea
$d$는 $\mathbb{R} \times \mathbb{R}$의 유클리드 거리 그 자체이므로, 거리공간의 수렴·유계·코시와 $\mathbb{R} \times \mathbb{R}$에서 성분별로 보는 위상수학 입문의 번호를 그대로 쓴다. 성분의 차와 거리는 $|\operatorname{Re} w| \le |w| \le |\operatorname{Re} w| + |\operatorname{Im} w|$로 잇는다.
:::

:::hint
(3)은 [[convergence-in-metric-spaces]]의 (4)를 $d_E$에 쓰면 됩니다. 복소수 $z_n$은 순서쌍 $(\operatorname{Re} z_n, \operatorname{Im} z_n)$입니다.
:::

:::hint
(6)의 (ii)에서 한 칸 옮긴 수열의 $1$-꼬리는 $(z_n)_{n \ge 1}$입니다.
:::

:::proof
"순서 성질 (n)"은 [[order-properties-of-reals]]의 번호, "절댓값 (n)"은 [[absolute-value]]의 번호, "복소 절댓값 (n)"은 [[modulus-of-complex-number]]의 번호, "복소평면 (n)"은 [[complex-plane-as-metric-space|복소평면의 거리]]의 번호, "위상 수열 (n)"은 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 번호, "거리 수렴 (n)"은 [[convergence-in-metric-spaces]]의 번호이다. (K…)는 [[real-number-arithmetic]], (Z…)는 [[prime-number]]와 [[well-ordering-principle]]의 진술이다. 복소평면 (1)에 의해 모든 복소수 $z$, $w$에서 $d(z, w) = |z - w|$이다. [[complex-field|복소수체]]의 (1)에 의해 $\operatorname{Re}(z - w) = \operatorname{Re} z - \operatorname{Re} w$, $\operatorname{Im}(z - w) = \operatorname{Im} z - \operatorname{Im} w$이므로, 복소 절댓값 (6)에 의해 다음이 성립한다. 이것을 (가)라 부른다.
$$
\begin{aligned}
|\operatorname{Re} z - \operatorname{Re} w| &\le |z - w|, \\
|\operatorname{Im} z - \operatorname{Im} w| &\le |z - w|, \\
|z - w| &\le |\operatorname{Re} z - \operatorname{Re} w| \\
&\qquad + |\operatorname{Im} z - \operatorname{Im} w|.
\end{aligned}
$$

**1의 증명.** 거리 수렴 (1)과 (2)에 $d(z_n, z) = |z_n - z|$를 넣으면 앞의 두 문장이 나온다. $z = 0$이면 $z_n - 0 = z_n$이므로 마지막 문장이 나온다.

**2의 증명.** 복소평면 (1)에 의해 $(\mathbb{C}, d)$는 거리공간이므로 [[metric-space-is-hausdorff|거리공간은 하우스도르프 공간이라는 정리]]의 (1)에 의해 $(\mathbb{C}, \mathcal{T}_d)$는 하우스도르프 공간이다. 나머지는 [[limit-unique-in-hausdorff]]의 (1)과 (2)(그 (i)–(iii))이다.

**3의 증명.** [[complex-number|복소수]]의 (1)에 의해 $z_n = (\operatorname{Re} z_n, \operatorname{Im} z_n)$이고 $z = (\operatorname{Re} z, \operatorname{Im} z)$이다. 곧 $(z_n)$은 곱집합 $\mathbb{R} \times \mathbb{R}$의 수열이고 그 $n$번째 항의 첫째 성분과 둘째 성분이 $\operatorname{Re} z_n$, $\operatorname{Im} z_n$이다. 복소평면 (1)에 의해 $d = d_E$이므로 $(\mathbb{C}, d)$와 $(\mathbb{R} \times \mathbb{R}, d_E)$는 같은 거리공간이고 같은 거리위상을 가진다. 따라서 거리 수렴 (4)를 $d_E$에 쓰면, $(z_n)$이 $(\operatorname{Re} z, \operatorname{Im} z) = z$로 수렴하는 것은 정확히 $(\operatorname{Re} z_n)$이 $\operatorname{Re} z$로 수렴하고 $(\operatorname{Im} z_n)$이 $\operatorname{Im} z$로 수렴할 때이다. 실수열에서 두 뜻의 수렴은 거리 수렴 (3)에 의해 같다.

$(z_n)$이 수렴하면 그 극한 $z$에 앞 문장을 쓴다. 거꾸로 $(\operatorname{Re} z_n)$이 실수 $p$로, $(\operatorname{Im} z_n)$이 실수 $q$로 수렴하면 $z = (p, q)$로 두자. $\operatorname{Re} z = p$, $\operatorname{Im} z = q$이므로 앞 문장에 의해 $(z_n)$은 $z$로 수렴한다. 두 경우 모두 $z = \lim_{n \to \infty} z_n$이고, [[limit-is-unique|극한의 유일성]]에 의해 $\operatorname{Re} z = \lim_{n \to \infty} \operatorname{Re} z_n$, $\operatorname{Im} z = \lim_{n \to \infty} \operatorname{Im} z_n$이다. 마지막 등식은 복소수체의 (4)의 $z = \operatorname{Re} z + (\operatorname{Im} z) i$이다.

**4의 증명.** [[bounded-sequence-in-metric-space]]의 (1)에서 $q = 0$으로 두면, $(z_n)$이 유계인 것은 정확히 모든 $n$에서 $d(z_n, 0) \le B$인 실수 $B$가 있을 때이고, 복소평면 (1)에 의해 $d(z_n, 0) = |z_n|$이다. 이것이 첫 문장의 앞 절반이다.

모든 $n$에서 $|z_n| \le B$이면, (가)를 $w = 0$에 쓴 $|\operatorname{Re} z_n| \le |z_n|$, $|\operatorname{Im} z_n| \le |z_n|$와 순서 성질 (1)의 (v)에 의해 모든 $n$에서 $|\operatorname{Re} z_n| \le B$, $|\operatorname{Im} z_n| \le B$이므로 두 실수열은 [[sequence]]의 뜻으로 유계이다. 거꾸로 모든 $n$에서 $|\operatorname{Re} z_n| \le B_1$, $|\operatorname{Im} z_n| \le B_2$이면 (가)를 $w = 0$에 쓴 $|z_n| \le |\operatorname{Re} z_n| + |\operatorname{Im} z_n|$와 순서 성질 (2)의 (iii), (1)의 (v)에 의해 모든 $n$에서 $|z_n| \le B_1 + B_2$이다.

수렴하면 유계라는 것은 [[bounded-sequence-in-metric-space]]의 (3)이다.

**5의 증명.** 첫 문장은 [[cauchy-sequence-in-metric-space]]의 정의에 $d(z_n, z_k) = |z_n - z_k|$를 넣은 것이다.

$(z_n)$이 코시 수열이라 하고 $\varepsilon$을 양의 실수라 하자. $n, k \ge M$이면 $|z_n - z_k| < \varepsilon$인 자연수 $M$이 있고, (가)와 순서 성질 (1)의 (v)에 의해 이 $n$, $k$에서 $|\operatorname{Re} z_n - \operatorname{Re} z_k| < \varepsilon$, $|\operatorname{Im} z_n - \operatorname{Im} z_k| < \varepsilon$이다. 따라서 두 실수열은 [[cauchy-sequence]]의 뜻으로 코시 수열이다. 거꾸로 두 실수열이 코시 수열이라 하자. 순서 성질 (8)에 의해 $0 < \varepsilon / 2$이므로, $n, k \ge M_1$이면 $|\operatorname{Re} z_n - \operatorname{Re} z_k| < \varepsilon / 2$인 자연수 $M_1$과 $n, k \ge M_2$이면 $|\operatorname{Im} z_n - \operatorname{Im} z_k| < \varepsilon / 2$인 자연수 $M_2$가 있다. $M = M_1 + M_2$로 두면 $M_1$, $M_2$는 양의 정수이므로([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술) (Z1)과 (Z7)에 의해 $M \ge M_1$이고 $M \ge M_2$이다. $n, k \ge M$이면 (가)와 순서 성질 (2)의 (iv)에 의해
$$
|z_n - z_k| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon
$$
이다. 따라서 $(z_n)$은 코시 수열이다. ([[cauchy-sequence-in-metric-space]]의 (2)에 의해 실수열의 두 뜻의 코시 수열은 같다.)

완비성: $(z_n)$이 코시 수열이면 앞 문단에 의해 $(\operatorname{Re} z_n)$과 $(\operatorname{Im} z_n)$이 코시 수열이고, [[cauchy-iff-convergent|코시 수열은 수렴한다는 정리]]의 (1)에 의해 두 실수열은 수렴한다. (3)에 의해 $(z_n)$은 수렴한다. 따라서 $(\mathbb{C}, d)$의 모든 코시 수열은 $\mathbb{C}$의 점으로 수렴하고, $(\mathbb{C}, d)$는 완비이다. (이것은 $d = d_E$이므로 [[completeness-of-products|두 완비 거리공간의 곱]]의 (4)와 같은 내용이다.) 마지막 문장은 [[complete-metric-space]]의 (1)이다.

**6의 증명.** 첫 단락의 함수의 존재는 [[recursion-theorem|재귀 정리]]의 (1)을 $A = \{n \in \mathbb{Z} : 0 \le n\}$, $B = \mathbb{C}$에 쓴 것이다. 자연수는 양의 정수이므로 $0$ 이상인 정수이고, $(z_n)_{n \ge 1}$은 자연수 $n$에서의 값이 $z_n$인 복소수열이다([[sequence-in-a-space|위상공간의 수열과 수렴]]의 값으로 정한 수열). (i)은 정의이고, 극한의 기호가 뜻을 갖는 것은 (2)에 의해 $(z_n)_{n \ge 1}$의 극한이 하나뿐이기 때문이다.

(ii)의 첫 문장. $(z_n)_{n \ge 1}$이 $z$로 수렴한다고 하자. (1)에 의해 $\varepsilon$마다 $n \ge M$인 모든 자연수 $n$에서 $|z_n - z| < \varepsilon$인 자연수 $M$이 있다. $M$은 $0$ 이상인 정수이고, $n \ge M$인 $0$ 이상인 정수 $n$은 $n \ge M \ge 1$이므로 자연수이다((Z1)과 [[well-ordering-principle]]의 (Z6)). 거꾸로 $\varepsilon$마다 그런 $0$ 이상인 정수 $M$이 있으면 $M + 1$은 자연수이고((Z1)), $n \ge M + 1$인 자연수 $n$은 $n \ge M$이므로((Z6), (L3)) $|z_n - z| < \varepsilon$이다. (1)에 의해 $(z_n)_{n \ge 1}$은 $z$로 수렴한다.

(ii)의 둘째 문장. 한 칸 옮긴 수열을 $(y_j)$라 하면 $y_j = z_{j-1}$이고, 그 $1$-꼬리의 $j$번째 항은 $y_{j+1} = z_j$이므로 $1$-꼬리는 $(z_n)_{n \ge 1}$과 같은 복소수열이다(위상 수열의 수열의 같음). 위상 수열 (6)에 의해 $(y_j)$가 $z$로 수렴하는 것은 정확히 $(z_n)_{n \ge 1}$이 $z$로 수렴할 때이고, 극한이 같다는 것은 (2)이다. 셋째 문장은 (3)을 $(z_n)_{n \ge 1}$에 쓴 것이다. $(z_n)_{n \ge 1}$의 실수부의 수열은 자연수 $n$에서의 값이 $\operatorname{Re} z_n$인 수열, 곧 $(\operatorname{Re} z_n)_{n \ge 1}$이다.

(iii). 모든 $n \ge 0$에서 $|z_n| \le B$이면 특히 모든 자연수 $n$에서 그러하므로 (4)에 의해 $(z_n)_{n \ge 1}$은 유계이다. 거꾸로 (4)에 의해 모든 자연수 $n$에서 $|z_n| \le B$인 $B$가 있다고 하자. 복소 절댓값 (1)에 의해 $0 \le |z_1| \le B$이고 $0 \le |z_0|$이다. $B' = B + |z_0|$로 두자. (Z5)와 (Z1)에 의해 $0$ 이상인 정수 $n$은 $n = 0$이거나 자연수이다. $n = 0$이면 $0 \le B$와 순서 성질 (2)의 (i), (K4)에 의해 $|z_0| = 0 + |z_0| \le B'$이고, $n$이 자연수이면 $0 \le |z_0|$와 같은 성질에 의해 $|z_n| \le B \le B'$이다. 따라서 $(z_n)_{n \ge 0}$은 유계이다. $(z_n)_{n \ge 0}$이 수렴하면 (i)에 의해 $(z_n)_{n \ge 1}$이 수렴하고, (4)에 의해 유계이며, 방금 본 것에 의해 $(z_n)_{n \ge 0}$은 유계이다.
:::

## 예시와 반례

:::example[n번째 항이 n⁻¹ + (1 − n⁻¹)i 인 수열]
$z_n = n^{-1} + (1 - n^{-1}) i$인 복소수열을 봅시다. [[complex-field|복소수체]]의 (4)에 의해 $\operatorname{Re} z_n = n^{-1}$, $\operatorname{Im} z_n = 1 - n^{-1}$입니다. [[basic-limits]]의 (2)에 의해 $(n^{-1})$은 $0$으로 수렴하고, 같은 항목의 (1)과 [[limit-of-sum-and-product|극한의 사칙연산]]의 (2)에 의해 $(1 - n^{-1})$은 $1 - 0 = 1$로 수렴합니다. (3)에 의해 $(z_n)$은 수렴하고
$$
\lim_{n \to \infty} z_n = 0 + 1 i = i
$$
입니다.
:::

:::example[0부터 번호가 붙은 복소수열 (n + 1)⁻¹ i]
$0$ 이상인 정수 $n$에서의 값이 $z_n = (n + 1)^{-1} i$인 0부터 번호가 붙은 복소수열을 봅시다($n + 1 \ge 1$이므로 역수가 있습니다). $z_0 = i$이고, $(z_n)_{n \ge 1}$의 실수부의 수열은 모든 항이 $0$이며 허수부의 수열은 $n$번째 항이 $(n + 1)^{-1}$입니다. 후자는 $(m^{-1})$의 $1$-꼬리이므로 [[tail-of-a-sequence|수열의 꼬리]]의 (1)과 [[basic-limits]]의 (2)에 의해 $0$으로 수렴합니다. (6)의 (ii)에 의해 $(z_n)_{n \ge 0}$은 $0$으로 수렴합니다. 첫 항 $z_0 = i$는 수렴에 영향을 주지 않지만, (6)의 (iii)의 유계를 확인할 때는 $|z_0| = 1$까지 셉니다. $n + 1 \ge 1 > 0$이므로 [[order-properties-of-reals|순서 성질]]의 (6)의 (i)에 의해 $0 < (n + 1)^{-1}$이고, [[modulus-of-complex-number|복소수의 절댓값]]의 (5)와 [[absolute-value|절댓값]]의 (1)에 의해 $|z_n| = (n + 1)^{-1} |i| = (n + 1)^{-1}$입니다. $n = 0$이면 이것은 $1$이고, $n \ge 1$이면 $0 < 1 < n + 1$이므로 순서 성질 (6)의 (ii)에 의해 $(n + 1)^{-1} < 1$입니다. 따라서 모든 $n \ge 0$에서 $|z_n| \le 1$입니다.
:::

:::counterexample[실수부의 수열만 수렴하는 예]
자연수 $n$이 짝수이면 $z_n = i$, 홀수이면 $z_n = -i$인 복소수열을 봅시다. 실수부의 수열은 모든 항이 $0$이라 [[basic-limits]]의 (1)에 의해 수렴합니다. 그러나 허수부의 수열은 $n$이 짝수이면 $1$, 홀수이면 $-1$이므로 같은 항목의 (3)에 의해 발산합니다. (3)에 의해 $(z_n)$은 발산합니다. 모든 항에서 $|z_n| = 1$이므로 (4)에 의해 $(z_n)$은 유계입니다. 그래서 유계인 복소수열이 수렴하지 않을 수 있고, 실수부만으로는 수렴을 판정할 수 없습니다.
:::

## 확인 질문

:::check[$n$번째 항이 $n^{-1} + n i$인 복소수열은 수렴하는가?]
아닙니다. 수렴한다면 (4)에 의해 유계이고, 같은 (4)에 의해 허수부의 수열 $(n)$이 [[sequence]]의 뜻으로 유계여야 합니다. 그러나 모든 실수 $B$에 대하여 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $B < n$인 자연수 $n$이 있고 [[absolute-value|절댓값]]의 (6)에 의해 $n \le |n|$이므로 $|n| \le B$가 모든 $n$에서 성립하지는 않습니다. 실수부의 수열 $(n^{-1})$은 수렴하지만 그것으로는 모자랍니다.
:::

:::check[모든 항이 실수인 복소수인 복소수열 $(z_n)$이 $z$로 수렴하면 $z$도 실수인 복소수인가?]
그렇습니다. 모든 $n$에서 $\operatorname{Im} z_n = 0$이므로 허수부의 수열은 상수 수열이고 [[basic-limits]]의 (1)에 의해 $0$으로 수렴합니다. (3)에 의해 $(\operatorname{Im} z_n)$은 $\operatorname{Im} z$로도 수렴하므로 [[limit-is-unique|극한의 유일성]]에 의해 $\operatorname{Im} z = 0$이고, [[complex-field|복소수체]]의 (3)에 의해 $z$는 실수인 복소수입니다.
:::
