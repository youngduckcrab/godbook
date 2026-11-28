---
title: 거의 영인 함수와 거의 어디서나
title_en: Null Functions and Almost Everywhere
aliases: [거의 영인 함수, 거의 어디서나, 거의 어디서나 같다, 영집합의 세 꼴, 디리클레 함수의 르베그 적분, null function, almost everywhere, a.e.]
kind: theorem
field: measure-theory
msc: ["28A25", "26A42"]
level: undergrad
summary: 르베그 적분가능하고 절댓값의 적분이 0 인 함수를 거의 영인 함수, 성립하지 않는 점 전체가 영집합인 성질을 거의 어디서나 성립한다고 하고, 영집합 밖에서 0 인 함수의 표현, 거의 영인 함수가 0 이 아닌 점 전체가 영집합이라는 것과 그 영 덮개열의 식, 영집합의 세 꼴의 일치, 거의 어디서나 같은 함수의 적분, 표현이 절대수렴하지 않는 점, 0 이상인 함수의 적분이 양수일 조건, 디리클레 함수의 르베그 적분을 증명한다.
requires: [open-sentence, order-properties-of-reals, archimedean-property, absolute-value, absolute-convergence, linearity-and-order-of-finite-sums, sum-of-a-series, geometric-series, rational-and-irrational-numbers, interval, real-valued-function, dirichlet-function, riemann-integral, indicator-function, pairing-of-natural-numbers, extended-nonnegative-reals, series-in-extended-nonnegative-reals, nonnegative-double-series, step-function, null-set-of-reals, lebesgue-integrable-function, properties-of-the-lebesgue-integral]
proof: full
sources:
  - ref: blackstone-mikusinski-daniell-integral
    loc: "4절 Definition 4.2, Theorem 4.3 (p.9–10); 5절 Definition 5.1, Theorem 5.2, Definition 5.3, Theorem 5.4 (p.11), Corollary 5.5 (p.12), Theorem 5.9 (p.12–13), Corollary 5.10 (p.13)"
    checked: original
    note: "출처 Definition 4.2(p.9)는 ∫|f| = 0 인 U 의 원소를 'null function' 이라 부른다. 이 항목은 이것을 '거의 영인 함수'라 부른다(이 사이트의 '영함수'는 값이 모두 0 인 함수이다). Theorem 4.3(p.9–10)은 거의 영인 함수 f 와 |g| ≤ |f| 인 g 에 대하여 g 가 적분가능하고 거의 영인 함수라는 것이고, 증명은 g ≃ |f| + |f| + ⋯ 라는 표현을 쓴다. 그 표현의 항은 계단함수가 아니라 적분가능한 함수이다. 출처는 4절 앞(p.9)에서 그 뒤로 완비 다니엘 공간을 가정한다고 적으므로 이 표현에서 곧바로 g ∈ U 를 얻는다. 계단함수에서 만든 공간 U* 의 완비성은 Theorem 3.9–3.12(p.8–9)이고, Theorem 3.9 의 증명(p.8)이 항마다 계단함수의 표현을 고른다. 이 항목의 (3)은 같은 결론을 (1)과 (2)로 얻는다: (2)는 |f| 의 한 표현에서 j 마다 (1/2)^j-작은 표현을 식으로 만들고 짝짓기 함수로 늘어놓아, 고르는 곳 없이 {f ≠ 0} 의 영 덮개열을 내놓는다. Definition 5.1(p.11)은 지시함수가 거의 영인 함수인 집합을 'null set' 이라 하며, 이것은 이 항목의 (4)의 (ii)이다. 이 강의는 영집합을 null-set-of-reals 의 덮개열로 정의하고, (4)가 두 정의(와 계단함수의 급수로 쓴 셋째 꼴)가 같다는 것을 증명한다. Theorem 5.2(p.11)는 null set 의 부분집합과 가산 합집합이 null set 이라는 것이고, 합집합의 증명은 Corollary 3.11(p.9)을 쓰는데 그 증명이 Theorem 3.9(p.8)를 거친다. 이 항목은 가산 합집합을 다루지 않는다. 영 덮개열의 족이 주어진 꼴은 null-set-of-reals 의 (4)에 있다. Definition 5.3(p.11)은 f(x) ≠ g(x) 인 x 전체가 null set 일 때 f = g a.e. 라 한다. 이 항목의 '거의 어디서나'는 열린 문장에 대한 같은 꼴의 정의이다. Theorem 5.4(p.11)는 f = g a.e. 인 것과 ∫|f − g| = 0 인 것이 같다는 것이고 이 항목의 (5)의 (ii)이다. 출처의 증명은 |f − g| ≃ h + h + ⋯, h ≃ |f − g| + |f − g| + ⋯ (h 는 차이 나는 점의 지시함수)로 적분가능한 함수를 항으로 하는 표현을 쓴다. 이 항목은 (1)–(3)으로 증명한다. Corollary 5.5(p.12)의 (a)는 이 항목의 (3)의 첫 문장이다. 출처는 Corollary 5.5 뒤 문단(p.12)에서 적분을 구하려면 영집합 밖의 값만 알면 된다고 적는다. (5)의 (i)이 그 내용이고, 이 항목은 영 덮개열이 주어졌을 때 새 표현을 식으로 적는다. Theorem 5.9(p.12–13)와 Corollary 5.10(p.13)은 표현의 급수가 거의 어디서나 f 로 수렴한다는 것이고 이 항목의 (6)이다. 출처의 증명은 절대수렴하지 않는 점 전체의 지시함수 g 의 표현 g ≃ f_1 − f_1 + f_2 − f_2 + ⋯ 를 쓴다. 이 항목의 (1)의 표현 alt(X, −X) 는 같은 모양이다. (6)은 null-set-of-reals 의 (6)의 (i)로 증명한다."
  - ref: kanovei-katz-positive-function-vanishing-integral
    loc: "2절 Definition 2.1, 2.2 (p.3); 3절 첫 문단과 Theorem 3.1 (p.4)"
    checked: original
    note: "Kanovei 와 Katz 는 Definition 2.1(p.3)에서 유계 집합의 외측도를 열린구간의 가산 덮개의 길이의 합의 하한으로, 르베그 가측성을 그 외측도로 정의하고, Definition 2.2(p.3)에서 유계 구간 I 위의 함수의 르베그 적분을 위 수준 집합 {x ∈ I : f(x) > y} 의 측도를 y 의 함수로 본 것의 리만 적분으로 정의한다. Theorem 3.1(p.4)에서 그들은 ZF 에서 [0, 1] 이 가산집합 A_n 들의 가산 합집합이면(그들은 페퍼만–레비 모형을 예로 든다) [0, 1] 위의 양의 실함수로서 그 정의의 르베그 적분이 0 인 것이 있다고 적는다. 그들은 3절 첫 문단(p.4)에서 ZFC 에서 동치인 여러 정의가 ZF 에서는 동치가 아니게 될 수 있다고 적는다. 이 항목의 르베그 적분은 계단함수의 급수로 정의한 것(lebesgue-integrable-function)이어서 그들의 정의와 다르고, 이 항목의 (7)은 이 항목의 정의에 대한 진술이다."
  - ref: lebl-basic-analysis-2
    loc: "10.4.3 소절, Exercise 10.4.13 (p.122); 10.5.2 소절, Proposition 10.5.6 (p.125)"
    checked: original
    note: "출처 10.5.2 소절(p.125)은 측도가 0 인 집합 밖에서 성립하는 성질을 'almost everywhere' 성립한다고 하고, Proposition 10.5.6(p.125)의 (ii)와 (v)에서 리만 적분가능한 함수가 거의 어디서나 같으면 적분이 같고 거의 어디서나 f ≤ g 이면 ∫f ≤ ∫g 라고 진술하며 증명을 연습문제로 둔다. 이 항목의 (5)의 (i)과 (iii)은 같은 결론을 이 항목의 르베그 적분에 대해 진술한 것이고, 영집합은 null-set-of-reals 의 것이다. 출처 Exercise 10.4.13(p.122)은 닫힌 직사각형 위의 0 이상인 리만 적분가능 함수의 적분이 0 이면 측도가 0 인 집합 밖에서 f = 0 임을 보이라고 하고, 그 결과로 '모든 점에서 f(x) > 0 이면 ∫f > 0' 이 나온다고 적는다. 이 항목의 (7)은 같은 결론을 이 항목의 르베그 적분에 대해 진술한 것이다."
  - ref: lebl-basic-analysis
    loc: "5.2.4 소절, Proposition 5.2.10 (p.197)"
    checked: original
    note: "출처 Proposition 5.2.10(p.197)은 리만 적분가능한 함수의 값을 유한 개의 점에서 바꾸어도 리만 적분가능하고 적분이 같다는 것이다. 확인 질문 '닫힌구간 0 부터 1 까지의 지시함수의 르베그 적분은?'은 같은 결론(한 점의 값을 바꾸어도 적분이 같다)을 이 항목의 (5)의 (i)로 르베그 적분에 대해 보인 것이다."
  - ref: sandoval-romero-measure-and-integration
    loc: "5.4절, Example 5.31 (p.147)"
    checked: original
    note: "출처 Example 5.31(p.147)은 [0, 1] 의 유리수 전체의 지시함수가 보렐 가측이고 르베그 측도 λ 에 대한 적분이 0 이며 리만 적분가능하지 않다고 적는다. 이 항목의 (8)은 같은 대상(디리클레 함수)을 다루되, 측도 λ 없이 ℚ 가 영집합이라는 것과 (1)로 르베그 적분가능함을 보인다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(출처 Lemma 3.3 증명의 ∧ 오식을 원문으로 대조, (7) 의 a < b 경계, 기록의 검색어). 독립 검토 없음."
added: 2026-11-28
---

:::statement
르베그 적분가능, 표현, 르베그 적분 $\int_{\mathbb{R}}$, 번갈아 늘어놓은 열 $\operatorname{alt}$, $0$으로 늘인 함수와 $\int_{[a, b]}$는 [[lebesgue-integrable-function|르베그 적분가능한 함수와 그 적분]]의 것이고, 절댓값 표현 $\operatorname{abs}$와 작은 표현 $\operatorname{small}_\varepsilon$은 [[properties-of-the-lebesgue-integral|르베그 적분의 선형성·단조성·절댓값]]의 것이다. 영집합, 영 덮개열, 계단함수열의 표준 영 덮개열은 [[null-set-of-reals|ℝ 의 영집합]]의 것이고, 계단함수와 그 적분은 [[step-function|계단함수와 그 적분]], 지시함수 $\chi_A$는 [[indicator-function]], $[0, \infty]$의 원소열의 합은 [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]], 짝짓기 함수의 역함수의 성분 $\kappa_1$, $\kappa_2$는 [[pairing-of-natural-numbers|ℕ × ℕ 과 ℕ 의 전단사]]의 것이다. 열린 문장은 [[open-sentence]], $[a, b]$ 위의 디리클레 함수는 [[dirichlet-function]]의 것이다.

**거의 영인 함수.** $f : \mathbb{R} \to \mathbb{R}$가 **거의 영인 함수**(null function)인 것은 정확히 $f$가 르베그 적분가능하고 $\int_{\mathbb{R}} |f| = 0$일 때이다. 이 이름은 값이 모두 $0$인 함수인 영함수와 다른 말이다.

**거의 어디서나.** 실수 $x$에 관한 열린 문장 $P(x)$가 **거의 어디서나**(almost everywhere) 성립한다는 것은 정확히 $P(x)$가 거짓인 실수 $x$ 전체의 집합이 영집합일 때이다. 특히 $f, g : \mathbb{R} \to \mathbb{R}$에 대하여 "거의 어디서나 $f = g$"는 $\{x \in \mathbb{R} : f(x) \ne g(x)\}$가 영집합이라는 뜻이다.

**두 칸씩 지우는 열.** 모든 자연수 $n$에서 $c_n \le d_n$인 실수열 $(c_n)$, $(d_n)$에 대하여, $n$번째 항이 $\chi_{[c_n, d_n)}$인 계단함수의 열을 $X$라 할 때 $\operatorname{alt}(X, -X)$, 곧 $2n - 1$번째 항이 $\chi_{[c_n, d_n)}$이고 $2n$번째 항이 $-\chi_{[c_n, d_n)}$인 계단함수의 열을 $\bigl((c_n), (d_n)\bigr)$로 만든 **지우는 열**이라 한다.

다음이 성립한다.

1. (영집합 밖에서 $0$인 함수) $Z \subseteq \mathbb{R}$이고 $\bigl((c_n), (d_n)\bigr)$이 $Z$의 영 덮개열이라 하고, 그것으로 만든 지우는 열을 $\Xi$라 하자.
   - (i) $h : \mathbb{R} \to \mathbb{R}$가 $Z$ 밖의 모든 실수 $x$에서 $h(x) = 0$이면 $\Xi$는 $h$의 표현이다. 따라서 $h$는 르베그 적분가능하고 $\int_{\mathbb{R}} h = 0$이며, $h$는 거의 영인 함수이다.
   - (ii) $f : \mathbb{R} \to \mathbb{R}$가 $\Phi$를 표현으로 갖고, $g : \mathbb{R} \to \mathbb{R}$가 $Z$ 밖의 모든 실수 $x$에서 $g(x) = f(x)$이면 $\operatorname{alt}(\Phi, \Xi)$는 $g$의 표현이다. 따라서 $g$는 르베그 적분가능하고 $\int_{\mathbb{R}} g = \int_{\mathbb{R}} f$이다.
2. (거의 영인 함수가 $0$이 아닌 점) $f$가 거의 영인 함수이고 $\Phi$가 $f$의 표현이라 하자. 자연수 $j$마다 $\Theta^{j} = (\theta^{j}_n)_n = \operatorname{small}_{(1/2)^j}\bigl(\operatorname{abs}(\Phi)\bigr)$로 두고, 자연수 $m$마다 $\rho_m = \bigl|\theta^{\kappa_1(m)}_{\kappa_2(m)}\bigr|$로 둔다. 그러면 $(\rho_m)$은 모든 항이 $0$ 이상인 계단함수의 열이고 $\sum_{m=1}^{\infty} \int_{\mathbb{R}} \rho_m \le 1$이며,
   $$
   \begin{aligned} &\{x \in \mathbb{R} : f(x) \ne 0\} \\ &\quad \subseteq \Bigl\{x \in \mathbb{R} : \sum_{m=1}^{\infty} \rho_m(x) = \infty\Bigr\} \end{aligned}
   $$
   이다(오른쪽 합은 $[0, \infty]$의 합이다). 따라서 $(\rho_m)$의 표준 영 덮개열은 $\{x \in \mathbb{R} : f(x) \ne 0\}$의 영 덮개열이고, 이 집합은 영집합이다. 이 영 덮개열은 $\Phi$만으로 정해진다.
3. (거의 영인 함수의 판정) $f : \mathbb{R} \to \mathbb{R}$가 거의 영인 함수인 것은 정확히 거의 어디서나 $f = 0$일 때, 곧 $\{x \in \mathbb{R} : f(x) \ne 0\}$이 영집합일 때이다. 따라서 $f$가 거의 영인 함수이고 $h : \mathbb{R} \to \mathbb{R}$가 모든 실수 $x$에서 $|h(x)| \le |f(x)|$이면 $h$도 거의 영인 함수이다.
4. (영집합의 세 꼴) $A \subseteq \mathbb{R}$에 대하여 다음 세 명제는 서로 동치이다.
   - (i) $A$는 영집합이다.
   - (ii) $\chi_A$는 르베그 적분가능하고 $\int_{\mathbb{R}} \chi_A = 0$이다.
   - (iii) 모든 항이 $0$ 이상인 계단함수의 열 $(g_n)$으로서 $n$번째 항이 $\int_{\mathbb{R}} g_n$인 수열의 급수가 수렴하고, $A$의 모든 원소 $x$에서 $n$번째 항이 $g_n(x)$인 수열의 급수가 발산하는 것이 있다.
5. (거의 어디서나 같은 함수)
   - (i) $f$가 르베그 적분가능하고 $g : \mathbb{R} \to \mathbb{R}$가 거의 어디서나 $g = f$이면, $g$는 르베그 적분가능하고 $\int_{\mathbb{R}} g = \int_{\mathbb{R}} f$이다.
   - (ii) $f$, $g$가 르베그 적분가능하면, 거의 어디서나 $f = g$인 것은 정확히 $\int_{\mathbb{R}} |f - g| = 0$일 때이다.
   - (iii) $f$, $g$가 르베그 적분가능하고 거의 어디서나 $f(x) \le g(x)$이면 $\int_{\mathbb{R}} f \le \int_{\mathbb{R}} g$이다.
6. (표현이 절대수렴하지 않는 점) $\Phi = (\varphi_n)$이 $f$의 표현이면, $n$번째 항이 $\varphi_n(x)$인 수열의 급수가 절대수렴하지 않는 실수 $x$ 전체의 집합 $N_\Phi$는 영집합이고, $(|\varphi_n|)$의 표준 영 덮개열이 그 영 덮개열이다. $N_\Phi$ 밖의 모든 $x$에서 $f(x) = \sum_{n=1}^{\infty} \varphi_n(x)$이다.
7. ($0$ 이상인 함수의 적분) $f$가 르베그 적분가능하고 모든 실수 $x$에서 $0 \le f(x)$라 하자.
   - (i) $\int_{\mathbb{R}} f = 0$인 것은 정확히 $\{x \in \mathbb{R} : f(x) > 0\}$이 영집합일 때이다.
   - (ii) $\{x \in \mathbb{R} : f(x) > 0\}$이 영집합이 아니면 $\int_{\mathbb{R}} f > 0$이다. 특히 $a < b$인 실수 $a$, $b$에 대하여 $[a, b)$의 모든 점에서 $f(x) > 0$이면 $\int_{\mathbb{R}} f > 0$이고, 모든 실수 $x$에서 $f(x) > 0$이면 $\int_{\mathbb{R}} f > 0$이다.
8. (디리클레 함수) $\chi_{\mathbb{Q}}$는 거의 영인 함수이고 $\int_{\mathbb{R}} \chi_{\mathbb{Q}} = 0$이다. $a < b$인 실수 $a$, $b$에 대하여 $[a, b]$ 위의 디리클레 함수 $D$는 $[a, b]$에서 르베그 적분가능하고 $\int_{[a, b]} D = 0$이지만, 리만 적분가능하지 않다.
:::

:::english
Lebesgue integrability, representations, the Lebesgue integral $\int_{\mathbb{R}}$, alternating sequences $\operatorname{alt}$, extension by $0$, and $\int_{[a, b]}$ are as in the entry on Lebesgue integrable functions, and the absolute-value representation $\operatorname{abs}$ and the small representation $\operatorname{small}_\varepsilon$ are as in the entry on properties of the Lebesgue integral. Null sets, null cover sequences, and the standard null cover sequence of a sequence of step functions are as in the entry on null sets of real numbers; step functions and their integrals, the indicator function $\chi_A$, sums of sequences in $[0, \infty]$, and the components $\kappa_1$, $\kappa_2$ of the inverse of the pairing function are as in the corresponding entries. Open sentences and the Dirichlet function on $[a, b]$ are as in the corresponding entries.

**Null functions.** A function $f : \mathbb{R} \to \mathbb{R}$ is a **null function** precisely when $f$ is Lebesgue integrable and $\int_{\mathbb{R}} |f| = 0$. This name is different from the zero function, whose values are all $0$.

**Almost everywhere.** An open sentence $P(x)$ about a real number $x$ holds **almost everywhere** precisely when the set of all real $x$ for which $P(x)$ is false is a null set. In particular, for $f, g : \mathbb{R} \to \mathbb{R}$, "$f = g$ almost everywhere" means that $\{x \in \mathbb{R} : f(x) \ne g(x)\}$ is a null set.

**Cancelling sequences.** For real sequences $(c_n)$, $(d_n)$ with $c_n \le d_n$ for every natural number $n$, let $X$ be the sequence of step functions whose $n$th term is $\chi_{[c_n, d_n)}$. The sequence $\operatorname{alt}(X, -X)$, that is, the sequence of step functions whose $(2n - 1)$th term is $\chi_{[c_n, d_n)}$ and whose $2n$th term is $-\chi_{[c_n, d_n)}$, is called the **cancelling sequence** made from $\bigl((c_n), (d_n)\bigr)$.

The following hold.

1. (Functions vanishing outside a null set) Let $Z \subseteq \mathbb{R}$, let $\bigl((c_n), (d_n)\bigr)$ be a null cover sequence of $Z$, and let $\Xi$ be the cancelling sequence made from it.
   - (i) If $h : \mathbb{R} \to \mathbb{R}$ satisfies $h(x) = 0$ for every real $x$ outside $Z$, then $\Xi$ is a representation of $h$. Hence $h$ is Lebesgue integrable, $\int_{\mathbb{R}} h = 0$, and $h$ is a null function.
   - (ii) If $f : \mathbb{R} \to \mathbb{R}$ has a representation $\Phi$ and $g : \mathbb{R} \to \mathbb{R}$ satisfies $g(x) = f(x)$ for every real $x$ outside $Z$, then $\operatorname{alt}(\Phi, \Xi)$ is a representation of $g$. Hence $g$ is Lebesgue integrable and $\int_{\mathbb{R}} g = \int_{\mathbb{R}} f$.
2. (Points where a null function is nonzero) Let $f$ be a null function and $\Phi$ a representation of $f$. For each natural number $j$ put $\Theta^{j} = (\theta^{j}_n)_n = \operatorname{small}_{(1/2)^j}\bigl(\operatorname{abs}(\Phi)\bigr)$, and for each natural number $m$ put $\rho_m = \bigl|\theta^{\kappa_1(m)}_{\kappa_2(m)}\bigr|$. Then $(\rho_m)$ is a sequence of step functions with all terms nonnegative, $\sum_{m=1}^{\infty} \int_{\mathbb{R}} \rho_m \le 1$, and
   $$
   \begin{aligned} &\{x \in \mathbb{R} : f(x) \ne 0\} \\ &\quad \subseteq \Bigl\{x \in \mathbb{R} : \sum_{m=1}^{\infty} \rho_m(x) = \infty\Bigr\} \end{aligned}
   $$
   (the sum on the right is the sum in $[0, \infty]$). Hence the standard null cover sequence of $(\rho_m)$ is a null cover sequence of $\{x \in \mathbb{R} : f(x) \ne 0\}$, and this set is a null set. This null cover sequence is determined by $\Phi$ alone.
3. (Criterion for null functions) A function $f : \mathbb{R} \to \mathbb{R}$ is a null function precisely when $f = 0$ almost everywhere, that is, when $\{x \in \mathbb{R} : f(x) \ne 0\}$ is a null set. Hence, if $f$ is a null function and $h : \mathbb{R} \to \mathbb{R}$ satisfies $|h(x)| \le |f(x)|$ for every real $x$, then $h$ is also a null function.
4. (Three forms of null sets) For $A \subseteq \mathbb{R}$ the following three statements are equivalent.
   - (i) $A$ is a null set.
   - (ii) $\chi_A$ is Lebesgue integrable and $\int_{\mathbb{R}} \chi_A = 0$.
   - (iii) There is a sequence of step functions $(g_n)$ with all terms nonnegative such that the series of the sequence whose $n$th term is $\int_{\mathbb{R}} g_n$ converges and, at every element $x$ of $A$, the series of the sequence whose $n$th term is $g_n(x)$ diverges.
5. (Functions equal almost everywhere)
   - (i) If $f$ is Lebesgue integrable and $g : \mathbb{R} \to \mathbb{R}$ satisfies $g = f$ almost everywhere, then $g$ is Lebesgue integrable and $\int_{\mathbb{R}} g = \int_{\mathbb{R}} f$.
   - (ii) If $f$ and $g$ are Lebesgue integrable, then $f = g$ almost everywhere precisely when $\int_{\mathbb{R}} |f - g| = 0$.
   - (iii) If $f$ and $g$ are Lebesgue integrable and $f(x) \le g(x)$ almost everywhere, then $\int_{\mathbb{R}} f \le \int_{\mathbb{R}} g$.
6. (Points where a representation does not converge absolutely) If $\Phi = (\varphi_n)$ is a representation of $f$, then the set $N_\Phi$ of all real $x$ at which the series of the sequence whose $n$th term is $\varphi_n(x)$ does not converge absolutely is a null set, and the standard null cover sequence of $(|\varphi_n|)$ is a null cover sequence of it. For every $x$ outside $N_\Phi$, $f(x) = \sum_{n=1}^{\infty} \varphi_n(x)$.
7. (Integrals of nonnegative functions) Let $f$ be Lebesgue integrable with $0 \le f(x)$ for every real $x$.
   - (i) $\int_{\mathbb{R}} f = 0$ precisely when $\{x \in \mathbb{R} : f(x) > 0\}$ is a null set.
   - (ii) If $\{x \in \mathbb{R} : f(x) > 0\}$ is not a null set, then $\int_{\mathbb{R}} f > 0$. In particular, for reals $a < b$, if $f(x) > 0$ at every point of $[a, b)$, then $\int_{\mathbb{R}} f > 0$, and if $f(x) > 0$ for every real $x$, then $\int_{\mathbb{R}} f > 0$.
8. (The Dirichlet function) $\chi_{\mathbb{Q}}$ is a null function and $\int_{\mathbb{R}} \chi_{\mathbb{Q}} = 0$. For reals $a < b$, the Dirichlet function $D$ on $[a, b]$ is Lebesgue integrable on $[a, b]$ with $\int_{[a, b]} D = 0$, but it is not Riemann integrable.
:::

## 직관

영집합은 길이가 없다고 해도 될 만큼 작은 집합입니다. 이 항목은 르베그 적분이 그런 집합 위의 값에 신경 쓰지 않는다는 것을 여러 꼴로 보입니다. 시험 점수의 평균을 낼 때 학생 한 명의 점수를 바꾸면 평균이 달라지지만, 무한히 많은 학생 가운데 "비율로 따지면 없는 것과 같은" 학생들의 점수는 바꿔도 평균이 그대로인 셈입니다. 비유에서 "비율로 따지면 없는 것과 같다"가 영집합에, 평균이 적분에 해당합니다. 다만 영집합은 비율이 아니라 총길이가 유한한 칸의 열이 끝없이 여러 번 덮는다는 것으로 정의됩니다.

(1)은 가장 직접적인 꼴입니다. 영집합 밖에서 $0$인 함수는 영 덮개열의 칸을 하나 더하고 하나 빼는 열을 표현으로 갖습니다. 영집합의 점은 끝없이 여러 칸에 들어 그 점에서의 급수가 절대수렴하지 않으므로, 조건 B가 그 점의 값을 묻지 않습니다. (2)는 거꾸로 가는 길입니다. $\int_{\mathbb{R}} |f| = 0$이면, $|f|$의 표현을 적분의 절댓값의 합이 $1/2$, $1/4$, $1/8$, …보다 작게 줄인 것들을 모두 한 줄로 늘어놓은 열을 생각합니다. $f$가 $0$이 아닌 점에서 그 열의 절댓값을 모두 더하면 $\infty$가 되고, 그래서 그 열에서 7단원의 표준 영 덮개열이 식으로 나옵니다.

(7)의 (ii)는 당연해 보이지만 정의에서 바로 나오지는 않습니다. 함수가 모든 점에서 양수이면, $f(x) > 0$인 점 전체는 $\mathbb{R}$이고 이것은 영집합이 아니므로 적분이 양수입니다. 이 사이트의 증명은 (2)가 만드는 영 덮개열과 7단원의 "길이가 양수인 구간은 영집합이 아니다"에 기댑니다.

## 증명

:::idea
(1)은 지우는 열이 절대수렴하는 점이 영집합 밖에 있다는 것이다. (2)는 작은 표현들을 짝짓기 함수로 한 줄로 늘어놓고, $f(x) \ne 0$인 점에서는 $j$마다 $|f(x)|$ 이상의 수가 더해져 합이 $\infty$가 된다는 것을 보인다. 나머지는 (1)과 (2)를 함수의 차, 지시함수, 표현의 절댓값에 쓴 것이다.
:::

:::hint
$x$가 $\limsup_{n \to \infty} [c_n, d_n)$에 들지 않으면 $x$는 유한 개의 칸에만 든다.
:::

:::hint
(2)에서 $\sum_{m=1}^{\infty} \rho_m(x)$가 유한하면 $j$마다 $\Theta^{j}$의 급수가 $x$에서 절대수렴하고 그 합은 $|f(x)|$이다. $j$에 대해 더하면 $|f(x)|$를 끝없이 더한 것이 유한하다.
:::

:::proof
아래에서 "앞 항목"은 [[lebesgue-integrable-function|르베그 적분가능한 함수와 그 적분]], "성질 항목"은 [[properties-of-the-lebesgue-integral|르베그 적분의 선형성·단조성·절댓값]], "영집합 항목"은 [[null-set-of-reals|ℝ 의 영집합]], "계단함수 항목"은 [[step-function|계단함수와 그 적분]], "확장된 합 항목"은 [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]], "합의 기호 항목"은 [[sum-of-a-series|급수의 합의 기호]]의 번호이다. 앞 항목의 (6)에 의해 르베그 적분은 어느 표현으로 계산해도 된다.

먼저 지우는 열에 관한 사실을 보인다.

- (가) $(c_n)$, $(d_n)$이 모든 $n$에서 $c_n \le d_n$이고 $n$번째 항이 $d_n - c_n$인 수열의 급수가 수렴한다고 하자. 그것으로 만든 지우는 열 $\Xi$는 조건 A를 만족하고 그 적분의 급수의 합은 $0$이다. 실수 $x$에서 $\Xi$의 급수가 절대수렴하면 $x \notin \limsup_{n \to \infty} [c_n, d_n)$이고, 그때 그 급수의 합은 $0$이다.

계단함수 항목의 (4)의 (iii)에 의해 $\int_{\mathbb{R}} |\pm\chi_{[c_n, d_n)}| = d_n - c_n$이므로, 앞 항목의 (1)의 (ii)에 의해 조건 A가 성립하고, 그 (1)의 (iii)에 의해 적분의 급수의 합은 $\sum_{n=1}^{\infty} (d_n - c_n) - \sum_{n=1}^{\infty} (d_n - c_n) = 0$이다. $x$에서 $\Xi$의 급수가 절대수렴하면 앞 항목의 (1)의 (ii)에 의해 $(\chi_{[c_n, d_n)}(x))$의 급수가 수렴하고, 그 항은 $0$ 이상인 실수이므로 확장된 합 항목의 (3)의 (i)에 의해 $[0, \infty]$의 합 $\sum_{n=1}^{\infty} \chi_{[c_n, d_n)}(x)$가 실수이다. 영집합 항목의 (6)의 (ii)에 의해 그 합이 $\infty$인 점 전체가 $\limsup_{n \to \infty} [c_n, d_n)$이므로 $x$는 거기에 들지 않는다. 합은 앞 항목의 (1)의 (iii)에 의해 $s - s = 0$($s$는 $(\chi_{[c_n, d_n)}(x))$의 급수의 합)이다.

**(1)** 영 덮개열의 총길이는 $[0, \infty]$의 합으로 유한하므로 확장된 합 항목의 (3)의 (i)에 의해 $(d_n - c_n)$의 급수는 수렴하고 (가)를 쓸 수 있다. 영 덮개열의 정의에 의해 $Z \subseteq \limsup_{n \to \infty} [c_n, d_n)$이다.

(i) 조건 A는 (가)이다. 조건 B: $x$에서 $\Xi$의 급수가 절대수렴하면 (가)에 의해 $x \notin \limsup_{n \to \infty} [c_n, d_n)$이므로 $x \notin Z$이고, 가정에 의해 $h(x) = 0$이며, (가)에 의해 급수의 합은 $0 = h(x)$이다. 따라서 $\Xi$는 $h$의 표현이고 $\int_{\mathbb{R}} h = 0$이다. $Z$ 밖에서 $|h(x)| = 0$이므로 같은 논법으로 $\Xi$는 $|h|$의 표현이고 $\int_{\mathbb{R}} |h| = 0$이다.

(ii) 앞 항목의 (1)의 (ii)와 두 조건 A에 의해 $\operatorname{alt}(\Phi, \Xi)$는 조건 A를 만족한다. 조건 B: $x$에서 그 급수가 절대수렴하면 앞 항목의 (1)의 (ii)에 의해 $\Phi$와 $\Xi$의 급수가 모두 절대수렴한다. $\Phi$의 조건 B에 의해 $\Phi$의 급수의 합은 $f(x)$이고, (가)에 의해 $x \notin Z$이므로 $f(x) = g(x)$이며 $\Xi$의 급수의 합은 $0$이다. 앞 항목의 (1)의 (iii)에 의해 합은 $f(x) + 0 = g(x)$이다. 적분은 같은 (1)의 (iii)에 의해 $\int_{\mathbb{R}} f + 0$이다.

**(2)** 성질 항목의 (3)의 (i)에 의해 $\operatorname{abs}(\Phi)$는 $|f|$의 표현이고, 그 (5)에 의해 각 $\Theta^{j}$는 $|f|$의 표현으로서 $\sum_{n=1}^{\infty} \int_{\mathbb{R}} |\theta^{j}_n| < \int_{\mathbb{R}} |f| + (1/2)^j = (1/2)^j$이다. 작은 표현은 표현과 양수로 정해지므로 $\theta^{j}_n$은 $(j, n)$에 대한 이미 정해진 계단함수이고, $\rho_m$은 $0$ 이상인 계단함수이다(계단함수 항목의 (5)).

*적분의 합.* $a_{j,n} = \int_{\mathbb{R}} |\theta^{j}_n|$로 두면 $\int_{\mathbb{R}} \rho_m = a_{\kappa_1(m), \kappa_2(m)}$이다. 각 $j$에서 $(a_{j,n})_n$의 급수는 수렴하므로 확장된 합 항목의 (3)의 (i)에 의해 $[0, \infty]$의 합 $\sum_{n=1}^{\infty} a_{j,n}$은 같은 실수이고 $(1/2)^j$보다 작다. [[nonnegative-double-series|0 이상인 이중급수]]의 (2), 확장된 합 항목의 (5), [[geometric-series|등비급수]]의 (2)와 확장된 합 항목의 (3)에 의해
$$
\begin{aligned} \sum_{m=1}^{\infty} \int_{\mathbb{R}} \rho_m &= \sum_{j=1}^{\infty} \sum_{n=1}^{\infty} a_{j,n} \\ &\le \sum_{j=1}^{\infty} \left(\frac{1}{2}\right)^j = 1 \end{aligned}
$$
이다. 따라서 확장된 합 항목의 (3)의 (i)에 의해 $n$번째 항이 $\int_{\mathbb{R}} \rho_m$인 수열의 급수는 수렴하고 그 합은 $1$ 이하이다.

*포함.* 실수 $x$에서 $[0, \infty]$의 합 $R = \sum_{m=1}^{\infty} \rho_m(x)$가 $\infty$가 아니라고 하자. $b_{j,n} = |\theta^{j}_n(x)|$로 두면 $\rho_m(x) = b_{\kappa_1(m), \kappa_2(m)}$이므로 0 이상인 이중급수의 (2)에 의해 $R = \sum_{j=1}^{\infty} T_j$이다. 여기서 $T_j = \sum_{n=1}^{\infty} b_{j,n}$이다. $R$이 실수이므로 확장된 합 항목의 (2)에 의해 모든 $T_j$는 실수이고, 그 (3)의 (i)에 의해 각 $j$에서 $(\theta^{j}_n(x))_n$의 급수가 절대수렴한다. $\Theta^{j}$는 $|f|$의 표현이므로 조건 B에 의해 그 합은 $|f(x)|$이고, [[absolute-convergence|절대수렴]]의 (2)에 의해 $|f(x)| \le T_j$이다. 그래서 모든 자연수 $J$에서, 확장된 합 항목의 (2)와 (1)의 (iii)에 의해
$$
J\,|f(x)| = \sum_{j=1}^{J} |f(x)| \le \sum_{j=1}^{J} T_j \le R
$$
이다(왼쪽 등식은 [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 (2)). $|f(x)| > 0$이면 [[archimedean-property|아르키메데스 성질]]의 (2)에 의해 $R < J|f(x)|$인 자연수 $J$가 있어 모순이다. 따라서 $|f(x)| = 0$이고 [[absolute-value]]의 (2)에 의해 $f(x) = 0$이다. 대우를 취하면 $f(x) \ne 0$인 점에서는 $R = \infty$이다.

*영 덮개열.* $(\rho_m)$은 영집합 항목의 (6)의 가정을 만족하므로(위에서 $C = \sum_{m=1}^{\infty} \int_{\mathbb{R}} \rho_m \le 1 < \infty$), 그 (6)의 (i)에 의해 $(\rho_m)$의 표준 영 덮개열은 $E = \{x : \sum_{m=1}^{\infty} \rho_m(x) = \infty\}$의 영 덮개열이다. 영집합 항목의 (2)에 의해 그것은 $E$의 부분집합 $\{x : f(x) \ne 0\}$의 영 덮개열이다. $(\rho_m)$은 $\Phi$로 정해지고 표준 영 덮개열은 $(\rho_m)$으로 정해지므로, 이 영 덮개열은 $\Phi$만으로 정해진다.

**(3)** $f$가 거의 영인 함수이면 $f$의 표현이 있고, (2)에 의해 $\{x : f(x) \ne 0\}$은 영집합이다. 거꾸로 $Z = \{x : f(x) \ne 0\}$이 영집합이면 $Z$의 영 덮개열이 있고, $Z$ 밖에서 $f(x) = 0$이므로 (1)의 (i)에 의해 $f$는 거의 영인 함수이다. 마지막 문장: $h(x) \ne 0$이면 $0 < |h(x)| \le |f(x)|$이므로 $f(x) \ne 0$이다. 그래서 $\{x : h(x) \ne 0\} \subseteq \{x : f(x) \ne 0\}$이고, 앞 문장과 영집합 항목의 (2)에 의해 왼쪽은 영집합이며, 앞 문장에 의해 $h$는 거의 영인 함수이다.

**(4)** [[indicator-function|지시함수]]의 (1)에 의해 $\{x : \chi_A(x) \ne 0\} = A$이고 모든 $x$에서 $0 \le \chi_A(x)$이므로 $|\chi_A| = \chi_A$이다.

(i) ⇒ (ii): (3)에 의해 $\chi_A$는 거의 영인 함수이므로 르베그 적분가능하고 $\int_{\mathbb{R}} \chi_A = \int_{\mathbb{R}} |\chi_A| = 0$이다. (ii) ⇒ (i): $\int_{\mathbb{R}} |\chi_A| = \int_{\mathbb{R}} \chi_A = 0$이므로 $\chi_A$는 거의 영인 함수이고, (3)에 의해 $A$는 영집합이다.

(i) ⇔ (iii): 항이 $0$ 이상인 실수이므로 확장된 합 항목의 (3)에 의해, (iii)의 두 조건은 $[0, \infty]$의 합으로 $\sum_{n=1}^{\infty} \int_{\mathbb{R}} g_n < \infty$이고 $A$의 모든 원소에서 $\sum_{n=1}^{\infty} g_n(x) = \infty$라는 것과 같다. 영집합 항목의 (6)의 (ii)의 마지막 문장에 의해 이것은 $A$가 영집합이라는 것과 같다.

**(5)** (i) $Z = \{x : g(x) \ne f(x)\}$의 영 덮개열이 있으므로 (1)의 (ii)를 쓴다.

(ii) 성질 항목의 (1), (3)의 (ii)에 의해 $f - g$와 $|f - g|$는 르베그 적분가능하다. $\{x : f(x) \ne g(x)\} = \{x : (f - g)(x) \ne 0\}$이므로, (3)에 의해 거의 어디서나 $f = g$인 것은 정확히 $f - g$가 거의 영인 함수일 때, 곧 $\int_{\mathbb{R}} |f - g| = 0$일 때이다.

(iii) 성질 항목의 (4)에 의해 $\max\{f, g\}$는 르베그 적분가능하다. $\max\{f(x), g(x)\} \ne g(x)$이면 $g(x) < f(x)$이므로([[absolute-value]]의 최대의 정의) $\{x : \max\{f(x), g(x)\} \ne g(x)\} \subseteq \{x : g(x) < f(x)\}$이다. 오른쪽은 $f(x) \le g(x)$가 거짓인 점 전체이므로([[order-properties-of-reals|실수의 순서의 성질]]의 (1)의 (iii)) 가정에 의해 영집합이고, 영집합 항목의 (2)에 의해 왼쪽도 영집합이다. (i)에 의해 $\int_{\mathbb{R}} g = \int_{\mathbb{R}} \max\{f, g\}$이다. 모든 $x$에서 $f(x) \le \max\{f(x), g(x)\}$이므로(absolute-value 의 (10)) 성질 항목의 (2)에 의해 $\int_{\mathbb{R}} f \le \int_{\mathbb{R}} \max\{f, g\} = \int_{\mathbb{R}} g$이다.

**(6)** 계단함수 항목의 (5)에 의해 $|\varphi_n|$은 $0$ 이상인 계단함수이고, 조건 A와 확장된 합 항목의 (3)의 (i)에 의해 $[0, \infty]$의 합 $\sum_{n=1}^{\infty} \int_{\mathbb{R}} |\varphi_n|$은 실수이다. 그 (3)에 의해 $x \in N_\Phi$인 것은 정확히 $\sum_{n=1}^{\infty} |\varphi_n(x)| = \infty$일 때이므로, 영집합 항목의 (6)의 (i)에 의해 $N_\Phi$는 영집합이고 $(|\varphi_n|)$의 표준 영 덮개열이 그 영 덮개열이다. 마지막 문장은 조건 B이다.

**(7)** $|f| = f$이다(absolute-value 의 (1)). 또 모든 $x$에서 $0 \le f(x)$이므로 $\{x : f(x) \ne 0\} = \{x : f(x) > 0\}$이다.

(i) $\int_{\mathbb{R}} f = 0$이면 $\int_{\mathbb{R}} |f| = 0$이어서 $f$는 거의 영인 함수이고 (3)에 의해 그 집합은 영집합이다. 거꾸로 그 집합이 영집합이면 (3)에 의해 $f$는 거의 영인 함수이고 $\int_{\mathbb{R}} f = \int_{\mathbb{R}} |f| = 0$이다.

(ii) 성질 항목의 (2)에 의해 $0 \le \int_{\mathbb{R}} f$이고, (i)에 의해 $\int_{\mathbb{R}} f \ne 0$이므로 $\int_{\mathbb{R}} f > 0$이다. $[a, b)$의 모든 점에서 $f(x) > 0$이면 그 집합은 $[a, b)$를 포함하므로 영집합 항목의 (7)에 의해 영집합이 아니다. 모든 $x$에서 $f(x) > 0$이면 그 집합은 $\mathbb{R}$이고 같은 (7)에 의해 영집합이 아니다.

**(8)** 영집합 항목의 (3)에 의해 $\mathbb{Q}$는 영집합이고, 지시함수의 (1)에 의해 $\{x : \chi_{\mathbb{Q}}(x) \ne 0\} = \mathbb{Q}$이므로 (3)에 의해 $\chi_{\mathbb{Q}}$는 거의 영인 함수이다. $\chi_{\mathbb{Q}} \ge 0$이므로 $\int_{\mathbb{R}} \chi_{\mathbb{Q}} = \int_{\mathbb{R}} |\chi_{\mathbb{Q}}| = 0$이다. $D$를 $0$으로 늘인 함수 $\hat{D}$는 $x \in [a, b]$이고 유리수일 때만 $1$이고 그 밖에서 $0$이다([[dirichlet-function]]의 정의). 그래서 $\{x : \hat{D}(x) \ne 0\} \subseteq \mathbb{Q}$이고, 영집합 항목의 (2)와 (3)에 의해 $\hat{D}$는 거의 영인 함수이며 $\int_{[a, b]} D = \int_{\mathbb{R}} \hat{D} = \int_{\mathbb{R}} |\hat{D}| = 0$이다. $D$가 리만 적분가능하지 않다는 것은 [[riemann-integral|리만 적분]]의 (5)이다. $\blacksquare$
:::

## 예시와 반례

:::example[정수에서만 0 이 아닌 유계가 아닌 함수]
$h(x)$를 $x$가 정수이면 $x$, 아니면 $0$으로 정합시다. $h$는 유계가 아니지만, $h(x) \ne 0$인 점은 $0$이 아닌 정수뿐이고 $\mathbb{Z}$는 영집합 항목의 (3)에 의해 영집합이므로, (3)에 의해 $h$는 거의 영인 함수이고 $\int_{\mathbb{R}} h = 0$입니다. $\mathbb{Z}$의 영 덮개열 하나로 만든 지우는 열이 (1)의 (i)에 의해 $h$의 표현입니다. $h$의 값이 얼마나 크든, 정수 위의 값은 적분에 들어가지 않습니다.
:::

:::counterexample[적분이 0 이지만 거의 영인 함수가 아닌 예]
$f = \chi_{[0, 1)} - \chi_{[1, 2)}$는 $\int_{\mathbb{R}} f = 1 - 1 = 0$이지만 $\int_{\mathbb{R}} |f| = \int_{\mathbb{R}} \chi_{[0, 2)} = 2$이므로 거의 영인 함수가 아닙니다. 실제로 $f(x) \ne 0$인 점 전체는 $[0, 2)$이고 영집합 항목의 (7)에 의해 영집합이 아닙니다. 거의 영인 함수의 정의가 $\int_{\mathbb{R}} f$가 아니라 $\int_{\mathbb{R}} |f|$를 쓰는 까닭이 이것입니다. 함수가 $0$ 이상이면 두 적분이 같으므로 (7)의 (i)처럼 $\int_{\mathbb{R}} f$로 판정할 수 있습니다.
:::

## 확인 질문

:::check[닫힌구간 0 부터 1 까지의 지시함수의 르베그 적분은?]
$1$입니다. $\chi_{[0, 1]}$과 $\chi_{[0, 1)}$은 점 $1$에서만 다르고, 한 점으로 된 집합은 영집합 항목의 (3)에 의해 영집합이므로 거의 어디서나 같습니다. $\chi_{[0, 1)}$은 계단함수이고 그 적분은 $1$이므로, (5)의 (i)에 의해 $\chi_{[0, 1]}$도 르베그 적분가능하고 적분이 $1$입니다.
:::

:::check[모든 점에서 0 이상이고 적분이 0 인 르베그 적분가능 함수가 3 이상 4 미만인 모든 점에서 양수일 수 있는가?]
없습니다. 그런 함수 $f$에서 $\{x : f(x) > 0\}$은 $[3, 4)$를 포함하므로 영집합 항목의 (7)에 의해 영집합이 아니고, (7)의 (ii)에 의해 $\int_{\mathbb{R}} f > 0$이어야 합니다. 이것은 적분이 $0$이라는 것과 어긋납니다.
:::
