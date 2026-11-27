---
written_by: Claude
status: reviewed
sources:
  - ref: judson-abstract-algebra
    loc: "22.4절 Exercises, 연습문제 1 (b), 3 (p.289) — 문제 '부분체 위의 벡터공간으로 본 체'의 3과 같은 발상(유한체의 부분체의 원소 개수가 전체의 원소 개수의 거듭제곱근이어야 한다는 것. 출처는 [GF(128) : GF(16)] 와 GF(p³⁰) 의 부분체를 묻는다)"
added: 2026-11-27
---

:::exercise[법 2의 정수 위의 세 벡터가 생성하는 부분공간]
$\mathbb{Z}_2^3$에서 $v_1 = ([1], [1], [0])$, $v_2 = ([0], [1], [1])$, $v_3 = ([1], [0], [1])$이라 하자.

1. $v_1, v_2, v_3$은 $\mathbb{Z}_2$ 위에서 일차종속이고 $v_1, v_2$는 일차독립임을 보여라.
2. $W = \operatorname{span}_{\mathbb{Z}_2}(v_1, v_2, v_3)$의 차원과 원소의 개수를 구하고, 원소를 모두 적어라.
:::

:::solution
$2$는 소수이므로 $\mathbb{Z}_2$는 체이고([[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3)) $|\mathbb{Z}_2| = 2$이다. $\mathbb{Z}_2^3$의 합과 스칼라배는 성분마다 계산한다([[vector-space-over-a-field|체 위의 벡터공간]]의 (3)).

1. $v_1 + v_2 = ([1], [2], [1]) = ([1], [0], [1]) = v_3$이다. 따라서 $v_1 + v_2 + v_3 = v_3 + v_3 = ([2], [0], [2]) = 0$이고, 계수 $[1], [1], [1]$은 $[0]$이 아니므로 [[span-and-independence-over-a-field|체 위의 생성과 일차독립]]의 정의에 의해 $v_1, v_2, v_3$은 일차종속이다. 한편 스칼라 $\alpha$, $\beta$에 대하여 $\alpha v_1 + \beta v_2 = (\alpha,\ \alpha + \beta,\ \beta)$이고, 이것이 영벡터이면 첫째와 셋째 성분에서 $\alpha = \beta = [0]$이다. 그래서 $v_1, v_2$는 일차독립이다.

2. $v_3 = v_1 + v_2 \in \operatorname{span}_{\mathbb{Z}_2}(v_1, v_2)$이므로 생성과 일차독립의 (2)의 (iv)에 의해 $W = \operatorname{span}_{\mathbb{Z}_2}(v_1, v_2)$이다. $W$는 부분공간이고(같은 항목의 (2)의 (i)), (5)에 의해 $v_1, v_2$는 벡터공간 $W$에서도 일차독립이며 $W$를 생성하므로 $W$의 기저이다([[basis-over-a-field|체 위의 기저와 좌표]]의 정의). [[dimension-over-a-field|체 위의 차원]]의 (4)에 의해 $\dim_{\mathbb{Z}_2} W = 2$이고, [[number-of-elements-of-finite-vector-space|유한체 위 벡터공간의 원소 개수]]의 (3)에 의해 $|W| = 2^2 = 4$이다. 원소는 $\alpha, \beta \in \{[0], [1]\}$에 대한 $\alpha v_1 + \beta v_2$이므로
   $$
   \begin{aligned}
   &([0], [0], [0]), \\
   &v_1 = ([1], [1], [0]), \\
   &v_2 = ([0], [1], [1]), \\
   &v_3 = ([1], [0], [1])
   \end{aligned}
   $$
   이다.
:::

:::exercise[법 3의 정수 위의 평면에 있는 1차원 부분공간]
$\mathbb{Z}_3^2$의 부분공간 가운데 $\mathbb{Z}_3$ 위에서 $1$차원인 것을 모두 구하고, 그 개수가 $4$임을 보여라.
:::

:::solution
$\mathbb{Z}_3$은 체이다([[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3)). [[finite-sums-in-a-ring|환의 유한 합]]의 (1)에 의해 길이 $1$인 열 $w$의 일차결합은 $\alpha w$이므로 $\operatorname{span}_{\mathbb{Z}_3}(w) = \{[0]w, [1]w, [2]w\} = \{0, w, [2]w\}$이다([[vector-space-over-a-field|체 위의 벡터공간]]의 (1)의 (i)과 정의의 (iv)).

*1차원 부분공간의 꼴.* $W$가 $1$차원인 부분공간이면 [[dimension-over-a-field|체 위의 차원]]의 (4)에 의해 $W$에 길이 $1$인 기저 $w$가 있고, $W = \operatorname{span}_{\mathbb{Z}_3}(w)$이며 [[span-and-independence-over-a-field|체 위의 생성과 일차독립]]의 (3)의 (iii)과 (5)에 의해 $w \ne 0$이다. 거꾸로 $w \ne 0$이면 $\operatorname{span}_{\mathbb{Z}_3}(w)$는 부분공간이고(같은 항목의 (2)의 (i)), 길이 $1$인 열 $w$는 일차독립이며 이 부분공간을 생성하므로 그 기저이고, 따라서 이 부분공간은 $1$차원이다. 곧 $1$차원 부분공간은 정확히 영이 아닌 $w$에 대한 $\operatorname{span}_{\mathbb{Z}_3}(w)$이다.

*모두 적기.* $\mathbb{Z}_3^2$의 원소 $9$개 가운데 영벡터가 아닌 것은 $8$개이다([[number-of-elements-of-finite-vector-space|유한체 위 벡터공간의 원소 개수]]의 (2)). 각각에 대하여 $[2]w$를 성분마다 구하면 $[2]([1], [0]) = ([2], [0])$, $[2]([0], [1]) = ([0], [2])$, $[2]([1], [1]) = ([2], [2])$, $[2]([1], [2]) = ([2], [4]) = ([2], [1])$이고, $[2][2] = [4] = [1]$이므로 $[2]([2]w) = w$이다. 따라서 $8$개의 생성은 다음 넷 가운데 하나이다.
$$
\begin{aligned}
L_1 &= \{0,\ ([1], [0]),\ ([2], [0])\}, \\
L_2 &= \{0,\ ([0], [1]),\ ([0], [2])\}, \\
L_3 &= \{0,\ ([1], [1]),\ ([2], [2])\}, \\
L_4 &= \{0,\ ([1], [2]),\ ([2], [1])\}
\end{aligned}
$$
이 넷은 영벡터가 아닌 원소가 서로 달라 서로 다른 집합이다. 그래서 $1$차원 부분공간은 $L_1, L_2, L_3, L_4$의 정확히 $4$개이다. 각각의 원소가 $3 = 3^1$개인 것은 원소 개수의 (3)과 맞는다.
:::

:::exercise[앞에서부터 누적한 합의 열]
$F$가 체이고 $V$가 $F$ 위의 벡터공간이며, $v_1, \dots, v_n$이 일차독립인 열이라 하자($n \ge 0$). $k \in \{1, \dots, n\}$마다 $w_k = \sum_{j=1}^{k} v_j$로 둔다. 열 $w_1, \dots, w_n$이 일차독립이고 $\operatorname{span}_F(w_1, \dots, w_n) = \operatorname{span}_F(v_1, \dots, v_n)$임을 보여라.
:::

:::solution
$U = \operatorname{span}_F(v_1, \dots, v_n)$으로 둔다. $n = 0$이면 두 열은 빈 열이고, 빈 열은 일차독립이며 두 생성은 모두 $\{0_V\}$이다([[span-and-independence-over-a-field|체 위의 생성과 일차독립]]의 정의). 이제 $n \ge 1$이라 하자.

*두 생성이 같다.* $w_k$는 $j \le k$에서 계수 $1$, $j > k$에서 계수 $0$인 $v$의 일차결합이므로([[vector-space-over-a-field|체 위의 벡터공간]]의 (4)의 (v)와 [[finite-sums-in-a-ring|환의 유한 합]]의 (4)) $w_k \in U$이다. 거꾸로 유한 합의 (1)에 의해 $v_1 = w_1$이고, $2 \le k \le n$이면 유한 합의 (2)에 의해 $w_k = w_{k-1} + v_k$이므로 $v_k = w_k - w_{k-1}$이다. 곧 모든 $v_k$가 $\operatorname{span}_F(w_1, \dots, w_n)$에 속한다. 생성과 일차독립의 (2)의 (iii)을 두 방향으로 쓰면 두 생성은 같다.

*일차독립.* $U$는 부분공간이고(생성과 일차독립의 (2)의 (i)), (5)에 의해 $v_1, \dots, v_n$은 벡터공간 $U$에서 일차독립이고 $U$를 생성하므로 $U$의 기저이다. [[dimension-over-a-field|체 위의 차원]]의 (4)에 의해 $U$는 유한차원이고 $\dim_F U = n$이다. 앞 문단에 의해 길이 $n$인 열 $w_1, \dots, w_n$의 항은 $U$에 속하고 $U$를 생성하므로, [[basis-extension-over-a-field|기저로 늘리기와 줄이기]]의 (3)에 의해 $U$의 기저이다. 특히 $U$에서 일차독립이고, 생성과 일차독립의 (5)에 의해 $V$에서도 일차독립이다.
:::

:::exercise[부분체 위의 벡터공간으로 본 체]
$E$가 체이고 $K$가 $E$의 부분체라 하자.

1. $E$의 덧셈과, $(c, v) \in K \times E$에 $E$에서의 곱 $cv$를 대응시키는 함수를 스칼라배로 하여 $E$가 $K$ 위의 벡터공간임을 보여라.
2. $E$가 유한집합이면 $K$도 유한집합이고, $|E| = |K|^n$인 $0$ 이상인 정수 $n$이 있음을 보여라.
3. 원소가 $8$개인 체에는 원소가 $4$개인 부분체가 없음을 보여라.
:::

:::solution
1. [[ring|환]]의 정의에 의해 $(E, +)$는 아벨군이다. $E$의 곱셈 $E \times E \to E$를 $K \times E$로 [[adding-or-removing-an-element|제한]]한 것이 주어진 함수 $K \times E \to E$이다. [[subfield|부분체]]의 (3)의 (i)에 의해 $K$에서의 합과 곱, $1$은 $E$에서의 것과 같다. $\alpha, \beta \in K$와 $u, v \in E$에 대하여 [[vector-space-over-a-field|체 위의 벡터공간]]의 스칼라배의 조건을 확인한다. (i) $\alpha(\beta v) = (\alpha\beta)v$는 $E$의 곱셈의 결합법칙이다. (ii) $(\alpha + \beta)v = \alpha v + \beta v$와 (iii) $\alpha(u + v) = \alpha u + \alpha v$는 $E$의 분배법칙이다. (iv) $K$의 $1$은 $E$의 단위원이므로 $1v = v$이다. 따라서 $E$는 $K$ 위의 벡터공간이다.

2. $K \subseteq E$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $K$는 유한집합이다. 1의 벡터공간 $E$는 유한집합이므로 [[number-of-elements-of-finite-vector-space|유한체 위 벡터공간의 원소 개수]]의 (4)에 의해 $K$ 위에서 유한차원이고, $n = \dim_K E$로 두면 $|E| = |K|^n$이다.

3. $E$가 원소가 $8$개인 체이고 $K$가 원소가 $4$개인 부분체라 하자. 2에 의해 $8 = 4^n$인 $0$ 이상인 정수 $n$이 있다. [[prime-power-divisors|소수의 거듭제곱인 약수]]의 (1)의 (iii)에 의해 $4^n = (2^2)^n = 2^{2n}$이고 $8 = 2^3$이므로 $2^{2n} = 2^3$이다. $2$는 소수이므로 같은 항목의 (2)에 의해 $2n = 3$이다. 그러면 $3$이 짝수가 되는데 $3 = 2 \cdot 1 + 1$은 홀수이고, [[even-and-odd|짝수와 홀수]]에서 받아들인 사실에 의해 짝수이면서 홀수인 정수는 없다. 이것은 모순이므로 그런 부분체는 없다.
:::

:::exercise[유한체 위의 동차 연립일차방정식의 해의 개수]
$F$가 원소가 $q$개인 체이고 $m$, $n$이 $m > n$인 자연수이며, $k \in \{1, \dots, n\}$과 $j \in \{1, \dots, m\}$의 쌍마다 $a_{k,j} \in F$가 정해져 있다고 하자. 모든 $k \in \{1, \dots, n\}$에서 $\sum_{j=1}^{m} a_{k,j} x_j = 0$인 $x \in F^m$ 전체의 집합을 $S$라 하자.

1. $|S| = q^d$인 자연수 $d$가 있음을 보여라.
2. $F = \mathbb{Z}_3$에서 연립방정식 $x_1 + x_2 + x_3 + x_4 = [0]$, $x_1 + [2]x_2 + x_4 = [0]$의 해를 모두 구하고, 해의 개수가 1과 맞는지 확인하라.
:::

:::solution
1. [[linear-maps-over-a-field|체 위의 선형사상과 핵]]의 (8)의 함수 $A : F^m \to F^n$은 선형사상이다. [[vector-space-over-a-field|체 위의 벡터공간]]의 (3)의 (i)에 의해 $Ax = 0$인 것은 정확히 모든 $k$에서 $Ax$의 $k$번째 값이 $0$일 때이므로 $S = \operatorname{Ker} A$이고, 선형사상과 핵의 (2)에 의해 $S$는 $F^m$의 부분공간이다. [[number-of-elements-of-finite-vector-space|유한체 위 벡터공간의 원소 개수]]의 (2)에 의해 $F^m$은 유한집합이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $S$도 유한집합이다. 원소 개수의 (4)에 의해 벡터공간 $S$는 유한차원이고 $d = \dim_F S$로 두면 $|S| = q^d$이다. 선형사상과 핵의 (8)에 의해 $S$에는 영벡터가 아닌 원소가 있으므로 $S \ne \{0\}$이고, [[dimension-over-a-field|체 위의 차원]]의 (6)에 의해 $d \ne 0$이다. 따라서 $d$는 자연수이다.

2. $x$가 해라 하자. 둘째 식에서 첫째 식을 빼면 $x_2 - x_3 = [0]$, 곧 $x_3 = x_2$이다. 첫째 식에서 $x_1 = -x_2 - x_3 - x_4 = -[2]x_2 - x_4 = x_2 + [2]x_4$이다($-[2] = [1]$, $-[1] = [2]$). 곧
   $$
   \begin{aligned}
   x &= (x_2 + [2]x_4,\ x_2,\ x_2,\ x_4) \\
   &= x_2 u_1 + x_4 u_2
   \end{aligned}
   $$
   이고, 여기서 $u_1 = ([1], [1], [1], [0])$, $u_2 = ([2], [0], [0], [1])$이다. 거꾸로 $s, t \in \mathbb{Z}_3$에 대하여 $su_1 + tu_2 = (s + [2]t, s, s, t)$를 넣으면 첫째 식은 $[3]s + [3]t = [0]$, 둘째 식은 $[3]s + [3]t = [0]$이므로 해이다. 따라서 $S = \operatorname{span}_{\mathbb{Z}_3}(u_1, u_2)$이다. $su_1 + tu_2 = 0$이면 둘째와 넷째 성분에서 $s = t = [0]$이므로 $u_1, u_2$는 일차독립이고, $S$의 기저이다. 그래서 $\dim S = 2$이고 해는
   $$
   \{s u_1 + t u_2 : s, t \in \mathbb{Z}_3\}
   $$
   의 $3^2 = 9$개이다(원소 개수의 (3)). 이것은 1의 $d = 2$인 경우이다.
:::

:::exercise[선형사상의 두 조건 가운데 하나만 지키는 함수]
1. 함수 $f : \mathbb{Z}_2^2 \to \mathbb{Z}_2$를 $f(0) = [0]$, $0$이 아닌 $v$에서 $f(v) = [1]$로 정하자. 모든 $\alpha \in \mathbb{Z}_2$와 $v$에서 $f(\alpha v) = \alpha f(v)$이지만, $f$가 덧셈을 보존하지 않음을 보여라.
2. 체 $\mathbb{C}$를 자기 자신 위의 벡터공간으로 보자. 켤레를 취하는 함수 $\mathbb{C} \to \mathbb{C}$는 덧셈을 보존하지만 $\mathbb{C}$-선형사상이 아님을 보여라.
:::

:::solution
1. $\mathbb{Z}_2$는 체이고 원소는 $[0]$, $[1]$뿐이다([[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3)). $\alpha = [0]$이면 [[vector-space-over-a-field|체 위의 벡터공간]]의 (1)의 (i)에 의해 $[0]v = 0$이므로 $f([0]v) = f(0) = [0] = [0] f(v)$이다. $\alpha = [1]$이면 정의의 (iv)에 의해 $[1]v = v$이므로 $f([1]v) = f(v) = [1]f(v)$이다. 그런데 표준기저의 $e_1 = ([1], [0])$, $e_2 = ([0], [1])$에 대하여 $e_1 + e_2 = ([1], [1]) \ne 0$이므로 $f(e_1 + e_2) = [1]$이고, $f(e_1) + f(e_2) = [1] + [1] = [0]$이다. 따라서 $f(e_1 + e_2) \ne f(e_1) + f(e_2)$이고, [[linear-maps-over-a-field|체 위의 선형사상과 핵]]의 정의에 의해 $f$는 선형사상이 아니다.

2. [[complex-field|복소수체]]의 (1)에 의해 $\mathbb{C}$는 체이고, 체 위의 벡터공간의 (3)의 (iv)에 의해 $\mathbb{C}$는 곱셈을 스칼라배로 하여 $\mathbb{C}$ 위의 벡터공간이다. [[complex-conjugate|켤레복소수]]의 (2)에 의해 $\overline{z + w} = \overline{z} + \overline{w}$이므로 켤레를 취하는 함수는 덧셈을 보존한다. 한편 같은 항목의 (4)에 의해 $\overline{1} = 1$이고, (1)과 복소수체의 (4)에 의해 $\overline{i} = \overline{0 + 1i} = 0 - 1i = -i$이다. 스칼라 $i$와 벡터 $1$에 대하여
   $$
   \overline{i \cdot 1} = \overline{i} = -i, \qquad i\,\overline{1} = i
   $$
   이고, 복소수체의 (1), (4)에 의해 $\operatorname{Im}(-i) = -\operatorname{Im} i = -1 \ne 1 = \operatorname{Im} i$이므로 $-i \ne i$이다. 따라서 $\overline{i \cdot 1} \ne i\,\overline{1}$이고, 켤레를 취하는 함수는 $\mathbb{C}$-선형사상이 아니다.

   1과 2에 의해 선형사상의 정의의 두 등식은 어느 하나가 다른 하나에서 나오지 않는다.
:::
