---
title: 고윳값과 대각화
summary: 선형사상의 고윳값과 고유벡터, 기저에 관한 행렬과 기저 변환, 닮은 행렬을 정의하고, 대각화 가능할 조건, 서로 다른 고윳값의 고유벡터의 일차독립, 삼각행렬의 고윳값, 고윳값이 없거나 대각화할 수 없는 행렬의 예를 다룬다.
concepts:
  - eigenvalue-and-eigenvector
  - matrix-in-bases
  - change-of-basis-and-similarity
  - diagonalizable
  - diagonalizable-iff-eigenbasis
  - eigenvectors-of-distinct-eigenvalues
  - eigenvalues-of-triangular-matrix
  - eigenvalue-examples
---

선형사상 $T : V \to V$를 이해하는 한 가지 방법은 $T$가 방향을 바꾸지 않고 배율만 곱하는 벡터를 찾는 것입니다. 이 단원은 그런 벡터와 배율, 곧 고유벡터와 고윳값을 다루고, 기저를 잘 고르면 선형사상의 행렬이 대각행렬이 되는지를 묻습니다. 넷째 단원의 행렬과 여섯째 단원의 차원이 같은 공간 사이의 선형사상에 관한 결과를 주로 쓰며, 일곱째 단원의 행 연산과 소거법은 쓰지 않습니다. 이 강의는 행렬식과 다항식, 복소수를 다루지 않으므로, 고윳값을 일반적으로 구하는 방법이나 고윳값이 있는지를 일반적으로 판정하는 방법은 이 단원에서도 다루지 않습니다.

처음 네 항목은 정의입니다. [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]는 고윳값을 "$T - \lambda i_V$가 단사가 아니다"로 바꾸어 앞 단원의 결과와 잇습니다. 일반 벡터공간의 선형사상을 행렬로 적으려면 기저가 필요하므로, [[matrix-in-bases|기저에 관한 선형사상의 행렬]]에서 좌표벡터와 기저에 관한 행렬을 정의합니다. [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]은 기저를 바꿀 때 행렬이 어떻게 바뀌는지를 보이고, 그 꼴에서 닮은 행렬을 정의하며, 닮은 행렬은 고윳값이 같음을 행렬식 없이 증명합니다. [[diagonalizable|대각화 가능]]은 대각행렬과 대각화 가능을 행렬과 선형사상 양쪽에서 정의하고 두 정의가 맞물림을 보입니다.

뒤의 네 항목은 정리입니다. [[diagonalizable-iff-eigenbasis|대각화와 고유벡터의 기저]]는 대각화 가능한 것이 정확히 고유벡터로 된 기저가 있을 때임을 보입니다. [[eigenvectors-of-distinct-eigenvalues|서로 다른 고윳값의 고유벡터]]는 서로 다른 고윳값에 속하는 고유벡터들이 일차독립임을 보이고, 차원만큼 긴 서로 다른 고윳값의 열이 있으면 대각화 가능하다는 충분조건을 얻습니다. [[eigenvalues-of-triangular-matrix|삼각행렬의 고윳값]]은 고윳값을 대각성분에서 바로 읽을 수 있는 경우입니다. 마지막 [[eigenvalue-examples|고윳값이 없는 행렬과 대각화할 수 없는 행렬]]은 고윳값이 없는 행렬과, 고윳값이 있어도 대각화할 수 없는 행렬의 예를 보입니다. 고윳값이 없는 예는 실수의 제곱의 합에 관한 사실 하나를 증명 없이 받아들이고 그 사실을 진술에 밝혀 둡니다.
