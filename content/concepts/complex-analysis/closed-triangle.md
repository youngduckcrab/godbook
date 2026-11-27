---
title: 닫힌 삼각형
title_en: Closed Triangle
aliases: [삼각형, 닫힌 삼각형의 둘레, 삼각형의 둘레 경로열, closed triangle, triangle, boundary of a triangle]
kind: definition
field: complex-analysis
msc: ["30E20"]
level: undergrad
summary: 세 복소수 a, b, c 의 닫힌 삼각형 Δ(a, b, c) 를 무게가 0 이상인 일차결합 전체로, 그 둘레를 세 선분 경로의 닫힌 경로열 ∂Δ(a, b, c) 로 정의한다. 삼각형이 볼록하고 콤팩트이며 두 점 사이의 거리가 둘레의 길이 이하라는 것, 중점으로 넷으로 나누기, 한 점으로 셋으로 나누기, 꼭짓점 쪽 작은 삼각형 떼어 내기, 퇴화한 삼각형의 둘레 적분이 0 이라는 것, 비퇴화의 조건, 일차함수의 둘레 적분이 0 이라는 것을 함께 진술한다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, open-set-in-metric-space, boundary, subspace-and-continuity, composition-of-continuous-maps, continuous-image-of-compact, complex-finite-sum, complex-number, complex-field, complex-conjugate, modulus-of-complex-number, complex-triangle-inequality, complex-plane-as-metric-space, continuity-of-complex-operations, compact-subsets-of-complex-plane, diameter, path-in-the-complex-plane, path-integral, length-of-path-and-ml-inequality, primitive-and-path-integral]
sources:
  - ref: klazar-complex-derivatives-continuous
    loc: "2절, 직사각형과 그 둘레의 적분의 정의 (k.txt 141–147줄, p.3), Proposition 2.1 의 2.(둘레 p(R)) (151–160줄, p.4), Proposition 2.1 의 3. (162줄, p.4), Proposition 2.2 의 2. 의 증명 첫머리(넷으로 나누기, 212–217줄, p.5), Proposition 2.4 의 증명 (299–312줄, p.6)"
    checked: original
    note: "출처는 꼭짓점 a, b, c, d 를 왼쪽 아래부터 시계 반대 방향으로 늘어놓은 직사각형 R 의 둘레 ∂R 을 네 선분의 합집합으로 두고, 둘레 위의 적분을 네 선분 적분의 합으로 정의하며(141–147줄), 둘레의 길이 p(R) 를 네 변의 길이의 합으로 둔다(160줄). 구르사 논법에서는 맞변의 중점을 잇는 두 선분으로 R 을 넷으로 나누고 그 적분의 합이 R 의 적분이며 각 조각의 둘레가 절반이라는 것을 쓴다(212–217줄). 이 항목은 직사각형 대신 삼각형을 쓰고(지휘자 결정), 둘레를 점의 집합이 아닌 세 선분 경로의 닫힌 경로열 ∂Δ(a, b, c) 로, 둘레의 길이를 그 경로열의 길이 ℓ(∂Δ(a, b, c)) 로 정의한다. (5)의 넷으로 나누기는 세 변의 중점으로 나누는 삼각형판이고, 적분의 등식은 출처처럼 안쪽 선분의 적분이 서로 지워진다는 것으로 보인다. 퇴화한 삼각형(세 점이 한 직선 위)을 정의에서 빼지 않는다. (6)–(9)는 예외점이 있는 판에 쓰는 분해로, 출처는 직사각형을 아홉으로 나누어 Proposition 2.4 의 적분값이 직사각형의 선택에 상관없음을 보이고(Proposition 2.4 의 증명, 299–310줄, p.6), 그 2. 는 직사각형을 a 로 줄여 얻는다(312줄). 반례 '꼭짓점의 순서를 거꾸로 적어 부호가 바뀌는 예'가 쓰는 것, 곧 선분을 거꾸로 지나면 적분의 부호가 바뀐다는 것은 출처 Proposition 2.1 의 3. 의 앞 등식(162줄, p.4)과 같은 내용이다."
  - ref: beck-first-course-complex-analysis
    loc: "연습문제의 볼록 영역의 정의, source/exercises-chap4.ptx:876–890; firstintexample 의 세 경로에서 z̄ 를 적분하는 연습문제와 연습문제 ex_varint, source/exercises-chap4.ptx:106–113, 183–235"
    checked: original
    note: "출처는 영역 G 가 '볼록하다'는 것을 G 의 두 점을 잇는 선분이 G 에 든다는 것으로 정의한다(883–886줄). 이 항목의 (2)의 마지막 문장은 삼각형이 이 뜻으로 볼록하다는 것과 같다. 반례 '꼭짓점의 순서를 거꾸로 적어 부호가 바뀌는 예'의 함수 z̄ 는 출처 연습문제 exercises-chap4.ptx:106–113(firstintexample 의 세 경로에서 z̄ 를 적분하라)과 ex_varint(183–235: 선분과 원에서 x, y, z, z̄ 를 적분하라)의 z̄ 와 같은 함수이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(구르사 증명의 재귀와 어림 통독, 둘레 적분 예 재계산). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산, 함수 $\iota$와 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 켤레는 [[complex-conjugate]], 절댓값은 [[modulus-of-complex-number]]의 것이다. $\mathbb{C}$의 거리와 위상, 콤팩트 부분집합은 [[complex-plane-as-metric-space|복소평면의 거리]]와 [[compact-subsets-of-complex-plane|복소평면의 콤팩트 부분집합]]의 것이고, 지름 $\operatorname{diam}$은 [[diameter]]의 것이다. 선분 경로 $\sigma_{z,w}$, 경로열, 닫힌 경로열과 그 상은 [[path-in-the-complex-plane|경로]]의 것이고, "$K$ 위에서 연속"과 경로열의 경로 적분은 [[path-integral|경로 적분]]의 것이며, 경로열의 길이 $\ell$은 [[length-of-path-and-ml-inequality|경로의 길이와 적분의 어림]]의 것이다.

**닫힌 삼각형.** 복소수 $a$, $b$, $c$에 대하여
$$
\begin{aligned}
&\Delta(a, b, c) \\
&= \{\,a + s(b - a) + t(c - a) : \\
&\qquad s, t \in \mathbb{R},\ 0 \le s,\ 0 \le t, \\
&\qquad s + t \le 1\,\}
\end{aligned}
$$
를 $a$, $b$, $c$의 **닫힌 삼각형**(closed triangle)이라 하고, $a$, $b$, $c$를 그 **꼭짓점**이라 한다. 세 점이 한 직선 위에 있거나 두 점이 같아도 된다. 그런 경우를 **퇴화한** 삼각형이라 부른다(아래 (8), (9)). 이 항목과 뒤 항목에서 괄호 안에 꼭짓점 셋을 적은 $\Delta(a, b, c)$ 꼴은 이 집합을 뜻한다.

**둘레 경로열.** 세 선분 경로의 경로열 $(\sigma_{a,b}, \sigma_{b,c}, \sigma_{c,a})$를 $\partial\Delta(a, b, c)$로 쓰고 $\Delta(a, b, c)$의 **둘레 경로열**이라 한다. 각 선분의 끝점이 다음 선분의 시작점이고 시작점과 끝점이 $a$이므로 이것은 닫힌 경로열이다. 기호 $\partial$는 위상공간의 경계([[boundary]])와 같은 글자이지만 여기서는 순서가 붙은 세 꼭짓점으로 정한 경로열의 이름이다. 둘레 경로열은 집합 $\Delta(a, b, c)$만으로 정해지지 않고 꼭짓점을 적은 순서로 정해진다. $f$가 세 선분의 상 위에서 연속이면 $\int_{\partial\Delta(a, b, c)} f$는 경로열의 경로 적분, 곧 세 선분 경로를 따른 적분의 합이다. **둘레의 길이** $\ell(\partial\Delta(a, b, c))$는 경로열의 길이이고, 경로의 길이와 적분의 어림의 (1)에 의해
$$
\begin{aligned}
&\ell(\partial\Delta(a, b, c)) \\
&\quad = |b - a| + |c - b| + |a - c|
\end{aligned}
$$
이다.

다음이 성립한다. 아래에서 $a$, $b$, $c$는 복소수이고 $\Delta = \Delta(a, b, c)$이며, "$f$가 $\Delta$ 위에서 연속"이라 할 때 $f : S \to \mathbb{C}$이고 $\Delta \subseteq S \subseteq \mathbb{C}$이다.

1. (무게 꼴과 꼭짓점의 순서) 복소수 $z$가 $\Delta(a, b, c)$의 원소인 것은 정확히 $0 \le \lambda_1$, $0 \le \lambda_2$, $0 \le \lambda_3$이고 $\lambda_1 + \lambda_2 + \lambda_3 = 1$인 실수 $\lambda_1$, $\lambda_2$, $\lambda_3$이 있어 $z = \lambda_1 a + \lambda_2 b + \lambda_3 c$일 때이다. 따라서 $a$, $b$, $c \in \Delta$이고, 꼭짓점을 어떤 순서로 적어도 같은 집합이다. 특히 $\Delta(a, b, c) = \Delta(b, c, a)$이고, $\ell(\partial\Delta(b, c, a)) = \ell(\partial\Delta(a, b, c))$이며, 세 변의 상 위에서 연속인 $f$에서 $\int_{\partial\Delta(b, c, a)} f = \int_{\partial\Delta(a, b, c)} f$이다.
2. (볼록) $u$, $v$, $w \in \Delta$이면 $\Delta(u, v, w) \subseteq \Delta$이다. 특히 $u$, $v \in \Delta$이면 선분 경로 $\sigma_{u,v}$의 상은 $\Delta$의 부분집합이다. 따라서 $\partial\Delta$의 세 선분의 상은 $\Delta$의 부분집합이고, $f$가 $\Delta$ 위에서 연속이면 $f$는 그 세 상 위에서 연속이며 $\int_{\partial\Delta} f$가 정해진다.
3. (콤팩트) $\Delta$는 $\mathbb{C}$의 공집합이 아닌 콤팩트 부분집합이다.
4. (두 점 사이의 거리) $z$, $w \in \Delta$이면
   $$
   \begin{aligned}
   |z - w| &\le |b - a| + |c - a| \\
   &\le \ell(\partial\Delta)
   \end{aligned}
   $$
   이다. 따라서 $\operatorname{diam} \Delta \le \ell(\partial\Delta)$이다.
5. (**넷으로 나누기**) $a' = (b + c)/2$, $b' = (c + a)/2$, $c' = (a + b)/2$로 두고
   $$
   \begin{aligned}
   \Delta_1 &= \Delta(a, c', b'), \\
   \Delta_2 &= \Delta(c', b, a'), \\
   \Delta_3 &= \Delta(b', a', c), \\
   \Delta_4 &= \Delta(a', b', c')
   \end{aligned}
   $$
   라 하자. 그러면 $j = 1, 2, 3, 4$에서 $\Delta_j \subseteq \Delta$이고 $\ell(\partial\Delta_j) = \ell(\partial\Delta)/2$이며, $f$가 $\Delta$ 위에서 연속이면
   $$
   \int_{\partial\Delta} f = \sum_{j=1}^{4} \int_{\partial\Delta_j} f
   $$
   이다. 오른쪽의 $\partial\Delta_j$는 위에 적은 꼭짓점의 순서로 정한 둘레 경로열이다.
6. (**한 점으로 셋으로 나누기**) $p \in \Delta$이면 $\Delta(a, b, p)$, $\Delta(b, c, p)$, $\Delta(c, a, p)$는 $\Delta$의 부분집합이고, $f$가 $\Delta$ 위에서 연속이면
   $$
   \begin{aligned}
   \int_{\partial\Delta} f &= \int_{\partial\Delta(a, b, p)} f \\
   &\quad + \int_{\partial\Delta(b, c, p)} f \\
   &\quad + \int_{\partial\Delta(c, a, p)} f
   \end{aligned}
   $$
   이다.
7. (**꼭짓점 쪽 작은 삼각형**) $p$, $b$, $c$가 복소수이고 $0 < \lambda < 1$인 실수 $\lambda$에 대하여 $x = p + \lambda(b - p)$, $y = p + \lambda(c - p)$라 하자. 그러면 $\Delta(p, x, y)$, $\Delta(x, b, c)$, $\Delta(x, c, y)$는 $\Delta(p, b, c)$의 부분집합이고, $\ell(\partial\Delta(p, x, y)) = \lambda\,\ell(\partial\Delta(p, b, c))$이며, $f$가 $\Delta(p, b, c)$ 위에서 연속이면
   $$
   \begin{aligned}
   \int_{\partial\Delta(p, b, c)} f &= \int_{\partial\Delta(p, x, y)} f \\
   &\quad + \int_{\partial\Delta(x, b, c)} f \\
   &\quad + \int_{\partial\Delta(x, c, y)} f
   \end{aligned}
   $$
   이다.
8. (**퇴화한 삼각형**) $0 \le \mu \le 1$인 실수 $\mu$에 대하여 $b = a + \mu(c - a)$이면, $\Delta$ 위에서 연속인 모든 $f$에서 $\int_{\partial\Delta(a, b, c)} f = 0$이다. (1)에 의해 꼭짓점을 순환시킨 $\Delta(b, c, a)$, $\Delta(c, a, b)$에서 가운데 꼭짓점이 나머지 두 꼭짓점을 잇는 선분 위에 있을 때도 같다.
9. (**비퇴화의 조건**) $p$, $b$, $c$가 복소수이고 $u = b - p$, $v = c - p$라 하자.
   - (i) 실수 $s$, $t$에 대하여 $z = p + s u + t v$이면 $\operatorname{Im}\bigl(\overline{u}(z - p)\bigr) = t \operatorname{Im}(\overline{u} v)$이고 $\operatorname{Im}\bigl(\overline{v}(z - p)\bigr) = -s \operatorname{Im}(\overline{u} v)$이다.
   - (ii) $\operatorname{Im}(\overline{u} v) \ne 0$이고 $0 < \lambda < 1$이며 $x$, $y$가 (7)의 것이면, $p \notin \Delta(x, b, c)$이고 $p \notin \Delta(x, c, y)$이다.
   - (iii) $\operatorname{Im}(\overline{u} v) = 0$이면 $\Delta(p, b, c)$ 위에서 연속인 모든 $f$에서 $\int_{\partial\Delta(p, b, c)} f = 0$이다.
10. (일차함수) 복소수 $\alpha$, $\beta$, $z_0$에 대하여 $z$에서의 값이 $\alpha + \beta(z - z_0)$인 함수 $h : \mathbb{C} \to \mathbb{C}$는 $\int_{\partial\Delta} h = 0$을 만족한다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$ and $i$ are as in the entry on complex numbers; the field operations of $\mathbb{C}$, the map $\iota$ and the convention of writing real numbers in place of complex numbers are as in the entry on the complex field; conjugates and moduli are as in their entries. The metric, topology and compact subsets of $\mathbb{C}$ are as in the entries on the metric of the complex plane and compact subsets of the complex plane, and the diameter $\operatorname{diam}$ is as in the entry on diameters. Line segment paths $\sigma_{z,w}$, chains, closed chains and their images are as in the entry on paths; "continuous on $K$" and path integrals along chains are as in the entry on path integrals; the length $\ell$ of a chain is as in the entry on lengths of paths and estimates of integrals.

**Closed triangle.** For complex numbers $a$, $b$, $c$, the set
$$
\begin{aligned}
&\Delta(a, b, c) \\
&= \{\,a + s(b - a) + t(c - a) : \\
&\qquad s, t \in \mathbb{R},\ 0 \le s,\ 0 \le t, \\
&\qquad s + t \le 1\,\}
\end{aligned}
$$
is called the **closed triangle** of $a$, $b$, $c$, and $a$, $b$, $c$ are its **vertices**. The three points may lie on a line and two of them may coincide; such a triangle is called **degenerate** (see (8) and (9) below). In this entry and later entries, the notation $\Delta(a, b, c)$, with three vertices in parentheses, denotes this set.

**Boundary chain.** The chain $(\sigma_{a,b}, \sigma_{b,c}, \sigma_{c,a})$ of three line segment paths is written $\partial\Delta(a, b, c)$ and called the **boundary chain** of $\Delta(a, b, c)$. The terminal point of each segment is the initial point of the next, and the initial and terminal points are $a$, so this is a closed chain. The symbol $\partial$ is the same letter as the boundary of a set in a topological space, but here it is the name of a chain determined by three vertices given in order. The boundary chain is not determined by the set $\Delta(a, b, c)$ alone but by the order in which the vertices are written. If $f$ is continuous on the images of the three segments, then $\int_{\partial\Delta(a, b, c)} f$ is the path integral along the chain, that is, the sum of the integrals along the three segment paths. The **length of the boundary** $\ell(\partial\Delta(a, b, c))$ is the length of the chain, and by (1) of the entry on lengths of paths and estimates of integrals,
$$
\begin{aligned}
&\ell(\partial\Delta(a, b, c)) \\
&\quad = |b - a| + |c - b| + |a - c|.
\end{aligned}
$$

The following hold. Below, $a$, $b$, $c$ are complex numbers and $\Delta = \Delta(a, b, c)$; when we say "$f$ is continuous on $\Delta$", we mean $f : S \to \mathbb{C}$ with $\Delta \subseteq S \subseteq \mathbb{C}$.

1. (Weights and the order of the vertices) A complex number $z$ belongs to $\Delta(a, b, c)$ exactly when there are real numbers $\lambda_1$, $\lambda_2$, $\lambda_3$ with $0 \le \lambda_1$, $0 \le \lambda_2$, $0 \le \lambda_3$ and $\lambda_1 + \lambda_2 + \lambda_3 = 1$ such that $z = \lambda_1 a + \lambda_2 b + \lambda_3 c$. Hence $a$, $b$, $c \in \Delta$, and writing the vertices in any order gives the same set. In particular $\Delta(a, b, c) = \Delta(b, c, a)$, $\ell(\partial\Delta(b, c, a)) = \ell(\partial\Delta(a, b, c))$, and $\int_{\partial\Delta(b, c, a)} f = \int_{\partial\Delta(a, b, c)} f$ for $f$ continuous on the images of the three sides.
2. (Convexity) If $u$, $v$, $w \in \Delta$, then $\Delta(u, v, w) \subseteq \Delta$. In particular, if $u$, $v \in \Delta$, then the image of the line segment path $\sigma_{u,v}$ is a subset of $\Delta$. Hence the images of the three segments of $\partial\Delta$ are subsets of $\Delta$, and if $f$ is continuous on $\Delta$, then $f$ is continuous on those three images and $\int_{\partial\Delta} f$ is defined.
3. (Compactness) $\Delta$ is a nonempty compact subset of $\mathbb{C}$.
4. (Distance between two points) If $z$, $w \in \Delta$, then
   $$
   \begin{aligned}
   |z - w| &\le |b - a| + |c - a| \\
   &\le \ell(\partial\Delta).
   \end{aligned}
   $$
   Hence $\operatorname{diam} \Delta \le \ell(\partial\Delta)$.
5. (**Division into four**) Put $a' = (b + c)/2$, $b' = (c + a)/2$, $c' = (a + b)/2$, and
   $$
   \begin{aligned}
   \Delta_1 &= \Delta(a, c', b'), \\
   \Delta_2 &= \Delta(c', b, a'), \\
   \Delta_3 &= \Delta(b', a', c), \\
   \Delta_4 &= \Delta(a', b', c').
   \end{aligned}
   $$
   Then $\Delta_j \subseteq \Delta$ and $\ell(\partial\Delta_j) = \ell(\partial\Delta)/2$ for $j = 1, 2, 3, 4$, and if $f$ is continuous on $\Delta$, then
   $$
   \int_{\partial\Delta} f = \sum_{j=1}^{4} \int_{\partial\Delta_j} f.
   $$
   Here $\partial\Delta_j$ is the boundary chain determined by the order of the vertices written above.
6. (**Division into three by a point**) If $p \in \Delta$, then $\Delta(a, b, p)$, $\Delta(b, c, p)$, $\Delta(c, a, p)$ are subsets of $\Delta$, and if $f$ is continuous on $\Delta$, then
   $$
   \begin{aligned}
   \int_{\partial\Delta} f &= \int_{\partial\Delta(a, b, p)} f \\
   &\quad + \int_{\partial\Delta(b, c, p)} f \\
   &\quad + \int_{\partial\Delta(c, a, p)} f.
   \end{aligned}
   $$
7. (**Small triangle at a vertex**) Let $p$, $b$, $c$ be complex numbers, and for a real number $\lambda$ with $0 < \lambda < 1$ let $x = p + \lambda(b - p)$ and $y = p + \lambda(c - p)$. Then $\Delta(p, x, y)$, $\Delta(x, b, c)$, $\Delta(x, c, y)$ are subsets of $\Delta(p, b, c)$, $\ell(\partial\Delta(p, x, y)) = \lambda\,\ell(\partial\Delta(p, b, c))$, and if $f$ is continuous on $\Delta(p, b, c)$, then
   $$
   \begin{aligned}
   \int_{\partial\Delta(p, b, c)} f &= \int_{\partial\Delta(p, x, y)} f \\
   &\quad + \int_{\partial\Delta(x, b, c)} f \\
   &\quad + \int_{\partial\Delta(x, c, y)} f.
   \end{aligned}
   $$
8. (**Degenerate triangles**) If $b = a + \mu(c - a)$ for a real number $\mu$ with $0 \le \mu \le 1$, then $\int_{\partial\Delta(a, b, c)} f = 0$ for every $f$ continuous on $\Delta$. By (1), the same holds for the cyclically rotated $\Delta(b, c, a)$, $\Delta(c, a, b)$ when the middle vertex lies on the segment joining the other two.
9. (**Condition for non-degeneracy**) Let $p$, $b$, $c$ be complex numbers and $u = b - p$, $v = c - p$.
   - (i) If $z = p + s u + t v$ for real numbers $s$, $t$, then $\operatorname{Im}\bigl(\overline{u}(z - p)\bigr) = t \operatorname{Im}(\overline{u} v)$ and $\operatorname{Im}\bigl(\overline{v}(z - p)\bigr) = -s \operatorname{Im}(\overline{u} v)$.
   - (ii) If $\operatorname{Im}(\overline{u} v) \ne 0$, $0 < \lambda < 1$, and $x$, $y$ are as in (7), then $p \notin \Delta(x, b, c)$ and $p \notin \Delta(x, c, y)$.
   - (iii) If $\operatorname{Im}(\overline{u} v) = 0$, then $\int_{\partial\Delta(p, b, c)} f = 0$ for every $f$ continuous on $\Delta(p, b, c)$.
10. (Affine functions) For complex numbers $\alpha$, $\beta$, $z_0$, the function $h : \mathbb{C} \to \mathbb{C}$ whose value at $z$ is $\alpha + \beta(z - z_0)$ satisfies $\int_{\partial\Delta} h = 0$.
:::

## 직관

$\Delta(a, b, c)$는 세 점을 꼭짓점으로 하는 삼각형을 그 안쪽까지 채운 것입니다. 무게 꼴((1))로 보면, 세 꼭짓점에 $0$ 이상의 무게를 합이 $1$이 되게 나눠 얹었을 때의 무게중심 전체입니다. 둘레 경로열은 꼭짓점을 적은 순서대로 $a \to b \to c \to a$로 한 바퀴 도는 길입니다. 같은 삼각형이라도 순서를 거꾸로 적으면 반대로 돌기 때문에, 이 이름은 집합만이 아니라 순서에 붙습니다.

나누기의 등식들((5)–(7))은 모두 같은 원리입니다. 조각들의 둘레를 다 더하면 안쪽에 그은 선분은 두 조각에서 서로 반대 방향으로 한 번씩 지나므로 그 적분이 지워지고([[path-integral|경로 적분]]의 (2)), 바깥 변은 쪼개진 선분을 이어 붙인 것이라 원래 변의 적분이 됩니다(같은 항목의 (3)). 그래서 큰 삼각형의 둘레 적분은 조각들의 둘레 적분의 합입니다. 넷으로 나누면 조각의 둘레는 원래의 절반이 됩니다.

세 꼭짓점이 한 직선 위에 있으면 삼각형은 선분(두 점이 같으면 선분이나 점)이 되고, 둘레 경로열은 그 선분을 갔다가 되돌아오는 길이라 적분이 $0$입니다((8)). 꼭짓점이 한 직선 위에 있지 않다는 것은 (9)의 $\operatorname{Im}(\overline{u} v) \ne 0$로 적을 수 있고, 그때는 점이 $p + su + tv$로 쓰이는 방법이 하나뿐이어서 $s + t$가 큰 조각이 꼭짓점 $p$를 품을 수 없습니다((9)의 (ii)). 이 분해들은 [[primitive-and-path-integral|복소 원시함수와 경로 적분]]과 함께 구르사 논법의 재료가 됩니다.

## 증명

:::proof
"경로 (n)", "적분 (n)", "길이 (n)"은 [[path-in-the-complex-plane|경로]], [[path-integral|경로 적분]], [[length-of-path-and-ml-inequality|경로의 길이와 적분의 어림]]의 번호이다. 복소수의 덧셈과 곱셈의 결합·교환·분배법칙은 [[complex-field]]의 (1)(체)이고, 실수의 계산과 순서는 [[real-number-arithmetic]], [[real-order-axioms]], [[order-properties-of-reals]]의 것이다.

**둘레의 길이.** 길이 (1)에 의해 $\ell(\sigma_{z,w}) = |w - z|$이고, 경로열의 길이는 각 경로의 길이의 합이다.

**1의 증명.** $z = a + s(b - a) + t(c - a)$이면 체의 계산으로 $z = (1 - s - t)a + sb + tc$이므로 $\lambda_1 = 1 - s - t$, $\lambda_2 = s$, $\lambda_3 = t$로 두면 세 수는 $0$ 이상이고 합이 $1$이다. 거꾸로 그런 $\lambda_i$가 있으면 $\lambda_1 = 1 - \lambda_2 - \lambda_3$이므로 $z = a + \lambda_2(b - a) + \lambda_3(c - a)$이고, $0 \le \lambda_2$, $0 \le \lambda_3$, $\lambda_2 + \lambda_3 = 1 - \lambda_1 \le 1$이다. 무게 꼴의 조건은 세 꼭짓점의 순서를 바꿔도 그대로이므로(무게를 같이 바꿔 적는다) 집합이 같다. $a$는 무게 $(1, 0, 0)$, $b$는 $(0, 1, 0)$, $c$는 $(0, 0, 1)$이다. $\partial\Delta(b, c, a) = (\sigma_{b,c}, \sigma_{c,a}, \sigma_{a,b})$는 같은 세 경로를 다른 순서로 늘어놓은 것이므로, 경로열의 길이와 적분은 같은 세 수의 합을 다른 순서로 더한 것이고 덧셈의 교환·결합법칙에 의해 같다.

**2의 증명.** $u = \alpha_1 a + \alpha_2 b + \alpha_3 c$, $v = \beta_1 a + \beta_2 b + \beta_3 c$, $w = \gamma_1 a + \gamma_2 b + \gamma_3 c$를 (1)의 무게 꼴이라 하고, $z \in \Delta(u, v, w)$를 (1)에 의해 $z = \mu_1 u + \mu_2 v + \mu_3 w$($\mu_k \ge 0$, 합 $1$)로 쓰자. 그러면 $z = \kappa_1 a + \kappa_2 b + \kappa_3 c$이고 $\kappa_1 = \mu_1\alpha_1 + \mu_2\beta_1 + \mu_3\gamma_1$이며 $\kappa_2$, $\kappa_3$도 같은 꼴이다. $0$ 이상인 실수의 곱과 합은 $0$ 이상이므로 $\kappa_i \ge 0$이고, $\kappa_1 + \kappa_2 + \kappa_3 = \mu_1(\alpha_1 + \alpha_2 + \alpha_3) + \mu_2(\cdots) + \mu_3(\cdots) = \mu_1 + \mu_2 + \mu_3 = 1$이다. 따라서 $z \in \Delta$이다. $0 \le t \le 1$이면 경로 (2)에 의해 $\sigma_{u,v}(t) = u + t(v - u)$이고 이것은 $\Delta(u, v, u)$의 정의에서 $s = t$, 둘째 수를 $0$으로 둔 점이므로 $\Delta(u, v, u) \subseteq \Delta$에 든다. 세 변은 $u$, $v$를 꼭짓점으로 둔 경우이다. 마지막 문장: $K \subseteq \Delta$이면 $f|_K = (f|_\Delta)|_K$이므로 [[subspace-and-continuity]]의 (2)에 의해 연속이다.

**3의 증명.** $Q = \{\zeta \in \mathbb{C} : 0 \le \operatorname{Re}\zeta,\ 0 \le \operatorname{Im}\zeta,\ \operatorname{Re}\zeta + \operatorname{Im}\zeta \le 1\}$로 두자. $\zeta \in Q$이면 [[modulus-of-complex-number|절댓값]]의 (6)에 의해 $|\zeta| \le |\operatorname{Re}\zeta| + |\operatorname{Im}\zeta| = \operatorname{Re}\zeta + \operatorname{Im}\zeta \le 1$이므로 $Q$는 유계이다. $Q$는 닫힌집합이다: $\zeta \notin Q$이면 $\operatorname{Re}\zeta < 0$, $\operatorname{Im}\zeta < 0$, $\operatorname{Re}\zeta + \operatorname{Im}\zeta > 1$ 가운데 하나가 성립한다. 그 실수의 차 $g$(각각 $-\operatorname{Re}\zeta$, $-\operatorname{Im}\zeta$, $\operatorname{Re}\zeta + \operatorname{Im}\zeta - 1$)는 양수이고, $|\zeta' - \zeta| < g/2$이면 절댓값의 (6)에 의해 $\operatorname{Re}\zeta'$와 $\operatorname{Im}\zeta'$이 각각 $\operatorname{Re}\zeta$, $\operatorname{Im}\zeta$와 $g/2$ 미만으로 다르므로 같은 부등식이 $\zeta'$에서도 성립한다(셋째 경우는 두 차의 합이 $g$ 미만이다). 곧 $\mathbb{C} - Q$는 열린집합이고 [[open-set-in-metric-space]]의 정의에 의해 $Q$는 닫힌집합이다. [[compact-subsets-of-complex-plane|복소평면의 콤팩트 부분집합]]의 (1)에 의해 $Q$는 콤팩트이다. $\psi(\zeta) = a + \operatorname{Re}\zeta\,(b - a) + \operatorname{Im}\zeta\,(c - a)$로 정한 $\psi : \mathbb{C} \to \mathbb{C}$는 [[continuity-of-complex-operations|복소수 연산의 연속]]의 (2)($\operatorname{Re}$, $\operatorname{Im}$, $\iota$, 상수함수, 항등함수)와 [[composition-of-continuous-maps|연속함수의 합성]]의 (1)로 $\zeta$에서의 값이 $\iota(\operatorname{Re}\zeta)$, $\iota(\operatorname{Im}\zeta)$인 두 함수가 연속이므로 같은 항목의 (3)(합, 곱)에 의해 연속이고, $\zeta = s + ti$로 두면 $\zeta \in Q$인 것은 정확히 $s$, $t$가 정의의 조건을 만족할 때이므로([[complex-field]]의 (4)) $\psi(Q) = \Delta$이다. [[continuous-image-of-compact|콤팩트 집합의 연속 상]]의 (1)에 의해 $\Delta$는 콤팩트이고, $a \in \Delta$이다.

**4의 증명.** $z = a + s(b - a) + t(c - a)$, $w = a + s'(b - a) + t'(c - a)$이면 $z - w = (s - s')(b - a) + (t - t')(c - a)$이고, $0 \le s, s' \le 1$이므로 $|s - s'| \le 1$, 마찬가지로 $|t - t'| \le 1$이다([[absolute-value]]의 (7)). [[complex-triangle-inequality|복소수의 삼각부등식]]의 (2)와 절댓값의 (5)에 의해 $|z - w| \le |b - a| + |c - a|$이다. $|c - a| = |a - c|$이고 $0 \le |c - b|$이므로 이것은 $\ell(\partial\Delta)$ 이하이다. [[diameter]]의 (2)의 (iii)에 의해 $\operatorname{diam}\Delta \le \ell(\partial\Delta)$이다($\Delta$는 (3)에 의해 공집합이 아니고, (4)의 부등식에 의해 유계이다).

**5의 증명.** 중점은 (1)의 무게 $\tfrac{1}{2}$, $\tfrac{1}{2}$로 $\Delta$에 들므로 (2)에 의해 $\Delta_j \subseteq \Delta$이다. 변마다 $c' - a = (b - a)/2$, $b' - c' = (c - b)/2$, $a - b' = (a - c)/2$이고 $\Delta_2$, $\Delta_3$, $\Delta_4$의 세 변도 각각 $\pm(b - a)/2$, $\pm(c - b)/2$, $\pm(a - c)/2$이다. 절댓값의 (5)와 (2)에 의해 각 둘레의 길이는 $\ell(\partial\Delta)/2$이다. 오른쪽의 열두 선분 적분 가운데 $\sigma_{c',b'}$($\Delta_1$)와 $\sigma_{b',c'}$($\Delta_4$), $\sigma_{a',c'}$($\Delta_2$)와 $\sigma_{c',a'}$($\Delta_4$), $\sigma_{b',a'}$($\Delta_3$)와 $\sigma_{a',b'}$($\Delta_4$)는 경로 (4)와 적분 (2)에 의해 합이 각각 $0$이다. 남는 것은 $\sigma_{a,c'}$와 $\sigma_{c',b}$, $\sigma_{b,a'}$와 $\sigma_{a',c}$, $\sigma_{c,b'}$와 $\sigma_{b',a}$이다. $c' = a + \tfrac{1}{2}(b - a)$, $a' = b + \tfrac{1}{2}(c - b)$, $b' = c + \tfrac{1}{2}(a - c)$이므로 적분 (3)(선분 쪼개기, $\lambda = \tfrac{1}{2}$)에 의해 각 쌍의 합은 $\int_{\sigma_{a,b}} f$, $\int_{\sigma_{b,c}} f$, $\int_{\sigma_{c,a}} f$이다. 모든 선분의 상은 (2)에 의해 $\Delta$의 부분집합이므로 $f$는 그 위에서 연속이다. 덧셈의 교환·결합법칙으로 모아 등식을 얻는다.

**6의 증명.** (1)과 (2)에 의해 세 삼각형은 $\Delta$의 부분집합이다. 오른쪽은 아홉 선분 적분 $\sigma_{a,b}, \sigma_{b,p}, \sigma_{p,a}, \sigma_{b,c}, \sigma_{c,p}, \sigma_{p,b}, \sigma_{c,a}, \sigma_{a,p}, \sigma_{p,c}$의 합이고, $\sigma_{b,p}$와 $\sigma_{p,b}$, $\sigma_{c,p}$와 $\sigma_{p,c}$, $\sigma_{p,a}$와 $\sigma_{a,p}$는 적분 (2)에 의해 지워진다. 남는 셋이 $\partial\Delta$이다.

**7의 증명.** $x$와 $y$는 (1)의 무게 $(1 - \lambda, \lambda, 0)$, $(1 - \lambda, 0, \lambda)$로 $\Delta(p, b, c)$에 드므로 (2)에 의해 세 삼각형은 그 부분집합이다. $x - p = \lambda(b - p)$, $y - x = \lambda(c - b)$, $p - y = \lambda(p - c)$이므로 절댓값의 (5)에 의해 둘레의 길이는 $\lambda\,\ell(\partial\Delta(p, b, c))$이다. 오른쪽의 아홉 선분 가운데 $\sigma_{x,y}$와 $\sigma_{y,x}$, $\sigma_{c,x}$와 $\sigma_{x,c}$는 적분 (2)에 의해 지워진다. $x = p + \lambda(b - p)$이므로 적분 (3)에 의해 $\int_{\sigma_{p,x}} f + \int_{\sigma_{x,b}} f = \int_{\sigma_{p,b}} f$이고, $y = c + (1 - \lambda)(p - c)$이므로 같은 (3)을 $1 - \lambda$에 쓰면 $\int_{\sigma_{c,y}} f + \int_{\sigma_{y,p}} f = \int_{\sigma_{c,p}} f$이다. 남는 $\sigma_{b,c}$와 함께 $\partial\Delta(p, b, c)$의 적분이 된다.

**8의 증명.** 적분 (3)을 $z = a$, $w = c$, $\lambda = \mu$에 쓰면 $p = b$이고 $\int_{\sigma_{a,b}} f + \int_{\sigma_{b,c}} f = \int_{\sigma_{a,c}} f$이며, 적분 (2)에 의해 $\int_{\sigma_{c,a}} f = -\int_{\sigma_{a,c}} f$이다. 세 상은 (2)에 의해 $\Delta$에 든다. 합은 $0$이다. 마지막 문장은 (1)이다.

**9의 증명.** (i) 체의 계산으로 $\overline{u}(z - p) = s\,\overline{u}u + t\,\overline{u}v$이다. 절댓값의 (2)에 의해 $\overline{u}u = |u|^2$은 실수인 복소수이므로 [[complex-field]]의 (2)의 (ii)에 의해 허수부는 $t \operatorname{Im}(\overline{u}v)$이다. 같은 방법으로 $\operatorname{Im}(\overline{v}(z - p)) = s \operatorname{Im}(\overline{v}u)$이고, [[complex-conjugate|켤레복소수]]의 (1), (2)에 의해 $\overline{v}u = \overline{\overline{u}v}$이므로 $\operatorname{Im}(\overline{v}u) = -\operatorname{Im}(\overline{u}v)$이다.

(ii) $\eta = \operatorname{Im}(\overline{u}v) \ne 0$이라 하자. $\Delta(x, b, c)$의 점 $z$를 (1)로 $z = \nu_1 x + \nu_2 b + \nu_3 c$라 하면 $x = p + \lambda u$, $b = p + u$, $c = p + v$이므로 $z = p + su + tv$이고 $s = \lambda\nu_1 + \nu_2$, $t = \nu_3$이다. 따라서 $s + t = \lambda\nu_1 + \nu_2 + \nu_3 \ge \lambda(\nu_1 + \nu_2 + \nu_3) = \lambda > 0$이다($\lambda < 1$). $z = p$이면 (i)에 의해 $0 = t\eta$이고 $0 = -s\eta$이므로 $s = t = 0$인데, 이것은 $s + t > 0$과 어긋난다. $\Delta(x, c, y)$의 점은 $y = p + \lambda v$이므로 $s = \lambda\nu_1$, $t = \nu_2 + \lambda\nu_3$이고 같은 방법으로 $s + t \ge \lambda$이다.

(iii) $u = 0$이면 $b = p = p + 0 \cdot (c - p)$이므로 (8)이다. $u \ne 0$이면 $\overline{u}v$는 허수부가 $0$이므로 [[complex-field]]의 (2)의 (iii)에 의해 실수 $m = \operatorname{Re}(\overline{u}v)$를 옮긴 것이고, $k = m\,|u|^{-2}$로 두면 $u\overline{u} = |u|^2$에서 $v = k u$이다. (가) $k \ge 1$이면 $b = p + k^{-1}(c - p)$이고 $0 < k^{-1} \le 1$이므로 (8)을 $(p, b, c)$에 쓴다. (나) $0 \le k < 1$이면 $c = b + (1 - k)(p - b)$이고 $0 < 1 - k \le 1$이므로 (8)을 순서 $(b, c, p)$에 쓰고 (1)로 $\partial\Delta(p, b, c)$로 옮긴다. (다) $k < 0$이면 $p - c = -ku$, $b - c = (1 - k)u$이므로 $p = c + \mu(b - c)$, $\mu = -k(1 - k)^{-1}$이고 $0 < \mu < 1$이다. (8)을 순서 $(c, p, b)$에 쓰고 (1)을 두 번 쓴다. 어느 경우든 삼각형의 집합은 (1)에 의해 $\Delta(p, b, c)$와 같으므로 $f$는 그 위에서 연속이다.

**10의 증명.** $\partial\Delta$는 닫힌 경로열이므로 [[primitive-and-path-integral|복소 원시함수와 경로 적분]]의 (4)의 (iii)에 의해($a$ 대신 $z_0$) $\int_{\partial\Delta} h = 0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[Δ(0, 4, 4i) 를 넷으로 나누기]
$a = 0$, $b = 4$, $c = 4i$이면 중점은 $a' = 2 + 2i$, $b' = 2i$, $c' = 2$입니다. 네 조각은 $\Delta(0, 2, 2i)$, $\Delta(2, 4, 2 + 2i)$, $\Delta(2i, 2 + 2i, 4i)$, $\Delta(2 + 2i, 2i, 2)$이고, 원래 둘레의 길이는 $4 + |4i - 4| + 4 = 8 + 4\sqrt{2}$, 각 조각의 둘레의 길이는 $4 + 2\sqrt{2}$입니다($|4i - 4|^2 = 32$이고 $\sqrt{32} = 4\sqrt{2}$). 넷째 조각의 둘레 경로열은 $2 + 2i \to 2i \to 2 \to 2 + 2i$로, 나머지 셋과 맞닿는 세 선분을 그 셋과 반대 방향으로 지납니다.
:::

:::counterexample[꼭짓점의 순서를 거꾸로 적어 부호가 바뀌는 예]
$f(z) = \overline{z}$는 [[continuity-of-complex-operations|복소수 연산의 연속]]의 (2)에 의해 연속입니다. $\partial\Delta(0, 1, i)$를 따라 적분하면, $\sigma_{0,1}(t) = t$에서 $\int_0^1 t\,dt = \tfrac{1}{2}$, $\sigma_{1,i}(t) = (1 - t) + ti$에서 피적분함수가 $((1 - t) - ti)(i - 1) = (2t - 1) + i$이므로 $i$, $\sigma_{i,0}(t) = (1 - t)i$에서 피적분함수가 $(-(1 - t)i)(-i) = -(1 - t)$이므로 $-\tfrac{1}{2}$이고, 합은 $i$입니다. 같은 집합 $\Delta(0, i, 1)$의 둘레 경로열 $(\sigma_{0,i}, \sigma_{i,1}, \sigma_{1,0})$은 세 선분을 뒤집은 것이므로 [[path-integral|경로 적분]]의 (2)에 의해 적분이 $-i$입니다. 둘레 경로열은 집합만으로 정해지지 않습니다.
:::

## 확인 질문

:::check[$1 + i$는 $\Delta(0, 2, 2i)$의 원소인가?]
$1 + i = 0 \cdot 0 + \tfrac{1}{2} \cdot 2 + \tfrac{1}{2} \cdot 2i$이므로 (1)의 무게 $(0, \tfrac{1}{2}, \tfrac{1}{2})$로 원소입니다. 무게 하나가 $0$이므로 $2$와 $2i$를 잇는 변 위의 점입니다.
:::

:::check[$p = 0$, $b = 1 + i$, $c = -2 - 2i$이면 (9)의 $\operatorname{Im}(\overline{u}v)$는 얼마이고, $\int_{\partial\Delta(p, b, c)} f$에 대해 무엇을 알 수 있는가?]
$\overline{u}v = (1 - i)(-2 - 2i) = -2 - 2i + 2i + 2i^2 = -4$이므로 허수부는 $0$입니다. (9)의 (iii)에 의해 $\Delta(0, 1 + i, -2 - 2i)$ 위에서 연속인 모든 $f$에서 둘레 적분은 $0$입니다. 실제로 $k = -2 < 0$이어서 $p = 0$이 $b$와 $c$를 잇는 선분 위에 있습니다.
:::
