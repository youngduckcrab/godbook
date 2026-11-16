---
title: 일차결합과 기저
summary: 벡터의 유한 합을 정의하고, 일차결합과 생성, 일차독립, 기저를 배운 뒤 ℝⁿ 의 표준기저, 일차종속의 판정, 기저의 동치 조건, 생성하는 열에서 기저 뽑기를 증명한다.
concepts:
  - finite-sum-of-vectors
  - linear-combination-and-span
  - linear-independence
  - basis
  - standard-basis
  - linear-dependence-criterion
  - basis-iff-independent-and-spanning
  - independent-list-extension
  - spanning-list-contains-basis
---

앞 단원은 벡터와 부분공간이 무엇인지 정했습니다. 이 단원은 벡터 몇 개로 공간 전체나 부분공간을 어떻게 나타내는지를 다룹니다. 그러려면 먼저 "벡터 여러 개를 더한다"가 무엇인지 정해야 합니다. 벡터의 덧셈은 두 벡터 사이의 연산이므로, [[finite-sum-of-vectors|벡터의 유한 합]]이 앞에서부터 하나씩 더하는 정의와 뒤에서 계속 쓸 계산 규칙을 줍니다. 벡터의 모임은 같은 벡터가 되풀이될 수 있는 열로 다루고, 항이 없는 열(빈 열)의 합은 영벡터로 정합니다.

이 합으로 [[linear-combination-and-span|일차결합과 생성]]이 정해집니다. 열의 생성은 그 열의 항을 모두 포함하는 가장 작은 부분공간입니다. [[linear-independence|일차독립]]은 반대쪽에서 "겹치는 벡터가 없다"를 말합니다. 그다음 [[basis|기저]]가 두 성질을 모아, 모든 벡터가 계수의 열 하나로 표현되는 열로 정의됩니다. 기저의 정의는 존재와 유일성이라는 두 조건이고, 일차독립과 생성이 각각 그 한쪽이라는 것은 단원 후반에서 증명합니다.

후반은 기저를 다루는 도구입니다. [[standard-basis|표준기저]]는 가장 먼저 만나는 구체적인 기저입니다. [[linear-dependence-criterion|일차종속의 판정]]은 일차종속인 열에서 한 항이 나머지로 만들어짐을 보이고, [[basis-iff-independent-and-spanning|기저의 동치 조건]]은 존재와 유일성이 생성과 일차독립에 대응함을 보입니다. 마지막 두 항목은 열을 줄이거나 늘리는 방법입니다. [[independent-list-extension|일차독립인 열에 벡터 덧붙이기]]는 어떤 벡터를 덧붙이면 독립이 유지되는지를, [[spanning-list-contains-basis|생성하는 열에서 기저 뽑기]]는 생성하는 열에서 항을 지워 기저를 얻는 것을 보입니다.

이 단원은 생성하는 열이 있으면 기저도 있다는 데까지 다루지만, 기저의 길이가 기저에 따라 같은지는 묻지 않습니다. 그 질문은 뒤의 차원 단원에서 다룹니다.
