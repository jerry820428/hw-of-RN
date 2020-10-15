
import React, { useState } from 'react';

import MyGame from './src/components/Button/MyButton';


export default function App() {

  const [count, setCount] = useState(0)
  const [rank, setRank] = useState('')
  const addValueRange = [1, 5, 10]
  const [type, setType] = useState(true)

  const changeEvaluate = (num) => {
    setCount(count => count + num)

    if (count + num < 10) {
      setRank('加油加油，這只是一時的')
    }
    else if (count + num >= 10 && count + num < 20) {
      setRank('不錯喔! 越來越好了')
    }
    else if (count + num >= 20 && count + num < 30) {
      setRank('我都開始羨慕你了呢')
    }
    else if (count + num >= 30 && count + num < 50) {
      setRank('越來越完美了')
    }
    else {
      setRank('你可能有點沉浸在裡面了，請暫時關閉這支App')
    }
  }
  if (type === true) {
    return (
      <MyGame
        wish={'我的肌肉量'}
        comment={rank}
        sumValue={count}
        addValue1={addValueRange[0]}
        addValue2={addValueRange[1]}
        addValue3={addValueRange[2]}
        press1={() => changeEvaluate(addValueRange[0])}
        press2={() => changeEvaluate(addValueRange[1])}
        press3={() => changeEvaluate(addValueRange[2])}
        press4={() => setCount(0)}
        changeType={() => setType(false)}
      />
    );
  }
  else {
    return (
      <MyGame
        wish={'別人的脂肪量'}
        comment={rank}
        sumValue={count}
        addValue1={addValueRange[0]}
        addValue2={addValueRange[1]}
        addValue3={addValueRange[2]}
        press1={() => changeEvaluate(addValueRange[0])}
        press2={() => changeEvaluate(addValueRange[1])}
        press3={() => changeEvaluate(addValueRange[2])}
        press4={() => setCount(0)}
        changeType={() => setType(true)}
      />
    );
  }
}

