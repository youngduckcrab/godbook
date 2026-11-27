---
title: 고계 복소 도함수
title_en: Higher Complex Derivatives
aliases: [고계 도함수 (복소), 복소 고계도함수, n계 복소 도함수, n번 복소 미분가능, 무한 번 복소 미분가능, 이계도함수 (복소), higher complex derivative, n times complex differentiable, infinitely complex differentiable]
kind: definition
field: complex-analysis
msc: ["30A99"]
level: undergrad
summary: "열린집합 G 위의 복소함수에서 시작해 복소 도함수를 되풀이해 얻는 함수들을 재귀 정리로 정하고, f 가 n 번 복소 미분가능할 때 k ≤ n 인 k계 도함수 f^(k) 를 쓴다. f^(0) = f, f^(1) = f′, f^(n+1) = (f^(n))′ 과 한 점에서의 값, 도함수의 고계 도함수, 열린 부분집합으로의 제한과 두 열린집합의 합집합, 상수배와 합, 낮은 차수의 연속, 실수를 실수로 보내는 함수에서 실함수의 고계 도함수와의 일치, 도함수가 자기 자신인 함수를 진술한다."
requires: [function, adding-or-removing-an-element, mathematical-induction, prime-number, well-ordering-principle, recursion-theorem, interval, real-valued-function, derivative, higher-derivative, pointwise-convergence, complex-number, complex-field, power-of-a-complex-number, open-set-in-metric-space, complex-plane-as-metric-space, continuity-of-complex-operations, complex-polynomial-function, complex-derivative, complex-derivative-rules, complex-differentiability-examples, zero-derivative-on-a-region]
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Variations of a Theme 절의 첫 문단과 Theorem cauchyformula2, Corollary infdiff 앞 두 문단과 Corollary infdiff, source/sec_variationstheme.ptx:6–31, 197–227; Power Series and Holomorphic Functions 절의 Corollary taylor 와 그 증명, source/sec_powerseriesholom.ptx:185–209; 2장 연습문제 polynomialsholomorphic, ex_2_2, ex_2ndderivative0, source/exercises-chap2.ptx:199–209, 221–381, 568–588; 5장 연습문제 ex_diffbutnottwicediff, source/exercises-chap5.ptx:228–244"
    checked: original
    note: "출처는 고계 도함수를 따로 정의하지 않는다. f′ 과 f″ 은 Theorem cauchyformula2(sec_variationstheme.ptx:13–31)에서 'f″(w) exists' 처럼 처음 쓰고, Corollary infdiff 앞 문단(197–212줄)은 f′, f″, f‴ 에 같은 논법을 되풀이해 모든 도함수 f^{(n)} 이 있고 정칙이라고 적은 뒤, Corollary infdiff(218–227줄)에서 영역에서 미분가능한 f 가 무한 번 미분가능(infinitely differentiable)하다고 진술한다. Corollary taylor 의 증명(sec_powerseriesholom.ptx:197–209)은 f″ 을 f′ 에 같은 정리를 쓴 것으로 얻고 'A quick induction game' 으로 f^{(k)} 를 쓴다. 이 항목은 열린집합 G 에서 ℂ 로의 사상 전체의 집합 위의 함수와 재귀 정리로 복소 미분 반복열을 정하고, 그것으로 'n 번 복소 미분가능'과 f^{(k)} 를 정의한다. 구성은 급수와 멱급수 강의의 higher-derivative 와 같은 꼴이다. 출처 Corollary infdiff 바로 앞 문단(213–217줄)은 이 따름 정리가 실수에서는 성립하지 않는다며 연습문제 ex_diffbutnottwicediff(exercises-chap5.ptx:228–244, 미분가능하지만 도함수가 연속이 아닌 x² sin(1/x))를 가리킨다. 확인 질문 '$G$가 영역이고 $f : G \\to \\mathbb{C}$가 $2$번 미분가능하며 $f''$이 영함수이면 $f$는 어떤 함수인가?'는 출처 2장 연습문제 ex_2ndderivative0(exercises-chap2.ptx:568, 영역에서 f″ 이 0 이면 f(z) = az + b)과 같은 물음이다. 반례 '$0$에서만 미분가능한 $|z|^2$'의 함수는 출처 2장 연습문제 ex_2_2(exercises-chap2.ptx:221–381)가 어디서 미분가능한지 묻는 함수 가운데 하나인 f(z) = |z|² (311줄)와 같은 함수이다. 예시 '삼차 복소 다항함수의 고계 도함수'는 출처 2장 연습문제 polynomialsholomorphic(exercises-chap2.ptx:199–209, 다항식으로 주어진 함수가 정함수임을 보이라)과 같은 대상의 도함수를 되풀이한 것이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(새로 쓴 항별 미분 증명과 오차 부등식 검토). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수와 $\operatorname{Re}$, $\operatorname{Im}$은 [[complex-number]], 체 $\mathbb{C}$의 연산과 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]]의 것이다. 열린집합은 [[open-set-in-metric-space]]의 $(\mathbb{C}, d)$에서의 것이고, $\mathbb{C}$의 부분집합에 주는 거리와 위상은 [[complex-plane-as-metric-space|복소평면의 거리]]의 것이다. 복소 미분가능, 미분계수 $f'(z_0)$, 정칙함수, 도함수 $f'$, 연속은 [[complex-derivative|복소 미분]]의 것이고, 함수 $f + g$, $cf$는 [[continuity-of-complex-operations|복소수 연산의 연속]]의 진술에서 $Z$를 여기의 정의역으로 둔 것이다. 함수의 같음과 제한 $f|_U$는 [[function|함수]]와 [[adding-or-removing-an-element]]의 것이다. "$G$에서 $\mathbb{C}$로의 사상 전체의 집합"은 [[pointwise-convergence|사상의 열과 점별 수렴]]의 것이다($\mathbb{C}$에는 거리 $d$를 준다). 구간, 실함수, 실함수의 $n$번 미분가능과 $k$계 도함수 $h^{(k)}$는 [[interval]], [[real-valued-function]], [[higher-derivative]]의 것이다. 아래에서 $G$는 $(\mathbb{C}, d)$의 열린집합이고 $f : G \to \mathbb{C}$는 복소함수이다.

**복소 미분 반복열.** $X$를 $G$에서 $\mathbb{C}$로의 사상 전체의 집합이라 하자. $X$의 원소 $h$마다 $\mathcal{D}(h)$를 다음과 같이 정한다. $h$가 정칙함수이면 $\mathcal{D}(h) = h'$(도함수)이고, 그렇지 않으면 $\mathcal{D}(h) = h$이다. $X$의 각 원소는 두 경우 가운데 정확히 하나에 들고 각 경우의 값은 이미 정해진 $X$의 원소이므로, [[recursion-theorem|재귀 정리]]의 (1)에 의해 함수 $\mathcal{D} : X \to X$가 있고, 같은 (1)에 의해 $R(j, h) = \mathcal{D}(h)$인 함수 $R : \mathbb{N} \times X \to X$가 있다. 재귀 정리에 의해 $u(1) = f$이고 모든 자연수 $j$에서 $u(j + 1) = \mathcal{D}(u(j))$인 함수 $u : \mathbb{N} \to X$가 정확히 하나 있다. 이것을 $f$의 **복소 미분 반복열**이라 하고 $u_j = u(j)$로 쓴다. 어느 함수의 것인지 밝힐 때는 $u^f_j$로 쓴다. 이 이름과 기호 $\mathcal{D}$, $u_j$는 이 항목 안에서만 쓴다. 정칙함수가 아닌 $h$에 $\mathcal{D}(h) = h$를 준 것은 $\mathcal{D}$를 $X$ 전체에서 정하기 위한 것이고, 아래의 기호는 그 값이 쓰이지 않는 경우에만 쓴다.

**$n$번 복소 미분가능과 $k$계 도함수.** $0$ 이상인 정수 $n$에 대하여 $f$가 **$n$번 복소 미분가능하다**($n$ times complex differentiable)는 것은 정확히 $1 \le j \le n$인 모든 정수 $j$에서 $u_j$가 정칙함수일 때이다. $n = 0$이면 그런 $j$가 없으므로 $f$는 언제나 $0$번 복소 미분가능하다. 이 강의에서 정의역이 $\mathbb{C}$의 열린집합인 복소함수에 "$n$번 미분가능"이라고만 쓰면 이 뜻이다. $f$가 $n$번 미분가능하고 $k$가 $0 \le k \le n$인 정수이면 $u_{k+1}$을 $f$의 **$k$계 도함수**($k$th derivative)라 하고 $f^{(k)}$로 쓴다. 위첨자의 괄호는 빼지 않는다. 아래 (2)에 의해 이때 $f$는 $k$번 미분가능하다. **함수의 기호 $f^{(k)}$는 $f$가 $k$번 미분가능할 때만 쓴다.** 한 점에서의 값의 기호는 (3)에서 한 단계 넓힌다. $f^{(2)}$를 $f''$로도 쓴다. 기호 $f^{(k)}$는 실함수의 $k$계 도함수([[higher-derivative]])와 같은 글자이지만, 정의역이 $\mathbb{C}$의 열린집합인 복소함수에 쓰면 이 뜻이다. 두 뜻이 함께 쓰이는 경우는 아래 (8)이 맞춘다.

**무한 번 미분가능.** $f$가 **무한 번 미분가능하다**(infinitely differentiable)는 것은 정확히 $0$ 이상인 모든 정수 $n$에서 $f$가 $n$번 미분가능할 때이다. 이때 $0$ 이상인 모든 정수 $k$에서 $f^{(k)}$를 쓸 수 있다.

다음이 성립한다. 아래에서 $n$, $k$는 $0$ 이상인 정수이다.

1. (처음 두 도함수와 점화) $f^{(0)} = f$이다. $f$가 $1$번 미분가능한 것은 정확히 $f$가 정칙함수일 때이고, 이때 $f^{(1)} = f'$이다. $f$가 $n + 1$번 미분가능하면 $f^{(n)}$은 정칙함수이고 $f^{(n+1)} = (f^{(n)})'$이다. 특히 $f$가 $2$번 미분가능하면 $f'$은 정칙함수이고 $f'' = (f')'$이다.
2. (차수 올리기와 내리기) $f$가 $n + 1$번 미분가능한 것은 정확히 $f$가 $n$번 미분가능하고 $f^{(n)}$이 정칙함수일 때이다. $f$가 $n$번 미분가능하고 $k \le n$이면 $f$는 $k$번 미분가능하다.
3. (한 점에서의 다음 도함수) $f$가 $n$번 미분가능하고 $z_0 \in G$이며 $f^{(n)}$이 $z_0$에서 복소 미분가능하다고 하자. 이때 미분계수 $(f^{(n)})'(z_0)$을 $f^{(n+1)}(z_0)$으로 쓴다. 이 기호는 $f$가 $n + 1$번 미분가능하지 않아도 쓰고, $f^{(n)}$이 $z_0$에서 복소 미분가능하지 않으면 쓰지 않는다. $f$가 $n + 1$번 미분가능하면 이 수는 함수 $f^{(n+1)}$의 $z_0$에서의 값과 같다. $n = 0$이면 $f^{(1)}(z_0) = f'(z_0)$이다.
4. (도함수의 고계 도함수) $f$가 정칙함수라 하자. $f$가 $n + 1$번 미분가능한 것은 정확히 $f'$이 $n$번 미분가능할 때이고, 이때 $0 \le k \le n$인 모든 $k$에서 $(f')^{(k)} = f^{(k+1)}$이다. 또 $f$가 무한 번 미분가능한 것은 정확히 $f'$이 무한 번 미분가능할 때이다.
5. (국소성)
   - (i) (열린 부분집합으로의 제한) $U \subseteq G$가 열린집합이라 하자. $f$가 $n$번 미분가능하면 $f|_U : U \to \mathbb{C}$도 $n$번 미분가능하고, $0 \le k \le n$인 모든 $k$에서 $(f|_U)^{(k)} = f^{(k)}|_U$이다. $f$가 무한 번 미분가능하면 $f|_U$도 그렇다.
   - (ii) (두 열린집합의 합집합) $U_1$, $U_2 \subseteq G$가 열린집합이고 $G = U_1 \cup U_2$이며 $f|_{U_1}$과 $f|_{U_2}$가 $n$번 미분가능하면, $f$는 $n$번 미분가능하다. 따라서 $f|_{U_1}$과 $f|_{U_2}$가 무한 번 미분가능하면 $f$도 그렇다.
6. (상수배와 합) $g : G \to \mathbb{C}$가 복소함수이고 $c$가 복소수이며 $f$와 $g$가 $n$번 미분가능하다고 하자. 그러면 $cf$와 $f + g$도 $n$번 미분가능하고, $0 \le k \le n$인 모든 $k$에서 $(cf)^{(k)} = c f^{(k)}$, $(f + g)^{(k)} = f^{(k)} + g^{(k)}$이다.
7. (낮은 차수의 연속) $n \ge 1$이고 $f$가 $n$번 미분가능하면, $0 \le k \le n - 1$인 모든 $k$에서 $f^{(k)}$는 정칙함수이고 연속이다. 특히 $f$는 연속이다.
8. (실함수의 고계 도함수와의 일치) $I$가 구간이고 $h : I \to \mathbb{R}$가 실함수이며, 모든 $x \in I$에서 $\iota(x) \in G$이고 $f(\iota(x)) = \iota(h(x))$라 하자. $f$가 $n$번 미분가능하면 $h$는 [[higher-derivative]]의 뜻으로 $n$번 미분가능하고, $0 \le k \le n$인 모든 $k$와 모든 $x \in I$에서 $f^{(k)}(\iota(x)) = \iota\bigl(h^{(k)}(x)\bigr)$이다.
9. (도함수가 자기 자신인 함수) $f$가 정칙함수이고 $f' = f$이면 $f$는 무한 번 미분가능하고, $0$ 이상인 모든 정수 $k$에서 $f^{(k)} = f$이다.
:::

:::english
Complex numbers and $\operatorname{Re}$, $\operatorname{Im}$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, and the convention for writing real numbers in place of complex numbers are those of the entry on the field of complex numbers. Open sets are those of the entry on open sets in a metric space, in $(\mathbb{C}, d)$, and the metric and topology given to subsets of $\mathbb{C}$ are those of the entry on the metric of the complex plane. Complex differentiability, the derivative $f'(z_0)$ at a point, holomorphic functions, the derivative $f'$, and continuity are those of the entry on the complex derivative, and the functions $f + g$, $cf$ are those of the entry on continuity of complex operations with $Z$ taken to be the domain here. Equality of functions and the restriction $f|_U$ are those of the entries on functions and on adding or removing an element. "The set of all maps from $G$ to $\mathbb{C}$" is that of the entry on sequences of maps and pointwise convergence ($\mathbb{C}$ is given the metric $d$). Intervals, real-valued functions, $n$ times differentiability of a real-valued function, and its $k$th derivative $h^{(k)}$ are those of the entries on intervals, real-valued functions, and higher-order derivatives. Below, $G$ is an open set of $(\mathbb{C}, d)$ and $f : G \to \mathbb{C}$ is a complex function.

**The complex differentiation sequence.** Let $X$ be the set of all maps from $G$ to $\mathbb{C}$. For each element $h$ of $X$ define $\mathcal{D}(h)$ as follows: if $h$ is a holomorphic function, $\mathcal{D}(h) = h'$ (its derivative); otherwise $\mathcal{D}(h) = h$. Each element of $X$ falls into exactly one of the two cases and the value in each case is an already determined element of $X$, so by (1) of the recursion theorem there is a function $\mathcal{D} : X \to X$, and by the same (1) there is a function $R : \mathbb{N} \times X \to X$ with $R(j, h) = \mathcal{D}(h)$. By the recursion theorem there is exactly one function $u : \mathbb{N} \to X$ with $u(1) = f$ and $u(j + 1) = \mathcal{D}(u(j))$ for every natural number $j$. This is called the **complex differentiation sequence** of $f$, and we write $u_j = u(j)$. To indicate which function it belongs to, we write $u^f_j$. This name and the symbols $\mathcal{D}$, $u_j$ are used only within this entry. Giving $\mathcal{D}(h) = h$ to an $h$ that is not holomorphic serves only to define $\mathcal{D}$ on all of $X$; the notation below is used only in cases where that value is not used.

**$n$ times complex differentiable and the $k$th derivative.** For an integer $n \ge 0$, $f$ is **$n$ times complex differentiable** exactly when $u_j$ is a holomorphic function for every integer $j$ with $1 \le j \le n$. If $n = 0$ there is no such $j$, so $f$ is always $0$ times complex differentiable. In this course, "$n$ times differentiable" said of a complex function whose domain is an open set of $\mathbb{C}$ has this meaning. If $f$ is $n$ times differentiable and $k$ is an integer with $0 \le k \le n$, then $u_{k+1}$ is called the **$k$th derivative** of $f$ and written $f^{(k)}$. The parentheses in the superscript are not dropped. By (2) below, $f$ is then $k$ times differentiable. **The function symbol $f^{(k)}$ is used only when $f$ is $k$ times differentiable.** The notation for the value at a point is extended by one step in (3). We also write $f''$ for $f^{(2)}$. The symbol $f^{(k)}$ is the same letter as the $k$th derivative of a real-valued function (the entry on higher-order derivatives), but used for a complex function whose domain is an open set of $\mathbb{C}$ it has this meaning. Where both meanings occur together, (8) below reconciles them.

**Infinitely differentiable.** $f$ is **infinitely differentiable** exactly when $f$ is $n$ times differentiable for every integer $n \ge 0$. Then $f^{(k)}$ can be used for every integer $k \ge 0$.

The following hold. Below, $n$, $k$ are integers at least $0$.

1. (The first two derivatives and the recursion) $f^{(0)} = f$. $f$ is $1$ time differentiable exactly when $f$ is a holomorphic function, and then $f^{(1)} = f'$. If $f$ is $n + 1$ times differentiable, then $f^{(n)}$ is a holomorphic function and $f^{(n+1)} = (f^{(n)})'$. In particular, if $f$ is $2$ times differentiable, then $f'$ is a holomorphic function and $f'' = (f')'$.
2. (Raising and lowering the order) $f$ is $n + 1$ times differentiable exactly when $f$ is $n$ times differentiable and $f^{(n)}$ is a holomorphic function. If $f$ is $n$ times differentiable and $k \le n$, then $f$ is $k$ times differentiable.
3. (The next derivative at one point) Suppose $f$ is $n$ times differentiable, $z_0 \in G$, and $f^{(n)}$ is complex differentiable at $z_0$. Then the derivative $(f^{(n)})'(z_0)$ is written $f^{(n+1)}(z_0)$. This notation is used even if $f$ is not $n + 1$ times differentiable, and is not used if $f^{(n)}$ is not complex differentiable at $z_0$. If $f$ is $n + 1$ times differentiable, this number equals the value of the function $f^{(n+1)}$ at $z_0$. If $n = 0$, then $f^{(1)}(z_0) = f'(z_0)$.
4. (Higher derivatives of the derivative) Let $f$ be a holomorphic function. $f$ is $n + 1$ times differentiable exactly when $f'$ is $n$ times differentiable, and then $(f')^{(k)} = f^{(k+1)}$ for every $k$ with $0 \le k \le n$. Moreover, $f$ is infinitely differentiable exactly when $f'$ is infinitely differentiable.
5. (Locality)
   - (i) (Restriction to an open subset) Let $U \subseteq G$ be an open set. If $f$ is $n$ times differentiable, then $f|_U : U \to \mathbb{C}$ is also $n$ times differentiable and $(f|_U)^{(k)} = f^{(k)}|_U$ for every $k$ with $0 \le k \le n$. If $f$ is infinitely differentiable, so is $f|_U$.
   - (ii) (Union of two open sets) If $U_1$, $U_2 \subseteq G$ are open sets with $G = U_1 \cup U_2$ and $f|_{U_1}$, $f|_{U_2}$ are $n$ times differentiable, then $f$ is $n$ times differentiable. Hence if $f|_{U_1}$ and $f|_{U_2}$ are infinitely differentiable, so is $f$.
6. (Constant multiples and sums) Let $g : G \to \mathbb{C}$ be a complex function, $c$ a complex number, and suppose $f$ and $g$ are $n$ times differentiable. Then $cf$ and $f + g$ are $n$ times differentiable, and $(cf)^{(k)} = c f^{(k)}$, $(f + g)^{(k)} = f^{(k)} + g^{(k)}$ for every $k$ with $0 \le k \le n$.
7. (Continuity of lower orders) If $n \ge 1$ and $f$ is $n$ times differentiable, then for every $k$ with $0 \le k \le n - 1$, $f^{(k)}$ is a holomorphic function and is continuous. In particular $f$ is continuous.
8. (Agreement with higher derivatives of a real-valued function) Let $I$ be an interval and $h : I \to \mathbb{R}$ a real-valued function, and suppose $\iota(x) \in G$ and $f(\iota(x)) = \iota(h(x))$ for all $x \in I$. If $f$ is $n$ times differentiable, then $h$ is $n$ times differentiable in the sense of the entry on higher-order derivatives, and $f^{(k)}(\iota(x)) = \iota\bigl(h^{(k)}(x)\bigr)$ for every $k$ with $0 \le k \le n$ and every $x \in I$.
9. (A function equal to its derivative) If $f$ is a holomorphic function and $f' = f$, then $f$ is infinitely differentiable and $f^{(k)} = f$ for every integer $k \ge 0$.
:::

## 직관

정칙함수 $f$의 도함수 $f'$은 다시 $G$ 위의 복소함수이므로, 그것이 정칙함수이면 또 도함수를 얻습니다. 이 일을 되풀이해 얻는 $f, f', (f')', \dots$가 고계 복소 도함수입니다. 정의의 짜임은 실함수의 [[higher-derivative|고계 도함수]]와 같습니다. "미분가능한 함수"가 "정칙함수"로, 구간 $I$가 열린집합 $G$로, 값이 실수에서 복소수로 바뀌었습니다. 계단을 한 칸씩 내려가는 비유도 그대로 씁니다. 칸마다 "지금 함수가 정칙함수인가"를 확인하고, 그렇다면 도함수로 내려갑니다. "$n$번 미분가능"은 처음 $n$번의 확인을 모두 통과했다는 뜻입니다. 비유가 맞지 않는 곳은, 확인에 실패한 칸에서도 반복열이 멈추지 않고 같은 함수를 되풀이한다는 점입니다. 그 값은 기호로 부르지 않으므로 쓰이지 않습니다.

실함수와 다른 점이 하나 있습니다. 실함수의 고계 도함수는 구간의 끝점에서도 한쪽 극한으로 미분계수를 잽니다. 이 항목의 정의역은 열린집합이어서 끝점이 없고, 모든 점에서 그 둘레의 원판 전체로 미분계수를 잽니다. 그래서 (5)의 (i)처럼 열린 부분집합으로 제한해도 도함수가 그대로이고, (5)의 (ii)처럼 두 열린집합에서 따로 확인한 것을 합칠 수 있습니다.

(8)은 실수를 실수로 보내는 복소함수의 고계 도함수가 실수축 위에서 실함수의 고계 도함수와 같다는 것입니다. 실수축을 따라 다가가는 것은 원판의 여러 방향 가운데 하나이므로, 복소 미분가능에서 실함수의 미분가능이 한 단계씩 나옵니다.

## 성질의 증명

:::proof
"복소 미분 (n)"은 [[complex-derivative|복소 미분]], "복소 미분 법칙 (n)"은 [[complex-derivative-rules|복소 미분의 법칙]]의 번호이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다룬다. 귀납은 [[mathematical-induction|수학적 귀납법]]의 시작점이 정해진 꼴이다. 두 함수가 같은 것은 정확히 모든 점에서 값이 같을 때이다([[function]]의 같음).

**복소 미분 반복열의 성질.** $\mathcal{D}$의 정의에 의해 모든 자연수 $j$에서 다음이 성립한다. 이것을 (가)라 부른다.

- (가) $u_j$가 정칙함수이면 $u_{j+1} = \mathcal{D}(u_j) = u_j'$이다.

**2의 증명.** 정수 $j$에 대하여 "$1 \le j \le n + 1$"인 것은 정확히 "$1 \le j \le n$"이거나 "$j = n + 1$"일 때이다((Z5), (Z7)과 (Z1). $j < n + 1$이면 $0 < (n + 1) - j$이므로 $1 \le (n + 1) - j$, 곧 $j \le n$이다). 따라서 $f$가 $n + 1$번 미분가능한 것은 정확히 $1 \le j \le n$에서 $u_j$가 정칙함수이고 $u_{n+1}$이 정칙함수일 때, 곧 $f$가 $n$번 미분가능하고 $f^{(n)} = u_{n+1}$이 정칙함수일 때이다. $k \le n$이고 $1 \le j \le k$이면 $j \le n$이므로((Z6)), $f$가 $n$번 미분가능하면 $k$번 미분가능하다.

**1의 증명.** $f$는 $0$번 미분가능하므로 $f^{(0)} = u_1 = f$이다. 정의에 의해 $f$가 $1$번 미분가능한 것은 정확히 $u_1 = f$가 정칙함수일 때이고, 이때 (가)에 의해 $f^{(1)} = u_2 = f'$이다. $f$가 $n + 1$번 미분가능하면 (2)에 의해 $f$는 $n$번 미분가능하고 $f^{(n)} = u_{n+1}$은 정칙함수이며, (가)에 의해 $f^{(n+1)} = u_{n+2} = u_{n+1}' = (f^{(n)})'$이다. $n = 1$이면 $f^{(1)} = f'$이므로 $f'' = f^{(2)} = (f')'$이다.

**3의 증명.** $f$가 $n$번 미분가능하므로 $f^{(n)}$이 정해지고, 가정에 의해 $(f^{(n)})'(z_0)$이 정해진다. $f$가 $n + 1$번 미분가능하면 (1)에 의해 $f^{(n+1)} = (f^{(n)})'$이므로 그 $z_0$에서의 값은 $(f^{(n)})'(z_0)$이다. $n = 0$이면 (1)에 의해 $f^{(0)} = f$이므로 $f^{(1)}(z_0) = f'(z_0)$이다.

**4의 증명.** $f$가 정칙함수이므로 $f'$은 $X$의 원소이고, $v_j = u^{f'}_j$를 $f'$의 복소 미분 반복열이라 하자. 모든 자연수 $j$에서 $u_{j+1} = v_j$임을 귀납으로 보인다. $j = 1$: (가)에 의해 $u_2 = f' = v_1$이다. $u_{j+1} = v_j$이면 $u_{j+2} = \mathcal{D}(u_{j+1}) = \mathcal{D}(v_j) = v_{j+1}$이다. 이제 $f$가 $n + 1$번 미분가능한 것은 정확히 $u_1 = f$와 $2 \le j \le n + 1$인 $u_j$가 정칙함수일 때인데, $u_1$은 가정에 의해 정칙함수이고 $2 \le j \le n + 1$인 $u_j$는 $1 \le j - 1 \le n$인 $v_{j-1}$이므로, 이것은 정확히 $f'$이 $n$번 미분가능할 때이다. 이때 $0 \le k \le n$에서 $(f')^{(k)} = v_{k+1} = u_{k+2} = f^{(k+1)}$이다. 마지막으로 $f$가 무한 번 미분가능하면 모든 $n$에서 $f$가 $n + 1$번 미분가능하므로 $f'$은 모든 $n$에서 $n$번 미분가능하다. 거꾸로 $f'$이 무한 번 미분가능하면 모든 $n$에서 $f$는 $n + 1$번 미분가능하고, (2)에 의해 $n$번 미분가능하다.

**5의 증명.** (i) $0 \le k \le n$인 $k$에 대한 명제 "$f|_U$는 $k$번 미분가능하고 $(f|_U)^{(k)} = f^{(k)}|_U$"를 $k$에 대한 귀납으로 보인다. $k = 0$이면 (1)에 의해 $(f|_U)^{(0)} = f|_U = f^{(0)}|_U$이다. $k + 1 \le n$이고 $k$에서 명제가 참이라 하자. (2)에 의해 $f$는 $k + 1$번 미분가능하므로, (1)에 의해 $f^{(k)}$는 정칙함수이고 $f^{(k+1)} = (f^{(k)})'$이다. 복소 미분 (4)의 (i)을 $f^{(k)}$와 $U$에 쓰면 $f^{(k)}|_U$는 정칙함수이고 $(f^{(k)}|_U)' = (f^{(k)})'|_U = f^{(k+1)}|_U$이다. 귀납 가정에 의해 $(f|_U)^{(k)} = f^{(k)}|_U$가 정칙함수이므로, (2)에 의해 $f|_U$는 $k + 1$번 미분가능하고 (1)에 의해 $(f|_U)^{(k+1)} = ((f|_U)^{(k)})' = (f^{(k)}|_U)' = f^{(k+1)}|_U$이다. $f$가 무한 번 미분가능하면 앞의 것을 모든 $n$에 쓴다.

(ii) $0 \le k \le n$인 $k$에 대한 명제 "$f$는 $k$번 미분가능하다"를 귀납으로 보인다. $k = 0$이면 정의에 의해 참이다. $k + 1 \le n$이고 $f$가 $k$번 미분가능하다고 하자. $\ell = 1, 2$에서 $U_\ell$은 열린집합이므로 (i)에 의해 $(f|_{U_\ell})^{(k)} = f^{(k)}|_{U_\ell}$이다. 가정에 의해 $f|_{U_\ell}$은 $n$번 미분가능하고 $k + 1 \le n$이므로, (2)와 (1)에 의해 $(f|_{U_\ell})^{(k)}$는 정칙함수이다. 곧 $f^{(k)}|_{U_1}$과 $f^{(k)}|_{U_2}$는 정칙함수이고, 복소 미분 (4)의 (ii)를 $f^{(k)}$에 쓰면 $f^{(k)}$는 정칙함수이다. (2)에 의해 $f$는 $k + 1$번 미분가능하다. 둘째 문장은 첫째 문장을 모든 $n$에 쓴 것이다.

**6의 증명.** $0 \le k \le n$인 $k$에 대한 명제 "$cf$와 $f + g$가 $k$번 미분가능하고 $(cf)^{(k)} = c f^{(k)}$, $(f + g)^{(k)} = f^{(k)} + g^{(k)}$"를 귀납으로 보인다. $k = 0$이면 (1)에 의해 양쪽이 각각 $cf$, $f + g$이다. $k + 1 \le n$이고 $k$에서 참이라 하자. (2)와 (1)에 의해 $f^{(k)}$와 $g^{(k)}$는 정칙함수이고 그 도함수는 $f^{(k+1)}$, $g^{(k+1)}$이다. 복소 미분 법칙 (1)을 각 점에서 쓰면 $c f^{(k)}$와 $f^{(k)} + g^{(k)}$는 정칙함수이고 $(c f^{(k)})' = c f^{(k+1)}$, $(f^{(k)} + g^{(k)})' = f^{(k+1)} + g^{(k+1)}$이다. 귀납 가정에 의해 이 두 함수는 $(cf)^{(k)}$와 $(f + g)^{(k)}$이므로, (2)에 의해 $cf$와 $f + g$는 $k + 1$번 미분가능하고 (1)에 의해 $(cf)^{(k+1)} = c f^{(k+1)}$, $(f + g)^{(k+1)} = f^{(k+1)} + g^{(k+1)}$이다.

**7의 증명.** $0 \le k \le n - 1$이면 $k + 1 \le n$이므로 (2)에 의해 $f$는 $k + 1$번 미분가능하고, (1)에 의해 $f^{(k)}$는 정칙함수이다. 복소 미분 (3)에 의해 $f^{(k)}$는 연속이다. $k = 0$이면 $f^{(0)} = f$이다.

**8의 증명.** $0 \le k \le n$인 $k$에 대한 명제 "$h$는 $k$번 미분가능하고 모든 $x \in I$에서 $f^{(k)}(\iota(x)) = \iota(h^{(k)}(x))$"를 귀납으로 보인다. $k = 0$이면 (1)과 [[higher-derivative]]의 (1)에 의해 $f^{(0)} = f$, $h^{(0)} = h$이므로 가정 그대로이다. $k + 1 \le n$이고 $k$에서 참이라 하자. (2)와 (1)에 의해 $f^{(k)} : G \to \mathbb{C}$는 정칙함수이고 $f^{(k+1)} = (f^{(k)})'$이다. 귀납 가정에 의해 모든 $x \in I$에서 $\iota(x) \in G$이고 $f^{(k)}(\iota(x)) = \iota(h^{(k)}(x))$이므로, 복소 미분 (6)을 $f^{(k)}$와 실함수 $h^{(k)} : I \to \mathbb{R}$에 쓰면, 모든 $c \in I$에서 $f^{(k)}$가 $\iota(c)$에서 복소 미분가능하므로 $h^{(k)}$는 $c$에서 미분가능하고 $(f^{(k)})'(\iota(c)) = \iota\bigl((h^{(k)})'(c)\bigr)$이다. 곧 $h^{(k)}$는 미분가능한 함수이고, [[higher-derivative]]의 (2)에 의해 $h$는 $k + 1$번 미분가능하며 같은 항목의 (1)에 의해 $h^{(k+1)} = (h^{(k)})'$이다. 따라서 모든 $x \in I$에서 $f^{(k+1)}(\iota(x)) = (f^{(k)})'(\iota(x)) = \iota\bigl((h^{(k)})'(x)\bigr) = \iota\bigl(h^{(k+1)}(x)\bigr)$이다.

**9의 증명.** $k$에 대한 명제 "$f$는 $k$번 미분가능하고 $f^{(k)} = f$"를 귀납으로 보인다. $k = 0$이면 (1)이다. $k$에서 참이면 $f^{(k)} = f$는 정칙함수이므로 (2)에 의해 $f$는 $k + 1$번 미분가능하고, (1)과 가정에 의해 $f^{(k+1)} = (f^{(k)})' = f' = f$이다. 모든 $k$에서 $k$번 미분가능하므로 $f$는 무한 번 미분가능하다. $\blacksquare$
:::

## 예시와 반례

:::example[삼차 복소 다항함수의 고계 도함수]
$p(z) = z^3 - 2iz$로 정한 $p : \mathbb{C} \to \mathbb{C}$는 계수가 $a_0 = 0$, $a_1 = -2i$, $a_2 = 0$, $a_3 = 1$인 복소 다항함수입니다. [[complex-derivative-rules|복소 미분의 법칙]]의 (4)의 (iii)을 차례로 쓰면 도함수의 계수는 $(k + 1)\,a_{k+1}$이므로 다음과 같습니다.

- $p'$의 계수는 $1 \cdot a_1 = -2i$, $2a_2 = 0$, $3a_3 = 3$이므로 $p'(z) = 3z^2 - 2i$입니다.
- $p'$의 계수 $-2i$, $0$, $3$에서 $(p')'$의 계수는 $1 \cdot 0 = 0$, $2 \cdot 3 = 6$이므로 $(p')'(z) = 6z$입니다.
- 같은 방법으로 $((p')')'$은 값이 $6$인 상수함수이고, 그 도함수는 끝 번호가 $0$인 표현에서 영함수입니다.

이 함수들이 모두 정칙함수이므로 (2)와 (1)을 차례로 쓰면 $p$는 $4$번 미분가능하고 $p^{(1)} = p'$, $p^{(2)}(z) = 6z$, $p^{(3)}(z) = 6$, $p^{(4)}(z) = 0$입니다. 영함수는 상수함수이므로 [[complex-derivative|복소 미분]]의 (5)에 의해 정칙함수이고 도함수가 다시 영함수이므로, $k \ge 4$에 대한 귀납으로 (2)와 (1)을 쓰면 $p$는 무한 번 미분가능하고 $k \ge 4$에서 $p^{(k)}$는 영함수입니다.
:::

:::counterexample[$0$에서만 미분가능한 $|z|^2$]
$f(z) = |z|^2$(값은 실수인 복소수로 읽는다)로 정한 $f : \mathbb{C} \to \mathbb{C}$를 봅시다. [[complex-differentiability-examples|복소 미분가능하지 않은 함수의 예]]의 (5)에 의해 $f$는 $0$에서 복소 미분가능하고 $f'(0) = 0$이지만, $0$이 아닌 점에서는 복소 미분가능하지 않습니다. 따라서 $f$는 정칙함수가 아니고, (1)에 의해 $f$는 $1$번 미분가능하지 않습니다. 함수 $f^{(1)}$이나 $f'$은 쓰지 않습니다.

그래도 $f$는 $0$번 미분가능하고 $f^{(0)} = f$가 $0$에서 복소 미분가능하므로, (3)의 한 점의 기호로 $f^{(1)}(0) = f'(0) = 0$은 쓸 수 있습니다. 곧 한 점에서의 값 $f^{(n+1)}(z_0)$이 있다는 것만으로는 함수 $f^{(n+1)}$이 있다고 할 수 없습니다. $f$를 열린 공 $B(1, 1/2)$로 제한해도, 이 공의 모든 점이 $0$이 아니므로 제한은 어느 점에서도 복소 미분가능하지 않습니다([[complex-derivative|복소 미분]]의 (4)의 (i)).
:::

## 확인 질문

:::check[$f(z) = (z - i)^4$으로 정한 $f : \mathbb{C} \to \mathbb{C}$에서 $f^{(4)}$와 $f^{(5)}$는 무엇인가?]
$f^{(4)}$는 값이 $24$인 상수함수이고 $f^{(5)}$는 영함수입니다. [[complex-derivative-rules|복소 미분의 법칙]]의 (4)의 (i)과 연쇄법칙 (5)를 $z$에서의 값이 $z - i$인 함수(미분계수가 $1$이다. [[complex-derivative|복소 미분]]의 (5))에 쓰면, 자연수 $k$에서 $z$에서의 값이 $(z - i)^k$인 함수의 도함수는 $z$에서의 값이 $k(z - i)^{k-1}$인 함수입니다. 상수배는 법칙의 (1)입니다. 따라서 $f'(z) = 4(z - i)^3$, $(f')'(z) = 12(z - i)^2$이고, 그다음 도함수의 값은 $24(z - i)$, 그다음은 값이 $24$인 상수함수입니다. 이 함수들이 모두 정칙함수이므로 (2)와 (1)에 의해 $f^{(4)}$는 값이 $24$인 상수함수입니다. 상수함수의 도함수는 영함수이므로([[complex-derivative|복소 미분]]의 (5)) $f^{(5)}$는 영함수입니다.
:::

:::check[$G$가 영역이고 $f : G \to \mathbb{C}$가 $2$번 미분가능하며 $f''$이 영함수이면 $f$는 어떤 함수인가?]
어떤 복소수 $b$, $C$가 있어 모든 $z \in G$에서 $f(z) = bz + C$인 함수입니다. (1)에 의해 $f'$은 정칙함수이고 $(f')' = f''$이 영함수이므로, [[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 (3)에 의해 $f'$은 상수입니다. $G$가 공집합이면 아무 복소수 $b$, $C$나 되고, 그렇지 않으면 $f'$의 값을 $b$라 합니다. $q(z) = bz$로 정한 $q : G \to \mathbb{C}$는 [[complex-derivative|복소 미분]]의 (5)에 의해 정칙함수이고 $q' = f'$이므로, [[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 (4)에 의해 어떤 복소수 $C$가 있어 모든 $z \in G$에서 $f(z) = bz + C$입니다.
:::
