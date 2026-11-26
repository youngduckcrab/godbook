---
written_by: Claude
status: reviewed
sources:
  - ref: hammack-book-of-proof
    loc: "1.5절, 연습문제 1–2 (p.19)"
  - ref: hammack-book-of-proof
    loc: "1.6절, 연습문제 1–2 (p.21)"
  - ref: hammack-book-of-proof
    loc: "1.4절, 연습문제 1–12 (p.17)"
  - ref: hammack-book-of-proof
    loc: "8.2절, p.161 의 (X ⊆ A) ⇒ (X ⊆ A ∪ B)"
added: 2026-11-26
---

:::exercise[세 집합의 연산 계산]
전체집합을 $U = \{1, 2, 3, 4, 5, 6, 7, 8\}$로 두고 $A = \{1, 2, 3, 4\}$, $B = \{2, 4, 6, 8\}$, $C = \{3, 4, 5, 6\}$이라 하자. 다음 집합을 원소나열법으로 구하라.

1. $A \cap (B \cup C)$
2. $(A \cap B) \cup C$
3. $(A - B) \cup (B - A)$
4. $(A \cup C)^c$
5. $A^c \cap B$
:::

:::solution
[[set-operations|합집합·교집합·차집합]]과 [[complement|여집합]]의 정의대로 괄호 안부터 계산한다. $A$, $B$, $C$는 모두 $U$의 [[subset|부분집합]]이므로 여집합 $X^c = U - X$를 쓸 수 있다.

1. $B \cup C$는 $B$나 $C$ 중 적어도 한 곳에 있는 원소 전부이므로 $\{2, 3, 4, 5, 6, 8\}$이다. 이 가운데 $A$에도 있는 것은 $2$, $3$, $4$이므로 $A \cap (B \cup C) = \{2, 3, 4\}$이다.
2. $A \cap B = \{2, 4\}$이고, 여기에 $C$의 원소를 모으면 $(A \cap B) \cup C = \{2, 3, 4, 5, 6\}$이다.
3. $A - B$는 $A$에 있고 $B$에 없는 것이므로 $\{1, 3\}$, $B - A$는 $\{6, 8\}$이다. 따라서 $(A - B) \cup (B - A) = \{1, 3, 6, 8\}$이다.
4. $A \cup C = \{1, 2, 3, 4, 5, 6\}$이므로 $(A \cup C)^c = U - (A \cup C) = \{7, 8\}$이다.
5. $A^c = U - A = \{5, 6, 7, 8\}$이고, 이 가운데 $B$에도 있는 것은 $6$, $8$이므로 $A^c \cap B = \{6, 8\}$이다.

1과 2는 같은 세 집합에 $\cap$와 $\cup$를 한 번씩 썼지만 괄호의 자리가 달라 결과가 다르다($5 \in (A \cap B) \cup C$이지만 $5 \notin A \cap (B \cup C)$).
:::

:::exercise[원소이기도 하고 부분집합이기도 한 집합]
$A = \{1, \{1\}\}$이라 하자.

1. $\mathscr{P}(A)$를 원소나열법으로 구하라.
2. 다음 여섯 문장의 참·거짓을 판정하라: $\{1\} \in A$, $\{1\} \subseteq A$, $\{\{1\}\} \subseteq A$, $\{\{1\}\} \in \mathscr{P}(A)$, $\emptyset \in A$, $\emptyset \in \mathscr{P}(A)$.
:::

:::solution
$A$의 원소는 수 $1$과 집합 $\{1\}$, 이 둘뿐이다([[set|집합]]의 원소나열법).

**1.** $X$가 $A$의 [[subset|부분집합]]이면 $X$의 원소는 모두 $A$의 원소이므로 $1$과 $\{1\}$ 가운데 몇 개이다. 두 집합은 원소가 정확히 일치할 때 같으므로, $X$는 "$1$을 원소로 갖는가"와 "$\{1\}$을 원소로 갖는가"로 정해진다. 그래서 $X$는 $\emptyset$, $\{1\}$, $\{\{1\}\}$, $\{1, \{1\}\}$ 가운데 하나이다. 거꾸로 이 넷은 모두 $A$의 부분집합이다. $\emptyset$은 [[empty-set-is-subset|공집합이 모든 집합의 부분집합이라는 정리]]에 의해 그렇고, 나머지 셋은 원소가 모두 $A$의 원소이기 때문이다. [[power-set|멱집합]]의 정의에 의해

$$\mathscr{P}(A) = \bigl\{\emptyset,\ \{1\},\ \{\{1\}\},\ \{1, \{1\}\}\bigr\}$$

이다.

**2.**

- $\{1\} \in A$: **참**. $\{1\}$은 $A$의 두 원소 가운데 하나이다.
- $\{1\} \subseteq A$: **참**. $\{1\}$의 원소는 $1$ 하나이고 $1 \in A$이다.
- $\{\{1\}\} \subseteq A$: **참**. $\{\{1\}\}$의 원소는 $\{1\}$ 하나이고 $\{1\} \in A$이다.
- $\{\{1\}\} \in \mathscr{P}(A)$: **참**. 멱집합의 정의에 의해 이것은 $\{\{1\}\} \subseteq A$와 같은 말이고, 바로 위에서 참이었다.
- $\emptyset \in A$: **거짓**. $A$의 원소는 $1$과 $\{1\}$뿐이다. $\emptyset$은 원소가 없고 $\{1\}$은 원소 $1$을 가지므로 $\emptyset \ne \{1\}$이고, $1$은 집합이 아니라 수이므로 $\emptyset \ne 1$이다.
- $\emptyset \in \mathscr{P}(A)$: **참**. 공집합이 모든 집합의 부분집합이라는 정리에 의해 $\emptyset \subseteq A$이다.

$\{1\}$은 $A$의 원소이면서 부분집합이기도 하다. "원소이다"와 "부분집합이다"는 다른 관계이지만, 한 집합이 둘 다 만족할 수도 있다.
:::

:::exercise[합집합이 다른 집합에 포함되는 조건]
집합 $A$, $B$, $C$에 대하여 다음 두 가지를 보여라.

1. $A \subseteq C$이고 $B \subseteq C$이면 $A \cup B \subseteq C$이다.
2. $A \cup B \subseteq C$이면 $A \subseteq C$이고 $B \subseteq C$이다.
:::

:::solution
[[subset|부분집합]]의 정의에 의해, $X \subseteq Y$를 보이려면 $X$의 원소 $x$를 아무거나 잡고 $x \in Y$임을 보이면 된다.

**1.** $A \subseteq C$이고 $B \subseteq C$라 하자. $x \in A \cup B$를 잡으면 [[set-operations|합집합]]의 정의에 의해 $x \in A$ 또는 $x \in B$이다.

- $x \in A$인 경우: $A \subseteq C$이므로 $x \in C$이다.
- $x \in B$인 경우: $B \subseteq C$이므로 $x \in C$이다.

어느 경우든 $x \in C$이므로 $A \cup B \subseteq C$이다.

**2.** $A \cup B \subseteq C$라 하자. $x \in A$를 잡으면 "$x \in A$ 또는 $x \in B$"가 참이므로 합집합의 정의에 의해 $x \in A \cup B$이고, $A \cup B \subseteq C$이므로 $x \in C$이다. 따라서 $A \subseteq C$이다. 같은 방법으로 $x \in B$를 잡으면 "$x \in A$ 또는 $x \in B$"가 참이므로 $x \in A \cup B$이고, 따라서 $x \in C$이다. 따라서 $B \subseteq C$이다.
:::

:::exercise[차집합을 교집합과 여집합으로 쓰기]
$A$와 $B$가 전체집합 $U$의 부분집합일 때 $A - B = A \cap B^c$임을 보여라.
:::

:::solution
두 집합이 서로의 [[subset|부분집합]]이면 한쪽의 원소는 모두 다른 쪽의 원소이므로, 두 집합의 원소가 정확히 일치하고 [[set|집합]]의 같음의 정의에 의해 두 집합은 같다. 양쪽 포함을 보인다. $B \subseteq U$이므로 [[complement|여집합]] $B^c = U - B$를 쓸 수 있다.

($\subseteq$) $x \in A - B$라 하자. [[set-operations|차집합]]의 정의에 의해 $x \in A$이고 $x \notin B$이다. $A \subseteq U$이므로 $x \in U$이다. $x \in U$이고 $x \notin B$이므로 $x \in B^c$이다. $x \in A$이고 $x \in B^c$이므로 교집합의 정의에 의해 $x \in A \cap B^c$이다.

($\supseteq$) $x \in A \cap B^c$라 하자. 교집합의 정의에 의해 $x \in A$이고 $x \in B^c$이다. 여집합의 정의에 의해 $x \in B^c$는 "$x \in U$ 그리고 $x \notin B$"이므로 $x \notin B$이다. $x \in A$이고 $x \notin B$이므로 $x \in A - B$이다.

따라서 $A - B = A \cap B^c$이다. ($\subseteq$)에서 $x \in U$를 얻을 때 $A \subseteq U$를 썼다.
:::

:::exercise[드 모르간 법칙과 여집합의 여집합]
$A$와 $B$가 전체집합 $U$의 부분집합일 때 $(A \cap B^c)^c = A^c \cup B$임을 보여라.
:::

:::solution
**1단계: $B^c$도 $U$의 부분집합이다.** [[complement|여집합]]의 정의에 의해 $B^c$의 원소 $x$는 "$x \in U$ 그리고 $x \notin B$"를 만족하므로 특히 $x \in U$이다. 따라서 $B^c \subseteq U$이다.

**2단계: 드 모르간 법칙.** $A$와 $B^c$가 $U$의 부분집합이므로 [[de-morgan-laws-sets|집합의 드 모르간 법칙]]의 1을 $A$와 $B^c$에 적용하면

$$(A \cap B^c)^c = A^c \cup (B^c)^c$$

이다.

**3단계: $(B^c)^c = B$.** 양쪽 포함을 보인다.

($\subseteq$) $x \in (B^c)^c$라 하자. 여집합의 정의에 의해 $x \in U$이고 $x \notin B^c$이다. $x \notin B^c$는 "$x \in U$ 그리고 $x \notin B$"가 거짓이라는 뜻이다. [[logical-connectives|논리 연결사]]의 진리표에서 "그리고"는 두 부분이 모두 참일 때만 참인데 앞부분 $x \in U$가 참이므로, 뒷부분 "$x \notin B$"가 거짓이다. 부정의 정의에 의해 $x \notin B$가 거짓이면 $x \in B$가 참이다.

($\supseteq$) $x \in B$라 하자. $B \subseteq U$이므로 $x \in U$이다. 또 $x \notin B$가 거짓이므로 "$x \in U$ 그리고 $x \notin B$"는 거짓이고, 곧 $x \notin B^c$이다. $x \in U$이고 $x \notin B^c$이므로 $x \in (B^c)^c$이다.

두 집합의 원소가 정확히 일치하므로 [[set|집합]]의 같음의 정의에 의해 $(B^c)^c = B$이다.

**4단계.** 2단계의 식의 $(B^c)^c$는 3단계에 의해 $B$와 같은 집합이므로 $(A \cap B^c)^c = A^c \cup B$이다.
:::

:::exercise[교집합이 공집합인 경우와 합집합이 전체인 경우]
$A$와 $B$가 전체집합 $U$의 부분집합이라 하자. 다음 두 가지를 보여라.

1. $A \cap B = \emptyset$이면 $A^c \cup B^c = U$이다.
2. $A \cup B = U$이면 $A^c \cap B^c = \emptyset$이다.
:::

:::solution
[[empty-set-is-subset|공집합이 모든 집합의 부분집합이라는 정리]]에 의해 $\emptyset \subseteq U$이고, $U$의 원소는 모두 $U$의 원소이므로 [[subset|부분집합]]의 정의에 의해 $U \subseteq U$이다. 그래서 $\emptyset$과 $U$의 [[complement|여집합]]을 쓸 수 있다. 먼저 이 둘을 구한다.

- $\emptyset^c = U$: $\emptyset^c = U - \emptyset$의 원소는 "$x \in U$ 그리고 $x \notin \emptyset$"인 $x$이다. 공집합에는 원소가 없으므로 어떤 $x$에 대해서도 $x \notin \emptyset$은 참이다. [[logical-connectives|논리 연결사]]의 진리표에서 "그리고"의 뒷부분이 참이면 전체의 진릿값은 앞부분과 같으므로, 이 조건은 $x \in U$와 진릿값이 같고, $\emptyset^c$와 $U$의 원소가 정확히 일치한다.
- $U^c = \emptyset$: $U^c = U - U$의 원소는 "$x \in U$ 그리고 $x \notin U$"인 $x$이다. 이 조건은 $x \in U$와 그 부정의 "그리고"이므로 어떤 $x$에 대해서도 거짓이다(논리 연결사의 진리표에서 $x \in U$가 참이면 뒷부분이, 거짓이면 앞부분이 거짓이다). 따라서 $U^c$에는 원소가 없고 $U^c = \emptyset$이다.

**1.** [[de-morgan-laws-sets|집합의 드 모르간 법칙]]의 1에 의해 $A^c \cup B^c = (A \cap B)^c$이다. $A \cap B = \emptyset$이므로 이것은 $\emptyset^c = U$이다.

**2.** 집합의 드 모르간 법칙의 2에 의해 $A^c \cap B^c = (A \cup B)^c$이다. $A \cup B = U$이므로 이것은 $U^c = \emptyset$이다.
:::

:::exercise[합집합과 교집합으로 집합을 되찾기]
1. 집합 $A$, $B$, $C$ 가운데 $A \cup B = A \cup C$이지만 $B \ne C$인 예를 들어라.
2. 집합 $A$, $B$, $C$ 가운데 $A \cap B = A \cap C$이지만 $B \ne C$인 예를 들어라.
3. 집합 $A$, $B$, $C$에 대하여 $A \cup B = A \cup C$이고 $A \cap B = A \cap C$이면 $B = C$임을 보여라.
:::

:::solution
**1.** $A = \{1, 2\}$, $B = \{1\}$, $C = \{2\}$라 하자. [[set-operations|합집합]]의 정의에 의해 $A \cup B = \{1, 2\}$이고 $A \cup C = \{1, 2\}$이므로 둘은 같다. 그러나 $1 \in B$이고 $1 \notin C$이므로 $B \ne C$이다.

**2.** $A = \emptyset$, $B = \{1\}$, $C = \{2\}$라 하자. 공집합에는 원소가 없으므로 "$x \in \emptyset$ 그리고 $x \in B$"를 만족하는 $x$는 없고, $A \cap B = \emptyset$이다. 같은 이유로 $A \cap C = \emptyset$이다. 그러나 $1 \in B$이고 $1 \notin C$이므로 $B \ne C$이다.

**3.** $A \cup B = A \cup C$이고 $A \cap B = A \cap C$라 하자. 양쪽 포함을 보인다.

($B \subseteq C$) $x \in B$를 잡자. 합집합의 정의에 의해 $x \in A \cup B$이고, $A \cup B = A \cup C$이므로 $x \in A \cup C$, 곧 $x \in A$ 또는 $x \in C$이다.

- $x \in A$인 경우: $x \in A$이고 $x \in B$이므로 $x \in A \cap B$이다. $A \cap B = A \cap C$이므로 $x \in A \cap C$이고, 특히 $x \in C$이다.
- $x \in C$인 경우: 그대로 $x \in C$이다.

($C \subseteq B$) $x \in C$를 잡자. $x \in A \cup C = A \cup B$이므로 $x \in A$ 또는 $x \in B$이다.

- $x \in A$인 경우: $x \in A \cap C = A \cap B$이므로 $x \in B$이다.
- $x \in B$인 경우: 그대로 $x \in B$이다.

$B$와 $C$의 원소가 정확히 일치하므로 [[set|집합]]의 같음의 정의에 의해 $B = C$이다. 1과 2의 예는 두 가정 가운데 하나만으로는 이 결론이 나오지 않음을 보여 준다.
:::
