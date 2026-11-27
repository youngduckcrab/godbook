---
title: 경로 적분
title_en: Path Integral
aliases: [복소 경로 적분, 선적분, 경로를 따른 적분, contour integral, path integral, complex line integral, integral along a path]
kind: definition
field: complex-analysis
msc: ["30"]
level: undergrad
summary: "C¹ 경로 γ 의 상을 포함하는 집합 위의 함수 f 가 상 위에서 연속이면, f(γ(t))γ′(t) 의 적분으로 γ 를 따른 f 의 경로 적분을 정하고, 경로열에서는 그 합으로 정한다. 선형성과 상 위의 값만으로 정해진다는 것, 뒤집기, 선분 쪼개기, 상수의 적분과 상수 경로, 일차 재매개화, 이어 붙인 경로열, 평행이동, 원 경로 위의 적분의 꼴을 함께 진술한다."
requires: [function, function-composition, recursion-theorem, interval, real-number-arithmetic, order-properties-of-reals, continuous-map, subspace-topology, subspace-and-continuity, composition-of-continuous-maps, complex-number, complex-field, complex-plane-as-metric-space, continuity-of-complex-operations, complex-finite-sum, derivative-of-complex-valued-function, integral-of-complex-valued-function, properties-of-integral-of-complex-valued-function, fundamental-theorem-for-complex-valued-functions, path-in-the-complex-plane]
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Definition and Basic Properties 절의 경로 적분의 정의, Example firstintexample, 재매개화와 Proposition prop_integrationIsIndependentOfParametrization, Proposition intprop 의 (a)(b)(c)와 그 증명, source/sec_intdef.ptx:26–153, 175–236, 301–414"
    checked: original
    note: "출처의 정의(26–71)는 매끄러운 경로 γ 와 'γ 위에서 연속인' 복소함수 f 에 ∫_γ f := ∫_a^b f(γ(t))γ′(t) dt 로 두고, 조각마다 매끄러운 경로에서는 조각의 적분의 합으로 둔다. 이 항목의 정의도 같은 식이고, '상 위에서 연속'을 상에 부분공간 위상을 준 제한의 연속으로 정했다. f 가 상 위에서만 정의되어도 된다(S = 상). 출처 Proposition intprop 의 (a) 선형성, (b) ∫_{−γ} f = −∫_γ f, (c) 이은 경로의 적분(301–339)은 이 항목의 (1), (2), (6)과 같은 내용이다. 출처의 (b)의 증명(364–387)은 치환 s = a + b − t 이고 이 항목의 (2)의 증명과 같다. 출처의 (c)의 증명(390–414)은 이은 경로를 한 매개화로 만들고 '두 번째 조각이 γ₂ 의 재매개화'라고 적는데, 이 항목은 경로열의 적분을 합으로 정의하므로 그 단계가 필요 없다. 출처 Proposition prop_integrationIsIndependentOfParametrization(186–199)은 증가하는 조각마다 매끄러운 재매개화 일반에 대한 것이고 증명은 연습문제(exercises-chap4.ptx:339–358)로 남긴다. 이 항목의 (5)는 일차 재매개화만 진술하고 증명한다. 출처의 재매개화 예(200–228: e^{it} 와 e^{2πi sin t})는 일차가 아니다. 예시 '선분 위의 z̄ 의 적분'은 출처 Example firstintexample(72–153: 0 에서 1 + i 로의 선분, 포물선, 꺾인 길 위의 z̄²)와 같은 발상이고, 함수 z̄ 는 출처 연습문제 exercises-chap4.ptx:106–113(z̄ 를 firstintexample 의 세 경로에서 적분하라)과 연습문제 ex_varint(183–235: 0 에서 1 − i 로의 선분 등에서 z̄ 를 적분하라)의 함수이며, 경로 σ_{1,i} 는 연습문제 exercises-chap4.ptx:236–279(exp(3z) 를 1 에서 i 로의 선분에서 적분하라)의 경로와 같다. 예시 '같은 끝점, 다른 경로'는 firstintexample 이 같은 두 끝점 사이의 세 경로에서 값이 다름을 보이고 그것을 적는 것(166–169)과 같은 발상이다."
  - ref: klazar-complex-derivatives-continuous
    loc: "2절, 선분 위의 적분의 정의와 Proposition 2.1 의 3. (k.txt 127–162줄, p.3–4)"
    checked: original
    note: "출처는 선분 위의 적분을 코시 합의 극한으로 정의하고, Proposition 2.1 의 3.(p.4)에서 ∫_{a,b} f = −∫_{b,a} f 와, c 가 선분 위의 점이면 ∫_{a,b} f = ∫_{a,c} f + ∫_{c,b} f 라고 적는다. 이 항목은 경로 적분을 매개화의 적분으로 정의하고, (2)와 (3)은 그 두 성질과 같은 내용이다. 증명은 출처와 달리 일차 치환으로 한다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(원 경로의 길이, 상수 경로, 길이로 나누지 않는 어림). 독립 검토 없음."
added: 2026-11-27
---

:::statement
C¹ 경로, 시작점, 끝점, 상, 상수 경로, 선분 경로 $\sigma_{z,w}$, 원 경로 $\gamma_{a,r}$, 뒤집은 경로 $\gamma^-$, 평행이동 $\gamma + c$, 경로열과 그 상은 [[path-in-the-complex-plane|경로]]의 것이고, 실변수 복소수값 함수의 도함수는 [[derivative-of-complex-valued-function|실변수 복소수값 함수의 미분]], 복소수값 함수의 적분과 방향 있는 적분은 [[integral-of-complex-valued-function|복소수값 함수의 적분]]의 것이다. 복소수와 $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 복소수의 유한 합은 [[complex-finite-sum]]의 것이다. $\mathbb{C}$에는 [[complex-plane-as-metric-space|복소평면의 거리]]와 그 거리위상을 주고, $\mathbb{C}$의 부분집합에는 부분공간 위상([[subspace-topology]])을 준다. 연속은 [[continuous-map|위상공간 사이의 연속함수]]의 것이다.

**상 위에서 연속.** $K \subseteq S \subseteq \mathbb{C}$이고 $f : S \to \mathbb{C}$라 하자. $f$가 **$K$ 위에서 연속**이라는 것은 정확히 제한 $f|_K : K \to \mathbb{C}$가 연속일 때이다. $f : S \to \mathbb{C}$가 연속이면 $S$의 모든 부분집합 $K$ 위에서 연속이다([[subspace-and-continuity]]의 (2)).

**경로 적분.** $\gamma : [a, b] \to \mathbb{C}$를 C¹ 경로, $K = \gamma([a, b])$를 그 상이라 하고, $K \subseteq S \subseteq \mathbb{C}$이며 $f : S \to \mathbb{C}$가 $K$ 위에서 연속이라 하자. 그러면 $t$에서의 값이 $f(\gamma(t))\,\gamma'(t)$인 함수 $[a, b] \to \mathbb{C}$는 연속이고 적분가능하다(아래 증명). 복소수
$$
\int_\gamma f = \int_a^b f(\gamma(t))\,\gamma'(t)\,dt
$$
를 $\gamma$를 따른 $f$의 **경로 적분**(path integral)이라 하고 $\int_\gamma f(z)\,dz$로도 쓴다. 글자 $z$는 이 기호 안에서만 쓰는 이름이고, "$\int_\gamma (z\text{에 대한 식})\,dz$"는 $S$의 각 $z$에서의 값이 그 식인 함수의 경로 적분을 뜻한다. $S = K$여도 된다.

**경로열의 경로 적분.** $\Gamma = (\gamma_1, \dots, \gamma_k)$가 경로열이고, $\Gamma$의 상이 $S$의 부분집합이며 $f : S \to \mathbb{C}$가 모든 $j$에서 $\gamma_j$의 상 위에서 연속이면
$$
\int_\Gamma f = \sum_{j=1}^{k} \int_{\gamma_j} f
$$
로 정한다. $k = 1$이면 $\int_{(\gamma_1)} f = \int_{\gamma_1} f$이다. 두 경로열 $\Gamma = (\gamma_1, \dots, \gamma_k)$와 $\Delta = (\delta_1, \dots, \delta_l)$에서 $\Gamma$의 끝점이 $\Delta$의 시작점이면, $(\gamma_1, \dots, \gamma_k, \delta_1, \dots, \delta_l)$도 경로열이고 이것을 $\Gamma$와 $\Delta$를 **이은 경로열**이라 한다.

다음이 성립한다. 아래에서 $\gamma : [a, b] \to \mathbb{C}$는 C¹ 경로, $K$는 그 상이고, $f, g : S \to \mathbb{C}$는 $K$ 위에서 연속이며($K \subseteq S$), $c$는 복소수이다.

1. (선형성과 상 위의 값) $f + g$, $f - g$, $cf$는 $K$ 위에서 연속이고
   $$
   \begin{gathered}
   \int_\gamma (f + g) = \int_\gamma f + \int_\gamma g, \\
   \int_\gamma (f - g) = \int_\gamma f - \int_\gamma g, \\
   \int_\gamma cf = c \int_\gamma f
   \end{gathered}
   $$
   이다. $K \subseteq S'$이고 $h : S' \to \mathbb{C}$가 $K$의 모든 점에서 $f$와 같은 값을 가지면 $h$도 $K$ 위에서 연속이고 $\int_\gamma h = \int_\gamma f$이다. 경로열에서도 같다.
2. (뒤집기) $\int_{\gamma^-} f = -\int_\gamma f$이다. 특히 복소수 $z$, $w$에 대하여 $\sigma_{z,w}$의 상 위에서 연속인 $f$에서 $\int_{\sigma_{w,z}} f = -\int_{\sigma_{z,w}} f$이다.
3. (**선분 쪼개기**) $z$, $w$가 복소수이고 $0 \le \lambda \le 1$인 실수 $\lambda$에 대하여 $p = z + \lambda(w - z)$라 하자. $\sigma_{z,p}$와 $\sigma_{p,w}$의 상은 $\sigma_{z,w}$의 상의 부분집합이고, $f$가 $\sigma_{z,w}$의 상 위에서 연속이면
   $$
   \int_{\sigma_{z,w}} f = \int_{\sigma_{z,p}} f + \int_{\sigma_{p,w}} f
   $$
   이다. 곧 경로열 $(\sigma_{z,p}, \sigma_{p,w})$를 따른 적분은 $\int_{\sigma_{z,w}} f$와 같다.
4. (상수와 상수 경로) $\int_\gamma c\,dz = c\,\bigl(\gamma(b) - \gamma(a)\bigr)$이다. 특히 $\int_{\sigma_{z,w}} c\,dz = c(w - z)$이고 $\int_{\sigma_{z,w}} 1\,dz = w - z$이며, 닫힌 경로 $\gamma$에서는 $\int_\gamma c\,dz = 0$이다. $\gamma$가 상수 경로이면 $K$ 위에서 연속인 모든 $f$에서 $\int_\gamma f = 0$이다.
5. (일차 재매개화) $c_1 < d_1$이고 $m$, $k$가 실수이며 $0 < m$, $m c_1 + k = a$, $m d_1 + k = b$라 하자. 그러면 $s$에서의 값이 $\gamma(ms + k)$인 함수 $\gamma \circ h : [c_1, d_1] \to \mathbb{C}$($h(s) = ms + k$)는 상이 $K$인 C¹ 경로이고 $\int_{\gamma \circ h} f = \int_\gamma f$이다.
6. (이은 경로열) $\Gamma$와 $\Delta$를 이은 경로열을 $\Lambda$라 하고, $f$가 그 경로들의 상 위에서 모두 연속이면 $\int_\Lambda f = \int_\Gamma f + \int_\Delta f$이다.
7. (평행이동) $f : S \to \mathbb{C}$가 $K + c = \{z + c : z \in K\}$ 위에서 연속이면($K + c \subseteq S$), $\gamma + c$의 상은 $K + c$이고, $S - c = \{z - c : z \in S\}$ 위에서 $z$에서의 값이 $f(z + c)$인 함수는 $K$ 위에서 연속이며
   $$
   \int_{\gamma + c} f(z)\,dz = \int_\gamma f(z + c)\,dz
   $$
   이다.
8. (원 경로 위의 적분) 복소수 $a_0$과 양의 실수 $r$에 대하여 $f$가 $\gamma_{a_0,r}$의 상 위에서 연속이면
   $$
   \begin{aligned}
   &\int_{\gamma_{a_0,r}} f \\
   &\quad = \int_0^{2\pi} f\bigl(a_0 + r\exp(it)\bigr) \\
   &\qquad\qquad \cdot i r \exp(it)\,dt
   \end{aligned}
   $$
   이다.
:::

:::english
C¹ paths, initial and terminal points, images, constant paths, segment paths $\sigma_{z,w}$, circle paths $\gamma_{a,r}$, reversed paths $\gamma^-$, translations $\gamma + c$, chains of paths and their images are those of the entry on paths; derivatives of complex-valued functions of a real variable and integrals and oriented integrals of complex-valued functions are those of their entries. Complex numbers, $i$, the operations of the field $\mathbb{C}$, the convention of writing real numbers in place of complex numbers, and finite sums of complex numbers are those of their entries. $\mathbb{C}$ carries the metric of the complex plane and its metric topology, subsets of $\mathbb{C}$ carry the subspace topology, and continuity is that of the entry on continuous maps between topological spaces.

**Continuity on the image.** Let $K \subseteq S \subseteq \mathbb{C}$ and $f : S \to \mathbb{C}$. $f$ is **continuous on $K$** exactly when the restriction $f|_K : K \to \mathbb{C}$ is continuous. If $f : S \to \mathbb{C}$ is continuous, it is continuous on every subset $K$ of $S$ (item (2) of the entry on subspaces and continuity).

**Path integrals.** Let $\gamma : [a, b] \to \mathbb{C}$ be a C¹ path with image $K = \gamma([a, b])$, let $K \subseteq S \subseteq \mathbb{C}$, and let $f : S \to \mathbb{C}$ be continuous on $K$. Then the function $[a, b] \to \mathbb{C}$ with value $f(\gamma(t))\,\gamma'(t)$ at $t$ is continuous and integrable (proved below). The complex number
$$
\int_\gamma f = \int_a^b f(\gamma(t))\,\gamma'(t)\,dt
$$
is the **path integral** of $f$ along $\gamma$, also written $\int_\gamma f(z)\,dz$. The letter $z$ is a name used only inside this symbol, and "$\int_\gamma (\text{an expression in } z)\,dz$" means the path integral of the function whose value at each $z$ in $S$ is that expression. $S = K$ is allowed.

**Path integrals along chains.** If $\Gamma = (\gamma_1, \dots, \gamma_k)$ is a chain of paths whose image is a subset of $S$ and $f : S \to \mathbb{C}$ is continuous on the image of $\gamma_j$ for every $j$, we set
$$
\int_\Gamma f = \sum_{j=1}^{k} \int_{\gamma_j} f.
$$
If $k = 1$, then $\int_{(\gamma_1)} f = \int_{\gamma_1} f$. For two chains $\Gamma = (\gamma_1, \dots, \gamma_k)$ and $\Delta = (\delta_1, \dots, \delta_l)$ such that the terminal point of $\Gamma$ is the initial point of $\Delta$, $(\gamma_1, \dots, \gamma_k, \delta_1, \dots, \delta_l)$ is also a chain of paths, called the **joined chain** of $\Gamma$ and $\Delta$.

The following hold. Below, $\gamma : [a, b] \to \mathbb{C}$ is a C¹ path with image $K$, $f, g : S \to \mathbb{C}$ are continuous on $K$ (with $K \subseteq S$), and $c$ is a complex number.

1. (Linearity and values on the image) $f + g$, $f - g$, $cf$ are continuous on $K$ and
   $$
   \begin{gathered}
   \int_\gamma (f + g) = \int_\gamma f + \int_\gamma g, \\
   \int_\gamma (f - g) = \int_\gamma f - \int_\gamma g, \\
   \int_\gamma cf = c \int_\gamma f.
   \end{gathered}
   $$
   If $K \subseteq S'$ and $h : S' \to \mathbb{C}$ takes the same values as $f$ at all points of $K$, then $h$ is also continuous on $K$ and $\int_\gamma h = \int_\gamma f$. The same holds for chains.
2. (Reversal) $\int_{\gamma^-} f = -\int_\gamma f$. In particular, for complex numbers $z$, $w$ and $f$ continuous on the image of $\sigma_{z,w}$, $\int_{\sigma_{w,z}} f = -\int_{\sigma_{z,w}} f$.
3. (**Splitting a segment**) Let $z$, $w$ be complex numbers, $\lambda$ a real number with $0 \le \lambda \le 1$, and $p = z + \lambda(w - z)$. The images of $\sigma_{z,p}$ and $\sigma_{p,w}$ are subsets of the image of $\sigma_{z,w}$, and if $f$ is continuous on the image of $\sigma_{z,w}$, then
   $$
   \int_{\sigma_{z,w}} f = \int_{\sigma_{z,p}} f + \int_{\sigma_{p,w}} f.
   $$
   That is, the integral along the chain $(\sigma_{z,p}, \sigma_{p,w})$ equals $\int_{\sigma_{z,w}} f$.
4. (Constants and constant paths) $\int_\gamma c\,dz = c\,\bigl(\gamma(b) - \gamma(a)\bigr)$. In particular $\int_{\sigma_{z,w}} c\,dz = c(w - z)$, $\int_{\sigma_{z,w}} 1\,dz = w - z$, and $\int_\gamma c\,dz = 0$ for a closed path $\gamma$. If $\gamma$ is a constant path, then $\int_\gamma f = 0$ for every $f$ continuous on $K$.
5. (Affine reparametrization) Let $c_1 < d_1$ and let $m$, $k$ be real numbers with $0 < m$, $m c_1 + k = a$, $m d_1 + k = b$. Then the function $\gamma \circ h : [c_1, d_1] \to \mathbb{C}$ ($h(s) = ms + k$) with value $\gamma(ms + k)$ at $s$ is a C¹ path with image $K$, and $\int_{\gamma \circ h} f = \int_\gamma f$.
6. (Joined chains) If $\Lambda$ is the joined chain of $\Gamma$ and $\Delta$ and $f$ is continuous on the images of all its paths, then $\int_\Lambda f = \int_\Gamma f + \int_\Delta f$.
7. (Translation) If $f : S \to \mathbb{C}$ is continuous on $K + c = \{z + c : z \in K\}$ (with $K + c \subseteq S$), then the image of $\gamma + c$ is $K + c$, the function on $S - c = \{z - c : z \in S\}$ with value $f(z + c)$ at $z$ is continuous on $K$, and
   $$
   \int_{\gamma + c} f(z)\,dz = \int_\gamma f(z + c)\,dz.
   $$
8. (Integrals over circle paths) For a complex number $a_0$ and a positive real number $r$, if $f$ is continuous on the image of $\gamma_{a_0,r}$, then
   $$
   \begin{aligned}
   &\int_{\gamma_{a_0,r}} f \\
   &\quad = \int_0^{2\pi} f\bigl(a_0 + r\exp(it)\bigr) \\
   &\qquad\qquad \cdot i r \exp(it)\,dt.
   \end{aligned}
   $$
:::

## 직관

경로 적분은 점이 경로를 따라 움직이는 동안 "그 자리의 $f$의 값 × 그 순간의 움직임"을 쌓은 것입니다. $\gamma'(t)$가 움직임의 빠르기와 방향을 함께 담고 있으므로, 같은 선분을 반대로 지나면 모든 순간의 움직임이 반대가 되어 적분의 부호가 바뀝니다((2)). 선분을 중간의 한 점에서 나누어 두 번에 걸어도 쌓이는 양은 같습니다((3)). 점이 멈춰 있으면 움직임이 $0$이므로 쌓이는 것이 없습니다((4)).

적분은 $f$의 상 위의 값만 씁니다. 그래서 $f$가 상 밖에서 정의되지 않아도 되고, 상 위에서 값이 같은 두 함수는 적분이 같습니다((1)). 경로를 고르는 방식(매개화)을 일차함수로 바꾸어도 적분이 같다는 것이 (5)입니다. 일차가 아닌 매개화의 변경은 이 항목에서 다루지 않습니다.

## 증명

:::idea
정의의 피적분함수의 연속은 공역을 상으로 줄인 $\gamma$와 $f|_K$의 합성이다. (2), (3), (5)는 일차 치환을, (4)는 미적분의 기본정리 첫째 꼴을, (1)과 (6)은 적분과 유한 합의 선형성을 쓴다.
:::

:::hint
(3)에서 $\sigma_{z,p}(t) = \sigma_{z,w}(\lambda t)$이고 $\sigma_{p,w}(t) = \sigma_{z,w}(\lambda + (1 - \lambda)t)$입니다.
:::

:::proof
"경로 (n)", "미분 (n)", "적분 정의 (n)", "적분 성질 (n)", "기본정리 (n)"은 [[path-in-the-complex-plane|경로]], [[derivative-of-complex-valued-function]], [[integral-of-complex-valued-function]], [[properties-of-integral-of-complex-valued-function]], [[fundamental-theorem-for-complex-valued-functions]]의 번호이다.

**정의의 피적분함수.** 모든 $t$에서 $\gamma(t) \in K$이므로 [[subspace-and-continuity]]의 (3)의 (i)에 의해 공역을 $K$로 줄인 $\gamma_K : [a, b] \to K$는 연속이다(경로 (1)에 의해 $\gamma$는 연속). [[function-composition|합성]]의 값에 의해 $t$에서의 값이 $f(\gamma(t))$인 함수는 $f|_K \circ \gamma_K$이고, 연속함수의 합성이므로 연속이다([[composition-of-continuous-maps|연속함수의 합성]]의 (1)). 경로 (1)에 의해 $\gamma'$은 연속이므로 [[continuity-of-complex-operations|복소수 연산의 연속]]의 (3)에 의해 두 함수의 곱은 연속이고, 적분 정의 (3)에 의해 적분가능하다.

**1의 증명.** $K$의 모든 점에서 $(f + g)|_K = f|_K + g|_K$이고 $(cf)|_K = c\,(f|_K)$이므로 [[continuity-of-complex-operations]]의 (3)에 의해 연속이다. 피적분함수는 $f(\gamma(t))\gamma'(t) + g(\gamma(t))\gamma'(t)$(체의 분배법칙)와 $c\,f(\gamma(t))\gamma'(t)$이므로 적분 성질 (1)이 등식을 준다. $h$: $h|_K = f|_K$이므로 연속이고, 피적분함수가 모든 $t$에서 같아 적분이 같다. 경로열에서는 [[complex-finite-sum]]의 (4)로 더한다.

**2의 증명.** $G(s) = f(\gamma(s))\,\gamma'(s)$로 두면 정의의 논법에 의해 $G : [a, b] \to \mathbb{C}$는 연속이다. 경로 (4)에 의해 $\gamma^-$의 상은 $K$이고
$$
\begin{aligned}
&f(\gamma^-(t))\,(\gamma^-)'(t) \\
&\quad = (-1)\,G(-t + a + b)
\end{aligned}
$$
이다. 기본정리 (3)의 일차 치환을 $m = -1$, $k = a + b$, $I = [a, b]$에 쓰면($t \in [a, b]$이면 $-t + a + b \in [a, b]$)
$$
\int_{\gamma^-} f = \int_b^a G = -\int_a^b G = -\int_\gamma f
$$
이다(적분 정의 (4)의 (i)). 둘째 문장은 경로 (4)의 $(\sigma_{z,w})^- = \sigma_{w,z}$이다.

**3의 증명.** $u = w - z$로 두면 $p - z = \lambda u$이고 $w - p = (1 - \lambda)u$이므로, $0 \le t \le 1$에서
$$
\begin{aligned}
\sigma_{z,p}(t) &= z + t\lambda u = \sigma_{z,w}(\lambda t), \\
\sigma_{p,w}(t) &= z + \bigl(\lambda + (1 - \lambda)t\bigr) u \\
&= \sigma_{z,w}\bigl(\lambda + (1 - \lambda)t\bigr)
\end{aligned}
$$
이다. $0 \le \lambda t \le 1$이고 $\lambda \le \lambda + (1 - \lambda)t \le 1$이므로([[order-properties-of-reals|순서 성질]]의 (4)의 (iii)과 (2)) 두 상은 $\sigma_{z,w}$의 상에 든다. 경로 (2)에 의해 $\sigma_{z,p}' = \lambda u$, $\sigma_{p,w}' = (1 - \lambda)u$이다. $G(s) = f(\sigma_{z,w}(s))\,u$로 두면 $G : [0, 1] \to \mathbb{C}$는 연속이고, 두 피적분함수는 $\lambda\,G(\lambda t)$와 $(1 - \lambda)\,G(\lambda + (1 - \lambda)t)$이다. 기본정리 (3)의 일차 치환을 $(m, k) = (\lambda, 0)$과 $(1 - \lambda, \lambda)$, $I = [0, 1]$에 쓰면
$$
\int_{\sigma_{z,p}} f = \int_0^\lambda G, \qquad \int_{\sigma_{p,w}} f = \int_\lambda^1 G
$$
이고, 적분 정의 (4)의 (iii)을 세 점 $0$, $\lambda$, $1$에 쓰면 합이 $\int_0^1 G = \int_{\sigma_{z,w}} f$이다. $\lambda = 0$이나 $\lambda = 1$이어도 그대로이다(그때 한쪽은 상수 경로이고 적분은 $0$이다).

**4의 증명.** 상수 $c$의 피적분함수는 $c\,\gamma'(t)$이고, 미분 (4)에 의해 $c\gamma$의 도함수이다. 기본정리 (1)에 의해 $\int_a^b (c\gamma)' = c\gamma(b) - c\gamma(a)$이다. 선분은 경로 (2)의 시작점과 끝점을 넣은 것이다. 상수 경로이면 미분 (9)에 의해 $\gamma' = 0$이므로 피적분함수가 $0$이고 적분 정의 (5)에 의해 적분이 $0$이다.

**5의 증명.** $h$는 $[c_1, d_1]$을 $[a, b]$로 보낸다($c_1 \le s \le d_1$이면 $0 < m$이라 $a \le ms + k \le b$). 미분 (6)의 마지막 문장에 의해 $\gamma \circ h$는 연속미분가능하고 도함수의 값은 $m\gamma'(ms + k)$이다. $h$는 $[c_1, d_1]$에서 $[a, b]$ 위로의 전사이므로(값 $x$에 $s = (x - k)/m$) 상은 $K$이다. $G(x) = f(\gamma(x))\gamma'(x)$로 두면 피적분함수는 $m\,G(ms + k)$이고, 기본정리 (3)의 일차 치환에 의해 $\int_{c_1}^{d_1} m\,G(ms + k)\,ds = \int_a^b G = \int_\gamma f$이다.

**6의 증명.** [[complex-finite-sum]]의 (3)(쪼개기와 첨자 옮기기)을 정의의 합에 쓴다.

**7의 증명.** 경로 (5)에 의해 $\gamma + c$는 C¹ 경로이고 도함수는 $\gamma'$이며, 상은 정의에 의해 $K + c$이다. $\tau(z) = z + c$로 정한 $\tau : K \to K + c$는 [[continuity-of-complex-operations]]의 (3)과 [[subspace-and-continuity]]의 (2), (3)에 의해 연속이므로 $z$에서의 값이 $f(z + c)$인 함수의 $K$ 위의 제한은 $f|_{K + c} \circ \tau$이고 연속이다. 두 적분의 피적분함수는 모두 $f(\gamma(t) + c)\,\gamma'(t)$이다.

**8의 증명.** 경로 (3)의 도함수를 정의에 넣은 것이다. $\blacksquare$
:::

## 예시와 반례

:::example[선분 위의 z̄ 의 적분]
$f(z) = \overline{z}$는 [[continuity-of-complex-operations|복소수 연산의 연속]]의 (2)에 의해 연속입니다. $1$에서 $i$로 가는 선분 $\sigma_{1,i}(t) = 1 + t(i - 1)$에서 $\overline{\sigma_{1,i}(t)} = (1 - t) - ti$이고 $\sigma_{1,i}' = i - 1$이므로 피적분함수는
$$
\bigl((1 - t) - ti\bigr)(i - 1) = (2t - 1) + i
$$
입니다. $\int_0^1 (2t - 1)\,dt = 0$이므로 $\int_{\sigma_{1,i}} \overline{z}\,dz = i$입니다.
:::

:::example[같은 끝점, 다른 경로]
$1$에서 $0$을 거쳐 $i$로 가는 경로열 $(\sigma_{1,0}, \sigma_{0,i})$를 봅시다. $\sigma_{1,0}(t) = 1 - t$, $\sigma_{1,0}' = -1$이므로 $\int_{\sigma_{1,0}} \overline{z}\,dz = \int_0^1 -(1 - t)\,dt = -1/2$이고, $\sigma_{0,i}(t) = ti$, $\overline{ti} = -ti$, $\sigma_{0,i}' = i$이므로 $\int_{\sigma_{0,i}} \overline{z}\,dz = \int_0^1 (-ti)(i)\,dt = \int_0^1 t\,dt = 1/2$입니다. 합은 $0$이고, 앞 예시의 $i$와 다릅니다. 끝점이 같아도 경로에 따라 경로 적분이 다를 수 있습니다.
:::

:::counterexample[상 위에서 연속이 아닌 함수]
$f(z) = 1$($\operatorname{Re} z \le 1/2$), $f(z) = 0$($\operatorname{Re} z > 1/2$)으로 정한 $f : \mathbb{C} \to \mathbb{C}$를 봅시다. $\sigma_{0,1}$의 상의 점 $1/2$에서 $f$의 값은 $1$이지만, $1/2$보다 크고 $1$ 이하인 상의 점에서는 값이 $0$이므로 $f|_K$는 $1/2$에서 연속이 아닙니다([[continuity-of-complex-operations|복소수 연산의 연속]]의 (6)의 (i)을 $\varepsilon = 1/2$에). 이 항목의 정의는 상 위에서 연속인 함수에만 경로 적분을 정하므로 $\int_{\sigma_{0,1}} f$는 정의되지 않습니다.
:::

## 확인 질문

:::check[$\int_{\sigma_{2,2+3i}} 5\,dz$는?]
(4)에 의해 $5\bigl((2 + 3i) - 2\bigr) = 15i$입니다.
:::

:::check[$f$가 $\sigma_{0,4}$의 상 위에서 연속이면 $\int_{\sigma_{0,1}} f + \int_{\sigma_{1,4}} f$와 $\int_{\sigma_{4,0}} f$의 관계는?]
(3)을 $\lambda = 1/4$($p = 1$)에 쓰면 앞의 합은 $\int_{\sigma_{0,4}} f$이고, (2)에 의해 $\int_{\sigma_{4,0}} f = -\int_{\sigma_{0,4}} f$이므로 둘의 합은 $0$입니다.
:::
