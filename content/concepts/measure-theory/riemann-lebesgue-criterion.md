---
title: 리만 적분가능성의 르베그 판정
title_en: Lebesgue's Criterion for Riemann Integrability
aliases: [르베그 판정, 르베그의 적분가능성 판정, 르베그–비탈리 정리, 아래 계단함수, 위 계단함수, 균등 분할 영 덮개열, Lebesgue criterion for Riemann integrability, Lebesgue–Vitali theorem]
kind: theorem
field: measure-theory
msc: ["26A42", "28A05"]
level: undergrad
summary: 닫힌구간 위의 유계함수가 리만 적분가능한 것은 정확히 불연속점 전체가 영집합일 때이다. 2ⁿ등분 균등 분할의 작은 구간 위의 하한과 상한으로 만든 아래·위 계단함수의 성질과, 적분가능한 함수만으로 정해지는 영 덮개열과 그 밖의 점에서 아래·위 계단함수가 함숫값으로 수렴한다는 것을 함께 진술한다.
requires: [set, subset, set-operations, family-of-sets, function, natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, power-of-a-real-number, sequence, limit-of-sequence, geometric-sequence-limit, geometric-series, finite-sum-of-reals, linearity-and-order-of-finite-sums, splitting-and-shifting-finite-sums, interval, real-valued-function, bounded-function, upper-bound-and-supremum, supremum-of-function-values, continuous-function, partition-of-an-interval, uniform-partition, darboux-sums, riemann-integral, integrability-criterion, dirichlet-function, standard-topology-on-reals, open-and-closed-sets-of-reals, compact-space, closed-interval-is-compact, sequence-of-sets, indicator-function, pairing-of-natural-numbers, extended-nonnegative-reals, series-in-extended-nonnegative-reals, nonnegative-double-series, step-function, null-set-of-reals, cantor-set-is-null, oscillation-of-a-function, uniform-partitions-suffice]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: "10.4.2 소절, Theorem 10.4.3 과 그 증명 (p.118–120); 10.4.1 소절, 진동의 예 (p.117); 10.4.3 소절, Exercise 10.4.3, 10.4.5 (p.121)"
    checked: original
    note: "출처 Theorem 10.4.3(p.118)은 ℝⁿ 의 닫힌 직사각형 위의 유계함수가 리만 적분가능한 것은 정확히 불연속점의 집합이 measure zero 일 때라는 것이고, (1)은 그 1차원 판이다. 출처의 measure zero 는 외측도가 0 인 것이고, 이 항목의 영집합은 null-set-of-reals 의 영 덮개열로 정의한 것이다. 출처는 이 정리를 'Riemann–Lebesgue or Lebesgue–Vitali' 라 부르고 각주에서 Riemann–Lebesgue 라는 이름이 1권 Exercise 5.2.18 같은 결과를 가리키는 일이 많다고 적는다. 이 항목의 제목은 그 이름을 쓰지 않는다. 출처의 첫째 방향의 증명(p.119)은 진동이 ε 이상인 점의 집합 S_ε 가 콤팩트라는 것으로 유한 개의 열린 직사각형으로 덮고, 나머지 T 의 점마다 'for each x ∈ T, there is a δ > 0 … there exists a small closed rectangle T_x' 로 닫힌 직사각형을 잡은 뒤 그 끝점들로 분할을 만든다. 이 항목은 점마다 잡는 대신, 그보다 조금 큰 닫힌구간 위의 진동이 ε 보다 작은 열린구간 전체의 집합족과 S_ε 를 덮는 열린구간들을 함께 [a, b] 의 덮개로 쓰고, compact-space 의 (1)의 유한 합집합의 보조정리로 '충분히 잘게 나눈 균등 분할에서 모든 작은 구간이 좋다'는 성질을 얻는다. 그래서 S_ε 의 콤팩트성과 끝점으로 만든 분할을 쓰지 않는다. 출처의 둘째 방향의 증명(p.120)은 k 와 ε 마다 'find a partition P' 로 분할을 잡고, 작은 직사각형 가운데 안쪽이 S_{1/k} 와 만나는 것은 M_j − m_j ≥ 1/k 라는 것과 경계들의 집합이 measure zero 라는 것을 쓴 뒤, 가산 개의 영집합의 합집합으로 마친다. 이 항목은 2ⁿ등분 균등 분할과 가장 작은 번호 n_p 로 (3)의 영 덮개열을 식으로 만들고, 균등 분할의 점 전체를 null-set-of-reals 의 (3)으로 덮는다. (3)의 'M − m 이 (1/2)^p 이상인 작은 구간'을 모으는 것은 출처의 M_j − m_j ≥ 1/k 인 작은 직사각형을 모으는 것과 같은 발상이다. 반례 '디리클레 함수의 불연속점'은 출처 p.117 의 'Dirichlet function … o(f, x) = 1 for every x' 와 같은 대상이다. 예시 '칸토어의 삼분 집합의 지시함수'는 Exercise 10.4.3(p.121, 닫힌 영집합 밖에서 0 인 유계함수의 적분이 있음을 보이고 그 값을 구하라)과 같은 발상이고, Exercise 10.4.5 의 (a)(닫힌 영집합 밖에서 연속인 유계함수는 적분가능)와도 이어진다."
  - ref: sandoval-romero-measure-and-integration
    loc: "5.4절 Theorem 5.32 (p.148), Lemma 5.36 과 그 증명 (p.150–152), Theorem 5.32 의 증명 (p.152); 1장 The problem of integration, Proposition 1.6 (p.13)"
    checked: original
    note: "출처 Theorem 5.32(p.148)는 0 이상인 유계함수 f : [a, b] → ℝ 가 리만 적분가능한 것은 정확히 f 가 λ-거의 어디서나 연속일 때라는 것이고(λ 는 르베그 측도), 그 증명(p.152)은 Lemma 5.36 의 하포락선과 상포락선의 λ-적분으로 한다. 이 강의는 르베그 측도를 만들지 않으므로 이 꼴을 옮기지 않았다. Lemma 5.36 의 증명(p.150)은 P_k ⊂ P_{k+1} 이고 ∥P_k∥ → 0 인 분할열의 열린 작은 구간 위의 하한·상한을 값으로 하고 분할점에서는 포락선의 값을 갖는 함수 ξ_k, Ξ_k 를 만들어 그 λ-적분이 하합·상합이라고 적는다. (2)의 아래·위 계단함수와 그 (iv)는 같은 발상이다. 이 항목은 닫힌 작은 구간 위의 하한·상한을 [x_{n,i−1}, x_{n,i}) 위의 값으로 쓰고 분할열을 2ⁿ등분 균등 분할로 정한다. 그 증명(p.151–152)은 어느 분할의 점도 아닌 점과 어떤 분할의 점을 두 경우로 나눠 다루는데, (1)의 증명이 균등 분할의 점 전체를 따로 덮는 것과 같은 발상이다. 반례 '디리클레 함수의 불연속점'의 함수는 출처 Proposition 1.6(p.13)이 리만 적분가능하지 않은 유계함수의 예로 드는 디리클레 함수와 같은 대상이다."
  - ref: lebl-basic-analysis
    loc: "3.2절(3.2.3 소절) Example 3.2.11 (p.126); 5.1절(5.1.1 소절) Example 5.1.4 (p.183); 5.1절(5.1.2 소절) Example 5.1.12 (p.186); 5.2절(5.2.3 소절) Theorem 5.2.9 (p.196)"
    checked: original
    note: "출처 Theorem 5.2.9(p.196)는 유계이고 불연속점이 유한 개인 함수가 리만 적분가능하다는 것이고, (1)의 한 방향은 유한집합이 영집합이므로(null-set-of-reals 의 (3)) 그 결론을 포함한다. 반례 '디리클레 함수의 불연속점'의 함수는 출처 Example 3.2.11(p.126, 디리클레 함수는 모든 점에서 불연속)과 Example 5.1.4(p.183, 리만 적분가능하지 않다)의 대상이다. 예시 '한 점에서 뛰는 함수의 아래·위 계단함수'와 확인 질문 '$[0, 1]$ 위에서 $x < \\tfrac{1}{2}$이면 $0$, $x \\ge \\tfrac{1}{2}$이면 $1$인 함수의 $Z_f$와 $D_f$는?'의 함수는 Example 5.1.12(p.186, [0, 2] 에서 1 의 왼쪽은 1, 1 에서 1/2, 오른쪽은 0 인 함수의 적분)와 같은 종류의 한 번 뛰는 함수이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(판정의 ⇐ 방향: 조건으로 정한 집합족 𝒦 와 덮개, 셈의 부등식을 통독). 독립 검토 없음."
added: 2026-11-28
---

:::statement
$[a, b]$의 분할과 그 점, 작은 구간, 길이 $\Delta x_i$는 [[partition-of-an-interval]]의 것이고, $n$등분 균등 분할 $P_n$과 $h_n = (b - a)/n$은 [[uniform-partition]]의 것이다. 다르부 합 $L(P, f)$, $U(P, f)$와 $m_i$, $M_i$는 [[darboux-sums]]의 것이고, 리만 적분가능과 $\int_a^b f$는 [[riemann-integral]]의 것이며, 연속과 불연속은 [[continuous-function]]의 것이다. $[c, d)$($c \le d$)와 그 길이, 계단함수와 그 계단 꼴, 적분 $\int_{\mathbb{R}}$은 [[step-function|계단함수와 그 적분]]의 것이고, $\mathbb{R}$ 위의 지시함수 $\chi_A$는 [[indicator-function]]의 것이다. 영집합과 영 덮개열, 총길이는 [[null-set-of-reals|ℝ 의 영집합]]의 것이고, 집합열의 상극한 $\limsup$은 [[sequence-of-sets|집합열]]의 것이며, 짝짓기 함수 $\pi$와 $\kappa_1$, $\kappa_2$는 [[pairing-of-natural-numbers|ℕ × ℕ 과 ℕ 의 전단사]]의 것이다. $[0, \infty]$의 원소열의 합 $\sum_{l=1}^{\infty}$은 [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]]의 것이고, 거듭제곱 $2^n$, $\left(\tfrac{1}{2}\right)^p$는 [[power-of-a-real-number]]의 것이며, 수열과 그 수렴은 [[sequence]], [[limit-of-sequence]]의 것이다. 아래에서 $a$, $b$는 $a < b$인 실수이고 $f : [a, b] \to \mathbb{R}$는 유계이다.

**불연속점의 집합.** $f$가 불연속인 $[a, b]$의 점 전체의 집합을 $D_f$로 쓴다. 곧 $D_f = \{x \in [a, b] : f\text{는 } x\text{에서 불연속}\}$이다.

**아래·위 계단함수.** 자연수 $n$에 대하여 $[a, b]$의 $2^n$등분 균등 분할 $P_{2^n}$의 점을 $x_{n,0}, \dots, x_{n,2^n}$으로 쓴다. 곧 $0 \le i \le 2^n$인 정수 $i$에서 $x_{n,i} = a + i(b - a)/2^n$이다. $1 \le i \le 2^n$인 정수 $i$마다 $P_{2^n}$과 $f$의 $m_i$, $M_i$를 $m_{n,i}$, $M_{n,i}$로 쓴다. 곧
$$
\begin{gathered}
m_{n,i} = \inf f([x_{n,i-1}, x_{n,i}]), \\
M_{n,i} = \sup f([x_{n,i-1}, x_{n,i}])
\end{gathered}
$$
이다. 실수 $x$에서의 값이
$$
\begin{gathered}
s_n(x) = \sum_{i=1}^{2^n} m_{n,i}\, \chi_{[x_{n,i-1}, x_{n,i})}(x), \\
t_n(x) = \sum_{i=1}^{2^n} M_{n,i}\, \chi_{[x_{n,i-1}, x_{n,i})}(x)
\end{gathered}
$$
인 함수 $s_n, t_n : \mathbb{R} \to \mathbb{R}$를 $f$의 $n$번째 **아래 계단함수**와 **위 계단함수**라 한다. 또 $b$와, $[a, b)$의 원소 $x$ 가운데 "어떤 양수 $r$이 있어 모든 자연수 $n$에서 $r \le t_n(x) - s_n(x)$"를 만족하는 것 전체로 이루어진 집합을 $Z_f$로 둔다. 곧 $Z_f$는 $\{b\}$와 그런 $x$ 전체의 집합의 합집합이다.

**균등 분할 영 덮개열.** $f$가 리만 적분가능하다고 하자. 자연수 $p$마다, $U(P_{2^n}, f) - L(P_{2^n}, f) < \left(\tfrac{1}{4}\right)^p$인 자연수 $n$ 가운데 가장 작은 것을 $n_p$라 한다([[uniform-partitions-suffice|균등 분할로 충분하다는 정리]]의 (6)의 (ii)에 의해 정해진다). 자연수 $p$, $i$에 대하여 $N = 2^{n_p}$로 두고 실수 $c_{p,i}$, $d_{p,i}$를 다음과 같이 정한다.

- $i \le N$이고 $M_{n_p,i} - m_{n_p,i} \ge \left(\tfrac{1}{2}\right)^p$이면 $c_{p,i} = x_{n_p,i-1}$, $d_{p,i} = x_{n_p,i}$이다.
- $i \le N$이고 $M_{n_p,i} - m_{n_p,i} < \left(\tfrac{1}{2}\right)^p$이면 $c_{p,i} = d_{p,i} = a$이다.
- $i = N + 1$이면 $c_{p,i} = b$, $d_{p,i} = b + \left(\tfrac{1}{2}\right)^p$이다.
- $i > N + 1$이면 $c_{p,i} = d_{p,i} = a$이다.

자연수 $l$마다 $c_l = c_{\kappa_1(l), \kappa_2(l)}$, $d_l = d_{\kappa_1(l), \kappa_2(l)}$로 정한 실수열의 쌍 $\bigl((c_l), (d_l)\bigr)$을 $f$의 **균등 분할 영 덮개열**이라 한다.

다음이 성립한다.

1. (판정) $f$가 리만 적분가능한 것은 정확히 $D_f$가 영집합일 때이다.
2. (아래·위 계단함수) 자연수 $n$에 대하여 다음이 성립한다.
   - (i) $s_n$, $t_n$은 계단함수이다. $s_n$은 점 $x_{n,0}, \dots, x_{n,2^n}$과 값 $m_{n,1}, \dots, m_{n,2^n}$의 계단 꼴을, $t_n$은 같은 점과 값 $M_{n,1}, \dots, M_{n,2^n}$의 계단 꼴을 갖는다. 특히 $x < a$이거나 $b \le x$인 실수 $x$에서 $s_n(x) = t_n(x) = 0$이다.
   - (ii) $a \le x < b$이면 $x_{n,i-1} \le x < x_{n,i}$인 정수 $i$($1 \le i \le 2^n$)가 정확히 하나 있고, $s_n(x) = m_{n,i} \le f(x) \le M_{n,i} = t_n(x)$이다.
   - (iii) 실수 $B$가 $[a, b]$의 모든 $x$에서 $|f(x)| \le B$를 만족하면 모든 실수 $x$에서 $|s_n(x)| \le B$이고 $|t_n(x)| \le B$이다.
   - (iv) $\int_{\mathbb{R}} s_n = L(P_{2^n}, f)$, $\int_{\mathbb{R}} t_n = U(P_{2^n}, f)$이고 $\int_{\mathbb{R}} (t_n - s_n) = U(P_{2^n}, f) - L(P_{2^n}, f)$이다.
   - (v) 자연수 $k$가 $k \le n$이면 모든 실수 $x$에서 $s_k(x) \le s_n(x) \le t_n(x) \le t_k(x)$이고, 따라서 $0 \le t_n(x) - s_n(x) \le t_k(x) - s_k(x)$이다.
   - (vi) $f$가 리만 적분가능하면 $n$번째 항이 $\int_{\mathbb{R}} s_n$인 수열과 $\int_{\mathbb{R}} t_n$인 수열은 $\int_a^b f$로 수렴한다.
   - (vii) $x \in [a, b]$이고 $x \notin Z_f$이면 $n$번째 항이 $t_n(x) - s_n(x)$인 수열은 $0$으로 수렴하고, $n$번째 항이 $s_n(x)$인 수열과 $t_n(x)$인 수열은 $f(x)$로 수렴한다.
3. (균등 분할 영 덮개열) $f$가 리만 적분가능하다고 하자.
   - (i) $n_p$, $c_{p,i}$, $d_{p,i}$, $c_l$, $d_l$은 $a$, $b$, $f$만으로 정해진다. 모든 자연수 $p$, $i$에서 $c_{p,i} \le d_{p,i}$이고, 각 $p$에서 $\sum_{i=1}^{\infty} (d_{p,i} - c_{p,i}) < 2\left(\tfrac{1}{2}\right)^p$이며, $\sum_{l=1}^{\infty} (d_l - c_l) \le 2$이다.
   - (ii) $Z_f \subseteq \limsup_{l \to \infty} [c_l, d_l)$이다. 따라서 $f$의 균등 분할 영 덮개열은 총길이가 $2$ 이하인 $Z_f$의 영 덮개열이고, $Z_f$는 영집합이다.
   - (iii) $x \in [a, b]$이고 $x \notin \limsup_{l \to \infty} [c_l, d_l)$이면 $n$번째 항이 $s_n(x)$인 수열과 $t_n(x)$인 수열은 $f(x)$로 수렴한다.
:::

:::english
Partitions of $[a, b]$ with their points, subintervals and lengths $\Delta x_i$ are as in the entry on partitions of an interval, and the uniform partition $P_n$ into $n$ parts with $h_n = (b - a)/n$ is as in the entry on uniform partitions. The Darboux sums $L(P, f)$, $U(P, f)$ and $m_i$, $M_i$ are as in the entry on Darboux sums, Riemann integrability and $\int_a^b f$ as in the entry on the Riemann integral, and continuity and discontinuity as in the entry on continuous functions. The set $[c, d)$ ($c \le d$) and its length, step functions with their step forms, and the integral $\int_{\mathbb{R}}$ are as in the entry on step functions, and indicator functions $\chi_A$ on $\mathbb{R}$ as in the entry on indicator functions. Null sets, null cover sequences and total length are as in the entry on null sets of real numbers, the limit superior $\limsup$ of a sequence of sets as in the entry on sequences of sets, and the pairing function $\pi$ with $\kappa_1$, $\kappa_2$ as in the corresponding entry. Sums $\sum_{l=1}^{\infty}$ of sequences in $[0, \infty]$, the powers $2^n$, $\left(\tfrac{1}{2}\right)^p$, sequences and their convergence are as defined earlier. Below, $a < b$ are real numbers and $f : [a, b] \to \mathbb{R}$ is bounded.

**The set of discontinuities.** We write $D_f$ for the set of all points of $[a, b]$ at which $f$ is discontinuous, that is, $D_f = \{x \in [a, b] : f \text{ is discontinuous at } x\}$.

**Lower and upper step functions.** For a natural number $n$, write $x_{n,0}, \dots, x_{n,2^n}$ for the points of the uniform partition $P_{2^n}$ of $[a, b]$ into $2^n$ parts; that is, $x_{n,i} = a + i(b - a)/2^n$ for integers $0 \le i \le 2^n$. For each integer $1 \le i \le 2^n$ write $m_{n,i}$, $M_{n,i}$ for the $m_i$, $M_i$ of $P_{2^n}$ and $f$; that is,
$$
\begin{gathered}
m_{n,i} = \inf f([x_{n,i-1}, x_{n,i}]), \\
M_{n,i} = \sup f([x_{n,i-1}, x_{n,i}]).
\end{gathered}
$$
The functions $s_n, t_n : \mathbb{R} \to \mathbb{R}$ whose values at a real number $x$ are
$$
\begin{gathered}
s_n(x) = \sum_{i=1}^{2^n} m_{n,i}\, \chi_{[x_{n,i-1}, x_{n,i})}(x), \\
t_n(x) = \sum_{i=1}^{2^n} M_{n,i}\, \chi_{[x_{n,i-1}, x_{n,i})}(x)
\end{gathered}
$$
are called the $n$th **lower step function** and **upper step function** of $f$. We also let $Z_f$ be the set consisting of $b$ and of all $x \in [a, b)$ such that there is a positive number $r$ with $r \le t_n(x) - s_n(x)$ for every natural number $n$; that is, $Z_f$ is the union of $\{b\}$ and the set of all such $x$.

**The uniform-partition null cover sequence.** Suppose $f$ is Riemann integrable. For each natural number $p$, let $n_p$ be the least natural number $n$ with $U(P_{2^n}, f) - L(P_{2^n}, f) < \left(\tfrac{1}{4}\right)^p$ (it exists by (6)(ii) of the theorem that uniform partitions suffice). For natural numbers $p$, $i$ put $N = 2^{n_p}$ and define real numbers $c_{p,i}$, $d_{p,i}$ as follows.

- If $i \le N$ and $M_{n_p,i} - m_{n_p,i} \ge \left(\tfrac{1}{2}\right)^p$, then $c_{p,i} = x_{n_p,i-1}$ and $d_{p,i} = x_{n_p,i}$.
- If $i \le N$ and $M_{n_p,i} - m_{n_p,i} < \left(\tfrac{1}{2}\right)^p$, then $c_{p,i} = d_{p,i} = a$.
- If $i = N + 1$, then $c_{p,i} = b$ and $d_{p,i} = b + \left(\tfrac{1}{2}\right)^p$.
- If $i > N + 1$, then $c_{p,i} = d_{p,i} = a$.

The pair of real sequences $\bigl((c_l), (d_l)\bigr)$ defined by $c_l = c_{\kappa_1(l), \kappa_2(l)}$, $d_l = d_{\kappa_1(l), \kappa_2(l)}$ for natural numbers $l$ is called the **uniform-partition null cover sequence** of $f$.

The following hold.

1. (Criterion) $f$ is Riemann integrable if and only if $D_f$ is a null set.
2. (Lower and upper step functions) For every natural number $n$:
   - (i) $s_n$ and $t_n$ are step functions. $s_n$ has the step form with points $x_{n,0}, \dots, x_{n,2^n}$ and values $m_{n,1}, \dots, m_{n,2^n}$, and $t_n$ has the step form with the same points and values $M_{n,1}, \dots, M_{n,2^n}$. In particular $s_n(x) = t_n(x) = 0$ for every real $x$ with $x < a$ or $b \le x$.
   - (ii) If $a \le x < b$, there is exactly one integer $i$ ($1 \le i \le 2^n$) with $x_{n,i-1} \le x < x_{n,i}$, and $s_n(x) = m_{n,i} \le f(x) \le M_{n,i} = t_n(x)$.
   - (iii) If a real number $B$ satisfies $|f(x)| \le B$ for all $x \in [a, b]$, then $|s_n(x)| \le B$ and $|t_n(x)| \le B$ for every real $x$.
   - (iv) $\int_{\mathbb{R}} s_n = L(P_{2^n}, f)$, $\int_{\mathbb{R}} t_n = U(P_{2^n}, f)$, and $\int_{\mathbb{R}} (t_n - s_n) = U(P_{2^n}, f) - L(P_{2^n}, f)$.
   - (v) If $k \le n$ is a natural number, then $s_k(x) \le s_n(x) \le t_n(x) \le t_k(x)$ for every real $x$; hence $0 \le t_n(x) - s_n(x) \le t_k(x) - s_k(x)$.
   - (vi) If $f$ is Riemann integrable, the sequences whose $n$th terms are $\int_{\mathbb{R}} s_n$ and $\int_{\mathbb{R}} t_n$ converge to $\int_a^b f$.
   - (vii) If $x \in [a, b]$ and $x \notin Z_f$, then the sequence whose $n$th term is $t_n(x) - s_n(x)$ converges to $0$, and the sequences whose $n$th terms are $s_n(x)$ and $t_n(x)$ converge to $f(x)$.
3. (The uniform-partition null cover sequence) Suppose $f$ is Riemann integrable.
   - (i) $n_p$, $c_{p,i}$, $d_{p,i}$, $c_l$, $d_l$ are determined by $a$, $b$, $f$ alone. For all natural numbers $p$, $i$ we have $c_{p,i} \le d_{p,i}$; for each $p$, $\sum_{i=1}^{\infty} (d_{p,i} - c_{p,i}) < 2\left(\tfrac{1}{2}\right)^p$; and $\sum_{l=1}^{\infty} (d_l - c_l) \le 2$.
   - (ii) $Z_f \subseteq \limsup_{l \to \infty} [c_l, d_l)$. Hence the uniform-partition null cover sequence of $f$ is a null cover sequence of $Z_f$ with total length at most $2$, and $Z_f$ is a null set.
   - (iii) If $x \in [a, b]$ and $x \notin \limsup_{l \to \infty} [c_l, d_l)$, then the sequences whose $n$th terms are $s_n(x)$ and $t_n(x)$ converge to $f(x)$.
:::

## 직관

다르부 상합과 하합의 차는 작은 구간마다 "그 구간 위에서 함숫값이 흔들리는 폭"에 구간의 길이를 곱해 더한 것입니다. 곡선 아래의 넓이를 막대로 잴 때 오차가 크게 생기는 곳이 함수가 크게 흔들리는 막대라는 것과 같습니다. 그래서 차를 작게 하려면 흔들림이 큰 곳을 길이의 합이 작은 구간들 안에 가둘 수 있어야 하고, 흔들림이 끝까지 남는 곳은 불연속점입니다. 이 정리는 그 직관을 정확히 말합니다. 불연속점 전체가 영집합인 것이 적분가능성과 같습니다.

불연속점이 영집합이면 적분가능하다는 쪽은 이렇습니다. 양수 $\varepsilon$을 하나 정하면 진동이 $\varepsilon$ 이상인 점들은 불연속점이므로 영집합을 이루고, 길이의 합이 $\varepsilon$보다 작은 열린구간들로 덮입니다. 나머지 점은 진동이 $\varepsilon$보다 작아서, 그 점을 품고 조금 넓힌 닫힌구간 위에서 흔들림이 $\varepsilon$보다 작은 열린구간이 있습니다. 이런 열린구간 전체와 앞의 열린구간들이 $[a, b]$를 덮으므로, 하이네–보렐 정리로 유한 개만 남기면 균등 분할을 충분히 잘게 했을 때 모든 작은 구간이 "흔들림이 작거나, 앞의 짧은 구간들 근처에 있다"가 됩니다. 흔들림의 조건을 열린구간이 아니라 조금 넓힌 닫힌구간 위에 두는 까닭은, 균등 분할의 작은 구간이 그 열린구간과 만나도 열린구간 밖으로 조금 삐져나올 수 있기 때문입니다. 작은 구간이 짧으면 넓힌 닫힌구간 안에는 듭니다.

적분가능하면 불연속점이 영집합이라는 쪽은 $2^n$등분 균등 분할로 합니다. 상합과 하합의 차가 $\left(\tfrac{1}{4}\right)^p$보다 작은 가장 작은 $n$을 잡으면, 흔들림이 $\left(\tfrac{1}{2}\right)^p$ 이상인 작은 구간의 길이의 합은 $\left(\tfrac{1}{2}\right)^p$보다 작습니다. 분할점이 아닌 불연속점은 $\left(\tfrac{1}{2}\right)^p$가 그 점의 진동 이하인 모든 $p$의 단계에서 그런 구간의 안쪽에 들고, 분할점은 번호를 붙여 늘어놓을 수 있으므로 영집합입니다. 이렇게 하면 단계 $p$마다 분할을 고르지 않고 가장 작은 번호로 정하므로, 영 덮개열이 $f$만으로 정해집니다. (2)와 (3)은 이 증명의 도구를 그렇게 정해지는 꼴로 진술에 올린 것입니다.

## 증명

:::idea
(2)는 균등 분할의 작은 구간이 세분에서 줄어든다는 것과 다르부 합의 정의에서 나온다. (3)은 가장 작은 번호 $n_p$에서 흔들림이 큰 작은 구간들의 길이를 누르고, 이중급수의 합으로 총길이를 센다. (1)의 한쪽은 불연속점이 $Z_f$와 균등 분할의 점 전체에 든다는 것이고, 다른 쪽은 조건으로 정한 열린구간들의 덮개에 하이네–보렐 정리와 유한 합집합의 보조정리를 써서 좋은 균등 분할을 얻는 것이다.
:::

:::hint
분할점이 아닌 $x$가 $P_{2^n}$의 $i$번째 작은 구간의 안쪽에 있으면, $x$에서의 진동은 그 작은 구간 위의 $M_{n,i} - m_{n,i}$ 이하이다.
:::

:::hint
"어떤 $N_0$, $K$가 있어 $N_0$ 이상인 모든 $n$에서, $S$와 만나는 $P_n$의 작은 구간이 모두 좋다"를 만족하는 집합 $S$ 전체는 공집합을 포함하고 두 원소의 합집합에 닫혀 있다.
:::

:::proof
실수의 계산과 순서는 [[real-number-arithmetic]], [[real-order-axioms]], [[order-properties-of-reals]]로 다루며, 그 (10)에 의해 정수 사이의 부등식도 실수의 부등식으로 읽는다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7)로 다루고, 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]). "분할 ($k$)", "균등 ($k$)", "균등 정리 ($k$)", "다르부 ($k$)", "계단 ($k$)", "영집합 ($k$)", "진동 ($k$)", "합 항목 ($k$)", "짝짓기 ($k$)", "거듭제곱 ($k$)", "선형성 ($k$)"은 각각 [[partition-of-an-interval]], [[uniform-partition]], [[uniform-partitions-suffice|균등 분할로 충분하다는 정리]], [[darboux-sums]], [[step-function|계단함수와 그 적분]], [[null-set-of-reals|ℝ 의 영집합]], [[oscillation-of-a-function|점에서의 진동]], [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]], [[pairing-of-natural-numbers|ℕ × ℕ 과 ℕ 의 전단사]], [[power-of-a-real-number]], [[linearity-and-order-of-finite-sums|유한 합의 선형성과 순서]]의 번호이다. 절댓값은 [[absolute-value]]의 번호로 쓴다.

**(가) 지시함수의 일차결합의 계단 꼴.** $q$가 자연수, $t_0, \dots, t_q$가 $0 \le j < k \le q$이면 $t_j < t_k$인 실수, $v_1, \dots, v_q$가 실수이면, 실수 $x$에서의 값이 $\varphi(x) = \sum_{i=1}^{q} v_i \chi_{[t_{i-1}, t_i)}(x)$인 함수 $\varphi$는 점 $t_0, \dots, t_q$와 값 $v_1, \dots, v_q$의 계단 꼴을 갖는다.

$1 \le i \le q$이고 $t_{i-1} \le x < t_i$라 하자. $i' < i$인 정수 $i'$($1 \le i'$)이면 $i' \le i - 1$이므로 $t_{i'} \le t_{i-1} \le x$이어서 $x \notin [t_{i'-1}, t_{i'})$이고, $i < i' \le q$이면 $i \le i' - 1$이므로 $x < t_i \le t_{i'-1}$이어서 $x \notin [t_{i'-1}, t_{i'})$이다. [[indicator-function]]의 (1)에 의해 $i' \ne i$인 항은 $0$이고 $i$번째 항은 $v_i$이므로, [[splitting-and-shifting-finite-sums|유한 합의 쪼개기]]의 (1)로 합을 $i - 1$번째까지, $i$번째, 그 뒤로 나누고 선형성 (2)($0$인 항의 합은 $0$)와 [[finite-sum-of-reals]]의 (2)를 쓰면 $\varphi(x) = v_i$이다. $x < t_0$이거나 $t_q \le x$이면 모든 $i$에서 $x < t_0 \le t_{i-1}$이거나 $t_i \le t_q \le x$이므로 모든 항이 $0$이고 $\varphi(x) = 0$이다.

**(2)** $n$을 자연수라 하고 $N = 2^n$으로 두면 거듭제곱 (7)에 의해 $N$은 자연수이다. 균등 (1)에 의해 $P_N$은 $[a, b]$의 분할이고 그 점은 $x_{n,i} = a + i h_N$이며 모든 작은 구간의 길이는 $h_N$이다. 분할 (1)에 의해 $x_{n,0} = a$, $x_{n,N} = b$이고 $j < k$이면 $x_{n,j} < x_{n,k}$이다.

(i) (가)에 의해 $s_n$과 $t_n$은 적힌 계단 꼴을 갖고, 계단 (2)에 의해 계단함수이다. 계단 꼴의 정의에 의해 $x < x_{n,0} = a$이거나 $x_{n,N} = b \le x$이면 값이 $0$이다.

(ii) 계단 (2)의 (i)에 의해 그런 $i$가 정확히 하나 있고, 계단 꼴의 정의에 의해 $s_n(x) = m_{n,i}$, $t_n(x) = M_{n,i}$이다. $x_{n,i-1} \le x \le x_{n,i}$이므로 다르부 (1)에 의해 $m_{n,i} \le f(x) \le M_{n,i}$이다.

(iii) $|f(a)| \le B$이고 절댓값은 $0$ 이상이므로 $0 \le B$이다. 절댓값 (7)에 의해 $[a, b]$의 모든 $x$에서 $-B \le f(x) \le B$이므로, 다르부 (1)에 의해 모든 $i$에서 $-B \le m_{n,i} \le M_{n,i} \le B$이다. $a \le x < b$이면 (ii)에 의해 $s_n(x)$와 $t_n(x)$는 이런 $m_{n,i}$, $M_{n,i}$이므로 절댓값 (7)에 의해 그 절댓값은 $B$ 이하이다. 그 밖의 $x$에서는 (i)에 의해 값이 $0$이고 $|0| = 0 \le B$이다.

(iv) 계단 (4)의 (ii)와 (i)의 계단 꼴에 의해 $\int_{\mathbb{R}} s_n = \sum_{i=1}^{N} m_{n,i}(x_{n,i} - x_{n,i-1})$이고, $x_{n,i} - x_{n,i-1}$은 $P_N$의 $i$번째 작은 구간의 길이 $\Delta x_i$이므로 다르부 합의 정의에 의해 이것은 $L(P_N, f)$이다. 같은 방법으로 $\int_{\mathbb{R}} t_n = U(P_N, f)$이고, 계단 (6)의 (i)에 의해 $\int_{\mathbb{R}} (t_n - s_n) = \int_{\mathbb{R}} t_n - \int_{\mathbb{R}} s_n$이다.

(v) $x < a$이거나 $b \le x$이면 (i)에 의해 네 값이 모두 $0$이다. $a \le x < b$라 하고, (ii)에 의해 $x_{n,j-1} \le x < x_{n,j}$인 정수 $j$($1 \le j \le 2^n$)를 잡는다. 균등 정리 (6)의 (iii)에 의해 $1 \le i \le 2^k$인 정수 $i$가 있어 $[x_{n,j-1}, x_{n,j}] \subseteq [x_{k,i-1}, x_{k,i}]$이다. 두 끝점이 큰 쪽 구간의 원소이므로 $x_{k,i-1} \le x_{n,j-1} \le x < x_{n,j} \le x_{k,i}$이고, (ii)를 $k$에 쓰면 $s_k(x) = m_{k,i}$, $t_k(x) = M_{k,i}$이다. 다르부 (4)를 $[c', d'] = [x_{n,j-1}, x_{n,j}] \subseteq [c, d] = [x_{k,i-1}, x_{k,i}]$에 쓰면
$$
m_{k,i} \le m_{n,j} \le M_{n,j} \le M_{k,i}
$$
이고, (ii)에 의해 이것이 $s_k(x) \le s_n(x) \le t_n(x) \le t_k(x)$이다. 뒤의 부등식은 이것에서 바로 나온다.

(vi) $f$가 적분가능하면 균등 정리 (6)의 (ii)에 의해 $L(P_{2^n}, f)$와 $U(P_{2^n}, f)$는 $\int_a^b f$로 수렴하고, (iv)에 의해 이것이 두 적분이다.

(vii) $x \ne b$이므로 $a \le x < b$이다. $x$가 $Z_f$의 둘째 집합에 들지 않으므로, 모든 양수 $r$에 대하여 $t_{n_0}(x) - s_{n_0}(x) < r$인 자연수 $n_0$이 있다. $n \ge n_0$이면 (v)에 의해 $0 \le t_n(x) - s_n(x) \le t_{n_0}(x) - s_{n_0}(x) < r$이다. 따라서 [[limit-of-sequence]]의 정의에 의해 $t_n(x) - s_n(x)$는 $0$으로 수렴한다. (ii)에 의해 $0 \le f(x) - s_n(x) \le t_n(x) - s_n(x)$이고 $0 \le t_n(x) - f(x) \le t_n(x) - s_n(x)$이므로, $n \ge n_0$이면 $|s_n(x) - f(x)| < r$이고 $|t_n(x) - f(x)| < r$이다(절댓값 (7)). 따라서 두 수열은 $f(x)$로 수렴한다.

**(3)** (i) 자연수 $p$에 대하여 $\left(\tfrac{1}{4}\right)^p > 0$이므로(거듭제곱 (6)의 (i)) 균등 정리 (6)의 (ii)를 $\varepsilon = \left(\tfrac{1}{4}\right)^p$에 쓰면 $n_p$가 하나로 정해지고, 그것은 $a$, $b$, $f$, $p$만으로 정해진다. 자연수 $i$마다 (Z5)와 (Z1)에 의해 $i \le N$, $i = N + 1$, $i > N + 1$ 가운데 정확히 하나이고, 첫째 경우는 다시 $M_{n_p,i} - m_{n_p,i}$와 $\left(\tfrac{1}{2}\right)^p$의 비교로 정확히 하나의 줄에 든다. 각 줄의 값은 식이나 이미 정해진 대상이므로 [[sequence]]의 (1)과 짝짓기 (1)에 의해 $c_l$, $d_l$이 정해진다. 분할 (1)에 의해 $x_{n_p,i-1} < x_{n_p,i}$이고 $\left(\tfrac{1}{2}\right)^p > 0$이므로 모든 $p$, $i$에서 $c_{p,i} \le d_{p,i}$이다.

$p$를 고정하고 $N = 2^{n_p}$, $r = \left(\tfrac{1}{2}\right)^p$로 두자. $1 \le i \le N$이면 $d_{p,i} - c_{p,i}$는 $M_{n_p,i} - m_{n_p,i} \ge r$일 때 $P_N$의 $i$번째 작은 구간의 길이이고 아닐 때 $0$이다. 곧 균등 정리 (7)을 $Q = P_N$, 이 $r$에 썼을 때 그 항목이 더하는 $i$번째 수이다. 거듭제곱 (2)의 (iii)에 의해 $\left(\tfrac{1}{4}\right)^p = r \cdot r$이고 $n_p$의 정의에 의해 $U(P_N, f) - L(P_N, f) < r \cdot r$이므로, 균등 정리 (7)의 (ii)를 $\eta = r$에 쓰면 $\sum_{i=1}^{N} (d_{p,i} - c_{p,i}) < r$이다. $i > N + 1$이면 $d_{p,i} - c_{p,i} = 0$이고 $d_{p,N+1} - c_{p,N+1} = r$이므로, 합 항목의 (4)와 (1)의 (i)에 의해
$$
\begin{aligned}
\sum_{i=1}^{\infty} (d_{p,i} - c_{p,i}) &= \sum_{i=1}^{N} (d_{p,i} - c_{p,i}) + r \\
&< r + r = 2\left(\tfrac{1}{2}\right)^p
\end{aligned}
$$
이다. 여기서 유한 합은 모두 실수의 유한 합이다(합 항목의 유한 합의 정의).

$(p, i)$에서의 값이 $d_{p,i} - c_{p,i}$인 이중첨수 원소열을 $\pi$로 한 줄로 늘어놓은 원소열의 $l$번째 항이 $d_l - c_l$이다. [[nonnegative-double-series|0 이상인 이중급수]]의 (2), 합 항목의 (5), [[geometric-series|등비급수]]의 (2)(첫째 항 $1$, 공비 $\tfrac{1}{2}$, 거듭제곱 (1)에 의해 $2\left(\tfrac{1}{2}\right)^p = \left(\tfrac{1}{2}\right)^{p-1}$)와 합 항목의 (3)의 (i)에 의해
$$
\begin{aligned}
\sum_{l=1}^{\infty} (d_l - c_l) &= \sum_{p=1}^{\infty} \sum_{i=1}^{\infty} (d_{p,i} - c_{p,i}) \\
&\le \sum_{p=1}^{\infty} \left(\tfrac{1}{2}\right)^{p-1} = 2
\end{aligned}
$$
이다.

(ii) $x \in Z_f$와 자연수 $M$이 주어졌다고 하자. [[sequence-of-sets|집합열]]의 (8)에 의해 $M \le l$이고 $x \in [c_l, d_l)$인 자연수 $l$을 찾으면 된다.

$x = b$이면 $l = \pi(M, 2^{n_M} + 1)$로 둔다. 짝짓기 (1)에 의해 $\kappa_1(l) = M$, $\kappa_2(l) = 2^{n_M} + 1$이므로 $[c_l, d_l) = \bigl[b, b + \left(\tfrac{1}{2}\right)^M\bigr)$이고 $b$는 그 원소이며, 짝짓기 (4)에 의해 $M \le l$이다.

$x \ne b$이면 $a \le x < b$이고, 양수 $r$이 있어 모든 자연수 $n$에서 $r \le t_n(x) - s_n(x)$이다. [[geometric-sequence-limit|등비수열의 극한]]의 (1)에 의해 $\left(\tfrac{1}{2}\right)^n$은 $0$으로 수렴하므로, 자연수 $P$가 있어 $P \le n$이면 $\left(\tfrac{1}{2}\right)^n < r$이다. $p = \max\{P, M\}$으로 두면 $P \le p$이고 $M \le p$이다. $n = n_p$, $N = 2^n$으로 두고 (2)의 (ii)로 $x_{n,i-1} \le x < x_{n,i}$인 $i$($1 \le i \le N$)를 잡으면 $M_{n,i} - m_{n,i} = t_n(x) - s_n(x) \ge r > \left(\tfrac{1}{2}\right)^p$이다. 따라서 $c_{p,i} = x_{n,i-1}$, $d_{p,i} = x_{n,i}$이고 $x$는 $[c_{p,i}, d_{p,i})$의 원소이다. $l = \pi(p, i)$로 두면 $[c_l, d_l) = [c_{p,i}, d_{p,i})$이고 짝짓기 (4)에 의해 $M \le p \le l$이다.

따라서 $Z_f \subseteq \limsup_{l \to \infty} [c_l, d_l)$이다. (i)에 의해 총길이가 $2 < \infty$이므로 이 쌍은 $Z_f$의 영 덮개열이고, $Z_f$는 영집합이다.

(iii) (ii)에 의해 $x \notin Z_f$이므로 (2)의 (vii)이다.

**(1), 적분가능하면 $D_f$가 영집합이다.** 자연수 $l$마다 $e(l) = a + (\kappa_2(l) - 1)(b - a)/2^{\kappa_1(l)}$로 두면 $e : \mathbb{N} \to \mathbb{R}$는 함수이다([[sequence]]의 (1)). 자연수 $n$과 $0 \le i \le 2^n$인 정수 $i$에 대하여 $l = \pi(n, i + 1)$이면 짝짓기 (1)에 의해 $e(l) = x_{n,i}$이다. 그래서 어떤 자연수 $n$과 $0 \le i \le 2^n$인 어떤 정수 $i$에 대하여 $x = x_{n,i}$인 실수 $x$ 전체의 집합을 $G$라 하면, $G$는 $\{e(l) : l \in \mathbb{N}\}$의 부분집합이고, 영집합 (3)에 의해 영집합이다. (3)의 (ii)에 의해 $Z_f$도 영집합이므로 영집합 (5)에 의해 $Z_f \cup G$는 영집합이다.

$D_f \subseteq Z_f \cup G$임을 보인다. $x \in D_f$이고 $x \notin G$라 하자. $a = x_{1,0}$, $b = x_{1,2}$는 $G$의 원소이므로 $a < x < b$이다. 자연수 $n$마다 $P_{2^n} \subseteq G$이므로 $x \in [a, b] - P_{2^n}$이고, 분할 (3)의 (iii)에 의해 $x_{n,i-1} < x < x_{n,i}$인 정수 $i$가 있다. 분할 (2)에 의해 $[x_{n,i-1}, x_{n,i}] \subseteq [a, b]$이므로 진동 (4)의 (i)와 (2)의 (ii)에 의해
$$
\begin{aligned}
o(f, x) &\le M_{n,i} - m_{n,i} \\
&= t_n(x) - s_n(x)
\end{aligned}
$$
이다. 진동 (2)에 의해 $0 < o(f, x)$이므로 $r = o(f, x)$로 두면 모든 $n$에서 $r \le t_n(x) - s_n(x)$이고, $x \in Z_f$이다. 따라서 $D_f \subseteq Z_f \cup G$이고, 영집합 (2)에 의해 $D_f$는 영집합이다.

**(1), $D_f$가 영집합이면 적분가능하다.** $w = \sup f([a, b]) - \inf f([a, b])$로 두면 [[supremum-of-function-values]]의 (4)에 의해 $0 \le w$이다. 양수 $\eta$가 주어졌다고 하고 $\varepsilon = \eta / \bigl((b - a) + 3w + 1\bigr)$로 두면 $\varepsilon > 0$이다. [[integrability-criterion|리만 적분가능성의 판정]]의 (6)에 의해, $U(P_n, f) - L(P_n, f) < \eta$인 자연수 $n$이 있음을 보이면 된다.

*진동이 큰 점을 덮는다.* $S = \{x \in [a, b] : \varepsilon \le o(f, x)\}$로 두면 진동 (3)의 (iii)에 의해 $S \subseteq D_f$이고, 영집합 (2)에 의해 $S$는 영집합이다. 영집합 (1)의 (ii)에 의해 모든 자연수 $j$에서 $\alpha_j < \beta_j$이고 $S \subseteq \bigcup_{j=1}^{\infty} (\alpha_j, \beta_j)$이며 $\sum_{j=1}^{\infty} (\beta_j - \alpha_j) < \varepsilon$인 실수열 $(\alpha_j)$, $(\beta_j)$가 있다. 이 둘을 하나 잡아 고정한다. $\gamma_j = 2\alpha_j - \beta_j$, $\delta_j = 2\beta_j - \alpha_j$로 두면 $\gamma_j < \alpha_j < \beta_j < \delta_j$이고 $\delta_j - \gamma_j = 3(\beta_j - \alpha_j)$이다.

*좋은 작은 구간.* 자연수 $n$에 대하여 $P_n$의 점을 $y_{n,0}, \dots, y_{n,n}$이라 하자(균등 (1)에 의해 $y_{n,i} = a + i h_n$). 자연수 $K$에 대하여 $P_n$의 $i$번째 작은 구간 $[y_{n,i-1}, y_{n,i}]$가 다음 둘 가운데 하나를 만족하면 "$K$에 대하여 좋다"고 하자.

- (ㄱ) $\sup f([y_{n,i-1}, y_{n,i}]) - \inf f([y_{n,i-1}, y_{n,i}]) < \varepsilon$이다.
- (ㄴ) $j \le K$이고 $[y_{n,i-1}, y_{n,i}] \subseteq [\gamma_j, \delta_j]$인 자연수 $j$가 있다.

$\mathbb{R}$의 부분집합 $T$ 가운데 "자연수 $N_0$, $K$가 있어, $N_0 \le n$인 모든 자연수 $n$과 $1 \le i \le n$인 모든 정수 $i$에서 $[y_{n,i-1}, y_{n,i}] \cap T \ne \emptyset$이면 $[y_{n,i-1}, y_{n,i}]$가 $K$에 대하여 좋다"를 만족하는 것 전체의 집합족을 $\mathcal{K}$라 하자([[family-of-sets]]의 조건으로 정한 집합족).

- $\emptyset \in \mathcal{K}$이다($N_0 = K = 1$이고, $\emptyset$과 만나는 작은 구간이 없다).
- $T \in \mathcal{K}$이고 $R \subseteq T$이면 $R$과 만나는 작은 구간은 $T$와 만나므로 $R \in \mathcal{K}$이다.
- $T, T' \in \mathcal{K}$의 수를 $(N_0, K)$, $(N_0', K')$이라 하고 $N_0'' = \max\{N_0, N_0'\}$, $K'' = \max\{K, K'\}$로 두자. $N_0'' \le n$이고 작은 구간이 $T \cup T'$과 만나면 $T$나 $T'$과 만나므로 $K$나 $K'$에 대하여 좋고, (ㄴ)의 $j \le K$나 $j \le K'$에서 $j \le K''$이므로 $K''$에 대하여 좋다. 따라서 $T \cup T' \in \mathcal{K}$이다.

*덮개.* $\mathcal{V}_1 = \{(\alpha_j, \beta_j) : j \in \mathbb{N}\}$로 두고, $\mathcal{V}_2$를 "실수 $c'$, $c$, $d$, $d'$이 있어 $c' < c < d < d'$, $V = (c, d)$, $[c', d'] \cap [a, b] \ne \emptyset$이고 $\sup f([c', d'] \cap [a, b]) - \inf f([c', d'] \cap [a, b]) < \varepsilon$"을 만족하는 $\mathbb{R}$의 부분집합 $V$ 전체의 집합족으로 두며, $\mathcal{V} = \mathcal{V}_1 \cup \mathcal{V}_2$로 둔다. 둘 다 조건으로 정한 집합족이다. $f$가 $[a, b]$ 위에서 유계이므로 $[c', d'] \cap [a, b]$ 위에서도 유계이고(supremum-of-function-values 의 첫 목록), 위의 상한과 하한이 있다. $\mathcal{V}$의 원소는 열린구간이므로 [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합]]의 (1)과 [[standard-topology-on-reals|실수의 보통 위상]]의 (5)에 의해 보통 위상의 열린집합이다.

$[a, b] \subseteq \bigcup \mathcal{V}$이다. $x \in [a, b]$이고 $\varepsilon \le o(f, x)$이면 $x \in S$이므로 $x$는 어떤 $(\alpha_j, \beta_j) \in \mathcal{V}_1$의 원소이다. $o(f, x) < \varepsilon$이면 진동 (4)의 (ii)에 의해 $c_0 < x < d_0$이고 $x \in [c_0, d_0] \cap [a, b]$이며 $\sup f([c_0, d_0] \cap [a, b]) - \inf f([c_0, d_0] \cap [a, b]) < \varepsilon$인 실수 $c_0$, $d_0$이 있다. $c = (c_0 + x)/2$, $d = (x + d_0)/2$로 두면 $c_0 < c < x < d < d_0$이므로 $(c, d) \in \mathcal{V}_2$이고($c' = c_0$, $d' = d_0$) $x \in (c, d)$이다.

$\mathcal{V} \subseteq \mathcal{K}$이다. 먼저 $(\alpha_j, \beta_j)$를 보자. 균등 (2)에 의해 $N_0 \le n$이면 $h_n < \beta_j - \alpha_j$인 자연수 $N_0$이 있다. $K = j$로 둔다. $N_0 \le n$이고 $z \in [y_{n,i-1}, y_{n,i}] \cap (\alpha_j, \beta_j)$이면 $y_{n,i} - y_{n,i-1} = h_n$이므로
$$
\begin{aligned}
y_{n,i-1} &\ge z - h_n \\
&> \alpha_j - (\beta_j - \alpha_j) = \gamma_j, \\
y_{n,i} &\le z + h_n \\
&< \beta_j + (\beta_j - \alpha_j) = \delta_j
\end{aligned}
$$
이고 $[y_{n,i-1}, y_{n,i}] \subseteq [\gamma_j, \delta_j]$이어서 (ㄴ)이 성립한다. 다음으로 $V \in \mathcal{V}_2$라 하고 그 조건의 $c' < c < d < d'$을 하나 잡자. $\rho = \min\{c - c', d' - d\}$는 절댓값 (10)에 의해 양수이다. 균등 (2)에 의해 $N_0 \le n$이면 $h_n < \rho$인 $N_0$이 있고, $K = 1$로 둔다. $N_0 \le n$이고 $z \in [y_{n,i-1}, y_{n,i}] \cap (c, d)$이면 위와 같이 $y_{n,i-1} > c - \rho \ge c'$, $y_{n,i} < d + \rho \le d'$이므로 $[y_{n,i-1}, y_{n,i}] \subseteq [c', d']$이고, 분할 (2)에 의해 $[y_{n,i-1}, y_{n,i}] \subseteq [a, b]$이므로 $[y_{n,i-1}, y_{n,i}] \subseteq [c', d'] \cap [a, b]$이다. [[supremum-of-function-values]]의 (5)에 의해 그 작은 구간 위의 진동은 $[c', d'] \cap [a, b]$ 위의 진동 이하이므로 $\varepsilon$보다 작고, (ㄱ)이 성립한다.

*콤팩트성.* [[closed-interval-is-compact|닫힌구간의 콤팩트성]]의 (1)에 의해 $[a, b]$는 $\mathbb{R}$의 콤팩트 부분집합이므로, [[compact-space]]의 (3)에 의해 $[a, b] \subseteq \bigcup \mathcal{F}$인 $\mathcal{V}$의 유한 부분족 $\mathcal{F}$가 있다. $\mathcal{F} \subseteq \mathcal{V} \subseteq \mathcal{K}$이고 $\mathcal{K}$는 위의 세 성질을 가지므로, compact-space 의 (1)의 (i)에 의해 $\bigcup \mathcal{F} \in \mathcal{K}$이고, $[a, b] \subseteq \bigcup \mathcal{F}$이므로 $[a, b] \in \mathcal{K}$이다. 그 $N_0$, $K$를 잡고 $n = N_0$으로 둔다. $P_n$의 모든 작은 구간은 분할 (2)에 의해 $[a, b]$의 공집합이 아닌 부분집합이므로 $[a, b]$와 만나고, 따라서 $K$에 대하여 좋다.

*셈.* $P_n$과 $f$의 $m_i$, $M_i$를 쓰고, $1 \le i \le n$인 $i$마다 $M_i - m_i \ge \varepsilon$이면 $\theta_i = 1$, 아니면 $\theta_i = 0$으로 둔다. $\theta_i = 0$이면 $M_i - m_i < \varepsilon$이고, $\theta_i = 1$이면 다르부 (1)에 의해 $M_i - m_i \le w$이다. 어느 경우에나 $M_i - m_i \le \varepsilon + w \theta_i$이다. 다르부 (3), 선형성 (1), (3), 균등 (1)과 분할 (7)에 의해
$$
\begin{aligned}
&U(P_n, f) - L(P_n, f) \\
&\quad = \sum_{i=1}^{n} (M_i - m_i) h_n \\
&\quad \le \varepsilon (b - a) + w \sum_{i=1}^{n} \theta_i h_n
\end{aligned}
$$
이다.

$\varphi(x) = \sum_{i=1}^{n} \theta_i \chi_{[y_{n,i-1}, y_{n,i})}(x)$, $\psi(x) = \sum_{j=1}^{K} \chi_{[\gamma_j, \delta_j)}(x)$로 정한 두 함수를 생각하자. (가)와 계단 (2)에 의해 $\varphi$는 점 $y_{n,0}, \dots, y_{n,n}$과 값 $\theta_1, \dots, \theta_n$의 계단 꼴을 갖는 계단함수이고, 계단 (4)의 (ii)에 의해 $\int_{\mathbb{R}} \varphi = \sum_{i=1}^{n} \theta_i h_n$이다. 계단 (4)의 (iii)과 (5)에 의해 $\psi$는 계단함수이고, 계단 (6)의 (i), (4)의 (iii)과 선형성 (1)에 의해 $\int_{\mathbb{R}} \psi = \sum_{j=1}^{K} (\delta_j - \gamma_j) = 3 \sum_{j=1}^{K} (\beta_j - \alpha_j)$이다. 모든 실수 $x$에서 $\varphi(x) \le \psi(x)$이다. 실제로 [[indicator-function]]의 (1)과 선형성 (6)에 의해 $0 \le \psi(x)$이다. $\varphi(x) \ne 0$이면 계단 꼴의 정의에 의해 $y_{n,i-1} \le x < y_{n,i}$이고 $\theta_i = 1$인 $i$가 있어 $\varphi(x) = 1$이다. 그 작은 구간은 (ㄱ)을 만족하지 않으므로 (ㄴ)을 만족하고, $j \le K$인 $j$에서 $\gamma_j \le y_{n,i-1} \le x < y_{n,i} \le \delta_j$이므로 $\chi_{[\gamma_j, \delta_j)}(x) = 1$이며, 합 항목의 (1)의 (iv)에 의해 $1 \le \psi(x)$이다. 계단 (6)의 (ii)와 합 항목의 (2)에 의해
$$
\begin{aligned}
\sum_{i=1}^{n} \theta_i h_n &= \int_{\mathbb{R}} \varphi \le \int_{\mathbb{R}} \psi \\
&= 3 \sum_{j=1}^{K} (\beta_j - \alpha_j) \\
&\le 3 \sum_{j=1}^{\infty} (\beta_j - \alpha_j) < 3\varepsilon
\end{aligned}
$$
이다. $0 \le w$이므로
$$
\begin{aligned}
&U(P_n, f) - L(P_n, f) \\
&\quad \le \varepsilon (b - a) + 3w\varepsilon \\
&\quad < \varepsilon \bigl((b - a) + 3w + 1\bigr) = \eta
\end{aligned}
$$
이다. 따라서 $f$는 적분가능하다.
:::

## 예시와 반례

:::example[한 점에서 뛰는 함수의 아래·위 계단함수]
$[0, 1]$ 위에서 $x \le \tfrac{1}{2}$이면 $f(x) = 0$, $x > \tfrac{1}{2}$이면 $f(x) = 1$이라 합시다. 자연수 $n$에 대하여 $\tfrac{1}{2} = x_{n, 2^{n-1}}$입니다. $i \le 2^{n-1}$인 작은 구간은 $\left[0, \tfrac{1}{2}\right]$ 안에 있어 $m_{n,i} = M_{n,i} = 0$이고, $i > 2^{n-1} + 1$인 작은 구간은 $\tfrac{1}{2}$보다 큰 점들로 되어 있어 $m_{n,i} = M_{n,i} = 1$입니다. $i = 2^{n-1} + 1$인 작은 구간 $\left[\tfrac{1}{2}, \tfrac{1}{2} + 2^{-n}\right]$에서는 $f\left(\tfrac{1}{2}\right) = 0$이므로 $m_{n,i} = 0$, $M_{n,i} = 1$입니다. 그래서
$$
s_n = \chi_{\left[\frac{1}{2} + 2^{-n},\, 1\right)}, \qquad t_n = \chi_{\left[\frac{1}{2},\, 1\right)}
$$
이고, $\int_{\mathbb{R}} s_n = \tfrac{1}{2} - 2^{-n}$, $\int_{\mathbb{R}} t_n = \tfrac{1}{2}$, 상합과 하합의 차는 $2^{-n}$입니다. $2^{-n} < \left(\tfrac{1}{4}\right)^p = 2^{-2p}$인 것은 정확히 $n > 2p$일 때이므로 $n_p = 2p + 1$입니다. 그 단계에서 $M - m \ge \left(\tfrac{1}{2}\right)^p$인 작은 구간은 $\tfrac{1}{2}$에서 시작하는 하나뿐이어서, 균등 분할 영 덮개열의 빈 집합이 아닌 칸은 $p$마다 $\left[\tfrac{1}{2}, \tfrac{1}{2} + 2^{-2p-1}\right)$과 $\left[1, 1 + 2^{-p}\right)$ 둘입니다.

$Z_f$를 직접 구하면 $\left\{\tfrac{1}{2}, 1\right\}$입니다. $x = \tfrac{1}{2}$에서는 모든 $n$에서 $t_n - s_n = 1$이고, $x < \tfrac{1}{2}$에서는 $0$이며, $\tfrac{1}{2} < x < 1$에서는 $\tfrac{1}{2} + 2^{-n} \le x$가 되는 $n$부터 $0$입니다. $Z_f$의 두 점에서 (2)의 (vii)의 결론이 실제로 깨집니다. $t_n\left(\tfrac{1}{2}\right) = 1 \ne f\left(\tfrac{1}{2}\right)$이고, $s_n(1) = t_n(1) = 0 \ne f(1)$입니다. 불연속점은 $\tfrac{1}{2}$ 하나이므로 $D_f = \left\{\tfrac{1}{2}\right\}$은 영집합이고, (1)에 의해 $f$는 적분가능하며 (2)의 (vi)에 의해 $\int_0^1 f = \tfrac{1}{2}$입니다.
:::

:::example[칸토어의 삼분 집합의 지시함수]
$C$를 [[cantor-set-is-null|칸토어의 삼분 집합]]이라 하면 그 (1)의 (i)에 의해 $C \subseteq [0, 1]$이므로, $X = [0, 1]$ 위의 지시함수 $f = \chi_C : [0, 1] \to \mathbb{R}$가 정해집니다. $D_f = C$입니다. $x \in [0, 1] - C$이면 칸토어 집합 항목의 (7)의 $\delta$에 대하여 $|y - x| < \delta$인 $[0, 1]$의 모든 $y$에서 $f(y) = 0 = f(x)$이므로 $f$는 $x$에서 연속입니다. $x \in C$이고 $\delta > 0$이면, $x < 1$일 때 $\beta = \min\left\{x + \tfrac{\delta}{2}, 1\right\}$, $x = 1$일 때 $\alpha = \max\left\{1 - \tfrac{\delta}{2}, 0\right\}$로 두어 $[x, \beta)$나 $[\alpha, 1)$에 그 항목의 (6)을 쓰면, $[0, 1]$의 원소이고 $|y - x| < \delta$이며 $y \notin C$인 $y$가 있습니다. 그때 $|f(y) - f(x)| = 1$이므로 $f$는 $x$에서 불연속입니다.

칸토어 집합 항목의 (5)에 의해 $D_f = C$는 영집합이므로 (1)에 의해 $f$는 적분가능합니다. 값도 구할 수 있습니다. 모든 분할의 모든 작은 구간 $[x_{i-1}, x_i]$에 그 항목의 (6)을 쓰면 $C$에 들지 않는 점이 있어 $m_i = 0$이므로 하합은 늘 $0$이고, 다르부 합의 범위에 의해 $0 \le U(P, f)$이므로 [[riemann-integral]]의 (3)에 의해 $\int_0^1 f = 0$입니다. 그 항목의 (3)에 의해 서로 다른 수 $\left(\tfrac{1}{3}\right)^n$이 모두 $C$의 원소이므로, 이 함수는 불연속점이 끝없이 많은데도 적분가능합니다.
:::

:::counterexample[디리클레 함수의 불연속점]
$[a, b]$ 위의 [[dirichlet-function|디리클레 함수]]를 $g$라 합시다. $x \in [a, b]$와 $\delta > 0$이 주어지면 $c = \max\{x - \tfrac{\delta}{2}, a\}$, $d = \min\{x + \tfrac{\delta}{2}, b\}$는 $c < d$이고 $[c, d] \subseteq [a, b]$이며, $[c, d]$의 점은 $x$와의 거리가 $\tfrac{\delta}{2}$ 이하입니다. 그 항목의 (2)에 의해 $[c, d]$에는 $g$의 값이 $0$인 점과 $1$인 점이 모두 있습니다. 그래서 $g(x)$와의 차가 $1$인 점이 $\delta$ 안에 있어 $g$는 모든 점에서 불연속이고 $D_g = [a, b]$입니다. [[null-set-of-reals|ℝ 의 영집합]]의 (7)에 의해 $[a, b]$는 영집합이 아니므로, (1)에 의해 $g$는 적분가능하지 않습니다. 이것은 [[riemann-integral]]의 (5)와 같은 결론입니다. 유계라는 것만으로는 적분가능하지 않을 수 있고, (1)은 그 차이를 불연속점의 크기로 가릅니다.
:::

## 확인 질문

:::check[$[a, b]$ 위의 값이 $k$인 상수함수에서 $s_n$, $t_n$, $n_p$, $Z_f$는?]
모든 작은 구간에서 $m_{n,i} = M_{n,i} = k$이므로 $s_n = t_n = k\,\chi_{[a, b)}$이고(계단 꼴), 상합과 하합의 차는 $0$입니다. 그래서 모든 $n$에서 차가 $\left(\tfrac{1}{4}\right)^p$보다 작아 $n_p = 1$이고, $M - m = 0 < \left(\tfrac{1}{2}\right)^p$이므로 $i \le 2$인 칸은 모두 빈 집합 $[a, a)$입니다. 빈 집합이 아닌 칸은 $p$마다 $i = 3$의 $\bigl[b, b + \left(\tfrac{1}{2}\right)^p\bigr)$ 하나입니다. $[a, b)$의 모든 점에서 $t_n - s_n = 0$이므로 $Z_f = \{b\}$입니다. $b$에서는 $s_n(b) = 0$이므로 $k \ne 0$이면 $s_n(b)$가 $f(b) = k$로 가지 않습니다.
:::

:::check[$[0, 1]$ 위에서 $x < \tfrac{1}{2}$이면 $0$, $x \ge \tfrac{1}{2}$이면 $1$인 함수의 $Z_f$와 $D_f$는?]
$Z_f = \{1\}$이고 $D_f = \left\{\tfrac{1}{2}\right\}$입니다. $\tfrac{1}{2}$은 모든 $P_{2^n}$의 점이고, $\tfrac{1}{2}$이 드는 칸 $\left[\tfrac{1}{2}, \tfrac{1}{2} + 2^{-n}\right)$의 닫힌 작은 구간에서 $f$는 늘 $1$이므로 $t_n\left(\tfrac{1}{2}\right) - s_n\left(\tfrac{1}{2}\right) = 0$입니다. $x < \tfrac{1}{2}$이면 $x < \tfrac{1}{2} - 2^{-n}$이 되는 $n$부터 $x$가 드는 작은 구간이 $\tfrac{1}{2}$보다 작은 점들로 되어 있어 $t_n(x) - s_n(x) = 0$이고, $\tfrac{1}{2} < x < 1$이면 $x$가 드는 작은 구간이 $\left[\tfrac{1}{2}, 1\right]$ 안에 있어 늘 $0$입니다. 그래서 불연속점 $\tfrac{1}{2}$은 $Z_f$에 들지 않고, (1)의 증명은 이런 점을 균등 분할의 점 전체 $G$로 따로 덮습니다.
:::
