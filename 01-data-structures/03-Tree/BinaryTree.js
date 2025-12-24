/**
 * ==============================
 * 이진 트리 (Binary Tree)
 * ==============================
 * [정의]
 * - 각 노드가 최대 두 개의 자식을 갖는 트리 자료 구조
 * - 데이터가 정렬되어 있다는 보장이 없음
 *
 * [핵심]
 * Traversal(순회) 알고리즘을 구현해야 한다.
 * 주로 재귀를 사용하여 구현한다.
 *
 * [시간 복잡도]
 * 탐색/삽입/삭제 : O(n)
 * 최악의 경우 모든 노드를 확인해야 함.
 */

// Node
export class Node {
  constructor(value) {
    this.value = value; // 현재 노드가 가진 값
    this.left = null; // 왼쪽 자식 노드 참조
    this.right = null; // 오른쪽 자식 노드 참조
  }
}

export class BinaryTree {
  constructor() {
    this.root = null; // 트리의 시작점
  }

  // 깊이 우선 탐색 (DFS) - 스택 / 재귀 사용

  /**
   * 1. 전위 순회
   * 순서 : root -> left -> right
   * 활용 : 트리 구조를 복사할 때 사용
   */
  preOrder(node = this.root, result = []) {
    // Base case : 더 이상 노드가 없으면 null 반환
    if (!node) return result;
    result.push(node.value);
    this.preOrder(node.left, result);
    this.preOrder(node.right, result);
    return result;
  }

  /**
   * 1. 중위 순회
   * 순서 : left -> root -> right
   * 활용 : BST에서 오름차순 정렬된 값을 얻을 때 필수
   */
  inOrder(node = this.root, result = []) {
    if (!node) return result;
    this.inOrder(node.left, result);
    result.push(node.value);
    this.inOrder(node.right, result);
    return result;
  }

  /**
   * 1. 후위 순회
   * 순서 : left -> right -> root
   * 활용 : 자식 노드부터 처리해야 할 때 (트리 삭제)
   */
  postOrder(node = this.root, result = []) {
    if (!node) return result;
    this.postOrder(node.left, result);
    this.postOrder(node.right, result);
    result.push(node.value);
    return result;
  }

  /**
   * 4. 레벨 순회 (BFS)
   * 순서 : 층별로 탐색
   * 활용 : 최단 경로 찾기, 층별 합계 구하기
   */
  bfs() {
    const result = [];
    if (!this.root) return result;

    const queue = [this.root]; // 큐 초기화 (root 객체)

    // ex) [{1,2,3,4,5,6,7}]
    //       n l r l r l r
    while (queue.length > 0) {
      const current = queue.shift(); // 앞에서 꺼내기, JS 배열 => 스택구조
      result.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return result;
  }
}
