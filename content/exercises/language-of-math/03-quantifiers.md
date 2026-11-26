---
written_by: Claude
status: reviewed
sources:
  - ref: hammack-book-of-proof
    loc: "2.7절, 연습문제 1–10 (p.55)"
  - ref: hammack-book-of-proof
    loc: "2.7절, 예 2.7 (p.55)"
  - ref: hammack-book-of-proof
    loc: "2.10절, 연습문제 4–5 (p.62)"
added: 2026-11-26
---

:::exercise[원소가 셋인 집합 위의 한정 명제]
$X = \{0, 1, 2\}$라 하자. 다음 다섯 명제의 참·거짓을 판정하라.

1. $\forall x \in X,\ \exists y \in X,\ x \le y$
2. $\exists y \in X,\ \forall x \in X,\ x \le y$
3. $\forall x \in X,\ \exists y \in X,\ x < y$
4. $\exists x \in X,\ \forall y \in X,\ xy = 0$
5. $\forall x \in X,\ \forall y \in X,\ x + y \le 3$
:::

:::solution
[[quantifiers|한정 기호]]의 진술대로, 겹친 한정 명제는 안쪽을 열린 문장으로 읽는다. $\forall$는 모든 원소에서 참일 때 참이고 거짓인 원소가 하나라도 있으면 거짓이며, $\exists$는 참인 원소가 하나라도 있을 때 참이고 하나도 없으면 거짓이다. $X$의 원소는 $0$, $1$, $2$ 셋이므로 모두 확인할 수 있다.

1. **참.** 어느 $x \in X$에 대해서도 $y = 2$를 잡으면 $0 \le 2$, $1 \le 2$, $2 \le 2$이므로 안쪽 명제 "$\exists y \in X,\ x \le y$"가 참이다.
2. **참.** $y = 2$를 잡으면 $x = 0, 1, 2$ 모두에서 $x \le 2$이므로 "$\forall x \in X,\ x \le 2$"가 참이다. 이런 $y$가 하나 있으므로 존재 명제가 참이다.
3. **거짓.** $x = 2$에서 안쪽 명제 "$\exists y \in X,\ 2 < y$"를 보면, $y = 0, 1, 2$ 모두에서 $2 < y$가 거짓이므로 참이 되는 $y$가 하나도 없어 안쪽 명제는 거짓이다. 안쪽 명제가 거짓인 $x$가 있으므로 전칭 명제는 거짓이다.
4. **참.** $x = 0$을 잡으면 $0 \cdot 0 = 0$, $0 \cdot 1 = 0$, $0 \cdot 2 = 0$이므로 "$\forall y \in X,\ 0 \cdot y = 0$"이 참이다.
5. **거짓.** $x = 2$일 때 안쪽 명제 "$\forall y \in X,\ 2 + y \le 3$"은 $y = 2$에서 $4 \le 3$이 거짓이므로 거짓이다. 안쪽 명제가 거짓인 $x$가 있으므로 전체는 거짓이다.

1과 2는 한정 기호의 순서만 다르지만 이 $X$에서는 둘 다 참이다. 순서를 바꾸면 다른 명제가 되지만 참·거짓이 늘 달라지는 것은 아니다.
:::

:::exercise[전칭 기호와 "그리고"]
$X$가 집합이고 $P(x)$, $Q(x)$가 $X$의 원소 $x$에 관한 열린 문장일 때, 두 명제

$$\forall x \in X,\ \bigl(P(x) \land Q(x)\bigr)$$

와

$$\bigl(\forall x \in X,\ P(x)\bigr) \land \bigl(\forall x \in X,\ Q(x)\bigr)$$

의 진릿값이 같음을 보여라.
:::

:::solution
왼쪽 명제를 $L$, 오른쪽 명제를 $R$라 하자. $L$이 참인 경우와 거짓인 경우로 나눈다. 쓰는 것은 [[quantifiers|한정 기호]]의 진술($\forall$는 모든 원소에서 참일 때 참이고, 거짓인 원소가 적어도 하나 있을 때 거짓)과 [[logical-connectives|논리 연결사]]의 진리표이다.

*$L$이 참인 경우.* $X$의 모든 원소 $a$에서 $P(a) \land Q(a)$가 참이다. "그리고"는 두 부분이 모두 참일 때만 참이므로, 모든 $a \in X$에서 $P(a)$가 참이고 $Q(a)$도 참이다. 따라서 $\forall x \in X,\ P(x)$와 $\forall x \in X,\ Q(x)$가 둘 다 참이고, $R$도 참이다.

*$L$이 거짓인 경우.* $P(a) \land Q(a)$가 거짓인 원소 $a \in X$가 적어도 하나 있다. "그리고"가 거짓이므로 $P(a)$가 거짓이거나 $Q(a)$가 거짓이다. $P(a)$가 거짓이면 $\forall x \in X,\ P(x)$는 거짓이고, $Q(a)$가 거짓이면 $\forall x \in X,\ Q(x)$는 거짓이다. 어느 경우든 $R$의 두 부분 가운데 하나가 거짓이므로 $R$은 거짓이다.

두 경우 모두 $L$과 $R$의 진릿값이 같다. $X = \emptyset$이면 $L$은 첫째 경우에 들어가고 위 논증이 그대로 성립한다.
:::

:::exercise[존재 기호와 "그리고"의 한 방향]
$X$가 집합이고 $P(x)$, $Q(x)$가 $X$의 원소 $x$에 관한 열린 문장일 때, 가정이

$$\exists x \in X,\ \bigl(P(x) \land Q(x)\bigr)$$

이고 결론이

$$\bigl(\exists x \in X,\ P(x)\bigr) \land \bigl(\exists x \in X,\ Q(x)\bigr)$$

인 조건문이 참임을 보여라.
:::

:::solution
[[conditional-statement|조건문]]은 가정이 참이고 결론이 거짓일 때만 거짓이므로, 가정이 거짓이면 조건문은 참이다. 가정이 참인 경우에 결론이 참임을 보이면 된다.

가정이 참이라 하자. [[quantifiers|한정 기호]]의 진술에 의해 $P(a) \land Q(a)$가 참인 원소 $a \in X$가 적어도 하나 있다. [[logical-connectives|논리 연결사]]의 진리표에 의해 $P(a)$와 $Q(a)$가 둘 다 참이다. $P(a)$가 참인 원소 $a$가 있으므로 $\exists x \in X,\ P(x)$는 참이고, 같은 $a$에서 $Q(a)$가 참이므로 $\exists x \in X,\ Q(x)$도 참이다. 두 부분이 모두 참이므로 결론이 참이다.

따라서 어느 경우에도 조건문은 참이다. 이 조건문의 역이 거짓인 예는 문제 6의 2에 있다.
:::

:::exercise[바깥의 존재 기호를 안으로 옮기기]
$X$와 $Y$가 집합이고 $P(x, y)$가 $x \in X$, $y \in Y$에 관한 열린 문장일 때, 다음 조건문이 참임을 보여라.

$$\bigl(\exists y \in Y,\ \forall x \in X,\ P(x, y)\bigr) \Rightarrow \bigl(\forall x \in X,\ \exists y \in Y,\ P(x, y)\bigr)$$
:::

:::solution
[[quantifiers|한정 기호]]의 진술에 따라 가정은 "$\forall x \in X,\ P(x, y)$"를 $y$에 관한 열린 문장으로 본 존재 명제이고, 결론은 "$\exists y \in Y,\ P(x, y)$"를 $x$에 관한 열린 문장으로 본 전칭 명제이다. [[conditional-statement|조건문]]은 가정이 거짓이면 참이므로, 가정이 참인 경우에 결론이 참임을 보이면 된다.

가정이 참이라 하자. 그러면 $\forall x \in X,\ P(x, b)$가 참인 원소 $b \in Y$가 있다. 곧 $X$의 모든 원소 $a$에서 $P(a, b)$가 참이다.

이제 $a \in X$를 아무거나 잡자. $P(a, b)$가 참이므로 $y = b$가 "$\exists y \in Y,\ P(a, y)$"를 참으로 만드는 원소이다. $a$가 $X$의 어느 원소이든 그러하므로, 모든 $a \in X$에서 안쪽 명제가 참이고 결론 $\forall x \in X,\ \exists y \in Y,\ P(x, y)$가 참이다.

따라서 조건문은 참이다. 결론에서는 $y$를 $x$마다 따로 골라도 되지만, 가정은 모든 $x$에 통하는 $y$ 하나를 주므로 그 $y$를 모든 $x$에 쓰면 된다.

이 조건문의 역은 거짓일 수 있다. $X = Y = \{0, 1\}$이고 $P(x, y)$가 "$x = y$"이면, $x = 0$에는 $y = 0$이, $x = 1$에는 $y = 1$이 있으므로 $\forall x \in X,\ \exists y \in Y,\ x = y$는 참이다. 그러나 $y = 0$은 $x = 1$에서, $y = 1$은 $x = 0$에서 $x = y$를 깨뜨리므로 $\exists y \in Y,\ \forall x \in X,\ x = y$는 거짓이다. 그래서 역은 가정이 참이고 결론이 거짓인 조건문이 된다.
:::

:::exercise[부분집합에 대한 조건문의 부정]
$S = \{1, 2, 3\}$이라 하고 명제 $M$을

$$\forall A \in \mathscr{P}(S),\ \bigl(A \ne \emptyset \Rightarrow \exists x \in A,\ x \ge 2\bigr)$$

라 하자. 말로 하면 "$S$의 공집합이 아닌 부분집합에는 언제나 $2$ 이상인 원소가 있다"이다.

1. [[negation-of-quantified-statements|한정 명제의 부정]]과 [[negation-of-conditional|조건문의 부정]]을 써서 $\lnot M$을 부정 기호가 열린 문장 $x \ge 2$ 바로 앞에만 남는 꼴로 쓰라.
2. $M$과 $\lnot M$ 가운데 참인 것은 어느 쪽인가?
:::

:::solution
**1.** $A \in \mathscr{P}(S)$에 관한 열린 문장 $C(A)$를 "$A \ne \emptyset \Rightarrow \exists x \in A,\ x \ge 2$"로 두면 $M$은 $\forall A \in \mathscr{P}(S),\ C(A)$이다.

*1단계.* [[negation-of-quantified-statements|한정 명제의 부정]]의 1에 의해 $\lnot M$은 $\exists A \in \mathscr{P}(S),\ \lnot C(A)$와 진릿값이 같다.

*2단계.* $A$를 $\mathscr{P}(S)$의 원소 하나로 정하면 "$A \ne \emptyset$"과 "$\exists x \in A,\ x \ge 2$"는 명제이다. [[negation-of-conditional|조건문의 부정]]에 의해 $\lnot C(A)$는

$$A \ne \emptyset \ \land\ \lnot\bigl(\exists x \in A,\ x \ge 2\bigr)$$

와 진릿값이 같다. 또 한정 명제의 부정의 2에 의해 $\lnot(\exists x \in A,\ x \ge 2)$는 $\forall x \in A,\ \lnot(x \ge 2)$와 진릿값이 같다. [[logical-connectives|논리 연결사]]의 진리표에서 "그리고"의 진릿값은 두 부분의 진릿값만으로 정해지므로, 뒷부분을 바꿔 쓴 열린 문장

$$A \ne \emptyset \ \land\ \bigl(\forall x \in A,\ \lnot(x \ge 2)\bigr)$$

을 $D(A)$라 하면 $D(A)$도 $\lnot C(A)$와 진릿값이 같다. 이것은 $\mathscr{P}(S)$의 모든 원소 $A$에서 성립한다.

*3단계.* 모든 $A$에서 $\lnot C(A)$와 $D(A)$의 진릿값이 같으므로, [[quantifiers|한정 기호]]의 진술에 의해 "$\lnot C(A)$가 참인 $A$가 있다"와 "$D(A)$가 참인 $A$가 있다"는 함께 참이거나 함께 거짓이다. 따라서 $\lnot M$은

$$\begin{aligned} &\exists A \in \mathscr{P}(S),\\ &\, \Bigl(A \ne \emptyset \ \land\ \bigl(\forall x \in A,\ \lnot(x \ge 2)\bigr)\Bigr) \end{aligned}$$

와 진릿값이 같다. 말로 하면 "$S$의 공집합이 아닌 부분집합 가운데 원소가 모두 $2$ 이상이 아닌 것이 있다"이다.

**2.** $A = \{1\}$을 잡자. $\{1\} \subseteq S$이므로 [[power-set|멱집합]]의 정의에 의해 $A \in \mathscr{P}(S)$이고, $1 \in A$이므로 $A \ne \emptyset$이다. $A$의 원소는 $1$ 하나뿐이고 $1 \ge 2$는 거짓이므로 $\forall x \in A,\ \lnot(x \ge 2)$가 참이다. 따라서 $D(\{1\})$이 참이고, 1의 꼴에 의해 $\lnot M$이 참이다. $M$은 거짓이다.
:::

:::exercise[한정 기호를 나누어 쓸 수 없는 예]
1. 집합 $X$와 열린 문장 $P(x)$, $Q(x)$를 골라 $\forall x \in X,\ \bigl(P(x) \lor Q(x)\bigr)$는 참이지만 $\bigl(\forall x \in X,\ P(x)\bigr) \lor \bigl(\forall x \in X,\ Q(x)\bigr)$는 거짓인 예를 들어라.
2. 집합 $X$와 열린 문장 $P(x)$, $Q(x)$를 골라 $\bigl(\exists x \in X,\ P(x)\bigr) \land \bigl(\exists x \in X,\ Q(x)\bigr)$는 참이지만 $\exists x \in X,\ \bigl(P(x) \land Q(x)\bigr)$는 거짓인 예를 들어라.
:::

:::solution
참·거짓은 [[quantifiers|한정 기호]]의 진술과 [[logical-connectives|논리 연결사]]의 진리표로 판정한다.

**1.** $X = \{1, 2, 3, 4\}$, $P(x)$를 "$x \le 2$", $Q(x)$를 "$x \ge 3$"이라 하자.

- $x = 1, 2$에서는 $P(x)$가 참이고, $x = 3, 4$에서는 $Q(x)$가 참이다. 네 원소 모두에서 $P(x) \lor Q(x)$가 참이므로 $\forall x \in X,\ \bigl(P(x) \lor Q(x)\bigr)$는 참이다.
- $x = 3$에서 $3 \le 2$는 거짓이므로 $\forall x \in X,\ P(x)$는 거짓이다. $x = 1$에서 $1 \ge 3$은 거짓이므로 $\forall x \in X,\ Q(x)$도 거짓이다. 두 부분이 모두 거짓이므로 "또는"으로 이은 명제는 거짓이다.

**2.** $X = \{1, 2\}$, $P(x)$를 "$x = 1$", $Q(x)$를 "$x = 2$"라 하자.

- $P(1)$이 참이므로 $\exists x \in X,\ P(x)$는 참이고, $Q(2)$가 참이므로 $\exists x \in X,\ Q(x)$도 참이다. 따라서 둘을 "그리고"로 이은 명제는 참이다.
- $x = 1$에서는 $Q(1)$이, $x = 2$에서는 $P(2)$가 거짓이므로 두 원소 모두에서 $P(x) \land Q(x)$는 거짓이다. 참이 되는 원소가 하나도 없으므로 $\exists x \in X,\ \bigl(P(x) \land Q(x)\bigr)$는 거짓이다.

2의 예에서 문제 3의 조건문의 역, 곧 "$\bigl(\exists x \in X,\ P(x)\bigr) \land \bigl(\exists x \in X,\ Q(x)\bigr)$이면 $\exists x \in X,\ \bigl(P(x) \land Q(x)\bigr)$이다"는 가정이 참이고 결론이 거짓이므로 거짓이다. 한편 "그리고"와 $\forall$는 문제 2에서 보았듯 나누어 쓸 수 있다. 1의 예는 "또는"과 $\forall$는 그렇게 나누어 쓸 수 없음을 보여 준다.
:::
