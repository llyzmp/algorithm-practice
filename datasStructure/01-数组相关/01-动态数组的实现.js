/**
 * 1. 动态数组实现
 */

class DynamicArray {
  // 构造器
  constructor(initCapacity = 2) {
    if(initCapacity <= 0) {
      throw new Error('初始化容量至少大于0')
    }
    // 当前元素个数
    this.size = 0
    // 数组容量
    this.capacity = initCapacity
    // 实际存储数据的数组
    this.data = new Array(this.capacity)
    // 初始化所有位置的值为undefined
    for(let i = 0; i < this.capacity; i++) {
      this.data[i] = undefined
    }
  }
  // 设置指定索引的值
  get(index) {
    this._checkIndexBounds(index)
    return this.data[index]
  }
  // 设置指定位置的值
  set(index, value) {
    this._checkIndexBounds(index)
    this.data[index] = value
    return this  // 可以链式调用
  }
  // 边界检查
  _checkIndexBounds(index) {
    if(index < 0 || index > this.capacity) {
      throw new Error(`index: ${index} 超出数组范围`)
    }
  }
  // 获取当前元素数量
  getSize() {
    return this.size
  }
  // 获取当前总容量
  getCapacity() {
    return this.capacity
  }
  // 判断数组是否为空
  isEmpty() {
    return this.size === 0
  }

  // 在末尾添加元素
  push(value) {
    // 1. 检查是否需要扩容
    if(this.size === this.capacity) {
      this._resize(this.capacity * 2) // 容量翻倍
    }
    // 2. 添加元素
    this.data[this.size] = value
    this.size++
    return this
  }
  // 调整数组容量
  _resize(newCapacity) {
    // 1. 检查newCapacity是否符合
    if(newCapacity < 0) {
      throw new Error('扩容新容量至少大于0')
    }
    // 2. 创建新容量的数组
    const newData = new Array(newCapacity)
    // 3. 初始化新容量各个位置的值
    for(let i = 0; i < newCapacity; i++) {
      newData[i] = undefined
    }
    // 4. 把原来数组的值复制到新数组
    for(let i = 0; i < this.size; i++) {
      newData[i] = this.data[i]
    }
    this.data = newData
    this.capacity = newCapacity
  }
  // 删除元素
  pop() {
    // 1.如果数组为空，直接返回undefined
    if(this.isEmpty()) {
      return undefined
    }
    // 获取最后一个元素
    const ret = this.data[this.size - 1]
    // 2.删除最后一个元素
    this.data[this.size - 1] = undefined
    this.size--
    // 3. 缩容操作,当容量等于原来的1/4时，缩小一半
    if(this.size > 0 && this.size === Math.floor(this.capacity / 4)) {
      this._resize(Math.floor(this.capacity / 2))
    }
    return ret
  }
  // 删除指定索引的元素
  removeAt(index) {
    // 先检查索引边界
    this._checkIndexBounds(index)
    // 获取要删除的元素
    const ret = this.data[index]
    // 移动数据
    for(let i = index; i < this.size; i++) {
      this.data[i] = this.data[i + 1]
    }
    this.size--
    this.data[this.size] = undefined // 清空最后一个元素
    // 缩容操作，当容量等于原来的1/4时，减少一半
    if(this.size > 0 && this.size === Math.floor(this.capacity / 4)) {
      this._resize(Math.floor(this.capacity / 2))
    }
    return ret
  }
  // 指定索引处插入元素
  insertAt(index, value) {
    // 检查边界
    this._checkIndexBounds(index)
    // 检查是否需要扩容
    if(this.size === this.capacity) {
      this._resize(this.capacity * 2)
    }
    // 移动数据
    for(let i = this.size; i > index; i--) {
      this.data[i] = this.data[i - 1]
    }
    // 插入元素
    this.data[index] = value
    this.size++
    return this
  }
  // 查找索引
  indexOf(value) {
    for(let i = 0; i < this.size; i++) {
      if(this.data[i] === value) {
        return i
      }
    }
    return -1
  }
  // 判断是否包含某个元素
  contains(value) {
    return this.indexOf(value) !== -1
  }
  // 转换为普通数组
  toArray() {
    const retult = []
    for(let i = 0; i < this.size; i++) {
      result.push(this.data[i])
    }
    return retult
  }
  // 重写toString方法
  toString() {
    if(this.isEmpty()) {
      return 'DynamicArray []'
    }
    let res = 'DynamicArray ['
    for(let i = 0; i < this.size; i++) {
      res += this.data[i]
      if(i !== this.size - 1) {
        res += ', '
      }
    }
    res += ']'
    return res
  }
}


const result = new DynamicArray(10)
console.log('初始数组容量：', result.getCapacity())  // 10
// for(let i = 0; i < 15; i++) {
//   result.push(i)
//   console.log(`添加元素 ${i} 后，数组容量：`, result.getCapacity())
// }
// 删除元素测试
// for(let i = 0; i < 12; i++) {
//   result.push(i)
// }
// console.log('当前数组容量：', result.getCapacity())  // 20
// for(let i = 0; i < 10; i++) {
//   result.pop()
//   console.log(`删除元素后，数组容量：`, result.getCapacity())
// } 
// 测试insertAt
// for(let i = 0; i < 5; i++) {
//   result.push(i)
// }
// console.log('当前数组：', result.toString())  // DynamicArray [0, 1, 2, 3, 4]
// result.insertAt(2, 100)
// console.log('在索引2处插入100后，数组：', result.toString())  // DynamicArray [0, 1, 100, 2, 3, 4]

// 测试removeAt
// for(let i = 0; i < 5; i++) {
//   result.push(i)
// }
// console.log('当前数组：', result.toString())  // DynamicArray [0, 1, 2, 3, 4]
// result.removeAt(2)
// console.log('删除索引2处元素后，数组：', result.toString())  // DynamicArray [0, 1, 3, 4]

// 测试indexOf和contains
for(let i = 0; i < 5; i++) {
  result.push(i)
}
console.log('当前数组：', result.toString())  // DynamicArray [0, 1, 2, 3, 4]
console.log('元素3的索引：', result.indexOf(3))  // 3
console.log('数组是否包含元素10：', result.contains(10))  // false
console.log('数组是否包含元素4：', result.contains(4))  // true