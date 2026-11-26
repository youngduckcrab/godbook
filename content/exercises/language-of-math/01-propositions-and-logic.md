---
written_by: Claude
status: reviewed
sources:
  - ref: hammack-book-of-proof
    loc: "2.5절, 연습문제 1–9 (p.50)"
  - ref: hammack-book-of-proof
    loc: "2.6절, 연습문제 1–8 (p.52)"
  - ref: hammack-book-of-proof
    loc: "2.6절, 연습문제 13 (p.52)"
added: 2026-11-26
---

:::exercise[세 명제의 진릿값 계산]
명제 $P$는 참이고, 명제 $Q$와 $R$은 거짓이라 하자. 다음 네 명제의 진릿값을 구하라.

1. $(P \lor Q) \land (\lnot R)$
2. $(P \Rightarrow Q) \lor R$
3. $\bigl(\lnot(Q \lor R)\bigr) \Rightarrow (P \land Q)$
4. $(Q \Rightarrow R) \land (R \Rightarrow P)$
:::

:::solution
괄호 안부터 차례로 계산한다. $\land$, $\lor$, $\lnot$의 값은 [[logical-connectives|논리 연결사]]의 진리표, $\Rightarrow$의 값은 [[conditional-statement|조건문]]의 진리표를 따른다.

1. $P$가 참이므로 $P \lor Q$는 참이다(적어도 하나가 참). $R$이 거짓이므로 $\lnot R$은 참이다. 둘 다 참이므로 $(P \lor Q) \land (\lnot R)$는 **참**이다.
2. $P$는 참이고 $Q$는 거짓이므로 $P \Rightarrow Q$는 거짓이다(가정이 참이고 결론이 거짓인 줄). $R$도 거짓이므로, 둘 다 거짓인 $(P \Rightarrow Q) \lor R$은 **거짓**이다.
3. $Q$와 $R$이 둘 다 거짓이므로 $Q \lor R$은 거짓이고 $\lnot(Q \lor R)$는 참이다. $Q$가 거짓이므로 $P \land Q$는 거짓이다. 가정이 참이고 결론이 거짓이므로 이 조건문은 **거짓**이다.
4. $Q \Rightarrow R$은 가정 $Q$가 거짓이므로 참이다. $R \Rightarrow P$도 가정 $R$이 거짓이므로 참이다. 둘 다 참이므로 $(Q \Rightarrow R) \land (R \Rightarrow P)$는 **참**이다.
:::

:::exercise[진리표에서 거짓이 되는 줄 찾기]
명제 $P$, $Q$에 대하여 $(P \lor Q) \Rightarrow (P \land Q)$의 진리표를 그려라. 이 명제가 거짓이 되는 것은 $P$, $Q$의 진릿값이 어떤 경우인가? 참이 되는 경우에 $P$와 $Q$의 진릿값은 서로 어떤 관계인가?
:::

:::solution
$P \lor Q$와 $P \land Q$의 열은 [[logical-connectives|논리 연결사]]의 진리표로 채우고, 마지막 열은 [[conditional-statement|조건문]]의 진리표로 채운다. 조건문은 가정이 참이고 결론이 거짓인 줄에서만 거짓이다.

| $P$ | $Q$ | $P \lor Q$ | $P \land Q$ | $(P \lor Q) \Rightarrow (P \land Q)$ |
|:---:|:---:|:---:|:---:|:---:|
| $T$ | $T$ | $T$ | $T$ | $T$ |
| $T$ | $F$ | $T$ | $F$ | $F$ |
| $F$ | $T$ | $T$ | $F$ | $F$ |
| $F$ | $F$ | $F$ | $F$ | $T$ |

거짓이 되는 것은 둘째 줄($P$는 참, $Q$는 거짓)과 셋째 줄($P$는 거짓, $Q$는 참)이다. 이 두 줄에서는 $P \lor Q$가 참이고 $P \land Q$가 거짓이다.

참이 되는 것은 첫째 줄과 넷째 줄이고, 두 줄 모두 $P$와 $Q$의 진릿값이 같다(둘 다 참이거나 둘 다 거짓). 거꾸로 $P$와 $Q$의 진릿값이 같은 줄은 이 두 줄뿐이므로, 이 명제는 $P$와 $Q$의 진릿값이 같을 때 정확히 참이다.
:::

:::exercise[경우를 나누는 꼴의 동치]
명제 $P$, $Q$, $R$에 대하여 다음을 진리표로 보여라.

$$\bigl((P \lor Q) \Rightarrow R\bigr) \equiv \bigl((P \Rightarrow R) \land (Q \Rightarrow R)\bigr)$$
:::

:::solution
[[logical-equivalence|논리적 동치]]의 정의에 따라, $P$, $Q$, $R$의 진릿값 조합 여덟 가지 모두에서 양변의 진릿값이 같음을 보인다. $\lor$와 $\land$는 [[logical-connectives|논리 연결사]]의 진리표, $\Rightarrow$는 [[conditional-statement|조건문]]의 진리표(가정이 참이고 결론이 거짓일 때만 거짓)로 계산한다.

| $P$ | $Q$ | $R$ | $P \lor Q$ | $(P \lor Q) \Rightarrow R$ | $P \Rightarrow R$ | $Q \Rightarrow R$ | $(P \Rightarrow R) \land (Q \Rightarrow R)$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $T$ | $T$ | $T$ | $T$ | $T$ | $T$ | $T$ | $T$ |
| $T$ | $T$ | $F$ | $T$ | $F$ | $F$ | $F$ | $F$ |
| $T$ | $F$ | $T$ | $T$ | $T$ | $T$ | $T$ | $T$ |
| $T$ | $F$ | $F$ | $T$ | $F$ | $F$ | $T$ | $F$ |
| $F$ | $T$ | $T$ | $T$ | $T$ | $T$ | $T$ | $T$ |
| $F$ | $T$ | $F$ | $T$ | $F$ | $T$ | $F$ | $F$ |
| $F$ | $F$ | $T$ | $F$ | $T$ | $T$ | $T$ | $T$ |
| $F$ | $F$ | $F$ | $F$ | $T$ | $T$ | $T$ | $T$ |

다섯째 열과 여덟째 열이 여덟 줄 모두에서 같다($T, F, T, F, T, F, T, T$). 따라서 두 명제는 논리적으로 동치이다.

이 동치에 의해, "$P$이거나 $Q$이면 $R$이다"를 보이는 대신 "$P$이면 $R$이다"와 "$Q$이면 $R$이다"를 둘 다 보여도 된다.
:::

:::exercise[두 가정을 하나로 묶는 동치]
명제 $P$, $Q$, $R$에 대하여 다음을 진리표로 보여라.

$$\bigl((P \land Q) \Rightarrow R\bigr) \equiv \bigl(P \Rightarrow (Q \Rightarrow R)\bigr)$$
:::

:::solution
[[logical-equivalence|논리적 동치]]의 정의에 따라 여덟 줄 모두에서 양변을 비교한다. 계산 규칙은 [[logical-connectives|논리 연결사]]와 [[conditional-statement|조건문]]의 진리표이다. 오른쪽 명제는 가정이 $P$이고 결론이 $Q \Rightarrow R$인 조건문이므로, $Q \Rightarrow R$의 열을 먼저 만든다.

| $P$ | $Q$ | $R$ | $P \land Q$ | $(P \land Q) \Rightarrow R$ | $Q \Rightarrow R$ | $P \Rightarrow (Q \Rightarrow R)$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $T$ | $T$ | $T$ | $T$ | $T$ | $T$ | $T$ |
| $T$ | $T$ | $F$ | $T$ | $F$ | $F$ | $F$ |
| $T$ | $F$ | $T$ | $F$ | $T$ | $T$ | $T$ |
| $T$ | $F$ | $F$ | $F$ | $T$ | $T$ | $T$ |
| $F$ | $T$ | $T$ | $F$ | $T$ | $T$ | $T$ |
| $F$ | $T$ | $F$ | $F$ | $T$ | $F$ | $T$ |
| $F$ | $F$ | $T$ | $F$ | $T$ | $T$ | $T$ |
| $F$ | $F$ | $F$ | $F$ | $T$ | $T$ | $T$ |

다섯째 열과 일곱째 열이 여덟 줄 모두에서 같다(둘째 줄만 $F$이고 나머지는 $T$). 따라서 두 명제는 논리적으로 동치이다. 양쪽 모두 거짓이 되는 경우는 "$P$와 $Q$는 참, $R$은 거짓" 하나뿐이다.
:::

:::exercise[대우와 드 모르간 법칙을 함께 쓰기]
1. 명제 $P$, $Q$, $R$에 대하여 다음을 여덟 줄의 진리표를 그리지 않고, [[contrapositive-law|대우 법칙]]과 [[de-morgan-laws-logic|논리의 드 모르간 법칙]]으로 보여라.

   $$\bigl(P \Rightarrow (Q \lor R)\bigr) \equiv \Bigl(\bigl((\lnot Q) \land (\lnot R)\bigr) \Rightarrow (\lnot P)\Bigr)$$

2. $n$을 하나로 정해진 정수라 하자. 1번의 동치를 써서 "$n$이 $6$의 배수이면 $n$은 $2$의 배수이거나 $3$의 배수이다"와 논리적으로 동치이고 "그리고"가 들어간 조건문을 하나 쓰라.
:::

:::solution
**1.** 세 명제

- $A$: $P \Rightarrow (Q \lor R)$
- $B$: $\bigl(\lnot(Q \lor R)\bigr) \Rightarrow (\lnot P)$
- $C$: $\bigl((\lnot Q) \land (\lnot R)\bigr) \Rightarrow (\lnot P)$

를 두고, $P$, $Q$, $R$의 진릿값 조합 여덟 가지 각각에서 $A$와 $B$의 진릿값이 같고 $B$와 $C$의 진릿값이 같음을 보인다.

*$A$와 $B$.* $Q \lor R$은 명제이므로 [[contrapositive-law|대우 법칙]]을 $P$와 $Q \lor R$에 적용할 수 있다. 그러면 $A$와 $B$는 $P$와 $Q \lor R$의 진릿값 조합 네 가지 모두에서 같은 진릿값을 가진다. $P$, $Q$, $R$의 진릿값을 하나로 정하면 $P$와 $Q \lor R$의 진릿값이 정해지고, 그 조합은 네 가지 가운데 하나이므로, 여덟 경우 각각에서 $A$와 $B$의 진릿값이 같다.

*$B$와 $C$.* [[de-morgan-laws-logic|논리의 드 모르간 법칙]]의 2를 $Q$, $R$에 적용하면 $\lnot(Q \lor R)$와 $(\lnot Q) \land (\lnot R)$는 $Q$, $R$의 진릿값 조합 네 가지 모두에서 진릿값이 같다. 따라서 여덟 경우 각각에서도 두 명제의 진릿값이 같다. $B$와 $C$는 결론이 똑같이 $\lnot P$이고 가정만 이 두 명제로 다르다. [[conditional-statement|조건문]]의 진릿값은 가정과 결론의 진릿값만으로 정해지므로, 여덟 경우 각각에서 $B$와 $C$의 진릿값이 같다.

*마무리.* 여덟 경우 각각에서 $A$와 $B$가 같고 $B$와 $C$가 같으므로 $A$와 $C$가 같다. [[logical-equivalence|논리적 동치]]의 정의에 의해 $A \equiv C$이다.

**2.** $P$를 "$n$은 $6$의 배수이다", $Q$를 "$n$은 $2$의 배수이다", $R$을 "$n$은 $3$의 배수이다"라 하면 주어진 문장은 $P \Rightarrow (Q \lor R)$이다. $n$이 정해져 있으므로 $P$, $Q$, $R$은 명제이고 1을 쓸 수 있다. 동치인 조건문은 $\bigl((\lnot Q) \land (\lnot R)\bigr) \Rightarrow (\lnot P)$, 곧

> "$n$이 $2$의 배수가 아니고 $3$의 배수도 아니면, $n$은 $6$의 배수가 아니다."

이다.
:::

:::exercise[조건문을 묶는 순서]
명제 $P$, $Q$, $R$에 대하여 $(P \Rightarrow Q) \Rightarrow R$과 $P \Rightarrow (Q \Rightarrow R)$는 논리적으로 동치가 아님을 보여라. 두 명제의 진릿값이 다른 경우를 모두 찾아라.
:::

:::solution
[[logical-equivalence|논리적 동치]]가 아님을 보이려면 진릿값이 다른 줄을 하나 찾으면 된다. 모든 줄을 [[conditional-statement|조건문]]의 진리표로 계산하면 다음과 같다.

| $P$ | $Q$ | $R$ | $P \Rightarrow Q$ | $(P \Rightarrow Q) \Rightarrow R$ | $Q \Rightarrow R$ | $P \Rightarrow (Q \Rightarrow R)$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $T$ | $T$ | $T$ | $T$ | $T$ | $T$ | $T$ |
| $T$ | $T$ | $F$ | $T$ | $F$ | $F$ | $F$ |
| $T$ | $F$ | $T$ | $F$ | $T$ | $T$ | $T$ |
| $T$ | $F$ | $F$ | $F$ | $T$ | $T$ | $T$ |
| $F$ | $T$ | $T$ | $T$ | $T$ | $T$ | $T$ |
| $F$ | $T$ | $F$ | $T$ | $F$ | $F$ | $T$ |
| $F$ | $F$ | $T$ | $T$ | $T$ | $T$ | $T$ |
| $F$ | $F$ | $F$ | $T$ | $F$ | $T$ | $T$ |

다섯째 열과 일곱째 열은 여섯째 줄($P = F$, $Q = T$, $R = F$)과 여덟째 줄($P = F$, $Q = F$, $R = F$)에서 다르다. 예를 들어 여덟째 줄에서 $P \Rightarrow Q$는 가정이 거짓이므로 참이고, 그래서 $(P \Rightarrow Q) \Rightarrow R$은 가정이 참이고 결론이 거짓인 조건문이 되어 거짓이다. 한편 $P \Rightarrow (Q \Rightarrow R)$는 가정 $P$가 거짓이므로 참이다. 한 줄이라도 다르므로 두 명제는 동치가 아니다. 진릿값이 다른 경우는 이 두 줄뿐이고, 두 줄 모두 $P$와 $R$이 거짓이다.

그래서 괄호 없이 "$P \Rightarrow Q \Rightarrow R$"라고 쓰면 두 명제 가운데 어느 것인지 정해지지 않는다. 조건문을 겹쳐 쓸 때는 괄호를 친다.
:::
