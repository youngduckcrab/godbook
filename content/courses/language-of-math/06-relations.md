---
title: 관계와 동치관계
summary: 두 대상 사이의 관계를 순서쌍의 집합으로 다루는 법과, 같음의 일반화인 동치관계가 집합을 겹치지 않는 조각으로 나누는 모습.
concepts:
  - cartesian-product
  - relation
  - properties-of-relations
  - equivalence-relation
  - equivalence-class
  - equivalence-classes-equal-iff-related
  - partition
  - equivalence-classes-form-a-partition
  - congruence-modulo-n
  - congruence-is-an-equivalence-relation
---

"$3 < 5$", "$x = y$", "$A \subseteq B$"처럼 수학에는 두 대상 사이의 관계를 말하는 문장이 끝없이 나옵니다. 이 단원은 그런 문장 하나하나를 따지는 대신, 관계 자체를 하나의 집합으로 다루는 방법을 배웁니다. 그 재료가 [[cartesian-product]]입니다. 순서쌍은 집합과 달리 성분의 순서를 구별하므로, "$x$가 $y$보다 작다"처럼 방향이 있는 문장을 담을 수 있습니다. 그다음 [[relation]]은 곱집합 $A \times A$의 부분집합으로 정의됩니다.

관계가 집합이 되면 집합의 말로 관계의 성질을 물을 수 있습니다. [[properties-of-relations]]의 세 성질은 1단원의 조건문과 3단원의 한정 기호로 적히고, 각각이 깨지는 방식도 한정 명제의 부정으로 읽힙니다. 세 성질을 모두 갖춘 것이 [[equivalence-relation]]이고, 같음 $=$이 그 대표입니다. [[equivalence-class]]는 한 원소와 같은 것으로 취급되는 원소를 모은 집합입니다.

이어지는 두 정리가 이 단원의 중심입니다. [[equivalence-classes-equal-iff-related]]는 두 동치류가 같은 것과 두 원소가 관계있는 것이 같은 말임을 보이며, 증명에서 세 성질이 모두 쓰입니다. 이를 바탕으로, 동치류들이 겹치지 않고 $A$를 덮는다는 것이 [[equivalence-classes-form-a-partition]]입니다. 겹치지 않고 덮는다는 말의 정확한 뜻이 [[partition]]에서 정해집니다. 동치관계를 하나 정하면 집합이 겹치지 않는 조각으로 나뉜다는 관점이 여기서 나옵니다.

마지막 두 항목은 대표적인 예를 보입니다. 4단원의 [[divisibility]]를 써서 [[congruence-modulo-n]]을 정의하고, [[congruence-is-an-equivalence-relation]]에서 이것이 동치관계임을 직접 증명으로 보입니다. 그 동치류는 짝수와 홀수의 구분을 일반화한 것이며, 앞의 일반 정리들이 실제 관계에서 어떻게 쓰이는지를 보여 줍니다.
